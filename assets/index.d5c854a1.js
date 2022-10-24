var D=Object.defineProperty;var u=(e,t)=>D(e,"name",{value:t,configurable:!0});import{_ as N,$ as W,a as M}from"./index.module.57b1b47c.js";import{r as o}from"./index.2b6ab7ac.js";import{r as q}from"./index.b55ab95f.js";import{T as F}from"./index.e5128aed.js";import{j as p,F as k,a as K}from"./jsx-runtime.d6b12686.js";import{I as V,r as X}from"./IconBase.esm.cc750eb6.js";function Y(e,t){const n=o.exports.createContext(t);function r(s){const{children:d,...l}=s,a=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:a},d)}u(r,"Provider");function c(s){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return u(c,"useContext"),r.displayName=e+"Provider",[r,c]}u(Y,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function H(e,t=[]){let n=[];function r(s,d){const l=o.exports.createContext(d),a=n.length;n=[...n,d];function i(f){const{scope:b,children:x,...$}=f,S=(b==null?void 0:b[e][a])||l,E=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(S.Provider,{value:E},x)}u(i,"Provider");function h(f,b){const x=(b==null?void 0:b[e][a])||l,$=o.exports.useContext(x);if($)return $;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u(h,"useContext"),i.displayName=s+"Provider",[i,h]}u(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=u(()=>{const s=n.map(d=>o.exports.createContext(d));return u(function(l){const a=(l==null?void 0:l[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])},"useScope")},"createScope");return c.scopeName=e,[r,Z(c,...t)]}u(H,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Z(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return u(function(s){const d=r.reduce((l,{useScope:a,scopeName:i})=>{const f=a(s)[`__scope${i}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(Z,"$c512c27ab02ef895$var$composeContextScopes");function w(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}u(w,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function L(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}u(L,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function G({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[r,c]=J({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:r,l=L(n),a=o.exports.useCallback(i=>{if(s){const f=typeof i=="function"?i(e):i;f!==e&&l(f)}else c(i)},[s,e,c,l]);return[d,a]}u(G,"$71cd76cc60e0454e$export$6f32135080cb4c3");function J({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=L(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}u(J,"$71cd76cc60e0454e$var$useUncontrolledState");function Q(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(Q,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,l;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,l=i.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}u(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const te=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=te.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...d}=r,l=s?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,N({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ne="Label",[Se,oe]=Y(ne,{id:void 0,controlRef:{current:null}}),re=u(e=>{const t=oe("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ce(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}u(ce,"$fe963b355347cc68$export$3e6543de14f8614f");const T=u(e=>{const{present:t,children:n}=e,r=se(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=M(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function se(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,a]=ce(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=g(r.current);s.current=l==="mounted"?i:"none"},[l]),A(()=>{const i=r.current,h=c.current;if(h!==e){const b=s.current,x=g(i);e?a("MOUNT"):x==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&b!==x?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,a]),A(()=>{if(t){const i=u(f=>{const x=g(r.current).includes(f.animationName);f.target===t&&x&&q.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),h=u(f=>{f.target===t&&(s.current=g(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}u(se,"$921a889cee6df7e8$var$usePresence");function g(e){return(e==null?void 0:e.animationName)||"none"}u(g,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[ae,Ee]=H(B),[ie,ue]=ae(B),de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:c,checked:s,defaultChecked:d,required:l,disabled:a,value:i="on",onCheckedChange:h,...f}=e,[b,x]=o.exports.useState(null),$=M(t,m=>x(m)),S=re(b),E=r||S,P=o.exports.useRef(!1),R=b?Boolean(b.closest("form")):!0,[y=!1,z]=G({prop:s,defaultProp:d,onChange:h});return o.exports.createElement(ie,{scope:n,state:y,disabled:a},o.exports.createElement(I.button,N({type:"button",role:"checkbox","aria-checked":v(y)?"mixed":y,"aria-labelledby":E,"aria-required":l,"data-state":U(y),"data-disabled":a?"":void 0,disabled:a,value:i},f,{ref:$,onKeyDown:w(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:w(e.onClick,m=>{z(O=>v(O)?!0:!O),R&&(P.current=m.isPropagationStopped(),P.current||m.stopPropagation())})})),R&&o.exports.createElement(pe,{control:b,bubbles:!P.current,name:c,value:i,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ue(le,n);return o.exports.createElement(T,{present:r||v(s.state)||s.state===!0},o.exports.createElement(I.span,N({"data-state":U(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pe=u(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),d=Q(n),l=ee(t);return o.exports.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&f){const b=new Event("click",{bubbles:r});a.indeterminate=v(n),f.call(a,v(n)?!1:n),a.dispatchEvent(b)}},[d,n,r]),o.exports.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}u(v,"$e698a72e93240346$var$isIndeterminate");function U(e){return v(e)?"indeterminate":e?"checked":"unchecked"}u(U,"$e698a72e93240346$var$getState");const be=de,he=fe;var C=new Map;C.set("bold",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(k,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var xe=u(function(t,n){return X(t,n,C)},"renderPath"),j=o.exports.forwardRef(function(e,t){return p(V,{...Object.assign({ref:t},e,{renderPath:xe})})});j.displayName="Check";const $e=j;function _({label:e,id:t,...n}){return K("div",{className:"flex items-center gap-2",children:[p(be,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",id:t,...n,children:p(he,{children:p($e,{weight:"bold",className:"w-5 h-5 text-cyan-500"})})}),p("label",{htmlFor:t,children:p(F,{size:"sm",children:e})})]})}u(_,"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}export{_ as C};
//# sourceMappingURL=index.d5c854a1.js.map
