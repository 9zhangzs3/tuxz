import{E,p as C}from"./constants.32292d8d.js";import{E as k}from"./el-progress.1e2c2aec.js";import{E as x}from"./el-color-picker.5f220219.js";import{_ as y}from"./client-only.5718a18c.js";import{E as U}from"./index.5fe7711e.js";import"./base.c3d2e3d9.js";/* empty css                */import"./el-input.7461a788.js";/* empty css                  */import{d as B,r as o,k as I,l as L,q as l,s,B as V,v as u,t as R,F,m as S,ac as D}from"./entry.1dc6e359.js";import"./error.78e43d3e.js";import"./use-form-common-props.197ce949.js";import"./index.f0a79751.js";import"./aria.60e0cdc6.js";import"./index.901f8d30.js";import"./focus-trap.8aa43648.js";import"./position.7b373cbe.js";import"./event.9519ab40.js";import"./index.b9606ab9.js";import"./debounce.72c54a3b.js";import"./use-global-config.5035f634.js";import"./index.f8748455.js";import"./index.ca35bea9.js";const N=S("canvas",{id:"demoCanvas"},null,-1),re=B({__name:"imagermbg",setup(T){const f=D(),m=o(),p=o([]),d=o();o(""),o(!1);const r=o("rgba(255, 69, 0, 0.68)"),_=o(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]),v=async a=>{m.value=a;const e=new FormData;e.append("file",a.raw);const t=f.public.baseUrl,i=await(await fetch(t+":5003/api/rembg",{method:"POST",body:e})).blob();d.value=URL.createObjectURL(i),g(d.value)},g=a=>{var e=new Image;e.src=a;let t=document.getElementById("demoCanvas"),n=t.getContext("2d");e.addEventListener("load",function(){t.width=e.width,t.height=e.height,n.fillStyle=r.value,n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0)},!1)};function h(){let e=document.getElementById("demoCanvas").toDataURL();const t=document.createElement("a");t.href=e,t.download=m.value.name,t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{t.remove()},100)}return(a,e)=>{const t=E,n=k,i=x,b=y,w=U;return I(),L(F,null,[l(n,{"file-list":p.value,"onUpdate:fileList":e[0]||(e[0]=c=>p.value=c),"auto-upload":!1,"list-type":"picture-card","show-file-list":!0,onChange:v},{default:s(()=>[l(t,null,{default:s(()=>[l(V(C))]),_:1})]),_:1},8,["file-list"]),l(b,null,{default:s(()=>[l(i,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=c=>r.value=c),"color-format":"hex","show-alpha":!1,predefine:_.value},null,8,["modelValue","predefine"])]),_:1}),N,u(R(r.value)+" ",1),l(w,{onClick:h},{default:s(()=>[u("下载")]),_:1})],64)}}});export{re as default};
