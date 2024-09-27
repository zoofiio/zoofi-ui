(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{16299:function(e,t,n){Promise.resolve().then(n.bind(n,71080))},71080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return TesterPage}});var r=n(31113),a=n(99548),s=n(44939),c=n(70258),o=n(19757),u=n(59175),i=n(15506),l=n(84944),d=n(33501),f=n(64103),p=n(45631),m=n(58409),h=n(33737);function TesterPage(){let e=(0,u.p)(),t=o.iK[e],[{value:n,feed:v},g]=(0,m.Z)({value:"",feed:t[0].assetTokenFeed}),x=(0,f.useMemo)(()=>t.map(e=>({label:e.assetTokenSymbol+e.version,value:e.assetTokenFeed})),[]),{data:b}=(0,i.D2)({abi:c.nq,address:v,functionName:"latestPrice"}),w=b||0n;return(0,r.jsx)(s.E,{children:(0,r.jsx)("div",{className:"w-full flex",children:(0,r.jsxs)("div",{className:"flex flex-col gap-1 w-full max-w-[840px] mx-auto px-5",children:[(0,r.jsx)(p.ZP,{defaultValue:x[0],options:x,onChange:e=>g({feed:null==e?void 0:e.value})}),(0,r.jsx)("input",{value:n.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g({value:t})},type:"number",className:(0,d.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,r.jsxs)("div",{children:["Price: ",(0,l.d)(w,2,8)]}),(0,r.jsx)(a.v,{tx:"Update",config:{abi:c.Og,address:v,functionName:"mockPrice",args:[(0,h.v)(n,8)]},onTxSuccess:()=>{g({value:""})},className:"btn-primary flex items-center justify-center gap-4"})]})})})}},99548:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var r=n(31113),a=n(19757),s=n(26361),c=n(78403),o=n(64103),u=n(47259),i=n(58714),l=n(96670),d=n(4408);let f={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:r,chainId:p}=(0,l.m)(),{data:m}=(0,d.p)(),[h,v]=(0,o.useState)(!1),g=(0,o.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[x,b]=(0,o.useState)(t&&f[t]||{}),updateAllownce=(e,n)=>{t&&(f[t]={...f[t]||{},[e]:n},b(t=>({...t,[e]:n})))};(0,o.useEffect)(()=>{r&&t&&p&&g.forEach(e=>{(0,c.B)().readContract({abi:i.Wo,address:e,functionName:"allowance",args:[r,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[g,p,r]);let[w,y]=(0,o.useState)(!1),N=(0,o.useMemo)(()=>g.filter(t=>(0,s.ok)(e,t)>0n&&(0,s.ok)(e,t)>(0,s.ok)(x,t)),[e,g,x]),approve=async()=>{if(0!=N.length&&t)try{y(!0),v(!1);for(let r=0;r<N.length;r++){let a=N[r],s=!1===n?e[a]:n,o=await (null==m?void 0:m.writeContract({abi:i.Wo,address:a,functionName:"approve",args:[t,s]}));o&&await (0,c.B)().waitForTransactionReceipt({hash:o}),updateAllownce(a,s)}u.A.success("Approve success"),y(!1),v(!0)}catch(e){u.A.error((0,s.az)(e)),y(!1),v(!1)}};return{approve,loading:w,shouldApprove:N.length>0,isSuccess:h}};var p=n(78354),m=n(88501),h=n(36762);function ApproveAndTx(e){let{className:t,txType:n="btn-primary",tx:a,busyShowTxet:s=!0,approves:c,spender:u,requestAmount:i,config:l,toast:d=!0,disabled:f,onTxSuccess:v,onApproveSuccess:g}=e,{write:x,isDisabled:b,isLoading:w}=(0,p.R)(l,{onSuccess:()=>v&&v(),autoToast:d}),y=f||b||w||!1===l.enabled,{approve:N,shouldApprove:j,loading:C,isSuccess:k}=useApproves(c||{},u,i),A=(0,o.useRef)();return(A.current=g,(0,o.useEffect)(()=>{A.current&&k&&A.current()},[k]),j)?(0,r.jsxs)("button",{className:(0,m.m)(n,"flex items-center justify-center gap-4",t),onClick:N,disabled:f||!N||C,children:[C&&(0,r.jsx)(h.$,{}),"Approve"]}):(0,r.jsxs)("button",{className:(0,m.m)(n,"flex items-center justify-center gap-4",t),onClick:()=>x(),disabled:y,children:[w&&(0,r.jsx)(h.$,{}),(s||!w)&&a]})}},44939:function(e,t,n){"use strict";n.d(t,{E:function(){return PageWrap}});var r=n(31113);n(64103);var a=n(26361),s=n(69708),c=n(12045);function PageWrap(e){let{children:t,className:n}=e,o=(0,c.l)(e=>e.theme),u=(0,s.usePathname)();return(0,r.jsx)("div",{className:(0,a.cn)("min-h-[calc(100vh+1px)] h-auto pt-[90px] pb-6",n),style:{backgroundSize:"contain",background:"light"==o?"#eeeeee":"/"==u?"url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)":"linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)"},children:t})}},36762:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var r=n(31113),a=n(33501);let Spinner=e=>{let{className:t}=e;return(0,r.jsxs)("svg",{fill:"none",className:(0,a.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},15506:function(e,t,n){"use strict";n.d(t,{D2:function(){return useWandContractRead},hp:function(){return u},uX:function(){return useWandContractReads}}),n(78403);var r=n(83978),a=n.n(r);n(64103);var s=n(30308),c=n(59307),o=n(93108);let u=(0,o.Ue)(e=>({time:a().now(),update:()=>{e({time:a().now()})}}));function useWandContractRead(e){let{time:t}=u();return(0,s.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=u();return(0,c.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},78354:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var r=n(26361),a=n(78403),s=n(64103),c=n(47259),o=n(4408);function useWrapContractWrite(e,t){let{autoToast:n=!0,onSuccess:u}=t||{},[i,l]=(0,s.useState)(!1),[d,f]=(0,s.useState)(!1),{data:p}=(0,o.p)(),m=!p||!p.account||i||!e,write=async()=>{if(!m){l(!0),f(!1);try{let t="function"==typeof e?await e():e,r=(0,a.B)(),{request:s}=await r.simulateContract({account:p.account,...t}),o=await p.writeContract(s),i=await r.waitForTransactionReceipt({hash:o});if("success"!==i.status)throw"Transaction reverted";f(!0),u&&u(),n&&c.A.success("Transaction success")}catch(e){n&&c.A.error((0,r.az)(e))}l(!1)}};return{write,isDisabled:m,isLoading:i,isSuccess:d}}},84944:function(e,t,n){"use strict";n.d(t,{d:function(){return displayBalance}});var r=n(35057);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(!e)return"0";let fmtNumber=e=>e.toLocaleString("en-US",{maximumFractionDigits:t}),a=Number((0,r.b)(e,n)),s=Number((.1**t).toFixed(t));return a>0&&a<s?a<.001?fmtNumber(1e6*a)+"μ":"<"+s:a<0&&a>-s?"≈0":fmtNumber(a)}},58409:function(e,t,n){"use strict";var r=n(64103);t.Z=function(e){void 0===e&&(e={});var t=(0,r.useState)(e),n=t[0],a=t[1];return[n,(0,r.useCallback)(function(e){a(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]}}},function(e){e.O(0,[4881,7495,7622,4876,8410,652,4300,1772,7093,604,1744],function(){return e(e.s=16299)}),_N_E=e.O()}]);