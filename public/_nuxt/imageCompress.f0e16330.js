import{d as k,r as v,k as x,l as P,q as t,s as r,B as C,m as w,v as a,F as b,G}from"./entry.b15f9cd9.js";import{E as $,p as g}from"./constants.0fb4eb89.js";import{E as y}from"./el-progress.dc5687d2.js";import{E as L}from"./el-input-number.4fd7f639.js";import{E as S}from"./index.f74eccca.js";import"./base.e040b817.js";/* empty css                */import"./el-input.aa2448c5.js";/* empty css                   *//* empty css                  */import{s as m,e as V}from"./compressImageOptions.81079d9e.js";import"./error.78e43d3e.js";import"./use-form-common-props.5502e3a8.js";import"./event.9519ab40.js";import"./index.600d1f4a.js";import"./aria.60e0cdc6.js";import"./index.fb1b8b13.js";import"./focus-trap.8efa8190.js";import"./debounce.fead197d.js";import"./use-global-config.55fa202e.js";import"./index.f8748455.js";import"./index.cda2ae10.js";const q={class:"block"},B={style:{width:"100px",height:"30px"}},oe=k({__name:"imageCompress",setup(F){const f=v([]),d=v(75),c=v(100);async function s(i){const e=(await G(()=>import("./compress.0566e9c3.js"),[],import.meta.url)).default;let n=f.value[0].raw;m.encoderState=V[i],i=="browserJPEG"&&(m.encoderState.options.quality=d.value/100),i=="avif"?d.value>63?m.encoderState.options.cqLevel=0:m.encoderState.options.cqLevel=63-d.value:m.encoderState.options.quality=d.value;const p=new e(n,m);console.log(m);const u=await p.process();let l=await _(u);E(u.name,l)}const _=i=>new Promise((e,n)=>{let p=new FileReader;p.readAsDataURL(i),p.onload=u=>{e(u.target.result)}}),E=(i,e)=>{let n=document.createElement("a");i?n.download=i:n.download="my",n.href=e,n.click()};return(i,e)=>{const n=$,p=y,u=L,l=S;return x(),P(b,null,[t(p,{"file-list":f.value,"onUpdate:fileList":e[0]||(e[0]=o=>f.value=o),"auto-upload":!1,"list-type":"picture-card","show-file-list":!0},{default:r(()=>[t(n,null,{default:r(()=>[t(C(g))]),_:1})]),_:1},8,["file-list"]),w("div",q,[t(u,{style:{width:"200px"},max:c.value,modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o)},null,8,["max","modelValue"])]),w("div",B,[t(l,{onClick:e[2]||(e[2]=o=>s("avif"))},{default:r(()=>[a("avif")]),_:1}),t(l,{onClick:e[3]||(e[3]=o=>s("browserGIF"))},{default:r(()=>[a("browserGIF")]),_:1}),t(l,{onClick:e[4]||(e[4]=o=>s("browserJPEG"))},{default:r(()=>[a("browserJPEG")]),_:1}),t(l,{onClick:e[5]||(e[5]=o=>s("browserPNG"))},{default:r(()=>[a("browserPNG")]),_:1}),t(l,{onClick:e[6]||(e[6]=o=>s("jxl"))},{default:r(()=>[a("jxl")]),_:1}),t(l,{onClick:e[7]||(e[7]=o=>s("mozJPEG"))},{default:r(()=>[a("mozJPEG")]),_:1}),t(l,{onClick:e[8]||(e[8]=o=>s("oxiPNG"))},{default:r(()=>[a("oxiPNG")]),_:1}),t(l,{onClick:e[9]||(e[9]=o=>s("webP"))},{default:r(()=>[a("webP")]),_:1}),t(l,{onClick:e[10]||(e[10]=o=>s("wp2"))},{default:r(()=>[a("wp2")]),_:1})])],64)}}});export{oe as default};