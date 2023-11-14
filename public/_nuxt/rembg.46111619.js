import{E as X}from"./index.50b37a87.js";import{E as Y}from"./el-progress.56adb9af.js";import{E as Z,a as ee}from"./el-tabs.a4535582.js";import{E as te,p as oe,n as ae,o as le,z as ie,s as se,v as ne,u as re,a as ue}from"./constants.eb0fc12e.js";import{E as de}from"./el-color-picker.8858d601.js";import{_ as ce}from"./client-only.0e1563ec.js";import{b as me,a as pe}from"./el-radio-group.d592c6f7.js";import"./base.b0a13d53.js";/* empty css                  *//* empty css                */import"./el-input.948ae661.js";import"./el-loading.56cce6ad.js";import{d as fe,ac as ve,r as n,k as _e,l as ge,z as R,A as V,m as a,q as l,s as i,B as p,v as u,x as he,y as xe,_ as be}from"./entry.7321a61b.js";import{f as ye}from"./util.a9abac9b.js";import{W as we}from"./vue-cropper.es.1180917e.js";import{E as Ce}from"./index.f774654b.js";import"./index.636cfc4c.js";import"./use-global-config.f9c3cc9d.js";import"./use-form-common-props.d48746c9.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./aria.60e0cdc6.js";import"./event.9519ab40.js";import"./vnode.870dfb41.js";import"./index.35a12d77.js";import"./focus-trap.3b6a5446.js";import"./position.bdb00496.js";import"./index.d96f61cc.js";import"./debounce.dca621c7.js";import"./index.320bca2d.js";const d=b=>(he("data-v-5a5c226b"),b=b(),xe(),b),ze={style:{width:"90%",margin:"0 auto"}},ke={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},Be=d(()=>a("div",{style:{"font-size":"24px",height:"50px"}},"智能抠图 / 制作证件照",-1)),Ee={style:{"margin-top":"10%","font-size":"24px"}},Fe=d(()=>a("div",{style:{color:"black"}},"或者拖放一个文件",-1)),Ne={style:{width:"80%",margin:"0 auto","margin-top":"10%"}},Se={style:{float:"left",width:"60%",position:"relative"}},Ie={class:"cutout-image-container"},Re=["src"],Ve={class:"cutout-image-container"},Te={style:{"text-align":"center"}},Ue=d(()=>a("div",{style:{width:"100%",height:"100%"}},null,-1)),De={style:{float:"right",width:"35%",height:"442px",margin:"0 auto"}},Me={style:{height:"550px"}},$e={style:{"margin-top":"0px"}},Le={style:{"margin-top":"5px"}},Pe=d(()=>a("span",{style:{"font-size":"10px"}}," 295*413px | 25*35mm",-1)),We={style:{"margin-top":"5px"}},je=d(()=>a("span",{style:{"font-size":"10px"}}," 413*579px | 35*49mm",-1)),Ae={style:{"margin-top":"5px"}},He=d(()=>a("span",{style:{"font-size":"10px"}}," 260*378px | 22*32mm",-1)),Ge={style:{"margin-top":"5px"}},Oe=d(()=>a("span",{style:{"font-size":"10px"}}," 390*567px | 33*48mm",-1)),qe={style:{"margin-top":"5px"}},Je=d(()=>a("span",{style:{"font-size":"10px"}}," 413*531px | 35*45mm",-1)),Ke={style:{"margin-top":"5px"}},Qe=d(()=>a("span",{style:{"font-size":"10px"}}," 413*626px | 35*53mm",-1)),Xe={style:{"margin-top":"5px"}},Ye=d(()=>a("span",{style:{"font-size":"10px"}}," 649*991px | 55*84mm",-1)),Ze={style:{"margin-top":"5px"}},et=d(()=>a("span",{style:{"font-size":"10px"}}," 897*1204px | 76*102mm",-1)),tt={style:{"margin-top":"5px"}},ot=d(()=>a("span",{style:{"font-size":"10px"}}," 1050*1500px | 89*127mm",-1)),at={style:{"margin-top":"5px"}},lt=d(()=>a("span",{style:{"font-size":"10px"}}," 1200*1800px | 102*152mm",-1)),it={style:{width:"80%"}},st=fe({__name:"rembg",setup(b){const k=ve().public.baseURL,T=n(!0),s=n(),h=n("before"),w=n(!0),U=n(),C=n(),B=n(),z=n(),v=n(""),E=n(),D=n(["#000000","#0000FF","#FF0000","#90ee90","#00ced1","#1e90ff"]),F=n(),o=n({outputSize:1,outputType:"PNG",info:!0,canScale:!0,autoCrop:!1,autoCropWidth:300,autoCropHeight:300,fixed:!1,fixedNumber:[1,1],full:!0,fixedBox:!1,canMove:!0,canMoveBox:!0,original:!1,centerBox:!1,height:!1,infoTrue:!0,maxImgSize:3e3,enlarge:1,mode:"contain",limitMinSize:[10,10],minCropBoxWidth:10,minCropBoxHeight:10}),y=n(),N=n("bg"),M=async t=>{const e=Ce.service({lock:!0,text:"正在处理...",background:"rgba(0, 0, 0, 0.7)"});h.value="before",v.value="",U.value=t.raw,w.value=!1,B.value=await ye(t.raw),await $(t.raw),e.close()},$=async t=>{C.value=t;const e=new FormData;e.append("file",t),console.log(k);const _=await(await fetch(`${k}:5000/api/remove`,{method:"POST",body:e})).blob();z.value=URL.createObjectURL(_),F.value=z.value,T.value=!1,h.value="after"},L=t=>{const e=document.createElement("a");e.href=t,e.download=C.value.name,e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{e.remove()},100)},P=()=>{var t=new Image;o.value.autoCrop?s.value.getCropData(_=>{t.src=_}):t.src=z.value;let e=document.createElement("canvas"),c=e.getContext("2d");t.onload=()=>{if(o.value.autoCrop){let f=G();f?(e.width=f[0],e.height=f[1]):(e.width=t.width,e.height=t.height)}else e.width=t.width,e.height=t.height;v&&(c.fillStyle=v.value),c.fillRect(0,0,e.width,e.height),c.drawImage(t,0,0,t.width,t.height,0,0,e.width,e.height);var _=e.toDataURL(C.value.type);L(_)}},x=t=>{v.value=t,h.value="after";let e=document.getElementsByClassName("cropper-crop-box")[0];if(e.style.backgroundColor=t,!o.value.autoCrop){let c=document.getElementsByClassName("cropper-box-canvas")[0];c&&(c.style.backgroundColor=t)}},W=()=>{var t,e;(e=(t=E.value)==null?void 0:t.$.vnode.el)==null||e.click()},j=t=>!0,A=()=>{v.value="",y.value="",o.value.autoCrop=!1;let t=document.getElementsByClassName("cropper-crop-box")[0];t.style.backgroundColor="none";let e=document.getElementsByClassName("cropper-box-canvas")[0];e.style.backgroundColor="none",s.value.refresh()},H=t=>{if(!t)return;let e=document.getElementsByClassName("cropper-box-canvas")[0];e.style.backgroundColor="none",o.value.autoCrop=!0,t=="custom"?(o.value.fixedNumber=[1,1],o.value.fixed=!1,o.value.fixedBox=!1,o.value.info=!0,s.value.refresh()):(o.value.fixed=!0,o.value.fixedBox=!0,o.value.info=!1),t=="1c"&&(o.value.fixedNumber=[1,1.4],s.value.refresh()),t=="2c"&&(o.value.fixedNumber=[1,1.6],s.value.refresh()),t=="x1c"&&(o.value.fixedNumber=[1,1.453],s.value.refresh()),t=="d1c"&&(o.value.fixedNumber=[1,1.453],s.value.refresh()),t=="x2c"&&(o.value.fixedNumber=[1,1.285],s.value.refresh()),t=="d2c"&&(o.value.fixedNumber=[1,1.5175],s.value.refresh()),t=="3c"&&(o.value.fixedNumber=[1,1.527],s.value.refresh()),t=="4c"&&(o.value.fixedNumber=[1,1.342],s.value.refresh()),t=="5c"&&(o.value.fixedNumber=[1,1.428],s.value.refresh()),t=="6c"&&(o.value.fixedNumber=[1,1.5],s.value.refresh())},G=()=>{let t=y.value,e=null;return t=="1c"&&(e=[295,413]),t=="2c"&&(e=[413,579]),t=="x1c"&&(e=[260,378]),t=="d1c"&&(e=[390,567]),t=="x2c"&&(e=[413,531]),t=="d2c"&&(e=[413,626]),t=="3c"&&(e=[649,991]),t=="4c"&&(e=[897,1204]),t=="5c"&&(e=[1050,1500]),t=="6c"&&(e=[1200,1800]),e},O=()=>{s.value.rotateRight()},q=()=>{s.value.rotateLeft()},S=t=>{t=t||1,s.value.changeScale(t)};return(t,e)=>{const c=X,_=Y,f=Z,g=te,I=ee,J=de,K=ce,m=me,Q=pe;return _e(),ge("div",ze,[R(a("div",ke,[Be,a("div",null,[l(_,{class:"upload-demo",drag:"","show-file-list":!1,"auto-upload":!1,onChange:M,accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:i(()=>[a("div",Ee,[l(c,{ref_key:"uploadRembgId",ref:E,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:p(oe)},{default:i(()=>[u("上传图片")]),_:1},8,["icon"]),Fe])]),_:1})])],512),[[V,w.value]]),R(a("div",Ne,[a("div",Se,[l(I,{onTabChange:j,modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=r=>h.value=r),type:"card",style:{width:"100%"}},{default:i(()=>[l(f,{name:"before",label:"抠图前"},{default:i(()=>[a("div",Ie,[a("img",{src:B.value,style:{"max-width":"100%","max-height":"100%",display:"block"}},null,8,Re)])]),_:1}),l(f,{name:"after",label:"抠图后"},{default:i(()=>[a("div",Ve,[l(p(we),{ref_key:"cropper",ref:s,style:{"max-width":"1000px",height:"550px","background-image":"none"},img:F.value,"output-type":o.value.outputType,"output-size":o.value.outputSize,info:o.value.info,"can-scale":o.value.canScale,"auto-crop":o.value.autoCrop,"auto-crop-width":o.value.autoCropWidth,"auto-crop-height":o.value.autoCropHeight,fixed:o.value.fixed,"fixed-number":o.value.fixedNumber,full:o.value.full,"fixed-box":o.value.fixedBox,"can-move":o.value.canMove,"can-move-box":o.value.canMoveBox,original:o.value.original,"center-box":o.value.centerBox,height:o.value.height,"info-true":o.value.infoTrue,"max-img-size":o.value.maxImgSize,enlarge:o.value.enlarge,mode:o.value.mode,"limit-min-size":o.value.limitMinSize},null,8,["img","output-type","output-size","info","can-scale","auto-crop","auto-crop-width","auto-crop-height","fixed","fixed-number","full","fixed-box","can-move","can-move-box","original","center-box","height","info-true","max-img-size","enlarge","mode","limit-min-size"])]),a("div",Te,[l(g,{color:"#838282FF",onClick:q},{default:i(()=>[l(p(ae))]),_:1}),l(g,{color:"#838282FF",onClick:O},{default:i(()=>[l(p(le))]),_:1}),l(g,{color:"#838282FF",onClick:e[0]||(e[0]=r=>S(1))},{default:i(()=>[l(p(ie))]),_:1}),l(g,{color:"#838282FF",onClick:e[1]||(e[1]=r=>S(-1))},{default:i(()=>[l(p(se))]),_:1}),l(g,{color:"#838282FF",onClick:e[2]||(e[2]=r=>A())},{default:i(()=>[l(p(ne))]),_:1})])]),_:1}),Ue]),_:1},8,["modelValue"]),l(c,{type:"primary",onClick:W,style:{position:"absolute",top:"5px",right:"0"},icon:p(re)},{default:i(()=>[u("重新上传")]),_:1},8,["icon"])]),a("div",De,[a("div",Me,[l(I,{class:"demo-tabs",modelValue:N.value,"onUpdate:modelValue":e[10]||(e[10]=r=>N.value=r)},{default:i(()=>[l(f,{label:"背景",name:"bg"},{default:i(()=>[l(K,null,{default:i(()=>[a("div",{onClick:e[4]||(e[4]=r=>x("")),class:"bgColor cutout-image-container"}),a("div",{onClick:e[5]||(e[5]=r=>x("#ffffff")),class:"bgColor",style:{"background-color":"white"}}),a("div",{onClick:e[6]||(e[6]=r=>x("#0000FF")),class:"bgColor",style:{"background-color":"blue"}}),a("div",{onClick:e[7]||(e[7]=r=>x("#FF0000")),class:"bgColor",style:{"background-color":"red"}}),l(J,{onActiveChange:x,style:{"margin-left":"5px"},size:"large",modelValue:v.value,"onUpdate:modelValue":e[8]||(e[8]=r=>v.value=r),"color-format":"hex","show-alpha":!1,predefine:D.value},null,8,["modelValue","predefine"])]),_:1})]),_:1}),l(f,{label:"尺寸",name:"size"},{default:i(()=>[l(Q,{modelValue:y.value,"onUpdate:modelValue":e[9]||(e[9]=r=>y.value=r),size:"large",onChange:H},{default:i(()=>[a("div",$e,[l(m,{style:{width:"100%"},label:"custom",name:"custom"},{default:i(()=>[u("自定义")]),_:1})]),a("div",Le,[l(m,{style:{width:"100%"},label:"1c",name:"1c"},{default:i(()=>[u("一寸"),Pe]),_:1})]),a("div",We,[l(m,{style:{width:"100%"},label:"2c",name:"2c"},{default:i(()=>[u("二寸"),je]),_:1})]),a("div",Ae,[l(m,{style:{width:"100%"},label:"x1c",name:"x1c"},{default:i(()=>[u("小一寸"),He]),_:1})]),a("div",Ge,[l(m,{style:{width:"100%"},label:"d1c",name:"d1c"},{default:i(()=>[u("大一寸"),Oe]),_:1})]),a("div",qe,[l(m,{style:{width:"100%"},label:"x2c",name:"x2c"},{default:i(()=>[u("小二寸"),Je]),_:1})]),a("div",Ke,[l(m,{style:{width:"100%"},label:"d2c",name:"d2c"},{default:i(()=>[u("大二寸"),Qe]),_:1})]),a("div",Xe,[l(m,{style:{width:"100%"},label:"3c",name:"3c"},{default:i(()=>[u("三寸"),Ye]),_:1})]),a("div",Ze,[l(m,{style:{width:"100%"},label:"4c",name:"4c"},{default:i(()=>[u("四寸"),et]),_:1})]),a("div",tt,[l(m,{style:{width:"100%"},label:"5c",name:"5c"},{default:i(()=>[u("五寸"),ot]),_:1})]),a("div",at,[l(m,{style:{width:"100%"},label:"6c",name:"6c"},{default:i(()=>[u("六寸"),lt]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),a("div",it,[l(c,{onClick:P,type:"primary",style:{width:"100%"},size:"large"},{default:i(()=>[l(g,{class:"el-icon--right"},{default:i(()=>[l(p(ue))]),_:1}),u("下载 ")]),_:1})])])],512),[[V,!w.value]])])}}});const Mt=be(st,[["__scopeId","data-v-5a5c226b"]]);export{Mt as default};
