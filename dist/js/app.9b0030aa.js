(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/timetracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"39f3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("5530"),s=(n("159b"),n("a4d3"),n("e01a"),n("a434"),n("ac1f"),n("1276"),n("2f62"));i["a"].use(s["a"]);var a=new s["a"].Store({state:{times:[]},getters:{totals:function(t){var e={};return t.times.forEach((function(t){"undefined"===typeof e[t.description]&&(e[t.description]=0),e[t.description]+=t.total})),e},roundedTotals:function(t,e){var n=Object(r["a"])({},e["totals"]);for(var i in n)n[i]={total:n[i],rounded:c(n[i])};return n}},actions:{addTime:function(t,e){var n=t.state,i=t.commit,r=n.times;e.total=o(e.start,e.end),r.push(e),i("setTimes",r)},updateTime:function(t,e){var n=t.state,i=t.commit,r=e.index,s=e.time,a=n.times;a[r]&&(a[r]=s),s.total=o(s.start,s.end),i("setTimes",a)},deleteTime:function(t,e){var n=t.state,i=t.commit,r=n.times;r[e]&&r.splice(e,1),i("setTimes",r)}},mutations:{setTimes:function(t,e){t.times=e}}}),o=function(t,e){var n=t.split(":"),i=e.split(":"),r=parseInt(60*n[0])+parseInt(n[1]),s=60*parseInt(i[0])+parseInt(i[1]);return s-r},c=function(t){return t<15?15:15*Math.round(t/15)},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("table",{staticClass:"table"},[t._m(0),n("tbody",[t._l(t.times,(function(e,i){return n("time-row",{key:"time-row-"+i,attrs:{time:e},on:{change:function(e){return t.$store.dispatch("updateTime",{index:i,time:e})}}},[n("Button",{attrs:{variant:"danger",display:"block"},on:{click:function(e){return t.$store.dispatch("deleteTime",i)}}},[t._v("Delete")])],1)})),n("time-row",{attrs:{time:{start:t.start,end:t.end,description:t.description}},on:{change:t.setForm}},[n("Button",{directives:[{name:"show",rawName:"v-show",value:t.start&&!t.end,expression:"start && !end"}],attrs:{variant:"danger",display:"block"},on:{click:t.stop}},[t._v("Stop")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.isValid,expression:"isValid"}],attrs:{variant:"success",display:"block"},on:{click:t.addTime}},[t._v("Add")])],1)],2)])]),n("div",{staticClass:"totals"},[n("table",[t._m(1),n("tbody",t._l(t.roundedTotals,(function(e,i){return n("tr",{key:"total-"+i},[n("td",[t._v(t._s(i))]),n("td",[n("Time",{attrs:{time:e.total}})],1),n("td",[n("Time",{attrs:{time:e.rounded}})],1)])})),0),n("tfoot",{staticClass:"font-weight-bold"},[n("tr",[n("td",[t._v("Total")]),n("td",[n("Time",{attrs:{time:t.totalTime("total")}})],1),n("td",[n("Time",{attrs:{time:t.totalTime("rounded")}})],1)])])]),n("Button",{directives:[{name:"show",rawName:"v-show",value:Object.keys(t.times).length,expression:"Object.keys(times).length"}],attrs:{display:"block",variant:"danger"},on:{click:function(e){return t.clearTimes()}}},[t._v("Clear All")])],1)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Description")]),n("th",[t._v("Start")]),n("th",[t._v("End")]),n("th",[t._v("Total")]),n("th")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Description")]),n("th",[t._v("Total")]),n("th",[t._v("Rounded Total")])])])}],l=(n("d81d"),n("07ac"),n("4d90"),n("d3b7"),n("25f0"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("Input",{model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),n("td",[n("Input",{attrs:{type:"time"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1),n("td",[n("Input",{attrs:{type:"time"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1),n("td",[n("Time",{attrs:{time:t.total}})],1),n("td",{staticClass:"action"},[t._t("default")],2)])}),p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.formattedTime))])},f=[],h=(n("a9e3"),{name:"Time",props:{time:{type:[Number,String],required:!0}},computed:{formattedTime:function(){return""===this.time?"":"".concat(Math.floor(this.time/60).toString().padStart(2,0),":").concat(Math.abs(this.time%60).toString().padStart(2,0))}}}),v=h,b=n("2877"),T=Object(b["a"])(v,m,f,!1,null,null,null),y=T.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},_=[],w=(n("466d"),{model:{prop:"value",event:"input"},props:{type:{type:String,default:"text",validator:function(t){return t.match(/(text|time)/)}},value:{default:""}}}),O=w,j=(n("6888"),Object(b["a"])(O,g,_,!1,null,"814094b8",null)),S=j.exports,k={name:"TimeRow",components:{Time:y,Input:S},props:{time:{type:Object,default:function(){return{description:"",start:"",end:""}}}},computed:{description:{get:function(){return this.time.description},set:function(t){this.$emit("change",{description:t,start:this.start,end:this.end})}},start:{get:function(){return this.time.start},set:function(t){this.$emit("change",{description:this.description,start:t,end:this.end})}},end:{get:function(){return this.time.end},set:function(t){this.$emit("change",{description:this.description,start:this.start,end:t})}},total:function(){if(!this.state&&!this.end)return" ";var t=this.start.split(":"),e=this.end.split(":"),n=parseInt(60*t[0])+parseInt(t[1]),i=60*parseInt(e[0])+parseInt(e[1]);return i-n}}},x=k,$=(n("5fca"),Object(b["a"])(x,l,p,!1,null,"6208434b",null)),I=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.variant,t.display],on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},M=[],N={props:{variant:{type:String,default:"primary",validatior:function(t){t.match(/(primary|success|danger)/)}},display:{type:String,default:"inline"}}},P=N,C=(n("8274"),Object(b["a"])(P,E,M,!1,null,null,null)),B=C.exports,D={name:"App",components:{TimeRow:I,Time:y,Button:B},data:function(){return{description:"",start:"",end:""}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["c"])(["times"])),Object(s["b"])({totals:"totals",roundedTotals:"roundedTotals"})),{},{isValid:function(){return this.description&&this.start&&this.end}}),methods:{totalTime:function(t){return Object.values(this.roundedTotals).map((function(e){return e[t]})).reduce((function(t,e){return t+e}),0)},clearTimes:function(){confirm("Are you sure?")&&this.$store.commit("setTimes",[])},addTime:function(){this.isValid?(this.$store.dispatch("addTime",{description:this.description,start:this.start,end:this.end}),this.resetForm()):alert("Description, start and end time required.")},resetForm:function(){this.start="",this.end="",this.description=""},setForm:function(t){this.start=t.start,this.end=t.end,this.description=t.description},setNowTime:function(t){var e=new Date,n=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0");this[t]="".concat(n,":").concat(i)},stop:function(){this.setNowTime("end"),this.isValid&&this.addTime()}}},V=D,A=(n("034f"),Object(b["a"])(V,u,d,!1,null,null,null)),F=A.exports;i["a"].config.productionTip=!1,i["a"].use(s["a"]),a.subscribe((function(t,e){window.localStorage.setItem("times",JSON.stringify(e.times))})),new i["a"]({render:function(t){return t(F)},store:a,beforeCreate:function(){var t=JSON.parse(window.localStorage.getItem("times"))||[];this.$store.commit("setTimes",t)}}).$mount("#app")},"5fca":function(t,e,n){"use strict";n("39f3")},6888:function(t,e,n){"use strict";n("7433")},7433:function(t,e,n){},8274:function(t,e,n){"use strict";n("d277")},"85ec":function(t,e,n){},d277:function(t,e,n){}});
//# sourceMappingURL=app.9b0030aa.js.map