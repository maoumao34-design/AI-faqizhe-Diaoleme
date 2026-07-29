(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function xp(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vo={exports:{}},gr={},Qo={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function vm(){if(Lu)return be;Lu=1;var a=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function $(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(w,z,de){this.props=w,this.context=z,this.refs=A,this.updater=de||T}S.prototype.isReactComponent={},S.prototype.setState=function(w,z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,z,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function E(){}E.prototype=S.prototype;function P(w,z,de){this.props=w,this.context=z,this.refs=A,this.updater=de||T}var N=P.prototype=new E;N.constructor=P,M(N,S.prototype),N.isPureReactComponent=!0;var j=Array.isArray,V=Object.prototype.hasOwnProperty,K={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function U(w,z,de){var ge,ve={},G=null,he=null;if(z!=null)for(ge in z.ref!==void 0&&(he=z.ref),z.key!==void 0&&(G=""+z.key),z)V.call(z,ge)&&!ce.hasOwnProperty(ge)&&(ve[ge]=z[ge]);var ke=arguments.length-2;if(ke===1)ve.children=de;else if(1<ke){for(var Se=Array(ke),Ie=0;Ie<ke;Ie++)Se[Ie]=arguments[Ie+2];ve.children=Se}if(w&&w.defaultProps)for(ge in ke=w.defaultProps,ke)ve[ge]===void 0&&(ve[ge]=ke[ge]);return{$$typeof:a,type:w,key:G,ref:he,props:ve,_owner:K.current}}function X(w,z){return{$$typeof:a,type:w.type,key:z,ref:w.ref,props:w.props,_owner:w._owner}}function Y(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function se(w){var z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(de){return z[de]})}var ne=/\/+/g;function pe(w,z){return typeof w=="object"&&w!==null&&w.key!=null?se(""+w.key):z.toString(36)}function fe(w,z,de,ge,ve){var G=typeof w;(G==="undefined"||G==="boolean")&&(w=null);var he=!1;if(w===null)he=!0;else switch(G){case"string":case"number":he=!0;break;case"object":switch(w.$$typeof){case a:case r:he=!0}}if(he)return he=w,ve=ve(he),w=ge===""?"."+pe(he,0):ge,j(ve)?(de="",w!=null&&(de=w.replace(ne,"$&/")+"/"),fe(ve,z,de,"",function(Ie){return Ie})):ve!=null&&(Y(ve)&&(ve=X(ve,de+(!ve.key||he&&he.key===ve.key?"":(""+ve.key).replace(ne,"$&/")+"/")+w)),z.push(ve)),1;if(he=0,ge=ge===""?".":ge+":",j(w))for(var ke=0;ke<w.length;ke++){G=w[ke];var Se=ge+pe(G,ke);he+=fe(G,z,de,Se,ve)}else if(Se=$(w),typeof Se=="function")for(w=Se.call(w),ke=0;!(G=w.next()).done;)G=G.value,Se=ge+pe(G,ke++),he+=fe(G,z,de,Se,ve);else if(G==="object")throw z=String(w),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return he}function re(w,z,de){if(w==null)return w;var ge=[],ve=0;return fe(w,ge,"","",function(G){return z.call(de,G,ve++)}),ge}function xe(w){if(w._status===-1){var z=w._result;z=z(),z.then(function(de){(w._status===0||w._status===-1)&&(w._status=1,w._result=de)},function(de){(w._status===0||w._status===-1)&&(w._status=2,w._result=de)}),w._status===-1&&(w._status=0,w._result=z)}if(w._status===1)return w._result.default;throw w._result}var me={current:null},B={transition:null},ee={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:B,ReactCurrentOwner:K};function H(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:re,forEach:function(w,z,de){re(w,function(){z.apply(this,arguments)},de)},count:function(w){var z=0;return re(w,function(){z++}),z},toArray:function(w){return re(w,function(z){return z})||[]},only:function(w){if(!Y(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},be.Component=S,be.Fragment=i,be.Profiler=c,be.PureComponent=P,be.StrictMode=l,be.Suspense=h,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,be.act=H,be.cloneElement=function(w,z,de){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ge=M({},w.props),ve=w.key,G=w.ref,he=w._owner;if(z!=null){if(z.ref!==void 0&&(G=z.ref,he=K.current),z.key!==void 0&&(ve=""+z.key),w.type&&w.type.defaultProps)var ke=w.type.defaultProps;for(Se in z)V.call(z,Se)&&!ce.hasOwnProperty(Se)&&(ge[Se]=z[Se]===void 0&&ke!==void 0?ke[Se]:z[Se])}var Se=arguments.length-2;if(Se===1)ge.children=de;else if(1<Se){ke=Array(Se);for(var Ie=0;Ie<Se;Ie++)ke[Ie]=arguments[Ie+2];ge.children=ke}return{$$typeof:a,type:w.type,key:ve,ref:G,props:ge,_owner:he}},be.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:u,_context:w},w.Consumer=w},be.createElement=U,be.createFactory=function(w){var z=U.bind(null,w);return z.type=w,z},be.createRef=function(){return{current:null}},be.forwardRef=function(w){return{$$typeof:f,render:w}},be.isValidElement=Y,be.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:xe}},be.memo=function(w,z){return{$$typeof:y,type:w,compare:z===void 0?null:z}},be.startTransition=function(w){var z=B.transition;B.transition={};try{w()}finally{B.transition=z}},be.unstable_act=H,be.useCallback=function(w,z){return me.current.useCallback(w,z)},be.useContext=function(w){return me.current.useContext(w)},be.useDebugValue=function(){},be.useDeferredValue=function(w){return me.current.useDeferredValue(w)},be.useEffect=function(w,z){return me.current.useEffect(w,z)},be.useId=function(){return me.current.useId()},be.useImperativeHandle=function(w,z,de){return me.current.useImperativeHandle(w,z,de)},be.useInsertionEffect=function(w,z){return me.current.useInsertionEffect(w,z)},be.useLayoutEffect=function(w,z){return me.current.useLayoutEffect(w,z)},be.useMemo=function(w,z){return me.current.useMemo(w,z)},be.useReducer=function(w,z,de){return me.current.useReducer(w,z,de)},be.useRef=function(w){return me.current.useRef(w)},be.useState=function(w){return me.current.useState(w)},be.useSyncExternalStore=function(w,z,de){return me.current.useSyncExternalStore(w,z,de)},be.useTransition=function(){return me.current.useTransition()},be.version="18.3.1",be}var Ru;function Sl(){return Ru||(Ru=1,Qo.exports=vm()),Qo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function bm(){if($u)return gr;$u=1;var a=Sl(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,h,y){var x,_={},$=null,T=null;y!==void 0&&($=""+y),h.key!==void 0&&($=""+h.key),h.ref!==void 0&&(T=h.ref);for(x in h)l.call(h,x)&&!u.hasOwnProperty(x)&&(_[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)_[x]===void 0&&(_[x]=h[x]);return{$$typeof:r,type:f,key:$,ref:T,props:_,_owner:c.current}}return gr.Fragment=i,gr.jsx=p,gr.jsxs=p,gr}var Tu;function xm(){return Tu||(Tu=1,Vo.exports=bm()),Vo.exports}var il=xm(),ol=Sl();const yr=xp(ol);var zs={},Ko={exports:{}},pt={},Yo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function wm(){return Pu||(Pu=1,(function(a){function r(B,ee){var H=B.length;B.push(ee);e:for(;0<H;){var w=H-1>>>1,z=B[w];if(0<c(z,ee))B[w]=ee,B[H]=z,H=w;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var ee=B[0],H=B.pop();if(H!==ee){B[0]=H;e:for(var w=0,z=B.length,de=z>>>1;w<de;){var ge=2*(w+1)-1,ve=B[ge],G=ge+1,he=B[G];if(0>c(ve,H))G<z&&0>c(he,ve)?(B[w]=he,B[G]=H,w=G):(B[w]=ve,B[ge]=H,w=ge);else if(G<z&&0>c(he,H))B[w]=he,B[G]=H,w=G;else break e}}return ee}function c(B,ee){var H=B.sortIndex-ee.sortIndex;return H!==0?H:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();a.unstable_now=function(){return p.now()-f}}var h=[],y=[],x=1,_=null,$=3,T=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(B){for(var ee=i(y);ee!==null;){if(ee.callback===null)l(y);else if(ee.startTime<=B)l(y),ee.sortIndex=ee.expirationTime,r(h,ee);else break;ee=i(y)}}function j(B){if(A=!1,N(B),!M)if(i(h)!==null)M=!0,xe(V);else{var ee=i(y);ee!==null&&me(j,ee.startTime-B)}}function V(B,ee){M=!1,A&&(A=!1,E(U),U=-1),T=!0;var H=$;try{for(N(ee),_=i(h);_!==null&&(!(_.expirationTime>ee)||B&&!se());){var w=_.callback;if(typeof w=="function"){_.callback=null,$=_.priorityLevel;var z=w(_.expirationTime<=ee);ee=a.unstable_now(),typeof z=="function"?_.callback=z:_===i(h)&&l(h),N(ee)}else l(h);_=i(h)}if(_!==null)var de=!0;else{var ge=i(y);ge!==null&&me(j,ge.startTime-ee),de=!1}return de}finally{_=null,$=H,T=!1}}var K=!1,ce=null,U=-1,X=5,Y=-1;function se(){return!(a.unstable_now()-Y<X)}function ne(){if(ce!==null){var B=a.unstable_now();Y=B;var ee=!0;try{ee=ce(!0,B)}finally{ee?pe():(K=!1,ce=null)}}else K=!1}var pe;if(typeof P=="function")pe=function(){P(ne)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,re=fe.port2;fe.port1.onmessage=ne,pe=function(){re.postMessage(null)}}else pe=function(){S(ne,0)};function xe(B){ce=B,K||(K=!0,pe())}function me(B,ee){U=S(function(){B(a.unstable_now())},ee)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){M||T||(M=!0,xe(V))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return $},a.unstable_getFirstCallbackNode=function(){return i(h)},a.unstable_next=function(B){switch($){case 1:case 2:case 3:var ee=3;break;default:ee=$}var H=$;$=ee;try{return B()}finally{$=H}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=$;$=B;try{return ee()}finally{$=H}},a.unstable_scheduleCallback=function(B,ee,H){var w=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?w+H:w):H=w,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,B={id:x++,callback:ee,priorityLevel:B,startTime:H,expirationTime:z,sortIndex:-1},H>w?(B.sortIndex=H,r(y,B),i(h)===null&&B===i(y)&&(A?(E(U),U=-1):A=!0,me(j,H-w))):(B.sortIndex=z,r(h,B),M||T||(M=!0,xe(V))),B},a.unstable_shouldYield=se,a.unstable_wrapCallback=function(B){var ee=$;return function(){var H=$;$=ee;try{return B.apply(this,arguments)}finally{$=H}}}})(Go)),Go}var Au;function km(){return Au||(Au=1,Yo.exports=wm()),Yo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Sm(){if(Nu)return pt;Nu=1;var a=Sl(),r=km();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function $(e){return h.call(_,e)?!0:h.call(x,e)?!1:y.test(e)?_[e]=!0:(x[e]=!0,!1)}function T(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,n,s){if(t===null||typeof t>"u"||T(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,s,o,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,P);S[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,P);S[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,P);S[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,n,s){var o=S.hasOwnProperty(t)?S[t]:null;(o!==null?o.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,n,o,s)&&(n=null),s||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,s=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var j=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),K=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),se=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,w;function z(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var de=!1;function ge(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var s=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){s=R}e.call(t.prototype)}else{try{throw Error()}catch(R){s=R}e()}}catch(R){if(R&&s&&typeof R.stack=="string"){for(var o=R.stack.split(`
`),d=s.stack.split(`
`),g=o.length-1,m=d.length-1;1<=g&&0<=m&&o[g]!==d[m];)m--;for(;1<=g&&0<=m;g--,m--)if(o[g]!==d[m]){if(g!==1||m!==1)do if(g--,m--,0>m||o[g]!==d[m]){var v=`
`+o[g].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=g&&0<=m);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function ve(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case K:return"Portal";case X:return"Profiler";case U:return"StrictMode";case pe:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Y:return(e._context.displayName||"Context")+".Provider";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ke(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ie(e){var t=Se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){s=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){e._valueTracker||(e._valueTracker=Ie(e))}function rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Se(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ot(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function we(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _e(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=ke(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ie(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function Be(e,t){ie(e,t);var n=ke(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ct(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ct(e,t.type,ke(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _t(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ct(e,t,n){(t!=="number"||Ot(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ra=Array.isArray;function sa(e,t,n,s){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ke(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Il(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(ra(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ke(n)}}function Dl(e,t){var n=ke(t.value),s=ke(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function jl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ql(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ql(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Fl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wg=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){wg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ul(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Bl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,o=Ul(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,o):e[n]=o}}var kg=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Wa=null,Va=null;function Hl(e){if(e=Jn(e)){if(typeof li!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Yr(t),li(e.stateNode,e.type,t))}}function Xl(e){Wa?Va?Va.push(e):Va=[e]:Wa=e}function Wl(){if(Wa){var e=Wa,t=Va;if(Va=Wa=null,Hl(e),t)for(e=0;e<t.length;e++)Hl(t[e])}}function Vl(e,t){return e(t)}function Ql(){}var di=!1;function Kl(e,t,n){if(di)return e(t,n);di=!0;try{return Vl(e,t,n)}finally{di=!1,(Wa!==null||Va!==null)&&(Ql(),Wl())}}function Pn(e,t){var n=e.stateNode;if(n===null)return null;var s=Yr(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var ci=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){ci=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ci=!1}function Sg(e,t,n,s,o,d,g,m,v){var R=Array.prototype.slice.call(arguments,3);try{t.apply(n,R)}catch(D){this.onError(D)}}var Nn=!1,Rr=null,$r=!1,ui=null,Eg={onError:function(e){Nn=!0,Rr=e}};function _g(e,t,n,s,o,d,g,m,v){Nn=!1,Rr=null,Sg.apply(Eg,arguments)}function Cg(e,t,n,s,o,d,g,m,v){if(_g.apply(this,arguments),Nn){if(Nn){var R=Rr;Nn=!1,Rr=null}else throw Error(i(198));$r||($r=!0,ui=R)}}function _a(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gl(e){if(_a(e)!==e)throw Error(i(188))}function Lg(e){var t=e.alternate;if(!t){if(t=_a(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,s=t;;){var o=n.return;if(o===null)break;var d=o.alternate;if(d===null){if(s=o.return,s!==null){n=s;continue}break}if(o.child===d.child){for(d=o.child;d;){if(d===n)return Gl(o),e;if(d===s)return Gl(o),t;d=d.sibling}throw Error(i(188))}if(n.return!==s.return)n=o,s=d;else{for(var g=!1,m=o.child;m;){if(m===n){g=!0,n=o,s=d;break}if(m===s){g=!0,s=o,n=d;break}m=m.sibling}if(!g){for(m=d.child;m;){if(m===n){g=!0,n=d,s=o;break}if(m===s){g=!0,s=d,n=o;break}m=m.sibling}if(!g)throw Error(i(189))}}if(n.alternate!==s)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function Jl(e){return e=Lg(e),e!==null?Zl(e):null}function Zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zl(e);if(t!==null)return t;e=e.sibling}return null}var ed=r.unstable_scheduleCallback,td=r.unstable_cancelCallback,Rg=r.unstable_shouldYield,$g=r.unstable_requestPaint,je=r.unstable_now,Tg=r.unstable_getCurrentPriorityLevel,pi=r.unstable_ImmediatePriority,ad=r.unstable_UserBlockingPriority,Tr=r.unstable_NormalPriority,Pg=r.unstable_LowPriority,nd=r.unstable_IdlePriority,Pr=null,It=null;function Ag(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Pr,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:zg,Ng=Math.log,Mg=Math.LN2;function zg(e){return e>>>=0,e===0?32:31-(Ng(e)/Mg|0)|0}var Ar=64,Nr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,o=e.suspendedLanes,d=e.pingedLanes,g=n&268435455;if(g!==0){var m=g&~o;m!==0?s=Mn(m):(d&=g,d!==0&&(s=Mn(d)))}else g=n&~o,g!==0?s=Mn(g):d!==0&&(s=Mn(d));if(s===0)return 0;if(t!==0&&t!==s&&(t&o)===0&&(o=s&-s,d=t&-t,o>=d||o===16&&(d&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Lt(t),o=1<<n,s|=e[n],t&=~o;return s}function Og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ig(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-Lt(d),m=1<<g,v=o[g];v===-1?((m&n)===0||(m&s)!==0)&&(o[g]=Og(m,t)):v<=t&&(e.expiredLanes|=m),d&=~m}}function gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rd(){var e=Ar;return Ar<<=1,(Ar&4194240)===0&&(Ar=64),e}function fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Dg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),d=1<<o;t[o]=0,s[o]=-1,e[o]=-1,n&=~d}}function mi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Lt(n),o=1<<s;o&t|e[s]&t&&(e[s]|=t),n&=~o}}var Re=0;function sd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var id,hi,od,ld,dd,yi=!1,zr=[],ia=null,oa=null,la=null,On=new Map,In=new Map,da=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function Dn(e,t,n,s,o,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:d,targetContainers:[o]},t!==null&&(t=Jn(t),t!==null&&hi(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qg(e,t,n,s,o){switch(t){case"focusin":return ia=Dn(ia,e,t,n,s,o),!0;case"dragenter":return oa=Dn(oa,e,t,n,s,o),!0;case"mouseover":return la=Dn(la,e,t,n,s,o),!0;case"pointerover":var d=o.pointerId;return On.set(d,Dn(On.get(d)||null,e,t,n,s,o)),!0;case"gotpointercapture":return d=o.pointerId,In.set(d,Dn(In.get(d)||null,e,t,n,s,o)),!0}return!1}function ud(e){var t=Ca(e.target);if(t!==null){var n=_a(t);if(n!==null){if(t=n.tag,t===13){if(t=Yl(n),t!==null){e.blockedOn=t,dd(e.priority,function(){od(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ii=s,n.target.dispatchEvent(s),ii=null}else return t=Jn(n),t!==null&&hi(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){Or(e)&&n.delete(t)}function Fg(){yi=!1,ia!==null&&Or(ia)&&(ia=null),oa!==null&&Or(oa)&&(oa=null),la!==null&&Or(la)&&(la=null),On.forEach(pd),In.forEach(pd)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,yi||(yi=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fg)))}function qn(e){function t(o){return jn(o,e)}if(0<zr.length){jn(zr[0],e);for(var n=1;n<zr.length;n++){var s=zr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(ia!==null&&jn(ia,e),oa!==null&&jn(oa,e),la!==null&&jn(la,e),On.forEach(t),In.forEach(t),n=0;n<da.length;n++)s=da[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<da.length&&(n=da[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&da.shift()}var Qa=j.ReactCurrentBatchConfig,Ir=!0;function Ug(e,t,n,s){var o=Re,d=Qa.transition;Qa.transition=null;try{Re=1,vi(e,t,n,s)}finally{Re=o,Qa.transition=d}}function Bg(e,t,n,s){var o=Re,d=Qa.transition;Qa.transition=null;try{Re=4,vi(e,t,n,s)}finally{Re=o,Qa.transition=d}}function vi(e,t,n,s){if(Ir){var o=bi(e,t,n,s);if(o===null)Oi(e,t,s,Dr,n),cd(e,s);else if(qg(o,e,t,n,s))s.stopPropagation();else if(cd(e,s),t&4&&-1<jg.indexOf(e)){for(;o!==null;){var d=Jn(o);if(d!==null&&id(d),d=bi(e,t,n,s),d===null&&Oi(e,t,s,Dr,n),d===o)break;o=d}o!==null&&s.stopPropagation()}else Oi(e,t,s,null,n)}}var Dr=null;function bi(e,t,n,s){if(Dr=null,e=oi(s),e=Ca(e),e!==null)if(t=_a(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case pi:return 1;case ad:return 4;case Tr:case Pg:return 16;case nd:return 536870912;default:return 16}default:return 16}}var ca=null,xi=null,jr=null;function fd(){if(jr)return jr;var e,t=xi,n=t.length,s,o="value"in ca?ca.value:ca.textContent,d=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(s=1;s<=g&&t[n-s]===o[d-s];s++);return jr=o.slice(e,1<s?1-s:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function md(){return!1}function mt(e){function t(n,s,o,d,g){this._reactName=n,this._targetInst=o,this.type=s,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(d):d[m]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Fr:md,this.isPropagationStopped=md,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=mt(Ka),Fn=H({},Ka,{view:0,detail:0}),Hg=mt(Fn),ki,Si,Un,Ur=H({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ki=e.screenX-Un.screenX,Si=e.screenY-Un.screenY):Si=ki=0,Un=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),hd=mt(Ur),Xg=H({},Ur,{dataTransfer:0}),Wg=mt(Xg),Vg=H({},Fn,{relatedTarget:0}),Ei=mt(Vg),Qg=H({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=mt(Qg),Yg=H({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=mt(Yg),Jg=H({},Ka,{data:0}),yd=mt(Jg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function _i(){return af}var nf=H({},Fn,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=mt(nf),sf=H({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=mt(sf),of=H({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),lf=mt(of),df=H({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=mt(df),uf=H({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=mt(uf),gf=[9,13,27,32],Ci=f&&"CompositionEvent"in window,Bn=null;f&&"documentMode"in document&&(Bn=document.documentMode);var ff=f&&"TextEvent"in window&&!Bn,bd=f&&(!Ci||Bn&&8<Bn&&11>=Bn),xd=" ",wd=!1;function kd(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function mf(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(wd=!0,xd);case"textInput":return e=t.data,e===xd&&wd?null:e;default:return null}}function hf(e,t){if(Ya)return e==="compositionend"||!Ci&&kd(e,t)?(e=fd(),jr=xi=ca=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bd&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function _d(e,t,n,s){Xl(s),t=Vr(t,"onChange"),0<t.length&&(n=new wi("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Hn=null,Xn=null;function vf(e){Bd(e,0)}function Br(e){var t=tn(e);if(rt(t))return e}function bf(e,t){if(e==="change")return t}var Cd=!1;if(f){var Li;if(f){var Ri="oninput"in document;if(!Ri){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),Ri=typeof Ld.oninput=="function"}Li=Ri}else Li=!1;Cd=Li&&(!document.documentMode||9<document.documentMode)}function Rd(){Hn&&(Hn.detachEvent("onpropertychange",$d),Xn=Hn=null)}function $d(e){if(e.propertyName==="value"&&Br(Xn)){var t=[];_d(t,Xn,e,oi(e)),Kl(vf,t)}}function xf(e,t,n){e==="focusin"?(Rd(),Hn=t,Xn=n,Hn.attachEvent("onpropertychange",$d)):e==="focusout"&&Rd()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Xn)}function kf(e,t){if(e==="click")return Br(t)}function Sf(e,t){if(e==="input"||e==="change")return Br(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Ef;function Wn(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var o=n[s];if(!h.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pd(e,t){var n=Td(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Td(n)}}function Ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(){for(var e=window,t=Ot();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ot(e.document)}return t}function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _f(e){var t=Nd(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ad(n.ownerDocument.documentElement,n)){if(s!==null&&$i(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,d=Math.min(s.start,o);s=s.end===void 0?d:Math.min(s.end,o),!e.extend&&d>s&&(o=s,s=d,d=o),o=Pd(n,d);var g=Pd(n,s);o&&g&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cf=f&&"documentMode"in document&&11>=document.documentMode,Ga=null,Ti=null,Vn=null,Pi=!1;function Md(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pi||Ga==null||Ga!==Ot(s)||(s=Ga,"selectionStart"in s&&$i(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vn&&Wn(Vn,s)||(Vn=s,s=Vr(Ti,"onSelect"),0<s.length&&(t=new wi("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Ga)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ja={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Ai={},zd={};f&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Xr(e){if(Ai[e])return Ai[e];if(!Ja[e])return e;var t=Ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return Ai[e]=t[n];return e}var Od=Xr("animationend"),Id=Xr("animationiteration"),Dd=Xr("animationstart"),jd=Xr("transitionend"),qd=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ua(e,t){qd.set(e,t),u(t,[e])}for(var Ni=0;Ni<Fd.length;Ni++){var Mi=Fd[Ni],Lf=Mi.toLowerCase(),Rf=Mi[0].toUpperCase()+Mi.slice(1);ua(Lf,"on"+Rf)}ua(Od,"onAnimationEnd"),ua(Id,"onAnimationIteration"),ua(Dd,"onAnimationStart"),ua("dblclick","onDoubleClick"),ua("focusin","onFocus"),ua("focusout","onBlur"),ua(jd,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));function Ud(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Cg(s,t,void 0,e),e.currentTarget=null}function Bd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],o=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var g=s.length-1;0<=g;g--){var m=s[g],v=m.instance,R=m.currentTarget;if(m=m.listener,v!==d&&o.isPropagationStopped())break e;Ud(o,m,R),d=v}else for(g=0;g<s.length;g++){if(m=s[g],v=m.instance,R=m.currentTarget,m=m.listener,v!==d&&o.isPropagationStopped())break e;Ud(o,m,R),d=v}}}if($r)throw e=ui,$r=!1,ui=null,e}function Te(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var s=e+"__bubble";n.has(s)||(Hd(t,e,2,!1),n.add(s))}function zi(e,t,n){var s=0;t&&(s|=4),Hd(n,e,s,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Wr]){e[Wr]=!0,l.forEach(function(n){n!=="selectionchange"&&($f.has(n)||zi(n,!1,e),zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,zi("selectionchange",!1,t))}}function Hd(e,t,n,s){switch(gd(t)){case 1:var o=Ug;break;case 4:o=Bg;break;default:o=vi}n=o.bind(null,t,n,e),o=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Oi(e,t,n,s,o){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var m=s.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(g===4)for(g=s.return;g!==null;){var v=g.tag;if((v===3||v===4)&&(v=g.stateNode.containerInfo,v===o||v.nodeType===8&&v.parentNode===o))return;g=g.return}for(;m!==null;){if(g=Ca(m),g===null)return;if(v=g.tag,v===5||v===6){s=d=g;continue e}m=m.parentNode}}s=s.return}Kl(function(){var R=d,D=oi(n),q=[];e:{var I=qd.get(e);if(I!==void 0){var Q=wi,Z=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":Q=rf;break;case"focusin":Z="focus",Q=Ei;break;case"focusout":Z="blur",Q=Ei;break;case"beforeblur":case"afterblur":Q=Ei;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=lf;break;case Od:case Id:case Dd:Q=Kg;break;case jd:Q=cf;break;case"scroll":Q=Hg;break;case"wheel":Q=pf;break;case"copy":case"cut":case"paste":Q=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=vd}var te=(t&4)!==0,qe=!te&&e==="scroll",C=te?I!==null?I+"Capture":null:I;te=[];for(var b=R,L;b!==null;){L=b;var F=L.stateNode;if(L.tag===5&&F!==null&&(L=F,C!==null&&(F=Pn(b,C),F!=null&&te.push(Yn(b,F,L)))),qe)break;b=b.return}0<te.length&&(I=new Q(I,Z,null,n,D),q.push({event:I,listeners:te}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",I&&n!==ii&&(Z=n.relatedTarget||n.fromElement)&&(Ca(Z)||Z[Wt]))break e;if((Q||I)&&(I=D.window===D?D:(I=D.ownerDocument)?I.defaultView||I.parentWindow:window,Q?(Z=n.relatedTarget||n.toElement,Q=R,Z=Z?Ca(Z):null,Z!==null&&(qe=_a(Z),Z!==qe||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Q=null,Z=R),Q!==Z)){if(te=hd,F="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(te=vd,F="onPointerLeave",C="onPointerEnter",b="pointer"),qe=Q==null?I:tn(Q),L=Z==null?I:tn(Z),I=new te(F,b+"leave",Q,n,D),I.target=qe,I.relatedTarget=L,F=null,Ca(D)===R&&(te=new te(C,b+"enter",Z,n,D),te.target=L,te.relatedTarget=qe,F=te),qe=F,Q&&Z)t:{for(te=Q,C=Z,b=0,L=te;L;L=Za(L))b++;for(L=0,F=C;F;F=Za(F))L++;for(;0<b-L;)te=Za(te),b--;for(;0<L-b;)C=Za(C),L--;for(;b--;){if(te===C||C!==null&&te===C.alternate)break t;te=Za(te),C=Za(C)}te=null}else te=null;Q!==null&&Xd(q,I,Q,te,!1),Z!==null&&qe!==null&&Xd(q,qe,Z,te,!0)}}e:{if(I=R?tn(R):window,Q=I.nodeName&&I.nodeName.toLowerCase(),Q==="select"||Q==="input"&&I.type==="file")var ae=bf;else if(Ed(I))if(Cd)ae=Sf;else{ae=wf;var oe=xf}else(Q=I.nodeName)&&Q.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(ae=kf);if(ae&&(ae=ae(e,R))){_d(q,ae,n,D);break e}oe&&oe(e,I,R),e==="focusout"&&(oe=I._wrapperState)&&oe.controlled&&I.type==="number"&&Ct(I,"number",I.value)}switch(oe=R?tn(R):window,e){case"focusin":(Ed(oe)||oe.contentEditable==="true")&&(Ga=oe,Ti=R,Vn=null);break;case"focusout":Vn=Ti=Ga=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,Md(q,n,D);break;case"selectionchange":if(Cf)break;case"keydown":case"keyup":Md(q,n,D)}var le;if(Ci)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Ya?kd(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(bd&&n.locale!=="ko"&&(Ya||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Ya&&(le=fd()):(ca=D,xi="value"in ca?ca.value:ca.textContent,Ya=!0)),oe=Vr(R,ue),0<oe.length&&(ue=new yd(ue,e,null,n,D),q.push({event:ue,listeners:oe}),le?ue.data=le:(le=Sd(n),le!==null&&(ue.data=le)))),(le=ff?mf(e,n):hf(e,n))&&(R=Vr(R,"onBeforeInput"),0<R.length&&(D=new yd("onBeforeInput","beforeinput",null,n,D),q.push({event:D,listeners:R}),D.data=le))}Bd(q,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",s=[];e!==null;){var o=e,d=o.stateNode;o.tag===5&&d!==null&&(o=d,d=Pn(e,n),d!=null&&s.unshift(Yn(e,d,o)),d=Pn(e,t),d!=null&&s.push(Yn(e,d,o))),e=e.return}return s}function Za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,n,s,o){for(var d=t._reactName,g=[];n!==null&&n!==s;){var m=n,v=m.alternate,R=m.stateNode;if(v!==null&&v===s)break;m.tag===5&&R!==null&&(m=R,o?(v=Pn(n,d),v!=null&&g.unshift(Yn(n,v,m))):o||(v=Pn(n,d),v!=null&&g.push(Yn(n,v,m)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Tf=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function Wd(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Pf,"")}function Qr(e,t,n){if(t=Wd(t),Wd(e)!==t&&n)throw Error(i(425))}function Kr(){}var Ii=null,Di=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qi=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(e){return Vd.resolve(null).then(e).catch(Mf)}:qi;function Mf(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,s=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(s===0){e.removeChild(o),qn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=o}while(n);qn(t)}function pa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var en=Math.random().toString(36).slice(2),Dt="__reactFiber$"+en,Gn="__reactProps$"+en,Wt="__reactContainer$"+en,Ui="__reactEvents$"+en,zf="__reactListeners$"+en,Of="__reactHandles$"+en;function Ca(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qd(e);e!==null;){if(n=e[Dt])return n;e=Qd(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Dt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Yr(e){return e[Gn]||null}var Bi=[],an=-1;function ga(e){return{current:e}}function Pe(e){0>an||(e.current=Bi[an],Bi[an]=null,an--)}function $e(e,t){an++,Bi[an]=e.current,e.current=t}var fa={},Je=ga(fa),ot=ga(!1),La=fa;function nn(e,t){var n=e.type.contextTypes;if(!n)return fa;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var o={},d;for(d in n)o[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function Gr(){Pe(ot),Pe(Je)}function Kd(e,t,n){if(Je.current!==fa)throw Error(i(168));$e(Je,t),$e(ot,n)}function Yd(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var o in s)if(!(o in t))throw Error(i(108,he(e)||"Unknown",o));return H({},n,s)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fa,La=Je.current,$e(Je,e),$e(ot,ot.current),!0}function Gd(e,t,n){var s=e.stateNode;if(!s)throw Error(i(169));n?(e=Yd(e,t,La),s.__reactInternalMemoizedMergedChildContext=e,Pe(ot),Pe(Je),$e(Je,e)):Pe(ot),$e(ot,n)}var Vt=null,Zr=!1,Hi=!1;function Jd(e){Vt===null?Vt=[e]:Vt.push(e)}function If(e){Zr=!0,Jd(e)}function ma(){if(!Hi&&Vt!==null){Hi=!0;var e=0,t=Re;try{var n=Vt;for(Re=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Vt=null,Zr=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),ed(pi,ma),o}finally{Re=t,Hi=!1}}return null}var rn=[],sn=0,es=null,ts=0,bt=[],xt=0,Ra=null,Qt=1,Kt="";function $a(e,t){rn[sn++]=ts,rn[sn++]=es,es=e,ts=t}function Zd(e,t,n){bt[xt++]=Qt,bt[xt++]=Kt,bt[xt++]=Ra,Ra=e;var s=Qt;e=Kt;var o=32-Lt(s)-1;s&=~(1<<o),n+=1;var d=32-Lt(t)+o;if(30<d){var g=o-o%5;d=(s&(1<<g)-1).toString(32),s>>=g,o-=g,Qt=1<<32-Lt(t)+o|n<<o|s,Kt=d+e}else Qt=1<<d|n<<o|s,Kt=e}function Xi(e){e.return!==null&&($a(e,1),Zd(e,1,0))}function Wi(e){for(;e===es;)es=rn[--sn],rn[sn]=null,ts=rn[--sn],rn[sn]=null;for(;e===Ra;)Ra=bt[--xt],bt[xt]=null,Kt=bt[--xt],bt[xt]=null,Qt=bt[--xt],bt[xt]=null}var ht=null,yt=null,Ne=!1,$t=null;function ec(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,yt=pa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ra!==null?{id:Qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,yt=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(Ne){var t=yt;if(t){var n=t;if(!tc(e,t)){if(Vi(e))throw Error(i(418));t=pa(n.nextSibling);var s=ht;t&&tc(e,t)?ec(s,n):(e.flags=e.flags&-4097|2,Ne=!1,ht=e)}}else{if(Vi(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ne=!1,ht=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function as(e){if(e!==ht)return!1;if(!Ne)return ac(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=yt)){if(Vi(e))throw nc(),Error(i(418));for(;t;)ec(e,t),t=pa(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=pa(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=ht?pa(e.stateNode.nextSibling):null;return!0}function nc(){for(var e=yt;e;)e=pa(e.nextSibling)}function on(){yt=ht=null,Ne=!1}function Ki(e){$t===null?$t=[e]:$t.push(e)}var Df=j.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var s=n.stateNode}if(!s)throw Error(i(147,e));var o=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var m=o.refs;g===null?delete m[d]:m[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function sc(e){function t(C,b){if(e){var L=C.deletions;L===null?(C.deletions=[b],C.flags|=16):L.push(b)}}function n(C,b){if(!e)return null;for(;b!==null;)t(C,b),b=b.sibling;return null}function s(C,b){for(C=new Map;b!==null;)b.key!==null?C.set(b.key,b):C.set(b.index,b),b=b.sibling;return C}function o(C,b){return C=Sa(C,b),C.index=0,C.sibling=null,C}function d(C,b,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<b?(C.flags|=2,b):L):(C.flags|=2,b)):(C.flags|=1048576,b)}function g(C){return e&&C.alternate===null&&(C.flags|=2),C}function m(C,b,L,F){return b===null||b.tag!==6?(b=Fo(L,C.mode,F),b.return=C,b):(b=o(b,L),b.return=C,b)}function v(C,b,L,F){var ae=L.type;return ae===ce?D(C,b,L.props.children,F,L.key):b!==null&&(b.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xe&&rc(ae)===b.type)?(F=o(b,L.props),F.ref=Zn(C,b,L),F.return=C,F):(F=Ls(L.type,L.key,L.props,null,C.mode,F),F.ref=Zn(C,b,L),F.return=C,F)}function R(C,b,L,F){return b===null||b.tag!==4||b.stateNode.containerInfo!==L.containerInfo||b.stateNode.implementation!==L.implementation?(b=Uo(L,C.mode,F),b.return=C,b):(b=o(b,L.children||[]),b.return=C,b)}function D(C,b,L,F,ae){return b===null||b.tag!==7?(b=Ia(L,C.mode,F,ae),b.return=C,b):(b=o(b,L),b.return=C,b)}function q(C,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Fo(""+b,C.mode,L),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case V:return L=Ls(b.type,b.key,b.props,null,C.mode,L),L.ref=Zn(C,null,b),L.return=C,L;case K:return b=Uo(b,C.mode,L),b.return=C,b;case xe:var F=b._init;return q(C,F(b._payload),L)}if(ra(b)||ee(b))return b=Ia(b,C.mode,L,null),b.return=C,b;ns(C,b)}return null}function I(C,b,L,F){var ae=b!==null?b.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ae!==null?null:m(C,b,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return L.key===ae?v(C,b,L,F):null;case K:return L.key===ae?R(C,b,L,F):null;case xe:return ae=L._init,I(C,b,ae(L._payload),F)}if(ra(L)||ee(L))return ae!==null?null:D(C,b,L,F,null);ns(C,L)}return null}function Q(C,b,L,F,ae){if(typeof F=="string"&&F!==""||typeof F=="number")return C=C.get(L)||null,m(b,C,""+F,ae);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case V:return C=C.get(F.key===null?L:F.key)||null,v(b,C,F,ae);case K:return C=C.get(F.key===null?L:F.key)||null,R(b,C,F,ae);case xe:var oe=F._init;return Q(C,b,L,oe(F._payload),ae)}if(ra(F)||ee(F))return C=C.get(L)||null,D(b,C,F,ae,null);ns(b,F)}return null}function Z(C,b,L,F){for(var ae=null,oe=null,le=b,ue=b=0,Qe=null;le!==null&&ue<L.length;ue++){le.index>ue?(Qe=le,le=null):Qe=le.sibling;var Le=I(C,le,L[ue],F);if(Le===null){le===null&&(le=Qe);break}e&&le&&Le.alternate===null&&t(C,le),b=d(Le,b,ue),oe===null?ae=Le:oe.sibling=Le,oe=Le,le=Qe}if(ue===L.length)return n(C,le),Ne&&$a(C,ue),ae;if(le===null){for(;ue<L.length;ue++)le=q(C,L[ue],F),le!==null&&(b=d(le,b,ue),oe===null?ae=le:oe.sibling=le,oe=le);return Ne&&$a(C,ue),ae}for(le=s(C,le);ue<L.length;ue++)Qe=Q(le,C,ue,L[ue],F),Qe!==null&&(e&&Qe.alternate!==null&&le.delete(Qe.key===null?ue:Qe.key),b=d(Qe,b,ue),oe===null?ae=Qe:oe.sibling=Qe,oe=Qe);return e&&le.forEach(function(Ea){return t(C,Ea)}),Ne&&$a(C,ue),ae}function te(C,b,L,F){var ae=ee(L);if(typeof ae!="function")throw Error(i(150));if(L=ae.call(L),L==null)throw Error(i(151));for(var oe=ae=null,le=b,ue=b=0,Qe=null,Le=L.next();le!==null&&!Le.done;ue++,Le=L.next()){le.index>ue?(Qe=le,le=null):Qe=le.sibling;var Ea=I(C,le,Le.value,F);if(Ea===null){le===null&&(le=Qe);break}e&&le&&Ea.alternate===null&&t(C,le),b=d(Ea,b,ue),oe===null?ae=Ea:oe.sibling=Ea,oe=Ea,le=Qe}if(Le.done)return n(C,le),Ne&&$a(C,ue),ae;if(le===null){for(;!Le.done;ue++,Le=L.next())Le=q(C,Le.value,F),Le!==null&&(b=d(Le,b,ue),oe===null?ae=Le:oe.sibling=Le,oe=Le);return Ne&&$a(C,ue),ae}for(le=s(C,le);!Le.done;ue++,Le=L.next())Le=Q(le,C,ue,Le.value,F),Le!==null&&(e&&Le.alternate!==null&&le.delete(Le.key===null?ue:Le.key),b=d(Le,b,ue),oe===null?ae=Le:oe.sibling=Le,oe=Le);return e&&le.forEach(function(ym){return t(C,ym)}),Ne&&$a(C,ue),ae}function qe(C,b,L,F){if(typeof L=="object"&&L!==null&&L.type===ce&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case V:e:{for(var ae=L.key,oe=b;oe!==null;){if(oe.key===ae){if(ae=L.type,ae===ce){if(oe.tag===7){n(C,oe.sibling),b=o(oe,L.props.children),b.return=C,C=b;break e}}else if(oe.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xe&&rc(ae)===oe.type){n(C,oe.sibling),b=o(oe,L.props),b.ref=Zn(C,oe,L),b.return=C,C=b;break e}n(C,oe);break}else t(C,oe);oe=oe.sibling}L.type===ce?(b=Ia(L.props.children,C.mode,F,L.key),b.return=C,C=b):(F=Ls(L.type,L.key,L.props,null,C.mode,F),F.ref=Zn(C,b,L),F.return=C,C=F)}return g(C);case K:e:{for(oe=L.key;b!==null;){if(b.key===oe)if(b.tag===4&&b.stateNode.containerInfo===L.containerInfo&&b.stateNode.implementation===L.implementation){n(C,b.sibling),b=o(b,L.children||[]),b.return=C,C=b;break e}else{n(C,b);break}else t(C,b);b=b.sibling}b=Uo(L,C.mode,F),b.return=C,C=b}return g(C);case xe:return oe=L._init,qe(C,b,oe(L._payload),F)}if(ra(L))return Z(C,b,L,F);if(ee(L))return te(C,b,L,F);ns(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,b!==null&&b.tag===6?(n(C,b.sibling),b=o(b,L),b.return=C,C=b):(n(C,b),b=Fo(L,C.mode,F),b.return=C,C=b),g(C)):n(C,b)}return qe}var ln=sc(!0),ic=sc(!1),rs=ga(null),ss=null,dn=null,Yi=null;function Gi(){Yi=dn=ss=null}function Ji(e){var t=rs.current;Pe(rs),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){ss=e,Yi=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(ss===null)throw Error(i(308));dn=e,ss.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var Ta=null;function eo(e){Ta===null?Ta=[e]:Ta.push(e)}function oc(e,t,n,s){var o=t.interleaved;return o===null?(n.next=n,eo(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,s)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ha=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ya(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,Yt(e,n)}return o=s.interleaved,o===null?(t.next=t,eo(s)):(t.next=o.next,o.next=t),s.interleaved=t,Yt(e,n)}function is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,mi(e,n)}}function dc(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var o=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?o=d=g:d=d.next=g,n=n.next}while(n!==null);d===null?o=d=t:d=d.next=t}else o=d=t;n={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function os(e,t,n,s){var o=e.updateQueue;ha=!1;var d=o.firstBaseUpdate,g=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var v=m,R=v.next;v.next=null,g===null?d=R:g.next=R,g=v;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==g&&(m===null?D.firstBaseUpdate=R:m.next=R,D.lastBaseUpdate=v))}if(d!==null){var q=o.baseState;g=0,D=R=v=null,m=d;do{var I=m.lane,Q=m.eventTime;if((s&I)===I){D!==null&&(D=D.next={eventTime:Q,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var Z=e,te=m;switch(I=t,Q=n,te.tag){case 1:if(Z=te.payload,typeof Z=="function"){q=Z.call(Q,q,I);break e}q=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=te.payload,I=typeof Z=="function"?Z.call(Q,q,I):Z,I==null)break e;q=H({},q,I);break e;case 2:ha=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,I=o.effects,I===null?o.effects=[m]:I.push(m))}else Q={eventTime:Q,lane:I,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(R=D=Q,v=q):D=D.next=Q,g|=I;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;I=m,m=I.next,I.next=null,o.lastBaseUpdate=I,o.shared.pending=null}}while(!0);if(D===null&&(v=q),o.baseState=v,o.firstBaseUpdate=R,o.lastBaseUpdate=D,t=o.shared.interleaved,t!==null){o=t;do g|=o.lane,o=o.next;while(o!==t)}else d===null&&(o.shared.lanes=0);Na|=g,e.lanes=g,e.memoizedState=q}}function cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],o=s.callback;if(o!==null){if(s.callback=null,s=n,typeof o!="function")throw Error(i(191,o));o.call(s)}}}var er={},jt=ga(er),tr=ga(er),ar=ga(er);function Pa(e){if(e===er)throw Error(i(174));return e}function ao(e,t){switch($e(ar,t),$e(tr,e),$e(jt,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}Pe(jt),$e(jt,t)}function un(){Pe(jt),Pe(tr),Pe(ar)}function uc(e){Pa(ar.current);var t=Pa(jt.current),n=ni(t,e.type);t!==n&&($e(tr,e),$e(jt,n))}function no(e){tr.current===e&&(Pe(jt),Pe(tr))}var ze=ga(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=[];function so(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var ds=j.ReactCurrentDispatcher,io=j.ReactCurrentBatchConfig,Aa=0,Oe=null,He=null,We=null,cs=!1,nr=!1,rr=0,jf=0;function Ze(){throw Error(i(321))}function oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function lo(e,t,n,s,o,d){if(Aa=d,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?Bf:Hf,e=n(s,o),nr){d=0;do{if(nr=!1,rr=0,25<=d)throw Error(i(301));d+=1,We=He=null,t.updateQueue=null,ds.current=Xf,e=n(s,o)}while(nr)}if(ds.current=gs,t=He!==null&&He.next!==null,Aa=0,We=He=Oe=null,cs=!1,t)throw Error(i(300));return e}function co(){var e=rr!==0;return rr=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Oe.memoizedState=We=e:We=We.next=e,We}function kt(){if(He===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=We===null?Oe.memoizedState:We.next;if(t!==null)We=t,He=e;else{if(e===null)throw Error(i(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},We===null?Oe.memoizedState=We=e:We=We.next=e}return We}function sr(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=kt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=He,o=s.baseQueue,d=n.pending;if(d!==null){if(o!==null){var g=o.next;o.next=d.next,d.next=g}s.baseQueue=o=d,n.pending=null}if(o!==null){d=o.next,s=s.baseState;var m=g=null,v=null,R=d;do{var D=R.lane;if((Aa&D)===D)v!==null&&(v=v.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),s=R.hasEagerState?R.eagerState:e(s,R.action);else{var q={lane:D,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};v===null?(m=v=q,g=s):v=v.next=q,Oe.lanes|=D,Na|=D}R=R.next}while(R!==null&&R!==d);v===null?g=s:v.next=m,Rt(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseState=g,t.baseQueue=v,n.lastRenderedState=s}if(e=n.interleaved,e!==null){o=e;do d=o.lane,Oe.lanes|=d,Na|=d,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function po(e){var t=kt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=n.dispatch,o=n.pending,d=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do d=e(d,g.action),g=g.next;while(g!==o);Rt(d,t.memoizedState)||(dt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,s]}function pc(){}function gc(e,t){var n=Oe,s=kt(),o=t(),d=!Rt(s.memoizedState,o);if(d&&(s.memoizedState=o,dt=!0),s=s.queue,go(hc.bind(null,n,s,e),[e]),s.getSnapshot!==t||d||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ir(9,mc.bind(null,n,s,o,t),void 0,null),Ve===null)throw Error(i(349));(Aa&30)!==0||fc(n,t,o)}return o}function fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,s){t.value=n,t.getSnapshot=s,yc(t)&&vc(e)}function hc(e,t,n){return n(function(){yc(t)&&vc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function vc(e){var t=Yt(e,1);t!==null&&Nt(t,e,1,-1)}function bc(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,Oe,e),[t.memoizedState,e]}function ir(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function xc(){return kt().memoizedState}function us(e,t,n,s){var o=qt();Oe.flags|=e,o.memoizedState=ir(1|t,n,void 0,s===void 0?null:s)}function ps(e,t,n,s){var o=kt();s=s===void 0?null:s;var d=void 0;if(He!==null){var g=He.memoizedState;if(d=g.destroy,s!==null&&oo(s,g.deps)){o.memoizedState=ir(t,n,d,s);return}}Oe.flags|=e,o.memoizedState=ir(1|t,n,d,s)}function wc(e,t){return us(8390656,8,e,t)}function go(e,t){return ps(2048,8,e,t)}function kc(e,t){return ps(4,2,e,t)}function Sc(e,t){return ps(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _c(e,t,n){return n=n!=null?n.concat([e]):null,ps(4,4,Ec.bind(null,t,e),n)}function fo(){}function Cc(e,t){var n=kt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&oo(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Lc(e,t){var n=kt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&oo(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return(Aa&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n):(Rt(n,t)||(n=rd(),Oe.lanes|=n,Na|=n,e.baseState=!0),t)}function qf(e,t){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var s=io.transition;io.transition={};try{e(!1),t()}finally{Re=n,io.transition=s}}function $c(){return kt().memoizedState}function Ff(e,t,n){var s=wa(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Tc(e))Pc(t,n);else if(n=oc(e,t,n,s),n!==null){var o=it();Nt(n,e,s,o),Ac(n,t,s)}}function Uf(e,t,n){var s=wa(e),o={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tc(e))Pc(t,o);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,m=d(g,n);if(o.hasEagerState=!0,o.eagerState=m,Rt(m,g)){var v=t.interleaved;v===null?(o.next=o,eo(t)):(o.next=v.next,v.next=o),t.interleaved=o;return}}catch{}finally{}n=oc(e,t,o,s),n!==null&&(o=it(),Nt(n,e,s,o),Ac(n,t,s))}}function Tc(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Pc(e,t){nr=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ac(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,mi(e,n)}}var gs={readContext:wt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Bf={readContext:wt,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=qt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Ff.bind(null,Oe,e),[s.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:fo,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=qf.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Oe,o=qt();if(Ne){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ve===null)throw Error(i(349));(Aa&30)!==0||fc(s,t,n)}o.memoizedState=n;var d={value:n,getSnapshot:t};return o.queue=d,wc(hc.bind(null,s,d,e),[e]),s.flags|=2048,ir(9,mc.bind(null,s,d,n,t),void 0,null),n},useId:function(){var e=qt(),t=Ve.identifierPrefix;if(Ne){var n=Kt,s=Qt;n=(s&~(1<<32-Lt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:wt,useCallback:Cc,useContext:wt,useEffect:go,useImperativeHandle:_c,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:Lc,useReducer:uo,useRef:xc,useState:function(){return uo(sr)},useDebugValue:fo,useDeferredValue:function(e){var t=kt();return Rc(t,He.memoizedState,e)},useTransition:function(){var e=uo(sr)[0],t=kt().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:gc,useId:$c,unstable_isNewReconciler:!1},Xf={readContext:wt,useCallback:Cc,useContext:wt,useEffect:go,useImperativeHandle:_c,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:Lc,useReducer:po,useRef:xc,useState:function(){return po(sr)},useDebugValue:fo,useDeferredValue:function(e){var t=kt();return He===null?t.memoizedState=e:Rc(t,He.memoizedState,e)},useTransition:function(){var e=po(sr)[0],t=kt().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:gc,useId:$c,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mo(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return(e=e._reactInternals)?_a(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=it(),o=wa(e),d=Gt(s,o);d.payload=t,n!=null&&(d.callback=n),t=ya(e,d,o),t!==null&&(Nt(t,e,o,s),is(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=it(),o=wa(e),d=Gt(s,o);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=ya(e,d,o),t!==null&&(Nt(t,e,o,s),is(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),s=wa(e),o=Gt(n,s);o.tag=2,t!=null&&(o.callback=t),t=ya(e,o,s),t!==null&&(Nt(t,e,s,n),is(t,e,s))}};function Nc(e,t,n,s,o,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,g):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,s)||!Wn(o,d):!0}function Mc(e,t,n){var s=!1,o=fa,d=t.contextType;return typeof d=="object"&&d!==null?d=wt(d):(o=lt(t)?La:Je.current,s=t.contextTypes,d=(s=s!=null)?nn(e,o):fa),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=d),t}function zc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function ho(e,t,n,s){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},to(e);var d=t.contextType;typeof d=="object"&&d!==null?o.context=wt(d):(d=lt(t)?La:Je.current,o.context=nn(e,d)),o.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(mo(e,t,d,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fs.enqueueReplaceState(o,o.state,null),os(e,n,o,s),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",s=t;do n+=ve(s),s=s.return;while(s);var o=n}catch(d){o=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:o,digest:null}}function yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){ws||(ws=!0,No=s),vo(e,t)},n}function Ic(e,t,n){n=Gt(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var o=t.value;n.payload=function(){return s(o)},n.callback=function(){vo(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){vo(e,t),typeof s!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Dc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Wf;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(n)||(o.add(n),e=im.bind(null,e,t,n),t.then(e,e))}function jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,s,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,ya(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Vf=j.ReactCurrentOwner,dt=!1;function st(e,t,n,s){t.child=e===null?ic(t,null,n,s):ln(t,e.child,n,s)}function Fc(e,t,n,s,o){n=n.render;var d=t.ref;return cn(t,o),s=lo(e,t,n,s,d,o),n=co(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Ne&&n&&Xi(t),t.flags|=1,st(e,t,s,o),t.child)}function Uc(e,t,n,s,o){if(e===null){var d=n.type;return typeof d=="function"&&!qo(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,Bc(e,t,d,s,o)):(e=Ls(n.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&o)===0){var g=d.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(g,s)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=Sa(d,s),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,s,o){if(e!==null){var d=e.memoizedProps;if(Wn(d,s)&&e.ref===t.ref)if(dt=!1,t.pendingProps=s=d,(e.lanes&o)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return bo(e,t,n,s,o)}function Hc(e,t,n){var s=t.pendingProps,o=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(fn,vt),vt|=n;else{if((n&1073741824)===0)return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(fn,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:n,$e(fn,vt),vt|=s}else d!==null?(s=d.baseLanes|n,t.memoizedState=null):s=n,$e(fn,vt),vt|=s;return st(e,t,o,n),t.child}function Xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bo(e,t,n,s,o){var d=lt(n)?La:Je.current;return d=nn(t,d),cn(t,o),n=lo(e,t,n,s,d,o),s=co(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Ne&&s&&Xi(t),t.flags|=1,st(e,t,n,o),t.child)}function Wc(e,t,n,s,o){if(lt(n)){var d=!0;Jr(t)}else d=!1;if(cn(t,o),t.stateNode===null)hs(e,t),Mc(t,n,s),ho(t,n,s,o),s=!0;else if(e===null){var g=t.stateNode,m=t.memoizedProps;g.props=m;var v=g.context,R=n.contextType;typeof R=="object"&&R!==null?R=wt(R):(R=lt(n)?La:Je.current,R=nn(t,R));var D=n.getDerivedStateFromProps,q=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";q||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(m!==s||v!==R)&&zc(t,g,s,R),ha=!1;var I=t.memoizedState;g.state=I,os(t,s,g,o),v=t.memoizedState,m!==s||I!==v||ot.current||ha?(typeof D=="function"&&(mo(t,n,D,s),v=t.memoizedState),(m=ha||Nc(t,n,m,s,I,v,R))?(q||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=v),g.props=s,g.state=v,g.context=R,s=m):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{g=t.stateNode,lc(e,t),m=t.memoizedProps,R=t.type===t.elementType?m:Tt(t.type,m),g.props=R,q=t.pendingProps,I=g.context,v=n.contextType,typeof v=="object"&&v!==null?v=wt(v):(v=lt(n)?La:Je.current,v=nn(t,v));var Q=n.getDerivedStateFromProps;(D=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(m!==q||I!==v)&&zc(t,g,s,v),ha=!1,I=t.memoizedState,g.state=I,os(t,s,g,o);var Z=t.memoizedState;m!==q||I!==Z||ot.current||ha?(typeof Q=="function"&&(mo(t,n,Q,s),Z=t.memoizedState),(R=ha||Nc(t,n,R,s,I,Z,v)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,Z,v),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,Z,v)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=Z),g.props=s,g.state=Z,g.context=v,s=R):(typeof g.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),s=!1)}return xo(e,t,n,s,d,o)}function xo(e,t,n,s,o,d){Xc(e,t);var g=(t.flags&128)!==0;if(!s&&!g)return o&&Gd(t,n,!1),Jt(e,t,d);s=t.stateNode,Vf.current=t;var m=g&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&g?(t.child=ln(t,e.child,null,d),t.child=ln(t,null,m,d)):st(e,t,m,d),t.memoizedState=s.state,o&&Gd(t,n,!0),t.child}function Vc(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),ao(e,t.containerInfo)}function Qc(e,t,n,s,o){return on(),Ki(o),t.flags|=256,st(e,t,n,s),t.child}var wo={dehydrated:null,treeContext:null,retryLane:0};function ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var s=t.pendingProps,o=ze.current,d=!1,g=(t.flags&128)!==0,m;if((m=g)||(m=e!==null&&e.memoizedState===null?!1:(o&2)!==0),m?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$e(ze,o&1),e===null)return Qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=s.children,e=s.fallback,d?(s=t.mode,d=t.child,g={mode:"hidden",children:g},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Rs(g,s,0,null),e=Ia(e,s,n,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ko(n),t.memoizedState=wo,e):So(t,g));if(o=e.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return Qf(e,t,g,s,m,o,n);if(d){d=s.fallback,g=t.mode,o=e.child,m=o.sibling;var v={mode:"hidden",children:s.children};return(g&1)===0&&t.child!==o?(s=t.child,s.childLanes=0,s.pendingProps=v,t.deletions=null):(s=Sa(o,v),s.subtreeFlags=o.subtreeFlags&14680064),m!==null?d=Sa(m,d):(d=Ia(d,g,n,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,g=e.child.memoizedState,g=g===null?ko(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~n,t.memoizedState=wo,s}return d=e.child,e=d.sibling,s=Sa(d,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function So(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,s){return s!==null&&Ki(s),ln(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,s,o,d,g){if(n)return t.flags&256?(t.flags&=-257,s=yo(Error(i(422))),ms(e,t,g,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,o=t.mode,s=Rs({mode:"visible",children:s.children},o,0,null),d=Ia(d,o,g,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,(t.mode&1)!==0&&ln(t,e.child,null,g),t.child.memoizedState=ko(g),t.memoizedState=wo,d);if((t.mode&1)===0)return ms(e,t,g,null);if(o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var m=s.dgst;return s=m,d=Error(i(419)),s=yo(d,s,void 0),ms(e,t,g,s)}if(m=(g&e.childLanes)!==0,dt||m){if(s=Ve,s!==null){switch(g&-g){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(s.suspendedLanes|g))!==0?0:o,o!==0&&o!==d.retryLane&&(d.retryLane=o,Yt(e,o),Nt(s,e,o,-1))}return jo(),s=yo(Error(i(421))),ms(e,t,g,s)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=om.bind(null,e),o._reactRetry=t,null):(e=d.treeContext,yt=pa(o.nextSibling),ht=t,Ne=!0,$t=null,e!==null&&(bt[xt++]=Qt,bt[xt++]=Kt,bt[xt++]=Ra,Qt=e.id,Kt=e.overflow,Ra=t),t=So(t,s.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zi(e.return,t,n)}function Eo(e,t,n,s,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:o}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=o)}function Gc(e,t,n){var s=t.pendingProps,o=s.revealOrder,d=s.tail;if(st(e,t,s.children,n),s=ze.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if($e(ze,s),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Eo(t,!1,o,n,d);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ls(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Eo(t,!0,n,null,d);break;case"together":Eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Sa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kf(e,t,n){switch(t.tag){case 3:Vc(t),on();break;case 5:uc(t);break;case 1:lt(t.type)&&Jr(t);break;case 4:ao(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,o=t.memoizedProps.value;$e(rs,s._currentValue),s._currentValue=o;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?($e(ze,ze.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Kc(e,t,n):($e(ze,ze.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);$e(ze,ze.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Gc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$e(ze,ze.current),s)break;return null;case 22:case 23:return t.lanes=0,Hc(e,t,n)}return Jt(e,t,n)}var Jc,_o,Zc,eu;Jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_o=function(){},Zc=function(e,t,n,s){var o=e.memoizedProps;if(o!==s){e=t.stateNode,Pa(jt.current);var d=null;switch(n){case"input":o=we(e,o),s=we(e,s),d=[];break;case"select":o=H({},o,{value:void 0}),s=H({},s,{value:void 0}),d=[];break;case"textarea":o=Xt(e,o),s=Xt(e,s),d=[];break;default:typeof o.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Kr)}ri(n,s);var g;n=null;for(R in o)if(!s.hasOwnProperty(R)&&o.hasOwnProperty(R)&&o[R]!=null)if(R==="style"){var m=o[R];for(g in m)m.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in s){var v=s[R];if(m=o!=null?o[R]:void 0,s.hasOwnProperty(R)&&v!==m&&(v!=null||m!=null))if(R==="style")if(m){for(g in m)!m.hasOwnProperty(g)||v&&v.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in v)v.hasOwnProperty(g)&&m[g]!==v[g]&&(n||(n={}),n[g]=v[g])}else n||(d||(d=[]),d.push(R,n)),n=v;else R==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(d=d||[]).push(R,v)):R==="children"?typeof v!="string"&&typeof v!="number"||(d=d||[]).push(R,""+v):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(v!=null&&R==="onScroll"&&Te("scroll",e),d||m===v||(d=[])):(d=d||[]).push(R,v))}n&&(d=d||[]).push("style",n);var R=d;(t.updateQueue=R)&&(t.flags|=4)}},eu=function(e,t,n,s){n!==s&&(t.flags|=4)};function or(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,s|=o.subtreeFlags&14680064,s|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Yf(e,t,n){var s=t.pendingProps;switch(Wi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return lt(t.type)&&Gr(),et(t),null;case 3:return s=t.stateNode,un(),Pe(ot),Pe(Je),so(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$t!==null&&(Oo($t),$t=null))),_o(e,t),et(t),null;case 5:no(t);var o=Pa(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Zc(e,t,n,s,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return et(t),null}if(e=Pa(jt.current),as(t)){s=t.stateNode,n=t.type;var d=t.memoizedProps;switch(s[Dt]=t,s[Gn]=d,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",s),Te("close",s);break;case"iframe":case"object":case"embed":Te("load",s);break;case"video":case"audio":for(o=0;o<Qn.length;o++)Te(Qn[o],s);break;case"source":Te("error",s);break;case"img":case"image":case"link":Te("error",s),Te("load",s);break;case"details":Te("toggle",s);break;case"input":_e(s,d),Te("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Te("invalid",s);break;case"textarea":Il(s,d),Te("invalid",s)}ri(n,d),o=null;for(var g in d)if(d.hasOwnProperty(g)){var m=d[g];g==="children"?typeof m=="string"?s.textContent!==m&&(d.suppressHydrationWarning!==!0&&Qr(s.textContent,m,e),o=["children",m]):typeof m=="number"&&s.textContent!==""+m&&(d.suppressHydrationWarning!==!0&&Qr(s.textContent,m,e),o=["children",""+m]):c.hasOwnProperty(g)&&m!=null&&g==="onScroll"&&Te("scroll",s)}switch(n){case"input":zt(s),_t(s,d,!0);break;case"textarea":zt(s),jl(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Kr)}s=o,t.updateQueue=s,s!==null&&(t.flags|=4)}else{g=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ql(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(n,{is:s.is}):(e=g.createElement(n),n==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,n),e[Dt]=t,e[Gn]=s,Jc(e,t,!1,!1),t.stateNode=e;e:{switch(g=si(n,s),n){case"dialog":Te("cancel",e),Te("close",e),o=s;break;case"iframe":case"object":case"embed":Te("load",e),o=s;break;case"video":case"audio":for(o=0;o<Qn.length;o++)Te(Qn[o],e);o=s;break;case"source":Te("error",e),o=s;break;case"img":case"image":case"link":Te("error",e),Te("load",e),o=s;break;case"details":Te("toggle",e),o=s;break;case"input":_e(e,s),o=we(e,s),Te("invalid",e);break;case"option":o=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},o=H({},s,{value:void 0}),Te("invalid",e);break;case"textarea":Il(e,s),o=Xt(e,s),Te("invalid",e);break;default:o=s}ri(n,o),m=o;for(d in m)if(m.hasOwnProperty(d)){var v=m[d];d==="style"?Bl(e,v):d==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Fl(e,v)):d==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&$n(e,v):typeof v=="number"&&$n(e,""+v):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?v!=null&&d==="onScroll"&&Te("scroll",e):v!=null&&N(e,d,v,g))}switch(n){case"input":zt(e),_t(e,s,!1);break;case"textarea":zt(e),jl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ke(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?sa(e,!!s.multiple,d,!1):s.defaultValue!=null&&sa(e,!!s.multiple,s.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(n=Pa(ar.current),Pa(jt.current),as(t)){if(s=t.stateNode,n=t.memoizedProps,s[Dt]=t,(d=s.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Qr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(s.nodeValue,n,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Dt]=t,t.stateNode=s}return et(t),null;case 13:if(Pe(ze),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)nc(),on(),t.flags|=98560,d=!1;else if(d=as(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Dt]=t}else on(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),d=!1}else $t!==null&&(Oo($t),$t=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Xe===0&&(Xe=3):jo())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return un(),_o(e,t),e===null&&Kn(t.stateNode.containerInfo),et(t),null;case 10:return Ji(t.type._context),et(t),null;case 17:return lt(t.type)&&Gr(),et(t),null;case 19:if(Pe(ze),d=t.memoizedState,d===null)return et(t),null;if(s=(t.flags&128)!==0,g=d.rendering,g===null)if(s)or(d,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=ls(e),g!==null){for(t.flags|=128,or(d,!1),s=g.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)d=n,e=s,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(ze,ze.current&1|2),t.child}e=e.sibling}d.tail!==null&&je()>mn&&(t.flags|=128,s=!0,or(d,!1),t.lanes=4194304)}else{if(!s)if(e=ls(g),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ne)return et(t),null}else 2*je()-d.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,s=!0,or(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(n=d.last,n!==null?n.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=je(),t.sibling=null,n=ze.current,$e(ze,s?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Do(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(vt&1073741824)!==0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Gf(e,t){switch(Wi(t),t.tag){case 1:return lt(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),Pe(ot),Pe(Je),so(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return no(t),null;case 13:if(Pe(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(ze),null;case 4:return un(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return Do(),null;case 24:return null;default:return null}}var ys=!1,tt=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,J=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){De(e,t,s)}else n.current=null}function Co(e,t,n){try{n()}catch(s){De(e,t,s)}}var tu=!1;function Zf(e,t){if(Ii=Ir,e=Nd(),$i(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var o=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var g=0,m=-1,v=-1,R=0,D=0,q=e,I=null;t:for(;;){for(var Q;q!==n||o!==0&&q.nodeType!==3||(m=g+o),q!==d||s!==0&&q.nodeType!==3||(v=g+s),q.nodeType===3&&(g+=q.nodeValue.length),(Q=q.firstChild)!==null;)I=q,q=Q;for(;;){if(q===e)break t;if(I===n&&++R===o&&(m=g),I===d&&++D===s&&(v=g),(Q=q.nextSibling)!==null)break;q=I,I=q.parentNode}q=Q}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},Ir=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var te=Z.memoizedProps,qe=Z.memoizedState,C=t.stateNode,b=C.getSnapshotBeforeUpdate(t.elementType===t.type?te:Tt(t.type,te),qe);C.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(F){De(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return Z=tu,tu=!1,Z}function lr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&e)===e){var d=o.destroy;o.destroy=void 0,d!==void 0&&Co(t,n,d)}o=o.next}while(o!==s)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function au(e){var t=e.alternate;t!==null&&(e.alternate=null,au(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Gn],delete t[Ui],delete t[zf],delete t[Of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nu(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(s!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function $o(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var Ke=null,Pt=!1;function va(e,t,n){for(n=n.child;n!==null;)su(e,t,n),n=n.sibling}function su(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Pr,n)}catch{}switch(n.tag){case 5:tt||gn(n,t);case 6:var s=Ke,o=Pt;Ke=null,va(e,t,n),Ke=s,Pt=o,Ke!==null&&(Pt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Pt?(e=Ke,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),qn(e)):Fi(Ke,n.stateNode));break;case 4:s=Ke,o=Pt,Ke=n.stateNode.containerInfo,Pt=!0,va(e,t,n),Ke=s,Pt=o;break;case 0:case 11:case 14:case 15:if(!tt&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){o=s=s.next;do{var d=o,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&Co(n,t,g),o=o.next}while(o!==s)}va(e,t,n);break;case 1:if(!tt&&(gn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(m){De(n,t,m)}va(e,t,n);break;case 21:va(e,t,n);break;case 22:n.mode&1?(tt=(s=tt)||n.memoizedState!==null,va(e,t,n),tt=s):va(e,t,n);break;default:va(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(s){var o=lm.bind(null,e,s);n.has(s)||(n.add(s),s.then(o,o))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];try{var d=e,g=t,m=g;e:for(;m!==null;){switch(m.tag){case 5:Ke=m.stateNode,Pt=!1;break e;case 3:Ke=m.stateNode.containerInfo,Pt=!0;break e;case 4:Ke=m.stateNode.containerInfo,Pt=!0;break e}m=m.return}if(Ke===null)throw Error(i(160));su(d,g,o),Ke=null,Pt=!1;var v=o.alternate;v!==null&&(v.return=null),o.return=null}catch(R){De(o,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ft(e),s&4){try{lr(3,e,e.return),vs(3,e)}catch(te){De(e,e.return,te)}try{lr(5,e,e.return)}catch(te){De(e,e.return,te)}}break;case 1:At(t,e),Ft(e),s&512&&n!==null&&gn(n,n.return);break;case 5:if(At(t,e),Ft(e),s&512&&n!==null&&gn(n,n.return),e.flags&32){var o=e.stateNode;try{$n(o,"")}catch(te){De(e,e.return,te)}}if(s&4&&(o=e.stateNode,o!=null)){var d=e.memoizedProps,g=n!==null?n.memoizedProps:d,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&d.type==="radio"&&d.name!=null&&ie(o,d),si(m,g);var R=si(m,d);for(g=0;g<v.length;g+=2){var D=v[g],q=v[g+1];D==="style"?Bl(o,q):D==="dangerouslySetInnerHTML"?Fl(o,q):D==="children"?$n(o,q):N(o,D,q,R)}switch(m){case"input":Be(o,d);break;case"textarea":Dl(o,d);break;case"select":var I=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!d.multiple;var Q=d.value;Q!=null?sa(o,!!d.multiple,Q,!1):I!==!!d.multiple&&(d.defaultValue!=null?sa(o,!!d.multiple,d.defaultValue,!0):sa(o,!!d.multiple,d.multiple?[]:"",!1))}o[Gn]=d}catch(te){De(e,e.return,te)}}break;case 6:if(At(t,e),Ft(e),s&4){if(e.stateNode===null)throw Error(i(162));o=e.stateNode,d=e.memoizedProps;try{o.nodeValue=d}catch(te){De(e,e.return,te)}}break;case 3:if(At(t,e),Ft(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(te){De(e,e.return,te)}break;case 4:At(t,e),Ft(e);break;case 13:At(t,e),Ft(e),o=e.child,o.flags&8192&&(d=o.memoizedState!==null,o.stateNode.isHidden=d,!d||o.alternate!==null&&o.alternate.memoizedState!==null||(Ao=je())),s&4&&iu(e);break;case 22:if(D=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(R=tt)||D,At(t,e),tt=R):At(t,e),Ft(e),s&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!D&&(e.mode&1)!==0)for(J=e,D=e.child;D!==null;){for(q=J=D;J!==null;){switch(I=J,Q=I.child,I.tag){case 0:case 11:case 14:case 15:lr(4,I,I.return);break;case 1:gn(I,I.return);var Z=I.stateNode;if(typeof Z.componentWillUnmount=="function"){s=I,n=I.return;try{t=s,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(te){De(s,n,te)}}break;case 5:gn(I,I.return);break;case 22:if(I.memoizedState!==null){cu(q);continue}}Q!==null?(Q.return=I,J=Q):cu(q)}D=D.sibling}e:for(D=null,q=e;;){if(q.tag===5){if(D===null){D=q;try{o=q.stateNode,R?(d=o.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(m=q.stateNode,v=q.memoizedProps.style,g=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=Ul("display",g))}catch(te){De(e,e.return,te)}}}else if(q.tag===6){if(D===null)try{q.stateNode.nodeValue=R?"":q.memoizedProps}catch(te){De(e,e.return,te)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;D===q&&(D=null),q=q.return}D===q&&(D=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:At(t,e),Ft(e),s&4&&iu(e);break;case 21:break;default:At(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nu(n)){var s=n;break e}n=n.return}throw Error(i(160))}switch(s.tag){case 5:var o=s.stateNode;s.flags&32&&($n(o,""),s.flags&=-33);var d=ru(e);$o(e,d,o);break;case 3:case 4:var g=s.stateNode.containerInfo,m=ru(e);Ro(e,m,g);break;default:throw Error(i(161))}}catch(v){De(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e,t,n){J=e,lu(e)}function lu(e,t,n){for(var s=(e.mode&1)!==0;J!==null;){var o=J,d=o.child;if(o.tag===22&&s){var g=o.memoizedState!==null||ys;if(!g){var m=o.alternate,v=m!==null&&m.memoizedState!==null||tt;m=ys;var R=tt;if(ys=g,(tt=v)&&!R)for(J=o;J!==null;)g=J,v=g.child,g.tag===22&&g.memoizedState!==null?uu(o):v!==null?(v.return=g,J=v):uu(o);for(;d!==null;)J=d,lu(d),d=d.sibling;J=o,ys=m,tt=R}du(e)}else(o.subtreeFlags&8772)!==0&&d!==null?(d.return=o,J=d):du(e)}}function du(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:tt||vs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!tt)if(n===null)s.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);s.componentDidUpdate(o,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&cc(t,d,s);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cc(t,g,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var D=R.memoizedState;if(D!==null){var q=D.dehydrated;q!==null&&qn(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}tt||t.flags&512&&Lo(t)}catch(I){De(t,t.return,I)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function cu(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function uu(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(v){De(t,n,v)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var o=t.return;try{s.componentDidMount()}catch(v){De(t,o,v)}}var d=t.return;try{Lo(t)}catch(v){De(t,d,v)}break;case 5:var g=t.return;try{Lo(t)}catch(v){De(t,g,v)}}}catch(v){De(t,t.return,v)}if(t===e){J=null;break}var m=t.sibling;if(m!==null){m.return=t.return,J=m;break}J=t.return}}var tm=Math.ceil,bs=j.ReactCurrentDispatcher,To=j.ReactCurrentOwner,St=j.ReactCurrentBatchConfig,Ce=0,Ve=null,Fe=null,Ye=0,vt=0,fn=ga(0),Xe=0,dr=null,Na=0,xs=0,Po=0,cr=null,ct=null,Ao=0,mn=1/0,Zt=null,ws=!1,No=null,ba=null,ks=!1,xa=null,Ss=0,ur=0,Mo=null,Es=-1,_s=0;function it(){return(Ce&6)!==0?je():Es!==-1?Es:Es=je()}function wa(e){return(e.mode&1)===0?1:(Ce&2)!==0&&Ye!==0?Ye&-Ye:Df.transition!==null?(_s===0&&(_s=rd()),_s):(e=Re,e!==0||(e=window.event,e=e===void 0?16:gd(e.type)),e)}function Nt(e,t,n,s){if(50<ur)throw ur=0,Mo=null,Error(i(185));zn(e,n,s),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(xs|=n),Xe===4&&ka(e,Ye)),ut(e,s),n===1&&Ce===0&&(t.mode&1)===0&&(mn=je()+500,Zr&&ma()))}function ut(e,t){var n=e.callbackNode;Ig(e,t);var s=Mr(e,e===Ve?Ye:0);if(s===0)n!==null&&td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&td(n),t===1)e.tag===0?If(gu.bind(null,e)):Jd(gu.bind(null,e)),Nf(function(){(Ce&6)===0&&ma()}),n=null;else{switch(sd(s)){case 1:n=pi;break;case 4:n=ad;break;case 16:n=Tr;break;case 536870912:n=nd;break;default:n=Tr}n=wu(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(Es=-1,_s=0,(Ce&6)!==0)throw Error(i(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var s=Mr(e,e===Ve?Ye:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Cs(e,s);else{t=s;var o=Ce;Ce|=2;var d=mu();(Ve!==e||Ye!==t)&&(Zt=null,mn=je()+500,za(e,t));do try{rm();break}catch(m){fu(e,m)}while(!0);Gi(),bs.current=d,Ce=o,Fe!==null?t=0:(Ve=null,Ye=0,t=Xe)}if(t!==0){if(t===2&&(o=gi(e),o!==0&&(s=o,t=zo(e,o))),t===1)throw n=dr,za(e,0),ka(e,s),ut(e,je()),n;if(t===6)ka(e,s);else{if(o=e.current.alternate,(s&30)===0&&!am(o)&&(t=Cs(e,s),t===2&&(d=gi(e),d!==0&&(s=d,t=zo(e,d))),t===1))throw n=dr,za(e,0),ka(e,s),ut(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:Oa(e,ct,Zt);break;case 3:if(ka(e,s),(s&130023424)===s&&(t=Ao+500-je(),10<t)){if(Mr(e,0)!==0)break;if(o=e.suspendedLanes,(o&s)!==s){it(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qi(Oa.bind(null,e,ct,Zt),t);break}Oa(e,ct,Zt);break;case 4:if(ka(e,s),(s&4194240)===s)break;for(t=e.eventTimes,o=-1;0<s;){var g=31-Lt(s);d=1<<g,g=t[g],g>o&&(o=g),s&=~d}if(s=o,s=je()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*tm(s/1960))-s,10<s){e.timeoutHandle=qi(Oa.bind(null,e,ct,Zt),s);break}Oa(e,ct,Zt);break;case 5:Oa(e,ct,Zt);break;default:throw Error(i(329))}}}return ut(e,je()),e.callbackNode===n?pu.bind(null,e):null}function zo(e,t){var n=cr;return e.current.memoizedState.isDehydrated&&(za(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=ct,ct=n,t!==null&&Oo(t)),e}function Oo(e){ct===null?ct=e:ct.push.apply(ct,e)}function am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var o=n[s],d=o.getSnapshot;o=o.value;try{if(!Rt(d(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t){for(t&=~Po,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),s=1<<n;e[n]=-1,t&=~s}}function gu(e){if((Ce&6)!==0)throw Error(i(327));hn();var t=Mr(e,0);if((t&1)===0)return ut(e,je()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var s=gi(e);s!==0&&(t=s,n=zo(e,s))}if(n===1)throw n=dr,za(e,0),ka(e,t),ut(e,je()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oa(e,ct,Zt),ut(e,je()),null}function Io(e,t){var n=Ce;Ce|=1;try{return e(t)}finally{Ce=n,Ce===0&&(mn=je()+500,Zr&&ma())}}function Ma(e){xa!==null&&xa.tag===0&&(Ce&6)===0&&hn();var t=Ce;Ce|=1;var n=St.transition,s=Re;try{if(St.transition=null,Re=1,e)return e()}finally{Re=s,St.transition=n,Ce=t,(Ce&6)===0&&ma()}}function Do(){vt=fn.current,Pe(fn)}function za(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Af(n)),Fe!==null)for(n=Fe.return;n!==null;){var s=n;switch(Wi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Gr();break;case 3:un(),Pe(ot),Pe(Je),so();break;case 5:no(s);break;case 4:un();break;case 13:Pe(ze);break;case 19:Pe(ze);break;case 10:Ji(s.type._context);break;case 22:case 23:Do()}n=n.return}if(Ve=e,Fe=e=Sa(e.current,null),Ye=vt=t,Xe=0,dr=null,Po=xs=Na=0,ct=cr=null,Ta!==null){for(t=0;t<Ta.length;t++)if(n=Ta[t],s=n.interleaved,s!==null){n.interleaved=null;var o=s.next,d=n.pending;if(d!==null){var g=d.next;d.next=o,s.next=g}n.pending=s}Ta=null}return e}function fu(e,t){do{var n=Fe;try{if(Gi(),ds.current=gs,cs){for(var s=Oe.memoizedState;s!==null;){var o=s.queue;o!==null&&(o.pending=null),s=s.next}cs=!1}if(Aa=0,We=He=Oe=null,nr=!1,rr=0,To.current=null,n===null||n.return===null){Xe=1,dr=t,Fe=null;break}e:{var d=e,g=n.return,m=n,v=t;if(t=Ye,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=v,D=m,q=D.tag;if((D.mode&1)===0&&(q===0||q===11||q===15)){var I=D.alternate;I?(D.updateQueue=I.updateQueue,D.memoizedState=I.memoizedState,D.lanes=I.lanes):(D.updateQueue=null,D.memoizedState=null)}var Q=jc(g);if(Q!==null){Q.flags&=-257,qc(Q,g,m,d,t),Q.mode&1&&Dc(d,R,t),t=Q,v=R;var Z=t.updateQueue;if(Z===null){var te=new Set;te.add(v),t.updateQueue=te}else Z.add(v);break e}else{if((t&1)===0){Dc(d,R,t),jo();break e}v=Error(i(426))}}else if(Ne&&m.mode&1){var qe=jc(g);if(qe!==null){(qe.flags&65536)===0&&(qe.flags|=256),qc(qe,g,m,d,t),Ki(pn(v,m));break e}}d=v=pn(v,m),Xe!==4&&(Xe=2),cr===null?cr=[d]:cr.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var C=Oc(d,v,t);dc(d,C);break e;case 1:m=v;var b=d.type,L=d.stateNode;if((d.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(ba===null||!ba.has(L)))){d.flags|=65536,t&=-t,d.lanes|=t;var F=Ic(d,m,t);dc(d,F);break e}}d=d.return}while(d!==null)}yu(n)}catch(ae){t=ae,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function mu(){var e=bs.current;return bs.current=gs,e===null?gs:e}function jo(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Ve===null||(Na&268435455)===0&&(xs&268435455)===0||ka(Ve,Ye)}function Cs(e,t){var n=Ce;Ce|=2;var s=mu();(Ve!==e||Ye!==t)&&(Zt=null,za(e,t));do try{nm();break}catch(o){fu(e,o)}while(!0);if(Gi(),Ce=n,bs.current=s,Fe!==null)throw Error(i(261));return Ve=null,Ye=0,Xe}function nm(){for(;Fe!==null;)hu(Fe)}function rm(){for(;Fe!==null&&!Rg();)hu(Fe)}function hu(e){var t=xu(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?yu(e):Fe=t,To.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yf(n,t,vt),n!==null){Fe=n;return}}else{if(n=Gf(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Xe===0&&(Xe=5)}function Oa(e,t,n){var s=Re,o=St.transition;try{St.transition=null,Re=1,sm(e,t,n,s)}finally{St.transition=o,Re=s}return null}function sm(e,t,n,s){do hn();while(xa!==null);if((Ce&6)!==0)throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=n.lanes|n.childLanes;if(Dg(e,d),e===Ve&&(Fe=Ve=null,Ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ks||(ks=!0,wu(Tr,function(){return hn(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=St.transition,St.transition=null;var g=Re;Re=1;var m=Ce;Ce|=4,To.current=null,Zf(e,n),ou(n,e),_f(Di),Ir=!!Ii,Di=Ii=null,e.current=n,em(n),$g(),Ce=m,Re=g,St.transition=d}else e.current=n;if(ks&&(ks=!1,xa=e,Ss=o),d=e.pendingLanes,d===0&&(ba=null),Ag(n.stateNode),ut(e,je()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],s(o.value,{componentStack:o.stack,digest:o.digest});if(ws)throw ws=!1,e=No,No=null,e;return(Ss&1)!==0&&e.tag!==0&&hn(),d=e.pendingLanes,(d&1)!==0?e===Mo?ur++:(ur=0,Mo=e):ur=0,ma(),null}function hn(){if(xa!==null){var e=sd(Ss),t=St.transition,n=Re;try{if(St.transition=null,Re=16>e?16:e,xa===null)var s=!1;else{if(e=xa,xa=null,Ss=0,(Ce&6)!==0)throw Error(i(331));var o=Ce;for(Ce|=4,J=e.current;J!==null;){var d=J,g=d.child;if((J.flags&16)!==0){var m=d.deletions;if(m!==null){for(var v=0;v<m.length;v++){var R=m[v];for(J=R;J!==null;){var D=J;switch(D.tag){case 0:case 11:case 15:lr(8,D,d)}var q=D.child;if(q!==null)q.return=D,J=q;else for(;J!==null;){D=J;var I=D.sibling,Q=D.return;if(au(D),D===R){J=null;break}if(I!==null){I.return=Q,J=I;break}J=Q}}}var Z=d.alternate;if(Z!==null){var te=Z.child;if(te!==null){Z.child=null;do{var qe=te.sibling;te.sibling=null,te=qe}while(te!==null)}}J=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,J=g;else e:for(;J!==null;){if(d=J,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:lr(9,d,d.return)}var C=d.sibling;if(C!==null){C.return=d.return,J=C;break e}J=d.return}}var b=e.current;for(J=b;J!==null;){g=J;var L=g.child;if((g.subtreeFlags&2064)!==0&&L!==null)L.return=g,J=L;else e:for(g=b;J!==null;){if(m=J,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:vs(9,m)}}catch(ae){De(m,m.return,ae)}if(m===g){J=null;break e}var F=m.sibling;if(F!==null){F.return=m.return,J=F;break e}J=m.return}}if(Ce=o,ma(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Pr,e)}catch{}s=!0}return s}finally{Re=n,St.transition=t}}return!1}function vu(e,t,n){t=pn(n,t),t=Oc(e,t,1),e=ya(e,t,1),t=it(),e!==null&&(zn(e,1,t),ut(e,t))}function De(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=pn(n,e),e=Ic(t,e,1),t=ya(t,e,1),e=it(),t!==null&&(zn(t,1,e),ut(t,e));break}}t=t.return}}function im(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ye&n)===n&&(Xe===4||Xe===3&&(Ye&130023424)===Ye&&500>je()-Ao?za(e,0):Po|=n),ut(e,t)}function bu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Nr,Nr<<=1,(Nr&130023424)===0&&(Nr=4194304)));var n=it();e=Yt(e,t),e!==null&&(zn(e,t,n),ut(e,n))}function om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bu(e,n)}function lm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),bu(e,n)}var xu;xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)dt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return dt=!1,Kf(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Ne&&(t.flags&1048576)!==0&&Zd(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;hs(e,t),e=t.pendingProps;var o=nn(t,Je.current);cn(t,n),o=lo(null,t,s,e,o,n);var d=co();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(s)?(d=!0,Jr(t)):d=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,to(t),o.updater=fs,t.stateNode=o,o._reactInternals=t,ho(t,s,e,n),t=xo(null,t,s,!0,d,n)):(t.tag=0,Ne&&d&&Xi(t),st(null,t,o,n),t=t.child),t;case 16:s=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,o=s._init,s=o(s._payload),t.type=s,o=t.tag=cm(s),e=Tt(s,e),o){case 0:t=bo(null,t,s,e,n);break e;case 1:t=Wc(null,t,s,e,n);break e;case 11:t=Fc(null,t,s,e,n);break e;case 14:t=Uc(null,t,s,Tt(s.type,e),n);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Tt(s,o),bo(e,t,s,o,n);case 1:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Tt(s,o),Wc(e,t,s,o,n);case 3:e:{if(Vc(t),e===null)throw Error(i(387));s=t.pendingProps,d=t.memoizedState,o=d.element,lc(e,t),os(t,s,null,n);var g=t.memoizedState;if(s=g.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){o=pn(Error(i(423)),t),t=Qc(e,t,s,n,o);break e}else if(s!==o){o=pn(Error(i(424)),t),t=Qc(e,t,s,n,o);break e}else for(yt=pa(t.stateNode.containerInfo.firstChild),ht=t,Ne=!0,$t=null,n=ic(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),s===o){t=Jt(e,t,n);break e}st(e,t,s,n)}t=t.child}return t;case 5:return uc(t),e===null&&Qi(t),s=t.type,o=t.pendingProps,d=e!==null?e.memoizedProps:null,g=o.children,ji(s,o)?g=null:d!==null&&ji(s,d)&&(t.flags|=32),Xc(e,t),st(e,t,g,n),t.child;case 6:return e===null&&Qi(t),null;case 13:return Kc(e,t,n);case 4:return ao(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ln(t,null,s,n):st(e,t,s,n),t.child;case 11:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Tt(s,o),Fc(e,t,s,o,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,o=t.pendingProps,d=t.memoizedProps,g=o.value,$e(rs,s._currentValue),s._currentValue=g,d!==null)if(Rt(d.value,g)){if(d.children===o.children&&!ot.current){t=Jt(e,t,n);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){g=d.child;for(var v=m.firstContext;v!==null;){if(v.context===s){if(d.tag===1){v=Gt(-1,n&-n),v.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var D=R.pending;D===null?v.next=v:(v.next=D.next,D.next=v),R.pending=v}}d.lanes|=n,v=d.alternate,v!==null&&(v.lanes|=n),Zi(d.return,n,t),m.lanes|=n;break}v=v.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(i(341));g.lanes|=n,m=g.alternate,m!==null&&(m.lanes|=n),Zi(g,n,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}st(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,s=t.pendingProps.children,cn(t,n),o=wt(o),s=s(o),t.flags|=1,st(e,t,s,n),t.child;case 14:return s=t.type,o=Tt(s,t.pendingProps),o=Tt(s.type,o),Uc(e,t,s,o,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Tt(s,o),hs(e,t),t.tag=1,lt(s)?(e=!0,Jr(t)):e=!1,cn(t,n),Mc(t,s,o),ho(t,s,o,n),xo(null,t,s,!0,e,n);case 19:return Gc(e,t,n);case 22:return Hc(e,t,n)}throw Error(i(156,t.tag))};function wu(e,t){return ed(e,t)}function dm(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,s){return new dm(e,t,n,s)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===re)return 14}return 2}function Sa(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ls(e,t,n,s,o,d){var g=2;if(s=e,typeof e=="function")qo(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ce:return Ia(n.children,o,d,t);case U:g=8,o|=8;break;case X:return e=Et(12,n,t,o|2),e.elementType=X,e.lanes=d,e;case pe:return e=Et(13,n,t,o),e.elementType=pe,e.lanes=d,e;case fe:return e=Et(19,n,t,o),e.elementType=fe,e.lanes=d,e;case me:return Rs(n,o,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:g=10;break e;case se:g=9;break e;case ne:g=11;break e;case re:g=14;break e;case xe:g=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Et(g,n,t,o),t.elementType=e,t.type=s,t.lanes=d,t}function Ia(e,t,n,s){return e=Et(7,e,s,t),e.lanes=n,e}function Rs(e,t,n,s){return e=Et(22,e,s,t),e.elementType=me,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function Uo(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function um(e,t,n,s,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=s,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bo(e,t,n,s,o,d,g,m,v){return e=new um(e,t,n,m,v),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Et(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(d),e}function pm(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return fa;e=e._reactInternals;e:{if(_a(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(lt(n))return Yd(e,n,t)}return t}function Su(e,t,n,s,o,d,g,m,v){return e=Bo(n,s,!0,e,o,d,g,m,v),e.context=ku(null),n=e.current,s=it(),o=wa(n),d=Gt(s,o),d.callback=t??null,ya(n,d,o),e.current.lanes=o,zn(e,o,s),ut(e,s),e}function $s(e,t,n,s){var o=t.current,d=it(),g=wa(o);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(d,g),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=ya(o,t,g),e!==null&&(Nt(e,o,g,d),is(e,o,g)),g}function Ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function gm(){return null}var _u=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Ps.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));$s(e,t,null,null)},Ps.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ma(function(){$s(null,e,null,null)}),t[Wt]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var t=ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&ud(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function fm(e,t,n,s,o){if(o){if(typeof s=="function"){var d=s;s=function(){var R=Ts(g);d.call(R)}}var g=Su(t,s,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=g,e[Wt]=g.current,Kn(e.nodeType===8?e.parentNode:e),Ma(),g}for(;o=e.lastChild;)e.removeChild(o);if(typeof s=="function"){var m=s;s=function(){var R=Ts(v);m.call(R)}}var v=Bo(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=v,e[Wt]=v.current,Kn(e.nodeType===8?e.parentNode:e),Ma(function(){$s(t,v,n,s)}),v}function Ns(e,t,n,s,o){var d=n._reactRootContainer;if(d){var g=d;if(typeof o=="function"){var m=o;o=function(){var v=Ts(g);m.call(v)}}$s(t,g,e,o)}else g=fm(n,t,e,o,s);return Ts(g)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(mi(t,n|1),ut(t,je()),(Ce&6)===0&&(mn=je()+500,ma()))}break;case 13:Ma(function(){var s=Yt(e,1);if(s!==null){var o=it();Nt(s,e,1,o)}}),Ho(e,1)}},hi=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=it();Nt(t,e,134217728,n)}Ho(e,134217728)}},od=function(e){if(e.tag===13){var t=wa(e),n=Yt(e,t);if(n!==null){var s=it();Nt(n,e,t,s)}Ho(e,t)}},ld=function(){return Re},dd=function(e,t){var n=Re;try{return Re=e,t()}finally{Re=n}},li=function(e,t,n){switch(t){case"input":if(Be(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var o=Yr(s);if(!o)throw Error(i(90));rt(s),Be(s,o)}}}break;case"textarea":Dl(e,n);break;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}},Vl=Io,Ql=Ma;var mm={usingClientEntryPoint:!1,Events:[Jn,tn,Yr,Xl,Wl,Io]},pr={findFiberByHostInstance:Ca,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hm={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jl(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Pr=Ms.inject(hm),It=Ms}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm,pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(t))throw Error(i(200));return pm(e,t,null,n)},pt.createRoot=function(e,t){if(!Wo(e))throw Error(i(299));var n=!1,s="",o=_u;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bo(e,1,!1,null,null,n,!1,s,o),e[Wt]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Xo(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Jl(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Ma(e)},pt.hydrate=function(e,t,n){if(!As(t))throw Error(i(200));return Ns(null,e,t,!0,n)},pt.hydrateRoot=function(e,t,n){if(!Wo(e))throw Error(i(405));var s=n!=null&&n.hydratedSources||null,o=!1,d="",g=_u;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=Su(t,null,e,1,n??null,o,!1,d,g),e[Wt]=t.current,Kn(e),s)for(e=0;e<s.length;e++)n=s[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ps(t)},pt.render=function(e,t,n){if(!As(t))throw Error(i(200));return Ns(null,e,t,!1,n)},pt.unmountComponentAtNode=function(e){if(!As(e))throw Error(i(40));return e._reactRootContainer?(Ma(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},pt.unstable_batchedUpdates=Io,pt.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!As(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ns(e,t,n,!1,s)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Mu;function Em(){if(Mu)return Ko.exports;Mu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ko.exports=Sm(),Ko.exports}var zu;function _m(){if(zu)return zs;zu=1;var a=Em();return zs.createRoot=a.createRoot,zs.hydrateRoot=a.hydrateRoot,zs}var Cm=_m();const Lm=xp(Cm);function wp(a,r){return function(){return a.apply(r,arguments)}}const{toString:Rm}=Object.prototype,{getPrototypeOf:kn}=Object,{iterator:kr,toStringTag:kp}=Symbol,Xs=(({hasOwnProperty:a})=>(r,i)=>a.call(r,i))(Object.prototype),xr=(a,r)=>{let i=a;const l=[];for(;i!=null&&i!==Object.prototype;){if(l.indexOf(i)!==-1)return!1;if(l.push(i),Xs(i,r))return!0;i=kn(i)}return!1},$m=(a,r)=>a!=null&&xr(a,r)?a[r]:void 0,El=(a=>r=>{const i=Rm.call(r);return a[i]||(a[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Mt=a=>(a=a.toLowerCase(),r=>El(r)===a),Ys=a=>r=>typeof r===a,{isArray:Ba}=Array,Sn=Ys("undefined");function Cn(a){return a!==null&&!Sn(a)&&a.constructor!==null&&!Sn(a.constructor)&&gt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Sp=Mt("ArrayBuffer");function Tm(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&Sp(a.buffer),r}const Pm=Ys("string"),gt=Ys("function"),Ep=Ys("number"),Ln=a=>a!==null&&typeof a=="object",Am=a=>a===!0||a===!1,Ds=a=>{if(!Ln(a))return!1;const r=kn(a);return(r===null||r===Object.prototype||kn(r)===null)&&!xr(a,kp)&&!xr(a,kr)},Nm=a=>{if(!Ln(a)||Cn(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Mm=Mt("Date"),zm=Mt("File"),Om=a=>!!(a&&typeof a.uri<"u"),Im=a=>a&&typeof a.getParts<"u",Dm=Mt("Blob"),jm=Mt("FileList"),qm=a=>Ln(a)&&gt(a.pipe);function Fm(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ou=Fm(),Iu=typeof Ou.FormData<"u"?Ou.FormData:void 0,Um=a=>{if(!a)return!1;if(Iu&&a instanceof Iu)return!0;const r=kn(a);if(!r||r===Object.prototype||!gt(a.append))return!1;const i=El(a);return i==="formdata"||i==="object"&&gt(a.toString)&&a.toString()==="[object FormData]"},Bm=Mt("URLSearchParams"),[Hm,Xm,Wm,Vm]=["ReadableStream","Request","Response","Headers"].map(Mt),Qm=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sr(a,r,{allOwnKeys:i=!1}={}){if(a===null||typeof a>"u")return;let l,c;if(typeof a!="object"&&(a=[a]),Ba(a))for(l=0,c=a.length;l<c;l++)r.call(null,a[l],l,a);else{if(Cn(a))return;const u=i?Object.getOwnPropertyNames(a):Object.keys(a),p=u.length;let f;for(l=0;l<p;l++)f=u[l],r.call(null,a[f],f,a)}}function _p(a,r){if(Cn(a))return null;r=r.toLowerCase();const i=Object.keys(a);let l=i.length,c;for(;l-- >0;)if(c=i[l],r===c.toLowerCase())return c;return null}const Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Cp=a=>!Sn(a)&&a!==Da;function ll(...a){const{caseless:r,skipUndefined:i}=Cp(this)&&this||{},l={},c=(u,p)=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const f=r&&typeof p=="string"&&_p(l,p)||p,h=Xs(l,f)?l[f]:void 0;Ds(h)&&Ds(u)?l[f]=ll(h,u):Ds(u)?l[f]=ll({},u):Ba(u)?l[f]=u.slice():(!i||!Sn(u))&&(l[f]=u)};for(let u=0,p=a.length;u<p;u++){const f=a[u];if(!f||Cn(f)||(Sr(f,c),typeof f!="object"||Ba(f)))continue;const h=Object.getOwnPropertySymbols(f);for(let y=0;y<h.length;y++){const x=h[y];ih.call(f,x)&&c(f[x],x)}}return l}const Km=(a,r,i,{allOwnKeys:l}={})=>(Sr(r,(c,u)=>{i&&gt(c)?Object.defineProperty(a,u,{__proto__:null,value:wp(c,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,u,{__proto__:null,value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),a),Ym=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Gm=(a,r,i,l)=>{a.prototype=Object.create(r.prototype,l),Object.defineProperty(a.prototype,"constructor",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{__proto__:null,value:r.prototype}),i&&Object.assign(a.prototype,i)},Jm=(a,r,i,l)=>{let c,u,p;const f={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),u=c.length;u-- >0;)p=c[u],(!l||l(p,a,r))&&!f[p]&&(r[p]=a[p],f[p]=!0);a=i!==!1&&kn(a)}while(a&&(!i||i(a,r))&&a!==Object.prototype);return r},Zm=(a,r,i)=>{a=String(a),(i===void 0||i>a.length)&&(i=a.length),i-=r.length;const l=a.indexOf(r,i);return l!==-1&&l===i},eh=a=>{if(!a)return null;if(Ba(a))return a;let r=a.length;if(!Ep(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=a[r];return i},th=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&kn(Uint8Array)),ah=(a,r)=>{const l=(a&&a[kr]).call(a);let c;for(;(c=l.next())&&!c.done;){const u=c.value;r.call(a,u[0],u[1])}},nh=(a,r)=>{let i;const l=[];for(;(i=a.exec(r))!==null;)l.push(i);return l},rh=Mt("HTMLFormElement"),sh=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,c){return l.toUpperCase()+c}),{propertyIsEnumerable:ih}=Object.prototype,oh=Mt("RegExp"),Lp=(a,r)=>{const i=Object.getOwnPropertyDescriptors(a),l={};Sr(i,(c,u)=>{let p;(p=r(c,u,a))!==!1&&(l[u]=p||c)}),Object.defineProperties(a,l)},lh=a=>{Lp(a,(r,i)=>{if(gt(a)&&["arguments","caller","callee"].includes(i))return!1;const l=a[i];if(gt(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},dh=(a,r)=>{const i={},l=c=>{c.forEach(u=>{i[u]=!0})};return Ba(a)?l(a):l(String(a).split(r)),i},ch=()=>{},uh=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function ph(a){return!!(a&&gt(a.append)&&a[kp]==="FormData"&&a[kr])}const gh=a=>{const r=new WeakSet,i=l=>{if(Ln(l)){if(r.has(l))return;if(Cn(l))return l;if(!("toJSON"in l)){r.add(l);const c=Ba(l)?[]:{};return Sr(l,(u,p)=>{const f=i(u);!Sn(f)&&(c[p]=f)}),r.delete(l),c}}return l};return i(a)},fh=Mt("AsyncFunction"),mh=a=>a&&(Ln(a)||gt(a))&&gt(a.then)&&gt(a.catch),Rp=((a,r)=>a?setImmediate:r?((i,l)=>(Da.addEventListener("message",({source:c,data:u})=>{c===Da&&u===i&&l.length&&l.shift()()},!1),c=>{l.push(c),Da.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",gt(Da.postMessage)),hh=typeof queueMicrotask<"u"?queueMicrotask.bind(Da):typeof process<"u"&&process.nextTick||Rp,$p=a=>a!=null&&gt(a[kr]),yh=a=>a!=null&&xr(a,kr)&&$p(a),k={isArray:Ba,isArrayBuffer:Sp,isBuffer:Cn,isFormData:Um,isArrayBufferView:Tm,isString:Pm,isNumber:Ep,isBoolean:Am,isObject:Ln,isPlainObject:Ds,isEmptyObject:Nm,isReadableStream:Hm,isRequest:Xm,isResponse:Wm,isHeaders:Vm,isUndefined:Sn,isDate:Mm,isFile:zm,isReactNativeBlob:Om,isReactNative:Im,isBlob:Dm,isRegExp:oh,isFunction:gt,isStream:qm,isURLSearchParams:Bm,isTypedArray:th,isFileList:jm,forEach:Sr,merge:ll,extend:Km,trim:Qm,stripBOM:Ym,inherits:Gm,toFlatObject:Jm,kindOf:El,kindOfTest:Mt,endsWith:Zm,toArray:eh,forEachEntry:ah,matchAll:nh,isHTMLForm:rh,hasOwnProperty:Xs,hasOwnProp:Xs,hasOwnInPrototypeChain:xr,getSafeProp:$m,reduceDescriptors:Lp,freezeMethods:lh,toObjectSet:dh,toCamelCase:sh,noop:ch,toFiniteNumber:uh,findKey:_p,global:Da,isContextDefined:Cp,isSpecCompliantForm:ph,toJSONObject:gh,isAsyncFn:fh,isThenable:mh,setImmediate:Rp,asap:hh,isIterable:$p,isSafeIterable:yh},vh=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bh=a=>{const r={};let i,l,c;return a&&a.split(`
`).forEach(function(p){c=p.indexOf(":"),i=p.substring(0,c).trim().toLowerCase(),l=p.substring(c+1).trim(),!(!i||r[i]&&vh[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r};function xh(a){let r=0,i=a.length;for(;r<i;){const l=a.charCodeAt(r);if(l!==9&&l!==32)break;r+=1}for(;i>r;){const l=a.charCodeAt(i-1);if(l!==9&&l!==32)break;i-=1}return r===0&&i===a.length?a:a.slice(r,i)}const wh=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),kh=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function _l(a,r){return k.isArray(a)?a.map(i=>_l(i,r)):xh(String(a).replace(r,""))}const Sh=a=>_l(a,wh),Eh=a=>_l(a,kh);function Tp(a){const r=Object.create(null);return k.forEach(a.toJSON(),(i,l)=>{r[l]=Eh(i)}),r}const Du=Symbol("internals");function fr(a){return a&&String(a).trim().toLowerCase()}function js(a){return a===!1||a==null?a:k.isArray(a)?a.map(js):Sh(String(a))}function _h(a){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(a);)r[l[1]]=l[2];return r}const Ch=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Jo(a,r,i,l,c){if(k.isFunction(l))return l.call(this,r,i);if(c&&(r=i),!!k.isString(r)){if(k.isString(l))return r.indexOf(l)!==-1;if(k.isRegExp(l))return l.test(r)}}function Lh(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function Rh(a,r){const i=k.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(a,l+i,{__proto__:null,value:function(c,u,p){return this[l].call(this,r,c,u,p)},configurable:!0})})}let nt=class{constructor(r){r&&this.set(r)}set(r,i,l){const c=this;function u(f,h,y){const x=fr(h);if(!x)return;const _=k.findKey(c,x);(!_||c[_]===void 0||y===!0||y===void 0&&c[_]!==!1)&&(c[_||h]=js(f))}const p=(f,h)=>k.forEach(f,(y,x)=>u(y,x,h));if(k.isPlainObject(r)||r instanceof this.constructor)p(r,i);else if(k.isString(r)&&(r=r.trim())&&!Ch(r))p(bh(r),i);else if(k.isObject(r)&&k.isSafeIterable(r)){let f=Object.create(null),h,y;for(const x of r){if(!k.isArray(x))throw new TypeError("Object iterator must return a key-value pair");y=x[0],k.hasOwnProp(f,y)?(h=f[y],f[y]=k.isArray(h)?[...h,x[1]]:[h,x[1]]):f[y]=x[1]}p(f,i)}else r!=null&&u(i,r,l);return this}get(r,i){if(r=fr(r),r){const l=k.findKey(this,r);if(l){const c=this[l];if(!i)return c;if(i===!0)return _h(c);if(k.isFunction(i))return i.call(this,c,l);if(k.isRegExp(i))return i.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=fr(r),r){const l=k.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||Jo(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let c=!1;function u(p){if(p=fr(p),p){const f=k.findKey(l,p);f&&(!i||Jo(l,l[f],f,i))&&(delete l[f],c=!0)}}return k.isArray(r)?r.forEach(u):u(r),c}clear(r){const i=Object.keys(this);let l=i.length,c=!1;for(;l--;){const u=i[l];(!r||Jo(this,this[u],u,r,!0))&&(delete this[u],c=!0)}return c}normalize(r){const i=this,l={};return k.forEach(this,(c,u)=>{const p=k.findKey(l,u);if(p){i[p]=js(c),delete i[u];return}const f=r?Lh(u):String(u).trim();f!==u&&delete i[u],i[f]=js(c),l[f]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return k.forEach(this,(l,c)=>{l!=null&&l!==!1&&(i[c]=r&&k.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(c=>l.set(c)),l}static accessor(r){const l=(this[Du]=this[Du]={accessors:{}}).accessors,c=this.prototype;function u(p){const f=fr(p);l[f]||(Rh(c,p),l[f]=!0)}return k.isArray(r)?r.forEach(u):u(r),this}};nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(nt.prototype,({value:a},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(l){this[i]=l}}});k.freezeMethods(nt);const $h="[REDACTED ****]";function Th(a){if(k.hasOwnProp(a,"toJSON"))return!0;let r=Object.getPrototypeOf(a);for(;r&&r!==Object.prototype;){if(k.hasOwnProp(r,"toJSON"))return!0;r=Object.getPrototypeOf(r)}return!1}function Ph(a,r){const i=new Set(r.map(u=>String(u).toLowerCase())),l=[],c=u=>{if(u===null||typeof u!="object"||k.isBuffer(u))return u;if(l.indexOf(u)!==-1)return;u instanceof nt&&(u=u.toJSON()),l.push(u);let p;if(k.isArray(u))p=[],u.forEach((f,h)=>{const y=c(f);k.isUndefined(y)||(p[h]=y)});else{if(!k.isPlainObject(u)&&Th(u))return l.pop(),u;p=Object.create(null);for(const[f,h]of Object.entries(u)){const y=i.has(f.toLowerCase())?$h:c(h);k.isUndefined(y)||(p[f]=y)}}return l.pop(),p};return c(a)}let W=class Pp extends Error{static from(r,i,l,c,u,p){const f=new Pp(r.message,i||r.code,l,c,u);return Object.defineProperty(f,"cause",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),f.name=r.name,r.status!=null&&f.status==null&&(f.status=r.status),p&&Object.assign(f,p),f}constructor(r,i,l,c,u){super(r),Object.defineProperty(this,"message",{__proto__:null,value:r,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),l&&(this.config=l),c&&(this.request=c),u&&(this.response=u,this.status=u.status)}toJSON(){const r=this.config,i=r&&k.hasOwnProp(r,"redact")?r.redact:void 0,l=k.isArray(i)&&i.length>0?Ph(r,i):k.toJSONObject(r);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};W.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";W.ERR_BAD_OPTION="ERR_BAD_OPTION";W.ECONNABORTED="ECONNABORTED";W.ETIMEDOUT="ETIMEDOUT";W.ECONNREFUSED="ECONNREFUSED";W.ERR_NETWORK="ERR_NETWORK";W.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";W.ERR_DEPRECATED="ERR_DEPRECATED";W.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";W.ERR_BAD_REQUEST="ERR_BAD_REQUEST";W.ERR_CANCELED="ERR_CANCELED";W.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";W.ERR_INVALID_URL="ERR_INVALID_URL";W.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Ah=null,Ap=100;function dl(a){return k.isPlainObject(a)||k.isArray(a)}function Np(a){return k.endsWith(a,"[]")?a.slice(0,-2):a}function Zo(a,r,i){return a?a.concat(r).map(function(c,u){return c=Np(c),!i&&u?"["+c+"]":c}).join(i?".":""):r}function Nh(a){return k.isArray(a)&&!a.some(dl)}const Mh=k.toFlatObject(k,{},null,function(r){return/^is[A-Z]/.test(r)});function Gs(a,r,i){if(!k.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,i=k.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,N){return!k.isUndefined(N[P])});const l=i.metaTokens,c=i.visitor||M,u=i.dots,p=i.indexes,f=i.Blob||typeof Blob<"u"&&Blob,h=i.maxDepth===void 0?Ap:i.maxDepth,y=f&&k.isSpecCompliantForm(r),x=[];if(!k.isFunction(c))throw new TypeError("visitor must be a function");function _(E){if(E===null)return"";if(k.isDate(E))return E.toISOString();if(k.isBoolean(E))return E.toString();if(!y&&k.isBlob(E))throw new W("Blob is not supported. Use a Buffer instead.");if(k.isArrayBuffer(E)||k.isTypedArray(E)){if(y&&typeof f=="function")return new f([E]);if(typeof Buffer<"u")return Buffer.from(E);throw new W("Blob is not supported. Use a Buffer instead.",W.ERR_NOT_SUPPORT)}return E}function $(E){if(E>h)throw new W("Object is too deeply nested ("+E+" levels). Max depth: "+h,W.ERR_FORM_DATA_DEPTH_EXCEEDED)}function T(E,P){if(h===1/0)return JSON.stringify(E);const N=[];return JSON.stringify(E,function(V,K){if(!k.isObject(K))return K;for(;N.length&&N[N.length-1]!==this;)N.pop();return N.push(K),$(P+N.length-1),K})}function M(E,P,N){let j=E;if(k.isReactNative(r)&&k.isReactNativeBlob(E))return r.append(Zo(N,P,u),_(E)),!1;if(E&&!N&&typeof E=="object"){if(k.endsWith(P,"{}"))P=l?P:P.slice(0,-2),E=T(E,1);else if(k.isArray(E)&&Nh(E)||(k.isFileList(E)||k.endsWith(P,"[]"))&&(j=k.toArray(E)))return P=Np(P),j.forEach(function(K,ce){!(k.isUndefined(K)||K===null)&&r.append(p===!0?Zo([P],ce,u):p===null?P:P+"[]",_(K))}),!1}return dl(E)?!0:(r.append(Zo(N,P,u),_(E)),!1)}const A=Object.assign(Mh,{defaultVisitor:M,convertValue:_,isVisitable:dl});function S(E,P,N=0){if(!k.isUndefined(E)){if($(N),x.indexOf(E)!==-1)throw new Error("Circular reference detected in "+P.join("."));x.push(E),k.forEach(E,function(V,K){(!(k.isUndefined(V)||V===null)&&c.call(r,V,k.isString(K)?K.trim():K,P,A))===!0&&S(V,P?P.concat(K):[K],N+1)}),x.pop()}}if(!k.isObject(a))throw new TypeError("data must be an object");return S(a),r}function ju(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(a).replace(/[!'()~]|%20/g,function(l){return r[l]})}function Cl(a,r){this._pairs=[],a&&Gs(a,this,r)}const Mp=Cl.prototype;Mp.append=function(r,i){this._pairs.push([r,i])};Mp.toString=function(r){const i=r?l=>r.call(this,l,ju):ju;return this._pairs.map(function(c){return i(c[0])+"="+i(c[1])},"").join("&")};function zh(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function zp(a,r,i){if(!r)return a;a=a||"";const l=k.isFunction(i)?{serialize:i}:i,c=k.getSafeProp(l,"encode")||zh,u=k.getSafeProp(l,"serialize");let p;if(u?p=u(r,l):p=k.isURLSearchParams(r)?r.toString():new Cl(r,l).toString(c),p){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+p}return a}class qu{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){k.forEach(this.handlers,function(l){l!==null&&r(l)})}}const Ll={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Oh=typeof URLSearchParams<"u"?URLSearchParams:Cl,Ih=typeof FormData<"u"?FormData:null,Dh=typeof Blob<"u"?Blob:null,jh={isBrowser:!0,classes:{URLSearchParams:Oh,FormData:Ih,Blob:Dh},protocols:["http","https","file","blob","url","data"]},Rl=typeof window<"u"&&typeof document<"u",cl=typeof navigator=="object"&&navigator||void 0,qh=Rl&&(!cl||["ReactNative","NativeScript","NS"].indexOf(cl.product)<0),Fh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Uh=Rl&&window.location.href||"http://localhost",Bh=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rl,hasStandardBrowserEnv:qh,hasStandardBrowserWebWorkerEnv:Fh,navigator:cl,origin:Uh},Symbol.toStringTag,{value:"Module"})),Ge={...Bh,...jh};function Hh(a,r){return Gs(a,new Ge.classes.URLSearchParams,{visitor:function(i,l,c,u){return Ge.isNode&&k.isBuffer(i)?(this.append(l,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...r})}const Fu=Ap;function Op(a){if(a>Fu)throw new W("FormData field is too deeply nested ("+a+" levels). Max depth: "+Fu,W.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Xh(a){const r=[],i=/\w+|\[(\w*)]/g;let l;for(;(l=i.exec(a))!==null;)Op(r.length),r.push(l[0]==="[]"?"":l[1]||l[0]);return r}function Wh(a){const r={},i=Object.keys(a);let l;const c=i.length;let u;for(l=0;l<c;l++)u=i[l],r[u]=a[u];return r}function Ip(a){function r(i,l,c,u){Op(u);let p=i[u++];if(p==="__proto__")return!0;const f=Number.isFinite(+p),h=u>=i.length;return p=!p&&k.isArray(c)?c.length:p,h?(k.hasOwnProp(c,p)?c[p]=k.isArray(c[p])?c[p].concat(l):[c[p],l]:c[p]=l,!f):((!k.hasOwnProp(c,p)||!k.isObject(c[p]))&&(c[p]=[]),r(i,l,c[p],u)&&k.isArray(c[p])&&(c[p]=Wh(c[p])),!f)}if(k.isFormData(a)&&k.isFunction(a.entries)){const i={};return k.forEachEntry(a,(l,c)=>{r(Xh(l),c,i,0)}),i}return null}const yn=(a,r)=>a!=null&&k.hasOwnProp(a,r)?a[r]:void 0;function Vh(a,r,i){if(k.isString(a))try{return(r||JSON.parse)(a),k.trim(a)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(a)}const Er={transitional:Ll,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",c=l.indexOf("application/json")>-1,u=k.isObject(r);if(u&&k.isHTMLForm(r)&&(r=new FormData(r)),k.isFormData(r))return c?JSON.stringify(Ip(r)):r;if(k.isArrayBuffer(r)||k.isBuffer(r)||k.isStream(r)||k.isFile(r)||k.isBlob(r)||k.isReadableStream(r))return r;if(k.isArrayBufferView(r))return r.buffer;if(k.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let f;if(u){const h=yn(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return Hh(r,h).toString();if((f=k.isFileList(r))||l.indexOf("multipart/form-data")>-1){const y=yn(this,"env"),x=y&&y.FormData;return Gs(f?{"files[]":r}:r,x&&new x,h)}}return u||c?(i.setContentType("application/json",!1),Vh(r)):r}],transformResponse:[function(r){const i=yn(this,"transitional")||Er.transitional,l=i&&i.forcedJSONParsing,c=yn(this,"responseType"),u=c==="json";if(k.isResponse(r)||k.isReadableStream(r))return r;if(r&&k.isString(r)&&(l&&!c||u)){const f=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(r,yn(this,"parseReviver"))}catch(h){if(f)throw h.name==="SyntaxError"?W.from(h,W.ERR_BAD_RESPONSE,this,null,yn(this,"response")):h}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],a=>{Er.headers[a]={}});function el(a,r){const i=this||Er,l=r||i,c=nt.from(l.headers);let u=l.data;return k.forEach(a,function(f){u=f.call(i,u,c.normalize(),r?r.status:void 0)}),c.normalize(),u}function Dp(a){return!!(a&&a.__CANCEL__)}let _r=class extends W{constructor(r,i,l){super(r??"canceled",W.ERR_CANCELED,i,l),this.name="CanceledError",this.__CANCEL__=!0}};function jp(a,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?a(i):r(new W("Request failed with status code "+i.status,i.status>=400&&i.status<500?W.ERR_BAD_REQUEST:W.ERR_BAD_RESPONSE,i.config,i.request,i))}function Qh(a){const r=/^([-+\w]{1,25}):(?:\/\/)?/.exec(a);return r&&r[1]||""}function Kh(a,r){a=a||10;const i=new Array(a),l=new Array(a);let c=0,u=0,p;return r=r!==void 0?r:1e3,function(h){const y=Date.now(),x=l[u];p||(p=y),i[c]=h,l[c]=y;let _=u,$=0;for(;_!==c;)$+=i[_++],_=_%a;if(c=(c+1)%a,c===u&&(u=(u+1)%a),y-p<r)return;const T=x&&y-x;return T?Math.round($*1e3/T):void 0}}function Yh(a,r){let i=0,l=1e3/r,c,u;const p=(y,x=Date.now())=>{i=x,c=null,u&&(clearTimeout(u),u=null),a(...y)};return[(...y)=>{const x=Date.now(),_=x-i;_>=l?p(y,x):(c=y,u||(u=setTimeout(()=>{u=null,p(c)},l-_)))},()=>c&&p(c)]}const Ws=(a,r,i=3)=>{let l=0;const c=Kh(50,250);return Yh(u=>{if(!u||typeof u.loaded!="number")return;const p=u.loaded,f=u.lengthComputable?u.total:void 0,h=f!=null?Math.min(p,f):p,y=Math.max(0,h-l),x=c(y);l=Math.max(l,h);const _={loaded:h,total:f,progress:f?h/f:void 0,bytes:y,rate:x||void 0,estimated:x&&f?(f-h)/x:void 0,event:u,lengthComputable:f!=null,[r?"download":"upload"]:!0};a(_)},i)},Uu=(a,r)=>{const i=a!=null;return[l=>r[0]({lengthComputable:i,total:a,loaded:l}),r[1]]},Bu=a=>(...r)=>k.asap(()=>a(...r)),Gh=Ge.hasStandardBrowserEnv?((a,r)=>i=>(i=new URL(i,Ge.origin),a.protocol===i.protocol&&a.host===i.host&&(r||a.port===i.port)))(new URL(Ge.origin),Ge.navigator&&/(msie|trident)/i.test(Ge.navigator.userAgent)):()=>!0,Jh=Ge.hasStandardBrowserEnv?{write(a,r,i,l,c,u,p){if(typeof document>"u")return;const f=[`${a}=${encodeURIComponent(r)}`];k.isNumber(i)&&f.push(`expires=${new Date(i).toUTCString()}`),k.isString(l)&&f.push(`path=${l}`),k.isString(c)&&f.push(`domain=${c}`),u===!0&&f.push("secure"),k.isString(p)&&f.push(`SameSite=${p}`),document.cookie=f.join("; ")},read(a){if(typeof document>"u")return null;const r=document.cookie.split(";");for(let i=0;i<r.length;i++){const l=r[i].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===a)try{return decodeURIComponent(l.slice(c+1))}catch{return l.slice(c+1)}}return null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Zh(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function ey(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}const ty=/^https?:(?!\/\/)/i,ay=/[\t\n\r]/g;function ny(a){let r=0;for(;r<a.length&&a.charCodeAt(r)<=32;)r++;return a.slice(r)}function ry(a){return ny(a).replace(ay,"")}function Hu(a,r){if(typeof a=="string"&&ty.test(ry(a)))throw new W('Invalid URL: missing "//" after protocol',W.ERR_INVALID_URL,r)}function qp(a,r,i,l){Hu(r,l);let c=!Zh(r);return a&&(c||i===!1)?(Hu(a,l),ey(a,r)):r}const Xu=a=>a instanceof nt?{...a}:a;function Ha(a,r){a=a||{},r=r||{};const i=Object.create(null);Object.defineProperty(i,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(x,_,$,T){return k.isPlainObject(x)&&k.isPlainObject(_)?k.merge.call({caseless:T},x,_):k.isPlainObject(_)?k.merge({},_):k.isArray(_)?_.slice():_}function c(x,_,$,T){if(k.isUndefined(_)){if(!k.isUndefined(x))return l(void 0,x,$,T)}else return l(x,_,$,T)}function u(x,_){if(!k.isUndefined(_))return l(void 0,_)}function p(x,_){if(k.isUndefined(_)){if(!k.isUndefined(x))return l(void 0,x)}else return l(void 0,_)}function f(x){const _=k.hasOwnProp(r,"transitional")?r.transitional:void 0;if(!k.isUndefined(_))if(k.isPlainObject(_)){if(k.hasOwnProp(_,x))return _[x]}else return;const $=k.hasOwnProp(a,"transitional")?a.transitional:void 0;if(k.isPlainObject($)&&k.hasOwnProp($,x))return $[x]}function h(x,_,$){if(k.hasOwnProp(r,$))return l(x,_);if(k.hasOwnProp(a,$))return l(void 0,x)}const y={url:u,method:u,data:u,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,allowedSocketPaths:p,responseEncoding:p,validateStatus:h,headers:(x,_,$)=>c(Xu(x),Xu(_),$,!0)};return k.forEach(Object.keys({...a,...r}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const $=k.hasOwnProp(y,_)?y[_]:c,T=k.hasOwnProp(a,_)?a[_]:void 0,M=k.hasOwnProp(r,_)?r[_]:void 0,A=$(T,M,_);k.isUndefined(A)&&$!==h||(i[_]=A)}),k.hasOwnProp(r,"validateStatus")&&k.isUndefined(r.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(k.hasOwnProp(a,"validateStatus")?i.validateStatus=l(void 0,a.validateStatus):delete i.validateStatus),i}const sy=["content-type","content-length"];function iy(a,r,i){if(i!=="content-only"){a.set(r);return}Object.entries(r||{}).forEach(([l,c])=>{sy.includes(l.toLowerCase())&&a.set(l,c)})}const oy=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(r,i)=>String.fromCharCode(parseInt(i,16)));function Fp(a){const r=Ha({},a),i=$=>k.hasOwnProp(r,$)?r[$]:void 0,l=i("data");let c=i("withXSRFToken");const u=i("xsrfHeaderName"),p=i("xsrfCookieName");let f=i("headers");const h=i("auth"),y=i("baseURL"),x=i("allowAbsoluteUrls"),_=i("url");if(r.headers=f=nt.from(f),r.url=zp(qp(y,_,x,r),i("params"),i("paramsSerializer")),h){const $=k.getSafeProp(h,"username")||"",T=k.getSafeProp(h,"password")||"";try{f.set("Authorization","Basic "+btoa($+":"+(T?oy(T):"")))}catch(M){throw W.from(M,W.ERR_BAD_OPTION_VALUE,a)}}if(k.isFormData(l)&&(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv||k.isReactNative(l)?f.setContentType(void 0):k.isFunction(l.getHeaders)&&iy(f,l.getHeaders(),i("formDataHeaderPolicy"))),Ge.hasStandardBrowserEnv&&(k.isFunction(c)&&(c=c(r)),c===!0||c==null&&Gh(r.url))){const T=u&&p&&Jh.read(p);T&&f.set(u,T)}return r}const ly=typeof XMLHttpRequest<"u",dy=ly&&function(a){return new Promise(function(i,l){const c=Fp(a);let u=c.data;const p=nt.from(c.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:y}=c,x,_,$,T,M;function A(){T&&T(),M&&M(),c.cancelToken&&c.cancelToken.unsubscribe(x),c.signal&&c.signal.removeEventListener("abort",x)}let S=new XMLHttpRequest;S.open(c.method.toUpperCase(),c.url,!0),S.timeout=c.timeout;function E(){if(!S)return;const N=nt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),V={data:!f||f==="text"||f==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:N,config:a,request:S};jp(function(ce){i(ce),A()},function(ce){l(ce),A()},V),S=null}"onloadend"in S?S.onloadend=E:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(E)},S.onabort=function(){S&&(l(new W("Request aborted",W.ECONNABORTED,a,S)),A(),S=null)},S.onerror=function(j){const V=j&&j.message?j.message:"Network Error",K=new W(V,W.ERR_NETWORK,a,S);K.event=j||null,l(K),A(),S=null},S.ontimeout=function(){let j=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const V=c.transitional||Ll;c.timeoutErrorMessage&&(j=c.timeoutErrorMessage),l(new W(j,V.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,a,S)),A(),S=null},u===void 0&&p.setContentType(null),"setRequestHeader"in S&&k.forEach(Tp(p),function(j,V){S.setRequestHeader(V,j)}),k.isUndefined(c.withCredentials)||(S.withCredentials=!!c.withCredentials),f&&f!=="json"&&(S.responseType=c.responseType),y&&([$,M]=Ws(y,!0),S.addEventListener("progress",$)),h&&S.upload&&([_,T]=Ws(h),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",T)),(c.cancelToken||c.signal)&&(x=N=>{S&&(l(!N||N.type?new _r(null,a,S):N),S.abort(),A(),S=null)},c.cancelToken&&c.cancelToken.subscribe(x),c.signal&&(c.signal.aborted?x():c.signal.addEventListener("abort",x)));const P=Qh(c.url);if(P&&!Ge.protocols.includes(P)){l(new W("Unsupported protocol "+P+":",W.ERR_BAD_REQUEST,a)),A();return}S.send(u||null)})},cy=(a,r)=>{if(a=a?a.filter(Boolean):[],!r&&!a.length)return;const i=new AbortController;let l=!1;const c=function(h){if(!l){l=!0,p();const y=h instanceof Error?h:this.reason;i.abort(y instanceof W?y:new _r(y instanceof Error?y.message:y))}};let u=r&&setTimeout(()=>{u=null,c(new W(`timeout of ${r}ms exceeded`,W.ETIMEDOUT))},r);const p=()=>{a&&(u&&clearTimeout(u),u=null,a.forEach(h=>{h.unsubscribe?h.unsubscribe(c):h.removeEventListener("abort",c)}),a=null)};a.forEach(h=>h.addEventListener("abort",c,{once:!0}));const{signal:f}=i;return f.unsubscribe=()=>k.asap(p),f},uy=function*(a,r){let i=a.byteLength;if(i<r){yield a;return}let l=0,c;for(;l<i;)c=l+r,yield a.slice(l,c),l=c},py=async function*(a,r){for await(const i of gy(a))yield*uy(i,r)},gy=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Wu=(a,r,i,l)=>{const c=py(a,r);let u=0,p,f=h=>{p||(p=!0,l&&l(h))};return new ReadableStream({async pull(h){try{const{done:y,value:x}=await c.next();if(y){f(),h.close();return}let _=x.byteLength;if(i){let $=u+=_;i($)}h.enqueue(new Uint8Array(x))}catch(y){throw f(y),y}},cancel(h){return f(h),c.return()}},{highWaterMark:2})},Vs=a=>a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102,fy=(a,r,i)=>r+2<i&&Vs(a.charCodeAt(r+1))&&Vs(a.charCodeAt(r+2));function my(a){if(!a||typeof a!="string"||!a.startsWith("data:"))return 0;const r=a.indexOf(",");if(r<0)return 0;const i=a.slice(5,r),l=a.slice(r+1);if(/;base64/i.test(i)){let p=l.length;const f=l.length;for(let T=0;T<f;T++)if(l.charCodeAt(T)===37&&T+2<f){const M=l.charCodeAt(T+1),A=l.charCodeAt(T+2);Vs(M)&&Vs(A)&&(p-=2,T+=2)}let h=0,y=f-1;const x=T=>T>=2&&l.charCodeAt(T-2)===37&&l.charCodeAt(T-1)===51&&(l.charCodeAt(T)===68||l.charCodeAt(T)===100);y>=0&&(l.charCodeAt(y)===61?(h++,y--):x(y)&&(h++,y-=3)),h===1&&y>=0&&(l.charCodeAt(y)===61||x(y))&&h++;const $=Math.floor(p/4)*3-(h||0);return $>0?$:0}let u=0;for(let p=0,f=l.length;p<f;p++){const h=l.charCodeAt(p);if(h===37&&fy(l,p,f))u+=1,p+=2;else if(h<128)u+=1;else if(h<2048)u+=2;else if(h>=55296&&h<=56319&&p+1<f){const y=l.charCodeAt(p+1);y>=56320&&y<=57343?(u+=4,p++):u+=3}else u+=3}return u}const $l="1.18.1",Vu=64*1024,{isFunction:Os}=k,hy=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(r,i)=>String.fromCharCode(parseInt(i,16))),Qu=a=>{if(!k.isString(a))return a;try{return decodeURIComponent(a)}catch{return a}},Ku=(a,...r)=>{try{return!!a(...r)}catch{return!1}},yy=a=>{const r=a.indexOf("://");let i=a;return r!==-1&&(i=i.slice(r+3)),i.includes("@")||i.includes(":")},vy=a=>{const r=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:i,TextEncoder:l}=r;a=k.merge.call({skipUndefined:!0},{Request:r.Request,Response:r.Response},a);const{fetch:c,Request:u,Response:p}=a,f=c?Os(c):typeof fetch=="function",h=Os(u),y=Os(p);if(!f)return!1;const x=f&&Os(i),_=f&&(typeof l=="function"?(E=>P=>E.encode(P))(new l):async E=>new Uint8Array(await new u(E).arrayBuffer())),$=h&&x&&Ku(()=>{let E=!1;const P=new u(Ge.origin,{body:new i,method:"POST",get duplex(){return E=!0,"half"}}),N=P.headers.has("Content-Type");return P.body!=null&&P.body.cancel(),E&&!N}),T=y&&x&&Ku(()=>k.isReadableStream(new p("").body)),M={stream:T&&(E=>E.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!M[E]&&(M[E]=(P,N)=>{let j=P&&P[E];if(j)return j.call(P);throw new W(`Response type '${E}' is not supported`,W.ERR_NOT_SUPPORT,N)})});const A=async E=>{if(E==null)return 0;if(k.isBlob(E))return E.size;if(k.isSpecCompliantForm(E))return(await new u(Ge.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(k.isArrayBufferView(E)||k.isArrayBuffer(E))return E.byteLength;if(k.isURLSearchParams(E)&&(E=E+""),k.isString(E))return(await _(E)).byteLength},S=async(E,P)=>{const N=k.toFiniteNumber(E.getContentLength());return N??A(P)};return async E=>{let{url:P,method:N,data:j,signal:V,cancelToken:K,timeout:ce,onDownloadProgress:U,onUploadProgress:X,responseType:Y,headers:se,withCredentials:ne="same-origin",fetchOptions:pe,maxContentLength:fe,maxBodyLength:re}=Fp(E);const xe=k.isNumber(fe)&&fe>-1,me=k.isNumber(re)&&re>-1,B=G=>k.hasOwnProp(E,G)?E[G]:void 0;let ee=c||fetch;Y=Y?(Y+"").toLowerCase():"text";let H=cy([V,K&&K.toAbortSignal()],ce),w=null;const z=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let de,ge=null;const ve=()=>new W("Request body larger than maxBodyLength limit",W.ERR_BAD_REQUEST,E,w);try{let G;const he=B("auth");if(he){const ie=k.getSafeProp(he,"username")||"",Be=k.getSafeProp(he,"password")||"";G={username:ie,password:Be}}if(yy(P)){const ie=new URL(P,Ge.origin);if(!G&&(ie.username||ie.password)){const Be=Qu(ie.username),_t=Qu(ie.password);G={username:Be,password:_t}}(ie.username||ie.password)&&(ie.username="",ie.password="",P=ie.href)}if(G&&(se.delete("authorization"),se.set("Authorization","Basic "+btoa(hy((G.username||"")+":"+(G.password||""))))),xe&&typeof P=="string"&&P.startsWith("data:")&&my(P)>fe)throw new W("maxContentLength size of "+fe+" exceeded",W.ERR_BAD_RESPONSE,E,w);if(me&&N!=="get"&&N!=="head"){const ie=await A(j);if(typeof ie=="number"&&isFinite(ie)&&(de=ie,ie>re))throw ve()}const ke=me&&(k.isReadableStream(j)||k.isStream(j)),Se=(ie,Be,_t)=>Wu(ie,Vu,Ct=>{if(me&&Ct>re)throw ge=ve();Be&&Be(Ct)},_t);if($&&N!=="get"&&N!=="head"&&(X||ke)){if(de=de??await S(se,j),de!==0||ke){let ie=new u(P,{method:"POST",body:j,duplex:"half"}),Be;if(k.isFormData(j)&&(Be=ie.headers.get("content-type"))&&se.setContentType(Be),ie.body){const[_t,Ct]=X&&Uu(de,Ws(Bu(X)))||[];j=Se(ie.body,_t,Ct)}}}else if(ke&&!h&&x&&N!=="get"&&N!=="head")j=Se(j);else if(ke&&h&&!$&&N!=="get"&&N!=="head")throw new W("Stream request bodies are not supported by the current fetch implementation",W.ERR_NOT_SUPPORT,E,w);k.isString(ne)||(ne=ne?"include":"omit");const Ie=h&&"credentials"in u.prototype;if(k.isFormData(j)){const ie=se.getContentType();ie&&/^multipart\/form-data/i.test(ie)&&!/boundary=/i.test(ie)&&se.delete("content-type")}se.set("User-Agent","axios/"+$l,!1);const zt={...pe,signal:H,method:N.toUpperCase(),headers:Tp(se.normalize()),body:j,duplex:"half",credentials:Ie?ne:void 0};w=h&&new u(P,zt);let rt=await(h?ee(w,pe):ee(P,zt));const Ot=nt.from(rt.headers);if(xe){const ie=k.toFiniteNumber(Ot.getContentLength());if(ie!=null&&ie>fe)throw new W("maxContentLength size of "+fe+" exceeded",W.ERR_BAD_RESPONSE,E,w)}const we=T&&(Y==="stream"||Y==="response");if(T&&rt.body&&(U||xe||we&&z)){const ie={};["status","statusText","headers"].forEach(Xt=>{ie[Xt]=rt[Xt]});const Be=k.toFiniteNumber(Ot.getContentLength()),[_t,Ct]=U&&Uu(Be,Ws(Bu(U),!0))||[];let ra=0;const sa=Xt=>{if(xe&&(ra=Xt,ra>fe))throw new W("maxContentLength size of "+fe+" exceeded",W.ERR_BAD_RESPONSE,E,w);_t&&_t(Xt)};rt=new p(Wu(rt.body,Vu,sa,()=>{Ct&&Ct(),z&&z()}),ie)}Y=Y||"text";let _e=await M[k.findKey(M,Y)||"text"](rt,E);if(xe&&!T&&!we){let ie;if(_e!=null&&(typeof _e.byteLength=="number"?ie=_e.byteLength:typeof _e.size=="number"?ie=_e.size:typeof _e=="string"&&(ie=typeof l=="function"?new l().encode(_e).byteLength:_e.length)),typeof ie=="number"&&ie>fe)throw new W("maxContentLength size of "+fe+" exceeded",W.ERR_BAD_RESPONSE,E,w)}return!we&&z&&z(),await new Promise((ie,Be)=>{jp(ie,Be,{data:_e,headers:nt.from(rt.headers),status:rt.status,statusText:rt.statusText,config:E,request:w})})}catch(G){if(z&&z(),H&&H.aborted&&H.reason instanceof W){const he=H.reason;throw he.config=E,w&&(he.request=w),G!==he&&Object.defineProperty(he,"cause",{__proto__:null,value:G,writable:!0,enumerable:!1,configurable:!0}),he}if(ge)throw w&&!ge.request&&(ge.request=w),ge;if(G instanceof W)throw w&&!G.request&&(G.request=w),G;if(G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)){const he=new W("Network Error",W.ERR_NETWORK,E,w,G&&G.response);throw Object.defineProperty(he,"cause",{__proto__:null,value:G.cause||G,writable:!0,enumerable:!1,configurable:!0}),he}throw W.from(G,G&&G.code,E,w,G&&G.response)}}},by=new Map,Up=a=>{let r=a&&a.env||{};const{fetch:i,Request:l,Response:c}=r,u=[l,c,i];let p=u.length,f=p,h,y,x=by;for(;f--;)h=u[f],y=x.get(h),y===void 0&&x.set(h,y=f?new Map:vy(r)),x=y;return y};Up();const Tl={http:Ah,xhr:dy,fetch:{get:Up}};k.forEach(Tl,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{__proto__:null,value:r})}catch{}Object.defineProperty(a,"adapterName",{__proto__:null,value:r})}});const Yu=a=>`- ${a}`,xy=a=>k.isFunction(a)||a===null||a===!1;function wy(a,r){a=k.isArray(a)?a:[a];const{length:i}=a;let l,c;const u={};for(let p=0;p<i;p++){l=a[p];let f;if(c=l,!xy(l)&&(c=Tl[(f=String(l)).toLowerCase()],c===void 0))throw new W(`Unknown adapter '${f}'`);if(c&&(k.isFunction(c)||(c=c.get(r))))break;u[f||"#"+p]=c}if(!c){const p=Object.entries(u).map(([h,y])=>`adapter ${h} `+(y===!1?"is not supported by the environment":"is not available in the build"));let f=i?p.length>1?`since :
`+p.map(Yu).join(`
`):" "+Yu(p[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+f,W.ERR_NOT_SUPPORT)}return c}const Bp={getAdapter:wy,adapters:Tl};function tl(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new _r(null,a)}function Gu(a){return tl(a),a.headers=nt.from(a.headers),a.data=el.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Bp.getAdapter(a.adapter||Er.adapter,a)(a).then(function(l){tl(a),a.response=l;try{l.data=el.call(a,a.transformResponse,l)}finally{delete a.response}return l.headers=nt.from(l.headers),l},function(l){if(!Dp(l)&&(tl(a),l&&l.response)){a.response=l.response;try{l.response.data=el.call(a,a.transformResponse,l.response)}finally{delete a.response}l.response.headers=nt.from(l.response.headers)}return Promise.reject(l)})}const Js={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{Js[a]=function(l){return typeof l===a||"a"+(r<1?"n ":" ")+a}});const Ju={};Js.transitional=function(r,i,l){function c(u,p){return"[Axios v"+$l+"] Transitional option '"+u+"'"+p+(l?". "+l:"")}return(u,p,f)=>{if(r===!1)throw new W(c(p," has been removed"+(i?" in "+i:"")),W.ERR_DEPRECATED);return i&&!Ju[p]&&(Ju[p]=!0,console.warn(c(p," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(u,p,f):!0}};Js.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function ky(a,r,i){if(typeof a!="object"||a===null)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const l=Object.keys(a);let c=l.length;for(;c-- >0;){const u=l[c],p=Object.prototype.hasOwnProperty.call(r,u)?r[u]:void 0;if(p){const f=a[u],h=f===void 0||p(f,u,a);if(h!==!0)throw new W("option "+u+" must be "+h,W.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new W("Unknown option "+u,W.ERR_BAD_OPTION)}}const qs={assertOptions:ky,validators:Js},at=qs.validators;let qa=class{constructor(r){this.defaults=r||{},this.interceptors={request:new qu,response:new qu}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const u=(()=>{if(!c.stack)return"";const p=c.stack.indexOf(`
`);return p===-1?"":c.stack.slice(p+1)})();try{if(!l.stack)l.stack=u;else if(u){const p=u.indexOf(`
`),f=p===-1?-1:u.indexOf(`
`,p+1),h=f===-1?"":u.slice(f+1);String(l.stack).endsWith(h)||(l.stack+=`
`+u)}}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=Ha(this.defaults,i);const{transitional:l,paramsSerializer:c,headers:u}=i;l!==void 0&&qs.assertOptions(l,{silentJSONParsing:at.transitional(at.boolean),forcedJSONParsing:at.transitional(at.boolean),clarifyTimeoutError:at.transitional(at.boolean),legacyInterceptorReqResOrdering:at.transitional(at.boolean),advertiseZstdAcceptEncoding:at.transitional(at.boolean),validateStatusUndefinedResolves:at.transitional(at.boolean)},!1),c!=null&&(k.isFunction(c)?i.paramsSerializer={serialize:c}:qs.assertOptions(c,{encode:at.function,serialize:at.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),qs.assertOptions(i,{baseUrl:at.spelling("baseURL"),withXsrfToken:at.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let p=u&&k.merge(u.common,u[i.method]);u&&k.forEach(["delete","get","head","post","put","patch","query","common"],M=>{delete u[M]}),i.headers=nt.concat(p,u);const f=[];let h=!0;this.interceptors.request.forEach(function(A){if(typeof A.runWhen=="function"&&A.runWhen(i)===!1)return;h=h&&A.synchronous;const S=i.transitional||Ll;S&&S.legacyInterceptorReqResOrdering?f.unshift(A.fulfilled,A.rejected):f.push(A.fulfilled,A.rejected)});const y=[];this.interceptors.response.forEach(function(A){y.push(A.fulfilled,A.rejected)});let x,_=0,$;if(!h){const M=[Gu.bind(this),void 0];for(M.unshift(...f),M.push(...y),$=M.length,x=Promise.resolve(i);_<$;)x=x.then(M[_++],M[_++]);return x}$=f.length;let T=i;for(;_<$;){const M=f[_++],A=f[_++];try{T=M(T)}catch(S){A.call(this,S);break}}try{x=Gu.call(this,T)}catch(M){return Promise.reject(M)}for(_=0,$=y.length;_<$;)x=x.then(y[_++],y[_++]);return x}getUri(r){r=Ha(this.defaults,r);const i=qp(r.baseURL,r.url,r.allowAbsoluteUrls,r);return zp(i,r.params,r.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(r){qa.prototype[r]=function(i,l){return this.request(Ha(l||{},{method:r,url:i,data:l&&k.hasOwnProp(l,"data")?l.data:void 0}))}});k.forEach(["post","put","patch","query"],function(r){function i(l){return function(u,p,f){return this.request(Ha(f||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:p}))}}qa.prototype[r]=i(),r!=="query"&&(qa.prototype[r+"Form"]=i(!0))});let Sy=class Hp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const l=this;this.promise.then(c=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](c);l._listeners=null}),this.promise.then=c=>{let u;const p=new Promise(f=>{l.subscribe(f),u=f}).then(c);return p.cancel=function(){l.unsubscribe(u)},p},r(function(u,p,f){l.reason||(l.reason=new _r(u,p,f),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Hp(function(c){r=c}),cancel:r}}};function Ey(a){return function(i){return a.apply(null,i)}}function _y(a){return k.isObject(a)&&a.isAxiosError===!0}const ul={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ul).forEach(([a,r])=>{ul[r]=a});function Xp(a){const r=new qa(a),i=wp(qa.prototype.request,r);return k.extend(i,qa.prototype,r,{allOwnKeys:!0}),k.extend(i,r,null,{allOwnKeys:!0}),i.create=function(c){return Xp(Ha(a,c))},i}const Ae=Xp(Er);Ae.Axios=qa;Ae.CanceledError=_r;Ae.CancelToken=Sy;Ae.isCancel=Dp;Ae.VERSION=$l;Ae.toFormData=Gs;Ae.AxiosError=W;Ae.Cancel=Ae.CanceledError;Ae.all=function(r){return Promise.all(r)};Ae.spread=Ey;Ae.isAxiosError=_y;Ae.mergeConfig=Ha;Ae.AxiosHeaders=nt;Ae.formToJSON=a=>Ip(k.isHTMLForm(a)?new FormData(a):a);Ae.getAdapter=Bp.getAdapter;Ae.HttpStatusCode=ul;Ae.default=Ae;const{Axios:vb,AxiosError:bb,CanceledError:xb,isCancel:wb,CancelToken:kb,VERSION:Sb,all:Eb,Cancel:_b,isAxiosError:Cb,spread:Lb,toFormData:Rb,AxiosHeaders:$b,HttpStatusCode:Tb,formToJSON:Pb,getAdapter:Ab,mergeConfig:Nb,create:Mb}=Ae,Xa="/api/analyze",bn="/api/chat",mr="/api/records",wr="/api/hair-analysis";function al(a){return(a==null?void 0:a.trim().replace(/\/+$/,""))||""}function Pl(){var l;const a=typeof window<"u"?al((l=window.__DIAOLEME_CONFIG__)==null?void 0:l.apiBaseUrl):"",r=al(void 0),i=al(void 0);return a?Zu(a):r?Zu(r):i||Xa}function Zu(a){return a.endsWith(Xa)||a.endsWith(wr)?a:`${a}${Xa}`}function Cy(a){return a.endsWith(bn)?a:a.endsWith(Xa)?a.slice(0,-Xa.length)+bn:a.endsWith(wr)?a.slice(0,-wr.length)+bn:`${a}${bn}`}function Ly(a){return a.endsWith(mr)?a:a.endsWith(Xa)?a.slice(0,-Xa.length)+mr:a.endsWith(wr)?a.slice(0,-wr.length)+mr:a.endsWith(bn)?a.slice(0,-bn.length)+mr:`${a}${mr}`}const ep={url:Pl(),timeout:9e4},tp={url:Cy(Pl()),timeout:45e3},ap={url:Ly(Pl()),timeout:2e4},pl=40;function Ry(a=new Date){const r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),i=r.getDay(),l=i===0?-6:1-i,c=new Date(r);c.setDate(r.getDate()+l);const u=new Date(c);u.setDate(c.getDate()+6);const p=f=>{const h=f.getFullYear(),y=String(f.getMonth()+1).padStart(2,"0"),x=String(f.getDate()).padStart(2,"0");return`${h}-${y}-${x}`};return{start:p(c),end:p(u)}}function $y(a,r=pl){const{start:i,end:l}=Ry(),c=Math.min(Math.max(0,r),pl);return a.filter(u=>typeof u.date=="string"&&u.date>=i&&u.date<=l).slice().sort((u,p)=>u.date<p.date?1:u.date>p.date?-1:0).slice(0,c).map(u=>{const p={date:u.date,title:u.title,score:u.score,summary:u.summary};return u.score_delta!=null&&(p.score_delta=u.score_delta),u.daily_task&&(p.daily_task=u.daily_task),Array.isArray(u.tags)&&u.tags.length&&(p.tags=u.tags.slice(0,4)),p})}async function Ty(a,r){var i;try{const l=a.filter(f=>f.role==="user"&&f.content.trim()).slice(-8),c=l[l.length-1];if(!c)return{reply:"先随便说一句想聊的内容就好，我在这儿陪你轻松记录。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"EMPTY_MESSAGE"};const u=Array.isArray(r==null?void 0:r.reportContext)?r.reportContext.slice(0,pl):[],p=await Ae.post(tp.url,{messages:l,message:c.content,report_context:u},{timeout:tp.timeout});return np(p.data)}catch(l){return Ae.isAxiosError(l)&&((i=l.response)!=null&&i.data)?np(l.response.data):(console.warn("[model] 聊天接口不可达，返回本地客服兜底。",l),{reply:"我现在暂时连不上后端 AI，但可以先陪你记录：今天先完成一次轻量 Scan，再根据结果选择一个小任务就好。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"CHAT_BACKEND_UNREACHABLE"})}}async function Py(a=20){var r;try{const i=await Ae.get(ap.url,{params:{limit:a},timeout:ap.timeout}),c=(Array.isArray((r=i.data)==null?void 0:r.records)?i.data.records:[]).map(u=>Ay(u)).filter(u=>!!u);return c.map((u,p)=>{if(u.score_delta!=null)return u;const f=c[p+1];return f?{...u,score_delta:u.score-f.score,prev_title:f.title}:u})}catch(i){return console.warn("[model] 历史接口不可达，保留本地记录。",i),[]}}function Ay(a){if(!a||typeof a!="object")return null;const r=a.result&&typeof a.result=="object"?a.result:{},i=typeof a.fun_score=="number"?a.fun_score:typeof a.score=="number"?a.score:typeof r.score=="number"?r.score:typeof r.fun_score=="number"?r.fun_score:null;if(typeof i!="number")return null;const c=(typeof a.created_at=="string"?a.created_at:"").slice(0,10)||new Date().toISOString().slice(0,10),u=typeof a.record_id=="string"?a.record_id:null,p=a.compare&&typeof a.compare=="object"?a.compare:null,f=a.growth&&typeof a.growth=="object"?a.growth:r.growthDelta&&typeof r.growthDelta=="object"?r.growthDelta:{};let h=typeof(p==null?void 0:p.score_delta)=="number"?p.score_delta:null;const y=typeof(p==null?void 0:p.prev_title)=="string"?p.prev_title:null,x=gl({...a,result:{...r,score:i,title:a.title||r.title,source:r.source||a.ai_source,source_label:r.source_label},record_id:u,record_status:a.record_status,fallbackCode:a.fallbackCode??a.fallback_code,ai_source:a.ai_source,success:a.success});return{id:u||`remote_${c}_${i}`,date:c,score:x.score,title:x.title,summary:x.summary,roast:x.roast,encouragement:x.encouragement,tags:x.tags,daily_task:x.daily_task,disclaimer:x.disclaimer,source:x.source,source_label:x.source_label,fallback_code:x.fallback_code,record_status:x.record_status,record_id:x.record_id,count:x.count,thickness:x.thickness,suggestions:x.suggestions,score_delta:h,prev_title:y,exp_added:typeof f.exp_added=="number"?f.exp_added:void 0}}function np(a){const r=Yp(a==null?void 0:a.source,a==null?void 0:a.ai_source,a==null?void 0:a.success);return{reply:ta(a==null?void 0:a.reply,"我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。"),source:r,source_label:ta(a==null?void 0:a.source_label,Nl(r)),fallback_code:fl((a==null?void 0:a.fallback_code)??(a==null?void 0:a.fallbackCode))}}const Wp="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",Vp=8*1024*1024;async function Ny(a){Al(a);const r=Kp(a);if(r.type==="image/jpeg"&&r.size<=1.5*1024*1024)return Is(r);try{const i=await createImageBitmap(r),c=Math.min(1,1600/Math.max(i.width,i.height)),u=Math.max(1,Math.round(i.width*c)),p=Math.max(1,Math.round(i.height*c)),f=document.createElement("canvas");f.width=u,f.height=p;const h=f.getContext("2d");if(!h)return i.close(),Is(r);h.drawImage(i,0,0,u,p),i.close();const y=await new Promise(x=>f.toBlob(x,"image/jpeg",.85));return y?new File([y],`diaoleme-album-${Date.now()}.jpg`,{type:"image/jpeg",lastModified:Date.now()}):Is(r)}catch(i){return console.warn("[model] 图片规范化失败，回退原文件上传。",i),Is(r)}}async function My(a,r=zy()){var l;Al(a);const i=r==="auto"?await Ny(a):Kp(a);if(r==="mock-fail")throw await rp(900),new Error("mock_fail");if(r==="mock-slow")return await rp(4500),ml(i,"mock");if(r==="mock-success")return ml(i,"mock");try{const c=new FormData;c.append("image",i,i.name||`diaoleme-album-${Date.now()}.jpg`);const u=await Ae.post(ep.url,c,{timeout:ep.timeout});return gl(u.data)}catch(c){return Ae.isAxiosError(c)&&((l=c.response)!=null&&l.data)&&typeof c.response.data=="object"?(console.warn("[model] 分析接口返回非 2xx，使用响应体（非本地静默兜底）。",{status:c.response.status,name:i.name,type:i.type,size:i.size}),gl(c.response.data)):(console.warn("[model] 后端分析代理不可达，返回明确的本地 fallback。",{err:c,name:i.name,type:i.type,size:i.size,originalName:a.name,originalType:a.type,originalSize:a.size}),Dy(i))}}function zy(){const a=typeof window<"u"?new URLSearchParams(window.location.search):null,r=a==null?void 0:a.get("mock");return r==="success"?"mock-success":r==="fail"?"mock-fail":r==="slow"?"mock-slow":"auto"}function Al(a){if(!a)throw new Error("empty_file");if(!(a.type||Qp(a.name)).startsWith("image/"))throw new Error("not_image");if(a.size<=0)throw new Error("empty_file");if(a.size>Vp)throw new Error("file_too_large")}function Qp(a){const r=a.toLowerCase();return r.endsWith(".jpg")||r.endsWith(".jpeg")?"image/jpeg":r.endsWith(".png")?"image/png":r.endsWith(".webp")?"image/webp":r.endsWith(".gif")?"image/gif":r.endsWith(".heic")||r.endsWith(".heif")?"image/heic":""}function Kp(a){if(a.type)return a;const r=Qp(a.name);return r?new File([a],a.name||`diaoleme-album-${Date.now()}.jpg`,{type:r,lastModified:a.lastModified}):a}function Is(a){const r=/^[\x20-\x7E]+$/.test(a.name||"")&&/\.jpe?g$/i.test(a.name);if(a.type==="image/jpeg"&&r)return a;const i=a.type||"image/jpeg",l=i==="image/png"?"png":i==="image/webp"?"webp":"jpg";return new File([a],`diaoleme-album-${Date.now()}.${l}`,{type:i,lastModified:a.lastModified||Date.now()})}function gl(a){const r=a!=null&&a.result&&typeof a.result=="object"?a.result:a&&typeof a=="object"?a:{},i=Yp(r.source,a==null?void 0:a.ai_source,a==null?void 0:a.success);return Oy(r,i,{fallbackCode:fl((a==null?void 0:a.fallbackCode)??(a==null?void 0:a.fallback_code)),recordStatus:ta(a==null?void 0:a.record_status,i==="api"?"ai_completed":`${i}_result`),recordId:fl(a==null?void 0:a.record_id)})}function Oy(a,r=a.source||"api",i={}){const l=typeof a.score=="number"?Math.max(0,Math.min(100,Math.round(a.score))):66,c=Array.isArray(a.suggestions)&&a.suggestions.length>0?a.suggestions.slice(0,5).map(String):[a.daily_task||"今晚给自己留 30 分钟放松时间"],u=Array.isArray(a.tags)&&a.tags.length>0?a.tags.slice(0,4).map(String):Iy(l);return{score:l,title:ta(a.title,l>=70?"发丝巡逻队长":l>=45?"头毛观察员":"发量守护实习生"),summary:ta(a.summary,l>=70?"今天的头毛队形挺稳，适合继续轻松记录。":"今天有一点小波动，但已经被你认真捕捉到了。"),roast:ta(a.roast,l>=70?"发丝们排队下班，还挺讲秩序。":"头发像开了早会，讨论得稍微热闹了一点。"),encouragement:ta(a.encouragement,"别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。"),tags:u,daily_task:ta(a.daily_task,c[0]),disclaimer:ta(a.disclaimer,Wp),source:r,source_label:Nl(r,a.source_label),fallback_code:i.fallbackCode??null,record_status:i.recordStatus||`${r}_result`,record_id:i.recordId??null,count:a.count==="少量"||a.count==="偏多"?a.count:"中等",thickness:a.thickness==="粗硬"||a.thickness==="细软"?a.thickness:"正常",suggestions:c}}function ta(a,r){return typeof a=="string"&&a.trim()?a.trim():r}function fl(a){return typeof a=="string"&&a.trim()?a.trim():null}function Yp(a,r,i){return a==="api"||a==="mock"||a==="fallback"?a:i===!1||r==="fallback"?"fallback":r==="mock"?"mock":"api"}function Iy(a){return a>=75?["队形稳定","心态在线","今日好梳"]:a>=50?["轻微波动","继续观察","早点睡派"]:["需要抱抱","从容记录","温柔养成"]}function Nl(a,r){return r||(a==="api"?"CC club OpenAI compatible AI 分析结果":a==="fallback"?"AI 兜底结果":"Demo mock 结果")}function ml(a,r="mock"){const i=a!=null&&a.name?`已读取「${a.name.slice(0,18)}」`:"已读取今天的照片";return new Promise(l=>setTimeout(()=>{l({score:72,title:"发际线守护者",summary:`${i}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,roast:"头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。",encouragement:"不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。",tags:["今日好梳","轻松观察","早睡加分"],daily_task:"今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。",disclaimer:Wp,source:r,source_label:Nl(r),fallback_code:null,record_status:"frontend_demo_mock",record_id:null,count:"中等",thickness:"正常",suggestions:["今晚提前 30 分钟进入休息模式","洗头时水温尽量温和","睡前做 2 分钟放松呼吸"]})},1200))}async function Dy(a){return{...await ml(a,"fallback"),title:"本地兜底记录",summary:"后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。",disclaimer:"当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。",source_label:"本地 Demo fallback（非真实 AI）",fallback_code:"BACKEND_UNREACHABLE",record_status:"frontend_local_fallback"}}function rp(a){return new Promise(r=>setTimeout(r,a))}const Fa=[{id:"none",name:"素颜",emoji:"🌱",cost:0,description:"最真实的自己"},{id:"short",name:"清爽短发",emoji:"✂️",cost:0,description:"简单利落"},{id:"medium",name:"自然中分",emoji:"💇",cost:30,description:"邻家风格"},{id:"long",name:"飘逸长发",emoji:"👸",cost:80,description:"需要坚持打卡"},{id:"curly",name:"羊毛卷",emoji:"🌀",cost:120,description:"俏皮可爱"},{id:"bun",name:"丸子头",emoji:"🎀",cost:200,description:"终极成就"}],sp=a=>{let r;const i=new Set,l=(y,x)=>{const _=typeof y=="function"?y(r):y;if(!Object.is(_,r)){const $=r;r=x??(typeof _!="object"||_===null)?_:Object.assign({},r,_),i.forEach(T=>T(r,$))}},c=()=>r,f={setState:l,getState:c,getInitialState:()=>h,subscribe:y=>(i.add(y),()=>i.delete(y))},h=r=a(l,c,f);return f},jy=(a=>a?sp(a):sp),qy=a=>a;function Fy(a,r=qy){const i=yr.useSyncExternalStore(a.subscribe,yr.useCallback(()=>r(a.getState()),[a,r]),yr.useCallback(()=>r(a.getInitialState()),[a,r]));return yr.useDebugValue(i),i}const Uy=a=>{const r=jy(a),i=l=>Fy(r,l);return Object.assign(i,r),i},By=(a=>Uy);function Gp(a,r){let i;try{i=a()}catch{return}return{getItem:c=>{var u;const p=h=>h===null?null:JSON.parse(h,void 0),f=(u=i.getItem(c))!=null?u:null;return f instanceof Promise?f.then(p):p(f)},setItem:(c,u)=>i.setItem(c,JSON.stringify(u,void 0)),removeItem:c=>i.removeItem(c)}}const hl=a=>r=>{try{const i=a(r);return i instanceof Promise?i:{then(l){return hl(l)(i)},catch(l){return this}}}catch(i){return{then(l){return this},catch(l){return hl(l)(i)}}}},Hy=(a,r)=>(i,l,c)=>{let u={storage:Gp(()=>window.localStorage),partialize:S=>S,version:0,merge:(S,E)=>({...E,...S}),...r},p=!1,f=0;const h=new Set,y=new Set;let x=u.storage;if(!x)return a((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),i(...S)},l,c);const _=()=>{const S=u.partialize({...l()});return x.setItem(u.name,{state:S,version:u.version})},$=c.setState;c.setState=(S,E)=>($(S,E),_());const T=a((...S)=>(i(...S),_()),l,c);c.getInitialState=()=>T;let M;const A=()=>{var S,E;if(!x)return;const P=++f;p=!1,h.forEach(j=>{var V;return j((V=l())!=null?V:T)});const N=((E=u.onRehydrateStorage)==null?void 0:E.call(u,(S=l())!=null?S:T))||void 0;return hl(x.getItem.bind(x))(u.name).then(j=>{if(j)if(typeof j.version=="number"&&j.version!==u.version){if(u.migrate){const V=u.migrate(j.state,j.version);return V instanceof Promise?V.then(K=>[!0,K]):[!0,V]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,j.state];return[!1,void 0]}).then(j=>{var V;if(P!==f)return;const[K,ce]=j;if(M=u.merge(ce,(V=l())!=null?V:T),i(M,!0),K)return _()}).then(()=>{P===f&&(N==null||N(l(),void 0),M=l(),p=!0,y.forEach(j=>j(M)))}).catch(j=>{P===f&&(N==null||N(void 0,j))})};return c.persist={setOptions:S=>{u={...u,...S},S.storage&&(x=S.storage)},clearStorage:()=>{x==null||x.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>A(),hasHydrated:()=>p,onHydrate:S=>(h.add(S),()=>{h.delete(S)}),onFinishHydration:S=>(y.add(S),()=>{y.delete(S)})},u.skipHydration||A(),M||T},Xy=Hy,Wy=()=>{const a=new Date,r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`},ip="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",ye=By()(Xy((a,r)=>({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:ip,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:70,reportHistory:[],setAnalysis:i=>a({dropScore:i.score,title:i.title,summary:i.summary,roast:i.roast,encouragement:i.encouragement,tags:i.tags,dailyTask:i.daily_task,disclaimer:i.disclaimer,source:i.source,sourceLabel:i.source_label,fallbackCode:i.fallback_code,recordStatus:i.record_status,recordId:i.record_id,count:i.count,thickness:i.thickness,suggestions:i.suggestions}),viewReport:i=>{const l=r().reportHistory.find(c=>c.id===i);l&&a({dropScore:l.score,title:l.title,summary:l.summary,roast:l.roast,encouragement:l.encouragement,tags:l.tags,dailyTask:l.daily_task,disclaimer:l.disclaimer,source:l.source,sourceLabel:l.source_label,fallbackCode:l.fallback_code,recordStatus:l.record_status,recordId:l.record_id,count:l.count,thickness:l.thickness,suggestions:l.suggestions})},viewDayReport:i=>{const l=r().reportHistory.filter(p=>p.date===i);if(l.length===0)return;const c=l[0],u=Math.round(l.reduce((p,f)=>p+f.score,0)/l.length);a({dropScore:u,title:c.title,summary:c.summary,roast:c.roast,encouragement:c.encouragement,tags:c.tags,dailyTask:c.daily_task,disclaimer:c.disclaimer,source:c.source,sourceLabel:c.source_label,fallbackCode:c.fallback_code,recordStatus:c.record_status,recordId:c.record_id,count:c.count,thickness:c.thickness,suggestions:c.suggestions})},addReport:i=>a(l=>({reportHistory:[i,...l.reportHistory].slice(0,100)})),mergeRemoteHistory:i=>a(l=>{const c=new Set(i.map(p=>p.record_id||p.id).filter(Boolean));return{reportHistory:[...l.reportHistory.filter(p=>!c.has(p.record_id||p.id)),...i].slice(0,100)}}),markCheckinToday:()=>{const i=Wy();r().checkinDays.includes(i)||a(l=>({checkinDays:[...l.checkinDays,i],points:l.points+5}))},unlockHairStyle:(i,l)=>{const c=r();return c.unlockedHairStyles.includes(i)?!0:c.points<l?!1:(a({unlockedHairStyles:[...c.unlockedHairStyles,i],points:c.points-l}),!0)},addPoints:i=>a(l=>({points:l.points+i})),resetAll:()=>{a({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:ip,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:70,reportHistory:[]}),typeof window<"u"&&window.localStorage.removeItem("diaolema-user")}}),{name:"diaolema-user",storage:Gp(()=>localStorage),version:3,migrate:a=>({...a&&typeof a=="object"?a:{},points:70,unlockedHairStyles:["none"]})})),Vy=`<section class="page active" data-page="home">
          <div class="hero card">
            <div>
              <h2>Every hair is a <em>seed</em>,<br>every care<br>brings it to <strong>life.</strong></h2>
              <p>Diaoleme is your AI hair companion. We understand, support, and grow with you, turning every fallen hair into a seed and every day into a step of growth.</p>
              <div class="hero-buttons">
                <button class="cta primary" data-go="scan">📷 Scan Hair Now</button>
                <button class="cta ghost" data-go="buddy">🌱 Meet Your Buddy</button>
              </div>
              <p>💗 Trusted by 100,000+ users · +99K growth journeys</p>
            </div>
            <img class="hero-mascot-layer" src="./assets/buddy/buddy-hero.png" alt="Fluffy Seedling" fetchpriority="high" decoding="async">
            <div class="buddy-stage">
              <div class="ground"></div>
              <div class="buddy">
                <div class="fluff"></div>
                <div class="sprout"></div>
                <div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div>
                <div class="body"></div>
                <div class="shoe left"></div>
                <div class="shoe right"></div>
              </div>
            </div>
            <div class="report-card card">
              <h3>Today's Seed Report ✨</h3>
              <div><span class="big-number">12</span> seeds fallen</div>
              <p>Mostly healthy &amp; full of life</p>
              <svg class="home-line-chart" viewBox="0 0 280 108" aria-label="Weekly seed trend"><defs><linearGradient id="seedArea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#9b55e6" stop-opacity=".32"/><stop offset="1" stop-color="#9b55e6" stop-opacity="0"/></linearGradient></defs><path d="M8 79 C30 65 42 48 64 54 S96 82 119 78 S149 89 165 62 S185 31 204 38 S234 52 272 29 L272 96 L8 96Z" fill="url(#seedArea)"/><path d="M8 79 C30 65 42 48 64 54 S96 82 119 78 S149 89 165 62 S185 31 204 38 S234 52 272 29" fill="none" stroke="#8b4bdc" stroke-width="3"/><g fill="#fff" stroke="#8b4bdc" stroke-width="2"><circle cx="8" cy="79" r="4"/><circle cx="57" cy="52" r="4"/><circle cx="108" cy="76" r="4"/><circle cx="157" cy="74" r="4"/><circle cx="199" cy="37" r="4"/><circle cx="233" cy="48" r="4"/><circle cx="272" cy="29" r="4"/></g></svg>
              <div class="home-chart-days">Mon Tue Wed Thu Fri Sat Sun</div>
              <div class="home-good-job"><b>Good job!</b><span>Your care this week is<br>better than 72% users!</span><i>•ᴗ•</i></div>
            </div>
          </div>
          <div class="mini-card-grid">
            <div class="card">
              <h3>💗 My Hair Buddy <span class="badge">Lv.5</span></h3>
              <div class="mini-buddy" style="width:130px;height:130px;margin:auto"></div>
              <h3 style="text-align:center">Fluffy Seedling</h3>
              <div class="meter"><div class="fill" style="--w:86%;--c:#65c982"></div></div>
            </div>
            <div class="card">
              <h3>⭐ Today's Quests</h3>
              <div class="item-list compact-quests"><div class="item" style="grid-template-columns:34px 1fr auto"><span>💧</span><b>喝够 8 杯水</b><span class="">+50 XP</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🌙</span><b>23:30 前睡觉</b><span class="">+60 XP</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🥗</span><b>吃一份蔬果</b><span class="status">已完成</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🖐</span><b>头皮按摩 5 分钟</b><span class="">+50 XP</span></div></div>
            </div>
            <div class="card">
              <h3>🌿 Growth Journey</h3>
              <div><span class="big-number" data-home-points>420</span> / 800 XP <span class="badge" data-home-level>Lv.5</span></div>
              <div class="meter"><div class="fill" data-home-level-fill style="--w:52%"></div></div>
              <p data-home-next-level>⭐ 380 XP to unlock new hairstyle</p>
            </div>
            <div class="card">
              <h3>🏆 Hair Growth League</h3>
              <div class="leaderboard small-leaders"><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">1</span><b>Luna</b><span>28,760 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">2</span><b>Mia</b><span>25,480 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">3</span><b>Ray</b><span>22,140 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">4</span><b>Sophia</b><span>18,900 XP</span></div></div>
            </div>
          </div>
          <div class="home-service-strip">
            <div class="care-quote"><span>•ᴗ•</span><b>It's okay to have difficult days.<small>We're in this together. 🌱 💜</small></b></div>
            <div><i>⌂</i><b>AI Hair Analysis<small>Understand your<br>hair condition</small></b></div>
            <div><i>♧</i><b>Personalized Care<small>Plans just for you</small></b></div>
            <div><i>♡</i><b>Emotional Support<small>Always here<br>when you need</small></b></div>
            <div><i>♛</i><b>Fun &amp; Growth<small>Turn care into<br>a joyful game</small></b></div>
            <button><b>Share your journey</b><small>Get a poster &amp; inspire others!</small><em>Create Poster</em></button>
          </div>
        </section>`,Qy=`<section class="page" data-page="scan">
          <div class="scan-page-shell">
            <div class="scan-top-actions">
              <button class="scan-guide">ⓘ　新手指南</button><span class="scan-alert">♧</span>
              <img class="scan-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像">
            </div>
            <div class="scan-layout">
              <aside class="scan-left-rail">
                <div class="scan-feature-list">
                  <div class="scan-feature"><span class="scan-feature-icon">☀️</span><b>光线充足</b><small>自然光或白色灯光</small></div>
                  <div class="scan-feature"><span class="scan-feature-icon">▣</span><b>平铺头发</b><small>尽量不重叠</small></div>
                  <div class="scan-feature"><span class="scan-feature-icon">◌</span><b>对比清晰</b><small>浅色背景更佳</small></div>
                </div>
                <div class="scan-cheer"><b>别担心～</b><br>我们一起慢慢变好 💗</div>
                <img class="scan-sitting" src="./assets/scan/sitting-mascot.png" alt="坐着的掉了么伙伴">
              </aside>
              <section class="scan-center card" style="text-align:center" data-scan-card>
                <header class="scan-heading"><h1>扫描掉落头发</h1><p>用科学的方式，了解你的头发状况 💗</p></header>
                <div class="scanner-ring scan-orbit">
                  <div class="scan-state">📷　<span id="scanStateText">准备就绪</span></div>
                  <span class="scan-ground-shadow" aria-hidden="true"></span>
                  <img class="scan-mascot" src="./assets/scan/scanning-mascot.png" alt="正在扫描的掉了么伙伴">
                  <div class="scan-percent" id="scanPercent">待上传</div>
                </div>
                <div class="scan-instruction"><h3>请将头发平铺在对比清晰的背景上</h3><p>确保光线充足，避免阴影和反光</p></div>
                <div class="scan-actions">
                  <button class="scan-action primary" id="scanBtn"><span class="scan-action-icon">📷</span><span>拍照扫描<small>拍摄掉落的头发</small></span></button>
                  <button class="scan-action" id="uploadBtn"><span class="scan-action-icon">▧</span><span>相册上传<small>从相册选择照片</small></span></button>
                  <button class="scan-action primary" id="scanCompleteBtn" style="display:none"><span>完成扫描</span></button>
                  <p class="scan-privacy">🔒　扫描记录仅自己可见，保护你的隐私</p>
                </div>
              </section>
              <aside class="scan-right-rail">
                <section class="scan-card">
                  <h3>如何获得更准确的结果？<a href="#">查看示例 →</a></h3>
                  <div class="scan-examples">
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>单根或少量头发</b><small>效果更准确</small></div>
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>头发打结成团</b><small>难以识别</small></div>
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>背景颜色复杂</b><small>影响识别效果</small></div>
                  </div>
                </section>
                <section class="scan-card scan-week-card">
                  <h3>本周扫描数据 <small>5.12 – 5.18</small></h3>
                  <div class="scan-week">
                    <div><strong>3<small>次</small></strong><span>扫描次数</span></div>
                    <div><strong>86</strong><span>状态平均分</span></div>
                    <div><strong class="scan-source-value">真实 AI</strong><span>最新来源及结果</span></div>
                  </div>
                </section>
                <section class="scan-card">
                  <h3>扫描小贴士</h3>
                  <div class="scan-tip-list">
                    <div class="scan-tip"><i>▣</i><div><b>建议每天在相同时间扫描</b><small>便于观察变化趋势</small></div></div>
                    <div class="scan-tip"><i>□</i><div><b>长期记录更有参考价值</b><small>我们会为你生成成长曲线</small></div></div>
                    <div class="scan-tip"><i>♢</i><div><b>你的数据安全加密</b><small>绝不泄露给第三方</small></div></div>
                  </div>
                </section>
                <section class="scan-card item-list scan-history-card">
                  <h3>最近扫描记录 <a href="#">查看全部 →</a></h3>
                  <div class="scan-history scan-record-list">
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/18 10:30</b><strong>128 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/17 10:25</b><strong>132 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/16 10:28</b><strong>118 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </section>`,Ky=`<section class="page" data-page="buddy">
          <div class="buddy-shell">
            <div class="buddy-top-actions"><button class="buddy-share">⌘　分享我的旅程</button><span>♧</span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div>
            <section class="buddy-hero-area">
              <img class="buddy-environment" src="./assets/buddy/buddy-hero-environment.jpg" alt="">
              <img class="buddy-character" src="./assets/buddy/buddy-hero.png" alt="Fluffy Seedling">
              <header class="buddy-heading-new"><span class="eyebrow">My Buddy　✦</span><h1>Fluffy Seedling <span class="level">Lv.5</span></h1><p>陪伴你已经 38 天啦 💗</p></header>
              <section class="buddy-glass buddy-status metric">
                <div class="buddy-stat"><i>♥</i><b>生命值</b><strong>86 / 100</strong><div class="buddy-meter"><span style="width:86%;background:#f45a92"></span></div></div>
                <div class="buddy-stat"><i>⚡</i><b>能量值</b><strong>68 / 100</strong><div class="buddy-meter"><span style="width:68%;background:#f6a900"></span></div></div>
                <div class="buddy-stat"><i>☺</i><b>心情值</b><strong>Happy</strong><div class="buddy-meter"><span style="width:60%;background:#8b62e8"></span></div></div>
              </section>
              <section class="buddy-glass buddy-report"><h3>✦ 今日头发报告</h3><strong class="number">少量</strong><p>大多是健康的毛发，状态很棒！</p><div class="buddy-line-chart"></div><div class="buddy-tip"><b>小提示</b><br><small>记得多喝水和好睡眠，对头发的成长很重要哦！</small><img src="./assets/buddy/buddy-hero.png" alt=""></div></section>
            </section>
            <section class="buddy-lower">
              <div class="buddy-glass hair-card"><h2 class="section-title">✦　解锁发型 <span class="badge">3 / 12 已解锁</span></h2><div class="hair-rail" id="skins">
                <button class="hair-item selected"><img src="./assets/buddy/hairstyles/dandelion.png" alt=""><b>蒲公英蓬蓬头</b><small>Lv.5</small></button>
                <button class="hair-item"><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><b>星光短发</b><small>Lv.8　🔒</small></button>
                <button class="hair-item"><img src="./assets/buddy/hairstyles/ribbon.png" alt=""><b>彩虹飘带</b><small>Lv.10　🔒</small></button>
                <button class="hair-item locked"><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.12　🔒</small></button>
                <button class="hair-item locked"><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.14　🔒</small></button>
                <button class="hair-item locked"><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.18　🔒</small></button>
              </div></div>
              <aside class="buddy-glass buddy-actions"><div class="buddy-action-list">
                <button class="buddy-action"><i>♙</i><span>Dress Up<small>装扮你的伙伴</small></span><b>›</b></button>
                <button class="buddy-action"><i>☻</i><span>Feed<small>喂养伙伴，补充爱与能量</small></span><b>›</b></button>
                <button class="buddy-action diary" data-buddy-action="diary" data-go="diary"><i>▣</i><span>Buddy Diary<small>记录我们一起成长的每一天</small></span><b>›</b></button>
                <button class="buddy-action journey" data-buddy-action="journey" data-go="journey"><i>▥</i><span>成长记录<small>查看伙伴的成长轨迹</small></span><b>›</b></button>
              </div></aside>
            </section>
            <section class="buddy-bottom">
              <div class="buddy-glass buddy-summary"><h2>♥　本周成长小结</h2><p>你的护理表现超过了 72% 的用户，继续保持哦！</p><div class="summary-metrics"><div>▣<strong>7 天</strong></div><div>✓<strong>6 / 7</strong></div><div>🥗<strong>优秀</strong></div><div>☾<strong>良好</strong></div></div></div>
              <div class="buddy-glass buddy-community"><h2>♥　来自大家的鼓励</h2><div class="comment-grid"><div class="comment"><b>👩 Luna</b>你的新发型超可爱！<br><small>2 小时前</small></div><div class="comment"><b>👨 Mia</b>头发也在慢慢变强大呢，你一定可以的！<br><small>5 小时前</small></div><div class="comment"><b>👩 Ray</b>看到你的变化啦，好棒！！✨<br><small>1 天前</small></div></div></div>
            </section>
          </div>
        </section>`,Yy=`<section class="page" data-page="quests">
          <div class="quest-shell">
            <header class="quest-head">
              <div><h1>Quests ✦</h1><p>完成护发任务，获得经验值和能量，解锁更多奖励！</p></div>
              <div class="quest-head-actions"><button class="quest-guide">ⓘ　任务指南</button><span>♧</span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div>
            </header>
            <div class="quest-layout">
              <div class="quest-main">
                <section class="quest-card reward-card">
                  <h2>今日活跃奖励</h2><p>完成今日任务，领取额外奖励！</p>
                  <div class="reward-days" id="weekRewards">
                    <button class="reward-day"><b>一</b><i>✓</i><strong>已领取</strong><small>+10 XP</small></button>
                    <button class="reward-day"><b>二</b><i>✓</i><strong>已领取</strong><small>+10 XP</small></button>
                    <button class="reward-day active"><b>三</b><i>☯</i><strong style="color:#8257e8">今天</strong><small>+15 XP</small></button>
                    <button class="reward-day"><b>四</b><i>⚡</i><span>+15 XP</span></button>
                    <button class="reward-day"><b>五</b><i>♥</i><span>+20 XP</span></button>
                    <button class="reward-day"><b>六</b><i>🎁</i><span>+20 XP</span></button>
                    <button class="reward-day"><b>日</b><i>☀</i><span>+25 XP</span></button>
                  </div>
                  <img class="reward-mascot" src="./assets/quests/reward-standing-mascot.png" alt="今日奖励伙伴">
                </section>
                <nav class="quest-tabs-new" role="tablist" aria-label="任务分类"><button type="button" class="quest-tab is-active" data-quest-category="daily">每日任务</button><button type="button" class="quest-tab" data-quest-category="weekly">每周任务</button><button type="button" class="quest-tab" data-quest-category="growth">成长任务</button><button type="button" class="quest-tab" data-quest-category="special">特别任务</button></nav>
                <section class="quest-list-new" id="questList">
                  <article class="quest-row"><img src="./assets/quests/icons/water.svg" alt=""><div class="quest-copy"><b>喝够 8 杯水</b><small>充足的水分让头发更健康</small></div><div class="quest-progress"><span class="quest-count">6/8</span><div class="quest-meter"><i style="width:75%"></i></div></div><span class="quest-xp">+50 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/sleep.svg" alt=""><div class="quest-copy"><b>23:30 前睡觉</b><small>早睡是头发的修复时间</small></div><div class="quest-progress"><span class="quest-count">0/1</span><div class="quest-meter"><i style="width:0"></i></div></div><span class="quest-xp">+60 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/meal.svg" alt=""><div class="quest-copy"><b>吃一份蔬果</b><small>补充维生素，滋养发根</small></div><div class="quest-progress"><span class="quest-count">1/1</span><div class="quest-meter"><i style="width:100%"></i></div></div><span class="quest-xp"></span><button class="quest-do done">✓ 已完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/massage.svg" alt=""><div class="quest-copy"><b>头皮按摩 5 分钟</b><small>促进头皮血液循环</small></div><div class="quest-progress"><span class="quest-count">2/5</span><div class="quest-meter"><i style="width:40%"></i></div></div><span class="quest-xp">+50 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/walk.svg" alt=""><div class="quest-copy"><b>散步 20 分钟</b><small>运动让身体和头发一起呼吸</small></div><div class="quest-progress"><span class="quest-count">1/1</span><div class="quest-meter"><i style="width:100%"></i></div></div><span class="quest-xp"></span><button class="quest-do done">✓ 已完成</button></article>
                </section>
              </div>
              <aside class="quest-side">
                <section class="quest-card progress-card-new card"><h2>我的任务进度</h2><div class="progress-content"><div><p>本周完成度</p><strong class="progress-big">78%</strong><div class="progress-line"><i></i></div><p>完成 11/14 个任务</p></div><div class="progress-ring"><img src="./assets/quests/reward-standing-mascot.png" alt=""></div></div></section>
                <section class="quest-card streak-card-new card"><div class="streak-top"><div><h2>连续打卡</h2><p>去 Rewards「每日签到」可点亮今天</p><strong data-quests-streak-days>7 <small>天</small></strong></div></div><img class="streak-mascot" src="./assets/quests/tip-sitting-mascot.png" alt=""><div class="streak-week" id="streak"><span class="pending"><b>🍬</b><small>一</small></span><span class="pending"><b>🧁</b><small>二</small></span><span class="pending"><b>🍪</b><small>三</small></span><span class="pending"><b>🍩</b><small>四</small></span><span class="pending"><b>🍦</b><small>五</small></span><span class="pending"><b>🍰</b><small>六</small></span><span class="gift"><b>🎁</b><small>日</small></span></div></section>
                <section class="quest-card tip-card-new card"><h2>任务小贴士</h2><p class="tip-lead"><b>定期护理 + 健康生活习惯 = 健康的头发！</b></p><p class="tip-body">保持好心情，规律作息，均衡饮食，<br>你的头发会越来越喜欢你哦～</p><img class="tip-mascot" src="./assets/quests/tip-sitting-mascot.png" alt=""></section>
                <section class="quest-card overview-card-new card"><h2>本周任务总览</h2><div class="overview"><div class="quest-donut" data-total="14"></div><ul><li><span><i class="dot done"></i> 已完成</span><b>11 (79%)</b></li><li><span><i class="dot progress"></i> 进行中</span><b>2 (14%)</b></li><li><span><i class="dot todo"></i> 未开始</span><b>1 (7%)</b></li></ul></div></section>
              </aside>
            </div>
          </div>
        </section>`,Gy=`<section class="page" data-page="journey">
          <div class="journey-shell">
            <header class="journey-head"><div><h1>My Journey ✦</h1><p>每一步成长，都值得被记录 ✨</p></div><div class="journey-head-actions"><button class="journey-share" data-action="journey-share">⇪　分享我的旅程</button><span class="journey-bell" aria-label="通知">🔔<i>1</i></span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div></header>
            <div class="journey-layout">
              <div class="journey-main">
                <section class="journey-glass milestone-hero-new">
                  <div class="milestone-copy"><h2>见证成长的每一步 🌱</h2><p>你的每一个好习惯，都会让小发球变得更强壮，<br>让我们一起继续前进吧！</p></div>
                  <svg class="milestone-curve-svg" viewBox="0 0 1146 150" preserveAspectRatio="none"><path d="M0 110 C150 150 210 42 340 62 S540 122 675 72 S850 104 980 60 S1080 28 1146 40" fill="none" stroke="#a483f1" stroke-width="3" stroke-dasharray="7 6" opacity=".72"/></svg>
                  <div class="milestone-nodes-new" id="milestones">
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-flag.svg" alt=""><b>开始记录</b><small>5/1</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-sprout.svg" alt=""><b>坚持打卡</b><small>5/4</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-task.svg" alt=""><b>完成任务</b><small>5/7</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-drop.svg" alt=""><b>头皮改善</b><small>5/18</small></div>
                    <div class="milestone-node active"><img src="./assets/journey/icons/milestone-scissors.svg" alt=""><b>解锁新发型</b><small>5/24</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-heart.svg" alt=""><b>持续成长中</b><small>未来可期</small></div>
                  </div>
                </section>
                <section class="journey-glass journey-timeline"><h2>我的旅程时间线　<small>全部事件⌄</small></h2><div class="timeline-list-new" id="timeline">
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/18</b><small>周六</small></div><span class="timeline-icon" aria-hidden="true">⭐</span><div class="timeline-copy"><b>头皮健康评分提升</b><small>你的头皮健康评分从 72 提升到 82，继续保持哦！</small></div><span class="timeline-reward green">82 分</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/15</b><small>周三</small></div><span class="timeline-icon" aria-hidden="true">🌙</span><div class="timeline-copy"><b>早睡打卡</b><small>你在 22:30 前入睡，睡眠质量很棒！</small></div><span class="timeline-reward">76 分</span></article>
                  <article class="timeline-row-new selected"><div class="timeline-date"><b>5/12</b><small>周日</small></div><span class="timeline-icon" aria-hidden="true">🛡️</span><div class="timeline-copy"><b>连续打卡 7 天</b><small>太棒了！你已经连续 7 天坚持记录和护理！</small></div><span class="timeline-reward green">88 分</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/10</b><small>周五</small></div><span class="timeline-icon" aria-hidden="true">🌱</span><div class="timeline-copy"><b>健康饮食</b><small>你记录了健康餐饮，营养均衡，头发需要的能量满满！</small></div><span class="timeline-reward">71 分</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/8</b><small>周三</small></div><span class="timeline-icon" aria-hidden="true">🎀</span><div class="timeline-copy"><b>运动 20 分钟</b><small>运动可以促进血液循环，头发会更健康哦！</small></div><span class="timeline-reward">69 分</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/7</b><small>周二</small></div><span class="timeline-icon" aria-hidden="true">🫧</span><div class="timeline-copy"><b>完成第一个任务</b><small>你完成了“头皮按摩 5 分钟”任务，真棒！</small></div><span class="timeline-reward green">80 分</span></article>
                </div><button class="load-more" type="button" data-action="journey-load-more">加载更多　⌄</button></section>
              </div>
              <aside class="journey-side">
                <nav class="period-switch"><button class="active">This Month</button><button>All Time</button></nav>
                <section class="journey-glass journey-side-card journey-summary-new"><h2>旅程总览</h2><div class="journey-metrics"><div><i>📅</i><strong>32</strong><small>记录天数</small></div><div><i>⭐</i><strong>1,620</strong><small>总 XP</small></div><div><i>🔥</i><strong>12</strong><small>连续天数</small></div></div></section>
                <section class="journey-glass journey-side-card mood-card"><h2>心情轨迹　<small>更多分析 ›</small></h2>
                  <div class="mood-chart-wrap">
                    <div class="mood-chart-emojis" aria-hidden="true"><span>😄</span><span>😊</span><span>😐</span><span>😔</span><span>😢</span></div>
                    <svg class="mood-chart-svg" viewBox="0 0 410 145"><defs><linearGradient id="moodArea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#9e74f1" stop-opacity=".28"/><stop offset="1" stop-color="#9e74f1" stop-opacity="0"/></linearGradient></defs><path d="M10 102 C40 96 55 44 85 70 S120 112 147 87 S175 52 207 72 S235 105 260 79 S305 68 330 76 S360 30 400 42 L400 135 L10 135Z" fill="url(#moodArea)"/><path d="M10 102 C40 96 55 44 85 70 S120 112 147 87 S175 52 207 72 S235 105 260 79 S305 68 330 76 S360 30 400 42" fill="none" stroke="#8b64eb" stroke-width="3"/><circle cx="330" cy="76" r="6" fill="#fff" stroke="#8b64eb" stroke-width="3"/></svg>
                    <div class="mood-tooltip">5/18 心情很好 😊</div>
                    <div class="mood-chart-dates" aria-hidden="true"><span>5/1</span><span>5/5</span><span>5/10</span><span>5/15</span><span>5/20</span></div>
                  </div>
                </section>
                <section class="journey-glass journey-side-card highlights-card-new"><h2>本月高光时刻　<small>查看全部 ›</small></h2><div class="highlight-row"><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""><div><small>5/12</small><b>连续打卡 7 天</b><span>坚持就是胜利！你做到了！</span></div></div><div class="highlight-row"><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""><div><small>5/18</small><b>健康评分提升</b><span>头皮状态越来越好啦！</span></div></div><div class="highlight-row"><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><div><small>5/24</small><b>解锁新发型</b><span>恭喜解锁「星光短发」！</span></div></div></section>
                <section class="journey-glass journey-side-card quote-card-new"><h2>旅程感悟</h2><p>“每一次小小的坚持，都是在为未来的自己种下一颗生命的种子。”<br><br>— 小发球 💜</p><img src="./assets/buddy/buddy-hero.png" alt=""></section>
              </aside>
            </div>
          </div>
        </section>`,Jy=`<section class="page" data-page="league">
          <div class="grid two-col">
            <div class="grid">
              <section class="league-season-hero">
                <img class="league-hero-bg" src="./league-assets/new_sky_and_flower_bg.png" alt="" aria-hidden="true">
                <div class="league-hero-copy">
                  <span class="league-season-kicker">本赛季</span>
                  <h2>春风吹发季 🌸</h2>
                  <p class="league-season-range"><span data-league-season-range>8.1 - 8.31</span> <small aria-label="赛季说明">ⓘ</small></p>
                  <small class="league-countdown-label">赛季结束倒计时</small>
                  <div class="league-countdown" data-league-countdown aria-live="polite">
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="days" aria-label="剩余天数">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">天</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="hours" aria-label="剩余小时">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">时</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="minutes" aria-label="剩余分钟">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">分</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="seconds" aria-label="剩余秒数">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">秒</span>
                    </div>
                  </div>
                </div>
                <div class="league-hero-characters" aria-label="赛季前三名">
                  <div class="podium second">
                    <img class="podium-char" src="./league-assets/champion-2.png" alt="亚军">
                    <img class="podium-base" src="./league-assets/podium-2.png" alt="">
                  </div>
                  <div class="podium first">
                    <img class="podium-char" src="./league-assets/champion-1.png" alt="冠军">
                    <img class="podium-base" src="./league-assets/podium-1.png" alt="">
                  </div>
                  <div class="podium third">
                    <img class="podium-char" src="./league-assets/champion-3.png" alt="季军">
                    <img class="podium-base" src="./league-assets/podium-3.png" alt="">
                  </div>
                </div>
                <div class="league-hero-rank">
                  <button type="button" class="league-season-reward-btn" data-league-season-reward aria-expanded="false" aria-controls="leagueSeasonRewardPanel">🎁 赛季奖励预览</button>
                  <div class="league-season-reward-panel" id="leagueSeasonRewardPanel" data-league-season-reward-panel hidden>
                    <button type="button" class="league-season-reward-close" data-league-season-reward-close aria-label="关闭">×</button>
                    <div class="league-season-reward-card">
                      <img src="./rewards-assets/reward-sprout.png" alt="嫩芽发型" width="96" height="96">
                      <b>嫩芽发型</b>
                      <small>发型装扮 · 赛季限定奖励</small>
                      <p>完成本赛季（8.1 – 8.31）段位目标后可领取，先预览一下～</p>
                    </div>
                  </div>
                  <span>我的段位</span>
                  <img class="league-hero-badge" data-league-tier-badge src="./league-assets/shield-bronze.png" alt="段位徽章">
                  <b data-league-tier-name>青铜</b>
                  <small data-league-tier-progress>⭐ 0 / 1000</small>
                  <div class="league-hero-progress"><i data-league-tier-fill style="width:0%"></i></div>
                </div>
              </section>
              <section class="rank-area">
                <div class="rank-toolbar">
                  <div class="rank-tabs">
                    <button class="active" type="button" data-league-tab="排行榜">排行榜</button>
                    <button type="button" data-league-tab="我的联盟">我的联盟</button>
                    <button type="button" data-league-tab="好友排行">好友排行</button>
                    <button type="button" data-league-tab="段位晋升">段位晋升</button>
                  </div>
                  <label><span>◎</span><select aria-label="排行榜区域"><option selected>全球</option><option>亚洲</option><option>北美</option><option>欧洲</option></select></label>
                </div>
                <div id="leagueRankContent"></div>
              </section>
            </div>
            <aside class="league-right-rail">
              <section class="league-side-panel alliance-panel">
                <div class="league-panel-title"><strong>我的联盟</strong><button type="button">查看详情 ›</button></div>
                <div class="league-alliance-main"><img class="league-shield-placeholder" src="./league-assets/badge-ally.png" alt="联盟徽章"><div><b>蒲公英小分队 <em data-league-alliance-level>Lv.6</em></b></div></div>
                <div class="league-alliance-stats"><div><span>成员</span><b data-league-alliance-members>28 / 30</b></div><div><span>本周贡献</span><b data-league-my-contrib>0 XP</b></div></div>
                <div class="league-purple-progress"><i data-league-alliance-fill style="width:0%"></i></div><small class="league-center-note" data-league-alliance-note>距离下一等级还需 -- XP</small>
              </section>
              <section class="league-side-panel announcement-panel">
                <div class="league-panel-title"><strong>联盟公告</strong><button type="button">更多 ›</button></div>
                <button class="league-announcement" type="button"><span>• 本周联盟任务已更新，快来完成吧！</span><time>08-18</time></button>
                <button class="league-announcement" type="button"><span>• 联盟战即将开始，准备好了吗？</span><time>08-17</time></button>
                <button class="league-announcement" type="button"><span>• 欢迎新成员加入蒲公英小分队～</span><time>08-15</time></button>
              </section>
              <section class="league-side-panel battle-panel">
                <div class="league-panel-title"><strong>本周联盟战 <span class="league-live">进行中</span></strong></div>
                <div class="league-battle-grid">
                  <div><img class="league-battle-badge" src="./league-assets/badge-ally-sm.png" alt="我方"><b data-league-ally-name>蒲公英小分队</b><strong data-league-ally-xp>15,680</strong></div>
                  <img class="league-vs" src="./league-assets/vs-mark.png" alt="VS">
                  <div><img class="league-battle-badge" src="./league-assets/badge-enemy-sm.png" alt="对手"><b data-league-enemy-name>发光小队</b><strong data-league-enemy-xp>12,420</strong></div>
                </div>
                <small class="league-center-note" data-league-battle-remain>剩余 --</small>
              </section>
              <section class="league-side-panel awards-panel">
                <div class="league-panel-title"><strong>每周荣誉榜</strong><button type="button">更多 ›</button></div>
                <div class="league-awards-grid">
                  <div><img class="award-dot" src="./league-assets/honor-hair.png" alt="护发达人"><b>护发达人</b><small data-award-hair>--</small></div>
                  <div><img class="award-dot" src="./league-assets/honor-love.png" alt="爱心大使"><b>爱心大使</b><small data-award-kindness>--</small></div>
                  <div><img class="award-dot" src="./league-assets/honor-active.png" alt="活跃之星"><b>活跃之星</b><small data-award-active>--</small></div>
                </div>
              </section>
            </aside>
          </div>
        </section>`,Zy=`<section class="page" data-page="rewards">
          <div class="rewards-dashboard">
            <main class="rewards-main">
              <section class="rewards-points-hero">
                <div class="rewards-points-stats">
                  <span>我的积分</span>
                  <h2><span data-rewards-points></span><small>XP</small></h2>
                  <p data-rewards-next-level>距离下一等级还需 -- XP</p>
                  <div class="rewards-level-progress"><i data-rewards-level-fill style="width:0%"></i></div>
                  <div class="rewards-earn-card">
                    <h3>积分获取方式</h3>
                    <ul>
                      <li><img class="earn-icon" src="./rewards-assets/earn-task.png" alt=""><b>完成任务</b><strong>+2 ~ 35 XP</strong></li>
                      <li><img class="earn-icon" src="./rewards-assets/earn-checkin.png" alt=""><b>每日打卡</b><strong>+5 XP</strong></li>
                      <li><img class="earn-icon" src="./rewards-assets/earn-growth.png" alt=""><b>每日建议全完成</b><strong>+10 XP</strong></li>
                      <li><img class="earn-icon" src="./rewards-assets/earn-league.png" alt=""><b>参与联盟活动</b><strong>+100 ~ 500 XP</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section class="reward-market">
                <div class="market-toolbar">
                  <div class="category-tabs">
                    <button class="active" type="button" data-reward-category="全部">全部</button>
                    <button type="button" data-reward-category="发型装扮">发型装扮</button>
                    <button type="button" data-reward-category="护发好物">护发好物</button>
                    <button type="button" data-reward-category="陪伴道具">陪伴道具</button>
                    <button type="button" data-reward-category="成长特权">成长特权</button>
                    <button type="button" data-reward-category="定制周边">定制周边</button>
                  </div>
                  <label class="sort-select"><select aria-label="奖励排序" data-reward-sort>
                    <option value="default">默认排序</option>
                    <option value="points-asc">积分从低到高</option>
                    <option value="points-desc">积分从高到低</option>
                  </select><span>⌄</span></label>
                </div>
                <div class="reward-grid" id="shop"></div>
              </section>

              <section class="growth-panel">
                <div class="growth-heading"><strong>成长等级奖励</strong><span>达到相应等级即可领取专属奖励</span></div>
                <div class="growth-carousel">
                  <button type="button" class="round-arrow" data-growth-scroll="-1" aria-label="上一页">‹</button>
                  <div class="growth-track" id="rewardsGrowth"></div>
                  <button type="button" class="round-arrow" data-growth-scroll="1" aria-label="下一页">›</button>
                </div>
              </section>
            </main>

            <aside class="rewards-right-rail">
              <section class="rewards-side-panel overview-panel">
                <div class="rewards-panel-heading">
                  <div>
                    <span class="panel-eyebrow">POINTS OVERVIEW</span>
                    <strong>积分总览</strong>
                  </div>
                  <b data-rewards-level-badge>Lv.1 成长中</b>
                </div>
                <div class="overview-content">
                  <div class="points-donut"><div><strong data-rewards-points></strong><span>总积分</span></div></div>
                  <ul class="legend"><li><i class="purple"></i><span>任务奖励</span><b>67%</b></li><li><i class="blue"></i><span>打卡奖励</span><b>18%</b></li><li><i class="orange"></i><span>活动奖励</span><b>10%</b></li><li><i class="gray"></i><span>其他</span><b>5%</b></li></ul>
                </div>
                <div class="overview-level-block">
                  <div class="overview-level-meta">
                    <span data-rewards-overview-next>距离下一等级还需 -- XP</span>
                    <span data-rewards-overview-ratio>-- / --</span>
                  </div>
                  <div class="overview-level-bar"><i data-rewards-overview-fill style="width:0%"></i></div>
                </div>
              </section>

              <section class="rewards-side-panel today-growth-panel">
                <div class="rewards-panel-heading">
                  <div>
                    <span class="panel-eyebrow">TODAY'S GROWTH</span>
                    <strong>今日成长</strong>
                  </div>
                  <b data-rewards-today-badge>3 / 5 已完成</b>
                </div>
                <div class="today-growth-stats">
                  <div><span>今日获得</span><strong data-rewards-today-xp>+5 XP</strong></div>
                  <div><span>完成任务</span><strong data-rewards-today-tasks>2 项</strong></div>
                  <div><span>护发记录</span><strong data-rewards-today-record>0 次</strong></div>
                </div>
                <div class="today-growth-list" id="rewardsTodayGrowth"></div>
              </section>

              <section class="rewards-side-panel checkin-panel">
                <div class="rewards-panel-heading"><div><strong>每日签到</strong><span>连续打卡可获得额外分哦！</span></div><b data-rewards-streak>已连续 0 天</b></div>
                <div class="checkin-week" id="rewardsCheckin"></div>
                <p data-rewards-checkin-hint>今日打卡可得 <b>+5 XP</b></p>
              </section>

              <section class="rewards-side-panel event-panel">
                <div class="rewards-panel-heading"><strong>限时活动</strong></div>
                <div class="event-list">
                  <button type="button" class="event-banner"><img src="./rewards-assets/event-banner1.png" alt="夏日养发计划"></button>
                  <button type="button" class="event-banner"><img src="./rewards-assets/event-banner2.png" alt="夏日养发计划"></button>
                </div>
              </section>

              <section class="rewards-side-panel records-panel">
                <div class="rewards-panel-heading"><strong>兑换记录</strong></div>
                <div class="record-list" id="rewardsRecords"></div>
              </section>
            </aside>
          </div>
        </section>`,e0=`<section class="page" data-page="diary">
          <div class="diary-shell">
            <header class="diary-head"><div><h1>My Diary ✨</h1><p>记录每一个小瞬间，见证成长的每一步 💜</p></div><div class="diary-head-actions"><button class="write-diary" type="button"><img src="./assets/diary/icons/pen.svg" alt="">写日记</button><span class="diary-bell" aria-label="通知">🔔<i>1</i></span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div></header>
            <div class="diary-layout">
              <div class="diary-main">
                <section class="diary-glass diary-hero-new"><h2>今天也要好好爱自己呀 ✨</h2><p>每一根头发都在努力生长，<br>你也是！</p><div class="date-mood"><span>5月18日 · 星期日</span><span>😊 开心　⌄</span></div></section>
                <section class="diary-content">
                  <aside class="diary-left">
                    <div class="diary-glass calendar-card"><div class="calendar-title"><h2>日历视图</h2><b id="diaryCalendarTitle">‹　 May 2024　 ›</b></div><div class="calendar-week"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div><div class="calendar-grid" id="calendar">
                      <span class="muted">28</span><span class="muted">29</span><span class="muted">30</span><span>1</span><span>2</span><span>3</span><span>4</span><span class="has-mood mood-happy">5</span><span>6</span><span>7</span><span class="has-mood mood-calm">8</span><span>9</span><span>10</span><span>11</span><span class="has-mood mood-happy">12</span><span>13</span><span>14</span><span class="has-mood mood-anxious">15</span><span class="has-mood mood-tired">16</span><span class="has-mood mood-calm">17</span><span class="selected has-mood mood-happy">18</span><span>19</span><span>20</span><span class="has-mood mood-happy">21</span><span>22</span><span>23</span><span class="has-mood mood-calm">24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span class="muted">1</span>
                    </div><div class="mood-filter"><b>心情筛选</b><div class="mood-buttons" id="diaryMoodFilters"><button class="active" data-diary-mood="all" type="button"><img src="./assets/diary/icons/mood-all.svg" alt=""><small>全部</small></button><button data-diary-mood="happy" type="button"><img src="./assets/diary/icons/mood-happy.svg" alt=""><small>开心</small></button><button data-diary-mood="calm" type="button"><img src="./assets/diary/icons/mood-calm.svg" alt=""><small>平静</small></button><button data-diary-mood="anxious" type="button"><img src="./assets/diary/icons/mood-anxious.svg" alt=""><small>焦虑</small></button><button data-diary-mood="tired" type="button"><img src="./assets/diary/icons/mood-tired.svg" alt=""><small>疲惫</small></button></div></div></div>
                    <div class="diary-glass mood-donut-card"><h2>本月心情分布</h2><div class="mood-donut-wrap"><div class="mood-donut" id="diaryMoodDonut" data-label="24&#10;篇日记"></div><ul class="mood-legend" id="diaryMoodLegend"><li><span>🟢 开心</span><b>45%</b></li><li><span>🟣 平静</span><b>25%</b></li><li><span>🟪 疲惫</span><b>15%</b></li><li><span>🟠 焦虑</span><b>10%</b></li><li><span>⚪ 其他</span><b>5%</b></li></ul></div></div>
                  </aside>
                  <div class="diary-list-wrap"><h2 id="diaryFeedTitle">共 24 篇日记　　<small>最新在前⌄</small></h2><div class="diary-list-new" id="diaries">
                    <article class="diary-row-new"><div class="diary-date"><strong>18</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><small class="mood-label">开心</small></div><div class="diary-copy"><b>今天掉发好像比昨天少一点！</b><p>早上洗头的时候发现掉发好像比昨天少了一些些…虽然还是很多，但看到这个小小的变化，心情瞬间变好。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>17</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-calm.svg" alt=""><small class="mood-label">平静</small></div><div class="diary-copy"><b>坚持护发第17天 ✨</b><p>今天做了头皮按摩，感觉头皮放松了很多～还喝了黑芝麻糊，希望头发能有营养！</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/dandelion.png" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>16</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-tired.svg" alt=""><small class="mood-label">疲惫</small></div><div class="diary-copy"><b>压力好大的一天…</b><p>最近项目截止日期临近，压力好大，掉发也变多了。晚上泡个热水澡放松一下。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>15</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-anxious.svg" alt=""><small class="mood-label">焦虑</small></div><div class="diary-copy"><b>为什么掉发总是反反复复…</b><p>有时候觉得有改善，有时候又突然变多了，真的好焦虑啊。</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/blue-bob.png" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>14</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><small class="mood-label">开心</small></div><div class="diary-copy"><b>收到新发型奖励啦！🎉</b><p>完成了一周的护发任务，解锁了新发型～我的小伙伴好可爱！</p></div><img class="diary-thumb" src="./assets/shared-brand/brand-avatar-tile.png" alt=""><span class="diary-menu">•••</span></article>
                  </div><button class="diary-load" id="diaryLoadMore" type="button">加载更多日记　⌄</button></div>
                </section>
              </div>
              <aside class="diary-side">
                <section class="diary-glass diary-side-card diary-trend" id="diaryTrendCard"><div class="diary-trend-head"><h2>心情趋势</h2><small>本月⌄</small></div><div class="diary-trend-chart"><div class="diary-trend-y" aria-hidden="true"><img src="./assets/diary/icons/mood-happy.svg" alt=""><img src="./assets/diary/icons/mood-calm.svg" alt=""><img src="./assets/diary/icons/mood-anxious.svg" alt=""><img src="./assets/diary/icons/mood-tired.svg" alt=""></div><svg viewBox="0 0 420 220" role="img" aria-label="本月心情趋势"><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76" fill="none" stroke="#8157e8" stroke-width="3"/><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76 L405 210 L30 210Z" fill="rgba(129,87,232,.1)"/><circle cx="210" cy="120" r="6" fill="#8157e8"/><g class="diary-trend-tip"><rect x="150" y="72" width="120" height="34" rx="12" fill="#fff" stroke="rgba(129,87,232,.25)"/><text x="210" y="94" text-anchor="middle" fill="#5b4a9a" font-size="13" font-weight="700">5/18 开心 😊</text></g></svg></div><div class="diary-trend-x" aria-hidden="true"><span>5/1</span><span>5/6</span><span>5/11</span><span>5/16</span><span>5/21</span><span>5/26</span><span>5/31</span></div></section>
                <section class="diary-glass diary-side-card keyword-card"><h2>关键词统计　<small>更多 ›</small></h2><div class="word-cloud"><span>护理</span><span>睡眠</span><span>头皮按摩</span><span>营养</span><span>黑芝麻</span><span>焦虑</span><span>运动</span></div></section>
                <section class="diary-glass diary-side-card memory-card" id="diaryMemoryCard"><h2>回忆精选　<small>更多回忆 ›</small></h2><div class="memory-image"><span>第一篇日记 ⚡</span></div><blockquote>“希望通过记录，找到适合自己的护发方法，让头发健康起来～”　💗</blockquote></section>
              </aside>
            </div>
          </div>
        </section>`,t0=`<section class="page" data-page="community">
          <div class="community-shell">
            <header class="community-header"><div><h1>Community ✨</h1><p>在这里，分享治愈，收获力量，一起慢慢变好 💜</p></div><div class="community-actions"><button class="community-compose">✎　发布动态</button><span>♧</span><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""></div></header>
            <div class="community-layout">
              <main class="community-main">
                <section class="community-hero"><h2>你并不孤单，我们都在努力生长 ✨</h2><p>分享你的故事，互相鼓励，成为彼此的光 🌈</p><div class="community-hero-buttons"><button>✎　分享我的故事</button><button>#　浏览话题</button></div></section>
                <div class="community-tabs tabs" id="communityTabs"><button class="active">关注</button><button>最新</button><button>热门</button><button>精华</button><select><option>全部动态</option></select></div>
                <section class="community-feed" id="posts">
                  <article class="community-post community-glass"><img class="community-post-avatar" src="./assets/community/avatars/dandelion.png" alt=""><div class="community-post-copy"><h3>小蒲公英 <small>Lv.6</small></h3><p>今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～<br>坚持护理真的会有改变，相信时间！🌱</p><span class="community-tag"># 连续打卡</span></div><div class="community-media"><img src="./assets/diary/diary-sunset-hero.jpg" alt=""></div><div class="community-post-actions"><span><img src="./assets/community/icons/heart.svg" alt="">128</span><span><img src="./assets/community/icons/comment.svg" alt="">36</span><span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span></div></article>
                  <article class="community-post community-glass"><img class="community-post-avatar" src="./assets/community/avatars/strawberry.png" alt=""><div class="community-post-copy"><h3>爱吃草莓 <small>Lv.4　 昨天 21:35</small></h3><p>分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠 😊<br>推荐给大家试试～</p><span class="community-tag"># 头皮护理</span></div><div class="community-post-actions"><span><img src="./assets/community/icons/heart.svg" alt="">96</span><span><img src="./assets/community/icons/comment.svg" alt="">38</span><span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span></div></article>
                  <article class="community-post community-glass"><img class="community-post-avatar" src="./assets/community/avatars/mint.png" alt=""><div class="community-post-copy"><h3>薄荷味的风 <small>Lv.6　 昨天 18:20</small></h3><p>最近压力有点大，掉发也跟着严重了…深呼吸、运动、喝水，给自己一些温柔的时间 🍀</p><span class="community-tag"># 情绪管理</span></div><div class="community-post-actions"><span><img src="./assets/community/icons/heart.svg" alt="">76</span><span><img src="./assets/community/icons/comment.svg" alt="">22</span><span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span></div></article>
                  <article class="community-post community-glass"><img class="community-post-avatar" src="./assets/community/avatars/sunflower.png" alt=""><div class="community-post-copy"><h3>向日葵 <small>Lv.3　 05-18</small></h3><p>新发型解锁啦！看着宝宝一点点成长出来的碎发，成就感满满！💪</p><span class="community-tag"># 新发型解锁</span></div><div class="community-media"><img src="./assets/buddy/hairstyles/dandelion.png" alt=""><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><img src="./assets/buddy/hairstyles/ribbon.png" alt=""></div><div class="community-post-actions"><span><img src="./assets/community/icons/heart.svg" alt="">143</span><span><img src="./assets/community/icons/comment.svg" alt="">42</span><span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span></div></article>
                </section>
              </main>
              <aside class="community-rail">
                <section class="community-glass community-rail-card hot-topics"><h2>热门话题 <small>更多 ›</small></h2><div class="topic-list"><div class="topic-row"><img src="./assets/community/icons/hashtag.svg" alt=""><b>连续打卡挑战</b><small>12.4k 讨论</small></div><div class="topic-row"><img src="./assets/community/icons/hashtag.svg" alt=""><b>头皮护理分享</b><small>8.7k 讨论</small></div><div class="topic-row"><img src="./assets/community/icons/hashtag.svg" alt=""><b>情绪管理小贴士</b><small>6.1k 讨论</small></div><div class="topic-row"><img src="./assets/community/icons/hashtag.svg" alt=""><b>新发型解锁</b><small>5.3k 讨论</small></div><div class="topic-row"><img src="./assets/community/icons/hashtag.svg" alt=""><b>健康饮食打卡</b><small>4.8k 讨论</small></div></div></section>
                <section class="community-glass community-rail-card community-event"><h2>社区活动 <small>更多 ›</small></h2><div class="event-body"><div class="event-calendar">21<br><small>DAYS</small></div><div class="event-copy"><b>21 天头皮养护打卡挑战</b><small>一起养成好习惯，赢取限定奖励！</small><small>05/20 – 06/09</small></div><button class="join-now">立即参加</button></div></section>
                <section class="community-glass community-rail-card recommended-groups"><h2>推荐小组 <small>更多 ›</small></h2><div class="group-list"><div class="group-row"><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><div><b>佛系养发小分队</b><small>成员 3,128</small></div><button>加入</button></div><div class="group-row"><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><div><b>运动养发日记</b><small>成员 2,856</small></div><button>加入</button></div><div class="group-row"><img src="./assets/buddy/hairstyles/dandelion.png" alt=""><div><b>饮食养发研究所</b><small>成员 2,341</small></div><button>加入</button></div><div class="group-row"><img src="./assets/buddy/hairstyles/ribbon.png" alt=""><div><b>熬夜星人互助会</b><small>成员 1,987</small></div><button>加入</button></div></div></section>
                <section class="community-glass community-rail-card active-stars"><h2>本周活跃之星 <small>更多 ›</small></h2><div class="star-grid"><div class="winner"><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""><b>小蒲公英</b><small>1,250 XP</small></div><div><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><b>爱吃草莓</b><small>980 XP</small></div><div><img src="./assets/buddy/hairstyles/ribbon.png" alt=""><b>向日葵</b><small>860 XP</small></div><div><img src="./assets/buddy/hairstyles/dandelion.png" alt=""><b>薄荷味的风</b><small>720 XP</small></div><div><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><b>星星点点</b><small>640 XP</small></div></div></section>
              </aside>
            </div>
          </div>
        </section>`,a0=`<section class="page" data-page="me">
          <div class="me-shell">
            <header class="me-head">
              <div>
                <h1>Me ✦</h1>
                <p>你的成长档案 · 温柔记录每一次认真生活</p>
              </div>
              <div class="me-head-actions">
                <img class="shared-profile-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像">
              </div>
            </header>

            <div class="me-hero card">
              <div class="me-hero-copy">
                <h2>一起变好呀 <span class="badge" data-me-level-badge>Lv.5</span></h2>
                <p>掉了么陪你把每一天的小坚持，收成看得见的成长。</p>
                <div class="me-hero-badges">
                  <span class="badge" data-me-points>0 XP</span>
                  <span class="badge" data-me-streak>连续 0 天</span>
                </div>
              </div>
              <img class="me-hero-mascot" src="./assets/buddy/buddy-hero.png" alt="Fluffy Seedling">
            </div>

            <div class="me-grid">
              <div class="card me-stats">
                <h3>个人统计</h3>
                <div class="me-stat-row">
                  <div><span class="big-number" data-me-history-days>0</span><small>记录天数</small></div>
                  <div><span class="big-number" data-me-total-xp>0</span><small>总 XP</small></div>
                  <div><span class="big-number" data-me-streak-count>0</span><small>连续天数</small></div>
                </div>
              </div>

              <div class="card me-achievements">
                <h3>我的成就 <span class="badge">8 / 24</span></h3>
                <div class="item-list">
                  <div class="item"><span>🏆</span><b>连续打卡 7 天<small>坚持就是胜利</small></b><span class="status">已解锁</span></div>
                  <div class="item"><span>🌱</span><b>第一次扫描<small>开启护发之旅</small></b><span class="status">已解锁</span></div>
                  <div class="item"><span>💧</span><b>头皮状态变稳<small>努力有了回报</small></b><span class="status">已解锁</span></div>
                  <div class="item"><span>🔒</span><b>解锁新发型<small>继续加油</small></b><span>›</span></div>
                </div>
              </div>

              <div class="card me-settings item-list">
                <h3>设置</h3>
                <button class="item" type="button"><span>🔔</span><b>通知设置<small>管理推送与提醒</small></b><span>›</span></button>
                <button class="item" type="button"><span>🎨</span><b>主题外观<small>个性化你的应用</small></b><span>›</span></button>
                <button class="item" type="button" data-action="share-to-community"><span>📤</span><b>分享旅程<small>邀请好友一起护发</small></b><span>›</span></button>
                <button class="item" type="button" data-action="reset-progress"><span>ℹ️</span><b>关于掉了么<small>版本 1.0.0 · 可重置演示进度</small></b><span>›</span></button>
              </div>
            </div>
          </div>
        </section>`,n0=`<div class="app design-canvas final-pages-integrated">
      <aside class="sidebar">
        <div class="brand">
          <img class="shared-brand-lockup" src="./assets/shared-brand/brand-lockup-tile.png" alt="掉了么 Diaoleme">
          <div class="mini-buddy"></div>
          <div>
            <h1>掉了么</h1>
            <span>Diaoleme</span>
          </div>
        </div>
        <nav class="nav" id="nav">
          <button data-go="home" class="active nav-primary"><span class="icon">⌂</span><label>Home</label></button>
          <button data-go="scan" class="nav-primary"><span class="icon">▢</span><label>Scan</label></button>
          <button data-go="journey" class="nav-primary"><span class="icon">✧</span><label>Journey</label></button>
          <button data-go="buddy"><span class="icon">☁</span><label>Buddy</label></button>
          <button data-go="quests"><span class="icon">✿</span><label>Quests</label></button>
          <button data-go="league"><span class="icon">♛</span><label>League</label></button>
          <button data-go="rewards"><span class="icon">□</span><label>Rewards</label></button>
          <button data-go="diary"><span class="icon">▤</span><label>Diary</label></button>
          <div class="nav-later" aria-label="后续">
            <span class="nav-later-label">后续</span>
            <button data-go="community" class="nav-later-item"><span class="icon">☷</span><label>Community</label></button>
          </div>
        </nav>
        <button class="profile" data-go="me" type="button" aria-label="Me">
          <img class="shared-profile-avatar" alt="" src="./assets/shared-brand/brand-avatar-tile.png">
          <label>Me<br><small data-me-level>Lv.5</small></label>
        </button>
      </aside>

      <main class="main">
        <div class="topbar">
          <div class="page-title">
            <h2 id="pageHeading">Home</h2>
            <p id="pageSub">Every hair is a seed.</p>
          </div>
          <div class="actions">
            <button class="pill" id="guideBtn" data-action="share-to-community">分享到 Community</button>
            <button class="bell" aria-label="Notifications">🔔</button>
            <button class="avatar" aria-label="Profile">🌱</button>
          </div>
        </div>

        ${Vy}

        ${Qy}

        ${Ky}

        ${Yy}

        ${Gy}

        ${Jy}

        ${Zy}

        ${e0}

        ${t0}

        ${a0}
      </main>
    </div>`,r0=`
const primaryPages = [
  ["home", "⌂", "Home", "Every hair is a seed."],
  ["scan", "▢", "Scan", " 陪你轻松记一记头发小队今天的状态"],
  ["journey", "✧", "Journey", " 每一步成长，都值得被记录 ✨"]
];
const secondaryPages = [
  ["buddy", "☁", "Buddy", " 每个人拥有自己的生命伙伴 "],
  ["quests", "✿", "Quests", " 完成护发任务，获得经验值和能量 "],
  ["league", "♛", "League", " 和伙伴们一起成长，赢取荣誉与奖励 "],
  ["rewards", "□", "Rewards", " 用成长兑换惊喜，奖励每一次认真生活 "],
  ["diary", "▤", "Diary", " 记录每一个小瞬间，见证成长的每一步 💜"]
];
const laterPages = [
  ["community", "☷", "Community", " 在这里，分享治愈，收获力量 "]
];
const pages = [...primaryPages, ...secondaryPages, ...laterPages];

const quests = [
  ["💧", " 喝够 8 杯水 ", " 充足的水分让头发更健康 ", "6/8", "+50 XP"],
  ["🌙", "23:30 前睡觉 ", " 早睡是头皮的修复时间 ", "0/1", "+60 XP"],
  ["🥗", " 吃一份蔬果 ", " 补充维生素，滋养发根 ", "1/1", " 已完成 "],
  ["🖐", " 头皮按摩 5 分钟 ", " 促进头皮血液循环 ", "2/5", "+50 XP"],
  ["🚶", " 散步 20 分钟 ", " 运动让身体和头发一起呼吸 ", "1/1", " 已完成 "]
];

const leaders = [
  ["1", "Luna", " 头发是生命的种子 🌱", "28,760 XP", "↑ 1"],
  ["2", "Mia", " 每天进步 1% ✨", "25,480 XP", "↓ 1"],
  ["3", "Ray", " 慢慢来，比较更重要 💜", "22,140 XP", "—"],
  ["4", "Sophia", " 关注头皮，从现在开始 ", "18,900 XP", "↑ 2"],
  ["5", "Bella", " 保持心情愉悦～", "16,520 XP", "↓ 1"],
  ["12", "You", " 一起变好呀！", "12,360 XP", "↑ 3"]
];

const nav = document.querySelector("#nav");
const heading = document.querySelector("#pageHeading");
const sub = document.querySelector("#pageSub");

const renderNavButton = ([id, icon, label], extraClass = "") =>
  \`<button data-go="\${id}" class="\${[id === "home" ? "active" : "", extraClass].filter(Boolean).join(" ")}"><span class="icon">\${icon}</span><label>\${label}</label></button>\`;

nav.innerHTML = [
  ...primaryPages.map((page) => renderNavButton(page, "nav-primary")),
  ...secondaryPages.map((page) => renderNavButton(page)),
  \`<div class="nav-later" aria-label="后续"><span class="nav-later-label">后续</span>\${laterPages
    .map((page) => renderNavButton(page, "nav-later-item"))
    .join("")}</div>\`,
].join("");

function showPage(id) {
  document.querySelectorAll(".page").forEach((page) =>
    page.classList.toggle("active", page.dataset.page === id)
  );
  document.querySelectorAll("[data-go]").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.go === id)
  );
  const meta = pages.find((page) => page[0] === id);
  heading.textContent = meta?.[2] || "Diaoleme";
  sub.textContent = meta?.[3] || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  if (go) showPage(go.dataset.go);
});

document.querySelectorAll(".chart").forEach((chart) => {
  const values = (chart.dataset.bars || "30,60,45,75").split(",");
  chart.innerHTML = values
    .map((v) => \`<span class="bar" style="height:\${v}%"></span>\`)
    .join("");
});

document.querySelector(".compact-quests").innerHTML = quests
  .slice(0, 4)
  .map(
    (q, i) =>
      \`<div class="item" style="grid-template-columns:34px 1fr auto"><span>\${q[0]}</span><b>\${q[1]}</b><span class="\${i === 2 ? "status" : ""}">\${q[4]}</span></div>\`
  )
  .join("");

document.querySelector(".small-leaders").innerHTML = leaders
  .slice(0, 4)
  .map(
    (l) =>
      \`<div class="leader \${l[0] === "12" ? "you" : ""}" style="grid-template-columns:34px 1fr auto"><span class="badge">\${l[0]}</span><b>\${l[1]}</b><span>\${l[3]}</span></div>\`
  )
  .join("");

// AIFA-104: do NOT overwrite #skins here — Buddy hydrate owns .hair-item + hairstyle images.
// Legacy empty .mini-buddy skin rail caused missing Buddy hair previews.

// AIFA-108: do NOT overwrite #questList / #weekRewards / #streak here.
// questsController.renderTasks owns Quests list + week rewards + streak;
// legacy .item markup here caused duplicate bonus bars and layout overlap on live.
const checkinRoot = document.querySelector("#checkin");
if (checkinRoot) {
  checkinRoot.innerHTML = [" 一 ", " 二 ", " 三 ", " 四 ", " 五 ", " 六 ", " 日 "]
    .map(
      (d, i) =>
        \`<span class="badge">\${i < 6 ? "✓" : "🎁"}<br><small>\${d}</small></span>\`
    )
    .join("");
}

// AIFA-112: do NOT overwrite #milestones / #timeline — Journey.tsx owns final-pages markup
// (design-reference/19). Legacy .milestone / .item injection destroyed the new skin.
const _journeyLegacyMs = [
  [" 开始记录 ", "5/1"],
  [" 坚持 3 天 ", "5/4"],
  [" 完成第一个任务 ", "5/7"],
  [" 连续 7 天 ", "5/12"],
  [" 头皮健康改善 ", "5/18"],
  [" 解锁新发型 ", "5/24"]
];
void _journeyLegacyMs;

const leadersRoot = document.querySelector("#leaders");
if (leadersRoot) {
  leadersRoot.innerHTML = leaders
    .map(
      (l) =>
        \`<div class="leader \${l[0] === "12" ? "you" : ""}"><span class="badge">\${l[0]}</span><b>\${l[1]}<small>\${l[2]}</small></b><span>\${l[3]}</span><span>\${l[4]}</span></div>\`
    )
    .join("");
}

// AIFA-113: do NOT overwrite #calendar — Diary.tsx owns final-pages day grid
// (design-reference/12+18). Legacy weekday+day injection broke calendar-grid layout.
// AIFA-99: 勿覆盖 #diaries / #posts——交给 App renderDiary / renderCommunity 水合 final-pages 新皮与角色头像。
`,s0=`
  :root {
    --ink: #13205f;
    --muted: #65709e;
    --purple: #8b5cf6;
    --purple-2: #b58cff;
    --pink: #ff77a8;
    --green: #65c982;
    --orange: #ff9a3d;
    --blue: #68b9ff;
    --line: rgba(122, 99, 196, 0.16);
    --glass: rgba(255, 255, 255, 0.62);
    --glass-strong: rgba(255, 255, 255, 0.82);
    --shadow: 0 24px 70px rgba(99, 75, 168, 0.18);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    color: var(--ink);
    font-family: Inter, "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;
    background:
      radial-gradient(circle at 72% 4%, rgba(126, 105, 255, 0.34), transparent 31%),
      radial-gradient(circle at 20% 7%, rgba(255, 183, 210, 0.42), transparent 27%),
      radial-gradient(circle at 88% 88%, rgba(255, 209, 150, 0.3), transparent 32%),
      linear-gradient(135deg, #fff8fb 0%, #f4efff 47%, #fdf7ff 100%);
    overflow-x: hidden;
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  body::before {
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.96) 0 2px, transparent 3px),
      radial-gradient(circle, rgba(255, 208, 119, 0.72) 0 1px, transparent 2px);
    background-size: 180px 180px, 260px 260px;
    background-position: 40px 20px, 80px 70px;
    opacity: 0.58;
  }

  body::after {
    background:
      radial-gradient(ellipse at 58% 78%, rgba(137, 206, 120, 0.28), transparent 24%),
      linear-gradient(180deg, transparent 0 72%, rgba(255, 255, 255, 0.38) 100%);
  }

  button,
  input {
    font: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  .app {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 160px minmax(0, 1fr);
    min-height: 100vh;
  }

  .sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 28px 18px;
    background: rgba(255, 255, 255, 0.46);
    border-right: 1px solid rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mini-buddy {
    width: 54px;
    height: 54px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle at 50% 38%, #fff 0 24%, transparent 25%),
      radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(221, 202, 255, 0.58));
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 12px 30px rgba(132, 95, 218, 0.15);
    position: relative;
  }

  .mini-buddy::before {
    content: "•  •";
    position: absolute;
    top: 22px;
    color: #0d1643;
    font-size: 16px;
    letter-spacing: 6px;
  }

  .brand h1 {
    margin: 0;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .brand span {
    display: block;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 700;
  }

  .nav {
    display: grid;
    gap: 8px;
  }

  .nav button,
  .profile {
    min-height: 56px;
    border-radius: 8px;
    color: #7480ad;
    background: transparent;
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    text-align: left;
    font-weight: 700;
  }

  .nav button.nav-primary {
    color: #5b6799;
    font-weight: 800;
  }

  .nav button.nav-primary .icon {
    font-size: 22px;
  }

  .nav button.active {
    color: var(--purple);
    background: rgba(139, 92, 246, 0.13);
    box-shadow: inset 3px 0 0 var(--purple);
  }

  .nav .icon {
    font-size: 21px;
    line-height: 1;
  }

  .nav-later {
    margin-top: 10px;
    padding-top: 12px;
    border-top: 1px dashed rgba(116, 128, 173, 0.35);
    display: grid;
    gap: 6px;
  }

  .nav-later-label {
    padding: 0 12px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9aa3c4;
  }

  .nav button.nav-later-item {
    min-height: 44px;
    opacity: 0.62;
    color: #9aa3c4;
    font-weight: 600;
    font-size: 13px;
  }

  .nav button.nav-later-item .icon {
    font-size: 16px;
  }

  .nav button.nav-later-item.active {
    opacity: 0.9;
  }

  .profile {
    margin-top: auto;
    background: rgba(255, 255, 255, 0.62);
  }

  .profile img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .main {
    padding: 34px 42px 46px;
    min-width: 0;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 22px;
  }

  .page-title h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1.05;
    letter-spacing: 0;
  }

  .page-title p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 700;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pill {
    min-height: 46px;
    border-radius: 999px;
    padding: 0 22px;
    color: var(--purple);
    background: rgba(255, 255, 255, 0.68);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8);
    font-weight: 800;
  }

  .pill.primary,
  .primary {
    color: white;
    background: linear-gradient(135deg, #a96dff, #7054dc);
    box-shadow: 0 14px 30px rgba(117, 82, 213, 0.28);
  }

  .bell,
  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.68);
    color: var(--purple);
    font-weight: 900;
  }

  .page {
    display: none;
    animation: fade 0.35s ease;
  }

  .page.active {
    display: block;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
  }

  .grid {
    display: grid;
    gap: 20px;
  }

  .home-grid {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: start;
  }

  .two-col {
    grid-template-columns: minmax(0, 1fr) 360px;
  }

  .three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card {
    border-radius: 8px;
    padding: 24px;
    background: var(--glass);
    border: 1px solid rgba(255, 255, 255, 0.74);
    box-shadow: var(--shadow);
    backdrop-filter: blur(22px);
  }

  .soft {
    background: rgba(255, 255, 255, 0.48);
  }

  .hero {
    position: relative;
    min-height: 620px;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(360px, 0.8fr) minmax(420px, 1.2fr);
    align-items: center;
    padding: 52px;
  }

  .hero h2 {
    margin: 0;
    max-width: 620px;
    font-size: clamp(42px, 4.5vw, 68px);
    line-height: 1.06;
    letter-spacing: 0;
  }

  .hero h2 em {
    color: var(--purple);
    font-style: normal;
  }

  .hero h2 strong {
    color: var(--pink);
  }

  .hero p {
    width: min(500px, 100%);
    color: var(--muted);
    font-size: 17px;
    line-height: 1.65;
    font-weight: 700;
  }

  .hero-buttons,
  .tabs,
  .row {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .cta {
    min-height: 56px;
    border-radius: 999px;
    padding: 0 30px;
    font-weight: 900;
  }

  .ghost {
    color: var(--purple);
    background: rgba(255, 255, 255, 0.76);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.88);
  }

  .buddy-stage {
    min-height: 430px;
    display: grid;
    place-items: end center;
    position: relative;
  }

  .ground {
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 40px;
    height: 130px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 38% 25%, rgba(255, 255, 255, 0.85) 0 3px, transparent 4px),
      radial-gradient(circle at 70% 34%, rgba(255, 232, 122, 0.8) 0 3px, transparent 4px),
      linear-gradient(180deg, #afcf70, #70984e);
    filter: blur(0.2px);
    opacity: 0.92;
  }

  .buddy {
    --hair: #fffefa;
    position: relative;
    width: 260px;
    height: 340px;
    z-index: 2;
    transform-origin: bottom center;
    animation: floaty 4.5s ease-in-out infinite;
  }

  @keyframes floaty {
    50% {
      transform: translateY(-8px);
    }
  }

  .fluff {
    position: absolute;
    left: 22px;
    top: 0;
    width: 218px;
    height: 218px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(from 10deg, rgba(255, 255, 255, 0.94) 0 8deg, rgba(244, 224, 255, 0.68) 8deg 11deg, transparent 11deg 15deg),
      radial-gradient(circle, #fff 0 48%, rgba(251, 238, 255, 0.88) 60%, transparent 72%);
    box-shadow: 0 0 42px rgba(255, 255, 255, 0.94), inset 0 0 32px rgba(185, 162, 255, 0.16);
  }

  .fluff::before,
  .fluff::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.88);
    box-shadow:
      28px 12px 0 rgba(255, 255, 255, 0.78),
      72px -8px 0 rgba(255, 255, 255, 0.74),
      126px 8px 0 rgba(255, 255, 255, 0.78),
      158px 38px 0 rgba(255, 255, 255, 0.72),
      110px 156px 0 rgba(255, 255, 255, 0.68),
      45px 142px 0 rgba(255, 255, 255, 0.64);
  }

  .fluff::before {
    width: 12px;
    height: 12px;
    top: 17px;
    left: 17px;
  }

  .fluff::after {
    width: 8px;
    height: 8px;
    top: 48px;
    left: 42px;
  }

  .face {
    position: absolute;
    left: 74px;
    top: 116px;
    width: 112px;
    height: 88px;
    border-radius: 48% 48% 55% 55%;
    background: linear-gradient(180deg, #fff8f0, #ffe8d8);
    box-shadow: inset 0 -10px 18px rgba(255, 176, 156, 0.16);
  }

  .eye {
    position: absolute;
    top: 31px;
    width: 25px;
    height: 13px;
    border-radius: 50%;
    background: #0e1435;
  }

  .eye.left {
    left: 21px;
    transform: rotate(5deg);
  }

  .eye.right {
    right: 21px;
    transform: rotate(-5deg);
  }

  .nose {
    position: absolute;
    left: 52px;
    top: 48px;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: #ff8a61;
  }

  .blush {
    position: absolute;
    top: 50px;
    width: 19px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 143, 168, 0.42);
    filter: blur(1px);
  }

  .blush.left {
    left: 10px;
  }

  .blush.right {
    right: 10px;
  }

  .body {
    position: absolute;
    left: 87px;
    top: 190px;
    width: 88px;
    height: 98px;
    border-radius: 32px 32px 28px 28px;
    background: linear-gradient(180deg, #ff9e47, #e97822);
    box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.18), 0 14px 26px rgba(206, 103, 28, 0.22);
  }

  .body::before,
  .body::after {
    content: "";
    position: absolute;
    top: 22px;
    width: 26px;
    height: 48px;
    border-radius: 16px;
    background: #fff4ea;
  }

  .body::before {
    left: -13px;
    transform: rotate(18deg);
  }

  .body::after {
    right: -13px;
    transform: rotate(-18deg);
  }

  .shoe {
    position: absolute;
    top: 280px;
    width: 54px;
    height: 35px;
    border-radius: 20px;
    background: linear-gradient(180deg, #ff9d3c, #db6b22);
  }

  .shoe.left {
    left: 70px;
  }

  .shoe.right {
    right: 70px;
  }

  .sprout {
    position: absolute;
    left: 129px;
    top: -6px;
    width: 6px;
    height: 36px;
    border-radius: 99px;
    background: #64bc6d;
    transform: rotate(-16deg);
  }

  .sprout::before,
  .sprout::after {
    content: "";
    position: absolute;
    top: 3px;
    width: 26px;
    height: 15px;
    border-radius: 50%;
    background: #70cd78;
  }

  .sprout::before {
    left: -22px;
    transform: rotate(-20deg);
  }

  .sprout::after {
    left: 3px;
    transform: rotate(30deg);
  }

  .report-card {
    position: absolute;
    right: 34px;
    top: 60px;
    width: 290px;
  }

  .big-number {
    font-size: 54px;
    line-height: 1;
    color: var(--purple);
    font-weight: 950;
  }

  .chart {
    height: 96px;
    margin-top: 18px;
    display: flex;
    align-items: end;
    gap: 11px;
    padding: 10px 6px 0;
    border-bottom: 1px solid rgba(104, 90, 164, 0.14);
  }

  .bar {
    flex: 1;
    min-width: 9px;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, #a56dff, #f69cc4);
  }

  .mini-card-grid {
    margin-top: -18px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .section-title {
    margin: 0 0 16px;
    font-size: 20px;
  }

  .metric {
    display: grid;
    gap: 10px;
  }

  .metric-row {
    display: grid;
    grid-template-columns: 36px 1fr 70px;
    align-items: center;
    gap: 14px;
  }

  .meter {
    height: 11px;
    border-radius: 999px;
    background: rgba(131, 104, 185, 0.1);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    width: var(--w);
    border-radius: inherit;
    background: linear-gradient(90deg, var(--c, var(--purple)), #d8b5ff);
  }

  .item-list {
    display: grid;
    gap: 12px;
  }

  .item {
    min-height: 72px;
    padding: 14px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.58);
    display: grid;
    grid-template-columns: 44px 1fr auto;
    align-items: center;
    gap: 14px;
  }

  .item b,
  .leader b,
  .reward b {
    display: block;
  }

  .item small,
  .leader small,
  .reward small {
    color: var(--muted);
    font-weight: 700;
  }

  .badge {
    min-width: 42px;
    height: 34px;
    display: inline-grid;
    place-items: center;
    border-radius: 999px;
    padding: 0 12px;
    background: rgba(139, 92, 246, 0.12);
    color: var(--purple);
    font-weight: 900;
  }

  .status {
    color: var(--green);
    font-weight: 900;
  }

  .quest-btn {
    height: 42px;
    min-width: 92px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #aa72ff, #7354dd);
    font-weight: 900;
  }

  .quest-btn.done {
    color: var(--green);
    background: rgba(101, 201, 130, 0.12);
  }

  .scan-wrap {
    display: grid;
    grid-template-columns: 250px minmax(420px, 1fr) 360px;
    gap: 24px;
    align-items: stretch;
  }

  .scan-orbit {
    width: min(48vw, 560px);
    aspect-ratio: 1;
    margin: auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: relative;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.58), rgba(168, 127, 255, 0.14) 63%, transparent 64%);
  }

  .scan-orbit::before {
    content: "";
    position: absolute;
    inset: 16px;
    border-radius: 50%;
    border: 8px solid rgba(255, 255, 255, 0.72);
    border-right-color: var(--purple);
    border-bottom-color: var(--purple-2);
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .scan-percent {
    position: absolute;
    bottom: 34px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: linear-gradient(135deg, #c99aff, #7c5be5);
    border-radius: 999px;
    padding: 8px 24px;
    font-size: 25px;
    font-weight: 950;
  }

  .feature-stack {
    display: grid;
    gap: 18px;
  }

  .feature {
    min-height: 92px;
    border-radius: 8px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.62);
  }

  .feature b {
    display: block;
    margin-bottom: 6px;
  }

  .skin-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(120px, 1fr));
    gap: 14px;
  }

  .skin {
    min-height: 176px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(122, 99, 196, 0.1);
    display: grid;
    place-items: center;
    gap: 10px;
    padding: 14px;
    text-align: center;
  }

  .skin.active {
    border-color: var(--purple);
    box-shadow: inset 0 0 0 2px rgba(139, 92, 246, 0.18);
  }

  .skin .mini-buddy {
    width: 76px;
    height: 76px;
  }

  .timeline-hero {
    min-height: 245px;
    position: relative;
    overflow: hidden;
  }

  .path {
    position: absolute;
    left: 42px;
    right: 42px;
    bottom: 54px;
    height: 84px;
    border-bottom: 4px dashed rgba(145, 100, 255, 0.3);
    border-radius: 50%;
  }

  .milestones {
    position: relative;
    margin-top: 58px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }

  .milestone {
    text-align: center;
    font-weight: 900;
  }

  .dot {
    width: 46px;
    height: 46px;
    margin: 0 auto 10px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: white;
    background: linear-gradient(135deg, #a979ff, #65c982);
    box-shadow: 0 10px 20px rgba(124, 91, 229, 0.22);
  }

  .leaderboard {
    display: grid;
    gap: 9px;
  }

  .leader {
    min-height: 68px;
    display: grid;
    grid-template-columns: 44px 1fr 110px 44px;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.56);
  }

  .leader.you {
    background: linear-gradient(90deg, rgba(148, 93, 245, 0.86), rgba(205, 164, 255, 0.54));
    color: white;
  }

  .shop {
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    gap: 16px;
  }

  .reward {
    min-height: 255px;
    border-radius: 8px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.62);
    display: grid;
    gap: 12px;
  }

  .reward-art {
    height: 128px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    font-size: 58px;
    background: linear-gradient(145deg, #fff, #ffe9f0);
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 9px;
    text-align: center;
  }

  .calendar span {
    display: grid;
    place-items: center;
    min-height: 34px;
    border-radius: 50%;
    font-weight: 800;
  }

  .calendar .selected {
    color: white;
    background: var(--purple);
  }

  .post {
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.62);
    padding: 18px;
    display: grid;
    grid-template-columns: 50px 1fr auto;
    gap: 14px;
  }

  .post-media {
    width: 112px;
    height: 76px;
    border-radius: 8px;
    background: linear-gradient(135deg, #ffd7e6, #cab5ff);
    display: grid;
    place-items: center;
    font-size: 34px;
  }

  .word-cloud {
    min-height: 230px;
    position: relative;
  }

  .word-cloud span {
    position: absolute;
    color: var(--purple);
    font-weight: 900;
  }

  .donut {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(var(--purple) 0 55%, var(--green) 55% 76%, var(--orange) 76% 88%, #d9d5ee 88% 100%);
    display: grid;
    place-items: center;
  }

  .donut::after {
    content: attr(data-label);
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: #fff;
    display: grid;
    place-items: center;
    text-align: center;
    white-space: pre-line;
    font-size: 22px;
    font-weight: 950;
  }

  .phone-only {
    display: none;
  }

  @media (max-width: 1180px) {
    .app {
      grid-template-columns: 92px 1fr;
    }

    .brand h1,
    .brand span,
    .nav label,
    .profile label {
      display: none;
    }

    .nav button,
    .profile {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .hero,
    .home-grid,
    .two-col,
    .scan-wrap {
      grid-template-columns: 1fr;
    }

    .report-card {
      position: static;
      width: auto;
      margin-top: 20px;
    }

    .mini-card-grid,
    .three,
    .shop {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skin-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .app {
      display: block;
    }

    .sidebar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: auto;
      height: 78px;
      z-index: 10;
      padding: 8px;
      flex-direction: row;
      overflow-x: auto;
    }

    .brand,
    .profile {
      display: none;
    }

    .nav {
      display: flex;
      gap: 6px;
    }

    .nav-later {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 4px;
      padding-left: 8px;
      border-left: 1px dashed rgba(116, 128, 173, 0.35);
    }

    .nav-later-label {
      display: none;
    }

    .nav button.nav-later-item {
      min-width: 58px;
      min-height: 52px;
      opacity: 0.5;
    }

    .nav button {
      min-width: 70px;
      min-height: 58px;
      padding: 8px;
    }

    .nav button.nav-primary {
      min-width: 76px;
    }

    .main {
      padding: 20px 16px 104px;
    }

    .topbar {
      align-items: flex-start;
    }

    .actions .pill {
      display: none;
    }

    .hero {
      min-height: auto;
      padding: 24px;
    }

    .hero h2 {
      font-size: 42px;
    }

    .buddy-stage {
      min-height: 360px;
    }

    .buddy {
      transform: scale(0.82);
    }

    .mini-card-grid,
    .three,
    .shop,
    .skin-grid {
      grid-template-columns: 1fr;
    }
  }
`,i0=["reference-home","fp-home","scan-page-active","fp-scan","buddy-page-active","quest-page-active","journey-page-active","diary-page-active","community-page-active","me-page-active"],o0={home:["reference-home","fp-home"],scan:["scan-page-active","fp-scan"],buddy:["buddy-page-active"],quests:["quest-page-active"],journey:["journey-page-active"],diary:["diary-page-active"],community:["community-page-active"],me:["me-page-active"]};function ea(a,r){a.querySelectorAll(".page").forEach(u=>u.classList.toggle("active",u.dataset.page===r)),a.querySelectorAll("[data-go]").forEach(u=>u.classList.toggle("active",u.dataset.go===r));for(const u of i0)document.body.classList.remove(u);for(const u of o0[r]||[])document.body.classList.add(u);const i=a.querySelector("#pageHeading"),l=a.querySelector("#pageSub"),c={home:["Home","Every hair is a seed."],scan:["Scan","用科学的方式，了解你的头发状况 💗"],buddy:["Buddy","每个人拥有自己的生命伙伴"],quests:["Quests","完成护发任务，获得经验值和能量"],journey:["Journey","每一步成长，都值得被记录 ✨"],league:["League","和伙伴们一起成长，赢取荣誉与奖励"],rewards:["Rewards","用成长兑换惊喜，奖励每一次认真生活"],diary:["My Diary ✨","记录每一个小瞬间，见证成长的每一步 💜"],community:["Community","在这里，分享治愈，收获力量"],me:["Me","你的成长档案"]};i&&c[r]&&(i.textContent=c[r][0]),l&&c[r]&&(l.textContent=c[r][1])}function aa(a){return`./${String(a).replace(/^\/+/,"")}`}function Ee(a,r){a&&(a.innerHTML=r)}function O(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ue(a,r,i={}){const l=a.querySelector("[data-toast]");l==null||l.remove();const c=document.createElement("div");c.dataset.toast="true",c.className=["prototype-toast",i.className].filter(Boolean).join(" "),c.textContent=r;const u=i.anchorSelector?a.querySelector(i.anchorSelector):null;u?(getComputedStyle(u).position==="static"&&(u.style.position="relative"),c.classList.add("prototype-toast-anchored"),u.appendChild(c)):a.appendChild(c),window.setTimeout(()=>c.remove(),i.durationMs??1800)}const l0="aifa-110b-title-favicon-logo-mascot",Jp=()=>"diaoleme-prototype-buddy-care",Ml=()=>"diaoleme-prototype-selected-hair-style",En={none:{img:"./assets/buddy/hairstyles/dandelion.png",levelLabel:"Lv.5"},short:{img:"./assets/buddy/hairstyles/blue-bob.png",levelLabel:"Lv.8"},medium:{img:"./assets/buddy/hairstyles/ribbon.png",levelLabel:"Lv.10"},long:{img:"./assets/buddy/hairstyles/dandelion.png",levelLabel:"Lv.12"},curly:{img:"./assets/buddy/hairstyles/blue-bob.png",levelLabel:"Lv.14"},bun:{img:"./assets/buddy/hairstyles/ribbon.png",levelLabel:"Lv.18"}},d0={none:"蒲公英蓬蓬头",short:"星光短发",medium:"彩虹飘带",long:"飘逸长发",curly:"羊毛卷",bun:"丸子头"};function c0(a,r){const i=ye.getState(),l=ag(),c=i.reportHistory[0],u=Math.max(62,Math.min(98,Math.round((i.dropScore??82)+Math.min(i.reportHistory.length,6)))),p=Math.max(56,Math.min(96,Math.round((l.energy+l.love)/2))),f=p>=78?"Happy":p>=64?"Calm":"Need Care",h=r.getQuestCount(),y=Math.max(i.checkinDays.length,i.reportHistory.length?1:0,38),x=a.querySelector('[data-page="buddy"] .buddy-heading-new p');x&&(x.textContent=`陪伴你已经 ${y} 天啦 💗`);const _=a.querySelector('[data-page="buddy"] .buddy-heading-new .level');if(_){const S=Math.max(1,Math.min(9,1+Math.floor(i.points/400)));_.textContent=`Lv.${S}`}const $=a.querySelectorAll('[data-page="buddy"] .buddy-status .buddy-stat');if($.length>=3){const S=$[0].querySelector("strong"),E=$[0].querySelector(".buddy-meter span");S&&(S.textContent=`${u} / 100`),E&&(E.style.width=`${u}%`);const P=$[1].querySelector("strong"),N=$[1].querySelector(".buddy-meter span");P&&(P.textContent=`${l.energy} / 100`),N&&(N.style.width=`${l.energy}%`);const j=$[2].querySelector("strong"),V=$[2].querySelector(".buddy-meter span");j&&(j.textContent=f),V&&(V.style.width=`${p}%`)}Zp(a),p0(a,tg(i.unlockedHairStyles));const T=a.querySelectorAll('[data-page="buddy"] .buddy-action-list .buddy-action');T[0]&&!T[0].dataset.buddyAction&&(T[0].dataset.buddyAction="dress"),T[1]&&!T[1].dataset.buddyAction&&(T[1].dataset.buddyAction="feed");const M=a.querySelector('[data-page="buddy"] .buddy-report');if(M){const S=M.querySelector(".number"),E=M.querySelector("p");if(S){const P=c==null?void 0:c.count,N=P==="少量"||P==="中等"||P==="偏多"?P:"少量";S.textContent=N}E&&(E.textContent=(c==null?void 0:c.summary)||"大多是健康的毛发，状态很棒！")}const A=a.querySelector('[data-page="buddy"] .buddy-summary');if(A){const S=A.querySelector("p");S&&(S.textContent=`你的护理表现超过了 ${Math.min(96,60+h.done*4+i.checkinDays.length)}% 的用户，继续保持哦！`);const E=A.querySelectorAll(".summary-metrics strong");E[0]&&(E[0].textContent=`${i.checkinDays.length||7} 天`),E[1]&&(E[1].textContent=`${h.done} / ${Math.max(h.total,7)}`),E[2]&&(E[2].textContent=String(r.avgScore(i.reportHistory)||"优秀")),E[3]&&(E[3].textContent=l.energy>=78?"良好":"待补充")}}function Zp(a){const r=ye.getState(),i=tg(r.unlockedHairStyles),l=Fa.filter(f=>r.unlockedHairStyles.includes(f.id)).length,c=a.querySelector('[data-page="buddy"] .hair-card .section-title');c&&(c.innerHTML=`✦　解锁发型 <span class="badge">${l} / ${Fa.length} 已解锁</span>`);const u=Fa.map(f=>{const h=r.unlockedHairStyles.includes(f.id),y=f.id===i,x=En[f.id]||En.none,_=d0[f.id]||f.name,$=y?"使用中":h?x.levelLabel:`${x.levelLabel}　🔒`;return`<button class="${`hair-item${y?" selected":""}${h?"":" locked"}`}" data-unlock-id="${O(f.id)}" type="button"><img src="${O(x.img)}" alt="${O(_)}"><b>${O(_)}</b><small>${O($)}</small></button>`}).join(""),p=[12,14,18].map(f=>`<button class="hair-item locked" type="button" disabled><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.${f}　🔒</small></button>`).join("");Ee(a.querySelector("#skins"),u+p)}function u0(a){return(En[a]||En.none).img}function Qs(a){const r=ye.getState().unlockedHairStyles,i=a||(()=>{var u;const c=localStorage.getItem(Ml());return c&&r.includes(c)?c:r[r.length-1]||((u=Fa[0])==null?void 0:u.id)||"none"})(),l=u0(i);document.querySelectorAll(".ai-chat-bubble img, .ai-chat-header-avatar").forEach(c=>{c.getAttribute("src")!==l&&(c.src=l)})}function p0(a,r){const i=En[r]||En.none,l=a.querySelector('[data-page="buddy"] .buddy-character'),c=a.querySelector('[data-page="buddy"] .buddy-tip img');c&&(c.src=i.img),l&&r!=="none"&&(l.src="./assets/buddy/buddy-hero.png"),Qs(r)}function g0(a,r,i){var l;if(a==="dress"){Ue(r,"已打开造型选择，点击卡片可使用或解锁"),(l=r.querySelector("#skins"))==null||l.scrollIntoView({behavior:"smooth",block:"center"});return}if(a==="feed"){const c=ag();m0({energy:Math.min(100,c.energy+12),love:Math.min(100,c.love+6),feedCount:c.feedCount+1,lastFed:i()}),ye.getState().addPoints(3),Ue(r,"小发球吃饱啦：能量 +12，爱心 +6，XP +3");return}if(a==="diary"){ea(r,"diary"),Ue(r,"已打开 Buddy Diary");return}(a==="growth"||a==="journey")&&(ea(r,"journey"),Ue(r,"已打开成长记录"))}function eg(a){localStorage.setItem(Ml(),a)}function f0(a){eg(a),Qs(a)}function tg(a){var l;const r=localStorage.getItem(Ml());if(r&&a.includes(r))return r;const i=a[a.length-1]||((l=Fa[0])==null?void 0:l.id)||"none";return eg(i),i}function ag(){try{return{energy:68,love:86,feedCount:0,lastFed:null,...JSON.parse(localStorage.getItem(Jp())||"{}")}}catch{return{energy:68,love:86,feedCount:0,lastFed:null}}}function m0(a){localStorage.setItem(Jp(),JSON.stringify(a))}const h0=4,xn=6,y0=5;function op(){return'<div class="item scan-record-placeholder" aria-hidden="true"><span></span><b class="scan-record-text"><span class="scan-record-title">&nbsp;</span><small class="scan-record-meta">&nbsp;</small></b><span class="status">&nbsp;</span></div>'}function lp(a,r=!1,i=0){const l='<div class="item"><span>📷</span><b class="scan-record-text"><span class="scan-record-title">暂无记录</span><small class="scan-record-meta">上传图片后会出现在这里。</small></b><span class="status">--</span></div>';if(!a.length)return i<=0?l:l+Array.from({length:Math.max(0,i-1)},()=>op()).join("");const c=a.map(u=>{const p=O(u.id),f=r?"":` data-view-report="${p}" role="button" tabindex="0"`,h=typeof u.score_delta=="number"?u.score_delta>0?`↑${u.score_delta}`:u.score_delta<0?`↓${Math.abs(u.score_delta)}`:"→0":null,y=typeof u.exp_added=="number"&&u.exp_added>0?`+${u.exp_added}XP`:"",x=h?u.prev_title?`对比「${u.prev_title}」 ${h}`:`较上次 ${h}`:u.summary,_=y?`${u.score} 分 · ${y}`:`${u.score} 分`,$=O(u.title),T=O(x);return`<div class="item"${f}><span>${r?u.date.slice(5):"〰"}</span><b class="scan-record-text"><span class="scan-record-title" title="${$}">${O(u.title)}</span><small class="scan-record-meta" title="${T}">${O(x)}</small></b><button class="status" data-view-report="${p}" title="${O(_)}">${O(_)}</button></div>`}).join("");return i<=0||a.length>=i?c:c+Array.from({length:i-a.length},()=>op()).join("")}function ng(a){return a.reduce((r,i)=>(r[i.date]=r[i.date]||[],r[i.date].push(i),r),{})}function v0(a){const r=a.slice(0,7).reverse().map(l=>Math.max(18,Math.min(96,l.score))),i=[28,36,44,52,60];return(r.length?r:i).map(l=>`<span class="bar" style="height:${l}%"></span>`).join("")}function rg(a){var P;const r=ye.getState().reportHistory,i=h0,l=Math.max(1,Math.ceil(r.length/i)),c=Math.min(Math.max(Number(a.dataset.scanRecordPage||0),0),l-1);a.dataset.scanRecordPage=String(c);const u=r.slice(c*i,c*i+i),p=r.length<=i,f=`<div class="scan-record-pager"${p?' data-pager-idle="1"':""}><button class="pill" data-scan-record-page="${Math.max(0,c-1)}" ${c===0||p?"disabled":""}>上一页</button><small>${c+1} / ${l}</small><button class="pill" data-scan-record-page="${Math.min(l-1,c+1)}" ${c>=l-1||p?"disabled":""}>下一页</button></div>`,h=((P=r[0])==null?void 0:P.source_label)||"等待分析",y=O(h),x=O(b0(h)),_=r.length?Math.round(r.reduce((N,j)=>N+j.score,0)/r.length):null,$=_==null?null:Math.max(0,Math.min(99,_)),T=a.querySelector('[data-page="scan"] .scan-week-card')||a.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),M=T==null?void 0:T.querySelector(".scan-week"),A=`<h3>本周扫描数据 <small>最近记录</small></h3><div class="scan-week"><div><strong>${r.length}<small>次</small></strong><span>扫描次数</span></div><div><strong>${$??"--"}</strong><span>状态平均分</span></div><div><strong class="scan-source-value" title="${y}" data-full-source="${y}">${x}</strong><span>最新来源及结果</span></div></div>`;if(M&&T){const N=T.querySelector("h3");N&&(N.innerHTML="本周扫描数据 <small>最近记录</small>"),Ee(M,`
      <div><strong>${r.length}<small>次</small></strong><span>扫描次数</span></div>
      <div><strong>${$??"--"}</strong><span>状态平均分</span></div>
      <div><strong class="scan-source-value" title="${y}" data-full-source="${y}">${x}</strong><span>最新来源及结果</span></div>
    `)}else Ee(T,A);const S=a.querySelector('[data-page="scan"] .scan-history-card')||a.querySelector('[data-page="scan"] .grid .card.item-list'),E=a.querySelector('[data-page="scan"] .scan-history')||a.querySelector('[data-page="scan"] .scan-record-list');if(E&&S){const N=S.querySelector("h3");N&&(N.innerHTML='最近扫描记录 <a href="#" data-go="journey">查看全部 →</a>'),Ee(E,lp(u,!1,i)+f)}else Ee(S,`<h3>最近扫描记录</h3><div class="scan-record-list">${lp(u,!1,i)}</div>${f}`);sg(a,r)}function b0(a){const r=a.trim();return r?/本地|fallback|demo/i.test(r)?"本地兜底":/cc\s*club|openai|真实\s*AI|\bapi\b|compatible/i.test(r)?"真实 AI":/mock/i.test(r)?"Mock":/等待/.test(r)?"等待分析":r.length>6?"真实 AI":r:"等待分析"}function sg(a,r){const i=a.querySelector('[data-page="journey"]');if(!i)return;const l=ng(r),c=Object.keys(l).length,u=ye.getState().checkinDays.length,p=ye.getState().points,f=i.querySelectorAll(".journey-metrics strong");f.length>=3&&(c>0&&(f[0].textContent=String(c)),p>0&&(f[1].textContent=p.toLocaleString("en-US")),u>0&&(f[2].textContent=String(u)));const h=Number(i.dataset.journeyVisible||xn)||xn,y=r.length?Math.min(Math.max(h,xn),r.length):xn;i.dataset.journeyVisible=String(y);const x=i.querySelector("#timeline");if(x&&r.length){const $=r.slice(0,y),T=[],M=$.map((A,S)=>{const E=`${Math.max(0,Math.min(99,Math.round(A.score)))} 分`,P=typeof A.score_delta=="number"&&A.score_delta>0||A.score>=70?"timeline-reward green":"timeline-reward",N=x0(A,T);T.push(N);const[,j,V]=A.date.split("-"),K=S0(A.date);return`<article class="timeline-row-new${S===0?" selected":""}" data-view-report="${O(A.id)}"><div class="timeline-date"><b>${O(`${j}/${V}`)}</b><small>${O(K)}</small></div><span class="timeline-icon" aria-hidden="true">${N}</span><div class="timeline-copy"><b>${O(A.title)}</b><small>${O(A.summary)}</small></div><span class="${P}">${O(E)}</span></article>`}).join("");Ee(x,M)}const _=i.querySelector('[data-action="journey-load-more"]');if(_){const $=r.length>y;_.hidden=r.length===0||!$,_.disabled=!$,_.textContent=$?"加载更多　⌄":"已经看完啦～"}}const hr=["🌱","🎀","🫧","🍀"];function x0(a,r=[]){const i=`${a.title} ${a.summary} ${(a.tags||[]).join(" ")}`,l=i.toLowerCase();let c=null,u=null;if(/模糊|努力|看不清|看不清/.test(i)||/blur/.test(l)?(c="🌫️",u="💪"):/发量|守护|保护|稳住/.test(i)?(c="🛡️",u="✨"):/隐身|低调/.test(i)?(c="🫥",u="🌙"):/微观|桌面|观察|微风/.test(i)?(c="🔍",u="📷"):(a.score>=75||/稳|高光|闪耀|进步/.test(i))&&(c="⭐",u="🌟"),c&&!r.includes(c))return c;if(u&&!r.includes(u))return u;const p=w0(a.id||a.title||i);for(let f=0;f<hr.length;f+=1){const h=hr[(p+f)%hr.length];if(!r.includes(h))return h}return hr[p%hr.length]}function w0(a){let r=0;for(let i=0;i<a.length;i+=1)r=r*31+a.charCodeAt(i)>>>0;return r}function k0(a){const r=a.querySelector('[data-page="journey"]');if(!r)return{loaded:!1,exhausted:!0};const i=ye.getState().reportHistory,l=r.querySelector('[data-action="journey-load-more"]');l&&(l.disabled=!0,l.textContent="加载中…");const c=Number(r.dataset.journeyVisible||xn)||xn,u=Math.min(i.length,c+y0);return r.dataset.journeyVisible=String(u),sg(a,i),{loaded:u>c,exhausted:u>=i.length}}function S0(a){const r=["周日","周一","周二","周三","周四","周五","周六"],i=new Date(`${a}T12:00:00`);return Number.isNaN(i.getTime())?"":r[i.getDay()]||""}const E0=Math.round(Vp/1024/1024);function _0(a,r){const i=a.querySelector('[data-page="scan"]'),l=a.querySelector("#scanBtn"),c=a.querySelector("#uploadBtn"),u=a.querySelector("#scanCompleteBtn"),p=a.querySelector("#scanPercent"),f=(i==null?void 0:i.querySelector("[data-scan-card]"))||(i==null?void 0:i.querySelector(".scan-center"))||(i==null?void 0:i.querySelector('.card[style*="text-align:center"]')),h=document.createElement("input"),y=document.createElement("input");let x=null,_=null,$=null;const T=(X,Y=!1)=>{X.type="file",X.accept="image/*",Y&&X.setAttribute("capture","environment"),X.style.display="none",document.body.appendChild(X)};T(h,!0),T(y);const M=(X,Y="idle",se=!1)=>{const ne=f==null?void 0:f.querySelector("[data-analysis-status]"),pe=ne||document.createElement("div");pe.dataset.analysisStatus="true",pe.className=`scan-analysis-status is-${Y}`,pe.innerHTML=`<p class="scan-analysis-status-text">${O(X)}</p>${se?'<button type="button" class="pill primary scan-analysis-retry" data-analysis-retry>再试一次</button>':""}`,ne||f==null||f.appendChild(pe);const fe=pe.querySelector("[data-analysis-retry]");fe==null||fe.addEventListener("click",()=>{U()},{once:!0})},A=X=>{X.forEach(Y=>window.clearTimeout(Y)),X.length=0},S=X=>{_&&URL.revokeObjectURL(_),_=URL.createObjectURL(X);const Y=a.querySelector(".scanner-ring")||a.querySelector(".scan-orbit"),se=Y==null?void 0:Y.querySelector("[data-upload-preview]"),ne=se||document.createElement("img");ne.dataset.uploadPreview="true",ne.src=_,ne.alt="上传预览",Object.assign(ne.style,{position:"absolute",inset:"22px",width:"calc(100% - 44px)",height:"calc(100% - 44px)",objectFit:"cover",borderRadius:"50%",boxShadow:"0 18px 45px rgba(99, 75, 168, 0.22)",zIndex:"3"}),se||Y==null||Y.appendChild(ne);const pe=a.querySelector("#scanStateText");pe&&(pe.textContent="照片已选"),p&&(p.textContent="已选",p.style.zIndex="4"),u&&(u.style.display=""),M(`已选择：${X.name}，点击“完成”确认并开始 AI 分析。`)},E=()=>{var X;$==null||$.getTracks().forEach(Y=>Y.stop()),$=null,(X=a.querySelector("[data-camera-modal]"))==null||X.remove()},P=X=>{const Y=new File([X],`diaoleme-camera-${Date.now()}.jpg`,{type:"image/jpeg"});x=Y,S(Y),M("已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。"),E()},N=async()=>{var se;const X={video:{facingMode:{ideal:"environment"}},audio:!1};if((se=navigator.mediaDevices)!=null&&se.getUserMedia)return navigator.mediaDevices.getUserMedia(X);const Y=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return Y?new Promise((ne,pe)=>Y.call(navigator,X,ne,pe)):null},j=async()=>{var X,Y;try{if($=await N(),!$){M("此页面无相机权限，请检查吧。","error");return}const se=document.createElement("div");se.dataset.cameraModal="true",se.className="camera-capture-modal",se.innerHTML='<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>',a.appendChild(se);const ne=se.querySelector("video");ne&&(ne.srcObject=$),(X=se.querySelector("[data-camera-cancel]"))==null||X.addEventListener("click",E),(Y=se.querySelector("[data-camera-capture]"))==null||Y.addEventListener("click",()=>{var fe;if(!ne||ne.videoWidth===0)return;const pe=document.createElement("canvas");pe.width=ne.videoWidth,pe.height=ne.videoHeight,(fe=pe.getContext("2d"))==null||fe.drawImage(ne,0,0),pe.toBlob(re=>{re&&P(re)},"image/jpeg",.92)}),M("相机已打开，请拍照后自动上传。")}catch(se){console.error("[prototype] camera failed:",se),E(),M("此页面无相机权限，请检查吧。","error")}},V=()=>j(),K=()=>y.click(),ce=X=>{var ne;const Y=X.currentTarget,se=(ne=Y.files)==null?void 0:ne[0];if(Y.value="",!!se)try{Al(se),x=se,S(se)}catch(pe){x=null;const fe={not_image:"这个文件不是图片，请选择 JPG、PNG 等图片文件。",empty_file:"图片文件为空，请重新选择。",file_too_large:`图片有点大啦，请选择 ${E0}MB 以内的照片再试。`};M(fe[pe==null?void 0:pe.message]||"图片暂时读不出来，请换一张再试。","error")}},U=async()=>{if(!x){K(),M("请先选择或拍摄一张图片。");return}l&&(l.disabled=!0),c&&(c.disabled=!0),u&&(u.disabled=!0),M("分析中，正在叫醒后端小助手…","waiting");let X=10;p&&(p.textContent="10%");const Y=[];Y.push(window.setTimeout(()=>{M("还在路上～演示服务器可能刚睡醒（冷启动），再等几秒就好。","waiting")},3e3)),Y.push(window.setTimeout(()=>{M("还在努力分析中，请再稍等一下，不要离开本页哦。","waiting")},8e3));const se=window.setInterval(()=>{X=Math.min(X+8,96),p&&(p.textContent=`${X}%`)},140);try{const ne=await My(x);C0(ne),window.clearInterval(se),A(Y),yl(a,ne),r.renderStatefulSections(),ne.fallback_code==="BACKEND_UNREACHABLE"?(p&&(p.textContent="兜底"),M("后端暂时连不上（可能在冷启动）。已给你一份轻松兜底结果，也可以点下面再试一次。","error",!0)):ne.fallback_code?M("已生成 fallback 结果，可继续演示完整流程。","success"):M("AI 分析完成，结果已写入报告和历史记录。","success")}catch(ne){console.error("[prototype] analyze failed:",ne),window.clearInterval(se),A(Y),p&&(p.textContent="失败"),M("分析接口暂时不可用，可能是冷启动或网络抖动。点「再试一次」或稍后再上传就好。","error",!0)}finally{l&&(l.disabled=!1),c&&(c.disabled=!1),u&&(u.disabled=!1)}};return h.addEventListener("change",ce),y.addEventListener("change",ce),l==null||l.addEventListener("click",V),c==null||c.addEventListener("click",K),u==null||u.addEventListener("click",U),()=>{h.removeEventListener("change",ce),y.removeEventListener("change",ce),l==null||l.removeEventListener("click",V),c==null||c.removeEventListener("click",K),u==null||u.removeEventListener("click",U),E(),h.remove(),y.remove(),_&&URL.revokeObjectURL(_)}}function C0(a){const r=ye.getState();r.setAnalysis(a),r.addReport({id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),date:L0(),score:a.score,title:a.title,summary:a.summary,roast:a.roast,encouragement:a.encouragement,tags:a.tags,daily_task:a.daily_task,disclaimer:a.disclaimer,source:a.source,source_label:a.source_label,fallback_code:a.fallback_code,record_status:a.record_status,record_id:a.record_id,count:a.count,thickness:a.thickness,suggestions:a.suggestions})}function dp(){const a=ye.getState();return{score:a.dropScore??66,title:a.title,summary:a.summary,roast:a.roast,encouragement:a.encouragement,tags:a.tags.length?a.tags:["等待记录"],daily_task:a.dailyTask,disclaimer:a.disclaimer,source:a.source,source_label:a.sourceLabel,fallback_code:a.fallbackCode,record_status:a.recordStatus,record_id:a.recordId,count:a.count,thickness:a.thickness,suggestions:a.suggestions}}function ig(a){return a.querySelector('[data-page="scan"] [data-scan-card]')||a.querySelector('[data-page="scan"] .scan-center')||a.querySelector('[data-page="scan"] .card[style*="text-align:center"]')}function cp(a){var i;const r=ig(a);(i=r==null?void 0:r.querySelector("[data-analysis-result]"))==null||i.remove(),r==null||r.classList.remove("has-analysis-result")}function yl(a,r){const i=a.querySelector("#scanPercent"),l=ig(a);i&&(i.textContent=`${r.score}%`);const c=a.querySelector("#scanStateText");if(c&&(c.textContent="分析完成"),!l||ye.getState().dropScore==null)return;const u=l.querySelector("[data-analysis-result]");u==null||u.remove(),l.classList.add("has-analysis-result");const p=r.source_label||"未知来源",f=r.fallback_code?`<p class="analysis-source-detail">当前为明确 fallback（${O(r.fallback_code)}），不是实时 AI 分析</p>`:"",h=l.querySelector(".scanner-ring")||l.querySelector(".scan-orbit");h&&(h.style.filter="saturate(1.08)");const y=`
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-source">
        <span class="analysis-source-badge">${O(p)}</span>
      </div>
      ${f}
      <h3 class="scan-result-title">${O(r.title)}</h3>
      <p class="scan-result-summary">${O(r.summary)}</p>
      <div class="analysis-metrics">
        <div class="analysis-metric"><span class="big-number">${O(r.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${O(r.thickness)}</span><small>发质观感</small></div>
        <div class="analysis-metric"><span class="big-number">${O(r.score)}</span><small>趣味分数</small></div>
      </div>
      <p><b>温柔吐槽：</b>${O(r.roast)}</p>
      <p><b>今日任务：</b>${O(r.daily_task)}</p>
      <div class="analysis-tags">${r.tags.map(x=>`<span class="badge">${O(x)}</span>`).join("")}</div>
      <small>${O(r.disclaimer)}</small>
    </div>
  `;l.insertAdjacentHTML("beforeend",y)}function L0(){return new Date().toISOString().slice(0,10)}const vn=200,nl=["青铜","白银","黄金","铂金","钻石 III","钻石 II","钻石 I","王者"],R0=["一","二","三","四","五","六","日"];function Rn(a){const r=Math.max(0,a),i=Math.floor(r/vn)+1,l=Math.min(10,i),c=l>=10?vn:r%vn,u=l>=10?0:vn-c,p=l>=10?100:Math.round(c/vn*100);return{level:l,into:c,need:u,percent:p,max:vn}}function Zs(a){const r=Math.max(0,a),i=Math.min(nl.length-1,Math.floor(r/1e3)),l=r%1e3,c=1e3,u=Math.round(l/c*100);return{name:nl[i],current:l,max:c,percent:u,nextNeed:i>=nl.length-1?0:c-l}}function ft(){const a=new Date,r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}function og(a){const r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}function br(a=new Date){const r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),i=r.getDay();return r.setDate(r.getDate()+(i===0?-6:1-i)),R0.map((l,c)=>{const u=new Date(r);u.setDate(r.getDate()+c);const p=og(u);return{label:l,key:p,isToday:p===ft()}})}function zl(a,r=ft()){const i=new Set(a);let l=0;const c=new Date;for(i.has(r)||c.setDate(c.getDate()-1);;){const u=og(c);if(!i.has(u))break;l+=1,c.setDate(c.getDate()-1)}return l}const Ht=["daily","weekly","growth","special"],vl={daily:"每日任务",weekly:"每周任务",growth:"成长任务",special:"特别任务"},up=[10,10,15,15,20,20,25],$0=["💎","💎","☯","⚡","♥","🎁","☀"],T0=[{id:"daily-water",category:"daily",icon:"./assets/quests/icons/water.svg",title:"喝够 8 杯水",description:"充足的水分让头发更健康",current:6,target:8,reward:50,actionLabel:"去完成"},{id:"daily-sleep",category:"daily",icon:"./assets/quests/icons/sleep.svg",title:"23:30 前睡觉",description:"早睡是头发的修复时间",current:0,target:1,reward:60,actionLabel:"去完成"},{id:"daily-meal",category:"daily",icon:"./assets/quests/icons/meal.svg",title:"吃一份蔬果",description:"补充维生素，滋养发根",current:1,target:1,reward:50,actionLabel:"去完成"},{id:"daily-massage",category:"daily",icon:"./assets/quests/icons/massage.svg",title:"头皮按摩 5 分钟",description:"促进头皮血液循环",current:2,target:5,reward:50,actionLabel:"去完成"},{id:"daily-walk",category:"daily",icon:"./assets/quests/icons/walk.svg",title:"散步 20 分钟",description:"运动让身体和头发一起呼吸",current:1,target:1,reward:40,actionLabel:"去完成"}],P0={weekly:[{id:"weekly-scan-3",category:"weekly",icon:"📷",title:"完成 3 次记录",description:"给小发球攒一组本周观察素材。",current:0,target:3,reward:35,actionLabel:"记录本周"},{id:"weekly-sleep-4",category:"weekly",icon:"🌙",title:"4 天温柔早睡",description:"不卷到深夜，给头皮也放个小假。",current:0,target:4,reward:40,actionLabel:"打卡早睡"},{id:"weekly-share",category:"weekly",icon:"💬",title:"分享一次发球周报",description:"把本周小进步发给朋友，轻松晒一下。",current:0,target:1,reward:25,actionLabel:"去分享"},{id:"weekly-massage",category:"weekly",icon:"🪮",title:"完成 3 次头皮放松",description:"睡前 5 分钟，给自己按下暂停键。",current:0,target:3,reward:30,actionLabel:"开始放松"},{id:"weekly-water-3",category:"weekly",icon:"💧",title:"喝水小目标达标 3 天",description:"本周挑 3 天认真补水，头发和状态都更舒服。",current:0,target:3,reward:30,actionLabel:"去打卡"}],growth:[{id:"growth-first-report",category:"growth",icon:"🌱",title:"生成第一份种子报告",description:"上传照片后获得你的第一枚趣味称号。",current:0,target:1,reward:45,actionLabel:"去扫描"},{id:"growth-7-day",category:"growth",icon:"🔥",title:"连续记录 7 天",description:"把小习惯养成小成就，不求完美只求坚持。",current:0,target:7,reward:80,actionLabel:"点亮进度"},{id:"growth-unlock-style",category:"growth",icon:"🎀",title:"解锁一个新造型",description:"给小发球换套新皮肤，奖励认真生活的你。",current:0,target:1,reward:60,actionLabel:"去解锁"},{id:"growth-history",category:"growth",icon:"📒",title:"查看一次历史趋势",description:"回头看看，最近的自己已经很棒啦。",current:0,target:1,reward:25,actionLabel:"看趋势"},{id:"growth-compare",category:"growth",icon:"🔍",title:"完成一次轻松对比",description:"把最近两次记录放一起看看，发现一点小变化就够。",current:0,target:1,reward:40,actionLabel:"去对比"}],special:[{id:"special-spring",category:"special",icon:"🌸",title:"春风吹发季签到",description:"参与 8.1–8.31 赛季限时活动，领取赛季能量。",current:0,target:1,reward:50,actionLabel:"领取能量"},{id:"special-mood",category:"special",icon:"😊",title:"写下今日心情弹幕",description:"把压力吐槽给小发球听，轻轻放过自己。",current:0,target:1,reward:30,actionLabel:"写一句"},{id:"special-buddy",category:"special",icon:"☁️",title:"和 Buddy 互动一次",description:"摸摸小发球，让陪伴感上线。",current:0,target:1,reward:35,actionLabel:"去互动"},{id:"special-community",category:"special",icon:"✨",title:"逛逛社区治愈帖",description:"看看大家的小妙招，找到一点轻松感。",current:0,target:1,reward:25,actionLabel:"去看看"},{id:"special-sticky",category:"special",icon:"📌",title:"给自己贴一张治愈便签",description:"写一句今天对自己好的话，存进小日记。",current:0,target:1,reward:30,actionLabel:"去贴便签"}]},bl=100,A0="./assets/quests/reward-standing-mascot.png",N0="./assets/quests/tip-sitting-mascot.png",pp="./assets/quests/icons/gift.svg";let xl=null;function M0(a){xl=a}function z0(a,r){F0();const i=ye.getState(),l=Ua(r),c=na(r),u=l.filter(E=>c.has(E.id)).length,p=Ht.flatMap(Ua),f=U0(p),h=p.length?Math.round(f.done/p.length*100):0,y=Ua("daily").every(E=>na("daily").has(E.id)),x=zl(i.checkinDays);Ee(a.querySelector('[data-page="quests"] .quest-tabs-new'),Ht.map(E=>`<button type="button" class="quest-tab${E===r?" is-active":""}" data-quest-category="${E}">${vl[E]}</button>`).join("")),Ee(a.querySelector("#questList"),l.map(E=>j0(E,c.has(E.id))).join("")+q0(r,u,l.length,y));const _=a.querySelector("#weekRewards");_!=null&&_.classList.contains("reward-days")?Ee(_,br().map(({label:E,key:P,isToday:N},j)=>{const V=i.checkinDays.includes(P),K=up[j]??10,ce=$0[j]??"✦";return V?`<button class="reward-day claimed" type="button"><b>${O(E)}</b><i>✓</i><strong>已领取</strong><small>+${K} XP</small></button>`:N?`<button class="reward-day active" type="button"><b>${O(E)}</b><i>${ce}</i><strong class="today-label">今天</strong><small>+${K} XP</small></button>`:`<button class="reward-day" type="button"><b>${O(E)}</b><i>${ce}</i><span>+${K} XP</span></button>`}).join("")):Ee(_,br().map(({label:E,key:P},N)=>`<span class="badge">${i.checkinDays.includes(P)?"✓":E}<br><small>+${up[N]??10} XP</small></span>`).join(""));const $=a.querySelector('[data-page="quests"] .streak-card-new strong');if($)$.innerHTML=`${x} <small>天</small>`;else{const E=a.querySelector("[data-quests-streak-days]");E&&(E.textContent=`${x} 天`)}const T=["🍬","🧁","🍪","🍩","🍦","🍰","🎁"];Ee(a.querySelector("#streak"),br().map(({label:E,key:P},N)=>{const j=i.checkinDays.includes(P),V=N===6,K=V?"🎁":j?"✓":T[N]??"🍬";return`<span class="${j&&!V?"done":V?"gift":"pending"}"><b aria-hidden="true">${K}</b><small>${O(E)}</small></span>`}).join(""));const M=a.querySelector('[data-page="quests"] .progress-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(1)'),A=a.querySelector('[data-page="quests"] .tip-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(3)'),S=a.querySelector('[data-page="quests"] .overview-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(4)');if(M!=null&&M.classList.contains("progress-card-new")?Ee(M,`<h2>我的任务进度</h2>
      <div class="progress-content">
        <div>
          <p>本周完成度</p>
          <strong class="progress-big">${h}%</strong>
          <div class="progress-line"><i style="width:${h}%"></i></div>
          <p>完成 ${f.done}/${p.length} 个任务</p>
        </div>
        <div class="progress-ring" style="--pct:${h}%" aria-hidden="true">
          <img src="${A0}" alt="">
        </div>
      </div>`):Ee(M,`<h3>我的任务进度</h3><div class="big-number">${h}%</div><div class="meter"><div class="fill" style="--w:${h}%"></div></div><p>完成 ${f.done}/${p.length} 个任务</p><small>${vl[r]}：${u}/${l.length}</small>`),A!=null&&A.classList.contains("tip-card-new")?Ee(A,`<h2>任务小贴士</h2>
      <p class="tip-lead"><b>定期护理 + 健康生活习惯 = 健康的头发！</b></p>
      <p class="tip-body">保持好心情，规律作息，均衡饮食，<br>你的头发会越来越喜欢你哦～</p>
      <img class="tip-mascot" src="${N0}" alt="">`):Ee(A,'<h3>任务小贴士</h3><p>定期护理 + 健康生活习惯 = 健康的头发！保持好心情，规律作息，均衡饮食，你的头发会越来越喜欢你哦～</p><div class="mini-buddy"></div>'),S!=null&&S.classList.contains("overview-card-new")){const E=f.donePct,P=f.donePct+f.progressPct;Ee(S,`<h2>本周任务总览</h2>
      <div class="overview">
        <div class="quest-donut" data-total="${p.length}" style="--done-end:${E}%;--progress-end:${P}%"></div>
        <ul>
          <li><span><i class="dot done"></i> 已完成</span><b>${f.done} (${rl(f.done,p.length)}%)</b></li>
          <li><span><i class="dot progress"></i> 进行中</span><b>${f.inProgress} (${rl(f.inProgress,p.length)}%)</b></li>
          <li><span><i class="dot todo"></i> 未开始</span><b>${f.notStarted} (${rl(f.notStarted,p.length)}%)</b></li>
        </ul>
      </div>`)}else Ee(S,`<h3>本周任务总览</h3><div class="donut" data-label="${f.done}/${p.length}\\A 已完成"></div><p>${y?"每日建议已全部点亮，额外奖励已入账。":"今天再点亮一个小任务，就很不错啦。"}</p>`)}function O0(a,r,i){const l=Ua(a).find(u=>u.id===r);if(!l)return;const c=na(a);if(c.has(r)){Ue(i,"这个任务已经领取过啦");return}if(c.add(r),lg(a,c),ye.getState().addPoints(l.reward),Ue(i,`+${l.reward} XP · ${l.title}`),a==="daily"){const u=Ua("daily");u.length>0&&u.every(p=>c.has(p.id))&&localStorage.getItem(_n().taskBonusKey())!=="1"&&(localStorage.setItem(_n().taskBonusKey(),"1"),ye.getState().addPoints(bl),Ue(i,`每日任务全完成，额外 +${bl} XP · +1 Energy`))}}function I0(){const a=_n();localStorage.removeItem(a.taskKey()),localStorage.removeItem(a.taskBonusKey()),Ht.forEach(r=>localStorage.removeItem(a.questProgressKey(r)))}function D0(){const a=Ht.flatMap(Ua).length;return{done:Ht.reduce((i,l)=>i+na(l).size,0),total:a}}function Ua(a){return a==="daily"?T0:P0[a]}function na(a){try{return new Set(JSON.parse(localStorage.getItem(_n().questProgressKey(a))||"[]"))}catch{return new Set}}function gp(a){return Ht.includes(a)}function j0(a,r){const i=r||a.current>=a.target,l=i?a.target:a.current,c=a.target>0?Math.round(l/a.target*100):0,u=B0(a.icon)?`<img src="${O(a.icon)}" alt="">`:`<span class="quest-emoji" aria-hidden="true">${a.icon}</span>`,p=i?"":`+${a.reward} XP`,f=i?"✓ 已完成":O(a.actionLabel),h=i?'class="quest-do quest-btn done" type="button"':`data-quest-category="${a.category}" data-quest-id="${a.id}" class="quest-do quest-btn" type="button"`;return`<article class="quest-row">
    ${u}
    <div class="quest-copy"><b>${O(a.title)}</b><small>${O(a.description)}</small></div>
    <div class="quest-progress">
      <span class="quest-count">${l}/${a.target}</span>
      <div class="quest-meter"><i style="width:${c}%"></i></div>
    </div>
    <span class="quest-xp">${p}</span>
    <button ${h}>${f}</button>
  </article>`}function q0(a,r,i,l){const c=r>=i&&i>0;if(a==="daily")return`<section class="quest-card quest-bonus">
      <img src="${pp}" alt="">
      <b>${l?"今日任务全部完成！":"完成所有每日任务可获得额外奖励！"}</b>
      <span>✦ +${bl} XP</span>
      <span>⚡ +1 Energy</span>
      <button type="button">${c?"已点亮":"未完成"}</button>
    </section>`;const u=Math.max(20,i*10);return`<section class="quest-card quest-bonus">
    <img src="${pp}" alt="">
    <b>${vl[a]}完成度 ${r}/${i}</b>
    <span>✦ +${u} XP</span>
    <span></span>
    <button type="button">${c?"已点亮":"未完成"}</button>
  </section>`}function F0(){for(const a of Ht){const r=na(a);let i=!1;for(const l of Ua(a))l.current>=l.target&&!r.has(l.id)&&(r.add(l.id),i=!0);i&&lg(a,r)}}function U0(a){let r=0,i=0,l=0;for(const u of a)na(u.category).has(u.id)||u.current>=u.target?r+=1:u.current>0?i+=1:l+=1;const c=a.length||1;return{done:r,inProgress:i,notStarted:l,donePct:Math.round(r/c*100),progressPct:Math.round(i/c*100)}}function rl(a,r){return r?Math.round(a/r*100):0}function B0(a){return a.startsWith("./")||a.startsWith("/")||a.includes(".svg")||a.includes(".png")}function lg(a,r){localStorage.setItem(_n().questProgressKey(a),JSON.stringify([...r])),a==="daily"&&localStorage.setItem(_n().taskKey(),JSON.stringify([...r]))}function _n(){if(!xl)throw new Error("quest controller is not configured");return xl}const Me=aa("rewards-assets/"),ei=()=>"diaoleme-owned-rewards",ti=()=>"diaoleme-reward-purchase-records",ai=[{id:"flower",name:"樱花发箍",subtitle:"发型装扮",points:200,image:`${Me}reward-flower.png`,category:"发型装扮",unlockId:"medium"},{id:"starlight",name:"星光泡泡发型",subtitle:"发型装扮",points:350,image:`${Me}reward-starlight.png`,category:"发型装扮",unlockId:"curly"},{id:"serum",name:"生发精华液 30ml",subtitle:"实物好物",points:480,image:`${Me}reward-serum.png`,category:"护发好物"},{id:"healing",name:"治愈蘑菇帽",subtitle:"发行装扮",points:280,image:`${Me}reward-healing.png`,category:"发型装扮"},{id:"gift",name:"护发礼盒套装",subtitle:"实物好物",points:650,image:`${Me}reward-gift.png`,category:"护发好物"},{id:"lamp",name:"蒲公英小夜灯",subtitle:"限量周边",points:320,image:`${Me}reward-lamp.png`,category:"定制周边"},{id:"sprout",name:"嫩芽发型",subtitle:"发型装扮",points:250,image:`${Me}reward-sprout.png`,category:"发型装扮",unlockId:"long"},{id:"brush",name:"头皮按摩梳",subtitle:"实物好物",points:420,image:`${Me}reward-brush.png`,category:"护发好物"},{id:"cape",name:"银河披风",subtitle:"陪伴道具",points:500,image:`${Me}reward-cape.png`,category:"陪伴道具"},{id:"vip",name:"7天特权卡",subtitle:"成长特权",points:800,image:`${Me}reward-vip.png`,category:"成长特权"}],H0=["全部","发型装扮","护发好物","陪伴道具","成长特权","定制周边"];function X0(a){return H0.includes(a)}function W0(a){return a==="default"||a==="points-asc"||a==="points-desc"}function V0(a="全部",r="default"){let i=[...ai];return a!=="全部"&&(i=i.filter(l=>l.category===a)),r==="points-asc"?i.sort((l,c)=>l.points-c.points||l.name.localeCompare(c.name,"zh-CN")):r==="points-desc"&&i.sort((l,c)=>c.points-l.points||l.name.localeCompare(c.name,"zh-CN")),i}const Q0=[{level:1,name:"樱花发箍",image:`${Me}reward-flower.png`,marketId:"flower"},{level:2,name:"星光泡泡",image:`${Me}reward-starlight.png`,marketId:"starlight"},{level:3,name:"生发精华",image:`${Me}reward-serum.png`,marketId:"serum"},{level:4,name:"蘑菇小帽",image:`${Me}reward-healing.png`,marketId:"healing"},{level:5,name:"护发礼盒",image:`${Me}reward-gift.png`,marketId:"gift"},{level:6,name:"蒲公英灯",image:`${Me}reward-lamp.png`,marketId:"lamp"},{level:7,name:"嫩芽发型",image:`${Me}reward-sprout.png`,marketId:"sprout"},{level:8,name:"按摩木梳",image:`${Me}reward-brush.png`,marketId:"brush"},{level:9,name:"银河披风",image:`${Me}reward-cape.png`,marketId:"cape"},{level:10,name:"7天特权",image:`${Me}reward-vip.png`,marketId:"vip"},{level:11,name:"花瓣发卡",image:`${Me}reward-flower.png`,marketId:"flower"},{level:12,name:"星尘徽章",image:`${Me}reward-starlight.png`,marketId:"starlight"}];function Cr(){try{return new Set(JSON.parse(localStorage.getItem(ei())||"[]"))}catch{return new Set}}function K0(a){localStorage.setItem(ei(),JSON.stringify([...a]))}function Y0(){localStorage.removeItem(ei()),localStorage.removeItem(ti())}function dg(a,r,i=Cr()){return!!i.has(a.id)}function G0(a){return ai.find(r=>r.id===a)}function fp(a,r,i=Cr()){if(dg(a,[],i))return{owned:!0,canBuy:!1,status:"已拥有",need:0};const l=Math.max(0,a.points-r);return l===0?{owned:!1,canBuy:!0,status:"可兑换",need:0}:{owned:!1,canBuy:!1,status:`还差 ${l.toLocaleString("en-US")} XP`,need:l}}function J0(){if(typeof window>"u")return;const a="diaoleme-rewards-owned-sync-v3";window.localStorage.getItem(a)!=="1"&&(window.localStorage.removeItem(ei()),window.localStorage.removeItem(ti()),window.localStorage.setItem(a,"1"))}function cg(){try{return JSON.parse(localStorage.getItem(ti())||"[]")}catch{return[]}}function Z0(a){localStorage.setItem(ti(),JSON.stringify(a))}function ev(a){const r=ye.getState(),i=Cr();if(dg(a,r.unlockedHairStyles,i))return{ok:!1,message:`${a.name} 已经拥有啦`};if(r.points<a.points)return{ok:!1,message:`积分还差 ${a.points-r.points} XP`};const l=a.unlockId&&Fa.some(u=>u.id===a.unlockId)?Array.from(new Set([...r.unlockedHairStyles,a.unlockId])):r.unlockedHairStyles;ye.setState({points:r.points-a.points,unlockedHairStyles:l}),i.add(a.id),K0(i);const c=cg();return c.unshift({id:a.id,name:a.name,date:ft(),points:`-${a.points.toLocaleString("en-US")} XP`,status:"已兑换",image:a.image}),Z0(c.slice(0,20)),{ok:!0,message:`已兑换 ${a.name} · -${a.points} XP`}}function tv(){const a=cg().filter(i=>i.id!=="empty"&&i.name!=="还没有兑换记录");if(a.length)return a.slice(0,3);const r=Cr();return r.size?ai.filter(i=>r.has(i.id)).slice(0,3).map(i=>({id:i.id,name:i.name,date:ft(),points:`-${i.points.toLocaleString("en-US")} XP`,status:"已兑换",image:i.image})):[]}function av(a,r="全部",i="default"){J0();const l=ye.getState(),c=Rn(l.points),u=Cr(),p=l.checkinDays.includes(ft()),f=zl(l.checkinDays);Zp(a),a.querySelectorAll("[data-reward-category]").forEach(re=>{re.classList.toggle("active",re.dataset.rewardCategory===r)});const h=a.querySelector("[data-reward-sort]");h&&h.value!==i&&(h.value=i),a.querySelectorAll("[data-rewards-points]").forEach(re=>{re.textContent=l.points.toLocaleString("en-US")});const y=a.querySelector("[data-rewards-next-level]"),x=a.querySelector("[data-rewards-level-fill]");y&&(y.textContent=c.need>0?`距离下一等级还需 ${c.need.toLocaleString("en-US")} XP`:"已达当前演示等级上限"),x&&(x.style.width=`${c.percent}%`);const _=a.querySelector("[data-rewards-streak]");_&&(_.textContent=`已连续 ${f} 天`);const $=a.querySelector("[data-rewards-level-badge]");$&&($.textContent=c.level>=10?`Lv.${c.level} 已满级`:`Lv.${c.level} 成长中`);const T=a.querySelector("[data-rewards-overview-next]"),M=a.querySelector("[data-rewards-overview-ratio]"),A=a.querySelector("[data-rewards-overview-fill]");T&&(T.textContent=c.need>0?`距离 Lv.${Math.min(10,c.level+1)} 还差 ${c.need.toLocaleString("en-US")} XP`:"已达当前演示等级上限"),M&&(M.textContent=`${c.into.toLocaleString("en-US")} / ${c.max.toLocaleString("en-US")}`),A&&(A.style.width=`${c.percent}%`);const S=2,E=3,P=l.reportHistory.filter(re=>re.date===ft()).length,N=1,j=(p?1:0)+Math.min(S,E)+Math.min(P,N),V=1+E+N,K=(p?5:0)+3+(P>0?2:0),ce=a.querySelector("[data-rewards-today-badge]");ce&&(ce.textContent=`${Math.min(j,V)} / ${V} 已完成`);const U=a.querySelector("[data-rewards-today-xp]");U&&(U.textContent=`+${K} XP`);const X=a.querySelector("[data-rewards-today-tasks]");X&&(X.textContent=`${S} 项`);const Y=a.querySelector("[data-rewards-today-record]");Y&&(Y.textContent=`${P} 次`),Ee(a.querySelector("#rewardsTodayGrowth"),`
    <article class="today-growth-item">
      <div class="today-growth-item-head">
        <span class="today-growth-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="#7c67e4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg>
        </span>
        <div>
          <strong>完成今日待办</strong>
          <b>+3 XP</b>
        </div>
      </div>
      <div class="today-growth-item-meta">
        <div class="today-growth-bar"><i style="width:${Math.round(S/E*100)}%"></i></div>
        <span>${S} / ${E} 项</span>
      </div>
    </article>
    <article class="today-growth-item">
      <div class="today-growth-item-head">
        <span class="today-growth-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="#7c67e4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg>
        </span>
        <div>
          <strong>轻松记录头发状态</strong>
          <b>+2 XP</b>
        </div>
      </div>
      <div class="today-growth-item-meta">
        <div class="today-growth-bar"><i style="width:${Math.min(100,Math.round(P/N*100))}%"></i></div>
        <span>${P>=N?"今日已记录":`还差 ${Math.max(0,N-P)} 次`}</span>
      </div>
    </article>
  `);const se=a.querySelector("[data-rewards-checkin-hint]");se&&(se.innerHTML=p?"今日已打卡":"今日打卡可得 <b>+5 XP</b>");const ne=br();Ee(a.querySelector("#rewardsCheckin"),ne.map(({label:re,key:xe,isToday:me},B)=>{const ee=l.checkinDays.includes(xe),H=B===6;if(!ee&&(me||H)){const z=H?`<img class="gift-circle" src="${Me}gift-day.png" alt="礼物">`:'<span class="check-circle pending" aria-hidden="true"></span>';return`<button type="button" data-action="checkin" ${p?"disabled":""} aria-label="${p?"今日已打卡":"今日打卡"}">${z}<small>${re}</small></button>`}return`<div class="${ee?"is-done":""}${me?" is-today":""}">${ee?'<span class="check-circle done" aria-label="已打卡"><svg class="check-mark" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg></span>':'<span class="check-circle pending" aria-label="未打卡"></span>'}<small>${re}</small></div>`}).join(""));const pe=V0(r,i);Ee(a.querySelector("#shop"),pe.length?pe.map(re=>{const xe=fp(re,l.points,u),me=xe.owned?"owned":xe.canBuy?"can-buy":"locked",B=!xe.owned&&!xe.canBuy?`<img class="reward-lock-icon" src="${Me}icon-lock.png" alt="" aria-hidden="true">`:"";return`<button class="reward-card ${me}" type="button" data-reward-buy="${O(re.id)}" ${xe.owned?"disabled":""}>
      <div class="reward-image-wrap">
        <img class="reward-product-image" src="${O(re.image)}" alt="${O(re.name)}">
        ${B}
      </div>
      <div class="reward-copy">
        <strong>${O(re.name)}</strong>
        <span>${O(xe.status)}</span>
        <b>${re.points.toLocaleString("en-US")} XP</b>
      </div>
    </button>`}).join(""):'<div class="reward-empty">该分类暂无商品</div>'),Ee(a.querySelector("#rewardsGrowth"),Q0.map(re=>{const xe=G0(re.marketId),me=xe?fp(xe,l.points,u):{owned:!1,status:"还差 -- XP"},B=me.owned?"已领取":me.status;return`<button type="button" class="growth-reward ${me.owned?"active":""}">
      <img src="${O(re.image)}" alt="Lv.${re.level} ${O(re.name)}">
      <strong>Lv.${re.level}</strong>
      <b>${O(re.name)}</b>
      <span>${O(B)}</span>
    </button>`}).join(""));const fe=tv();Ee(a.querySelector("#rewardsRecords"),fe.length?fe.map(re=>`
    <div class="record-item">
      <img src="${O(re.image)}" alt="${O(re.name)}">
      <div><strong>${O(re.name)}</strong><span>${O(re.date)}</span></div>
      <div><b>${O(re.points)}</b><small>${O(re.status)}</small></div>
    </div>
  `).join(""):'<div class="record-empty">暂无兑换记录，去商城看看吧</div>')}const Ut=a=>aa(`league-avatars/${a}.png`),nv=a=>aa(`league-assets/${a}`),Ol=()=>"diaoleme-league-rank-metric",mp=["aria","bella","luna","mia","ray","sophia"];function Fs(a){let r=0;for(let i=0;i<a.length;i+=1)r=r*31+a.charCodeAt(i)>>>0;return Ut(mp[r%mp.length])}const rv="蒲公英小分队",sv=6,iv=30,ov="发光小队",lv=12420,sl=5e3,dv=2026,cv="8.1 - 8.31",uv=new Date(dv,7,31,23,59,59,999);function ja(a){return String(Math.max(0,a)).padStart(2,"0")}function pv(a=new Date){const r=Math.max(0,uv.getTime()-a.getTime()),i=Math.floor(r/1e3);return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),mins:Math.floor(i%3600/60),secs:i%60,totalMs:r}}function gv(a){return a.totalMs<=0?"赛季已结束":`剩余 ${a.days} 天 ${ja(a.hours)}:${ja(a.mins)}:${ja(a.secs)}`}const hp=new WeakMap;function fv(a){const r=hp.get(a);if(r)return r;const i=a.querySelector(".league-static-top span"),l=a.querySelector(".league-static-bottom span"),c=a.querySelector(".league-flip-top span"),u=a.querySelector(".league-flip-bottom span");if(!i||!l||!c||!u)return null;const p={el:a,staticTop:i,staticBottom:l,flipTop:c,flipBottom:u,current:null,busy:!1,timer:null};return hp.set(a,p),p}function ug(a,r){a.staticTop.textContent=r,a.staticBottom.textContent=r,a.flipTop.textContent=r,a.flipBottom.textContent=r,a.current=r,a.busy=!1,a.el.classList.remove("is-flipping")}function mv(a,r){if(a.current===null){ug(a,r);return}if(a.current===r||a.busy)return;a.busy=!0;const i=a.current;a.staticTop.textContent=r,a.staticBottom.textContent=i,a.flipTop.textContent=i,a.flipBottom.textContent=r,a.el.classList.remove("is-flipping"),a.el.offsetWidth,a.el.classList.add("is-flipping"),a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>{a.staticBottom.textContent=r,a.flipTop.textContent=r,a.flipBottom.textContent=r,a.el.classList.remove("is-flipping"),a.current=r,a.busy=!1,a.timer=null},720)}function yp(a,r=new Date,i=!0){const l=pv(r),c=a.querySelector("[data-league-season-range]");c&&(c.textContent=cv);const u={days:ja(l.days),hours:ja(l.hours),minutes:ja(l.mins),seconds:ja(l.secs)};Object.keys(u).forEach(f=>{const h=a.querySelector(`.league-flip-card[data-unit="${f}"]`);if(!h)return;const y=fv(h);y&&(i?mv(y,u[f]):ug(y,u[f]))});const p=a.querySelector("[data-league-battle-remain]");p&&(p.textContent=gv(l))}let wn=null,vr=null;function hv(a){const r=vr===a;vr=a,yp(a,new Date,r&&wn!=null),wn==null&&(wn=setInterval(()=>{vr&&yp(vr,new Date,!0)},1e3))}function yv(){wn!=null&&(clearInterval(wn),wn=null),vr=null}const vv=[{name:"Luna",role:"队长",weeklyXp:1840},{name:"Mia",role:"副队长",weeklyXp:1620},{name:"Ray",role:"活跃成员",weeklyXp:1380},{name:"Sophia",role:"活跃成员",weeklyXp:1260},{name:"Bella",role:"成长成员",weeklyXp:980},{name:"Aria",role:"成长成员",weeklyXp:920},{name:"Nora",role:"成员",weeklyXp:860},{name:"Echo",role:"成员",weeklyXp:820},{name:"June",role:"成员",weeklyXp:780},{name:"Quinn",role:"成员",weeklyXp:740},{name:"Iris",role:"成员",weeklyXp:700},{name:"Jade",role:"成员",weeklyXp:660},{name:"Kai",role:"成员",weeklyXp:620},{name:"Lynn",role:"成员",weeklyXp:580},{name:"Momo",role:"成员",weeklyXp:540},{name:"Nori",role:"成员",weeklyXp:500},{name:"Olive",role:"成员",weeklyXp:460},{name:"Piper",role:"成员",weeklyXp:420},{name:"Remy",role:"成员",weeklyXp:380},{name:"Sage",role:"成员",weeklyXp:340},{name:"Tori",role:"成员",weeklyXp:300},{name:"Uma",role:"成员",weeklyXp:280},{name:"Vivi",role:"成员",weeklyXp:260},{name:"Wren",role:"成员",weeklyXp:240},{name:"Yuki",role:"成员",weeklyXp:220},{name:"Zara",role:"成员",weeklyXp:200},{name:"Bo",role:"成员",weeklyXp:180}];function bv(a){return a<=0?420:Math.max(120,Math.min(1500,Math.round(a/18)))}function pg(){const a=ye.getState().points,r=bv(a),i=[...vv.map(p=>({...p,avatarSrc:Fs(`alliance:${p.name}`)})),{name:"You",role:"成长成员",weeklyXp:r,avatarSrc:Ut("you"),isMe:!0}].sort((p,f)=>f.weeklyXp-p.weeklyXp),l=i.reduce((p,f)=>p+f.weeklyXp,0),c=l%sl,u=Math.round(c/sl*100);return{name:rv,level:sv,memberCount:i.length,memberCap:iv,weeklyXp:l,myWeeklyXp:r,intoLevel:c,nextNeed:sl-c,percent:u,members:i,enemyName:ov,enemyWeeklyXp:lv}}const gg={青铜:"shield-bronze.png",白银:"shield-silver.png",黄金:"shield-gold.png",铂金:"shield-platinum.png","铂金 I":"shield-platinum-i-sm.png","铂金 II":"shield-platinum-ii.png","钻石 III":"shield-diamond.png","钻石 II":"shield-diamond-ii.png","钻石 I":"shield-diamond-i.png",王者:"shield-king.png","王者 I":"shield-king-i.png","王者 II":"shield-king-ii.png"};function xv(a){return gg[a]?a:a.startsWith("王者")?a.includes("II")?"王者 II":"王者 I":a.startsWith("铂金")?a.includes("II")?"铂金 II":"铂金 I":a.startsWith("钻石")?a.includes("III")?"钻石 III":a.includes("II")?"钻石 II":"钻石 I":a.startsWith("黄金")?"黄金":a.startsWith("白银")?"白银":(a.startsWith("青铜"),"青铜")}function Ks(a){const r=xv(a);return nv(gg[r]||"shield-bronze.png")}const wl=16,wv=.2,kv=["排行榜","我的联盟","好友排行","段位晋升"],Us=[{id:"total_xp",icon:"✦",title:"总 XP 排行",subtitle:"综合成长积分",column:"总 XP",tone:"purple"},{id:"hair_care",icon:"❀",title:"护发达人",subtitle:"头发健康分",column:"健康分",tone:"orange"},{id:"active_star",icon:"★",title:"活跃之星",subtitle:"任务完成数",column:"任务数",tone:"blue"},{id:"streak",icon:"⚡",title:"坚持不懈",subtitle:"连续打卡天数",column:"打卡天数",tone:"rose"},{id:"kindness",icon:"♡",title:"爱心大使",subtitle:"帮助伙伴次数",column:"帮助次数",tone:"green"}],Sv=Us.map(a=>a.id);function fg(a){return Sv.includes(a)}function Ev(){try{const a=localStorage.getItem(Ol());if(a&&fg(a))return a}catch{}return"total_xp"}function _v(a){try{localStorage.setItem(Ol(),a)}catch{}}function Cv(){localStorage.removeItem(Ol())}function kl(a,r){return a==="total_xp"?`${r.toLocaleString("en-US")} XP`:a==="hair_care"?`${r} 分`:a==="active_star"?`${r} 个`:a==="streak"?`${r} 天`:`${r} 次`}function Lv(a){const r=ye.getState();if(a==="total_xp")return Math.max(r.points,0);if(a==="hair_care"){if(r.dropScore!=null)return Math.round(r.dropScore);if(r.reportHistory.length){const i=r.reportHistory.reduce((l,c)=>l+c.score,0)/r.reportHistory.length;return Math.round(i)}return 78}return a==="active_star"?Ht.reduce((i,l)=>i+na(l).size,0):a==="streak"?r.checkinDays.length:Math.max(3,Math.min(18,Math.floor(r.points/800)+r.checkinDays.length))}function Rv(a){const r=ye.getState();if(a==="total_xp")return r.checkinDays.length?`${r.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！";if(a==="hair_care")return r.dropScore!=null?`最近状态分 ${Math.round(r.dropScore)}`:"轻松记录，保持观察节奏";if(a==="active_star"){const i=Ht.reduce((l,c)=>l+na(c).size,0);return i?`本周已完成 ${i} 个任务`:"去 Quests 点亮一个小任务吧"}return a==="streak"?r.checkinDays.length?`已连续打卡 ${r.checkinDays.length} 天`:"今天打卡就能上榜":"给伙伴一点鼓励，爱心会回来的"}function $v(a,r){if(!r.length)return 1;let i=r.length;for(let y=0;y<r.length;y++)if(a>=r[y].points){i=y;break}const l=i+1,u=(i===0?null:r[i-1])??(i>=r.length?r[r.length-1]:null);if(!u)return l;const p=u.points,f=Math.max(0,p-a);return(p>0?f/p>wv:f>0)?99:i<r.length?l:wl}function Bs(a="total_xp"){const r={Luna:{name:"Luna",level:"Lv.6",tier:"王者 I",tierTone:"gold",avatarSrc:Ut("luna")},Mia:{name:"Mia",level:"Lv.5",tier:"王者 II",tierTone:"gold",avatarSrc:Ut("mia")},Ray:{name:"Ray",level:"Lv.5",tier:"钻石 I",tierTone:"purple",avatarSrc:Ut("ray")},Sophia:{name:"Sophia",level:"Lv.5",tier:"钻石 II",tierTone:"purple",avatarSrc:Ut("sophia")},Bella:{name:"Bella",level:"Lv.4",tier:"铂金 I",tierTone:"blue",avatarSrc:Ut("bella")},Aria:{name:"Aria",level:"Lv.4",tier:"铂金 II",tierTone:"blue",avatarSrc:Ut("aria")}},c={total_xp:[{name:"Luna",note:"头发是生命的种子 🌱",points:28760,trend:"↑ 1",trendTone:"up"},{name:"Mia",note:"每天进步 1% ✨",points:25480,trend:"↓ 1",trendTone:"down"},{name:"Ray",note:"慢慢来，比较更重要 💜",points:22140,trend:"—",trendTone:"flat"},{name:"Sophia",note:"关注头皮，从现在开始",points:18900,trend:"↑ 2",trendTone:"up"},{name:"Bella",note:"保持心情愉悦～",points:16520,trend:"↓ 1",trendTone:"down"},{name:"Aria",note:"爱自己，从发起 ❤️",points:15320,trend:"—",trendTone:"flat"}],hair_care:[{name:"Sophia",note:"本周平均状态分 96",points:96,trend:"↑ 2",trendTone:"up"},{name:"Aria",note:"光线稳、角度好，记录很轻松",points:93,trend:"↑ 1",trendTone:"up"},{name:"Luna",note:"连续 5 次保持 90+",points:91,trend:"—",trendTone:"flat"},{name:"Bella",note:"洗护节奏稳定",points:88,trend:"↓ 1",trendTone:"down"},{name:"Mia",note:"记录质量持续提升",points:85,trend:"↑ 3",trendTone:"up"},{name:"Ray",note:"保持轻松观察就好",points:82,trend:"—",trendTone:"flat"}],active_star:[{name:"Ray",note:"本周完成 42 个任务",points:42,trend:"↑ 1",trendTone:"up"},{name:"Bella",note:"每日任务全点亮",points:38,trend:"↑ 2",trendTone:"up"},{name:"Mia",note:"成长任务推进很快",points:35,trend:"—",trendTone:"flat"},{name:"Aria",note:"特别任务也不落下",points:31,trend:"↓ 1",trendTone:"down"},{name:"Sophia",note:"每周任务完成率 90%",points:28,trend:"↑ 1",trendTone:"up"},{name:"Luna",note:"任务节奏刚刚好",points:24,trend:"—",trendTone:"flat"}],streak:[{name:"Aria",note:"连续打卡 46 天",points:46,trend:"↑ 1",trendTone:"up"},{name:"Sophia",note:"连续打卡 39 天",points:39,trend:"—",trendTone:"flat"},{name:"Bella",note:"连续打卡 33 天",points:33,trend:"↑ 2",trendTone:"up"},{name:"Ray",note:"连续打卡 27 天",points:27,trend:"↓ 1",trendTone:"down"},{name:"Luna",note:"连续打卡 21 天",points:21,trend:"↑ 1",trendTone:"up"},{name:"Mia",note:"连续打卡 18 天",points:18,trend:"—",trendTone:"flat"}],kindness:[{name:"Mia",note:"本周帮助伙伴 36 次",points:36,trend:"↑ 3",trendTone:"up"},{name:"Ray",note:"给队友点赞从不缺席",points:31,trend:"↑ 1",trendTone:"up"},{name:"Aria",note:"联盟里最会鼓励人",points:28,trend:"—",trendTone:"flat"},{name:"Luna",note:"分享任务小技巧",points:24,trend:"↓ 1",trendTone:"down"},{name:"Sophia",note:"暖心留言达人",points:21,trend:"↑ 2",trendTone:"up"},{name:"Bella",note:"默默给大家加能量",points:17,trend:"—",trendTone:"flat"}]}[a].map(($,T)=>{const M=r[$.name];return{rank:T+1,name:M.name,level:M.level,note:$.note,points:$.points,scoreText:kl(a,$.points),tier:M.tier,tierTone:M.tierTone,trend:$.trend,trendTone:$.trendTone,avatarSrc:M.avatarSrc,isMe:!1}}),u=Lv(a),p=ye.getState().points,f=Zs(p),h=f.name.startsWith("王者")?"gold":f.name.startsWith("钻石")?"purple":"blue";c.push({rank:wl,name:"You",level:`Lv.${Rn(p).level}`,note:Rv(a),points:u,scoreText:kl(a,u),tier:f.name,tierTone:h,trend:"↑ 1",trendTone:"up",avatarSrc:Ut("you"),isMe:!0});const y=c.filter($=>!$.isMe).sort(($,T)=>$.points!==T.points?T.points-$.points:$.rank-T.rank).map(($,T)=>({...$,rank:T+1})),x=c.find($=>$.isMe),_=x?$v(x.points,y):wl;return x?[...y,{...x,rank:_}]:y}function Tv(a,r="排行榜",i="total_xp"){const l=ye.getState(),c=Zs(l.points),u=pg(),p=Bs("hair_care").find(X=>!X.isMe),f=Bs("kindness").find(X=>!X.isMe),h=Bs("active_star").find(X=>!X.isMe),y=a.querySelector("[data-award-hair]"),x=a.querySelector("[data-award-kindness]"),_=a.querySelector("[data-award-active]");y&&(y.textContent=(p==null?void 0:p.name)??"--"),x&&(x.textContent=(f==null?void 0:f.name)??"--"),_&&(_.textContent=(h==null?void 0:h.name)??"--"),a.querySelectorAll("[data-league-tab]").forEach(X=>{X.classList.toggle("active",X.dataset.leagueTab===r)});const $=a.querySelector("[data-league-tier-name]"),T=a.querySelector("[data-league-tier-progress]"),M=a.querySelector("[data-league-tier-fill]"),A=a.querySelector("[data-league-tier-badge]"),S=a.querySelector("[data-league-alliance-level]"),E=a.querySelector("[data-league-alliance-members]"),P=a.querySelector("[data-league-my-contrib]"),N=a.querySelector("[data-league-alliance-fill]"),j=a.querySelector("[data-league-alliance-note]"),V=a.querySelector("[data-league-ally-xp]"),K=a.querySelector("[data-league-enemy-xp]"),ce=a.querySelector("[data-league-ally-name]"),U=a.querySelector("[data-league-enemy-name]");$&&($.textContent=c.name),T&&(T.textContent=`⭐ ${c.current} / ${c.max}`),M&&(M.style.width=`${c.percent}%`),A&&(A.src=Ks(c.name),A.alt=`${c.name}段位徽章`),S&&(S.textContent=`Lv.${u.level}`),E&&(E.textContent=`${u.memberCount} / ${u.memberCap}`),P&&(P.textContent=`${u.myWeeklyXp.toLocaleString("en-US")} XP`),N&&(N.style.width=`${u.percent}%`),j&&(j.textContent=`距离 Lv.${u.level+1} 还需 ${u.nextNeed.toLocaleString("en-US")} XP`),ce&&(ce.textContent=u.name),U&&(U.textContent=u.enemyName),V&&(V.textContent=u.weeklyXp.toLocaleString("en-US")),K&&(K.textContent=u.enemyWeeklyXp.toLocaleString("en-US")),hv(a),Ee(a.querySelector("#leagueRankContent"),Pv(r,i))}function Pv(a,r){return a==="我的联盟"?Nv():a==="好友排行"?Mv():a==="段位晋升"?zv():Av(r)}function Av(a){const r=Us.find(i=>i.id===a)??Us[0];return`
    <div class="ranking-layout">
      <aside class="category-nav">
        <div class="category-nav-head">
          <span>排行维度</span>
          <button type="button" class="category-nav-all">全部</button>
        </div>
        <div class="category-nav-list">
          ${Us.map(i=>`
            <button class="category-nav-item ${i.id===a?"active":""}" type="button" data-league-metric="${i.id}">
              <span class="category-icon tone-${i.tone}" aria-hidden="true">${i.icon}</span>
              <span class="category-copy">
                <b>${O(i.title)}</b>
                <small>${O(i.subtitle)}</small>
              </span>
              <span class="category-arrow" aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>
      </aside>
      <div class="ranking-card">
        <div class="table-head"><span>排名</span><span>玩家</span><span>段位</span><span>${O(r.column)}</span><span>趋势</span></div>
        <div class="table-body">${Bs(a).map(mg).join("")}</div>
        <div class="refresh-note">◷ ${O(r.title)} · mock 数据，每 10 分钟更新一次</div>
      </div>
    </div>
  `}function Nv(){const a=pg(),r=Ht.reduce((c,u)=>c+na(u).size,0),i=Math.round(a.memberCount/a.memberCap*100);return`
    <div class="league-mock-grid alliance-mock">
      ${[["联盟等级",`Lv.${a.level}`,`距离 Lv.${a.level+1} 还需 ${a.nextNeed.toLocaleString("en-US")} XP`,`${a.percent}%`],["本周任务",`${r} 个`,r>0?"完成任务可为联盟积累贡献":"去完成任务，为联盟添一份力",`${Math.min(100,Math.max(18,r*12))}%`],["成员活跃",`${a.memberCount} / ${a.memberCap}`,`本周联盟战累计 ${a.weeklyXp.toLocaleString("en-US")} XP`,`${i}%`]].map(([c,u,p,f])=>`
        <section class="league-mock-card">
          <span>${O(c)}</span>
          <b>${O(u)}</b>
          <p>${O(p)}</p>
          <div class="league-mock-progress"><i style="width:${O(f)}"></i></div>
        </section>
      `).join("")}
      <section class="league-mock-card wide">
        <div class="league-mock-title">
          <b>联盟成员贡献</b>
          <small>${O(a.name)} · ${a.memberCount}/${a.memberCap} · 本周合计 ${a.weeklyXp.toLocaleString("en-US")} XP</small>
        </div>
        <div class="league-mini-list alliance-member-scroll">
          ${a.members.map(c=>`
            <div class="${c.isMe?"is-me":""}">
              <img class="league-avatar" src="${O(c.avatarSrc)}" alt="${O(c.name)}" loading="lazy" decoding="async">
              <b>${O(c.name)}${c.isMe?"（我）":""}<small>${O(c.role)}</small></b>
              <strong>${c.weeklyXp.toLocaleString("en-US")} XP</strong>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Mv(){const a=ye.getState(),r=a.points,i=Zs(r),l=i.name.startsWith("王者")?"gold":i.name.startsWith("钻石")?"purple":"blue";return`
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${[...[{rank:1,name:"Nora",level:"Lv.5",note:"睡眠打卡稳定",points:20680,scoreText:"20,680 XP",tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:Fs("friend:Nora"),isMe:!1},{rank:2,name:"Echo",level:"Lv.4",note:"本周完成 9 个任务",points:18440,scoreText:"18,440 XP",tier:"铂金 I",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:Fs("friend:Echo"),isMe:!1},{rank:3,name:"June",level:"Lv.4",note:"护发建议执行率 86%",points:17210,scoreText:"17,210 XP",tier:"铂金 II",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:Fs("friend:June"),isMe:!1},{rank:7,name:"You",level:`Lv.${Rn(r).level}`,note:a.checkinDays.length?`${a.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！",points:r,scoreText:kl("total_xp",r),tier:i.name,tierTone:l,trend:"↑ 1",trendTone:"up",avatarSrc:Ut("you"),isMe:!0}]].sort((p,f)=>f.points-p.points).map((p,f)=>({...p,rank:f+1})).map(mg).join("")}</div>
      <div class="refresh-note">好友排行中 You 的 XP 已与 UserStore 同步</div>
    </div>
  `}function zv(){const a=ye.getState(),r=Zs(a.points),i=Rn(a.points),l=["青铜","白银","黄金","铂金","钻石 III","钻石 II","钻石 I","王者"].map((c,u)=>{const p=u*1e3,f=a.points>=p,h=u===0?"完成第一次扫描":f?`已达到 ${p.toLocaleString("en-US")} XP`:`再获得 ${Math.max(0,p-a.points)} XP`;return[c,h,f]});return`
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <img class="league-tier-current-shield" src="${O(Ks(r.name))}" alt="${O(r.name)}">
        <b>${O(r.name)}</b>
        <p>当前总 XP ${a.points.toLocaleString("en-US")} · Lv.${i.level}${r.nextNeed>0?`，再获得 ${r.nextNeed} XP 可晋升`:"，已达演示段位上限"}。</p>
        <div class="league-mock-progress"><i style="width:${r.percent}%"></i></div>
      </section>
      <section class="league-tier-road">
        ${l.map(([c,u,p])=>`
          <div class="${p?"done":""}">
            <img class="league-tier-road-shield" src="${O(Ks(String(c)))}" alt="${O(String(c))}">
            <b>${O(String(c))}<small>${O(String(u))}</small></b>
          </div>
        `).join("")}
      </section>
    </div>
  `}function mg(a){const r=a.isMe?"you-rank":a.rank===1?"gold":a.rank===2?"silver":a.rank===3?"bronze":"normal",i=Ks(a.tier);return`
    <div class="league-ranking-row ${a.isMe?"current-user":""}" role="row">
      <div class="rank-cell" role="cell"><span class="rank-badge ${r}">${a.rank}</span></div>
      <div class="player-cell" role="cell">
        ${a.avatarSrc?`<img class="league-avatar" src="${O(a.avatarSrc)}" alt="${O(a.name)} 的头像" loading="lazy" decoding="async">`:'<span class="avatar-dot"></span>'}
        <div class="player-copy">
          <div class="player-name">${O(a.name)} <span class="level">${O(a.level)}</span>${a.isMe?'<span class="mini-crown" title="当前用户">●</span>':""}</div>
          <div class="motto">${O(a.note)}</div>
        </div>
      </div>
      <div class="tier-cell" role="cell">
        <img class="tier-emblem-icon" src="${O(i)}" alt="${O(a.tier)}">
        <span>${O(a.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${O(a.scoreText)}</div>
      <div class="trend-cell ${a.trendTone}" role="cell">${O(a.trend)}</div>
    </div>
  `}const Ov=()=>`diaoleme-prototype-tasks-${ft()}`,Iv=()=>`diaoleme-prototype-task-bonus-${ft()}`,Dv=a=>`diaoleme-prototype-quest-progress-${a}-${ft()}`,jv=["all","happy","calm","anxious","tired"],qv=a=>jv.includes(a),hg=["关注","最新","热门","精华"],Fv=a=>hg.includes(a),yg="diaoleme-community-user-posts";function Uv(){const a=ol.useRef(null);return ol.useEffect(()=>{let r=document.getElementById("diaoleme-prototype-style");r||(r=document.createElement("style"),r.id="diaoleme-prototype-style",document.head.appendChild(r)),r.textContent=`${s0}
${fb}`;let i=()=>{};return a.current&&(a.current.innerHTML=n0,new Function(r0)(),i=Bv(a.current)),()=>{i(),a.current&&(a.current.innerHTML="")}},[]),il.jsx("div",{ref:a})}function Bv(a){M0({getSuggestions:pb,taskKey:Ov,taskBonusKey:Iv,questProgressKey:Dv});let r="daily",i="排行榜",l=Ev(),c="关注",u="all",p=6,f="全部",h="default";const y=()=>Hv(a,r,i,l,c,u,p,f,h),x=_0(a,{renderStatefulSections:y}),_=cb();ea(a,"home"),y();const $=ye.subscribe(y);Py(20).then(A=>{A.length&&ye.getState().mergeRemoteHistory(A)});const T=A=>{var zt,rt,Ot;const S=A.target,E=S.closest("[data-quest-category]"),P=S.closest("[data-league-tab]"),N=S.closest("[data-league-metric]"),j=S.closest("[data-community-tab]"),V=S.closest("[data-diary-mood]"),K=S.closest('[data-action="diary-load-more"]'),ce=S.closest('[data-action="journey-load-more"]'),U=S.closest("[data-quest-id]"),X=S.closest('[data-action="checkin"]'),Y=S.closest("[data-unlock-id]"),se=S.closest("[data-reward-buy]"),ne=S.closest("[data-reward-category]"),pe=S.closest("[data-growth-scroll]"),fe=S.closest("[data-view-report]"),re=S.closest("[data-view-day]"),xe=S.closest("[data-share-report]"),me=S.closest("[data-go]"),B=S.closest('[data-action="reset-progress"]'),ee=S.closest("[data-scan-record-page]"),H=S.closest('[data-action="journey-share"]'),w=S.closest('[data-action="share-to-community"]'),z=S.closest('[data-action="open-journey"]'),de=S.closest("[data-buddy-action]"),ge=S.closest("#guideBtn"),ve=S.closest("[data-post-like]"),G=S.closest("[data-post-comments]"),he=S.closest("[data-league-season-reward]"),ke=S.closest("[data-league-season-reward-close]"),Se=a.querySelector("[data-league-season-reward-panel]"),Ie=a.querySelector("[data-league-season-reward]");if(he&&Se&&Ie){const we=Se.hasAttribute("hidden");Se.toggleAttribute("hidden",!we),Ie.setAttribute("aria-expanded",we?"true":"false");return}if(ke&&Se&&Ie){Se.setAttribute("hidden",""),Ie.setAttribute("aria-expanded","false");return}if(Se&&Ie&&!Se.hasAttribute("hidden")&&!S.closest("[data-league-season-reward-panel]")&&(Se.setAttribute("hidden",""),Ie.setAttribute("aria-expanded","false")),me!=null&&me.dataset.go&&(me.dataset.go==="scan"&&!fe&&cp(a),ea(a,me.dataset.go)),E!=null&&E.dataset.questCategory&&gp(E.dataset.questCategory)&&(r=E.dataset.questCategory,y()),P!=null&&P.dataset.leagueTab&&kv.includes(P.dataset.leagueTab)&&(i=P.dataset.leagueTab,y(),Ue(a,`已切换至${i}`)),N!=null&&N.dataset.leagueMetric&&fg(N.dataset.leagueMetric)&&(l=N.dataset.leagueMetric,_v(l),y()),ne!=null&&ne.dataset.rewardCategory&&X0(ne.dataset.rewardCategory)&&(f=ne.dataset.rewardCategory,y(),Ue(a,f==="全部"?"已显示全部商品":`已筛选：${f}`,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"})),se!=null&&se.dataset.rewardBuy){const we=ai.find(_e=>_e.id===se.dataset.rewardBuy);if(we){const _e=ev(we);y(),Ue(a,_e.message,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"})}}if(pe!=null&&pe.dataset.growthScroll){const we=Number(pe.dataset.growthScroll),_e=a.querySelector("#rewardsGrowth");if(_e&&Number.isFinite(we)&&we!==0){const ie=_e.querySelector(".growth-reward"),Be=((ie==null?void 0:ie.offsetWidth)||112)+10;_e.scrollBy({left:we*Be,behavior:"smooth"})}}if(j!=null&&j.dataset.communityTab&&Fv(j.dataset.communityTab)&&(c=j.dataset.communityTab,y(),Ue(a,`已切换至${c}`)),V!=null&&V.dataset.diaryMood&&qv(V.dataset.diaryMood)&&(u=V.dataset.diaryMood,p=6,y(),Ue(a,u==="all"?"已显示全部日记":`已筛选：${(zt=V.textContent)==null?void 0:zt.trim()}`)),K&&(p+=6,y()),ce){A.preventDefault();const we=k0(a),_e=a.querySelector("#timeline");_e==null||_e.scrollTo({top:_e.scrollHeight,behavior:"smooth"}),we.exhausted&&Ue(a,"已经看完啦～")}if(U!=null&&U.dataset.questId&&U.dataset.questCategory&&gp(U.dataset.questCategory)&&(O0(U.dataset.questCategory,U.dataset.questId,a),y()),X){const we=ye.getState().checkinDays.length;ye.getState().markCheckinToday();const _e=ye.getState().checkinDays.length;y(),Ue(a,_e>we?"今日打卡成功 +5 XP":"今日已经打过卡啦")}if(Y){const we=Fa.find(_e=>_e.id===Y.dataset.unlockId);if(we){const _e=ye.getState().unlockedHairStyles.includes(we.id),ie=ye.getState().unlockHairStyle(we.id,we.cost);ie&&f0(we.id),Ue(a,ie?`${_e?"已换上":"已解锁并换上"} ${we.name}`:`积分还差 ${we.cost-ye.getState().points}`),y()}}if(fe!=null&&fe.dataset.viewReport){ye.getState().viewReport(fe.dataset.viewReport),ea(a,"scan"),yl(a,dp()),Ue(a,"已打开这份扫描报告");return}if(re!=null&&re.dataset.viewDay){ye.getState().viewDayReport(re.dataset.viewDay),ea(a,"scan"),yl(a,dp()),Ue(a,"已打开当天最新报告");return}if(xe!=null&&xe.dataset.shareReport){A.preventDefault();const we=bp({reportId:xe.dataset.shareReport});c="最新",ea(a,"community"),y(),Ue(a,we.message);return}if(ee!=null&&ee.dataset.scanRecordPage&&(a.dataset.scanRecordPage=ee.dataset.scanRecordPage,rg(a)),B&&confirm("重置所有进度、积分、打卡和历史记录？")&&(ye.getState().resetAll(),I0(),Y0(),Cv(),l="total_xp",cp(a),y()),ge||H||w){A.preventDefault();const we=bp();c="最新",ea(a,"community"),y(),Ue(a,we.message);return}if(z&&ea(a,"journey"),ve!=null&&ve.dataset.postLike&&(lb(ve.dataset.postLike),bg(a,c)),G!=null&&G.dataset.postComments){const we=a.querySelector(`[data-comments-extra-for="${G.dataset.postComments}"]`);if(we){const _e=!we.classList.contains("collapsed");we.classList.toggle("collapsed",_e);const ie=Number(((Ot=(rt=G.textContent)==null?void 0:rt.match(/\d+/))==null?void 0:Ot[0])||0);G.textContent=_e?`💬 ${ie} · 展开`:`💬 ${ie} · 收起`}}de!=null&&de.dataset.buddyAction&&(g0(de.dataset.buddyAction,a,ft),y())};document.addEventListener("click",T);const M=A=>{const E=A.target.closest("select[data-reward-sort]");E&&W0(E.value)&&(h=E.value,y(),Ue(a,`已按${h==="points-asc"?"积分从低到高":h==="points-desc"?"积分从高到低":"默认排序"}排列`,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"}))};return document.addEventListener("change",M),()=>{x(),_(),yv(),$(),document.removeEventListener("click",T),document.removeEventListener("change",M)}}function Hv(a,r="daily",i="排行榜",l="total_xp",c="最新",u="all",p=6,f="全部",h="default"){Xv(a),c0(a,{avgScore:gb,buildTrendBars:v0,getQuestCount:D0,todayKey:ft}),z0(a,r),rg(a),eb(a,u,p),bg(a,c),av(a,f,h),Tv(a,i,l),ub(a)}function Xv(a){const r=ye.getState(),i=Rn(r.points),l=a.querySelector("[data-home-points]"),c=a.querySelector("[data-home-level]"),u=a.querySelector("[data-home-level-fill]"),p=a.querySelector("[data-home-next-level]");l&&(l.textContent=r.points.toLocaleString("en-US")),c&&(c.textContent=`Lv.${i.level}`),u&&u.style.setProperty("--w",`${i.percent}%`),p&&(p.textContent=i.need>0?`⭐ 再获得 ${i.need.toLocaleString("en-US")} XP 升级`:"⭐ 已达当前演示等级上限")}function Wv(a){return a>=75?{key:"happy",label:"开心",emoji:"😊"}:a>=60?{key:"calm",label:"平静",emoji:"🧘"}:a>=45?{key:"anxious",label:"焦虑",emoji:"😟"}:{key:"tired",label:"疲惫",emoji:"😫"}}function Vv(a,r){const i=r[0]||"";return/按摩|护理|头皮/.test(i)?{emoji:"🪮",tone:"mint",src:"./assets/buddy/hairstyles/dandelion.png"}:/睡眠|早睡|放松/.test(i)?{emoji:"🌙",tone:"lavender",src:"./assets/diary/diary-sunset-hero.jpg"}:/运动|打卡|坚持/.test(i)?{emoji:"🌱",tone:"sprout",src:"./assets/buddy/hairstyles/blue-bob.png"}:a==="happy"?{emoji:"✨",tone:"sunny",src:"./assets/diary/diary-sunset-hero.jpg"}:a==="calm"?{emoji:"🍃",tone:"mint",src:"./assets/buddy/hairstyles/dandelion.png"}:a==="anxious"?{emoji:"💭",tone:"cloud",src:"./assets/buddy/hairstyles/blue-bob.png"}:{emoji:"🕯️",tone:"warm",src:"./assets/shared-brand/brand-avatar-tile.png"}}function vp(a){return a==="all"?"./assets/diary/icons/mood-all.svg":a==="happy"?"./assets/diary/icons/mood-happy.svg":a==="calm"?"./assets/diary/icons/mood-calm.svg":a==="anxious"?"./assets/diary/icons/mood-anxious.svg":"./assets/diary/icons/mood-tired.svg"}const Qv=[{key:"all",label:"全部"},{key:"happy",label:"开心"},{key:"calm",label:"平静"},{key:"anxious",label:"焦虑"},{key:"tired",label:"疲惫"}],Hs=aa("assets/shared-brand/brand-avatar-tile.png"),Bt={dandelion:aa("assets/community/avatars/dandelion.png"),strawberry:aa("assets/community/avatars/strawberry.png"),mint:aa("assets/community/avatars/mint.png"),sunflower:aa("assets/community/avatars/sunflower.png"),me:aa("assets/community/avatars/me.png")};function Kv(a){var i,l;const r=String(a||"").trim();if(!r)return Hs;if(/assets\/community\/avatars\//.test(r))return r;if(/league-avatars\/(luna|bella|mia|sophia|you)\.png/i.test(r)){const c=(l=(i=r.match(/league-avatars\/(luna|bella|mia|sophia|you)\.png/i))==null?void 0:i[1])==null?void 0:l.toLowerCase();return{luna:Bt.dandelion,bella:Bt.strawberry,mia:Bt.mint,sophia:Bt.sunflower,you:Bt.me}[c||""]||Hs}return/buddy\/hairstyles\//.test(r)?Hs:r}function Yv(a,r){const i=a[0];if(a.length===1)return i.title;const l=a.reduce((c,u)=>u.score>c.score?u:c,i);return r>=75?`今天整体挺稳：${l.title}`:r<50?`今天先温柔一点：${i.title}`:`今日小结（${a.length} 次记录）：${i.title}`}function Gv(a,r){const i=a[0],l=[i.summary];a.length>1?l.push(`这一天共整理了 ${a.length} 次 Scan，平均状态分 ${r}。`):l.push(`状态分 ${r}，掉发量 ${i.count}。`);const c=i.suggestions[0]||i.daily_task;return c&&l.push(`轻任务：${c}`),l.join(" ")}function Jv(a){const r=ng(a);return Object.keys(r).sort((i,l)=>l.localeCompare(i)).map(i=>{const l=[...r[i]].sort((f,h)=>h.id.localeCompare(f.id)),c=Math.round(l.reduce((f,h)=>f+h.score,0)/l.length),u=Wv(c),p=Vv(u.key,l.flatMap(f=>f.tags));return{date:i,reports:l,score:c,mood:u,title:Yv(l,c),snippet:Gv(l,c),thumbEmoji:p.emoji,thumbTone:p.tone,thumbSrc:p.src,primaryReportId:l[0].id}})}function Zv(a){const r={happy:0,calm:0,anxious:0,tired:0};a.forEach(l=>{r[l.mood.key]+=1});const i=a.length||1;return{counts:r,percents:{happy:Math.round(r.happy/i*100),calm:Math.round(r.calm/i*100),anxious:Math.round(r.anxious/i*100),tired:Math.round(r.tired/i*100)}}}function eb(a,r="all",i=6){const l=ye.getState().reportHistory,c=Jv(l),u=r==="all"?c:c.filter(U=>U.mood.key===r),p=u.slice(0,i),f=c[0],h=Zv(c),y=(f==null?void 0:f.mood)||{label:"开心",emoji:"😊"},x=a.querySelector('[data-page="diary"] .diary-hero-new'),_=x==null?void 0:x.querySelector(".date-mood");if(_&&(_.innerHTML=`<span>${f?tb(f.date):"5月18日 · 星期日"}</span><span>${y.emoji} ${y.label}　⌄</span>`),Ee(a.querySelector("#diaryMoodFilters"),Qv.map(({key:U,label:X})=>`<button class="${r===U?"active":""}" data-diary-mood="${U}" type="button"><img src="${O(vp(U))}" alt=""><small>${X}</small></button>`).join("")),c.length===0){Ee(a.querySelector("#diaryFeedTitle"),"共 24 篇日记　　<small>最新在前⌄</small>");const U=a.querySelector("#diaryLoadMore");U&&(U.hidden=!1);return}const $=a.querySelector("#diaryCalendarTitle");if($){const U=new Date,X=U.toLocaleString("en-US",{month:"long"});$.textContent=`‹　 ${X} ${U.getFullYear()}　 ›`}Ee(a.querySelector("#calendar"),db(l,c));const T=h.percents.happy,M=T+h.percents.calm,A=M+h.percents.tired,S=A+h.percents.anxious,E=a.querySelector("#diaryMoodDonut");E&&(E.dataset.label=`${c.length}
篇日记`,E.style.background=`conic-gradient(#65c982 0 ${T}%, #8b5cf6 ${T}% ${M}%, #d37ae7 ${M}% ${A}%, #f59e0b ${A}% ${S}%, #aeb6d0 ${S}% 100%)`),Ee(a.querySelector("#diaryMoodLegend"),`<li><span>🟢 开心</span><b>${h.percents.happy}%</b></li><li><span>🟣 平静</span><b>${h.percents.calm}%</b></li><li><span>🟪 疲惫</span><b>${h.percents.tired}%</b></li><li><span>🟠 焦虑</span><b>${h.percents.anxious}%</b></li><li><span>⚪ 其他</span><b>${Math.max(0,100-T-h.percents.calm-h.percents.tired-h.percents.anxious)}%</b></li>`),Ee(a.querySelector("#diaryFeedTitle"),`共 ${u.length} 篇日记　　<small>最新在前⌄</small>`),Ee(a.querySelector("#diaries"),p.length?p.map(U=>{const X=U.date.slice(8),Y=Number(U.date.slice(5,7));return`<article class="diary-row-new" data-view-day="${O(U.date)}" role="button" tabindex="0">
            <div class="diary-date"><strong>${O(X)}</strong><small>${Y}月</small></div>
            <div class="diary-mood-col"><img class="mood-icon" src="${O(vp(U.mood.key))}" alt="${O(U.mood.label)}"><small class="mood-label">${O(U.mood.label)}</small></div>
            <div class="diary-copy"><b>${O(U.title)}</b><p>${O(U.snippet)}</p></div>
            <img class="diary-thumb" src="${O(U.thumbSrc)}" alt="">
            <button class="diary-menu" type="button" data-view-report="${O(U.primaryReportId)}" title="查看当天报告">•••</button>
          </article>`}).join(""):`<div class="diary-empty"><span>📖</span><b>${r==="all"?"还没有日记":"这个心情还没有日记"}<small>${r==="all"?"去 Scan 完成一次上传后，这里会按天整理成 blog 小结。":"换个心情筛选，或继续记录新的一天。"}</small></b><button class="pill primary" data-go="scan">去上传今天的记录</button></div>`);const P=a.querySelector("#diaryLoadMore");P&&(P.hidden=u.length<=p.length,P.textContent="加载更多日记　⌄");const N=["护理","头皮按摩","睡眠","营养","运动","心情","焦虑"],j=l.flatMap(U=>U.tags),V=[...new Set([...N.filter(U=>j.includes(U)),...j,...N])].slice(0,7);Ee(a.querySelector('[data-page="diary"] .keyword-card .word-cloud'),V.map(U=>`<span>${O(U)}</span>`).join(""));const K=c.find(U=>U.mood.key==="happy")||c[c.length-1],ce=a.querySelector("#diaryMemoryCard");ce&&K&&Ee(ce,`<h2>回忆精选　<small>更多回忆 ›</small></h2><div class="memory-image" style="background-image:url('${O(K.thumbSrc)}')"><span>第一篇日记 ⚡</span></div><blockquote>“${O(K.snippet.slice(0,48))}…”　💗</blockquote>`)}function tb(a){const r=new Date(`${a}T12:00:00`);if(Number.isNaN(r.getTime()))return a;const i=["周日","周一","周二","周三","周四","周五","周六"][r.getDay()];return`${Number(a.slice(5,7))}月${Number(a.slice(8))}日 · ${i}`}const ab=[{id:"checkin7",name:"小蒲公英",level:"Lv.6",body:`今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～
坚持护理真的会有改变，相信时间！🌱`,media:"📋",avatar:Bt.dandelion,mediaUrls:["./assets/diary/diary-sunset-hero.jpg"],likes:128,comments:["我也在做 7 天挑战，一起坚持！","这种轻松记录真的比焦虑刷帖舒服。","打卡第七天太有成就感了！"],tag:"连续打卡",createdAt:Date.now()-1e3*60*60*26,featured:!0,following:!0},{id:"massage",name:"爱吃草莓",level:"Lv.4",body:`分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠 😊
推荐给大家试试～`,media:"🪮",avatar:Bt.strawberry,likes:96,comments:["求一个手法教程！","睡前按摩 + 早睡，感觉小发球都开心了。"],tag:"头皮护理",createdAt:Date.now()-1e3*60*60*8,featured:!1,following:!0},{id:"slowday",name:"薄荷味的风",level:"Lv.6",body:"最近压力有点大，掉发也跟着严重了…深呼吸、运动、喝水，给自己一些温柔的时间 🍀",media:"🌿",avatar:Bt.mint,likes:76,comments:["抱抱，先把记录坚持下来就很棒。","今天也给自己一点松弛感。"],tag:"情绪管理",createdAt:Date.now()-1e3*60*60*3,featured:!0,following:!0},{id:"rewardhair",name:"向日葵",level:"Lv.3",body:"新发型解锁啦！看着宝宝一点点成长出来的碎发，成就感满满！💪",media:"🌱",avatar:Bt.sunflower,mediaUrls:["./assets/buddy/hairstyles/dandelion.png","./assets/buddy/hairstyles/blue-bob.png","./assets/buddy/hairstyles/ribbon.png"],likes:143,comments:["这个发型也太可爱了！","奖励机制好有动力，我也要攒 XP。"],tag:"新发型解锁",createdAt:Date.now()-1e3*60*60*50,featured:!0,following:!0}];function nb(a){return a>=4e3?"Lv.7":a>=3e3?"Lv.6":a>=2e3?"Lv.5":a>=1200?"Lv.4":a>=600?"Lv.3":a>=200?"Lv.2":"Lv.1"}function vg(){try{const a=JSON.parse(localStorage.getItem(yg)||"[]");return Array.isArray(a)?a.filter(r=>r&&typeof r.id=="string"&&typeof r.body=="string"):[]}catch{return[]}}function rb(a){localStorage.setItem(yg,JSON.stringify(a.slice(0,40)))}function sb(){return[...vg(),...ab]}function ib(a){const r=sb();return a==="关注"?r.filter(i=>i.following||i.fromJourney).sort((i,l)=>l.createdAt-i.createdAt):a==="热门"?[...r].sort((i,l)=>l.likes-i.likes||l.createdAt-i.createdAt):a==="精华"?r.filter(i=>i.featured).sort((i,l)=>l.likes-i.likes):[...r].sort((i,l)=>l.createdAt-i.createdAt)}function ob(){const a=document.querySelectorAll(".journey-metrics strong"),r=(i,l)=>{if(!i)return l;const c=Number(String(i.textContent||"").replace(/,/g,"").trim());return Number.isFinite(c)?c:l};return a.length>=3?{dayCount:r(a[0],32),points:r(a[1],1620),streak:r(a[2],12)}:{dayCount:32,points:1620,streak:12}}function bp(a){const r=ye.getState(),i=a!=null&&a.reportId?r.reportHistory.find(y=>y.id===a.reportId):r.reportHistory[0],{dayCount:l,points:c,streak:u}=ob(),p=vg();if(i&&p.some(y=>y.reportId===i.id))return{ok:!0,message:"已分享到Community"};const f=i?a!=null&&a.reportId?`我的今日旅程：${i.title}（${i.score} 分）。${i.summary}`:`分享我的护发旅程：已记录 ${l} 天，连续 ${u} 天，累计 ${c} XP。最近一次是「${i.title}」${i.score} 分，${i.summary}`:`分享我的护发旅程：已记录 ${l} 天，连续 ${u} 天，累计 ${c} XP，继续轻松坚持～`,h={id:`journey-${Date.now().toString(36)}`,name:"我",level:nb(c),body:f,media:"✨",avatar:Bt.me,likes:0,comments:["加油，一起慢慢变好～"],tag:(i==null?void 0:i.tags[0])||"旅程分享",createdAt:Date.now(),featured:!1,following:!0,fromJourney:!0,reportId:i==null?void 0:i.id};return rb([h,...p]),{ok:!0,message:"已分享到Community"}}function bg(a,r="最新"){const i=xg();Ee(a.querySelector("#communityTabs")||a.querySelector('[data-page="community"] .tabs'),`${hg.map(u=>`<button class="${u===r?"active":""}" data-community-tab="${u}">${u}</button>`).join("")}<select><option>全部动态</option></select>`);const l=ib(r),c=u=>{const p=Date.now()-u;if(p<1e3*60*60)return`${Math.max(1,Math.round(p/(1e3*60)))} 分钟前`;if(p<1e3*60*60*24)return`昨天 ${new Date(u).getHours().toString().padStart(2,"0")}:${new Date(u).getMinutes().toString().padStart(2,"0")}`;const f=new Date(u);return`${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`};Ee(a.querySelector("#posts"),l.length?l.map(u=>{var _;const p=i.has(u.id),f=u.likes+(p?1:0),h=Kv(u.avatar),y=(_=u.mediaUrls)!=null&&_.length?`<div class="community-media">${u.mediaUrls.map($=>`<img src="${O($)}" alt="">`).join("")}</div>`:"",x=u.fromJourney?`${O(u.level)}　 Journey`:`${O(u.level)}　 ${c(u.createdAt)}`;return`<article class="community-post community-glass">
      <img class="community-post-avatar" src="${O(h)}" alt="" loading="eager" decoding="async" fetchpriority="high" onerror="this.onerror=null;this.src='${O(Hs)}'">
      <div class="community-post-copy">
        <h3>${O(u.name)} <small>${x}</small></h3>
        <p>${O(u.body).replace(/\n/g,"<br>")}</p>
        <span class="community-tag"># ${O(u.tag)}</span>
      </div>
      ${y}
      <div class="community-post-actions">
        <span role="button" tabindex="0" data-post-like="${O(u.id)}"><img src="./assets/community/icons/heart.svg" alt="">${f}</span>
        <span role="button" tabindex="0" data-post-comments="${O(u.id)}"><img src="./assets/community/icons/comment.svg" alt="">${u.comments.length}</span>
        <span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span>
      </div>
    </article>`}).join(""):`<div class="item journey-empty"><span>🌱</span><b>${r}还没有内容<small>去 Journey 分享一次旅程，或切换其他 Tab 看看。</small></b><button class="pill primary" data-action="share-to-community">分享到 Community</button></div>`)}function xg(){try{return new Set(JSON.parse(localStorage.getItem("diaoleme-community-likes")||"[]"))}catch{return new Set}}function lb(a){const r=xg();r.has(a)?r.delete(a):r.add(a),localStorage.setItem("diaoleme-community-likes",JSON.stringify([...r]))}function db(a,r=[]){var $;const i=new Map(r.map(T=>[T.date,T.mood.key])),l=new Map;a.forEach(T=>{l.has(T.date)||l.set(T.date,T)});const c=new Date,u=c.getFullYear(),p=c.getMonth(),f=new Date(u,p,1).getDay(),h=new Date(u,p+1,0).getDate(),y=[],x=new Date(u,p,0).getDate();for(let T=0;T<f;T+=1)y.push(`<span class="muted">${x-f+T+1}</span>`);for(let T=1;T<=h;T+=1){const M=`${u}-${String(p+1).padStart(2,"0")}-${String(T).padStart(2,"0")}`,A=l.get(M),S=i.get(M),E=M===ft()||!!(A&&M===(($=r[0])==null?void 0:$.date)),P=[A||S?"has-mood":"",S?`mood-${S}`:"",E?"selected":"",M===ft()?"today":""].filter(Boolean).join(" "),N=A?` class="${P}" data-view-day="${O(M)}" role="button" tabindex="0" title="${A.score} 分 ${O(A.title)}"`:P?` class="${P}"`:"";y.push(`<span${N}>${T}</span>`)}const _=y.length%7===0?0:7-y.length%7;for(let T=1;T<=_;T+=1)y.push(`<span class="muted">${T}</span>`);return y.join("")}function cb(a){const r=document.createElement("div");r.className="ai-chat-widget",r.dataset.aifa110b=l0,r.innerHTML=`
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手"><img src="./assets/logo-mascot.png" alt=""><span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><img class="ai-chat-header-avatar" src="./assets/logo-mascot.png" alt=""><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `,document.body.appendChild(r),Qs();const i=r.querySelector(".ai-chat-bubble"),l=r.querySelector("[data-chat-form]"),c=r.querySelector("[data-chat-input]"),u=r.querySelector("[data-chat-messages]"),p=r.querySelector("[data-chat-close]"),f=[{role:"assistant",content:"你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。"}];let h=!1,y=!1,x=0,_=0,$=0,T=0;const M="头发丝正在认真想…",A=()=>{u.innerHTML=f.map(U=>`<div class="ai-chat-msg ${U.role}">${O(U.content)}</div>`).join(""),u.scrollTop=u.scrollHeight},S=()=>{const X=Math.min(360,window.innerWidth-24),Y=Math.min(520,window.innerHeight-24);r.style.setProperty("--ai-chat-w",`${X}px`),r.style.setProperty("--ai-chat-h",`${Y}px`),r.style.left="auto",r.style.top="auto",r.style.right="12px",r.style.bottom="12px"},E=U=>{const X=U??!r.classList.contains("open");r.classList.toggle("open",X),X&&(Qs(),S(),c.focus())},P=U=>{if(r.classList.contains("open"))return;h=!0,y=!1,x=U.clientX,_=U.clientY;const X=r.getBoundingClientRect();$=X.left,T=X.top,i.setPointerCapture(U.pointerId)},N=U=>{if(!h)return;const X=U.clientX-x,Y=U.clientY-_;if(Math.abs(X)+Math.abs(Y)<=6)return;y=!0;const se=Math.max(12,Math.min(window.innerWidth-r.offsetWidth-12,$+X)),ne=Math.max(12,Math.min(window.innerHeight-r.offsetHeight-12,T+Y));r.style.left=`${se}px`,r.style.top=`${ne}px`,r.style.right="auto",r.style.bottom="auto"},j=U=>{h=!1,i.hasPointerCapture(U.pointerId)&&i.releasePointerCapture(U.pointerId)},V=()=>{y||E(!0)},K=()=>{r.classList.contains("open")&&S()},ce=async U=>{U.preventDefault();const X=c.value.trim();if(!X)return;c.value="",c.disabled=!0;const Y=l.querySelector("button");Y&&(Y.disabled=!0),f.push({role:"user",content:X},{role:"assistant",content:M}),A();const se=window.setTimeout(()=>{var ne;((ne=f[f.length-1])==null?void 0:ne.content)===M&&(f[f.length-1]={role:"assistant",content:"还在连线中～演示服务器可能刚睡醒，再等几秒就好。"},A())},3e3);try{const ne=$y(ye.getState().reportHistory),pe=f.filter(re=>!(re.role==="assistant"&&(re.content===M||re.content.startsWith("还在连线中")))).slice(-8),fe=await Ty(pe,{reportContext:ne});window.clearTimeout(se),fe.fallback_code==="CHAT_BACKEND_UNREACHABLE"?f[f.length-1]={role:"assistant",content:`${fe.reply}

（后端暂时连不上，可能在冷启动。你可以稍后再发一句试试。）`}:f[f.length-1]={role:"assistant",content:fe.reply}}catch{window.clearTimeout(se),f[f.length-1]={role:"assistant",content:"我这边暂时没有连上 AI 服务（可能在冷启动）。先完成一次轻松记录也很好；想再聊的话，稍后再发一句就行。"}}c.disabled=!1,Y&&(Y.disabled=!1),A(),c.focus()};return A(),i.addEventListener("pointerdown",P),i.addEventListener("pointermove",N),i.addEventListener("pointerup",j),i.addEventListener("click",V),p.addEventListener("click",()=>E(!1)),l.addEventListener("submit",ce),window.addEventListener("resize",K),()=>{i.removeEventListener("pointerdown",P),i.removeEventListener("pointermove",N),i.removeEventListener("pointerup",j),i.removeEventListener("click",V),l.removeEventListener("submit",ce),window.removeEventListener("resize",K),r.remove()}}function ub(a){const r=ye.getState(),i=r.checkinDays.includes(ft()),l=zl(r.checkinDays),c=new Set(r.reportHistory.map(S=>S.date)).size,u=br(),p=a.querySelector('[data-page="me"] #streak');p&&Ee(p,u.map(({label:S,key:E},P)=>{const N=r.checkinDays.includes(E);return`<span class="badge${N?" done":P===6?" gift":""}"><b>${N?"✓":P===6?"🎁":""}</b><small>${S}</small></span>`}).join(""));const f=a.querySelector("[data-quests-streak-days]");f&&(f.textContent=`${l} 天`),Ee(a.querySelector("#checkin"),u.map(({label:S,key:E},P)=>{const N=r.checkinDays.includes(E);return`<span class="badge${N?" done":P===6?" gift":""}"><b>${N?"✓":P===6?"🎁":""}</b><small>${S}</small></span>`}).join("")+`<button class="pill ${i?"":"primary"}" data-action="checkin">${i?"今日已打卡":"今日打卡 +5"}</button><button class="pill" data-action="reset-progress">重置</button>`);const h=Rn(r.points),y=a.querySelector("[data-me-points]"),x=a.querySelector("[data-me-streak]"),_=a.querySelector("[data-me-history-days]"),$=a.querySelector("[data-me-total-xp]"),T=a.querySelector("[data-me-streak-count]"),M=a.querySelector("[data-me-level-badge]"),A=a.querySelector("[data-me-level]");y&&(y.textContent=`${r.points.toLocaleString("en-US")} XP`),x&&(x.textContent=`连续 ${l} 天`),_&&(_.textContent=String(c)),$&&($.textContent=r.points.toLocaleString("en-US")),T&&(T.textContent=String(l)),M&&(M.textContent=`Lv.${h.level}`),A&&(A.textContent=`Lv.${h.level}`)}function pb(){const a=ye.getState().suggestions;return a.length?a:["上传一张照片生成专属建议","今晚提前 30 分钟休息","洗头时水温尽量温和"]}function gb(a){return a.length?Math.round(a.reduce((r,i)=>r+i.score,0)/a.length):null}const fb=`
  .main {
    padding-top: 8px;
  }

  .topbar {
    margin-bottom: 14px;
  }

  .page-title h2 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: bolder;
  }

  .page-title p {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.35;
  }

  [data-page="league"] .grid.two-col {
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 20px;
    min-height: 980px;
  }

  [data-page="league"] .league-season-hero {
    background:
      radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.55), transparent 34%),
      radial-gradient(circle at 82% 12%, rgba(255, 214, 236, 0.35), transparent 28%),
      #e9e2ff;
    border-radius: 22px;
    box-shadow: 0 14px 34px rgba(90, 73, 158, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    display: grid;
    grid-template-columns: 320px minmax(280px, 1fr) 180px;
    min-height: 320px;
    overflow: hidden;
    position: relative;
  }

  [data-page="league"] .league-hero-bg {
    height: 100%;
    inset: 0;
    object-fit: cover;
    object-position: center;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  [data-page="league"] .league-season-hero::before {
    background: linear-gradient(105deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0) 68%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  [data-page="league"] .league-hero-copy {
    padding: 28px 0 22px 26px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .league-season-kicker,
  [data-page="league"] .league-hero-copy > span {
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 999px;
    color: #5b63a8;
    display: inline-flex;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.04em;
    padding: 4px 10px;
  }

  [data-page="league"] .league-hero-copy h2 {
    color: #1f2a74;
    font-size: 24px;
    letter-spacing: 0.01em;
    margin: 12px 0 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55);
  }

  [data-page="league"] .league-season-range,
  [data-page="league"] .league-hero-copy p {
    align-items: center;
    color: #6f72a2;
    display: inline-flex;
    font-size: 12px;
    font-weight: 750;
    gap: 6px;
    margin: 0;
    padding: 5px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.48);
    border: 1px solid rgba(255, 255, 255, 0.7);
  }

  [data-page="league"] .league-countdown-label,
  [data-page="league"] .league-hero-copy > small {
    color: #6f72a2;
    display: block;
    font-size: 11px;
    font-weight: 750;
    margin-top: 22px;
  }

  [data-page="league"] .league-countdown {
    display: flex;
    gap: 12px;
    margin-top: 10px;
  }

  [data-page="league"] .league-flip-unit {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 0;
  }

  [data-page="league"] .league-flip-card {
    --league-flip-radius: 14px;
    filter: drop-shadow(0 10px 14px rgba(96, 71, 169, 0.14));
    height: 68px;
    perspective: 720px;
    position: relative;
    width: 58px;
  }

  [data-page="league"] .league-page-stack {
    background: linear-gradient(180deg, #e1d8ff, #b9a8f6);
    border-radius: 0 0 12px 12px;
    bottom: -5px;
    box-shadow:
      0 6px 10px rgba(82, 58, 150, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.55);
    height: 10px;
    left: 8%;
    position: absolute;
    right: 8%;
    z-index: 0;
  }

  [data-page="league"] .league-page-stack::before {
    background: #f2efff;
    border-radius: 0 0 10px 10px;
    bottom: 4px;
    box-shadow: 0 1px 0 rgba(129, 101, 218, 0.18);
    content: "";
    left: 4%;
    position: absolute;
    right: 4%;
    top: -4px;
  }

  [data-page="league"] .league-flip-shell {
    background: rgba(255, 255, 255, 0.34);
    border: 1.5px solid rgba(255, 255, 255, 0.9);
    border-radius: var(--league-flip-radius);
    box-shadow:
      0 0 0 1.5px rgba(170, 151, 244, 0.22),
      0 12px 22px rgba(104, 74, 184, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
    inset: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }

  [data-page="league"] .league-half {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: grid;
    height: 50%;
    left: 0;
    overflow: hidden;
    place-items: center;
    position: absolute;
    width: 100%;
  }

  [data-page="league"] .league-half span {
    color: #2f2a7b;
    display: grid;
    font-size: 22px;
    font-variant-numeric: tabular-nums;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    place-items: center;
    position: absolute;
    left: 0;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.9),
      0 6px 12px rgba(71, 49, 133, 0.08);
    width: 100%;
  }

  [data-page="league"] .league-top {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(250, 248, 255, 0.95));
    border-bottom: 1px solid rgba(106, 86, 176, 0.16);
    border-radius: var(--league-flip-radius) var(--league-flip-radius) 0 0;
    top: 0;
    transform-origin: bottom;
  }

  [data-page="league"] .league-top span {
    top: 50%;
    transform: translateY(-50%);
  }

  [data-page="league"] .league-bottom {
    background: linear-gradient(180deg, rgba(245, 241, 255, 0.96), rgba(236, 230, 255, 0.98));
    border-radius: 0 0 var(--league-flip-radius) var(--league-flip-radius);
    bottom: 0;
    transform-origin: top;
  }

  [data-page="league"] .league-bottom span {
    bottom: 50%;
    transform: translateY(50%);
  }

  [data-page="league"] .league-static-top,
  [data-page="league"] .league-static-bottom {
    z-index: 1;
  }

  [data-page="league"] .league-flip-top {
    transform: rotateX(0deg);
    z-index: 3;
  }

  [data-page="league"] .league-flip-bottom {
    transform: rotateX(90deg);
    z-index: 2;
  }

  [data-page="league"] .league-flip-card.is-flipping .league-flip-top {
    animation: league-flip-top 0.34s cubic-bezier(0.55, 0.12, 0.65, 0.92) forwards;
  }

  [data-page="league"] .league-flip-card.is-flipping .league-flip-bottom {
    animation: league-flip-bottom 0.34s 0.34s cubic-bezier(0.32, 0.65, 0.43, 1) forwards;
  }

  @keyframes league-flip-top {
    0% {
      filter: brightness(1);
      transform: rotateX(0deg);
    }
    100% {
      filter: brightness(0.84);
      transform: rotateX(-90deg);
    }
  }

  @keyframes league-flip-bottom {
    0% {
      filter: brightness(0.84);
      transform: rotateX(90deg);
    }
    100% {
      filter: brightness(1);
      transform: rotateX(0deg);
    }
  }

  [data-page="league"] .league-hinge {
    background: linear-gradient(
      90deg,
      rgba(103, 81, 175, 0.14),
      rgba(103, 81, 175, 0.46) 48%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(103, 81, 175, 0.45) 52%,
      rgba(103, 81, 175, 0.14)
    );
    box-shadow:
      0 -1px 0 rgba(255, 255, 255, 0.8),
      0 2px 4px rgba(79, 55, 141, 0.1);
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-1px);
    width: 100%;
    z-index: 6;
  }

  [data-page="league"] .league-hinge::before,
  [data-page="league"] .league-hinge::after {
    background: linear-gradient(90deg, #d8ccff, #8d75e7 48%, #e5ddff);
    border: 1px solid rgba(99, 74, 178, 0.28);
    border-radius: 5px;
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.82),
      0 2px 5px rgba(81, 59, 148, 0.16);
    content: "";
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
  }

  [data-page="league"] .league-hinge::before {
    left: -3px;
  }

  [data-page="league"] .league-hinge::after {
    right: -3px;
  }

  [data-page="league"] .league-flip-label {
    color: #6a62a1;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-indent: 0.18em;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-page="league"] .league-flip-card.is-flipping .league-flip-top,
    [data-page="league"] .league-flip-card.is-flipping .league-flip-bottom {
      animation: none;
    }
  }

  [data-page="league"] .league-hero-characters {
    align-items: end;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding-bottom: 18px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .podium {
    align-items: center;
    background: transparent;
    box-shadow: none;
    display: grid;
    justify-items: center;
    position: relative;
    width: 110px;
  }

  [data-page="league"] .podium::before {
    display: none;
  }

  [data-page="league"] .podium i {
    display: none;
  }

  [data-page="league"] .podium-char {
    height: auto;
    object-fit: contain;
    position: relative;
    width: 78px;
    z-index: 2;
  }

  [data-page="league"] .podium-base {
    margin-top: -10px;
    object-fit: contain;
    width: 100%;
    z-index: 1;
  }

  [data-page="league"] .podium.first {
    background: transparent;
    height: auto;
    width: 130px;
  }

  [data-page="league"] .podium.first .podium-char {
    width: 96px;
  }

  [data-page="league"] .podium.second,
  [data-page="league"] .podium.third {
    background: transparent;
    height: auto;
  }

  [data-page="league"] .podium.second .podium-char,
  [data-page="league"] .podium.third .podium-char {
    width: 72px;
  }

  [data-page="league"] .league-hero-rank {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 28px 20px 0 0;
    position: relative;
    text-align: center;
    z-index: 3;
  }

  [data-page="league"] .league-season-reward-btn,
  [data-page="league"] .league-hero-rank button.league-season-reward-btn {
    align-items: center;
    background: linear-gradient(135deg, #9b7af3, #765ce6);
    border: 0;
    border-radius: 999px;
    box-shadow: 0 9px 20px rgba(108, 78, 218, 0.23);
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 11px;
    font-weight: 800;
    gap: 7px;
    height: 34px;
    justify-content: center;
    margin: 0 auto;
    padding: 0 15px;
    white-space: nowrap;
  }

  [data-page="league"] .league-season-reward-btn[aria-expanded="true"] {
    box-shadow: 0 10px 22px rgba(108, 78, 218, 0.32);
    transform: translateY(-1px);
  }

  [data-page="league"] .league-season-reward-panel {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 240, 255, 0.98));
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 18px;
    box-shadow:
      0 18px 40px rgba(95, 74, 168, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
    left: 50%;
    margin-top: 10px;
    padding: 16px 14px 14px;
    position: absolute;
    top: 42px;
    transform: translateX(-50%);
    width: min(188px, calc(100% + 24px));
    z-index: 8;
  }

  [data-page="league"] .league-season-reward-panel[hidden] {
    display: none;
  }

  [data-page="league"] .league-season-reward-close {
    align-items: center;
    background: rgba(124, 104, 214, 0.1);
    border: 0;
    border-radius: 999px;
    color: #6b63a8;
    cursor: pointer;
    display: grid;
    font-size: 16px;
    height: 24px;
    justify-content: center;
    line-height: 1;
    padding: 0;
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
  }

  [data-page="league"] .league-season-reward-card {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }

  [data-page="league"] .league-season-reward-card img {
    background: radial-gradient(circle at 50% 30%, #fff, #efe8ff 70%);
    border: 1px solid rgba(170, 151, 244, 0.28);
    border-radius: 18px;
    box-shadow: 0 10px 18px rgba(108, 78, 218, 0.12);
    height: 84px;
    object-fit: contain;
    padding: 8px;
    width: 84px;
  }

  [data-page="league"] .league-season-reward-card b {
    color: #2a3478;
    font-size: 14px;
    margin-top: 4px;
  }

  [data-page="league"] .league-season-reward-card small {
    color: #7a74ad;
    font-size: 10px;
    font-weight: 750;
  }

  [data-page="league"] .league-season-reward-card p {
    color: #6f72a2;
    font-size: 11px;
    font-weight: 650;
    line-height: 1.45;
    margin: 4px 0 0;
  }

  [data-page="league"] .league-hero-rank > span {
    display: block;
    font-size: 10px;
    font-weight: 800;
    margin: 20px 0 7px;
  }

  [data-page="league"] .league-hero-badge {
    background: transparent;
    clip-path: none;
    display: block;
    height: 78px;
    margin: 4px auto 0;
    object-fit: contain;
    width: 78px;
  }

  [data-page="league"] .league-hero-rank b,
  [data-page="league"] .league-hero-rank small {
    display: block;
  }

  [data-page="league"] .league-hero-rank > b {
    font-size: 14px;
    margin-top: 7px;
  }

  [data-page="league"] .league-hero-rank > small {
    color: #7376a4;
    font-size: 10px;
    margin-top: 6px;
  }

  [data-page="league"] .league-hero-progress,
  [data-page="league"] .league-purple-progress,
  [data-page="league"] .league-mock-progress {
    background: #ece9f7;
    border-radius: 999px;
    height: 6px;
    overflow: hidden;
  }

  [data-page="league"] .league-hero-progress {
    margin: 7px auto;
    width: 92px;
  }

  [data-page="league"] .league-hero-progress i,
  [data-page="league"] .league-purple-progress i,
  [data-page="league"] .league-mock-progress i {
    background: linear-gradient(90deg, #7e60e8, #a987f5);
    border-radius: inherit;
    display: block;
    height: 100%;
    width: 62%;
  }

  [data-page="league"] .rank-area {
    margin-top: 20px;
    min-height: 680px;
  }

  [data-page="league"] .rank-toolbar {
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: space-between;
  }

  [data-page="league"] .rank-tabs {
    display: flex;
    gap: 6px;
  }

  [data-page="league"] .rank-tabs button {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 999px;
    color: #7479a6;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
    height: 34px;
    min-width: 94px;
  }

  [data-page="league"] .rank-tabs button.active {
    background: linear-gradient(135deg, #a17cf7, #775ee8);
    box-shadow: 0 8px 17px rgba(105, 78, 215, 0.18);
    color: white;
  }

  [data-page="league"] .rank-toolbar label {
    align-items: center;
    background: rgba(255, 255, 255, 0.62);
    border-radius: 999px;
    box-shadow: 0 5px 16px rgba(81, 67, 139, 0.05);
    color: #8185af;
    display: flex;
    gap: 6px;
    height: 34px;
    padding: 0 11px;
  }

  [data-page="league"] .rank-toolbar select {
    appearance: none;
    background: transparent;
    border: 0;
    color: #777ca8;
    font-size: 11px;
    font-weight: 800;
    outline: 0;
  }

  [data-page="league"] .ranking-layout {
    display: grid;
    gap: 16px;
    grid-template-columns: 228px minmax(0, 1fr);
    min-height: 640px;
  }

  [data-page="league"] .category-nav {
    background: linear-gradient(165deg, rgba(255, 255, 255, 0.92), rgba(247, 244, 255, 0.82));
    border: 1px solid rgba(255, 255, 255, 0.86);
    border-radius: 22px;
    box-shadow: 0 16px 40px rgba(84, 68, 145, 0.08);
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 640px;
    padding: 14px 12px;
  }

  [data-page="league"] .category-nav-head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2px 6px 6px;
  }

  [data-page="league"] .category-nav-head > span {
    color: #9a9ec0;
    font-size: 12px;
    font-weight: 700;
  }

  [data-page="league"] .category-nav-all {
    background: transparent;
    border: 0;
    color: #7b6fd8;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
    padding: 0;
  }

  [data-page="league"] .category-nav-list {
    display: grid;
    flex: 1 1 auto;
    gap: 8px;
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  [data-page="league"] .category-nav-item {
    align-items: center;
    background: rgba(255, 255, 255, 0.35);
    border: 1px solid transparent;
    border-radius: 16px;
    color: #5f6798;
    cursor: pointer;
    display: grid;
    gap: 10px;
    grid-template-columns: 36px minmax(0, 1fr) 14px;
    min-height: 0;
    padding: 12px 10px;
    text-align: left;
    transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease;
    width: 100%;
  }

  [data-page="league"] .category-nav-item:hover {
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(139, 120, 230, 0.14);
    box-shadow: 0 12px 28px rgba(98, 78, 180, 0.14);
    color: #5b52c4;
    transform: translateY(-3px);
  }

  [data-page="league"] .category-nav-item.active {
    background: linear-gradient(145deg, #f4efff, #faf8ff);
    border-color: rgba(139, 111, 238, 0.18);
    box-shadow: 0 14px 32px rgba(108, 84, 200, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9);
    color: #6a58d6;
    transform: translateY(-2px);
  }

  [data-page="league"] .category-icon {
    align-items: center;
    border-radius: 12px;
    display: inline-flex;
    font-size: 15px;
    height: 36px;
    justify-content: center;
    width: 36px;
  }

  [data-page="league"] .category-icon.tone-purple {
    background: linear-gradient(145deg, #efe8ff, #e4d9ff);
    color: #7b5ce8;
    box-shadow: 0 6px 14px rgba(123, 92, 232, 0.18);
  }

  [data-page="league"] .category-icon.tone-orange {
    background: linear-gradient(145deg, #fff0e4, #ffe2cc);
    color: #e08945;
    box-shadow: 0 6px 14px rgba(224, 137, 69, 0.16);
  }

  [data-page="league"] .category-icon.tone-blue {
    background: linear-gradient(145deg, #e8f1ff, #d7e7ff);
    color: #5b8de8;
    box-shadow: 0 6px 14px rgba(91, 141, 232, 0.16);
  }

  [data-page="league"] .category-icon.tone-rose {
    background: linear-gradient(145deg, #ffe8ef, #ffd6e2);
    color: #e45d84;
    box-shadow: 0 6px 14px rgba(228, 93, 132, 0.16);
  }

  [data-page="league"] .category-icon.tone-green {
    background: linear-gradient(145deg, #e8f8ef, #d5f0e0);
    color: #3faf73;
    box-shadow: 0 6px 14px rgba(63, 175, 115, 0.16);
  }

  [data-page="league"] .category-copy {
    display: grid;
    gap: 3px;
    min-width: 0;
  }

  [data-page="league"] .category-copy b {
    color: inherit;
    display: block;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  [data-page="league"] .category-copy small {
    color: #9a9ec0;
    display: block;
    font-size: 11px;
    font-weight: 600;
  }

  [data-page="league"] .category-nav-item.active .category-copy small,
  [data-page="league"] .category-nav-item:hover .category-copy small {
    color: #8b87c0;
  }

  [data-page="league"] .category-arrow {
    color: #b0b4d2;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  [data-page="league"] .category-nav-item:hover .category-arrow,
  [data-page="league"] .category-nav-item.active .category-arrow {
    color: #8a78e0;
    transform: translateX(2px);
  }

  [data-page="league"] .ranking-card {
    background: rgba(255, 255, 255, 0.73);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(79, 64, 137, 0.07);
    min-height: 640px;
    min-width: 0;
    overflow: hidden;
  }

  [data-page="league"] .ranking-card.full {
    width: 100%;
  }

  [data-page="league"] .table-head,
  [data-page="league"] .league-ranking-row {
    align-items: center;
    display: grid;
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(130px, 1fr) 130px 72px;
  }

  [data-page="league"] .table-head {
    border-bottom: 1px solid rgba(110, 100, 166, 0.1);
    color: #8589b1;
    font-size: 11px;
    font-weight: 800;
    height: 48px;
    padding: 0 12px;
  }

  [data-page="league"] .table-head span:not(:nth-child(2)) {
    text-align: center;
  }

  [data-page="league"] .league-ranking-row {
    border-bottom: 1px solid rgba(110, 100, 166, 0.085);
    min-height: 84px;
    padding: 8px 12px;
    transition: 0.2s;
  }

  [data-page="league"] .league-ranking-row:hover {
    background: rgba(248, 245, 255, 0.65);
  }

  [data-page="league"] .league-ranking-row.current-user {
    background: linear-gradient(100deg, rgba(194, 166, 255, 0.72), rgba(242, 236, 255, 0.83));
    border: 1px solid rgba(133, 96, 231, 0.22);
    border-radius: 13px;
    box-shadow: 0 8px 20px rgba(110, 80, 199, 0.12);
    margin: 10px 8px 6px;
    min-height: 90px;
  }

  [data-page="league"] .rank-cell,
  [data-page="league"] .xp-cell,
  [data-page="league"] .trend-cell {
    display: flex;
    justify-content: center;
  }

  [data-page="league"] .rank-badge {
    background: #eff0f8;
    border-radius: 50%;
    color: #777da7;
    display: grid;
    font-size: 13px;
    font-weight: 850;
    height: 32px;
    place-items: center;
    width: 32px;
  }

  [data-page="league"] .rank-badge.gold { background: linear-gradient(145deg, #ffd684, #f1a53f); color: white; }
  [data-page="league"] .rank-badge.silver { background: linear-gradient(145deg, #dce5fb, #a0afd6); color: white; }
  [data-page="league"] .rank-badge.bronze { background: linear-gradient(145deg, #f1c6b1, #cf8d71); color: white; }
  [data-page="league"] .rank-badge.you-rank {
    background: linear-gradient(145deg, #b48eff, #8466eb);
    border-radius: 7px;
    color: white;
  }

  [data-page="league"] .player-cell {
    align-items: center;
    display: flex;
    gap: 12px;
    min-width: 0;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    border-radius: 50%;
    flex: 0 0 auto;
    height: 48px;
    object-fit: cover;
    width: 48px;
  }

  [data-page="league"] .avatar-dot {
    background: linear-gradient(135deg, #f1eaff, #c8b6ff);
    display: inline-block;
  }

  [data-page="league"] .player-copy {
    line-height: 1.15;
    min-width: 0;
  }

  [data-page="league"] .player-name {
    color: #2b3478;
    display: block;
    font-size: 14px;
    font-weight: 850;
    white-space: nowrap;
  }

  [data-page="league"] .player-name i {
    color: #dec04c;
    font-size: 9px;
    font-style: normal;
  }

  [data-page="league"] .level {
    color: #989bbb;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="league"] .motto {
    color: #9a9dbc;
    display: block;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .tier-cell {
    align-items: center;
    color: #7176a4;
    display: flex;
    font-size: 10px;
    font-weight: 800;
    gap: 7px;
  }

  [data-page="league"] .tier-emblem-icon {
    display: block;
    flex: 0 0 auto;
    height: 22px;
    object-fit: contain;
    width: 22px;
  }

  [data-page="league"] .tier-emblem {
    clip-path: polygon(50% 0, 90% 20%, 100% 66%, 50% 100%, 0 66%, 10% 20%);
    display: grid;
    height: 20px;
    place-items: center;
    width: 20px;
  }

  [data-page="league"] .tier-emblem.king { background: #f0a11d; color: #f0a11d; }
  [data-page="league"] .tier-emblem.diamond,
  [data-page="league"] .tier-emblem.platinum { background: #7c68e9; color: #7c68e9; }

  [data-page="league"] .tier-emblem svg {
    height: 14px;
    width: 14px;
  }

  [data-page="league"] .tier-emblem path:first-child {
    display: none;
  }

  [data-page="league"] .tier-emblem .tier-star {
    fill: white;
  }

  [data-page="league"] .xp-cell {
    color: #263478;
    font-size: 13px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell {
    font-size: 12px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell.up { color: #58b77b; }
  [data-page="league"] .trend-cell.down { color: #fb6a70; }
  [data-page="league"] .trend-cell.flat { color: #9599bf; }

  [data-page="league"] .refresh-note {
    align-items: center;
    color: #999cbc;
    display: flex;
    font-size: 9px;
    gap: 5px;
    height: 34px;
    justify-content: center;
  }

  [data-page="league"] .league-mock-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  [data-page="league"] .league-mock-card,
  [data-page="league"] .league-side-panel {
    background: rgba(255, 255, 255, 0.68);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(80, 64, 139, 0.065), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    padding: 15px 16px;
  }

  [data-page="league"] .league-mock-card.wide {
    grid-column: 1 / -1;
  }

  [data-page="league"] .league-mock-card > span,
  [data-page="league"] .league-mock-card p,
  [data-page="league"] .league-center-note {
    color: #8d91b6;
    font-size: 10px;
  }

  [data-page="league"] .league-mock-card > b {
    display: block;
    font-size: 22px;
    margin: 8px 0;
  }

  [data-page="league"] .league-mock-card.tier-current {
    text-align: center;
  }

  [data-page="league"] .league-mini-list {
    display: grid;
    gap: 8px;
    margin-top: 10px;
  }

  [data-page="league"] .league-mini-list div {
    align-items: center;
    display: grid;
    grid-template-columns: 34px 1fr auto;
  }

  [data-page="league"] .league-mini-list .league-avatar,
  [data-page="league"] .league-mini-list .avatar-dot {
    height: 34px;
    width: 34px;
  }

  [data-page="league"] .league-mini-list .league-avatar + b,
  [data-page="league"] .league-mini-list .avatar-dot + b {
    margin-left: 18px;
    min-width: 0;
  }

  [data-page="league"] .league-mini-list strong {
    margin-left: 10px;
  }

  [data-page="league"] .league-mini-list small {
    color: #969abb;
    display: block;
    font-size: 9px;
  }

  [data-page="league"] .league-mock-title {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 12px;
    justify-content: space-between;
  }

  [data-page="league"] .league-mock-title small {
    color: #969abb;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="league"] .league-mini-list.alliance-member-scroll {
    max-height: 360px;
    overflow: auto;
    padding-right: 4px;
  }

  [data-page="league"] .league-mini-list .is-me b {
    color: #6f57d8;
  }

  [data-page="league"] .league-tier-board {
    display: grid;
    gap: 14px;
    grid-template-columns: 260px minmax(0, 1fr);
  }

  [data-page="league"] .league-tier-road {
    background: rgba(255, 255, 255, 0.73);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(79, 64, 137, 0.07);
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 14px;
  }

  [data-page="league"] .league-tier-road div {
    align-items: center;
    background: rgba(248, 245, 255, 0.72);
    border-radius: 12px;
    display: grid;
    gap: 10px;
    grid-template-columns: 44px 1fr;
    padding: 10px;
  }

  [data-page="league"] .league-tier-road div.done {
    box-shadow: inset 0 0 0 1px rgba(124, 104, 233, 0.28);
  }

  [data-page="league"] .league-tier-road-shield,
  [data-page="league"] .league-tier-current-shield {
    display: block;
    height: 42px;
    object-fit: contain;
    width: 42px;
  }

  [data-page="league"] .league-tier-current-shield {
    height: 88px;
    margin: 10px auto 4px;
    width: 88px;
  }

  [data-page="league"] .league-tier-road small {
    color: #9296b8;
    display: block;
    font-size: 9px;
    margin-top: 3px;
  }

  [data-page="league"] .league-right-rail {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  [data-page="league"] .league-panel-title {
    align-items: center;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
  }

  [data-page="league"] .league-panel-title strong {
    font-size: 15px;
    font-weight: 850;
  }

  [data-page="league"] .league-panel-title button {
    background: transparent;
    color: #8a70e8;
    font-size: 11px;
    font-weight: 800;
  }

  [data-page="league"] .league-alliance-main {
    align-items: center;
    display: flex;
    gap: 9px;
    margin-top: 8px;
  }

  [data-page="league"] .league-shield-placeholder,
  [data-page="league"] .league-battle-badge,
  [data-page="league"] .award-dot {
    background: transparent;
    border-radius: 0;
    display: inline-block;
    object-fit: contain;
  }

  [data-page="league"] .league-shield-placeholder {
    height: 74px;
    width: 74px;
  }

  [data-page="league"] .league-vs {
    height: 36px;
    object-fit: contain;
    width: 36px;
  }

  [data-page="league"] .league-alliance-main b,
  [data-page="league"] .league-alliance-main span {
    display: block;
  }

  [data-page="league"] .league-alliance-main b {
    font-size: 12px;
  }

  [data-page="league"] .league-alliance-main em,
  [data-page="league"] .league-alliance-main span {
    color: #8f93b8;
    font-size: 9px;
    font-style: normal;
  }

  [data-page="league"] .league-alliance-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    text-align: center;
  }

  [data-page="league"] .league-alliance-stats div + div {
    border-left: 1px solid rgba(100, 91, 155, 0.12);
  }

  [data-page="league"] .league-alliance-stats span,
  [data-page="league"] .league-alliance-stats b {
    display: block;
    font-size: 10px;
  }

  [data-page="league"] .league-purple-progress {
    margin-top: 13px;
  }

  [data-page="league"] .league-center-note {
    display: block;
    margin-top: 8px;
    text-align: center;
  }

  [data-page="league"] .league-announcement {
    align-items: center;
    background: transparent;
    color: #7f83ac;
    display: grid;
    font-size: 12px;
    gap: 4px;
    grid-template-columns: 1fr auto;
    min-height: 34px;
    padding: 0;
    text-align: left;
    width: 100%;
  }

  [data-page="league"] .league-announcement span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .league-battle-grid {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 30px 1fr;
    margin-top: 8px;
    text-align: center;
  }

  [data-page="league"] .league-battle-badge {
    height: 48px;
    margin: 0 auto 4px;
    width: 48px;
  }

  [data-page="league"] .league-battle-grid b,
  [data-page="league"] .league-battle-grid strong {
    display: block;
  }

  [data-page="league"] .league-battle-grid b {
    font-size: 9px;
    margin-top: 6px;
  }

  [data-page="league"] .league-battle-grid strong {
    color: #755bdd;
    font-size: 17px;
    margin-top: 4px;
  }

  [data-page="league"] .league-live {
    background: #eef9ef;
    border-radius: 999px;
    color: #55ae70;
    font-size: 8px;
    padding: 4px 8px;
  }

  [data-page="league"] .league-awards-grid {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 10px;
    text-align: center;
  }

  [data-page="league"] .award-dot {
    color: white;
    height: 58px;
    margin: 0 auto 6px;
    width: 58px;
  }

  [data-page="league"] .league-awards-grid b,
  [data-page="league"] .league-awards-grid small {
    display: block;
    font-size: 9px;
  }

  [data-page="league"] .tabs {
    background: rgba(255, 255, 255, 0.52);
    border-radius: 999px;
    gap: 6px;
    margin-bottom: 14px;
    padding: 6px;
    width: min(760px, 100%);
  }

  [data-page="league"] .tabs .pill {
    box-shadow: none;
    flex: 1;
    min-height: 42px;
  }

  [data-page="league"] .league-board-shell {
    align-items: stretch;
    display: grid;
    gap: 22px;
    grid-template-columns: 190px minmax(0, 1fr);
  }

  [data-page="league"] .league-filter-panel {
    background: rgba(255, 255, 255, 0.52);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(124, 91, 229, 0.1);
    display: grid;
    gap: 10px;
    padding: 12px;
  }

  [data-page="league"] .league-filter-panel button {
    align-items: center;
    background: transparent;
    border-radius: 8px;
    color: #7b86b6;
    display: grid;
    gap: 10px;
    grid-template-columns: 28px 1fr;
    min-height: 58px;
    padding: 10px 12px;
    text-align: left;
  }

  [data-page="league"] .league-filter-panel button.active {
    background: rgba(139, 92, 246, 0.12);
    box-shadow: inset 0 0 0 1px rgba(139, 92, 246, 0.18);
    color: var(--purple);
  }

  [data-page="league"] .league-filter-panel span {
    display: grid;
    font-size: 19px;
    place-items: center;
  }

  [data-page="league"] .league-filter-panel b {
    display: block;
    font-size: 14px;
    line-height: 1.2;
  }

  [data-page="league"] .league-filter-panel small {
    color: inherit;
    display: block;
    font-size: 11px;
    font-weight: 700;
    margin-top: 4px;
    opacity: 0.68;
  }

  [data-page="league"] .league-table-card {
    padding: 18px 20px 16px;
  }

  [data-page="league"] .league-table-head,
  [data-page="league"] .league-leader-row {
    display: grid;
    grid-template-columns: 70px minmax(220px, 1.25fr) minmax(120px, 0.8fr) 130px 80px;
  }

  [data-page="league"] .league-table-head {
    align-items: center;
    color: #7c86b7;
    font-size: 13px;
    font-weight: 900;
    padding: 0 18px 12px;
  }

  [data-page="league"] .league-table {
    gap: 0;
  }

  [data-page="league"] .league-leader-row {
    align-items: center;
    background: transparent;
    border-radius: 0;
    border-top: 1px solid rgba(122, 99, 196, 0.11);
    color: var(--ink);
    gap: 0;
    min-height: 74px;
    padding: 0 18px;
  }

  [data-page="league"] .league-leader-row.you {
    background: linear-gradient(90deg, rgba(155, 105, 255, 0.24), rgba(238, 220, 255, 0.48));
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.36);
    color: var(--ink);
    margin-top: 16px;
  }

  [data-page="league"] .league-rank {
    align-items: center;
    background: #f1eefb;
    border-radius: 999px;
    color: #7f86af;
    display: inline-flex;
    font-weight: 950;
    height: 34px;
    justify-content: center;
    width: 34px;
  }

  [data-page="league"] .league-rank.top-1 {
    background: linear-gradient(135deg, #ffd46f, #ffab48);
    color: white;
  }

  [data-page="league"] .league-rank.top-2 {
    background: linear-gradient(135deg, #d9ddff, #9fa9df);
    color: white;
  }

  [data-page="league"] .league-rank.top-3 {
    background: linear-gradient(135deg, #ffc79f, #df916c);
    color: white;
  }

  [data-page="league"] .league-player {
    align-items: center;
    display: flex;
    gap: 14px;
    min-width: 0;
  }

  [data-page="league"] .league-player b {
    color: #182362;
    display: block;
    font-size: 15px;
    line-height: 1.25;
    min-width: 0;
  }

  [data-page="league"] .league-player small {
    color: #7e86b8;
    display: block;
    font-size: 11px;
    font-weight: 800;
    margin-top: 4px;
  }

  [data-page="league"] .league-player .league-level {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 999px;
    color: #8170c8;
    display: inline-block;
    margin: 0 0 0 6px;
    padding: 1px 6px;
  }

  [data-page="league"] .league-avatar {
    border: 3px solid rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 8px 18px rgba(36, 45, 102, 0.14);
    flex: 0 0 auto;
    height: 42px;
    width: 42px;
  }

  [data-page="league"] .league-avatar.peach { background: linear-gradient(135deg, #ffe1bd, #f4a1b7); }
  [data-page="league"] .league-avatar.blue { background: linear-gradient(135deg, #bfe5ff, #7792ff); }
  [data-page="league"] .league-avatar.pink { background: linear-gradient(135deg, #ffd5ec, #b997ff); }
  [data-page="league"] .league-avatar.rose { background: linear-gradient(135deg, #ffddd8, #d78a96); }
  [data-page="league"] .league-avatar.cream { background: linear-gradient(135deg, #fff8f0, #ffd58d); }
  [data-page="league"] .league-avatar.green { background: linear-gradient(135deg, #ccefd4, #4fa17c); }

  [data-page="league"] .league-tier {
    align-items: center;
    color: #37427d;
    display: flex;
    font-size: 14px;
    font-weight: 900;
    gap: 8px;
  }

  [data-page="league"] .tier-mark {
    border-radius: 8px;
    color: white;
    display: inline-grid;
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .tier-mark.gold { background: linear-gradient(135deg, #ffcf57, #ff9f32); }
  [data-page="league"] .tier-mark.purple { background: linear-gradient(135deg, #aa83ff, #7657df); }
  [data-page="league"] .tier-mark.blue { background: linear-gradient(135deg, #7db7ff, #587ce0); }

  [data-page="league"] .league-xp {
    color: #172260;
    font-weight: 950;
  }

  [data-page="league"] .league-trend {
    font-weight: 950;
  }

  [data-page="league"] .league-trend.up { color: #59bd78; }
  [data-page="league"] .league-trend.down { color: #ff6a76; }
  [data-page="league"] .league-trend.flat { color: #9aa1c2; }

  [data-page="league"] .league-refresh-note {
    color: #8790bd;
    font-size: 13px;
    font-weight: 800;
    margin: 14px 0 0;
    text-align: center;
  }

  [data-page="league"] .league-ranking-panel {
    --league-ink: #28316f;
    --league-muted: #8588ae;
    --league-line: rgba(111, 103, 171, 0.12);
    --league-panel: rgba(255, 255, 255, 0.78);
    --league-shadow: 0 18px 50px rgba(90, 74, 158, 0.09);
    color: var(--league-ink);
    display: grid;
    gap: 6px;
    grid-template-rows: 44px minmax(0, 1fr) 28px;
    min-height: 0;
  }

  [data-page="league"] .league-ranking-topbar {
    align-items: center;
    display: grid;
    gap: 14px;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  [data-page="league"] .league-top-tabs {
    align-items: center;
    display: flex;
    gap: 5px;
    min-width: 0;
  }

  [data-page="league"] .league-top-tab {
    background: rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    color: #6e73a3;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.02em;
    padding: 9px 28px;
    transition: 0.2s ease;
    white-space: nowrap;
  }

  [data-page="league"] .league-top-tab:hover {
    background: rgba(255, 255, 255, 0.72);
    color: #5b52bb;
  }

  [data-page="league"] .league-top-tab.active {
    background: linear-gradient(135deg, #9d78f5, #705bea);
    box-shadow: 0 8px 22px rgba(113, 83, 226, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.38);
    color: white;
  }

  [data-page="league"] .league-region-select {
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    box-shadow: 0 6px 18px rgba(100, 85, 160, 0.06), inset 0 0 0 1px rgba(126, 104, 199, 0.06);
    color: #6f72a3;
    display: flex;
    font-size: 13px;
    font-weight: 700;
    gap: 8px;
    padding: 7px 14px;
    position: relative;
  }

  [data-page="league"] .league-region-select svg {
    fill: none;
    height: 17px;
    stroke: #7f82b6;
    stroke-width: 1.8;
    width: 17px;
  }

  [data-page="league"] .league-region-select select {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font-weight: 700;
    outline: 0;
    padding: 0 20px 0 0;
  }

  [data-page="league"] .league-select-arrow {
    border-bottom: 2px solid #8c8fbd;
    border-right: 2px solid #8c8fbd;
    height: 7px;
    pointer-events: none;
    position: absolute;
    right: 13px;
    transform: rotate(45deg) translateY(-2px);
    width: 7px;
  }

  [data-page="league"] .league-ranking-content {
    display: grid;
    gap: 18px;
    grid-template-columns: 170px minmax(0, 1fr);
    min-height: 0;
  }

  [data-page="league"] .league-sidebar {
    backdrop-filter: blur(16px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.48), rgba(250, 248, 255, 0.72));
    border: 1px solid rgba(255, 255, 255, 0.58);
    border-radius: 24px;
    box-shadow: var(--league-shadow);
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    padding: 8px 10px;
  }

  [data-page="league"] .league-side-item {
    align-items: center;
    background: transparent;
    border-radius: 14px;
    color: #62699a;
    cursor: pointer;
    display: grid;
    gap: 8px;
    grid-template-columns: 28px 1fr;
    min-height: 0;
    padding: 12px 10px;
    text-align: left;
    transition: 0.2s ease;
    width: 100%;
  }

  [data-page="league"] .league-side-item:hover {
    background: rgba(246, 242, 255, 0.82);
    color: #6257cb;
  }

  [data-page="league"] .league-side-item.active {
    background: linear-gradient(135deg, rgba(247, 243, 255, 0.98), rgba(241, 235, 255, 0.83));
    box-shadow: inset 0 0 0 1px rgba(139, 111, 238, 0.28), 0 7px 18px rgba(126, 103, 201, 0.1);
    color: #6357d6;
  }

  [data-page="league"] .league-side-icon {
    display: grid;
    font-size: 20px;
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .league-side-title {
    display: block;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  [data-page="league"] .league-side-subtitle {
    color: #9b9dbd;
    display: block;
    font-size: 10.5px;
    font-weight: 600;
    margin-top: 3px;
  }

  [data-page="league"] .league-board {
    backdrop-filter: blur(18px);
    background: var(--league-panel);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 26px;
    box-shadow: var(--league-shadow);
    min-width: 0;
    overflow: hidden;
    padding: 0 14px 8px;
  }

  [data-page="league"] .league-ranking-head,
  [data-page="league"] .league-ranking-row {
    align-items: center;
    display: grid;
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(140px, 1.15fr) minmax(120px, 0.9fr) 70px;
  }

  [data-page="league"] .league-ranking-head {
    border-bottom: 1px solid var(--league-line);
    color: #787ba9;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.03em;
    min-height: 42px;
  }

  [data-page="league"] .league-ranking-head > div:not(:nth-child(2)) {
    text-align: center;
  }

  [data-page="league"] .league-ranking-head > div:nth-child(2) {
    padding-left: 8px;
  }

  [data-page="league"] .league-ranking-row {
    border-bottom: 1px solid var(--league-line);
    min-height: 54px;
    position: relative;
    transition: transform 0.18s ease, background 0.18s ease;
  }

  [data-page="league"] .league-ranking-row:not(.current-user):hover {
    background: rgba(250, 248, 255, 0.62);
    border-radius: 14px;
    transform: translateY(-1px);
  }

  [data-page="league"] .league-ranking-row.current-user {
    background: linear-gradient(100deg, rgba(192, 164, 255, 0.72), rgba(241, 235, 255, 0.9) 58%, rgba(248, 243, 255, 0.86));
    border: 1px solid rgba(146, 113, 236, 0.21);
    border-radius: 17px;
    box-shadow: 0 9px 24px rgba(124, 91, 210, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.62);
    margin: 8px 0 0;
    min-height: 64px;
  }

  [data-page="league"] .rank-cell,
  [data-page="league"] .tier-cell,
  [data-page="league"] .xp-cell,
  [data-page="league"] .trend-cell {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 0;
  }

  [data-page="league"] .rank-badge {
    background: linear-gradient(145deg, #f0f1fb, #e4e6f4);
    border-radius: 50%;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 7px rgba(71, 70, 118, 0.08);
    color: #7e82b1;
    display: grid;
    font-size: 13px;
    font-weight: 800;
    height: 28px;
    place-items: center;
    width: 28px;
  }

  [data-page="league"] .rank-badge.gold {
    background: linear-gradient(145deg, #ffd386, #f6a943);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.7), 0 4px 11px rgba(240, 167, 65, 0.26);
    color: white;
  }

  [data-page="league"] .rank-badge.silver {
    background: linear-gradient(145deg, #dfe6fb, #9aa9d0);
    color: white;
  }

  [data-page="league"] .rank-badge.bronze {
    background: linear-gradient(145deg, #f5c7ae, #cf8b6f);
    color: white;
  }

  [data-page="league"] .rank-badge.you-rank {
    background: linear-gradient(145deg, #b48cff, #8666ec);
    border-radius: 8px;
    box-shadow: 0 5px 13px rgba(107, 78, 218, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    color: white;
  }

  [data-page="league"] .player-cell {
    align-items: center;
    display: flex;
    gap: 10px;
    min-width: 0;
    padding: 4px 8px;
  }

  [data-page="league"] .league-avatar {
    border-radius: 50%;
    flex: 0 0 auto;
    height: 40px;
    object-fit: cover;
    width: 40px;
  }

  [data-page="league"] .player-copy {
    line-height: 1.15;
    min-width: 0;
  }

  [data-page="league"] .player-name {
    align-items: center;
    color: #2b3478;
    display: flex;
    font-size: 13px;
    font-weight: 850;
    gap: 6px;
    white-space: nowrap;
  }

  [data-page="league"] .level {
    color: #8c8fb1;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="league"] .mini-crown {
    color: #e6b944;
    font-size: 7px;
    height: 7px;
    line-height: 1;
    width: 7px;
  }

  [data-page="league"] .motto {
    color: #9a9cbc;
    font-size: 10.5px;
    font-weight: 600;
    margin-top: 5px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .tier-cell {
    color: #6f73a4;
    font-size: 12px;
    font-weight: 800;
    gap: 8px;
    white-space: nowrap;
  }

  [data-page="league"] .tier-emblem {
    display: grid;
    filter: drop-shadow(0 2px 3px rgba(93, 78, 158, 0.16));
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .tier-emblem svg {
    fill: currentColor;
    height: 23px;
    width: 23px;
  }

  [data-page="league"] .tier-emblem .tier-star {
    fill: white;
    opacity: 0.96;
  }

  [data-page="league"] .tier-emblem.king { color: #f4a116; }
  [data-page="league"] .tier-emblem.diamond { color: #7e6bf0; }
  [data-page="league"] .tier-emblem.platinum { color: #688bd8; }

  [data-page="league"] .xp-cell {
    color: #263478;
    font-size: 12px;
    font-weight: 850;
    white-space: nowrap;
  }

  [data-page="league"] .trend-cell {
    font-size: 12px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell.up { color: #56b77d; }
  [data-page="league"] .trend-cell.down { color: #ff7275; }
  [data-page="league"] .trend-cell.flat { color: #9ba0c7; }

  [data-page="league"] .league-footer {
    align-items: center;
    color: #9a9dbb;
    display: flex;
    font-size: 11px;
    font-weight: 700;
    gap: 5px;
    justify-content: center;
    letter-spacing: 0.04em;
  }

  [data-page="league"] .league-refresh-button {
    background: transparent;
    border-radius: 50%;
    color: #8b8fb9;
    cursor: pointer;
    display: grid;
    height: 22px;
    place-items: center;
    width: 22px;
  }

  [data-page="league"] .league-refresh-button:hover {
    background: rgba(119, 94, 219, 0.08);
    color: #6d5ed7;
  }

  [data-page="league"] .category-nav-list {
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  [data-page="league"] .category-nav-item {
    min-height: 72px;
  }

  [data-page="league"] .league-ranking-row {
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(130px, 1fr) 130px 72px;
    min-height: 84px;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    height: 48px;
    object-fit: cover;
    width: 48px;
  }

  [data-page="league"] .tier-emblem {
    filter: none;
    height: 24px;
    width: 24px;
  }

  [data-page="league"] .tier-emblem svg {
    height: 16px;
    width: 16px;
  }

  [data-page="rewards"] .rewards-dashboard {
    align-items: stretch;
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) 360px;
    min-height: 980px;
  }

  [data-page="rewards"] .rewards-main,
  [data-page="rewards"] .rewards-right-rail {
    min-width: 0;
  }

  [data-page="rewards"] .rewards-main {
    align-content: start;
    display: grid;
    gap: 18px;
    height: 100%;
  }

  [data-page="rewards"] .reward-market,
  [data-page="rewards"] .growth-panel,
  [data-page="rewards"] .rewards-side-panel {
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 22px;
    box-shadow: 0 18px 46px rgba(95, 85, 150, 0.11);
  }

  [data-page="rewards"] .rewards-points-hero {
    align-items: stretch;
    background-color: transparent;
    background-image: url('./rewards-assets/hero-character.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% 125%;
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 22px;
    box-shadow: 0 18px 46px rgba(95, 85, 150, 0.11);
    display: block;
    filter: none;
    min-height: 420px;
    overflow: hidden;
    padding: 15px 15px;
    position: relative;
  }

  [data-page="rewards"] .rewards-points-hero::before,
  [data-page="rewards"] .rewards-points-hero::after {
    content: none;
    display: none;
  }

  [data-page="rewards"] .rewards-points-hero > * {
    position: relative;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-points-stats {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: min(360px, 46%);
    padding: 4px 0;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
  }

  [data-page="rewards"] .rewards-points-stats > span {
    color: #5960a8;
    display: block;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  [data-page="rewards"] .rewards-points-stats h2 {
    align-items: baseline;
    color: #172873;
    display: flex;
    gap: 8px;
    font-size: 44px;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
  }

  [data-page="rewards"] .rewards-points-stats h2 small {
    color: #7764d8;
    font-size: 18px;
  }

  [data-page="rewards"] .rewards-points-stats p {
    color: #767aa8;
    font-size: 13px;
    font-weight: 700;
    margin: 12px 0 14px;
  }

  [data-page="rewards"] .rewards-level-progress {
    background: rgba(255, 255, 255, 0.74);
    border-radius: 999px;
    height: 10px;
    overflow: hidden;
    width: min(100%, 260px);
  }

  [data-page="rewards"] .rewards-level-progress i {
    background: linear-gradient(90deg, #8d6cf6, #ff8fc8);
    border-radius: inherit;
    display: block;
    height: 100%;
  }

  [data-page="rewards"] .rewards-hero-character {
    align-self: stretch;
    height: 100%;
    justify-self: center;
    max-height: 250px;
    max-width: 100%;
    object-fit: contain;
    position: relative;
    transform: none;
    width: 100%;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-earn-card {
    backdrop-filter: blur(14px);
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    box-sizing: border-box;
    margin-top: 14px;
    padding: 12px 12px;
    text-shadow: none;
    width: min(100%, 260px);
  }

  [data-page="rewards"] .rewards-earn-card h3 {
    color: #172873;
    font-size: 14px;
    margin: 0 0 10px;
  }

  [data-page="rewards"] .reward-market h3 {
    color: #172873;
    font-size: 15px;
    margin: 0 0 12px;
  }

  [data-page="rewards"] .rewards-earn-card ul {
    display: grid;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [data-page="rewards"] .rewards-earn-card li {
    align-items: center;
    color: #4f5788;
    display: grid;
    font-size: 12px;
    font-weight: 700;
    gap: 8px;
    grid-template-columns: 26px 1fr auto;
  }

  [data-page="rewards"] .rewards-earn-card li strong {
    color: #6b57d4;
    font-size: 12px;
    white-space: nowrap;
  }

  [data-page="rewards"] .earn-icon {
    border-radius: 50%;
    display: block;
    height: 26px;
    object-fit: contain;
    width: 26px;
  }

  [data-page="rewards"] .reward-market {
    min-height: 420px;
    padding: 18px;
  }

  [data-page="rewards"] .market-toolbar {
    align-items: center;
    display: flex;
    gap: 14px;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  [data-page="rewards"] .category-tabs {
    background: rgba(245, 240, 255, 0.82);
    border-radius: 999px;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 5px;
  }

  [data-page="rewards"] .category-tabs button,
  [data-page="rewards"] .sort-select {
    border: 0;
    color: #777ca8;
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
  }

  [data-page="rewards"] .category-tabs button {
    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    padding: 9px 14px;
  }

  [data-page="rewards"] .category-tabs button.active {
    background: linear-gradient(135deg, #9a77f5, #7d67e8);
    color: #fff;
    box-shadow: 0 10px 22px rgba(126, 103, 232, 0.24);
  }

  [data-page="rewards"] .sort-select {
    align-items: center;
    background: #fff;
    border: 1px solid rgba(139, 126, 218, 0.16);
    border-radius: 999px;
    display: inline-flex;
    gap: 4px;
    padding: 0 12px;
  }

  [data-page="rewards"] .sort-select select {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
    padding: 9px 2px;
  }

  [data-page="rewards"] .reward-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(5, minmax(120px, 1fr));
  }

  [data-page="rewards"] .reward-empty {
    align-items: center;
    background: rgba(255, 255, 255, 0.72);
    border: 1px dashed rgba(140, 120, 210, 0.28);
    border-radius: 16px;
    color: #7a74ad;
    display: grid;
    font-size: 13px;
    font-weight: 700;
    grid-column: 1 / -1;
    justify-content: center;
    min-height: 120px;
    padding: 24px;
    text-align: center;
  }

  [data-page="rewards"] .reward-card {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(226, 219, 255, 0.9);
    border-radius: 18px;
    box-shadow: 0 12px 28px rgba(91, 82, 138, 0.08);
    cursor: pointer;
    display: grid;
    gap: 10px;
    min-height: 240px;
    padding: 12px;
    text-align: left;
  }

  [data-page="rewards"] .reward-card.owned {
    border-color: rgba(110, 196, 150, 0.55);
    box-shadow: 0 12px 28px rgba(70, 160, 120, 0.1);
  }

  [data-page="rewards"] .reward-card.can-buy {
    border-color: rgba(151, 123, 245, 0.5);
  }

  [data-page="rewards"] .reward-card.locked {
    opacity: 0.9;
  }

  [data-page="rewards"] .reward-image-wrap {
    align-items: center;
    background: linear-gradient(145deg, #f7f2ff, #fff7fb);
    border-radius: 15px;
    display: flex;
    height: 132px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  [data-page="rewards"] .reward-image-wrap .reward-product-image {
    height: 108px;
    object-fit: contain;
    width: 108px;
  }

  [data-page="rewards"] .reward-lock-icon {
    height: 15px;
    object-fit: contain;
    pointer-events: none;
    position: absolute;
    right: 6px;
    top: 6px;
    width: 15px;
    z-index: 1;
  }

  [data-page="rewards"] .reward-copy {
    display: grid;
    gap: 4px;
  }

  [data-page="rewards"] .reward-copy strong {
    color: #223077;
    font-size: 13px;
  }

  [data-page="rewards"] .reward-copy span {
    color: #8b91bc;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="rewards"] .reward-copy b {
    color: #7d66e8;
    font-size: 13px;
  }

  [data-page="rewards"] .growth-panel {
    display: grid;
    gap: 14px;
    padding: 18px;
  }

  [data-page="rewards"] .growth-heading {
    display: grid;
    gap: 5px;
  }

  [data-page="rewards"] .growth-heading strong,
  [data-page="rewards"] .rewards-panel-heading strong {
    color: #172873;
    font-size: 15px;
  }

  [data-page="rewards"] .growth-heading span,
  [data-page="rewards"] .rewards-panel-heading span {
    color: #8d92bc;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="rewards"] .growth-carousel {
    align-items: center;
    display: grid;
    gap: 8px;
    grid-template-columns: 36px minmax(0, 1fr) 36px;
    min-width: 0;
  }

  [data-page="rewards"] .round-arrow {
    align-items: center;
    background: #fff;
    border: 1px solid rgba(139, 126, 218, 0.14);
    border-radius: 50%;
    color: #7f6be9;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-size: 24px;
    height: 36px;
    justify-content: center;
    line-height: 1;
    padding: 0;
    width: 36px;
    z-index: 1;
  }

  [data-page="rewards"] .growth-track {
    display: flex;
    gap: 10px;
    min-width: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  [data-page="rewards"] .growth-track::-webkit-scrollbar {
    display: none;
  }

  [data-page="rewards"] .growth-reward {
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(226, 219, 255, 0.82);
    border-radius: 16px;
    display: grid;
    flex: 0 0 112px;
    justify-items: center;
    min-height: 150px;
    padding: 14px 8px;
    scroll-snap-align: start;
    width: 112px;
  }

  [data-page="rewards"] .growth-reward.active {
    background: linear-gradient(180deg, rgba(247, 242, 255, 0.98), rgba(255, 255, 255, 0.86));
    border-color: rgba(151, 123, 245, 0.45);
  }

  [data-page="rewards"] .growth-reward img {
    height: 46px;
    object-fit: contain;
    width: 46px;
  }

  [data-page="rewards"] .growth-reward strong {
    color: #293579;
    font-size: 12px;
    margin-top: 8px;
  }

  [data-page="rewards"] .growth-reward b {
    color: #5b6294;
    font-size: 10px;
    font-weight: 700;
    margin-top: 2px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  [data-page="rewards"] .growth-reward span {
    color: #8a90bb;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="rewards"] .rewards-right-rail {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
    min-height: 100%;
  }

  [data-page="rewards"] .rewards-side-panel {
    padding: 18px;
  }

  [data-page="rewards"] .overview-panel,
  [data-page="rewards"] .today-growth-panel,
  [data-page="rewards"] .checkin-panel,
  [data-page="rewards"] .event-panel,
  [data-page="rewards"] .records-panel {
    padding: 14px 16px;
  }

  [data-page="rewards"] .overview-panel {
    flex: 0 0 auto;
    padding: 12px 14px;
  }

  [data-page="rewards"] .today-growth-panel,
  [data-page="rewards"] .checkin-panel,
  [data-page="rewards"] .event-panel {
    flex: 0 0 auto;
  }

  [data-page="rewards"] .records-panel {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    margin-top: auto;
    min-height: 120px;
  }

  [data-page="rewards"] .records-panel .record-list,
  [data-page="rewards"] .records-panel .record-empty {
    flex: 1 1 auto;
  }

  [data-page="rewards"] .overview-panel .rewards-panel-heading,
  [data-page="rewards"] .today-growth-panel .rewards-panel-heading,
  [data-page="rewards"] .checkin-panel .rewards-panel-heading,
  [data-page="rewards"] .event-panel .rewards-panel-heading,
  [data-page="rewards"] .records-panel .rewards-panel-heading {
    margin-bottom: 10px;
  }

  [data-page="rewards"] .rewards-panel-heading {
    align-items: start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  [data-page="rewards"] .panel-eyebrow {
    color: #8a6ff0;
    display: block;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  [data-page="rewards"] .rewards-panel-heading > div strong {
    display: block;
  }

  [data-page="rewards"] .overview-level-block {
    display: grid;
    gap: 6px;
    margin-top: 10px;
  }

  [data-page="rewards"] .overview-level-meta {
    align-items: center;
    color: #767aa8;
    display: flex;
    font-size: 11px;
    font-weight: 700;
    justify-content: space-between;
    gap: 10px;
  }

  [data-page="rewards"] .overview-level-bar,
  [data-page="rewards"] .today-growth-bar {
    background: #eceaf8;
    border-radius: 999px;
    height: 8px;
    overflow: hidden;
  }

  [data-page="rewards"] .overview-level-bar i,
  [data-page="rewards"] .today-growth-bar i {
    background: linear-gradient(90deg, #8d6cf6, #6f7cf2);
    border-radius: inherit;
    display: block;
    height: 100%;
  }

  [data-page="rewards"] .today-growth-stats {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: 12px;
  }

  [data-page="rewards"] .today-growth-stats > div {
    background: #f6f4ff;
    border-radius: 14px;
    display: grid;
    gap: 6px;
    padding: 10px 8px;
    text-align: center;
  }

  [data-page="rewards"] .today-growth-stats span {
    color: #8a90bb;
    font-size: 10px;
    font-weight: 800;
  }

  [data-page="rewards"] .today-growth-stats strong {
    color: #5b62c8;
    font-size: 14px;
    font-weight: 800;
  }

  [data-page="rewards"] .today-growth-list {
    display: grid;
    gap: 10px;
  }

  [data-page="rewards"] .today-growth-item {
    background: rgba(248, 245, 255, 0.88);
    border-radius: 14px;
    display: grid;
    gap: 8px;
    padding: 10px 12px;
  }

  [data-page="rewards"] .today-growth-item-head {
    align-items: center;
    display: grid;
    gap: 10px;
    grid-template-columns: 28px minmax(0, 1fr);
  }

  [data-page="rewards"] .today-growth-icon {
    align-items: center;
    background: #efeaff;
    border-radius: 10px;
    display: inline-flex;
    height: 28px;
    justify-content: center;
    width: 28px;
  }

  [data-page="rewards"] .today-growth-item-head > div {
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    min-width: 0;
  }

  [data-page="rewards"] .today-growth-item-head strong {
    color: #2c3478;
    font-size: 12px;
    font-weight: 800;
  }

  [data-page="rewards"] .today-growth-item-head b {
    color: #7c67e4;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 800;
  }

  [data-page="rewards"] .today-growth-item-meta {
    align-items: center;
    display: grid;
    gap: 8px;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  [data-page="rewards"] .today-growth-item-meta span {
    color: #8a90bb;
    font-size: 10px;
    font-weight: 800;
    white-space: nowrap;
  }

  [data-page="rewards"] .rewards-panel-heading button,
  [data-page="rewards"] .records-link {
    background: transparent;
    border: 0;
    color: #8a6ff0;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
  }

  [data-page="rewards"] .rewards-panel-heading b {
    background: #f1ecff;
    border-radius: 999px;
    color: #7c67e4;
    font-size: 11px;
    padding: 6px 9px;
  }

  [data-page="rewards"] .overview-content {
    align-items: center;
    display: grid;
    gap: 8px;
    grid-template-columns: 84px 1fr;
  }

  [data-page="rewards"] .points-donut {
    align-items: center;
    background: conic-gradient(#8d6cf6 0 67%, #73a4f6 67% 85%, #f5b35a 85% 95%, #e6e8f4 95% 100%);
    border-radius: 50%;
    display: flex;
    height: 84px;
    justify-content: center;
    width: 84px;
  }

  [data-page="rewards"] .points-donut div {
    align-items: center;
    background: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 54px;
    justify-content: center;
    width: 54px;
  }

  [data-page="rewards"] .points-donut strong {
    color: #202e76;
    font-size: 15px;
    line-height: 1.1;
  }

  [data-page="rewards"] .points-donut span {
    color: #9297bd;
    font-size: 10px;
    font-weight: 800;
  }

  [data-page="rewards"] .legend {
    display: grid;
    gap: 7px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [data-page="rewards"] .legend li {
    align-items: center;
    color: #757aa7;
    display: grid;
    font-size: 11px;
    font-weight: 800;
    gap: 7px;
    grid-template-columns: 9px 1fr auto;
  }

  [data-page="rewards"] .legend i {
    border-radius: 50%;
    height: 9px;
    width: 9px;
  }

  [data-page="rewards"] .legend .purple { background: #8d6cf6; }
  [data-page="rewards"] .legend .blue { background: #73a4f6; }
  [data-page="rewards"] .legend .orange { background: #f5b35a; }
  [data-page="rewards"] .legend .gray { background: #ccd0df; }

  [data-page="rewards"] .checkin-week {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  [data-page="rewards"] .checkin-week div,
  [data-page="rewards"] .checkin-week button {
    align-items: center;
    background: #f8f5ff;
    border: 0;
    border-radius: 12px;
    color: #7e83ae;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: 800;
    gap: 4px;
    min-height: 52px;
    justify-content: center;
    padding: 6px 2px;
  }

  [data-page="rewards"] .check-circle,
  [data-page="rewards"] .gift-circle {
    border-radius: 50%;
    display: inline-flex;
    flex-shrink: 0;
    height: 26px;
    object-fit: contain;
    width: 26px;
  }

  [data-page="rewards"] .check-circle.done {
    align-items: center;
    background: #3ecf7a;
    color: #fff;
    justify-content: center;
  }

  [data-page="rewards"] .check-circle.done .check-mark {
    display: block;
    flex-shrink: 0;
  }

  [data-page="rewards"] .check-circle.pending {
    background: rgba(232, 228, 255, 0.9);
    border: 2px solid rgba(167, 156, 230, 0.55);
    box-sizing: border-box;
  }

  [data-page="rewards"] .checkin-panel p {
    color: #858ab5;
    font-size: 11px;
    font-weight: 700;
    margin: 8px 0 0;
  }

  [data-page="rewards"] .checkin-panel p b {
    color: #7d66e8;
  }

  [data-page="rewards"] .event-list {
    display: grid;
    gap: 10px;
  }

  [data-page="rewards"] .event-banner {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: block;
    line-height: 0;
    padding: 0;
    width: 100%;
  }

  [data-page="rewards"] .event-banner img {
    border-radius: 14px;
    display: block;
    height: auto;
    max-height: 88px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  [data-page="rewards"] .record-list {
    display: grid;
    gap: 10px;
  }

  [data-page="rewards"] .record-empty {
    background: rgba(248, 245, 255, 0.72);
    border-radius: 15px;
    color: #9297bd;
    font-size: 12px;
    font-weight: 700;
    padding: 18px 14px;
    text-align: center;
  }

  [data-page="rewards"] .record-item {
    align-items: center;
    background: rgba(248, 245, 255, 0.86);
    border-radius: 15px;
    display: grid;
    gap: 10px;
    grid-template-columns: 42px 1fr auto;
    padding: 10px;
  }

  [data-page="rewards"] .record-item img {
    background: #fff;
    border-radius: 12px;
    height: 42px;
    object-fit: contain;
    padding: 5px;
    width: 42px;
  }

  [data-page="rewards"] .record-item div {
    display: grid;
    gap: 3px;
  }

  [data-page="rewards"] .record-item strong {
    color: #263277;
    font-size: 12px;
  }

  [data-page="rewards"] .record-item span,
  [data-page="rewards"] .record-item small {
    color: #9297bd;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="rewards"] .record-item b {
    color: #7d66e8;
    font-size: 12px;
    text-align: right;
  }

  [data-page="rewards"] .records-link {
    margin-top: 12px;
    width: 100%;
  }

  @media (max-width: 1280px) {
    [data-page="rewards"] .rewards-dashboard {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .rewards-right-rail {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 980px) {
    [data-page="rewards"] .rewards-points-hero {
      background-size: 100% 125%;
      min-height: 380px;
      padding: 15px 15px;
    }

    [data-page="rewards"] .rewards-points-stats {
      max-width: min(360px, 72%);
    }

    [data-page="rewards"] .rewards-earn-card {
      width: min(100%, 260px);
    }

    [data-page="rewards"] .reward-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    [data-page="rewards"] .overview-content,
    [data-page="rewards"] .rewards-right-rail {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .growth-reward {
      flex-basis: 104px;
      width: 104px;
    }
  }

  .prototype-toast {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 80;
    border-radius: 999px;
    padding: 14px 20px;
    background: rgba(19,32,95,.92);
    color: #fff;
    box-shadow: 0 18px 45px rgba(19,32,95,.24);
    font-weight: 800;
  }

  .prototype-toast-anchored,
  .prototype-toast-shop {
    position: absolute;
    left: 50%;
    top: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    z-index: 50;
    max-width: min(320px, calc(100% - 32px));
    text-align: center;
    pointer-events: none;
  }

  [data-page="rewards"] .reward-market {
    position: relative;
  }
  /* AIFA-92: 有/无结果同画幅；三栏同高；过长仅结果卡内滚；右栏历史卡撑满不留底空 */
  [data-page="scan"] .scan-wrap {
    /* 与 Home .page 同量级：Home 实测约 100vh；两态同高 */
    --scan-col-h: max(980px, 100vh);
    align-items: stretch;
    grid-template-columns: minmax(220px, 250px) minmax(360px, 1fr) minmax(280px, 360px);
    min-height: 0;
  }
  [data-page="scan"] .feature-stack,
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-wrap > .grid {
    min-width: 0;
  }
  [data-page="scan"] .feature-stack,
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-side-panel {
    align-self: stretch;
    box-sizing: border-box;
    height: var(--scan-col-h);
    max-height: var(--scan-col-h);
    min-height: var(--scan-col-h);
  }
  [data-page="scan"] .feature-stack {
    display: grid;
    gap: 18px;
    grid-template-rows: auto auto auto minmax(0, 1fr);
  }
  [data-page="scan"] .feature-stack > .card.soft {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 0;
  }
  [data-page="scan"] .scan-wrap > .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  [data-page="scan"] .scan-wrap > .card > .scan-orbit,
  [data-page="scan"] .scan-wrap > .card > h3,
  [data-page="scan"] .scan-wrap > .card > p,
  [data-page="scan"] .scan-wrap > .card > .hero-buttons,
  [data-page="scan"] .scan-wrap > .card > .scan-analysis-status {
    flex: 0 0 auto;
  }
  [data-page="scan"] .scan-side-panel {
    align-content: stretch;
    display: grid;
    grid-template-rows: auto auto minmax(0, 1fr);
    min-width: 0;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: auto;
    max-height: none;
    min-height: 0;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card > h3 {
    flex: 0 0 auto;
    margin-bottom: 0;
  }
  [data-page="scan"] .feature,
  [data-page="scan"] .scan-wrap > .grid .card,
  [data-page="scan"] .scan-wrap small,
  [data-page="scan"] .scan-wrap p,
  [data-page="scan"] .scan-wrap b {
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-history-card .scan-record-text,
  [data-page="scan"] .scan-history-card .scan-record-title,
  [data-page="scan"] .scan-history-card .scan-record-meta {
    overflow-wrap: normal;
    word-break: normal;
  }
  [data-page="scan"] .scan-wrap > .grid .three {
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  [data-page="scan"] .scan-stat-grid {
    align-items: start;
  }
  /* AIFA-109: 三指标同行等比放大；短标签保证「真实 AI」完整可读、无 ellipsis */
  [data-page="scan"] .scan-week {
    align-items: center !important;
    min-height: 132px;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
  [data-page="scan"] .scan-week strong {
    display: block;
    color: #8054e8 !important;
    font-size: 42px !important;
    line-height: 1.1 !important;
    font-weight: 800;
  }
  [data-page="scan"] .scan-week strong small {
    display: inline !important;
    margin-left: 3px;
    margin-top: 0 !important;
    font-size: 20px !important;
    color: #8054e8 !important;
    font-weight: 800;
  }
  [data-page="scan"] .scan-week span {
    margin-top: 12px !important;
    font-size: 16px !important;
    font-weight: 700;
  }
  [data-page="scan"] .scan-week > div > small {
    display: none !important;
  }
  [data-page="scan"] .scan-week .scan-source-value {
    display: block !important;
    height: auto !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 42px !important;
    line-height: 1.1 !important;
    font-weight: 800;
    color: #8054e8 !important;
    overflow: visible !important;
    text-overflow: clip !important;
    white-space: nowrap !important;
  }
  [data-page="scan"] .scan-stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
    width: 100%;
    text-align: center;
  }
  [data-page="scan"] .scan-stat-value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 42px;
  }
  [data-page="scan"] .scan-stat-grid .big-number {
    display: block;
    width: 100%;
    font-size: clamp(22px, 2.2vw, 40px);
    line-height: 1;
    max-width: 100%;
    font-variant-numeric: tabular-nums;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-stat-grid .big-number[data-digits="3"] {
    font-size: clamp(20px, 1.9vw, 34px);
  }
  [data-page="scan"] .scan-stat-grid .big-number[data-digits="4"] {
    font-size: clamp(18px, 1.6vw, 28px);
  }
  [data-page="scan"] .scan-stat-item small {
    color: var(--ink);
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }
  [data-page="scan"] .scan-source-stat {
    margin-top: 0;
    position: relative;
  }
  [data-page="scan"] .scan-source-value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 34px;
    max-width: min(100%, 112px);
    min-width: 0;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-source-value:hover::after {
    content: attr(data-full-source);
    position: absolute;
    right: 0;
    top: -42px;
    z-index: 30;
    max-width: 360px;
    border-radius: 14px;
    padding: 10px 12px;
    background: rgba(19,32,95,.94);
    color: #fff;
    box-shadow: 0 14px 34px rgba(19,32,95,.22);
    font-size: 12px;
    line-height: 1.35;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  [data-page="scan"] .scan-history-card .item {
    align-items: center;
    box-sizing: border-box;
    gap: 10px;
    grid-template-columns: 32px minmax(0, 1fr) auto;
    height: 68px;
    min-height: 68px;
    max-height: 68px;
    overflow: hidden;
    padding: 10px 12px;
  }
  [data-page="scan"] .scan-history-card .scan-record-text {
    display: grid;
    gap: 2px;
    min-width: 0;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card .scan-record-title,
  [data-page="scan"] .scan-history-card .scan-record-meta {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-history-card .scan-record-title {
    font-size: 14px;
    line-height: 1.25;
  }
  [data-page="scan"] .scan-history-card .scan-record-meta {
    font-size: 12px;
    line-height: 1.25;
  }
  [data-page="scan"] .scan-history-card .status {
    align-self: center;
    max-width: 118px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* AIFA-80/88: 固定 4 行视口，翻页/短标题不撑开壳层 */
  [data-page="scan"] .scan-record-list {
    align-content: start;
    display: grid;
    flex: 0 0 auto;
    gap: 10px;
    grid-auto-rows: 68px;
    height: calc(4 * 68px + 3 * 10px);
    max-height: calc(4 * 68px + 3 * 10px);
    min-height: calc(4 * 68px + 3 * 10px);
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card .scan-record-placeholder {
    opacity: 0;
    pointer-events: none;
  }
  [data-page="scan"] .scan-record-pager {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: space-between;
    margin-top: auto;
    min-height: 48px;
    padding-top: 12px;
  }
  [data-page="scan"] .scan-record-pager[data-pager-idle="1"] {
    visibility: hidden;
  }
  [data-page="scan"] .scan-record-pager .pill {
    min-height: 36px;
    padding: 0 14px;
  }
  [data-page="scan"] .scan-record-pager .pill:disabled {
    cursor: not-allowed;
    opacity: .45;
  }
  @media (max-width: 1180px) {
    [data-page="scan"] .scan-wrap {
      min-height: 0;
    }
    [data-page="scan"] .feature-stack,
    [data-page="scan"] .scan-wrap > .card,
    [data-page="scan"] .scan-side-panel {
      height: auto;
      max-height: none;
      min-height: 0;
    }
    [data-page="scan"] .feature-stack {
      grid-template-rows: none;
    }
    [data-page="scan"] .scan-wrap > .card {
      overflow: visible;
    }
    [data-page="scan"] .scan-side-panel {
      overflow: visible;
    }
    [data-page="scan"] .scan-history-card {
      height: auto;
      min-height: calc(28px + (4 * 68px) + (3 * 10px) + 48px);
    }
    [data-page="scan"] .scan-result-card {
      flex: 0 0 auto;
      max-height: none;
      overflow: visible;
    }
  }
  [data-page="scan"] .has-analysis-result {
    justify-content: flex-start;
    overflow: hidden;
    padding: 18px;
  }
  [data-page="scan"] .has-analysis-result > h3,
  [data-page="scan"] .has-analysis-result > p {
    display: none;
  }
  [data-page="scan"] .has-analysis-result .scan-orbit {
    aspect-ratio: 1 / 1;
    flex: 0 0 auto;
    /* 结果态略收圆环给结果卡让位，但仍保持可读尺寸；不靠压扁整栏迁就右栏 */
    height: min(28vw, 340px);
    margin: 0 auto 12px;
    overflow: visible;
    width: min(28vw, 340px);
  }
  [data-page="scan"] .has-analysis-result .scan-orbit::before {
    border-width: 5px;
    inset: 10px;
  }
  [data-page="scan"] .has-analysis-result .scan-orbit .buddy {
    transform: scale(.43) !important;
    transform-origin: center center;
  }
  [data-page="scan"] .has-analysis-result .scan-percent {
    bottom: 18px;
    font-size: 18px;
    padding: 6px 18px;
  }
  [data-page="scan"] .has-analysis-result > h3 {
    margin-top: 12px;
  }
  .scan-analysis-status {
    margin: 12px auto 0;
    max-width: 420px;
    padding: 10px 12px;
    border-radius: 14px;
    background: rgba(255, 248, 236, 0.92);
    border: 1px solid rgba(210, 168, 110, 0.35);
    text-align: center;
  }
  .scan-analysis-status.is-waiting {
    background: rgba(236, 244, 255, 0.95);
    border-color: rgba(120, 160, 220, 0.4);
  }
  .scan-analysis-status.is-error {
    background: rgba(255, 240, 236, 0.96);
    border-color: rgba(220, 140, 120, 0.45);
  }
  .scan-analysis-status.is-success {
    background: rgba(236, 250, 240, 0.95);
    border-color: rgba(120, 190, 140, 0.4);
  }
  .scan-analysis-status-text {
    margin: 0;
    font-size: 13px;
    line-height: 1.45;
    color: #5a4a3a;
  }
  .scan-analysis-retry {
    margin-top: 10px;
  }
  [data-page="scan"] .scan-result-card {
    box-sizing: border-box;
    flex: 1 1 auto;
    margin: 0 auto;
    max-width: 620px;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 18px 16px 16px;
    text-align: left;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  .scan-result-source {
    margin-bottom: 10px;
  }
  .analysis-source-badge {
    display: inline-block;
    max-width: 100%;
    height: auto;
    min-height: 28px;
    min-width: 0;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(139, 92, 246, 0.12);
    color: #65709e;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.35;
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .analysis-source-detail {
    color: #ff7a2f;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 10px;
    overflow-wrap: anywhere;
  }
  .scan-result-title {
    color: #6d4bd6;
    font-size: clamp(24px, 5.2vw, 34px);
    font-weight: 900;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin: 0 0 10px;
  }
  .scan-result-summary {
    color: #3d4670;
    font-size: 14px;
    line-height: 1.55;
    margin: 0 0 14px;
  }
  .scan-result-card > p {
    margin: 10px 0;
    line-height: 1.5;
  }
  .scan-result-card > small {
    color: #8a93b8;
    display: block;
    margin-top: 12px;
  }
  .analysis-metrics {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 4px;
    text-align: center;
  }
  .analysis-metric {
    border-radius: 18px;
    background: rgba(255,255,255,.65);
    padding: 12px 8px;
  }
  .analysis-metric .big-number {
    display: block;
    font-size: clamp(26px, 4vw, 44px);
    line-height: 1;
    overflow-wrap: anywhere;
  }
  .analysis-metric small {
    color: #65709e;
    display: block;
    font-weight: 800;
    margin-top: 6px;
  }
  .analysis-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }

  [data-page="buddy"] .buddy-dashboard {
    display: grid;
    gap: 20px;
  }
  [data-page="buddy"] .buddy-row {
    display: grid;
    gap: 20px;
    min-width: 0;
  }
  [data-page="buddy"] .buddy-row-top {
    grid-template-columns: minmax(240px, 0.95fr) minmax(220px, 0.8fr) minmax(260px, 1.15fr);
    align-items: stretch;
  }
  [data-page="buddy"] .buddy-row-mid {
    grid-template-columns: minmax(0, 1.65fr) minmax(240px, 0.7fr);
    align-items: stretch;
  }
  [data-page="buddy"] .buddy-row-bottom {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  }
  [data-page="buddy"] .buddy-identity,
  [data-page="buddy"] .buddy-report,
  [data-page="buddy"] .buddy-hero-slot,
  [data-page="buddy"] .buddy-skins,
  [data-page="buddy"] .buddy-actions {
    min-width: 0;
  }
  [data-page="buddy"] .buddy-identity {
    display: grid;
    gap: 18px;
    align-content: start;
  }
  [data-page="buddy"] .buddy-kicker {
    color: #8b7bb8;
    display: block;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .04em;
    margin-bottom: 6px;
    text-transform: uppercase;
  }
  [data-page="buddy"] .buddy-identity h2 {
    font-size: clamp(28px, 2.4vw, 38px);
    line-height: 1.15;
    margin: 0;
  }
  [data-page="buddy"] .buddy-identity [data-buddy-days] {
    margin: 8px 0 0;
  }
  [data-page="buddy"] .buddy-report {
    display: grid;
    align-content: start;
    gap: 10px;
  }
  [data-page="buddy"] .buddy-report-score {
    align-items: end;
    display: flex;
    gap: 10px;
  }
  [data-page="buddy"] .buddy-report-score small {
    color: var(--muted);
    font-weight: 700;
    padding-bottom: 8px;
  }
  [data-page="buddy"] .buddy-hero-slot {
    display: grid;
    padding: 14px;
  }
  [data-page="buddy"] .buddy-hero-placeholder {
    align-content: center;
    aspect-ratio: 4 / 5;
    background:
      radial-gradient(circle at 50% 28%, rgba(255,255,255,.72), transparent 42%),
      linear-gradient(165deg, #efe7ff 0%, #f7f1ff 42%, #e8f7ef 100%);
    border-radius: 28px;
    color: #6f64a8;
    display: grid;
    gap: 6px;
    justify-items: center;
    min-height: 280px;
    place-content: center;
    text-align: center;
  }
  [data-page="buddy"] .buddy-hero-placeholder span {
    font-size: 18px;
    font-weight: 900;
  }
  [data-page="buddy"] .buddy-hero-placeholder small {
    color: #9085b8;
    font-weight: 700;
  }
  [data-page="buddy"] .buddy-skins {
    display: grid;
    gap: 14px;
    min-height: 0;
  }
  [data-page="buddy"] .skin-rail {
    margin: 0 -4px;
    overflow-x: auto;
    padding: 2px 4px 8px;
  }
  [data-page="buddy"] .buddy-skins .skin-grid {
    display: flex;
    gap: 14px;
    grid-template-columns: none;
    min-width: max-content;
    width: max-content;
  }
  [data-page="buddy"] .buddy-skins .skin {
    flex: 0 0 148px;
    width: 148px;
  }
  [data-page="buddy"] .buddy-actions {
    display: grid;
    gap: 12px;
    grid-auto-rows: 1fr;
  }
  [data-page="buddy"] .buddy-actions .item {
    min-height: 72px;
  }
  [data-page="buddy"] .metric-row {
    grid-template-columns: 36px 64px minmax(90px, 1fr) 64px;
  }
  [data-page="buddy"] .skin {
    position: relative;
  }
  [data-page="buddy"] .buddy-lock {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
  [data-page="buddy"] .buddy-action {
    transition: transform .18s ease, box-shadow .18s ease;
  }
  [data-page="buddy"] .buddy-action:hover {
    box-shadow: 0 14px 34px rgba(99, 75, 168, .12);
    transform: translateY(-2px);
  }
  [data-page="buddy"] .buddy-action.dress { background: rgba(139, 92, 246, .10); }
  [data-page="buddy"] .buddy-action.feed { background: rgba(255, 122, 47, .10); }
  [data-page="buddy"] .buddy-action.diary { background: rgba(99, 102, 241, .10); }
  [data-page="buddy"] .buddy-action.growth { background: rgba(101, 201, 130, .12); }
  [data-page="buddy"] .buddy-extra-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    margin-top: 0;
  }
  .buddy-summary-stats,
  .buddy-cheers {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .buddy-summary-stats span,
  .buddy-cheer {
    border-radius: 18px;
    background: rgba(255,255,255,.58);
    padding: 14px;
  }
  .buddy-summary-stats b,
  .buddy-summary-stats small {
    display: block;
  }
  .buddy-cheers {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .buddy-cheer .avatar {
    align-items: center;
    background: linear-gradient(135deg, #ffe4ee, #e8ddff);
    border-radius: 999px;
    display: inline-flex;
    font-weight: 900;
    height: 36px;
    justify-content: center;
    margin-right: 8px;
    width: 36px;
  }
  @media (max-width: 1180px) {
    [data-page="buddy"] .buddy-row-top {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    [data-page="buddy"] .buddy-hero-slot {
      grid-column: 1 / -1;
    }
    [data-page="buddy"] .buddy-row-mid,
    [data-page="buddy"] .buddy-row-bottom,
    [data-page="buddy"] .buddy-extra-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 760px) {
    [data-page="buddy"] .buddy-row-top {
      grid-template-columns: 1fr;
    }
    .buddy-summary-stats,
    .buddy-cheers {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  #checkin .pill,
  #shop .pill,
  #timeline .pill,
  [data-page="journey"] aside .pill {
    margin-top: 8px;
  }
  #milestones .milestone {
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
  }
  #milestones .milestone:hover .dot,
  #timeline .journey-record:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(99, 75, 168, 0.12);
  }
  #timeline .journey-record {
    grid-template-columns: 64px minmax(180px, 1fr) auto auto auto auto;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  #timeline .journey-empty {
    grid-template-columns: 48px minmax(180px, 1fr) auto;
  }
  .camera-capture-modal {
    align-items: center;
    background: rgba(19, 32, 95, .58);
    display: flex;
    inset: 0;
    justify-content: center;
    padding: 24px;
    position: fixed;
    z-index: 60;
  }
  .camera-capture-box {
    background: rgba(255, 255, 255, .92);
    border-radius: 18px;
    box-shadow: 0 24px 70px rgba(19, 32, 95, .28);
    max-width: 720px;
    padding: 18px;
    width: min(100%, 720px);
  }
  .camera-capture-box video {
    background: #13205f;
    border-radius: 14px;
    display: block;
    margin-bottom: 14px;
    max-height: 62vh;
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 720px) {
    .analysis-metrics {
      grid-template-columns: 1fr;
    }
    .scan-result-title {
      font-size: clamp(22px, 7vw, 30px);
    }
    #timeline .journey-record,
    #timeline .journey-empty {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }

  .ai-chat-widget {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 40;
    font-family: inherit;
  }
  .ai-chat-bubble {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 999px;
    padding: 10px 16px 10px 10px;
    background: linear-gradient(135deg, #8b5cf6, #65c982);
    color: #fff;
    box-shadow: 0 20px 55px rgba(99, 75, 168, 0.32);
    cursor: grab;
    font-weight: 900;
  }
  .ai-chat-bubble img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    flex: 0 0 36px;
    filter: drop-shadow(0 2px 4px rgba(40, 20, 80, 0.18));
  }
  .ai-chat-bubble:active { cursor: grabbing; }
  .ai-chat-panel {
    display: none;
    width: var(--ai-chat-w, min(360px, calc(100vw - 24px)));
    height: var(--ai-chat-h, min(520px, calc(100dvh - 24px)));
    max-width: calc(100vw - 24px);
    max-height: calc(100dvh - 24px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 28px;
    background: rgba(255, 250, 255, 0.96);
    box-shadow: 0 26px 80px rgba(19, 32, 95, 0.22);
  }
  .ai-chat-widget.open .ai-chat-bubble { display: none; }
  .ai-chat-widget.open .ai-chat-panel {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }
  .ai-chat-header {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-rows: auto auto;
    align-items: center;
    gap: 2px 12px;
    padding: 16px 18px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(101, 201, 130, 0.18));
  }
  /* AIFA-115: 标题左圆形头像，与 FAB 同源（Buddy「使用中」） */
  .ai-chat-header-avatar {
    grid-row: 1 / span 2;
    grid-column: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 2px 8px rgba(40, 20, 80, 0.12);
  }
  .ai-chat-header b {
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
  }
  .ai-chat-header small {
    grid-column: 2;
    grid-row: 2;
    color: #65709e;
  }
  .ai-chat-header button {
    grid-row: 1 / span 2;
    grid-column: 3;
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #fff;
    color: #13205f;
    cursor: pointer;
  }
  .ai-chat-messages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    min-height: 0;
    padding: 16px;
  }
  .ai-chat-msg {
    max-width: 82%;
    border-radius: 18px;
    padding: 10px 12px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  .ai-chat-msg.assistant {
    align-self: flex-start;
    background: #fff;
    color: #13205f;
  }
  .ai-chat-msg.user {
    align-self: flex-end;
    background: #8b5cf6;
    color: #fff;
  }
  .ai-chat-form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    padding: 14px;
    border-top: 1px solid rgba(101, 112, 158, 0.14);
  }
  .ai-chat-form input {
    min-width: 0;
    border: 1px solid rgba(101, 112, 158, 0.2);
    border-radius: 999px;
    padding: 12px 14px;
    outline: none;
  }
  .ai-chat-form button {
    border: 0;
    border-radius: 999px;
    padding: 0 16px;
    background: #65c982;
    color: #fff;
    font-weight: 900;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    .ai-chat-widget {
      right: 16px;
      bottom: 16px;
    }
  }
  .diary-summary { margin: 16px 0; text-align: center; }
  .calendar .diary-record-day { position: relative; box-shadow: inset 0 0 0 2px rgba(139,92,246,.45); cursor: pointer; }
  .calendar .diary-record-day small { color: #65c982; font-size: 18px; line-height: 0; }
  .diary-layout .diary-main-grid { grid-template-columns: 300px minmax(0, 1fr); gap: 18px; }
  .diary-side-left .diary-mood-filter-title { margin-top: 18px; }
  .diary-mood-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0 18px; }
  .diary-mood-legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; color: #65709e; font-size: 13px; font-weight: 700; }
  .diary-hero-meta { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 12px; }
  .diary-hero-advice { margin-top: 14px; color: #65709e; }
  .diary-feed-card { display: grid; gap: 14px; align-content: start; }
  .diary-feed-head { display: flex; justify-content: space-between; gap: 12px; align-items: start; }
  .diary-feed-sub { margin-top: 4px; color: #65709e; font-size: 13px; }
  .diary-feed { display: grid; gap: 12px; }
  .diary-entry {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) 84px 28px;
    gap: 14px;
    align-items: center;
    border-radius: 18px;
    padding: 14px 12px;
    background: rgba(255,255,255,.72);
    box-shadow: 0 10px 28px rgba(99,75,168,.08);
    cursor: pointer;
  }
  .diary-entry-date {
    display: grid;
    place-items: center;
    text-align: center;
    color: #13205f;
  }
  .diary-entry-date b { font-size: 28px; line-height: 1; }
  .diary-entry-date small { color: #8b5cf6; font-weight: 800; }
  .diary-entry-main h4 { margin: 6px 0 4px; font-size: 16px; color: #13205f; }
  .diary-entry-main p {
    margin: 0;
    color: #65709e;
    font-size: 13px;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .diary-mood-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: 999px;
    padding: 4px 10px;
    background: rgba(139,92,246,.12);
    color: #6d28d9;
    font-size: 12px;
    font-weight: 800;
  }
  .diary-entry-meta { display: flex; gap: 10px; margin-top: 8px; color: #8b849f; font-size: 12px; font-weight: 700; }
  .diary-entry-thumb {
    width: 84px;
    height: 84px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    font-size: 34px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.7);
  }
  .diary-entry-thumb.tone-sunny,
  .diary-memory-thumb.tone-sunny { background: linear-gradient(145deg, #fff7d6, #ffd9ec); }
  .diary-entry-thumb.tone-mint,
  .diary-memory-thumb.tone-mint { background: linear-gradient(145deg, #e8fff4, #d7f0ff); }
  .diary-entry-thumb.tone-lavender,
  .diary-memory-thumb.tone-lavender { background: linear-gradient(145deg, #f1e9ff, #ffe8f6); }
  .diary-entry-thumb.tone-sprout,
  .diary-memory-thumb.tone-sprout { background: linear-gradient(145deg, #e9ffe3, #fff4d0); }
  .diary-entry-thumb.tone-cloud,
  .diary-memory-thumb.tone-cloud { background: linear-gradient(145deg, #eef2ff, #f5f0ff); }
  .diary-entry-thumb.tone-warm,
  .diary-memory-thumb.tone-warm { background: linear-gradient(145deg, #ffe9d6, #ffe0ef); }
  .diary-entry-more {
    border: 0;
    background: transparent;
    color: #8b849f;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
  }
  .diary-empty {
    display: grid;
    gap: 10px;
    justify-items: start;
    padding: 18px 8px;
    color: #65709e;
  }
  .diary-empty span { font-size: 28px; }
  .diary-load-more { justify-self: center; }
  .diary-memory-thumb { font-size: 54px; }
  @media (max-width: 1100px) {
    .diary-layout .diary-main-grid { grid-template-columns: 1fr; }
    .diary-entry { grid-template-columns: 56px minmax(0, 1fr) 72px; }
    .diary-entry-more { display: none; }
  }
  /* Keep media column auto-sized (final-pages). A fixed 90px third track
     overflowed multi-thumb posts into the gutter between feed and rail. */
  .community-post { align-items: start; grid-template-columns: 52px minmax(0, 1fr) auto; }
  .community-post .community-media { min-width: 0; max-width: 100%; }
  .community-post .community-media img { flex: 0 0 auto; }
  .comments { display: grid; gap: 8px; margin-top: 12px; }
  .comments.collapsed { display: none; }
  .comments-extra { display: grid; gap: 8px; }
  .comments-extra.collapsed { display: none; }
  .comment { border-radius: 16px; padding: 10px 12px; background: rgba(255,255,255,.68); color: #65709e; font-size: 14px; }

`;Lm.createRoot(document.getElementById("root")).render(il.jsx(yr.StrictMode,{children:il.jsx(Uv,{})}));
