import{E as C}from"./index.f74eccca.js";import{E as I}from"./el-progress.dc5687d2.js";import{E as B}from"./el-image-viewer.419736cf.js";import{E as F,p as g}from"./constants.0fb4eb89.js";import"./base.e040b817.js";/* empty css                  *//* empty css                */import{v as L}from"./el-loading.764bfe53.js";import{d as N,r as a,k as d,l as p,z as c,A as y,m as t,q as o,s as i,B as v,v as w,F as V,H as D,t as n,x as j,y as q,_ as A}from"./entry.b15f9cd9.js";import"./index.fb1b8b13.js";import"./use-global-config.55fa202e.js";import"./use-form-common-props.5502e3a8.js";import"./index.f8748455.js";import"./error.78e43d3e.js";import"./aria.60e0cdc6.js";import"./debounce.fead197d.js";import"./index.cda2ae10.js";import"./position.68b279ff.js";import"./scroll.e8e2652b.js";const z=l=>(j("data-v-fc1eecf4"),l=l(),q(),l),H={style:{width:"90%",margin:"0 auto"}},T={style:{width:"60%",margin:"0 auto","margin-top":"15%"}},U=z(()=>t("div",{style:{"font-size":"24px",height:"50px"}},"图片压缩",-1)),G={style:{"margin-top":"10%","font-size":"24px"}},J=z(()=>t("div",{style:{color:"black"}},"或者拖放多个文件",-1)),K={style:{width:"100%",margin:"0 auto","margin-top":"10%"}},M={style:{float:"left",width:"70%",height:"500px",border:"1px solid red"}},O={style:{float:"left"}},P={style:{width:"150px",height:"200px",float:"left","margin-left":"5px"}},Q={style:{width:"150px",height:"150px","align-items":"center","justify-content":"center",display:"flex"}},R={style:{clear:"both"}},W={style:{"line-height":"200px",width:"200px","background-color":"#c0c4cc"},class:"image-slot"},X={style:{width:"150px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},Y={style:{width:"150px","font-size":"12px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},Z={style:{width:"150px","font-size":"12px","text-align":"center",overflow:"hidden",display:"inline-block","white-space":"nowrap","text-overflow":"ellipsis",title:"center"}},$={style:{float:"right",width:"25%",border:"1px solid red",height:"442px",margin:"0 auto"}},tt={style:{height:"400px"}},et={style:{width:"100%",margin:"0 auto"}},ot=N({__name:"compressCard",setup(l){a(!0),a("before");const r=a(!0),_=a([]),h=async e=>{r.value=!1,_.value.push({url:e.url,name:e.raw.name,size:e.size,raw:e.raw})},u=e=>{if(e)return(e/1e3).toFixed(1)+"kb"},b=()=>{console.log(1111)};return(e,f)=>{const m=C,x=I,k=B,S=F,E=L;return d(),p("div",H,[c(t("div",T,[U,t("div",null,[o(x,{class:"upload-demo",drag:"","list-type":"picture-card","show-file-list":!1,"auto-upload":!1,onChange:h,multiple:"true",onSuccess:b},{default:i(()=>[t("div",G,[o(m,{style:{"font-size":"24px"},type:"primary",round:"",size:"large",icon:v(g)},{default:i(()=>[w("上传多个图片")]),_:1},8,["icon"]),J])]),_:1})])],512),[[y,r.value]]),c(t("div",K,[t("div",M,[(d(!0),p(V,null,D(_.value,(s,st)=>(d(),p("div",O,[t("div",P,[t("div",Q,[t("div",R,[o(k,{style:{width:"150px",height:"150px"},src:s.url,fit:"contain",loading:"lazy"},{placeholder:i(()=>[c(t("div",W,null,512),[[E,!0]])]),_:2},1032,["src"])])]),t("div",null,[t("span",X,n(s.name),1),t("span",Y,n(u(s.size))+"  "+n(s.width+"x"+s.height+"px"),1),t("span",Z,n(u(s.compressSize)),1)])])]))),256))]),t("div",$,[t("div",tt,[o(x,{style:{float:"left","margin-left":"5px"},"auto-upload":!1,"list-type":"picture-card","show-file-list":!1,multiple:"true",onChange:h},{default:i(()=>[o(S,null,{default:i(()=>[o(v(g))]),_:1})]),_:1})]),t("div",et,[o(m,{onClick:f[0]||(f[0]=()=>{}),type:"primary",round:"",size:"large",style:{"font-size":"20px",width:"150px"}},{default:i(()=>[w("下载")]),_:1})])])],512),[[y,!r.value]])])}}});const bt=A(ot,[["__scopeId","data-v-fc1eecf4"]]);export{bt as default};
