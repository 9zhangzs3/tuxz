import{h as l}from"./base.b0a13d53.js";import{c as t,W as u}from"./entry.7321a61b.js";const i=["class","style"],E=/^on[A-Z]/,m=(c={})=>{const{excludeListeners:o=!1,excludeKeys:e}=c,a=t(()=>((e==null?void 0:e.value)||[]).concat(i)),s=u();return s?t(()=>{var r;return l(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([n])=>!a.value.includes(n)&&!(o&&E.test(n))))}):t(()=>({}))};export{m as u};