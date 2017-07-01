//  create our view in Vue.js
const dnsView = new Vue({
  el: '#dns',
  data: { //  define our simple schema structure
    message: '',
    domain: '',
    soaRecs: [],
    aRecs: [],
    nsRecs: [],
    mxRecs: [],
    txtRecs: [],
    searchComplete: false,
    versionNum: '1.4',
    versionDate: '7.1.2017'
  },
  methods: {
    getSearchField: function () { // grab and parse the value in search field
      let getSearchData = document.getElementById('dns-search-input')
      let cleanSearchData = getSearchData.value.split('/')
      let searchFilter = cleanSearchData.filter((domain) => {
        if (domain !== 'https:' && domain !== 'http:' && domain !== '') {
          dnsView.fetchDNS(domain) // pass just the parsed domain to the dns fetch function
        }
      })
    },
    clearField: function () { // clear our search field on click
      document.getElementById('dns-search-input').value = ''
    },
    clearRecords: function () { // set all record values to empty to avoid duplicates
      dnsView.searchComplete = false
      dnsView.soaRecs = []
      dnsView.aRecs = []
      dnsView.nsRecs = []
      dnsView.mxRecs = []
      dnsView.txtRecs = []
    },
    fetchDNS: function (domain) { //  fetch method - get our data on-click
      dnsView.clearRecords()
      let anyDNS = 'https://dns.google.com/resolve?name=' + domain + '&type=ANY' //  define our query
      fetch(anyDNS) //  get all the DNS
        .then((resp) => resp.json())
        .then((data) => {
          let dns = data.Answer
          if (dns[0].type === 13) { //  pass to specific query if record type 'ANY' is denied (DNSSec)
            this.getSpecificDNS(domain)
          } else {
            this.dnsFilter(dns, domain) //  pass to filter to parse record types
            dnsView.searchComplete = true
          }
        })
      .catch(function(error) {
        console.log(error) //  log any errors to the console
      })
    },
    getSpecificDNS: function (domain) {
      let dnsQuery = 'https://dns.google.com/resolve?name=' +  domain + '&type='
      let aQuery = dnsQuery + '1' //  query by specific record type
      let nsQuery = dnsQuery + '2'
      let soaQuery = dnsQuery + '6'
      let mxQuery = dnsQuery + '15'
      let txtQuery = dnsQuery + '16'
      let dnsQueryArray = [aQuery, nsQuery, soaQuery, mxQuery, txtQuery] // array of specific record types
      dnsQueryArray.map((dns) => { // map array for multiple queries before filtering
        fetch(dns)
          .then((res) => res.json())
          .then((data) => {
            let allDNS = data.Answer
            this.dnsFilter(allDNS) // pass each array value to record type filter
          })
      })
      dnsView.searchComplete = true
    },
    dnsFilter: function (answer) {
      answer.filter((answer) => { //  filter the record types by value, return the value to our data() along w/TTL value
        switch(answer.type) {
          case 1:
            dnsView.aRecs.push({aRec: {value: answer.data, TTL: answer.TTL}})
            break
          case 2:
            dnsView.nsRecs.push({nsRec: {value: answer.data, TTL: answer.TTL}})
            break
          case 6:
            dnsView.soaRecs.push({soaRec: {value: answer.data, TTL: answer.TTL}})
            break
          case 15:
            dnsView.mxRecs.push({mxRec: {value: answer.data.substr(2) + " " + "Priority: " + answer.data.substr(0, 1),TTL: answer.TTL}})
            break
          case 16:
            dnsView.txtRecs.push({txtRec: {value: answer.data, TTL: answer.TTL}})
            break
        }
      })
    }
  }
})
