parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p2Eo":[function(require,module,exports) {
"use strict";var e=this&&this.__await||function(t){return this instanceof e?(this.v=t,this):new e(t)},t=this&&this.__asyncGenerator||function(t,o,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,o||[]),a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){i[e]&&(r[e]=function(t){return new Promise(function(o,n){a.push([e,t,o,n])>1||c(e,t)})})}function c(t,o){try{(n=i[t](o)).value instanceof e?Promise.resolve(n.value.v).then(u,d):l(a[0][2],n)}catch(r){l(a[0][3],r)}var n}function u(e){c("next",e)}function d(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.download=exports.animation_loop=exports.wait_frame=exports.ready=exports.$$=exports.$=void 0,exports.$=((e,t=document.body)=>{var o;return null!==(o=t.querySelector(e))&&void 0!==o?o:void 0}),exports.$$=((e,t=document.body)=>[...t.querySelectorAll(e)]),exports.ready=(()=>new Promise(e=>document.addEventListener("DOMContentLoaded",e,{once:!0}))),exports.wait_frame=(()=>new Promise(requestAnimationFrame)),exports.animation_loop=function(){return t(this,arguments,function*(){for(;;){const t=yield e(exports.wait_frame());yield yield e(t)}})},exports.download=((e,t="")=>{const o=document.createElement("a");o.style.display="none",o.target="_blank",o.download=t,o.href=e,document.body.append(o),o.click(),o.remove()});
},{}],"DQgq":[function(require,module,exports) {
"use strict";var t=this&&this.__await||function(e){return this instanceof t?(this.v=e,this):new t(e)},e=this&&this.__asyncGenerator||function(e,r,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,s=o.apply(e,r||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){s[t]&&(n[t]=function(e){return new Promise(function(r,o){i.push([t,e,r,o])>1||c(t,e)})})}function c(e,r){try{(o=s[e](r)).value instanceof t?Promise.resolve(o.value.v).then(p,f):a(i[0][2],o)}catch(n){a(i[0][3],n)}var o}function p(t){c("next",t)}function f(t){c("throw",t)}function a(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.tiktok=exports.timer=exports.counter=exports.sleep=exports.future=exports.str=exports.id=void 0,exports.id=(t=>t),exports.str=(t=>t.toString()),exports.future=(()=>{let t=void 0,e=void 0;return{promise:new Promise((r,o)=>{t=(t=>r(t)),e=(t=>o(t))}),resolve:t,reject:e}}),exports.sleep=(t=>new Promise(e=>setTimeout(e,t))),exports.counter=(()=>(t=>()=>t+=1)(0)),exports.timer=(()=>{let t=performance.now();return()=>{const e=t;return(t=performance.now())-e}}),exports.tiktok=function(r){return e(this,arguments,function*(){const e=exports.counter();for(;;)yield yield t(e()),yield t(exports.sleep(r))})};
},{}],"dcoe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shuffle=exports.choice=exports.int=exports.float=void 0,exports.float=((t,o)=>Math.random()*(o-t)+t),exports.int=((t,o)=>Math.floor(Math.random()*(o-t+1))+t),exports.choice=(t=>t[exports.int(0,t.length-1)]),exports.shuffle=(t=>{const o=[...t];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o});
},{}],"H8YH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NewMountPoint=exports.NewRNode=exports.Render=void 0,exports.Render=(e=>(t={},...r)=>{const s=t.txt?{...t,textContent:t.txt}:t,{style:a={},dataset:n={},...o}=s,p=r.filter(e=>e),i=(t=>()=>{if(t)return t;const r=t=document.createElement(e);return Object.entries(o).map(([e,t])=>r[e]=t),Object.entries(a).map(([e,t])=>r.style[e]=t),Object.entries(n).map(([e,t])=>r.dataset[e]=t),p.map(e=>r.append(e())),r})(void 0);return Object.assign(i,{tagName:e,props:s,children:p})});const e=(e,t)=>{const r=e(),{style:s={},dataset:a={},...n}=e.props,{style:o={},dataset:p={},...i}=t.props;Object.entries(n).map(([e])=>void 0===i[e]&&(r[e]=void 0)),Object.entries(i).map(([e,t])=>n[e]!==t&&(r[e]=t)),Object.entries(s).map(([e])=>void 0===o[e]&&r.style.removeProperty(e)),Object.entries(o).map(([e,t])=>s[e]!==t&&(r.style[e]=t)),Object.entries(a).map(([e])=>void 0===p[e]&&Reflect.deleteProperty(r.dataset,e)),Object.entries(p).map(([e,t])=>a[e]!==t&&(r.dataset[e]=t))},t=(e,t)=>[...Array(Math.max(e.length,t.length)).keys()].map((r,s)=>[e[s],t[s]]),r=(s,a)=>{e(s,a);const n=s(),o=t(s.children,a.children).map(([e,t])=>e&&!t?e().remove():!e&&t?(n.append(t()),t):e.tagName!==t.tagName?(e().replaceWith(t()),t):r(e,t)).filter(e=>e);return Object.assign(s,{props:a.props,children:o})};exports.NewRNode=((e,t={},...r)=>Object.assign(()=>e,{tagName:e.tagName,props:t,children:r.filter(e=>e)})),exports.NewMountPoint=(e=>{let t=exports.NewRNode(e);return(...s)=>t=r(t,exports.NewRNode(e,{},...s))});
},{}],"pPFF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.join=exports.chunk=exports.unique_by=exports.sort_by_keys=exports.sort_by=exports.group_by=exports.all=exports.any=exports.interlace=exports.zip=exports.has=exports.find_by=exports.count_by=exports.reduce=exports.filter=exports.compact_map=exports.flat_map=exports.map=exports.drop=exports.take=exports.enumerate=exports.generate=exports.range=void 0;const o=require("./prelude");exports.range=function*(o,e,t=1){let r=o;const s=t>0?(o,e)=>o<=e:(o,e)=>o>=e;for(;s(r,e);)yield r,r+=t},exports.generate=function*(o,e){for(const t of exports.range(1,e))yield o()},exports.enumerate=function*(o){let e=0;for(const t of o)yield[e,t],e+=1},exports.take=function*(o,e){for(const[t,r]of exports.enumerate(e)){if(t>=o)break;yield r}},exports.drop=function*(o,e){for(const[t,r]of exports.enumerate(e))t>=o&&(yield r)},exports.map=function*(o,e){for(const t of e)yield o(t)},exports.flat_map=function*(o,e){for(const t of e)yield*o(t)},exports.compact_map=function*(o,e){for(const t of e){const e=o(t);void 0!==e&&(yield e)}},exports.filter=function*(o,e){for(const t of e)o(t)&&(yield t)},exports.reduce=((o,e,t)=>{let r=e;for(const s of t)r=o(r,s);return r}),exports.count_by=((o,e)=>exports.reduce((e,t)=>e+o(t),0,e)),exports.find_by=((o,e)=>{for(const t of e)if(o(t))return t}),exports.has=((o,e)=>{for(const t of e)if(o(t))return!0;return!1}),exports.zip=function*(o,e){const[t,r]=[o[Symbol.iterator](),e[Symbol.iterator]()];for(;;){const[o,e]=[t.next(),r.next()];if(o.done||e.done)break;yield[o.value,e.value]}},exports.interlace=function*(o,e){let t=!0;for(const r of e)t||(yield o),yield r,t=!1},exports.any=((o,e)=>{let t=!1;for(const r of e)t=t||o(r);return t}),exports.all=((o,e)=>{let t=!0;for(const r of e)t=t&&o(r);return t}),exports.group_by=((o,e)=>{const t=new Map;for(const r of e){const e=o(r);t.has(e)||t.set(e,[]),t.get(e).push(r)}return t}),exports.sort_by=((o,e)=>{return[...e].sort((e,t)=>o(e)-o(t))}),exports.sort_by_keys=((o,e)=>{return[...e].sort((e,t)=>{const r=exports.zip(o(e),o(t));for(const[o,s]of r)if(o!==s)return o-s;return 0})}),exports.unique_by=function*(o,e){const t=new Set;for(const r of e){const e=o(r);t.has(e)||(yield r),t.add(e)}},exports.chunk=function*(o,e){let t=[];for(const[r,s]of exports.enumerate(e))r%o==0&&0!==r&&(yield t,t=[]),t.push(s);yield t},exports.join=((e,t)=>{let r="";for(const s of exports.interlace(e,exports.map(o.str,t)))r+=s;return r});
},{"./prelude":"DQgq"}],"iJnK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cn=void 0;const e=require("./iterator");exports.cn=((...t)=>{const o=[];for(const e of t)if("string"==typeof e)o.push(e);else for(const[t,r]of Object.entries(e))r&&o.push(t);return e.join(" ",o)});
},{"./iterator":"pPFF"}],"KzVc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.xmp=exports.wbr=exports.video=exports.ul=exports.u=exports.tt=exports.track=exports.tr=exports.title=exports.time=exports.thead=exports.th=exports.tfoot=exports.textarea=exports.template=exports.td=exports.tbody=exports.table=exports.sup=exports.summary=exports.sub=exports.style=exports.strong=exports.strike=exports.span=exports.spacer=exports.source=exports.small=exports.slot=exports.shadow=exports.select=exports.section=exports.script=exports.samp=exports.s=exports.ruby=exports.rtc=exports.rt=exports.rp=exports.rb=exports.q=exports.progress=exports.pre=exports.plaintext=exports.picture=exports.param=exports.p=exports.output=exports.option=exports.optgroup=exports.ol=exports.object=exports.noscript=exports.noframes=exports.noembed=exports.nobr=exports.nextid=exports.nav=exports.multicol=exports.meter=exports.meta=exports.menuitem=exports.menu=exports.marquee=exports.mark=exports.map=exports.main=exports.listing=exports.link=exports.li=exports.legend=exports.label=exports.keygen=exports.kbd=exports.isindex=exports.ins=exports.input=exports.img=exports.image=exports.iframe=exports.i=exports.html=exports.hr=exports.hgroup=exports.header=exports.head=exports.h6=exports.h5=exports.h4=exports.h3=exports.h2=exports.h1=exports.frameset=exports.frame=exports.form=exports.footer=exports.font=exports.figure=exports.figcaption=exports.fieldset=exports.embed=exports.em=exports.element=exports.dt=exports.dl=exports.div=exports.dir=exports.dialog=exports.dfn=exports.details=exports.del=exports.dd=exports.datalist=exports.data=exports.content=exports.command=exports.colgroup=exports.col=exports.code=exports.cite=exports.center=exports.caption=exports.canvas=exports.button=exports.br=exports.body=exports.blockquote=exports.blink=exports.big=exports.bgsound=exports.bdo=exports.bdi=exports.basefont=exports.base=exports.b=exports.audio=exports.aside=exports.article=exports.area=exports.applet=exports.address=exports.acronym=exports.abbr=exports.a=void 0;const e=require("./noact");exports.a=e.Render("a"),exports.abbr=e.Render("abbr"),exports.acronym=e.Render("acronym"),exports.address=e.Render("address"),exports.applet=e.Render("applet"),exports.area=e.Render("area"),exports.article=e.Render("article"),exports.aside=e.Render("aside"),exports.audio=e.Render("audio"),exports.b=e.Render("b"),exports.base=e.Render("base"),exports.basefont=e.Render("basefont"),exports.bdi=e.Render("bdi"),exports.bdo=e.Render("bdo"),exports.bgsound=e.Render("bgsound"),exports.big=e.Render("big"),exports.blink=e.Render("blink"),exports.blockquote=e.Render("blockquote"),exports.body=e.Render("body"),exports.br=e.Render("br"),exports.button=e.Render("button"),exports.canvas=e.Render("canvas"),exports.caption=e.Render("caption"),exports.center=e.Render("center"),exports.cite=e.Render("cite"),exports.code=e.Render("code"),exports.col=e.Render("col"),exports.colgroup=e.Render("colgroup"),exports.command=e.Render("command"),exports.content=e.Render("content"),exports.data=e.Render("data"),exports.datalist=e.Render("datalist"),exports.dd=e.Render("dd"),exports.del=e.Render("del"),exports.details=e.Render("details"),exports.dfn=e.Render("dfn"),exports.dialog=e.Render("dialog"),exports.dir=e.Render("dir"),exports.div=e.Render("div"),exports.dl=e.Render("dl"),exports.dt=e.Render("dt"),exports.element=e.Render("element"),exports.em=e.Render("em"),exports.embed=e.Render("embed"),exports.fieldset=e.Render("fieldset"),exports.figcaption=e.Render("figcaption"),exports.figure=e.Render("figure"),exports.font=e.Render("font"),exports.footer=e.Render("footer"),exports.form=e.Render("form"),exports.frame=e.Render("frame"),exports.frameset=e.Render("frameset"),exports.h1=e.Render("h1"),exports.h2=e.Render("h2"),exports.h3=e.Render("h3"),exports.h4=e.Render("h4"),exports.h5=e.Render("h5"),exports.h6=e.Render("h6"),exports.head=e.Render("head"),exports.header=e.Render("header"),exports.hgroup=e.Render("hgroup"),exports.hr=e.Render("hr"),exports.html=e.Render("html"),exports.i=e.Render("i"),exports.iframe=e.Render("iframe"),exports.image=e.Render("image"),exports.img=e.Render("img"),exports.input=e.Render("input"),exports.ins=e.Render("ins"),exports.isindex=e.Render("isindex"),exports.kbd=e.Render("kbd"),exports.keygen=e.Render("keygen"),exports.label=e.Render("label"),exports.legend=e.Render("legend"),exports.li=e.Render("li"),exports.link=e.Render("link"),exports.listing=e.Render("listing"),exports.main=e.Render("main"),exports.map=e.Render("map"),exports.mark=e.Render("mark"),exports.marquee=e.Render("marquee"),exports.menu=e.Render("menu"),exports.menuitem=e.Render("menuitem"),exports.meta=e.Render("meta"),exports.meter=e.Render("meter"),exports.multicol=e.Render("multicol"),exports.nav=e.Render("nav"),exports.nextid=e.Render("nextid"),exports.nobr=e.Render("nobr"),exports.noembed=e.Render("noembed"),exports.noframes=e.Render("noframes"),exports.noscript=e.Render("noscript"),exports.object=e.Render("object"),exports.ol=e.Render("ol"),exports.optgroup=e.Render("optgroup"),exports.option=e.Render("option"),exports.output=e.Render("output"),exports.p=e.Render("p"),exports.param=e.Render("param"),exports.picture=e.Render("picture"),exports.plaintext=e.Render("plaintext"),exports.pre=e.Render("pre"),exports.progress=e.Render("progress"),exports.q=e.Render("q"),exports.rb=e.Render("rb"),exports.rp=e.Render("rp"),exports.rt=e.Render("rt"),exports.rtc=e.Render("rtc"),exports.ruby=e.Render("ruby"),exports.s=e.Render("s"),exports.samp=e.Render("samp"),exports.script=e.Render("script"),exports.section=e.Render("section"),exports.select=e.Render("select"),exports.shadow=e.Render("shadow"),exports.slot=e.Render("slot"),exports.small=e.Render("small"),exports.source=e.Render("source"),exports.spacer=e.Render("spacer"),exports.span=e.Render("span"),exports.strike=e.Render("strike"),exports.strong=e.Render("strong"),exports.style=e.Render("style"),exports.sub=e.Render("sub"),exports.summary=e.Render("summary"),exports.sup=e.Render("sup"),exports.table=e.Render("table"),exports.tbody=e.Render("tbody"),exports.td=e.Render("td"),exports.template=e.Render("template"),exports.textarea=e.Render("textarea"),exports.tfoot=e.Render("tfoot"),exports.th=e.Render("th"),exports.thead=e.Render("thead"),exports.time=e.Render("time"),exports.title=e.Render("title"),exports.tr=e.Render("tr"),exports.track=e.Render("track"),exports.tt=e.Render("tt"),exports.u=e.Render("u"),exports.ul=e.Render("ul"),exports.video=e.Render("video"),exports.wbr=e.Render("wbr"),exports.xmp=e.Render("xmp");
},{"./noact":"H8YH"}],"BwW8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Readme=void 0;const t=require("nda/dist/isomorphic/dom"),e=require("../../../src/noact-elements");exports.Readme=(({})=>e.section({id:"readme",className:t.cn("lightly-bordered")},e.div({id:"readme-header",className:t.cn("px-6","py-1")},e.h4({className:"mp-0"},e.i({className:"fas fa-book"}),e.span({txt:" README.md"}))),e.div({id:"readme-body",className:t.cn("px-6","pt-1")},e.h1({},e.a({href:"https://ms-jpq.github.io/noact"},e.strike({txt:"Re"}),e.span({txt:"Noact"}))),e.hr(),e.p({txt:"Noact is a minimal self-rendering Virtual DOM library."}),e.ul({},e.li({},e.b({txt:"Declarative:"}),e.span({txt:"Pretty much like React, without the JSX compilation of course, hence the name."})),e.li({},e.b({txt:"Type safe:"}),e.span({txt:"Noact is completely typesafe, which means you get"}),e.a({txt:"static type checking",href:"https://github.com/ms-jpq/Noact/blob/master/_assets/auto_complete.gif"}),e.span({txt:"for free!"})),e.li({},e.b({txt:"Simple:"}),e.a({txt:"Only 60 lines",href:"https://github.com/ms-jpq/Noact/blob/master/src/noact.ts"}),e.span({txt:"of type declarations & rendering code. (and 10ish lines of code-gen code)"}))),e.hr(),e.h2({txt:"How it feels to write Noact"}),e.img({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/master/_assets/demo.gif"}),e.p({},e.b({txt:"- Explosions -"})),e.p({},e.span({txt:"Even has support for"}),e.b({txt:"style auto complete"})),e.img({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/master/_assets/type_demo.png"}),e.hr(),e.h2({txt:"Source code"}),e.ul({},e.li({},e.a({txt:"Rendering Engine",href:"https://github.com/ms-jpq/noact/tree/master/src"})),e.li({},e.a({txt:"This Page",href:"https://github.com/ms-jpq/noact/tree/master/example"}))))));
},{"nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc"}],"IfIQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.non_empty=void 0,exports.non_empty=(e=>""!==(null!=e?e:""));
},{}],"er62":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoInput=void 0;const e=require("../../../../src/noact-elements"),t=require("nda/dist/isomorphic/dom"),o=require("nda/dist/isomorphic/validation");exports.TodoInput=(({oninput:n,idx:i})=>{const s=`todo-input-${i}`;return e.div({className:t.cn("todo-input","px-6","lab-inp-btn")},e.label({htmlFor:s,txt:"I need to:"}),e.div({className:t.cn("input-group","d-flex","flex-row")},e.input({id:s,className:"flex-grow-1",placeholder:"...",onchange:({target:e})=>{const t=e,{value:i}=t;o.non_empty(i)&&n(i),t.value=""}}),e.button({className:t.cn("clickable","flex-shrink-1")},e.i({className:"fas fa-reply"}))))});
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/validation":"IfIQ"}],"Zdet":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoListing=void 0;const e=require("../../../../src/noact-elements"),s=require("nda/dist/isomorphic/dom"),o=require("nda/dist/isomorphic/iterator");exports.TodoListing=(({ontoggle:t,onremove:i,items:c})=>e.div({className:s.cn("todo-listing","px-6")},e.ol({},...o.map(o=>e.li({className:s.cn("d-grid","grid-col","ac-baseline","ji-start","border-top-solid","border-thin","pt-4","py-1")},e.div({className:s.cn("todo-message","clickable"),onclick:()=>t(o)},e.i({className:s.cn("clickable","todo"===o.status?"far fa-check-square":"fas fa-check-square")}),e.span({txt:o.message})),e.button({className:s.cn("clickable","border-clear","js-end","font-w900"),txt:"×",onclick:()=>i(o)})),c))));
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/iterator":"pPFF"}],"mXUh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoSelect=void 0;const e=require("../../../../src/noact-elements"),t=require("nda/dist/isomorphic/dom");exports.TodoSelect=(({onselect:o,viewing:c})=>e.div({className:t.cn("todo-select","px-6","mt-4")},e.button({className:t.cn({active:"todo"===c}),onclick:()=>o("todo")},e.h4({txt:"Remaining"})),e.button({className:t.cn({active:"done"===c}),onclick:()=>o("done")},e.h4({txt:"Done"})),e.button({className:t.cn({active:"all"===c}),onclick:()=>o("all")},e.h4({txt:"Showall"}))));
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK"}],"iKYQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Todo=void 0;const e=require("nda/dist/isomorphic/dom"),o=require("../../../../src/noact-elements"),t=require("./00_input"),i=require("./02_listing"),s=require("./01_select");exports.Todo=(({oninput:n,onselect:d,ontoggle:c,onremove:r,viewing:l,items:a,idx:m,todo_sections:p,still_todo_count:u})=>o.section({className:e.cn("todo","lightly-bordered")},o.div({className:e.cn("todo-header","d-grid","grid-col","jc-space-between","ai-baseline","px-6")},o.h2({className:e.cn("todo-title","mb-0"),txt:"TODO"}),o.p({className:e.cn("todo-meta","text-right"),txt:`${m} of ${p} synchronized`})),t.TodoInput({oninput:n,idx:m}),s.TodoSelect({onselect:d,viewing:l}),i.TodoListing({ontoggle:c,onremove:r,items:a}),o.p({className:e.cn("todo-info","px-6","my-1"),txt:`${u} items left`})));
},{"nda/dist/isomorphic/dom":"iJnK","../../../../src/noact-elements":"KzVc","./00_input":"er62","./02_listing":"Zdet","./01_select":"mXUh"}],"QjaO":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.MAX_TODOS=exports.MIN_TODOS=void 0,e=[1,100],exports.MIN_TODOS=e[0],exports.MAX_TODOS=e[1];
},{}],"VEPL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BenchmarkControl=exports.Benchmark=void 0;const e=require("nda/dist/isomorphic/dom"),t=require("nda/dist/isomorphic/prelude"),r=require("../../../src/noact-elements"),n=require("../state");exports.Benchmark=(({})=>r.output({className:"benchmark-output"})),exports.BenchmarkControl=(({on_new_bench:a,onrandom:c,todo_sections:o})=>{return r.section({id:"benchmark-control",className:e.cn("d-grid","ai-centre","jc-space-between","lightly-bordered","px-6","py-2","row-gap-1","col-gap-4")},r.h2({id:"benchmark-title",txt:"Benchmark"}),r.div({id:"benchmark-input",className:e.cn("d-flex","ai-baseline","flex-wrap")},r.label({htmlFor:"benchmark-input-input",txt:`Put in ${n.MIN_TODOS}-${n.MAX_TODOS}:`}),r.div({className:e.cn("input-group","d-flex","flex-grow-1")},r.input({id:"benchmark-input-input",type:"number",className:e.cn("flex-grow-1","text-right"),min:t.str(n.MIN_TODOS),max:t.str(n.MAX_TODOS),value:t.str(o),onchange:({target:e})=>{const{value:t}=e;a(parseInt(t))}}),r.button({className:e.cn("clickable","border-thin","flex-shrink-1"),txt:"Random",onclick:c}))),exports.Benchmark({}))});
},{"nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/prelude":"DQgq","../../../src/noact-elements":"KzVc","../state":"QjaO"}],"dY1R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Body=void 0;const o=require("nda/dist/isomorphic/dom"),e=require("../../../src/noact-elements"),n=require("nda/dist/isomorphic/iterator"),t=require("../components/readme"),r=require("../components/todo/todo"),i=require("../components/benchmark");exports.Body=(({todo_sections:s,viewing:d,items:c,on_new_bench:m,onrandom:a,oninput:l,ontoggle:p,onremove:u,onselect:_,still_todo_count:g})=>e.main({className:o.cn("d-grid","row-gap-8")},t.Readme({}),i.BenchmarkControl({todo_sections:s,on_new_bench:m,onrandom:a}),...n.map(o=>r.Todo({idx:o,viewing:d,items:c,oninput:l,onremove:u,onselect:_,ontoggle:p,todo_sections:s,still_todo_count:g}),n.range(1,s))));
},{"nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc","nda/dist/isomorphic/iterator":"pPFF","../components/readme":"BwW8","../components/todo/todo":"iKYQ","../components/benchmark":"VEPL"}],"xj3X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Footer=void 0;const e=require("../../../src/noact-elements");exports.Footer=(({})=>e.footer({},e.p({className:"text-centre"},e.span({txt:"© "}),e.a({txt:"ms-jpq",href:"https://ms-jpq.github.io"}))));
},{"../../../src/noact-elements":"KzVc"}],"bhQh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Header=void 0;const e=require("nda/dist/isomorphic/dom"),r=require("../../../src/noact-elements");exports.Header=(({})=>r.header({className:e.cn("d-grid","text-centre","ji-centre","lightly-bordered","py-8")},r.h1({className:"font-w500",txt:"This Page is Rendered Using Noact"})));
},{"nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc"}],"RczK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Page=void 0;const e=require("./body"),r=require("nda/dist/isomorphic/dom"),t=require("../../../src/noact-elements"),o=require("nda/dist/isomorphic/iterator"),s=require("./footer"),a=require("./header"),i=(e,r,t)=>{switch(e){case"all":return!0;case"todo":return t.last_update>r||"todo"===t.status;case"done":return t.last_update>r||"done"===t.status}};exports.Page=(({last_view_update:d,header:u,body:n,footer:c})=>{const l=[...o.filter(e=>i(n.viewing,d,e),n.items)];return t.div({id:"container",className:r.cn("d-grid","mx-auto","mt-12","row-gap-12")},a.Header(u),e.Body({...n,items:l}),s.Footer(c))});
},{"./body":"dY1R","nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc","nda/dist/isomorphic/iterator":"pPFF","./footer":"xj3X","./header":"bhQh"}],"vR93":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("nda/dist/browser/dom"),t=require("nda/dist/isomorphic/prelude"),s=require("nda/dist/isomorphic/rand"),o=require("../../src/noact"),a=require("./layout/page"),i=require("nda/dist/isomorphic/iterator"),n=require("./state"),d=t.counter(),r=o.NewMountPoint(document.body),u=e=>{switch(e){case"todo":return 1;case"done":return 2;default:throw new Error("invaild status")}},c=e=>i.sort_by_keys(e=>[u(e.status),e.last_update],e),m=c([...i.map(e=>({...e,id:d(),last_update:d()}),s.shuffle([{message:"Printer ran out of juice again",status:"todo"},{message:"Something about neighbour's cat",status:"todo"},{message:"Go to bed before 1AM",status:"todo"},{message:"Craig owes me money?",status:"todo"},{message:"👋Hire me👋",status:"todo"},{message:"Draw a prefect circle",status:"todo"},{message:"Take out trash",status:"done"},{message:"Ask Jenny for penny",status:"done"},{message:"Get groceries",status:"done"},{message:"Download Mob Psycho",status:"done"}]))]),_={todo_sections:1,viewing:{view:"todo",last_update:Date.now()},items:m},w=e=>{switch(e){case"todo":return"done";case"done":return"todo";default:throw new Error("invaild status")}},g=async s=>{const o=t.timer();s(),await t.sleep(0);const a=Math.round(o()),i=e.$$("*").length,n=e.$$(".benchmark-output");for(const e of n)e.value=`rendered ${i} elements in ${a}ms`},l=({todo_sections:e,viewing:t,items:o})=>{const u=i.count_by(e=>"todo"===e.status,o),m={todo_sections:e,viewing:t.view,items:o,onrandom:()=>l({items:o,viewing:t,todo_sections:s.int(n.MIN_TODOS,n.MAX_TODOS)}),on_new_bench:e=>{const s=Math.min(n.MAX_TODOS,Math.max(n.MIN_TODOS,e));l({todo_sections:s,items:o,viewing:t})},oninput:s=>{const a={status:"todo",id:d(),last_update:Date.now(),message:s},i=[...o,a];l({todo_sections:e,items:i,viewing:t})},ontoggle:s=>{const a=[...i.map(e=>({...e,status:e.id===s.id?w(e.status):e.status,last_update:e.id===s.id?Date.now():e.last_update}),o)];l({todo_sections:e,items:a,viewing:t})},onremove:s=>{const a=[...i.filter(e=>e.id!==s.id,o)];l({todo_sections:e,items:a,viewing:t})},onselect:s=>{s!==t.view&&l({todo_sections:e,items:c(o),viewing:{view:s,last_update:Date.now()}})},still_todo_count:u},_={last_view_update:t.last_update,header:{},body:m,footer:{}};g(()=>r(a.Page(_)))};l(_);
},{"nda/dist/browser/dom":"p2Eo","nda/dist/isomorphic/prelude":"DQgq","nda/dist/isomorphic/rand":"dcoe","../../src/noact":"H8YH","./layout/page":"RczK","nda/dist/isomorphic/iterator":"pPFF","./state":"QjaO"}]},{},["vR93"], null)
//# sourceMappingURL=/noact-page/entry.79e6f4ce.js.map