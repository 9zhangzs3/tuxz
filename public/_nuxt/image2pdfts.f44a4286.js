import{E as U}from"./el-image-viewer.419736cf.js";import{E as F}from"./index.f74eccca.js";import{E as I,q as B,z as L,p as R}from"./constants.0fb4eb89.js";import{E as V}from"./el-progress.dc5687d2.js";import{E as N}from"./el-overlay.33123db5.js";import{_ as O}from"./client-only.c15d5ece.js";import"./base.e040b817.js";/* empty css                  *//* empty css                */import{D as j}from"./vuedraggable.umd.6e848523.js";import{E as q}from"./jspdf.es.min.6ea60ba2.js";import{d as z,r as h,k as A,l as T,m as _,q as o,s as m,B as f,v as $,F as H}from"./entry.b15f9cd9.js";import"./use-form-common-props.5502e3a8.js";import"./index.fb1b8b13.js";import"./aria.60e0cdc6.js";import"./debounce.fead197d.js";import"./index.cda2ae10.js";import"./position.68b279ff.js";import"./scroll.e8e2652b.js";import"./use-global-config.55fa202e.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./vnode.bca66073.js";import"./focus-trap.8efa8190.js";import"./event.9519ab40.js";import"./_commonjsHelpers.042e6b4d.js";const M={class:"drag-box"},X={style:{float:"left",margin:"0 8px 8px 0",border:"1px solid var(--el-border-color)","border-radius":"6px",position:"relative"}},Y=["src"],G={style:{width:"100px",height:"30px"}},ye=z({__name:"image2pdfts",setup(J){const n=h([]),v=h(""),d=h(!1),w=(e,t)=>{},x=e=>{v.value=e.url,d.value=!0},y=e=>{},b=e=>{console.log(e.draggedContext.element.id)};async function k(){const[e,t]=[595.28,841.89],l=new q("p","pt","a4",!0);console.log(n.value.length);for(const a of n.value){const r=new Image;r.src=URL.createObjectURL(a.raw);let p=0,u=0;await new Promise(D=>{r.onload=()=>{u=r.width,p=r.height,URL.revokeObjectURL(r.src),D(0)}});const i=await P(a.raw);let c=e/(u/p),g=0;c>t?c=t:g=(t-c)/2,console.log(i),l.addImage(i,0,g,e,c,a.name),l.addPage()}const s=l.internal.getNumberOfPages();l.deletePage(s),l.save("image.pdf")}const C=e=>{n.value.splice(e-1,1)},E=e=>{v.value=n.value[e].url,d.value=!0},P=e=>new Promise((t,l)=>{let s=new FileReader;s.readAsDataURL(e),s.onload=a=>{t(a.target.result)}});return(e,t)=>{const l=U,s=F,a=I,r=V,p=N,u=O;return A(),T(H,null,[_("div",M,[o(f(j),{list:n.value,animation:100,"item-key":"id",class:"list-group",forceFallback:!0,"ghost-class":"ghost",onChange:y,move:b},{item:m(({element:i,index:c})=>[_("div",X,[o(l,{fit:"contain",style:{width:"150px",height:"150px"},src:i.url},null,8,["src"]),o(s,{type:"danger",class:"el-icon-close",onClick:g=>C(c),icon:f(B),circle:"",color:"#D6D6D6"},null,8,["onClick","icon"]),o(a,{class:"el-icon-yl",onClick:g=>E(c)},{default:m(()=>[o(f(L))]),_:2},1032,["onClick"])])]),_:1},8,["list"])]),o(r,{"file-list":n.value,"onUpdate:fileList":t[0]||(t[0]=i=>n.value=i),"auto-upload":!1,"list-type":"picture-card","on-preview":x,"on-remove":w,"show-file-list":!1},{default:m(()=>[o(a,null,{default:m(()=>[o(f(R))]),_:1})]),_:1},8,["file-list"]),o(u,null,{default:m(()=>[o(p,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=i=>d.value=i)},{default:m(()=>[_("img",{"w-full":"",src:v.value,style:{width:"100%"},alt:"Preview Image"},null,8,Y)]),_:1},8,["modelValue"])]),_:1}),_("div",G,[o(s,{onClick:k},{default:m(()=>[$("生成PDF")]),_:1})])],64)}}});export{ye as default};
