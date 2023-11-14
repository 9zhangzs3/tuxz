import{M as L,N as O,m as R,E as F}from"./constants.32292d8d.js";import{a as q,i as P}from"./index.901f8d30.js";import{a as J}from"./use-global-config.5035f634.js";import{I as w,r as B,c as f,o as M,M as Q,ae as Z,K as C,a6 as x,Z as H,ar as W,J as T,d as S,k as b,E as y,s as N,l as V,F as X,Q as h,B as n,L as z,R as $,S as D,a2 as Y,N as oo,O as eo}from"./entry.1dc6e359.js";import{q as to,p as K,u as so}from"./use-form-common-props.197ce949.js";import{b as no,d as ao,_ as G,w as lo,e as ro}from"./base.c3d2e3d9.js";import{T as io}from"./index.f8748455.js";const co=()=>{const e=w(L,void 0),s=w(O,void 0);return{form:e,formItem:s}},Vo=(e,{formItemContext:s,disableIdGeneration:t,disableIdManagement:a})=>{t||(t=B(!1)),a||(a=B(!1));const l=B();let o;const i=f(()=>{var c;return!!(!e.label&&s&&s.inputIds&&((c=s.inputIds)==null?void 0:c.length)<=1)});return M(()=>{o=Q([C(e,"id"),t],([c,d])=>{const u=c??(d?void 0:Z().value);u!==l.value&&(s!=null&&s.removeInputId&&(l.value&&s.removeInputId(l.value),!(a!=null&&a.value)&&!d&&u&&s.addInputId(u)),l.value=u)},{immediate:!0})}),x(()=>{o&&o(),s!=null&&s.removeInputId&&l.value&&s.removeInputId(l.value)}),{isLabeledByFormItem:i,inputId:l}},U=Symbol("buttonGroupContextKey"),uo=(e,s)=>{q({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>e.type==="text"));const t=w(U,void 0),a=J("button"),{form:l}=co(),o=to(f(()=>t==null?void 0:t.size)),i=K(),c=B(),d=H(),u=f(()=>e.type||(t==null?void 0:t.type)||""),_=f(()=>{var p,m,g;return(g=(m=e.autoInsertSpace)!=null?m:(p=a.value)==null?void 0:p.autoInsertSpace)!=null?g:!1}),k=f(()=>e.tag==="button"?{ariaDisabled:i.value||e.loading,disabled:i.value||e.loading,autofocus:e.autofocus,type:e.nativeType}:{}),I=f(()=>{var p;const m=(p=d.default)==null?void 0:p.call(d);if(_.value&&(m==null?void 0:m.length)===1){const g=m[0];if((g==null?void 0:g.type)===W){const A=g.children;return/^\p{Unified_Ideograph}{2}$/u.test(A.trim())}}return!1});return{_disabled:i,_size:o,_type:u,_ref:c,_props:k,shouldAddSpace:I,handleClick:p=>{e.nativeType==="reset"&&(l==null||l.resetFields()),s("click",p)}}},po=["default","primary","success","warning","info","danger","text",""],vo=["button","submit","reset"],E=no({size:so,disabled:Boolean,type:{type:String,values:po,default:""},icon:{type:P},nativeType:{type:String,values:vo,default:"button"},loading:Boolean,loadingIcon:{type:P,default:()=>R},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:ao([String,Object]),default:"button"}}),bo={click:e=>e instanceof MouseEvent};function v(e,s=20){return e.mix("#141414",s).toString()}function fo(e){const s=K(),t=T("button");return f(()=>{let a={};const l=e.color;if(l){const o=new io(l),i=e.dark?o.tint(20).toString():v(o,20);if(e.plain)a=t.cssVarBlock({"bg-color":e.dark?v(o,90):o.tint(90).toString(),"text-color":l,"border-color":e.dark?v(o,50):o.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":i}),s.value&&(a[t.cssVarBlockName("disabled-bg-color")]=e.dark?v(o,90):o.tint(90).toString(),a[t.cssVarBlockName("disabled-text-color")]=e.dark?v(o,50):o.tint(50).toString(),a[t.cssVarBlockName("disabled-border-color")]=e.dark?v(o,80):o.tint(80).toString());else{const c=e.dark?v(o,30):o.tint(30).toString(),d=o.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(a=t.cssVarBlock({"bg-color":l,"text-color":d,"border-color":l,"hover-bg-color":c,"hover-text-color":d,"hover-border-color":c,"active-bg-color":i,"active-border-color":i}),s.value){const u=e.dark?v(o,50):o.tint(50).toString();a[t.cssVarBlockName("disabled-bg-color")]=u,a[t.cssVarBlockName("disabled-text-color")]=e.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,a[t.cssVarBlockName("disabled-border-color")]=u}}}return a})}const mo=S({name:"ElButton"}),go=S({...mo,props:E,emits:bo,setup(e,{expose:s,emit:t}){const a=e,l=fo(a),o=T("button"),{_ref:i,_size:c,_type:d,_disabled:u,_props:_,shouldAddSpace:k,handleClick:I}=uo(a,t);return s({ref:i,size:c,type:d,disabled:u,shouldAddSpace:k}),(r,p)=>(b(),y($(r.tag),Y({ref_key:"_ref",ref:i},n(_),{class:[n(o).b(),n(o).m(n(d)),n(o).m(n(c)),n(o).is("disabled",n(u)),n(o).is("loading",r.loading),n(o).is("plain",r.plain),n(o).is("round",r.round),n(o).is("circle",r.circle),n(o).is("text",r.text),n(o).is("link",r.link),n(o).is("has-bg",r.bg)],style:n(l),onClick:n(I)}),{default:N(()=>[r.loading?(b(),V(X,{key:0},[r.$slots.loading?h(r.$slots,"loading",{key:0}):(b(),y(n(F),{key:1,class:z(n(o).is("loading"))},{default:N(()=>[(b(),y($(r.loadingIcon)))]),_:1},8,["class"]))],64)):r.icon||r.$slots.icon?(b(),y(n(F),{key:1},{default:N(()=>[r.icon?(b(),y($(r.icon),{key:0})):h(r.$slots,"icon",{key:1})]),_:3})):D("v-if",!0),r.$slots.default?(b(),V("span",{key:2,class:z({[n(o).em("text","expand")]:n(k)})},[h(r.$slots,"default")],2)):D("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var yo=G(go,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const ko={size:E.size,type:E.type},Bo=S({name:"ElButtonGroup"}),ho=S({...Bo,props:ko,setup(e){const s=e;oo(U,eo({size:C(s,"size"),type:C(s,"type")}));const t=T("button");return(a,l)=>(b(),V("div",{class:z(`${n(t).b("group")}`)},[h(a.$slots,"default")],2))}});var j=G(ho,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const zo=lo(yo,{ButtonGroup:j});ro(j);export{zo as E,Vo as a,co as u};