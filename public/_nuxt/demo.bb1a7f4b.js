import{E as g,p as _}from"./constants.eb0fc12e.js";import{E as b}from"./el-progress.56adb9af.js";import{E as v}from"./el-overlay.458fb017.js";import{_ as j}from"./client-only.0e1563ec.js";import"./base.b0a13d53.js";/* empty css                */import{d as h,r as m,k as w,l as x,q as a,s as t,B as y,m as E,F as V}from"./entry.7321a61b.js";import"./error.78e43d3e.js";import"./use-form-common-props.d48746c9.js";import"./vnode.870dfb41.js";import"./index.636cfc4c.js";import"./focus-trap.3b6a5446.js";import"./aria.60e0cdc6.js";import"./event.9519ab40.js";import"./use-global-config.f9c3cc9d.js";import"./scroll.d7191e06.js";const q=["src"],J=h({__name:"demo",setup(k){const p=m([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-1.png",url:"/images/plant-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-2.png",url:"/images/plant-2.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-1.png",url:"/images/figure-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-2.png",url:"/images/figure-2.png"}]),r=m(""),l=m(!1),i=(o,e)=>{console.log(o,e)},s=o=>{r.value=o.url,l.value=!0};return(o,e)=>{const u=g,d=b,f=v,c=j;return w(),x(V,null,[a(d,{"file-list":p.value,"onUpdate:fileList":e[0]||(e[0]=n=>p.value=n),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-preview":s,"on-remove":i},{default:t(()=>[a(u,null,{default:t(()=>[a(y(_))]),_:1})]),_:1},8,["file-list"]),a(c,null,{default:t(()=>[a(f,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value=n)},{default:t(()=>[E("img",{"w-full":"",src:r.value,style:{width:"100%"},alt:"Preview Image"},null,8,q)]),_:1},8,["modelValue"])]),_:1})],64)}}});export{J as default};