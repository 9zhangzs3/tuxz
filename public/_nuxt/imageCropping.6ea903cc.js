import{E as g,p as x}from"./constants.eb0fc12e.js";import{E as h}from"./el-progress.56adb9af.js";import"./base.b0a13d53.js";/* empty css                */import{W as b}from"./vue-cropper.es.1180917e.js";import{d as w,r as n,k as C,l as B,q as u,s as m,B as p,m as z}from"./entry.7321a61b.js";import"./error.78e43d3e.js";import"./use-form-common-props.d48746c9.js";const W=w({__name:"imageCropping",setup(_){const s=n([]),i=n(),e=n({outputSize:1,outputType:"jpeg",info:!1,canScale:!0,autoCrop:!0,autoCropWidth:300,autoCropHeight:300,fixed:!0,fixedNumber:[1,1],full:!1,fixedBox:!1,canMove:!0,canMoveBox:!0,original:!1,centerBox:!0,height:!0,infoTrue:!1,maxImgSize:3e3,enlarge:1,mode:"contain",limitMinSize:[10,10],minCropBoxWidth:10,minCropBoxHeight:10}),c=n(),d=async a=>{let o=await f(a.raw);c.value=o,console.log(i.value.trueWidth)},f=a=>new Promise((o,t)=>{let l=new FileReader;l.readAsDataURL(a),l.onload=r=>{o(r.target.result)}}),v=a=>{var o=document.createElement("a");o.download="demo",a==="blob"?i.value.getCropBlob(t=>{o.href=window.URL.createObjectURL(t),o.click()}):i.value.getCropData(t=>{o.href=t,o.click()})};return(a,o)=>{const t=g,l=h;return C(),B("div",null,[u(l,{"file-list":s.value,"onUpdate:fileList":o[0]||(o[0]=r=>s.value=r),"auto-upload":!1,"list-type":"picture-card","on-preview":a.handlePictureCardPreview,"on-remove":a.handleRemove,"show-file-list":!0,onChange:d},{default:m(()=>[u(t,null,{default:m(()=>[u(p(x))]),_:1})]),_:1},8,["file-list","on-preview","on-remove"]),u(p(b),{ref_key:"cropper",ref:i,style:{width:"200px",height:"200px"},img:c.value,"output-size":e.value.outputSize,info:e.value.info,"can-scale":e.value.canScale,"auto-crop":e.value.autoCrop,"auto-crop-width":e.value.autoCropWidth,"auto-crop-height":e.value.autoCropHeight,fixed:e.value.fixed,"fixed-number":e.value.fixedNumber,full:e.value.full,"fixed-box":e.value.fixedBox,"can-move":e.value.canMove,"can-move-box":e.value.canMoveBox,original:e.value.original,"center-box":e.value.centerBox,height:e.value.height,"info-true":e.value.infoTrue,"max-img-size":e.value.maxImgSize,enlarge:e.value.enlarge,mode:e.value.mode,"limit-min-size":e.value.limitMinSize},null,8,["img","output-size","info","can-scale","auto-crop","auto-crop-width","auto-crop-height","fixed","fixed-number","full","fixed-box","can-move","can-move-box","original","center-box","height","info-true","max-img-size","enlarge","mode","limit-min-size"]),z("a",{onClick:o[1]||(o[1]=r=>v("base64")),class:"btn"},"download(base64)")])}}});export{W as default};