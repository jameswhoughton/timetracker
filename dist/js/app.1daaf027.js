(function(t){function e(e){for(var i,o,c=e[0],d=e[1],u=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var d=n[c];0!==r[d]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/timetracker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4023:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r=n("6676"),a=n("5530"),o=(n("159b"),n("a4d3"),n("e01a"),n("a434"),n("5502")),c=(n("ac1f"),n("1276"),function(t,e){var n=t.split(":"),i=e.split(":"),r=parseInt(60*n[0])+parseInt(n[1]),a=60*parseInt(i[0])+parseInt(i[1]);return a-r}),d=function(t){return t<15?15:15*Math.round(t/15)},u=o["a"].createStore({state:{times:[]},getters:{totals:function(t){var e={};return t.times.forEach((function(t){"undefined"===typeof e[t.description]&&(e[t.description]=0),e[t.description]+=t.total})),e},roundedTotals:function(t,e){var n=Object(a["a"])({},e["totals"]);for(var i in n)n[i]={total:n[i],rounded:d(n[i])};return n}},actions:{addTime:function(t,e){var n=t.state,i=t.commit,r=n.times;e.total=c(e.start,e.end),r.push(e),i("setTimes",r)},updateDescription:function(t,e){var n=t.state,i=t.commit,r=e.index,a=e.description;void 0!==n.times[r]&&i("setDescription",{index:r,description:a})},updateStart:function(t,e){var n=t.state,i=t.commit,r=e.index,a=e.start;if(void 0!==n.times[r]){i("setStart",{index:r,start:a});var o=n.times[r],d=c(o.start,o.end);i("setTotal",{index:r,total:d})}},updateEnd:function(t,e){var n=t.state,i=t.commit,r=e.index,a=e.end;if(void 0!==n.times[r]){i("setEnd",{index:r,end:a});var o=n.times[r],d=c(o.start,o.end);i("setTotal",{index:r,total:d})}},deleteTime:function(t,e){var n=t.state,i=t.commit,r=n.times;r[e]&&r.splice(e,1),i("setTimes",r)}},mutations:{setTimes:function(t,e){t.times=e},setDescription:function(t,e){var n=e.index,i=e.description;t.times[n].description=i},setStart:function(t,e){var n=e.index,i=e.start;t.times[n].start=i},setEnd:function(t,e){var n=e.index,i=e.end;t.times[n].end=i},setTotal:function(t,e){var n=e.index,i=e.total;t.times[n].total=i}}}),s=(n("b64b"),{class:"container"}),l={class:"table"},p=Object(i["e"])("thead",null,[Object(i["e"])("tr",null,[Object(i["e"])("th",null,"Description"),Object(i["e"])("th",null,"Start"),Object(i["e"])("th",null,"End"),Object(i["e"])("th",null,"Total"),Object(i["e"])("th")])],-1),b=Object(i["d"])("Delete"),f=Object(i["d"])("Stop"),m=Object(i["d"])("Add"),O={class:"totals"},j=Object(i["e"])("thead",null,[Object(i["e"])("tr",null,[Object(i["e"])("th",null,"Description"),Object(i["e"])("th",null,"Total"),Object(i["e"])("th",null,"Rounded Total")])],-1),h={class:"font-weight-bold"},v=Object(i["e"])("td",null,"Total",-1),y=Object(i["d"])("Clear All");function T(t,e,n,r,a,o){var c=Object(i["n"])("Button"),d=Object(i["n"])("time-row"),u=Object(i["n"])("Time"),T=Object(i["o"])("clipboard");return Object(i["h"])(),Object(i["c"])("div",s,[Object(i["e"])("div",null,[Object(i["e"])("table",l,[p,Object(i["e"])("tbody",null,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.times,(function(e,n){return Object(i["h"])(),Object(i["c"])(d,{key:n,description:e.description,"onUpdate:description":function(e){return t.$store.dispatch("updateDescription",{index:n,description:e})},start:e.start,"onUpdate:start":function(e){return t.$store.dispatch("updateStart",{index:n,start:e})},end:e.end,"onUpdate:end":function(e){return t.$store.dispatch("updateEnd",{index:n,end:e})},total:e.total},{default:Object(i["s"])((function(){return[Object(i["e"])(c,{variant:"danger",display:"block",onClick:function(e){return t.$store.dispatch("deleteTime",n)}},{default:Object(i["s"])((function(){return[b]})),_:2},1032,["onClick"])]})),_:2},1032,["description","onUpdate:description","start","onUpdate:start","end","onUpdate:end","total"])})),128)),Object(i["e"])(d,{description:a.description,"onUpdate:description":e[1]||(e[1]=function(t){return a.description=t}),start:a.start,"onUpdate:start":e[2]||(e[2]=function(t){return a.start=t}),end:a.end,"onUpdate:end":e[3]||(e[3]=function(t){return a.end=t}),total:o.total},{default:Object(i["s"])((function(){return[Object(i["t"])(Object(i["e"])(c,{variant:"danger",display:"block",onClick:o.stop},{default:Object(i["s"])((function(){return[f]})),_:1},8,["onClick"]),[[i["q"],a.start&&!a.end]]),Object(i["t"])(Object(i["e"])(c,{variant:"success",display:"block",onClick:o.addTime},{default:Object(i["s"])((function(){return[m]})),_:1},8,["onClick"]),[[i["q"],o.isValid]])]})),_:1},8,["description","start","end","total"])])])]),Object(i["e"])("div",O,[Object(i["e"])("table",null,[j,Object(i["e"])("tbody",null,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.roundedTotals,(function(t,e){return Object(i["h"])(),Object(i["c"])("tr",{key:"total-".concat(e)},[Object(i["t"])(Object(i["e"])("td",{class:"copy"},Object(i["p"])(e),513),[[T,e,"copy"]]),Object(i["e"])("td",null,[Object(i["e"])(u,{time:t.total},null,8,["time"])]),Object(i["e"])("td",null,[Object(i["e"])(u,{time:t.rounded},null,8,["time"])])])})),128))]),Object(i["e"])("tfoot",h,[Object(i["e"])("tr",null,[v,Object(i["e"])("td",null,[Object(i["e"])(u,{time:o.totalTime("total")},null,8,["time"])]),Object(i["e"])("td",null,[Object(i["e"])(u,{time:o.totalTime("rounded")},null,8,["time"])])])])]),Object(i["t"])(Object(i["e"])(c,{onClick:e[4]||(e[4]=function(t){return o.clearTimes()}),display:"block",variant:"danger"},{default:Object(i["s"])((function(){return[y]})),_:1},512),[[i["q"],Object.keys(t.times).length]])])])}n("d81d"),n("07ac"),n("4d90"),n("d3b7"),n("25f0"),n("99af");var g=Object(i["u"])("data-v-3c3d60f8");Object(i["j"])("data-v-3c3d60f8");var S={class:"action"};Object(i["i"])();var w=g((function(t,e,n,r,a,o){var c=Object(i["n"])("Input"),d=Object(i["n"])("Time");return Object(i["h"])(),Object(i["c"])("tr",null,[Object(i["e"])("td",null,[Object(i["e"])(c,{modelValue:n.description,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.$emit("update:description",e)})},null,8,["modelValue"])]),Object(i["e"])("td",null,[Object(i["e"])(c,{type:"time",modelValue:n.start,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.$emit("update:start",e)})},null,8,["modelValue"])]),Object(i["e"])("td",null,[Object(i["e"])(c,{type:"time",modelValue:n.end,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.$emit("update:end",e)})},null,8,["modelValue"])]),Object(i["e"])("td",null,[Object(i["e"])(d,{time:n.total},null,8,["time"])]),Object(i["e"])("td",S,[Object(i["m"])(t.$slots,"default",{},void 0,!0)])])}));n("a9e3");function x(t,e,n,r,a,o){return Object(i["h"])(),Object(i["c"])("span",null,Object(i["p"])(o.formattedTime),1)}var k={name:"Time",props:{time:{type:[Number,String],required:!0}},computed:{formattedTime:function(){return""===this.time?"":"".concat(Math.floor(this.time/60).toString().padStart(2,0),":").concat(Math.abs(this.time%60).toString().padStart(2,0))}}};k.render=x;var V=k,_=Object(i["u"])("data-v-e8d77bf8"),$=_((function(t,e,n,r,a,o){return Object(i["h"])(),Object(i["c"])("input",{type:n.type,value:n.modelValue,onInput:e[1]||(e[1]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,40,["type","value"])})),I=(n("466d"),{name:"Input",emits:["update:modelValue"],props:{type:{type:String,default:"text",validator:function(t){return t.match(/(text|time)/)}},modelValue:{default:""}}});n("8ea3");I.render=$,I.__scopeId="data-v-e8d77bf8";var U=I,C={name:"TimeRow",emits:["update:description","update:start","update:end","update"],components:{Time:V,Input:U},props:{description:{type:String,default:""},start:{type:String,default:null},end:{type:String,default:null},total:{type:Number,default:0}}};n("e819");C.render=w,C.__scopeId="data-v-3c3d60f8";var D=C;function M(t,e,n,r,a,o){return Object(i["h"])(),Object(i["c"])("button",{class:[n.variant,n.display]},[Object(i["m"])(t.$slots,"default")],2)}var N={props:{variant:{type:String,default:"primary",validatior:function(t){t.match(/(primary|success|danger)/)}},display:{type:String,default:"inline"}}};n("d140");N.render=M;var P=N,E={name:"App",components:{TimeRow:D,Time:V,Button:P},data:function(){return{description:"",start:"",end:""}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["c"])(["times"])),Object(o["b"])({totals:"totals",roundedTotals:"roundedTotals"})),{},{isValid:function(){return""!==this.description&&""!==this.start&&""!==this.end},total:function(){return""===this.start||""===this.end?0:c(this.start,this.end)}}),methods:{totalTime:function(t){return Object.values(this.roundedTotals).map((function(e){return e[t]})).reduce((function(t,e){return t+e}),0)},clearTimes:function(){confirm("Are you sure?")&&this.$store.commit("setTimes",[])},addTime:function(){this.isValid?(this.$store.dispatch("addTime",{description:this.description,start:this.start,end:this.end}),this.resetForm()):alert("Description, start and end time required.")},resetForm:function(){this.start="",this.end="",this.description=""},timeNow:function(){var t=new Date,e=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");return"".concat(e,":").concat(n)},stop:function(){this.end=this.timeNow(),this.isValid&&this.addTime()}},watch:{description:function(t){""!==t&&""===this.start&&(this.start=this.timeNow())}}};n("6b8e");E.render=T;var q=E;u.subscribe((function(t,e){window.localStorage.setItem("times",JSON.stringify(e.times))}));var A=Object(i["b"])({render:function(){return Object(i["f"])(q)},beforeCreate:function(){var t=JSON.parse(window.localStorage.getItem("times"))||[];this.$store.commit("setTimes",t)}});A.use(u),A.use(r["a"],{autoSetContainer:!0,appendToBody:!0}),A.mount("#app")},"6b8e":function(t,e,n){"use strict";n("b878")},"8ea3":function(t,e,n){"use strict";n("4023")},"9d47":function(t,e,n){},"9e61":function(t,e,n){},b878:function(t,e,n){},d140:function(t,e,n){"use strict";n("9d47")},e819:function(t,e,n){"use strict";n("9e61")}});
//# sourceMappingURL=app.1daaf027.js.map