(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),i=a.n(l),s=(a(35),a(21)),r=a(22),m=a(28),o=a(23),d=a(29),A=a(24),E=a.n(A),p=a(25),N=a.n(p),h=a(26),u=a(27),g=a.n(u),w=(a(97),a(98),a(99),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={typeA1:[],typeAAAA28:[],typeNS2:[],typeSoa6:[],typeMx15:[],typeTxt16:[],record:[],domainInput:"",showRecordHeader:!1,noRecordFound:!1},a._onChangeDomain=function(e){a.setState({domainInput:e}),a.state.domainInput.length<=1&&a.setState({typeA1:[],typeAAAA28:[],typeMx15:[],typeNS2:[],typeSoa6:[],typeTxt16:[],showRecordHeader:!1,noRecordFound:!1})},a._onGetDns=function(e){if(E.a.isFQDN(e)){var t="https://dns.google.com/resolve?name=".concat(e,"&type=");["".concat(t,"1"),"".concat(t,"2"),"".concat(t,"28"),"".concat(t,"6"),"".concat(t,"15"),"".concat(t,"16")].forEach(function(e){N()(e).then(function(e){return e.json()}).then(function(e){if(void 0!==e.Answer){var t=[{default:"default"}];a.setState({showRecordHeader:!0}),e.Answer.forEach(function(n){var c=e.Answer?e.Answer:t;switch(n.type){case 1:a.setState({typeA1:c});break;case 2:a.setState({typeNS2:c});break;case 28:a.setState({typeAAAA28:c});break;case 6:a.setState({typeSoa6:c});break;case 15:a.setState({typeMx15:c});break;case 16:a.setState({typeTxt16:c})}})}else a.state.typeA1.length+a.state.typeAAAA28.length+a.state.typeMx15.length+a.state.typeNS2.length+a.state.typeSoa6.length+a.state.typeTxt16.length===0&&a.setState({showRecordHeader:!0,noRecordFound:!0})}).catch(function(e){return console.log(e)})})}},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(h.updateTextFields)()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("h1",{className:"black-text",id:"fetch-logo"},"FETCHDNS"),c.a.createElement("div",{className:"version"},"v2.0.1"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/methodbox/fetchDNS",className:"waves-effect waves-light"},c.a.createElement("img",{src:g.a,alt:"github logo",className:"git-image"})))))),c.a.createElement("div",{className:"container",id:"dns-container"},c.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s7"},c.a.createElement("div",{className:"input-field",id:"domain-input"},c.a.createElement("input",{onChange:function(t){e._onChangeDomain(t.target.value)},id:"domain-name",type:"text",name:"domain-name",className:"validate"}),c.a.createElement("label",{htmlFor:"domain-name"},"Domain Name"))),c.a.createElement("div",{className:"col s5"},c.a.createElement("button",{onClick:function(){return e._onGetDns(e.state.domainInput)},id:"submit-btn",className:"waves-effect waves-light btn btn-purple"},"Fetch DNS",c.a.createElement("i",{className:"material-icons right dns-icon"},"dns"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("table",{className:"responsive-table"},this.state.showRecordHeader?c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"chip-td center-align"},"Record Type"),c.a.createElement("th",{className:"record-th"},"Record"),c.a.createElement("th",{className:"left-align"},"TTL"))):null,c.a.createElement("tbody",null,this.state.typeSoa6.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle red white-text"},"S"),"SOA")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.typeA1.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle blue white-text"},"A"),"A IPv4")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.typeAAAA28.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle blue white-text"},"A"),"AAAA IPv6")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.typeNS2.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle green white-text"},"N"),"Name Server")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.typeMx15.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle yellow white-text"},"M"),"Mail Exchange")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.typeTxt16.map(function(e,t){return c.a.createElement("tr",{key:t,className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle purple white-text"},"T"),"TXT")),c.a.createElement("td",{className:"left td-align"},e.data),c.a.createElement("td",{className:"left-align"},e.TTL))}),this.state.noRecordFound?c.a.createElement("tr",{className:"collection-item"},c.a.createElement("td",{className:"chip-td center-align"},c.a.createElement("div",{className:"chip"},c.a.createElement("div",{className:"chip-circle red white-text"},"X"),"NO RECORD FOUND")),c.a.createElement("td",{className:"left td-align"},"No DNS entries were returned in this query."),c.a.createElement("td",{className:"left-align"},"0")):null))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},30:function(e,t,a){e.exports=a(100)},35:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[30,1,2]]]);
//# sourceMappingURL=main.4860e4bc.chunk.js.map