import{E as Q,p as Z}from"./constants.32292d8d.js";import{E as ee}from"./el-progress.1e2c2aec.js";import{E as te}from"./index.5fe7711e.js";import"./base.c3d2e3d9.js";/* empty css                *//* empty css                  */import"./el-loading.4998970f.js";import{C as ae,s as ne}from"./lamaSetting.c06625bf.js";import{E as oe}from"./index.55621d2c.js";import{d as re,r as s,k as le,l as ie,q as g,s as f,B as se,m as k,C as O,v as V,F as pe,_ as de}from"./entry.1dc6e359.js";import"./error.78e43d3e.js";import"./use-form-common-props.197ce949.js";import"./index.901f8d30.js";import"./use-global-config.5035f634.js";import"./index.f8748455.js";const ce={style:{width:"100px",height:"30px"}},ue="#ffcc00bb",me=re({__name:"imageCanvas",setup(he){const M=s([]),S=s("none"),h=s(),R=s(-1),I=s(-1),w=s(40),y=s("default"),L=s(),z=s(),u=s([]),d=s([]),G=s(),_=s(),C=s(!1),b=s(),D=async a=>{let e=a.raw;h.value=e;let o=await P(e);const n=document.getElementById("demoCanvas"),r=n.getContext("2d"),l=new Image;l.src=o,l.onload=()=>{G.value=l,n.width=l.width,n.height=l.height,L.value=l.width,z.value=l.height,r.drawImage(l,0,0),_.value=r,n.onmousemove=i=>{if(S.value="block",y.value="none",R.value=i.pageX,I.value=i.pageY,i.buttons===0||!C.value)return;const p=[...u.value];if(p.length!=0)return p[p.length-1].pts.push(F(i)),u.value=p,T(p),!1},n.onmousedown=i=>{C.value=!0;let p=u.value;return p.push({size:w.value,pts:[F(i)]}),u.value=p,T(p),!1},n.onmouseup=i=>(C.value=!1,!1),n.onmouseleave=i=>(S.value="none",y.value="default",!1)}},P=a=>new Promise((e,o)=>{let n=new FileReader;n.readAsDataURL(a),n.onload=r=>{e(r.target.result)}});function F(a){return{x:a.offsetX,y:a.offsetY}}const T=a=>{d.value.length===0?x(G.value,a):x(d.value[d.value.length-1],a)},x=(a,e)=>{let o=_.value;o&&(o.clearRect(0,0,o.canvas.width,o.canvas.height),o.drawImage(a,0,0,L.value,z.value),U(o,e))};function U(a,e,o=ue){a.strokeStyle=o,a.lineCap="round",a.lineJoin="round",e.forEach(n=>{!(n!=null&&n.pts.length)||!n.size||(a.lineWidth=n.size,a.beginPath(),a.moveTo(n.pts[0].x,n.pts[0].y),n.pts.forEach(r=>a.lineTo(r.x,r.y)),a.stroke())})}const W=async()=>{let a=oe.service({fullscreen:!0}),e=h.value,o=ne,n={x:0,y:0,width:0,height:0},r="",l="",i=-1,p,v=u.value;if(u.value=[],A([v]),d.value.length>0){const K=d.value[d.value.length-1];e=await X(K.currentSrc,h.value.name,h.value.type)}let t=b.value.toDataURL(),m;const c=await N(e,o,n,r,l,i,t,m,p);if(!c)throw new Error("Something went wrong on server side.");const{blob:E,seed:H}=c,B=new Image;await j(B,E);const J=[...d.value,B];d.value=J,x(B,[]),a.close()},A=a=>{b.value=document.createElement("canvas");let e=_.value,o=b.value;o.width=e==null?void 0:e.canvas.width,o.height=e==null?void 0:e.canvas.height;const n=o.getContext("2d");a.forEach(r=>{U(n,r,"white")})},N=async(a,e,o,n,r,l,i,p,v)=>{const t=new FormData;t.append("image",a),i!==void 0&&t.append("mask",Y(i));const m=e.hdSettings.lama;t.append("ldmSteps",e.ldmSteps.toString()),t.append("ldmSampler",e.ldmSampler.toString()),t.append("zitsWireframe",e.zitsWireframe.toString()),t.append("hdStrategy",m.hdStrategy),t.append("hdStrategyCropMargin",m.hdStrategyCropMargin.toString()),t.append("hdStrategyCropTrigerSize",m.hdStrategyCropTrigerSize.toString()),t.append("hdStrategyResizeLimit",m.hdStrategyResizeLimit.toString()),t.append("prompt",n===void 0?"":n),t.append("negativePrompt",r===void 0?"":r),t.append("croperX",o.x.toString()),t.append("croperY",o.y.toString()),t.append("croperHeight",o.height.toString()),t.append("croperWidth",o.width.toString()),t.append("useCroper",e.showCroper?"true":"false"),t.append("sdMaskBlur",e.sdMaskBlur.toString()),t.append("sdStrength",e.sdStrength.toString()),t.append("sdSteps",e.sdSteps.toString()),t.append("sdGuidanceScale",e.sdGuidanceScale.toString()),t.append("sdSampler",e.sdSampler.toString()),t.append("sdSeed",l?l.toString():"-1"),t.append("sdMatchHistograms",e.sdMatchHistograms?"true":"false"),t.append("sdScale",(e.sdScale/100).toString()),t.append("cv2Radius",e.cv2Radius.toString()),t.append("cv2Flag",e.cv2Flag.toString()),t.append("paintByExampleSteps",e.paintByExampleSteps.toString()),t.append("paintByExampleGuidanceScale",e.paintByExampleGuidanceScale.toString()),t.append("paintByExampleSeed",l?l.toString():"-1"),t.append("paintByExampleMaskBlur",e.paintByExampleMaskBlur.toString()),t.append("paintByExampleMatchHistograms",e.paintByExampleMatchHistograms?"true":"false"),v&&t.append("paintByExampleImage",v),t.append("p2pSteps",e.p2pSteps.toString()),t.append("p2pImageGuidanceScale",e.p2pImageGuidanceScale.toString()),t.append("p2pGuidanceScale",e.p2pGuidanceScale.toString()),t.append("controlnet_conditioning_scale",e.controlnetConditioningScale.toString()),t.append("controlnet_method",ae[e.controlnetMethod.toString()]);const c=await fetch("http://124.220.46.188:8080/inpaint",{method:"POST",body:t});if(c.ok){const E=await c.blob(),H=c.headers.get("x-seed");return{blob:URL.createObjectURL(E),seed:H}}await c.text()};function X(a,e,o){return fetch(a).then(function(n){return n.arrayBuffer()}).then(function(n){return new File([n],e,{type:o})})}function Y(a){const e=a.split(",")[0].split(":")[1].split(";")[0],o=atob(a.split(",")[1]),n=[];for(let r=0;r<o.length;r+=1)n.push(o.charCodeAt(r));return new Blob([new Uint8Array(n)],{type:e})}function j(a,e){return new Promise((o,n)=>{const r=a.src,l=a;l.onload=o,l.onerror=i=>{l.src=r,n(i)},l.src=e})}const $=()=>{const a=h.value.name.replace(/(\.[\w\d_-]+)$/i,"_cleanup$1"),e=d.value[d.value.length-1];q(e.currentSrc,a)};function q(a,e){const o=document.createElement("a");o.href=a,o.download=e,o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{o.remove()},100)}return(a,e)=>{const o=Q,n=ee,r=te;return le(),ie(pe,null,[g(n,{"file-list":M.value,"onUpdate:fileList":e[0]||(e[0]=l=>M.value=l),"auto-upload":!1,"list-type":"picture-card","show-file-list":!1,onChange:D},{default:f(()=>[g(o,null,{default:f(()=>[g(se(Z))]),_:1})]),_:1},8,["file-list"]),k("canvas",{id:"demoCanvas",style:O({border:"1px solid #eeeeee",float:"left",cursor:y.value}),onContextMenu:"return false"},null,4),k("div",{class:"brush-shape",style:O({width:w.value+"px",height:w.value+"px",left:R.value+"px",top:I.value+"px",transform:"translate(-50%, -50%)",display:S.value})},null,4),k("div",ce,[g(r,{onClick:W},{default:f(()=>[V("开始")]),_:1}),g(r,{onClick:$},{default:f(()=>[V("下载")]),_:1})])],64)}}});const Ie=de(me,[["__scopeId","data-v-c4e4a950"]]);export{Ie as default};
