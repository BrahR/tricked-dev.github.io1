if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>i(e,c),o={module:{uri:c},exports:r,require:d};s[c]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-dI0Y5okWMiaHCicNXdOu3.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/135-952e26cc678bdd43.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/135-952e26cc678bdd43.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/385-bc93b89b70faa138.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/385-bc93b89b70faa138.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/393-1424929865070d57.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/393-1424929865070d57.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/47-366b43f63f10b70b.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/472-87e65cdb0de355f5.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/472-87e65cdb0de355f5.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/691-0f5785a4367e4f59.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/691-0f5785a4367e4f59.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/742-be88f05ba636872d.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/742-be88f05ba636872d.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/framework-8dbce5f194cf5c28.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/framework-8dbce5f194cf5c28.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/main-8787d60cf63d4080.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/main-8787d60cf63d4080.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D-d8380e9ffe66d08b.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D-d8380e9ffe66d08b.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/aethor-a395da4259f5f519.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/aethor-a395da4259f5f519.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/aethor/%5Bcommands%5D-21a9f4bd5834916b.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/aethor/%5Bcommands%5D-21a9f4bd5834916b.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/donating-e6b2a0b222d0d4be.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/donating-e6b2a0b222d0d4be.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/posts-7a28fba8986ef898.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/posts-7a28fba8986ef898.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/posts/%5B...post%5D-8477ed8aec34a79d.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/posts/%5B...post%5D-8477ed8aec34a79d.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/projects-5b78f562efb437cd.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/projects-5b78f562efb437cd.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/projects/%5B...project%5D-8fbcf27d5784e8aa.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/projects/%5B...project%5D-8fbcf27d5784e8aa.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/services-123aed4bf2dc0471.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/%5Blang%5D/services-123aed4bf2dc0471.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/404-51e1d2265dad096e.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/404-51e1d2265dad096e.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_app-f48fe45069a2ea8e.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_app-f48fe45069a2ea8e.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_error-8f217dcfc432571b.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_error-8f217dcfc432571b.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_offline-cec1e5e826d2d05f.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/_offline-cec1e5e826d2d05f.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/index-3df21c8c805bad91.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/pages/index-3df21c8c805bad91.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/webpack-acce82745379e4a0.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/chunks/webpack-acce82745379e4a0.js.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/css/ec7b56b06f19d138.css",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/css/ec7b56b06f19d138.css.map",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/dI0Y5okWMiaHCicNXdOu3/_buildManifest.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/dI0Y5okWMiaHCicNXdOu3/_middlewareManifest.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_next/static/dI0Y5okWMiaHCicNXdOu3/_ssgManifest.js",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/_offline",revision:"dI0Y5okWMiaHCicNXdOu3"},{url:"/aethor.ico",revision:"b9a8f527d7d0c4657403f10549a10309"},{url:"/aethor.png",revision:"8e75687888b501ea8de7d1251e32e896"},{url:"/assets/icons/android-icon-144x144.png",revision:"063676d9db98c6f5458df18023563972"},{url:"/assets/icons/android-icon-192x192.png",revision:"535f73bca0411bee1780be38a4a8f22f"},{url:"/assets/icons/android-icon-36x36.png",revision:"72dfc35efb4a00bb9d79990bffd3deb3"},{url:"/assets/icons/android-icon-48x48.png",revision:"ed98099bbcb1710c301c31ac0f7f09cc"},{url:"/assets/icons/android-icon-72x72.png",revision:"9497a1042bdb7b4e88db5f98c0c19f36"},{url:"/assets/icons/android-icon-96x96.png",revision:"58aad480d44f02783ca7787118ec7470"},{url:"/assets/icons/apple-icon-114x114.png",revision:"c6a43869ea7c39df827794deb6b04860"},{url:"/assets/icons/apple-icon-120x120.png",revision:"db08dbfa98c026854a063052940e725f"},{url:"/assets/icons/apple-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/apple-icon-152x152.png",revision:"0467ff6306e5e42891fca6307b6e8d19"},{url:"/assets/icons/apple-icon-180x180.png",revision:"8ca1be4f0f0e353fd6bfb26ea2b31a04"},{url:"/assets/icons/apple-icon-57x57.png",revision:"5a57d64d15602f17d8c2fa428b3efca1"},{url:"/assets/icons/apple-icon-60x60.png",revision:"8f8b66f22609b62ec20cbdfb3a8c4add"},{url:"/assets/icons/apple-icon-72x72.png",revision:"3560222ae9ef7507f3d27bbc621393c4"},{url:"/assets/icons/apple-icon-76x76.png",revision:"699d89970ff1f6f6b20b319762cb2fdc"},{url:"/assets/icons/apple-icon-precomposed.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/apple-icon.png",revision:"d1f4dff97538e546f523c97721d4edf1"},{url:"/assets/icons/favicon-16x16.png",revision:"0ae30ed68168a850a74be667bf7de953"},{url:"/assets/icons/favicon-32x32.png",revision:"9f094b68cd7a1cbf149789ce348307c9"},{url:"/assets/icons/favicon-96x96.png",revision:"d03678d36bcdc8982bff7b963c73dd22"},{url:"/assets/icons/favicon.ico",revision:"1ed12b0bf3222567eff48a5bbee36734"},{url:"/assets/icons/icon-128x128.png",revision:"86b1dd0df6780adbf59c69c611f4939e"},{url:"/assets/icons/icon-144x144.png",revision:"851b0ad40a7315868319802cdbe0f13d"},{url:"/assets/icons/icon-152x152.png",revision:"22b2e2c49ebf112f2e0de84fd63a8cfb"},{url:"/assets/icons/icon-192x192.png",revision:"2921593d74dc922409df1380f9afed5e"},{url:"/assets/icons/icon-384x384.png",revision:"684f42c80f77b11aff161c71c28ea9bb"},{url:"/assets/icons/icon-48x48.png",revision:"e2d2549d67623bc9dca4a9e8a81f7ec8"},{url:"/assets/icons/icon-512x512.png",revision:"25289939f1204b8b3c2e910bbd838e66"},{url:"/assets/icons/icon-72x72.png",revision:"6f5f88940358c4a3b6961ba3e8b1e1f1"},{url:"/assets/icons/icon-96x96.png",revision:"8b86c21df4f5d3f0c7e7c9694802ad95"},{url:"/assets/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/assets/icons/ms-icon-144x144.png",revision:"da0492ba1d267c7efbcdcc5d200eeea2"},{url:"/assets/icons/ms-icon-150x150.png",revision:"0f8062a1195c9224348510346dca883c"},{url:"/assets/icons/ms-icon-310x310.png",revision:"1089bcd789b991127212d7eeda5ad229"},{url:"/assets/icons/ms-icon-70x70.png",revision:"f2a03adf6910f5834f2a0ebb3698206c"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/cards/404.png",revision:"53d41e12335bdc77cc234bca79180066"},{url:"/cards/[lang].png",revision:"f1133668097fa2dfb2a1362ad2db8351"},{url:"/cards/[lang]_aethor.png",revision:"1504cf4d776b096059491b974a1eb561"},{url:"/cards/[lang]_aethor_[commands].png",revision:"2d5332a1f406e95c52adf2a45ca68980"},{url:"/cards/[lang]_aethor_invite.png",revision:"5ab3b94c2f3cecca50e3aae58ad63990"},{url:"/cards/[lang]_aethor_support.png",revision:"b4eab0b5ce80413fde07ae71df2cd78b"},{url:"/cards/[lang]_bridger.png",revision:"6b7c4d92b0b0f3920d666a81482b2498"},{url:"/cards/[lang]_diplo.png",revision:"a2e0db69053b3ca6e519a7a303de6d01"},{url:"/cards/[lang]_diplo_[...doc].png",revision:"9f052e3d15042fa25589747407edde95"},{url:"/cards/[lang]_donating.png",revision:"e5eabbd2db59f250f1e709521d64c611"},{url:"/cards/[lang]_posts.png",revision:"538144fa8ced34286d47bce58d816737"},{url:"/cards/[lang]_posts_[...post].png",revision:"4d8eeb4848853f26563348800e606f52"},{url:"/cards/[lang]_projects.png",revision:"46a2ba8381cf4708f90bb848f11eee92"},{url:"/cards/[lang]_projects_[...project].png",revision:"66ec14e2cedde5cfe2616ed21d3dcf5d"},{url:"/cards/[lang]_services.png",revision:"ad2009c6ded1023a2bb5a6fcd578c487"},{url:"/cards/_app.png",revision:"68943b57578d160acbcb6882f999e3f0"},{url:"/cards/_offline.png",revision:"af00590f3424c47e749855e324988021"},{url:"/cards/default.png",revision:"2ec37a80665a3f9662d746962eab7248"},{url:"/cards/index.png",revision:"3a6f966fe3ce47d5cac8ea96704d32f6"},{url:"/crypto/bitcoin-cash-bch-logo.png",revision:"86ef8464a0829ab6c38c0ba5acafaf95"},{url:"/crypto/ethereum-eth-logo.png",revision:"86b356aa4636232f3e200c65d2a8b6b4"},{url:"/crypto/monero-xmr-logo.png",revision:"1d270945574fe8543e0913b2b9f6ab1a"},{url:"/favicon.ico",revision:"be1926d71fe6a3b3912d950776d9b056"},{url:"/images/aethor.png",revision:"d5868860b84be2a0bc6ccf3523b32249"},{url:"/images/ascella.png",revision:"5531d8abb364ba1e32b2e20d51b72d3b"},{url:"/images/diplo.png",revision:"ec888c2808a47a9c359c859722bafb33"},{url:"/images/diplo_cover.png",revision:"69d030387537e55b9f56c391a62e6653"},{url:"/images/doomfetch.png",revision:"841de3cb26c8700be8e05cbaf86b9a38"},{url:"/images/linuxcommands.png",revision:"38c6a0d3d4b16e48709350add83f4a62"},{url:"/images/lowestbins.png",revision:"9f77beaaf9136d026e6c99e821abd837"},{url:"/images/malil.png",revision:"ed83342b2406a5c2a216b095cc7d8cc8"},{url:"/images/natico.png",revision:"976adb40dba0fead4905f6aae1f5b728"},{url:"/images/redditbot.png",revision:"01d9ee2be36bde58f9a6629576b5be88"},{url:"/images/scriptbot.png",revision:"6ccf5c0b4aaaa229d1e3cbf1f5aa2a44"},{url:"/images/soggaimages.png",revision:"141299ad09df8069ca2fc82563fd5679"},{url:"/images/texter.png",revision:"f01c7568d3b387f9e9e1887a25f21ffd"},{url:"/images/timages.png",revision:"e73f18ef657f6bdcb497c315aa8fc7c3"},{url:"/images/website.png",revision:"07ab1f5988a6efaa93f73ac233f01098"},{url:"/manifest.json",revision:"502de52fe576fdf6c6c5ee3679f926e9"},{url:"/robots.txt",revision:"cd1eb4b2ef627e46c744b2dc22b98c47"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
//# sourceMappingURL=sw.js.map
