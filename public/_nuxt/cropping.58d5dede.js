import{E as N}from"./index.f74eccca.js";import{E as R}from"./el-progress.dc5687d2.js";import{f as j,E as D,p as L,n as A,o as q,u as O,a as $}from"./constants.0fb4eb89.js";import{E as G}from"./el-switch.50da660a.js";import{E as J}from"./el-input.aa2448c5.js";import{E as K}from"./el-card.a1e9063b.js";import"./base.e040b817.js";/* empty css                  *//* empty css                */import{d as P,r as l,k as Q,l as X,z as b,A as z,m as t,q as o,s as r,B as u,v,x as Y,y as Z,_ as ee}from"./entry.b15f9cd9.js";import{f as te}from"./util.a9abac9b.js";import{W as oe}from"./vue-cropper.es.24ddf878.js";import"./index.fb1b8b13.js";import"./use-global-config.55fa202e.js";import"./use-form-common-props.5502e3a8.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./event.9519ab40.js";import"./index.cda2ae10.js";const s=p=>(Y("data-v-3eefa1e5"),p=p(),Z(),p),ae={style:{width:"90%",margin:"0 auto"}},le={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},ie=s(()=>t("div",{style:{"font-size":"24px",height:"50px"}},"图片裁剪",-1)),ne={style:{"margin-top":"10%","font-size":"24px"}},se=s(()=>t("div",{style:{color:"black"}},"或者拖放一个文件",-1)),re={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},ue={style:{float:"left",width:"60%",position:"relative"}},ce={style:{"text-align":"center","margin-top":"-20px"}},de={style:{float:"right",width:"20%",height:"442px",margin:"0 auto"}},pe={style:{height:"400px"}},me=s(()=>t("div",{style:{height:"20px"}},null,-1)),fe=s(()=>t("span",{style:{color:"#838282FF"}},"宽度(px) ",-1)),he=s(()=>t("div",{style:{height:"10px"}},null,-1)),_e=s(()=>t("span",{style:{color:"#838282FF"}},"高度(px) ",-1)),ve=s(()=>t("div",{style:{height:"40px"}},null,-1)),ge=s(()=>t("br",null,null,-1)),xe=s(()=>t("div",{style:{height:"15px"}},null,-1)),ye=s(()=>t("div",{style:{width:"100%",margin:"0 auto"}},null,-1)),we=P({__name:"cropping",setup(p){const C=l(!0),B=l("before"),f=l(!0),E=l();l(),l(),l();const S=l(""),g=l(),e=l({outputSize:1,outputType:"jpeg",info:!0,canScale:!0,autoCrop:!0,autoCropWidth:1e3,autoCropHeight:1e3,fixed:!1,fixedNumber:[1,1],full:!0,fixedBox:!1,canMove:!0,canMoveBox:!0,original:!1,centerBox:!0,height:!0,infoTrue:!0,maxImgSize:5e3,enlarge:1,mode:"contain",limitMinSize:[10,10],minCropBoxWidth:10,minCropBoxHeight:10}),x=l(),n=l(),h=l(),_=l(),k=async a=>{C.value=!0,B.value="before",S.value="",E.value=a.raw,f.value=!1,x.value=await te(a.raw);let i=document.getElementsByClassName("cropper-crop-box")[0];setTimeout(()=>{j(i,c=>{c[0].contentRect,h.value=(n.value.cropW/n.value.scale).toFixed(0),_.value=(n.value.cropH/n.value.scale).toFixed(0)})},300)},I=a=>{e.value.autoCropWidth=a*n.value.scale},V=a=>{e.value.autoCropHeight=a*n.value.scale},F=()=>{var a=document.createElement("a");a.download="demo",n.value.getCropData(i=>{a.href=i,a.click()})},W=()=>{var a,i;(i=(a=g.value)==null?void 0:a.$.vnode.el)==null||i.click()},H=()=>{n.value.rotateRight()},T=()=>{n.value.rotateLeft()};return(a,i)=>{const c=N,y=R,m=D,U=G,w=J,M=K;return Q(),X("div",ae,[b(t("div",le,[ie,t("div",null,[o(y,{class:"upload-demo",drag:"","show-file-list":!1,"auto-upload":!1,onChange:k,accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:r(()=>[t("div",ne,[o(c,{ref_key:"uploadRembgId",ref:g,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:u(L)},{default:r(()=>[v("上传图片")]),_:1},8,["icon"]),se])]),_:1})])],512),[[z,f.value]]),b(t("div",re,[t("div",ue,[t("div",ce,[o(m,{color:"#838282FF",onClick:T},{default:r(()=>[o(u(A))]),_:1}),o(m,{color:"#838282FF",onClick:H},{default:r(()=>[o(u(q))]),_:1})]),o(u(oe),{ref_key:"cropper",ref:n,style:{"max-width":"1000px",height:"600px"},img:x.value,"output-size":e.value.outputSize,info:e.value.info,"can-scale":e.value.canScale,"auto-crop":e.value.autoCrop,"auto-crop-width":e.value.autoCropWidth,"auto-crop-height":e.value.autoCropHeight,fixed:e.value.fixed,"fixed-number":e.value.fixedNumber,full:e.value.full,"fixed-box":e.value.fixedBox,"can-move":e.value.canMove,"can-move-box":e.value.canMoveBox,original:e.value.original,"center-box":e.value.centerBox,height:e.value.height,"info-true":e.value.infoTrue,"max-img-size":e.value.maxImgSize,enlarge:e.value.enlarge,mode:e.value.mode,"limit-min-size":e.value.limitMinSize},null,8,["img","output-size","info","can-scale","auto-crop","auto-crop-width","auto-crop-height","fixed","fixed-number","full","fixed-box","can-move","can-move-box","original","center-box","height","info-true","max-img-size","enlarge","mode","limit-min-size"])]),t("div",de,[t("div",pe,[o(M,{shadow:"always"},{default:r(()=>[o(U,{"active-text":"固定宽高比例",modelValue:e.value.fixed,"onUpdate:modelValue":i[0]||(i[0]=d=>e.value.fixed=d)},null,8,["modelValue"]),me,fe,o(w,{onInput:I,style:{width:"60%"},type:"number",modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=d=>h.value=d),placeholder:""},null,8,["modelValue"]),he,_e,o(w,{onInput:V,style:{width:"60%"},type:"number",modelValue:_.value,"onUpdate:modelValue":i[2]||(i[2]=d=>_.value=d),placeholder:""},null,8,["modelValue"]),ve,o(c,{onClick:W,type:"success",style:{width:"100%"},size:"large"},{default:r(()=>[o(m,{class:"el-icon--right"},{default:r(()=>[o(u(O))]),_:1}),v("重新上传")]),_:1}),ge,xe,o(c,{onClick:F,type:"primary",style:{width:"100%"},size:"large"},{default:r(()=>[o(m,{class:"el-icon--right"},{default:r(()=>[o(u($))]),_:1}),v("裁剪 ")]),_:1})]),_:1})]),ye])],512),[[z,!f.value]])])}}});const Le=ee(we,[["__scopeId","data-v-3eefa1e5"]]);export{Le as default};
