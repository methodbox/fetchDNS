//  create our view in Vue.js
const dnsView = new Vue({
  el: '#dns',
  data: {
    message: '',
    domain: '',
    soaRecs: [{soaRec: {value: '',TTL: ''}}],
    aRecs: [{aRec: {value: '',TTL: ''}}],
    nsRecs: [{nsRec: {value: '',TTL: ''}}],
    mxRecs: [{mxRec: {value: '',TTL: ''}}],
    txtRecs: [{txtRec: {value: '',TTL: ''}}]
  },
  methods: {
    getDNS: function(event) {//  fetch method - get our data on-click
      event.preventDefault()//  stop form from refreshing page
      let searchData = document.getElementById('dns-search-input')//  get our search field value
      dnsView.message = searchData.value//  set our Vue message: to the search value
      let allDNS = 'https://dns.google.com/resolve?name=' + searchData.value + '&type=ANY'//  define our query
      console.log('Querying DNS')
      fetch(allDNS)//  get all the DNS
        .then((resp) => resp.json())
        .then((data) => {
          let dns = data.Answer
          console.log(data.Answer)
          dnsView.soaRecs = []//  set our data fields to empty arrays to avoid displaying empty fields
          dnsView.aRecs = []
          dnsView.nsRecs = []
          dnsView.mxRecs = []
          dnsView.txtRecs = []
        for(let i = 0; i < data.Answer.length; i++){
          if(data.Answer[i].type === 1){
            dnsView.aRecs.push({aRec: {value: data.Answer[i].data, TTL: data.Answer[i].TTL}})
          }// A records
          if(data.Answer[i].type === 6){
            dnsView.soaRecs.push({soaRec: {value: data.Answer[i].data, TTL: data.Answer[i].TTL}})
          }// SOA records
          if(data.Answer[i].type === 2){
            dnsView.nsRecs.push({nsRec: {value: data.Answer[i].data, TTL: data.Answer[i].TTL}})
          }// NS Records
          if(data.Answer[i].type === 15) {
            dnsView.mxRecs.push({mxRec: {
              value: data.Answer[i].data.substr(2) + " " + "Priority: " + data.Answer[i].data.substr(0, 1),
              TTL: data.Answer[i].TTL}
            })
          }// MX Records

          if(data.Answer[i].type === 16) {
            dnsView.txtRecs.push({txtRec: {value: data.Answer[i].data, TTL: data.Answer[i].TTL}})
          }// TXT Records
        }
      })
      .catch(function(error) {
        console.log(error)//  log any errors to the console
      })
    }
  }
})
