import{r as a,j as n}from"./index-CHiHBra2.js";import{c as xe,P as E,d as z,e as P,u as y,f as ve,A as we,a as ge,b as Se,H as Ce,F as ye}from"./Footer-3SZ45bJk.js";import{u as N,c as g,a as Pe,B as Re}from"./button-CPSIX_49.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K=(...e)=>e.filter((t,r,l)=>!!t&&l.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:o="",children:s,iconNode:c,...i},d)=>a.createElement("svg",{ref:d,...Ee,width:t,height:t,stroke:e,strokeWidth:l?Number(r)*24/Number(t):r,className:K("lucide",o),...i},[...c.map(([u,h])=>a.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(e,t)=>{const r=a.forwardRef(({className:l,...o},s)=>a.createElement(Ne,{ref:s,iconNode:t,className:K(`lucide-${je(e)}`,l),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=Ae("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var Le=a.createContext(void 0);function ke(e){const t=a.useContext(Le);return e||t||"ltr"}function _e(e,[t,r]){return Math.min(r,Math.max(t,e))}function De(e,t){return a.useReducer((r,l)=>t[r][l]??r,e)}var X="ScrollArea",[G,sr]=xe(X),[Oe,v]=G(X),Q=a.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:l="hover",dir:o,scrollHideDelay:s=600,...c}=e,[i,d]=a.useState(null),[u,h]=a.useState(null),[m,f]=a.useState(null),[p,x]=a.useState(null),[A,F]=a.useState(null),[C,L]=a.useState(0),[Y,k]=a.useState(0),[_,T]=a.useState(!1),[D,O]=a.useState(!1),b=N(t,R=>d(R)),w=ke(o);return n.jsx(Oe,{scope:r,type:l,dir:w,scrollHideDelay:s,scrollArea:i,viewport:u,onViewportChange:h,content:m,onContentChange:f,scrollbarX:p,onScrollbarXChange:x,scrollbarXEnabled:_,onScrollbarXEnabledChange:T,scrollbarY:A,onScrollbarYChange:F,scrollbarYEnabled:D,onScrollbarYEnabledChange:O,onCornerWidthChange:L,onCornerHeightChange:k,children:n.jsx(E.div,{dir:w,...c,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":Y+"px",...e.style}})})});Q.displayName=X;var Z="ScrollAreaViewport",ee=a.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:l,asChild:o,nonce:s,...c}=e,i=v(Z,r),d=a.useRef(null),u=N(t,d,i.onViewportChange);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:`
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`},nonce:s}),n.jsx(E.div,{"data-radix-scroll-area-viewport":"",...c,asChild:o,ref:u,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:Ve({asChild:o,children:l},h=>n.jsx("div",{"data-radix-scroll-area-content":"",ref:i.onContentChange,style:{minWidth:i.scrollbarXEnabled?"fit-content":void 0},children:h}))})]})});ee.displayName=Z;var S="ScrollAreaScrollbar",V=a.forwardRef((e,t)=>{const{forceMount:r,...l}=e,o=v(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:c}=o,i=e.orientation==="horizontal";return a.useEffect(()=>(i?s(!0):c(!0),()=>{i?s(!1):c(!1)}),[i,s,c]),o.type==="hover"?n.jsx(He,{...l,ref:t,forceMount:r}):o.type==="scroll"?n.jsx(We,{...l,ref:t,forceMount:r}):o.type==="auto"?n.jsx(re,{...l,ref:t,forceMount:r}):o.type==="always"?n.jsx(U,{...l,ref:t}):null});V.displayName=S;var He=a.forwardRef((e,t)=>{const{forceMount:r,...l}=e,o=v(S,e.__scopeScrollArea),[s,c]=a.useState(!1);return a.useEffect(()=>{const i=o.scrollArea;let d=0;if(i){const u=()=>{window.clearTimeout(d),c(!0)},h=()=>{d=window.setTimeout(()=>c(!1),o.scrollHideDelay)};return i.addEventListener("pointerenter",u),i.addEventListener("pointerleave",h),()=>{window.clearTimeout(d),i.removeEventListener("pointerenter",u),i.removeEventListener("pointerleave",h)}}},[o.scrollArea,o.scrollHideDelay]),n.jsx(z,{present:r||s,children:n.jsx(re,{"data-state":s?"visible":"hidden",...l,ref:t})})}),We=a.forwardRef((e,t)=>{const{forceMount:r,...l}=e,o=v(S,e.__scopeScrollArea),s=e.orientation==="horizontal",c=M(()=>d("SCROLL_END"),100),[i,d]=De("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return a.useEffect(()=>{if(i==="idle"){const u=window.setTimeout(()=>d("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(u)}},[i,o.scrollHideDelay,d]),a.useEffect(()=>{const u=o.viewport,h=s?"scrollLeft":"scrollTop";if(u){let m=u[h];const f=()=>{const p=u[h];m!==p&&(d("SCROLL"),c()),m=p};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[o.viewport,s,d,c]),n.jsx(z,{present:r||i!=="hidden",children:n.jsx(U,{"data-state":i==="hidden"?"hidden":"visible",...l,ref:t,onPointerEnter:P(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:P(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),re=a.forwardRef((e,t)=>{const r=v(S,e.__scopeScrollArea),{forceMount:l,...o}=e,[s,c]=a.useState(!1),i=e.orientation==="horizontal",d=M(()=>{if(r.viewport){const u=r.viewport.offsetWidth<r.viewport.scrollWidth,h=r.viewport.offsetHeight<r.viewport.scrollHeight;c(i?u:h)}},10);return j(r.viewport,d),j(r.content,d),n.jsx(z,{present:l||s,children:n.jsx(U,{"data-state":s?"visible":"hidden",...o,ref:t})})}),U=a.forwardRef((e,t)=>{const{orientation:r="vertical",...l}=e,o=v(S,e.__scopeScrollArea),s=a.useRef(null),c=a.useRef(0),[i,d]=a.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=ae(i.viewport,i.content),h={...l,sizes:i,onSizesChange:d,hasThumb:u>0&&u<1,onThumbChange:f=>s.current=f,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:f=>c.current=f};function m(f,p){return Be(f,c.current,i,p)}return r==="horizontal"?n.jsx(ze,{...h,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const f=o.viewport.scrollLeft,p=q(f,i,o.dir);s.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=m(f,o.dir))}}):r==="vertical"?n.jsx(Ie,{...h,ref:t,onThumbPositionChange:()=>{if(o.viewport&&s.current){const f=o.viewport.scrollTop,p=q(f,i);s.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=m(f))}}):null}),ze=a.forwardRef((e,t)=>{const{sizes:r,onSizesChange:l,...o}=e,s=v(S,e.__scopeScrollArea),[c,i]=a.useState(),d=a.useRef(null),u=N(t,d,s.onScrollbarXChange);return a.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),n.jsx(oe,{"data-orientation":"horizontal",...o,ref:u,sizes:r,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":I(r)+"px",...e.style},onThumbPointerDown:h=>e.onThumbPointerDown(h.x),onDragScroll:h=>e.onDragScroll(h.x),onWheelScroll:(h,m)=>{if(s.viewport){const f=s.viewport.scrollLeft+h.deltaX;e.onWheelScroll(f),ie(f,m)&&h.preventDefault()}},onResize:()=>{d.current&&s.viewport&&c&&l({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:W(c.paddingLeft),paddingEnd:W(c.paddingRight)}})}})}),Ie=a.forwardRef((e,t)=>{const{sizes:r,onSizesChange:l,...o}=e,s=v(S,e.__scopeScrollArea),[c,i]=a.useState(),d=a.useRef(null),u=N(t,d,s.onScrollbarYChange);return a.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),n.jsx(oe,{"data-orientation":"vertical",...o,ref:u,sizes:r,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":I(r)+"px",...e.style},onThumbPointerDown:h=>e.onThumbPointerDown(h.y),onDragScroll:h=>e.onDragScroll(h.y),onWheelScroll:(h,m)=>{if(s.viewport){const f=s.viewport.scrollTop+h.deltaY;e.onWheelScroll(f),ie(f,m)&&h.preventDefault()}},onResize:()=>{d.current&&s.viewport&&c&&l({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:W(c.paddingTop),paddingEnd:W(c.paddingBottom)}})}})}),[Me,te]=G(S),oe=a.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:l,hasThumb:o,onThumbChange:s,onThumbPointerUp:c,onThumbPointerDown:i,onThumbPositionChange:d,onDragScroll:u,onWheelScroll:h,onResize:m,...f}=e,p=v(S,r),[x,A]=a.useState(null),F=N(t,b=>A(b)),C=a.useRef(null),L=a.useRef(""),Y=p.viewport,k=l.content-l.viewport,_=y(h),T=y(d),D=M(m,10);function O(b){if(C.current){const w=b.clientX-C.current.left,R=b.clientY-C.current.top;u({x:w,y:R})}}return a.useEffect(()=>{const b=w=>{const R=w.target;(x==null?void 0:x.contains(R))&&_(w,k)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[Y,x,k,_]),a.useEffect(T,[l,T]),j(x,D),j(p.content,D),n.jsx(Me,{scope:r,scrollbar:x,hasThumb:o,onThumbChange:y(s),onThumbPointerUp:y(c),onThumbPositionChange:T,onThumbPointerDown:y(i),children:n.jsx(E.div,{...f,ref:F,style:{position:"absolute",...f.style},onPointerDown:P(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),C.current=x.getBoundingClientRect(),L.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),O(b))}),onPointerMove:P(e.onPointerMove,O),onPointerUp:P(e.onPointerUp,b=>{const w=b.target;w.hasPointerCapture(b.pointerId)&&w.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=L.current,p.viewport&&(p.viewport.style.scrollBehavior=""),C.current=null})})})}),H="ScrollAreaThumb",ne=a.forwardRef((e,t)=>{const{forceMount:r,...l}=e,o=te(H,e.__scopeScrollArea);return n.jsx(z,{present:r||o.hasThumb,children:n.jsx(Fe,{ref:t,...l})})}),Fe=a.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:l,...o}=e,s=v(H,r),c=te(H,r),{onThumbPositionChange:i}=c,d=N(t,m=>c.onThumbChange(m)),u=a.useRef(),h=M(()=>{u.current&&(u.current(),u.current=void 0)},100);return a.useEffect(()=>{const m=s.viewport;if(m){const f=()=>{if(h(),!u.current){const p=Xe(m,i);u.current=p,i()}};return i(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[s.viewport,h,i]),n.jsx(E.div,{"data-state":c.hasThumb?"visible":"hidden",...o,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:P(e.onPointerDownCapture,m=>{const p=m.target.getBoundingClientRect(),x=m.clientX-p.left,A=m.clientY-p.top;c.onThumbPointerDown({x,y:A})}),onPointerUp:P(e.onPointerUp,c.onThumbPointerUp)})});ne.displayName=H;var $="ScrollAreaCorner",le=a.forwardRef((e,t)=>{const r=v($,e.__scopeScrollArea),l=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&l?n.jsx(Ye,{...e,ref:t}):null});le.displayName=$;var Ye=a.forwardRef((e,t)=>{const{__scopeScrollArea:r,...l}=e,o=v($,r),[s,c]=a.useState(0),[i,d]=a.useState(0),u=!!(s&&i);return j(o.scrollbarX,()=>{var m;const h=((m=o.scrollbarX)==null?void 0:m.offsetHeight)||0;o.onCornerHeightChange(h),d(h)}),j(o.scrollbarY,()=>{var m;const h=((m=o.scrollbarY)==null?void 0:m.offsetWidth)||0;o.onCornerWidthChange(h),c(h)}),u?n.jsx(E.div,{...l,ref:t,style:{width:s,height:i,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function W(e){return e?parseInt(e,10):0}function ae(e,t){const r=e/t;return isNaN(r)?0:r}function I(e){const t=ae(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-r)*t;return Math.max(l,18)}function Be(e,t,r,l="ltr"){const o=I(r),s=o/2,c=t||s,i=o-c,d=r.scrollbar.paddingStart+c,u=r.scrollbar.size-r.scrollbar.paddingEnd-i,h=r.content-r.viewport,m=l==="ltr"?[0,h]:[h*-1,0];return se([d,u],m)(e)}function q(e,t,r="ltr"){const l=I(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-o,c=t.content-t.viewport,i=s-l,d=r==="ltr"?[0,c]:[c*-1,0],u=_e(e,d);return se([0,c],[0,i])(u)}function se(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(r-e[0])}}function ie(e,t){return e>0&&e<t}var Xe=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},l=0;return function o(){const s={left:e.scrollLeft,top:e.scrollTop},c=r.left!==s.left,i=r.top!==s.top;(c||i)&&t(),r=s,l=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(l)};function M(e,t){const r=y(e),l=a.useRef(0);return a.useEffect(()=>()=>window.clearTimeout(l.current),[]),a.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(r,t)},[r,t])}function j(e,t){const r=y(t);ve(()=>{let l=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(r)});return o.observe(e),()=>{window.cancelAnimationFrame(l),o.unobserve(e)}}},[e,r])}function Ve(e,t){const{asChild:r,children:l}=e;if(!r)return typeof t=="function"?t(l):t;const o=a.Children.only(l);return a.cloneElement(o,{children:typeof t=="function"?t(o.props.children):t})}var ce=Q,Ue=ee,$e=le;const B=a.forwardRef(({className:e,children:t,...r},l)=>n.jsxs(ce,{ref:l,className:g("relative overflow-hidden",e),...r,children:[n.jsx(Ue,{className:"h-full w-full rounded-[inherit]",children:t}),n.jsx(de,{}),n.jsx($e,{})]}));B.displayName=ce.displayName;const de=a.forwardRef(({className:e,orientation:t="vertical",...r},l)=>n.jsx(V,{ref:l,orientation:t,className:g("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:n.jsx(ne,{className:"relative flex-1 rounded-full bg-border"})}));de.displayName=V.displayName;var qe="Separator",J="horizontal",Je=["horizontal","vertical"],he=a.forwardRef((e,t)=>{const{decorative:r,orientation:l=J,...o}=e,s=Ke(l)?l:J,i=r?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return n.jsx(E.div,{"data-orientation":s,...i,...o,ref:t})});he.displayName=qe;function Ke(e){return Je.includes(e)}var ue=he;const fe=a.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...l},o)=>n.jsx(ue,{ref:o,decorative:r,orientation:t,className:g("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...l}));fe.displayName=ue.displayName;const Ge=Pe("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Qe({className:e,variant:t,...r}){return n.jsx("div",{className:g(Ge({variant:t}),e),...r})}const me=a.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:g("rounded-xl border bg-card text-card-foreground shadow",e),...t}));me.displayName="Card";const Ze=a.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:g("flex flex-col space-y-1.5 p-6",e),...t}));Ze.displayName="CardHeader";const pe=a.forwardRef(({className:e,...t},r)=>n.jsx("h3",{ref:r,className:g("font-semibold leading-none tracking-tight",e),...t}));pe.displayName="CardTitle";const er=a.forwardRef(({className:e,...t},r)=>n.jsx("p",{ref:r,className:g("text-sm text-muted-foreground",e),...t}));er.displayName="CardDescription";const be=a.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:g("p-6 pt-0",e),...t}));be.displayName="CardContent";const rr=a.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:g("flex items-center p-6 pt-0",e),...t}));rr.displayName="CardFooter";function tr(){const e=[{title:"chat-with-ollama",description:"A dynamic web-based chatbot platform that allows users to engage in interactive conversations with the Ollama Large Language Model.",image:"./project1.png",tech:["React","Tailwind","Api"],link:"https://github.com/yassirkalkhi/chat-with-ollama",duration:"1 week",date:"Jan 2024 - Jun 2024"},{title:"telegram-chatbot",description:"Telegram chatbot that allows users to engage in interactive conversations with the advanced LLaMA 3 model. Built with the groq-sdk and GROQ API.",image:"./project1.png",tech:["React","Tailwind","Api","telegraf lib"],link:"https://github.com/yassirkalkhi/telegram-chatbot",duration:"1 week",date:"Jan 2024 - Jun 2024"},{title:"bicycle-rental",description:"A fully responsive and user-friendly bicycle rental platform designed to streamline the process of renting bikes online",image:"./project1.png",tech:[],link:"https://github.com/yassirkalkhi/bicycle-rental",duration:"In Progress",date:"Oct 2024"}],t=["HTML","CSS","JavaScript","React","Tailwindcss","Firebase","Python","PHP","SQL"];return n.jsxs("div",{className:"flex flex-col h-[80vh] md:flex-row  mt-16 mb-28  ",children:[n.jsx("aside",{className:"w-full md:w-1/3 lg:w-1/4 border-r border-white/20  xl:ms-32 2xl:ms-52",children:n.jsxs(B,{className:"h-full px-6 py-8",children:[n.jsxs("div",{className:"flex flex-col items-center mb-6",children:[n.jsxs(we,{className:"w-32 h-32 mb-4",children:[n.jsx(ge,{src:"../users.jpg",alt:"Profile picture"}),n.jsx(Se,{className:"text-white bg-gray-500/30 text-4xl font-semibold",children:"YK"})]}),n.jsx("h2",{className:"text-white text-xl font-bold",children:"Yassir Kalkhi"}),n.jsx("p",{className:"text-white/80",children:"Full Stack Web Developer"})]}),n.jsx(fe,{className:"bg-white/20 my-8"}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-white text-lg font-semibold mb-2",children:"Skills"}),n.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((r,l)=>n.jsxs("span",{className:"text-white/80 font-semibold",children:[r," • "]},l))})]})]})}),n.jsx("main",{className:"flex-1 p-6  xl:me-9 2xl:me-40",children:n.jsxs(B,{className:"h-full",children:[n.jsx("h2",{className:"text-2xl text-white font-bold mb-6",children:"Projects"}),n.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:e.map((r,l)=>n.jsx(me,{className:"overflow-hidden bg-transparent border-white/20 ",children:n.jsxs(be,{className:"p-4",children:[n.jsxs("div",{className:"flex justify-between items-start mb-2",children:[n.jsx(pe,{className:"text-xl text-white",children:r.title}),n.jsxs("div",{className:"text-right",children:[n.jsx("p",{className:"text-sm font-medium text-white/80",children:r.duration}),n.jsx("p",{className:"text-xs text-white/80",children:r.date})]})]}),n.jsx("p",{className:"text-sm text-white/80 mb-4",children:r.description}),n.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:r.tech.map((o,s)=>n.jsx(Qe,{variant:"secondary",children:o},s))}),n.jsx(Re,{variant:"outline",size:"sm",className:"w-full",asChild:!0,children:n.jsxs("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:["Github",n.jsx(Te,{className:"ml-2 h-4 w-4"})]})})]})},l))})]})})]})}const ir=()=>n.jsxs(n.Fragment,{children:[" ",n.jsx(Ce,{}),n.jsx(tr,{}),n.jsx(ye,{})]});export{ir as default};
