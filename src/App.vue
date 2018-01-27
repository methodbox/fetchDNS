<template>
  <div id="app">
    <div id="dns" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">FetchDNS</span>
        </div>
      </header>
      <div class="mdl-layout__content">
        <div class="page-content">
          <form method="submit">
            <div>
              <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--6-col mdl-cell--2-offset">
                  <div id="dns-search-form">
                    <div class="mdl-cell mdl-cell--12-col">
                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input class="mdl-textfield__input" type="text" id="dns-search-input" v-on:click='clearField' />
                        <label class="mdl-textfield__label" for="dns-search-input">Enter a Domain</label>
                      </div>
                    </div>
                    <div class="mdl-cell mdl-cell--12-col">
                      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click.prevent="getSearchField" id="dns-button">Fetch DNS</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--10-col-desktop mdl-cell--2-offset-desktop mdl-cell--2-col-tablet">
                  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp eighty-width" id="dns-wrapper">
                    <thead>
                      <tr>
                        <th class="mdl-data-table__cell--non-numeric">Record Type</th>
                        <th>Record Value</th>
                        <th>TTL</th>
                      </tr>
                    </thead>
                    <tbody id="dns-table-body" v-if='searchComplete'>
                      <tr class="dns-table-element" v-for="record in soaRecs" id="soa-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--red-400 mdl-color-text--white">S</span>
                            <span class="mdl-chip__text">SOA</span>
                          </span>
                        </td>
                        <td id="soa">{{record.soaRec.value}}</td>
                        <td id="soa-ttl">{{record.soaRec.TTL}}</td>
                      </tr>
                      <tr class="dns-table-element" v-for="record in aRecs" id="a-record-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--deep-purple-400 mdl-color-text--white">A</span>
                            <span class="mdl-chip__text">A Record</span>
                          </span>
                        </td>
                        <td class="clear-field mdl-textfield--align-left" id="a-record">{{record.aRec.value}}</td>
                        <td>{{record.aRec.TTL}}</td>
                      </tr><!-- -->
                      <tr class="dns-table-element" v-for="record in cNameRecs" id="cName-record-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--purple-200 mdl-color-text--white">CN</span>
                            <span class="mdl-chip__text">CNAME</span>
                          </span>
                        </td>
                        <td class="clear-field mdl-textfield--align-left" id="a-record">{{record.cnRec.value}}</td>
                        <td>{{record.cnRec.TTL}}</td>
                      </tr>
                      <tr class="dns-table-element" v-for="record in nsRecs" id="name-server-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--yellow-500 mdl-color-text--white">NS</span>
                            <span class="mdl-chip__text">Name Server</span>
                          </span>
                        </td>
                        <td id="name-server">{{record.nsRec.value}}</td>
                        <td>{{record.nsRec.TTL}}</td>
                      </tr>
                      <tr class="dns-table-element" v-for="record in mxRecs" id="mx-record-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--cyan-200 mdl-color-text--white">MX</span>
                            <span class="mdl-chip__text">Mail Exchange</span>
                          </span>
                        </td>
                        <td id="mx-record">{{record.mxRec.value}}</td>
                        <td>{{record.mxRec.TTL}}</td>
                      </tr>
                      <tr class="dns-table-element" v-for="record in txtRecs" id="txt-record-list">
                        <td class="mdl-data-table__cell--non-numeric">
                          <span class="mdl-chip mdl-chip--contact">
                            <span class="mdl-chip__contact mdl-color--purple-400 mdl-color-text--white">T</span>
                            <span class="mdl-chip__text">Text Record</span>
                          </span>
                        </td>
                        <td id="txt-record" class="clear-field wrap-text">{{record.txtRec.value}}</td>
                        <td>{{record.txtRec.TTL}}</td>
                      </tr>
                      <tr class="dns-table-element" id="no-records-list" v-if="noRecord"><!-- if no records exist show this -->
                        <td class="mdl-data-table__cell--non-numeric no-records-td">
                          <span class="mdl-chip mdl-chip--contact no-records-chip">
                            <span class="mdl-chip__contact mdl-color--white mdl-color-text--black dmx-text no-records-chip-label">ER</span>
                            <span class="mdl-chip__text no-records-chip-text">No Records</span>
                          </span>
                        </td>
                        <td id="txt-record" class="clear-field wrap-text no-records-value-text">No Records Found (DNS Not Resolved) - Check Name Servers</td>
                        <td id="no-records-ttl">ERROR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
          <div class="mdl-logo">FetchDNS  v{{versionNum}} - rel. {{versionDate}}</div>
        </div>
        <div class="mdl-mini-footer__right-section">
          <ul class="mdl-mini-footer__link-list mdl-layout--spacer">
            <li>Feedback:</li>
            <li>Redbeard</li>
            <li><a href="mailto:email@email.com">mmulholland@godaddy.com</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '',
      domain: '',
      soaRecs: [],
      aRecs: [],
      cNameRecs: [],
      nsRecs: [],
      mxRecs: [],
      txtRecs: [],
      noRecord: false,
      hasRecord: false,
      searchComplete: false,
      versionNum: '1.5.4',
      versionDate: '10.14.2017'
    }
  },
  methods: {
    getSearchField: function () { // grab and parse the value in search field
      let getSearchData = document.getElementById('dns-search-input')
      let cleanSearchData = getSearchData.value.split('/')
      let searchFilter = cleanSearchData.filter((domain) => {
        if (domain !== 'https:' && domain !== 'http:' && domain !== '') {
          this.fetchDNS(domain) // pass just the parsed domain to the dns fetch function
        }
      })
    },
    clearField: function () { // clear our search field on click
      document.getElementById('dns-search-input').value = ''
    },
    clearRecords: function () { // set all record values to empty to avoid duplicates
      this.searchComplete = false
      this.soaRecs = []
      this.aRecs = []
      this.nsRecs = []
      this.cNameRecs = []
      this.mxRecs = []
      this.txtRecs = []
      this.noRecord = false
      this.hasRecord = false
    },
    fetchDNS: function (domain) {
      this.clearRecords()
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
            if (allDNS !== undefined) {
              this.hasRecord = true
              this.dnsFilter(allDNS) // pass each array value to record type filter
            } else if (this.hasRecord === false){
              this.noRecord = true
            }
          })
      })
      this.searchComplete = true
    },
    dnsFilter: function (answer) {
        answer.filter((answer) => { //  filter the record types by value, return the value to our data() along w/TTL value
          switch(answer.type) {
            case 1:
              this.aRecs.push({aRec: {value: answer.data, TTL: answer.TTL}})
              break
            case 2:
              this.nsRecs.push({nsRec: {value: answer.data, TTL: answer.TTL}})
              break
            case 5:
              this.cNameRecs.push({cnRec: {value: answer.data, TTL: answer.TTL}})
              break
            case 6:
              this.soaRecs.push({soaRec: {value: answer.data, TTL: answer.TTL}})
              break
            case 15:
              this.mxRecs.push({mxRec: {value: answer.data.substr(2) + " " + "Priority: " + answer.data.substr(0, 1),TTL: answer.TTL}})
              break
            case 16:
              this.txtRecs.push({txtRec: {value: answer.data, TTL: answer.TTL}})
              break
          }
        })
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
}

.full-width {
  width: 100%;
}

.eighty-width {
  width: 80%;
}

.wrap-text {
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 700px;
}

.mdl-mini-footer {
  padding: 8px 32px;
  min-height: 40px;
}

.no-records-chip {
  background-color: red;
}

.no-records-chip-text {
  font-size: 28px;
  color: #fff;
}

.no-records-chip-label {
  color: red;
}

.no-records-value-text {
  font-size: 24px;
  font-style: italic;
  text-align: center;
  background-color: rgba(0,0,0,.1)
}

.no-records-td {
  background-color: #000;
}

#no-records-ttl {
  background: #000;
  font-weight: bolder;
  color: red;
}

@media screen and (max-width: 960px) {
  #dns-wrapper {
    max-width: 900px;
  }
}
</style>
