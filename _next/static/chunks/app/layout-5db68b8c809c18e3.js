(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{79391:function(){},23423:function(e,t,n){Promise.resolve().then(n.t.bind(n,8367,23)),Promise.resolve().then(n.bind(n,79946)),Promise.resolve().then(n.t.bind(n,9487,23)),Promise.resolve().then(n.t.bind(n,29180,23)),Promise.resolve().then(n.t.bind(n,62888,23)),Promise.resolve().then(n.t.bind(n,82160,23)),Promise.resolve().then(n.t.bind(n,80265,23))},79946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PageLayout}});var r=n(31113),a=n(73216),s=n(22139),l=n(70258),i=n(19757),o=n(59175),u=n(15506),c=n(3168),d=n(3367),f=n(33501),m=n(41690),p=n.n(m),h=n(42487),x=n.n(h),v=n(69708),g=n(64103),b=n(44945),S=n(36847),w=n(44726),j=n(96670),y=n(35664),k=n(12045),P=n(44769),A=n(26758),L=n(95702);let N={[a.BG.id]:"Berachain Bartio"},T={[a.BG.id]:"".concat(A.G,"/berachain.svg")};function Header(){let e=(0,v.usePathname)(),{width:t}=(0,w.Z)(window.innerWidth,window.innerHeight),n="/"!==e&&t<1024,m=(0,o.p)(),{openChainModal:h}=(0,d.iC)(),A=function(){var e,t;let n=(0,o.p)(),{address:r}=(0,j.m)(),{data:a}=(0,u.D2)({abi:l.WW,address:null===(t=i.iK[n])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.vault,functionName:"owner",query:{enabled:!!r}});return!!r&&r==a}(),U=function(){var e,t;let n=(0,o.p)(),{address:r}=(0,j.m)(),{data:a}=(0,u.D2)({abi:l.Og,address:null===(t=i.iK[n])||void 0===t?void 0:null===(e=t[1])||void 0===e?void 0:e.assetTokenFeed,functionName:"isTester",args:[r],query:{enabled:!!r}});return!!a}(),V=(0,g.useMemo)(()=>{let e=[{href:"/l-vaults",label:"L-Vaults",icon:b.QZG},{href:"/b-vaults",label:"B-Vaults",icon:b.QZG},{href:"/portfolio",label:"Portfolio",icon:b.J4},{href:"/dashboard",label:"Dashboard",icon:b.FL4}];return A&&e.push({href:"/admin",label:"Admin",icon:b.C5v}),(U||A)&&e.push({href:"/tester",label:"Tester",icon:b.rv8}),e},[A,U]),{chain:C,address:R}=(0,j.m)(),B=!C||-1==a.Af.findIndex(e=>e.id==C.id)||a.Af.length<=1,D=(0,g.useMemo)(()=>[{name:"doc",url:(0,s.xb)(),icon:S.K99},{name:"Twitter",url:s.v,icon:S.J6q},{name:"Discord",url:s.Hj,icon:S.HpO}],[P.Kh.value]);return(0,r.jsx)("div",{className:"h-[72px] fixed w-full flex bg-slate-50/30 backdrop-blur-lg dark:text-slate-50 dark:bg-slate-900/30 z-30",children:(0,r.jsxs)("header",{className:"h-[72px] w-full max-w-[1300px] inset-0 mx-auto flex items-center justify-between px-4   z-30 ml-[calc(100vw - 100%)] ",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(x(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:(0,r.jsx)(L.c,{symbol:"logo-alt",size:90})}),(0,r.jsxs)(c.fC,{children:[(0,r.jsxs)(c.xz,{className:(0,f.Z)("flex text-slate-500 dark:text-slate-50 font-medium items-center capitalize text-sm whitespace-nowrap",{hidden:!n}),children:[e.split("/")[1],(0,r.jsx)(S.YRR,{})]}),(0,r.jsx)(c.Uv,{children:(0,r.jsx)(c.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-700",children:V.map(e=>{let{href:t,label:n,icon:a}=e;return(0,r.jsx)(c.ck,{children:(0,r.jsxs)(x(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30",href:t,children:[(0,r.jsx)(a,{}),n]})},n)})})})]})]}),"/"!==e?(0,r.jsx)("div",{className:"hidden lg:flex flex-1 px-5 items-center gap-10",children:V.map(t=>{let{href:n,label:a,icon:s}=t;return(0,r.jsxs)(x(),{className:(0,f.Z)("text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1",e===n?"text-slate-700 dark:text-slate-50":"text-slate-500 dark:text-slate-50/50"),href:n,children:[(0,r.jsx)(s,{}),a]},n)})}):null,(0,r.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,r.jsx)(k.h,{}),(0,r.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:D.map(e=>{let{url:t,icon:n,name:a}=e;return(0,r.jsx)(x(),{href:t,className:"text-slate-300 hover:text-primary",children:(0,r.jsx)(n,{})},a)})}),B&&"/"!==e&&(0,r.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 dark:text-slate-50 font-medium rounded-full cursor-pointer",onClick:()=>h&&h(),children:[(0,r.jsx)(p(),{width:24,height:24,src:T[m],alt:""}),(0,r.jsx)("div",{className:"hidden sm:block",children:N[m]})]}),"/"!==e&&(0,r.jsx)(y.Z,{})]})]})})}var U=n(23647),V=n(47259),C=n(15680),R=n(4410),B=n(4356),D=n(87142),M=n(74882),O=n(38422),_=n(14266),q=n(178),E=n(78246),Y=n(62753),F=n(8887),I=n(45066),W=n(11522),H=n(45248),K=n(99946),Z=n(52671),z=n(85895),G=n(8912),$=n(7915),J=n(32417),X=n(83037),Q=n(26276),ee=n(9793);BigInt.prototype.toJSON=function(){return this.toString()};let et=new z.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new G.h}),en=new J.S({defaultOptions:{queries:{retry:3}}});function Providers(e){let{children:t}=e,[n,s]=g.useState();g.useEffect(()=>{let e=(0,F.o)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=(0,d.a3)([{groupName:"Recommended",wallets:[B.U,D.P,M.D,O.c,_.X,q.J,E.b,Y.D]}],{appName:"ZooFi",projectId:"abf1f323cd9ff9f6a27167188d993168"});s((0,I._)({connectors:t,storage:e,chains:a.Af,client:e=>{let{chain:t}=e;return(0,Q.e)({chain:t,transport:(0,ee.d)(void 0,{batch:a.Xp}),batch:{multicall:a.y1}})}}))},[]);let l=(0,k.l)(e=>e.theme);return n?(0,r.jsx)($.e,{client:et,children:(0,r.jsx)(W.F,{config:n,children:(0,r.jsx)(X.aH,{client:en,children:(0,r.jsx)(K.QueryParamProvider,{adapter:H.Z,children:(0,r.jsx)(d.pj,{locale:"en-US",modalSize:"compact",theme:"dark"===l?(0,C.$)({accentColor:"green"}):(0,R.W)(),children:(0,r.jsx)(Z.A,{children:t})})})})})}):null}var er=n(26361);function PageLoading(){let e=(0,U.N)();return(0,r.jsx)("div",{className:(0,er.cn)("top-loader fixed z-10 top-0 left-0",e?"visible":"invisible")})}function PageLayout(e){let{children:t}=e;return(0,P.Vi)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Providers,{children:[(0,r.jsx)(Header,{}),t]}),(0,r.jsx)(V.x,{position:"top-right",offset:70}),(0,r.jsx)(PageLoading,{})]})}},35664:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var r=n(31113),a=n(3367),s=n(44726),l=n(96670);function ConnectBtn(){let e=(0,s.Z)(1024),{isConnected:t}=(0,l.m)(),n=(0,a.We)();return t?(0,r.jsx)(a.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1}):(0,r.jsx)("button",{className:"btn-primary mt-0 w-fit",onClick:()=>{var e;return null===(e=n.openConnectModal)||void 0===e?void 0:e.call(n)},children:(0,r.jsx)("span",{className:"font-medium text-sm px-5",children:"Connect Wallet"})})}},88439:function(e,t,n){"use strict";n.d(t,{b:function(){return useMemoOfChainId}});var r=n(64103),a=n(59175);function useMemoOfChainId(e){let t=(0,a.p)(),n=(0,r.useRef)({});return(0,r.useMemo)(()=>(n.current[t]||(n.current[t]=e()),n.current[t]),[t])}},45438:function(e,t,n){"use strict";n.d(t,{i:function(){return c},p:function(){return useUpdatePtypoolApy}});var r=n(19757),a=n(22139),s=n(3106),l=n(64103),i=n(33737),o=n(93108),u=n(59175);let c=(0,o.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e){let t=(0,u.p)(),n=r.iK[t],o=(0,s.R)(e=>e.sliceLVaultsStore.lvaults);(0,l.useEffect)(()=>{console.info("updatePtypoolApy"),n.forEach(n=>{let s=o[n.vault];if(n.ptyPoolAboveAddress&&s&&s.sellPoolTotalStaking&&c.getState().update({[n.ptyPoolAboveAddress]:{staking:(0,i.v)("0.025",10),matching:0n}}),n.ptyPoolBelowAddress&&s&&s.buyPoolTotalStaking&&!s.isStable){let l=s&&s.sellPoolTotalStaking*e[r.O1[t]],i=l>0n&&s.settingsDecimals>0n?s.M_ETHx*s.Y*e[n.xTokenAddress]*a.Pq/2n/l/s.settingsDecimals**10n:0n;c.getState().update({[n.ptyPoolBelowAddress]:{staking:i*10n**10n/a.Pq,matching:0n}})}})},[n,o,e,t])}},15506:function(e,t,n){"use strict";n.d(t,{D2:function(){return useWandContractRead},hp:function(){return o},uX:function(){return useWandContractReads}}),n(78403);var r=n(83978),a=n.n(r);n(64103);var s=n(30308),l=n(59307),i=n(93108);let o=(0,i.Ue)(e=>({time:a().now(),update:()=>{e({time:a().now()})}}));function useWandContractRead(e){let{time:t}=o();return(0,s.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=o();return(0,l.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},52671:function(e,t,n){"use strict";n.d(t,{g:function(){return b},A:function(){return FetcherProvider}});var r=n(31113),a=n(19757),s=n(22139),l=n(59175),i=n(64103),o=n(25233),u=n(87958),c=n(41340),d=n(73216),f=n(88439),m=n(45438),p=n(26361),h=n(64370),x=n(3106),v=n(18358),g=n(39577);let b=(0,i.createContext)({prices:(0,p.Yb)({},0n),usbApr:{apr:0n,aprDecimals:10}}),FetcherProvider=e=>{let{children:t}=e;(0,v.d6)();let n=(0,l.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.m)({chainId:e});i.useMemo(()=>(t&&(d.ON.provider=function(e){var t,n;let{chain:r,transport:a}=e,s={chainId:r.id,name:r.name,ensAddress:null===(n=r.contracts)||void 0===n?void 0:null===(t=n.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===a.type?new u.H(a.transports.map(e=>{let{value:t}=e;return new c.r(null==t?void 0:t.url,s)})):new c.r(a.url,s)}(t)),d.ON.provider),[t])}();let S=(0,f.b)(()=>(0,p.Yb)({[a.O1[n]]:s.Pq},0n));(0,g.$$)(S);let w=(0,g.UM)();return(0,m.p)(S),(0,h.a)({queryKey:["updateDefTokenList"],staleTime:36e5,queryFn:async()=>(await x.w.getState().sliceTokenStore.updateDefTokenList(),!0)}),(0,r.jsx)(b.Provider,{value:{prices:S,usbApr:w},children:t})}},39577:function(e,t,n){"use strict";n.d(t,{$$:function(){return useSetLVaultPrices},UM:function(){return useUSBApr},aS:function(){return useValutsLeverageRatio},hC:function(){return useLVault},hY:function(){return useUserLVault},pK:function(){return d},so:function(){return useUpLVaultOnUserAction},z6:function(){return useVaultLeverageRatio}});var r=n(19757),a=n(22139),s=n(59175),l=n(88439),i=n(26361),o=n(3106),u=n(96670),c=n(73216);let d=(0,i.Yb)({vaultMode:0,discountEnable:!1},0n),f=(0,i.Yb)({},0n);function useLVault(e){return(0,o.R)(t=>t.sliceLVaultsStore.lvaults[e]||d)}function useUserLVault(e){return(0,o.R)(t=>t.sliceLVaultsStore.user[e]||f)}function useVaultLeverageRatio(e){let t=useLVault(e.vault),n=(0,i.pF)(t.aar,t.AARDecimals);return Math.max(0,1+1/(n-1))}function useValutsLeverageRatio(){let e=(0,s.p)(),t=r.iK[e],n=(0,l.b)(()=>(0,i.Yb)({},0)),a=(0,o.R)(e=>e.sliceLVaultsStore.lvaults);return t.forEach(e=>{let t=a[e.vault],r=t?(0,i.pF)(t.aar,t.AARDecimals):0;n[e.vault]=Math.max(0,1+1/(r-1))}),n}function useSetLVaultPrices(e){let t=(0,o.R)(e=>e.sliceLVaultsStore.lvaults),n=(0,o.R)(e=>e.sliceTokenStore.totalSupply),l=(0,s.p)();r.iK[l].forEach(s=>{let i=t[s.vault]||d,o=i.assetBalance,u=i.latestPrice,c=i.usbTotalSupply,f=n[s.xTokenAddress]||0n,m=f>0n&&o>0n&&u>0n&&c>0n&&o*u>c*a.Pq?(o*u-c*a.Pq)/f:0n;e[s.xTokenAddress]=m,e[s.assetTokenAddress]=u,f>0n&&o>0n&&u>0n&&c>0n&&o*u<c*a.Pq&&(e[r.O1[l]]=o*u/c)})}function useUSBApr(){let e=(0,s.p)(),t=(0,o.R)(e=>e.sliceLVaultsStore.lvaults),n=0,a=0n,l=0n;return r.iK[e].forEach(e=>{let r=t[e.vault]||d;r.isStable?(a+=r.M_USB_USDC*r.Y*r.aar/10n**r.AARDecimals,l+=r.M_USB_USDC,r.M_USB_USDC>0n&&r.Y>0n&&n++):(a+=r.M_USB_ETH*r.Y,l+=r.M_USB_ETH,r.M_USB_ETH>0n&&r.Y>0n&&n++)}),{apr:l>0n?a/l:0n,aprDecimals:10}}function useUpLVaultOnUserAction(e){let{address:t}=(0,u.m)();return()=>{(0,i.XD)(async()=>{if(!t)return;let n=o.w.getState().sliceLVaultsStore,a=[e.assetTokenAddress,e.xTokenAddress,r.O1[(0,c.BV)()]];await Promise.all([n.updateLVaults([e]),n.updateUserLVault(e,t),o.w.getState().sliceTokenStore.updateTokensBalance(a,t),o.w.getState().sliceTokenStore.updateTokenTotalSupply(a)])},3,1e3).catch(console.error)}}},8367:function(){}},function(e){e.O(0,[4881,7495,7622,6121,2466,7073,4261,4770,8410,652,3204,5116,5790,8122,2487,9239,1037,5974,7093,604,1744],function(){return e(e.s=23423)}),_N_E=e.O()}]);