import{E as f,p as _}from"./constants.eb0fc12e.js";import{E as w}from"./el-progress.56adb9af.js";import{E as v}from"./index.50b37a87.js";import"./base.b0a13d53.js";/* empty css                *//* empty css                  */import{d as b,r as o,k as h,l as E,q as a,s,B as g,m as x,v as k,F as B}from"./entry.7321a61b.js";import"./error.78e43d3e.js";import"./use-form-common-props.d48746c9.js";import"./index.636cfc4c.js";import"./use-global-config.f9c3cc9d.js";import"./index.f8748455.js";const y=["src"],z=b({__name:"imageRealEsrgan",setup(C){const r=o(),i=o([]),n=o();o(""),o(!1),o();const p=async e=>{r.value=e;const t=new FormData;t.append("file",e.raw),t.append("outscale",1),t.append("fe","true");const l=await(await fetch("http://124.220.46.188:5002/api/realesrgan",{method:"POST",body:t})).blob();n.value=URL.createObjectURL(l)};function m(){const e=document.createElement("a");e.href=n.value,e.download=r.value.name,e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{e.remove()},100)}return(e,t)=>{const c=f,l=w,u=v;return h(),E(B,null,[a(l,{"file-list":i.value,"onUpdate:fileList":t[0]||(t[0]=d=>i.value=d),"auto-upload":!1,"list-type":"picture-card","show-file-list":!0,onChange:p},{default:s(()=>[a(c,null,{default:s(()=>[a(g(_))]),_:1})]),_:1},8,["file-list"]),x("img",{src:n.value,style:{"max-width":"500px","max-height":"500px"}},null,8,y),a(u,{onClick:m},{default:s(()=>[k("下载")]),_:1})],64)}}});export{z as default};