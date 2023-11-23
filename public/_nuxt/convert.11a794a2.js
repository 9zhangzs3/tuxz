import{d as fe,r as m,o as he,k as ge,l as _e,q as i,s as r,v as f,m as o,z as _,A as w,B as k,t as E,C as A,F as we,G as be,D as ye,x as xe,y as ze,_ as ke}from"./entry.89a8456c.js";import{T as Ee,M as Be,H as Se}from"./components.b8cc7c2b.js";import{E as Ie}from"./index.8f5bc808.js";import{E as Pe}from"./el-progress.1eae7595.js";import{B as Ce,E as Le,a as Ue,b as je}from"./beforafter.d49990a2.js";import{E as Ge,p as X,b as Ne,t as Re,d as We,a as Fe}from"./constants.0737b991.js";import{E as Te,a as Me}from"./el-radio-group.65868cc8.js";import{E as Ve}from"./el-card.5d6d708b.js";import{E as qe}from"./el-overlay.07b01796.js";import"./base.c054e6db.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-scrollbar.41fb776b.js";import"./el-loading.b1ea91ae.js";import{s as Ae,e as De}from"./compressImageOptions.81079d9e.js";import{J as Je,F as He}from"./FileSaver.min.8ad78cd6.js";import{E as D}from"./index.13bae289.js";import"./index.64d33a3b.js";import"./use-global-config.0787c757.js";import"./use-form-common-props.4add0763.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./index.22b79c03.js";import"./aria.60e0cdc6.js";import"./focus-trap.110fc0b9.js";import"./_commonjsHelpers.042e6b4d.js";import"./debounce.17f18a2b.js";import"./event.9519ab40.js";import"./index.1ed0807d.js";import"./vnode.76be746b.js";import"./scroll.58f66198.js";function Oe(){return new Worker(""+new URL("compress-worker-6b4883c8.js",import.meta.url).href)}const g=C=>(xe("data-v-8be5c230"),C=C(),ze(),C),$e={style:{width:"90%",margin:"0 auto"}},Ze={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},Ke=g(()=>o("div",{style:{"font-size":"24px",height:"50px"}},"图片格式转换",-1)),Qe={style:{"margin-top":"10%","font-size":"24px"}},Xe=g(()=>o("div",{style:{color:"black"}},"或者拖放多个文件",-1)),Ye={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},et={style:{float:"left",height:"500px",width:"70%"}},tt={style:{overflow:"hidden",display:"inline-block","max-width":"180px","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},at={style:{display:"flex","align-items":"center"}},ot={style:{display:"flex","align-items":"center"}},lt={style:{display:"flex","align-items":"center"}},st={style:{color:"#67c23a"}},nt={style:{color:"rgba(255,0,0,1)"}},it={style:{"text-align":"right"}},rt={style:{float:"right",width:"25%",height:"442px",margin:"0 auto"}},ut={style:{height:"400px","margin-top":"20px"}},ct={class:"slider-demo-block"},dt=g(()=>o("div",{style:{height:"20px"}},null,-1)),mt=g(()=>o("br",null,null,-1)),pt=g(()=>o("div",{style:{height:"15px"}},null,-1)),vt={class:"mainSection"},ft=["src"],ht=g(()=>o("div",{class:"bal-afterPosition afterLabel"},"转换后",-1)),gt={class:"bal-before"},_t=["src"],wt=g(()=>o("div",{class:"bal-beforePosition beforeLabel"},"转换前",-1)),bt=g(()=>o("div",{class:"bal-handle"},[o("span",{class:"handle-left-arrow"}),o("span",{class:"handle-right-arrow"})],-1)),yt=fe({__name:"convert",setup(C){m(!0);const R=m(!0),J=m(),a=m([]),Y=m(!0),H=m(95),W=m(!1),O=m(),$=m(),b=m(0),y=m("100%"),F=m("80%"),T=m(0),L=m(),ee=m(!0),M=m("mozJPEG"),Z=m();he(function(){fetch("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/_nuxt/compress-worker-v1.js").then(e=>e.text()).then(e=>{const t=new Blob([e],{type:"text/javascript"}),l=URL.createObjectURL(t);Z.value=l})});const te=async(e,t)=>{L.value||(L.value=D.service({lock:!0,text:"正在加载图片...",background:"rgba(0, 0, 0, 0.7)"}));let l=t.length;T.value=Math.max(l,T.value),setTimeout(()=>{if(l===T.value){R.value=!1;for(let u=a.value.length;u<t.length;u++)e=t[u],G.value+=e.size,a.value.push({url:e.url,name:e.raw.name,size:e.size,raw:e.raw,type:e.raw.type,compressSize:"-",index:a.value.length-1});L.value.close(),L.value=null}},1)},U=function(e){var t="";e<.1*1024?t=e.toFixed(2)+" B":e<.1*1024*1024?t=(e/1024).toFixed(2)+" KB":e<.1*1024*1024*1024?t=(e/(1024*1024)).toFixed(2)+" MB":t=(e/(1024*1024*1024)).toFixed(2)+" GB";var l=t+"",u=l.indexOf("."),c=l.substr(u+1,2);return c=="00"?l.substring(0,u)+l.substr(u+3,2):l},ae=()=>{var e,t;(t=(e=J.value)==null?void 0:e.$.vnode.el)==null||t.click()},j=m(1),B=m(0),K=m();async function oe(){x.value=0;const e=D.service({lock:!0,background:"rgba(0, 0, 0, 0.7)"}),t=(await be(()=>import("./compress.0566e9c3.js"),[],import.meta.url)).default;K.value=t;let l=[];e.setText("0/"+a.value.length);let u=10;u>a.value.length&&(u=a.value.length);let c=[];for(let d=0;d<u;d++)c.push(new Worker(Z.value,{type:"module"}));let s=[];for(let d=0;d<a.value.length;d++){let v=await Q();if(!v)continue;let p=parseInt(ve(d+"")),h=c[p];v.poolIndex=p,l.push(new Promise((q,S)=>{h.postMessage(v);let I=async z=>{if(z.data){let N=z.data.index,n=z.data.poolIndex;console.log("task-end:",N,n),e.setText(j.value+"/"+a.value.length),j.value=j.value+1,s[N]=z.data,c[n]&&(c[n].removeEventListener("message",I,!1),c[n].terminate(),c[n]=null);let P=await Q();d=B.value,P?(c[n]=new Oe,P.poolIndex=n,c[n].postMessage(P),c[n].addEventListener("message",I,!1)):q(null)}};h.addEventListener("message",I,!1)})),l.length==u&&(await Promise.all(l),l=[])}await Promise.all(l);for(let d=0;d<c.length;d++)c[d]&&c[d].terminate();e.setText("转换完成,正在渲染列表...");for(let d=0;d<s.length;d++){let v=s[d];if(!v)continue;let p=v.index;a.value[p].compressSize=U(v.size),x.value+=v.size;let h=new Image;h.onload=()=>{a.value[p].imageWidth=h.width,a.value[p].imageHeight=h.height},a.value[p].compressName=v.compressName,a.value[p].compressBase64=v.compressBase64,a.value[p].afterUrl=se(le(v.compressBase64)),h.src=a.value[p].afterUrl,a.value[p].compressRatio=Math.floor(100-v.size/a.value[p].size*100),a.value[p].flag=!1}c.value=null,B.value=0,j.value=0,e.close()}const Q=async()=>{let e=B.value;if(e>=a.value.length||a.value[e].flag)return null;a.value[e].flag=!0,B.value=B.value+1;let t=a.value[e].type;t=ne(t),ee.value&&(t=M.value);let l=await me(t),u=a.value[e].raw,c=H.value/100;const s=JSON.parse(JSON.stringify(Ae));s.encoderState=De[t],s.encoderState.options.quality=H.value,s.processorState.quantize.enabled=!1,s.processorState.resize.enabled=!1,t=="oxiPNG"&&(s.processorState.quantize.enabled=!0,s.processorState.quantize.dither=0,Y.value?s.processorState.quantize.maxNumColors=256:s.processorState.quantize.maxNumColors=256*c),t=="avif"&&(s.encoderState.options.cqLevel=63-63*c);let d;return t!="browserGIF"&&(d=await new K.value(u,s).process()),{qratio:c,compressFile:d,fileName:a.value[e].name,encoderState:s.encoderState,image:u,setting:s,wasmArrayBuffer:l,type:t,index:e}};function le(e){for(var t=e.split(","),l=t[0].match(/:(.*?);/)[1],u=atob(t[1]),c=u.length,s=new Uint8Array(c);c--;)s[c]=u.charCodeAt(c);return new Blob([s],{type:l})}function se(e){return window.URL.createObjectURL(e)}const ne=e=>e=="image/jpeg"||e=="image/jpg"?"mozJPEG":e=="image/png"?"oxiPNG":e=="image/webp"?"webP":e=="image/avif"?"avif":e=="image/gif"?"browserGIF":"mozJPEG",ie=e=>{const t=document.createElement("a");t.href=a.value[e].compressBase64,t.download=a.value[e].compressName,t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{t.remove()},100)},G=m(0),x=m(0),re=e=>{W.value=!0,b.value=0,F.value="80%",ye(()=>{new Ce({id:"#one"}),y.value="100%",O.value=a.value[e].url,$.value=a.value[e].afterUrl;let t=document.getElementsByClassName("mainSection")[0];if(a.value[e].imageWidth<t.offsetWidth)b.value=a.value[e].imageHeight,y.value=a.value[e].imageWidth+"px",F.value=a.value[e].imageWidth+50+"px";else{let l=t.offsetWidth*(a.value[e].imageHeight/a.value[e].imageWidth);b.value=l,y.value=t.offsetWidth+"px"}})},ue=()=>{if(a.value.length==0)return;const e=D.service({lock:!0,text:"正在打包...",background:"rgba(0, 0, 0, 0.7)"});let t=new Je;for(let l=0;l<a.value.length;l++)t.file(a.value[l].compressName,ce(a.value[l].compressBase64),{base64:!0});t.generateAsync({type:"blob"}).then(function(l){He.saveAs(l,"图片.zip")}),e.close()},ce=e=>{var t=e.split(",");return t[1]},de=e=>{const{columns:t,data:l}=e,u=[];return t.forEach((c,s)=>{if(s===0){u[s]="图片数量 "+a.value.length;return}if(s===1){u[s]=U(G.value);return}if(s===2){u[s]=U(x.value);return}if(x.value>0&&s===3){console.log(G.value,x.value);let d=Math.floor(100-x.value/G.value*100)+" %";u[s]="↓"+d;return}}),u},V=m({});async function me(e){let t;return e=="browserGIF"?null:(e=="mozJPEG"&&(t=new URL("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/wasm/mozjpeg_enc.wasm",self.location).toString()),e=="oxiPNG"&&(t=new URL("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/wasm/squoosh_oxipng_bg.wasm",self.location).toString()),e=="webP"&&(await pe()?t=new URL("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/wasm/webp_enc_simd.wasm",self.location).toString():t=new URL("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/wasm/webp_enc.wasm",self.location).toString()),e=="avif"&&(t=new URL("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/wasm/avif_enc.wasm",self.location).toString()),V[e]||await fetch(t,{credentials:"same-origin"}).then(function(l){if(!l.ok)throw"failed to load wasm binary file at '"+t+"'";V[e]=l.arrayBuffer()}),V[e])}var pe=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function ve(e){const t=e.match(/\d(?=\D*$)/);return t?parseInt(t[0]):null}return(e,t)=>{const l=Ee,u=Be,c=Se,s=Ie,d=Pe,v=Le,p=Ue,h=Ge,q=je,S=Te,I=Me,z=Ve,N=qe;return ge(),_e(we,null,[i(c,null,{default:r(()=>[i(l,null,{default:r(()=>[f("图片格式转换")]),_:1}),i(u,{name:"description",content:"免费在线转换多种格式的图像文件至JPG、PNG、WEBP、AVIF文件"}),i(u,{name:"keywords",content:"图像,转换,批量,jpg,jpeg,png,avif"})]),_:1}),o("div",$e,[_(o("div",Ze,[Ke,o("div",null,[i(d,{class:"upload-demo",drag:"","list-type":"picture-card","show-file-list":!1,"auto-upload":!1,onChange:te,multiple:"true",accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:r(()=>[o("div",Qe,[i(s,{ref_key:"uploadId",ref:J,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:k(X)},{default:r(()=>[f("上传多个图片")]),_:1},8,["icon"]),Xe])]),_:1})])],512),[[w,R.value]]),_(o("div",Ye,[o("div",et,[i(q,{"summary-method":de,"show-summary":"",data:a.value,height:"600"},{default:r(()=>[i(p,{label:"文件名","min-width":"140"},{default:r(n=>[i(v,{effect:"light",trigger:"hover",placement:"right",width:"auto"},{default:r(()=>[o("div",null,E(n.row.name),1)]),reference:r(()=>[o("span",tt,E(n.row.name),1)]),_:2},1024)]),_:1}),i(p,{label:"原大小","min-width":"120"},{default:r(n=>[o("div",at,[o("span",null,E(U(n.row.size)),1)])]),_:1}),i(p,{label:"转换后大小","min-width":"120"},{default:r(n=>[o("div",ot,[o("span",null,E(n.row.compressSize),1)])]),_:1}),i(p,{label:"节省","min-width":"100"},{default:r(n=>[o("div",lt,[_(o("span",null,"-",512),[[w,!n.row.compressRatio]]),_(o("span",st,[i(h,null,{default:r(()=>[i(k(Ne))]),_:1}),f(E(n.row.compressRatio)+"%",1)],512),[[w,n.row.compressRatio>=0]]),_(o("span",nt,[i(h,null,{default:r(()=>[i(k(Re))]),_:1}),f(E(Math.abs(n.row.compressRatio))+"%",1)],512),[[w,n.row.compressRatio<0]])])]),_:1}),i(p,{align:"right","min-width":"120"},{header:r(()=>[o("div",it,[i(s,{type:"",text:"",onClick:ae,icon:k(X)},{default:r(()=>[f("添加更多图片")]),_:1},8,["icon"])])]),default:r(n=>[_(i(s,{size:"small",onClick:P=>re(n.$index,n.row)},{default:r(()=>[f("查看")]),_:2},1032,["onClick"]),[[w,n.row.compressBase64]]),_(i(s,{size:"small",type:"danger",onClick:P=>ie(n.$index,n.row)},{default:r(()=>[f("下载")]),_:2},1032,["onClick"]),[[w,n.row.compressBase64]])]),_:1})]),_:1},8,["data"])]),o("div",rt,[o("div",ut,[i(z,{shadow:"always"},{default:r(()=>[o("div",ct,[i(I,{modelValue:M.value,"onUpdate:modelValue":t[0]||(t[0]=n=>M.value=n)},{default:r(()=>[i(S,{label:"mozJPEG"},{default:r(()=>[f("JPG")]),_:1}),i(S,{label:"oxiPNG"},{default:r(()=>[f("PNG")]),_:1}),i(S,{label:"webP"},{default:r(()=>[f("WEBP")]),_:1}),i(S,{label:"avif"},{default:r(()=>[f("AVIF")]),_:1})]),_:1},8,["modelValue"])]),dt,i(s,{onClick:oe,type:"success",style:{width:"100%"},size:"large"},{default:r(()=>[f("开始转换"),i(h,{class:"el-icon--right"},{default:r(()=>[i(k(We))]),_:1})]),_:1}),mt,pt,i(s,{onClick:ue,type:"primary",style:{width:"100%"},size:"large"},{default:r(()=>[f("打包下载 "),i(h,{class:"el-icon--right"},{default:r(()=>[i(k(Fe))]),_:1})]),_:1})]),_:1})])])],512),[[w,!R.value]])]),i(N,{"open-delay":"","append-to-body":"",modelValue:W.value,"onUpdate:modelValue":t[1]||(t[1]=n=>W.value=n),width:F.value,"align-center":"",center:""},{default:r(()=>[o("div",vt,[o("div",{id:"one",style:A({height:b.value+"px",width:y.value}),class:"bal-container"},[o("div",{style:A({height:b.value+"px",width:y.value}),class:"bal-after"},[o("img",{src:$.value},null,8,ft),ht],4),o("div",gt,[o("div",{style:A({height:b.value+"px",width:y.value}),class:"bal-before-inset"},[o("img",{id:"afterImageId",src:O.value},null,8,_t),wt],4)]),bt],4)])]),_:1},8,["modelValue","width"])],64)}}});const ea=ke(yt,[["__scopeId","data-v-8be5c230"]]);export{ea as default};