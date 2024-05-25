(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let a="refresh",o="navigate",i="restore",l="server-patch",s="prefetch",u="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(8754),a=r._(n(7294)),o=n(4450),i=n(2227),l=n(4364),s=n(109),u=n(3607),c=n(1823),f=n(9031),d=n(920),m=n(30),p=n(7192),v=n(7498),g=new Set;function prefetch(e,t,n,r,a,o){if(!o&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(g.has(o))return;g.add(o)}let l=o?e.prefetch(t,a):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,o,l,s,u,c,f){let{nodeName:d}=e.currentTarget,m="A"===d.toUpperCase();if(m&&(isModifiedEvent(e)||!c&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:u,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};c?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let h=a.default.forwardRef(function(e,t){let n,r;let{href:i,as:l,children:g,prefetch:h=null,passHref:x,replace:y,shallow:b,scroll:_,locale:j,onClick:k,onMouseEnter:S,onTouchStart:C,legacyBehavior:N=!1,...I}=e;n=g,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let E=a.default.useContext(c.RouterContext),O=a.default.useContext(f.AppRouterContext),A=null!=E?E:O,L=!E,M=!1!==h,T=null===h?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:B,as:R}=a.default.useMemo(()=>{if(!E){let e=formatStringOrUrl(i);return{href:e,as:l?formatStringOrUrl(l):e}}let[e,t]=(0,o.resolveHref)(E,i,!0);return{href:e,as:l?(0,o.resolveHref)(E,l):t||e}},[E,i,l]),P=a.default.useRef(B),w=a.default.useRef(R);N&&(r=a.default.Children.only(n));let G=N?r&&"object"==typeof r&&r.ref:t,[D,F,U]=(0,d.useIntersection)({rootMargin:"200px"}),W=a.default.useCallback(e=>{(w.current!==R||P.current!==B)&&(U(),w.current=R,P.current=B),D(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[R,G,B,U,D]);a.default.useEffect(()=>{A&&F&&M&&prefetch(A,B,R,{locale:j},{kind:T},L)},[R,B,F,j,M,null==E?void 0:E.locale,A,L,T]);let K={ref:W,onClick(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&linkClicked(e,A,B,R,y,b,_,j,L,M)},onMouseEnter(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(M||!L)&&prefetch(A,B,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:T},L)},onTouchStart(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(M||!L)&&prefetch(A,B,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:T},L)}};if((0,s.isAbsoluteUrl)(R))K.href=R;else if(!N||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,m.getDomainLocale)(R,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);K.href=t||(0,p.addBasePath)((0,u.addLocale)(R,e,null==E?void 0:E.defaultLocale))}return N?a.default.cloneElement(r,K):a.default.createElement("a",{...I,...K},n)}),x=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),a=n(3436),o="function"==typeof IntersectionObserver,i=new Map,l=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},l.push(n),i.set(n,t),t}function observe(e,t,n){let{id:r,observer:a,elements:o}=createObserver(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:i}=e,l=i||!o,[s,u]=(0,r.useState)(!1),c=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{c.current=e},[]);(0,r.useEffect)(()=>{if(o){if(l||s)return;let e=c.current;if(e&&e.tagName){let r=observe(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,a.requestIdleCallback)(()=>u(!0));return()=>(0,a.cancelIdleCallback)(e)}},[l,n,t,s,c.current]);let d=(0,r.useCallback)(()=>{u(!1)},[]);return[f,s,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(9201)},1664:function(e,t,n){e.exports=n(5170)},4298:function(e,t,n){e.exports=n(5354)},9432:function(e,t,n){"use strict";n.d(t,{q:function(){return p}});var[r,a]=(0,n(5227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),o=n(296),i=n(5893);function initials(e){var t;let n=e.split(" "),r=null!=(t=n.at(0))?t:"",a=n.length>1?n.at(-1):"";return r&&a?`${r.charAt(0)}${a.charAt(0)}`:r.charAt(0)}function AvatarName(e){let{name:t,getInitials:n,...r}=e,l=a();return(0,i.jsx)(o.m.div,{role:"img","aria-label":t,...r,__css:l.label,children:t?null==n?void 0:n(t):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=e=>(0,i.jsxs)(o.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,i.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,i.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),l=n(5721),s=n(7294);function AvatarImage(e){let{src:t,srcSet:n,onError:r,onLoad:a,getInitials:u,name:c,borderRadius:f,loading:d,iconLabel:m,icon:p=(0,i.jsx)(GenericAvatarIcon,{}),ignoreFallback:v,referrerPolicy:g,crossOrigin:h}=e,x=(0,l.d)({src:t,onError:r,crossOrigin:h,ignoreFallback:v}),y=!t||"loaded"!==x;return y?c?(0,i.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials:u,name:c}):(0,s.cloneElement)(p,{role:"img","aria-label":m}):(0,i.jsx)(o.m.img,{src:t,srcSet:n,alt:c,onLoad:a,referrerPolicy:g,crossOrigin:null!=h?h:void 0,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:f}})}AvatarImage.displayName="AvatarImage";var u=n(5059),c=n(1628),f=n(3179),d=n(5432),m={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},p=(0,u.G)((e,t)=>{let n=(0,c.jC)("Avatar",e),[a,l]=(0,s.useState)(!1),{src:u,srcSet:p,name:v,showBorder:g,borderRadius:h="full",onError:x,onLoad:y,getInitials:b=initials,icon:_=(0,i.jsx)(GenericAvatarIcon,{}),iconLabel:j=" avatar",loading:k,children:S,borderColor:C,ignoreFallback:N,crossOrigin:I,...E}=(0,f.Lr)(e),O={borderRadius:h,borderWidth:g?"2px":void 0,...m,...n.container};return C&&(O.borderColor=C),(0,i.jsx)(o.m.span,{ref:t,...E,className:(0,d.cx)("chakra-avatar",e.className),"data-loaded":(0,d.PB)(a),__css:O,children:(0,i.jsxs)(r,{value:n,children:[(0,i.jsx)(AvatarImage,{src:u,srcSet:p,loading:k,onLoad:(0,d.v0)(y,()=>{l(!0)}),onError:x,getInitials:b,name:v,borderRadius:h,icon:_,iconLabel:j,ignoreFallback:N,crossOrigin:I}),S]})})});p.displayName="Avatar"},5698:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(7294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}var[a,o]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),i=n(296),l=n(5432),s=n(5893);function ButtonIcon(e){let{children:t,className:n,...a}=e,o=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,l.cx)("chakra-button__icon",n);return(0,s.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:u,children:o})}ButtonIcon.displayName="ButtonIcon";var u=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:a="0.5rem",children:o=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:f,...d}=e,m=(0,l.cx)("chakra-button__spinner",c),p="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,p,a]);return(0,s.jsx)(i.m.div,{className:m,...d,__css:v,children:o})}function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,r.useMemo)(()=>mergeRefs(...e),e)}ButtonSpinner.displayName="ButtonSpinner";var c=n(5059),f=n(1628),d=n(3179),m=(0,c.G)((e,t)=>{let n=o(),a=(0,f.mq)("Button",{...n,...e}),{isDisabled:u=null==n?void 0:n.isDisabled,isLoading:c,isActive:m,children:p,leftIcon:v,rightIcon:g,loadingText:h,iconSpacing:x="0.5rem",type:y,spinner:b,spinnerPlacement:_="start",className:j,as:k,...S}=(0,d.Lr)(e),C=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:N,type:I}=useButtonType(k),E={rightIcon:g,leftIcon:v,iconSpacing:x,children:p};return(0,s.jsxs)(i.m.button,{ref:useMergeRefs(t,N),as:k,type:null!=y?y:I,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(c),__css:C,className:(0,l.cx)("chakra-button",j),...S,disabled:u||c,children:[c&&"start"===_&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:h,placement:"start",spacing:x,children:b}),c?h||(0,s.jsx)(i.m.span,{opacity:0,children:(0,s.jsx)(ButtonContent,{...E})}):(0,s.jsx)(ButtonContent,{...E}),c&&"end"===_&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:h,placement:"end",spacing:x,children:b})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(ButtonIcon,{marginEnd:a,children:t}),r,n&&(0,s.jsx)(ButtonIcon,{marginStart:a,children:n})]})}m.displayName="Button"},5721:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage},z:function(){return shouldShowFallbackImage}});var r=n(6245),a=n(7294);function useImage(e){let{loading:t,src:n,srcSet:o,onLoad:i,onError:l,crossOrigin:s,sizes:u,ignoreFallback:c}=e,[f,d]=(0,a.useState)("pending");(0,a.useEffect)(()=>{d(n?"loading":"pending")},[n]);let m=(0,a.useRef)(),p=(0,a.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,s&&(e.crossOrigin=s),o&&(e.srcset=o),u&&(e.sizes=u),t&&(e.loading=t),e.onload=e=>{flush(),d("loaded"),null==i||i(e)},e.onerror=e=>{flush(),d("failed"),null==l||l(e)},m.current=e},[n,s,o,u,i,l,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!c)return"loading"===f&&p(),()=>{flush()}},[f,p,c]),c?"loaded":f}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},1941:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(5059),a=n(5893),o=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:o,...i}=e;return(0,a.jsx)("img",{width:n,height:r,ref:t,alt:o,...i})});o.displayName="NativeImage";var i=n(5721),l=n(296);function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var s=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:s,srcSet:u,align:c,fit:f,loading:d,ignoreFallback:m,crossOrigin:p,fallbackStrategy:v="beforeLoadOrError",referrerPolicy:g,...h}=e,x=null!=d||m||!(void 0!==n||void 0!==r),y=(0,i.d)({...e,crossOrigin:p,ignoreFallback:x}),b=(0,i.z)(y,v),_={ref:t,objectFit:f,objectPosition:c,...x?h:omit(h,["onError","onLoad"])};return b?r||(0,a.jsx)(l.m.img,{as:o,className:"chakra-image__placeholder",src:n,..._}):(0,a.jsx)(l.m.img,{as:o,src:s,srcSet:u,crossOrigin:p,loading:d,referrerPolicy:g,className:"chakra-image",..._})});s.displayName="Image"},7754:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(296),a=n(5059),o=n(5893),i=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var l={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)(function(e,t){let{axis:n="both",...a}=e;return(0,o.jsx)(r.m.div,{ref:t,__css:l[n],...a,position:"absolute"})})},3100:function(e,t,n){"use strict";n.d(t,{xu:function(){return i}});var r=n(296),a=n(5059),o=n(5893),i=(0,r.m)("div");i.displayName="Box";var l=(0,a.G)(function(e,t){let{size:n,centerContent:r=!0,...a}=e;return(0,o.jsx)(i,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});l.displayName="Square",(0,a.G)(function(e,t){let{size:n,...r}=e;return(0,o.jsx)(l,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},5034:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=(0,n(296).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var r=n(5059),a=n(1628),o=n(3179),i=n(296),l=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Heading",e),{className:r,...u}=(0,o.Lr)(e);return(0,s.jsx)(i.m.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...u,__css:n})});u.displayName="Heading"},4641:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(7073),a=n(5059),o=n(5893),i=(0,a.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));i.displayName="HStack"},204:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(5059),a=n(296),o=n(5893),i=(0,r.G)(function(e,t){let{direction:n,align:r,justify:i,wrap:l,basis:s,grow:u,shrink:c,...f}=e;return(0,o.jsx)(a.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:i,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:c},...f})});i.displayName="Flex"},1669:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(7073),a=n(5059),o=n(5893),i=(0,a.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},7073:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(296),a=n(5893),StackItem=e=>(0,a.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var o=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,o.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var i="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[i]:mapResponsive(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}}var l=n(5059),s=n(7294);function getValidChildren(e){return s.Children.toArray(e).filter(e=>(0,s.isValidElement)(e))}var u=(0,l.G)((e,t)=>{let{isInline:n,direction:l,align:u,justify:c,spacing:f="0.5rem",wrap:d,children:m,divider:p,className:v,shouldWrapChildren:g,...h}=e,x=n?"row":null!=l?l:"column",y=(0,s.useMemo)(()=>getStackStyles({direction:x,spacing:f}),[x,f]),b=(0,s.useMemo)(()=>getDividerStyles({spacing:f,direction:x}),[f,x]),_=!!p,j=!g&&!_,k=(0,s.useMemo)(()=>{let e=getValidChildren(m);return j?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,o=n+1===e.length,i=(0,a.jsx)(StackItem,{children:t},r),l=g?i:t;if(!_)return l;let u=(0,s.cloneElement)(p,{__css:b});return(0,a.jsxs)(s.Fragment,{children:[l,o?null:u]},r)})},[p,b,_,j,g,m]),S=(0,o.cx)("chakra-stack",v);return(0,a.jsx)(r.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:c,flexDirection:y.flexDirection,flexWrap:d,className:S,__css:_?{}:{[i]:y[i]},...h,children:k})});u.displayName="Stack"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(5059),a=n(1628),o=n(3179),i=n(296),l=n(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var s=n(5893),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:u,decoration:c,casing:f,...d}=(0,o.Lr)(e),m=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(i.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...m,...d,__css:n})});u.displayName="Text"},3838:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(5059),a=n(1628),o=n(3179),i=n(296),l=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Link",e),{className:r,isExternal:u,...c}=(0,o.Lr)(e);return(0,s.jsx)(i.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",r),...c,__css:n})});u.displayName="Link"}}]);