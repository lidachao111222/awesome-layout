let t,e,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=t=>Promise.resolve(t),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),i=new WeakMap,a=t=>"sc-"+t.o,u={},f=t=>"object"==(t=typeof t)||"function"===t,$=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!f(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?d(null,l):l),s=o)};c(n);const i=d(t,null);return i.u=e,r.length>0&&(i.$=r),i},d=(t,e)=>({t:0,h:t,i:e,m:null,$:null,u:null}),h={},y=(t,e,n,l,o,s)=>{if(n!==l){let r=D(t,e);e.toLowerCase();{const c=f(l);if((r||c&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&s||o)&&!c&&t.setAttribute(e,l=!0===l?"":l)}}},m=(t,e,n,l)=>{const o=11===e.m.nodeType&&e.m.host?e.m.host:e.m,s=t&&t.u||u,r=e.u||u;for(l in s)l in r||y(o,l,s[l],void 0,n,e.t);for(l in r)y(o,l,s[l],r[l],n,e.t)},p=(e,n,l)=>{let s,r,c=n.$[l],i=0;if(s=c.m=o.createElement(c.h),m(null,c,!1),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),c.$)for(i=0;i<c.$.length;++i)r=p(e,c,i),r&&s.appendChild(r);return s},w=(t,n,l,o,s,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=p(null,l,s),c&&(o[s].m=c,i.insertBefore(c,n)))},b=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.m.remove()},S=(t,e)=>t.h===e.h,g=(t,e)=>{const n=e.m=t.m,l=t.$,o=e.$;"slot"===e.h||m(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==$?$=l[--u]:S(i,f)?(g(i,f),i=e[++s],f=l[++r]):S(a,$)?(g(a,$),a=e[--c],$=l[--u]):S(i,$)?(g(i,$),t.insertBefore(i.m,a.m.nextSibling),i=e[++s],$=l[--u]):S(a,f)?(g(a,f),t.insertBefore(a.m,i.m),a=e[--c],f=l[++r]):(o=p(e&&e[r],n,r),f=l[++r],o&&i.m.parentNode.insertBefore(o,i.m));s>c?w(t,null==l[u+1]?null:l[u+1].m,n,l,r,u):r>u&&b(e,s,c)})(n,l,e,o):null!==o?w(n,null,e,o,0,o.length-1):null!==l&&b(l,0,l.length-1)},j=t=>R(t).p,v=(t,e)=>{e&&!t.S&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.S=e)))},M=(t,e)=>{if(t.t|=16,!(4&t.t))return v(t,t.g),X((()=>k(t,e)));t.t|=512},k=(t,e)=>{const n=t.j;let l;return e&&(l=x(n,"componentWillLoad")),E(l,(()=>C(t,n,e)))},C=async(t,e,n)=>{const l=t.p,s=l["s-rc"];n&&(t=>{const e=t.v,n=t.p,l=e.t,s=((t,e)=>{let n=a(e),l=z.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=i.get(t=t.head||t);s||i.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);O(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>P(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},O=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.p,s=n.v,r=n.M||d(null,null),c=(t=>t&&t.h===h)(l)?l:$(null,null,l);e=o.tagName,s.k&&(c.u=c.u||{},s.k.map((([t,e])=>c.u[e]=o[t]))),c.h=null,c.t|=4,n.M=c,c.m=r.m=o.shadowRoot||o,t=o["s-sc"],g(r,c)})(n,l)}catch(t){N(t,n.p)}return null},P=t=>{const e=t.p,n=t.j,l=t.g;64&t.t||(t.t|=64,T(e),x(n,"componentDidLoad"),t.C(e),l||L()),t.O(e),t.S&&(t.S(),t.S=void 0),512&t.t&&Q((()=>M(t,!1))),t.t&=-517},L=()=>{T(o.documentElement),Q((()=>(t=>{const e=s.ce("appload",{detail:{namespace:"awesome-layout"}});return t.dispatchEvent(e),e})(l)))},x=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){N(t)}},E=(t,e)=>t&&t.then?t.then(e):e(),T=t=>t.classList.add("hydrated"),W=(t,e,n)=>{if(e.P){t.watchers&&(e.L=t.watchers);const l=Object.entries(e.P),o=t.prototype;if(l.map((([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,t,{get(){return((t,e)=>R(this).T.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=R(t),s=o.p,r=o.T.get(e),c=o.t,i=o.j;if(n=((t,e)=>null==t||f(t)?t:2&e?parseFloat(t):t)(n,l.P[e][0]),!(8&c&&void 0!==r||n===r)&&(o.T.set(e,n),i)){if(l.L&&128&c){const t=l.L[e];t&&t.map((t=>{try{i[t](n,r,e)}catch(t){N(t,s)}}))}2==(18&c)&&M(o,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,t,{value(...e){const n=R(this);return n.W.then((()=>n.j[t](...e)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(t,e,l){s.jmp((()=>{const e=n.get(t);this.hasOwnProperty(e)&&(l=this[e],delete this[e]),this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const o=l[1]||t;return n.set(o,t),512&l[0]&&e.k.push([t,o]),o}))}}return t},A=t=>{x(t,"connectedCallback")},F=(t,e={})=>{const n=[],r=e.exclude||[],i=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let h,y=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",o.baseURI).href,t.map((t=>t[1].map((e=>{const l={t:e[0],o:e[1],P:e[2],A:e[3]};l.P=e[2],l.k=[],l.L={};const o=l.o,u=class extends HTMLElement{constructor(t){super(t),q(t=this,l),1&l.t&&t.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),y?d.push(this):s.jmp((()=>(t=>{if(0==(1&s.t)){const e=R(t),n=e.v,l=()=>{};if(1&e.t)A(e.j);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(e,e.g=n);break}}n.P&&Object.entries(n.P).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,o)=>{if(0==(32&e.t)){{if(e.t|=32,(o=_(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.L=o.watchers,W(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(t){N(t)}e.t&=-9,e.t|=128,t(),A(e.j)}if(o.style){let t=o.style;const e=a(n);if(!z.has(e)){const l=()=>{};((t,e,n)=>{let l=z.get(t);c&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,z.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.g,r=()=>M(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return R(this).F}};l.H=t[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,W(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),y=!1,d.length?d.map((t=>t.connectedCallback())):s.jmp((()=>h=setTimeout(L,30)))},H=new WeakMap,R=t=>H.get(t),U=(t,e)=>H.set(e.j=t,e),q=(t,e)=>{const n={t:0,p:t,v:e,T:new Map};return n.W=new Promise((t=>n.O=t)),n.F=new Promise((t=>n.C=t)),t["s-p"]=[],t["s-rc"]=[],H.set(t,n)},D=(t,e)=>e in t,N=(t,e)=>(0,console.error)(t,e),V=new Map,_=t=>{const e=t.o.replace(/-/g,"_"),n=t.H,l=V.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(V.set(n,t),t[e])),N)},z=new Map,B=[],G=[],I=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&s.t?Q(K):s.raf(K))},J=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){N(t)}t.length=0},K=()=>{J(B),J(G),(n=B.length>0)&&s.raf(K)},Q=t=>r().then(t),X=I(G,!0);export{h as H,F as b,j as g,$ as h,r as p,U as r}