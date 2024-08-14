(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9622],{61443:function(p,f,h){"use strict";h.d(f,{Z:function(){return er}});var m=h(50044),M=h(2265),I="right-scroll-bar-position",N="width-before-scroll-bar",Q=h(55835),U=(0,h(18427)._)(),nothing=function(){},q=M.forwardRef(function(p,f){var h=M.useRef(null),I=M.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),N=I[0],q=I[1],V=p.forwardProps,J=p.children,K=p.className,j=p.removeScrollBar,Y=p.enabled,G=p.shards,Z=p.sideCar,X=p.noIsolation,_=p.inert,$=p.allowPinchZoom,ee=p.as,et=void 0===ee?"div":ee,er=p.gapMode,en=(0,m.__rest)(p,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),eo=(0,Q.q)([h,f]),ei=(0,m.__assign)((0,m.__assign)({},en),N);return M.createElement(M.Fragment,null,Y&&M.createElement(Z,{sideCar:U,removeScrollBar:j,shards:G,noIsolation:X,inert:_,setCallbacks:q,allowPinchZoom:!!$,lockRef:h,gapMode:er}),V?M.cloneElement(M.Children.only(J),(0,m.__assign)((0,m.__assign)({},ei),{ref:eo})):M.createElement(et,(0,m.__assign)({},ei,{className:K,ref:eo}),J))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:N,zeroRight:I};var V=h(26898),J=h(98662),K={left:0,top:0,right:0,gap:0},parse=function(p){return parseInt(p||"",10)||0},getOffset=function(p){var f=window.getComputedStyle(document.body),h=f["padding"===p?"paddingLeft":"marginLeft"],m=f["padding"===p?"paddingTop":"marginTop"],M=f["padding"===p?"paddingRight":"marginRight"];return[parse(h),parse(m),parse(M)]},getGapWidth=function(p){if(void 0===p&&(p="margin"),"undefined"==typeof window)return K;var f=getOffset(p),h=document.documentElement.clientWidth,m=window.innerWidth;return{left:f[0],top:f[1],right:f[2],gap:Math.max(0,m-h+f[2]-f[0])}},j=(0,J.Ws)(),Y="data-scroll-locked",getStyles=function(p,f,h,m){var M=p.left,Q=p.top,U=p.right,q=p.gap;return void 0===h&&(h="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(m,";\n   padding-right: ").concat(q,"px ").concat(m,";\n  }\n  body[").concat(Y,"] {\n    overflow: hidden ").concat(m,";\n    overscroll-behavior: contain;\n    ").concat([f&&"position: relative ".concat(m,";"),"margin"===h&&"\n    padding-left: ".concat(M,"px;\n    padding-top: ").concat(Q,"px;\n    padding-right: ").concat(U,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(q,"px ").concat(m,";\n    "),"padding"===h&&"padding-right: ".concat(q,"px ").concat(m,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(I," {\n    right: ").concat(q,"px ").concat(m,";\n  }\n  \n  .").concat(N," {\n    margin-right: ").concat(q,"px ").concat(m,";\n  }\n  \n  .").concat(I," .").concat(I," {\n    right: 0 ").concat(m,";\n  }\n  \n  .").concat(N," .").concat(N," {\n    margin-right: 0 ").concat(m,";\n  }\n  \n  body[").concat(Y,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(q,"px;\n  }\n")},RemoveScrollBar=function(p){var f=p.noRelative,h=p.noImportant,m=p.gapMode,I=void 0===m?"margin":m,N=M.useMemo(function(){return getGapWidth(I)},[I]);return M.useEffect(function(){return document.body.setAttribute(Y,""),function(){document.body.removeAttribute(Y)}},[]),M.createElement(j,{styles:getStyles(N,!f,I,h?"":"!important")})},G=!1;if("undefined"!=typeof window)try{var Z=Object.defineProperty({},"passive",{get:function(){return G=!0,!0}});window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,Z)}catch(p){G=!1}var X=!!G&&{passive:!1},elementCanBeScrolled=function(p,f){var h=window.getComputedStyle(p);return"hidden"!==h[f]&&!(h.overflowY===h.overflowX&&"TEXTAREA"!==p.tagName&&"visible"===h[f])},locationCouldBeScrolled=function(p,f){var h=f.ownerDocument,m=f;do{if("undefined"!=typeof ShadowRoot&&m instanceof ShadowRoot&&(m=m.host),elementCouldBeScrolled(p,m)){var M=getScrollVariables(p,m);if(M[1]>M[2])return!0}m=m.parentNode}while(m&&m!==h.body);return!1},elementCouldBeScrolled=function(p,f){return"v"===p?elementCanBeScrolled(f,"overflowY"):elementCanBeScrolled(f,"overflowX")},getScrollVariables=function(p,f){return"v"===p?[f.scrollTop,f.scrollHeight,f.clientHeight]:[f.scrollLeft,f.scrollWidth,f.clientWidth]},handleScroll=function(p,f,h,m,M){var I,N=(I=window.getComputedStyle(f).direction,"h"===p&&"rtl"===I?-1:1),Q=N*m,U=h.target,q=f.contains(U),V=!1,J=Q>0,K=0,j=0;do{var Y=getScrollVariables(p,U),G=Y[0],Z=Y[1]-Y[2]-N*G;(G||Z)&&elementCouldBeScrolled(p,U)&&(K+=Z,j+=G),U=U instanceof ShadowRoot?U.host:U.parentNode}while(!q&&U!==document.body||q&&(f.contains(U)||f===U));return J&&(M&&1>Math.abs(K)||!M&&Q>K)?V=!0:!J&&(M&&1>Math.abs(j)||!M&&-Q>j)&&(V=!0),V},getTouchXY=function(p){return"changedTouches"in p?[p.changedTouches[0].clientX,p.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(p){return[p.deltaX,p.deltaY]},extractRef=function(p){return p&&"current"in p?p.current:p},_=0,$=[],ee=(0,V.L)(U,function(p){var f=M.useRef([]),h=M.useRef([0,0]),I=M.useRef(),N=M.useState(_++)[0],Q=M.useState(J.Ws)[0],U=M.useRef(p);M.useEffect(function(){U.current=p},[p]),M.useEffect(function(){if(p.inert){document.body.classList.add("block-interactivity-".concat(N));var f=(0,m.__spreadArray)([p.lockRef.current],(p.shards||[]).map(extractRef),!0).filter(Boolean);return f.forEach(function(p){return p.classList.add("allow-interactivity-".concat(N))}),function(){document.body.classList.remove("block-interactivity-".concat(N)),f.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(N))})}}},[p.inert,p.lockRef.current,p.shards]);var q=M.useCallback(function(p,f){if("touches"in p&&2===p.touches.length)return!U.current.allowPinchZoom;var m,M=getTouchXY(p),N=h.current,Q="deltaX"in p?p.deltaX:N[0]-M[0],q="deltaY"in p?p.deltaY:N[1]-M[1],V=p.target,J=Math.abs(Q)>Math.abs(q)?"h":"v";if("touches"in p&&"h"===J&&"range"===V.type)return!1;var K=locationCouldBeScrolled(J,V);if(!K)return!0;if(K?m=J:(m="v"===J?"h":"v",K=locationCouldBeScrolled(J,V)),!K)return!1;if(!I.current&&"changedTouches"in p&&(Q||q)&&(I.current=m),!m)return!0;var j=I.current||m;return handleScroll(j,f,p,"h"===j?Q:q,!0)},[]),V=M.useCallback(function(p){if($.length&&$[$.length-1]===Q){var h="deltaY"in p?getDeltaXY(p):getTouchXY(p),m=f.current.filter(function(f){var m;return f.name===p.type&&(f.target===p.target||p.target===f.shadowParent)&&(m=f.delta)[0]===h[0]&&m[1]===h[1]})[0];if(m&&m.should){p.cancelable&&p.preventDefault();return}if(!m){var M=(U.current.shards||[]).map(extractRef).filter(Boolean).filter(function(f){return f.contains(p.target)});(M.length>0?q(p,M[0]):!U.current.noIsolation)&&p.cancelable&&p.preventDefault()}}},[]),K=M.useCallback(function(p,h,m,M){var I={name:p,delta:h,target:m,should:M,shadowParent:function(p){for(var f=null;null!==p;)p instanceof ShadowRoot&&(f=p.host,p=p.host),p=p.parentNode;return f}(m)};f.current.push(I),setTimeout(function(){f.current=f.current.filter(function(p){return p!==I})},1)},[]),j=M.useCallback(function(p){h.current=getTouchXY(p),I.current=void 0},[]),Y=M.useCallback(function(f){K(f.type,getDeltaXY(f),f.target,q(f,p.lockRef.current))},[]),G=M.useCallback(function(f){K(f.type,getTouchXY(f),f.target,q(f,p.lockRef.current))},[]);M.useEffect(function(){return $.push(Q),p.setCallbacks({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:G}),document.addEventListener("wheel",V,X),document.addEventListener("touchmove",V,X),document.addEventListener("touchstart",j,X),function(){$=$.filter(function(p){return p!==Q}),document.removeEventListener("wheel",V,X),document.removeEventListener("touchmove",V,X),document.removeEventListener("touchstart",j,X)}},[]);var Z=p.removeScrollBar,ee=p.inert;return M.createElement(M.Fragment,null,ee?M.createElement(Q,{styles:"\n  .block-interactivity-".concat(N," {pointer-events: none;}\n  .allow-interactivity-").concat(N," {pointer-events: all;}\n")}):null,Z?M.createElement(RemoveScrollBar,{gapMode:p.gapMode}):null)}),et=M.forwardRef(function(p,f){return M.createElement(q,(0,m.__assign)({},p,{ref:f,sideCar:ee}))});et.classNames=q.classNames;var er=et},18821:function(p,f,h){"use strict";function vanilla_extract_private_esm_getVarName(p){var f=p.match(/^var\((.*)\)$/);return f?f[1]:p}function assignInlineVars(p,f){var h={};if("object"==typeof f)!function vanilla_extract_private_esm_walkObject(p,f){var h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],m=p.constructor();for(var M in p){var I=p[M],N=[...h,M];"string"==typeof I||"number"==typeof I||null==I?m[M]=f(I,N):"object"!=typeof I||Array.isArray(I)?console.warn('Skipping invalid key "'.concat(N.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(I)?"Array":typeof I,'"')):m[M]=vanilla_extract_private_esm_walkObject(I,f,N)}return m}(f,(f,m)=>{null!=f&&(h[vanilla_extract_private_esm_getVarName(function(p,f){var h=p;for(var m of f){if(!(m in h))throw Error("Path ".concat(f.join(" -> ")," does not exist in object"));h=h[m]}return h}(p,m))]=String(f))});else for(var m in p){var M=p[m];null!=M&&(h[vanilla_extract_private_esm_getVarName(m)]=M)}return Object.defineProperty(h,"toString",{value:function(){return Object.keys(this).map(p=>"".concat(p,":").concat(this[p])).join(";")},writable:!1}),h}h.d(f,{L:function(){return assignInlineVars}})},90751:function(p,f,h){"use strict";function ownKeys(p,f){var h=Object.keys(p);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(p);f&&(m=m.filter(function(f){return Object.getOwnPropertyDescriptor(p,f).enumerable})),h.push.apply(h,m)}return h}function _objectSpread2(p){for(var f=1;f<arguments.length;f++){var h=null!=arguments[f]?arguments[f]:{};f%2?ownKeys(Object(h),!0).forEach(function(f){!function(p,f,h){var m;(f="symbol"==typeof(m=function(p,f){if("object"!=typeof p||null===p)return p;var h=p[Symbol.toPrimitive];if(void 0!==h){var m=h.call(p,f||"default");if("object"!=typeof m)return m;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===f?String:Number)(p)}(f,"string"))?m:String(m))in p?Object.defineProperty(p,f,{value:h,enumerable:!0,configurable:!0,writable:!0}):p[f]=h}(p,f,h[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(h)):ownKeys(Object(h)).forEach(function(f){Object.defineProperty(p,f,Object.getOwnPropertyDescriptor(h,f))})}return p}h.d(f,{$:function(){return createSprinkles}});var createSprinkles_c8550e00_esm_createSprinkles=p=>function(){for(var f=arguments.length,h=Array(f),m=0;m<f;m++)h[m]=arguments[m];var M=Object.assign({},...h.map(p=>p.styles)),I=Object.keys(M),N=I.filter(p=>"mappings"in M[p]);return Object.assign(f=>{var h=[],m={},I=_objectSpread2({},f),Q=!1;for(var U of N){var q=f[U];if(null!=q)for(var V of(Q=!0,M[U].mappings))m[V]=q,null==I[V]&&delete I[V]}var J=Q?_objectSpread2(_objectSpread2({},m),I):f;for(var K in J)if("continue"===function(){var p=J[K],f=M[K];try{if(f.mappings)return"continue";if("string"==typeof p||"number"==typeof p)h.push(f.values[p].defaultClass);else if(Array.isArray(p))for(var m=0;m<p.length;m++){var I=p[m];if(null!=I){var N=f.responsiveArray[m];h.push(f.values[I].conditions[N])}}else for(var Q in p){var U=p[Q];null!=U&&h.push(f.values[U].conditions[Q])}}catch(p){throw p}}())continue;return p(h.join(" "))},{properties:new Set(I)})},composeStyles=p=>p,createSprinkles=function(){return createSprinkles_c8550e00_esm_createSprinkles(composeStyles)(...arguments)}},47714:function(p,f,h){"use strict";h.d(f,{d:function(){return createMapValueFn},M:function(){return createNormalizeValueFn}});var addRecipe=function(p,f){return Object.defineProperty(p,"__recipe__",{value:f,writable:!1}),p};function createNormalizeValueFn(p){var{conditions:f}=p;if(!f)throw Error("Styles have no conditions");return addRecipe(function(p){if("string"==typeof p||"number"==typeof p||"boolean"==typeof p){if(!f.defaultCondition)throw Error("No default condition");return{[f.defaultCondition]:p}}if(Array.isArray(p)){if(!("responsiveArray"in f))throw Error("Responsive arrays are not supported");var h={};for(var m in f.responsiveArray)null!=p[m]&&(h[f.responsiveArray[m]]=p[m]);return h}return p},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:p.conditions}]})}function createMapValueFn(p){var{conditions:f}=p;if(!f)throw Error("Styles have no conditions");var h=createNormalizeValueFn(p);return addRecipe(function(p,m){if("string"==typeof p||"number"==typeof p||"boolean"==typeof p){if(!f.defaultCondition)throw Error("No default condition");return m(p,f.defaultCondition)}var M=Array.isArray(p)?h(p):p,I={};for(var N in M)null!=M[N]&&(I[N]=m(M[N],N));return I},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:p.conditions}]})}},78343:function(p){"use strict";var f={single_source_shortest_paths:function(p,h,m){var M,I,N,Q,U,q,V,J={},K={};K[h]=0;var j=f.PriorityQueue.make();for(j.push(h,0);!j.empty();)for(N in I=(M=j.pop()).value,Q=M.cost,U=p[I]||{})U.hasOwnProperty(N)&&(q=Q+U[N],V=K[N],(void 0===K[N]||V>q)&&(K[N]=q,j.push(N,q),J[N]=I));if(void 0!==m&&void 0===K[m])throw Error(["Could not find a path from ",h," to ",m,"."].join(""));return J},extract_shortest_path_from_predecessor_list:function(p,f){for(var h=[],m=f;m;)h.push(m),p[m],m=p[m];return h.reverse(),h},find_path:function(p,h,m){var M=f.single_source_shortest_paths(p,h,m);return f.extract_shortest_path_from_predecessor_list(M,m)},PriorityQueue:{make:function(p){var h,m=f.PriorityQueue,M={};for(h in p=p||{},m)m.hasOwnProperty(h)&&(M[h]=m[h]);return M.queue=[],M.sorter=p.sorter||m.default_sorter,M},default_sorter:function(p,f){return p.cost-f.cost},push:function(p,f){this.queue.push({value:p,cost:f}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};p.exports=f},53216:function(p){"use strict";p.exports=function(p){for(var f=[],h=p.length,m=0;m<h;m++){var M=p.charCodeAt(m);if(M>=55296&&M<=56319&&h>m+1){var I=p.charCodeAt(m+1);I>=56320&&I<=57343&&(M=(M-55296)*1024+I-56320+65536,m+=1)}if(M<128){f.push(M);continue}if(M<2048){f.push(M>>6|192),f.push(63&M|128);continue}if(M<55296||M>=57344&&M<65536){f.push(M>>12|224),f.push(M>>6&63|128),f.push(63&M|128);continue}if(M>=65536&&M<=1114111){f.push(M>>18|240),f.push(M>>12&63|128),f.push(M>>6&63|128),f.push(63&M|128);continue}f.push(239,191,189)}return new Uint8Array(f).buffer}},75298:function(p,f,h){let m=h(47363),M=h(37621),I=h(46028),N=h(12330);function renderCanvas(p,f,h,I,N){let Q=[].slice.call(arguments,1),U=Q.length,q="function"==typeof Q[U-1];if(!q&&!m())throw Error("Callback required as last argument");if(q){if(U<2)throw Error("Too few arguments provided");2===U?(N=h,h=f,f=I=void 0):3===U&&(f.getContext&&void 0===N?(N=I,I=void 0):(N=I,I=h,h=f,f=void 0))}else{if(U<1)throw Error("Too few arguments provided");return 1===U?(h=f,f=I=void 0):2!==U||f.getContext||(I=h,h=f,f=void 0),new Promise(function(m,N){try{let N=M.create(h,I);m(p(N,f,I))}catch(p){N(p)}})}try{let m=M.create(h,I);N(null,p(m,f,I))}catch(p){N(p)}}f.create=M.create,f.toCanvas=renderCanvas.bind(null,I.render),f.toDataURL=renderCanvas.bind(null,I.renderToDataURL),f.toString=renderCanvas.bind(null,function(p,f,h){return N.render(p,h)})},47363:function(p){p.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(p,f,h){let m=h(13400).getSymbolSize;f.getRowColCoords=function(p){if(1===p)return[];let f=Math.floor(p/7)+2,h=m(p),M=145===h?26:2*Math.ceil((h-13)/(2*f-2)),I=[h-7];for(let p=1;p<f-1;p++)I[p]=I[p-1]-M;return I.push(6),I.reverse()},f.getPositions=function(p){let h=[],m=f.getRowColCoords(p),M=m.length;for(let p=0;p<M;p++)for(let f=0;f<M;f++)(0!==p||0!==f)&&(0!==p||f!==M-1)&&(p!==M-1||0!==f)&&h.push([m[p],m[f]]);return h}},77654:function(p,f,h){let m=h(37662),M=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(p){this.mode=m.ALPHANUMERIC,this.data=p}AlphanumericData.getBitsLength=function(p){return 11*Math.floor(p/2)+6*(p%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(p){let f;for(f=0;f+2<=this.data.length;f+=2){let h=45*M.indexOf(this.data[f]);h+=M.indexOf(this.data[f+1]),p.put(h,11)}this.data.length%2&&p.put(M.indexOf(this.data[f]),6)},p.exports=AlphanumericData},41904:function(p){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(p){return(this.buffer[Math.floor(p/8)]>>>7-p%8&1)==1},put:function(p,f){for(let h=0;h<f;h++)this.putBit((p>>>f-h-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(p){let f=Math.floor(this.length/8);this.buffer.length<=f&&this.buffer.push(0),p&&(this.buffer[f]|=128>>>this.length%8),this.length++}},p.exports=BitBuffer},21091:function(p){function BitMatrix(p){if(!p||p<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=p,this.data=new Uint8Array(p*p),this.reservedBit=new Uint8Array(p*p)}BitMatrix.prototype.set=function(p,f,h,m){let M=p*this.size+f;this.data[M]=h,m&&(this.reservedBit[M]=!0)},BitMatrix.prototype.get=function(p,f){return this.data[p*this.size+f]},BitMatrix.prototype.xor=function(p,f,h){this.data[p*this.size+f]^=h},BitMatrix.prototype.isReserved=function(p,f){return this.reservedBit[p*this.size+f]},p.exports=BitMatrix},90690:function(p,f,h){let m=h(53216),M=h(37662);function ByteData(p){this.mode=M.BYTE,"string"==typeof p&&(p=m(p)),this.data=new Uint8Array(p)}ByteData.getBitsLength=function(p){return 8*p},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(p){for(let f=0,h=this.data.length;f<h;f++)p.put(this.data[f],8)},p.exports=ByteData},37039:function(p,f,h){let m=h(9406),M=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],I=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];f.getBlocksCount=function(p,f){switch(f){case m.L:return M[(p-1)*4+0];case m.M:return M[(p-1)*4+1];case m.Q:return M[(p-1)*4+2];case m.H:return M[(p-1)*4+3];default:return}},f.getTotalCodewordsCount=function(p,f){switch(f){case m.L:return I[(p-1)*4+0];case m.M:return I[(p-1)*4+1];case m.Q:return I[(p-1)*4+2];case m.H:return I[(p-1)*4+3];default:return}}},9406:function(p,f){f.L={bit:1},f.M={bit:0},f.Q={bit:3},f.H={bit:2},f.isValid=function(p){return p&&void 0!==p.bit&&p.bit>=0&&p.bit<4},f.from=function(p,h){if(f.isValid(p))return p;try{return function(p){if("string"!=typeof p)throw Error("Param is not a string");let h=p.toLowerCase();switch(h){case"l":case"low":return f.L;case"m":case"medium":return f.M;case"q":case"quartile":return f.Q;case"h":case"high":return f.H;default:throw Error("Unknown EC Level: "+p)}}(p)}catch(p){return h}}},78241:function(p,f,h){let m=h(13400).getSymbolSize;f.getPositions=function(p){let f=m(p);return[[0,0],[f-7,0],[0,f-7]]}},50237:function(p,f,h){let m=h(13400),M=m.getBCHDigit(1335);f.getEncodedBits=function(p,f){let h=p.bit<<3|f,I=h<<10;for(;m.getBCHDigit(I)-M>=0;)I^=1335<<m.getBCHDigit(I)-M;return(h<<10|I)^21522}},51309:function(p,f){let h=new Uint8Array(512),m=new Uint8Array(256);!function(){let p=1;for(let f=0;f<255;f++)h[f]=p,m[p]=f,256&(p<<=1)&&(p^=285);for(let p=255;p<512;p++)h[p]=h[p-255]}(),f.log=function(p){if(p<1)throw Error("log("+p+")");return m[p]},f.exp=function(p){return h[p]},f.mul=function(p,f){return 0===p||0===f?0:h[m[p]+m[f]]}},69592:function(p,f,h){let m=h(37662),M=h(13400);function KanjiData(p){this.mode=m.KANJI,this.data=p}KanjiData.getBitsLength=function(p){return 13*p},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(p){let f;for(f=0;f<this.data.length;f++){let h=M.toSJIS(this.data[f]);if(h>=33088&&h<=40956)h-=33088;else if(h>=57408&&h<=60351)h-=49472;else throw Error("Invalid SJIS character: "+this.data[f]+"\nMake sure your charset is UTF-8");h=(h>>>8&255)*192+(255&h),p.put(h,13)}},p.exports=KanjiData},68334:function(p,f){f.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let h={N1:3,N2:3,N3:40,N4:10};f.isValid=function(p){return null!=p&&""!==p&&!isNaN(p)&&p>=0&&p<=7},f.from=function(p){return f.isValid(p)?parseInt(p,10):void 0},f.getPenaltyN1=function(p){let f=p.size,m=0,M=0,I=0,N=null,Q=null;for(let U=0;U<f;U++){M=I=0,N=Q=null;for(let q=0;q<f;q++){let f=p.get(U,q);f===N?M++:(M>=5&&(m+=h.N1+(M-5)),N=f,M=1),(f=p.get(q,U))===Q?I++:(I>=5&&(m+=h.N1+(I-5)),Q=f,I=1)}M>=5&&(m+=h.N1+(M-5)),I>=5&&(m+=h.N1+(I-5))}return m},f.getPenaltyN2=function(p){let f=p.size,m=0;for(let h=0;h<f-1;h++)for(let M=0;M<f-1;M++){let f=p.get(h,M)+p.get(h,M+1)+p.get(h+1,M)+p.get(h+1,M+1);(4===f||0===f)&&m++}return m*h.N2},f.getPenaltyN3=function(p){let f=p.size,m=0,M=0,I=0;for(let h=0;h<f;h++){M=I=0;for(let N=0;N<f;N++)M=M<<1&2047|p.get(h,N),N>=10&&(1488===M||93===M)&&m++,I=I<<1&2047|p.get(N,h),N>=10&&(1488===I||93===I)&&m++}return m*h.N3},f.getPenaltyN4=function(p){let f=0,m=p.data.length;for(let h=0;h<m;h++)f+=p.data[h];let M=Math.abs(Math.ceil(100*f/m/5)-10);return M*h.N4},f.applyMask=function(p,h){let m=h.size;for(let M=0;M<m;M++)for(let I=0;I<m;I++)h.isReserved(I,M)||h.xor(I,M,function(p,h,m){switch(p){case f.Patterns.PATTERN000:return(h+m)%2==0;case f.Patterns.PATTERN001:return h%2==0;case f.Patterns.PATTERN010:return m%3==0;case f.Patterns.PATTERN011:return(h+m)%3==0;case f.Patterns.PATTERN100:return(Math.floor(h/2)+Math.floor(m/3))%2==0;case f.Patterns.PATTERN101:return h*m%2+h*m%3==0;case f.Patterns.PATTERN110:return(h*m%2+h*m%3)%2==0;case f.Patterns.PATTERN111:return(h*m%3+(h+m)%2)%2==0;default:throw Error("bad maskPattern:"+p)}}(p,I,M))},f.getBestMask=function(p,h){let m=Object.keys(f.Patterns).length,M=0,I=1/0;for(let N=0;N<m;N++){h(N),f.applyMask(N,p);let m=f.getPenaltyN1(p)+f.getPenaltyN2(p)+f.getPenaltyN3(p)+f.getPenaltyN4(p);f.applyMask(N,p),m<I&&(I=m,M=N)}return M}},37662:function(p,f,h){let m=h(64956),M=h(66579);f.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},f.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},f.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},f.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},f.MIXED={bit:-1},f.getCharCountIndicator=function(p,f){if(!p.ccBits)throw Error("Invalid mode: "+p);if(!m.isValid(f))throw Error("Invalid version: "+f);return f>=1&&f<10?p.ccBits[0]:f<27?p.ccBits[1]:p.ccBits[2]},f.getBestModeForData=function(p){return M.testNumeric(p)?f.NUMERIC:M.testAlphanumeric(p)?f.ALPHANUMERIC:M.testKanji(p)?f.KANJI:f.BYTE},f.toString=function(p){if(p&&p.id)return p.id;throw Error("Invalid mode")},f.isValid=function(p){return p&&p.bit&&p.ccBits},f.from=function(p,h){if(f.isValid(p))return p;try{return function(p){if("string"!=typeof p)throw Error("Param is not a string");let h=p.toLowerCase();switch(h){case"numeric":return f.NUMERIC;case"alphanumeric":return f.ALPHANUMERIC;case"kanji":return f.KANJI;case"byte":return f.BYTE;default:throw Error("Unknown mode: "+p)}}(p)}catch(p){return h}}},10894:function(p,f,h){let m=h(37662);function NumericData(p){this.mode=m.NUMERIC,this.data=p.toString()}NumericData.getBitsLength=function(p){return 10*Math.floor(p/3)+(p%3?p%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(p){let f,h;for(f=0;f+3<=this.data.length;f+=3)h=parseInt(this.data.substr(f,3),10),p.put(h,10);let m=this.data.length-f;m>0&&(h=parseInt(this.data.substr(f),10),p.put(h,3*m+1))},p.exports=NumericData},25153:function(p,f,h){let m=h(51309);f.mul=function(p,f){let h=new Uint8Array(p.length+f.length-1);for(let M=0;M<p.length;M++)for(let I=0;I<f.length;I++)h[M+I]^=m.mul(p[M],f[I]);return h},f.mod=function(p,f){let h=new Uint8Array(p);for(;h.length-f.length>=0;){let p=h[0];for(let M=0;M<f.length;M++)h[M]^=m.mul(f[M],p);let M=0;for(;M<h.length&&0===h[M];)M++;h=h.slice(M)}return h},f.generateECPolynomial=function(p){let h=new Uint8Array([1]);for(let M=0;M<p;M++)h=f.mul(h,new Uint8Array([1,m.exp(M)]));return h}},37621:function(p,f,h){let m=h(13400),M=h(9406),I=h(41904),N=h(21091),Q=h(8177),U=h(78241),q=h(68334),V=h(37039),J=h(9936),K=h(48670),j=h(50237),Y=h(37662),G=h(25082);function setupFormatInfo(p,f,h){let m,M;let I=p.size,N=j.getEncodedBits(f,h);for(m=0;m<15;m++)M=(N>>m&1)==1,m<6?p.set(m,8,M,!0):m<8?p.set(m+1,8,M,!0):p.set(I-15+m,8,M,!0),m<8?p.set(8,I-m-1,M,!0):m<9?p.set(8,15-m-1+1,M,!0):p.set(8,15-m-1,M,!0);p.set(I-8,8,1,!0)}f.create=function(p,f){let h,j;if(void 0===p||""===p)throw Error("No input text");let Z=M.M;return void 0!==f&&(Z=M.from(f.errorCorrectionLevel,M.M),h=K.from(f.version),j=q.from(f.maskPattern),f.toSJISFunc&&m.setToSJISFunction(f.toSJISFunc)),function(p,f,h,M){let j;if(Array.isArray(p))j=G.fromArray(p);else if("string"==typeof p){let m=f;if(!m){let f=G.rawSplit(p);m=K.getBestVersionForData(f,h)}j=G.fromString(p,m||40)}else throw Error("Invalid data");let Z=K.getBestVersionForData(j,h);if(!Z)throw Error("The amount of data is too big to be stored in a QR Code");if(f){if(f<Z)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+Z+".\n")}else f=Z;let X=function(p,f,h){let M=new I;h.forEach(function(f){M.put(f.mode.bit,4),M.put(f.getLength(),Y.getCharCountIndicator(f.mode,p)),f.write(M)});let N=m.getSymbolTotalCodewords(p),Q=V.getTotalCodewordsCount(p,f),U=(N-Q)*8;for(M.getLengthInBits()+4<=U&&M.put(0,4);M.getLengthInBits()%8!=0;)M.putBit(0);let q=(U-M.getLengthInBits())/8;for(let p=0;p<q;p++)M.put(p%2?17:236,8);return function(p,f,h){let M,I;let N=m.getSymbolTotalCodewords(f),Q=V.getTotalCodewordsCount(f,h),U=N-Q,q=V.getBlocksCount(f,h),K=N%q,j=q-K,Y=Math.floor(N/q),G=Math.floor(U/q),Z=G+1,X=Y-G,_=new J(X),$=0,ee=Array(q),et=Array(q),er=0,en=new Uint8Array(p.buffer);for(let p=0;p<q;p++){let f=p<j?G:Z;ee[p]=en.slice($,$+f),et[p]=_.encode(ee[p]),$+=f,er=Math.max(er,f)}let eo=new Uint8Array(N),ei=0;for(M=0;M<er;M++)for(I=0;I<q;I++)M<ee[I].length&&(eo[ei++]=ee[I][M]);for(M=0;M<X;M++)for(I=0;I<q;I++)eo[ei++]=et[I][M];return eo}(M,p,f)}(f,h,j),_=m.getSymbolSize(f),$=new N(_);return function(p,f){let h=p.size,m=U.getPositions(f);for(let f=0;f<m.length;f++){let M=m[f][0],I=m[f][1];for(let f=-1;f<=7;f++)if(!(M+f<=-1)&&!(h<=M+f))for(let m=-1;m<=7;m++)I+m<=-1||h<=I+m||(f>=0&&f<=6&&(0===m||6===m)||m>=0&&m<=6&&(0===f||6===f)||f>=2&&f<=4&&m>=2&&m<=4?p.set(M+f,I+m,!0,!0):p.set(M+f,I+m,!1,!0))}}($,f),function(p){let f=p.size;for(let h=8;h<f-8;h++){let f=h%2==0;p.set(h,6,f,!0),p.set(6,h,f,!0)}}($),function(p,f){let h=Q.getPositions(f);for(let f=0;f<h.length;f++){let m=h[f][0],M=h[f][1];for(let f=-2;f<=2;f++)for(let h=-2;h<=2;h++)-2===f||2===f||-2===h||2===h||0===f&&0===h?p.set(m+f,M+h,!0,!0):p.set(m+f,M+h,!1,!0)}}($,f),setupFormatInfo($,h,0),f>=7&&function(p,f){let h,m,M;let I=p.size,N=K.getEncodedBits(f);for(let f=0;f<18;f++)h=Math.floor(f/3),m=f%3+I-8-3,M=(N>>f&1)==1,p.set(h,m,M,!0),p.set(m,h,M,!0)}($,f),function(p,f){let h=p.size,m=-1,M=h-1,I=7,N=0;for(let Q=h-1;Q>0;Q-=2)for(6===Q&&Q--;;){for(let h=0;h<2;h++)if(!p.isReserved(M,Q-h)){let m=!1;N<f.length&&(m=(f[N]>>>I&1)==1),p.set(M,Q-h,m),-1==--I&&(N++,I=7)}if((M+=m)<0||h<=M){M-=m,m=-m;break}}}($,X),isNaN(M)&&(M=q.getBestMask($,setupFormatInfo.bind(null,$,h))),q.applyMask(M,$),setupFormatInfo($,h,M),{modules:$,version:f,errorCorrectionLevel:h,maskPattern:M,segments:j}}(p,h,Z,j)}},9936:function(p,f,h){let m=h(25153);function ReedSolomonEncoder(p){this.genPoly=void 0,this.degree=p,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(p){this.degree=p,this.genPoly=m.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(p){if(!this.genPoly)throw Error("Encoder not initialized");let f=new Uint8Array(p.length+this.degree);f.set(p);let h=m.mod(f,this.genPoly),M=this.degree-h.length;if(M>0){let p=new Uint8Array(this.degree);return p.set(h,M),p}return h},p.exports=ReedSolomonEncoder},66579:function(p,f){let h="[0-9]+",m="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";m=m.replace(/u/g,"\\u");let M="(?:(?![A-Z0-9 $%*+\\-./:]|"+m+")(?:.|[\r\n]))+";f.KANJI=RegExp(m,"g"),f.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),f.BYTE=RegExp(M,"g"),f.NUMERIC=RegExp(h,"g"),f.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let I=RegExp("^"+m+"$"),N=RegExp("^"+h+"$"),Q=RegExp("^[A-Z0-9 $%*+\\-./:]+$");f.testKanji=function(p){return I.test(p)},f.testNumeric=function(p){return N.test(p)},f.testAlphanumeric=function(p){return Q.test(p)}},25082:function(p,f,h){let m=h(37662),M=h(10894),I=h(77654),N=h(90690),Q=h(69592),U=h(66579),q=h(13400),V=h(78343);function getStringByteLength(p){return unescape(encodeURIComponent(p)).length}function getSegments(p,f,h){let m;let M=[];for(;null!==(m=p.exec(h));)M.push({data:m[0],index:m.index,mode:f,length:m[0].length});return M}function getSegmentsFromString(p){let f,h;let M=getSegments(U.NUMERIC,m.NUMERIC,p),I=getSegments(U.ALPHANUMERIC,m.ALPHANUMERIC,p);q.isKanjiModeEnabled()?(f=getSegments(U.BYTE,m.BYTE,p),h=getSegments(U.KANJI,m.KANJI,p)):(f=getSegments(U.BYTE_KANJI,m.BYTE,p),h=[]);let N=M.concat(I,f,h);return N.sort(function(p,f){return p.index-f.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function getSegmentBitsLength(p,f){switch(f){case m.NUMERIC:return M.getBitsLength(p);case m.ALPHANUMERIC:return I.getBitsLength(p);case m.KANJI:return Q.getBitsLength(p);case m.BYTE:return N.getBitsLength(p)}}function buildSingleSegment(p,f){let h;let U=m.getBestModeForData(p);if((h=m.from(f,U))!==m.BYTE&&h.bit<U.bit)throw Error('"'+p+'" cannot be encoded with mode '+m.toString(h)+".\n Suggested mode is: "+m.toString(U));switch(h!==m.KANJI||q.isKanjiModeEnabled()||(h=m.BYTE),h){case m.NUMERIC:return new M(p);case m.ALPHANUMERIC:return new I(p);case m.KANJI:return new Q(p);case m.BYTE:return new N(p)}}f.fromArray=function(p){return p.reduce(function(p,f){return"string"==typeof f?p.push(buildSingleSegment(f,null)):f.data&&p.push(buildSingleSegment(f.data,f.mode)),p},[])},f.fromString=function(p,h){let M=getSegmentsFromString(p,q.isKanjiModeEnabled()),I=function(p){let f=[];for(let h=0;h<p.length;h++){let M=p[h];switch(M.mode){case m.NUMERIC:f.push([M,{data:M.data,mode:m.ALPHANUMERIC,length:M.length},{data:M.data,mode:m.BYTE,length:M.length}]);break;case m.ALPHANUMERIC:f.push([M,{data:M.data,mode:m.BYTE,length:M.length}]);break;case m.KANJI:f.push([M,{data:M.data,mode:m.BYTE,length:getStringByteLength(M.data)}]);break;case m.BYTE:f.push([{data:M.data,mode:m.BYTE,length:getStringByteLength(M.data)}])}}return f}(M),N=function(p,f){let h={},M={start:{}},I=["start"];for(let N=0;N<p.length;N++){let Q=p[N],U=[];for(let p=0;p<Q.length;p++){let q=Q[p],V=""+N+p;U.push(V),h[V]={node:q,lastCount:0},M[V]={};for(let p=0;p<I.length;p++){let N=I[p];h[N]&&h[N].node.mode===q.mode?(M[N][V]=getSegmentBitsLength(h[N].lastCount+q.length,q.mode)-getSegmentBitsLength(h[N].lastCount,q.mode),h[N].lastCount+=q.length):(h[N]&&(h[N].lastCount=q.length),M[N][V]=getSegmentBitsLength(q.length,q.mode)+4+m.getCharCountIndicator(q.mode,f))}}I=U}for(let p=0;p<I.length;p++)M[I[p]].end=0;return{map:M,table:h}}(I,h),Q=V.find_path(N.map,"start","end"),U=[];for(let p=1;p<Q.length-1;p++)U.push(N.table[Q[p]].node);return f.fromArray(U.reduce(function(p,f){let h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===f.mode?p[p.length-1].data+=f.data:p.push(f),p},[]))},f.rawSplit=function(p){return f.fromArray(getSegmentsFromString(p,q.isKanjiModeEnabled()))}},13400:function(p,f){let h;let m=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];f.getSymbolSize=function(p){if(!p)throw Error('"version" cannot be null or undefined');if(p<1||p>40)throw Error('"version" should be in range from 1 to 40');return 4*p+17},f.getSymbolTotalCodewords=function(p){return m[p]},f.getBCHDigit=function(p){let f=0;for(;0!==p;)f++,p>>>=1;return f},f.setToSJISFunction=function(p){if("function"!=typeof p)throw Error('"toSJISFunc" is not a valid function.');h=p},f.isKanjiModeEnabled=function(){return void 0!==h},f.toSJIS=function(p){return h(p)}},64956:function(p,f){f.isValid=function(p){return!isNaN(p)&&p>=1&&p<=40}},48670:function(p,f,h){let m=h(13400),M=h(37039),I=h(9406),N=h(37662),Q=h(64956),U=m.getBCHDigit(7973);function getReservedBitsCount(p,f){return N.getCharCountIndicator(p,f)+4}f.from=function(p,f){return Q.isValid(p)?parseInt(p,10):f},f.getCapacity=function(p,f,h){if(!Q.isValid(p))throw Error("Invalid QR Code version");void 0===h&&(h=N.BYTE);let I=m.getSymbolTotalCodewords(p),U=M.getTotalCodewordsCount(p,f),q=(I-U)*8;if(h===N.MIXED)return q;let V=q-getReservedBitsCount(h,p);switch(h){case N.NUMERIC:return Math.floor(V/10*3);case N.ALPHANUMERIC:return Math.floor(V/11*2);case N.KANJI:return Math.floor(V/13);case N.BYTE:default:return Math.floor(V/8)}},f.getBestVersionForData=function(p,h){let m;let M=I.from(h,I.M);if(Array.isArray(p)){if(p.length>1)return function(p,h){for(let m=1;m<=40;m++){let M=function(p,f){let h=0;return p.forEach(function(p){let m=getReservedBitsCount(p.mode,f);h+=m+p.getBitsLength()}),h}(p,m);if(M<=f.getCapacity(m,h,N.MIXED))return m}}(p,M);if(0===p.length)return 1;m=p[0]}else m=p;return function(p,h,m){for(let M=1;M<=40;M++)if(h<=f.getCapacity(M,m,p))return M}(m.mode,m.getLength(),M)},f.getEncodedBits=function(p){if(!Q.isValid(p)||p<7)throw Error("Invalid QR Code version");let f=p<<12;for(;m.getBCHDigit(f)-U>=0;)f^=7973<<m.getBCHDigit(f)-U;return p<<12|f}},46028:function(p,f,h){let m=h(10544);f.render=function(p,f,h){var M;let I=h,N=f;void 0!==I||f&&f.getContext||(I=f,f=void 0),f||(N=function(){try{return document.createElement("canvas")}catch(p){throw Error("You need to specify a canvas element")}}()),I=m.getOptions(I);let Q=m.getImageWidth(p.modules.size,I),U=N.getContext("2d"),q=U.createImageData(Q,Q);return m.qrToImageData(q.data,p,I),M=N,U.clearRect(0,0,M.width,M.height),M.style||(M.style={}),M.height=Q,M.width=Q,M.style.height=Q+"px",M.style.width=Q+"px",U.putImageData(q,0,0),N},f.renderToDataURL=function(p,h,m){let M=m;void 0!==M||h&&h.getContext||(M=h,h=void 0),M||(M={});let I=f.render(p,h,M),N=M.type||"image/png",Q=M.rendererOpts||{};return I.toDataURL(N,Q.quality)}},12330:function(p,f,h){let m=h(10544);function getColorAttrib(p,f){let h=p.a/255,m=f+'="'+p.hex+'"';return h<1?m+" "+f+'-opacity="'+h.toFixed(2).slice(1)+'"':m}function svgCmd(p,f,h){let m=p+f;return void 0!==h&&(m+=" "+h),m}f.render=function(p,f,h){let M=m.getOptions(f),I=p.modules.size,N=p.modules.data,Q=I+2*M.margin,U=M.color.light.a?"<path "+getColorAttrib(M.color.light,"fill")+' d="M0 0h'+Q+"v"+Q+'H0z"/>':"",q="<path "+getColorAttrib(M.color.dark,"stroke")+' d="'+function(p,f,h){let m="",M=0,I=!1,N=0;for(let Q=0;Q<p.length;Q++){let U=Math.floor(Q%f),q=Math.floor(Q/f);U||I||(I=!0),p[Q]?(N++,Q>0&&U>0&&p[Q-1]||(m+=I?svgCmd("M",U+h,.5+q+h):svgCmd("m",M,0),M=0,I=!1),U+1<f&&p[Q+1]||(m+=svgCmd("h",N),N=0)):M++}return m}(N,I,M.margin)+'"/>',V=M.width?'width="'+M.width+'" height="'+M.width+'" ':"",J='<svg xmlns="http://www.w3.org/2000/svg" '+V+('viewBox="0 0 '+Q)+" "+Q+'" shape-rendering="crispEdges">'+U+q+"</svg>\n";return"function"==typeof h&&h(null,J),J}},10544:function(p,f){function hex2rgba(p){if("number"==typeof p&&(p=p.toString()),"string"!=typeof p)throw Error("Color should be defined as hex string");let f=p.slice().replace("#","").split("");if(f.length<3||5===f.length||f.length>8)throw Error("Invalid hex color: "+p);(3===f.length||4===f.length)&&(f=Array.prototype.concat.apply([],f.map(function(p){return[p,p]}))),6===f.length&&f.push("F","F");let h=parseInt(f.join(""),16);return{r:h>>24&255,g:h>>16&255,b:h>>8&255,a:255&h,hex:"#"+f.slice(0,6).join("")}}f.getOptions=function(p){p||(p={}),p.color||(p.color={});let f=void 0===p.margin||null===p.margin||p.margin<0?4:p.margin,h=p.width&&p.width>=21?p.width:void 0,m=p.scale||4;return{width:h,scale:h?4:m,margin:f,color:{dark:hex2rgba(p.color.dark||"#000000ff"),light:hex2rgba(p.color.light||"#ffffffff")},type:p.type,rendererOpts:p.rendererOpts||{}}},f.getScale=function(p,f){return f.width&&f.width>=p+2*f.margin?f.width/(p+2*f.margin):f.scale},f.getImageWidth=function(p,h){let m=f.getScale(p,h);return Math.floor((p+2*h.margin)*m)},f.qrToImageData=function(p,h,m){let M=h.modules.size,I=h.modules.data,N=f.getScale(M,m),Q=Math.floor((M+2*m.margin)*N),U=m.margin*N,q=[m.color.light,m.color.dark];for(let f=0;f<Q;f++)for(let h=0;h<Q;h++){let V=(f*Q+h)*4,J=m.color.light;if(f>=U&&h>=U&&f<Q-U&&h<Q-U){let p=Math.floor((f-U)/N),m=Math.floor((h-U)/N);J=q[I[p*M+m]?1:0]}p[V++]=J.r,p[V++]=J.g,p[V++]=J.b,p[V]=J.a}}},66169:function(p,f,h){"use strict";h.d(f,{S1:function(){return off},ZT:function(){return noop},jU:function(){return m},on:function(){return on}});var noop=function(){};function on(p){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];p&&p.addEventListener&&p.addEventListener.apply(p,f)}function off(p){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];p&&p.removeEventListener&&p.removeEventListener.apply(p,f)}var m="undefined"!=typeof window},1044:function(p,f,h){"use strict";h.d(f,{Z:function(){return esm_useWindowSize}});var m=h(2265),esm_useEffectOnce=function(p){(0,m.useEffect)(p,[])},esm_useUnmount=function(p){var f=(0,m.useRef)(p);f.current=p,esm_useEffectOnce(function(){return function(){return f.current()}})},esm_useRafState=function(p){var f=(0,m.useRef)(0),h=(0,m.useState)(p),M=h[0],I=h[1],N=(0,m.useCallback)(function(p){cancelAnimationFrame(f.current),f.current=requestAnimationFrame(function(){I(p)})},[]);return esm_useUnmount(function(){cancelAnimationFrame(f.current)}),[M,N]},M=h(66169),esm_useWindowSize=function(p,f){void 0===p&&(p=1/0),void 0===f&&(f=1/0);var h=esm_useRafState({width:M.jU?window.innerWidth:p,height:M.jU?window.innerHeight:f}),I=h[0],N=h[1];return(0,m.useEffect)(function(){if(M.jU){var handler_1=function(){N({width:window.innerWidth,height:window.innerHeight})};return(0,M.on)(window,"resize",handler_1),function(){(0,M.S1)(window,"resize",handler_1)}}},[]),I}},45936:function(p,f,h){var m;!function(M,I){"use strict";var N="function",Q="undefined",U="object",q="string",V="major",J="model",K="name",j="type",Y="vendor",G="version",Z="architecture",X="console",_="mobile",$="tablet",ee="smarttv",et="wearable",er="embedded",en="Amazon",eo="Apple",ei="ASUS",ea="BlackBerry",es="Browser",el="Chrome",ec="Firefox",eu="Google",ep="Huawei",ed="Microsoft",ef="Motorola",eh="Opera",eg="Samsung",ew="Sharp",eA="Sony",em="Xiaomi",ey="Zebra",eb="Facebook",ev="Chromium OS",eC="Mac OS",extend=function(p,f){var h={};for(var m in p)f[m]&&f[m].length%2==0?h[m]=f[m].concat(p[m]):h[m]=p[m];return h},enumerize=function(p){for(var f={},h=0;h<p.length;h++)f[p[h].toUpperCase()]=p[h];return f},has=function(p,f){return typeof p===q&&-1!==lowerize(f).indexOf(lowerize(p))},lowerize=function(p){return p.toLowerCase()},trim=function(p,f){if(typeof p===q)return p=p.replace(/^\s\s*/,""),typeof f===Q?p:p.substring(0,500)},rgxMapper=function(p,f){for(var h,m,M,Q,q,V,J=0;J<f.length&&!q;){var K=f[J],j=f[J+1];for(h=m=0;h<K.length&&!q&&K[h];)if(q=K[h++].exec(p))for(M=0;M<j.length;M++)V=q[++m],typeof(Q=j[M])===U&&Q.length>0?2===Q.length?typeof Q[1]==N?this[Q[0]]=Q[1].call(this,V):this[Q[0]]=Q[1]:3===Q.length?typeof Q[1]!==N||Q[1].exec&&Q[1].test?this[Q[0]]=V?V.replace(Q[1],Q[2]):I:this[Q[0]]=V?Q[1].call(this,V,Q[2]):I:4===Q.length&&(this[Q[0]]=V?Q[3].call(this,V.replace(Q[1],Q[2])):I):this[Q]=V||I;J+=2}},strMapper=function(p,f){for(var h in f)if(typeof f[h]===U&&f[h].length>0){for(var m=0;m<f[h].length;m++)if(has(f[h][m],p))return"?"===h?I:h}else if(has(f[h],p))return"?"===h?I:h;return p},ex={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},eB={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[G,[K,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[G,[K,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[K,G],[/opios[\/ ]+([\w\.]+)/i],[G,[K,eh+" Mini"]],[/\bopr\/([\w\.]+)/i],[G,[K,eh]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[G,[K,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[K,G],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[G,[K,"UC"+es]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[G,[K,"WeChat"]],[/konqueror\/([\w\.]+)/i],[G,[K,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[G,[K,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[G,[K,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[G,[K,"Smart Lenovo "+es]],[/(avast|avg)\/([\w\.]+)/i],[[K,/(.+)/,"$1 Secure "+es],G],[/\bfocus\/([\w\.]+)/i],[G,[K,ec+" Focus"]],[/\bopt\/([\w\.]+)/i],[G,[K,eh+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[G,[K,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[G,[K,"Dolphin"]],[/coast\/([\w\.]+)/i],[G,[K,eh+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[G,[K,"MIUI "+es]],[/fxios\/([-\w\.]+)/i],[G,[K,ec]],[/\bqihu|(qi?ho?o?|360)browser/i],[[K,"360 "+es]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[K,/(.+)/,"$1 "+es],G],[/samsungbrowser\/([\w\.]+)/i],[G,[K,eg+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[K,/_/g," "],G],[/metasr[\/ ]?([\d\.]+)/i],[G,[K,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[K,"Sogou Mobile"],G],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[K,G],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[K],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[K,eb],G],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[K,G],[/\bgsa\/([\w\.]+) .*safari\//i],[G,[K,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[G,[K,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[G,[K,el+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[K,el+" WebView"],G],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[G,[K,"Android "+es]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[K,G],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[G,[K,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[G,K],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[K,[G,strMapper,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[K,G],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[K,"Netscape"],G],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[G,[K,ec+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[K,G],[/(cobalt)\/([\w\.]+)/i],[K,[G,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[Z,"amd64"]],[/(ia32(?=;))/i],[[Z,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[Z,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[Z,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[Z,"armhf"]],[/windows (ce|mobile); ppc;/i],[[Z,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[Z,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[Z,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[Z,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[J,[Y,eg],[j,$]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[J,[Y,eg],[j,_]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[J,[Y,eo],[j,_]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[J,[Y,eo],[j,$]],[/(macintosh);/i],[J,[Y,eo]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[J,[Y,ew],[j,_]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[J,[Y,ep],[j,$]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[J,[Y,ep],[j,_]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[J,/_/g," "],[Y,em],[j,_]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[J,/_/g," "],[Y,em],[j,$]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[J,[Y,"OPPO"],[j,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[J,[Y,"Vivo"],[j,_]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[J,[Y,"Realme"],[j,_]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[J,[Y,ef],[j,_]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[J,[Y,ef],[j,$]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[J,[Y,"LG"],[j,$]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[J,[Y,"LG"],[j,_]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[J,[Y,"Lenovo"],[j,$]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[J,/_/g," "],[Y,"Nokia"],[j,_]],[/(pixel c)\b/i],[J,[Y,eu],[j,$]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[J,[Y,eu],[j,_]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[J,[Y,eA],[j,_]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[J,"Xperia Tablet"],[Y,eA],[j,$]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[J,[Y,"OnePlus"],[j,_]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[J,[Y,en],[j,$]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[J,/(.+)/g,"Fire Phone $1"],[Y,en],[j,_]],[/(playbook);[-\w\),; ]+(rim)/i],[J,Y,[j,$]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[J,[Y,ea],[j,_]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[J,[Y,ei],[j,$]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[J,[Y,ei],[j,_]],[/(nexus 9)/i],[J,[Y,"HTC"],[j,$]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[Y,[J,/_/g," "],[j,_]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[J,[Y,"Acer"],[j,$]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[J,[Y,"Meizu"],[j,_]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[J,[Y,"Ulefone"],[j,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[Y,J,[j,_]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[Y,J,[j,$]],[/(surface duo)/i],[J,[Y,ed],[j,$]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[J,[Y,"Fairphone"],[j,_]],[/(u304aa)/i],[J,[Y,"AT&T"],[j,_]],[/\bsie-(\w*)/i],[J,[Y,"Siemens"],[j,_]],[/\b(rct\w+) b/i],[J,[Y,"RCA"],[j,$]],[/\b(venue[\d ]{2,7}) b/i],[J,[Y,"Dell"],[j,$]],[/\b(q(?:mv|ta)\w+) b/i],[J,[Y,"Verizon"],[j,$]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[J,[Y,"Barnes & Noble"],[j,$]],[/\b(tm\d{3}\w+) b/i],[J,[Y,"NuVision"],[j,$]],[/\b(k88) b/i],[J,[Y,"ZTE"],[j,$]],[/\b(nx\d{3}j) b/i],[J,[Y,"ZTE"],[j,_]],[/\b(gen\d{3}) b.+49h/i],[J,[Y,"Swiss"],[j,_]],[/\b(zur\d{3}) b/i],[J,[Y,"Swiss"],[j,$]],[/\b((zeki)?tb.*\b) b/i],[J,[Y,"Zeki"],[j,$]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[Y,"Dragon Touch"],J,[j,$]],[/\b(ns-?\w{0,9}) b/i],[J,[Y,"Insignia"],[j,$]],[/\b((nxa|next)-?\w{0,9}) b/i],[J,[Y,"NextBook"],[j,$]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[Y,"Voice"],J,[j,_]],[/\b(lvtel\-)?(v1[12]) b/i],[[Y,"LvTel"],J,[j,_]],[/\b(ph-1) /i],[J,[Y,"Essential"],[j,_]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[J,[Y,"Envizen"],[j,$]],[/\b(trio[-\w\. ]+) b/i],[J,[Y,"MachSpeed"],[j,$]],[/\btu_(1491) b/i],[J,[Y,"Rotor"],[j,$]],[/(shield[\w ]+) b/i],[J,[Y,"Nvidia"],[j,$]],[/(sprint) (\w+)/i],[Y,J,[j,_]],[/(kin\.[onetw]{3})/i],[[J,/\./g," "],[Y,ed],[j,_]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[J,[Y,ey],[j,$]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[J,[Y,ey],[j,_]],[/smart-tv.+(samsung)/i],[Y,[j,ee]],[/hbbtv.+maple;(\d+)/i],[[J,/^/,"SmartTV"],[Y,eg],[j,ee]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[Y,"LG"],[j,ee]],[/(apple) ?tv/i],[Y,[J,eo+" TV"],[j,ee]],[/crkey/i],[[J,el+"cast"],[Y,eu],[j,ee]],[/droid.+aft(\w+)( bui|\))/i],[J,[Y,en],[j,ee]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[J,[Y,ew],[j,ee]],[/(bravia[\w ]+)( bui|\))/i],[J,[Y,eA],[j,ee]],[/(mitv-\w{5}) bui/i],[J,[Y,em],[j,ee]],[/Hbbtv.*(technisat) (.*);/i],[Y,J,[j,ee]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[Y,trim],[J,trim],[j,ee]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[j,ee]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[Y,J,[j,X]],[/droid.+; (shield) bui/i],[J,[Y,"Nvidia"],[j,X]],[/(playstation [345portablevi]+)/i],[J,[Y,eA],[j,X]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[J,[Y,ed],[j,X]],[/((pebble))app/i],[Y,J,[j,et]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[J,[Y,eo],[j,et]],[/droid.+; (glass) \d/i],[J,[Y,eu],[j,et]],[/droid.+; (wt63?0{2,3})\)/i],[J,[Y,ey],[j,et]],[/(quest( 2| pro)?)/i],[J,[Y,eb],[j,et]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[Y,[j,er]],[/(aeobc)\b/i],[J,[Y,en],[j,er]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[J,[j,_]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[J,[j,$]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[j,$]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[j,_]],[/(android[-\w\. ]{0,9});.+buil/i],[J,[Y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[G,[K,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[G,[K,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[K,G],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[G,K]],os:[[/microsoft (windows) (vista|xp)/i],[K,G],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[K,[G,strMapper,ex]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[G,strMapper,ex],[K,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[G,/_/g,"."],[K,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[K,eC],[G,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[G,K],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[K,G],[/\(bb(10);/i],[G,[K,ea]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[G,[K,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[G,[K,ec+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[G,[K,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[G,[K,"watchOS"]],[/crkey\/([\d\.]+)/i],[G,[K,el+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[K,ev],G],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[K,G],[/(sunos) ?([\w\.\d]*)/i],[[K,"Solaris"],G],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[K,G]]},UAParser=function(p,f){if(typeof p===U&&(f=p,p=I),!(this instanceof UAParser))return new UAParser(p,f).getResult();var h=typeof M!==Q&&M.navigator?M.navigator:I,m=p||(h&&h.userAgent?h.userAgent:""),X=h&&h.userAgentData?h.userAgentData:I,ee=f?extend(eB,f):eB,et=h&&h.userAgent==m;return this.getBrowser=function(){var p,f={};return f[K]=I,f[G]=I,rgxMapper.call(f,m,ee.browser),f[V]=typeof(p=f[G])===q?p.replace(/[^\d\.]/g,"").split(".")[0]:I,et&&h&&h.brave&&typeof h.brave.isBrave==N&&(f[K]="Brave"),f},this.getCPU=function(){var p={};return p[Z]=I,rgxMapper.call(p,m,ee.cpu),p},this.getDevice=function(){var p={};return p[Y]=I,p[J]=I,p[j]=I,rgxMapper.call(p,m,ee.device),et&&!p[j]&&X&&X.mobile&&(p[j]=_),et&&"Macintosh"==p[J]&&h&&typeof h.standalone!==Q&&h.maxTouchPoints&&h.maxTouchPoints>2&&(p[J]="iPad",p[j]=$),p},this.getEngine=function(){var p={};return p[K]=I,p[G]=I,rgxMapper.call(p,m,ee.engine),p},this.getOS=function(){var p={};return p[K]=I,p[G]=I,rgxMapper.call(p,m,ee.os),et&&!p[K]&&X&&"Unknown"!=X.platform&&(p[K]=X.platform.replace(/chrome os/i,ev).replace(/macos/i,eC)),p},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return m},this.setUA=function(p){return m=typeof p===q&&p.length>500?trim(p,500):p,this},this.setUA(m),this};UAParser.VERSION="1.0.37",UAParser.BROWSER=enumerize([K,G,V]),UAParser.CPU=enumerize([Z]),UAParser.DEVICE=enumerize([J,Y,j,X,_,ee,$,et,er]),UAParser.ENGINE=UAParser.OS=enumerize([K,G]),typeof f!==Q?(p.exports&&(f=p.exports=UAParser),f.UAParser=UAParser):h.amdO?I!==(m=(function(){return UAParser}).call(f,h,f,p))&&(p.exports=m):typeof M!==Q&&(M.UAParser=UAParser);var eE=typeof M!==Q&&(M.jQuery||M.Zepto);if(eE&&!eE.ua){var ek=new UAParser;eE.ua=ek.getResult(),eE.ua.get=function(){return ek.getUA()},eE.ua.set=function(p){ek.setUA(p);var f=ek.getResult();for(var h in f)eE.ua[h]=f[h]}}}("object"==typeof window?window:this)},37308:function(p,f,h){"use strict";function t(p){return p.split("-")[1]}function e(p){return"y"===p?"height":"width"}function n(p){return p.split("-")[0]}function o(p){return["top","bottom"].includes(n(p))?"x":"y"}function i(p,f,h){let m,{reference:M,floating:I}=p,N=M.x+M.width/2-I.width/2,Q=M.y+M.height/2-I.height/2,U=o(f),q=e(U),V=M[q]/2-I[q]/2,J="x"===U;switch(n(f)){case"top":m={x:N,y:M.y-I.height};break;case"bottom":m={x:N,y:M.y+M.height};break;case"right":m={x:M.x+M.width,y:Q};break;case"left":m={x:M.x-I.width,y:Q};break;default:m={x:M.x,y:M.y}}switch(t(f)){case"start":m[U]-=V*(h&&J?-1:1);break;case"end":m[U]+=V*(h&&J?-1:1)}return m}h.d(f,{Cp:function(){return E},JB:function(){return s},RR:function(){return A},cv:function(){return L},dp:function(){return C},dr:function(){return B},oo:function(){return r},uY:function(){return O},x7:function(){return g}});let r=async(p,f,h)=>{let{placement:m="bottom",strategy:M="absolute",middleware:I=[],platform:N}=h,Q=I.filter(Boolean),U=await (null==N.isRTL?void 0:N.isRTL(f)),q=await N.getElementRects({reference:p,floating:f,strategy:M}),{x:V,y:J}=i(q,m,U),K=m,j={},Y=0;for(let h=0;h<Q.length;h++){let{name:I,fn:G}=Q[h],{x:Z,y:X,data:_,reset:$}=await G({x:V,y:J,initialPlacement:m,placement:K,strategy:M,middlewareData:j,rects:q,platform:N,elements:{reference:p,floating:f}});V=null!=Z?Z:V,J=null!=X?X:J,j={...j,[I]:{...j[I],..._}},$&&Y<=50&&(Y++,"object"==typeof $&&($.placement&&(K=$.placement),$.rects&&(q=!0===$.rects?await N.getElementRects({reference:p,floating:f,strategy:M}):$.rects),{x:V,y:J}=i(q,K,U)),h=-1)}return{x:V,y:J,placement:K,strategy:M,middlewareData:j}};function a(p,f){return"function"==typeof p?p(f):p}function l(p){return"number"!=typeof p?{top:0,right:0,bottom:0,left:0,...p}:{top:p,right:p,bottom:p,left:p}}function s(p){return{...p,top:p.y,left:p.x,right:p.x+p.width,bottom:p.y+p.height}}async function c(p,f){var h;void 0===f&&(f={});let{x:m,y:M,platform:I,rects:N,elements:Q,strategy:U}=p,{boundary:q="clippingAncestors",rootBoundary:V="viewport",elementContext:J="floating",altBoundary:K=!1,padding:j=0}=a(f,p),Y=l(j),G=Q[K?"floating"===J?"reference":"floating":J],Z=s(await I.getClippingRect({element:null==(h=await (null==I.isElement?void 0:I.isElement(G)))||h?G:G.contextElement||await (null==I.getDocumentElement?void 0:I.getDocumentElement(Q.floating)),boundary:q,rootBoundary:V,strategy:U})),X="floating"===J?{...N.floating,x:m,y:M}:N.reference,_=await (null==I.getOffsetParent?void 0:I.getOffsetParent(Q.floating)),$=await (null==I.isElement?void 0:I.isElement(_))&&await (null==I.getScale?void 0:I.getScale(_))||{x:1,y:1},ee=s(I.convertOffsetParentRelativeRectToViewportRelativeRect?await I.convertOffsetParentRelativeRectToViewportRelativeRect({rect:X,offsetParent:_,strategy:U}):X);return{top:(Z.top-ee.top+Y.top)/$.y,bottom:(ee.bottom-Z.bottom+Y.bottom)/$.y,left:(Z.left-ee.left+Y.left)/$.x,right:(ee.right-Z.right+Y.right)/$.x}}let m=Math.min,M=Math.max,g=p=>({name:"arrow",options:p,async fn(f){let{x:h,y:I,placement:N,rects:Q,platform:U,elements:q}=f,{element:V,padding:J=0}=a(p,f)||{};if(null==V)return{};let K=l(J),j={x:h,y:I},Y=o(N),G=e(Y),Z=await U.getDimensions(V),X="y"===Y,_=X?"clientHeight":"clientWidth",$=Q.reference[G]+Q.reference[Y]-j[Y]-Q.floating[G],ee=j[Y]-Q.reference[Y],et=await (null==U.getOffsetParent?void 0:U.getOffsetParent(V)),er=et?et[_]:0;er&&await (null==U.isElement?void 0:U.isElement(et))||(er=q.floating[_]||Q.floating[G]);let en=er/2-Z[G]/2-1,eo=m(K[X?"top":"left"],en),ei=m(K[X?"bottom":"right"],en),ea=er-Z[G]-ei,es=er/2-Z[G]/2+($/2-ee/2),el=M(eo,m(es,ea)),ec=null!=t(N)&&es!=el&&Q.reference[G]/2-(es<eo?eo:ei)-Z[G]/2<0?es<eo?eo-es:ea-es:0;return{[Y]:j[Y]-ec,data:{[Y]:el,centerOffset:es-el+ec}}}}),I=["top","right","bottom","left"],N=(I.reduce((p,f)=>p.concat(f,f+"-start",f+"-end"),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function y(p){return p.replace(/left|right|bottom|top/g,p=>N[p])}let Q={start:"end",end:"start"};function v(p){return p.replace(/start|end/g,p=>Q[p])}let A=function(p){return void 0===p&&(p={}),{name:"flip",options:p,async fn(f){var h,m,M,I;let{placement:N,middlewareData:Q,rects:U,initialPlacement:q,platform:V,elements:J}=f,{mainAxis:K=!0,crossAxis:j=!0,fallbackPlacements:Y,fallbackStrategy:G="bestFit",fallbackAxisSideDirection:Z="none",flipAlignment:X=!0,..._}=a(p,f),$=n(N),ee=n(q)===q,et=await (null==V.isRTL?void 0:V.isRTL(J.floating)),er=Y||(ee||!X?[y(q)]:function(p){let f=y(p);return[v(p),f,v(f)]}(q));Y||"none"===Z||er.push(...function(p,f,h,m){let M=t(p),I=function(p,f,h){let m=["left","right"],M=["right","left"];switch(p){case"top":case"bottom":return h?f?M:m:f?m:M;case"left":case"right":return f?["top","bottom"]:["bottom","top"];default:return[]}}(n(p),"start"===h,m);return M&&(I=I.map(p=>p+"-"+M),f&&(I=I.concat(I.map(v)))),I}(q,X,Z,et));let en=[q,...er],eo=await c(f,_),ei=[],ea=(null==(h=Q.flip)?void 0:h.overflows)||[];if(K&&ei.push(eo[$]),j){let{main:p,cross:f}=function(p,f,h){void 0===h&&(h=!1);let m=t(p),M=o(p),I=e(M),N="x"===M?m===(h?"end":"start")?"right":"left":"start"===m?"bottom":"top";return f.reference[I]>f.floating[I]&&(N=y(N)),{main:N,cross:y(N)}}(N,U,et);ei.push(eo[p],eo[f])}if(ea=[...ea,{placement:N,overflows:ei}],!ei.every(p=>p<=0)){let p=((null==(m=Q.flip)?void 0:m.index)||0)+1,f=en[p];if(f)return{data:{index:p,overflows:ea},reset:{placement:f}};let h=null==(M=ea.filter(p=>p.overflows[0]<=0).sort((p,f)=>p.overflows[1]-f.overflows[1])[0])?void 0:M.placement;if(!h)switch(G){case"bestFit":{let p=null==(I=ea.map(p=>[p.placement,p.overflows.filter(p=>p>0).reduce((p,f)=>p+f,0)]).sort((p,f)=>p[1]-f[1])[0])?void 0:I[0];p&&(h=p);break}case"initialPlacement":h=q}if(N!==h)return{reset:{placement:h}}}return{}}}};function R(p,f){return{top:p.top-f.height,right:p.right-f.width,bottom:p.bottom-f.height,left:p.left-f.width}}function P(p){return I.some(f=>p[f]>=0)}let E=function(p){return void 0===p&&(p={}),{name:"hide",options:p,async fn(f){let{rects:h}=f,{strategy:m="referenceHidden",...M}=a(p,f);switch(m){case"referenceHidden":{let p=R(await c(f,{...M,elementContext:"reference"}),h.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:P(p)}}}case"escaped":{let p=R(await c(f,{...M,altBoundary:!0}),h.floating);return{data:{escapedOffsets:p,escaped:P(p)}}}default:return{}}}}},L=function(p){return void 0===p&&(p=0),{name:"offset",options:p,async fn(f){let{x:h,y:m}=f,M=await async function(p,f){let{placement:h,platform:m,elements:M}=p,I=await (null==m.isRTL?void 0:m.isRTL(M.floating)),N=n(h),Q=t(h),U="x"===o(h),q=["left","top"].includes(N)?-1:1,V=I&&U?-1:1,J=a(f,p),{mainAxis:K,crossAxis:j,alignmentAxis:Y}="number"==typeof J?{mainAxis:J,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...J};return Q&&"number"==typeof Y&&(j="end"===Q?-1*Y:Y),U?{x:j*V,y:K*q}:{x:K*q,y:j*V}}(f,p);return{x:h+M.x,y:m+M.y,data:M}}}};function k(p){return"x"===p?"y":"x"}let O=function(p){return void 0===p&&(p={}),{name:"shift",options:p,async fn(f){let{x:h,y:I,placement:N}=f,{mainAxis:Q=!0,crossAxis:U=!1,limiter:q={fn:p=>{let{x:f,y:h}=p;return{x:f,y:h}}},...V}=a(p,f),J={x:h,y:I},K=await c(f,V),j=o(n(N)),Y=k(j),G=J[j],Z=J[Y];if(Q){let p="y"===j?"bottom":"right";G=M(G+K["y"===j?"top":"left"],m(G,G-K[p]))}U&&(Z=M(Z+K["y"===Y?"top":"left"],m(Z,Z-K["y"===Y?"bottom":"right"])));let X=q.fn({...f,[j]:G,[Y]:Z});return{...X,data:{x:X.x-h,y:X.y-I}}}}},B=function(p){return void 0===p&&(p={}),{options:p,fn(f){let{x:h,y:m,placement:M,rects:I,middlewareData:N}=f,{offset:Q=0,mainAxis:U=!0,crossAxis:q=!0}=a(p,f),V={x:h,y:m},J=o(M),K=k(J),j=V[J],Y=V[K],G=a(Q,f),Z="number"==typeof G?{mainAxis:G,crossAxis:0}:{mainAxis:0,crossAxis:0,...G};if(U){let p="y"===J?"height":"width",f=I.reference[J]-I.floating[p]+Z.mainAxis,h=I.reference[J]+I.reference[p]-Z.mainAxis;j<f?j=f:j>h&&(j=h)}if(q){var X,_;let p="y"===J?"width":"height",f=["top","left"].includes(n(M)),h=I.reference[K]-I.floating[p]+(f&&(null==(X=N.offset)?void 0:X[K])||0)+(f?0:Z.crossAxis),m=I.reference[K]+I.reference[p]+(f?0:(null==(_=N.offset)?void 0:_[K])||0)-(f?Z.crossAxis:0);Y<h?Y=h:Y>m&&(Y=m)}return{[J]:j,[K]:Y}}}},C=function(p){return void 0===p&&(p={}),{name:"size",options:p,async fn(f){let h,I;let{placement:N,rects:Q,platform:U,elements:q}=f,{apply:V=()=>{},...J}=a(p,f),K=await c(f,J),j=n(N),Y=t(N),G="x"===o(N),{width:Z,height:X}=Q.floating;"top"===j||"bottom"===j?(h=j,I=Y===(await (null==U.isRTL?void 0:U.isRTL(q.floating))?"start":"end")?"left":"right"):(I=j,h="end"===Y?"top":"bottom");let _=X-K[h],$=Z-K[I],ee=!f.middlewareData.shift,et=_,er=$;if(G){let p=Z-K.left-K.right;er=Y||ee?m($,p):p}else{let p=X-K.top-K.bottom;et=Y||ee?m(_,p):p}if(ee&&!Y){let p=M(K.left,0),f=M(K.right,0),h=M(K.top,0),m=M(K.bottom,0);G?er=Z-2*(0!==p||0!==f?p+f:M(K.left,K.right)):et=X-2*(0!==h||0!==m?h+m:M(K.top,K.bottom))}await V({...f,availableWidth:er,availableHeight:et});let en=await U.getDimensions(q.floating);return Z!==en.width||X!==en.height?{reset:{rects:!0}}:{}}}}},38034:function(p,f,h){"use strict";h.d(f,{Kx:function(){return D},Me:function(){return A},oo:function(){return B}});var m=h(37308);function n(p){var f;return(null==p||null==(f=p.ownerDocument)?void 0:f.defaultView)||window}function o(p){return n(p).getComputedStyle(p)}function i(p){return p instanceof n(p).Node}function r(p){return i(p)?(p.nodeName||"").toLowerCase():"#document"}function c(p){return p instanceof HTMLElement||p instanceof n(p).HTMLElement}function l(p){return"undefined"!=typeof ShadowRoot&&(p instanceof n(p).ShadowRoot||p instanceof ShadowRoot)}function s(p){let{overflow:f,overflowX:h,overflowY:m,display:M}=o(p);return/auto|scroll|overlay|hidden|clip/.test(f+m+h)&&!["inline","contents"].includes(M)}function u(p){let f=a(),h=o(p);return"none"!==h.transform||"none"!==h.perspective||!!h.containerType&&"normal"!==h.containerType||!f&&!!h.backdropFilter&&"none"!==h.backdropFilter||!f&&!!h.filter&&"none"!==h.filter||["transform","perspective","filter"].some(p=>(h.willChange||"").includes(p))||["paint","layout","strict","content"].some(p=>(h.contain||"").includes(p))}function a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function d(p){return["html","body","#document"].includes(r(p))}let M=Math.min,I=Math.max,N=Math.round,Q=Math.floor,y=p=>({x:p,y:p});function w(p){let f=o(p),h=parseFloat(f.width)||0,m=parseFloat(f.height)||0,M=c(p),I=M?p.offsetWidth:h,Q=M?p.offsetHeight:m,U=N(h)!==I||N(m)!==Q;return U&&(h=I,m=Q),{width:h,height:m,$:U}}function x(p){return p instanceof Element||p instanceof n(p).Element}function v(p){return x(p)?p:p.contextElement}function b(p){let f=v(p);if(!c(f))return y(1);let h=f.getBoundingClientRect(),{width:m,height:M,$:I}=w(f),Q=(I?N(h.width):h.width)/m,U=(I?N(h.height):h.height)/M;return Q&&Number.isFinite(Q)||(Q=1),U&&Number.isFinite(U)||(U=1),{x:Q,y:U}}let U=y(0);function T(p){let f=n(p);return a()&&f.visualViewport?{x:f.visualViewport.offsetLeft,y:f.visualViewport.offsetTop}:U}function R(p,f,h,M){var I;void 0===f&&(f=!1),void 0===h&&(h=!1);let N=p.getBoundingClientRect(),Q=v(p),U=y(1);f&&(M?x(M)&&(U=b(M)):U=b(p));let q=(void 0===(I=h)&&(I=!1),!(!M||I&&M!==n(Q))&&I)?T(Q):y(0),V=(N.left+q.x)/U.x,J=(N.top+q.y)/U.y,K=N.width/U.x,j=N.height/U.y;if(Q){let p=n(Q),f=M&&x(M)?n(M):M,h=p.frameElement;for(;h&&M&&f!==p;){let p=b(h),f=h.getBoundingClientRect(),m=getComputedStyle(h),M=f.left+(h.clientLeft+parseFloat(m.paddingLeft))*p.x,I=f.top+(h.clientTop+parseFloat(m.paddingTop))*p.y;V*=p.x,J*=p.y,K*=p.x,j*=p.y,V+=M,J+=I,h=n(h).frameElement}}return(0,m.JB)({width:K,height:j,x:V,y:J})}function E(p){return x(p)?{scrollLeft:p.scrollLeft,scrollTop:p.scrollTop}:{scrollLeft:p.pageXOffset,scrollTop:p.pageYOffset}}function S(p){var f;return null==(f=(i(p)?p.ownerDocument:p.document)||window.document)?void 0:f.documentElement}function C(p){return R(S(p)).left+E(p).scrollLeft}function F(p){if("html"===r(p))return p;let f=p.assignedSlot||p.parentNode||l(p)&&p.host||S(p);return l(f)?f.host:f}function D(p,f){var h;void 0===f&&(f=[]);let m=function O(p){let f=F(p);return d(f)?p.ownerDocument?p.ownerDocument.body:p.body:c(f)&&s(f)?f:O(f)}(p),M=m===(null==(h=p.ownerDocument)?void 0:h.body),I=n(m);return M?f.concat(I,I.visualViewport||[],s(m)?m:[]):f.concat(m,D(m))}function H(p,f,h){let M;if("viewport"===f)M=function(p,f){let h=n(p),m=S(p),M=h.visualViewport,I=m.clientWidth,N=m.clientHeight,Q=0,U=0;if(M){I=M.width,N=M.height;let p=a();(!p||p&&"fixed"===f)&&(Q=M.offsetLeft,U=M.offsetTop)}return{width:I,height:N,x:Q,y:U}}(p,h);else if("document"===f)M=function(p){let f=S(p),h=E(p),m=p.ownerDocument.body,M=I(f.scrollWidth,f.clientWidth,m.scrollWidth,m.clientWidth),N=I(f.scrollHeight,f.clientHeight,m.scrollHeight,m.clientHeight),Q=-h.scrollLeft+C(p),U=-h.scrollTop;return"rtl"===o(m).direction&&(Q+=I(f.clientWidth,m.clientWidth)-M),{width:M,height:N,x:Q,y:U}}(S(p));else if(x(f))M=function(p,f){let h=R(p,!0,"fixed"===f),m=h.top+p.clientTop,M=h.left+p.clientLeft,I=c(p)?b(p):y(1);return{width:p.clientWidth*I.x,height:p.clientHeight*I.y,x:M*I.x,y:m*I.y}}(f,h);else{let h=T(p);M={...f,x:f.x-h.x,y:f.y-h.y}}return(0,m.JB)(M)}function z(p,f){return c(p)&&"fixed"!==o(p).position?f?f(p):p.offsetParent:null}function P(p,f){let h=n(p);if(!c(p))return h;let m=z(p,f);for(;m&&["table","td","th"].includes(r(m))&&"static"===o(m).position;)m=z(m,f);return m&&("html"===r(m)||"body"===r(m)&&"static"===o(m).position&&!u(m))?h:m||function(p){let f=F(p);for(;c(f)&&!d(f);){if(u(f))return f;f=F(f)}return null}(p)||h}let q={convertOffsetParentRelativeRectToViewportRelativeRect:function(p){let{rect:f,offsetParent:h,strategy:m}=p,M=c(h),I=S(h);if(h===I)return f;let N={scrollLeft:0,scrollTop:0},Q=y(1),U=y(0);if((M||!M&&"fixed"!==m)&&(("body"!==r(h)||s(I))&&(N=E(h)),c(h))){let p=R(h);Q=b(h),U.x=p.x+h.clientLeft,U.y=p.y+h.clientTop}return{width:f.width*Q.x,height:f.height*Q.y,x:f.x*Q.x-N.scrollLeft*Q.x+U.x,y:f.y*Q.y-N.scrollTop*Q.y+U.y}},getDocumentElement:S,getClippingRect:function(p){let{element:f,boundary:h,rootBoundary:m,strategy:N}=p,Q=[..."clippingAncestors"===h?function(p,f){let h=f.get(p);if(h)return h;let m=D(p).filter(p=>x(p)&&"body"!==r(p)),M=null,I="fixed"===o(p).position,N=I?F(p):p;for(;x(N)&&!d(N);){let f=o(N),h=u(N);h||"fixed"!==f.position||(M=null),(I?!h&&!M:!h&&"static"===f.position&&M&&["absolute","fixed"].includes(M.position)||s(N)&&!h&&function W(p,f){let h=F(p);return!(h===f||!x(h)||d(h))&&("fixed"===o(h).position||W(h,f))}(p,N))?m=m.filter(p=>p!==N):M=f,N=F(N)}return f.set(p,m),m}(f,this._c):[].concat(h),m],U=Q[0],q=Q.reduce((p,h)=>{let m=H(f,h,N);return p.top=I(m.top,p.top),p.right=M(m.right,p.right),p.bottom=M(m.bottom,p.bottom),p.left=I(m.left,p.left),p},H(f,U,N));return{width:q.right-q.left,height:q.bottom-q.top,x:q.left,y:q.top}},getOffsetParent:P,getElementRects:async function(p){let{reference:f,floating:h,strategy:m}=p,M=this.getOffsetParent||P,I=this.getDimensions;return{reference:function(p,f,h){let m=c(f),M=S(f),I="fixed"===h,N=R(p,!0,I,f),Q={scrollLeft:0,scrollTop:0},U=y(0);if(m||!m&&!I){if(("body"!==r(f)||s(M))&&(Q=E(f)),c(f)){let p=R(f,!0,I,f);U.x=p.x+f.clientLeft,U.y=p.y+f.clientTop}else M&&(U.x=C(M))}return{x:N.left+Q.scrollLeft-U.x,y:N.top+Q.scrollTop-U.y,width:N.width,height:N.height}}(f,await M(h),m),floating:{x:0,y:0,...await I(h)}}},getClientRects:function(p){return Array.from(p.getClientRects())},getDimensions:function(p){return w(p)},getScale:b,isElement:x,isRTL:function(p){return"rtl"===getComputedStyle(p).direction}};function A(p,f,h,m){void 0===m&&(m={});let{ancestorScroll:N=!0,ancestorResize:U=!0,elementResize:q="function"==typeof ResizeObserver,layoutShift:V="function"==typeof IntersectionObserver,animationFrame:J=!1}=m,K=v(p),j=N||U?[...K?D(K):[],...D(f)]:[];j.forEach(p=>{N&&p.addEventListener("scroll",h,{passive:!0}),U&&p.addEventListener("resize",h)});let Y=K&&V?function(p,f){let h,m=null,N=S(p);function r(){clearTimeout(h),m&&m.disconnect(),m=null}return function c(U,q){void 0===U&&(U=!1),void 0===q&&(q=1),r();let{left:V,top:J,width:K,height:j}=p.getBoundingClientRect();if(U||f(),!K||!j)return;let Y={rootMargin:-Q(J)+"px "+-Q(N.clientWidth-(V+K))+"px "+-Q(N.clientHeight-(J+j))+"px "+-Q(V)+"px",threshold:I(0,M(1,q))||1},G=!0;function w(p){let f=p[0].intersectionRatio;if(f!==q){if(!G)return c();f?c(!1,f):h=setTimeout(()=>{c(!1,1e-7)},100)}G=!1}try{m=new IntersectionObserver(w,{...Y,root:N.ownerDocument})}catch(p){m=new IntersectionObserver(w,Y)}m.observe(p)}(!0),r}(K,h):null,G,Z=-1,X=null;q&&(X=new ResizeObserver(p=>{let[m]=p;m&&m.target===K&&X&&(X.unobserve(f),cancelAnimationFrame(Z),Z=requestAnimationFrame(()=>{X&&X.observe(f)})),h()}),K&&!J&&X.observe(K),X.observe(f));let _=J?R(p):null;return J&&function e(){let f=R(p);_&&(f.x!==_.x||f.y!==_.y||f.width!==_.width||f.height!==_.height)&&h(),_=f,G=requestAnimationFrame(e)}(),h(),()=>{j.forEach(p=>{N&&p.removeEventListener("scroll",h),U&&p.removeEventListener("resize",h)}),Y&&Y(),X&&X.disconnect(),X=null,J&&cancelAnimationFrame(G)}}let B=(p,f,h)=>{let M=new Map,I={platform:q,...h},N={...I.platform,_c:M};return(0,m.oo)(p,f,{...I,platform:N})}},14242:function(p,f,h){"use strict";h.d(f,{ee:function(){return es},Eh:function(){return ec},VY:function(){return el},fC:function(){return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9},D7:function(){return X}});var m=h(13428),M=h(2265),I=h(37308),N=h(38034),Q=h(54887);let floating_ui_react_dom_esm_arrow=p=>({name:"arrow",options:p,fn(f){let{element:h,padding:m}="function"==typeof p?p(f):p;if(h&&({}).hasOwnProperty.call(h,"current")){if(null!=h.current)return(0,I.x7)({element:h.current,padding:m}).fn(f)}else if(h)return(0,I.x7)({element:h,padding:m}).fn(f);return{}}});var U="undefined"!=typeof document?M.useLayoutEffect:M.useEffect;function deepEqual(p,f){let h,m,M;if(p===f)return!0;if(typeof p!=typeof f)return!1;if("function"==typeof p&&p.toString()===f.toString())return!0;if(p&&f&&"object"==typeof p){if(Array.isArray(p)){if((h=p.length)!=f.length)return!1;for(m=h;0!=m--;)if(!deepEqual(p[m],f[m]))return!1;return!0}if((h=(M=Object.keys(p)).length)!==Object.keys(f).length)return!1;for(m=h;0!=m--;)if(!({}).hasOwnProperty.call(f,M[m]))return!1;for(m=h;0!=m--;){let h=M[m];if(("_owner"!==h||!p.$$typeof)&&!deepEqual(p[h],f[h]))return!1}return!0}return p!=p&&f!=f}function getDPR(p){if("undefined"==typeof window)return 1;let f=p.ownerDocument.defaultView||window;return f.devicePixelRatio||1}function roundByDPR(p,f){let h=getDPR(p);return Math.round(f*h)/h}function useLatestRef(p){let f=M.useRef(p);return U(()=>{f.current=p}),f}var q=h(9381);let V=(0,M.forwardRef)((p,f)=>{let{children:h,width:I=10,height:N=5,...Q}=p;return(0,M.createElement)(q.WV.svg,(0,m.Z)({},Q,{ref:f,width:I,height:N,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),p.asChild?h:(0,M.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var J=h(42210),K=h(56989),j=h(16459),Y=h(51030);let G="Popper",[Z,X]=(0,K.b)(G),[_,$]=Z(G),ee=(0,M.forwardRef)((p,f)=>{let{__scopePopper:h,virtualRef:I,...N}=p,Q=$("PopperAnchor",h),U=(0,M.useRef)(null),V=(0,J.e)(f,U);return(0,M.useEffect)(()=>{Q.onAnchorChange((null==I?void 0:I.current)||U.current)}),I?null:(0,M.createElement)(q.WV.div,(0,m.Z)({},N,{ref:V}))}),et="PopperContent",[er,en]=Z(et),eo=(0,M.forwardRef)((p,f)=>{var h,V,K,G,Z,X,_,ee;let{__scopePopper:en,side:eo="bottom",sideOffset:ei=0,align:ea="center",alignOffset:es=0,arrowPadding:el=0,collisionBoundary:ec=[],collisionPadding:eu=0,sticky:ep="partial",hideWhenDetached:ed=!1,avoidCollisions:ef=!0,onPlaced:eh,...eg}=p,ew=$(et,en),[eA,em]=(0,M.useState)(null),ey=(0,J.e)(f,p=>em(p)),[eb,ev]=(0,M.useState)(null),eC=function(p){let[f,h]=(0,M.useState)(void 0);return(0,Y.b)(()=>{if(p){h({width:p.offsetWidth,height:p.offsetHeight});let f=new ResizeObserver(f=>{let m,M;if(!Array.isArray(f)||!f.length)return;let I=f[0];if("borderBoxSize"in I){let p=I.borderBoxSize,f=Array.isArray(p)?p[0]:p;m=f.inlineSize,M=f.blockSize}else m=p.offsetWidth,M=p.offsetHeight;h({width:m,height:M})});return f.observe(p,{box:"border-box"}),()=>f.unobserve(p)}h(void 0)},[p]),f}(eb),ex=null!==(h=null==eC?void 0:eC.width)&&void 0!==h?h:0,eB=null!==(V=null==eC?void 0:eC.height)&&void 0!==V?V:0,eE="number"==typeof eu?eu:{top:0,right:0,bottom:0,left:0,...eu},ek=Array.isArray(ec)?ec:[ec],eM=ek.length>0,eR={padding:eE,boundary:ek.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:eM},{refs:eI,floatingStyles:eS,placement:eD,isPositioned:eN,middlewareData:eQ}=function(p){void 0===p&&(p={});let{placement:f="bottom",strategy:h="absolute",middleware:m=[],platform:I,elements:{reference:q,floating:V}={},transform:J=!0,whileElementsMounted:K,open:j}=p,[Y,G]=M.useState({x:0,y:0,strategy:h,placement:f,middlewareData:{},isPositioned:!1}),[Z,X]=M.useState(m);deepEqual(Z,m)||X(m);let[_,$]=M.useState(null),[ee,et]=M.useState(null),er=M.useCallback(p=>{p!=ea.current&&(ea.current=p,$(p))},[$]),en=M.useCallback(p=>{p!==es.current&&(es.current=p,et(p))},[et]),eo=q||_,ei=V||ee,ea=M.useRef(null),es=M.useRef(null),el=M.useRef(Y),ec=useLatestRef(K),eu=useLatestRef(I),ep=M.useCallback(()=>{if(!ea.current||!es.current)return;let p={placement:f,strategy:h,middleware:Z};eu.current&&(p.platform=eu.current),(0,N.oo)(ea.current,es.current,p).then(p=>{let f={...p,isPositioned:!0};ed.current&&!deepEqual(el.current,f)&&(el.current=f,Q.flushSync(()=>{G(f)}))})},[Z,f,h,eu]);U(()=>{!1===j&&el.current.isPositioned&&(el.current.isPositioned=!1,G(p=>({...p,isPositioned:!1})))},[j]);let ed=M.useRef(!1);U(()=>(ed.current=!0,()=>{ed.current=!1}),[]),U(()=>{if(eo&&(ea.current=eo),ei&&(es.current=ei),eo&&ei){if(ec.current)return ec.current(eo,ei,ep);ep()}},[eo,ei,ep,ec]);let ef=M.useMemo(()=>({reference:ea,floating:es,setReference:er,setFloating:en}),[er,en]),eh=M.useMemo(()=>({reference:eo,floating:ei}),[eo,ei]),eg=M.useMemo(()=>{let p={position:h,left:0,top:0};if(!eh.floating)return p;let f=roundByDPR(eh.floating,Y.x),m=roundByDPR(eh.floating,Y.y);return J?{...p,transform:"translate("+f+"px, "+m+"px)",...getDPR(eh.floating)>=1.5&&{willChange:"transform"}}:{position:h,left:f,top:m}},[h,J,eh.floating,Y.x,Y.y]);return M.useMemo(()=>({...Y,update:ep,refs:ef,elements:eh,floatingStyles:eg}),[Y,ep,ef,eh,eg])}({strategy:"fixed",placement:eo+("center"!==ea?"-"+ea:""),whileElementsMounted:N.Me,elements:{reference:ew.anchor},middleware:[(0,I.cv)({mainAxis:ei+eB,alignmentAxis:es}),ef&&(0,I.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===ep?(0,I.dr)():void 0,...eR}),ef&&(0,I.RR)({...eR}),(0,I.dp)({...eR,apply:({elements:p,rects:f,availableWidth:h,availableHeight:m})=>{let{width:M,height:I}=f.reference,N=p.floating.style;N.setProperty("--radix-popper-available-width",`${h}px`),N.setProperty("--radix-popper-available-height",`${m}px`),N.setProperty("--radix-popper-anchor-width",`${M}px`),N.setProperty("--radix-popper-anchor-height",`${I}px`)}}),eb&&floating_ui_react_dom_esm_arrow({element:eb,padding:el}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth:ex,arrowHeight:eB}),ed&&(0,I.Cp)({strategy:"referenceHidden"})]}),[eP,eW]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(eD),eO=(0,j.W)(eh);(0,Y.b)(()=>{eN&&(null==eO||eO())},[eN,eO]);let eF=null===(K=eQ.arrow)||void 0===K?void 0:K.x,eT=null===(G=eQ.arrow)||void 0===G?void 0:G.y,eL=(null===(Z=eQ.arrow)||void 0===Z?void 0:Z.centerOffset)!==0,[eU,eH]=(0,M.useState)();return(0,Y.b)(()=>{eA&&eH(window.getComputedStyle(eA).zIndex)},[eA]),(0,M.createElement)("div",{ref:eI.setFloating,"data-radix-popper-content-wrapper":"",style:{...eS,transform:eN?eS.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eU,"--radix-popper-transform-origin":[null===(X=eQ.transformOrigin)||void 0===X?void 0:X.x,null===(_=eQ.transformOrigin)||void 0===_?void 0:_.y].join(" ")},dir:p.dir},(0,M.createElement)(er,{scope:en,placedSide:eP,onArrowChange:ev,arrowX:eF,arrowY:eT,shouldHideArrow:eL},(0,M.createElement)(q.WV.div,(0,m.Z)({"data-side":eP,"data-align":eW},eg,{ref:ey,style:{...eg.style,animation:eN?void 0:"none",opacity:null!==(ee=eQ.hide)&&void 0!==ee&&ee.referenceHidden?0:void 0}}))))}),ei={top:"bottom",right:"left",bottom:"top",left:"right"},ea=(0,M.forwardRef)(function(p,f){let{__scopePopper:h,...I}=p,N=en("PopperArrow",h),Q=ei[N.placedSide];return(0,M.createElement)("span",{ref:N.onArrowChange,style:{position:"absolute",left:N.arrowX,top:N.arrowY,[Q]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[N.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[N.placedSide],visibility:N.shouldHideArrow?"hidden":void 0}},(0,M.createElement)(V,(0,m.Z)({},I,{ref:f,style:{...I.style,display:"block"}})))});function $cf1ac5d9fe0e8206$var$isNotNull(p){return null!==p}let $cf1ac5d9fe0e8206$var$transformOrigin=p=>({name:"transformOrigin",options:p,fn(f){var h,m,M,I,N;let{placement:Q,rects:U,middlewareData:q}=f,V=(null===(h=q.arrow)||void 0===h?void 0:h.centerOffset)!==0,J=V?0:p.arrowWidth,K=V?0:p.arrowHeight,[j,Y]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(Q),G={start:"0%",center:"50%",end:"100%"}[Y],Z=(null!==(m=null===(M=q.arrow)||void 0===M?void 0:M.x)&&void 0!==m?m:0)+J/2,X=(null!==(I=null===(N=q.arrow)||void 0===N?void 0:N.y)&&void 0!==I?I:0)+K/2,_="",$="";return"bottom"===j?(_=V?G:`${Z}px`,$=`${-K}px`):"top"===j?(_=V?G:`${Z}px`,$=`${U.floating.height+K}px`):"right"===j?(_=`${-K}px`,$=V?G:`${X}px`):"left"===j&&(_=`${U.floating.width+K}px`,$=V?G:`${X}px`),{data:{x:_,y:$}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(p){let[f,h="center"]=p.split("-");return[f,h]}let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=p=>{let{__scopePopper:f,children:h}=p,[m,I]=(0,M.useState)(null);return(0,M.createElement)(_,{scope:f,anchor:m,onAnchorChange:I},h)},es=ee,el=eo,ec=ea},79892:function(p,f,h){"use strict";h.d(f,{W:function(){return lightTheme}});var m=h(48680),M={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},I=M.blue,lightTheme=({accentColor:p=I.accentColor,accentColorForeground:f=I.accentColorForeground,...h}={})=>({...(0,m.w)(h),colors:{accentColor:p,accentColorForeground:f,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});lightTheme.accentColors=M},48680:function(p,f,h){"use strict";h.d(f,{w:function(){return baseTheme}});var m='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',M={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${m}`,system:m},I={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},N={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},baseTheme=({borderRadius:p="large",fontStack:f="rounded",overlayBlur:h="none"})=>({blurs:{modalOverlay:N[h].modalOverlay},fonts:{body:M[f]},radii:{actionButton:I[p].actionButton,connectButton:I[p].connectButton,menuButton:I[p].connectButton,modal:I[p].modal,modalMobile:I[p].modalMobile}})},72873:function(p,f,h){"use strict";h.d(f,{I:function(){return m}});var m=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`},59212:function(p,f,h){"use strict";f.Z=function(){for(var p,f,h=0,m="",M=arguments.length;h<M;h++)(p=arguments[h])&&(f=function r(p){var f,h,m="";if("string"==typeof p||"number"==typeof p)m+=p;else if("object"==typeof p){if(Array.isArray(p)){var M=p.length;for(f=0;f<M;f++)p[f]&&(h=r(p[f]))&&(m&&(m+=" "),m+=h)}else for(h in p)p[h]&&(m&&(m+=" "),m+=h)}return m}(p))&&(m&&(m+=" "),m+=f);return m}},29358:function(p,f,h){"use strict";h.d(f,{M:function(){return ProviderNotFoundError},O:function(){return SwitchChainNotSupportedError}});var m=h(78306);let ProviderNotFoundError=class ProviderNotFoundError extends m.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}};let SwitchChainNotSupportedError=class SwitchChainNotSupportedError extends m.G{constructor({connector:p}){super(`"${p.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},75404:function(p,f,h){"use strict";h.d(f,{R:function(){return M}});var m=h(71186);let M=(0,m.a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},33695:function(p,f,h){"use strict";let m,M,I,N,Q,U,q,V,J,K,j,Y,G,Z,X;h.d(f,{F:function(){return normalize}});let _=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function read_compressed_payload(p){var f;let h;return f=function(p){let f=0;function u16(){return p[f++]<<8|p[f++]}let h=u16(),m=1,M=[0,1];for(let p=1;p<h;p++)M.push(m+=u16());let I=u16(),N=f;f+=I;let Q=0,U=0;function read_bit(){return 0==Q&&(U=U<<8|p[f++],Q=8),U>>--Q&1}let q=2147483648-1,V=0;for(let p=0;p<31;p++)V=V<<1|read_bit();let J=[],K=0,j=2147483648;for(;;){let p=Math.floor(((V-K+1)*m-1)/j),f=0,I=h;for(;I-f>1;){let h=f+I>>>1;p<M[h]?I=h:f=h}if(0==f)break;J.push(f);let N=K+Math.floor(j*M[f]/m),Q=K+Math.floor(j*M[f+1]/m)-1;for(;((N^Q)&1073741824)==0;)V=V<<1&q|read_bit(),N=N<<1&q,Q=Q<<1&q|1;for(;N&~Q&536870912;)V=1073741824&V|V<<1&q>>>1|read_bit(),N=N<<1^1073741824,Q=(1073741824^Q)<<1|1073741825;K=N,j=1+Q-N}let Y=h-4;return J.map(f=>{switch(f-Y){case 3:return Y+65792+(p[N++]<<16|p[N++]<<8|p[N++]);case 2:return Y+256+(p[N++]<<8|p[N++]);case 1:return Y+p[N++];default:return f-1}})}(function(p){let f=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((p,h)=>f[p.charCodeAt(0)]=h);let h=p.length,m=new Uint8Array(6*h>>3);for(let M=0,I=0,N=0,Q=0;M<h;M++)Q=Q<<6|f[p.charCodeAt(M)],(N+=6)>=8&&(m[I++]=Q>>(N-=8));return m}(p)),h=0,()=>f[h++]}function read_sorted(p,f=0){let h=[];for(;;){let m=p(),M=p();if(!M)break;f+=m;for(let p=0;p<M;p++)h.push(f+p);f+=M+1}return h}function read_sorted_arrays(p){return read_array_while(()=>{let f=read_sorted(p);if(f.length)return f})}function read_mapped(p){let f=[];for(;;){let h=p();if(0==h)break;f.push(function(p,f){let h=1+f(),m=f(),M=read_array_while(f);return read_transposed(M.length,1+p,f).flatMap((p,f)=>{let[I,...N]=p;return Array(M[f]).fill().map((p,f)=>{let M=f*m;return[I+f*h,N.map(p=>p+M)]})})}(h,p))}for(;;){let h=p()-1;if(h<0)break;f.push(read_transposed(1+p(),1+h,p).map(p=>[p[0],p.slice(1)]))}return f.flat()}function read_array_while(p){let f=[];for(;;){let h=p(f.length);if(!h)break;f.push(h)}return f}function read_transposed(p,f,h){let m=Array(p).fill().map(()=>[]);for(let M=0;M<f;M++)(function(p,f){let h=Array(p);for(let M=0,I=0;M<p;M++){var m;h[M]=I+=1&(m=f())?~m>>1:m>>1}return h})(p,h).forEach((p,f)=>m[f].push(p));return m}function quote_cp(p){return`{${p.toString(16).toUpperCase().padStart(2,"0")}}`}function str_from_cps(p){let f=p.length;if(f<4096)return String.fromCodePoint(...p);let h=[];for(let m=0;m<f;)h.push(String.fromCodePoint(...p.slice(m,m+=4096)));return h.join("")}function compare_arrays(p,f){let h=p.length,m=h-f.length;for(let M=0;0==m&&M<h;M++)m=p[M]-f[M];return m}function unpack_cc(p){return p>>24&255}function unpack_cp(p){return 16777215&p}function is_hangul(p){return p>=44032&&p<55204}function decomposed(p){m||function(){let p=read_compressed_payload("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");for(let[f,h]of(m=new Map(read_sorted_arrays(p).flatMap((p,f)=>p.map(p=>[p,f+1<<24]))),M=new Set(read_sorted(p)),I=new Map,N=new Map,read_mapped(p))){if(!M.has(f)&&2==h.length){let[p,m]=h,M=N.get(p);M||(M=new Map,N.set(p,M)),M.set(m,f)}I.set(f,h.reverse())}}();let f=[],h=[],Q=!1;function add(p){let h=m.get(p);h&&(Q=!0,p|=h),f.push(p)}for(let m of p)for(;;){if(m<128)f.push(m);else if(is_hangul(m)){let p=m-44032,f=p/588|0,h=p%588/28|0,M=p%28;add(4352+f),add(4449+h),M>0&&add(4519+M)}else{let p=I.get(m);p?h.push(...p):add(m)}if(!h.length)break;m=h.pop()}if(Q&&f.length>1){let p=unpack_cc(f[0]);for(let h=1;h<f.length;h++){let m=unpack_cc(f[h]);if(0==m||p<=m){p=m;continue}let M=h-1;for(;;){let h=f[M+1];if(f[M+1]=f[M],f[M]=h,!M||(p=unpack_cc(f[--M]))<=m)break}p=unpack_cc(f[h])}}return f}function nfc(p){return function(p){let f=[],h=[],m=-1,M=0;for(let I of p){let p=unpack_cc(I),Q=unpack_cp(I);if(-1==m)0==p?m=Q:f.push(Q);else if(M>0&&M>=p)0==p?(f.push(m,...h),h.length=0,m=Q):h.push(Q),M=p;else{let I=function(p,f){if(p>=4352&&p<4371&&f>=4449&&f<4470)return 44032+(p-4352)*588+(f-4449)*28;if(is_hangul(p)&&f>4519&&f<4547&&(p-44032)%28==0)return p+(f-4519);{let h=N.get(p);return h&&(h=h.get(f))?h:-1}}(m,Q);I>=0?m=I:0==M&&0==p?(f.push(m),m=Q):(h.push(Q),M=p)}}return m>=0&&f.push(m,...h),f}(decomposed(p))}let Array_from=p=>Array.from(p);function group_has_cp(p,f){return p.P.has(f)||p.Q.has(f)}let Emoji=class Emoji extends Array{get is_emoji(){return!0}};function init(){let p,f;if(Q)return;let h=read_compressed_payload("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"),read_sorted_array=()=>read_sorted(h),read_sorted_set=()=>new Set(read_sorted_array());Q=new Map(read_mapped(h)),U=read_sorted_set(),q=read_sorted_array(),V=new Set(read_sorted_array().map(p=>q[p])),q=new Set(q),J=read_sorted_set(),read_sorted_set();let m=read_sorted_arrays(h),M=h(),read_chunked=()=>new Set(read_sorted_array().flatMap(p=>m[p]).concat(read_sorted_array()));K=read_array_while(p=>{let f=read_array_while(h).map(p=>p+96);if(f.length){let m=p>=M;return f[0]-=32,f=str_from_cps(f),m&&(f=`Restricted[${f}]`),{N:f,P:read_chunked(),Q:read_chunked(),M:!h(),R:m}}}),j=read_sorted_set(),Y=new Map;let I=read_sorted_array().concat(Array_from(j)).sort((p,f)=>p-f);for(let{V:p,M:f}of(I.forEach((p,f)=>{let m=h(),M=I[f]=m?I[f-m]:{V:[],M:new Map};M.V.push(p),j.has(p)||Y.set(p,M)}),new Set(Y.values()))){let h=[];for(let f of p){let p=K.filter(p=>group_has_cp(p,f)),m=h.find(({G:f})=>p.some(p=>f.has(p)));m||(m={G:new Set,V:[]},h.push(m)),m.V.push(f),p.forEach(p=>m.G.add(p))}let m=h.flatMap(p=>Array_from(p.G));for(let{G:p,V:M}of h){let h=new Set(m.filter(f=>!p.has(f)));for(let p of M)f.set(p,h)}}let N=new Set,_=new Set,add_to_union=p=>N.has(p)?_.add(p):N.add(p);for(let p of K){for(let f of p.P)add_to_union(f);for(let f of p.Q)add_to_union(f)}for(let p of N)Y.has(p)||_.has(p)||Y.set(p,1);for(let m of(G=new Set(Array_from(N).concat(Array_from(decomposed(N).map(unpack_cp)))),Z=(p=[],f=read_sorted(h),function expand({S:f,B:h},m,M){if(!(4&f)||M!==m[m.length-1])for(let I of(2&f&&(M=m[m.length-1]),1&f&&p.push(m),h))for(let p of I.Q)expand(I,[...m,p],M)}(function decode(p){return{S:h(),B:read_array_while(()=>{let p=read_sorted(h).map(p=>f[p]);if(p.length)return decode(p)}),Q:p}}([]),[]),p).map(p=>Emoji.from(p)).sort(compare_arrays),X=new Map,Z)){let p=[X];for(let f of m){let h=p.map(p=>{let h=p.get(f);return h||(h=new Map,p.set(f,h)),h});65039===f?p.push(...h):p=h}for(let f of p)f.V=m}}function quoted_cp(p){return(should_escape(p)?"":`${bidi_qq(safe_str_from_cps([p]))} `)+quote_cp(p)}function bidi_qq(p){return`"${p}"\u200E`}function safe_str_from_cps(p,f=quote_cp){var h;let m=[];h=p[0],init(),q.has(h)&&m.push("◌");let M=0,I=p.length;for(let h=0;h<I;h++){let I=p[h];should_escape(I)&&(m.push(str_from_cps(p.slice(M,h))),m.push(f(I)),M=h+1)}return m.push(str_from_cps(p.slice(M,I))),m.join("")}function should_escape(p){return init(),J.has(p)}function error_disallowed(p){return Error(`disallowed character: ${quoted_cp(p)}`)}function error_group_member(p,f){let h=quoted_cp(f),m=K.find(p=>p.P.has(f));return m&&(h=`${m.N} ${h}`),Error(`illegal mixture: ${p.N} + ${h}`)}function error_placement(p){return Error(`illegal placement: ${p}`)}function filter_fe0f(p){return p.filter(p=>65039!=p)}function normalize(p){var f;return(f=function(p,f,h){if(!p)return[];init();let m=0;return p.split(".").map(p=>{let M=function(p){let f=[];for(let h=0,m=p.length;h<m;){let m=p.codePointAt(h);h+=m<65536?1:2,f.push(m)}return f}(p),I={input:M,offset:m};m+=M.length+1;try{let p,m=I.tokens=function(p,f,h){let m=[],M=[];for(p=p.slice().reverse();p.length;){let I=function(p,f){let h,m=X,M=p.length;for(;M&&(m=m.get(p[--M]));){let{V:I}=m;I&&(h=I,f&&f.push(...p.slice(M).reverse()),p.length=M)}return h}(p);if(I)M.length&&(m.push(f(M)),M=[]),m.push(h(I));else{let f=p.pop();if(G.has(f))M.push(f);else{let p=Q.get(f);if(p)M.push(...p);else if(!U.has(f))throw error_disallowed(f)}}}return M.length&&m.push(f(M)),m}(M,f,h),N=m.length;if(!N)throw Error("empty label");let J=I.output=m.flat();if(!function(p){for(let f=p.lastIndexOf(95);f>0;)if(95!==p[--f])throw Error("underscore allowed only at start")}(J),!(I.emoji=N>1||m[0].is_emoji)&&J.every(p=>p<128))!function(p){if(p.length>=4&&45==p[2]&&45==p[3])throw Error(`invalid label extension: "${str_from_cps(p.slice(0,4))}"`)}(J),p="ASCII";else{let f=m.flatMap(p=>p.is_emoji?[]:p);if(f.length){if(q.has(J[0]))throw error_placement("leading combining mark");for(let p=1;p<N;p++){let f=m[p];if(!f.is_emoji&&q.has(f[0]))throw error_placement(`emoji + combining mark: "${str_from_cps(m[p-1])} + ${safe_str_from_cps([f[0]])}"`)}!function(p){let f=p[0],h=_.get(f);if(h)throw error_placement(`leading ${h}`);let m=p.length,M=-1;for(let I=1;I<m;I++){f=p[I];let m=_.get(f);if(m){if(M==I)throw error_placement(`${h} + ${m}`);M=I+1,h=m}}if(M==m)throw error_placement(`trailing ${h}`)}(J);let h=Array_from(new Set(f)),[M]=function(p){let f=K;for(let h of p){let p=f.filter(p=>group_has_cp(p,h));if(!p.length){if(K.some(p=>group_has_cp(p,h)))throw error_group_member(f[0],h);throw error_disallowed(h)}if(f=p,1==p.length)break}return f}(h);(function(p,f){for(let h of f)if(!group_has_cp(p,h))throw error_group_member(p,h);if(p.M){let p=decomposed(f).map(unpack_cp);for(let f=1,h=p.length;f<h;f++)if(V.has(p[f])){let m=f+1;for(let M;m<h&&V.has(M=p[m]);m++)for(let h=f;h<m;h++)if(p[h]==M)throw Error(`duplicate non-spacing marks: ${quoted_cp(M)}`);if(m-f>4)throw Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(p.slice(f-1,m)))} (${m-f}/4)`);f=m}}})(M,f),function(p,f){let h;let m=[];for(let p of f){let f=Y.get(p);if(1===f)return;if(f){let m=f.M.get(p);if(!(h=h?h.filter(p=>m.has(p)):Array_from(m)).length)return}else m.push(p)}if(h){for(let f of h)if(m.every(p=>group_has_cp(f,p)))throw Error(`whole-script confusable: ${p.N}/${f.N}`)}}(M,h),p=M.N}else p="Emoji"}I.type=p}catch(p){I.error=p}return I})}(p,nfc,filter_fe0f)).map(({input:p,error:h,output:m})=>{if(h){let m=h.message;throw Error(1==f.length?m:`Invalid label ${bidi_qq(safe_str_from_cps(p))}: ${m}`)}return str_from_cps(m)}).join(".")}},33844:function(p,f,h){"use strict";h.d(f,{E:function(){return useAccountEffect}});var m=h(10815),M=h(2265),I=h(41012);function useAccountEffect(p={}){let{onConnect:f,onDisconnect:h}=p,N=(0,I.Z)(p);(0,M.useEffect)(()=>(0,m.u)(N,{onChange(p,m){if(("reconnecting"===m.status||"connecting"===m.status&&void 0===m.address)&&"connected"===p.status){let{address:h,addresses:M,chain:I,chainId:N,connector:Q}=p,U="reconnecting"===m.status||void 0===m.status;f?.({address:h,addresses:M,chain:I,chainId:N,connector:Q,isReconnected:U})}else"connected"===m.status&&"disconnected"===p.status&&h?.()}}),[N,f,h])}},81973:function(p,f,h){"use strict";h.d(f,{$:function(){return useConnect}});var m=h(23588),M=h(76026);async function connect(p,f){let h;if((h="function"==typeof f.connector?p._internal.connectors.setup(f.connector):f.connector).uid===p.state.current)throw new M.wi;try{p.setState(p=>({...p,status:"connecting"})),h.emitter.emit("message",{type:"connecting"});let m=await h.connect({chainId:f.chainId}),M=m.accounts;return h.emitter.off("connect",p._internal.events.connect),h.emitter.on("change",p._internal.events.change),h.emitter.on("disconnect",p._internal.events.disconnect),await p.storage?.setItem("recentConnectorId",h.id),p.setState(p=>({...p,connections:new Map(p.connections).set(h.uid,{accounts:M,chainId:m.chainId,connector:h}),current:h.uid,status:"connected"})),{accounts:M,chainId:m.chainId}}catch(f){throw p.setState(p=>({...p,status:p.current?"connected":"disconnected"})),f}}var I=h(2265),N=h(41012),Q=h(48369);let U=[];function getConnectors(p){let f=p.connectors;return(0,Q.v)(U,f)?U:(U=f,f)}function useConnect(p={}){let{mutation:f}=p,h=(0,N.Z)(p),{mutate:M,mutateAsync:Q,...U}=(0,m.D)({...f,mutationFn:p=>connect(h,p),mutationKey:["connect"]});return(0,I.useEffect)(()=>h.subscribe(({status:p})=>p,(p,f)=>{"connected"===f&&"disconnected"===p&&U.reset()}),[h,U]),{...U,connect:M,connectAsync:Q,connectors:function(p={}){let f=(0,N.Z)(p);return(0,I.useSyncExternalStore)(p=>(function(p,f){let{onChange:h}=f;return p._internal.connectors.subscribe((p,f)=>{h(Object.values(p),f)})})(f,{onChange:p}),()=>getConnectors(f),()=>getConnectors(f))}({config:h})}}},41684:function(p,f,h){"use strict";h.d(f,{q:function(){return useDisconnect}});var m=h(23588);async function disconnect(p,f={}){let h;if(f.connector)h=f.connector;else{let{connections:f,current:m}=p.state,M=f.get(m);h=M?.connector}let m=p.state.connections;h&&(await h.disconnect(),h.emitter.off("change",p._internal.events.change),h.emitter.off("disconnect",p._internal.events.disconnect),h.emitter.on("connect",p._internal.events.connect),m.delete(h.uid)),p.setState(p=>{if(0===m.size)return{...p,connections:new Map,current:null,status:"disconnected"};let f=m.values().next().value;return{...p,connections:new Map(m),current:f.connector.uid}});{let f=p.state.current;if(!f)return;let h=p.state.connections.get(f)?.connector;if(!h)return;await p.storage?.setItem("recentConnectorId",h.id)}}var M=h(41012),I=h(48369);let N=[];function getConnections(p){let f=[...p.state.connections.values()];return"reconnecting"===p.state.status||(0,I.v)(N,f)?N:(N=f,f)}var Q=h(2265);function useDisconnect(p={}){let{mutation:f}=p,h=(0,M.Z)(p),{mutate:N,mutateAsync:U,...q}=(0,m.D)({...f,mutationFn:p=>disconnect(h,p),mutationKey:["disconnect"]});return{...q,connectors:(function(p={}){let f=(0,M.Z)(p);return(0,Q.useSyncExternalStore)(p=>(function(p,f){let{onChange:h}=f;return p.subscribe(()=>getConnections(p),h,{equalityFn:I.v})})(f,{onChange:p}),()=>getConnections(f),()=>getConnections(f))})({config:h}).map(p=>p.connector),disconnect:N,disconnectAsync:U}}},96554:function(p,f,h){"use strict";h.d(f,{c:function(){return useEnsAvatar}});var m=h(16470),M=h(46981),I=h(21637),N=h(84855),Q=h(6613),U=h(41012);function useEnsAvatar(p={}){let{name:f,query:h={}}=p,q=(0,U.Z)(p),V=(0,Q.x)({config:q}),J=function(p,f={}){return{async queryFn({queryKey:f}){let{name:h,scopeKey:I,...N}=f[1];if(!h)throw Error("name is required");return function(p,f){let{chainId:h,...I}=f,N=p.getClient({chainId:h}),Q=(0,M.s)(N,m.r,"getEnsAvatar");return Q(I)}(p,{...N,name:h})},queryKey:function(p={}){return["ensAvatar",(0,I.OP)(p)]}(f)}}(q,{...p,chainId:p.chainId??V}),K=!!(f&&(h.enabled??!0));return(0,N.aM)({...h,...J,enabled:K})}},61517:function(p,f,h){"use strict";h.d(f,{F:function(){return useEnsName}});var m=h(42557),M=h(46981),I=h(21637),N=h(84855),Q=h(6613),U=h(41012);function useEnsName(p={}){let{address:f,query:h={}}=p,q=(0,U.Z)(p),V=(0,Q.x)({config:q}),J=function(p,f={}){return{async queryFn({queryKey:f}){let{address:h,scopeKey:I,...N}=f[1];if(!h)throw Error("address is required");return function(p,f){let{chainId:h,...I}=f,N=p.getClient({chainId:h}),Q=(0,M.s)(N,m.w,"getEnsName");return Q(I)}(p,{...N,address:h})},queryKey:function(p={}){return["ensName",(0,I.OP)(p)]}(f)}}(q,{...p,chainId:p.chainId??V}),K=!!(f&&(h.enabled??!0));return(0,N.aM)({...h,...J,enabled:K})}},62200:function(p,f,h){"use strict";h.d(f,{Q:function(){return useSignMessage}});var m=h(23588),M=h(77043),I=h(46981),N=h(71660);async function signMessage_signMessage(p,f){let h;let{account:m,connector:Q,...U}=f;h="object"==typeof m&&"local"===m.type?p.getClient():await (0,N.e)(p,{account:m,connector:Q});let q=(0,I.s)(h,M.l,"signMessage");return q({...U,...m?{account:m}:{}})}var Q=h(41012);function useSignMessage(p={}){let{mutation:f}=p,h=(0,Q.Z)(p),{mutate:M,mutateAsync:I,...N}=(0,m.D)({...f,mutationFn:p=>signMessage_signMessage(h,p),mutationKey:["signMessage"]});return{...N,signMessage:M,signMessageAsync:I}}},73449:function(p,f,h){"use strict";h.d(f,{o:function(){return useSwitchChain}});var m=h(23588),M=h(76026),I=h(29358);async function switchChain(p,f){let{addEthereumChainParameter:h,chainId:m}=f,N=p.state.connections.get(f.connector?.uid??p.state.current);if(N){let p=N.connector;if(!p.switchChain)throw new I.O({connector:p});let f=await p.switchChain({addEthereumChainParameter:h,chainId:m});return f}let Q=p.chains.find(p=>p.id===m);if(!Q)throw new M.X4;return p.setState(p=>({...p,chainId:m})),Q}var N=h(48369);let Q=[];function getChains(p){let f=p.chains;return(0,N.v)(Q,f)?Q:(Q=f,f)}var U=h(2265),q=h(41012);function useSwitchChain(p={}){let{mutation:f}=p,h=(0,q.Z)(p),{mutate:M,mutateAsync:I,...N}=(0,m.D)({...f,mutationFn:p=>switchChain(h,p),mutationKey:["switchChain"]});return{...N,chains:function(p={}){let f=(0,q.Z)(p);return(0,U.useSyncExternalStore)(p=>(function(p,f){let{onChange:h}=f;return p._internal.chains.subscribe((p,f)=>{h(p,f)})})(f,{onChange:p}),()=>getChains(f),()=>getChains(f))}({config:h}),switchChain:M,switchChainAsync:I}}}}]);