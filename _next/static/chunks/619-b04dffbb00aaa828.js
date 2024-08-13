"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{51549:function(e,t,a){a.d(t,{c:function(){return CoinIcon}});var n=a(57437);let s={iBGT:"png",xiBGT:"png",ZUSD:"png"};function CoinIcon(e){let{symbol:t,size:a=48,...r}=e,i=t in s?s[t]:"svg",l="/".concat(t,".").concat(i);return(0,n.jsx)("img",{...r,width:a,height:a,src:l,alt:t})}},80619:function(e,t,a){a.d(t,{a:function(){return MigrationTip}});var n=a(57437),s=a(82265),r=a(72009),i=a(14389),l=a(54415),o=a(81628),c=a(20373),d=a(24033),u=a(2265),m=a(58910),x=a(89348),p=a(46246),h=a(42980),f=a(52078),g=a(79037),b=a(30929),N=a(51549),v=a(8623),j=a(72084),y=a(67663);function MarginLoan(e){let{symbol:t,value:a}=e;return(0,n.jsxs)("div",{className:"flex items-center gap-2 pr-8",children:[(0,n.jsx)(N.c,{symbol:t,size:20}),(0,n.jsx)("span",{children:(0,c.dq)(a)})]})}function bnGt(e){return e>=200000n?e:0n}function MigrationV2(){let e=(0,i.p)(),t=r.Lh[e][0],a=r.Lh[e][1],x=r.iK[e][0],N=r.iK[e][1],[k,T]=(0,p.Z)(!1),{address:w,chain:S}=(0,g.m)(),{data:W,isFetching:A}=function(e){let t=(0,i.p)(),{address:a}=(0,g.m)(),n=r.Lh[t][0],c=r.Lh[t][1],d=(0,l.lo)(),queryFn=async()=>{let e=await Promise.all([{abi:h.Wo,address:n.xTokenAddress,functionName:"balanceOf",args:[a]},{abi:h.Wo,address:c.xTokenAddress,functionName:"balanceOf",args:[a]},{abi:s.aT,address:n.ptyPoolAboveAddress,functionName:"userStakingBalance",args:[a]},{abi:s.aT,address:n.ptyPoolBelowAddress,functionName:"userStakingBalance",args:[a]},{abi:h.Wo,address:r.O1[t],functionName:"balanceOf",args:[a]},{abi:h.Wo,address:n.xTokenAddress,functionName:"totalSupply"},{abi:s.WW,address:n.vault,functionName:"usbTotalSupply"},{abi:s.aT,address:n.ptyPoolBelowAddress,functionName:"earnedStakingYields",args:[a]}].map(e=>d(e))),i=(0,o.ok)(e,[7]),l=(0,o.ok)(e,[0]),u=l+i,m=(0,o.ok)(e,[1]),x=(0,o.Rj)(e,[2]),p=(0,o.Rj)(e,[3]),f=(0,o.ok)(e,[4]),g=(0,o.ok)(e,[5]),b=(0,o.ok)(e,[6]),N=await Promise.all([bnGt(l)?d({abi:s.Wn,address:r.O6[t],functionName:"calcPairedRedeemAssetAmount",args:[n.vault,l]}).then(e=>e[1]):0n,bnGt(m)?d({abi:s.Wn,address:r.O6[t],functionName:"calcRedeemByMarginTokensFromStableVault",args:[c.vault,r.e_[t],m]}).then(e=>e[2]):0n]),v=l?(0,o.ok)(N,[0]):0n,j=m?(0,o.ok)(N,[1]):0n;return{earnEthx:i,ethxBalance:l,ethxTotal:u,usdbxBalance:m,ethStaked:x,usbStaked:p,usbBalance:f,usbTotal:f+p,ethxMarginloan:g>0n?-(u*b)/g:0n,ethOutAmount:v,usdbOutAmount:j}};return(0,y.a)({queryFn,queryKey:[t,a,e],refetchOnMount:!1,refetchOnWindowFocus:!1,initialData:(0,o.Yb)({},0n)})}(k),B=W.usbTotal+W.ethxMarginloan<10000n&&bnGt(W.ethxTotal)>0n,M=W.ethxTotal+W.usdbxBalance+W.ethStaked<=0n,{mutateAsync:V,isPending:O,finishCount:P,reset:E}=(0,l.Lh)(),C=Object.values(W).toString(),G=(0,u.useMemo)(()=>{let e=[];return bnGt(W.usbStaked)?e.push({name:"Withdraw ".concat(r.TW," from V1 Earn Pool"),abi:s.aT,address:t.ptyPoolBelowAddress,functionName:"exit"}):bnGt(W.earnEthx)&&e.push({name:"Withdraw ".concat(r.TW," from V1 Earn Pool"),abi:s.aT,address:t.ptyPoolBelowAddress,functionName:"claimAll"}),bnGt(W.ethStaked)&&e.push({name:"Withdraw ETH from V1 Earn Pool",abi:s.aT,address:t.ptyPoolAboveAddress,functionName:"exit"}),bnGt(W.ethxTotal)&&e.push({name:"Redeem ETH from V1 Vault",abi:s.WW,address:t.vault,functionName:"redeemByPairsWithExpectedMarginTokenAmount",args:[W.ethxTotal]}),bnGt(W.ethOutAmount)&&e.push({name:"Deposit ETH to V2 Vault",abi:s.WW,address:x.vault,functionName:"mintPairs",args:[W.ethOutAmount],value:W.ethOutAmount}),bnGt(W.usdbxBalance)&&e.push({name:"Redeem USDB from V1 Vault",abi:s.S4,address:a.vault,functionName:"redeemByMarginTokens",args:[W.usdbxBalance]}),bnGt(W.usdbOutAmount)&&w&&e.push({name:"Deposit USDB to V2 Vault",abi:s.S4,address:N.vault,functionName:"mintMarginTokens",args:[W.usdbOutAmount],prepare:async(e,t,a)=>{let n=await t.readContract({abi:h.Wo,address:N.assetTokenAddress,functionName:"balanceOf",args:[w]}),s=n<W.usdbOutAmount?n:W.usdbOutAmount,r=await t.readContract({abi:h.Wo,address:N.assetTokenAddress,functionName:"allowance",args:[w,N.vault]});if(r<s){let e=await a.writeContract({chain:S,account:w,abi:h.Wo,address:N.assetTokenAddress,functionName:"approve",args:[N.vault,(0,f.f)("100000000000")]});await t.waitForTransactionReceipt({hash:e,confirmations:5})}return{...e,args:[s]}}}),e},[C,t,x,a,N,null==S?void 0:S.id,w]);(0,u.useEffect)(()=>{E()},[C]);let D=P==G.length,F=(0,u.useRef)(null),migrate=async()=>{try{var e;if(D)return null===(e=F.current)||void 0===e?void 0:e.click();if(M)return;console.info("tasks:",G),await V(G)}catch(e){(0,o.S3)(e)}},R=(0,d.useRouter)(),L=(0,d.usePathname)();return(0,n.jsx)(v.o,{disableOutClose:!0,style:{},open:k,onOpenChange:T,className:"backdrop-blur-lg max-w-[800px]",disableClose:O,triggerProps:{className:"shrink-0"},trigger:(0,n.jsx)("button",{className:"btn-primary mt-0",children:"MIGRATION TO V2"}),children:(0,n.jsxs)("div",{className:"card flex flex-col gap-4 !bg-transparent",children:[(0,n.jsx)("div",{className:"page-sub text-left",children:"MIGRATION TO V2"}),(0,n.jsxs)("div",{children:["Before migration, make sure your ",r.TW," balance is greater than your margin loan."]}),A?(0,n.jsx)("div",{className:"flex justify-center items-center h-[357px]",children:(0,n.jsx)(j.$,{})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[(0,n.jsx)("div",{className:"rounded-lg overflow-x-auto w-full bg-zinc-200 dark:bg-slate-950 pb-2",children:(0,n.jsx)(b.ZP,{header:["","Balance","Margin loan"],data:[["ETHx-V1",(0,c.dq)(bnGt(W.ethxTotal)),(0,n.jsx)(MarginLoan,{symbol:r.TW,value:W.ethxMarginloan},"ethx_ml")],["USDBx-V1",(0,c.dq)(bnGt(W.usdbxBalance)),""],["ETH-V1",(0,c.dq)(bnGt(W.ethStaked)),""],[r.TW,(0,c.dq)(W.usbTotal),""]]})}),(0,n.jsxs)("div",{className:"flex flex-col pl-3 pt-5 gap-1 md:pl-5 md:pt-2",children:[(0,n.jsx)("div",{className:"text-lg",children:"Progress"}),G.map((e,t)=>(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("span",{children:["- ",e.name]}),t<P&&(0,n.jsx)(m.ZSR,{className:"text-green-500"}),O&&t==P&&(0,n.jsx)(j.$,{})]},"task_"+t))]})]}),(0,n.jsxs)("button",{className:"btn-primary flex items-center gap-2 justify-center",disabled:B||O||A,onClick:migrate,children:[O&&(0,n.jsx)(j.$,{}),D&&(0,n.jsx)(m.ZSR,{className:"text-green-500"}),O?"Migrating":P==G.length?"Completed":"Start to Migration"]}),B&&(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsxs)("span",{children:[r.TW," balance is insufficient. "]}),(0,n.jsxs)("span",{children:["Mint more ",r.TW," from the"]})," ",(0,n.jsx)("button",{className:"underline text-indigo-500 dark:text-violet-300 outline-none inline-block",onClick:()=>{var e;if("/vaults"==L)return null===(e=F.current)||void 0===e?void 0:e.click();R.push("/vaults")},children:"USDB V2 Vault"})]})]})]})})}function MigrationTip(){let e=(0,i.p)(),t=r.Lh[e],a=t&&t.length>0;return a?(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-4 items-center md:flex-row",children:[(0,n.jsxs)("div",{className:"text-sm text-red-500 p-2 rounded bg-[#FFE5E0] flex items-center gap-2",children:[(0,n.jsx)("div",{className:"p-1 rounded bg-red-500",children:(0,n.jsx)(x._sk,{className:"text-white"})}),"Wand has been updated to Version2. Please ensure you complete the migration of your assets promptly."]}),(0,n.jsx)(MigrationV2,{})]}):null}},8623:function(e,t,a){a.d(t,{o:function(){return SimpleDialog}});var n=a(57437),s=a(81628),r=a(28712),i=a(52410);function SimpleDialog(e){let{trigger:t,children:a,className:l,style:o,closeClassName:c,disableOutClose:d,disableClose:u,triggerProps:m,...x}=e;return(0,n.jsxs)(r.fC,{...x,children:[(0,n.jsx)(r.xz,{...m||{},children:t}),(0,n.jsxs)(r.h_,{children:[(0,n.jsx)(r.aV,{className:"fixed top-0 left-0 inset-0 z-50 bg-black/60"}),(0,n.jsxs)(r.VY,{onEscapeKeyDown:e=>{u&&e.stopPropagation(),u&&e.preventDefault()},onInteractOutside:e=>{console.info("e:",e),d&&e.stopPropagation(),d&&e.preventDefault()},style:o,className:(0,s.cn)("fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#333333] rounded-2xl overflow-hidden shadow-2xl z-50",l),children:[a,(0,n.jsx)(r.x8,{disabled:u,className:(0,s.cn)("absolute right-4 top-4 cursor-point text-xl",c),children:(0,n.jsx)(i.abH,{})})]})]})]})}},30929:function(e,t,a){var n=a(57437),s=a(81628);function DefEmpty(){return(0,n.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}a(2265),t.ZP=e=>{let{header:t,data:a,span:r={},empty:i=(0,n.jsx)(DefEmpty,{}),className:l="relative min-w-full bg-transparent ",headerClassName:o,headerItemClassName:c,tbodyClassName:d="",rowClassName:u,rowStyle:m,cellClassName:x,onClickRow:p,onRowMouseHover:h}=e;return(0,n.jsxs)("table",{className:(0,s.cn)("relative min-w-full bg-transparent ",l),children:[(0,n.jsx)("thead",{className:"",children:(0,n.jsx)("tr",{className:(0,s.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",o),children:t.map((e,t)=>(0,n.jsx)("th",{colSpan:r[t],scope:"col",className:(0,s.cn)(0==r[t]?"p-0 w-0":"p-3 font-normal text-sm",c),children:e},t))})}),(0,n.jsxs)("tbody",{className:(0,s.cn)(d),children:[a.map((e,a)=>(0,n.jsx)("tr",{onClick:()=>p&&p(a),onMouseEnter:()=>h&&h(a),onMouseLeave:()=>h&&h(-1),style:"function"==typeof m?m(a):m,className:(0,s.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof u?u(a):u),children:e.map((e,i)=>i>=t.length?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("td",{colSpan:r[i],className:(0,s.cn)(0==r[i]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof x?x(a,i):x),children:e},i))},a)),0===a.length&&i]})]})}},72084:function(e,t,a){a.d(t,{$:function(){return Spinner}});var n=a(57437),s=a(57042);let Spinner=e=>{let{className:t}=e;return(0,n.jsxs)("svg",{fill:"none",className:(0,s.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},20373:function(e,t,a){a.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var n=a(16775),s=a(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2?arguments[2]:void 0;if(!e)return"0";let s=10**t,r=Math.floor(Number((0,n.b)(e,a))*s)/s,i=Number((.1**t).toFixed(t));return r>0&&r<i?"<"+i:r<0&&r>-i?"≈0":r.toLocaleString("en-US",{maximumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return"0";let n=Number((0,s.d)(e)),r=Number((.1**t).toFixed(t));return n>0&&n<r?"<"+r:n<0&&n>-r?"≈0":n.toLocaleString("en-US",{...a||{},maximumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0";let a=10**t,n=Math.floor(Number((0,s.d)(e))*a)/a,r=Number((.1**t).toFixed(t));return n>0&&n<r?"<"+r:n<0&&n>-r?"≈0":String(n)}}}]);