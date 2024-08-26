(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9738],{75654:function(e,t,o){"use strict";function vanilla_extract_private_esm_getVarName(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function assignInlineVars(e,t){var o={};if("object"==typeof t)!function vanilla_extract_private_esm_walkObject(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.constructor();for(var i in e){var a=e[i],s=[...o,i];"string"==typeof a||"number"==typeof a||null==a?n[i]=t(a,s):"object"!=typeof a||Array.isArray(a)?console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"')):n[i]=vanilla_extract_private_esm_walkObject(a,t,s)}return n}(t,(t,n)=>{null!=t&&(o[vanilla_extract_private_esm_getVarName(function(e,t){var o=e;for(var n of t){if(!(n in o))throw Error("Path ".concat(t.join(" -> ")," does not exist in object"));o=o[n]}return o}(e,n))]=String(t))});else for(var n in e){var i=e[n];null!=i&&(o[vanilla_extract_private_esm_getVarName(n)]=i)}return Object.defineProperty(o,"toString",{value:function(){return Object.keys(this).map(e=>"".concat(e,":").concat(this[e])).join(";")},writable:!1}),o}o.d(t,{L:function(){return assignInlineVars}})},81950:function(e,t,o){"use strict";function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){!function(e,t,o){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}o.d(t,{$:function(){return createSprinkles}});var createSprinkles_c8550e00_esm_createSprinkles=e=>function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];var i=Object.assign({},...o.map(e=>e.styles)),a=Object.keys(i),s=a.filter(e=>"mappings"in i[e]);return Object.assign(t=>{var o=[],n={},a=_objectSpread2({},t),l=!1;for(var c of s){var u=t[c];if(null!=u)for(var p of(l=!0,i[c].mappings))n[p]=u,null==a[p]&&delete a[p]}var d=l?_objectSpread2(_objectSpread2({},n),a):t;for(var f in d)if("continue"===function(){var e=d[f],t=i[f];try{if(t.mappings)return"continue";if("string"==typeof e||"number"==typeof e)o.push(t.values[e].defaultClass);else if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];if(null!=a){var s=t.responsiveArray[n];o.push(t.values[a].conditions[s])}}else for(var l in e){var c=e[l];null!=c&&o.push(t.values[c].conditions[l])}}catch(e){throw e}}())continue;return e(o.join(" "))},{properties:new Set(a)})},composeStyles=e=>e,createSprinkles=function(){return createSprinkles_c8550e00_esm_createSprinkles(composeStyles)(...arguments)}},49561:function(e,t,o){"use strict";o.d(t,{d:function(){return createMapValueFn},M:function(){return createNormalizeValueFn}});var addRecipe=function(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e};function createNormalizeValueFn(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");return addRecipe(function(e){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return{[t.defaultCondition]:e}}if(Array.isArray(e)){if(!("responsiveArray"in t))throw Error("Responsive arrays are not supported");var o={};for(var n in t.responsiveArray)null!=e[n]&&(o[t.responsiveArray[n]]=e[n]);return o}return e},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function createMapValueFn(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");var o=createNormalizeValueFn(e);return addRecipe(function(e,n){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return n(e,t.defaultCondition)}var i=Array.isArray(e)?o(e):e,a={};for(var s in i)null!=i[s]&&(a[s]=n(i[s],s));return a},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}},13526:function(e){"use strict";var t={single_source_shortest_paths:function(e,o,n){var i,a,s,l,c,u,p,d={},f={};f[o]=0;var h=t.PriorityQueue.make();for(h.push(o,0);!h.empty();)for(s in a=(i=h.pop()).value,l=i.cost,c=e[a]||{})c.hasOwnProperty(s)&&(u=l+c[s],p=f[s],(void 0===f[s]||p>u)&&(f[s]=u,h.push(s,u),d[s]=a));if(void 0!==n&&void 0===f[n])throw Error(["Could not find a path from ",o," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var o=[],n=t;n;)o.push(n),e[n],n=e[n];return o.reverse(),o},find_path:function(e,o,n){var i=t.single_source_shortest_paths(e,o,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var o,n=t.PriorityQueue,i={};for(o in e=e||{},n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62981:function(e){"use strict";e.exports=function(e){for(var t=[],o=e.length,n=0;n<o;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&o>n+1){var a=e.charCodeAt(n+1);a>=56320&&a<=57343&&(i=(i-55296)*1024+a-56320+65536,n+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},20102:function(e,t,o){let n=o(5364),i=o(63865),a=o(52503),s=o(99104);function renderCanvas(e,t,o,a,s){let l=[].slice.call(arguments,1),c=l.length,u="function"==typeof l[c-1];if(!u&&!n())throw Error("Callback required as last argument");if(u){if(c<2)throw Error("Too few arguments provided");2===c?(s=o,o=t,t=a=void 0):3===c&&(t.getContext&&void 0===s?(s=a,a=void 0):(s=a,a=o,o=t,t=void 0))}else{if(c<1)throw Error("Too few arguments provided");return 1===c?(o=t,t=a=void 0):2!==c||t.getContext||(a=o,o=t,t=void 0),new Promise(function(n,s){try{let s=i.create(o,a);n(e(s,t,a))}catch(e){s(e)}})}try{let n=i.create(o,a);s(null,e(n,t,a))}catch(e){s(e)}}t.create=i.create,t.toCanvas=renderCanvas.bind(null,a.render),t.toDataURL=renderCanvas.bind(null,a.renderToDataURL),t.toString=renderCanvas.bind(null,function(e,t,o){return s.render(e,o)})},5364:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},75428:function(e,t,o){let n=o(49210).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,o=n(e),i=145===o?26:2*Math.ceil((o-13)/(2*t-2)),a=[o-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},t.getPositions=function(e){let o=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&o.push([n[e],n[t]]);return o}},60051:function(e,t,o){let n=o(20608),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(e){this.mode=n.ALPHANUMERIC,this.data=e}AlphanumericData.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let o=45*i.indexOf(this.data[t]);o+=i.indexOf(this.data[t+1]),e.put(o,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=AlphanumericData},69873:function(e){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let o=0;o<t;o++)this.putBit((e>>>t-o-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=BitBuffer},54813:function(e){function BitMatrix(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}BitMatrix.prototype.set=function(e,t,o,n){let i=e*this.size+t;this.data[i]=o,n&&(this.reservedBit[i]=!0)},BitMatrix.prototype.get=function(e,t){return this.data[e*this.size+t]},BitMatrix.prototype.xor=function(e,t,o){this.data[e*this.size+t]^=o},BitMatrix.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=BitMatrix},75112:function(e,t,o){let n=o(62981),i=o(20608);function ByteData(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}ByteData.getBitsLength=function(e){return 8*e},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(e){for(let t=0,o=this.data.length;t<o;t++)e.put(this.data[t],8)},e.exports=ByteData},58045:function(e,t,o){let n=o(6084),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return a[(e-1)*4+0];case n.M:return a[(e-1)*4+1];case n.Q:return a[(e-1)*4+2];case n.H:return a[(e-1)*4+3];default:return}}},6084:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,o){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let o=e.toLowerCase();switch(o){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return o}}},2379:function(e,t,o){let n=o(49210).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},88566:function(e,t,o){let n=o(49210),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let o=e.bit<<3|t,a=o<<10;for(;n.getBCHDigit(a)-i>=0;)a^=1335<<n.getBCHDigit(a)-i;return(o<<10|a)^21522}},88201:function(e,t){let o=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)o[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)o[e]=o[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return o[e]},t.mul=function(e,t){return 0===e||0===t?0:o[n[e]+n[t]]}},26250:function(e,t,o){let n=o(20608),i=o(49210);function KanjiData(e){this.mode=n.KANJI,this.data=e}KanjiData.getBitsLength=function(e){return 13*e},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let o=i.toSJIS(this.data[t]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");o=(o>>>8&255)*192+(255&o),e.put(o,13)}},e.exports=KanjiData},61760:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let o={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,a=0,s=null,l=null;for(let c=0;c<t;c++){i=a=0,s=l=null;for(let u=0;u<t;u++){let t=e.get(c,u);t===s?i++:(i>=5&&(n+=o.N1+(i-5)),s=t,i=1),(t=e.get(u,c))===l?a++:(a>=5&&(n+=o.N1+(a-5)),l=t,a=1)}i>=5&&(n+=o.N1+(i-5)),a>=5&&(n+=o.N1+(a-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let o=0;o<t-1;o++)for(let i=0;i<t-1;i++){let t=e.get(o,i)+e.get(o,i+1)+e.get(o+1,i)+e.get(o+1,i+1);(4===t||0===t)&&n++}return n*o.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,a=0;for(let o=0;o<t;o++){i=a=0;for(let s=0;s<t;s++)i=i<<1&2047|e.get(o,s),s>=10&&(1488===i||93===i)&&n++,a=a<<1&2047|e.get(s,o),s>=10&&(1488===a||93===a)&&n++}return n*o.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let o=0;o<n;o++)t+=e.data[o];let i=Math.abs(Math.ceil(100*t/n/5)-10);return i*o.N4},t.applyMask=function(e,o){let n=o.size;for(let i=0;i<n;i++)for(let a=0;a<n;a++)o.isReserved(a,i)||o.xor(a,i,function(e,o,n){switch(e){case t.Patterns.PATTERN000:return(o+n)%2==0;case t.Patterns.PATTERN001:return o%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(o+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return o*n%2+o*n%3==0;case t.Patterns.PATTERN110:return(o*n%2+o*n%3)%2==0;case t.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,i))},t.getBestMask=function(e,o){let n=Object.keys(t.Patterns).length,i=0,a=1/0;for(let s=0;s<n;s++){o(s),t.applyMask(s,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),n<a&&(a=n,i=s)}return i}},20608:function(e,t,o){let n=o(80789),i=o(80347);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,o){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let o=e.toLowerCase();switch(o){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return o}}},98163:function(e,t,o){let n=o(20608);function NumericData(e){this.mode=n.NUMERIC,this.data=e.toString()}NumericData.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(e){let t,o;for(t=0;t+3<=this.data.length;t+=3)o=parseInt(this.data.substr(t,3),10),e.put(o,10);let n=this.data.length-t;n>0&&(o=parseInt(this.data.substr(t),10),e.put(o,3*n+1))},e.exports=NumericData},60466:function(e,t,o){let n=o(88201);t.mul=function(e,t){let o=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<t.length;a++)o[i+a]^=n.mul(e[i],t[a]);return o},t.mod=function(e,t){let o=new Uint8Array(e);for(;o.length-t.length>=0;){let e=o[0];for(let i=0;i<t.length;i++)o[i]^=n.mul(t[i],e);let i=0;for(;i<o.length&&0===o[i];)i++;o=o.slice(i)}return o},t.generateECPolynomial=function(e){let o=new Uint8Array([1]);for(let i=0;i<e;i++)o=t.mul(o,new Uint8Array([1,n.exp(i)]));return o}},63865:function(e,t,o){let n=o(49210),i=o(6084),a=o(69873),s=o(54813),l=o(75428),c=o(2379),u=o(61760),p=o(58045),d=o(14196),f=o(87667),h=o(88566),A=o(20608),w=o(22844);function setupFormatInfo(e,t,o){let n,i;let a=e.size,s=h.getEncodedBits(t,o);for(n=0;n<15;n++)i=(s>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(a-15+n,8,i,!0),n<8?e.set(8,a-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let o,h;if(void 0===e||""===e)throw Error("No input text");let g=i.M;return void 0!==t&&(g=i.from(t.errorCorrectionLevel,i.M),o=f.from(t.version),h=u.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,o,i){let h;if(Array.isArray(e))h=w.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=w.rawSplit(e);n=f.getBestVersionForData(t,o)}h=w.fromString(e,n||40)}else throw Error("Invalid data");let g=f.getBestVersionForData(h,o);if(!g)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<g)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+g+".\n")}else t=g;let m=function(e,t,o){let i=new a;o.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),A.getCharCountIndicator(t.mode,e)),t.write(i)});let s=n.getSymbolTotalCodewords(e),l=p.getTotalCodewordsCount(e,t),c=(s-l)*8;for(i.getLengthInBits()+4<=c&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let u=(c-i.getLengthInBits())/8;for(let e=0;e<u;e++)i.put(e%2?17:236,8);return function(e,t,o){let i,a;let s=n.getSymbolTotalCodewords(t),l=p.getTotalCodewordsCount(t,o),c=s-l,u=p.getBlocksCount(t,o),f=s%u,h=u-f,A=Math.floor(s/u),w=Math.floor(c/u),g=w+1,m=A-w,b=new d(m),y=0,C=Array(u),v=Array(u),B=0,E=new Uint8Array(e.buffer);for(let e=0;e<u;e++){let t=e<h?w:g;C[e]=E.slice(y,y+t),v[e]=b.encode(C[e]),y+=t,B=Math.max(B,t)}let k=new Uint8Array(s),x=0;for(i=0;i<B;i++)for(a=0;a<u;a++)i<C[a].length&&(k[x++]=C[a][i]);for(i=0;i<m;i++)for(a=0;a<u;a++)k[x++]=v[a][i];return k}(i,e,t)}(t,o,h),b=n.getSymbolSize(t),y=new s(b);return function(e,t){let o=e.size,n=c.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],a=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(o<=i+t))for(let n=-1;n<=7;n++)a+n<=-1||o<=a+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,a+n,!0,!0):e.set(i+t,a+n,!1,!0))}}(y,t),function(e){let t=e.size;for(let o=8;o<t-8;o++){let t=o%2==0;e.set(o,6,t,!0),e.set(6,o,t,!0)}}(y),function(e,t){let o=l.getPositions(t);for(let t=0;t<o.length;t++){let n=o[t][0],i=o[t][1];for(let t=-2;t<=2;t++)for(let o=-2;o<=2;o++)-2===t||2===t||-2===o||2===o||0===t&&0===o?e.set(n+t,i+o,!0,!0):e.set(n+t,i+o,!1,!0)}}(y,t),setupFormatInfo(y,o,0),t>=7&&function(e,t){let o,n,i;let a=e.size,s=f.getEncodedBits(t);for(let t=0;t<18;t++)o=Math.floor(t/3),n=t%3+a-8-3,i=(s>>t&1)==1,e.set(o,n,i,!0),e.set(n,o,i,!0)}(y,t),function(e,t){let o=e.size,n=-1,i=o-1,a=7,s=0;for(let l=o-1;l>0;l-=2)for(6===l&&l--;;){for(let o=0;o<2;o++)if(!e.isReserved(i,l-o)){let n=!1;s<t.length&&(n=(t[s]>>>a&1)==1),e.set(i,l-o,n),-1==--a&&(s++,a=7)}if((i+=n)<0||o<=i){i-=n,n=-n;break}}}(y,m),isNaN(i)&&(i=u.getBestMask(y,setupFormatInfo.bind(null,y,o))),u.applyMask(i,y),setupFormatInfo(y,o,i),{modules:y,version:t,errorCorrectionLevel:o,maskPattern:i,segments:h}}(e,o,g,h)}},14196:function(e,t,o){let n=o(60466);function ReedSolomonEncoder(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let o=n.mod(t,this.genPoly),i=this.degree-o.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(o,i),e}return o},e.exports=ReedSolomonEncoder},80347:function(e,t){let o="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");let i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(o,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+n+"$"),s=RegExp("^"+o+"$"),l=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return l.test(e)}},22844:function(e,t,o){let n=o(20608),i=o(98163),a=o(60051),s=o(75112),l=o(26250),c=o(80347),u=o(49210),p=o(13526);function getStringByteLength(e){return unescape(encodeURIComponent(e)).length}function getSegments(e,t,o){let n;let i=[];for(;null!==(n=e.exec(o));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function getSegmentsFromString(e){let t,o;let i=getSegments(c.NUMERIC,n.NUMERIC,e),a=getSegments(c.ALPHANUMERIC,n.ALPHANUMERIC,e);u.isKanjiModeEnabled()?(t=getSegments(c.BYTE,n.BYTE,e),o=getSegments(c.KANJI,n.KANJI,e)):(t=getSegments(c.BYTE_KANJI,n.BYTE,e),o=[]);let s=i.concat(a,t,o);return s.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function getSegmentBitsLength(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return a.getBitsLength(e);case n.KANJI:return l.getBitsLength(e);case n.BYTE:return s.getBitsLength(e)}}function buildSingleSegment(e,t){let o;let c=n.getBestModeForData(e);if((o=n.from(t,c))!==n.BYTE&&o.bit<c.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(o)+".\n Suggested mode is: "+n.toString(c));switch(o!==n.KANJI||u.isKanjiModeEnabled()||(o=n.BYTE),o){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new a(e);case n.KANJI:return new l(e);case n.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(buildSingleSegment(t,null)):t.data&&e.push(buildSingleSegment(t.data,t.mode)),e},[])},t.fromString=function(e,o){let i=getSegmentsFromString(e,u.isKanjiModeEnabled()),a=function(e){let t=[];for(let o=0;o<e.length;o++){let i=e[o];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:getStringByteLength(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:getStringByteLength(i.data)}])}}return t}(i),s=function(e,t){let o={},i={start:{}},a=["start"];for(let s=0;s<e.length;s++){let l=e[s],c=[];for(let e=0;e<l.length;e++){let u=l[e],p=""+s+e;c.push(p),o[p]={node:u,lastCount:0},i[p]={};for(let e=0;e<a.length;e++){let s=a[e];o[s]&&o[s].node.mode===u.mode?(i[s][p]=getSegmentBitsLength(o[s].lastCount+u.length,u.mode)-getSegmentBitsLength(o[s].lastCount,u.mode),o[s].lastCount+=u.length):(o[s]&&(o[s].lastCount=u.length),i[s][p]=getSegmentBitsLength(u.length,u.mode)+4+n.getCharCountIndicator(u.mode,t))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:o}}(a,o),l=p.find_path(s.map,"start","end"),c=[];for(let e=1;e<l.length-1;e++)c.push(s.table[l[e]].node);return t.fromArray(c.reduce(function(e,t){let o=e.length-1>=0?e[e.length-1]:null;return o&&o.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(getSegmentsFromString(e,u.isKanjiModeEnabled()))}},49210:function(e,t){let o;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');o=e},t.isKanjiModeEnabled=function(){return void 0!==o},t.toSJIS=function(e){return o(e)}},80789:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},87667:function(e,t,o){let n=o(49210),i=o(58045),a=o(6084),s=o(20608),l=o(80789),c=n.getBCHDigit(7973);function getReservedBitsCount(e,t){return s.getCharCountIndicator(e,t)+4}t.from=function(e,t){return l.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,o){if(!l.isValid(e))throw Error("Invalid QR Code version");void 0===o&&(o=s.BYTE);let a=n.getSymbolTotalCodewords(e),c=i.getTotalCodewordsCount(e,t),u=(a-c)*8;if(o===s.MIXED)return u;let p=u-getReservedBitsCount(o,e);switch(o){case s.NUMERIC:return Math.floor(p/10*3);case s.ALPHANUMERIC:return Math.floor(p/11*2);case s.KANJI:return Math.floor(p/13);case s.BYTE:default:return Math.floor(p/8)}},t.getBestVersionForData=function(e,o){let n;let i=a.from(o,a.M);if(Array.isArray(e)){if(e.length>1)return function(e,o){for(let n=1;n<=40;n++){let i=function(e,t){let o=0;return e.forEach(function(e){let n=getReservedBitsCount(e.mode,t);o+=n+e.getBitsLength()}),o}(e,n);if(i<=t.getCapacity(n,o,s.MIXED))return n}}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,o,n){for(let i=1;i<=40;i++)if(o<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!l.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-c>=0;)t^=7973<<n.getBCHDigit(t)-c;return e<<12|t}},52503:function(e,t,o){let n=o(86957);t.render=function(e,t,o){var i;let a=o,s=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(s=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=n.getOptions(a);let l=n.getImageWidth(e.modules.size,a),c=s.getContext("2d"),u=c.createImageData(l,l);return n.qrToImageData(u.data,e,a),i=s,c.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=l,i.width=l,i.style.height=l+"px",i.style.width=l+"px",c.putImageData(u,0,0),s},t.renderToDataURL=function(e,o,n){let i=n;void 0!==i||o&&o.getContext||(i=o,o=void 0),i||(i={});let a=t.render(e,o,i),s=i.type||"image/png",l=i.rendererOpts||{};return a.toDataURL(s,l.quality)}},99104:function(e,t,o){let n=o(86957);function getColorAttrib(e,t){let o=e.a/255,n=t+'="'+e.hex+'"';return o<1?n+" "+t+'-opacity="'+o.toFixed(2).slice(1)+'"':n}function svgCmd(e,t,o){let n=e+t;return void 0!==o&&(n+=" "+o),n}t.render=function(e,t,o){let i=n.getOptions(t),a=e.modules.size,s=e.modules.data,l=a+2*i.margin,c=i.color.light.a?"<path "+getColorAttrib(i.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+getColorAttrib(i.color.dark,"stroke")+' d="'+function(e,t,o){let n="",i=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(n+=a?svgCmd("M",c+o,.5+u+o):svgCmd("m",i,0),i=0,a=!1),c+1<t&&e[l+1]||(n+=svgCmd("h",s),s=0)):i++}return n}(s,a,i.margin)+'"/>',p=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",d='<svg xmlns="http://www.w3.org/2000/svg" '+p+('viewBox="0 0 '+l)+" "+l+'" shape-rendering="crispEdges">'+c+u+"</svg>\n";return"function"==typeof o&&o(null,d),d}},86957:function(e,t){function hex2rgba(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let o=parseInt(t.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:255&o,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,o=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:o,scale:o?4:n,margin:t,color:{dark:hex2rgba(e.color.dark||"#000000ff"),light:hex2rgba(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,o){let n=t.getScale(e,o);return Math.floor((e+2*o.margin)*n)},t.qrToImageData=function(e,o,n){let i=o.modules.size,a=o.modules.data,s=t.getScale(i,n),l=Math.floor((i+2*n.margin)*s),c=n.margin*s,u=[n.color.light,n.color.dark];for(let t=0;t<l;t++)for(let o=0;o<l;o++){let p=(t*l+o)*4,d=n.color.light;if(t>=c&&o>=c&&t<l-c&&o<l-c){let e=Math.floor((t-c)/s),n=Math.floor((o-c)/s);d=u[a[e*i+n]?1:0]}e[p++]=d.r,e[p++]=d.g,e[p++]=d.b,e[p]=d.a}}},40465:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var n=o(55731),i=o(64103),a=o(72178),s=o(99090),l=(0,o(22132)._)(),nothing=function(){},c=i.forwardRef(function(e,t){var o=i.useRef(null),a=i.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),c=a[0],u=a[1],p=e.forwardProps,d=e.children,f=e.className,h=e.removeScrollBar,A=e.enabled,w=e.shards,g=e.sideCar,m=e.noIsolation,b=e.inert,y=e.allowPinchZoom,C=e.as,v=void 0===C?"div":C,B=e.gapMode,E=(0,n.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=(0,s.q)([o,t]),x=(0,n.__assign)((0,n.__assign)({},E),c);return i.createElement(i.Fragment,null,A&&i.createElement(g,{sideCar:l,removeScrollBar:h,shards:w,noIsolation:m,inert:b,setCallbacks:u,allowPinchZoom:!!y,lockRef:o,gapMode:B}),p?i.cloneElement(i.Children.only(d),(0,n.__assign)((0,n.__assign)({},x),{ref:k})):i.createElement(v,(0,n.__assign)({},x,{className:f,ref:k}),d))});c.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},c.classNames={fullWidth:a.zi,zeroRight:a.pF};var u=o(94345),p=o(68398),d=o(87259),f=!1;if("undefined"!=typeof window)try{var h=Object.defineProperty({},"passive",{get:function(){return f=!0,!0}});window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch(e){f=!1}var A=!!f&&{passive:!1},elementCanBeScrolled=function(e,t){var o=window.getComputedStyle(e);return"hidden"!==o[t]&&!(o.overflowY===o.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===o[t])},locationCouldBeScrolled=function(e,t){var o=t.ownerDocument,n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var i=getScrollVariables(e,n);if(i[1]>i[2])return!0}n=n.parentNode}while(n&&n!==o.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,o,n,i){var a,s=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),l=s*n,c=o.target,u=t.contains(c),p=!1,d=l>0,f=0,h=0;do{var A=getScrollVariables(e,c),w=A[0],g=A[1]-A[2]-s*w;(w||g)&&elementCouldBeScrolled(e,c)&&(f+=g,h+=w),c=c instanceof ShadowRoot?c.host:c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return d&&(i&&1>Math.abs(f)||!i&&l>f)?p=!0:!d&&(i&&1>Math.abs(h)||!i&&-l>h)&&(p=!0),p},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},w=0,g=[],m=(0,u.L)(l,function(e){var t=i.useRef([]),o=i.useRef([0,0]),a=i.useRef(),s=i.useState(w++)[0],l=i.useState(d.Ws)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var t=(0,n.__spreadArray)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var u=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var n,i=getTouchXY(e),s=o.current,l="deltaX"in e?e.deltaX:s[0]-i[0],u="deltaY"in e?e.deltaY:s[1]-i[1],p=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===p.type)return!1;var f=locationCouldBeScrolled(d,p);if(!f)return!0;if(f?n=d:(n="v"===d?"h":"v",f=locationCouldBeScrolled(d,p)),!f)return!1;if(!a.current&&"changedTouches"in e&&(l||u)&&(a.current=n),!n)return!0;var h=a.current||n;return handleScroll(h,t,e,"h"===h?l:u,!0)},[]),f=i.useCallback(function(e){if(g.length&&g[g.length-1]===l){var o="deltaY"in e?getDeltaXY(e):getTouchXY(e),n=t.current.filter(function(t){var n;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(n=t.delta)[0]===o[0]&&n[1]===o[1]})[0];if(n&&n.should){e.cancelable&&e.preventDefault();return}if(!n){var i=(c.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?u(e,i[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=i.useCallback(function(e,o,n,i){var a={name:e,delta:o,target:n,should:i,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(n)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),m=i.useCallback(function(e){o.current=getTouchXY(e),a.current=void 0},[]),b=i.useCallback(function(t){h(t.type,getDeltaXY(t),t.target,u(t,e.lockRef.current))},[]),y=i.useCallback(function(t){h(t.type,getTouchXY(t),t.target,u(t,e.lockRef.current))},[]);i.useEffect(function(){return g.push(l),e.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:y}),document.addEventListener("wheel",f,A),document.addEventListener("touchmove",f,A),document.addEventListener("touchstart",m,A),function(){g=g.filter(function(e){return e!==l}),document.removeEventListener("wheel",f,A),document.removeEventListener("touchmove",f,A),document.removeEventListener("touchstart",m,A)}},[]);var C=e.removeScrollBar,v=e.inert;return i.createElement(i.Fragment,null,v?i.createElement(l,{styles:"\n  .block-interactivity-".concat(s," {pointer-events: none;}\n  .allow-interactivity-").concat(s," {pointer-events: all;}\n")}):null,C?i.createElement(p.jp,{gapMode:e.gapMode}):null)}),b=i.forwardRef(function(e,t){return i.createElement(c,(0,n.__assign)({},e,{ref:t,sideCar:m}))});b.classNames=c.classNames;var y=b},44726:function(e,t,o){"use strict";o.d(t,{Z:function(){return esm_useWindowSize}});var n=o(64103),esm_useEffectOnce=function(e){(0,n.useEffect)(e,[])},esm_useUnmount=function(e){var t=(0,n.useRef)(e);t.current=e,esm_useEffectOnce(function(){return function(){return t.current()}})},esm_useRafState=function(e){var t=(0,n.useRef)(0),o=(0,n.useState)(e),i=o[0],a=o[1],s=(0,n.useCallback)(function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){a(e)})},[]);return esm_useUnmount(function(){cancelAnimationFrame(t.current)}),[i,s]},i=o(17695),esm_useWindowSize=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var o=esm_useRafState({width:i.jU?window.innerWidth:e,height:i.jU?window.innerHeight:t}),a=o[0],s=o[1];return(0,n.useEffect)(function(){if(i.jU){var handler_1=function(){s({width:window.innerWidth,height:window.innerHeight})};return(0,i.on)(window,"resize",handler_1),function(){(0,i.S1)(window,"resize",handler_1)}}},[]),a}},39856:function(e,t,o){var n;!function(i,a){"use strict";var s="function",l="undefined",c="object",u="string",p="major",d="model",f="name",h="type",A="vendor",w="version",g="architecture",m="console",b="mobile",y="tablet",C="smarttv",v="wearable",B="embedded",E="Amazon",k="Apple",x="ASUS",M="BlackBerry",I="Browser",D="Chrome",R="Firefox",S="Google",N="Huawei",Q="Microsoft",P="Motorola",W="Opera",F="Samsung",O="Sharp",T="Sony",U="Xiaomi",L="Zebra",q="Facebook",z="Chromium OS",H="Mac OS",extend=function(e,t){var o={};for(var n in e)t[n]&&t[n].length%2==0?o[n]=t[n].concat(e[n]):o[n]=e[n];return o},enumerize=function(e){for(var t={},o=0;o<e.length;o++)t[e[o].toUpperCase()]=e[o];return t},has=function(e,t){return typeof e===u&&-1!==lowerize(t).indexOf(lowerize(e))},lowerize=function(e){return e.toLowerCase()},trim=function(e,t){if(typeof e===u)return e=e.replace(/^\s\s*/,""),typeof t===l?e:e.substring(0,500)},rgxMapper=function(e,t){for(var o,n,i,l,u,p,d=0;d<t.length&&!u;){var f=t[d],h=t[d+1];for(o=n=0;o<f.length&&!u&&f[o];)if(u=f[o++].exec(e))for(i=0;i<h.length;i++)p=u[++n],typeof(l=h[i])===c&&l.length>0?2===l.length?typeof l[1]==s?this[l[0]]=l[1].call(this,p):this[l[0]]=l[1]:3===l.length?typeof l[1]!==s||l[1].exec&&l[1].test?this[l[0]]=p?p.replace(l[1],l[2]):a:this[l[0]]=p?l[1].call(this,p,l[2]):a:4===l.length&&(this[l[0]]=p?l[3].call(this,p.replace(l[1],l[2])):a):this[l]=p||a;d+=2}},strMapper=function(e,t){for(var o in t)if(typeof t[o]===c&&t[o].length>0){for(var n=0;n<t[o].length;n++)if(has(t[o][n],e))return"?"===o?a:o}else if(has(t[o],e))return"?"===o?a:o;return e},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},J={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,w],[/opios[\/ ]+([\w\.]+)/i],[w,[f,W+" Mini"]],[/\bopr\/([\w\.]+)/i],[w,[f,W]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[w,[f,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[f,"UC"+I]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[w,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[f,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[w,[f,"Smart Lenovo "+I]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure "+I],w],[/\bfocus\/([\w\.]+)/i],[w,[f,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[f,W+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[f,W+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[f,"MIUI "+I]],[/fxios\/([-\w\.]+)/i],[w,[f,R]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 "+I]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 "+I],w],[/samsungbrowser\/([\w\.]+)/i],[w,[f,F+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],w],[/metasr[\/ ]?([\d\.]+)/i],[w,[f,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[f,"Sogou Mobile"],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[f,w],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,q],w],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[f,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[f,D+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,D+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[f,"Android "+I]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[f,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[w,strMapper,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[f,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,w],[/(cobalt)\/([\w\.]+)/i],[f,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[A,F],[h,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[A,F],[h,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[A,k],[h,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[A,k],[h,y]],[/(macintosh);/i],[d,[A,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[A,O],[h,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[A,N],[h,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[A,N],[h,b]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[A,U],[h,b]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[A,U],[h,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[A,"OPPO"],[h,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[A,"Vivo"],[h,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[A,"Realme"],[h,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[A,P],[h,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[A,P],[h,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[A,"LG"],[h,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[A,"LG"],[h,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[A,"Lenovo"],[h,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[A,"Nokia"],[h,b]],[/(pixel c)\b/i],[d,[A,S],[h,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[A,S],[h,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[A,T],[h,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[A,T],[h,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[A,"OnePlus"],[h,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[A,E],[h,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[A,E],[h,b]],[/(playbook);[-\w\),; ]+(rim)/i],[d,A,[h,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[A,M],[h,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[A,x],[h,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[A,x],[h,b]],[/(nexus 9)/i],[d,[A,"HTC"],[h,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[A,[d,/_/g," "],[h,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[A,"Acer"],[h,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[A,"Meizu"],[h,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[A,"Ulefone"],[h,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[A,d,[h,b]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[A,d,[h,y]],[/(surface duo)/i],[d,[A,Q],[h,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[A,"Fairphone"],[h,b]],[/(u304aa)/i],[d,[A,"AT&T"],[h,b]],[/\bsie-(\w*)/i],[d,[A,"Siemens"],[h,b]],[/\b(rct\w+) b/i],[d,[A,"RCA"],[h,y]],[/\b(venue[\d ]{2,7}) b/i],[d,[A,"Dell"],[h,y]],[/\b(q(?:mv|ta)\w+) b/i],[d,[A,"Verizon"],[h,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[A,"Barnes & Noble"],[h,y]],[/\b(tm\d{3}\w+) b/i],[d,[A,"NuVision"],[h,y]],[/\b(k88) b/i],[d,[A,"ZTE"],[h,y]],[/\b(nx\d{3}j) b/i],[d,[A,"ZTE"],[h,b]],[/\b(gen\d{3}) b.+49h/i],[d,[A,"Swiss"],[h,b]],[/\b(zur\d{3}) b/i],[d,[A,"Swiss"],[h,y]],[/\b((zeki)?tb.*\b) b/i],[d,[A,"Zeki"],[h,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[A,"Dragon Touch"],d,[h,y]],[/\b(ns-?\w{0,9}) b/i],[d,[A,"Insignia"],[h,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[A,"NextBook"],[h,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[A,"Voice"],d,[h,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[A,"LvTel"],d,[h,b]],[/\b(ph-1) /i],[d,[A,"Essential"],[h,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[A,"Envizen"],[h,y]],[/\b(trio[-\w\. ]+) b/i],[d,[A,"MachSpeed"],[h,y]],[/\btu_(1491) b/i],[d,[A,"Rotor"],[h,y]],[/(shield[\w ]+) b/i],[d,[A,"Nvidia"],[h,y]],[/(sprint) (\w+)/i],[A,d,[h,b]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[A,Q],[h,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[A,L],[h,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[A,L],[h,b]],[/smart-tv.+(samsung)/i],[A,[h,C]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[A,F],[h,C]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[A,"LG"],[h,C]],[/(apple) ?tv/i],[A,[d,k+" TV"],[h,C]],[/crkey/i],[[d,D+"cast"],[A,S],[h,C]],[/droid.+aft(\w+)( bui|\))/i],[d,[A,E],[h,C]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[A,O],[h,C]],[/(bravia[\w ]+)( bui|\))/i],[d,[A,T],[h,C]],[/(mitv-\w{5}) bui/i],[d,[A,U],[h,C]],[/Hbbtv.*(technisat) (.*);/i],[A,d,[h,C]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[A,trim],[d,trim],[h,C]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[h,C]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[A,d,[h,m]],[/droid.+; (shield) bui/i],[d,[A,"Nvidia"],[h,m]],[/(playstation [345portablevi]+)/i],[d,[A,T],[h,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[A,Q],[h,m]],[/((pebble))app/i],[A,d,[h,v]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[A,k],[h,v]],[/droid.+; (glass) \d/i],[d,[A,S],[h,v]],[/droid.+; (wt63?0{2,3})\)/i],[d,[A,L],[h,v]],[/(quest( 2| pro)?)/i],[d,[A,q],[h,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[A,[h,B]],[/(aeobc)\b/i],[d,[A,E],[h,B]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[h,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[h,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[h,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[h,b]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[A,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,w],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[f,[w,strMapper,K]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,strMapper,K],[f,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,H],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,w],[/\(bb(10);/i],[w,[f,M]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[f,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[f,D+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,z],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,w],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,w]]},UAParser=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof UAParser))return new UAParser(e,t).getResult();var o=typeof i!==l&&i.navigator?i.navigator:a,n=e||(o&&o.userAgent?o.userAgent:""),m=o&&o.userAgentData?o.userAgentData:a,C=t?extend(J,t):J,v=o&&o.userAgent==n;return this.getBrowser=function(){var e,t={};return t[f]=a,t[w]=a,rgxMapper.call(t,n,C.browser),t[p]=typeof(e=t[w])===u?e.replace(/[^\d\.]/g,"").split(".")[0]:a,v&&o&&o.brave&&typeof o.brave.isBrave==s&&(t[f]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,rgxMapper.call(e,n,C.cpu),e},this.getDevice=function(){var e={};return e[A]=a,e[d]=a,e[h]=a,rgxMapper.call(e,n,C.device),v&&!e[h]&&m&&m.mobile&&(e[h]=b),v&&"Macintosh"==e[d]&&o&&typeof o.standalone!==l&&o.maxTouchPoints&&o.maxTouchPoints>2&&(e[d]="iPad",e[h]=y),e},this.getEngine=function(){var e={};return e[f]=a,e[w]=a,rgxMapper.call(e,n,C.engine),e},this.getOS=function(){var e={};return e[f]=a,e[w]=a,rgxMapper.call(e,n,C.os),v&&!e[f]&&m&&"Unknown"!=m.platform&&(e[f]=m.platform.replace(/chrome os/i,z).replace(/macos/i,H)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===u&&e.length>500?trim(e,500):e,this},this.setUA(n),this};UAParser.VERSION="1.0.37",UAParser.BROWSER=enumerize([f,w,p]),UAParser.CPU=enumerize([g]),UAParser.DEVICE=enumerize([d,A,h,m,b,C,y,v,B]),UAParser.ENGINE=UAParser.OS=enumerize([f,w]),typeof t!==l?(e.exports&&(t=e.exports=UAParser),t.UAParser=UAParser):o.amdO?a!==(n=(function(){return UAParser}).call(t,o,t,e))&&(e.exports=n):typeof i!==l&&(i.UAParser=UAParser);var j=typeof i!==l&&(i.jQuery||i.Zepto);if(j&&!j.ua){var V=new UAParser;j.ua=V.getResult(),j.ua.get=function(){return V.getUA()},j.ua.set=function(e){V.setUA(e);var t=V.getResult();for(var o in t)j.ua[o]=t[o]}}}("object"==typeof window?window:this)},65116:function(e,t,o){"use strict";o.d(t,{ee:function(){return I},Eh:function(){return R},VY:function(){return D},fC:function(){return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9},D7:function(){return m}});var n=o(80317),i=o(64103),a=o(2075),s=o(48410),l=o(55078);let floating_ui_react_dom_esm_arrow=e=>({name:"arrow",options:e,fn(t){let{element:o,padding:n}="function"==typeof e?e(t):e;if(o&&({}).hasOwnProperty.call(o,"current")){if(null!=o.current)return(0,a.x7)({element:o.current,padding:n}).fn(t)}else if(o)return(0,a.x7)({element:o,padding:n}).fn(t);return{}}});var c="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function deepEqual(e,t){let o,n,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((o=e.length)!=t.length)return!1;for(n=o;0!=n--;)if(!deepEqual(e[n],t[n]))return!1;return!0}if((o=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=o;0!=n--;)if(!({}).hasOwnProperty.call(t,i[n]))return!1;for(n=o;0!=n--;){let o=i[n];if(("_owner"!==o||!e.$$typeof)&&!deepEqual(e[o],t[o]))return!1}return!0}return e!=e&&t!=t}function getDPR(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function roundByDPR(e,t){let o=getDPR(e);return Math.round(t*o)/o}function useLatestRef(e){let t=i.useRef(e);return c(()=>{t.current=e}),t}var u=o(35705);let p=(0,i.forwardRef)((e,t)=>{let{children:o,width:a=10,height:s=5,...l}=e;return(0,i.createElement)(u.WV.svg,(0,n.Z)({},l,{ref:t,width:a,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?o:(0,i.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var d=o(4042),f=o(85834),h=o(60691),A=o(99875);let w="Popper",[g,m]=(0,f.b)(w),[b,y]=g(w),C=(0,i.forwardRef)((e,t)=>{let{__scopePopper:o,virtualRef:a,...s}=e,l=y("PopperAnchor",o),c=(0,i.useRef)(null),p=(0,d.e)(t,c);return(0,i.useEffect)(()=>{l.onAnchorChange((null==a?void 0:a.current)||c.current)}),a?null:(0,i.createElement)(u.WV.div,(0,n.Z)({},s,{ref:p}))}),v="PopperContent",[B,E]=g(v),k=(0,i.forwardRef)((e,t)=>{var o,p,f,w,g,m,b,C;let{__scopePopper:E,side:k="bottom",sideOffset:x=0,align:M="center",alignOffset:I=0,arrowPadding:D=0,collisionBoundary:R=[],collisionPadding:S=0,sticky:N="partial",hideWhenDetached:Q=!1,avoidCollisions:P=!0,onPlaced:W,...F}=e,O=y(v,E),[T,U]=(0,i.useState)(null),L=(0,d.e)(t,e=>U(e)),[q,z]=(0,i.useState)(null),H=function(e){let[t,o]=(0,i.useState)(void 0);return(0,A.b)(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,i;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,i=t.blockSize}else n=e.offsetWidth,i=e.offsetHeight;o({width:n,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}o(void 0)},[e]),t}(q),K=null!==(o=null==H?void 0:H.width)&&void 0!==o?o:0,J=null!==(p=null==H?void 0:H.height)&&void 0!==p?p:0,j="number"==typeof S?S:{top:0,right:0,bottom:0,left:0,...S},V=Array.isArray(R)?R:[R],Y=V.length>0,G={padding:j,boundary:V.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:Y},{refs:Z,floatingStyles:X,placement:_,isPositioned:$,middlewareData:ee}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:o="absolute",middleware:n=[],platform:a,elements:{reference:u,floating:p}={},transform:d=!0,whileElementsMounted:f,open:h}=e,[A,w]=i.useState({x:0,y:0,strategy:o,placement:t,middlewareData:{},isPositioned:!1}),[g,m]=i.useState(n);deepEqual(g,n)||m(n);let[b,y]=i.useState(null),[C,v]=i.useState(null),B=i.useCallback(e=>{e!=M.current&&(M.current=e,y(e))},[y]),E=i.useCallback(e=>{e!==I.current&&(I.current=e,v(e))},[v]),k=u||b,x=p||C,M=i.useRef(null),I=i.useRef(null),D=i.useRef(A),R=useLatestRef(f),S=useLatestRef(a),N=i.useCallback(()=>{if(!M.current||!I.current)return;let e={placement:t,strategy:o,middleware:g};S.current&&(e.platform=S.current),(0,s.oo)(M.current,I.current,e).then(e=>{let t={...e,isPositioned:!0};Q.current&&!deepEqual(D.current,t)&&(D.current=t,l.flushSync(()=>{w(t)}))})},[g,t,o,S]);c(()=>{!1===h&&D.current.isPositioned&&(D.current.isPositioned=!1,w(e=>({...e,isPositioned:!1})))},[h]);let Q=i.useRef(!1);c(()=>(Q.current=!0,()=>{Q.current=!1}),[]),c(()=>{if(k&&(M.current=k),x&&(I.current=x),k&&x){if(R.current)return R.current(k,x,N);N()}},[k,x,N,R]);let P=i.useMemo(()=>({reference:M,floating:I,setReference:B,setFloating:E}),[B,E]),W=i.useMemo(()=>({reference:k,floating:x}),[k,x]),F=i.useMemo(()=>{let e={position:o,left:0,top:0};if(!W.floating)return e;let t=roundByDPR(W.floating,A.x),n=roundByDPR(W.floating,A.y);return d?{...e,transform:"translate("+t+"px, "+n+"px)",...getDPR(W.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:t,top:n}},[o,d,W.floating,A.x,A.y]);return i.useMemo(()=>({...A,update:N,refs:P,elements:W,floatingStyles:F}),[A,N,P,W,F])}({strategy:"fixed",placement:k+("center"!==M?"-"+M:""),whileElementsMounted:s.Me,elements:{reference:O.anchor},middleware:[(0,a.cv)({mainAxis:x+J,alignmentAxis:I}),P&&(0,a.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===N?(0,a.dr)():void 0,...G}),P&&(0,a.RR)({...G}),(0,a.dp)({...G,apply:({elements:e,rects:t,availableWidth:o,availableHeight:n})=>{let{width:i,height:a}=t.reference,s=e.floating.style;s.setProperty("--radix-popper-available-width",`${o}px`),s.setProperty("--radix-popper-available-height",`${n}px`),s.setProperty("--radix-popper-anchor-width",`${i}px`),s.setProperty("--radix-popper-anchor-height",`${a}px`)}}),q&&floating_ui_react_dom_esm_arrow({element:q,padding:D}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth:K,arrowHeight:J}),Q&&(0,a.Cp)({strategy:"referenceHidden"})]}),[et,er]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(_),eo=(0,h.W)(W);(0,A.b)(()=>{$&&(null==eo||eo())},[$,eo]);let en=null===(f=ee.arrow)||void 0===f?void 0:f.x,ei=null===(w=ee.arrow)||void 0===w?void 0:w.y,ea=(null===(g=ee.arrow)||void 0===g?void 0:g.centerOffset)!==0,[es,el]=(0,i.useState)();return(0,A.b)(()=>{T&&el(window.getComputedStyle(T).zIndex)},[T]),(0,i.createElement)("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:$?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:es,"--radix-popper-transform-origin":[null===(m=ee.transformOrigin)||void 0===m?void 0:m.x,null===(b=ee.transformOrigin)||void 0===b?void 0:b.y].join(" ")},dir:e.dir},(0,i.createElement)(B,{scope:E,placedSide:et,onArrowChange:z,arrowX:en,arrowY:ei,shouldHideArrow:ea},(0,i.createElement)(u.WV.div,(0,n.Z)({"data-side":et,"data-align":er},F,{ref:L,style:{...F.style,animation:$?void 0:"none",opacity:null!==(C=ee.hide)&&void 0!==C&&C.referenceHidden?0:void 0}}))))}),x={top:"bottom",right:"left",bottom:"top",left:"right"},M=(0,i.forwardRef)(function(e,t){let{__scopePopper:o,...a}=e,s=E("PopperArrow",o),l=x[s.placedSide];return(0,i.createElement)("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0}},(0,i.createElement)(p,(0,n.Z)({},a,{ref:t,style:{...a.style,display:"block"}})))});function $cf1ac5d9fe0e8206$var$isNotNull(e){return null!==e}let $cf1ac5d9fe0e8206$var$transformOrigin=e=>({name:"transformOrigin",options:e,fn(t){var o,n,i,a,s;let{placement:l,rects:c,middlewareData:u}=t,p=(null===(o=u.arrow)||void 0===o?void 0:o.centerOffset)!==0,d=p?0:e.arrowWidth,f=p?0:e.arrowHeight,[h,A]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(l),w={start:"0%",center:"50%",end:"100%"}[A],g=(null!==(n=null===(i=u.arrow)||void 0===i?void 0:i.x)&&void 0!==n?n:0)+d/2,m=(null!==(a=null===(s=u.arrow)||void 0===s?void 0:s.y)&&void 0!==a?a:0)+f/2,b="",y="";return"bottom"===h?(b=p?w:`${g}px`,y=`${-f}px`):"top"===h?(b=p?w:`${g}px`,y=`${c.floating.height+f}px`):"right"===h?(b=`${-f}px`,y=p?w:`${m}px`):"left"===h&&(b=`${c.floating.width+f}px`,y=p?w:`${m}px`),{data:{x:b,y:y}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(e){let[t,o="center"]=e.split("-");return[t,o]}let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=e=>{let{__scopePopper:t,children:o}=e,[n,a]=(0,i.useState)(null);return(0,i.createElement)(b,{scope:t,anchor:n,onAnchorChange:a},o)},I=C,D=k,R=M},15768:function(e,t,o){"use strict";o.d(t,{I:function(){return n}});var n=`{
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
`},4410:function(e,t,o){"use strict";o.d(t,{W:function(){return lightTheme}});var n=o(89468),i={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},a=i.blue,lightTheme=({accentColor:e=a.accentColor,accentColorForeground:t=a.accentColorForeground,...o}={})=>({...(0,n.w)(o),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});lightTheme.accentColors=i},89468:function(e,t,o){"use strict";o.d(t,{w:function(){return baseTheme}});var n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',i={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${n}`,system:n},a={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},s={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},baseTheme=({borderRadius:e="large",fontStack:t="rounded",overlayBlur:o="none"})=>({blurs:{modalOverlay:s[o].modalOverlay},fonts:{body:i[t]},radii:{actionButton:a[e].actionButton,connectButton:a[e].connectButton,menuButton:a[e].connectButton,modal:a[e].modal,modalMobile:a[e].modalMobile}})},76464:function(e,t,o){"use strict";function createConnector(e){return e}o.d(t,{K:function(){return createConnector}})},76384:function(e,t,o){"use strict";o.d(t,{M:function(){return ProviderNotFoundError},O:function(){return SwitchChainNotSupportedError}});var n=o(12621);let ProviderNotFoundError=class ProviderNotFoundError extends n.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}};let SwitchChainNotSupportedError=class SwitchChainNotSupportedError extends n.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},54457:function(e,t,o){"use strict";t.Z=function(){for(var e,t,o=0,n="",i=arguments.length;o<i;o++)(e=arguments[o])&&(t=function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(n&&(n+=" "),n+=t);return n}},60463:function(e,t,o){"use strict";o.d(t,{R:function(){return i}});var n=o(61070);let i=(0,n.a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},88656:function(e,t,o){"use strict";let n,i,a,s,l,c,u,p,d,f,h,A,w,g,m;o.d(t,{F:function(){return normalize}});let b=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function read_compressed_payload(e){var t;let o;return t=function(e){let t=0;function u16(){return e[t++]<<8|e[t++]}let o=u16(),n=1,i=[0,1];for(let e=1;e<o;e++)i.push(n+=u16());let a=u16(),s=t;t+=a;let l=0,c=0;function read_bit(){return 0==l&&(c=c<<8|e[t++],l=8),c>>--l&1}let u=2147483648-1,p=0;for(let e=0;e<31;e++)p=p<<1|read_bit();let d=[],f=0,h=2147483648;for(;;){let e=Math.floor(((p-f+1)*n-1)/h),t=0,a=o;for(;a-t>1;){let o=t+a>>>1;e<i[o]?a=o:t=o}if(0==t)break;d.push(t);let s=f+Math.floor(h*i[t]/n),l=f+Math.floor(h*i[t+1]/n)-1;for(;((s^l)&1073741824)==0;)p=p<<1&u|read_bit(),s=s<<1&u,l=l<<1&u|1;for(;s&~l&536870912;)p=1073741824&p|p<<1&u>>>1|read_bit(),s=s<<1^1073741824,l=(1073741824^l)<<1|1073741825;f=s,h=1+l-s}let A=o-4;return d.map(t=>{switch(t-A){case 3:return A+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return A+256+(e[s++]<<8|e[s++]);case 1:return A+e[s++];default:return t-1}})}(function(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e,o)=>t[e.charCodeAt(0)]=o);let o=e.length,n=new Uint8Array(6*o>>3);for(let i=0,a=0,s=0,l=0;i<o;i++)l=l<<6|t[e.charCodeAt(i)],(s+=6)>=8&&(n[a++]=l>>(s-=8));return n}(e)),o=0,()=>t[o++]}function read_sorted(e,t=0){let o=[];for(;;){let n=e(),i=e();if(!i)break;t+=n;for(let e=0;e<i;e++)o.push(t+e);t+=i+1}return o}function read_sorted_arrays(e){return read_array_while(()=>{let t=read_sorted(e);if(t.length)return t})}function read_mapped(e){let t=[];for(;;){let o=e();if(0==o)break;t.push(function(e,t){let o=1+t(),n=t(),i=read_array_while(t);return read_transposed(i.length,1+e,t).flatMap((e,t)=>{let[a,...s]=e;return Array(i[t]).fill().map((e,t)=>{let i=t*n;return[a+t*o,s.map(e=>e+i)]})})}(o,e))}for(;;){let o=e()-1;if(o<0)break;t.push(read_transposed(1+e(),1+o,e).map(e=>[e[0],e.slice(1)]))}return t.flat()}function read_array_while(e){let t=[];for(;;){let o=e(t.length);if(!o)break;t.push(o)}return t}function read_transposed(e,t,o){let n=Array(e).fill().map(()=>[]);for(let i=0;i<t;i++)(function(e,t){let o=Array(e);for(let i=0,a=0;i<e;i++){var n;o[i]=a+=1&(n=t())?~n>>1:n>>1}return o})(e,o).forEach((e,t)=>n[t].push(e));return n}function quote_cp(e){return`{${e.toString(16).toUpperCase().padStart(2,"0")}}`}function str_from_cps(e){let t=e.length;if(t<4096)return String.fromCodePoint(...e);let o=[];for(let n=0;n<t;)o.push(String.fromCodePoint(...e.slice(n,n+=4096)));return o.join("")}function compare_arrays(e,t){let o=e.length,n=o-t.length;for(let i=0;0==n&&i<o;i++)n=e[i]-t[i];return n}function unpack_cc(e){return e>>24&255}function unpack_cp(e){return 16777215&e}function is_hangul(e){return e>=44032&&e<55204}function decomposed(e){n||function(){let e=read_compressed_payload("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");for(let[t,o]of(n=new Map(read_sorted_arrays(e).flatMap((e,t)=>e.map(e=>[e,t+1<<24]))),i=new Set(read_sorted(e)),a=new Map,s=new Map,read_mapped(e))){if(!i.has(t)&&2==o.length){let[e,n]=o,i=s.get(e);i||(i=new Map,s.set(e,i)),i.set(n,t)}a.set(t,o.reverse())}}();let t=[],o=[],l=!1;function add(e){let o=n.get(e);o&&(l=!0,e|=o),t.push(e)}for(let n of e)for(;;){if(n<128)t.push(n);else if(is_hangul(n)){let e=n-44032,t=e/588|0,o=e%588/28|0,i=e%28;add(4352+t),add(4449+o),i>0&&add(4519+i)}else{let e=a.get(n);e?o.push(...e):add(n)}if(!o.length)break;n=o.pop()}if(l&&t.length>1){let e=unpack_cc(t[0]);for(let o=1;o<t.length;o++){let n=unpack_cc(t[o]);if(0==n||e<=n){e=n;continue}let i=o-1;for(;;){let o=t[i+1];if(t[i+1]=t[i],t[i]=o,!i||(e=unpack_cc(t[--i]))<=n)break}e=unpack_cc(t[o])}}return t}function nfc(e){return function(e){let t=[],o=[],n=-1,i=0;for(let a of e){let e=unpack_cc(a),l=unpack_cp(a);if(-1==n)0==e?n=l:t.push(l);else if(i>0&&i>=e)0==e?(t.push(n,...o),o.length=0,n=l):o.push(l),i=e;else{let a=function(e,t){if(e>=4352&&e<4371&&t>=4449&&t<4470)return 44032+(e-4352)*588+(t-4449)*28;if(is_hangul(e)&&t>4519&&t<4547&&(e-44032)%28==0)return e+(t-4519);{let o=s.get(e);return o&&(o=o.get(t))?o:-1}}(n,l);a>=0?n=a:0==i&&0==e?(t.push(n),n=l):(o.push(l),i=e)}}return n>=0&&t.push(n,...o),t}(decomposed(e))}let Array_from=e=>Array.from(e);function group_has_cp(e,t){return e.P.has(t)||e.Q.has(t)}let Emoji=class Emoji extends Array{get is_emoji(){return!0}};function init(){let e,t;if(l)return;let o=read_compressed_payload("AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI"),read_sorted_array=()=>read_sorted(o),read_sorted_set=()=>new Set(read_sorted_array());l=new Map(read_mapped(o)),c=read_sorted_set(),u=read_sorted_array(),p=new Set(read_sorted_array().map(e=>u[e])),u=new Set(u),d=read_sorted_set(),read_sorted_set();let n=read_sorted_arrays(o),i=o(),read_chunked=()=>new Set(read_sorted_array().flatMap(e=>n[e]).concat(read_sorted_array()));f=read_array_while(e=>{let t=read_array_while(o).map(e=>e+96);if(t.length){let n=e>=i;return t[0]-=32,t=str_from_cps(t),n&&(t=`Restricted[${t}]`),{N:t,P:read_chunked(),Q:read_chunked(),M:!o(),R:n}}}),h=read_sorted_set(),A=new Map;let a=read_sorted_array().concat(Array_from(h)).sort((e,t)=>e-t);for(let{V:e,M:t}of(a.forEach((e,t)=>{let n=o(),i=a[t]=n?a[t-n]:{V:[],M:new Map};i.V.push(e),h.has(e)||A.set(e,i)}),new Set(A.values()))){let o=[];for(let t of e){let e=f.filter(e=>group_has_cp(e,t)),n=o.find(({G:t})=>e.some(e=>t.has(e)));n||(n={G:new Set,V:[]},o.push(n)),n.V.push(t),e.forEach(e=>n.G.add(e))}let n=o.flatMap(e=>Array_from(e.G));for(let{G:e,V:i}of o){let o=new Set(n.filter(t=>!e.has(t)));for(let e of i)t.set(e,o)}}let s=new Set,b=new Set,add_to_union=e=>s.has(e)?b.add(e):s.add(e);for(let e of f){for(let t of e.P)add_to_union(t);for(let t of e.Q)add_to_union(t)}for(let e of s)A.has(e)||b.has(e)||A.set(e,1);for(let n of(w=new Set(Array_from(s).concat(Array_from(decomposed(s).map(unpack_cp)))),g=(e=[],t=read_sorted(o),function expand({S:t,B:o},n,i){if(!(4&t)||i!==n[n.length-1])for(let a of(2&t&&(i=n[n.length-1]),1&t&&e.push(n),o))for(let e of a.Q)expand(a,[...n,e],i)}(function decode(e){return{S:o(),B:read_array_while(()=>{let e=read_sorted(o).map(e=>t[e]);if(e.length)return decode(e)}),Q:e}}([]),[]),e).map(e=>Emoji.from(e)).sort(compare_arrays),m=new Map,g)){let e=[m];for(let t of n){let o=e.map(e=>{let o=e.get(t);return o||(o=new Map,e.set(t,o)),o});65039===t?e.push(...o):e=o}for(let t of e)t.V=n}}function quoted_cp(e){return(should_escape(e)?"":`${bidi_qq(safe_str_from_cps([e]))} `)+quote_cp(e)}function bidi_qq(e){return`"${e}"\u200E`}function safe_str_from_cps(e,t=quote_cp){var o;let n=[];o=e[0],init(),u.has(o)&&n.push("◌");let i=0,a=e.length;for(let o=0;o<a;o++){let a=e[o];should_escape(a)&&(n.push(str_from_cps(e.slice(i,o))),n.push(t(a)),i=o+1)}return n.push(str_from_cps(e.slice(i,a))),n.join("")}function should_escape(e){return init(),d.has(e)}function error_disallowed(e){return Error(`disallowed character: ${quoted_cp(e)}`)}function error_group_member(e,t){let o=quoted_cp(t),n=f.find(e=>e.P.has(t));return n&&(o=`${n.N} ${o}`),Error(`illegal mixture: ${e.N} + ${o}`)}function error_placement(e){return Error(`illegal placement: ${e}`)}function filter_fe0f(e){return e.filter(e=>65039!=e)}function normalize(e){var t;return(t=function(e,t,o){if(!e)return[];init();let n=0;return e.split(".").map(e=>{let i=function(e){let t=[];for(let o=0,n=e.length;o<n;){let n=e.codePointAt(o);o+=n<65536?1:2,t.push(n)}return t}(e),a={input:i,offset:n};n+=i.length+1;try{let e,n=a.tokens=function(e,t,o){let n=[],i=[];for(e=e.slice().reverse();e.length;){let a=function(e,t){let o,n=m,i=e.length;for(;i&&(n=n.get(e[--i]));){let{V:a}=n;a&&(o=a,t&&t.push(...e.slice(i).reverse()),e.length=i)}return o}(e);if(a)i.length&&(n.push(t(i)),i=[]),n.push(o(a));else{let t=e.pop();if(w.has(t))i.push(t);else{let e=l.get(t);if(e)i.push(...e);else if(!c.has(t))throw error_disallowed(t)}}}return i.length&&n.push(t(i)),n}(i,t,o),s=n.length;if(!s)throw Error("empty label");let d=a.output=n.flat();if(!function(e){for(let t=e.lastIndexOf(95);t>0;)if(95!==e[--t])throw Error("underscore allowed only at start")}(d),!(a.emoji=s>1||n[0].is_emoji)&&d.every(e=>e<128))!function(e){if(e.length>=4&&45==e[2]&&45==e[3])throw Error(`invalid label extension: "${str_from_cps(e.slice(0,4))}"`)}(d),e="ASCII";else{let t=n.flatMap(e=>e.is_emoji?[]:e);if(t.length){if(u.has(d[0]))throw error_placement("leading combining mark");for(let e=1;e<s;e++){let t=n[e];if(!t.is_emoji&&u.has(t[0]))throw error_placement(`emoji + combining mark: "${str_from_cps(n[e-1])} + ${safe_str_from_cps([t[0]])}"`)}!function(e){let t=e[0],o=b.get(t);if(o)throw error_placement(`leading ${o}`);let n=e.length,i=-1;for(let a=1;a<n;a++){t=e[a];let n=b.get(t);if(n){if(i==a)throw error_placement(`${o} + ${n}`);i=a+1,o=n}}if(i==n)throw error_placement(`trailing ${o}`)}(d);let o=Array_from(new Set(t)),[i]=function(e){let t=f;for(let o of e){let e=t.filter(e=>group_has_cp(e,o));if(!e.length){if(f.some(e=>group_has_cp(e,o)))throw error_group_member(t[0],o);throw error_disallowed(o)}if(t=e,1==e.length)break}return t}(o);(function(e,t){for(let o of t)if(!group_has_cp(e,o))throw error_group_member(e,o);if(e.M){let e=decomposed(t).map(unpack_cp);for(let t=1,o=e.length;t<o;t++)if(p.has(e[t])){let n=t+1;for(let i;n<o&&p.has(i=e[n]);n++)for(let o=t;o<n;o++)if(e[o]==i)throw Error(`duplicate non-spacing marks: ${quoted_cp(i)}`);if(n-t>4)throw Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(e.slice(t-1,n)))} (${n-t}/4)`);t=n}}})(i,t),function(e,t){let o;let n=[];for(let e of t){let t=A.get(e);if(1===t)return;if(t){let n=t.M.get(e);if(!(o=o?o.filter(e=>n.has(e)):Array_from(n)).length)return}else n.push(e)}if(o){for(let t of o)if(n.every(e=>group_has_cp(t,e)))throw Error(`whole-script confusable: ${e.N}/${t.N}`)}}(i,o),e=i.N}else e="Emoji"}a.type=e}catch(e){a.error=e}return a})}(e,nfc,filter_fe0f)).map(({input:e,error:o,output:n})=>{if(o){let n=o.message;throw Error(1==t.length?n:`Invalid label ${bidi_qq(safe_str_from_cps(e))}: ${n}`)}return str_from_cps(n)}).join(".")}},58168:function(e,t,o){"use strict";o.d(t,{E:function(){return useAccountEffect}});var n=o(15242),i=o(64103),a=o(79062);function useAccountEffect(e={}){let{onConnect:t,onDisconnect:o}=e,s=(0,a.Z)(e);(0,i.useEffect)(()=>(0,n.u)(s,{onChange(e,n){if(("reconnecting"===n.status||"connecting"===n.status&&void 0===n.address)&&"connected"===e.status){let{address:o,addresses:i,chain:a,chainId:s,connector:l}=e,c="reconnecting"===n.status||void 0===n.status;t?.({address:o,addresses:i,chain:a,chainId:s,connector:l,isReconnected:c})}else"connected"===n.status&&"disconnected"===e.status&&o?.()}}),[s,t,o])}},95833:function(e,t,o){"use strict";o.d(t,{$:function(){return useConnect}});var n=o(95499),i=o(39834);async function connect(e,t){let o;if((o="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new i.wi;try{e.setState(e=>({...e,status:"connecting"})),o.emitter.emit("message",{type:"connecting"});let n=await o.connect({chainId:t.chainId}),i=n.accounts;return o.emitter.off("connect",e._internal.events.connect),o.emitter.on("change",e._internal.events.change),o.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",o.id),e.setState(e=>({...e,connections:new Map(e.connections).set(o.uid,{accounts:i,chainId:n.chainId,connector:o}),current:o.uid,status:"connected"})),{accounts:i,chainId:n.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var a=o(64103),s=o(79062),l=o(41629);let c=[];function getConnectors(e){let t=e.connectors;return(0,l.v)(c,t)?c:(c=t,t)}function useConnect(e={}){let{mutation:t}=e,o=(0,s.Z)(e),i=function(e={}){let t=(0,s.Z)(e);return(0,a.useSyncExternalStore)(e=>(function(e,t){let{onChange:o}=t;return e._internal.connectors.subscribe((e,t)=>{o(Object.values(e),t)})})(t,{onChange:e}),()=>getConnectors(t),()=>getConnectors(t))}({config:o}),{mutate:l,mutateAsync:c,...u}=(0,n.D)({...t,mutationFn:e=>connect(o,e),mutationKey:["connect"]});return(0,a.useEffect)(()=>o.subscribe(({status:e})=>e,(e,t)=>{"connected"===t&&"disconnected"===e&&u.reset()}),[o,u]),{...u,connect:l,connectAsync:c,connectors:i}}},72054:function(e,t,o){"use strict";o.d(t,{q:function(){return useDisconnect}});var n=o(95499);async function disconnect(e,t={}){let o;if(t.connector)o=t.connector;else{let{connections:t,current:n}=e.state,i=t.get(n);o=i?.connector}let n=e.state.connections;o&&(await o.disconnect(),o.emitter.off("change",e._internal.events.change),o.emitter.off("disconnect",e._internal.events.disconnect),o.emitter.on("connect",e._internal.events.connect),n.delete(o.uid)),e.setState(e=>{if(0===n.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=n.values().next().value;return{...e,connections:new Map(n),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let o=e.state.connections.get(t)?.connector;if(!o)return;await e.storage?.setItem("recentConnectorId",o.id)}}var i=o(79062),a=o(41629);let s=[];function getConnections(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,a.v)(s,t)?s:(s=t,t)}var l=o(64103);function useDisconnect(e={}){let{mutation:t}=e,o=(0,i.Z)(e),{mutate:s,mutateAsync:c,...u}=(0,n.D)({...t,mutationFn:e=>disconnect(o,e),mutationKey:["disconnect"]});return{...u,connectors:(function(e={}){let t=(0,i.Z)(e);return(0,l.useSyncExternalStore)(e=>(function(e,t){let{onChange:o}=t;return e.subscribe(()=>getConnections(e),o,{equalityFn:a.v})})(t,{onChange:e}),()=>getConnections(t),()=>getConnections(t))})({config:o}).map(e=>e.connector),disconnect:s,disconnectAsync:c}}},86519:function(e,t,o){"use strict";o.d(t,{c:function(){return useEnsAvatar}});var n=o(76993),i=o(53332),a=o(48647),s=o(60893),l=o(52776),c=o(79062);function useEnsAvatar(e={}){let{name:t,query:o={}}=e,u=(0,c.Z)(e),p=(0,l.x)({config:u}),d=function(e,t={}){return{async queryFn({queryKey:t}){let{name:o,scopeKey:a,...s}=t[1];if(!o)throw Error("name is required");return function(e,t){let{chainId:o,...a}=t,s=e.getClient({chainId:o}),l=(0,i.s)(s,n.r,"getEnsAvatar");return l(a)}(e,{...s,name:o})},queryKey:function(e={}){return["ensAvatar",(0,a.O)(e)]}(t)}}(u,{...e,chainId:e.chainId??p}),f=!!(t&&(o.enabled??!0));return(0,s.aM)({...o,...d,enabled:f})}},51701:function(e,t,o){"use strict";o.d(t,{F:function(){return useEnsName}});var n=o(21445),i=o(53332),a=o(48647),s=o(60893),l=o(52776),c=o(79062);function useEnsName(e={}){let{address:t,query:o={}}=e,u=(0,c.Z)(e),p=(0,l.x)({config:u}),d=function(e,t={}){return{async queryFn({queryKey:t}){let{address:o,scopeKey:a,...s}=t[1];if(!o)throw Error("address is required");return function(e,t){let{chainId:o,...a}=t,s=e.getClient({chainId:o}),l=(0,i.s)(s,n.w,"getEnsName");return l(a)}(e,{...s,address:o})},queryKey:function(e={}){return["ensName",(0,a.O)(e)]}(t)}}(u,{...e,chainId:e.chainId??p}),f=!!(t&&(o.enabled??!0));return(0,s.aM)({...o,...d,enabled:f})}},82294:function(e,t,o){"use strict";o.d(t,{Q:function(){return useSignMessage}});var n=o(95499),i=o(53930),a=o(53332),s=o(70474);async function signMessage_signMessage(e,t){let o;let{account:n,connector:l,...c}=t;o="object"==typeof n&&"local"===n.type?e.getClient():await (0,s.e)(e,{account:n,connector:l});let u=(0,a.s)(o,i.l,"signMessage");return u({...c,...n?{account:n}:{}})}var l=o(79062);function useSignMessage(e={}){let{mutation:t}=e,o=(0,l.Z)(e),{mutate:i,mutateAsync:a,...s}=(0,n.D)({...t,mutationFn:e=>signMessage_signMessage(o,e),mutationKey:["signMessage"]});return{...s,signMessage:i,signMessageAsync:a}}},2992:function(e,t,o){"use strict";o.d(t,{o:function(){return useSwitchChain}});var n=o(95499),i=o(39834),a=o(76384);async function switchChain(e,t){let{addEthereumChainParameter:o,chainId:n}=t,s=e.state.connections.get(t.connector?.uid??e.state.current);if(s){let e=s.connector;if(!e.switchChain)throw new a.O({connector:e});let t=await e.switchChain({addEthereumChainParameter:o,chainId:n});return t}let l=e.chains.find(e=>e.id===n);if(!l)throw new i.X4;return e.setState(e=>({...e,chainId:n})),l}var s=o(41629);let l=[];function getChains(e){let t=e.chains;return(0,s.v)(l,t)?l:(l=t,t)}var c=o(64103),u=o(79062);function useSwitchChain(e={}){let{mutation:t}=e,o=(0,u.Z)(e),{mutate:i,mutateAsync:a,...s}=(0,n.D)({...t,mutationFn:e=>switchChain(o,e),mutationKey:["switchChain"]});return{...s,chains:function(e={}){let t=(0,u.Z)(e);return(0,c.useSyncExternalStore)(e=>(function(e,t){let{onChange:o}=t;return e._internal.chains.subscribe((e,t)=>{o(e,t)})})(t,{onChange:e}),()=>getChains(t),()=>getChains(t))}({config:o}),switchChain:i,switchChainAsync:a}}}}]);