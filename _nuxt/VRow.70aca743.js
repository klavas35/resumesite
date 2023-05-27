import{B as u,J as f,av as d,K as g,Y as O,L as B,i as R,aw as i,ax as y,D as V,ay as k}from"./entry.41343c12.js";const _=u({fluid:{type:Boolean,default:!1},...f(),...d()},"v-container"),D=g()({name:"VContainer",props:_(),setup(e,a){let{slots:t}=a;const{rtlClasses:s}=O();return B(()=>R(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),N=(()=>i.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),j=(()=>i.reduce((e,a)=>{const t="offset"+y(a);return e[t]={type:[String,Number],default:null},e},{}))(),L=(()=>i.reduce((e,a)=>{const t="order"+y(a);return e[t]={type:[String,Number],default:null},e},{}))(),b={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function I(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const T=["auto","start","end","center","baseline","stretch"],U=u({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>T.includes(e)},...f(),...d()},"v-col"),W=g()({name:"VCol",props:U(),setup(e,a){let{slots:t}=a;const s=V(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const c=e[o],S=I(l,o,c);S&&n.push(S)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return k(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),C=["start","end","center"],w=["space-between","space-around","space-evenly"];function m(e,a){return i.reduce((t,s)=>{const n=e+y(s);return t[n]=a(),t},{})}const K=[...C,"baseline","stretch"],P=e=>K.includes(e),$=m("align",()=>({type:String,default:null,validator:P})),M=[...C,...w],h=e=>M.includes(e),E=m("justify",()=>({type:String,default:null,validator:h})),x=[...C,...w,"stretch"],A=e=>x.includes(e),G=m("alignContent",()=>({type:String,default:null,validator:A})),v={align:Object.keys($),justify:Object.keys(E),alignContent:Object.keys(G)},F={align:"align",justify:"justify",alignContent:"align-content"};function J(e,a,t){let s=F[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const Y=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:P},...$,justify:{type:String,default:null,validator:h},...E,alignContent:{type:String,default:null,validator:A},...G,...f(),...d()},"v-row"),q=g()({name:"VRow",props:Y(),setup(e,a){let{slots:t}=a;const s=V(()=>{const n=[];let l;for(l in v)v[l].forEach(r=>{const o=e[r],c=J(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return k(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{D as V,W as a,q as b};