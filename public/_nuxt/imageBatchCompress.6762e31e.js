import{d as P,r as v,k as x,l as _,q as i,s as n,B as z,F as b,H as G,m as a,v as p,G as B,t as w}from"./entry.43ae2c8f.js";import{E as S,p as $}from"./constants.d98b03ae.js";import{E as F}from"./el-progress.8c2a772a.js";import{E as N}from"./el-input-number.87c7e8a9.js";import{E as J}from"./index.0d4f5f8c.js";import"./base.cee28e3a.js";/* empty css                */import"./el-input.a4c23736.js";/* empty css                   *//* empty css                  */import{s as f,e as V}from"./compressImageOptions.81079d9e.js";import{J as I,F as L}from"./FileSaver.min.8ad78cd6.js";import"./error.78e43d3e.js";import"./use-form-common-props.7f01f78a.js";import"./event.9519ab40.js";import"./index.83442321.js";import"./aria.60e0cdc6.js";import"./index.6427deed.js";import"./focus-trap.522c89ff.js";import"./debounce.d3e34170.js";import"./use-global-config.fc5323c1.js";import"./index.f8748455.js";import"./index.edc563d3.js";import"./_commonjsHelpers.042e6b4d.js";const A={style:{width:"150px",height:"200px",float:"left"}},j={style:{width:"150px",height:"150px","line-height":"150px","align-items":"center","justify-content":"center",display:"flex"}},q={style:{clear:"both"}},U=["src"],D={style:{width:"150px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},R={style:{width:"150px","font-size":"12px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},T={style:{width:"150px","font-size":"12px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},Z={class:"block",style:{clear:"both"}},H={style:{width:"100px",height:"30px"}},he=P({__name:"imageBatchCompress",setup(O){const r=v([]),h=v([]),c=v(75);async function d(o){const e=(await B(()=>import("./compress.0566e9c3.js"),[],import.meta.url)).default;for(let s=0;s<r.value.length;s++){let u=r.value[s].file;f.encoderState=V[o],o=="browserJPEG"?f.encoderState.options.quality=c.value/100:f.encoderState.options.quality=c.value;const m=new e(u,f);console.log(f);const l=await m.process();r.value[s].compressSize=l.size,console.log(l.size);let t=await g(l);r.value[s].compressName=l.name,r.value[s].compressBase64=t}}const g=o=>new Promise((e,s)=>{let u=new FileReader;u.readAsDataURL(o),u.onload=m=>{e(m.target.result)}}),y=o=>{if(o)return(o/1e3).toFixed(1)+"kb"},k=async o=>{let e=await g(o.raw);const s=new Image;s.src=e,s.onload=()=>{r.value.push({url:o.url,file:o.raw,src:e,width:s.width,height:s.height,name:o.raw.name,size:o.size})}},E=()=>{let o=new I;for(let e=0;e<r.value.length;e++)o.file(r.value[e].compressName,C(r.value[e].compressBase64),{base64:!0});o.generateAsync({type:"blob"}).then(function(e){L.saveAs(e,"图片.zip")})},C=o=>{var e=o.split(",");return e[1]};return(o,e)=>{const s=S,u=F,m=N,l=J;return x(),_(b,null,[i(u,{"file-list":h.value,"onUpdate:fileList":e[0]||(e[0]=t=>h.value=t),"auto-upload":!1,"list-type":"picture-card","show-file-list":!1,multiple:"true",onChange:k},{default:n(()=>[i(s,null,{default:n(()=>[i(z($))]),_:1})]),_:1},8,["file-list"]),(x(!0),_(b,null,G(r.value,(t,K)=>(x(),_("div",null,[a("div",A,[a("div",j,[a("div",q,[a("img",{src:t.url,style:{"vertical-align":"middle","max-width":"150px","max-height":"150px"}},null,8,U)])]),a("div",null,[a("span",D,w(t.name),1),a("span",R,w(y(t.size))+"  "+w(t.width+"x"+t.height+"px"),1),a("span",T,w(y(t.compressSize)),1)])])]))),256)),a("div",Z,[i(m,{style:{width:"200px"},modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t)},null,8,["modelValue"])]),a("div",H,[i(l,{onClick:e[2]||(e[2]=t=>d("avif"))},{default:n(()=>[p("avif")]),_:1}),i(l,{onClick:e[3]||(e[3]=t=>d("browserGIF"))},{default:n(()=>[p("browserGIF")]),_:1}),i(l,{onClick:e[4]||(e[4]=t=>d("browserJPEG"))},{default:n(()=>[p("browserJPEG")]),_:1}),i(l,{onClick:e[5]||(e[5]=t=>d("browserPNG"))},{default:n(()=>[p("browserPNG")]),_:1}),i(l,{onClick:e[6]||(e[6]=t=>d("jxl"))},{default:n(()=>[p("jxl")]),_:1}),i(l,{onClick:e[7]||(e[7]=t=>d("mozJPEG"))},{default:n(()=>[p("mozJPEG")]),_:1}),i(l,{onClick:e[8]||(e[8]=t=>d("oxiPNG"))},{default:n(()=>[p("oxiPNG")]),_:1}),i(l,{onClick:e[9]||(e[9]=t=>d("webP"))},{default:n(()=>[p("webP")]),_:1}),i(l,{onClick:e[10]||(e[10]=t=>d("wp2"))},{default:n(()=>[p("wp2")]),_:1}),i(l,{onClick:e[11]||(e[11]=t=>E())},{default:n(()=>[p("下载")]),_:1})])],64)}}});export{he as default};
