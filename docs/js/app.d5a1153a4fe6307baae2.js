webpackJsonp([1],{M93x:function(t,e,s){"use strict";function a(t){s("cQg4")}var c=s("xJD8"),l=s("R/Sc"),i=s("VU/8"),n=a,d=i(c.a,l.a,!1,n,null,null);e.a=d.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),c=s("M93x");a.a.config.productionTip=!1,new a.a({el:"#app",render:function(t){return t(c.a)}})},"R/Sc":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header",attrs:{id:"dns"}},[t._m(0),t._v(" "),s("div",{staticClass:"mdl-layout__content"},[s("div",{staticClass:"page-content"},[s("form",{attrs:{method:"submit"}},[s("div",[s("div",{staticClass:"mdl-grid"},[s("div",{staticClass:"mdl-cell mdl-cell--6-col mdl-cell--2-offset"},[s("div",{attrs:{id:"dns-search-form"}},[s("div",{staticClass:"mdl-cell mdl-cell--12-col"},[s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},[s("input",{staticClass:"mdl-textfield__input",attrs:{type:"text",id:"dns-search-input"},on:{click:t.clearField}}),t._v(" "),s("label",{staticClass:"mdl-textfield__label",attrs:{for:"dns-search-input"}},[t._v("Enter a Domain")])])]),t._v(" "),s("div",{staticClass:"mdl-cell mdl-cell--12-col"},[s("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent",attrs:{id:"dns-button"},on:{click:function(e){e.preventDefault(),t.getSearchField(e)}}},[t._v("Fetch DNS")])])])])]),t._v(" "),s("div",{staticClass:"mdl-grid"},[s("div",{staticClass:"mdl-cell mdl-cell--10-col-desktop mdl-cell--2-offset-desktop mdl-cell--2-col-tablet"},[s("table",{staticClass:"mdl-data-table mdl-js-data-table mdl-shadow--2dp eighty-width",attrs:{id:"dns-wrapper"}},[t._m(1),t._v(" "),t.searchComplete?s("tbody",{attrs:{id:"dns-table-body"}},[t._l(t.soaRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"soa-list"}},[t._m(2,!0),t._v(" "),s("td",{attrs:{id:"soa"}},[t._v(t._s(e.soaRec.value))]),t._v(" "),s("td",{attrs:{id:"soa-ttl"}},[t._v(t._s(e.soaRec.TTL))])])}),t._v(" "),t._l(t.aRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"a-record-list"}},[t._m(3,!0),t._v(" "),s("td",{staticClass:"clear-field mdl-textfield--align-left",attrs:{id:"a-record"}},[t._v(t._s(e.aRec.value))]),t._v(" "),s("td",[t._v(t._s(e.aRec.TTL))])])}),t._v(" "),t._l(t.cNameRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"cName-record-list"}},[t._m(4,!0),t._v(" "),s("td",{staticClass:"clear-field mdl-textfield--align-left",attrs:{id:"a-record"}},[t._v(t._s(e.cnRec.value))]),t._v(" "),s("td",[t._v(t._s(e.cnRec.TTL))])])}),t._v(" "),t._l(t.nsRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"name-server-list"}},[t._m(5,!0),t._v(" "),s("td",{attrs:{id:"name-server"}},[t._v(t._s(e.nsRec.value))]),t._v(" "),s("td",[t._v(t._s(e.nsRec.TTL))])])}),t._v(" "),t._l(t.mxRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"mx-record-list"}},[t._m(6,!0),t._v(" "),s("td",{attrs:{id:"mx-record"}},[t._v(t._s(e.mxRec.value))]),t._v(" "),s("td",[t._v(t._s(e.mxRec.TTL))])])}),t._v(" "),t._l(t.txtRecs,function(e){return s("tr",{staticClass:"dns-table-element",attrs:{id:"txt-record-list"}},[t._m(7,!0),t._v(" "),s("td",{staticClass:"clear-field wrap-text",attrs:{id:"txt-record"}},[t._v(t._s(e.txtRec.value))]),t._v(" "),s("td",[t._v(t._s(e.txtRec.TTL))])])}),t._v(" "),t.noRecord?s("tr",{staticClass:"dns-table-element",attrs:{id:"no-records-list"}},[t._m(8),t._v(" "),s("td",{staticClass:"clear-field wrap-text no-records-value-text",attrs:{id:"txt-record"}},[t._v("No Records Found (DNS Not Resolved) - Check Name Servers")]),t._v(" "),s("td",{attrs:{id:"no-records-ttl"}},[t._v("ERROR")])]):t._e()],2):t._e()])])])])])])]),t._v(" "),s("footer",{staticClass:"mdl-mini-footer"},[s("div",{staticClass:"mdl-mini-footer__left-section"},[s("div",{staticClass:"mdl-logo"},[t._v("FetchDNS  v"+t._s(t.versionNum)+" - rel. "+t._s(t.versionDate))])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"mdl-layout__header"},[s("div",{staticClass:"mdl-layout__header-row"},[s("span",{staticClass:"mdl-layout-title"},[t._v("FetchDNS")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"mdl-data-table__cell--non-numeric"},[t._v("Record Type")]),t._v(" "),s("th",[t._v("Record Value")]),t._v(" "),s("th",[t._v("TTL")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--red-400 mdl-color-text--white"},[t._v("S")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("SOA")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--deep-purple-400 mdl-color-text--white"},[t._v("A")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("A Record")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--purple-200 mdl-color-text--white"},[t._v("CN")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("CNAME")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--yellow-500 mdl-color-text--white"},[t._v("NS")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("Name Server")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--cyan-200 mdl-color-text--white"},[t._v("MX")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("Mail Exchange")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric"},[s("span",{staticClass:"mdl-chip mdl-chip--contact"},[s("span",{staticClass:"mdl-chip__contact mdl-color--purple-400 mdl-color-text--white"},[t._v("T")]),t._v(" "),s("span",{staticClass:"mdl-chip__text"},[t._v("Text Record")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"mdl-data-table__cell--non-numeric no-records-td"},[s("span",{staticClass:"mdl-chip mdl-chip--contact no-records-chip"},[s("span",{staticClass:"mdl-chip__contact mdl-color--white mdl-color-text--black dmx-text no-records-chip-label"},[t._v("ER")]),t._v(" "),s("span",{staticClass:"mdl-chip__text no-records-chip-text"},[t._v("No Records")])])])}],l={render:a,staticRenderFns:c};e.a=l},cQg4:function(t,e){},xJD8:function(t,e,s){"use strict";e.a={name:"app",data:function(){return{message:"",domain:"",soaRecs:[],aRecs:[],cNameRecs:[],nsRecs:[],mxRecs:[],txtRecs:[],noRecord:!1,hasRecord:!1,searchComplete:!1,versionNum:"1.6",versionDate:"01.26.2018"}},methods:{getSearchField:function(){var t=this,e=document.getElementById("dns-search-input"),s=e.value.split("/");s.filter(function(e){"https:"!==e&&"http:"!==e&&""!==e&&t.fetchDNS(e)})},clearField:function(){document.getElementById("dns-search-input").value=""},clearRecords:function(){this.searchComplete=!1,this.soaRecs=[],this.aRecs=[],this.nsRecs=[],this.cNameRecs=[],this.mxRecs=[],this.txtRecs=[],this.noRecord=!1,this.hasRecord=!1},fetchDNS:function(t){var e=this;this.clearRecords();var s="https://dns.google.com/resolve?name="+t+"&type=";[s+"1",s+"2",s+"6",s+"15",s+"16"].map(function(t){fetch(t).then(function(t){return t.json()}).then(function(t){var s=t.Answer;console.log(t.Answer),console.log(e.hasRecord),void 0!==s?(e.hasRecord=!0,e.noRecord=!1,e.dnsFilter(s)):!1===e.hasRecord&&(e.noRecord=!0)})}),this.searchComplete=!0},dnsFilter:function(t){var e=this;t.filter(function(t){switch(t.type){case 1:e.aRecs.push({aRec:{value:t.data,TTL:t.TTL}});break;case 2:e.nsRecs.push({nsRec:{value:t.data,TTL:t.TTL}});break;case 5:e.cNameRecs.push({cnRec:{value:t.data,TTL:t.TTL}});break;case 6:e.soaRecs.push({soaRec:{value:t.data,TTL:t.TTL}});break;case 15:e.mxRecs.push({mxRec:{value:t.data.substr(2)+" Priority: "+t.data.substr(0,1),TTL:t.TTL}});break;case 16:e.txtRecs.push({txtRec:{value:t.data,TTL:t.TTL}})}})}}}}},["NHnr"]);
//# sourceMappingURL=app.d5a1153a4fe6307baae2.js.map