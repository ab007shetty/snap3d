(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hv={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=Symbol.for("react.transitional.element"),AS=Symbol.for("react.fragment");function pv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:TS,type:t,key:i,ref:e!==void 0?e:null,props:n}}mu.Fragment=AS;mu.jsx=pv;mu.jsxs=pv;hv.exports=mu;var v=hv.exports,mv={exports:{}},Ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=Symbol.for("react.transitional.element"),wS=Symbol.for("react.portal"),RS=Symbol.for("react.fragment"),CS=Symbol.for("react.strict_mode"),NS=Symbol.for("react.profiler"),DS=Symbol.for("react.consumer"),US=Symbol.for("react.context"),LS=Symbol.for("react.forward_ref"),OS=Symbol.for("react.suspense"),PS=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),Em=Symbol.iterator;function zS(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xv=Object.assign,_v={};function Cr(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||vv}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=Cr.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||vv}var $h=Kh.prototype=new yv;$h.constructor=Kh;xv($h,Cr.prototype);$h.isPureReactComponent=!0;var Tm=Array.isArray,Rt={H:null,A:null,T:null,S:null,V:null},Sv=Object.prototype.hasOwnProperty;function Qh(t,e,n,i,a,s){return n=s.ref,{$$typeof:Zh,type:t,key:e,ref:n!==void 0?n:null,props:s}}function FS(t,e){return Qh(t.type,e,void 0,void 0,void 0,t.props)}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zh}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function wm(){}function IS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(wm,wm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Is(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Zh:case wS:r=!0;break;case gv:return r=t._init,Is(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Vu(t,0):i,Tm(a)?(n="",r!=null&&(n=r.replace(Am,"$&/")+"/"),Is(a,e,n,"",function(c){return c})):a!=null&&(Jh(a)&&(a=FS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Am,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(Tm(t))for(var l=0;l<t.length;l++)i=t[l],s=o+Vu(i,l),r+=Is(i,e,n,s,a);else if(l=zS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+Vu(i,l++),r+=Is(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Is(IS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Sl(t,e,n){if(t==null)return t;var i=[],a=0;return Is(t,i,"","",function(s){return e.call(n,s,a++)}),i}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function GS(){}Ke.Children={map:Sl,forEach:function(t,e,n){Sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sl(t,function(){e++}),e},toArray:function(t){return Sl(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Cr;Ke.Fragment=RS;Ke.Profiler=NS;Ke.PureComponent=Kh;Ke.StrictMode=CS;Ke.Suspense=OS;Ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;Ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Rt.H.useMemoCache(t)}};Ke.cache=function(t){return function(){return t.apply(null,arguments)}};Ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=xv({},t.props),a=t.key,s=void 0;if(e!=null)for(r in e.ref!==void 0&&(s=void 0),e.key!==void 0&&(a=""+e.key),e)!Sv.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return Qh(t.type,a,void 0,void 0,s,i)};Ke.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:DS,_context:t},t};Ke.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Sv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Qh(t,s,void 0,void 0,null,a)};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:LS,render:t}};Ke.isValidElement=Jh;Ke.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:HS}};Ke.memo=function(t,e){return{$$typeof:PS,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Rt.T,n={};Rt.T=n;try{var i=t(),a=Rt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(GS,Rm)}catch(s){Rm(s)}finally{Rt.T=e}};Ke.unstable_useCacheRefresh=function(){return Rt.H.useCacheRefresh()};Ke.use=function(t){return Rt.H.use(t)};Ke.useActionState=function(t,e,n){return Rt.H.useActionState(t,e,n)};Ke.useCallback=function(t,e){return Rt.H.useCallback(t,e)};Ke.useContext=function(t){return Rt.H.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t,e){return Rt.H.useDeferredValue(t,e)};Ke.useEffect=function(t,e,n){var i=Rt.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};Ke.useId=function(){return Rt.H.useId()};Ke.useImperativeHandle=function(t,e,n){return Rt.H.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return Rt.H.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return Rt.H.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return Rt.H.useMemo(t,e)};Ke.useOptimistic=function(t,e){return Rt.H.useOptimistic(t,e)};Ke.useReducer=function(t,e,n){return Rt.H.useReducer(t,e,n)};Ke.useRef=function(t){return Rt.H.useRef(t)};Ke.useState=function(t){return Rt.H.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return Rt.H.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return Rt.H.useTransition()};Ke.version="19.1.0";mv.exports=Ke;var O=mv.exports;const VS=dv(O);var Mv={exports:{}},gu={},bv={exports:{}},Ev={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,k){var P=z.length;z.push(k);e:for(;0<P;){var K=P-1>>>1,le=z[K];if(0<a(le,k))z[K]=k,z[P]=le,P=K;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var k=z[0],P=z.pop();if(P!==k){z[0]=P;e:for(var K=0,le=z.length,Se=le>>>1;K<Se;){var Be=2*(K+1)-1,Pe=z[Be],X=Be+1,oe=z[X];if(0>a(Pe,P))X<le&&0>a(oe,Pe)?(z[K]=oe,z[X]=P,K=X):(z[K]=Pe,z[Be]=P,K=Be);else if(X<le&&0>a(oe,P))z[K]=oe,z[X]=P,K=X;else break e}}return k}function a(z,k){var P=z.sortIndex-k.sortIndex;return P!==0?P:z.id-k.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,y=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function M(z){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=z)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function C(z){if(y=!1,M(z),!x)if(n(l)!==null)x=!0,R||(R=!0,H());else{var k=n(c);k!==null&&Y(C,k.startTime-z)}}var R=!1,A=-1,U=5,T=-1;function _(){return m?!0:!(t.unstable_now()-T<U)}function w(){if(m=!1,R){var z=t.unstable_now();T=z;var k=!0;try{e:{x=!1,y&&(y=!1,g(A),A=-1),p=!0;var P=h;try{t:{for(M(z),d=n(l);d!==null&&!(d.expirationTime>z&&_());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var le=K(d.expirationTime<=z);if(z=t.unstable_now(),typeof le=="function"){d.callback=le,M(z),k=!0;break t}d===n(l)&&i(l),M(z)}else i(l);d=n(l)}if(d!==null)k=!0;else{var Se=n(c);Se!==null&&Y(C,Se.startTime-z),k=!1}}break e}finally{d=null,h=P,p=!1}k=void 0}}finally{k?H():R=!1}}}var H;if(typeof S=="function")H=function(){S(w)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=w,H=function(){q.postMessage(null)}}else H=function(){f(w,0)};function Y(z,k){A=f(function(){z(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var P=h;h=k;try{return z()}finally{h=P}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(z,k){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=h;h=z;try{return k()}finally{h=P}},t.unstable_scheduleCallback=function(z,k,P){var K=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?K+P:K):P=K,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=P+le,z={id:u++,callback:k,priorityLevel:z,startTime:P,expirationTime:le,sortIndex:-1},P>K?(z.sortIndex=P,e(c,z),n(l)===null&&z===n(c)&&(y?(g(A),A=-1):y=!0,Y(C,P-K))):(z.sortIndex=le,e(l,z),x||p||(x=!0,R||(R=!0,H()))),z},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(z){var k=h;return function(){var P=h;h=k;try{return z.apply(this,arguments)}finally{h=P}}}})(Ev);bv.exports=Ev;var kS=bv.exports,Tv={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=O;function Av(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function na(){}var dn={d:{f:na,r:function(){throw Error(Av(522))},D:na,C:na,L:na,m:na,X:na,S:na,M:na},p:0,findDOMNode:null},XS=Symbol.for("react.portal");function WS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:XS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var fo=jS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function vu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Av(299));return WS(t,e,null,n)};pn.flushSync=function(t){var e=fo.T,n=dn.p;try{if(fo.T=null,dn.p=2,t)return t()}finally{fo.T=e,dn.p=n,dn.d.f()}};pn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,dn.d.C(t,e))};pn.prefetchDNS=function(t){typeof t=="string"&&dn.d.D(t)};pn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=vu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?dn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&dn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};pn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=vu(e.as,e.crossOrigin);dn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&dn.d.M(t)};pn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=vu(n,e.crossOrigin);dn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};pn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=vu(e.as,e.crossOrigin);dn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else dn.d.m(t)};pn.requestFormReset=function(t){dn.d.r(t)};pn.unstable_batchedUpdates=function(t,e){return t(e)};pn.useFormState=function(t,e,n){return fo.H.useFormState(t,e,n)};pn.useFormStatus=function(){return fo.H.useHostTransitionStatus()};pn.version="19.1.0";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(t){console.error(t)}}wv(),Tv.exports=pn;var qS=Tv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=kS,Rv=O,YS=qS;function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(t){if(Zo(t)!==t)throw Error(te(188))}function ZS(t){var e=t.alternate;if(!e){if(e=Zo(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Cm(a),t;if(s===i)return Cm(a),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Dv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Dv(t),e!==null)return e;t=t.sibling}return null}var Et=Object.assign,KS=Symbol.for("react.element"),Ml=Symbol.for("react.transitional.element"),ao=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),$S=Symbol.for("react.provider"),Lv=Symbol.for("react.consumer"),Fi=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),fa=Symbol.for("react.lazy"),fd=Symbol.for("react.activity"),QS=Symbol.for("react.memo_cache_sentinel"),Nm=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var JS=Symbol.for("react.client.reference");function dd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===JS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case ld:return"Profiler";case Uv:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList";case fd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ao:return"Portal";case Fi:return(t.displayName||"Context")+".Provider";case Lv:return(t._context.displayName||"Context")+".Consumer";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case fa:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}var so=Array.isArray,Ie=Rv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=YS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,is={pending:!1,data:null,method:null,action:null},hd=[],js=-1;function bi(t){return{current:t}}function Kt(t){0>js||(t.current=hd[js],hd[js]=null,js--)}function Ct(t,e){js++,hd[js]=t.current,t.current=e}var vi=bi(null),Co=bi(null),Ma=bi(null),Uc=bi(null);function Lc(t,e){switch(Ct(Ma,e),Ct(Co,t),Ct(vi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Pg(e),t=K_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(vi),Ct(vi,t)}function hr(){Kt(vi),Kt(Co),Kt(Ma)}function pd(t){t.memoizedState!==null&&Ct(Uc,t);var e=vi.current,n=K_(e,t.type);e!==n&&(Ct(Co,t),Ct(vi,n))}function Oc(t){Co.current===t&&(Kt(vi),Kt(Co)),Uc.current===t&&(Kt(Uc),Io._currentValue=is)}var md=Object.prototype.hasOwnProperty,np=kt.unstable_scheduleCallback,ku=kt.unstable_cancelCallback,eM=kt.unstable_shouldYield,tM=kt.unstable_requestPaint,xi=kt.unstable_now,nM=kt.unstable_getCurrentPriorityLevel,Ov=kt.unstable_ImmediatePriority,Pv=kt.unstable_UserBlockingPriority,Pc=kt.unstable_NormalPriority,iM=kt.unstable_LowPriority,zv=kt.unstable_IdlePriority,aM=kt.log,sM=kt.unstable_setDisableYieldValue,Ko=null,Ln=null;function xa(t){if(typeof aM=="function"&&sM(t),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(Ko,t)}catch{}}var On=Math.clz32?Math.clz32:lM,rM=Math.log,oM=Math.LN2;function lM(t){return t>>>=0,t===0?32:31-(rM(t)/oM|0)|0}var bl=256,El=4194304;function Ya(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=Ya(i):(r&=o,r!==0?a=Ya(r):n||(n=o&~t,n!==0&&(a=Ya(n))))):(o=i&~s,o!==0?a=Ya(o):r!==0?a=Ya(r):n||(n=i&~t,n!==0&&(a=Ya(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function $o(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function cM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(){var t=bl;return bl<<=1,!(bl&4194048)&&(bl=256),t}function Bv(){var t=El;return El<<=1,!(El&62914560)&&(El=4194304),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function uM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var u=31-On(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Iv(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Iv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-On(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function Hv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function ip(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ap(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Gv(){var t=ct.p;return t!==0?t:(t=window.event,t===void 0?32:ry(t.type))}function fM(t,e){var n=ct.p;try{return ct.p=t,e()}finally{ct.p=n}}var za=Math.random().toString(36).slice(2),rn="__reactFiber$"+za,bn="__reactProps$"+za,Nr="__reactContainer$"+za,gd="__reactEvents$"+za,dM="__reactListeners$"+za,hM="__reactHandles$"+za,Dm="__reactResources$"+za,Jo="__reactMarker$"+za;function sp(t){delete t[rn],delete t[bn],delete t[gd],delete t[dM],delete t[hM]}function Xs(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bg(t);t!==null;){if(n=t[rn])return n;t=Bg(t)}return e}t=n,n=t.parentNode}return null}function Dr(t){if(t=t[rn]||t[Nr]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ro(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function nr(t){var e=t[Dm];return e||(e=t[Dm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[Jo]=!0}var Vv=new Set,kv={};function gs(t,e){pr(t,e),pr(t+"Capture",e)}function pr(t,e){for(kv[t]=e,t=0;t<e.length;t++)Vv.add(e[t])}var pM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Um={},Lm={};function mM(t){return md.call(Lm,t)?!0:md.call(Um,t)?!1:pM.test(t)?Lm[t]=!0:(Um[t]=!0,!1)}function uc(t,e,n){if(mM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Tl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ai(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var Xu,Om;function Hs(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||"",Om=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xu+t+Om}var Wu=!1;function qu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){h=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=i&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Hs(n):""}function gM(t){switch(t.tag){case 26:case 27:case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 15:return qu(t.type,!1);case 11:return qu(t.type.render,!1);case 1:return qu(t.type,!0);case 31:return Hs("Activity");default:return""}}function Pm(t){try{var e="";do e+=gM(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vM(t){var e=jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){i=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zc(t){t._valueTracker||(t._valueTracker=vM(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xM=/[\n"\\]/g;function qn(t){return t.replace(xM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vd(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+jn(e)):t.value!==""+jn(e)&&(t.value=""+jn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?xd(t,r,jn(e)):n!=null?xd(t,r,jn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+jn(o):t.removeAttribute("name")}function Wv(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;n=n!=null?""+jn(n):"",e=e!=null?""+jn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function xd(t,e,n){e==="number"&&Fc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ir(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function qv(t,e,n){if(e!=null&&(e=""+jn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+jn(n):""}function Yv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(te(92));if(so(i)){if(1<i.length)throw Error(te(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=jn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function mr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _M=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||_M.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zv(t,e,n){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&zm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&zm(t,s,e[s])}function rp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fc(t){return SM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _d=null;function op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,ar=null;function Fm(t){var e=Dr(t);if(e&&(t=e.stateNode)){var n=t[bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(vd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[bn]||null;if(!a)throw Error(te(90));vd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Xv(i)}break e;case"textarea":qv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ir(t,!!n.multiple,e,!1)}}}var Yu=!1;function Kv(t,e,n){if(Yu)return t(e,n);Yu=!0;try{var i=t(e);return i}finally{if(Yu=!1,(Ws!==null||ar!==null)&&(Ru(),Ws&&(e=Ws,t=ar,ar=Ws=null,Fm(e),t)))for(e=0;e<t.length;e++)Fm(t[e])}}function No(t,e){var n=t.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=!1;if(Yi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){yd=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{yd=!1}var _a=null,lp=null,dc=null;function $v(){if(dc)return dc;var t,e=lp,n=e.length,i,a="value"in _a?_a.value:_a.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return dc=a.slice(t,1<i?1-i:void 0)}function hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Bm(){return!1}function En(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:Bm,this.isPropagationStopped=Bm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=En(vs),el=Et({},vs,{view:0,detail:0}),MM=En(el),Zu,Ku,jr,yu=Et({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(Zu=t.screenX-jr.screenX,Ku=t.screenY-jr.screenY):Ku=Zu=0,jr=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Im=En(yu),bM=Et({},yu,{dataTransfer:0}),EM=En(bM),TM=Et({},el,{relatedTarget:0}),$u=En(TM),AM=Et({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),wM=En(AM),RM=Et({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CM=En(RM),NM=Et({},vs,{data:0}),Hm=En(NM),DM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LM[t])?!!e[t]:!1}function cp(){return OM}var PM=Et({},el,{key:function(t){if(t.key){var e=DM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(t){return t.type==="keypress"?hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zM=En(PM),FM=Et({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=En(FM),BM=Et({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),IM=En(BM),HM=Et({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),GM=En(HM),VM=Et({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kM=En(VM),jM=Et({},vs,{newState:0,oldState:0}),XM=En(jM),WM=[9,13,27,32],up=Yi&&"CompositionEvent"in window,ho=null;Yi&&"documentMode"in document&&(ho=document.documentMode);var qM=Yi&&"TextEvent"in window&&!ho,Qv=Yi&&(!up||ho&&8<ho&&11>=ho),Vm=" ",km=!1;function Jv(t,e){switch(t){case"keyup":return WM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ex(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function YM(t,e){switch(t){case"compositionend":return ex(e);case"keypress":return e.which!==32?null:(km=!0,Vm);case"textInput":return t=e.data,t===Vm&&km?null:t;default:return null}}function ZM(t,e){if(qs)return t==="compositionend"||!up&&Jv(t,e)?(t=$v(),dc=lp=_a=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var KM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KM[t.type]:e==="textarea"}function tx(t,e,n,i){Ws?ar?ar.push(i):ar=[i]:Ws=i,e=tu(e,"onChange"),0<e.length&&(n=new _u("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,Do=null;function $M(t){q_(t,0)}function Su(t){var e=ro(t);if(Xv(e))return t}function Xm(t,e){if(t==="change")return e}var nx=!1;if(Yi){var Qu;if(Yi){var Ju="oninput"in document;if(!Ju){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Ju=typeof Wm.oninput=="function"}Qu=Ju}else Qu=!1;nx=Qu&&(!document.documentMode||9<document.documentMode)}function qm(){po&&(po.detachEvent("onpropertychange",ix),Do=po=null)}function ix(t){if(t.propertyName==="value"&&Su(Do)){var e=[];tx(e,Do,t,op(t)),Kv($M,e)}}function QM(t,e,n){t==="focusin"?(qm(),po=e,Do=n,po.attachEvent("onpropertychange",ix)):t==="focusout"&&qm()}function JM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Do)}function eb(t,e){if(t==="click")return Su(e)}function tb(t,e){if(t==="input"||t==="change")return Su(e)}function nb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:nb;function Uo(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!md.call(e,a)||!Fn(t[a],e[a]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function ax(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ax(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fc(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ib=Yi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Sd=null,mo=null,Md=!1;function Km(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Ys==null||Ys!==Fc(i)||(i=Ys,"selectionStart"in i&&fp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Uo(mo,i)||(mo=i,i=tu(Sd,"onSelect"),0<i.length&&(e=new _u("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},ef={},rx={};Yi&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function xs(t){if(ef[t])return ef[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rx)return ef[t]=e[n];return t}var ox=xs("animationend"),lx=xs("animationiteration"),cx=xs("animationstart"),ab=xs("transitionrun"),sb=xs("transitionstart"),rb=xs("transitioncancel"),ux=xs("transitionend"),fx=new Map,bd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bd.push("scrollEnd");function fi(t,e){fx.set(t,e),gs(e,[t])}var $m=new WeakMap;function Yn(t,e){if(typeof t=="object"&&t!==null){var n=$m.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Pm(e)},$m.set(t,e),e)}return{value:t,source:e,stack:Pm(e)}}var kn=[],Ks=0,dp=0;function Mu(){for(var t=Ks,e=dp=Ks=0;e<t;){var n=kn[e];kn[e++]=null;var i=kn[e];kn[e++]=null;var a=kn[e];kn[e++]=null;var s=kn[e];if(kn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&dx(n,a,s)}}function bu(t,e,n,i){kn[Ks++]=t,kn[Ks++]=e,kn[Ks++]=n,kn[Ks++]=i,dp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function hp(t,e,n,i){return bu(t,e,n,i),Bc(t)}function Ur(t,e){return bu(t,null,null,e),Bc(t)}function dx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-On(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function Bc(t){if(50<To)throw To=0,jd=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var $s={};function ob(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new ob(t,e,n,i)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function pc(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")pp(t)&&(r=1);else if(typeof t=="string")r=cE(t,n,vi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case fd:return t=Un(31,n,e,a),t.elementType=fd,t.lanes=s,t;case ks:return as(n.children,a,s,e);case Uv:r=8,a|=24;break;case ld:return t=Un(12,n,e,a|2),t.elementType=ld,t.lanes=s,t;case cd:return t=Un(13,n,e,a),t.elementType=cd,t.lanes=s,t;case ud:return t=Un(19,n,e,a),t.elementType=ud,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $S:case Fi:r=10;break e;case Lv:r=9;break e;case ep:r=11;break e;case tp:r=14;break e;case fa:r=16,i=null;break e}r=29,n=Error(te(130,t===null?"null":typeof t,"")),i=null}return e=Un(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function tf(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function nf(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qs=[],Js=0,Ic=null,Hc=0,Xn=[],Wn=0,ss=null,Bi=1,Ii="";function Za(t,e){Qs[Js++]=Hc,Qs[Js++]=Ic,Ic=t,Hc=e}function px(t,e,n){Xn[Wn++]=Bi,Xn[Wn++]=Ii,Xn[Wn++]=ss,ss=t;var i=Bi;t=Ii;var a=32-On(i)-1;i&=~(1<<a),n+=1;var s=32-On(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Bi=1<<32-On(e)+a|n<<a|i,Ii=s+t}else Bi=1<<s|n<<a|i,Ii=t}function mp(t){t.return!==null&&(Za(t,1),px(t,1,0))}function gp(t){for(;t===Ic;)Ic=Qs[--Js],Qs[Js]=null,Hc=Qs[--Js],Qs[Js]=null;for(;t===ss;)ss=Xn[--Wn],Xn[Wn]=null,Ii=Xn[--Wn],Xn[Wn]=null,Bi=Xn[--Wn],Xn[Wn]=null}var fn=null,Ot=null,lt=!1,rs=null,pi=!1,Ed=Error(te(519));function us(t){var e=Error(te(418,""));throw Lo(Yn(e,t)),Ed}function Qm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[rn]=t,e[bn]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<zo.length;n++)Qe(zo[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),Wv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),zc(e);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),Yv(e,i.value,i.defaultValue,i.children),zc(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Z_(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=Du),e=!0):e=!1,e||us(t)}function Jm(t){for(fn=t.return;fn;)switch(fn.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:fn=fn.return}}function Xr(t){if(t!==fn)return!1;if(!lt)return Jm(t),lt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Kd(t.type,t.memoizedProps)),n=!n),n&&Ot&&us(t),Jm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Ot=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Ot=null}}else e===27?(e=Ot,Fa(t.type)?(t=Jd,Jd=null,Ot=t):Ot=e):Ot=fn?li(t.stateNode.nextSibling):null;return!0}function tl(){Ot=fn=null,lt=!1}function eg(){var t=rs;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),rs=null),t}function Lo(t){rs===null?rs=[t]:rs.push(t)}var Td=bi(null),_s=null,Hi=null;function ha(t,e,n){Ct(Td,e._currentValue),e._currentValue=n}function Xi(t){t._currentValue=Td.current,Kt(Td)}function Ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function wd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ad(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(te(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Ad(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function nl(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var o=a.type;Fn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===Uc.current){if(r=a.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}a=a.return}t!==null&&wd(e,t,n,i),e.flags|=262144}function Gc(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){_s=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function on(t){return mx(_s,t)}function wl(t,e){return _s===null&&fs(t),mx(t,e)}function mx(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Hi===null){if(t===null)throw Error(te(308));Hi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Hi=Hi.next=e;return n}var lb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},cb=kt.unstable_scheduleCallback,ub=kt.unstable_NormalPriority,Gt={$$typeof:Fi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vp(){return{controller:new lb,data:new Map,refCount:0}}function il(t){t.refCount--,t.refCount===0&&cb(ub,function(){t.controller.abort()})}var go=null,Rd=0,gr=0,sr=null;function fb(t,e){if(go===null){var n=go=[];Rd=0,gr=Hp(),sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Rd++,e.then(tg,tg),e}function tg(){if(--Rd===0&&go!==null){sr!==null&&(sr.status="fulfilled");var t=go;go=null,gr=0,sr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function db(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var ng=Ie.S;Ie.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&fb(t,e),ng!==null&&ng(t,e)};var os=bi(null);function xp(){var t=os.current;return t!==null?t:yt.pooledCache}function mc(t,e){e===null?Ct(os,os.current):Ct(os,e.pool)}function gx(){var t=xp();return t===null?null:{parent:Gt._currentValue,pool:t}}var al=Error(te(460)),vx=Error(te(474)),Eu=Error(te(542)),Cd={then:function(){}};function ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rl(){}function xx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Rl,Rl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sg(t),t;default:if(typeof e.status=="string")e.then(Rl,Rl);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sg(t),t}throw vo=e,al}}var vo=null;function ag(){if(vo===null)throw Error(te(459));var t=vo;return vo=null,t}function sg(t){if(t===al||t===Eu)throw Error(te(483))}var da=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Bc(t),dx(t,null,n),e}return bu(t,i,e,n),Bc(t)}function xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hv(t,n)}}function af(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Dd=!1;function _o(){if(Dd){var t=sr;if(t!==null)throw t}}function yo(t,e,n,i){Dd=!1;var a=t.updateQueue;da=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,u=c=l=null,o=s;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(at&h)===h:(i&h)===h){h!==0&&h===gr&&(Dd=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,y=o;h=e;var m=n;switch(y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=Et({},d,h);break e;case 2:da=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,s===null&&(a.shared.lanes=0),Oa|=r,t.lanes=r,t.memoizedState=d}}function _x(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function yx(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)_x(n[t],e)}var vr=bi(null),Vc=bi(0);function rg(t,e){t=$i,Ct(Vc,t),Ct(vr,e),$i=t|e.baseLanes}function Ud(){Ct(Vc,$i),Ct(vr,vr.current)}function yp(){$i=Vc.current,Kt(vr),Kt(Vc)}var Ua=0,$e=null,gt=null,It=null,kc=!1,rr=!1,ds=!1,jc=0,Oo=0,or=null,hb=0;function zt(){throw Error(te(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,a,s){return Ua=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ie.H=t===null||t.memoizedState===null?$x:Qx,ds=!1,s=n(i,a),ds=!1,rr&&(s=Mx(e,n,i,a)),Sx(t),s}function Sx(t){Ie.H=Xc;var e=gt!==null&&gt.next!==null;if(Ua=0,It=gt=$e=null,kc=!1,Oo=0,or=null,e)throw Error(te(300));t===null||Zt||(t=t.dependencies,t!==null&&Gc(t)&&(Zt=!0))}function Mx(t,e,n,i){$e=t;var a=0;do{if(rr&&(or=null),Oo=0,rr=!1,25<=a)throw Error(te(301));if(a+=1,It=gt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ie.H=yb,s=e(n,i)}while(rr);return s}function pb(){var t=Ie.H,e=t.useState()[0];return e=typeof e.then=="function"?sl(e):e,t=t.useState()[0],(gt!==null?gt.memoizedState:null)!==t&&($e.flags|=1024),e}function bp(){var t=jc!==0;return jc=0,t}function Ep(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Tp(t){if(kc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}kc=!1}Ua=0,It=gt=$e=null,rr=!1,Oo=jc=0,or=null}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?$e.memoizedState=It=t:It=It.next=t,It}function Ht(){if(gt===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=It===null?$e.memoizedState:It.next;if(e!==null)It=e,gt=t;else{if(t===null)throw $e.alternate===null?Error(te(467)):Error(te(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?$e.memoizedState=It=t:It=It.next=t}return It}function Ap(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(t){var e=Oo;return Oo+=1,or===null&&(or=[]),t=xx(or,t,e),e=$e,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,Ie.H=e===null||e.memoizedState===null?$x:Qx),t}function Tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sl(t);if(t.$$typeof===Fi)return on(t)}throw Error(te(438,String(t)))}function wp(t){var e=null,n=$e.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=$e.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ap(),$e.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=QS;return e.index++,n}function Zi(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Ht();return Rp(e,gt,t)}function Rp(t,e,n){var i=t.queue;if(i===null)throw Error(te(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(at&d)===d:(Ua&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===gr&&(u=!0);else if((Ua&h)===h){c=c.next,h===gr&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,$e.lanes|=h,Oa|=h;d=c.action,ds&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else h={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,$e.lanes|=d,Oa|=d;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!Fn(s,t.memoizedState)&&(Zt=!0,u&&(n=sr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function sf(t){var e=Ht(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Fn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bx(t,e,n){var i=$e,a=Ht(),s=lt;if(s){if(n===void 0)throw Error(te(407));n=n()}else n=e();var r=!Fn((gt||a).memoizedState,n);r&&(a.memoizedState=n,Zt=!0),a=a.queue;var o=Ax.bind(null,i,a,t);if(rl(2048,8,o,[t]),a.getSnapshot!==e||r||It!==null&&It.memoizedState.tag&1){if(i.flags|=2048,xr(9,Au(),Tx.bind(null,i,a,n,e),null),yt===null)throw Error(te(349));s||Ua&124||Ex(i,e,n)}return n}function Ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e=Ap(),$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tx(t,e,n,i){e.value=n,e.getSnapshot=i,wx(e)&&Rx(t)}function Ax(t,e,n){return n(function(){wx(e)&&Rx(t)})}function wx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Rx(t){var e=Ur(t,2);e!==null&&zn(e,t,2)}function Ld(t){var e=xn();if(typeof t=="function"){var n=t;if(t=n(),ds){xa(!0);try{n()}finally{xa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},e}function Cx(t,e,n,i){return t.baseState=n,Rp(t,gt,typeof i=="function"?i:Zi)}function mb(t,e,n,i,a){if(wu(t))throw Error(te(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ie.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Nx(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Nx(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Ie.T,r={};Ie.T=r;try{var o=n(a,i),l=Ie.S;l!==null&&l(r,o),og(t,e,o)}catch(c){Od(t,e,c)}finally{Ie.T=s}}else try{s=n(a,i),og(t,e,s)}catch(c){Od(t,e,c)}}function og(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){lg(t,e,i)},function(i){return Od(t,e,i)}):lg(t,e,n)}function lg(t,e,n){e.status="fulfilled",e.value=n,Dx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Nx(t,n)))}function Od(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Dx(e),e=e.next;while(e!==i)}t.action=null}function Dx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ux(t,e){return e}function cg(t,e){if(lt){var n=yt.formState;if(n!==null){e:{var i=$e;if(lt){if(Ot){t:{for(var a=Ot,s=pi;a.nodeType!==8;){if(!s){a=null;break t}if(a=li(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ot=li(a.nextSibling),i=a.data==="F!";break e}}us(i)}i=!1}i&&(e=n[0])}}return n=xn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ux,lastRenderedState:e},n.queue=i,n=Yx.bind(null,$e,i),i.dispatch=n,i=Ld(!1),s=Up.bind(null,$e,!1,i.queue),i=xn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=mb.bind(null,$e,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function ug(t){var e=Ht();return Lx(e,gt,t)}function Lx(t,e,n){if(e=Rp(t,e,Ux)[0],t=gc(Zi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=sl(e)}catch(r){throw r===al?Eu:r}else i=e;e=Ht();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&($e.flags|=2048,xr(9,Au(),gb.bind(null,a,n),null)),[i,s,t]}function gb(t,e){t.action=e}function fg(t){var e=Ht(),n=gt;if(n!==null)return Lx(e,n,t);Ht(),e=e.memoizedState,n=Ht();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function xr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=$e.updateQueue,e===null&&(e=Ap(),$e.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Au(){return{destroy:void 0,resource:void 0}}function Ox(){return Ht().memoizedState}function vc(t,e,n,i){var a=xn();i=i===void 0?null:i,$e.flags|=t,a.memoizedState=xr(1|e,Au(),n,i)}function rl(t,e,n,i){var a=Ht();i=i===void 0?null:i;var s=a.memoizedState.inst;gt!==null&&i!==null&&Sp(i,gt.memoizedState.deps)?a.memoizedState=xr(e,s,n,i):($e.flags|=t,a.memoizedState=xr(1|e,s,n,i))}function dg(t,e){vc(8390656,8,t,e)}function Px(t,e){rl(2048,8,t,e)}function zx(t,e){return rl(4,2,t,e)}function Fx(t,e){return rl(4,4,t,e)}function Bx(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ix(t,e,n){n=n!=null?n.concat([t]):null,rl(4,4,Bx.bind(null,e,t),n)}function Cp(){}function Hx(t,e){var n=Ht();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gx(t,e){var n=Ht();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Sp(e,i[1]))return i[0];if(i=t(),ds){xa(!0);try{t()}finally{xa(!1)}}return n.memoizedState=[i,e],i}function Np(t,e,n){return n===void 0||Ua&1073741824?t.memoizedState=e:(t.memoizedState=n,t=D_(),$e.lanes|=t,Oa|=t,n)}function Vx(t,e,n,i){return Fn(n,e)?n:vr.current!==null?(t=Np(t,n,i),Fn(t,e)||(Zt=!0),t):Ua&42?(t=D_(),$e.lanes|=t,Oa|=t,e):(Zt=!0,t.memoizedState=n)}function kx(t,e,n,i,a){var s=ct.p;ct.p=s!==0&&8>s?s:8;var r=Ie.T,o={};Ie.T=o,Up(t,!1,e,n);try{var l=a(),c=Ie.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=db(l,i);So(t,e,u,Pn(t))}else So(t,e,i,Pn(t))}catch(d){So(t,e,{then:function(){},status:"rejected",reason:d},Pn())}finally{ct.p=s,Ie.T=r}}function vb(){}function Pd(t,e,n,i){if(t.tag!==5)throw Error(te(476));var a=jx(t).queue;kx(t,a,e,is,n===null?vb:function(){return Xx(t),n(i)})}function jx(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:is,baseState:is,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:is},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Xx(t){var e=jx(t).next.queue;So(t,e,{},Pn())}function Dp(){return on(Io)}function Wx(){return Ht().memoizedState}function qx(){return Ht().memoizedState}function xb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Pn();t=ba(n);var i=Ea(e,t,n);i!==null&&(zn(i,e,n),xo(i,e,n)),e={cache:vp()},t.payload=e;return}e=e.return}}function _b(t,e,n){var i=Pn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},wu(t)?Zx(e,n):(n=hp(t,e,n,i),n!==null&&(zn(n,t,i),Kx(n,e,i)))}function Yx(t,e,n){var i=Pn();So(t,e,n,i)}function So(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(t))Zx(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Fn(o,r))return bu(t,e,a,0),yt===null&&Mu(),!1}catch{}finally{}if(n=hp(t,e,a,i),n!==null)return zn(n,t,i),Kx(n,e,i),!0}return!1}function Up(t,e,n,i){if(i={lane:2,revertLane:Hp(),action:i,hasEagerState:!1,eagerState:null,next:null},wu(t)){if(e)throw Error(te(479))}else e=hp(t,n,i,2),e!==null&&zn(e,t,2)}function wu(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Zx(t,e){rr=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kx(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hv(t,n)}}var Xc={readContext:on,use:Tu,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt},$x={readContext:on,use:Tu,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:dg,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,vc(4194308,4,Bx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vc(4194308,4,t,e)},useInsertionEffect:function(t,e){vc(4,2,t,e)},useMemo:function(t,e){var n=xn();e=e===void 0?null:e;var i=t();if(ds){xa(!0);try{t()}finally{xa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=xn();if(n!==void 0){var a=n(e);if(ds){xa(!0);try{n(e)}finally{xa(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=_b.bind(null,$e,t),[i.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:function(t){t=Ld(t);var e=t.queue,n=Yx.bind(null,$e,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Cp,useDeferredValue:function(t,e){var n=xn();return Np(n,t,e)},useTransition:function(){var t=Ld(!1);return t=kx.bind(null,$e,t.queue,!0,!1),xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=$e,a=xn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),yt===null)throw Error(te(349));at&124||Ex(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,dg(Ax.bind(null,i,s,t),[t]),i.flags|=2048,xr(9,Au(),Tx.bind(null,i,s,n,e),null),n},useId:function(){var t=xn(),e=yt.identifierPrefix;if(lt){var n=Ii,i=Bi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=jc++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=hb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Dp,useFormState:cg,useActionState:cg,useOptimistic:function(t){var e=xn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Up.bind(null,$e,!0,n),n.dispatch=e,[t,e]},useMemoCache:wp,useCacheRefresh:function(){return xn().memoizedState=xb.bind(null,$e)}},Qx={readContext:on,use:Tu,useCallback:Hx,useContext:on,useEffect:Px,useImperativeHandle:Ix,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:Gx,useReducer:gc,useRef:Ox,useState:function(){return gc(Zi)},useDebugValue:Cp,useDeferredValue:function(t,e){var n=Ht();return Vx(n,gt.memoizedState,t,e)},useTransition:function(){var t=gc(Zi)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:sl(t),e]},useSyncExternalStore:bx,useId:Wx,useHostTransitionStatus:Dp,useFormState:ug,useActionState:ug,useOptimistic:function(t,e){var n=Ht();return Cx(n,gt,t,e)},useMemoCache:wp,useCacheRefresh:qx},yb={readContext:on,use:Tu,useCallback:Hx,useContext:on,useEffect:Px,useImperativeHandle:Ix,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:Gx,useReducer:sf,useRef:Ox,useState:function(){return sf(Zi)},useDebugValue:Cp,useDeferredValue:function(t,e){var n=Ht();return gt===null?Np(n,t,e):Vx(n,gt.memoizedState,t,e)},useTransition:function(){var t=sf(Zi)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:sl(t),e]},useSyncExternalStore:bx,useId:Wx,useHostTransitionStatus:Dp,useFormState:fg,useActionState:fg,useOptimistic:function(t,e){var n=Ht();return gt!==null?Cx(n,gt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:wp,useCacheRefresh:qx},lr=null,Po=0;function Cl(t){var e=Po;return Po+=1,lr===null&&(lr=[]),xx(lr,t,e)}function Wr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nl(t,e){throw e.$$typeof===KS?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function hg(t){var e=t._init;return e(t._payload)}function Jx(t){function e(f,g){if(t){var S=f.deletions;S===null?(f.deletions=[g],f.flags|=16):S.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(f,g){return f=ji(f,g),f.index=0,f.sibling=null,f}function s(f,g,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<g?(f.flags|=67108866,g):S):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,g,S,M){return g===null||g.tag!==6?(g=tf(S,f.mode,M),g.return=f,g):(g=a(g,S),g.return=f,g)}function l(f,g,S,M){var C=S.type;return C===ks?u(f,g,S.props.children,M,S.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fa&&hg(C)===g.type)?(g=a(g,S.props),Wr(g,S),g.return=f,g):(g=pc(S.type,S.key,S.props,null,f.mode,M),Wr(g,S),g.return=f,g)}function c(f,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=nf(S,f.mode,M),g.return=f,g):(g=a(g,S.children||[]),g.return=f,g)}function u(f,g,S,M,C){return g===null||g.tag!==7?(g=as(S,f.mode,M,C),g.return=f,g):(g=a(g,S),g.return=f,g)}function d(f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=tf(""+g,f.mode,S),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ml:return S=pc(g.type,g.key,g.props,null,f.mode,S),Wr(S,g),S.return=f,S;case ao:return g=nf(g,f.mode,S),g.return=f,g;case fa:var M=g._init;return g=M(g._payload),d(f,g,S)}if(so(g)||Vr(g))return g=as(g,f.mode,S,null),g.return=f,g;if(typeof g.then=="function")return d(f,Cl(g),S);if(g.$$typeof===Fi)return d(f,wl(f,g),S);Nl(f,g)}return null}function h(f,g,S,M){var C=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return C!==null?null:o(f,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ml:return S.key===C?l(f,g,S,M):null;case ao:return S.key===C?c(f,g,S,M):null;case fa:return C=S._init,S=C(S._payload),h(f,g,S,M)}if(so(S)||Vr(S))return C!==null?null:u(f,g,S,M,null);if(typeof S.then=="function")return h(f,g,Cl(S),M);if(S.$$typeof===Fi)return h(f,g,wl(f,S),M);Nl(f,S)}return null}function p(f,g,S,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(S)||null,o(g,f,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ml:return f=f.get(M.key===null?S:M.key)||null,l(g,f,M,C);case ao:return f=f.get(M.key===null?S:M.key)||null,c(g,f,M,C);case fa:var R=M._init;return M=R(M._payload),p(f,g,S,M,C)}if(so(M)||Vr(M))return f=f.get(S)||null,u(g,f,M,C,null);if(typeof M.then=="function")return p(f,g,S,Cl(M),C);if(M.$$typeof===Fi)return p(f,g,S,wl(g,M),C);Nl(g,M)}return null}function x(f,g,S,M){for(var C=null,R=null,A=g,U=g=0,T=null;A!==null&&U<S.length;U++){A.index>U?(T=A,A=null):T=A.sibling;var _=h(f,A,S[U],M);if(_===null){A===null&&(A=T);break}t&&A&&_.alternate===null&&e(f,A),g=s(_,g,U),R===null?C=_:R.sibling=_,R=_,A=T}if(U===S.length)return n(f,A),lt&&Za(f,U),C;if(A===null){for(;U<S.length;U++)A=d(f,S[U],M),A!==null&&(g=s(A,g,U),R===null?C=A:R.sibling=A,R=A);return lt&&Za(f,U),C}for(A=i(A);U<S.length;U++)T=p(A,f,U,S[U],M),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?U:T.key),g=s(T,g,U),R===null?C=T:R.sibling=T,R=T);return t&&A.forEach(function(w){return e(f,w)}),lt&&Za(f,U),C}function y(f,g,S,M){if(S==null)throw Error(te(151));for(var C=null,R=null,A=g,U=g=0,T=null,_=S.next();A!==null&&!_.done;U++,_=S.next()){A.index>U?(T=A,A=null):T=A.sibling;var w=h(f,A,_.value,M);if(w===null){A===null&&(A=T);break}t&&A&&w.alternate===null&&e(f,A),g=s(w,g,U),R===null?C=w:R.sibling=w,R=w,A=T}if(_.done)return n(f,A),lt&&Za(f,U),C;if(A===null){for(;!_.done;U++,_=S.next())_=d(f,_.value,M),_!==null&&(g=s(_,g,U),R===null?C=_:R.sibling=_,R=_);return lt&&Za(f,U),C}for(A=i(A);!_.done;U++,_=S.next())_=p(A,f,U,_.value,M),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?U:_.key),g=s(_,g,U),R===null?C=_:R.sibling=_,R=_);return t&&A.forEach(function(H){return e(f,H)}),lt&&Za(f,U),C}function m(f,g,S,M){if(typeof S=="object"&&S!==null&&S.type===ks&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ml:e:{for(var C=S.key;g!==null;){if(g.key===C){if(C=S.type,C===ks){if(g.tag===7){n(f,g.sibling),M=a(g,S.props.children),M.return=f,f=M;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fa&&hg(C)===g.type){n(f,g.sibling),M=a(g,S.props),Wr(M,S),M.return=f,f=M;break e}n(f,g);break}else e(f,g);g=g.sibling}S.type===ks?(M=as(S.props.children,f.mode,M,S.key),M.return=f,f=M):(M=pc(S.type,S.key,S.props,null,f.mode,M),Wr(M,S),M.return=f,f=M)}return r(f);case ao:e:{for(C=S.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(f,g.sibling),M=a(g,S.children||[]),M.return=f,f=M;break e}else{n(f,g);break}else e(f,g);g=g.sibling}M=nf(S,f.mode,M),M.return=f,f=M}return r(f);case fa:return C=S._init,S=C(S._payload),m(f,g,S,M)}if(so(S))return x(f,g,S,M);if(Vr(S)){if(C=Vr(S),typeof C!="function")throw Error(te(150));return S=C.call(S),y(f,g,S,M)}if(typeof S.then=="function")return m(f,g,Cl(S),M);if(S.$$typeof===Fi)return m(f,g,wl(f,S),M);Nl(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(f,g.sibling),M=a(g,S),M.return=f,f=M):(n(f,g),M=tf(S,f.mode,M),M.return=f,f=M),r(f)):n(f,g)}return function(f,g,S,M){try{Po=0;var C=m(f,g,S,M);return lr=null,C}catch(A){if(A===al||A===Eu)throw A;var R=Un(29,A,null,f.mode);return R.lanes=M,R.return=f,R}finally{}}}var _r=Jx(!0),e_=Jx(!1),Qn=bi(null),_i=null;function pa(t){var e=t.alternate;Ct(Vt,Vt.current&1),Ct(Qn,t),_i===null&&(e===null||vr.current!==null||e.memoizedState!==null)&&(_i=t)}function t_(t){if(t.tag===22){if(Ct(Vt,Vt.current),Ct(Qn,t),_i===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(_i=t)}}else ma()}function ma(){Ct(Vt,Vt.current),Ct(Qn,Qn.current)}function Gi(t){Kt(Qn),_i===t&&(_i=null),Kt(Vt)}var Vt=bi(0);function Wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Qd(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=ba(i);a.payload=e,n!=null&&(a.callback=n),e=Ea(t,a,i),e!==null&&(zn(e,t,i),xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=ba(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ea(t,a,i),e!==null&&(zn(e,t,i),xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=ba(n);i.tag=2,e!=null&&(i.callback=e),e=Ea(t,i,n),e!==null&&(zn(e,t,n),xo(e,t,n))}};function pg(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,i)||!Uo(a,s):!0}function mg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zd.enqueueReplaceState(e,e.state,null)}function hs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Et({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var qc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function n_(t){qc(t)}function i_(t){console.error(t)}function a_(t){qc(t)}function Yc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function gg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Fd(t,e,n){return n=ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Yc(t,e)},n}function s_(t){return t=ba(t),t.tag=3,t}function r_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){gg(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){gg(e,n,i),typeof a!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Sb(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&nl(e,n,a,!0),n=Qn.current,n!==null){switch(n.tag){case 13:return _i===null?Xd():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Cd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),vf(t,i,a)),!1;case 22:return n.flags|=65536,i===Cd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),vf(t,i,a)),!1}throw Error(te(435,n.tag))}return vf(t,i,a),Xd(),!1}if(lt)return e=Qn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Ed&&(t=Error(te(422),{cause:i}),Lo(Yn(t,n)))):(i!==Ed&&(e=Error(te(423),{cause:i}),Lo(Yn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Yn(i,n),a=Fd(t.stateNode,i,a),af(t,a),Pt!==4&&(Pt=2)),!1;var s=Error(te(520),{cause:i});if(s=Yn(s,n),Eo===null?Eo=[s]:Eo.push(s),Pt!==4&&(Pt=2),e===null)return!0;i=Yn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Fd(n.stateNode,i,t),af(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=s_(a),r_(a,t,n,i),af(n,a),!1}n=n.return}while(n!==null);return!1}var o_=Error(te(461)),Zt=!1;function Qt(t,e,n,i){e.child=t===null?e_(e,null,n,i):_r(e,t.child,n,i)}function vg(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return fs(e),i=Mp(t,e,n,r,s,a),o=bp(),t!==null&&!Zt?(Ep(t,e,a),Ki(t,e,a)):(lt&&o&&mp(e),e.flags|=1,Qt(t,e,i,a),e.child)}function xg(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,l_(t,e,s,i,a)):(t=pc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Lp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(r,i)&&t.ref===e.ref)return Ki(t,e,a)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function l_(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(Uo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,Lp(t,a))t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Ki(t,e,a)}return Bd(t,e,n,i,a)}function c_(t,e,n){var i=e.pendingProps,a=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=s!==null?s.baseLanes|n:n,t!==null){for(a=e.child=t.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;e.childLanes=s&~i}else e.childLanes=0,e.child=null;return _g(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&mc(e,s!==null?s.cachePool:null),s!==null?rg(e,s):Ud(),t_(e);else return e.lanes=e.childLanes=536870912,_g(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(mc(e,s.cachePool),rg(e,s),ma(),e.memoizedState=null):(t!==null&&mc(e,null),Ud(),ma());return Qt(t,e,a,n),e.child}function _g(t,e,n,i){var a=xp();return a=a===null?null:{parent:Gt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&mc(e,null),Ud(),t_(e),t!==null&&nl(t,e,i,!0),null}function xc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(te(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Bd(t,e,n,i,a){return fs(e),n=Mp(t,e,n,i,void 0,a),i=bp(),t!==null&&!Zt?(Ep(t,e,a),Ki(t,e,a)):(lt&&i&&mp(e),e.flags|=1,Qt(t,e,n,a),e.child)}function yg(t,e,n,i,a,s){return fs(e),e.updateQueue=null,n=Mx(e,i,n,a),Sx(t),i=bp(),t!==null&&!Zt?(Ep(t,e,s),Ki(t,e,s)):(lt&&i&&mp(e),e.flags|=1,Qt(t,e,n,s),e.child)}function Sg(t,e,n,i,a){if(fs(e),e.stateNode===null){var s=$s,r=n.contextType;typeof r=="object"&&r!==null&&(s=on(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},_p(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?on(r):$s,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(rf(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&zd.enqueueReplaceState(s,s.state,null),yo(e,i,s,a),_o(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=hs(n,o);s.props=l;var c=s.context,u=n.contextType;r=$s,typeof u=="object"&&u!==null&&(r=on(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&mg(e,s,i,r),da=!1;var h=e.memoizedState;s.state=h,yo(e,i,s,a),_o(),c=e.memoizedState,o||h!==c||da?(typeof d=="function"&&(rf(e,n,d,i),c=e.memoizedState),(l=da||pg(e,n,l,i,h,c,r))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Nd(t,e),r=e.memoizedProps,u=hs(n,r),s.props=u,d=e.pendingProps,h=s.context,c=n.contextType,l=$s,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||h!==l)&&mg(e,s,i,l),da=!1,h=e.memoizedState,s.state=h,yo(e,i,s,a),_o();var p=e.memoizedState;r!==d||h!==p||da||t!==null&&t.dependencies!==null&&Gc(t.dependencies)?(typeof o=="function"&&(rf(e,n,o,i),p=e.memoizedState),(u=da||pg(e,n,u,i,h,p,l)||t!==null&&t.dependencies!==null&&Gc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,xc(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=_r(e,t.child,null,a),e.child=_r(e,null,n,a)):Qt(t,e,n,a),e.memoizedState=s.state,t=e.child):t=Ki(t,e,a),t}function Mg(t,e,n,i){return tl(),e.flags|=256,Qt(t,e,n,i),e.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:gx()}}function cf(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Kn),t}function u_(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Vt.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(a?pa(e):ma(),lt){var o=Ot,l;if(l=o){e:{for(l=o,o=pi;l.nodeType!==8;){if(!o){o=null;break e}if(l=li(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:ss!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},l=Un(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,fn=e,Ot=null,l=!0):l=!1}l||us(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Qd(o)?e.lanes=32:e.lanes=536870912,null;Gi(e)}return o=i.children,i=i.fallback,a?(ma(),a=e.mode,o=Zc({mode:"hidden",children:o},a),i=as(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=lf(n),a.childLanes=cf(t,r,n),e.memoizedState=of,i):(pa(e),Id(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(pa(e),e.flags&=-257,e=uf(t,e,n)):e.memoizedState!==null?(ma(),e.child=t.child,e.flags|=128,e=null):(ma(),a=i.fallback,o=e.mode,i=Zc({mode:"visible",children:i.children},o),a=as(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,_r(e,t.child,null,n),i=e.child,i.memoizedState=lf(n),i.childLanes=cf(t,r,n),e.memoizedState=of,e=a);else if(pa(e),Qd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(te(419)),i.stack="",i.digest=r,Lo({value:i,source:null,stack:null}),e=uf(t,e,n)}else if(Zt||nl(t,e,n,!1),r=(n&t.childLanes)!==0,Zt||r){if(r=yt,r!==null&&(i=n&-n,i=i&42?1:ip(i),i=i&(r.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Ur(t,i),zn(r,t,i),o_;o.data==="$?"||Xd(),e=uf(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Ot=li(o.nextSibling),fn=e,lt=!0,rs=null,pi=!1,t!==null&&(Xn[Wn++]=Bi,Xn[Wn++]=Ii,Xn[Wn++]=ss,Bi=t.id,Ii=t.overflow,ss=e),e=Id(e,i.children),e.flags|=4096);return e}return a?(ma(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=ji(c,a):(a=as(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=lf(n):(l=o.cachePool,l!==null?(c=Gt._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=gx(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=cf(t,r,n),e.memoizedState=of,i):(pa(e),n=t.child,t=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Id(t,e){return e=Zc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Zc(t,e){return t=Un(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function uf(t,e,n){return _r(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ad(t.return,e,n)}function ff(t,e,n,i,a){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a)}function f_(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(Ct(Vt,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Wc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),ff(e,!1,a,n,s);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Wc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}ff(e,!0,n,null,s);break;case"together":ff(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oa|=e.lanes,!(n&e.childLanes))if(t!==null){if(nl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Gc(t)))}function Mb(t,e,n){switch(e.tag){case 3:Lc(e,e.stateNode.containerInfo),ha(e,Gt,t.memoizedState.cache),tl();break;case 27:case 5:pd(e);break;case 4:Lc(e,e.stateNode.containerInfo);break;case 10:ha(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(pa(e),e.flags|=128,null):n&e.child.childLanes?u_(t,e,n):(pa(e),t=Ki(t,e,n),t!==null?t.sibling:null);pa(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(nl(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return f_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ct(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,c_(t,e,n);case 24:ha(e,Gt,t.memoizedState.cache)}return Ki(t,e,n)}function d_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!Lp(t,n)&&!(e.flags&128))return Zt=!1,Mb(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,lt&&e.flags&1048576&&px(e,Hc,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")pp(i)?(t=hs(i,t),e.tag=1,e=Sg(null,e,i,t,n)):(e.tag=0,e=Bd(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===ep){e.tag=11,e=vg(null,e,i,t,n);break e}else if(a===tp){e.tag=14,e=xg(null,e,i,t,n);break e}}throw e=dd(i)||i,Error(te(306,e,""))}}return e;case 0:return Bd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=hs(i,e.pendingProps),Sg(t,e,i,a,n);case 3:e:{if(Lc(e,e.stateNode.containerInfo),t===null)throw Error(te(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,Nd(t,e),yo(e,i,null,n);var r=e.memoizedState;if(i=r.cache,ha(e,Gt,i),i!==s.cache&&wd(e,[Gt],n,!0),_o(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Mg(t,e,i,n);break e}else if(i!==a){a=Yn(Error(te(424)),e),Lo(a),e=Mg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=li(t.firstChild),fn=e,lt=!0,rs=null,pi=!0,n=e_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(tl(),i===a){e=Ki(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 26:return xc(t,e),t===null?(n=Hg(e.type,null,e.pendingProps,null))?e.memoizedState=n:lt||(n=e.type,t=e.pendingProps,i=nu(Ma.current).createElement(n),i[rn]=e,i[bn]=t,tn(i,n,t),Yt(i),e.stateNode=i):e.memoizedState=Hg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return pd(e),t===null&&lt&&(i=e.stateNode=Q_(e.type,e.pendingProps,Ma.current),fn=e,pi=!0,a=Ot,Fa(e.type)?(Jd=a,Ot=li(i.firstChild)):Ot=a),Qt(t,e,e.pendingProps.children,n),xc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((a=i=Ot)&&(i=Kb(i,e.type,e.pendingProps,pi),i!==null?(e.stateNode=i,fn=e,Ot=li(i.firstChild),pi=!1,a=!0):a=!1),a||us(e)),pd(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Kd(a,s)?i=null:r!==null&&Kd(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Mp(t,e,pb,null,null,n),Io._currentValue=a),xc(t,e),Qt(t,e,i,n),e.child;case 6:return t===null&&lt&&((t=n=Ot)&&(n=$b(n,e.pendingProps,pi),n!==null?(e.stateNode=n,fn=e,Ot=null,t=!0):t=!1),t||us(e)),null;case 13:return u_(t,e,n);case 4:return Lc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_r(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return vg(t,e,e.type,e.pendingProps,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ha(e,e.type,i.value),Qt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,fs(e),a=on(a),i=i(a),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return xg(t,e,e.type,e.pendingProps,n);case 15:return l_(t,e,e.type,e.pendingProps,n);case 19:return f_(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=Zc(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=ji(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return c_(t,e,n);case 24:return fs(e),i=on(Gt),t===null?(a=xp(),a===null&&(a=yt,s=vp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},_p(e),ha(e,Gt,a)):(t.lanes&n&&(Nd(t,e),yo(e,null,null,n),_o()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ha(e,Gt,i)):(i=s.cache,ha(e,Gt,i),i!==a.cache&&wd(e,[Gt],n,!0))),Qt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function wi(t){t.flags|=4}function Eg(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ty(e)){if(e=Qn.current,e!==null&&((at&4194048)===at?_i!==null:(at&62914560)!==at&&!(at&536870912)||e!==_i))throw vo=Cd,vx;t.flags|=8192}}function Dl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Bv():536870912,t.lanes|=e,yr|=e)}function qr(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bb(t,e,n){var i=e.pendingProps;switch(gp(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Xi(Gt),hr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Xr(e)?wi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,eg())),Dt(e),null;case 26:return n=e.memoizedState,t===null?(wi(e),n!==null?(Dt(e),Eg(e,n)):(Dt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(wi(e),Dt(e),Eg(e,n)):(Dt(e),e.flags&=-16777217):(t.memoizedProps!==i&&wi(e),Dt(e),e.flags&=-16777217),null;case 27:Oc(e),n=Ma.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Dt(e),null}t=vi.current,Xr(e)?Qm(e):(t=Q_(a,i,n),e.stateNode=t,wi(e))}return Dt(e),null;case 5:if(Oc(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Dt(e),null}if(t=vi.current,Xr(e))Qm(e);else{switch(a=nu(Ma.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[rn]=e,t[bn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(tn(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&wi(e)}}return Dt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Ma.current,Xr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=fn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[rn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Z_(t.nodeValue,n)),t||us(e)}else t=nu(t).createTextNode(i),t[rn]=e,e.stateNode=t}return Dt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Xr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[rn]=e}else tl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),a=!1}else a=eg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Gi(e),e):(Gi(e),null)}if(Gi(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Dl(e,e.updateQueue),Dt(e),null;case 4:return hr(),t===null&&Gp(e.stateNode.containerInfo),Dt(e),null;case 10:return Xi(e.type),Dt(e),null;case 19:if(Kt(Vt),a=e.memoizedState,a===null)return Dt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)qr(a,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Wc(t),s!==null){for(e.flags|=128,qr(a,!1),t=s.updateQueue,e.updateQueue=t,Dl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hx(n,t),n=n.sibling;return Ct(Vt,Vt.current&1|2),e.child}t=t.sibling}a.tail!==null&&xi()>$c&&(e.flags|=128,i=!0,qr(a,!1),e.lanes=4194304)}else{if(!i)if(t=Wc(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Dl(e,t),qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!lt)return Dt(e),null}else 2*xi()-a.renderingStartTime>$c&&n!==536870912&&(e.flags|=128,i=!0,qr(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(t=a.last,t!==null?t.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xi(),e.sibling=null,t=Vt.current,Ct(Vt,i?t&1|2:t&1),e):(Dt(e),null);case 22:case 23:return Gi(e),yp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),n=e.updateQueue,n!==null&&Dl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Kt(os),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Xi(Gt),Dt(e),null;case 25:return null;case 30:return null}throw Error(te(156,e.tag))}function Eb(t,e){switch(gp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(Gt),hr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Oc(e),null;case 13:if(Gi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));tl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(Vt),null;case 4:return hr(),null;case 10:return Xi(e.type),null;case 22:case 23:return Gi(e),yp(),t!==null&&Kt(os),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Xi(Gt),null;case 25:return null;default:return null}}function h_(t,e){switch(gp(e),e.tag){case 3:Xi(Gt),hr();break;case 26:case 27:case 5:Oc(e);break;case 4:hr();break;case 13:Gi(e);break;case 19:Kt(Vt);break;case 10:Xi(e.type);break;case 22:case 23:Gi(e),yp(),t!==null&&Kt(os);break;case 24:Xi(Gt)}}function ol(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){_t(e,e.return,o)}}function La(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(u){_t(a,l,u)}}}i=i.next}while(i!==s)}}catch(u){_t(e,e.return,u)}}function p_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{yx(e,n)}catch(i){_t(t,t.return,i)}}}function m_(t,e,n){n.props=hs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){_t(t,e,i)}}function Mo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){_t(t,e,a)}}function mi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){_t(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){_t(t,e,a)}else n.current=null}function g_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){_t(t,t.return,a)}}function df(t,e,n){try{var i=t.stateNode;Xb(i,t.type,n,e),i[bn]=e}catch(a){_t(t,t.return,a)}}function v_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Du));else if(i!==4&&(i===27&&Fa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Kc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Fa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}function x_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);tn(e,i,n),e[rn]=t,e[bn]=n}catch(s){_t(t,t.return,s)}}var zi=!1,Ft=!1,pf=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,qt=null;function Tb(t,e){if(t=t.containerInfo,Yd=ru,t=sx(t),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===a&&(o=r),h===s&&++u===i&&(l=r),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zd={focusedElem:t,selectionRange:n},ru=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var x=hs(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(x,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(y){_t(n,n.return,y)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)$d(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$d(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(te(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function __(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ia(t,n),i&4&&ol(5,n);break;case 1:if(ia(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){_t(n,n.return,r)}else{var a=hs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){_t(n,n.return,r)}}i&64&&p_(n),i&512&&Mo(n,n.return);break;case 3:if(ia(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{yx(t,e)}catch(r){_t(n,n.return,r)}}break;case 27:e===null&&i&4&&x_(n);case 26:case 5:ia(t,n),e===null&&i&4&&g_(n),i&512&&Mo(n,n.return);break;case 12:ia(t,n);break;case 13:ia(t,n),i&4&&M_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Ob.bind(null,n),Qb(t,n))));break;case 22:if(i=n.memoizedState!==null||zi,!i){e=e!==null&&e.memoizedState!==null||Ft,a=zi;var s=Ft;zi=i,(Ft=e)&&!s?ua(t,n,(n.subtreeFlags&8772)!==0):ia(t,n),zi=a,Ft=s}break;case 30:break;default:ia(t,n)}}function y_(t){var e=t.alternate;e!==null&&(t.alternate=null,y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&sp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,_n=!1;function Ri(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 26:Ft||mi(n,e),Ri(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||mi(n,e);var i=wt,a=_n;Fa(n.type)&&(wt=n.stateNode,_n=!1),Ri(t,e,n),Ao(n.stateNode),wt=i,_n=a;break;case 5:Ft||mi(n,e);case 6:if(i=wt,a=_n,wt=null,Ri(t,e,n),wt=i,_n=a,wt!==null)if(_n)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(s){_t(n,e,s)}else try{wt.removeChild(n.stateNode)}catch(s){_t(n,e,s)}break;case 18:wt!==null&&(_n?(t=wt,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Vo(t)):Fg(wt,n.stateNode));break;case 4:i=wt,a=_n,wt=n.stateNode.containerInfo,_n=!0,Ri(t,e,n),wt=i,_n=a;break;case 0:case 11:case 14:case 15:Ft||La(2,n,e),Ft||La(4,n,e),Ri(t,e,n);break;case 1:Ft||(mi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&m_(n,e,i)),Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:Ft=(i=Ft)||n.memoizedState!==null,Ri(t,e,n),Ft=i;break;default:Ri(t,e,n)}}function M_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vo(t)}catch(n){_t(e,e.return,n)}}function Ab(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Tg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Tg),e;default:throw Error(te(435,t.tag))}}function mf(t,e){var n=Ab(t);e.forEach(function(i){var a=Pb.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Fa(o.type)){wt=o.stateNode,_n=!1;break e}break;case 5:wt=o.stateNode,_n=!1;break e;case 3:case 4:wt=o.stateNode.containerInfo,_n=!0;break e}o=o.return}if(wt===null)throw Error(te(160));S_(s,r,a),wt=null,_n=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)b_(e,t),e=e.sibling}var ai=null;function b_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(e,t),Rn(t),i&4&&(La(3,t,t.return),ol(3,t),La(5,t,t.return));break;case 1:wn(e,t),Rn(t),i&512&&(Ft||n===null||mi(n,n.return)),i&64&&zi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ai;if(wn(e,t),Rn(t),i&512&&(Ft||n===null||mi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Jo]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),tn(s,i,n),s[rn]=t,Yt(s),i=s;break e;case"link":var r=Vg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=a.createElement(i),tn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Vg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=a.createElement(i),tn(s,i,n),a.head.appendChild(s);break;default:throw Error(te(468,i))}s[rn]=t,Yt(s),i=s}t.stateNode=i}else kg(a,t.type,t.stateNode);else t.stateNode=Gg(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?kg(a,t.type,t.stateNode):Gg(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&df(t,t.memoizedProps,n.memoizedProps)}break;case 27:wn(e,t),Rn(t),i&512&&(Ft||n===null||mi(n,n.return)),n!==null&&i&4&&df(t,t.memoizedProps,n.memoizedProps);break;case 5:if(wn(e,t),Rn(t),i&512&&(Ft||n===null||mi(n,n.return)),t.flags&32){a=t.stateNode;try{mr(a,"")}catch(p){_t(t,t.return,p)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,df(t,a,n!==null?n.memoizedProps:a)),i&1024&&(pf=!0);break;case 6:if(wn(e,t),Rn(t),i&4){if(t.stateNode===null)throw Error(te(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(p){_t(t,t.return,p)}}break;case 3:if(Sc=null,a=ai,ai=iu(e.containerInfo),wn(e,t),ai=a,Rn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(p){_t(t,t.return,p)}pf&&(pf=!1,E_(t));break;case 4:i=ai,ai=iu(t.stateNode.containerInfo),wn(e,t),Rn(t),ai=i;break;case 12:wn(e,t),Rn(t);break;case 13:wn(e,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bp=xi()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,mf(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=zi,u=Ft;if(zi=c||a,Ft=u||l,wn(e,t),Ft=u,zi=c,Rn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||zi||Ft||Ka(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){_t(l,l.return,p)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){_t(l,l.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,mf(t,n))));break;case 19:wn(e,t),Rn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,mf(t,i)));break;case 30:break;case 21:break;default:wn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(v_(i)){n=i;break}i=i.return}if(n==null)throw Error(te(160));switch(n.tag){case 27:var a=n.stateNode,s=hf(t);Kc(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(mr(r,""),n.flags&=-33);var o=hf(t);Kc(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=hf(t);Hd(t,c,l);break;default:throw Error(te(161))}}catch(u){_t(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;E_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ia(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)__(t,e.alternate,e),e=e.sibling}function Ka(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:La(4,e,e.return),Ka(e);break;case 1:mi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&m_(e,e.return,n),Ka(e);break;case 27:Ao(e.stateNode);case 26:case 5:mi(e,e.return),Ka(e);break;case 22:e.memoizedState===null&&Ka(e);break;case 30:Ka(e);break;default:Ka(e)}t=t.sibling}}function ua(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:ua(a,s,n),ol(4,s);break;case 1:if(ua(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){_t(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)_x(l[a],o)}catch(c){_t(i,i.return,c)}}n&&r&64&&p_(s),Mo(s,s.return);break;case 27:x_(s);case 26:case 5:ua(a,s,n),n&&i===null&&r&4&&g_(s),Mo(s,s.return);break;case 12:ua(a,s,n);break;case 13:ua(a,s,n),n&&r&4&&M_(a,s);break;case 22:s.memoizedState===null&&ua(a,s,n),Mo(s,s.return);break;case 30:break;default:ua(a,s,n)}e=e.sibling}}function Op(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&il(n))}function Pp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t))}function di(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T_(t,e,n,i),e=e.sibling}function T_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:di(t,e,n,i),a&2048&&ol(9,e);break;case 1:di(t,e,n,i);break;case 3:di(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t)));break;case 12:if(a&2048){di(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){_t(e,e.return,l)}}else di(t,e,n,i);break;case 13:di(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?di(t,e,n,i):bo(t,e):s._visibility&2?di(t,e,n,i):(s._visibility|=2,Gs(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&Op(r,e);break;case 24:di(t,e,n,i),a&2048&&Pp(e.alternate,e);break;default:di(t,e,n,i)}}function Gs(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Gs(s,r,o,l,a),ol(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Gs(s,r,o,l,a):bo(s,r):(u._visibility|=2,Gs(s,r,o,l,a)),a&&c&2048&&Op(r.alternate,r);break;case 24:Gs(s,r,o,l,a),a&&c&2048&&Pp(r.alternate,r);break;default:Gs(s,r,o,l,a)}e=e.sibling}}function bo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:bo(n,i),a&2048&&Op(i.alternate,i);break;case 24:bo(n,i),a&2048&&Pp(i.alternate,i);break;default:bo(n,i)}e=e.sibling}}var oo=8192;function Ms(t){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)A_(t),t=t.sibling}function A_(t){switch(t.tag){case 26:Ms(t),t.flags&oo&&t.memoizedState!==null&&fE(ai,t.memoizedState,t.memoizedProps);break;case 5:Ms(t);break;case 3:case 4:var e=ai;ai=iu(t.stateNode.containerInfo),Ms(t),ai=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=oo,oo=16777216,Ms(t),oo=e):Ms(t));break;default:Ms(t)}}function w_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Yr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,C_(i,t)}w_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R_(t),t=t.sibling}function R_(t){switch(t.tag){case 0:case 11:case 15:Yr(t),t.flags&2048&&La(9,t,t.return);break;case 3:Yr(t);break;case 12:Yr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_c(t)):Yr(t);break;default:Yr(t)}}function _c(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,C_(i,t)}w_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:La(8,e,e.return),_c(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,_c(e));break;default:_c(e)}t=t.sibling}}function C_(t,e){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:La(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,qt=i;else e:for(n=t;qt!==null;){i=qt;var a=i.sibling,s=i.return;if(y_(i),i===n){qt=null;break e}if(a!==null){a.return=s,qt=a;break e}qt=s}}}var wb={getCacheForType:function(t){var e=on(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Rb=typeof WeakMap=="function"?WeakMap:Map,ft=0,yt=null,Je=null,at=0,ut=0,Dn=null,ya=!1,Lr=!1,zp=!1,$i=0,Pt=0,Oa=0,ls=0,Fp=0,Kn=0,yr=0,Eo=null,yn=null,Gd=!1,Bp=0,$c=1/0,Qc=null,Ta=null,en=0,Aa=null,Sr=null,cr=0,Vd=0,kd=null,N_=null,To=0,jd=null;function Pn(){if(ft&2&&at!==0)return at&-at;if(Ie.T!==null){var t=gr;return t!==0?t:Hp()}return Gv()}function D_(){Kn===0&&(Kn=!(at&536870912)||lt?Fv():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),Kn}function zn(t,e,n){(t===yt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Mr(t,0),Sa(t,at,Kn,!1)),Qo(t,n),(!(ft&2)||t!==yt)&&(t===yt&&(!(ft&2)&&(ls|=n),Pt===4&&Sa(t,at,Kn,!1)),Ei(t))}function U_(t,e,n){if(ft&6)throw Error(te(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||$o(t,e),a=i?Db(t,e):gf(t,e,!0),s=i;do{if(a===0){Lr&&!i&&Sa(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!Cb(n)){a=gf(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=Eo;var l=o.current.memoizedState.isDehydrated;if(l&&(Mr(o,r).flags|=256),r=gf(o,r,!1),r!==2){if(zp&&!l){o.errorRecoveryDisabledLanes|=s,ls|=s,a=4;break e}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Mr(t,0),Sa(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e)break;case 6:Sa(i,e,Kn,!ya);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(a=Bp+300-xi(),10<a)){if(Sa(i,e,Kn,!ya),xu(i,0,!0)!==0)break e;i.timeoutHandle=$_(Ag.bind(null,i,n,yn,Qc,Gd,e,Kn,ls,yr,ya,s,2,-0,0),a);break e}Ag(i,n,yn,Qc,Gd,e,Kn,ls,yr,ya,s,0,-0,0)}}break}while(!0);Ei(t)}function Ag(t,e,n,i,a,s,r,o,l,c,u,d,h,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:uE},A_(e),d=dE(),d!==null)){t.cancelPendingCommit=d(Rg.bind(null,t,e,s,n,i,a,r,o,l,u,1,h,p)),Sa(t,s,r,!c);return}Rg(t,e,s,n,i,a,r,o,l)}function Cb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Fn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sa(t,e,n,i){e&=~Fp,e&=~ls,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-On(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Iv(t,n,e)}function Ru(){return ft&6?!0:(ll(0),!1)}function Ip(){if(Je!==null){if(ut===0)var t=Je.return;else t=Je,Hi=_s=null,Tp(t),lr=null,Po=0,t=Je;for(;t!==null;)h_(t.alternate,t),t=t.return;Je=null}}function Mr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,qb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ip(),yt=t,Je=n=ji(t.current,null),at=e,ut=0,Dn=null,ya=!1,Lr=$o(t,e),zp=!1,yr=Kn=Fp=ls=Oa=Pt=0,yn=Eo=null,Gd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-On(i),s=1<<a;e|=t[a],i&=~s}return $i=e,Mu(),n}function L_(t,e){$e=null,Ie.H=Xc,e===al||e===Eu?(e=ag(),ut=3):e===vx?(e=ag(),ut=4):ut=e===o_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,Je===null&&(Pt=1,Yc(t,Yn(e,t.current)))}function O_(){var t=Ie.H;return Ie.H=Xc,t===null?Xc:t}function P_(){var t=Ie.A;return Ie.A=wb,t}function Xd(){Pt=4,ya||(at&4194048)!==at&&Qn.current!==null||(Lr=!0),!(Oa&134217727)&&!(ls&134217727)||yt===null||Sa(yt,at,Kn,!1)}function gf(t,e,n){var i=ft;ft|=2;var a=O_(),s=P_();(yt!==t||at!==e)&&(Qc=null,Mr(t,e)),e=!1;var r=Pt;e:do try{if(ut!==0&&Je!==null){var o=Je,l=Dn;switch(ut){case 8:Ip(),r=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var c=ut;if(ut=0,Dn=null,er(t,o,l,c),n&&Lr){r=0;break e}break;default:c=ut,ut=0,Dn=null,er(t,o,l,c)}}Nb(),r=Pt;break}catch(u){L_(t,u)}while(!0);return e&&t.shellSuspendCounter++,Hi=_s=null,ft=i,Ie.H=a,Ie.A=s,Je===null&&(yt=null,at=0,Mu()),r}function Nb(){for(;Je!==null;)z_(Je)}function Db(t,e){var n=ft;ft|=2;var i=O_(),a=P_();yt!==t||at!==e?(Qc=null,$c=xi()+500,Mr(t,e)):Lr=$o(t,e);e:do try{if(ut!==0&&Je!==null){e=Je;var s=Dn;t:switch(ut){case 1:ut=0,Dn=null,er(t,e,s,1);break;case 2:case 9:if(ig(s)){ut=0,Dn=null,wg(e);break}e=function(){ut!==2&&ut!==9||yt!==t||(ut=7),Ei(t)},s.then(e,e);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:ig(s)?(ut=0,Dn=null,wg(e)):(ut=0,Dn=null,er(t,e,s,7));break;case 5:var r=null;switch(Je.tag){case 26:r=Je.memoizedState;case 5:case 27:var o=Je;if(!r||ty(r)){ut=0,Dn=null;var l=o.sibling;if(l!==null)Je=l;else{var c=o.return;c!==null?(Je=c,Cu(c)):Je=null}break t}}ut=0,Dn=null,er(t,e,s,5);break;case 6:ut=0,Dn=null,er(t,e,s,6);break;case 8:Ip(),Pt=6;break e;default:throw Error(te(462))}}Ub();break}catch(u){L_(t,u)}while(!0);return Hi=_s=null,Ie.H=i,Ie.A=a,ft=n,Je!==null?0:(yt=null,at=0,Mu(),Pt)}function Ub(){for(;Je!==null&&!eM();)z_(Je)}function z_(t){var e=d_(t.alternate,t,$i);t.memoizedProps=t.pendingProps,e===null?Cu(t):Je=e}function wg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=yg(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=yg(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:Tp(e);default:h_(n,e),e=Je=hx(e,$i),e=d_(n,e,$i)}t.memoizedProps=t.pendingProps,e===null?Cu(t):Je=e}function er(t,e,n,i){Hi=_s=null,Tp(e),lr=null,Po=0;var a=e.return;try{if(Sb(t,a,e,n,at)){Pt=1,Yc(t,Yn(n,t.current)),Je=null;return}}catch(s){if(a!==null)throw Je=a,s;Pt=1,Yc(t,Yn(n,t.current)),Je=null;return}e.flags&32768?(lt||i===1?t=!0:Lr||at&536870912?t=!1:(ya=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),F_(e,t)):Cu(e)}function Cu(t){var e=t;do{if(e.flags&32768){F_(e,ya);return}t=e.return;var n=bb(e.alternate,e,$i);if(n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Pt===0&&(Pt=5)}function F_(t,e){do{var n=Eb(t.alternate,t);if(n!==null){n.flags&=32767,Je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Je=t;return}Je=t=n}while(t!==null);Pt=6,Je=null}function Rg(t,e,n,i,a,s,r,o,l){t.cancelPendingCommit=null;do Nu();while(en!==0);if(ft&6)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));if(s=e.lanes|e.childLanes,s|=dp,uM(t,n,s,r,o,l),t===yt&&(Je=yt=null,at=0),Sr=e,Aa=t,cr=n,Vd=s,kd=a,N_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,zb(Pc,function(){return V_(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ie.T,Ie.T=null,a=ct.p,ct.p=2,r=ft,ft|=4;try{Tb(t,e,n)}finally{ft=r,ct.p=a,Ie.T=i}}en=1,B_(),I_(),H_()}}function B_(){if(en===1){en=0;var t=Aa,e=Sr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ie.T,Ie.T=null;var i=ct.p;ct.p=2;var a=ft;ft|=4;try{b_(e,t);var s=Zd,r=sx(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&ax(o.ownerDocument.documentElement,o)){if(l!==null&&fp(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),x=o.textContent.length,y=Math.min(l.start,x),m=l.end===void 0?y:Math.min(l.end,x);!p.extend&&y>m&&(r=m,m=y,y=r);var f=Zm(o,y),g=Zm(o,m);if(f&&g&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var S=d.createRange();S.setStart(f.node,f.offset),p.removeAllRanges(),y>m?(p.addRange(S),p.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),p.addRange(S))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var M=d[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ru=!!Yd,Zd=Yd=null}finally{ft=a,ct.p=i,Ie.T=n}}t.current=e,en=2}}function I_(){if(en===2){en=0;var t=Aa,e=Sr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ie.T,Ie.T=null;var i=ct.p;ct.p=2;var a=ft;ft|=4;try{__(t,e.alternate,e)}finally{ft=a,ct.p=i,Ie.T=n}}en=3}}function H_(){if(en===4||en===3){en=0,tM();var t=Aa,e=Sr,n=cr,i=N_;e.subtreeFlags&10256||e.flags&10256?en=5:(en=0,Sr=Aa=null,G_(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ta=null),ap(n),e=e.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Ko,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ie.T,a=ct.p,ct.p=2,Ie.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ie.T=e,ct.p=a}}cr&3&&Nu(),Ei(t),a=t.pendingLanes,n&4194090&&a&42?t===jd?To++:(To=0,jd=t):To=0,ll(0)}}function G_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,il(e)))}function Nu(t){return B_(),I_(),H_(),V_()}function V_(){if(en!==5)return!1;var t=Aa,e=Vd;Vd=0;var n=ap(cr),i=Ie.T,a=ct.p;try{ct.p=32>n?32:n,Ie.T=null,n=kd,kd=null;var s=Aa,r=cr;if(en=0,Sr=Aa=null,cr=0,ft&6)throw Error(te(331));var o=ft;if(ft|=4,R_(s.current),T_(s,s.current,r,n),ft=o,ll(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Ko,s)}catch{}return!0}finally{ct.p=a,Ie.T=i,G_(t,e)}}function Cg(t,e,n){e=Yn(n,e),e=Fd(t.stateNode,e,2),t=Ea(t,e,2),t!==null&&(Qo(t,2),Ei(t))}function _t(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))){t=Yn(n,t),n=s_(2),i=Ea(e,n,2),i!==null&&(r_(n,i,e,t),Qo(i,2),Ei(i));break}}e=e.return}}function vf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Rb;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(zp=!0,a.add(n),t=Lb.bind(null,t,e,n),e.then(t,t))}function Lb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,yt===t&&(at&n)===n&&(Pt===4||Pt===3&&(at&62914560)===at&&300>xi()-Bp?!(ft&2)&&Mr(t,0):Fp|=n,yr===at&&(yr=0)),Ei(t)}function k_(t,e){e===0&&(e=Bv()),t=Ur(t,e),t!==null&&(Qo(t,e),Ei(t))}function Ob(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function Pb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(te(314))}i!==null&&i.delete(e),k_(t,n)}function zb(t,e){return np(t,e)}var Jc=null,Vs=null,Wd=!1,eu=!1,xf=!1,cs=0;function Ei(t){t!==Vs&&t.next===null&&(Vs===null?Jc=Vs=t:Vs=Vs.next=t),eu=!0,Wd||(Wd=!0,Bb())}function ll(t,e){if(!xf&&eu){xf=!0;do for(var n=!1,i=Jc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-On(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Ng(i,s))}else s=at,s=xu(i,i===yt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||$o(i,s)||(n=!0,Ng(i,s));i=i.next}while(n);xf=!1}}function Fb(){j_()}function j_(){eu=Wd=!1;var t=0;cs!==0&&(Wb()&&(t=cs),cs=0);for(var e=xi(),n=null,i=Jc;i!==null;){var a=i.next,s=X_(i,e);s===0?(i.next=null,n===null?Jc=a:n.next=a,a===null&&(Vs=n)):(n=i,(t!==0||s&3)&&(eu=!0)),i=a}ll(t)}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-On(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=cM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=yt,n=at,n=xu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ku(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||$o(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&ku(i),ap(n)){case 2:case 8:n=Pv;break;case 32:n=Pc;break;case 268435456:n=zv;break;default:n=Pc}return i=W_.bind(null,t),n=np(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&ku(i),t.callbackPriority=2,t.callbackNode=null,2}function W_(t,e){if(en!==0&&en!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Nu()&&t.callbackNode!==n)return null;var i=at;return i=xu(t,t===yt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(U_(t,i,e),X_(t,xi()),t.callbackNode!=null&&t.callbackNode===n?W_.bind(null,t):null)}function Ng(t,e){if(Nu())return null;U_(t,e,!0)}function Bb(){Yb(function(){ft&6?np(Ov,Fb):j_()})}function Hp(){return cs===0&&(cs=Fv()),cs}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fc(""+t)}function Ug(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ib(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=Dg((a[bn]||null).action),r=i.submitter;r&&(e=(e=r[bn]||null)?Dg(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new _u("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(cs!==0){var l=r?Ug(a,r):new FormData(a);Pd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Ug(a,r):new FormData(a),Pd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var _f=0;_f<bd.length;_f++){var yf=bd[_f],Hb=yf.toLowerCase(),Gb=yf[0].toUpperCase()+yf.slice(1);fi(Hb,"on"+Gb)}fi(ox,"onAnimationEnd");fi(lx,"onAnimationIteration");fi(cx,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(ab,"onTransitionRun");fi(sb,"onTransitionStart");fi(rb,"onTransitionCancel");fi(ux,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(u){qc(u)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(u){qc(u)}a.currentTarget=null,s=l}}}}function Qe(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(Y_(e,t,2,!1),n.add(i))}function Sf(t,e,n){var i=0;e&&(i|=4),Y_(n,t,i,e)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Gp(t){if(!t[Ul]){t[Ul]=!0,Vv.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ul]||(e[Ul]=!0,Sf("selectionchange",!1,e))}}function Y_(t,e,n,i){switch(ry(e)){case 2:var a=mE;break;case 8:a=gE;break;default:a=Xp}n=a.bind(null,e,n,t),a=void 0,!yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Mf(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Xs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}Kv(function(){var c=s,u=op(n),d=[];e:{var h=fx.get(t);if(h!==void 0){var p=_u,x=t;switch(t){case"keypress":if(hc(n)===0)break e;case"keydown":case"keyup":p=zM;break;case"focusin":x="focus",p=$u;break;case"focusout":x="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=IM;break;case ox:case lx:case cx:p=wM;break;case ux:p=GM;break;case"scroll":case"scrollend":p=MM;break;case"wheel":p=kM;break;case"copy":case"cut":case"paste":p=CM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gm;break;case"toggle":case"beforetoggle":p=XM}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),f=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||f===null||(M=No(g,f),M!=null&&y.push(Fo(g,M,S))),m)break;g=g.return}0<y.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==_d&&(x=n.relatedTarget||n.fromElement)&&(Xs(x)||x[Nr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Xs(x):null,x!==null&&(m=Zo(x),y=x.tag,x!==m||y!==5&&y!==27&&y!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=Im,M="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Gm,M="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:ro(p),S=x==null?h:ro(x),h=new y(M,g+"leave",p,n,u),h.target=m,h.relatedTarget=S,M=null,Xs(u)===c&&(y=new y(f,g+"enter",x,n,u),y.target=S,y.relatedTarget=m,M=y),m=M,p&&x)t:{for(y=p,f=x,g=0,S=y;S;S=bs(S))g++;for(S=0,M=f;M;M=bs(M))S++;for(;0<g-S;)y=bs(y),g--;for(;0<S-g;)f=bs(f),S--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=bs(y),f=bs(f)}y=null}else y=null;p!==null&&Lg(d,h,p,y,!1),x!==null&&m!==null&&Lg(d,m,x,y,!0)}}e:{if(h=c?ro(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Xm;else if(jm(h))if(nx)C=tb;else{C=JM;var R=QM}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&rp(c.elementType)&&(C=Xm):C=eb;if(C&&(C=C(t,c))){tx(d,C,n,u);break e}R&&R(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&xd(h,"number",h.value)}switch(R=c?ro(c):window,t){case"focusin":(jm(R)||R.contentEditable==="true")&&(Ys=R,Sd=c,mo=null);break;case"focusout":mo=Sd=Ys=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,Km(d,n,u);break;case"selectionchange":if(ib)break;case"keydown":case"keyup":Km(d,n,u)}var A;if(up)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else qs?Jv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Qv&&n.locale!=="ko"&&(qs||U!=="onCompositionStart"?U==="onCompositionEnd"&&qs&&(A=$v()):(_a=u,lp="value"in _a?_a.value:_a.textContent,qs=!0)),R=tu(c,U),0<R.length&&(U=new Hm(U,t,null,n,u),d.push({event:U,listeners:R}),A?U.data=A:(A=ex(n),A!==null&&(U.data=A)))),(A=qM?YM(t,n):ZM(t,n))&&(U=tu(c,"onBeforeInput"),0<U.length&&(R=new Hm("onBeforeInput","beforeinput",null,n,u),d.push({event:R,listeners:U}),R.data=A)),Ib(d,t,c,n,u)}q_(d,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=No(t,n),a!=null&&i.unshift(Fo(t,a,s)),a=No(t,e),a!=null&&i.push(Fo(t,a,s))),t.tag===3)return i;t=t.return}return[]}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lg(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=No(n,s),c!=null&&r.unshift(Fo(n,c,l))):a||(c=No(n,s),c!=null&&r.push(Fo(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var kb=/\r\n?/g,jb=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(kb,`
`).replace(jb,"")}function Z_(t,e){return e=Og(e),Og(t)===e}function Du(){}function mt(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||mr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&mr(t,""+i);break;case"className":Tl(t,"class",i);break;case"tabIndex":Tl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tl(t,n,i);break;case"style":Zv(t,i,s);break;case"data":if(e!=="object"){Tl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=fc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&mt(t,e,"name",a.name,a,null),mt(t,e,"formEncType",a.formEncType,a,null),mt(t,e,"formMethod",a.formMethod,a,null),mt(t,e,"formTarget",a.formTarget,a,null)):(mt(t,e,"encType",a.encType,a,null),mt(t,e,"method",a.method,a,null),mt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=fc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Du);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=fc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),uc(t,"popover",i);break;case"xlinkActuate":Ai(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ai(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ai(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ai(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ai(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ai(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ai(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ai(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ai(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":uc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yM.get(n)||n,uc(t,n,i))}}function qd(t,e,n,i,a,s){switch(n){case"style":Zv(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"children":typeof i=="string"?mr(t,i):(typeof i=="number"||typeof i=="bigint")&&mr(t,""+i);break;case"onScroll":i!=null&&Qe("scroll",t);break;case"onScrollEnd":i!=null&&Qe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Du);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[bn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):uc(t,n,i)}}}function tn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:mt(t,e,s,r,n,null)}}a&&mt(t,e,"srcSet",n.srcSet,n,null),i&&mt(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":s=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(te(137,e));break;default:mt(t,e,i,u,n,null)}}Wv(t,s,o,l,c,r,a,!1),zc(t);return;case"select":Qe("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:mt(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?ir(t,!!i,e,!1):n!=null&&ir(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(te(91));break;default:mt(t,e,r,o,n,null)}Yv(t,i,a,s),zc(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:mt(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<zo.length;i++)Qe(zo[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:mt(t,e,c,i,n,null)}return;default:if(rp(e)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&qd(t,e,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&mt(t,e,o,i,n,null))}function Xb(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||mt(t,e,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(te(137,e));break;default:p!==d&&mt(t,e,h,p,i,d)}}vd(t,r,o,l,c,u,s,a);return;case"select":p=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||mt(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":h=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&mt(t,e,a,s,i,l)}e=o,n=r,i=p,h!=null?ir(t,!!n,h,!1):!!i!=!!n&&(e!=null?ir(t,!!n,e,!0):ir(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:mt(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(te(91));break;default:a!==s&&mt(t,e,r,a,i,s)}qv(t,h,p);return;case"option":for(var x in n)if(h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:mt(t,e,x,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:mt(t,e,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y)&&mt(t,e,y,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(te(137,e));break;default:mt(t,e,c,h,i,p)}return;default:if(rp(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&qd(t,e,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||qd(t,e,u,h,i,p);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&mt(t,e,f,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||mt(t,e,d,h,i,p)}var Yd=null,Zd=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=null;function Wb(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var $_=typeof setTimeout=="function"?setTimeout:void 0,qb=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(Zb)}:$_;function Zb(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Fg(t,e){var n=e,i=0,a=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var r=t.ownerDocument;if(n&1&&Ao(r.documentElement),n&2&&Ao(r.body),n&4)for(n=r.head,Ao(n),r=n.firstChild;r;){var o=r.nextSibling,l=r.nodeName;r[Jo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=o}}if(a===0){t.removeChild(s),Vo(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);Vo(e)}function $d(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$d(n),sp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Kb(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Jo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function $b(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Qb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Jd=null;function Bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Q_(t,e,n){switch(e=nu(n),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function Ao(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);sp(t)}var Jn=new Map,Ig=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=ct.d;ct.d={f:Jb,r:eE,D:tE,C:nE,L:iE,m:aE,X:rE,S:sE,M:oE};function Jb(){var t=ea.f(),e=Ru();return t||e}function eE(t){var e=Dr(t);e!==null&&e.tag===5&&e.type==="form"?Xx(e):ea.r(t)}var Or=typeof document>"u"?null:document;function J_(t,e,n){var i=Or;if(i&&typeof e=="string"&&e){var a=qn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ig.has(a)||(Ig.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),tn(e,"link",t),Yt(e),i.head.appendChild(e)))}}function tE(t){ea.D(t),J_("dns-prefetch",t,null)}function nE(t,e){ea.C(t,e),J_("preconnect",t,e)}function iE(t,e,n){ea.L(t,e,n);var i=Or;if(i&&t&&e){var a='link[rel="preload"][as="'+qn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+qn(n.imageSizes)+'"]')):a+='[href="'+qn(t)+'"]';var s=a;switch(e){case"style":s=br(t);break;case"script":s=Pr(t)}Jn.has(s)||(t=Et({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Jn.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(cl(s))||e==="script"&&i.querySelector(ul(s))||(e=i.createElement("link"),tn(e,"link",t),Yt(e),i.head.appendChild(e)))}}function aE(t,e){ea.m(t,e);var n=Or;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+qn(i)+'"][href="'+qn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Pr(t)}if(!Jn.has(s)&&(t=Et({rel:"modulepreload",href:t},e),Jn.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ul(s)))return}i=n.createElement("link"),tn(i,"link",t),Yt(i),n.head.appendChild(i)}}}function sE(t,e,n){ea.S(t,e,n);var i=Or;if(i&&t){var a=nr(i).hoistableStyles,s=br(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(cl(s)))o.loading=5;else{t=Et({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Jn.get(s))&&Vp(t,n);var l=r=i.createElement("link");Yt(l),tn(l,"link",t),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,yc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function rE(t,e){ea.X(t,e);var n=Or;if(n&&t){var i=nr(n).hoistableScripts,a=Pr(t),s=i.get(a);s||(s=n.querySelector(ul(a)),s||(t=Et({src:t,async:!0},e),(e=Jn.get(a))&&kp(t,e),s=n.createElement("script"),Yt(s),tn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function oE(t,e){ea.M(t,e);var n=Or;if(n&&t){var i=nr(n).hoistableScripts,a=Pr(t),s=i.get(a);s||(s=n.querySelector(ul(a)),s||(t=Et({src:t,async:!0,type:"module"},e),(e=Jn.get(a))&&kp(t,e),s=n.createElement("script"),Yt(s),tn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Hg(t,e,n,i){var a=(a=Ma.current)?iu(a):null;if(!a)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=br(n.href),n=nr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=br(n.href);var s=nr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(cl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Jn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jn.set(t,n),s||lE(a,t,n,r.state))),e&&i===null)throw Error(te(528,""));return r}if(e&&i!==null)throw Error(te(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Pr(n),n=nr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function br(t){return'href="'+qn(t)+'"'}function cl(t){return'link[rel="stylesheet"]['+t+"]"}function ey(t){return Et({},t,{"data-precedence":t.precedence,precedence:null})}function lE(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),tn(e,"link",n),Yt(e),t.head.appendChild(e))}function Pr(t){return'[src="'+qn(t)+'"]'}function ul(t){return"script[async]"+t}function Gg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+qn(n.href)+'"]');if(i)return e.instance=i,Yt(i),i;var a=Et({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Yt(i),tn(i,"style",a),yc(i,n.precedence,t),e.instance=i;case"stylesheet":a=br(n.href);var s=t.querySelector(cl(a));if(s)return e.state.loading|=4,e.instance=s,Yt(s),s;i=ey(n),(a=Jn.get(a))&&Vp(i,a),s=(t.ownerDocument||t).createElement("link"),Yt(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),tn(s,"link",i),e.state.loading|=4,yc(s,n.precedence,t),e.instance=s;case"script":return s=Pr(n.src),(a=t.querySelector(ul(s)))?(e.instance=a,Yt(a),a):(i=n,(a=Jn.get(s))&&(i=Et({},n),kp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Yt(a),tn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,yc(i,n.precedence,t));return e.instance}function yc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Vp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function kp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Sc=null;function Vg(t,e,n){if(Sc===null){var i=new Map,a=Sc=new Map;a.set(n,i)}else a=Sc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Jo]||s[rn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function kg(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function cE(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ty(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Bo=null;function uE(){}function fE(t,e,n){if(Bo===null)throw Error(te(475));var i=Bo;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=br(n.href),s=t.querySelector(cl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=au.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=s,Yt(s);return}s=t.ownerDocument||t,n=ey(n),(a=Jn.get(a))&&Vp(n,a),s=s.createElement("link"),Yt(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),tn(s,"link",n),e.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=au.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function dE(){if(Bo===null)throw Error(te(475));var t=Bo;return t.stylesheets&&t.count===0&&eh(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function au(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function eh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,e.forEach(hE,t),su=null,au.call(t))}function hE(t,e){if(!(e.state.loading&4)){var n=su.get(t);if(n)var i=n.get(null);else{n=new Map,su.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=au.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Io={$$typeof:Fi,Provider:null,Consumer:null,_currentValue:is,_currentValue2:is,_threadCount:0};function pE(t,e,n,i,a,s,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.hiddenUpdates=ju(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ny(t,e,n,i,a,s,r,o,l,c,u,d){return t=new pE(t,e,n,r,o,l,c,d),e=1,s===!0&&(e|=24),s=Un(3,null,null,e),t.current=s,s.stateNode=t,e=vp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},_p(s),t}function iy(t){return t?(t=$s,t):$s}function ay(t,e,n,i,a,s){a=iy(a),i.context===null?i.context=a:i.pendingContext=a,i=ba(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ea(t,i,e),n!==null&&(zn(n,t,e),xo(n,t,e))}function jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){jg(t,e),(t=t.alternate)&&jg(t,e)}function sy(t){if(t.tag===13){var e=Ur(t,67108864);e!==null&&zn(e,t,67108864),jp(t,67108864)}}var ru=!0;function mE(t,e,n,i){var a=Ie.T;Ie.T=null;var s=ct.p;try{ct.p=2,Xp(t,e,n,i)}finally{ct.p=s,Ie.T=a}}function gE(t,e,n,i){var a=Ie.T;Ie.T=null;var s=ct.p;try{ct.p=8,Xp(t,e,n,i)}finally{ct.p=s,Ie.T=a}}function Xp(t,e,n,i){if(ru){var a=th(i);if(a===null)Mf(t,e,i,ou,n),Xg(t,i);else if(xE(a,t,e,n,i))i.stopPropagation();else if(Xg(t,i),e&4&&-1<vE.indexOf(t)){for(;a!==null;){var s=Dr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Ya(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-On(r);o.entanglements[1]|=l,r&=~l}Ei(s),!(ft&6)&&($c=xi()+500,ll(0))}}break;case 13:o=Ur(s,2),o!==null&&zn(o,s,2),Ru(),jp(s,2)}if(s=th(i),s===null&&Mf(t,e,i,ou,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Mf(t,e,i,null,n)}}function th(t){return t=op(t),Wp(t)}var ou=null;function Wp(t){if(ou=null,t=Xs(t),t!==null){var e=Zo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ou=t,null}function ry(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nM()){case Ov:return 2;case Pv:return 8;case Pc:case iM:return 32;case zv:return 268435456;default:return 32}default:return 32}}var nh=!1,wa=null,Ra=null,Ca=null,Ho=new Map,Go=new Map,ga=[],vE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function Zr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Dr(e),e!==null&&sy(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function xE(t,e,n,i,a){switch(e){case"focusin":return wa=Zr(wa,t,e,n,i,a),!0;case"dragenter":return Ra=Zr(Ra,t,e,n,i,a),!0;case"mouseover":return Ca=Zr(Ca,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Ho.set(s,Zr(Ho.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Go.set(s,Zr(Go.get(s)||null,t,e,n,i,a)),!0}return!1}function oy(t){var e=Xs(t.target);if(e!==null){var n=Zo(e);if(n!==null){if(e=n.tag,e===13){if(e=Nv(n),e!==null){t.blockedOn=e,fM(t.priority,function(){if(n.tag===13){var i=Pn();i=ip(i);var a=Ur(n,i);a!==null&&zn(a,n,i),jp(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_d=i,n.target.dispatchEvent(i),_d=null}else return e=Dr(n),e!==null&&sy(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){Mc(t)&&n.delete(e)}function _E(){nh=!1,wa!==null&&Mc(wa)&&(wa=null),Ra!==null&&Mc(Ra)&&(Ra=null),Ca!==null&&Mc(Ca)&&(Ca=null),Ho.forEach(Wg),Go.forEach(Wg)}function Ll(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,_E)))}var Ol=null;function qg(t){Ol!==t&&(Ol=t,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,function(){Ol===t&&(Ol=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Wp(i||n)===null)continue;break}var s=Dr(n);s!==null&&(t.splice(e,3),e-=3,Pd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Vo(t){function e(l){return Ll(l,t)}wa!==null&&Ll(wa,t),Ra!==null&&Ll(Ra,t),Ca!==null&&Ll(Ca,t),Ho.forEach(e),Go.forEach(e);for(var n=0;n<ga.length;n++){var i=ga[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ga.length&&(n=ga[0],n.blockedOn===null);)oy(n),n.blockedOn===null&&ga.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[bn]||null;if(typeof s=="function")r||qg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[bn]||null)o=r.formAction;else if(Wp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qg(n)}}}function qp(t){this._internalRoot=t}Uu.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var n=e.current,i=Pn();ay(n,i,t,e,null,null)};Uu.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ay(t.current,2,null,t,null,null),Ru(),e[Nr]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ga.length&&e!==0&&e<ga[n].priority;n++);ga.splice(n,0,t),n===0&&oy(t)}};var Yg=Rv.version;if(Yg!=="19.1.0")throw Error(te(527,Yg,"19.1.0"));ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=ZS(e),t=t!==null?Dv(t):null,t=t===null?null:t.stateNode,t};var yE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ie,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Ko=Pl.inject(yE),Ln=Pl}catch{}}gu.createRoot=function(t,e){if(!Cv(t))throw Error(te(299));var n=!1,i="",a=n_,s=i_,r=a_,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=ny(t,1,!1,null,null,n,i,a,s,r,o,null),t[Nr]=e.current,Gp(t),new qp(e)};gu.hydrateRoot=function(t,e,n){if(!Cv(t))throw Error(te(299));var i=!1,a="",s=n_,r=i_,o=a_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=ny(t,1,!0,e,n??null,i,a,s,r,o,l,c),e.context=iy(null),n=e.current,i=Pn(),i=ip(i),a=ba(i),a.callback=null,Ea(n,a,i),n=i,e.current.lanes=n,Qo(e,n),Ei(e),t[Nr]=e.current,Gp(t),new Uu(e)};gu.version="19.1.0";function ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ly)}catch(t){console.error(t)}}ly(),Mv.exports=gu;var SE=Mv.exports;const ME=dv(SE);/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zg="popstate";function bE(t={}){function e(i,a){let{pathname:s,search:r,hash:o}=i.location;return ih("",{pathname:s,search:r,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:ko(a)}return TE(e,n,null,t)}function Ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EE(){return Math.random().toString(36).substring(2,10)}function Kg(t,e){return{usr:t.state,key:t.key,idx:e}}function ih(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?zr(e):e,state:n,key:e&&e.key||i||EE()}}function ko({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function TE(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:s=!1}=i,r=a.history,o="POP",l=null,c=u();c==null&&(c=0,r.replaceState({...r.state,idx:c},""));function u(){return(r.state||{idx:null}).idx}function d(){o="POP";let m=u(),f=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:f})}function h(m,f){o="PUSH";let g=ih(y.location,m,f);c=u()+1;let S=Kg(g,c),M=y.createHref(g);try{r.pushState(S,"",M)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(M)}s&&l&&l({action:o,location:y.location,delta:1})}function p(m,f){o="REPLACE";let g=ih(y.location,m,f);c=u();let S=Kg(g,c),M=y.createHref(g);r.replaceState(S,"",M),s&&l&&l({action:o,location:y.location,delta:0})}function x(m){return AE(m)}let y={get action(){return o},get location(){return t(a,r)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Zg,d),l=m,()=>{a.removeEventListener(Zg,d),l=null}},createHref(m){return e(a,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return r.go(m)}};return y}function AE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ut(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ko(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function cy(t,e,n="/"){return wE(t,e,n,!1)}function wE(t,e,n,i){let a=typeof e=="string"?zr(e):e,s=Qi(a.pathname||"/",n);if(s==null)return null;let r=uy(t);RE(r);let o=null;for(let l=0;o==null&&l<r.length;++l){let c=IE(s);o=FE(r[l],c,i)}return o}function uy(t,e=[],n=[],i=""){let a=(s,r,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(Ut(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=Wi([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ut(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),uy(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:PE(c,s.index),routesMeta:u})};return t.forEach((s,r)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))a(s,r);else for(let l of fy(s.path))a(s,r,l)}),e}function fy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return a?[s,""]:[s];let r=fy(i.join("/")),o=[];return o.push(...r.map(l=>l===""?s:[s,l].join("/"))),a&&o.push(...r),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function RE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var CE=/^:[\w-]+$/,NE=3,DE=2,UE=1,LE=10,OE=-2,$g=t=>t==="*";function PE(t,e){let n=t.split("/"),i=n.length;return n.some($g)&&(i+=OE),e&&(i+=DE),n.filter(a=>!$g(a)).reduce((a,s)=>a+(CE.test(s)?NE:s===""?UE:LE),i)}function zE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function FE(t,e,n=!1){let{routesMeta:i}=t,a={},s="/",r=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=lu({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=lu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(a,d.params),r.push({params:a,pathname:Wi([s,d.pathname]),pathnameBase:kE(Wi([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Wi([s,d.pathnameBase]))}return r}function lu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=BE(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let s=a[0],r=s.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let x=o[h]||"";r=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const p=o[h];return d&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:r,pattern:t}}function BE(t,e=!1,n=!0){yi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function IE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Qi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function HE(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?zr(t):t;return{pathname:n?n.startsWith("/")?n:GE(n,e):e,search:jE(i),hash:XE(a)}}function GE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dy(t){let e=VE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function hy(t,e,n,i=!1){let a;typeof t=="string"?a=zr(t):(a={...t},Ut(!a.pathname||!a.pathname.includes("?"),Ef("?","pathname","search",a)),Ut(!a.pathname||!a.pathname.includes("#"),Ef("#","pathname","hash",a)),Ut(!a.search||!a.search.includes("#"),Ef("#","search","hash",a)));let s=t===""||a.pathname==="",r=s?"/":a.pathname,o;if(r==null)o=n;else{let d=e.length-1;if(!i&&r.startsWith("..")){let h=r.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}o=d>=0?e[d]:"/"}let l=HE(a,o),c=r&&r!=="/"&&r.endsWith("/"),u=(s||r===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Wi=t=>t.join("/").replace(/\/\/+/g,"/"),kE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var py=["POST","PUT","PATCH","DELETE"];new Set(py);var qE=["GET",...py];new Set(qE);var Fr=O.createContext(null);Fr.displayName="DataRouter";var Lu=O.createContext(null);Lu.displayName="DataRouterState";O.createContext(!1);var my=O.createContext({isTransitioning:!1});my.displayName="ViewTransition";var YE=O.createContext(new Map);YE.displayName="Fetchers";var ZE=O.createContext(null);ZE.displayName="Await";var Ti=O.createContext(null);Ti.displayName="Navigation";var fl=O.createContext(null);fl.displayName="Location";var ta=O.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Yp=O.createContext(null);Yp.displayName="RouteError";function KE(t,{relative:e}={}){Ut(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=O.useContext(Ti),{hash:a,pathname:s,search:r}=hl(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:Wi([n,s])),i.createHref({pathname:o,search:r,hash:a})}function dl(){return O.useContext(fl)!=null}function ys(){return Ut(dl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(fl).location}var gy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vy(t){O.useContext(Ti).static||O.useLayoutEffect(t)}function $E(){let{isDataRoute:t}=O.useContext(ta);return t?u1():QE()}function QE(){Ut(dl(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(Fr),{basename:e,navigator:n}=O.useContext(Ti),{matches:i}=O.useContext(ta),{pathname:a}=ys(),s=JSON.stringify(dy(i)),r=O.useRef(!1);return vy(()=>{r.current=!0}),O.useCallback((l,c={})=>{if(yi(r.current,gy),!r.current)return;if(typeof l=="number"){n.go(l);return}let u=hy(l,JSON.parse(s),a,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Wi([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,a,t])}O.createContext(null);function hl(t,{relative:e}={}){let{matches:n}=O.useContext(ta),{pathname:i}=ys(),a=JSON.stringify(dy(n));return O.useMemo(()=>hy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function JE(t,e){return xy(t,e)}function xy(t,e,n,i){var f;Ut(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=O.useContext(Ti),{matches:s}=O.useContext(ta),r=s[s.length-1],o=r?r.params:{},l=r?r.pathname:"/",c=r?r.pathnameBase:"/",u=r&&r.route;{let g=u&&u.path||"";_y(l,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=ys(),h;if(e){let g=typeof e=="string"?zr(e):e;Ut(c==="/"||((f=g.pathname)==null?void 0:f.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),h=g}else h=d;let p=h.pathname||"/",x=p;if(c!=="/"){let g=c.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=cy(t,{pathname:x});yi(u||y!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),yi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=a1(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Wi([c,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Wi([c,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&m?O.createElement(fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},m):m}function e1(){let t=c1(),e=WE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},r=null;return console.error("Error handled by React Router default ErrorBoundary:",t),r=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:a},n):null,r)}var t1=O.createElement(e1,null),n1=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?O.createElement(ta.Provider,{value:this.props.routeContext},O.createElement(Yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function i1({routeContext:t,match:e,children:n}){let i=O.useContext(Fr);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(ta.Provider,{value:t},n)}function a1(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,s=n==null?void 0:n.errors;if(s!=null){let l=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ut(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let r=!1,o=-1;if(n)for(let l=0;l<a.length;l++){let c=a[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:u,errors:d}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){r=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((l,c,u)=>{let d,h=!1,p=null,x=null;n&&(d=s&&c.route.id?s[c.route.id]:void 0,p=c.route.errorElement||t1,r&&(o<0&&u===0?(_y("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):o===u&&(h=!0,x=c.route.hydrateFallbackElement||null)));let y=e.concat(a.slice(0,u+1)),m=()=>{let f;return d?f=p:h?f=x:c.route.Component?f=O.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=l,O.createElement(i1,{match:c,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?O.createElement(n1,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}function Zp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s1(t){let e=O.useContext(Fr);return Ut(e,Zp(t)),e}function r1(t){let e=O.useContext(Lu);return Ut(e,Zp(t)),e}function o1(t){let e=O.useContext(ta);return Ut(e,Zp(t)),e}function Kp(t){let e=o1(t),n=e.matches[e.matches.length-1];return Ut(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function l1(){return Kp("useRouteId")}function c1(){var i;let t=O.useContext(Yp),e=r1("useRouteError"),n=Kp("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function u1(){let{router:t}=s1("useNavigate"),e=Kp("useNavigate"),n=O.useRef(!1);return vy(()=>{n.current=!0}),O.useCallback(async(a,s={})=>{yi(n.current,gy),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...s}))},[t,e])}var Qg={};function _y(t,e,n){!e&&!Qg[t]&&(Qg[t]=!0,yi(!1,n))}O.memo(f1);function f1({routes:t,future:e,state:n}){return xy(t,void 0,n,e)}function ah(t){Ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function d1({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:s=!1}){Ut(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let r=t.replace(/^\/*/,"/"),o=O.useMemo(()=>({basename:r,navigator:a,static:s,future:{}}),[r,a,s]);typeof n=="string"&&(n=zr(n));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=n,p=O.useMemo(()=>{let x=Qi(l,r);return x==null?null:{location:{pathname:x,search:c,hash:u,state:d,key:h},navigationType:i}},[r,l,c,u,d,h,i]);return yi(p!=null,`<Router basename="${r}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:O.createElement(Ti.Provider,{value:o},O.createElement(fl.Provider,{children:e,value:p}))}function h1({children:t,location:e}){return JE(sh(t),e)}function sh(t,e=[]){let n=[];return O.Children.forEach(t,(i,a)=>{if(!O.isValidElement(i))return;let s=[...e,a];if(i.type===O.Fragment){n.push.apply(n,sh(i.props.children,s));return}Ut(i.type===ah,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ut(!i.props.index||!i.props.children,"An index route cannot have child routes.");let r={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=sh(i.props.children,s)),n.push(r)}),n}var bc="get",Ec="application/x-www-form-urlencoded";function Ou(t){return t!=null&&typeof t.tagName=="string"}function p1(t){return Ou(t)&&t.tagName.toLowerCase()==="button"}function m1(t){return Ou(t)&&t.tagName.toLowerCase()==="form"}function g1(t){return Ou(t)&&t.tagName.toLowerCase()==="input"}function v1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function x1(t,e){return t.button===0&&(!e||e==="_self")&&!v1(t)}var zl=null;function _1(){if(zl===null)try{new FormData(document.createElement("form"),0),zl=!1}catch{zl=!0}return zl}var y1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tf(t){return t!=null&&!y1.has(t)?(yi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ec}"`),null):t}function S1(t,e){let n,i,a,s,r;if(m1(t)){let o=t.getAttribute("action");i=o?Qi(o,e):null,n=t.getAttribute("method")||bc,a=Tf(t.getAttribute("enctype"))||Ec,s=new FormData(t)}else if(p1(t)||g1(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Qi(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||bc,a=Tf(t.getAttribute("formenctype"))||Tf(o.getAttribute("enctype"))||Ec,s=new FormData(o,t),!_1()){let{name:c,type:u,value:d}=t;if(u==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,d)}}else{if(Ou(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=bc,i=null,a=Ec,r=t}return s&&a==="text/plain"&&(r=s,s=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:s,body:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $p(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function M1(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Qi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function b1(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function E1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function T1(t,e,n){let i=await Promise.all(t.map(async a=>{let s=e.routes[a.route.id];if(s){let r=await b1(s,n);return r.links?r.links():[]}return[]}));return C1(i.flat(1).filter(E1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Jg(t,e,n,i,a,s){let r=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>r(l,c)||o(l,c)):s==="data"?e.filter((l,c)=>{var d;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(r(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function A1(t,e,{includeHydrateFallback:n}={}){return w1(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function w1(t){return[...new Set(t)]}function R1(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function C1(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let s=JSON.stringify(R1(a));return n.has(s)||(n.add(s),i.push({key:s,link:a})),i},[])}function yy(){let t=O.useContext(Fr);return $p(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function N1(){let t=O.useContext(Lu);return $p(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Qp=O.createContext(void 0);Qp.displayName="FrameworkContext";function Sy(){let t=O.useContext(Qp);return $p(t,"You must render this element inside a <HydratedRouter> element"),t}function D1(t,e){let n=O.useContext(Qp),[i,a]=O.useState(!1),[s,r]=O.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=e,h=O.useRef(null);O.useEffect(()=>{if(t==="render"&&r(!0),t==="viewport"){let y=f=>{f.forEach(g=>{r(g.isIntersecting)})},m=new IntersectionObserver(y,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),O.useEffect(()=>{if(i){let y=setTimeout(()=>{r(!0)},100);return()=>{clearTimeout(y)}}},[i]);let p=()=>{a(!0)},x=()=>{a(!1),r(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Kr(o,p),onBlur:Kr(l,x),onMouseEnter:Kr(c,p),onMouseLeave:Kr(u,x),onTouchStart:Kr(d,p)}]:[!1,h,{}]}function Kr(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function U1({page:t,...e}){let{router:n}=yy(),i=O.useMemo(()=>cy(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?O.createElement(O1,{page:t,matches:i,...e}):null}function L1(t){let{manifest:e,routeModules:n}=Sy(),[i,a]=O.useState([]);return O.useEffect(()=>{let s=!1;return T1(t,e,n).then(r=>{s||a(r)}),()=>{s=!0}},[t,e,n]),i}function O1({page:t,matches:e,...n}){let i=ys(),{manifest:a,routeModules:s}=Sy(),{basename:r}=yy(),{loaderData:o,matches:l}=N1(),c=O.useMemo(()=>Jg(t,e,l,a,i,"data"),[t,e,l,a,i]),u=O.useMemo(()=>Jg(t,e,l,a,i,"assets"),[t,e,l,a,i]),d=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,y=!1;if(e.forEach(f=>{var S;let g=a.routes[f.route.id];!g||!g.hasLoader||(!c.some(M=>M.route.id===f.route.id)&&f.route.id in o&&((S=s[f.route.id])!=null&&S.shouldRevalidate)||g.hasClientLoader?y=!0:x.add(f.route.id))}),x.size===0)return[];let m=M1(t,r,"data");return y&&x.size>0&&m.searchParams.set("_routes",e.filter(f=>x.has(f.route.id)).map(f=>f.route.id).join(",")),[m.pathname+m.search]},[r,o,i,a,c,e,t,s]),h=O.useMemo(()=>A1(u,a),[u,a]),p=L1(u);return O.createElement(O.Fragment,null,d.map(x=>O.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),h.map(x=>O.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),p.map(({key:x,link:y})=>O.createElement("link",{key:x,...y})))}function P1(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var My=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{My&&(window.__reactRouterVersion="7.7.0")}catch{}function z1({basename:t,children:e,window:n}){let i=O.useRef();i.current==null&&(i.current=bE({window:n,v5Compat:!0}));let a=i.current,[s,r]=O.useState({action:a.action,location:a.location}),o=O.useCallback(l=>{O.startTransition(()=>r(l))},[r]);return O.useLayoutEffect(()=>a.listen(o),[a,o]),O.createElement(d1,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:a})}var by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pu=O.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:s,replace:r,state:o,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},p){let{basename:x}=O.useContext(Ti),y=typeof c=="string"&&by.test(c),m,f=!1;if(typeof c=="string"&&y&&(m=c,My))try{let T=new URL(window.location.href),_=c.startsWith("//")?new URL(T.protocol+c):new URL(c),w=Qi(_.pathname,x);_.origin===T.origin&&w!=null?c=w+_.search+_.hash:f=!0}catch{yi(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=KE(c,{relative:a}),[S,M,C]=D1(i,h),R=H1(c,{replace:r,state:o,target:l,preventScrollReset:u,relative:a,viewTransition:d});function A(T){e&&e(T),T.defaultPrevented||R(T)}let U=O.createElement("a",{...h,...C,href:m||g,onClick:f||s?e:A,ref:P1(p,M),target:l,"data-discover":!y&&n==="render"?"true":void 0});return S&&!y?O.createElement(O.Fragment,null,U,O.createElement(U1,{page:g})):U});Pu.displayName="Link";var F1=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:s,to:r,viewTransition:o,children:l,...c},u){let d=hl(r,{relative:c.relative}),h=ys(),p=O.useContext(Lu),{navigator:x,basename:y}=O.useContext(Ti),m=p!=null&&X1(d)&&o===!0,f=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,g=h.pathname,S=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),S=S?S.toLowerCase():null,f=f.toLowerCase()),S&&y&&(S=Qi(S,y)||S);const M=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=g===f||!a&&g.startsWith(f)&&g.charAt(M)==="/",R=S!=null&&(S===f||!a&&S.startsWith(f)&&S.charAt(f.length)==="/"),A={isActive:C,isPending:R,isTransitioning:m},U=C?e:void 0,T;typeof i=="function"?T=i(A):T=[i,C?"active":null,R?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(A):s;return O.createElement(Pu,{...c,"aria-current":U,className:T,ref:u,style:_,to:r,viewTransition:o},typeof l=="function"?l(A):l)});F1.displayName="NavLink";var B1=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:s,method:r=bc,action:o,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},p)=>{let x=k1(),y=j1(o,{relative:c}),m=r.toLowerCase()==="get"?"get":"post",f=typeof o=="string"&&by.test(o),g=S=>{if(l&&l(S),S.defaultPrevented)return;S.preventDefault();let M=S.nativeEvent.submitter,C=(M==null?void 0:M.getAttribute("formmethod"))||r;x(M||S.currentTarget,{fetcherKey:e,method:C,navigate:n,replace:a,state:s,relative:c,preventScrollReset:u,viewTransition:d})};return O.createElement("form",{ref:p,method:m,action:y,onSubmit:i?l:g,...h,"data-discover":!f&&t==="render"?"true":void 0})});B1.displayName="Form";function I1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ey(t){let e=O.useContext(Fr);return Ut(e,I1(t)),e}function H1(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:r}={}){let o=$E(),l=ys(),c=hl(t,{relative:s});return O.useCallback(u=>{if(x1(u,e)){u.preventDefault();let d=n!==void 0?n:ko(l)===ko(c);o(t,{replace:d,state:i,preventScrollReset:a,relative:s,viewTransition:r})}},[l,o,c,n,i,e,t,a,s,r])}var G1=0,V1=()=>`__${String(++G1)}__`;function k1(){let{router:t}=Ey("useSubmit"),{basename:e}=O.useContext(Ti),n=l1();return O.useCallback(async(i,a={})=>{let{action:s,method:r,encType:o,formData:l,body:c}=S1(i,e);if(a.navigate===!1){let u=a.fetcherKey||V1();await t.fetch(u,n,a.action||s,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||r,formEncType:a.encType||o,flushSync:a.flushSync})}else await t.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||r,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function j1(t,{relative:e}={}){let{basename:n}=O.useContext(Ti),i=O.useContext(ta);Ut(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),s={...hl(t||".",{relative:e})},r=ys();if(t==null){s.search=r.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(u=>u==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let u=o.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Wi([n,s.pathname])),ko(s)}function X1(t,e={}){let n=O.useContext(my);Ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Ey("useViewTransitionState"),a=hl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Qi(n.currentLocation.pathname,i)||n.currentLocation.pathname,r=Qi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return lu(a.pathname,r)!=null||lu(a.pathname,s)!=null}/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),e0=t=>{const e=q1(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ty=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),Y1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:s,iconNode:r,...o},l)=>O.createElement("svg",{ref:l,...Z1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ty("lucide",a),...!s&&!Y1(o)&&{"aria-hidden":"true"},...o},[...r.map(([c,u])=>O.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=O.forwardRef(({className:i,...a},s)=>O.createElement(K1,{ref:s,iconNode:e,className:Ty(`lucide-${W1(e0(t))}`,`lucide-${t}`,i),...a}));return n.displayName=e0(t),n};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],t0=st("archive",$1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],J1=st("arrow-right",Q1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],rh=st("box",eT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],nT=st("building-2",tT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],aT=st("camera",iT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gn=st("check",sT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],oT=st("circle-alert",rT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jp=st("circle-check-big",lT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Ay=st("clock",cT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fT=st("cpu",uT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],wy=st("download",dT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pT=st("eye",hT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ry=st("folder",mT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],vT=st("image",gT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],_T=st("loader-circle",xT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Cy=st("maximize-2",yT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],MT=st("menu",ST);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],ET=st("minimize-2",bT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M5 12h14",key:"1ays0h"}]],AT=st("minus",TT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],RT=st("move",wT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],NT=st("play",CT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ny=st("refresh-cw",DT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],LT=st("search",UT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],PT=st("shield",OT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],zu=st("sparkles",zT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],BT=st("star",FT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Tc=st("trash-2",IT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Dy=st("upload",HT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],VT=st("users",GT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],em=st("x",kT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Uy=st("zap",jT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],WT=st("zoom-in",XT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],YT=st("zoom-out",qT);function ZT(){const[t,e]=O.useState(!1);return v.jsxs("header",{className:"bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50",children:[v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"flex justify-between items-center h-16",children:[v.jsx("div",{className:"flex items-center space-x-3",children:v.jsxs(Pu,{to:"/",className:"flex items-center space-x-3 group",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105",children:v.jsx(zu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors",children:"Snap 3D"})]})}),v.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[v.jsx("button",{className:"text-gray-700 hover:text-blue-600 transition-colors font-medium",children:"Sign In"}),v.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Get Started"})]}),v.jsx("button",{className:"md:hidden text-gray-700",onClick:()=>e(!t),children:t?v.jsx(em,{className:"w-6 h-6"}):v.jsx(MT,{className:"w-6 h-6"})})]})}),t&&v.jsx("div",{className:"md:hidden bg-white border-t border-gray-200 shadow-lg",children:v.jsxs("div",{className:"px-4 py-2 space-y-2",children:[v.jsx("button",{className:"block w-full text-left py-3 text-gray-700 font-medium",children:"Sign In"}),v.jsx("button",{className:"block w-full bg-blue-600 text-white py-3 rounded-lg mt-2 font-medium",children:"Get Started"})]})})]})}function KT(){return v.jsx("footer",{className:"bg-gray-900 text-white py-12",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg",children:v.jsx(zu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold",children:"Snap 3D"})]}),v.jsx("p",{className:"text-gray-400",children:"Transform your property images into professional 3D models with enterprise-grade AI technology."})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Product"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"API"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Careers"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Help Center"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Status"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms"})})]})]})]}),v.jsx("div",{className:"border-t border-gray-800 pt-8 mt-8 text-center text-gray-400",children:v.jsx("p",{children:"© 2025 Snap 3D. All rights reserved."})})]})})}function $T(){const[t,e]=O.useState(!1),n=[{icon:v.jsx(aT,{className:"w-8 h-8"}),title:"Professional Image Capture",description:"Guided multi-angle photography system for consistent, high-quality 3D reconstruction results",color:"from-blue-600 to-blue-700"},{icon:v.jsx(Dy,{className:"w-8 h-8"}),title:"Batch Processing",description:"Upload and process multiple property images simultaneously for efficient workflow management",color:"from-slate-600 to-slate-700"},{icon:v.jsx(Uy,{className:"w-8 h-8"}),title:"Enterprise AI Engine",description:"Advanced photogrammetry algorithms deliver precise 3D models with architectural accuracy",color:"from-blue-600 to-blue-700"},{icon:v.jsx(wy,{className:"w-8 h-8"}),title:"Industry-Standard Exports",description:"Export to OBJ, STL, PLY, and GLTF formats compatible with all major 3D software platforms",color:"from-slate-600 to-slate-700"}],i=[{name:"Michael Richardson",role:"CTO, PropertyTech Solutions",content:"Snap 3D has streamlined our property documentation process. The accuracy and speed of 3D model generation has improved our client deliverables significantly.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"},{name:"Sarah Chen",role:"Principal Architect, Design Corp",content:"The precision of the 3D models meets our professional standards. Integration with our existing CAD workflow has been seamless.",rating:5,avatar:"bg-gradient-to-br from-slate-500 to-slate-600"},{name:"David Martinez",role:"Director of Operations, BuildTech",content:"ROI was immediate. What used to take our team hours now takes minutes. The quality consistency across projects is exceptional.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"}],a=[{number:"10,000+",label:"Properties Processed",icon:v.jsx(nT,{className:"w-6 h-6"})},{number:"500+",label:"Enterprise Clients",icon:v.jsx(VT,{className:"w-6 h-6"})},{number:"5 Min",label:"Average Processing Time",icon:v.jsx(Ay,{className:"w-6 h-6"})},{number:"99.9%",label:"Uptime Guarantee",icon:v.jsx(PT,{className:"w-6 h-6"})}];return v.jsxs("div",{className:"min-h-screen bg-white",children:[v.jsx("section",{className:"bg-gradient-to-b from-gray-50 to-white py-20",children:v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"text-center",children:[v.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["Transform Property Images",v.jsx("span",{className:"block text-blue-600",children:"into Professional 3D Models"})]}),v.jsx("p",{className:"text-xl text-gray-600 mb-10 max-w-3xl mx-auto",children:"Enterprise-grade AI-powered photogrammetry solution for real estate professionals, architects, and construction companies. Generate accurate 3D models in minutes."}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[v.jsxs(Pu,{to:"/generate",className:"inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300",children:[v.jsx(NT,{className:"w-5 h-5"}),v.jsx("span",{children:"TRY IT NOW"})]}),v.jsxs("button",{className:"border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2",children:[v.jsx("span",{children:"Schedule Demo"}),v.jsx(J1,{className:"w-5 h-5"})]})]}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",children:a.map((s,r)=>v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"flex items-center justify-center mb-2",children:v.jsx("div",{className:"bg-blue-100 p-2 rounded-lg text-blue-600 mr-2",children:s.icon})}),v.jsx("div",{className:"text-3xl font-bold text-gray-900",children:s.number}),v.jsx("div",{className:"text-gray-600",children:s.label})]},r))})]})})}),v.jsx("section",{id:"features",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Enterprise-Grade Features"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Built for professional workflows and enterprise requirements"})]}),v.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((s,r)=>v.jsxs("div",{className:"text-center group hover:transform hover:scale-105 transition-all duration-300",children:[v.jsx("div",{className:`bg-gradient-to-r ${s.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`,children:s.icon}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:s.title}),v.jsx("p",{className:"text-gray-600",children:s.description})]},r))})]})}),v.jsx("section",{id:"how-it-works",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Streamlined Workflow"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Professional 3D model generation in three simple steps"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"1"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Capture & Upload"}),v.jsx("p",{className:"text-gray-600",children:"Use our guided capture system or upload existing property images following our optimization guidelines"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"2"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"AI Processing"}),v.jsx("p",{className:"text-gray-600",children:"Advanced photogrammetry algorithms analyze images and reconstruct detailed 3D geometry with texture mapping"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"3"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Export & Integrate"}),v.jsx("p",{className:"text-gray-600",children:"Download industry-standard formats or integrate directly with your existing CAD and visualization workflows"})]})]})]})}),v.jsx("section",{id:"testimonials",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Trusted by Industry Leaders"}),v.jsx("p",{className:"text-xl text-gray-600",children:"See how professionals are transforming their workflows"})]}),v.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:i.map((s,r)=>v.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("div",{className:"flex mb-4",children:[...Array(s.rating)].map((o,l)=>v.jsx(BT,{className:"w-5 h-5 text-yellow-400 fill-current"},l))}),v.jsxs("p",{className:"text-gray-600 mb-4",children:['"',s.content,'"']}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-10 h-10 rounded-full ${s.avatar} flex items-center justify-center text-white font-bold`,children:s.name[0]}),v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-gray-900",children:s.name}),v.jsx("p",{className:"text-blue-600 text-sm",children:s.role})]})]})]},r))})]})}),v.jsx("section",{id:"pricing",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Flexible Pricing Plans"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Choose the plan that scales with your business needs"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Professional"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$49",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"25 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Standard export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Email support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Basic analytics"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border-2 border-blue-600 relative transform scale-105 shadow-lg",children:[v.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"}),v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Business"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$149",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"100 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"All export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Priority support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Advanced analytics"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"API access"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Enterprise"}),v.jsx("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:"Custom"}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Unlimited models"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Custom integrations"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"24/7 dedicated support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"SLA guarantees"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(gn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"On-premise deployment"})]})]}),v.jsx("button",{className:"w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium",children:"Contact Sales"})]})]})]})})]})}const n0=({type:t,message:e,onClose:n})=>{const i=()=>{switch(t){case"error":return"bg-red-50 border-red-200 text-red-700";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-700";case"info":return"bg-blue-50 border-blue-200 text-blue-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},a=()=>{switch(t){case"error":return"text-red-500";case"warning":return"text-yellow-500";case"info":return"text-blue-500";default:return"text-gray-500"}};return v.jsxs("div",{className:`mb-6 border rounded-lg p-4 flex items-center space-x-3 ${i()}`,children:[v.jsx(oT,{className:`w-5 h-5 flex-shrink-0 ${a()}`}),v.jsx("p",{className:"flex-1",children:e}),n&&v.jsx("button",{onClick:n,className:`ml-auto transition-colors ${t==="error"?"text-red-500 hover:text-red-700":t==="warning"?"text-yellow-500 hover:text-yellow-700":"text-blue-500 hover:text-blue-700"}`,children:v.jsx(em,{className:"w-5 h-5"})})]})};function QT({selectedImages:t,setSelectedImages:e,selectedObjFiles:n,setSelectedObjFiles:i,uploadType:a,setUploadType:s,error:r,setError:o,onNext:l}){const c=VS.useRef(null),u=x=>{const y=Array.from(x.target.files);if(a==="images"){const f=y.filter(g=>g.type.startsWith("image/")).map(g=>({file:g,url:URL.createObjectURL(g),name:g.name,size:g.size}));e(g=>[...g,...f]),o(null)}else{const m=y.filter(S=>S.name.toLowerCase().endsWith(".obj")),f=y.filter(S=>S.name.toLowerCase().endsWith(".mtl"));if(m.length!==1){o("Please select exactly one .obj file.");return}if(f.length>1){o("Only one .mtl file is allowed.");return}if(y.filter(S=>!S.name.toLowerCase().endsWith(".obj")&&!S.name.toLowerCase().endsWith(".mtl")).length>0){o("Only .obj and .mtl files are allowed for import.");return}i(S=>{const M={...S};return M.obj={file:m[0],name:m[0].name,size:m[0].size},f.length===1?M.mtl={file:f[0],name:f[0].name,size:f[0].size}:delete M.mtl,M}),o(null)}},d=x=>{a==="images"?e(y=>y.filter((m,f)=>f!==x)):i(y=>{const m={...y};return delete m[x],m})},h=a==="images"&&t.length>=2||a==="import"&&n.obj,p=x=>{if(x===0)return"0 Bytes";const y=1024,m=["Bytes","KB","MB","GB"],f=Math.floor(Math.log(x)/Math.log(y));return parseFloat((x/Math.pow(y,f)).toFixed(2))+" "+m[f]};return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Create New 3D Model"}),v.jsx("p",{className:"text-gray-600",children:"Upload images or import existing 3D models to get started"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600",children:"Step 1 of 2"})]})})]})}),v.jsxs("div",{className:"p-8",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Choose Input Type"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[v.jsx("button",{onClick:()=>s("images"),className:`p-6 rounded-xl border-2 ${a==="images"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="images"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(vT,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"From Images"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Generate 3D model from photos"})]})]})}),v.jsx("button",{onClick:()=>s("import"),className:`p-6 rounded-xl border-2 ${a==="import"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="import"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(rh,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"Import OBJ & MTL"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Use existing 3D model files (.obj required, .mtl optional)"})]})]})})]})]}),v.jsx("label",{onClick:()=>{var x;return(x=c.current)==null?void 0:x.click()},className:"block mb-8 cursor-pointer",children:v.jsxs("div",{className:"border-2 border-dashed border-gray-300 p-12 rounded-2xl text-center hover:border-blue-500 hover:bg-blue-50",children:[v.jsx(Dy,{className:"w-8 h-8 text-blue-600 mx-auto mb-4"}),v.jsx("p",{className:"text-lg font-semibold",children:a==="images"?"Upload Images":"Upload OBJ & Optional MTL File"}),v.jsx("p",{className:"text-gray-600",children:a==="images"?"Minimum 2 images required":".obj required, .mtl optional"})]})}),v.jsx("input",{ref:c,type:"file",multiple:!0,accept:a==="images"?"image/*":".obj,.mtl",onChange:u,className:"hidden"}),r&&v.jsx("div",{className:"mb-4 p-4 bg-red-50 text-red-600 rounded-lg",children:r}),a==="images"&&t.length>0&&v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",children:t.map((x,y)=>v.jsxs("div",{className:"relative group",children:[v.jsx("img",{src:x.url,className:"rounded-lg object-cover aspect-square"}),v.jsx("button",{onClick:()=>d(y),className:"absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white",children:v.jsx(Tc,{className:"w-4 h-4"})}),v.jsx("div",{className:"text-sm mt-1 text-gray-700 truncate",children:x.name})]},y))}),a==="import"&&(n.obj||n.mtl)&&v.jsxs("div",{className:"space-y-3 mb-8",children:[n.obj&&v.jsxs("div",{className:"flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg",children:[v.jsxs("span",{className:"text-sm",children:[n.obj.name," (",p(n.obj.size),")"]}),v.jsx("button",{onClick:()=>d("obj"),className:"text-red-600",children:v.jsx(Tc,{className:"w-4 h-4"})})]}),n.mtl&&v.jsxs("div",{className:"flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg",children:[v.jsxs("span",{className:"text-sm",children:[n.mtl.name," (",p(n.mtl.size),")"]}),v.jsx("button",{onClick:()=>d("mtl"),className:"text-red-600",children:v.jsx(Tc,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"border-t pt-6 mt-4 flex justify-between items-center",children:[v.jsx("div",{className:"text-sm text-gray-500",children:h?v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(Jp,{className:"w-4 h-4"}),"Ready to continue"]}):a==="images"?`${t.length}/2 images required`:`${n.obj?1:0}/1 .obj file required${n.mtl?", .mtl attached":", .mtl optional"}`}),v.jsx("button",{onClick:l,disabled:!h,className:`px-6 py-3 rounded-lg font-medium transition ${h?"bg-blue-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Continue to Generate"})]})]})]})})}function JT({uploadType:t,selectedImages:e,selectedObjFiles:n,modelName:i,setModelName:a,processor:s,setProcessor:r,isProcessing:o,processingStep:l,processingSteps:c,handleGenerate:u,backendUp:d}){return O.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsxs("div",{className:"border-b px-8 py-6 border-gray-200",children:[v.jsx("h1",{className:"text-3xl font-bold mb-2 text-gray-900",children:"Generate 3D Model"}),v.jsx("p",{className:"text-gray-600",children:t==="images"?`${e.length} images selected`:`${Object.keys(n).length} OBJ file(s) selected`})]}),v.jsxs("div",{className:"p-8 space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block mb-2 font-semibold",children:"Model Name"}),v.jsx("input",{value:i,onChange:h=>a(h.target.value),placeholder:"Enter model name...",className:"w-full px-4 py-3 border rounded-lg"})]}),t==="images"&&v.jsxs("div",{children:[v.jsx("label",{className:"block mb-2 font-semibold",children:"Select Processor"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["meshroom","open3d"].map(h=>v.jsx("button",{onClick:()=>r(h),className:`p-4 border-2 rounded-xl ${s===h?"border-purple-500 bg-purple-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:`p-2 rounded-lg ${s===h?"bg-purple-500 text-white":"bg-gray-100 text-gray-600"}`,children:h==="meshroom"?v.jsx(fT,{className:"w-5 h-5"}):v.jsx(Uy,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold capitalize",children:h}),v.jsx("div",{className:"text-xs text-gray-500",children:h==="meshroom"?"Photogrammetry based":"Point cloud based"})]})]})},h))})]}),o?v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"text-gray-800 font-semibold",children:"Processing..."}),v.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 overflow-hidden",children:v.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300",style:{width:`${(l+1)/c.length*100}%`}})}),v.jsxs("div",{className:"text-sm text-gray-500 flex items-center gap-2",children:[v.jsx(_T,{className:"w-4 h-4 animate-spin"}),c[l]]})]}):v.jsxs("div",{className:"flex justify-between items-center pt-4 border-t",children:[v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(Jp,{className:"w-5 h-5"}),"Ready to ",t==="images"?"Generate":"Import"]}),v.jsx("button",{onClick:u,disabled:!d||o,className:`px-6 py-3 rounded-lg font-medium shadow hover:bg-purple-700 transition ${!d||o?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-purple-600 text-white"}`,children:t==="images"?"Generate Model":"Import Model"})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="178",eA=0,i0=1,tA=2,Ly=1,nm=2,Pi=3,Ji=0,Mn=1,Zn=2,Na=0,ur=1,a0=2,s0=3,r0=4,nA=5,Ja=100,iA=101,aA=102,sA=103,rA=104,oA=200,lA=201,cA=202,uA=203,oh=204,lh=205,fA=206,dA=207,hA=208,pA=209,mA=210,gA=211,vA=212,xA=213,_A=214,ch=0,uh=1,fh=2,Er=3,dh=4,hh=5,ph=6,mh=7,im=0,yA=1,SA=2,Da=0,MA=1,bA=2,EA=3,Oy=4,TA=5,AA=6,wA=7,Py=300,Tr=301,Ar=302,gh=303,vh=304,Fu=306,cu=1e3,ts=1001,xh=1002,ci=1003,RA=1004,Fl=1005,gi=1006,Af=1007,ns=1008,Si=1009,zy=1010,Fy=1011,jo=1012,am=1013,ps=1014,Vi=1015,pl=1016,sm=1017,rm=1018,Xo=1020,By=35902,Iy=1021,Hy=1022,ri=1023,Wo=1026,qo=1027,Gy=1028,om=1029,Vy=1030,lm=1031,cm=1033,Ac=33776,wc=33777,Rc=33778,Cc=33779,_h=35840,yh=35841,Sh=35842,Mh=35843,bh=36196,Eh=37492,Th=37496,Ah=37808,wh=37809,Rh=37810,Ch=37811,Nh=37812,Dh=37813,Uh=37814,Lh=37815,Oh=37816,Ph=37817,zh=37818,Fh=37819,Bh=37820,Ih=37821,Nc=36492,Hh=36494,Gh=36495,ky=36283,Vh=36284,kh=36285,jh=36286,CA=3200,NA=3201,um=0,DA=1,va="",Jt="srgb",wr="srgb-linear",uu="linear",pt="srgb",Es=7680,o0=519,UA=512,LA=513,OA=514,jy=515,PA=516,zA=517,FA=518,BA=519,l0=35044,c0="300 es",ki=2e3,fu=2001;class Br{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=Math.PI/180,Xh=180/Math.PI;function ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function IA(t,e){return(t%e+e)%e}function Rf(t,e,n){return(1-n)*t+n*e}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gl{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3];const h=s[r+0],p=s[r+1],x=s[r+2],y=s[r+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==p||u!==x){let m=1-o;const f=l*h+c*p+u*x+d*y,g=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,f*g);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const M=o*g;if(l=l*m+h*M,c=c*m+p*M,u=u*m+x*M,d=d*m+y*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=s[r],h=s[r+1],p=s[r+2],x=s[r+3];return e[n]=o*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-o*p,e[n+2]=c*x+u*p+o*h-l*d,e[n+3]=u*x-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(s/2),h=l(i/2),p=l(a/2),x=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-i*c,this._z=s*u+r*c+i*l-a*o,this._w=r*u-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(u0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(u0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),u=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-s*d,this.z=a+l*d+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cf.copy(this).projectOnVector(e),this.sub(Cf)}reflect(e){return this.sub(Cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cf=new F,u0=new gl;class Ye{constructor(e,n,i,a,s,r,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],y=a[0],m=a[3],f=a[6],g=a[1],S=a[4],M=a[7],C=a[2],R=a[5],A=a[8];return s[0]=r*y+o*g+l*C,s[3]=r*m+o*S+l*R,s[6]=r*f+o*M+l*A,s[1]=c*y+u*g+d*C,s[4]=c*m+u*S+d*R,s[7]=c*f+u*M+d*A,s[2]=h*y+p*g+x*C,s[5]=h*m+p*S+x*R,s[8]=h*f+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*r*u-n*o*c-i*s*u+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,h=o*l-u*s,p=c*s-r*l,x=n*d+i*h+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(a*c-u*i)*y,e[2]=(o*i-a*r)*y,e[3]=h*y,e[4]=(u*n-a*l)*y,e[5]=(a*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(r*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nf.makeScale(e,n)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Ye;function Xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HA(){const t=Yo("canvas");return t.style.display="block",t}const f0={};function fr(t){t in f0||(f0[t]=!0,console.warn(t))}function GA(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function VA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const d0=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jA(){const t={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pt&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===va?uu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wr]:{primaries:e,whitePoint:i,transfer:uu,toXYZ:d0,fromXYZ:h0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:d0,fromXYZ:h0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),t}const tt=jA();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class XA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Yo("canvas")),Ts.width=e.width,Ts.height=e.height;const a=Ts.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=qi(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WA=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Df(a[r].image)):s.push(Df(a[r]))}else s=Df(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function Df(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qA=0;const Uf=new F;class hn extends Br{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ts,a=ts,s=gi,r=ns,o=ri,l=Si,c=hn.DEFAULT_ANISOTROPY,u=va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=ml(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uf).x}get height(){return this.source.getSize(Uf).y}get depth(){return this.source.getSize(Uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cu:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cu:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Py;hn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(p+1)/2,C=(f+1)/2,R=(u+h)/4,A=(d+y)/4,U=(x+m)/4;return S>M&&S>C?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=R/i,s=A/i):M>C?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=R/a,s=U/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=A/s,a=U/s),this.set(i,a,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-y)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YA extends Br{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const a={width:e,height:n,depth:i.depth},s=new hn(a);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends YA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Wy extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZA extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ti):ti.fromBufferAttribute(s,r),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Il.subVectors(this.max,Qr),As.subVectors(e.a,Qr),ws.subVectors(e.b,Qr),Rs.subVectors(e.c,Qr),aa.subVectors(ws,As),sa.subVectors(Rs,ws),Va.subVectors(As,Rs);let n=[0,-aa.z,aa.y,0,-sa.z,sa.y,0,-Va.z,Va.y,aa.z,0,-aa.x,sa.z,0,-sa.x,Va.z,0,-Va.x,-aa.y,aa.x,0,-sa.y,sa.x,0,-Va.y,Va.x,0];return!Lf(n,As,ws,Rs,Il)||(n=[1,0,0,0,1,0,0,0,1],!Lf(n,As,ws,Rs,Il))?!1:(Hl.crossVectors(aa,sa),n=[Hl.x,Hl.y,Hl.z],Lf(n,As,ws,Rs,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new F,new F,new F,new F,new F,new F,new F,new F],ti=new F,Bl=new Ba,As=new F,ws=new F,Rs=new F,aa=new F,sa=new F,Va=new F,Qr=new F,Il=new F,Hl=new F,ka=new F;function Lf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){ka.fromArray(t,s);const o=a.x*Math.abs(ka.x)+a.y*Math.abs(ka.y)+a.z*Math.abs(ka.z),l=e.dot(ka),c=n.dot(ka),u=i.dot(ka);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const KA=new Ba,Jr=new F,Of=new F;class vl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KA.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Jr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Of)),this.expandByPoint(Jr.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ni=new F,Pf=new F,Gl=new F,ra=new F,zf=new F,Vl=new F,Ff=new F;class dm{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Pf.copy(e).add(n).multiplyScalar(.5),Gl.copy(n).sub(e).normalize(),ra.copy(this.origin).sub(Pf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Gl),o=ra.dot(this.direction),l=-ra.dot(Gl),c=ra.lengthSq(),u=Math.abs(1-r*r);let d,h,p,x;if(u>0)if(d=r*l-o,h=r*o-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Pf).addScaledVector(Gl,h),p}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),a=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,a,s){zf.subVectors(n,e),Vl.subVectors(i,e),Ff.crossVectors(zf,Vl);let r=this.direction.dot(Ff),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ra.subVectors(this.origin,e);const l=o*this.direction.dot(Vl.crossVectors(ra,Vl));if(l<0)return null;const c=o*this.direction.dot(zf.cross(ra));if(c<0||l+c>r)return null;const u=-o*ra.dot(Ff);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,a,s,r,o,l,c,u,d,h,p,x,y,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,u,d,h,p,x,y,m)}set(e,n,i,a,s,r,o,l,c,u,d,h,p,x,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),r=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=r*u,p=r*d,x=o*u,y=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=x+p*c,n[10]=r*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h+y*o,n[4]=x*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-x,n[6]=y+h*o,n[10]=r*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h-y*o,n[4]=-r*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=r*u,n[9]=y-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const h=r*u,p=r*d,x=o*u,y=o*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const h=r*l,p=r*c,x=o*l,y=o*c;n[0]=l*u,n[4]=y-h*d,n[8]=x*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=r*l,p=r*c,x=o*l,y=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+y,n[5]=r*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($A,e,QA)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),oa.crossVectors(i,Cn),oa.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),oa.crossVectors(i,Cn)),oa.normalize(),kl.crossVectors(Cn,oa),a[0]=oa.x,a[4]=kl.x,a[8]=Cn.x,a[1]=oa.y,a[5]=kl.y,a[9]=Cn.y,a[2]=oa.z,a[6]=kl.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],g=i[3],S=i[7],M=i[11],C=i[15],R=a[0],A=a[4],U=a[8],T=a[12],_=a[1],w=a[5],H=a[9],G=a[13],q=a[2],Y=a[6],z=a[10],k=a[14],P=a[3],K=a[7],le=a[11],Se=a[15];return s[0]=r*R+o*_+l*q+c*P,s[4]=r*A+o*w+l*Y+c*K,s[8]=r*U+o*H+l*z+c*le,s[12]=r*T+o*G+l*k+c*Se,s[1]=u*R+d*_+h*q+p*P,s[5]=u*A+d*w+h*Y+p*K,s[9]=u*U+d*H+h*z+p*le,s[13]=u*T+d*G+h*k+p*Se,s[2]=x*R+y*_+m*q+f*P,s[6]=x*A+y*w+m*Y+f*K,s[10]=x*U+y*H+m*z+f*le,s[14]=x*T+y*G+m*k+f*Se,s[3]=g*R+S*_+M*q+C*P,s[7]=g*A+S*w+M*Y+C*K,s[11]=g*U+S*H+M*z+C*le,s[15]=g*T+S*G+M*k+C*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],y=e[7],m=e[11],f=e[15];return x*(+s*l*d-a*c*d-s*o*h+i*c*h+a*o*p-i*l*p)+y*(+n*l*p-n*c*h+s*r*h-a*r*p+a*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*u-i*c*u)+f*(-a*o*u-n*l*d+n*o*h+a*r*d-i*r*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],y=e[13],m=e[14],f=e[15],g=d*m*c-y*h*c+y*l*p-o*m*p-d*l*f+o*h*f,S=x*h*c-u*m*c-x*l*p+r*m*p+u*l*f-r*h*f,M=u*y*c-x*d*c+x*o*p-r*y*p-u*o*f+r*d*f,C=x*d*l-u*y*l-x*o*h+r*y*h+u*o*m-r*d*m,R=n*g+i*S+a*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(y*h*s-d*m*s-y*a*p+i*m*p+d*a*f-i*h*f)*A,e[2]=(o*m*s-y*l*s+y*a*c-i*m*c-o*a*f+i*l*f)*A,e[3]=(d*l*s-o*h*s-d*a*c+i*h*c+o*a*p-i*l*p)*A,e[4]=S*A,e[5]=(u*m*s-x*h*s+x*a*p-n*m*p-u*a*f+n*h*f)*A,e[6]=(x*l*s-r*m*s-x*a*c+n*m*c+r*a*f-n*l*f)*A,e[7]=(r*h*s-u*l*s+u*a*c-n*h*c-r*a*p+n*l*p)*A,e[8]=M*A,e[9]=(x*d*s-u*y*s-x*i*p+n*y*p+u*i*f-n*d*f)*A,e[10]=(r*y*s-x*o*s+x*i*c-n*y*c-r*i*f+n*o*f)*A,e[11]=(u*o*s-r*d*s-u*i*c+n*d*c+r*i*p-n*o*p)*A,e[12]=C*A,e[13]=(u*y*a-x*d*a+x*i*h-n*y*h-u*i*m+n*d*m)*A,e[14]=(x*o*a-r*y*a-x*i*l+n*y*l+r*i*m-n*o*m)*A,e[15]=(r*d*a-u*o*a+u*i*l-n*d*l-r*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,u=r+r,d=o+o,h=s*c,p=s*u,x=s*d,y=r*u,m=r*d,f=o*d,g=l*c,S=l*u,M=l*d,C=i.x,R=i.y,A=i.z;return a[0]=(1-(y+f))*C,a[1]=(p+M)*C,a[2]=(x-S)*C,a[3]=0,a[4]=(p-M)*R,a[5]=(1-(h+f))*R,a[6]=(m+g)*R,a[7]=0,a[8]=(x+S)*A,a[9]=(m-g)*A,a[10]=(1-(h+y))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let s=Cs.set(a[0],a[1],a[2]).length();const r=Cs.set(a[4],a[5],a[6]).length(),o=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const c=1/s,u=1/r,d=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,n.setFromRotationMatrix(ni),i.x=s,i.y=r,i.z=o,this}makePerspective(e,n,i,a,s,r,o=ki){const l=this.elements,c=2*s/(n-e),u=2*s/(i-a),d=(n+e)/(n-e),h=(i+a)/(i-a);let p,x;if(o===ki)p=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===fu)p=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=ki){const l=this.elements,c=1/(n-e),u=1/(i-a),d=1/(r-s),h=(n+e)*c,p=(i+a)*u;let x,y;if(o===ki)x=(r+s)*d,y=-2*d;else if(o===fu)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cs=new F,ni=new bt,$A=new F(0,0,0),QA=new F(1,1,1),oa=new F,kl=new F,Cn=new F,p0=new bt,m0=new gl;class ui{constructor(e=0,n=0,i=0,a=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return p0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return m0.setFromEuler(this),this.setFromQuaternion(m0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class qy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JA=0;const g0=new F,Ns=new gl,Di=new bt,jl=new F,eo=new F,ew=new F,tw=new gl,v0=new F(1,0,0),x0=new F(0,1,0),_0=new F(0,0,1),y0={type:"added"},nw={type:"removed"},Ds={type:"childadded",child:null},Bf={type:"childremoved",child:null};class $t extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,n=new ui,i=new gl,a=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ye}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(v0,e)}rotateY(e){return this.rotateOnAxis(x0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,n){return g0.copy(e).applyQuaternion(this.quaternion),this.position.add(g0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(v0,e)}translateY(e){return this.translateOnAxis(x0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?jl.copy(e):jl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(eo,jl,this.up):Di.lookAt(jl,eo,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y0),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nw),Bf.child=e,this.dispatchEvent(Bf),Bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y0),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,ew),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),p=r(e.animations),x=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new F,Ui=new F,If=new F,Li=new F,Us=new F,Ls=new F,S0=new F,Hf=new F,Gf=new F,Vf=new F,kf=new vt,jf=new vt,Xf=new vt;class si{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ii.subVectors(a,n),Ui.subVectors(i,n),If.subVectors(e,n);const r=ii.dot(ii),o=ii.dot(Ui),l=ii.dot(If),c=Ui.dot(Ui),u=Ui.dot(If),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,x=(r*u-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(r,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return kf.setScalar(0),jf.setScalar(0),Xf.setScalar(0),kf.fromBufferAttribute(e,n),jf.fromBufferAttribute(e,i),Xf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(kf,s.x),r.addScaledVector(jf,s.y),r.addScaledVector(Xf,s.z),r}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Ui.subVectors(e,n),ii.cross(Ui).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;Us.subVectors(a,i),Ls.subVectors(s,i),Hf.subVectors(e,i);const l=Us.dot(Hf),c=Ls.dot(Hf);if(l<=0&&c<=0)return n.copy(i);Gf.subVectors(e,a);const u=Us.dot(Gf),d=Ls.dot(Gf);if(u>=0&&d<=u)return n.copy(a);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Us,r);Vf.subVectors(e,s);const p=Us.dot(Vf),x=Ls.dot(Vf);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Ls,o);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return S0.subVectors(s,a),o=(d-u)/(d-u+(p-x)),n.copy(a).addScaledVector(S0,o);const f=1/(m+y+h);return r=y*f,o=h*f,n.copy(i).addScaledVector(Us,r).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Wf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=tt.workingColorSpace){if(e=IA(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Wf(r,s,e+1/3),this.g=Wf(r,s,e),this.b=Wf(r,s,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,n=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){const i=Yy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return tt.workingToColorSpace(sn.copy(this),e),Math.round(nt(sn.r*255,0,255))*65536+Math.round(nt(sn.g*255,0,255))*256+Math.round(nt(sn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(sn.copy(this),n);const i=sn.r,a=sn.g,s=sn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Jt){tt.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,a=sn.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(la),this.setHSL(la.h+e,la.s+n,la.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(la),e.getHSL(Xl);const i=Rf(la.h,Xl.h,n),a=Rf(la.s,Xl.s,n),s=Rf(la.l,Xl.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new We;We.NAMES=Yy;let iw=0;class Mi extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=ur,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Ja,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==Ja&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zy extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new F,Wl=new it;let aw=0;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=l0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l0&&(e.usage=this.usage),e}}class Ky extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $y extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sw=0;const Gn=new bt,qf=new $t,Os=new F,Nn=new Ba,to=new Ba,Wt=new F;class ei extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xy(e)?$y:Ky)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return qf.lookAt(e),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Nn.min,to.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,to.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(to.min),Nn.expandByPoint(to.max))}Nn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Wt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Wt));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),Wt.add(Os)),a=Math.max(a,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new F,l[U]=new F;const c=new F,u=new F,d=new F,h=new it,p=new it,x=new it,y=new F,m=new F;function f(U,T,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(w),o[U].add(y),o[T].add(y),o[_].add(y),l[U].add(m),l[T].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let U=0,T=g.length;U<T;++U){const _=g[U],w=_.start,H=_.count;for(let G=w,q=w+H;G<q;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new F,M=new F,C=new F,R=new F;function A(U){C.fromBufferAttribute(a,U),R.copy(C);const T=o[U];S.copy(T),S.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(R,T);const w=M.dot(l[U])<0?-1:1;r.setXYZW(U,S.x,S.y,S.z,w)}for(let U=0,T=g.length;U<T;++U){const _=g[U],w=_.start,H=_.count;for(let G=w,q=w+H;G<q;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new F,s=new F,r=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new $n(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M0=new bt,ja=new dm,ql=new vl,b0=new F,Yl=new F,Zl=new F,Kl=new F,Yf=new F,$l=new F,E0=new F,Ql=new F;class oi extends $t{constructor(e=new ei,n=new Zy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Yf.fromBufferAttribute(d,e),r?$l.addScaledVector(Yf,u):$l.addScaledVector(Yf.sub(n),u))}n.add($l)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ja.copy(e.ray).recast(e.near),!(ql.containsPoint(ja.origin)===!1&&(ja.intersectSphere(ql,b0)===null||ja.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(M0.copy(s).invert(),ja.copy(e.ray).applyMatrix4(M0),!(i.boundingBox!==null&&ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ja)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=r[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=S;M<C;M+=3){const R=o.getX(M),A=o.getX(M+1),U=o.getX(M+2);a=Jl(this,f,e,i,c,u,d,R,A,U),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);a=Jl(this,r,e,i,c,u,d,g,S,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=r[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=S;M<C;M+=3){const R=M,A=M+1,U=M+2;a=Jl(this,f,e,i,c,u,d,R,A,U),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const g=m,S=m+1,M=m+2;a=Jl(this,r,e,i,c,u,d,g,S,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function rw(t,e,n,i,a,s,r,o){let l;if(e.side===Mn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Ji,o),l===null)return null;Ql.copy(o),Ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ql);return c<n.near||c>n.far?null:{distance:c,point:Ql.clone(),object:t}}function Jl(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,Yl),t.getVertexPosition(l,Zl),t.getVertexPosition(c,Kl);const u=rw(t,e,n,i,Yl,Zl,Kl,E0);if(u){const d=new F;si.getBarycoord(E0,Yl,Zl,Kl,d),a&&(u.uv=si.getInterpolatedAttribute(a,o,l,c,d,new it)),s&&(u.uv1=si.getInterpolatedAttribute(s,o,l,c,d,new it)),r&&(u.normal=si.getInterpolatedAttribute(r,o,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};si.getNormal(Yl,Zl,Kl,h.normal),u.face=h,u.barycoord=d}return u}class xl extends ei{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,r,s,0),x("z","y","x",1,-1,i,n,-e,r,s,1),x("x","z","y",1,1,e,i,n,a,r,2),x("x","z","y",1,-1,e,i,-n,a,r,3),x("x","y","z",1,-1,e,n,i,a,s,4),x("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(d,2));function x(y,m,f,g,S,M,C,R,A,U,T){const _=M/A,w=C/U,H=M/2,G=C/2,q=R/2,Y=A+1,z=U+1;let k=0,P=0;const K=new F;for(let le=0;le<z;le++){const Se=le*w-G;for(let Be=0;Be<Y;Be++){const Pe=Be*_-H;K[y]=Pe*g,K[m]=Se*S,K[f]=q,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),d.push(Be/A),d.push(1-le/U),k+=1}}for(let le=0;le<U;le++)for(let Se=0;Se<A;Se++){const Be=h+Se+Y*le,Pe=h+Se+Y*(le+1),X=h+(Se+1)+Y*(le+1),oe=h+(Se+1)+Y*le;l.push(Be,Pe,oe),l.push(Pe,X,oe),P+=6}o.addGroup(p,P,T),p+=P,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Rr(t[n]);for(const a in i)e[a]=i[a]}return e}function ow(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const lw={clone:Rr,merge:cn};var cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cw,this.fragmentShader=uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=ow(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ca=new F,T0=new it,A0=new it;class Sn extends Jy{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ca.x,ca.y).multiplyScalar(-e/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ca.x,ca.y).multiplyScalar(-e/ca.z)}getViewSize(e,n){return this.getViewBounds(e,T0,A0),n.subVectors(A0,T0)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,zs=1;class fw extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sn(Ps,zs,e,n);a.layers=this.layers,this.add(a);const s=new Sn(Ps,zs,e,n);s.layers=this.layers,this.add(s);const r=new Sn(Ps,zs,e,n);r.layers=this.layers,this.add(r);const o=new Sn(Ps,zs,e,n);o.layers=this.layers,this.add(o);const l=new Sn(Ps,zs,e,n);l.layers=this.layers,this.add(l);const c=new Sn(Ps,zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,s),e.setRenderTarget(i,1,a),e.render(n,r),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class eS extends hn{constructor(e=[],n=Tr,i,a,s,r,o,l,c,u){super(e,n,i,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dw extends ms{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new eS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new xl(5,5,5),s=new Pa({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Na});s.uniforms.tEquirect.value=n;const r=new oi(a,s),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=gi),new fw(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}class lo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hw={type:"move"};class Zf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hw)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class hm{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new hm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tS extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kf=new F,pw=new F,mw=new Ye;class $a{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Kf.subVectors(i,n).cross(pw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mw.getNormalMatrix(e),a=this.coplanarPoint(Kf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xa=new vl,gw=new it(.5,.5),ec=new F;class pm{constructor(e=new $a,n=new $a,i=new $a,a=new $a,s=new $a,r=new $a){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],h=a[7],p=a[8],x=a[9],y=a[10],m=a[11],f=a[12],g=a[13],S=a[14],M=a[15];if(i[0].setComponents(l-s,h-c,m-p,M-f).normalize(),i[1].setComponents(l+s,h+c,m+p,M+f).normalize(),i[2].setComponents(l+r,h+u,m+x,M+g).normalize(),i[3].setComponents(l-r,h-u,m-x,M-g).normalize(),i[4].setComponents(l-o,h-d,m-y,M-S).normalize(),n===ki)i[5].setComponents(l+o,h+d,m+y,M+S).normalize();else if(n===fu)i[5].setComponents(o,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(e){Xa.center.set(0,0,0);const n=gw.distanceTo(e.center);return Xa.radius=.7071067811865476+n,Xa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(ec.x=a.normal.x>0?e.max.x:e.min.x,ec.y=a.normal.y>0?e.max.y:e.min.y,ec.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wo extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new F,hu=new F,w0=new bt,no=new dm,tc=new vl,$f=new F,R0=new F;class vw extends $t{constructor(e=new ei,n=new wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)du.fromBufferAttribute(n,a-1),hu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=du.distanceTo(hu);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(a),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;w0.copy(a).invert(),no.copy(e.ray).applyMatrix4(w0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let y=p,m=x-1;y<m;y+=c){const f=u.getX(y),g=u.getX(y+1),S=nc(this,e,no,l,f,g,y);S&&n.push(S)}if(this.isLineLoop){const y=u.getX(x-1),m=u.getX(p),f=nc(this,e,no,l,y,m,x-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let y=p,m=x-1;y<m;y+=c){const f=nc(this,e,no,l,y,y+1,y);f&&n.push(f)}if(this.isLineLoop){const y=nc(this,e,no,l,x-1,p,x-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nc(t,e,n,i,a,s,r){const o=t.geometry.attributes.position;if(du.fromBufferAttribute(o,a),hu.fromBufferAttribute(o,s),n.distanceSqToSegment(du,hu,$f,R0)>i)return;$f.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo($f);if(!(c<e.near||c>e.far))return{distance:c,point:R0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const C0=new F,N0=new F;class Wh extends vw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)C0.fromBufferAttribute(n,a),N0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+C0.distanceTo(N0);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class co extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new bt,qh=new dm,ic=new vl,ac=new F;class Qf extends $t{constructor(e=new ei,n=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(a),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;D0.copy(a).invert(),qh.copy(e.ray).applyMatrix4(D0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let x=h,y=p;x<y;x++){const m=c.getX(x);ac.fromBufferAttribute(d,m),U0(ac,m,l,a,e,n,this)}}else{const h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=h,y=p;x<y;x++)ac.fromBufferAttribute(d,x),U0(ac,x,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function U0(t,e,n,i,a,s,r){const o=qh.distanceSqToPoint(t);if(o<n){const l=new F;qh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class nS extends hn{constructor(e,n,i=ps,a,s,r,o=ci,l=ci,c,u=Wo,d=1){if(u!==Wo&&u!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,a,s,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bu extends ei{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,h=n/l,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const g=f*h-r;for(let S=0;S<c;S++){const M=S*d-s;x.push(M,-g,0),y.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const S=g+c*f,M=g+c*(f+1),C=g+1+c*(f+1),R=g+1+c*f;p.push(S,M,R),p.push(M,C,R)}this.setIndex(p),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class xw extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iS extends Mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _w extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yw extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ro={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Sw{constructor(e,n,i){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const aS=new Sw;class Ir{constructor(e){this.manager=e!==void 0?e:aS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(a,s){i.load(e,a,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class Mw extends Error{constructor(e,n){super(e),this.response=n}}class sS extends Ir{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ro.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:n,onProgress:i,onError:a});return}Oi[e]=[],Oi[e].push({onLoad:n,onProgress:i,onError:a});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Oi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,x=p!==0;let y=0;const m=new ReadableStream({start(f){g();function g(){d.read().then(({done:S,value:M})=>{if(S)f.close();else{y+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:p});for(let R=0,A=u.length;R<A;R++){const U=u[R];U.onProgress&&U.onProgress(C)}f.enqueue(M),g()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Mw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Ro.add(`file:${e}`,c);const u=Oi[e];delete Oi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Fs=new WeakMap;class bw extends Ir{constructor(e){super(e)}load(e,n,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ro.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(r),s.manager.itemEnd(e)},0);else{let d=Fs.get(r);d===void 0&&(d=[],Fs.set(r,d)),d.push({onLoad:n,onError:a})}return r}const o=Yo("img");function l(){u(),n&&n(this);const d=Fs.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}Fs.delete(this),s.manager.itemEnd(e)}function c(d){u(),a&&a(d),Ro.remove(`image:${e}`);const h=Fs.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(d)}Fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ro.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class mm extends Ir{constructor(e){super(e)}load(e,n,i,a){const s=new hn,r=new bw(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,a),s}}class gm extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Jf=new bt,L0=new F,O0=new F;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;L0.setFromMatrixPosition(e.matrixWorld),n.position.copy(L0),O0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(O0),n.updateMatrixWorld(),Jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const P0=new bt,io=new F,ed=new F;class Ew extends rS{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),i.position.copy(io),ed.copy(i.position),ed.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ed),i.updateMatrixWorld(),a.makeTranslation(-io.x,-io.y,-io.z),P0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0)}}class oS extends gm{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Ew}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lS extends Jy{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Tw extends rS{constructor(){super(new lS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends gm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Tw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cS extends gm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Aw{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class ww extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sc=new Ba;class z0 extends Wh{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=new Float32Array(8*3),s=new ei;s.setIndex(new $n(i,1)),s.setAttribute("position",new $n(a,3)),super(s,new wo({color:n,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&sc.setFromObject(this.object),sc.isEmpty())return;const e=sc.min,n=sc.max,i=this.geometry.attributes.position,a=i.array;a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=e.x,a[4]=n.y,a[5]=n.z,a[6]=e.x,a[7]=e.y,a[8]=n.z,a[9]=n.x,a[10]=e.y,a[11]=n.z,a[12]=n.x,a[13]=n.y,a[14]=e.z,a[15]=e.x,a[16]=n.y,a[17]=e.z,a[18]=e.x,a[19]=e.y,a[20]=e.z,a[21]=n.x,a[22]=e.y,a[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,n){return super.copy(e,n),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function F0(t,e,n,i){const a=Rw(i);switch(n){case Iy:return t*e;case Gy:return t*e/a.components*a.byteLength;case om:return t*e/a.components*a.byteLength;case Vy:return t*e*2/a.components*a.byteLength;case lm:return t*e*2/a.components*a.byteLength;case Hy:return t*e*3/a.components*a.byteLength;case ri:return t*e*4/a.components*a.byteLength;case cm:return t*e*4/a.components*a.byteLength;case Ac:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(t,16)*Math.max(e,8)/4;case _h:case Sh:return Math.max(t,8)*Math.max(e,8)/2;case bh:case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Hh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ky:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kh:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Rw(t){switch(t){case Si:case zy:return{byteLength:1,components:1};case jo:case Fy:case pl:return{byteLength:2,components:1};case sm:case rm:return{byteLength:2,components:4};case ps:case am:case Vi:return{byteLength:4,components:1};case By:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cw(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var Nw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dw=`#ifdef USE_ALPHAHASH
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
#endif`,Uw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ow=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zw=`#ifdef USE_AOMAP
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
#endif`,Bw=`#ifdef USE_BATCHING
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
#endif`,Iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kw=`#ifdef USE_IRIDESCENCE
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
#endif`,jw=`#ifdef USE_BUMPMAP
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
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jw=`#define PI 3.141592653589793
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
} // validated`,e2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t2=`vec3 transformedNormal = objectNormal;
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
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r2="gl_FragColor = linearToOutputTexel( gl_FragColor );",o2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d2=`#ifdef USE_ENVMAP
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
#endif`,h2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v2=`#ifdef USE_GRADIENTMAP
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
}`,x2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S2=`uniform bool receiveShadow;
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
#endif`,M2=`#ifdef USE_ENVMAP
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
#endif`,b2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w2=`PhysicalMaterial material;
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
#endif`,R2=`struct PhysicalMaterial {
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
}`,C2=`
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
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
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I2=`#if defined( USE_POINTS_UV )
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
#endif`,H2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
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
#endif`,W2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q2=`#ifdef USE_NORMALMAP
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
#endif`,J2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pR=`float getShadowMask() {
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
}`,mR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xR=`#ifdef USE_SKINNING
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
#endif`,_R=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bR=`#ifdef USE_TRANSMISSION
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
#endif`,ER=`#ifdef USE_TRANSMISSION
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
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NR=`uniform sampler2D t2D;
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
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`#include <common>
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
}`,zR=`#if DEPTH_PACKING == 3200
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
}`,BR=`#define DISTANCE
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
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`uniform float scale;
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
}`,VR=`uniform vec3 diffuse;
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
}`,kR=`#include <common>
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
}`,jR=`uniform vec3 diffuse;
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
}`,XR=`#define LAMBERT
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
}`,WR=`#define LAMBERT
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
}`,qR=`#define MATCAP
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
}`,YR=`#define MATCAP
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
}`,ZR=`#define NORMAL
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
}`,KR=`#define NORMAL
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
}`,$R=`#define PHONG
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
}`,QR=`#define PHONG
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
}`,JR=`#define STANDARD
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
}`,eC=`#define STANDARD
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
}`,tC=`#define TOON
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
}`,nC=`#define TOON
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
}`,iC=`uniform float size;
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
}`,aC=`uniform vec3 diffuse;
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
}`,sC=`#include <common>
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
}`,oC=`uniform float rotation;
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
}`,lC=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Nw,alphahash_pars_fragment:Dw,alphamap_fragment:Uw,alphamap_pars_fragment:Lw,alphatest_fragment:Ow,alphatest_pars_fragment:Pw,aomap_fragment:zw,aomap_pars_fragment:Fw,batching_pars_vertex:Bw,batching_vertex:Iw,begin_vertex:Hw,beginnormal_vertex:Gw,bsdfs:Vw,iridescence_fragment:kw,bumpmap_pars_fragment:jw,clipping_planes_fragment:Xw,clipping_planes_pars_fragment:Ww,clipping_planes_pars_vertex:qw,clipping_planes_vertex:Yw,color_fragment:Zw,color_pars_fragment:Kw,color_pars_vertex:$w,color_vertex:Qw,common:Jw,cube_uv_reflection_fragment:e2,defaultnormal_vertex:t2,displacementmap_pars_vertex:n2,displacementmap_vertex:i2,emissivemap_fragment:a2,emissivemap_pars_fragment:s2,colorspace_fragment:r2,colorspace_pars_fragment:o2,envmap_fragment:l2,envmap_common_pars_fragment:c2,envmap_pars_fragment:u2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:M2,envmap_vertex:d2,fog_vertex:h2,fog_pars_vertex:p2,fog_fragment:m2,fog_pars_fragment:g2,gradientmap_pars_fragment:v2,lightmap_pars_fragment:x2,lights_lambert_fragment:_2,lights_lambert_pars_fragment:y2,lights_pars_begin:S2,lights_toon_fragment:b2,lights_toon_pars_fragment:E2,lights_phong_fragment:T2,lights_phong_pars_fragment:A2,lights_physical_fragment:w2,lights_physical_pars_fragment:R2,lights_fragment_begin:C2,lights_fragment_maps:N2,lights_fragment_end:D2,logdepthbuf_fragment:U2,logdepthbuf_pars_fragment:L2,logdepthbuf_pars_vertex:O2,logdepthbuf_vertex:P2,map_fragment:z2,map_pars_fragment:F2,map_particle_fragment:B2,map_particle_pars_fragment:I2,metalnessmap_fragment:H2,metalnessmap_pars_fragment:G2,morphinstance_vertex:V2,morphcolor_vertex:k2,morphnormal_vertex:j2,morphtarget_pars_vertex:X2,morphtarget_vertex:W2,normal_fragment_begin:q2,normal_fragment_maps:Y2,normal_pars_fragment:Z2,normal_pars_vertex:K2,normal_vertex:$2,normalmap_pars_fragment:Q2,clearcoat_normal_fragment_begin:J2,clearcoat_normal_fragment_maps:eR,clearcoat_pars_fragment:tR,iridescence_pars_fragment:nR,opaque_fragment:iR,packing:aR,premultiplied_alpha_fragment:sR,project_vertex:rR,dithering_fragment:oR,dithering_pars_fragment:lR,roughnessmap_fragment:cR,roughnessmap_pars_fragment:uR,shadowmap_pars_fragment:fR,shadowmap_pars_vertex:dR,shadowmap_vertex:hR,shadowmask_pars_fragment:pR,skinbase_vertex:mR,skinning_pars_vertex:gR,skinning_vertex:vR,skinnormal_vertex:xR,specularmap_fragment:_R,specularmap_pars_fragment:yR,tonemapping_fragment:SR,tonemapping_pars_fragment:MR,transmission_fragment:bR,transmission_pars_fragment:ER,uv_pars_fragment:TR,uv_pars_vertex:AR,uv_vertex:wR,worldpos_vertex:RR,background_vert:CR,background_frag:NR,backgroundCube_vert:DR,backgroundCube_frag:UR,cube_vert:LR,cube_frag:OR,depth_vert:PR,depth_frag:zR,distanceRGBA_vert:FR,distanceRGBA_frag:BR,equirect_vert:IR,equirect_frag:HR,linedashed_vert:GR,linedashed_frag:VR,meshbasic_vert:kR,meshbasic_frag:jR,meshlambert_vert:XR,meshlambert_frag:WR,meshmatcap_vert:qR,meshmatcap_frag:YR,meshnormal_vert:ZR,meshnormal_frag:KR,meshphong_vert:$R,meshphong_frag:QR,meshphysical_vert:JR,meshphysical_frag:eC,meshtoon_vert:tC,meshtoon_frag:nC,points_vert:iC,points_frag:aC,shadow_vert:sC,shadow_frag:rC,sprite_vert:oC,sprite_frag:lC},me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hi={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hi.physical={uniforms:cn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const rc={r:0,b:0,g:0},Wa=new ui,cC=new bt;function uC(t,e,n,i,a,s,r){const o=new We(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?n:e).get(M)),M}function y(S){let M=!1;const C=x(S);C===null?f(o,l):C&&C.isColor&&(f(C,1),M=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,M){const C=x(M);C&&(C.isCubeTexture||C.mapping===Fu)?(u===void 0&&(u=new oi(new xl(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:Rr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Wa.copy(M.backgroundRotation),Wa.x*=-1,Wa.y*=-1,Wa.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wa.y*=-1,Wa.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cC.makeRotationFromEuler(Wa)),u.material.toneMapped=tt.getTransfer(C.colorSpace)!==pt,(d!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new oi(new Bu(2,2),new Pa({name:"BackgroundMaterial",uniforms:Rr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(rc,Qy(t)),i.buffers.color.setClear(rc.r,rc.g,rc.b,M,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:y,addToRenderList:m,dispose:g}}function fC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let s=a,r=!1;function o(_,w,H,G,q){let Y=!1;const z=d(G,H,w);s!==z&&(s=z,c(s.object)),Y=p(_,G,H,q),Y&&x(_,G,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,M(_,w,H,G),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,H){const G=H.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let Y=q[w.id];Y===void 0&&(Y={},q[w.id]=Y);let z=Y[G];return z===void 0&&(z=h(l()),Y[G]=z),z}function h(_){const w=[],H=[],G=[];for(let q=0;q<n;q++)w[q]=0,H[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:G,object:_,attributes:{},index:null}}function p(_,w,H,G){const q=s.attributes,Y=w.attributes;let z=0;const k=H.getAttributes();for(const P in k)if(k[P].location>=0){const le=q[P];let Se=Y[P];if(Se===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(Se=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(Se=_.instanceColor)),le===void 0||le.attribute!==Se||Se&&le.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==G}function x(_,w,H,G){const q={},Y=w.attributes;let z=0;const k=H.getAttributes();for(const P in k)if(k[P].location>=0){let le=Y[P];le===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const Se={};Se.attribute=le,le&&le.data&&(Se.data=le.data),q[P]=Se,z++}s.attributes=q,s.attributesNum=z,s.index=G}function y(){const _=s.newAttributes;for(let w=0,H=_.length;w<H;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const H=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;H[_]=1,G[_]===0&&(t.enableVertexAttribArray(_),G[_]=1),q[_]!==w&&(t.vertexAttribDivisor(_,w),q[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let H=0,G=w.length;H<G;H++)w[H]!==_[H]&&(t.disableVertexAttribArray(H),w[H]=0)}function S(_,w,H,G,q,Y,z){z===!0?t.vertexAttribIPointer(_,w,H,q,Y):t.vertexAttribPointer(_,w,H,G,q,Y)}function M(_,w,H,G){y();const q=G.attributes,Y=H.getAttributes(),z=w.defaultAttributeValues;for(const k in Y){const P=Y[k];if(P.location>=0){let K=q[k];if(K===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const le=K.normalized,Se=K.itemSize,Be=e.get(K);if(Be===void 0)continue;const Pe=Be.buffer,X=Be.type,oe=Be.bytesPerElement,Me=X===t.INT||X===t.UNSIGNED_INT||K.gpuType===am;if(K.isInterleavedBufferAttribute){const ue=K.data,ye=ue.stride,qe=K.offset;if(ue.isInstancedInterleavedBuffer){for(let se=0;se<P.locationSize;se++)f(P.location+se,ue.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<P.locationSize;se++)m(P.location+se);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let se=0;se<P.locationSize;se++)S(P.location+se,Se/P.locationSize,X,le,ye*oe,(qe+Se/P.locationSize*se)*oe,Me)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<P.locationSize;ue++)f(P.location+ue,K.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<P.locationSize;ue++)m(P.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ue=0;ue<P.locationSize;ue++)S(P.location+ue,Se/P.locationSize,X,le,Se*oe,Se/P.locationSize*ue*oe,Me)}}else if(z!==void 0){const le=z[k];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(P.location,le);break;case 3:t.vertexAttrib3fv(P.location,le);break;case 4:t.vertexAttrib4fv(P.location,le);break;default:t.vertexAttrib1fv(P.location,le)}}}}g()}function C(){U();for(const _ in i){const w=i[_];for(const H in w){const G=w[H];for(const q in G)u(G[q].object),delete G[q];delete w[H]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const H in w){const G=w[H];for(const q in G)u(G[q].object),delete G[q];delete w[H]}delete i[_.id]}function A(_){for(const w in i){const H=i[w];if(H[_.id]===void 0)continue;const G=H[_.id];for(const q in G)u(G[q].object),delete G[q];delete H[_.id]}}function U(){T(),r=!0,s!==a&&(s=a,c(s.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function dC(t,e,n){let i;function a(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)r(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y]*h[y];n.update(x,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hC(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vi&&!U)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function pC(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new $a,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!a||x===null||x.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,S=g*4;let M=f.clippingState||null;l.value=M,M=u(x,h,S,p);for(let C=0;C!==S;++C)M[C]=n[C];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const f=p+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,M=p;S!==y;++S,M+=4)r.copy(d[S]).applyMatrix4(g,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function mC(t){let e=new WeakMap;function n(r,o){return o===gh?r.mapping=Tr:o===vh&&(r.mapping=Ar),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===gh||o===vh)if(e.has(r)){const l=e.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new dw(l.height);return c.fromEquirectangularTexture(t,r),e.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,B0=[.125,.215,.35,.446,.526,.582],es=20,td=new lS,I0=new We;let nd=null,id=0,ad=0,sd=!1;const Qa=(1+Math.sqrt(5))/2,Bs=1/Qa,H0=[new F(-Qa,Bs,0),new F(Qa,Bs,0),new F(-Bs,0,Qa),new F(Bs,0,Qa),new F(0,Qa,-Bs),new F(0,Qa,Bs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],gC=new F;class G0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=gC}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:pl,format:ri,colorSpace:wr,depthBuffer:!1},a=V0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vC(s)),this._blurMaterial=xC(s,e,n)}return a}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,i,a,s){const l=new Sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(I0),d.toneMapping=Da,d.autoClear=!1;const x=new Zy({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),y=new oi(new xl,x);let m=!1;const f=e.background;f?f.isColor&&(x.color.copy(f),e.background=null,m=!0):(x.color.copy(I0),m=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[g],s.y,s.z)):S===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[g]));const M=this._cubeSize;oc(a,S*M,g>2?M:0,M,M),d.setRenderTarget(a),m&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Tr||e.mapping===Ar;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new oi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;oc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,td)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=H0[(a-s-1)%H0.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oi(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),y=s/x,m=isFinite(s)?1+Math.floor(u*y):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const f=[];let g=0;for(let A=0;A<es;++A){const U=A/y,T=Math.exp(-U*U/2);f.push(T),A===0?g+=T:A<m&&(g+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=x,h.mipInt.value=S-i;const M=this._sizeLods[a],C=3*M*(a>S-tr?a-S+tr:0),R=4*(this._cubeSize-M);oc(n,C,R,3*M,2*M),l.setRenderTarget(n),l.render(d,td)}}function vC(t){const e=[],n=[],i=[];let a=t;const s=t-tr+1+B0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>t-tr?l=B0[r-t+tr-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,y=3,m=2,f=1,g=new Float32Array(y*x*p),S=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,U=R>2?0:-1,T=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];g.set(T,y*x*R),S.set(h,m*x*R);const _=[R,R,R,R,R,R];M.set(_,f*x*R)}const C=new ei;C.setAttribute("position",new $n(g,y)),C.setAttribute("uv",new $n(S,m)),C.setAttribute("faceIndex",new $n(M,f)),e.push(C),a>tr&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function V0(t,e,n){const i=new ms(t,e,n);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oc(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function xC(t,e,n){const i=new Float32Array(es),a=new F(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vm(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function k0(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vm(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function j0(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function vm(){return`

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
	`}function _C(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gh||l===vh,u=l===Tr||l===Ar;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new G0(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new G0(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function yC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function SC(t,e,n,i){const a={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",r),delete a[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let S=0,M=g.length;S<M;S+=3){const C=g[S+0],R=g[S+1],A=g[S+2];h.push(C,R,R,A,A,C)}}else if(x!==void 0){const g=x.array;y=x.version;for(let S=0,M=g.length/3-1;S<M;S+=3){const C=S+0,R=S+1,A=S+2;h.push(C,R,R,A,A,C)}}else return;const m=new(Xy(h)?$y:Ky)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function MC(t,e,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*r),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*r,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/r,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,x);let f=0;for(let g=0;g<x;g++)f+=p[g]*y[g];n.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function EC(t,e,n){const i=new WeakMap,a=new vt;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let _=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let C=o.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*d),U=new Wy(A,C,R,d);U.type=Vi,U.needsUpdate=!0;const T=M*4;for(let w=0;w<d;w++){const H=f[w],G=g[w],q=S[w],Y=C*R*4*w;for(let z=0;z<H.count;z++){const k=z*T;x===!0&&(a.fromBufferAttribute(H,z),A[Y+k+0]=a.x,A[Y+k+1]=a.y,A[Y+k+2]=a.z,A[Y+k+3]=0),y===!0&&(a.fromBufferAttribute(G,z),A[Y+k+4]=a.x,A[Y+k+5]=a.y,A[Y+k+6]=a.z,A[Y+k+7]=0),m===!0&&(a.fromBufferAttribute(q,z),A[Y+k+8]=a.x,A[Y+k+9]=a.y,A[Y+k+10]=a.z,A[Y+k+11]=q.itemSize===4?a.w:1)}}h={count:d,texture:U,size:new it(C,R)},i.set(o,h),o.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function TC(t,e,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}const fS=new hn,X0=new nS(1,1),dS=new Wy,hS=new ZA,pS=new eS,W0=[],q0=[],Y0=new Float32Array(16),Z0=new Float32Array(9),K0=new Float32Array(4);function Hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=W0[a];if(s===void 0&&(s=new Float32Array(a),W0[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Iu(t,e){let n=q0[e];n===void 0&&(n=new Int32Array(e),q0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function NC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;K0.set(i),t.uniformMatrix2fv(this.addr,!1,K0),Xt(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Z0.set(i),t.uniformMatrix3fv(this.addr,!1,Z0),Xt(n,i)}}function UC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Y0.set(i),t.uniformMatrix4fv(this.addr,!1,Y0),Xt(n,i)}}function LC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function GC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(X0.compareFunction=jy,s=X0):s=fS,n.setTexture2D(e||s,a)}function VC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||hS,a)}function kC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||pS,a)}function jC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||dS,a)}function XC(t){switch(t){case 5126:return AC;case 35664:return wC;case 35665:return RC;case 35666:return CC;case 35674:return NC;case 35675:return DC;case 35676:return UC;case 5124:case 35670:return LC;case 35667:case 35671:return OC;case 35668:case 35672:return PC;case 35669:case 35673:return zC;case 5125:return FC;case 36294:return BC;case 36295:return IC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return GC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return kC;case 36289:case 36303:case 36311:case 36292:return jC}}function WC(t,e){t.uniform1fv(this.addr,e)}function qC(t,e){const n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function YC(t,e){const n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function ZC(t,e){const n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function KC(t,e){const n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $C(t,e){const n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QC(t,e){const n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JC(t,e){t.uniform1iv(this.addr,e)}function e3(t,e){t.uniform2iv(this.addr,e)}function t3(t,e){t.uniform3iv(this.addr,e)}function n3(t,e){t.uniform4iv(this.addr,e)}function i3(t,e){t.uniform1uiv(this.addr,e)}function a3(t,e){t.uniform2uiv(this.addr,e)}function s3(t,e){t.uniform3uiv(this.addr,e)}function r3(t,e){t.uniform4uiv(this.addr,e)}function o3(t,e,n){const i=this.cache,a=e.length,s=Iu(n,a);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture2D(e[r]||fS,s[r])}function l3(t,e,n){const i=this.cache,a=e.length,s=Iu(n,a);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||hS,s[r])}function c3(t,e,n){const i=this.cache,a=e.length,s=Iu(n,a);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||pS,s[r])}function u3(t,e,n){const i=this.cache,a=e.length,s=Iu(n,a);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||dS,s[r])}function f3(t){switch(t){case 5126:return WC;case 35664:return qC;case 35665:return YC;case 35666:return ZC;case 35674:return KC;case 35675:return $C;case 35676:return QC;case 5124:case 35670:return JC;case 35667:case 35671:return e3;case 35668:case 35672:return t3;case 35669:case 35673:return n3;case 5125:return i3;case 36294:return a3;case 36295:return s3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return o3;case 35679:case 36299:case 36307:return l3;case 35680:case 36300:case 36308:case 36293:return c3;case 36289:case 36303:case 36311:case 36292:return u3}}class d3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XC(n.type)}}class h3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=f3(n.type)}}class p3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function $0(t,e){t.seq.push(e),t.map[e.id]=e}function m3(t,e,n){const i=t.name,a=i.length;for(rd.lastIndex=0;;){const s=rd.exec(i),r=rd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){$0(n,c===void 0?new d3(o,t,e):new h3(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new p3(o),$0(n,d)),n=d}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(n,a),r=e.getUniformLocation(n,s.name);m3(s,r,this)}}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function Q0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const g3=37297;let v3=0;function x3(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const J0=new Ye;function _3(t){tt._getMatrix(J0,tt.workingColorSpace,t);const e=`mat3( ${J0.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case uu:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ev(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+x3(t.getShaderSource(e),r)}else return a}function y3(t,e){const n=_3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function S3(t,e){let n;switch(e){case MA:n="Linear";break;case bA:n="Reinhard";break;case EA:n="Cineon";break;case Oy:n="ACESFilmic";break;case AA:n="AgX";break;case wA:n="Neutral";break;case TA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lc=new F;function M3(){tt.getLuminanceCoefficients(lc);const t=lc.x.toFixed(4),e=lc.y.toFixed(4),n=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function E3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function T3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function uo(t){return t!==""}function tv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(t){return t.replace(A3,R3)}const w3=new Map;function R3(t,e){let n=Ze[e];if(n===void 0){const i=w3.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(n)}const C3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(t){return t.replace(C3,N3)}function N3(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function av(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function D3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function U3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function O3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case im:e="ENVMAP_BLENDING_MULTIPLY";break;case yA:e="ENVMAP_BLENDING_MIX";break;case SA:e="ENVMAP_BLENDING_ADD";break}return e}function P3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function z3(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=D3(n),c=U3(n),u=L3(n),d=O3(n),h=P3(n),p=b3(n),x=E3(s),y=a.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(uo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(uo).join(`
`),f.length>0&&(f+=`
`)):(m=[av(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),f=[av(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Da?"#define TONE_MAPPING":"",n.toneMapping!==Da?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Da?S3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,y3("linearToOutputTexel",n.outputColorSpace),M3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(uo).join(`
`)),r=Yh(r),r=tv(r,n),r=nv(r,n),o=Yh(o),o=tv(o,n),o=nv(o,n),r=iv(r),o=iv(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===c0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=g+m+r,M=g+f+o,C=Q0(a,a.VERTEX_SHADER,S),R=Q0(a,a.FRAGMENT_SHADER,M);a.attachShader(y,C),a.attachShader(y,R),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(w){if(t.debug.checkShaderErrors){const H=a.getProgramInfoLog(y).trim(),G=a.getShaderInfoLog(C).trim(),q=a.getShaderInfoLog(R).trim();let Y=!0,z=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,y,C,R);else{const k=ev(a,C,"vertex"),P=ev(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+k+`
`+P)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||q==="")&&(z=!1);z&&(w.diagnostics={runnable:Y,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:f}})}a.deleteShader(C),a.deleteShader(R),U=new Dc(a,y),T=T3(a,y)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=a.getProgramParameter(y,g3)),_},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=v3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=R,this}let F3=0;class B3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new I3(e),n.set(e,i)),i}}class I3{constructor(e){this.id=F3++,this.code=e,this.usedTimes=0}}function H3(t,e,n,i,a,s,r){const o=new qy,l=new B3,c=new Set,u=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,_,w,H,G){const q=H.fog,Y=G.geometry,z=T.isMeshStandardMaterial?H.environment:null,k=(T.isMeshStandardMaterial?n:e).get(T.envMap||z),P=k&&k.mapping===Fu?k.image.height:null,K=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Se=le!==void 0?le.length:0;let Be=0;Y.morphAttributes.position!==void 0&&(Be=1),Y.morphAttributes.normal!==void 0&&(Be=2),Y.morphAttributes.color!==void 0&&(Be=3);let Pe,X,oe,Me;if(K){const ze=hi[K];Pe=ze.vertexShader,X=ze.fragmentShader}else Pe=T.vertexShader,X=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const ue=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),qe=G.isInstancedMesh===!0,se=G.isBatchedMesh===!0,he=!!T.map,Ge=!!T.matcap,De=!!k,D=!!T.aoMap,St=!!T.lightMap,Ae=!!T.bumpMap,Ue=!!T.normalMap,ge=!!T.displacementMap,we=!!T.emissiveMap,_e=!!T.metalnessMap,Ve=!!T.roughnessMap,Tt=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,V=T.iridescence>0,$=T.sheen>0,ne=T.transmission>0,Z=Tt&&!!T.anisotropyMap,Q=N&&!!T.clearcoatMap,re=N&&!!T.clearcoatNormalMap,de=N&&!!T.clearcoatRoughnessMap,Te=V&&!!T.iridescenceMap,ee=V&&!!T.iridescenceThicknessMap,ve=$&&!!T.sheenColorMap,Le=$&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,fe=!!T.specularColorMap,He=!!T.specularIntensityMap,L=ne&&!!T.transmissionMap,pe=ne&&!!T.thicknessMap,ie=!!T.gradientMap,be=!!T.alphaMap,ae=T.alphaTest>0,J=!!T.alphaHash,Re=!!T.extensions;let ke=Da;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ke=t.toneMapping);const dt={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:X,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:se,batchingColor:se&&G._colorsTexture!==null,instancing:qe,instancingColor:qe&&G.instanceColor!==null,instancingMorph:qe&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:wr,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:Ge,envMap:De,envMapMode:De&&k.mapping,envMapCubeUVHeight:P,aoMap:D,lightMap:St,bumpMap:Ae,normalMap:Ue,displacementMap:h&&ge,emissiveMap:we,normalMapObjectSpace:Ue&&T.normalMapType===DA,normalMapTangentSpace:Ue&&T.normalMapType===um,metalnessMap:_e,roughnessMap:Ve,anisotropy:Tt,anisotropyMap:Z,clearcoat:N,clearcoatMap:Q,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:b,iridescence:V,iridescenceMap:Te,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:Ne,specularColorMap:fe,specularIntensityMap:He,transmission:ne,transmissionMap:L,thicknessMap:pe,gradientMap:ie,opaque:T.transparent===!1&&T.blending===ur&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:ae,alphaHash:J,combine:T.combine,mapUv:he&&y(T.map.channel),aoMapUv:D&&y(T.aoMap.channel),lightMapUv:St&&y(T.lightMap.channel),bumpMapUv:Ae&&y(T.bumpMap.channel),normalMapUv:Ue&&y(T.normalMap.channel),displacementMapUv:ge&&y(T.displacementMap.channel),emissiveMapUv:we&&y(T.emissiveMap.channel),metalnessMapUv:_e&&y(T.metalnessMap.channel),roughnessMapUv:Ve&&y(T.roughnessMap.channel),anisotropyMapUv:Z&&y(T.anisotropyMap.channel),clearcoatMapUv:Q&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(T.sheenRoughnessMap.channel),specularMapUv:Ne&&y(T.specularMap.channel),specularColorMapUv:fe&&y(T.specularColorMap.channel),specularIntensityMapUv:He&&y(T.specularIntensityMap.channel),transmissionMapUv:L&&y(T.transmissionMap.channel),thicknessMapUv:pe&&y(T.thicknessMap.channel),alphaMapUv:be&&y(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ue||Tt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(he||be),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:we&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zn,flipSided:T.side===Mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Re&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&T.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)_.push(w),_.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(g(_,T),S(_,T),_.push(t.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function g(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function S(T,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const _=x[T.type];let w;if(_){const H=hi[_];w=lw.clone(H.uniforms)}else w=T.uniforms;return w}function C(T,_){let w;for(let H=0,G=u.length;H<G;H++){const q=u[H];if(q.cacheKey===_){w=q,++w.usedTimes;break}}return w===void 0&&(w=new z3(t,_,T,s),u.push(w)),w}function R(T){if(--T.usedTimes===0){const _=u.indexOf(T);u[_]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:U}}function G3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function V3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rv(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(d,h,p,x,y,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function o(d,h,p,x,y,m){const f=r(d,h,p,x,y,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):n.push(f)}function l(d,h,p,x,y,m){const f=r(d,h,p,x,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||V3),i.length>1&&i.sort(h||sv),a.length>1&&a.sort(h||sv)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function k3(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new rv,t.set(i,[r])):a>=s.length?(r=new rv,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function j3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new We};break;case"SpotLight":n={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function X3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let W3=0;function q3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Y3(t){const e=new j3,n=X3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,s=new bt,r=new bt;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,y=0,m=0,f=0,g=0,S=0,M=0,C=0,R=0,A=0;c.sort(q3);for(let T=0,_=c.length;T<_;T++){const w=c[T],H=w.color,G=w.intensity,q=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*G,d+=H.g*G,h+=H.b*G;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],G);A++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,P=n.get(w);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=z,p++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(H).multiplyScalar(G),z.distance=q,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[y]=z;const k=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,k.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[y]=k.matrix,w.castShadow){const P=n.get(w);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=Y,M++}y++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(H).multiplyScalar(G),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=z,m++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const k=w.shadow,P=n.get(w);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,P.shadowCameraNear=k.camera.near,P.shadowCameraFar=k.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=w.shadow.matrix,S++}i.point[x]=z,x++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(G),z.groundColor.copy(w.groundColor).multiplyScalar(G),i.hemi[f]=z,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==g||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==C||U.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,U.directionalLength=p,U.pointLength=x,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=g,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=C,U.numLightProbes=A,i.version=W3++)}function l(c,u){let d=0,h=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const S=c[f];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(S.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),x++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function ov(t){const e=new Y3(t),n=[],i=[];function a(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function r(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Z3(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new ov(t),e.set(a,[o])):s>=r.length?(o=new ov(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$3=`uniform sampler2D shadow_pass;
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
}`;function Q3(t,e,n){let i=new pm;const a=new it,s=new it,r=new vt,o=new _w({depthPacking:NA}),l=new yw,c={},u=n.maxTextureSize,d={[Ji]:Mn,[Mn]:Ji,[Zn]:Zn},h=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:K3,fragmentShader:$3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ei;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oi(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ly;let f=this.type;this.render=function(R,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Na),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=f!==Pi&&this.type===Pi,q=f===Pi&&this.type!==Pi;for(let Y=0,z=R.length;Y<z;Y++){const k=R[Y],P=k.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const K=P.getFrameExtents();if(a.multiply(K),s.copy(P.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/K.x),a.x=s.x*K.x,P.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/K.y),a.y=s.y*K.y,P.mapSize.y=s.y)),P.map===null||G===!0||q===!0){const Se=this.type!==Pi?{minFilter:ci,magFilter:ci}:{};P.map!==null&&P.map.dispose(),P.map=new ms(a.x,a.y,Se),P.map.texture.name=k.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const le=P.getViewportCount();for(let Se=0;Se<le;Se++){const Be=P.getViewport(Se);r.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),H.viewport(r),P.updateMatrices(k,Se),i=P.getFrustum(),M(A,U,P.camera,k,this.type)}P.isPointLightShadow!==!0&&this.type===Pi&&g(P,U),P.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,_,w)};function g(R,A){const U=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ms(a.x,a.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,U,h,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,U,p,y,null)}function S(R,A,U,T){let _=null;const w=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)_=w;else if(_=U.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const H=_.uuid,G=A.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let Y=q[G];Y===void 0&&(Y=_.clone(),q[G]=Y,A.addEventListener("dispose",C)),_=Y}if(_.visible=A.visible,_.wireframe=A.wireframe,T===Pi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=t.properties.get(_);H.light=U}return _}function M(R,A,U,T,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const G=e.update(R),q=R.material;if(Array.isArray(q)){const Y=G.groups;for(let z=0,k=Y.length;z<k;z++){const P=Y[z],K=q[P.materialIndex];if(K&&K.visible){const le=S(R,K,T,_);R.onBeforeShadow(t,R,A,U,G,le,P),t.renderBufferDirect(U,null,G,le,R,P),R.onAfterShadow(t,R,A,U,G,le,P)}}}else if(q.visible){const Y=S(R,q,T,_);R.onBeforeShadow(t,R,A,U,G,Y,null),t.renderBufferDirect(U,null,G,Y,R,null),R.onAfterShadow(t,R,A,U,G,Y,null)}}const H=R.children;for(let G=0,q=H.length;G<q;G++)M(H[G],A,U,T,_)}function C(R){R.target.removeEventListener("dispose",C);for(const U in c){const T=c[U],_=R.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const J3={[ch]:uh,[fh]:ph,[dh]:mh,[Er]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:Er};function eN(t,e){function n(){let L=!1;const pe=new vt;let ie=null;const be=new vt(0,0,0,0);return{setMask:function(ae){ie!==ae&&!L&&(t.colorMask(ae,ae,ae,ae),ie=ae)},setLocked:function(ae){L=ae},setClear:function(ae,J,Re,ke,dt){dt===!0&&(ae*=ke,J*=ke,Re*=ke),pe.set(ae,J,Re,ke),be.equals(pe)===!1&&(t.clearColor(ae,J,Re,ke),be.copy(pe))},reset:function(){L=!1,ie=null,be.set(-1,0,0,0)}}}function i(){let L=!1,pe=!1,ie=null,be=null,ae=null;return{setReversed:function(J){if(pe!==J){const Re=e.get("EXT_clip_control");J?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),pe=J;const ke=ae;ae=null,this.setClear(ke)}},getReversed:function(){return pe},setTest:function(J){J?ue(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(J){ie!==J&&!L&&(t.depthMask(J),ie=J)},setFunc:function(J){if(pe&&(J=J3[J]),be!==J){switch(J){case ch:t.depthFunc(t.NEVER);break;case uh:t.depthFunc(t.ALWAYS);break;case fh:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case dh:t.depthFunc(t.EQUAL);break;case hh:t.depthFunc(t.GEQUAL);break;case ph:t.depthFunc(t.GREATER);break;case mh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}be=J}},setLocked:function(J){L=J},setClear:function(J){ae!==J&&(pe&&(J=1-J),t.clearDepth(J),ae=J)},reset:function(){L=!1,ie=null,be=null,ae=null,pe=!1}}}function a(){let L=!1,pe=null,ie=null,be=null,ae=null,J=null,Re=null,ke=null,dt=null;return{setTest:function(ze){L||(ze?ue(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(ze){pe!==ze&&!L&&(t.stencilMask(ze),pe=ze)},setFunc:function(ze,rt,nn){(ie!==ze||be!==rt||ae!==nn)&&(t.stencilFunc(ze,rt,nn),ie=ze,be=rt,ae=nn)},setOp:function(ze,rt,nn){(J!==ze||Re!==rt||ke!==nn)&&(t.stencilOp(ze,rt,nn),J=ze,Re=rt,ke=nn)},setLocked:function(ze){L=ze},setClear:function(ze){dt!==ze&&(t.clearStencil(ze),dt=ze)},reset:function(){L=!1,pe=null,ie=null,be=null,ae=null,J=null,Re=null,ke=null,dt=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],x=null,y=!1,m=null,f=null,g=null,S=null,M=null,C=null,R=null,A=new We(0,0,0),U=0,T=!1,_=null,w=null,H=null,G=null,q=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(P)[1]),z=k>=1):P.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),z=k>=2);let K=null,le={};const Se=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Pe=new vt().fromArray(Se),X=new vt().fromArray(Be);function oe(L,pe,ie,be){const ae=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<ie;Re++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(pe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return J}const Me={};Me[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),r.setFunc(Er),Ae(!1),Ue(i0),ue(t.CULL_FACE),D(Na);function ue(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function ye(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function qe(L,pe){return d[L]!==pe?(t.bindFramebuffer(L,pe),d[L]=pe,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function se(L,pe){let ie=p,be=!1;if(L){ie=h.get(pe),ie===void 0&&(ie=[],h.set(pe,ie));const ae=L.textures;if(ie.length!==ae.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Re=ae.length;J<Re;J++)ie[J]=t.COLOR_ATTACHMENT0+J;ie.length=ae.length,be=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,be=!0);be&&t.drawBuffers(ie)}function he(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const Ge={[Ja]:t.FUNC_ADD,[iA]:t.FUNC_SUBTRACT,[aA]:t.FUNC_REVERSE_SUBTRACT};Ge[sA]=t.MIN,Ge[rA]=t.MAX;const De={[oA]:t.ZERO,[lA]:t.ONE,[cA]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[mA]:t.SRC_ALPHA_SATURATE,[hA]:t.DST_COLOR,[fA]:t.DST_ALPHA,[uA]:t.ONE_MINUS_SRC_COLOR,[lh]:t.ONE_MINUS_SRC_ALPHA,[pA]:t.ONE_MINUS_DST_COLOR,[dA]:t.ONE_MINUS_DST_ALPHA,[gA]:t.CONSTANT_COLOR,[vA]:t.ONE_MINUS_CONSTANT_COLOR,[xA]:t.CONSTANT_ALPHA,[_A]:t.ONE_MINUS_CONSTANT_ALPHA};function D(L,pe,ie,be,ae,J,Re,ke,dt,ze){if(L===Na){y===!0&&(ye(t.BLEND),y=!1);return}if(y===!1&&(ue(t.BLEND),y=!0),L!==nA){if(L!==m||ze!==T){if((f!==Ja||M!==Ja)&&(t.blendEquation(t.FUNC_ADD),f=Ja,M=Ja),ze)switch(L){case ur:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case a0:t.blendFunc(t.ONE,t.ONE);break;case s0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ur:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case a0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case s0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,S=null,C=null,R=null,A.set(0,0,0),U=0,m=L,T=ze}return}ae=ae||pe,J=J||ie,Re=Re||be,(pe!==f||ae!==M)&&(t.blendEquationSeparate(Ge[pe],Ge[ae]),f=pe,M=ae),(ie!==g||be!==S||J!==C||Re!==R)&&(t.blendFuncSeparate(De[ie],De[be],De[J],De[Re]),g=ie,S=be,C=J,R=Re),(ke.equals(A)===!1||dt!==U)&&(t.blendColor(ke.r,ke.g,ke.b,dt),A.copy(ke),U=dt),m=L,T=!1}function St(L,pe){L.side===Zn?ye(t.CULL_FACE):ue(t.CULL_FACE);let ie=L.side===Mn;pe&&(ie=!ie),Ae(ie),L.blending===ur&&L.transparent===!1?D(Na):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const be=L.stencilWrite;o.setTest(be),be&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){_!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),_=L)}function Ue(L){L!==eA?(ue(t.CULL_FACE),L!==w&&(L===i0?t.cullFace(t.BACK):L===tA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),w=L}function ge(L){L!==H&&(z&&t.lineWidth(L),H=L)}function we(L,pe,ie){L?(ue(t.POLYGON_OFFSET_FILL),(G!==pe||q!==ie)&&(t.polygonOffset(pe,ie),G=pe,q=ie)):ye(t.POLYGON_OFFSET_FILL)}function _e(L){L?ue(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=t.TEXTURE0+Y-1),K!==L&&(t.activeTexture(L),K=L)}function Tt(L,pe,ie){ie===void 0&&(K===null?ie=t.TEXTURE0+Y-1:ie=K);let be=le[ie];be===void 0&&(be={type:void 0,texture:void 0},le[ie]=be),(be.type!==L||be.texture!==pe)&&(K!==ie&&(t.activeTexture(ie),K=ie),t.bindTexture(L,pe||Me[L]),be.type=L,be.texture=pe)}function N(){const L=le[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){Pe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function Le(L){X.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ne(L,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let be=ie.get(L);be===void 0&&(be=t.getUniformBlockIndex(pe,L.name),ie.set(L,be))}function fe(L,pe){const be=c.get(pe).get(L);l.get(pe)!==be&&(t.uniformBlockBinding(pe,be,L.__bindingPointIndex),l.set(pe,be))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},K=null,le={},d={},h=new WeakMap,p=[],x=null,y=!1,m=null,f=null,g=null,S=null,M=null,C=null,R=null,A=new We(0,0,0),U=0,T=!1,_=null,w=null,H=null,G=null,q=null,Pe.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:ye,bindFramebuffer:qe,drawBuffers:se,useProgram:he,setBlending:D,setMaterial:St,setFlipSided:Ae,setCullFace:Ue,setLineWidth:ge,setPolygonOffset:we,setScissorTest:_e,activeTexture:Ve,bindTexture:Tt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Te,texImage3D:ee,updateUBOMapping:Ne,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:de,texSubImage2D:$,texSubImage3D:ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:ve,viewport:Le,reset:He}}function tN(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return p?new OffscreenCanvas(N,b):Yo("canvas")}function y(N,b,V){let $=1;const ne=Tt(N);if((ne.width>V||ne.height>V)&&($=V/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Z=Math.floor($*ne.width),Q=Math.floor($*ne.height);d===void 0&&(d=x(Z,Q));const re=b?x(Z,Q):d;return re.width=Z,re.height=Q,re.getContext("2d").drawImage(N,0,0,Z,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Q+")."),re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function m(N){return N.generateMipmaps}function f(N){t.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(N,b,V,$,ne=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Z=b;if(b===t.RED&&(V===t.FLOAT&&(Z=t.R32F),V===t.HALF_FLOAT&&(Z=t.R16F),V===t.UNSIGNED_BYTE&&(Z=t.R8)),b===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.R8UI),V===t.UNSIGNED_SHORT&&(Z=t.R16UI),V===t.UNSIGNED_INT&&(Z=t.R32UI),V===t.BYTE&&(Z=t.R8I),V===t.SHORT&&(Z=t.R16I),V===t.INT&&(Z=t.R32I)),b===t.RG&&(V===t.FLOAT&&(Z=t.RG32F),V===t.HALF_FLOAT&&(Z=t.RG16F),V===t.UNSIGNED_BYTE&&(Z=t.RG8)),b===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RG8UI),V===t.UNSIGNED_SHORT&&(Z=t.RG16UI),V===t.UNSIGNED_INT&&(Z=t.RG32UI),V===t.BYTE&&(Z=t.RG8I),V===t.SHORT&&(Z=t.RG16I),V===t.INT&&(Z=t.RG32I)),b===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),V===t.UNSIGNED_INT&&(Z=t.RGB32UI),V===t.BYTE&&(Z=t.RGB8I),V===t.SHORT&&(Z=t.RGB16I),V===t.INT&&(Z=t.RGB32I)),b===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),V===t.UNSIGNED_INT&&(Z=t.RGBA32UI),V===t.BYTE&&(Z=t.RGBA8I),V===t.SHORT&&(Z=t.RGBA16I),V===t.INT&&(Z=t.RGBA32I)),b===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),b===t.RGBA){const Q=ne?uu:tt.getTransfer($);V===t.FLOAT&&(Z=t.RGBA32F),V===t.HALF_FLOAT&&(Z=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Z=Q===pt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(N,b){let V;return N?b===null||b===ps||b===Xo?V=t.DEPTH24_STENCIL8:b===Vi?V=t.DEPTH32F_STENCIL8:b===jo&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===Xo?V=t.DEPTH_COMPONENT24:b===Vi?V=t.DEPTH_COMPONENT32F:b===jo&&(V=t.DEPTH_COMPONENT16),V}function C(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ci&&N.minFilter!==gi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function R(N){const b=N.target;b.removeEventListener("dispose",R),U(b),b.isVideoTexture&&u.delete(b)}function A(N){const b=N.target;b.removeEventListener("dispose",A),_(b)}function U(N){const b=i.get(N);if(b.__webglInit===void 0)return;const V=N.source,$=h.get(V);if($){const ne=$[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(N),Object.keys($).length===0&&h.delete(V)}i.remove(N)}function T(N){const b=i.get(N);t.deleteTexture(b.__webglTexture);const V=N.source,$=h.get(V);delete $[b.__cacheKey],r.memory.textures--}function _(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let ne=0;ne<b.__webglFramebuffer[$].length;ne++)t.deleteFramebuffer(b.__webglFramebuffer[$][ne]);else t.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)t.deleteFramebuffer(b.__webglFramebuffer[$]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=N.textures;for(let $=0,ne=V.length;$<ne;$++){const Z=i.get(V[$]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(V[$])}i.remove(N)}let w=0;function H(){w=0}function G(){const N=w;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),w+=1,N}function q(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function Y(N,b){const V=i.get(N);if(N.isVideoTexture&&_e(N),N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){const $=N.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(V,N,b);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+b)}function z(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){Me(V,N,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+b)}function k(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){Me(V,N,b);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+b)}function P(N,b){const V=i.get(N);if(N.version>0&&V.__version!==N.version){ue(V,N,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+b)}const K={[cu]:t.REPEAT,[ts]:t.CLAMP_TO_EDGE,[xh]:t.MIRRORED_REPEAT},le={[ci]:t.NEAREST,[RA]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[gi]:t.LINEAR,[Af]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},Se={[UA]:t.NEVER,[BA]:t.ALWAYS,[LA]:t.LESS,[jy]:t.LEQUAL,[OA]:t.EQUAL,[FA]:t.GEQUAL,[PA]:t.GREATER,[zA]:t.NOTEQUAL};function Be(N,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gi||b.magFilter===Af||b.magFilter===Fl||b.magFilter===ns||b.minFilter===gi||b.minFilter===Af||b.minFilter===Fl||b.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,K[b.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,K[b.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,K[b.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,le[b.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==Fl&&b.minFilter!==ns||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(N,b){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",R));const $=b.source;let ne=h.get($);ne===void 0&&(ne={},h.set($,ne));const Z=q(b);if(Z!==N.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ne[Z].usedTimes++;const Q=ne[N.__cacheKey];Q!==void 0&&(ne[N.__cacheKey].usedTimes--,Q.usedTimes===0&&T(b)),N.__cacheKey=Z,N.__webglTexture=ne[Z].texture}return V}function X(N,b,V){return Math.floor(Math.floor(N/V)/b)}function oe(N,b,V,$){const Z=N.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,V,$,b.data);else{Z.sort((ee,ve)=>ee.start-ve.start);let Q=0;for(let ee=1;ee<Z.length;ee++){const ve=Z[Q],Le=Z[ee],Ne=ve.start+ve.count,fe=X(Le.start,b.width,4),He=X(ve.start,b.width,4);Le.start<=Ne+1&&fe===He&&X(Le.start+Le.count-1,b.width,4)===fe?ve.count=Math.max(ve.count,Le.start+Le.count-ve.start):(++Q,Z[Q]=Le)}Z.length=Q+1;const re=t.getParameter(t.UNPACK_ROW_LENGTH),de=t.getParameter(t.UNPACK_SKIP_PIXELS),Te=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ee=0,ve=Z.length;ee<ve;ee++){const Le=Z[ee],Ne=Math.floor(Le.start/4),fe=Math.ceil(Le.count/4),He=Ne%b.width,L=Math.floor(Ne/b.width),pe=fe,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,He,L,pe,ie,V,$,b.data)}N.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,re),t.pixelStorei(t.UNPACK_SKIP_PIXELS,de),t.pixelStorei(t.UNPACK_SKIP_ROWS,Te)}}function Me(N,b,V){let $=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=t.TEXTURE_3D);const ne=Pe(N,b),Z=b.source;n.bindTexture($,N.__webglTexture,t.TEXTURE0+V);const Q=i.get(Z);if(Z.version!==Q.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const re=tt.getPrimaries(tt.workingColorSpace),de=b.colorSpace===va?null:tt.getPrimaries(b.colorSpace),Te=b.colorSpace===va||re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ee=y(b.image,!1,a.maxTextureSize);ee=Ve(b,ee);const ve=s.convert(b.format,b.colorSpace),Le=s.convert(b.type);let Ne=S(b.internalFormat,ve,Le,b.colorSpace,b.isVideoTexture);Be($,b);let fe;const He=b.mipmaps,L=b.isVideoTexture!==!0,pe=Q.__version===void 0||ne===!0,ie=Z.dataReady,be=C(b,ee);if(b.isDepthTexture)Ne=M(b.format===qo,b.type),pe&&(L?n.texStorage2D(t.TEXTURE_2D,1,Ne,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ee.width,ee.height,0,ve,Le,null));else if(b.isDataTexture)if(He.length>0){L&&pe&&n.texStorage2D(t.TEXTURE_2D,be,Ne,He[0].width,He[0].height);for(let ae=0,J=He.length;ae<J;ae++)fe=He[ae],L?ie&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,fe.width,fe.height,ve,Le,fe.data):n.texImage2D(t.TEXTURE_2D,ae,Ne,fe.width,fe.height,0,ve,Le,fe.data);b.generateMipmaps=!1}else L?(pe&&n.texStorage2D(t.TEXTURE_2D,be,Ne,ee.width,ee.height),ie&&oe(b,ee,ve,Le)):n.texImage2D(t.TEXTURE_2D,0,Ne,ee.width,ee.height,0,ve,Le,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,He[0].width,He[0].height,ee.depth);for(let ae=0,J=He.length;ae<J;ae++)if(fe=He[ae],b.format!==ri)if(ve!==null)if(L){if(ie)if(b.layerUpdates.size>0){const Re=F0(fe.width,fe.height,b.format,b.type);for(const ke of b.layerUpdates){const dt=fe.data.subarray(ke*Re/fe.data.BYTES_PER_ELEMENT,(ke+1)*Re/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,ke,fe.width,fe.height,1,ve,dt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,fe.width,fe.height,ee.depth,ve,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Ne,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,fe.width,fe.height,ee.depth,ve,Le,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Ne,fe.width,fe.height,ee.depth,0,ve,Le,fe.data)}else{L&&pe&&n.texStorage2D(t.TEXTURE_2D,be,Ne,He[0].width,He[0].height);for(let ae=0,J=He.length;ae<J;ae++)fe=He[ae],b.format!==ri?ve!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,fe.width,fe.height,ve,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Ne,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,fe.width,fe.height,ve,Le,fe.data):n.texImage2D(t.TEXTURE_2D,ae,Ne,fe.width,fe.height,0,ve,Le,fe.data)}else if(b.isDataArrayTexture)if(L){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,ee.width,ee.height,ee.depth),ie)if(b.layerUpdates.size>0){const ae=F0(ee.width,ee.height,b.format,b.type);for(const J of b.layerUpdates){const Re=ee.data.subarray(J*ae/ee.data.BYTES_PER_ELEMENT,(J+1)*ae/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,ve,Le,Re)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,Le,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ee.width,ee.height,ee.depth,0,ve,Le,ee.data);else if(b.isData3DTexture)L?(pe&&n.texStorage3D(t.TEXTURE_3D,be,Ne,ee.width,ee.height,ee.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ee.width,ee.height,ee.depth,0,ve,Le,ee.data);else if(b.isFramebufferTexture){if(pe)if(L)n.texStorage2D(t.TEXTURE_2D,be,Ne,ee.width,ee.height);else{let ae=ee.width,J=ee.height;for(let Re=0;Re<be;Re++)n.texImage2D(t.TEXTURE_2D,Re,Ne,ae,J,0,ve,Le,null),ae>>=1,J>>=1}}else if(He.length>0){if(L&&pe){const ae=Tt(He[0]);n.texStorage2D(t.TEXTURE_2D,be,Ne,ae.width,ae.height)}for(let ae=0,J=He.length;ae<J;ae++)fe=He[ae],L?ie&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve,Le,fe):n.texImage2D(t.TEXTURE_2D,ae,Ne,ve,Le,fe);b.generateMipmaps=!1}else if(L){if(pe){const ae=Tt(ee);n.texStorage2D(t.TEXTURE_2D,be,Ne,ae.width,ae.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Le,ee)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ve,Le,ee);m(b)&&f($),Q.__version=Z.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ue(N,b,V){if(b.image.length!==6)return;const $=Pe(N,b),ne=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+V);const Z=i.get(ne);if(ne.version!==Z.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const Q=tt.getPrimaries(tt.workingColorSpace),re=b.colorSpace===va?null:tt.getPrimaries(b.colorSpace),de=b.colorSpace===va||Q===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Te&&!ee?ve[J]=y(b.image[J],!0,a.maxCubemapSize):ve[J]=ee?b.image[J].image:b.image[J],ve[J]=Ve(b,ve[J]);const Le=ve[0],Ne=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),He=S(b.internalFormat,Ne,fe,b.colorSpace),L=b.isVideoTexture!==!0,pe=Z.__version===void 0||$===!0,ie=ne.dataReady;let be=C(b,Le);Be(t.TEXTURE_CUBE_MAP,b);let ae;if(Te){L&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,He,Le.width,Le.height);for(let J=0;J<6;J++){ae=ve[J].mipmaps;for(let Re=0;Re<ae.length;Re++){const ke=ae[Re];b.format!==ri?Ne!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,0,0,ke.width,ke.height,Ne,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,0,0,ke.width,ke.height,Ne,fe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re,He,ke.width,ke.height,0,Ne,fe,ke.data)}}}else{if(ae=b.mipmaps,L&&pe){ae.length>0&&be++;const J=Tt(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,He,J.width,J.height)}for(let J=0;J<6;J++)if(ee){L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ne,fe,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ve[J].width,ve[J].height,0,Ne,fe,ve[J].data);for(let Re=0;Re<ae.length;Re++){const dt=ae[Re].image[J].image;L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,0,0,dt.width,dt.height,Ne,fe,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,He,dt.width,dt.height,0,Ne,fe,dt.data)}}else{L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,fe,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Ne,fe,ve[J]);for(let Re=0;Re<ae.length;Re++){const ke=ae[Re];L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,0,0,Ne,fe,ke.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re+1,He,Ne,fe,ke.image[J])}}}m(b)&&f(t.TEXTURE_CUBE_MAP),Z.__version=ne.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ye(N,b,V,$,ne,Z){const Q=s.convert(V.format,V.colorSpace),re=s.convert(V.type),de=S(V.internalFormat,Q,re,V.colorSpace),Te=i.get(b),ee=i.get(V);if(ee.__renderTarget=b,!Te.__hasExternalTextures){const ve=Math.max(1,b.width>>Z),Le=Math.max(1,b.height>>Z);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Z,de,ve,Le,b.depth,0,Q,re,null):n.texImage2D(ne,Z,de,ve,Le,0,Q,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),we(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ne,ee.__webglTexture,0,ge(b)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ne,ee.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(N,b,V){if(t.bindRenderbuffer(t.RENDERBUFFER,N),b.depthBuffer){const $=b.depthTexture,ne=$&&$.isDepthTexture?$.type:null,Z=M(b.stencilBuffer,ne),Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=ge(b);we(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,Z,b.width,b.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,Z,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Z,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,N)}else{const $=b.textures;for(let ne=0;ne<$.length;ne++){const Z=$[ne],Q=s.convert(Z.format,Z.colorSpace),re=s.convert(Z.type),de=S(Z.internalFormat,Q,re,Z.colorSpace),Te=ge(b);V&&we(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,de,b.width,b.height):we(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const ne=$.__webglTexture,Z=ge(b);if(b.depthTexture.format===Wo)we(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(b.depthTexture.format===qo)we(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function he(N){const b=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=$}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=N.texture.mipmaps;$&&$.length>0?se(b.__webglFramebuffer[0],N):se(b.__webglFramebuffer,N)}else if(V){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=t.createRenderbuffer(),qe(b.__webglDepthbuffer[$],N,!1);else{const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}else{const $=N.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),qe(b.__webglDepthbuffer,N,!1);else{const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(N,b,V){const $=i.get(N);b!==void 0&&ye($.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&he(N)}function De(N){const b=N.texture,V=i.get(N),$=i.get(b);N.addEventListener("dispose",A);const ne=N.textures,Z=N.isWebGLCubeRenderTarget===!0,Q=ne.length>1;if(Q||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=b.version,r.memory.textures++),Z){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let de=0;de<b.mipmaps.length;de++)V.__webglFramebuffer[re][de]=t.createFramebuffer()}else V.__webglFramebuffer[re]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)V.__webglFramebuffer[re]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Q)for(let re=0,de=ne.length;re<de;re++){const Te=i.get(ne[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),r.memory.textures++)}if(N.samples>0&&we(N)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<ne.length;re++){const de=ne[re];V.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[re]);const Te=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),ve=S(de.internalFormat,Te,ee,de.colorSpace,N.isXRRenderTarget===!0),Le=ge(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,V.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(V.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Be(t.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ye(V.__webglFramebuffer[re][de],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else ye(V.__webglFramebuffer[re],N,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){for(let re=0,de=ne.length;re<de;re++){const Te=ne[re],ee=i.get(Te);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Be(t.TEXTURE_2D,Te),ye(V.__webglFramebuffer,N,Te,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),m(Te)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(re=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,$.__webglTexture),Be(re,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ye(V.__webglFramebuffer[de],N,b,t.COLOR_ATTACHMENT0,re,de);else ye(V.__webglFramebuffer,N,b,t.COLOR_ATTACHMENT0,re,0);m(b)&&f(re),n.unbindTexture()}N.depthBuffer&&he(N)}function D(N){const b=N.textures;for(let V=0,$=b.length;V<$;V++){const ne=b[V];if(m(ne)){const Z=g(N),Q=i.get(ne).__webglTexture;n.bindTexture(Z,Q),f(Z),n.unbindTexture()}}}const St=[],Ae=[];function Ue(N){if(N.samples>0){if(we(N)===!1){const b=N.textures,V=N.width,$=N.height;let ne=t.COLOR_BUFFER_BIT;const Z=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(N),re=b.length>1;if(re)for(let Te=0;Te<b.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const de=N.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Te]);const ee=i.get(b[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,ne,t.NEAREST),l===!0&&(St.length=0,Ae.length=0,St.push(t.COLOR_ATTACHMENT0+Te),N.depthBuffer&&N.resolveDepthBuffer===!1&&(St.push(Z),Ae.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ae)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<b.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Te]);const ee=i.get(b[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const b=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function ge(N){return Math.min(a.maxSamples,N.samples)}function we(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(N){const b=r.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function Ve(N,b){const V=N.colorSpace,$=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==wr&&V!==va&&(tt.getTransfer(V)===pt?($!==ri||ne!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Tt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=P,this.rebindTextures=Ge,this.setupRenderTarget=De,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function nN(t,e){function n(i,a=va){let s;const r=tt.getTransfer(a);if(i===Si)return t.UNSIGNED_BYTE;if(i===sm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===By)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zy)return t.BYTE;if(i===Fy)return t.SHORT;if(i===jo)return t.UNSIGNED_SHORT;if(i===am)return t.INT;if(i===ps)return t.UNSIGNED_INT;if(i===Vi)return t.FLOAT;if(i===pl)return t.HALF_FLOAT;if(i===Iy)return t.ALPHA;if(i===Hy)return t.RGB;if(i===ri)return t.RGBA;if(i===Wo)return t.DEPTH_COMPONENT;if(i===qo)return t.DEPTH_STENCIL;if(i===Gy)return t.RED;if(i===om)return t.RED_INTEGER;if(i===Vy)return t.RG;if(i===lm)return t.RG_INTEGER;if(i===cm)return t.RGBA_INTEGER;if(i===Ac||i===wc||i===Rc||i===Cc)if(r===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===yh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bh||i===Eh)return r===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Th)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ah||i===wh||i===Rh||i===Ch||i===Nh||i===Dh||i===Uh||i===Lh||i===Oh||i===Ph||i===zh||i===Fh||i===Bh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Hh||i===Gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nc)return r===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ky||i===Vh||i===kh||i===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aN=`
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

}`;class sN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new hn,s=e.properties.get(a);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pa({vertexShader:iN,fragmentShader:aN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rN extends Br{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const y=new sN,m=n.getContextAttributes();let f=null,g=null;const S=[],M=[],C=new it;let R=null;const A=new Sn;A.viewport=new vt;const U=new Sn;U.viewport=new vt;const T=[A,U],_=new ww;let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=S[X];return oe===void 0&&(oe=new Zf,S[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=S[X];return oe===void 0&&(oe=new Zf,S[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=S[X];return oe===void 0&&(oe=new Zf,S[X]=oe),oe.getHandSpace()};function G(X){const oe=M.indexOf(X.inputSource);if(oe===-1)return;const Me=S[oe];Me!==void 0&&(Me.update(X.inputSource,X.frame,c||r),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){const oe=M[X];oe!==null&&(M[X]=null,S[X].disconnect(oe))}w=null,H=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,a=null,g=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(f=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",q),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ue=null,ye=null;m.depth&&(ye=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=m.stencil?qo:Wo,ue=m.stencil?Xo:ps);const qe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(a,n),h=d.createProjectionLayer(qe),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ms(h.textureWidth,h.textureHeight,{format:ri,type:Si,depthTexture:new nS(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,Me),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ms(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Pe.setContext(a),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(X){for(let oe=0;oe<X.removed.length;oe++){const Me=X.removed[oe],ue=M.indexOf(Me);ue>=0&&(M[ue]=null,S[ue].disconnect(Me))}for(let oe=0;oe<X.added.length;oe++){const Me=X.added[oe];let ue=M.indexOf(Me);if(ue===-1){for(let qe=0;qe<S.length;qe++)if(qe>=M.length){M.push(Me),ue=qe;break}else if(M[qe]===null){M[qe]=Me,ue=qe;break}if(ue===-1)break}const ye=S[ue];ye&&ye.connect(Me)}}const z=new F,k=new F;function P(X,oe,Me){z.setFromMatrixPosition(oe.matrixWorld),k.setFromMatrixPosition(Me.matrixWorld);const ue=z.distanceTo(k),ye=oe.projectionMatrix.elements,qe=Me.projectionMatrix.elements,se=ye[14]/(ye[10]-1),he=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],De=(ye[9]-1)/ye[5],D=(ye[8]-1)/ye[0],St=(qe[8]+1)/qe[0],Ae=se*D,Ue=se*St,ge=ue/(-D+St),we=ge*-D;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(we),X.translateZ(ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ye[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const _e=se+ge,Ve=he+ge,Tt=Ae-we,N=Ue+(ue-we),b=Ge*he/Ve*_e,V=De*he/Ve*_e;X.projectionMatrix.makePerspective(Tt,N,b,V,_e,Ve),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let oe=X.near,Me=X.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),_.near=U.near=A.near=oe,_.far=U.far=A.far=Me,(w!==_.near||H!==_.far)&&(a.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,H=_.far),A.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,_.layers.mask=A.layers.mask|U.layers.mask;const ue=X.parent,ye=_.cameras;K(_,ue);for(let qe=0;qe<ye.length;qe++)K(ye[qe],ue);ye.length===2?P(_,A,U):_.projectionMatrix.copy(A.projectionMatrix),le(X,_,ue)};function le(X,oe,Me){Me===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Se=null;function Be(X,oe){if(u=oe.getViewerPose(c||r),x=oe,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ue=!1;Me.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let se=0;se<Me.length;se++){const he=Me[se];let Ge=null;if(p!==null)Ge=p.getViewport(he);else{const D=d.getViewSubImage(h,he);Ge=D.viewport,se===0&&(e.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(g))}let De=T[se];De===void 0&&(De=new Sn,De.layers.enable(se),De.viewport=new vt,T[se]=De),De.matrix.fromArray(he.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(he.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),se===0&&(_.matrix.copy(De.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(De)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const se=d.getDepthInformation(Me[0]);se&&se.isValid&&se.texture&&y.init(e,se,a.renderState)}}for(let Me=0;Me<S.length;Me++){const ue=M[Me],ye=S[Me];ue!==null&&ye!==void 0&&ye.update(ue,oe,c||r)}Se&&Se(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),x=null}const Pe=new uS;Pe.setAnimationLoop(Be),this.setAnimationLoop=function(X){Se=X},this.dispose=function(){}}}const qa=new ui,oN=new bt;function lN(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Qy(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,g,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),S=g.envMap,M=g.envMapRotation;S&&(m.envMap.value=S,qa.copy(M),qa.x*=-1,qa.y*=-1,qa.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qa.y*=-1,qa.z*=-1),m.envMapRotation.value.setFromMatrix4(oN.makeRotationFromEuler(qa)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=S*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function cN(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,S){const M=S.program;i.uniformBlockBinding(g,M)}function c(g,S){let M=a[g.id];M===void 0&&(x(g),M=u(g),a[g.id]=M,g.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(g,C);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function u(g){const S=d();g.__bindingPointIndex=S;const M=t.createBuffer(),C=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const S=a[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let R=0,A=M.length;R<A;R++){const U=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,_=U.length;T<_;T++){const w=U[T];if(p(w,R,T,C)===!0){const H=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let Y=0;Y<G.length;Y++){const z=G[Y],k=y(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,H+q,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,S,M,C){const R=g.value,A=S+"_"+M;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const U=C[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function x(g){const S=g.uniforms;let M=0;const C=16;for(let A=0,U=S.length;A<U;A++){const T=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,w=T.length;_<w;_++){const H=T[_],G=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Y=G.length;q<Y;q++){const z=G[q],k=y(z),P=M%C,K=P%k.boundary,le=P+K;M+=K,le!==0&&C-le<k.storage&&(M+=C-le),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=k.storage}}}const R=M%C;return R>0&&(M+=C-R),g.__size=M,g.__cache={},this}function y(g){const S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=48,S.storage=48):g.isMatrix4?(S.boundary=64,S.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),S}function m(g){const S=g.target;S.removeEventListener("dispose",m);const M=r.indexOf(S.__bindingPointIndex);r.splice(M,1),t.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function f(){for(const g in a)t.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}class mS{constructor(e={}){const{canvas:n=HA(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const x=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const g=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Jt;let R=0,A=0,U=null,T=-1,_=null;const w=new vt,H=new vt;let G=null;const q=new We(0);let Y=0,z=n.width,k=n.height,P=1,K=null,le=null;const Se=new vt(0,0,z,k),Be=new vt(0,0,z,k);let Pe=!1;const X=new pm;let oe=!1,Me=!1;const ue=new bt,ye=new bt,qe=new F,se=new vt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function De(){return U===null?P:1}let D=i;function St(E,B){return n.getContext(E,B)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",J,!1),D===null){const B="webgl2";if(D=St(B,E),D===null)throw St(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ae,Ue,ge,we,_e,Ve,Tt,N,b,V,$,ne,Z,Q,re,de,Te,ee,ve,Le,Ne,fe,He,L;function pe(){Ae=new yC(D),Ae.init(),fe=new nN(D,Ae),Ue=new hC(D,Ae,e,fe),ge=new eN(D,Ae),Ue.reverseDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),we=new bC(D),_e=new G3,Ve=new tN(D,Ae,ge,_e,Ue,fe,we),Tt=new mC(M),N=new _C(M),b=new Cw(D),He=new fC(D,b),V=new SC(D,b,we,He),$=new TC(D,V,b,we),ve=new EC(D,Ue,Ve),de=new pC(_e),ne=new H3(M,Tt,N,Ae,Ue,He,de),Z=new lN(M,_e),Q=new k3,re=new Z3(Ae),ee=new uC(M,Tt,N,ge,$,p,l),Te=new Q3(M,$,Ue),L=new cN(D,we,Ue,ge),Le=new dC(D,Ae,we),Ne=new MC(D,Ae,we),we.programs=ne.programs,M.capabilities=Ue,M.extensions=Ae,M.properties=_e,M.renderLists=Q,M.shadowMap=Te,M.state=ge,M.info=we}pe();const ie=new rN(M,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(E){E!==void 0&&(P=E,this.setSize(z,k,!1))},this.getSize=function(E){return E.set(z,k)},this.setSize=function(E,B,j=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,k=B,n.width=Math.floor(E*P),n.height=Math.floor(B*P),j===!0&&(n.style.width=E+"px",n.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(z*P,k*P).floor()},this.setDrawingBufferSize=function(E,B,j){z=E,k=B,P=j,n.width=Math.floor(E*j),n.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,B,j,W){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,B,j,W),ge.viewport(w.copy(Se).multiplyScalar(P).round())},this.getScissor=function(E){return E.copy(Be)},this.setScissor=function(E,B,j,W){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,B,j,W),ge.scissor(H.copy(Be).multiplyScalar(P).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){ge.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,j=!0){let W=0;if(E){let I=!1;if(U!==null){const ce=U.texture.format;I=ce===cm||ce===lm||ce===om}if(I){const ce=U.texture.type,xe=ce===Si||ce===ps||ce===jo||ce===Xo||ce===sm||ce===rm,Ce=ee.getClearColor(),Ee=ee.getClearAlpha(),je=Ce.r,Xe=Ce.g,Oe=Ce.b;xe?(x[0]=je,x[1]=Xe,x[2]=Oe,x[3]=Ee,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=je,y[1]=Xe,y[2]=Oe,y[3]=Ee,D.clearBufferiv(D.COLOR,0,y))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",J,!1),ee.dispose(),Q.dispose(),re.dispose(),_e.dispose(),Tt.dispose(),N.dispose(),$.dispose(),He.dispose(),L.dispose(),ne.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Bn),ie.removeEventListener("sessionend",xm),Ia.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=we.autoReset,B=Te.enabled,j=Te.autoUpdate,W=Te.needsUpdate,I=Te.type;pe(),we.autoReset=E,Te.enabled=B,Te.autoUpdate=j,Te.needsUpdate=W,Te.type=I}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const B=E.target;B.removeEventListener("dispose",Re),ke(B)}function ke(E){dt(E),_e.remove(E)}function dt(E){const B=_e.get(E).programs;B!==void 0&&(B.forEach(function(j){ne.releaseProgram(j)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,W,I,ce){B===null&&(B=he);const xe=I.isMesh&&I.matrixWorld.determinant()<0,Ce=_S(E,B,j,W,I);ge.setMaterial(W,xe);let Ee=j.index,je=1;if(W.wireframe===!0){if(Ee=V.getWireframeAttribute(j),Ee===void 0)return;je=2}const Xe=j.drawRange,Oe=j.attributes.position;let et=Xe.start*je,ht=(Xe.start+Xe.count)*je;ce!==null&&(et=Math.max(et,ce.start*je),ht=Math.min(ht,(ce.start+ce.count)*je)),Ee!==null?(et=Math.max(et,0),ht=Math.min(ht,Ee.count)):Oe!=null&&(et=Math.max(et,0),ht=Math.min(ht,Oe.count));const Lt=ht-et;if(Lt<0||Lt===1/0)return;He.setup(I,W,Ce,j,Ee);let Mt,xt=Le;if(Ee!==null&&(Mt=b.get(Ee),xt=Ne,xt.setIndex(Mt)),I.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*De()),xt.setMode(D.LINES)):xt.setMode(D.TRIANGLES);else if(I.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),ge.setLineWidth(Fe*De()),I.isLineSegments?xt.setMode(D.LINES):I.isLineLoop?xt.setMode(D.LINE_LOOP):xt.setMode(D.LINE_STRIP)}else I.isPoints?xt.setMode(D.POINTS):I.isSprite&&xt.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Fe=I._multiDrawStarts,Nt=I._multiDrawCounts,ot=I._multiDrawCount,Tn=Ee?b.get(Ee).bytesPerElement:1,Ss=_e.get(W).currentProgram.getUniforms();for(let An=0;An<ot;An++)Ss.setValue(D,"_gl_DrawID",An),xt.render(Fe[An]/Tn,Nt[An])}else if(I.isInstancedMesh)xt.renderInstances(et,Lt,I.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,Fe);xt.renderInstances(et,Lt,Nt)}else xt.render(et,Lt)};function ze(E,B,j){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,yl(E,B,j),E.side=Ji,E.needsUpdate=!0,yl(E,B,j),E.side=Zn):yl(E,B,j)}this.compile=function(E,B,j=null){j===null&&(j=E),f=re.get(j),f.init(B),S.push(f),j.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==j&&E.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const W=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ce=I.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Ce=ce[xe];ze(Ce,j,I),W.add(Ce)}else ze(ce,j,I),W.add(ce)}),f=S.pop(),W},this.compileAsync=function(E,B,j=null){const W=this.compile(E,B,j);return new Promise(I=>{function ce(){if(W.forEach(function(xe){_e.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){I(E);return}setTimeout(ce,10)}Ae.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let rt=null;function nn(E){rt&&rt(E)}function Bn(){Ia.stop()}function xm(){Ia.start()}const Ia=new uS;Ia.setAnimationLoop(nn),typeof self<"u"&&Ia.setContext(self),this.setAnimationLoop=function(E){rt=E,ie.setAnimationLoop(E),E===null?Ia.stop():Ia.start()},ie.addEventListener("sessionstart",Bn),ie.addEventListener("sessionend",xm),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,U),f=re.get(E,S.length),f.init(B),S.push(f),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(ye),Me=this.localClippingEnabled,oe=de.init(this.clippingPlanes,Me),m=Q.get(E,g.length),m.init(),g.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ce=M.xr.getDepthSensingMesh();ce!==null&&Hu(ce,B,-1/0,M.sortObjects)}Hu(E,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(K,le),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&ee.addToRenderList(m,E),this.info.render.frame++,oe===!0&&de.beginShadows();const j=f.state.shadowsArray;Te.render(j,E,B),oe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,I=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ce=B.cameras;if(I.length>0)for(let xe=0,Ce=ce.length;xe<Ce;xe++){const Ee=ce[xe];ym(W,I,E,Ee)}Ge&&ee.render(E);for(let xe=0,Ce=ce.length;xe<Ce;xe++){const Ee=ce[xe];_m(m,E,Ee,Ee.viewport)}}else I.length>0&&ym(W,I,E,B),Ge&&ee.render(E),_m(m,E,B);U!==null&&A===0&&(Ve.updateMultisampleRenderTarget(U),Ve.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(M,E,B),He.resetDefaultState(),T=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],oe===!0&&de.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Hu(E,B,j,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const xe=$.update(E),Ce=E.material;Ce.visible&&m.push(E,xe,Ce,j,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const xe=$.update(E),Ce=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),se.copy(xe.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Ce)){const Ee=xe.groups;for(let je=0,Xe=Ee.length;je<Xe;je++){const Oe=Ee[je],et=Ce[Oe.materialIndex];et&&et.visible&&m.push(E,xe,et,j,se.z,Oe)}}else Ce.visible&&m.push(E,xe,Ce,j,se.z,null)}}const ce=E.children;for(let xe=0,Ce=ce.length;xe<Ce;xe++)Hu(ce[xe],B,j,W)}function _m(E,B,j,W){const I=E.opaque,ce=E.transmissive,xe=E.transparent;f.setupLightsView(j),oe===!0&&de.setGlobalState(M.clippingPlanes,j),W&&ge.viewport(w.copy(W)),I.length>0&&_l(I,B,j),ce.length>0&&_l(ce,B,j),xe.length>0&&_l(xe,B,j),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ym(E,B,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ms(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?pl:Si,minFilter:ns,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=f.state.transmissionRenderTarget[W.id],xe=W.viewport||w;ce.setSize(xe.z*M.transmissionResolutionScale,xe.w*M.transmissionResolutionScale);const Ce=M.getRenderTarget(),Ee=M.getActiveCubeFace(),je=M.getActiveMipmapLevel();M.setRenderTarget(ce),M.getClearColor(q),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&ee.render(j);const Xe=M.toneMapping;M.toneMapping=Da;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),oe===!0&&de.setGlobalState(M.clippingPlanes,W),_l(E,j,W),Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ht=0,Lt=B.length;ht<Lt;ht++){const Mt=B[ht],xt=Mt.object,Fe=Mt.geometry,Nt=Mt.material,ot=Mt.group;if(Nt.side===Zn&&xt.layers.test(W.layers)){const Tn=Nt.side;Nt.side=Mn,Nt.needsUpdate=!0,Sm(xt,j,W,Fe,Nt,ot),Nt.side=Tn,Nt.needsUpdate=!0,et=!0}}et===!0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce))}M.setRenderTarget(Ce,Ee,je),M.setClearColor(q,Y),Oe!==void 0&&(W.viewport=Oe),M.toneMapping=Xe}function _l(E,B,j){const W=B.isScene===!0?B.overrideMaterial:null;for(let I=0,ce=E.length;I<ce;I++){const xe=E[I],Ce=xe.object,Ee=xe.geometry,je=xe.group;let Xe=xe.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),Ce.layers.test(j.layers)&&Sm(Ce,B,j,Ee,Xe,je)}}function Sm(E,B,j,W,I,ce){E.onBeforeRender(M,B,j,W,I,ce),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(M,B,j,W,E,ce),I.transparent===!0&&I.side===Zn&&I.forceSinglePass===!1?(I.side=Mn,I.needsUpdate=!0,M.renderBufferDirect(j,B,W,I,E,ce),I.side=Ji,I.needsUpdate=!0,M.renderBufferDirect(j,B,W,I,E,ce),I.side=Zn):M.renderBufferDirect(j,B,W,I,E,ce),E.onAfterRender(M,B,j,W,I,ce)}function yl(E,B,j){B.isScene!==!0&&(B=he);const W=_e.get(E),I=f.state.lights,ce=f.state.shadowsArray,xe=I.state.version,Ce=ne.getParameters(E,I.state,ce,B,j),Ee=ne.getProgramCacheKey(Ce);let je=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?N:Tt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",Re),je=new Map,W.programs=je);let Xe=je.get(Ee);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===xe)return bm(E,Ce),Xe}else Ce.uniforms=ne.getUniforms(E),E.onBeforeCompile(Ce,M),Xe=ne.acquireProgram(Ce,Ee),je.set(Ee,Xe),W.uniforms=Ce.uniforms;const Oe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=de.uniform),bm(E,Ce),W.needsLights=SS(E),W.lightsStateVersion=xe,W.needsLights&&(Oe.ambientLightColor.value=I.state.ambient,Oe.lightProbe.value=I.state.probe,Oe.directionalLights.value=I.state.directional,Oe.directionalLightShadows.value=I.state.directionalShadow,Oe.spotLights.value=I.state.spot,Oe.spotLightShadows.value=I.state.spotShadow,Oe.rectAreaLights.value=I.state.rectArea,Oe.ltc_1.value=I.state.rectAreaLTC1,Oe.ltc_2.value=I.state.rectAreaLTC2,Oe.pointLights.value=I.state.point,Oe.pointLightShadows.value=I.state.pointShadow,Oe.hemisphereLights.value=I.state.hemi,Oe.directionalShadowMap.value=I.state.directionalShadowMap,Oe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Oe.spotShadowMap.value=I.state.spotShadowMap,Oe.spotLightMatrix.value=I.state.spotLightMatrix,Oe.spotLightMap.value=I.state.spotLightMap,Oe.pointShadowMap.value=I.state.pointShadowMap,Oe.pointShadowMatrix.value=I.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function Mm(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Dc.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function bm(E,B){const j=_e.get(E);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function _S(E,B,j,W,I){B.isScene!==!0&&(B=he),Ve.resetTextureUnits();const ce=B.fog,xe=W.isMeshStandardMaterial?B.environment:null,Ce=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wr,Ee=(W.isMeshStandardMaterial?N:Tt).get(W.envMap||xe),je=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let Lt=Da;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Mt!==void 0?Mt.length:0,Fe=_e.get(W),Nt=f.state.lights;if(oe===!0&&(Me===!0||E!==_)){const ln=E===_&&W.id===T;de.setState(W,E,ln)}let ot=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nt.state.version||Fe.outputColorSpace!==Ce||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isBatchedMesh&&Fe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Fe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Fe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Fe.instancingMorph===!1&&I.morphTexture!==null||Fe.envMap!==Ee||W.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==de.numPlanes||Fe.numIntersection!==de.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==Xe||Fe.morphTargets!==Oe||Fe.morphNormals!==et||Fe.morphColors!==ht||Fe.toneMapping!==Lt||Fe.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,Fe.__version=W.version);let Tn=Fe.currentProgram;ot===!0&&(Tn=yl(W,B,I));let Ss=!1,An=!1,Gr=!1;const At=Tn.getUniforms(),In=Fe.uniforms;if(ge.useProgram(Tn.program)&&(Ss=!0,An=!0,Gr=!0),W.id!==T&&(T=W.id,An=!0),Ss||_!==E){ge.buffers.depth.getReversed()?(ue.copy(E.projectionMatrix),VA(ue),kA(ue),At.setValue(D,"projectionMatrix",ue)):At.setValue(D,"projectionMatrix",E.projectionMatrix),At.setValue(D,"viewMatrix",E.matrixWorldInverse);const mn=At.map.cameraPosition;mn!==void 0&&mn.setValue(D,qe.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,An=!0,Gr=!0)}if(I.isSkinnedMesh){At.setOptional(D,I,"bindMatrix"),At.setOptional(D,I,"bindMatrixInverse");const ln=I.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),At.setValue(D,"boneTexture",ln.boneTexture,Ve))}I.isBatchedMesh&&(At.setOptional(D,I,"batchingTexture"),At.setValue(D,"batchingTexture",I._matricesTexture,Ve),At.setOptional(D,I,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",I._indirectTexture,Ve),At.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",I._colorsTexture,Ve));const Hn=j.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ve.update(I,j,Tn),(An||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,At.setValue(D,"receiveShadow",I.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(In.envMap.value=Ee,In.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(In.envMapIntensity.value=B.environmentIntensity),An&&(At.setValue(D,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&yS(In,Gr),ce&&W.fog===!0&&Z.refreshFogUniforms(In,ce),Z.refreshMaterialUniforms(In,W,P,k,f.state.transmissionRenderTarget[E.id]),Dc.upload(D,Mm(Fe),In,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Dc.upload(D,Mm(Fe),In,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(D,"center",I.center),At.setValue(D,"modelViewMatrix",I.modelViewMatrix),At.setValue(D,"normalMatrix",I.normalMatrix),At.setValue(D,"modelMatrix",I.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let mn=0,Gu=ln.length;mn<Gu;mn++){const Ha=ln[mn];L.update(Ha,Tn),L.bind(Ha,Tn)}}return Tn}function yS(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function SS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,B,j){const W=_e.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_e.get(E.texture).__webglTexture=B,_e.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const j=_e.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const MS=D.createFramebuffer();this.setRenderTarget=function(E,B=0,j=0){U=E,R=B,A=j;let W=!0,I=null,ce=!1,xe=!1;if(E){const Ee=_e.get(E);if(Ee.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(Ee.__hasExternalTextures)Ve.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(Ee.__boundDepthTexture!==Oe){if(Oe!==null&&_e.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(xe=!0);const Xe=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?I=Xe[B][j]:I=Xe[B],ce=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?I=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?I=Xe[j]:I=Xe,w.copy(E.viewport),H.copy(E.scissor),G=E.scissorTest}else w.copy(Se).multiplyScalar(P).floor(),H.copy(Be).multiplyScalar(P).floor(),G=Pe;if(j!==0&&(I=MS),ge.bindFramebuffer(D.FRAMEBUFFER,I)&&W&&ge.drawBuffers(E,I),ge.viewport(w),ge.scissor(H),ge.setScissorTest(G),ce){const Ee=_e.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,j)}else if(xe){const Ee=_e.get(E.texture),je=B;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,j,je)}else if(E!==null&&j!==0){const Ee=_e.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(E,B,j,W,I,ce,xe,Ce=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){ge.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const je=E.textures[Ce],Xe=je.format,Oe=je.type;if(!Ue.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&j>=0&&j<=E.height-I&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(B,j,W,I,fe.convert(Xe),fe.convert(Oe),ce))}finally{const je=U!==null?_e.get(U).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(E,B,j,W,I,ce,xe,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(B>=0&&B<=E.width-W&&j>=0&&j<=E.height-I){ge.bindFramebuffer(D.FRAMEBUFFER,Ee);const je=E.textures[Ce],Xe=je.format,Oe=je.type;if(!Ue.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(B,j,W,I,fe.convert(Xe),fe.convert(Oe),0);const ht=U!==null?_e.get(U).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,ht);const Lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await GA(D,Lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(et),D.deleteSync(Lt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,j=0){const W=Math.pow(2,-j),I=Math.floor(E.image.width*W),ce=Math.floor(E.image.height*W),xe=B!==null?B.x:0,Ce=B!==null?B.y:0;Ve.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,xe,Ce,I,ce),ge.unbindTexture()};const bS=D.createFramebuffer(),ES=D.createFramebuffer();this.copyTextureToTexture=function(E,B,j=null,W=null,I=0,ce=null){ce===null&&(I!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=I,I=0):ce=0);let xe,Ce,Ee,je,Xe,Oe,et,ht,Lt;const Mt=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(j!==null)xe=j.max.x-j.min.x,Ce=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,je=j.min.x,Xe=j.min.y,Oe=j.isBox3?j.min.z:0;else{const Hn=Math.pow(2,-I);xe=Math.floor(Mt.width*Hn),Ce=Math.floor(Mt.height*Hn),E.isDataArrayTexture?Ee=Mt.depth:E.isData3DTexture?Ee=Math.floor(Mt.depth*Hn):Ee=1,je=0,Xe=0,Oe=0}W!==null?(et=W.x,ht=W.y,Lt=W.z):(et=0,ht=0,Lt=0);const xt=fe.convert(B.format),Fe=fe.convert(B.type);let Nt;B.isData3DTexture?(Ve.setTexture3D(B,0),Nt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),Nt=D.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),Tn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ss=D.getParameter(D.UNPACK_SKIP_PIXELS),An=D.getParameter(D.UNPACK_SKIP_ROWS),Gr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const At=E.isDataArrayTexture||E.isData3DTexture,In=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Hn=_e.get(E),ln=_e.get(B),mn=_e.get(Hn.__renderTarget),Gu=_e.get(ln.__renderTarget);ge.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gu.__webglFramebuffer);for(let Ha=0;Ha<Ee;Ha++)At&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,I,Oe+Ha),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(B).__webglTexture,ce,Lt+Ha)),D.blitFramebuffer(je,Xe,xe,Ce,et,ht,xe,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||E.isRenderTargetTexture||_e.has(E)){const Hn=_e.get(E),ln=_e.get(B);ge.bindFramebuffer(D.READ_FRAMEBUFFER,bS),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,ES);for(let mn=0;mn<Ee;mn++)At?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,I,Oe+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,I),In?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,ce,Lt+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,ce),I!==0?D.blitFramebuffer(je,Xe,xe,Ce,et,ht,xe,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):In?D.copyTexSubImage3D(Nt,ce,et,ht,Lt+mn,je,Xe,xe,Ce):D.copyTexSubImage2D(Nt,ce,et,ht,je,Xe,xe,Ce);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else In?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Nt,ce,et,ht,Lt,xe,Ce,Ee,xt,Fe,Mt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,ce,et,ht,Lt,xe,Ce,Ee,xt,Mt.data):D.texSubImage3D(Nt,ce,et,ht,Lt,xe,Ce,Ee,xt,Fe,Mt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,et,ht,xe,Ce,xt,Fe,Mt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,et,ht,Mt.width,Mt.height,xt,Mt.data):D.texSubImage2D(D.TEXTURE_2D,ce,et,ht,xe,Ce,xt,Fe,Mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ss),D.pixelStorei(D.UNPACK_SKIP_ROWS,An),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gr),ce===0&&B.generateMipmaps&&D.generateMipmap(Nt),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,B,j=null,W=null,I=0){return fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,j,W,I)},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,U=null,ge.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const uN=/^[og]\s*(.+)?/,fN=/^mtllib /,dN=/^usemtl /,hN=/^usemap /,lv=/\s+/,cv=new F,od=new F,uv=new F,fv=new F,Vn=new F,cc=new We;function pN(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const o={index:this.materials.length,name:a||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),a&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const a=i.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const a=this.vertices,s=this.object.geometry.vertices;s.push(a[e+0],a[e+1],a[e+2]),s.push(a[n+0],a[n+1],a[n+2]),s.push(a[i+0],a[i+1],a[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const a=this.normals,s=this.object.geometry.normals;s.push(a[e+0],a[e+1],a[e+2]),s.push(a[n+0],a[n+1],a[n+2]),s.push(a[i+0],a[i+1],a[i+2])},addFaceNormal:function(e,n,i){const a=this.vertices,s=this.object.geometry.normals;cv.fromArray(a,e),od.fromArray(a,n),uv.fromArray(a,i),Vn.subVectors(uv,od),fv.subVectors(cv,od),Vn.cross(fv),Vn.normalize(),s.push(Vn.x,Vn.y,Vn.z),s.push(Vn.x,Vn.y,Vn.z),s.push(Vn.x,Vn.y,Vn.z)},addColor:function(e,n,i){const a=this.colors,s=this.object.geometry.colors;a[e]!==void 0&&s.push(a[e+0],a[e+1],a[e+2]),a[n]!==void 0&&s.push(a[n+0],a[n+1],a[n+2]),a[i]!==void 0&&s.push(a[i+0],a[i+1],a[i+2])},addUV:function(e,n,i){const a=this.uvs,s=this.object.geometry.uvs;s.push(a[e+0],a[e+1]),s.push(a[n+0],a[n+1]),s.push(a[i+0],a[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,a,s,r,o,l,c){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(n,u),p=this.parseVertexIndex(i,u);if(this.addVertex(d,h,p),this.addColor(d,h,p),o!==void 0&&o!==""){const x=this.normals.length;d=this.parseNormalIndex(o,x),h=this.parseNormalIndex(l,x),p=this.parseNormalIndex(c,x),this.addNormal(d,h,p)}else this.addFaceNormal(d,h,p);if(a!==void 0&&a!==""){const x=this.uvs.length;d=this.parseUVIndex(a,x),h=this.parseUVIndex(s,x),p=this.parseUVIndex(r,x),this.addUV(d,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,a=e.length;i<a;i++){const s=this.parseVertexIndex(e[i],n);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,a=this.uvs.length;for(let s=0,r=e.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,r=n.length;s<r;s++)this.addUVLine(this.parseUVIndex(n[s],a))}};return t.startObject("",!1),t}class gS extends Ir{constructor(e){super(e),this.materials=null}load(e,n,i,a){const s=this,r=new sS(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{n(s.parse(o))}catch(l){a?a(l):console.error(l),s.manager.itemError(e)}},i,a)}setMaterials(e){return this.materials=e,this}parse(e){const n=new pN;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let a=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const d=c.split(lv);switch(d[0]){case"v":n.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(cc.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Jt),n.colors.push(cc.r,cc.g,cc.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":n.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(lv),p=[];for(let y=0,m=h.length;y<m;y++){const f=h[y];if(f.length>0){const g=f.split("/");p.push(g)}}const x=p[0];for(let y=1,m=p.length-1;y<m;y++){const f=p[y],g=p[y+1];n.addFace(x[0],f[0],g[0],x[1],f[1],g[1],x[2],f[2],g[2])}}else if(u==="l"){const d=c.substring(1).trim().split(" ");let h=[];const p=[];if(c.indexOf("/")===-1)h=d;else for(let x=0,y=d.length;x<y;x++){const m=d[x].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&p.push(m[1])}n.addLineGeometry(h,p)}else if(u==="p"){const h=c.slice(1).trim().split(" ");n.addPointGeometry(h)}else if((a=uN.exec(c))!==null){const d=(" "+a[0].slice(1).trim()).slice(1);n.startObject(d)}else if(dN.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(fN.test(c))n.materialLibraries.push(c.substring(7).trim());else if(hN.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(a=c.split(" "),a.length>1){const h=a[1].trim().toLowerCase();n.object.smooth=h!=="0"&&h!=="off"}else n.object.smooth=!0;const d=n.object.currentMaterial();d&&(d.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const s=new lo;if(s.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=n.objects.length;o<l;o++){const c=n.objects[o],u=c.geometry,d=c.materials,h=u.type==="Line",p=u.type==="Points";let x=!1;if(u.vertices.length===0)continue;const y=new ei;y.setAttribute("position",new un(u.vertices,3)),u.normals.length>0&&y.setAttribute("normal",new un(u.normals,3)),u.colors.length>0&&(x=!0,y.setAttribute("color",new un(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute("uv",new un(u.uvs,2));const m=[];for(let g=0,S=d.length;g<S;g++){const M=d[g],C=M.name+"_"+M.smooth+"_"+x;let R=n.materials[C];if(this.materials!==null){if(R=this.materials.create(M.name),h&&R&&!(R instanceof wo)){const A=new wo;Mi.prototype.copy.call(A,R),A.color.copy(R.color),R=A}else if(p&&R&&!(R instanceof co)){const A=new co({size:10,sizeAttenuation:!1});Mi.prototype.copy.call(A,R),A.color.copy(R.color),A.map=R.map,R=A}}R===void 0&&(h?R=new wo:p?R=new co({size:1,sizeAttenuation:!1}):R=new iS,R.name=M.name,R.flatShading=!M.smooth,R.vertexColors=x,n.materials[C]=R),m.push(R)}let f;if(m.length>1){for(let g=0,S=d.length;g<S;g++){const M=d[g];y.addGroup(M.groupStart,M.groupCount,g)}h?f=new Wh(y,m):p?f=new Qf(y,m):f=new oi(y,m)}else h?f=new Wh(y,m[0]):p?f=new Qf(y,m[0]):f=new oi(y,m[0]);f.name=c.name,s.add(f)}else if(n.vertices.length>0){const o=new co({size:1,sizeAttenuation:!1}),l=new ei;l.setAttribute("position",new un(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new un(n.colors,3)),o.vertexColors=!0);const c=new Qf(l,o);s.add(c)}return s}}class vS extends Ir{constructor(e){super(e)}load(e,n,i,a){const s=this,r=this.path===""?Aw.extractUrlBase(e):this.path,o=new sS(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{n(s.parse(l,r))}catch(c){a?a(c):console.error(c),s.manager.itemError(e)}},i,a)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,n){const i=e.split(`
`);let a={};const s=/\s+/,r={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let d=u>=0?c.substring(0,u):c;d=d.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),d==="newmtl")a={name:h},r[h]=a;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){const p=h.split(s,3);a[d]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else a[d]=h}const o=new mN(this.resourcePath||n,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(r),o}}class mN{constructor(e="",n={}){this.baseUrl=e,this.options=n,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ji,this.wrap=this.options.wrap!==void 0?this.options.wrap:cu}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const n={};for(const i in e){const a=e[i],s={};n[i]=s;for(const r in a){let o=!0,l=a[r];const c=r.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(s[c]=l)}}return n}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const n in this.materialsInfo)this.materialsArray[e]=this.create(n),this.nameLookup[n]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const n=this,i=this.materialsInfo[e],a={name:e,side:this.side};function s(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function r(o,l){if(a[o])return;const c=n.getTextureParams(l,a),u=n.loadTexture(s(n.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=n.wrap,u.wrapT=n.wrap,(o==="map"||o==="emissiveMap")&&(u.colorSpace=Jt),a[o]=u}for(const o in i){const l=i[o];let c;if(l!=="")switch(o.toLowerCase()){case"kd":a.color=tt.colorSpaceToWorking(new We().fromArray(l),Jt);break;case"ks":a.specular=tt.colorSpaceToWorking(new We().fromArray(l),Jt);break;case"ke":a.emissive=tt.colorSpaceToWorking(new We().fromArray(l),Jt);break;case"map_kd":r("map",l);break;case"map_ks":r("specularMap",l);break;case"map_ke":r("emissiveMap",l);break;case"norm":r("normalMap",l);break;case"map_bump":case"bump":r("bumpMap",l);break;case"disp":r("displacementMap",l);break;case"map_d":r("alphaMap",l),a.transparent=!0;break;case"ns":a.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(a.opacity=c,a.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(a.opacity=1-c,a.transparent=!0);break}}return this.materials[e]=new iS(a),this.materials[e]}getTextureParams(e,n){const i={scale:new it(1,1),offset:new it(0,0)},a=e.split(/\s+/);let s;return s=a.indexOf("-bm"),s>=0&&(n.bumpScale=parseFloat(a[s+1]),a.splice(s,2)),s=a.indexOf("-mm"),s>=0&&(n.displacementBias=parseFloat(a[s+1]),n.displacementScale=parseFloat(a[s+2]),a.splice(s,3)),s=a.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(a[s+1]),parseFloat(a[s+2])),a.splice(s,4)),s=a.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(a[s+1]),parseFloat(a[s+2])),a.splice(s,4)),i.url=a.join(" ").trim(),i}loadTexture(e,n,i,a,s){const r=this.manager!==void 0?this.manager:aS;let o=r.getHandler(e);o===null&&(o=new mm(r)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(e,i,a,s);return n!==void 0&&(l.mapping=n),l}}function xS({model:t,onClose:e}){const n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),s=O.useRef(null),r=O.useRef(null),o=O.useRef(null),l=O.useRef(null),c=O.useRef([]),u=O.useRef({isDragging:!1,isPanning:!1,lastX:0,lastY:0,rotation:{x:0,y:0},pan:{x:0,y:0},zoom:1,initialTouchDistance:0,isPinching:!1,autoRotateSpeed:.005,dampingFactor:.1,autoRotate:!0}),d=O.useRef(5),h=O.useRef({center:new F,size:new F}),[p,x]=O.useState(!1),[y,m]=O.useState(!0),[f,g]=O.useState(null),[S,M]=O.useState(!1),[C,R]=O.useState(0),[A,U]=O.useState(!1),[T,_]=O.useState(0),[w,H]=O.useState({vertices:0,faces:0,materials:0}),[G,q]=O.useState(0),Y=O.useRef({frames:0,lastTime:performance.now()}),[z,k]=O.useState(0),P=3,[K,le]=O.useState(`http://localhost:3001/models/import/${(t==null?void 0:t.id)||""}/`);O.useEffect(()=>{const se=he=>{he.target.matches("input, textarea, button")||(he.key==="Escape"?p?Pe():e():he.key==="r"?(he.preventDefault(),oe()):he.key==="f"?(he.preventDefault(),X()):he.key==="w"?(he.preventDefault(),Me()):he.key==="b"&&(he.preventDefault(),U(Ge=>!Ge)))};return document.addEventListener("keydown",se),()=>document.removeEventListener("keydown",se)},[p,e]),O.useEffect(()=>{const se=()=>x(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",se),()=>document.removeEventListener("fullscreenchange",se)},[]),O.useEffect(()=>{o.current&&o.current.traverse(se=>{se.isMesh&&se.material&&(Array.isArray(se.material)?se.material:[se.material]).forEach(Ge=>{Ge.userData.originalWireframe===void 0&&(Ge.userData.originalWireframe=Ge.wireframe),Ge.wireframe=S,Ge.needsUpdate=!0})})},[S]),O.useEffect(()=>{a.current&&a.current.children.forEach(se=>{se instanceof z0&&(se.visible=A)})},[A]);const Se=O.useCallback(se=>{c.current.forEach(Ae=>se.remove(Ae)),c.current=[];const he=new pu(16777215,1);he.position.set(10,10,10),he.castShadow=!0,he.shadow.mapSize.set(1024,1024);const Ge=new pu(16777215,.5);Ge.position.set(-10,-10,-10);const De=new oS(16777215,.8,100);De.position.set(0,0,10);const D=new cS(16777215,.6);[he,Ge,De,D].forEach(Ae=>{se.add(Ae),c.current.push(Ae)})},[]);O.useEffect(()=>{const he=setInterval(()=>{Y.current.frames++;const Ge=performance.now();Ge-Y.current.lastTime>=1e3&&(q(Y.current.frames),Y.current.frames=0,Y.current.lastTime=Ge)},16);return()=>clearInterval(he)},[]),O.useEffect(()=>{if(!n.current||!t)return;console.log("ModelPreview - Model data:",t);const se=new tS;se.background=new We(16316922),se.fog=new hm(16316922,50,200),a.current=se;const he=p?window.innerWidth:n.current.clientWidth,Ge=p?window.innerHeight:n.current.clientHeight,De=new Sn(45,he/Ge,.1,1e3);r.current=De;const D=new mS({antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"mediump"});D.setSize(he,Ge),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.shadowMap.enabled=!0,D.shadowMap.type=nm,D.outputEncoding=void 0,D.toneMapping=Oy,D.toneMappingExposure=1,s.current=D,n.current.appendChild(D.domElement),console.log("WebGL Capabilities:",{version:D.getContext().getParameter(D.getContext().VERSION),maxTextureSize:D.getContext().getParameter(D.getContext().MAX_TEXTURE_SIZE),renderer:D.info.render}),Se(se),(async()=>{var Q;try{if(m(!0),g(null),_(0),u.current.rotation={x:0,y:0},u.current.pan={x:0,y:0},u.current.zoom=1,u.current.autoRotate=!0,!K||!t.objFilename||!t.mtlFilename)throw new Error("Missing model file URLs or filenames");console.log("Base folder:",K);const re=setInterval(()=>{_(ze=>Math.min(ze+10,90))},100),de=new vS;de.setPath(K),de.setResourcePath(K);const Te=`${K}${t.mtlFilename}`;console.log("Attempting to load MTL:",Te);let ee;try{ee=await de.loadAsync(t.mtlFilename,rt=>{console.log(`MTL loading: ${(rt.loaded/rt.total*100).toFixed(2)}%`),_(rt.loaded/rt.total*50)});const ze=new mm;for(const rt of Object.values(ee.materials)){if((Q=rt.map)!=null&&Q.sourceFile){const nn=`${K}${rt.map.sourceFile}`;console.log("Loading texture:",nn);try{const Bn=await ze.loadAsync(nn);Bn.flipY=!1,Bn.encoding=void 0,rt.map=Bn,rt.needsUpdate=!0}catch(Bn){console.warn("Texture load failed:",nn,Bn),rt.map=null,rt.needsUpdate=!0}}rt.roughness=rt.roughness??.8,rt.metalness=rt.metalness??.2,rt.side=Zn,rt.needsUpdate=!0}ee.preload(),console.log("MTL materials loaded:",ee)}catch(ze){console.warn("MTL loading failed, using fallback material:",ze),ee=null}const ve=new gS;ee&&ve.setMaterials(ee),ve.setPath(K);const Le=`${K}${t.objFilename}`;console.log("Attempting to load OBJ:",Le);const Ne=await ve.loadAsync(t.objFilename,ze=>{console.log(`OBJ loading: ${(ze.loaded/ze.total*100).toFixed(2)}%`),_(50+ze.loaded/ze.total*50)});clearInterval(re),_(100);let fe=0,He=0,L=0,pe=!1;if(Ne.traverse(ze=>{var rt;if(ze.isMesh&&((rt=ze.geometry)!=null&&rt.attributes.position)){fe+=ze.geometry.attributes.position.count,He+=ze.geometry.index?ze.geometry.index.count/3:ze.geometry.attributes.position.count/3,pe=!0;const nn=Array.isArray(ze.material)?ze.material:[ze.material];L+=nn.length,nn.forEach(Bn=>{Bn.wireframe=S,Bn.side=Zn,Bn.needsUpdate=!0}),ze.castShadow=!0,ze.receiveShadow=!0}}),!pe)throw new Error("No valid geometry found in model");H({vertices:fe,faces:He,materials:L});const ie=new Ba().setFromObject(Ne),be=ie.getCenter(new F),ae=ie.getSize(new F);h.current.center=be,h.current.size=ae,Ne.position.sub(be);const J=Math.max(ae.x,ae.y,ae.z,1e-4),ke=Math.min(6/J,10);Ne.scale.setScalar(ke),Ne.position.set(2,2,0),console.log("Model bounds:",{center:be,size:ae,scale:ke,maxDim:J}),d.current=Math.max(J*1.5,5),De.position.set(3,J+2,d.current),De.lookAt(2,2,0),De.far=J*100,De.updateProjectionMatrix();const dt=new z0(Ne,16711680);dt.visible=A,se.add(dt),o.current=Ne,se.add(Ne),m(!1),k(0)}catch(re){console.error("Model loading error:",re),g(re.message||`Failed to load model from ${K}${t.objFilename}`),m(!1),z<P&&setTimeout(()=>{k(de=>de+1),R(de=>de+1)},2e3)}})();const Ae=D.domElement;Ae.style.cursor="grab",Ae.style.touchAction="none";let Ue={x:0,y:0},ge=performance.now();const we=Q=>{Q.preventDefault(),u.current.isDragging=!0,u.current.isPanning=Q.shiftKey||Q.button===1,u.current.lastX=Q.clientX,u.current.lastY=Q.clientY,u.current.autoRotate=!1,Ae.style.cursor=u.current.isPanning?"move":"grabbing",Ue={x:0,y:0}},_e=Q=>{if(!u.current.isDragging||!o.current)return;const re=Q.clientX-u.current.lastX,de=Q.clientY-u.current.lastY,Te=performance.now(),ee=Te-ge;ee>0&&(Ue.x=re/ee,Ue.y=de/ee);const ve=.008,Le=.005;u.current.isPanning?(u.current.pan.x+=re*Le*(d.current/5),u.current.pan.y-=de*Le*(d.current/5)):(u.current.rotation.y+=re*ve,u.current.rotation.x+=de*ve,u.current.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,u.current.rotation.x))),u.current.lastX=Q.clientX,u.current.lastY=Q.clientY,ge=Te},Ve=()=>{u.current.isDragging=!1,u.current.isPanning=!1,Ae.style.cursor="grab"},Tt=Q=>{Q.preventDefault();const re=.1,de=Q.deltaY>0?-re:re;u.current.zoom=Math.max(.1,Math.min(10,u.current.zoom+de))},N=Q=>{Q.preventDefault(),u.current.autoRotate=!1,Q.touches.length===1?(u.current.isDragging=!0,u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY,u.current.isPinching=!1):Q.touches.length===2&&(u.current.isPinching=!0,u.current.isDragging=!1,u.current.initialTouchDistance=Math.hypot(Q.touches[0].clientX-Q.touches[1].clientX,Q.touches[0].clientY-Q.touches[1].clientY))},b=Q=>{if(Q.preventDefault(),u.current.isDragging&&Q.touches.length===1){const re=Q.touches[0].clientX-u.current.lastX,de=Q.touches[0].clientY-u.current.lastY,Te=.008;u.current.rotation.y+=re*Te,u.current.rotation.x+=de*Te,u.current.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,u.current.rotation.x)),u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY}else if(u.current.isPinching&&Q.touches.length===2){const re=Math.hypot(Q.touches[0].clientX-Q.touches[1].clientX,Q.touches[0].clientY-Q.touches[1].clientY),de=(re-u.current.initialTouchDistance)*.003;u.current.zoom=Math.max(.1,Math.min(10,u.current.zoom+de)),u.current.initialTouchDistance=re}},V=Q=>{Q.preventDefault(),Q.touches.length===0?(u.current.isDragging=!1,u.current.isPinching=!1):Q.touches.length===1&&(u.current.isPinching=!1,u.current.isDragging=!0,u.current.lastX=Q.touches[0].clientX,u.current.lastY=Q.touches[0].clientY)},$=Q=>Q.preventDefault();Ae.addEventListener("mousedown",we),Ae.addEventListener("mousemove",_e),Ae.addEventListener("mouseup",Ve),Ae.addEventListener("wheel",Tt,{passive:!1}),Ae.addEventListener("touchstart",N,{passive:!1}),Ae.addEventListener("touchmove",b,{passive:!1}),Ae.addEventListener("touchend",V,{passive:!1}),Ae.addEventListener("contextmenu",$);const ne=()=>{if(l.current=requestAnimationFrame(ne),o.current){u.current.autoRotate&&!u.current.isDragging&&!u.current.isPinching?(u.current.rotation.y+=u.current.autoRotateSpeed,u.current.rotation.x*=.98,o.current.rotation.set(0,u.current.rotation.y,0)):(o.current.rotation.x=u.current.rotation.x,o.current.rotation.y=u.current.rotation.y);const Q=new F(u.current.pan.x,u.current.pan.y,d.current/u.current.zoom);De.position.lerp(Q,u.current.dampingFactor),De.lookAt(2,2,0),D.render(se,De)}};ne();const Z=()=>{if(!n.current||!s.current||!r.current)return;const Q=p?window.innerWidth:n.current.clientWidth,re=p?window.innerHeight:n.current.clientHeight;De.aspect=Q/re,De.updateProjectionMatrix(),D.setSize(Q,re),D.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",Z),()=>{window.removeEventListener("resize",Z),Ae.removeEventListener("mousedown",we),Ae.removeEventListener("mousemove",_e),Ae.removeEventListener("mouseup",Ve),Ae.removeEventListener("wheel",Tt),Ae.removeEventListener("touchstart",N),Ae.removeEventListener("touchmove",b),Ae.removeEventListener("touchend",V),Ae.removeEventListener("contextmenu",$),l.current&&cancelAnimationFrame(l.current),n.current&&D.domElement&&n.current.removeChild(D.domElement),se.traverse(Q=>{Q.geometry&&Q.geometry.dispose(),Q.material&&(Array.isArray(Q.material)?Q.material.forEach(re=>re.dispose()):Q.material.dispose())}),D.dispose()}},[t,p,C,A,Se]);const Be=()=>{var se,he;return(he=(se=i.current)==null?void 0:se.requestFullscreen)==null?void 0:he.call(se)},Pe=()=>{var se;return(se=document.exitFullscreen)==null?void 0:se.call(document)},X=O.useCallback(()=>p?Pe():Be(),[p]),oe=O.useCallback(()=>{u.current.rotation={x:0,y:0},u.current.pan={x:0,y:0},u.current.zoom=1},[]),Me=O.useCallback(()=>M(se=>!se),[]),ue=O.useCallback(()=>{u.current.zoom=Math.min(10,u.current.zoom+.3)},[]),ye=O.useCallback(()=>{u.current.zoom=Math.max(.1,u.current.zoom-.3)},[]),qe=O.useCallback(()=>{oe(),M(!1),U(!1),m(!0),g(null),k(0),R(se=>se+1),u.current.autoRotate=!0},[oe]);return!t||!t.fileUrl||!t.objFilename?v.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4",children:v.jsxs("div",{className:"bg-white rounded-xl p-3 sm:p-6 text-center max-w-sm",children:[v.jsx("div",{className:"text-red-500 text-2xl sm:text-3xl mb-3",children:"⚠️"}),v.jsx("h3",{className:"text-base sm:text-lg font-bold mb-2",children:"Invalid Model Data"}),v.jsx("p",{className:"text-gray-600 text-sm sm:text-base mb-3",children:"Required model files are missing"}),v.jsx("button",{onClick:e,className:"px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm",children:"Close"})]})}):v.jsx("div",{ref:i,className:`fixed inset-0 z-50 ${p?"bg-black":"bg-black/80 flex items-center justify-center p-1 sm:p-2"}`,children:v.jsxs("div",{className:`${p?"w-full h-full":"relative bg-white shadow-2xl w-full max-w-7xl h-[85vh] sm:h-[90vh] rounded-xl overflow-hidden"}`,children:[v.jsx("div",{className:`${p?"absolute top-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm":"bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl border-b"} p-2 sm:p-4`,children:v.jsxs("div",{className:"flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0",children:[v.jsxs("div",{className:"flex items-center justify-center sm:justify-start w-full sm:w-auto",children:[v.jsx("h3",{className:`text-base sm:text-lg font-bold truncate max-w-[80%] ${p?"text-white":"text-gray-800"}`,children:t.name||"Untitled Model"}),v.jsx("div",{className:`text-xs sm:text-sm ${p?"text-gray-300":"text-gray-600"} hidden md:block ml-2 sm:ml-4`,children:w.vertices>0&&v.jsxs("span",{children:[w.vertices.toLocaleString()," vertices • ",w.faces.toLocaleString()," faces • ",w.materials," materials • ",G," FPS"]})})]}),v.jsxs("div",{className:"flex items-center justify-center sm:justify-end flex-wrap gap-1 sm:gap-2",children:[v.jsx("button",{onClick:qe,title:"Reload Model",className:"p-1.5 sm:p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all text-xs sm:text-sm",children:v.jsx(Ny,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:Me,title:`Wireframe ${S?"ON":"OFF"} (W)`,className:`p-1.5 sm:p-2 rounded-lg transition-all ${S?"bg-blue-500 text-white shadow-lg hover:bg-blue-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"} text-xs sm:text-sm`,children:v.jsx(RT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:ue,title:"Zoom In (+)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(WT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:ye,title:"Zoom Out (-)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(YT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:oe,title:"Reset View (R)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:v.jsx(AT,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:()=>U(se=>!se),title:`Bounding Box ${A?"ON":"OFF"} (B)`,className:`p-1.5 sm:p-2 rounded-lg transition-all ${A?"bg-blue-500 text-white shadow-lg hover:bg-blue-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"} text-xs sm:text-sm`,children:A?v.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):v.jsxs("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),v.jsx("button",{onClick:X,title:p?"Exit Fullscreen (F)":"Enter Fullscreen (F)",className:"p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm",children:p?v.jsx(ET,{size:16,className:"sm:w-5 sm:h-5"}):v.jsx(Cy,{size:16,className:"sm:w-5 sm:h-5"})}),v.jsx("button",{onClick:e,title:"Close (Esc)",className:"p-1.5 sm:p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all text-xs sm:text-sm",children:v.jsx(em,{size:16,className:"sm:w-5 sm:h-5"})})]})]})}),v.jsxs("div",{className:`relative ${p?"w-full h-full":"w-full h-[calc(100%-56px)] sm:h-[calc(100%-80px)] rounded-xl overflow-hidden"}`,children:[y&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 z-20",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mb-3 sm:mb-4"}),v.jsxs("p",{className:"text-gray-600 text-sm sm:text-base",children:["Loading 3D model... ",Math.round(T),"%"]}),v.jsxs("p",{className:"text-gray-500 text-xs sm:text-sm mt-2",children:[K,t.objFilename]}),z>0&&v.jsxs("p",{className:"text-yellow-600 text-xs sm:text-sm mt-2",children:["Retry attempt ",z," of ",P]})]})}),f&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 z-20",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-red-500 text-2xl sm:text-3xl mb-3 sm:mb-4",children:"⚠️"}),v.jsx("p",{className:"text-red-600 text-sm sm:text-base mb-2",children:"Error loading model"}),v.jsx("p",{className:"text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4",children:f}),v.jsx("button",{onClick:qe,className:"px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm",children:"Retry"})]})}),v.jsx("div",{ref:n,className:"w-full h-full bg-[#f8f9fa]"})," ",v.jsxs("div",{className:"absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white p-1 sm:p-2 rounded-lg text-xs sm:text-sm hidden md:block",children:[v.jsx("p",{children:"• Drag to rotate (stops auto-rotation)"}),v.jsx("p",{children:"• Shift + Drag or Middle Click to pan"}),v.jsx("p",{children:"• Scroll or pinch to zoom"}),v.jsx("p",{children:"• R: Reset | W: Wireframe | F: Fullscreen"}),v.jsx("p",{children:"• B: Bounding Box"})]})]})]})})}function gN({generated3DModel:t,onNewModel:e,onDownload:n,processingTime:i,modelStats:a,isLibraryView:s=!1}){const r=O.useRef(null),o=O.useRef(null),l=O.useRef(null),c=O.useRef(null),u=O.useRef(null),d=O.useRef(null),[h,p]=O.useState(!0),[x,y]=O.useState(null),[m,f]=O.useState(!0),[g,S]=O.useState(!1);let M=1;const C=_=>!_||!_.id||!_.processor?null:`http://localhost:3001/models/${_.processor}/${_.id}`,R=_=>{var G,q;let w=null,H=null;return _.objFiles&&_.objFiles.length>0?(w=((G=_.objFiles.find(Y=>Y.filename.endsWith(".obj")))==null?void 0:G.filename)||`${_.name}.obj`,H=((q=_.objFiles.find(Y=>Y.filename.endsWith(".mtl")))==null?void 0:q.filename)||`${_.name}.mtl`):_.processor==="open3d"||_.processor==="meshroom"?(w="texturedMesh.obj",H="texturedMesh.mtl"):(w=_.fileName||`${_.name}.obj`,H=`${_.name}.mtl`),{objFilename:w,mtlFilename:H}},A=async()=>{try{const _=t.id,w=await fetch(`http://localhost:3001/api/models/${_}/download-all`,{method:"GET",headers:{Accept:"application/zip"}});if(!w.ok){const Y=await w.text();throw new Error(`Failed to download ZIP: ${w.status} ${w.statusText}. ${Y}`)}const H=await w.blob(),G=window.URL.createObjectURL(H),q=document.createElement("a");q.href=G,q.download=`${t.name||_}.zip`,document.body.appendChild(q),q.click(),document.body.removeChild(q),window.URL.revokeObjectURL(G),console.log("Download initiated for model:",_),n&&n()}catch(_){console.error("Download error:",_),alert(`Failed to download the model: ${_.message}`)}},U=()=>{const _=C(t);if(!_){console.error("Cannot generate base URL for model:",t),alert("Unable to open preview - model URL not available");return}const{objFilename:w,mtlFilename:H}=R(t),G={...t,fileUrl:_,objFilename:w,mtlFilename:H,name:t.name||"Untitled Model",id:t.id,processor:t.processor||"import"};console.log("Preview model data:",G),console.log("OBJ URL:",`${_}/${w}`),console.log("MTL URL:",`${_}/${H}`),S(!0)};if(O.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),O.useEffect(()=>{if(!r.current||!t)return;const _=new tS;_.background=new We(16316922),o.current=_;const w=r.current.clientWidth,H=r.current.clientHeight,G=new Sn(50,w/H,.1,1e5);c.current=G;const q=new mS({antialias:!0,alpha:!0});q.setSize(w,H),q.domElement.style.pointerEvents="auto",q.shadowMap.enabled=!0,q.shadowMap.type=nm,l.current=q,r.current.appendChild(q.domElement);const Y=q.getContext();console.log("WebGL Capabilities:",{version:Y.getParameter(Y.VERSION),maxTextureSize:Y.getParameter(Y.MAX_TEXTURE_SIZE),renderer:q.info.render});const z=new cS(16777215,.6);_.add(z);const k=new pu(16777215,1);k.position.set(10,10,10),k.castShadow=!0,_.add(k);const P=new pu(16777215,.5);P.position.set(-10,-10,-10),_.add(P);const K=new oS(16777215,.8,100);K.position.set(0,0,10),_.add(K),(async()=>{try{p(!0),y(null);const Pe=t.fileUrl||C(t);if(!Pe)throw new Error("No model folder available");console.log("Base folder:",Pe);const{objFilename:X,mtlFilename:oe}=R(t),Me=new vS;Me.setPath(Pe+"/"),Me.setResourcePath(Pe+"/");const ue=`${Pe}/${oe}`;console.log("Attempting to load MTL:",ue);let ye;try{ye=await new Promise((ge,we)=>{Me.load(oe,ge,_e=>console.log(`MTL loading: ${(_e.loaded/_e.total*100).toFixed(2)}%`),_e=>we(new Error(`MTL load failed: ${_e.message} for URL: ${ue}`)))});const Ue=new mm;for(const ge of Object.values(ye.materials))if(ge.map){const we=Pe+"/"+ge.map.sourceFile;console.log("Loading texture:",we);try{const _e=await Ue.loadAsync(we);_e.flipY=!1,ge.map=_e,ge.needsUpdate=!0,console.log("Texture loaded:",we)}catch(_e){console.warn("Texture load failed:",we,_e),ge.map=null,ge.needsUpdate=!0}}ye.preload(),console.log("MTL materials loaded:",ye)}catch(Ue){console.warn("MTL loading failed, using fallback material:",Ue),ye=null}const qe=new gS;ye&&qe.setMaterials(ye),qe.setPath(Pe+"/");const se=`${Pe}/${X}`;console.log("Attempting to load OBJ:",se);const he=await new Promise((Ue,ge)=>{qe.load(X,Ue,we=>console.log(`OBJ loading: ${(we.loaded/we.total*100).toFixed(2)}%`),we=>ge(new Error(`OBJ load failed: ${we.message} for URL: ${se}`)))});let Ge=!1;if(he.traverse(Ue=>{Ue.isMesh&&Ue.geometry&&Ue.geometry.attributes.position&&(console.log("Mesh geometry:",{vertices:Ue.geometry.attributes.position.count,faces:Ue.geometry.index?Ue.geometry.index.count/3:0}),Ge=!0)}),!Ge)throw new Error("No valid geometry found in model");const De=new Ba().setFromObject(he),D=De.getCenter(new F),St=De.getSize(new F);he.position.sub(D),M=Math.max(St.x,St.y,St.z,1e-4);const Ae=Math.min(3/M,10);he.scale.setScalar(Ae),he.position.x+=M*.75,he.position.y+=M*.75,console.log("Model bounds:",{center:D,size:St,scale:Ae,newPosition:he.position}),he.traverse(Ue=>{Ue.isMesh&&((!Ue.material||Ue.material.length===0)&&(Ue.material=new xw({color:13421772,side:Zn}),console.warn("Applied fallback material to mesh:",Ue)),Ue.castShadow=!0,Ue.receiveShadow=!0)}),G.position.set(M*.8,M*.8,M*.8),G.far=M*1e3,G.lookAt(he.position),G.updateProjectionMatrix(),u.current=he,_.add(he),p(!1)}catch(Pe){console.error("Model loading error:",Pe),y(Pe.message||"Failed to load model"),p(!1)}})();const Se=()=>{d.current=requestAnimationFrame(Se),u.current&&m&&(u.current.rotation.y+=.005),q.render(_,G)};Se();const Be=()=>{if(!r.current)return;const Pe=r.current.clientWidth,X=r.current.clientHeight;G.aspect=Pe/X,G.updateProjectionMatrix(),q.setSize(Pe,X)};return window.addEventListener("resize",Be),()=>{window.removeEventListener("resize",Be),d.current&&cancelAnimationFrame(d.current),r.current&&q.domElement&&r.current.removeChild(q.domElement),q.dispose()}},[t,m]),!t)return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsx("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:v.jsxs("div",{className:"p-16 text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(rh,{className:"w-8 h-8 text-gray-400"})}),v.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Model Generated"}),v.jsx("p",{className:"text-gray-500 mb-6",children:"No model data available. Please generate a model first."}),v.jsx("button",{onClick:e,className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium",children:"Start Creating"})]})})});const T=(()=>{const _=C(t);if(!_)return null;const{objFilename:w,mtlFilename:H}=R(t);return{...t,fileUrl:_,objFilename:w,mtlFilename:H,name:t.name||"Untitled Model",id:t.id,processor:t.processor||"import"}})();return v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[v.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:v.jsx(Jp,{className:"w-5 h-5 text-green-600"})}),v.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:s?"Model Preview":"3D Model Ready"})]}),v.jsxs("p",{className:"hidden sm:block text-gray-600",children:[s?"Previewing":"Your 3D model",' "',t.name,'"',s?"":" is ready for preview"]})]}),!s&&v.jsxs("button",{onClick:e,className:"hidden sm:flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium w-fit",children:[v.jsx(zu,{className:"w-5 h-5"}),v.jsx("span",{children:"Generate New Model"})]})]})}),v.jsxs("div",{className:"p-8",children:[v.jsx("div",{className:"mb-8",children:v.jsxs("div",{className:"relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden h-[300px] sm:h-[400px]",children:[v.jsx("div",{ref:r,className:"w-full h-full"}),h&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"}),v.jsx("p",{className:"text-gray-600",children:"Loading 3D model..."})]})}),x&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(rh,{className:"w-8 h-8 text-red-500"})}),v.jsx("p",{className:"text-red-600 font-medium mb-2",children:"Failed to load model"}),v.jsx("p",{className:"text-gray-500 text-sm",children:x}),v.jsxs("button",{onClick:()=>{y(null),p(!0)},className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:[v.jsx(Ny,{className:"w-4 h-4 mr-2 inline"})," Reload"]})]})}),v.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-4",children:[v.jsx("button",{onClick:()=>f(!m),className:`p-2 rounded-full transition shadow-lg ${m?"bg-blue-600 text-white hover:bg-blue-700":"bg-white text-gray-600 hover:bg-gray-100"}`,children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),v.jsx("button",{onClick:A,className:"p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-lg",title:"Download Model",children:v.jsx(wy,{className:"w-5 h-5"})})]}),v.jsx("button",{onClick:U,className:"absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition",title:"View Fullscreen",children:v.jsx(Cy,{className:"w-5 h-5"})})]})}),i&&v.jsx("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:v.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600",children:[v.jsx(Ay,{className:"w-4 h-4"}),v.jsxs("span",{children:["Processing time: ",i,"s"]}),a&&v.jsxs(v.Fragment,{children:[v.jsx("span",{children:"•"}),v.jsxs("span",{children:["Vertices: ",a.vertices]}),v.jsx("span",{children:"•"}),v.jsxs("span",{children:["Faces: ",a.faces]})]})]})})]})]}),g&&T&&v.jsx(xS,{model:T,onClose:()=>S(!1)})]})}function vN({savedModels:t,setSavedModels:e}){const[n,i]=O.useState(""),[a,s]=O.useState("all"),[r,o]=O.useState("newest"),[l,c]=O.useState([]),[u,d]=O.useState(null),[h,p]=O.useState(!1),[x,y]=O.useState(new Set),m=_=>!_||!_.id||!_.processor?null:`http://localhost:3001/models/${_.processor}/${_.id}`,f=_=>{var G,q;let w=null,H=null;return _.objFiles&&_.objFiles.length>0?(w=((G=_.objFiles.find(Y=>Y.filename.endsWith(".obj")))==null?void 0:G.filename)||`${_.name}.obj`,H=((q=_.objFiles.find(Y=>Y.filename.endsWith(".mtl")))==null?void 0:q.filename)||`${_.name}.mtl`):_.processor==="open3d"||_.processor==="meshroom"?(w="texturedMesh.obj",H="texturedMesh.mtl"):(w=_.fileName||`${_.name}.obj`,H=`${_.name}.mtl`),{objFilename:w,mtlFilename:H}},g=t.filter(_=>_.name.toLowerCase().includes(n.toLowerCase())&&(a==="all"||_.processor===a)).sort((_,w)=>r==="newest"?new Date(w.createdAt)-new Date(_.createdAt):r==="oldest"?new Date(_.createdAt)-new Date(w.createdAt):_.name.localeCompare(w.name)),S=_=>{switch(_){case"meshroom":return"bg-blue-100 text-blue-800";case"open3d":return"bg-green-100 text-green-800";case"import":return"bg-purple-100 text-purple-800";default:return"bg-gray-100 text-gray-800"}},M=async _=>{try{const w=_.id;y(z=>new Set([...z,w])),console.log("Attempting download for model ID:",w,"Model data:",_);const H=await fetch(`http://localhost:3001/api/models/${w}/download-all`,{method:"GET",headers:{Accept:"application/zip"}});if(!H.ok)throw new Error(`Download failed: ${H.status} ${H.statusText}`);const G=await H.blob(),q=window.URL.createObjectURL(G),Y=document.createElement("a");Y.href=q,Y.download=`${_.name||w}.zip`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),window.URL.revokeObjectURL(q),console.log("Download completed for model:",w)}catch(w){console.error("Download error:",w),alert(`Failed to download the model: ${w.message}`)}finally{y(w=>{const H=new Set(w);return H.delete(_.id),H})}},C=async()=>{const _=g.filter(w=>l.includes(w.id));if(_.length===0){alert("No models selected for download");return}if(_.length===1){await M(_[0]);return}for(const w of _)await M(w),await new Promise(H=>setTimeout(H,500))},R=async _=>{try{for(const w of _)await fetch(`http://localhost:3001/api/models/${w}`,{method:"DELETE"});e(w=>w.filter(H=>!_.includes(H.id))),c([])}catch(w){console.error("Error deleting models:",w),alert("Failed to delete some models. Please try again.")}},A=_=>c(w=>w.includes(_)?w.filter(H=>H!==_):[...w,_]),U=()=>{l.length===g.length?c([]):c(g.map(_=>_.id))},T=_=>{const w=m(_);if(!w){console.error("Cannot generate base URL for model:",_);return}const{objFilename:H,mtlFilename:G}=f(_),q={..._,fileUrl:w,objFilename:H,mtlFilename:G,name:_.name||"Untitled Model",id:_.id,processor:_.processor||"import"};console.log("Preview model data:",q),console.log("OBJ URL:",`${w}/${H}`),console.log("MTL URL:",`${w}/${G}`),d(q),p(!0)};return v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Model Library"}),v.jsx("p",{className:"text-gray-600",children:"Browse, preview and manage your saved 3D models"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600",children:"Library View"})]})})]})}),v.jsxs("div",{className:"px-8 pt-6",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",children:[v.jsxs("div",{className:"relative flex-1",children:[v.jsx(LT,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),v.jsx("input",{type:"text",placeholder:"Search models...",value:n,onChange:_=>i(_.target.value),className:"w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-indigo-500"})]}),v.jsxs("div",{className:"flex flex-wrap gap-2",children:[v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:a,onChange:_=>s(_.target.value),children:[v.jsx("option",{value:"all",children:"All Processors"}),v.jsx("option",{value:"meshroom",children:"Meshroom"}),v.jsx("option",{value:"open3d",children:"Open3D"}),v.jsx("option",{value:"import",children:"Import"})]}),v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:r,onChange:_=>o(_.target.value),children:[v.jsx("option",{value:"newest",children:"Newest First"}),v.jsx("option",{value:"oldest",children:"Oldest First"}),v.jsx("option",{value:"name",children:"Name (A-Z)"})]})]})]}),l.length>0&&v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsxs("button",{onClick:U,className:"flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:[v.jsx("input",{type:"checkbox",checked:l.length===g.length&&g.length>0,onChange:U,className:"w-4 h-4"}),v.jsxs("span",{children:["Select All (",g.length,")"]})]}),v.jsxs("span",{className:"text-sm text-gray-600",children:[l.length," of ",g.length," selected"]})]}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsxs("button",{onClick:C,disabled:l.length===0,className:"flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed",children:[v.jsx(t0,{className:"w-4 h-4"}),v.jsxs("span",{children:["Download Selected (",l.length,")"]})]}),v.jsxs("button",{onClick:()=>R(l),className:"flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition",children:[v.jsx(Tc,{className:"w-4 h-4"}),v.jsxs("span",{children:["Delete Selected (",l.length,")"]})]})]})]}),g.length===0?v.jsxs("div",{className:"text-center py-16",children:[v.jsx(Ry,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),v.jsx("p",{className:"text-gray-600",children:n||a!=="all"?"No models match your search":"No models found"})]}):v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8",children:g.map(_=>v.jsxs("div",{className:`rounded-xl p-4 border transition-all ${l.includes(_.id)?"bg-blue-50 border-blue-300 shadow-md":"bg-gray-50 border-gray-200 hover:shadow-md"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"checkbox",checked:l.includes(_.id),onChange:()=>A(_.id),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),v.jsx("h3",{className:"font-semibold truncate text-gray-900",children:_.name})]}),v.jsx("span",{className:`text-xs px-2 py-1 rounded font-medium ${S(_.processor)}`,children:_.processor})]}),v.jsxs("div",{className:"text-gray-500 text-xs mb-4",children:["Created: ",new Date(_.createdAt).toLocaleDateString()]}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsx("button",{onClick:()=>M(_),disabled:x.has(_.id),className:"flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed",children:x.has(_.id)?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),v.jsx("span",{children:"Downloading..."})]}):v.jsxs(v.Fragment,{children:[v.jsx(t0,{className:"w-4 h-4"}),v.jsx("span",{children:"Download ZIP"})]})}),v.jsxs("button",{onClick:()=>T(_),className:"flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition",children:[v.jsx(pT,{className:"w-4 h-4"}),v.jsx("span",{children:"Preview"})]})]})]},_.id))})]})]}),h&&u&&v.jsx(xS,{model:u,onClose:()=>{p(!1),d(null)}})]})}function xN(){const[t,e]=O.useState("images"),[n,i]=O.useState([]),[a,s]=O.useState({}),[r,o]=O.useState(""),[l,c]=O.useState("meshroom"),[u,d]=O.useState(!1),[h,p]=O.useState(0),[x,y]=O.useState(null),[m,f]=O.useState([]),[g,S]=O.useState(!1),[M,C]=O.useState(null),[R,A]=O.useState("generate"),[U,T]=O.useState(!1),_=["Analyzing image quality...","Detecting features...","Computing depth maps...","Reconstructing point cloud...","Generating mesh...","Applying textures...","Optimizing model...","Finalizing export..."],w=async()=>{if(g)try{const P=await fetch("http://localhost:3001/api/models");if(P.ok){const K=await P.json();f(K),console.log("Fetched models:",K)}else console.error("Failed to fetch models, status:",P.status)}catch(P){console.error("Failed to fetch models:",P)}};O.useEffect(()=>{fetch("http://localhost:3001/api/health").then(P=>{S(P.ok),console.log("Backend health check:",P.ok?"Up":"Down")}).catch(()=>{S(!1),console.log("Backend health check failed")})},[]),O.useEffect(()=>{g&&w()},[g]);const H=()=>{if(!(t==="images"&&n.length>=2||t==="import"&&a.obj)){C(t==="images"?"Upload at least 2 images":"Upload at least one .obj file (MTL is optional)");return}T(!0)},G=async()=>{var P,K,le,Se,Be,Pe;if(!g)return C("Backend unavailable");d(!0),C(null),p(0);try{const X=new FormData;if(console.log("Preparing FormData:",{uploadType:t,modelName:r,processor:l,selectedImagesLength:n.length,selectedObjFiles:a}),t==="images"){if(n.length<2)throw new Error("At least 2 images are required");n.forEach((we,_e)=>{X.append(`images[${_e}]`,we.file,we.name)}),X.append("processor",l)}else{if(!a.obj)throw new Error("Please select an .obj file");X.append("obj",a.obj.file,a.obj.name),a.mtl&&X.append("mtl",a.mtl.file,a.mtl.name),X.append("processor","import")}r.trim()&&X.append("modelName",r.trim());const oe={};X.forEach((we,_e)=>{oe[_e]=we instanceof File?we.name:we}),console.log("FormData sent:",oe);const Me=await fetch("http://localhost:3001/api/upload",{method:"POST",body:X});if(!Me.ok){const we=await Me.text();throw new Error(`Upload failed: ${Me.status} - ${we}`)}const{modelId:ue}=await Me.json();console.log("Model uploaded, ID:",ue);let ye="processing",qe=0;if(t==="images")for(;ye==="processing"||ye==="queued";){p(Math.min(qe,_.length-1)),await new Promise(Tt=>setTimeout(Tt,2e3));const we=await fetch(`http://localhost:3001/api/models/${ue}/status`);if(!we.ok)throw new Error(`Status check failed: ${we.statusText}`);const{status:_e,error:Ve}=await we.json();if(ye=_e,Ve)throw new Error(Ve);qe++}else ye="completed";const se=await fetch(`http://localhost:3001/api/models/${ue}`);if(!se.ok)throw new Error(`Failed to fetch model info: ${se.statusText}`);const he=await se.json(),Ge=await q(ue),De=Ge.find(we=>["obj","stl","ply"].includes(we.extension));let D=r.trim()||((P=a.obj)==null?void 0:P.name.replace(/\.obj$/i,""))||`Model_${Date.now()}`;he.name&&(D=he.name.replace(/^\d+-[0-9a-f-]+/i,"").replace(/\.obj$/i,"")||he.name);const St=`${D}.obj`,Ae=a.mtl?`${D}.mtl`:null,Ue=`http://localhost:3001/models/${he.processor}/${ue}`,ge={id:ue,name:D,fileUrl:Ue,objFilename:St,mtlFilename:Ae,format:((K=De==null?void 0:De.extension)==null?void 0:K.toUpperCase())||"OBJ",files:Ge,thumbnail:t==="images"?(Se=(le=he.images)==null?void 0:le[0])!=null&&Se.filename?`http://localhost:3001/uploads/${he.images[0].filename}`:((Be=n[0])==null?void 0:Be.url)||"/placeholder-3d.png":"/placeholder-3d.png",createdAt:new Date().toISOString(),imageCount:((Pe=he.images)==null?void 0:Pe.length)||n.length,objCount:t==="import"?a.mtl?2:1:0,processor:he.processor,type:t,objFiles:he.objFiles||(t==="import"?[{filename:St},...a.mtl?[{filename:Ae}]:[]]:[]),vertices:he.vertices||0,triangles:he.triangles||0,sizeX:he.sizeX||0,sizeY:he.sizeY||0,sizeZ:he.sizeZ||0,size:(De==null?void 0:De.size)||0};console.log("New model data:",ge),y(ge),w()}catch(X){console.error("Error in handleGenerate:",X),C(X.message||"Processing failed")}finally{d(!1)}},q=async P=>{try{const K=await fetch(`http://localhost:3001/api/models/${P}/files`);if(!K.ok)throw new Error(`Failed to fetch model files: ${K.statusText}`);const{files:le}=await K.json();return le||[]}catch(K){return console.error("Failed to fetch model files:",K),[]}},Y=()=>{i([]),s({}),o(""),y(null),T(!1),C(null),d(!1),p(0),A("generate")},z=()=>Y(),k=P=>{A(P),P==="library"?(w(),y(null)):P==="generate"&&Y()};return v.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-6 space-y-6",children:[v.jsx("nav",{className:"bg-white rounded-xl shadow-lg p-2 mb-8 border",children:v.jsxs("div",{className:"flex space-x-2",children:[v.jsxs("button",{onClick:()=>k("generate"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${R==="generate"?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(zu,{className:"w-5 h-5 mr-2 inline"})," Generate"]}),v.jsxs("button",{onClick:()=>k("library"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${R==="library"?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(Ry,{className:"w-5 h-5 mr-2 inline"})," Library (",m.length,")"]})]})}),!g&&v.jsx(n0,{type:"warning",message:"Backend not available."}),M&&v.jsx(n0,{type:"error",message:M,onClose:()=>C(null)}),R==="generate"&&v.jsxs(v.Fragment,{children:[!U&&!x&&v.jsx(QT,{selectedImages:n,setSelectedImages:i,selectedObjFiles:a,setSelectedObjFiles:s,uploadType:t,setUploadType:e,error:M,setError:C,onNext:H}),U&&!x&&v.jsx(JT,{selectedImages:n,selectedObjFiles:a,uploadType:t,modelName:r,setModelName:o,processor:l,setProcessor:c,isProcessing:u,processingStep:h,processingSteps:_,handleGenerate:G,backendUp:g}),x&&v.jsx(gN,{generated3DModel:x,onDownload:null,onNewModel:z})]}),R==="library"&&v.jsx(vN,{savedModels:m,setSavedModels:f,setActiveTab:A,setError:C,onRefresh:w})]})}function _N(){return v.jsxs("div",{className:"min-h-screen flex flex-col",children:[v.jsx(ZT,{}),v.jsx("div",{className:"flex-grow",children:v.jsxs(h1,{children:[v.jsx(ah,{path:"/",element:v.jsx($T,{})}),v.jsx(ah,{path:"/generate",element:v.jsx(xN,{})})]})}),v.jsx(KT,{})]})}ME.createRoot(document.getElementById("root")).render(v.jsx(z1,{basename:"/snap3d",children:v.jsx(_N,{})}));
