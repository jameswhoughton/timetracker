(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],l=0,m=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/timetracker/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("5f5b"),r=n("b1e0"),o=n("5530"),a=(n("b64b"),n("159b"),n("07ac"),n("a4d3"),n("e01a"),n("1276"),n("ac1f"),n("2f62"));i["default"].use(a["a"]);var c=new a["a"].Store({state:{times:{}},getters:{ids:function(t){return Object.keys(t.times)},totals:function(t){var e={};return Object.values(t.times).forEach((function(t){"undefined"===typeof e[t.description]&&(e[t.description]=0),e[t.description]+=t.total})),e},roundedTotals:function(t,e){var n=Object(o["a"])({},e["totals"]);for(var i in n)n[i]={total:n[i],rounded:d(n[i])};return n}},actions:{addTime:function(t,e){var n=t.commit,i=Date.now();e.total=u(e.start,e.end),n("setTime",{id:i,time:e})}},mutations:{setTime:function(t,e){i["default"].set(t.times,e.id,e.time)},deleteTime:function(t,e){i["default"].delete(t.times,e)},setValue:function(t,e){var n=e.id,s=e.type,r=e.value;i["default"].set(t.times[n],s,r),"start"!==s&&"end"!==s||i["default"].set(t.times[n],"total",u(t.times[n].start,t.times[n].end))},setTimes:function(t,e){t.times=e}}}),u=function(t,e){var n=t.split(":"),i=e.split(":"),s=parseInt(60*n[0])+parseInt(n[1]),r=60*parseInt(i[0])+parseInt(i[1]);return r-s},d=function(t){return t<15?15:15*Math.round(t/15)},l=n("ecee"),m=n("c074"),p=n("ad3d"),f=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",[t._l(t.ids,(function(t){return n("time-row",{key:"time-row-"+t,attrs:{id:t}})})),n("time-form")],2)])]),n("div",{staticClass:"col-3"},[n("table",{staticClass:"table"},[t._m(1),n("tbody",t._l(t.roundedTotals,(function(e,i){return n("tr",{key:"total-"+i},[n("td",[t._v(t._s(i))]),n("td",[n("Time",{attrs:{time:e.total}})],1),n("td",[n("Time",{attrs:{time:e.rounded}})],1)])})),0),n("tfoot",{staticClass:"font-weight-bold"},[n("tr",[n("td",[t._v("Total")]),n("td",[n("Time",{attrs:{time:t.totalTime("total")}})],1),n("td",[n("Time",{attrs:{time:t.totalTime("rounded")}})],1)])])]),n("button",{directives:[{name:"show",rawName:"v-show",value:Object.keys(this.$store.state.times).length,expression:"Object.keys(this.$store.state.times).length"}],staticClass:"btn btn-danger w-100 mb-3",on:{click:function(e){return t.clearTimes()}}},[t._v("Clear All")])])])])}),h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Description")]),n("th",[t._v("Start")]),n("th",[t._v("End")]),n("th",[t._v("Total")]),n("th")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Description")]),n("th",[t._v("Total")]),n("th",[t._v("Rounded Total")])])])}],v=(n("13d5"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.start,expression:"start"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.start},on:{input:function(e){e.target.composing||(t.start=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.end,expression:"end"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.end},on:{input:function(e){e.target.composing||(t.end=e.target.value)}}})]),n("td",[n("Time",{attrs:{time:t.total}})],1),n("td",[n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteTime()}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)])])}),b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.formattedTime))])},w=[],T=(n("a9e3"),n("99af"),n("4d90"),n("d3b7"),n("25f0"),{name:"Time",props:{time:{type:Number,required:!0}},computed:{formattedTime:function(){return"".concat(Math.floor(this.time/60).toString().padStart(2,0),":").concat(Math.abs(this.time%60).toString().padStart(2,0))}}}),y=T,_=n("2877"),O=Object(_["a"])(y,g,w,!1,null,null,null),j=O.exports,x={name:"TimeRow",components:{Time:j},props:{id:{type:String,required:!0}},computed:{description:{get:function(){return this.$store.state.times[this.id].description},set:function(t){this.$store.commit("setValue",{id:this.id,type:"description",value:t})}},start:{get:function(){return this.$store.state.times[this.id].start},set:function(t){this.$store.commit("setValue",{id:this.id,type:"start",value:t})}},end:{get:function(){return this.$store.state.times[this.id].end},set:function(t){this.$store.commit("setValue",{id:this.id,type:"end",value:t})}},total:function(){var t=this.start.split(":"),e=this.end.split(":"),n=parseInt(60*t[0])+parseInt(t[1]),i=60*parseInt(e[0])+parseInt(e[1]);return i-n}},methods:{deleteTime:function(){this.$store.commit("deleteTime",this.id)}}},C=x,S=Object(_["a"])(C,v,b,!1,null,null,null),$=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.start,expression:"start"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.start},on:{input:function(e){e.target.composing||(t.start=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.end,expression:"end"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.end},on:{input:function(e){e.target.composing||(t.end=e.target.value)}}})]),n("td"),n("td",{staticClass:"buttons"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.start&&!t.end,expression:"start && !end"}],staticClass:"btn btn-danger",on:{click:function(e){return t.stop()}}},[n("font-awesome-icon",{attrs:{icon:"stop"}})],1),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isValid,expression:"isValid"}],staticClass:"btn btn-success",on:{click:function(e){return t.addTime()}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)])])},k=[],P={name:"TimeForm",data:function(){return{description:"",start:"",end:""}},computed:{started:function(){return this.start.length>0},isValid:function(){return this.description&&this.start&&this.end}},methods:{addTime:function(){this.isValid?(this.$store.dispatch("addTime",{description:this.description,start:this.start,end:this.end}),this.reset()):alert("Description, start and end time required.")},reset:function(){this.start="",this.end="",this.description=""},setNowTime:function(t){var e=new Date,n=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0");this[t]="".concat(n,":").concat(i)},stop:function(){this.setNowTime("end"),this.isValid&&this.addTime()}},watch:{description:function(t){t&&!this.start&&this.setNowTime("start")}}},I=P,V=(n("ee54"),Object(_["a"])(I,N,k,!1,null,"e9b5d4e0",null)),E=V.exports,M={name:"App",components:{TimeRow:$,TimeForm:E,Time:j},computed:Object(o["a"])({},Object(a["b"])({ids:"ids",totals:"totals",roundedTotals:"roundedTotals"})),methods:{totalTime:function(t){return Object.values(this.roundedTotals).map((function(e){return e[t]})).reduce((function(t,e){return t+e}),0)},clearTimes:function(){confirm("Are you sure?")&&this.$store.commit("setTimes",{})}}},D=M,J=(n("034f"),Object(_["a"])(D,f,h,!1,null,null,null)),q=J.exports;i["default"].config.productionTip=!1,l["c"].add(m["a"],m["c"],m["e"],m["b"],m["d"]),i["default"].component("font-awesome-icon",p["a"]),i["default"].use(a["a"]),i["default"].use(s["a"]),i["default"].use(r["a"]),c.subscribe((function(t,e){window.localStorage.setItem("times",JSON.stringify(e.times))})),new i["default"]({render:function(t){return t(q)},store:c,beforeCreate:function(){var t=JSON.parse(window.localStorage.getItem("times"))||{};this.$store.commit("setTimes",t)}}).$mount("#app")},"85ec":function(t,e,n){},e623:function(t,e,n){},ee54:function(t,e,n){"use strict";n("e623")}});
//# sourceMappingURL=app.eb7eb0f3.js.map