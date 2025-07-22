(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dv={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=Symbol.for("react.transitional.element"),ES=Symbol.for("react.fragment");function hv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:bS,type:t,key:i,ref:e!==void 0?e:null,props:n}}pu.Fragment=ES;pu.jsx=hv;pu.jsxs=hv;dv.exports=pu;var v=dv.exports,pv={exports:{}},Ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=Symbol.for("react.transitional.element"),TS=Symbol.for("react.portal"),AS=Symbol.for("react.fragment"),wS=Symbol.for("react.strict_mode"),RS=Symbol.for("react.profiler"),CS=Symbol.for("react.consumer"),NS=Symbol.for("react.context"),DS=Symbol.for("react.forward_ref"),US=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),mv=Symbol.for("react.lazy"),bm=Symbol.iterator;function OS(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vv=Object.assign,xv={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||gv}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _v(){}_v.prototype=Rs.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||gv}var $h=Kh.prototype=new _v;$h.constructor=Kh;vv($h,Rs.prototype);$h.isPureReactComponent=!0;var Em=Array.isArray,wt={H:null,A:null,T:null,S:null,V:null},yv=Object.prototype.hasOwnProperty;function Qh(t,e,n,i,a,r){return n=r.ref,{$$typeof:Zh,type:t,key:e,ref:n!==void 0?n:null,props:r}}function PS(t,e){return Qh(t.type,e,void 0,void 0,void 0,t.props)}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zh}function FS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tm=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FS(""+t.key):e.toString(36)}function Am(){}function zS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Am,Am):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Br(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Zh:case TS:s=!0;break;case mv:return s=t._init,Br(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Gu(t,0):i,Em(a)?(n="",s!=null&&(n=s.replace(Tm,"$&/")+"/"),Br(a,e,n,"",function(c){return c})):a!=null&&(Jh(a)&&(a=PS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Tm,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Em(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Gu(i,l),s+=Br(i,e,n,r,a);else if(l=OS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Gu(i,l++),s+=Br(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Br(zS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function yl(t,e,n){if(t==null)return t;var i=[],a=0;return Br(t,i,"","",function(r){return e.call(n,r,a++)}),i}function BS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function IS(){}Ke.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Rs;Ke.Fragment=AS;Ke.Profiler=RS;Ke.PureComponent=Kh;Ke.StrictMode=wS;Ke.Suspense=US;Ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wt;Ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return wt.H.useMemoCache(t)}};Ke.cache=function(t){return function(){return t.apply(null,arguments)}};Ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=vv({},t.props),a=t.key,r=void 0;if(e!=null)for(s in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(a=""+e.key),e)!yv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Qh(t.type,a,void 0,void 0,r,i)};Ke.createContext=function(t){return t={$$typeof:NS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:CS,_context:t},t};Ke.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)yv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Qh(t,r,void 0,void 0,null,a)};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:DS,render:t}};Ke.isValidElement=Jh;Ke.lazy=function(t){return{$$typeof:mv,_payload:{_status:-1,_result:t},_init:BS}};Ke.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=wt.T,n={};wt.T=n;try{var i=t(),a=wt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(IS,wm)}catch(r){wm(r)}finally{wt.T=e}};Ke.unstable_useCacheRefresh=function(){return wt.H.useCacheRefresh()};Ke.use=function(t){return wt.H.use(t)};Ke.useActionState=function(t,e,n){return wt.H.useActionState(t,e,n)};Ke.useCallback=function(t,e){return wt.H.useCallback(t,e)};Ke.useContext=function(t){return wt.H.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t,e){return wt.H.useDeferredValue(t,e)};Ke.useEffect=function(t,e,n){var i=wt.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};Ke.useId=function(){return wt.H.useId()};Ke.useImperativeHandle=function(t,e,n){return wt.H.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return wt.H.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return wt.H.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return wt.H.useMemo(t,e)};Ke.useOptimistic=function(t,e){return wt.H.useOptimistic(t,e)};Ke.useReducer=function(t,e,n){return wt.H.useReducer(t,e,n)};Ke.useRef=function(t){return wt.H.useRef(t)};Ke.useState=function(t){return wt.H.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return wt.H.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return wt.H.useTransition()};Ke.version="19.1.0";pv.exports=Ke;var P=pv.exports;const HS=fv(P);var Sv={exports:{}},mu={},Mv={exports:{}},bv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,k){var z=O.length;O.push(k);e:for(;0<z;){var J=z-1>>>1,le=O[J];if(0<a(le,k))O[J]=k,O[z]=le,z=J;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var k=O[0],z=O.pop();if(z!==k){O[0]=z;e:for(var J=0,le=O.length,Se=le>>>1;J<Se;){var de=2*(J+1)-1,Ne=O[de],j=de+1,K=O[j];if(0>a(Ne,z))j<le&&0>a(K,Ne)?(O[J]=K,O[j]=z,J=j):(O[J]=Ne,O[de]=z,J=de);else if(j<le&&0>a(K,z))O[J]=K,O[j]=z,J=j;else break e}}return k}function a(O,k){var z=O.sortIndex-k.sortIndex;return z!==0?z:O.id-k.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,_=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function M(O){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=O)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function R(O){if(_=!1,M(O),!x)if(n(l)!==null)x=!0,w||(w=!0,H());else{var k=n(c);k!==null&&q(R,k.startTime-O)}}var w=!1,A=-1,D=5,T=-1;function S(){return m?!0:!(t.unstable_now()-T<D)}function C(){if(m=!1,w){var O=t.unstable_now();T=O;var k=!0;try{e:{x=!1,_&&(_=!1,g(A),A=-1),p=!0;var z=h;try{t:{for(M(O),d=n(l);d!==null&&!(d.expirationTime>O&&S());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var le=J(d.expirationTime<=O);if(O=t.unstable_now(),typeof le=="function"){d.callback=le,M(O),k=!0;break t}d===n(l)&&i(l),M(O)}else i(l);d=n(l)}if(d!==null)k=!0;else{var Se=n(c);Se!==null&&q(R,Se.startTime-O),k=!1}}break e}finally{d=null,h=z,p=!1}k=void 0}}finally{k?H():w=!1}}}var H;if(typeof y=="function")H=function(){y(C)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=C,H=function(){Z.postMessage(null)}}else H=function(){f(C,0)};function q(O,k){A=f(function(){O(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return O()}finally{h=z}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(O,k){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=h;h=O;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(O,k,z){var J=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?J+z:J):z=J,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=z+le,O={id:u++,callback:k,priorityLevel:O,startTime:z,expirationTime:le,sortIndex:-1},z>J?(O.sortIndex=z,e(c,O),n(l)===null&&O===n(c)&&(_?(g(A),A=-1):_=!0,q(R,z-J))):(O.sortIndex=le,e(l,O),x||p||(x=!0,w||(w=!0,H()))),O},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(O){var k=h;return function(){var z=h;h=k;try{return O.apply(this,arguments)}finally{h=z}}}})(bv);Mv.exports=bv;var GS=Mv.exports,Ev={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VS=P;function Tv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ta(){}var dn={d:{f:ta,r:function(){throw Error(Tv(522))},D:ta,C:ta,L:ta,m:ta,X:ta,S:ta,M:ta},p:0,findDOMNode:null},kS=Symbol.for("react.portal");function jS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var uo=VS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Tv(299));return jS(t,e,null,n)};pn.flushSync=function(t){var e=uo.T,n=dn.p;try{if(uo.T=null,dn.p=2,t)return t()}finally{uo.T=e,dn.p=n,dn.d.f()}};pn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,dn.d.C(t,e))};pn.prefetchDNS=function(t){typeof t=="string"&&dn.d.D(t)};pn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=gu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?dn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&dn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};pn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=gu(e.as,e.crossOrigin);dn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&dn.d.M(t)};pn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=gu(n,e.crossOrigin);dn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};pn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=gu(e.as,e.crossOrigin);dn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else dn.d.m(t)};pn.requestFormReset=function(t){dn.d.r(t)};pn.unstable_batchedUpdates=function(t,e){return t(e)};pn.useFormState=function(t,e,n){return uo.H.useFormState(t,e,n)};pn.useFormStatus=function(){return uo.H.useHostTransitionStatus()};pn.version="19.1.0";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ev.exports=pn;var XS=Ev.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=GS,wv=P,WS=XS;function ne(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(Yo(t)!==t)throw Error(ne(188))}function qS(t){var e=t.alternate;if(!e){if(e=Yo(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Rm(a),t;if(r===i)return Rm(a),e;r=r.sibling}throw Error(ne(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Nv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Nv(t),e!==null)return e;t=t.sibling}return null}var bt=Object.assign,YS=Symbol.for("react.element"),Sl=Symbol.for("react.transitional.element"),io=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Dv=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),ZS=Symbol.for("react.provider"),Uv=Symbol.for("react.consumer"),Pi=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),cd=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),ua=Symbol.for("react.lazy"),ud=Symbol.for("react.activity"),KS=Symbol.for("react.memo_cache_sentinel"),Cm=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var $S=Symbol.for("react.client.reference");function fd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$S?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case od:return"Profiler";case Dv:return"StrictMode";case ld:return"Suspense";case cd:return"SuspenseList";case ud:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case io:return"Portal";case Pi:return(t.displayName||"Context")+".Provider";case Uv:return(t._context.displayName||"Context")+".Consumer";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case ua:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}var ao=Array.isArray,Ie=wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=WS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nr={pending:!1,data:null,method:null,action:null},dd=[],kr=-1;function Si(t){return{current:t}}function Kt(t){0>kr||(t.current=dd[kr],dd[kr]=null,kr--)}function Rt(t,e){kr++,dd[kr]=t.current,t.current=e}var mi=Si(null),Ro=Si(null),Sa=Si(null),Dc=Si(null);function Uc(t,e){switch(Rt(Sa,e),Rt(Ro,t),Rt(mi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Og(e),t=Z_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(mi),Rt(mi,t)}function ds(){Kt(mi),Kt(Ro),Kt(Sa)}function hd(t){t.memoizedState!==null&&Rt(Dc,t);var e=mi.current,n=Z_(e,t.type);e!==n&&(Rt(Ro,t),Rt(mi,n))}function Lc(t){Ro.current===t&&(Kt(mi),Kt(Ro)),Dc.current===t&&(Kt(Dc),Bo._currentValue=nr)}var pd=Object.prototype.hasOwnProperty,np=kt.unstable_scheduleCallback,Vu=kt.unstable_cancelCallback,QS=kt.unstable_shouldYield,JS=kt.unstable_requestPaint,gi=kt.unstable_now,eM=kt.unstable_getCurrentPriorityLevel,Lv=kt.unstable_ImmediatePriority,Ov=kt.unstable_UserBlockingPriority,Oc=kt.unstable_NormalPriority,tM=kt.unstable_LowPriority,Pv=kt.unstable_IdlePriority,nM=kt.log,iM=kt.unstable_setDisableYieldValue,Zo=null,Ln=null;function va(t){if(typeof nM=="function"&&iM(t),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(Zo,t)}catch{}}var On=Math.clz32?Math.clz32:sM,aM=Math.log,rM=Math.LN2;function sM(t){return t>>>=0,t===0?32:31-(aM(t)/rM|0)|0}var Ml=256,bl=4194304;function qa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=qa(i):(s&=o,s!==0?a=qa(s):n||(n=o&~t,n!==0&&(a=qa(n))))):(o=i&~r,o!==0?a=qa(o):s!==0?a=qa(s):n||(n=i&~t,n!==0&&(a=qa(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function Ko(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function oM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(){var t=Ml;return Ml<<=1,!(Ml&4194048)&&(Ml=256),t}function zv(){var t=bl;return bl<<=1,!(bl&62914560)&&(bl=4194304),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function lM(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var u=31-On(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Bv(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Bv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-On(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function Iv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function ip(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ap(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Hv(){var t=ct.p;return t!==0?t:(t=window.event,t===void 0?32:ry(t.type))}function cM(t,e){var n=ct.p;try{return ct.p=t,e()}finally{ct.p=n}}var Pa=Math.random().toString(36).slice(2),sn="__reactFiber$"+Pa,bn="__reactProps$"+Pa,Cs="__reactContainer$"+Pa,md="__reactEvents$"+Pa,uM="__reactListeners$"+Pa,fM="__reactHandles$"+Pa,Nm="__reactResources$"+Pa,Qo="__reactMarker$"+Pa;function rp(t){delete t[sn],delete t[bn],delete t[md],delete t[uM],delete t[fM]}function jr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cs]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zg(t);t!==null;){if(n=t[sn])return n;t=zg(t)}return e}t=n,n=t.parentNode}return null}function Ns(t){if(t=t[sn]||t[Cs]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ro(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ne(33))}function ts(t){var e=t[Nm];return e||(e=t[Nm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[Qo]=!0}var Gv=new Set,Vv={};function mr(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(Vv[t]=e,t=0;t<e.length;t++)Gv.add(e[t])}var dM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dm={},Um={};function hM(t){return pd.call(Um,t)?!0:pd.call(Dm,t)?!1:dM.test(t)?Um[t]=!0:(Dm[t]=!0,!1)}function cc(t,e,n){if(hM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function El(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ei(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var ju,Lm;function Ir(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||"",Lm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ju+t+Lm}var Xu=!1;function Wu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){h=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=i&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ir(n):""}function pM(t){switch(t.tag){case 26:case 27:case 5:return Ir(t.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 15:return Wu(t.type,!1);case 11:return Wu(t.type.render,!1);case 1:return Wu(t.type,!0);case 31:return Ir("Activity");default:return""}}function Om(t){try{var e="";do e+=pM(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mM(t){var e=kv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pc(t){t._valueTracker||(t._valueTracker=mM(t))}function jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var gM=/[\n"\\]/g;function Wn(t){return t.replace(gM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gd(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+kn(e)):t.value!==""+kn(e)&&(t.value=""+kn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?vd(t,s,kn(e)):n!=null?vd(t,s,kn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+kn(o):t.removeAttribute("name")}function Xv(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+kn(n):"",e=e!=null?""+kn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function vd(t,e,n){e==="number"&&Fc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ns(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Wv(t,e,n){if(e!=null&&(e=""+kn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+kn(n):""}function qv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ne(92));if(ao(i)){if(1<i.length)throw Error(ne(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=kn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||vM.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Yv(t,e,n){if(e!=null&&typeof e!="object")throw Error(ne(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Pm(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&Pm(t,r,e[r])}function sp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_M=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(t){return _M.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var xd=null;function op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,is=null;function Fm(t){var e=Ns(t);if(e&&(t=e.stateNode)){var n=t[bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(gd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[bn]||null;if(!a)throw Error(ne(90));gd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&jv(i)}break e;case"textarea":Wv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}}}var qu=!1;function Zv(t,e,n){if(qu)return t(e,n);qu=!0;try{var i=t(e);return i}finally{if(qu=!1,(Xr!==null||is!==null)&&(wu(),Xr&&(e=Xr,t=is,is=Xr=null,Fm(e),t)))for(e=0;e<t.length;e++)Fm(t[e])}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=!1;if(Wi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){_d=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{_d=!1}var xa=null,lp=null,fc=null;function Kv(){if(fc)return fc;var t,e=lp,n=e.length,i,a="value"in xa?xa.value:xa.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return fc=a.slice(t,1<i?1-i:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function zm(){return!1}function En(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Tl:zm,this.isPropagationStopped=zm,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=En(gr),Jo=bt({},gr,{view:0,detail:0}),yM=En(Jo),Yu,Zu,ks,_u=bt({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Yu=t.screenX-ks.screenX,Zu=t.screenY-ks.screenY):Zu=Yu=0,ks=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Bm=En(_u),SM=bt({},_u,{dataTransfer:0}),MM=En(SM),bM=bt({},Jo,{relatedTarget:0}),Ku=En(bM),EM=bt({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),TM=En(EM),AM=bt({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wM=En(AM),RM=bt({},gr,{data:0}),Im=En(RM),CM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DM[t])?!!e[t]:!1}function cp(){return UM}var LM=bt({},Jo,{key:function(t){if(t.key){var e=CM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OM=En(LM),PM=bt({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=En(PM),FM=bt({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),zM=En(FM),BM=bt({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=En(BM),HM=bt({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GM=En(HM),VM=bt({},gr,{newState:0,oldState:0}),kM=En(VM),jM=[9,13,27,32],up=Wi&&"CompositionEvent"in window,fo=null;Wi&&"documentMode"in document&&(fo=document.documentMode);var XM=Wi&&"TextEvent"in window&&!fo,$v=Wi&&(!up||fo&&8<fo&&11>=fo),Gm=" ",Vm=!1;function Qv(t,e){switch(t){case"keyup":return jM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function WM(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(Vm=!0,Gm);case"textInput":return t=e.data,t===Gm&&Vm?null:t;default:return null}}function qM(t,e){if(Wr)return t==="compositionend"||!up&&Qv(t,e)?(t=Kv(),fc=lp=xa=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $v&&e.locale!=="ko"?null:e.data;default:return null}}var YM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YM[t.type]:e==="textarea"}function ex(t,e,n,i){Xr?is?is.push(i):is=[i]:Xr=i,e=eu(e,"onChange"),0<e.length&&(n=new xu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,No=null;function ZM(t){W_(t,0)}function yu(t){var e=ro(t);if(jv(e))return t}function jm(t,e){if(t==="change")return e}var tx=!1;if(Wi){var $u;if(Wi){var Qu="oninput"in document;if(!Qu){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Qu=typeof Xm.oninput=="function"}$u=Qu}else $u=!1;tx=$u&&(!document.documentMode||9<document.documentMode)}function Wm(){ho&&(ho.detachEvent("onpropertychange",nx),No=ho=null)}function nx(t){if(t.propertyName==="value"&&yu(No)){var e=[];ex(e,No,t,op(t)),Zv(ZM,e)}}function KM(t,e,n){t==="focusin"?(Wm(),ho=e,No=n,ho.attachEvent("onpropertychange",nx)):t==="focusout"&&Wm()}function $M(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(No)}function QM(t,e){if(t==="click")return yu(e)}function JM(t,e){if(t==="input"||t==="change")return yu(e)}function eb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:eb;function Do(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!pd.call(e,a)||!zn(t[a],e[a]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function ix(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ix(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ax(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fc(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var tb=Wi&&"documentMode"in document&&11>=document.documentMode,qr=null,yd=null,po=null,Sd=!1;function Zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||qr==null||qr!==Fc(i)||(i=qr,"selectionStart"in i&&fp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Do(po,i)||(po=i,i=eu(yd,"onSelect"),0<i.length&&(e=new xu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Ju={},rx={};Wi&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function vr(t){if(Ju[t])return Ju[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rx)return Ju[t]=e[n];return t}var sx=vr("animationend"),ox=vr("animationiteration"),lx=vr("animationstart"),nb=vr("transitionrun"),ib=vr("transitionstart"),ab=vr("transitioncancel"),cx=vr("transitionend"),ux=new Map,Md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Md.push("scrollEnd");function ci(t,e){ux.set(t,e),mr(e,[t])}var Km=new WeakMap;function qn(t,e){if(typeof t=="object"&&t!==null){var n=Km.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Om(e)},Km.set(t,e),e)}return{value:t,source:e,stack:Om(e)}}var Vn=[],Zr=0,dp=0;function Su(){for(var t=Zr,e=dp=Zr=0;e<t;){var n=Vn[e];Vn[e++]=null;var i=Vn[e];Vn[e++]=null;var a=Vn[e];Vn[e++]=null;var r=Vn[e];if(Vn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&fx(n,a,r)}}function Mu(t,e,n,i){Vn[Zr++]=t,Vn[Zr++]=e,Vn[Zr++]=n,Vn[Zr++]=i,dp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function hp(t,e,n,i){return Mu(t,e,n,i),zc(t)}function Ds(t,e){return Mu(t,null,null,e),zc(t)}function fx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-On(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function zc(t){if(50<Eo)throw Eo=0,kd=null,Error(ne(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Kr={};function rb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new rb(t,e,n,i)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function dx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function hc(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")pp(t)&&(s=1);else if(typeof t=="string")s=oE(t,n,mi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ud:return t=Un(31,n,e,a),t.elementType=ud,t.lanes=r,t;case Vr:return ir(n.children,a,r,e);case Dv:s=8,a|=24;break;case od:return t=Un(12,n,e,a|2),t.elementType=od,t.lanes=r,t;case ld:return t=Un(13,n,e,a),t.elementType=ld,t.lanes=r,t;case cd:return t=Un(19,n,e,a),t.elementType=cd,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ZS:case Pi:s=10;break e;case Uv:s=9;break e;case ep:s=11;break e;case tp:s=14;break e;case ua:s=16,i=null;break e}s=29,n=Error(ne(130,t===null?"null":typeof t,"")),i=null}return e=Un(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function ir(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function ef(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function tf(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var $r=[],Qr=0,Bc=null,Ic=0,jn=[],Xn=0,ar=null,Fi=1,zi="";function Ya(t,e){$r[Qr++]=Ic,$r[Qr++]=Bc,Bc=t,Ic=e}function hx(t,e,n){jn[Xn++]=Fi,jn[Xn++]=zi,jn[Xn++]=ar,ar=t;var i=Fi;t=zi;var a=32-On(i)-1;i&=~(1<<a),n+=1;var r=32-On(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Fi=1<<32-On(e)+a|n<<a|i,zi=r+t}else Fi=1<<r|n<<a|i,zi=t}function mp(t){t.return!==null&&(Ya(t,1),hx(t,1,0))}function gp(t){for(;t===Bc;)Bc=$r[--Qr],$r[Qr]=null,Ic=$r[--Qr],$r[Qr]=null;for(;t===ar;)ar=jn[--Xn],jn[Xn]=null,zi=jn[--Xn],jn[Xn]=null,Fi=jn[--Xn],jn[Xn]=null}var fn=null,Lt=null,lt=!1,rr=null,di=!1,bd=Error(ne(519));function cr(t){var e=Error(ne(418,""));throw Uo(qn(e,t)),bd}function $m(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[sn]=t,e[bn]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<Po.length;n++)Qe(Po[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),Xv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Pc(e);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),qv(e,i.value,i.defaultValue,i.children),Pc(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Y_(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=Nu),e=!0):e=!1,e||cr(t)}function Qm(t){for(fn=t.return;fn;)switch(fn.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:fn=fn.return}}function js(t){if(t!==fn)return!1;if(!lt)return Qm(t),lt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zd(t.type,t.memoizedProps)),n=!n),n&&Lt&&cr(t),Qm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Lt=oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Lt=null}}else e===27?(e=Lt,Fa(t.type)?(t=Qd,Qd=null,Lt=t):Lt=e):Lt=fn?oi(t.stateNode.nextSibling):null;return!0}function el(){Lt=fn=null,lt=!1}function Jm(){var t=rr;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),rr=null),t}function Uo(t){rr===null?rr=[t]:rr.push(t)}var Ed=Si(null),xr=null,Bi=null;function da(t,e,n){Rt(Ed,e._currentValue),e._currentValue=n}function ki(t){t._currentValue=Ed.current,Kt(Ed)}function Td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ad(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Td(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(ne(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Td(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function tl(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(ne(387));if(s=s.memoizedProps,s!==null){var o=a.type;zn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Dc.current){if(s=a.alternate,s===null)throw Error(ne(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}a=a.return}t!==null&&Ad(e,t,n,i),e.flags|=262144}function Hc(t){for(t=t.firstContext;t!==null;){if(!zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){xr=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function on(t){return px(xr,t)}function Al(t,e){return xr===null&&ur(t),px(t,e)}function px(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Bi===null){if(t===null)throw Error(ne(308));Bi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bi=Bi.next=e;return n}var sb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ob=kt.unstable_scheduleCallback,lb=kt.unstable_NormalPriority,Gt={$$typeof:Pi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vp(){return{controller:new sb,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&ob(lb,function(){t.controller.abort()})}var mo=null,wd=0,ms=0,as=null;function cb(t,e){if(mo===null){var n=mo=[];wd=0,ms=Hp(),as={status:"pending",value:void 0,then:function(i){n.push(i)}}}return wd++,e.then(eg,eg),e}function eg(){if(--wd===0&&mo!==null){as!==null&&(as.status="fulfilled");var t=mo;mo=null,ms=0,as=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ub(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var tg=Ie.S;Ie.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&cb(t,e),tg!==null&&tg(t,e)};var sr=Si(null);function xp(){var t=sr.current;return t!==null?t:yt.pooledCache}function pc(t,e){e===null?Rt(sr,sr.current):Rt(sr,e.pool)}function mx(){var t=xp();return t===null?null:{parent:Gt._currentValue,pool:t}}var il=Error(ne(460)),gx=Error(ne(474)),bu=Error(ne(542)),Rd={then:function(){}};function ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function vx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(wl,wl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ag(t),t;default:if(typeof e.status=="string")e.then(wl,wl);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(ne(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ag(t),t}throw go=e,il}}var go=null;function ig(){if(go===null)throw Error(ne(459));var t=go;return go=null,t}function ag(t){if(t===il||t===bu)throw Error(ne(483))}var fa=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=zc(t),fx(t,null,n),e}return Mu(t,i,e,n),zc(t)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Iv(t,n)}}function nf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Nd=!1;function xo(){if(Nd){var t=as;if(t!==null)throw t}}function _o(t,e,n,i){Nd=!1;var a=t.updateQueue;fa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(it&h)===h:(i&h)===h){h!==0&&h===ms&&(Nd=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,_=o;h=e;var m=n;switch(_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=bt({},d,h);break e;case 2:fa=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,r===null&&(a.shared.lanes=0),La|=s,t.lanes=s,t.memoizedState=d}}function xx(t,e){if(typeof t!="function")throw Error(ne(191,t));t.call(e)}function _x(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)xx(n[t],e)}var gs=Si(null),Gc=Si(0);function rg(t,e){t=Zi,Rt(Gc,t),Rt(gs,e),Zi=t|e.baseLanes}function Dd(){Rt(Gc,Zi),Rt(gs,gs.current)}function yp(){Zi=Gc.current,Kt(gs),Kt(Gc)}var Da=0,$e=null,gt=null,Bt=null,Vc=!1,rs=!1,fr=!1,kc=0,Lo=0,ss=null,fb=0;function Pt(){throw Error(ne(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,a,r){return Da=r,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ie.H=t===null||t.memoizedState===null?Kx:$x,fr=!1,r=n(i,a),fr=!1,rs&&(r=Sx(e,n,i,a)),yx(t),r}function yx(t){Ie.H=jc;var e=gt!==null&&gt.next!==null;if(Da=0,Bt=gt=$e=null,Vc=!1,Lo=0,ss=null,e)throw Error(ne(300));t===null||Zt||(t=t.dependencies,t!==null&&Hc(t)&&(Zt=!0))}function Sx(t,e,n,i){$e=t;var a=0;do{if(rs&&(ss=null),Lo=0,rs=!1,25<=a)throw Error(ne(301));if(a+=1,Bt=gt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ie.H=xb,r=e(n,i)}while(rs);return r}function db(){var t=Ie.H,e=t.useState()[0];return e=typeof e.then=="function"?al(e):e,t=t.useState()[0],(gt!==null?gt.memoizedState:null)!==t&&($e.flags|=1024),e}function bp(){var t=kc!==0;return kc=0,t}function Ep(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Tp(t){if(Vc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Vc=!1}Da=0,Bt=gt=$e=null,rs=!1,Lo=kc=0,ss=null}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?$e.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function It(){if(gt===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Bt===null?$e.memoizedState:Bt.next;if(e!==null)Bt=e,gt=t;else{if(t===null)throw $e.alternate===null?Error(ne(467)):Error(ne(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Bt===null?$e.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ap(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(t){var e=Lo;return Lo+=1,ss===null&&(ss=[]),t=vx(ss,t,e),e=$e,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,Ie.H=e===null||e.memoizedState===null?Kx:$x),t}function Eu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return al(t);if(t.$$typeof===Pi)return on(t)}throw Error(ne(438,String(t)))}function wp(t){var e=null,n=$e.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=$e.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ap(),$e.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=KS;return e.index++,n}function qi(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=It();return Rp(e,gt,t)}function Rp(t,e,n){var i=t.queue;if(i===null)throw Error(ne(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(it&d)===d:(Da&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ms&&(u=!0);else if((Da&h)===h){c=c.next,h===ms&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,$e.lanes|=h,La|=h;d=c.action,fr&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else h={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,$e.lanes|=d,La|=d;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!zn(r,t.memoizedState)&&(Zt=!0,u&&(n=as,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function af(t){var e=It(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);zn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function Mx(t,e,n){var i=$e,a=It(),r=lt;if(r){if(n===void 0)throw Error(ne(407));n=n()}else n=e();var s=!zn((gt||a).memoizedState,n);s&&(a.memoizedState=n,Zt=!0),a=a.queue;var o=Tx.bind(null,i,a,t);if(rl(2048,8,o,[t]),a.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,vs(9,Tu(),Ex.bind(null,i,a,n,e),null),yt===null)throw Error(ne(349));r||Da&124||bx(i,e,n)}return n}function bx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e=Ap(),$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ex(t,e,n,i){e.value=n,e.getSnapshot=i,Ax(e)&&wx(t)}function Tx(t,e,n){return n(function(){Ax(e)&&wx(t)})}function Ax(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function wx(t){var e=Ds(t,2);e!==null&&Fn(e,t,2)}function Ud(t){var e=xn();if(typeof t=="function"){var n=t;if(t=n(),fr){va(!0);try{n()}finally{va(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e}function Rx(t,e,n,i){return t.baseState=n,Rp(t,gt,typeof i=="function"?i:qi)}function hb(t,e,n,i,a){if(Au(t))throw Error(ne(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ie.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Cx(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Cx(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Ie.T,s={};Ie.T=s;try{var o=n(a,i),l=Ie.S;l!==null&&l(s,o),sg(t,e,o)}catch(c){Ld(t,e,c)}finally{Ie.T=r}}else try{r=n(a,i),sg(t,e,r)}catch(c){Ld(t,e,c)}}function sg(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){og(t,e,i)},function(i){return Ld(t,e,i)}):og(t,e,n)}function og(t,e,n){e.status="fulfilled",e.value=n,Nx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Cx(t,n)))}function Ld(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Nx(e),e=e.next;while(e!==i)}t.action=null}function Nx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Dx(t,e){return e}function lg(t,e){if(lt){var n=yt.formState;if(n!==null){e:{var i=$e;if(lt){if(Lt){t:{for(var a=Lt,r=di;a.nodeType!==8;){if(!r){a=null;break t}if(a=oi(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Lt=oi(a.nextSibling),i=a.data==="F!";break e}}cr(i)}i=!1}i&&(e=n[0])}}return n=xn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dx,lastRenderedState:e},n.queue=i,n=qx.bind(null,$e,i),i.dispatch=n,i=Ud(!1),r=Up.bind(null,$e,!1,i.queue),i=xn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=hb.bind(null,$e,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function cg(t){var e=It();return Ux(e,gt,t)}function Ux(t,e,n){if(e=Rp(t,e,Dx)[0],t=mc(qi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=al(e)}catch(s){throw s===il?bu:s}else i=e;e=It();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&($e.flags|=2048,vs(9,Tu(),pb.bind(null,a,n),null)),[i,r,t]}function pb(t,e){t.action=e}function ug(t){var e=It(),n=gt;if(n!==null)return Ux(e,n,t);It(),e=e.memoizedState,n=It();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function vs(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=$e.updateQueue,e===null&&(e=Ap(),$e.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Tu(){return{destroy:void 0,resource:void 0}}function Lx(){return It().memoizedState}function gc(t,e,n,i){var a=xn();i=i===void 0?null:i,$e.flags|=t,a.memoizedState=vs(1|e,Tu(),n,i)}function rl(t,e,n,i){var a=It();i=i===void 0?null:i;var r=a.memoizedState.inst;gt!==null&&i!==null&&Sp(i,gt.memoizedState.deps)?a.memoizedState=vs(e,r,n,i):($e.flags|=t,a.memoizedState=vs(1|e,r,n,i))}function fg(t,e){gc(8390656,8,t,e)}function Ox(t,e){rl(2048,8,t,e)}function Px(t,e){return rl(4,2,t,e)}function Fx(t,e){return rl(4,4,t,e)}function zx(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bx(t,e,n){n=n!=null?n.concat([t]):null,rl(4,4,zx.bind(null,e,t),n)}function Cp(){}function Ix(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hx(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Sp(e,i[1]))return i[0];if(i=t(),fr){va(!0);try{t()}finally{va(!1)}}return n.memoizedState=[i,e],i}function Np(t,e,n){return n===void 0||Da&1073741824?t.memoizedState=e:(t.memoizedState=n,t=N_(),$e.lanes|=t,La|=t,n)}function Gx(t,e,n,i){return zn(n,e)?n:gs.current!==null?(t=Np(t,n,i),zn(t,e)||(Zt=!0),t):Da&42?(t=N_(),$e.lanes|=t,La|=t,e):(Zt=!0,t.memoizedState=n)}function Vx(t,e,n,i,a){var r=ct.p;ct.p=r!==0&&8>r?r:8;var s=Ie.T,o={};Ie.T=o,Up(t,!1,e,n);try{var l=a(),c=Ie.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=ub(l,i);yo(t,e,u,Pn(t))}else yo(t,e,i,Pn(t))}catch(d){yo(t,e,{then:function(){},status:"rejected",reason:d},Pn())}finally{ct.p=r,Ie.T=s}}function mb(){}function Od(t,e,n,i){if(t.tag!==5)throw Error(ne(476));var a=kx(t).queue;Vx(t,a,e,nr,n===null?mb:function(){return jx(t),n(i)})}function kx(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:nr,baseState:nr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:nr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function jx(t){var e=kx(t).next.queue;yo(t,e,{},Pn())}function Dp(){return on(Bo)}function Xx(){return It().memoizedState}function Wx(){return It().memoizedState}function gb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Pn();t=Ma(n);var i=ba(e,t,n);i!==null&&(Fn(i,e,n),vo(i,e,n)),e={cache:vp()},t.payload=e;return}e=e.return}}function vb(t,e,n){var i=Pn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Au(t)?Yx(e,n):(n=hp(t,e,n,i),n!==null&&(Fn(n,t,i),Zx(n,e,i)))}function qx(t,e,n){var i=Pn();yo(t,e,n,i)}function yo(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(t))Yx(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,zn(o,s))return Mu(t,e,a,0),yt===null&&Su(),!1}catch{}finally{}if(n=hp(t,e,a,i),n!==null)return Fn(n,t,i),Zx(n,e,i),!0}return!1}function Up(t,e,n,i){if(i={lane:2,revertLane:Hp(),action:i,hasEagerState:!1,eagerState:null,next:null},Au(t)){if(e)throw Error(ne(479))}else e=hp(t,n,i,2),e!==null&&Fn(e,t,2)}function Au(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Yx(t,e){rs=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zx(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Iv(t,n)}}var jc={readContext:on,use:Eu,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt},Kx={readContext:on,use:Eu,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:fg,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,gc(4194308,4,zx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gc(4194308,4,t,e)},useInsertionEffect:function(t,e){gc(4,2,t,e)},useMemo:function(t,e){var n=xn();e=e===void 0?null:e;var i=t();if(fr){va(!0);try{t()}finally{va(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=xn();if(n!==void 0){var a=n(e);if(fr){va(!0);try{n(e)}finally{va(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=vb.bind(null,$e,t),[i.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:function(t){t=Ud(t);var e=t.queue,n=qx.bind(null,$e,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Cp,useDeferredValue:function(t,e){var n=xn();return Np(n,t,e)},useTransition:function(){var t=Ud(!1);return t=Vx.bind(null,$e,t.queue,!0,!1),xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=$e,a=xn();if(lt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),yt===null)throw Error(ne(349));it&124||bx(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,fg(Tx.bind(null,i,r,t),[t]),i.flags|=2048,vs(9,Tu(),Ex.bind(null,i,r,n,e),null),n},useId:function(){var t=xn(),e=yt.identifierPrefix;if(lt){var n=zi,i=Fi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=kc++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=fb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Dp,useFormState:lg,useActionState:lg,useOptimistic:function(t){var e=xn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Up.bind(null,$e,!0,n),n.dispatch=e,[t,e]},useMemoCache:wp,useCacheRefresh:function(){return xn().memoizedState=gb.bind(null,$e)}},$x={readContext:on,use:Eu,useCallback:Ix,useContext:on,useEffect:Ox,useImperativeHandle:Bx,useInsertionEffect:Px,useLayoutEffect:Fx,useMemo:Hx,useReducer:mc,useRef:Lx,useState:function(){return mc(qi)},useDebugValue:Cp,useDeferredValue:function(t,e){var n=It();return Gx(n,gt.memoizedState,t,e)},useTransition:function(){var t=mc(qi)[0],e=It().memoizedState;return[typeof t=="boolean"?t:al(t),e]},useSyncExternalStore:Mx,useId:Xx,useHostTransitionStatus:Dp,useFormState:cg,useActionState:cg,useOptimistic:function(t,e){var n=It();return Rx(n,gt,t,e)},useMemoCache:wp,useCacheRefresh:Wx},xb={readContext:on,use:Eu,useCallback:Ix,useContext:on,useEffect:Ox,useImperativeHandle:Bx,useInsertionEffect:Px,useLayoutEffect:Fx,useMemo:Hx,useReducer:af,useRef:Lx,useState:function(){return af(qi)},useDebugValue:Cp,useDeferredValue:function(t,e){var n=It();return gt===null?Np(n,t,e):Gx(n,gt.memoizedState,t,e)},useTransition:function(){var t=af(qi)[0],e=It().memoizedState;return[typeof t=="boolean"?t:al(t),e]},useSyncExternalStore:Mx,useId:Xx,useHostTransitionStatus:Dp,useFormState:ug,useActionState:ug,useOptimistic:function(t,e){var n=It();return gt!==null?Rx(n,gt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:wp,useCacheRefresh:Wx},os=null,Oo=0;function Rl(t){var e=Oo;return Oo+=1,os===null&&(os=[]),vx(os,t,e)}function Xs(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Cl(t,e){throw e.$$typeof===YS?Error(ne(525)):(t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function dg(t){var e=t._init;return e(t._payload)}function Qx(t){function e(f,g){if(t){var y=f.deletions;y===null?(f.deletions=[g],f.flags|=16):y.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(f,g){return f=Vi(f,g),f.index=0,f.sibling=null,f}function r(f,g,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<g?(f.flags|=67108866,g):y):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function s(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,g,y,M){return g===null||g.tag!==6?(g=ef(y,f.mode,M),g.return=f,g):(g=a(g,y),g.return=f,g)}function l(f,g,y,M){var R=y.type;return R===Vr?u(f,g,y.props.children,M,y.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ua&&dg(R)===g.type)?(g=a(g,y.props),Xs(g,y),g.return=f,g):(g=hc(y.type,y.key,y.props,null,f.mode,M),Xs(g,y),g.return=f,g)}function c(f,g,y,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=tf(y,f.mode,M),g.return=f,g):(g=a(g,y.children||[]),g.return=f,g)}function u(f,g,y,M,R){return g===null||g.tag!==7?(g=ir(y,f.mode,M,R),g.return=f,g):(g=a(g,y),g.return=f,g)}function d(f,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ef(""+g,f.mode,y),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:return y=hc(g.type,g.key,g.props,null,f.mode,y),Xs(y,g),y.return=f,y;case io:return g=tf(g,f.mode,y),g.return=f,g;case ua:var M=g._init;return g=M(g._payload),d(f,g,y)}if(ao(g)||Gs(g))return g=ir(g,f.mode,y,null),g.return=f,g;if(typeof g.then=="function")return d(f,Rl(g),y);if(g.$$typeof===Pi)return d(f,Al(f,g),y);Cl(f,g)}return null}function h(f,g,y,M){var R=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return R!==null?null:o(f,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return y.key===R?l(f,g,y,M):null;case io:return y.key===R?c(f,g,y,M):null;case ua:return R=y._init,y=R(y._payload),h(f,g,y,M)}if(ao(y)||Gs(y))return R!==null?null:u(f,g,y,M,null);if(typeof y.then=="function")return h(f,g,Rl(y),M);if(y.$$typeof===Pi)return h(f,g,Al(f,y),M);Cl(f,y)}return null}function p(f,g,y,M,R){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(y)||null,o(g,f,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Sl:return f=f.get(M.key===null?y:M.key)||null,l(g,f,M,R);case io:return f=f.get(M.key===null?y:M.key)||null,c(g,f,M,R);case ua:var w=M._init;return M=w(M._payload),p(f,g,y,M,R)}if(ao(M)||Gs(M))return f=f.get(y)||null,u(g,f,M,R,null);if(typeof M.then=="function")return p(f,g,y,Rl(M),R);if(M.$$typeof===Pi)return p(f,g,y,Al(g,M),R);Cl(g,M)}return null}function x(f,g,y,M){for(var R=null,w=null,A=g,D=g=0,T=null;A!==null&&D<y.length;D++){A.index>D?(T=A,A=null):T=A.sibling;var S=h(f,A,y[D],M);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(f,A),g=r(S,g,D),w===null?R=S:w.sibling=S,w=S,A=T}if(D===y.length)return n(f,A),lt&&Ya(f,D),R;if(A===null){for(;D<y.length;D++)A=d(f,y[D],M),A!==null&&(g=r(A,g,D),w===null?R=A:w.sibling=A,w=A);return lt&&Ya(f,D),R}for(A=i(A);D<y.length;D++)T=p(A,f,D,y[D],M),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?D:T.key),g=r(T,g,D),w===null?R=T:w.sibling=T,w=T);return t&&A.forEach(function(C){return e(f,C)}),lt&&Ya(f,D),R}function _(f,g,y,M){if(y==null)throw Error(ne(151));for(var R=null,w=null,A=g,D=g=0,T=null,S=y.next();A!==null&&!S.done;D++,S=y.next()){A.index>D?(T=A,A=null):T=A.sibling;var C=h(f,A,S.value,M);if(C===null){A===null&&(A=T);break}t&&A&&C.alternate===null&&e(f,A),g=r(C,g,D),w===null?R=C:w.sibling=C,w=C,A=T}if(S.done)return n(f,A),lt&&Ya(f,D),R;if(A===null){for(;!S.done;D++,S=y.next())S=d(f,S.value,M),S!==null&&(g=r(S,g,D),w===null?R=S:w.sibling=S,w=S);return lt&&Ya(f,D),R}for(A=i(A);!S.done;D++,S=y.next())S=p(A,f,D,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?D:S.key),g=r(S,g,D),w===null?R=S:w.sibling=S,w=S);return t&&A.forEach(function(H){return e(f,H)}),lt&&Ya(f,D),R}function m(f,g,y,M){if(typeof y=="object"&&y!==null&&y.type===Vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:e:{for(var R=y.key;g!==null;){if(g.key===R){if(R=y.type,R===Vr){if(g.tag===7){n(f,g.sibling),M=a(g,y.props.children),M.return=f,f=M;break e}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ua&&dg(R)===g.type){n(f,g.sibling),M=a(g,y.props),Xs(M,y),M.return=f,f=M;break e}n(f,g);break}else e(f,g);g=g.sibling}y.type===Vr?(M=ir(y.props.children,f.mode,M,y.key),M.return=f,f=M):(M=hc(y.type,y.key,y.props,null,f.mode,M),Xs(M,y),M.return=f,f=M)}return s(f);case io:e:{for(R=y.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(f,g.sibling),M=a(g,y.children||[]),M.return=f,f=M;break e}else{n(f,g);break}else e(f,g);g=g.sibling}M=tf(y,f.mode,M),M.return=f,f=M}return s(f);case ua:return R=y._init,y=R(y._payload),m(f,g,y,M)}if(ao(y))return x(f,g,y,M);if(Gs(y)){if(R=Gs(y),typeof R!="function")throw Error(ne(150));return y=R.call(y),_(f,g,y,M)}if(typeof y.then=="function")return m(f,g,Rl(y),M);if(y.$$typeof===Pi)return m(f,g,Al(f,y),M);Cl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(n(f,g.sibling),M=a(g,y),M.return=f,f=M):(n(f,g),M=ef(y,f.mode,M),M.return=f,f=M),s(f)):n(f,g)}return function(f,g,y,M){try{Oo=0;var R=m(f,g,y,M);return os=null,R}catch(A){if(A===il||A===bu)throw A;var w=Un(29,A,null,f.mode);return w.lanes=M,w.return=f,w}finally{}}}var xs=Qx(!0),Jx=Qx(!1),Kn=Si(null),vi=null;function ha(t){var e=t.alternate;Rt(Vt,Vt.current&1),Rt(Kn,t),vi===null&&(e===null||gs.current!==null||e.memoizedState!==null)&&(vi=t)}function e_(t){if(t.tag===22){if(Rt(Vt,Vt.current),Rt(Kn,t),vi===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(vi=t)}}else pa()}function pa(){Rt(Vt,Vt.current),Rt(Kn,Kn.current)}function Ii(t){Kt(Kn),vi===t&&(vi=null),Kt(Vt)}var Vt=Si(0);function Xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||$d(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=Ma(i);a.payload=e,n!=null&&(a.callback=n),e=ba(t,a,i),e!==null&&(Fn(e,t,i),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=Ma(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ba(t,a,i),e!==null&&(Fn(e,t,i),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=Ma(n);i.tag=2,e!=null&&(i.callback=e),e=ba(t,i,n),e!==null&&(Fn(e,t,n),vo(e,t,n))}};function hg(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!Do(n,i)||!Do(a,r):!0}function pg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pd.enqueueReplaceState(e,e.state,null)}function dr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=bt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var Wc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function t_(t){Wc(t)}function n_(t){console.error(t)}function i_(t){Wc(t)}function qc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function mg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Fd(t,e,n){return n=Ma(n),n.tag=3,n.payload={element:null},n.callback=function(){qc(t,e)},n}function a_(t){return t=Ma(t),t.tag=3,t}function r_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){mg(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){mg(e,n,i),typeof a!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function _b(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&tl(e,n,a,!0),n=Kn.current,n!==null){switch(n.tag){case 13:return vi===null?jd():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Rd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),gf(t,i,a)),!1;case 22:return n.flags|=65536,i===Rd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),gf(t,i,a)),!1}throw Error(ne(435,n.tag))}return gf(t,i,a),jd(),!1}if(lt)return e=Kn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==bd&&(t=Error(ne(422),{cause:i}),Uo(qn(t,n)))):(i!==bd&&(e=Error(ne(423),{cause:i}),Uo(qn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=qn(i,n),a=Fd(t.stateNode,i,a),nf(t,a),Ot!==4&&(Ot=2)),!1;var r=Error(ne(520),{cause:i});if(r=qn(r,n),bo===null?bo=[r]:bo.push(r),Ot!==4&&(Ot=2),e===null)return!0;i=qn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Fd(n.stateNode,i,t),nf(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=a_(a),r_(a,t,n,i),nf(n,a),!1}n=n.return}while(n!==null);return!1}var s_=Error(ne(461)),Zt=!1;function Jt(t,e,n,i){e.child=t===null?Jx(e,null,n,i):xs(e,t.child,n,i)}function gg(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return ur(e),i=Mp(t,e,n,s,r,a),o=bp(),t!==null&&!Zt?(Ep(t,e,a),Yi(t,e,a)):(lt&&o&&mp(e),e.flags|=1,Jt(t,e,i,a),e.child)}function vg(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!pp(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,o_(t,e,r,i,a)):(t=hc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Lp(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(s,i)&&t.ref===e.ref)return Yi(t,e,a)}return e.flags|=1,t=Vi(r,i),t.ref=e.ref,t.return=e,e.child=t}function o_(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(Do(r,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=r,Lp(t,a))t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Yi(t,e,a)}return zd(t,e,n,i,a)}function l_(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=r!==null?r.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return xg(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&pc(e,r!==null?r.cachePool:null),r!==null?rg(e,r):Dd(),e_(e);else return e.lanes=e.childLanes=536870912,xg(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(pc(e,r.cachePool),rg(e,r),pa(),e.memoizedState=null):(t!==null&&pc(e,null),Dd(),pa());return Jt(t,e,a,n),e.child}function xg(t,e,n,i){var a=xp();return a=a===null?null:{parent:Gt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&pc(e,null),Dd(),e_(e),t!==null&&tl(t,e,i,!0),null}function vc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ne(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function zd(t,e,n,i,a){return ur(e),n=Mp(t,e,n,i,void 0,a),i=bp(),t!==null&&!Zt?(Ep(t,e,a),Yi(t,e,a)):(lt&&i&&mp(e),e.flags|=1,Jt(t,e,n,a),e.child)}function _g(t,e,n,i,a,r){return ur(e),e.updateQueue=null,n=Sx(e,i,n,a),yx(t),i=bp(),t!==null&&!Zt?(Ep(t,e,r),Yi(t,e,r)):(lt&&i&&mp(e),e.flags|=1,Jt(t,e,n,r),e.child)}function yg(t,e,n,i,a){if(ur(e),e.stateNode===null){var r=Kr,s=n.contextType;typeof s=="object"&&s!==null&&(r=on(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},_p(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?on(s):Kr,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(rf(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Pd.enqueueReplaceState(r,r.state,null),_o(e,i,r,a),xo(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=dr(n,o);r.props=l;var c=r.context,u=n.contextType;s=Kr,typeof u=="object"&&u!==null&&(s=on(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&pg(e,r,i,s),fa=!1;var h=e.memoizedState;r.state=h,_o(e,i,r,a),xo(),c=e.memoizedState,o||h!==c||fa?(typeof d=="function"&&(rf(e,n,d,i),c=e.memoizedState),(l=fa||hg(e,n,l,i,h,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Cd(t,e),s=e.memoizedProps,u=dr(n,s),r.props=u,d=e.pendingProps,h=r.context,c=n.contextType,l=Kr,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||h!==l)&&pg(e,r,i,l),fa=!1,h=e.memoizedState,r.state=h,_o(e,i,r,a),xo();var p=e.memoizedState;s!==d||h!==p||fa||t!==null&&t.dependencies!==null&&Hc(t.dependencies)?(typeof o=="function"&&(rf(e,n,o,i),p=e.memoizedState),(u=fa||hg(e,n,u,i,h,p,l)||t!==null&&t.dependencies!==null&&Hc(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,vc(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=xs(e,t.child,null,a),e.child=xs(e,null,n,a)):Jt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=Yi(t,e,a),t}function Sg(t,e,n,i){return el(),e.flags|=256,Jt(t,e,n,i),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:mx()}}function lf(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Yn),t}function c_(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Vt.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(a?ha(e):pa(),lt){var o=Lt,l;if(l=o){e:{for(l=o,o=di;l.nodeType!==8;){if(!o){o=null;break e}if(l=oi(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:ar!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},l=Un(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,fn=e,Lt=null,l=!0):l=!1}l||cr(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return $d(o)?e.lanes=32:e.lanes=536870912,null;Ii(e)}return o=i.children,i=i.fallback,a?(pa(),a=e.mode,o=Yc({mode:"hidden",children:o},a),i=ir(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=of(n),a.childLanes=lf(t,s,n),e.memoizedState=sf,i):(ha(e),Bd(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(ha(e),e.flags&=-257,e=cf(t,e,n)):e.memoizedState!==null?(pa(),e.child=t.child,e.flags|=128,e=null):(pa(),a=i.fallback,o=e.mode,i=Yc({mode:"visible",children:i.children},o),a=ir(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,xs(e,t.child,null,n),i=e.child,i.memoizedState=of(n),i.childLanes=lf(t,s,n),e.memoizedState=sf,e=a);else if(ha(e),$d(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(ne(419)),i.stack="",i.digest=s,Uo({value:i,source:null,stack:null}),e=cf(t,e,n)}else if(Zt||tl(t,e,n,!1),s=(n&t.childLanes)!==0,Zt||s){if(s=yt,s!==null&&(i=n&-n,i=i&42?1:ip(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Ds(t,i),Fn(s,t,i),s_;o.data==="$?"||jd(),e=cf(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Lt=oi(o.nextSibling),fn=e,lt=!0,rr=null,di=!1,t!==null&&(jn[Xn++]=Fi,jn[Xn++]=zi,jn[Xn++]=ar,Fi=t.id,zi=t.overflow,ar=e),e=Bd(e,i.children),e.flags|=4096);return e}return a?(pa(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=Vi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Vi(c,a):(a=ir(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=of(n):(l=o.cachePool,l!==null?(c=Gt._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=mx(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=lf(t,s,n),e.memoizedState=sf,i):(ha(e),n=t.child,t=n.sibling,n=Vi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Bd(t,e){return e=Yc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Yc(t,e){return t=Un(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function cf(t,e,n){return xs(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Td(t.return,e,n)}function uf(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function u_(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(Jt(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(Rt(Vt,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Xc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),uf(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Xc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}uf(e,!0,n,null,r);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),La|=e.lanes,!(n&e.childLanes))if(t!==null){if(tl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Hc(t)))}function yb(t,e,n){switch(e.tag){case 3:Uc(e,e.stateNode.containerInfo),da(e,Gt,t.memoizedState.cache),el();break;case 27:case 5:hd(e);break;case 4:Uc(e,e.stateNode.containerInfo);break;case 10:da(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ha(e),e.flags|=128,null):n&e.child.childLanes?c_(t,e,n):(ha(e),t=Yi(t,e,n),t!==null?t.sibling:null);ha(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(tl(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return u_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Rt(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,l_(t,e,n);case 24:da(e,Gt,t.memoizedState.cache)}return Yi(t,e,n)}function f_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!Lp(t,n)&&!(e.flags&128))return Zt=!1,yb(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,lt&&e.flags&1048576&&hx(e,Ic,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")pp(i)?(t=dr(i,t),e.tag=1,e=yg(null,e,i,t,n)):(e.tag=0,e=zd(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===ep){e.tag=11,e=gg(null,e,i,t,n);break e}else if(a===tp){e.tag=14,e=vg(null,e,i,t,n);break e}}throw e=fd(i)||i,Error(ne(306,e,""))}}return e;case 0:return zd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=dr(i,e.pendingProps),yg(t,e,i,a,n);case 3:e:{if(Uc(e,e.stateNode.containerInfo),t===null)throw Error(ne(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Cd(t,e),_o(e,i,null,n);var s=e.memoizedState;if(i=s.cache,da(e,Gt,i),i!==r.cache&&Ad(e,[Gt],n,!0),xo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Sg(t,e,i,n);break e}else if(i!==a){a=qn(Error(ne(424)),e),Uo(a),e=Sg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=oi(t.firstChild),fn=e,lt=!0,rr=null,di=!0,n=Jx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(el(),i===a){e=Yi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 26:return vc(t,e),t===null?(n=Ig(e.type,null,e.pendingProps,null))?e.memoizedState=n:lt||(n=e.type,t=e.pendingProps,i=tu(Sa.current).createElement(n),i[sn]=e,i[bn]=t,nn(i,n,t),Yt(i),e.stateNode=i):e.memoizedState=Ig(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return hd(e),t===null&&lt&&(i=e.stateNode=$_(e.type,e.pendingProps,Sa.current),fn=e,di=!0,a=Lt,Fa(e.type)?(Qd=a,Lt=oi(i.firstChild)):Lt=a),Jt(t,e,e.pendingProps.children,n),vc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((a=i=Lt)&&(i=Yb(i,e.type,e.pendingProps,di),i!==null?(e.stateNode=i,fn=e,Lt=oi(i.firstChild),di=!1,a=!0):a=!1),a||cr(e)),hd(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Zd(a,r)?i=null:s!==null&&Zd(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Mp(t,e,db,null,null,n),Bo._currentValue=a),vc(t,e),Jt(t,e,i,n),e.child;case 6:return t===null&&lt&&((t=n=Lt)&&(n=Zb(n,e.pendingProps,di),n!==null?(e.stateNode=n,fn=e,Lt=null,t=!0):t=!1),t||cr(e)),null;case 13:return c_(t,e,n);case 4:return Uc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return gg(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,da(e,e.type,i.value),Jt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,ur(e),a=on(a),i=i(a),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return vg(t,e,e.type,e.pendingProps,n);case 15:return o_(t,e,e.type,e.pendingProps,n);case 19:return u_(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=Yc(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Vi(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return l_(t,e,n);case 24:return ur(e),i=on(Gt),t===null?(a=xp(),a===null&&(a=yt,r=vp(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},_p(e),da(e,Gt,a)):(t.lanes&n&&(Cd(t,e),_o(e,null,null,n),xo()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),da(e,Gt,i)):(i=r.cache,da(e,Gt,i),i!==a.cache&&Ad(e,[Gt],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(ne(156,e.tag))}function Ti(t){t.flags|=4}function bg(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ey(e)){if(e=Kn.current,e!==null&&((it&4194048)===it?vi!==null:(it&62914560)!==it&&!(it&536870912)||e!==vi))throw go=Rd,gx;t.flags|=8192}}function Nl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zv():536870912,t.lanes|=e,_s|=e)}function Ws(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sb(t,e,n){var i=e.pendingProps;switch(gp(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ki(Gt),ds(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(js(e)?Ti(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jm())),Nt(e),null;case 26:return n=e.memoizedState,t===null?(Ti(e),n!==null?(Nt(e),bg(e,n)):(Nt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Ti(e),Nt(e),bg(e,n)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==i&&Ti(e),Nt(e),e.flags&=-16777217),null;case 27:Lc(e),n=Sa.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ti(e);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Nt(e),null}t=mi.current,js(e)?$m(e):(t=$_(a,i,n),e.stateNode=t,Ti(e))}return Nt(e),null;case 5:if(Lc(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ti(e);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Nt(e),null}if(t=mi.current,js(e))$m(e);else{switch(a=tu(Sa.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[sn]=e,t[bn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(nn(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ti(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ti(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=Sa.current,js(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=fn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[sn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Y_(t.nodeValue,n)),t||cr(e)}else t=tu(t).createTextNode(i),t[sn]=e,e.stateNode=t}return Nt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=js(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ne(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ne(317));a[sn]=e}else el(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),a=!1}else a=Jm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Ii(e),e):(Ii(e),null)}if(Ii(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Nl(e,e.updateQueue),Nt(e),null;case 4:return ds(),t===null&&Gp(e.stateNode.containerInfo),Nt(e),null;case 10:return ki(e.type),Nt(e),null;case 19:if(Kt(Vt),a=e.memoizedState,a===null)return Nt(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)Ws(a,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=Xc(t),r!==null){for(e.flags|=128,Ws(a,!1),t=r.updateQueue,e.updateQueue=t,Nl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)dx(n,t),n=n.sibling;return Rt(Vt,Vt.current&1|2),e.child}t=t.sibling}a.tail!==null&&gi()>Kc&&(e.flags|=128,i=!0,Ws(a,!1),e.lanes=4194304)}else{if(!i)if(t=Xc(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Nl(e,t),Ws(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!lt)return Nt(e),null}else 2*gi()-a.renderingStartTime>Kc&&n!==536870912&&(e.flags|=128,i=!0,Ws(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=gi(),e.sibling=null,t=Vt.current,Rt(Vt,i?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return Ii(e),yp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),n=e.updateQueue,n!==null&&Nl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Kt(sr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ki(Gt),Nt(e),null;case 25:return null;case 30:return null}throw Error(ne(156,e.tag))}function Mb(t,e){switch(gp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(Gt),ds(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Lc(e),null;case 13:if(Ii(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));el()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(Vt),null;case 4:return ds(),null;case 10:return ki(e.type),null;case 22:case 23:return Ii(e),yp(),t!==null&&Kt(sr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ki(Gt),null;case 25:return null;default:return null}}function d_(t,e){switch(gp(e),e.tag){case 3:ki(Gt),ds();break;case 26:case 27:case 5:Lc(e);break;case 4:ds();break;case 13:Ii(e);break;case 19:Kt(Vt);break;case 10:ki(e.type);break;case 22:case 23:Ii(e),yp(),t!==null&&Kt(sr);break;case 24:ki(Gt)}}function sl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){_t(e,e.return,o)}}function Ua(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(u){_t(a,l,u)}}}i=i.next}while(i!==r)}}catch(u){_t(e,e.return,u)}}function h_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{_x(e,n)}catch(i){_t(t,t.return,i)}}}function p_(t,e,n){n.props=dr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){_t(t,e,i)}}function So(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){_t(t,e,a)}}function hi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){_t(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){_t(t,e,a)}else n.current=null}function m_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){_t(t,t.return,a)}}function ff(t,e,n){try{var i=t.stateNode;kb(i,t.type,n,e),i[bn]=e}catch(a){_t(t,t.return,a)}}function g_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nu));else if(i!==4&&(i===27&&Fa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}function Zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Fa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function v_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);nn(e,i,n),e[sn]=t,e[bn]=n}catch(r){_t(t,t.return,r)}}var Oi=!1,Ft=!1,hf=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,qt=null;function bb(t,e){if(t=t.containerInfo,qd=ru,t=ax(t),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===a&&(o=s),h===r&&++u===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yd={focusedElem:t,selectionRange:n},ru=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=dr(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(_){_t(n,n.return,_)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Kd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(ne(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function x_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:na(t,n),i&4&&sl(5,n);break;case 1:if(na(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){_t(n,n.return,s)}else{var a=dr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){_t(n,n.return,s)}}i&64&&h_(n),i&512&&So(n,n.return);break;case 3:if(na(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{_x(t,e)}catch(s){_t(n,n.return,s)}}break;case 27:e===null&&i&4&&v_(n);case 26:case 5:na(t,n),e===null&&i&4&&m_(n),i&512&&So(n,n.return);break;case 12:na(t,n);break;case 13:na(t,n),i&4&&S_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Ub.bind(null,n),Kb(t,n))));break;case 22:if(i=n.memoizedState!==null||Oi,!i){e=e!==null&&e.memoizedState!==null||Ft,a=Oi;var r=Ft;Oi=i,(Ft=e)&&!r?ca(t,n,(n.subtreeFlags&8772)!==0):na(t,n),Oi=a,Ft=r}break;case 30:break;default:na(t,n)}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&rp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var At=null,_n=!1;function Ai(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 26:Ft||hi(n,e),Ai(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||hi(n,e);var i=At,a=_n;Fa(n.type)&&(At=n.stateNode,_n=!1),Ai(t,e,n),To(n.stateNode),At=i,_n=a;break;case 5:Ft||hi(n,e);case 6:if(i=At,a=_n,At=null,Ai(t,e,n),At=i,_n=a,At!==null)if(_n)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(n.stateNode)}catch(r){_t(n,e,r)}else try{At.removeChild(n.stateNode)}catch(r){_t(n,e,r)}break;case 18:At!==null&&(_n?(t=At,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Go(t)):Fg(At,n.stateNode));break;case 4:i=At,a=_n,At=n.stateNode.containerInfo,_n=!0,Ai(t,e,n),At=i,_n=a;break;case 0:case 11:case 14:case 15:Ft||Ua(2,n,e),Ft||Ua(4,n,e),Ai(t,e,n);break;case 1:Ft||(hi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&p_(n,e,i)),Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:Ft=(i=Ft)||n.memoizedState!==null,Ai(t,e,n),Ft=i;break;default:Ai(t,e,n)}}function S_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Go(t)}catch(n){_t(e,e.return,n)}}function Eb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Eg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Eg),e;default:throw Error(ne(435,t.tag))}}function pf(t,e){var n=Eb(t);e.forEach(function(i){var a=Lb.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Fa(o.type)){At=o.stateNode,_n=!1;break e}break;case 5:At=o.stateNode,_n=!1;break e;case 3:case 4:At=o.stateNode.containerInfo,_n=!0;break e}o=o.return}if(At===null)throw Error(ne(160));y_(r,s,a),At=null,_n=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)M_(e,t),e=e.sibling}var ni=null;function M_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(e,t),Rn(t),i&4&&(Ua(3,t,t.return),sl(3,t),Ua(5,t,t.return));break;case 1:wn(e,t),Rn(t),i&512&&(Ft||n===null||hi(n,n.return)),i&64&&Oi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ni;if(wn(e,t),Rn(t),i&512&&(Ft||n===null||hi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Qo]||r[sn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),nn(r,i,n),r[sn]=t,Yt(r),i=r;break e;case"link":var s=Gg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Gg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;default:throw Error(ne(468,i))}r[sn]=t,Yt(r),i=r}t.stateNode=i}else Vg(a,t.type,t.stateNode);else t.stateNode=Hg(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Vg(a,t.type,t.stateNode):Hg(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ff(t,t.memoizedProps,n.memoizedProps)}break;case 27:wn(e,t),Rn(t),i&512&&(Ft||n===null||hi(n,n.return)),n!==null&&i&4&&ff(t,t.memoizedProps,n.memoizedProps);break;case 5:if(wn(e,t),Rn(t),i&512&&(Ft||n===null||hi(n,n.return)),t.flags&32){a=t.stateNode;try{ps(a,"")}catch(p){_t(t,t.return,p)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,ff(t,a,n!==null?n.memoizedProps:a)),i&1024&&(hf=!0);break;case 6:if(wn(e,t),Rn(t),i&4){if(t.stateNode===null)throw Error(ne(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(p){_t(t,t.return,p)}}break;case 3:if(yc=null,a=ni,ni=nu(e.containerInfo),wn(e,t),ni=a,Rn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(p){_t(t,t.return,p)}hf&&(hf=!1,b_(t));break;case 4:i=ni,ni=nu(t.stateNode.containerInfo),wn(e,t),Rn(t),ni=i;break;case 12:wn(e,t),Rn(t);break;case 13:wn(e,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bp=gi()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,pf(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Oi,u=Ft;if(Oi=c||a,Ft=u||l,wn(e,t),Ft=u,Oi=c,Rn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Oi||Ft||Za(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){_t(l,l.return,p)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){_t(l,l.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,pf(t,n))));break;case 19:wn(e,t),Rn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,pf(t,i)));break;case 30:break;case 21:break;default:wn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(g_(i)){n=i;break}i=i.return}if(n==null)throw Error(ne(160));switch(n.tag){case 27:var a=n.stateNode,r=df(t);Zc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ps(s,""),n.flags&=-33);var o=df(t);Zc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=df(t);Id(t,c,l);break;default:throw Error(ne(161))}}catch(u){_t(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;b_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function na(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)x_(t,e.alternate,e),e=e.sibling}function Za(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ua(4,e,e.return),Za(e);break;case 1:hi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&p_(e,e.return,n),Za(e);break;case 27:To(e.stateNode);case 26:case 5:hi(e,e.return),Za(e);break;case 22:e.memoizedState===null&&Za(e);break;case 30:Za(e);break;default:Za(e)}t=t.sibling}}function ca(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:ca(a,r,n),sl(4,r);break;case 1:if(ca(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){_t(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)xx(l[a],o)}catch(c){_t(i,i.return,c)}}n&&s&64&&h_(r),So(r,r.return);break;case 27:v_(r);case 26:case 5:ca(a,r,n),n&&i===null&&s&4&&m_(r),So(r,r.return);break;case 12:ca(a,r,n);break;case 13:ca(a,r,n),n&&s&4&&S_(a,r);break;case 22:r.memoizedState===null&&ca(a,r,n),So(r,r.return);break;case 30:break;default:ca(a,r,n)}e=e.sibling}}function Op(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&nl(n))}function Pp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&nl(t))}function ui(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E_(t,e,n,i),e=e.sibling}function E_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ui(t,e,n,i),a&2048&&sl(9,e);break;case 1:ui(t,e,n,i);break;case 3:ui(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&nl(t)));break;case 12:if(a&2048){ui(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){_t(e,e.return,l)}}else ui(t,e,n,i);break;case 13:ui(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?ui(t,e,n,i):Mo(t,e):r._visibility&2?ui(t,e,n,i):(r._visibility|=2,Hr(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&Op(s,e);break;case 24:ui(t,e,n,i),a&2048&&Pp(e.alternate,e);break;default:ui(t,e,n,i)}}function Hr(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Hr(r,s,o,l,a),sl(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?Hr(r,s,o,l,a):Mo(r,s):(u._visibility|=2,Hr(r,s,o,l,a)),a&&c&2048&&Op(s.alternate,s);break;case 24:Hr(r,s,o,l,a),a&&c&2048&&Pp(s.alternate,s);break;default:Hr(r,s,o,l,a)}e=e.sibling}}function Mo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Mo(n,i),a&2048&&Op(i.alternate,i);break;case 24:Mo(n,i),a&2048&&Pp(i.alternate,i);break;default:Mo(n,i)}e=e.sibling}}var so=8192;function Sr(t){if(t.subtreeFlags&so)for(t=t.child;t!==null;)T_(t),t=t.sibling}function T_(t){switch(t.tag){case 26:Sr(t),t.flags&so&&t.memoizedState!==null&&cE(ni,t.memoizedState,t.memoizedProps);break;case 5:Sr(t);break;case 3:case 4:var e=ni;ni=nu(t.stateNode.containerInfo),Sr(t),ni=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=so,so=16777216,Sr(t),so=e):Sr(t));break;default:Sr(t)}}function A_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qs(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,R_(i,t)}A_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w_(t),t=t.sibling}function w_(t){switch(t.tag){case 0:case 11:case 15:qs(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:qs(t);break;case 12:qs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xc(t)):qs(t);break;default:qs(t)}}function xc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,R_(i,t)}A_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ua(8,e,e.return),xc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,xc(e));break;default:xc(e)}t=t.sibling}}function R_(t,e){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:Ua(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:nl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,qt=i;else e:for(n=t;qt!==null;){i=qt;var a=i.sibling,r=i.return;if(__(i),i===n){qt=null;break e}if(a!==null){a.return=r,qt=a;break e}qt=r}}}var Tb={getCacheForType:function(t){var e=on(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Ab=typeof WeakMap=="function"?WeakMap:Map,dt=0,yt=null,Je=null,it=0,ft=0,Dn=null,_a=!1,Us=!1,Fp=!1,Zi=0,Ot=0,La=0,or=0,zp=0,Yn=0,_s=0,bo=null,yn=null,Hd=!1,Bp=0,Kc=1/0,$c=null,Ea=null,tn=0,Ta=null,ys=null,ls=0,Gd=0,Vd=null,C_=null,Eo=0,kd=null;function Pn(){if(dt&2&&it!==0)return it&-it;if(Ie.T!==null){var t=ms;return t!==0?t:Hp()}return Hv()}function N_(){Yn===0&&(Yn=!(it&536870912)||lt?Fv():536870912);var t=Kn.current;return t!==null&&(t.flags|=32),Yn}function Fn(t,e,n){(t===yt&&(ft===2||ft===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),ya(t,it,Yn,!1)),$o(t,n),(!(dt&2)||t!==yt)&&(t===yt&&(!(dt&2)&&(or|=n),Ot===4&&ya(t,it,Yn,!1)),Mi(t))}function D_(t,e,n){if(dt&6)throw Error(ne(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Ko(t,e),a=i?Cb(t,e):mf(t,e,!0),r=i;do{if(a===0){Us&&!i&&ya(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!wb(n)){a=mf(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=bo;var l=o.current.memoizedState.isDehydrated;if(l&&(Ss(o,s).flags|=256),s=mf(o,s,!1),s!==2){if(Fp&&!l){o.errorRecoveryDisabledLanes|=r,or|=r,a=4;break e}r=yn,yn=a,r!==null&&(yn===null?yn=r:yn.push.apply(yn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Ss(t,0),ya(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(ne(345));case 4:if((e&4194048)!==e)break;case 6:ya(i,e,Yn,!_a);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(ne(329))}if((e&62914560)===e&&(a=Bp+300-gi(),10<a)){if(ya(i,e,Yn,!_a),vu(i,0,!0)!==0)break e;i.timeoutHandle=K_(Tg.bind(null,i,n,yn,$c,Hd,e,Yn,or,_s,_a,r,2,-0,0),a);break e}Tg(i,n,yn,$c,Hd,e,Yn,or,_s,_a,r,0,-0,0)}}break}while(!0);Mi(t)}function Tg(t,e,n,i,a,r,s,o,l,c,u,d,h,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(zo={stylesheets:null,count:0,unsuspend:lE},T_(e),d=uE(),d!==null)){t.cancelPendingCommit=d(wg.bind(null,t,e,r,n,i,a,s,o,l,u,1,h,p)),ya(t,r,s,!c);return}wg(t,e,r,n,i,a,s,o,l)}function wb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!zn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ya(t,e,n,i){e&=~zp,e&=~or,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-On(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Bv(t,n,e)}function wu(){return dt&6?!0:(ol(0),!1)}function Ip(){if(Je!==null){if(ft===0)var t=Je.return;else t=Je,Bi=xr=null,Tp(t),os=null,Oo=0,t=Je;for(;t!==null;)d_(t.alternate,t),t=t.return;Je=null}}function Ss(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Xb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ip(),yt=t,Je=n=Vi(t.current,null),it=e,ft=0,Dn=null,_a=!1,Us=Ko(t,e),Fp=!1,_s=Yn=zp=or=La=Ot=0,yn=bo=null,Hd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-On(i),r=1<<a;e|=t[a],i&=~r}return Zi=e,Su(),n}function U_(t,e){$e=null,Ie.H=jc,e===il||e===bu?(e=ig(),ft=3):e===gx?(e=ig(),ft=4):ft=e===s_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,Je===null&&(Ot=1,qc(t,qn(e,t.current)))}function L_(){var t=Ie.H;return Ie.H=jc,t===null?jc:t}function O_(){var t=Ie.A;return Ie.A=Tb,t}function jd(){Ot=4,_a||(it&4194048)!==it&&Kn.current!==null||(Us=!0),!(La&134217727)&&!(or&134217727)||yt===null||ya(yt,it,Yn,!1)}function mf(t,e,n){var i=dt;dt|=2;var a=L_(),r=O_();(yt!==t||it!==e)&&($c=null,Ss(t,e)),e=!1;var s=Ot;e:do try{if(ft!==0&&Je!==null){var o=Je,l=Dn;switch(ft){case 8:Ip(),s=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(e=!0);var c=ft;if(ft=0,Dn=null,Jr(t,o,l,c),n&&Us){s=0;break e}break;default:c=ft,ft=0,Dn=null,Jr(t,o,l,c)}}Rb(),s=Ot;break}catch(u){U_(t,u)}while(!0);return e&&t.shellSuspendCounter++,Bi=xr=null,dt=i,Ie.H=a,Ie.A=r,Je===null&&(yt=null,it=0,Su()),s}function Rb(){for(;Je!==null;)P_(Je)}function Cb(t,e){var n=dt;dt|=2;var i=L_(),a=O_();yt!==t||it!==e?($c=null,Kc=gi()+500,Ss(t,e)):Us=Ko(t,e);e:do try{if(ft!==0&&Je!==null){e=Je;var r=Dn;t:switch(ft){case 1:ft=0,Dn=null,Jr(t,e,r,1);break;case 2:case 9:if(ng(r)){ft=0,Dn=null,Ag(e);break}e=function(){ft!==2&&ft!==9||yt!==t||(ft=7),Mi(t)},r.then(e,e);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:ng(r)?(ft=0,Dn=null,Ag(e)):(ft=0,Dn=null,Jr(t,e,r,7));break;case 5:var s=null;switch(Je.tag){case 26:s=Je.memoizedState;case 5:case 27:var o=Je;if(!s||ey(s)){ft=0,Dn=null;var l=o.sibling;if(l!==null)Je=l;else{var c=o.return;c!==null?(Je=c,Ru(c)):Je=null}break t}}ft=0,Dn=null,Jr(t,e,r,5);break;case 6:ft=0,Dn=null,Jr(t,e,r,6);break;case 8:Ip(),Ot=6;break e;default:throw Error(ne(462))}}Nb();break}catch(u){U_(t,u)}while(!0);return Bi=xr=null,Ie.H=i,Ie.A=a,dt=n,Je!==null?0:(yt=null,it=0,Su(),Ot)}function Nb(){for(;Je!==null&&!QS();)P_(Je)}function P_(t){var e=f_(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,e===null?Ru(t):Je=e}function Ag(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=_g(n,e,e.pendingProps,e.type,void 0,it);break;case 11:e=_g(n,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:Tp(e);default:d_(n,e),e=Je=dx(e,Zi),e=f_(n,e,Zi)}t.memoizedProps=t.pendingProps,e===null?Ru(t):Je=e}function Jr(t,e,n,i){Bi=xr=null,Tp(e),os=null,Oo=0;var a=e.return;try{if(_b(t,a,e,n,it)){Ot=1,qc(t,qn(n,t.current)),Je=null;return}}catch(r){if(a!==null)throw Je=a,r;Ot=1,qc(t,qn(n,t.current)),Je=null;return}e.flags&32768?(lt||i===1?t=!0:Us||it&536870912?t=!1:(_a=t=!0,(i===2||i===9||i===3||i===6)&&(i=Kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),F_(e,t)):Ru(e)}function Ru(t){var e=t;do{if(e.flags&32768){F_(e,_a);return}t=e.return;var n=Sb(e.alternate,e,Zi);if(n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Ot===0&&(Ot=5)}function F_(t,e){do{var n=Mb(t.alternate,t);if(n!==null){n.flags&=32767,Je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Je=t;return}Je=t=n}while(t!==null);Ot=6,Je=null}function wg(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do Cu();while(tn!==0);if(dt&6)throw Error(ne(327));if(e!==null){if(e===t.current)throw Error(ne(177));if(r=e.lanes|e.childLanes,r|=dp,lM(t,n,r,s,o,l),t===yt&&(Je=yt=null,it=0),ys=e,Ta=t,ls=n,Gd=r,Vd=a,C_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Ob(Oc,function(){return G_(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ie.T,Ie.T=null,a=ct.p,ct.p=2,s=dt,dt|=4;try{bb(t,e,n)}finally{dt=s,ct.p=a,Ie.T=i}}tn=1,z_(),B_(),I_()}}function z_(){if(tn===1){tn=0;var t=Ta,e=ys,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ie.T,Ie.T=null;var i=ct.p;ct.p=2;var a=dt;dt|=4;try{M_(e,t);var r=Yd,s=ax(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&ix(o.ownerDocument.documentElement,o)){if(l!==null&&fp(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),x=o.textContent.length,_=Math.min(l.start,x),m=l.end===void 0?_:Math.min(l.end,x);!p.extend&&_>m&&(s=m,m=_,_=s);var f=Ym(o,_),g=Ym(o,m);if(f&&g&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var y=d.createRange();y.setStart(f.node,f.offset),p.removeAllRanges(),_>m?(p.addRange(y),p.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var M=d[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ru=!!qd,Yd=qd=null}finally{dt=a,ct.p=i,Ie.T=n}}t.current=e,tn=2}}function B_(){if(tn===2){tn=0;var t=Ta,e=ys,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ie.T,Ie.T=null;var i=ct.p;ct.p=2;var a=dt;dt|=4;try{x_(t,e.alternate,e)}finally{dt=a,ct.p=i,Ie.T=n}}tn=3}}function I_(){if(tn===4||tn===3){tn=0,JS();var t=Ta,e=ys,n=ls,i=C_;e.subtreeFlags&10256||e.flags&10256?tn=5:(tn=0,ys=Ta=null,H_(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ea=null),ap(n),e=e.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ie.T,a=ct.p,ct.p=2,Ie.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ie.T=e,ct.p=a}}ls&3&&Cu(),Mi(t),a=t.pendingLanes,n&4194090&&a&42?t===kd?Eo++:(Eo=0,kd=t):Eo=0,ol(0)}}function H_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,nl(e)))}function Cu(t){return z_(),B_(),I_(),G_()}function G_(){if(tn!==5)return!1;var t=Ta,e=Gd;Gd=0;var n=ap(ls),i=Ie.T,a=ct.p;try{ct.p=32>n?32:n,Ie.T=null,n=Vd,Vd=null;var r=Ta,s=ls;if(tn=0,ys=Ta=null,ls=0,dt&6)throw Error(ne(331));var o=dt;if(dt|=4,w_(r.current),E_(r,r.current,s,n),dt=o,ol(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Zo,r)}catch{}return!0}finally{ct.p=a,Ie.T=i,H_(t,e)}}function Rg(t,e,n){e=qn(n,e),e=Fd(t.stateNode,e,2),t=ba(t,e,2),t!==null&&($o(t,2),Mi(t))}function _t(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ea===null||!Ea.has(i))){t=qn(n,t),n=a_(2),i=ba(e,n,2),i!==null&&(r_(n,i,e,t),$o(i,2),Mi(i));break}}e=e.return}}function gf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ab;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Fp=!0,a.add(n),t=Db.bind(null,t,e,n),e.then(t,t))}function Db(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,yt===t&&(it&n)===n&&(Ot===4||Ot===3&&(it&62914560)===it&&300>gi()-Bp?!(dt&2)&&Ss(t,0):zp|=n,_s===it&&(_s=0)),Mi(t)}function V_(t,e){e===0&&(e=zv()),t=Ds(t,e),t!==null&&($o(t,e),Mi(t))}function Ub(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V_(t,n)}function Lb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ne(314))}i!==null&&i.delete(e),V_(t,n)}function Ob(t,e){return np(t,e)}var Qc=null,Gr=null,Xd=!1,Jc=!1,vf=!1,lr=0;function Mi(t){t!==Gr&&t.next===null&&(Gr===null?Qc=Gr=t:Gr=Gr.next=t),Jc=!0,Xd||(Xd=!0,Fb())}function ol(t,e){if(!vf&&Jc){vf=!0;do for(var n=!1,i=Qc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-On(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Cg(i,r))}else r=it,r=vu(i,i===yt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Ko(i,r)||(n=!0,Cg(i,r));i=i.next}while(n);vf=!1}}function Pb(){k_()}function k_(){Jc=Xd=!1;var t=0;lr!==0&&(jb()&&(t=lr),lr=0);for(var e=gi(),n=null,i=Qc;i!==null;){var a=i.next,r=j_(i,e);r===0?(i.next=null,n===null?Qc=a:n.next=a,a===null&&(Gr=n)):(n=i,(t!==0||r&3)&&(Jc=!0)),i=a}ol(t)}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-On(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=oM(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=yt,n=it,n=vu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ft===2||ft===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Vu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Ko(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Vu(i),ap(n)){case 2:case 8:n=Ov;break;case 32:n=Oc;break;case 268435456:n=Pv;break;default:n=Oc}return i=X_.bind(null,t),n=np(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Vu(i),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Cu()&&t.callbackNode!==n)return null;var i=it;return i=vu(t,t===yt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(D_(t,i,e),j_(t,gi()),t.callbackNode!=null&&t.callbackNode===n?X_.bind(null,t):null)}function Cg(t,e){if(Cu())return null;D_(t,e,!0)}function Fb(){Wb(function(){dt&6?np(Lv,Pb):k_()})}function Hp(){return lr===0&&(lr=Fv()),lr}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:uc(""+t)}function Dg(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function zb(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=Ng((a[bn]||null).action),s=i.submitter;s&&(e=(e=s[bn]||null)?Ng(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new xu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(lr!==0){var l=s?Dg(a,s):new FormData(a);Od(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Dg(a,s):new FormData(a),Od(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var xf=0;xf<Md.length;xf++){var _f=Md[xf],Bb=_f.toLowerCase(),Ib=_f[0].toUpperCase()+_f.slice(1);ci(Bb,"on"+Ib)}ci(sx,"onAnimationEnd");ci(ox,"onAnimationIteration");ci(lx,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(nb,"onTransitionRun");ci(ib,"onTransitionStart");ci(ab,"onTransitionCancel");ci(cx,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function W_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){Wc(u)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(u){Wc(u)}a.currentTarget=null,r=l}}}}function Qe(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var i=t+"__bubble";n.has(i)||(q_(e,t,2,!1),n.add(i))}function yf(t,e,n){var i=0;e&&(i|=4),q_(n,t,i,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Gp(t){if(!t[Dl]){t[Dl]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(Hb.has(n)||yf(n,!1,t),yf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,yf("selectionchange",!1,e))}}function q_(t,e,n,i){switch(ry(e)){case 2:var a=hE;break;case 8:a=pE;break;default:a=Xp}n=a.bind(null,e,n,t),a=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Sf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=jr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}Zv(function(){var c=r,u=op(n),d=[];e:{var h=ux.get(t);if(h!==void 0){var p=xu,x=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":p=OM;break;case"focusin":x="focus",p=Ku;break;case"focusout":x="blur",p=Ku;break;case"beforeblur":case"afterblur":p=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=MM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zM;break;case sx:case ox:case lx:p=TM;break;case cx:p=IM;break;case"scroll":case"scrollend":p=yM;break;case"wheel":p=GM;break;case"copy":case"cut":case"paste":p=wM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hm;break;case"toggle":case"beforetoggle":p=kM}var _=(e&4)!==0,m=!_&&(t==="scroll"||t==="scrollend"),f=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,y;g!==null;){var M=g;if(y=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||y===null||f===null||(M=Co(g,f),M!=null&&_.push(Fo(g,M,y))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==xd&&(x=n.relatedTarget||n.fromElement)&&(jr(x)||x[Cs]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?jr(x):null,x!==null&&(m=Yo(x),_=x.tag,x!==m||_!==5&&_!==27&&_!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=Bm,M="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Hm,M="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:ro(p),y=x==null?h:ro(x),h=new _(M,g+"leave",p,n,u),h.target=m,h.relatedTarget=y,M=null,jr(u)===c&&(_=new _(f,g+"enter",x,n,u),_.target=y,_.relatedTarget=m,M=_),m=M,p&&x)t:{for(_=p,f=x,g=0,y=_;y;y=Mr(y))g++;for(y=0,M=f;M;M=Mr(M))y++;for(;0<g-y;)_=Mr(_),g--;for(;0<y-g;)f=Mr(f),y--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=Mr(_),f=Mr(f)}_=null}else _=null;p!==null&&Ug(d,h,p,_,!1),x!==null&&m!==null&&Ug(d,m,x,_,!0)}}e:{if(h=c?ro(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=jm;else if(km(h))if(tx)R=JM;else{R=$M;var w=KM}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&sp(c.elementType)&&(R=jm):R=QM;if(R&&(R=R(t,c))){ex(d,R,n,u);break e}w&&w(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&vd(h,"number",h.value)}switch(w=c?ro(c):window,t){case"focusin":(km(w)||w.contentEditable==="true")&&(qr=w,yd=c,po=null);break;case"focusout":po=yd=qr=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Zm(d,n,u);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":Zm(d,n,u)}var A;if(up)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Wr?Qv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&($v&&n.locale!=="ko"&&(Wr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Wr&&(A=Kv()):(xa=u,lp="value"in xa?xa.value:xa.textContent,Wr=!0)),w=eu(c,D),0<w.length&&(D=new Im(D,t,null,n,u),d.push({event:D,listeners:w}),A?D.data=A:(A=Jv(n),A!==null&&(D.data=A)))),(A=XM?WM(t,n):qM(t,n))&&(D=eu(c,"onBeforeInput"),0<D.length&&(w=new Im("onBeforeInput","beforeinput",null,n,u),d.push({event:w,listeners:D}),w.data=A)),zb(d,t,c,n,u)}W_(d,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Co(t,n),a!=null&&i.unshift(Fo(t,a,r)),a=Co(t,e),a!=null&&i.push(Fo(t,a,r))),t.tag===3)return i;t=t.return}return[]}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ug(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Co(n,r),c!=null&&s.unshift(Fo(n,c,l))):a||(c=Co(n,r),c!=null&&s.push(Fo(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Gb=/\r\n?/g,Vb=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace(Gb,`
`).replace(Vb,"")}function Y_(t,e){return e=Lg(e),Lg(t)===e}function Nu(){}function mt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ps(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ps(t,""+i);break;case"className":El(t,"class",i);break;case"tabIndex":El(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":El(t,n,i);break;case"style":Yv(t,i,r);break;case"data":if(e!=="object"){El(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=uc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&mt(t,e,"name",a.name,a,null),mt(t,e,"formEncType",a.formEncType,a,null),mt(t,e,"formMethod",a.formMethod,a,null),mt(t,e,"formTarget",a.formTarget,a,null)):(mt(t,e,"encType",a.encType,a,null),mt(t,e,"method",a.method,a,null),mt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=uc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Nu);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ne(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ne(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=uc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),cc(t,"popover",i);break;case"xlinkActuate":Ei(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ei(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ei(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ei(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ei(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ei(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ei(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ei(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ei(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":cc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=xM.get(n)||n,cc(t,n,i))}}function Wd(t,e,n,i,a,r){switch(n){case"style":Yv(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ne(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ne(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ps(t,i):(typeof i=="number"||typeof i=="bigint")&&ps(t,""+i);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Nu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[bn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):cc(t,n,i)}}}function nn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:mt(t,e,r,s,n,null)}}a&&mt(t,e,"srcSet",n.srcSet,n,null),i&&mt(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ne(137,e));break;default:mt(t,e,i,u,n,null)}}Xv(t,r,o,l,c,s,a,!1),Pc(t);return;case"select":Qe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:mt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?ns(t,!!i,e,!1):n!=null&&ns(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ne(91));break;default:mt(t,e,s,o,n,null)}qv(t,i,a,r),Pc(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:mt(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<Po.length;i++)Qe(Po[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:mt(t,e,c,i,n,null)}return;default:if(sp(e)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Wd(t,e,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&mt(t,e,o,i,n,null))}function kb(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||mt(t,e,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(ne(137,e));break;default:p!==d&&mt(t,e,h,p,i,d)}}gd(t,s,o,l,c,u,r,a);return;case"select":p=s=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||mt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&mt(t,e,a,r,i,l)}e=o,n=s,i=p,h!=null?ns(t,!!n,h,!1):!!i!=!!n&&(e!=null?ns(t,!!n,e,!0):ns(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:mt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ne(91));break;default:a!==r&&mt(t,e,s,a,i,r)}Wv(t,h,p);return;case"option":for(var x in n)if(h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:mt(t,e,x,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:mt(t,e,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&mt(t,e,_,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ne(137,e));break;default:mt(t,e,c,h,i,p)}return;default:if(sp(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Wd(t,e,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||Wd(t,e,u,h,i,p);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&mt(t,e,f,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||mt(t,e,d,h,i,p)}var qd=null,Yd=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=null;function jb(){var t=window.event;return t&&t.type==="popstate"?t===Mf?!1:(Mf=t,!0):(Mf=null,!1)}var K_=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,Wb=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(qb)}:K_;function qb(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Fg(t,e){var n=e,i=0,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=t.ownerDocument;if(n&1&&To(s.documentElement),n&2&&To(s.body),n&4)for(n=s.head,To(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Qo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){t.removeChild(r),Go(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);Go(e)}function Kd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Kd(n),rp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Yb(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Qo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Zb(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function $d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Kb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Qd=null;function zg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function $_(t,e,n){switch(e=tu(n),t){case"html":if(t=e.documentElement,!t)throw Error(ne(452));return t;case"head":if(t=e.head,!t)throw Error(ne(453));return t;case"body":if(t=e.body,!t)throw Error(ne(454));return t;default:throw Error(ne(451))}}function To(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);rp(t)}var $n=new Map,Bg=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=ct.d;ct.d={f:$b,r:Qb,D:Jb,C:eE,L:tE,m:nE,X:aE,S:iE,M:rE};function $b(){var t=Ji.f(),e=wu();return t||e}function Qb(t){var e=Ns(t);e!==null&&e.tag===5&&e.type==="form"?jx(e):Ji.r(t)}var Ls=typeof document>"u"?null:document;function Q_(t,e,n){var i=Ls;if(i&&typeof e=="string"&&e){var a=Wn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Bg.has(a)||(Bg.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),nn(e,"link",t),Yt(e),i.head.appendChild(e)))}}function Jb(t){Ji.D(t),Q_("dns-prefetch",t,null)}function eE(t,e){Ji.C(t,e),Q_("preconnect",t,e)}function tE(t,e,n){Ji.L(t,e,n);var i=Ls;if(i&&t&&e){var a='link[rel="preload"][as="'+Wn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Wn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Wn(n.imageSizes)+'"]')):a+='[href="'+Wn(t)+'"]';var r=a;switch(e){case"style":r=Ms(t);break;case"script":r=Os(t)}$n.has(r)||(t=bt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),$n.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(ll(r))||e==="script"&&i.querySelector(cl(r))||(e=i.createElement("link"),nn(e,"link",t),Yt(e),i.head.appendChild(e)))}}function nE(t,e){Ji.m(t,e);var n=Ls;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Wn(i)+'"][href="'+Wn(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Os(t)}if(!$n.has(r)&&(t=bt({rel:"modulepreload",href:t},e),$n.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cl(r)))return}i=n.createElement("link"),nn(i,"link",t),Yt(i),n.head.appendChild(i)}}}function iE(t,e,n){Ji.S(t,e,n);var i=Ls;if(i&&t){var a=ts(i).hoistableStyles,r=Ms(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(ll(r)))o.loading=5;else{t=bt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=$n.get(r))&&Vp(t,n);var l=s=i.createElement("link");Yt(l),nn(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_c(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function aE(t,e){Ji.X(t,e);var n=Ls;if(n&&t){var i=ts(n).hoistableScripts,a=Os(t),r=i.get(a);r||(r=n.querySelector(cl(a)),r||(t=bt({src:t,async:!0},e),(e=$n.get(a))&&kp(t,e),r=n.createElement("script"),Yt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function rE(t,e){Ji.M(t,e);var n=Ls;if(n&&t){var i=ts(n).hoistableScripts,a=Os(t),r=i.get(a);r||(r=n.querySelector(cl(a)),r||(t=bt({src:t,async:!0,type:"module"},e),(e=$n.get(a))&&kp(t,e),r=n.createElement("script"),Yt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Ig(t,e,n,i){var a=(a=Sa.current)?nu(a):null;if(!a)throw Error(ne(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ms(n.href),n=ts(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ms(n.href);var r=ts(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(ll(t)))&&!r._p&&(s.instance=r,s.state.loading=5),$n.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(t,n),r||sE(a,t,n,s.state))),e&&i===null)throw Error(ne(528,""));return s}if(e&&i!==null)throw Error(ne(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Os(n),n=ts(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ne(444,t))}}function Ms(t){return'href="'+Wn(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function J_(t){return bt({},t,{"data-precedence":t.precedence,precedence:null})}function sE(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),nn(e,"link",n),Yt(e),t.head.appendChild(e))}function Os(t){return'[src="'+Wn(t)+'"]'}function cl(t){return"script[async]"+t}function Hg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Wn(n.href)+'"]');if(i)return e.instance=i,Yt(i),i;var a=bt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Yt(i),nn(i,"style",a),_c(i,n.precedence,t),e.instance=i;case"stylesheet":a=Ms(n.href);var r=t.querySelector(ll(a));if(r)return e.state.loading|=4,e.instance=r,Yt(r),r;i=J_(n),(a=$n.get(a))&&Vp(i,a),r=(t.ownerDocument||t).createElement("link"),Yt(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",i),e.state.loading|=4,_c(r,n.precedence,t),e.instance=r;case"script":return r=Os(n.src),(a=t.querySelector(cl(r)))?(e.instance=a,Yt(a),a):(i=n,(a=$n.get(r))&&(i=bt({},n),kp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Yt(a),nn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ne(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,_c(i,n.precedence,t));return e.instance}function _c(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Vp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function kp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yc=null;function Gg(t,e,n){if(yc===null){var i=new Map,a=yc=new Map;a.set(n,i)}else a=yc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Qo]||r[sn]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Vg(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function oE(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ey(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var zo=null;function lE(){}function cE(t,e,n){if(zo===null)throw Error(ne(475));var i=zo;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=Ms(n.href),r=t.querySelector(ll(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=iu.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,Yt(r);return}r=t.ownerDocument||t,n=J_(n),(a=$n.get(a))&&Vp(n,a),r=r.createElement("link"),Yt(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=iu.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function uE(){if(zo===null)throw Error(ne(475));var t=zo;return t.stylesheets&&t.count===0&&Jd(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Jd(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)Jd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var au=null;function Jd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,e.forEach(fE,t),au=null,iu.call(t))}function fE(t,e){if(!(e.state.loading&4)){var n=au.get(t);if(n)var i=n.get(null);else{n=new Map,au.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=iu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Bo={$$typeof:Pi,Provider:null,Consumer:null,_currentValue:nr,_currentValue2:nr,_threadCount:0};function dE(t,e,n,i,a,r,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.hiddenUpdates=ku(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ty(t,e,n,i,a,r,s,o,l,c,u,d){return t=new dE(t,e,n,s,o,l,c,d),e=1,r===!0&&(e|=24),r=Un(3,null,null,e),t.current=r,r.stateNode=t,e=vp(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},_p(r),t}function ny(t){return t?(t=Kr,t):Kr}function iy(t,e,n,i,a,r){a=ny(a),i.context===null?i.context=a:i.pendingContext=a,i=Ma(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ba(t,i,e),n!==null&&(Fn(n,t,e),vo(n,t,e))}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function ay(t){if(t.tag===13){var e=Ds(t,67108864);e!==null&&Fn(e,t,67108864),jp(t,67108864)}}var ru=!0;function hE(t,e,n,i){var a=Ie.T;Ie.T=null;var r=ct.p;try{ct.p=2,Xp(t,e,n,i)}finally{ct.p=r,Ie.T=a}}function pE(t,e,n,i){var a=Ie.T;Ie.T=null;var r=ct.p;try{ct.p=8,Xp(t,e,n,i)}finally{ct.p=r,Ie.T=a}}function Xp(t,e,n,i){if(ru){var a=eh(i);if(a===null)Sf(t,e,i,su,n),jg(t,i);else if(gE(a,t,e,n,i))i.stopPropagation();else if(jg(t,i),e&4&&-1<mE.indexOf(t)){for(;a!==null;){var r=Ns(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=qa(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-On(s);o.entanglements[1]|=l,s&=~l}Mi(r),!(dt&6)&&(Kc=gi()+500,ol(0))}}break;case 13:o=Ds(r,2),o!==null&&Fn(o,r,2),wu(),jp(r,2)}if(r=eh(i),r===null&&Sf(t,e,i,su,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Sf(t,e,i,null,n)}}function eh(t){return t=op(t),Wp(t)}var su=null;function Wp(t){if(su=null,t=jr(t),t!==null){var e=Yo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return su=t,null}function ry(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eM()){case Lv:return 2;case Ov:return 8;case Oc:case tM:return 32;case Pv:return 268435456;default:return 32}default:return 32}}var th=!1,Aa=null,wa=null,Ra=null,Io=new Map,Ho=new Map,ma=[],mE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(t,e){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function Ys(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Ns(e),e!==null&&ay(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function gE(t,e,n,i,a){switch(e){case"focusin":return Aa=Ys(Aa,t,e,n,i,a),!0;case"dragenter":return wa=Ys(wa,t,e,n,i,a),!0;case"mouseover":return Ra=Ys(Ra,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Io.set(r,Ys(Io.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Ho.set(r,Ys(Ho.get(r)||null,t,e,n,i,a)),!0}return!1}function sy(t){var e=jr(t.target);if(e!==null){var n=Yo(e);if(n!==null){if(e=n.tag,e===13){if(e=Cv(n),e!==null){t.blockedOn=e,cM(t.priority,function(){if(n.tag===13){var i=Pn();i=ip(i);var a=Ds(n,i);a!==null&&Fn(a,n,i),jp(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=Ns(n),e!==null&&ay(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){Sc(t)&&n.delete(e)}function vE(){th=!1,Aa!==null&&Sc(Aa)&&(Aa=null),wa!==null&&Sc(wa)&&(wa=null),Ra!==null&&Sc(Ra)&&(Ra=null),Io.forEach(Xg),Ho.forEach(Xg)}function Ul(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,vE)))}var Ll=null;function Wg(t){Ll!==t&&(Ll=t,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,function(){Ll===t&&(Ll=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Wp(i||n)===null)continue;break}var r=Ns(n);r!==null&&(t.splice(e,3),e-=3,Od(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Go(t){function e(l){return Ul(l,t)}Aa!==null&&Ul(Aa,t),wa!==null&&Ul(wa,t),Ra!==null&&Ul(Ra,t),Io.forEach(e),Ho.forEach(e);for(var n=0;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ma.length&&(n=ma[0],n.blockedOn===null);)sy(n),n.blockedOn===null&&ma.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[bn]||null;if(typeof r=="function")s||Wg(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[bn]||null)o=s.formAction;else if(Wp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Wg(n)}}}function qp(t){this._internalRoot=t}Du.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));var n=e.current,i=Pn();iy(n,i,t,e,null,null)};Du.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;iy(t.current,2,null,t,null,null),wu(),e[Cs]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ma.length&&e!==0&&e<ma[n].priority;n++);ma.splice(n,0,t),n===0&&sy(t)}};var qg=wv.version;if(qg!=="19.1.0")throw Error(ne(527,qg,"19.1.0"));ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=qS(e),t=t!==null?Nv(t):null,t=t===null?null:t.stateNode,t};var xE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ie,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Zo=Ol.inject(xE),Ln=Ol}catch{}}mu.createRoot=function(t,e){if(!Rv(t))throw Error(ne(299));var n=!1,i="",a=t_,r=n_,s=i_,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=ty(t,1,!1,null,null,n,i,a,r,s,o,null),t[Cs]=e.current,Gp(t),new qp(e)};mu.hydrateRoot=function(t,e,n){if(!Rv(t))throw Error(ne(299));var i=!1,a="",r=t_,s=n_,o=i_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=ty(t,1,!0,e,n??null,i,a,r,s,o,l,c),e.context=ny(null),n=e.current,i=Pn(),i=ip(i),a=Ma(i),a.callback=null,ba(n,a,i),n=i,e.current.lanes=n,$o(e,n),Mi(e),t[Cs]=e.current,Gp(t),new Du(e)};mu.version="19.1.0";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(t){console.error(t)}}oy(),Sv.exports=mu;var _E=Sv.exports;const yE=fv(_E);/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function SE(t={}){function e(i,a){let{pathname:r,search:s,hash:o}=i.location;return nh("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:Vo(a)}return bE(e,n,null,t)}function Dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ME(){return Math.random().toString(36).substring(2,10)}function Zg(t,e){return{usr:t.state,key:t.key,idx:e}}function nh(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:n,key:e&&e.key||i||ME()}}function Vo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function bE(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function d(){o="POP";let m=u(),f=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:f})}function h(m,f){o="PUSH";let g=nh(_.location,m,f);c=u()+1;let y=Zg(g,c),M=_.createHref(g);try{s.pushState(y,"",M)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(M)}r&&l&&l({action:o,location:_.location,delta:1})}function p(m,f){o="REPLACE";let g=nh(_.location,m,f);c=u();let y=Zg(g,c),M=_.createHref(g);s.replaceState(y,"",M),r&&l&&l({action:o,location:_.location,delta:0})}function x(m){return EE(m)}let _={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Yg,d),l=m,()=>{a.removeEventListener(Yg,d),l=null}},createHref(m){return e(a,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return s.go(m)}};return _}function EE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Vo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function ly(t,e,n="/"){return TE(t,e,n,!1)}function TE(t,e,n,i){let a=typeof e=="string"?Ps(e):e,r=Ki(a.pathname||"/",n);if(r==null)return null;let s=cy(t);AE(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=zE(r);o=PE(s[l],c,i)}return o}function cy(t,e=[],n=[],i=""){let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(Dt(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=ji([i,l.relativePath]),u=n.concat(l);r.children&&r.children.length>0&&(Dt(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),cy(r.children,e,u,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:LE(c,r.index),routesMeta:u})};return t.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of uy(r.path))a(r,s,l)}),e}function uy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=uy(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function AE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var wE=/^:[\w-]+$/,RE=3,CE=2,NE=1,DE=10,UE=-2,Kg=t=>t==="*";function LE(t,e){let n=t.split("/"),i=n.length;return n.some(Kg)&&(i+=UE),e&&(i+=CE),n.filter(a=>!Kg(a)).reduce((a,r)=>a+(wE.test(r)?RE:r===""?NE:DE),i)}function OE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function PE(t,e,n=!1){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=r==="/"?e:e.slice(r.length)||"/",d=ou({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=ou({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(a,d.params),s.push({params:a,pathname:ji([r,d.pathname]),pathnameBase:GE(ji([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=ji([r,d.pathnameBase]))}return s}function ou(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=FE(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let x=o[h]||"";s=r.slice(0,r.length-x.length).replace(/(.)\/+$/,"$1")}const p=o[h];return d&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:t}}function FE(t,e=!1,n=!0){xi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function zE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ki(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function BE(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:IE(n,e):e,search:VE(i),hash:kE(a)}}function IE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function bf(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function HE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fy(t){let e=HE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function dy(t,e,n,i=!1){let a;typeof t=="string"?a=Ps(t):(a={...t},Dt(!a.pathname||!a.pathname.includes("?"),bf("?","pathname","search",a)),Dt(!a.pathname||!a.pathname.includes("#"),bf("#","pathname","hash",a)),Dt(!a.search||!a.search.includes("#"),bf("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}o=d>=0?e[d]:"/"}let l=BE(a,o),c=s&&s!=="/"&&s.endsWith("/"),u=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var ji=t=>t.join("/").replace(/\/\/+/g,"/"),GE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var hy=["POST","PUT","PATCH","DELETE"];new Set(hy);var XE=["GET",...hy];new Set(XE);var Fs=P.createContext(null);Fs.displayName="DataRouter";var Uu=P.createContext(null);Uu.displayName="DataRouterState";P.createContext(!1);var py=P.createContext({isTransitioning:!1});py.displayName="ViewTransition";var WE=P.createContext(new Map);WE.displayName="Fetchers";var qE=P.createContext(null);qE.displayName="Await";var bi=P.createContext(null);bi.displayName="Navigation";var ul=P.createContext(null);ul.displayName="Location";var ea=P.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Yp=P.createContext(null);Yp.displayName="RouteError";function YE(t,{relative:e}={}){Dt(fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=P.useContext(bi),{hash:a,pathname:r,search:s}=dl(t,{relative:e}),o=r;return n!=="/"&&(o=r==="/"?n:ji([n,r])),i.createHref({pathname:o,search:s,hash:a})}function fl(){return P.useContext(ul)!=null}function _r(){return Dt(fl(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(ul).location}var my="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gy(t){P.useContext(bi).static||P.useLayoutEffect(t)}function ZE(){let{isDataRoute:t}=P.useContext(ea);return t?l1():KE()}function KE(){Dt(fl(),"useNavigate() may be used only in the context of a <Router> component.");let t=P.useContext(Fs),{basename:e,navigator:n}=P.useContext(bi),{matches:i}=P.useContext(ea),{pathname:a}=_r(),r=JSON.stringify(fy(i)),s=P.useRef(!1);return gy(()=>{s.current=!0}),P.useCallback((l,c={})=>{if(xi(s.current,my),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=dy(l,JSON.parse(r),a,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ji([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,r,a,t])}P.createContext(null);function dl(t,{relative:e}={}){let{matches:n}=P.useContext(ea),{pathname:i}=_r(),a=JSON.stringify(fy(n));return P.useMemo(()=>dy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function $E(t,e){return vy(t,e)}function vy(t,e,n,i){var f;Dt(fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=P.useContext(bi),{matches:r}=P.useContext(ea),s=r[r.length-1],o=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";xy(l,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=_r(),h;if(e){let g=typeof e=="string"?Ps(e):e;Dt(c==="/"||((f=g.pathname)==null?void 0:f.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),h=g}else h=d;let p=h.pathname||"/",x=p;if(c!=="/"){let g=c.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let _=ly(t,{pathname:x});xi(u||_!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),xi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=n1(_&&_.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:ji([c,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:ji([c,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,n,i);return e&&m?P.createElement(ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},m):m}function QE(){let t=o1(),e=jE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:r},"ErrorBoundary")," or"," ",P.createElement("code",{style:r},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:a},n):null,s)}var JE=P.createElement(QE,null),e1=class extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?P.createElement(ea.Provider,{value:this.props.routeContext},P.createElement(Yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function t1({routeContext:t,match:e,children:n}){let i=P.useContext(Fs);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(ea.Provider,{value:t},n)}function n1(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,r=n==null?void 0:n.errors;if(r!=null){let l=a.findIndex(c=>c.route.id&&(r==null?void 0:r[c.route.id])!==void 0);Dt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let s=!1,o=-1;if(n)for(let l=0;l<a.length;l++){let c=a[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:u,errors:d}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){s=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((l,c,u)=>{let d,h=!1,p=null,x=null;n&&(d=r&&c.route.id?r[c.route.id]:void 0,p=c.route.errorElement||JE,s&&(o<0&&u===0?(xy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):o===u&&(h=!0,x=c.route.hydrateFallbackElement||null)));let _=e.concat(a.slice(0,u+1)),m=()=>{let f;return d?f=p:h?f=x:c.route.Component?f=P.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=l,P.createElement(t1,{match:c,routeContext:{outlet:l,matches:_,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?P.createElement(e1,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:m(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):m()},null)}function Zp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i1(t){let e=P.useContext(Fs);return Dt(e,Zp(t)),e}function a1(t){let e=P.useContext(Uu);return Dt(e,Zp(t)),e}function r1(t){let e=P.useContext(ea);return Dt(e,Zp(t)),e}function Kp(t){let e=r1(t),n=e.matches[e.matches.length-1];return Dt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function s1(){return Kp("useRouteId")}function o1(){var i;let t=P.useContext(Yp),e=a1("useRouteError"),n=Kp("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function l1(){let{router:t}=i1("useNavigate"),e=Kp("useNavigate"),n=P.useRef(!1);return gy(()=>{n.current=!0}),P.useCallback(async(a,r={})=>{xi(n.current,my),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...r}))},[t,e])}var $g={};function xy(t,e,n){!e&&!$g[t]&&($g[t]=!0,xi(!1,n))}P.memo(c1);function c1({routes:t,future:e,state:n}){return vy(t,void 0,n,e)}function ih(t){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function u1({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:r=!1}){Dt(!fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),o=P.useMemo(()=>({basename:s,navigator:a,static:r,future:{}}),[s,a,r]);typeof n=="string"&&(n=Ps(n));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=n,p=P.useMemo(()=>{let x=Ki(l,s);return x==null?null:{location:{pathname:x,search:c,hash:u,state:d,key:h},navigationType:i}},[s,l,c,u,d,h,i]);return xi(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:P.createElement(bi.Provider,{value:o},P.createElement(ul.Provider,{children:e,value:p}))}function f1({children:t,location:e}){return $E(ah(t),e)}function ah(t,e=[]){let n=[];return P.Children.forEach(t,(i,a)=>{if(!P.isValidElement(i))return;let r=[...e,a];if(i.type===P.Fragment){n.push.apply(n,ah(i.props.children,r));return}Dt(i.type===ih,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=ah(i.props.children,r)),n.push(s)}),n}var Mc="get",bc="application/x-www-form-urlencoded";function Lu(t){return t!=null&&typeof t.tagName=="string"}function d1(t){return Lu(t)&&t.tagName.toLowerCase()==="button"}function h1(t){return Lu(t)&&t.tagName.toLowerCase()==="form"}function p1(t){return Lu(t)&&t.tagName.toLowerCase()==="input"}function m1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function g1(t,e){return t.button===0&&(!e||e==="_self")&&!m1(t)}var Pl=null;function v1(){if(Pl===null)try{new FormData(document.createElement("form"),0),Pl=!1}catch{Pl=!0}return Pl}var x1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ef(t){return t!=null&&!x1.has(t)?(xi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):t}function _1(t,e){let n,i,a,r,s;if(h1(t)){let o=t.getAttribute("action");i=o?Ki(o,e):null,n=t.getAttribute("method")||Mc,a=Ef(t.getAttribute("enctype"))||bc,r=new FormData(t)}else if(d1(t)||p1(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Ki(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Mc,a=Ef(t.getAttribute("formenctype"))||Ef(o.getAttribute("enctype"))||bc,r=new FormData(o,t),!v1()){let{name:c,type:u,value:d}=t;if(u==="image"){let h=c?`${c}.`:"";r.append(`${h}x`,"0"),r.append(`${h}y`,"0")}else c&&r.append(c,d)}}else{if(Lu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mc,i=null,a=bc,s=t}return r&&a==="text/plain"&&(s=r,r=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:r,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $p(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function y1(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Ki(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function S1(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function b1(t,e,n){let i=await Promise.all(t.map(async a=>{let r=e.routes[a.route.id];if(r){let s=await S1(r,n);return s.links?s.links():[]}return[]}));return w1(i.flat(1).filter(M1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Qg(t,e,n,i,a,r){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return r==="assets"?e.filter((l,c)=>s(l,c)||o(l,c)):r==="data"?e.filter((l,c)=>{var d;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function E1(t,e,{includeHydrateFallback:n}={}){return T1(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function T1(t){return[...new Set(t)]}function A1(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function w1(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let r=JSON.stringify(A1(a));return n.has(r)||(n.add(r),i.push({key:r,link:a})),i},[])}function _y(){let t=P.useContext(Fs);return $p(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function R1(){let t=P.useContext(Uu);return $p(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Qp=P.createContext(void 0);Qp.displayName="FrameworkContext";function yy(){let t=P.useContext(Qp);return $p(t,"You must render this element inside a <HydratedRouter> element"),t}function C1(t,e){let n=P.useContext(Qp),[i,a]=P.useState(!1),[r,s]=P.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=e,h=P.useRef(null);P.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let _=f=>{f.forEach(g=>{s(g.isIntersecting)})},m=new IntersectionObserver(_,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),P.useEffect(()=>{if(i){let _=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(_)}}},[i]);let p=()=>{a(!0)},x=()=>{a(!1),s(!1)};return n?t!=="intent"?[r,h,{}]:[r,h,{onFocus:Zs(o,p),onBlur:Zs(l,x),onMouseEnter:Zs(c,p),onMouseLeave:Zs(u,x),onTouchStart:Zs(d,p)}]:[!1,h,{}]}function Zs(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function N1({page:t,...e}){let{router:n}=_y(),i=P.useMemo(()=>ly(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?P.createElement(U1,{page:t,matches:i,...e}):null}function D1(t){let{manifest:e,routeModules:n}=yy(),[i,a]=P.useState([]);return P.useEffect(()=>{let r=!1;return b1(t,e,n).then(s=>{r||a(s)}),()=>{r=!0}},[t,e,n]),i}function U1({page:t,matches:e,...n}){let i=_r(),{manifest:a,routeModules:r}=yy(),{basename:s}=_y(),{loaderData:o,matches:l}=R1(),c=P.useMemo(()=>Qg(t,e,l,a,i,"data"),[t,e,l,a,i]),u=P.useMemo(()=>Qg(t,e,l,a,i,"assets"),[t,e,l,a,i]),d=P.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,_=!1;if(e.forEach(f=>{var y;let g=a.routes[f.route.id];!g||!g.hasLoader||(!c.some(M=>M.route.id===f.route.id)&&f.route.id in o&&((y=r[f.route.id])!=null&&y.shouldRevalidate)||g.hasClientLoader?_=!0:x.add(f.route.id))}),x.size===0)return[];let m=y1(t,s,"data");return _&&x.size>0&&m.searchParams.set("_routes",e.filter(f=>x.has(f.route.id)).map(f=>f.route.id).join(",")),[m.pathname+m.search]},[s,o,i,a,c,e,t,r]),h=P.useMemo(()=>E1(u,a),[u,a]),p=D1(u);return P.createElement(P.Fragment,null,d.map(x=>P.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),h.map(x=>P.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),p.map(({key:x,link:_})=>P.createElement("link",{key:x,..._})))}function L1(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sy&&(window.__reactRouterVersion="7.7.0")}catch{}function O1({basename:t,children:e,window:n}){let i=P.useRef();i.current==null&&(i.current=SE({window:n,v5Compat:!0}));let a=i.current,[r,s]=P.useState({action:a.action,location:a.location}),o=P.useCallback(l=>{P.startTransition(()=>s(l))},[s]);return P.useLayoutEffect(()=>a.listen(o),[a,o]),P.createElement(u1,{basename:t,children:e,location:r.location,navigationType:r.action,navigator:a})}var My=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ou=P.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:r,replace:s,state:o,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},p){let{basename:x}=P.useContext(bi),_=typeof c=="string"&&My.test(c),m,f=!1;if(typeof c=="string"&&_&&(m=c,Sy))try{let T=new URL(window.location.href),S=c.startsWith("//")?new URL(T.protocol+c):new URL(c),C=Ki(S.pathname,x);S.origin===T.origin&&C!=null?c=C+S.search+S.hash:f=!0}catch{xi(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=YE(c,{relative:a}),[y,M,R]=C1(i,h),w=B1(c,{replace:s,state:o,target:l,preventScrollReset:u,relative:a,viewTransition:d});function A(T){e&&e(T),T.defaultPrevented||w(T)}let D=P.createElement("a",{...h,...R,href:m||g,onClick:f||r?e:A,ref:L1(p,M),target:l,"data-discover":!_&&n==="render"?"true":void 0});return y&&!_?P.createElement(P.Fragment,null,D,P.createElement(N1,{page:g})):D});Ou.displayName="Link";var P1=P.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:r,to:s,viewTransition:o,children:l,...c},u){let d=dl(s,{relative:c.relative}),h=_r(),p=P.useContext(Uu),{navigator:x,basename:_}=P.useContext(bi),m=p!=null&&k1(d)&&o===!0,f=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,g=h.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),y=y?y.toLowerCase():null,f=f.toLowerCase()),y&&_&&(y=Ki(y,_)||y);const M=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let R=g===f||!a&&g.startsWith(f)&&g.charAt(M)==="/",w=y!=null&&(y===f||!a&&y.startsWith(f)&&y.charAt(f.length)==="/"),A={isActive:R,isPending:w,isTransitioning:m},D=R?e:void 0,T;typeof i=="function"?T=i(A):T=[i,R?"active":null,w?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let S=typeof r=="function"?r(A):r;return P.createElement(Ou,{...c,"aria-current":D,className:T,ref:u,style:S,to:s,viewTransition:o},typeof l=="function"?l(A):l)});P1.displayName="NavLink";var F1=P.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:r,method:s=Mc,action:o,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},p)=>{let x=G1(),_=V1(o,{relative:c}),m=s.toLowerCase()==="get"?"get":"post",f=typeof o=="string"&&My.test(o),g=y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let M=y.nativeEvent.submitter,R=(M==null?void 0:M.getAttribute("formmethod"))||s;x(M||y.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:a,state:r,relative:c,preventScrollReset:u,viewTransition:d})};return P.createElement("form",{ref:p,method:m,action:_,onSubmit:i?l:g,...h,"data-discover":!f&&t==="render"?"true":void 0})});F1.displayName="Form";function z1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function by(t){let e=P.useContext(Fs);return Dt(e,z1(t)),e}function B1(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:r,viewTransition:s}={}){let o=ZE(),l=_r(),c=dl(t,{relative:r});return P.useCallback(u=>{if(g1(u,e)){u.preventDefault();let d=n!==void 0?n:Vo(l)===Vo(c);o(t,{replace:d,state:i,preventScrollReset:a,relative:r,viewTransition:s})}},[l,o,c,n,i,e,t,a,r,s])}var I1=0,H1=()=>`__${String(++I1)}__`;function G1(){let{router:t}=by("useSubmit"),{basename:e}=P.useContext(bi),n=s1();return P.useCallback(async(i,a={})=>{let{action:r,method:s,encType:o,formData:l,body:c}=_1(i,e);if(a.navigate===!1){let u=a.fetcherKey||H1();await t.fetch(u,n,a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,flushSync:a.flushSync})}else await t.navigate(a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function V1(t,{relative:e}={}){let{basename:n}=P.useContext(bi),i=P.useContext(ea);Dt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),r={...dl(t||".",{relative:e})},s=_r();if(t==null){r.search=s.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(u=>u==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let u=o.toString();r.search=u?`?${u}`:""}}return(!t||t===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:ji([n,r.pathname])),Vo(r)}function k1(t,e={}){let n=P.useContext(py);Dt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=by("useViewTransitionState"),a=dl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let r=Ki(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=Ki(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ou(a.pathname,s)!=null||ou(a.pathname,r)!=null}/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),X1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Jg=t=>{const e=X1(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ey=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),W1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=P.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>P.createElement("svg",{ref:l,...q1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ey("lucide",a),...!r&&!W1(o)&&{"aria-hidden":"true"},...o},[...s.map(([c,u])=>P.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=P.forwardRef(({className:i,...a},r)=>P.createElement(Y1,{ref:r,iconNode:e,className:Ey(`lucide-${j1(Jg(t))}`,`lucide-${t}`,i),...a}));return n.displayName=Jg(t),n};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],e0=st("archive",Z1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$1=st("arrow-right",K1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],rh=st("box",Q1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],eT=st("building-2",J1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],nT=st("camera",tT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gn=st("check",iT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],rT=st("circle-alert",aT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jp=st("circle-check-big",sT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],lT=st("clock",oT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],uT=st("cpu",cT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ty=st("download",fT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hT=st("eye",dT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ay=st("folder",pT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],gT=st("image",mT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xT=st("loader-circle",vT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],wy=st("maximize-2",_T);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],ST=st("menu",yT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],bT=st("minimize-2",MT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M5 12h14",key:"1ays0h"}]],TT=st("minus",ET);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],wT=st("move",AT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],CT=st("play",RT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],sh=st("refresh-cw",NT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],UT=st("search",DT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],OT=st("shield",LT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Pu=st("sparkles",PT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],zT=st("star",FT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ec=st("trash-2",BT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ry=st("upload",IT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],GT=st("users",HT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],em=st("x",VT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Cy=st("zap",kT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],XT=st("zoom-in",jT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],qT=st("zoom-out",WT);function YT(){const[t,e]=P.useState(!1);return v.jsxs("header",{className:"bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50",children:[v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"flex justify-between items-center h-16",children:[v.jsx("div",{className:"flex items-center space-x-3",children:v.jsxs(Ou,{to:"/",className:"flex items-center space-x-3 group",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105",children:v.jsx(Pu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors",children:"Snap 3D"})]})}),v.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[v.jsx("button",{className:"text-gray-700 hover:text-blue-600 transition-colors font-medium",children:"Sign In"}),v.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Get Started"})]}),v.jsx("button",{className:"md:hidden text-gray-700",onClick:()=>e(!t),children:t?v.jsx(em,{className:"w-6 h-6"}):v.jsx(ST,{className:"w-6 h-6"})})]})}),t&&v.jsx("div",{className:"md:hidden bg-white border-t border-gray-200 shadow-lg",children:v.jsxs("div",{className:"px-4 py-2 space-y-2",children:[v.jsx("button",{className:"block w-full text-left py-3 text-gray-700 font-medium",children:"Sign In"}),v.jsx("button",{className:"block w-full bg-blue-600 text-white py-3 rounded-lg mt-2 font-medium",children:"Get Started"})]})})]})}function ZT(){return v.jsx("footer",{className:"bg-gray-900 text-white py-12",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg",children:v.jsx(Pu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold",children:"Snap 3D"})]}),v.jsx("p",{className:"text-gray-400",children:"Transform your property images into professional 3D models with enterprise-grade AI technology."})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Product"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"API"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Careers"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Help Center"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Status"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms"})})]})]})]}),v.jsx("div",{className:"border-t border-gray-800 pt-8 mt-8 text-center text-gray-400",children:v.jsx("p",{children:"© 2025 Snap 3D. All rights reserved."})})]})})}function KT(){const[t,e]=P.useState(!1),n=[{icon:v.jsx(nT,{className:"w-8 h-8"}),title:"Professional Image Capture",description:"Guided multi-angle photography system for consistent, high-quality 3D reconstruction results",color:"from-blue-600 to-blue-700"},{icon:v.jsx(Ry,{className:"w-8 h-8"}),title:"Batch Processing",description:"Upload and process multiple property images simultaneously for efficient workflow management",color:"from-slate-600 to-slate-700"},{icon:v.jsx(Cy,{className:"w-8 h-8"}),title:"Enterprise AI Engine",description:"Advanced photogrammetry algorithms deliver precise 3D models with architectural accuracy",color:"from-blue-600 to-blue-700"},{icon:v.jsx(Ty,{className:"w-8 h-8"}),title:"Industry-Standard Exports",description:"Export to OBJ, STL, PLY, and GLTF formats compatible with all major 3D software platforms",color:"from-slate-600 to-slate-700"}],i=[{name:"Michael Richardson",role:"CTO, PropertyTech Solutions",content:"Snap 3D has streamlined our property documentation process. The accuracy and speed of 3D model generation has improved our client deliverables significantly.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"},{name:"Sarah Chen",role:"Principal Architect, Design Corp",content:"The precision of the 3D models meets our professional standards. Integration with our existing CAD workflow has been seamless.",rating:5,avatar:"bg-gradient-to-br from-slate-500 to-slate-600"},{name:"David Martinez",role:"Director of Operations, BuildTech",content:"ROI was immediate. What used to take our team hours now takes minutes. The quality consistency across projects is exceptional.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"}],a=[{number:"10,000+",label:"Properties Processed",icon:v.jsx(eT,{className:"w-6 h-6"})},{number:"500+",label:"Enterprise Clients",icon:v.jsx(GT,{className:"w-6 h-6"})},{number:"5 Min",label:"Average Processing Time",icon:v.jsx(lT,{className:"w-6 h-6"})},{number:"99.9%",label:"Uptime Guarantee",icon:v.jsx(OT,{className:"w-6 h-6"})}];return v.jsxs("div",{className:"min-h-screen bg-white",children:[v.jsx("section",{className:"bg-gradient-to-b from-gray-50 to-white py-20",children:v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"text-center",children:[v.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["Transform Property Images",v.jsx("span",{className:"block text-blue-600",children:"into Professional 3D Models"})]}),v.jsx("p",{className:"text-xl text-gray-600 mb-10 max-w-3xl mx-auto",children:"Enterprise-grade AI-powered photogrammetry solution for real estate professionals, architects, and construction companies. Generate accurate 3D models in minutes."}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[v.jsxs(Ou,{to:"/generate",className:"inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300",children:[v.jsx(CT,{className:"w-5 h-5"}),v.jsx("span",{children:"TRY IT NOW"})]}),v.jsxs("button",{className:"border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2",children:[v.jsx("span",{children:"Schedule Demo"}),v.jsx($1,{className:"w-5 h-5"})]})]}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",children:a.map((r,s)=>v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"flex items-center justify-center mb-2",children:v.jsx("div",{className:"bg-blue-100 p-2 rounded-lg text-blue-600 mr-2",children:r.icon})}),v.jsx("div",{className:"text-3xl font-bold text-gray-900",children:r.number}),v.jsx("div",{className:"text-gray-600",children:r.label})]},s))})]})})}),v.jsx("section",{id:"features",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Enterprise-Grade Features"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Built for professional workflows and enterprise requirements"})]}),v.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((r,s)=>v.jsxs("div",{className:"text-center group hover:transform hover:scale-105 transition-all duration-300",children:[v.jsx("div",{className:`bg-gradient-to-r ${r.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`,children:r.icon}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:r.title}),v.jsx("p",{className:"text-gray-600",children:r.description})]},s))})]})}),v.jsx("section",{id:"how-it-works",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Streamlined Workflow"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Professional 3D model generation in three simple steps"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"1"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Capture & Upload"}),v.jsx("p",{className:"text-gray-600",children:"Use our guided capture system or upload existing property images following our optimization guidelines"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"2"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"AI Processing"}),v.jsx("p",{className:"text-gray-600",children:"Advanced photogrammetry algorithms analyze images and reconstruct detailed 3D geometry with texture mapping"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"3"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Export & Integrate"}),v.jsx("p",{className:"text-gray-600",children:"Download industry-standard formats or integrate directly with your existing CAD and visualization workflows"})]})]})]})}),v.jsx("section",{id:"testimonials",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Trusted by Industry Leaders"}),v.jsx("p",{className:"text-xl text-gray-600",children:"See how professionals are transforming their workflows"})]}),v.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:i.map((r,s)=>v.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("div",{className:"flex mb-4",children:[...Array(r.rating)].map((o,l)=>v.jsx(zT,{className:"w-5 h-5 text-yellow-400 fill-current"},l))}),v.jsxs("p",{className:"text-gray-600 mb-4",children:['"',r.content,'"']}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-10 h-10 rounded-full ${r.avatar} flex items-center justify-center text-white font-bold`,children:r.name[0]}),v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-gray-900",children:r.name}),v.jsx("p",{className:"text-blue-600 text-sm",children:r.role})]})]})]},s))})]})}),v.jsx("section",{id:"pricing",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Flexible Pricing Plans"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Choose the plan that scales with your business needs"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Professional"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$49",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"25 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Standard export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Email support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Basic analytics"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border-2 border-blue-600 relative transform scale-105 shadow-lg",children:[v.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"}),v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Business"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$149",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"100 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"All export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Priority support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Advanced analytics"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"API access"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Enterprise"}),v.jsx("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:"Custom"}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Unlimited models"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Custom integrations"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"24/7 dedicated support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"SLA guarantees"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"On-premise deployment"})]})]}),v.jsx("button",{className:"w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium",children:"Contact Sales"})]})]})]})})]})}const t0=({type:t,message:e,onClose:n})=>{const i=()=>{switch(t){case"error":return"bg-red-50 border-red-200 text-red-700";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-700";case"info":return"bg-blue-50 border-blue-200 text-blue-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},a=()=>{switch(t){case"error":return"text-red-500";case"warning":return"text-yellow-500";case"info":return"text-blue-500";default:return"text-gray-500"}};return v.jsxs("div",{className:`mb-6 border rounded-lg p-4 flex items-center space-x-3 ${i()}`,children:[v.jsx(rT,{className:`w-5 h-5 flex-shrink-0 ${a()}`}),v.jsx("p",{className:"flex-1",children:e}),n&&v.jsx("button",{onClick:n,className:`ml-auto transition-colors ${t==="error"?"text-red-500 hover:text-red-700":t==="warning"?"text-yellow-500 hover:text-yellow-700":"text-blue-500 hover:text-blue-700"}`,children:v.jsx(em,{className:"w-5 h-5"})})]})};function $T({selectedImages:t,setSelectedImages:e,selectedObjFiles:n,setSelectedObjFiles:i,uploadType:a,setUploadType:r,error:s,setError:o,onNext:l}){const c=HS.useRef(null),u=x=>{const _=Array.from(x.target.files);if(a==="images"){const f=_.filter(g=>g.type.startsWith("image/")).map(g=>({file:g,url:URL.createObjectURL(g),name:g.name,size:g.size}));e(g=>[...g,...f]),o(null)}else{const m=_.filter(y=>y.name.toLowerCase().endsWith(".obj")),f=_.filter(y=>y.name.toLowerCase().endsWith(".mtl"));if(m.length!==1){o("Please select exactly one .obj file.");return}if(f.length>1){o("Only one .mtl file is allowed.");return}if(_.filter(y=>!y.name.toLowerCase().endsWith(".obj")&&!y.name.toLowerCase().endsWith(".mtl")).length>0){o("Only .obj and .mtl files are allowed for import.");return}i(y=>{const M={...y};return M.obj={file:m[0],name:m[0].name,size:m[0].size},f.length===1?M.mtl={file:f[0],name:f[0].name,size:f[0].size}:delete M.mtl,M}),o(null)}},d=x=>{a==="images"?e(_=>_.filter((m,f)=>f!==x)):i(_=>{const m={..._};return delete m[x],m})},h=a==="images"&&t.length>=2||a==="import"&&n.obj,p=x=>{if(x===0)return"0 Bytes";const _=1024,m=["Bytes","KB","MB","GB"],f=Math.floor(Math.log(x)/Math.log(_));return parseFloat((x/Math.pow(_,f)).toFixed(2))+" "+m[f]};return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Create New 3D Model"}),v.jsx("p",{className:"text-gray-600",children:"Upload images or import existing 3D models to get started"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600",children:"Step 1 of 2"})]})})]})}),v.jsxs("div",{className:"p-8",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Choose Input Type"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[v.jsx("button",{onClick:()=>r("images"),className:`p-6 rounded-xl border-2 ${a==="images"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="images"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(gT,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"From Images"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Generate 3D model from photos"})]})]})}),v.jsx("button",{onClick:()=>r("import"),className:`p-6 rounded-xl border-2 ${a==="import"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="import"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(rh,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"Import OBJ & MTL"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Use existing 3D model files (.obj required, .mtl optional)"})]})]})})]})]}),v.jsx("label",{onClick:()=>{var x;return(x=c.current)==null?void 0:x.click()},className:"block mb-8 cursor-pointer",children:v.jsxs("div",{className:"border-2 border-dashed border-gray-300 p-12 rounded-2xl text-center hover:border-blue-500 hover:bg-blue-50",children:[v.jsx(Ry,{className:"w-8 h-8 text-blue-600 mx-auto mb-4"}),v.jsx("p",{className:"text-lg font-semibold",children:a==="images"?"Upload Images":"Upload OBJ & Optional MTL File"}),v.jsx("p",{className:"text-gray-600",children:a==="images"?"Minimum 2 images required":".obj required, .mtl optional"})]})}),v.jsx("input",{ref:c,type:"file",multiple:!0,accept:a==="images"?"image/*":".obj,.mtl",onChange:u,className:"hidden"}),s&&v.jsx("div",{className:"mb-4 p-4 bg-red-50 text-red-600 rounded-lg",children:s}),a==="images"&&t.length>0&&v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",children:t.map((x,_)=>v.jsxs("div",{className:"relative group",children:[v.jsx("img",{src:x.url,className:"rounded-lg object-cover aspect-square"}),v.jsx("button",{onClick:()=>d(_),className:"absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white",children:v.jsx(Ec,{className:"w-4 h-4"})}),v.jsx("div",{className:"text-sm mt-1 text-gray-700 truncate",children:x.name})]},_))}),a==="import"&&(n.obj||n.mtl)&&v.jsxs("div",{className:"space-y-3 mb-8",children:[n.obj&&v.jsxs("div",{className:"flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg",children:[v.jsxs("span",{className:"text-sm",children:[n.obj.name," (",p(n.obj.size),")"]}),v.jsx("button",{onClick:()=>d("obj"),className:"text-red-600",children:v.jsx(Ec,{className:"w-4 h-4"})})]}),n.mtl&&v.jsxs("div",{className:"flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg",children:[v.jsxs("span",{className:"text-sm",children:[n.mtl.name," (",p(n.mtl.size),")"]}),v.jsx("button",{onClick:()=>d("mtl"),className:"text-red-600",children:v.jsx(Ec,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"border-t pt-6 mt-4 flex justify-between items-center",children:[v.jsx("div",{className:"text-sm text-gray-500",children:h?v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(Jp,{className:"w-4 h-4"}),"Ready to continue"]}):a==="images"?`${t.length}/2 images required`:`${n.obj?1:0}/1 .obj file required${n.mtl?", .mtl attached":", .mtl optional"}`}),v.jsx("button",{onClick:l,disabled:!h,className:`px-6 py-3 rounded-lg font-medium transition ${h?"bg-blue-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Continue to Generate"})]})]})]})})}function QT({uploadType:t,selectedImages:e,selectedObjFiles:n,modelName:i,setModelName:a,processor:r,setProcessor:s,isProcessing:o,processingStep:l,processingSteps:c,handleGenerate:u,backendUp:d}){const[h,p]=P.useState(!1);P.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const x=m=>{const f=m.target.value;a(f),p(!f.trim())},_=()=>{p(!i.trim())};return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsxs("div",{className:"border-b px-8 py-6 border-gray-200",children:[v.jsx("h1",{className:"text-3xl font-bold mb-2 text-gray-900",children:"Generate 3D Model"}),v.jsx("p",{className:"text-gray-600",children:t==="images"?`${e.length} images selected`:`${Object.keys(n).length} OBJ file(s) selected`})]}),v.jsxs("div",{className:"p-8 space-y-6",children:[v.jsxs("div",{children:[v.jsxs("label",{className:"block mb-2 font-semibold",children:["Model Name ",v.jsx("span",{className:"text-red-500",children:"*"})]}),v.jsx("input",{value:i,onChange:x,onBlur:_,placeholder:"Enter model name...",className:`w-full px-4 py-3 border rounded-lg ${h?"border-red-500":"border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}),h&&v.jsx("p",{className:"text-red-500 text-sm mt-1",children:"Model name is required"})]}),t==="images"&&v.jsxs("div",{children:[v.jsx("label",{className:"block mb-2 font-semibold",children:"Select Processor"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["meshroom","open3d"].map(m=>v.jsx("button",{onClick:()=>s(m),className:`p-4 border-2 rounded-xl ${r===m?"border-purple-500 bg-purple-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:`p-2 rounded-lg ${r===m?"bg-purple-500 text-white":"bg-gray-100 text-gray-600"}`,children:m==="meshroom"?v.jsx(uT,{className:"w-5 h-5"}):v.jsx(Cy,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold capitalize",children:m}),v.jsx("div",{className:"text-xs text-gray-500",children:m==="meshroom"?"Photogrammetry based":"Point cloud based"})]})]})},m))})]}),o?v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"text-gray-800 font-semibold",children:"Processing..."}),v.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 overflow-hidden",children:v.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300",style:{width:`${(l+1)/c.length*100}%`}})}),v.jsxs("div",{className:"text-sm text-gray-500 flex items-center gap-2",children:[v.jsx(xT,{className:"w-4 h-4 animate-spin"}),c[l]]})]}):v.jsxs("div",{className:"flex justify-between items-center pt-4 border-t",children:[v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(Jp,{className:"w-5 h-5"}),"Ready to ",t==="images"?"Generate":"Import"]}),v.jsx("button",{onClick:u,disabled:!d||o||!i.trim()||h,className:`px-6 py-3 rounded-lg font-medium shadow transition ${!d||o||!i.trim()||h?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-purple-600 text-white hover:bg-purple-700"}`,children:t==="images"?"Generate Model":"Import Model"})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="178",JT=0,n0=1,eA=2,Ny=1,nm=2,Li=3,$i=0,Mn=1,ii=2,Ca=0,cs=1,i0=2,a0=3,r0=4,tA=5,Qa=100,nA=101,iA=102,aA=103,rA=104,sA=200,oA=201,lA=202,cA=203,oh=204,lh=205,uA=206,fA=207,dA=208,hA=209,pA=210,mA=211,gA=212,vA=213,xA=214,ch=0,uh=1,fh=2,bs=3,dh=4,hh=5,ph=6,mh=7,im=0,_A=1,yA=2,Na=0,SA=1,MA=2,bA=3,Dy=4,EA=5,TA=6,AA=7,Uy=300,Es=301,Ts=302,gh=303,vh=304,Fu=306,lu=1e3,er=1001,xh=1002,li=1003,wA=1004,Fl=1005,pi=1006,Tf=1007,tr=1008,_i=1009,Ly=1010,Oy=1011,ko=1012,am=1013,hr=1014,Hi=1015,hl=1016,rm=1017,sm=1018,jo=1020,Py=35902,Fy=1021,zy=1022,ri=1023,Xo=1026,Wo=1027,By=1028,om=1029,Iy=1030,lm=1031,cm=1033,Tc=33776,Ac=33777,wc=33778,Rc=33779,_h=35840,yh=35841,Sh=35842,Mh=35843,bh=36196,Eh=37492,Th=37496,Ah=37808,wh=37809,Rh=37810,Ch=37811,Nh=37812,Dh=37813,Uh=37814,Lh=37815,Oh=37816,Ph=37817,Fh=37818,zh=37819,Bh=37820,Ih=37821,Cc=36492,Hh=36494,Gh=36495,Hy=36283,Vh=36284,kh=36285,jh=36286,RA=3200,CA=3201,Gy=0,NA=1,ga="",en="srgb",As="srgb-linear",cu="linear",pt="srgb",br=7680,s0=519,DA=512,UA=513,LA=514,Vy=515,OA=516,PA=517,FA=518,zA=519,o0=35044,l0="300 es",Gi=2e3,uu=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Af=Math.PI/180,Xh=180/Math.PI;function pl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function BA(t,e){return(t%e+e)%e}function wf(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3];const h=r[s+0],p=r[s+1],x=r[s+2],_=r[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(d!==_||l!==h||c!==p||u!==x){let m=1-o;const f=l*h+c*p+u*x+d*_,g=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,f*g);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const M=o*g;if(l=l*m+h*M,c=c*m+p*M,u=u*m+x*M,d=d*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=r[s],h=r[s+1],p=r[s+2],x=r[s+3];return e[n]=o*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-o*p,e[n+2]=c*x+u*p+o*h-l*d,e[n+3]=u*x-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(r/2),h=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*u,this.y=i+l*u+o*c-r*d,this.z=a+l*d+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rf.copy(this).projectOnVector(e),this.sub(Rf)}reflect(e){return this.sub(Rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rf=new F,c0=new ml;class We{constructor(e,n,i,a,r,s,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=a[0],m=a[3],f=a[6],g=a[1],y=a[4],M=a[7],R=a[2],w=a[5],A=a[8];return r[0]=s*_+o*g+l*R,r[3]=s*m+o*y+l*w,r[6]=s*f+o*M+l*A,r[1]=c*_+u*g+d*R,r[4]=c*m+u*y+d*w,r[7]=c*f+u*M+d*A,r[2]=h*_+p*g+x*R,r[5]=h*m+p*y+x*w,r[8]=h*f+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*r,p=c*r-s*l,x=n*d+i*h+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(a*c-u*i)*_,e[2]=(o*i-a*s)*_,e[3]=h*_,e[4]=(u*n-a*l)*_,e[5]=(a*r-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Cf.makeScale(e,n)),this}rotate(e){return this.premultiply(Cf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new We;function ky(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IA(){const t=qo("canvas");return t.style.display="block",t}const u0={};function us(t){t in u0||(u0[t]=!0,console.warn(t))}function HA(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function GA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const f0=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d0=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kA(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===pt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(a.r=fs(a.r),a.g=fs(a.g),a.b=fs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ga?cu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:cu,toXYZ:f0,fromXYZ:d0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:f0,fromXYZ:d0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),t}const tt=kA();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Er;class jA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=qo("canvas")),Er.width=e.width,Er.height=e.height;const a=Er.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Xi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XA=0;class um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Nf(a[s].image)):r.push(Nf(a[s]))}else r=Nf(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WA=0;const Df=new F;class hn extends zs{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=er,a=er,r=pi,s=tr,o=ri,l=_i,c=hn.DEFAULT_ANISOTROPY,u=ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=pl(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Df).x}get height(){return this.source.getSize(Df).y}get depth(){return this.source.getSize(Df).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lu:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lu:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Uy;hn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(p+1)/2,R=(f+1)/2,w=(u+h)/4,A=(d+_)/4,D=(x+m)/4;return y>M&&y>R?y<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(y),a=w/i,r=A/i):M>R?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=w/a,r=D/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=A/r,a=D/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-_)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qA extends zs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const a={width:e,height:n,depth:i.depth},r=new hn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new um(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends qA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jy extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YA extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Jn):Jn.fromBufferAttribute(r,s),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Bl.subVectors(this.max,$s),Tr.subVectors(e.a,$s),Ar.subVectors(e.b,$s),wr.subVectors(e.c,$s),ia.subVectors(Ar,Tr),aa.subVectors(wr,Ar),Ga.subVectors(Tr,wr);let n=[0,-ia.z,ia.y,0,-aa.z,aa.y,0,-Ga.z,Ga.y,ia.z,0,-ia.x,aa.z,0,-aa.x,Ga.z,0,-Ga.x,-ia.y,ia.x,0,-aa.y,aa.x,0,-Ga.y,Ga.x,0];return!Uf(n,Tr,Ar,wr,Bl)||(n=[1,0,0,0,1,0,0,0,1],!Uf(n,Tr,Ar,wr,Bl))?!1:(Il.crossVectors(ia,aa),n=[Il.x,Il.y,Il.z],Uf(n,Tr,Ar,wr,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new F,new F,new F,new F,new F,new F,new F,new F],Jn=new F,zl=new za,Tr=new F,Ar=new F,wr=new F,ia=new F,aa=new F,Ga=new F,$s=new F,Bl=new F,Il=new F,Va=new F;function Uf(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Va.fromArray(t,r);const o=a.x*Math.abs(Va.x)+a.y*Math.abs(Va.y)+a.z*Math.abs(Va.z),l=e.dot(Va),c=n.dot(Va),u=i.dot(Va);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ZA=new za,Qs=new F,Lf=new F;class gl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZA.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Qs,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Lf)),this.expandByPoint(Qs.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new F,Of=new F,Hl=new F,ra=new F,Pf=new F,Gl=new F,Ff=new F;class fm{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Of.copy(e).add(n).multiplyScalar(.5),Hl.copy(n).sub(e).normalize(),ra.copy(this.origin).sub(Of);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Hl),o=ra.dot(this.direction),l=-ra.dot(Hl),c=ra.lengthSq(),u=Math.abs(1-s*s);let d,h,p,x;if(u>0)if(d=s*l-o,h=s*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){const _=1/u;d*=_,h*=_,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-s*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(s*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=s>0?-r:r,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Of).addScaledVector(Hl,h),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),a=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,a,r){Pf.subVectors(n,e),Gl.subVectors(i,e),Ff.crossVectors(Pf,Gl);let s=this.direction.dot(Ff),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ra.subVectors(this.origin,e);const l=o*this.direction.dot(Gl.crossVectors(ra,Gl));if(l<0)return null;const c=o*this.direction.dot(Pf.cross(ra));if(c<0||l+c>s)return null;const u=-o*ra.dot(Ff);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,a,r,s,o,l,c,u,d,h,p,x,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,u,d,h,p,x,_,m)}set(e,n,i,a,r,s,o,l,c,u,d,h,p,x,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),s=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=s*u,p=s*d,x=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=x+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,_=c*d;n[0]=h+_*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-o,n[2]=p*o-x,n[6]=_+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,_=c*d;n[0]=h-_*o,n[4]=-s*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*u,n[9]=_-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,x=o*u,_=o*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,x=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=x*d+p,n[1]=d,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-_*d}else if(e.order==="XZY"){const h=s*l,p=s*c,x=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=s*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KA,e,$A)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),sa.crossVectors(i,Cn),sa.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),sa.crossVectors(i,Cn)),sa.normalize(),Vl.crossVectors(Cn,sa),a[0]=sa.x,a[4]=Vl.x,a[8]=Cn.x,a[1]=sa.y,a[5]=Vl.y,a[9]=Cn.y,a[2]=sa.z,a[6]=Vl.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],g=i[3],y=i[7],M=i[11],R=i[15],w=a[0],A=a[4],D=a[8],T=a[12],S=a[1],C=a[5],H=a[9],G=a[13],Z=a[2],q=a[6],O=a[10],k=a[14],z=a[3],J=a[7],le=a[11],Se=a[15];return r[0]=s*w+o*S+l*Z+c*z,r[4]=s*A+o*C+l*q+c*J,r[8]=s*D+o*H+l*O+c*le,r[12]=s*T+o*G+l*k+c*Se,r[1]=u*w+d*S+h*Z+p*z,r[5]=u*A+d*C+h*q+p*J,r[9]=u*D+d*H+h*O+p*le,r[13]=u*T+d*G+h*k+p*Se,r[2]=x*w+_*S+m*Z+f*z,r[6]=x*A+_*C+m*q+f*J,r[10]=x*D+_*H+m*O+f*le,r[14]=x*T+_*G+m*k+f*Se,r[3]=g*w+y*S+M*Z+R*z,r[7]=g*A+y*C+M*q+R*J,r[11]=g*D+y*H+M*O+R*le,r[15]=g*T+y*G+M*k+R*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15];return x*(+r*l*d-a*c*d-r*o*h+i*c*h+a*o*p-i*l*p)+_*(+n*l*p-n*c*h+r*s*h-a*s*p+a*c*u-r*l*u)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*u-i*c*u)+f*(-a*o*u-n*l*d+n*o*h+a*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],g=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,y=x*h*c-u*m*c-x*l*p+s*m*p+u*l*f-s*h*f,M=u*_*c-x*d*c+x*o*p-s*_*p-u*o*f+s*d*f,R=x*d*l-u*_*l-x*o*h+s*_*h+u*o*m-s*d*m,w=n*g+i*y+a*M+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(_*h*r-d*m*r-_*a*p+i*m*p+d*a*f-i*h*f)*A,e[2]=(o*m*r-_*l*r+_*a*c-i*m*c-o*a*f+i*l*f)*A,e[3]=(d*l*r-o*h*r-d*a*c+i*h*c+o*a*p-i*l*p)*A,e[4]=y*A,e[5]=(u*m*r-x*h*r+x*a*p-n*m*p-u*a*f+n*h*f)*A,e[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*f-n*l*f)*A,e[7]=(s*h*r-u*l*r+u*a*c-n*h*c-s*a*p+n*l*p)*A,e[8]=M*A,e[9]=(x*d*r-u*_*r-x*i*p+n*_*p+u*i*f-n*d*f)*A,e[10]=(s*_*r-x*o*r+x*i*c-n*_*c-s*i*f+n*o*f)*A,e[11]=(u*o*r-s*d*r-u*i*c+n*d*c+s*i*p-n*o*p)*A,e[12]=R*A,e[13]=(u*_*a-x*d*a+x*i*h-n*_*h-u*i*m+n*d*m)*A,e[14]=(x*o*a-s*_*a-x*i*l+n*_*l+s*i*m-n*o*m)*A,e[15]=(s*d*a-u*o*a+u*i*l-n*d*l-s*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,u=s+s,d=o+o,h=r*c,p=r*u,x=r*d,_=s*u,m=s*d,f=o*d,g=l*c,y=l*u,M=l*d,R=i.x,w=i.y,A=i.z;return a[0]=(1-(_+f))*R,a[1]=(p+M)*R,a[2]=(x-y)*R,a[3]=0,a[4]=(p-M)*w,a[5]=(1-(h+f))*w,a[6]=(m+g)*w,a[7]=0,a[8]=(x+y)*A,a[9]=(m-g)*A,a[10]=(1-(h+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=Rr.set(a[0],a[1],a[2]).length();const s=Rr.set(a[4],a[5],a[6]).length(),o=Rr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const c=1/r,u=1/s,d=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,n.setFromRotationMatrix(ei),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=Gi){const l=this.elements,c=2*r/(n-e),u=2*r/(i-a),d=(n+e)/(n-e),h=(i+a)/(i-a);let p,x;if(o===Gi)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===uu)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Gi){const l=this.elements,c=1/(n-e),u=1/(i-a),d=1/(s-r),h=(n+e)*c,p=(i+a)*u;let x,_;if(o===Gi)x=(s+r)*d,_=-2*d;else if(o===uu)x=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new F,ei=new Mt,KA=new F(0,0,0),$A=new F(1,1,1),sa=new F,Vl=new F,Cn=new F,h0=new Mt,p0=new ml;class yi{constructor(e=0,n=0,i=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return h0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return p0.setFromEuler(this),this.setFromQuaternion(p0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Xy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QA=0;const m0=new F,Cr=new ml,Ci=new Mt,kl=new F,Js=new F,JA=new F,ew=new ml,g0=new F(1,0,0),v0=new F(0,1,0),x0=new F(0,0,1),_0={type:"added"},tw={type:"removed"},Nr={type:"childadded",child:null},zf={type:"childremoved",child:null};class $t extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,n=new yi,i=new ml,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new We}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(g0,e)}rotateY(e){return this.rotateOnAxis(v0,e)}rotateZ(e){return this.rotateOnAxis(x0,e)}translateOnAxis(e,n){return m0.copy(e).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(g0,e)}translateY(e){return this.translateOnAxis(v0,e)}translateZ(e){return this.translateOnAxis(x0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kl.copy(e):kl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Js,kl,this.up):Ci.lookAt(kl,Js,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),Cr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tw),zf.child=e,this.dispatchEvent(zf),zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,JA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,ew,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new F,Ni=new F,Bf=new F,Di=new F,Dr=new F,Ur=new F,y0=new F,If=new F,Hf=new F,Gf=new F,Vf=new vt,kf=new vt,jf=new vt;class ai{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ti.subVectors(e,n),a.cross(ti);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){ti.subVectors(a,n),Ni.subVectors(i,n),Bf.subVectors(e,n);const s=ti.dot(ti),o=ti.dot(Ni),l=ti.dot(Bf),c=Ni.dot(Ni),u=Ni.dot(Bf),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,x=(s*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(s,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return Vf.setScalar(0),kf.setScalar(0),jf.setScalar(0),Vf.fromBufferAttribute(e,n),kf.fromBufferAttribute(e,i),jf.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Vf,r.x),s.addScaledVector(kf,r.y),s.addScaledVector(jf,r.z),s}static isFrontFacing(e,n,i,a){return ti.subVectors(i,n),Ni.subVectors(e,n),ti.cross(Ni).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ti.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Dr.subVectors(a,i),Ur.subVectors(r,i),If.subVectors(e,i);const l=Dr.dot(If),c=Ur.dot(If);if(l<=0&&c<=0)return n.copy(i);Hf.subVectors(e,a);const u=Dr.dot(Hf),d=Ur.dot(Hf);if(u>=0&&d<=u)return n.copy(a);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Dr,s);Gf.subVectors(e,r);const p=Dr.dot(Gf),x=Ur.dot(Gf);if(x>=0&&p<=x)return n.copy(r);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Ur,o);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return y0.subVectors(r,a),o=(d-u)/(d-u+(p-x)),n.copy(a).addScaledVector(y0,o);const f=1/(m+_+h);return s=_*f,o=h*f,n.copy(i).addScaledVector(Dr,s).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oa={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=tt.workingColorSpace){if(e=BA(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Xf(s,r,e+1/3),this.g=Xf(s,r,e),this.b=Xf(s,r,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,n=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=Wy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return tt.workingToColorSpace(rn.copy(this),e),Math.round(nt(rn.r*255,0,255))*65536+Math.round(nt(rn.g*255,0,255))*256+Math.round(nt(rn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(rn.copy(this),n);const i=rn.r,a=rn.g,r=rn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=en){tt.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,a=rn.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(oa),this.setHSL(oa.h+e,oa.s+n,oa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(oa),e.getHSL(jl);const i=wf(oa.h,jl.h,n),a=wf(oa.s,jl.s,n),r=wf(oa.l,jl.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new qe;qe.NAMES=Wy;let nw=0;class Qi extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=cs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==Qa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qy extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new F,Xl=new at;let iw=0;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=o0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xl.fromBufferAttribute(this,n),Xl.applyMatrix3(e),this.setXY(n,Xl.x,Xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o0&&(e.usage=this.usage),e}}class Yy extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zy extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aw=0;const Hn=new Mt,Wf=new $t,Lr=new F,Nn=new za,eo=new za,Wt=new F;class Qn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?Zy:Yy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Nn.min,eo.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,eo.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(eo.min),Nn.expandByPoint(eo.max))}Nn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Wt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Wt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),Wt.add(Lr)),a=Math.max(a,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const c=new F,u=new F,d=new F,h=new at,p=new at,x=new at,_=new F,m=new F;function f(D,T,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,S),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(C),o[D].add(_),o[T].add(_),o[S].add(_),l[D].add(m),l[T].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,T=g.length;D<T;++D){const S=g[D],C=S.start,H=S.count;for(let G=C,Z=C+H;G<Z;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new F,M=new F,R=new F,w=new F;function A(D){R.fromBufferAttribute(a,D),w.copy(R);const T=o[D];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(w,T);const C=M.dot(l[D])<0?-1:1;s.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,T=g.length;D<T;++D){const S=g[D],C=S.start,H=S.count;for(let G=C,Z=C+H;G<Z;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,r),d.subVectors(a,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new Zn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new Mt,ka=new fm,Wl=new gl,M0=new F,ql=new F,Yl=new F,Zl=new F,qf=new F,Kl=new F,b0=new F,$l=new F;class si extends $t{constructor(e=new Qn,n=new qy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(qf.fromBufferAttribute(d,e),s?Kl.addScaledVector(qf,u):Kl.addScaledVector(qf.sub(n),u))}n.add(Kl)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),ka.copy(e.ray).recast(e.near),!(Wl.containsPoint(ka.origin)===!1&&(ka.intersectSphere(Wl,M0)===null||ka.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(S0.copy(r).invert(),ka.copy(e.ray).applyMatrix4(S0),!(i.boundingBox!==null&&ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ka)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=s[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=y;M<R;M+=3){const w=o.getX(M),A=o.getX(M+1),D=o.getX(M+2);a=Ql(this,f,e,i,c,u,d,w,A,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);a=Ql(this,s,e,i,c,u,d,g,y,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=s[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=y;M<R;M+=3){const w=M,A=M+1,D=M+2;a=Ql(this,f,e,i,c,u,d,w,A,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=m,y=m+1,M=m+2;a=Ql(this,s,e,i,c,u,d,g,y,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function rw(t,e,n,i,a,r,s,o){let l;if(e.side===Mn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===$i,o),l===null)return null;$l.copy(o),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function Ql(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,ql),t.getVertexPosition(l,Yl),t.getVertexPosition(c,Zl);const u=rw(t,e,n,i,ql,Yl,Zl,b0);if(u){const d=new F;ai.getBarycoord(b0,ql,Yl,Zl,d),a&&(u.uv=ai.getInterpolatedAttribute(a,o,l,c,d,new at)),r&&(u.uv1=ai.getInterpolatedAttribute(r,o,l,c,d,new at)),s&&(u.normal=ai.getInterpolatedAttribute(s,o,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};ai.getNormal(ql,Yl,Zl,h.normal),u.face=h,u.barycoord=d}return u}class vl extends Qn{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,s,r,0),x("z","y","x",1,-1,i,n,-e,s,r,1),x("x","z","y",1,1,e,i,n,a,s,2),x("x","z","y",1,-1,e,i,-n,a,s,3),x("x","y","z",1,-1,e,n,i,a,r,4),x("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(d,2));function x(_,m,f,g,y,M,R,w,A,D,T){const S=M/A,C=R/D,H=M/2,G=R/2,Z=w/2,q=A+1,O=D+1;let k=0,z=0;const J=new F;for(let le=0;le<O;le++){const Se=le*C-G;for(let de=0;de<q;de++){const Ne=de*S-H;J[_]=Ne*g,J[m]=Se*y,J[f]=Z,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=w>0?1:-1,u.push(J.x,J.y,J.z),d.push(de/A),d.push(1-le/D),k+=1}}for(let le=0;le<D;le++)for(let Se=0;Se<A;Se++){const de=h+Se+q*le,Ne=h+Se+q*(le+1),j=h+(Se+1)+q*(le+1),K=h+(Se+1)+q*le;l.push(de,Ne,K),l.push(Ne,j,K),z+=6}o.addGroup(p,z,T),p+=z,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const a in i)e[a]=i[a]}return e}function sw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ky(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ow={clone:ws,merge:cn};var lw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lw,this.fragmentShader=cw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=sw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $y extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const la=new F,E0=new at,T0=new at;class Sn extends $y{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){la.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(la.x,la.y).multiplyScalar(-e/la.z),la.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(la.x,la.y).multiplyScalar(-e/la.z)}getViewSize(e,n){return this.getViewBounds(e,E0,T0),n.subVectors(T0,E0)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Af*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Pr=1;class uw extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sn(Or,Pr,e,n);a.layers=this.layers,this.add(a);const r=new Sn(Or,Pr,e,n);r.layers=this.layers,this.add(r);const s=new Sn(Or,Pr,e,n);s.layers=this.layers,this.add(s);const o=new Sn(Or,Pr,e,n);o.layers=this.layers,this.add(o);const l=new Sn(Or,Pr,e,n);l.layers=this.layers,this.add(l);const c=new Sn(Or,Pr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,a),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Qy extends hn{constructor(e=[],n=Es,i,a,r,s,o,l,c,u){super(e,n,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fw extends pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Qy(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new vl(5,5,5),r=new Oa({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ca});r.uniforms.tEquirect.value=n;const s=new si(a,r),o=n.minFilter;return n.minFilter===tr&&(n.minFilter=pi),new uw(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}class oo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dw={type:"move"};class Yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dw)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dm{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new dm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jy extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zf=new F,hw=new F,pw=new We;class Ka{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Zf.subVectors(i,n).cross(hw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pw.getNormalMatrix(e),a=this.coplanarPoint(Zf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ja=new gl,mw=new at(.5,.5),Jl=new F;class hm{constructor(e=new Ka,n=new Ka,i=new Ka,a=new Ka,r=new Ka,s=new Ka){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gi){const i=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],h=a[7],p=a[8],x=a[9],_=a[10],m=a[11],f=a[12],g=a[13],y=a[14],M=a[15];if(i[0].setComponents(l-r,h-c,m-p,M-f).normalize(),i[1].setComponents(l+r,h+c,m+p,M+f).normalize(),i[2].setComponents(l+s,h+u,m+x,M+g).normalize(),i[3].setComponents(l-s,h-u,m-x,M-g).normalize(),i[4].setComponents(l-o,h-d,m-_,M-y).normalize(),n===Gi)i[5].setComponents(l+o,h+d,m+_,M+y).normalize();else if(n===uu)i[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ja.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ja)}intersectsSprite(e){ja.center.set(0,0,0);const n=mw.distanceTo(e.center);return ja.radius=.7071067811865476+n,ja.applyMatrix4(e.matrixWorld),this.intersectsSphere(ja)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Jl.x=a.normal.x>0?e.max.x:e.min.x,Jl.y=a.normal.y>0?e.max.y:e.min.y,Jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new F,du=new F,A0=new Mt,to=new fm,ec=new gl,Kf=new F,w0=new F;class gw extends $t{constructor(e=new Qn,n=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)fu.fromBufferAttribute(n,a-1),du.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=fu.distanceTo(du);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(a),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;A0.copy(a).invert(),to.copy(e.ray).applyMatrix4(A0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let _=p,m=x-1;_<m;_+=c){const f=u.getX(_),g=u.getX(_+1),y=tc(this,e,to,l,f,g,_);y&&n.push(y)}if(this.isLineLoop){const _=u.getX(x-1),m=u.getX(p),f=tc(this,e,to,l,_,m,x-1);f&&n.push(f)}}else{const p=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let _=p,m=x-1;_<m;_+=c){const f=tc(this,e,to,l,_,_+1,_);f&&n.push(f)}if(this.isLineLoop){const _=tc(this,e,to,l,x-1,p,x-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tc(t,e,n,i,a,r,s){const o=t.geometry.attributes.position;if(fu.fromBufferAttribute(o,a),du.fromBufferAttribute(o,r),n.distanceSqToSegment(fu,du,Kf,w0)>i)return;Kf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Kf);if(!(c<e.near||c>e.far))return{distance:c,point:w0.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}const R0=new F,C0=new F;class Wh extends gw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,r=n.count;a<r;a+=2)R0.fromBufferAttribute(n,a),C0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+R0.distanceTo(C0);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const N0=new Mt,qh=new fm,nc=new gl,ic=new F;class $f extends $t{constructor(e=new Qn,n=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(a),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;N0.copy(a).invert(),qh.copy(e.ray).applyMatrix4(N0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=h,_=p;x<_;x++){const m=c.getX(x);ic.fromBufferAttribute(d,m),D0(ic,m,l,a,e,n,this)}}else{const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let x=h,_=p;x<_;x++)ic.fromBufferAttribute(d,x),D0(ic,x,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function D0(t,e,n,i,a,r,s){const o=qh.distanceSqToPoint(t);if(o<n){const l=new F;qh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class eS extends hn{constructor(e,n,i=hr,a,r,s,o=li,l=li,c,u=Xo,d=1){if(u!==Xo&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zu extends Qn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,h=n/l,p=[],x=[],_=[],m=[];for(let f=0;f<u;f++){const g=f*h-s;for(let y=0;y<c;y++){const M=y*d-r;x.push(M,-g,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const y=g+c*f,M=g+c*(f+1),R=g+1+c*(f+1),w=g+1+c*f;p.push(y,M,w),p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class tS extends Qi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gy,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vw extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xw extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wo={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _w{constructor(e,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const nS=new _w;class Bs{constructor(e){this.manager=e!==void 0?e:nS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(a,r){i.load(e,a,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class yw extends Error{constructor(e,n){super(e),this.response=n}}class iS extends Bs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:n,onProgress:i,onError:a});return}Ui[e]=[],Ui[e].push({onLoad:n,onProgress:i,onError:a});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ui[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,x=p!==0;let _=0;const m=new ReadableStream({start(f){g();function g(){d.read().then(({done:y,value:M})=>{if(y)f.close();else{_+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let w=0,A=u.length;w<A;w++){const D=u[w];D.onProgress&&D.onProgress(R)}f.enqueue(M),g()}},y=>{f.error(y)})}}});return new Response(m)}else throw new yw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{wo.add(`file:${e}`,c);const u=Ui[e];delete Ui[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Fr=new WeakMap;class Sw extends Bs{constructor(e){super(e)}load(e,n,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=wo.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(s),r.manager.itemEnd(e)},0);else{let d=Fr.get(s);d===void 0&&(d=[],Fr.set(s,d)),d.push({onLoad:n,onError:a})}return s}const o=qo("img");function l(){u(),n&&n(this);const d=Fr.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}Fr.delete(this),r.manager.itemEnd(e)}function c(d){u(),a&&a(d),wo.remove(`image:${e}`);const h=Fr.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(d)}Fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class aS extends Bs{constructor(e){super(e)}load(e,n,i,a){const r=new hn,s=new Sw(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class pm extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qf=new Mt,U0=new F,L0=new F;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hm,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;U0.setFromMatrixPosition(e.matrixWorld),n.position.copy(U0),L0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(L0),n.updateMatrixWorld(),Qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const O0=new Mt,no=new F,Jf=new F;class Mw extends rS{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,a=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),Jf.copy(i.position),Jf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Jf),i.updateMatrixWorld(),a.makeTranslation(-no.x,-no.y,-no.z),O0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(O0)}}class bw extends pm{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Mw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sS extends $y{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ew extends rS{constructor(){super(new sS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hu extends pm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Ew}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oS extends pm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tw{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class Aw extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ac=new za;class P0 extends Wh{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=new Float32Array(8*3),r=new Qn;r.setIndex(new Zn(i,1)),r.setAttribute("position",new Zn(a,3)),super(r,new Ao({color:n,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ac.setFromObject(this.object),ac.isEmpty())return;const e=ac.min,n=ac.max,i=this.geometry.attributes.position,a=i.array;a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=e.x,a[4]=n.y,a[5]=n.z,a[6]=e.x,a[7]=e.y,a[8]=n.z,a[9]=n.x,a[10]=e.y,a[11]=n.z,a[12]=n.x,a[13]=n.y,a[14]=e.z,a[15]=e.x,a[16]=n.y,a[17]=e.z,a[18]=e.x,a[19]=e.y,a[20]=e.z,a[21]=n.x,a[22]=e.y,a[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,n){return super.copy(e,n),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function F0(t,e,n,i){const a=ww(i);switch(n){case Fy:return t*e;case By:return t*e/a.components*a.byteLength;case om:return t*e/a.components*a.byteLength;case Iy:return t*e*2/a.components*a.byteLength;case lm:return t*e*2/a.components*a.byteLength;case zy:return t*e*3/a.components*a.byteLength;case ri:return t*e*4/a.components*a.byteLength;case cm:return t*e*4/a.components*a.byteLength;case Tc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(t,16)*Math.max(e,8)/4;case _h:case Sh:return Math.max(t,8)*Math.max(e,8)/2;case bh:case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Hh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hy:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kh:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ww(t){switch(t){case _i:case Ly:return{byteLength:1,components:1};case ko:case Oy:case hl:return{byteLength:2,components:1};case rm:case sm:return{byteLength:2,components:4};case hr:case am:case Hi:return{byteLength:4,components:1};case Py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Rw(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Cw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nw=`#ifdef USE_ALPHAHASH
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
#endif`,Dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pw=`#ifdef USE_AOMAP
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
#endif`,Fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zw=`#ifdef USE_BATCHING
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
#endif`,Bw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vw=`#ifdef USE_IRIDESCENCE
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
#endif`,kw=`#ifdef USE_BUMPMAP
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
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qw=`#define PI 3.141592653589793
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
} // validated`,Jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e2=`vec3 transformedNormal = objectNormal;
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
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r2="gl_FragColor = linearToOutputTexel( gl_FragColor );",s2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o2=`#ifdef USE_ENVMAP
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
#endif`,l2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g2=`#ifdef USE_GRADIENTMAP
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
}`,v2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y2=`uniform bool receiveShadow;
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
#endif`,S2=`#ifdef USE_ENVMAP
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
#endif`,M2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A2=`PhysicalMaterial material;
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
#endif`,w2=`struct PhysicalMaterial {
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
}`,R2=`
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
#endif`,C2=`#if defined( RE_IndirectDiffuse )
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B2=`#if defined( USE_POINTS_UV )
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
#endif`,I2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`#ifdef USE_MORPHTARGETS
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
#endif`,X2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$2=`#ifdef USE_NORMALMAP
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
#endif`,Q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hR=`float getShadowMask() {
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
}`,pR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mR=`#ifdef USE_SKINNING
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
#endif`,gR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vR=`#ifdef USE_SKINNING
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
#endif`,xR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_R=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SR=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MR=`#ifdef USE_TRANSMISSION
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
#endif`,bR=`#ifdef USE_TRANSMISSION
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
#endif`,ER=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CR=`uniform sampler2D t2D;
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
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
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
}`,PR=`#if DEPTH_PACKING == 3200
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
}`,FR=`#define DISTANCE
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
}`,zR=`#define DISTANCE
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
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HR=`uniform float scale;
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
}`,GR=`uniform vec3 diffuse;
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
}`,VR=`#include <common>
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
}`,kR=`uniform vec3 diffuse;
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
}`,jR=`#define LAMBERT
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
}`,XR=`#define LAMBERT
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
}`,WR=`#define MATCAP
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
}`,qR=`#define MATCAP
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
}`,YR=`#define NORMAL
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
}`,ZR=`#define NORMAL
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
}`,KR=`#define PHONG
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
}`,$R=`#define PHONG
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
}`,QR=`#define STANDARD
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
}`,JR=`#define STANDARD
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
}`,eC=`#define TOON
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
}`,tC=`#define TOON
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
}`,nC=`uniform float size;
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
}`,iC=`uniform vec3 diffuse;
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
}`,aC=`#include <common>
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
}`,rC=`uniform vec3 color;
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
}`,sC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,oC=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Cw,alphahash_pars_fragment:Nw,alphamap_fragment:Dw,alphamap_pars_fragment:Uw,alphatest_fragment:Lw,alphatest_pars_fragment:Ow,aomap_fragment:Pw,aomap_pars_fragment:Fw,batching_pars_vertex:zw,batching_vertex:Bw,begin_vertex:Iw,beginnormal_vertex:Hw,bsdfs:Gw,iridescence_fragment:Vw,bumpmap_pars_fragment:kw,clipping_planes_fragment:jw,clipping_planes_pars_fragment:Xw,clipping_planes_pars_vertex:Ww,clipping_planes_vertex:qw,color_fragment:Yw,color_pars_fragment:Zw,color_pars_vertex:Kw,color_vertex:$w,common:Qw,cube_uv_reflection_fragment:Jw,defaultnormal_vertex:e2,displacementmap_pars_vertex:t2,displacementmap_vertex:n2,emissivemap_fragment:i2,emissivemap_pars_fragment:a2,colorspace_fragment:r2,colorspace_pars_fragment:s2,envmap_fragment:o2,envmap_common_pars_fragment:l2,envmap_pars_fragment:c2,envmap_pars_vertex:u2,envmap_physical_pars_fragment:S2,envmap_vertex:f2,fog_vertex:d2,fog_pars_vertex:h2,fog_fragment:p2,fog_pars_fragment:m2,gradientmap_pars_fragment:g2,lightmap_pars_fragment:v2,lights_lambert_fragment:x2,lights_lambert_pars_fragment:_2,lights_pars_begin:y2,lights_toon_fragment:M2,lights_toon_pars_fragment:b2,lights_phong_fragment:E2,lights_phong_pars_fragment:T2,lights_physical_fragment:A2,lights_physical_pars_fragment:w2,lights_fragment_begin:R2,lights_fragment_maps:C2,lights_fragment_end:N2,logdepthbuf_fragment:D2,logdepthbuf_pars_fragment:U2,logdepthbuf_pars_vertex:L2,logdepthbuf_vertex:O2,map_fragment:P2,map_pars_fragment:F2,map_particle_fragment:z2,map_particle_pars_fragment:B2,metalnessmap_fragment:I2,metalnessmap_pars_fragment:H2,morphinstance_vertex:G2,morphcolor_vertex:V2,morphnormal_vertex:k2,morphtarget_pars_vertex:j2,morphtarget_vertex:X2,normal_fragment_begin:W2,normal_fragment_maps:q2,normal_pars_fragment:Y2,normal_pars_vertex:Z2,normal_vertex:K2,normalmap_pars_fragment:$2,clearcoat_normal_fragment_begin:Q2,clearcoat_normal_fragment_maps:J2,clearcoat_pars_fragment:eR,iridescence_pars_fragment:tR,opaque_fragment:nR,packing:iR,premultiplied_alpha_fragment:aR,project_vertex:rR,dithering_fragment:sR,dithering_pars_fragment:oR,roughnessmap_fragment:lR,roughnessmap_pars_fragment:cR,shadowmap_pars_fragment:uR,shadowmap_pars_vertex:fR,shadowmap_vertex:dR,shadowmask_pars_fragment:hR,skinbase_vertex:pR,skinning_pars_vertex:mR,skinning_vertex:gR,skinnormal_vertex:vR,specularmap_fragment:xR,specularmap_pars_fragment:_R,tonemapping_fragment:yR,tonemapping_pars_fragment:SR,transmission_fragment:MR,transmission_pars_fragment:bR,uv_pars_fragment:ER,uv_pars_vertex:TR,uv_vertex:AR,worldpos_vertex:wR,background_vert:RR,background_frag:CR,backgroundCube_vert:NR,backgroundCube_frag:DR,cube_vert:UR,cube_frag:LR,depth_vert:OR,depth_frag:PR,distanceRGBA_vert:FR,distanceRGBA_frag:zR,equirect_vert:BR,equirect_frag:IR,linedashed_vert:HR,linedashed_frag:GR,meshbasic_vert:VR,meshbasic_frag:kR,meshlambert_vert:jR,meshlambert_frag:XR,meshmatcap_vert:WR,meshmatcap_frag:qR,meshnormal_vert:YR,meshnormal_frag:ZR,meshphong_vert:KR,meshphong_frag:$R,meshphysical_vert:QR,meshphysical_frag:JR,meshtoon_vert:eC,meshtoon_frag:tC,points_vert:nC,points_frag:iC,shadow_vert:aC,shadow_frag:rC,sprite_vert:sC,sprite_frag:oC},ge={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},fi={basic:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:cn([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:cn([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:cn([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:cn([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:cn([ge.lights,ge.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};fi.physical={uniforms:cn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const rc={r:0,b:0,g:0},Xa=new yi,lC=new Mt;function cC(t,e,n,i,a,r,s){const o=new qe(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function x(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?n:e).get(M)),M}function _(y){let M=!1;const R=x(y);R===null?f(o,l):R&&R.isColor&&(f(R,1),M=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,M){const R=x(M);R&&(R.isCubeTexture||R.mapping===Fu)?(u===void 0&&(u=new si(new vl(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:ws(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Xa.copy(M.backgroundRotation),Xa.x*=-1,Xa.y*=-1,Xa.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Xa.y*=-1,Xa.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Xa)),u.material.toneMapped=tt.getTransfer(R.colorSpace)!==pt,(d!==R||h!==R.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new si(new zu(2,2),new Oa({name:"BackgroundMaterial",uniforms:ws(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=tt.getTransfer(R.colorSpace)!==pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,M){y.getRGB(rc,Ky(t)),i.buffers.color.setClear(rc.r,rc.g,rc.b,M,s)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:g}}function uC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(S,C,H,G,Z){let q=!1;const O=d(G,H,C);r!==O&&(r=O,c(r.object)),q=p(S,G,H,Z),q&&x(S,G,H,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,M(S,C,H,G),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,C,H){const G=H.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let q=Z[C.id];q===void 0&&(q={},Z[C.id]=q);let O=q[G];return O===void 0&&(O=h(l()),q[G]=O),O}function h(S){const C=[],H=[],G=[];for(let Z=0;Z<n;Z++)C[Z]=0,H[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,C,H,G){const Z=r.attributes,q=C.attributes;let O=0;const k=H.getAttributes();for(const z in k)if(k[z].location>=0){const le=Z[z];let Se=q[z];if(Se===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),le===void 0||le.attribute!==Se||Se&&le.data!==Se.data)return!0;O++}return r.attributesNum!==O||r.index!==G}function x(S,C,H,G){const Z={},q=C.attributes;let O=0;const k=H.getAttributes();for(const z in k)if(k[z].location>=0){let le=q[z];le===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const Se={};Se.attribute=le,le&&le.data&&(Se.data=le.data),Z[z]=Se,O++}r.attributes=Z,r.attributesNum=O,r.index=G}function _(){const S=r.newAttributes;for(let C=0,H=S.length;C<H;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){const H=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;H[S]=1,G[S]===0&&(t.enableVertexAttribArray(S),G[S]=1),Z[S]!==C&&(t.vertexAttribDivisor(S,C),Z[S]=C)}function g(){const S=r.newAttributes,C=r.enabledAttributes;for(let H=0,G=C.length;H<G;H++)C[H]!==S[H]&&(t.disableVertexAttribArray(H),C[H]=0)}function y(S,C,H,G,Z,q,O){O===!0?t.vertexAttribIPointer(S,C,H,Z,q):t.vertexAttribPointer(S,C,H,G,Z,q)}function M(S,C,H,G){_();const Z=G.attributes,q=H.getAttributes(),O=C.defaultAttributeValues;for(const k in q){const z=q[k];if(z.location>=0){let J=Z[k];if(J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const le=J.normalized,Se=J.itemSize,de=e.get(J);if(de===void 0)continue;const Ne=de.buffer,j=de.type,K=de.bytesPerElement,fe=j===t.INT||j===t.UNSIGNED_INT||J.gpuType===am;if(J.isInterleavedBufferAttribute){const ue=J.data,_e=ue.stride,Oe=J.offset;if(ue.isInstancedInterleavedBuffer){for(let se=0;se<z.locationSize;se++)f(z.location+se,ue.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let se=0;se<z.locationSize;se++)y(z.location+se,Se/z.locationSize,j,le,_e*K,(Oe+Se/z.locationSize*se)*K,fe)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)f(z.location+ue,J.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue,Se/z.locationSize,j,le,Se*K,Se/z.locationSize*ue*K,fe)}}else if(O!==void 0){const le=O[k];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(z.location,le);break;case 3:t.vertexAttrib3fv(z.location,le);break;case 4:t.vertexAttrib4fv(z.location,le);break;default:t.vertexAttrib1fv(z.location,le)}}}}g()}function R(){D();for(const S in i){const C=i[S];for(const H in C){const G=C[H];for(const Z in G)u(G[Z].object),delete G[Z];delete C[H]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const H in C){const G=C[H];for(const Z in G)u(G[Z].object),delete G[Z];delete C[H]}delete i[S.id]}function A(S){for(const C in i){const H=i[C];if(H[S.id]===void 0)continue;const G=H[S.id];for(const Z in G)u(G[Z].object),delete G[Z];delete H[S.id]}}function D(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function fC(t,e,n){let i;function a(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let _=0;_<d;_++)x+=u[_]*h[_];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dC(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_i&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hi&&!D)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:R,maxSamples:w}}function hC(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new Ka,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!a||x===null||x.length===0||r&&!m)r?u(null):c();else{const g=r?0:i,y=g*4;let M=f.clippingState||null;l.value=M,M=u(x,h,y,p);for(let R=0;R!==y;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const f=p+_*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)s.copy(d[y]).applyMatrix4(g,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pC(t){let e=new WeakMap;function n(s,o){return o===gh?s.mapping=Es:o===vh&&(s.mapping=Ts),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===gh||o===vh)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new fw(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const es=4,z0=[.125,.215,.35,.446,.526,.582],Ja=20,ed=new sS,B0=new qe;let td=null,nd=0,id=0,ad=!1;const $a=(1+Math.sqrt(5))/2,zr=1/$a,I0=[new F(-$a,zr,0),new F($a,zr,0),new F(-zr,0,$a),new F(zr,0,$a),new F(0,$a,-zr),new F(0,$a,zr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],mC=new F;class H0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=mC}=r;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=ad,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:hl,format:ri,colorSpace:As,depthBuffer:!1},a=G0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gC(r)),this._blurMaterial=vC(r,e,n)}return a}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,i,a,r){const l=new Sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(B0),d.toneMapping=Na,d.autoClear=!1;const x=new qy({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new si(new vl,x);let m=!1;const f=e.background;f?f.isColor&&(x.color.copy(f),e.background=null,m=!0):(x.color.copy(B0),m=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[g],r.y,r.z)):y===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[g]));const M=this._cubeSize;sc(a,y*M,g>2?M:0,M,M),d.setRenderTarget(a),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Es||e.mapping===Ts;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V0());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=I0[(a-r-1)%I0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new si(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ja-1),_=r/x,m=isFinite(r)?1+Math.floor(u*_):Ja;m>Ja&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ja}`);const f=[];let g=0;for(let A=0;A<Ja;++A){const D=A/_,T=Math.exp(-D*D/2);f.push(T),A===0?g+=T:A<m&&(g+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-i;const M=this._sizeLods[a],R=3*M*(a>y-es?a-y+es:0),w=4*(this._cubeSize-M);sc(n,R,w,3*M,2*M),l.setRenderTarget(n),l.render(d,ed)}}function gC(t){const e=[],n=[],i=[];let a=t;const r=t-es+1+z0.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>t-es?l=z0[s-t+es-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,_=3,m=2,f=1,g=new Float32Array(_*x*p),y=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,D=w>2?0:-1,T=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];g.set(T,_*x*w),y.set(h,m*x*w);const S=[w,w,w,w,w,w];M.set(S,f*x*w)}const R=new Qn;R.setAttribute("position",new Zn(g,_)),R.setAttribute("uv",new Zn(y,m)),R.setAttribute("faceIndex",new Zn(M,f)),e.push(R),a>es&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function G0(t,e,n){const i=new pr(t,e,n);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function vC(t,e,n){const i=new Float32Array(Ja),a=new F(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:Ja,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mm(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function V0(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function k0(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function mm(){return`

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
	`}function xC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gh||l===vh,u=l===Es||l===Ts;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new H0(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new H0(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function _C(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&us("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function yC(t,e,n,i){const a={},r=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let y=0,M=g.length;y<M;y+=3){const R=g[y+0],w=g[y+1],A=g[y+2];h.push(R,w,w,A,A,R)}}else if(x!==void 0){const g=x.array;_=x.version;for(let y=0,M=g.length/3-1;y<M;y+=3){const R=y+0,w=y+1,A=y+2;h.push(R,w,w,A,A,R)}}else return;const m=new(ky(h)?Zy:Yy)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function SC(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*s),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,r,h*s,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,x);let f=0;for(let g=0;g<x;g++)f+=p[g]*_[g];n.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function MC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function bC(t,e,n){const i=new WeakMap,a=new vt;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*d),D=new jy(A,R,w,d);D.type=Hi,D.needsUpdate=!0;const T=M*4;for(let C=0;C<d;C++){const H=f[C],G=g[C],Z=y[C],q=R*w*4*C;for(let O=0;O<H.count;O++){const k=O*T;x===!0&&(a.fromBufferAttribute(H,O),A[q+k+0]=a.x,A[q+k+1]=a.y,A[q+k+2]=a.z,A[q+k+3]=0),_===!0&&(a.fromBufferAttribute(G,O),A[q+k+4]=a.x,A[q+k+5]=a.y,A[q+k+6]=a.z,A[q+k+7]=0),m===!0&&(a.fromBufferAttribute(Z,O),A[q+k+8]=a.x,A[q+k+9]=a.y,A[q+k+10]=a.z,A[q+k+11]=Z.itemSize===4?a.w:1)}}h={count:d,texture:D,size:new at(R,w)},i.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const _=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function EC(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const cS=new hn,j0=new eS(1,1),uS=new jy,fS=new YA,dS=new Qy,X0=[],W0=[],q0=new Float32Array(16),Y0=new Float32Array(9),Z0=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=X0[a];if(r===void 0&&(r=new Float32Array(a),X0[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bu(t,e){let n=W0[e];n===void 0&&(n=new Int32Array(e),W0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function CC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Z0.set(i),t.uniformMatrix2fv(this.addr,!1,Z0),Xt(n,i)}}function NC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Y0.set(i),t.uniformMatrix3fv(this.addr,!1,Y0),Xt(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;q0.set(i),t.uniformMatrix4fv(this.addr,!1,q0),Xt(n,i)}}function UC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function HC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(j0.compareFunction=Vy,r=j0):r=cS,n.setTexture2D(e||r,a)}function GC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||fS,a)}function VC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||dS,a)}function kC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||uS,a)}function jC(t){switch(t){case 5126:return TC;case 35664:return AC;case 35665:return wC;case 35666:return RC;case 35674:return CC;case 35675:return NC;case 35676:return DC;case 5124:case 35670:return UC;case 35667:case 35671:return LC;case 35668:case 35672:return OC;case 35669:case 35673:return PC;case 5125:return FC;case 36294:return zC;case 36295:return BC;case 36296:return IC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return kC}}function XC(t,e){t.uniform1fv(this.addr,e)}function WC(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function qC(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function YC(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function ZC(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KC(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $C(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QC(t,e){t.uniform1iv(this.addr,e)}function JC(t,e){t.uniform2iv(this.addr,e)}function e3(t,e){t.uniform3iv(this.addr,e)}function t3(t,e){t.uniform4iv(this.addr,e)}function n3(t,e){t.uniform1uiv(this.addr,e)}function i3(t,e){t.uniform2uiv(this.addr,e)}function a3(t,e){t.uniform3uiv(this.addr,e)}function r3(t,e){t.uniform4uiv(this.addr,e)}function s3(t,e,n){const i=this.cache,a=e.length,r=Bu(n,a);jt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||cS,r[s])}function o3(t,e,n){const i=this.cache,a=e.length,r=Bu(n,a);jt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||fS,r[s])}function l3(t,e,n){const i=this.cache,a=e.length,r=Bu(n,a);jt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||dS,r[s])}function c3(t,e,n){const i=this.cache,a=e.length,r=Bu(n,a);jt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||uS,r[s])}function u3(t){switch(t){case 5126:return XC;case 35664:return WC;case 35665:return qC;case 35666:return YC;case 35674:return ZC;case 35675:return KC;case 35676:return $C;case 5124:case 35670:return QC;case 35667:case 35671:return JC;case 35668:case 35672:return e3;case 35669:case 35673:return t3;case 5125:return n3;case 36294:return i3;case 36295:return a3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return c3}}class f3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jC(n.type)}}class d3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u3(n.type)}}class h3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function K0(t,e){t.seq.push(e),t.map[e.id]=e}function p3(t,e,n){const i=t.name,a=i.length;for(rd.lastIndex=0;;){const r=rd.exec(i),s=rd.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){K0(n,c===void 0?new f3(o,t,e):new d3(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new h3(o),K0(n,d)),n=d}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);p3(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function $0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const m3=37297;let g3=0;function v3(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Q0=new We;function x3(t){tt._getMatrix(Q0,tt.workingColorSpace,t);const e=`mat3( ${Q0.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case cu:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function J0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+v3(t.getShaderSource(e),s)}else return a}function _3(t,e){const n=x3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function y3(t,e){let n;switch(e){case SA:n="Linear";break;case MA:n="Reinhard";break;case bA:n="Cineon";break;case Dy:n="ACESFilmic";break;case TA:n="AgX";break;case AA:n="Neutral";break;case EA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oc=new F;function S3(){tt.getLuminanceCoefficients(oc);const t=oc.x.toFixed(4),e=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function b3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function E3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function co(t){return t!==""}function ev(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(t){return t.replace(T3,w3)}const A3=new Map;function w3(t,e){let n=Ze[e];if(n===void 0){const i=A3.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(n)}const R3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(t){return t.replace(R3,C3)}function C3(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function iv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function N3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function D3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function L3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case im:e="ENVMAP_BLENDING_MULTIPLY";break;case _A:e="ENVMAP_BLENDING_MIX";break;case yA:e="ENVMAP_BLENDING_ADD";break}return e}function O3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function P3(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=N3(n),c=D3(n),u=U3(n),d=L3(n),h=O3(n),p=M3(n),x=b3(r),_=a.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(co).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(co).join(`
`),f.length>0&&(f+=`
`)):(m=[iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),f=[iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Na?"#define TONE_MAPPING":"",n.toneMapping!==Na?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Na?y3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,_3("linearToOutputTexel",n.outputColorSpace),S3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),s=Yh(s),s=ev(s,n),s=tv(s,n),o=Yh(o),o=ev(o,n),o=tv(o,n),s=nv(s),o=nv(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=g+m+s,M=g+f+o,R=$0(a,a.VERTEX_SHADER,y),w=$0(a,a.FRAGMENT_SHADER,M);a.attachShader(_,R),a.attachShader(_,w),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(C){if(t.debug.checkShaderErrors){const H=a.getProgramInfoLog(_).trim(),G=a.getShaderInfoLog(R).trim(),Z=a.getShaderInfoLog(w).trim();let q=!0,O=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,R,w);else{const k=J0(a,R,"vertex"),z=J0(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+k+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||Z==="")&&(O=!1);O&&(C.diagnostics={runnable:q,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:f}})}a.deleteShader(R),a.deleteShader(w),D=new Nc(a,_),T=E3(a,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(_,m3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=g3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let F3=0;class z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new B3(e),n.set(e,i)),i}}class B3{constructor(e){this.id=F3++,this.code=e,this.usedTimes=0}}function I3(t,e,n,i,a,r,s){const o=new Xy,l=new z3,c=new Set,u=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,C,H,G){const Z=H.fog,q=G.geometry,O=T.isMeshStandardMaterial?H.environment:null,k=(T.isMeshStandardMaterial?n:e).get(T.envMap||O),z=k&&k.mapping===Fu?k.image.height:null,J=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=le!==void 0?le.length:0;let de=0;q.morphAttributes.position!==void 0&&(de=1),q.morphAttributes.normal!==void 0&&(de=2),q.morphAttributes.color!==void 0&&(de=3);let Ne,j,K,fe;if(J){const Pe=fi[J];Ne=Pe.vertexShader,j=Pe.fragmentShader}else Ne=T.vertexShader,j=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),fe=l.getFragmentShaderID(T);const ue=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,se=G.isBatchedMesh===!0,Fe=!!T.map,Xe=!!T.matcap,ze=!!k,U=!!T.aoMap,Et=!!T.lightMap,Ce=!!T.bumpMap,rt=!!T.normalMap,Te=!!T.displacementMap,Ye=!!T.emissiveMap,Re=!!T.metalnessMap,Ge=!!T.roughnessMap,ut=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,V=T.iridescence>0,$=T.sheen>0,ie=T.transmission>0,Y=ut&&!!T.anisotropyMap,Q=N&&!!T.clearcoatMap,oe=N&&!!T.clearcoatNormalMap,pe=N&&!!T.clearcoatRoughnessMap,be=V&&!!T.iridescenceMap,ee=V&&!!T.iridescenceThicknessMap,ve=$&&!!T.sheenColorMap,we=$&&!!T.sheenRoughnessMap,De=!!T.specularMap,he=!!T.specularColorMap,He=!!T.specularIntensityMap,L=ie&&!!T.transmissionMap,me=ie&&!!T.thicknessMap,ae=!!T.gradientMap,ye=!!T.alphaMap,re=T.alphaTest>0,te=!!T.alphaHash,Ee=!!T.extensions;let Ve=Na;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const Be={shaderID:J,shaderType:T.type,shaderName:T.name,vertexShader:Ne,fragmentShader:j,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:se,batchingColor:se&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:As,alphaToCoverage:!!T.alphaToCoverage,map:Fe,matcap:Xe,envMap:ze,envMapMode:ze&&k.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:Et,bumpMap:Ce,normalMap:rt,displacementMap:h&&Te,emissiveMap:Ye,normalMapObjectSpace:rt&&T.normalMapType===NA,normalMapTangentSpace:rt&&T.normalMapType===Gy,metalnessMap:Re,roughnessMap:Ge,anisotropy:ut,anisotropyMap:Y,clearcoat:N,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:pe,dispersion:b,iridescence:V,iridescenceMap:be,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ve,sheenRoughnessMap:we,specularMap:De,specularColorMap:he,specularIntensityMap:He,transmission:ie,transmissionMap:L,thicknessMap:me,gradientMap:ae,opaque:T.transparent===!1&&T.blending===cs&&T.alphaToCoverage===!1,alphaMap:ye,alphaTest:re,alphaHash:te,combine:T.combine,mapUv:Fe&&_(T.map.channel),aoMapUv:U&&_(T.aoMap.channel),lightMapUv:Et&&_(T.lightMap.channel),bumpMapUv:Ce&&_(T.bumpMap.channel),normalMapUv:rt&&_(T.normalMap.channel),displacementMapUv:Te&&_(T.displacementMap.channel),emissiveMapUv:Ye&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:Ge&&_(T.roughnessMap.channel),anisotropyMapUv:Y&&_(T.anisotropyMap.channel),clearcoatMapUv:Q&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(T.sheenRoughnessMap.channel),specularMapUv:De&&_(T.specularMap.channel),specularColorMapUv:he&&_(T.specularColorMap.channel),specularIntensityMapUv:He&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:me&&_(T.thicknessMap.channel),alphaMapUv:ye&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||ut),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(Fe||ye),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Fe&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ii,flipSided:T.side===Mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&T.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(g(S,T),y(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function g(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const S=x[T.type];let C;if(S){const H=fi[S];C=ow.clone(H.uniforms)}else C=T.uniforms;return C}function R(T,S){let C;for(let H=0,G=u.length;H<G;H++){const Z=u[H];if(Z.cacheKey===S){C=Z,++C.usedTimes;break}}return C===void 0&&(C=new P3(t,S,T,r),u.push(C)),C}function w(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:D}}function H3(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function G3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function av(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rv(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(d,h,p,x,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,x,_,m){const f=s(d,h,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):n.push(f)}function l(d,h,p,x,_,m){const f=s(d,h,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||G3),i.length>1&&i.sort(h||av),a.length>1&&a.sort(h||av)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function V3(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new rv,t.set(i,[s])):a>=r.length?(s=new rv,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function k3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function j3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let X3=0;function W3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function q3(t){const e=new k3,n=j3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new Mt,s=new Mt;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,_=0,m=0,f=0,g=0,y=0,M=0,R=0,w=0,A=0;c.sort(W3);for(let T=0,S=c.length;T<S;T++){const C=c[T],H=C.color,G=C.intensity,Z=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=H.r*G,d+=H.g*G,h+=H.b*G;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],G);A++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,z=n.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=O,p++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(H).multiplyScalar(G),O.distance=Z,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[_]=O;const k=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,k.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=k.matrix,C.castShadow){const z=n.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=q,M++}_++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(H).multiplyScalar(G),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=O,m++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const k=C.shadow,z=n.get(C);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=C.shadow.matrix,y++}i.point[x]=O,x++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(G),O.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[f]=O,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==g||D.numPointShadows!==y||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.directionalLength=p,D.pointLength=x,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=g,D.numPointShadows=y,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=A,i.version=X3++)}function l(c,u){let d=0,h=0,p=0,x=0,_=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const y=c[f];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),s.identity(),r.copy(y.matrixWorld),r.premultiply(m),s.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function sv(t){const e=new q3(t),n=[],i=[];function a(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function s(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Y3(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new sv(t),e.set(a,[o])):r>=s.length?(o=new sv(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
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
}`;function $3(t,e,n){let i=new hm;const a=new at,r=new at,s=new vt,o=new vw({depthPacking:CA}),l=new xw,c={},u=n.maxTextureSize,d={[$i]:Mn,[Mn]:$i,[ii]:ii},h=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Z3,fragmentShader:K3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Qn;x.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new si(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ny;let f=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ca),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=f!==Li&&this.type===Li,Z=f===Li&&this.type!==Li;for(let q=0,O=w.length;q<O;q++){const k=w[q],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const J=z.getFrameExtents();if(a.multiply(J),r.copy(z.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/J.x),a.x=r.x*J.x,z.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/J.y),a.y=r.y*J.y,z.mapSize.y=r.y)),z.map===null||G===!0||Z===!0){const Se=this.type!==Li?{minFilter:li,magFilter:li}:{};z.map!==null&&z.map.dispose(),z.map=new pr(a.x,a.y,Se),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const le=z.getViewportCount();for(let Se=0;Se<le;Se++){const de=z.getViewport(Se);s.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),H.viewport(s),z.updateMatrices(k,Se),i=z.getFrustum(),M(A,D,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Li&&g(z,D),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,C)};function g(w,A){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pr(a.x,a.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,D,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,D,p,_,null)}function y(w,A,D,T){let S=null;const C=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const H=S.uuid,G=A.uuid;let Z=c[H];Z===void 0&&(Z={},c[H]=Z);let q=Z[G];q===void 0&&(q=S.clone(),Z[G]=q,A.addEventListener("dispose",R)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,T===Li?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=D}return S}function M(w,A,D,T,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Li)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const G=e.update(w),Z=w.material;if(Array.isArray(Z)){const q=G.groups;for(let O=0,k=q.length;O<k;O++){const z=q[O],J=Z[z.materialIndex];if(J&&J.visible){const le=y(w,J,T,S);w.onBeforeShadow(t,w,A,D,G,le,z),t.renderBufferDirect(D,null,G,le,w,z),w.onAfterShadow(t,w,A,D,G,le,z)}}}else if(Z.visible){const q=y(w,Z,T,S);w.onBeforeShadow(t,w,A,D,G,q,null),t.renderBufferDirect(D,null,G,q,w,null),w.onAfterShadow(t,w,A,D,G,q,null)}}const H=w.children;for(let G=0,Z=H.length;G<Z;G++)M(H[G],A,D,T,S)}function R(w){w.target.removeEventListener("dispose",R);for(const D in c){const T=c[D],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const Q3={[ch]:uh,[fh]:ph,[dh]:mh,[bs]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:bs};function J3(t,e){function n(){let L=!1;const me=new vt;let ae=null;const ye=new vt(0,0,0,0);return{setMask:function(re){ae!==re&&!L&&(t.colorMask(re,re,re,re),ae=re)},setLocked:function(re){L=re},setClear:function(re,te,Ee,Ve,Be){Be===!0&&(re*=Ve,te*=Ve,Ee*=Ve),me.set(re,te,Ee,Ve),ye.equals(me)===!1&&(t.clearColor(re,te,Ee,Ve),ye.copy(me))},reset:function(){L=!1,ae=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,me=!1,ae=null,ye=null,re=null;return{setReversed:function(te){if(me!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),me=te;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return me},setTest:function(te){te?ue(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(te){ae!==te&&!L&&(t.depthMask(te),ae=te)},setFunc:function(te){if(me&&(te=Q3[te]),ye!==te){switch(te){case ch:t.depthFunc(t.NEVER);break;case uh:t.depthFunc(t.ALWAYS);break;case fh:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case dh:t.depthFunc(t.EQUAL);break;case hh:t.depthFunc(t.GEQUAL);break;case ph:t.depthFunc(t.GREATER);break;case mh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=te}},setLocked:function(te){L=te},setClear:function(te){re!==te&&(me&&(te=1-te),t.clearDepth(te),re=te)},reset:function(){L=!1,ae=null,ye=null,re=null,me=!1}}}function a(){let L=!1,me=null,ae=null,ye=null,re=null,te=null,Ee=null,Ve=null,Be=null;return{setTest:function(Pe){L||(Pe?ue(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Pe){me!==Pe&&!L&&(t.stencilMask(Pe),me=Pe)},setFunc:function(Pe,Qt,Ht){(ae!==Pe||ye!==Qt||re!==Ht)&&(t.stencilFunc(Pe,Qt,Ht),ae=Pe,ye=Qt,re=Ht)},setOp:function(Pe,Qt,Ht){(te!==Pe||Ee!==Qt||Ve!==Ht)&&(t.stencilOp(Pe,Qt,Ht),te=Pe,Ee=Qt,Ve=Ht)},setLocked:function(Pe){L=Pe},setClear:function(Pe){Be!==Pe&&(t.clearStencil(Pe),Be=Pe)},reset:function(){L=!1,me=null,ae=null,ye=null,re=null,te=null,Ee=null,Ve=null,Be=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],x=null,_=!1,m=null,f=null,g=null,y=null,M=null,R=null,w=null,A=new qe(0,0,0),D=0,T=!1,S=null,C=null,H=null,G=null,Z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=k>=2);let J=null,le={};const Se=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ne=new vt().fromArray(Se),j=new vt().fromArray(de);function K(L,me,ae,ye){const re=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<ae;Ee++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(me+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return te}const fe={};fe[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(bs),Ce(!1),rt(n0),ue(t.CULL_FACE),U(Ca);function ue(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function _e(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Oe(L,me){return d[L]!==me?(t.bindFramebuffer(L,me),d[L]=me,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function se(L,me){let ae=p,ye=!1;if(L){ae=h.get(me),ae===void 0&&(ae=[],h.set(me,ae));const re=L.textures;if(ae.length!==re.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ee=re.length;te<Ee;te++)ae[te]=t.COLOR_ATTACHMENT0+te;ae.length=re.length,ye=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ae)}function Fe(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const Xe={[Qa]:t.FUNC_ADD,[nA]:t.FUNC_SUBTRACT,[iA]:t.FUNC_REVERSE_SUBTRACT};Xe[aA]=t.MIN,Xe[rA]=t.MAX;const ze={[sA]:t.ZERO,[oA]:t.ONE,[lA]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[pA]:t.SRC_ALPHA_SATURATE,[dA]:t.DST_COLOR,[uA]:t.DST_ALPHA,[cA]:t.ONE_MINUS_SRC_COLOR,[lh]:t.ONE_MINUS_SRC_ALPHA,[hA]:t.ONE_MINUS_DST_COLOR,[fA]:t.ONE_MINUS_DST_ALPHA,[mA]:t.CONSTANT_COLOR,[gA]:t.ONE_MINUS_CONSTANT_COLOR,[vA]:t.CONSTANT_ALPHA,[xA]:t.ONE_MINUS_CONSTANT_ALPHA};function U(L,me,ae,ye,re,te,Ee,Ve,Be,Pe){if(L===Ca){_===!0&&(_e(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),L!==tA){if(L!==m||Pe!==T){if((f!==Qa||M!==Qa)&&(t.blendEquation(t.FUNC_ADD),f=Qa,M=Qa),Pe)switch(L){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case i0:t.blendFunc(t.ONE,t.ONE);break;case a0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case i0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case a0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,R=null,w=null,A.set(0,0,0),D=0,m=L,T=Pe}return}re=re||me,te=te||ae,Ee=Ee||ye,(me!==f||re!==M)&&(t.blendEquationSeparate(Xe[me],Xe[re]),f=me,M=re),(ae!==g||ye!==y||te!==R||Ee!==w)&&(t.blendFuncSeparate(ze[ae],ze[ye],ze[te],ze[Ee]),g=ae,y=ye,R=te,w=Ee),(Ve.equals(A)===!1||Be!==D)&&(t.blendColor(Ve.r,Ve.g,Ve.b,Be),A.copy(Ve),D=Be),m=L,T=!1}function Et(L,me){L.side===ii?_e(t.CULL_FACE):ue(t.CULL_FACE);let ae=L.side===Mn;me&&(ae=!ae),Ce(ae),L.blending===cs&&L.transparent===!1?U(Ca):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){S!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),S=L)}function rt(L){L!==JT?(ue(t.CULL_FACE),L!==C&&(L===n0?t.cullFace(t.BACK):L===eA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),C=L}function Te(L){L!==H&&(O&&t.lineWidth(L),H=L)}function Ye(L,me,ae){L?(ue(t.POLYGON_OFFSET_FILL),(G!==me||Z!==ae)&&(t.polygonOffset(me,ae),G=me,Z=ae)):_e(t.POLYGON_OFFSET_FILL)}function Re(L){L?ue(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function Ge(L){L===void 0&&(L=t.TEXTURE0+q-1),J!==L&&(t.activeTexture(L),J=L)}function ut(L,me,ae){ae===void 0&&(J===null?ae=t.TEXTURE0+q-1:ae=J);let ye=le[ae];ye===void 0&&(ye={type:void 0,texture:void 0},le[ae]=ye),(ye.type!==L||ye.texture!==me)&&(J!==ae&&(t.activeTexture(ae),J=ae),t.bindTexture(L,me||fe[L]),ye.type=L,ye.texture=me)}function N(){const L=le[J];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){Ne.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function we(L){j.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function De(L,me){let ae=c.get(me);ae===void 0&&(ae=new WeakMap,c.set(me,ae));let ye=ae.get(L);ye===void 0&&(ye=t.getUniformBlockIndex(me,L.name),ae.set(L,ye))}function he(L,me){const ye=c.get(me).get(L);l.get(me)!==ye&&(t.uniformBlockBinding(me,ye,L.__bindingPointIndex),l.set(me,ye))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},J=null,le={},d={},h=new WeakMap,p=[],x=null,_=!1,m=null,f=null,g=null,y=null,M=null,R=null,w=null,A=new qe(0,0,0),D=0,T=!1,S=null,C=null,H=null,G=null,Z=null,Ne.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:_e,bindFramebuffer:Oe,drawBuffers:se,useProgram:Fe,setBlending:U,setMaterial:Et,setFlipSided:Ce,setCullFace:rt,setLineWidth:Te,setPolygonOffset:Ye,setScissorTest:Re,activeTexture:Ge,bindTexture:ut,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:be,texImage3D:ee,updateUBOMapping:De,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:pe,texSubImage2D:$,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:ve,viewport:we,reset:He}}function eN(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return p?new OffscreenCanvas(N,b):qo("canvas")}function _(N,b,V){let $=1;const ie=ut(N);if((ie.width>V||ie.height>V)&&($=V/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Y=Math.floor($*ie.width),Q=Math.floor($*ie.height);d===void 0&&(d=x(Y,Q));const oe=b?x(Y,Q):d;return oe.width=Y,oe.height=Q,oe.getContext("2d").drawImage(N,0,0,Y,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Q+")."),oe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function m(N){return N.generateMipmaps}function f(N){t.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,b,V,$,ie=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Y=b;if(b===t.RED&&(V===t.FLOAT&&(Y=t.R32F),V===t.HALF_FLOAT&&(Y=t.R16F),V===t.UNSIGNED_BYTE&&(Y=t.R8)),b===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Y=t.R8UI),V===t.UNSIGNED_SHORT&&(Y=t.R16UI),V===t.UNSIGNED_INT&&(Y=t.R32UI),V===t.BYTE&&(Y=t.R8I),V===t.SHORT&&(Y=t.R16I),V===t.INT&&(Y=t.R32I)),b===t.RG&&(V===t.FLOAT&&(Y=t.RG32F),V===t.HALF_FLOAT&&(Y=t.RG16F),V===t.UNSIGNED_BYTE&&(Y=t.RG8)),b===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Y=t.RG8UI),V===t.UNSIGNED_SHORT&&(Y=t.RG16UI),V===t.UNSIGNED_INT&&(Y=t.RG32UI),V===t.BYTE&&(Y=t.RG8I),V===t.SHORT&&(Y=t.RG16I),V===t.INT&&(Y=t.RG32I)),b===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),V===t.UNSIGNED_INT&&(Y=t.RGB32UI),V===t.BYTE&&(Y=t.RGB8I),V===t.SHORT&&(Y=t.RGB16I),V===t.INT&&(Y=t.RGB32I)),b===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),V===t.UNSIGNED_INT&&(Y=t.RGBA32UI),V===t.BYTE&&(Y=t.RGBA8I),V===t.SHORT&&(Y=t.RGBA16I),V===t.INT&&(Y=t.RGBA32I)),b===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),b===t.RGBA){const Q=ie?cu:tt.getTransfer($);V===t.FLOAT&&(Y=t.RGBA32F),V===t.HALF_FLOAT&&(Y=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Y=Q===pt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(N,b){let V;return N?b===null||b===hr||b===jo?V=t.DEPTH24_STENCIL8:b===Hi?V=t.DEPTH32F_STENCIL8:b===ko&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hr||b===jo?V=t.DEPTH_COMPONENT24:b===Hi?V=t.DEPTH_COMPONENT32F:b===ko&&(V=t.DEPTH_COMPONENT16),V}function R(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==li&&N.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function w(N){const b=N.target;b.removeEventListener("dispose",w),D(b),b.isVideoTexture&&u.delete(b)}function A(N){const b=N.target;b.removeEventListener("dispose",A),S(b)}function D(N){const b=i.get(N);if(b.__webglInit===void 0)return;const V=N.source,$=h.get(V);if($){const ie=$[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(N),Object.keys($).length===0&&h.delete(V)}i.remove(N)}function T(N){const b=i.get(N);t.deleteTexture(b.__webglTexture);const V=N.source,$=h.get(V);delete $[b.__cacheKey],s.memory.textures--}function S(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let ie=0;ie<b.__webglFramebuffer[$].length;ie++)t.deleteFramebuffer(b.__webglFramebuffer[$][ie]);else t.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)t.deleteFramebuffer(b.__webglFramebuffer[$]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=N.textures;for(let $=0,ie=V.length;$<ie;$++){const Y=i.get(V[$]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(V[$])}i.remove(N)}let C=0;function H(){C=0}function G(){const N=C;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),C+=1,N}function Z(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function q(N,b){const V=i.get(N);if(N.isVideoTexture&&Re(N),N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){const $=N.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,N,b);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+b)}function O(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){fe(V,N,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+b)}function k(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){fe(V,N,b);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+b)}function z(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){ue(V,N,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+b)}const J={[lu]:t.REPEAT,[er]:t.CLAMP_TO_EDGE,[xh]:t.MIRRORED_REPEAT},le={[li]:t.NEAREST,[wA]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[pi]:t.LINEAR,[Tf]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},Se={[DA]:t.NEVER,[zA]:t.ALWAYS,[UA]:t.LESS,[Vy]:t.LEQUAL,[LA]:t.EQUAL,[FA]:t.GEQUAL,[OA]:t.GREATER,[PA]:t.NOTEQUAL};function de(N,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===Tf||b.magFilter===Fl||b.magFilter===tr||b.minFilter===pi||b.minFilter===Tf||b.minFilter===Fl||b.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,J[b.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,J[b.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,J[b.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,le[b.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===li||b.minFilter!==Fl&&b.minFilter!==tr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(N,b){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",w));const $=b.source;let ie=h.get($);ie===void 0&&(ie={},h.set($,ie));const Y=Z(b);if(Y!==N.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ie[Y].usedTimes++;const Q=ie[N.__cacheKey];Q!==void 0&&(ie[N.__cacheKey].usedTimes--,Q.usedTimes===0&&T(b)),N.__cacheKey=Y,N.__webglTexture=ie[Y].texture}return V}function j(N,b,V){return Math.floor(Math.floor(N/V)/b)}function K(N,b,V,$){const Y=N.updateRanges;if(Y.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,V,$,b.data);else{Y.sort((ee,ve)=>ee.start-ve.start);let Q=0;for(let ee=1;ee<Y.length;ee++){const ve=Y[Q],we=Y[ee],De=ve.start+ve.count,he=j(we.start,b.width,4),He=j(ve.start,b.width,4);we.start<=De+1&&he===He&&j(we.start+we.count-1,b.width,4)===he?ve.count=Math.max(ve.count,we.start+we.count-ve.start):(++Q,Y[Q]=we)}Y.length=Q+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),pe=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ee=0,ve=Y.length;ee<ve;ee++){const we=Y[ee],De=Math.floor(we.start/4),he=Math.ceil(we.count/4),He=De%b.width,L=Math.floor(De/b.width),me=he,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,He,L,me,ae,V,$,b.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function fe(N,b,V){let $=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=t.TEXTURE_3D);const ie=Ne(N,b),Y=b.source;n.bindTexture($,N.__webglTexture,t.TEXTURE0+V);const Q=i.get(Y);if(Y.version!==Q.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const oe=tt.getPrimaries(tt.workingColorSpace),pe=b.colorSpace===ga?null:tt.getPrimaries(b.colorSpace),be=b.colorSpace===ga||oe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ee=_(b.image,!1,a.maxTextureSize);ee=Ge(b,ee);const ve=r.convert(b.format,b.colorSpace),we=r.convert(b.type);let De=y(b.internalFormat,ve,we,b.colorSpace,b.isVideoTexture);de($,b);let he;const He=b.mipmaps,L=b.isVideoTexture!==!0,me=Q.__version===void 0||ie===!0,ae=Y.dataReady,ye=R(b,ee);if(b.isDepthTexture)De=M(b.format===Wo,b.type),me&&(L?n.texStorage2D(t.TEXTURE_2D,1,De,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,De,ee.width,ee.height,0,ve,we,null));else if(b.isDataTexture)if(He.length>0){L&&me&&n.texStorage2D(t.TEXTURE_2D,ye,De,He[0].width,He[0].height);for(let re=0,te=He.length;re<te;re++)he=He[re],L?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,ve,we,he.data):n.texImage2D(t.TEXTURE_2D,re,De,he.width,he.height,0,ve,we,he.data);b.generateMipmaps=!1}else L?(me&&n.texStorage2D(t.TEXTURE_2D,ye,De,ee.width,ee.height),ae&&K(b,ee,ve,we)):n.texImage2D(t.TEXTURE_2D,0,De,ee.width,ee.height,0,ve,we,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,De,He[0].width,He[0].height,ee.depth);for(let re=0,te=He.length;re<te;re++)if(he=He[re],b.format!==ri)if(ve!==null)if(L){if(ae)if(b.layerUpdates.size>0){const Ee=F0(he.width,he.height,b.format,b.type);for(const Ve of b.layerUpdates){const Be=he.data.subarray(Ve*Ee/he.data.BYTES_PER_ELEMENT,(Ve+1)*Ee/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ve,he.width,he.height,1,ve,Be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ee.depth,ve,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,De,he.width,he.height,ee.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,he.width,he.height,ee.depth,ve,we,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,De,he.width,he.height,ee.depth,0,ve,we,he.data)}else{L&&me&&n.texStorage2D(t.TEXTURE_2D,ye,De,He[0].width,He[0].height);for(let re=0,te=He.length;re<te;re++)he=He[re],b.format!==ri?ve!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,ve,he.data):n.compressedTexImage2D(t.TEXTURE_2D,re,De,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,he.width,he.height,ve,we,he.data):n.texImage2D(t.TEXTURE_2D,re,De,he.width,he.height,0,ve,we,he.data)}else if(b.isDataArrayTexture)if(L){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,De,ee.width,ee.height,ee.depth),ae)if(b.layerUpdates.size>0){const re=F0(ee.width,ee.height,b.format,b.type);for(const te of b.layerUpdates){const Ee=ee.data.subarray(te*re/ee.data.BYTES_PER_ELEMENT,(te+1)*re/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,ve,we,Ee)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,we,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ee.width,ee.height,ee.depth,0,ve,we,ee.data);else if(b.isData3DTexture)L?(me&&n.texStorage3D(t.TEXTURE_3D,ye,De,ee.width,ee.height,ee.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,we,ee.data)):n.texImage3D(t.TEXTURE_3D,0,De,ee.width,ee.height,ee.depth,0,ve,we,ee.data);else if(b.isFramebufferTexture){if(me)if(L)n.texStorage2D(t.TEXTURE_2D,ye,De,ee.width,ee.height);else{let re=ee.width,te=ee.height;for(let Ee=0;Ee<ye;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,De,re,te,0,ve,we,null),re>>=1,te>>=1}}else if(He.length>0){if(L&&me){const re=ut(He[0]);n.texStorage2D(t.TEXTURE_2D,ye,De,re.width,re.height)}for(let re=0,te=He.length;re<te;re++)he=He[re],L?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ve,we,he):n.texImage2D(t.TEXTURE_2D,re,De,ve,we,he);b.generateMipmaps=!1}else if(L){if(me){const re=ut(ee);n.texStorage2D(t.TEXTURE_2D,ye,De,re.width,re.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,we,ee)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,we,ee);m(b)&&f($),Q.__version=Y.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ue(N,b,V){if(b.image.length!==6)return;const $=Ne(N,b),ie=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+V);const Y=i.get(ie);if(ie.version!==Y.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const Q=tt.getPrimaries(tt.workingColorSpace),oe=b.colorSpace===ga?null:tt.getPrimaries(b.colorSpace),pe=b.colorSpace===ga||Q===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!be&&!ee?ve[te]=_(b.image[te],!0,a.maxCubemapSize):ve[te]=ee?b.image[te].image:b.image[te],ve[te]=Ge(b,ve[te]);const we=ve[0],De=r.convert(b.format,b.colorSpace),he=r.convert(b.type),He=y(b.internalFormat,De,he,b.colorSpace),L=b.isVideoTexture!==!0,me=Y.__version===void 0||$===!0,ae=ie.dataReady;let ye=R(b,we);de(t.TEXTURE_CUBE_MAP,b);let re;if(be){L&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,He,we.width,we.height);for(let te=0;te<6;te++){re=ve[te].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];b.format!==ri?De!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Ve.width,Ve.height,De,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,He,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Ve.width,Ve.height,De,he,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,He,Ve.width,Ve.height,0,De,he,Ve.data)}}}else{if(re=b.mipmaps,L&&me){re.length>0&&ye++;const te=ut(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,He,te.width,te.height)}for(let te=0;te<6;te++)if(ee){L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,De,he,ve[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ve[te].width,ve[te].height,0,De,he,ve[te].data);for(let Ee=0;Ee<re.length;Ee++){const Be=re[Ee].image[te].image;L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Be.width,Be.height,De,he,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,He,Be.width,Be.height,0,De,he,Be.data)}}else{L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,he,ve[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,De,he,ve[te]);for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,De,he,Ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,He,De,he,Ve.image[te])}}}m(b)&&f(t.TEXTURE_CUBE_MAP),Y.__version=ie.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function _e(N,b,V,$,ie,Y){const Q=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),pe=y(V.internalFormat,Q,oe,V.colorSpace),be=i.get(b),ee=i.get(V);if(ee.__renderTarget=b,!be.__hasExternalTextures){const ve=Math.max(1,b.width>>Y),we=Math.max(1,b.height>>Y);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Y,pe,ve,we,b.depth,0,Q,oe,null):n.texImage2D(ie,Y,pe,ve,we,0,Q,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ye(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ie,ee.__webglTexture,0,Te(b)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ie,ee.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(N,b,V){if(t.bindRenderbuffer(t.RENDERBUFFER,N),b.depthBuffer){const $=b.depthTexture,ie=$&&$.isDepthTexture?$.type:null,Y=M(b.stencilBuffer,ie),Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Te(b);Ye(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,Y,b.width,b.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,Y,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Y,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,N)}else{const $=b.textures;for(let ie=0;ie<$.length;ie++){const Y=$[ie],Q=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),pe=y(Y.internalFormat,Q,oe,Y.colorSpace),be=Te(b);V&&Ye(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,pe,b.width,b.height):Ye(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,pe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,pe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const ie=$.__webglTexture,Y=Te(b);if(b.depthTexture.format===Xo)Ye(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Wo)Ye(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const b=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=$}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=N.texture.mipmaps;$&&$.length>0?se(b.__webglFramebuffer[0],N):se(b.__webglFramebuffer,N)}else if(V){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=t.createRenderbuffer(),Oe(b.__webglDepthbuffer[$],N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}else{const $=N.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Oe(b.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(N,b,V){const $=i.get(N);b!==void 0&&_e($.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Fe(N)}function ze(N){const b=N.texture,V=i.get(N),$=i.get(b);N.addEventListener("dispose",A);const ie=N.textures,Y=N.isWebGLCubeRenderTarget===!0,Q=ie.length>1;if(Q||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=b.version,s.memory.textures++),Y){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let pe=0;pe<b.mipmaps.length;pe++)V.__webglFramebuffer[oe][pe]=t.createFramebuffer()}else V.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)V.__webglFramebuffer[oe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Q)for(let oe=0,pe=ie.length;oe<pe;oe++){const be=i.get(ie[oe]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),s.memory.textures++)}if(N.samples>0&&Ye(N)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const pe=ie[oe];V.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const be=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),ve=y(pe.internalFormat,be,ee,pe.colorSpace,N.isXRRenderTarget===!0),we=Te(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ve,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(V.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),de(t.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)_e(V.__webglFramebuffer[oe][pe],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else _e(V.__webglFramebuffer[oe],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(b)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){for(let oe=0,pe=ie.length;oe<pe;oe++){const be=ie[oe],ee=i.get(be);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),de(t.TEXTURE_2D,be),_e(V.__webglFramebuffer,N,be,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(be)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(oe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,$.__webglTexture),de(oe,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)_e(V.__webglFramebuffer[pe],N,b,t.COLOR_ATTACHMENT0,oe,pe);else _e(V.__webglFramebuffer,N,b,t.COLOR_ATTACHMENT0,oe,0);m(b)&&f(oe),n.unbindTexture()}N.depthBuffer&&Fe(N)}function U(N){const b=N.textures;for(let V=0,$=b.length;V<$;V++){const ie=b[V];if(m(ie)){const Y=g(N),Q=i.get(ie).__webglTexture;n.bindTexture(Y,Q),f(Y),n.unbindTexture()}}}const Et=[],Ce=[];function rt(N){if(N.samples>0){if(Ye(N)===!1){const b=N.textures,V=N.width,$=N.height;let ie=t.COLOR_BUFFER_BIT;const Y=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(N),oe=b.length>1;if(oe)for(let be=0;be<b.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const pe=N.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let be=0;be<b.length;be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[be]);const ee=i.get(b[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,ie,t.NEAREST),l===!0&&(Et.length=0,Ce.length=0,Et.push(t.COLOR_ATTACHMENT0+be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Et.push(Y),Ce.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<b.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Q.__webglColorRenderbuffer[be]);const ee=i.get(b[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const b=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Te(N){return Math.min(a.maxSamples,N.samples)}function Ye(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(N){const b=s.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function Ge(N,b){const V=N.colorSpace,$=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==As&&V!==ga&&(tt.getTransfer(V)===pt?($!==ri||ie!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Xe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ye}function tN(t,e){function n(i,a=ga){let r;const s=tt.getTransfer(a);if(i===_i)return t.UNSIGNED_BYTE;if(i===rm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Py)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ly)return t.BYTE;if(i===Oy)return t.SHORT;if(i===ko)return t.UNSIGNED_SHORT;if(i===am)return t.INT;if(i===hr)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===hl)return t.HALF_FLOAT;if(i===Fy)return t.ALPHA;if(i===zy)return t.RGB;if(i===ri)return t.RGBA;if(i===Xo)return t.DEPTH_COMPONENT;if(i===Wo)return t.DEPTH_STENCIL;if(i===By)return t.RED;if(i===om)return t.RED_INTEGER;if(i===Iy)return t.RG;if(i===lm)return t.RG_INTEGER;if(i===cm)return t.RGBA_INTEGER;if(i===Tc||i===Ac||i===wc||i===Rc)if(s===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===yh||i===Sh||i===Mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Eh||i===Th)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bh||i===Eh)return s===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Th)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ah||i===wh||i===Rh||i===Ch||i===Nh||i===Dh||i===Uh||i===Lh||i===Oh||i===Ph||i===Fh||i===zh||i===Bh||i===Ih)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ah)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Hh||i===Gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cc)return s===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hy||i===Vh||i===kh||i===jh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iN=`
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

}`;class aN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new hn,r=e.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Oa({vertexShader:nN,fragmentShader:iN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new zu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rN extends zs{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const _=new aN,m=n.getContextAttributes();let f=null,g=null;const y=[],M=[],R=new at;let w=null;const A=new Sn;A.viewport=new vt;const D=new Sn;D.viewport=new vt;const T=[A,D],S=new Aw;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=y[j];return K===void 0&&(K=new Yf,y[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=y[j];return K===void 0&&(K=new Yf,y[j]=K),K.getGripSpace()},this.getHand=function(j){let K=y[j];return K===void 0&&(K=new Yf,y[j]=K),K.getHandSpace()};function G(j){const K=M.indexOf(j.inputSource);if(K===-1)return;const fe=y[K];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||s),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",q);for(let j=0;j<y.length;j++){const K=M[j];K!==null&&(M[j]=null,y[j].disconnect(K))}C=null,H=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,a=null,g=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(f=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ue=null,_e=null;m.depth&&(_e=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=m.stencil?Wo:Xo,ue=m.stencil?jo:hr);const Oe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(a,n),h=d.createProjectionLayer(Oe),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new pr(h.textureWidth,h.textureHeight,{format:ri,type:_i,depthTexture:new eS(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new pr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ne.setContext(a),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(j){for(let K=0;K<j.removed.length;K++){const fe=j.removed[K],ue=M.indexOf(fe);ue>=0&&(M[ue]=null,y[ue].disconnect(fe))}for(let K=0;K<j.added.length;K++){const fe=j.added[K];let ue=M.indexOf(fe);if(ue===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=M.length){M.push(fe),ue=Oe;break}else if(M[Oe]===null){M[Oe]=fe,ue=Oe;break}if(ue===-1)break}const _e=y[ue];_e&&_e.connect(fe)}}const O=new F,k=new F;function z(j,K,fe){O.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(fe.matrixWorld);const ue=O.distanceTo(k),_e=K.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,se=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],ze=(_e[9]-1)/_e[5],U=(_e[8]-1)/_e[0],Et=(Oe[8]+1)/Oe[0],Ce=se*U,rt=se*Et,Te=ue/(-U+Et),Ye=Te*-U;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),_e[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Re=se+Te,Ge=Fe+Te,ut=Ce-Ye,N=rt+(ue-Ye),b=Xe*Fe/Ge*Re,V=ze*Fe/Ge*Re;j.projectionMatrix.makePerspective(ut,N,b,V,Re,Ge),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let K=j.near,fe=j.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),S.near=D.near=A.near=K,S.far=D.far=A.far=fe,(C!==S.near||H!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,H=S.far),A.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,S.layers.mask=A.layers.mask|D.layers.mask;const ue=j.parent,_e=S.cameras;J(S,ue);for(let Oe=0;Oe<_e.length;Oe++)J(_e[Oe],ue);_e.length===2?z(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),le(j,S,ue)};function le(j,K,fe){fe===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Se=null;function de(j,K){if(u=K.getViewerPose(c||s),x=K,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ue=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let se=0;se<fe.length;se++){const Fe=fe[se];let Xe=null;if(p!==null)Xe=p.getViewport(Fe);else{const U=d.getViewSubImage(h,Fe);Xe=U.viewport,se===0&&(e.setRenderTargetTextures(g,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(g))}let ze=T[se];ze===void 0&&(ze=new Sn,ze.layers.enable(se),ze.viewport=new vt,T[se]=ze),ze.matrix.fromArray(Fe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Fe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),se===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(ze)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const se=d.getDepthInformation(fe[0]);se&&se.isValid&&se.texture&&_.init(e,se,a.renderState)}}for(let fe=0;fe<y.length;fe++){const ue=M[fe],_e=y[fe];ue!==null&&_e!==void 0&&_e.update(ue,K,c||s)}Se&&Se(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Ne=new lS;Ne.setAnimationLoop(de),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const Wa=new yi,sN=new Mt;function oN(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ky(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,g,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),y=g.envMap,M=g.envMapRotation;y&&(m.envMap.value=y,Wa.copy(M),Wa.x*=-1,Wa.y*=-1,Wa.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wa.y*=-1,Wa.z*=-1),m.envMapRotation.value.setFromMatrix4(sN.makeRotationFromEuler(Wa)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function lN(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const M=y.program;i.uniformBlockBinding(g,M)}function c(g,y){let M=a[g.id];M===void 0&&(x(g),M=u(g),a[g.id]=M,g.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(g,R);const w=e.render.frame;r[g.id]!==w&&(h(g),r[g.id]=w)}function u(g){const y=d();g.__bindingPointIndex=y;const M=t.createBuffer(),R=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=a[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,A=M.length;w<A;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,S=D.length;T<S;T++){const C=D[T];if(p(C,w,T,R)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let q=0;q<G.length;q++){const O=G[q],k=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,H+Z,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,y,M,R){const w=g.value,A=y+"_"+M;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const D=R[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function x(g){const y=g.uniforms;let M=0;const R=16;for(let A=0,D=y.length;A<D;A++){const T=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,C=T.length;S<C;S++){const H=T[S],G=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,q=G.length;Z<q;Z++){const O=G[Z],k=_(O),z=M%R,J=z%k.boundary,le=z+J;M+=J,le!==0&&R-le<k.storage&&(M+=R-le),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=k.storage}}}const w=M%R;return w>0&&(M+=R-w),g.__size=M,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const M=s.indexOf(y.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function f(){for(const g in a)t.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}class hS{constructor(e={}){const{canvas:n=IA(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const g=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=en;let w=0,A=0,D=null,T=-1,S=null;const C=new vt,H=new vt;let G=null;const Z=new qe(0);let q=0,O=n.width,k=n.height,z=1,J=null,le=null;const Se=new vt(0,0,O,k),de=new vt(0,0,O,k);let Ne=!1;const j=new hm;let K=!1,fe=!1;const ue=new Mt,_e=new Mt,Oe=new F,se=new vt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ze(){return D===null?z:1}let U=i;function Et(E,B){return n.getContext(E,B)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",te,!1),U===null){const B="webgl2";if(U=Et(B,E),U===null)throw Et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ce,rt,Te,Ye,Re,Ge,ut,N,b,V,$,ie,Y,Q,oe,pe,be,ee,ve,we,De,he,He,L;function me(){Ce=new _C(U),Ce.init(),he=new tN(U,Ce),rt=new dC(U,Ce,e,he),Te=new J3(U,Ce),rt.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),Ye=new MC(U),Re=new H3,Ge=new eN(U,Ce,Te,Re,rt,he,Ye),ut=new pC(M),N=new xC(M),b=new Rw(U),He=new uC(U,b),V=new yC(U,b,Ye,He),$=new EC(U,V,b,Ye),ve=new bC(U,rt,Ge),pe=new hC(Re),ie=new I3(M,ut,N,Ce,rt,He,pe),Y=new oN(M,Re),Q=new V3,oe=new Y3(Ce),ee=new cC(M,ut,N,Te,$,p,l),be=new $3(M,$,rt),L=new lN(U,Ye,rt,Te),we=new fC(U,Ce,Ye),De=new SC(U,Ce,Ye),Ye.programs=ie.programs,M.capabilities=rt,M.extensions=Ce,M.properties=Re,M.renderLists=Q,M.shadowMap=be,M.state=Te,M.info=Ye}me();const ae=new rN(M,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(O,k,!1))},this.getSize=function(E){return E.set(O,k)},this.setSize=function(E,B,X=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,k=B,n.width=Math.floor(E*z),n.height=Math.floor(B*z),X===!0&&(n.style.width=E+"px",n.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(O*z,k*z).floor()},this.setDrawingBufferSize=function(E,B,X){O=E,k=B,z=X,n.width=Math.floor(E*X),n.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,B,X,W){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,B,X,W),Te.viewport(C.copy(Se).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,B,X,W){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,B,X,W),Te.scissor(H.copy(de).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){Te.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,X=!0){let W=0;if(E){let I=!1;if(D!==null){const ce=D.texture.format;I=ce===cm||ce===lm||ce===om}if(I){const ce=D.texture.type,xe=ce===_i||ce===hr||ce===ko||ce===jo||ce===rm||ce===sm,Ae=ee.getClearColor(),Me=ee.getClearAlpha(),ke=Ae.r,je=Ae.g,Ue=Ae.b;xe?(x[0]=ke,x[1]=je,x[2]=Ue,x[3]=Me,U.clearBufferuiv(U.COLOR,0,x)):(_[0]=ke,_[1]=je,_[2]=Ue,_[3]=Me,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),Q.dispose(),oe.dispose(),Re.dispose(),ut.dispose(),N.dispose(),$.dispose(),He.dispose(),L.dispose(),ie.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",gm),ae.removeEventListener("sessionend",vm),Ba.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Ye.autoReset,B=be.enabled,X=be.autoUpdate,W=be.needsUpdate,I=be.type;me(),Ye.autoReset=E,be.enabled=B,be.autoUpdate=X,be.needsUpdate=W,be.type=I}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){const B=E.target;B.removeEventListener("dispose",Ee),Ve(B)}function Ve(E){Be(E),Re.remove(E)}function Be(E){const B=Re.get(E).programs;B!==void 0&&(B.forEach(function(X){ie.releaseProgram(X)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,W,I,ce){B===null&&(B=Fe);const xe=I.isMesh&&I.matrixWorld.determinant()<0,Ae=vS(E,B,X,W,I);Te.setMaterial(W,xe);let Me=X.index,ke=1;if(W.wireframe===!0){if(Me=V.getWireframeAttribute(X),Me===void 0)return;ke=2}const je=X.drawRange,Ue=X.attributes.position;let et=je.start*ke,ht=(je.start+je.count)*ke;ce!==null&&(et=Math.max(et,ce.start*ke),ht=Math.min(ht,(ce.start+ce.count)*ke)),Me!==null?(et=Math.max(et,0),ht=Math.min(ht,Me.count)):Ue!=null&&(et=Math.max(et,0),ht=Math.min(ht,Ue.count));const Ut=ht-et;if(Ut<0||Ut===1/0)return;He.setup(I,W,Ae,X,Me);let St,xt=we;if(Me!==null&&(St=b.get(Me),xt=De,xt.setIndex(St)),I.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*ze()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(I.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),Te.setLineWidth(Le*ze()),I.isLineSegments?xt.setMode(U.LINES):I.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else I.isPoints?xt.setMode(U.POINTS):I.isSprite&&xt.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Le=I._multiDrawStarts,Ct=I._multiDrawCounts,ot=I._multiDrawCount,Tn=Me?b.get(Me).bytesPerElement:1,yr=Re.get(W).currentProgram.getUniforms();for(let An=0;An<ot;An++)yr.setValue(U,"_gl_DrawID",An),xt.render(Le[An]/Tn,Ct[An])}else if(I.isInstancedMesh)xt.renderInstances(et,Ut,I.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ct=Math.min(X.instanceCount,Le);xt.renderInstances(et,Ut,Ct)}else xt.render(et,Ut)};function Pe(E,B,X){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,_l(E,B,X),E.side=$i,E.needsUpdate=!0,_l(E,B,X),E.side=ii):_l(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),f=oe.get(X),f.init(B),y.push(f),X.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==X&&E.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const W=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ce=I.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Ae=ce[xe];Pe(Ae,X,I),W.add(Ae)}else Pe(ce,X,I),W.add(ce)}),f=y.pop(),W},this.compileAsync=function(E,B,X=null){const W=this.compile(E,B,X);return new Promise(I=>{function ce(){if(W.forEach(function(xe){Re.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){I(E);return}setTimeout(ce,10)}Ce.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Qt=null;function Ht(E){Qt&&Qt(E)}function gm(){Ba.stop()}function vm(){Ba.start()}const Ba=new lS;Ba.setAnimationLoop(Ht),typeof self<"u"&&Ba.setContext(self),this.setAnimationLoop=function(E){Qt=E,ae.setAnimationLoop(E),E===null?Ba.stop():Ba.start()},ae.addEventListener("sessionstart",gm),ae.addEventListener("sessionend",vm),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,D),f=oe.get(E,y.length),f.init(B),y.push(f),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(_e),fe=this.localClippingEnabled,K=pe.init(this.clippingPlanes,fe),m=Q.get(E,g.length),m.init(),g.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ce=M.xr.getDepthSensingMesh();ce!==null&&Iu(ce,B,-1/0,M.sortObjects)}Iu(E,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(J,le),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&ee.addToRenderList(m,E),this.info.render.frame++,K===!0&&pe.beginShadows();const X=f.state.shadowsArray;be.render(X,E,B),K===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,I=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ce=B.cameras;if(I.length>0)for(let xe=0,Ae=ce.length;xe<Ae;xe++){const Me=ce[xe];_m(W,I,E,Me)}Xe&&ee.render(E);for(let xe=0,Ae=ce.length;xe<Ae;xe++){const Me=ce[xe];xm(m,E,Me,Me.viewport)}}else I.length>0&&_m(W,I,E,B),Xe&&ee.render(E),xm(m,E,B);D!==null&&A===0&&(Ge.updateMultisampleRenderTarget(D),Ge.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(M,E,B),He.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],K===!0&&pe.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Iu(E,B,X,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){W&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const xe=$.update(E),Ae=E.material;Ae.visible&&m.push(E,xe,Ae,X,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const xe=$.update(E),Ae=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),se.copy(xe.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const Me=xe.groups;for(let ke=0,je=Me.length;ke<je;ke++){const Ue=Me[ke],et=Ae[Ue.materialIndex];et&&et.visible&&m.push(E,xe,et,X,se.z,Ue)}}else Ae.visible&&m.push(E,xe,Ae,X,se.z,null)}}const ce=E.children;for(let xe=0,Ae=ce.length;xe<Ae;xe++)Iu(ce[xe],B,X,W)}function xm(E,B,X,W){const I=E.opaque,ce=E.transmissive,xe=E.transparent;f.setupLightsView(X),K===!0&&pe.setGlobalState(M.clippingPlanes,X),W&&Te.viewport(C.copy(W)),I.length>0&&xl(I,B,X),ce.length>0&&xl(ce,B,X),xe.length>0&&xl(xe,B,X),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function _m(E,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new pr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?hl:_i,minFilter:tr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=f.state.transmissionRenderTarget[W.id],xe=W.viewport||C;ce.setSize(xe.z*M.transmissionResolutionScale,xe.w*M.transmissionResolutionScale);const Ae=M.getRenderTarget(),Me=M.getActiveCubeFace(),ke=M.getActiveMipmapLevel();M.setRenderTarget(ce),M.getClearColor(Z),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&ee.render(X);const je=M.toneMapping;M.toneMapping=Na;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),K===!0&&pe.setGlobalState(M.clippingPlanes,W),xl(E,X,W),Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ht=0,Ut=B.length;ht<Ut;ht++){const St=B[ht],xt=St.object,Le=St.geometry,Ct=St.material,ot=St.group;if(Ct.side===ii&&xt.layers.test(W.layers)){const Tn=Ct.side;Ct.side=Mn,Ct.needsUpdate=!0,ym(xt,X,W,Le,Ct,ot),Ct.side=Tn,Ct.needsUpdate=!0,et=!0}}et===!0&&(Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce))}M.setRenderTarget(Ae,Me,ke),M.setClearColor(Z,q),Ue!==void 0&&(W.viewport=Ue),M.toneMapping=je}function xl(E,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let I=0,ce=E.length;I<ce;I++){const xe=E[I],Ae=xe.object,Me=xe.geometry,ke=xe.group;let je=xe.material;je.allowOverride===!0&&W!==null&&(je=W),Ae.layers.test(X.layers)&&ym(Ae,B,X,Me,je,ke)}}function ym(E,B,X,W,I,ce){E.onBeforeRender(M,B,X,W,I,ce),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(M,B,X,W,E,ce),I.transparent===!0&&I.side===ii&&I.forceSinglePass===!1?(I.side=Mn,I.needsUpdate=!0,M.renderBufferDirect(X,B,W,I,E,ce),I.side=$i,I.needsUpdate=!0,M.renderBufferDirect(X,B,W,I,E,ce),I.side=ii):M.renderBufferDirect(X,B,W,I,E,ce),E.onAfterRender(M,B,X,W,I,ce)}function _l(E,B,X){B.isScene!==!0&&(B=Fe);const W=Re.get(E),I=f.state.lights,ce=f.state.shadowsArray,xe=I.state.version,Ae=ie.getParameters(E,I.state,ce,B,X),Me=ie.getProgramCacheKey(Ae);let ke=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?N:ut).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ee),ke=new Map,W.programs=ke);let je=ke.get(Me);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===xe)return Mm(E,Ae),je}else Ae.uniforms=ie.getUniforms(E),E.onBeforeCompile(Ae,M),je=ie.acquireProgram(Ae,Me),ke.set(Me,je),W.uniforms=Ae.uniforms;const Ue=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),Mm(E,Ae),W.needsLights=_S(E),W.lightsStateVersion=xe,W.needsLights&&(Ue.ambientLightColor.value=I.state.ambient,Ue.lightProbe.value=I.state.probe,Ue.directionalLights.value=I.state.directional,Ue.directionalLightShadows.value=I.state.directionalShadow,Ue.spotLights.value=I.state.spot,Ue.spotLightShadows.value=I.state.spotShadow,Ue.rectAreaLights.value=I.state.rectArea,Ue.ltc_1.value=I.state.rectAreaLTC1,Ue.ltc_2.value=I.state.rectAreaLTC2,Ue.pointLights.value=I.state.point,Ue.pointLightShadows.value=I.state.pointShadow,Ue.hemisphereLights.value=I.state.hemi,Ue.directionalShadowMap.value=I.state.directionalShadowMap,Ue.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ue.spotShadowMap.value=I.state.spotShadowMap,Ue.spotLightMatrix.value=I.state.spotLightMatrix,Ue.spotLightMap.value=I.state.spotLightMap,Ue.pointShadowMap.value=I.state.pointShadowMap,Ue.pointShadowMatrix.value=I.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function Sm(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Nc.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Mm(E,B){const X=Re.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function vS(E,B,X,W,I){B.isScene!==!0&&(B=Fe),Ge.resetTextureUnits();const ce=B.fog,xe=W.isMeshStandardMaterial?B.environment:null,Ae=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:As,Me=(W.isMeshStandardMaterial?N:ut).get(W.envMap||xe),ke=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let Ut=Na;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=St!==void 0?St.length:0,Le=Re.get(W),Ct=f.state.lights;if(K===!0&&(fe===!0||E!==S)){const ln=E===S&&W.id===T;pe.setState(W,E,ln)}let ot=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ct.state.version||Le.outputColorSpace!==Ae||I.isBatchedMesh&&Le.batching===!1||!I.isBatchedMesh&&Le.batching===!0||I.isBatchedMesh&&Le.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Le.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Le.instancing===!1||!I.isInstancedMesh&&Le.instancing===!0||I.isSkinnedMesh&&Le.skinning===!1||!I.isSkinnedMesh&&Le.skinning===!0||I.isInstancedMesh&&Le.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Le.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Le.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Le.instancingMorph===!1&&I.morphTexture!==null||Le.envMap!==Me||W.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==pe.numPlanes||Le.numIntersection!==pe.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==je||Le.morphTargets!==Ue||Le.morphNormals!==et||Le.morphColors!==ht||Le.toneMapping!==Ut||Le.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,Le.__version=W.version);let Tn=Le.currentProgram;ot===!0&&(Tn=_l(W,B,I));let yr=!1,An=!1,Hs=!1;const Tt=Tn.getUniforms(),Bn=Le.uniforms;if(Te.useProgram(Tn.program)&&(yr=!0,An=!0,Hs=!0),W.id!==T&&(T=W.id,An=!0),yr||S!==E){Te.buffers.depth.getReversed()?(ue.copy(E.projectionMatrix),GA(ue),VA(ue),Tt.setValue(U,"projectionMatrix",ue)):Tt.setValue(U,"projectionMatrix",E.projectionMatrix),Tt.setValue(U,"viewMatrix",E.matrixWorldInverse);const mn=Tt.map.cameraPosition;mn!==void 0&&mn.setValue(U,Oe.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,An=!0,Hs=!0)}if(I.isSkinnedMesh){Tt.setOptional(U,I,"bindMatrix"),Tt.setOptional(U,I,"bindMatrixInverse");const ln=I.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Tt.setValue(U,"boneTexture",ln.boneTexture,Ge))}I.isBatchedMesh&&(Tt.setOptional(U,I,"batchingTexture"),Tt.setValue(U,"batchingTexture",I._matricesTexture,Ge),Tt.setOptional(U,I,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",I._indirectTexture,Ge),Tt.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",I._colorsTexture,Ge));const In=X.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ve.update(I,X,Tn),(An||Le.receiveShadow!==I.receiveShadow)&&(Le.receiveShadow=I.receiveShadow,Tt.setValue(U,"receiveShadow",I.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bn.envMap.value=Me,Bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),An&&(Tt.setValue(U,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&xS(Bn,Hs),ce&&W.fog===!0&&Y.refreshFogUniforms(Bn,ce),Y.refreshMaterialUniforms(Bn,W,z,k,f.state.transmissionRenderTarget[E.id]),Nc.upload(U,Sm(Le),Bn,Ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nc.upload(U,Sm(Le),Bn,Ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(U,"center",I.center),Tt.setValue(U,"modelViewMatrix",I.modelViewMatrix),Tt.setValue(U,"normalMatrix",I.normalMatrix),Tt.setValue(U,"modelMatrix",I.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let mn=0,Hu=ln.length;mn<Hu;mn++){const Ia=ln[mn];L.update(Ia,Tn),L.bind(Ia,Tn)}}return Tn}function xS(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function _S(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,X){const W=Re.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Re.get(E.texture).__webglTexture=B,Re.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const X=Re.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const yS=U.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){D=E,w=B,A=X;let W=!0,I=null,ce=!1,xe=!1;if(E){const Me=Re.get(E);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)Ge.setupRenderTarget(E);else if(Me.__hasExternalTextures)Ge.rebindTextures(E,Re.get(E.texture).__webglTexture,Re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(Me.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const je=Re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[B])?I=je[B][X]:I=je[B],ce=!0):E.samples>0&&Ge.useMultisampledRTT(E)===!1?I=Re.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?I=je[X]:I=je,C.copy(E.viewport),H.copy(E.scissor),G=E.scissorTest}else C.copy(Se).multiplyScalar(z).floor(),H.copy(de).multiplyScalar(z).floor(),G=Ne;if(X!==0&&(I=yS),Te.bindFramebuffer(U.FRAMEBUFFER,I)&&W&&Te.drawBuffers(E,I),Te.viewport(C),Te.scissor(H),Te.setScissorTest(G),ce){const Me=Re.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,X)}else if(xe){const Me=Re.get(E.texture),ke=B;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,X,ke)}else if(E!==null&&X!==0){const Me=Re.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(E,B,X,W,I,ce,xe,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){Te.bindFramebuffer(U.FRAMEBUFFER,Me);try{const ke=E.textures[Ae],je=ke.format,Ue=ke.type;if(!rt.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&X>=0&&X<=E.height-I&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(B,X,W,I,he.convert(je),he.convert(Ue),ce))}finally{const ke=D!==null?Re.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,W,I,ce,xe,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(B>=0&&B<=E.width-W&&X>=0&&X<=E.height-I){Te.bindFramebuffer(U.FRAMEBUFFER,Me);const ke=E.textures[Ae],je=ke.format,Ue=ke.type;if(!rt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(B,X,W,I,he.convert(je),he.convert(Ue),0);const ht=D!==null?Re.get(D).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ht);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await HA(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(et),U.deleteSync(Ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,X=0){const W=Math.pow(2,-X),I=Math.floor(E.image.width*W),ce=Math.floor(E.image.height*W),xe=B!==null?B.x:0,Ae=B!==null?B.y:0;Ge.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xe,Ae,I,ce),Te.unbindTexture()};const SS=U.createFramebuffer(),MS=U.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,W=null,I=0,ce=null){ce===null&&(I!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=I,I=0):ce=0);let xe,Ae,Me,ke,je,Ue,et,ht,Ut;const St=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(X!==null)xe=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,je=X.min.y,Ue=X.isBox3?X.min.z:0;else{const In=Math.pow(2,-I);xe=Math.floor(St.width*In),Ae=Math.floor(St.height*In),E.isDataArrayTexture?Me=St.depth:E.isData3DTexture?Me=Math.floor(St.depth*In):Me=1,ke=0,je=0,Ue=0}W!==null?(et=W.x,ht=W.y,Ut=W.z):(et=0,ht=0,Ut=0);const xt=he.convert(B.format),Le=he.convert(B.type);let Ct;B.isData3DTexture?(Ge.setTexture3D(B,0),Ct=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ge.setTexture2DArray(B,0),Ct=U.TEXTURE_2D_ARRAY):(Ge.setTexture2D(B,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),Tn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yr=U.getParameter(U.UNPACK_SKIP_PIXELS),An=U.getParameter(U.UNPACK_SKIP_ROWS),Hs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue);const Tt=E.isDataArrayTexture||E.isData3DTexture,Bn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const In=Re.get(E),ln=Re.get(B),mn=Re.get(In.__renderTarget),Hu=Re.get(ln.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hu.__webglFramebuffer);for(let Ia=0;Ia<Me;Ia++)Tt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(E).__webglTexture,I,Ue+Ia),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(B).__webglTexture,ce,Ut+Ia)),U.blitFramebuffer(ke,je,xe,Ae,et,ht,xe,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(I!==0||E.isRenderTargetTexture||Re.has(E)){const In=Re.get(E),ln=Re.get(B);Te.bindFramebuffer(U.READ_FRAMEBUFFER,SS),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,MS);for(let mn=0;mn<Me;mn++)Tt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,In.__webglTexture,I,Ue+mn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,In.__webglTexture,I),Bn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,ce,Ut+mn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,ce),I!==0?U.blitFramebuffer(ke,je,xe,Ae,et,ht,xe,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):Bn?U.copyTexSubImage3D(Ct,ce,et,ht,Ut+mn,ke,je,xe,Ae):U.copyTexSubImage2D(Ct,ce,et,ht,ke,je,xe,Ae);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Bn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ct,ce,et,ht,Ut,xe,Ae,Me,xt,Le,St.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,ce,et,ht,Ut,xe,Ae,Me,xt,St.data):U.texSubImage3D(Ct,ce,et,ht,Ut,xe,Ae,Me,xt,Le,St):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ce,et,ht,xe,Ae,xt,Le,St.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ce,et,ht,St.width,St.height,xt,St.data):U.texSubImage2D(U.TEXTURE_2D,ce,et,ht,xe,Ae,xt,Le,St);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yr),U.pixelStorei(U.UNPACK_SKIP_ROWS,An),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hs),ce===0&&B.generateMipmaps&&U.generateMipmap(Ct),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,W=null,I=0){return us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,W,I)},this.initRenderTarget=function(E){Re.get(E).__webglFramebuffer===void 0&&Ge.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ge.setTextureCube(E,0):E.isData3DTexture?Ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ge.setTexture2DArray(E,0):Ge.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){w=0,A=0,D=null,Te.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const cN=/^[og]\s*(.+)?/,uN=/^mtllib /,fN=/^usemtl /,dN=/^usemap /,ov=/\s+/,lv=new F,sd=new F,cv=new F,uv=new F,Gn=new F,lc=new qe;function hN(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,r){const s=this._finalize(!1);s&&(s.inherited||s.groupCount<=0)&&this.materials.splice(s.index,1);const o={index:this.materials.length,name:a||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:s!==void 0?s.smooth:this.smooth,groupStart:s!==void 0?s.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),a&&this.materials.length>1)for(let s=this.materials.length-1;s>=0;s--)this.materials[s].groupCount<=0&&this.materials.splice(s,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const a=i.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const a=this.vertices,r=this.object.geometry.vertices;r.push(a[e+0],a[e+1],a[e+2]),r.push(a[n+0],a[n+1],a[n+2]),r.push(a[i+0],a[i+1],a[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const a=this.normals,r=this.object.geometry.normals;r.push(a[e+0],a[e+1],a[e+2]),r.push(a[n+0],a[n+1],a[n+2]),r.push(a[i+0],a[i+1],a[i+2])},addFaceNormal:function(e,n,i){const a=this.vertices,r=this.object.geometry.normals;lv.fromArray(a,e),sd.fromArray(a,n),cv.fromArray(a,i),Gn.subVectors(cv,sd),uv.subVectors(lv,sd),Gn.cross(uv),Gn.normalize(),r.push(Gn.x,Gn.y,Gn.z),r.push(Gn.x,Gn.y,Gn.z),r.push(Gn.x,Gn.y,Gn.z)},addColor:function(e,n,i){const a=this.colors,r=this.object.geometry.colors;a[e]!==void 0&&r.push(a[e+0],a[e+1],a[e+2]),a[n]!==void 0&&r.push(a[n+0],a[n+1],a[n+2]),a[i]!==void 0&&r.push(a[i+0],a[i+1],a[i+2])},addUV:function(e,n,i){const a=this.uvs,r=this.object.geometry.uvs;r.push(a[e+0],a[e+1]),r.push(a[n+0],a[n+1]),r.push(a[i+0],a[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,a,r,s,o,l,c){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(n,u),p=this.parseVertexIndex(i,u);if(this.addVertex(d,h,p),this.addColor(d,h,p),o!==void 0&&o!==""){const x=this.normals.length;d=this.parseNormalIndex(o,x),h=this.parseNormalIndex(l,x),p=this.parseNormalIndex(c,x),this.addNormal(d,h,p)}else this.addFaceNormal(d,h,p);if(a!==void 0&&a!==""){const x=this.uvs.length;d=this.parseUVIndex(a,x),h=this.parseUVIndex(r,x),p=this.parseUVIndex(s,x),this.addUV(d,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,a=e.length;i<a;i++){const r=this.parseVertexIndex(e[i],n);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,a=this.uvs.length;for(let r=0,s=e.length;r<s;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,s=n.length;r<s;r++)this.addUVLine(this.parseUVIndex(n[r],a))}};return t.startObject("",!1),t}class pS extends Bs{constructor(e){super(e),this.materials=null}load(e,n,i,a){const r=this,s=new iS(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{n(r.parse(o))}catch(l){a?a(l):console.error(l),r.manager.itemError(e)}},i,a)}setMaterials(e){return this.materials=e,this}parse(e){const n=new hN;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let a=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const d=c.split(ov);switch(d[0]){case"v":n.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(lc.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),en),n.colors.push(lc.r,lc.g,lc.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":n.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(ov),p=[];for(let _=0,m=h.length;_<m;_++){const f=h[_];if(f.length>0){const g=f.split("/");p.push(g)}}const x=p[0];for(let _=1,m=p.length-1;_<m;_++){const f=p[_],g=p[_+1];n.addFace(x[0],f[0],g[0],x[1],f[1],g[1],x[2],f[2],g[2])}}else if(u==="l"){const d=c.substring(1).trim().split(" ");let h=[];const p=[];if(c.indexOf("/")===-1)h=d;else for(let x=0,_=d.length;x<_;x++){const m=d[x].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}n.addLineGeometry(h,p)}else if(u==="p"){const h=c.slice(1).trim().split(" ");n.addPointGeometry(h)}else if((a=cN.exec(c))!==null){const d=(" "+a[0].slice(1).trim()).slice(1);n.startObject(d)}else if(fN.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(uN.test(c))n.materialLibraries.push(c.substring(7).trim());else if(dN.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(a=c.split(" "),a.length>1){const h=a[1].trim().toLowerCase();n.object.smooth=h!=="0"&&h!=="off"}else n.object.smooth=!0;const d=n.object.currentMaterial();d&&(d.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const r=new oo;if(r.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=n.objects.length;o<l;o++){const c=n.objects[o],u=c.geometry,d=c.materials,h=u.type==="Line",p=u.type==="Points";let x=!1;if(u.vertices.length===0)continue;const _=new Qn;_.setAttribute("position",new un(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new un(u.normals,3)),u.colors.length>0&&(x=!0,_.setAttribute("color",new un(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new un(u.uvs,2));const m=[];for(let g=0,y=d.length;g<y;g++){const M=d[g],R=M.name+"_"+M.smooth+"_"+x;let w=n.materials[R];if(this.materials!==null){if(w=this.materials.create(M.name),h&&w&&!(w instanceof Ao)){const A=new Ao;Qi.prototype.copy.call(A,w),A.color.copy(w.color),w=A}else if(p&&w&&!(w instanceof lo)){const A=new lo({size:10,sizeAttenuation:!1});Qi.prototype.copy.call(A,w),A.color.copy(w.color),A.map=w.map,w=A}}w===void 0&&(h?w=new Ao:p?w=new lo({size:1,sizeAttenuation:!1}):w=new tS,w.name=M.name,w.flatShading=!M.smooth,w.vertexColors=x,n.materials[R]=w),m.push(w)}let f;if(m.length>1){for(let g=0,y=d.length;g<y;g++){const M=d[g];_.addGroup(M.groupStart,M.groupCount,g)}h?f=new Wh(_,m):p?f=new $f(_,m):f=new si(_,m)}else h?f=new Wh(_,m[0]):p?f=new $f(_,m[0]):f=new si(_,m[0]);f.name=c.name,r.add(f)}else if(n.vertices.length>0){const o=new lo({size:1,sizeAttenuation:!1}),l=new Qn;l.setAttribute("position",new un(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new un(n.colors,3)),o.vertexColors=!0);const c=new $f(l,o);r.add(c)}return r}}class mS extends Bs{constructor(e){super(e)}load(e,n,i,a){const r=this,s=this.path===""?Tw.extractUrlBase(e):this.path,o=new iS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{n(r.parse(l,s))}catch(c){a?a(c):console.error(c),r.manager.itemError(e)}},i,a)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,n){const i=e.split(`
`);let a={};const r=/\s+/,s={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let d=u>=0?c.substring(0,u):c;d=d.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),d==="newmtl")a={name:h},s[h]=a;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){const p=h.split(r,3);a[d]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else a[d]=h}const o=new pN(this.resourcePath||n,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(s),o}}class pN{constructor(e="",n={}){this.baseUrl=e,this.options=n,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:$i,this.wrap=this.options.wrap!==void 0?this.options.wrap:lu}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const n={};for(const i in e){const a=e[i],r={};n[i]=r;for(const s in a){let o=!0,l=a[s];const c=s.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(r[c]=l)}}return n}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const n in this.materialsInfo)this.materialsArray[e]=this.create(n),this.nameLookup[n]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const n=this,i=this.materialsInfo[e],a={name:e,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function s(o,l){if(a[o])return;const c=n.getTextureParams(l,a),u=n.loadTexture(r(n.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=n.wrap,u.wrapT=n.wrap,(o==="map"||o==="emissiveMap")&&(u.colorSpace=en),a[o]=u}for(const o in i){const l=i[o];let c;if(l!=="")switch(o.toLowerCase()){case"kd":a.color=tt.colorSpaceToWorking(new qe().fromArray(l),en);break;case"ks":a.specular=tt.colorSpaceToWorking(new qe().fromArray(l),en);break;case"ke":a.emissive=tt.colorSpaceToWorking(new qe().fromArray(l),en);break;case"map_kd":s("map",l);break;case"map_ks":s("specularMap",l);break;case"map_ke":s("emissiveMap",l);break;case"norm":s("normalMap",l);break;case"map_bump":case"bump":s("bumpMap",l);break;case"disp":s("displacementMap",l);break;case"map_d":s("alphaMap",l),a.transparent=!0;break;case"ns":a.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(a.opacity=c,a.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(a.opacity=1-c,a.transparent=!0);break}}return this.materials[e]=new tS(a),this.materials[e]}getTextureParams(e,n){const i={scale:new at(1,1),offset:new at(0,0)},a=e.split(/\s+/);let r;return r=a.indexOf("-bm"),r>=0&&(n.bumpScale=parseFloat(a[r+1]),a.splice(r,2)),r=a.indexOf("-mm"),r>=0&&(n.displacementBias=parseFloat(a[r+1]),n.displacementScale=parseFloat(a[r+2]),a.splice(r,3)),r=a.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(a[r+1]),parseFloat(a[r+2])),a.splice(r,4)),r=a.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(a[r+1]),parseFloat(a[r+2])),a.splice(r,4)),i.url=a.join(" ").trim(),i}loadTexture(e,n,i,a,r){const s=this.manager!==void 0?this.manager:nS;let o=s.getHandler(e);o===null&&(o=new aS(s)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(e,i,a,r);return n!==void 0&&(l.mapping=n),l}}function gS({model:t,onClose:e}){const n=P.useRef(null),i=P.useRef(null),a=P.useRef(null),r=P.useRef(null),s=P.useRef(null),o=P.useRef(null),l=P.useRef(null),c=P.useRef([]),u=P.useRef({isDragging:!1,isPanning:!1,lastX:0,lastY:0,rotation:{x:0,y:0},pan:{x:0,y:0},zoom:1,initialTouchDistance:0,isPinching:!1,autoRotateSpeed:.005,dampingFactor:.1,autoRotate:!0}),d=P.useRef(5),h=P.useRef({center:new F,size:new F}),[p,x]=P.useState(!1),[_,m]=P.useState(!0),[f,g]=P.useState(null),[y,M]=P.useState(!1),[R,w]=P.useState(0),[A,D]=P.useState(!1),[T,S]=P.useState(0),[C,H]=P.useState({vertices:0,faces:0,materials:0}),[G,Z]=P.useState(0),q=P.useRef({frames:0,lastTime:performance.now()}),[O,k]=P.useState(0),z=3,[J,le]=P.useState(t!=null&&t.processor&&(t!=null&&t.id)?`http://localhost:3001/models/${t.processor}/${t.id}/`:"");P.useEffect(()=>{const se=Fe=>{Fe.target.matches("input, textarea, button")||(Fe.key==="Escape"?p?Ne():e():Fe.key==="r"?K():Fe.key==="f"?j():Fe.key==="w"?fe():Fe.key==="b"&&D(Xe=>!Xe))};return document.addEventListener("keydown",se),()=>document.removeEventListener("keydown",se)},[p,e]),P.useEffect(()=>{const se=()=>x(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",se),()=>document.removeEventListener("fullscreenchange",se)},[]),P.useEffect(()=>{o.current&&o.current.traverse(se=>{se.isMesh&&se.material&&(Array.isArray(se.material)?se.material:[se.material]).forEach(Xe=>{Xe.userData.originalWireframe===void 0&&(Xe.userData.originalWireframe=Xe.wireframe),Xe.wireframe=y,Xe.needsUpdate=!0})})},[y]),P.useEffect(()=>{a.current&&a.current.children.forEach(se=>{se instanceof P0&&(se.visible=A)})},[A]);const Se=P.useCallback(se=>{c.current.forEach(Et=>se.remove(Et)),c.current=[];const Fe=new hu(16777215,1);Fe.position.set(10,10,10),Fe.castShadow=!0,Fe.shadow.mapSize.set(1024,1024);const Xe=new hu(16777215,.5);Xe.position.set(-10,-10,-10);const ze=new bw(16777215,.8,100);ze.position.set(0,0,10);const U=new oS(16777215,.6);[Fe,Xe,ze,U].forEach(Et=>{se.add(Et),c.current.push(Et)})},[]);P.useEffect(()=>{const Fe=setInterval(()=>{q.current.frames++;const Xe=performance.now();Xe-q.current.lastTime>=1e3&&(Z(q.current.frames),q.current.frames=0,q.current.lastTime=Xe)},16);return()=>clearInterval(Fe)},[]),P.useEffect(()=>{if(!n.current||!t)return;console.log("ModelPreview - Model data:",t);const se=new Jy;se.background=new qe(16316922),se.fog=new dm(16316922,50,200),a.current=se;const Fe=p?window.innerWidth:n.current.clientWidth,Xe=p?window.innerHeight:n.current.clientHeight,ze=new Sn(45,Fe/Xe,.1,1e3);s.current=ze;const U=new hS({antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"mediump"});U.setSize(Fe,Xe),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=nm,U.outputEncoding=void 0,U.toneMapping=Dy,U.toneMappingExposure=1,r.current=U,n.current.appendChild(U.domElement),console.log("WebGL Capabilities:",{version:U.getContext().getParameter(U.getContext().VERSION),maxTextureSize:U.getContext().getParameter(U.getContext().MAX_TEXTURE_SIZE),renderer:U.info.render}),Se(se),(async()=>{var Q;try{if(m(!0),g(null),S(0),u.current.rotation={x:0,y:0},u.current.pan={x:0,y:0},u.current.zoom=1,u.current.autoRotate=!0,!J||!t.objFilename)throw new Error("Missing model file URLs or filenames");console.log("Base folder:",J),console.log("OBJ Filename:",t.objFilename),console.log("MTL Filename:",t.mtlFilename);const oe=setInterval(()=>{S(Be=>Math.min(Be+10,90))},100),pe=new mS;pe.setPath(J),pe.setResourcePath(J);const be=t.mtlFilename?`${J}${t.mtlFilename}`:null;let ee;if(be)try{ee=await pe.loadAsync(t.mtlFilename,Pe=>{console.log(`MTL loading: ${(Pe.loaded/Pe.total*100).toFixed(2)}%`),S(Pe.loaded/Pe.total*50)});const Be=new aS;for(const Pe of Object.values(ee.materials)){if((Q=Pe.map)!=null&&Q.sourceFile){const Qt=`${J}${Pe.map.sourceFile}`;try{const Ht=await Be.loadAsync(Qt);Ht.flipY=!1,Ht.encoding=void 0,Pe.map=Ht,Pe.needsUpdate=!0}catch(Ht){console.warn("Texture load failed:",Qt,Ht),Pe.map=null,Pe.needsUpdate=!0}}Pe.roughness=Pe.roughness??.8,Pe.metalness=Pe.metalness??.2,Pe.side=ii,Pe.needsUpdate=!0}ee.preload()}catch(Be){console.warn("MTL loading failed, using fallback material:",Be.message),ee=null}const ve=new pS;ee&&ve.setMaterials(ee),ve.setPath(J);const we=await ve.loadAsync(t.objFilename,Be=>{console.log(`OBJ loading: ${(Be.loaded/Be.total*100).toFixed(2)}%`),S(50+Be.loaded/Be.total*50)});clearInterval(oe),S(100);let De=0,he=0,He=0,L=!1;if(we.traverse(Be=>{var Pe;if(Be.isMesh&&((Pe=Be.geometry)!=null&&Pe.attributes.position)){De+=Be.geometry.attributes.position.count,he+=Be.geometry.index?Be.geometry.index.count/3:Be.geometry.attributes.position.count/3,L=!0;const Qt=Array.isArray(Be.material)?Be.material:[Be.material];He+=Qt.length,Qt.forEach(Ht=>{Ht.wireframe=y,Ht.side=ii,Ht.needsUpdate=!0}),Be.castShadow=!0,Be.receiveShadow=!0}}),!L)throw new Error("No valid geometry found in model");H({vertices:De,faces:he,materials:He});const me=new za().setFromObject(we),ae=me.getCenter(new F),ye=me.getSize(new F);h.current.center=ae,h.current.size=ye,we.position.sub(ae);const re=Math.max(ye.x,ye.y,ye.z,1e-4),Ee=Math.min(6/re,10);we.scale.setScalar(Ee),we.position.set(2,2,0),console.log("Model bounds:",{center:ae,size:ye,scale:Ee,maxDim:re}),d.current=Math.max(re*1.5,5),ze.position.set(3,re+2,d.current),ze.lookAt(2,2,0),ze.far=re*100,ze.updateProjectionMatrix();const Ve=new P0(we,16711680);Ve.visible=A,se.add(Ve),o.current&&se.remove(o.current),o.current=we,se.add(we),m(!1),k(0)}catch(oe){console.error("Model loading error:",oe),g(oe.message||`Failed to load model from ${J}${t.objFilename}`),m(!1),O<z&&setTimeout(()=>{k(pe=>pe+1),w(pe=>pe+1)},2e3)}})();const Ce=U.domElement;Ce.style.cursor="grab",Ce.style.touchAction="none";let rt={x:0,y:0},Te=performance.now();const Ye=Q=>{Q.preventDefault(),u.current.isDragging=!0,u.current.isPanning=Q.shiftKey||Q.button===1,u.current.lastX=Q.clientX,u.current.lastY=Q.clientY,u.current.autoRotate=!1,Ce.style.cursor=u.current.isPanning?"move":"grabbing",rt={x:0,y:0}},Re=Q=>{if(!u.current.isDragging||!o.current)return;const oe=Q.clientX-u.current.lastX,pe=Q.clientY-u.current.lastY,be=performance.now(),ee=be-Te;ee>0&&(rt.x=oe/ee,rt.y=pe/ee);const ve=.008,we=.005;u.current.isPanning?(u.current.pan.x+=oe*we*(d.current/5),u.current.pan.y-=pe*we*(d.current/5)):(u.current.rotation.y+=oe*ve,u.current.rotation.x+=pe*ve,u.current.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,u.current.rotation.x))),u.current.lastX=Q.clientX,u.current.lastY=Q.clientY,Te=be},Ge=()=>{u.current.isDragging=!1,u.current.isPanning=!1,Ce.style.cursor="grab"},ut=Q=>{Q.preventDefault();const oe=.1,pe=Q.deltaY>0?-oe:oe;u.current.zoom=Math.max(.1,Math.min(10,u.current.zoom+pe))},N=Q=>{Q.preventDefault(),u.current.autoRotate=!1,Q.touches.length===1?(u.current.isDragging=!0,u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY,u.current.isPinching=!1):Q.touches.length===2&&(u.current.isPinching=!0,u.current.isDragging=!1,u.current.initialTouchDistance=Math.hypot(Q.touches[0].clientX-Q.touches[1].clientX,Q.touches[0].clientY-Q.touches[1].clientY))},b=Q=>{if(Q.preventDefault(),u.current.isDragging&&Q.touches.length===1){const oe=Q.touches[0].clientX-u.current.lastX,pe=Q.touches[0].clientY-u.current.lastY,be=.008;u.current.rotation.y+=oe*be,u.current.rotation.x+=pe*be,u.current.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,u.current.rotation.x)),u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY}else if(u.current.isPinching&&Q.touches.length===2){const oe=Math.hypot(Q.touches[0].clientX-Q.touches[1].clientX,Q.touches[0].clientY-Q.touches[1].clientY),pe=(oe-u.current.initialTouchDistance)*.003;u.current.zoom=Math.max(.1,Math.min(10,u.current.zoom+pe)),u.current.initialTouchDistance=oe}},V=Q=>{Q.preventDefault(),Q.touches.length===0?(u.current.isDragging=!1,u.current.isPinching=!1):Q.touches.length===1&&(u.current.isPinching=!1,u.current.isDragging=!0,u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY)},$=Q=>Q.preventDefault();Ce.addEventListener("mousedown",Ye),Ce.addEventListener("mousemove",Re),Ce.addEventListener("mouseup",Ge),Ce.addEventListener("wheel",ut,{passive:!1}),Ce.addEventListener("touchstart",N,{passive:!1}),Ce.addEventListener("touchmove",b,{passive:!1}),Ce.addEventListener("touchend",V,{passive:!1}),Ce.addEventListener("contextmenu",$);const ie=()=>{if(l.current=requestAnimationFrame(ie),o.current){u.current.autoRotate&&!u.current.isDragging&&!u.current.isPinching?(u.current.rotation.y+=u.current.autoRotateSpeed,u.current.rotation.x*=.98,o.current.rotation.set(0,u.current.rotation.y,0)):(o.current.rotation.x=u.current.rotation.x,o.current.rotation.y=u.current.rotation.y);const Q=new F(u.current.pan.x+2,u.current.pan.y+2,d.current/u.current.zoom);ze.position.lerp(Q,u.current.dampingFactor),ze.lookAt(2,2,0),U.render(se,ze)}};ie();const Y=()=>{if(!n.current||!r.current||!s.current)return;const Q=p?window.innerWidth:n.current.clientWidth,oe=p?window.innerHeight:n.current.clientHeight;ze.aspect=Q/oe,ze.updateProjectionMatrix(),U.setSize(Q,oe),U.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",Y),()=>{window.removeEventListener("resize",Y),Ce.removeEventListener("mousedown",Ye),Ce.removeEventListener("mousemove",Re),Ce.removeEventListener("mouseup",Ge),Ce.removeEventListener("wheel",ut),Ce.removeEventListener("touchstart",N),Ce.removeEventListener("touchmove",b),Ce.removeEventListener("touchend",V),Ce.removeEventListener("contextmenu",$),l.current&&cancelAnimationFrame(l.current),n.current&&U.domElement&&n.current.removeChild(U.domElement),se.traverse(Q=>{Q.geometry&&Q.geometry.dispose(),Q.material&&(Array.isArray(Q.material)?Q.material.forEach(oe=>oe.dispose()):Q.material.dispose())}),U.dispose()}},[t,p,R,A,Se]);const de=()=>{var se,Fe;return(Fe=(se=i.current)==null?void 0:se.requestFullscreen)==null?void 0:Fe.call(se)},Ne=()=>{var se;return(se=document.exitFullscreen)==null?void 0:se.call(document)},j=P.useCallback(()=>p?Ne():de(),[p]),K=P.useCallback(()=>{u.current.rotation={x:0,y:0},u.current.pan={x:0,y:0},u.current.zoom=1},[]),fe=P.useCallback(()=>M(se=>!se),[]),ue=P.useCallback(()=>{u.current.zoom=Math.min(10,u.current.zoom+.3)},[]),_e=P.useCallback(()=>{u.current.zoom=Math.max(.1,u.current.zoom-.3)},[]),Oe=P.useCallback(()=>{K(),M(!1),D(!1),m(!0),g(null),k(0),w(se=>se+1),u.current.autoRotate=!0},[K]);return!t||!t.fileUrl||!t.objFilename?v.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4",children:v.jsxs("div",{className:"bg-white rounded-xl p-3 sm:p-6 text-center max-w-sm",children:[v.jsx("div",{className:"text-red-500 text-2xl sm:text-3xl mb-3",children:"⚠️"}),v.jsx("h3",{className:"text-base sm:text-lg font-bold mb-2",children:"Invalid Model Data"}),v.jsx("p",{className:"text-gray-600 text-sm sm:text-base mb-3",children:"Required model files are missing"}),v.jsx("button",{onClick:e,className:"px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm",children:"Close"})]})}):v.jsx("div",{ref:i,className:`fixed inset-0 z-50 ${p?"bg-black":"bg-black/80 flex items-center justify-center p-1 sm:p-2"}`,children:v.jsxs("div",{className:`${p?"w-full h-full":"relative bg-white shadow-2xl w-full max-w-7xl h-[85vh] sm:h-[90vh] rounded-xl overflow-hidden"}`,children:[v.jsx("div",{className:`${p?"absolute top-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm":"bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl border-b"} p-2 sm:p-4`,children:v.jsxs("div",{className:"flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0",children:[v.jsxs("div",{className:"flex items-center justify-center sm:justify-start w-full sm:w-auto",children:[v.jsx("h3",{className:`text-base sm:text-lg font-bold truncate max-w-[80%] ${p?"text-white":"text-gray-800"}`,children:t.name||"Untitled Model"}),v.jsx("div",{className:`text-xs sm:text-sm ${p?"text-gray-300":"text-gray-600"} hidden md:block ml-2 sm:ml-4`,children:C.vertices>0&&v.jsxs("span",{children:[C.vertices.toLocaleString()," vertices • ",C.faces.toLocaleString()," faces • ",C.materials," materials • ",G," FPS"]})})]}),v.jsxs("div",{className:"flex items-center justify-center sm:justify-end flex-wrap gap-1 sm:gap-2",children:[v.jsx("button",{onClick:Oe,title:"Reload Model (R)",className:"p-1.5 sm:p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all text-xs sm:text-sm",children:v.jsx(sh,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:fe,title:`Wireframe ${y?"ON":"OFF"} (W)`,className:`p-1.5 sm:p-2 rounded-lg transition-all ${y?"bg-blue-500 text-white shadow-lg hover:bg-blue-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"} text-xs sm:text-sm`,children:v.jsx(wT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:ue,title:"Zoom In (+)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(XT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:_e,title:"Zoom Out (-)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(qT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:K,title:"Reset View (R)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(TT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:()=>D(se=>!se),title:`Bounding Box ${A?"ON":"OFF"} (B)`,className:`p-1.5 sm:p-2 rounded-lg transition-all ${A?"bg-blue-500 text-white shadow-lg hover:bg-blue-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"} text-xs sm:text-sm`,children:A?v.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):v.jsxs("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),v.jsx("button",{onClick:j,title:p?"Exit Fullscreen (F)":"Enter Fullscreen (F)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:p?v.jsx(bT,{size:16,className:"sm:w-5 sm:h-5"}):v.jsx(wy,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:e,title:"Close (Esc)",className:"p-1.5 sm:p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all text-xs sm:text-sm",children:v.jsx(em,{size:16,className:"sm:w-5 sm:h-5"})})]})]})}),v.jsxs("div",{className:`relative ${p?"w-full h-full":"w-full h-[calc(100%-56px)] sm:h-[calc(100%-80px)] rounded-xl overflow-hidden"}`,children:[_&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 z-20",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mb-3 sm:mb-4"}),v.jsxs("p",{className:"text-gray-600 text-sm sm:text-base",children:["Loading 3D model... ",Math.round(T),"%"]}),v.jsxs("p",{className:"text-gray-500 text-xs sm:text-sm mt-2",children:[J,t.objFilename]}),O>0&&v.jsxs("p",{className:"text-yellow-600 text-xs sm:text-sm mt-2",children:["Retry attempt ",O," of ",z]})]})}),f&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 z-20",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-red-500 text-2xl sm:text-3xl mb-3 sm:mb-4",children:"⚠️"}),v.jsx("p",{className:"text-red-600 text-sm sm:text-base mb-2",children:"Error loading model"}),v.jsx("p",{className:"text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4",children:f}),v.jsx("button",{onClick:Oe,className:"px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm",children:"Retry"})]})}),v.jsx("div",{ref:n,className:"w-full h-full bg-[#f8f9fa]"}),v.jsxs("div",{className:"absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white p-1 sm:p-2 rounded-lg text-xs sm:text-sm hidden md:block",children:[v.jsx("p",{children:"• Drag to rotate (stops auto-rotation)"}),v.jsx("p",{children:"• Shift + Drag or Middle Click to pan"}),v.jsx("p",{children:"• Scroll or pinch to zoom"}),v.jsx("p",{children:"• R: Reset | W: Wireframe | F: Fullscreen"}),v.jsx("p",{children:"• B: Bounding Box"})]})]})]})})}function mN({generated3DModel:t,onNewModel:e}){const n=P.useRef(null),i=P.useRef(null),a=P.useRef(null),r=P.useRef(null),s=P.useRef(null),o=P.useRef(null),[l,c]=P.useState(!0),[u,d]=P.useState(null),[h,p]=P.useState(!1),[x,_]=P.useState(0),m="http://localhost:3001",f=w=>{if(!w.id||!w.processor)throw new Error("Invalid model data");const A=`/models/${w.processor}/${w.id}`;return console.log("Base URL:",A),A},g=w=>{if(!w.objFilename)throw new Error("Missing .obj file");return console.log("File details:",{objFilename:w.objFilename,mtlFilename:w.mtlFilename||"none"}),{objFilename:w.objFilename,mtlFilename:w.mtlFilename}},y=async()=>{try{const w=await fetch(`${m}/api/models/${t.id}/download-all`,{method:"GET",headers:{Accept:"application/zip"}});if(!w.ok)throw new Error(`Failed to download ZIP: ${w.statusText}`);const A=await w.blob(),D=window.URL.createObjectURL(A),T=document.createElement("a");T.href=D,T.download=`${t.name||t.id}.zip`,document.body.appendChild(T),T.click(),document.body.removeChild(T),window.URL.revokeObjectURL(D),console.log("Download initiated for model:",t.id)}catch(w){console.error("Download error:",w),alert(`Failed to download the model: ${w.message}`)}},M=()=>{const w=f(t),{objFilename:A,mtlFilename:D}=g(t);console.log("Preview data:",{fileUrl:w,objFilename:A,mtlFilename:D}),p(!0)},R=()=>{_(w=>w+1),c(!0),d(null)};return P.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),P.useEffect(()=>{if(!n.current||!t){d("No model data available"),c(!1);return}const w=new Jy;w.background=new qe(16316922),i.current=w;const A=n.current.clientWidth,D=n.current.clientHeight,T=new Sn(45,A/D,.1,1e3);r.current=T;const S=new hS({antialias:!0,alpha:!0});S.setSize(A,D),S.shadowMap.enabled=!0,S.shadowMap.type=nm,a.current=S,n.current.appendChild(S.domElement);const C=new oS(16777215,.6);w.add(C);const H=new hu(16777215,1);H.position.set(10,10,10),H.castShadow=!0,w.add(H);const G=new hu(16777215,.5);G.position.set(-10,-10,-10),w.add(G),(async()=>{try{c(!0),d(null);const k=f(t),{objFilename:z,mtlFilename:J}=g(t);let le=null;if(J){const Oe=new mS;Oe.setPath(`${m}${k}/`),console.log("Loading MTL:",`${m}${k}/${J}`);try{le=await Oe.loadAsync(J)}catch(se){console.warn("Failed to load MTL file:",se)}}else console.log("No MTL file provided, skipping MTL loading");const Se=new pS;le&&Se.setMaterials(le),Se.setPath(`${m}${k}/`),console.log("Loading OBJ:",`${m}${k}/${z}`);const de=await Se.loadAsync(z);let Ne=!1;if(de.traverse(Oe=>{Oe.isMesh&&Oe.geometry&&Oe.geometry.attributes.position&&(Ne=!0,Oe.castShadow=!0,Oe.receiveShadow=!0)}),!Ne)throw new Error("No valid geometry found in model");const j=new za().setFromObject(de),K=j.getCenter(new F),fe=j.getSize(new F);de.position.sub(K);const ue=Math.max(fe.x,fe.y,fe.z,1e-4),_e=Math.min(3/ue,10);de.scale.setScalar(_e),de.position.set(2,2,0),T.position.set(3,ue+2,ue*1.5),T.lookAt(2,2,0),T.far=ue*100,T.updateProjectionMatrix(),s.current=de,w.add(de),c(!1)}catch(k){console.error("Model loading error:",k),d(k.message),c(!1)}})();const q=()=>{o.current=requestAnimationFrame(q),s.current&&(s.current.rotation.y+=.005),S.render(w,T)};q();const O=()=>{if(!n.current)return;const k=n.current.clientWidth,z=n.current.clientHeight;T.aspect=k/z,T.updateProjectionMatrix(),S.setSize(k,z)};return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),o.current&&cancelAnimationFrame(o.current),n.current&&S.domElement&&n.current.removeChild(S.domElement),S.dispose()}},[t,x]),t?v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[v.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:v.jsx(Jp,{className:"w-5 h-5 text-green-600"})}),v.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"3D Model Ready"})]}),v.jsxs("p",{className:"hidden md:block text-gray-600",children:['Your 3D model "',t.name,'" is ready for preview']})]}),v.jsxs("button",{onClick:e,className:"hidden md:flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium",children:[v.jsx(Pu,{className:"w-5 h-5"}),v.jsx("span",{children:"Generate New Model"})]})]})}),v.jsx("div",{className:"p-8",children:v.jsx("div",{className:"mb-8",children:v.jsxs("div",{className:"relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden h-[300px] sm:h-[400px]",children:[v.jsx("div",{ref:n,className:"w-full h-full"}),l&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"}),v.jsx("p",{className:"text-gray-600",children:"Loading 3D model..."})]})}),u&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(rh,{className:"w-8 h-8 text-red-500"})}),v.jsx("p",{className:"text-red-600 font-medium mb-2",children:"Failed to load model"}),v.jsx("p",{className:"text-gray-500 text-sm",children:u}),v.jsxs("button",{onClick:R,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:[v.jsx(sh,{className:"w-4 h-4 mr-2 inline"})," Reload"]})]})}),v.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-4",children:[v.jsx("button",{onClick:R,title:"Reload Model",className:"p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg",children:v.jsx(sh,{className:"w-5 h-5"})}),v.jsx("button",{onClick:y,className:"p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-lg",children:v.jsx(Ty,{className:"w-5 h-5"})})]}),v.jsx("button",{onClick:M,className:"absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition",children:v.jsx(wy,{className:"w-5 h-5"})})]})})})]}),h&&v.jsx(gS,{model:{...t,fileUrl:f(t),objFilename:t.objFilename,mtlFilename:t.mtlFilename},onClose:()=>p(!1)})]}):v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsx("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:v.jsxs("div",{className:"p-16 text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(rh,{className:"w-8 h-8 text-gray-400"})}),v.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Model Generated"}),v.jsx("p",{className:"text-gray-500 mb-6",children:"No model data available. Please generate a model first."}),v.jsx("button",{onClick:e,className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium",children:"Start Creating"})]})})})}function gN({savedModels:t,setSavedModels:e}){const[n,i]=P.useState(""),[a,r]=P.useState("all"),[s,o]=P.useState("newest"),[l,c]=P.useState([]),[u,d]=P.useState(null),[h,p]=P.useState(!1),[x,_]=P.useState(new Set),m=S=>!S||!S.id||!S.processor?null:`/models/${S.processor}/${S.id}`,f=S=>{var G,Z;let C=null,H=null;return S.objFiles&&Array.isArray(S.objFiles)&&S.objFiles.length>0&&(C=(G=S.objFiles.find(q=>{var O;return(O=q.filename)==null?void 0:O.endsWith(".obj")}))==null?void 0:G.filename,H=(Z=S.objFiles.find(q=>{var O;return(O=q.filename)==null?void 0:O.endsWith(".mtl")}))==null?void 0:Z.filename),C||(C=`${S.name||"Model"}.obj`),H||(H=`${S.name||"Model"}.mtl`),{objFilename:C,mtlFilename:H}},g=(t||[]).filter(S=>{const C=S.name||"",H=S.processor||"";return C.toLowerCase().includes(n.toLowerCase())&&(a==="all"||H===a)}).sort((S,C)=>s==="newest"?new Date(C.createdAt||0)-new Date(S.createdAt||0):s==="oldest"?new Date(S.createdAt||0)-new Date(C.createdAt||0):(S.name||"").localeCompare(C.name||"")),y=S=>{switch(S){case"meshroom":return"bg-blue-100 text-blue-800";case"open3d":return"bg-green-100 text-green-800";case"import":return"bg-purple-100 text-purple-800";default:return"bg-gray-100 text-gray-800"}},M=async S=>{try{const C=S.id;_(O=>new Set([...O,C])),console.log("Attempting download for model ID:",C,"Model data:",S);const H=await fetch(`/api/models/${C}/download-all`,{method:"GET",headers:{Accept:"application/zip"}});if(!H.ok)throw new Error(`Download failed: ${H.status} ${H.statusText}`);const G=await H.blob(),Z=window.URL.createObjectURL(G),q=document.createElement("a");q.href=Z,q.download=`${S.name||C}.zip`,document.body.appendChild(q),q.click(),document.body.removeChild(q),window.URL.revokeObjectURL(Z),console.log("Download completed for model:",C)}catch(C){console.error("Download error:",C),alert(`Failed to download the model: ${C.message}`)}finally{_(C=>{const H=new Set(C);return H.delete(S.id),H})}},R=async()=>{const S=g.filter(C=>l.includes(C.id));if(S.length===0){alert("No models selected for download");return}for(const C of S)await M(C),await new Promise(H=>setTimeout(H,500))},w=async S=>{try{for(const C of S)await fetch(`/api/models/${C}`,{method:"DELETE"});e(C=>C.filter(H=>!S.includes(H.id))),c([])}catch(C){console.error("Error deleting models:",C),alert("Failed to delete some models. Please try again.")}},A=S=>c(C=>C.includes(S)?C.filter(H=>H!==S):[...C,S]),D=()=>{l.length===g.length?c([]):c(g.map(S=>S.id))},T=S=>{const C=m(S);if(!C){console.error("Invalid model data - missing id or processor:",S),alert("Cannot preview: Model data is incomplete.");return}const{objFilename:H,mtlFilename:G}=f(S);if(!H){console.error("No OBJ filename available for model:",S),alert("Cannot preview: Required OBJ file is missing.");return}const Z={...S,fileUrl:C,objFilename:H,mtlFilename:G,name:S.name||"Untitled Model",id:S.id||"",processor:S.processor||"import",objFiles:[{filename:H},...G?[{filename:G}]:[]]};console.log("Preview model data:",Z),d(Z),p(!0)};return v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-4 sm:px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mb-2",children:"Model Library"}),v.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Browse, preview and manage your saved 3D models"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600 hidden sm:inline",children:"Library View"})]})})]})}),v.jsxs("div",{className:"px-4 sm:px-8 pt-6",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",children:[v.jsxs("div",{className:"relative flex-1",children:[v.jsx(UT,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),v.jsx("input",{type:"text",placeholder:"Search models...",value:n,onChange:S=>i(S.target.value),className:"w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-indigo-500"})]}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:a,onChange:S=>r(S.target.value),children:[v.jsx("option",{value:"all",children:"All Processors"}),v.jsx("option",{value:"meshroom",children:"Meshroom"}),v.jsx("option",{value:"open3d",children:"Open3D"}),v.jsx("option",{value:"import",children:"Import"})]}),v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:s,onChange:S=>o(S.target.value),children:[v.jsx("option",{value:"newest",children:"Newest First"}),v.jsx("option",{value:"oldest",children:"Oldest First"}),v.jsx("option",{value:"name",children:"Name (A-Z)"})]})]})]}),l.length>0&&v.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4 p-4 bg-gray-50 rounded-lg",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4",children:[v.jsxs("button",{onClick:D,className:"flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition border border-gray-200 min-h-[42px]",children:[v.jsx("input",{type:"checkbox",checked:l.length===g.length&&g.length>0,onChange:D,className:"w-4 h-4"}),v.jsxs("span",{className:"text-sm sm:text-base",children:["Select All (",g.length,")"]})]}),v.jsxs("div",{className:"text-sm text-gray-600 text-center sm:text-left",children:[l.length," of ",g.length," selected"]})]}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-2",children:[v.jsxs("button",{onClick:R,disabled:l.length===0,className:"flex items-center justify-center space-x-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[42px]",children:[v.jsx(e0,{className:"w-4 h-4 flex-shrink-0"}),v.jsxs("span",{className:"truncate",children:["Download (",l.length,")"]})]}),v.jsxs("button",{onClick:()=>w(l),className:"flex items-center justify-center space-x-2 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base min-h-[42px]",children:[v.jsx(Ec,{className:"w-4 h-4 flex-shrink-0"}),v.jsxs("span",{className:"truncate",children:["Delete (",l.length,")"]})]})]})]}),g.length===0?v.jsxs("div",{className:"text-center py-16",children:[v.jsx(Ay,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),v.jsx("p",{className:"text-gray-600",children:n||a!=="all"?"No models match your search":"No models found"})]}):v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8",children:g.map(S=>v.jsxs("div",{className:`rounded-xl p-4 border transition-all ${l.includes(S.id)?"bg-blue-50 border-blue-300 shadow-md":"bg-gray-50 border-gray-200 hover:shadow-md"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[v.jsx("input",{type:"checkbox",checked:l.includes(S.id),onChange:()=>A(S.id),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500 flex-shrink-0"}),v.jsx("h3",{className:"font-semibold truncate text-gray-900 text-sm sm:text-base",children:S.name||"Untitled Model"})]}),v.jsx("span",{className:`text-xs px-2 py-1 rounded font-medium flex-shrink-0 ml-2 ${y(S.processor||"unknown")}`,children:S.processor||"Unknown"})]}),v.jsxs("div",{className:"text-gray-500 text-xs mb-4",children:["Created: ",new Date(S.createdAt||0).toLocaleDateString()]}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[v.jsx("button",{onClick:()=>M(S),disabled:x.has(S.id),className:"flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed min-h-[36px]",children:x.has(S.id)?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white flex-shrink-0"}),v.jsx("span",{className:"truncate",children:"Downloading..."})]}):v.jsxs(v.Fragment,{children:[v.jsx(e0,{className:"w-4 h-4 flex-shrink-0"}),v.jsx("span",{className:"truncate",children:"Download ZIP"})]})}),v.jsxs("button",{onClick:()=>T(S),className:"flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition min-h-[36px]",children:[v.jsx(hT,{className:"w-4 h-4 flex-shrink-0"}),v.jsx("span",{className:"truncate",children:"Preview"})]})]})]},S.id))})]})]}),h&&u&&v.jsx(gS,{model:u,onClose:()=>{p(!1),d(null)}})]})}function vN(){const[t,e]=P.useState("images"),[n,i]=P.useState([]),[a,r]=P.useState({}),[s,o]=P.useState(""),[l,c]=P.useState("open3d"),[u,d]=P.useState(!1),[h,p]=P.useState(0),[x,_]=P.useState(null),[m,f]=P.useState([]),[g,y]=P.useState(!1),[M,R]=P.useState(null),[w,A]=P.useState("generate"),[D,T]=P.useState(!1),S=["open3d","meshroom","import"],C=["Analyzing image quality...","Detecting features...","Computing depth maps...","Reconstructing point cloud...","Generating mesh...","Applying textures...","Optimizing model...","Finalizing export..."],H="http://localhost:3001",G=async(de,Ne,j=3,K=2e3)=>{for(let fe=0;fe<j;fe++)try{const ue=await fetch(de,Ne);if(ue.status===429){console.warn(`Rate limit exceeded for ${de}, retrying after ${K}ms...`),await new Promise(_e=>setTimeout(_e,K));continue}return ue}catch(ue){if(fe===j-1)throw ue;console.warn(`Request to ${de} failed, retrying (${fe+1}/${j})...`),await new Promise(_e=>setTimeout(_e,K))}},Z=async()=>{if(g)try{const de=await G(`${H}/api/models`,{method:"GET",headers:{"Content-Type":"application/json"}});if(de.ok){const j=(await de.json()).map(K=>({...K,fileUrl:`/models/${K.processor}/${K.id}`}));f(j),console.log("Fetched models:",j)}else throw new Error(`Failed to fetch models: ${de.statusText}`)}catch(de){console.error("Failed to fetch models:",de),R("Failed to fetch models: Network error")}};P.useEffect(()=>{G(`${H}/api/health`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(de=>{y(de.ok),console.log("Backend health check:",de.ok?"Up":"Down")}).catch(()=>{y(!1),console.log("Backend health check failed"),R("Backend unavailable")})},[]),P.useEffect(()=>{g&&Z()},[g]);const q=()=>{if(!(t==="images"&&n.length>=2||t==="import"&&a.obj)){R(t==="images"?"Upload at least 2 images":"Upload at least one .obj file");return}if(t==="images"&&!S.includes(l)){R("Invalid processor selected. Choose open3d or meshroom.");return}T(!0)},O=async(de,Ne=600)=>{let j=0;for(;j<Ne;)try{p(Math.min(Math.floor(j/Ne*C.length),C.length-1));const K=await G(`${H}/api/models/${de}/status`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!K.ok){if(K.status===429){console.warn("Rate limit exceeded, retrying after 2 seconds..."),await new Promise(ue=>setTimeout(ue,2e3)),j++;continue}throw new Error(`Status check failed: ${K.statusText}`)}const fe=await K.json();if(console.log(`Poll attempt ${j+1}: status=${fe.status}, name=${fe.name||"none"}, processor=${fe.processor||"none"}, fullResponse=${JSON.stringify(fe)}`),fe.status==="completed"||fe.status==="failed")return fe;await new Promise(ue=>setTimeout(ue,2e3)),j++}catch(K){console.error("Polling error:",K),R(`Polling error: ${K.message}`),await new Promise(fe=>setTimeout(fe,2e3)),j++}throw new Error("Processing timed out after 20 minutes")},k=async de=>{try{const Ne=await G(`${H}/api/models/${de}/files`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!Ne.ok)throw new Error(`Failed to fetch model files: ${Ne.statusText}`);const{files:j}=await Ne.json();return console.log(`Fetched model files for ${de}:`,j),j||[]}catch(Ne){return console.error("Failed to fetch model files:",Ne),R(`Failed to fetch model files: ${Ne.message}`),[]}},z=async()=>{var de,Ne,j;if(!g){R("Backend unavailable");return}d(!0),R(null),p(0);try{const K=new FormData;console.log("Preparing FormData:",{uploadType:t,modelName:s,processor:l});const fe=t==="import"?"import":l;if(t==="images"){if(n.length<2)throw new Error("At least 2 images are required");if(!S.includes(l))throw new Error("Invalid processor selected");n.forEach(ut=>K.append("images",ut.file,ut.name)),K.append("processor",l)}else if(t==="import"){if(!a.obj||!a.obj.name)throw new Error("Please select a valid .obj file");K.append("obj",a.obj.file,a.obj.name),a.mtl&&K.append("mtl",a.mtl.file,a.mtl.name),K.append("processor","import")}s.trim()&&K.append("modelName",s.trim());const ue=await G(`${H}/api/upload`,{method:"POST",body:K});if(!ue.ok)throw new Error(`Upload failed: ${ue.statusText}`);const{modelId:_e}=await ue.json();console.log("Model uploaded, ID:",_e);const Oe=await O(_e,t==="import"?1:600);if(Oe.status==="failed")throw new Error(Oe.error||`Model ${t} failed`);const se=await G(`${H}/api/models/${_e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!se.ok)throw new Error(`Failed to fetch model info: ${se.statusText}`);const Fe=await se.json(),Xe=await k(_e),ze=Xe.find(ut=>ut.extension==="obj"),U=Xe.find(ut=>ut.extension==="mtl");if(!ze)throw new Error("No .obj file found in model files");const Et=typeof Oe.name=="string"&&Oe.name.trim()?Oe.name.trim():null,Ce=s.trim(),rt=Et||Ce||"Model";console.log(`Model name selection (${t}):`,{statusModelName:Et,userModelName:Ce,fallback:"Model",selected:rt});const Te=ze.filename,Ye=U?U.filename:null,Re=`/models/${fe}/${_e}`,Ge={id:_e,name:rt,fileUrl:Re,objFilename:Te,mtlFilename:Ye,format:"OBJ",files:Xe,thumbnail:t==="import"?"/placeholder-3d.png":(Ne=(de=Fe.images)==null?void 0:de[0])!=null&&Ne.filename?`/uploads/${Fe.images[0].filename}`:((j=n[0])==null?void 0:j.url)||"/placeholder-3d.png",createdAt:new Date(Oe.createdAt||Date.now()).toISOString(),imageCount:t==="import"?0:n.length,objCount:Ye?2:1,processor:fe,type:t,objFiles:[{filename:Te},...Ye?[{filename:Ye}]:[]],vertices:Fe.vertices||0,triangles:Fe.triangles||0,size:ze.size||0};console.log(`New model data (${t}):`,Ge),_(Ge),Z(),d(!1)}catch(K){console.error("Error in handleGenerate:",K),R(K.message||"Processing failed")}finally{d(!1)}},J=()=>{i([]),r({}),o(""),_(null),T(!1),R(null),d(!1),p(0),A("generate")},le=()=>J(),Se=de=>{A(de),de==="library"?(Z(),_(null)):de==="generate"&&J()};return v.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-6 space-y-6",children:[v.jsx("nav",{className:"bg-white rounded-xl shadow-lg p-2 mb-8 border",children:v.jsxs("div",{className:"flex space-x-2",children:[v.jsxs("button",{onClick:()=>Se("generate"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${w==="generate"?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(Pu,{className:"w-5 h-5 mr-2 inline"})," Generate"]}),v.jsxs("button",{onClick:()=>Se("library"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${w==="library"?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(Ay,{className:"w-5 h-5 mr-2 inline"})," Library (",m.length,")"]})]})}),!g&&v.jsx(t0,{type:"warning",message:"Backend not available."}),M&&v.jsx(t0,{type:"error",message:M,onClose:()=>R(null)}),w==="generate"&&v.jsxs(v.Fragment,{children:[!D&&!x&&v.jsx($T,{selectedImages:n,setSelectedImages:i,selectedObjFiles:a,setSelectedObjFiles:r,uploadType:t,setUploadType:e,error:M,setError:R,onNext:q}),D&&!x&&v.jsx(QT,{selectedImages:n,selectedObjFiles:a,uploadType:t,modelName:s,setModelName:o,processor:l,setProcessor:c,isProcessing:u,processingStep:h,processingSteps:C,handleGenerate:z,backendUp:g}),x&&v.jsx(mN,{generated3DModel:x,onDownload:null,onNewModel:le})]}),w==="library"&&v.jsx(gN,{savedModels:m,setSavedModels:f,setActiveTab:A,setError:R,onRefresh:Z})]})}function xN(){return v.jsxs("div",{className:"min-h-screen flex flex-col",children:[v.jsx(YT,{}),v.jsx("div",{className:"flex-grow",children:v.jsxs(f1,{children:[v.jsx(ih,{path:"/",element:v.jsx(KT,{})}),v.jsx(ih,{path:"/generate",element:v.jsx(vN,{})})]})}),v.jsx(ZT,{})]})}yE.createRoot(document.getElementById("root")).render(v.jsx(O1,{basename:"/snap3d",children:v.jsx(xN,{})}));
