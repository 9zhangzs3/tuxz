import{E as N}from"./index.f74eccca.js";import{E as T}from"./el-progress.dc5687d2.js";import{E as L,p as R,q as J,z as $,u as q,a as O}from"./constants.0fb4eb89.js";import{E as j}from"./el-card.a1e9063b.js";import{E as M}from"./el-overlay.33123db5.js";import{_ as W}from"./client-only.c15d5ece.js";import"./base.e040b817.js";/* empty css                  *//* empty css                */import"./el-loading.764bfe53.js";import{d as Z,r as u,k as G,l as H,z as C,A as D,m as l,q as t,s,B as m,v as b,x as K,y as Q,_ as X}from"./entry.b15f9cd9.js";import{D as Y}from"./vuedraggable.umd.6e848523.js";import{p as ee}from"./pdf.worker.entry.59fb93a6.js";import{J as te,F as oe}from"./FileSaver.min.8ad78cd6.js";import{E as z}from"./index.2636c4c6.js";import"./index.fb1b8b13.js";import"./use-global-config.55fa202e.js";import"./use-form-common-props.5502e3a8.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./vnode.bca66073.js";import"./focus-trap.8efa8190.js";import"./aria.60e0cdc6.js";import"./event.9519ab40.js";import"./scroll.e8e2652b.js";import"./_commonjsHelpers.042e6b4d.js";const y=f=>(K("data-v-1b777b1d"),f=f(),Q(),f),ae={style:{width:"90%",margin:"0 auto"}},le={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},se=y(()=>l("div",{style:{"font-size":"24px",height:"50px"}},"PDF转图片",-1)),ie={style:{"margin-top":"10%","font-size":"24px"}},ne=y(()=>l("div",{style:{color:"black"}},"或者拖放一个PDF文件",-1)),de={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},re={class:"drag-box",style:{width:"70%",float:"left",margin:"0 auto","text-align":"center"}},ce={style:{float:"left",margin:"0 8px 8px 0",border:"1px solid var(--el-border-color)","border-radius":"6px",position:"relative",width:"152px",height:"213px"}},pe=["id"],ue=["src"],me={style:{float:"right",width:"25%"}},_e=y(()=>l("br",null,null,-1)),ge=y(()=>l("div",{style:{height:"20px"}},null,-1)),fe=Z({__name:"pdf2img",setup(f){const h=u(""),_=u([]),k=u(""),w=u(!1),x=u(!0),E=u(),B=o=>{_.value=[];let e=o.raw;console.log(e),console.log(e.name),h.value=e.name.substring(0,e.name.lastIndexOf(".")),console.log(h.value);var a=new FileReader;a.readAsDataURL(e),a.onload=function(){ee.getDocument(a.result).promise.then(n=>{var r=n.numPages;console.log("页数:"+r);for(let i=1;i<=r;i++){let c=i;_.value.push({id:c})}for(let i=1;i<=r;i++)n.getPage(i).then(c=>{const d=document.getElementById("pdf_canvas_"+i),g=d.getContext("2d"),p=c.getViewport({scale:3});d.height=p.height,d.width=p.width;const I=150;d.style.width=I+"px",d.style.height=I*(p.height/p.width)+"px",c.render({canvasContext:g,viewport:p})})})}},F=()=>{const o=z.service({lock:!0,text:"正在处理...",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{let e=h.value,a=new te,v=a.folder("images");_.value.forEach((n,r,i)=>{console.log("图片",n.id);let c=r+1;console.log(r);var d=document.getElementById("pdf_canvas_"+c);v.file(h.value+"-"+c+".png",V(d.toDataURL("image/png",1)),{base64:!0})}),a.generateAsync({type:"blob"}).then(function(n){oe.saveAs(n,e+".zip")}),o.close()},100)},V=o=>{var e=o.split(",");return e[1]};async function P(o){const e=z.service({lock:!0,text:"正在处理...",background:"rgba(0, 0, 0, 0.7)"});await B(o),x.value=!1,e.close()}const S=o=>{_.value.splice(o,1)},U=o=>{var e=document.getElementById("pdf_canvas_"+(o+1));let a=e.toDataURL("image/jpeg");k.value=a,w.value=!0},A=()=>{var o,e;(e=(o=E.value)==null?void 0:o.$.vnode.el)==null||e.click()};return(o,e)=>{const a=N,v=T,n=L,r=j,i=M,c=W;return G(),H("div",ae,[C(l("div",le,[se,l("div",null,[t(v,{class:"upload-demo",drag:"","show-file-list":!1,"auto-upload":!1,onChange:P,accept:".pdf"},{default:s(()=>[l("div",ie,[t(a,{ref_key:"uploadId",ref:E,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:m(R)},{default:s(()=>[b("上传PDF")]),_:1},8,["icon"]),ne])]),_:1})])],512),[[D,x.value]]),C(l("div",de,[l("div",re,[t(r,{shadow:"always"},{default:s(()=>[t(m(Y),{list:_.value,animation:100,"item-key":"id",class:"list-group",forceFallback:!0,"ghost-class":"ghost"},{item:s(({element:d,index:g})=>[l("div",ce,[l("canvas",{id:"pdf_canvas_"+(g+1),style:{border:"1px solid #eeeeee",float:"left"}},null,8,pe),t(a,{type:"danger",class:"el-icon-close",onClick:p=>S(g),icon:m(J),circle:"",color:"#D6D6D6"},null,8,["onClick","icon"]),t(n,{class:"el-icon-yl",onClick:p=>U(g)},{default:s(()=>[t(m($))]),_:2},1032,["onClick"])])]),_:1},8,["list"])]),_:1})]),t(c,null,{default:s(()=>[t(i,{modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=d=>w.value=d)},{default:s(()=>[l("img",{"w-full":"",src:k.value,style:{width:"100%"},alt:"Preview Image"},null,8,ue)]),_:1},8,["modelValue"])]),_:1}),l("div",me,[t(r,{shadow:"always"},{default:s(()=>[t(a,{onClick:A,type:"success",style:{width:"100%"},size:"large"},{default:s(()=>[b("重新上传"),t(n,{class:"el-icon--right"},{default:s(()=>[t(m(q))]),_:1})]),_:1}),_e,ge,t(a,{onClick:F,type:"primary",style:{width:"100%"},size:"large"},{default:s(()=>[b("打包下载 "),t(n,{class:"el-icon--right"},{default:s(()=>[t(m(O))]),_:1})]),_:1})]),_:1})])],512),[[D,!x.value]])])}}});const Oe=X(fe,[["__scopeId","data-v-1b777b1d"]]);export{Oe as default};