(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{98322:function(r,e,n){"use strict";n.d(e,{E:function(){return f}});var t=n(90063),i=n(11440),a=n(4651),c=n(73808),o=n(67294),l=n(68327);function s(){return(s=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function u(r,e){if(null==r)return{};var n,t,i={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(i[n]=r[n]);return i}var d=o.forwardRef(((r,e)=>{var{htmlWidth:n,htmlHeight:t,alt:i}=r,a=u(r,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",s({width:n,height:t,ref:e,alt:i},a))})),f=(0,t.G)(((r,e)=>{var{fallbackSrc:n,fallback:t,src:c,srcSet:f,align:h,fit:g,loading:m,ignoreFallback:x,crossOrigin:v}=r,j=u(r,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=m||x||void 0===n&&void 0===t,p=function(r){var{loading:e,src:n,srcSet:t,onLoad:i,onError:a,crossOrigin:c,sizes:s,ignoreFallback:u}=r,[d,f]=(0,o.useState)("pending");(0,o.useEffect)((()=>{f(n?"loading":"pending")}),[n]);var h=(0,o.useRef)(),g=(0,o.useCallback)((()=>{if(n){m();var r=new Image;r.src=n,c&&(r.crossOrigin=c),t&&(r.srcset=t),s&&(r.sizes=s),e&&(r.loading=e),r.onload=r=>{m(),f("loaded"),null==i||i(r)},r.onerror=r=>{m(),f("failed"),null==a||a(r)},h.current=r}}),[n,c,t,s,i,a,e]),m=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,l.G)((()=>{if(!u)return"loading"===d&&g(),()=>{m()}}),[d,g,u]),u?"loaded":d}(s({},r,{ignoreFallback:b})),k=s({ref:e,objectFit:g,objectPosition:h},b?j:(0,a.CE)(j,["onError","onLoad"]));return"loaded"!==p?t||o.createElement(i.m$.img,s({as:d,className:"chakra-image__placeholder",src:n},k)):o.createElement(i.m$.img,s({as:d,src:c,srcSet:f,crossOrigin:v,loading:m,className:"chakra-image"},k))}));c.Ts&&(f.displayName="Image")},66046:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[...project]",function(){return n(82394)}])},58506:function(r,e,n){"use strict";var t=n(85893),i=n(28093),a=n(23762),c=n(64115),o=n(38448),l=n(49444),s=n(48017),u=n(17649),d=n(26671);function f(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function h(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){f(r,e,n[e])}))}return r}var g={ul:a.QI,li:a.HC,p:c.x,Center:o.M,gray:function(r){var e=r.children;r.className;return(0,t.jsx)(c.x,{color:"GrayText",children:e})},code:function(r){var e=r.children,n=r.className;return(0,t.jsx)(u.Z,{style:d.VA,customStyle:{backgroundColor:"none",borderRadius:4,fontSize:13,marginBottom:"1em",marginTop:"1em",overflowX:"auto",WebkitOverflowScrolling:"touch"},language:null===n||void 0===n?void 0:n.replace(/language-/g,""),children:e})},a:function(r){var e=r.children,n=r.href;return(0,t.jsx)(l.r,{color:"green.300",href:n,children:(0,t.jsx)(c.x,{as:"u",children:e})})},h4:function(r){var e=r.children;return(0,t.jsx)(c.x,{variant:"h4",fontSize:"large",children:e})},h3:function(r){var e=r.children;return(0,t.jsx)(c.x,{variant:"h3",fontSize:"x-large",children:e})},h2:function(r){var e=r.children;return(0,t.jsx)(c.x,{variant:"h2",fontSize:"2xl",children:e})},h1:function(r){var e=r.children;return(0,t.jsx)(c.x,{variant:"h1",fontSize:"3xl",children:e})}};e.Z=function(r){var e=r.content;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.xu,{children:(0,t.jsx)(i.R,h({},e,{components:g}))})})}},82394:function(r,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u},default:function(){return d}});var t=n(85893),i=n(385),a=n(48017),c=n(45977),o=n(98322),l=n(64115),s=n(58506),u=!0;function d(r){r.title,r.readme;var e=r.name,n=r.content,u=r.image,d=r.description,f=r.published;return(0,t.jsx)(i.Z,{title:"".concat(e," | Tricked.pro"),description:d,children:(0,t.jsx)(a.xu,{variant:"elevation",shadow:"md",children:(0,t.jsxs)("main",{children:[(0,t.jsx)(c.z,{as:"a",href:"/projects",children:"Back?"}),(0,t.jsx)(o.E,{src:"/images/".concat(u),width:"10rem",height:"auto",alt:""}),(0,t.jsxs)("article",{children:[f&&(0,t.jsxs)(l.x,{color:"GrayText",children:["Published ",f]}),(0,t.jsxs)(a.xu,{margin:"auto",justifyContent:"center",marginRight:"auto",marginLeft:"auto",maxW:"60rem",className:"posts",children:[(0,t.jsx)(l.x,{fontSize:"xl",children:e}),(0,t.jsx)(s.Z,{content:n})]})]})]})})})}}},function(r){r.O(0,[726,951,385,774,888,179],(function(){return e=66046,r(r.s=e);var e}));var e=r.O();_N_E=e}]);