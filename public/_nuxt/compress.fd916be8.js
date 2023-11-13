import{d as _e,r as m,k as he,l as ge,m as a,z as w,A as b,q as n,s as u,B as z,v as f,t as S,C as j,F as we,G as be,D as ye,x as xe,y as Ee,_ as ke}from"./entry.b15f9cd9.js";import{E as ze}from"./index.f74eccca.js";import{E as Se}from"./el-progress.dc5687d2.js";import{B as Be,E as Ie,a as Ce,b as Pe}from"./beforafter.cc9044ff.js";import{E as Ve,p as Y,b as Ue,t as Le,d as Ne,a as Fe}from"./constants.0fb4eb89.js";import{E as Ge}from"./el-switch.50da660a.js";import{E as We}from"./el-input-number.4fd7f639.js";import{E as Re,a as qe}from"./el-radio-group.1be98731.js";import{E as De}from"./el-card.a1e9063b.js";import{E as Ae}from"./el-overlay.33123db5.js";import"./base.e040b817.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-scrollbar.41fb776b.js";import"./el-input.aa2448c5.js";import"./el-loading.764bfe53.js";import{s as Te,e as Je}from"./compressImageOptions.81079d9e.js";import{J as Me,F as je}from"./FileSaver.min.8ad78cd6.js";import{W as ee}from"./compress-worker.e7f2ed7b.js";import{E as O}from"./index.2636c4c6.js";import"./index.fb1b8b13.js";import"./use-global-config.55fa202e.js";import"./use-form-common-props.5502e3a8.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./index.600d1f4a.js";import"./aria.60e0cdc6.js";import"./focus-trap.8efa8190.js";import"./_commonjsHelpers.042e6b4d.js";import"./debounce.fead197d.js";import"./event.9519ab40.js";import"./index.d4df232b.js";import"./vnode.bca66073.js";import"./scroll.e8e2652b.js";import"./index.cda2ae10.js";const h=V=>(xe("data-v-479d1b5f"),V=V(),Ee(),V),Oe={style:{width:"90%",margin:"0 auto"}},$e={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},He=h(()=>a("div",{style:{"font-size":"24px",height:"50px"}},"图片压缩",-1)),Ze={style:{"margin-top":"10%","font-size":"24px"}},Ke=h(()=>a("div",{style:{color:"black"}},"或者拖放多个文件",-1)),Qe={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},Xe={style:{float:"left",height:"500px",width:"70%"}},Ye={style:{overflow:"hidden",display:"inline-block","max-width":"180px","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},et={style:{display:"flex","align-items":"center"}},tt={style:{display:"flex","align-items":"center"}},at={style:{display:"flex","align-items":"center"}},lt={style:{color:"#67c23a"}},ot={style:{color:"rgba(255,0,0,1)"}},st={style:{"text-align":"right"}},it={style:{float:"right",width:"25%",height:"442px",margin:"0 auto"}},nt={style:{height:"400px","margin-top":"20px"}},rt={class:"slider-demo-block"},ut=h(()=>a("span",{style:{"font-size":"14px",color:"#c0c4cc"},class:""},[f("压缩比"),a("span",{style:{"font-size":"12px"}}," (值越小,压缩能力越强)")],-1)),ct=h(()=>a("div",null,null,-1)),dt={class:"slider-demo-block"},mt=h(()=>a("div",{style:{height:"20px"}},null,-1)),pt=h(()=>a("br",null,null,-1)),vt=h(()=>a("div",{style:{height:"15px"}},null,-1)),ft={class:"mainSection"},_t=["src"],ht=h(()=>a("div",{class:"bal-afterPosition afterLabel"},"压缩后",-1)),gt={class:"bal-before"},wt=["src"],bt=h(()=>a("div",{class:"bal-beforePosition beforeLabel"},"压缩前",-1)),yt=h(()=>a("div",{class:"bal-handle"},[a("span",{class:"handle-left-arrow"}),a("span",{class:"handle-right-arrow"})],-1)),xt=_e({__name:"compress",setup(V){m(!0);const W=m(!0),$=m(),l=m([]),U=m(!0),B=m(73),R=m(!1),H=m(),Z=m(),y=m(0),x=m("100%"),q=m("80%"),D=m(0),L=m(),N=m(!1),A=m("mozJPEG"),te=async(e,t)=>{L.value||(L.value=O.service({lock:!0,text:"正在加载图片...",background:"rgba(0, 0, 0, 0.7)"}));let o=t.length;D.value=Math.max(o,D.value),setTimeout(()=>{if(o===D.value){W.value=!1;for(let c=l.value.length;c<t.length;c++)e=t[c],T.value+=e.size,l.value.push({url:e.url,name:e.raw.name,size:e.size,raw:e.raw,type:e.raw.type,compressSize:"-",index:l.value.length-1,flag:!1});L.value.close(),L.value=null}},1)},F=function(e){var t="";e<.1*1024?t=e.toFixed(2)+" B":e<.1*1024*1024?t=(e/1024).toFixed(2)+" KB":e<.1*1024*1024*1024?t=(e/(1024*1024)).toFixed(2)+" MB":t=(e/(1024*1024*1024)).toFixed(2)+" GB";var o=t+"",c=o.indexOf("."),r=o.substr(c+1,2);return r=="00"?o.substring(0,c)+o.substr(c+3,2):o},ae=()=>{var e,t;(t=(e=$.value)==null?void 0:e.$.vnode.el)==null||t.click()},G=m(1),I=m(0),K=m();async function le(){C.value=0;const e=O.service({lock:!0,background:"rgba(0, 0, 0, 0.7)"}),t=(await be(()=>import("./compress.0566e9c3.js"),[],import.meta.url)).default;K.value=t;let o=[];e.setText("0/"+l.value.length);let c=10;c>l.value.length&&(c=l.value.length);let r=[];for(let d=0;d<c;d++)r.push(new ee);let s=[];for(let d=0;d<l.value.length;d++){let v=await Q();if(!v)continue;let p=parseInt(fe(d+"")),g=r[p];v.poolIndex=p,o.push(new Promise((E,X)=>{g.postMessage(v);let P=async k=>{if(k.data){let i=k.data.index,_=k.data.poolIndex;console.log("task-end:",i,_),e.setText(G.value+"/"+l.value.length),G.value=G.value+1,s[i]=k.data,r[_]&&(r[_].removeEventListener("message",P,!1),r[_].terminate(),r[_]=null);let M=await Q();d=I.value,M?(r[_]=new ee,M.poolIndex=_,r[_].postMessage(M),r[_].addEventListener("message",P,!1)):E(null)}};g.addEventListener("message",P,!1)})),o.length==c&&(await Promise.all(o),o=[])}await Promise.all(o);for(let d=0;d<r.length;d++)r[d]&&r[d].terminate();e.setText("压缩完成,正在渲染列表...");for(let d=0;d<s.length;d++){let v=s[d];if(!v)continue;let p=v.index;l.value[p].compressSize=F(v.size),C.value+=v.size;let g=new Image;g.onload=()=>{l.value[p].imageWidth=g.width,l.value[p].imageHeight=g.height},l.value[p].compressName=v.compressName,l.value[p].compressBase64=v.compressBase64,l.value[p].afterUrl=se(oe(v.compressBase64)),g.src=l.value[p].afterUrl,l.value[p].compressRatio=Math.floor(100-v.size/l.value[p].size*100),l.value[p].flag=!1}r.value=null,I.value=0,G.value=0,e.close()}const Q=async()=>{let e=I.value;if(e>=l.value.length||l.value[e].flag)return null;l.value[e].flag=!0,I.value=I.value+1;let t=l.value[e].type;t=ie(t),N.value&&(t=A.value);let o=await pe(t),c=l.value[e].raw,r=B.value/100;const s=JSON.parse(JSON.stringify(Te));s.encoderState=Je[t],s.encoderState.options.quality=B.value,s.processorState.quantize.enabled=!1,s.processorState.resize.enabled=!1,t=="oxiPNG"&&(s.processorState.quantize.enabled=!0,s.processorState.quantize.dither=0,U.value?s.processorState.quantize.maxNumColors=256:s.processorState.quantize.maxNumColors=256*r),t=="avif"&&(s.encoderState.options.cqLevel=63-63*r);let d;return t!="browserGIF"&&(d=await new K.value(c,s).process()),{qratio:r,compressFile:d,fileName:l.value[e].name,encoderState:s.encoderState,image:c,setting:s,wasmArrayBuffer:o,type:t,index:e}};function oe(e){for(var t=e.split(","),o=t[0].match(/:(.*?);/)[1],c=atob(t[1]),r=c.length,s=new Uint8Array(r);r--;)s[r]=c.charCodeAt(r);return new Blob([s],{type:o})}function se(e){return window.URL.createObjectURL(e)}const ie=e=>e=="image/jpeg"||e=="image/jpg"?"mozJPEG":e=="image/png"?"oxiPNG":e=="image/webp"?"webP":e=="image/avif"?"avif":e=="image/gif"?"browserGIF":"mozJPEG",ne=e=>{const t=document.createElement("a");t.href=l.value[e].compressBase64,t.download=l.value[e].compressName,t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{t.remove()},100)},re=e=>{e&&(B.value=73)},T=m(0),C=m(0),ue=e=>{R.value=!0,y.value=0,q.value="80%",ye(()=>{new Be({id:"#one"}),x.value="100%",H.value=l.value[e].url,Z.value=l.value[e].afterUrl;let t=document.getElementsByClassName("mainSection")[0];if(l.value[e].imageWidth<t.offsetWidth)y.value=l.value[e].imageHeight,x.value=l.value[e].imageWidth+"px",q.value=l.value[e].imageWidth+50+"px";else{let o=t.offsetWidth*(l.value[e].imageHeight/l.value[e].imageWidth);y.value=o,x.value=t.offsetWidth+"px"}})},ce=()=>{if(l.value.length==0)return;const e=O.service({lock:!0,text:"正在打包...",background:"rgba(0, 0, 0, 0.7)"});let t=new Me;for(let o=0;o<l.value.length;o++)t.file(l.value[o].compressName,de(l.value[o].compressBase64),{base64:!0});t.generateAsync({type:"blob"}).then(function(o){je.saveAs(o,"图片.zip")}),e.close()},de=e=>{var t=e.split(",");return t[1]},me=e=>{const{columns:t,data:o}=e,c=[];return t.forEach((r,s)=>{if(s===0){c[s]="图片数量 "+l.value.length;return}if(s===1){c[s]=F(T.value);return}if(s===2){c[s]=F(C.value);return}if(C.value>0&&s===3){let d=Math.floor(100-C.value/T.value*100)+" %";c[s]="↓"+d;return}}),c},J=m({});async function pe(e){let t;return e=="browserGIF"?null:(e=="mozJPEG"&&(t=new URL("../wasm/mozjpeg_enc.wasm",self.location).toString()),e=="oxiPNG"&&(t=new URL("../wasm/squoosh_oxipng_bg.wasm",self.location).toString()),e=="webP"&&(await ve()?t=new URL("../wasm/webp_enc_simd.wasm",self.location).toString():t=new URL("../wasm/webp_enc.wasm",self.location).toString()),e=="avif"&&(t=new URL("../wasm/avif_enc.wasm",self.location).toString()),J[e]||await fetch(t,{credentials:"same-origin"}).then(function(o){if(!o.ok)throw"failed to load wasm binary file at '"+t+"'";J[e]=o.arrayBuffer()}),J[e])}var ve=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function fe(e){const t=e.match(/\d(?=\D*$)/);return t?parseInt(t[0]):null}return(e,t)=>{const o=ze,c=Se,r=Ie,s=Ce,d=Ve,v=Pe,p=Ge,g=We,E=Re,X=qe,P=De,k=Ae;return he(),ge(we,null,[a("div",Oe,[w(a("div",$e,[He,a("div",null,[n(c,{class:"upload-demo",drag:"","list-type":"picture-card","show-file-list":!1,"auto-upload":!1,onChange:te,multiple:"true",accept:".gif,.png,.webp,.avif,.jpg,.jpeg"},{default:u(()=>[a("div",Ze,[n(o,{ref_key:"uploadId",ref:$,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:z(Y)},{default:u(()=>[f("上传多个图片")]),_:1},8,["icon"]),Ke])]),_:1})])],512),[[b,W.value]]),w(a("div",Qe,[a("div",Xe,[n(v,{"summary-method":me,"show-summary":"",data:l.value,height:"600"},{default:u(()=>[n(s,{label:"文件名","min-width":"140"},{default:u(i=>[n(r,{effect:"light",trigger:"hover",placement:"right",width:"auto"},{default:u(()=>[a("div",null,S(i.row.name),1)]),reference:u(()=>[a("span",Ye,S(i.row.name),1)]),_:2},1024)]),_:1}),n(s,{label:"原大小","min-width":"120"},{default:u(i=>[a("div",et,[a("span",null,S(F(i.row.size)),1)])]),_:1}),n(s,{label:"压缩后大小","min-width":"120"},{default:u(i=>[a("div",tt,[a("span",null,S(i.row.compressSize),1)])]),_:1}),n(s,{label:"节省","min-width":"100"},{default:u(i=>[a("div",at,[w(a("span",null,"-",512),[[b,!i.row.compressRatio]]),w(a("span",lt,[n(d,null,{default:u(()=>[n(z(Ue))]),_:1}),f(S(i.row.compressRatio)+"%",1)],512),[[b,i.row.compressRatio>=0]]),w(a("span",ot,[n(d,null,{default:u(()=>[n(z(Le))]),_:1}),f(S(Math.abs(i.row.compressRatio))+"%",1)],512),[[b,i.row.compressRatio<0]])])]),_:1}),n(s,{align:"right","min-width":"120"},{header:u(()=>[a("div",st,[n(o,{type:"",text:"",onClick:ae,icon:z(Y)},{default:u(()=>[f("添加更多图片")]),_:1},8,["icon"])])]),default:u(i=>[w(n(o,{size:"small",onClick:_=>ue(i.$index,i.row)},{default:u(()=>[f("查看")]),_:2},1032,["onClick"]),[[b,i.row.compressBase64]]),w(n(o,{size:"small",type:"danger",onClick:_=>ne(i.$index,i.row)},{default:u(()=>[f("下载")]),_:2},1032,["onClick"]),[[b,i.row.compressBase64]])]),_:1})]),_:1},8,["data"])]),a("div",it,[a("div",nt,[n(P,{shadow:"always"},{default:u(()=>[n(p,{onChange:re,"active-text":"无损压缩",modelValue:U.value,"onUpdate:modelValue":t[0]||(t[0]=i=>U.value=i)},null,8,["modelValue"]),w(a("div",rt,[ut,n(g,{modelValue:B.value,"onUpdate:modelValue":t[1]||(t[1]=i=>B.value=i),placement:"bottom",min:1},null,8,["modelValue"])],512),[[b,!U.value]]),ct,n(p,{"active-text":"格式转换",modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=i=>N.value=i)},null,8,["modelValue"]),w(a("div",dt,[n(X,{modelValue:A.value,"onUpdate:modelValue":t[3]||(t[3]=i=>A.value=i)},{default:u(()=>[n(E,{label:"mozJPEG"},{default:u(()=>[f("JPG")]),_:1}),n(E,{label:"oxiPNG"},{default:u(()=>[f("PNG")]),_:1}),n(E,{label:"webP"},{default:u(()=>[f("WEBP")]),_:1}),n(E,{label:"avif"},{default:u(()=>[f("AVIF")]),_:1})]),_:1},8,["modelValue"])],512),[[b,N.value]]),mt,n(o,{onClick:le,type:"success",style:{width:"100%"},size:"large"},{default:u(()=>[f("开始压缩"),n(d,{class:"el-icon--right"},{default:u(()=>[n(z(Ne))]),_:1})]),_:1}),pt,vt,n(o,{onClick:ce,type:"primary",style:{width:"100%"},size:"large"},{default:u(()=>[f("打包下载 "),n(d,{class:"el-icon--right"},{default:u(()=>[n(z(Fe))]),_:1})]),_:1})]),_:1})])])],512),[[b,!W.value]])]),n(k,{"open-delay":"","append-to-body":"",modelValue:R.value,"onUpdate:modelValue":t[4]||(t[4]=i=>R.value=i),width:q.value,"align-center":"",center:""},{default:u(()=>[a("div",ft,[a("div",{id:"one",style:j({height:y.value+"px",width:x.value}),class:"bal-container"},[a("div",{style:j({height:y.value+"px",width:x.value}),class:"bal-after"},[a("img",{src:Z.value},null,8,_t),ht],4),a("div",gt,[a("div",{style:j({height:y.value+"px",width:x.value}),class:"bal-before-inset"},[a("img",{id:"afterImageId",src:H.value},null,8,wt),bt],4)]),yt],4)])]),_:1},8,["modelValue","width"])],64)}}});const sa=ke(xt,[["__scopeId","data-v-479d1b5f"]]);export{sa as default};
