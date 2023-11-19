import{T as D,M as L,H as A}from"./components.b8cc7c2b.js";import{E as q}from"./index.8f5bc808.js";import{E as O}from"./el-progress.1eae7595.js";import{f as $,E as G,p as J,n as K,o as P,u as Q,a as X}from"./constants.0737b991.js";import{E as Y}from"./el-switch.d159257d.js";import{E as Z}from"./el-input.f8350fa5.js";import{E as ee}from"./el-card.5d6d708b.js";import"./base.c054e6db.js";/* empty css                  *//* empty css                */import{d as te,r as l,k as oe,l as ae,q as t,s as n,v as m,m as o,z,A as C,B as u,F as le,x as ie,y as ne,_ as se}from"./entry.89a8456c.js";import{f as re}from"./util.a9abac9b.js";import{W as ue}from"./vue-cropper.es.09a17925.js";import"./index.64d33a3b.js";import"./use-global-config.0787c757.js";import"./use-form-common-props.4add0763.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./event.9519ab40.js";import"./index.5eefbf66.js";const r=d=>(ie("data-v-584577be"),d=d(),ne(),d),ce={style:{width:"90%",margin:"0 auto"}},de={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},pe=r(()=>o("div",{style:{"font-size":"24px",height:"50px"}},"图片裁剪",-1)),me={style:{"margin-top":"10%","font-size":"24px"}},fe=r(()=>o("div",{style:{color:"black"}},"或者拖放一个文件",-1)),_e={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},he={style:{float:"left",width:"60%",position:"relative"}},ve={style:{"text-align":"center","margin-top":"-20px"}},ge={style:{float:"right",width:"20%",height:"442px",margin:"0 auto"}},xe={style:{height:"400px"}},ye=r(()=>o("div",{style:{height:"20px"}},null,-1)),we=r(()=>o("span",{style:{color:"#838282FF"}},"宽度(px) ",-1)),be=r(()=>o("div",{style:{height:"10px"}},null,-1)),ze=r(()=>o("span",{style:{color:"#838282FF"}},"高度(px) ",-1)),Ce=r(()=>o("div",{style:{height:"40px"}},null,-1)),Be=r(()=>o("br",null,null,-1)),Ee=r(()=>o("div",{style:{height:"15px"}},null,-1)),ke=r(()=>o("div",{style:{width:"100%",margin:"0 auto"}},null,-1)),Se=te({__name:"cropping",setup(d){const B=l(!0),E=l("before"),f=l(!0),k=l();l(),l(),l();const S=l(""),y=l(),e=l({outputSize:1,outputType:"jpeg",info:!0,canScale:!0,autoCrop:!0,autoCropWidth:1e3,autoCropHeight:1e3,fixed:!1,fixedNumber:[1,1],full:!0,fixedBox:!1,canMove:!0,canMoveBox:!0,original:!1,centerBox:!0,height:!0,infoTrue:!0,maxImgSize:5e3,enlarge:1,mode:"contain",limitMinSize:[10,10],minCropBoxWidth:10,minCropBoxHeight:10}),w=l(),s=l(),_=l(),h=l(),F=async a=>{B.value=!0,E.value="before",S.value="",k.value=a.raw,f.value=!1,w.value=await re(a.raw);let i=document.getElementsByClassName("cropper-crop-box")[0];setTimeout(()=>{$(i,v=>{v[0].contentRect,_.value=(s.value.cropW/s.value.scale).toFixed(0),h.value=(s.value.cropH/s.value.scale).toFixed(0)})},300)},I=a=>{e.value.autoCropWidth=a*s.value.scale},V=a=>{e.value.autoCropHeight=a*s.value.scale},H=()=>{var a=document.createElement("a");a.download="demo",s.value.getCropData(i=>{a.href=i,a.click()})},T=()=>{var a,i;(i=(a=y.value)==null?void 0:a.$.vnode.el)==null||i.click()},M=()=>{s.value.rotateRight()},W=()=>{s.value.rotateLeft()};return(a,i)=>{const v=D,g=L,U=A,x=q,N=O,p=G,R=Y,b=Z,j=ee;return oe(),ae(le,null,[t(U,null,{default:n(()=>[t(v,null,{default:n(()=>[m("在线图片裁剪")]),_:1}),t(g,{name:"description",content:"在线图片裁剪"}),t(g,{name:"keywords",content:"图像,图片,调整尺寸,jpeg,png,gif,tiff,raw"})]),_:1}),o("div",ce,[z(o("div",de,[pe,o("div",null,[t(N,{class:"upload-demo",drag:"","show-file-list":!1,"auto-upload":!1,onChange:F,accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:n(()=>[o("div",me,[t(x,{ref_key:"uploadRembgId",ref:y,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:u(J)},{default:n(()=>[m("上传图片")]),_:1},8,["icon"]),fe])]),_:1})])],512),[[C,f.value]]),z(o("div",_e,[o("div",he,[o("div",ve,[t(p,{color:"#838282FF",onClick:W},{default:n(()=>[t(u(K))]),_:1}),t(p,{color:"#838282FF",onClick:M},{default:n(()=>[t(u(P))]),_:1})]),t(u(ue),{ref_key:"cropper",ref:s,style:{"max-width":"1000px",height:"600px"},img:w.value,"output-size":e.value.outputSize,info:e.value.info,"can-scale":e.value.canScale,"auto-crop":e.value.autoCrop,"auto-crop-width":e.value.autoCropWidth,"auto-crop-height":e.value.autoCropHeight,fixed:e.value.fixed,"fixed-number":e.value.fixedNumber,full:e.value.full,"fixed-box":e.value.fixedBox,"can-move":e.value.canMove,"can-move-box":e.value.canMoveBox,original:e.value.original,"center-box":e.value.centerBox,height:e.value.height,"info-true":e.value.infoTrue,"max-img-size":e.value.maxImgSize,enlarge:e.value.enlarge,mode:e.value.mode,"limit-min-size":e.value.limitMinSize},null,8,["img","output-size","info","can-scale","auto-crop","auto-crop-width","auto-crop-height","fixed","fixed-number","full","fixed-box","can-move","can-move-box","original","center-box","height","info-true","max-img-size","enlarge","mode","limit-min-size"])]),o("div",ge,[o("div",xe,[t(j,{shadow:"always"},{default:n(()=>[t(R,{"active-text":"固定宽高比例",modelValue:e.value.fixed,"onUpdate:modelValue":i[0]||(i[0]=c=>e.value.fixed=c)},null,8,["modelValue"]),ye,we,t(b,{onInput:I,style:{width:"60%"},type:"number",modelValue:_.value,"onUpdate:modelValue":i[1]||(i[1]=c=>_.value=c),placeholder:""},null,8,["modelValue"]),be,ze,t(b,{onInput:V,style:{width:"60%"},type:"number",modelValue:h.value,"onUpdate:modelValue":i[2]||(i[2]=c=>h.value=c),placeholder:""},null,8,["modelValue"]),Ce,t(x,{onClick:T,type:"success",style:{width:"100%"},size:"large"},{default:n(()=>[t(p,{class:"el-icon--right"},{default:n(()=>[t(u(Q))]),_:1}),m("重新上传")]),_:1}),Be,Ee,t(x,{onClick:H,type:"primary",style:{width:"100%"},size:"large"},{default:n(()=>[t(p,{class:"el-icon--right"},{default:n(()=>[t(u(X))]),_:1}),m("裁剪 ")]),_:1})]),_:1})]),ke])],512),[[C,!f.value]])])],64)}}});const Pe=se(Se,[["__scopeId","data-v-584577be"]]);export{Pe as default};
