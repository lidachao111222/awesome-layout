let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!f(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?d(null,l):l),s=o)};c(n);const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,h:e,i:t,m:null,$:null,u:null}),h={},y=(e,t,n,o,r,c)=>{if(n!==o){let i=D(e,t),a=t.toLowerCase();if(i||"o"!==t[0]||"n"!==t[1]){const l=f(o);if((i||l&&null!==o)&&!r)try{if(e.tagName.includes("-"))e[t]=o;else{let l=null==o?"":o;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==o||!1===o?!1===o&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&c||r)&&!l&&e.setAttribute(t,o=!0===o?"":o)}else t="-"===t[2]?t.slice(3):D(l,a)?a.slice(2):a[2]+t.slice(3),n&&s.rel(e,t,n,!1),o&&s.ael(e,t,o,!1)}},m=(e,t,n,l)=>{const o=11===t.m.nodeType&&t.m.host?t.m.host:t.m,s=e&&e.u||u,r=t.u||u;for(l in s)l in r||y(o,l,s[l],void 0,n,t.t);for(l in r)y(o,l,s[l],r[l],n,t.t)},p=(t,n,l)=>{let s,r,c=n.$[l],i=0;if(s=c.m=o.createElement(c.h),m(null,c,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=p(t,c,i),r&&s.appendChild(r);return s},w=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=p(null,l,s),c&&(o[s].m=c,i.insertBefore(c,n)))},b=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},S=(e,t)=>e.h===t.h,g=(e,t)=>{const n=t.m=e.m,l=e.$,o=t.$;"slot"===t.h||m(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:S(i,f)?(g(i,f),i=t[++s],f=l[++r]):S(a,$)?(g(a,$),a=t[--c],$=l[--u]):S(i,$)?(g(i,$),e.insertBefore(i.m,a.m.nextSibling),i=t[++s],$=l[--u]):S(a,f)?(g(a,f),e.insertBefore(a.m,i.m),a=t[--c],f=l[++r]):(o=p(t&&t[r],n,r),f=l[++r],o&&i.m.parentNode.insertBefore(o,i.m));s>c?w(e,null==l[u+1]?null:l[u+1].m,n,l,r,u):r>u&&b(t,s,c)})(n,l,t,o):null!==o?w(n,null,t,o,0,o.length-1):null!==l&&b(l,0,l.length-1)},j=e=>R(e).p,v=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},M=(e,t)=>{if(e.t|=16,!(4&e.t))return v(e,e.g),X((()=>k(e,t)));e.t|=512},k=(e,t)=>{const n=e.j;let l;return t&&(l=x(n,"componentWillLoad")),E(l,(()=>C(e,n,t)))},C=async(e,t,n)=>{const l=e.p,s=l["s-rc"];n&&(e=>{const t=e.v,n=e.p,l=t.t,s=((e,t)=>{let n=a(t),l=z.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);O(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>P(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},O=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.p,s=n.v,r=n.M||d(null,null),c=(e=>e&&e.h===h)(l)?l:$(null,null,l);t=o.tagName,s.k&&(c.u=c.u||{},s.k.map((([e,t])=>c.u[t]=o[e]))),c.h=null,c.t|=4,n.M=c,c.m=r.m=o.shadowRoot||o,e=o["s-sc"],g(r,c)})(n,l)}catch(e){N(e,n.p)}return null},P=e=>{const t=e.p,n=e.j,l=e.g;64&e.t||(e.t|=64,T(t),x(n,"componentDidLoad"),e.C(t),l||L()),e.O(t),e.S&&(e.S(),e.S=void 0),512&e.t&&Q((()=>M(e,!1))),e.t&=-517},L=()=>{T(o.documentElement),Q((()=>(e=>{const t=s.ce("appload",{detail:{namespace:"awesome-layout"}});return e.dispatchEvent(t),t})(l)))},x=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){N(e)}},E=(e,t)=>e&&e.then?e.then(t):t(),T=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.P){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.P),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>R(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=R(e),s=o.p,r=o.T.get(t),c=o.t,i=o.j;if(n=((e,t)=>null==e||f(e)?e:2&t?parseFloat(e):e)(n,l.P[t][0]),!(8&c&&void 0!==r||n===r)&&(o.T.set(t,n),i)){if(l.L&&128&c){const e=l.L[t];e&&e.map((e=>{try{i[e](n,r,t)}catch(e){N(e,s)}}))}2==(18&c)&&M(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=R(this);return n.W.then((()=>n.j[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){s.jmp((()=>{const t=n.get(e);this.hasOwnProperty(t)&&(l=this[t],delete this[t]),this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.k.push([e,o]),o}))}}return e},A=e=>{x(e,"connectedCallback")},F=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let h,y=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],P:t[2],A:t[3]};l.P=t[2],l.k=[],l.L={};const o=l.o,u=class extends HTMLElement{constructor(e){super(e),q(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),y?d.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=R(e),n=t.v,l=()=>{};if(1&t.t)A(t.j);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(t,t.g=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=_(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.L=o.watchers,W(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){N(e)}t.t&=-9,t.t|=128,e(),A(t.j)}if(o.style){let e=o.style;const t=a(n);if(!z.has(t)){const l=()=>{};((e,t,n)=>{let l=z.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,z.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.g,r=()=>M(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return R(this).F}};l.H=e[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,W(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):s.jmp((()=>h=setTimeout(L,30)))},H=new WeakMap,R=e=>H.get(e),U=(e,t)=>H.set(t.j=e,t),q=(e,t)=>{const n={t:0,p:e,v:t,T:new Map};return n.W=new Promise((e=>n.O=e)),n.F=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],H.set(e,n)},D=(e,t)=>t in e,N=(e,t)=>(0,console.error)(e,t),V=new Map,_=e=>{const t=e.o.replace(/-/g,"_"),n=e.H,l=V.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(V.set(n,e),e[t])),N)},z=new Map,B=[],G=[],I=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?Q(K):s.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){N(e)}e.length=0},K=()=>{J(B),J(G),(n=B.length>0)&&s.raf(K)},Q=e=>r().then(e),X=I(G,!0);export{h as H,F as b,j as g,$ as h,r as p,U as r}