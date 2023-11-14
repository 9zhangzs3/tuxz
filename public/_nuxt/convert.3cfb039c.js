import{d as ve,r as m,o as he,k as ge,l as _e,m as l,z as w,A as b,q as i,s as u,B as E,v,t as B,C as V,F as we,G as be,D as ye,x as xe,y as ke,_ as ze}from"./entry.1dc6e359.js";import{E as Ee}from"./index.5fe7711e.js";import{E as Be}from"./el-progress.1e2c2aec.js";import{B as Se,E as Ie,a as Pe,b as Ce}from"./beforafter.51c7d4ba.js";import{E as Le,p as X,b as Ue,t as Re,d as Ne,a as We}from"./constants.32292d8d.js";import{E as Fe,a as Ge}from"./el-radio-group.b75c4c4b.js";import{E as je}from"./el-card.a0645fe2.js";import{E as qe}from"./el-overlay.35552634.js";import"./base.c3d2e3d9.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-scrollbar.41fb776b.js";import"./el-loading.4998970f.js";import{s as De,e as Ve}from"./compressImageOptions.81079d9e.js";import{J as Ae,F as Te}from"./FileSaver.min.8ad78cd6.js";import{E as A}from"./index.55621d2c.js";import"./index.901f8d30.js";import"./use-global-config.5035f634.js";import"./use-form-common-props.197ce949.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./index.f0a79751.js";import"./aria.60e0cdc6.js";import"./focus-trap.8aa43648.js";import"./_commonjsHelpers.042e6b4d.js";import"./debounce.72c54a3b.js";import"./event.9519ab40.js";import"./index.b9606ab9.js";import"./vnode.edf20a27.js";import"./scroll.9c3d5e4c.js";function Je(){return new Worker(""+new URL("compress-worker-6b4883c8.js",import.meta.url).href)}const _=I=>(xe("data-v-2cad0d34"),I=I(),ke(),I),Me={style:{width:"90%",margin:"0 auto"}},Oe={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},$e=_(()=>l("div",{style:{"font-size":"24px",height:"50px"}},"图片格式转换",-1)),He={style:{"margin-top":"10%","font-size":"24px"}},Ze=_(()=>l("div",{style:{color:"black"}},"或者拖放多个文件",-1)),Ke={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},Qe={style:{float:"left",height:"500px",width:"70%"}},Xe={style:{overflow:"hidden",display:"inline-block","max-width":"180px","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},Ye={style:{display:"flex","align-items":"center"}},et={style:{display:"flex","align-items":"center"}},tt={style:{display:"flex","align-items":"center"}},at={style:{color:"#67c23a"}},ot={style:{color:"rgba(255,0,0,1)"}},lt={style:{"text-align":"right"}},st={style:{float:"right",width:"25%",height:"442px",margin:"0 auto"}},it={style:{height:"400px","margin-top":"20px"}},rt={class:"slider-demo-block"},nt=_(()=>l("div",{style:{height:"20px"}},null,-1)),ut=_(()=>l("br",null,null,-1)),ct=_(()=>l("div",{style:{height:"15px"}},null,-1)),dt={class:"mainSection"},mt=["src"],pt=_(()=>l("div",{class:"bal-afterPosition afterLabel"},"转换后",-1)),ft={class:"bal-before"},vt=["src"],ht=_(()=>l("div",{class:"bal-beforePosition beforeLabel"},"转换前",-1)),gt=_(()=>l("div",{class:"bal-handle"},[l("span",{class:"handle-left-arrow"}),l("span",{class:"handle-right-arrow"})],-1)),_t=ve({__name:"convert",setup(I){m(!0);const R=m(!0),T=m(),a=m([]),Y=m(!0),J=m(95),N=m(!1),M=m(),O=m(),y=m(0),x=m("100%"),W=m("80%"),F=m(0),P=m(),ee=m(!0),G=m("mozJPEG"),$=m();he(function(){fetch("https://cdn.jsdelivr.net/gh/9zhangzs3/tuxz@main/public/_nuxt/compress-worker-v1.js").then(e=>e.text()).then(e=>{const t=new Blob([e],{type:"text/javascript"}),o=URL.createObjectURL(t);$.value=o})});const te=async(e,t)=>{P.value||(P.value=A.service({lock:!0,text:"正在加载图片...",background:"rgba(0, 0, 0, 0.7)"}));let o=t.length;F.value=Math.max(o,F.value),setTimeout(()=>{if(o===F.value){R.value=!1;for(let c=a.value.length;c<t.length;c++)e=t[c],U.value+=e.size,a.value.push({url:e.url,name:e.raw.name,size:e.size,raw:e.raw,type:e.raw.type,compressSize:"-",index:a.value.length-1});P.value.close(),P.value=null}},1)},C=function(e){var t="";e<.1*1024?t=e.toFixed(2)+" B":e<.1*1024*1024?t=(e/1024).toFixed(2)+" KB":e<.1*1024*1024*1024?t=(e/(1024*1024)).toFixed(2)+" MB":t=(e/(1024*1024*1024)).toFixed(2)+" GB";var o=t+"",c=o.indexOf("."),r=o.substr(c+1,2);return r=="00"?o.substring(0,c)+o.substr(c+3,2):o},ae=()=>{var e,t;(t=(e=T.value)==null?void 0:e.$.vnode.el)==null||t.click()},L=m(1),S=m(0),H=m();async function oe(){k.value=0;const e=A.service({lock:!0,background:"rgba(0, 0, 0, 0.7)"}),t=(await be(()=>import("./compress.0566e9c3.js"),[],import.meta.url)).default;H.value=t;let o=[];e.setText("0/"+a.value.length);let c=10;c>a.value.length&&(c=a.value.length);let r=[];for(let d=0;d<c;d++)r.push(new Worker($.value,{type:"module"}));let s=[];for(let d=0;d<a.value.length;d++){let f=await Z();if(!f)continue;let p=parseInt(fe(d+"")),h=r[p];f.poolIndex=p,o.push(new Promise((q,K)=>{h.postMessage(f);let n=async z=>{if(z.data){let Q=z.data.index,g=z.data.poolIndex;console.log("task-end:",Q,g),e.setText(L.value+"/"+a.value.length),L.value=L.value+1,s[Q]=z.data,r[g]&&(r[g].removeEventListener("message",n,!1),r[g].terminate(),r[g]=null);let D=await Z();d=S.value,D?(r[g]=new Je,D.poolIndex=g,r[g].postMessage(D),r[g].addEventListener("message",n,!1)):q(null)}};h.addEventListener("message",n,!1)})),o.length==c&&(await Promise.all(o),o=[])}await Promise.all(o);for(let d=0;d<r.length;d++)r[d]&&r[d].terminate();e.setText("转换完成,正在渲染列表...");for(let d=0;d<s.length;d++){let f=s[d];if(!f)continue;let p=f.index;a.value[p].compressSize=C(f.size),k.value+=f.size;let h=new Image;h.onload=()=>{a.value[p].imageWidth=h.width,a.value[p].imageHeight=h.height},a.value[p].compressName=f.compressName,a.value[p].compressBase64=f.compressBase64,a.value[p].afterUrl=se(le(f.compressBase64)),h.src=a.value[p].afterUrl,a.value[p].compressRatio=Math.floor(100-f.size/a.value[p].size*100),a.value[p].flag=!1}r.value=null,S.value=0,L.value=0,e.close()}const Z=async()=>{let e=S.value;if(e>=a.value.length||a.value[e].flag)return null;a.value[e].flag=!0,S.value=S.value+1;let t=a.value[e].type;t=ie(t),ee.value&&(t=G.value);let o=await me(t),c=a.value[e].raw,r=J.value/100;const s=JSON.parse(JSON.stringify(De));s.encoderState=Ve[t],s.encoderState.options.quality=J.value,s.processorState.quantize.enabled=!1,s.processorState.resize.enabled=!1,t=="oxiPNG"&&(s.processorState.quantize.enabled=!0,s.processorState.quantize.dither=0,Y.value?s.processorState.quantize.maxNumColors=256:s.processorState.quantize.maxNumColors=256*r),t=="avif"&&(s.encoderState.options.cqLevel=63-63*r);let d;return t!="browserGIF"&&(d=await new H.value(c,s).process()),{qratio:r,compressFile:d,fileName:a.value[e].name,encoderState:s.encoderState,image:c,setting:s,wasmArrayBuffer:o,type:t,index:e}};function le(e){for(var t=e.split(","),o=t[0].match(/:(.*?);/)[1],c=atob(t[1]),r=c.length,s=new Uint8Array(r);r--;)s[r]=c.charCodeAt(r);return new Blob([s],{type:o})}function se(e){return window.URL.createObjectURL(e)}const ie=e=>e=="image/jpeg"||e=="image/jpg"?"mozJPEG":e=="image/png"?"oxiPNG":e=="image/webp"?"webP":e=="image/avif"?"avif":e=="image/gif"?"browserGIF":"mozJPEG",re=e=>{const t=document.createElement("a");t.href=a.value[e].compressBase64,t.download=a.value[e].compressName,t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{t.remove()},100)},U=m(0),k=m(0),ne=e=>{N.value=!0,y.value=0,W.value="80%",ye(()=>{new Se({id:"#one"}),x.value="100%",M.value=a.value[e].url,O.value=a.value[e].afterUrl;let t=document.getElementsByClassName("mainSection")[0];if(a.value[e].imageWidth<t.offsetWidth)y.value=a.value[e].imageHeight,x.value=a.value[e].imageWidth+"px",W.value=a.value[e].imageWidth+50+"px";else{let o=t.offsetWidth*(a.value[e].imageHeight/a.value[e].imageWidth);y.value=o,x.value=t.offsetWidth+"px"}})},ue=()=>{if(a.value.length==0)return;const e=A.service({lock:!0,text:"正在打包...",background:"rgba(0, 0, 0, 0.7)"});let t=new Ae;for(let o=0;o<a.value.length;o++)t.file(a.value[o].compressName,ce(a.value[o].compressBase64),{base64:!0});t.generateAsync({type:"blob"}).then(function(o){Te.saveAs(o,"图片.zip")}),e.close()},ce=e=>{var t=e.split(",");return t[1]},de=e=>{const{columns:t,data:o}=e,c=[];return t.forEach((r,s)=>{if(s===0){c[s]="图片数量 "+a.value.length;return}if(s===1){c[s]=C(U.value);return}if(s===2){c[s]=C(k.value);return}if(k.value>0&&s===3){console.log(U.value,k.value);let d=Math.floor(100-k.value/U.value*100)+" %";c[s]="↓"+d;return}}),c},j=m({});async function me(e){let t;return e=="browserGIF"?null:(e=="mozJPEG"&&(t=new URL("../wasm/mozjpeg_enc.wasm",self.location).toString()),e=="oxiPNG"&&(t=new URL("../wasm/squoosh_oxipng_bg.wasm",self.location).toString()),e=="webP"&&(await pe()?t=new URL("../wasm/webp_enc_simd.wasm",self.location).toString():t=new URL("../wasm/webp_enc.wasm",self.location).toString()),e=="avif"&&(t=new URL("../wasm/avif_enc.wasm",self.location).toString()),j[e]||await fetch(t,{credentials:"same-origin"}).then(function(o){if(!o.ok)throw"failed to load wasm binary file at '"+t+"'";j[e]=o.arrayBuffer()}),j[e])}var pe=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function fe(e){const t=e.match(/\d(?=\D*$)/);return t?parseInt(t[0]):null}return(e,t)=>{const o=Ee,c=Be,r=Ie,s=Pe,d=Le,f=Ce,p=Fe,h=Ge,q=je,K=qe;return ge(),_e(we,null,[l("div",Me,[w(l("div",Oe,[$e,l("div",null,[i(c,{class:"upload-demo",drag:"","list-type":"picture-card","show-file-list":!1,"auto-upload":!1,onChange:te,multiple:"true",accept:".gif,.tif,.tiff,.png,.crw,.cr2,.dng,.raf,.nef,.nrw,.orf,.rw2,.pef,.arw,.srf,.sr2,.raw,.psd,.svg,.webp,.heic,.avif,.jpg,.jpeg"},{default:u(()=>[l("div",He,[i(o,{ref_key:"uploadId",ref:T,style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:E(X)},{default:u(()=>[v("上传多个图片")]),_:1},8,["icon"]),Ze])]),_:1})])],512),[[b,R.value]]),w(l("div",Ke,[l("div",Qe,[i(f,{"summary-method":de,"show-summary":"",data:a.value,height:"600"},{default:u(()=>[i(s,{label:"文件名","min-width":"140"},{default:u(n=>[i(r,{effect:"light",trigger:"hover",placement:"right",width:"auto"},{default:u(()=>[l("div",null,B(n.row.name),1)]),reference:u(()=>[l("span",Xe,B(n.row.name),1)]),_:2},1024)]),_:1}),i(s,{label:"原大小","min-width":"120"},{default:u(n=>[l("div",Ye,[l("span",null,B(C(n.row.size)),1)])]),_:1}),i(s,{label:"转换后大小","min-width":"120"},{default:u(n=>[l("div",et,[l("span",null,B(n.row.compressSize),1)])]),_:1}),i(s,{label:"节省","min-width":"100"},{default:u(n=>[l("div",tt,[w(l("span",null,"-",512),[[b,!n.row.compressRatio]]),w(l("span",at,[i(d,null,{default:u(()=>[i(E(Ue))]),_:1}),v(B(n.row.compressRatio)+"%",1)],512),[[b,n.row.compressRatio>=0]]),w(l("span",ot,[i(d,null,{default:u(()=>[i(E(Re))]),_:1}),v(B(Math.abs(n.row.compressRatio))+"%",1)],512),[[b,n.row.compressRatio<0]])])]),_:1}),i(s,{align:"right","min-width":"120"},{header:u(()=>[l("div",lt,[i(o,{type:"",text:"",onClick:ae,icon:E(X)},{default:u(()=>[v("添加更多图片")]),_:1},8,["icon"])])]),default:u(n=>[w(i(o,{size:"small",onClick:z=>ne(n.$index,n.row)},{default:u(()=>[v("查看")]),_:2},1032,["onClick"]),[[b,n.row.compressBase64]]),w(i(o,{size:"small",type:"danger",onClick:z=>re(n.$index,n.row)},{default:u(()=>[v("下载")]),_:2},1032,["onClick"]),[[b,n.row.compressBase64]])]),_:1})]),_:1},8,["data"])]),l("div",st,[l("div",it,[i(q,{shadow:"always"},{default:u(()=>[l("div",rt,[i(h,{modelValue:G.value,"onUpdate:modelValue":t[0]||(t[0]=n=>G.value=n)},{default:u(()=>[i(p,{label:"mozJPEG"},{default:u(()=>[v("JPG")]),_:1}),i(p,{label:"oxiPNG"},{default:u(()=>[v("PNG")]),_:1}),i(p,{label:"webP"},{default:u(()=>[v("WEBP")]),_:1}),i(p,{label:"avif"},{default:u(()=>[v("AVIF")]),_:1})]),_:1},8,["modelValue"])]),nt,i(o,{onClick:oe,type:"success",style:{width:"100%"},size:"large"},{default:u(()=>[v("开始转换"),i(d,{class:"el-icon--right"},{default:u(()=>[i(E(Ne))]),_:1})]),_:1}),ut,ct,i(o,{onClick:ue,type:"primary",style:{width:"100%"},size:"large"},{default:u(()=>[v("打包下载 "),i(d,{class:"el-icon--right"},{default:u(()=>[i(E(We))]),_:1})]),_:1})]),_:1})])])],512),[[b,!R.value]])]),i(K,{"open-delay":"","append-to-body":"",modelValue:N.value,"onUpdate:modelValue":t[1]||(t[1]=n=>N.value=n),width:W.value,"align-center":"",center:""},{default:u(()=>[l("div",dt,[l("div",{id:"one",style:V({height:y.value+"px",width:x.value}),class:"bal-container"},[l("div",{style:V({height:y.value+"px",width:x.value}),class:"bal-after"},[l("img",{src:O.value},null,8,mt),pt],4),l("div",ft,[l("div",{style:V({height:y.value+"px",width:x.value}),class:"bal-before-inset"},[l("img",{id:"afterImageId",src:M.value},null,8,vt),ht],4)]),gt],4)])]),_:1},8,["modelValue","width"])],64)}}});const Kt=ze(_t,[["__scopeId","data-v-2cad0d34"]]);export{Kt as default};
