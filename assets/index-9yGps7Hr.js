import{S as zc,p as co,r as Jt,s as Zs,a as tr,n as Js,i as $s,b as uo,t as Gc,c as pr,f as Hc,d as kc,e as ho,g as Bl,h as gt,j as Vc,u as jc,k as Fl,l as Wc,m as Vr,o as It,q as Xc,v as u,w as nr,L as Yc}from"./index-Bm_lo4nr.js";var Qc=class extends zc{constructor(t,e){super(),this.options=e,this.#n=t,this.#r=null,this.#i=co(),this.bindMethods(),this.setOptions(e)}#n;#e=void 0;#p=void 0;#t=void 0;#a;#u;#i;#r;#m;#h;#f;#o;#l;#s;#d=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),fo(this.#e,this.options)?this.#c():this.updateResult(),this.#_())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ea(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ea(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#C(),this.#A(),this.#e.removeObserver(this)}setOptions(t){const e=this.options,n=this.#e;if(this.options=this.#n.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Jt(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#S(),this.#e.setOptions(this.options),e._defaulted&&!Zs(this.options,e)&&this.#n.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const i=this.hasListeners();i&&po(this.#e,n,this.options,e)&&this.#c(),this.updateResult(),i&&(this.#e!==n||Jt(this.options.enabled,this.#e)!==Jt(e.enabled,this.#e)||tr(this.options.staleTime,this.#e)!==tr(e.staleTime,this.#e))&&this.#g();const r=this.#v();i&&(this.#e!==n||Jt(this.options.enabled,this.#e)!==Jt(e.enabled,this.#e)||r!==this.#s)&&this.#x(r)}getOptimisticResult(t){const e=this.#n.getQueryCache().build(this.#n,t),n=this.createResult(e,t);return Kc(this,n)&&(this.#t=n,this.#u=this.options,this.#a=this.#e.state),n}getCurrentResult(){return this.#t}trackResult(t,e){return new Proxy(t,{get:(n,i)=>(this.trackProp(i),e?.(i),i==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#i.status==="pending"&&this.#i.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(n,i))})}trackProp(t){this.#d.add(t)}getCurrentQuery(){return this.#e}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#n.defaultQueryOptions(t),n=this.#n.getQueryCache().build(this.#n,e);return n.fetch().then(()=>this.createResult(n,e))}fetch(t){return this.#c({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#c(t){this.#S();let e=this.#e.fetch(this.options,t);return t?.throwOnError||(e=e.catch(Js)),e}#g(){this.#C();const t=tr(this.options.staleTime,this.#e);if($s||this.#t.isStale||!uo(t))return;const n=Gc(this.#t.dataUpdatedAt,t)+1;this.#o=pr.setTimeout(()=>{this.#t.isStale||this.updateResult()},n)}#v(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#x(t){this.#A(),this.#s=t,!($s||Jt(this.options.enabled,this.#e)===!1||!uo(this.#s)||this.#s===0)&&(this.#l=pr.setInterval(()=>{(this.options.refetchIntervalInBackground||Hc.isFocused())&&this.#c()},this.#s))}#_(){this.#g(),this.#x(this.#v())}#C(){this.#o&&(pr.clearTimeout(this.#o),this.#o=void 0)}#A(){this.#l&&(pr.clearInterval(this.#l),this.#l=void 0)}createResult(t,e){const n=this.#e,i=this.options,r=this.#t,s=this.#a,a=this.#u,l=t!==n?t.state:this.#p,{state:c}=t;let h={...c},f=!1,d;if(e._optimisticResults){const I=this.hasListeners(),S=!I&&fo(t,e),C=I&&po(t,n,e,i);(S||C)&&(h={...h,...kc(c.data,t.options)}),e._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:p,errorUpdatedAt:v,status:x}=h;d=h.data;let g=!1;if(e.placeholderData!==void 0&&d===void 0&&x==="pending"){let I;r?.isPlaceholderData&&e.placeholderData===a?.placeholderData?(I=r.data,g=!0):I=typeof e.placeholderData=="function"?e.placeholderData(this.#f?.state.data,this.#f):e.placeholderData,I!==void 0&&(x="success",d=ho(r?.data,I,e),f=!0)}if(e.select&&d!==void 0&&!g)if(r&&d===s?.data&&e.select===this.#m)d=this.#h;else try{this.#m=e.select,d=e.select(d),d=ho(r?.data,d,e),this.#h=d,this.#r=null}catch(I){this.#r=I}this.#r&&(p=this.#r,d=this.#h,v=Date.now(),x="error");const m=h.fetchStatus==="fetching",y=x==="pending",_=x==="error",E=y&&m,F=d!==void 0,T={status:x,fetchStatus:h.fetchStatus,isPending:y,isSuccess:x==="success",isError:_,isInitialLoading:E,isLoading:E,data:d,dataUpdatedAt:h.dataUpdatedAt,error:p,errorUpdatedAt:v,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>l.dataUpdateCount||h.errorUpdateCount>l.errorUpdateCount,isFetching:m,isRefetching:m&&!y,isLoadingError:_&&!F,isPaused:h.fetchStatus==="paused",isPlaceholderData:f,isRefetchError:_&&F,isStale:Va(t,e),refetch:this.refetch,promise:this.#i,isEnabled:Jt(e.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const I=D=>{T.status==="error"?D.reject(T.error):T.data!==void 0&&D.resolve(T.data)},S=()=>{const D=this.#i=T.promise=co();I(D)},C=this.#i;switch(C.status){case"pending":t.queryHash===n.queryHash&&I(C);break;case"fulfilled":(T.status==="error"||T.data!==C.value)&&S();break;case"rejected":(T.status!=="error"||T.error!==C.reason)&&S();break}}return T}updateResult(){const t=this.#t,e=this.createResult(this.#e,this.options);if(this.#a=this.#e.state,this.#u=this.options,this.#a.data!==void 0&&(this.#f=this.#e),Zs(e,t))return;this.#t=e;const n=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options,r=typeof i=="function"?i():i;if(r==="all"||!r&&!this.#d.size)return!0;const s=new Set(r??this.#d);return this.options.throwOnError&&s.add("error"),Object.keys(this.#t).some(a=>{const o=a;return this.#t[o]!==t[o]&&s.has(o)})};this.#M({listeners:n()})}#S(){const t=this.#n.getQueryCache().build(this.#n,this.options);if(t===this.#e)return;const e=this.#e;this.#e=t,this.#p=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#_()}#M(t){Bl.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#t)}),this.#n.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function qc(t,e){return Jt(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function fo(t,e){return qc(t,e)||t.state.data!==void 0&&ea(t,e,e.refetchOnMount)}function ea(t,e,n){if(Jt(e.enabled,t)!==!1&&tr(e.staleTime,t)!=="static"){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Va(t,e)}return!1}function po(t,e,n,i){return(t!==e||Jt(i.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&Va(t,n)}function Va(t,e){return Jt(e.enabled,t)!==!1&&t.isStaleByTime(tr(e.staleTime,t))}function Kc(t,e){return!Zs(t.getCurrentResult(),e)}var Ol=gt.createContext(!1),Zc=()=>gt.useContext(Ol);Ol.Provider;function Jc(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var $c=gt.createContext(Jc()),e2=()=>gt.useContext($c),t2=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},n2=t=>{gt.useEffect(()=>{t.clearReset()},[t])},i2=({result:t,errorResetBoundary:e,throwOnError:n,query:i,suspense:r})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&(r&&t.data===void 0||Vc(n,[t.error,i])),r2=t=>{if(t.suspense){const n=r=>r==="static"?r:Math.max(r??1e3,1e3),i=t.staleTime;t.staleTime=typeof i=="function"?(...r)=>n(i(...r)):n(i),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},s2=(t,e)=>t.isLoading&&t.isFetching&&!e,a2=(t,e)=>t?.suspense&&e.isPending,mo=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function o2(t,e,n){const i=Zc(),r=e2(),s=jc(),a=s.defaultQueryOptions(t);s.getDefaultOptions().queries?._experimental_beforeQuery?.(a),a._optimisticResults=i?"isRestoring":"optimistic",r2(a),t2(a,r),n2(r);const o=!s.getQueryCache().get(a.queryHash),[l]=gt.useState(()=>new e(s,a)),c=l.getOptimisticResult(a),h=!i&&t.subscribed!==!1;if(gt.useSyncExternalStore(gt.useCallback(f=>{const d=h?l.subscribe(Bl.batchCalls(f)):Js;return l.updateResult(),d},[l,h]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),gt.useEffect(()=>{l.setOptions(a)},[a,l]),a2(a,c))throw mo(a,l,r);if(i2({result:c,errorResetBoundary:r,throwOnError:a.throwOnError,query:s.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw c.error;return s.getDefaultOptions().queries?._experimental_afterQuery?.(a,c),a.experimental_prefetchInRender&&!$s&&s2(c,i)&&(o?mo(a,l,r):s.getQueryCache().get(a.queryHash)?.promise)?.catch(Js).finally(()=>{l.updateResult()}),a.notifyOnChangeProps?c:l.trackResult(c)}function l2(t,e){return o2(t,Qc)}var c2=Fl?gt.useLayoutEffect:gt.useEffect,Nl={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function u2(){var t=gt.useState(null),e=t[0],n=t[1],i=gt.useState(Nl),r=i[0],s=i[1],a=gt.useMemo(function(){return new window.ResizeObserver(function(o){if(o[0]){var l=o[0].contentRect,c=l.x,h=l.y,f=l.width,d=l.height,p=l.top,v=l.left,x=l.bottom,g=l.right;s({x:c,y:h,width:f,height:d,top:p,left:v,bottom:x,right:g})}})},[]);return c2(function(){if(e)return a.observe(e),function(){a.disconnect()}},[e]),[n,r]}const h2=Fl&&typeof window.ResizeObserver<"u"?u2:(function(){return[Wc,Nl]});var f2=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,d2=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,p2=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,m2=/(^[#\.][a-z]|[a-y][a-z])/i,g2=Math.PI/180,v2=180/Math.PI,mr=Math.sin,gr=Math.cos,Xt=Math.abs,vn=Math.sqrt,x2=Math.atan2,ta=1e8,go=function(e){return typeof e=="string"},zl=function(e){return typeof e=="number"},_2=function(e){return typeof e>"u"},C2={},A2={},Jr=1e5,Gl=function(e){return Math.round((e+ta)%1*Jr)/Jr||(e<0?0:1)},qe=function(e){return Math.round(e*Jr)/Jr||0},vo=function(e){return Math.round(e*1e10)/1e10||0},xo=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001},_o=function(e,n,i,r){var s=e[n],a=r===1?6:na(s,i,r);if((a||!r)&&a+i+2<s.length)return e.splice(n,0,s.slice(0,i+a+2)),s.splice(0,i+a),1},Hl=function(e,n,i){var r=e.length,s=~~(i*r);if(e[s]>n){for(;--s&&e[s]>n;);s<0&&(s=0)}else for(;e[++s]<n&&s<r;);return s<r?s:r-1},S2=function(e,n){var i=e.length;for(e.reverse();i--;)e[i].reversed||E2(e[i])},Co=function(e,n){return n.totalLength=e.totalLength,e.samples?(n.samples=e.samples.slice(0),n.lookup=e.lookup.slice(0),n.minLength=e.minLength,n.resolution=e.resolution):e.totalPoints&&(n.totalPoints=e.totalPoints),n},M2=function(e,n){var i=e.length,r=e[i-1]||[],s=r.length;i&&n[0]===r[s-2]&&n[1]===r[s-1]&&(n=r.concat(n.slice(2)),i--),e[i]=n};function jr(t){t=go(t)&&m2.test(t)&&document.querySelector(t)||t;var e=t.getAttribute?t:0,n;return e&&(t=t.getAttribute("d"))?(e._gsPath||(e._gsPath={}),n=e._gsPath[t],n&&!n._dirty?n:e._gsPath[t]=$r(t)):t?go(t)?$r(t):zl(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function y2(t){for(var e=[],n=0;n<t.length;n++)e[n]=Co(t[n],t[n].slice(0));return Co(t,e)}function E2(t){var e=0,n;for(t.reverse();e<t.length;e+=2)n=t[e],t[e]=t[e+1],t[e+1]=n;t.reversed=!t.reversed}var w2=function(e,n){var i=document.createElementNS("http://www.w3.org/2000/svg","path"),r=[].slice.call(e.attributes),s=r.length,a;for(n=","+n+",";--s>-1;)a=r[s].nodeName.toLowerCase(),n.indexOf(","+a+",")<0&&i.setAttributeNS(null,a,r[s].nodeValue);return i},T2={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},b2=function(e,n){for(var i=n?n.split(","):[],r={},s=i.length;--s>-1;)r[i[s]]=+e.getAttribute(i[s])||0;return r};function L2(t,e){var n=t.tagName.toLowerCase(),i=.552284749831,r,s,a,o,l,c,h,f,d,p,v,x,g,m,y,_,E,F,w,T,I,S;return n==="path"||!t.getBBox?t:(c=w2(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),S=b2(t,T2[n]),n==="rect"?(o=S.rx,l=S.ry||o,s=S.x,a=S.y,p=S.width-o*2,v=S.height-l*2,o||l?(x=s+o*(1-i),g=s+o,m=g+p,y=m+o*i,_=m+o,E=a+l*(1-i),F=a+l,w=F+v,T=w+l*i,I=w+l,r="M"+_+","+F+" V"+w+" C"+[_,T,y,I,m,I,m-(m-g)/3,I,g+(m-g)/3,I,g,I,x,I,s,T,s,w,s,w-(w-F)/3,s,F+(w-F)/3,s,F,s,E,x,a,g,a,g+(m-g)/3,a,m-(m-g)/3,a,m,a,y,a,_,E,_,F].join(",")+"z"):r="M"+(s+p)+","+a+" v"+v+" h"+-p+" v"+-v+" h"+p+"z"):n==="circle"||n==="ellipse"?(n==="circle"?(o=l=S.r,f=o*i):(o=S.rx,l=S.ry,f=l*i),s=S.cx,a=S.cy,h=o*i,r="M"+(s+o)+","+a+" C"+[s+o,a+f,s+h,a+l,s,a+l,s-h,a+l,s-o,a+f,s-o,a,s-o,a-f,s-h,a-l,s,a-l,s+h,a-l,s+o,a-f,s+o,a].join(",")+"z"):n==="line"?r="M"+S.x1+","+S.y1+" L"+S.x2+","+S.y2:(n==="polyline"||n==="polygon")&&(d=(t.getAttribute("points")+"").match(d2)||[],s=d.shift(),a=d.shift(),r="M"+s+","+a+" L"+d.join(","),n==="polygon"&&(r+=","+s+","+a+"z")),c.setAttribute("d",jl(c._gsRawPath=$r(r))),e&&t.parentNode&&(t.parentNode.insertBefore(c,t),t.parentNode.removeChild(t)),c)}function kl(t,e,n){var i=t[e],r=t[e+2],s=t[e+4],a;return i+=(r-i)*n,r+=(s-r)*n,i+=(r-i)*n,a=r+(s+(t[e+6]-s)*n-r)*n-i,i=t[e+1],r=t[e+3],s=t[e+5],i+=(r-i)*n,r+=(s-r)*n,i+=(r-i)*n,qe(x2(r+(s+(t[e+7]-s)*n-r)*n-i,a)*v2)}function Vl(t,e,n){n=_2(n)?1:vo(n)||0,e=vo(e)||0;var i=Math.max(0,~~(Xt(n-e)-1e-8)),r=y2(t);if(e>n&&(e=1-e,n=1-n,S2(r),r.totalLength=0),e<0||n<0){var s=Math.abs(~~Math.min(e,n))+1;e+=s,n+=s}r.totalLength||ti(r);var a=n>1,o=Ao(r,e,C2,!0),l=Ao(r,n,A2),c=l.segment,h=o.segment,f=l.segIndex,d=o.segIndex,p=l.i,v=o.i,x=d===f,g=p===v&&x,m,y,_,E,F,w,T,I;if(a||i){for(m=f<d||x&&p<v||g&&l.t<o.t,_o(r,d,v,o.t)&&(d++,m||(f++,g?(l.t=(l.t-o.t)/(1-o.t),p=0):x&&(p-=v))),Math.abs(1-(n-e))<1e-5?f=d-1:!l.t&&f?f--:_o(r,f,p,l.t)&&m&&d++,o.t===1&&(d=(d+1)%r.length),F=[],w=r.length,T=1+w*i,I=d,T+=(w-d+f)%w,E=0;E<T;E++)M2(F,r[I++%w]);r=F}else if(_=l.t===1?6:na(c,p,l.t),e!==n)for(y=na(h,v,g?o.t/l.t:o.t),x&&(_+=y),c.splice(p+_+2),(y||v)&&h.splice(0,v+y),E=r.length;E--;)(E<d||E>f)&&r.splice(E,1);else c.angle=kl(c,p+_,0),p+=_,o=c[p],l=c[p+1],c.length=c.totalLength=0,c.totalPoints=r.totalPoints=8,c.push(o,l,o,l,o,l,o,l);return r.totalLength=0,r}function R2(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var i=~~t.resolution||12,r=1/i,s=t.length,a=t[e],o=t[e+1],l=e?e/6*i:0,c=t.samples,h=t.lookup,f=(e?t.minLength:ta)||ta,d=c[l+n*i-1],p=e?c[l-1]:0,v,x,g,m,y,_,E,F,w,T,I,S,C,D,Y,k,z;for(c.length=h.length=0,x=e+2;x<s;x+=6){if(g=t[x+4]-a,m=t[x+2]-a,y=t[x]-a,F=t[x+5]-o,w=t[x+3]-o,T=t[x+1]-o,_=E=I=S=0,Xt(g)<.01&&Xt(F)<.01&&Xt(y)+Xt(T)<.01)t.length>8&&(t.splice(x,6),x-=6,s-=6);else for(v=1;v<=i;v++)D=r*v,C=1-D,_=E-(E=(D*D*g+3*C*(D*m+C*y))*D),I=S-(S=(D*D*F+3*C*(D*w+C*T))*D),k=vn(I*I+_*_),k<f&&(f=k),p+=k,c[l++]=p;a+=g,o+=F}if(d)for(d-=p;l<c.length;l++)c[l]+=d;if(c.length&&f){if(t.totalLength=z=c[c.length-1]||0,t.minLength=f,z/f<9999)for(k=Y=0,v=0;v<z;v+=f)h[k++]=c[Y]<v?++Y:Y}else t.totalLength=c[0]=0;return e?p-c[e/2-1]:p}function ti(t,e){var n,i,r;for(r=n=i=0;r<t.length;r++)t[r].resolution=~~e||12,n+=R2(t[r]),i+=t[r].length;return t.totalPoints=i,t.totalLength=n,t}function na(t,e,n){if(n<=0||n>=1)return 0;var i=t[e],r=t[e+1],s=t[e+2],a=t[e+3],o=t[e+4],l=t[e+5],c=t[e+6],h=t[e+7],f=i+(s-i)*n,d=s+(o-s)*n,p=r+(a-r)*n,v=a+(l-a)*n,x=f+(d-f)*n,g=p+(v-p)*n,m=o+(c-o)*n,y=l+(h-l)*n;return d+=(m-d)*n,v+=(y-v)*n,t.splice(e+2,4,qe(f),qe(p),qe(x),qe(g),qe(x+(d-x)*n),qe(g+(v-g)*n),qe(d),qe(v),qe(m),qe(y)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function Ao(t,e,n,i){n=n||{},t.totalLength||ti(t),(e<0||e>1)&&(e=Gl(e));var r=0,s=t[0],a,o,l,c,h,f,d;if(!e)d=f=r=0,s=t[0];else if(e===1)d=1,r=t.length-1,s=t[r],f=s.length-8;else{if(t.length>1){for(l=t.totalLength*e,h=f=0;(h+=t[f++].totalLength)<l;)r=f;s=t[r],c=h-s.totalLength,e=(l-c)/(h-c)||0}a=s.samples,o=s.resolution,l=s.totalLength*e,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:Hl(a,l,e),c=f?a[f-1]:0,h=a[f],h<l&&(c=h,h=a[++f]),d=1/o*((l-c)/(h-c)+f%o),f=~~(f/o)*6,i&&d===1&&(f+6<s.length?(f+=6,d=0):r+1<t.length&&(f=d=0,s=t[++r]))}return n.t=d,n.i=f,n.path=t,n.segment=s,n.segIndex=r,n}function So(t,e,n,i){var r=t[0],s=i||{},a,o,l,c,h,f,d,p,v;if((e<0||e>1)&&(e=Gl(e)),r.lookup||ti(t),t.length>1){for(l=t.totalLength*e,h=f=0;(h+=t[f++].totalLength)<l;)r=t[f];c=h-r.totalLength,e=(l-c)/(h-c)||0}return a=r.samples,o=r.resolution,l=r.totalLength*e,f=r.lookup.length?r.lookup[e<1?~~(l/r.minLength):r.lookup.length-1]||0:Hl(a,l,e),c=f?a[f-1]:0,h=a[f],h<l&&(c=h,h=a[++f]),d=1/o*((l-c)/(h-c)+f%o)||0,v=1-d,f=~~(f/o)*6,p=r[f],s.x=qe((d*d*(r[f+6]-p)+3*v*(d*(r[f+4]-p)+v*(r[f+2]-p)))*d+p),s.y=qe((d*d*(r[f+7]-(p=r[f+1]))+3*v*(d*(r[f+5]-p)+v*(r[f+3]-p)))*d+p),n&&(s.angle=r.totalLength?kl(r,f,d>=1?1-1e-9:d||1e-9):r.angle||0),s}function Ji(t,e,n,i,r,s,a){for(var o=t.length,l,c,h,f,d;--o>-1;)for(l=t[o],c=l.length,h=0;h<c;h+=2)f=l[h],d=l[h+1],l[h]=f*e+d*i+s,l[h+1]=f*n+d*r+a;return t._dirty=1,t}function D2(t,e,n,i,r,s,a,o,l){if(!(t===o&&e===l)){n=Xt(n),i=Xt(i);var c=r%360*g2,h=gr(c),f=mr(c),d=Math.PI,p=d*2,v=(t-o)/2,x=(e-l)/2,g=h*v+f*x,m=-f*v+h*x,y=g*g,_=m*m,E=y/(n*n)+_/(i*i);E>1&&(n=vn(E)*n,i=vn(E)*i);var F=n*n,w=i*i,T=(F*w-F*_-w*y)/(F*_+w*y);T<0&&(T=0);var I=(s===a?-1:1)*vn(T),S=I*(n*m/i),C=I*-(i*g/n),D=(t+o)/2,Y=(e+l)/2,k=D+(h*S-f*C),z=Y+(f*S+h*C),L=(g-S)/n,P=(m-C)/i,H=(-g-S)/n,U=(-m-C)/i,q=L*L+P*P,ee=(P<0?-1:1)*Math.acos(L/vn(q)),te=(L*U-P*H<0?-1:1)*Math.acos((L*H+P*U)/vn(q*(H*H+U*U)));isNaN(te)&&(te=d),!a&&te>0?te-=p:a&&te<0&&(te+=p),ee%=p,te%=p;var xe=Math.ceil(Xt(te)/(p/4)),ue=[],X=te/xe,J=4/3*mr(X/2)/(1+gr(X/2)),re=h*n,le=f*n,Me=f*-i,ye=h*i,_e;for(_e=0;_e<xe;_e++)r=ee+_e*X,g=gr(r),m=mr(r),L=gr(r+=X),P=mr(r),ue.push(g-J*m,m+J*g,L+J*P,P-J*L,L,P);for(_e=0;_e<ue.length;_e+=2)g=ue[_e],m=ue[_e+1],ue[_e]=g*re+m*Me+k,ue[_e+1]=g*le+m*ye+z;return ue[_e-2]=o,ue[_e-1]=l,ue}}function $r(t){var e=(t+"").replace(p2,function(S){var C=+S;return C<1e-4&&C>-1e-4?0:C}).match(f2)||[],n=[],i=0,r=0,s=2/3,a=e.length,o=0,l="ERROR: malformed path: "+t,c,h,f,d,p,v,x,g,m,y,_,E,F,w,T,I=function(C,D,Y,k){y=(Y-C)/3,_=(k-D)/3,x.push(C+y,D+_,Y-y,k-_,Y,k)};if(!t||!isNaN(e[0])||isNaN(e[1]))return console.log(l),n;for(c=0;c<a;c++)if(F=p,isNaN(e[c])?(p=e[c].toUpperCase(),v=p!==e[c]):c--,f=+e[c+1],d=+e[c+2],v&&(f+=i,d+=r),c||(g=f,m=d),p==="M")x&&(x.length<8?n.length-=1:o+=x.length,xo(x)),i=g=f,r=m=d,x=[f,d],n.push(x),c+=2,p="L";else if(p==="C")x||(x=[0,0]),v||(i=r=0),x.push(f,d,i+e[c+3]*1,r+e[c+4]*1,i+=e[c+5]*1,r+=e[c+6]*1),c+=6;else if(p==="S")y=i,_=r,(F==="C"||F==="S")&&(y+=i-x[x.length-4],_+=r-x[x.length-3]),v||(i=r=0),x.push(y,_,f,d,i+=e[c+3]*1,r+=e[c+4]*1),c+=4;else if(p==="Q")y=i+(f-i)*s,_=r+(d-r)*s,v||(i=r=0),i+=e[c+3]*1,r+=e[c+4]*1,x.push(y,_,i+(f-i)*s,r+(d-r)*s,i,r),c+=4;else if(p==="T")y=i-x[x.length-4],_=r-x[x.length-3],x.push(i+y,r+_,f+(i+y*1.5-f)*s,d+(r+_*1.5-d)*s,i=f,r=d),c+=2;else if(p==="H")I(i,r,i=f,r),c+=1;else if(p==="V")I(i,r,i,r=f+(v?r-i:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(f=g,d=m,x.closed=!0),(p==="L"||Xt(i-f)>.5||Xt(r-d)>.5)&&(I(i,r,f,d),p==="L"&&(c+=2)),i=f,r=d;else if(p==="A"){if(w=e[c+4],T=e[c+5],y=e[c+6],_=e[c+7],h=7,w.length>1&&(w.length<3?(_=y,y=T,h--):(_=T,y=w.substr(2),h-=2),T=w.charAt(1),w=w.charAt(0)),E=D2(i,r,+e[c+1],+e[c+2],+e[c+3],+w,+T,(v?i:0)+y*1,(v?r:0)+_*1),c+=h,E)for(h=0;h<E.length;h++)x.push(E[h]);i=x[x.length-2],r=x[x.length-1]}else console.log(l);return c=x.length,c<6?(n.pop(),c=0):xo(x),n.totalPoints=o+c,n}function P2(t,e){e===void 0&&(e=1);for(var n=t[0],i=0,r=[n,i],s=2;s<t.length;s+=2)r.push(n,i,t[s],i=(t[s]-n)*e/2,n=t[s],-i);return r}function ia(t,e){Xt(t[0]-t[2])<1e-4&&Xt(t[1]-t[3])<1e-4&&(t=t.slice(2));var n=t.length-2,i=+t[0],r=+t[1],s=+t[2],a=+t[3],o=[i,r,i,r],l=s-i,c=a-r,h=t.nonSmooth||[],f=Math.abs(t[n]-i)<.001&&Math.abs(t[n+1]-r)<.001,d,p,v,x,g,m,y,_,E,F,w,T,I,S,C;if(!n)return[i,r,i,r,i,r,i,r];for(f&&(t.push(s,a),s=i,a=r,i=t[n-2],r=t[n-1],t.unshift(i,r),n+=4,h=[0,0].concat(h)),e=e||e===0?+e:1,v=2;v<n;v+=2)if(d=i,p=r,i=s,r=a,s=+t[v+2],a=+t[v+3],!(i===s&&r===a)){if(x=l,g=c,l=s-i,c=a-r,h[v]){o.push(i-(i-d)/4,r-(r-p)/4,i,r,i+(s-i)/4,r+(a-r)/4);continue}m=vn(x*x+g*g),y=vn(l*l+c*c),_=vn(Math.pow(l/y+x/m,2)+Math.pow(c/y+g/m,2)),E=(m+y)*e*.25/_,F=i-(i-d)*(m?E/m:0),w=i+(s-i)*(y?E/y:0),T=i-(F+((w-F)*(m*3/(m+y)+.5)/4||0)),I=r-(r-p)*(m?E/m:0),S=r+(a-r)*(y?E/y:0),C=r-(I+((S-I)*(m*3/(m+y)+.5)/4||0)),o.push(qe(F+T),qe(I+C),qe(i),qe(r),qe(w+T),qe(S+C))}return i!==s||r!==a||o.length<4?o.push(qe(s),qe(a),qe(s),qe(a)):o.length-=2,o.length===2?o.push(i,r,i,r,i,r):f&&(o.splice(0,6),o.length-=6),o.closed=f,o}function jl(t){zl(t[0])&&(t=[t]);var e="",n=t.length,i,r,s,a;for(r=0;r<n;r++){for(a=t[r],e+="M"+qe(a[0])+","+qe(a[1])+" C",i=a.length,s=2;s<i;s++)e+=qe(a[s++])+","+qe(a[s++])+" "+qe(a[s++])+","+qe(a[s++])+" "+qe(a[s++])+","+qe(a[s])+" ";a.closed&&(e+="z")}return e}var xn,ni,ja,ls,$i,Wr,es,ir,$t="transform",ra=$t+"Origin",Wl,Xl=function(e){var n=e.ownerDocument||e;for(!($t in e.style)&&("msTransform"in e.style)&&($t="msTransform",ra=$t+"Origin");n.parentNode&&(n=n.parentNode););if(ni=window,es=new or,n){xn=n,ja=n.documentElement,ls=n.body,ir=xn.createElementNS("http://www.w3.org/2000/svg","g"),ir.style.transform="none";var i=n.createElement("div"),r=n.createElement("div"),s=n&&(n.body||n.firstElementChild);s&&s.appendChild&&(s.appendChild(i),i.appendChild(r),i.style.position="static",i.style.transform="translate3d(0,0,1px)",Wl=r.offsetParent!==i,s.removeChild(i))}return n},I2=function(e){for(var n,i;e&&e!==ls;)i=e._gsap,i&&i.uncache&&i.get(e,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),n?n.push(i):n=[i]),e=e.parentNode;return n},Yl=[],Ql=[],U2=function(){return ni.pageYOffset||xn.scrollTop||ja.scrollTop||ls.scrollTop||0},B2=function(){return ni.pageXOffset||xn.scrollLeft||ja.scrollLeft||ls.scrollLeft||0},Wa=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},F2=function t(e){if(ni.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return t(e)},ms=function t(e,n){if(e.parentNode&&(xn||Xl(e))){var i=Wa(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?n?"rect":"g":"div",a=n!==2?0:100,o=n===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=xn.createElementNS?xn.createElementNS(r.replace(/^https/,"http"),s):xn.createElement(s);return n&&(i?(Wr||(Wr=t(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+a+","+o+")"),c.setAttribute("fill","transparent"),Wr.appendChild(c)):($i||($i=t(e),Object.assign($i.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:o+"px",left:a+"px"}),$i.appendChild(c))),c}throw"Need document and parent."},O2=function(e){for(var n=new or,i=0;i<e.numberOfItems;i++)n.multiply(e.getItem(i).matrix);return n},N2=function(e){var n=e.getCTM(),i;return n||(i=e.style[$t],e.style[$t]="none",e.appendChild(ir),n=ir.getCTM(),e.removeChild(ir),i?e.style[$t]=i:e.style.removeProperty($t.replace(/([A-Z])/g,"-$1").toLowerCase())),n||es.clone()},z2=function(e,n){var i=Wa(e),r=e===i,s=i?Yl:Ql,a=e.parentNode,o=a&&!i&&a.shadowRoot&&a.shadowRoot.appendChild?a.shadowRoot:a,l,c,h,f,d,p;if(e===ni)return e;if(s.length||s.push(ms(e,1),ms(e,2),ms(e,3)),l=i?Wr:$i,i)r?(h=N2(e),f=-h.e/h.a,d=-h.f/h.d,c=es):e.getBBox?(h=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?O2(c):c.getItem(0).matrix:es,f=c.a*h.x+c.c*h.y,d=c.b*h.x+c.d*h.y):(c=new or,f=d=0),n&&e.tagName.toLowerCase()==="g"&&(f=d=0),(r||!e.getBoundingClientRect().width?i:a).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+f)+","+(c.f+d)+")");else{if(f=d=0,Wl)for(c=e.offsetParent,h=e;h&&(h=h.parentNode)&&h!==c&&h.parentNode;)(ni.getComputedStyle(h)[$t]+"").length>4&&(f=h.offsetLeft,d=h.offsetTop,h=0);if(p=ni.getComputedStyle(e),p.position!=="absolute"&&p.position!=="fixed")for(c=e.offsetParent;a&&a!==c;)f+=a.scrollLeft||0,d+=a.scrollTop||0,a=a.parentNode;h=l.style,h.top=e.offsetTop-d+"px",h.left=e.offsetLeft-f+"px",h[$t]=p[$t],h[ra]=p[ra],h.position=p.position==="fixed"?"fixed":"absolute",o.appendChild(l)}return l},gs=function(e,n,i,r,s,a,o){return e.a=n,e.b=i,e.c=r,e.d=s,e.e=a,e.f=o,e},or=(function(){function t(n,i,r,s,a,o){n===void 0&&(n=1),i===void 0&&(i=0),r===void 0&&(r=0),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),gs(this,n,i,r,s,a,o)}var e=t.prototype;return e.inverse=function(){var i=this.a,r=this.b,s=this.c,a=this.d,o=this.e,l=this.f,c=i*a-r*s||1e-10;return gs(this,a/c,-r/c,-s/c,i/c,(s*l-a*o)/c,-(i*l-r*o)/c)},e.multiply=function(i){var r=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f,h=i.a,f=i.c,d=i.b,p=i.d,v=i.e,x=i.f;return gs(this,h*r+d*a,h*s+d*o,f*r+p*a,f*s+p*o,l+v*r+x*a,c+v*s+x*o)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(i){var r=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f;return r===i.a&&s===i.b&&a===i.c&&o===i.d&&l===i.e&&c===i.f},e.apply=function(i,r){r===void 0&&(r={});var s=i.x,a=i.y,o=this.a,l=this.b,c=this.c,h=this.d,f=this.e,d=this.f;return r.x=s*o+a*c+f||0,r.y=s*l+a*h+d||0,r},t})();function Pi(t,e,n,i){if(!t||!t.parentNode||(xn||Xl(t)).documentElement===t)return new or;var r=I2(t),s=Wa(t),a=s?Yl:Ql,o=z2(t,n),l=a[0].getBoundingClientRect(),c=a[1].getBoundingClientRect(),h=a[2].getBoundingClientRect(),f=o.parentNode,d=!i&&F2(t),p=new or((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(d?0:B2()),l.top+(d?0:U2()));if(f.removeChild(o),r)for(l=r.length;l--;)c=r[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?p.inverse():p}var G2="x,translateX,left,marginLeft,xPercent".split(","),H2="y,translateY,top,marginTop,yPercent".split(","),k2=Math.PI/180,Wt,ql,bi,sa,vs,Mo,V2=function(){return Wt||typeof window<"u"&&(Wt=window.gsap)&&Wt.registerPlugin&&Wt},Vi=function(e,n,i,r){for(var s=n.length,a=r===2?0:r,o=0;o<s;o++)e[a]=parseFloat(n[o][i]),r===2&&(e[a+1]=0),a+=2;return e},Ri=function(e,n,i){return parseFloat(e._gsap.get(e,n,i||"px"))||0},Kl=function(e){var n=e[0],i=e[1],r;for(r=2;r<e.length;r+=2)n=e[r]+=n,i=e[r+1]+=i},yo=function(e,n,i,r,s,a,o,l,c){if(o.type==="cubic")n=[n];else{o.fromCurrent!==!1&&n.unshift(Ri(i,r,l),s?Ri(i,s,c):0),o.relative&&Kl(n);var h=s?ia:P2;n=[h(n,o.curviness)]}return n=a(Zl(n,i,o)),ts(e,i,r,n,"x",l),s&&ts(e,i,s,n,"y",c),ti(n,o.resolution||(o.curviness===0?20:12))},j2=function(e){return e},W2=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Eo=function(e,n,i){var r=Pi(e),s=0,a=0,o;return(e.tagName+"").toLowerCase()==="svg"?(o=e.viewBox.baseVal,o.width||(o={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):o=n&&e.getBBox&&e.getBBox(),n&&n!=="auto"&&(s=n.push?n[0]*(o?o.width:e.offsetWidth||0):n.x,a=n.push?n[1]*(o?o.height:e.offsetHeight||0):n.y),i.apply(s||a?r.apply({x:s,y:a}):{x:r.e,y:r.f})},aa=function(e,n,i,r){var s=Pi(e.parentNode,!0,!0),a=s.clone().multiply(Pi(n)),o=Eo(e,i,s),l=Eo(n,r,s),c=l.x,h=l.y,f;return a.e=a.f=0,r==="auto"&&n.getTotalLength&&n.tagName.toLowerCase()==="path"&&(f=n.getAttribute("d").match(W2)||[],f=a.apply({x:+f[0],y:+f[1]}),c+=f.x,h+=f.y),f&&(f=a.apply(n.getBBox()),c-=f.x,h-=f.y),a.e=c-o.x,a.f=h-o.y,a},Zl=function(e,n,i){var r=i.align,s=i.matrix,a=i.offsetX,o=i.offsetY,l=i.alignOrigin,c=e[0][0],h=e[0][1],f=Ri(n,"x"),d=Ri(n,"y"),p,v,x;return!e||!e.length?jr("M0,0L0,0"):(r&&(r==="self"||(p=sa(r)[0]||n)===n?Ji(e,1,0,0,1,f-c,d-h):(l&&l[2]!==!1?Wt.set(n,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Ri(n,"xPercent")/-100,Ri(n,"yPercent")/-100],v=aa(n,p,l,"auto"),x=v.apply({x:c,y:h}),Ji(e,v.a,v.b,v.c,v.d,f+v.e-(x.x-v.e),d+v.f-(x.y-v.f)))),s?Ji(e,s.a,s.b,s.c,s.d,s.e,s.f):(a||o)&&Ji(e,1,0,0,1,a||0,o||0),e)},ts=function(e,n,i,r,s,a){var o=n._gsap,l=o.harness,c=l&&l.aliases&&l.aliases[i],h=c&&c.indexOf(",")<0?c:i,f=e._pt=new ql(e._pt,n,h,0,0,j2,0,o.set(n,h,e));f.u=bi(o.get(n,h,a))||0,f.path=r,f.pp=s,e._props.push(h)},X2=function(e,n){return function(i){return e||n!==1?Vl(i,e,n):i}},Jl={version:"3.14.1",name:"motionPath",register:function(e,n,i){Wt=e,bi=Wt.utils.getUnit,sa=Wt.utils.toArray,vs=Wt.core.getStyleSaver,Mo=Wt.core.reverting||function(){},ql=i},init:function(e,n,i){if(!Wt)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof n=="object"&&!n.style)||!n.path)&&(n={path:n});var r=[],s=n,a=s.path,o=s.autoRotate,l=s.unitX,c=s.unitY,h=s.x,f=s.y,d=a[0],p=X2(n.start,"end"in n?n.end:1),v,x;if(this.rawPaths=r,this.target=e,this.tween=i,this.styles=vs&&vs(e,"transform"),(this.rotate=o||o===0)&&(this.rOffset=parseFloat(o)||0,this.radians=!!n.useRadians,this.rProp=n.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=bi(e._gsap.get(e,this.rProp))||0),Array.isArray(a)&&!("closed"in a)&&typeof d!="number"){for(x in d)!h&&~G2.indexOf(x)?h=x:!f&&~H2.indexOf(x)&&(f=x);h&&f?r.push(yo(this,Vi(Vi([],a,h,0),a,f,1),e,h,f,p,n,l||bi(a[0][h]),c||bi(a[0][f]))):h=f=0;for(x in d)x!==h&&x!==f&&r.push(yo(this,Vi([],a,x,2),e,x,0,p,n,bi(a[0][x])))}else v=p(Zl(jr(n.path),e,n)),ti(v,n.resolution),r.push(v),ts(this,e,n.x||"x",v,"x",n.unitX||"px"),ts(this,e,n.y||"y",v,"y",n.unitY||"px");i.vars.immediateRender&&this.render(i.progress(),this)},render:function(e,n){var i=n.rawPaths,r=i.length,s=n._pt;if(n.tween._time||!Mo()){for(e>1?e=1:e<0&&(e=0);r--;)So(i[r],e,!r&&n.rotate,i[r]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;n.rotate&&n.rSet(n.target,n.rProp,i[0].angle*(n.radians?k2:1)+n.rOffset+n.ru,n,e)}else n.styles.revert()},getLength:function(e){return ti(jr(e)).totalLength},sliceRawPath:Vl,getRawPath:jr,pointsToSegment:ia,stringToRawPath:$r,rawPathToString:jl,transformRawPath:Ji,getGlobalMatrix:Pi,getPositionOnPath:So,cacheRawPathMeasurements:ti,convertToPath:function(e,n){return sa(e).map(function(i){return L2(i,n!==!1)})},convertCoordinates:function(e,n,i){var r=Pi(n,!0,!0).multiply(Pi(e));return i?r.apply(i):r},getAlignMatrix:aa,getRelativePosition:function(e,n,i,r){var s=aa(e,n,i,r);return{x:s.e,y:s.f}},arrayToRawPath:function(e,n){n=n||{};var i=Vi(Vi([],e,n.x||"x",0),e,n.y||"y",1);return n.relative&&Kl(i),[n.type==="cubic"?i:ia(i,n.curviness)]}};V2()&&Wt.registerPlugin(Jl);Vr.registerPlugin(Jl);function Y2(){const t=It.c(27),e=gt.useRef(null);let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n={scope:e},t[0]=n):n=t[0],Xc(Q2,n);let i,r,s,a,o,l,c,h,f,d,p,v,x,g,m,y,_,E,F;t[1]===Symbol.for("react.memo_cache_sentinel")?(i=u.jsx("path",{opacity:"0.1",d:"M0.888367 1.24365C386.442 284.621 1044.37 322.604 1520.89 1.24365",stroke:"url(#paint0_radial_66_172)","stroke-width":"3"}),v=u.jsx("path",{opacity:"0.1",d:"M0.888367 206.244C366.873 428.972 1024.8 449.946 1520.89 206.244",stroke:"url(#paint1_radial_66_172)","stroke-width":"3"}),x=u.jsx("path",{id:"path_clockbg_line1",opacity:"0.1",d:"M0.888367 92.2437C366.873 314.972 1024.8 335.946 1520.89 92.2437",stroke:"url(#paint2_radial_66_172)","stroke-width":"2"}),g=u.jsx("path",{id:"path_clockbg_line2",opacity:"0.1",d:"M0.888367 132.244C366.873 354.972 1024.8 375.946 1520.89 132.244",stroke:"url(#paint4_radial_66_172)","stroke-width":"2"}),m=u.jsx("path",{id:"path_clockbg_line3",opacity:"0.1",d:"M0.888367 172.244C366.873 394.972 1024.8 415.946 1520.89 172.244",stroke:"url(#paint6_radial_66_172)","stroke-width":"2"}),y=u.jsx("use",{id:"clockbg_line1",y:-20,href:"#clockbg_line0"}),_=u.jsx("use",{id:"clockbg_line2",y:-20,href:"#clockbg_line0"}),E=u.jsx("use",{id:"clockbg_line3",y:-20,href:"#clockbg_line0"}),F=u.jsx("rect",{x:"586.888",y:"235.367",width:"114.811",height:"120",rx:"32",transform:"rotate(5 586.888 235.367)",fill:"#080F0A"}),r=u.jsx("rect",{x:"588.252",y:"236.992",width:"111.811",height:"117",rx:"30.5",transform:"rotate(5 588.252 236.992)",stroke:"white","stroke-opacity":"0.1","stroke-width":"3"}),s=u.jsx("path",{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M670.409 283.542C668.053 287.523 666.632 292.218 667.133 296.816C667.578 300.899 669.909 304.68 671.73 308.361C672.097 309.103 672.417 309.89 672.681 310.708C673.793 314.157 673.95 318.292 672.307 322.184C668.985 330.058 658.606 336.392 635.764 334.699C613.457 333.046 604.539 324.555 602.715 315.864C601.817 311.58 602.685 307.374 604.389 304.151C604.506 303.931 604.626 303.715 604.751 303.503C607.183 299.373 610.758 295.01 612.511 290.55C613.88 287.07 613.618 283.108 611.957 279.759C610.525 276.871 609.948 274.32 610.055 272.128C610.232 268.522 612.256 266.025 615.03 264.783C617.132 263.841 619.662 263.617 622.156 264.133C628.809 265.51 636.798 268.765 643.474 270.025C648.467 270.967 654.108 269.594 658.95 268.056C662.639 266.884 666.46 267.446 669.149 269.423C671.55 271.189 672.978 274.05 672.557 277.63C672.344 279.451 671.656 281.433 670.409 283.542ZM668.096 270.851C664.258 268.028 657.101 268.578 652.751 274.931C652.472 275.339 651.913 275.44 651.508 275.156C649.83 273.981 646.772 272.451 643.145 271.767C639.527 271.084 635.402 271.251 631.51 273.377C631.047 273.63 630.466 273.426 630.264 272.939C627.513 266.328 620.294 264.368 615.758 266.4C613.546 267.391 611.97 269.325 611.829 272.215C611.685 275.166 613.031 279.242 617.038 284.41C617.27 284.709 617.287 285.123 617.079 285.439C616.312 286.604 615.141 288.713 614.164 291.198C613.185 293.69 612.426 296.493 612.425 299.066C612.425 299.509 612.096 299.884 611.657 299.943C609.736 300.203 607.517 302.034 605.96 304.979C604.427 307.878 603.649 311.666 604.453 315.501C606.037 323.05 613.925 331.303 635.895 332.931C658.512 334.607 667.809 328.277 670.671 321.496C672.12 318.06 671.996 314.37 670.991 311.25C669.976 308.103 668.112 305.675 666.25 304.668C665.965 304.514 665.786 304.218 665.784 303.894C665.774 302.339 665.665 299.735 665.367 297.007C665.069 294.264 664.587 291.467 663.857 289.489C663.736 289.161 663.82 288.792 664.071 288.548C668.536 284.205 670.443 280.408 670.794 277.424C671.139 274.481 669.987 272.241 668.096 270.851Z",fill:"white",stroke:"white"}),a=u.jsx("rect",{x:"819.888",y:"247.458",width:"114.811",height:"120",rx:"32",transform:"rotate(-5 819.888 247.458)",fill:"#080F0A"}),o=u.jsx("rect",{x:"821.513",y:"248.822",width:"111.811",height:"117",rx:"30.5",transform:"rotate(-5 821.513 248.822)",stroke:"white","stroke-opacity":"0.1","stroke-width":"3"}),l=u.jsx("path",{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M893.388 266.576C893.171 266.699 893.034 266.874 892.952 267.009C892.857 267.165 892.795 267.331 892.752 267.475C892.665 267.76 892.607 268.11 892.557 268.462C892.523 268.706 892.491 268.962 892.458 269.231C892.388 269.792 892.311 270.412 892.189 271.1C891.851 273.012 891.212 275.125 889.712 276.687C886.873 275.689 883.641 275.265 879.978 275.586C876.302 275.908 873.182 276.882 870.551 278.35C868.813 277.072 867.823 275.109 867.162 273.29C866.923 272.634 866.74 272.037 866.574 271.496C866.495 271.237 866.419 270.99 866.344 270.756C866.234 270.418 866.116 270.084 865.982 269.817C865.914 269.684 865.825 269.53 865.704 269.393C865.6 269.275 865.435 269.125 865.199 269.042C864.632 268.803 864.097 269.013 863.747 269.283C863.394 269.555 863.11 269.959 862.886 270.389C862.429 271.266 862.085 272.516 861.976 273.935C861.812 276.053 862.165 278.655 863.56 281.107C862.014 280.669 860.158 280.296 858.331 280.1C856.69 279.924 855.015 279.884 853.556 280.086C852.128 280.283 850.749 280.731 849.875 281.673L849.625 281.943L849.642 282.311C849.819 286.17 852.337 289.4 854.691 291.593C855.884 292.705 857.074 293.587 857.987 294.192C858.444 294.494 858.837 294.731 859.132 294.894C859.153 294.906 859.173 294.917 859.194 294.928C857.489 301.979 857.728 309.499 858.588 314.797C857.117 317.495 856.5 320.744 857.136 324.6L857.147 324.663L857.166 324.724C859.723 332.742 866.499 335.752 872.605 336.759C878.039 337.655 883.145 337.002 884.653 336.809C884.837 336.785 884.967 336.768 885.038 336.762C889.421 336.379 895.368 335.402 900.405 332.954C905.458 330.499 909.717 326.493 910.399 320.042C910.686 317.329 910.004 313.964 907.876 310.949C907.815 305.528 906.727 297.877 903.743 291.068C903.778 291.041 903.815 291.012 903.852 290.981C904.115 290.769 904.46 290.468 904.857 290.091C905.652 289.337 906.67 288.262 907.652 286.96C909.589 284.391 911.508 280.773 911.013 276.942L910.966 276.576L910.672 276.354C909.648 275.578 908.213 275.376 906.772 275.43C905.3 275.485 903.658 275.815 902.071 276.273C900.306 276.784 898.543 277.473 897.097 278.173C898.045 275.515 897.941 272.892 897.412 270.835C897.058 269.456 896.502 268.285 895.9 267.501C895.604 267.116 895.254 266.767 894.86 266.561C894.468 266.356 893.904 266.242 893.388 266.576ZM902.98 289.43C903.17 289.267 903.401 289.061 903.66 288.815C904.398 288.115 905.349 287.111 906.262 285.899C908.036 283.547 909.554 280.567 909.325 277.569C908.767 277.283 907.934 277.141 906.839 277.182C905.557 277.23 904.063 277.523 902.555 277.959C900.094 278.67 897.739 279.718 896.346 280.561C898.753 282.642 900.693 285.219 902.243 288.024C902.499 288.486 902.744 288.956 902.98 289.43ZM894.683 279.258C896.288 276.437 896.293 273.487 895.724 271.272C895.414 270.068 894.947 269.128 894.52 268.572C894.454 268.487 894.394 268.415 894.339 268.356C894.321 268.458 894.303 268.575 894.284 268.71C894.256 268.906 894.228 269.135 894.196 269.388C894.124 269.969 894.036 270.677 893.906 271.409C893.581 273.25 892.956 275.523 891.432 277.382C892.221 277.744 892.976 278.153 893.699 278.605C894.035 278.814 894.362 279.032 894.683 279.258ZM889.83 278.602L890.024 278.81L890.12 278.72C891.059 279.111 891.945 279.573 892.781 280.095C896.14 282.192 898.74 285.295 900.719 288.875C904.22 295.207 905.717 302.928 906.057 308.823C905.725 308.5 905.372 308.185 904.998 307.88C900.606 304.298 893.338 302.117 882.134 303.565C877.497 303.777 870.691 305.042 865.317 308.203C863.311 309.383 861.482 310.84 860.043 312.625C859.442 307.622 859.446 301.171 860.936 295.151L860.975 295.147L860.965 295.032C861.214 294.04 861.504 293.059 861.838 292.1C863.169 288.276 865.194 284.813 868.141 282.197C868.867 281.553 869.651 280.958 870.498 280.42L870.629 280.507L870.811 280.226C873.336 278.693 876.405 277.659 880.13 277.333C883.863 277.007 887.072 277.506 889.83 278.602ZM868.974 279.327C867.164 277.762 866.16 275.641 865.524 273.891C865.27 273.193 865.061 272.511 864.889 271.951C864.814 271.707 864.747 271.487 864.686 271.298C864.644 271.17 864.606 271.058 864.571 270.961C864.528 271.029 864.48 271.109 864.431 271.204C864.107 271.826 863.81 272.833 863.714 274.073C863.539 276.342 864.05 279.23 866.096 281.721C866.384 281.434 866.68 281.154 866.987 280.882C867.611 280.328 868.273 279.809 868.974 279.327ZM864.661 283.308C863.138 282.726 860.665 282.114 858.148 281.844C856.587 281.677 855.065 281.648 853.795 281.823C852.708 281.973 851.913 282.257 851.413 282.635C851.708 285.628 853.721 288.299 855.876 290.308C856.986 291.342 858.097 292.166 858.945 292.727C859.215 292.906 859.457 293.057 859.661 293.179C859.824 292.62 860.001 292.067 860.192 291.519C861.226 288.548 862.676 285.73 864.661 283.308ZM903.9 309.241C899.994 306.056 893.252 303.89 882.323 305.309L882.286 305.314L882.25 305.316C877.781 305.515 871.261 306.74 866.198 309.717C863.676 311.201 861.556 313.096 860.21 315.475C858.88 317.826 858.274 320.706 858.846 324.251C861.129 331.317 867.094 334.073 872.886 335.028C878.017 335.875 882.812 335.272 884.418 335.07C884.633 335.043 884.791 335.023 884.885 335.015C889.188 334.639 894.888 333.687 899.645 331.375C904.387 329.071 908.07 325.486 908.665 319.855C908.995 316.73 907.811 312.431 903.9 309.241Z",fill:"white",stroke:"white"}),c=u.jsx("rect",{x:"363.929",y:"217.517",width:"95.3125",height:"100",rx:"24",transform:"rotate(10 363.929 217.517)",fill:"#040705"}),h=u.jsx("rect",{x:"365.145",y:"219.254",width:"92.3125",height:"97",rx:"22.5",transform:"rotate(10 365.145 219.254)",stroke:"white","stroke-opacity":"0.1","stroke-width":"3"}),f=u.jsx("path",{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M406.466 250.715C408.279 251.035 410.098 250.438 411.715 249.56C413.72 248.471 416.158 247.863 418.601 248.644C422.309 249.83 425.61 254.075 427.384 263.479C427.401 263.566 427.401 263.656 427.386 263.743L426.778 267.188C426.401 269.328 427.424 271.441 428.036 273.526C428.436 274.887 428.338 276.457 427.45 278.118C426.359 280.157 424.084 282.321 420.083 284.491C414.992 287.251 411.285 292.004 409.112 297.373C408.443 299.027 407.607 300.59 406.571 301.802C405.533 303.017 404.257 303.921 402.718 304.154C402.229 304.228 401.811 303.8 401.897 303.313L403.405 294.761C403.775 292.665 401.712 290.97 399.728 291.739C399.414 291.86 399.02 291.791 398.768 291.57C397.166 290.168 394.648 291.055 394.278 293.151L392.77 301.704C392.684 302.191 392.146 302.45 391.712 302.213C390.345 301.468 389.455 300.182 388.896 298.685C388.337 297.192 388.085 295.437 388.022 293.654C387.817 287.866 385.959 282.132 382.119 277.797C379.101 274.389 377.704 271.578 377.376 269.288C377.109 267.424 377.555 265.915 378.396 264.773C379.684 263.023 381.368 261.388 381.745 259.248L382.353 255.802C382.368 255.715 382.399 255.631 382.444 255.554C387.328 247.325 391.882 244.465 395.772 244.619C398.334 244.721 400.417 246.125 401.929 247.834C403.148 249.213 404.654 250.396 406.466 250.715ZM402.699 251.46C402.794 251.53 402.905 251.575 403.021 251.593L409.198 252.682C409.272 252.695 409.347 252.709 409.422 252.722C409.636 252.76 409.865 252.701 410.039 252.541C412.083 250.656 415.216 249.097 418.159 250.038C420.86 250.902 423.758 253.991 425.559 261.834C425.83 263.011 425.828 264.234 425.618 265.424L424.672 270.789C424.626 271.051 424.726 271.317 424.933 271.484C425.699 272.101 426.354 272.949 426.646 273.945C426.932 274.921 426.888 276.092 426.174 277.427C424.713 280.159 420.431 283.585 410.486 286.975C410.217 287.067 410.025 287.31 409.996 287.593C409.744 290.009 409.043 293.68 407.771 296.824C407.134 298.396 406.369 299.801 405.474 300.85C404.785 301.656 403.781 300.976 403.965 299.932L405.202 292.917C405.606 290.624 403.35 288.77 401.179 289.612C400.142 290.014 398.968 289.807 398.131 289.074C396.379 287.541 393.625 288.511 393.22 290.804L391.983 297.82C391.799 298.864 390.624 299.159 390.252 298.166C389.769 296.874 389.531 295.292 389.471 293.597C389.35 290.207 389.947 286.518 390.537 284.162C390.606 283.886 390.509 283.592 390.287 283.413C382.102 276.826 379.25 272.142 378.811 269.075C378.596 267.577 378.956 266.461 379.559 265.642C380.174 264.806 381.079 264.233 382.01 263.916C382.262 263.83 382.447 263.614 382.493 263.352L383.439 257.987C383.649 256.797 384.065 255.647 384.722 254.633C389.097 247.879 392.876 245.967 395.71 246.08C398.791 246.202 401.197 248.727 402.476 251.191C402.499 251.24 402.528 251.286 402.562 251.328C402.602 251.379 402.648 251.423 402.699 251.46Z",fill:"white",stroke:"white","stroke-linecap":"round"}),d=u.jsx("rect",{x:"1062.89",y:"229.952",width:"95.3125",height:"100",rx:"24",transform:"rotate(-11 1062.89 229.952)",fill:"#030604"}),p=u.jsx("rect",{x:"1064.65",y:"231.138",width:"92.3125",height:"97",rx:"22.5",transform:"rotate(-11 1064.65 231.138)",stroke:"white","stroke-opacity":"0.1","stroke-width":"3"}),t[1]=i,t[2]=r,t[3]=s,t[4]=a,t[5]=o,t[6]=l,t[7]=c,t[8]=h,t[9]=f,t[10]=d,t[11]=p,t[12]=v,t[13]=x,t[14]=g,t[15]=m,t[16]=y,t[17]=_,t[18]=E,t[19]=F):(i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],v=t[12],x=t[13],g=t[14],m=t[15],y=t[16],_=t[17],E=t[18],F=t[19]);let w;t[20]===Symbol.for("react.memo_cache_sentinel")?(w=u.jsxs("g",{opacity:"0.1",children:[u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1109.8 259.771C1109.07 259.703 1108.31 259.911 1107.6 260.264C1106.85 260.637 1106.09 261.198 1105.36 261.881C1103.92 263.246 1102.55 265.162 1101.63 267.257C1100.71 269.347 1100.2 271.678 1100.55 273.858C1100.91 276.071 1102.15 278.071 1104.61 279.435L1104.7 279.49L1104.81 279.513C1106.95 279.959 1110.11 279.717 1112.6 277.485C1115.1 275.24 1116.75 271.134 1116.18 264.209L1116.18 264.142L1116.16 264.077C1115.7 262.384 1114.49 261.244 1113.24 260.571C1112.06 259.934 1110.74 259.657 1109.8 259.771ZM1105.23 278.101C1107.04 278.448 1109.61 278.199 1111.61 276.398C1113.64 274.581 1115.25 271.029 1114.72 264.399C1114.39 263.23 1113.53 262.392 1112.54 261.86C1111.52 261.306 1110.47 261.147 1109.92 261.232L1109.82 261.249L1109.71 261.235C1109.34 261.187 1108.85 261.281 1108.25 261.575C1107.66 261.867 1107.02 262.331 1106.37 262.943C1105.08 264.168 1103.82 265.92 1102.97 267.844C1102.12 269.772 1101.71 271.81 1102 273.622C1102.29 275.371 1103.24 276.961 1105.23 278.101Z",fill:"white"}),u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1123.17 257.174C1123.81 256.84 1124.57 256.756 1125.34 256.821C1126.16 256.89 1127.05 257.132 1127.96 257.5C1129.77 258.235 1131.71 259.51 1133.32 261.111C1134.93 262.709 1136.25 264.679 1136.75 266.821C1137.26 268.994 1136.91 271.303 1135.23 273.474L1135.15 273.564L1135.06 273.629C1133.31 274.836 1130.38 275.775 1127.31 274.614C1124.23 273.449 1121.21 270.252 1119.12 263.637L1119.1 263.575L1119.09 263.511C1118.86 261.781 1119.51 260.281 1120.38 259.192C1121.2 258.167 1122.28 257.419 1123.17 257.174ZM1134.13 272.488C1132.66 273.464 1130.28 274.172 1127.83 273.244C1125.34 272.304 1122.56 269.603 1120.54 263.258C1120.4 262.042 1120.85 260.952 1121.53 260.102C1122.24 259.216 1123.11 258.691 1123.61 258.574L1123.72 258.549L1123.81 258.494C1124.11 258.32 1124.58 258.226 1125.22 258.28C1125.85 258.334 1126.59 258.527 1127.4 258.856C1129.02 259.513 1130.8 260.676 1132.28 262.148C1133.76 263.624 1134.9 265.363 1135.32 267.156C1135.73 268.888 1135.47 270.709 1134.13 272.488Z",fill:"white"}),u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1144.54 244.723C1145.27 247.658 1144.48 251.29 1141.52 255.431C1142.29 256.557 1143.58 258.932 1144.77 261.989C1146.16 265.588 1147.42 270.215 1147.47 274.997C1147.52 279.787 1146.34 284.765 1142.81 288.995C1139.28 293.222 1133.47 296.616 1124.41 298.376L1124.41 298.377L1124.4 298.378C1116.27 299.837 1109.99 299.339 1105.2 297.495C1100.39 295.646 1097.14 292.465 1095.04 288.67C1090.96 281.291 1091.26 271.628 1092.78 264.848C1089.18 261.825 1087.41 258.664 1087.02 255.728C1086.62 252.69 1087.71 249.99 1089.64 248.087C1093.39 244.382 1100.22 243.724 1105.28 249.083C1108.62 247.238 1112.56 246.235 1116.14 245.724C1119.53 245.241 1122.64 245.193 1124.72 245.311C1125.42 241.951 1127.5 239.751 1130.07 238.632C1132.78 237.454 1136 237.484 1138.73 238.531C1141.47 239.581 1143.79 241.686 1144.54 244.723ZM1126.05 246.195C1126.53 242.973 1128.37 240.971 1130.66 239.974C1132.98 238.964 1135.8 238.977 1138.2 239.898C1140.6 240.817 1142.5 242.604 1143.11 245.076C1143.72 247.546 1143.09 250.886 1140.02 254.996L1139.68 255.456L1140.04 255.898C1140.56 256.521 1142.03 258.998 1143.39 262.518C1144.75 266.017 1145.96 270.465 1146 275.014C1146.05 279.555 1144.93 284.165 1141.68 288.059C1138.43 291.955 1132.96 295.221 1124.14 296.937C1116.19 298.363 1110.2 297.847 1105.73 296.128C1101.27 294.413 1098.27 291.481 1096.33 287.962C1092.41 280.876 1092.74 271.374 1094.31 264.738L1094.42 264.292L1094.06 264.003C1090.43 261.055 1088.82 258.095 1088.48 255.534C1088.14 252.981 1089.05 250.728 1090.67 249.125C1093.92 245.92 1100.04 245.29 1104.58 250.493L1104.98 250.955L1105.51 250.642C1108.72 248.742 1112.68 247.697 1116.35 247.174C1120.01 246.651 1123.34 246.656 1125.26 246.818L1125.95 246.876L1126.05 246.195Z",fill:"white"}),u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1109.8 259.771C1109.07 259.703 1108.31 259.911 1107.6 260.264C1106.85 260.637 1106.09 261.198 1105.36 261.881C1103.92 263.246 1102.55 265.162 1101.63 267.257C1100.71 269.347 1100.2 271.678 1100.55 273.858C1100.91 276.071 1102.15 278.071 1104.61 279.435L1104.7 279.49L1104.81 279.513C1106.95 279.959 1110.11 279.717 1112.6 277.485C1115.1 275.24 1116.75 271.134 1116.18 264.209L1116.18 264.142L1116.16 264.077C1115.7 262.384 1114.49 261.244 1113.24 260.571C1112.06 259.934 1110.74 259.657 1109.8 259.771ZM1105.23 278.101C1107.04 278.448 1109.61 278.199 1111.61 276.398C1113.64 274.581 1115.25 271.029 1114.72 264.399C1114.39 263.23 1113.53 262.392 1112.54 261.86C1111.52 261.306 1110.47 261.147 1109.92 261.232L1109.82 261.249L1109.71 261.235C1109.34 261.187 1108.85 261.281 1108.25 261.575C1107.66 261.867 1107.02 262.331 1106.37 262.943C1105.08 264.168 1103.82 265.92 1102.97 267.844C1102.12 269.772 1101.71 271.81 1102 273.622C1102.29 275.371 1103.24 276.961 1105.23 278.101Z",stroke:"white","stroke-linecap":"round"}),u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1123.17 257.174C1123.81 256.84 1124.57 256.756 1125.34 256.821C1126.16 256.89 1127.05 257.132 1127.96 257.5C1129.77 258.235 1131.71 259.51 1133.32 261.111C1134.93 262.709 1136.25 264.679 1136.75 266.821C1137.26 268.994 1136.91 271.303 1135.23 273.474L1135.15 273.564L1135.06 273.629C1133.31 274.836 1130.38 275.775 1127.31 274.614C1124.23 273.449 1121.21 270.252 1119.12 263.637L1119.1 263.575L1119.09 263.511C1118.86 261.781 1119.51 260.281 1120.38 259.192C1121.2 258.167 1122.28 257.419 1123.17 257.174ZM1134.13 272.488C1132.66 273.464 1130.28 274.172 1127.83 273.244C1125.34 272.304 1122.56 269.603 1120.54 263.258C1120.4 262.042 1120.85 260.952 1121.53 260.102C1122.24 259.216 1123.11 258.691 1123.61 258.574L1123.72 258.549L1123.81 258.494C1124.11 258.32 1124.58 258.226 1125.22 258.28C1125.85 258.334 1126.59 258.527 1127.4 258.856C1129.02 259.513 1130.8 260.676 1132.28 262.148C1133.76 263.624 1134.9 265.363 1135.32 267.156C1135.73 268.888 1135.47 270.709 1134.13 272.488Z",stroke:"white","stroke-linecap":"round"}),u.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1144.54 244.723C1145.27 247.658 1144.48 251.29 1141.52 255.431C1142.29 256.557 1143.58 258.932 1144.77 261.989C1146.16 265.588 1147.42 270.215 1147.47 274.997C1147.52 279.787 1146.34 284.765 1142.81 288.995C1139.28 293.222 1133.47 296.616 1124.41 298.376L1124.41 298.377L1124.4 298.378C1116.27 299.837 1109.99 299.339 1105.2 297.495C1100.39 295.646 1097.14 292.465 1095.04 288.67C1090.96 281.291 1091.26 271.628 1092.78 264.848C1089.18 261.825 1087.41 258.664 1087.02 255.728C1086.62 252.69 1087.71 249.99 1089.64 248.087C1093.39 244.382 1100.22 243.724 1105.28 249.083C1108.62 247.238 1112.56 246.235 1116.14 245.724C1119.53 245.241 1122.64 245.193 1124.72 245.311C1125.42 241.951 1127.5 239.751 1130.07 238.632C1132.78 237.454 1136 237.484 1138.73 238.531C1141.47 239.581 1143.79 241.686 1144.54 244.723ZM1126.05 246.195C1126.53 242.973 1128.37 240.971 1130.66 239.974C1132.98 238.964 1135.8 238.977 1138.2 239.898C1140.6 240.817 1142.5 242.604 1143.11 245.076C1143.72 247.546 1143.09 250.886 1140.02 254.996L1139.68 255.456L1140.04 255.898C1140.56 256.521 1142.03 258.998 1143.39 262.518C1144.75 266.017 1145.96 270.465 1146 275.014C1146.05 279.555 1144.93 284.165 1141.68 288.059C1138.43 291.955 1132.96 295.221 1124.14 296.937C1116.19 298.363 1110.2 297.847 1105.73 296.128C1101.27 294.413 1098.27 291.481 1096.33 287.962C1092.41 280.876 1092.74 271.374 1094.31 264.738L1094.42 264.292L1094.06 264.003C1090.43 261.055 1088.82 258.095 1088.48 255.534C1088.14 252.981 1089.05 250.728 1090.67 249.125C1093.92 245.92 1100.04 245.29 1104.58 250.493L1104.98 250.955L1105.51 250.642C1108.72 248.742 1112.68 247.697 1116.35 247.174C1120.01 246.651 1123.34 246.656 1125.26 246.818L1125.95 246.876L1126.05 246.195Z",stroke:"white","stroke-linecap":"round"})]}),t[20]=w):w=t[20];let T;t[21]===Symbol.for("react.memo_cache_sentinel")?(T=u.jsxs("radialGradient",{id:"paint0_radial_66_172",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(727.04 228.145) scale(931.886 139.17)",children:[u.jsx("stop",{"stop-color":"white"}),u.jsx("stop",{offset:"1"})]}),t[21]=T):T=t[21];let I;t[22]===Symbol.for("react.memo_cache_sentinel")?(I=u.jsxs("radialGradient",{id:"paint1_radial_66_172",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(761.417 381.03) scale(1411.58 162.517)",children:[u.jsx("stop",{"stop-color":"white"}),u.jsx("stop",{offset:"1"})]}),t[22]=I):I=t[22];let S;t[23]===Symbol.for("react.memo_cache_sentinel")?(S=u.jsxs("radialGradient",{id:"paint2_radial_66_172",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(761.417 267.03) scale(1063.58 122.451)",children:[u.jsx("stop",{"stop-color":"white"}),u.jsx("stop",{offset:"1"})]}),t[23]=S):S=t[23];let C;t[24]===Symbol.for("react.memo_cache_sentinel")?(C=u.jsxs("radialGradient",{id:"paint4_radial_66_172",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(761.417 307.03) scale(1063.58 122.451)",children:[u.jsx("stop",{"stop-color":"white"}),u.jsx("stop",{offset:"1"})]}),t[24]=C):C=t[24];let D;t[25]===Symbol.for("react.memo_cache_sentinel")?(D=u.jsxs("radialGradient",{id:"paint6_radial_66_172",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(761.417 347.03) scale(1063.58 122.451)",children:[u.jsx("stop",{"stop-color":"white"}),u.jsx("stop",{offset:"1"})]}),t[25]=D):D=t[25];let Y;return t[26]===Symbol.for("react.memo_cache_sentinel")?(Y=u.jsxs("svg",{ref:e,width:"100%",className:"w-full aspect-1522/383",viewBox:"0 0 1522 383",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i,v,x,g,m,y,_,E,F,r,s,a,o,l,c,h,f,d,p,w,u.jsxs("defs",{children:[T,I,S,C,D,u.jsxs("linearGradient",{id:"paint_ll_66_172",x1:"0",y1:"0",x2:"100",y2:"0",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#1ECA53",stopOpacity:"0",offset:"0%"}),u.jsx("stop",{stopColor:"#1ECA53",stopOpacity:"1",offset:"50%"}),u.jsx("stop",{stopColor:"#1ECA53",stopOpacity:"0",offset:"100%"})]}),u.jsx("rect",{id:"clockbg_line0",x1:"0",y1:"0",width:"100",height:"2",fill:"url(#paint_ll_66_172)"})]})]}),t[26]=Y):Y=t[26],Y}function Q2(){const t={duration:1,ease:"none",repeat:-1,yoyo:!0};Vr.to("#clockbg_line1",{motionPath:{path:"#path_clockbg_line1",autoRotate:!0,align:"#path_clockbg_line1"},...t}),Vr.to("#clockbg_line2",{motionPath:{path:"#path_clockbg_line2",autoRotate:!0,align:"#path_clockbg_line2"},...t,delay:1}),Vr.to("#clockbg_line3",{motionPath:{path:"#path_clockbg_line3",autoRotate:!0,align:"#path_clockbg_line3"},...t,delay:2})}const Gi="167",q2=0,wo=1,K2=2,$l=1,Z2=2,gn=3,Sn=0,vt=1,Lt=2,Et=0,Ii=1,To=2,bo=3,Lo=4,J2=5,Zn=100,$2=101,e1=102,t1=103,n1=104,i1=200,r1=201,s1=202,a1=203,oa=204,la=205,o1=206,l1=207,c1=208,u1=209,h1=210,f1=211,d1=212,p1=213,m1=214,g1=0,v1=1,x1=2,ns=3,_1=4,C1=5,A1=6,S1=7,ec=0,M1=1,y1=2,Bn=0,E1=1,w1=2,T1=3,b1=4,L1=5,R1=6,D1=7,tc=300,Fi=301,Oi=302,ca=303,ua=304,cs=306,ha=1e3,$n=1001,fa=1002,Pt=1003,P1=1004,vr=1005,Ct=1006,xs=1007,ei=1008,At=1009,nc=1010,ic=1011,lr=1012,Xa=1013,Fn=1014,_n=1015,cr=1016,Ya=1017,Qa=1018,ii=1020,rc=35902,sc=1021,ac=1022,en=1023,oc=1024,lc=1025,Ui=1026,ri=1027,cc=1028,qa=1029,uc=1030,Ka=1031,Za=1033,Xr=33776,Yr=33777,Qr=33778,qr=33779,da=35840,pa=35841,ma=35842,ga=35843,va=36196,xa=37492,_a=37496,Ca=37808,Aa=37809,Sa=37810,Ma=37811,ya=37812,Ea=37813,wa=37814,Ta=37815,ba=37816,La=37817,Ra=37818,Da=37819,Pa=37820,Ia=37821,Kr=36492,Ua=36494,Ba=36495,hc=36283,Fa=36284,Oa=36285,Na=36286,si=3200,I1=3201,U1=0,B1=1,nn="",nt="srgb",on="srgb-linear",Ja="display-p3",us="display-p3-linear",is="linear",rt="srgb",rs="rec709",ss="p3",ui=7680,Ro=519,F1=512,O1=513,N1=514,fc=515,z1=516,G1=517,H1=518,k1=519,Do=35044,Po="300 es",Cn=2e3,as=2001;class yn{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,za=180/Math.PI;function ur(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[n&63|128]+St[n>>8&255]+"-"+St[n>>16&255]+St[n>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function yt(t,e,n){return Math.max(e,Math.min(n,t))}function V1(t,e){return(t%e+e)%e}function Cs(t,e,n){return(1-n)*t+n*e}function ji(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],v=i[8],x=r[0],g=r[3],m=r[6],y=r[1],_=r[4],E=r[7],F=r[2],w=r[5],T=r[8];return s[0]=a*x+o*y+l*F,s[3]=a*g+o*_+l*w,s[6]=a*m+o*E+l*T,s[1]=c*x+h*y+f*F,s[4]=c*g+h*_+f*w,s[7]=c*m+h*E+f*T,s[2]=d*x+p*y+v*F,s[5]=d*g+p*_+v*w,s[8]=d*m+p*E+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,p=c*s-a*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(As.makeScale(e,n)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,n){return this.premultiply(As.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Ge;function dc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function os(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j1(){const t=os("canvas");return t.style.display="block",t}const Io={};function rr(t){t in Io||(Io[t]=!0,console.warn(t))}function W1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Uo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[on]:{transfer:is,primaries:rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[nt]:{transfer:rt,primaries:rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[us]:{transfer:is,primaries:ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Bo),fromReference:t=>t.applyMatrix3(Uo)},[Ja]:{transfer:rt,primaries:ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bo),fromReference:t=>t.applyMatrix3(Uo).convertLinearToSRGB()}},X1=new Set([on,us]),et={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!X1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Wi[e].toReference,r=Wi[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Wi[t].primaries},getTransfer:function(t){return t===nn?is:Wi[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Wi[e].luminanceCoefficients)}};function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hi;class Y1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=os("canvas")),hi.width=e.width,hi.height=e.height;const i=hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=os("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q1=0;class pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ms(r[a].image)):s.push(Ms(r[a]))}else s=Ms(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ms(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Y1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q1=0;class xt extends yn{constructor(e=xt.DEFAULT_IMAGE,n=xt.DEFAULT_MAPPING,i=$n,r=$n,s=Ct,a=ei,o=en,l=At,c=xt.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ur(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=tc;xt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(p+1)/2,F=(m+1)/2,w=(h+d)/4,T=(f+x)/4,I=(v+g)/4;return _>E&&_>F?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=T/i):E>F?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=I/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=T/s,r=I/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-v)*(g-v)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-v)/y,this.y=(f-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K1 extends yn{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new pc(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wt extends K1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mc extends xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z1 extends xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||c!==p||h!==v){let g=1-o;const m=l*d+c*p+h*v+f*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const F=Math.sqrt(_),w=Math.atan2(F,m*y);g=Math.sin(g*w)/F,o=Math.sin(o*w)/F}const E=o*y;if(l=l*g+d*E,c=c*g+p*E,h=h*g+v*E,f=f*g+x*E,g===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+h*f+l*p-c*d,e[n+1]=l*v+h*d+c*f-o*p,e[n+2]=c*v+h*p+o*d-l*f,e[n+3]=h*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"YZX":this._x=d*h*f+c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f-d*p*v;break;case"XZY":this._x=d*h*f-c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fo.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fo.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new B,Fo=new hr;class fr{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(s,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),_r.subVectors(this.max,Xi),fi.subVectors(e.a,Xi),di.subVectors(e.b,Xi),pi.subVectors(e.c,Xi),bn.subVectors(di,fi),Ln.subVectors(pi,di),Vn.subVectors(fi,pi);let n=[0,-bn.z,bn.y,0,-Ln.z,Ln.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,Ln.z,0,-Ln.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-Ln.y,Ln.x,0,-Vn.y,Vn.x,0];return!Es(n,fi,di,pi,_r)||(n=[1,0,0,0,1,0,0,0,1],!Es(n,fi,di,pi,_r))?!1:(Cr.crossVectors(bn,Ln),n=[Cr.x,Cr.y,Cr.z],Es(n,fi,di,pi,_r))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new B,new B,new B,new B,new B,new B,new B,new B],qt=new B,xr=new fr,fi=new B,di=new B,pi=new B,bn=new B,Ln=new B,Vn=new B,Xi=new B,_r=new B,Cr=new B,jn=new B;function Es(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){jn.fromArray(t,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=n.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const J1=new fr,Yi=new B,ws=new B;class $a{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const n=Yi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Yi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ws)),this.expandByPoint(Yi.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new B,Ts=new B,Ar=new B,Rn=new B,bs=new B,Sr=new B,Ls=new B;class $1{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,n),fn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ts.copy(e).add(n).multiplyScalar(.5),Ar.copy(n).sub(e).normalize(),Rn.copy(this.origin).sub(Ts);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ar),o=Rn.dot(this.direction),l=-Rn.dot(Ar),c=Rn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const x=1/h;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ts).addScaledVector(Ar,d),p}intersectSphere(e,n){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,n,i,r,s){bs.subVectors(n,e),Sr.subVectors(i,e),Ls.crossVectors(bs,Sr);let a=this.direction.dot(Ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(Sr.crossVectors(Rn,Sr));if(l<0)return null;const c=o*this.direction.dot(bs.cross(Rn));if(c<0||l+c>a)return null;const h=-o*Rn.dot(Ls);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,c,h,f,d,p,v,x,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,p,v,x,g)}set(e,n,i,r,s,a,o,l,c,h,f,d,p,v,x,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,v=o*h,x=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,v=c*h,x=c*f;n[0]=d+x*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-v,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,v=c*h,x=c*f;n[0]=d-x*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*h,n[9]=x-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,v=o*h,x=o*f;n[0]=l*h,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-d*f,n[8]=v*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+v,n[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+x,n[5]=a*h,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,n,i){const r=this.elements;return Ft.subVectors(e,n),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Dn.crossVectors(i,Ft),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Dn.crossVectors(i,Ft)),Dn.normalize(),Mr.crossVectors(Ft,Dn),r[0]=Dn.x,r[4]=Mr.x,r[8]=Ft.x,r[1]=Dn.y,r[5]=Mr.y,r[9]=Ft.y,r[2]=Dn.z,r[6]=Mr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],v=i[2],x=i[6],g=i[10],m=i[14],y=i[3],_=i[7],E=i[11],F=i[15],w=r[0],T=r[4],I=r[8],S=r[12],C=r[1],D=r[5],Y=r[9],k=r[13],z=r[2],L=r[6],P=r[10],H=r[14],U=r[3],q=r[7],ee=r[11],te=r[15];return s[0]=a*w+o*C+l*z+c*U,s[4]=a*T+o*D+l*L+c*q,s[8]=a*I+o*Y+l*P+c*ee,s[12]=a*S+o*k+l*H+c*te,s[1]=h*w+f*C+d*z+p*U,s[5]=h*T+f*D+d*L+p*q,s[9]=h*I+f*Y+d*P+p*ee,s[13]=h*S+f*k+d*H+p*te,s[2]=v*w+x*C+g*z+m*U,s[6]=v*T+x*D+g*L+m*q,s[10]=v*I+x*Y+g*P+m*ee,s[14]=v*S+x*k+g*H+m*te,s[3]=y*w+_*C+E*z+F*U,s[7]=y*T+_*D+E*L+F*q,s[11]=y*I+_*Y+E*P+F*ee,s[15]=y*S+_*k+E*H+F*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],x=e[7],g=e[11],m=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+x*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+g*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*h-i*c*h)+m*(-r*o*h-n*l*f+n*o*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],x=e[13],g=e[14],m=e[15],y=f*g*c-x*d*c+x*l*p-o*g*p-f*l*m+o*d*m,_=v*d*c-h*g*c-v*l*p+a*g*p+h*l*m-a*d*m,E=h*x*c-v*f*c+v*o*p-a*x*p-h*o*m+a*f*m,F=v*f*l-h*x*l-v*o*d+a*x*d+h*o*g-a*f*g,w=n*y+i*_+r*E+s*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(x*d*s-f*g*s-x*r*p+i*g*p+f*r*m-i*d*m)*T,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*m+i*l*m)*T,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*T,e[4]=_*T,e[5]=(h*g*s-v*d*s+v*r*p-n*g*p-h*r*m+n*d*m)*T,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*m-n*l*m)*T,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*p+n*l*p)*T,e[8]=E*T,e[9]=(v*f*s-h*x*s-v*i*p+n*x*p+h*i*m-n*f*m)*T,e[10]=(a*x*s-v*o*s+v*i*c-n*x*c-a*i*m+n*o*m)*T,e[11]=(h*o*s-a*f*s-h*i*c+n*f*c+a*i*p-n*o*p)*T,e[12]=F*T,e[13]=(h*x*r-v*f*r+v*i*d-n*x*d-h*i*g+n*f*g)*T,e[14]=(v*o*r-a*x*r-v*i*l+n*x*l+a*i*g-n*o*g)*T,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*d+n*o*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,p=s*h,v=s*f,x=a*h,g=a*f,m=o*f,y=l*c,_=l*h,E=l*f,F=i.x,w=i.y,T=i.z;return r[0]=(1-(x+m))*F,r[1]=(p+E)*F,r[2]=(v-_)*F,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(d+m))*w,r[6]=(g+y)*w,r[7]=0,r[8]=(v+_)*T,r[9]=(g-y)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,h=1/a,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,n.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Cn){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(o===Cn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===as)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Cn){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(a-s),d=(n+e)*c,p=(i+r)*h;let v,x;if(o===Cn)v=(a+s)*f,x=-2*f;else if(o===as)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mi=new B,Kt=new ht,eu=new B(0,0,0),tu=new B(1,1,1),Dn=new B,Mr=new B,Ft=new B,Oo=new ht,No=new hr;class Mn{constructor(e=0,n=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nu=0;const zo=new B,gi=new hr,dn=new ht,yr=new B,Qi=new B,iu=new B,ru=new hr,Go=new B(1,0,0),Ho=new B(0,1,0),ko=new B(0,0,1),Vo={type:"added"},su={type:"removed"},vi={type:"childadded",child:null},Rs={type:"childremoved",child:null};class Gt extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,n=new Mn,i=new hr,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gi.setFromAxisAngle(e,n),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,n){return gi.setFromAxisAngle(e,n),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,n){return zo.copy(e).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yr.copy(e):yr.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Qi,yr,this.up):dn.lookAt(yr,Qi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(dn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vo),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(su),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vo),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new B,pn=new B,Ds=new B,mn=new B,xi=new B,_i=new B,jo=new B,Ps=new B,Is=new B,Us=new B;class rn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zt.subVectors(e,n),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zt.subVectors(r,n),pn.subVectors(i,n),Ds.subVectors(e,n);const a=Zt.dot(Zt),o=Zt.dot(pn),l=Zt.dot(Ds),c=pn.dot(pn),h=pn.dot(Ds),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static isFrontFacing(e,n,i,r){return Zt.subVectors(i,n),pn.subVectors(e,n),Zt.cross(pn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Zt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,i),_i.subVectors(s,i),Ps.subVectors(e,i);const l=xi.dot(Ps),c=_i.dot(Ps);if(l<=0&&c<=0)return n.copy(i);Is.subVectors(e,r);const h=xi.dot(Is),f=_i.dot(Is);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(xi,a);Us.subVectors(e,s);const p=xi.dot(Us),v=_i.dot(Us);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(_i,o);const g=h*v-p*f;if(g<=0&&f-h>=0&&p-v>=0)return jo.subVectors(s,r),o=(f-h)/(f-h+(p-v)),n.copy(r).addScaledVector(jo,o);const m=1/(g+x+d);return a=x*m,o=d*m,n.copy(i).addScaledVector(xi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Bs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=V1(e,1),n=yt(n,0,1),i=yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nt){const i=vc[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return et.fromWorkingColorSpace(Mt.copy(this),e),Math.round(yt(Mt.r*255,0,255))*65536+Math.round(yt(Mt.g*255,0,255))*256+Math.round(yt(Mt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Mt.copy(this),n);const i=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Mt.copy(this),n),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=nt){et.fromWorkingColorSpace(Mt.copy(this),e);const n=Mt.r,i=Mt.g,r=Mt.b;return e!==nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+n,Pn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pn),e.getHSL(Er);const i=Cs(Pn.h,Er.h,n),r=Cs(Pn.s,Er.s,n),s=Cs(Pn.l,Er.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ve;Ve.NAMES=vc;let au=0;class Hi extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Ii,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oa&&(i.blendSrc=this.blendSrc),this.blendDst!==la&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ro&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class xc extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new B,wr=new he;class Ht{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Do,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return rr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wr.fromBufferAttribute(this,n),wr.applyMatrix3(e),this.setXY(n,wr.x,wr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix3(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix4(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyNormalMatrix(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.transformDirection(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class _c extends Ht{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cc extends Ht{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends Ht{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ou=0;const jt=new ht,Fs=new Gt,Ci=new B,Ot=new fr,qi=new fr,mt=new B;class ln extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?Cc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,n,i){return jt.makeTranslation(e,n,i),this.applyMatrix4(jt),this}scale(e,n,i){return jt.makeScale(e,n,i),this.applyMatrix4(jt),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ot.min,qi.min),Ot.expandByPoint(mt),mt.addVectors(Ot.max,qi.max),Ot.expandByPoint(mt)):(Ot.expandByPoint(qi.min),Ot.expandByPoint(qi.max))}Ot.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),mt.add(Ci)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new B,l[I]=new B;const c=new B,h=new B,f=new B,d=new he,p=new he,v=new he,x=new B,g=new B;function m(I,S,C){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,C),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,C),h.sub(c),f.sub(c),p.sub(d),v.sub(d);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),o[I].add(x),o[S].add(x),o[C].add(x),l[I].add(g),l[S].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,S=y.length;I<S;++I){const C=y[I],D=C.start,Y=C.count;for(let k=D,z=D+Y;k<z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new B,E=new B,F=new B,w=new B;function T(I){F.fromBufferAttribute(r,I),w.copy(F);const S=o[I];_.copy(S),_.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(w,S);const D=E.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,S=y.length;I<S;++I){const C=y[I],D=C.start,Y=C.count;for(let k=D,z=D+Y;k<z;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)mt.fromBufferAttribute(e,n),mt.normalize(),e.setXYZ(n,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)d[v++]=c[p++]}return new Ht(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new ht,Wn=new $1,Tr=new $a,Xo=new B,Ai=new B,Si=new B,Mi=new B,Os=new B,br=new B,Lr=new he,Rr=new he,Dr=new he,Yo=new B,Qo=new B,qo=new B,Pr=new B,Ir=new B;class zt extends Gt{constructor(e=new ln,n=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Os.fromBufferAttribute(f,e),a?br.addScaledVector(Os,h):br.addScaledVector(Os.sub(n),h))}n.add(br)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Tr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Tr,Xo)===null||Wn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Wo),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wn)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=a[g.materialIndex],y=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,F=_;E<F;E+=3){const w=o.getX(E),T=o.getX(E+1),I=o.getX(E+2);r=Ur(this,m,e,i,c,h,f,w,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const y=o.getX(g),_=o.getX(g+1),E=o.getX(g+2);r=Ur(this,a,e,i,c,h,f,y,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=a[g.materialIndex],y=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=y,F=_;E<F;E+=3){const w=E,T=E+1,I=E+2;r=Ur(this,m,e,i,c,h,f,w,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const y=g,_=g+1,E=g+2;r=Ur(this,a,e,i,c,h,f,y,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function lu(t,e,n,i,r,s,a,o){let l;if(e.side===vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sn,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ir);return c<n.near||c>n.far?null:{distance:c,point:Ir.clone(),object:t}}function Ur(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ai),t.getVertexPosition(l,Si),t.getVertexPosition(c,Mi);const h=lu(t,e,n,i,Ai,Si,Mi,Pr);if(h){r&&(Lr.fromBufferAttribute(r,o),Rr.fromBufferAttribute(r,l),Dr.fromBufferAttribute(r,c),h.uv=rn.getInterpolation(Pr,Ai,Si,Mi,Lr,Rr,Dr,new he)),s&&(Lr.fromBufferAttribute(s,o),Rr.fromBufferAttribute(s,l),Dr.fromBufferAttribute(s,c),h.uv1=rn.getInterpolation(Pr,Ai,Si,Mi,Lr,Rr,Dr,new he)),a&&(Yo.fromBufferAttribute(a,o),Qo.fromBufferAttribute(a,l),qo.fromBufferAttribute(a,c),h.normal=rn.getInterpolation(Pr,Ai,Si,Mi,Yo,Qo,qo,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};rn.getNormal(Ai,Si,Mi,f.normal),h.face=f}return h}class dr extends ln{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(f,2));function v(x,g,m,y,_,E,F,w,T,I,S){const C=E/T,D=F/I,Y=E/2,k=F/2,z=w/2,L=T+1,P=I+1;let H=0,U=0;const q=new B;for(let ee=0;ee<P;ee++){const te=ee*D-k;for(let xe=0;xe<L;xe++){const ue=xe*C-Y;q[x]=ue*y,q[g]=te*_,q[m]=z,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=w>0?1:-1,h.push(q.x,q.y,q.z),f.push(xe/T),f.push(1-ee/I),H+=1}}for(let ee=0;ee<I;ee++)for(let te=0;te<T;te++){const xe=d+te+L*ee,ue=d+te+L*(ee+1),X=d+(te+1)+L*(ee+1),J=d+(te+1)+L*ee;l.push(xe,ue,J),l.push(ue,X,J),U+=6}o.addGroup(p,U,S),p+=U,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function bt(t){const e={};for(let n=0;n<t.length;n++){const i=Ni(t[n]);for(const r in i)e[r]=i[r]}return e}function cu(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ac(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const uu={clone:Ni,merge:bt};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class eo extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Cn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new B,Ko=new he,Zo=new he;class Nt extends eo{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,n){return this.getViewBounds(e,Ko,Zo),n.subVectors(Zo,Ko)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_s*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yi=-90,Ei=1;class du extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(yi,Ei,e,n);r.layers=this.layers,this.add(r);const s=new Nt(yi,Ei,e,n);s.layers=this.layers,this.add(s);const a=new Nt(yi,Ei,e,n);a.layers=this.layers,this.add(a);const o=new Nt(yi,Ei,e,n);o.layers=this.layers,this.add(o);const l=new Nt(yi,Ei,e,n);l.layers=this.layers,this.add(l);const c=new Nt(yi,Ei,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Sc extends xt{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Fi,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pu extends wt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dr(5,5,5),s=new ft({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vt,blending:Et});s.uniforms.tEquirect.value=n;const a=new zt(r,s),o=n.minFilter;return n.minFilter===ei&&(n.minFilter=Ct),new du(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ns=new B,mu=new B,gu=new Ge;class qn{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ns.subVectors(i,n).cross(mu.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ns),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gu.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new $a,Br=new B;class Mc{constructor(e=new qn,n=new qn,i=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Cn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],v=r[9],x=r[10],g=r[11],m=r[12],y=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,g-p,E-m).normalize(),i[1].setComponents(l+s,d+c,g+p,E+m).normalize(),i[2].setComponents(l+a,d+h,g+v,E+y).normalize(),i[3].setComponents(l-a,d-h,g-v,E-y).normalize(),i[4].setComponents(l-o,d-f,g-x,E-_).normalize(),n===Cn)i[5].setComponents(l+o,d+f,g+x,E+_).normalize();else if(n===as)i[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Br.x=r.normal.x>0?e.max.x:e.min.x,Br.y=r.normal.y>0?e.max.y:e.min.y,Br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vu(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&d.length===0&&t.bufferSubData(c,0,h),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class zi extends ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,p=[],v=[],x=[],g=[];for(let m=0;m<h;m++){const y=m*d-a;for(let _=0;_<c;_++){const E=_*f-s;v.push(E,-y,0),x.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const _=y+c*m,E=y+c*(m+1),F=y+1+c*(m+1),w=y+1+c*m;p.push(_,E,w),p.push(E,F,w)}this.setIndex(p),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ch=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Th=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:xu,alphahash_pars_fragment:_u,alphamap_fragment:Cu,alphamap_pars_fragment:Au,alphatest_fragment:Su,alphatest_pars_fragment:Mu,aomap_fragment:yu,aomap_pars_fragment:Eu,batching_pars_vertex:wu,batching_vertex:Tu,begin_vertex:bu,beginnormal_vertex:Lu,bsdfs:Ru,iridescence_fragment:Du,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:Fu,color_fragment:Ou,color_pars_fragment:Nu,color_pars_vertex:zu,color_vertex:Gu,common:Hu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Vu,displacementmap_pars_vertex:ju,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:Yu,colorspace_fragment:Qu,colorspace_pars_fragment:qu,envmap_fragment:Ku,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:$u,envmap_physical_pars_fragment:uh,envmap_vertex:eh,fog_vertex:th,fog_pars_vertex:nh,fog_fragment:ih,fog_pars_fragment:rh,gradientmap_pars_fragment:sh,lightmap_pars_fragment:ah,lights_lambert_fragment:oh,lights_lambert_pars_fragment:lh,lights_pars_begin:ch,lights_toon_fragment:hh,lights_toon_pars_fragment:fh,lights_phong_fragment:dh,lights_phong_pars_fragment:ph,lights_physical_fragment:mh,lights_physical_pars_fragment:gh,lights_fragment_begin:vh,lights_fragment_maps:xh,lights_fragment_end:_h,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Ah,logdepthbuf_pars_vertex:Sh,logdepthbuf_vertex:Mh,map_fragment:yh,map_pars_fragment:Eh,map_particle_fragment:wh,map_particle_pars_fragment:Th,metalnessmap_fragment:bh,metalnessmap_pars_fragment:Lh,morphinstance_vertex:Rh,morphcolor_vertex:Dh,morphnormal_vertex:Ph,morphtarget_pars_vertex:Ih,morphtarget_vertex:Uh,normal_fragment_begin:Bh,normal_fragment_maps:Fh,normal_pars_fragment:Oh,normal_pars_vertex:Nh,normal_vertex:zh,normalmap_pars_fragment:Gh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:kh,clearcoat_pars_fragment:Vh,iridescence_pars_fragment:jh,opaque_fragment:Wh,packing:Xh,premultiplied_alpha_fragment:Yh,project_vertex:Qh,dithering_fragment:qh,dithering_pars_fragment:Kh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Jh,shadowmap_pars_fragment:$h,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:sf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:uf,tonemapping_pars_fragment:hf,transmission_fragment:ff,transmission_pars_fragment:df,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:vf,background_vert:xf,background_frag:_f,backgroundCube_vert:Cf,backgroundCube_frag:Af,cube_vert:Sf,cube_frag:Mf,depth_vert:yf,depth_frag:Ef,distanceRGBA_vert:wf,distanceRGBA_frag:Tf,equirect_vert:bf,equirect_frag:Lf,linedashed_vert:Rf,linedashed_frag:Df,meshbasic_vert:Pf,meshbasic_frag:If,meshlambert_vert:Uf,meshlambert_frag:Bf,meshmatcap_vert:Ff,meshmatcap_frag:Of,meshnormal_vert:Nf,meshnormal_frag:zf,meshphong_vert:Gf,meshphong_frag:Hf,meshphysical_vert:kf,meshphysical_frag:Vf,meshtoon_vert:jf,meshtoon_frag:Wf,points_vert:Xf,points_frag:Yf,shadow_vert:Qf,shadow_frag:qf,sprite_vert:Kf,sprite_frag:Zf},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},tn={basic:{uniforms:bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:bt([de.points,de.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:bt([de.common,de.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:bt([de.sprite,de.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:bt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:bt([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};tn.physical={uniforms:bt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Fr={r:0,b:0,g:0},Yn=new Mn,Jf=new ht;function $f(t,e,n,i,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function x(y){let _=!1;const E=v(y);E===null?m(o,l):E&&E.isColor&&(m(E,1),_=!0);const F=t.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,_){const E=v(_);E&&(E.isCubeTexture||E.mapping===cs)?(h===void 0&&(h=new zt(new dr(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Ni(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yn.copy(_.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Yn)),h.material.toneMapped=et.getTransfer(E.colorSpace)!==rt,(f!==E||d!==E.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zt(new zi(2,2),new ft({name:"BackgroundMaterial",uniforms:Ni(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(Fr,Ac(t)),i.buffers.color.setClear(Fr.r,Fr.g,Fr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:x,addToRenderList:g}}function e0(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,D,Y,k,z){let L=!1;const P=f(k,Y,D);s!==P&&(s=P,c(s.object)),L=p(C,k,Y,z),L&&v(C,k,Y,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,E(C,D,Y,k),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function h(C){return t.deleteVertexArray(C)}function f(C,D,Y){const k=Y.wireframe===!0;let z=i[C.id];z===void 0&&(z={},i[C.id]=z);let L=z[D.id];L===void 0&&(L={},z[D.id]=L);let P=L[k];return P===void 0&&(P=d(l()),L[k]=P),P}function d(C){const D=[],Y=[],k=[];for(let z=0;z<n;z++)D[z]=0,Y[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:k,object:C,attributes:{},index:null}}function p(C,D,Y,k){const z=s.attributes,L=D.attributes;let P=0;const H=Y.getAttributes();for(const U in H)if(H[U].location>=0){const ee=z[U];let te=L[U];if(te===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;P++}return s.attributesNum!==P||s.index!==k}function v(C,D,Y,k){const z={},L=D.attributes;let P=0;const H=Y.getAttributes();for(const U in H)if(H[U].location>=0){let ee=L[U];ee===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),z[U]=te,P++}s.attributes=z,s.attributesNum=P,s.index=k}function x(){const C=s.newAttributes;for(let D=0,Y=C.length;D<Y;D++)C[D]=0}function g(C){m(C,0)}function m(C,D){const Y=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;Y[C]=1,k[C]===0&&(t.enableVertexAttribArray(C),k[C]=1),z[C]!==D&&(t.vertexAttribDivisor(C,D),z[C]=D)}function y(){const C=s.newAttributes,D=s.enabledAttributes;for(let Y=0,k=D.length;Y<k;Y++)D[Y]!==C[Y]&&(t.disableVertexAttribArray(Y),D[Y]=0)}function _(C,D,Y,k,z,L,P){P===!0?t.vertexAttribIPointer(C,D,Y,z,L):t.vertexAttribPointer(C,D,Y,k,z,L)}function E(C,D,Y,k){x();const z=k.attributes,L=Y.getAttributes(),P=D.defaultAttributeValues;for(const H in L){const U=L[H];if(U.location>=0){let q=z[H];if(q===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const ee=q.normalized,te=q.itemSize,xe=e.get(q);if(xe===void 0)continue;const ue=xe.buffer,X=xe.type,J=xe.bytesPerElement,re=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===Xa;if(q.isInterleavedBufferAttribute){const le=q.data,Me=le.stride,ye=q.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<U.locationSize;_e++)m(U.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<U.locationSize;_e++)g(U.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let _e=0;_e<U.locationSize;_e++)_(U.location+_e,te/U.locationSize,X,ee,Me*J,(ye+te/U.locationSize*_e)*J,re)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)m(U.location+le,q.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<U.locationSize;le++)g(U.location+le);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let le=0;le<U.locationSize;le++)_(U.location+le,te/U.locationSize,X,ee,te*J,te/U.locationSize*le*J,re)}}else if(P!==void 0){const ee=P[H];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(U.location,ee);break;case 3:t.vertexAttrib3fv(U.location,ee);break;case 4:t.vertexAttrib4fv(U.location,ee);break;default:t.vertexAttrib1fv(U.location,ee)}}}}y()}function F(){I();for(const C in i){const D=i[C];for(const Y in D){const k=D[Y];for(const z in k)h(k[z].object),delete k[z];delete D[Y]}delete i[C]}}function w(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const Y in D){const k=D[Y];for(const z in k)h(k[z].object),delete k[z];delete D[Y]}delete i[C.id]}function T(C){for(const D in i){const Y=i[D];if(Y[C.id]===void 0)continue;const k=Y[C.id];for(const z in k)h(k[z].object),delete k[z];delete Y[C.id]}}function I(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function t0(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=h[v];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=h[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function n0(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==en&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==At&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!T)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,F=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:F}}function i0(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const y=s?0:i,_=y*4;let E=m.clippingState||null;l.value=E,E=h(v,d,_,p);for(let F=0;F!==_;++F)E[F]=n[F];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,v){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const m=p+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,E=p;_!==x;++_,E+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function r0(t){let e=new WeakMap;function n(a,o){return o===ca?a.mapping=Fi:o===ua&&(a.mapping=Oi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ca||o===ua)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pu(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s0 extends eo{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Di=4,Jo=[.125,.215,.35,.446,.526,.582],Jn=20,zs=new s0,$o=new Ve;let Gs=null,Hs=0,ks=0,Vs=!1;const Kn=(1+Math.sqrt(5))/2,wi=1/Kn,el=[new B(-Kn,wi,0),new B(Kn,wi,0),new B(-wi,0,Kn),new B(wi,0,Kn),new B(0,Kn,-wi),new B(0,Kn,wi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gs,Hs,ks),this._renderer.xr.enabled=Vs,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:cr,format:en,colorSpace:on,depthBuffer:!1},r=nl(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(s)),this._blurMaterial=o0(s,e,n)}return r}_compileMaterial(e){const n=new zt(this._lodPlanes[0],e);this._renderer.compile(n,zs)}_sceneToCubeUV(e,n,i,r){const o=new Nt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor($o),h.toneMapping=Bn,h.autoClear=!1;const p=new xc({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),v=new zt(new dr,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy($o),x=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;Or(r,y*_,m>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,zs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=el[(r-s-1)%el.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new zt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=s/v,g=isFinite(s)?1+Math.floor(h*x):Jn;g>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Jn}`);const m=[];let y=0;for(let T=0;T<Jn;++T){const I=T/x,S=Math.exp(-I*I/2);m.push(S),T===0?y+=S:T<g&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const E=this._sizeLods[r],F=3*E*(r>_-Di?r-_+Di:0),w=4*(this._cubeSize-E);Or(n,F,w,3*E,2*E),l.setRenderTarget(n),l.render(f,zs)}}function a0(t){const e=[],n=[],i=[];let r=t;const s=t-Di+1+Jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Di?l=Jo[a-t+Di-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,x=3,g=2,m=1,y=new Float32Array(x*v*p),_=new Float32Array(g*v*p),E=new Float32Array(m*v*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,I=w>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(S,x*v*w),_.set(d,g*v*w);const C=[w,w,w,w,w,w];E.set(C,m*v*w)}const F=new ln;F.setAttribute("position",new Ht(y,x)),F.setAttribute("uv",new Ht(_,g)),F.setAttribute("faceIndex",new Ht(E,m)),e.push(F),r>Di&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nl(t,e,n){const i=new wt(t,e,n);return i.texture.mapping=cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function o0(t,e,n){const i=new Float32Array(Jn),r=new B(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Et,depthTest:!1,depthWrite:!1})}function il(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Et,depthTest:!1,depthWrite:!1})}function rl(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Et,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l0(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ua,h=l===Fi||l===Oi;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new tl(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new tl(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function c0(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function u0(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let g=0,m=x.length;g<m;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let _=0,E=y.length;_<E;_+=3){const F=y[_+0],w=y[_+1],T=y[_+2];d.push(F,w,w,T,T,F)}}else if(v!==void 0){const y=v.array;x=v.version;for(let _=0,E=y.length/3-1;_<E;_+=3){const F=_+0,w=_+1,T=_+2;d.push(F,w,w,T,T,F)}}else return;const g=new(dc(d)?Cc:_c)(d,1);g.version=x;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function h0(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*a,v),n.update(p,i,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let g=0;for(let m=0;m<v;m++)g+=p[m];n.update(g,i,1)}function f(d,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let m=0;for(let y=0;y<v;y++)m+=p[y];for(let y=0;y<x.length;y++)n.update(m,i,x[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function f0(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function d0(t,e,n){const i=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let E=o.attributes.position.count*_,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*F*4*f),T=new mc(w,E,F,f);T.type=_n,T.needsUpdate=!0;const I=_*4;for(let C=0;C<f;C++){const D=g[C],Y=m[C],k=y[C],z=E*F*4*C;for(let L=0;L<D.count;L++){const P=L*I;p===!0&&(r.fromBufferAttribute(D,L),w[z+P+0]=r.x,w[z+P+1]=r.y,w[z+P+2]=r.z,w[z+P+3]=0),v===!0&&(r.fromBufferAttribute(Y,L),w[z+P+4]=r.x,w[z+P+5]=r.y,w[z+P+6]=r.z,w[z+P+7]=0),x===!0&&(r.fromBufferAttribute(k,L),w[z+P+8]=r.x,w[z+P+9]=r.y,w[z+P+10]=r.z,w[z+P+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new he(E,F)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function p0(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class no extends xt{constructor(e,n,i,r,s,a,o,l,c,h=Ui){if(h!==Ui&&h!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ui&&(i=Fn),i===void 0&&h===ri&&(i=ii),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ec=new xt,sl=new no(1,1),wc=new mc,Tc=new Z1,bc=new Sc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function ki(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=al[r];if(s===void 0&&(s=new Float32Array(r),al[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hs(t,e){let n=ol[e];n===void 0&&(n=new Int32Array(e),ol[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function m0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function g0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2fv(this.addr,e),pt(n,e)}}function v0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dt(n,e))return;t.uniform3fv(this.addr,e),pt(n,e)}}function x0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4fv(this.addr,e),pt(n,e)}}function _0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pt(n,e)}else{if(dt(n,i))return;ul.set(i),t.uniformMatrix2fv(this.addr,!1,ul),pt(n,i)}}function C0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pt(n,e)}else{if(dt(n,i))return;cl.set(i),t.uniformMatrix3fv(this.addr,!1,cl),pt(n,i)}}function A0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pt(n,e)}else{if(dt(n,i))return;ll.set(i),t.uniformMatrix4fv(this.addr,!1,ll),pt(n,i)}}function S0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2iv(this.addr,e),pt(n,e)}}function y0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dt(n,e))return;t.uniform3iv(this.addr,e),pt(n,e)}}function E0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4iv(this.addr,e),pt(n,e)}}function w0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function T0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2uiv(this.addr,e),pt(n,e)}}function b0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dt(n,e))return;t.uniform3uiv(this.addr,e),pt(n,e)}}function L0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4uiv(this.addr,e),pt(n,e)}}function R0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(sl.compareFunction=fc,s=sl):s=Ec,n.setTexture2D(e||s,r)}function D0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Tc,r)}function P0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bc,r)}function I0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wc,r)}function U0(t){switch(t){case 5126:return m0;case 35664:return g0;case 35665:return v0;case 35666:return x0;case 35674:return _0;case 35675:return C0;case 35676:return A0;case 5124:case 35670:return S0;case 35667:case 35671:return M0;case 35668:case 35672:return y0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return b0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function B0(t,e){t.uniform1fv(this.addr,e)}function F0(t,e){const n=ki(e,this.size,2);t.uniform2fv(this.addr,n)}function O0(t,e){const n=ki(e,this.size,3);t.uniform3fv(this.addr,n)}function N0(t,e){const n=ki(e,this.size,4);t.uniform4fv(this.addr,n)}function z0(t,e){const n=ki(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G0(t,e){const n=ki(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function H0(t,e){const n=ki(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function k0(t,e){t.uniform1iv(this.addr,e)}function V0(t,e){t.uniform2iv(this.addr,e)}function j0(t,e){t.uniform3iv(this.addr,e)}function W0(t,e){t.uniform4iv(this.addr,e)}function X0(t,e){t.uniform1uiv(this.addr,e)}function Y0(t,e){t.uniform2uiv(this.addr,e)}function Q0(t,e){t.uniform3uiv(this.addr,e)}function q0(t,e){t.uniform4uiv(this.addr,e)}function K0(t,e,n){const i=this.cache,r=e.length,s=hs(n,r);dt(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ec,s[a])}function Z0(t,e,n){const i=this.cache,r=e.length,s=hs(n,r);dt(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Tc,s[a])}function J0(t,e,n){const i=this.cache,r=e.length,s=hs(n,r);dt(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||bc,s[a])}function $0(t,e,n){const i=this.cache,r=e.length,s=hs(n,r);dt(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||wc,s[a])}function ed(t){switch(t){case 5126:return B0;case 35664:return F0;case 35665:return O0;case 35666:return N0;case 35674:return z0;case 35675:return G0;case 35676:return H0;case 5124:case 35670:return k0;case 35667:case 35671:return V0;case 35668:case 35672:return j0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return Q0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return $0}}class td{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U0(n.type)}}class nd{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ed(n.type)}}class id{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const js=/(\w+)(\])?(\[|\.)?/g;function hl(t,e){t.seq.push(e),t.map[e.id]=e}function rd(t,e,n){const i=t.name,r=i.length;for(js.lastIndex=0;;){const s=js.exec(i),a=js.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hl(n,c===void 0?new td(o,t,e):new nd(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new id(o),hl(n,f)),n=f}}}class Zr{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);rd(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sd=37297;let ad=0;function od(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function ld(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ss&&n===rs?i="LinearDisplayP3ToLinearSRGB":e===rs&&n===ss&&(i="LinearSRGBToLinearDisplayP3"),t){case on:case us:return[i,"LinearTransferOETF"];case nt:case Ja:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function dl(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+od(t.getShaderSource(e),a)}else return r}function cd(t,e){const n=ld(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ud(t,e){let n;switch(e){case E1:n="Linear";break;case w1:n="Reinhard";break;case T1:n="OptimizedCineon";break;case b1:n="ACESFilmic";break;case R1:n="AgX";break;case D1:n="Neutral";break;case L1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nr=new B;function hd(){et.getLuminanceCoefficients(Nr);const t=Nr.x.toFixed(4),e=Nr.y.toFixed(4),n=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fd(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function dd(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pd(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function er(t){return t!==""}function pl(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const md=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(t){return t.replace(md,vd)}const gd=new Map;function vd(t,e){let n=Re[e];if(n===void 0){const i=gd.get(e);if(i!==void 0)n=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ga(n)}const xd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(t){return t.replace(xd,_d)}function _d(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cd(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Z2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ad(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sd(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Md(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case M1:e="ENVMAP_BLENDING_MIX";break;case y1:e="ENVMAP_BLENDING_ADD";break}return e}function yd(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Ed(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Cd(n),c=Ad(n),h=Sd(n),f=Md(n),d=yd(n),p=fd(n),v=dd(s),x=r.createProgram();let g,m,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(er).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(er).join(`
`),m.length>0&&(m+=`
`)):(g=[vl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),m=[vl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bn?"#define TONE_MAPPING":"",n.toneMapping!==Bn?Re.tonemapping_pars_fragment:"",n.toneMapping!==Bn?ud("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,cd("linearToOutputTexel",n.outputColorSpace),hd(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(er).join(`
`)),a=Ga(a),a=pl(a,n),a=ml(a,n),o=Ga(o),o=pl(o,n),o=ml(o,n),a=gl(a),o=gl(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+a,E=y+m+o,F=fl(r,r.VERTEX_SHADER,_),w=fl(r,r.FRAGMENT_SHADER,E);r.attachShader(x,F),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(D){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(F).trim(),z=r.getShaderInfoLog(w).trim();let L=!0,P=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,F,w);else{const H=dl(r,F,"vertex"),U=dl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+H+`
`+U)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||z==="")&&(P=!1);P&&(D.diagnostics={runnable:L,programLog:Y,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(F),r.deleteShader(w),I=new Zr(r,x),S=pd(r,x)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(x,sd)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ad++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=w,this}let wd=0;class Td{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bd(e),n.set(e,i)),i}}class bd{constructor(e){this.id=wd++,this.code=e,this.usedTimes=0}}function Ld(t,e,n,i,r,s,a){const o=new gc,l=new Td,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,C,D,Y,k){const z=Y.fog,L=k.geometry,P=S.isMeshStandardMaterial?Y.environment:null,H=(S.isMeshStandardMaterial?n:e).get(S.envMap||P),U=H&&H.mapping===cs?H.image.height:null,q=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=ee!==void 0?ee.length:0;let xe=0;L.morphAttributes.position!==void 0&&(xe=1),L.morphAttributes.normal!==void 0&&(xe=2),L.morphAttributes.color!==void 0&&(xe=3);let ue,X,J,re;if(q){const Xe=tn[q];ue=Xe.vertexShader,X=Xe.fragmentShader}else ue=S.vertexShader,X=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const le=t.getRenderTarget(),Me=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,_e=!!S.map,We=!!S.matcap,R=!!H,Ye=!!S.aoMap,Ne=!!S.lightMap,ze=!!S.bumpMap,ge=!!S.normalMap,Ke=!!S.displacementMap,Te=!!S.emissiveMap,De=!!S.metalnessMap,b=!!S.roughnessMap,A=S.anisotropy>0,j=S.clearcoat>0,$=S.dispersion>0,ne=S.iridescence>0,Z=S.sheen>0,Ae=S.transmission>0,ce=A&&!!S.anisotropyMap,pe=j&&!!S.clearcoatMap,Pe=j&&!!S.clearcoatNormalMap,ie=j&&!!S.clearcoatRoughnessMap,fe=ne&&!!S.iridescenceMap,Oe=ne&&!!S.iridescenceThicknessMap,Ee=Z&&!!S.sheenColorMap,me=Z&&!!S.sheenRoughnessMap,be=!!S.specularMap,Ue=!!S.specularColorMap,tt=!!S.specularIntensityMap,O=Ae&&!!S.transmissionMap,se=Ae&&!!S.thicknessMap,Q=!!S.gradientMap,K=!!S.alphaMap,ae=S.alphaTest>0,Le=!!S.alphaHash,ke=!!S.extensions;let it=Bn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=t.toneMapping);const st={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:X,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Me,instancingColor:Me&&k.instanceColor!==null,instancingMorph:Me&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:on,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:We,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:U,aoMap:Ye,lightMap:Ne,bumpMap:ze,normalMap:ge,displacementMap:d&&Ke,emissiveMap:Te,normalMapObjectSpace:ge&&S.normalMapType===B1,normalMapTangentSpace:ge&&S.normalMapType===U1,metalnessMap:De,roughnessMap:b,anisotropy:A,anisotropyMap:ce,clearcoat:j,clearcoatMap:pe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ie,dispersion:$,iridescence:ne,iridescenceMap:fe,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Ee,sheenRoughnessMap:me,specularMap:be,specularColorMap:Ue,specularIntensityMap:tt,transmission:Ae,transmissionMap:O,thicknessMap:se,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ae,alphaHash:Le,combine:S.combine,mapUv:_e&&x(S.map.channel),aoMapUv:Ye&&x(S.aoMap.channel),lightMapUv:Ne&&x(S.lightMap.channel),bumpMapUv:ze&&x(S.bumpMap.channel),normalMapUv:ge&&x(S.normalMap.channel),displacementMapUv:Ke&&x(S.displacementMap.channel),emissiveMapUv:Te&&x(S.emissiveMap.channel),metalnessMapUv:De&&x(S.metalnessMap.channel),roughnessMapUv:b&&x(S.roughnessMap.channel),anisotropyMapUv:ce&&x(S.anisotropyMap.channel),clearcoatMapUv:pe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:Ue&&x(S.specularColorMap.channel),specularIntensityMapUv:tt&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:se&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(_e||K),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lt,flipSided:S.side===vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function m(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)C.push(D),C.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(C,S),_(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.doubleSided&&o.enable(10),C.flipSided&&o.enable(11),C.useDepthPacking&&o.enable(12),C.dithering&&o.enable(13),C.transmission&&o.enable(14),C.sheen&&o.enable(15),C.opaque&&o.enable(16),C.pointsUvs&&o.enable(17),C.decodeVideoTexture&&o.enable(18),C.alphaToCoverage&&o.enable(19),S.push(o.mask)}function E(S){const C=v[S.type];let D;if(C){const Y=tn[C];D=uu.clone(Y.uniforms)}else D=S.uniforms;return D}function F(S,C){let D;for(let Y=0,k=h.length;Y<k;Y++){const z=h[Y];if(z.cacheKey===C){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Ed(t,C,S,s),h.push(D)),D}function w(S){if(--S.usedTimes===0){const C=h.indexOf(S);h[C]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:F,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:I}}function Rd(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Dd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _l(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,v,x,g){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:g},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=x,m.group=g),e++,m}function o(f,d,p,v,x,g){const m=a(f,d,p,v,x,g);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function l(f,d,p,v,x,g){const m=a(f,d,p,v,x,g);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function c(f,d){n.length>1&&n.sort(f||Dd),i.length>1&&i.sort(d||xl),r.length>1&&r.sort(d||xl)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Pd(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new _l,t.set(i,[a])):r>=s.length?(a=new _l,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Id(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ve};break;case"SpotLight":n={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Ud(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Bd=0;function Fd(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Od(t){const e=new Id,n=Ud(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ht,a=new ht;function o(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,x=0,g=0,m=0,y=0,_=0,E=0,F=0,w=0,T=0;c.sort(Fd);for(let S=0,C=c.length;S<C;S++){const D=c[S],Y=D.color,k=D.intensity,z=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*k,f+=Y.g*k,d+=Y.b*k;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],k);T++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,U=n.get(D);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=P,p++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(Y).multiplyScalar(k),P.distance=z,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[x]=P;const H=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,H.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=H.matrix,D.castShadow){const U=n.get(D);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=L,E++}x++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(Y).multiplyScalar(k),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=P,g++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){const H=D.shadow,U=n.get(D);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=L,i.pointShadowMatrix[v]=D.shadow.matrix,_++}i.point[v]=P,v++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(k),P.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[m]=P,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==E||I.numSpotMaps!==F||I.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+F-w,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,I.directionalLength=p,I.pointLength=v,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=E,I.numSpotMaps=F,I.numLightProbes=T,i.version=Bd++)}function l(c,h){let f=0,d=0,p=0,v=0,x=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(_.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Cl(t){const e=new Od(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Nd(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cl(t),e.set(r,[o])):s>=a.length?(o=new Cl(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class zd extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=si,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gd extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vd(t,e,n){let i=new Mc;const r=new he,s=new he,a=new lt,o=new zd({depthPacking:I1}),l=new Gd,c={},h=n.maxTextureSize,f={[Sn]:vt,[vt]:Sn,[Lt]:Lt},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Hd,fragmentShader:kd}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let m=this.type;this.render=function(w,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=t.getRenderTarget(),C=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Et),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const k=m!==gn&&this.type===gn,z=m===gn&&this.type!==gn;for(let L=0,P=w.length;L<P;L++){const H=w[L],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const q=U.getFrameExtents();if(r.multiply(q),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,U.mapSize.y=s.y)),U.map===null||k===!0||z===!0){const te=this.type!==gn?{minFilter:Pt,magFilter:Pt}:{};U.map!==null&&U.map.dispose(),U.map=new wt(r.x,r.y,te),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ee=U.getViewportCount();for(let te=0;te<ee;te++){const xe=U.getViewport(te);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),Y.viewport(a),U.updateMatrices(H,te),i=U.getFrustum(),E(T,I,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===gn&&y(U,I),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(S,C,D)};function y(w,T){const I=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wt(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,I,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,I,p,x,null)}function _(w,T,I,S){let C=null;const D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=I.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=C.uuid,k=T.uuid;let z=c[Y];z===void 0&&(z={},c[Y]=z);let L=z[k];L===void 0&&(L=C.clone(),z[k]=L,T.addEventListener("dispose",F)),C=L}if(C.visible=T.visible,C.wireframe=T.wireframe,S===gn?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:f[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=t.properties.get(C);Y.light=I}return C}function E(w,T,I,S,C){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const k=e.update(w),z=w.material;if(Array.isArray(z)){const L=k.groups;for(let P=0,H=L.length;P<H;P++){const U=L[P],q=z[U.materialIndex];if(q&&q.visible){const ee=_(w,q,S,C);w.onBeforeShadow(t,w,T,I,k,ee,U),t.renderBufferDirect(I,null,k,ee,w,U),w.onAfterShadow(t,w,T,I,k,ee,U)}}}else if(z.visible){const L=_(w,z,S,C);w.onBeforeShadow(t,w,T,I,k,L,null),t.renderBufferDirect(I,null,k,L,w,null),w.onAfterShadow(t,w,T,I,k,L,null)}}const Y=w.children;for(let k=0,z=Y.length;k<z;k++)E(Y[k],T,I,S,C)}function F(w){w.target.removeEventListener("dispose",F);for(const I in c){const S=c[I],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function jd(t){function e(){let O=!1;const se=new lt;let Q=null;const K=new lt(0,0,0,0);return{setMask:function(ae){Q!==ae&&!O&&(t.colorMask(ae,ae,ae,ae),Q=ae)},setLocked:function(ae){O=ae},setClear:function(ae,Le,ke,it,st){st===!0&&(ae*=it,Le*=it,ke*=it),se.set(ae,Le,ke,it),K.equals(se)===!1&&(t.clearColor(ae,Le,ke,it),K.copy(se))},reset:function(){O=!1,Q=null,K.set(-1,0,0,0)}}}function n(){let O=!1,se=null,Q=null,K=null;return{setTest:function(ae){ae?re(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ae){se!==ae&&!O&&(t.depthMask(ae),se=ae)},setFunc:function(ae){if(Q!==ae){switch(ae){case g1:t.depthFunc(t.NEVER);break;case v1:t.depthFunc(t.ALWAYS);break;case x1:t.depthFunc(t.LESS);break;case ns:t.depthFunc(t.LEQUAL);break;case _1:t.depthFunc(t.EQUAL);break;case C1:t.depthFunc(t.GEQUAL);break;case A1:t.depthFunc(t.GREATER);break;case S1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=ae}},setLocked:function(ae){O=ae},setClear:function(ae){K!==ae&&(t.clearDepth(ae),K=ae)},reset:function(){O=!1,se=null,Q=null,K=null}}}function i(){let O=!1,se=null,Q=null,K=null,ae=null,Le=null,ke=null,it=null,st=null;return{setTest:function(Xe){O||(Xe?re(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Xe){se!==Xe&&!O&&(t.stencilMask(Xe),se=Xe)},setFunc:function(Xe,Rt,Tt){(Q!==Xe||K!==Rt||ae!==Tt)&&(t.stencilFunc(Xe,Rt,Tt),Q=Xe,K=Rt,ae=Tt)},setOp:function(Xe,Rt,Tt){(Le!==Xe||ke!==Rt||it!==Tt)&&(t.stencilOp(Xe,Rt,Tt),Le=Xe,ke=Rt,it=Tt)},setLocked:function(Xe){O=Xe},setClear:function(Xe){st!==Xe&&(t.clearStencil(Xe),st=Xe)},reset:function(){O=!1,se=null,Q=null,K=null,ae=null,Le=null,ke=null,it=null,st=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,v=!1,x=null,g=null,m=null,y=null,_=null,E=null,F=null,w=new Ve(0,0,0),T=0,I=!1,S=null,C=null,D=null,Y=null,k=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,P=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=P>=1):H.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=P>=2);let U=null,q={};const ee=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),xe=new lt().fromArray(ee),ue=new lt().fromArray(te);function X(O,se,Q,K){const ae=new Uint8Array(4),Le=t.createTexture();t.bindTexture(O,Le),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<Q;ke++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(se+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Le}const J={};J[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),re(t.DEPTH_TEST),s.setFunc(ns),ze(!1),ge(wo),re(t.CULL_FACE),Ye(Et);function re(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function le(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Me(O,se){return h[O]!==se?(t.bindFramebuffer(O,se),h[O]=se,O===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=se),O===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=se),!0):!1}function ye(O,se){let Q=d,K=!1;if(O){Q=f.get(se),Q===void 0&&(Q=[],f.set(se,Q));const ae=O.textures;if(Q.length!==ae.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,ke=ae.length;Le<ke;Le++)Q[Le]=t.COLOR_ATTACHMENT0+Le;Q.length=ae.length,K=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,K=!0);K&&t.drawBuffers(Q)}function _e(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const We={[Zn]:t.FUNC_ADD,[$2]:t.FUNC_SUBTRACT,[e1]:t.FUNC_REVERSE_SUBTRACT};We[t1]=t.MIN,We[n1]=t.MAX;const R={[i1]:t.ZERO,[r1]:t.ONE,[s1]:t.SRC_COLOR,[oa]:t.SRC_ALPHA,[h1]:t.SRC_ALPHA_SATURATE,[c1]:t.DST_COLOR,[o1]:t.DST_ALPHA,[a1]:t.ONE_MINUS_SRC_COLOR,[la]:t.ONE_MINUS_SRC_ALPHA,[u1]:t.ONE_MINUS_DST_COLOR,[l1]:t.ONE_MINUS_DST_ALPHA,[f1]:t.CONSTANT_COLOR,[d1]:t.ONE_MINUS_CONSTANT_COLOR,[p1]:t.CONSTANT_ALPHA,[m1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(O,se,Q,K,ae,Le,ke,it,st,Xe){if(O===Et){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),O!==J2){if(O!==x||Xe!==I){if((g!==Zn||_!==Zn)&&(t.blendEquation(t.FUNC_ADD),g=Zn,_=Zn),Xe)switch(O){case Ii:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case To:t.blendFunc(t.ONE,t.ONE);break;case bo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lo:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case To:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lo:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,E=null,F=null,w.set(0,0,0),T=0,x=O,I=Xe}return}ae=ae||se,Le=Le||Q,ke=ke||K,(se!==g||ae!==_)&&(t.blendEquationSeparate(We[se],We[ae]),g=se,_=ae),(Q!==m||K!==y||Le!==E||ke!==F)&&(t.blendFuncSeparate(R[Q],R[K],R[Le],R[ke]),m=Q,y=K,E=Le,F=ke),(it.equals(w)===!1||st!==T)&&(t.blendColor(it.r,it.g,it.b,st),w.copy(it),T=st),x=O,I=!1}function Ne(O,se){O.side===Lt?le(t.CULL_FACE):re(t.CULL_FACE);let Q=O.side===vt;se&&(Q=!Q),ze(Q),O.blending===Ii&&O.transparent===!1?Ye(Et):Ye(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const K=O.stencilWrite;a.setTest(K),K&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){S!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),S=O)}function ge(O){O!==q2?(re(t.CULL_FACE),O!==C&&(O===wo?t.cullFace(t.BACK):O===K2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),C=O}function Ke(O){O!==D&&(L&&t.lineWidth(O),D=O)}function Te(O,se,Q){O?(re(t.POLYGON_OFFSET_FILL),(Y!==se||k!==Q)&&(t.polygonOffset(se,Q),Y=se,k=Q)):le(t.POLYGON_OFFSET_FILL)}function De(O){O?re(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function b(O){O===void 0&&(O=t.TEXTURE0+z-1),U!==O&&(t.activeTexture(O),U=O)}function A(O,se,Q){Q===void 0&&(U===null?Q=t.TEXTURE0+z-1:Q=U);let K=q[Q];K===void 0&&(K={type:void 0,texture:void 0},q[Q]=K),(K.type!==O||K.texture!==se)&&(U!==Q&&(t.activeTexture(Q),U=Q),t.bindTexture(O,se||J[O]),K.type=O,K.texture=se)}function j(){const O=q[U];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){xe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function me(O){ue.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ue.copy(O))}function be(O,se){let Q=l.get(se);Q===void 0&&(Q=new WeakMap,l.set(se,Q));let K=Q.get(O);K===void 0&&(K=t.getUniformBlockIndex(se,O.name),Q.set(O,K))}function Ue(O,se){const K=l.get(se).get(O);o.get(se)!==K&&(t.uniformBlockBinding(se,K,O.__bindingPointIndex),o.set(se,K))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,q={},h={},f=new WeakMap,d=[],p=null,v=!1,x=null,g=null,m=null,y=null,_=null,E=null,F=null,w=new Ve(0,0,0),T=0,I=!1,S=null,C=null,D=null,Y=null,k=null,xe.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:re,disable:le,bindFramebuffer:Me,drawBuffers:ye,useProgram:_e,setBlending:Ye,setMaterial:Ne,setFlipSided:ze,setCullFace:ge,setLineWidth:Ke,setPolygonOffset:Te,setScissorTest:De,activeTexture:b,bindTexture:A,unbindTexture:j,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:fe,texImage3D:Oe,updateUBOMapping:be,uniformBlockBinding:Ue,texStorage2D:Pe,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ae,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ee,viewport:me,reset:tt}}function Al(t,e,n,i){const r=Wd(i);switch(n){case sc:return t*e;case oc:return t*e;case lc:return t*e*2;case cc:return t*e/r.components*r.byteLength;case qa:return t*e/r.components*r.byteLength;case uc:return t*e*2/r.components*r.byteLength;case Ka:return t*e*2/r.components*r.byteLength;case ac:return t*e*3/r.components*r.byteLength;case en:return t*e*4/r.components*r.byteLength;case Za:return t*e*4/r.components*r.byteLength;case Xr:case Yr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qr:case qr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(t,16)*Math.max(e,8)/4;case da:case ma:return Math.max(t,8)*Math.max(e,8)/2;case va:case xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Ua:case Ba:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hc:case Fa:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oa:case Na:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Wd(t){switch(t){case At:case nc:return{byteLength:1,components:1};case lr:case ic:case cr:return{byteLength:2,components:1};case Ya:case Qa:return{byteLength:2,components:4};case Fn:case Xa:case _n:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Xd(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,A){return p?new OffscreenCanvas(b,A):os("canvas")}function x(b,A,j){let $=1;const ne=De(b);if((ne.width>j||ne.height>j)&&($=j/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor($*ne.width),Ae=Math.floor($*ne.height);f===void 0&&(f=v(Z,Ae));const ce=A?v(Z,Ae):f;return ce.width=Z,ce.height=Ae,ce.getContext("2d").drawImage(b,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ae+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function g(b){return b.generateMipmaps&&b.minFilter!==Pt&&b.minFilter!==Ct}function m(b){t.generateMipmap(b)}function y(b,A,j,$,ne=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=A;if(A===t.RED&&(j===t.FLOAT&&(Z=t.R32F),j===t.HALF_FLOAT&&(Z=t.R16F),j===t.UNSIGNED_BYTE&&(Z=t.R8)),A===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.R8UI),j===t.UNSIGNED_SHORT&&(Z=t.R16UI),j===t.UNSIGNED_INT&&(Z=t.R32UI),j===t.BYTE&&(Z=t.R8I),j===t.SHORT&&(Z=t.R16I),j===t.INT&&(Z=t.R32I)),A===t.RG&&(j===t.FLOAT&&(Z=t.RG32F),j===t.HALF_FLOAT&&(Z=t.RG16F),j===t.UNSIGNED_BYTE&&(Z=t.RG8)),A===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Z=t.RG8UI),j===t.UNSIGNED_SHORT&&(Z=t.RG16UI),j===t.UNSIGNED_INT&&(Z=t.RG32UI),j===t.BYTE&&(Z=t.RG8I),j===t.SHORT&&(Z=t.RG16I),j===t.INT&&(Z=t.RG32I)),A===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),A===t.RGBA){const Ae=ne?is:et.getTransfer($);j===t.FLOAT&&(Z=t.RGBA32F),j===t.HALF_FLOAT&&(Z=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Z=Ae===rt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(b,A){let j;return b?A===null||A===Fn||A===ii?j=t.DEPTH24_STENCIL8:A===_n?j=t.DEPTH32F_STENCIL8:A===lr&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Fn||A===ii?j=t.DEPTH_COMPONENT24:A===_n?j=t.DEPTH_COMPONENT32F:A===lr&&(j=t.DEPTH_COMPONENT16),j}function E(b,A){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==Ct?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function F(b){const A=b.target;A.removeEventListener("dispose",F),T(A),A.isVideoTexture&&h.delete(A)}function w(b){const A=b.target;A.removeEventListener("dispose",w),S(A)}function T(b){const A=i.get(b);if(A.__webglInit===void 0)return;const j=b.source,$=d.get(j);if($){const ne=$[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(b),Object.keys($).length===0&&d.delete(j)}i.remove(b)}function I(b){const A=i.get(b);t.deleteTexture(A.__webglTexture);const j=b.source,$=d.get(j);delete $[A.__cacheKey],a.memory.textures--}function S(b){const A=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let ne=0;ne<A.__webglFramebuffer[$].length;ne++)t.deleteFramebuffer(A.__webglFramebuffer[$][ne]);else t.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)t.deleteFramebuffer(A.__webglFramebuffer[$]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=b.textures;for(let $=0,ne=j.length;$<ne;$++){const Z=i.get(j[$]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(j[$])}i.remove(b)}let C=0;function D(){C=0}function Y(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function k(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function z(b,A){const j=i.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(j,b,A);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+A)}function L(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ue(j,b,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+A)}function P(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ue(j,b,A);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+A)}function H(b,A){const j=i.get(b);if(b.version>0&&j.__version!==b.version){X(j,b,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+A)}const U={[ha]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[fa]:t.MIRRORED_REPEAT},q={[Pt]:t.NEAREST,[P1]:t.NEAREST_MIPMAP_NEAREST,[vr]:t.NEAREST_MIPMAP_LINEAR,[Ct]:t.LINEAR,[xs]:t.LINEAR_MIPMAP_NEAREST,[ei]:t.LINEAR_MIPMAP_LINEAR},ee={[F1]:t.NEVER,[k1]:t.ALWAYS,[O1]:t.LESS,[fc]:t.LEQUAL,[N1]:t.EQUAL,[H1]:t.GEQUAL,[z1]:t.GREATER,[G1]:t.NOTEQUAL};function te(b,A){if(A.type===_n&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ct||A.magFilter===xs||A.magFilter===vr||A.magFilter===ei||A.minFilter===Ct||A.minFilter===xs||A.minFilter===vr||A.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,U[A.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,U[A.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,U[A.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,q[A.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,q[A.minFilter]),A.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pt||A.minFilter!==vr&&A.minFilter!==ei||A.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function xe(b,A){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",F));const $=A.source;let ne=d.get($);ne===void 0&&(ne={},d.set($,ne));const Z=k(A);if(Z!==b.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[Z].usedTimes++;const Ae=ne[b.__cacheKey];Ae!==void 0&&(ne[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(A)),b.__cacheKey=Z,b.__webglTexture=ne[Z].texture}return j}function ue(b,A,j){let $=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=t.TEXTURE_3D);const ne=xe(b,A),Z=A.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+j);const Ae=i.get(Z);if(Z.version!==Ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const ce=et.getPrimaries(et.workingColorSpace),pe=A.colorSpace===nn?null:et.getPrimaries(A.colorSpace),Pe=A.colorSpace===nn||ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ie=x(A.image,!1,r.maxTextureSize);ie=Te(A,ie);const fe=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type);let Ee=y(A.internalFormat,fe,Oe,A.colorSpace,A.isVideoTexture);te($,A);let me;const be=A.mipmaps,Ue=A.isVideoTexture!==!0,tt=Ae.__version===void 0||ne===!0,O=Z.dataReady,se=E(A,ie);if(A.isDepthTexture)Ee=_(A.format===ri,A.type),tt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Ee,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,fe,Oe,null));else if(A.isDataTexture)if(be.length>0){Ue&&tt&&n.texStorage2D(t.TEXTURE_2D,se,Ee,be[0].width,be[0].height);for(let Q=0,K=be.length;Q<K;Q++)me=be[Q],Ue?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,fe,Oe,me.data):n.texImage2D(t.TEXTURE_2D,Q,Ee,me.width,me.height,0,fe,Oe,me.data);A.generateMipmaps=!1}else Ue?(tt&&n.texStorage2D(t.TEXTURE_2D,se,Ee,ie.width,ie.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,fe,Oe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,fe,Oe,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ue&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ee,be[0].width,be[0].height,ie.depth);for(let Q=0,K=be.length;Q<K;Q++)if(me=be[Q],A.format!==en)if(fe!==null)if(Ue){if(O)if(A.layerUpdates.size>0){const ae=Al(me.width,me.height,A.format,A.type);for(const Le of A.layerUpdates){const ke=me.data.subarray(Le*ae/me.data.BYTES_PER_ELEMENT,(Le+1)*ae/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Le,me.width,me.height,1,fe,ke,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,ie.depth,fe,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Ee,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,ie.depth,fe,Oe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Ee,me.width,me.height,ie.depth,0,fe,Oe,me.data)}else{Ue&&tt&&n.texStorage2D(t.TEXTURE_2D,se,Ee,be[0].width,be[0].height);for(let Q=0,K=be.length;Q<K;Q++)me=be[Q],A.format!==en?fe!==null?Ue?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,fe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,fe,Oe,me.data):n.texImage2D(t.TEXTURE_2D,Q,Ee,me.width,me.height,0,fe,Oe,me.data)}else if(A.isDataArrayTexture)if(Ue){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Ee,ie.width,ie.height,ie.depth),O)if(A.layerUpdates.size>0){const Q=Al(ie.width,ie.height,A.format,A.type);for(const K of A.layerUpdates){const ae=ie.data.subarray(K*Q/ie.data.BYTES_PER_ELEMENT,(K+1)*Q/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,fe,Oe,ae)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Oe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,fe,Oe,ie.data);else if(A.isData3DTexture)Ue?(tt&&n.texStorage3D(t.TEXTURE_3D,se,Ee,ie.width,ie.height,ie.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Oe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,fe,Oe,ie.data);else if(A.isFramebufferTexture){if(tt)if(Ue)n.texStorage2D(t.TEXTURE_2D,se,Ee,ie.width,ie.height);else{let Q=ie.width,K=ie.height;for(let ae=0;ae<se;ae++)n.texImage2D(t.TEXTURE_2D,ae,Ee,Q,K,0,fe,Oe,null),Q>>=1,K>>=1}}else if(be.length>0){if(Ue&&tt){const Q=De(be[0]);n.texStorage2D(t.TEXTURE_2D,se,Ee,Q.width,Q.height)}for(let Q=0,K=be.length;Q<K;Q++)me=be[Q],Ue?O&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe,Oe,me):n.texImage2D(t.TEXTURE_2D,Q,Ee,fe,Oe,me);A.generateMipmaps=!1}else if(Ue){if(tt){const Q=De(ie);n.texStorage2D(t.TEXTURE_2D,se,Ee,Q.width,Q.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Oe,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ee,fe,Oe,ie);g(A)&&m($),Ae.__version=Z.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function X(b,A,j){if(A.image.length!==6)return;const $=xe(b,A),ne=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const Z=i.get(ne);if(ne.version!==Z.__version||$===!0){n.activeTexture(t.TEXTURE0+j);const Ae=et.getPrimaries(et.workingColorSpace),ce=A.colorSpace===nn?null:et.getPrimaries(A.colorSpace),pe=A.colorSpace===nn||Ae===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Pe&&!ie?fe[K]=x(A.image[K],!0,r.maxCubemapSize):fe[K]=ie?A.image[K].image:A.image[K],fe[K]=Te(A,fe[K]);const Oe=fe[0],Ee=s.convert(A.format,A.colorSpace),me=s.convert(A.type),be=y(A.internalFormat,Ee,me,A.colorSpace),Ue=A.isVideoTexture!==!0,tt=Z.__version===void 0||$===!0,O=ne.dataReady;let se=E(A,Oe);te(t.TEXTURE_CUBE_MAP,A);let Q;if(Pe){Ue&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,be,Oe.width,Oe.height);for(let K=0;K<6;K++){Q=fe[K].mipmaps;for(let ae=0;ae<Q.length;ae++){const Le=Q[ae];A.format!==en?Ee!==null?Ue?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Le.width,Le.height,Ee,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Le.width,Le.height,Ee,me,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,be,Le.width,Le.height,0,Ee,me,Le.data)}}}else{if(Q=A.mipmaps,Ue&&tt){Q.length>0&&se++;const K=De(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,be,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ue?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Ee,me,fe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,fe[K].width,fe[K].height,0,Ee,me,fe[K].data);for(let ae=0;ae<Q.length;ae++){const ke=Q[ae].image[K].image;Ue?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,ke.width,ke.height,Ee,me,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,be,ke.width,ke.height,0,Ee,me,ke.data)}}else{Ue?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,me,fe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,Ee,me,fe[K]);for(let ae=0;ae<Q.length;ae++){const Le=Q[ae];Ue?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ee,me,Le.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,be,Ee,me,Le.image[K])}}}g(A)&&m(t.TEXTURE_CUBE_MAP),Z.__version=ne.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function J(b,A,j,$,ne,Z){const Ae=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),pe=y(j.internalFormat,Ae,ce,j.colorSpace);if(!i.get(A).__hasExternalTextures){const ie=Math.max(1,A.width>>Z),fe=Math.max(1,A.height>>Z);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Z,pe,ie,fe,A.depth,0,Ae,ce,null):n.texImage2D(ne,Z,pe,ie,fe,0,Ae,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ge(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ne,i.get(j).__webglTexture,0,ze(A)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ne,i.get(j).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(b,A,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),A.depthBuffer){const $=A.depthTexture,ne=$&&$.isDepthTexture?$.type:null,Z=_(A.stencilBuffer,ne),Ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=ze(A);ge(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Z,A.width,A.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Z,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Z,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const $=A.textures;for(let ne=0;ne<$.length;ne++){const Z=$[ne],Ae=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),pe=y(Z.internalFormat,Ae,ce,Z.colorSpace),Pe=ze(A);j&&ge(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,pe,A.width,A.height):ge(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,pe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,pe,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const $=i.get(A.depthTexture).__webglTexture,ne=ze(A);if(A.depthTexture.format===Ui)ge(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(A.depthTexture.format===ri)ge(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Me(b){const A=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");le(A.__webglFramebuffer,b)}else if(j){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]=t.createRenderbuffer(),re(A.__webglDepthbuffer[$],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),re(A.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(b,A,j){const $=i.get(b);A!==void 0&&J($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Me(b)}function _e(b){const A=b.texture,j=i.get(b),$=i.get(A);b.addEventListener("dispose",w);const ne=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=A.version,a.memory.textures++),Z){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let pe=0;pe<A.mipmaps.length;pe++)j.__webglFramebuffer[ce][pe]=t.createFramebuffer()}else j.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)j.__webglFramebuffer[ce]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ce=0,pe=ne.length;ce<pe;ce++){const Pe=i.get(ne[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&ge(b)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const pe=ne[ce];j.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);const Pe=s.convert(pe.format,pe.colorSpace),ie=s.convert(pe.type),fe=y(pe.internalFormat,Pe,ie,pe.colorSpace,b.isXRRenderTarget===!0),Oe=ze(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,fe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),re(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),te(t.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)J(j.__webglFramebuffer[ce][pe],b,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else J(j.__webglFramebuffer[ce],b,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(A)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ce=0,pe=ne.length;ce<pe;ce++){const Pe=ne[ce],ie=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),te(t.TEXTURE_2D,Pe),J(j.__webglFramebuffer,b,Pe,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(Pe)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,$.__webglTexture),te(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)J(j.__webglFramebuffer[pe],b,A,t.COLOR_ATTACHMENT0,ce,pe);else J(j.__webglFramebuffer,b,A,t.COLOR_ATTACHMENT0,ce,0);g(A)&&m(ce),n.unbindTexture()}b.depthBuffer&&Me(b)}function We(b){const A=b.textures;for(let j=0,$=A.length;j<$;j++){const ne=A[j];if(g(ne)){const Z=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ne).__webglTexture;n.bindTexture(Z,Ae),m(Z),n.unbindTexture()}}}const R=[],Ye=[];function Ne(b){if(b.samples>0){if(ge(b)===!1){const A=b.textures,j=b.width,$=b.height;let ne=t.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),ce=A.length>1;if(ce)for(let pe=0;pe<A.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const Pe=i.get(A[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,j,$,0,0,j,$,ne,t.NEAREST),l===!0&&(R.length=0,Ye.length=0,R.push(t.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(Z),Ye.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<A.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const Pe=i.get(A[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const A=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function ze(b){return Math.min(r.maxSamples,b.samples)}function ge(b){const A=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ke(b){const A=a.render.frame;h.get(b)!==A&&(h.set(b,A),b.update())}function Te(b,A){const j=b.colorSpace,$=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||j!==on&&j!==nn&&(et.getTransfer(j)===rt?($!==en||ne!==At)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=P,this.setTextureCube=H,this.rebindTextures=ye,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ge}function Yd(t,e){function n(i,r=nn){let s;const a=et.getTransfer(r);if(i===At)return t.UNSIGNED_BYTE;if(i===Ya)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qa)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return t.BYTE;if(i===ic)return t.SHORT;if(i===lr)return t.UNSIGNED_SHORT;if(i===Xa)return t.INT;if(i===Fn)return t.UNSIGNED_INT;if(i===_n)return t.FLOAT;if(i===cr)return t.HALF_FLOAT;if(i===sc)return t.ALPHA;if(i===ac)return t.RGB;if(i===en)return t.RGBA;if(i===oc)return t.LUMINANCE;if(i===lc)return t.LUMINANCE_ALPHA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===ri)return t.DEPTH_STENCIL;if(i===cc)return t.RED;if(i===qa)return t.RED_INTEGER;if(i===uc)return t.RG;if(i===Ka)return t.RG_INTEGER;if(i===Za)return t.RGBA_INTEGER;if(i===Xr||i===Yr||i===Qr||i===qr)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===pa||i===ma||i===ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===_a)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===va||i===xa)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_a)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ca||i===Aa||i===Sa||i===Ma||i===ya||i===Ea||i===wa||i===Ta||i===ba||i===La||i===Ra||i===Da||i===Pa||i===Ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ca)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Aa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ba)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===Ua||i===Ba)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kr)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===Fa||i===Oa||i===Na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ii?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Qd extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qd={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ft({vertexShader:Kd,fragmentShader:Zd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $d extends yn{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,v=null;const x=new Jd,g=n.getContextAttributes();let m=null,y=null;const _=[],E=[],F=new he;let w=null;const T=new Nt;T.layers.enable(1),T.viewport=new lt;const I=new Nt;I.layers.enable(2),I.viewport=new lt;const S=[T,I],C=new Qd;C.layers.enable(1),C.layers.enable(2);let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=_[X];return J===void 0&&(J=new Ws,_[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=_[X];return J===void 0&&(J=new Ws,_[X]=J),J.getGripSpace()},this.getHand=function(X){let J=_[X];return J===void 0&&(J=new Ws,_[X]=J),J.getHandSpace()};function k(X){const J=E.indexOf(X.inputSource);if(J===-1)return;const re=_[J];re!==void 0&&(re.update(X.inputSource,X.frame,c||a),re.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",L);for(let X=0;X<_.length;X++){const J=E[X];J!==null&&(E[X]=null,_[X].disconnect(J))}D=null,Y=null,x.reset(),e.setRenderTarget(m),p=null,d=null,f=null,r=null,y=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",z),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new wt(p.framebufferWidth,p.framebufferHeight,{format:en,type:At,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,re=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?ri:Ui,re=g.stencil?ii:Fn);const Me={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wt(d.textureWidth,d.textureHeight,{format:en,type:At,depthTexture:new no(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function L(X){for(let J=0;J<X.removed.length;J++){const re=X.removed[J],le=E.indexOf(re);le>=0&&(E[le]=null,_[le].disconnect(re))}for(let J=0;J<X.added.length;J++){const re=X.added[J];let le=E.indexOf(re);if(le===-1){for(let ye=0;ye<_.length;ye++)if(ye>=E.length){E.push(re),le=ye;break}else if(E[ye]===null){E[ye]=re,le=ye;break}if(le===-1)break}const Me=_[le];Me&&Me.connect(re)}}const P=new B,H=new B;function U(X,J,re){P.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(re.matrixWorld);const le=P.distanceTo(H),Me=J.projectionMatrix.elements,ye=re.projectionMatrix.elements,_e=Me[14]/(Me[10]-1),We=Me[14]/(Me[10]+1),R=(Me[9]+1)/Me[5],Ye=(Me[9]-1)/Me[5],Ne=(Me[8]-1)/Me[0],ze=(ye[8]+1)/ye[0],ge=_e*Ne,Ke=_e*ze,Te=le/(-Ne+ze),De=Te*-Ne;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=_e+Te,A=We+Te,j=ge-De,$=Ke+(le-De),ne=R*We/A*b,Z=Ye*We/A*b;X.projectionMatrix.makePerspective(j,$,ne,Z,b,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;x.texture!==null&&(X.near=x.depthNear,X.far=x.depthFar),C.near=I.near=T.near=X.near,C.far=I.far=T.far=X.far,(D!==C.near||Y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,Y=C.far,T.near=D,T.far=Y,I.near=D,I.far=Y,T.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,re=C.cameras;q(C,J);for(let le=0;le<re.length;le++)q(re[le],J);re.length===2?U(C,T,I):C.projectionMatrix.copy(T.projectionMatrix),ee(X,C,J)};function ee(X,J,re){re===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(re.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)};let te=null;function xe(X,J){if(h=J.getViewerPose(c||a),v=J,h!==null){const re=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let le=!1;re.length!==C.cameras.length&&(C.cameras.length=0,le=!0);for(let ye=0;ye<re.length;ye++){const _e=re[ye];let We=null;if(p!==null)We=p.getViewport(_e);else{const Ye=f.getViewSubImage(d,_e);We=Ye.viewport,ye===0&&(e.setRenderTargetTextures(y,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(y))}let R=S[ye];R===void 0&&(R=new Nt,R.layers.enable(ye),R.viewport=new lt,S[ye]=R),R.matrix.fromArray(_e.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(_e.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(We.x,We.y,We.width,We.height),ye===0&&(C.matrix.copy(R.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),le===!0&&C.cameras.push(R)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const ye=f.getDepthInformation(re[0]);ye&&ye.isValid&&ye.texture&&x.init(e,ye,r.renderState)}}for(let re=0;re<_.length;re++){const le=E[re],Me=_[re];le!==null&&Me!==void 0&&Me.update(le,J,c||a)}te&&te(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const ue=new yc;ue.setAnimationLoop(xe),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}}const Qn=new Mn,e3=new ht;function t3(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ac(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,_,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,E)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,E=y.envMapRotation;_&&(g.envMap.value=_,Qn.copy(E),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),g.envMapRotation.value.setFromMatrix4(e3.makeRotationFromEuler(Qn)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function n3(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const E=_.program;i.uniformBlockBinding(y,E)}function c(y,_){let E=r[y.id];E===void 0&&(v(y),E=h(y),r[y.id]=E,y.addEventListener("dispose",g));const F=_.program;i.updateUBOMapping(y,F);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const _=f();y.__bindingPointIndex=_;const E=t.createBuffer(),F=y.__size,w=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,F,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=r[y.id],E=y.uniforms,F=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,T=E.length;w<T;w++){const I=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,C=I.length;S<C;S++){const D=I[S];if(p(D,w,S,F)===!0){const Y=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let L=0;L<k.length;L++){const P=k[L],H=x(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,Y+z,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,z),z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,_,E,F){const w=y.value,T=_+"_"+E;if(F[T]===void 0)return typeof w=="number"||typeof w=="boolean"?F[T]=w:F[T]=w.clone(),!0;{const I=F[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return F[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function v(y){const _=y.uniforms;let E=0;const F=16;for(let T=0,I=_.length;T<I;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let C=0,D=S.length;C<D;C++){const Y=S[C],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let z=0,L=k.length;z<L;z++){const P=k[z],H=x(P),U=E%F,q=U%H.boundary,ee=U+q;E+=q,ee!==0&&F-ee<H.storage&&(E+=F-ee),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=H.storage}}}const w=E%F;return w>0&&(E+=F-w),y.__size=E,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class i3{constructor(e={}){const{canvas:n=j1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const m=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this.toneMapping=Bn,this.toneMappingExposure=1;const _=this;let E=!1,F=0,w=0,T=null,I=-1,S=null;const C=new lt,D=new lt;let Y=null;const k=new Ve(0);let z=0,L=n.width,P=n.height,H=1,U=null,q=null;const ee=new lt(0,0,L,P),te=new lt(0,0,L,P);let xe=!1;const ue=new Mc;let X=!1,J=!1;const re=new ht,le=new B,Me=new lt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function We(){return T===null?H:1}let R=i;function Ye(M,N){return n.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gi}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",ae,!1),R===null){const N="webgl2";if(R=Ye(N,M),R===null)throw Ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ne,ze,ge,Ke,Te,De,b,A,j,$,ne,Z,Ae,ce,pe,Pe,ie,fe,Oe,Ee,me,be,Ue,tt;function O(){Ne=new c0(R),Ne.init(),be=new Yd(R,Ne),ze=new n0(R,Ne,e,be),ge=new jd(R),Ke=new f0(R),Te=new Rd,De=new Xd(R,Ne,ge,Te,ze,be,Ke),b=new r0(_),A=new l0(_),j=new vu(R),Ue=new e0(R,j),$=new u0(R,j,Ke,Ue),ne=new p0(R,$,j,Ke),Oe=new d0(R,ze,De),Pe=new i0(Te),Z=new Ld(_,b,A,Ne,ze,Ue,Pe),Ae=new t3(_,Te),ce=new Pd,pe=new Nd(Ne),fe=new $f(_,b,A,ge,ne,d,l),ie=new Vd(_,ne,ze),tt=new n3(R,Ke,ze,ge),Ee=new t0(R,Ne,Ke),me=new h0(R,Ne,Ke),Ke.programs=Z.programs,_.capabilities=ze,_.extensions=Ne,_.properties=Te,_.renderLists=ce,_.shadowMap=ie,_.state=ge,_.info=Ke}O();const se=new $d(_,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(L,P,!1))},this.getSize=function(M){return M.set(L,P)},this.setSize=function(M,N,V=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,P=N,n.width=Math.floor(M*H),n.height=Math.floor(N*H),V===!0&&(n.style.width=M+"px",n.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(L*H,P*H).floor()},this.setDrawingBufferSize=function(M,N,V){L=M,P=N,H=V,n.width=Math.floor(M*V),n.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(ee)},this.setViewport=function(M,N,V,W){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,N,V,W),ge.viewport(C.copy(ee).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,N,V,W){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,N,V,W),ge.scissor(D.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(M){ge.setScissorTest(xe=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(M=!0,N=!0,V=!0){let W=0;if(M){let G=!1;if(T!==null){const oe=T.texture.format;G=oe===Za||oe===Ka||oe===qa}if(G){const oe=T.texture.type,ve=oe===At||oe===Fn||oe===lr||oe===ii||oe===Ya||oe===Qa,Ce=fe.getClearColor(),Se=fe.getClearAlpha(),Be=Ce.r,Fe=Ce.g,Ie=Ce.b;ve?(p[0]=Be,p[1]=Fe,p[2]=Ie,p[3]=Se,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=Be,v[1]=Fe,v[2]=Ie,v[3]=Se,R.clearBufferiv(R.COLOR,0,v))}else W|=R.COLOR_BUFFER_BIT}N&&(W|=R.DEPTH_BUFFER_BIT),V&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),pe.dispose(),Te.dispose(),b.dispose(),A.dispose(),ne.dispose(),Ue.dispose(),tt.dispose(),Z.dispose(),se.dispose(),se.removeEventListener("sessionstart",Tt),se.removeEventListener("sessionend",On),kt.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Ke.autoReset,N=ie.enabled,V=ie.autoUpdate,W=ie.needsUpdate,G=ie.type;O(),Ke.autoReset=M,ie.enabled=N,ie.autoUpdate=V,ie.needsUpdate=W,ie.type=G}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const N=M.target;N.removeEventListener("dispose",Le),ke(N)}function ke(M){it(M),Te.remove(M)}function it(M){const N=Te.get(M).programs;N!==void 0&&(N.forEach(function(V){Z.releaseProgram(V)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,W,G,oe){N===null&&(N=ye);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Ce=ai(M,N,V,W,G);ge.setMaterial(W,ve);let Se=V.index,Be=1;if(W.wireframe===!0){if(Se=$.getWireframeAttribute(V),Se===void 0)return;Be=2}const Fe=V.drawRange,Ie=V.attributes.position;let Ze=Fe.start*Be,at=(Fe.start+Fe.count)*Be;oe!==null&&(Ze=Math.max(Ze,oe.start*Be),at=Math.min(at,(oe.start+oe.count)*Be)),Se!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Se.count)):Ie!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Ie.count));const ot=at-Ze;if(ot<0||ot===1/0)return;Ue.setup(G,W,Ce,V,Se);let Ut,Je=Ee;if(Se!==null&&(Ut=j.get(Se),Je=me,Je.setIndex(Ut)),G.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*We()),Je.setMode(R.LINES)):Je.setMode(R.TRIANGLES);else if(G.isLine){let we=W.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*We()),G.isLineSegments?Je.setMode(R.LINES):G.isLineLoop?Je.setMode(R.LINE_LOOP):Je.setMode(R.LINE_STRIP)}else G.isPoints?Je.setMode(R.POINTS):G.isSprite&&Je.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Je.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const we=G._multiDrawStarts,_t=G._multiDrawCounts,$e=G._multiDrawCount,Qt=Se?j.get(Se).bytesPerElement:1,ci=Te.get(W).currentProgram.getUniforms();for(let Bt=0;Bt<$e;Bt++)ci.setValue(R,"_gl_DrawID",Bt),Je.render(we[Bt]/Qt,_t[Bt])}else if(G.isInstancedMesh)Je.renderInstances(Ze,ot,G.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,we);Je.renderInstances(Ze,ot,_t)}else Je.render(Ze,ot)};function st(M,N,V){M.transparent===!0&&M.side===Lt&&M.forceSinglePass===!1?(M.side=vt,M.needsUpdate=!0,un(M,N,V),M.side=Sn,M.needsUpdate=!0,un(M,N,V),M.side=Lt):un(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),g=pe.get(V),g.init(N),y.push(g),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),M!==V&&M.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const W=new Set;return M.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const Ce=oe[ve];st(Ce,V,G),W.add(Ce)}else st(oe,V,G),W.add(oe)}),y.pop(),g=null,W},this.compileAsync=function(M,N,V=null){const W=this.compile(M,N,V);return new Promise(G=>{function oe(){if(W.forEach(function(ve){Te.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){G(M);return}setTimeout(oe,10)}Ne.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Xe=null;function Rt(M){Xe&&Xe(M)}function Tt(){kt.stop()}function On(){kt.start()}const kt=new yc;kt.setAnimationLoop(Rt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){Xe=M,se.setAnimationLoop(M),M===null?kt.stop():kt.start()},se.addEventListener("sessionstart",Tt),se.addEventListener("sessionend",On),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,N,T),g=pe.get(M,y.length),g.init(N),y.push(g),re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ue.setFromProjectionMatrix(re),J=this.localClippingEnabled,X=Pe.init(this.clippingPlanes,J),x=ce.get(M,m.length),x.init(),m.push(x),se.enabled===!0&&se.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&wn(oe,N,-1/0,_.sortObjects)}wn(M,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(U,q),_e=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_e&&fe.addToRenderList(x,M),this.info.render.frame++,X===!0&&Pe.beginShadows();const V=g.state.shadowsArray;ie.render(V,M,N),X===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,G=x.transmissive;if(g.setupLights(),N.isArrayCamera){const oe=N.cameras;if(G.length>0)for(let ve=0,Ce=oe.length;ve<Ce;ve++){const Se=oe[ve];zn(W,G,M,Se)}_e&&fe.render(M);for(let ve=0,Ce=oe.length;ve<Ce;ve++){const Se=oe[ve];Nn(x,M,Se,Se.viewport)}}else G.length>0&&zn(W,G,M,N),_e&&fe.render(M),Nn(x,M,N);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(_,M,N),Ue.resetDefaultState(),I=-1,S=null,y.pop(),y.length>0?(g=y[y.length-1],X===!0&&Pe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function wn(M,N,V,W){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ue.intersectsSprite(M)){W&&Me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const ve=ne.update(M),Ce=M.material;Ce.visible&&x.push(M,ve,Ce,V,Me.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ue.intersectsObject(M))){const ve=ne.update(M),Ce=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Me.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Me.copy(ve.boundingSphere.center)),Me.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(Ce)){const Se=ve.groups;for(let Be=0,Fe=Se.length;Be<Fe;Be++){const Ie=Se[Be],Ze=Ce[Ie.materialIndex];Ze&&Ze.visible&&x.push(M,ve,Ze,V,Me.z,Ie)}}else Ce.visible&&x.push(M,ve,Ce,V,Me.z,null)}}const oe=M.children;for(let ve=0,Ce=oe.length;ve<Ce;ve++)wn(oe[ve],N,V,W)}function Nn(M,N,V,W){const G=M.opaque,oe=M.transmissive,ve=M.transparent;g.setupLightsView(V),X===!0&&Pe.setGlobalState(_.clippingPlanes,V),W&&ge.viewport(C.copy(W)),G.length>0&&cn(G,N,V),oe.length>0&&cn(oe,N,V),ve.length>0&&cn(ve,N,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function zn(M,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new wt(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?cr:At,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=g.state.transmissionRenderTarget[W.id],ve=W.viewport||C;oe.setSize(ve.z,ve.w);const Ce=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(k),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),_e&&fe.render(V);const Se=_.toneMapping;_.toneMapping=Bn;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),X===!0&&Pe.setGlobalState(_.clippingPlanes,W),cn(M,V,W),De.updateMultisampleRenderTarget(oe),De.updateRenderTargetMipmap(oe),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ie=0,Ze=N.length;Ie<Ze;Ie++){const at=N[Ie],ot=at.object,Ut=at.geometry,Je=at.material,we=at.group;if(Je.side===Lt&&ot.layers.test(W.layers)){const _t=Je.side;Je.side=vt,Je.needsUpdate=!0,Gn(ot,V,W,Ut,Je,we),Je.side=_t,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(De.updateMultisampleRenderTarget(oe),De.updateRenderTargetMipmap(oe))}_.setRenderTarget(Ce),_.setClearColor(k,z),Be!==void 0&&(W.viewport=Be),_.toneMapping=Se}function cn(M,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let G=0,oe=M.length;G<oe;G++){const ve=M[G],Ce=ve.object,Se=ve.geometry,Be=W===null?ve.material:W,Fe=ve.group;Ce.layers.test(V.layers)&&Gn(Ce,N,V,Se,Be,Fe)}}function Gn(M,N,V,W,G,oe){M.onBeforeRender(_,N,V,W,G,oe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.transparent===!0&&G.side===Lt&&G.forceSinglePass===!1?(G.side=vt,G.needsUpdate=!0,_.renderBufferDirect(V,N,W,G,M,oe),G.side=Sn,G.needsUpdate=!0,_.renderBufferDirect(V,N,W,G,M,oe),G.side=Lt):_.renderBufferDirect(V,N,W,G,M,oe),M.onAfterRender(_,N,V,W,G,oe)}function un(M,N,V){N.isScene!==!0&&(N=ye);const W=Te.get(M),G=g.state.lights,oe=g.state.shadowsArray,ve=G.state.version,Ce=Z.getParameters(M,G.state,oe,N,V),Se=Z.getProgramCacheKey(Ce);let Be=W.programs;W.environment=M.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(M.isMeshStandardMaterial?A:b).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Le),Be=new Map,W.programs=Be);let Fe=Be.get(Se);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===ve)return kn(M,Ce),Fe}else Ce.uniforms=Z.getUniforms(M),M.onBeforeCompile(Ce,_),Fe=Z.acquireProgram(Ce,Se),Be.set(Se,Fe),W.uniforms=Ce.uniforms;const Ie=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=Pe.uniform),kn(M,Ce),W.needsLights=li(M),W.lightsStateVersion=ve,W.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Hn(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Zr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function kn(M,N){const V=Te.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ai(M,N,V,W,G){N.isScene!==!0&&(N=ye),De.resetTextureUnits();const oe=N.fog,ve=W.isMeshStandardMaterial?N.environment:null,Ce=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:on,Se=(W.isMeshStandardMaterial?A:b).get(W.envMap||ve),Be=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let ot=Bn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ot=_.toneMapping);const Ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=Ut!==void 0?Ut.length:0,we=Te.get(W),_t=g.state.lights;if(X===!0&&(J===!0||M!==S)){const Vt=M===S&&W.id===I;Pe.setState(W,M,Vt)}let $e=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==_t.state.version||we.outputColorSpace!==Ce||G.isBatchedMesh&&we.batching===!1||!G.isBatchedMesh&&we.batching===!0||G.isBatchedMesh&&we.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&we.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&we.instancing===!1||!G.isInstancedMesh&&we.instancing===!0||G.isSkinnedMesh&&we.skinning===!1||!G.isSkinnedMesh&&we.skinning===!0||G.isInstancedMesh&&we.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&we.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&we.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&we.instancingMorph===!1&&G.morphTexture!==null||we.envMap!==Se||W.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Pe.numPlanes||we.numIntersection!==Pe.numIntersection)||we.vertexAlphas!==Be||we.vertexTangents!==Fe||we.morphTargets!==Ie||we.morphNormals!==Ze||we.morphColors!==at||we.toneMapping!==ot||we.morphTargetsCount!==Je)&&($e=!0):($e=!0,we.__version=W.version);let Qt=we.currentProgram;$e===!0&&(Qt=un(W,N,G));let ci=!1,Bt=!1,fs=!1;const ct=Qt.getUniforms(),Tn=we.uniforms;if(ge.useProgram(Qt.program)&&(ci=!0,Bt=!0,fs=!0),W.id!==I&&(I=W.id,Bt=!0),ci||S!==M){ct.setValue(R,"projectionMatrix",M.projectionMatrix),ct.setValue(R,"viewMatrix",M.matrixWorldInverse);const Vt=ct.map.cameraPosition;Vt!==void 0&&Vt.setValue(R,le.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Bt=!0,fs=!0)}if(G.isSkinnedMesh){ct.setOptional(R,G,"bindMatrix"),ct.setOptional(R,G,"bindMatrixInverse");const Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(R,"boneTexture",Vt.boneTexture,De))}G.isBatchedMesh&&(ct.setOptional(R,G,"batchingTexture"),ct.setValue(R,"batchingTexture",G._matricesTexture,De),ct.setOptional(R,G,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",G._indirectTexture,De),ct.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",G._colorsTexture,De));const ds=V.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Oe.update(G,V,Qt),(Bt||we.receiveShadow!==G.receiveShadow)&&(we.receiveShadow=G.receiveShadow,ct.setValue(R,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=Se,Tn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Tn.envMapIntensity.value=N.environmentIntensity),Bt&&(ct.setValue(R,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&oi(Tn,fs),oe&&W.fog===!0&&Ae.refreshFogUniforms(Tn,oe),Ae.refreshMaterialUniforms(Tn,W,H,P,g.state.transmissionRenderTarget[M.id]),Zr.upload(R,Hn(we),Tn,De)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zr.upload(R,Hn(we),Tn,De),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(R,"center",G.center),ct.setValue(R,"modelViewMatrix",G.modelViewMatrix),ct.setValue(R,"normalMatrix",G.normalMatrix),ct.setValue(R,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Vt=W.uniformsGroups;for(let ps=0,Nc=Vt.length;ps<Nc;ps++){const lo=Vt[ps];tt.update(lo,Qt),tt.bind(lo,Qt)}}return Qt}function oi(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function li(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,N,V){Te.get(M.texture).__webglTexture=N,Te.get(M.depthTexture).__webglTexture=V;const W=Te.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const V=Te.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){T=M,F=N,w=V;let W=!0,G=null,oe=!1,ve=!1;if(M){const Se=Te.get(M);Se.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(R.FRAMEBUFFER,null),W=!1):Se.__webglFramebuffer===void 0?De.setupRenderTarget(M):Se.__hasExternalTextures&&De.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Fe=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?G=Fe[N][V]:G=Fe[N],oe=!0):M.samples>0&&De.useMultisampledRTT(M)===!1?G=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[V]:G=Fe,C.copy(M.viewport),D.copy(M.scissor),Y=M.scissorTest}else C.copy(ee).multiplyScalar(H).floor(),D.copy(te).multiplyScalar(H).floor(),Y=xe;if(ge.bindFramebuffer(R.FRAMEBUFFER,G)&&W&&ge.drawBuffers(M,G),ge.viewport(C),ge.scissor(D),ge.setScissorTest(Y),oe){const Se=Te.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,V)}else if(ve){const Se=Te.get(M.texture),Be=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Be)}I=-1},this.readRenderTargetPixels=function(M,N,V,W,G,oe,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){ge.bindFramebuffer(R.FRAMEBUFFER,Ce);try{const Se=M.texture,Be=Se.format,Fe=Se.type;if(!ze.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-W&&V>=0&&V<=M.height-G&&R.readPixels(N,V,W,G,be.convert(Be),be.convert(Fe),oe)}finally{const Se=T!==null?Te.get(T).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,W,G,oe,ve){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){ge.bindFramebuffer(R.FRAMEBUFFER,Ce);try{const Se=M.texture,Be=Se.format,Fe=Se.type;if(!ze.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-W&&V>=0&&V<=M.height-G){const Ie=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),R.readPixels(N,V,W,G,be.convert(Be),be.convert(Fe),0),R.flush();const Ze=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await W1(R,Ze,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe)}finally{R.deleteBuffer(Ie),R.deleteSync(Ze)}return oe}}finally{const Se=T!==null?Te.get(T).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(M,N=null,V=0){M.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-V),G=Math.floor(M.image.width*W),oe=Math.floor(M.image.height*W),ve=N!==null?N.x:0,Ce=N!==null?N.y:0;De.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,ve,Ce,G,oe),ge.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,W=null,G=0){M.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],N=arguments[2],G=arguments[3]||0,V=null);let oe,ve,Ce,Se,Be,Fe;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ce=V.min.x,Se=V.min.y):(oe=M.image.width,ve=M.image.height,Ce=0,Se=0),W!==null?(Be=W.x,Fe=W.y):(Be=0,Fe=0);const Ie=be.convert(N.format),Ze=be.convert(N.type);De.setTexture2D(N,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const at=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ut=R.getParameter(R.UNPACK_SKIP_PIXELS),Je=R.getParameter(R.UNPACK_SKIP_ROWS),we=R.getParameter(R.UNPACK_SKIP_IMAGES),_t=M.isCompressedTexture?M.mipmaps[G]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Se),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,Be,Fe,oe,ve,Ie,Ze,_t.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,Be,Fe,_t.width,_t.height,Ie,_t.data):R.texSubImage2D(R.TEXTURE_2D,G,Be,Fe,oe,ve,Ie,Ze,_t),R.pixelStorei(R.UNPACK_ROW_LENGTH,at),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,Je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we),G===0&&N.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V=null,W=null,G=0){M.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],N=arguments[3],G=arguments[4]||0);let oe,ve,Ce,Se,Be,Fe,Ie,Ze,at;const ot=M.isCompressedTexture?M.mipmaps[G]:M.image;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ce=V.max.z-V.min.z,Se=V.min.x,Be=V.min.y,Fe=V.min.z):(oe=ot.width,ve=ot.height,Ce=ot.depth,Se=0,Be=0,Fe=0),W!==null?(Ie=W.x,Ze=W.y,at=W.z):(Ie=0,Ze=0,at=0);const Ut=be.convert(N.format),Je=be.convert(N.type);let we;if(N.isData3DTexture)De.setTexture3D(N,0),we=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)De.setTexture2DArray(N,0),we=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const _t=R.getParameter(R.UNPACK_ROW_LENGTH),$e=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qt=R.getParameter(R.UNPACK_SKIP_PIXELS),ci=R.getParameter(R.UNPACK_SKIP_ROWS),Bt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Se),R.pixelStorei(R.UNPACK_SKIP_ROWS,Be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fe),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(we,G,Ie,Ze,at,oe,ve,Ce,Ut,Je,ot.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(we,G,Ie,Ze,at,oe,ve,Ce,Ut,ot.data):R.texSubImage3D(we,G,Ie,Ze,at,oe,ve,Ce,Ut,Je,ot),R.pixelStorei(R.UNPACK_ROW_LENGTH,_t),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$e),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ci),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bt),G===0&&N.generateMipmaps&&R.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&De.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?De.setTextureCube(M,0):M.isData3DTexture?De.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?De.setTexture2DArray(M,0):De.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){F=0,w=0,T=null,ge.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ja?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===us?"display-p3":"srgb"}}class io{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=n,this.far=i}clone(){return new io(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ha extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ti extends Ht{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new he:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],a=[],o=new B,l=new ht;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lc extends En{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new he){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class r3 extends Lc{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ro(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Gr=new B,Xs=new ro,Ys=new ro,Qs=new ro;class s3 extends En{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Gr.subVectors(r[0],r[1]).add(r[0]),c=Gr);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Gr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),Xs.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,v,x,g),Ys.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,v,x,g),Qs.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,v,x,g)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ys.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Qs.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(Xs.calc(l),Ys.calc(l),Qs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sl(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function a3(t,e){const n=1-t;return n*n*e}function o3(t,e){return 2*(1-t)*t*e}function l3(t,e){return t*t*e}function sr(t,e,n,i){return a3(t,e)+o3(t,n)+l3(t,i)}function c3(t,e){const n=1-t;return n*n*n*e}function u3(t,e){const n=1-t;return 3*n*n*t*e}function h3(t,e){return 3*(1-t)*t*t*e}function f3(t,e){return t*t*t*e}function ar(t,e,n,i,r){return c3(t,e)+u3(t,n)+h3(t,i)+f3(t,r)}class d3 extends En{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ar(e,r.x,s.x,a.x,o.x),ar(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p3 extends En{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ar(e,r.x,s.x,a.x,o.x),ar(e,r.y,s.y,a.y,o.y),ar(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m3 extends En{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rc extends En{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g3 extends En{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(sr(e,r.x,s.x,a.x),sr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dc extends En{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(sr(e,r.x,s.x,a.x),sr(e,r.y,s.y,a.y),sr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v3 extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Sl(o,l.x,c.x,h.x,f.x),Sl(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var x3=Object.freeze({__proto__:null,ArcCurve:r3,CatmullRomCurve3:s3,CubicBezierCurve:d3,CubicBezierCurve3:p3,EllipseCurve:Lc,LineCurve:m3,LineCurve3:Rc,QuadraticBezierCurve:g3,QuadraticBezierCurve3:Dc,SplineCurve:v3});class so extends ln{constructor(e=new Dc(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,l=new B,c=new he;let h=new B;const f=[],d=[],p=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new an(f,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(p,2));function x(){for(let _=0;_<n;_++)g(_);g(s===!1?n:0),y(),m()}function g(_){h=e.getPointAt(_/n,h);const E=a.normals[_],F=a.binormals[_];for(let w=0;w<=r;w++){const T=w/r*Math.PI*2,I=Math.sin(T),S=-Math.cos(T);l.x=S*E.x+I*F.x,l.y=S*E.y+I*F.y,l.z=S*E.z+I*F.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=n;_++)for(let E=1;E<=r;E++){const F=(r+1)*(_-1)+(E-1),w=(r+1)*_+(E-1),T=(r+1)*_+E,I=(r+1)*(_-1)+E;v.push(F,w,I),v.push(w,T,I)}}function y(){for(let _=0;_<=n;_++)for(let E=0;E<=r;E++)c.x=_/n,c.y=E/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new so(new x3[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Pc{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}class Ml extends ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=yl();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function yl(){return(typeof performance>"u"?Date:performance).now()}class He{constructor(e){this.value=e}clone(){return new He(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gi);var qs=1/1e3,C3=1e3,A3=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*qs}get fixedDelta(){return this._fixedDelta*qs}set fixedDelta(t){this._fixedDelta=t*C3}get elapsed(){return this._elapsed*qs}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},S3=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new ln;return n.setAttribute("position",new Ht(t,3)),n.setAttribute("uv",new Ht(e,2)),n})(),Yt=class ka{static get fullscreenGeometry(){return S3}constructor(e="Pass",n=new Ha,i=new eo){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new zt(ka.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Ha),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=si){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof wt||n instanceof Hi||n instanceof xt||n instanceof ka)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},M3=class extends Yt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},y3=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Ic="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Uc=class extends ft{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new He(null),opacity:new He(1)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:y3,vertexShader:Ic})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},E3=class extends Yt{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Uc,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new wt(1,1,{minFilter:Ct,magFilter:Ct,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==At?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},El=new Ve,ao=class extends Yt{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor(El),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(El,o):c&&t.setClearAlpha(o)}},w3=class extends Yt{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new ao(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,f=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,h,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},T3=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new E3,this.depthTexture=null,this.passes=[],this.timer=new A3,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new he),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===At&&t.outputColorSpace===nt&&(this.inputBuffer.texture.colorSpace=nt,this.outputBuffer.texture.colorSpace=nt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.depthTexture=new no;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=ri,t.type=ii):t.type=Fn,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new he:r.getDrawingBufferSize(new he),a={minFilter:Ct,magFilter:Ct,stencilBuffer:e,depthBuffer:t,type:n},o=new wt(s.width,s.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),n===At&&r!==null&&r.outputColorSpace===nt&&(o.texture.colorSpace=nt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new he),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else t.setDepthTexture(this.depthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,r,t,s),c.needsSwap&&(s&&(n.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),n.render(e,i,r,t,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof w3?s=!0:c instanceof M3&&(s=!1))}setSize(t,e,n){const i=this.renderer,r=i.getSize(new he);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new he);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Yt.fullscreenGeometry.dispose()}},An={NONE:0,DEPTH:1,CONVOLUTION:2},Qe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},b3=class{constructor(){this.shaderParts=new Map([[Qe.FRAGMENT_HEAD,null],[Qe.FRAGMENT_MAIN_UV,null],[Qe.FRAGMENT_MAIN_IMAGE,null],[Qe.VERTEX_HEAD,null],[Qe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=An.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=on}},Ks=!1,wl=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Lt:n=this.materialsFlatShadedDoubleSide;break;case vt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Lt:n=this.materialsDoubleSide;break;case vt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof ft))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Sn;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=vt,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Lt,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=vt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Lt,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,Ks){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ks}static set workaroundEnabled(t){Ks=t}},Un=-1,sn=class extends yn{constructor(t,e=Un,n=Un,i=1){super(),this.resizable=t,this.baseSize=new he(1,1),this.preferredSize=new he(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new he,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==Un?n.width=e.width:e.height!==Un?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==Un?n.height=e.height:e.width!==Un?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Un),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Un}},je={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},L3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",R3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",D3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",P3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",I3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",U3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",B3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",F3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",O3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",N3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",z3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",G3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",H3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",k3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",V3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",j3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",W3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",X3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",Y3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",Q3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",q3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",K3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",Z3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",J3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",$3="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",ep="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",tp="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",np="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",ip="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",rp="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",sp="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",ap="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",op=new Map([[je.ADD,L3],[je.ALPHA,R3],[je.AVERAGE,D3],[je.COLOR,P3],[je.COLOR_BURN,I3],[je.COLOR_DODGE,U3],[je.DARKEN,B3],[je.DIFFERENCE,F3],[je.DIVIDE,O3],[je.DST,null],[je.EXCLUSION,N3],[je.HARD_LIGHT,z3],[je.HARD_MIX,G3],[je.HUE,H3],[je.INVERT,k3],[je.INVERT_RGB,V3],[je.LIGHTEN,j3],[je.LINEAR_BURN,W3],[je.LINEAR_DODGE,X3],[je.LINEAR_LIGHT,Y3],[je.LUMINOSITY,Q3],[je.MULTIPLY,q3],[je.NEGATION,K3],[je.NORMAL,Z3],[je.OVERLAY,J3],[je.PIN_LIGHT,$3],[je.REFLECT,ep],[je.SATURATION,tp],[je.SCREEN,np],[je.SOFT_LIGHT,ip],[je.SRC,rp],[je.SUBTRACT,sp],[je.VIVID_LIGHT,ap]]),lp=class extends yn{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new He(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return op.get(this.blendFunction)}},Bc=class extends yn{constructor(t,e,{attributes:n=An.NONE,blendFunction:i=je.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new lp(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=on,this._outputColorSpace=nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=si){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof wt||e instanceof Hi||e instanceof xt||e instanceof Yt)&&this[t].dispose()}}},oo={MEDIUM:2,LARGE:3},cp=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,up="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",hp=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],fp=class extends ft{constructor(t=new lt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new He(null),texelSize:new He(new lt),scale:new He(1),kernel:new He(0)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:cp,vertexShader:up}),this.setTexelSize(t.x,t.y),this.kernelSize=oo.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return hp[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},dp=class extends Yt{constructor({kernelSize:t=oo.MEDIUM,resolutionScale:e=.5,width:n=sn.AUTO_SIZE,height:i=sn.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new wt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new sn(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new fp,this._blurMaterial.kernelSize=t,this.copyMaterial=new Uc}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let f=e;this.fullscreenMaterial=c;for(let d=0,p=h.length;d<p;++d){const v=(d&1)===0?o:l;c.kernel=h[d],c.inputBuffer=f.texture,t.setRenderTarget(v),t.render(s,a),f=v}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,a)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==At?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===nt&&(this.renderTargetA.texture.colorSpace=nt,this.renderTargetB.texture.colorSpace=nt))}static get AUTO_SIZE(){return sn.AUTO_SIZE}},pp=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,mp=class extends ft{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Gi.replace(/\D+/g,"")},uniforms:{inputBuffer:new He(null),threshold:new He(0),smoothing:new He(1),range:new He(null)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:pp,vertexShader:Ic}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},gp=class extends Yt{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:r=sn.AUTO_SIZE,height:s=sn.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new mp(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new wt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new sn(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==At&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},vp=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,xp="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",_p=class extends ft{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new He(null),texelSize:new He(new he)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vp,vertexShader:xp})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},Cp=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Ap="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Sp=class extends ft{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new He(null),supportBuffer:new He(null),texelSize:new He(new he),radius:new He(.85)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Cp,vertexShader:Ap})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},Mp=class extends Yt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new wt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new _p,this.upsamplingMaterial=new Sp,this.resolution=new he}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const r=e.clone();r.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let f=e;this.fullscreenMaterial=o;for(let d=0,p=c.length;d<p;++d){const v=c[d];o.setSize(f.width,f.height),o.inputBuffer=f.texture,t.setRenderTarget(v),t.render(s,a),f=v}this.fullscreenMaterial=l;for(let d=h.length-1;d>=0;--d){const p=h[d];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[d].texture,t.setRenderTarget(p),t.render(s,a),f=p}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,r=n.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=n;if(n!==At)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===nt)for(const r of i)r.texture.colorSpace=nt}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},yp=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`,Ep=class extends Bc{constructor({blendFunction:t=je.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:i=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=oo.LARGE,resolutionScale:l=.5,width:c=sn.AUTO_SIZE,height:h=sn.AUTO_SIZE,resolutionX:f=c,resolutionY:d=h}={}){super("BloomEffect",yp,{blendFunction:t,uniforms:new Map([["map",new He(null)],["intensity",new He(r)]])}),this.renderTarget=new wt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new dp({kernelSize:o}),this.luminancePass=new gp({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new Mp,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new sn(this,f,d,l);p.addEventListener("change",v=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,r.renderTarget):this.blurPass.render(t,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===nt&&(this.renderTarget.texture.colorSpace=nt))}},Tl=class extends Yt{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,n,i,r){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}initialize(t,e,n){n!==void 0&&n!==At&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},wp=class extends Yt{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new ao,this.overrideMaterialManager=n===null?null:new wl(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new wl(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,h=t.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=h}},Fc={COLOR:2},Tp={DISABLED:0},Li={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},bp=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,Lp=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Rp=class extends ft{constructor(t=new he,e=Fc.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Gi.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new He(null),depthBuffer:new He(null),predicationBuffer:new He(null),texelSize:new He(t)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bp,vertexShader:Lp}),this.edgeDetectionMode=e}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=si){this.depthBuffer=t,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(t){this.defines.EDGE_DETECTION_MODE=t.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(t){this.edgeDetectionMode=t}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(t){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=t.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(t){this.localContrastAdaptationFactor=t}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(t){this.defines.EDGE_THRESHOLD=t.toFixed("6"),this.defines.DEPTH_THRESHOLD=(t*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(t){this.edgeDetectionThreshold=t}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(t){this.defines.PREDICATION_MODE=t.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(t){this.predicationMode=t}set predicationBuffer(t){this.uniforms.predicationBuffer.value=t}setPredicationBuffer(t){this.uniforms.predicationBuffer.value=t}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(t){this.defines.PREDICATION_THRESHOLD=t.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(t){this.predicationThreshold=t}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(t){this.defines.PREDICATION_SCALE=t.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(t){this.predicationScale=t}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(t){this.defines.PREDICATION_STRENGTH=t.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(t){this.predicationStrength=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},Dp=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,Pp="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Ip=class extends ft{constructor(t=new he,e=new he){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new He(null),searchTexture:new He(null),areaTexture:new He(null),resolution:new He(e),texelSize:new He(t)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Dp,vertexShader:Pp})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(t){this.uniforms.searchTexture.value=t}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(t){this.uniforms.areaTexture.value=t}setLookupTextures(t,e){this.searchTexture=t,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(t){const e=Math.min(Math.max(t,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(t){this.orthogonalSearchSteps=t}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(t){const e=Math.min(Math.max(t,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(t){this.diagonalSearchSteps=t}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(t){t?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(t){this.diagonalDetection=t}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(t){const e=Math.min(Math.max(t,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(t){this.cornerRounding=t}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(t){t?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(t){this.cornerDetection=t}setSize(t,e){const n=this.uniforms;n.texelSize.value.set(1/t,1/e),n.resolution.value.set(t,e)}},bl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Ll="data:image/png;base64,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",Up="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",Bp="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Ki=class extends Bc{constructor({blendFunction:t=je.SRC,preset:e=Li.MEDIUM,edgeDetectionMode:n=Fc.COLOR,predicationMode:i=Tp.DISABLED}={}){super("SMAAEffect",Up,{vertexShader:Bp,blendFunction:t,attributes:An.CONVOLUTION|An.DEPTH,uniforms:new Map([["weightMap",new He(null)]])});let r,s;arguments.length>1&&(r=arguments[0],s=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(n=arguments[3])),this.renderTargetEdges=new wt(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new ao(!0,!1,!1),this.clearPass.overrideClearColor=new Ve(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Tl(new Rp),this.edgeDetectionMaterial.edgeDetectionMode=n,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new Tl(new Ip);const a=new Pc;a.onLoad=()=>{const o=new xt(r);o.name="SMAA.Search",o.magFilter=Pt,o.minFilter=Pt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new xt(s);l.name="SMAA.Area",l.magFilter=Ct,l.minFilter=Ct,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),r!==void 0&&s!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(r=new Image,s=new Image,r.addEventListener("load",()=>a.itemEnd("search")),s.addEventListener("load",()=>a.itemEnd("area")),r.src=bl,s.src=Ll),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(t){this.edgeDetectionMaterial.edgeDetectionThreshold=t}setOrthogonalSearchSteps(t){this.weightsMaterial.orthogonalSearchSteps=t}applyPreset(t){const e=this.edgeDetectionMaterial,n=this.weightsMaterial;switch(t){case Li.LOW:e.edgeDetectionThreshold=.15,n.orthogonalSearchSteps=4,n.diagonalDetection=!1,n.cornerDetection=!1;break;case Li.MEDIUM:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=8,n.diagonalDetection=!1,n.cornerDetection=!1;break;case Li.HIGH:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=16,n.diagonalSearchSteps=8,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break;case Li.ULTRA:e.edgeDetectionThreshold=.05,n.orthogonalSearchSteps=32,n.diagonalSearchSteps=16,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break}}setDepthTexture(t,e=si){this.edgeDetectionMaterial.depthBuffer=t,this.edgeDetectionMaterial.depthPacking=e}update(t,e,n){this.clearPass.render(t,this.renderTargetEdges),this.edgeDetectionPass.render(t,e,this.renderTargetEdges),this.weightsPass.render(t,this.renderTargetEdges,this.renderTargetWeights)}setSize(t,e){this.edgeDetectionMaterial.setSize(t,e),this.weightsMaterial.setSize(t,e),this.renderTargetEdges.setSize(t,e),this.renderTargetWeights.setSize(t,e)}dispose(){const{searchTexture:t,areaTexture:e}=this.weightsMaterial;t!==null&&e!==null&&(t.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return bl}static get areaImageDataURL(){return Ll}},Fp=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Op="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Np=class extends ft{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Gi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new He(null),depthBuffer:new He(null),resolution:new He(new he),texelSize:new He(new he),cameraNear:new He(.3),cameraFar:new He(1e3),aspect:new He(1),time:new He(0)},blending:Et,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=si){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=Fp.replace(Qe.FRAGMENT_HEAD,t.get(Qe.FRAGMENT_HEAD)||"").replace(Qe.FRAGMENT_MAIN_UV,t.get(Qe.FRAGMENT_MAIN_UV)||"").replace(Qe.FRAGMENT_MAIN_IMAGE,t.get(Qe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Op.replace(Qe.VERTEX_HEAD,t.get(Qe.VERTEX_HEAD)||"").replace(Qe.VERTEX_MAIN_SUPPORT,t.get(Qe.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof Nt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return Qe}};function Rl(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function zp(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(n.attributes&An.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(Qe.FRAGMENT_HEAD)||"",h=l.get(Qe.FRAGMENT_MAIN_UV)||"",f=l.get(Qe.FRAGMENT_MAIN_IMAGE)||"",d=l.get(Qe.VERTEX_HEAD)||"",p=l.get(Qe.VERTEX_MAIN_SUPPORT)||"";const v=new Set,x=new Set;if(a&&(h+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const y=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=y?`vUv);
`:`);
`;for(const _ of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const E of _[1].split(/\s*,\s*/))n.varyings.add(E),v.add(E),x.add(E);for(const _ of r.matchAll(o))x.add(_[1])}for(const y of i.matchAll(o))x.add(y[1]);for(const y of e.defines.keys())x.add(y.replace(/\([\w\s,]*\)/g,""));for(const y of e.uniforms.keys())x.add(y);x.delete("while"),x.delete("for"),x.delete("if"),e.uniforms.forEach((y,_)=>n.uniforms.set(t+_.charAt(0).toUpperCase()+_.slice(1),y)),e.defines.forEach((y,_)=>n.defines.set(t+_.charAt(0).toUpperCase()+_.slice(1),y));const g=new Map([["fragment",i],["vertex",r]]);Rl(t,x,n.defines),Rl(t,x,g),i=g.get("fragment"),r=g.get("vertex");const m=e.blendMode;if(n.blendModes.set(m.blendFunction,m),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(f+=e.inputColorSpace===nt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nn?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const y=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${t}MainImage(color0, UV, `,(n.attributes&An.DEPTH)!==0&&y.test(i)&&(f+="depth, ",n.readDepth=!0),f+=`color1);
	`;const _=t+"BlendOpacity";n.uniforms.set(_,m.opacity),f+=`color0 = blend${m.blendFunction}(color0, color1, ${_});

	`,c+=`uniform float ${_};

`}if(c+=i+`
`,r!==null&&(d+=r+`
`),l.set(Qe.FRAGMENT_HEAD,c),l.set(Qe.FRAGMENT_MAIN_UV,h),l.set(Qe.FRAGMENT_MAIN_IMAGE,f),l.set(Qe.VERTEX_HEAD,d),l.set(Qe.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const y of e.extensions)n.extensions.add(y)}}var Dl=class extends Yt{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new Np(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new b3;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===je.DST)t.attributes|=a.getAttributes()&An.DEPTH;else{if((t.attributes&a.getAttributes()&An.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);zp("e"+e++,a,t)}let n=t.shaderParts.get(Qe.FRAGMENT_HEAD),i=t.shaderParts.get(Qe.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(Qe.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(t.attributes&An.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===nt&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(Qe.FRAGMENT_HEAD,n),t.shaderParts.set(Qe.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(Qe.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=si){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==At&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const Gp=({effectOptions:t={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})=>{const e=gt.useRef(null),n=gt.useRef(null);return gt.useEffect(()=>{if(n.current){n.current.dispose();const z=document.getElementById("lights");if(z)for(;z.firstChild;)z.removeChild(z.firstChild)}const i={uFreq:{value:new B(3,6,10)},uAmp:{value:new B(30,30,20)}},r={uFreq:{value:new he(5,2)},uAmp:{value:new he(25,15)}},s={uFreq:{value:new he(2,3)},uAmp:{value:new he(35,10)}},a={uFreq:{value:new lt(4,8,8,1)},uAmp:{value:new lt(25,5,10,10)}},o={uFreq:{value:new he(4,8)},uAmp:{value:new he(10,20)},uPowY:{value:new he(20,2)}};let l=z=>Math.sin(z)*.5+.5;const c={mountainDistortion:{uniforms:i,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(z,L)=>{let P=.02,H=i.uFreq.value,U=i.uAmp.value,q=new B(Math.cos(z*Math.PI*H.x+L)*U.x-Math.cos(P*Math.PI*H.x+L)*U.x,l(z*Math.PI*H.y+L)*U.y-l(P*Math.PI*H.y+L)*U.y,l(z*Math.PI*H.z+L)*U.z-l(P*Math.PI*H.z+L)*U.z),ee=new B(2,2,2),te=new B(0,0,-5);return q.multiply(ee).add(te)}},xyDistortion:{uniforms:r,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(z,L)=>{let P=.02,H=r.uFreq.value,U=r.uAmp.value,q=new B(Math.cos(z*Math.PI*H.x+L)*U.x-Math.cos(P*Math.PI*H.x+L)*U.x,Math.sin(z*Math.PI*H.y+L+Math.PI/2)*U.y-Math.sin(P*Math.PI*H.y+L+Math.PI/2)*U.y,0),ee=new B(2,.4,1),te=new B(0,0,-3);return q.multiply(ee).add(te)}},LongRaceDistortion:{uniforms:s,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(z,L)=>{let P=.0125,H=s.uFreq.value,U=s.uAmp.value,q=new B(Math.sin(z*Math.PI*H.x+L)*U.x-Math.sin(P*Math.PI*H.x+L)*U.x,Math.sin(z*Math.PI*H.y+L)*U.y-Math.sin(P*Math.PI*H.y+L)*U.y,0),ee=new B(1,1,0),te=new B(0,0,-5);return q.multiply(ee).add(te)}},turbulentDistortion:{uniforms:a,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(z,L)=>{const P=a.uFreq.value,H=a.uAmp.value,U=ue=>Math.cos(Math.PI*ue*P.x+L)*H.x+Math.pow(Math.cos(Math.PI*ue*P.y+L*(P.y/P.x)),2)*H.y,q=ue=>-l(Math.PI*ue*P.z+L)*H.z-Math.pow(l(Math.PI*ue*P.w+L/(P.z/P.w)),5)*H.w;let ee=new B(U(z)-U(z+.007),q(z)-q(z+.007),0),te=new B(-2,-5,0),xe=new B(0,0,-10);return ee.multiply(te).add(xe)}},turbulentDistortionStill:{uniforms:a,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:o,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:o,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(z,L)=>{const P=o.uFreq.value,H=o.uAmp.value,U=o.uPowY.value,q=X=>Math.sin(X*Math.PI*P.x+L)*H.x,ee=X=>Math.pow(X*U.x,U.y)+Math.sin(X*Math.PI*P.y+L)*H.y;let te=new B(q(z)-q(z+.01),ee(z)-ee(z+.01),0),xe=new B(-2,-4,0),ue=new B(0,0,-10);return te.multiply(xe).add(ue)}}};class h{constructor(L,P={}){this.options=P,this.options.distortion==null&&(this.options.distortion={uniforms:f,getDistortion:d}),this.container=L,this.renderer=new i3({antialias:!1,alpha:!0}),this.renderer.setSize(L.offsetWidth,L.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new T3(this.renderer),L.append(this.renderer.domElement),this.camera=new Nt(P.fov,L.offsetWidth/L.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Ha,this.scene.background=null;let H=new io(P.colors.background,P.length*.2,P.length*500);this.scene.fog=H,this.fogUniforms={fogColor:{value:H.color},fogNear:{value:H.near},fogFar:{value:H.far}},this.clock=new _3,this.assets={},this.disposed=!1,this.road=new w(this,P),this.leftCarLights=new g(this,P,P.colors.leftCars,P.movingAwaySpeed,new he(0,1-P.carLightsFade)),this.rightCarLights=new g(this,P,P.colors.rightCars,P.movingCloserSpeed,new he(1,0+P.carLightsFade)),this.leftSticks=new _(this,P),this.fovTarget=P.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.ro=new ResizeObserver(this.onWindowResize.bind(this)),this.ro.observe(this.container)}onWindowResize(){const L=this.container.offsetWidth,P=this.container.offsetHeight;this.renderer.setSize(L,P),this.camera.aspect=L/P,this.camera.updateProjectionMatrix(),this.composer.setSize(L,P)}initPasses(){this.renderPass=new wp(this.scene,this.camera),this.bloomPass=new Dl(this.camera,new Ep({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const L=new Dl(this.camera,new Ki({preset:Li.MEDIUM,searchImage:Ki.searchImageDataURL,areaImage:Ki.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,L.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(L)}loadAssets(){const L=this.assets;return new Promise(P=>{const H=new Pc(P),U=new Image,q=new Image;L.smaa={},U.addEventListener("load",function(){L.smaa.search=this,H.itemEnd("smaa-search")}),q.addEventListener("load",function(){L.smaa.area=this,H.itemEnd("smaa-area")}),H.itemStart("smaa-search"),H.itemStart("smaa-area"),U.src=Ki.searchImageDataURL,q.src=Ki.areaImageDataURL})}init(){this.initPasses();const L=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-L.roadWidth/2-L.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(L.roadWidth/2+L.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(L.roadWidth+L.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(L){this.options.onSpeedUp&&this.options.onSpeedUp(L),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(L){this.options.onSlowDown&&this.options.onSlowDown(L),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(L){this.options.onSpeedUp&&this.options.onSpeedUp(L),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(L){this.options.onSlowDown&&this.options.onSlowDown(L),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(L){L.preventDefault()}update(L){let P=Math.exp(-(-60*Math.log2(.9))*L);this.speedUp+=x(this.speedUp,this.speedUpTarget,P,1e-5),this.timeOffset+=this.speedUp*L;let H=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(H),this.leftCarLights.update(H),this.leftSticks.update(H),this.road.update(H);let U=!1,q=x(this.camera.fov,this.fovTarget,P);if(q!==0&&(this.camera.fov+=q*L*6,U=!0),this.options.distortion.getJS){const ee=this.options.distortion.getJS(.025,H);this.camera.lookAt(new B(this.camera.position.x+ee.x,this.camera.position.y+ee.y,this.camera.position.z+ee.z)),U=!0}U&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(L){this.composer.render(L)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),this.ro.disconnect(),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(L,P,H){this.composer.setSize(L,P,H)}tick(){if(this.disposed||!this)return;if(k(this.renderer,this.setSize)){const P=this.renderer.domElement;this.camera.aspect=P.clientWidth/P.clientHeight,this.camera.updateProjectionMatrix()}const L=this.clock.getDelta();this.render(L),this.update(L),requestAnimationFrame(this.tick)}}const f={uDistortionX:{value:new he(80,3)},uDistortionY:{value:new he(-40,2.5)}},d=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,p=z=>Array.isArray(z)?Math.random()*(z[1]-z[0])+z[0]:Math.random()*z,v=z=>Array.isArray(z)?z[Math.floor(Math.random()*z.length)]:z;function x(z,L,P=.1,H=.001){let U=(L-z)*P;return Math.abs(U)<H&&(U=L-z),U}class g{constructor(L,P,H,U,q){this.webgl=L,this.options=P,this.colors=H,this.speed=U,this.fade=q}init(){const L=this.options;let P=new Rc(new B(0,0,0),new B(0,0,-1)),H=new so(P,40,1,8,!1),U=new Ml().copy(H);U.instanceCount=L.lightPairsPerRoadWay*2;let q=L.roadWidth/L.lanesPerRoad,ee=[],te=[],xe=[],ue=this.colors;Array.isArray(ue)?ue=ue.map(re=>new Ve(re)):ue=new Ve(ue);for(let re=0;re<L.lightPairsPerRoadWay;re++){let le=p(L.carLightsRadius),Me=p(L.carLightsLength),ye=p(this.speed),We=re%L.lanesPerRoad*q-L.roadWidth/2+q/2,R=p(L.carWidthPercentage)*q,Ye=p(L.carShiftX)*q;We+=Ye;let Ne=p(L.carFloorSeparation)+le*1.3,ze=-p(L.length);ee.push(We-R/2),ee.push(Ne),ee.push(ze),ee.push(We+R/2),ee.push(Ne),ee.push(ze),te.push(le),te.push(Me),te.push(ye),te.push(le),te.push(Me),te.push(ye);let ge=v(ue);xe.push(ge.r),xe.push(ge.g),xe.push(ge.b),xe.push(ge.r),xe.push(ge.g),xe.push(ge.b)}U.setAttribute("aOffset",new Ti(new Float32Array(ee),3,!1)),U.setAttribute("aMetrics",new Ti(new Float32Array(te),3,!1)),U.setAttribute("aColor",new Ti(new Float32Array(xe),3,!1));let X=new ft({fragmentShader:m,vertexShader:y,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:L.length},uFade:{value:this.fade}},this.webgl.fogUniforms,L.distortion.uniforms)});X.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <getDistortion_vertex>",L.distortion.getDistortion)};let J=new zt(U,X);J.frustumCulled=!1,this.webgl.scene.add(J),this.mesh=J}update(L){this.mesh.material.uniforms.uTime.value=L}}const m=`
      #define USE_FOG;
      ${Re.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${Re.fog_fragment}
      }
    `,y=`
      #define USE_FOG;
      ${Re.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${Re.fog_vertex}
      }
    `;class _{constructor(L,P){this.webgl=L,this.options=P}init(){const L=this.options,P=new zi(1,1);let H=new Ml().copy(P),U=L.totalSideLightSticks;H.instanceCount=U;let q=L.length/(U-1);const ee=[],te=[],xe=[];let ue=L.colors.sticks;Array.isArray(ue)?ue=ue.map(re=>new Ve(re)):ue=new Ve(ue);for(let re=0;re<U;re++){let le=p(L.lightStickWidth),Me=p(L.lightStickHeight);ee.push((re-1)*q*2+q*Math.random());let ye=v(ue);te.push(ye.r),te.push(ye.g),te.push(ye.b),xe.push(le),xe.push(Me)}H.setAttribute("aOffset",new Ti(new Float32Array(ee),1,!1)),H.setAttribute("aColor",new Ti(new Float32Array(te),3,!1)),H.setAttribute("aMetrics",new Ti(new Float32Array(xe),2,!1));const X=new ft({fragmentShader:F,vertexShader:E,side:Lt,uniforms:Object.assign({uTravelLength:{value:L.length},uTime:{value:0}},this.webgl.fogUniforms,L.distortion.uniforms)});X.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <getDistortion_vertex>",L.distortion.getDistortion)};const J=new zt(H,X);J.frustumCulled=!1,this.webgl.scene.add(J),this.mesh=J}update(L){this.mesh.material.uniforms.uTime.value=L}}const E=`
      #define USE_FOG;
      ${Re.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${Re.fog_vertex}
      }
    `,F=`
      #define USE_FOG;
      ${Re.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Re.fog_fragment}
      }
    `;class w{constructor(L,P){this.webgl=L,this.options=P,this.uTime={value:0}}createPlane(L,P,H){const U=this.options;let q=100;const ee=new zi(H?U.roadWidth:U.islandWidth,U.length,20,q);let te={uTravelLength:{value:U.length},uColor:{value:new Ve(H?U.colors.roadColor:U.colors.islandColor)},uTime:this.uTime};H&&(te=Object.assign(te,{uLanes:{value:U.lanesPerRoad},uBrokenLinesColor:{value:new Ve(U.colors.brokenLines)},uShoulderLinesColor:{value:new Ve(U.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:U.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:U.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:U.brokenLinesWidthPercentage}}));const xe=new ft({fragmentShader:H?D:I,vertexShader:Y,side:Lt,uniforms:Object.assign(te,this.webgl.fogUniforms,U.distortion.uniforms)});xe.onBeforeCompile=X=>{X.vertexShader=X.vertexShader.replace("#include <getDistortion_vertex>",U.distortion.getDistortion)};const ue=new zt(ee,xe);return ue.rotation.x=-Math.PI/2,ue.position.z=-U.length/2,ue.position.x+=(this.options.islandWidth/2+U.roadWidth/2)*L,this.webgl.scene.add(ue),ue}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(L){this.uTime.value=L}}const T=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${Re.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${Re.fog_fragment}
      }
    `,I=T.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),D=T.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),Y=`
      #define USE_FOG;
      uniform float uTime;
      ${Re.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${Re.fog_vertex}
      }
    `;function k(z,L){const P=z.domElement,H=P.clientWidth,U=P.clientHeight,q=P.width!==H||P.height!==U;return q&&L(H,U,!1),q}return(function(){const z=document.getElementById("lights"),L={...t};L.distortion=c[L.distortion];const P=new h(z,L);n.current=P,P.loadAssets().then(P.init)})(),()=>{n.current&&n.current.dispose()}},[t]),u.jsx("div",{id:"lights",className:"w-full h-full",ref:e})},Hp="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.67634%2017L3.83768%2020.8401L0%2017L3.8367%2013.1604L7.67634%2017ZM16.9856%207.67622L23.5598%2014.2596L27.396%2010.42L16.9851%200L6.57518%2010.42L10.4119%2014.2596L16.9856%207.67622ZM30.1374%2013.1599L26.3007%2017L30.1374%2020.8396L33.9707%2017L30.1374%2013.1599ZM16.9856%2026.3238L10.4109%2019.7438L6.57421%2023.5805L16.9851%2034L27.396%2023.58L23.5593%2019.7433L16.9856%2026.3238ZM16.9856%2020.8401L20.8218%2017L16.9856%2013.1604L13.1489%2017L16.9856%2020.8401Z'%20fill='white'/%3e%3c/svg%3e",kp="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0713%200V10.0713H19.9287V0H30V10.0713H19.9287V19.9287H10.0713V30H0V19.9287H10.0713V10.0713H0V0H10.0713ZM30%2030H19.9287V19.9287H30V30Z'%20fill='white'/%3e%3c/svg%3e",Vp="data:image/svg+xml,%3csvg%20width='41'%20height='29'%20viewBox='0%200%2041%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.68262%2026.9297H14.5068C15.3625%2026.8439%2016.6549%2026.4587%2017.7256%2025.5859C18.7863%2024.7212%2019.6463%2023.367%2019.6465%2021.2822C19.6465%2018.6382%2018.5555%2016.9526%2017.084%2015.9102C15.5883%2014.8507%2013.661%2014.4317%2011.9941%2014.4316H11.4941V12.4033L11.9512%2012.3643C13.1918%2012.2573%2015.053%2011.8372%2016.5869%2010.9434C18.1131%2010.054%2019.2449%208.74351%2019.2451%206.84766C19.245%204.34141%2018.2555%202.72435%2016.8525%201.32129L15.9326%200.401367L17.2314%200.467773C18.1885%200.516861%2019.6098%200.894107%2020.8291%201.86621C22.0662%202.85261%2023.0717%204.43389%2023.1855%206.82422H23.1846C23.2738%208.46286%2022.2585%2011.6107%2018.1895%2013.3154C19.37%2013.6864%2020.6984%2014.2763%2021.8779%2015.1377C23.6923%2016.4629%2025.1904%2018.4588%2025.1904%2021.2822C25.1902%2024.1134%2023.6832%2025.9825%2021.8506%2027.1436C20.0362%2028.293%2017.8778%2028.7712%2016.4365%2028.8643L16.4199%2028.8652H0V26.9297H3.47461V2.26953H0V0.200195H7.68262V26.9297ZM29.3369%200.34375C30.3528%200.556402%2031.8645%201.11043%2033.1338%202.09863C34.4111%203.09314%2035.4813%204.56253%2035.4814%206.58008C35.4814%208.60112%2034.3176%2010.2415%2032.957%2011.4424C32.0737%2012.222%2031.0782%2012.8402%2030.1904%2013.2881C31.3861%2013.676%2032.7728%2014.2752%2033.9941%2015.1113C35.7253%2016.2966%2037.2186%2018.0219%2037.2188%2020.3457C37.2188%2024.4057%2038.6971%2027.1131%2039.3721%2027.9072L40.0723%2028.7314H32.8838L32.1016%2026.3848L32.082%2026.3252L32.0771%2026.2637L31.5459%2019.2197C31.2177%2017.6833%2029.2956%2014.4308%2024.0225%2014.4307H23.5225V12.3945L23.9883%2012.3623C25.2244%2012.277%2027.0801%2011.871%2028.6094%2010.9492C30.1239%2010.0361%2031.2743%208.65155%2031.2744%206.58008C31.2743%205.60941%2030.7968%203.10247%2028.8809%201.18652L27.6943%200L29.3369%200.34375Z'%20fill='white'/%3e%3c/svg%3e",jp="/assets/04-Signum%20Capital-CBDngjCq.svg",Wp="/assets/05-Certick%20Ventures-B4ZRUHu7.svg",Xp="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.0813%201.88428C6.0589%20-1.95252%2014.5766%200.269139%2022.0911%206.74463H13.1584C11.5924%206.74497%2010.634%208.46408%2011.4573%209.79639L20.4973%2024.4253C21.2928%2025.7124%2023.1744%2025.6839%2023.9309%2024.3735L29.3254%2015.0269C33.7075%2021.8621%2034.697%2028.7821%2031.2424%2032.1147C26.7923%2036.4074%2016.6562%2033.1199%208.60376%2024.772C0.551679%2016.4242%20-2.36856%206.17693%202.0813%201.88428Z'%20fill='white'/%3e%3cpath%20d='M30.6445%206.74463C32.184%206.74463%2033.1466%208.41131%2032.3769%209.74463L29.3261%2015.0269C28.0636%2013.0575%2026.5208%2011.0943%2024.7197%209.22705C23.8648%208.34078%2022.9843%207.51381%2022.0917%206.74463H30.6445Z'%20fill='white'/%3e%3c/svg%3e",Yp="/assets/07-CGV%20Funds-CPTk9J1N.svg",Qp="data:image/svg+xml,%3csvg%20width='30'%20height='34'%20viewBox='0%200%2030%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.541%204.59473L29.5371%2011.9463V20.7412L16.541%2013.3896V17.8535L29.5371%2025.2051V34L16.541%2026.6484V22.0537L0%2031.375V22.5791L16.541%2013.2588V8.79492L0%2018.1162V9.32031L16.541%200V4.59473Z'%20fill='white'/%3e%3c/svg%3e",qp="/assets/09-CMD%20Holdings-Bb8CHYCA.svg",Kp="/assets/10-Big%20Brain%20Holdings-B40wJw3f.svg",Zp="/assets/11-DefinanceX-BwGwW8a1.svg",Jp="/assets/12-PragmaVentures-CpXISuGM.svg",$p="/assets/13-HG%20Ventures-BCg9lTcy.svg",e4="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34%2034H0V0H34V34ZM1.91504%201.91504V32.084H11.4922V24.3213L22.5068%2013.3066V32.084H32.084V1.91504H22.5068V11.2754L11.4922%2022.29V1.91504H1.91504Z'%20fill='white'/%3e%3c/svg%3e",t4="/assets/15-0xVentures-CA6E95C6.svg",n4="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%200V3H7.5V0H23V3H29V26H34V34H26V27H21V34H0V13H21V7H10V11H0V0H4ZM11%2020C8.79086%2020%207%2021.7909%207%2024C7%2026.2091%208.79086%2028%2011%2028C13.209%2027.9998%2015%2026.209%2015%2024C15%2021.791%2013.209%2020.0002%2011%2020Z'%20fill='white'/%3e%3c/svg%3e",i4="/assets/17-Dorahacks-DCYqCtxh.svg",r4="data:image/svg+xml,%3csvg%20width='40'%20height='19'%20viewBox='0%200%2040%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.3'%20d='M2.7373%200C3.27304%202.24022e-05%204.08455%200.0565374%205.17188%200.168945C6.25957%200.281396%207.07735%200.336914%207.62402%200.336914C8.36738%200.336903%209.48227%200.291316%2010.9688%200.200195C12.4556%200.109051%2013.571%200.0640586%2014.3145%200.0644531C15.6805%200.064464%2016.3641%200.610076%2016.3643%201.70117C16.3643%202.66271%2015.899%203.65696%2014.9697%204.68359C14.0425%205.70943%2012.9222%207.09535%2011.6084%208.84082C9.78294%2011.2591%208.64557%2012.7468%208.19727%2013.3027C8.86424%2013.2814%209.41657%2013.2705%209.85352%2013.2705C10.2905%2013.2705%2010.9281%2013.3479%2011.7646%2013.5029C12.601%2013.6583%2013.2321%2013.7357%2013.6582%2013.7354C14.3141%2013.7354%2014.8584%2013.9366%2015.291%2014.3379C15.7235%2014.7391%2015.9393%2015.2446%2015.9385%2015.8545C15.9385%2016.464%2015.7259%2016.9672%2015.2998%2017.3633C14.8737%2017.7594%2014.3264%2017.9567%2013.6592%2017.9551C13.2218%2017.955%2012.585%2017.88%2011.749%2017.7305C10.9132%2017.581%2010.282%2017.5063%209.85547%2017.5059C7.40635%2017.5059%205.11581%2017.7031%202.98438%2018.0977C2.74735%2018.1475%202.50603%2018.1756%202.26367%2018.1816C1.66217%2018.1816%201.14781%2018.0214%200.72168%2017.7002C0.240373%2017.3475%202.65282e-05%2016.8817%200%2016.3037C0%2015.6188%200.344363%2014.9927%201.0332%2014.4258C3.75486%2012.1685%206.60312%208.8676%209.57715%204.52344C8.8992%204.55539%208.24872%204.57128%207.62598%204.57129C5.92517%204.56876%204.22593%204.45072%202.54199%204.2168C1.19722%204.03525%200.525391%203.33916%200.525391%202.12988C0.5209%201.85133%200.572942%201.57467%200.679688%201.31641C0.786473%201.05807%200.945282%200.823159%201.14648%200.625977C1.56132%200.208568%202.09189%200%202.7373%200ZM38.0293%205.46191C38.3813%205.40873%2038.4214%205.63585%2038.3467%205.93066C38.2326%206.38356%2038.0322%206.80156%2037.9688%207.26953C37.9149%207.66557%2037.9468%208.08411%2038.127%208.43848C38.4325%209.03399%2039.0276%209.37997%2039.3877%209.93262C39.6413%2010.3275%2039.8184%2010.7693%2039.9102%2011.2334C39.9437%2011.3985%2039.9682%2011.5654%2039.9824%2011.7334C40.1257%2013.4713%2039.395%2015.2858%2038.1807%2016.4844C37.3414%2017.3153%2036.2826%2017.872%2035.1377%2018.085C33.9927%2018.2979%2032.812%2018.157%2031.7441%2017.6807C30.6764%2017.2043%2029.7684%2016.4135%2029.1348%2015.4072C28.5011%2014.4008%2028.1691%2013.2234%2028.1816%2012.0234C28.2154%208.59184%2031.0134%205.89693%2034.3379%205.98535C35.0602%206.00447%2035.7979%206.2149%2036.4512%206.50977C35.9265%207.30051%2036.0618%208.06203%2036.2988%208.87305C36.4471%209.38147%2036.7632%209.84517%2036.8896%2010.3594C37.0469%2010.9994%2036.9008%2011.8748%2036.4854%2012.4072C36.4865%2012.3002%2036.499%2012.1902%2036.499%2012.082C36.4981%2011.4357%2036.2517%2010.8155%2035.8135%2010.3535C35.3751%209.89147%2034.7789%209.62449%2034.1523%209.60938C33.5257%209.59426%2032.9178%209.83206%2032.459%2010.2725C32.0005%2010.7128%2031.7266%2011.3205%2031.6963%2011.9658C31.6188%2013.7049%2033.2163%2014.8129%2034.7891%2014.5371C36.4442%2014.2473%2037.4165%2012.5806%2037.4727%2010.9453C37.5164%209.67091%2036.3827%208.69233%2036.6377%207.39648C36.7771%206.68799%2037.2278%205.57776%2038.0293%205.46191ZM20.4082%205.57422C21.8036%205.2897%2023.2509%205.51669%2024.5029%206.21582C25.755%206.91499%2026.7347%208.04269%2027.2734%209.40723C27.0062%2010.1806%2026.8694%2010.9968%2026.8701%2011.8184C26.8695%2012.6398%2027.0063%2013.4552%2027.2734%2014.2285C26.7347%2015.5932%2025.7551%2016.7217%2024.5029%2017.4209C23.2509%2018.12%2021.8035%2018.346%2020.4082%2018.0615C19.0128%2017.7769%2017.7559%2016.999%2016.8525%2015.8604C15.9492%2014.7216%2015.4551%2013.2928%2015.4551%2011.8184C15.4551%2010.3439%2015.9492%208.9152%2016.8525%207.77637C17.756%206.63752%2019.0127%205.85884%2020.4082%205.57422ZM22.5488%209.42676C22.0927%209.23091%2021.5907%209.17946%2021.1064%209.2793C20.6221%209.37922%2020.1773%209.62623%2019.8281%209.98828C19.479%2010.3503%2019.2408%2010.8114%2019.1445%2011.3135C19.0483%2011.8155%2019.0982%2012.3357%2019.2871%2012.8086C19.4762%2013.2815%2019.7964%2013.6864%2020.207%2013.9707C20.6175%2014.2549%2021.1001%2014.4063%2021.5938%2014.4062C22.2558%2014.4061%2022.8913%2014.1338%2023.3594%2013.6484C23.8274%2013.1631%2024.0898%2012.5046%2024.0898%2011.8184C24.0898%2011.3064%2023.9433%2010.8056%2023.6689%2010.3799C23.3946%209.95435%2023.0049%209.62263%2022.5488%209.42676Z'%20fill='%238C8C8C'/%3e%3c/svg%3e",Pl=Object.assign({"/src/investors/01-BINANCE.svg":Hp,"/src/investors/02-OKX.svg":kp,"/src/investors/03-Bitrise Capital.svg":Vp,"/src/investors/04-Signum Capital.svg":jp,"/src/investors/05-Certick Ventures.svg":Wp,"/src/investors/06-Top.svg":Xp,"/src/investors/07-CGV Funds.svg":Yp,"/src/investors/08-Cryptomeria.svg":Qp,"/src/investors/09-CMD Holdings.svg":qp,"/src/investors/10-Big Brain Holdings.svg":Kp,"/src/investors/11-DefinanceX.svg":Zp,"/src/investors/12-PragmaVentures.svg":Jp,"/src/investors/13-HG Ventures.svg":$p,"/src/investors/14-YBB Capital.svg":e4,"/src/investors/15-0xVentures.svg":t4,"/src/investors/16-Aquarius Financials.svg":n4,"/src/investors/17-Dorahacks.svg":i4,"/src/investors/18-Coming soon.svg":r4}),Oc=Object.keys(Pl).map(t=>{const e=t.split("/").pop(),[n,i]=e.replace(".svg","").split("-"),r=Pl[t];return{num:Number(n),name:i,icon:r}}).sort((t,e)=>t.num-e.num);console.log("images:",Oc);function s4(){const t=It.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(clamp(150px,15.7vw,240px),1fr))] w-full border border-[#3E3E3E] overflow-hidden",children:Oc.map(a4)}),t[0]=e):e=t[0],e}function a4(t){return u.jsxs("div",{className:"root_anim_item flex w-full aspect-7/6 flex-col gap-5 py-5 items-center justify-center border border-white/5 relative group",children:[u.jsx("div",{style:{boxShadow:"0px 0px 11.54px 0px #FFFFFF1A inset,1.15px 1.15px 1.15px 0px #FFFFFF1A inset"},className:"flex items-center justify-center h-16 aspect-square rounded-[13px] border border-[#3E3E3E] bg-white/10",children:u.jsx("img",{src:t.icon})}),u.jsx("span",{className:"opacity-60 whitespace-nowrap font-parkinsans",children:t.name}),u.jsx("div",{style:{background:"linear-gradient(0deg, #FFFFFF -21.27%, #21EA65 58.91%)"},className:"absolute opacity-60 bg-[#1ECA53] w-22 aspect-square hidden group-hover:flex top-1/2 left-1/2 blur-2xl -translate-x-1/2 -translate-y-1/2 "})]},t.name)}function o4(){const t=It.c(72);let e,n,i,r,s,a,o,l,c,h,f,d,p,v;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx("path",{d:"M160 189.964C194.467 189.964 225.653 194.093 248.206 200.758C259.485 204.091 268.576 208.051 274.837 212.425C281.111 216.809 284.442 221.535 284.442 226.387C284.442 231.239 281.111 235.966 274.837 240.35C268.576 244.724 259.485 248.682 248.206 252.016C225.653 258.68 194.467 262.81 160 262.81C125.532 262.81 94.3468 258.68 71.7946 252.016C60.5152 248.682 51.4231 244.724 45.1627 240.35C38.8881 235.966 35.5582 231.239 35.5582 226.387C35.5583 221.535 38.8883 216.809 45.1627 212.425C51.4231 208.051 60.5151 204.091 71.7946 200.758C94.3468 194.093 125.532 189.964 160 189.964Z",stroke:"#3D3D3D"}),n=u.jsx("ellipse",{cx:"160",cy:"226.014",rx:"104.802",ry:"28.345",fill:"#202324"}),o=u.jsx("ellipse",{cx:"160.373",cy:"220.047",rx:"75.338",ry:"23.8695",fill:"#2F3334"}),l=u.jsx("ellipse",{cx:"160.373",cy:"213.333",rx:"70.8625",ry:"23.8695",fill:"url(#paint0_linear_127_321)"}),c=u.jsx("ellipse",{cx:"160.373",cy:"213.333",rx:"70.8625",ry:"23.8695",fill:"url(#paint1_linear_127_321)"}),h=u.jsx("path",{d:"M160.373 189.964C179.902 189.964 197.561 192.631 210.321 196.929C216.703 199.079 221.832 201.628 225.355 204.434C228.883 207.243 230.735 210.254 230.735 213.333C230.735 216.412 228.884 219.424 225.355 222.233C221.832 225.039 216.703 227.588 210.321 229.737C197.561 234.035 179.902 236.703 160.373 236.703C140.844 236.703 123.185 234.035 110.426 229.737C104.043 227.587 98.9136 225.039 95.3904 222.233C91.8622 219.424 90.0105 216.412 90.0105 213.333C90.0106 210.254 91.8624 207.243 95.3904 204.434C98.9136 201.628 104.043 199.079 110.426 196.929C123.185 192.631 140.844 189.964 160.373 189.964Z",stroke:"white","stroke-opacity":"0.08"}),f=u.jsx("rect",{x:"89.5105",y:"177.529",width:"141.725",height:"35.8042",fill:"url(#paint2_linear_127_321)"}),d=u.jsx("ellipse",{cx:"160.373",cy:"176.783",rx:"70.8625",ry:"23.8695",fill:"black"}),p=u.jsx("path",{d:"M160.373 152.914C199.509 152.914 231.235 163.6 231.235 176.783C231.235 189.966 199.509 200.653 160.373 200.653C121.237 200.653 89.5105 189.966 89.5105 176.783C89.511 163.6 121.237 152.914 160.373 152.914ZM160.373 158.135C124.945 158.136 96.2239 166.484 96.2234 176.783C96.2234 187.082 124.944 195.431 160.373 195.431C195.801 195.431 224.522 187.082 224.522 176.783C224.522 166.484 195.801 158.135 160.373 158.135Z",fill:"#2E3233"}),v=u.jsx("path",{d:"M160 143.717C179.014 143.717 196.208 146.301 208.63 150.464C214.844 152.546 219.836 155.015 223.265 157.731C226.699 160.453 228.497 163.366 228.497 166.341C228.497 169.316 226.699 172.228 223.265 174.949C219.836 177.666 214.844 180.134 208.63 182.217C196.208 186.38 179.014 188.964 160 188.964C140.986 188.964 123.793 186.38 111.37 182.217C105.157 180.134 100.164 177.666 96.7347 174.949C93.3008 172.228 91.5025 169.316 91.5023 166.341C91.5023 163.366 93.3006 160.452 96.7347 157.731C100.164 155.015 105.157 152.546 111.37 150.464C123.793 146.301 140.986 143.717 160 143.717Z",stroke:"#1ECA53"}),i=u.jsx("path",{d:"M160.373 130.536C199.509 130.536 231.235 141.223 231.235 154.405C231.235 167.588 199.509 178.275 160.373 178.275C121.237 178.275 89.5105 167.588 89.5105 154.405C89.511 141.223 121.237 130.536 160.373 130.536ZM160.373 135.758C124.945 135.758 96.224 144.106 96.2234 154.405C96.2234 164.704 124.944 173.054 160.373 173.054C195.801 173.054 224.522 164.704 224.522 154.405C224.522 144.106 195.801 135.758 160.373 135.758Z",fill:"#2E3233"}),r=u.jsx("path",{d:"M160 121.339C179.014 121.339 196.208 123.923 208.63 128.086C214.844 130.169 219.836 132.637 223.265 135.354C226.699 138.075 228.497 140.988 228.497 143.963C228.497 146.938 226.699 149.851 223.265 152.572C219.836 155.288 214.844 157.757 208.63 159.839C196.208 164.002 179.014 166.586 160 166.586C140.986 166.586 123.793 164.002 111.37 159.839C105.157 157.757 100.164 155.288 96.7347 152.572C93.3008 149.851 91.5025 146.938 91.5023 143.963C91.5023 140.988 93.3006 138.075 96.7347 135.354C100.164 132.637 105.157 130.169 111.37 128.086C123.793 123.923 140.986 121.339 160 121.339Z",stroke:"#1ECA53"}),s=u.jsx("rect",{x:"123.823",y:"122.331",width:"73.1002",height:"79.8135",fill:"url(#paint3_linear_127_321)"}),a=u.jsx("path",{d:"M160.373 100.699C199.509 100.699 231.235 111.386 231.235 124.568C231.235 137.751 199.509 148.439 160.373 148.439C121.237 148.439 89.5105 137.751 89.5105 124.568C89.511 111.386 121.237 100.699 160.373 100.699ZM160.373 105.921C124.945 105.921 96.2239 114.27 96.2234 124.568C96.2234 134.867 124.944 143.217 160.373 143.217C195.801 143.217 224.522 134.867 224.522 124.568C224.522 114.27 195.801 105.921 160.373 105.921Z",fill:"#2E3233"}),t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t[9]=h,t[10]=f,t[11]=d,t[12]=p,t[13]=v):(e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],f=t[10],d=t[11],p=t[12],v=t[13]);let x;t[14]===Symbol.for("react.memo_cache_sentinel")?(x=u.jsxs("g",{filter:"url(#filter0_d_127_321)",children:[u.jsx("ellipse",{cx:"160.373",cy:"121.958",rx:"36.5501",ry:"10.8159",fill:"url(#paint4_linear_127_321)"}),u.jsx("path",{d:"M160.373 111.642C170.432 111.642 179.519 112.849 186.076 114.79C189.357 115.761 191.977 116.907 193.764 118.158C195.566 119.418 196.423 120.71 196.423 121.958C196.423 123.205 195.566 124.498 193.764 125.758C191.977 127.009 189.357 128.156 186.076 129.127C179.519 131.067 170.432 132.274 160.373 132.274C150.314 132.274 141.226 131.067 134.67 129.127C131.388 128.156 128.77 127.009 126.982 125.758C125.18 124.498 124.323 123.205 124.323 121.958C124.323 120.71 125.181 119.418 126.982 118.158C128.77 116.907 131.388 115.761 134.67 114.79C141.226 112.849 150.314 111.642 160.373 111.642Z",stroke:"white","stroke-opacity":"0.19"})]}),t[14]=x):x=t[14];let g;t[15]===Symbol.for("react.memo_cache_sentinel")?(g=u.jsx("g",{filter:"url(#filter1_df_127_321)",children:u.jsx("circle",{cx:"120.839",cy:"79.0676",r:"4.47552",fill:"#1ECA53"})}),t[15]=g):g=t[15];let m;t[16]===Symbol.for("react.memo_cache_sentinel")?(m=u.jsx("g",{filter:"url(#filter2_df_127_321)",children:u.jsx("circle",{cx:"164.476",cy:"92.8671",r:"3.35664",fill:"#1ECA53"})}),t[16]=m):m=t[16];let y;t[17]===Symbol.for("react.memo_cache_sentinel")?(y=u.jsx("g",{filter:"url(#filter3_df_127_321)",children:u.jsx("circle",{cx:"118.601",cy:"33.5664",r:"2.23776",fill:"#1ECA53"})}),t[17]=y):y=t[17];let _;t[18]===Symbol.for("react.memo_cache_sentinel")?(_=u.jsx("g",{filter:"url(#filter4_df_127_321)",children:u.jsx("circle",{cx:"195.058",cy:"71.9814",r:"3.35664",fill:"#1ECA53"})}),t[18]=_):_=t[18];let E;t[19]===Symbol.for("react.memo_cache_sentinel")?(E=u.jsx("g",{filter:"url(#filter5_df_127_321)",children:u.jsx("circle",{cx:"208.112",cy:"85.0349",r:"1.49184",fill:"#1ECA53"})}),t[19]=E):E=t[19];let F;t[20]===Symbol.for("react.memo_cache_sentinel")?(F=u.jsx("g",{filter:"url(#filter6_df_127_321)",children:u.jsx("circle",{cx:"228.998",cy:"51.4685",r:"5.22145",fill:"#1ECA53"})}),t[20]=F):F=t[20];let w;t[21]===Symbol.for("react.memo_cache_sentinel")?(w=u.jsx("g",{filter:"url(#filter7_df_127_321)",children:u.jsx("circle",{cx:"225.268",cy:"26.1072",r:"1.49184",fill:"#1ECA53"})}),t[21]=w):w=t[21];let T;t[22]===Symbol.for("react.memo_cache_sentinel")?(T=u.jsx("g",{filter:"url(#filter8_df_127_321)",children:u.jsx("circle",{cx:"109.65",cy:"93.2401",r:"1.49184",fill:"#1ECA53"})}),t[22]=T):T=t[22];let I;t[23]===Symbol.for("react.memo_cache_sentinel")?(I=u.jsx("g",{filter:"url(#filter9_df_127_321)",children:u.jsx("circle",{cx:"97.7156",cy:"57.4359",r:"1.49184",fill:"#1ECA53"})}),t[23]=I):I=t[23];let S;t[24]===Symbol.for("react.memo_cache_sentinel")?(S=u.jsx("g",{filter:"url(#filter10_df_127_321)",children:u.jsx("circle",{cx:"80.9324",cy:"86.8998",r:"1.11888",fill:"#1ECA53"})}),t[24]=S):S=t[24];let C;t[25]===Symbol.for("react.memo_cache_sentinel")?(C=u.jsx("g",{filter:"url(#filter11_df_127_321)",children:u.jsx("circle",{cx:"58.5548",cy:"116.737",r:"1.11888",fill:"#1ECA53"})}),t[25]=C):C=t[25];let D;t[26]===Symbol.for("react.memo_cache_sentinel")?(D=u.jsx("g",{filter:"url(#filter12_df_127_321)",children:u.jsx("circle",{cx:"270.396",cy:"73.4731",r:"1.11888",fill:"#1ECA53"})}),t[26]=D):D=t[26];let Y;t[27]===Symbol.for("react.memo_cache_sentinel")?(Y=u.jsx("g",{filter:"url(#filter13_df_127_321)",children:u.jsx("circle",{cx:"248.765",cy:"94.359",r:"1.11888",fill:"#1ECA53"})}),t[27]=Y):Y=t[27];let k;t[28]===Symbol.for("react.memo_cache_sentinel")?(k=u.jsx("g",{filter:"url(#filter14_df_127_321)",children:u.jsx("circle",{cx:"240.559",cy:"73.4731",r:"1.11888",fill:"#1ECA53"})}),t[28]=k):k=t[28];let z,L,P,H,U,q,ee,te,xe;t[29]===Symbol.for("react.memo_cache_sentinel")?(z=u.jsx("path",{d:"M37.296 0H283.45L223.776 124.569H96.9697L37.296 0Z",fill:"url(#paint5_linear_127_321)",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1000ms",repeatCount:"indefinite"})}),L=u.jsx("rect",{y:"214.825",width:"10.4429",height:"43.2634",fill:"url(#paint6_linear_127_321)"}),P=u.jsx("ellipse",{cx:"5.22145",cy:"214.825",rx:"5.22145",ry:"2.23776",fill:"#E0E0E0"}),H=u.jsx("rect",{x:"309.557",y:"214.825",width:"10.4429",height:"43.2634",fill:"url(#paint7_linear_127_321)"}),U=u.jsx("ellipse",{cx:"314.779",cy:"214.825",rx:"5.22145",ry:"2.23776",fill:"#E0E0E0"}),q=u.jsx("rect",{x:"155.151",y:"223.776",width:"10.4429",height:"34.3124",fill:"url(#paint8_linear_127_321)"}),ee=u.jsx("ellipse",{cx:"160.373",cy:"223.776",rx:"5.22145",ry:"2.23776",fill:"#E0E0E0"}),te=u.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 -5;0 10;0 -5",dur:"3000ms",repeatCount:"indefinite"}),xe=u.jsx("path",{d:"M163.723 60.1994C161.601 62.3435 159.389 63.479 157.329 63.6718C156.63 63.7386 155.951 63.6915 155.3 63.5429L154.931 63.4472C152.384 62.6994 150.288 60.2971 149.218 56.3918C147.035 48.4019 149.987 37.1536 155.811 31.2699C158.699 28.3522 161.756 27.2998 164.369 27.9562C165.102 28.1398 165.796 28.4591 166.445 28.9052C168.149 30.0803 169.518 32.1635 170.316 35.0775C172.502 43.065 169.55 54.3132 163.723 60.1994Z",fill:"#17FF70"}),t[29]=z,t[30]=L,t[31]=P,t[32]=H,t[33]=U,t[34]=q,t[35]=ee,t[36]=te,t[37]=xe):(z=t[29],L=t[30],P=t[31],H=t[32],U=t[33],q=t[34],ee=t[35],te=t[36],xe=t[37]);let ue,X,J;t[38]===Symbol.for("react.memo_cache_sentinel")?(ue=u.jsxs("g",{children:[te,xe,u.jsx("g",{filter:"url(#filter15_i_127_321)",children:u.jsx("path",{d:"M162.227 57.4127C160.515 59.1416 158.734 60.0594 157.076 60.2186C156.514 60.2738 155.968 60.2372 155.445 60.119L155.148 60.0428C153.101 59.4463 151.42 57.5181 150.567 54.379C148.828 47.9562 151.224 38.9023 155.921 34.1578C158.25 31.8051 160.711 30.9524 162.811 31.4752C163.4 31.6214 163.957 31.8768 164.479 32.2344C165.847 33.1761 166.944 34.8491 167.58 37.1916C169.322 43.6122 166.925 52.6661 162.227 57.4127Z",fill:"#00A757"})}),u.jsx("path",{d:"M167.961 61.3059C165.12 64.1764 162.118 65.2412 159.538 64.6543L159.187 64.5637L155.3 63.5429C155.95 63.6927 156.632 63.7399 157.329 63.6718C159.388 63.4777 161.601 62.3435 163.723 60.1995C169.55 54.3132 172.502 43.065 170.316 35.0775C169.519 32.1622 168.149 30.0803 166.445 28.9053C165.799 28.4591 165.104 28.1398 164.369 27.9562L168.534 29.0478L168.679 29.0863C171.298 29.7794 173.462 32.2003 174.553 36.1852C176.736 44.1752 173.784 55.4234 167.96 61.3071L167.961 61.3059Z",fill:"#018754"})]}),X=u.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 -5;0 10;0 -5",dur:"2800ms",repeatCount:"indefinite",begin:".5"}),J=u.jsx("path",{d:"M128.677 100.645C125.66 100.645 123.297 99.8711 121.71 98.5426C121.171 98.0932 120.727 97.5776 120.375 97.01L120.183 96.6806C118.923 94.3442 119.156 91.1645 121.179 87.6572C125.322 80.4849 135.392 74.6698 143.671 74.6698C147.776 74.6698 150.675 76.1021 152.046 78.4206C152.431 79.0705 152.693 79.7885 152.832 80.5637C153.196 82.6011 152.678 85.0396 151.169 87.6572C147.03 94.8294 136.959 100.645 128.677 100.645Z",fill:"#17FF70"}),t[38]=ue,t[39]=X,t[40]=J):(ue=t[38],X=t[39],J=t[40]);let re,le,Me;t[41]===Symbol.for("react.memo_cache_sentinel")?(re=u.jsxs("g",{children:[X,J,u.jsx("g",{filter:"url(#filter16_i_127_321)",children:u.jsx("path",{d:"M129.604 97.6204C127.172 97.6204 125.266 96.9998 123.987 95.9339C123.552 95.5733 123.194 95.1596 122.91 94.7042L122.755 94.4399C121.739 92.5652 121.927 90.014 123.558 87.1998C126.899 81.445 135.02 76.7792 141.696 76.7792C145.006 76.7792 147.343 77.9284 148.449 79.7887C148.76 80.3102 148.97 80.8862 149.083 81.5082C149.376 83.143 148.959 85.0996 147.742 87.1998C144.404 92.9545 136.283 97.6204 129.604 97.6204Z",fill:"#00A757"})}),u.jsx("path",{d:"M130.872 104.435C126.833 104.435 123.964 103.051 122.566 100.804L122.384 100.491L120.375 97.0102C120.726 97.5777 121.172 98.0952 121.71 98.5428C123.297 99.8694 125.66 100.645 128.677 100.645C136.959 100.645 147.03 94.8295 151.169 87.6573C152.68 85.0398 153.196 82.6013 152.832 80.5638C152.695 79.7904 152.433 79.0725 152.046 78.4208L154.2 82.1483L154.275 82.279C155.625 84.628 155.427 87.8686 153.362 91.4475C149.219 98.6197 139.149 104.435 130.87 104.435L130.872 104.435Z",fill:"#018754"})]}),le=u.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 -5;0 10;0 -5",dur:"3200ms",repeatCount:"indefinite",begin:".3"}),Me=u.jsx("path",{d:"M178.154 95.3726C176.424 96.2139 174.853 96.4294 173.573 96.11C173.139 96.0026 172.74 95.8308 172.38 95.6037L172.178 95.4682C170.804 94.4799 170.05 92.5917 170.232 90.0163C170.608 84.7483 174.761 78.6053 179.508 76.2966C181.862 75.1518 183.924 75.1647 185.357 76.1118C185.759 76.3771 186.109 76.7159 186.405 77.1215C187.182 78.1884 187.565 79.731 187.43 81.6529C187.056 86.9199 182.903 93.0629 178.154 95.3726Z",fill:"#17FF70"}),t[41]=re,t[42]=le,t[43]=Me):(re=t[41],le=t[42],Me=t[43]);let ye;t[44]===Symbol.for("react.memo_cache_sentinel")?(ye=u.jsxs("g",{children:[le,Me,u.jsx("g",{filter:"url(#filter17_i_127_321)",children:u.jsx("path",{d:"M177.843 93.3797C176.448 94.0581 175.182 94.2337 174.151 93.9792C173.801 93.8936 173.481 93.7562 173.19 93.5744L173.028 93.4659C171.923 92.6744 171.319 91.1591 171.469 89.0904C171.78 84.8589 175.136 79.9187 178.964 78.057C180.862 77.1338 182.523 77.141 183.676 77.8994C183.999 78.1118 184.281 78.3834 184.519 78.7086C185.143 79.5643 185.449 80.8026 185.337 82.3463C185.028 86.5771 181.672 91.5173 177.843 93.3797Z",fill:"#00A757"})}),u.jsx("path",{d:"M180.47 96.934C178.153 98.0604 176.123 98.0667 174.694 97.1682L174.502 97.0394L172.38 95.6038C172.739 95.8314 173.139 96.0038 173.573 96.1102C174.853 96.4286 176.424 96.214 178.154 95.3728C182.903 93.0631 187.056 86.9201 187.43 81.653C187.566 79.7307 187.182 78.1886 186.405 77.1217C186.111 76.7166 185.761 76.3778 185.357 76.112L187.632 77.6488L187.711 77.7028C189.14 78.6732 189.93 80.5869 189.744 83.2148C189.369 88.4829 185.216 94.6258 180.469 96.9345L180.47 96.934Z",fill:"#018754"})]}),t[44]=ye):ye=t[44];let _e;t[45]===Symbol.for("react.memo_cache_sentinel")?(_e=u.jsxs("filter",{id:"filter0_d_127_321",x:"117.823",y:"105.142",width:"85.1002",height:"33.6317",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"})]}),t[45]=_e):_e=t[45];let We;t[46]===Symbol.for("react.memo_cache_sentinel")?(We=u.jsxs("filter",{id:"filter1_df_127_321",x:"110.364",y:"68.592",width:"20.951",height:"20.951",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[46]=We):We=t[46];let R;t[47]===Symbol.for("react.memo_cache_sentinel")?(R=u.jsxs("filter",{id:"filter2_df_127_321",x:"155.119",y:"83.5105",width:"18.7133",height:"18.7133",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[47]=R):R=t[47];let Ye;t[48]===Symbol.for("react.memo_cache_sentinel")?(Ye=u.jsxs("filter",{id:"filter3_df_127_321",x:"110.364",y:"25.3286",width:"16.4755",height:"16.4755",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[48]=Ye):Ye=t[48];let Ne;t[49]===Symbol.for("react.memo_cache_sentinel")?(Ne=u.jsxs("filter",{id:"filter4_df_127_321",x:"185.702",y:"62.6248",width:"18.7133",height:"18.7133",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[49]=Ne):Ne=t[49];let ze;t[50]===Symbol.for("react.memo_cache_sentinel")?(ze=u.jsxs("filter",{id:"filter5_df_127_321",x:"200.62",y:"77.5431",width:"14.9837",height:"14.9836",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[50]=ze):ze=t[50];let ge;t[51]===Symbol.for("react.memo_cache_sentinel")?(ge=u.jsxs("filter",{id:"filter6_df_127_321",x:"217.776",y:"40.2471",width:"22.4429",height:"22.4429",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[51]=ge):ge=t[51];let Ke;t[52]===Symbol.for("react.memo_cache_sentinel")?(Ke=u.jsxs("filter",{id:"filter7_df_127_321",x:"217.776",y:"18.6154",width:"14.9837",height:"14.9836",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[52]=Ke):Ke=t[52];let Te;t[53]===Symbol.for("react.memo_cache_sentinel")?(Te=u.jsxs("filter",{id:"filter8_df_127_321",x:"102.158",y:"85.7483",width:"14.9836",height:"14.9836",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[53]=Te):Te=t[53];let De;t[54]===Symbol.for("react.memo_cache_sentinel")?(De=u.jsxs("filter",{id:"filter9_df_127_321",x:"90.2238",y:"49.9441",width:"14.9836",height:"14.9836",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_127_321"})]}),t[54]=De):De=t[54];let b;t[55]===Symbol.for("react.memo_cache_sentinel")?(b=u.jsxs("filter",{id:"filter10_df_127_321",x:"73.8135",y:"79.7809",width:"14.2378",height:"14.2378",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_127_321"})]}),t[55]=b):b=t[55];let A;t[56]===Symbol.for("react.memo_cache_sentinel")?(A=u.jsxs("filter",{id:"filter11_df_127_321",x:"51.4359",y:"109.618",width:"14.2378",height:"14.2378",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_127_321"})]}),t[56]=A):A=t[56];let j;t[57]===Symbol.for("react.memo_cache_sentinel")?(j=u.jsxs("filter",{id:"filter12_df_127_321",x:"263.277",y:"66.3542",width:"14.2377",height:"14.2378",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_127_321"})]}),t[57]=j):j=t[57];let $;t[58]===Symbol.for("react.memo_cache_sentinel")?($=u.jsxs("filter",{id:"filter13_df_127_321",x:"241.646",y:"87.2401",width:"14.2377",height:"14.2378",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_127_321"})]}),t[58]=$):$=t[58];let ne;t[59]===Symbol.for("react.memo_cache_sentinel")?(ne=u.jsxs("filter",{id:"filter14_df_127_321",x:"233.441",y:"66.3542",width:"14.2377",height:"14.2378",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_127_321"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_127_321",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_127_321"})]}),t[59]=ne):ne=t[59];let Z;t[60]===Symbol.for("react.memo_cache_sentinel")?(Z=u.jsxs("filter",{id:"filter15_i_127_321",x:"150",y:"31.327",width:"18.1483",height:"28.9167",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{dx:"4",dy:"-1"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),u.jsx("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_127_321"})]}),t[60]=Z):Z=t[60];let Ae;t[61]===Symbol.for("react.memo_cache_sentinel")?(Ae=u.jsxs("filter",{id:"filter16_i_127_321",x:"122.129",y:"76.7792",width:"27.044",height:"20.8412",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{dx:"4",dy:"-1"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),u.jsx("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_127_321"})]}),t[61]=Ae):Ae=t[61];let ce;t[62]===Symbol.for("react.memo_cache_sentinel")?(ce=u.jsxs("filter",{id:"filter17_i_127_321",x:"171.447",y:"77.3463",width:"13.9131",height:"16.744",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[u.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{dx:"3",dy:"-2"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),u.jsx("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_127_321"})]}),t[62]=ce):ce=t[62];let pe;t[63]===Symbol.for("react.memo_cache_sentinel")?(pe=u.jsxs("linearGradient",{id:"paint0_linear_127_321",x1:"231.235",y1:"213.333",x2:"89.5105",y2:"213.333",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{}),u.jsx("stop",{offset:"1","stop-color":"#293E2F"})]}),t[63]=pe):pe=t[63];let Pe;t[64]===Symbol.for("react.memo_cache_sentinel")?(Pe=u.jsxs("linearGradient",{id:"paint1_linear_127_321",x1:"231.235",y1:"213.333",x2:"89.5105",y2:"213.333",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{}),u.jsx("stop",{offset:"1","stop-color":"#293E2F"})]}),t[64]=Pe):Pe=t[64];let ie;t[65]===Symbol.for("react.memo_cache_sentinel")?(ie=u.jsxs("linearGradient",{id:"paint2_linear_127_321",x1:"89.5105",y1:"195.431",x2:"231.235",y2:"195.431",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#293E2F"}),u.jsx("stop",{offset:"1"})]}),t[65]=ie):ie=t[65];let fe;t[66]===Symbol.for("react.memo_cache_sentinel")?(fe=u.jsxs("linearGradient",{id:"paint3_linear_127_321",x1:"160.373",y1:"122.331",x2:"160.373",y2:"202.145",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#206335"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]}),t[66]=fe):fe=t[66];let Oe;t[67]===Symbol.for("react.memo_cache_sentinel")?(Oe=u.jsxs("linearGradient",{id:"paint4_linear_127_321",x1:"160.373",y1:"111.142",x2:"160.373",y2:"132.774",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#1ECA53"}),u.jsx("stop",{offset:"1","stop-color":"#0F6429"})]}),t[67]=Oe):Oe=t[67];let Ee;t[68]===Symbol.for("react.memo_cache_sentinel")?(Ee=u.jsxs("linearGradient",{id:"paint5_linear_127_321",x1:"160.373",y1:"-12.0416",x2:"160.373",y2:"178.964",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0.0961273","stop-color":"#1ECA53","stop-opacity":"0"}),u.jsx("stop",{offset:"0.55","stop-color":"#1ECA53","stop-opacity":"0.5"}),u.jsx("stop",{offset:"0.75","stop-color":"#0F6429","stop-opacity":"0"})]}),t[68]=Ee):Ee=t[68];let me;t[69]===Symbol.for("react.memo_cache_sentinel")?(me=u.jsxs("linearGradient",{id:"paint6_linear_127_321",x1:"5.22145",y1:"214.825",x2:"5.22145",y2:"258.089",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#737373"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]}),t[69]=me):me=t[69];let be;t[70]===Symbol.for("react.memo_cache_sentinel")?(be=u.jsxs("linearGradient",{id:"paint7_linear_127_321",x1:"314.779",y1:"214.825",x2:"314.779",y2:"258.089",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#737373"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]}),t[70]=be):be=t[70];let Ue;return t[71]===Symbol.for("react.memo_cache_sentinel")?(Ue=u.jsxs("svg",{width:"100%",height:"auto",viewBox:"0 0 320 264",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e,n,o,l,c,h,f,d,p,v,i,r,s,a,x,g,m,y,_,E,F,w,T,I,S,C,D,Y,k,z,L,P,H,U,q,ee,ue,re,ye,u.jsxs("defs",{children:[_e,We,R,Ye,Ne,ze,ge,Ke,Te,De,b,A,j,$,ne,Z,Ae,ce,pe,Pe,ie,fe,Oe,Ee,me,be,u.jsxs("linearGradient",{id:"paint8_linear_127_321",x1:"160.373",y1:"223.776",x2:"160.373",y2:"258.089",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-color":"#737373"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]})]})]}),t[71]=Ue):Ue=t[71],Ue}function l4(){const t=It.c(103);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx("g",{filter:"url(#filter0_df_1_3)",children:u.jsx("circle",{cx:"247",cy:"136",r:"2",fill:"#1ECA53"})}),t[0]=e):e=t[0];let n;t[1]===Symbol.for("react.memo_cache_sentinel")?(n=u.jsx("g",{filter:"url(#filter1_df_1_3)",children:u.jsx("circle",{cx:"257.5",cy:"87.5001",r:"1.5",fill:"#1ECA53"})}),t[1]=n):n=t[1];let i;t[2]===Symbol.for("react.memo_cache_sentinel")?(i=u.jsx("g",{filter:"url(#filter2_df_1_3)",children:u.jsx("circle",{cx:"225.5",cy:"174.5",r:"1.5",fill:"#1ECA53"})}),t[2]=i):i=t[2];let r;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=u.jsx("g",{filter:"url(#filter3_df_1_3)",children:u.jsx("circle",{cx:"458.5",cy:"117.5",r:"1.5",fill:"#1ECA53"})}),t[3]=r):r=t[3];let s;t[4]===Symbol.for("react.memo_cache_sentinel")?(s=u.jsx("g",{filter:"url(#filter4_df_1_3)",children:u.jsx("circle",{cx:"2",cy:"2",r:"2",transform:"matrix(-1 0 0 1 408 134)",fill:"#1ECA53"})}),t[4]=s):s=t[4];let a;t[5]===Symbol.for("react.memo_cache_sentinel")?(a=u.jsx("g",{filter:"url(#filter5_df_1_3)",children:u.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",transform:"matrix(-1 0 0 1 431 176)",fill:"#1ECA53"})}),t[5]=a):a=t[5];let o;t[6]===Symbol.for("react.memo_cache_sentinel")?(o=u.jsx("g",{filter:"url(#filter6_df_1_3)",children:u.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",transform:"matrix(-1 0 0 1 428 85.0001)",fill:"#1ECA53"})}),t[6]=o):o=t[6];let l,c,h,f,d,p,v,x,g,m,y,_,E,F,w,T,I,S,C;t[7]===Symbol.for("react.memo_cache_sentinel")?(I=u.jsx("g",{filter:"url(#filter7_df_1_3)",children:u.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",transform:"matrix(-1 0 0 1 199 96.0001)",fill:"#1ECA53"})}),S=u.jsx("path",{opacity:"0.3",d:"M3.18555 342.651C1.56343 339.763 1.56343 336.238 3.18555 333.349L15.125 312.085L27.5645 291.123C29.2551 288.274 32.3083 286.511 35.6211 286.472L60.0059 286.18L84.3789 286.472C87.6917 286.511 90.7449 288.274 92.4355 291.123L104.874 312.085L116.814 333.349C118.437 336.238 118.437 339.763 116.814 342.651L104.874 363.916L92.4355 384.877C90.7449 387.726 87.6917 389.489 84.3789 389.528L60.0059 389.82L35.6211 389.528C32.3083 389.489 29.2551 387.726 27.5645 384.877L15.125 363.916L15.126 363.915L3.18555 342.651Z",stroke:"url(#paint0_linear_1_3)"}),C=u.jsx("path",{opacity:"0.3",d:"M139.186 342.651C137.563 339.763 137.563 336.238 139.186 333.349L151.125 312.085L163.564 291.123C165.255 288.274 168.308 286.511 171.621 286.472L196.006 286.18L220.379 286.472C223.692 286.511 226.745 288.274 228.436 291.123L240.874 312.085L252.814 333.349C254.437 336.238 254.437 339.763 252.814 342.651L240.874 363.916L228.436 384.877C226.745 387.726 223.692 389.489 220.379 389.528L196.006 389.82L171.621 389.528C168.308 389.489 165.255 387.726 163.564 384.877L151.125 363.916L151.126 363.915L139.186 342.651Z",stroke:"url(#paint1_linear_1_3)"}),l=u.jsx("path",{opacity:"0.3",d:"M275.186 342.651C273.563 339.763 273.563 336.238 275.186 333.349L287.125 312.085L299.564 291.123C301.255 288.274 304.308 286.511 307.621 286.472L332.006 286.18L356.379 286.472C359.692 286.511 362.745 288.274 364.436 291.123L376.874 312.085L388.814 333.349C390.437 336.238 390.437 339.763 388.814 342.651L376.874 363.916L364.436 384.877C362.745 387.726 359.692 389.489 356.379 389.528L332.006 389.82L307.621 389.528C304.308 389.489 301.255 387.726 299.564 384.877L287.125 363.916L287.126 363.915L275.186 342.651Z",stroke:"url(#paint2_linear_1_3)"}),c=u.jsx("path",{opacity:"0.3",d:"M411.186 342.651C409.563 339.763 409.563 336.238 411.186 333.349L423.125 312.085L435.564 291.123C437.255 288.274 440.308 286.511 443.621 286.472L468.006 286.18L492.379 286.472C495.692 286.511 498.745 288.274 500.436 291.123L512.874 312.085L524.814 333.349C526.437 336.238 526.437 339.763 524.814 342.651L512.874 363.916L500.436 384.877C498.745 387.726 495.692 389.489 492.379 389.528L468.006 389.82L443.621 389.528C440.308 389.489 437.255 387.726 435.564 384.877L423.125 363.916L423.126 363.915L411.186 342.651Z",stroke:"url(#paint3_linear_1_3)"}),h=u.jsx("path",{opacity:"0.3",d:"M547.186 342.651C545.563 339.763 545.563 336.238 547.186 333.349L559.125 312.085L571.564 291.123C573.255 288.274 576.308 286.511 579.621 286.472L604.006 286.18L628.379 286.472C631.692 286.511 634.745 288.274 636.436 291.123L648.874 312.085L660.814 333.349C662.437 336.238 662.437 339.763 660.814 342.651L648.874 363.916L636.436 384.877C634.745 387.726 631.692 389.489 628.379 389.528L604.006 389.82L579.621 389.528C576.308 389.489 573.255 387.726 571.564 384.877L559.125 363.916L559.126 363.915L547.186 342.651Z",stroke:"url(#paint4_linear_1_3)"}),f=u.jsx("path",{opacity:"0.3",d:"M71.1855 282.651C69.5634 279.763 69.5634 276.238 71.1855 273.349L83.125 252.085L95.5645 231.123C97.2551 228.274 100.308 226.511 103.621 226.472L128.006 226.18L152.379 226.472C155.692 226.511 158.745 228.274 160.436 231.123L172.874 252.085L184.814 273.349C186.437 276.238 186.437 279.763 184.814 282.651L172.874 303.916L160.436 324.877C158.745 327.726 155.692 329.489 152.379 329.528L128.006 329.82L103.621 329.528C100.308 329.489 97.2551 327.726 95.5645 324.877L83.125 303.916L83.126 303.915L71.1855 282.651Z",stroke:"url(#paint5_linear_1_3)"}),d=u.jsx("path",{opacity:"0.3",d:"M207.186 282.651C205.563 279.763 205.563 276.238 207.186 273.349L219.125 252.085L231.564 231.123C233.255 228.274 236.308 226.511 239.621 226.472L264.006 226.18L288.379 226.472C291.692 226.511 294.745 228.274 296.436 231.123L308.874 252.085L320.814 273.349C322.437 276.238 322.437 279.763 320.814 282.651L308.874 303.916L296.436 324.877C294.745 327.726 291.692 329.489 288.379 329.528L264.006 329.82L239.621 329.528C236.308 329.489 233.255 327.726 231.564 324.877L219.125 303.916L219.126 303.915L207.186 282.651Z",stroke:"url(#paint6_linear_1_3)"}),p=u.jsx("path",{opacity:"0.3",d:"M343.186 282.651C341.563 279.763 341.563 276.238 343.186 273.349L355.125 252.085L367.564 231.123C369.255 228.274 372.308 226.511 375.621 226.472L400.006 226.18L424.379 226.472C427.692 226.511 430.745 228.274 432.436 231.123L444.874 252.085L456.814 273.349C458.437 276.238 458.437 279.763 456.814 282.651L444.874 303.916L432.436 324.877C430.745 327.726 427.692 329.489 424.379 329.528L400.006 329.82L375.621 329.528C372.308 329.489 369.255 327.726 367.564 324.877L355.125 303.916L355.126 303.915L343.186 282.651Z",stroke:"url(#paint7_linear_1_3)"}),v=u.jsx("path",{opacity:"0.3",d:"M479.186 282.651C477.563 279.763 477.563 276.238 479.186 273.349L491.125 252.085L503.564 231.123C505.255 228.274 508.308 226.511 511.621 226.472L536.006 226.18L560.379 226.472C563.692 226.511 566.745 228.274 568.436 231.123L580.874 252.085L592.814 273.349C594.437 276.238 594.437 279.763 592.814 282.651L580.874 303.916L568.436 324.877C566.745 327.726 563.692 329.489 560.379 329.528L536.006 329.82L511.621 329.528C508.308 329.489 505.255 327.726 503.564 324.877L491.125 303.916L491.126 303.915L479.186 282.651Z",stroke:"url(#paint8_linear_1_3)"}),x=u.jsx("path",{opacity:"0.6",d:"M3.18555 202.651C1.56343 199.763 1.56343 196.238 3.18555 193.349L15.125 172.085L27.5645 151.123C29.2551 148.274 32.3083 146.511 35.6211 146.472L60.0059 146.18L84.3789 146.472C87.6917 146.511 90.7449 148.274 92.4355 151.123L104.874 172.085L116.814 193.349C118.437 196.238 118.437 199.763 116.814 202.651L104.874 223.916L92.4355 244.877C90.7449 247.726 87.6917 249.489 84.3789 249.528L60.0059 249.82L35.6211 249.528C32.3083 249.489 29.2551 247.726 27.5645 244.877L15.125 223.916L15.126 223.915L3.18555 202.651Z",stroke:"url(#paint9_linear_1_3)"}),g=u.jsx("path",{opacity:"0.6",d:"M139.186 202.651C137.563 199.763 137.563 196.238 139.186 193.349L151.125 172.085L163.564 151.123C165.255 148.274 168.308 146.511 171.621 146.472L196.006 146.18L220.379 146.472C223.692 146.511 226.745 148.274 228.436 151.123L240.874 172.085L252.814 193.349C254.437 196.238 254.437 199.763 252.814 202.651L240.874 223.916L228.436 244.877C226.745 247.726 223.692 249.489 220.379 249.528L196.006 249.82L171.621 249.528C168.308 249.489 165.255 247.726 163.564 244.877L151.125 223.916L151.126 223.915L139.186 202.651Z",stroke:"url(#paint10_linear_1_3)"}),m=u.jsx("path",{opacity:"0.6",d:"M275.186 202.651C273.563 199.763 273.563 196.238 275.186 193.349L287.125 172.085L299.564 151.123C301.255 148.274 304.308 146.511 307.621 146.472L332.006 146.18L356.379 146.472C359.692 146.511 362.745 148.274 364.436 151.123L376.874 172.085L388.814 193.349C390.437 196.238 390.437 199.763 388.814 202.651L376.874 223.916L364.436 244.877C362.745 247.726 359.692 249.489 356.379 249.528L332.006 249.82L307.621 249.528C304.308 249.489 301.255 247.726 299.564 244.877L287.125 223.916L287.126 223.915L275.186 202.651Z",stroke:"url(#paint11_linear_1_3)"}),y=u.jsx("path",{opacity:"0.6",d:"M411.186 202.651C409.563 199.763 409.563 196.238 411.186 193.349L423.125 172.085L435.564 151.123C437.255 148.274 440.308 146.511 443.621 146.472L468.006 146.18L492.379 146.472C495.692 146.511 498.745 148.274 500.436 151.123L512.874 172.085L524.814 193.349C526.437 196.238 526.437 199.763 524.814 202.651L512.874 223.916L500.436 244.877C498.745 247.726 495.692 249.489 492.379 249.528L468.006 249.82L443.621 249.528C440.308 249.489 437.255 247.726 435.564 244.877L423.125 223.916L423.126 223.915L411.186 202.651Z",stroke:"url(#paint12_linear_1_3)"}),_=u.jsx("path",{opacity:"0.6",d:"M547.186 202.651C545.563 199.763 545.563 196.238 547.186 193.349L559.125 172.085L571.564 151.123C573.255 148.274 576.308 146.511 579.621 146.472L604.006 146.18L628.379 146.472C631.692 146.511 634.745 148.274 636.436 151.123L648.874 172.085L660.814 193.349C662.437 196.238 662.437 199.763 660.814 202.651L648.874 223.916L636.436 244.877C634.745 247.726 631.692 249.489 628.379 249.528L604.006 249.82L579.621 249.528C576.308 249.489 573.255 247.726 571.564 244.877L559.125 223.916L559.126 223.915L547.186 202.651Z",stroke:"url(#paint13_linear_1_3)"}),E=u.jsx("path",{opacity:"0.3",d:"M71.1855 142.651C69.5634 139.763 69.5634 136.238 71.1855 133.349L83.125 112.085L95.5645 91.1232C97.2551 88.274 100.308 86.5114 103.621 86.4718L128.006 86.1798L152.379 86.4718C155.692 86.5114 158.745 88.274 160.436 91.1232L172.874 112.085L184.814 133.349C186.437 136.238 186.437 139.763 184.814 142.651L172.874 163.916L160.436 184.877C158.745 187.726 155.692 189.489 152.379 189.528L128.006 189.82L103.621 189.528C100.308 189.489 97.2551 187.726 95.5645 184.877L83.125 163.916L83.126 163.915L71.1855 142.651Z",stroke:"url(#paint14_linear_1_3)"}),F=u.jsx("path",{opacity:"0.3",d:"M207.186 142.651C205.563 139.763 205.563 136.238 207.186 133.349L219.125 112.085L231.564 91.1232C233.255 88.274 236.308 86.5114 239.621 86.4718L264.006 86.1798L288.379 86.4718C291.692 86.5114 294.745 88.274 296.436 91.1232L308.874 112.085L320.814 133.349C322.437 136.238 322.437 139.763 320.814 142.651L308.874 163.916L296.436 184.877C294.745 187.726 291.692 189.489 288.379 189.528L264.006 189.82L239.621 189.528C236.308 189.489 233.255 187.726 231.564 184.877L219.125 163.916L219.126 163.915L207.186 142.651Z",stroke:"url(#paint15_linear_1_3)"}),w=u.jsx("path",{opacity:"0.3",d:"M343.186 142.651C341.563 139.763 341.563 136.238 343.186 133.349L355.125 112.085L367.564 91.1232C369.255 88.274 372.308 86.5114 375.621 86.4718L400.006 86.1798L424.379 86.4718C427.692 86.5114 430.745 88.274 432.436 91.1232L444.874 112.085L456.814 133.349C458.437 136.238 458.437 139.763 456.814 142.651L444.874 163.916L432.436 184.877C430.745 187.726 427.692 189.489 424.379 189.528L400.006 189.82L375.621 189.528C372.308 189.489 369.255 187.726 367.564 184.877L355.125 163.916L355.126 163.915L343.186 142.651Z",stroke:"url(#paint16_linear_1_3)"}),T=u.jsx("path",{opacity:"0.3",d:"M479.186 142.651C477.563 139.763 477.563 136.238 479.186 133.349L491.125 112.085L503.564 91.1232C505.255 88.274 508.308 86.5114 511.621 86.4718L536.006 86.1798L560.379 86.4718C563.692 86.5114 566.745 88.274 568.436 91.1232L580.874 112.085L592.814 133.349C594.437 136.238 594.437 139.763 592.814 142.651L580.874 163.916L568.436 184.877C566.745 187.726 563.692 189.489 560.379 189.528L536.006 189.82L511.621 189.528C508.308 189.489 505.255 187.726 503.564 184.877L491.125 163.916L491.126 163.915L479.186 142.651Z",stroke:"url(#paint17_linear_1_3)"}),t[7]=l,t[8]=c,t[9]=h,t[10]=f,t[11]=d,t[12]=p,t[13]=v,t[14]=x,t[15]=g,t[16]=m,t[17]=y,t[18]=_,t[19]=E,t[20]=F,t[21]=w,t[22]=T,t[23]=I,t[24]=S,t[25]=C):(l=t[7],c=t[8],h=t[9],f=t[10],d=t[11],p=t[12],v=t[13],x=t[14],g=t[15],m=t[16],y=t[17],_=t[18],E=t[19],F=t[20],w=t[21],T=t[22],I=t[23],S=t[24],C=t[25]);let D,Y,k,z,L;t[26]===Symbol.for("react.memo_cache_sentinel")?(D=u.jsx("path",{d:"M330.493 137.003C332.15 137.007 333.802 137.019 335.449 137.042L335.437 138.041C336.094 138.05 336.75 138.061 337.406 138.073L337.424 137.074C339.075 137.105 340.722 137.147 342.363 137.196L342.334 138.194C342.994 138.214 343.654 138.236 344.312 138.259L344.346 137.261C345.996 137.319 347.642 137.385 349.282 137.462L349.236 138.46C349.891 138.491 350.545 138.523 351.197 138.557L351.248 137.559C352.905 137.644 354.556 137.74 356.201 137.845L356.139 138.842C356.796 138.884 357.451 138.927 358.106 138.972L358.174 137.976C359.819 138.088 361.459 138.211 363.093 138.343L363.014 139.338C363.673 139.391 364.332 139.446 364.989 139.502L365.073 138.505C366.721 138.646 368.363 138.798 369.998 138.958L369.901 139.952C370.554 140.016 371.205 140.082 371.855 140.149L371.957 139.155C373.607 139.325 375.249 139.505 376.885 139.694L376.771 140.686C377.426 140.761 378.079 140.838 378.731 140.917L378.851 139.926C380.487 140.123 382.117 140.329 383.739 140.546L383.607 141.537C384.264 141.625 384.92 141.714 385.574 141.805L385.71 140.815C387.35 141.042 388.982 141.28 390.606 141.526L390.457 142.515C391.105 142.613 391.751 142.713 392.396 142.815L392.552 141.828C394.191 142.086 395.821 142.354 397.443 142.631L397.276 143.615C397.926 143.726 398.573 143.839 399.22 143.953L399.393 142.97C401.018 143.257 402.634 143.553 404.241 143.859L404.055 144.84C404.706 144.964 405.355 145.09 406.003 145.217L406.194 144.235C407.819 144.554 409.434 144.883 411.039 145.221L410.834 146.199C411.474 146.334 412.113 146.472 412.75 146.609L412.961 145.632C414.586 145.984 416.2 146.346 417.805 146.718L417.58 147.692C418.221 147.84 418.861 147.99 419.498 148.142L419.729 147.17C421.338 147.553 422.936 147.945 424.523 148.348L424.278 149.316C424.92 149.478 425.56 149.642 426.197 149.808L426.448 148.842C428.047 149.258 429.635 149.684 431.211 150.119L430.946 151.081C431.581 151.256 432.214 151.433 432.845 151.611L433.115 150.651C434.715 151.104 436.302 151.566 437.877 152.039L437.59 152.995C438.218 153.184 438.844 153.374 439.468 153.566L439.76 152.611C441.348 153.1 442.923 153.598 444.484 154.107L444.176 155.056C444.802 155.26 445.427 155.465 446.049 155.672L446.364 154.726C447.933 155.248 449.488 155.781 451.028 156.323L450.697 157.265C451.322 157.485 451.945 157.707 452.565 157.931L452.903 156.991C454.46 157.552 456.001 158.124 457.527 158.705L457.173 159.638C457.788 159.872 458.401 160.109 459.012 160.347L459.374 159.417C460.924 160.021 462.458 160.635 463.976 161.26L463.596 162.184C464.2 162.433 464.802 162.683 465.401 162.936L465.789 162.015C467.325 162.661 468.843 163.318 470.343 163.985L469.938 164.899C470.538 165.166 471.135 165.435 471.729 165.705L472.143 164.796C473.654 165.484 475.147 166.183 476.621 166.893L476.188 167.793C476.783 168.079 477.375 168.368 477.963 168.657L478.403 167.76C479.89 168.492 481.355 169.236 482.801 169.989L482.34 170.875C482.928 171.182 483.512 171.49 484.093 171.8L484.562 170.919C486.021 171.698 487.46 172.487 488.875 173.287L488.384 174.157C488.962 174.484 489.537 174.813 490.107 175.144L490.607 174.278C492.045 175.111 493.458 175.957 494.847 176.812L494.324 177.661C494.884 178.006 495.44 178.352 495.991 178.7L496.523 177.857C497.934 178.746 499.319 179.646 500.676 180.559L500.119 181.389C500.66 181.752 501.196 182.118 501.728 182.484L502.295 181.661C503.672 182.612 505.02 183.575 506.339 184.548L505.746 185.352C506.27 185.738 506.789 186.127 507.304 186.517L507.907 185.721C509.24 186.732 510.541 187.756 511.81 188.79L511.18 189.564C511.685 189.975 512.185 190.389 512.68 190.805L513.321 190.04C514.602 191.116 515.848 192.204 517.059 193.304L516.389 194.042C516.871 194.48 517.348 194.92 517.819 195.361L518.501 194.634C519.721 195.778 520.903 196.934 522.046 198.102L521.334 198.8C521.789 199.265 522.238 199.732 522.681 200.2L523.405 199.515C524.554 200.731 525.661 201.96 526.725 203.2L525.967 203.85C526.389 204.343 526.805 204.838 527.214 205.334L527.985 204.698C529.048 205.99 530.066 207.293 531.036 208.609V208.609L530.231 209.202C530.618 209.726 530.997 210.253 531.368 210.78L532.183 210.206C533.142 211.571 534.05 212.949 534.907 214.338L534.06 214.861C534.403 215.419 534.74 215.977 535.066 216.538L535.927 216.035C536.764 217.471 537.548 218.918 538.273 220.377L537.379 220.822C537.671 221.41 537.954 222 538.228 222.592L539.135 222.172C539.832 223.678 540.469 225.196 541.045 226.726L540.11 227.078C540.34 227.689 540.56 228.301 540.771 228.914L541.715 228.59C542.251 230.157 542.724 231.735 543.132 233.323L542.164 233.571C542.325 234.2 542.476 234.831 542.616 235.463L543.593 235.246V235.245C543.951 236.856 544.24 238.478 544.463 240.109H544.464L543.473 240.245C543.56 240.887 543.637 241.531 543.703 242.176L544.697 242.074C544.864 243.709 544.962 245.354 544.99 247.007L543.992 247.025C543.998 247.349 544 247.675 544 248C544 248.326 543.998 248.651 543.992 248.976L544.99 248.992C544.962 250.645 544.864 252.29 544.697 253.925L543.703 253.824C543.637 254.469 543.56 255.113 543.473 255.755L544.463 255.89C544.24 257.521 543.951 259.143 543.593 260.754L542.616 260.537C542.476 261.169 542.325 261.8 542.164 262.429L543.132 262.676C542.724 264.265 542.251 265.843 541.715 267.409L540.771 267.086C540.56 267.7 540.34 268.312 540.11 268.922L541.045 269.274C540.469 270.803 539.832 272.321 539.135 273.827L538.228 273.408C537.954 274 537.671 274.59 537.379 275.178L538.273 275.622C537.548 277.082 536.764 278.528 535.927 279.964L535.066 279.462C534.74 280.023 534.403 280.582 534.06 281.139L534.907 281.661C534.05 283.05 533.142 284.428 532.183 285.793L531.368 285.22C530.997 285.748 530.618 286.274 530.231 286.798L531.036 287.391C530.066 288.707 529.048 290.01 527.985 291.301L527.214 290.666C526.805 291.163 526.389 291.658 525.967 292.151L526.725 292.799C525.661 294.04 524.554 295.268 523.405 296.484L522.681 295.8C522.238 296.269 521.789 296.735 521.334 297.2L522.046 297.898C520.903 299.066 519.721 300.222 518.501 301.365L517.819 300.639C517.348 301.08 516.871 301.52 516.389 301.958L517.059 302.695C515.848 303.795 514.602 304.884 513.321 305.959L512.68 305.195C512.185 305.611 511.685 306.025 511.18 306.437L511.81 307.209C510.541 308.244 509.24 309.267 507.907 310.278L507.304 309.484C506.789 309.874 506.27 310.262 505.746 310.649L506.339 311.451C505.02 312.425 503.672 313.388 502.295 314.338L501.728 313.516C501.196 313.883 500.66 314.248 500.119 314.611L500.676 315.441C499.319 316.353 497.934 317.253 496.523 318.143L495.991 317.3C495.44 317.648 494.884 317.995 494.324 318.339L494.847 319.188C493.458 320.043 492.045 320.888 490.607 321.721L490.107 320.857C489.537 321.187 488.962 321.516 488.384 321.843L488.875 322.712C487.46 323.513 486.021 324.301 484.562 325.08L484.093 324.2C483.512 324.51 482.928 324.819 482.34 325.125L482.801 326.01C481.355 326.763 479.89 327.507 478.403 328.239L477.963 327.343C477.375 327.633 476.783 327.921 476.188 328.207L476.621 329.107C475.147 329.816 473.654 330.515 472.143 331.203L471.729 330.295C471.135 330.566 470.538 330.835 469.938 331.102L470.343 332.014C468.843 332.681 467.325 333.338 465.789 333.984L465.401 333.065C464.802 333.317 464.2 333.568 463.596 333.817L463.976 334.739C462.458 335.364 460.924 335.978 459.374 336.582L459.012 335.653C458.401 335.891 457.788 336.128 457.173 336.362L457.527 337.294C456.001 337.876 454.46 338.447 452.903 339.008L452.565 338.069C451.945 338.293 451.322 338.515 450.697 338.735L451.028 339.676C449.488 340.219 447.933 340.751 446.364 341.274L446.049 340.328C445.427 340.535 444.802 340.74 444.176 340.944L444.484 341.893C442.923 342.401 441.348 342.9 439.76 343.388L439.468 342.435C438.844 342.626 438.218 342.817 437.59 343.005L437.877 343.96C436.302 344.433 434.715 344.895 433.115 345.348L432.844 344.389C432.213 344.567 431.581 344.744 430.946 344.919L431.211 345.88C429.635 346.315 428.047 346.742 426.448 347.157L426.197 346.193C425.56 346.358 424.92 346.522 424.278 346.685L424.523 347.651C422.936 348.054 421.338 348.447 419.729 348.829L419.498 347.859C418.861 348.01 418.221 348.16 417.58 348.309L417.805 349.281C416.2 349.653 414.586 350.015 412.961 350.367L412.75 349.391C412.113 349.529 411.474 349.666 410.834 349.801L411.039 350.778C409.434 351.117 407.819 351.445 406.194 351.764L406.003 350.783C405.355 350.91 404.706 351.036 404.055 351.16L404.241 352.14C402.634 352.446 401.018 352.743 399.393 353.029L399.22 352.047C398.573 352.161 397.926 352.274 397.276 352.385L397.443 353.368C395.821 353.646 394.191 353.913 392.552 354.171L392.396 353.186C391.751 353.287 391.105 353.387 390.457 353.485L390.606 354.473C388.982 354.72 387.35 354.957 385.71 355.185L385.574 354.195C384.92 354.286 384.264 354.375 383.607 354.463L383.739 355.453C382.117 355.67 380.487 355.876 378.851 356.073L378.731 355.083C378.079 355.162 377.426 355.239 376.771 355.315L376.885 356.305C375.249 356.494 373.607 356.674 371.957 356.844L371.855 355.852C371.205 355.919 370.554 355.984 369.901 356.048L369.998 357.041C368.363 357.201 366.721 357.353 365.073 357.494L364.989 356.498C364.332 356.554 363.673 356.609 363.014 356.662L363.093 357.656C361.459 357.788 359.819 357.911 358.174 358.024L358.106 357.028C357.451 357.073 356.796 357.117 356.139 357.158L356.201 358.154C354.556 358.259 352.905 358.355 351.248 358.441L351.197 357.443C350.545 357.477 349.891 357.509 349.236 357.54L349.282 358.537C347.642 358.614 345.996 358.681 344.346 358.738L344.312 357.741C343.654 357.764 342.994 357.786 342.334 357.806L342.363 358.803C340.722 358.853 339.075 358.894 337.424 358.925L337.406 357.927C336.75 357.939 336.094 357.95 335.437 357.959L335.449 358.957C333.802 358.98 332.15 358.992 330.493 358.996L330.492 357.999C330.162 358 329.831 358 329.5 358C329.169 358 328.838 358 328.508 357.999L328.506 358.996C326.849 358.992 325.197 358.98 323.55 358.957L323.563 357.959C322.906 357.95 322.25 357.939 321.594 357.927L321.575 358.925C319.924 358.894 318.277 358.853 316.636 358.803L316.666 357.806C316.006 357.786 315.346 357.764 314.688 357.741L314.652 358.738C313.002 358.681 311.357 358.614 309.717 358.537L309.763 357.54C309.108 357.509 308.454 357.477 307.802 357.443L307.751 358.441C306.094 358.355 304.443 358.259 302.798 358.154L302.861 357.158C302.204 357.117 301.549 357.073 300.894 357.028L300.825 358.024C299.18 357.911 297.54 357.788 295.906 357.656L295.986 356.662C295.327 356.609 294.668 356.554 294.011 356.498L293.926 357.494C292.278 357.353 290.636 357.201 289.001 357.041L289.098 356.048C288.445 355.984 287.794 355.919 287.144 355.852L287.042 356.844C285.392 356.674 283.75 356.494 282.114 356.305L282.229 355.315C281.574 355.239 280.921 355.162 280.269 355.083L280.148 356.073C278.512 355.876 276.882 355.67 275.26 355.453L275.393 354.463C274.736 354.375 274.08 354.286 273.426 354.195L273.289 355.185C271.649 354.957 270.017 354.72 268.393 354.473L268.543 353.485C267.895 353.387 267.249 353.287 266.604 353.186L266.447 354.171C264.808 353.913 263.178 353.646 261.556 353.368L261.724 352.385C261.074 352.274 260.427 352.161 259.78 352.047L259.606 353.029C257.981 352.743 256.365 352.446 254.758 352.14L254.945 351.16C254.294 351.036 253.645 350.91 252.997 350.783L252.805 351.764C251.18 351.445 249.565 351.117 247.96 350.778L248.166 349.801C247.526 349.666 246.887 349.529 246.25 349.391L246.038 350.367C244.413 350.015 242.798 349.653 241.193 349.281L241.42 348.309C240.779 348.16 240.139 348.01 239.502 347.859L239.271 348.829C237.661 348.447 236.063 348.054 234.476 347.651L234.722 346.685C234.08 346.522 233.44 346.358 232.803 346.193L232.551 347.157C230.951 346.742 229.363 346.315 227.787 345.88L228.054 344.919C227.419 344.744 226.786 344.567 226.155 344.389L225.884 345.348C224.284 344.895 222.697 344.433 221.122 343.96L221.41 343.005C220.782 342.817 220.156 342.626 219.532 342.435L219.239 343.388C217.651 342.9 216.076 342.401 214.515 341.893L214.824 340.944C214.198 340.74 213.573 340.535 212.951 340.328L212.635 341.274C211.066 340.751 209.511 340.219 207.971 339.676L208.303 338.735C207.678 338.515 207.055 338.293 206.435 338.069L206.096 339.008C204.539 338.447 202.998 337.876 201.472 337.294L201.827 336.362C201.212 336.128 200.599 335.891 199.988 335.653L199.625 336.582C198.075 335.978 196.541 335.364 195.023 334.739L195.404 333.817C194.8 333.568 194.198 333.317 193.599 333.065L193.21 333.984C191.674 333.338 190.156 332.681 188.656 332.014L189.062 331.102C188.462 330.834 187.865 330.566 187.271 330.295L186.856 331.203C185.345 330.515 183.852 329.816 182.378 329.107L182.812 328.207C182.217 327.921 181.625 327.633 181.037 327.343L180.596 328.239C179.109 327.507 177.644 326.763 176.198 326.01L176.66 325.125C176.072 324.819 175.488 324.51 174.907 324.2L174.438 325.08C172.978 324.301 171.539 323.513 170.124 322.712L170.616 321.843C170.038 321.516 169.463 321.187 168.893 320.857L168.392 321.721C166.954 320.888 165.541 320.043 164.152 319.188L164.676 318.339C164.116 317.995 163.56 317.648 163.009 317.3L162.476 318.143C161.065 317.253 159.68 316.353 158.323 315.441L158.881 314.611C158.34 314.248 157.804 313.883 157.272 313.516L156.704 314.338C155.327 313.388 153.979 312.425 152.66 311.451L153.254 310.649C152.73 310.262 152.211 309.874 151.696 309.484L151.092 310.278C149.759 309.267 148.458 308.244 147.189 307.209L147.82 306.437C147.315 306.025 146.815 305.611 146.32 305.195L145.678 305.959C144.397 304.884 143.151 303.795 141.94 302.695L142.611 301.958C142.129 301.52 141.652 301.08 141.181 300.639L140.498 301.365C139.278 300.222 138.096 299.066 136.953 297.898L137.666 297.2C137.211 296.735 136.762 296.269 136.319 295.8L135.594 296.484C134.445 295.268 133.338 294.04 132.274 292.799L133.033 292.151C132.611 291.658 132.195 291.163 131.786 290.666L131.014 291.301C129.951 290.01 128.933 288.706 127.963 287.391L128.769 286.798C128.382 286.274 128.003 285.748 127.632 285.22L126.816 285.793C125.857 284.428 124.949 283.05 124.092 281.661L124.94 281.139C124.597 280.582 124.26 280.023 123.934 279.462L123.072 279.964C122.235 278.528 121.451 277.082 120.726 275.622L121.621 275.178C121.329 274.59 121.046 274 120.772 273.408L119.864 273.827C119.167 272.321 118.53 270.803 117.954 269.274L118.89 268.922C118.66 268.312 118.44 267.7 118.229 267.086L117.284 267.409C116.748 265.843 116.275 264.265 115.867 262.676L116.836 262.429C116.675 261.8 116.524 261.169 116.384 260.537L115.406 260.754C115.048 259.143 114.759 257.521 114.536 255.89L115.527 255.755C115.44 255.113 115.363 254.469 115.297 253.824L114.302 253.925C114.135 252.29 114.037 250.645 114.009 248.992L115.008 248.976C115.002 248.651 115 248.326 115 248C115 247.675 115.002 247.349 115.008 247.025L114.009 247.007C114.037 245.354 114.135 243.709 114.302 242.074L115.297 242.176C115.363 241.531 115.44 240.887 115.527 240.245L114.536 240.109C114.759 238.478 115.048 236.856 115.406 235.245L115.407 235.246L116.384 235.463C116.524 234.831 116.675 234.2 116.836 233.571L115.867 233.323C116.275 231.735 116.748 230.157 117.284 228.59L118.229 228.914C118.44 228.301 118.66 227.689 118.89 227.078L117.954 226.726C118.53 225.196 119.167 223.678 119.864 222.172L120.772 222.592C121.046 222 121.329 221.41 121.621 220.822L120.726 220.377C121.451 218.918 122.235 217.471 123.072 216.035L123.934 216.538C124.26 215.977 124.597 215.419 124.94 214.861L124.092 214.338C124.949 212.949 125.857 211.571 126.816 210.206L127.632 210.78C128.003 210.253 128.382 209.726 128.769 209.202L127.964 208.609L127.963 208.609C128.933 207.293 129.951 205.99 131.014 204.698L131.786 205.334C132.195 204.838 132.611 204.343 133.033 203.85L132.274 203.2C133.338 201.96 134.445 200.731 135.594 199.515L136.319 200.2C136.762 199.732 137.211 199.265 137.666 198.8L136.953 198.102C138.096 196.934 139.278 195.778 140.498 194.634L141.181 195.361C141.652 194.92 142.129 194.48 142.611 194.042L141.94 193.304C143.151 192.204 144.397 191.116 145.678 190.04L146.32 190.805C146.815 190.389 147.315 189.975 147.82 189.564L147.189 188.79C148.458 187.756 149.759 186.732 151.092 185.721L151.696 186.517C152.211 186.127 152.73 185.738 153.254 185.352L152.66 184.548C153.979 183.575 155.327 182.612 156.704 181.661L157.272 182.484C157.804 182.118 158.34 181.752 158.881 181.389L158.323 180.559C159.68 179.646 161.065 178.746 162.476 177.857L163.009 178.7C163.56 178.352 164.116 178.006 164.676 177.661L164.152 176.812C165.541 175.957 166.954 175.111 168.392 174.278L168.893 175.144C169.463 174.813 170.038 174.484 170.616 174.157L170.124 173.287C171.539 172.487 172.978 171.698 174.438 170.919L174.907 171.8C175.488 171.49 176.072 171.182 176.66 170.875L176.198 169.989C177.644 169.236 179.109 168.492 180.596 167.76L181.037 168.657C181.625 168.368 182.217 168.079 182.812 167.793L182.378 166.893C183.852 166.183 185.345 165.484 186.856 164.796L187.271 165.705C187.865 165.435 188.462 165.166 189.062 164.899L188.656 163.985C190.156 163.318 191.674 162.661 193.21 162.015L193.599 162.936C194.198 162.683 194.8 162.433 195.404 162.184L195.023 161.26C196.541 160.635 198.075 160.021 199.625 159.417L199.988 160.347C200.599 160.109 201.212 159.872 201.827 159.638L201.472 158.705C202.998 158.124 204.539 157.552 206.096 156.991L206.435 157.931C207.055 157.707 207.678 157.485 208.303 157.265L207.971 156.323C209.511 155.781 211.066 155.248 212.635 154.726L212.951 155.672C213.573 155.465 214.198 155.26 214.824 155.056L214.515 154.107C216.076 153.598 217.651 153.1 219.239 152.611L219.532 153.566C220.156 153.374 220.782 153.184 221.41 152.995L221.122 152.039C222.697 151.566 224.284 151.104 225.884 150.651L226.156 151.611C226.787 151.433 227.419 151.256 228.054 151.081L227.788 150.119C229.364 149.684 230.952 149.258 232.551 148.842L232.803 149.808C233.44 149.642 234.08 149.478 234.722 149.316L234.476 148.348C236.063 147.945 237.661 147.553 239.271 147.17L239.502 148.142C240.139 147.99 240.779 147.84 241.42 147.692L241.194 146.718C242.799 146.346 244.413 145.984 246.038 145.632L246.25 146.609C246.887 146.472 247.526 146.334 248.166 146.199L247.96 145.221C249.565 144.883 251.18 144.554 252.805 144.235L252.997 145.217C253.645 145.09 254.294 144.964 254.945 144.84L254.758 143.859C256.365 143.553 257.981 143.257 259.606 142.97L259.78 143.953C260.427 143.839 261.074 143.726 261.724 143.615L261.556 142.631C263.178 142.354 264.808 142.086 266.447 141.828L266.604 142.815C267.249 142.713 267.895 142.613 268.543 142.515L268.393 141.526C270.017 141.28 271.649 141.042 273.289 140.815L273.426 141.805C274.08 141.714 274.736 141.625 275.393 141.537L275.26 140.546C276.882 140.329 278.512 140.123 280.148 139.926L280.269 140.917C280.921 140.838 281.574 140.761 282.229 140.686L282.114 139.694C283.75 139.505 285.393 139.325 287.042 139.155L287.145 140.149C287.795 140.082 288.446 140.016 289.099 139.952L289.001 138.958C290.636 138.798 292.278 138.646 293.926 138.505L294.011 139.502C294.668 139.446 295.327 139.391 295.986 139.338L295.906 138.343C297.54 138.211 299.18 138.088 300.825 137.976L300.894 138.972C301.549 138.927 302.204 138.884 302.861 138.842L302.798 137.845C304.443 137.74 306.094 137.644 307.751 137.559L307.803 138.557C308.455 138.523 309.109 138.491 309.764 138.46L309.717 137.462C311.357 137.385 313.003 137.319 314.653 137.261L314.688 138.259C315.346 138.236 316.006 138.214 316.666 138.194L316.636 137.196C318.277 137.147 319.924 137.105 321.575 137.074L321.594 138.073C322.25 138.061 322.906 138.05 323.563 138.041L323.55 137.042C325.197 137.019 326.849 137.007 328.506 137.003L328.508 138.001C328.838 138 329.169 138 329.5 138C329.831 138 330.162 138 330.492 138.001L330.493 137.003Z",stroke:"#1ECA53",strokeWidth:"2",strokeDasharray:"2 5",strokeLinecap:"round",children:u.jsx("animate",{attributeName:"stroke-dashoffset",from:0,to:-70,dur:"2000ms",repeatCount:"indefinite"})}),Y=u.jsx("ellipse",{cx:"329.5",cy:"248",rx:"163.5",ry:"84",fill:"url(#paint18_linear_1_3)"}),k=u.jsx("rect",{x:"292",y:"100",width:"76",height:"171",fill:"url(#paint19_linear_1_3)"}),z=u.jsx("ellipse",{opacity:"0.2",cx:"330",cy:"274",rx:"38",ry:"24",fill:"#1ECA53"}),L=u.jsx("ellipse",{cx:"330",cy:"268",rx:"38",ry:"24",fill:"#1ECA53"}),t[26]=D,t[27]=Y,t[28]=k,t[29]=z,t[30]=L):(D=t[26],Y=t[27],k=t[28],z=t[29],L=t[30]);let P,H,U,q,ee,te,xe,ue,X,J,re,le,Me,ye,_e;t[31]===Symbol.for("react.memo_cache_sentinel")?(P=u.jsx("path",{d:"M331.072 242.01C332.884 242.041 334.665 242.152 336.409 242.334L336.306 243.326C337.008 243.4 337.705 243.486 338.395 243.583L338.533 242.595C340.332 242.849 342.086 243.181 343.785 243.586L343.555 244.559C344.242 244.723 344.921 244.898 345.589 245.086L345.858 244.125C347.615 244.619 349.307 245.191 350.923 245.837L350.553 246.766C351.209 247.028 351.852 247.301 352.48 247.587L352.893 246.678C354.564 247.437 356.141 248.277 357.612 249.19H357.613L357.086 250.039C357.683 250.41 358.262 250.792 358.821 251.186L359.395 250.369C360.904 251.432 362.278 252.576 363.5 253.791L362.798 254.499C363.292 254.991 363.76 255.494 364.2 256.007L364.957 255.357C366.156 256.755 367.163 258.231 367.954 259.773L367.066 260.229C367.378 260.837 367.654 261.455 367.893 262.081L368.824 261.726C369.464 263.402 369.853 265.142 369.964 266.93L368.969 266.992C368.99 267.327 369 267.662 369 268C369 268.338 368.99 268.674 368.969 269.008L369.964 269.069C369.853 270.857 369.463 272.597 368.824 274.274L367.893 273.919C367.654 274.545 367.378 275.163 367.066 275.772L367.954 276.227C367.164 277.768 366.156 279.245 364.957 280.643L364.2 279.993C363.76 280.506 363.292 281.009 362.798 281.501L363.5 282.208C362.278 283.423 360.904 284.568 359.395 285.63L358.821 284.815C358.262 285.208 357.683 285.59 357.086 285.961L357.612 286.81C356.141 287.722 354.564 288.562 352.893 289.321L352.48 288.413C351.852 288.699 351.209 288.972 350.553 289.234L350.923 290.162C349.307 290.808 347.615 291.38 345.858 291.874L345.589 290.914C344.921 291.102 344.242 291.277 343.555 291.442L343.785 292.413C342.086 292.819 340.332 293.15 338.533 293.404L338.395 292.417C337.705 292.515 337.008 292.6 336.306 292.674L336.409 293.665C334.665 293.848 332.884 293.958 331.072 293.989L331.056 292.991C330.705 292.997 330.353 293 330 293C329.647 293 329.295 292.997 328.944 292.991L328.927 293.989C327.115 293.958 325.334 293.848 323.59 293.665L323.694 292.674C322.992 292.6 322.295 292.515 321.605 292.417L321.466 293.404C319.667 293.15 317.913 292.819 316.214 292.413L316.445 291.442C315.758 291.277 315.079 291.102 314.411 290.914L314.141 291.874C312.384 291.38 310.692 290.808 309.076 290.162L309.447 289.234C308.791 288.972 308.148 288.699 307.52 288.413L307.106 289.321C305.435 288.562 303.858 287.722 302.387 286.81L302.914 285.961C302.317 285.59 301.738 285.208 301.179 284.815L300.604 285.63C299.095 284.567 297.721 283.423 296.499 282.208L297.202 281.501C296.708 281.009 296.24 280.506 295.8 279.993L295.042 280.643C293.843 279.245 292.835 277.768 292.045 276.227L292.934 275.772C292.622 275.163 292.346 274.545 292.107 273.919L291.175 274.274C290.536 272.597 290.146 270.857 290.035 269.069L291.031 269.008C291.01 268.674 291 268.338 291 268C291 267.662 291.01 267.327 291.031 266.992L290.035 266.93C290.147 265.143 290.536 263.402 291.175 261.726L292.107 262.081C292.346 261.455 292.622 260.837 292.934 260.229L292.045 259.773C292.835 258.231 293.843 256.754 295.042 255.357L295.8 256.007C296.24 255.494 296.708 254.991 297.202 254.499L296.499 253.791C297.721 252.576 299.095 251.432 300.604 250.369L301.179 251.186C301.738 250.792 302.317 250.41 302.914 250.039L302.387 249.19C303.858 248.277 305.435 247.437 307.106 246.678L307.52 247.587C308.148 247.301 308.791 247.028 309.447 246.766L309.076 245.837C310.692 245.191 312.384 244.619 314.141 244.125L314.411 245.086C315.079 244.898 315.758 244.723 316.445 244.559L316.214 243.586C317.913 243.18 319.667 242.849 321.466 242.595L321.605 243.583C322.295 243.486 322.992 243.4 323.694 243.326L323.59 242.334C325.334 242.152 327.115 242.041 328.927 242.01L328.944 243.009C329.295 243.003 329.647 243 330 243C330.353 243 330.705 243.003 331.056 243.009L331.072 242.01Z",stroke:"#1ECA53",strokeWidth:"2",strokeDasharray:"2 5",strokeLinecap:"round",children:u.jsx("animate",{attributeName:"stroke-dashoffset",from:0,to:-70,dur:"2000ms",repeatCount:"indefinite"})}),H=u.jsx("path",{d:"M330 220.5C340.414 220.5 349.818 223.167 356.604 227.452C363.395 231.742 367.5 237.605 367.5 244C367.5 250.395 363.395 256.259 356.604 260.548C349.818 264.833 340.414 267.5 330 267.5C319.586 267.5 310.182 264.833 303.396 260.548C296.605 256.259 292.5 250.395 292.5 244C292.5 237.605 296.605 231.742 303.396 227.452C310.182 223.167 319.586 220.5 330 220.5Z",stroke:"#1ECA53"}),U=u.jsx("path",{opacity:"0.2",d:"M437.5 242C437.5 241.724 437.276 241.5 437 241.5C436.724 241.5 436.5 241.724 436.5 242H437H437.5ZM379.646 274.647C379.451 274.842 379.451 275.158 379.646 275.354L382.828 278.536C383.024 278.731 383.34 278.731 383.536 278.536C383.731 278.34 383.731 278.024 383.536 277.829L380.707 275L383.536 272.172C383.731 271.976 383.731 271.66 383.536 271.465C383.34 271.269 383.024 271.269 382.828 271.465L379.646 274.647ZM437 242H436.5C436.5 250.859 430.294 258.974 420.055 264.902C409.828 270.822 395.668 274.5 380 274.5V275V275.5C395.812 275.5 410.152 271.791 420.556 265.767C430.947 259.752 437.5 251.366 437.5 242H437Z",fill:"#1ECA53"}),q=u.jsx("path",{opacity:"0.2",d:"M380 201.5C379.724 201.5 379.5 201.724 379.5 202C379.5 202.276 379.724 202.5 380 202.5V202V201.5ZM436.646 235.354C436.842 235.549 437.158 235.549 437.354 235.354L440.536 232.172C440.731 231.976 440.731 231.66 440.536 231.465C440.34 231.269 440.024 231.269 439.828 231.465L437 234.293L434.172 231.465C433.976 231.269 433.66 231.269 433.464 231.465C433.269 231.66 433.269 231.976 433.464 232.172L436.646 235.354ZM380 202V202.5C395.668 202.5 409.828 206.178 420.055 212.098C430.294 218.026 436.5 226.141 436.5 235H437H437.5C437.5 225.634 430.947 217.249 420.556 211.233C410.152 205.21 395.812 201.5 380 201.5V202Z",fill:"#1ECA53"}),ee=u.jsx("path",{opacity:"0.2",d:"M226.646 241.647C226.842 241.451 227.158 241.451 227.354 241.647L230.536 244.829C230.731 245.024 230.731 245.34 230.536 245.536C230.34 245.731 230.024 245.731 229.828 245.536L227 242.707L224.172 245.536C223.976 245.731 223.66 245.731 223.464 245.536C223.269 245.34 223.269 245.024 223.464 244.829L226.646 241.647ZM284 274.5C284.276 274.5 284.5 274.724 284.5 275C284.5 275.276 284.276 275.5 284 275.5V275V274.5ZM227 242H227.5C227.5 250.859 233.706 258.974 243.945 264.902C254.172 270.822 268.332 274.5 284 274.5V275V275.5C268.188 275.5 253.848 271.791 243.444 265.767C233.053 259.752 226.5 251.366 226.5 242H227Z",fill:"#1ECA53"}),te=u.jsx("path",{opacity:"0.2",d:"M284.354 201.647C284.549 201.842 284.549 202.158 284.354 202.354L281.172 205.536C280.976 205.731 280.66 205.731 280.464 205.536C280.269 205.34 280.269 205.024 280.464 204.829L283.293 202L280.464 199.172C280.269 198.976 280.269 198.66 280.464 198.465C280.66 198.269 280.976 198.269 281.172 198.465L284.354 201.647ZM227.5 235C227.5 235.276 227.276 235.5 227 235.5C226.724 235.5 226.5 235.276 226.5 235H227H227.5ZM284 202V202.5C268.332 202.5 254.172 206.178 243.945 212.098C233.706 218.026 227.5 226.141 227.5 235H227H226.5C226.5 225.634 233.053 217.249 243.444 211.233C253.848 205.21 268.188 201.5 284 201.5V202Z",fill:"#1ECA53"}),xe=u.jsx("path",{d:"M330 190.5C340.414 190.5 349.818 193.167 356.604 197.452C363.395 201.742 367.5 207.605 367.5 214C367.5 220.395 363.395 226.259 356.604 230.548C349.818 234.833 340.414 237.5 330 237.5C319.586 237.5 310.182 234.833 303.396 230.548C296.605 226.259 292.5 220.395 292.5 214C292.5 207.605 296.605 201.742 303.396 197.452C310.182 193.167 319.586 190.5 330 190.5Z",stroke:"#155128"}),ue=u.jsx("path",{d:"M330 160.5C340.414 160.5 349.818 163.167 356.604 167.452C363.395 171.742 367.5 177.605 367.5 184C367.5 190.395 363.395 196.259 356.604 200.548C349.818 204.833 340.414 207.5 330 207.5C319.586 207.5 310.182 204.833 303.396 200.548C296.605 196.259 292.5 190.395 292.5 184C292.5 177.605 296.605 171.742 303.396 167.452C310.182 163.167 319.586 160.5 330 160.5Z",stroke:"#14341E"}),X=u.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 -50;0 80;0 -50",dur:"3000ms",repeatCount:"indefinite"}),J=u.jsx("path",{d:"M313.992 161.537C314.126 161.604 314.326 161.737 314.46 161.804C314.46 161.804 314.526 161.804 314.526 161.871C314.593 161.871 314.66 161.938 314.727 161.938C314.793 161.938 314.927 162.005 314.994 162.005C315.06 162.005 315.194 162.072 315.261 162.072C315.327 162.072 315.394 162.072 315.461 162.138H315.528C315.728 162.205 315.928 162.205 316.128 162.205C316.128 162.205 316.128 162.205 316.195 162.205C316.262 162.205 316.262 162.205 316.328 162.205C316.462 162.205 316.662 162.205 316.796 162.205C316.862 162.205 316.929 162.205 316.929 162.205C316.996 162.205 317.129 162.205 317.196 162.205C317.263 162.205 317.396 162.205 317.463 162.205C317.53 162.205 317.597 162.138 317.73 162.138C317.864 162.138 317.997 162.072 318.131 162.072C318.197 162.072 318.264 162.072 318.331 162.005C318.464 161.938 318.665 161.938 318.798 161.871H318.865C319.065 161.804 319.265 161.737 319.466 161.671C319.532 161.671 319.599 161.604 319.732 161.537C319.799 161.47 319.866 161.47 319.933 161.403C320.2 161.27 320.533 161.136 320.867 160.936L379.536 127.065C379.87 126.865 380.137 126.664 380.471 126.464C380.538 126.397 380.671 126.33 380.738 126.263C380.938 126.13 381.138 125.929 381.339 125.796C381.472 125.729 381.539 125.595 381.672 125.529C381.873 125.395 382.073 125.195 382.206 125.061C382.34 124.927 382.407 124.861 382.54 124.727C382.607 124.66 382.674 124.593 382.74 124.526C382.807 124.46 382.874 124.393 382.94 124.326C383.141 124.126 383.408 123.858 383.608 123.658C383.675 123.591 383.741 123.524 383.808 123.458C383.875 123.391 383.942 123.324 384.008 123.257C384.142 123.124 384.275 122.923 384.409 122.79C384.476 122.656 384.609 122.589 384.676 122.456C384.743 122.389 384.809 122.255 384.876 122.188C384.943 122.055 385.076 121.921 385.143 121.787C385.21 121.721 385.277 121.587 385.343 121.52C385.477 121.387 385.544 121.253 385.677 121.053C385.744 120.986 385.811 120.852 385.877 120.785C385.877 120.719 385.944 120.719 385.944 120.652C386.144 120.385 386.278 120.117 386.478 119.783V119.716C386.478 119.65 386.545 119.583 386.545 119.516C386.678 119.316 386.745 119.115 386.878 118.915C386.945 118.848 386.945 118.714 387.012 118.648C387.079 118.581 387.145 118.447 387.145 118.38C387.212 118.314 387.212 118.18 387.279 118.113C387.412 117.913 387.479 117.645 387.613 117.445C387.613 117.378 387.679 117.378 387.679 117.311C387.679 117.311 387.679 117.311 387.679 117.245C387.813 116.977 387.946 116.643 388.013 116.376C388.013 116.309 388.08 116.243 388.08 116.243C388.147 116.109 388.147 116.042 388.213 115.909C388.28 115.775 388.347 115.641 388.347 115.441C388.414 115.307 388.414 115.24 388.48 115.107C388.547 114.973 388.547 114.84 388.614 114.706C388.614 114.639 388.681 114.506 388.681 114.439C388.747 114.305 388.747 114.172 388.814 113.971C388.881 113.771 388.881 113.637 388.948 113.437C388.948 113.37 388.948 113.303 389.014 113.236C389.014 113.103 389.081 112.969 389.081 112.902C389.148 112.635 389.148 112.368 389.215 112.101C389.215 112.034 389.215 111.967 389.281 111.9C389.281 111.767 389.281 111.566 389.348 111.433C389.348 111.299 389.348 111.232 389.415 111.098C389.415 110.764 389.482 110.364 389.482 110.03L389.348 52.71L348.9 29.1942L349.034 86.5138C349.034 86.8479 349.034 87.2487 348.967 87.5827C348.967 87.7163 348.967 87.7831 348.9 87.9168C348.9 88.184 348.834 88.3844 348.834 88.6516C348.767 88.9188 348.767 89.1861 348.7 89.4533C348.633 89.6537 348.633 89.7873 348.567 89.9877C348.5 90.1882 348.5 90.3218 348.433 90.5222C348.366 90.7894 348.3 90.9898 348.233 91.2571C348.166 91.3907 348.166 91.5243 348.099 91.6579C348.033 91.9251 347.899 92.1923 347.832 92.4596C347.766 92.5932 347.766 92.66 347.699 92.7936C347.565 93.1276 347.432 93.5285 347.232 93.8625C347.232 93.9293 347.165 93.9293 347.165 93.9961C347.031 94.3301 346.898 94.5974 346.698 94.9314C346.631 94.9982 346.631 95.1318 346.564 95.1986C346.431 95.4658 346.23 95.7999 346.097 96.0671C346.097 96.1339 346.03 96.2007 346.03 96.2675C345.83 96.6016 345.63 96.9356 345.43 97.2696C345.363 97.3364 345.296 97.47 345.229 97.5368C345.096 97.8041 344.896 98.0045 344.762 98.2717C344.695 98.4053 344.562 98.5389 344.495 98.6725C344.362 98.873 344.228 99.0734 344.028 99.2738C343.894 99.4074 343.761 99.6078 343.627 99.7414C343.494 99.875 343.36 100.009 343.227 100.142C343.027 100.409 342.826 100.61 342.559 100.81C342.426 100.944 342.292 101.078 342.159 101.211C342.025 101.345 341.959 101.412 341.825 101.545C341.625 101.746 341.425 101.879 341.291 102.013C341.158 102.08 341.091 102.213 340.958 102.28C340.757 102.414 340.557 102.614 340.357 102.748C340.29 102.815 340.157 102.881 340.09 102.948C339.756 103.149 339.489 103.349 339.155 103.549L280.486 137.42C280.152 137.62 279.885 137.754 279.552 137.888C279.485 137.955 279.418 137.955 279.351 138.021",fill:"#00531A"}),re=u.jsx("path",{d:"M312.457 152.919L312.257 97.5366L271.809 74.0209L271.943 129.403C271.943 132.075 272.81 134.08 274.145 135.215C274.346 135.349 274.546 135.549 274.746 135.616L315.194 159.132C313.525 158.13 312.457 155.925 312.457 152.919Z",fill:"url(#paint20_linear_1_3)"}),le=u.jsx("path",{d:"M312.257 97.5369L271.809 73.9543L346.965 30.5304L387.479 54.0461L312.257 97.5369Z",fill:"url(#paint21_linear_1_3)"}),Me=u.jsx("path",{d:"M387.479 54.046L387.613 109.428C387.613 115.574 383.274 123.123 377.935 126.197L322.202 158.397C316.862 161.47 312.457 158.998 312.457 152.852L312.257 97.5368L387.479 54.046Z",fill:"url(#paint22_linear_1_3)"}),ye=u.jsx("path",{d:"M387.479 54.046L387.613 109.428C387.613 115.574 383.274 123.123 377.935 126.197L322.202 158.397C316.862 161.47 312.457 158.998 312.457 152.852L312.257 97.5368L387.479 54.046Z",fill:"url(#paint23_linear_1_3)"}),_e=u.jsx("path",{d:"M313.457 152.849L313.259 98.1124L386.484 55.7755L386.613 109.431C386.612 112.286 385.597 115.537 383.909 118.465C382.221 121.394 379.916 123.903 377.436 125.33L377.435 125.331L321.703 157.53C319.217 158.961 317.175 158.979 315.821 158.212C314.471 157.448 313.457 155.706 313.457 152.853V152.849Z",stroke:"url(#paint24_linear_1_3)","stroke-width":"2"}),t[31]=P,t[32]=H,t[33]=U,t[34]=q,t[35]=ee,t[36]=te,t[37]=xe,t[38]=ue,t[39]=X,t[40]=J,t[41]=re,t[42]=le,t[43]=Me,t[44]=ye,t[45]=_e):(P=t[31],H=t[32],U=t[33],q=t[34],ee=t[35],te=t[36],xe=t[37],ue=t[38],X=t[39],J=t[40],re=t[41],le=t[42],Me=t[43],ye=t[44],_e=t[45]);let We,R,Ye,Ne,ze;t[46]===Symbol.for("react.memo_cache_sentinel")?(We=u.jsx("foreignObject",{x:"243.334",y:"56.896",width:"87.2535",height:"133.123",children:u.jsx("div",{style:{backdropFilter:"blur(10px)",clipPath:"url(#bgblur_0_1_3_clip_path)",height:"100%",width:"100%"}})}),R=u.jsx("path",{"data-figma-bg-blur-radius":"21",d:"M304.915 158.731L304.782 101.479L264.334 77.896L264.467 135.149C264.467 140.226 266.269 143.767 269.139 145.437L309.587 169.019C306.717 167.349 304.982 163.742 304.915 158.731Z",fill:"#C6FBD0","fill-opacity":"0.32"}),Ye=u.jsx("path",{d:"M304.782 101.412L264.334 77.8958L270.474 74.5555L310.922 98.1381L304.782 101.412Z",fill:"#ABFFB7"}),Ne=u.jsx("path",{d:"M389.348 52.5761L348.834 29.0604L354.974 25.5197L395.422 49.0354L389.348 52.5761Z",fill:"#ABFFB7"}),ze=u.jsx("path",{d:"M389.482 109.896L389.348 52.5765L395.489 49.0358L395.622 106.289C395.622 116.443 388.48 128.869 379.67 133.946L321.001 167.817C312.19 172.894 304.982 168.819 304.915 158.665L304.782 101.412L310.922 98.0714L311.056 155.124C311.056 161.404 315.528 163.875 320.934 160.736L379.603 126.865C385.076 123.792 389.482 116.109 389.482 109.896Z",fill:"url(#paint25_linear_1_3)"}),t[46]=We,t[47]=R,t[48]=Ye,t[49]=Ne,t[50]=ze):(We=t[46],R=t[47],Ye=t[48],Ne=t[49],ze=t[50]);let ge,Ke;t[51]===Symbol.for("react.memo_cache_sentinel")?(ge=u.jsx("foreignObject",{x:"244",y:"-20",width:"167.35",height:"139.675",children:u.jsx("div",{style:{backdropFilter:"blur(10px)",clipPath:"url(#bgblur_1_1_3_clip_path)",height:"100%",width:"100%"}})}),Ke=u.jsx("path",{"data-figma-bg-blur-radius":"20",d:"M383.741 24.7182C383.942 24.6514 384.142 24.5178 384.342 24.451C384.409 24.451 384.476 24.3842 384.542 24.3842C384.743 24.3174 384.876 24.2506 385.076 24.1838C385.143 24.1838 385.143 24.117 385.21 24.117C385.41 24.0502 385.677 23.9834 385.877 23.9166H385.944C386.278 23.8498 386.612 23.783 386.945 23.7162C387.212 23.6494 387.479 23.6494 387.746 23.6494C387.813 23.6494 387.88 23.6494 387.88 23.6494C388.147 23.6494 388.347 23.6494 388.614 23.6494C388.681 23.6494 388.681 23.6494 388.747 23.6494C388.948 23.6494 389.148 23.7162 389.281 23.7162C389.348 23.7162 389.415 23.7162 389.482 23.7162C389.682 23.783 389.882 23.783 390.082 23.8498C390.283 23.9166 390.483 23.9834 390.616 24.0502C390.683 24.0502 390.75 24.117 390.75 24.117C390.883 24.1838 391.083 24.2506 391.217 24.3174C391.284 24.3174 391.284 24.3842 391.35 24.3842L351.103 0.801673C351.103 0.801673 351.036 0.801673 351.036 0.734867C351.036 0.734867 350.969 0.734867 350.969 0.668061C350.836 0.601255 350.636 0.534449 350.502 0.467643C350.502 0.467643 350.435 0.467643 350.435 0.400836H350.369C350.168 0.33403 350.035 0.267224 349.835 0.200418C349.635 0.133612 349.434 0.0668061 349.234 0.0668061H349.167H349.101C348.9 0.0668061 348.7 0 348.567 0H348.5C348.233 0 348.033 0 347.766 0H347.699H347.632C347.365 0 347.098 0.0668061 346.831 0.0668061C346.497 0.133612 346.164 0.200418 345.83 0.267224H345.763C345.763 0.267224 345.763 0.267224 345.697 0.267224C345.496 0.33403 345.229 0.400836 345.029 0.467643C344.962 0.467643 344.962 0.534449 344.896 0.534449C344.695 0.601255 344.562 0.668061 344.362 0.734867H344.295C344.228 0.734867 344.228 0.801673 344.161 0.801673C343.961 0.868479 343.761 1.00209 343.561 1.0689C343.494 1.1357 343.427 1.1357 343.36 1.20251C343.093 1.33612 342.826 1.46973 342.56 1.60335L276.281 39.8164C275.881 40.0168 275.48 40.2841 275.08 40.5513C274.946 40.6181 274.813 40.7517 274.679 40.8185C274.412 41.0189 274.145 41.2193 273.878 41.4198C273.745 41.5534 273.611 41.6202 273.478 41.7538C273.211 41.9542 273.011 42.1546 272.81 42.3551C272.677 42.4887 272.543 42.6223 272.41 42.7559C272.343 42.8227 272.21 42.8895 272.143 43.0231C272.076 43.0899 271.943 43.2235 271.876 43.2903C271.609 43.5576 271.342 43.8916 271.075 44.1588C271.008 44.2256 270.875 44.3592 270.808 44.426C270.741 44.4928 270.675 44.6265 270.608 44.6933C270.474 44.8937 270.274 45.0941 270.141 45.2945C270.007 45.4281 269.94 45.5617 269.807 45.6954C269.74 45.829 269.673 45.8958 269.54 46.0294C269.406 46.163 269.34 46.3634 269.206 46.497C269.139 46.6306 269.073 46.6974 268.939 46.8311C268.806 47.0315 268.672 47.2319 268.539 47.3655C268.472 47.4991 268.405 47.6327 268.272 47.6995C268.272 47.7663 268.205 47.7663 268.205 47.8331C268.005 48.1672 267.805 48.5012 267.538 48.902C267.538 48.902 267.538 48.9689 267.471 48.9689C267.404 49.0357 267.404 49.1025 267.337 49.1693C267.337 49.4365 267.204 49.7037 267.07 49.9709C267.004 50.1046 266.937 50.2382 266.87 50.305C266.803 50.4386 266.737 50.5722 266.67 50.7058C266.67 50.7726 266.603 50.9062 266.536 50.973C266.403 51.2403 266.269 51.5743 266.136 51.8415C266.136 51.9083 266.069 51.9751 266.069 51.9751C266.069 51.9751 266.069 51.9751 266.069 52.0419C265.936 52.4428 265.735 52.7768 265.602 53.1776C265.602 53.2444 265.535 53.3113 265.535 53.3781C265.468 53.5117 265.468 53.6453 265.402 53.7789C265.335 53.9793 265.268 54.1797 265.201 54.3133C265.135 54.447 265.135 54.5806 265.068 54.781C265.001 54.9814 264.934 55.115 264.934 55.3154C264.934 55.449 264.868 55.5159 264.868 55.6495C264.801 55.8499 264.801 56.0503 264.734 56.1839C264.667 56.3843 264.601 56.5847 264.601 56.7852C264.601 56.852 264.534 56.9188 264.534 56.9856C264.534 57.1192 264.467 57.3196 264.467 57.4532C264.401 57.7873 264.334 58.1213 264.267 58.4553C264.267 58.5221 264.2 58.6557 264.2 58.7225C264.2 58.923 264.134 59.1234 264.134 59.3238C264.134 59.4574 264.134 59.591 264.067 59.7914C264 60.2591 264 60.7267 264 61.1276L264.067 76.1589L304.515 99.6747L304.448 84.6433C304.448 84.1757 304.448 83.708 304.515 83.3072C304.515 83.1736 304.515 83.04 304.581 82.8395C304.581 82.5723 304.648 82.2383 304.715 81.9711C304.782 81.637 304.848 81.303 304.915 80.969C304.982 80.7685 304.982 80.5013 305.049 80.3009C305.115 80.1005 305.182 79.9001 305.182 79.6997C305.249 79.4324 305.316 79.0984 305.449 78.8312C305.516 78.6308 305.582 78.4971 305.582 78.2967C305.716 77.9627 305.783 77.6287 305.916 77.2946C305.983 77.161 305.983 77.0274 306.05 76.8938C306.25 76.4262 306.383 75.9585 306.584 75.5577C306.584 75.4909 306.65 75.4241 306.65 75.4241C306.851 75.0232 307.051 74.6224 307.184 74.2215C307.251 74.0879 307.318 73.9543 307.385 73.8207C307.585 73.4199 307.785 73.0859 307.985 72.685C308.052 72.6182 308.052 72.5514 308.119 72.4846C308.386 72.0838 308.653 71.6161 308.92 71.2153C308.987 71.0817 309.053 70.9481 309.187 70.8812C309.387 70.614 309.587 70.28 309.787 70.0128C309.921 69.8792 309.988 69.6787 310.121 69.5451C310.321 69.2779 310.522 69.0775 310.655 68.8103C310.789 68.6098 310.989 68.4094 311.122 68.209C311.256 68.0086 311.456 67.875 311.59 67.6746C311.857 67.4073 312.124 67.0733 312.391 66.8061C312.591 66.6057 312.724 66.472 312.924 66.2716C313.058 66.138 313.191 66.0044 313.325 65.8708C313.525 65.6704 313.792 65.47 313.992 65.2695C314.126 65.1359 314.259 65.0023 314.393 64.9355C314.66 64.7351 314.927 64.5347 315.194 64.3343C315.327 64.2674 315.461 64.1338 315.594 64.067C315.995 63.7998 316.395 63.5326 316.796 63.3322L382.74 25.1859C383.007 25.0523 383.274 24.9187 383.541 24.7851C383.608 24.7851 383.675 24.7182 383.741 24.7182Z",fill:"#A9FFC4","fill-opacity":"0.32"}),t[51]=ge,t[52]=Ke):(ge=t[51],Ke=t[52]);let Te,De;t[53]===Symbol.for("react.memo_cache_sentinel")?(Te=u.jsx("foreignObject",{x:"244",y:"-20",width:"167.35",height:"139.675",children:u.jsx("div",{style:{backdropFilter:"blur(10px)",clipPath:"url(#bgblur_2_1_3_clip_path)",height:"100%",width:"100%"}})}),De=u.jsx("path",{"data-figma-bg-blur-radius":"20",d:"M383.741 24.7182C383.942 24.6514 384.142 24.5178 384.342 24.451C384.409 24.451 384.476 24.3842 384.542 24.3842C384.743 24.3174 384.876 24.2506 385.076 24.1838C385.143 24.1838 385.143 24.117 385.21 24.117C385.41 24.0502 385.677 23.9834 385.877 23.9166H385.944C386.278 23.8498 386.612 23.783 386.945 23.7162C387.212 23.6494 387.479 23.6494 387.746 23.6494C387.813 23.6494 387.88 23.6494 387.88 23.6494C388.147 23.6494 388.347 23.6494 388.614 23.6494C388.681 23.6494 388.681 23.6494 388.747 23.6494C388.948 23.6494 389.148 23.7162 389.281 23.7162C389.348 23.7162 389.415 23.7162 389.482 23.7162C389.682 23.783 389.882 23.783 390.082 23.8498C390.283 23.9166 390.483 23.9834 390.616 24.0502C390.683 24.0502 390.75 24.117 390.75 24.117C390.883 24.1838 391.083 24.2506 391.217 24.3174C391.284 24.3174 391.284 24.3842 391.35 24.3842L351.103 0.801673C351.103 0.801673 351.036 0.801673 351.036 0.734867C351.036 0.734867 350.969 0.734867 350.969 0.668061C350.836 0.601255 350.636 0.534449 350.502 0.467643C350.502 0.467643 350.435 0.467643 350.435 0.400836H350.369C350.168 0.33403 350.035 0.267224 349.835 0.200418C349.635 0.133612 349.434 0.0668061 349.234 0.0668061H349.167H349.101C348.9 0.0668061 348.7 0 348.567 0H348.5C348.233 0 348.033 0 347.766 0H347.699H347.632C347.365 0 347.098 0.0668061 346.831 0.0668061C346.497 0.133612 346.164 0.200418 345.83 0.267224H345.763C345.763 0.267224 345.763 0.267224 345.697 0.267224C345.496 0.33403 345.229 0.400836 345.029 0.467643C344.962 0.467643 344.962 0.534449 344.896 0.534449C344.695 0.601255 344.562 0.668061 344.362 0.734867H344.295C344.228 0.734867 344.228 0.801673 344.161 0.801673C343.961 0.868479 343.761 1.00209 343.561 1.0689C343.494 1.1357 343.427 1.1357 343.36 1.20251C343.093 1.33612 342.826 1.46973 342.559 1.60335L276.281 39.8164C275.881 40.0168 275.48 40.2841 275.08 40.5513C274.946 40.6181 274.813 40.7517 274.679 40.8185C274.412 41.0189 274.145 41.2193 273.878 41.4198C273.745 41.5534 273.611 41.6202 273.478 41.7538C273.211 41.9542 273.011 42.1546 272.81 42.3551C272.677 42.4887 272.543 42.6223 272.41 42.7559C272.343 42.8227 272.21 42.8895 272.143 43.0231C272.076 43.0899 271.943 43.2235 271.876 43.2903C271.609 43.5576 271.342 43.8916 271.075 44.1588C271.008 44.2256 270.875 44.3592 270.808 44.426C270.741 44.4928 270.675 44.6265 270.608 44.6933C270.474 44.8937 270.274 45.0941 270.141 45.2945C270.007 45.4281 269.94 45.5617 269.807 45.6954C269.74 45.829 269.673 45.8958 269.54 46.0294C269.406 46.163 269.34 46.3634 269.206 46.497C269.139 46.6306 269.073 46.6974 268.939 46.8311C268.806 47.0315 268.672 47.2319 268.539 47.3655C268.472 47.4991 268.405 47.6327 268.272 47.6995C268.272 47.7663 268.205 47.7663 268.205 47.8332C268.005 48.1672 267.805 48.5012 267.538 48.902C267.538 48.902 267.538 48.9689 267.471 48.9689C267.404 49.0357 267.404 49.1025 267.337 49.1693C267.337 49.4365 267.204 49.7037 267.07 49.971C267.004 50.1046 266.937 50.2382 266.87 50.305C266.803 50.4386 266.737 50.5722 266.67 50.7058C266.67 50.7726 266.603 50.9062 266.536 50.973C266.403 51.2403 266.269 51.5743 266.136 51.8415C266.136 51.9083 266.069 51.9751 266.069 51.9751C266.069 51.9751 266.069 51.9751 266.069 52.0419C265.936 52.4428 265.735 52.7768 265.602 53.1776C265.602 53.2444 265.535 53.3113 265.535 53.3781C265.468 53.5117 265.468 53.6453 265.402 53.7789C265.335 53.9793 265.268 54.1797 265.201 54.3133C265.135 54.447 265.135 54.5806 265.068 54.781C265.001 54.9814 264.934 55.115 264.934 55.3154C264.934 55.449 264.868 55.5159 264.868 55.6495C264.801 55.8499 264.801 56.0503 264.734 56.1839C264.667 56.3843 264.601 56.5848 264.601 56.7852C264.601 56.852 264.534 56.9188 264.534 56.9856C264.534 57.1192 264.467 57.3196 264.467 57.4532C264.401 57.7873 264.334 58.1213 264.267 58.4553C264.267 58.5221 264.2 58.6557 264.2 58.7225C264.2 58.923 264.134 59.1234 264.134 59.3238C264.134 59.4574 264.134 59.591 264.067 59.7914C264 60.2591 264 60.7267 264 61.1276L264.067 76.1589L304.515 99.6747L304.448 84.6433C304.448 84.1757 304.448 83.708 304.515 83.3072C304.515 83.1736 304.515 83.0399 304.581 82.8395C304.581 82.5723 304.648 82.2383 304.715 81.9711C304.782 81.637 304.848 81.303 304.915 80.969C304.982 80.7685 304.982 80.5013 305.049 80.3009C305.115 80.1005 305.182 79.9001 305.182 79.6997C305.249 79.4324 305.315 79.0984 305.449 78.8312C305.516 78.6308 305.582 78.4971 305.582 78.2967C305.716 77.9627 305.783 77.6287 305.916 77.2946C305.983 77.161 305.983 77.0274 306.05 76.8938C306.25 76.4261 306.383 75.9585 306.584 75.5577C306.584 75.4909 306.65 75.4241 306.65 75.4241C306.851 75.0232 307.051 74.6224 307.184 74.2215C307.251 74.0879 307.318 73.9543 307.385 73.8207C307.585 73.4199 307.785 73.0858 307.985 72.685C308.052 72.6182 308.052 72.5514 308.119 72.4846C308.386 72.0838 308.653 71.6161 308.92 71.2153C308.987 71.0817 309.053 70.9481 309.187 70.8812C309.387 70.614 309.587 70.28 309.787 70.0128C309.921 69.8792 309.988 69.6787 310.121 69.5451C310.321 69.2779 310.522 69.0775 310.655 68.8103C310.789 68.6098 310.989 68.4094 311.122 68.209C311.256 68.0086 311.456 67.875 311.59 67.6746C311.857 67.4073 312.124 67.0733 312.391 66.8061C312.591 66.6057 312.724 66.472 312.924 66.2716C313.058 66.138 313.191 66.0044 313.325 65.8708C313.525 65.6704 313.792 65.47 313.992 65.2695C314.126 65.1359 314.259 65.0023 314.393 64.9355C314.66 64.7351 314.927 64.5347 315.194 64.3343C315.327 64.2674 315.461 64.1338 315.594 64.067C315.995 63.7998 316.395 63.5326 316.796 63.3322L382.74 25.1859C383.007 25.0523 383.274 24.9187 383.541 24.7851C383.608 24.7851 383.675 24.7182 383.741 24.7182Z",fill:"url(#paint26_linear_1_3)"}),t[53]=Te,t[54]=De):(Te=t[53],De=t[54]);let b,A,j,$,ne,Z,Ae,ce;t[55]===Symbol.for("react.memo_cache_sentinel")?(b=u.jsxs("g",{children:[X,J,re,le,Me,ye,_e,We,R,Ye,Ne,ze,ge,Ke,Te,De,u.jsx("g",{filter:"url(#filter10_i_1_3)",children:u.jsx("path",{d:"M313.227 48.0699C312.625 48.4292 311.879 48.4469 311.26 48.1166L307.217 45.9573C306.531 45.5906 306.508 44.6147 307.176 44.2162L346.008 21.0722C346.603 20.7178 347.339 20.6961 347.953 21.0149L352.04 23.1346C352.735 23.4954 352.765 24.4796 352.092 24.8811L313.227 48.0699Z",fill:"#0A0A0A"})}),u.jsx("path",{d:"M382.74 25.2527C389.548 21.3112 395.088 24.4511 395.155 32.3342L395.222 47.3656L304.515 99.7415L304.448 84.7102C304.448 76.8939 309.921 67.3406 316.729 63.399L382.74 25.2527Z",fill:"#BCFFD0","fill-opacity":"0.46"}),u.jsx("path",{d:"M383.242 26.1185C386.465 24.2525 389.155 24.1883 390.981 25.2279C392.749 26.2345 394.04 28.4655 394.148 31.9965L394.155 32.3431L394.218 46.7894L305.506 98.0131L305.448 84.7103C305.448 81.0182 306.747 76.8464 308.902 73.1C311.057 69.3542 314.012 66.1261 317.228 64.264L317.229 64.265L383.241 26.1185H383.242Z",stroke:"url(#paint27_linear_1_3)","stroke-width":"2"})]}),A=u.jsx("circle",{cx:"367.5",cy:"184.5",r:"2.5",fill:"#315E3F"}),j=u.jsx("circle",{cx:"294.5",cy:"192.5",r:"1.5",fill:"#315E3F"}),$=u.jsx("circle",{cx:"344.5",cy:"222.5",r:"1.5",fill:"#1ECA53"}),ne=u.jsx("circle",{cx:"293.5",cy:"239.5",r:"1.5",fill:"#1ECA53"}),Z=u.jsx("circle",{cx:"367.5",cy:"210.5",r:"1.5",fill:"#1ECA53"}),Ae=u.jsx("circle",{cx:"292.5",cy:"213.5",r:"1.5",fill:"#1ECA53"}),ce=u.jsx("path",{d:"M314.357 260C314.819 260 315.518 260.05 316.455 260.149C317.392 260.247 318.096 260.297 318.566 260.297C319.047 260.297 319.707 260.275 320.547 260.23L322.348 260.124C323.188 260.079 323.848 260.057 324.328 260.057C325.505 260.057 326.094 260.537 326.094 261.497C326.094 262.343 325.694 263.219 324.894 264.122C324.095 265.025 323.13 266.244 321.998 267.78C320.426 269.908 319.447 271.217 319.061 271.706C319.635 271.687 320.111 271.678 320.487 271.678C320.77 271.678 321.148 271.716 321.624 271.793L322.64 271.973C323.114 272.05 323.488 272.088 323.764 272.088C324.328 272.088 324.797 272.264 325.17 272.617C325.542 272.97 325.728 273.416 325.728 273.952C325.727 274.489 325.544 274.931 325.177 275.279C324.81 275.628 324.339 275.802 323.765 275.801C323.388 275.801 322.839 275.734 322.119 275.603C321.399 275.471 320.856 275.406 320.488 275.405C318.379 275.405 316.406 275.579 314.57 275.926C314.366 275.97 314.158 275.995 313.949 276C313.431 276 312.989 275.859 312.622 275.576C312.208 275.266 312 274.856 312 274.348C312 273.745 312.296 273.193 312.89 272.694C315.234 270.708 317.687 267.803 320.248 263.981C319.664 264.009 319.104 264.023 318.567 264.023C317.103 264.02 315.64 263.916 314.189 263.71C313.031 263.55 312.452 262.938 312.452 261.874C312.448 261.629 312.494 261.386 312.586 261.158C312.678 260.931 312.814 260.724 312.987 260.551C313.345 260.184 313.802 260 314.357 260ZM345.636 264.562C345.962 264.514 346 264.717 345.931 264.983C345.825 265.39 345.639 265.765 345.58 266.186C345.53 266.542 345.559 266.919 345.727 267.237C346.01 267.773 346.561 268.084 346.895 268.581C347.13 268.936 347.295 269.333 347.38 269.75C347.411 269.899 347.433 270.049 347.446 270.2C347.579 271.763 346.901 273.393 345.775 274.471C344.997 275.218 344.016 275.719 342.954 275.91C341.892 276.102 340.798 275.975 339.808 275.547C338.817 275.119 337.975 274.407 337.388 273.502C336.8 272.597 336.493 271.539 336.505 270.46C336.536 267.375 339.13 264.952 342.213 265.031C342.883 265.049 343.566 265.238 344.172 265.503C343.685 266.214 343.811 266.899 344.031 267.628C344.169 268.085 344.462 268.503 344.579 268.965C344.725 269.54 344.589 270.327 344.204 270.806C344.205 270.709 344.217 270.61 344.217 270.513C344.216 269.932 343.987 269.374 343.581 268.958C343.175 268.543 342.622 268.303 342.041 268.289C341.46 268.276 340.896 268.49 340.471 268.886C340.046 269.282 339.792 269.828 339.764 270.408C339.692 271.972 341.173 272.968 342.631 272.72C344.166 272.459 345.068 270.962 345.12 269.491C345.161 268.346 344.109 267.466 344.345 266.301C344.474 265.664 344.893 264.666 345.636 264.562ZM330.026 265.142C331.271 264.897 332.563 265.092 333.681 265.693C334.798 266.295 335.671 267.267 336.151 268.442C335.913 269.107 335.791 269.809 335.792 270.516C335.791 271.223 335.913 271.924 336.151 272.59C335.671 273.764 334.798 274.735 333.681 275.337C332.563 275.939 331.271 276.134 330.026 275.889C328.781 275.644 327.66 274.974 326.854 273.994C326.048 273.014 325.606 271.785 325.606 270.516C325.606 269.247 326.048 268.017 326.854 267.037C327.66 266.057 328.781 265.387 330.026 265.142ZM331.937 268.457C331.529 268.289 331.082 268.245 330.649 268.331C330.217 268.417 329.82 268.629 329.509 268.941C329.197 269.252 328.985 269.649 328.899 270.081C328.814 270.513 328.858 270.961 329.026 271.368C329.195 271.775 329.48 272.124 329.847 272.368C330.213 272.613 330.644 272.743 331.085 272.743C331.675 272.743 332.242 272.508 332.659 272.091C333.077 271.673 333.311 271.106 333.312 270.516C333.312 270.075 333.181 269.645 332.937 269.278C332.692 268.912 332.344 268.626 331.937 268.457Z",fill:"#1C1C1C"}),t[55]=b,t[56]=A,t[57]=j,t[58]=$,t[59]=ne,t[60]=Z,t[61]=Ae,t[62]=ce):(b=t[55],A=t[56],j=t[57],$=t[58],ne=t[59],Z=t[60],Ae=t[61],ce=t[62]);let pe;t[63]===Symbol.for("react.memo_cache_sentinel")?(pe=u.jsxs("filter",{id:"filter0_df_1_3",x:"239",y:"128",width:"16",height:"16",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_1_3"})]}),t[63]=pe):pe=t[63];let Pe;t[64]===Symbol.for("react.memo_cache_sentinel")?(Pe=u.jsxs("filter",{id:"filter1_df_1_3",x:"250",y:"80.0001",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[64]=Pe):Pe=t[64];let ie;t[65]===Symbol.for("react.memo_cache_sentinel")?(ie=u.jsxs("filter",{id:"filter2_df_1_3",x:"218",y:"167",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[65]=ie):ie=t[65];let fe;t[66]===Symbol.for("react.memo_cache_sentinel")?(fe=u.jsxs("filter",{id:"filter3_df_1_3",x:"451",y:"110",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[66]=fe):fe=t[66];let Oe;t[67]===Symbol.for("react.memo_cache_sentinel")?(Oe=u.jsxs("filter",{id:"filter4_df_1_3",x:"398",y:"128",width:"16",height:"16",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"2",result:"effect2_foregroundBlur_1_3"})]}),t[67]=Oe):Oe=t[67];let Ee;t[68]===Symbol.for("react.memo_cache_sentinel")?(Ee=u.jsxs("filter",{id:"filter5_df_1_3",x:"422",y:"170",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[68]=Ee):Ee=t[68];let me;t[69]===Symbol.for("react.memo_cache_sentinel")?(me=u.jsxs("filter",{id:"filter6_df_1_3",x:"419",y:"79.0001",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[69]=me):me=t[69];let be;t[70]===Symbol.for("react.memo_cache_sentinel")?(be=u.jsxs("filter",{id:"filter7_df_1_3",x:"190",y:"90.0001",width:"15",height:"15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{}),u.jsx("feGaussianBlur",{stdDeviation:"3"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.117647 0 0 0 0 0.792157 0 0 0 0 0.32549 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_3"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1_3",result:"shape"}),u.jsx("feGaussianBlur",{stdDeviation:"1",result:"effect2_foregroundBlur_1_3"})]}),t[70]=be):be=t[70];let Ue;t[71]===Symbol.for("react.memo_cache_sentinel")?(Ue=u.jsx("clipPath",{id:"bgblur_0_1_3_clip_path",transform:"translate(-243.334 -56.896)",children:u.jsx("path",{d:"M304.915 158.731L304.782 101.479L264.334 77.896L264.467 135.149C264.467 140.226 266.269 143.767 269.139 145.437L309.587 169.019C306.717 167.349 304.982 163.742 304.915 158.731Z"})}),t[71]=Ue):Ue=t[71];let tt;t[72]===Symbol.for("react.memo_cache_sentinel")?(tt=u.jsx("clipPath",{id:"bgblur_1_1_3_clip_path",transform:"translate(-244 20)",children:u.jsx("path",{d:"M383.741 24.7182C383.942 24.6514 384.142 24.5178 384.342 24.451C384.409 24.451 384.476 24.3842 384.542 24.3842C384.743 24.3174 384.876 24.2506 385.076 24.1838C385.143 24.1838 385.143 24.117 385.21 24.117C385.41 24.0502 385.677 23.9834 385.877 23.9166H385.944C386.278 23.8498 386.612 23.783 386.945 23.7162C387.212 23.6494 387.479 23.6494 387.746 23.6494C387.813 23.6494 387.88 23.6494 387.88 23.6494C388.147 23.6494 388.347 23.6494 388.614 23.6494C388.681 23.6494 388.681 23.6494 388.747 23.6494C388.948 23.6494 389.148 23.7162 389.281 23.7162C389.348 23.7162 389.415 23.7162 389.482 23.7162C389.682 23.783 389.882 23.783 390.082 23.8498C390.283 23.9166 390.483 23.9834 390.616 24.0502C390.683 24.0502 390.75 24.117 390.75 24.117C390.883 24.1838 391.083 24.2506 391.217 24.3174C391.284 24.3174 391.284 24.3842 391.35 24.3842L351.103 0.801673C351.103 0.801673 351.036 0.801673 351.036 0.734867C351.036 0.734867 350.969 0.734867 350.969 0.668061C350.836 0.601255 350.636 0.534449 350.502 0.467643C350.502 0.467643 350.435 0.467643 350.435 0.400836H350.369C350.168 0.33403 350.035 0.267224 349.835 0.200418C349.635 0.133612 349.434 0.0668061 349.234 0.0668061H349.167H349.101C348.9 0.0668061 348.7 0 348.567 0H348.5C348.233 0 348.033 0 347.766 0H347.699H347.632C347.365 0 347.098 0.0668061 346.831 0.0668061C346.497 0.133612 346.164 0.200418 345.83 0.267224H345.763C345.763 0.267224 345.763 0.267224 345.697 0.267224C345.496 0.33403 345.229 0.400836 345.029 0.467643C344.962 0.467643 344.962 0.534449 344.896 0.534449C344.695 0.601255 344.562 0.668061 344.362 0.734867H344.295C344.228 0.734867 344.228 0.801673 344.161 0.801673C343.961 0.868479 343.761 1.00209 343.561 1.0689C343.494 1.1357 343.427 1.1357 343.36 1.20251C343.093 1.33612 342.826 1.46973 342.56 1.60335L276.281 39.8164C275.881 40.0168 275.48 40.2841 275.08 40.5513C274.946 40.6181 274.813 40.7517 274.679 40.8185C274.412 41.0189 274.145 41.2193 273.878 41.4198C273.745 41.5534 273.611 41.6202 273.478 41.7538C273.211 41.9542 273.011 42.1546 272.81 42.3551C272.677 42.4887 272.543 42.6223 272.41 42.7559C272.343 42.8227 272.21 42.8895 272.143 43.0231C272.076 43.0899 271.943 43.2235 271.876 43.2903C271.609 43.5576 271.342 43.8916 271.075 44.1588C271.008 44.2256 270.875 44.3592 270.808 44.426C270.741 44.4928 270.675 44.6265 270.608 44.6933C270.474 44.8937 270.274 45.0941 270.141 45.2945C270.007 45.4281 269.94 45.5617 269.807 45.6954C269.74 45.829 269.673 45.8958 269.54 46.0294C269.406 46.163 269.34 46.3634 269.206 46.497C269.139 46.6306 269.073 46.6974 268.939 46.8311C268.806 47.0315 268.672 47.2319 268.539 47.3655C268.472 47.4991 268.405 47.6327 268.272 47.6995C268.272 47.7663 268.205 47.7663 268.205 47.8331C268.005 48.1672 267.805 48.5012 267.538 48.902C267.538 48.902 267.538 48.9689 267.471 48.9689C267.404 49.0357 267.404 49.1025 267.337 49.1693C267.337 49.4365 267.204 49.7037 267.07 49.9709C267.004 50.1046 266.937 50.2382 266.87 50.305C266.803 50.4386 266.737 50.5722 266.67 50.7058C266.67 50.7726 266.603 50.9062 266.536 50.973C266.403 51.2403 266.269 51.5743 266.136 51.8415C266.136 51.9083 266.069 51.9751 266.069 51.9751C266.069 51.9751 266.069 51.9751 266.069 52.0419C265.936 52.4428 265.735 52.7768 265.602 53.1776C265.602 53.2444 265.535 53.3113 265.535 53.3781C265.468 53.5117 265.468 53.6453 265.402 53.7789C265.335 53.9793 265.268 54.1797 265.201 54.3133C265.135 54.447 265.135 54.5806 265.068 54.781C265.001 54.9814 264.934 55.115 264.934 55.3154C264.934 55.449 264.868 55.5159 264.868 55.6495C264.801 55.8499 264.801 56.0503 264.734 56.1839C264.667 56.3843 264.601 56.5847 264.601 56.7852C264.601 56.852 264.534 56.9188 264.534 56.9856C264.534 57.1192 264.467 57.3196 264.467 57.4532C264.401 57.7873 264.334 58.1213 264.267 58.4553C264.267 58.5221 264.2 58.6557 264.2 58.7225C264.2 58.923 264.134 59.1234 264.134 59.3238C264.134 59.4574 264.134 59.591 264.067 59.7914C264 60.2591 264 60.7267 264 61.1276L264.067 76.1589L304.515 99.6747L304.448 84.6433C304.448 84.1757 304.448 83.708 304.515 83.3072C304.515 83.1736 304.515 83.04 304.581 82.8395C304.581 82.5723 304.648 82.2383 304.715 81.9711C304.782 81.637 304.848 81.303 304.915 80.969C304.982 80.7685 304.982 80.5013 305.049 80.3009C305.115 80.1005 305.182 79.9001 305.182 79.6997C305.249 79.4324 305.316 79.0984 305.449 78.8312C305.516 78.6308 305.582 78.4971 305.582 78.2967C305.716 77.9627 305.783 77.6287 305.916 77.2946C305.983 77.161 305.983 77.0274 306.05 76.8938C306.25 76.4262 306.383 75.9585 306.584 75.5577C306.584 75.4909 306.65 75.4241 306.65 75.4241C306.851 75.0232 307.051 74.6224 307.184 74.2215C307.251 74.0879 307.318 73.9543 307.385 73.8207C307.585 73.4199 307.785 73.0859 307.985 72.685C308.052 72.6182 308.052 72.5514 308.119 72.4846C308.386 72.0838 308.653 71.6161 308.92 71.2153C308.987 71.0817 309.053 70.9481 309.187 70.8812C309.387 70.614 309.587 70.28 309.787 70.0128C309.921 69.8792 309.988 69.6787 310.121 69.5451C310.321 69.2779 310.522 69.0775 310.655 68.8103C310.789 68.6098 310.989 68.4094 311.122 68.209C311.256 68.0086 311.456 67.875 311.59 67.6746C311.857 67.4073 312.124 67.0733 312.391 66.8061C312.591 66.6057 312.724 66.472 312.924 66.2716C313.058 66.138 313.191 66.0044 313.325 65.8708C313.525 65.6704 313.792 65.47 313.992 65.2695C314.126 65.1359 314.259 65.0023 314.393 64.9355C314.66 64.7351 314.927 64.5347 315.194 64.3343C315.327 64.2674 315.461 64.1338 315.594 64.067C315.995 63.7998 316.395 63.5326 316.796 63.3322L382.74 25.1859C383.007 25.0523 383.274 24.9187 383.541 24.7851C383.608 24.7851 383.675 24.7182 383.741 24.7182Z"})}),t[72]=tt):tt=t[72];let O;t[73]===Symbol.for("react.memo_cache_sentinel")?(O=u.jsx("clipPath",{id:"bgblur_2_1_3_clip_path",transform:"translate(-244 20)",children:u.jsx("path",{d:"M383.741 24.7182C383.942 24.6514 384.142 24.5178 384.342 24.451C384.409 24.451 384.476 24.3842 384.542 24.3842C384.743 24.3174 384.876 24.2506 385.076 24.1838C385.143 24.1838 385.143 24.117 385.21 24.117C385.41 24.0502 385.677 23.9834 385.877 23.9166H385.944C386.278 23.8498 386.612 23.783 386.945 23.7162C387.212 23.6494 387.479 23.6494 387.746 23.6494C387.813 23.6494 387.88 23.6494 387.88 23.6494C388.147 23.6494 388.347 23.6494 388.614 23.6494C388.681 23.6494 388.681 23.6494 388.747 23.6494C388.948 23.6494 389.148 23.7162 389.281 23.7162C389.348 23.7162 389.415 23.7162 389.482 23.7162C389.682 23.783 389.882 23.783 390.082 23.8498C390.283 23.9166 390.483 23.9834 390.616 24.0502C390.683 24.0502 390.75 24.117 390.75 24.117C390.883 24.1838 391.083 24.2506 391.217 24.3174C391.284 24.3174 391.284 24.3842 391.35 24.3842L351.103 0.801673C351.103 0.801673 351.036 0.801673 351.036 0.734867C351.036 0.734867 350.969 0.734867 350.969 0.668061C350.836 0.601255 350.636 0.534449 350.502 0.467643C350.502 0.467643 350.435 0.467643 350.435 0.400836H350.369C350.168 0.33403 350.035 0.267224 349.835 0.200418C349.635 0.133612 349.434 0.0668061 349.234 0.0668061H349.167H349.101C348.9 0.0668061 348.7 0 348.567 0H348.5C348.233 0 348.033 0 347.766 0H347.699H347.632C347.365 0 347.098 0.0668061 346.831 0.0668061C346.497 0.133612 346.164 0.200418 345.83 0.267224H345.763C345.763 0.267224 345.763 0.267224 345.697 0.267224C345.496 0.33403 345.229 0.400836 345.029 0.467643C344.962 0.467643 344.962 0.534449 344.896 0.534449C344.695 0.601255 344.562 0.668061 344.362 0.734867H344.295C344.228 0.734867 344.228 0.801673 344.161 0.801673C343.961 0.868479 343.761 1.00209 343.561 1.0689C343.494 1.1357 343.427 1.1357 343.36 1.20251C343.093 1.33612 342.826 1.46973 342.559 1.60335L276.281 39.8164C275.881 40.0168 275.48 40.2841 275.08 40.5513C274.946 40.6181 274.813 40.7517 274.679 40.8185C274.412 41.0189 274.145 41.2193 273.878 41.4198C273.745 41.5534 273.611 41.6202 273.478 41.7538C273.211 41.9542 273.011 42.1546 272.81 42.3551C272.677 42.4887 272.543 42.6223 272.41 42.7559C272.343 42.8227 272.21 42.8895 272.143 43.0231C272.076 43.0899 271.943 43.2235 271.876 43.2903C271.609 43.5576 271.342 43.8916 271.075 44.1588C271.008 44.2256 270.875 44.3592 270.808 44.426C270.741 44.4928 270.675 44.6265 270.608 44.6933C270.474 44.8937 270.274 45.0941 270.141 45.2945C270.007 45.4281 269.94 45.5617 269.807 45.6954C269.74 45.829 269.673 45.8958 269.54 46.0294C269.406 46.163 269.34 46.3634 269.206 46.497C269.139 46.6306 269.073 46.6974 268.939 46.8311C268.806 47.0315 268.672 47.2319 268.539 47.3655C268.472 47.4991 268.405 47.6327 268.272 47.6995C268.272 47.7663 268.205 47.7663 268.205 47.8332C268.005 48.1672 267.805 48.5012 267.538 48.902C267.538 48.902 267.538 48.9689 267.471 48.9689C267.404 49.0357 267.404 49.1025 267.337 49.1693C267.337 49.4365 267.204 49.7037 267.07 49.971C267.004 50.1046 266.937 50.2382 266.87 50.305C266.803 50.4386 266.737 50.5722 266.67 50.7058C266.67 50.7726 266.603 50.9062 266.536 50.973C266.403 51.2403 266.269 51.5743 266.136 51.8415C266.136 51.9083 266.069 51.9751 266.069 51.9751C266.069 51.9751 266.069 51.9751 266.069 52.0419C265.936 52.4428 265.735 52.7768 265.602 53.1776C265.602 53.2444 265.535 53.3113 265.535 53.3781C265.468 53.5117 265.468 53.6453 265.402 53.7789C265.335 53.9793 265.268 54.1797 265.201 54.3133C265.135 54.447 265.135 54.5806 265.068 54.781C265.001 54.9814 264.934 55.115 264.934 55.3154C264.934 55.449 264.868 55.5159 264.868 55.6495C264.801 55.8499 264.801 56.0503 264.734 56.1839C264.667 56.3843 264.601 56.5848 264.601 56.7852C264.601 56.852 264.534 56.9188 264.534 56.9856C264.534 57.1192 264.467 57.3196 264.467 57.4532C264.401 57.7873 264.334 58.1213 264.267 58.4553C264.267 58.5221 264.2 58.6557 264.2 58.7225C264.2 58.923 264.134 59.1234 264.134 59.3238C264.134 59.4574 264.134 59.591 264.067 59.7914C264 60.2591 264 60.7267 264 61.1276L264.067 76.1589L304.515 99.6747L304.448 84.6433C304.448 84.1757 304.448 83.708 304.515 83.3072C304.515 83.1736 304.515 83.0399 304.581 82.8395C304.581 82.5723 304.648 82.2383 304.715 81.9711C304.782 81.637 304.848 81.303 304.915 80.969C304.982 80.7685 304.982 80.5013 305.049 80.3009C305.115 80.1005 305.182 79.9001 305.182 79.6997C305.249 79.4324 305.315 79.0984 305.449 78.8312C305.516 78.6308 305.582 78.4971 305.582 78.2967C305.716 77.9627 305.783 77.6287 305.916 77.2946C305.983 77.161 305.983 77.0274 306.05 76.8938C306.25 76.4261 306.383 75.9585 306.584 75.5577C306.584 75.4909 306.65 75.4241 306.65 75.4241C306.851 75.0232 307.051 74.6224 307.184 74.2215C307.251 74.0879 307.318 73.9543 307.385 73.8207C307.585 73.4199 307.785 73.0858 307.985 72.685C308.052 72.6182 308.052 72.5514 308.119 72.4846C308.386 72.0838 308.653 71.6161 308.92 71.2153C308.987 71.0817 309.053 70.9481 309.187 70.8812C309.387 70.614 309.587 70.28 309.787 70.0128C309.921 69.8792 309.988 69.6787 310.121 69.5451C310.321 69.2779 310.522 69.0775 310.655 68.8103C310.789 68.6098 310.989 68.4094 311.122 68.209C311.256 68.0086 311.456 67.875 311.59 67.6746C311.857 67.4073 312.124 67.0733 312.391 66.8061C312.591 66.6057 312.724 66.472 312.924 66.2716C313.058 66.138 313.191 66.0044 313.325 65.8708C313.525 65.6704 313.792 65.47 313.992 65.2695C314.126 65.1359 314.259 65.0023 314.393 64.9355C314.66 64.7351 314.927 64.5347 315.194 64.3343C315.327 64.2674 315.461 64.1338 315.594 64.067C315.995 63.7998 316.395 63.5326 316.796 63.3322L382.74 25.1859C383.007 25.0523 383.274 24.9187 383.541 24.7851C383.608 24.7851 383.675 24.7182 383.741 24.7182Z"})}),t[73]=O):O=t[73];let se;t[74]===Symbol.for("react.memo_cache_sentinel")?(se=u.jsxs("filter",{id:"filter10_i_1_3",x:"306.688",y:"20.7903",width:"45.8912",height:"29.5621",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),u.jsx("feOffset",{dy:"2"}),u.jsx("feGaussianBlur",{stdDeviation:"1"}),u.jsx("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),u.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.218123 0 0 0 0 0.336276 0 0 0 0 0.292746 0 0 0 1 0"}),u.jsx("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_1_3"})]}),t[74]=se):se=t[74];let Q;t[75]===Symbol.for("react.memo_cache_sentinel")?(Q=u.jsxs("linearGradient",{id:"paint0_linear_1_3",x1:"60",y1:"278",x2:"60",y2:"398",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[75]=Q):Q=t[75];let K;t[76]===Symbol.for("react.memo_cache_sentinel")?(K=u.jsxs("linearGradient",{id:"paint1_linear_1_3",x1:"196",y1:"278",x2:"196",y2:"398",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[76]=K):K=t[76];let ae;t[77]===Symbol.for("react.memo_cache_sentinel")?(ae=u.jsxs("linearGradient",{id:"paint2_linear_1_3",x1:"332",y1:"278",x2:"332",y2:"398",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[77]=ae):ae=t[77];let Le;t[78]===Symbol.for("react.memo_cache_sentinel")?(Le=u.jsxs("linearGradient",{id:"paint3_linear_1_3",x1:"468",y1:"278",x2:"468",y2:"398",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[78]=Le):Le=t[78];let ke;t[79]===Symbol.for("react.memo_cache_sentinel")?(ke=u.jsxs("linearGradient",{id:"paint4_linear_1_3",x1:"604",y1:"278",x2:"604",y2:"398",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[79]=ke):ke=t[79];let it;t[80]===Symbol.for("react.memo_cache_sentinel")?(it=u.jsxs("linearGradient",{id:"paint5_linear_1_3",x1:"128",y1:"218",x2:"128",y2:"338",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[80]=it):it=t[80];let st;t[81]===Symbol.for("react.memo_cache_sentinel")?(st=u.jsxs("linearGradient",{id:"paint6_linear_1_3",x1:"264",y1:"218",x2:"264",y2:"338",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[81]=st):st=t[81];let Xe;t[82]===Symbol.for("react.memo_cache_sentinel")?(Xe=u.jsxs("linearGradient",{id:"paint7_linear_1_3",x1:"400",y1:"218",x2:"400",y2:"338",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[82]=Xe):Xe=t[82];let Rt;t[83]===Symbol.for("react.memo_cache_sentinel")?(Rt=u.jsxs("linearGradient",{id:"paint8_linear_1_3",x1:"536",y1:"218",x2:"536",y2:"338",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[83]=Rt):Rt=t[83];let Tt;t[84]===Symbol.for("react.memo_cache_sentinel")?(Tt=u.jsxs("linearGradient",{id:"paint9_linear_1_3",x1:"60",y1:"138",x2:"60",y2:"258",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[84]=Tt):Tt=t[84];let On;t[85]===Symbol.for("react.memo_cache_sentinel")?(On=u.jsxs("linearGradient",{id:"paint10_linear_1_3",x1:"196",y1:"138",x2:"196",y2:"258",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[85]=On):On=t[85];let kt;t[86]===Symbol.for("react.memo_cache_sentinel")?(kt=u.jsxs("linearGradient",{id:"paint11_linear_1_3",x1:"332",y1:"138",x2:"332",y2:"258",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[86]=kt):kt=t[86];let wn;t[87]===Symbol.for("react.memo_cache_sentinel")?(wn=u.jsxs("linearGradient",{id:"paint12_linear_1_3",x1:"468",y1:"138",x2:"468",y2:"258",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[87]=wn):wn=t[87];let Nn;t[88]===Symbol.for("react.memo_cache_sentinel")?(Nn=u.jsxs("linearGradient",{id:"paint13_linear_1_3",x1:"604",y1:"138",x2:"604",y2:"258",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[88]=Nn):Nn=t[88];let zn;t[89]===Symbol.for("react.memo_cache_sentinel")?(zn=u.jsxs("linearGradient",{id:"paint14_linear_1_3",x1:"128",y1:"78.0001",x2:"128",y2:"198",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[89]=zn):zn=t[89];let cn;t[90]===Symbol.for("react.memo_cache_sentinel")?(cn=u.jsxs("linearGradient",{id:"paint15_linear_1_3",x1:"264",y1:"78.0001",x2:"264",y2:"198",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[90]=cn):cn=t[90];let Gn;t[91]===Symbol.for("react.memo_cache_sentinel")?(Gn=u.jsxs("linearGradient",{id:"paint16_linear_1_3",x1:"400",y1:"78.0001",x2:"400",y2:"198",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[91]=Gn):Gn=t[91];let un;t[92]===Symbol.for("react.memo_cache_sentinel")?(un=u.jsxs("linearGradient",{id:"paint17_linear_1_3",x1:"536",y1:"78.0001",x2:"536",y2:"198",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#3D3D3D"}),u.jsx("stop",{offset:"1",stopColor:"#040404",stopOpacity:"0"})]}),t[92]=un):un=t[92];let Hn;t[93]===Symbol.for("react.memo_cache_sentinel")?(Hn=u.jsxs("linearGradient",{id:"paint18_linear_1_3",x1:"329.5",y1:"164",x2:"329.5",y2:"332",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#17191A"}),u.jsx("stop",{offset:"1",stopOpacity:"0"})]}),t[93]=Hn):Hn=t[93];let kn;t[94]===Symbol.for("react.memo_cache_sentinel")?(kn=u.jsxs("linearGradient",{id:"paint19_linear_1_3",x1:"330",y1:"100",x2:"330",y2:"271",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#152319",stopOpacity:"0"}),u.jsx("stop",{offset:"1",stopColor:"#073916"})]}),t[94]=kn):kn=t[94];let ai;t[95]===Symbol.for("react.memo_cache_sentinel")?(ai=u.jsxs("linearGradient",{id:"paint20_linear_1_3",x1:"292.261",y1:"92.7633",x2:"293.569",y2:"146.668",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#6FFF5E"}),u.jsx("stop",{offset:"1",stopColor:"#1ECA53"})]}),t[95]=ai):ai=t[95];let oi;t[96]===Symbol.for("react.memo_cache_sentinel")?(oi=u.jsxs("linearGradient",{id:"paint21_linear_1_3",x1:"372.29",y1:"46.1855",x2:"276.517",y2:"76.8014",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#54FF88"}),u.jsx("stop",{offset:"1",stopColor:"#79FF4C"})]}),t[96]=oi):oi=t[96];let li;t[97]===Symbol.for("react.memo_cache_sentinel")?(li=u.jsxs("linearGradient",{id:"paint22_linear_1_3",x1:"369.716",y1:"142.22",x2:"337.007",y2:"69.6053",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0.155095",stopColor:"#1ECA53"}),u.jsx("stop",{offset:"0.546875",stopColor:"#82FFA9"}),u.jsx("stop",{offset:"0.895833",stopColor:"#C5FFD7"}),u.jsx("stop",{offset:"0.963542",stopColor:"white"})]}),t[97]=li):li=t[97];let M;t[98]===Symbol.for("react.memo_cache_sentinel")?(M=u.jsxs("linearGradient",{id:"paint23_linear_1_3",x1:"387.598",y1:"124.949",x2:"349.917",y2:"77.3246",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#4CFF83"}),u.jsx("stop",{offset:"0.262227",stopColor:"#1ECA53"}),u.jsx("stop",{offset:"1",stopColor:"#79FF4C"})]}),t[98]=M):M=t[98];let N;t[99]===Symbol.for("react.memo_cache_sentinel")?(N=u.jsxs("linearGradient",{id:"paint24_linear_1_3",x1:"386.333",y1:"54.1665",x2:"315.942",y2:"157.004",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"white",stopOpacity:"0.67"}),u.jsx("stop",{offset:"1",stopColor:"#0085FF",stopOpacity:"0"})]}),t[99]=N):N=t[99];let V;t[100]===Symbol.for("react.memo_cache_sentinel")?(V=u.jsxs("linearGradient",{id:"paint25_linear_1_3",x1:"338.97",y1:"76.0165",x2:"373.118",y2:"138.949",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"#D7FFE3"}),u.jsx("stop",{offset:"0.614457",stopColor:"#80FFA7"}),u.jsx("stop",{offset:"1",stopColor:"#00B137"})]}),t[100]=V):V=t[100];let W;t[101]===Symbol.for("react.memo_cache_sentinel")?(W=u.jsxs("linearGradient",{id:"paint26_linear_1_3",x1:"330.204",y1:"-38.2044",x2:"267.402",y2:"75.8855",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"white",stopOpacity:"0"}),u.jsx("stop",{offset:"0.363955",stopColor:"#6FB1FF",stopOpacity:"0.22"}),u.jsx("stop",{offset:"0.552083",stopColor:"#555791",stopOpacity:"0"}),u.jsx("stop",{offset:"0.723958",stopColor:"#6FB1FF",stopOpacity:"0.36"}),u.jsx("stop",{offset:"1",stopColor:"#C6CBFB",stopOpacity:"0"})]}),t[101]=W):W=t[101];let G;return t[102]===Symbol.for("react.memo_cache_sentinel")?(G=u.jsxs("svg",{width:"100%",height:"auto",viewBox:"0 0 664 398",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e,n,i,r,s,a,o,I,S,C,l,c,h,f,d,p,v,x,g,m,y,_,E,F,w,T,D,Y,k,z,L,P,H,U,q,ee,te,xe,ue,b,A,j,$,ne,Z,Ae,ce,u.jsxs("defs",{children:[pe,Pe,ie,fe,Oe,Ee,me,be,Ue,tt,O,se,Q,K,ae,Le,ke,it,st,Xe,Rt,Tt,On,kt,wn,Nn,zn,cn,Gn,un,Hn,kn,ai,oi,li,M,N,V,W,u.jsxs("linearGradient",{id:"paint27_linear_1_3",x1:"388.295",y1:"21.3265",x2:"349.835",y2:"99.7415",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{stopColor:"white",stopOpacity:"0.42"}),u.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),t[102]=G):G=t[102],G}function c4(t,e,n=1){if(e==null&&(e=t,t=0),!Number.isInteger(n)||n===0)throw new Error("The step value must be a non-zero integer.");const i=Math.max(Math.ceil((e-t)/n),0),r=new Array(i);for(let s=0;s<i;s++)r[s]=t+s*n;return r}function u4(t,e=0){if(!Number.isInteger(e))throw new Error("Precision must be an integer.");const n=Math.pow(10,e);return Math.round(t*n)/n}function h4(t){const e=It.c(18),{num:n}=t;if(n==","||n=="."){let x;return e[0]!==n?(x=u.jsx("span",{className:"text-[clamp(9px,3.9vw,60px)] leading-0 text-[#1ECA53]",children:n}),e[0]=n,e[1]=x):x=e[1],x}let i,r,s,a;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=u.jsx("rect",{opacity:"0.5",width:"78",height:"120",fill:"url(#paint0_linear_90_107)"}),r=u.jsx("rect",{width:"1",height:"120",fill:"url(#paint1_linear_90_107)"}),s=u.jsx("rect",{x:"77",width:"1",height:"120",fill:"url(#paint2_linear_90_107)"}),a={filter:"drop-shadow(0px 0px 14px #3FFF4C)"},e[2]=i,e[3]=r,e[4]=s,e[5]=a):(i=e[2],r=e[3],s=e[4],a=e[5]);const o=n==="$"?"5":n;let l;e[6]!==o?(l=u.jsx("text",{textAnchor:"middle",fontSize:54,x:"39",y:"87",className:"font-dseg7mini font-bold",fill:"white",children:o}),e[6]=o,e[7]=l):l=e[7];let c;e[8]!==n?(c=n==="$"&&u.jsx("rect",{fill:"white",x:36,y:29,width:6,height:62}),e[8]=n,e[9]=c):c=e[9];let h;e[10]!==l||e[11]!==c?(h=u.jsxs("g",{style:a,children:[l,c]}),e[10]=l,e[11]=c,e[12]=h):h=e[12];let f;e[13]===Symbol.for("react.memo_cache_sentinel")?(f=u.jsxs("linearGradient",{id:"paint0_linear_90_107",x1:"39",y1:"0",x2:"39",y2:"120",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-opacity":"0"}),u.jsx("stop",{offset:"0.509615","stop-color":"#1CB94D"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]}),e[13]=f):f=e[13];let d;e[14]===Symbol.for("react.memo_cache_sentinel")?(d=u.jsxs("linearGradient",{id:"paint1_linear_90_107",x1:"0.5",y1:"0",x2:"0.5",y2:"120",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-opacity":"0"}),u.jsx("stop",{offset:"0.399038","stop-color":"#1ECA53"}),u.jsx("stop",{offset:"0.649038","stop-color":"#1ECA53"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]}),e[14]=d):d=e[14];let p;e[15]===Symbol.for("react.memo_cache_sentinel")?(p=u.jsxs("defs",{children:[f,d,u.jsxs("linearGradient",{id:"paint2_linear_90_107",x1:"77.5",y1:"0",x2:"77.5",y2:"120",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{"stop-opacity":"0"}),u.jsx("stop",{offset:"0.399038","stop-color":"#1ECA53"}),u.jsx("stop",{offset:"0.649038","stop-color":"#1ECA53"}),u.jsx("stop",{offset:"1","stop-opacity":"0"})]})]}),e[15]=p):p=e[15];let v;return e[16]!==h?(v=u.jsxs("svg",{className:"shrink-0 text-[clamp(18px,7.8vw,120px)]",width:".65em",height:"1em",viewBox:"0 0 78 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i,r,s,h,p]}),e[16]=h,e[17]=v):v=e[17],v}function f4(){const t=It.c(11);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={queryKey:["TVL"],initialData:"$000,000,000.00",queryFn:p4},t[0]=e):e=t[0];const{data:n}=l2(e);let i,r;if(t[1]!==n){const h=n.trim().split("");i="flex relative items-center gap-[clamp(2px,0.78vw,12px)] py-[clamp(5px,0.78vw,12px)] px-[clamp(10px,1.5vw,24px)] [--fcolor:#1ECA53]",r=h.map(d4),t[1]=n,t[2]=i,t[3]=r}else i=t[2],r=t[3];let s,a,o,l;t[4]===Symbol.for("react.memo_cache_sentinel")?(s=u.jsx("div",{className:"w-2 md:w-3.5 aspect-square absolute left-0 top-0 border-2 border-transparent border-t-(--fcolor) border-l-(--fcolor)"}),a=u.jsx("div",{className:"w-2 md:w-3.5 aspect-square absolute left-0 bottom-0 border-2 border-transparent border-b-(--fcolor) border-l-(--fcolor)"}),o=u.jsx("div",{className:"w-2 md:w-3.5 aspect-square absolute right-0 top-0 border-2 border-transparent border-t-(--fcolor) border-r-(--fcolor)"}),l=u.jsx("div",{className:"w-2 md:w-3.5 aspect-square absolute right-0 bottom-0 border-2 border-transparent border-b-(--fcolor) border-r-(--fcolor)"}),t[4]=s,t[5]=a,t[6]=o,t[7]=l):(s=t[4],a=t[5],o=t[6],l=t[7]);let c;return t[8]!==i||t[9]!==r?(c=u.jsxs("div",{className:i,children:[r,s,a,o,l]}),t[8]=i,t[9]=r,t[10]=c):c=t[10],c}function d4(t,e){return u.jsx(h4,{num:t},`num_${e}`)}async function p4(){const e=await(await fetch("https://api.llama.fi/tvl/zoo-finance")).json(),n=u4(e,2).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return console.info("TVL data:",n),`$${n}`}const m4="/partners/aethir.svg",g4="/partners/zerog.svg",v4="/partners/nodeops.png",x4="/partners/story.svg",_4="/partners/reppo.png",C4="/partners/bera.png",A4="/partners/filecoin.png",S4=[{name:"Aethir",icon:m4},{name:"0G",icon:g4},{name:"Story",icon:x4},{name:"Reppo",icon:_4},{name:"NodeOps",icon:v4},{name:"Berachain",icon:C4},{name:"Filecoin",icon:A4}];function M4(){const t=It.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx("div",{className:"flex flex-wrap items-center justify-center w-full gap-4 md:gap-5",children:S4.map(y4)}),t[0]=e):e=t[0],e}function y4(t){return u.jsxs("div",{className:"root_anim_item flex flex-1 text-[clamp(60px,6.5vw,100px)] h-[1em] min-w-[2.56em] md:min-w-[3em] max-w-[3.5em] gap-2 items-center justify-center rounded-[10px] shrink-0 border border-[#3E3E3E]",children:[u.jsx("img",{className:"h-[.4em] w-auto",src:t.icon}),u.jsx("span",{className:"text-[.24em] whitespace-nowrap",children:t.name})]},t.name)}const E4="/zoo_gif1.mp4",w4="/zoo_gif2.mp4",T4="/zoo_gif3.mp4",b4="/zoo_gif4.mp4";function Zi(t){const e=It.c(8),{className:n,hPosition:i}=t;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={filter:"blur(250px)",background:"linear-gradient(-180deg, #FFFFFF -21.27%, #21EA65 58.91%)"},e[0]=r):r=e[0];const s=i==="l",a=i==="r",o=i==="c";let l;e[1]!==n||e[2]!==s||e[3]!==a||e[4]!==o?(l=nr("w-[clamp(260px,55vw,800px)] aspect-square bg-[url(/lg-bg.svg)] md:opacity-40",{"mr-auto -translate-x-1/3 md:-translate-x-1/2":s,"ml-auto translate-x-1/3 md:translate-x-1/2":a,"mx-auto":o},n),e[1]=n,e[2]=s,e[3]=a,e[4]=o,e[5]=l):l=e[5];let c;return e[6]!==l?(c=u.jsx("div",{style:r,className:l}),e[6]=l,e[7]=c):c=e[7],c}function L4(){const t=It.c(2);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx(Zi,{hPosition:"r",className:"absolute right-0 top-0 md:translate-1/4"}),t[0]=e):e=t[0];let n;return t[1]===Symbol.for("react.memo_cache_sentinel")?(n=u.jsxs("div",{className:"flex justify-center w-full h-full pointer-events-none absolute left-0 top-0 z-10 pt-[130vh]",children:[e,u.jsxs("div",{className:"w-full flex flex-col max-w-380 px-4 gap-40 md:gap-100 ",children:[u.jsx(Zi,{hPosition:"c",className:"hidden md:block"}),u.jsx(Zi,{hPosition:"l",className:"mt-[270vw] md:mt-0"}),u.jsx(Zi,{hPosition:"r"}),u.jsx(Zi,{hPosition:"l",className:"md:-mt-100 md:-translate-y-1/2"})]})]}),t[1]=n):n=t[1],n}const R4={four:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[4726273,13333557,14440960],rightCars:[85027,580507,3311700,8714417],sticks:8648624}}};function Hr(t){const e=It.c(8),{children:n}=t;let i,r,s,a,o,l;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=u.jsx("div",{className:"absolute left-0 top-0 w-full h-full border border-[#38484A] "}),r=u.jsx("div",{className:"w-2.5 aspect-square absolute left-0 top-0 border border-transparent border-t-(--fcolor) border-l-(--fcolor)"}),s=u.jsx("div",{className:"w-2.5 aspect-square absolute left-0 bottom-0 border border-transparent border-b-(--fcolor) border-l-(--fcolor)"}),a=u.jsx("div",{className:"w-2.5 aspect-square absolute right-0 top-0 border border-transparent border-t-(--fcolor) border-r-(--fcolor)"}),o=u.jsx("div",{className:"w-2.5 aspect-square absolute right-0 bottom-0 border border-transparent border-b-(--fcolor) border-r-(--fcolor)"}),l={background:"radial-gradient(50% 120.52% at 50% 5.22%, #FFFFFF 48.91%, rgba(255, 255, 255, 0.5) 100%)",backgroundClip:"text"},e[0]=i,e[1]=r,e[2]=s,e[3]=a,e[4]=o,e[5]=l):(i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5]);let c;return e[6]!==n?(c=u.jsxs("div",{className:"root_anim_item relative p-5  flex items-center justify-center [--fcolor:#D9D9D9]",children:[i,r,s,a,o,u.jsx("div",{style:l,className:"w-fit leading-none text-transparent text-[clamp(20px,3.55vw,54px)] font-medium",children:n})]}),e[6]=n,e[7]=c):c=e[7],c}function Il(){const t=It.c(9),[e,n]=h2(),{width:i}=n,r=Math.floor(i/10);let s;t[0]!==r?(s=c4(r),t[0]=r,t[1]=s):s=t[1];const a=s;let o;if(t[2]!==a){let c;t[4]!==a.length?(c=h=>u.jsx("div",{className:nr("w-px h-full shrink-0 bg-[#38484A]",{"opacity-60":Math.floor(h/(a.length/5))%2==0})},h),t[4]=a.length,t[5]=c):c=t[5],o=a.map(c),t[2]=a,t[3]=o}else o=t[3];let l;return t[6]!==e||t[7]!==o?(l=u.jsx("div",{ref:e,className:"root_anim_item flex h-9 w-full justify-between",children:o}),t[6]=e,t[7]=o,t[8]=l):l=t[8],l}function Ul(t){const e=It.c(3),{children:n}=t;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i={border:"1px solid",borderImageSource:"linear-gradient(180deg, #4EEB7E 0%, #006D21 100%)",borderImageWidth:1,borderImageSlice:1,backdropFilter:"blur(12px)",boxShadow:"0px 0px 20px 0px #4CE54F66,0px 0px 40px 0px #32D65233 inset",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(102, 102, 102, 0.1) 100%)"},e[0]=i):i=e[0];let r;return e[1]!==n?(r=u.jsx("div",{style:i,className:"root_anim_item flex flex-col p-4 md:py-8 items-center gap-4 w-full",children:n}),e[1]=n,e[2]=r):r=e[2],r}function kr(t){const e=It.c(28);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=nr("root_anim_item flex flex-col items-center gap-8 md:flex-row w-full md:h-[clamp(200px,26.3vw,400px)]"),e[0]=n):n=e[0];let i;e[1]===Symbol.for("react.memo_cache_sentinel")?(i={backgroundImage:"linear-gradient(180deg, #939393 0%, rgba(81, 81, 81, 0) 100%)"},e[1]=i):i=e[1];let r;e[2]!==t.num?(r=u.jsx("span",{style:i,className:"text-[1em] font-dmmono text-transparent bg-clip-text",children:t.num}),e[2]=t.num,e[3]=r):r=e[3];let s;e[4]!==t.tit?(s=u.jsx("div",{className:"text-[.5em] whitespace-nowrap",children:t.tit}),e[4]=t.tit,e[5]=s):s=e[5];let a;e[6]===Symbol.for("react.memo_cache_sentinel")?(a=u.jsx("div",{className:"relative h-px hidden md:block flex-1",style:{backgroundImage:"linear-gradient(270deg, #3E3E3E -2.78%, #FFFFFF 102.78%)"},children:u.jsx("div",{className:"w-[7px] aspect-square rounded-full bg-white absolute left-0 top-1/2 -translate-y-1/2"})}),e[6]=a):a=e[6];let o;e[7]!==s?(o=u.jsxs("div",{className:"flex gap-4 items-center flex-1",children:[s,a]}),e[7]=s,e[8]=o):o=e[8];let l;e[9]!==t.sub?(l=u.jsx("div",{className:"text-[.285em] opacity-60",children:t.sub}),e[9]=t.sub,e[10]=l):l=e[10];let c;e[11]!==o||e[12]!==l?(c=u.jsxs("div",{className:"flex flex-col gap-[.12em] flex-1 w-50 md:w-max",children:[o,l]}),e[11]=o,e[12]=l,e[13]=c):c=e[13];let h;e[14]!==r||e[15]!==c?(h=u.jsxs("div",{className:"text-[clamp(46px,5.5vw,84px)] flex gap-[.12em] leading-none flex-1",children:[r,c]}),e[14]=r,e[15]=c,e[16]=h):h=e[16];const f=t.num=="01"||t.num=="03";let d;e[17]!==f?(d=nr("md:rounded-full overflow-hidden w-[clamp(300px,39vw,600px)]",{"md:mr-[clamp(160px,21vw,320px)]":f}),e[17]=f,e[18]=d):d=e[18];const p=t.src;let v;e[19]===Symbol.for("react.memo_cache_sentinel")?(v=nr("w-full h-auto"),e[19]=v):v=e[19];let x;e[20]!==t.src?(x=u.jsx("video",{src:p,className:v,muted:!0,loop:!0,autoPlay:!0}),e[20]=t.src,e[21]=x):x=e[21];let g;e[22]!==d||e[23]!==x?(g=u.jsx("div",{className:d,children:x}),e[22]=d,e[23]=x,e[24]=g):g=e[24];let m;return e[25]!==g||e[26]!==h?(m=u.jsxs("div",{className:n,children:[h,g]}),e[25]=g,e[26]=h,e[27]=m):m=e[27],m}function P4(){const t=It.c(16);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=u.jsx(L4,{}),t[0]=e):e=t[0];let n;t[1]===Symbol.for("react.memo_cache_sentinel")?(n=u.jsx(Gp,{effectOptions:R4.four}),t[1]=n):n=t[1];let i;t[2]===Symbol.for("react.memo_cache_sentinel")?(i={background:"linear-gradient(98.05deg, #1ECA53 6.94%, #FFFFFF 22.6%, #FFFFFF 82.21%, #1ECA53 97.66%)",backgroundClip:"text"},t[2]=i):i=t[2];let r,s;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=u.jsxs("div",{style:i,className:"root_anim_item w-fit text-transparent text-center font-semibold text-[clamp(36px,5.26vw,80px)]",children:["The Fuel to",u.jsx("br",{}),"Accelerate DeFi"]}),s=u.jsx("div",{className:"root_anim_item text-xl md:text-2xl font-parkinsans font-medium",children:"Instant Liquidity for Future Tokens"}),t[3]=r,t[4]=s):(r=t[3],s=t[4]);let a;t[5]===Symbol.for("react.memo_cache_sentinel")?(a=u.jsxs("section",{className:"relative h-dvh w-full flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]",children:[n,u.jsxs("div",{className:"absolute left-0 top-0 w-full min-h-full flex flex-col items-center text-center justify-center gap-5 leading-tight pt-40 pb-10",children:[r,s,u.jsx(Yc,{to:"https://app.zoofi.io",target:"_blank",className:"root_anim_item mt-auto md:mt-10 border border-white bg-white/5 backdrop-blur-lg flex justify-center items-center w-[255px] px-5 py-3.25 font-parkinsans font-medium text-2xl rounded-2xl overflow-hidden",children:"Launch App"})]})]}),t[5]=a):a=t[5];let o,l;t[6]===Symbol.for("react.memo_cache_sentinel")?(o=u.jsx(Hr,{children:"Total Liquidity Unlocked"}),l=u.jsx(Il,{}),t[6]=o,t[7]=l):(o=t[6],l=t[7]);let c;t[8]===Symbol.for("react.memo_cache_sentinel")?(c=u.jsx(Y2,{}),t[8]=c):c=t[8];let h;t[9]===Symbol.for("react.memo_cache_sentinel")?(h=u.jsxs("div",{className:"flex flex-col w-full",children:[o,l,u.jsxs("div",{className:"root_anim_item border border-[#38484A] w-full p-5 relative",children:[c,u.jsx("div",{className:"absolute w-full flex justify-center top-1/6 left-0",children:u.jsx(f4,{})})]})]}),t[9]=h):h=t[9];let f;t[10]===Symbol.for("react.memo_cache_sentinel")?(f=u.jsxs(Ul,{children:[u.jsx("div",{style:{background:"linear-gradient(90deg, #1C1C1C 0%, #000000 50%, #1C1C1C 100%)"},className:"rounded-full px-10 py-5 font-semibold text-[clamp(20px,2.1vw,32px)] leading-none",children:"Node NFTs"}),u.jsx("div",{className:"font-parkinsans text-xl text-center",children:"Turn future mining rewards into fully tradeable tokens instantly."}),u.jsx(l4,{})]}),t[10]=f):f=t[10];let d;t[11]===Symbol.for("react.memo_cache_sentinel")?(d=u.jsxs("section",{className:"w-full max-w-380 flex flex-col gap-5 md:gap-8 py-8 px-4",children:[h,u.jsxs("div",{className:"grid grid-cols-1 gap-5 md:gap-16 md:grid-cols-2",children:[f,u.jsxs(Ul,{children:[u.jsx("div",{style:{background:"linear-gradient(90deg, #1C1C1C 0%, #000000 50%, #1C1C1C 100%)"},className:"rounded-full px-10 py-5 font-semibold text-[clamp(20px,2.1vw,32px)] leading-none",children:"Locked Tokens"}),u.jsx("div",{className:"font-parkinsans text-xl text-center",children:"Still 48 months from unlock? Unlock liquidity today."}),u.jsx(o4,{})]})]})]}),t[11]=d):d=t[11];let p;t[12]===Symbol.for("react.memo_cache_sentinel")?(p=u.jsx(Hr,{children:"How it works"}),t[12]=p):p=t[12];let v;t[13]===Symbol.for("react.memo_cache_sentinel")?(v=u.jsxs("section",{className:"w-full max-w-380 flex flex-col gap-5 py-8 px-4",children:[p,u.jsxs("div",{className:"flex flex-col w-full pt-20",children:[u.jsx(kr,{num:"01",tit:"Deposit",sub:"Your future claim",src:w4}),u.jsx(kr,{num:"02",tit:"Instantly Receive",sub:"Equal amount of fully tradeable tokens",src:T4}),u.jsx(kr,{num:"03",tit:"Trade or Hold",sub:"Swap on DEX & Arbitrage",src:E4}),u.jsx(kr,{num:"04",tit:"Final Redemption",sub:"Real tokens unlock → 1:1 guaranteed redemption",src:b4})]})]}),t[13]=v):v=t[13];let x;t[14]===Symbol.for("react.memo_cache_sentinel")?(x=u.jsxs("section",{className:"w-full max-w-380 flex flex-col gap-5 md:gap-8 lg:gap-10 py-8 px-4",children:[u.jsx(Hr,{children:"Projects & Partners"}),u.jsx(M4,{})]}),t[14]=x):x=t[14];let g;return t[15]===Symbol.for("react.memo_cache_sentinel")?(g=u.jsxs("div",{className:"w-full overflow-hidden flex flex-col items-center bg-[url(/zoo_bg.svg)] bg-repeat relative",children:[e,a,d,v,x,u.jsxs("section",{className:"w-full max-w-380 flex flex-col py-8 px-4",children:[u.jsx(Hr,{children:"Investors & Backers"}),u.jsx(Il,{}),u.jsx(s4,{})]})]}),t[15]=g):g=t[15],g}export{P4 as component};
