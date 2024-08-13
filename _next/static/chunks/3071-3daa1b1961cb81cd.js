"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3071],{84302:function(e,t,s){s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),l=s(72009),n=s(81628),r=s(2265),i=s(71424),o=s(42980),c=s(79037),d=s(11146),u=s(93195);let m={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a,chainId:x}=(0,c.m)(),h=(0,d.t)(),{data:p}=(0,u.p)(),[f,b]=(0,r.useState)(!1),k=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==l.K8),[e]),[v,g]=(0,r.useState)(t&&m[t]||{}),updateAllownce=(e,s)=>{t&&(m[t]={...m[t]||{},[e]:s},g(t=>({...t,[e]:s})))},j=(0,d.t)();(0,r.useEffect)(()=>{a&&t&&h&&x&&k.forEach(e=>{h.readContract({abi:o.Wo,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[k,x,a]);let[w,T]=(0,r.useState)(!1),y=(0,r.useMemo)(()=>k.filter(t=>(0,n.ok)(e,t)>0n&&(0,n.ok)(e,t)>(0,n.ok)(v,t)),[e,k,v]),approve=async()=>{if(0!=y.length&&t)try{T(!0),b(!1);for(let a=0;a<y.length;a++){let l=y[a],n=!1===s?e[l]:s,r=await (null==p?void 0:p.writeContract({abi:o.Wo,address:l,functionName:"approve",args:[t,n]}));r&&await (null==j?void 0:j.waitForTransactionReceipt({hash:r})),updateAllownce(l,n)}i.A.success("Approve success"),T(!1),b(!0)}catch(e){throw i.A.error((0,n.az)(e)),T(!1),b(!1),e}};return{approve,loading:w,shouldApprove:y.length>0,isSuccess:f}};var x=s(43003),h=s(35769),p=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:l,spender:n,requestAmount:i,config:o,toast:c=!0,disabled:d,onTxSuccess:u,onApproveSuccess:m}=e,{write:f,isDisabled:b,isLoading:k}=(0,x.R)(o,{onSuccess:()=>u&&u(),autoToast:c}),v=d||b||k||!1===o.enabled,{approve:g,shouldApprove:j,loading:w,isSuccess:T}=useApproves(l||{},n,i),y=(0,r.useRef)();return(y.current=m,(0,r.useEffect)(()=>{y.current&&T&&y.current()},[T]),j)?(0,a.jsxs)("button",{className:(0,h.m)("btn-primary flex items-center justify-center gap-4",t),onClick:g,disabled:d||!g||w,children:[w&&(0,a.jsx)(p.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,h.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>f(),disabled:v,children:[k&&(0,a.jsx)(p.$,{}),s]})}},80547:function(e,t,s){s.d(t,{W:function(){return AssetInput}});var a=s(57437),l=s(81628),n=s(20373),r=s(57042),i=s(2265),o=s(5668),c=s(16775),d=s(51549),u=s(79499);function AssetInput(e){let{asset:t="ETH",checkBalance:s=!0,balance:m,balanceTit:x="Balance",balanceDecimals:h=18,exchange:p,readonly:f,selected:b,onClick:k,amount:v,setAmount:g,price:j,disable:w,hasInput:T=!1,options:y,onChange:N=()=>{},defaultValue:A,balanceClassName:S="",disableNegative:C}=e,E=(0,i.useRef)(null),R=s&&void 0!==m&&(0,l.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof m?m:0n),_=(0,u.l)(e=>"dark"==e.theme);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{k&&!w&&k()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[j&&(0,a.jsx)("div",{className:"text-neutral-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:j}),p&&(0,a.jsxs)("div",{className:"text-slate-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:["~$",p]})]}),(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(d.c,{size:24,symbol:t}),(0,a.jsx)("div",{className:(0,r.Z)("relative",j||p?"-top-[6px]":""),children:T?(0,a.jsx)(o.ZP,{options:y,onChange:N,defaultValue:A,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),singleValue:(e,t)=>({...e,color:_?"#fff":"#000"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0,background:_?"#444":"#fff"}),option:(e,t)=>({...e,color:_?"#fff":"#000",background:_?"transparent":"#fff"}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,a.jsx)("div",{children:t})})]}),(0,a.jsx)("input",{value:v,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(t)},ref:E,type:"number",disabled:w,className:(0,r.Z)(f?"bg-slate-50 cursor-not-allowed dark:bg-slate-800":"bg-white dark:bg-transparent",{"border-green-700 border-2":b,"border-red-400 !border-2 focus:border-red-400":R,"border-slate-400  focus:border-blue-400":!R&&!b},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none dark:text-slate-50"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:f})]}),void 0!=m&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 dark:text-slate-50/70 text-sm",children:[(0,a.jsxs)("div",{className:S,children:[(0,a.jsxs)("span",{children:[x,": ",(0,n.Rp)(m,3,h)]}),(0,a.jsx)("button",{className:"text-indigo-500 dark:text-violet-300 ml-2",onClick:()=>{let e=(0,c.b)(m,h);g(e),k&&!w&&k()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:R?"Insufficient account balance":""})]})]})}},70482:function(e,t,s){s.d(t,{Z:function(){return ConnectBtn}});var a=s(57437),l=s(14701),n=s(1044);function ConnectBtn(){let e=(0,n.Z)(1024);return(0,a.jsx)(l.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},33071:function(e,t,s){s.d(t,{Q:function(){return DualTokenCard},g:function(){return GroupDualTokenCard}});var a=s(57437),l=s(82265),n=s(72009),r=s(8580),i=s(14389),o=s(21817),c=s(86825),d=s(2265);let u={};var m=s(54415),x=s(43003),h=s(81628),p=s(36479),f=s(20373),b=s(14034),k=s(87456),v=s(57042),g=s(79352),j=s(79037),w=s(84302),T=s(80547),y=s(51549),N=s(70482);function FmtPercent(e){let{className:t,value:s,decimals:l,showDecimals:n=2,plusI0:r=!0}=e,i=0n==s?0n:s||0n,o=r?i>=0n:i>0n,c=null==s||void 0==s||"bigint"!=typeof s;return(0,a.jsx)("span",{className:(0,h.cn)(t,o?"text-green-600":"text-red-600"),children:c?"-%":(0,a.jsxs)(a.Fragment,{children:[o&&"+",(0,h.Jh)(i,l,n)]})})}var A=s(72084),S=s(64020);function WrapDiv(e){let{children:t,wrap:s,...l}=e;return s?(0,a.jsx)("div",{...l,children:t}):t}function TokenValue(e){let{symbol:t,value:s,decimals:l}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(y.c,{className:"inline-block",size:16,symbol:t}),(0,f.dq)(s,l)]})}function DualTokenCard(e){let{type:t,vc:s}=e,C="buy"==t,E=(0,i.p)(),R=C?n.O1[E]:s.assetTokenAddress,_=C?s.assetTokenAddress:s.xTokenAddress,P=C?n.TW:s.assetTokenSymbol,M=C?s.assetTokenSymbol:n.TW,z=C?"Buy ".concat(s.assetTokenSymbol," Low"):"Sell ".concat(s.assetTokenSymbol," High"),D=C?s.ptyPoolBelowAddress:s.ptyPoolAboveAddress,{prices:q,balances:B,earns:H,vaultsState:W,assetLocked:L,vaultUSBTotal:F,usbApr:Z}=(0,d.useContext)(p.g),I=W[s.vault],V=H[D],{address:U}=(0,j.m)(),J=B[R],[Y,$]=(0,d.useState)(""),O=(0,h.su)(Y),G=C?s.xTokenSymbol:s.assetTokenSymbol,K=C?s.assetTokenSymbol:s.xTokenSymbol;(0,d.useMemo)(()=>V.totalStake*(0,h.ok)(q,R,r.Pq)/r.Pq,[q[R],V.totalStake]);let Q=C?null==I?void 0:I.AARS:null==I?void 0:I.AARU,X=(0,h.ok)(L,s.assetTokenAddress),ee=(0,h.ok)(F,s.vault),et=(0,d.useMemo)(()=>Q&&I.AARDecimals&&0n!=X&&0n!=ee?Q*ee*r.Pq/I.AARDecimals/X/BigInt(1e9):(0,h.ok)(q,s.assetTokenAddress),[Q,ee,I.AARDecimals,X]),es=C?"Stake $USB, and when the ".concat(s.assetTokenSymbol," price falls to the target, it will trigger the purchase of ").concat(s.assetTokenSymbol," with staked $USB."):"Stake ".concat(s.assetTokenSymbol,", and when the ").concat(s.assetTokenSymbol," price rises to the target, staked ").concat(s.assetTokenSymbol," will be sold."),ea=(0,m.D2)({abi:l.aT,address:D,functionName:"getAccruedMatchingYields"}),el=(0,h.ok)(ea,"data"),en=(0,d.useMemo)(()=>{let e=(0,h.ok)(V,"totalStake");if(0n==e||0n==q[R])return"0.00%";let t=10n**(I.AARDecimals||10n),s=(I.AART-t)*et;if(0n==s)return"0.00%";let a=C?(I.AART*I.M_USB_ETH*r.Pq-I.M_ETH*et*t)/(I.AART-t)/r.Pq:(I.M_ETH*et*t-I.AART*I.M_USB_ETH*r.Pq)/s;return e=(0,h.NA)([e,a]),(0,h.Jh)(el*q[_]*r.Pq/(e*q[R]),18,3)},[V.totalStake,el,_,R,q[_],q[R],C]),er=(0,c.i)(),ei=(0,h.ok)(er[D],"staking"),eo=q[s.assetTokenAddress]>0&&et>0n?C?(q[s.assetTokenAddress]-et)*10n**10n/q[s.assetTokenAddress]:(et-q[s.assetTokenAddress])*10n**10n/q[s.assetTokenAddress]:0n,ec=(0,d.useMemo)(()=>{let e=10n**(I.AARDecimals||10n),t=(I.AART-e)*et/e;if(0n==t)return 0n;if(C){let s=(I.AART*I.M_USB_ETH*r.Pq-I.M_ETH*et*e)/e/t,a=s*et/r.Pq,l=V.stake,n=V.totalStake>a&&a>=0n?l*a/V.totalStake:l;return n}{let s=(I.M_ETH*et*e-I.AART*I.M_USB_ETH*r.Pq)/e/t,a=V.stake,l=V.totalStake>s&&s>=0n?a*s/V.totalStake:a;return l}},[V,I,C,et]),ed=(0,d.useMemo)(()=>{let e=C?[{key:"eth_price",label:"ETH Price",value:(0,f.dq)(q[s.assetTokenAddress])},{key:"target_price",label:"Target Price",value:(0,a.jsxs)("div",{children:[(0,f.dq)(et)," (",(0,a.jsx)(FmtPercent,{value:eo<0n?void 0:-eo,decimals:10,plusI0:!1}),")"]}),groupEnd:!0},{key:"apr_interest",label:"APY",value:(0,h.Jh)(Z.apr+ei,Z.aprDecimals,2),detail:(0,a.jsxs)("div",{className:"pl-2",children:[(0,a.jsxs)("div",{children:["~",n.TW," Interest: ",(0,h.Jh)(Z.apr,Z.aprDecimals,2)]}),(0,a.jsxs)("div",{children:["~",G," Yield: ",(0,h.Jh)(ei,Z.aprDecimals,2)]})]}),groupEnd:!0},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:K,value:el})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(en," (Est.)")}]:[{key:"eth_price",label:"ETH Price",value:(0,f.dq)(q[s.assetTokenAddress])},{key:"target_price",label:"Target Price",value:(0,a.jsxs)("div",{children:[(0,f.dq)(et)," (",(0,a.jsx)(FmtPercent,{value:eo<0n?void 0:eo,decimals:10,plusI0:!0}),")"]}),groupEnd:!0},{key:"apr_yield",label:"APY(".concat(G," Yield)"),value:(0,h.Jh)(ei,Z.aprDecimals,2),groupEnd:!0},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a sell action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:K,value:el})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(en," (Est.)")}];return e},[V,el]),eu=(0,d.useMemo)(()=>{let e=C?[{key:"successfully_brought",label:"Successfully Bought",value:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(TokenValue,{symbol:M,value:V.match}),(0,a.jsx)("span",{children:"+"}),(0,a.jsx)(TokenValue,{symbol:K,value:V.earnForMatch}),(0,a.jsx)(S.C,{inFlex:!0,children:"From Reward Pool"})]})},{key:"staking_earend",label:"".concat(G," Earned"),value:(0,a.jsx)(TokenValue,{symbol:G,value:V.earn})}]:[{key:"successfully_sold",label:"Successfully Sold",value:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(TokenValue,{symbol:M,value:V.match}),(0,a.jsx)("span",{children:"+"}),(0,a.jsx)(TokenValue,{symbol:K,value:V.earnForMatch}),(0,a.jsx)(S.C,{inFlex:!0,children:"From Reward Pool"})]})}];return e},[V,M,G,K]),{write:em,isDisabled:ex,isLoading:eh}=(0,x.R)({abi:l.aT,address:D,functionName:"claimAll"}),ep=function(e){let t=(0,d.useRef)(null);return u[e]&&u[e].includes(t)||(u[e]=[...u[e]||[],t]),(0,d.useEffect)(()=>{if(!t.current)return()=>{};let onResize=()=>{let s=u[e]||[],a=s.reduce((e,t)=>{var s;return Math.max((null===(s=t.current)||void 0===s?void 0:s.clientHeight)||0,e)},0);s.filter(e=>e!=t).forEach(e=>{var t;let s=(null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0;s!==a&&a>0&&e.current&&(e.current.style.height="".concat(a,"px"))})};return window.addEventListener("resize",onResize),onResize(),()=>{window.removeEventListener("resize",onResize)}},[t.current]),t}(s.vault),[ef,eb]=(0,o.n)(e=>{let{width:t}=e;return t<512});return(0,a.jsxs)("div",{className:"card flex flex-col",ref:ef,children:[(0,a.jsxs)("div",{className:"flex gap-5 items-center justify-between",ref:ep,children:[(0,a.jsxs)("div",{className:"flex gap-3 md:gap-5 items-center",children:[(0,a.jsxs)("div",{className:"relative w-fit shrink-0",children:[(0,a.jsx)(y.c,{size:32,symbol:P,className:"md:hidden"}),(0,a.jsx)(y.c,{size:40,symbol:P,className:"hidden md:block"}),(0,a.jsx)(y.c,{size:16,symbol:M,className:"absolute -right-1 -bottom-1 md:hidden"}),(0,a.jsx)(y.c,{size:24,symbol:M,className:"absolute -right-2 -bottom-2 hidden md:block"})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("h6",{className:"page-sub",children:z||"title"}),(0,a.jsx)(S.C,{children:es})]})})]}),(0,a.jsx)(WrapDiv,{wrap:eb,className:"flex flex-col-reverse gap-1 items-end",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-xs text-black dark:text-slate-50 font-medium text-right",children:["Total ",P," Staked"]}),(0,a.jsx)("div",{className:"text-base text-black dark:text-slate-50 text-end font-semibold",children:(0,f.dq)(V.totalStake)})]})})]}),(0,a.jsx)(b.Z,{className:"my-4 h-[1px] dark:bg-zinc-600 "}),(0,a.jsxs)(k.Z,{numItemsSm:2,className:"gap-x-2 flex-1",children:[(0,a.jsx)(k.Z,{numItemsSm:1,className:"gap-y-2 gap-x-7 md:border-r-[1px] border-[#E4E4E7] dark:border-zinc-600 mb-3 md:mb-0 ",children:null==ed?void 0:ed.map(e=>(0,a.jsxs)("div",{className:(0,v.Z)("flex flex-col text-sm",{"mb-4":e.groupEnd}),children:[(0,a.jsxs)("div",{className:"flex items-center flex-wrap",children:[(0,a.jsxs)("div",{className:"text-black dark:text-slate-50 font-medium mr-[5px]",children:[e.label," : ",e.tip&&(0,a.jsx)(S.C,{children:e.tip})]}),(0,a.jsx)("div",{className:"text-neutral-900 dark:text-slate-50 ml-2",children:e.value})]}),e.detail]},e.key))}),U&&(0,a.jsxs)(k.Z,{numItemsSm:1,className:"gap-x-1",children:[(0,a.jsx)("div",{className:"w-full border-t-[1px] border-[#E4E4E7] dark:border-zinc-600 md:border-0 md:px-[0px]",children:null==eu?void 0:eu.map(e=>(0,a.jsxs)("div",{className:"flex items-center flex-wrap mt-[8px] md:mt-0 md:mb-2",children:[(0,a.jsxs)("div",{className:"text-xs text-black dark:text-slate-50 whitespace-nowrap font-medium mr-[5px]",children:[e.label," :"]}),(0,a.jsx)("div",{className:"text-neutral-900 dark:text-slate-50 text-sm shrink-0 ml-2",children:e.value})]},e.key))}),(0,a.jsxs)("div",{className:"mt-auto h-fit",children:[(0,a.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,a.jsxs)("button",{className:"btn-primary px-4 h-7 flex items-center w-[60%] md:w-fit self-end justify-center gap-4 bg-[#64738B]",disabled:ex||eh,onClick:()=>em(),children:[eh&&(0,a.jsx)(A.$,{}),"Claim All"]})}),(0,a.jsxs)("div",{className:"relative flex flex-col gap-1 mt-4 md:mt-[28px] justify-center items-center text-[#64748B] text-sm font-medium p-3 rounded-md bg-slate-100 dark:bg-s1 dark:text-slate-50",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:["Staked",(0,a.jsx)(y.c,{symbol:P,size:16}),(0,f.dq)(V.stake),(0,a.jsx)("span",{className:"text-indigo-500 dark:text-violet-300 ml-[5px] cursor-pointer",onClick:()=>$((0,g.d)(V.stake)),children:"Max"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1 pl-8",children:["-",(0,f.dq)(ec),(0,a.jsxs)(S.C,{inFlex:!0,children:["This is the amount of staked ",P," that will be ",C?"spent":"sold"," when price triggers."]})]})]})]})]})]}),U?(0,a.jsxs)("div",{className:"mt-4 md:mt-[30px]",children:[(0,a.jsx)(T.W,{amount:Y,setAmount:$,asset:P,balance:J,checkBalance:!1}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(w.v,{tx:"Stake",disabled:O<=0n||O>J,onTxSuccess:()=>{$("")},config:{abi:l.aT,address:D,functionName:"stake",args:[O],value:P==n.Ku?O:0n},className:"mt-2 w-[45%]",approves:{[R]:O},spender:D}),(0,a.jsx)(w.v,{className:"mt-2 w-[45%]",tx:"Withdraw",disabled:O<=0n||O>V.stake,onTxSuccess:()=>{$("")},config:{abi:l.aT,address:D,functionName:"withdraw",args:[O]}})]})]}):(0,a.jsx)("div",{className:"w-full flex items-center justify-center mt-[30px]",children:(0,a.jsx)(N.Z,{})})]})}function GroupDualTokenCard(e){let{vcs:t,type:s}=e,[l,n]=(0,d.useState)(t[t.length-1]);return 0==t.length?null:1==t.length?(0,a.jsx)(DualTokenCard,{vc:t[0],type:s}):(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(DualTokenCard,{vc:l,type:s}),(0,a.jsx)("div",{className:"absolute z-10 left-[86px] top-0 flex text-sm",children:t.map((e,t)=>(0,a.jsx)("div",{className:(0,v.Z)("cursor-pointer rounded-b-full border border-blue-500 px-1 py-1",{"bg-white text-black dark:text-slate-50":l!==e,"bg-blue-500 text-white":l===e}),onClick:()=>n(e),children:"V".concat(t+1)},"gdtc_"+t))})]})}},79499:function(e,t,s){s.d(t,{h:function(){return ThemeMode},l:function(){return c}});var a=s(57437),l=s(81628),n=s(2265),r=s(58910),i=s(94660),o=s(8623);let getThemeState=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},c=(0,i.Ue)(e=>({...getThemeState(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))})),d={light:(0,a.jsx)(r.EWX,{}),dark:(0,a.jsx)(r.Dq,{}),system:(0,a.jsx)(r.pUp,{})};function ThemeMode(){let e=c(),onChangeTheme=()=>{let{theme:t,themeMode:s}=getThemeState();e.setTheme(t),e.setThemeMode(s)};(0,n.useEffect)(()=>{onChangeTheme()},[]);let onClick=e=>{"System"==e?localStorage.removeItem("theme"):localStorage.theme=e.toLocaleLowerCase(),onChangeTheme()};return(0,a.jsx)(o.o,{className:"max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white",trigger:(0,a.jsx)("div",{className:"text-xl",children:d[e.theme]}),children:["Light","Dark","System"].map((t,s)=>(0,a.jsxs)("div",{className:(0,l.cn)("flex px-5 items-center py-2 gap-3 cursor-pointer",{"bg-stone-100 dark:bg-zinc-700":t.toLowerCase()==e.themeMode}),onClick:()=>onClick(t),children:[(0,a.jsx)("div",{className:"text-2xl",children:d[t.toLowerCase()]}),(0,a.jsx)("span",{className:"",children:t})]},"theme_mode_"+t))})}},64020:function(e,t,s){s.d(t,{C:function(){return Tip}});var a=s(57437),l=s(81628),n=s(75224),r=s(40311);function Tip(e){let{children:t,node:s,className:i,inFlex:o}=e,c=document.getElementById("tooltip-root");return t?(0,a.jsx)(n.zt,{children:(0,a.jsxs)(n.fC,{children:[(0,a.jsx)(n.xz,{asChild:!0,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},children:s?(0,a.jsx)("div",{className:(0,l.cn)("inline-block cursor-default",i),style:{verticalAlign:"text-bottom"},children:s}):(0,a.jsx)("div",{className:(0,l.cn)(o?"flex":"translate-y-[-6%] inline-block"," px-[3px] cursor-default relative",i),children:(0,a.jsx)(r.apP,{className:"inline-block stroke-slate-500"})})}),(0,a.jsx)(n.h_,{container:c,children:(0,a.jsxs)(n.VY,{className:"max-w-xs text-sm text-white bg-slate-900 shadow-lg dark:bg-[#333333] rounded-md p-4",children:[t,(0,a.jsx)(n.Eh,{})]})})]})}):s}},21817:function(e,t,s){s.d(t,{n:function(){return useElementSizeCheck}});var a=s(34350);function useElementSizeCheck(e){let[t,s]=(0,a.Z)();return[t,e(s)]}},43003:function(e,t,s){s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),l=s(2265),n=s(71424),r=s(11146),i=s(93195),o=s(54415);function useWrapContractWrite(e,t){let{autoToast:s=!0,onSuccess:c}=t||{},[d,u]=(0,l.useState)(!1),[m,x]=(0,l.useState)(!1),h=(0,r.t)(),{data:p}=(0,i.p)(),f=!h||!p||!p.account||d||!e,b=(0,o.hp)(),write=async()=>{if(!f){u(!0),x(!1);try{let t="function"==typeof e?await e():e,{request:a}=await h.simulateContract({account:p.account,...t}),l=await p.writeContract(a),r=await h.waitForTransactionReceipt({hash:l});if("success"!==r.status)throw"Transaction reverted";x(!0),c&&c(),s&&n.A.success("Transaction success"),b.update()}catch(e){s&&n.A.error((0,a.az)(e))}u(!1)}};return{write,isDisabled:f,isLoading:d,isSuccess:m}}}}]);