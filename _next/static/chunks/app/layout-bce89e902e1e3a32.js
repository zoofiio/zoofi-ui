(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{23423:function(e,t,a){Promise.resolve().then(a.t.bind(a,8367,23)),Promise.resolve().then(a.bind(a,79946)),Promise.resolve().then(a.t.bind(a,9487,23)),Promise.resolve().then(a.t.bind(a,29180,23)),Promise.resolve().then(a.t.bind(a,62888,23)),Promise.resolve().then(a.t.bind(a,82160,23)),Promise.resolve().then(a.t.bind(a,80265,23))},79946:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return PageLayout}});var s=a(31113),n=a(73216),l=a(22139),r=a(26504),i=a(19757),o=a(59175),c=a(15506),d=a(3168),m=a(3367),h=a(33501),x=a(41690),u=a.n(x),f=a(42487),p=a.n(f),g=a(69708),v=a(64103),j=a(44945),b=a(36847),w=a(44726),k=a(41440),N=a(35664),y=a(12045),C=a(44769),S=a(26758),P=a(33621);let T={[n.BG.id]:"Berachain Bartio"},z={[n.BG.id]:"".concat(S.G,"/berachain.svg")};function Header(){let e=(0,g.usePathname)(),{width:t}=(0,w.Z)(window.innerWidth,window.innerHeight),a="/"!==e&&t<1024,x=(0,o.p)(),{openChainModal:f}=(0,m.iC)(),S=function(){var e,t;let a=(0,o.p)(),{address:s}=(0,k.m)(),{data:n}=(0,c.D2)({abi:r.WW,address:null===(t=i.iK[a])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.vault,functionName:"owner",query:{enabled:!!s}});return!!s&&s==n}(),D=function(){var e,t;let a=(0,o.p)(),{address:s}=(0,k.m)(),{data:n}=(0,c.D2)({abi:r.Og,address:null===(t=i.iK[a])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.assetTokenFeed,functionName:"isTester",args:[s],query:{enabled:!!s}});return!!n}(),L=(0,v.useMemo)(()=>{let e=[{href:"/l-vaults",label:"L-Vaults",icon:j.QZG},{href:"/b-vaults",label:"B-Vaults",icon:j.QZG}];return S&&e.push({href:"/admin",label:"Admin",icon:j.C5v}),D&&e.push({href:"/tester",label:"Tester",icon:j.rv8}),e},[S,D]),{chain:_,address:I}=(0,k.m)(),Z=!_||-1==n.Af.findIndex(e=>e.id==_.id)||n.Af.length<=1,E=(0,v.useMemo)(()=>[{name:"doc",url:(0,l.xb)(),icon:b.K99},{name:"Twitter",url:l.v,icon:b.J6q},{name:"Discord",url:l.Hj,icon:b.HpO}],[C.Kh.value]);return(0,s.jsx)("div",{className:"h-[72px] fixed w-full flex bg-slate-50/30 backdrop-blur-lg dark:text-slate-50 dark:bg-slate-900/30 z-30",children:(0,s.jsxs)("header",{className:"h-[72px] w-full max-w-[1300px] inset-0 mx-auto flex items-center justify-between px-4   z-30 ml-[calc(100vw - 100%)] ",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(p(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:(0,s.jsx)(P.c,{symbol:"logo-alt",size:90})}),(0,s.jsxs)(d.fC,{children:[(0,s.jsxs)(d.xz,{className:(0,h.Z)("flex text-slate-500 dark:text-slate-50 font-medium items-center capitalize text-sm",{hidden:!a}),children:[e.split("/")[1],(0,s.jsx)(b.YRR,{})]}),(0,s.jsx)(d.Uv,{children:(0,s.jsx)(d.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md dark:bg-gray-800 dark:border-gray-700",children:L.map(e=>{let{href:t,label:a,icon:n}=e;return(0,s.jsx)(d.ck,{children:(0,s.jsxs)(p(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30",href:t,children:[(0,s.jsx)(n,{}),a]})},a)})})})]})]}),"/"!==e?(0,s.jsx)("div",{className:"hidden lg:flex flex-1 px-5 items-center gap-10",children:L.map(t=>{let{href:a,label:n,icon:l}=t;return(0,s.jsxs)(p(),{className:(0,h.Z)("text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1",e===a?"text-slate-700 dark:text-slate-50":"text-slate-500 dark:text-slate-50/50"),href:a,children:[(0,s.jsx)(l,{}),n]},a)})}):null,(0,s.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,s.jsx)(y.h,{}),(0,s.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:E.map(e=>{let{url:t,icon:a,name:n}=e;return(0,s.jsx)(p(),{href:t,className:"text-slate-300 hover:text-primary",children:(0,s.jsx)(a,{})},n)})}),Z&&"/"!==e&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 dark:text-slate-50 font-medium rounded-full cursor-pointer",onClick:()=>f&&f(),children:[(0,s.jsx)(u(),{width:24,height:24,src:z[x],alt:""}),(0,s.jsx)("div",{className:"hidden sm:block",children:T[x]})]}),"/"!==e&&(0,s.jsx)(N.Z,{})]})]})})}var D=a(47259),L=a(15680),_=a(4410),I=a(4356),Z=a(87142),E=a(74882),M=a(38422),B=a(14266),H=a(178),W=a(78246),U=a(62753),V=a(51186),q=a(75600),A=a(28076),F=a(14049),G=a(45248),K=a(99946),O=a(88239),Q=a(85895),R=a(8912),Y=a(7915),J=a(26276),X=a(9793),$=a(32417),ee=a(83037);let et={[V.F.id]:"eth_sepolia"},ea=new Q.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new R.h}),es={batchSize:500,wait:300},en=new $.S;function Providers(e){let{children:t}=e,[a,l]=v.useState();v.useEffect(()=>{let e=(0,q.o)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=(0,m.a3)([{groupName:"Recommended",wallets:[I.U,Z.P,E.D,M.c,B.X,H.J,W.b,U.D]}],{appName:"ZooFi",projectId:"abf1f323cd9ff9f6a27167188d993168"});l((0,A._)({connectors:t,storage:e,chains:n.Af,client:e=>{let{chain:t}=e;return(0,J.e)({chain:t,transport:(0,X.d)(et[t.id]?"https://rpc.ankr.com/".concat(et[t.id]):t.rpcUrls.default.http[0],{batch:es}),batch:{multicall:es}})}}))},[]);let r=(0,y.l)(e=>e.theme);return a?(0,s.jsx)(Y.e,{client:ea,children:(0,s.jsx)(F.F,{config:a,children:(0,s.jsx)(ee.aH,{client:en,children:(0,s.jsx)(K.QueryParamProvider,{adapter:G.Z,children:(0,s.jsx)(m.pj,{locale:"en-US",modalSize:"compact",theme:"dark"===r?(0,L.$)({accentColor:"green"}):(0,_.W)(),children:(0,s.jsx)(O.A,{children:t})})})})})}):null}function PageLayout(e){let{children:t}=e;return(0,C.Vi)(),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Providers,{children:[(0,s.jsx)(Header,{}),t]}),(0,s.jsx)(D.x,{position:"top-right",offset:70})]})}},35664:function(e,t,a){"use strict";a.d(t,{Z:function(){return ConnectBtn}});var s=a(31113),n=a(3367),l=a(44726),r=a(41440);function ConnectBtn(){let e=(0,l.Z)(1024),{isConnected:t}=(0,r.m)(),a=(0,n.We)();return t?(0,s.jsx)(n.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1}):(0,s.jsx)("button",{className:"btn-primary mt-0 w-fit",onClick:()=>{var e;return null===(e=a.openConnectModal)||void 0===e?void 0:e.call(a)},children:(0,s.jsx)("span",{className:"text-white font-medium text-sm px-5",children:"Connect Wallet"})})}},2987:function(e,t,a){"use strict";a.d(t,{o:function(){return SimpleDialog}});var s=a(31113),n=a(26361),l=a(15166),r=a(72703);function SimpleDialog(e){let{trigger:t,children:a,className:i,style:o,closeClassName:c,disableOutClose:d,disableClose:m,triggerProps:h,...x}=e;return(0,s.jsxs)(l.fC,{...x,children:[(0,s.jsx)(l.xz,{...h||{},children:t}),(0,s.jsxs)(l.h_,{children:[(0,s.jsx)(l.aV,{className:"fixed top-0 left-0 inset-0 z-50 bg-black/60"}),(0,s.jsxs)(l.VY,{onEscapeKeyDown:e=>{m&&e.stopPropagation(),m&&e.preventDefault()},onInteractOutside:e=>{console.info("e:",e),d&&e.stopPropagation(),d&&e.preventDefault()},style:o,className:(0,n.cn)("fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#333333] rounded-2xl overflow-hidden shadow-2xl z-50",i),children:[a,(0,s.jsx)(l.x8,{disabled:m,className:(0,n.cn)("absolute right-4 top-4 cursor-point text-xl",c),children:(0,s.jsx)(r.abH,{})})]})]})]})}},12045:function(e,t,a){"use strict";a.d(t,{h:function(){return ThemeMode},l:function(){return c}});var s=a(31113),n=a(26361),l=a(64103),r=a(55746),i=a(48338),o=a(2987);let getThemeState=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},c=(0,i.Ue)(e=>({...getThemeState(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))})),d={light:(0,s.jsx)(r.EWX,{}),dark:(0,s.jsx)(r.Dq,{}),system:(0,s.jsx)(r.pUp,{})};function ThemeMode(){let e=c(),onChangeTheme=()=>{let{theme:t,themeMode:a}=getThemeState();e.setTheme(t),e.setThemeMode(a)};(0,l.useEffect)(()=>{onChangeTheme()},[]);let onClick=e=>{"System"==e?localStorage.removeItem("theme"):localStorage.theme=e.toLocaleLowerCase(),onChangeTheme()};return(0,s.jsx)(o.o,{className:"max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white",trigger:(0,s.jsx)("div",{className:"text-xl",children:d[e.theme]}),children:["Light","Dark","System"].map((t,a)=>(0,s.jsxs)("div",{className:(0,n.cn)("flex px-5 items-center py-2 gap-3 cursor-pointer",{"bg-stone-100 dark:bg-zinc-700":t.toLowerCase()==e.themeMode}),onClick:()=>onClick(t),children:[(0,s.jsx)("div",{className:"text-2xl",children:d[t.toLowerCase()]}),(0,s.jsx)("span",{className:"",children:t})]},"theme_mode_"+t))})}},8367:function(){}},function(e){e.O(0,[7495,4881,7622,2466,6121,7073,4431,283,8410,8193,9562,9738,1690,1938,1578,8888,7093,604,1744],function(){return e(e.s=23423)}),_N_E=e.O()}]);