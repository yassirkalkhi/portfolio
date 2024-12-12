import{r as v,j as V}from"./index-DGcmEEJu.js";function pe(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function oe(...e){return r=>e.forEach(t=>pe(t,r))}function tr(...e){return v.useCallback(oe(...e),e)}var ne=v.forwardRef((e,r)=>{const{children:t,...o}=e,s=v.Children.toArray(t),n=s.find(fe);if(n){const l=n.props.children,i=s.map(d=>d===n?v.Children.count(l)>1?v.Children.only(null):v.isValidElement(l)?l.props.children:null:d);return V.jsx(U,{...o,ref:r,children:v.isValidElement(l)?v.cloneElement(l,void 0,i):null})}return V.jsx(U,{...o,ref:r,children:t})});ne.displayName="Slot";var U=v.forwardRef((e,r)=>{const{children:t,...o}=e;if(v.isValidElement(t)){const s=me(t);return v.cloneElement(t,{...ge(o,t.props),ref:r?oe(r,s):s})}return v.Children.count(t)>1?v.Children.only(null):null});U.displayName="SlotClone";var be=({children:e})=>V.jsx(V.Fragment,{children:e});function fe(e){return v.isValidElement(e)&&e.type===be}function ge(e,r){const t={...r};for(const o in r){const s=e[o],n=r[o];/^on[A-Z]/.test(o)?s&&n?t[o]=(...i)=>{n(...i),s(...i)}:s&&(t[o]=s):o==="style"?t[o]={...s,...n}:o==="className"&&(t[o]=[s,n].filter(Boolean).join(" "))}return{...e,...t}}function me(e){var o,s;let r=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function se(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=se(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function he(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=se(e))&&(o&&(o+=" "),o+=r);return o}const D=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ee=he,ye=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return ee(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:n}=r,l=Object.keys(s).map(c=>{const f=t==null?void 0:t[c],h=n==null?void 0:n[c];if(f===null)return null;const m=D(f)||D(h);return s[c][m]}),i=t&&Object.entries(t).reduce((c,f)=>{let[h,m]=f;return m===void 0||(c[h]=m),c},{}),d=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:h,className:m,...C}=f;return Object.entries(C).every(x=>{let[g,u]=x;return Array.isArray(u)?u.includes({...n,...i}[g]):{...n,...i}[g]===u})?[...c,h,m]:c},[]);return ee(e,l,d,t==null?void 0:t.class,t==null?void 0:t.className)};function ie(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=ie(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function ve(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=ie(e))&&(o&&(o+=" "),o+=r);return o}const q="-",xe=e=>{const r=Ce(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const i=l.split(q);return i[0]===""&&i.length!==1&&i.shift(),le(i,r)||we(l)},getConflictingClassGroupIds:(l,i)=>{const d=t[l]||[];return i&&o[l]?[...d,...o[l]]:d}}},le=(e,r)=>{var l;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?le(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(q);return(l=r.validators.find(({validator:i})=>i(n)))==null?void 0:l.classGroupId},re=/^\[(.+)\]$/,we=e=>{if(re.test(e)){const r=re.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Ce=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ze(Object.entries(e.classGroups),t).forEach(([n,l])=>{F(l,o,n,r)}),o},F=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:te(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(ke(s)){F(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,l])=>{F(l,te(r,n),t,o)})})},te=(e,r)=>{let t=e;return r.split(q).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},ke=e=>e.isThemeGetter,ze=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,i])=>[r+l,i])):n);return[t,s]}):e,Se=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,l)=>{t.set(n,l),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let l=t.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return s(n,l),l},set(n,l){t.has(n)?t.set(n,l):s(n,l)}}},ae="!",Ae=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,l=i=>{const d=[];let c=0,f=0,h;for(let u=0;u<i.length;u++){let y=i[u];if(c===0){if(y===s&&(o||i.slice(u,u+n)===r)){d.push(i.slice(f,u)),f=u+n;continue}if(y==="/"){h=u;continue}}y==="["?c++:y==="]"&&c--}const m=d.length===0?i:i.substring(f),C=m.startsWith(ae),x=C?m.substring(1):m,g=h&&h>f?h-f:void 0;return{modifiers:d,hasImportantModifier:C,baseClassName:x,maybePostfixModifierPosition:g}};return t?i=>t({className:i,parseClassName:l}):l},Re=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},je=e=>({cache:Se(e.cacheSize),parseClassName:Ae(e),...xe(e)}),Me=/\s+/,Pe=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],l=e.trim().split(Me);let i="";for(let d=l.length-1;d>=0;d-=1){const c=l[d],{modifiers:f,hasImportantModifier:h,baseClassName:m,maybePostfixModifierPosition:C}=t(c);let x=!!C,g=o(x?m.substring(0,C):m);if(!g){if(!x){i=c+(i.length>0?" "+i:i);continue}if(g=o(m),!g){i=c+(i.length>0?" "+i:i);continue}x=!1}const u=Re(f).join(":"),y=h?u+ae:u,w=y+g;if(n.includes(w))continue;n.push(w);const P=s(g,x);for(let R=0;R<P.length;++R){const I=P[R];n.push(y+I)}i=c+(i.length>0?" "+i:i)}return i};function Ee(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ce(r))&&(o&&(o+=" "),o+=t);return o}const ce=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ce(e[o]))&&(t&&(t+=" "),t+=r);return t};function Ne(e,...r){let t,o,s,n=l;function l(d){const c=r.reduce((f,h)=>h(f),e());return t=je(c),o=t.cache.get,s=t.cache.set,n=i,i(d)}function i(d){const c=o(d);if(c)return c;const f=Pe(d,t);return s(d,f),f}return function(){return n(Ee.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},de=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ge=/^\d+\/\d+$/,Ve=new Set(["px","full","screen"]),Ie=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Te=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Oe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Le=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>j(e)||Ve.has(e)||Ge.test(e),S=e=>M(e,"length",Ze),j=e=>!!e&&!Number.isNaN(Number(e)),$=e=>M(e,"number",j),N=e=>!!e&&Number.isInteger(Number(e)),_e=e=>e.endsWith("%")&&j(e.slice(0,-1)),a=e=>de.test(e),A=e=>Ie.test(e),Be=new Set(["length","size","percentage"]),$e=e=>M(e,Be,ue),Ue=e=>M(e,"position",ue),Fe=new Set(["image","url"]),qe=e=>M(e,Fe,Ke),He=e=>M(e,"",Je),G=()=>!0,M=(e,r,t)=>{const o=de.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Ze=e=>Te.test(e)&&!We.test(e),ue=()=>!1,Je=e=>Oe.test(e),Ke=e=>Le.test(e),Xe=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),s=p("borderColor"),n=p("borderRadius"),l=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),c=p("grayscale"),f=p("hueRotate"),h=p("invert"),m=p("gap"),C=p("gradientColorStops"),x=p("gradientColorStopPositions"),g=p("inset"),u=p("margin"),y=p("opacity"),w=p("padding"),P=p("saturate"),R=p("scale"),I=p("sepia"),H=p("skew"),Z=p("space"),J=p("translate"),O=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",a,r],b=()=>[a,r],K=()=>["",z,S],T=()=>["auto",j,a],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",a],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[j,a];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[z,S],blur:["none","",A,a],brightness:k(),borderColor:[e],borderRadius:["none","","full",A,a],borderSpacing:b(),borderWidth:K(),contrast:k(),grayscale:E(),hueRotate:k(),invert:E(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[_e,S],inset:_(),margin:_(),opacity:k(),padding:b(),saturate:k(),scale:k(),sepia:E(),skew:k(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),a]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,a]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",N,a]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",N,a]},a]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[N,a]},a]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",A,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",j,$]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,S]}],"underline-offset":[{"underline-offset":["auto",z,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Ue]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$e]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:W()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[z,a]}],"outline-w":[{outline:[z,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[z,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,He]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",A,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[P]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[N,a]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,S,$]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Qe=Ne(Xe);function Ye(...e){return Qe(ve(e))}const De=ye("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),er=v.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...s},n)=>{const l=o?ne:"button";return V.jsx(l,{className:Ye(De({variant:r,size:t,className:e})),ref:n,...s})});er.displayName="Button";export{er as B,ne as S,ye as a,Ye as c,tr as u};
