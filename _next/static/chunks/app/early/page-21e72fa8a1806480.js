(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77],{68766:function(e,t,s){Promise.resolve().then(s.bind(s,97252))},97252:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return EarlyPage}});var l=s(31113),a=s(35664),i=s(75496);function DataBase(e){let{className:t}=e;return(0,l.jsx)("svg",{className:t,width:"1em",height:"1em",viewBox:"0 0 146 146",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsxs)("g",{opacity:"0.1",children:[(0,l.jsx)("path",{d:"M31.7823 49.1633C31.7823 51.9675 32.8484 54.7442 34.9198 57.335C36.9912 59.9257 40.0273 62.2798 43.8547 64.2626C47.6821 66.2455 52.2259 67.8184 57.2267 68.8915C62.2274 69.9647 67.5872 70.517 73 70.517C78.4128 70.517 83.7726 69.9647 88.7733 68.8915C93.7741 67.8184 98.3179 66.2455 102.145 64.2626C105.973 62.2798 109.009 59.9257 111.08 57.335C113.152 54.7442 114.218 51.9675 114.218 49.1633C114.218 43.4999 109.875 38.0685 102.145 34.0639C94.4155 30.0593 83.9316 27.8095 73 27.8095C62.0684 27.8095 51.5845 30.0593 43.8547 34.0639C36.1249 38.0685 31.7823 43.4999 31.7823 49.1633Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M73 77.2028C56.1639 77.2028 41.6861 72.0058 35.2873 64.5578C33.0344 67.1802 31.7823 70.0814 31.7823 73.1333C31.7823 84.853 50.2361 94.3537 73 94.3537C95.7639 94.3537 114.218 84.853 114.218 73.1333C114.218 70.0814 112.966 67.1802 110.713 64.5578C104.314 72.0058 89.8361 77.2028 73 77.2028Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M73 101.46C55.9442 101.46 41.3083 96.0741 35.0406 88.3946C32.9429 90.9647 31.7823 93.7917 31.7823 96.7596C31.7823 108.596 50.2361 118.19 73 118.19C95.7639 118.19 114.218 108.596 114.218 96.7596C114.218 93.7916 113.057 90.9647 110.959 88.3946C104.692 96.0741 90.0558 101.46 73 101.46Z",fill:"currentColor"})]})})}var r=s(50553),n=s(36762),d=s(6371),o=s(68535),c=s(26758),x=s(19757),m=s(22139),h=s(37077),u=s.n(h),p=s(64103),C=s(47259),hooks_useCopy=()=>{let[e,t]=(0,p.useState)(!1);return{copyTextToClipboard:function(e){u()(e),t(!0),setTimeout(()=>t(!1),500),C.A.success("Copied!")},isCopied:e}},f=s(88239),g=s(15506),v=s(41440),j=s(88439),w=s(26361),b=s(58714),k=s(84944),N=s(33501),y=s(41690),V=s.n(y),M=s(69708),Z=s(62069),T=s.n(Z),B=s(85665),S=s(68940),P=s(91530),E=s.n(P),H=s(20265),L=s(11292),I=s(82294),_=s(48338),D=s(12045),F=s(44769);let A="https://app.galxe.com/quest/Wand/GC9T8t44ov",W=(0,_.Ue)(e=>({loading:!1,inviteCodes:[],update:e,loadingReInviteCode:!1,reInviteCode:async()=>{try{e({loadingReInviteCode:!0});let t=await (0,o.M0)();e({inviteCodes:t})}catch(e){throw e}finally{e({loadingReInviteCode:!1})}}})),useDelayShowPage=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,[t,s]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{setTimeout(()=>s(!0),e)},[]),t};function EarlyPage(){let{address:e}=(0,v.m)(),t=useDelayShowPage(),{signMessageAsync:s}=(0,I.Q)(),[i,d]=(0,p.useState)(""),[c,x]=(0,p.useState)(1),{loading:m,update:h,userState:u}=W(),f=(0,M.useSearchParams)(),g=f.get("code");(0,p.useEffect)(()=>{console.info("code:",g),"string"==typeof g&&5==g.length&&d(g.toUpperCase())},[g]);let prepareTokens=async t=>{let l=(0,w.OA)(localStorage.getItem("earlyaccess-tokens"),{});if(l[t])localStorage.setItem("earlyaccess-token",l[t]);else{let a=await s({message:t}),i="Basic "+btoa("".concat(e,":").concat(a));localStorage.setItem("earlyaccess-tokens",JSON.stringify({...l,[t]:i})),localStorage.setItem("earlyaccess-token",i)}},j=(0,p.useRef)(!1),loadUserDatas=async function(){let e=3;for(;;)try{let[e,t,s]=await Promise.all([(0,o.V_)(),(0,o.l3)(),(0,o.aw)()]);h({userState:e,inviteCodes:t,blastPoints:s}),x(2);break}catch(t){if(console.error(t),e>0)e--,await new Promise(e=>setTimeout(e,2e3));else throw t}},firstLoadDatas=e=>{setTimeout(()=>{j.current||(j.current=!0,h({loading:!0}),prepareTokens(e).then(loadUserDatas).catch(()=>x(1)).finally(()=>{h({loading:!1}),j.current=!1}))},100)};(0,p.useEffect)(()=>{e&&firstLoadDatas(e),e||x(1)},[e]),(0,p.useEffect)(()=>{!u&&e&&firstLoadDatas(e)},[u]);let onEnter=async()=>{if(e&&i)try{h({loading:!0}),await prepareTokens(e);let t=await (0,o.n$)(i);localStorage.setItem("earlyaccess-uid",t.userId),await loadUserDatas(),h({loading:!1})}catch(e){h({loading:!1}),C.A.error("Enter Invited Code failed")}};return t?m?(0,l.jsx)("div",{className:"flex justify-center items-center w-full min-h-[80vh]",children:(0,l.jsx)(n.$,{className:"!w-10 !h-10"})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.a,{}),1==c&&(0,l.jsx)("div",{className:"flex justify-center w-full",children:(0,l.jsxs)("div",{className:"w-full px-4 max-w-[662px] md:mt-[78px]",children:[(0,l.jsx)(InitialAirdrop,{}),(0,l.jsx)("div",{className:"w-full text-center text-base md:text-2xl font-bold text-slate-700 dark:text-slate-50",children:"Early Access Campaign"}),(0,l.jsxs)("div",{className:"w-full text-center my-4 md:my-6 py-2 px-2.5 text-xs text-indigo-500 dark:text-violet-300 bg-slate-50 rounded-full border border-indigo-500 dark:text-violet-300 dark:violet-300 dark:bg-transparent",children:["Wand will reward 100% of the received Blast Developer Airdrop to early access users."," "]}),(0,l.jsx)("div",{className:"w-full text-xs md:text-base text-center font-medium text-slate-500 dark:text-slate-50/40",children:"Enter your invite code to participate in the campaign."}),(0,l.jsx)("div",{className:"w-full flex shadow-sm my-3 md:my-6 items-center justify-center h-[190px] p-4 md:p-24 bg-white rounded-[16px] border border-slate-200 dark:border-zinc-600 dark:bg-slate-950",children:(0,l.jsx)(E(),{validChars:"A-Za-z0-9",placeholder:"_",length:5,value:i,classNames:{container:"w-full max-w-[290px]",character:"rounded-lg uppercase dark:bg-transparent dark:text-slate-50 dark:border dark:border-zinc-600"},onChange:e=>{d(e.toUpperCase())}})}),!e&&(0,l.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,l.jsx)(a.Z,{})}),e&&(0,l.jsx)("div",{className:"w-full text-center h-[40px] mb-[30px] px-[16px] py-[8px] text-white bg-[#64738B] dark:bg-violet-300 dark:text-black rounded-[6px] cursor-pointer",onClick:onEnter,children:"Enter Invite Code"}),(0,l.jsx)("div",{className:"w-full text-xs md:text-base text-center my-3 md:my-6 font-medium text-slate-500 dark:text-slate-50/70",children:"The duration aligns with Blast Developer Airdrop."})]})}),2==c&&(0,l.jsx)(AccessPage,{})]}):null}function InitialAirdrop(){return(0,l.jsxs)("div",{className:"flex flex-col p-4 gap-8 bg-[#F3F3FF] dark:bg-slate-700 rounded-xl w-full mb-5",children:[(0,l.jsx)("div",{className:"text-base md:text-2xl font-bold text-slate-700 dark:text-slate-50",children:"Initial Airdrop:"}),(0,l.jsxs)("div",{className:"text-xs border-1 border-indigo-500",children:["Users who participated in the"," ",(0,l.jsx)("a",{href:A,target:"_blank",className:"underline text-indigo-500 dark:text-violet-300 dark:text-violet-300",children:"Galxe Blast Takeover"})," ","and Blast Early Access will receive initial points."]})]})}function NavButton(e){let{icon:t,title:s,clicked:a,onButtonClick:i}=e;return(0,l.jsxs)("div",{className:(0,N.Z)("p-5 flex-1 flex items-center justify-center cursor-pointer md:flex-none md:p-6 md:justify-start",{"text-indigo-500 dark:text-violet-300 md:text-slate-500 md:bg-white md:rounded-lg md:border md:border-gray-300 md:shadow-sm dark:bg-transparent dark:text-violet-300 dark:border-zinc-600":a,"text-slate-500 dark:text-slate-50":!a}),onClick:i,children:[(0,l.jsx)("div",{className:"w-[18px] h-[18px] mr-[10px]",children:t}),(0,l.jsx)("span",{className:"text-sm font-semibold",children:s})]})}let U=(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",children:[(0,l.jsx)("path",{d:"M5 17L8.5 13L12 17H5Z",fill:"currentColor"}),(0,l.jsx)("rect",{x:"0.123779",y:"8.99426",width:"16.3459",height:"1.6201",rx:"0.81005",transform:"rotate(4.38067 0.123779 8.99426)",fill:"currentColor"}),(0,l.jsx)("circle",{cx:"3.62378",cy:"3.5",r:"2.75",stroke:"currentColor",strokeWidth:"1.5"}),(0,l.jsx)("path",{d:"M15.8738 4.95852C15.8738 6.20116 14.8664 7.20852 13.6238 7.20852C12.3811 7.20852 11.3738 6.20116 11.3738 4.95852C11.3738 3.71588 12.3811 2.70852 13.6238 2.70852C14.8664 2.70852 15.8738 3.71588 15.8738 4.95852Z",stroke:"currentColor",strokeWidth:"1.5"})]}),z=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,l.jsx)("path",{d:"M14.625 10.6875V8.71875C14.625 8.04742 14.3583 7.40359 13.8836 6.92889C13.4089 6.45418 12.7651 6.1875 12.0938 6.1875H10.9688C10.745 6.1875 10.5304 6.09861 10.3721 5.94037C10.2139 5.78214 10.125 5.56753 10.125 5.34375V4.21875C10.125 3.54742 9.85832 2.90359 9.38361 2.42889C8.90891 1.95418 8.26508 1.6875 7.59375 1.6875H6.1875M6.75 12.375V12.9375M9 10.6875V12.9375M11.25 9V12.9375M7.875 1.6875H4.21875C3.753 1.6875 3.375 2.0655 3.375 2.53125V15.4688C3.375 15.9345 3.753 16.3125 4.21875 16.3125H13.7812C14.247 16.3125 14.625 15.9345 14.625 15.4688V8.4375C14.625 6.64729 13.9138 4.9304 12.648 3.66453C11.3821 2.39866 9.66521 1.6875 7.875 1.6875Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),X=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,l.jsx)("path",{d:"M5.41276 8.18022C5.23116 7.85345 4.94619 7.59624 4.60259 7.44895C4.25898 7.30167 3.8762 7.27265 3.51432 7.36645C3.15244 7.46025 2.83196 7.67157 2.60317 7.96722C2.37438 8.26287 2.25024 8.62613 2.25024 8.99997C2.25024 9.37381 2.37438 9.73706 2.60317 10.0327C2.83196 10.3284 3.15244 10.5397 3.51432 10.6335C3.8762 10.7273 4.25898 10.6983 4.60259 10.551C4.94619 10.4037 5.23116 10.1465 5.41276 9.81972M5.41276 8.18022C5.54776 8.42322 5.62501 8.70222 5.62501 8.99997C5.62501 9.29772 5.54776 9.57747 5.41276 9.81972M5.41276 8.18022L12.5873 4.19472M5.41276 9.81972L12.5873 13.8052M12.5873 4.19472C12.6924 4.39282 12.8361 4.56797 13.0097 4.70991C13.1834 4.85186 13.3836 4.95776 13.5987 5.02143C13.8138 5.08509 14.0394 5.10523 14.2624 5.08069C14.4853 5.05614 14.7011 4.98739 14.8972 4.87846C15.0933 4.76953 15.2657 4.62261 15.4043 4.44628C15.5429 4.26995 15.645 4.06775 15.7046 3.85151C15.7641 3.63526 15.78 3.40931 15.7512 3.18686C15.7225 2.96442 15.6496 2.74994 15.537 2.55597C15.3151 2.17372 14.952 1.89382 14.5259 1.77643C14.0997 1.65904 13.6445 1.71352 13.2582 1.92818C12.8718 2.14284 12.585 2.50053 12.4596 2.92436C12.3341 3.34819 12.38 3.80433 12.5873 4.19472ZM12.5873 13.8052C12.4796 13.999 12.4112 14.2121 12.3859 14.4323C12.3606 14.6525 12.3789 14.8756 12.4398 15.0887C12.5007 15.3019 12.603 15.5009 12.7408 15.6746C12.8787 15.8482 13.0494 15.9929 13.2431 16.1006C13.4369 16.2082 13.65 16.2767 13.8702 16.302C14.0905 16.3273 14.3135 16.3089 14.5267 16.248C14.7398 16.1871 14.9389 16.0848 15.1125 15.947C15.2861 15.8092 15.4309 15.6385 15.5385 15.4447C15.7559 15.0534 15.809 14.5917 15.686 14.1612C15.563 13.7307 15.274 13.3668 14.8826 13.1493C14.4913 12.9319 14.0296 12.8789 13.5991 13.0019C13.1686 13.1249 12.8047 13.4139 12.5873 13.8052Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),formatNumber=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0,0.000",s=T()(e).value()||0,l=T()(s).format(t);return l};function SectionTitle(e){let{title:t,sub:s,tip:a,className:i}=e;return(0,l.jsxs)("div",{className:(0,w.cn)("w-full text-lg gap-1 font-semibold flex items-center",i),children:[t," ",(0,l.jsx)("span",{className:"text-base",children:s}),!!a&&(0,l.jsx)(d.C,{className:"text-slate-500 dark:text-slate-50 text-lg",children:a})]})}function ThusterProtocol(){return(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(V(),{src:"/thuster.svg",width:20,height:20,alt:"ThusterIcon"}),(0,l.jsx)("span",{children:"Thruster"})]})}function AccessPage(){let[e,t]=(0,p.useState)(0),{userState:s,blastPoints:a}=W(),[r,{width:n}]=(0,B.Z)(),{value:c=[]}=(0,S.Z)(o.Zr,[]),h=(0,M.useRouter)();console.log(e);let u=(0,p.useMemo)(()=>{if(!a)return"0%";let e=(0,w.su)(a.sumUserTvl||"0");if(0n==e)return"0%";let t=(0,w.su)(a.userTvl||"0");return 0n==t?"0%":T()((0,L.d)(t*m.Pq*100n/e)).format("0.00")+"%"},[a]);(0,p.useMemo)(()=>{let e=0;return(null==s?void 0:s.glaxe)&&e++,(null==s?void 0:s.minted)&&e++,e},[s]);let C=function(){let{prices:e}=(0,p.useContext)(f.g),{address:t}=(0,v.m)(),{data:s}=(0,g.uX)({contracts:[...x.vX.map(e=>({abi:b.Wo,address:e.token0,functionName:"balanceOf",args:[e.address]})),...x.vX.map(e=>({abi:b.Wo,address:e.address,functionName:"totalSupply"})),...x.vX.map(e=>({abi:b.Wo,address:e.address,functionName:"balanceOf",args:[t]}))]}),l=(0,j.b)(()=>(0,w.Yb)({},(0,w.Yb)({},0n)));return x.vX.forEach((t,a)=>{let i=e["WETH"==t.token0Symbol?x.K8:t.token0],r=(0,w.ok)(s,[a,"result"]),n=(0,w.ok)(s,[a+x.vX.length,"result"]),d=(0,w.ok)(s,[a+2*x.vX.length,"result"]),o=2n*r*i,c=o/m.Pq,h=n>0n?d*m.Pq/n:0n;console.info("thusterTvls:",t.address,i,r,n),l[t.address]={price:n>0n?o/n:0n,tvl:c,total:n,userBalance:d,userShare:h}}),l}(),N=(0,p.useMemo)(()=>x.vX.map(e=>[(0,l.jsx)(ThusterProtocol,{},"name"),(0,l.jsxs)("a",{className:"underline",target:"_blank",href:(0,w.h$)(e.token1,e.token0),children:[e.token1Symbol," / ",e.token0Symbol," - V2(0.3% fee)"]},"link"),"$".concat((0,k.dq)(C[e.address].tvl,2,{notation:"compact"})),"".concat((0,w.Jh)(C[e.address].userShare,18,2)),"WETH"==e.token0Symbol?"6X":e.token1Symbol==x.TW?"2X":"3X"]),x.vX.map(e=>C[e.address]));return s?(0,l.jsxs)("div",{className:"py-1 md:py-[22px] w-full max-w-[1440px] flex flex-col md:flex-row justify-between m-auto px-4",children:[(0,l.jsxs)("div",{className:"w-full flex border-b border-solid border-gray-300 md:border-none md:flex-col md:w-[234px] md:mr-6 dark:border-zinc-600",children:[(0,l.jsx)(NavButton,{icon:U,title:"Points",onButtonClick:()=>{t(0)},clicked:0===e}),(0,l.jsx)(NavButton,{icon:z,title:"Quests",onButtonClick:()=>{t(1)},clicked:1===e}),(0,l.jsx)(NavButton,{icon:X,title:"Invites",onButtonClick:()=>{t(2)},clicked:2===e})]}),0===e&&(0,l.jsxs)("div",{className:"w-full py-4 md:py-0 md:w-[calc(100%-254px)]",children:[(0,l.jsx)(SectionTitle,{title:"Blast Points",tip:"Wand will distribute all Blast Points harvested by the smart contract to users based on their TVL Contribution."}),(0,l.jsxs)("div",{style:{background:"linear-gradient(-30deg,rgba(18, 185, 129, 0.15), transparent 70%"},className:"flex items-center gap-5 md:gap-[80px] text-emerald-500 pl-5 my-3 w-full md:w-fit border border-solid border-emerald-500 rounded-3xl",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"text-sm",children:"Pending Distribution Points Pool"}),(0,l.jsx)("div",{className:"text-lg font-semibold md:text-2xl ",children:formatNumber((null==a?void 0:a.totalBlastPoint)||"0","0,0")})]}),(0,l.jsx)(DataBase,{className:"text-[120px] ml-auto"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-5 pl-5 text-sm font-medium md:text-base",children:[(0,l.jsxs)("div",{children:["My Share: ",u]}),(0,l.jsxs)("div",{children:["Points Received: ",formatNumber((null==a?void 0:a.distributionHistory)||"0","0,0")]})]}),(0,l.jsx)(SectionTitle,{className:"mt-10",title:"Blast Gold",sub:"(Developer Airdrop)",tip:"Wand will distribute Blast Gold to our users based on their Wand Points."}),(0,l.jsx)(SectionTitle,{className:"mt-10",title:"My Wand Points"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-3 gap-6 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full",children:[(0,l.jsxs)("div",{className:"h-full bg-white  shadow-sm border border-[#E4E4E7] rounded-[16px] p-4 md:p-6 dark:bg-transparent dark:border-zinc-600",children:[(0,l.jsx)("div",{className:"text-gray-700 dark:text-slate-50 text-sm md:text-lg font-semibold flex items-center leading-[24px] tracking-tight",children:"Base Points"}),(0,l.jsxs)("div",{className:"flex justify-between text-xs md:text-sm font-medium items-center mt-4 md:mt-8",children:[(0,l.jsx)("div",{children:"My Contribution"}),(0,l.jsx)("div",{children:formatNumber(s.tvl)})]}),(0,l.jsxs)("div",{className:"flex justify-between text-xs md:text-sm font-medium items-center mt-2",children:[(0,l.jsx)("div",{children:"From Invitees"}),(0,l.jsx)("div",{children:formatNumber(s.fromInvitees)})]})]}),(0,l.jsxs)("div",{className:"relative h-full bg-[#12B981] text-white rounded-[16px] overflow-hidden p-4 md:p-6",children:[(0,l.jsx)(V(),{className:"absolute right-10 top-0 z-0",src:"./greenCycle.png",height:163,width:322,alt:""}),(0,l.jsx)("div",{className:"text-[14px] font-medium leading-[14px] z-10 relative",children:"Total Points"}),(0,l.jsxs)("div",{className:"text-2xl font-bold mt-[27px] relative z-10",children:[formatNumber(s.totalPoint)," ",(0,l.jsxs)("span",{className:"text-base",children:["+",100*s.boostPercent,"% boost from Quests"]})]})]})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full h-full bg-white shadow-sm border border-[#E4E4E7] rounded-[16px]  p-4 md:p-6 md:col-span-2 dark:bg-transparent dark:border-zinc-600",children:[(0,l.jsx)("div",{className:"text-gray-700 dark:text-slate-50 text-sm md:text-lg font-semibold flex items-center leading-[24px] tracking-tight",children:"DeFi Integrations"}),(0,l.jsx)("div",{className:"flex-1 overflow-x-auto w-full mt-2 md:mt-4",children:(0,l.jsx)(i.ZP,{header:["Protocol","Pool","TVL","My Share",(0,l.jsxs)("div",{className:"flex items-center gap-1",children:["Boost",(0,l.jsx)(d.C,{inFlex:!0,children:"Wand assets in DeFi Pool obtain more Wand Points."})]},"boost")],data:N,empty:(0,l.jsx)("tr",{className:"text-lg font-normal text-center text-black dark:text-slate-50/70",children:(0,l.jsx)("td",{colSpan:100,className:"h-[100px] text-sm py-5 align-top",children:"Coming Soon"})})})})]})]}),(0,l.jsx)(SectionTitle,{className:"mt-10 hidden",title:"Leaderboard"}),(0,l.jsxs)("div",{className:"p-4 md:p-6 bg-white h-auto shadow-sm border-1 border-[#E4E4E7] rounded-[16px] overflow-x-auto hidden",children:[(0,l.jsxs)("div",{ref:r,className:"flex flex-1 text-[14px] text-[#64748B] font-medium leading-[14px] mb-[30px] w-full min-w-[600px]",children:[(0,l.jsx)("div",{className:"w-1/12",children:"Rank"}),(0,l.jsx)("div",{className:"w-9/12",children:"User"}),(0,l.jsx)("div",{className:"w-2/12",children:"Points"})]}),(0,l.jsx)(H.aV,{width:Math.max(n,600),height:14,rowHeight:14,rowCount:c.length,rowRenderer:e=>{let{index:t}=e,s=c[t];return(0,l.jsxs)("div",{className:"flex flex-1 text-[14px] text-[#64748B] font-medium leading-[14px]",children:[(0,l.jsx)("div",{className:"w-1/12",children:t+1}),(0,l.jsx)("div",{className:"w-9/12",children:s.address}),(0,l.jsx)("div",{className:"w-2/12",children:s.total_point})]})},autoHeight:!0,className:"no-scrollbar"})]})]}),1===e&&(0,l.jsxs)("div",{className:"w-full py-4 md:py-0",children:[(0,l.jsx)("div",{className:"hidden md:flex w-full h-[58px] text-[#0F172A] text-sm md:text-2xl font-semibold items-center",children:"Quest"}),(0,l.jsxs)("div",{className:"grid col-start-1 col-span-1 md:grid-cols-2 gap-6",children:[(0,l.jsx)(QuestArea,{name:"Quest1",checked:1==s.glaxe,children:(0,l.jsxs)("div",{className:"h-full flex flex-col",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(V(),{src:"./galxe.png",alt:"galxe",width:120,height:120}),(0,l.jsx)("span",{className:"text-[18px] py-4 font-semibold leading-[18px] text-[#334155] dark:text-slate-50 ml-[20px]",children:"Participate in Blast Takeover Campaign"})]}),(0,l.jsx)("div",{className:"w-full cursor-pointer mt-auto text-center h-[40px] px-[16px] py-[8px] text-white bg-[#64738B] dark:text-black dark:bg-violet-300 rounded-[6px]",onClick:()=>window.open(A,"_blank"),children:"Go to the Page"})]})}),(0,l.jsx)(QuestArea,{name:"Quest2",checked:1==s.minted,children:(0,l.jsxs)("div",{className:"h-full flex flex-col",children:[(0,l.jsx)("div",{className:"flex flex-1 justify-center items-center",children:(0,l.jsx)("span",{className:"text-[18px] text-center font-semibold leading-[18px] text-[#334155] dark:text-slate-50",children:"Deposit at least 0.2 ETH into the ETH Vault"})}),(0,l.jsx)("div",{className:"w-full h-[40px] flex gap-5",children:(0,l.jsx)("div",{className:"cursor-pointer bg-[#64738B] dark:bg-violet-300 flex-1 h-full rounded-[6px] px-5 py-2 text-center text-white dark:text-black",onClick:()=>h.push("/vaults"),children:"Start"})})]})})]}),(0,l.jsx)("div",{className:"w-full flex justify-center items-center text-sm font-medium my-[40px] text-[#64738B]",children:"Stay tuned, more quests are on the way."})]}),2===e&&(0,l.jsx)(InvitePage,{})]}):null}function InvitePage(){let{inviteCodes:e}=W(),t=(0,p.useMemo)(()=>e.find(e=>e.permanent>0),[e]),s=(0,p.useMemo)(()=>t?[t]:e.filter(e=>0==e.permanent).slice(0,5),[e,t]),{address:a}=(0,v.m)(),{value:i=[]}=(0,S.Z)(o.dH,[a]),{copyTextToClipboard:r}=hooks_useCopy(),n=(0,M.useRouter)(),inviteUrl=()=>{let e="develop"===c.O?"http://127.0.0.1:3000/early":"test"===c.O?"https://test.".concat(F.Kh.value,"/early"):"https://".concat(F.Kh.value,"/early");return e+"?code="+(null==t?void 0:t.code)},[d,{width:x}]=(0,B.Z)();return(0,l.jsxs)("div",{className:"flex-1 md:w-0",children:[(0,l.jsx)(SectionTitle,{title:"Invites"}),(0,l.jsx)("div",{className:"my-4 md:mt-5 md:mb-[50px] text-[14px] leading-[14px] font-medium text-[#64748B] dark:text-slate-50/60",children:"You get +10% bonus points when invitees earn points"}),(0,l.jsx)(SectionTitle,{className:"mt-5",title:"Referral Invite Link"}),!t&&(0,l.jsxs)("div",{className:"w-full relative h-[200px] md:h-[150px] p-4 md:p-6 bg-[#EDF2FF] text-indigo-500 dark:text-white dark:bg-s1  shadow-sm rounded-[16px]",children:[(0,l.jsxs)("div",{className:"text-lg font-semibold leading-[24px] mt-[26px]",children:["Activation requires a minimum deposit of 2 ETH"," "]}),(0,l.jsxs)("div",{className:"cursor-pointer text-[14px] font-semibold leading-[14px] mt-[20px] flex items-center",onClick:()=>n.push("/vaults"),children:["Deposit Now",(0,l.jsx)("div",{className:"ml-[10px]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"8",viewBox:"0 0 17 8",children:(0,l.jsx)("path",{d:"M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM1 4.5H16V3.5H1V4.5Z",fill:"currentColor"})})})]}),(0,l.jsx)(V(),{src:"./gift.png",width:120,height:120,alt:"gift",className:"absolute right-[46px] bottom-0"}),(0,l.jsx)(V(),{src:"./coin.png",width:60,height:60,alt:"coin",className:"absolute right-6 -bottom-4"})]}),t&&(0,l.jsxs)("div",{className:"w-full flex flex-col md:flex-row justify-between gap-4",children:[(0,l.jsx)("div",{className:"flex-1 pl-[30px] text-indigo-500 dark:text-violet-300 text-[18px] p-4 bg-[#EDF2FF] border border-[#E4E4E7] rounded-[12px] flex items-center",children:inviteUrl()}),(0,l.jsx)("div",{className:"w-full md:w-fit text-[#FFFFFF] text-[18px] p-3 rounded-[12px] bg-[#64738B] flex items-center justify-center cursor-pointer",onClick:()=>r(inviteUrl()),children:"COPY"})]}),(0,l.jsx)(SectionTitle,{className:"mt-5",title:t?"Invite code":"One-time invite code"}),(0,l.jsx)("div",{className:"w-full grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 md:gap-6",children:s.map((e,t)=>(0,l.jsx)(InviteCodeBox,{code:e.code,avaliable:e.permanent>0||0==e.used},t))}),(0,l.jsxs)("div",{className:"py-[24px] h-auto mb-[20px] overflow-x-auto",children:[(0,l.jsxs)("div",{ref:d,className:"flex flex-1 justify-between text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[14px] mb-[30px] w-full min-w-[600px]",children:[(0,l.jsx)("div",{className:"w-4/12",children:"Invitees"}),(0,l.jsx)("div",{className:"w-4/12",children:"Points"}),(0,l.jsx)("div",{className:"w-4/12 text-right",children:"Date of Invitation"})]}),(0,l.jsx)(H.aV,{width:Math.max(x,600),height:44*Math.min(50,i.length+1),rowHeight:44,rowCount:i.length,rowRenderer:e=>{if(!i)return null;let{index:t}=e,s=i[t];return(0,l.jsxs)("div",{className:"flex flex-1 justify-between text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[14px] mb-[30px]",children:[(0,l.jsx)("div",{className:"w-4/12",children:(0,w.lS)(s.address)}),(0,l.jsx)("div",{className:"w-4/12",children:formatNumber(s.total_point)}),(0,l.jsx)("div",{className:"w-4/12 text-right",children:(0,w.d3)(s.invite_time)})]})},autoHeight:!0,className:"no-scrollbar"})]})]})}function InviteCodeBox(e){let{code:t,avaliable:s}=e,{copyTextToClipboard:a}=hooks_useCopy(),{reInviteCode:i}=W(),[r,d]=(0,p.useState)(!1),o=(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"104",height:"8",viewBox:"0 0 104 8",fill:"currentColor",children:[(0,l.jsx)("path",{d:"M10.7045 7.13761C11.1318 7.13761 11.4167 6.95955 11.4167 6.69246V0.445151C11.4167 0.17806 11.1318 0 10.7045 0C10.2771 0 9.99222 0.17806 9.99222 0.445151V6.69029C9.99222 6.95738 10.2771 7.13761 10.7045 7.13761ZM3.56815 7.13761H4.99611C5.42346 7.13761 5.70835 6.95955 5.70835 6.69246V0.445151C5.70835 0.17806 5.42346 0 4.99611 0H3.56815C3.14081 0 2.85591 0.17806 2.85591 0.445151V6.69029C2.85591 6.95738 3.14081 7.13761 3.56815 7.13761ZM7.84855 7.13761C8.2759 7.13761 8.56079 6.95955 8.56079 6.69246V0.445151C8.56079 0.17806 8.2759 0 7.84855 0C7.42121 0 7.13631 0.17806 7.13631 0.445151V6.69029C7.13631 6.95738 7.42121 7.13761 7.84855 7.13761ZM13.5604 7.13761H14.9883C15.4157 7.13761 15.7006 6.95955 15.7006 6.69246V0.445151C15.7006 0.17806 15.4157 0 14.9883 0H13.5604C13.133 0 12.8481 0.17806 12.8481 0.445151V6.69029C12.8447 6.95738 13.1296 7.13761 13.5604 7.13761ZM17.8408 0C17.4134 0 17.1285 0.17806 17.1285 0.445151V6.69029C17.1285 6.95738 17.4134 7.13544 17.8408 7.13544C18.2681 7.13544 18.553 6.95738 18.553 6.69029V0.445151C18.5565 0.17806 18.2681 0 17.8408 0ZM0.712241 7.13761C1.13959 7.13761 1.42448 6.95955 1.42448 6.69246V0.445151C1.42448 0.17806 1.13959 0 0.712241 0C0.284896 0 0 0.17806 0 0.445151V6.69029C0 6.95738 0.284896 7.13761 0.712241 7.13761Z"}),(0,l.jsx)("path",{d:"M30.6896 7.13761C31.1169 7.13761 31.4018 6.95955 31.4018 6.69246V0.445151C31.4018 0.17806 31.1169 0 30.6896 0C30.2622 0 29.9773 0.17806 29.9773 0.445151V6.69029C29.9773 6.95738 30.2622 7.13761 30.6896 7.13761ZM23.5533 7.13761H24.9812C25.4086 7.13761 25.6935 6.95955 25.6935 6.69246V0.445151C25.6935 0.17806 25.4086 0 24.9812 0H23.5533C23.1259 0 22.841 0.17806 22.841 0.445151V6.69029C22.841 6.95738 23.1259 7.13761 23.5533 7.13761ZM27.8337 7.13761C28.261 7.13761 28.5459 6.95955 28.5459 6.69246V0.445151C28.5459 0.17806 28.261 0 27.8337 0C27.4063 0 27.1214 0.17806 27.1214 0.445151V6.69029C27.1214 6.95738 27.4063 7.13761 27.8337 7.13761ZM33.5455 7.13761H34.9734C35.4008 7.13761 35.6857 6.95955 35.6857 6.69246V0.445151C35.6857 0.17806 35.4008 0 34.9734 0H33.5455C33.1181 0 32.8332 0.17806 32.8332 0.445151V6.69029C32.8298 6.95738 33.1147 7.13761 33.5455 7.13761ZM37.8259 0C37.3985 0 37.1136 0.17806 37.1136 0.445151V6.69029C37.1136 6.95738 37.3985 7.13544 37.8259 7.13544C38.2532 7.13544 38.5381 6.95738 38.5381 6.69029V0.445151C38.5416 0.17806 38.2532 0 37.8259 0ZM20.6973 7.13761C21.1247 7.13761 21.4096 6.95955 21.4096 6.69246V0.445151C21.4096 0.17806 21.1247 0 20.6973 0C20.27 0 19.9851 0.17806 19.9851 0.445151V6.69029C19.9851 6.95738 20.27 7.13761 20.6973 7.13761Z"}),(0,l.jsx)("path",{d:"M50.6752 7.13761C51.1025 7.13761 51.3874 6.95955 51.3874 6.69246V0.445151C51.3874 0.17806 51.1025 0 50.6752 0C50.2478 0 49.9629 0.17806 49.9629 0.445151V6.69029C49.9629 6.95738 50.2478 7.13761 50.6752 7.13761ZM43.5389 7.13761H44.9668C45.3942 7.13761 45.6791 6.95955 45.6791 6.69246V0.445151C45.6791 0.17806 45.3942 0 44.9668 0H43.5389C43.1115 0 42.8266 0.17806 42.8266 0.445151V6.69029C42.8266 6.95738 43.1115 7.13761 43.5389 7.13761ZM47.8193 7.13761C48.2466 7.13761 48.5315 6.95955 48.5315 6.69246V0.445151C48.5315 0.17806 48.2466 0 47.8193 0C47.3919 0 47.107 0.17806 47.107 0.445151V6.69029C47.107 6.95738 47.3919 7.13761 47.8193 7.13761ZM53.5311 7.13761H54.959C55.3864 7.13761 55.6713 6.95955 55.6713 6.69246V0.445151C55.6713 0.17806 55.3864 0 54.959 0H53.5311C53.1037 0 52.8188 0.17806 52.8188 0.445151V6.69029C52.8154 6.95738 53.1003 7.13761 53.5311 7.13761ZM57.8115 0C57.3841 0 57.0992 0.17806 57.0992 0.445151V6.69029C57.0992 6.95738 57.3841 7.13544 57.8115 7.13544C58.2388 7.13544 58.5237 6.95738 58.5237 6.69029V0.445151C58.5272 0.17806 58.2388 0 57.8115 0ZM40.6829 7.13761C41.1103 7.13761 41.3952 6.95955 41.3952 6.69246V0.445151C41.3952 0.17806 41.1103 0 40.6829 0C40.2556 0 39.9707 0.17806 39.9707 0.445151V6.69029C39.9707 6.95738 40.2556 7.13761 40.6829 7.13761Z"}),(0,l.jsx)("path",{d:"M83.3029 7.13761C83.7302 7.13761 84.0151 6.95955 84.0151 6.69246V0.445151C84.0151 0.17806 83.7302 0 83.3029 0C82.8755 0 82.5906 0.17806 82.5906 0.445151V6.69029C82.5906 6.95738 82.8755 7.13761 83.3029 7.13761ZM76.1665 7.13761H77.5945C78.0218 7.13761 78.3067 6.95955 78.3067 6.69246V0.445151C78.3067 0.17806 78.0218 0 77.5945 0H76.1665C75.7392 0 75.4543 0.17806 75.4543 0.445151V6.69029C75.4543 6.95738 75.7392 7.13761 76.1665 7.13761ZM80.4469 7.13761C80.8743 7.13761 81.1592 6.95955 81.1592 6.69246V0.445151C81.1592 0.17806 80.8743 0 80.4469 0C80.0196 0 79.7347 0.17806 79.7347 0.445151V6.69029C79.7347 6.95738 80.0196 7.13761 80.4469 7.13761ZM86.1588 7.13761H87.5867C88.0141 7.13761 88.299 6.95955 88.299 6.69246V0.445151C88.299 0.17806 88.0141 0 87.5867 0H86.1588C85.7314 0 85.4465 0.17806 85.4465 0.445151V6.69029C85.443 6.95738 85.7279 7.13761 86.1588 7.13761ZM90.4392 0C90.0118 0 89.7269 0.17806 89.7269 0.445151V6.69029C89.7269 6.95738 90.0118 7.13544 90.4392 7.13544C90.8665 7.13544 91.1514 6.95738 91.1514 6.69029V0.445151C91.1549 0.17806 90.8665 0 90.4392 0ZM73.3106 7.13761C73.738 7.13761 74.0229 6.95955 74.0229 6.69246V0.445151C74.0229 0.17806 73.738 0 73.3106 0C72.8833 0 72.5984 0.17806 72.5984 0.445151V6.69029C72.5984 6.95738 72.8833 7.13761 73.3106 7.13761Z"}),(0,l.jsx)("path",{d:"M70.6603 7.13761C71.0876 7.13761 71.3725 6.95955 71.3725 6.69246V0.445151C71.3725 0.17806 71.0876 0 70.6603 0C70.2329 0 69.948 0.17806 69.948 0.445151V6.69029C69.948 6.95738 70.2329 7.13761 70.6603 7.13761ZM63.524 7.13761H64.9519C65.3793 7.13761 65.6642 6.95955 65.6642 6.69246V0.445151C65.6642 0.17806 65.3793 0 64.9519 0H63.524C63.0966 0 62.8117 0.17806 62.8117 0.445151V6.69029C62.8117 6.95738 63.0966 7.13761 63.524 7.13761ZM67.8044 7.13761C68.2317 7.13761 68.5166 6.95955 68.5166 6.69246V0.445151C68.5166 0.17806 68.2317 0 67.8044 0C67.377 0 67.0921 0.17806 67.0921 0.445151V6.69029C67.0921 6.95738 67.377 7.13761 67.8044 7.13761ZM60.6681 7.13761C61.0954 7.13761 61.3803 6.95955 61.3803 6.69246V0.445151C61.3803 0.17806 61.0954 0 60.6681 0C60.2407 0 59.9558 0.17806 59.9558 0.445151V6.69029C59.9558 6.95738 60.2407 7.13761 60.6681 7.13761Z"}),(0,l.jsx)("path",{d:"M103.287 7.13761C103.715 7.13761 104 6.95955 104 6.69246V0.445151C104 0.17806 103.715 0 103.287 0C102.86 0 102.575 0.17806 102.575 0.445151V6.69029C102.575 6.95738 102.86 7.13761 103.287 7.13761ZM96.1512 7.13761H97.5791C98.0065 7.13761 98.2914 6.95955 98.2914 6.69246V0.445151C98.2914 0.17806 98.0065 0 97.5791 0H96.1512C95.7238 0 95.4389 0.17806 95.4389 0.445151V6.69029C95.4389 6.95738 95.7238 7.13761 96.1512 7.13761ZM100.432 7.13761C100.859 7.13761 101.144 6.95955 101.144 6.69246V0.445151C101.144 0.17806 100.859 0 100.432 0C100.004 0 99.7193 0.17806 99.7193 0.445151V6.69029C99.7193 6.95738 100.004 7.13761 100.432 7.13761ZM93.2952 7.13761C93.7226 7.13761 94.0075 6.95955 94.0075 6.69246V0.445151C94.0075 0.17806 93.7226 0 93.2952 0C92.8679 0 92.583 0.17806 92.583 0.445151V6.69029C92.583 6.95738 92.8679 7.13761 93.2952 7.13761Z"})]});return(0,l.jsxs)("div",{className:"h-[242px] ",children:[(0,l.jsxs)("div",{className:(0,w.cn)("w-full relative h-[182px] mb-[20px] rounded-[10px] border-[1px] border-indigo-500 bg-indigo-500 dark:bg-s2 dark:border-violet-300",{"opacity-50":!s}),children:[(0,l.jsxs)("div",{className:"w-full h-[182px] flex flex-col justify-center items-center text-white dark:text-black",children:[(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)("div",{className:(0,w.cn)("text-[32px] leading-[32px] font-semibold relative bottom-[15px] "),children:t})}),(0,l.jsx)("div",{children:o})]}),(0,l.jsxs)("div",{className:"w-full absolute bottom-0 h-[42px] bg-white dark:bg-slate-950 flex justify-center items-center font-medium text-[12px] leading-[12px] rounded-b-[10px]",children:[(0,l.jsx)("span",{className:s?"#6466F1":"#64748B"}),s?"Avaliable":"Used"]})]}),(0,l.jsxs)("div",{className:(0,w.cn)("w-full flex justify-center items-center h-[40px] rounded-[6px] bg-[#64738B] dark:bg-violet-300 text-white dark:text-black font-medium text-[14px] leading-[14px] cursor-pointer"),onClick:()=>{s?a(t):r||(d(!0),i().catch(w.S3).finally(()=>d(!1)))},children:[r&&(0,l.jsx)(n.$,{}),s?"Copy":"Refresh"]})]})}function QuestArea(e){let{name:t,checked:s,children:a}=e,i=(0,D.l)(e=>"dark"==e.theme),r=(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_1_648)",children:[(0,l.jsx)("path",{d:"M0 0H25.6C29.12 0 32 2.88 32 6.4V32C14.4 32 0 17.6 0 0Z",fill:i?"#c4b5fd":"#6466F1"}),(0,l.jsx)("path",{d:"M16.8 15.84L24 8.8C24.48 8.32 25.28 8.32 25.76 8.8C26.24 9.28 26.24 10.08 25.76 10.56L17.76 18.56C17.28 19.04 16.48 19.04 16 18.56L12 14.4C11.52 13.92 11.52 13.28 12 12.8C12.48 12.32 13.28 12.32 13.76 12.8L16.8 15.84Z",fill:"white"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1_648",children:(0,l.jsx)("rect",{width:"32",height:"32",fill:"white"})})})]}),n=(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[(0,l.jsxs)("g",{opacity:"0.3",clipPath:"url(#clip0_1_691)",children:[(0,l.jsx)("path",{d:"M0 0H25.6C29.12 0 32 2.88 32 6.4V32C14.4 32 0 17.6 0 0Z",fill:"#64738B"}),(0,l.jsx)("path",{d:"M16.8 15.84L24 8.8C24.48 8.32 25.28 8.32 25.76 8.8C26.24 9.28 26.24 10.08 25.76 10.56L17.76 18.56C17.28 19.04 16.48 19.04 16 18.56L12 14.4C11.52 13.92 11.52 13.28 12 12.8C12.48 12.32 13.28 12.32 13.76 12.8L16.8 15.84Z",fill:"white"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1_691",children:(0,l.jsx)("rect",{width:"32",height:"32",fill:"white"})})})]});return(0,l.jsxs)("div",{className:"relative p-6 pt-[54px] bg-white w-max-[537px] h-[296px] shadow-sm border border-[#E4E4E7] dark:border-zinc-600 dark:bg-transparent rounded-[16px]",children:[(0,l.jsx)("div",{className:"absolute top-0 left-0 w-[100px] h-[30px] md:h-[36px] rounded-tl-[16px] rounded-br-[16px] border-indigo-500 border-[1px] text-base md:text-lg text-indigo-500 dark:text-violet-300 dark:border-violet-300 font-semibold leading-[18px] flex justify-center items-center",children:t}),(0,l.jsx)("div",{className:"absolute top-0 right-0 ",children:s?r:n}),(0,l.jsx)("div",{className:"absolute top-2 right-10 text-xs md:text-sm font-[500] text-[#000000]",children:"Updates every 24 hours"}),a]})}},35664:function(e,t,s){"use strict";s.d(t,{Z:function(){return ConnectBtn}});var l=s(31113),a=s(3367),i=s(44726),r=s(41440);function ConnectBtn(){let e=(0,i.Z)(1024),{isConnected:t}=(0,r.m)(),s=(0,a.We)();return t?(0,l.jsx)(a.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1}):(0,l.jsx)("button",{className:"btn-primary mt-0 w-fit",onClick:()=>{var e;return null===(e=s.openConnectModal)||void 0===e?void 0:e.call(s)},children:(0,l.jsx)("span",{className:"text-white font-medium text-sm px-5",children:"Connect Wallet"})})}},12045:function(e,t,s){"use strict";s.d(t,{h:function(){return ThemeMode},l:function(){return o}});var l=s(31113),a=s(26361),i=s(64103),r=s(55746),n=s(48338),d=s(2987);let getThemeState=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},o=(0,n.Ue)(e=>({...getThemeState(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))})),c={light:(0,l.jsx)(r.EWX,{}),dark:(0,l.jsx)(r.Dq,{}),system:(0,l.jsx)(r.pUp,{})};function ThemeMode(){let e=o(),onChangeTheme=()=>{let{theme:t,themeMode:s}=getThemeState();e.setTheme(t),e.setThemeMode(s)};(0,i.useEffect)(()=>{onChangeTheme()},[]);let onClick=e=>{"System"==e?localStorage.removeItem("theme"):localStorage.theme=e.toLocaleLowerCase(),onChangeTheme()};return(0,l.jsx)(d.o,{className:"max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white",trigger:(0,l.jsx)("div",{className:"text-xl",children:c[e.theme]}),children:["Light","Dark","System"].map((t,s)=>(0,l.jsxs)("div",{className:(0,a.cn)("flex px-5 items-center py-2 gap-3 cursor-pointer",{"bg-stone-100 dark:bg-zinc-700":t.toLowerCase()==e.themeMode}),onClick:()=>onClick(t),children:[(0,l.jsx)("div",{className:"text-2xl",children:c[t.toLowerCase()]}),(0,l.jsx)("span",{className:"",children:t})]},"theme_mode_"+t))})}},6371:function(e,t,s){"use strict";s.d(t,{C:function(){return Tip}});var l=s(31113),a=s(26361),i=s(52653),r=s(55966);function Tip(e){let{children:t,node:s,className:n,inFlex:d}=e,o=document.getElementById("tooltip-root");return t?(0,l.jsx)(i.zt,{children:(0,l.jsxs)(i.fC,{children:[(0,l.jsx)(i.xz,{asChild:!0,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},children:s?(0,l.jsx)("div",{className:(0,a.cn)("inline-block cursor-default",n),style:{verticalAlign:"text-bottom"},children:s}):(0,l.jsx)("div",{className:(0,a.cn)(d?"flex":"translate-y-[-6%] inline-block"," px-[3px] cursor-default relative",n),children:(0,l.jsx)(r.apP,{className:"inline-block stroke-slate-500"})})}),(0,l.jsx)(i.h_,{container:o,children:(0,l.jsxs)(i.VY,{className:"max-w-xs text-sm text-white bg-slate-900 shadow-lg dark:bg-[#333333] rounded-md p-4",children:[t,(0,l.jsx)(i.Eh,{})]})})]})}):s}}},function(e){e.O(0,[7495,4881,7622,2466,3458,3113,8548,8836,8193,283,9738,9562,2653,1690,2837,1578,8544,553,7093,604,1744],function(){return e(e.s=68766)}),_N_E=e.O()}]);