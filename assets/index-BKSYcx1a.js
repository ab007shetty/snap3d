(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function C0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N0={exports:{}},Zc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=Symbol.for("react.transitional.element"),Py=Symbol.for("react.fragment");function D0(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:Oy,type:t,key:i,ref:e!==void 0?e:null,props:n}}Zc.Fragment=Py;Zc.jsx=D0;Zc.jsxs=D0;N0.exports=Zc;var v=N0.exports,U0={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=Symbol.for("react.transitional.element"),zy=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),Iy=Symbol.for("react.strict_mode"),Fy=Symbol.for("react.profiler"),Hy=Symbol.for("react.consumer"),Gy=Symbol.for("react.context"),Vy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),$p=Symbol.iterator;function Xy(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,z0={};function Es(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||O0}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=Es.prototype;function Ah(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||O0}var wh=Ah.prototype=new B0;wh.constructor=Ah;P0(wh,Es.prototype);wh.isPureReactComponent=!0;var Jp=Array.isArray,Et={H:null,A:null,T:null,S:null,V:null},I0=Object.prototype.hasOwnProperty;function Rh(t,e,n,i,a,r){return n=r.ref,{$$typeof:Th,type:t,key:e,ref:n!==void 0?n:null,props:r}}function Wy(t,e){return Rh(t.type,e,void 0,void 0,void 0,t.props)}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===Th}function qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var em=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qy(""+t.key):e.toString(36)}function tm(){}function Yy(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(tm,tm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Lr(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Th:case zy:s=!0;break;case L0:return s=t._init,Lr(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Mu(t,0):i,Jp(a)?(n="",s!=null&&(n=s.replace(em,"$&/")+"/"),Lr(a,e,n,"",function(c){return c})):a!=null&&(Ch(a)&&(a=Wy(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(em,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Jp(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Mu(i,l),s+=Lr(i,e,n,r,a);else if(l=Xy(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Mu(i,l++),s+=Lr(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Lr(Yy(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function ll(t,e,n){if(t==null)return t;var i=[],a=0;return Lr(t,i,"","",function(r){return e.call(n,r,a++)}),i}function Zy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ky(){}Ve.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Es;Ve.Fragment=By;Ve.Profiler=Fy;Ve.PureComponent=Ah;Ve.StrictMode=Iy;Ve.Suspense=ky;Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Et;Ve.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Et.H.useMemoCache(t)}};Ve.cache=function(t){return function(){return t.apply(null,arguments)}};Ve.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=P0({},t.props),a=t.key,r=void 0;if(e!=null)for(s in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(a=""+e.key),e)!I0.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Rh(t.type,a,void 0,void 0,r,i)};Ve.createContext=function(t){return t={$$typeof:Gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Hy,_context:t},t};Ve.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)I0.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Rh(t,r,void 0,void 0,null,a)};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Vy,render:t}};Ve.isValidElement=Ch;Ve.lazy=function(t){return{$$typeof:L0,_payload:{_status:-1,_result:t},_init:Zy}};Ve.memo=function(t,e){return{$$typeof:jy,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Et.T,n={};Et.T=n;try{var i=t(),a=Et.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ky,nm)}catch(r){nm(r)}finally{Et.T=e}};Ve.unstable_useCacheRefresh=function(){return Et.H.useCacheRefresh()};Ve.use=function(t){return Et.H.use(t)};Ve.useActionState=function(t,e,n){return Et.H.useActionState(t,e,n)};Ve.useCallback=function(t,e){return Et.H.useCallback(t,e)};Ve.useContext=function(t){return Et.H.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t,e){return Et.H.useDeferredValue(t,e)};Ve.useEffect=function(t,e,n){var i=Et.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};Ve.useId=function(){return Et.H.useId()};Ve.useImperativeHandle=function(t,e,n){return Et.H.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Et.H.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Et.H.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Et.H.useMemo(t,e)};Ve.useOptimistic=function(t,e){return Et.H.useOptimistic(t,e)};Ve.useReducer=function(t,e,n){return Et.H.useReducer(t,e,n)};Ve.useRef=function(t){return Et.H.useRef(t)};Ve.useState=function(t){return Et.H.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Et.H.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Et.H.useTransition()};Ve.version="19.1.0";U0.exports=Ve;var G=U0.exports;const Qy=C0(G);var F0={exports:{}},Kc={},H0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var O=L.length;L.push(z);e:for(;0<O;){var k=O-1>>>1,Q=L[k];if(0<a(Q,z))L[k]=z,L[O]=Q,O=k;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var z=L[0],O=L.pop();if(O!==z){L[0]=O;e:for(var k=0,Q=L.length,oe=Q>>>1;k<oe;){var Re=2*(k+1)-1,ze=L[Re],X=Re+1,ne=L[X];if(0>a(ze,O))X<Q&&0>a(ne,ze)?(L[k]=ne,L[X]=O,k=X):(L[k]=ze,L[Re]=O,k=Re);else if(X<Q&&0>a(ne,O))L[k]=ne,L[X]=O,k=X;else break e}}return z}function a(L,z){var O=L.sortIndex-z.sortIndex;return O!==0?O:L.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,S=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function y(L){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=L)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function R(L){if(S=!1,y(L),!_)if(n(l)!==null)_=!0,A||(A=!0,I());else{var z=n(c);z!==null&&Z(R,z.startTime-L)}}var A=!1,w=-1,N=5,T=-1;function E(){return m?!0:!(t.unstable_now()-T<N)}function D(){if(m=!1,A){var L=t.unstable_now();T=L;var z=!0;try{e:{_=!1,S&&(S=!1,g(w),w=-1),p=!0;var O=f;try{t:{for(y(L),h=n(l);h!==null&&!(h.expirationTime>L&&E());){var k=h.callback;if(typeof k=="function"){h.callback=null,f=h.priorityLevel;var Q=k(h.expirationTime<=L);if(L=t.unstable_now(),typeof Q=="function"){h.callback=Q,y(L),z=!0;break t}h===n(l)&&i(l),y(L)}else i(l);h=n(l)}if(h!==null)z=!0;else{var oe=n(c);oe!==null&&Z(R,oe.startTime-L),z=!1}}break e}finally{h=null,f=O,p=!1}z=void 0}}finally{z?I():A=!1}}}var I;if(typeof x=="function")I=function(){x(D)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,Y=B.port2;B.port1.onmessage=D,I=function(){Y.postMessage(null)}}else I=function(){u(D,0)};function Z(L,z){w=u(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var O=f;f=z;try{return L()}finally{f=O}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=f;f=L;try{return z()}finally{f=O}},t.unstable_scheduleCallback=function(L,z,O){var k=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?k+O:k):O=k,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,L={id:d++,callback:z,priorityLevel:L,startTime:O,expirationTime:Q,sortIndex:-1},O>k?(L.sortIndex=O,e(c,L),n(l)===null&&L===n(c)&&(S?(g(w),w=-1):S=!0,Z(R,O-k))):(L.sortIndex=Q,e(l,L),_||p||(_=!0,A||(A=!0,I()))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var z=f;return function(){var O=f;f=z;try{return L.apply(this,arguments)}finally{f=O}}}})(G0);H0.exports=G0;var $y=H0.exports,V0={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=G;function k0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qi(){}var ln={d:{f:Qi,r:function(){throw Error(k0(522))},D:Qi,C:Qi,L:Qi,m:Qi,X:Qi,S:Qi,M:Qi},p:0,findDOMNode:null},eS=Symbol.for("react.portal");function tS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var eo=Jy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Qc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ln;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(k0(299));return tS(t,e,null,n)};cn.flushSync=function(t){var e=eo.T,n=ln.p;try{if(eo.T=null,ln.p=2,t)return t()}finally{eo.T=e,ln.p=n,ln.d.f()}};cn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,ln.d.C(t,e))};cn.prefetchDNS=function(t){typeof t=="string"&&ln.d.D(t)};cn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Qc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?ln.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&ln.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};cn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Qc(e.as,e.crossOrigin);ln.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&ln.d.M(t)};cn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Qc(n,e.crossOrigin);ln.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};cn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Qc(e.as,e.crossOrigin);ln.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else ln.d.m(t)};cn.requestFormReset=function(t){ln.d.r(t)};cn.unstable_batchedUpdates=function(t,e){return t(e)};cn.useFormState=function(t,e,n){return eo.H.useFormState(t,e,n)};cn.useFormStatus=function(){return eo.H.useHostTransitionStatus()};cn.version="19.1.0";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),V0.exports=cn;var nS=V0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=$y,X0=G,iS=nS;function J(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function im(t){if(Po(t)!==t)throw Error(J(188))}function aS(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return im(a),t;if(r===i)return im(a),e;r=r.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Y0(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Y0(t),e!==null)return e;t=t.sibling}return null}var yt=Object.assign,rS=Symbol.for("react.element"),cl=Symbol.for("react.transitional.element"),Zs=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Z0=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),sS=Symbol.for("react.provider"),K0=Symbol.for("react.consumer"),Di=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),sa=Symbol.for("react.lazy"),Gf=Symbol.for("react.activity"),oS=Symbol.for("react.memo_cache_sentinel"),am=Symbol.iterator;function Ps(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var lS=Symbol.for("react.client.reference");function Vf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case If:return"Profiler";case Z0:return"StrictMode";case Ff:return"Suspense";case Hf:return"SuspenseList";case Gf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Zs:return"Portal";case Di:return(t.displayName||"Context")+".Provider";case K0:return(t._context.displayName||"Context")+".Consumer";case Nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case sa:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}var Ks=Array.isArray,Le=X0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=iS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$a={pending:!1,data:null,method:null,action:null},kf=[],Ir=-1;function vi(t){return{current:t}}function Yt(t){0>Ir||(t.current=kf[Ir],kf[Ir]=null,Ir--)}function bt(t,e){Ir++,kf[Ir]=t.current,t.current=e}var ui=vi(null),go=vi(null),va=vi(null),hc=vi(null);function pc(t,e){switch(bt(va,e),bt(go,t),bt(ui,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=cg(e),t=hx(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Yt(ui),bt(ui,t)}function os(){Yt(ui),Yt(go),Yt(va)}function jf(t){t.memoizedState!==null&&bt(hc,t);var e=ui.current,n=hx(e,t.type);e!==n&&(bt(go,t),bt(ui,n))}function mc(t){go.current===t&&(Yt(ui),Yt(go)),hc.current===t&&(Yt(hc),Ao._currentValue=$a)}var Xf=Object.prototype.hasOwnProperty,Uh=Gt.unstable_scheduleCallback,Eu=Gt.unstable_cancelCallback,cS=Gt.unstable_shouldYield,uS=Gt.unstable_requestPaint,fi=Gt.unstable_now,fS=Gt.unstable_getCurrentPriorityLevel,Q0=Gt.unstable_ImmediatePriority,$0=Gt.unstable_UserBlockingPriority,gc=Gt.unstable_NormalPriority,dS=Gt.unstable_LowPriority,J0=Gt.unstable_IdlePriority,hS=Gt.log,pS=Gt.unstable_setDisableYieldValue,zo=null,Cn=null;function ha(t){if(typeof hS=="function"&&pS(t),Cn&&typeof Cn.setStrictMode=="function")try{Cn.setStrictMode(zo,t)}catch{}}var Nn=Math.clz32?Math.clz32:vS,mS=Math.log,gS=Math.LN2;function vS(t){return t>>>=0,t===0?32:31-(mS(t)/gS|0)|0}var ul=256,fl=4194304;function ka(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $c(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=ka(i):(s&=o,s!==0?a=ka(s):n||(n=o&~t,n!==0&&(a=ka(n))))):(o=i&~r,o!==0?a=ka(o):s!==0?a=ka(s):n||(n=i&~t,n!==0&&(a=ka(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function Bo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function _S(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(){var t=ul;return ul<<=1,!(ul&4194048)&&(ul=256),t}function tv(){var t=fl;return fl<<=1,!(fl&62914560)&&(fl=4194304),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xS(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-Nn(n),h=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&nv(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function nv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Nn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function iv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Nn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Lh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Oh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function av(){var t=it.p;return t!==0?t:(t=window.event,t===void 0?32:Ex(t.type))}function yS(t,e){var n=it.p;try{return it.p=t,e()}finally{it.p=n}}var Ua=Math.random().toString(36).slice(2),en="__reactFiber$"+Ua,_n="__reactProps$"+Ua,bs="__reactContainer$"+Ua,Wf="__reactEvents$"+Ua,SS="__reactListeners$"+Ua,MS="__reactHandles$"+Ua,rm="__reactResources$"+Ua,Fo="__reactMarker$"+Ua;function Ph(t){delete t[en],delete t[_n],delete t[Wf],delete t[SS],delete t[MS]}function Fr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bs]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[en])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function Ts(t){if(t=t[en]||t[bs]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Qs(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(J(33))}function Kr(t){var e=t[rm];return e||(e=t[rm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[Fo]=!0}var rv=new Set,sv={};function fr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(sv[t]=e,t=0;t<e.length;t++)rv.add(e[t])}var ES=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sm={},om={};function bS(t){return Xf.call(om,t)?!0:Xf.call(sm,t)?!1:ES.test(t)?om[t]=!0:(sm[t]=!0,!1)}function Wl(t,e,n){if(bS(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function dl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Si(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var Tu,lm;function Or(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||"",lm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tu+t+lm}var Au=!1;function wu(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var f=p}Reflect.construct(t,[],h)}else{try{h.call()}catch(p){f=p}t.call(h.prototype)}}else{try{throw Error()}catch(p){f=p}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Or(n):""}function TS(t){switch(t.tag){case 26:case 27:case 5:return Or(t.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 15:return wu(t.type,!1);case 11:return wu(t.type.render,!1);case 1:return wu(t.type,!0);case 31:return Or("Activity");default:return""}}function cm(t){try{var e="";do e+=TS(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Fn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AS(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vc(t){t._valueTracker||(t._valueTracker=AS(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wS=/[\n"\\]/g;function Vn(t){return t.replace(wS,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qf(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Fn(e)):t.value!==""+Fn(e)&&(t.value=""+Fn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Yf(t,s,Fn(e)):n!=null?Yf(t,s,Fn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Fn(o):t.removeAttribute("name")}function cv(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+Fn(n):"",e=e!=null?""+Fn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Yf(t,e,n){e==="number"&&_c(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Qr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function uv(t,e,n){if(e!=null&&(e=""+Fn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Fn(n):""}function fv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(J(92));if(Ks(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Fn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var RS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function um(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||RS.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function dv(t,e,n){if(e!=null&&typeof e!="object")throw Error(J(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&um(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&um(t,r,e[r])}function zh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),NS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return NS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Zf=null;function Bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,$r=null;function fm(t){var e=Ts(t);if(e&&(t=e.stateNode)){var n=t[_n]||null;e:switch(t=e.stateNode,e.type){case"input":if(qf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Vn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[_n]||null;if(!a)throw Error(J(90));qf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&lv(i)}break e;case"textarea":uv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}}}var Ru=!1;function hv(t,e,n){if(Ru)return t(e,n);Ru=!0;try{var i=t(e);return i}finally{if(Ru=!1,(Hr!==null||$r!==null)&&(lu(),Hr&&(e=Hr,t=$r,$r=Hr=null,fm(e),t)))for(e=0;e<t.length;e++)fm(t[e])}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var i=n[_n]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=!1;if(ki)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Kf=!1}var pa=null,Ih=null,Yl=null;function pv(){if(Yl)return Yl;var t,e=Ih,n=e.length,i,a="value"in pa?pa.value:pa.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Yl=a.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function dm(){return!1}function xn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hl:dm,this.isPropagationStopped=dm,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=xn(dr),Ho=yt({},dr,{view:0,detail:0}),DS=xn(Ho),Cu,Nu,Bs,eu=yt({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Cu=t.screenX-Bs.screenX,Nu=t.screenY-Bs.screenY):Nu=Cu=0,Bs=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),hm=xn(eu),US=yt({},eu,{dataTransfer:0}),LS=xn(US),OS=yt({},Ho,{relatedTarget:0}),Du=xn(OS),PS=yt({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=xn(PS),BS=yt({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IS=xn(BS),FS=yt({},dr,{data:0}),pm=xn(FS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VS[t])?!!e[t]:!1}function Fh(){return kS}var jS=yt({},Ho,{key:function(t){if(t.key){var e=HS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=xn(jS),WS=yt({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=xn(WS),qS=yt({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),YS=xn(qS),ZS=yt({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=xn(ZS),QS=yt({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$S=xn(QS),JS=yt({},dr,{newState:0,oldState:0}),eM=xn(JS),tM=[9,13,27,32],Hh=ki&&"CompositionEvent"in window,to=null;ki&&"documentMode"in document&&(to=document.documentMode);var nM=ki&&"TextEvent"in window&&!to,mv=ki&&(!Hh||to&&8<to&&11>=to),gm=" ",vm=!1;function gv(t,e){switch(t){case"keyup":return tM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function iM(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(vm=!0,gm);case"textInput":return t=e.data,t===gm&&vm?null:t;default:return null}}function aM(t,e){if(Gr)return t==="compositionend"||!Hh&&gv(t,e)?(t=pv(),Yl=Ih=pa=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mv&&e.locale!=="ko"?null:e.data;default:return null}}var rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rM[t.type]:e==="textarea"}function _v(t,e,n,i){Hr?$r?$r.push(i):$r=[i]:Hr=i,e=zc(e,"onChange"),0<e.length&&(n=new Jc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var no=null,_o=null;function sM(t){ux(t,0)}function tu(t){var e=Qs(t);if(lv(e))return t}function xm(t,e){if(t==="change")return e}var xv=!1;if(ki){var Uu;if(ki){var Lu="oninput"in document;if(!Lu){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),Lu=typeof ym.oninput=="function"}Uu=Lu}else Uu=!1;xv=Uu&&(!document.documentMode||9<document.documentMode)}function Sm(){no&&(no.detachEvent("onpropertychange",yv),_o=no=null)}function yv(t){if(t.propertyName==="value"&&tu(_o)){var e=[];_v(e,_o,t,Bh(t)),hv(sM,e)}}function oM(t,e,n){t==="focusin"?(Sm(),no=e,_o=n,no.attachEvent("onpropertychange",yv)):t==="focusout"&&Sm()}function lM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(_o)}function cM(t,e){if(t==="click")return tu(e)}function uM(t,e){if(t==="input"||t==="change")return tu(e)}function fM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:fM;function xo(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Xf.call(e,a)||!Ln(t[a],e[a]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,e){var n=Mm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_c(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var dM=ki&&"documentMode"in document&&11>=document.documentMode,Vr=null,Qf=null,io=null,$f=!1;function bm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Vr==null||Vr!==_c(i)||(i=Vr,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),io&&xo(io,i)||(io=i,i=zc(Qf,"onSelect"),0<i.length&&(e=new Jc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vr)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Ou={},Ev={};ki&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function hr(t){if(Ou[t])return Ou[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return Ou[t]=e[n];return t}var bv=hr("animationend"),Tv=hr("animationiteration"),Av=hr("animationstart"),hM=hr("transitionrun"),pM=hr("transitionstart"),mM=hr("transitioncancel"),wv=hr("transitionend"),Rv=new Map,Jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jf.push("scrollEnd");function ai(t,e){Rv.set(t,e),fr(e,[t])}var Tm=new WeakMap;function kn(t,e){if(typeof t=="object"&&t!==null){var n=Tm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:cm(e)},Tm.set(t,e),e)}return{value:t,source:e,stack:cm(e)}}var Bn=[],jr=0,Vh=0;function nu(){for(var t=jr,e=Vh=jr=0;e<t;){var n=Bn[e];Bn[e++]=null;var i=Bn[e];Bn[e++]=null;var a=Bn[e];Bn[e++]=null;var r=Bn[e];if(Bn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&Cv(n,a,r)}}function iu(t,e,n,i){Bn[jr++]=t,Bn[jr++]=e,Bn[jr++]=n,Bn[jr++]=i,Vh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function kh(t,e,n,i){return iu(t,e,n,i),xc(t)}function As(t,e){return iu(t,null,null,e),xc(t)}function Cv(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-Nn(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function xc(t){if(50<po)throw po=0,yd=null,Error(J(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Xr={};function gM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new gM(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Nv(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Kl(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")jh(t)&&(s=1);else if(typeof t=="string")s=_E(t,n,ui.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Gf:return t=Rn(31,n,e,a),t.elementType=Gf,t.lanes=r,t;case Br:return Ja(n.children,a,r,e);case Z0:s=8,a|=24;break;case If:return t=Rn(12,n,e,a|2),t.elementType=If,t.lanes=r,t;case Ff:return t=Rn(13,n,e,a),t.elementType=Ff,t.lanes=r,t;case Hf:return t=Rn(19,n,e,a),t.elementType=Hf,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sS:case Di:s=10;break e;case K0:s=9;break e;case Nh:s=11;break e;case Dh:s=14;break e;case sa:s=16,i=null;break e}s=29,n=Error(J(130,t===null?"null":typeof t,"")),i=null}return e=Rn(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Ja(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Wr=[],qr=0,yc=null,Sc=0,Hn=[],Gn=0,er=null,Ui=1,Li="";function ja(t,e){Wr[qr++]=Sc,Wr[qr++]=yc,yc=t,Sc=e}function Dv(t,e,n){Hn[Gn++]=Ui,Hn[Gn++]=Li,Hn[Gn++]=er,er=t;var i=Ui;t=Li;var a=32-Nn(i)-1;i&=~(1<<a),n+=1;var r=32-Nn(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ui=1<<32-Nn(e)+a|n<<a|i,Li=r+t}else Ui=1<<r|n<<a|i,Li=t}function Xh(t){t.return!==null&&(ja(t,1),Dv(t,1,0))}function Wh(t){for(;t===yc;)yc=Wr[--qr],Wr[qr]=null,Sc=Wr[--qr],Wr[qr]=null;for(;t===er;)er=Hn[--Gn],Hn[Gn]=null,Li=Hn[--Gn],Hn[Gn]=null,Ui=Hn[--Gn],Hn[Gn]=null}var on=null,Ct=null,nt=!1,tr=null,oi=!1,ed=Error(J(519));function rr(t){var e=Error(J(418,""));throw yo(kn(e,t)),ed}function Am(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[en]=t,e[_n]=i,n){case"dialog":je("cancel",e),je("close",e);break;case"iframe":case"object":case"embed":je("load",e);break;case"video":case"audio":for(n=0;n<Eo.length;n++)je(Eo[n],e);break;case"source":je("error",e);break;case"img":case"image":case"link":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"input":je("invalid",e),cv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),vc(e);break;case"select":je("invalid",e);break;case"textarea":je("invalid",e),fv(e,i.value,i.defaultValue,i.children),vc(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||dx(e.textContent,n)?(i.popover!=null&&(je("beforetoggle",e),je("toggle",e)),i.onScroll!=null&&je("scroll",e),i.onScrollEnd!=null&&je("scrollend",e),i.onClick!=null&&(e.onclick=fu),e=!0):e=!1,e||rr(t)}function wm(t){for(on=t.return;on;)switch(on.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:on=on.return}}function Is(t){if(t!==on)return!1;if(!nt)return wm(t),nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ad(t.type,t.memoizedProps)),n=!n),n&&Ct&&rr(t),wm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Ct=ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Ct=null}}else e===27?(e=Ct,La(t.type)?(t=Cd,Cd=null,Ct=t):Ct=e):Ct=on?ni(t.stateNode.nextSibling):null;return!0}function Go(){Ct=on=null,nt=!1}function Rm(){var t=tr;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),tr=null),t}function yo(t){tr===null?tr=[t]:tr.push(t)}var td=vi(null),pr=null,Oi=null;function la(t,e,n){bt(td,e._currentValue),e._currentValue=n}function Fi(t){t._currentValue=td.current,Yt(td)}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function id(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),nd(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(J(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),nd(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Vo(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(J(387));if(s=s.memoizedProps,s!==null){var o=a.type;Ln(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===hc.current){if(s=a.alternate,s===null)throw Error(J(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}a=a.return}t!==null&&id(e,t,n,i),e.flags|=262144}function Mc(t){for(t=t.firstContext;t!==null;){if(!Ln(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){pr=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function tn(t){return Uv(pr,t)}function pl(t,e){return pr===null&&sr(t),Uv(t,e)}function Uv(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Oi===null){if(t===null)throw Error(J(308));Oi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Oi=Oi.next=e;return n}var vM=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},_M=Gt.unstable_scheduleCallback,xM=Gt.unstable_NormalPriority,Ft={$$typeof:Di,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new vM,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&_M(xM,function(){t.controller.abort()})}var ao=null,ad=0,us=0,Jr=null;function yM(t,e){if(ao===null){var n=ao=[];ad=0,us=gp(),Jr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ad++,e.then(Cm,Cm),e}function Cm(){if(--ad===0&&ao!==null){Jr!==null&&(Jr.status="fulfilled");var t=ao;ao=null,us=0,Jr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function SM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Nm=Le.S;Le.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&yM(t,e),Nm!==null&&Nm(t,e)};var nr=vi(null);function Yh(){var t=nr.current;return t!==null?t:vt.pooledCache}function Ql(t,e){e===null?bt(nr,nr.current):bt(nr,e.pool)}function Lv(){var t=Yh();return t===null?null:{parent:Ft._currentValue,pool:t}}var jo=Error(J(460)),Ov=Error(J(474)),au=Error(J(542)),rd={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ml(){}function Pv(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ml,ml),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Lm(t),t;default:if(typeof e.status=="string")e.then(ml,ml);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(J(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Lm(t),t}throw ro=e,jo}}var ro=null;function Um(){if(ro===null)throw Error(J(459));var t=ro;return ro=null,t}function Lm(t){if(t===jo||t===au)throw Error(J(483))}var oa=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=xc(t),Cv(t,null,n),e}return iu(t,i,e,n),xc(t)}function so(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,iv(t,n)}}function Bu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var od=!1;function oo(){if(od){var t=Jr;if(t!==null)throw t}}function lo(t,e,n,i){od=!1;var a=t.updateQueue;oa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,d=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Ze&f)===f:(i&f)===f){f!==0&&f===us&&(od=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,S=o;f=e;var m=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=yt({},h,f);break e;case 2:oa=!0}}f=o.callback,f!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Ca|=s,t.lanes=s,t.memoizedState=h}}function zv(t,e){if(typeof t!="function")throw Error(J(191,t));t.call(e)}function Bv(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zv(n[t],e)}var fs=vi(null),Ec=vi(0);function Om(t,e){t=Wi,bt(Ec,t),bt(fs,e),Wi=t|e.baseLanes}function ld(){bt(Ec,Wi),bt(fs,fs.current)}function Kh(){Wi=Ec.current,Yt(fs),Yt(Ec)}var wa=0,ke=null,ht=null,zt=null,bc=!1,es=!1,or=!1,Tc=0,So=0,ts=null,MM=0;function Lt(){throw Error(J(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function $h(t,e,n,i,a,r){return wa=r,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?p_:m_,or=!1,r=n(i,a),or=!1,es&&(r=Fv(e,n,i,a)),Iv(t),r}function Iv(t){Le.H=Ac;var e=ht!==null&&ht.next!==null;if(wa=0,zt=ht=ke=null,bc=!1,So=0,ts=null,e)throw Error(J(300));t===null||qt||(t=t.dependencies,t!==null&&Mc(t)&&(qt=!0))}function Fv(t,e,n,i){ke=t;var a=0;do{if(es&&(ts=null),So=0,es=!1,25<=a)throw Error(J(301));if(a+=1,zt=ht=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Le.H=CM,r=e(n,i)}while(es);return r}function EM(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?Xo(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(ke.flags|=1024),e}function Jh(){var t=Tc!==0;return Tc=0,t}function ep(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function tp(t){if(bc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bc=!1}wa=0,zt=ht=ke=null,es=!1,So=Tc=0,ts=null}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ke.memoizedState=zt=t:zt=zt.next=t,zt}function Bt(){if(ht===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=zt===null?ke.memoizedState:zt.next;if(e!==null)zt=e,ht=t;else{if(t===null)throw ke.alternate===null?Error(J(467)):Error(J(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},zt===null?ke.memoizedState=zt=t:zt=zt.next=t}return zt}function np(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var e=So;return So+=1,ts===null&&(ts=[]),t=Pv(ts,t,e),e=ke,(zt===null?e.memoizedState:zt.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?p_:m_),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===Di)return tn(t)}throw Error(J(438,String(t)))}function ip(t){var e=null,n=ke.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=ke.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=np(),ke.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=oS;return e.index++,n}function ji(t,e){return typeof e=="function"?e(t):e}function $l(t){var e=Bt();return ap(e,ht,t)}function ap(t,e,n){var i=t.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Ze&h)===h:(wa&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===us&&(d=!0);else if((wa&f)===f){c=c.next,f===us&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,ke.lanes|=f,Ca|=f;h=c.action,or&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else f={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,ke.lanes|=h,Ca|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Ln(r,t.memoizedState)&&(qt=!0,d&&(n=Jr,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Iu(t){var e=Bt(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Ln(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function Hv(t,e,n){var i=ke,a=Bt(),r=nt;if(r){if(n===void 0)throw Error(J(407));n=n()}else n=e();var s=!Ln((ht||a).memoizedState,n);s&&(a.memoizedState=n,qt=!0),a=a.queue;var o=kv.bind(null,i,a,t);if(Wo(2048,8,o,[t]),a.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(i.flags|=2048,ds(9,su(),Vv.bind(null,i,a,n,e),null),vt===null)throw Error(J(349));r||wa&124||Gv(i,e,n)}return n}function Gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e=np(),ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vv(t,e,n,i){e.value=n,e.getSnapshot=i,jv(e)&&Xv(t)}function kv(t,e,n){return n(function(){jv(e)&&Xv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function Xv(t){var e=As(t,2);e!==null&&Un(e,t,2)}function cd(t){var e=hn();if(typeof t=="function"){var n=t;if(t=n(),or){ha(!0);try{n()}finally{ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},e}function Wv(t,e,n,i){return t.baseState=n,ap(t,ht,typeof i=="function"?i:ji)}function bM(t,e,n,i,a){if(ou(t))throw Error(J(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Le.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,qv(e,r)):(r.next=n.next,e.pending=n.next=r)}}function qv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Le.T,s={};Le.T=s;try{var o=n(a,i),l=Le.S;l!==null&&l(s,o),Pm(t,e,o)}catch(c){ud(t,e,c)}finally{Le.T=r}}else try{r=n(a,i),Pm(t,e,r)}catch(c){ud(t,e,c)}}function Pm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){zm(t,e,i)},function(i){return ud(t,e,i)}):zm(t,e,n)}function zm(t,e,n){e.status="fulfilled",e.value=n,Yv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,qv(t,n)))}function ud(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Yv(e),e=e.next;while(e!==i)}t.action=null}function Yv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zv(t,e){return e}function Bm(t,e){if(nt){var n=vt.formState;if(n!==null){e:{var i=ke;if(nt){if(Ct){t:{for(var a=Ct,r=oi;a.nodeType!==8;){if(!r){a=null;break t}if(a=ni(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ct=ni(a.nextSibling),i=a.data==="F!";break e}}rr(i)}i=!1}i&&(e=n[0])}}return n=hn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zv,lastRenderedState:e},n.queue=i,n=f_.bind(null,ke,i),i.dispatch=n,i=cd(!1),r=lp.bind(null,ke,!1,i.queue),i=hn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=bM.bind(null,ke,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Im(t){var e=Bt();return Kv(e,ht,t)}function Kv(t,e,n){if(e=ap(t,e,Zv)[0],t=$l(ji)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Xo(e)}catch(s){throw s===jo?au:s}else i=e;e=Bt();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(ke.flags|=2048,ds(9,su(),TM.bind(null,a,n),null)),[i,r,t]}function TM(t,e){t.action=e}function Fm(t){var e=Bt(),n=ht;if(n!==null)return Kv(e,n,t);Bt(),e=e.memoizedState,n=Bt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function ds(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=ke.updateQueue,e===null&&(e=np(),ke.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function su(){return{destroy:void 0,resource:void 0}}function Qv(){return Bt().memoizedState}function Jl(t,e,n,i){var a=hn();i=i===void 0?null:i,ke.flags|=t,a.memoizedState=ds(1|e,su(),n,i)}function Wo(t,e,n,i){var a=Bt();i=i===void 0?null:i;var r=a.memoizedState.inst;ht!==null&&i!==null&&Qh(i,ht.memoizedState.deps)?a.memoizedState=ds(e,r,n,i):(ke.flags|=t,a.memoizedState=ds(1|e,r,n,i))}function Hm(t,e){Jl(8390656,8,t,e)}function $v(t,e){Wo(2048,8,t,e)}function Jv(t,e){return Wo(4,2,t,e)}function e_(t,e){return Wo(4,4,t,e)}function t_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){n=n!=null?n.concat([t]):null,Wo(4,4,t_.bind(null,e,t),n)}function rp(){}function i_(t,e){var n=Bt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function a_(t,e){var n=Bt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Qh(e,i[1]))return i[0];if(i=t(),or){ha(!0);try{t()}finally{ha(!1)}}return n.memoizedState=[i,e],i}function sp(t,e,n){return n===void 0||wa&1073741824?t.memoizedState=e:(t.memoizedState=n,t=Y_(),ke.lanes|=t,Ca|=t,n)}function r_(t,e,n,i){return Ln(n,e)?n:fs.current!==null?(t=sp(t,n,i),Ln(t,e)||(qt=!0),t):wa&42?(t=Y_(),ke.lanes|=t,Ca|=t,e):(qt=!0,t.memoizedState=n)}function s_(t,e,n,i,a){var r=it.p;it.p=r!==0&&8>r?r:8;var s=Le.T,o={};Le.T=o,lp(t,!1,e,n);try{var l=a(),c=Le.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=SM(l,i);co(t,e,d,Dn(t))}else co(t,e,i,Dn(t))}catch(h){co(t,e,{then:function(){},status:"rejected",reason:h},Dn())}finally{it.p=r,Le.T=s}}function AM(){}function fd(t,e,n,i){if(t.tag!==5)throw Error(J(476));var a=o_(t).queue;s_(t,a,e,$a,n===null?AM:function(){return l_(t),n(i)})}function o_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$a,baseState:$a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:$a},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function l_(t){var e=o_(t).next.queue;co(t,e,{},Dn())}function op(){return tn(Ao)}function c_(){return Bt().memoizedState}function u_(){return Bt().memoizedState}function wM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Dn();t=_a(n);var i=xa(e,t,n);i!==null&&(Un(i,e,n),so(i,e,n)),e={cache:qh()},t.payload=e;return}e=e.return}}function RM(t,e,n){var i=Dn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ou(t)?d_(e,n):(n=kh(t,e,n,i),n!==null&&(Un(n,t,i),h_(n,e,i)))}function f_(t,e,n){var i=Dn();co(t,e,n,i)}function co(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ou(t))d_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Ln(o,s))return iu(t,e,a,0),vt===null&&nu(),!1}catch{}finally{}if(n=kh(t,e,a,i),n!==null)return Un(n,t,i),h_(n,e,i),!0}return!1}function lp(t,e,n,i){if(i={lane:2,revertLane:gp(),action:i,hasEagerState:!1,eagerState:null,next:null},ou(t)){if(e)throw Error(J(479))}else e=kh(t,n,i,2),e!==null&&Un(e,t,2)}function ou(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function d_(t,e){es=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,iv(t,n)}}var Ac={readContext:tn,use:ru,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt},p_={readContext:tn,use:ru,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Hm,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Jl(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){Jl(4,2,t,e)},useMemo:function(t,e){var n=hn();e=e===void 0?null:e;var i=t();if(or){ha(!0);try{t()}finally{ha(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=hn();if(n!==void 0){var a=n(e);if(or){ha(!0);try{n(e)}finally{ha(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=RM.bind(null,ke,t),[i.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:function(t){t=cd(t);var e=t.queue,n=f_.bind(null,ke,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:rp,useDeferredValue:function(t,e){var n=hn();return sp(n,t,e)},useTransition:function(){var t=cd(!1);return t=s_.bind(null,ke,t.queue,!0,!1),hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=ke,a=hn();if(nt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),vt===null)throw Error(J(349));Ze&124||Gv(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,Hm(kv.bind(null,i,r,t),[t]),i.flags|=2048,ds(9,su(),Vv.bind(null,i,r,n,e),null),n},useId:function(){var t=hn(),e=vt.identifierPrefix;if(nt){var n=Li,i=Ui;n=(i&~(1<<32-Nn(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=Tc++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=MM++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:op,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var e=hn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lp.bind(null,ke,!0,n),n.dispatch=e,[t,e]},useMemoCache:ip,useCacheRefresh:function(){return hn().memoizedState=wM.bind(null,ke)}},m_={readContext:tn,use:ru,useCallback:i_,useContext:tn,useEffect:$v,useImperativeHandle:n_,useInsertionEffect:Jv,useLayoutEffect:e_,useMemo:a_,useReducer:$l,useRef:Qv,useState:function(){return $l(ji)},useDebugValue:rp,useDeferredValue:function(t,e){var n=Bt();return r_(n,ht.memoizedState,t,e)},useTransition:function(){var t=$l(ji)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Xo(t),e]},useSyncExternalStore:Hv,useId:c_,useHostTransitionStatus:op,useFormState:Im,useActionState:Im,useOptimistic:function(t,e){var n=Bt();return Wv(n,ht,t,e)},useMemoCache:ip,useCacheRefresh:u_},CM={readContext:tn,use:ru,useCallback:i_,useContext:tn,useEffect:$v,useImperativeHandle:n_,useInsertionEffect:Jv,useLayoutEffect:e_,useMemo:a_,useReducer:Iu,useRef:Qv,useState:function(){return Iu(ji)},useDebugValue:rp,useDeferredValue:function(t,e){var n=Bt();return ht===null?sp(n,t,e):r_(n,ht.memoizedState,t,e)},useTransition:function(){var t=Iu(ji)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Xo(t),e]},useSyncExternalStore:Hv,useId:c_,useHostTransitionStatus:op,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,e){var n=Bt();return ht!==null?Wv(n,ht,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ip,useCacheRefresh:u_},ns=null,Mo=0;function gl(t){var e=Mo;return Mo+=1,ns===null&&(ns=[]),Pv(ns,t,e)}function Fs(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function vl(t,e){throw e.$$typeof===rS?Error(J(525)):(t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gm(t){var e=t._init;return e(t._payload)}function g_(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Ii(u,g),u.index=0,u.sibling=null,u}function r(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=67108866,g):x):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,x,y){return g===null||g.tag!==6?(g=Pu(x,u.mode,y),g.return=u,g):(g=a(g,x),g.return=u,g)}function l(u,g,x,y){var R=x.type;return R===Br?d(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===sa&&Gm(R)===g.type)?(g=a(g,x.props),Fs(g,x),g.return=u,g):(g=Kl(x.type,x.key,x.props,null,u.mode,y),Fs(g,x),g.return=u,g)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=zu(x,u.mode,y),g.return=u,g):(g=a(g,x.children||[]),g.return=u,g)}function d(u,g,x,y,R){return g===null||g.tag!==7?(g=Ja(x,u.mode,y,R),g.return=u,g):(g=a(g,x),g.return=u,g)}function h(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Pu(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cl:return x=Kl(g.type,g.key,g.props,null,u.mode,x),Fs(x,g),x.return=u,x;case Zs:return g=zu(g,u.mode,x),g.return=u,g;case sa:var y=g._init;return g=y(g._payload),h(u,g,x)}if(Ks(g)||Ps(g))return g=Ja(g,u.mode,x,null),g.return=u,g;if(typeof g.then=="function")return h(u,gl(g),x);if(g.$$typeof===Di)return h(u,pl(u,g),x);vl(u,g)}return null}function f(u,g,x,y){var R=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return R!==null?null:o(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:return x.key===R?l(u,g,x,y):null;case Zs:return x.key===R?c(u,g,x,y):null;case sa:return R=x._init,x=R(x._payload),f(u,g,x,y)}if(Ks(x)||Ps(x))return R!==null?null:d(u,g,x,y,null);if(typeof x.then=="function")return f(u,g,gl(x),y);if(x.$$typeof===Di)return f(u,g,pl(u,x),y);vl(u,x)}return null}function p(u,g,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(x)||null,o(g,u,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,R);case Zs:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,R);case sa:var A=y._init;return y=A(y._payload),p(u,g,x,y,R)}if(Ks(y)||Ps(y))return u=u.get(x)||null,d(g,u,y,R,null);if(typeof y.then=="function")return p(u,g,x,gl(y),R);if(y.$$typeof===Di)return p(u,g,x,pl(g,y),R);vl(g,y)}return null}function _(u,g,x,y){for(var R=null,A=null,w=g,N=g=0,T=null;w!==null&&N<x.length;N++){w.index>N?(T=w,w=null):T=w.sibling;var E=f(u,w,x[N],y);if(E===null){w===null&&(w=T);break}t&&w&&E.alternate===null&&e(u,w),g=r(E,g,N),A===null?R=E:A.sibling=E,A=E,w=T}if(N===x.length)return n(u,w),nt&&ja(u,N),R;if(w===null){for(;N<x.length;N++)w=h(u,x[N],y),w!==null&&(g=r(w,g,N),A===null?R=w:A.sibling=w,A=w);return nt&&ja(u,N),R}for(w=i(w);N<x.length;N++)T=p(w,u,N,x[N],y),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?N:T.key),g=r(T,g,N),A===null?R=T:A.sibling=T,A=T);return t&&w.forEach(function(D){return e(u,D)}),nt&&ja(u,N),R}function S(u,g,x,y){if(x==null)throw Error(J(151));for(var R=null,A=null,w=g,N=g=0,T=null,E=x.next();w!==null&&!E.done;N++,E=x.next()){w.index>N?(T=w,w=null):T=w.sibling;var D=f(u,w,E.value,y);if(D===null){w===null&&(w=T);break}t&&w&&D.alternate===null&&e(u,w),g=r(D,g,N),A===null?R=D:A.sibling=D,A=D,w=T}if(E.done)return n(u,w),nt&&ja(u,N),R;if(w===null){for(;!E.done;N++,E=x.next())E=h(u,E.value,y),E!==null&&(g=r(E,g,N),A===null?R=E:A.sibling=E,A=E);return nt&&ja(u,N),R}for(w=i(w);!E.done;N++,E=x.next())E=p(w,u,N,E.value,y),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?N:E.key),g=r(E,g,N),A===null?R=E:A.sibling=E,A=E);return t&&w.forEach(function(I){return e(u,I)}),nt&&ja(u,N),R}function m(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Br&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:e:{for(var R=x.key;g!==null;){if(g.key===R){if(R=x.type,R===Br){if(g.tag===7){n(u,g.sibling),y=a(g,x.props.children),y.return=u,u=y;break e}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===sa&&Gm(R)===g.type){n(u,g.sibling),y=a(g,x.props),Fs(y,x),y.return=u,u=y;break e}n(u,g);break}else e(u,g);g=g.sibling}x.type===Br?(y=Ja(x.props.children,u.mode,y,x.key),y.return=u,u=y):(y=Kl(x.type,x.key,x.props,null,u.mode,y),Fs(y,x),y.return=u,u=y)}return s(u);case Zs:e:{for(R=x.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),y=a(g,x.children||[]),y.return=u,u=y;break e}else{n(u,g);break}else e(u,g);g=g.sibling}y=zu(x,u.mode,y),y.return=u,u=y}return s(u);case sa:return R=x._init,x=R(x._payload),m(u,g,x,y)}if(Ks(x))return _(u,g,x,y);if(Ps(x)){if(R=Ps(x),typeof R!="function")throw Error(J(150));return x=R.call(x),S(u,g,x,y)}if(typeof x.then=="function")return m(u,g,gl(x),y);if(x.$$typeof===Di)return m(u,g,pl(u,x),y);vl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),y=a(g,x),y.return=u,u=y):(n(u,g),y=Pu(x,u.mode,y),y.return=u,u=y),s(u)):n(u,g)}return function(u,g,x,y){try{Mo=0;var R=m(u,g,x,y);return ns=null,R}catch(w){if(w===jo||w===au)throw w;var A=Rn(29,w,null,u.mode);return A.lanes=y,A.return=u,A}finally{}}}var hs=g_(!0),v_=g_(!1),Xn=vi(null),di=null;function ca(t){var e=t.alternate;bt(Ht,Ht.current&1),bt(Xn,t),di===null&&(e===null||fs.current!==null||e.memoizedState!==null)&&(di=t)}function __(t){if(t.tag===22){if(bt(Ht,Ht.current),bt(Xn,t),di===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(di=t)}}else ua()}function ua(){bt(Ht,Ht.current),bt(Xn,Xn.current)}function Pi(t){Yt(Xn),di===t&&(di=null),Yt(Ht)}var Ht=vi(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Rd(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Fu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Dn(),a=_a(i);a.payload=e,n!=null&&(a.callback=n),e=xa(t,a,i),e!==null&&(Un(e,t,i),so(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Dn(),a=_a(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=xa(t,a,i),e!==null&&(Un(e,t,i),so(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dn(),i=_a(n);i.tag=2,e!=null&&(i.callback=e),e=xa(t,i,n),e!==null&&(Un(e,t,n),so(e,t,n))}};function Vm(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(a,r):!0}function km(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dd.enqueueReplaceState(e,e.state,null)}function lr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=yt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var Rc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function x_(t){Rc(t)}function y_(t){console.error(t)}function S_(t){Rc(t)}function Cc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function jm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function hd(t,e,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){Cc(t,e)},n}function M_(t){return t=_a(t),t.tag=3,t}function E_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){jm(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){jm(e,n,i),typeof a!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function NM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Vo(e,n,a,!0),n=Xn.current,n!==null){switch(n.tag){case 13:return di===null?Sd():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===rd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Ku(t,i,a)),!1;case 22:return n.flags|=65536,i===rd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Ku(t,i,a)),!1}throw Error(J(435,n.tag))}return Ku(t,i,a),Sd(),!1}if(nt)return e=Xn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==ed&&(t=Error(J(422),{cause:i}),yo(kn(t,n)))):(i!==ed&&(e=Error(J(423),{cause:i}),yo(kn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=kn(i,n),a=hd(t.stateNode,i,a),Bu(t,a),Nt!==4&&(Nt=2)),!1;var r=Error(J(520),{cause:i});if(r=kn(r,n),ho===null?ho=[r]:ho.push(r),Nt!==4&&(Nt=2),e===null)return!0;i=kn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=hd(n.stateNode,i,t),Bu(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ya===null||!ya.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=M_(a),E_(a,t,n,i),Bu(n,a),!1}n=n.return}while(n!==null);return!1}var b_=Error(J(461)),qt=!1;function Zt(t,e,n,i){e.child=t===null?v_(e,null,n,i):hs(e,t.child,n,i)}function Xm(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return sr(e),i=$h(t,e,n,s,r,a),o=Jh(),t!==null&&!qt?(ep(t,e,a),Xi(t,e,a)):(nt&&o&&Xh(e),e.flags|=1,Zt(t,e,i,a),e.child)}function Wm(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!jh(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,T_(t,e,r,i,a)):(t=Kl(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!cp(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(s,i)&&t.ref===e.ref)return Xi(t,e,a)}return e.flags|=1,t=Ii(r,i),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(xo(r,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=r,cp(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,Xi(t,e,a)}return pd(t,e,n,i,a)}function A_(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=r!==null?r.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return qm(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ql(e,r!==null?r.cachePool:null),r!==null?Om(e,r):ld(),__(e);else return e.lanes=e.childLanes=536870912,qm(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(Ql(e,r.cachePool),Om(e,r),ua(),e.memoizedState=null):(t!==null&&Ql(e,null),ld(),ua());return Zt(t,e,a,n),e.child}function qm(t,e,n,i){var a=Yh();return a=a===null?null:{parent:Ft._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Ql(e,null),ld(),__(e),t!==null&&Vo(t,e,i,!0),null}function ec(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function pd(t,e,n,i,a){return sr(e),n=$h(t,e,n,i,void 0,a),i=Jh(),t!==null&&!qt?(ep(t,e,a),Xi(t,e,a)):(nt&&i&&Xh(e),e.flags|=1,Zt(t,e,n,a),e.child)}function Ym(t,e,n,i,a,r){return sr(e),e.updateQueue=null,n=Fv(e,i,n,a),Iv(t),i=Jh(),t!==null&&!qt?(ep(t,e,r),Xi(t,e,r)):(nt&&i&&Xh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Zm(t,e,n,i,a){if(sr(e),e.stateNode===null){var r=Xr,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Zh(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Xr,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Fu(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&dd.enqueueReplaceState(r,r.state,null),lo(e,i,r,a),oo(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=lr(n,o);r.props=l;var c=r.context,d=n.contextType;s=Xr,typeof d=="object"&&d!==null&&(s=tn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&km(e,r,i,s),oa=!1;var f=e.memoizedState;r.state=f,lo(e,i,r,a),oo(),c=e.memoizedState,o||f!==c||oa?(typeof h=="function"&&(Fu(e,n,h,i),c=e.memoizedState),(l=oa||Vm(e,n,l,i,f,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,sd(t,e),s=e.memoizedProps,d=lr(n,s),r.props=d,h=e.pendingProps,f=r.context,c=n.contextType,l=Xr,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&km(e,r,i,l),oa=!1,f=e.memoizedState,r.state=f,lo(e,i,r,a),oo();var p=e.memoizedState;s!==h||f!==p||oa||t!==null&&t.dependencies!==null&&Mc(t.dependencies)?(typeof o=="function"&&(Fu(e,n,o,i),p=e.memoizedState),(d=oa||Vm(e,n,d,i,f,p,l)||t!==null&&t.dependencies!==null&&Mc(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,ec(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=hs(e,t.child,null,a),e.child=hs(e,null,n,a)):Zt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=Xi(t,e,a),t}function Km(t,e,n,i){return Go(),e.flags|=256,Zt(t,e,n,i),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(t){return{baseLanes:t,cachePool:Lv()}}function Vu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=jn),t}function w_(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(nt){if(a?ca(e):ua(),nt){var o=Ct,l;if(l=o){e:{for(l=o,o=oi;l.nodeType!==8;){if(!o){o=null;break e}if(l=ni(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:er!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},l=Rn(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,on=e,Ct=null,l=!0):l=!1}l||rr(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Rd(o)?e.lanes=32:e.lanes=536870912,null;Pi(e)}return o=i.children,i=i.fallback,a?(ua(),a=e.mode,o=Nc({mode:"hidden",children:o},a),i=Ja(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=Gu(n),a.childLanes=Vu(t,s,n),e.memoizedState=Hu,i):(ca(e),md(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(ca(e),e.flags&=-257,e=ku(t,e,n)):e.memoizedState!==null?(ua(),e.child=t.child,e.flags|=128,e=null):(ua(),a=i.fallback,o=e.mode,i=Nc({mode:"visible",children:i.children},o),a=Ja(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,hs(e,t.child,null,n),i=e.child,i.memoizedState=Gu(n),i.childLanes=Vu(t,s,n),e.memoizedState=Hu,e=a);else if(ca(e),Rd(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(J(419)),i.stack="",i.digest=s,yo({value:i,source:null,stack:null}),e=ku(t,e,n)}else if(qt||Vo(t,e,n,!1),s=(n&t.childLanes)!==0,qt||s){if(s=vt,s!==null&&(i=n&-n,i=i&42?1:Lh(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,As(t,i),Un(s,t,i),b_;o.data==="$?"||Sd(),e=ku(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Ct=ni(o.nextSibling),on=e,nt=!0,tr=null,oi=!1,t!==null&&(Hn[Gn++]=Ui,Hn[Gn++]=Li,Hn[Gn++]=er,Ui=t.id,Li=t.overflow,er=e),e=md(e,i.children),e.flags|=4096);return e}return a?(ua(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=Ii(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Ii(c,a):(a=Ja(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=Gu(n):(l=o.cachePool,l!==null?(c=Ft._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Lv(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=Vu(t,s,n),e.memoizedState=Hu,i):(ca(e),n=t.child,t=n.sibling,n=Ii(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function md(t,e){return e=Nc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Nc(t,e){return t=Rn(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ku(t,e,n){return hs(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function ju(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function R_(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(Zt(t,e,i.children,n),i=Ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(bt(Ht,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),ju(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&wc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}ju(e,!0,n,null,r);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ca|=e.lanes,!(n&e.childLanes))if(t!==null){if(Vo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Mc(t)))}function DM(t,e,n){switch(e.tag){case 3:pc(e,e.stateNode.containerInfo),la(e,Ft,t.memoizedState.cache),Go();break;case 27:case 5:jf(e);break;case 4:pc(e,e.stateNode.containerInfo);break;case 10:la(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ca(e),e.flags|=128,null):n&e.child.childLanes?w_(t,e,n):(ca(e),t=Xi(t,e,n),t!==null?t.sibling:null);ca(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Vo(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return R_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),bt(Ht,Ht.current),i)break;return null;case 22:case 23:return e.lanes=0,A_(t,e,n);case 24:la(e,Ft,t.memoizedState.cache)}return Xi(t,e,n)}function C_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!cp(t,n)&&!(e.flags&128))return qt=!1,DM(t,e,n);qt=!!(t.flags&131072)}else qt=!1,nt&&e.flags&1048576&&Dv(e,Sc,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")jh(i)?(t=lr(i,t),e.tag=1,e=Zm(null,e,i,t,n)):(e.tag=0,e=pd(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===Nh){e.tag=11,e=Xm(null,e,i,t,n);break e}else if(a===Dh){e.tag=14,e=Wm(null,e,i,t,n);break e}}throw e=Vf(i)||i,Error(J(306,e,""))}}return e;case 0:return pd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=lr(i,e.pendingProps),Zm(t,e,i,a,n);case 3:e:{if(pc(e,e.stateNode.containerInfo),t===null)throw Error(J(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,sd(t,e),lo(e,i,null,n);var s=e.memoizedState;if(i=s.cache,la(e,Ft,i),i!==r.cache&&id(e,[Ft],n,!0),oo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Km(t,e,i,n);break e}else if(i!==a){a=kn(Error(J(424)),e),yo(a),e=Km(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=ni(t.firstChild),on=e,nt=!0,tr=null,oi=!0,n=v_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Go(),i===a){e=Xi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 26:return ec(t,e),t===null?(n=pg(e.type,null,e.pendingProps,null))?e.memoizedState=n:nt||(n=e.type,t=e.pendingProps,i=Bc(va.current).createElement(n),i[en]=e,i[_n]=t,Qt(i,n,t),Wt(i),e.stateNode=i):e.memoizedState=pg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return jf(e),t===null&&nt&&(i=e.stateNode=mx(e.type,e.pendingProps,va.current),on=e,oi=!0,a=Ct,La(e.type)?(Cd=a,Ct=ni(i.firstChild)):Ct=a),Zt(t,e,e.pendingProps.children,n),ec(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&nt&&((a=i=Ct)&&(i=rE(i,e.type,e.pendingProps,oi),i!==null?(e.stateNode=i,on=e,Ct=ni(i.firstChild),oi=!1,a=!0):a=!1),a||rr(e)),jf(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Ad(a,r)?i=null:s!==null&&Ad(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=$h(t,e,EM,null,null,n),Ao._currentValue=a),ec(t,e),Zt(t,e,i,n),e.child;case 6:return t===null&&nt&&((t=n=Ct)&&(n=sE(n,e.pendingProps,oi),n!==null?(e.stateNode=n,on=e,Ct=null,t=!0):t=!1),t||rr(e)),null;case 13:return w_(t,e,n);case 4:return pc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return Xm(t,e,e.type,e.pendingProps,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,la(e,e.type,i.value),Zt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,sr(e),a=tn(a),i=i(a),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return Wm(t,e,e.type,e.pendingProps,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 19:return R_(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=Nc(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ii(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return A_(t,e,n);case 24:return sr(e),i=tn(Ft),t===null?(a=Yh(),a===null&&(a=vt,r=qh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},Zh(e),la(e,Ft,a)):(t.lanes&n&&(sd(t,e),lo(e,null,null,n),oo()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),la(e,Ft,i)):(i=r.cache,la(e,Ft,i),i!==a.cache&&id(e,[Ft],n,!0))),Zt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(J(156,e.tag))}function Mi(t){t.flags|=4}function $m(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!_x(e)){if(e=Xn.current,e!==null&&((Ze&4194048)===Ze?di!==null:(Ze&62914560)!==Ze&&!(Ze&536870912)||e!==di))throw ro=rd,Ov;t.flags|=8192}}function _l(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?tv():536870912,t.lanes|=e,ps|=e)}function Hs(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Fi(Ft),os(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Is(e)?Mi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rm())),At(e),null;case 26:return n=e.memoizedState,t===null?(Mi(e),n!==null?(At(e),$m(e,n)):(At(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Mi(e),At(e),$m(e,n)):(At(e),e.flags&=-16777217):(t.memoizedProps!==i&&Mi(e),At(e),e.flags&=-16777217),null;case 27:mc(e),n=va.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Mi(e);else{if(!i){if(e.stateNode===null)throw Error(J(166));return At(e),null}t=ui.current,Is(e)?Am(e):(t=mx(a,i,n),e.stateNode=t,Mi(e))}return At(e),null;case 5:if(mc(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Mi(e);else{if(!i){if(e.stateNode===null)throw Error(J(166));return At(e),null}if(t=ui.current,Is(e))Am(e);else{switch(a=Bc(va.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[en]=e,t[_n]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(Qt(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Mi(e)}}return At(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Mi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=va.current,Is(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[en]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||dx(t.nodeValue,n)),t||rr(e)}else t=Bc(t).createTextNode(i),t[en]=e,e.stateNode=t}return At(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Is(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(J(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[en]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=Rm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Pi(e),e):(Pi(e),null)}if(Pi(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),_l(e,e.updateQueue),At(e),null;case 4:return os(),t===null&&vp(e.stateNode.containerInfo),At(e),null;case 10:return Fi(e.type),At(e),null;case 19:if(Yt(Ht),a=e.memoizedState,a===null)return At(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)Hs(a,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=wc(t),r!==null){for(e.flags|=128,Hs(a,!1),t=r.updateQueue,e.updateQueue=t,_l(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Nv(n,t),n=n.sibling;return bt(Ht,Ht.current&1|2),e.child}t=t.sibling}a.tail!==null&&fi()>Uc&&(e.flags|=128,i=!0,Hs(a,!1),e.lanes=4194304)}else{if(!i)if(t=wc(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,_l(e,t),Hs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!nt)return At(e),null}else 2*fi()-a.renderingStartTime>Uc&&n!==536870912&&(e.flags|=128,i=!0,Hs(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=fi(),e.sibling=null,t=Ht.current,bt(Ht,i?t&1|2:t&1),e):(At(e),null);case 22:case 23:return Pi(e),Kh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),n=e.updateQueue,n!==null&&_l(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Yt(nr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Fi(Ft),At(e),null;case 25:return null;case 30:return null}throw Error(J(156,e.tag))}function LM(t,e){switch(Wh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(Ft),os(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mc(e),null;case 13:if(Pi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yt(Ht),null;case 4:return os(),null;case 10:return Fi(e.type),null;case 22:case 23:return Pi(e),Kh(),t!==null&&Yt(nr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Fi(Ft),null;case 25:return null;default:return null}}function N_(t,e){switch(Wh(e),e.tag){case 3:Fi(Ft),os();break;case 26:case 27:case 5:mc(e);break;case 4:os();break;case 13:Pi(e);break;case 19:Yt(Ht);break;case 10:Fi(e.type);break;case 22:case 23:Pi(e),Kh(),t!==null&&Yt(nr);break;case 24:Fi(Ft)}}function qo(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){mt(e,e.return,o)}}function Ra(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){mt(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){mt(e,e.return,d)}}function D_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Bv(e,n)}catch(i){mt(t,t.return,i)}}}function U_(t,e,n){n.props=lr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){mt(t,e,i)}}function uo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){mt(t,e,a)}}function li(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){mt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){mt(t,e,a)}else n.current=null}function L_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){mt(t,t.return,a)}}function Xu(t,e,n){try{var i=t.stateNode;eE(i,t.type,n,e),i[_n]=e}catch(a){mt(t,t.return,a)}}function O_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function Wu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(i!==4&&(i===27&&La(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function Dc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&La(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function P_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Qt(e,i,n),e[en]=t,e[_n]=n}catch(r){mt(t,t.return,r)}}var Ni=!1,Ot=!1,qu=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function OM(t,e){if(t=t.containerInfo,bd=Gc,t=Mv(t),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===a&&(o=s),f===r&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},Gc=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=lr(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(S){mt(n,n.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)wd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(J(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function z_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$i(t,n),i&4&&qo(5,n);break;case 1:if($i(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){mt(n,n.return,s)}else{var a=lr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){mt(n,n.return,s)}}i&64&&D_(n),i&512&&uo(n,n.return);break;case 3:if($i(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Bv(t,e)}catch(s){mt(n,n.return,s)}}break;case 27:e===null&&i&4&&P_(n);case 26:case 5:$i(t,n),e===null&&i&4&&L_(n),i&512&&uo(n,n.return);break;case 12:$i(t,n);break;case 13:$i(t,n),i&4&&F_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=kM.bind(null,n),oE(t,n))));break;case 22:if(i=n.memoizedState!==null||Ni,!i){e=e!==null&&e.memoizedState!==null||Ot,a=Ni;var r=Ot;Ni=i,(Ot=e)&&!r?ra(t,n,(n.subtreeFlags&8772)!==0):$i(t,n),Ni=a,Ot=r}break;case 30:break;default:$i(t,n)}}function B_(t){var e=t.alternate;e!==null&&(t.alternate=null,B_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ph(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,pn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 26:Ot||li(n,e),Ei(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ot||li(n,e);var i=Mt,a=pn;La(n.type)&&(Mt=n.stateNode,pn=!1),Ei(t,e,n),mo(n.stateNode),Mt=i,pn=a;break;case 5:Ot||li(n,e);case 6:if(i=Mt,a=pn,Mt=null,Ei(t,e,n),Mt=i,pn=a,Mt!==null)if(pn)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(n.stateNode)}catch(r){mt(n,e,r)}else try{Mt.removeChild(n.stateNode)}catch(r){mt(n,e,r)}break;case 18:Mt!==null&&(pn?(t=Mt,fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Co(t)):fg(Mt,n.stateNode));break;case 4:i=Mt,a=pn,Mt=n.stateNode.containerInfo,pn=!0,Ei(t,e,n),Mt=i,pn=a;break;case 0:case 11:case 14:case 15:Ot||Ra(2,n,e),Ot||Ra(4,n,e),Ei(t,e,n);break;case 1:Ot||(li(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&U_(n,e,i)),Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:Ot=(i=Ot)||n.memoizedState!==null,Ei(t,e,n),Ot=i;break;default:Ei(t,e,n)}}function F_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Co(t)}catch(n){mt(e,e.return,n)}}function PM(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Jm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Jm),e;default:throw Error(J(435,t.tag))}}function Yu(t,e){var n=PM(t);e.forEach(function(i){var a=jM.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function Mn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(La(o.type)){Mt=o.stateNode,pn=!1;break e}break;case 5:Mt=o.stateNode,pn=!1;break e;case 3:case 4:Mt=o.stateNode.containerInfo,pn=!0;break e}o=o.return}if(Mt===null)throw Error(J(160));I_(r,s,a),Mt=null,pn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}var Qn=null;function H_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mn(e,t),En(t),i&4&&(Ra(3,t,t.return),qo(3,t),Ra(5,t,t.return));break;case 1:Mn(e,t),En(t),i&512&&(Ot||n===null||li(n,n.return)),i&64&&Ni&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Qn;if(Mn(e,t),En(t),i&512&&(Ot||n===null||li(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Fo]||r[en]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Qt(r,i,n),r[en]=t,Wt(r),i=r;break e;case"link":var s=gg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),Qt(r,i,n),a.head.appendChild(r);break;case"meta":if(s=gg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),Qt(r,i,n),a.head.appendChild(r);break;default:throw Error(J(468,i))}r[en]=t,Wt(r),i=r}t.stateNode=i}else vg(a,t.type,t.stateNode);else t.stateNode=mg(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?vg(a,t.type,t.stateNode):mg(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Mn(e,t),En(t),i&512&&(Ot||n===null||li(n,n.return)),n!==null&&i&4&&Xu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Mn(e,t),En(t),i&512&&(Ot||n===null||li(n,n.return)),t.flags&32){a=t.stateNode;try{cs(a,"")}catch(p){mt(t,t.return,p)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Xu(t,a,n!==null?n.memoizedProps:a)),i&1024&&(qu=!0);break;case 6:if(Mn(e,t),En(t),i&4){if(t.stateNode===null)throw Error(J(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(p){mt(t,t.return,p)}}break;case 3:if(ic=null,a=Qn,Qn=Ic(e.containerInfo),Mn(e,t),Qn=a,En(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(p){mt(t,t.return,p)}qu&&(qu=!1,G_(t));break;case 4:i=Qn,Qn=Ic(t.stateNode.containerInfo),Mn(e,t),En(t),Qn=i;break;case 12:Mn(e,t),En(t);break;case 13:Mn(e,t),En(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pp=fi()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Yu(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ni,d=Ot;if(Ni=c||a,Ot=d||l,Mn(e,t),Ot=d,Ni=c,En(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Ni||Ot||Xa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){mt(l,l.return,p)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){mt(l,l.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Yu(t,n))));break;case 19:Mn(e,t),En(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Yu(t,i)));break;case 30:break;case 21:break;default:Mn(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(O_(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,r=Wu(t);Dc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(cs(s,""),n.flags&=-33);var o=Wu(t);Dc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Wu(t);gd(t,c,l);break;default:throw Error(J(161))}}catch(d){mt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;G_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $i(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)z_(t,e.alternate,e),e=e.sibling}function Xa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ra(4,e,e.return),Xa(e);break;case 1:li(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&U_(e,e.return,n),Xa(e);break;case 27:mo(e.stateNode);case 26:case 5:li(e,e.return),Xa(e);break;case 22:e.memoizedState===null&&Xa(e);break;case 30:Xa(e);break;default:Xa(e)}t=t.sibling}}function ra(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:ra(a,r,n),qo(4,r);break;case 1:if(ra(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){mt(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)zv(l[a],o)}catch(c){mt(i,i.return,c)}}n&&s&64&&D_(r),uo(r,r.return);break;case 27:P_(r);case 26:case 5:ra(a,r,n),n&&i===null&&s&4&&L_(r),uo(r,r.return);break;case 12:ra(a,r,n);break;case 13:ra(a,r,n),n&&s&4&&F_(a,r);break;case 22:r.memoizedState===null&&ra(a,r,n),uo(r,r.return);break;case 30:break;default:ra(a,r,n)}e=e.sibling}}function up(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ko(n))}function fp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ko(t))}function ri(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V_(t,e,n,i),e=e.sibling}function V_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ri(t,e,n,i),a&2048&&qo(9,e);break;case 1:ri(t,e,n,i);break;case 3:ri(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ko(t)));break;case 12:if(a&2048){ri(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){mt(e,e.return,l)}}else ri(t,e,n,i);break;case 13:ri(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?ri(t,e,n,i):fo(t,e):r._visibility&2?ri(t,e,n,i):(r._visibility|=2,Pr(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&up(s,e);break;case 24:ri(t,e,n,i),a&2048&&fp(e.alternate,e);break;default:ri(t,e,n,i)}}function Pr(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Pr(r,s,o,l,a),qo(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Pr(r,s,o,l,a):fo(r,s):(d._visibility|=2,Pr(r,s,o,l,a)),a&&c&2048&&up(s.alternate,s);break;case 24:Pr(r,s,o,l,a),a&&c&2048&&fp(s.alternate,s);break;default:Pr(r,s,o,l,a)}e=e.sibling}}function fo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:fo(n,i),a&2048&&up(i.alternate,i);break;case 24:fo(n,i),a&2048&&fp(i.alternate,i);break;default:fo(n,i)}e=e.sibling}}var $s=8192;function vr(t){if(t.subtreeFlags&$s)for(t=t.child;t!==null;)k_(t),t=t.sibling}function k_(t){switch(t.tag){case 26:vr(t),t.flags&$s&&t.memoizedState!==null&&yE(Qn,t.memoizedState,t.memoizedProps);break;case 5:vr(t);break;case 3:case 4:var e=Qn;Qn=Ic(t.stateNode.containerInfo),vr(t),Qn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=$s,$s=16777216,vr(t),$s=e):vr(t));break;default:vr(t)}}function j_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gs(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Xt=i,W_(i,t)}j_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X_(t),t=t.sibling}function X_(t){switch(t.tag){case 0:case 11:case 15:Gs(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:Gs(t);break;case 12:Gs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tc(t)):Gs(t);break;default:Gs(t)}}function tc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Xt=i,W_(i,t)}j_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ra(8,e,e.return),tc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,tc(e));break;default:tc(e)}t=t.sibling}}function W_(t,e){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:Ra(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ko(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Xt=i;else e:for(n=t;Xt!==null;){i=Xt;var a=i.sibling,r=i.return;if(B_(i),i===n){Xt=null;break e}if(a!==null){a.return=r,Xt=a;break e}Xt=r}}}var zM={getCacheForType:function(t){var e=tn(Ft),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},BM=typeof WeakMap=="function"?WeakMap:Map,ct=0,vt=null,Xe=null,Ze=0,lt=0,An=null,ma=!1,ws=!1,dp=!1,Wi=0,Nt=0,Ca=0,ir=0,hp=0,jn=0,ps=0,ho=null,mn=null,vd=!1,pp=0,Uc=1/0,Lc=null,ya=null,Kt=0,Sa=null,ms=null,is=0,_d=0,xd=null,q_=null,po=0,yd=null;function Dn(){if(ct&2&&Ze!==0)return Ze&-Ze;if(Le.T!==null){var t=us;return t!==0?t:gp()}return av()}function Y_(){jn===0&&(jn=!(Ze&536870912)||nt?ev():536870912);var t=Xn.current;return t!==null&&(t.flags|=32),jn}function Un(t,e,n){(t===vt&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(gs(t,0),ga(t,Ze,jn,!1)),Io(t,n),(!(ct&2)||t!==vt)&&(t===vt&&(!(ct&2)&&(ir|=n),Nt===4&&ga(t,Ze,jn,!1)),_i(t))}function Z_(t,e,n){if(ct&6)throw Error(J(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Bo(t,e),a=i?HM(t,e):Zu(t,e,!0),r=i;do{if(a===0){ws&&!i&&ga(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!IM(n)){a=Zu(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=ho;var l=o.current.memoizedState.isDehydrated;if(l&&(gs(o,s).flags|=256),s=Zu(o,s,!1),s!==2){if(dp&&!l){o.errorRecoveryDisabledLanes|=r,ir|=r,a=4;break e}r=mn,mn=a,r!==null&&(mn===null?mn=r:mn.push.apply(mn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){gs(t,0),ga(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(J(345));case 4:if((e&4194048)!==e)break;case 6:ga(i,e,jn,!ma);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((e&62914560)===e&&(a=pp+300-fi(),10<a)){if(ga(i,e,jn,!ma),$c(i,0,!0)!==0)break e;i.timeoutHandle=px(eg.bind(null,i,n,mn,Lc,vd,e,jn,ir,ps,ma,r,2,-0,0),a);break e}eg(i,n,mn,Lc,vd,e,jn,ir,ps,ma,r,0,-0,0)}}break}while(!0);_i(t)}function eg(t,e,n,i,a,r,s,o,l,c,d,h,f,p){if(t.timeoutHandle=-1,h=e.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:xE},k_(e),h=SE(),h!==null)){t.cancelPendingCommit=h(ng.bind(null,t,e,r,n,i,a,s,o,l,d,1,f,p)),ga(t,r,s,!c);return}ng(t,e,r,n,i,a,s,o,l)}function IM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Ln(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ga(t,e,n,i){e&=~hp,e&=~ir,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-Nn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&nv(t,n,e)}function lu(){return ct&6?!0:(Yo(0),!1)}function mp(){if(Xe!==null){if(lt===0)var t=Xe.return;else t=Xe,Oi=pr=null,tp(t),ns=null,Mo=0,t=Xe;for(;t!==null;)N_(t.alternate,t),t=t.return;Xe=null}}function gs(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,nE(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),mp(),vt=t,Xe=n=Ii(t.current,null),Ze=e,lt=0,An=null,ma=!1,ws=Bo(t,e),dp=!1,ps=jn=hp=ir=Ca=Nt=0,mn=ho=null,vd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Nn(i),r=1<<a;e|=t[a],i&=~r}return Wi=e,nu(),n}function K_(t,e){ke=null,Le.H=Ac,e===jo||e===au?(e=Um(),lt=3):e===Ov?(e=Um(),lt=4):lt=e===b_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,An=e,Xe===null&&(Nt=1,Cc(t,kn(e,t.current)))}function Q_(){var t=Le.H;return Le.H=Ac,t===null?Ac:t}function $_(){var t=Le.A;return Le.A=zM,t}function Sd(){Nt=4,ma||(Ze&4194048)!==Ze&&Xn.current!==null||(ws=!0),!(Ca&134217727)&&!(ir&134217727)||vt===null||ga(vt,Ze,jn,!1)}function Zu(t,e,n){var i=ct;ct|=2;var a=Q_(),r=$_();(vt!==t||Ze!==e)&&(Lc=null,gs(t,e)),e=!1;var s=Nt;e:do try{if(lt!==0&&Xe!==null){var o=Xe,l=An;switch(lt){case 8:mp(),s=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(e=!0);var c=lt;if(lt=0,An=null,Yr(t,o,l,c),n&&ws){s=0;break e}break;default:c=lt,lt=0,An=null,Yr(t,o,l,c)}}FM(),s=Nt;break}catch(d){K_(t,d)}while(!0);return e&&t.shellSuspendCounter++,Oi=pr=null,ct=i,Le.H=a,Le.A=r,Xe===null&&(vt=null,Ze=0,nu()),s}function FM(){for(;Xe!==null;)J_(Xe)}function HM(t,e){var n=ct;ct|=2;var i=Q_(),a=$_();vt!==t||Ze!==e?(Lc=null,Uc=fi()+500,gs(t,e)):ws=Bo(t,e);e:do try{if(lt!==0&&Xe!==null){e=Xe;var r=An;t:switch(lt){case 1:lt=0,An=null,Yr(t,e,r,1);break;case 2:case 9:if(Dm(r)){lt=0,An=null,tg(e);break}e=function(){lt!==2&&lt!==9||vt!==t||(lt=7),_i(t)},r.then(e,e);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Dm(r)?(lt=0,An=null,tg(e)):(lt=0,An=null,Yr(t,e,r,7));break;case 5:var s=null;switch(Xe.tag){case 26:s=Xe.memoizedState;case 5:case 27:var o=Xe;if(!s||_x(s)){lt=0,An=null;var l=o.sibling;if(l!==null)Xe=l;else{var c=o.return;c!==null?(Xe=c,cu(c)):Xe=null}break t}}lt=0,An=null,Yr(t,e,r,5);break;case 6:lt=0,An=null,Yr(t,e,r,6);break;case 8:mp(),Nt=6;break e;default:throw Error(J(462))}}GM();break}catch(d){K_(t,d)}while(!0);return Oi=pr=null,Le.H=i,Le.A=a,ct=n,Xe!==null?0:(vt=null,Ze=0,nu(),Nt)}function GM(){for(;Xe!==null&&!cS();)J_(Xe)}function J_(t){var e=C_(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,e===null?cu(t):Xe=e}function tg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ym(n,e,e.pendingProps,e.type,void 0,Ze);break;case 11:e=Ym(n,e,e.pendingProps,e.type.render,e.ref,Ze);break;case 5:tp(e);default:N_(n,e),e=Xe=Nv(e,Wi),e=C_(n,e,Wi)}t.memoizedProps=t.pendingProps,e===null?cu(t):Xe=e}function Yr(t,e,n,i){Oi=pr=null,tp(e),ns=null,Mo=0;var a=e.return;try{if(NM(t,a,e,n,Ze)){Nt=1,Cc(t,kn(n,t.current)),Xe=null;return}}catch(r){if(a!==null)throw Xe=a,r;Nt=1,Cc(t,kn(n,t.current)),Xe=null;return}e.flags&32768?(nt||i===1?t=!0:ws||Ze&536870912?t=!1:(ma=t=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),ex(e,t)):cu(e)}function cu(t){var e=t;do{if(e.flags&32768){ex(e,ma);return}t=e.return;var n=UM(e.alternate,e,Wi);if(n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);Nt===0&&(Nt=5)}function ex(t,e){do{var n=LM(t.alternate,t);if(n!==null){n.flags&=32767,Xe=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Xe=t;return}Xe=t=n}while(t!==null);Nt=6,Xe=null}function ng(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do uu();while(Kt!==0);if(ct&6)throw Error(J(327));if(e!==null){if(e===t.current)throw Error(J(177));if(r=e.lanes|e.childLanes,r|=Vh,xS(t,n,r,s,o,l),t===vt&&(Xe=vt=null,Ze=0),ms=e,Sa=t,is=n,_d=r,xd=a,q_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,XM(gc,function(){return rx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=it.p,it.p=2,s=ct,ct|=4;try{OM(t,e,n)}finally{ct=s,it.p=a,Le.T=i}}Kt=1,tx(),nx(),ix()}}function tx(){if(Kt===1){Kt=0;var t=Sa,e=ms,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=it.p;it.p=2;var a=ct;ct|=4;try{H_(e,t);var r=Td,s=Mv(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&Sv(o.ownerDocument.documentElement,o)){if(l!==null&&Gh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),m=l.end===void 0?S:Math.min(l.end,_);!p.extend&&S>m&&(s=m,m=S,S=s);var u=Em(o,S),g=Em(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var x=h.createRange();x.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(x),p.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),p.addRange(x))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var y=h[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Gc=!!bd,Td=bd=null}finally{ct=a,it.p=i,Le.T=n}}t.current=e,Kt=2}}function nx(){if(Kt===2){Kt=0;var t=Sa,e=ms,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=it.p;it.p=2;var a=ct;ct|=4;try{z_(t,e.alternate,e)}finally{ct=a,it.p=i,Le.T=n}}Kt=3}}function ix(){if(Kt===4||Kt===3){Kt=0,uS();var t=Sa,e=ms,n=is,i=q_;e.subtreeFlags&10256||e.flags&10256?Kt=5:(Kt=0,ms=Sa=null,ax(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(ya=null),Oh(n),e=e.stateNode,Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=it.p,it.p=2,Le.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Le.T=e,it.p=a}}is&3&&uu(),_i(t),a=t.pendingLanes,n&4194090&&a&42?t===yd?po++:(po=0,yd=t):po=0,Yo(0)}}function ax(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ko(e)))}function uu(t){return tx(),nx(),ix(),rx()}function rx(){if(Kt!==5)return!1;var t=Sa,e=_d;_d=0;var n=Oh(is),i=Le.T,a=it.p;try{it.p=32>n?32:n,Le.T=null,n=xd,xd=null;var r=Sa,s=is;if(Kt=0,ms=Sa=null,is=0,ct&6)throw Error(J(331));var o=ct;if(ct|=4,X_(r.current),V_(r,r.current,s,n),ct=o,Yo(0,!1),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(zo,r)}catch{}return!0}finally{it.p=a,Le.T=i,ax(t,e)}}function ig(t,e,n){e=kn(n,e),e=hd(t.stateNode,e,2),t=xa(t,e,2),t!==null&&(Io(t,2),_i(t))}function mt(t,e,n){if(t.tag===3)ig(t,t,n);else for(;e!==null;){if(e.tag===3){ig(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))){t=kn(n,t),n=M_(2),i=xa(e,n,2),i!==null&&(E_(n,i,e,t),Io(i,2),_i(i));break}}e=e.return}}function Ku(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BM;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(dp=!0,a.add(n),t=VM.bind(null,t,e,n),e.then(t,t))}function VM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,vt===t&&(Ze&n)===n&&(Nt===4||Nt===3&&(Ze&62914560)===Ze&&300>fi()-pp?!(ct&2)&&gs(t,0):hp|=n,ps===Ze&&(ps=0)),_i(t)}function sx(t,e){e===0&&(e=tv()),t=As(t,e),t!==null&&(Io(t,e),_i(t))}function kM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sx(t,n)}function jM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(e),sx(t,n)}function XM(t,e){return Uh(t,e)}var Oc=null,zr=null,Md=!1,Pc=!1,Qu=!1,ar=0;function _i(t){t!==zr&&t.next===null&&(zr===null?Oc=zr=t:zr=zr.next=t),Pc=!0,Md||(Md=!0,qM())}function Yo(t,e){if(!Qu&&Pc){Qu=!0;do for(var n=!1,i=Oc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Nn(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,ag(i,r))}else r=Ze,r=$c(i,i===vt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Bo(i,r)||(n=!0,ag(i,r));i=i.next}while(n);Qu=!1}}function WM(){ox()}function ox(){Pc=Md=!1;var t=0;ar!==0&&(tE()&&(t=ar),ar=0);for(var e=fi(),n=null,i=Oc;i!==null;){var a=i.next,r=lx(i,e);r===0?(i.next=null,n===null?Oc=a:n.next=a,a===null&&(zr=n)):(n=i,(t!==0||r&3)&&(Pc=!0)),i=a}Yo(t)}function lx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Nn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=_S(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=vt,n=Ze,n=$c(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Eu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Bo(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Eu(i),Oh(n)){case 2:case 8:n=$0;break;case 32:n=gc;break;case 268435456:n=J0;break;default:n=gc}return i=cx.bind(null,t),n=Uh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Eu(i),t.callbackPriority=2,t.callbackNode=null,2}function cx(t,e){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(uu()&&t.callbackNode!==n)return null;var i=Ze;return i=$c(t,t===vt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Z_(t,i,e),lx(t,fi()),t.callbackNode!=null&&t.callbackNode===n?cx.bind(null,t):null)}function ag(t,e){if(uu())return null;Z_(t,e,!0)}function qM(){iE(function(){ct&6?Uh(Q0,WM):ox()})}function gp(){return ar===0&&(ar=ev()),ar}function rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(""+t)}function sg(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function YM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=rg((a[_n]||null).action),s=i.submitter;s&&(e=(e=s[_n]||null)?rg(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Jc("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ar!==0){var l=s?sg(a,s):new FormData(a);fd(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?sg(a,s):new FormData(a),fd(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var $u=0;$u<Jf.length;$u++){var Ju=Jf[$u],ZM=Ju.toLowerCase(),KM=Ju[0].toUpperCase()+Ju.slice(1);ai(ZM,"on"+KM)}ai(bv,"onAnimationEnd");ai(Tv,"onAnimationIteration");ai(Av,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(hM,"onTransitionRun");ai(pM,"onTransitionStart");ai(mM,"onTransitionCancel");ai(wv,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function ux(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){Rc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){Rc(d)}a.currentTarget=null,r=l}}}}function je(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var i=t+"__bubble";n.has(i)||(fx(e,t,2,!1),n.add(i))}function ef(t,e,n){var i=0;e&&(i|=4),fx(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function vp(t){if(!t[xl]){t[xl]=!0,rv.forEach(function(n){n!=="selectionchange"&&(QM.has(n)||ef(n,!1,t),ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,ef("selectionchange",!1,e))}}function fx(t,e,n,i){switch(Ex(e)){case 2:var a=bE;break;case 8:a=TE;break;default:a=Sp}n=a.bind(null,e,n,t),a=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function tf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Fr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}hv(function(){var c=r,d=Bh(n),h=[];e:{var f=Rv.get(t);if(f!==void 0){var p=Jc,_=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":p=XS;break;case"focusin":_="focus",p=Du;break;case"focusout":_="blur",p=Du;break;case"beforeblur":case"afterblur":p=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YS;break;case bv:case Tv:case Av:p=zS;break;case wv:p=KS;break;case"scroll":case"scrollend":p=DS;break;case"wheel":p=$S;break;case"copy":case"cut":case"paste":p=IS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mm;break;case"toggle":case"beforetoggle":p=eM}var S=(e&4)!==0,m=!S&&(t==="scroll"||t==="scrollend"),u=S?f!==null?f+"Capture":null:f;S=[];for(var g=c,x;g!==null;){var y=g;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||u===null||(y=vo(g,u),y!=null&&S.push(bo(g,y,x))),m)break;g=g.return}0<S.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Zf&&(_=n.relatedTarget||n.fromElement)&&(Fr(_)||_[bs]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Fr(_):null,_!==null&&(m=Po(_),S=_.tag,_!==m||S!==5&&S!==27&&S!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=hm,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=mm,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Qs(p),x=_==null?f:Qs(_),f=new S(y,g+"leave",p,n,d),f.target=m,f.relatedTarget=x,y=null,Fr(d)===c&&(S=new S(u,g+"enter",_,n,d),S.target=x,S.relatedTarget=m,y=S),m=y,p&&_)t:{for(S=p,u=_,g=0,x=S;x;x=_r(x))g++;for(x=0,y=u;y;y=_r(y))x++;for(;0<g-x;)S=_r(S),g--;for(;0<x-g;)u=_r(u),x--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=_r(S),u=_r(u)}S=null}else S=null;p!==null&&og(h,f,p,S,!1),_!==null&&m!==null&&og(h,m,_,S,!0)}}e:{if(f=c?Qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=xm;else if(_m(f))if(xv)R=uM;else{R=lM;var A=oM}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&zh(c.elementType)&&(R=xm):R=cM;if(R&&(R=R(t,c))){_v(h,R,n,d);break e}A&&A(t,f,c),t==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Yf(f,"number",f.value)}switch(A=c?Qs(c):window,t){case"focusin":(_m(A)||A.contentEditable==="true")&&(Vr=A,Qf=c,io=null);break;case"focusout":io=Qf=Vr=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,bm(h,n,d);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":bm(h,n,d)}var w;if(Hh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Gr?gv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(mv&&n.locale!=="ko"&&(Gr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Gr&&(w=pv()):(pa=d,Ih="value"in pa?pa.value:pa.textContent,Gr=!0)),A=zc(c,N),0<A.length&&(N=new pm(N,t,null,n,d),h.push({event:N,listeners:A}),w?N.data=w:(w=vv(n),w!==null&&(N.data=w)))),(w=nM?iM(t,n):aM(t,n))&&(N=zc(c,"onBeforeInput"),0<N.length&&(A=new pm("onBeforeInput","beforeinput",null,n,d),h.push({event:A,listeners:N}),A.data=w)),YM(h,t,c,n,d)}ux(h,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=vo(t,n),a!=null&&i.unshift(bo(t,a,r)),a=vo(t,e),a!=null&&i.push(bo(t,a,r))),t.tag===3)return i;t=t.return}return[]}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function og(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=vo(n,r),c!=null&&s.unshift(bo(n,c,l))):a||(c=vo(n,r),c!=null&&s.push(bo(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $M=/\r\n?/g,JM=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace($M,`
`).replace(JM,"")}function dx(t,e){return e=lg(e),lg(t)===e}function fu(){}function dt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||cs(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&cs(t,""+i);break;case"className":dl(t,"class",i);break;case"tabIndex":dl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(t,n,i);break;case"style":dv(t,i,r);break;case"data":if(e!=="object"){dl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ql(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&dt(t,e,"name",a.name,a,null),dt(t,e,"formEncType",a.formEncType,a,null),dt(t,e,"formMethod",a.formMethod,a,null),dt(t,e,"formTarget",a.formTarget,a,null)):(dt(t,e,"encType",a.encType,a,null),dt(t,e,"method",a.method,a,null),dt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ql(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=fu);break;case"onScroll":i!=null&&je("scroll",t);break;case"onScrollEnd":i!=null&&je("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=ql(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":je("beforetoggle",t),je("toggle",t),Wl(t,"popover",i);break;case"xlinkActuate":Si(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Si(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Si(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Si(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Si(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Si(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Si(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Si(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Si(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=CS.get(n)||n,Wl(t,n,i))}}function Ed(t,e,n,i,a,r){switch(n){case"style":dv(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));t.innerHTML=n}}break;case"children":typeof i=="string"?cs(t,i):(typeof i=="number"||typeof i=="bigint")&&cs(t,""+i);break;case"onScroll":i!=null&&je("scroll",t);break;case"onScrollEnd":i!=null&&je("scrollend",t);break;case"onClick":i!=null&&(t.onclick=fu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[_n]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Wl(t,n,i)}}}function Qt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",t),je("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,e));default:dt(t,e,r,s,n,null)}}a&&dt(t,e,"srcSet",n.srcSet,n,null),i&&dt(t,e,"src",n.src,n,null);return;case"input":je("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,e));break;default:dt(t,e,i,d,n,null)}}cv(t,r,o,l,c,s,a,!1),vc(t);return;case"select":je("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:dt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Qr(t,!!i,e,!1):n!=null&&Qr(t,!!i,n,!0);return;case"textarea":je("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:dt(t,e,s,o,n,null)}fv(t,i,a,r),vc(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:dt(t,e,l,i,n,null)}return;case"dialog":je("beforetoggle",t),je("toggle",t),je("cancel",t),je("close",t);break;case"iframe":case"object":je("load",t);break;case"video":case"audio":for(i=0;i<Eo.length;i++)je(Eo[i],t);break;case"image":je("error",t),je("load",t);break;case"details":je("toggle",t);break;case"embed":case"source":case"link":je("error",t),je("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,e));default:dt(t,e,c,i,n,null)}return;default:if(zh(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Ed(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&dt(t,e,o,i,n,null))}function eE(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||dt(t,e,p,null,i,h)}}for(var f in i){var p=i[f];if(h=n[f],i.hasOwnProperty(f)&&(p!=null||h!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,e));break;default:p!==h&&dt(t,e,f,p,i,h)}}qf(t,s,o,l,c,d,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||dt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&dt(t,e,a,r,i,l)}e=o,n=s,i=p,f!=null?Qr(t,!!n,f,!1):!!i!=!!n&&(e!=null?Qr(t,!!n,e,!0):Qr(t,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:dt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==r&&dt(t,e,s,a,i,r)}uv(t,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:dt(t,e,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:dt(t,e,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&dt(t,e,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,e));break;default:dt(t,e,c,f,i,p)}return;default:if(zh(e)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Ed(t,e,m,void 0,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||Ed(t,e,d,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&dt(t,e,u,null,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f==null&&p==null||dt(t,e,h,f,i,p)}var bd=null,Td=null;function Bc(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hx(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=null;function tE(){var t=window.event;return t&&t.type==="popstate"?t===nf?!1:(nf=t,!0):(nf=null,!1)}var px=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(aE)}:px;function aE(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function fg(t,e){var n=e,i=0,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=t.ownerDocument;if(n&1&&mo(s.documentElement),n&2&&mo(s.body),n&4)for(n=s.head,mo(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Fo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){t.removeChild(r),Co(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);Co(e)}function wd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wd(n),Ph(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function rE(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Fo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=ni(t.nextSibling),t===null)break}return null}function sE(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ni(t.nextSibling),t===null))return null;return t}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function oE(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Cd=null;function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function mx(t,e,n){switch(e=Bc(n),t){case"html":if(t=e.documentElement,!t)throw Error(J(452));return t;case"head":if(t=e.head,!t)throw Error(J(453));return t;case"body":if(t=e.body,!t)throw Error(J(454));return t;default:throw Error(J(451))}}function mo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ph(t)}var Wn=new Map,hg=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=it.d;it.d={f:lE,r:cE,D:uE,C:fE,L:dE,m:hE,X:mE,S:pE,M:gE};function lE(){var t=Yi.f(),e=lu();return t||e}function cE(t){var e=Ts(t);e!==null&&e.tag===5&&e.type==="form"?l_(e):Yi.r(t)}var Rs=typeof document>"u"?null:document;function gx(t,e,n){var i=Rs;if(i&&typeof e=="string"&&e){var a=Vn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),hg.has(a)||(hg.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Qt(e,"link",t),Wt(e),i.head.appendChild(e)))}}function uE(t){Yi.D(t),gx("dns-prefetch",t,null)}function fE(t,e){Yi.C(t,e),gx("preconnect",t,e)}function dE(t,e,n){Yi.L(t,e,n);var i=Rs;if(i&&t&&e){var a='link[rel="preload"][as="'+Vn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Vn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Vn(n.imageSizes)+'"]')):a+='[href="'+Vn(t)+'"]';var r=a;switch(e){case"style":r=vs(t);break;case"script":r=Cs(t)}Wn.has(r)||(t=yt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Wn.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Zo(r))||e==="script"&&i.querySelector(Ko(r))||(e=i.createElement("link"),Qt(e,"link",t),Wt(e),i.head.appendChild(e)))}}function hE(t,e){Yi.m(t,e);var n=Rs;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Vn(i)+'"][href="'+Vn(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Cs(t)}if(!Wn.has(r)&&(t=yt({rel:"modulepreload",href:t},e),Wn.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ko(r)))return}i=n.createElement("link"),Qt(i,"link",t),Wt(i),n.head.appendChild(i)}}}function pE(t,e,n){Yi.S(t,e,n);var i=Rs;if(i&&t){var a=Kr(i).hoistableStyles,r=vs(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Zo(r)))o.loading=5;else{t=yt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Wn.get(r))&&_p(t,n);var l=s=i.createElement("link");Wt(l),Qt(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nc(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function mE(t,e){Yi.X(t,e);var n=Rs;if(n&&t){var i=Kr(n).hoistableScripts,a=Cs(t),r=i.get(a);r||(r=n.querySelector(Ko(a)),r||(t=yt({src:t,async:!0},e),(e=Wn.get(a))&&xp(t,e),r=n.createElement("script"),Wt(r),Qt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function gE(t,e){Yi.M(t,e);var n=Rs;if(n&&t){var i=Kr(n).hoistableScripts,a=Cs(t),r=i.get(a);r||(r=n.querySelector(Ko(a)),r||(t=yt({src:t,async:!0,type:"module"},e),(e=Wn.get(a))&&xp(t,e),r=n.createElement("script"),Wt(r),Qt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function pg(t,e,n,i){var a=(a=va.current)?Ic(a):null;if(!a)throw Error(J(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=vs(n.href),n=Kr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=vs(n.href);var r=Kr(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(Zo(t)))&&!r._p&&(s.instance=r,s.state.loading=5),Wn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wn.set(t,n),r||vE(a,t,n,s.state))),e&&i===null)throw Error(J(528,""));return s}if(e&&i!==null)throw Error(J(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Cs(n),n=Kr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,t))}}function vs(t){return'href="'+Vn(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function vx(t){return yt({},t,{"data-precedence":t.precedence,precedence:null})}function vE(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Qt(e,"link",n),Wt(e),t.head.appendChild(e))}function Cs(t){return'[src="'+Vn(t)+'"]'}function Ko(t){return"script[async]"+t}function mg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Vn(n.href)+'"]');if(i)return e.instance=i,Wt(i),i;var a=yt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Wt(i),Qt(i,"style",a),nc(i,n.precedence,t),e.instance=i;case"stylesheet":a=vs(n.href);var r=t.querySelector(Zo(a));if(r)return e.state.loading|=4,e.instance=r,Wt(r),r;i=vx(n),(a=Wn.get(a))&&_p(i,a),r=(t.ownerDocument||t).createElement("link"),Wt(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Qt(r,"link",i),e.state.loading|=4,nc(r,n.precedence,t),e.instance=r;case"script":return r=Cs(n.src),(a=t.querySelector(Ko(r)))?(e.instance=a,Wt(a),a):(i=n,(a=Wn.get(r))&&(i=yt({},n),xp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Wt(a),Qt(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(J(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,nc(i,n.precedence,t));return e.instance}function nc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function _p(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ic=null;function gg(t,e,n){if(ic===null){var i=new Map,a=ic=new Map;a.set(n,i)}else a=ic,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Fo]||r[en]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function vg(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function _E(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function _x(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var To=null;function xE(){}function yE(t,e,n){if(To===null)throw Error(J(475));var i=To;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=vs(n.href),r=t.querySelector(Zo(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=Fc.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,Wt(r);return}r=t.ownerDocument||t,n=vx(n),(a=Wn.get(a))&&_p(n,a),r=r.createElement("link"),Wt(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Qt(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=Fc.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function SE(){if(To===null)throw Error(J(475));var t=To;return t.stylesheets&&t.count===0&&Nd(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Nd(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Fc(){if(this.count--,this.count===0){if(this.stylesheets)Nd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hc=null;function Nd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hc=new Map,e.forEach(ME,t),Hc=null,Fc.call(t))}function ME(t,e){if(!(e.state.loading&4)){var n=Hc.get(t);if(n)var i=n.get(null);else{n=new Map,Hc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Fc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ao={$$typeof:Di,Provider:null,Consumer:null,_currentValue:$a,_currentValue2:$a,_threadCount:0};function EE(t,e,n,i,a,r,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function xx(t,e,n,i,a,r,s,o,l,c,d,h){return t=new EE(t,e,n,s,o,l,c,h),e=1,r===!0&&(e|=24),r=Rn(3,null,null,e),t.current=r,r.stateNode=t,e=qh(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},Zh(r),t}function yx(t){return t?(t=Xr,t):Xr}function Sx(t,e,n,i,a,r){a=yx(a),i.context===null?i.context=a:i.pendingContext=a,i=_a(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=xa(t,i,e),n!==null&&(Un(n,t,e),so(n,t,e))}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function Mx(t){if(t.tag===13){var e=As(t,67108864);e!==null&&Un(e,t,67108864),yp(t,67108864)}}var Gc=!0;function bE(t,e,n,i){var a=Le.T;Le.T=null;var r=it.p;try{it.p=2,Sp(t,e,n,i)}finally{it.p=r,Le.T=a}}function TE(t,e,n,i){var a=Le.T;Le.T=null;var r=it.p;try{it.p=8,Sp(t,e,n,i)}finally{it.p=r,Le.T=a}}function Sp(t,e,n,i){if(Gc){var a=Dd(i);if(a===null)tf(t,e,i,Vc,n),xg(t,i);else if(wE(a,t,e,n,i))i.stopPropagation();else if(xg(t,i),e&4&&-1<AE.indexOf(t)){for(;a!==null;){var r=Ts(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=ka(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Nn(s);o.entanglements[1]|=l,s&=~l}_i(r),!(ct&6)&&(Uc=fi()+500,Yo(0))}}break;case 13:o=As(r,2),o!==null&&Un(o,r,2),lu(),yp(r,2)}if(r=Dd(i),r===null&&tf(t,e,i,Vc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else tf(t,e,i,null,n)}}function Dd(t){return t=Bh(t),Mp(t)}var Vc=null;function Mp(t){if(Vc=null,t=Fr(t),t!==null){var e=Po(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Vc=t,null}function Ex(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fS()){case Q0:return 2;case $0:return 8;case gc:case dS:return 32;case J0:return 268435456;default:return 32}default:return 32}}var Ud=!1,Ma=null,Ea=null,ba=null,wo=new Map,Ro=new Map,fa=[],AE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,e){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Vs(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Ts(e),e!==null&&Mx(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function wE(t,e,n,i,a){switch(e){case"focusin":return Ma=Vs(Ma,t,e,n,i,a),!0;case"dragenter":return Ea=Vs(Ea,t,e,n,i,a),!0;case"mouseover":return ba=Vs(ba,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return wo.set(r,Vs(wo.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Ro.set(r,Vs(Ro.get(r)||null,t,e,n,i,a)),!0}return!1}function bx(t){var e=Fr(t.target);if(e!==null){var n=Po(e);if(n!==null){if(e=n.tag,e===13){if(e=q0(n),e!==null){t.blockedOn=e,yS(t.priority,function(){if(n.tag===13){var i=Dn();i=Lh(i);var a=As(n,i);a!==null&&Un(a,n,i),yp(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Ts(n),e!==null&&Mx(e),t.blockedOn=n,!1;e.shift()}return!0}function yg(t,e,n){ac(t)&&n.delete(e)}function RE(){Ud=!1,Ma!==null&&ac(Ma)&&(Ma=null),Ea!==null&&ac(Ea)&&(Ea=null),ba!==null&&ac(ba)&&(ba=null),wo.forEach(yg),Ro.forEach(yg)}function yl(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,RE)))}var Sl=null;function Sg(t){Sl!==t&&(Sl=t,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,function(){Sl===t&&(Sl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Mp(i||n)===null)continue;break}var r=Ts(n);r!==null&&(t.splice(e,3),e-=3,fd(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Co(t){function e(l){return yl(l,t)}Ma!==null&&yl(Ma,t),Ea!==null&&yl(Ea,t),ba!==null&&yl(ba,t),wo.forEach(e),Ro.forEach(e);for(var n=0;n<fa.length;n++){var i=fa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)bx(n),n.blockedOn===null&&fa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[_n]||null;if(typeof r=="function")s||Sg(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[_n]||null)o=s.formAction;else if(Mp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Sg(n)}}}function Ep(t){this._internalRoot=t}du.prototype.render=Ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));var n=e.current,i=Dn();Sx(n,i,t,e,null,null)};du.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sx(t.current,2,null,t,null,null),lu(),e[bs]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fa.length&&e!==0&&e<fa[n].priority;n++);fa.splice(n,0,t),n===0&&bx(t)}};var Mg=X0.version;if(Mg!=="19.1.0")throw Error(J(527,Mg,"19.1.0"));it.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=aS(e),t=t!==null?Y0(t):null,t=t===null?null:t.stateNode,t};var CE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{zo=Ml.inject(CE),Cn=Ml}catch{}}Kc.createRoot=function(t,e){if(!W0(t))throw Error(J(299));var n=!1,i="",a=x_,r=y_,s=S_,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=xx(t,1,!1,null,null,n,i,a,r,s,o,null),t[bs]=e.current,vp(t),new Ep(e)};Kc.hydrateRoot=function(t,e,n){if(!W0(t))throw Error(J(299));var i=!1,a="",r=x_,s=y_,o=S_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=xx(t,1,!0,e,n??null,i,a,r,s,o,l,c),e.context=yx(null),n=e.current,i=Dn(),i=Lh(i),a=_a(i),a.callback=null,xa(n,a,i),n=i,e.current.lanes=n,Io(e,n),_i(e),t[bs]=e.current,vp(t),new du(e)};Kc.version="19.1.0";function Tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx)}catch(t){console.error(t)}}Tx(),F0.exports=Kc;var NE=F0.exports;const DE=C0(NE);var bp={};Object.defineProperty(bp,"__esModule",{value:!0});bp.parse=IE;bp.serialize=FE;const UE=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,LE=/^[\u0021-\u003A\u003C-\u007E]*$/,OE=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,PE=/^[\u0020-\u003A\u003D-\u007E]*$/,zE=Object.prototype.toString,BE=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function IE(t,e){const n=new BE,i=t.length;if(i<2)return n;const a=(e==null?void 0:e.decode)||HE;let r=0;do{const s=t.indexOf("=",r);if(s===-1)break;const o=t.indexOf(";",r),l=o===-1?i:o;if(s>l){r=t.lastIndexOf(";",s-1)+1;continue}const c=Eg(t,r,s),d=bg(t,s,c),h=t.slice(c,d);if(n[h]===void 0){let f=Eg(t,s+1,l),p=bg(t,l,f);const _=a(t.slice(f,p));n[h]=_}r=l+1}while(r<i);return n}function Eg(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function bg(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function FE(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!UE.test(t))throw new TypeError(`argument name is invalid: ${t}`);const a=i(e);if(!LE.test(a))throw new TypeError(`argument val is invalid: ${e}`);let r=t+"="+a;if(!n)return r;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);r+="; Max-Age="+n.maxAge}if(n.domain){if(!OE.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);r+="; Domain="+n.domain}if(n.path){if(!PE.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);r+="; Path="+n.path}if(n.expires){if(!GE(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.partitioned&&(r+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return r}function HE(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function GE(t){return zE.call(t)==="[object Date]"}var Tg="popstate";function VE(t={}){function e(i,a){let{pathname:r,search:s,hash:o}=i.location;return Ld("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:No(a)}return jE(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kE(){return Math.random().toString(36).substring(2,10)}function Ag(t,e){return{usr:t.state,key:t.key,idx:e}}function Ld(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ns(e):e,state:n,key:e&&e.key||i||kE()}}function No({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function jE(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o="POP",l=null,c=d();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function d(){return(s.state||{idx:null}).idx}function h(){o="POP";let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:S.location,delta:u})}function f(m,u){o="PUSH";let g=Ld(S.location,m,u);c=d()+1;let x=Ag(g,c),y=S.createHref(g);try{s.pushState(x,"",y)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(y)}r&&l&&l({action:o,location:S.location,delta:1})}function p(m,u){o="REPLACE";let g=Ld(S.location,m,u);c=d();let x=Ag(g,c),y=S.createHref(g);s.replaceState(x,"",y),r&&l&&l({action:o,location:S.location,delta:0})}function _(m){return XE(m)}let S={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Tg,h),l=m,()=>{a.removeEventListener(Tg,h),l=null}},createHref(m){return e(a,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:p,go(m){return s.go(m)}};return S}function XE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),wt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:No(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Ax(t,e,n="/"){return WE(t,e,n,!1)}function WE(t,e,n,i){let a=typeof e=="string"?Ns(e):e,r=qi(a.pathname||"/",n);if(r==null)return null;let s=wx(t);qE(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=ab(r);o=nb(s[l],c,i)}return o}function wx(t,e=[],n=[],i=""){let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(wt(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=Hi([i,l.relativePath]),d=n.concat(l);r.children&&r.children.length>0&&(wt(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),wx(r.children,e,d,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:eb(c,r.index),routesMeta:d})};return t.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of Rx(r.path))a(r,s,l)}),e}function Rx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=Rx(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function qE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tb(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var YE=/^:[\w-]+$/,ZE=3,KE=2,QE=1,$E=10,JE=-2,wg=t=>t==="*";function eb(t,e){let n=t.split("/"),i=n.length;return n.some(wg)&&(i+=JE),e&&(i+=KE),n.filter(a=>!wg(a)).reduce((a,r)=>a+(YE.test(r)?ZE:r===""?QE:$E),i)}function tb(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function nb(t,e,n=!1){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=r==="/"?e:e.slice(r.length)||"/",h=kc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=kc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:Hi([r,h.pathname]),pathnameBase:lb(Hi([r,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(r=Hi([r,h.pathnameBase]))}return s}function kc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ib(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,{paramName:d,isOptional:h},f)=>{if(d==="*"){let _=o[f]||"";s=r.slice(0,r.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[f];return h&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:t}}function ib(t,e=!1,n=!0){pi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function ab(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function qi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function rb(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Ns(t):t;return{pathname:n?n.startsWith("/")?n:sb(n,e):e,search:cb(i),hash:ub(a)}}function sb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function af(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ob(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cx(t){let e=ob(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Nx(t,e,n,i=!1){let a;typeof t=="string"?a=Ns(t):(a={...t},wt(!a.pathname||!a.pathname.includes("?"),af("?","pathname","search",a)),wt(!a.pathname||!a.pathname.includes("#"),af("#","pathname","hash",a)),wt(!a.search||!a.search.includes("#"),af("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let h=e.length-1;if(!i&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;a.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=rb(a,o),c=s&&s!=="/"&&s.endsWith("/"),d=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var Hi=t=>t.join("/").replace(/\/\/+/g,"/"),lb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ub=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Dx=["POST","PUT","PATCH","DELETE"];new Set(Dx);var db=["GET",...Dx];new Set(db);var Ds=G.createContext(null);Ds.displayName="DataRouter";var hu=G.createContext(null);hu.displayName="DataRouterState";var Ux=G.createContext({isTransitioning:!1});Ux.displayName="ViewTransition";var hb=G.createContext(new Map);hb.displayName="Fetchers";var pb=G.createContext(null);pb.displayName="Await";var xi=G.createContext(null);xi.displayName="Navigation";var Qo=G.createContext(null);Qo.displayName="Location";var Zi=G.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var Tp=G.createContext(null);Tp.displayName="RouteError";function mb(t,{relative:e}={}){wt($o(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=G.useContext(xi),{hash:a,pathname:r,search:s}=Jo(t,{relative:e}),o=r;return n!=="/"&&(o=r==="/"?n:Hi([n,r])),i.createHref({pathname:o,search:s,hash:a})}function $o(){return G.useContext(Qo)!=null}function mr(){return wt($o(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Qo).location}var Lx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ox(t){G.useContext(xi).static||G.useLayoutEffect(t)}function gb(){let{isDataRoute:t}=G.useContext(Zi);return t?Cb():vb()}function vb(){wt($o(),"useNavigate() may be used only in the context of a <Router> component.");let t=G.useContext(Ds),{basename:e,navigator:n}=G.useContext(xi),{matches:i}=G.useContext(Zi),{pathname:a}=mr(),r=JSON.stringify(Cx(i)),s=G.useRef(!1);return Ox(()=>{s.current=!0}),G.useCallback((l,c={})=>{if(pi(s.current,Lx),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=Nx(l,JSON.parse(r),a,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Hi([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,r,a,t])}G.createContext(null);function Jo(t,{relative:e}={}){let{matches:n}=G.useContext(Zi),{pathname:i}=mr(),a=JSON.stringify(Cx(n));return G.useMemo(()=>Nx(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function _b(t,e){return Px(t,e)}function Px(t,e,n,i){var u;wt($o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=G.useContext(xi),{matches:r}=G.useContext(Zi),s=r[r.length-1],o=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let g=d&&d.path||"";zx(l,!d||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=mr(),f;if(e){let g=typeof e=="string"?Ns(e):e;wt(c==="/"||((u=g.pathname)==null?void 0:u.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=h;let p=f.pathname||"/",_=p;if(c!=="/"){let g=c.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let S=Ax(t,{pathname:_});pi(d||S!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),pi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=Eb(S&&S.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Hi([c,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Hi([c,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,n,i);return e&&m?G.createElement(Qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},m):m}function xb(){let t=Rb(),e=fb(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:r},"ErrorBoundary")," or"," ",G.createElement("code",{style:r},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),n?G.createElement("pre",{style:a},n):null,s)}var yb=G.createElement(xb,null),Sb=class extends G.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?G.createElement(Zi.Provider,{value:this.props.routeContext},G.createElement(Tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mb({routeContext:t,match:e,children:n}){let i=G.useContext(Ds);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Zi.Provider,{value:t},n)}function Eb(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,r=n==null?void 0:n.errors;if(r!=null){let l=a.findIndex(c=>c.route.id&&(r==null?void 0:r[c.route.id])!==void 0);wt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let s=!1,o=-1;if(n)for(let l=0;l<a.length;l++){let c=a[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:d,errors:h}=n,f=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!h||h[c.route.id]===void 0);if(c.route.lazy||f){s=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((l,c,d)=>{let h,f=!1,p=null,_=null;n&&(h=r&&c.route.id?r[c.route.id]:void 0,p=c.route.errorElement||yb,s&&(o<0&&d===0?(zx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,_=null):o===d&&(f=!0,_=c.route.hydrateFallbackElement||null)));let S=e.concat(a.slice(0,d+1)),m=()=>{let u;return h?u=p:f?u=_:c.route.Component?u=G.createElement(c.route.Component,null):c.route.element?u=c.route.element:u=l,G.createElement(Mb,{match:c,routeContext:{outlet:l,matches:S,isDataRoute:n!=null},children:u})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?G.createElement(Sb,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:m(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):m()},null)}function Ap(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bb(t){let e=G.useContext(Ds);return wt(e,Ap(t)),e}function Tb(t){let e=G.useContext(hu);return wt(e,Ap(t)),e}function Ab(t){let e=G.useContext(Zi);return wt(e,Ap(t)),e}function wp(t){let e=Ab(t),n=e.matches[e.matches.length-1];return wt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function wb(){return wp("useRouteId")}function Rb(){var i;let t=G.useContext(Tp),e=Tb("useRouteError"),n=wp("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function Cb(){let{router:t}=bb("useNavigate"),e=wp("useNavigate"),n=G.useRef(!1);return Ox(()=>{n.current=!0}),G.useCallback(async(a,r={})=>{pi(n.current,Lx),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...r}))},[t,e])}var Rg={};function zx(t,e,n){!e&&!Rg[t]&&(Rg[t]=!0,pi(!1,n))}G.memo(Nb);function Nb({routes:t,future:e,state:n}){return Px(t,void 0,n,e)}function Od(t){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Db({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:r=!1}){wt(!$o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),o=G.useMemo(()=>({basename:s,navigator:a,static:r,future:{}}),[s,a,r]);typeof n=="string"&&(n=Ns(n));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:f="default"}=n,p=G.useMemo(()=>{let _=qi(l,s);return _==null?null:{location:{pathname:_,search:c,hash:d,state:h,key:f},navigationType:i}},[s,l,c,d,h,f,i]);return pi(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:G.createElement(xi.Provider,{value:o},G.createElement(Qo.Provider,{children:e,value:p}))}function Ub({children:t,location:e}){return _b(Pd(t),e)}function Pd(t,e=[]){let n=[];return G.Children.forEach(t,(i,a)=>{if(!G.isValidElement(i))return;let r=[...e,a];if(i.type===G.Fragment){n.push.apply(n,Pd(i.props.children,r));return}wt(i.type===Od,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Pd(i.props.children,r)),n.push(s)}),n}var rc="get",sc="application/x-www-form-urlencoded";function pu(t){return t!=null&&typeof t.tagName=="string"}function Lb(t){return pu(t)&&t.tagName.toLowerCase()==="button"}function Ob(t){return pu(t)&&t.tagName.toLowerCase()==="form"}function Pb(t){return pu(t)&&t.tagName.toLowerCase()==="input"}function zb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bb(t,e){return t.button===0&&(!e||e==="_self")&&!zb(t)}var El=null;function Ib(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var Fb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rf(t){return t!=null&&!Fb.has(t)?(pi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sc}"`),null):t}function Hb(t,e){let n,i,a,r,s;if(Ob(t)){let o=t.getAttribute("action");i=o?qi(o,e):null,n=t.getAttribute("method")||rc,a=rf(t.getAttribute("enctype"))||sc,r=new FormData(t)}else if(Lb(t)||Pb(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?qi(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||rc,a=rf(t.getAttribute("formenctype"))||rf(o.getAttribute("enctype"))||sc,r=new FormData(o,t),!Ib()){let{name:c,type:d,value:h}=t;if(d==="image"){let f=c?`${c}.`:"";r.append(`${f}x`,"0"),r.append(`${f}y`,"0")}else c&&r.append(c,h)}}else{if(pu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=rc,i=null,a=sc,s=t}return r&&a==="text/plain"&&(s=r,r=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:r,body:s}}function Rp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Gb(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function kb(t,e,n){let i=await Promise.all(t.map(async a=>{let r=e.routes[a.route.id];if(r){let s=await Gb(r,n);return s.links?s.links():[]}return[]}));return qb(i.flat(1).filter(Vb).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Cg(t,e,n,i,a,r){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return r==="assets"?e.filter((l,c)=>s(l,c)||o(l,c)):r==="data"?e.filter((l,c)=>{var h;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(s(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function jb(t,e,{includeHydrateFallback:n}={}){return Xb(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function Xb(t){return[...new Set(t)]}function Wb(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function qb(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let r=JSON.stringify(Wb(a));return n.has(r)||(n.add(r),i.push({key:r,link:a})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yb=new Set([100,101,204,205]);function Zb(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&qi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Bx(){let t=G.useContext(Ds);return Rp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Kb(){let t=G.useContext(hu);return Rp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Cp=G.createContext(void 0);Cp.displayName="FrameworkContext";function Ix(){let t=G.useContext(Cp);return Rp(t,"You must render this element inside a <HydratedRouter> element"),t}function Qb(t,e){let n=G.useContext(Cp),[i,a]=G.useState(!1),[r,s]=G.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:h}=e,f=G.useRef(null);G.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let S=u=>{u.forEach(g=>{s(g.isIntersecting)})},m=new IntersectionObserver(S,{threshold:.5});return f.current&&m.observe(f.current),()=>{m.disconnect()}}},[t]),G.useEffect(()=>{if(i){let S=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(S)}}},[i]);let p=()=>{a(!0)},_=()=>{a(!1),s(!1)};return n?t!=="intent"?[r,f,{}]:[r,f,{onFocus:ks(o,p),onBlur:ks(l,_),onMouseEnter:ks(c,p),onMouseLeave:ks(d,_),onTouchStart:ks(h,p)}]:[!1,f,{}]}function ks(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function $b({page:t,...e}){let{router:n}=Bx(),i=G.useMemo(()=>Ax(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?G.createElement(e1,{page:t,matches:i,...e}):null}function Jb(t){let{manifest:e,routeModules:n}=Ix(),[i,a]=G.useState([]);return G.useEffect(()=>{let r=!1;return kb(t,e,n).then(s=>{r||a(s)}),()=>{r=!0}},[t,e,n]),i}function e1({page:t,matches:e,...n}){let i=mr(),{manifest:a,routeModules:r}=Ix(),{basename:s}=Bx(),{loaderData:o,matches:l}=Kb(),c=G.useMemo(()=>Cg(t,e,l,a,i,"data"),[t,e,l,a,i]),d=G.useMemo(()=>Cg(t,e,l,a,i,"assets"),[t,e,l,a,i]),h=G.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let _=new Set,S=!1;if(e.forEach(u=>{var x;let g=a.routes[u.route.id];!g||!g.hasLoader||(!c.some(y=>y.route.id===u.route.id)&&u.route.id in o&&((x=r[u.route.id])!=null&&x.shouldRevalidate)||g.hasClientLoader?S=!0:_.add(u.route.id))}),_.size===0)return[];let m=Zb(t,s);return S&&_.size>0&&m.searchParams.set("_routes",e.filter(u=>_.has(u.route.id)).map(u=>u.route.id).join(",")),[m.pathname+m.search]},[s,o,i,a,c,e,t,r]),f=G.useMemo(()=>jb(d,a),[d,a]),p=Jb(d);return G.createElement(G.Fragment,null,h.map(_=>G.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),f.map(_=>G.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),p.map(({key:_,link:S})=>G.createElement("link",{key:_,...S})))}function t1(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fx&&(window.__reactRouterVersion="7.6.3")}catch{}function n1({basename:t,children:e,window:n}){let i=G.useRef();i.current==null&&(i.current=VE({window:n,v5Compat:!0}));let a=i.current,[r,s]=G.useState({action:a.action,location:a.location}),o=G.useCallback(l=>{G.startTransition(()=>s(l))},[s]);return G.useLayoutEffect(()=>a.listen(o),[a,o]),G.createElement(Db,{basename:t,children:e,location:r.location,navigationType:r.action,navigator:a})}var Hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mu=G.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:r,replace:s,state:o,target:l,to:c,preventScrollReset:d,viewTransition:h,...f},p){let{basename:_}=G.useContext(xi),S=typeof c=="string"&&Hx.test(c),m,u=!1;if(typeof c=="string"&&S&&(m=c,Fx))try{let T=new URL(window.location.href),E=c.startsWith("//")?new URL(T.protocol+c):new URL(c),D=qi(E.pathname,_);E.origin===T.origin&&D!=null?c=D+E.search+E.hash:u=!0}catch{pi(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=mb(c,{relative:a}),[x,y,R]=Qb(i,f),A=s1(c,{replace:s,state:o,target:l,preventScrollReset:d,relative:a,viewTransition:h});function w(T){e&&e(T),T.defaultPrevented||A(T)}let N=G.createElement("a",{...f,...R,href:m||g,onClick:u||r?e:w,ref:t1(p,y),target:l,"data-discover":!S&&n==="render"?"true":void 0});return x&&!S?G.createElement(G.Fragment,null,N,G.createElement($b,{page:g})):N});mu.displayName="Link";var i1=G.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:r,to:s,viewTransition:o,children:l,...c},d){let h=Jo(s,{relative:c.relative}),f=mr(),p=G.useContext(hu),{navigator:_,basename:S}=G.useContext(xi),m=p!=null&&f1(h)&&o===!0,u=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,g=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),x=x?x.toLowerCase():null,u=u.toLowerCase()),x&&S&&(x=qi(x,S)||x);const y=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let R=g===u||!a&&g.startsWith(u)&&g.charAt(y)==="/",A=x!=null&&(x===u||!a&&x.startsWith(u)&&x.charAt(u.length)==="/"),w={isActive:R,isPending:A,isTransitioning:m},N=R?e:void 0,T;typeof i=="function"?T=i(w):T=[i,R?"active":null,A?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let E=typeof r=="function"?r(w):r;return G.createElement(mu,{...c,"aria-current":N,className:T,ref:d,style:E,to:s,viewTransition:o},typeof l=="function"?l(w):l)});i1.displayName="NavLink";var a1=G.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:r,method:s=rc,action:o,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:h,...f},p)=>{let _=c1(),S=u1(o,{relative:c}),m=s.toLowerCase()==="get"?"get":"post",u=typeof o=="string"&&Hx.test(o),g=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let y=x.nativeEvent.submitter,R=(y==null?void 0:y.getAttribute("formmethod"))||s;_(y||x.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:a,state:r,relative:c,preventScrollReset:d,viewTransition:h})};return G.createElement("form",{ref:p,method:m,action:S,onSubmit:i?l:g,...f,"data-discover":!u&&t==="render"?"true":void 0})});a1.displayName="Form";function r1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gx(t){let e=G.useContext(Ds);return wt(e,r1(t)),e}function s1(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:r,viewTransition:s}={}){let o=gb(),l=mr(),c=Jo(t,{relative:r});return G.useCallback(d=>{if(Bb(d,e)){d.preventDefault();let h=n!==void 0?n:No(l)===No(c);o(t,{replace:h,state:i,preventScrollReset:a,relative:r,viewTransition:s})}},[l,o,c,n,i,e,t,a,r,s])}var o1=0,l1=()=>`__${String(++o1)}__`;function c1(){let{router:t}=Gx("useSubmit"),{basename:e}=G.useContext(xi),n=wb();return G.useCallback(async(i,a={})=>{let{action:r,method:s,encType:o,formData:l,body:c}=Hb(i,e);if(a.navigate===!1){let d=a.fetcherKey||l1();await t.fetch(d,n,a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,flushSync:a.flushSync})}else await t.navigate(a.action||r,{preventScrollReset:a.preventScrollReset,formData:l,body:c,formMethod:a.method||s,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function u1(t,{relative:e}={}){let{basename:n}=G.useContext(xi),i=G.useContext(Zi);wt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),r={...Jo(t||".",{relative:e})},s=mr();if(t==null){r.search=s.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(h=>h).forEach(h=>o.append("index",h));let d=o.toString();r.search=d?`?${d}`:""}}return(!t||t===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:Hi([n,r.pathname])),No(r)}function f1(t,e={}){let n=G.useContext(Ux);wt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Gx("useViewTransitionState"),a=Jo(t,{relative:e.relative});if(!n.isTransitioning)return!1;let r=qi(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=qi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return kc(a.pathname,s)!=null||kc(a.pathname,r)!=null}[...Yb];/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Ng=t=>{const e=h1(t);return e.charAt(0).toUpperCase()+e.slice(1)},Vx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),p1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=G.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>G.createElement("svg",{ref:l,...m1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Vx("lucide",a),...!r&&!p1(o)&&{"aria-hidden":"true"},...o},[...s.map(([c,d])=>G.createElement(c,d)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=G.forwardRef(({className:i,...a},r)=>G.createElement(g1,{ref:r,iconNode:e,className:Vx(`lucide-${d1(Ng(t))}`,`lucide-${t}`,i),...a}));return n.displayName=Ng(t),n};/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_1=rt("arrow-right",v1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],zd=rt("box",x1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],S1=rt("building-2",y1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],E1=rt("camera",M1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fn=rt("check",b1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],A1=rt("circle-alert",T1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],jc=rt("circle-check-big",w1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],C1=rt("clock",R1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],D1=rt("cpu",N1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Np=rt("download",U1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],O1=rt("eye",L1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],kx=rt("folder",P1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],B1=rt("image",z1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],F1=rt("loader-circle",I1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],jx=rt("maximize-2",H1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],V1=rt("menu",G1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],j1=rt("minimize-2",k1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],W1=rt("move",X1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Y1=rt("play",q1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],K1=rt("rotate-ccw",Z1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$1=rt("search",Q1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],eT=rt("shield",J1);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],gu=rt("sparkles",tT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],iT=rt("star",nT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Bd=rt("trash-2",aT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Xx=rt("upload",rT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],oT=rt("users",sT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dp=rt("x",lT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Wx=rt("zap",cT);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],fT=rt("zoom-out",uT);function dT(){const[t,e]=G.useState(!1);return v.jsxs("header",{className:"bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50",children:[v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"flex justify-between items-center h-16",children:[v.jsx("div",{className:"flex items-center space-x-3",children:v.jsxs(mu,{to:"/",className:"flex items-center space-x-3 group",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105",children:v.jsx(gu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors",children:"Snap 3D"})]})}),v.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[v.jsx("button",{className:"text-gray-700 hover:text-blue-600 transition-colors font-medium",children:"Sign In"}),v.jsx("button",{className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Get Started"})]}),v.jsx("button",{className:"md:hidden text-gray-700",onClick:()=>e(!t),children:t?v.jsx(Dp,{className:"w-6 h-6"}):v.jsx(V1,{className:"w-6 h-6"})})]})}),t&&v.jsx("div",{className:"md:hidden bg-white border-t border-gray-200 shadow-lg",children:v.jsxs("div",{className:"px-4 py-2 space-y-2",children:[v.jsx("button",{className:"block w-full text-left py-3 text-gray-700 font-medium",children:"Sign In"}),v.jsx("button",{className:"block w-full bg-blue-600 text-white py-3 rounded-lg mt-2 font-medium",children:"Get Started"})]})})]})}function hT(){return v.jsx("footer",{className:"bg-gray-900 text-white py-12",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[v.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg",children:v.jsx(gu,{className:"w-6 h-6 text-white"})}),v.jsx("span",{className:"text-2xl font-bold",children:"Snap 3D"})]}),v.jsx("p",{className:"text-gray-400",children:"Transform your property images into professional 3D models with enterprise-grade AI technology."})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Product"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"API"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Careers"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),v.jsxs("ul",{className:"space-y-2 text-gray-400",children:[v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Help Center"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Status"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy"})}),v.jsx("li",{children:v.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms"})})]})]})]}),v.jsx("div",{className:"border-t border-gray-800 pt-8 mt-8 text-center text-gray-400",children:v.jsx("p",{children:"© 2025 Snap 3D. All rights reserved."})})]})})}function pT(){const[t,e]=G.useState(!1),n=[{icon:v.jsx(E1,{className:"w-8 h-8"}),title:"Professional Image Capture",description:"Guided multi-angle photography system for consistent, high-quality 3D reconstruction results",color:"from-blue-600 to-blue-700"},{icon:v.jsx(Xx,{className:"w-8 h-8"}),title:"Batch Processing",description:"Upload and process multiple property images simultaneously for efficient workflow management",color:"from-slate-600 to-slate-700"},{icon:v.jsx(Wx,{className:"w-8 h-8"}),title:"Enterprise AI Engine",description:"Advanced photogrammetry algorithms deliver precise 3D models with architectural accuracy",color:"from-blue-600 to-blue-700"},{icon:v.jsx(Np,{className:"w-8 h-8"}),title:"Industry-Standard Exports",description:"Export to OBJ, STL, PLY, and GLTF formats compatible with all major 3D software platforms",color:"from-slate-600 to-slate-700"}],i=[{name:"Michael Richardson",role:"CTO, PropertyTech Solutions",content:"Snap 3D has streamlined our property documentation process. The accuracy and speed of 3D model generation has improved our client deliverables significantly.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"},{name:"Sarah Chen",role:"Principal Architect, Design Corp",content:"The precision of the 3D models meets our professional standards. Integration with our existing CAD workflow has been seamless.",rating:5,avatar:"bg-gradient-to-br from-slate-500 to-slate-600"},{name:"David Martinez",role:"Director of Operations, BuildTech",content:"ROI was immediate. What used to take our team hours now takes minutes. The quality consistency across projects is exceptional.",rating:5,avatar:"bg-gradient-to-br from-blue-500 to-blue-600"}],a=[{number:"10,000+",label:"Properties Processed",icon:v.jsx(S1,{className:"w-6 h-6"})},{number:"500+",label:"Enterprise Clients",icon:v.jsx(oT,{className:"w-6 h-6"})},{number:"5 Min",label:"Average Processing Time",icon:v.jsx(C1,{className:"w-6 h-6"})},{number:"99.9%",label:"Uptime Guarantee",icon:v.jsx(eT,{className:"w-6 h-6"})}];return v.jsxs("div",{className:"min-h-screen bg-white",children:[v.jsx("section",{className:"bg-gradient-to-b from-gray-50 to-white py-20",children:v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"text-center",children:[v.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["Transform Property Images",v.jsx("span",{className:"block text-blue-600",children:"into Professional 3D Models"})]}),v.jsx("p",{className:"text-xl text-gray-600 mb-10 max-w-3xl mx-auto",children:"Enterprise-grade AI-powered photogrammetry solution for real estate professionals, architects, and construction companies. Generate accurate 3D models in minutes."}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[v.jsxs(mu,{to:"/generate",className:"inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300",children:[v.jsx(Y1,{className:"w-5 h-5"}),v.jsx("span",{children:"TRY IT NOW"})]}),v.jsxs("button",{className:"border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2",children:[v.jsx("span",{children:"Schedule Demo"}),v.jsx(_1,{className:"w-5 h-5"})]})]}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",children:a.map((r,s)=>v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"flex items-center justify-center mb-2",children:v.jsx("div",{className:"bg-blue-100 p-2 rounded-lg text-blue-600 mr-2",children:r.icon})}),v.jsx("div",{className:"text-3xl font-bold text-gray-900",children:r.number}),v.jsx("div",{className:"text-gray-600",children:r.label})]},s))})]})})}),v.jsx("section",{id:"features",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Enterprise-Grade Features"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Built for professional workflows and enterprise requirements"})]}),v.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((r,s)=>v.jsxs("div",{className:"text-center group hover:transform hover:scale-105 transition-all duration-300",children:[v.jsx("div",{className:`bg-gradient-to-r ${r.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`,children:r.icon}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:r.title}),v.jsx("p",{className:"text-gray-600",children:r.description})]},s))})]})}),v.jsx("section",{id:"how-it-works",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Streamlined Workflow"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Professional 3D model generation in three simple steps"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"1"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Capture & Upload"}),v.jsx("p",{className:"text-gray-600",children:"Use our guided capture system or upload existing property images following our optimization guidelines"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"2"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"AI Processing"}),v.jsx("p",{className:"text-gray-600",children:"Advanced photogrammetry algorithms analyze images and reconstruct detailed 3D geometry with texture mapping"})]}),v.jsxs("div",{className:"text-center group",children:[v.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110",children:"3"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Export & Integrate"}),v.jsx("p",{className:"text-gray-600",children:"Download industry-standard formats or integrate directly with your existing CAD and visualization workflows"})]})]})]})}),v.jsx("section",{id:"testimonials",className:"py-20 bg-white",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Trusted by Industry Leaders"}),v.jsx("p",{className:"text-xl text-gray-600",children:"See how professionals are transforming their workflows"})]}),v.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:i.map((r,s)=>v.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("div",{className:"flex mb-4",children:[...Array(r.rating)].map((o,l)=>v.jsx(iT,{className:"w-5 h-5 text-yellow-400 fill-current"},l))}),v.jsxs("p",{className:"text-gray-600 mb-4",children:['"',r.content,'"']}),v.jsxs("div",{className:"flex items-center space-x-3",children:[v.jsx("div",{className:`w-10 h-10 rounded-full ${r.avatar} flex items-center justify-center text-white font-bold`,children:r.name[0]}),v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-gray-900",children:r.name}),v.jsx("p",{className:"text-blue-600 text-sm",children:r.role})]})]})]},s))})]})}),v.jsx("section",{id:"pricing",className:"py-20 bg-gray-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-16",children:[v.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Flexible Pricing Plans"}),v.jsx("p",{className:"text-xl text-gray-600",children:"Choose the plan that scales with your business needs"})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Professional"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$49",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"25 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Standard export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Email support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Basic analytics"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border-2 border-blue-600 relative transform scale-105 shadow-lg",children:[v.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Most Popular"}),v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Business"}),v.jsxs("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:["$149",v.jsx("span",{className:"text-xl text-gray-500",children:"/month"})]}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"100 models per month"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"All export formats"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Priority support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Advanced analytics"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"API access"})]})]}),v.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm",children:"Start Free Trial"})]}),v.jsxs("div",{className:"bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg",children:[v.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Enterprise"}),v.jsx("p",{className:"text-4xl font-bold text-blue-600 mb-6",children:"Custom"}),v.jsxs("ul",{className:"space-y-3 mb-8",children:[v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Unlimited models"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"Custom integrations"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"24/7 dedicated support"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"SLA guarantees"})]}),v.jsxs("li",{className:"flex items-center space-x-3",children:[v.jsx(fn,{className:"w-5 h-5 text-green-500"}),v.jsx("span",{className:"text-gray-700",children:"On-premise deployment"})]})]}),v.jsx("button",{className:"w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium",children:"Contact Sales"})]})]})]})})]})}const Dg=({type:t,message:e,onClose:n})=>{const i=()=>{switch(t){case"error":return"bg-red-50 border-red-200 text-red-700";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-700";case"info":return"bg-blue-50 border-blue-200 text-blue-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},a=()=>{switch(t){case"error":return"text-red-500";case"warning":return"text-yellow-500";case"info":return"text-blue-500";default:return"text-gray-500"}};return v.jsxs("div",{className:`mb-6 border rounded-lg p-4 flex items-center space-x-3 ${i()}`,children:[v.jsx(A1,{className:`w-5 h-5 flex-shrink-0 ${a()}`}),v.jsx("p",{className:"flex-1",children:e}),n&&v.jsx("button",{onClick:n,className:`ml-auto transition-colors ${t==="error"?"text-red-500 hover:text-red-700":t==="warning"?"text-yellow-500 hover:text-yellow-700":"text-blue-500 hover:text-blue-700"}`,children:v.jsx(Dp,{className:"w-5 h-5"})})]})};function mT({selectedImages:t,setSelectedImages:e,selectedObjFiles:n,setSelectedObjFiles:i,uploadType:a,setUploadType:r,error:s,setError:o,onNext:l}){const c=Qy.useRef(null),d=p=>{const _=Array.from(p.target.files);if(a==="images"){const m=_.filter(u=>u.type.startsWith("image/")).map(u=>({file:u,url:URL.createObjectURL(u),name:u.name,size:u.size}));e(u=>[...u,...m])}else{const m=_.filter(u=>u.name.toLowerCase().endsWith(".obj")).map(u=>({file:u,name:u.name,size:u.size}));i(u=>[...u,...m])}o(null)},h=(p,_)=>{_==="images"?e(S=>S.filter((m,u)=>u!==p)):i(S=>S.filter((m,u)=>u!==p))},f=a==="images"&&t.length>=2||a==="import"&&n.length>=1;return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Create New 3D Model"}),v.jsx("p",{className:"text-gray-600",children:"Upload images or import existing 3D models to get started"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600",children:"Step 1 of 2"})]})})]})}),v.jsxs("div",{className:"p-8",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Choose Input Type"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[v.jsx("button",{onClick:()=>r("images"),className:`p-6 rounded-xl border-2 ${a==="images"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="images"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(B1,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"From Images"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Generate 3D model from photos"})]})]})}),v.jsx("button",{onClick:()=>r("import"),className:`p-6 rounded-xl border-2 ${a==="import"?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("div",{className:`p-3 rounded-lg ${a==="import"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"}`,children:v.jsx(zd,{className:"w-6 h-6"})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"font-semibold text-gray-900",children:"Import OBJ"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Use existing 3D model files"})]})]})})]})]}),v.jsx("label",{onClick:()=>{var p;return(p=c.current)==null?void 0:p.click()},className:"block mb-8 cursor-pointer",children:v.jsxs("div",{className:"border-2 border-dashed border-gray-300 p-12 rounded-2xl text-center hover:border-blue-500 hover:bg-blue-50",children:[v.jsx(Xx,{className:"w-8 h-8 text-blue-600 mx-auto mb-4"}),v.jsx("p",{className:"text-lg font-semibold",children:a==="images"?"Upload Images":"Upload OBJ Files"}),v.jsx("p",{className:"text-gray-600",children:a==="images"?"Minimum 2 images required":"Single OBJ required"})]})}),v.jsx("input",{ref:c,type:"file",multiple:!0,accept:a==="images"?"image/*":".obj",onChange:d,className:"hidden"}),a==="images"&&t.length>0&&v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",children:t.map((p,_)=>v.jsxs("div",{className:"relative group",children:[v.jsx("img",{src:p.url,className:"rounded-lg object-cover aspect-square"}),v.jsx("button",{onClick:()=>h(_,"images"),className:"absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white",children:v.jsx(Bd,{className:"w-4 h-4"})}),v.jsx("div",{className:"text-sm mt-1 text-gray-700 truncate",children:p.name})]},_))}),a==="import"&&n.length>0&&v.jsx("div",{className:"space-y-3 mb-8",children:n.map((p,_)=>v.jsxs("div",{className:"flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg",children:[v.jsx("span",{className:"text-sm",children:p.name}),v.jsx("button",{onClick:()=>h(_,"import"),className:"text-red-600",children:v.jsx(Bd,{className:"w-4 h-4"})})]},_))}),v.jsxs("div",{className:"border-t pt-6 mt-4 flex justify-between items-center",children:[v.jsx("div",{className:"text-sm text-gray-500",children:f?v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(jc,{className:"w-4 h-4"}),"Ready to continue"]}):a==="images"?`${t.length}/2 images required`:`${n.length}/1 OBJ required`}),v.jsx("button",{onClick:l,disabled:!f,className:`px-6 py-3 rounded-lg font-medium transition ${f?"bg-blue-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Continue to Generate"})]})]})]})})}function gT({uploadType:t,selectedImages:e,selectedObjFiles:n,modelName:i,setModelName:a,processor:r,setProcessor:s,isProcessing:o,processingStep:l,handleGenerate:c,backendUp:d,processingSteps:h}){return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsxs("div",{className:"border-b px-8 py-6 border-gray-200",children:[v.jsx("h1",{className:"text-3xl font-bold mb-2 text-gray-900",children:"Generate 3D Model"}),v.jsx("p",{className:"text-gray-600",children:t==="images"?`${e.length} images selected`:`${n.length} OBJ file(s) selected`})]}),v.jsxs("div",{className:"p-8 space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block mb-2 font-semibold",children:"Model Name"}),v.jsx("input",{value:i,onChange:f=>a(f.target.value),placeholder:"Enter model name...",className:"w-full px-4 py-3 border rounded-lg"})]}),t==="images"&&v.jsxs("div",{children:[v.jsx("label",{className:"block mb-2 font-semibold",children:"Select Processor"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["meshroom","open3d"].map(f=>v.jsx("button",{onClick:()=>s(f),className:`p-4 border-2 rounded-xl ${r===f?"border-purple-500 bg-purple-50":"border-gray-200"}`,children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:`p-2 rounded-lg ${r===f?"bg-purple-500 text-white":"bg-gray-100 text-gray-600"}`,children:f==="meshroom"?v.jsx(D1,{className:"w-5 h-5"}):v.jsx(Wx,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold capitalize",children:f}),v.jsx("div",{className:"text-xs text-gray-500",children:f==="meshroom"?"Photogrammetry based":"Point cloud based"})]})]})},f))})]}),o?v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"text-gray-800 font-semibold",children:"Processing..."}),v.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 overflow-hidden",children:v.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300",style:{width:`${(l+1)/h.length*100}%`}})}),v.jsxs("div",{className:"text-sm text-gray-500 flex items-center gap-2",children:[v.jsx(F1,{className:"w-4 h-4 animate-spin"}),h[l]]})]}):v.jsxs("div",{className:"flex justify-between items-center pt-4 border-t",children:[v.jsxs("div",{className:"text-green-600 flex items-center gap-2",children:[v.jsx(jc,{className:"w-5 h-5"}),"Ready to ",t==="images"?"Generate":"Import"]}),v.jsx("button",{onClick:c,className:"px-6 py-3 rounded-lg bg-purple-600 text-white font-medium shadow hover:bg-purple-700",children:t==="images"?"Generate Model":"Import Model"})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="178",vT=0,Ug=1,_T=2,qx=1,Lp=2,Ci=3,Na=0,gn=1,$n=2,Ta=0,as=1,Lg=2,Og=3,Pg=4,xT=5,Ya=100,yT=101,ST=102,MT=103,ET=104,bT=200,TT=201,AT=202,wT=203,Id=204,Fd=205,RT=206,CT=207,NT=208,DT=209,UT=210,LT=211,OT=212,PT=213,zT=214,Hd=0,Gd=1,Vd=2,_s=3,kd=4,jd=5,Xd=6,Wd=7,Op=0,BT=1,IT=2,Aa=0,FT=1,HT=2,GT=3,VT=4,kT=5,jT=6,XT=7,Yx=300,xs=301,ys=302,qd=303,Yd=304,vu=306,Zd=1e3,Ka=1001,Kd=1002,ii=1003,WT=1004,bl=1005,ci=1006,sf=1007,Qa=1008,mi=1009,Zx=1010,Kx=1011,Do=1012,Pp=1013,cr=1014,zi=1015,el=1016,zp=1017,Bp=1018,Uo=1020,Qx=35902,$x=1021,Jx=1022,ei=1023,Lo=1026,Oo=1027,ey=1028,Ip=1029,ty=1030,Fp=1031,Hp=1033,oc=33776,lc=33777,cc=33778,uc=33779,Qd=35840,$d=35841,Jd=35842,eh=35843,th=36196,nh=37492,ih=37496,ah=37808,rh=37809,sh=37810,oh=37811,lh=37812,ch=37813,uh=37814,fh=37815,dh=37816,hh=37817,ph=37818,mh=37819,gh=37820,vh=37821,fc=36492,_h=36494,xh=36495,ny=36283,yh=36284,Sh=36285,Mh=36286,qT=3200,YT=3201,iy=0,ZT=1,da="",In="srgb",Ss="srgb-linear",Xc="linear",ft="srgb",xr=7680,zg=519,KT=512,QT=513,$T=514,ay=515,JT=516,eA=517,tA=518,nA=519,Bg=35044,Ig="300 es",Bi=2e3,Wc=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=Math.PI/180,Eh=180/Math.PI;function tl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function iA(t,e){return(t%e+e)%e}function lf(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3];const f=r[s+0],p=r[s+1],_=r[s+2],S=r[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=S;return}if(h!==S||l!==f||c!==p||d!==_){let m=1-o;const u=l*f+c*p+d*_+h*S,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,u*g);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const y=o*g;if(l=l*m+f*y,c=c*m+p*y,d=d*m+_*y,h=h*m+S*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],f=r[s+1],p=r[s+2],_=r[s+3];return e[n]=o*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-o*p,e[n+2]=c*_+d*p+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),f=l(i/2),p=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new j,Fg=new nl;class Fe{constructor(e,n,i,a,r,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],S=a[0],m=a[3],u=a[6],g=a[1],x=a[4],y=a[7],R=a[2],A=a[5],w=a[8];return r[0]=s*S+o*g+l*R,r[3]=s*m+o*x+l*A,r[6]=s*u+o*y+l*w,r[1]=c*S+d*g+h*R,r[4]=c*m+d*x+h*A,r[7]=c*u+d*y+h*w,r[2]=f*S+p*g+_*R,r[5]=f*m+p*x+_*A,r[8]=f*u+p*y+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,f=o*l-d*r,p=c*r-s*l,_=n*h+i*f+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(a*c-d*i)*S,e[2]=(o*i-a*s)*S,e[3]=f*S,e[4]=(d*n-a*l)*S,e[5]=(a*r-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(s*n-i*r)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(uf.makeScale(e,n)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new Fe;function ry(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aA(){const t=qc("canvas");return t.style.display="block",t}const Hg={};function rs(t){t in Hg||(Hg[t]=!0,console.warn(t))}function rA(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function sA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gg=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lA(){const t={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ft&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(a.r=ss(a.r),a.g=ss(a.g),a.b=ss(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===da?Xc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ss]:{primaries:e,whitePoint:i,transfer:Xc,toXYZ:Gg,fromXYZ:Vg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Gg,fromXYZ:Vg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Je=lA();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let yr;class cA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=qc("canvas")),yr.width=e.width,yr.height=e.height;const a=yr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Gi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uA=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ff(a[s].image)):r.push(ff(a[s]))}else r=ff(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fA=0;const df=new j;class vn extends Us{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Ka,a=Ka,r=ci,s=Qa,o=ei,l=mi,c=vn.DEFAULT_ANISOTROPY,d=da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=tl(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(df).x}get height(){return this.source.getSize(df).y}get depth(){return this.source.getSize(df).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Ka:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Ka:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Yx;vn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,a=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,R=(u+1)/2,A=(d+f)/4,w=(h+S)/4,N=(_+m)/4;return x>y&&x>R?x<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(x),a=A/i,r=w/i):y>R?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=A/a,r=N/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=w/r,a=N/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-S)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends Us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const a={width:e,height:n,depth:i.depth},r=new vn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Gp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends dA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sy extends vn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hA extends vn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(r,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Al.subVectors(this.max,Xs),Sr.subVectors(e.a,Xs),Mr.subVectors(e.b,Xs),Er.subVectors(e.c,Xs),Ji.subVectors(Mr,Sr),ea.subVectors(Er,Mr),Ba.subVectors(Sr,Er);let n=[0,-Ji.z,Ji.y,0,-ea.z,ea.y,0,-Ba.z,Ba.y,Ji.z,0,-Ji.x,ea.z,0,-ea.x,Ba.z,0,-Ba.x,-Ji.y,Ji.x,0,-ea.y,ea.x,0,-Ba.y,Ba.x,0];return!hf(n,Sr,Mr,Er,Al)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,Sr,Mr,Er,Al))?!1:(wl.crossVectors(Ji,ea),n=[wl.x,wl.y,wl.z],hf(n,Sr,Mr,Er,Al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new j,new j,new j,new j,new j,new j,new j,new j],Yn=new j,Tl=new il,Sr=new j,Mr=new j,Er=new j,Ji=new j,ea=new j,Ba=new j,Xs=new j,Al=new j,wl=new j,Ia=new j;function hf(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Ia.fromArray(t,r);const o=a.x*Math.abs(Ia.x)+a.y*Math.abs(Ia.y)+a.z*Math.abs(Ia.z),l=e.dot(Ia),c=n.dot(Ia),d=i.dot(Ia);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const pA=new il,Ws=new j,pf=new j;class Vp{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pA.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ws,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(pf)),this.expandByPoint(Ws.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new j,mf=new j,Rl=new j,ta=new j,gf=new j,Cl=new j,vf=new j;class mA{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){mf.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),ta.copy(this.origin).sub(mf);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Rl),o=ta.dot(this.direction),l=-ta.dot(Rl),c=ta.lengthSq(),d=Math.abs(1-s*s);let h,f,p,_;if(d>0)if(h=s*l-o,f=s*o-l,_=r*d,h>=0)if(f>=-_)if(f<=_){const S=1/d;h*=S,f*=S,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(mf).addScaledVector(Rl,f),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),a=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,a,r){gf.subVectors(n,e),Cl.subVectors(i,e),vf.crossVectors(gf,Cl);let s=this.direction.dot(vf),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ta.subVectors(this.origin,e);const l=o*this.direction.dot(Cl.crossVectors(ta,Cl));if(l<0)return null;const c=o*this.direction.dot(gf.cross(ta));if(c<0||l+c>s)return null;const d=-o*ta.dot(vf);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,a,r,s,o,l,c,d,h,f,p,_,S,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,h,f,p,_,S,m)}set(e,n,i,a,r,s,o,l,c,d,h,f,p,_,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),s=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*d,p=s*h,_=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,S=c*h;n[0]=f+S*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-_,n[6]=S+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,S=c*h;n[0]=f-S*o,n[4]=-s*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*d,n[9]=S-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*d,p=s*h,_=o*d,S=o*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,_=o*l,S=o*c;n[0]=l*d,n[4]=S-f*h,n[8]=_*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-S*h}else if(e.order==="XZY"){const f=s*l,p=s*c,_=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=s*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gA,e,vA)}lookAt(e,n,i){const a=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),na.crossVectors(i,bn),na.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),na.crossVectors(i,bn)),na.normalize(),Nl.crossVectors(bn,na),a[0]=na.x,a[4]=Nl.x,a[8]=bn.x,a[1]=na.y,a[5]=Nl.y,a[9]=bn.y,a[2]=na.z,a[6]=Nl.z,a[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],g=i[3],x=i[7],y=i[11],R=i[15],A=a[0],w=a[4],N=a[8],T=a[12],E=a[1],D=a[5],I=a[9],B=a[13],Y=a[2],Z=a[6],L=a[10],z=a[14],O=a[3],k=a[7],Q=a[11],oe=a[15];return r[0]=s*A+o*E+l*Y+c*O,r[4]=s*w+o*D+l*Z+c*k,r[8]=s*N+o*I+l*L+c*Q,r[12]=s*T+o*B+l*z+c*oe,r[1]=d*A+h*E+f*Y+p*O,r[5]=d*w+h*D+f*Z+p*k,r[9]=d*N+h*I+f*L+p*Q,r[13]=d*T+h*B+f*z+p*oe,r[2]=_*A+S*E+m*Y+u*O,r[6]=_*w+S*D+m*Z+u*k,r[10]=_*N+S*I+m*L+u*Q,r[14]=_*T+S*B+m*z+u*oe,r[3]=g*A+x*E+y*Y+R*O,r[7]=g*w+x*D+y*Z+R*k,r[11]=g*N+x*I+y*L+R*Q,r[15]=g*T+x*B+y*z+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],S=e[7],m=e[11],u=e[15];return _*(+r*l*h-a*c*h-r*o*f+i*c*f+a*o*p-i*l*p)+S*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*d-r*l*d)+m*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*d-i*c*d)+u*(-a*o*d-n*l*h+n*o*f+a*s*h-i*s*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],S=e[13],m=e[14],u=e[15],g=h*m*c-S*f*c+S*l*p-o*m*p-h*l*u+o*f*u,x=_*f*c-d*m*c-_*l*p+s*m*p+d*l*u-s*f*u,y=d*S*c-_*h*c+_*o*p-s*S*p-d*o*u+s*h*u,R=_*h*l-d*S*l-_*o*f+s*S*f+d*o*m-s*h*m,A=n*g+i*x+a*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(S*f*r-h*m*r-S*a*p+i*m*p+h*a*u-i*f*u)*w,e[2]=(o*m*r-S*l*r+S*a*c-i*m*c-o*a*u+i*l*u)*w,e[3]=(h*l*r-o*f*r-h*a*c+i*f*c+o*a*p-i*l*p)*w,e[4]=x*w,e[5]=(d*m*r-_*f*r+_*a*p-n*m*p-d*a*u+n*f*u)*w,e[6]=(_*l*r-s*m*r-_*a*c+n*m*c+s*a*u-n*l*u)*w,e[7]=(s*f*r-d*l*r+d*a*c-n*f*c-s*a*p+n*l*p)*w,e[8]=y*w,e[9]=(_*h*r-d*S*r-_*i*p+n*S*p+d*i*u-n*h*u)*w,e[10]=(s*S*r-_*o*r+_*i*c-n*S*c-s*i*u+n*o*u)*w,e[11]=(d*o*r-s*h*r-d*i*c+n*h*c+s*i*p-n*o*p)*w,e[12]=R*w,e[13]=(d*S*a-_*h*a+_*i*f-n*S*f-d*i*m+n*h*m)*w,e[14]=(_*o*a-s*S*a-_*i*l+n*S*l+s*i*m-n*o*m)*w,e[15]=(s*h*a-d*o*a+d*i*l-n*h*l-s*i*f+n*o*f)*w,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,f=r*c,p=r*d,_=r*h,S=s*d,m=s*h,u=o*h,g=l*c,x=l*d,y=l*h,R=i.x,A=i.y,w=i.z;return a[0]=(1-(S+u))*R,a[1]=(p+y)*R,a[2]=(_-x)*R,a[3]=0,a[4]=(p-y)*A,a[5]=(1-(f+u))*A,a[6]=(m+g)*A,a[7]=0,a[8]=(_+x)*w,a[9]=(m-g)*w,a[10]=(1-(f+S))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=br.set(a[0],a[1],a[2]).length();const s=br.set(a[4],a[5],a[6]).length(),o=br.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],Zn.copy(this);const c=1/r,d=1/s,h=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=Bi){const l=this.elements,c=2*r/(n-e),d=2*r/(i-a),h=(n+e)/(n-e),f=(i+a)/(i-a);let p,_;if(o===Bi)p=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Wc)p=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Bi){const l=this.elements,c=1/(n-e),d=1/(i-a),h=1/(s-r),f=(n+e)*c,p=(i+a)*d;let _,S;if(o===Bi)_=(s+r)*h,S=-2*h;else if(o===Wc)_=r*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const br=new j,Zn=new Ut,gA=new j(0,0,0),vA=new j(1,1,1),na=new j,Nl=new j,bn=new j,kg=new Ut,jg=new nl;class gi{constructor(e=0,n=0,i=0,a=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jg.setFromEuler(this),this.setFromQuaternion(jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class oy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _A=0;const Xg=new j,Tr=new nl,Ai=new Ut,Dl=new j,qs=new j,xA=new j,yA=new nl,Wg=new j(1,0,0),qg=new j(0,1,0),Yg=new j(0,0,1),Zg={type:"added"},SA={type:"removed"},Ar={type:"childadded",child:null},_f={type:"childremoved",child:null};class nn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new j,n=new gi,i=new nl,a=new j(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Fe}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,n){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(qs,Dl,this.up):Ai.lookAt(Dl,qs,this.up),this.quaternion.setFromRotationMatrix(Ai),a&&(Ai.extractRotation(a.matrixWorld),Tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SA),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zg),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,xA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,yA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}nn.DEFAULT_UP=new j(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new j,wi=new j,xf=new j,Ri=new j,wr=new j,Rr=new j,Kg=new j,yf=new j,Sf=new j,Mf=new j,Ef=new Dt,bf=new Dt,Tf=new Dt;class Jn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Kn.subVectors(e,n),a.cross(Kn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Kn.subVectors(a,n),wi.subVectors(i,n),xf.subVectors(e,n);const s=Kn.dot(Kn),o=Kn.dot(wi),l=Kn.dot(xf),c=wi.dot(wi),d=wi.dot(xf),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,_=(s*d-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(s,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return Ef.setScalar(0),bf.setScalar(0),Tf.setScalar(0),Ef.fromBufferAttribute(e,n),bf.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ef,r.x),s.addScaledVector(bf,r.y),s.addScaledVector(Tf,r.z),s}static isFrontFacing(e,n,i,a){return Kn.subVectors(i,n),wi.subVectors(e,n),Kn.cross(wi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;wr.subVectors(a,i),Rr.subVectors(r,i),yf.subVectors(e,i);const l=wr.dot(yf),c=Rr.dot(yf);if(l<=0&&c<=0)return n.copy(i);Sf.subVectors(e,a);const d=wr.dot(Sf),h=Rr.dot(Sf);if(d>=0&&h<=d)return n.copy(a);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(wr,s);Mf.subVectors(e,r);const p=wr.dot(Mf),_=Rr.dot(Mf);if(_>=0&&p<=_)return n.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Rr,o);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Kg.subVectors(r,a),o=(h-d)/(h-d+(p-_)),n.copy(a).addScaledVector(Kg,o);const u=1/(m+S+f);return s=S*u,o=f*u,n.copy(i).addScaledVector(wr,s).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ia={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Je.workingColorSpace){if(e=iA(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Af(s,r,e+1/3),this.g=Af(s,r,e),this.b=Af(s,r,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,n=In){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=ly[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(qe(Jt.r*255,0,255))*65536+Math.round(qe(Jt.g*255,0,255))*256+Math.round(qe(Jt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,a=Jt.g,r=Jt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=In){Je.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,a=Jt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ia),this.setHSL(ia.h+e,ia.s+n,ia.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ia),e.getHSL(Ul);const i=lf(ia.h,Ul.h,n),a=lf(ia.s,Ul.s,n),r=lf(ia.l,Ul.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=ly;let MA=0;class al extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=as,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Fd,this.blendEquation=Ya,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Na&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Id&&(i.blendSrc=this.blendSrc),this.blendDst!==Fd&&(i.blendDst=this.blendDst),this.blendEquation!==Ya&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cy extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new j,Ll=new at;let EA=0;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),a=dn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),a=dn(a,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bg&&(e.usage=this.usage),e}}class uy extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fy extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vi extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bA=0;const zn=new Ut,wf=new nn,Cr=new j,Tn=new il,Ys=new il,jt=new j;class Ki extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?fy:uy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vi(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Tn.min,Ys.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,Ys.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(Ys.min),Tn.expandByPoint(Ys.max))}Tn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)jt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(jt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)jt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),jt.add(Cr)),a=Math.max(a,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new j,l[N]=new j;const c=new j,d=new j,h=new j,f=new at,p=new at,_=new at,S=new j,m=new j;function u(N,T,E){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,E),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),o[N].add(S),o[T].add(S),o[E].add(S),l[N].add(m),l[T].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,T=g.length;N<T;++N){const E=g[N],D=E.start,I=E.count;for(let B=D,Y=D+I;B<Y;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new j,y=new j,R=new j,A=new j;function w(N){R.fromBufferAttribute(a,N),A.copy(R);const T=o[N];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(A,T);const D=y.dot(l[N])<0?-1:1;s.setXYZW(N,x.x,x.y,x.z,D)}for(let N=0,T=g.length;N<T;++N){const E=g[N],D=E.start,I=E.count;for(let B=D,Y=D+I;B<Y;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new j,r=new j,s=new j,o=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,m),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new hi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ki,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new Ut,Fa=new mA,Ol=new Vp,$g=new j,Pl=new j,zl=new j,Bl=new j,Rf=new j,Il=new j,Jg=new j,Fl=new j;class ti extends nn{constructor(e=new Ki,n=new cy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Rf.fromBufferAttribute(h,e),s?Il.addScaledVector(Rf,d):Il.addScaledVector(Rf.sub(n),d))}n.add(Il)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Fa.copy(e.ray).recast(e.near),!(Ol.containsPoint(Fa.origin)===!1&&(Fa.intersectSphere(Ol,$g)===null||Fa.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Qg.copy(r).invert(),Fa.copy(e.ray).applyMatrix4(Qg),!(i.boundingBox!==null&&Fa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fa)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const m=f[_],u=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=x;y<R;y+=3){const A=o.getX(y),w=o.getX(y+1),N=o.getX(y+2);a=Hl(this,u,e,i,c,d,h,A,w,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){const g=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);a=Hl(this,s,e,i,c,d,h,g,x,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,S=f.length;_<S;_++){const m=f[_],u=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=x;y<R;y+=3){const A=y,w=y+1,N=y+2;a=Hl(this,u,e,i,c,d,h,A,w,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){const g=m,x=m+1,y=m+2;a=Hl(this,s,e,i,c,d,h,g,x,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function TA(t,e,n,i,a,r,s,o){let l;if(e.side===gn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Na,o),l===null)return null;Fl.copy(o),Fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fl);return c<n.near||c>n.far?null:{distance:c,point:Fl.clone(),object:t}}function Hl(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Pl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Bl);const d=TA(t,e,n,i,Pl,zl,Bl,Jg);if(d){const h=new j;Jn.getBarycoord(Jg,Pl,zl,Bl,h),a&&(d.uv=Jn.getInterpolatedAttribute(a,o,l,c,h,new at)),r&&(d.uv1=Jn.getInterpolatedAttribute(r,o,l,c,h,new at)),s&&(d.normal=Jn.getInterpolatedAttribute(s,o,l,c,h,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};Jn.getNormal(Pl,zl,Bl,f.normal),d.face=f,d.barycoord=h}return d}class rl extends Ki{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Vi(c,3)),this.setAttribute("normal",new Vi(d,3)),this.setAttribute("uv",new Vi(h,2));function _(S,m,u,g,x,y,R,A,w,N,T){const E=y/w,D=R/N,I=y/2,B=R/2,Y=A/2,Z=w+1,L=N+1;let z=0,O=0;const k=new j;for(let Q=0;Q<L;Q++){const oe=Q*D-B;for(let Re=0;Re<Z;Re++){const ze=Re*E-I;k[S]=ze*g,k[m]=oe*x,k[u]=Y,c.push(k.x,k.y,k.z),k[S]=0,k[m]=0,k[u]=A>0?1:-1,d.push(k.x,k.y,k.z),h.push(Re/w),h.push(1-Q/N),z+=1}}for(let Q=0;Q<N;Q++)for(let oe=0;oe<w;oe++){const Re=f+oe+Z*Q,ze=f+oe+Z*(Q+1),X=f+(oe+1)+Z*(Q+1),ne=f+(oe+1)+Z*Q;l.push(Re,ze,ne),l.push(ze,X,ne),O+=6}o.addGroup(p,O,T),p+=O,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const a in i)e[a]=i[a]}return e}function AA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const wA={clone:Ms,merge:sn};var RA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Da extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RA,this.fragmentShader=CA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=AA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hy extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const aa=new j,e0=new at,t0=new at;class wn extends hy{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(aa.x,aa.y).multiplyScalar(-e/aa.z),aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(aa.x,aa.y).multiplyScalar(-e/aa.z)}getViewSize(e,n){return this.getViewBounds(e,e0,t0),n.subVectors(t0,e0)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(of*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Dr=1;class NA extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wn(Nr,Dr,e,n);a.layers=this.layers,this.add(a);const r=new wn(Nr,Dr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Nr,Dr,e,n);s.layers=this.layers,this.add(s);const o=new wn(Nr,Dr,e,n);o.layers=this.layers,this.add(o);const l=new wn(Nr,Dr,e,n);l.layers=this.layers,this.add(l);const c=new wn(Nr,Dr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class py extends vn{constructor(e=[],n=xs,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DA extends ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new py(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rl(5,5,5),r=new Da({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ta});r.uniforms.tEquirect.value=n;const s=new ti(a,r),o=n.minFilter;return n.minFilter===Qa&&(n.minFilter=ci),new NA(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}class Gl extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UA={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class my extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nf=new j,LA=new j,OA=new Fe;class Wa{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Nf.subVectors(i,n).cross(LA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OA.getNormalMatrix(e),a=this.coplanarPoint(Nf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ha=new Vp,PA=new at(.5,.5),Vl=new j;class kp{constructor(e=new Wa,n=new Wa,i=new Wa,a=new Wa,r=new Wa,s=new Wa){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],d=a[5],h=a[6],f=a[7],p=a[8],_=a[9],S=a[10],m=a[11],u=a[12],g=a[13],x=a[14],y=a[15];if(i[0].setComponents(l-r,f-c,m-p,y-u).normalize(),i[1].setComponents(l+r,f+c,m+p,y+u).normalize(),i[2].setComponents(l+s,f+d,m+_,y+g).normalize(),i[3].setComponents(l-s,f-d,m-_,y-g).normalize(),i[4].setComponents(l-o,f-h,m-S,y-x).normalize(),n===Bi)i[5].setComponents(l+o,f+h,m+S,y+x).normalize();else if(n===Wc)i[5].setComponents(o,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ha.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ha)}intersectsSprite(e){Ha.center.set(0,0,0);const n=PA.distanceTo(e.center);return Ha.radius=.7071067811865476+n,Ha.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ha)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Vl.x=a.normal.x>0?e.max.x:e.min.x,Vl.y=a.normal.y>0?e.max.y:e.min.y,Vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gy extends vn{constructor(e,n,i=cr,a,r,s,o=ii,l=ii,c,d=Lo,h=1){if(d!==Lo&&d!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _u extends Ki{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=e/o,f=n/l,p=[],_=[],S=[],m=[];for(let u=0;u<d;u++){const g=u*f-s;for(let x=0;x<c;x++){const y=x*h-r;_.push(y,-g,0),S.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,y=g+c*(u+1),R=g+1+c*(u+1),A=g+1+c*u;p.push(x,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new Vi(_,3)),this.setAttribute("normal",new Vi(S,3)),this.setAttribute("uv",new Vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class vy extends al{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iy,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zA extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _y extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Df=new Ut,n0=new j,i0=new j;class IA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),n.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i0),n.updateMatrixWorld(),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xy extends hy{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class FA extends IA{constructor(){super(new xy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends _y{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new FA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yy extends _y{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class HA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function a0(t,e,n,i){const a=GA(i);switch(n){case $x:return t*e;case ey:return t*e/a.components*a.byteLength;case Ip:return t*e/a.components*a.byteLength;case ty:return t*e*2/a.components*a.byteLength;case Fp:return t*e*2/a.components*a.byteLength;case Jx:return t*e*3/a.components*a.byteLength;case ei:return t*e*4/a.components*a.byteLength;case Hp:return t*e*4/a.components*a.byteLength;case oc:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case eh:return Math.max(t,16)*Math.max(e,8)/4;case Qd:case Jd:return Math.max(t,8)*Math.max(e,8)/2;case th:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fc:case _h:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ny:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sh:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GA(t){switch(t){case mi:case Zx:return{byteLength:1,components:1};case Do:case Kx:case el:return{byteLength:2,components:1};case zp:case Bp:return{byteLength:2,components:4};case cr:case Pp:case zi:return{byteLength:4,components:1};case Qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sy(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function VA(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const S=h[p];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var kA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jA=`#ifdef USE_ALPHAHASH
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
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZA=`#ifdef USE_AOMAP
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
#endif`,KA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QA=`#ifdef USE_BATCHING
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
#endif`,$A=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nw=`#ifdef USE_IRIDESCENCE
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
#endif`,iw=`#ifdef USE_BUMPMAP
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dw=`#define PI 3.141592653589793
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
} // validated`,hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pw=`vec3 transformedNormal = objectNormal;
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
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",yw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nw=`#ifdef USE_GRADIENTMAP
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
}`,Dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
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
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
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
#endif`,Gw=`struct PhysicalMaterial {
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
}`,Vw=`
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
#endif`,kw=`#if defined( RE_IndirectDiffuse )
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$w=`#if defined( USE_POINTS_UV )
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
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
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
#endif`,rR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fR=`#ifdef USE_NORMALMAP
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
#endif`,dR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ER=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wR=`float getShadowMask() {
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,NR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DR=`#ifdef USE_SKINNING
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
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zR=`#ifdef USE_TRANSMISSION
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
#endif`,BR=`#ifdef USE_TRANSMISSION
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kR=`uniform sampler2D t2D;
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
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
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
}`,ZR=`#if DEPTH_PACKING == 3200
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
}`,KR=`#define DISTANCE
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
}`,QR=`#define DISTANCE
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
}`,$R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`uniform float scale;
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
}`,t2=`uniform vec3 diffuse;
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
}`,n2=`#include <common>
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
}`,i2=`uniform vec3 diffuse;
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
}`,a2=`#define LAMBERT
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
}`,r2=`#define LAMBERT
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
}`,s2=`#define MATCAP
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
}`,o2=`#define MATCAP
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
}`,l2=`#define NORMAL
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
}`,c2=`#define NORMAL
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
}`,u2=`#define PHONG
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
}`,f2=`#define PHONG
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
}`,d2=`#define STANDARD
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
}`,h2=`#define STANDARD
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
}`,p2=`#define TOON
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
}`,m2=`#define TOON
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
}`,g2=`uniform float size;
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
}`,v2=`uniform vec3 diffuse;
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
}`,_2=`#include <common>
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
}`,x2=`uniform vec3 color;
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
}`,y2=`uniform float rotation;
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
}`,S2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:kA,alphahash_pars_fragment:jA,alphamap_fragment:XA,alphamap_pars_fragment:WA,alphatest_fragment:qA,alphatest_pars_fragment:YA,aomap_fragment:ZA,aomap_pars_fragment:KA,batching_pars_vertex:QA,batching_vertex:$A,begin_vertex:JA,beginnormal_vertex:ew,bsdfs:tw,iridescence_fragment:nw,bumpmap_pars_fragment:iw,clipping_planes_fragment:aw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:lw,color_pars_fragment:cw,color_pars_vertex:uw,color_vertex:fw,common:dw,cube_uv_reflection_fragment:hw,defaultnormal_vertex:pw,displacementmap_pars_vertex:mw,displacementmap_vertex:gw,emissivemap_fragment:vw,emissivemap_pars_fragment:_w,colorspace_fragment:xw,colorspace_pars_fragment:yw,envmap_fragment:Sw,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Ew,envmap_pars_vertex:bw,envmap_physical_pars_fragment:Pw,envmap_vertex:Tw,fog_vertex:Aw,fog_pars_vertex:ww,fog_fragment:Rw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Nw,lightmap_pars_fragment:Dw,lights_lambert_fragment:Uw,lights_lambert_pars_fragment:Lw,lights_pars_begin:Ow,lights_toon_fragment:zw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Iw,lights_phong_pars_fragment:Fw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Gw,lights_fragment_begin:Vw,lights_fragment_maps:kw,lights_fragment_end:jw,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:Yw,map_fragment:Zw,map_pars_fragment:Kw,map_particle_fragment:Qw,map_particle_pars_fragment:$w,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:eR,morphinstance_vertex:tR,morphcolor_vertex:nR,morphnormal_vertex:iR,morphtarget_pars_vertex:aR,morphtarget_vertex:rR,normal_fragment_begin:sR,normal_fragment_maps:oR,normal_pars_fragment:lR,normal_pars_vertex:cR,normal_vertex:uR,normalmap_pars_fragment:fR,clearcoat_normal_fragment_begin:dR,clearcoat_normal_fragment_maps:hR,clearcoat_pars_fragment:pR,iridescence_pars_fragment:mR,opaque_fragment:gR,packing:vR,premultiplied_alpha_fragment:_R,project_vertex:xR,dithering_fragment:yR,dithering_pars_fragment:SR,roughnessmap_fragment:MR,roughnessmap_pars_fragment:ER,shadowmap_pars_fragment:bR,shadowmap_pars_vertex:TR,shadowmap_vertex:AR,shadowmask_pars_fragment:wR,skinbase_vertex:RR,skinning_pars_vertex:CR,skinning_vertex:NR,skinnormal_vertex:DR,specularmap_fragment:UR,specularmap_pars_fragment:LR,tonemapping_fragment:OR,tonemapping_pars_fragment:PR,transmission_fragment:zR,transmission_pars_fragment:BR,uv_pars_fragment:IR,uv_pars_vertex:FR,uv_vertex:HR,worldpos_vertex:GR,background_vert:VR,background_frag:kR,backgroundCube_vert:jR,backgroundCube_frag:XR,cube_vert:WR,cube_frag:qR,depth_vert:YR,depth_frag:ZR,distanceRGBA_vert:KR,distanceRGBA_frag:QR,equirect_vert:$R,equirect_frag:JR,linedashed_vert:e2,linedashed_frag:t2,meshbasic_vert:n2,meshbasic_frag:i2,meshlambert_vert:a2,meshlambert_frag:r2,meshmatcap_vert:s2,meshmatcap_frag:o2,meshnormal_vert:l2,meshnormal_frag:c2,meshphong_vert:u2,meshphong_frag:f2,meshphysical_vert:d2,meshphysical_frag:h2,meshtoon_vert:p2,meshtoon_frag:m2,points_vert:g2,points_frag:v2,shadow_vert:_2,shadow_frag:x2,sprite_vert:y2,sprite_frag:S2},ue={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},si={basic:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:sn([ue.common,ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:sn([ue.lights,ue.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const kl={r:0,b:0,g:0},Ga=new gi,M2=new Ut;function E2(t,e,n,i,a,r,s){const o=new Ke(0);let l=r===!0?0:1,c,d,h=null,f=0,p=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function S(x){let y=!1;const R=_(x);R===null?u(o,l):R&&R.isColor&&(u(R,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const R=_(y);R&&(R.isCubeTexture||R.mapping===vu)?(d===void 0&&(d=new ti(new rl(1,1,1),new Da({name:"BackgroundCubeMaterial",uniforms:Ms(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Ga.copy(y.backgroundRotation),Ga.x*=-1,Ga.y*=-1,Ga.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ga.y*=-1,Ga.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Ga)),d.material.toneMapped=Je.getTransfer(R.colorSpace)!==ft,(h!==R||f!==R.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=R,f=R.version,p=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ti(new _u(2,2),new Da({name:"BackgroundMaterial",uniforms:Ms(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(R.colorSpace)!==ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(kl,dy(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,y,s)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:S,addToRenderList:m,dispose:g}}function b2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(E,D,I,B,Y){let Z=!1;const L=h(B,I,D);r!==L&&(r=L,c(r.object)),Z=p(E,B,I,Y),Z&&_(E,B,I,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(E,D,I,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function h(E,D,I){const B=I.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let Z=Y[D.id];Z===void 0&&(Z={},Y[D.id]=Z);let L=Z[B];return L===void 0&&(L=f(l()),Z[B]=L),L}function f(E){const D=[],I=[],B=[];for(let Y=0;Y<n;Y++)D[Y]=0,I[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,D,I,B){const Y=r.attributes,Z=D.attributes;let L=0;const z=I.getAttributes();for(const O in z)if(z[O].location>=0){const Q=Y[O];let oe=Z[O];if(oe===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;L++}return r.attributesNum!==L||r.index!==B}function _(E,D,I,B){const Y={},Z=D.attributes;let L=0;const z=I.getAttributes();for(const O in z)if(z[O].location>=0){let Q=Z[O];Q===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),Y[O]=oe,L++}r.attributes=Y,r.attributesNum=L,r.index=B}function S(){const E=r.newAttributes;for(let D=0,I=E.length;D<I;D++)E[D]=0}function m(E){u(E,0)}function u(E,D){const I=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;I[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),Y[E]!==D&&(t.vertexAttribDivisor(E,D),Y[E]=D)}function g(){const E=r.newAttributes,D=r.enabledAttributes;for(let I=0,B=D.length;I<B;I++)D[I]!==E[I]&&(t.disableVertexAttribArray(I),D[I]=0)}function x(E,D,I,B,Y,Z,L){L===!0?t.vertexAttribIPointer(E,D,I,Y,Z):t.vertexAttribPointer(E,D,I,B,Y,Z)}function y(E,D,I,B){S();const Y=B.attributes,Z=I.getAttributes(),L=D.defaultAttributeValues;for(const z in Z){const O=Z[z];if(O.location>=0){let k=Y[z];if(k===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),k!==void 0){const Q=k.normalized,oe=k.itemSize,Re=e.get(k);if(Re===void 0)continue;const ze=Re.buffer,X=Re.type,ne=Re.bytesPerElement,xe=X===t.INT||X===t.UNSIGNED_INT||k.gpuType===Pp;if(k.isInterleavedBufferAttribute){const le=k.data,ye=le.stride,Ae=k.offset;if(le.isInstancedInterleavedBuffer){for(let Te=0;Te<O.locationSize;Te++)u(O.location+Te,le.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Te=0;Te<O.locationSize;Te++)m(O.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Te=0;Te<O.locationSize;Te++)x(O.location+Te,oe/O.locationSize,X,Q,ye*ne,(Ae+oe/O.locationSize*Te)*ne,xe)}else{if(k.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)u(O.location+le,k.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<O.locationSize;le++)m(O.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<O.locationSize;le++)x(O.location+le,oe/O.locationSize,X,Q,oe*ne,oe/O.locationSize*le*ne,xe)}}else if(L!==void 0){const Q=L[z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(O.location,Q);break;case 3:t.vertexAttrib3fv(O.location,Q);break;case 4:t.vertexAttrib4fv(O.location,Q);break;default:t.vertexAttrib1fv(O.location,Q)}}}}g()}function R(){N();for(const E in i){const D=i[E];for(const I in D){const B=D[I];for(const Y in B)d(B[Y].object),delete B[Y];delete D[I]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const I in D){const B=D[I];for(const Y in B)d(B[Y].object),delete B[Y];delete D[I]}delete i[E.id]}function w(E){for(const D in i){const I=i[D];if(I[E.id]===void 0)continue;const B=I[E.id];for(const Y in B)d(B[Y].object),delete B[Y];delete I[E.id]}}function N(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function T2(t,e,n){let i;function a(c){i=c}function r(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S]*f[S];n.update(_,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function A2(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==ei&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const N=w===el&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!N)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function w2(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new Wa,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!a||_===null||_.length===0||r&&!m)r?d(null):c();else{const g=r?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=d(_,f,x,p);for(let R=0;R!==x;++R)y[R]=n[R];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const u=p+S*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==S;++x,y+=4)s.copy(h[x]).applyMatrix4(g,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function R2(t){let e=new WeakMap;function n(s,o){return o===qd?s.mapping=xs:o===Yd&&(s.mapping=ys),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===qd||o===Yd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new DA(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Zr=4,r0=[.125,.215,.35,.446,.526,.582],Za=20,Uf=new xy,s0=new Ke;let Lf=null,Of=0,Pf=0,zf=!1;const qa=(1+Math.sqrt(5))/2,Ur=1/qa,o0=[new j(-qa,Ur,0),new j(qa,Ur,0),new j(-Ur,0,qa),new j(Ur,0,qa),new j(0,qa,-Ur),new j(0,qa,Ur),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],C2=new j;class l0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=C2}=r;Lf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Of,Pf),this._renderer.xr.enabled=zf,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:el,format:ei,colorSpace:Ss,depthBuffer:!1},a=c0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c0(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N2(r)),this._blurMaterial=D2(r,e,n)}return a}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,Uf)}_sceneToCubeUV(e,n,i,a,r){const l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(s0),h.toneMapping=Aa,h.autoClear=!1;const _=new cy({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),S=new ti(new rl,_);let m=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,m=!0):(_.color.copy(s0),m=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[g],r.y,r.z)):x===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[g]));const y=this._cubeSize;jl(a,x*y,g>2?y:0,y,y),h.setRenderTarget(a),m&&h.render(S,l),h.render(e,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===xs||e.mapping===ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u0());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ti(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Uf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=o0[(a-r-1)%o0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ti(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Za-1),S=r/_,m=isFinite(r)?1+Math.floor(d*S):Za;m>Za&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Za}`);const u=[];let g=0;for(let w=0;w<Za;++w){const N=w/S,T=Math.exp(-N*N/2);u.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[a],R=3*y*(a>x-Zr?a-x+Zr:0),A=4*(this._cubeSize-y);jl(n,R,A,3*y,2*y),l.setRenderTarget(n),l.render(h,Uf)}}function N2(t){const e=[],n=[],i=[];let a=t;const r=t-Zr+1+r0.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>t-Zr?l=r0[s-t+Zr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,S=3,m=2,u=1,g=new Float32Array(S*_*p),x=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,N=A>2?0:-1,T=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];g.set(T,S*_*A),x.set(f,m*_*A);const E=[A,A,A,A,A,A];y.set(E,u*_*A)}const R=new Ki;R.setAttribute("position",new hi(g,S)),R.setAttribute("uv",new hi(x,m)),R.setAttribute("faceIndex",new hi(y,u)),e.push(R),a>Zr&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function c0(t,e,n){const i=new ur(t,e,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function D2(t,e,n){const i=new Float32Array(Za),a=new j(0,1,0);return new Da({name:"SphericalGaussianBlur",defines:{n:Za,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:jp(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function u0(){return new Da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jp(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function f0(){return new Da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function jp(){return`

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
	`}function U2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qd||l===Yd,d=l===xs||l===ys;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new l0(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new l0(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function L2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&rs("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function O2(t,e,n,i){const a={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let x=0,y=g.length;x<y;x+=3){const R=g[x+0],A=g[x+1],w=g[x+2];f.push(R,A,A,w,w,R)}}else if(_!==void 0){const g=_.array;S=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const R=x+0,A=x+1,w=x+2;f.push(R,A,A,w,w,R)}}else return;const m=new(ry(f)?fy:uy)(f,1);m.version=S;const u=r.get(h);u&&e.remove(u),r.set(h,m)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function P2(t,e,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,f*s,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function h(f,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function z2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function B2(t,e,n){const i=new WeakMap,a=new Dt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*h),N=new sy(w,R,A,h);N.type=zi,N.needsUpdate=!0;const T=y*4;for(let D=0;D<h;D++){const I=u[D],B=g[D],Y=x[D],Z=R*A*4*D;for(let L=0;L<I.count;L++){const z=L*T;_===!0&&(a.fromBufferAttribute(I,L),w[Z+z+0]=a.x,w[Z+z+1]=a.y,w[Z+z+2]=a.z,w[Z+z+3]=0),S===!0&&(a.fromBufferAttribute(B,L),w[Z+z+4]=a.x,w[Z+z+5]=a.y,w[Z+z+6]=a.z,w[Z+z+7]=0),m===!0&&(a.fromBufferAttribute(Y,L),w[Z+z+8]=a.x,w[Z+z+9]=a.y,w[Z+z+10]=a.z,w[Z+z+11]=Y.itemSize===4?a.w:1)}}f={count:h,texture:N,size:new at(R,A)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function I2(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const My=new vn,d0=new gy(1,1),Ey=new sy,by=new hA,Ty=new py,h0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),v0=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=h0[a];if(r===void 0&&(r=new Float32Array(a),h0[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=p0[e];n===void 0&&(n=new Int32Array(e),p0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function k2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Vt(n,i))return;v0.set(i),t.uniformMatrix2fv(this.addr,!1,v0),kt(n,i)}}function j2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Vt(n,i))return;g0.set(i),t.uniformMatrix3fv(this.addr,!1,g0),kt(n,i)}}function X2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Vt(n,i))return;m0.set(i),t.uniformMatrix4fv(this.addr,!1,m0),kt(n,i)}}function W2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function eC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(d0.compareFunction=ay,r=d0):r=My,n.setTexture2D(e||r,a)}function tC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||by,a)}function nC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||Ty,a)}function iC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Ey,a)}function aC(t){switch(t){case 5126:return F2;case 35664:return H2;case 35665:return G2;case 35666:return V2;case 35674:return k2;case 35675:return j2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return K2;case 36294:return Q2;case 36295:return $2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function rC(t,e){t.uniform1fv(this.addr,e)}function sC(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function oC(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function lC(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function cC(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uC(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fC(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dC(t,e){t.uniform1iv(this.addr,e)}function hC(t,e){t.uniform2iv(this.addr,e)}function pC(t,e){t.uniform3iv(this.addr,e)}function mC(t,e){t.uniform4iv(this.addr,e)}function gC(t,e){t.uniform1uiv(this.addr,e)}function vC(t,e){t.uniform2uiv(this.addr,e)}function _C(t,e){t.uniform3uiv(this.addr,e)}function xC(t,e){t.uniform4uiv(this.addr,e)}function yC(t,e,n){const i=this.cache,a=e.length,r=xu(n,a);Vt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||My,r[s])}function SC(t,e,n){const i=this.cache,a=e.length,r=xu(n,a);Vt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||by,r[s])}function MC(t,e,n){const i=this.cache,a=e.length,r=xu(n,a);Vt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||Ty,r[s])}function EC(t,e,n){const i=this.cache,a=e.length,r=xu(n,a);Vt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||Ey,r[s])}function bC(t){switch(t){case 5126:return rC;case 35664:return sC;case 35665:return oC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return fC;case 5124:case 35670:return dC;case 35667:case 35671:return hC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return EC}}class TC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aC(n.type)}}class AC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bC(n.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function _0(t,e){t.seq.push(e),t.map[e.id]=e}function RC(t,e,n){const i=t.name,a=i.length;for(Bf.lastIndex=0;;){const r=Bf.exec(i),s=Bf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){_0(n,c===void 0?new TC(o,t,e):new AC(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new wC(o),_0(n,h)),n=h}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);RC(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function x0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CC=37297;let NC=0;function DC(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const y0=new Fe;function UC(t){Je._getMatrix(y0,Je.workingColorSpace,t);const e=`mat3( ${y0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Xc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function S0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+DC(t.getShaderSource(e),s)}else return a}function LC(t,e){const n=UC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function OC(t,e){let n;switch(e){case FT:n="Linear";break;case HT:n="Reinhard";break;case GT:n="Cineon";break;case VT:n="ACESFilmic";break;case jT:n="AgX";break;case XT:n="Neutral";break;case kT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new j;function PC(){Je.getLuminanceCoefficients(Xl);const t=Xl.x.toFixed(4),e=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function BC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Js(t){return t!==""}function M0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(FC,GC)}const HC=new Map;function GC(t,e){let n=Ge[e];if(n===void 0){const i=HC.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(n)}const VC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(t){return t.replace(VC,kC)}function kC(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function T0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function jC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function XC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function qC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case BT:e="ENVMAP_BLENDING_MIX";break;case IT:e="ENVMAP_BLENDING_ADD";break}return e}function YC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZC(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=jC(n),c=XC(n),d=WC(n),h=qC(n),f=YC(n),p=zC(n),_=BC(r),S=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),u.length>0&&(u+=`
`)):(m=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),u=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Aa?"#define TONE_MAPPING":"",n.toneMapping!==Aa?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Aa?OC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,LC("linearToOutputTexel",n.outputColorSpace),PC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),s=bh(s),s=M0(s,n),s=E0(s,n),o=bh(o),o=M0(o,n),o=E0(o,n),s=b0(s),o=b0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+s,y=g+u+o,R=x0(a,a.VERTEX_SHADER,x),A=x0(a,a.FRAGMENT_SHADER,y);a.attachShader(S,R),a.attachShader(S,A),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function w(D){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(S).trim(),B=a.getShaderInfoLog(R).trim(),Y=a.getShaderInfoLog(A).trim();let Z=!0,L=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,S,R,A);else{const z=S0(a,R,"vertex"),O=S0(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+z+`
`+O)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||Y==="")&&(L=!1);L&&(D.diagnostics={runnable:Z,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:u}})}a.deleteShader(R),a.deleteShader(A),N=new dc(a,S),T=IC(a,S)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(S,CC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NC++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let KC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $C(e),n.set(e,i)),i}}class $C{constructor(e){this.id=KC++,this.code=e,this.usedTimes=0}}function JC(t,e,n,i,a,r,s){const o=new oy,l=new QC,c=new Set,d=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,D,I,B){const Y=I.fog,Z=B.geometry,L=T.isMeshStandardMaterial?I.environment:null,z=(T.isMeshStandardMaterial?n:e).get(T.envMap||L),O=z&&z.mapping===vu?z.image.height:null,k=_[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=Q!==void 0?Q.length:0;let Re=0;Z.morphAttributes.position!==void 0&&(Re=1),Z.morphAttributes.normal!==void 0&&(Re=2),Z.morphAttributes.color!==void 0&&(Re=3);let ze,X,ne,xe;if(k){const ot=si[k];ze=ot.vertexShader,X=ot.fragmentShader}else ze=T.vertexShader,X=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),xe=l.getFragmentShaderID(T);const le=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,st=!!T.map,et=!!T.matcap,Ye=!!z,U=!!T.aoMap,an=!!T.lightMap,tt=!!T.bumpMap,gt=!!T.normalMap,Me=!!T.displacementMap,Qe=!!T.emissiveMap,Ce=!!T.metalnessMap,He=!!T.roughnessMap,It=T.anisotropy>0,C=T.clearcoat>0,M=T.dispersion>0,V=T.iridescence>0,$=T.sheen>0,te=T.transmission>0,K=It&&!!T.anisotropyMap,Ee=C&&!!T.clearcoatMap,fe=C&&!!T.clearcoatNormalMap,Se=C&&!!T.clearcoatRoughnessMap,be=V&&!!T.iridescenceMap,ie=V&&!!T.iridescenceThicknessMap,pe=$&&!!T.sheenColorMap,Ue=$&&!!T.sheenRoughnessMap,De=!!T.specularMap,ce=!!T.specularColorMap,Be=!!T.specularIntensityMap,P=te&&!!T.transmissionMap,de=te&&!!T.thicknessMap,ae=!!T.gradientMap,ge=!!T.alphaMap,re=T.alphaTest>0,ee=!!T.alphaHash,ve=!!T.extensions;let Ie=Aa;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const _t={shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:X,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ss,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:et,envMap:Ye,envMapMode:Ye&&z.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:an,bumpMap:tt,normalMap:gt,displacementMap:f&&Me,emissiveMap:Qe,normalMapObjectSpace:gt&&T.normalMapType===ZT,normalMapTangentSpace:gt&&T.normalMapType===iy,metalnessMap:Ce,roughnessMap:He,anisotropy:It,anisotropyMap:K,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:Se,dispersion:M,iridescence:V,iridescenceMap:be,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:pe,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:ce,specularIntensityMap:Be,transmission:te,transmissionMap:P,thicknessMap:de,gradientMap:ae,opaque:T.transparent===!1&&T.blending===as&&T.alphaToCoverage===!1,alphaMap:ge,alphaTest:re,alphaHash:ee,combine:T.combine,mapUv:st&&S(T.map.channel),aoMapUv:U&&S(T.aoMap.channel),lightMapUv:an&&S(T.lightMap.channel),bumpMapUv:tt&&S(T.bumpMap.channel),normalMapUv:gt&&S(T.normalMap.channel),displacementMapUv:Me&&S(T.displacementMap.channel),emissiveMapUv:Qe&&S(T.emissiveMap.channel),metalnessMapUv:Ce&&S(T.metalnessMap.channel),roughnessMapUv:He&&S(T.roughnessMap.channel),anisotropyMapUv:K&&S(T.anisotropyMap.channel),clearcoatMapUv:Ee&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:fe&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&S(T.sheenRoughnessMap.channel),specularMapUv:De&&S(T.specularMap.channel),specularColorMapUv:ce&&S(T.specularColorMap.channel),specularIntensityMapUv:Be&&S(T.specularIntensityMap.channel),transmissionMapUv:P&&S(T.transmissionMap.channel),thicknessMapUv:de&&S(T.thicknessMap.channel),alphaMapUv:ge&&S(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(gt||It),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(st||ge),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:Qe&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$n,flipSided:T.side===gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&T.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(g(E,T),x(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const E=_[T.type];let D;if(E){const I=si[E];D=wA.clone(I.uniforms)}else D=T.uniforms;return D}function R(T,E){let D;for(let I=0,B=d.length;I<B;I++){const Y=d[I];if(Y.cacheKey===E){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new ZC(t,E,T,r),d.push(D)),D}function A(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function w(T){l.remove(T)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:N}}function e3(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function t3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function A0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(h,f,p,_,S,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:S,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=m),e++,u}function o(h,f,p,_,S,m){const u=s(h,f,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,f,p,_,S,m){const u=s(h,f,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||t3),i.length>1&&i.sort(f||A0),a.length>1&&a.sort(f||A0)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function n3(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new w0,t.set(i,[s])):a>=r.length?(s=new w0,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function i3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ke};break;case"SpotLight":n={position:new j,direction:new j,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function a3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let r3=0;function s3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o3(t){const e=new i3,n=a3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const a=new j,r=new Ut,s=new Ut;function o(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,g=0,x=0,y=0,R=0,A=0,w=0;c.sort(s3);for(let T=0,E=c.length;T<E;T++){const D=c[T],I=D.color,B=D.intensity,Y=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=I.r*B,h+=I.g*B,f+=I.b*B;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],B);w++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,O=n.get(D);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=L,p++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(I).multiplyScalar(B),L.distance=Y,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[S]=L;const z=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[S]=z.matrix,D.castShadow){const O=n.get(D);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.spotShadow[S]=O,i.spotShadowMap[S]=Z,y++}S++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(I).multiplyScalar(B),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=L,m++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){const z=D.shadow,O=n.get(D);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=L,_++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(B),L.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[u]=L,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==S||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==x||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,N.directionalLength=p,N.pointLength=_,N.spotLength=S,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=x,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=w,i.version=r3++)}function l(c,d){let h=0,f=0,p=0,_=0,S=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),r.copy(x.matrixWorld),r.premultiply(m),s.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function R0(t){const e=new o3(t),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function l3(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new R0(t),e.set(a,[o])):r>=s.length?(o=new R0(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const c3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
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
}`;function f3(t,e,n){let i=new kp;const a=new at,r=new at,s=new Dt,o=new zA({depthPacking:YT}),l=new BA,c={},d=n.maxTextureSize,h={[Na]:gn,[gn]:Na,[$n]:$n},f=new Da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:c3,fragmentShader:u3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ki;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ti(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qx;let u=this.type;this.render=function(A,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ta),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=u!==Ci&&this.type===Ci,Y=u===Ci&&this.type!==Ci;for(let Z=0,L=A.length;Z<L;Z++){const z=A[Z],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const k=O.getFrameExtents();if(a.multiply(k),r.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/k.x),a.x=r.x*k.x,O.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/k.y),a.y=r.y*k.y,O.mapSize.y=r.y)),O.map===null||B===!0||Y===!0){const oe=this.type!==Ci?{minFilter:ii,magFilter:ii}:{};O.map!==null&&O.map.dispose(),O.map=new ur(a.x,a.y,oe),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const Q=O.getViewportCount();for(let oe=0;oe<Q;oe++){const Re=O.getViewport(oe);s.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),I.viewport(s),O.updateMatrices(z,oe),i=O.getFrustum(),y(w,N,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Ci&&g(O,N),O.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,E,D)};function g(A,w){const N=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ur(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,N,f,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,N,p,S,null)}function x(A,w,N,T){let E=null;const D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=N.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=E.uuid,B=w.uuid;let Y=c[I];Y===void 0&&(Y={},c[I]=Y);let Z=Y[B];Z===void 0&&(Z=E.clone(),Y[B]=Z,w.addEventListener("dispose",R)),E=Z}if(E.visible=w.visible,E.wireframe=w.wireframe,T===Ci?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=t.properties.get(E);I.light=N}return E}function y(A,w,N,T,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const Z=B.groups;for(let L=0,z=Z.length;L<z;L++){const O=Z[L],k=Y[O.materialIndex];if(k&&k.visible){const Q=x(A,k,T,E);A.onBeforeShadow(t,A,w,N,B,Q,O),t.renderBufferDirect(N,null,B,Q,A,O),A.onAfterShadow(t,A,w,N,B,Q,O)}}}else if(Y.visible){const Z=x(A,Y,T,E);A.onBeforeShadow(t,A,w,N,B,Z,null),t.renderBufferDirect(N,null,B,Z,A,null),A.onAfterShadow(t,A,w,N,B,Z,null)}}const I=A.children;for(let B=0,Y=I.length;B<Y;B++)y(I[B],w,N,T,E)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const T=c[N],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const d3={[Hd]:Gd,[Vd]:Xd,[kd]:Wd,[_s]:jd,[Gd]:Hd,[Xd]:Vd,[Wd]:kd,[jd]:_s};function h3(t,e){function n(){let P=!1;const de=new Dt;let ae=null;const ge=new Dt(0,0,0,0);return{setMask:function(re){ae!==re&&!P&&(t.colorMask(re,re,re,re),ae=re)},setLocked:function(re){P=re},setClear:function(re,ee,ve,Ie,_t){_t===!0&&(re*=Ie,ee*=Ie,ve*=Ie),de.set(re,ee,ve,Ie),ge.equals(de)===!1&&(t.clearColor(re,ee,ve,Ie),ge.copy(de))},reset:function(){P=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let P=!1,de=!1,ae=null,ge=null,re=null;return{setReversed:function(ee){if(de!==ee){const ve=e.get("EXT_clip_control");ee?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),de=ee;const Ie=re;re=null,this.setClear(Ie)}},getReversed:function(){return de},setTest:function(ee){ee?le(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ee){ae!==ee&&!P&&(t.depthMask(ee),ae=ee)},setFunc:function(ee){if(de&&(ee=d3[ee]),ge!==ee){switch(ee){case Hd:t.depthFunc(t.NEVER);break;case Gd:t.depthFunc(t.ALWAYS);break;case Vd:t.depthFunc(t.LESS);break;case _s:t.depthFunc(t.LEQUAL);break;case kd:t.depthFunc(t.EQUAL);break;case jd:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ee}},setLocked:function(ee){P=ee},setClear:function(ee){re!==ee&&(de&&(ee=1-ee),t.clearDepth(ee),re=ee)},reset:function(){P=!1,ae=null,ge=null,re=null,de=!1}}}function a(){let P=!1,de=null,ae=null,ge=null,re=null,ee=null,ve=null,Ie=null,_t=null;return{setTest:function(ot){P||(ot?le(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(ot){de!==ot&&!P&&(t.stencilMask(ot),de=ot)},setFunc:function(ot,qn,yi){(ae!==ot||ge!==qn||re!==yi)&&(t.stencilFunc(ot,qn,yi),ae=ot,ge=qn,re=yi)},setOp:function(ot,qn,yi){(ee!==ot||ve!==qn||Ie!==yi)&&(t.stencilOp(ot,qn,yi),ee=ot,ve=qn,Ie=yi)},setLocked:function(ot){P=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){P=!1,de=null,ae=null,ge=null,re=null,ee=null,ve=null,Ie=null,_t=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,x=null,y=null,R=null,A=null,w=new Ke(0,0,0),N=0,T=!1,E=null,D=null,I=null,B=null,Y=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,z=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=z>=2);let k=null,Q={};const oe=t.getParameter(t.SCISSOR_BOX),Re=t.getParameter(t.VIEWPORT),ze=new Dt().fromArray(oe),X=new Dt().fromArray(Re);function ne(P,de,ae,ge){const re=new Uint8Array(4),ee=t.createTexture();t.bindTexture(P,ee),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<ae;ve++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(de+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return ee}const xe={};xe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(_s),tt(!1),gt(Ug),le(t.CULL_FACE),U(Ta);function le(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function ye(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ae(P,de){return h[P]!==de?(t.bindFramebuffer(P,de),h[P]=de,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(P,de){let ae=p,ge=!1;if(P){ae=f.get(de),ae===void 0&&(ae=[],f.set(de,ae));const re=P.textures;if(ae.length!==re.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,ve=re.length;ee<ve;ee++)ae[ee]=t.COLOR_ATTACHMENT0+ee;ae.length=re.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function st(P){return _!==P?(t.useProgram(P),_=P,!0):!1}const et={[Ya]:t.FUNC_ADD,[yT]:t.FUNC_SUBTRACT,[ST]:t.FUNC_REVERSE_SUBTRACT};et[MT]=t.MIN,et[ET]=t.MAX;const Ye={[bT]:t.ZERO,[TT]:t.ONE,[AT]:t.SRC_COLOR,[Id]:t.SRC_ALPHA,[UT]:t.SRC_ALPHA_SATURATE,[NT]:t.DST_COLOR,[RT]:t.DST_ALPHA,[wT]:t.ONE_MINUS_SRC_COLOR,[Fd]:t.ONE_MINUS_SRC_ALPHA,[DT]:t.ONE_MINUS_DST_COLOR,[CT]:t.ONE_MINUS_DST_ALPHA,[LT]:t.CONSTANT_COLOR,[OT]:t.ONE_MINUS_CONSTANT_COLOR,[PT]:t.CONSTANT_ALPHA,[zT]:t.ONE_MINUS_CONSTANT_ALPHA};function U(P,de,ae,ge,re,ee,ve,Ie,_t,ot){if(P===Ta){S===!0&&(ye(t.BLEND),S=!1);return}if(S===!1&&(le(t.BLEND),S=!0),P!==xT){if(P!==m||ot!==T){if((u!==Ya||y!==Ya)&&(t.blendEquation(t.FUNC_ADD),u=Ya,y=Ya),ot)switch(P){case as:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Og:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,x=null,R=null,A=null,w.set(0,0,0),N=0,m=P,T=ot}return}re=re||de,ee=ee||ae,ve=ve||ge,(de!==u||re!==y)&&(t.blendEquationSeparate(et[de],et[re]),u=de,y=re),(ae!==g||ge!==x||ee!==R||ve!==A)&&(t.blendFuncSeparate(Ye[ae],Ye[ge],Ye[ee],Ye[ve]),g=ae,x=ge,R=ee,A=ve),(Ie.equals(w)===!1||_t!==N)&&(t.blendColor(Ie.r,Ie.g,Ie.b,_t),w.copy(Ie),N=_t),m=P,T=!1}function an(P,de){P.side===$n?ye(t.CULL_FACE):le(t.CULL_FACE);let ae=P.side===gn;de&&(ae=!ae),tt(ae),P.blending===as&&P.transparent===!1?U(Ta):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const ge=P.stencilWrite;o.setTest(ge),ge&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Qe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function tt(P){E!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),E=P)}function gt(P){P!==vT?(le(t.CULL_FACE),P!==D&&(P===Ug?t.cullFace(t.BACK):P===_T?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),D=P}function Me(P){P!==I&&(L&&t.lineWidth(P),I=P)}function Qe(P,de,ae){P?(le(t.POLYGON_OFFSET_FILL),(B!==de||Y!==ae)&&(t.polygonOffset(de,ae),B=de,Y=ae)):ye(t.POLYGON_OFFSET_FILL)}function Ce(P){P?le(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function He(P){P===void 0&&(P=t.TEXTURE0+Z-1),k!==P&&(t.activeTexture(P),k=P)}function It(P,de,ae){ae===void 0&&(k===null?ae=t.TEXTURE0+Z-1:ae=k);let ge=Q[ae];ge===void 0&&(ge={type:void 0,texture:void 0},Q[ae]=ge),(ge.type!==P||ge.texture!==de)&&(k!==ae&&(t.activeTexture(ae),k=ae),t.bindTexture(P,de||xe[P]),ge.type=P,ge.texture=de)}function C(){const P=Q[k];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(P){ze.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ze.copy(P))}function Ue(P){X.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function De(P,de){let ae=c.get(de);ae===void 0&&(ae=new WeakMap,c.set(de,ae));let ge=ae.get(P);ge===void 0&&(ge=t.getUniformBlockIndex(de,P.name),ae.set(P,ge))}function ce(P,de){const ge=c.get(de).get(P);l.get(de)!==ge&&(t.uniformBlockBinding(de,ge,P.__bindingPointIndex),l.set(de,ge))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},k=null,Q={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,x=null,y=null,R=null,A=null,w=new Ke(0,0,0),N=0,T=!1,E=null,D=null,I=null,B=null,Y=null,ze.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ye,bindFramebuffer:Ae,drawBuffers:Te,useProgram:st,setBlending:U,setMaterial:an,setFlipSided:tt,setCullFace:gt,setLineWidth:Me,setPolygonOffset:Qe,setScissorTest:Ce,activeTexture:He,bindTexture:It,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:be,texImage3D:ie,updateUBOMapping:De,uniformBlockBinding:ce,texStorage2D:fe,texStorage3D:Se,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Ee,scissor:pe,viewport:Ue,reset:Be}}function p3(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):qc("canvas")}function S(C,M,V){let $=1;const te=It(C);if((te.width>V||te.height>V)&&($=V/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*te.width),Ee=Math.floor($*te.height);h===void 0&&(h=_(K,Ee));const fe=M?_(K,Ee):h;return fe.width=K,fe.height=Ee,fe.getContext("2d").drawImage(C,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ee+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){t.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,M,V,$,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=M;if(M===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),M===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGB8UI),V===t.UNSIGNED_SHORT&&(K=t.RGB16UI),V===t.UNSIGNED_INT&&(K=t.RGB32UI),V===t.BYTE&&(K=t.RGB8I),V===t.SHORT&&(K=t.RGB16I),V===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),V===t.UNSIGNED_INT&&(K=t.RGBA32UI),V===t.BYTE&&(K=t.RGBA8I),V===t.SHORT&&(K=t.RGBA16I),V===t.INT&&(K=t.RGBA32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const Ee=te?Xc:Je.getTransfer($);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=Ee===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(C,M){let V;return C?M===null||M===cr||M===Uo?V=t.DEPTH24_STENCIL8:M===zi?V=t.DEPTH32F_STENCIL8:M===Do&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cr||M===Uo?V=t.DEPTH_COMPONENT24:M===zi?V=t.DEPTH_COMPONENT32F:M===Do&&(V=t.DEPTH_COMPONENT16),V}function R(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),N(M),M.isVideoTexture&&d.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),E(M)}function N(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,$=f.get(V);if($){const te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(C),Object.keys($).length===0&&f.delete(V)}i.remove(C)}function T(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,$=f.get(V);delete $[M.__cacheKey],s.memory.textures--}function E(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[$][te]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let $=0,te=V.length;$<te;$++){const K=i.get(V[$]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(V[$])}i.remove(C)}let D=0;function I(){D=0}function B(){const C=D;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),D+=1,C}function Y(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){const V=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,C,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function L(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){xe(V,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function z(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){xe(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function O(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){le(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const k={[Zd]:t.REPEAT,[Ka]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},Q={[ii]:t.NEAREST,[WT]:t.NEAREST_MIPMAP_NEAREST,[bl]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[Qa]:t.LINEAR_MIPMAP_LINEAR},oe={[KT]:t.NEVER,[nA]:t.ALWAYS,[QT]:t.LESS,[ay]:t.LEQUAL,[$T]:t.EQUAL,[tA]:t.GEQUAL,[JT]:t.GREATER,[eA]:t.NOTEQUAL};function Re(C,M){if(M.type===zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ci||M.magFilter===sf||M.magFilter===bl||M.magFilter===Qa||M.minFilter===ci||M.minFilter===sf||M.minFilter===bl||M.minFilter===Qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,k[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,k[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,k[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==bl&&M.minFilter!==Qa||M.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ze(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let te=f.get($);te===void 0&&(te={},f.set($,te));const K=Y(M);if(K!==C.__cacheKey){te[K]===void 0&&(te[K]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),te[K].usedTimes++;const Ee=te[C.__cacheKey];Ee!==void 0&&(te[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(M)),C.__cacheKey=K,C.__webglTexture=te[K].texture}return V}function X(C,M,V){return Math.floor(Math.floor(C/V)/M)}function ne(C,M,V,$){const K=C.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,$,M.data);else{K.sort((ie,pe)=>ie.start-pe.start);let Ee=0;for(let ie=1;ie<K.length;ie++){const pe=K[Ee],Ue=K[ie],De=pe.start+pe.count,ce=X(Ue.start,M.width,4),Be=X(pe.start,M.width,4);Ue.start<=De+1&&ce===Be&&X(Ue.start+Ue.count-1,M.width,4)===ce?pe.count=Math.max(pe.count,Ue.start+Ue.count-pe.start):(++Ee,K[Ee]=Ue)}K.length=Ee+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Se=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let ie=0,pe=K.length;ie<pe;ie++){const Ue=K[ie],De=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),Be=De%M.width,P=Math.floor(De/M.width),de=ce,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Be,P,de,ae,V,$,M.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function xe(C,M,V){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const te=ze(C,M),K=M.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+V);const Ee=i.get(K);if(K.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const fe=Je.getPrimaries(Je.workingColorSpace),Se=M.colorSpace===da?null:Je.getPrimaries(M.colorSpace),be=M.colorSpace===da||fe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ie=S(M.image,!1,a.maxTextureSize);ie=He(M,ie);const pe=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type);let De=x(M.internalFormat,pe,Ue,M.colorSpace,M.isVideoTexture);Re($,M);let ce;const Be=M.mipmaps,P=M.isVideoTexture!==!0,de=Ee.__version===void 0||te===!0,ae=K.dataReady,ge=R(M,ie);if(M.isDepthTexture)De=y(M.format===Oo,M.type),de&&(P?n.texStorage2D(t.TEXTURE_2D,1,De,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,pe,Ue,null));else if(M.isDataTexture)if(Be.length>0){P&&de&&n.texStorage2D(t.TEXTURE_2D,ge,De,Be[0].width,Be[0].height);for(let re=0,ee=Be.length;re<ee;re++)ce=Be[re],P?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ce.width,ce.height,pe,Ue,ce.data):n.texImage2D(t.TEXTURE_2D,re,De,ce.width,ce.height,0,pe,Ue,ce.data);M.generateMipmaps=!1}else P?(de&&n.texStorage2D(t.TEXTURE_2D,ge,De,ie.width,ie.height),ae&&ne(M,ie,pe,Ue)):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,pe,Ue,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,De,Be[0].width,Be[0].height,ie.depth);for(let re=0,ee=Be.length;re<ee;re++)if(ce=Be[re],M.format!==ei)if(pe!==null)if(P){if(ae)if(M.layerUpdates.size>0){const ve=a0(ce.width,ce.height,M.format,M.type);for(const Ie of M.layerUpdates){const _t=ce.data.subarray(Ie*ve/ce.data.BYTES_PER_ELEMENT,(Ie+1)*ve/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ie,ce.width,ce.height,1,pe,_t)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,ie.depth,pe,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,De,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,ie.depth,pe,Ue,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,De,ce.width,ce.height,ie.depth,0,pe,Ue,ce.data)}else{P&&de&&n.texStorage2D(t.TEXTURE_2D,ge,De,Be[0].width,Be[0].height);for(let re=0,ee=Be.length;re<ee;re++)ce=Be[re],M.format!==ei?pe!==null?P?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ce.width,ce.height,pe,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,re,De,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ce.width,ce.height,pe,Ue,ce.data):n.texImage2D(t.TEXTURE_2D,re,De,ce.width,ce.height,0,pe,Ue,ce.data)}else if(M.isDataArrayTexture)if(P){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,De,ie.width,ie.height,ie.depth),ae)if(M.layerUpdates.size>0){const re=a0(ie.width,ie.height,M.format,M.type);for(const ee of M.layerUpdates){const ve=ie.data.subarray(ee*re/ie.data.BYTES_PER_ELEMENT,(ee+1)*re/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,pe,Ue,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(M.isData3DTexture)P?(de&&n.texStorage3D(t.TEXTURE_3D,ge,De,ie.width,ie.height,ie.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ue,ie.data)):n.texImage3D(t.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,pe,Ue,ie.data);else if(M.isFramebufferTexture){if(de)if(P)n.texStorage2D(t.TEXTURE_2D,ge,De,ie.width,ie.height);else{let re=ie.width,ee=ie.height;for(let ve=0;ve<ge;ve++)n.texImage2D(t.TEXTURE_2D,ve,De,re,ee,0,pe,Ue,null),re>>=1,ee>>=1}}else if(Be.length>0){if(P&&de){const re=It(Be[0]);n.texStorage2D(t.TEXTURE_2D,ge,De,re.width,re.height)}for(let re=0,ee=Be.length;re<ee;re++)ce=Be[re],P?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe,Ue,ce):n.texImage2D(t.TEXTURE_2D,re,De,pe,Ue,ce);M.generateMipmaps=!1}else if(P){if(de){const re=It(ie);n.texStorage2D(t.TEXTURE_2D,ge,De,re.width,re.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ue,ie)}else n.texImage2D(t.TEXTURE_2D,0,De,pe,Ue,ie);m(M)&&u($),Ee.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,V){if(M.image.length!==6)return;const $=ze(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const K=i.get(te);if(te.version!==K.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const Ee=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===da?null:Je.getPrimaries(M.colorSpace),Se=M.colorSpace===da||Ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!be&&!ie?pe[ee]=S(M.image[ee],!0,a.maxCubemapSize):pe[ee]=ie?M.image[ee].image:M.image[ee],pe[ee]=He(M,pe[ee]);const Ue=pe[0],De=r.convert(M.format,M.colorSpace),ce=r.convert(M.type),Be=x(M.internalFormat,De,ce,M.colorSpace),P=M.isVideoTexture!==!0,de=K.__version===void 0||$===!0,ae=te.dataReady;let ge=R(M,Ue);Re(t.TEXTURE_CUBE_MAP,M);let re;if(be){P&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Be,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){re=pe[ee].mipmaps;for(let ve=0;ve<re.length;ve++){const Ie=re[ve];M.format!==ei?De!==null?P?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,Ie.width,Ie.height,De,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Be,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,Ie.width,Ie.height,De,ce,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Be,Ie.width,Ie.height,0,De,ce,Ie.data)}}}else{if(re=M.mipmaps,P&&de){re.length>0&&ge++;const ee=It(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){P?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,De,ce,pe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,pe[ee].width,pe[ee].height,0,De,ce,pe[ee].data);for(let ve=0;ve<re.length;ve++){const _t=re[ve].image[ee].image;P?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,_t.width,_t.height,De,ce,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Be,_t.width,_t.height,0,De,ce,_t.data)}}else{P?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,ce,pe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,De,ce,pe[ee]);for(let ve=0;ve<re.length;ve++){const Ie=re[ve];P?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,De,ce,Ie.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Be,De,ce,Ie.image[ee])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),K.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,V,$,te,K){const Ee=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),Se=x(V.internalFormat,Ee,fe,V.colorSpace),be=i.get(M),ie=i.get(V);if(ie.__renderTarget=M,!be.__hasExternalTextures){const pe=Math.max(1,M.width>>K),Ue=Math.max(1,M.height>>K);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,K,Se,pe,Ue,M.depth,0,Ee,fe,null):n.texImage2D(te,K,Se,pe,Ue,0,Ee,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,ie.__webglTexture,0,Me(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,ie.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,K=y(M.stencilBuffer,te),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Me(M);Qe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,K,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,C)}else{const $=M.textures;for(let te=0;te<$.length;te++){const K=$[te],Ee=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),Se=x(K.internalFormat,Ee,fe,K.colorSpace),be=Me(M);V&&Qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Se,M.width,M.height):Qe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const te=$.__webglTexture,K=Me(M);if(M.depthTexture.format===Lo)Qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Oo)Qe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function st(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Te(M.__webglFramebuffer[0],C):Te(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),Ae(M.__webglDepthbuffer[$],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}else{const $=C.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ae(M.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(C,M,V){const $=i.get(C);M!==void 0&&ye($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&st(C)}function Ye(C){const M=C.texture,V=i.get(C),$=i.get(M);C.addEventListener("dispose",w);const te=C.textures,K=C.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,s.memory.textures++),K){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)V.__webglFramebuffer[fe][Se]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let fe=0,Se=te.length;fe<Se;fe++){const be=i.get(te[fe]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),s.memory.textures++)}if(C.samples>0&&Qe(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const Se=te[fe];V.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const be=r.convert(Se.format,Se.colorSpace),ie=r.convert(Se.type),pe=x(Se.internalFormat,be,ie,Se.colorSpace,C.isXRRenderTarget===!0),Ue=Me(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Re(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ye(V.__webglFramebuffer[fe][Se],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else ye(V.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let fe=0,Se=te.length;fe<Se;fe++){const be=te[fe],ie=i.get(be);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),Re(t.TEXTURE_2D,be),ye(V.__webglFramebuffer,C,be,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(be)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,$.__webglTexture),Re(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ye(V.__webglFramebuffer[Se],C,M,t.COLOR_ATTACHMENT0,fe,Se);else ye(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&u(fe),n.unbindTexture()}C.depthBuffer&&st(C)}function U(C){const M=C.textures;for(let V=0,$=M.length;V<$;V++){const te=M[V];if(m(te)){const K=g(C),Ee=i.get(te).__webglTexture;n.bindTexture(K,Ee),u(K),n.unbindTexture()}}}const an=[],tt=[];function gt(C){if(C.samples>0){if(Qe(C)===!1){const M=C.textures,V=C.width,$=C.height;let te=t.COLOR_BUFFER_BIT;const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(C),fe=M.length>1;if(fe)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Se=C.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let be=0;be<M.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);const ie=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,te,t.NEAREST),l===!0&&(an.length=0,tt.length=0,an.push(t.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(an.push(K),tt.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,an))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);const ie=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Me(C){return Math.min(a.maxSamples,C.samples)}function Qe(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(C){const M=s.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function He(C,M){const V=C.colorSpace,$=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ss&&V!==da&&(Je.getTransfer(V)===ft?($!==ei||te!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=et,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Qe}function m3(t,e){function n(i,a=da){let r;const s=Je.getTransfer(a);if(i===mi)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zx)return t.BYTE;if(i===Kx)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===Pp)return t.INT;if(i===cr)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===el)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===Jx)return t.RGB;if(i===ei)return t.RGBA;if(i===Lo)return t.DEPTH_COMPONENT;if(i===Oo)return t.DEPTH_STENCIL;if(i===ey)return t.RED;if(i===Ip)return t.RED_INTEGER;if(i===ty)return t.RG;if(i===Fp)return t.RG_INTEGER;if(i===Hp)return t.RGBA_INTEGER;if(i===oc||i===lc||i===cc||i===uc)if(s===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qd||i===$d||i===Jd||i===eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===th||i===nh)return s===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ah||i===rh||i===sh||i===oh||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===vh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ah)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fc||i===_h||i===xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fc)return s===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ny||i===yh||i===Sh||i===Mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
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

}`;class _3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new vn,r=e.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Da({vertexShader:g3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new _u(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x3 extends Us{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const S=new _3,m=n.getContextAttributes();let u=null,g=null;const x=[],y=[],R=new at;let A=null;const w=new wn;w.viewport=new Dt;const N=new wn;N.viewport=new Dt;const T=[w,N],E=new HA;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=x[X];return ne===void 0&&(ne=new Cf,x[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=x[X];return ne===void 0&&(ne=new Cf,x[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=x[X];return ne===void 0&&(ne=new Cf,x[X]=ne),ne.getHandSpace()};function B(X){const ne=y.indexOf(X.inputSource);if(ne===-1)return;const xe=x[ne];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||s),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const ne=y[X];ne!==null&&(y[X]=null,x[X].disconnect(ne))}D=null,I=null,S.reset(),e.setRenderTarget(u),p=null,f=null,h=null,a=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,le=null,ye=null;m.depth&&(ye=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=m.stencil?Oo:Lo,le=m.stencil?Uo:cr);const Ae={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(a,n),f=h.createProjectionLayer(Ae),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new ur(f.textureWidth,f.textureHeight,{format:ei,type:mi,depthTexture:new gy(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,xe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ur(p.framebufferWidth,p.framebufferHeight,{format:ei,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ze.setContext(a),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(X){for(let ne=0;ne<X.removed.length;ne++){const xe=X.removed[ne],le=y.indexOf(xe);le>=0&&(y[le]=null,x[le].disconnect(xe))}for(let ne=0;ne<X.added.length;ne++){const xe=X.added[ne];let le=y.indexOf(xe);if(le===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=y.length){y.push(xe),le=Ae;break}else if(y[Ae]===null){y[Ae]=xe,le=Ae;break}if(le===-1)break}const ye=x[le];ye&&ye.connect(xe)}}const L=new j,z=new j;function O(X,ne,xe){L.setFromMatrixPosition(ne.matrixWorld),z.setFromMatrixPosition(xe.matrixWorld);const le=L.distanceTo(z),ye=ne.projectionMatrix.elements,Ae=xe.projectionMatrix.elements,Te=ye[14]/(ye[10]-1),st=ye[14]/(ye[10]+1),et=(ye[9]+1)/ye[5],Ye=(ye[9]-1)/ye[5],U=(ye[8]-1)/ye[0],an=(Ae[8]+1)/Ae[0],tt=Te*U,gt=Te*an,Me=le/(-U+an),Qe=Me*-U;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ye[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ce=Te+Me,He=st+Me,It=tt-Qe,C=gt+(le-Qe),M=et*st/He*Ce,V=Ye*st/He*Ce;X.projectionMatrix.makePerspective(It,C,M,V,Ce,He),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function k(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let ne=X.near,xe=X.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),E.near=N.near=w.near=ne,E.far=N.far=w.far=xe,(D!==E.near||I!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,I=E.far),w.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,E.layers.mask=w.layers.mask|N.layers.mask;const le=X.parent,ye=E.cameras;k(E,le);for(let Ae=0;Ae<ye.length;Ae++)k(ye[Ae],le);ye.length===2?O(E,w,N):E.projectionMatrix.copy(w.projectionMatrix),Q(X,E,le)};function Q(X,ne,xe){xe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Eh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let oe=null;function Re(X,ne){if(d=ne.getViewerPose(c||s),_=ne,d!==null){const xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let Te=0;Te<xe.length;Te++){const st=xe[Te];let et=null;if(p!==null)et=p.getViewport(st);else{const U=h.getViewSubImage(f,st);et=U.viewport,Te===0&&(e.setRenderTargetTextures(g,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(g))}let Ye=T[Te];Ye===void 0&&(Ye=new wn,Ye.layers.enable(Te),Ye.viewport=new Dt,T[Te]=Ye),Ye.matrix.fromArray(st.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(st.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),Te===0&&(E.matrix.copy(Ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),le===!0&&E.cameras.push(Ye)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&h){const Te=h.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&S.init(e,Te,a.renderState)}}for(let xe=0;xe<x.length;xe++){const le=y[xe],ye=x[xe];le!==null&&ye!==void 0&&ye.update(le,ne,c||s)}oe&&oe(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ze=new Sy;ze.setAnimationLoop(Re),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Va=new gi,y3=new Ut;function S3(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,dy(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===gn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===gn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,Va.copy(y),Va.x*=-1,Va.y*=-1,Va.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Va.y*=-1,Va.z*=-1),m.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(Va)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function M3(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=a[g.id];y===void 0&&(_(g),y=d(g),a[g.id]=y,g.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(g,R);const A=e.render.frame;r[g.id]!==A&&(f(g),r[g.id]=A)}function d(g){const x=h();g.__bindingPointIndex=x;const y=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=a[g.id],y=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,E=N.length;T<E;T++){const D=N[T];if(p(D,A,T,R)===!0){const I=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let Z=0;Z<B.length;Z++){const L=B[Z],z=S(L);typeof L=="number"||typeof L=="boolean"?(D.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,I+Y,D.__data)):L.isMatrix3?(D.__data[0]=L.elements[0],D.__data[1]=L.elements[1],D.__data[2]=L.elements[2],D.__data[3]=0,D.__data[4]=L.elements[3],D.__data[5]=L.elements[4],D.__data[6]=L.elements[5],D.__data[7]=0,D.__data[8]=L.elements[6],D.__data[9]=L.elements[7],D.__data[10]=L.elements[8],D.__data[11]=0):(L.toArray(D.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,R){const A=g.value,w=x+"_"+y;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const N=R[w];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[w]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(g){const x=g.uniforms;let y=0;const R=16;for(let w=0,N=x.length;w<N;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,D=T.length;E<D;E++){const I=T[E],B=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,Z=B.length;Y<Z;Y++){const L=B[Y],z=S(L),O=y%R,k=O%z.boundary,Q=O+k;y+=k,Q!==0&&R-Q<z.storage&&(y+=R-Q),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=z.storage}}}const A=y%R;return A>0&&(y+=R-A),g.__size=y,g.__cache={},this}function S(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function u(){for(const g in a)t.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class Ay{constructor(e={}){const{canvas:n=aA(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),S=new Int32Array(4);let m=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=In;let A=0,w=0,N=null,T=-1,E=null;const D=new Dt,I=new Dt;let B=null;const Y=new Ke(0);let Z=0,L=n.width,z=n.height,O=1,k=null,Q=null;const oe=new Dt(0,0,L,z),Re=new Dt(0,0,L,z);let ze=!1;const X=new kp;let ne=!1,xe=!1;const le=new Ut,ye=new Ut,Ae=new j,Te=new Dt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ye(){return N===null?O:1}let U=i;function an(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Up}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",ee,!1),U===null){const F="webgl2";if(U=an(F,b),U===null)throw an(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let tt,gt,Me,Qe,Ce,He,It,C,M,V,$,te,K,Ee,fe,Se,be,ie,pe,Ue,De,ce,Be,P;function de(){tt=new L2(U),tt.init(),ce=new m3(U,tt),gt=new A2(U,tt,e,ce),Me=new h3(U,tt),gt.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),Qe=new z2(U),Ce=new e3,He=new p3(U,tt,Me,Ce,gt,ce,Qe),It=new R2(y),C=new U2(y),M=new VA(U),Be=new b2(U,M),V=new O2(U,M,Qe,Be),$=new I2(U,V,M,Qe),pe=new B2(U,gt,He),Se=new w2(Ce),te=new JC(y,It,C,tt,gt,Be,Se),K=new S3(y,Ce),Ee=new n3,fe=new l3(tt),ie=new E2(y,It,C,Me,$,p,l),be=new f3(y,$,gt),P=new M3(U,Qe,gt,Me),Ue=new T2(U,tt,Qe),De=new P2(U,tt,Qe),Qe.programs=te.programs,y.capabilities=gt,y.extensions=tt,y.properties=Ce,y.renderLists=Ee,y.shadowMap=be,y.state=Me,y.info=Qe}de();const ae=new x3(y,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(L,z,!1))},this.getSize=function(b){return b.set(L,z)},this.setSize=function(b,F,W=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,z=F,n.width=Math.floor(b*O),n.height=Math.floor(F*O),W===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(L*O,z*O).floor()},this.setDrawingBufferSize=function(b,F,W){L=b,z=F,O=W,n.width=Math.floor(b*W),n.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,F,W,q){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,F,W,q),Me.viewport(D.copy(oe).multiplyScalar(O).round())},this.getScissor=function(b){return b.copy(Re)},this.setScissor=function(b,F,W,q){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,F,W,q),Me.scissor(I.copy(Re).multiplyScalar(O).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){Me.setScissorTest(ze=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let q=0;if(b){let H=!1;if(N!==null){const se=N.texture.format;H=se===Hp||se===Fp||se===Ip}if(H){const se=N.texture.type,he=se===mi||se===cr||se===Do||se===Uo||se===zp||se===Bp,_e=ie.getClearColor(),me=ie.getClearAlpha(),Oe=_e.r,Pe=_e.g,we=_e.b;he?(_[0]=Oe,_[1]=Pe,_[2]=we,_[3]=me,U.clearBufferuiv(U.COLOR,0,_)):(S[0]=Oe,S[1]=Pe,S[2]=we,S[3]=me,U.clearBufferiv(U.COLOR,0,S))}else q|=U.COLOR_BUFFER_BIT}F&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),ie.dispose(),Ee.dispose(),fe.dispose(),Ce.dispose(),It.dispose(),C.dispose(),$.dispose(),Be.dispose(),P.dispose(),te.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Xp),ae.removeEventListener("sessionend",Wp),Oa.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Qe.autoReset,F=be.enabled,W=be.autoUpdate,q=be.needsUpdate,H=be.type;de(),Qe.autoReset=b,be.enabled=F,be.autoUpdate=W,be.needsUpdate=q,be.type=H}function ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){const F=b.target;F.removeEventListener("dispose",ve),Ie(F)}function Ie(b){_t(b),Ce.remove(b)}function _t(b){const F=Ce.get(b).programs;F!==void 0&&(F.forEach(function(W){te.releaseProgram(W)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,q,H,se){F===null&&(F=st);const he=H.isMesh&&H.matrixWorld.determinant()<0,_e=Ry(b,F,W,q,H);Me.setMaterial(q,he);let me=W.index,Oe=1;if(q.wireframe===!0){if(me=V.getWireframeAttribute(W),me===void 0)return;Oe=2}const Pe=W.drawRange,we=W.attributes.position;let We=Pe.start*Oe,ut=(Pe.start+Pe.count)*Oe;se!==null&&(We=Math.max(We,se.start*Oe),ut=Math.min(ut,(se.start+se.count)*Oe)),me!==null?(We=Math.max(We,0),ut=Math.min(ut,me.count)):we!=null&&(We=Math.max(We,0),ut=Math.min(ut,we.count));const Rt=ut-We;if(Rt<0||Rt===1/0)return;Be.setup(H,q,_e,W,me);let xt,pt=Ue;if(me!==null&&(xt=M.get(me),pt=De,pt.setIndex(xt)),H.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*Ye()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(H.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),Me.setLineWidth(Ne*Ye()),H.isLineSegments?pt.setMode(U.LINES):H.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else H.isPoints?pt.setMode(U.POINTS):H.isSprite&&pt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ne=H._multiDrawStarts,Tt=H._multiDrawCounts,$e=H._multiDrawCount,yn=me?M.get(me).bytesPerElement:1,gr=Ce.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<$e;Sn++)gr.setValue(U,"_gl_DrawID",Sn),pt.render(Ne[Sn]/yn,Tt[Sn])}else if(H.isInstancedMesh)pt.renderInstances(We,Rt,H.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,Ne);pt.renderInstances(We,Rt,Tt)}else pt.render(We,Rt)};function ot(b,F,W){b.transparent===!0&&b.side===$n&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,ol(b,F,W),b.side=Na,b.needsUpdate=!0,ol(b,F,W),b.side=$n):ol(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),u=fe.get(W),u.init(F),x.push(u),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),b!==W&&b.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const q=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const se=H.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const _e=se[he];ot(_e,W,H),q.add(_e)}else ot(se,W,H),q.add(se)}),u=x.pop(),q},this.compileAsync=function(b,F,W=null){const q=this.compile(b,F,W);return new Promise(H=>{function se(){if(q.forEach(function(he){Ce.get(he).currentProgram.isReady()&&q.delete(he)}),q.size===0){H(b);return}setTimeout(se,10)}tt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let qn=null;function yi(b){qn&&qn(b)}function Xp(){Oa.stop()}function Wp(){Oa.start()}const Oa=new Sy;Oa.setAnimationLoop(yi),typeof self<"u"&&Oa.setContext(self),this.setAnimationLoop=function(b){qn=b,ae.setAnimationLoop(b),b===null?Oa.stop():Oa.start()},ae.addEventListener("sessionstart",Xp),ae.addEventListener("sessionend",Wp),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,N),u=fe.get(b,x.length),u.init(F),x.push(u),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ye),xe=this.localClippingEnabled,ne=Se.init(this.clippingPlanes,xe),m=Ee.get(b,g.length),m.init(),g.push(m),ae.enabled===!0&&ae.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&yu(se,F,-1/0,y.sortObjects)}yu(b,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(k,Q),et=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,et&&ie.addToRenderList(m,b),this.info.render.frame++,ne===!0&&Se.beginShadows();const W=u.state.shadowsArray;be.render(W,b,F),ne===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(u.setupLights(),F.isArrayCamera){const se=F.cameras;if(H.length>0)for(let he=0,_e=se.length;he<_e;he++){const me=se[he];Yp(q,H,b,me)}et&&ie.render(b);for(let he=0,_e=se.length;he<_e;he++){const me=se[he];qp(m,b,me,me.viewport)}}else H.length>0&&Yp(q,H,b,F),et&&ie.render(b),qp(m,b,F);N!==null&&w===0&&(He.updateMultisampleRenderTarget(N),He.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(y,b,F),Be.resetDefaultState(),T=-1,E=null,x.pop(),x.length>0?(u=x[x.length-1],ne===!0&&Se.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function yu(b,F,W,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){q&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ye);const he=$.update(b),_e=b.material;_e.visible&&m.push(b,he,_e,W,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const he=$.update(b),_e=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Te.copy(he.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(ye)),Array.isArray(_e)){const me=he.groups;for(let Oe=0,Pe=me.length;Oe<Pe;Oe++){const we=me[Oe],We=_e[we.materialIndex];We&&We.visible&&m.push(b,he,We,W,Te.z,we)}}else _e.visible&&m.push(b,he,_e,W,Te.z,null)}}const se=b.children;for(let he=0,_e=se.length;he<_e;he++)yu(se[he],F,W,q)}function qp(b,F,W,q){const H=b.opaque,se=b.transmissive,he=b.transparent;u.setupLightsView(W),ne===!0&&Se.setGlobalState(y.clippingPlanes,W),q&&Me.viewport(D.copy(q)),H.length>0&&sl(H,F,W),se.length>0&&sl(se,F,W),he.length>0&&sl(he,F,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Yp(b,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new ur(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?el:mi,minFilter:Qa,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=u.state.transmissionRenderTarget[q.id],he=q.viewport||D;se.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),me=y.getActiveCubeFace(),Oe=y.getActiveMipmapLevel();y.setRenderTarget(se),y.getClearColor(Y),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),et&&ie.render(W);const Pe=y.toneMapping;y.toneMapping=Aa;const we=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),ne===!0&&Se.setGlobalState(y.clippingPlanes,q),sl(b,W,q),He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ut=0,Rt=F.length;ut<Rt;ut++){const xt=F[ut],pt=xt.object,Ne=xt.geometry,Tt=xt.material,$e=xt.group;if(Tt.side===$n&&pt.layers.test(q.layers)){const yn=Tt.side;Tt.side=gn,Tt.needsUpdate=!0,Zp(pt,W,q,Ne,Tt,$e),Tt.side=yn,Tt.needsUpdate=!0,We=!0}}We===!0&&(He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se))}y.setRenderTarget(_e,me,Oe),y.setClearColor(Y,Z),we!==void 0&&(q.viewport=we),y.toneMapping=Pe}function sl(b,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let H=0,se=b.length;H<se;H++){const he=b[H],_e=he.object,me=he.geometry,Oe=he.group;let Pe=he.material;Pe.allowOverride===!0&&q!==null&&(Pe=q),_e.layers.test(W.layers)&&Zp(_e,F,W,me,Pe,Oe)}}function Zp(b,F,W,q,H,se){b.onBeforeRender(y,F,W,q,H,se),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(y,F,W,q,b,se),H.transparent===!0&&H.side===$n&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,y.renderBufferDirect(W,F,q,H,b,se),H.side=Na,H.needsUpdate=!0,y.renderBufferDirect(W,F,q,H,b,se),H.side=$n):y.renderBufferDirect(W,F,q,H,b,se),b.onAfterRender(y,F,W,q,H,se)}function ol(b,F,W){F.isScene!==!0&&(F=st);const q=Ce.get(b),H=u.state.lights,se=u.state.shadowsArray,he=H.state.version,_e=te.getParameters(b,H.state,se,F,W),me=te.getProgramCacheKey(_e);let Oe=q.programs;q.environment=b.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(b.isMeshStandardMaterial?C:It).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",ve),Oe=new Map,q.programs=Oe);let Pe=Oe.get(me);if(Pe!==void 0){if(q.currentProgram===Pe&&q.lightsStateVersion===he)return Qp(b,_e),Pe}else _e.uniforms=te.getUniforms(b),b.onBeforeCompile(_e,y),Pe=te.acquireProgram(_e,me),Oe.set(me,Pe),q.uniforms=_e.uniforms;const we=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=Se.uniform),Qp(b,_e),q.needsLights=Ny(b),q.lightsStateVersion=he,q.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMap.value=H.state.directionalShadowMap,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotShadowMap.value=H.state.spotShadowMap,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMap.value=H.state.pointShadowMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Pe,q.uniformsList=null,Pe}function Kp(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=dc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Qp(b,F){const W=Ce.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ry(b,F,W,q,H){F.isScene!==!0&&(F=st),He.resetTextureUnits();const se=F.fog,he=q.isMeshStandardMaterial?F.environment:null,_e=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ss,me=(q.isMeshStandardMaterial?C:It).get(q.envMap||he),Oe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),we=!!W.morphAttributes.position,We=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color;let Rt=Aa;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=y.toneMapping);const xt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=xt!==void 0?xt.length:0,Ne=Ce.get(q),Tt=u.state.lights;if(ne===!0&&(xe===!0||b!==E)){const rn=b===E&&q.id===T;Se.setState(q,b,rn)}let $e=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Tt.state.version||Ne.outputColorSpace!==_e||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==me||q.fog===!0&&Ne.fog!==se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Se.numPlanes||Ne.numIntersection!==Se.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Pe||Ne.morphTargets!==we||Ne.morphNormals!==We||Ne.morphColors!==ut||Ne.toneMapping!==Rt||Ne.morphTargetsCount!==pt)&&($e=!0):($e=!0,Ne.__version=q.version);let yn=Ne.currentProgram;$e===!0&&(yn=ol(q,F,H));let gr=!1,Sn=!1,Os=!1;const St=yn.getUniforms(),On=Ne.uniforms;if(Me.useProgram(yn.program)&&(gr=!0,Sn=!0,Os=!0),q.id!==T&&(T=q.id,Sn=!0),gr||E!==b){Me.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),sA(le),oA(le),St.setValue(U,"projectionMatrix",le)):St.setValue(U,"projectionMatrix",b.projectionMatrix),St.setValue(U,"viewMatrix",b.matrixWorldInverse);const un=St.map.cameraPosition;un!==void 0&&un.setValue(U,Ae.setFromMatrixPosition(b.matrixWorld)),gt.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Sn=!0,Os=!0)}if(H.isSkinnedMesh){St.setOptional(U,H,"bindMatrix"),St.setOptional(U,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),St.setValue(U,"boneTexture",rn.boneTexture,He))}H.isBatchedMesh&&(St.setOptional(U,H,"batchingTexture"),St.setValue(U,"batchingTexture",H._matricesTexture,He),St.setOptional(U,H,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",H._indirectTexture,He),St.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",H._colorsTexture,He));const Pn=W.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&pe.update(H,W,yn),(Sn||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,St.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=me,On.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(On.envMapIntensity.value=F.environmentIntensity),Sn&&(St.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Cy(On,Os),se&&q.fog===!0&&K.refreshFogUniforms(On,se),K.refreshMaterialUniforms(On,q,O,z,u.state.transmissionRenderTarget[b.id]),dc.upload(U,Kp(Ne),On,He)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(dc.upload(U,Kp(Ne),On,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(U,"center",H.center),St.setValue(U,"modelViewMatrix",H.modelViewMatrix),St.setValue(U,"normalMatrix",H.normalMatrix),St.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const rn=q.uniformsGroups;for(let un=0,Su=rn.length;un<Su;un++){const Pa=rn[un];P.update(Pa,yn),P.bind(Pa,yn)}}return yn}function Cy(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ny(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,F,W){const q=Ce.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=F,Ce.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const W=Ce.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Dy=U.createFramebuffer();this.setRenderTarget=function(b,F=0,W=0){N=b,A=F,w=W;let q=!0,H=null,se=!1,he=!1;if(b){const me=Ce.get(b);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(me.__hasExternalTextures)He.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(me.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(he=!0);const Pe=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?H=Pe[F][W]:H=Pe[F],se=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?H=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[W]:H=Pe,D.copy(b.viewport),I.copy(b.scissor),B=b.scissorTest}else D.copy(oe).multiplyScalar(O).floor(),I.copy(Re).multiplyScalar(O).floor(),B=ze;if(W!==0&&(H=Dy),Me.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&Me.drawBuffers(b,H),Me.viewport(D),Me.scissor(I),Me.setScissorTest(B),se){const me=Ce.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,W)}else if(he){const me=Ce.get(b.texture),Oe=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,W,Oe)}else if(b!==null&&W!==0){const me=Ce.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(b,F,W,q,H,se,he,_e=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){Me.bindFramebuffer(U.FRAMEBUFFER,me);try{const Oe=b.textures[_e],Pe=Oe.format,we=Oe.type;if(!gt.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&W>=0&&W<=b.height-H&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),U.readPixels(F,W,q,H,ce.convert(Pe),ce.convert(we),se))}finally{const Oe=N!==null?Ce.get(N).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,q,H,se,he,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me)if(F>=0&&F<=b.width-q&&W>=0&&W<=b.height-H){Me.bindFramebuffer(U.FRAMEBUFFER,me);const Oe=b.textures[_e],Pe=Oe.format,we=Oe.type;if(!gt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),U.readPixels(F,W,q,H,ce.convert(Pe),ce.convert(we),0);const ut=N!==null?Ce.get(N).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,ut);const Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rA(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(We),U.deleteSync(Rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){const q=Math.pow(2,-W),H=Math.floor(b.image.width*q),se=Math.floor(b.image.height*q),he=F!==null?F.x:0,_e=F!==null?F.y:0;He.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,he,_e,H,se),Me.unbindTexture()};const Uy=U.createFramebuffer(),Ly=U.createFramebuffer();this.copyTextureToTexture=function(b,F,W=null,q=null,H=0,se=null){se===null&&(H!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=H,H=0):se=0);let he,_e,me,Oe,Pe,we,We,ut,Rt;const xt=b.isCompressedTexture?b.mipmaps[se]:b.image;if(W!==null)he=W.max.x-W.min.x,_e=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Oe=W.min.x,Pe=W.min.y,we=W.isBox3?W.min.z:0;else{const Pn=Math.pow(2,-H);he=Math.floor(xt.width*Pn),_e=Math.floor(xt.height*Pn),b.isDataArrayTexture?me=xt.depth:b.isData3DTexture?me=Math.floor(xt.depth*Pn):me=1,Oe=0,Pe=0,we=0}q!==null?(We=q.x,ut=q.y,Rt=q.z):(We=0,ut=0,Rt=0);const pt=ce.convert(F.format),Ne=ce.convert(F.type);let Tt;F.isData3DTexture?(He.setTexture3D(F,0),Tt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Tt=U.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const $e=U.getParameter(U.UNPACK_ROW_LENGTH),yn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gr=U.getParameter(U.UNPACK_SKIP_PIXELS),Sn=U.getParameter(U.UNPACK_SKIP_ROWS),Os=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,we);const St=b.isDataArrayTexture||b.isData3DTexture,On=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Pn=Ce.get(b),rn=Ce.get(F),un=Ce.get(Pn.__renderTarget),Su=Ce.get(rn.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,un.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Su.__webglFramebuffer);for(let Pa=0;Pa<me;Pa++)St&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,H,we+Pa),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(F).__webglTexture,se,Rt+Pa)),U.blitFramebuffer(Oe,Pe,he,_e,We,ut,he,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Ce.has(b)){const Pn=Ce.get(b),rn=Ce.get(F);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Uy),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ly);for(let un=0;un<me;un++)St?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pn.__webglTexture,H,we+un):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pn.__webglTexture,H),On?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,se,Rt+un):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,se),H!==0?U.blitFramebuffer(Oe,Pe,he,_e,We,ut,he,_e,U.COLOR_BUFFER_BIT,U.NEAREST):On?U.copyTexSubImage3D(Tt,se,We,ut,Rt+un,Oe,Pe,he,_e):U.copyTexSubImage2D(Tt,se,We,ut,Oe,Pe,he,_e);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else On?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Tt,se,We,ut,Rt,he,_e,me,pt,Ne,xt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,se,We,ut,Rt,he,_e,me,pt,xt.data):U.texSubImage3D(Tt,se,We,ut,Rt,he,_e,me,pt,Ne,xt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,se,We,ut,he,_e,pt,Ne,xt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,se,We,ut,xt.width,xt.height,pt,xt.data):U.texSubImage2D(U.TEXTURE_2D,se,We,ut,he,_e,pt,Ne,xt);U.pixelStorei(U.UNPACK_ROW_LENGTH,$e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gr),U.pixelStorei(U.UNPACK_SKIP_ROWS,Sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Os),se===0&&F.generateMipmaps&&U.generateMipmap(Tt),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W=null,q=null,H=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,W,q,H)},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,N=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function wy({model:t,onClose:e}){var E;const n=G.useRef(null),i=G.useRef(null),a=G.useRef(null),r=G.useRef(null),s=G.useRef(null),o=G.useRef(null),l=G.useRef(null),c=G.useRef(null),[d,h]=G.useState(!1),[f,p]=G.useState(!0),[_,S]=G.useState(null),[m,u]=G.useState(!0),[g,x]=G.useState(!1);G.useEffect(()=>{if(!n.current)return;const D=new my;D.background=new Ke(15790320),i.current=D;const I=new wn(75,n.current.clientWidth/n.current.clientHeight,.1,1e3);r.current=I;const B=new Ay({antialias:!0});B.setSize(n.current.clientWidth,n.current.clientHeight),B.shadowMap.enabled=!0,B.shadowMap.type=Lp,a.current=B,n.current.appendChild(B.domElement);const Y=new yy(4210752,.6);D.add(Y);const Z=new Yc(16777215,.8);Z.position.set(10,10,5),Z.castShadow=!0,D.add(Z);const L=new Yc(16777215,.4);L.position.set(-10,-10,-5),D.add(L);const z={isMouseDown:!1,previousMousePosition:{x:0,y:0},rotation:{x:0,y:0},zoom:1,pan:{x:0,y:0}};s.current=z;const O=X=>{z.isMouseDown=!0,z.previousMousePosition={x:X.clientX,y:X.clientY}},k=()=>{z.isMouseDown=!1},Q=X=>{if(!z.isMouseDown)return;const ne={x:X.clientX-z.previousMousePosition.x,y:X.clientY-z.previousMousePosition.y};X.shiftKey?(z.pan.x+=ne.x*.01,z.pan.y-=ne.y*.01):(z.rotation.y+=ne.x*.01,z.rotation.x+=ne.y*.01),z.previousMousePosition={x:X.clientX,y:X.clientY}},oe=X=>{X.preventDefault(),z.zoom+=X.deltaY*-.001,z.zoom=Math.max(.1,Math.min(5,z.zoom))};B.domElement.addEventListener("mousedown",O),B.domElement.addEventListener("mouseup",k),B.domElement.addEventListener("mousemove",Q),B.domElement.addEventListener("wheel",oe),y();const Re=()=>{l.current=requestAnimationFrame(Re),o.current&&(m&&!z.isMouseDown&&(o.current.rotation.y+=.005),o.current.rotation.x=z.rotation.x,o.current.rotation.y+=z.rotation.y*.1,I.position.z=5/z.zoom,I.position.x=z.pan.x,I.position.y=z.pan.y),B.render(D,I)};Re();const ze=()=>{if(!n.current)return;const X=n.current.clientWidth,ne=n.current.clientHeight;I.aspect=X/ne,I.updateProjectionMatrix(),B.setSize(X,ne)};return window.addEventListener("resize",ze),()=>{window.removeEventListener("resize",ze),B.domElement.removeEventListener("mousedown",O),B.domElement.removeEventListener("mouseup",k),B.domElement.removeEventListener("mousemove",Q),B.domElement.removeEventListener("wheel",oe),l.current&&cancelAnimationFrame(l.current),n.current&&B.domElement&&n.current.removeChild(B.domElement),B.dispose()}},[t.fileUrl,m]);const y=async()=>{try{if(p(!0),S(null),console.log("Loading model from URL:",t.fileUrl),!t.fileUrl)throw new Error("No model URL available");let D;if(t.fileUrl.startsWith("blob:")){const k=await fetch(t.fileUrl);if(!k.ok)throw new Error(`Failed to fetch blob: ${k.status} ${k.statusText}`);D=await k.text()}else{const k=await fetch(t.fileUrl);if(!k.ok)throw new Error(`Failed to load model: ${k.status} ${k.statusText}`);D=await k.text()}console.log("OBJ file loaded, length:",D.length);const I=R(D);if(!I||I.attributes.position.count===0)throw new Error("Invalid model data - no vertices found");console.log("Geometry created, vertices:",I.attributes.position.count);const B=new vy({color:6316128,side:$n,wireframe:g}),Y=new ti(I,B);I.computeBoundingBox();const Z=I.boundingBox,L=Z.getCenter(new j),z=Z.getSize(new j);I.translate(-L.x,-L.y,-L.z);const O=Math.max(z.x,z.y,z.z);if(O>0){const k=3/O;Y.scale.setScalar(k)}o.current&&i.current.remove(o.current),o.current=Y,i.current.add(Y),r.current.position.set(0,0,5),r.current.lookAt(0,0,0),console.log("Model loaded successfully"),p(!1)}catch(D){console.error("Model loading error:",D),S(D.message||"Failed to load model"),p(!1)}},R=D=>{const I=[],B=[],Y=D.split(`
`);for(let L of Y)if(L=L.trim(),!(!L||L.startsWith("#"))){if(L.startsWith("v ")){const z=L.split(/\s+/);z.length>=4&&I.push(parseFloat(z[1])||0,parseFloat(z[2])||0,parseFloat(z[3])||0)}else if(L.startsWith("f ")){const z=L.split(/\s+/).slice(1);if(z.length>=3){const O=z.map(k=>{const Q=parseInt(k.split("/")[0])-1;return Q>=0?Q:0});for(let k=1;k<O.length-1;k++)B.push(O[0],O[k],O[k+1])}}}if(I.length===0)throw new Error("No vertices found in OBJ file");if(B.length===0)throw new Error("No faces found in OBJ file");const Z=new Ki;return Z.setAttribute("position",new Vi(I,3)),Z.setIndex(B),Z.computeVertexNormals(),Z},A=()=>{var D,I,B;d?(B=document.exitFullscreen)==null||B.call(document):(I=(D=c.current)==null?void 0:D.requestFullscreen)==null||I.call(D),h(!d)},w=()=>{const D=document.createElement("a");D.href=t.fileUrl,D.download=t.name,D.click()},N=()=>{s.current&&(s.current.rotation={x:0,y:0},s.current.zoom=1,s.current.pan={x:0,y:0})},T=()=>{x(!g),o.current&&(o.current.material.wireframe=!g)};return v.jsx("div",{ref:c,className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50",children:v.jsxs("div",{className:`relative bg-white rounded-lg shadow-xl ${d?"w-full h-full":"w-full max-w-6xl h-[80vh]"}`,children:[v.jsxs("div",{className:"flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg",children:[v.jsx("h3",{className:"text-lg font-bold text-gray-800",children:t.name}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsx("button",{onClick:()=>u(!m),title:"Toggle Auto Rotate",className:`p-2 rounded-md transition-colors ${m?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"} hover:bg-blue-600`,children:v.jsx(K1,{size:18})}),v.jsx("button",{onClick:T,title:"Toggle Wireframe",className:`p-2 rounded-md transition-colors ${g?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"} hover:bg-blue-600`,children:v.jsx(W1,{size:18})}),v.jsx("button",{onClick:N,title:"Reset View",className:"p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",children:v.jsx(fT,{size:18})}),v.jsx("button",{onClick:w,title:"Download",className:"p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",children:v.jsx(Np,{size:18})}),v.jsx("button",{onClick:A,title:"Toggle Fullscreen",className:"p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",children:d?v.jsx(j1,{size:18}):v.jsx(jx,{size:18})}),v.jsx("button",{onClick:e,title:"Close",className:"p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors",children:v.jsx(Dp,{size:18})})]})]}),v.jsxs("div",{className:"relative w-full h-full",children:[f&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"}),v.jsx("p",{className:"text-gray-600",children:"Loading 3D model..."})]})}),_&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:v.jsxs("div",{className:"text-center",children:[v.jsx("p",{className:"text-red-600 mb-2",children:"Error loading model"}),v.jsx("p",{className:"text-gray-600 text-sm",children:_}),v.jsx("button",{onClick:y,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Retry"})]})}),v.jsx("div",{ref:n,className:"w-full h-full",style:{cursor:(E=s.current)!=null&&E.isMouseDown?"grabbing":"grab"}}),v.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm",children:[v.jsx("p",{children:"• Drag to rotate"}),v.jsx("p",{children:"• Shift + Drag to pan"}),v.jsx("p",{children:"• Scroll to zoom"})]})]})]})})}function E3({generated3DModel:t,onDownload:e,onNewModel:n,onSave:i,processingTime:a,modelStats:r,isLibraryView:s=!1}){const[o,l]=G.useState(!1),[c,d]=G.useState(!0),[h,f]=G.useState(!0),[p,_]=G.useState(null),[S,m]=G.useState(!1),u=G.useRef(null),g=G.useRef(null),x=G.useRef(null),y=G.useRef(null),R=G.useRef(null),A=G.useRef(null),w=I=>{if(!I)return null;if(I.fileUrl&&(I.fileUrl.startsWith("http")||I.fileUrl.startsWith("blob:")))return I.fileUrl;const B=I.fileName||`${I.name}.obj`;return`http://localhost:3001/models/${I.processor||"import"}/${I.id}/${B}`};G.useEffect(()=>{if(!(!u.current||!t))return N(),T(),()=>{var I;A.current&&cancelAnimationFrame(A.current),u.current&&((I=x.current)!=null&&I.domElement)&&u.current.removeChild(x.current.domElement),x.current&&x.current.dispose()}},[t]);const N=()=>{if(!u.current)return;const I=new my;I.background=new Ke(15790320),g.current=I;const B=new wn(50,u.current.clientWidth/u.current.clientHeight,.1,1e3);B.position.set(0,0,5),y.current=B;const Y=new Ay({antialias:!0});Y.setSize(u.current.clientWidth,u.current.clientHeight),Y.shadowMap.enabled=!0,Y.shadowMap.type=Lp,x.current=Y,u.current.appendChild(Y.domElement);const Z=new yy(4210752,.4);I.add(Z);const L=new Yc(16777215,.8);L.position.set(1,1,1),L.castShadow=!0,I.add(L);const z=new Yc(16777215,.4);z.position.set(-1,-1,-1),I.add(z);let O=!1,k=0,Q=0,oe=0,Re=0;const ze=Ae=>{O=!0,k=Ae.clientX,Q=Ae.clientY},X=()=>{O=!1},ne=Ae=>{if(!O||!R.current)return;const Te=Ae.clientX-k,st=Ae.clientY-Q;Re+=Te*.01,oe+=st*.01,R.current.rotation.y=Re,R.current.rotation.x=oe,k=Ae.clientX,Q=Ae.clientY},xe=Ae=>{if(!R.current)return;const st=R.current.scale.x*(1-Ae.deltaY*.001);R.current.scale.setScalar(Math.max(.1,Math.min(5,st)))};Y.domElement.addEventListener("mousedown",ze),Y.domElement.addEventListener("mouseup",X),Y.domElement.addEventListener("mousemove",ne),Y.domElement.addEventListener("wheel",xe);const le=()=>{A.current=requestAnimationFrame(le),R.current&&c&&!O&&(R.current.rotation.y+=.005),Y.render(I,B)};le();const ye=()=>{if(!u.current)return;const Ae=u.current.clientWidth,Te=u.current.clientHeight;B.aspect=Ae/Te,B.updateProjectionMatrix(),Y.setSize(Ae,Te)};window.addEventListener("resize",ye)},T=async()=>{try{f(!0),_(null);const I=w(t);if(console.log("Loading model from URL:",I),!I)throw new Error("No model URL available");let B;if(I.startsWith("blob:")){const oe=await fetch(I);if(!oe.ok)throw new Error(`Failed to fetch blob: ${oe.status} ${oe.statusText}`);B=await oe.text()}else{const oe=await fetch(I);if(!oe.ok)throw new Error(`Failed to load model: ${oe.status} ${oe.statusText}`);B=await oe.text()}console.log("OBJ file loaded, length:",B.length);const Y=E(B);if(!Y||Y.attributes.position.count===0)throw new Error("Invalid model data - no vertices found");console.log("Geometry created, vertices:",Y.attributes.position.count);const Z=new vy({color:6316128,side:$n}),L=new ti(Y,Z);Y.computeBoundingBox();const z=Y.boundingBox,O=z.getCenter(new j),k=z.getSize(new j);Y.translate(-O.x,-O.y,-O.z);const Q=Math.max(k.x,k.y,k.z);if(Q>0){const oe=3/Q;L.scale.setScalar(oe)}R.current&&g.current.remove(R.current),R.current=L,g.current.add(L),y.current.position.set(0,0,5),y.current.lookAt(0,0,0),console.log("Model loaded successfully"),f(!1)}catch(I){console.error("Model loading error:",I),_(I.message||"Failed to load model"),f(!1)}},E=I=>{const B=[],Y=[],Z=I.split(`
`);for(let z of Z)if(z=z.trim(),!(!z||z.startsWith("#"))){if(z.startsWith("v ")){const O=z.split(/\s+/);O.length>=4&&B.push(parseFloat(O[1])||0,parseFloat(O[2])||0,parseFloat(O[3])||0)}else if(z.startsWith("f ")){const O=z.split(/\s+/).slice(1);if(O.length>=3){const k=O.map(Q=>{const oe=parseInt(Q.split("/")[0])-1;return oe>=0?oe:0});for(let Q=1;Q<k.length-1;Q++)Y.push(k[0],k[Q],k[Q+1])}}}if(B.length===0)throw new Error("No vertices found in OBJ file");if(Y.length===0)throw new Error("No faces found in OBJ file");const L=new Ki;return L.setAttribute("position",new Vi(B,3)),L.setIndex(Y),L.computeVertexNormals(),L};if(!t)return v.jsx("div",{className:"w-full max-w-none mx-auto",children:v.jsx("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:v.jsxs("div",{className:"p-16 text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(zd,{className:"w-8 h-8 text-gray-400"})}),v.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Model Generated"}),v.jsx("p",{className:"text-gray-500 mb-6",children:"No model data available. Please generate a model first."}),v.jsx("button",{onClick:n,className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium",children:"Start Creating"})]})})});const D=()=>{({...t,fileUrl:w(t)},m(!0))};return v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[v.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:v.jsx(jc,{className:"w-5 h-5 text-green-600"})}),v.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:s?"Model Preview":"3D Model Ready"})]}),v.jsxs("p",{className:"text-gray-600",children:[s?"Previewing":"Your 3D model",' "',t.name,'"',s?"":" is ready for preview"]})]}),!s&&v.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium",children:[v.jsx(gu,{className:"w-5 h-5"}),v.jsx("span",{children:"Generate New Model"})]})]})}),v.jsxs("div",{className:"p-8",children:[v.jsx("div",{className:"mb-8",children:v.jsxs("div",{className:"relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden",children:[v.jsxs("div",{ref:u,className:"relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200",children:[h&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"}),v.jsx("p",{className:"text-gray-600",children:"Loading 3D model..."})]})}),p&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:v.jsx(zd,{className:"w-8 h-8 text-red-500"})}),v.jsx("p",{className:"text-red-600 font-medium mb-2",children:"Failed to load model"}),v.jsx("p",{className:"text-gray-500 text-sm",children:p}),v.jsx("button",{onClick:T,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Retry"})]})})]}),v.jsx("div",{className:"absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg",children:v.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600",children:[v.jsx("span",{children:"Click and drag to rotate"}),v.jsx("span",{children:"•"}),v.jsx("span",{children:"Scroll to zoom"})]})}),v.jsx("div",{className:"absolute bottom-4 right-4",children:v.jsx("button",{onClick:D,className:"p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg",children:v.jsx(jx,{className:"w-5 h-5"})})})]})}),v.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4",children:v.jsx("div",{className:"flex items-center space-x-4",children:i&&!s&&v.jsxs("button",{onClick:i,className:"flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium",children:[v.jsx(jc,{className:"w-5 h-5"}),v.jsx("span",{children:"Save to Library"})]})})})]})]}),S&&v.jsx(wy,{model:{...t,fileUrl:w(t)},onClose:()=>m(!1)})]})}function b3({savedModels:t,setSavedModels:e}){const[n,i]=G.useState(""),[a,r]=G.useState("all"),[s,o]=G.useState("newest"),[l,c]=G.useState([]),[d,h]=G.useState(null),[f,p]=G.useState(!1),_=t.filter(A=>A.name.toLowerCase().includes(n.toLowerCase())&&(a==="all"||A.processor===a)).sort((A,w)=>s==="newest"?new Date(w.createdAt)-new Date(A.createdAt):s==="oldest"?new Date(A.createdAt)-new Date(w.createdAt):A.name.localeCompare(w.name)),S=A=>{switch(A){case"meshroom":return"bg-blue-100 text-blue-800";case"open3d":return"bg-green-100 text-green-800";case"import":return"bg-purple-100 text-purple-800";default:return"bg-gray-100 text-gray-800"}},m=A=>{if(!A)return null;if(A.fileUrl&&(A.fileUrl.startsWith("http")||A.fileUrl.startsWith("blob:")))return A.fileUrl;let w=null;return A.objFiles&&A.objFiles.length>0?w=A.objFiles[0].filename:A.fileName?w=A.fileName:w=`${A.name}.obj`,`http://localhost:3001/models/${A.processor||"import"}/${A.id}/${w}`},u=A=>{const w=m(A);if(!w){console.error("No file URL available for model:",A);return}let N=null;A.objFiles&&A.objFiles.length>0?N=A.objFiles[0].filename:A.fileName?N=A.fileName:N=`${A.name}.obj`;const T=document.createElement("a");T.href=w,T.download=N,document.body.appendChild(T),T.click(),document.body.removeChild(T)},g=async A=>{try{for(const w of A)await fetch(`http://localhost:3001/api/models/${w}`,{method:"DELETE"});e(w=>w.filter(N=>!A.includes(N.id))),c([])}catch(w){console.error("Error deleting models:",w)}},x=A=>c(w=>w.includes(A)?w.filter(N=>N!==A):[...w,A]),y=()=>{l.length===_.length?c([]):c(_.map(A=>A.id))},R=A=>{const w=m(A);if(!w){console.error("Cannot generate preview URL for model:",A);return}let N=null;A.objFiles&&A.objFiles.length>0?N=A.objFiles[0].filename:A.fileName?N=A.fileName:N=`${A.name}.obj`;const T={...A,fileUrl:w,name:A.name||"Untitled Model",fileName:N,id:A.id};console.log("Preview model data:",T),console.log("Generated URL:",w),h(T),p(!0)};return v.jsxs("div",{className:"w-full max-w-none mx-auto",children:[v.jsxs("div",{className:"bg-white rounded-2xl shadow-xl border border-gray-100",children:[v.jsx("div",{className:"border-b border-gray-200 px-8 py-6",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Model Library"}),v.jsx("p",{className:"text-gray-600",children:"Browse, preview and manage your saved 3D models"})]}),v.jsx("div",{className:"flex items-center space-x-2",children:v.jsxs("div",{className:"flex items-center space-x-1",children:[v.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),v.jsx("span",{className:"text-sm text-gray-600",children:"Library View"})]})})]})}),v.jsxs("div",{className:"px-8 pt-6",children:[v.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",children:[v.jsxs("div",{className:"relative flex-1",children:[v.jsx($1,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),v.jsx("input",{type:"text",placeholder:"Search models...",value:n,onChange:A=>i(A.target.value),className:"w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-indigo-500"})]}),v.jsxs("div",{className:"flex flex-wrap gap-2",children:[v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:a,onChange:A=>r(A.target.value),children:[v.jsx("option",{value:"all",children:"All Processors"}),v.jsx("option",{value:"meshroom",children:"Meshroom"}),v.jsx("option",{value:"open3d",children:"Open3D"}),v.jsx("option",{value:"import",children:"Import"})]}),v.jsxs("select",{className:"px-4 py-3 border rounded-lg focus:ring-indigo-500",value:s,onChange:A=>o(A.target.value),children:[v.jsx("option",{value:"newest",children:"Newest First"}),v.jsx("option",{value:"oldest",children:"Oldest First"}),v.jsx("option",{value:"name",children:"Name (A-Z)"})]})]})]}),l.length>0&&v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsxs("button",{onClick:y,className:"flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:[v.jsx("input",{type:"checkbox",checked:l.length===_.length&&_.length>0,onChange:y,className:"w-4 h-4"}),v.jsxs("span",{children:["Select All (",_.length,")"]})]}),v.jsxs("span",{className:"text-sm text-gray-600",children:[l.length," of ",_.length," selected"]})]}),v.jsxs("button",{onClick:()=>g(l),className:"flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition",children:[v.jsx(Bd,{className:"w-4 h-4"}),v.jsxs("span",{children:["Delete Selected (",l.length,")"]})]})]}),_.length===0?v.jsxs("div",{className:"text-center py-16",children:[v.jsx(kx,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),v.jsx("p",{className:"text-gray-600",children:n||a!=="all"?"No models match your search":"No models found"})]}):v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8",children:_.map(A=>v.jsxs("div",{className:`rounded-xl p-4 border transition-all ${l.includes(A.id)?"bg-blue-50 border-blue-300 shadow-md":"bg-gray-50 border-gray-200 hover:shadow-md"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"checkbox",checked:l.includes(A.id),onChange:()=>x(A.id),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),v.jsx("h3",{className:"font-semibold truncate text-gray-900",children:A.name})]}),v.jsx("span",{className:`text-xs px-2 py-1 rounded font-medium ${S(A.processor)}`,children:A.processor})]}),v.jsxs("div",{className:"text-gray-500 text-xs mb-4",children:["Created: ",new Date(A.createdAt).toLocaleDateString()]}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsxs("button",{onClick:()=>u(A),className:"flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition",children:[v.jsx(Np,{className:"w-4 h-4"}),v.jsx("span",{children:"Download"})]}),v.jsxs("button",{onClick:()=>R(A),className:"flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition",children:[v.jsx(O1,{className:"w-4 h-4"}),v.jsx("span",{children:"Preview"})]})]})]},A.id))})]})]}),f&&d&&v.jsx(wy,{model:d,onClose:()=>{p(!1),h(null)}})]})}function T3(){const[t,e]=G.useState("images"),[n,i]=G.useState([]),[a,r]=G.useState([]),[s,o]=G.useState(""),[l,c]=G.useState("meshroom"),[d,h]=G.useState(!1),[f,p]=G.useState(0),[_,S]=G.useState(null),[m,u]=G.useState([]),[g,x]=G.useState(!1),[y,R]=G.useState(null),[A,w]=G.useState("generate"),[N,T]=G.useState(!1),E=["Analyzing image quality...","Detecting features...","Computing depth maps...","Reconstructing point cloud...","Generating mesh...","Applying textures...","Optimizing model...","Finalizing export..."],D=async()=>{if(g)try{const k=await fetch("http://localhost:3001/api/models");if(k.ok){const Q=await k.json();u(Q)}}catch(k){console.error("Failed to fetch models:",k)}};G.useEffect(()=>{fetch("http://localhost:3001/api/health").then(k=>k.ok?x(!0):x(!1)).catch(()=>x(!1))},[]),G.useEffect(()=>{g&&D()},[g]);const I=()=>{if(!(t==="images"&&n.length>=2||t==="import"&&a.length>0)){R(t==="images"?"Upload at least 2 images":"Upload at least 1 OBJ file");return}T(!0)},B=async()=>{var k,Q,oe,Re;if(!g)return R("Backend unavailable");h(!0),R(null),p(0);try{const ze=new FormData;n.forEach(et=>ze.append("images",et.file)),a.forEach(et=>ze.append("objFiles",et.file)),s&&ze.append("modelName",s),ze.append("processor",l);const{modelId:X}=await(await fetch("http://localhost:3001/api/upload",{method:"POST",body:ze})).json();let ne="processing",xe=0;for(;ne==="processing"||ne==="queued";){p(Math.min(xe,E.length-1)),await new Promise(U=>setTimeout(U,2e3));const{status:et,error:Ye}=await(await fetch(`http://localhost:3001/api/models/${X}/status`)).json();if(ne=et,Ye)throw new Error(Ye);xe++}const le=await(await fetch(`http://localhost:3001/api/models/${X}`)).json(),ye=await Y(X),Ae=ye.find(et=>["obj","stl","ply"].includes(et.extension)),Te=Ae?`http://localhost:3001/models/import/${X}/${Ae.name}`:null,st={id:X,name:s||`Model_${Date.now()}`,fileUrl:Te,format:((k=Ae==null?void 0:Ae.extension)==null?void 0:k.toUpperCase())||null,files:ye,thumbnail:(oe=(Q=le.images)==null?void 0:Q[0])!=null&&oe.filename?`http://localhost:3001/uploads/${le.images[0].filename}`:((Re=n[0])==null?void 0:Re.url)||"/placeholder-3d.png",createdAt:new Date().toISOString(),imageCount:n.length,objCount:a.length,processor:t==="images"?l:"import",type:t,vertices:le.vertices||0,triangles:le.triangles||0,sizeX:le.sizeX||0,sizeY:le.sizeY||0,sizeZ:le.sizeZ||0,size:(Ae==null?void 0:Ae.size)||0};S(st),D()}catch(ze){R(ze.message||"Processing failed")}finally{h(!1)}},Y=async k=>{try{const{files:Q}=await(await fetch(`http://localhost:3001/api/models/${k}/files`)).json();return Q||[]}catch{return[]}},Z=()=>{i([]),r([]),o(""),S(null),T(!1),R(null),h(!1),p(0),w("generate")},L=()=>Z(),z=()=>{var k;if(_!=null&&_.fileUrl){const Q=document.createElement("a");Q.href=_.fileUrl,Q.download=`${_.name}.${(k=_.format)==null?void 0:k.toLowerCase()}`,Q.click()}},O=k=>{w(k),k==="library"?(D(),S(null)):k==="generate"&&Z()};return v.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-6 space-y-6",children:[v.jsx("nav",{className:"bg-white rounded-xl shadow-lg p-2 mb-8 border",children:v.jsxs("div",{className:"flex space-x-2",children:[v.jsxs("button",{onClick:()=>O("generate"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${A==="generate"?"bg-purple-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(gu,{className:"w-5 h-5 mr-2 inline"})," Generate"]}),v.jsxs("button",{onClick:()=>O("library"),className:`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${A==="library"?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(kx,{className:"w-5 h-5 mr-2 inline"})," Library (",m.length,")"]})]})}),!g&&v.jsx(Dg,{type:"warning",message:"Backend not available."}),y&&v.jsx(Dg,{type:"error",message:y,onClose:()=>R(null)}),A==="generate"&&v.jsxs(v.Fragment,{children:[!N&&!_&&v.jsx(mT,{selectedImages:n,setSelectedImages:i,selectedObjFiles:a,setSelectedObjFiles:r,uploadType:t,setUploadType:e,error:y,setError:R,onNext:I}),N&&!_&&v.jsx(gT,{selectedImages:n,selectedObjFiles:a,uploadType:t,modelName:s,setModelName:o,processor:l,setProcessor:c,isProcessing:d,processingStep:f,processingSteps:E,handleGenerate:B}),_&&v.jsx(E3,{generated3DModel:_,onDownload:z,onNewModel:L})]}),A==="library"&&v.jsx(b3,{savedModels:m,setSavedModels:u,setActiveTab:w,setError:R,onRefresh:D})]})}function A3(){return v.jsxs("div",{className:"min-h-screen flex flex-col",children:[v.jsx(dT,{}),v.jsx("div",{className:"flex-grow",children:v.jsxs(Ub,{children:[v.jsx(Od,{path:"/",element:v.jsx(pT,{})}),v.jsx(Od,{path:"/generate",element:v.jsx(T3,{})})]})}),v.jsx(hT,{})]})}DE.createRoot(document.getElementById("root")).render(v.jsx(n1,{basename:"/snap3d",children:v.jsx(A3,{})}));
