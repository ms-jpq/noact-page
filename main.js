(()=>{"use strict";const t=t=>(e={},...o)=>{const s=e.txt?{...e,textContent:e.txt}:e,{style:a={},dataset:n={},...i}=s,r=o.filter((t=>t)),c=(l=void 0,()=>{if(l)return l;const e=l=document.createElement(t);return Object.entries(i).map((([t,o])=>e[t]=o)),Object.entries(a).map((([t,o])=>e.style[t]=o)),Object.entries(n).map((([t,o])=>e.dataset[t]=o)),r.map((t=>e.append(t()))),e});var l;return Object.assign(c,{tagName:t,props:s,children:r})},e=(t,o)=>{((t,e)=>{const o=t(),{style:s={},dataset:a={},...n}=t.props,{style:i={},dataset:r={},...c}=e.props;Object.entries(n).map((([t])=>void 0===c[t]&&(o[t]=void 0))),Object.entries(c).map((([t,e])=>n[t]!==e&&(o[t]=e))),Object.entries(s).map((([t])=>void 0===i[t]&&o.style.removeProperty(t))),Object.entries(i).map((([t,e])=>s[t]!==e&&(o.style[t]=e))),Object.entries(a).map((([t])=>void 0===r[t]&&Reflect.deleteProperty(o.dataset,t))),Object.entries(r).map((([t,e])=>a[t]!==e&&(o.dataset[t]=e)))})(t,o);const s=t(),a=(n=t.children,i=o.children,[...Array(Math.max(n.length,i.length)).keys()].map(((t,e)=>[n[e],i[e]]))).map((([t,o])=>t&&!o?t().remove():!t&&o?(s.append(o()),o):t.tagName!==o.tagName?(t().replaceWith(o()),o):e(t,o))).filter((t=>t));var n,i;return Object.assign(t,{props:o.props,children:a})},o=(t,e={},...o)=>Object.assign((()=>t),{tagName:t.tagName,props:e,children:o.filter((t=>t))}),s=t("a"),a=(t("abbr"),t("acronym"),t("address"),t("applet"),t("area"),t("article"),t("aside"),t("audio"),t("b")),n=(t("base"),t("basefont"),t("bdi"),t("bdo"),t("bgsound"),t("big"),t("blink"),t("blockquote"),t("body"),t("br"),t("button")),i=(t("canvas"),t("caption"),t("center"),t("cite"),t("code"),t("col"),t("colgroup"),t("command"),t("content"),t("data"),t("datalist"),t("dd"),t("del"),t("details"),t("dfn"),t("dialog"),t("dir"),t("div")),r=(t("dl"),t("dt"),t("element"),t("em"),t("embed"),t("fieldset"),t("figcaption"),t("figure"),t("font"),t("footer")),c=(t("form"),t("frame"),t("frameset"),t("h1")),l=t("h2"),d=(t("h3"),t("h4")),m=(t("h5"),t("h6"),t("head"),t("header")),p=(t("hgroup"),t("hr")),u=(t("html"),t("i")),g=(t("iframe"),t("image"),t("img")),h=t("input"),f=(t("ins"),t("isindex"),t("kbd"),t("keygen"),t("label")),b=(t("legend"),t("li")),x=(t("link"),t("listing"),t("main")),w=(t("map"),t("mark"),t("marquee"),t("menu"),t("menuitem"),t("meta"),t("meter"),t("multicol"),t("nav"),t("nextid"),t("nobr"),t("noembed"),t("noframes"),t("noscript"),t("object"),t("ol")),v=(t("optgroup"),t("option"),t("output")),y=t("p"),N=(t("param"),t("picture"),t("plaintext"),t("pre"),t("progress"),t("q"),t("rb"),t("rp"),t("rt"),t("rtc"),t("ruby"),t("s"),t("samp"),t("script"),t("section")),_=(t("select"),t("shadow"),t("slot"),t("small"),t("source"),t("spacer"),t("span")),k=t("strike"),j=(t("strong"),t("style"),t("sub"),t("summary"),t("sup"),t("table"),t("tbody"),t("td"),t("template"),t("textarea"),t("tfoot"),t("th"),t("thead"),t("time"),t("title"),t("tr"),t("track"),t("tt"),t("u"),t("ul")),[O,q]=(t("video"),t("wbr"),t("xmp"),[1,100]),M=t=>t.toString(),D=function*(t,e){for(const o of e)yield t(o)},P=function*(t,e){for(const o of e)t(o)&&(yield o)},S=(...t)=>{const e=[];for(const o of t)if("string"==typeof o)e.push(o);else for(const[t,s]of Object.entries(o))s&&e.push(t);return((t,e)=>{let o="";for(const t of function*(t,e){let o=!0;for(const t of e)o||(yield" "),yield t,o=!1}(0,D(M,e)))o+=t;return o})(0,e)},E=({todo_sections:t,viewing:e,items:o,on_new_bench:r,onrandom:m,oninput:P,ontoggle:E,onremove:R,onselect:$,still_todo_count:T})=>x({className:S("d-grid","row-gap-8")},(({})=>N({id:"readme",className:S("lightly-bordered")},i({id:"readme-header",className:S("px-6","py-1")},d({className:"mp-0"},u({className:"fas fa-book"}),_({txt:" README.md"}))),i({id:"readme-body",className:S("px-6","pt-1")},c({},s({href:"https://ms-jpq.github.io/noact"},k({txt:"Re"}),_({txt:"Noact"}))),p(),y({txt:"Noact is a minimal self-rendering Virtual DOM library."}),j({},b({},a({txt:"Declarative:"}),_({txt:"Pretty much like React, without the JSX compilation of course, hence the name."})),b({},a({txt:"Type safe:"}),_({txt:"Noact is completely typesafe, which means you get"}),s({txt:"static type checking",href:"https://github.com/ms-jpq/Noact/blob/noact/_assets/auto_complete.gif"}),_({txt:"for free!"})),b({},a({txt:"Simple:"}),s({txt:"Only 60 lines",href:"https://github.com/ms-jpq/Noact/blob/noact/src/noact.ts"}),_({txt:"of type declarations & rendering code. (and 10ish lines of code-gen code)"}))),p(),l({txt:"How it feels to write Noact"}),g({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/noact/_assets/demo.gif"}),y({},a({txt:"- Explosions -"})),y({},_({txt:"Even has support for"}),a({txt:"style auto complete"})),g({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/noact/_assets/type_demo.png"}),p(),l({txt:"Source code"}),j({},b({},s({txt:"Rendering Engine",href:"https://github.com/ms-jpq/noact/tree/noact/src"})),b({},s({txt:"This Page",href:"https://github.com/ms-jpq/noact/tree/noact/example"}))))))({}),(({on_new_bench:t,onrandom:e,todo_sections:o})=>{const s="benchmark-input-input";return N({id:"benchmark-control",className:S("d-grid","ai-centre","jc-space-between","lightly-bordered","px-6","py-2","row-gap-1","col-gap-4")},l({id:"benchmark-title",txt:"Benchmark"}),i({id:"benchmark-input",className:S("d-flex","ai-baseline","flex-wrap")},f({htmlFor:s,txt:`Put in ${O}-${q}:`}),i({className:S("input-group","d-flex","flex-grow-1")},h({id:s,type:"number",className:S("flex-grow-1","text-right"),min:M(O),max:M(q),value:M(o),onchange:({target:e})=>{const{value:o}=e;t(parseInt(o))}}),n({className:S("clickable","border-thin","flex-shrink-1"),txt:"Random",onclick:e}))),(({})=>v({className:"benchmark-output"}))({}))})({todo_sections:t,on_new_bench:r,onrandom:m}),...D((s=>(({oninput:t,onselect:e,ontoggle:o,onremove:s,viewing:a,items:r,idx:c,todo_sections:m,still_todo_count:p})=>N({className:S("todo","lightly-bordered")},i({className:S("todo-header","d-grid","grid-col","jc-space-between","ai-baseline","px-6")},l({className:S("todo-title","mb-0"),txt:"TODO"}),y({className:S("todo-meta","text-right"),txt:`${c} of ${m} synchronized`})),(({oninput:t,idx:e})=>{const o=`todo-input-${e}`;return i({className:S("todo-input","px-6","lab-inp-btn")},f({htmlFor:o,txt:"I need to:"}),i({className:S("input-group","d-flex","flex-row")},h({id:o,className:"flex-grow-1",placeholder:"...",onchange:({target:e})=>{const o=e,{value:s}=o;""!==(s??"")&&t(s),o.value=""}}),n({className:S("clickable","flex-shrink-1")},u({className:"fas fa-reply"}))))})({oninput:t,idx:c}),(({onselect:t,viewing:e})=>i({className:S("todo-select","px-6","mt-4")},n({className:S({active:"todo"===e}),onclick:()=>t("todo")},d({txt:"Remaining"})),n({className:S({active:"done"===e}),onclick:()=>t("done")},d({txt:"Done"})),n({className:S({active:"all"===e}),onclick:()=>t("all")},d({txt:"Showall"}))))({onselect:e,viewing:a}),(({ontoggle:t,onremove:e,items:o})=>i({className:S("todo-listing","px-6")},w({},...D((o=>b({className:S("d-grid","grid-col","ac-baseline","ji-start","border-top-solid","border-thin","pt-4","py-1")},i({className:S("todo-message","clickable"),onclick:()=>t(o)},u({className:S("clickable","todo"===o.status?"far fa-check-square":"fas fa-check-square")}),_({txt:o.message})),n({className:S("clickable","border-clear","js-end","font-w900"),txt:"×",onclick:()=>e(o)}))),o))))({ontoggle:o,onremove:s,items:r}),y({className:S("todo-info","px-6","my-1"),txt:`${p} items left`})))({idx:s,viewing:e,items:o,oninput:P,onremove:R,onselect:$,ontoggle:E,todo_sections:t,still_todo_count:T})),function*(t,e,o=1){let s=t;const a=o>0?(t,e)=>t<=e:(t,e)=>t>=e;for(;a(s,e);)yield s,s+=o}(1,t))),R=({})=>r({},y({className:"text-centre"},_({txt:"© "}),s({txt:"ms-jpq",href:"https://ms-jpq.github.io"}))),$=({})=>m({className:S("d-grid","text-centre","ji-centre","lightly-bordered","py-8")},c({className:"font-w500",txt:"This Page is Rendered Using Noact"})),T=(t,e=document.body)=>[...e.querySelectorAll(t)],A=(t=>()=>t+=1)(0),C=(t=>{let s=o(t);return(...a)=>s=e(s,o(t,{},...a))})(document.body),F=t=>{switch(t){case"todo":return 1;case"done":return 2;default:throw new Error("invaild status")}},G=t=>{return e=t=>[F(t.status),t.last_update],o=t,[...o].sort(((t,o)=>{const s=function*(t,e){const[o,s]=[t[Symbol.iterator](),e[Symbol.iterator]()];for(;;){const[t,e]=[o.next(),s.next()];if(t.done||e.done)break;yield[t.value,e.value]}}(e(t),e(o));for(const[t,e]of s)if(t!==e)return t-e;return 0}));var e,o},H=G([...D((t=>({...t,id:A(),last_update:A()})),(t=>{const e=[{message:"Printer ran out of juice again",status:"todo"},{message:"Something about neighbour's cat",status:"todo"},{message:"Go to bed before 1AM",status:"todo"},{message:"Craig owes me money?",status:"todo"},{message:"👋Hire me👋",status:"todo"},{message:"Draw a prefect circle",status:"todo"},{message:"Take out trash",status:"done"},{message:"Ask Jenny for penny",status:"done"},{message:"Get groceries",status:"done"},{message:"Download Mob Psycho",status:"done"}];for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e})())]),I={todo_sections:1,viewing:{view:"todo",last_update:Date.now()},items:H},J=t=>{switch(t){case"todo":return"done";case"done":return"todo";default:throw new Error("invaild status")}},z=async t=>{const e=(()=>{let t=performance.now();return()=>{const e=t;return(t=performance.now())-e}})();var o;t(),await(o=0,new Promise((t=>setTimeout(t,o))));const s=Math.round(e()),a=T("*").length,n=T(".benchmark-output");for(const t of n)t.value=`rendered ${a} elements in ${s}ms`},B=({todo_sections:t,viewing:e,items:o})=>{const s=(a=t=>"todo"===t.status,((t,e,o)=>{let s=0;for(const e of o)s=t(s,e);return s})(((t,e)=>t+a(e)),0,o));var a;const n={todo_sections:t,viewing:e.view,items:o,onrandom:()=>{return B({items:o,viewing:e,todo_sections:(t=O,s=q,Math.floor(Math.random()*(s-t+1))+t)});var t,s},on_new_bench:t=>{const s=Math.min(q,Math.max(O,t));B({todo_sections:s,items:o,viewing:e})},oninput:s=>{const a={status:"todo",id:A(),last_update:Date.now(),message:s},n=[...o,a];B({todo_sections:t,items:n,viewing:e})},ontoggle:s=>{const a=[...D((t=>({...t,status:t.id===s.id?J(t.status):t.status,last_update:t.id===s.id?Date.now():t.last_update})),o)];B({todo_sections:t,items:a,viewing:e})},onremove:s=>{const a=[...P((t=>t.id!==s.id),o)];B({todo_sections:t,items:a,viewing:e})},onselect:s=>{s!==e.view&&B({todo_sections:t,items:G(o),viewing:{view:s,last_update:Date.now()}})},still_todo_count:s},r={last_view_update:e.last_update,header:{},body:n,footer:{}};z((()=>C((({last_view_update:t,header:e,body:o,footer:s})=>{const a=[...P((e=>((t,e,o)=>{switch(t){case"all":return!0;case"todo":return o.last_update>e||"todo"===o.status;case"done":return o.last_update>e||"done"===o.status}})(o.viewing,t,e)),o.items)];return i({id:"container",className:S("d-grid","mx-auto","mt-12","row-gap-12")},$(e),E({...o,items:a}),R(s))})(r))))};B(I)})();