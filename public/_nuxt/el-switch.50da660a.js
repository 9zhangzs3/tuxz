import{V,d as L,J as $,c as u,r as E,M as T,o as x,k as o,l as v,m as B,B as a,L as c,a9 as ee,E as r,s as p,R as y,S as d,t as N,q as ae,C as O,aa as te,D as ie,ab as U,W as oe}from"./entry.b15f9cd9.js";import{e as ne,E as m,m as le}from"./constants.0fb4eb89.js";import{b as se,d as re,a as I,i as P,_ as ce,w as ue}from"./base.e040b817.js";import{v as de,q as ve,p as fe}from"./use-form-common-props.5502e3a8.js";import{i as k,a as pe}from"./index.fb1b8b13.js";import{U as A,C as D,I as z}from"./event.9519ab40.js";import{u as me,a as he}from"./index.f74eccca.js";import{d as ye,t as be}from"./error.78e43d3e.js";const Ce=s=>["",...de].includes(s),ge=se({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Ce},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:k},activeActionIcon:{type:k},activeIcon:{type:k},inactiveIcon:{type:k},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:re(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Se={[A]:s=>I(s)||V(s)||P(s),[D]:s=>I(s)||V(s)||P(s),[z]:s=>I(s)||V(s)||P(s)},ke=["onClick"],Ie=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Ee=["aria-hidden"],_="ElSwitch",Te=L({name:_}),Be=L({...Te,props:ge,emits:Se,setup(s,{expose:q,emit:f}){const t=s,R=oe(),{formItem:b}=me(),W=ve(),i=$("switch");(e=>{e.forEach(l=>{pe({from:l[0],replacement:l[1],scope:_,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var S;return!!((S=R.vnode.props)!=null&&S[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:G}=he(t,{formItemContext:b}),C=fe(u(()=>t.loading)),w=E(t.modelValue!==!1),h=E(),H=E(),J=u(()=>[i.b(),i.m(W.value),i.is("disabled",C.value),i.is("checked",n.value)]),j=u(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),Q=u(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),X=u(()=>({width:ne(t.width)}));T(()=>t.modelValue,()=>{w.value=!0}),T(()=>t.value,()=>{w.value=!1});const K=u(()=>w.value?t.modelValue:t.value),n=u(()=>K.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(K.value)||(f(A,t.inactiveValue),f(D,t.inactiveValue),f(z,t.inactiveValue)),T(n,e=>{var l;h.value.checked=e,t.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(S=>ye()))});const g=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(A,e),f(D,e),f(z,e),ie(()=>{h.value.checked=n.value})},M=()=>{if(C.value)return;const{beforeChange:e}=t;if(!e){g();return}const l=e();[U(l),I(l)].includes(!0)||be(_,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(l)?l.then(F=>{F&&g()}).catch(F=>{}):l&&g()},Y=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),Z=()=>{var e,l;(l=(e=h.value)==null?void 0:e.focus)==null||l.call(e)};return x(()=>{h.value.checked=n.value}),q({focus:Z,checked:n}),(e,l)=>(o(),v("div",{class:c(a(J)),style:O(a(Y)),onClick:te(M,["prevent"])},[B("input",{id:a(G),ref_key:"input",ref:h,class:c(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(C),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(C),tabindex:e.tabindex,onChange:g,onKeydown:ee(M,["enter"])},null,42,Ie),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:c(a(j))},[e.inactiveIcon?(o(),r(a(m),{key:0},{default:p(()=>[(o(),r(y(e.inactiveIcon)))]),_:1})):d("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,we)):d("v-if",!0)],2)):d("v-if",!0),B("span",{ref_key:"core",ref:H,class:c(a(i).e("core")),style:O(a(X))},[e.inlinePrompt?(o(),v("div",{key:0,class:c(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),r(a(m),{key:0,class:c(a(i).is("icon"))},{default:p(()=>[(o(),r(y(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:c(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,Ve)):d("v-if",!0)],2)):d("v-if",!0),B("div",{class:c(a(i).e("action"))},[e.loading?(o(),r(a(m),{key:0,class:c(a(i).is("loading"))},{default:p(()=>[ae(a(le))]),_:1},8,["class"])):e.activeActionIcon&&a(n)?(o(),r(a(m),{key:1},{default:p(()=>[(o(),r(y(e.activeActionIcon)))]),_:1})):e.inactiveActionIcon&&!a(n)?(o(),r(a(m),{key:2},{default:p(()=>[(o(),r(y(e.inactiveActionIcon)))]),_:1})):d("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:c(a(Q))},[e.activeIcon?(o(),r(a(m),{key:0},{default:p(()=>[(o(),r(y(e.activeIcon)))]),_:1})):d("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Ee)):d("v-if",!0)],2)):d("v-if",!0)],14,ke))}});var Ne=ce(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ue=ue(Ne);export{Ue as E};
