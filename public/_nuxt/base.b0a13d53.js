import{V as v,U as c,a3 as f,aA as g,ap as h}from"./entry.7321a61b.js";function w(e){for(var t=-1,s=e==null?0:e.length,n={};++t<s;){var o=e[t];n[o[0]]=o[1]}return n}const _=e=>e===void 0,j=e=>typeof e=="boolean",E=e=>typeof e=="number",S=e=>typeof Element>"u"?!1:e instanceof Element,I=e=>v(e)?!Number.isNaN(Number(e)):!1,d="__epPropKey",V=e=>e,y=e=>c(e)&&!!e[d],N=(e,t)=>{if(!c(e)||y(e))return e;const{values:s,required:n,default:o,type:p,validator:l}=e,u={type:p,required:!!n,validator:s||l?i=>{let a=!1,r=[];if(s&&(r=Array.from(s),f(e,"default")&&r.push(o),a||(a=r.includes(i))),l&&(a||(a=l(i))),!a&&r.length>0){const m=[...new Set(r)].map(b=>JSON.stringify(b)).join(", ");g(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${m}], got value ${JSON.stringify(i)}.`)}return a}:void 0,[d]:!0};return f(e,"default")&&(u.default=o),u},$=e=>w(Object.entries(e).map(([t,s])=>[t,N(s,t)])),q=(e,t)=>{if(e.install=s=>{for(const n of[e,...Object.values(t??{})])s.component(n.name,n)},t)for(const[s,n]of Object.entries(t))e[s]=n;return e},x=(e,t)=>(e.install=s=>{s.directive(t,e)},e),A=e=>(e.install=h,e),J=e=>e;var K=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{K as _,j as a,$ as b,_ as c,V as d,A as e,x as f,S as g,w as h,E as i,I as j,N as k,J as m,q as w};
