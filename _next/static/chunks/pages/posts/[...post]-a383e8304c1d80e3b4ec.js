(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{3905:function(e,t,r){"use strict";r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return f},mdx:function(){return j},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,c({},t,{components:r}))}},p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function j(e,t){var r=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"===typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8093:function(e,t,r){"use strict";var n=r(7294),o=r(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=c(n),s=i(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:r={},lazy:o}){const[c,i]=n.useState(!o||"undefined"===typeof window);n.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{i(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=n.useMemo((()=>{const r=Object.assign({mdx:s.mdx,React:a.default},t),n=Object.keys(r),o=Object.values(r),c=Reflect.construct(Function,n.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return a.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const u=a.default.createElement(s.MDXProvider,{components:r},a.default.createElement(l,null));return o?a.default.createElement("div",null,u):u}},7393:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(2809),o=r(219),c=r(9008),i=r(1163),a=r(7294),s=r(980),l=r(9050),u=r(8017),p=r(3850),f=r(4096),d=r(8420),m=r(6034),j=r(4115),y=r(8101),h=r(5063),b=r(9444),g=r(5893),x=["children","href","currentPath"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.children,r=e.href,n=(e.currentPath,(0,o.Z)(e,x));return(0,g.jsx)(h.default,{href:r,passHref:!0,children:(0,g.jsx)(b.r,v(v({bg:"gray.700"===r,_hover:{textDecoration:"none",bg:"gray.700"}},n),{},{children:t}))})},P=r(8931),E=r(1475),k=r(6755),T=r(9950),_=[{name:"Home",route:"/"},{name:"Projects",route:"/#projects"},{name:"Posts",route:"/#posts"}],D=function(){var e=(0,l.q)(),t=e.isOpen,r=e.onOpen,n=e.onClose,o=(0,s.useColorMode)(),c=o.colorMode,i=o.toggleColorMode,a=(0,g.jsx)(g.Fragment,{children:_.map((function(e){return(0,g.jsx)(w,{href:e.route,p:2,rounded:"md",children:e.name},e.name)}))});return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(u.xu,{py:5,borderTop:"2px",borderTopColor:"green.500",children:(0,g.jsxs)(p.W,{maxW:"container.lg",children:[(0,g.jsxs)(f.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,g.jsx)(d.h,{size:"md",icon:t?(0,g.jsx)(P.T,{}):(0,g.jsx)(E.U,{}),"aria-label":"Open Menu",display:{md:t?"inherit":"none"},onClick:t?n:r}),(0,g.jsx)(m.Ug,{spacing:8,alignItems:"center",children:(0,g.jsxs)(m.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[(0,g.jsx)(j.x,{children:(0,g.jsx)("b",{children:"Tricked.pro"})}),a]})}),(0,g.jsx)(f.k,{alignItems:"center",children:(0,g.jsx)(y.z,{"aria-label":"Switch Theme",onClick:i,children:"light"===c?(0,g.jsx)(k.k,{}):(0,g.jsx)(T.N,{})})})]}),t?(0,g.jsx)(u.xu,{pb:4,mt:3,children:(0,g.jsx)(m.Kq,{as:"nav",spacing:4,children:a})}):null]})})})};function S(){return(0,g.jsxs)("footer",{className:"flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8",children:[(0,g.jsx)("hr",{className:"w-full border-1 border-gray-200 dark:border-gray-800 mb-8"}),(0,g.jsx)("div",{className:"w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"})]})}var C=["children"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){var t=(0,a.useState)(!1),r=(t[0],t[1]);(0,a.useEffect)((function(){return r(!0)}),[]);var s=e.children,l=(0,o.Z)(e,C),u=(0,i.useRouter)(),p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({title:"Tricked",description:"Typescript/javscript developer",type:"website"},l);return(0,g.jsxs)("div",{children:[(0,g.jsxs)(c.default,{children:[(0,g.jsx)("title",{children:p.title}),(0,g.jsx)("meta",{name:"robots",content:"follow, index"}),(0,g.jsx)("meta",{content:p.description,name:"description"}),(0,g.jsx)("meta",{property:"og:url",content:"https://tricked.pro".concat(u.asPath)}),(0,g.jsx)("link",{rel:"canonical",href:"https://tricked.pro".concat(u.asPath)}),(0,g.jsx)("meta",{property:"og:type",content:p.type}),(0,g.jsx)("meta",{property:"og:site_name",content:"Tricked"}),(0,g.jsx)("meta",{property:"og:description",content:p.description}),(0,g.jsx)("meta",{property:"og:title",content:p.title}),(0,g.jsx)("meta",{property:"og:image",content:p.image}),(0,g.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,g.jsx)("meta",{name:"twitter:site",content:"@tricked"}),(0,g.jsx)("meta",{name:"twitter:title",content:p.title}),(0,g.jsx)("meta",{name:"twitter:description",content:p.description}),(0,g.jsx)("meta",{name:"twitter:image",content:p.image}),p.date&&(0,g.jsx)("meta",{property:"article:published_time",content:p.date})]}),(0,g.jsx)(D,{}),(0,g.jsxs)("main",{children:[s,(0,g.jsx)(S,{})]})]})}},7464:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return S},default:function(){return C}});var n=r(2809),o=r(9008),c=r(7393),i=r(58),a=r(63),s=r(2326),l=r(5284),u=r(9676),p=r(3105),f=r(3808),d=r(4255),m=r(7294);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var h=(0,a.G)(((e,t)=>{var r=(0,s.j)("List",e),n=(0,l.Lr)(e),{children:o,styleType:c="none",stylePosition:i,spacing:a}=n,f=y(n,["children","styleType","stylePosition","spacing"]),h=(0,d.W)(o),b=a?{"& > *:not(style) ~ *:not(style)":{mt:a}}:{};return m.createElement(u.Fo,{value:r},m.createElement(p.m$.ul,j({ref:t,listStyleType:c,listStylePosition:i,role:"list",__css:j({},r.container,b)},f),h))}));f.Ts&&(h.displayName="List");var b=(0,a.G)(((e,t)=>{var r=y(e,["as"]);return m.createElement(h,j({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));f.Ts&&(b.displayName="OrderedList");var g=(0,a.G)(((e,t)=>{var r=y(e,["as"]);return m.createElement(h,j({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));f.Ts&&(g.displayName="UnorderedList");var x=(0,a.G)(((e,t)=>{var r=(0,u.yK)();return m.createElement(p.m$.li,j({ref:t},e,{__css:r.item}))}));f.Ts&&(x.displayName="ListItem");var O=(0,a.G)(((e,t)=>{var r=(0,u.yK)();return m.createElement(i.J,j({ref:t,role:"presentation"},e,{__css:r.icon}))}));f.Ts&&(O.displayName="ListIcon");var v=r(9444),w=r(4115),P=r(8017),E=r(8093),k=r(5893);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={ul:g,li:x,a:function(e){var t=e.children,r=e.href;return console.log(t,r),(0,k.jsx)(v.r,{color:"green.300",href:r,children:(0,k.jsx)(w.x,{as:"u",children:t})})},h4:function(e){var t=e.children;return(0,k.jsx)(w.x,{variant:"h4",fontSize:"large",children:t})},h3:function(e){var t=e.children;return(0,k.jsx)(w.x,{variant:"h3",fontSize:"x-large",children:t})},h2:function(e){var t=e.children;return(0,k.jsx)(w.x,{variant:"h2",fontSize:"2xl",children:t})},h1:function(e){var t=e.children;return(0,k.jsx)(w.x,{variant:"h1",fontSize:"3xl",children:t})}},S=!0;function C(e){var t=e.title,r=e.content,n=e.description;return(0,k.jsx)(c.Z,{children:(0,k.jsxs)(P.xu,{variant:"elevation",shadow:"md",children:[(0,k.jsxs)(o.default,{children:[(0,k.jsxs)("title",{children:[t," | Tricked.pro"]}),(0,k.jsx)("meta",{name:"description",content:n})]}),(0,k.jsx)("main",{children:(0,k.jsxs)("article",{children:[(0,k.jsx)(P.xu,{margin:"auto",justifyContent:"center",marginRight:"auto",marginLeft:"auto",maxW:"60rem",className:"posts",children:(0,k.jsx)(E.R,_(_({},r),{},{components:D}))}),(0,k.jsx)("br",{})]})})]})})}},3834:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[...post]",function(){return r(7464)}])}},function(e){e.O(0,[936,774,888,179],(function(){return t=3834,e(e.s=t);var t}));var t=e.O();_N_E=t}]);