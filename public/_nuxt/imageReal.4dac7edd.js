import{E as j,p as z}from"./constants.0fb4eb89.js";import{E as V}from"./el-progress.dc5687d2.js";import"./base.e040b817.js";/* empty css                */import{d as $,r as a,o as q,k as G,l as J,q as w,s as B,B as K,m as r,t as m,F as Q}from"./entry.b15f9cd9.js";import"./error.78e43d3e.js";import"./use-form-common-props.5502e3a8.js";const X=r("canvas",{id:"canvas-upload"},null,-1),Y=r("canvas",{id:"canvas-output"},null,-1),re=$({__name:"imageReal",setup(Z){const _=a([]);let c=null,u=null;var i=null;const C=a(0),E=a(0),O=a(),k=a(),d=a(),y=a(!1),I=a(!1),M=a(50),g=a(0),v=a(0),h=a(0),L=a(2),p=a(0),P=a(0),R=a(0),S=a(-1),D=a(0),b=a(!0),x=a();q(function(){i={print:t=>{console.log("print",t),t.length>11&&t.substring(0,10)==="$CALLBACK$"&&F(t.substring(11,t.length))},printErr:t=>{console.log("err",t)}},W()});const N=t=>{if(A())return;let e=document.getElementById("canvas-upload"),l=e.getContext("2d"),o=new FileReader;o.onload=s=>{let n=new Image;n.onload=()=>{e.width=n.width,e.height=n.height,l.drawImage(n,0,0),C.value=n.width,E.value=n.height,O.value=t.name;let f=l.getImageData(0,0,e.width,e.height);U(f,e.width,e.height)},n.src=s.target.result,k.value=s.target.result},o.readAsDataURL(t.raw)},U=(t,e,l)=>{let o=document.getElementById("canvas-output");o.getContext("2d"),d.value="启动中，预计10秒内完成耗时估算...",y.value=!0,I.value=!1,M.value=50,g.value=0,v.value=0,h.value=0,p.value=L.value,D.value=S.value,P.value=C.value*p.value,R.value=E.value*p.value,o.width=P.value,o.height=R.value;let s=document.getElementById("canvas-output"),n=s.getContext("2d");c=_malloc(t.data.length),HEAPU8.set(t.data,c);let f=n.getImageData(0,0,s.width,s.height);u=_malloc(f.data.length),_process_image(0,c,u,e,l,p.value,D.value)!==0&&console.log("请稍后再试,调用冲突")},A=()=>b.value?!1:(console.log("正在努力加载资源中(约12MB)，请稍后再试"),!0),F=t=>{try{let e=JSON.parse(t);switch(e.eventType){case"PROC_END":T(e.cost);break;case"PROC_PROGRESS":H(e.total_cost,e.tile_cost,e.progress_rate,e.remaining_time)}}catch(e){console.error("wasmCallback parse error:",e)}},H=(t,e,l,o)=>{d.value="本地CPU努力处理中......",g.value=Math.ceil(l*100),v.value=t,h.value=Math.round(o/1e3)},T=t=>{console.log(111);let e=document.getElementById("canvas-output"),l=e.getContext("2d"),o=l.getImageData(0,0,e.width,e.height),s=HEAPU8.subarray(u,u+o.data.length);o.data.set(s),l.putImageData(o,0,0),console.log("output size: ",s.length),x.value=e.toDataURL(),_free(c),_free(u),c=null,u=null,y.value=!1,I.value=!0;let n=Math.round(t/1e3);t<1e3&&(n=(t/1e3).toFixed(2)),d.value="处理完成！耗时: "+n+"秒"},W=()=>{fetch("wasm/realcugan-ncnn-webassembly-simd-threads.wasm").then(t=>{t.arrayBuffer()}).then(t=>{i.wasmBinary=t;let e=document.createElement("script");e.src="worker/initRealCuganModule.js",e.onload=()=>{setModule(i);let l=document.createElement("script");l.src="worker/realcugan-ncnn-webassembly-simd-threads.js",l.onload=()=>{console.log("Emscripten loaded.")},document.body.appendChild(l)},document.body.appendChild(e),i.onRuntimeInitialized=()=>{console.log("wasm module loaded"),b.value=!0}})};return(t,e)=>{const l=j,o=V;return G(),J(Q,null,[w(o,{"file-list":_.value,"onUpdate:fileList":e[0]||(e[0]=s=>_.value=s),"auto-upload":!1,"list-type":"picture-card","show-file-list":!0,onChange:N},{default:B(()=>[w(l,null,{default:B(()=>[w(K(z))]),_:1})]),_:1},8,["file-list"]),r("div",null,m(d.value),1),r("div",null,m(g.value),1),r("div",null,m(v.value),1),r("div",null,m(h.value),1),X,Y],64)}}});export{re as default};
