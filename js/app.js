//  create our view in Vue.js
const dnsView = new Vue({
  el: '#dns',
  data: {
    message: '',
    domain: '',
    soaRecs: [],
    aRecs: [],
    nsRecs: [],
    mxRecs: [],
    txtRecs: []
  },
  methods: {
    getSearchField: function() {
      let getSearchData = document.getElementById('dns-search-input') //  get our search field value
      let cleanSearchData = getSearchData.value.split('/')
      let searchFilter = cleanSearchData.filter((domain) => {
        if (domain !== 'https:' && domain !== 'http:' && domain !== '') {
          dnsView.getDNS(domain)
        }
      })
    },
    getDNS: function(domain) { //  fetch method - get our data on-click
      dnsView.soaRecs = [] // set all record values to empty to avoid duplicates
      dnsView.aRecs = []
      dnsView.nsRecs = []
      dnsView.mxRecs = []
      dnsView.txtRecs = []
      let allDNS = 'https://dns.google.com/resolve?name=' + domain + '&type=ANY' //  define our query
      fetch(allDNS) //  get all the DNS
        .then((resp) => resp.json())
        .then((data) => {
          let dns = data.Answer
          const dnsFilter = dns.filter((answer) => {
            switch(answer.type) {
              case 1:
                dnsView.aRecs.push({aRec: {value: answer.data, TTL: answer.TTL}})
                break
              case 2:
                dnsView.nsRecs.push({nsRec: {value: answer.data, TTL: answer.TTL}})
                break
              case 5:
                this.getDNS(answer.data)
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
        })
      .catch(function(error) {
        console.log(error) //  log any errors to the console
      })
    },
    clearField: function () {
      document.getElementById('dns-search-input').value = ''
    }
  }
})
