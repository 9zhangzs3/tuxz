import{E as V}from"./index.0d4f5f8c.js";import{E as F}from"./el-progress.8c2a772a.js";import{E as L,a as j}from"./el-tabs.b633538d.js";import"./base.cee28e3a.js";/* empty css                  */import{v as D}from"./el-loading.dcb13fc1.js";import{d as N,r as o,k as b,l as A,z as f,A as x,m as a,q as l,s as i,B as k,v,E as O,C as P,x as q,y as M,_ as $}from"./entry.43ae2c8f.js";import{p as G,u as H}from"./constants.d98b03ae.js";import{f as J}from"./util.a9abac9b.js";import"./index.6427deed.js";import"./use-global-config.fc5323c1.js";import"./use-form-common-props.7f01f78a.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./aria.60e0cdc6.js";import"./event.9519ab40.js";import"./vnode.2219f04a.js";const h=r=>(q("data-v-0841922b"),r=r(),M(),r),K={style:{width:"90%",margin:"0 auto"}},Q={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},W=h(()=>a("div",{style:{"font-size":"24px",height:"50px"}},"模糊图片修复",-1)),X={style:{"margin-top":"10%","font-size":"24px"}},Y=h(()=>a("div",{style:{color:"black"}},"或者拖放一个文件",-1)),Z={style:{width:"80%",margin:"0 auto","margin-top":"10%"}},ee={style:{float:"left",width:"45%",position:"relative"}},te={class:"cutout-image-container"},ae=["src"],oe={class:"cutout-image-container"},se=["src"],ie={style:{float:"right",width:"45%",height:"442px",margin:"0 auto"}},le=h(()=>a("div",{style:{height:"400px"}},null,-1)),ne={style:{width:"100%",margin:"0 auto"}},re=N({__name:"repair",setup(r){const p=o(!0),c=o("before"),u=o(!0),E=o(),m=o(),g=o(),_=o(),d=o(""),w=o(),B=async t=>{p.value=!0,c.value="before",d.value="",E.value=t.raw,u.value=!1,g.value=await J(t.raw),await I(t.raw)},I=async t=>{m.value=t;const e=new FormData;e.append("file",t),e.append("outscale",1),e.append("fe","true");const n=await(await fetch("http://124.220.44.98:5002/api/realesrgan",{method:"POST",body:e})).blob();_.value=URL.createObjectURL(n),p.value=!1,c.value="after"},z=t=>{const e=document.createElement("a");e.href=t,e.download=m.value.name,e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{e.remove()},100)},S=()=>{var t=new Image;t.src=_.value;let e=document.createElement("canvas"),s=e.getContext("2d");t.onload=()=>{e.width=t.width,e.height=t.height,d&&(s.fillStyle=d.value),s.fillRect(0,0,e.width,e.height),s.drawImage(t,0,0);var n=e.toDataURL(m.value.type);z(n)}},C=()=>{var t,e;(e=(t=w.value)==null?void 0:t.$.vnode.el)==null||e.click()};return(t,e)=>{const s=V,n=F,y=L,R=j,T=D;return b(),A("div",K,[f(a("div",Q,[W,a("div",null,[l(n,{class:"upload-demo",drag:"","show-file-list":!1,"auto-upload":!1,onChange:B,accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:i(()=>[a("div",X,[l(s,{ref_key:"uploadRepairId",ref:w,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:k(G)},{default:i(()=>[v("上传图片")]),_:1},8,["icon"]),Y])]),_:1})])],512),[[x,u.value]]),f(a("div",Z,[a("div",ee,[f((b(),O(R,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=U=>c.value=U),type:"card",style:{width:"100%"},"element-loading-background":"rgba(122, 122, 122, 0.5)"},{default:i(()=>[l(y,{name:"before",label:"修复前"},{default:i(()=>[a("div",te,[a("img",{src:g.value,style:{"max-width":"100%","max-height":"100%",display:"block"}},null,8,ae)])]),_:1}),l(y,{name:"after",label:"修复后"},{default:i(()=>[a("div",oe,[a("img",{src:_.value,style:P({"max-width":"100%","max-height":"100%",display:"block","background-color":d.value})},null,12,se)])]),_:1})]),_:1},8,["modelValue"])),[[T,p.value]]),l(s,{type:"primary",onClick:C,style:{position:"absolute",top:"5px",right:"0"},icon:k(H)},{default:i(()=>[v("重新上传")]),_:1},8,["icon"])]),a("div",ie,[le,a("div",ne,[l(s,{onClick:S,type:"primary",round:"",size:"large",style:{"font-size":"20px",width:"150px"}},{default:i(()=>[v("下载")]),_:1})])])],512),[[x,!u.value]])])}}});const Ie=$(re,[["__scopeId","data-v-0841922b"]]);export{Ie as default};