import{E as B,p as F,q as V,z}from"./constants.0fb4eb89.js";import{E as U}from"./el-progress.dc5687d2.js";import{E as N}from"./index.f74eccca.js";import{E as P}from"./el-overlay.33123db5.js";import{_ as A}from"./client-only.c15d5ece.js";import"./base.e040b817.js";/* empty css                *//* empty css                  */import{D as R}from"./vuedraggable.umd.6e848523.js";import{p as T}from"./pdf.worker.entry.59fb93a6.js";import{J,F as L}from"./FileSaver.min.8ad78cd6.js";import{d as q,r as g,k as O,l as S,q as l,s as r,B as f,m as c,v as $,F as j,_ as M}from"./entry.b15f9cd9.js";import"./error.78e43d3e.js";import"./use-form-common-props.5502e3a8.js";import"./index.fb1b8b13.js";import"./use-global-config.55fa202e.js";import"./index.f8748455.js";import"./vnode.bca66073.js";import"./focus-trap.8efa8190.js";import"./aria.60e0cdc6.js";import"./event.9519ab40.js";import"./scroll.e8e2652b.js";import"./_commonjsHelpers.042e6b4d.js";const W={class:"drag-box"},Z={style:{float:"left",margin:"0 8px 8px 0",border:"1px solid var(--el-border-color)","border-radius":"6px",position:"relative"}},G=["id"],H=["src"],K={style:{width:"100px",height:"30px"}},Q=q({__name:"pdf2Image",setup(X){const _=g(""),u=g([]),x=g(""),v=g(!1),b=o=>{let e=o.raw;console.log(e),console.log(e.name),_.value=e.name.substring(0,e.name.lastIndexOf(".")),console.log(_.value);var a=new FileReader;a.readAsDataURL(e),a.onload=function(){T.getDocument(a.result).promise.then(i=>{var d=i.numPages;console.log("页数:"+d);for(let t=1;t<=d;t++){let n=t;u.value.push({id:n})}for(let t=1;t<=d;t++)i.getPage(t).then(n=>{const s=document.getElementById("pdf_canvas_"+t),h=s.getContext("2d"),m=n.getViewport({scale:3});s.height=m.height,s.width=m.width;const y=150;s.style.width=y+"px",s.style.height=y*(m.height/m.width)+"px",n.render({canvasContext:h,viewport:m})})})}},w=()=>{let o=_.value,e=new J,a=e.folder("images");u.value.forEach((p,i,d)=>{console.log("图片",p.id);let t=i+1;console.log(i);var n=document.getElementById("pdf_canvas_"+t);a.file(_.value+"-"+t+".png",k(n.toDataURL("image/png",1)),{base64:!0})}),e.generateAsync({type:"blob"}).then(function(p){L.saveAs(p,o+".zip")})},k=o=>{var e=o.split(",");return e[1]},E=()=>{};async function I(o){await b(o)}const C=o=>{u.value.splice(o,1)},D=o=>{var e=document.getElementById("pdf_canvas_"+(o+1));let a=e.toDataURL("image/jpeg");x.value=a,v.value=!0};return(o,e)=>{const a=B,p=U,i=N,d=P,t=A;return O(),S(j,null,[l(p,{"auto-upload":!1,"list-type":"picture-card","show-file-list":!0,onChange:I},{default:r(()=>[l(a,null,{default:r(()=>[l(f(F))]),_:1})]),_:1}),c("div",W,[l(f(R),{list:u.value,animation:100,"item-key":"id",class:"list-group",forceFallback:!0,"ghost-class":"ghost"},{item:r(({element:n,index:s})=>[c("div",Z,[c("canvas",{id:"pdf_canvas_"+(s+1),style:{border:"1px solid #eeeeee",float:"left"}},null,8,G),l(i,{type:"danger",class:"el-icon-close",onClick:h=>C(s),icon:f(V),circle:"",color:"#D6D6D6"},null,8,["onClick","icon"]),l(a,{class:"el-icon-yl",onClick:h=>D(s)},{default:r(()=>[l(f(z))]),_:2},1032,["onClick"])])]),_:1},8,["list"])]),l(t,null,{default:r(()=>[l(d,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=n=>v.value=n)},{default:r(()=>[c("img",{"w-full":"",src:x.value,style:{width:"100%"},alt:"Preview Image"},null,8,H)]),_:1},8,["modelValue"])]),_:1}),c("div",K,[l(i,{onClick:E},{default:r(()=>[$("生成PDF")]),_:1})]),c("div",{style:{width:"800px","font-size":"12px","margin-top":"10px"}},[c("button",{type:"info",plain:"",style:{width:"400px"},onClick:w},"全部图片打zip包下载")])],64)}}});const we=M(Q,[["__scopeId","data-v-c60b868b"]]);export{we as default};