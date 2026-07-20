(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=i(d);fetch(d.href,p)}})();function Cc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wl={exports:{}},ta={},kl={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function hg(){if(Wd)return pe;Wd=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function $(b){return b===null||typeof b!="object"?null:(b=C&&b[C]||b["@@iterator"],typeof b=="function"?b:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function R(b,L,le){this.props=b,this.context=L,this.refs=H,this.updater=le||I}R.prototype.isReactComponent={},R.prototype.setState=function(b,L){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,L,"setState")},R.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function P(){}P.prototype=R.prototype;function U(b,L,le){this.props=b,this.context=L,this.refs=H,this.updater=le||I}var W=U.prototype=new P;W.constructor=U,q(W,R.prototype),W.isPureReactComponent=!0;var F=Array.isArray,se=Object.prototype.hasOwnProperty,X={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function re(b,L,le){var ue,ge={},J=null,ce=null;if(L!=null)for(ue in L.ref!==void 0&&(ce=L.ref),L.key!==void 0&&(J=""+L.key),L)se.call(L,ue)&&!de.hasOwnProperty(ue)&&(ge[ue]=L[ue]);var me=arguments.length-2;if(me===1)ge.children=le;else if(1<me){for(var xe=Array(me),et=0;et<me;et++)xe[et]=arguments[et+2];ge.children=xe}if(b&&b.defaultProps)for(ue in me=b.defaultProps,me)ge[ue]===void 0&&(ge[ue]=me[ue]);return{$$typeof:r,type:b,key:J,ref:ce,props:ge,_owner:X.current}}function ae(b,L){return{$$typeof:r,type:b.type,key:L,ref:b.ref,props:b.props,_owner:b._owner}}function G(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Z(b){var L={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(le){return L[le]})}var ye=/\/+/g;function Re(b,L){return typeof b=="object"&&b!==null&&b.key!=null?Z(""+b.key):L.toString(36)}function Ee(b,L,le,ue,ge){var J=typeof b;(J==="undefined"||J==="boolean")&&(b=null);var ce=!1;if(b===null)ce=!0;else switch(J){case"string":case"number":ce=!0;break;case"object":switch(b.$$typeof){case r:case s:ce=!0}}if(ce)return ce=b,ge=ge(ce),b=ue===""?"."+Re(ce,0):ue,F(ge)?(le="",b!=null&&(le=b.replace(ye,"$&/")+"/"),Ee(ge,L,le,"",function(et){return et})):ge!=null&&(G(ge)&&(ge=ae(ge,le+(!ge.key||ce&&ce.key===ge.key?"":(""+ge.key).replace(ye,"$&/")+"/")+b)),L.push(ge)),1;if(ce=0,ue=ue===""?".":ue+":",F(b))for(var me=0;me<b.length;me++){J=b[me];var xe=ue+Re(J,me);ce+=Ee(J,L,le,xe,ge)}else if(xe=$(b),typeof xe=="function")for(b=xe.call(b),me=0;!(J=b.next()).done;)J=J.value,xe=ue+Re(J,me++),ce+=Ee(J,L,le,xe,ge);else if(J==="object")throw L=String(b),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ze(b,L,le){if(b==null)return b;var ue=[],ge=0;return Ee(b,ue,"","",function(J){return L.call(le,J,ge++)}),ue}function Ae(b){if(b._status===-1){var L=b._result;L=L(),L.then(function(le){(b._status===0||b._status===-1)&&(b._status=1,b._result=le)},function(le){(b._status===0||b._status===-1)&&(b._status=2,b._result=le)}),b._status===-1&&(b._status=0,b._result=L)}if(b._status===1)return b._result.default;throw b._result}var ke={current:null},M={transition:null},ee={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:M,ReactCurrentOwner:X};function j(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Ze,forEach:function(b,L,le){Ze(b,function(){L.apply(this,arguments)},le)},count:function(b){var L=0;return Ze(b,function(){L++}),L},toArray:function(b){return Ze(b,function(L){return L})||[]},only:function(b){if(!G(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},pe.Component=R,pe.Fragment=i,pe.Profiler=d,pe.PureComponent=U,pe.StrictMode=u,pe.Suspense=x,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,pe.act=j,pe.cloneElement=function(b,L,le){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ue=q({},b.props),ge=b.key,J=b.ref,ce=b._owner;if(L!=null){if(L.ref!==void 0&&(J=L.ref,ce=X.current),L.key!==void 0&&(ge=""+L.key),b.type&&b.type.defaultProps)var me=b.type.defaultProps;for(xe in L)se.call(L,xe)&&!de.hasOwnProperty(xe)&&(ue[xe]=L[xe]===void 0&&me!==void 0?me[xe]:L[xe])}var xe=arguments.length-2;if(xe===1)ue.children=le;else if(1<xe){me=Array(xe);for(var et=0;et<xe;et++)me[et]=arguments[et+2];ue.children=me}return{$$typeof:r,type:b.type,key:ge,ref:J,props:ue,_owner:ce}},pe.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:p,_context:b},b.Consumer=b},pe.createElement=re,pe.createFactory=function(b){var L=re.bind(null,b);return L.type=b,L},pe.createRef=function(){return{current:null}},pe.forwardRef=function(b){return{$$typeof:m,render:b}},pe.isValidElement=G,pe.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:Ae}},pe.memo=function(b,L){return{$$typeof:S,type:b,compare:L===void 0?null:L}},pe.startTransition=function(b){var L=M.transition;M.transition={};try{b()}finally{M.transition=L}},pe.unstable_act=j,pe.useCallback=function(b,L){return ke.current.useCallback(b,L)},pe.useContext=function(b){return ke.current.useContext(b)},pe.useDebugValue=function(){},pe.useDeferredValue=function(b){return ke.current.useDeferredValue(b)},pe.useEffect=function(b,L){return ke.current.useEffect(b,L)},pe.useId=function(){return ke.current.useId()},pe.useImperativeHandle=function(b,L,le){return ke.current.useImperativeHandle(b,L,le)},pe.useInsertionEffect=function(b,L){return ke.current.useInsertionEffect(b,L)},pe.useLayoutEffect=function(b,L){return ke.current.useLayoutEffect(b,L)},pe.useMemo=function(b,L){return ke.current.useMemo(b,L)},pe.useReducer=function(b,L,le){return ke.current.useReducer(b,L,le)},pe.useRef=function(b){return ke.current.useRef(b)},pe.useState=function(b){return ke.current.useState(b)},pe.useSyncExternalStore=function(b,L,le){return ke.current.useSyncExternalStore(b,L,le)},pe.useTransition=function(){return ke.current.useTransition()},pe.version="18.3.1",pe}var Xd;function ql(){return Xd||(Xd=1,kl.exports=hg()),kl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function vg(){if(Vd)return ta;Vd=1;var r=ql(),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(m,x,S){var w,C={},$=null,I=null;S!==void 0&&($=""+S),x.key!==void 0&&($=""+x.key),x.ref!==void 0&&(I=x.ref);for(w in x)u.call(x,w)&&!p.hasOwnProperty(w)&&(C[w]=x[w]);if(m&&m.defaultProps)for(w in x=m.defaultProps,x)C[w]===void 0&&(C[w]=x[w]);return{$$typeof:s,type:m,key:$,ref:I,props:C,_owner:d.current}}return ta.Fragment=i,ta.jsx=f,ta.jsxs=f,ta}var Qd;function yg(){return Qd||(Qd=1,wl.exports=vg()),wl.exports}var Ol=yg(),zl=ql();const ra=Cc(zl);var xs={},Sl={exports:{}},ot={},El={exports:{}},_l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function bg(){return Kd||(Kd=1,(function(r){function s(M,ee){var j=M.length;M.push(ee);e:for(;0<j;){var b=j-1>>>1,L=M[b];if(0<d(L,ee))M[b]=ee,M[j]=L,j=b;else break e}}function i(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var ee=M[0],j=M.pop();if(j!==ee){M[0]=j;e:for(var b=0,L=M.length,le=L>>>1;b<le;){var ue=2*(b+1)-1,ge=M[ue],J=ue+1,ce=M[J];if(0>d(ge,j))J<L&&0>d(ce,ge)?(M[b]=ce,M[J]=j,b=J):(M[b]=ge,M[ue]=j,b=ue);else if(J<L&&0>d(ce,j))M[b]=ce,M[J]=j,b=J;else break e}}return ee}function d(M,ee){var j=M.sortIndex-ee.sortIndex;return j!==0?j:M.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var x=[],S=[],w=1,C=null,$=3,I=!1,q=!1,H=!1,R=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(M){for(var ee=i(S);ee!==null;){if(ee.callback===null)u(S);else if(ee.startTime<=M)u(S),ee.sortIndex=ee.expirationTime,s(x,ee);else break;ee=i(S)}}function F(M){if(H=!1,W(M),!q)if(i(x)!==null)q=!0,Ae(se);else{var ee=i(S);ee!==null&&ke(F,ee.startTime-M)}}function se(M,ee){q=!1,H&&(H=!1,P(re),re=-1),I=!0;var j=$;try{for(W(ee),C=i(x);C!==null&&(!(C.expirationTime>ee)||M&&!Z());){var b=C.callback;if(typeof b=="function"){C.callback=null,$=C.priorityLevel;var L=b(C.expirationTime<=ee);ee=r.unstable_now(),typeof L=="function"?C.callback=L:C===i(x)&&u(x),W(ee)}else u(x);C=i(x)}if(C!==null)var le=!0;else{var ue=i(S);ue!==null&&ke(F,ue.startTime-ee),le=!1}return le}finally{C=null,$=j,I=!1}}var X=!1,de=null,re=-1,ae=5,G=-1;function Z(){return!(r.unstable_now()-G<ae)}function ye(){if(de!==null){var M=r.unstable_now();G=M;var ee=!0;try{ee=de(!0,M)}finally{ee?Re():(X=!1,de=null)}}else X=!1}var Re;if(typeof U=="function")Re=function(){U(ye)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ze=Ee.port2;Ee.port1.onmessage=ye,Re=function(){Ze.postMessage(null)}}else Re=function(){R(ye,0)};function Ae(M){de=M,X||(X=!0,Re())}function ke(M,ee){re=R(function(){M(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){q||I||(q=!0,Ae(se))},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return $},r.unstable_getFirstCallbackNode=function(){return i(x)},r.unstable_next=function(M){switch($){case 1:case 2:case 3:var ee=3;break;default:ee=$}var j=$;$=ee;try{return M()}finally{$=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,ee){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=$;$=M;try{return ee()}finally{$=j}},r.unstable_scheduleCallback=function(M,ee,j){var b=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?b+j:b):j=b,M){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,M={id:w++,callback:ee,priorityLevel:M,startTime:j,expirationTime:L,sortIndex:-1},j>b?(M.sortIndex=j,s(S,M),i(x)===null&&M===i(S)&&(H?(P(re),re=-1):H=!0,ke(F,j-b))):(M.sortIndex=L,s(x,M),q||I||(q=!0,Ae(se))),M},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(M){var ee=$;return function(){var j=$;$=ee;try{return M.apply(this,arguments)}finally{$=j}}}})(_l)),_l}var Jd;function xg(){return Jd||(Jd=1,El.exports=bg()),El.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function wg(){if(Yd)return ot;Yd=1;var r=ql(),s=xg();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function $(e){return x.call(C,e)?!0:x.call(w,e)?!1:S.test(e)?C[e]=!0:(w[e]=!0,!1)}function I(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,a){if(t===null||typeof t>"u"||I(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,a,l,o,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=c}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,n,a){var l=R.hasOwnProperty(t)?R[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,n,l,a)&&(n=null),a||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var F=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),X=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),M=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,b;function L(e){if(b===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var le=!1;function ue(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var a=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){a=_}e.call(t.prototype)}else{try{throw Error()}catch(_){a=_}e()}}catch(_){if(_&&a&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),o=a.stack.split(`
`),c=l.length-1,g=o.length-1;1<=c&&0<=g&&l[c]!==o[g];)g--;for(;1<=c&&0<=g;c--,g--)if(l[c]!==o[g]){if(c!==1||g!==1)do if(c--,g--,0>g||l[c]!==o[g]){var h=`
`+l[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=g);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function ge(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case X:return"Portal";case ae:return"Profiler";case re:return"StrictMode";case Re:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yn(e){e._valueTracker||(e._valueTracker=et(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=xe(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xn(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ht(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oe(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function Be(e,t){oe(e,t);var n=me(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Et(e,t.type,n):t.hasOwnProperty("defaultValue")&&Et(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function St(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Et(e,t,n){(t!=="number"||bn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kt=Array.isArray;function Jt(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Mt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Kt(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function to(e,t){var n=me(t.value),a=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function no(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pa,ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function so(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function io(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=so(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var xp=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zs(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Un=null,Hn=null;function lo(e){if(e=Fr(e)){if(typeof Ds!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Aa(t),Ds(e.stateNode,e.type,t))}}function oo(e){Un?Hn?Hn.push(e):Hn=[e]:Un=e}function uo(){if(Un){var e=Un,t=Hn;if(Hn=Un=null,lo(e),t)for(e=0;e<t.length;e++)lo(t[e])}}function co(e,t){return e(t)}function po(){}var Ms=!1;function fo(e,t,n){if(Ms)return e(t,n);Ms=!0;try{return co(e,t,n)}finally{Ms=!1,(Un!==null||Hn!==null)&&(po(),uo())}}function br(e,t){var n=e.stateNode;if(n===null)return null;var a=Aa(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var js=!1;if(m)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){js=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{js=!1}function wp(e,t,n,a,l,o,c,g,h){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(O){this.onError(O)}}var wr=!1,fa=null,ga=!1,Fs=null,kp={onError:function(e){wr=!0,fa=e}};function Sp(e,t,n,a,l,o,c,g,h){wr=!1,fa=null,wp.apply(kp,arguments)}function Ep(e,t,n,a,l,o,c,g,h){if(Sp.apply(this,arguments),wr){if(wr){var _=fa;wr=!1,fa=null}else throw Error(i(198));ga||(ga=!0,Fs=_)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mo(e){if(wn(e)!==e)throw Error(i(188))}function _p(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return mo(l),e;if(o===a)return mo(l),t;o=o.sibling}throw Error(i(188))}if(n.return!==a.return)n=l,a=o;else{for(var c=!1,g=l.child;g;){if(g===n){c=!0,n=l,a=o;break}if(g===a){c=!0,a=l,n=o;break}g=g.sibling}if(!c){for(g=o.child;g;){if(g===n){c=!0,n=o,a=l;break}if(g===a){c=!0,a=o,n=l;break}g=g.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==a)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function ho(e){return e=_p(e),e!==null?vo(e):null}function vo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vo(e);if(t!==null)return t;e=e.sibling}return null}var yo=s.unstable_scheduleCallback,bo=s.unstable_cancelCallback,Cp=s.unstable_shouldYield,Rp=s.unstable_requestPaint,ze=s.unstable_now,Pp=s.unstable_getCurrentPriorityLevel,Us=s.unstable_ImmediatePriority,xo=s.unstable_UserBlockingPriority,ma=s.unstable_NormalPriority,Lp=s.unstable_LowPriority,wo=s.unstable_IdlePriority,ha=null,zt=null;function Tp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:zp,$p=Math.log,Op=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-($p(e)/Op|0)|0}var va=64,ya=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var g=c&~l;g!==0?a=kr(g):(o&=c,o!==0&&(a=kr(o)))}else c=n&~l,c!==0?a=kr(c):o!==0&&(a=kr(o));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-_t(t),l=1<<n,a|=e[n],t&=~l;return a}function Np(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-_t(o),g=1<<c,h=l[c];h===-1?((g&n)===0||(g&a)!==0)&&(l[c]=Np(g,t)):h<=t&&(e.expiredLanes|=g),o&=~g}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ko(){var e=va;return va<<=1,(va&4194240)===0&&(va=64),e}function Bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function Ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_t(n),o=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~o}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-_t(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var be=0;function So(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Eo,Ws,_o,Co,Ro,Xs=!1,xa=[],Yt=null,Gt=null,Zt=null,Er=new Map,_r=new Map,en=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Po(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function Cr(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Fr(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Mp(e,t,n,a,l){switch(t){case"focusin":return Yt=Cr(Yt,e,t,n,a,l),!0;case"dragenter":return Gt=Cr(Gt,e,t,n,a,l),!0;case"mouseover":return Zt=Cr(Zt,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return Er.set(o,Cr(Er.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,_r.set(o,Cr(_r.get(o)||null,e,t,n,a,l)),!0}return!1}function Lo(e){var t=kn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=go(n),t!==null){e.blockedOn=t,Ro(e.priority,function(){_o(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);As=a,n.target.dispatchEvent(a),As=null}else return t=Fr(n),t!==null&&Ws(t),e.blockedOn=n,!1;t.shift()}return!0}function To(e,t,n){wa(e)&&n.delete(t)}function jp(){Xs=!1,Yt!==null&&wa(Yt)&&(Yt=null),Gt!==null&&wa(Gt)&&(Gt=null),Zt!==null&&wa(Zt)&&(Zt=null),Er.forEach(To),_r.forEach(To)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jp)))}function Pr(e){function t(l){return Rr(l,e)}if(0<xa.length){Rr(xa[0],e);for(var n=1;n<xa.length;n++){var a=xa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Yt!==null&&Rr(Yt,e),Gt!==null&&Rr(Gt,e),Zt!==null&&Rr(Zt,e),Er.forEach(t),_r.forEach(t),n=0;n<en.length;n++)a=en[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Lo(n),n.blockedOn===null&&en.shift()}var Bn=F.ReactCurrentBatchConfig,ka=!0;function Fp(e,t,n,a){var l=be,o=Bn.transition;Bn.transition=null;try{be=1,Vs(e,t,n,a)}finally{be=l,Bn.transition=o}}function Up(e,t,n,a){var l=be,o=Bn.transition;Bn.transition=null;try{be=4,Vs(e,t,n,a)}finally{be=l,Bn.transition=o}}function Vs(e,t,n,a){if(ka){var l=Qs(e,t,n,a);if(l===null)ci(e,t,a,Sa,n),Po(e,a);else if(Mp(l,e,t,n,a))a.stopPropagation();else if(Po(e,a),t&4&&-1<Dp.indexOf(e)){for(;l!==null;){var o=Fr(l);if(o!==null&&Eo(o),o=Qs(e,t,n,a),o===null&&ci(e,t,a,Sa,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else ci(e,t,a,null,n)}}var Sa=null;function Qs(e,t,n,a){if(Sa=null,e=Is(a),e=kn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=go(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sa=e,null}function $o(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pp()){case Us:return 1;case xo:return 4;case ma:case Lp:return 16;case wo:return 536870912;default:return 16}default:return 16}}var tn=null,Ks=null,Ea=null;function Oo(){if(Ea)return Ea;var e,t=Ks,n=t.length,a,l="value"in tn?tn.value:tn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[o-a];a++);return Ea=l.slice(e,1<a?1-a:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function zo(){return!1}function dt(e){function t(n,a,l,o,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ca:zo,this.isPropagationStopped=zo,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=dt(qn),Lr=j({},qn,{view:0,detail:0}),Hp=dt(Lr),Ys,Gs,Tr,Ra=j({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Ys=e.screenX-Tr.screenX,Gs=e.screenY-Tr.screenY):Gs=Ys=0,Tr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),No=dt(Ra),Bp=j({},Ra,{dataTransfer:0}),qp=dt(Bp),Wp=j({},Lr,{relatedTarget:0}),Zs=dt(Wp),Xp=j({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=dt(Xp),Qp=j({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=dt(Qp),Jp=j({},qn,{data:0}),Ao=dt(Jp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function ei(){return ef}var tf=j({},Lr,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=dt(tf),rf=j({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=dt(rf),af=j({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),sf=dt(af),lf=j({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=dt(lf),uf=j({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=dt(uf),cf=[9,13,27,32],ti=m&&"CompositionEvent"in window,$r=null;m&&"documentMode"in document&&($r=document.documentMode);var pf=m&&"TextEvent"in window&&!$r,Do=m&&(!ti||$r&&8<$r&&11>=$r),Mo=" ",jo=!1;function Fo(e,t){switch(e){case"keyup":return cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function ff(e,t){switch(e){case"compositionend":return Uo(t);case"keypress":return t.which!==32?null:(jo=!0,Mo);case"textInput":return e=t.data,e===Mo&&jo?null:e;default:return null}}function gf(e,t){if(Wn)return e==="compositionend"||!ti&&Fo(e,t)?(e=Oo(),Ea=Ks=tn=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Do&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function Bo(e,t,n,a){oo(a),t=Oa(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Or=null,zr=null;function hf(e){lu(e,0)}function Pa(e){var t=Jn(e);if(mt(t))return e}function vf(e,t){if(e==="change")return t}var qo=!1;if(m){var ni;if(m){var ri="oninput"in document;if(!ri){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),ri=typeof Wo.oninput=="function"}ni=ri}else ni=!1;qo=ni&&(!document.documentMode||9<document.documentMode)}function Xo(){Or&&(Or.detachEvent("onpropertychange",Vo),zr=Or=null)}function Vo(e){if(e.propertyName==="value"&&Pa(zr)){var t=[];Bo(t,zr,e,Is(e)),fo(hf,t)}}function yf(e,t,n){e==="focusin"?(Xo(),Or=t,zr=n,Or.attachEvent("onpropertychange",Vo)):e==="focusout"&&Xo()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(zr)}function xf(e,t){if(e==="click")return Pa(t)}function wf(e,t){if(e==="input"||e==="change")return Pa(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:kf;function Nr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!x.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ko(e,t){var n=Qo(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qo(n)}}function Jo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yo(){for(var e=window,t=bn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bn(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=Yo(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jo(n.ownerDocument.documentElement,n)){if(a!==null&&ai(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!e.extend&&o>a&&(l=a,a=o,o=l),l=Ko(n,o);var c=Ko(n,a);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>a?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=m&&"documentMode"in document&&11>=document.documentMode,Xn=null,si=null,Ar=null,ii=!1;function Go(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ii||Xn==null||Xn!==bn(a)||(a=Xn,"selectionStart"in a&&ai(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ar&&Nr(Ar,a)||(Ar=a,a=Oa(si,"onSelect"),0<a.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Xn)))}function La(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},li={},Zo={};m&&(Zo=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Ta(e){if(li[e])return li[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zo)return li[e]=t[n];return e}var eu=Ta("animationend"),tu=Ta("animationiteration"),nu=Ta("animationstart"),ru=Ta("transitionend"),au=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){au.set(e,t),p(t,[e])}for(var oi=0;oi<su.length;oi++){var ui=su[oi],_f=ui.toLowerCase(),Cf=ui[0].toUpperCase()+ui.slice(1);nn(_f,"on"+Cf)}nn(eu,"onAnimationEnd"),nn(tu,"onAnimationIteration"),nn(nu,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(ru,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function iu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Ep(a,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var c=a.length-1;0<=c;c--){var g=a[c],h=g.instance,_=g.currentTarget;if(g=g.listener,h!==o&&l.isPropagationStopped())break e;iu(l,g,_),o=h}else for(c=0;c<a.length;c++){if(g=a[c],h=g.instance,_=g.currentTarget,g=g.listener,h!==o&&l.isPropagationStopped())break e;iu(l,g,_),o=h}}}if(ga)throw e=Fs,ga=!1,Fs=null,e}function _e(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var a=e+"__bubble";n.has(a)||(ou(t,e,2,!1),n.add(a))}function di(e,t,n){var a=0;t&&(a|=4),ou(n,e,a,t)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[$a]){e[$a]=!0,u.forEach(function(n){n!=="selectionchange"&&(Rf.has(n)||di(n,!1,e),di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$a]||(t[$a]=!0,di("selectionchange",!1,t))}}function ou(e,t,n,a){switch($o(t)){case 1:var l=Fp;break;case 4:l=Up;break;default:l=Vs}n=l.bind(null,t,n,e),l=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ci(e,t,n,a,l){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var g=a.stateNode.containerInfo;if(g===l||g.nodeType===8&&g.parentNode===l)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;c=c.return}for(;g!==null;){if(c=kn(g),c===null)return;if(h=c.tag,h===5||h===6){a=o=c;continue e}g=g.parentNode}}a=a.return}fo(function(){var _=o,O=Is(n),z=[];e:{var T=au.get(e);if(T!==void 0){var B=Js,Q=e;switch(e){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":B=nf;break;case"focusin":Q="focus",B=Zs;break;case"focusout":Q="blur",B=Zs;break;case"beforeblur":case"afterblur":B=Zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=sf;break;case eu:case tu:case nu:B=Vp;break;case ru:B=of;break;case"scroll":B=Hp;break;case"wheel":B=df;break;case"copy":case"cut":case"paste":B=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Io}var K=(t&4)!==0,Ne=!K&&e==="scroll",k=K?T!==null?T+"Capture":null:T;K=[];for(var v=_,E;v!==null;){E=v;var A=E.stateNode;if(E.tag===5&&A!==null&&(E=A,k!==null&&(A=br(v,k),A!=null&&K.push(Mr(v,A,E)))),Ne)break;v=v.return}0<K.length&&(T=new B(T,Q,null,n,O),z.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",T&&n!==As&&(Q=n.relatedTarget||n.fromElement)&&(kn(Q)||Q[jt]))break e;if((B||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,B?(Q=n.relatedTarget||n.toElement,B=_,Q=Q?kn(Q):null,Q!==null&&(Ne=wn(Q),Q!==Ne||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(B=null,Q=_),B!==Q)){if(K=No,A="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=Io,A="onPointerLeave",k="onPointerEnter",v="pointer"),Ne=B==null?T:Jn(B),E=Q==null?T:Jn(Q),T=new K(A,v+"leave",B,n,O),T.target=Ne,T.relatedTarget=E,A=null,kn(O)===_&&(K=new K(k,v+"enter",Q,n,O),K.target=E,K.relatedTarget=Ne,A=K),Ne=A,B&&Q)t:{for(K=B,k=Q,v=0,E=K;E;E=Qn(E))v++;for(E=0,A=k;A;A=Qn(A))E++;for(;0<v-E;)K=Qn(K),v--;for(;0<E-v;)k=Qn(k),E--;for(;v--;){if(K===k||k!==null&&K===k.alternate)break t;K=Qn(K),k=Qn(k)}K=null}else K=null;B!==null&&uu(z,T,B,K,!1),Q!==null&&Ne!==null&&uu(z,Ne,Q,K,!0)}}e:{if(T=_?Jn(_):window,B=T.nodeName&&T.nodeName.toLowerCase(),B==="select"||B==="input"&&T.type==="file")var Y=vf;else if(Ho(T))if(qo)Y=wf;else{Y=bf;var te=yf}else(B=T.nodeName)&&B.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Y=xf);if(Y&&(Y=Y(e,_))){Bo(z,Y,n,O);break e}te&&te(e,T,_),e==="focusout"&&(te=T._wrapperState)&&te.controlled&&T.type==="number"&&Et(T,"number",T.value)}switch(te=_?Jn(_):window,e){case"focusin":(Ho(te)||te.contentEditable==="true")&&(Xn=te,si=_,Ar=null);break;case"focusout":Ar=si=Xn=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,Go(z,n,O);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":Go(z,n,O)}var ne;if(ti)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Wn?Fo(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(Do&&n.locale!=="ko"&&(Wn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Wn&&(ne=Oo()):(tn=O,Ks="value"in tn?tn.value:tn.textContent,Wn=!0)),te=Oa(_,ie),0<te.length&&(ie=new Ao(ie,e,null,n,O),z.push({event:ie,listeners:te}),ne?ie.data=ne:(ne=Uo(n),ne!==null&&(ie.data=ne)))),(ne=pf?ff(e,n):gf(e,n))&&(_=Oa(_,"onBeforeInput"),0<_.length&&(O=new Ao("onBeforeInput","beforeinput",null,n,O),z.push({event:O,listeners:_}),O.data=ne))}lu(z,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oa(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=br(e,n),o!=null&&a.unshift(Mr(e,o,l)),o=br(e,t),o!=null&&a.push(Mr(e,o,l))),e=e.return}return a}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,a,l){for(var o=t._reactName,c=[];n!==null&&n!==a;){var g=n,h=g.alternate,_=g.stateNode;if(h!==null&&h===a)break;g.tag===5&&_!==null&&(g=_,l?(h=br(n,o),h!=null&&c.unshift(Mr(n,h,g))):l||(h=br(n,o),h!=null&&c.push(Mr(n,h,g)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Pf=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Pf,`
`).replace(Lf,"")}function za(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(i(425))}function Na(){}var pi=null,fi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(Of)}:mi;function Of(e){setTimeout(function(){throw e})}function hi(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),Pr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);Pr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Kn,jr="__reactProps$"+Kn,jt="__reactContainer$"+Kn,vi="__reactEvents$"+Kn,zf="__reactListeners$"+Kn,Nf="__reactHandles$"+Kn;function kn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[Nt])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[Nt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Aa(e){return e[jr]||null}var yi=[],Yn=-1;function an(e){return{current:e}}function Ce(e){0>Yn||(e.current=yi[Yn],yi[Yn]=null,Yn--)}function Se(e,t){Yn++,yi[Yn]=e.current,e.current=t}var sn={},Ve=an(sn),rt=an(!1),Sn=sn;function Gn(e,t){var n=e.type.contextTypes;if(!n)return sn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function Ia(){Ce(rt),Ce(Ve)}function fu(e,t,n){if(Ve.current!==sn)throw Error(i(168));Se(Ve,t),Se(rt,n)}function gu(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(i(108,ce(e)||"Unknown",l));return j({},n,a)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=Ve.current,Se(Ve,e),Se(rt,rt.current),!0}function mu(e,t,n){var a=e.stateNode;if(!a)throw Error(i(169));n?(e=gu(e,t,Sn),a.__reactInternalMemoizedMergedChildContext=e,Ce(rt),Ce(Ve),Se(Ve,e)):Ce(rt),Se(rt,n)}var Ft=null,Ma=!1,bi=!1;function hu(e){Ft===null?Ft=[e]:Ft.push(e)}function Af(e){Ma=!0,hu(e)}function ln(){if(!bi&&Ft!==null){bi=!0;var e=0,t=be;try{var n=Ft;for(be=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ft=null,Ma=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),yo(Us,ln),l}finally{be=t,bi=!1}}return null}var Zn=[],er=0,ja=null,Fa=0,vt=[],yt=0,En=null,Ut=1,Ht="";function _n(e,t){Zn[er++]=Fa,Zn[er++]=ja,ja=e,Fa=t}function vu(e,t,n){vt[yt++]=Ut,vt[yt++]=Ht,vt[yt++]=En,En=e;var a=Ut;e=Ht;var l=32-_t(a)-1;a&=~(1<<l),n+=1;var o=32-_t(t)+l;if(30<o){var c=l-l%5;o=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Ut=1<<32-_t(t)+l|n<<l|a,Ht=o+e}else Ut=1<<o|n<<l|a,Ht=e}function xi(e){e.return!==null&&(_n(e,1),vu(e,1,0))}function wi(e){for(;e===ja;)ja=Zn[--er],Zn[er]=null,Fa=Zn[--er],Zn[er]=null;for(;e===En;)En=vt[--yt],vt[yt]=null,Ht=vt[--yt],vt[yt]=null,Ut=vt[--yt],vt[yt]=null}var ct=null,pt=null,Pe=!1,Rt=null;function yu(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,pt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,pt=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(Pe){var t=pt;if(t){var n=t;if(!bu(e,t)){if(ki(e))throw Error(i(418));t=rn(n.nextSibling);var a=ct;t&&bu(e,t)?yu(a,n):(e.flags=e.flags&-4097|2,Pe=!1,ct=e)}}else{if(ki(e))throw Error(i(418));e.flags=e.flags&-4097|2,Pe=!1,ct=e}}}function xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ua(e){if(e!==ct)return!1;if(!Pe)return xu(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=pt)){if(ki(e))throw wu(),Error(i(418));for(;t;)yu(e,t),t=rn(t.nextSibling)}if(xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ct?rn(e.stateNode.nextSibling):null;return!0}function wu(){for(var e=pt;e;)e=rn(e.nextSibling)}function tr(){pt=ct=null,Pe=!1}function Ei(e){Rt===null?Rt=[e]:Rt.push(e)}var If=F.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var a=n.stateNode}if(!a)throw Error(i(147,e));var l=a,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(c){var g=l.refs;c===null?delete g[o]:g[o]=c},t._stringRef=o,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Su(e){function t(k,v){if(e){var E=k.deletions;E===null?(k.deletions=[v],k.flags|=16):E.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function a(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function l(k,v){return k=mn(k,v),k.index=0,k.sibling=null,k}function o(k,v,E){return k.index=E,e?(E=k.alternate,E!==null?(E=E.index,E<v?(k.flags|=2,v):E):(k.flags|=2,v)):(k.flags|=1048576,v)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function g(k,v,E,A){return v===null||v.tag!==6?(v=ml(E,k.mode,A),v.return=k,v):(v=l(v,E),v.return=k,v)}function h(k,v,E,A){var Y=E.type;return Y===de?O(k,v,E.props.children,A,E.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ae&&ku(Y)===v.type)?(A=l(v,E.props),A.ref=Ur(k,v,E),A.return=k,A):(A=ps(E.type,E.key,E.props,null,k.mode,A),A.ref=Ur(k,v,E),A.return=k,A)}function _(k,v,E,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=hl(E,k.mode,A),v.return=k,v):(v=l(v,E.children||[]),v.return=k,v)}function O(k,v,E,A,Y){return v===null||v.tag!==7?(v=zn(E,k.mode,A,Y),v.return=k,v):(v=l(v,E),v.return=k,v)}function z(k,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ml(""+v,k.mode,E),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return E=ps(v.type,v.key,v.props,null,k.mode,E),E.ref=Ur(k,null,v),E.return=k,E;case X:return v=hl(v,k.mode,E),v.return=k,v;case Ae:var A=v._init;return z(k,A(v._payload),E)}if(Kt(v)||ee(v))return v=zn(v,k.mode,E,null),v.return=k,v;Ha(k,v)}return null}function T(k,v,E,A){var Y=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Y!==null?null:g(k,v,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case se:return E.key===Y?h(k,v,E,A):null;case X:return E.key===Y?_(k,v,E,A):null;case Ae:return Y=E._init,T(k,v,Y(E._payload),A)}if(Kt(E)||ee(E))return Y!==null?null:O(k,v,E,A,null);Ha(k,E)}return null}function B(k,v,E,A,Y){if(typeof A=="string"&&A!==""||typeof A=="number")return k=k.get(E)||null,g(v,k,""+A,Y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case se:return k=k.get(A.key===null?E:A.key)||null,h(v,k,A,Y);case X:return k=k.get(A.key===null?E:A.key)||null,_(v,k,A,Y);case Ae:var te=A._init;return B(k,v,E,te(A._payload),Y)}if(Kt(A)||ee(A))return k=k.get(E)||null,O(v,k,A,Y,null);Ha(v,A)}return null}function Q(k,v,E,A){for(var Y=null,te=null,ne=v,ie=v=0,Ue=null;ne!==null&&ie<E.length;ie++){ne.index>ie?(Ue=ne,ne=null):Ue=ne.sibling;var ve=T(k,ne,E[ie],A);if(ve===null){ne===null&&(ne=Ue);break}e&&ne&&ve.alternate===null&&t(k,ne),v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve,ne=Ue}if(ie===E.length)return n(k,ne),Pe&&_n(k,ie),Y;if(ne===null){for(;ie<E.length;ie++)ne=z(k,E[ie],A),ne!==null&&(v=o(ne,v,ie),te===null?Y=ne:te.sibling=ne,te=ne);return Pe&&_n(k,ie),Y}for(ne=a(k,ne);ie<E.length;ie++)Ue=B(ne,k,ie,E[ie],A),Ue!==null&&(e&&Ue.alternate!==null&&ne.delete(Ue.key===null?ie:Ue.key),v=o(Ue,v,ie),te===null?Y=Ue:te.sibling=Ue,te=Ue);return e&&ne.forEach(function(hn){return t(k,hn)}),Pe&&_n(k,ie),Y}function K(k,v,E,A){var Y=ee(E);if(typeof Y!="function")throw Error(i(150));if(E=Y.call(E),E==null)throw Error(i(151));for(var te=Y=null,ne=v,ie=v=0,Ue=null,ve=E.next();ne!==null&&!ve.done;ie++,ve=E.next()){ne.index>ie?(Ue=ne,ne=null):Ue=ne.sibling;var hn=T(k,ne,ve.value,A);if(hn===null){ne===null&&(ne=Ue);break}e&&ne&&hn.alternate===null&&t(k,ne),v=o(hn,v,ie),te===null?Y=hn:te.sibling=hn,te=hn,ne=Ue}if(ve.done)return n(k,ne),Pe&&_n(k,ie),Y;if(ne===null){for(;!ve.done;ie++,ve=E.next())ve=z(k,ve.value,A),ve!==null&&(v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve);return Pe&&_n(k,ie),Y}for(ne=a(k,ne);!ve.done;ie++,ve=E.next())ve=B(ne,k,ie,ve.value,A),ve!==null&&(e&&ve.alternate!==null&&ne.delete(ve.key===null?ie:ve.key),v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve);return e&&ne.forEach(function(mg){return t(k,mg)}),Pe&&_n(k,ie),Y}function Ne(k,v,E,A){if(typeof E=="object"&&E!==null&&E.type===de&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case se:e:{for(var Y=E.key,te=v;te!==null;){if(te.key===Y){if(Y=E.type,Y===de){if(te.tag===7){n(k,te.sibling),v=l(te,E.props.children),v.return=k,k=v;break e}}else if(te.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ae&&ku(Y)===te.type){n(k,te.sibling),v=l(te,E.props),v.ref=Ur(k,te,E),v.return=k,k=v;break e}n(k,te);break}else t(k,te);te=te.sibling}E.type===de?(v=zn(E.props.children,k.mode,A,E.key),v.return=k,k=v):(A=ps(E.type,E.key,E.props,null,k.mode,A),A.ref=Ur(k,v,E),A.return=k,k=A)}return c(k);case X:e:{for(te=E.key;v!==null;){if(v.key===te)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(k,v.sibling),v=l(v,E.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=hl(E,k.mode,A),v.return=k,k=v}return c(k);case Ae:return te=E._init,Ne(k,v,te(E._payload),A)}if(Kt(E))return Q(k,v,E,A);if(ee(E))return K(k,v,E,A);Ha(k,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(k,v.sibling),v=l(v,E),v.return=k,k=v):(n(k,v),v=ml(E,k.mode,A),v.return=k,k=v),c(k)):n(k,v)}return Ne}var nr=Su(!0),Eu=Su(!1),Ba=an(null),qa=null,rr=null,_i=null;function Ci(){_i=rr=qa=null}function Ri(e){var t=Ba.current;Ce(Ba),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){qa=e,_i=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(qa===null)throw Error(i(308));rr=e,qa.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Cn=null;function Li(e){Cn===null?Cn=[e]:Cn.push(e)}function _u(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,Li(t)):(n.next=l.next,l.next=n),t.interleaved=n,Bt(e,a)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(he&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Bt(e,n)}return l=a.interleaved,l===null?(t.next=t,Li(a)):(t.next=l.next,l.next=t),a.interleaved=t,Bt(e,n)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qs(e,n)}}function Ru(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xa(e,t,n,a){var l=e.updateQueue;on=!1;var o=l.firstBaseUpdate,c=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var h=g,_=h.next;h.next=null,c===null?o=_:c.next=_,c=h;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==c&&(g===null?O.firstBaseUpdate=_:g.next=_,O.lastBaseUpdate=h))}if(o!==null){var z=l.baseState;c=0,O=_=h=null,g=o;do{var T=g.lane,B=g.eventTime;if((a&T)===T){O!==null&&(O=O.next={eventTime:B,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var Q=e,K=g;switch(T=t,B=n,K.tag){case 1:if(Q=K.payload,typeof Q=="function"){z=Q.call(B,z,T);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=K.payload,T=typeof Q=="function"?Q.call(B,z,T):Q,T==null)break e;z=j({},z,T);break e;case 2:on=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[g]:T.push(g))}else B={eventTime:B,lane:T,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(_=O=B,h=z):O=O.next=B,c|=T;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;T=g,g=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(O===null&&(h=z),l.baseState=h,l.firstBaseUpdate=_,l.lastBaseUpdate=O,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ln|=c,e.lanes=c,e.memoizedState=z}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(i(191,l));l.call(a)}}}var Hr={},At=an(Hr),Br=an(Hr),qr=an(Hr);function Rn(e){if(e===Hr)throw Error(i(174));return e}function $i(e,t){switch(Se(qr,t),Se(Br,e),Se(At,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}Ce(At),Se(At,t)}function sr(){Ce(At),Ce(Br),Ce(qr)}function Lu(e){Rn(qr.current);var t=Rn(At.current),n=Os(t,e.type);t!==n&&(Se(Br,e),Se(At,n))}function Oi(e){Br.current===e&&(Ce(At),Ce(Br))}var Le=an(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zi=[];function Ni(){for(var e=0;e<zi.length;e++)zi[e]._workInProgressVersionPrimary=null;zi.length=0}var Qa=F.ReactCurrentDispatcher,Ai=F.ReactCurrentBatchConfig,Pn=0,Te=null,De=null,je=null,Ka=!1,Wr=!1,Xr=0,Df=0;function Qe(){throw Error(i(321))}function Ii(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Di(e,t,n,a,l,o){if(Pn=o,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=e===null||e.memoizedState===null?Uf:Hf,e=n(a,l),Wr){o=0;do{if(Wr=!1,Xr=0,25<=o)throw Error(i(301));o+=1,je=De=null,t.updateQueue=null,Qa.current=Bf,e=n(a,l)}while(Wr)}if(Qa.current=Ga,t=De!==null&&De.next!==null,Pn=0,je=De=Te=null,Ka=!1,t)throw Error(i(300));return e}function Mi(){var e=Xr!==0;return Xr=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Te.memoizedState=je=e:je=je.next=e,je}function xt(){if(De===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=je===null?Te.memoizedState:je.next;if(t!==null)je=t,De=e;else{if(e===null)throw Error(i(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?Te.memoizedState=je=e:je=je.next=e}return je}function Vr(e,t){return typeof t=="function"?t(e):t}function ji(e){var t=xt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=De,l=a.baseQueue,o=n.pending;if(o!==null){if(l!==null){var c=l.next;l.next=o.next,o.next=c}a.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,a=a.baseState;var g=c=null,h=null,_=o;do{var O=_.lane;if((Pn&O)===O)h!==null&&(h=h.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),a=_.hasEagerState?_.eagerState:e(a,_.action);else{var z={lane:O,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};h===null?(g=h=z,c=a):h=h.next=z,Te.lanes|=O,Ln|=O}_=_.next}while(_!==null&&_!==o);h===null?c=a:h.next=g,Ct(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseState=c,t.baseQueue=h,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Te.lanes|=o,Ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fi(e){var t=xt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do o=e(o,c.action),c=c.next;while(c!==l);Ct(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Tu(){}function $u(e,t){var n=Te,a=xt(),l=t(),o=!Ct(a.memoizedState,l);if(o&&(a.memoizedState=l,st=!0),a=a.queue,Ui(Nu.bind(null,n,a,e),[e]),a.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Qr(9,zu.bind(null,n,a,l,t),void 0,null),Fe===null)throw Error(i(349));(Pn&30)!==0||Ou(n,t,l)}return l}function Ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,a){t.value=n,t.getSnapshot=a,Au(t)&&Iu(e)}function Nu(e,t,n){return n(function(){Au(t)&&Iu(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Iu(e){var t=Bt(e,1);t!==null&&$t(t,e,1,-1)}function Du(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,Te,e),[t.memoizedState,e]}function Qr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Mu(){return xt().memoizedState}function Ja(e,t,n,a){var l=It();Te.flags|=e,l.memoizedState=Qr(1|t,n,void 0,a===void 0?null:a)}function Ya(e,t,n,a){var l=xt();a=a===void 0?null:a;var o=void 0;if(De!==null){var c=De.memoizedState;if(o=c.destroy,a!==null&&Ii(a,c.deps)){l.memoizedState=Qr(t,n,o,a);return}}Te.flags|=e,l.memoizedState=Qr(1|t,n,o,a)}function ju(e,t){return Ja(8390656,8,e,t)}function Ui(e,t){return Ya(2048,8,e,t)}function Fu(e,t){return Ya(4,2,e,t)}function Uu(e,t){return Ya(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bu(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4,4,Hu.bind(null,t,e),n)}function Hi(){}function qu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ii(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Wu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ii(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t,n){return(Pn&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(Ct(n,t)||(n=ko(),Te.lanes|=n,Ln|=n,e.baseState=!0),t)}function Mf(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var a=Ai.transition;Ai.transition={};try{e(!1),t()}finally{be=n,Ai.transition=a}}function Vu(){return xt().memoizedState}function jf(e,t,n){var a=fn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Qu(e))Ku(t,n);else if(n=_u(e,t,n,a),n!==null){var l=nt();$t(n,e,a,l),Ju(n,t,a)}}function Ff(e,t,n){var a=fn(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Ku(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,g=o(c,n);if(l.hasEagerState=!0,l.eagerState=g,Ct(g,c)){var h=t.interleaved;h===null?(l.next=l,Li(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=_u(e,t,l,a),n!==null&&(l=nt(),$t(n,e,a,l),Ju(n,t,a))}}function Qu(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Ku(e,t){Wr=Ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ju(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,qs(e,n)}}var Ga={readContext:bt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Uf={readContext:bt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ja(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=It();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=jf.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:Hi,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=Mf.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Te,l=It();if(Pe){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fe===null)throw Error(i(349));(Pn&30)!==0||Ou(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ju(Nu.bind(null,a,o,e),[e]),a.flags|=2048,Qr(9,zu.bind(null,a,o,n,t),void 0,null),n},useId:function(){var e=It(),t=Fe.identifierPrefix;if(Pe){var n=Ht,a=Ut;n=(a&~(1<<32-_t(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:bt,useCallback:qu,useContext:bt,useEffect:Ui,useImperativeHandle:Bu,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Wu,useReducer:ji,useRef:Mu,useState:function(){return ji(Vr)},useDebugValue:Hi,useDeferredValue:function(e){var t=xt();return Xu(t,De.memoizedState,e)},useTransition:function(){var e=ji(Vr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:$u,useId:Vu,unstable_isNewReconciler:!1},Bf={readContext:bt,useCallback:qu,useContext:bt,useEffect:Ui,useImperativeHandle:Bu,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Wu,useReducer:Fi,useRef:Mu,useState:function(){return Fi(Vr)},useDebugValue:Hi,useDeferredValue:function(e){var t=xt();return De===null?t.memoizedState=e:Xu(t,De.memoizedState,e)},useTransition:function(){var e=Fi(Vr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:$u,useId:Vu,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),l=fn(e),o=qt(a,l);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,l),t!==null&&($t(t,e,l,a),Wa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),l=fn(e),o=qt(a,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,l),t!==null&&($t(t,e,l,a),Wa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=fn(e),l=qt(n,a);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,a),t!==null&&($t(t,e,a,n),Wa(t,e,a))}};function Yu(e,t,n,a,l,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,c):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,a)||!Nr(l,o):!0}function Gu(e,t,n){var a=!1,l=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=bt(o):(l=at(t)?Sn:Ve.current,a=t.contextTypes,o=(a=a!=null)?Gn(e,l):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ti(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=bt(o):(o=at(t)?Sn:Ve.current,l.context=Gn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Za.enqueueReplaceState(l,l.state,null),Xa(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",a=t;do n+=ge(a),a=a.return;while(a);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Wi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){is||(is=!0,ll=a),Xi(e,t)},n}function td(e,t,n){n=qt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Xi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof a!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function nd(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new qf;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=ag.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,n,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Wf=F.ReactCurrentOwner,st=!1;function tt(e,t,n,a){t.child=e===null?Eu(t,null,n,a):nr(t,e.child,n,a)}function sd(e,t,n,a,l){n=n.render;var o=t.ref;return ar(t,l),a=Di(e,t,n,a,o,l),n=Mi(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(Pe&&n&&xi(t),t.flags|=1,tt(e,t,a,l),t.child)}function id(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!gl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ld(e,t,o,a,l)):(e=ps(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(c,a)&&e.ref===t.ref)return Wt(e,t,l)}return t.flags|=1,e=mn(o,a),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(Nr(o,a)&&e.ref===t.ref)if(st=!1,t.pendingProps=a=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Wt(e,t,l)}return Vi(e,t,n,a,l)}function od(e,t,n){var a=t.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(or,ft),ft|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(or,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,Se(or,ft),ft|=a}else o!==null?(a=o.baseLanes|n,t.memoizedState=null):a=n,Se(or,ft),ft|=a;return tt(e,t,l,n),t.child}function ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,n,a,l){var o=at(n)?Sn:Ve.current;return o=Gn(t,o),ar(t,l),n=Di(e,t,n,a,o,l),a=Mi(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(Pe&&a&&xi(t),t.flags|=1,tt(e,t,n,l),t.child)}function dd(e,t,n,a,l){if(at(n)){var o=!0;Da(t)}else o=!1;if(ar(t,l),t.stateNode===null)ts(e,t),Gu(t,n,a),qi(t,n,a,l),a=!0;else if(e===null){var c=t.stateNode,g=t.memoizedProps;c.props=g;var h=c.context,_=n.contextType;typeof _=="object"&&_!==null?_=bt(_):(_=at(n)?Sn:Ve.current,_=Gn(t,_));var O=n.getDerivedStateFromProps,z=typeof O=="function"||typeof c.getSnapshotBeforeUpdate=="function";z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==a||h!==_)&&Zu(t,c,a,_),on=!1;var T=t.memoizedState;c.state=T,Xa(t,a,c,l),h=t.memoizedState,g!==a||T!==h||rt.current||on?(typeof O=="function"&&(Bi(t,n,O,a),h=t.memoizedState),(g=on||Yu(t,n,g,a,T,h,_))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),c.props=a,c.state=h,c.context=_,a=g):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Cu(e,t),g=t.memoizedProps,_=t.type===t.elementType?g:Pt(t.type,g),c.props=_,z=t.pendingProps,T=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=bt(h):(h=at(n)?Sn:Ve.current,h=Gn(t,h));var B=n.getDerivedStateFromProps;(O=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==z||T!==h)&&Zu(t,c,a,h),on=!1,T=t.memoizedState,c.state=T,Xa(t,a,c,l);var Q=t.memoizedState;g!==z||T!==Q||rt.current||on?(typeof B=="function"&&(Bi(t,n,B,a),Q=t.memoizedState),(_=on||Yu(t,n,_,a,T,Q,h)||!1)?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,Q,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,Q,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Q),c.props=a,c.state=Q,c.context=h,a=_):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return Qi(e,t,n,a,o,l)}function Qi(e,t,n,a,l,o){ud(e,t);var c=(t.flags&128)!==0;if(!a&&!c)return l&&mu(t,n,!1),Wt(e,t,o);a=t.stateNode,Wf.current=t;var g=c&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&c?(t.child=nr(t,e.child,null,o),t.child=nr(t,null,g,o)):tt(e,t,g,o),t.memoizedState=a.state,l&&mu(t,n,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),$i(e,t.containerInfo)}function pd(e,t,n,a,l){return tr(),Ei(l),t.flags|=256,tt(e,t,n,a),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,t,n){var a=t.pendingProps,l=Le.current,o=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(l&2)!==0),g?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Se(Le,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=a.children,e=a.fallback,o?(a=t.mode,o=t.child,c={mode:"hidden",children:c},(a&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=fs(c,a,0,null),e=zn(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ji(n),t.memoizedState=Ki,e):Yi(t,c));if(l=e.memoizedState,l!==null&&(g=l.dehydrated,g!==null))return Xf(e,t,c,a,g,l,n);if(o){o=a.fallback,c=t.mode,l=e.child,g=l.sibling;var h={mode:"hidden",children:a.children};return(c&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=h,t.deletions=null):(a=mn(l,h),a.subtreeFlags=l.subtreeFlags&14680064),g!==null?o=mn(g,o):(o=zn(o,c,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,c=e.child.memoizedState,c=c===null?Ji(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,t.memoizedState=Ki,a}return o=e.child,e=o.sibling,a=mn(o,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Yi(e,t){return t=fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,n,a){return a!==null&&Ei(a),nr(t,e.child,null,n),e=Yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,n,a,l,o,c){if(n)return t.flags&256?(t.flags&=-257,a=Wi(Error(i(422))),es(e,t,c,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=a.fallback,l=t.mode,a=fs({mode:"visible",children:a.children},l,0,null),o=zn(o,l,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,(t.mode&1)!==0&&nr(t,e.child,null,c),t.child.memoizedState=Ji(c),t.memoizedState=Ki,o);if((t.mode&1)===0)return es(e,t,c,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var g=a.dgst;return a=g,o=Error(i(419)),a=Wi(o,a,void 0),es(e,t,c,a)}if(g=(c&e.childLanes)!==0,st||g){if(a=Fe,a!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|c))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Bt(e,l),$t(a,e,l,-1))}return fl(),a=Wi(Error(i(421))),es(e,t,c,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=sg.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,pt=rn(l.nextSibling),ct=t,Pe=!0,Rt=null,e!==null&&(vt[yt++]=Ut,vt[yt++]=Ht,vt[yt++]=En,Ut=e.id,Ht=e.overflow,En=t),t=Yi(t,a.children),t.flags|=4096,t)}function gd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Pi(e.return,t,n)}function Gi(e,t,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function md(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;if(tt(e,t,a.children,n),a=Le.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,t);else if(e.tag===19)gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Se(Le,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Va(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Va(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gi(t,!0,n,null,o);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ts(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vf(e,t,n){switch(t.tag){case 3:cd(t),tr();break;case 5:Lu(t);break;case 1:at(t.type)&&Da(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Se(Ba,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Se(Le,Le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fd(e,t,n):(Se(Le,Le.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Se(Le,Le.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return md(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Se(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,od(e,t,n)}return Wt(e,t,n)}var hd,Zi,vd,yd;hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Zi=function(){},vd=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Rn(At.current);var o=null;switch(n){case"input":l=xn(e,l),a=xn(e,a),o=[];break;case"select":l=j({},l,{value:void 0}),a=j({},a,{value:void 0}),o=[];break;case"textarea":l=Mt(e,l),a=Mt(e,a),o=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Na)}zs(n,a);var c;n=null;for(_ in l)if(!a.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var g=l[_];for(c in g)g.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(d.hasOwnProperty(_)?o||(o=[]):(o=o||[]).push(_,null));for(_ in a){var h=a[_];if(g=l!=null?l[_]:void 0,a.hasOwnProperty(_)&&h!==g&&(h!=null||g!=null))if(_==="style")if(g){for(c in g)!g.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&g[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(o||(o=[]),o.push(_,n)),n=h;else _==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,g=g?g.__html:void 0,h!=null&&g!==h&&(o=o||[]).push(_,h)):_==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(_,""+h):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(d.hasOwnProperty(_)?(h!=null&&_==="onScroll"&&_e("scroll",e),o||g===h||(o=[])):(o=o||[]).push(_,h))}n&&(o=o||[]).push("style",n);var _=o;(t.updateQueue=_)&&(t.flags|=4)}},yd=function(e,t,n,a){n!==a&&(t.flags|=4)};function Kr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Qf(e,t,n){var a=t.pendingProps;switch(wi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return at(t.type)&&Ia(),Ke(t),null;case 3:return a=t.stateNode,sr(),Ce(rt),Ce(Ve),Ni(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rt!==null&&(dl(Rt),Rt=null))),Zi(e,t),Ke(t),null;case 5:Oi(t);var l=Rn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)vd(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}if(e=Rn(At.current),Ua(t)){a=t.stateNode,n=t.type;var o=t.memoizedProps;switch(a[Nt]=t,a[jr]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(l=0;l<Ir.length;l++)_e(Ir[l],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":ht(a,o),_e("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},_e("invalid",a);break;case"textarea":eo(a,o),_e("invalid",a)}zs(n,o),l=null;for(var c in o)if(o.hasOwnProperty(c)){var g=o[c];c==="children"?typeof g=="string"?a.textContent!==g&&(o.suppressHydrationWarning!==!0&&za(a.textContent,g,e),l=["children",g]):typeof g=="number"&&a.textContent!==""+g&&(o.suppressHydrationWarning!==!0&&za(a.textContent,g,e),l=["children",""+g]):d.hasOwnProperty(c)&&g!=null&&c==="onScroll"&&_e("scroll",a)}switch(n){case"input":yn(a),St(a,o,!0);break;case"textarea":yn(a),no(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Na)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ro(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),n==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[Nt]=t,e[jr]=a,hd(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ns(n,a),n){case"dialog":_e("cancel",e),_e("close",e),l=a;break;case"iframe":case"object":case"embed":_e("load",e),l=a;break;case"video":case"audio":for(l=0;l<Ir.length;l++)_e(Ir[l],e);l=a;break;case"source":_e("error",e),l=a;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=a;break;case"details":_e("toggle",e),l=a;break;case"input":ht(e,a),l=xn(e,a),_e("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=j({},a,{value:void 0}),_e("invalid",e);break;case"textarea":eo(e,a),l=Mt(e,a),_e("invalid",e);break;default:l=a}zs(n,l),g=l;for(o in g)if(g.hasOwnProperty(o)){var h=g[o];o==="style"?io(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ao(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&vr(e,h):typeof h=="number"&&vr(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(d.hasOwnProperty(o)?h!=null&&o==="onScroll"&&_e("scroll",e):h!=null&&W(e,o,h,c))}switch(n){case"input":yn(e),St(e,a,!1);break;case"textarea":yn(e),no(e);break;case"option":a.value!=null&&e.setAttribute("value",""+me(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Jt(e,!!a.multiple,o,!1):a.defaultValue!=null&&Jt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Na)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)yd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(n=Rn(qr.current),Rn(At.current),Ua(t)){if(a=t.stateNode,n=t.memoizedProps,a[Nt]=t,(o=a.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:za(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&za(a.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Nt]=t,t.stateNode=a}return Ke(t),null;case 13:if(Ce(Le),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wu(),tr(),t.flags|=98560,o=!1;else if(o=Ua(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(i(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(i(317));o[Nt]=t}else tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Rt!==null&&(dl(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Me===0&&(Me=3):fl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return sr(),Zi(e,t),e===null&&Dr(t.stateNode.containerInfo),Ke(t),null;case 10:return Ri(t.type._context),Ke(t),null;case 17:return at(t.type)&&Ia(),Ke(t),null;case 19:if(Ce(Le),o=t.memoizedState,o===null)return Ke(t),null;if(a=(t.flags&128)!==0,c=o.rendering,c===null)if(a)Kr(o,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Va(e),c!==null){for(t.flags|=128,Kr(o,!1),a=c.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)o=n,e=a,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Le,Le.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>ur&&(t.flags|=128,a=!0,Kr(o,!1),t.lanes=4194304)}else{if(!a)if(e=Va(c),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Pe)return Ke(t),null}else 2*ze()-o.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,a=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(n=o.last,n!==null?n.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Le.current,Se(Le,a?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return pl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Kf(e,t){switch(wi(t),t.tag){case 1:return at(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),Ce(rt),Ce(Ve),Ni(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(Ce(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Le),null;case 4:return sr(),null;case 10:return Ri(t.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var ns=!1,Je=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,V=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Oe(e,t,a)}else n.current=null}function el(e,t,n){try{n()}catch(a){Oe(e,t,a)}}var bd=!1;function Yf(e,t){if(pi=ka,e=Yo(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,g=-1,h=-1,_=0,O=0,z=e,T=null;t:for(;;){for(var B;z!==n||l!==0&&z.nodeType!==3||(g=c+l),z!==o||a!==0&&z.nodeType!==3||(h=c+a),z.nodeType===3&&(c+=z.nodeValue.length),(B=z.firstChild)!==null;)T=z,z=B;for(;;){if(z===e)break t;if(T===n&&++_===l&&(g=c),T===o&&++O===a&&(h=c),(B=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=B}n=g===-1||h===-1?null:{start:g,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(fi={focusedElem:e,selectionRange:n},ka=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var K=Q.memoizedProps,Ne=Q.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?K:Pt(t.type,K),Ne);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(A){Oe(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return Q=bd,bd=!1,Q}function Jr(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&el(t,n,o)}l=l.next}while(l!==a)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[jr],delete t[vi],delete t[zf],delete t[Nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Na));else if(a!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}var qe=null,Lt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Sd(e,t,n),n=n.sibling}function Sd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:Je||lr(n,t);case 6:var a=qe,l=Lt;qe=null,dn(e,t,n),qe=a,Lt=l,qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?hi(e.parentNode,n):e.nodeType===1&&hi(e,n),Pr(e)):hi(qe,n.stateNode));break;case 4:a=qe,l=Lt,qe=n.stateNode.containerInfo,Lt=!0,dn(e,t,n),qe=a,Lt=l;break;case 0:case 11:case 14:case 15:if(!Je&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var o=l,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&el(n,t,c),l=l.next}while(l!==a)}dn(e,t,n);break;case 1:if(!Je&&(lr(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(g){Oe(n,t,g)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Je=(a=Je)||n.memoizedState!==null,dn(e,t,n),Je=a):dn(e,t,n);break;default:dn(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(a){var l=ig.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var o=e,c=t,g=c;e:for(;g!==null;){switch(g.tag){case 5:qe=g.stateNode,Lt=!1;break e;case 3:qe=g.stateNode.containerInfo,Lt=!0;break e;case 4:qe=g.stateNode.containerInfo,Lt=!0;break e}g=g.return}if(qe===null)throw Error(i(160));Sd(o,c,l),qe=null,Lt=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(_){Oe(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),a&4){try{Jr(3,e,e.return),rs(3,e)}catch(K){Oe(e,e.return,K)}try{Jr(5,e,e.return)}catch(K){Oe(e,e.return,K)}}break;case 1:Tt(t,e),Dt(e),a&512&&n!==null&&lr(n,n.return);break;case 5:if(Tt(t,e),Dt(e),a&512&&n!==null&&lr(n,n.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(K){Oe(e,e.return,K)}}if(a&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,g=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{g==="input"&&o.type==="radio"&&o.name!=null&&oe(l,o),Ns(g,c);var _=Ns(g,o);for(c=0;c<h.length;c+=2){var O=h[c],z=h[c+1];O==="style"?io(l,z):O==="dangerouslySetInnerHTML"?ao(l,z):O==="children"?vr(l,z):W(l,O,z,_)}switch(g){case"input":Be(l,o);break;case"textarea":to(l,o);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var B=o.value;B!=null?Jt(l,!!o.multiple,B,!1):T!==!!o.multiple&&(o.defaultValue!=null?Jt(l,!!o.multiple,o.defaultValue,!0):Jt(l,!!o.multiple,o.multiple?[]:"",!1))}l[jr]=o}catch(K){Oe(e,e.return,K)}}break;case 6:if(Tt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(K){Oe(e,e.return,K)}}break;case 3:if(Tt(t,e),Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(K){Oe(e,e.return,K)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(il=ze())),a&4&&Ed(e);break;case 22:if(O=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(_=Je)||O,Tt(t,e),Je=_):Tt(t,e),Dt(e),a&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!O&&(e.mode&1)!==0)for(V=e,O=e.child;O!==null;){for(z=V=O;V!==null;){switch(T=V,B=T.child,T.tag){case 0:case 11:case 14:case 15:Jr(4,T,T.return);break;case 1:lr(T,T.return);var Q=T.stateNode;if(typeof Q.componentWillUnmount=="function"){a=T,n=T.return;try{t=a,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(K){Oe(a,n,K)}}break;case 5:lr(T,T.return);break;case 22:if(T.memoizedState!==null){Pd(z);continue}}B!==null?(B.return=T,V=B):Pd(z)}O=O.sibling}e:for(O=null,z=e;;){if(z.tag===5){if(O===null){O=z;try{l=z.stateNode,_?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(g=z.stateNode,h=z.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,g.style.display=so("display",c))}catch(K){Oe(e,e.return,K)}}}else if(z.tag===6){if(O===null)try{z.stateNode.nodeValue=_?"":z.memoizedProps}catch(K){Oe(e,e.return,K)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;O===z&&(O=null),z=z.return}O===z&&(O=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Tt(t,e),Dt(e),a&4&&Ed(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wd(n)){var a=n;break e}n=n.return}throw Error(i(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(vr(l,""),a.flags&=-33);var o=kd(e);rl(e,o,l);break;case 3:case 4:var c=a.stateNode.containerInfo,g=kd(e);nl(e,g,c);break;default:throw Error(i(161))}}catch(h){Oe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e,t,n){V=e,Cd(e)}function Cd(e,t,n){for(var a=(e.mode&1)!==0;V!==null;){var l=V,o=l.child;if(l.tag===22&&a){var c=l.memoizedState!==null||ns;if(!c){var g=l.alternate,h=g!==null&&g.memoizedState!==null||Je;g=ns;var _=Je;if(ns=c,(Je=h)&&!_)for(V=l;V!==null;)c=V,h=c.child,c.tag===22&&c.memoizedState!==null?Ld(l):h!==null?(h.return=c,V=h):Ld(l);for(;o!==null;)V=o,Cd(o),o=o.sibling;V=l,ns=g,Je=_}Rd(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,V=o):Rd(e)}}function Rd(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||rs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Je)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pu(t,o,a);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,c,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var O=_.memoizedState;if(O!==null){var z=O.dehydrated;z!==null&&Pr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Je||t.flags&512&&tl(t)}catch(T){Oe(t,t.return,T)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Pd(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Ld(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(h){Oe(t,n,h)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(h){Oe(t,l,h)}}var o=t.return;try{tl(t)}catch(h){Oe(t,o,h)}break;case 5:var c=t.return;try{tl(t)}catch(h){Oe(t,c,h)}}}catch(h){Oe(t,t.return,h)}if(t===e){V=null;break}var g=t.sibling;if(g!==null){g.return=t.return,V=g;break}V=t.return}}var Zf=Math.ceil,as=F.ReactCurrentDispatcher,al=F.ReactCurrentOwner,wt=F.ReactCurrentBatchConfig,he=0,Fe=null,Ie=null,We=0,ft=0,or=an(0),Me=0,Yr=null,Ln=0,ss=0,sl=0,Gr=null,it=null,il=0,ur=1/0,Xt=null,is=!1,ll=null,cn=null,ls=!1,pn=null,os=0,Zr=0,ol=null,us=-1,ds=0;function nt(){return(he&6)!==0?ze():us!==-1?us:us=ze()}function fn(e){return(e.mode&1)===0?1:(he&2)!==0&&We!==0?We&-We:If.transition!==null?(ds===0&&(ds=ko()),ds):(e=be,e!==0||(e=window.event,e=e===void 0?16:$o(e.type)),e)}function $t(e,t,n,a){if(50<Zr)throw Zr=0,ol=null,Error(i(185));Sr(e,n,a),((he&2)===0||e!==Fe)&&(e===Fe&&((he&2)===0&&(ss|=n),Me===4&&gn(e,We)),lt(e,a),n===1&&he===0&&(t.mode&1)===0&&(ur=ze()+500,Ma&&ln()))}function lt(e,t){var n=e.callbackNode;Ap(e,t);var a=ba(e,e===Fe?We:0);if(a===0)n!==null&&bo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&bo(n),t===1)e.tag===0?Af($d.bind(null,e)):hu($d.bind(null,e)),$f(function(){(he&6)===0&&ln()}),n=null;else{switch(So(a)){case 1:n=Us;break;case 4:n=xo;break;case 16:n=ma;break;case 536870912:n=wo;break;default:n=ma}n=jd(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if(us=-1,ds=0,(he&6)!==0)throw Error(i(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var a=ba(e,e===Fe?We:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=cs(e,a);else{t=a;var l=he;he|=2;var o=zd();(Fe!==e||We!==t)&&(Xt=null,ur=ze()+500,$n(e,t));do try{ng();break}catch(g){Od(e,g)}while(!0);Ci(),as.current=o,he=l,Ie!==null?t=0:(Fe=null,We=0,t=Me)}if(t!==0){if(t===2&&(l=Hs(e),l!==0&&(a=l,t=ul(e,l))),t===1)throw n=Yr,$n(e,0),gn(e,a),lt(e,ze()),n;if(t===6)gn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!eg(l)&&(t=cs(e,a),t===2&&(o=Hs(e),o!==0&&(a=o,t=ul(e,o))),t===1))throw n=Yr,$n(e,0),gn(e,a),lt(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:On(e,it,Xt);break;case 3:if(gn(e,a),(a&130023424)===a&&(t=il+500-ze(),10<t)){if(ba(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){nt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=mi(On.bind(null,e,it,Xt),t);break}On(e,it,Xt);break;case 4:if(gn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var c=31-_t(a);o=1<<c,c=t[c],c>l&&(l=c),a&=~o}if(a=l,a=ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zf(a/1960))-a,10<a){e.timeoutHandle=mi(On.bind(null,e,it,Xt),a);break}On(e,it,Xt);break;case 5:On(e,it,Xt);break;default:throw Error(i(329))}}}return lt(e,ze()),e.callbackNode===n?Td.bind(null,e):null}function ul(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=cs(e,t),e!==2&&(t=it,it=n,t!==null&&dl(t)),e}function dl(e){it===null?it=e:it.push.apply(it,e)}function eg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!Ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~sl,t&=~ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),a=1<<n;e[n]=-1,t&=~a}}function $d(e){if((he&6)!==0)throw Error(i(327));dr();var t=ba(e,0);if((t&1)===0)return lt(e,ze()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var a=Hs(e);a!==0&&(t=a,n=ul(e,a))}if(n===1)throw n=Yr,$n(e,0),gn(e,t),lt(e,ze()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,it,Xt),lt(e,ze()),null}function cl(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(ur=ze()+500,Ma&&ln())}}function Tn(e){pn!==null&&pn.tag===0&&(he&6)===0&&dr();var t=he;he|=1;var n=wt.transition,a=be;try{if(wt.transition=null,be=1,e)return e()}finally{be=a,wt.transition=n,he=t,(he&6)===0&&ln()}}function pl(){ft=or.current,Ce(or)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tf(n)),Ie!==null)for(n=Ie.return;n!==null;){var a=n;switch(wi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ia();break;case 3:sr(),Ce(rt),Ce(Ve),Ni();break;case 5:Oi(a);break;case 4:sr();break;case 13:Ce(Le);break;case 19:Ce(Le);break;case 10:Ri(a.type._context);break;case 22:case 23:pl()}n=n.return}if(Fe=e,Ie=e=mn(e.current,null),We=ft=t,Me=0,Yr=null,sl=ss=Ln=0,it=Gr=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,o=n.pending;if(o!==null){var c=o.next;o.next=l,a.next=c}n.pending=a}Cn=null}return e}function Od(e,t){do{var n=Ie;try{if(Ci(),Qa.current=Ga,Ka){for(var a=Te.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Ka=!1}if(Pn=0,je=De=Te=null,Wr=!1,Xr=0,al.current=null,n===null||n.return===null){Me=1,Yr=t,Ie=null;break}e:{var o=e,c=n.return,g=n,h=t;if(t=We,g.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=h,O=g,z=O.tag;if((O.mode&1)===0&&(z===0||z===11||z===15)){var T=O.alternate;T?(O.updateQueue=T.updateQueue,O.memoizedState=T.memoizedState,O.lanes=T.lanes):(O.updateQueue=null,O.memoizedState=null)}var B=rd(c);if(B!==null){B.flags&=-257,ad(B,c,g,o,t),B.mode&1&&nd(o,_,t),t=B,h=_;var Q=t.updateQueue;if(Q===null){var K=new Set;K.add(h),t.updateQueue=K}else Q.add(h);break e}else{if((t&1)===0){nd(o,_,t),fl();break e}h=Error(i(426))}}else if(Pe&&g.mode&1){var Ne=rd(c);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),ad(Ne,c,g,o,t),Ei(ir(h,g));break e}}o=h=ir(h,g),Me!==4&&(Me=2),Gr===null?Gr=[o]:Gr.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var k=ed(o,h,t);Ru(o,k);break e;case 1:g=h;var v=o.type,E=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cn===null||!cn.has(E)))){o.flags|=65536,t&=-t,o.lanes|=t;var A=td(o,g,t);Ru(o,A);break e}}o=o.return}while(o!==null)}Ad(n)}catch(Y){t=Y,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function zd(){var e=as.current;return as.current=Ga,e===null?Ga:e}function fl(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(Ln&268435455)===0&&(ss&268435455)===0||gn(Fe,We)}function cs(e,t){var n=he;he|=2;var a=zd();(Fe!==e||We!==t)&&(Xt=null,$n(e,t));do try{tg();break}catch(l){Od(e,l)}while(!0);if(Ci(),he=n,as.current=a,Ie!==null)throw Error(i(261));return Fe=null,We=0,Me}function tg(){for(;Ie!==null;)Nd(Ie)}function ng(){for(;Ie!==null&&!Cp();)Nd(Ie)}function Nd(e){var t=Md(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Ad(e):Ie=t,al.current=null}function Ad(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Qf(n,t,ft),n!==null){Ie=n;return}}else{if(n=Kf(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function On(e,t,n){var a=be,l=wt.transition;try{wt.transition=null,be=1,rg(e,t,n,a)}finally{wt.transition=l,be=a}return null}function rg(e,t,n,a){do dr();while(pn!==null);if((he&6)!==0)throw Error(i(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ip(e,o),e===Fe&&(Ie=Fe=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ls||(ls=!0,jd(ma,function(){return dr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=wt.transition,wt.transition=null;var c=be;be=1;var g=he;he|=4,al.current=null,Yf(e,n),_d(n,e),Sf(fi),ka=!!pi,fi=pi=null,e.current=n,Gf(n),Rp(),he=g,be=c,wt.transition=o}else e.current=n;if(ls&&(ls=!1,pn=e,os=l),o=e.pendingLanes,o===0&&(cn=null),Tp(n.stateNode),lt(e,ze()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(is)throw is=!1,e=ll,ll=null,e;return(os&1)!==0&&e.tag!==0&&dr(),o=e.pendingLanes,(o&1)!==0?e===ol?Zr++:(Zr=0,ol=e):Zr=0,ln(),null}function dr(){if(pn!==null){var e=So(os),t=wt.transition,n=be;try{if(wt.transition=null,be=16>e?16:e,pn===null)var a=!1;else{if(e=pn,pn=null,os=0,(he&6)!==0)throw Error(i(331));var l=he;for(he|=4,V=e.current;V!==null;){var o=V,c=o.child;if((V.flags&16)!==0){var g=o.deletions;if(g!==null){for(var h=0;h<g.length;h++){var _=g[h];for(V=_;V!==null;){var O=V;switch(O.tag){case 0:case 11:case 15:Jr(8,O,o)}var z=O.child;if(z!==null)z.return=O,V=z;else for(;V!==null;){O=V;var T=O.sibling,B=O.return;if(xd(O),O===_){V=null;break}if(T!==null){T.return=B,V=T;break}V=B}}}var Q=o.alternate;if(Q!==null){var K=Q.child;if(K!==null){Q.child=null;do{var Ne=K.sibling;K.sibling=null,K=Ne}while(K!==null)}}V=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,V=c;else e:for(;V!==null;){if(o=V,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Jr(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,V=k;break e}V=o.return}}var v=e.current;for(V=v;V!==null;){c=V;var E=c.child;if((c.subtreeFlags&2064)!==0&&E!==null)E.return=c,V=E;else e:for(c=v;V!==null;){if(g=V,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:rs(9,g)}}catch(Y){Oe(g,g.return,Y)}if(g===c){V=null;break e}var A=g.sibling;if(A!==null){A.return=g.return,V=A;break e}V=g.return}}if(he=l,ln(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ha,e)}catch{}a=!0}return a}finally{be=n,wt.transition=t}}return!1}function Id(e,t,n){t=ir(n,t),t=ed(e,t,1),e=un(e,t,1),t=nt(),e!==null&&(Sr(e,1,t),lt(e,t))}function Oe(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(cn===null||!cn.has(a))){e=ir(n,e),e=td(t,e,1),t=un(t,e,1),e=nt(),t!==null&&(Sr(t,1,e),lt(t,e));break}}t=t.return}}function ag(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(We&n)===n&&(Me===4||Me===3&&(We&130023424)===We&&500>ze()-il?$n(e,0):sl|=n),lt(e,t)}function Dd(e,t){t===0&&((e.mode&1)===0?t=1:(t=ya,ya<<=1,(ya&130023424)===0&&(ya=4194304)));var n=nt();e=Bt(e,t),e!==null&&(Sr(e,t,n),lt(e,n))}function sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dd(e,n)}function ig(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Dd(e,n)}var Md;Md=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,Vf(e,t,n);st=(e.flags&131072)!==0}else st=!1,Pe&&(t.flags&1048576)!==0&&vu(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ts(e,t),e=t.pendingProps;var l=Gn(t,Ve.current);ar(t,n),l=Di(null,t,a,e,l,n);var o=Mi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(a)?(o=!0,Da(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ti(t),l.updater=Za,t.stateNode=l,l._reactInternals=t,qi(t,a,e,n),t=Qi(null,t,a,!0,o,n)):(t.tag=0,Pe&&o&&xi(t),tt(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ts(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=og(a),e=Pt(a,e),l){case 0:t=Vi(null,t,a,e,n);break e;case 1:t=dd(null,t,a,e,n);break e;case 11:t=sd(null,t,a,e,n);break e;case 14:t=id(null,t,a,Pt(a.type,e),n);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),Vi(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),dd(e,t,a,l,n);case 3:e:{if(cd(t),e===null)throw Error(i(387));a=t.pendingProps,o=t.memoizedState,l=o.element,Cu(e,t),Xa(t,a,null,n);var c=t.memoizedState;if(a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=ir(Error(i(423)),t),t=pd(e,t,a,n,l);break e}else if(a!==l){l=ir(Error(i(424)),t),t=pd(e,t,a,n,l);break e}else for(pt=rn(t.stateNode.containerInfo.firstChild),ct=t,Pe=!0,Rt=null,n=Eu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),a===l){t=Wt(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 5:return Lu(t),e===null&&Si(t),a=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,c=l.children,gi(a,l)?c=null:o!==null&&gi(a,o)&&(t.flags|=32),ud(e,t),tt(e,t,c,n),t.child;case 6:return e===null&&Si(t),null;case 13:return fd(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=nr(t,null,a,n):tt(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),sd(e,t,a,l,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,o=t.memoizedProps,c=l.value,Se(Ba,a._currentValue),a._currentValue=c,o!==null)if(Ct(o.value,c)){if(o.children===l.children&&!rt.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var g=o.dependencies;if(g!==null){c=o.child;for(var h=g.firstContext;h!==null;){if(h.context===a){if(o.tag===1){h=qt(-1,n&-n),h.tag=2;var _=o.updateQueue;if(_!==null){_=_.shared;var O=_.pending;O===null?h.next=h:(h.next=O.next,O.next=h),_.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Pi(o.return,n,t),g.lanes|=n;break}h=h.next}}else if(o.tag===10)c=o.type===t.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(i(341));c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),Pi(c,n,t),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===t){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}tt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ar(t,n),l=bt(l),a=a(l),t.flags|=1,tt(e,t,a,n),t.child;case 14:return a=t.type,l=Pt(a,t.pendingProps),l=Pt(a.type,l),id(e,t,a,l,n);case 15:return ld(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),ts(e,t),t.tag=1,at(a)?(e=!0,Da(t)):e=!1,ar(t,n),Gu(t,a,l),qi(t,a,l,n),Qi(null,t,a,!0,e,n);case 19:return md(e,t,n);case 22:return od(e,t,n)}throw Error(i(156,t.tag))};function jd(e,t){return yo(e,t)}function lg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,a){return new lg(e,t,n,a)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function og(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ye)return 11;if(e===Ze)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ps(e,t,n,a,l,o){var c=2;if(a=e,typeof e=="function")gl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case de:return zn(n.children,l,o,t);case re:c=8,l|=8;break;case ae:return e=kt(12,n,t,l|2),e.elementType=ae,e.lanes=o,e;case Re:return e=kt(13,n,t,l),e.elementType=Re,e.lanes=o,e;case Ee:return e=kt(19,n,t,l),e.elementType=Ee,e.lanes=o,e;case ke:return fs(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case Z:c=9;break e;case ye:c=11;break e;case Ze:c=14;break e;case Ae:c=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=kt(c,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function zn(e,t,n,a){return e=kt(7,e,a,t),e.lanes=n,e}function fs(e,t,n,a){return e=kt(22,e,a,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ug(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bs(0),this.expirationTimes=Bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function vl(e,t,n,a,l,o,c,g,h){return e=new ug(e,t,n,g,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(o),e}function dg(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Fd(e){if(!e)return sn;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(at(n))return gu(e,n,t)}return t}function Ud(e,t,n,a,l,o,c,g,h){return e=vl(n,a,!0,e,l,o,c,g,h),e.context=Fd(null),n=e.current,a=nt(),l=fn(n),o=qt(a,l),o.callback=t??null,un(n,o,l),e.current.lanes=l,Sr(e,l,a),lt(e,a),e}function gs(e,t,n,a){var l=t.current,o=nt(),c=fn(l);return n=Fd(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,c),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=un(l,t,c),e!==null&&($t(e,l,c,o),Wa(e,l,c)),c}function ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yl(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function cg(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}hs.prototype.render=bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));gs(e,t,null,null)},hs.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){gs(null,e,null,null)}),t[jt]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Co();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Lo(e)}};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qd(){}function pg(e,t,n,a,l){if(l){if(typeof a=="function"){var o=a;a=function(){var _=ms(c);o.call(_)}}var c=Ud(t,a,e,0,null,!1,!1,"",qd);return e._reactRootContainer=c,e[jt]=c.current,Dr(e.nodeType===8?e.parentNode:e),Tn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var g=a;a=function(){var _=ms(h);g.call(_)}}var h=vl(e,0,!1,null,null,!1,!1,"",qd);return e._reactRootContainer=h,e[jt]=h.current,Dr(e.nodeType===8?e.parentNode:e),Tn(function(){gs(t,h,n,a)}),h}function ys(e,t,n,a,l){var o=n._reactRootContainer;if(o){var c=o;if(typeof l=="function"){var g=l;l=function(){var h=ms(c);g.call(h)}}gs(t,c,e,l)}else c=pg(n,t,e,l,a);return ms(c)}Eo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(qs(t,n|1),lt(t,ze()),(he&6)===0&&(ur=ze()+500,ln()))}break;case 13:Tn(function(){var a=Bt(e,1);if(a!==null){var l=nt();$t(a,e,1,l)}}),yl(e,1)}},Ws=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=nt();$t(t,e,134217728,n)}yl(e,134217728)}},_o=function(e){if(e.tag===13){var t=fn(e),n=Bt(e,t);if(n!==null){var a=nt();$t(n,e,t,a)}yl(e,t)}},Co=function(){return be},Ro=function(e,t){var n=be;try{return be=e,t()}finally{be=n}},Ds=function(e,t,n){switch(t){case"input":if(Be(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=Aa(a);if(!l)throw Error(i(90));mt(a),Be(a,l)}}}break;case"textarea":to(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}},co=cl,po=Tn;var fg={usingClientEntryPoint:!1,Events:[Fr,Jn,Aa,oo,uo,cl]},ea={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ho(e),e===null?null:e.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{ha=bs.inject(gg),zt=bs}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(t))throw Error(i(200));return dg(e,t,null,n)},ot.createRoot=function(e,t){if(!xl(e))throw Error(i(299));var n=!1,a="",l=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=vl(e,1,!1,null,null,n,!1,a,l),e[jt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new bl(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=ho(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return Tn(e)},ot.hydrate=function(e,t,n){if(!vs(t))throw Error(i(200));return ys(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!xl(e))throw Error(i(405));var a=n!=null&&n.hydratedSources||null,l=!1,o="",c=Bd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Ud(t,null,e,1,n??null,l,!1,o,c),e[jt]=t.current,Dr(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hs(t)},ot.render=function(e,t,n){if(!vs(t))throw Error(i(200));return ys(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!vs(e))throw Error(i(40));return e._reactRootContainer?(Tn(function(){ys(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},ot.unstable_batchedUpdates=cl,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!vs(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ys(e,t,n,!1,a)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var Gd;function kg(){if(Gd)return Sl.exports;Gd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Sl.exports=wg(),Sl.exports}var Zd;function Sg(){if(Zd)return xs;Zd=1;var r=kg();return xs.createRoot=r.createRoot,xs.hydrateRoot=r.hydrateRoot,xs}var Eg=Sg();const _g=Cc(Eg);function Rc(r,s){return function(){return r.apply(s,arguments)}}const{toString:Cg}=Object.prototype,{getPrototypeOf:fr}=Object,{iterator:oa,toStringTag:Pc}=Symbol,Cs=(({hasOwnProperty:r})=>(s,i)=>r.call(s,i))(Object.prototype),ia=(r,s)=>{let i=r;const u=[];for(;i!=null&&i!==Object.prototype;){if(u.indexOf(i)!==-1)return!1;if(u.push(i),Cs(i,s))return!0;i=fr(i)}return!1},Rg=(r,s)=>r!=null&&ia(r,s)?r[s]:void 0,Wl=(r=>s=>{const i=Cg.call(s);return r[i]||(r[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ot=r=>(r=r.toLowerCase(),s=>Wl(s)===r),Ls=r=>s=>typeof s===r,{isArray:Mn}=Array,gr=Ls("undefined");function mr(r){return r!==null&&!gr(r)&&r.constructor!==null&&!gr(r.constructor)&&ut(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Lc=Ot("ArrayBuffer");function Pg(r){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(r):s=r&&r.buffer&&Lc(r.buffer),s}const Lg=Ls("string"),ut=Ls("function"),Tc=Ls("number"),hr=r=>r!==null&&typeof r=="object",Tg=r=>r===!0||r===!1,Ss=r=>{if(!hr(r))return!1;const s=fr(r);return(s===null||s===Object.prototype||fr(s)===null)&&!ia(r,Pc)&&!ia(r,oa)},$g=r=>{if(!hr(r)||mr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Og=Ot("Date"),zg=Ot("File"),Ng=r=>!!(r&&typeof r.uri<"u"),Ag=r=>r&&typeof r.getParts<"u",Ig=Ot("Blob"),Dg=Ot("FileList"),Mg=r=>hr(r)&&ut(r.pipe);function jg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ec=jg(),tc=typeof ec.FormData<"u"?ec.FormData:void 0,Fg=r=>{if(!r)return!1;if(tc&&r instanceof tc)return!0;const s=fr(r);if(!s||s===Object.prototype||!ut(r.append))return!1;const i=Wl(r);return i==="formdata"||i==="object"&&ut(r.toString)&&r.toString()==="[object FormData]"},Ug=Ot("URLSearchParams"),[Hg,Bg,qg,Wg]=["ReadableStream","Request","Response","Headers"].map(Ot),Xg=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ua(r,s,{allOwnKeys:i=!1}={}){if(r===null||typeof r>"u")return;let u,d;if(typeof r!="object"&&(r=[r]),Mn(r))for(u=0,d=r.length;u<d;u++)s.call(null,r[u],u,r);else{if(mr(r))return;const p=i?Object.getOwnPropertyNames(r):Object.keys(r),f=p.length;let m;for(u=0;u<f;u++)m=p[u],s.call(null,r[m],m,r)}}function $c(r,s){if(mr(r))return null;s=s.toLowerCase();const i=Object.keys(r);let u=i.length,d;for(;u-- >0;)if(d=i[u],s===d.toLowerCase())return d;return null}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Oc=r=>!gr(r)&&r!==Nn;function Nl(...r){const{caseless:s,skipUndefined:i}=Oc(this)&&this||{},u={},d=(p,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=s&&typeof f=="string"&&$c(u,f)||f,x=Cs(u,m)?u[m]:void 0;Ss(x)&&Ss(p)?u[m]=Nl(x,p):Ss(p)?u[m]=Nl({},p):Mn(p)?u[m]=p.slice():(!i||!gr(p))&&(u[m]=p)};for(let p=0,f=r.length;p<f;p++){const m=r[p];if(!m||mr(m)||(ua(m,d),typeof m!="object"||Mn(m)))continue;const x=Object.getOwnPropertySymbols(m);for(let S=0;S<x.length;S++){const w=x[S];am.call(m,w)&&d(m[w],w)}}return u}const Vg=(r,s,i,{allOwnKeys:u}={})=>(ua(s,(d,p)=>{i&&ut(d)?Object.defineProperty(r,p,{__proto__:null,value:Rc(d,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,p,{__proto__:null,value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:u}),r),Qg=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Kg=(r,s,i,u)=>{r.prototype=Object.create(s.prototype,u),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:s.prototype}),i&&Object.assign(r.prototype,i)},Jg=(r,s,i,u)=>{let d,p,f;const m={};if(s=s||{},r==null)return s;do{for(d=Object.getOwnPropertyNames(r),p=d.length;p-- >0;)f=d[p],(!u||u(f,r,s))&&!m[f]&&(s[f]=r[f],m[f]=!0);r=i!==!1&&fr(r)}while(r&&(!i||i(r,s))&&r!==Object.prototype);return s},Yg=(r,s,i)=>{r=String(r),(i===void 0||i>r.length)&&(i=r.length),i-=s.length;const u=r.indexOf(s,i);return u!==-1&&u===i},Gg=r=>{if(!r)return null;if(Mn(r))return r;let s=r.length;if(!Tc(s))return null;const i=new Array(s);for(;s-- >0;)i[s]=r[s];return i},Zg=(r=>s=>r&&s instanceof r)(typeof Uint8Array<"u"&&fr(Uint8Array)),em=(r,s)=>{const u=(r&&r[oa]).call(r);let d;for(;(d=u.next())&&!d.done;){const p=d.value;s.call(r,p[0],p[1])}},tm=(r,s)=>{let i;const u=[];for(;(i=r.exec(s))!==null;)u.push(i);return u},nm=Ot("HTMLFormElement"),rm=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,u,d){return u.toUpperCase()+d}),{propertyIsEnumerable:am}=Object.prototype,sm=Ot("RegExp"),zc=(r,s)=>{const i=Object.getOwnPropertyDescriptors(r),u={};ua(i,(d,p)=>{let f;(f=s(d,p,r))!==!1&&(u[p]=f||d)}),Object.defineProperties(r,u)},im=r=>{zc(r,(s,i)=>{if(ut(r)&&["arguments","caller","callee"].includes(i))return!1;const u=r[i];if(ut(u)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},lm=(r,s)=>{const i={},u=d=>{d.forEach(p=>{i[p]=!0})};return Mn(r)?u(r):u(String(r).split(s)),i},om=()=>{},um=(r,s)=>r!=null&&Number.isFinite(r=+r)?r:s;function dm(r){return!!(r&&ut(r.append)&&r[Pc]==="FormData"&&r[oa])}const cm=r=>{const s=new WeakSet,i=u=>{if(hr(u)){if(s.has(u))return;if(mr(u))return u;if(!("toJSON"in u)){s.add(u);const d=Mn(u)?[]:{};return ua(u,(p,f)=>{const m=i(p);!gr(m)&&(d[f]=m)}),s.delete(u),d}}return u};return i(r)},pm=Ot("AsyncFunction"),fm=r=>r&&(hr(r)||ut(r))&&ut(r.then)&&ut(r.catch),Nc=((r,s)=>r?setImmediate:s?((i,u)=>(Nn.addEventListener("message",({source:d,data:p})=>{d===Nn&&p===i&&u.length&&u.shift()()},!1),d=>{u.push(d),Nn.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",ut(Nn.postMessage)),gm=typeof queueMicrotask<"u"?queueMicrotask.bind(Nn):typeof process<"u"&&process.nextTick||Nc,Ac=r=>r!=null&&ut(r[oa]),mm=r=>r!=null&&ia(r,oa)&&Ac(r),y={isArray:Mn,isArrayBuffer:Lc,isBuffer:mr,isFormData:Fg,isArrayBufferView:Pg,isString:Lg,isNumber:Tc,isBoolean:Tg,isObject:hr,isPlainObject:Ss,isEmptyObject:$g,isReadableStream:Hg,isRequest:Bg,isResponse:qg,isHeaders:Wg,isUndefined:gr,isDate:Og,isFile:zg,isReactNativeBlob:Ng,isReactNative:Ag,isBlob:Ig,isRegExp:sm,isFunction:ut,isStream:Mg,isURLSearchParams:Ug,isTypedArray:Zg,isFileList:Dg,forEach:ua,merge:Nl,extend:Vg,trim:Xg,stripBOM:Qg,inherits:Kg,toFlatObject:Jg,kindOf:Wl,kindOfTest:Ot,endsWith:Yg,toArray:Gg,forEachEntry:em,matchAll:tm,isHTMLForm:nm,hasOwnProperty:Cs,hasOwnProp:Cs,hasOwnInPrototypeChain:ia,getSafeProp:Rg,reduceDescriptors:zc,freezeMethods:im,toObjectSet:lm,toCamelCase:rm,noop:om,toFiniteNumber:um,findKey:$c,global:Nn,isContextDefined:Oc,isSpecCompliantForm:dm,toJSONObject:cm,isAsyncFn:pm,isThenable:fm,setImmediate:Nc,asap:gm,isIterable:Ac,isSafeIterable:mm},hm=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vm=r=>{const s={};let i,u,d;return r&&r.split(`
`).forEach(function(f){d=f.indexOf(":"),i=f.substring(0,d).trim().toLowerCase(),u=f.substring(d+1).trim(),!(!i||s[i]&&hm[i])&&(i==="set-cookie"?s[i]?s[i].push(u):s[i]=[u]:s[i]=s[i]?s[i]+", "+u:u)}),s};function ym(r){let s=0,i=r.length;for(;s<i;){const u=r.charCodeAt(s);if(u!==9&&u!==32)break;s+=1}for(;i>s;){const u=r.charCodeAt(i-1);if(u!==9&&u!==32)break;i-=1}return s===0&&i===r.length?r:r.slice(s,i)}const bm=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),xm=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Xl(r,s){return y.isArray(r)?r.map(i=>Xl(i,s)):ym(String(r).replace(s,""))}const wm=r=>Xl(r,bm),km=r=>Xl(r,xm);function Ic(r){const s=Object.create(null);return y.forEach(r.toJSON(),(i,u)=>{s[u]=km(i)}),s}const nc=Symbol("internals");function na(r){return r&&String(r).trim().toLowerCase()}function Es(r){return r===!1||r==null?r:y.isArray(r)?r.map(Es):wm(String(r))}function Sm(r){const s=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=i.exec(r);)s[u[1]]=u[2];return s}const Em=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Cl(r,s,i,u,d){if(y.isFunction(u))return u.call(this,s,i);if(d&&(s=i),!!y.isString(s)){if(y.isString(u))return s.indexOf(u)!==-1;if(y.isRegExp(u))return u.test(s)}}function _m(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,i,u)=>i.toUpperCase()+u)}function Cm(r,s){const i=y.toCamelCase(" "+s);["get","set","has"].forEach(u=>{Object.defineProperty(r,u+i,{__proto__:null,value:function(d,p,f){return this[u].call(this,s,d,p,f)},configurable:!0})})}let Ge=class{constructor(s){s&&this.set(s)}set(s,i,u){const d=this;function p(m,x,S){const w=na(x);if(!w)return;const C=y.findKey(d,w);(!C||d[C]===void 0||S===!0||S===void 0&&d[C]!==!1)&&(d[C||x]=Es(m))}const f=(m,x)=>y.forEach(m,(S,w)=>p(S,w,x));if(y.isPlainObject(s)||s instanceof this.constructor)f(s,i);else if(y.isString(s)&&(s=s.trim())&&!Em(s))f(vm(s),i);else if(y.isObject(s)&&y.isSafeIterable(s)){let m=Object.create(null),x,S;for(const w of s){if(!y.isArray(w))throw new TypeError("Object iterator must return a key-value pair");S=w[0],y.hasOwnProp(m,S)?(x=m[S],m[S]=y.isArray(x)?[...x,w[1]]:[x,w[1]]):m[S]=w[1]}f(m,i)}else s!=null&&p(i,s,u);return this}get(s,i){if(s=na(s),s){const u=y.findKey(this,s);if(u){const d=this[u];if(!i)return d;if(i===!0)return Sm(d);if(y.isFunction(i))return i.call(this,d,u);if(y.isRegExp(i))return i.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,i){if(s=na(s),s){const u=y.findKey(this,s);return!!(u&&this[u]!==void 0&&(!i||Cl(this,this[u],u,i)))}return!1}delete(s,i){const u=this;let d=!1;function p(f){if(f=na(f),f){const m=y.findKey(u,f);m&&(!i||Cl(u,u[m],m,i))&&(delete u[m],d=!0)}}return y.isArray(s)?s.forEach(p):p(s),d}clear(s){const i=Object.keys(this);let u=i.length,d=!1;for(;u--;){const p=i[u];(!s||Cl(this,this[p],p,s,!0))&&(delete this[p],d=!0)}return d}normalize(s){const i=this,u={};return y.forEach(this,(d,p)=>{const f=y.findKey(u,p);if(f){i[f]=Es(d),delete i[p];return}const m=s?_m(p):String(p).trim();m!==p&&delete i[p],i[m]=Es(d),u[m]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const i=Object.create(null);return y.forEach(this,(u,d)=>{u!=null&&u!==!1&&(i[d]=s&&y.isArray(u)?u.join(", "):u)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,i])=>s+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...i){const u=new this(s);return i.forEach(d=>u.set(d)),u}static accessor(s){const u=(this[nc]=this[nc]={accessors:{}}).accessors,d=this.prototype;function p(f){const m=na(f);u[m]||(Cm(d,f),u[m]=!0)}return y.isArray(s)?s.forEach(p):p(s),this}};Ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Ge.prototype,({value:r},s)=>{let i=s[0].toUpperCase()+s.slice(1);return{get:()=>r,set(u){this[i]=u}}});y.freezeMethods(Ge);const Rm="[REDACTED ****]";function Pm(r){if(y.hasOwnProp(r,"toJSON"))return!0;let s=Object.getPrototypeOf(r);for(;s&&s!==Object.prototype;){if(y.hasOwnProp(s,"toJSON"))return!0;s=Object.getPrototypeOf(s)}return!1}function Lm(r,s){const i=new Set(s.map(p=>String(p).toLowerCase())),u=[],d=p=>{if(p===null||typeof p!="object"||y.isBuffer(p))return p;if(u.indexOf(p)!==-1)return;p instanceof Ge&&(p=p.toJSON()),u.push(p);let f;if(y.isArray(p))f=[],p.forEach((m,x)=>{const S=d(m);y.isUndefined(S)||(f[x]=S)});else{if(!y.isPlainObject(p)&&Pm(p))return u.pop(),p;f=Object.create(null);for(const[m,x]of Object.entries(p)){const S=i.has(m.toLowerCase())?Rm:d(x);y.isUndefined(S)||(f[m]=S)}}return u.pop(),f};return d(r)}let D=class Dc extends Error{static from(s,i,u,d,p,f){const m=new Dc(s.message,i||s.code,u,d,p);return Object.defineProperty(m,"cause",{__proto__:null,value:s,writable:!0,enumerable:!1,configurable:!0}),m.name=s.name,s.status!=null&&m.status==null&&(m.status=s.status),f&&Object.assign(m,f),m}constructor(s,i,u,d,p){super(s),Object.defineProperty(this,"message",{__proto__:null,value:s,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),u&&(this.config=u),d&&(this.request=d),p&&(this.response=p,this.status=p.status)}toJSON(){const s=this.config,i=s&&y.hasOwnProp(s,"redact")?s.redact:void 0,u=y.isArray(i)&&i.length>0?Lm(s,i):y.toJSONObject(s);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u,code:this.code,status:this.status}}};D.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";D.ERR_BAD_OPTION="ERR_BAD_OPTION";D.ECONNABORTED="ECONNABORTED";D.ETIMEDOUT="ETIMEDOUT";D.ECONNREFUSED="ECONNREFUSED";D.ERR_NETWORK="ERR_NETWORK";D.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";D.ERR_DEPRECATED="ERR_DEPRECATED";D.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";D.ERR_BAD_REQUEST="ERR_BAD_REQUEST";D.ERR_CANCELED="ERR_CANCELED";D.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";D.ERR_INVALID_URL="ERR_INVALID_URL";D.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Tm=null,Mc=100;function Al(r){return y.isPlainObject(r)||y.isArray(r)}function jc(r){return y.endsWith(r,"[]")?r.slice(0,-2):r}function Rl(r,s,i){return r?r.concat(s).map(function(d,p){return d=jc(d),!i&&p?"["+d+"]":d}).join(i?".":""):s}function $m(r){return y.isArray(r)&&!r.some(Al)}const Om=y.toFlatObject(y,{},null,function(s){return/^is[A-Z]/.test(s)});function Ts(r,s,i){if(!y.isObject(r))throw new TypeError("target must be an object");s=s||new FormData,i=y.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(U,W){return!y.isUndefined(W[U])});const u=i.metaTokens,d=i.visitor||q,p=i.dots,f=i.indexes,m=i.Blob||typeof Blob<"u"&&Blob,x=i.maxDepth===void 0?Mc:i.maxDepth,S=m&&y.isSpecCompliantForm(s),w=[];if(!y.isFunction(d))throw new TypeError("visitor must be a function");function C(P){if(P===null)return"";if(y.isDate(P))return P.toISOString();if(y.isBoolean(P))return P.toString();if(!S&&y.isBlob(P))throw new D("Blob is not supported. Use a Buffer instead.");if(y.isArrayBuffer(P)||y.isTypedArray(P)){if(S&&typeof m=="function")return new m([P]);if(typeof Buffer<"u")return Buffer.from(P);throw new D("Blob is not supported. Use a Buffer instead.",D.ERR_NOT_SUPPORT)}return P}function $(P){if(P>x)throw new D("Object is too deeply nested ("+P+" levels). Max depth: "+x,D.ERR_FORM_DATA_DEPTH_EXCEEDED)}function I(P,U){if(x===1/0)return JSON.stringify(P);const W=[];return JSON.stringify(P,function(se,X){if(!y.isObject(X))return X;for(;W.length&&W[W.length-1]!==this;)W.pop();return W.push(X),$(U+W.length-1),X})}function q(P,U,W){let F=P;if(y.isReactNative(s)&&y.isReactNativeBlob(P))return s.append(Rl(W,U,p),C(P)),!1;if(P&&!W&&typeof P=="object"){if(y.endsWith(U,"{}"))U=u?U:U.slice(0,-2),P=I(P,1);else if(y.isArray(P)&&$m(P)||(y.isFileList(P)||y.endsWith(U,"[]"))&&(F=y.toArray(P)))return U=jc(U),F.forEach(function(X,de){!(y.isUndefined(X)||X===null)&&s.append(f===!0?Rl([U],de,p):f===null?U:U+"[]",C(X))}),!1}return Al(P)?!0:(s.append(Rl(W,U,p),C(P)),!1)}const H=Object.assign(Om,{defaultVisitor:q,convertValue:C,isVisitable:Al});function R(P,U,W=0){if(!y.isUndefined(P)){if($(W),w.indexOf(P)!==-1)throw new Error("Circular reference detected in "+U.join("."));w.push(P),y.forEach(P,function(se,X){(!(y.isUndefined(se)||se===null)&&d.call(s,se,y.isString(X)?X.trim():X,U,H))===!0&&R(se,U?U.concat(X):[X],W+1)}),w.pop()}}if(!y.isObject(r))throw new TypeError("data must be an object");return R(r),s}function rc(r){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(u){return s[u]})}function Vl(r,s){this._pairs=[],r&&Ts(r,this,s)}const Fc=Vl.prototype;Fc.append=function(s,i){this._pairs.push([s,i])};Fc.toString=function(s){const i=s?u=>s.call(this,u,rc):rc;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};function zm(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Uc(r,s,i){if(!s)return r;r=r||"";const u=y.isFunction(i)?{serialize:i}:i,d=y.getSafeProp(u,"encode")||zm,p=y.getSafeProp(u,"serialize");let f;if(p?f=p(s,u):f=y.isURLSearchParams(s)?s.toString():new Vl(s,u).toString(d),f){const m=r.indexOf("#");m!==-1&&(r=r.slice(0,m)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class ac{constructor(){this.handlers=[]}use(s,i,u){return this.handlers.push({fulfilled:s,rejected:i,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){y.forEach(this.handlers,function(u){u!==null&&s(u)})}}const Ql={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Nm=typeof URLSearchParams<"u"?URLSearchParams:Vl,Am=typeof FormData<"u"?FormData:null,Im=typeof Blob<"u"?Blob:null,Dm={isBrowser:!0,classes:{URLSearchParams:Nm,FormData:Am,Blob:Im},protocols:["http","https","file","blob","url","data"]},Kl=typeof window<"u"&&typeof document<"u",Il=typeof navigator=="object"&&navigator||void 0,Mm=Kl&&(!Il||["ReactNative","NativeScript","NS"].indexOf(Il.product)<0),jm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fm=Kl&&window.location.href||"http://localhost",Um=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kl,hasStandardBrowserEnv:Mm,hasStandardBrowserWebWorkerEnv:jm,navigator:Il,origin:Fm},Symbol.toStringTag,{value:"Module"})),Xe={...Um,...Dm};function Hm(r,s){return Ts(r,new Xe.classes.URLSearchParams,{visitor:function(i,u,d,p){return Xe.isNode&&y.isBuffer(i)?(this.append(u,i.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...s})}const sc=Mc;function Hc(r){if(r>sc)throw new D("FormData field is too deeply nested ("+r+" levels). Max depth: "+sc,D.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Bm(r){const s=[],i=/\w+|\[(\w*)]/g;let u;for(;(u=i.exec(r))!==null;)Hc(s.length),s.push(u[0]==="[]"?"":u[1]||u[0]);return s}function qm(r){const s={},i=Object.keys(r);let u;const d=i.length;let p;for(u=0;u<d;u++)p=i[u],s[p]=r[p];return s}function Bc(r){function s(i,u,d,p){Hc(p);let f=i[p++];if(f==="__proto__")return!0;const m=Number.isFinite(+f),x=p>=i.length;return f=!f&&y.isArray(d)?d.length:f,x?(y.hasOwnProp(d,f)?d[f]=y.isArray(d[f])?d[f].concat(u):[d[f],u]:d[f]=u,!m):((!y.hasOwnProp(d,f)||!y.isObject(d[f]))&&(d[f]=[]),s(i,u,d[f],p)&&y.isArray(d[f])&&(d[f]=qm(d[f])),!m)}if(y.isFormData(r)&&y.isFunction(r.entries)){const i={};return y.forEachEntry(r,(u,d)=>{s(Bm(u),d,i,0)}),i}return null}const cr=(r,s)=>r!=null&&y.hasOwnProp(r,s)?r[s]:void 0;function Wm(r,s,i){if(y.isString(r))try{return(s||JSON.parse)(r),y.trim(r)}catch(u){if(u.name!=="SyntaxError")throw u}return(i||JSON.stringify)(r)}const da={transitional:Ql,adapter:["xhr","http","fetch"],transformRequest:[function(s,i){const u=i.getContentType()||"",d=u.indexOf("application/json")>-1,p=y.isObject(s);if(p&&y.isHTMLForm(s)&&(s=new FormData(s)),y.isFormData(s))return d?JSON.stringify(Bc(s)):s;if(y.isArrayBuffer(s)||y.isBuffer(s)||y.isStream(s)||y.isFile(s)||y.isBlob(s)||y.isReadableStream(s))return s;if(y.isArrayBufferView(s))return s.buffer;if(y.isURLSearchParams(s))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let m;if(p){const x=cr(this,"formSerializer");if(u.indexOf("application/x-www-form-urlencoded")>-1)return Hm(s,x).toString();if((m=y.isFileList(s))||u.indexOf("multipart/form-data")>-1){const S=cr(this,"env"),w=S&&S.FormData;return Ts(m?{"files[]":s}:s,w&&new w,x)}}return p||d?(i.setContentType("application/json",!1),Wm(s)):s}],transformResponse:[function(s){const i=cr(this,"transitional")||da.transitional,u=i&&i.forcedJSONParsing,d=cr(this,"responseType"),p=d==="json";if(y.isResponse(s)||y.isReadableStream(s))return s;if(s&&y.isString(s)&&(u&&!d||p)){const m=!(i&&i.silentJSONParsing)&&p;try{return JSON.parse(s,cr(this,"parseReviver"))}catch(x){if(m)throw x.name==="SyntaxError"?D.from(x,D.ERR_BAD_RESPONSE,this,null,cr(this,"response")):x}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch","query"],r=>{da.headers[r]={}});function Pl(r,s){const i=this||da,u=s||i,d=Ge.from(u.headers);let p=u.data;return y.forEach(r,function(m){p=m.call(i,p,d.normalize(),s?s.status:void 0)}),d.normalize(),p}function qc(r){return!!(r&&r.__CANCEL__)}let ca=class extends D{constructor(s,i,u){super(s??"canceled",D.ERR_CANCELED,i,u),this.name="CanceledError",this.__CANCEL__=!0}};function Wc(r,s,i){const u=i.config.validateStatus;!i.status||!u||u(i.status)?r(i):s(new D("Request failed with status code "+i.status,i.status>=400&&i.status<500?D.ERR_BAD_REQUEST:D.ERR_BAD_RESPONSE,i.config,i.request,i))}function Xm(r){const s=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return s&&s[1]||""}function Vm(r,s){r=r||10;const i=new Array(r),u=new Array(r);let d=0,p=0,f;return s=s!==void 0?s:1e3,function(x){const S=Date.now(),w=u[p];f||(f=S),i[d]=x,u[d]=S;let C=p,$=0;for(;C!==d;)$+=i[C++],C=C%r;if(d=(d+1)%r,d===p&&(p=(p+1)%r),S-f<s)return;const I=w&&S-w;return I?Math.round($*1e3/I):void 0}}function Qm(r,s){let i=0,u=1e3/s,d,p;const f=(S,w=Date.now())=>{i=w,d=null,p&&(clearTimeout(p),p=null),r(...S)};return[(...S)=>{const w=Date.now(),C=w-i;C>=u?f(S,w):(d=S,p||(p=setTimeout(()=>{p=null,f(d)},u-C)))},()=>d&&f(d)]}const Rs=(r,s,i=3)=>{let u=0;const d=Vm(50,250);return Qm(p=>{if(!p||typeof p.loaded!="number")return;const f=p.loaded,m=p.lengthComputable?p.total:void 0,x=m!=null?Math.min(f,m):f,S=Math.max(0,x-u),w=d(S);u=Math.max(u,x);const C={loaded:x,total:m,progress:m?x/m:void 0,bytes:S,rate:w||void 0,estimated:w&&m?(m-x)/w:void 0,event:p,lengthComputable:m!=null,[s?"download":"upload"]:!0};r(C)},i)},ic=(r,s)=>{const i=r!=null;return[u=>s[0]({lengthComputable:i,total:r,loaded:u}),s[1]]},lc=r=>(...s)=>y.asap(()=>r(...s)),Km=Xe.hasStandardBrowserEnv?((r,s)=>i=>(i=new URL(i,Xe.origin),r.protocol===i.protocol&&r.host===i.host&&(s||r.port===i.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,Jm=Xe.hasStandardBrowserEnv?{write(r,s,i,u,d,p,f){if(typeof document>"u")return;const m=[`${r}=${encodeURIComponent(s)}`];y.isNumber(i)&&m.push(`expires=${new Date(i).toUTCString()}`),y.isString(u)&&m.push(`path=${u}`),y.isString(d)&&m.push(`domain=${d}`),p===!0&&m.push("secure"),y.isString(f)&&m.push(`SameSite=${f}`),document.cookie=m.join("; ")},read(r){if(typeof document>"u")return null;const s=document.cookie.split(";");for(let i=0;i<s.length;i++){const u=s[i].replace(/^\s+/,""),d=u.indexOf("=");if(d!==-1&&u.slice(0,d)===r)try{return decodeURIComponent(u.slice(d+1))}catch{return u.slice(d+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ym(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Gm(r,s){return s?r.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):r}const Zm=/^https?:(?!\/\/)/i,eh=/[\t\n\r]/g;function th(r){let s=0;for(;s<r.length&&r.charCodeAt(s)<=32;)s++;return r.slice(s)}function nh(r){return th(r).replace(eh,"")}function oc(r,s){if(typeof r=="string"&&Zm.test(nh(r)))throw new D('Invalid URL: missing "//" after protocol',D.ERR_INVALID_URL,s)}function Xc(r,s,i,u){oc(s,u);let d=!Ym(s);return r&&(d||i===!1)?(oc(r,u),Gm(r,s)):s}const uc=r=>r instanceof Ge?{...r}:r;function jn(r,s){r=r||{},s=s||{};const i=Object.create(null);Object.defineProperty(i,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function u(w,C,$,I){return y.isPlainObject(w)&&y.isPlainObject(C)?y.merge.call({caseless:I},w,C):y.isPlainObject(C)?y.merge({},C):y.isArray(C)?C.slice():C}function d(w,C,$,I){if(y.isUndefined(C)){if(!y.isUndefined(w))return u(void 0,w,$,I)}else return u(w,C,$,I)}function p(w,C){if(!y.isUndefined(C))return u(void 0,C)}function f(w,C){if(y.isUndefined(C)){if(!y.isUndefined(w))return u(void 0,w)}else return u(void 0,C)}function m(w){const C=y.hasOwnProp(s,"transitional")?s.transitional:void 0;if(!y.isUndefined(C))if(y.isPlainObject(C)){if(y.hasOwnProp(C,w))return C[w]}else return;const $=y.hasOwnProp(r,"transitional")?r.transitional:void 0;if(y.isPlainObject($)&&y.hasOwnProp($,w))return $[w]}function x(w,C,$){if(y.hasOwnProp(s,$))return u(w,C);if(y.hasOwnProp(r,$))return u(void 0,w)}const S={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:x,headers:(w,C,$)=>d(uc(w),uc(C),$,!0)};return y.forEach(Object.keys({...r,...s}),function(C){if(C==="__proto__"||C==="constructor"||C==="prototype")return;const $=y.hasOwnProp(S,C)?S[C]:d,I=y.hasOwnProp(r,C)?r[C]:void 0,q=y.hasOwnProp(s,C)?s[C]:void 0,H=$(I,q,C);y.isUndefined(H)&&$!==x||(i[C]=H)}),y.hasOwnProp(s,"validateStatus")&&y.isUndefined(s.validateStatus)&&m("validateStatusUndefinedResolves")===!1&&(y.hasOwnProp(r,"validateStatus")?i.validateStatus=u(void 0,r.validateStatus):delete i.validateStatus),i}const rh=["content-type","content-length"];function ah(r,s,i){if(i!=="content-only"){r.set(s);return}Object.entries(s||{}).forEach(([u,d])=>{rh.includes(u.toLowerCase())&&r.set(u,d)})}const sh=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(s,i)=>String.fromCharCode(parseInt(i,16)));function Vc(r){const s=jn({},r),i=$=>y.hasOwnProp(s,$)?s[$]:void 0,u=i("data");let d=i("withXSRFToken");const p=i("xsrfHeaderName"),f=i("xsrfCookieName");let m=i("headers");const x=i("auth"),S=i("baseURL"),w=i("allowAbsoluteUrls"),C=i("url");if(s.headers=m=Ge.from(m),s.url=Uc(Xc(S,C,w,s),i("params"),i("paramsSerializer")),x){const $=y.getSafeProp(x,"username")||"",I=y.getSafeProp(x,"password")||"";try{m.set("Authorization","Basic "+btoa($+":"+(I?sh(I):"")))}catch(q){throw D.from(q,D.ERR_BAD_OPTION_VALUE,r)}}if(y.isFormData(u)&&(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv||y.isReactNative(u)?m.setContentType(void 0):y.isFunction(u.getHeaders)&&ah(m,u.getHeaders(),i("formDataHeaderPolicy"))),Xe.hasStandardBrowserEnv&&(y.isFunction(d)&&(d=d(s)),d===!0||d==null&&Km(s.url))){const I=p&&f&&Jm.read(f);I&&m.set(p,I)}return s}const ih=typeof XMLHttpRequest<"u",lh=ih&&function(r){return new Promise(function(i,u){const d=Vc(r);let p=d.data;const f=Ge.from(d.headers).normalize();let{responseType:m,onUploadProgress:x,onDownloadProgress:S}=d,w,C,$,I,q;function H(){I&&I(),q&&q(),d.cancelToken&&d.cancelToken.unsubscribe(w),d.signal&&d.signal.removeEventListener("abort",w)}let R=new XMLHttpRequest;R.open(d.method.toUpperCase(),d.url,!0),R.timeout=d.timeout;function P(){if(!R)return;const W=Ge.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),se={data:!m||m==="text"||m==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:W,config:r,request:R};Wc(function(de){i(de),H()},function(de){u(de),H()},se),R=null}"onloadend"in R?R.onloadend=P:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.startsWith("file:"))||setTimeout(P)},R.onabort=function(){R&&(u(new D("Request aborted",D.ECONNABORTED,r,R)),H(),R=null)},R.onerror=function(F){const se=F&&F.message?F.message:"Network Error",X=new D(se,D.ERR_NETWORK,r,R);X.event=F||null,u(X),H(),R=null},R.ontimeout=function(){let F=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const se=d.transitional||Ql;d.timeoutErrorMessage&&(F=d.timeoutErrorMessage),u(new D(F,se.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,r,R)),H(),R=null},p===void 0&&f.setContentType(null),"setRequestHeader"in R&&y.forEach(Ic(f),function(F,se){R.setRequestHeader(se,F)}),y.isUndefined(d.withCredentials)||(R.withCredentials=!!d.withCredentials),m&&m!=="json"&&(R.responseType=d.responseType),S&&([$,q]=Rs(S,!0),R.addEventListener("progress",$)),x&&R.upload&&([C,I]=Rs(x),R.upload.addEventListener("progress",C),R.upload.addEventListener("loadend",I)),(d.cancelToken||d.signal)&&(w=W=>{R&&(u(!W||W.type?new ca(null,r,R):W),R.abort(),H(),R=null)},d.cancelToken&&d.cancelToken.subscribe(w),d.signal&&(d.signal.aborted?w():d.signal.addEventListener("abort",w)));const U=Xm(d.url);if(U&&!Xe.protocols.includes(U)){u(new D("Unsupported protocol "+U+":",D.ERR_BAD_REQUEST,r)),H();return}R.send(p||null)})},oh=(r,s)=>{if(r=r?r.filter(Boolean):[],!s&&!r.length)return;const i=new AbortController;let u=!1;const d=function(x){if(!u){u=!0,f();const S=x instanceof Error?x:this.reason;i.abort(S instanceof D?S:new ca(S instanceof Error?S.message:S))}};let p=s&&setTimeout(()=>{p=null,d(new D(`timeout of ${s}ms exceeded`,D.ETIMEDOUT))},s);const f=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),r=null)};r.forEach(x=>x.addEventListener("abort",d,{once:!0}));const{signal:m}=i;return m.unsubscribe=()=>y.asap(f),m},uh=function*(r,s){let i=r.byteLength;if(i<s){yield r;return}let u=0,d;for(;u<i;)d=u+s,yield r.slice(u,d),u=d},dh=async function*(r,s){for await(const i of ch(r))yield*uh(i,s)},ch=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const s=r.getReader();try{for(;;){const{done:i,value:u}=await s.read();if(i)break;yield u}}finally{await s.cancel()}},dc=(r,s,i,u)=>{const d=dh(r,s);let p=0,f,m=x=>{f||(f=!0,u&&u(x))};return new ReadableStream({async pull(x){try{const{done:S,value:w}=await d.next();if(S){m(),x.close();return}let C=w.byteLength;if(i){let $=p+=C;i($)}x.enqueue(new Uint8Array(w))}catch(S){throw m(S),S}},cancel(x){return m(x),d.return()}},{highWaterMark:2})},Ps=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,ph=(r,s,i)=>s+2<i&&Ps(r.charCodeAt(s+1))&&Ps(r.charCodeAt(s+2));function fh(r){if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const s=r.indexOf(",");if(s<0)return 0;const i=r.slice(5,s),u=r.slice(s+1);if(/;base64/i.test(i)){let f=u.length;const m=u.length;for(let I=0;I<m;I++)if(u.charCodeAt(I)===37&&I+2<m){const q=u.charCodeAt(I+1),H=u.charCodeAt(I+2);Ps(q)&&Ps(H)&&(f-=2,I+=2)}let x=0,S=m-1;const w=I=>I>=2&&u.charCodeAt(I-2)===37&&u.charCodeAt(I-1)===51&&(u.charCodeAt(I)===68||u.charCodeAt(I)===100);S>=0&&(u.charCodeAt(S)===61?(x++,S--):w(S)&&(x++,S-=3)),x===1&&S>=0&&(u.charCodeAt(S)===61||w(S))&&x++;const $=Math.floor(f/4)*3-(x||0);return $>0?$:0}let p=0;for(let f=0,m=u.length;f<m;f++){const x=u.charCodeAt(f);if(x===37&&ph(u,f,m))p+=1,f+=2;else if(x<128)p+=1;else if(x<2048)p+=2;else if(x>=55296&&x<=56319&&f+1<m){const S=u.charCodeAt(f+1);S>=56320&&S<=57343?(p+=4,f++):p+=3}else p+=3}return p}const Jl="1.18.1",cc=64*1024,{isFunction:ws}=y,gh=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(s,i)=>String.fromCharCode(parseInt(i,16))),pc=r=>{if(!y.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},fc=(r,...s)=>{try{return!!r(...s)}catch{return!1}},mh=r=>{const s=r.indexOf("://");let i=r;return s!==-1&&(i=i.slice(s+3)),i.includes("@")||i.includes(":")},hh=r=>{const s=y.global!==void 0&&y.global!==null?y.global:globalThis,{ReadableStream:i,TextEncoder:u}=s;r=y.merge.call({skipUndefined:!0},{Request:s.Request,Response:s.Response},r);const{fetch:d,Request:p,Response:f}=r,m=d?ws(d):typeof fetch=="function",x=ws(p),S=ws(f);if(!m)return!1;const w=m&&ws(i),C=m&&(typeof u=="function"?(P=>U=>P.encode(U))(new u):async P=>new Uint8Array(await new p(P).arrayBuffer())),$=x&&w&&fc(()=>{let P=!1;const U=new p(Xe.origin,{body:new i,method:"POST",get duplex(){return P=!0,"half"}}),W=U.headers.has("Content-Type");return U.body!=null&&U.body.cancel(),P&&!W}),I=S&&w&&fc(()=>y.isReadableStream(new f("").body)),q={stream:I&&(P=>P.body)};m&&["text","arrayBuffer","blob","formData","stream"].forEach(P=>{!q[P]&&(q[P]=(U,W)=>{let F=U&&U[P];if(F)return F.call(U);throw new D(`Response type '${P}' is not supported`,D.ERR_NOT_SUPPORT,W)})});const H=async P=>{if(P==null)return 0;if(y.isBlob(P))return P.size;if(y.isSpecCompliantForm(P))return(await new p(Xe.origin,{method:"POST",body:P}).arrayBuffer()).byteLength;if(y.isArrayBufferView(P)||y.isArrayBuffer(P))return P.byteLength;if(y.isURLSearchParams(P)&&(P=P+""),y.isString(P))return(await C(P)).byteLength},R=async(P,U)=>{const W=y.toFiniteNumber(P.getContentLength());return W??H(U)};return async P=>{let{url:U,method:W,data:F,signal:se,cancelToken:X,timeout:de,onDownloadProgress:re,onUploadProgress:ae,responseType:G,headers:Z,withCredentials:ye="same-origin",fetchOptions:Re,maxContentLength:Ee,maxBodyLength:Ze}=Vc(P);const Ae=y.isNumber(Ee)&&Ee>-1,ke=y.isNumber(Ze)&&Ze>-1,M=J=>y.hasOwnProp(P,J)?P[J]:void 0;let ee=d||fetch;G=G?(G+"").toLowerCase():"text";let j=oh([se,X&&X.toAbortSignal()],de),b=null;const L=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let le,ue=null;const ge=()=>new D("Request body larger than maxBodyLength limit",D.ERR_BAD_REQUEST,P,b);try{let J;const ce=M("auth");if(ce){const oe=y.getSafeProp(ce,"username")||"",Be=y.getSafeProp(ce,"password")||"";J={username:oe,password:Be}}if(mh(U)){const oe=new URL(U,Xe.origin);if(!J&&(oe.username||oe.password)){const Be=pc(oe.username),St=pc(oe.password);J={username:Be,password:St}}(oe.username||oe.password)&&(oe.username="",oe.password="",U=oe.href)}if(J&&(Z.delete("authorization"),Z.set("Authorization","Basic "+btoa(gh((J.username||"")+":"+(J.password||""))))),Ae&&typeof U=="string"&&U.startsWith("data:")&&fh(U)>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,b);if(ke&&W!=="get"&&W!=="head"){const oe=await H(F);if(typeof oe=="number"&&isFinite(oe)&&(le=oe,oe>Ze))throw ge()}const me=ke&&(y.isReadableStream(F)||y.isStream(F)),xe=(oe,Be,St)=>dc(oe,cc,Et=>{if(ke&&Et>Ze)throw ue=ge();Be&&Be(Et)},St);if($&&W!=="get"&&W!=="head"&&(ae||me)){if(le=le??await R(Z,F),le!==0||me){let oe=new p(U,{method:"POST",body:F,duplex:"half"}),Be;if(y.isFormData(F)&&(Be=oe.headers.get("content-type"))&&Z.setContentType(Be),oe.body){const[St,Et]=ae&&ic(le,Rs(lc(ae)))||[];F=xe(oe.body,St,Et)}}}else if(me&&!x&&w&&W!=="get"&&W!=="head")F=xe(F);else if(me&&x&&!$&&W!=="get"&&W!=="head")throw new D("Stream request bodies are not supported by the current fetch implementation",D.ERR_NOT_SUPPORT,P,b);y.isString(ye)||(ye=ye?"include":"omit");const et=x&&"credentials"in p.prototype;if(y.isFormData(F)){const oe=Z.getContentType();oe&&/^multipart\/form-data/i.test(oe)&&!/boundary=/i.test(oe)&&Z.delete("content-type")}Z.set("User-Agent","axios/"+Jl,!1);const yn={...Re,signal:j,method:W.toUpperCase(),headers:Ic(Z.normalize()),body:F,duplex:"half",credentials:et?ye:void 0};b=x&&new p(U,yn);let mt=await(x?ee(b,Re):ee(U,yn));const bn=Ge.from(mt.headers);if(Ae){const oe=y.toFiniteNumber(bn.getContentLength());if(oe!=null&&oe>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,b)}const xn=I&&(G==="stream"||G==="response");if(I&&mt.body&&(re||Ae||xn&&L)){const oe={};["status","statusText","headers"].forEach(Mt=>{oe[Mt]=mt[Mt]});const Be=y.toFiniteNumber(bn.getContentLength()),[St,Et]=re&&ic(Be,Rs(lc(re),!0))||[];let Kt=0;const Jt=Mt=>{if(Ae&&(Kt=Mt,Kt>Ee))throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,b);St&&St(Mt)};mt=new f(dc(mt.body,cc,Jt,()=>{Et&&Et(),L&&L()}),oe)}G=G||"text";let ht=await q[y.findKey(q,G)||"text"](mt,P);if(Ae&&!I&&!xn){let oe;if(ht!=null&&(typeof ht.byteLength=="number"?oe=ht.byteLength:typeof ht.size=="number"?oe=ht.size:typeof ht=="string"&&(oe=typeof u=="function"?new u().encode(ht).byteLength:ht.length)),typeof oe=="number"&&oe>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,b)}return!xn&&L&&L(),await new Promise((oe,Be)=>{Wc(oe,Be,{data:ht,headers:Ge.from(mt.headers),status:mt.status,statusText:mt.statusText,config:P,request:b})})}catch(J){if(L&&L(),j&&j.aborted&&j.reason instanceof D){const ce=j.reason;throw ce.config=P,b&&(ce.request=b),J!==ce&&Object.defineProperty(ce,"cause",{__proto__:null,value:J,writable:!0,enumerable:!1,configurable:!0}),ce}if(ue)throw b&&!ue.request&&(ue.request=b),ue;if(J instanceof D)throw b&&!J.request&&(J.request=b),J;if(J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)){const ce=new D("Network Error",D.ERR_NETWORK,P,b,J&&J.response);throw Object.defineProperty(ce,"cause",{__proto__:null,value:J.cause||J,writable:!0,enumerable:!1,configurable:!0}),ce}throw D.from(J,J&&J.code,P,b,J&&J.response)}}},vh=new Map,Qc=r=>{let s=r&&r.env||{};const{fetch:i,Request:u,Response:d}=s,p=[u,d,i];let f=p.length,m=f,x,S,w=vh;for(;m--;)x=p[m],S=w.get(x),S===void 0&&w.set(x,S=m?new Map:hh(s)),w=S;return S};Qc();const Yl={http:Tm,xhr:lh,fetch:{get:Qc}};y.forEach(Yl,(r,s)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:s})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:s})}});const gc=r=>`- ${r}`,yh=r=>y.isFunction(r)||r===null||r===!1;function bh(r,s){r=y.isArray(r)?r:[r];const{length:i}=r;let u,d;const p={};for(let f=0;f<i;f++){u=r[f];let m;if(d=u,!yh(u)&&(d=Yl[(m=String(u)).toLowerCase()],d===void 0))throw new D(`Unknown adapter '${m}'`);if(d&&(y.isFunction(d)||(d=d.get(s))))break;p[m||"#"+f]=d}if(!d){const f=Object.entries(p).map(([x,S])=>`adapter ${x} `+(S===!1?"is not supported by the environment":"is not available in the build"));let m=i?f.length>1?`since :
`+f.map(gc).join(`
`):" "+gc(f[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+m,D.ERR_NOT_SUPPORT)}return d}const Kc={getAdapter:bh,adapters:Yl};function Ll(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ca(null,r)}function mc(r){return Ll(r),r.headers=Ge.from(r.headers),r.data=Pl.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Kc.getAdapter(r.adapter||da.adapter,r)(r).then(function(u){Ll(r),r.response=u;try{u.data=Pl.call(r,r.transformResponse,u)}finally{delete r.response}return u.headers=Ge.from(u.headers),u},function(u){if(!qc(u)&&(Ll(r),u&&u.response)){r.response=u.response;try{u.response.data=Pl.call(r,r.transformResponse,u.response)}finally{delete r.response}u.response.headers=Ge.from(u.response.headers)}return Promise.reject(u)})}const $s={};["object","boolean","number","function","string","symbol"].forEach((r,s)=>{$s[r]=function(u){return typeof u===r||"a"+(s<1?"n ":" ")+r}});const hc={};$s.transitional=function(s,i,u){function d(p,f){return"[Axios v"+Jl+"] Transitional option '"+p+"'"+f+(u?". "+u:"")}return(p,f,m)=>{if(s===!1)throw new D(d(f," has been removed"+(i?" in "+i:"")),D.ERR_DEPRECATED);return i&&!hc[f]&&(hc[f]=!0,console.warn(d(f," has been deprecated since v"+i+" and will be removed in the near future"))),s?s(p,f,m):!0}};$s.spelling=function(s){return(i,u)=>(console.warn(`${u} is likely a misspelling of ${s}`),!0)};function xh(r,s,i){if(typeof r!="object"||r===null)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const u=Object.keys(r);let d=u.length;for(;d-- >0;){const p=u[d],f=Object.prototype.hasOwnProperty.call(s,p)?s[p]:void 0;if(f){const m=r[p],x=m===void 0||f(m,p,r);if(x!==!0)throw new D("option "+p+" must be "+x,D.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new D("Unknown option "+p,D.ERR_BAD_OPTION)}}const _s={assertOptions:xh,validators:$s},Ye=_s.validators;let An=class{constructor(s){this.defaults=s||{},this.interceptors={request:new ac,response:new ac}}async request(s,i){try{return await this._request(s,i)}catch(u){if(u instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=(()=>{if(!d.stack)return"";const f=d.stack.indexOf(`
`);return f===-1?"":d.stack.slice(f+1)})();try{if(!u.stack)u.stack=p;else if(p){const f=p.indexOf(`
`),m=f===-1?-1:p.indexOf(`
`,f+1),x=m===-1?"":p.slice(m+1);String(u.stack).endsWith(x)||(u.stack+=`
`+p)}}catch{}}throw u}}_request(s,i){typeof s=="string"?(i=i||{},i.url=s):i=s||{},i=jn(this.defaults,i);const{transitional:u,paramsSerializer:d,headers:p}=i;u!==void 0&&_s.assertOptions(u,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean),legacyInterceptorReqResOrdering:Ye.transitional(Ye.boolean),advertiseZstdAcceptEncoding:Ye.transitional(Ye.boolean),validateStatusUndefinedResolves:Ye.transitional(Ye.boolean)},!1),d!=null&&(y.isFunction(d)?i.paramsSerializer={serialize:d}:_s.assertOptions(d,{encode:Ye.function,serialize:Ye.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),_s.assertOptions(i,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=p&&y.merge(p.common,p[i.method]);p&&y.forEach(["delete","get","head","post","put","patch","query","common"],q=>{delete p[q]}),i.headers=Ge.concat(f,p);const m=[];let x=!0;this.interceptors.request.forEach(function(H){if(typeof H.runWhen=="function"&&H.runWhen(i)===!1)return;x=x&&H.synchronous;const R=i.transitional||Ql;R&&R.legacyInterceptorReqResOrdering?m.unshift(H.fulfilled,H.rejected):m.push(H.fulfilled,H.rejected)});const S=[];this.interceptors.response.forEach(function(H){S.push(H.fulfilled,H.rejected)});let w,C=0,$;if(!x){const q=[mc.bind(this),void 0];for(q.unshift(...m),q.push(...S),$=q.length,w=Promise.resolve(i);C<$;)w=w.then(q[C++],q[C++]);return w}$=m.length;let I=i;for(;C<$;){const q=m[C++],H=m[C++];try{I=q(I)}catch(R){H.call(this,R);break}}try{w=mc.call(this,I)}catch(q){return Promise.reject(q)}for(C=0,$=S.length;C<$;)w=w.then(S[C++],S[C++]);return w}getUri(s){s=jn(this.defaults,s);const i=Xc(s.baseURL,s.url,s.allowAbsoluteUrls,s);return Uc(i,s.params,s.paramsSerializer)}};y.forEach(["delete","get","head","options"],function(s){An.prototype[s]=function(i,u){return this.request(jn(u||{},{method:s,url:i,data:u&&y.hasOwnProp(u,"data")?u.data:void 0}))}});y.forEach(["post","put","patch","query"],function(s){function i(u){return function(p,f,m){return this.request(jn(m||{},{method:s,headers:u?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}An.prototype[s]=i(),s!=="query"&&(An.prototype[s+"Form"]=i(!0))});let wh=class Jc{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(p){i=p});const u=this;this.promise.then(d=>{if(!u._listeners)return;let p=u._listeners.length;for(;p-- >0;)u._listeners[p](d);u._listeners=null}),this.promise.then=d=>{let p;const f=new Promise(m=>{u.subscribe(m),p=m}).then(d);return f.cancel=function(){u.unsubscribe(p)},f},s(function(p,f,m){u.reason||(u.reason=new ca(p,f,m),i(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const i=this._listeners.indexOf(s);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const s=new AbortController,i=u=>{s.abort(u)};return this.subscribe(i),s.signal.unsubscribe=()=>this.unsubscribe(i),s.signal}static source(){let s;return{token:new Jc(function(d){s=d}),cancel:s}}};function kh(r){return function(i){return r.apply(null,i)}}function Sh(r){return y.isObject(r)&&r.isAxiosError===!0}const Dl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Dl).forEach(([r,s])=>{Dl[s]=r});function Yc(r){const s=new An(r),i=Rc(An.prototype.request,s);return y.extend(i,An.prototype,s,{allOwnKeys:!0}),y.extend(i,s,null,{allOwnKeys:!0}),i.create=function(d){return Yc(jn(r,d))},i}const $e=Yc(da);$e.Axios=An;$e.CanceledError=ca;$e.CancelToken=wh;$e.isCancel=qc;$e.VERSION=Jl;$e.toFormData=Ts;$e.AxiosError=D;$e.Cancel=$e.CanceledError;$e.all=function(s){return Promise.all(s)};$e.spread=kh;$e.isAxiosError=Sh;$e.mergeConfig=jn;$e.AxiosHeaders=Ge;$e.formToJSON=r=>Bc(y.isHTMLForm(r)?new FormData(r):r);$e.getAdapter=Kc.getAdapter;$e.HttpStatusCode=Dl;$e.default=$e;const{Axios:nv,AxiosError:rv,CanceledError:av,isCancel:sv,CancelToken:iv,VERSION:lv,all:ov,Cancel:uv,isAxiosError:dv,spread:cv,toFormData:pv,AxiosHeaders:fv,HttpStatusCode:gv,formToJSON:mv,getAdapter:hv,mergeConfig:vv,create:yv}=$e,la="/api/analyze",ks="/api/chat",Ml="/api/hair-analysis";function Tl(r){return(r==null?void 0:r.trim().replace(/\/+$/,""))||""}function Gc(){var u;const r=typeof window<"u"?Tl((u=window.__DIAOLEME_CONFIG__)==null?void 0:u.apiBaseUrl):"",s=Tl(void 0),i=Tl(void 0);return r?vc(r):s?vc(s):i||la}function vc(r){return r.endsWith(la)||r.endsWith(Ml)?r:`${r}${la}`}function Eh(r){return r.endsWith(ks)?r:r.endsWith(la)?r.slice(0,-la.length)+ks:r.endsWith(Ml)?r.slice(0,-Ml.length)+ks:`${r}${ks}`}const yc={url:Gc(),timeout:45e3},bc={url:Eh(Gc()),timeout:45e3};async function _h(r){var s;try{const i=await $e.post(bc.url,{messages:r},{timeout:bc.timeout});return xc(i.data)}catch(i){return $e.isAxiosError(i)&&((s=i.response)!=null&&s.data)?xc(i.response.data):(console.warn("[model] 聊天接口不可达，返回本地客服兜底。",i),{reply:"我现在暂时连不上后端 AI，但可以先陪你记录：今天先完成一次轻量 Scan，再根据结果选择一个小任务就好。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"CHAT_BACKEND_UNREACHABLE"})}}function xc(r){const s=np(r==null?void 0:r.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return{reply:Vt(r==null?void 0:r.reply,"我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。"),source:s,source_label:Vt(r==null?void 0:r.source_label,Gl(s)),fallback_code:jl((r==null?void 0:r.fallback_code)??(r==null?void 0:r.fallbackCode))}}const Zc="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",ep=8*1024*1024;async function Ch(r,s=Rh()){if(tp(r),s==="mock-fail")throw await Oh(900),new Error("mock_fail");if(s==="mock-success")return rp(r,"mock");try{const i=new FormData;i.append("image",r);const u=await $e.post(yc.url,i,{timeout:yc.timeout});return Ph(u.data)}catch(i){return console.warn("[model] 后端分析代理不可达，返回明确的本地 fallback。",i),$h(r)}}function Rh(){const r=typeof window<"u"?new URLSearchParams(window.location.search):null,s=r==null?void 0:r.get("mock");return s==="success"?"mock-success":s==="fail"?"mock-fail":"auto"}function tp(r){if(!r)throw new Error("empty_file");if(!r.type.startsWith("image/"))throw new Error("not_image");if(r.size<=0)throw new Error("empty_file");if(r.size>ep)throw new Error("file_too_large")}function Ph(r){const s=r!=null&&r.result&&typeof r.result=="object"?r.result:r&&typeof r=="object"?r:{},i=np(s.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return Lh(s,i,{fallbackCode:jl((r==null?void 0:r.fallbackCode)??(r==null?void 0:r.fallback_code)),recordStatus:Vt(r==null?void 0:r.record_status,i==="api"?"ai_completed":`${i}_result`),recordId:jl(r==null?void 0:r.record_id)})}function Lh(r,s=r.source||"api",i={}){const u=typeof r.score=="number"?Math.max(0,Math.min(100,Math.round(r.score))):66,d=Array.isArray(r.suggestions)&&r.suggestions.length>0?r.suggestions.slice(0,5).map(String):[r.daily_task||"今晚给自己留 30 分钟放松时间"],p=Array.isArray(r.tags)&&r.tags.length>0?r.tags.slice(0,4).map(String):Th(u);return{score:u,title:Vt(r.title,u>=70?"发丝巡逻队长":u>=45?"头毛观察员":"发量守护实习生"),summary:Vt(r.summary,u>=70?"今天的头毛队形挺稳，适合继续轻松记录。":"今天有一点小波动，但已经被你认真捕捉到了。"),roast:Vt(r.roast,u>=70?"发丝们排队下班，还挺讲秩序。":"头发像开了早会，讨论得稍微热闹了一点。"),encouragement:Vt(r.encouragement,"别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。"),tags:p,daily_task:Vt(r.daily_task,d[0]),disclaimer:Vt(r.disclaimer,Zc),source:s,source_label:Gl(s,r.source_label),fallback_code:i.fallbackCode??null,record_status:i.recordStatus||`${s}_result`,record_id:i.recordId??null,count:r.count==="少量"||r.count==="偏多"?r.count:"中等",thickness:r.thickness==="粗硬"||r.thickness==="细软"?r.thickness:"正常",suggestions:d}}function Vt(r,s){return typeof r=="string"&&r.trim()?r.trim():s}function jl(r){return typeof r=="string"&&r.trim()?r.trim():null}function np(r,s,i){return r==="api"||r==="mock"||r==="fallback"?r:i===!1||s==="fallback"?"fallback":s==="mock"?"mock":"api"}function Th(r){return r>=75?["队形稳定","心态在线","今日好梳"]:r>=50?["轻微波动","继续观察","早点睡派"]:["需要抱抱","从容记录","温柔养成"]}function Gl(r,s){return s||(r==="api"?"CC club OpenAI compatible AI 分析结果":r==="fallback"?"AI 兜底结果":"Demo mock 结果")}function rp(r,s="mock"){const i=r!=null&&r.name?`已读取「${r.name.slice(0,18)}」`:"已读取今天的照片";return new Promise(u=>setTimeout(()=>{u({score:72,title:"发际线守护者",summary:`${i}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,roast:"头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。",encouragement:"不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。",tags:["今日好梳","轻松观察","早睡加分"],daily_task:"今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。",disclaimer:Zc,source:s,source_label:Gl(s),fallback_code:null,record_status:"frontend_demo_mock",record_id:null,count:"中等",thickness:"正常",suggestions:["今晚提前 30 分钟进入休息模式","洗头时水温尽量温和","睡前做 2 分钟放松呼吸"]})},1200))}async function $h(r){return{...await rp(r,"fallback"),title:"本地兜底记录",summary:"后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。",disclaimer:"当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。",source_label:"本地 Demo fallback（非真实 AI）",fallback_code:"BACKEND_UNREACHABLE",record_status:"frontend_local_fallback"}}function Oh(r){return new Promise(s=>setTimeout(s,r))}const In=[{id:"none",name:"素颜",emoji:"🌱",cost:0,description:"最真实的自己"},{id:"short",name:"清爽短发",emoji:"✂️",cost:0,description:"简单利落"},{id:"medium",name:"自然中分",emoji:"💇",cost:30,description:"邻家风格"},{id:"long",name:"飘逸长发",emoji:"👸",cost:80,description:"需要坚持打卡"},{id:"curly",name:"羊毛卷",emoji:"🌀",cost:120,description:"俏皮可爱"},{id:"bun",name:"丸子头",emoji:"🎀",cost:200,description:"终极成就"}],wc=r=>{let s;const i=new Set,u=(S,w)=>{const C=typeof S=="function"?S(s):S;if(!Object.is(C,s)){const $=s;s=w??(typeof C!="object"||C===null)?C:Object.assign({},s,C),i.forEach(I=>I(s,$))}},d=()=>s,m={setState:u,getState:d,getInitialState:()=>x,subscribe:S=>(i.add(S),()=>i.delete(S))},x=s=r(u,d,m);return m},zh=(r=>r?wc(r):wc),Nh=r=>r;function Ah(r,s=Nh){const i=ra.useSyncExternalStore(r.subscribe,ra.useCallback(()=>s(r.getState()),[r,s]),ra.useCallback(()=>s(r.getInitialState()),[r,s]));return ra.useDebugValue(i),i}const Ih=r=>{const s=zh(r),i=u=>Ah(s,u);return Object.assign(i,s),i},Dh=(r=>Ih);function ap(r,s){let i;try{i=r()}catch{return}return{getItem:d=>{var p;const f=x=>x===null?null:JSON.parse(x,void 0),m=(p=i.getItem(d))!=null?p:null;return m instanceof Promise?m.then(f):f(m)},setItem:(d,p)=>i.setItem(d,JSON.stringify(p,void 0)),removeItem:d=>i.removeItem(d)}}const Fl=r=>s=>{try{const i=r(s);return i instanceof Promise?i:{then(u){return Fl(u)(i)},catch(u){return this}}}catch(i){return{then(u){return this},catch(u){return Fl(u)(i)}}}},Mh=(r,s)=>(i,u,d)=>{let p={storage:ap(()=>window.localStorage),partialize:R=>R,version:0,merge:(R,P)=>({...P,...R}),...s},f=!1,m=0;const x=new Set,S=new Set;let w=p.storage;if(!w)return r((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${p.name}', the given storage is currently unavailable.`),i(...R)},u,d);const C=()=>{const R=p.partialize({...u()});return w.setItem(p.name,{state:R,version:p.version})},$=d.setState;d.setState=(R,P)=>($(R,P),C());const I=r((...R)=>(i(...R),C()),u,d);d.getInitialState=()=>I;let q;const H=()=>{var R,P;if(!w)return;const U=++m;f=!1,x.forEach(F=>{var se;return F((se=u())!=null?se:I)});const W=((P=p.onRehydrateStorage)==null?void 0:P.call(p,(R=u())!=null?R:I))||void 0;return Fl(w.getItem.bind(w))(p.name).then(F=>{if(F)if(typeof F.version=="number"&&F.version!==p.version){if(p.migrate){const se=p.migrate(F.state,F.version);return se instanceof Promise?se.then(X=>[!0,X]):[!0,se]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,F.state];return[!1,void 0]}).then(F=>{var se;if(U!==m)return;const[X,de]=F;if(q=p.merge(de,(se=u())!=null?se:I),i(q,!0),X)return C()}).then(()=>{U===m&&(W==null||W(u(),void 0),q=u(),f=!0,S.forEach(F=>F(q)))}).catch(F=>{U===m&&(W==null||W(void 0,F))})};return d.persist={setOptions:R=>{p={...p,...R},R.storage&&(w=R.storage)},clearStorage:()=>{w==null||w.removeItem(p.name)},getOptions:()=>p,rehydrate:()=>H(),hasHydrated:()=>f,onHydrate:R=>(x.add(R),()=>{x.delete(R)}),onFinishHydration:R=>(S.add(R),()=>{S.delete(R)})},p.skipHydration||H(),q||I},jh=Mh,Fh=()=>new Date().toISOString().slice(0,10),kc="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",we=Dh()(jh((r,s)=>({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:kc,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[],setAnalysis:i=>r({dropScore:i.score,title:i.title,summary:i.summary,roast:i.roast,encouragement:i.encouragement,tags:i.tags,dailyTask:i.daily_task,disclaimer:i.disclaimer,source:i.source,sourceLabel:i.source_label,fallbackCode:i.fallback_code,recordStatus:i.record_status,recordId:i.record_id,count:i.count,thickness:i.thickness,suggestions:i.suggestions}),viewReport:i=>{const u=s().reportHistory.find(d=>d.id===i);u&&r({dropScore:u.score,title:u.title,summary:u.summary,roast:u.roast,encouragement:u.encouragement,tags:u.tags,dailyTask:u.daily_task,disclaimer:u.disclaimer,source:u.source,sourceLabel:u.source_label,fallbackCode:u.fallback_code,recordStatus:u.record_status,recordId:u.record_id,count:u.count,thickness:u.thickness,suggestions:u.suggestions})},viewDayReport:i=>{const u=s().reportHistory.filter(f=>f.date===i);if(u.length===0)return;const d=u[0],p=Math.round(u.reduce((f,m)=>f+m.score,0)/u.length);r({dropScore:p,title:d.title,summary:d.summary,roast:d.roast,encouragement:d.encouragement,tags:d.tags,dailyTask:d.daily_task,disclaimer:d.disclaimer,source:d.source,sourceLabel:d.source_label,fallbackCode:d.fallback_code,recordStatus:d.record_status,recordId:d.record_id,count:d.count,thickness:d.thickness,suggestions:d.suggestions})},addReport:i=>r(u=>({reportHistory:[i,...u.reportHistory].slice(0,100)})),markCheckinToday:()=>{const i=Fh();s().checkinDays.includes(i)||r(u=>({checkinDays:[...u.checkinDays,i],points:u.points+5}))},unlockHairStyle:(i,u)=>{const d=s();return d.unlockedHairStyles.includes(i)?!0:d.points<u?!1:(r({unlockedHairStyles:[...d.unlockedHairStyles,i],points:d.points-u}),!0)},addPoints:i=>r(u=>({points:u.points+i})),resetAll:()=>{r({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:kc,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[]}),typeof window<"u"&&window.localStorage.removeItem("diaolema-user")}}),{name:"diaolema-user",storage:ap(()=>localStorage)}));function Fn({scale:r=1}){return`<div class="buddy" style="transform:scale(${r})"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div>`}const Uh=`<section class="page active" data-page="home">
          <div class="hero card">
            <div>
              <h2>Every hair is a <em>seed</em>, every care brings it to <strong>life</strong>.</h2>
              <p>Diaoleme is your AI hair companion. We understand, support, and grow with you, turning every fallen hair into a seed and every day into a step of growth.</p>
              <div class="hero-buttons">
                <button class="cta primary" data-go="scan">📷 Scan Hair Now</button>
                <button class="cta ghost" data-go="buddy">🌱 Meet Your Buddy</button>
              </div>
              <p>💗 Trusted by 100,000+ users · +99K growth journeys</p>
            </div>
            <div class="buddy-stage">
              <div class="ground"></div>
              ${Fn({scale:1})}
            </div>
            <div class="report-card card">
              <h3>Today's Seed Report ✨</h3>
              <div><span class="big-number">12</span> seeds fallen</div>
              <p>Mostly healthy &amp; full of life</p>
              <div class="chart" data-bars="36,58,51,29,74,69,84"><span class="bar" style="height:36%"></span><span class="bar" style="height:58%"></span><span class="bar" style="height:51%"></span><span class="bar" style="height:29%"></span><span class="bar" style="height:74%"></span><span class="bar" style="height:69%"></span><span class="bar" style="height:84%"></span></div>
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
              <div><span class="big-number">420</span> / 800 XP <span class="badge">Lv.5</span></div>
              <div class="meter"><div class="fill" style="--w:52%"></div></div>
              <p>⭐ 380 XP to unlock new hairstyle</p>
            </div>
            <div class="card">
              <h3>🏆 Hair Growth League</h3>
              <div class="leaderboard small-leaders"><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">1</span><b>Luna</b><span>28,760 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">2</span><b>Mia</b><span>25,480 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">3</span><b>Ray</b><span>22,140 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">4</span><b>Sophia</b><span>18,900 XP</span></div></div>
            </div>
          </div>
        </section>`,Hh=`<section class="page" data-page="scan">
          <div class="scan-wrap">
            <div class="feature-stack">
              <div class="feature"><b>☀️ 光线充足</b><small>自然光或白色灯光</small></div>
              <div class="feature"><b>⬚ 平铺头发</b><small>尽量不重叠</small></div>
              <div class="feature"><b>◌ 对比清晰</b><small>浅色背景更佳</small></div>
              <div class="card soft"><b>别担心～</b><p>我们一起慢慢变好 💗</p><div class="mini-buddy"></div></div>
            </div>
            <div class="card" style="text-align:center">
              <div class="scan-orbit">
                ${Fn({scale:.78})}
                <div class="scan-percent" id="scanPercent">待上传</div>
              </div>
              <h3>请将头发平铺在对比清晰的背景上</h3>
              <p>确保光线充足，避免阴影和反光</p>
              <div class="hero-buttons" style="justify-content:center">
                <button class="cta primary" id="scanBtn">📷 拍照扫描</button>
                <button class="cta ghost">🖼 相册上传</button>
              </div>
            </div>
            <div class="grid">
              <div class="card"><h3>如何获得更准确的结果？</h3><div class="three grid"><div>✅<br><b>保持相同环境</b></div><div>❌<br><b>头发打结成团</b></div><div>❌<br><b>背景颜色复杂</b></div></div></div>
              <div class="card scan-week-card"><h3>本周扫描数据</h3><div class="three grid"><div><span class="big-number">3</span><br>扫描次数</div><div><span class="big-number">126</span><br>平均掉发量</div><div><span class="badge">正常</span><br>整体状态</div></div></div>
              <div class="card item-list scan-history-card"><h3>最近扫描记录</h3><div class="item"><span>〰</span><b>2024/05/18 10:30</b><span class="status">128 根</span></div><div class="item"><span>〰</span><b>2024/05/17 10:25</b><span class="status">132 根</span></div><div class="item"><span>〰</span><b>2024/05/16 10:28</b><span class="status">118 根</span></div></div>
            </div>
          </div>
        </section>`,Bh=`<section class="page" data-page="buddy">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:420px">
                <div>
                  <h2 style="font-size:42px">Fluffy Seedling <span class="badge">Lv.5</span></h2>
                  <p>陪伴你已经 38 天啦 💗</p>
                  <div class="metric">
                    <div class="metric-row"><span style="font-size:32px">💗</span><div class="meter"><div class="fill" style="--w:86%;--c:#ff77a8"></div></div><b>86/100</b></div>
                    <div class="metric-row"><span style="font-size:32px">⚡</span><div class="meter"><div class="fill" style="--w:68%;--c:#ffad2f"></div></div><b>68/100</b></div>
                    <div class="metric-row"><span style="font-size:32px">😊</span><div class="meter"><div class="fill" style="--w:72%"></div></div><b>Happy</b></div>
                  </div>
                </div>
                <div class="buddy-stage"><div class="ground"></div>${Fn({scale:1})}</div>
              </div>
              <div class="card">
                <h3 class="section-title">解锁发型 <span class="badge">3 / 12 已解锁</span></h3>
                <div class="skin-grid" id="skins"><button class="skin"><div class="mini-buddy" style=""></div><b>蒲公英蓬蓬头</b><small>Lv.5</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>星光短发</b><small>Lv.8</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>彩虹飘带</b><small>Lv.10</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.12</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.14</small></button><button class="skin active"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.18</small></button></div>
              </div>
            </div>
            <div class="grid">
              <div class="card"><h3>今日头发报告</h3><div><span class="big-number">12</span> 根</div><p>大多是健康的毛发，状态很棒！</p><div class="chart" data-bars="24,30,28,33,59,47,65"><span class="bar" style="height:24%"></span><span class="bar" style="height:30%"></span><span class="bar" style="height:28%"></span><span class="bar" style="height:33%"></span><span class="bar" style="height:59%"></span><span class="bar" style="height:47%"></span><span class="bar" style="height:65%"></span></div></div>
              <div class="card item-list">
                <button class="item"><span>👗</span><b>Dress Up<small>装扮你的伙伴</small></b><span>›</span></button>
                <button class="item"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
                <button class="item"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
                <button class="item"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
              </div>
            </div>
          </div>
        </section>`,qh=`<section class="page" data-page="quests">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div>
                  <h3>今日活跃奖励</h3>
                  <p>完成今日任务，领取额外奖励！</p>
                  <div class="row" id="weekRewards"><span class="badge">✓<br><small>+10 XP</small></span><span class="badge">✓<br><small>+15 XP</small></span><span class="badge">三<br><small>+20 XP</small></span><span class="badge">四<br><small>+25 XP</small></span><span class="badge">五<br><small>+30 XP</small></span><span class="badge">六<br><small>+25 XP</small></span><span class="badge">日<br><small>+25 XP</small></span></div>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Fn({scale:.62})}</div>
              </div>
              <div class="tabs"><button class="pill primary">每日任务</button><button class="pill">每周任务</button><button class="pill">成长任务</button><button class="pill">特别任务</button></div>
              <div class="card item-list" id="questList"><div class="item"><span style="font-size:26px">💧</span><b>喝够 8 杯水<small>充足的水分让头发更健康</small></b><span>6/8</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🌙</span><b>23:30 前睡觉<small>早睡是头皮的修复时间</small></b><span>0/1</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🥗</span><b>吃一份蔬果<small>补充维生素，滋养发根</small></b><span>1/1</span><button class="quest-btn done">✓ 已完成</button></div><div class="item"><span style="font-size:26px">🖐</span><b>头皮按摩 5 分钟<small>促进头皮血液循环</small></b><span>2/5</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🚶</span><b>散步 20 分钟<small>运动让身体和头发一起呼吸</small></b><span>1/1</span><button class="quest-btn done">✓ 已完成</button></div><div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>完成所有每日任务可获得额外奖励！</b><span>+100 XP</span><button class="quest-btn done">未完成</button></div></div>
            </div>
            <aside class="grid">
              <div class="card"><h3>我的任务进度</h3><div class="big-number">78%</div><div class="meter"><div class="fill" style="--w:78%"></div></div><p>完成 11/14 个任务</p></div>
              <div class="card"><h3>连续打卡</h3><div class="big-number">7 天</div><div class="row" id="streak"><span class="badge">✓<br><small>一</small></span><span class="badge">✓<br><small>二</small></span><span class="badge">✓<br><small>三</small></span><span class="badge">✓<br><small>四</small></span><span class="badge">✓<br><small>五</small></span><span class="badge">✓<br><small>六</small></span><span class="badge">🎁<br><small>日</small></span></div></div>
              <div class="card"><h3>任务小贴士</h3><p>定期护理 + 健康生活习惯 = 健康的头发！保持好心情，规律作息，均衡饮食。</p><div class="mini-buddy"></div></div>
              <div class="card"><h3>本周任务总览</h3><div class="donut" data-label="14A 总任务数"></div></div>
            </aside>
          </div>
        </section>`,Wh=`<section class="page" data-page="journey">
          <div class="grid two-col">
            <div class="grid">
              <div class="card timeline-hero">
                <h3>见证成长的每一步 🌱</h3><p>你的每一个好习惯，都会让小发球变得更强壮。</p>
                <div class="path"></div>
                <div class="milestones" id="milestones"><div class="milestone"><div class="dot">⚑</div>开始记录<br><small>5/1</small></div><div class="milestone"><div class="dot">🌱</div>坚持 3 天<br><small>5/4</small></div><div class="milestone"><div class="dot">⭐</div>完成第一个任务<br><small>5/7</small></div><div class="milestone"><div class="dot">7</div>连续 7 天<br><small>5/12</small></div><div class="milestone"><div class="dot">💧</div>头皮健康改善<br><small>5/18</small></div><div class="milestone"><div class="dot">✂</div>解锁新发型<br><small>5/24</small></div></div>
              </div>
              <div class="card item-list" id="timeline"><div class="item"><span>5/18</span><b>头皮健康评分提升<small>你的头皮健康评分从 72 提升到 82，继续保持哦！</small></b><span class="status">+10 健康分</span></div><div class="item"><span>5/15</span><b>早睡打卡<small>你在 22:30 前入睡，睡眠质量很棒！</small></b><span class="status">+60 XP</span></div><div class="item"><span>5/12</span><b>连续打卡 7 天<small>太棒了！你已经连续 7 天坚持记录和护理！</small></b><span class="status">+200 XP</span></div><div class="item"><span>5/10</span><b>健康饮食<small>你记录了健康餐饮，营养均衡。</small></b><span class="status">+40 XP</span></div><div class="item"><span>5/8</span><b>运动 20 分钟<small>运动可以促进血液循环，头发会更健康哦！</small></b><span class="status">+50 XP</span></div></div>
            </div>
            <aside class="grid">
              <div class="card"><h3>旅程总览</h3><div class="three grid"><div><span class="big-number">32</span><br>记录天数</div><div><span class="big-number">1,620</span><br>总 XP</div><div><span class="big-number">12</span><br>连续天数</div></div></div>
              <div class="card"><h3>心情轨迹</h3><div class="chart" data-bars="38,47,62,42,68,58,76"><span class="bar" style="height:38%"></span><span class="bar" style="height:47%"></span><span class="bar" style="height:62%"></span><span class="bar" style="height:42%"></span><span class="bar" style="height:68%"></span><span class="bar" style="height:58%"></span><span class="bar" style="height:76%"></span></div></div>
              <div class="card"><h3>本月高光时刻</h3><div class="item-list"><div class="item"><span>🌱</span><b>连续打卡 7 天</b><span>5/12</span></div><div class="item"><span>💧</span><b>健康评分提升</b><span>5/18</span></div><div class="item"><span>💙</span><b>解锁新发型</b><span>5/24</span></div></div></div>
            </aside>
          </div>
        </section>`,Xh=`<section class="page" data-page="league">
          <div class="grid two-col">
            <div class="grid">
              <section class="league-season-hero">
                <div class="league-hero-copy">
                  <span>本赛季</span>
                  <h2>春风吹发季 🌸</h2>
                  <p>5.1 - 5.31 <small>ⓘ</small></p>
                  <small>赛季结束倒计时</small>
                  <div class="league-countdown"><div><b>08</b><span>天</span></div><div><b>12</b><span>时</span></div><div><b>36</b><span>分</span></div><div><b>45</b><span>秒</span></div></div>
                </div>
                <div class="league-hero-characters" aria-label="赛季前三名占位">
                  <span class="podium second"><i>2</i></span>
                  <span class="podium first"><i>1</i></span>
                  <span class="podium third"><i>3</i></span>
                </div>
                <div class="league-hero-rank">
                  <button type="button">🎁 赛季奖励预览</button>
                  <span>我的段位</span>
                  <div class="league-hero-badge">★</div>
                  <b>钻石 III</b>
                  <small>⭐ 620 / 1000</small>
                  <div class="league-hero-progress"><i></i></div>
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
                <div class="league-alliance-main"><span class="league-shield-placeholder">✦</span><div><b>蒲公英小分队 <em>Lv.6</em></b><span>Lv.5</span></div></div>
                <div class="league-alliance-stats"><div><span>成员</span><b>28 / 30</b></div><div><span>本周贡献</span><b>3,260 XP</b></div></div>
                <div class="league-purple-progress"><i></i></div><small class="league-center-note">距离下一等级还需 740 XP</small>
              </section>
              <section class="league-side-panel announcement-panel">
                <div class="league-panel-title"><strong>联盟公告</strong><button type="button">更多 ›</button></div>
                <button class="league-announcement" type="button"><span>• 本周联盟任务已更新，快来完成吧！</span><time>05-18</time></button>
                <button class="league-announcement" type="button"><span>• 联盟战即将开始，准备好了吗？</span><time>05-17</time></button>
                <button class="league-announcement" type="button"><span>• 欢迎新成员加入蒲公英小分队～</span><time>05-15</time></button>
              </section>
              <section class="league-side-panel battle-panel">
                <div class="league-panel-title"><strong>本周联盟战 <span class="league-live">进行中</span></strong></div>
                <div class="league-battle-grid"><div><span class="league-battle-badge purple">★</span><b>蒲公英小分队</b><strong>15,680</strong></div><span>VS</span><div><span class="league-battle-badge green">★</span><b>发光小队</b><strong>12,420</strong></div></div>
                <small class="league-center-note">剩余 2 天 12:36:45</small>
              </section>
              <section class="league-side-panel awards-panel">
                <div class="league-panel-title"><strong>每周荣誉榜</strong><button type="button">更多 ›</button></div>
                <div class="league-awards-grid"><div><span class="award-dot purple">♔</span><b>护发达人</b><small>Luna</small></div><div><span class="award-dot pink">♥</span><b>爱心大使</b><small>Mia</small></div><div><span class="award-dot blue">✦</span><b>活跃之星</b><small>Ray</small></div></div>
              </section>
            </aside>
          </div>
        </section>`,Vh=`<section class="page" data-page="rewards">
          <div class="rewards-dashboard">
            <main class="rewards-main">
              <section class="rewards-points-hero">
                <div class="rewards-points-copy">
                  <span>我的积分</span>
                  <h2><span data-rewards-points></span><small>XP</small></h2>
                  <p>距离下一等级还需 2,640 XP</p>
                  <div class="rewards-level-progress"><i style="width:82%"></i></div>
                </div>
                <img class="rewards-hero-character" src="/rewards-assets/hero-character.png" alt="蒲公英角色">
                <div class="rewards-earn-card">
                  <h3>积分获取方式</h3>
                  <ul>
                    <li><span class="earn-icon amber">★</span><b>完成任务</b><strong>+10 ~ 200 XP</strong></li>
                    <li><span class="earn-icon green">✓</span><b>连续打卡</b><strong>+50 XP</strong></li>
                    <li><span class="earn-icon blue">●</span><b>成长里程碑</b><strong>+300 XP</strong></li>
                    <li><span class="earn-icon violet">⚑</span><b>参与联盟活动</b><strong>+100 ~ 500 XP</strong></li>
                  </ul>
                </div>
              </section>

              <section class="reward-market">
                <div class="market-toolbar">
                  <div class="category-tabs">
                    <button class="active" type="button">全部</button>
                    <button type="button">发型装扮</button>
                    <button type="button">护发好物</button>
                    <button type="button">陪伴道具</button>
                    <button type="button">成长特权</button>
                    <button type="button">定制周边</button>
                  </div>
                  <label class="sort-select"><select aria-label="奖励排序"><option>默认排序</option><option>积分从低到高</option><option>积分从高到低</option></select><span>⌄</span></label>
                </div>
                <div class="reward-grid" id="shop"></div>
              </section>

              <section class="growth-panel">
                <div class="growth-heading"><strong>成长等级奖励</strong><span>达到相应等级即可领取专属奖励</span></div>
                <button type="button" class="round-arrow" aria-label="上一页">‹</button>
                <div class="growth-track" id="rewardsGrowth"></div>
                <button type="button" class="round-arrow" aria-label="下一页">›</button>
              </section>
            </main>

            <aside class="rewards-right-rail">
              <section class="rewards-side-panel overview-panel">
                <div class="rewards-panel-heading"><strong>积分总览</strong><button type="button">更多详情 ›</button></div>
                <div class="overview-content">
                  <div class="points-donut"><div><strong data-rewards-points>12,360</strong><span>总积分</span></div></div>
                  <ul class="legend"><li><i class="purple"></i><span>任务奖励</span><b>67%</b></li><li><i class="blue"></i><span>打卡奖励</span><b>18%</b></li><li><i class="orange"></i><span>活动奖励</span><b>10%</b></li><li><i class="gray"></i><span>其他</span><b>5%</b></li></ul>
                </div>
              </section>

              <section class="rewards-side-panel checkin-panel">
                <div class="rewards-panel-heading"><div><strong>每日签到</strong><span>连续打卡可获得额外分哦！</span></div><b>已连续 7 天</b></div>
                <div class="checkin-week" id="rewardsCheckin"><div><span class="check-circle">✓</span><small>一</small></div><div><span class="check-circle">✓</span><small>二</small></div><div><span class="check-circle">✓</span><small>三</small></div><div><span class="check-circle">✓</span><small>四</small></div><div><span class="check-circle">✓</span><small>五</small></div><div><span class="check-circle">✓</span><small>六</small></div><button type="button"><span class="gift-circle">🎁</span><small>日</small></button></div>
                <p>明日签到可得 <b>+50 XP</b></p>
              </section>

              <section class="rewards-side-panel event-panel">
                <div class="rewards-panel-heading"><strong>限时活动</strong><button type="button">更多活动 ›</button></div>
                <button type="button" class="event-banner"><img src="/rewards-assets/event-banner.png" alt="夏日养发计划"></button>
              </section>

              <section class="rewards-side-panel records-panel">
                <div class="rewards-panel-heading"><strong>兑换记录</strong><button type="button">全部记录 ›</button></div>
                <div class="record-list" id="rewardsRecords"></div>
                <button type="button" class="records-link">查看全部记录 ›</button>
              </section>
            </aside>
          </div>
        </section>`,Qh=`<section class="page" data-page="diary">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div><h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2><p>每一根头发都在努力生长，你也是！</p><button class="pill primary">😊 开心</button></div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Fn({scale:.5})}</div>
              </div>
              <div class="grid" style="grid-template-columns:300px 1fr">
                <div class="card"><h3>日历视图</h3><div class="calendar" id="calendar"><span class="">Sun</span><span class="">Mon</span><span class="">Tue</span><span class="">Wed</span><span class="">Thu</span><span class="">Fri</span><span class="">Sat</span><span class="">28</span><span class="">29</span><span class="">30</span><span class="">1</span><span class="">2</span><span class="">3</span><span class="">4</span><span class="">5</span><span class="">6</span><span class="">7</span><span class="">8</span><span class="">9</span><span class="">10</span><span class="">11</span><span class="">12</span><span class="">13</span><span class="">14</span><span class="">15</span><span class="">16</span><span class="">17</span><span class="selected">18</span><span class="">19</span><span class="">20</span><span class="">21</span><span class="">22</span><span class="">23</span><span class="">24</span><span class="">25</span><span class="">26</span><span class="">27</span><span class="">28</span><span class="">29</span><span class="">30</span><span class="">31</span></div><h3>本月心情分布</h3><div class="donut" data-label="24A 篇日记"></div></div>
                <div class="card item-list" id="diaries"><div class="item"><span><b>18</b><br>5月</span><b>😊 开心　今天掉发好像比昨天少一点！<small>虽然还是很多，但看到小小的变化，心情瞬间变晴。</small></b><span>⋯</span></div><div class="item"><span><b>17</b><br>5月</span><b>😌 平静　坚持护发第17天 ✨<small>今天做了头皮按摩，感觉头皮放松了很多。</small></b><span>⋯</span></div><div class="item"><span><b>16</b><br>5月</span><b>🎁 疲惫　压力好大的一天...<small>晚上泡个热水澡放松一下，希望明天会更好。</small></b><span>⋯</span></div><div class="item"><span><b>15</b><br>5月</span><b>😟 焦虑　为什么掉发总是反反复复...<small>希望能找到适合自己的方法。</small></b><span>⋯</span></div><div class="item"><span><b>14</b><br>5月</span><b>😊 开心　收到新发型奖励啦！<small>我的小伙伴好可爱！</small></b><span>⋯</span></div></div>
              </div>
            </div>
            <aside class="grid">
              <div class="card"><h3>心情趋势</h3><div class="chart" data-bars="44,58,62,31,28,56,69,48,46,75,64"><span class="bar" style="height:44%"></span><span class="bar" style="height:58%"></span><span class="bar" style="height:62%"></span><span class="bar" style="height:31%"></span><span class="bar" style="height:28%"></span><span class="bar" style="height:56%"></span><span class="bar" style="height:69%"></span><span class="bar" style="height:48%"></span><span class="bar" style="height:46%"></span><span class="bar" style="height:75%"></span><span class="bar" style="height:64%"></span></div></div>
              <div class="card word-cloud"><h3>关键词统计</h3><span style="left:30%;top:40%;font-size:34px">护理</span><span style="left:20%;top:58%;font-size:28px">头皮按摩</span><span style="left:62%;top:35%;font-size:18px">焦虑</span><span style="left:12%;top:34%;font-size:17px">睡眠</span><span style="left:68%;top:62%;font-size:15px">生发</span><span style="left:43%;top:72%;font-size:16px">心情</span></div>
              <div class="card"><h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>希望通过记录，找到适合自己的护发方法。</p></div>
            </aside>
          </div>
        </section>`,Kh=`<section class="page" data-page="community">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:250px">
                <div><h2 style="font-size:36px">你并不孤单，我们都在努力生长 ✨</h2><p>分享你的故事，互相鼓励，成为彼此的光。</p><div class="hero-buttons"><button class="cta primary">✎ 分享我的故事</button><button class="cta ghost"># 浏览话题</button></div></div>
                <div class="buddy-stage" style="min-height:210px"><div class="ground"></div>${Fn({scale:.48})}</div>
              </div>
              <div class="tabs"><button class="pill primary">关注</button><button class="pill">最新</button><button class="pill">热门</button><button class="pill">精华</button></div>
              <div class="item-list" id="posts"><div class="post"><div class="mini-buddy"></div><div><b>小蒲公英 <span class="badge">Lv.6</span></b><p>今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～</p><span class="badge"># 头皮护理</span></div><div class="post-media">📋</div><small>💜 128　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>爱吃草莓 <span class="badge">Lv.4</span></b><p>分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🪮</div><small>💜 96　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>薄荷味的风 <span class="badge">Lv.6</span></b><p>最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌿</div><small>💜 76　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>向日葵 <span class="badge">Lv.3</span></b><p>新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌱</div><small>💜 143　💬 36　☆ 收藏</small></div></div>
            </div>
            <aside class="grid">
              <div class="card item-list"><h3>热门话题</h3><div class="item"><span>#</span><b>连续打卡挑战</b><span>12.4k</span></div><div class="item"><span>#</span><b>头皮护理分享</b><span>8.7k</span></div><div class="item"><span>#</span><b>情绪管理小贴士</b><span>6.1k</span></div></div>
              <div class="card"><h3>社区活动</h3><div class="item"><span>📅</span><b>21 天头皮养护打卡挑战</b><button class="quest-btn">立即参加</button></div></div>
              <div class="card item-list"><h3>推荐小组</h3><div class="item"><span>💙</span><b>佛系养发小分队</b><button class="pill">加入</button></div><div class="item"><span>🏃</span><b>运动养发日记</b><button class="pill">加入</button></div><div class="item"><span>🥗</span><b>饮食养发研究所</b><button class="pill">加入</button></div></div>
            </aside>
          </div>
        </section>`,Jh=`<section class="page" data-page="me">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:300px">
                <div>
                  <h2 style="font-size:36px">Me <span class="badge">Lv.5</span></h2>
                  <p>一起变好呀！</p>
                  <div class="row"><span class="badge">12,360 XP</span><span class="badge">连续 32 天</span></div>
                </div>
                <div class="buddy-stage" style="min-height:250px"><div class="ground"></div>${Fn({scale:.58})}</div>
              </div>
              <div class="card">
                <h3 class="section-title">我的成就 <span class="badge">8 / 24 已解锁</span></h3>
                <div class="item-list"><div class="item"><span>🏆</span><b>连续打卡 7 天<small>坚持就是胜利</small></b><span class="status">已解锁</span></div><div class="item"><span>🌱</span><b>第一次扫描<small>开启护发之旅</small></b><span class="status">已解锁</span></div><div class="item"><span>💧</span><b>头皮健康改善<small>努力有了回报</small></b><span class="status">已解锁</span></div><div class="item"><span>🔒</span><b>解锁新发型<small>继续加油</small></b><span>›</span></div></div>
              </div>
            </div>
            <aside class="grid">
              <div class="card"><h3>个人统计</h3><div class="three grid"><div><span class="big-number">32</span><br>记录天数</div><div><span class="big-number">1,620</span><br>总 XP</div><div><span class="big-number">12</span><br>连续天数</div></div></div>
              <div class="card item-list"><h3>设置</h3><button class="item"><span>🔔</span><b>通知设置<small>管理推送与提醒</small></b><span>›</span></button><button class="item"><span>🎨</span><b>主题外观<small>个性化你的应用</small></b><span>›</span></button><button class="item"><span>📤</span><b>分享应用<small>邀请好友一起护发</small></b><span>›</span></button><button class="item"><span>ℹ️</span><b>关于掉了么<small>版本 1.0.0</small></b><span>›</span></button></div>
            </aside>
          </div>
        </section>`,Yh=`<div class="app">
      <aside class="sidebar">
        <div class="brand">
          <div class="mini-buddy"></div>
          <div>
            <h1>掉了么</h1>
            <span>Diaoleme</span>
          </div>
        </div>
        <nav class="nav" id="nav"><button data-go="home" class="active"><span class="icon">⌂</span><label>Home</label></button><button data-go="scan" class=""><span class="icon">▢</span><label>Scan</label></button><button data-go="buddy" class=""><span class="icon">☁</span><label>Buddy</label></button><button data-go="quests" class=""><span class="icon">✿</span><label>Quests</label></button><button data-go="journey" class=""><span class="icon">✧</span><label>Journey</label></button><button data-go="league" class=""><span class="icon">♛</span><label>League</label></button><button data-go="rewards" class=""><span class="icon">□</span><label>Rewards</label></button><button data-go="diary" class=""><span class="icon">▤</span><label>Diary</label></button><button data-go="community" class=""><span class="icon">☷</span><label>Community</label></button></nav>
        <div class="profile">
          <img alt="" src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;64&#39; height=&#39;64&#39;%3E%3Crect width=&#39;64&#39; height=&#39;64&#39; rx=&#39;32&#39; fill=&#39;%23ffe4ee&#39;/%3E%3Ccircle cx=&#39;32&#39; cy=&#39;25&#39; r=&#39;13&#39; fill=&#39;%23f0b899&#39;/%3E%3Cpath d=&#39;M14 60c2-14 12-22 18-22s16 8 18 22&#39; fill=&#39;%238b5cf6&#39;/%3E%3C/svg%3E">
          <label>Me<br><small>Lv.5</small></label>
        </div>
      </aside>

      <main class="main">
        <div class="topbar">
          <div class="page-title">
            <h2 id="pageHeading">Home</h2>
            <p id="pageSub">Every hair is a seed.</p>
          </div>
          <div class="actions">
            <button class="pill" id="guideBtn">分享我的旅程</button>
            <button class="bell" aria-label="Notifications">🔔</button>
            <button class="avatar" aria-label="Profile">🌱</button>
          </div>
        </div>

        ${Uh}

        ${Hh}

        ${Bh}

        ${qh}

        ${Wh}

        ${Xh}

        ${Vh}

        ${Qh}

        ${Kh}

        ${Jh}
      </main>
    </div>`,Gh=`
const pages = [
  ["home", "⌂", "Home", "Every hair is a seed."],
  ["scan", "▢", "Scan", " 用科学的方式，了解你的头发状况 💗"],
  ["buddy", "☁", "Buddy", " 每个人拥有自己的生命伙伴 "],
  ["quests", "✿", "Quests", " 完成护发任务，获得经验值和能量 "],
  ["journey", "✧", "Journey", " 每一步成长，都值得被记录 ✨"],
  ["league", "♛", "League", " 和伙伴们一起成长，赢取荣誉与奖励 "],
  ["rewards", "□", "Rewards", " 用成长兑换惊喜，奖励每一次认真生活 "],
  ["diary", "▤", "Diary", " 记录每一个小瞬间，见证成长的每一步 💜"],
  ["community", "☷", "Community", " 在这里，分享治愈，收获力量 "]
];

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

nav.innerHTML = pages
  .map(
    ([id, icon, label]) =>
      \`<button data-go="\${id}" class="\${id === "home" ? "active" : ""}"><span class="icon">\${icon}</span><label>\${label}</label></button>\`
  )
  .join("");

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

const skinNames = [
  " 蒲公英蓬蓬头 ",
  " 星光短发 ",
  " 彩虹飘带 ",
  "Coming Soon",
  "Coming Soon",
  "Coming Soon"
];
const skinsRoot = document.querySelector("#skins");
if (skinsRoot) {
  skinsRoot.innerHTML = skinNames
    .map(
      (name, i) =>
        \`<button class="skin \${i === 0 ? "active" : ""}"><div class="mini-buddy" style="\${i > 2 ? "opacity:.45" : ""}"></div><b>\${name}</b><small>Lv.\${[5, 8, 10, 12, 14, 18][i]}</small></button>\`
    )
    .join("");
  skinsRoot.addEventListener("click", (event) => {
    const skin = event.target.closest(".skin");
    if (!skin) return;
    document.querySelectorAll(".skin").forEach((item) =>
      item.classList.remove("active")
    );
    skin.classList.add("active");
  });
}

const questListRoot = document.querySelector("#questList");
if (questListRoot) {
  questListRoot.innerHTML =
    quests
      .map(
        (q, i) =>
          \`<div class="item"><span style="font-size:26px">\${q[0]}</span><b>\${q[1]}<small>\${q[2]}</small></b><span>\${q[3]}</span><button class="quest-btn \${q[4] === "已完成" ? "done" : ""}">\${q[4] === "已完成" ? "✓ 已完成" : "去完成"}</button></div>\`
      )
      .join("") +
    \`<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>完成所有每日任务可获得额外奖励！</b><span>+100 XP</span><button class="quest-btn done">未完成</button></div>\`;

  questListRoot.addEventListener("click", (event) => {
    const btn = event.target.closest(".quest-btn");
    if (!btn || btn.classList.contains("done")) return;
    btn.classList.add("done");
    btn.textContent = "✓ 已完成";
  });
}

const weekRewardsRoot = document.querySelector("#weekRewards");
if (weekRewardsRoot) {
  weekRewardsRoot.innerHTML = ["一", "二", "三", "四", "五", "六", "日"]
    .map(
      (d, i) =>
        \`<span class="badge">\${i < 2 ? "✓" : d}<br><small>+\${i < 5 ? 10 + i * 5 : 25} XP</small></span>\`
    )
    .join("");
}
const streakRoot = document.querySelector("#streak");
if (streakRoot) {
  streakRoot.innerHTML = [" 一 ", " 二 ", " 三 ", " 四 ", " 五 ", " 六 ", " 日 "]
    .map(
      (d, i) =>
        \`<span class="badge">\${i < 6 ? "✓" : "🎁"}<br><small>\${d}</small></span>\`
    )
    .join("");
}
const checkinRoot = document.querySelector("#checkin");
if (checkinRoot) {
  checkinRoot.innerHTML = [" 一 ", " 二 ", " 三 ", " 四 ", " 五 ", " 六 ", " 日 "]
    .map(
      (d, i) =>
        \`<span class="badge">\${i < 6 ? "✓" : "🎁"}<br><small>\${d}</small></span>\`
    )
    .join("");
}

const ms = [
  [" 开始记录 ", "5/1"],
  [" 坚持 3 天 ", "5/4"],
  [" 完成第一个任务 ", "5/7"],
  [" 连续 7 天 ", "5/12"],
  [" 头皮健康改善 ", "5/18"],
  [" 解锁新发型 ", "5/24"]
];
document.querySelector("#milestones").innerHTML = ms
  .map(
    (m, i) =>
      \`<div class="milestone"><div class="dot">\${["⚑", "🌱", "⭐", "7", "💧", "✂"][i]}</div>\${m[0]}<br><small>\${m[1]}</small></div>\`
  )
  .join("");
document.querySelector("#timeline").innerHTML = [
  ["5/18", " 头皮健康评分提升 ", " 你的头皮健康评分从 72 提升到 82，继续保持哦！", "+10 健康分 "],
  ["5/15", " 早睡打卡 ", " 你在 22:30 前入睡，睡眠质量很棒！", "+60 XP"],
  ["5/12", " 连续打卡 7 天 ", " 太棒了！你已经连续 7 天坚持记录和护理！", "+200 XP"],
  ["5/10", " 健康饮食 ", " 你记录了健康餐饮，营养均衡。", "+40 XP"],
  ["5/8", " 运动 20 分钟 ", " 运动可以促进血液循环，头发会更健康哦！", "+50 XP"]
]
  .map(
    (t) =>
      \`<div class="item"><span>\${t[0]}</span><b>\${t[1]}<small>\${t[2]}</small></b><span class="status">\${t[3]}</span></div>\`
  )
  .join("");

const leadersRoot = document.querySelector("#leaders");
if (leadersRoot) {
  leadersRoot.innerHTML = leaders
    .map(
      (l) =>
        \`<div class="leader \${l[0] === "12" ? "you" : ""}"><span class="badge">\${l[0]}</span><b>\${l[1]}<small>\${l[2]}</small></b><span>\${l[3]}</span><span>\${l[4]}</span></div>\`
    )
    .join("");
}

document.querySelector("#calendar").innerHTML = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  28,
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
]
  .map((d) => \`<span class="\${d === 18 ? "selected" : ""}">\${d}</span>\`)
  .join("");
document.querySelector("#diaries").innerHTML = [
  ["18", "😊 开心 ", " 今天掉发好像比昨天少一点！", " 虽然还是很多，但看到小小的变化，心情瞬间变晴。"],
  ["17", "😌 平静 ", " 坚持护发第 17 天 ✨", " 今天做了头皮按摩，感觉头皮放松了很多。"],
  ["16", "🎁 疲惫 ", " 压力好大的一天...", " 晚上泡个热水澡放松一下，希望明天会更好。"],
  ["15", "😟 焦虑 ", " 为什么掉发总是反反复复...", " 希望能找到适合自己的方法。"],
  ["14", "😊 开心 ", " 收到新发型奖励啦！", " 我的小伙伴好可爱！"]
]
  .map(
    (d) =>
      \`<div class="item"><span><b>\${d[0]}</b><br>5月</span><b>\${d[1]}　\${d[2]}<small>\${d[3]}</small></b><span>⋯</span></div>\`
  )
  .join("");

document.querySelector("#posts").innerHTML = [
  [" 小蒲公英 ", "Lv.6", " 今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～", "📋", "128"],
  [" 爱吃草莓 ", "Lv.4", " 分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。", "🪮", "96"],
  [" 薄荷味的风 ", "Lv.6", " 最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。", "🌿", "76"],
  [" 向日葵 ", "Lv.3", " 新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！", "🌱", "143"]
]
  .map(
    (p) =>
      \`<div class="post"><div class="mini-buddy"></div><div><b>\${p[0]} <span class="badge">\${p[1]}</span></b><p>\${p[2]}</p><span class="badge"># 头皮护理</span></div><div class="post-media">\${p[3]}</div><small>💜 \${p[4]}　💬 36　☆ 收藏</small></div>\`
  )
  .join("");
`,Zh=`
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

  .nav button.active {
    color: var(--purple);
    background: rgba(139, 92, 246, 0.13);
    box-shadow: inset 3px 0 0 var(--purple);
  }

  .nav .icon {
    font-size: 21px;
    line-height: 1;
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
    align-items: center;
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

    .nav button {
      min-width: 70px;
      min-height: 58px;
      padding: 8px;
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
`;function aa(r,s){r.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===s)),r.querySelectorAll("[data-go]").forEach(p=>p.classList.toggle("active",p.dataset.go===s));const i=r.querySelector("#pageHeading"),u=r.querySelector("#pageSub"),d={scan:["Scan","用科学的方式，了解你的头发状况 💗"],diary:["Diary","真实分析记录会在这里沉淀"]};i&&d[s]&&(i.textContent=d[s][0]),u&&d[s]&&(u.textContent=d[s][1])}function fe(r,s){r&&(r.innerHTML=s)}function N(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function gt(r,s){const i=r.querySelector("[data-toast]");i==null||i.remove();const u=document.createElement("div");u.dataset.toast="true",u.className="prototype-toast",u.textContent=s,r.appendChild(u),window.setTimeout(()=>u.remove(),1800)}const sp=()=>"diaoleme-prototype-buddy-care",ip=()=>"diaoleme-prototype-selected-hair-style";function e0(r,s){const i=we.getState(),u=dp(),d=i.reportHistory[0],p=Math.max(62,Math.min(98,Math.round((i.dropScore??82)+Math.min(i.reportHistory.length,6)))),f=Math.max(56,Math.min(96,Math.round((u.energy+u.love)/2))),m=f>=78?"Happy":f>=64?"Calm":"Need Care";up(i.unlockedHairStyles),In.filter(w=>i.unlockedHairStyles.includes(w.id)).length;const x=s.getQuestCount();fe(r.querySelector('[data-page="buddy"] .metric'),`
    <div class="metric-row"><span style="font-size:32px">💗</span><b>生命值</b><div class="meter"><div class="fill" style="--w:${p}%;--c:#ff77a8"></div></div><b>${p}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">⚡</span><b>能量值</b><div class="meter"><div class="fill" style="--w:${u.energy}%;--c:#ffad2f"></div></div><b>${u.energy}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">😊</span><b>心情值</b><div class="meter"><div class="fill" style="--w:${f}%;--c:#8b5cf6"></div></div><b>${m}</b></div>
  `),lp(r),fe(r.querySelector('[data-page="buddy"] .card.item-list'),`
    <button class="item buddy-action dress" data-buddy-action="dress"><span>👗</span><b>Dress Up<small>装扮你的伙伴，选择或解锁造型</small></b><span>›</span></button>
    <button class="item buddy-action feed" data-buddy-action="feed"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
    <button class="item buddy-action diary" data-buddy-action="diary"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
    <button class="item buddy-action growth" data-buddy-action="growth"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
  `),fe(r.querySelector('[data-page="buddy"] .grid:nth-child(2) .card:first-child'),`
    <h3>今日头发报告</h3>
    <div><span class="big-number">${i.dropScore??"--"}</span> ${i.dropScore==null?"":"分"}</div>
    <p>${N((d==null?void 0:d.summary)||"还没有今日报告，完成一次 Scan 后会同步到 Buddy。")}</p>
    <div class="chart">${s.buildTrendBars(i.reportHistory)}</div>
  `);const S=r.querySelector('[data-page="buddy"]');S&&!S.querySelector(".buddy-extra-grid")&&S.insertAdjacentHTML("beforeend",'<div class="buddy-extra-grid"><div class="card" data-buddy-summary></div><div class="card" data-buddy-cheers></div></div>'),fe(r.querySelector("[data-buddy-summary]"),`
    <h3>💗 本周成长小结</h3>
    <p>你的护理表现超过了 ${Math.min(96,60+x.done*4+i.checkinDays.length)}% 的用户，继续保持哦！</p>
    <div class="buddy-summary-stats">
      <span><b>${i.checkinDays.length||0} 天</b><small>护理天数</small></span>
      <span><b>${x.done}/${x.total}</b><small>任务完成</small></span>
      <span><b>${s.avgScore(i.reportHistory)||"--"}</b><small>平均状态分</small></span>
      <span><b>${u.energy>=78?"良好":"待补充"}</b><small>充足睡眠</small></span>
    </div>
  `),fe(r.querySelector("[data-buddy-cheers]"),`
    <h3>💗 来自大家的鼓励</h3>
    <div class="buddy-cheers">
      ${["Luna|你的新发型超可爱！我们一起加油呀 🌞","Mia|头发也在慢慢变强大呢，你一定可以的！💪","Ray|看到你的变化啦，好棒！！✨"].map(w=>{const[C,$]=w.split("|");return`<div class="buddy-cheer"><span class="avatar">${C[0]}</span><b>${C}</b><p>${N($)}</p><small>${C==="Ray"?"1 天前":C==="Mia"?"5 小时前":"2 小时前"}</small></div>`}).join("")}
    </div>
  `)}function lp(r){const s=we.getState(),i=up(s.unlockedHairStyles),u=In.filter(d=>s.unlockedHairStyles.includes(d.id)).length;fe(r.querySelector('[data-page="buddy"] .section-title'),`解锁发型 <span class="badge">${u} / ${In.length} 已解锁</span>`),fe(r.querySelector("#skins"),In.map(d=>{const p=s.unlockedHairStyles.includes(d.id),f=d.id===i,m=p?f?"使用中":"点击换上":`${d.cost} XP 解锁`;return`<button class="skin ${f?"active":""}" data-unlock-id="${N(d.id)}"><div class="mini-buddy" style="${p?"":"opacity:.45"}"></div><b>${N(d.name)}</b><small>${N(m)}</small>${p?"":'<span class="buddy-lock">🔒</span>'}</button>`}).join(""))}function t0(r,s,i){var u;if(r==="dress"){gt(s,"已打开造型选择，点击卡片可使用或解锁"),(u=s.querySelector("#skins"))==null||u.scrollIntoView({behavior:"smooth",block:"center"});return}if(r==="feed"){const d=dp();n0({energy:Math.min(100,d.energy+12),love:Math.min(100,d.love+6),feedCount:d.feedCount+1,lastFed:i()}),we.getState().addPoints(3),gt(s,"小发球吃饱啦：能量 +12，爱心 +6，XP +3");return}if(r==="diary"){aa(s,"diary"),gt(s,"已打开 Buddy Diary");return}r==="growth"&&(aa(s,"journey"),gt(s,"已打开成长记录"))}function op(r){localStorage.setItem(ip(),r)}function up(r){var u;const s=localStorage.getItem(ip());if(s&&r.includes(s))return s;const i=r[r.length-1]||((u=In[0])==null?void 0:u.id)||"none";return op(i),i}function dp(){try{return{energy:68,love:86,feedCount:0,lastFed:null,...JSON.parse(localStorage.getItem(sp())||"{}")}}catch{return{energy:68,love:86,feedCount:0,lastFed:null}}}function n0(r){localStorage.setItem(sp(),JSON.stringify(r))}function Zl(r){const[s,i,u]=r.split("-");return`${i}/${u}`}function r0(r,s=!1){return r.length?r.map(i=>{const u=N(i.id);return`<div class="item"${s?"":` data-view-report="${u}" role="button" tabindex="0"`}><span>${s?i.date.slice(5):"〰"}</span><b>${N(i.title)}<small>${N(i.summary)}</small></b><button class="status" data-view-report="${u}">${i.score} 分</button></div>`}).join(""):'<div class="item"><span>📷</span><b>暂无记录<small>上传图片后会出现在这里。</small></b><span class="status">--</span></div>'}function a0(r){return r.reduce((s,i)=>(s[i.date]=s[i.date]||[],s[i.date].push(i),s),{})}function s0(r,s){const i=Object.keys(s).sort().reverse();if(!r.length)return[{icon:"📷",title:"等待首次扫描",note:"点击去 Scan 上传",date:""},{icon:"🌱",title:"报告会自动保存",note:"生成后出现在这里",date:""},{icon:"✨",title:"趋势稍后生成",note:"多次记录后更清晰",date:""}];const u=r.reduce((d,p)=>p.score>d.score?p:d,r[0]);return[{icon:"⚑",title:"开始记录",note:Zl(i[i.length-1]||r[r.length-1].date),date:i[i.length-1]||r[r.length-1].date},{icon:"📄",title:`${r.length} 份报告`,note:"Scan 自动沉淀",date:r[0].date},{icon:"⭐",title:"最高状态分",note:`${u.score} 分`,date:u.date},{icon:"🗓",title:`${i.length} 个记录日`,note:"持续观察中",date:i[0]||r[0].date}]}function i0(r,s){if(!r.length)return'<div class="item"><span>🌱</span><b>还没有高光<small>完成一次 Scan 后自动生成。</small></b><button class="pill" data-go="scan">去扫描</button></div>';const i=r[0],u=r.reduce((d,p)=>p.score>d.score?p:d,i);return[`<div class="item"><span>📄</span><b>最新报告已保存<small>${N(i.title)}</small></b><button class="pill" data-view-report="${N(i.id)}">查看</button></div>`,`<div class="item"><span>⭐</span><b>本月最高状态分<small>${u.score} 分，仅作趣味记录。</small></b><button class="pill" data-view-report="${N(u.id)}">打开</button></div>`,`<div class="item"><span>🗓</span><b>${Object.keys(s).length} 个记录日<small>每次上传都会沉淀到 Journey。</small></b><button class="pill" data-action="open-journey">回看</button></div>`].join("")}function cp(r){const s=r.slice(0,7).reverse().map(u=>Math.max(18,Math.min(96,u.score))),i=[28,36,44,52,60];return(s.length?s:i).map(u=>`<span class="bar" style="height:${u}%"></span>`).join("")}function pp(r){var C;const s=we.getState().reportHistory,i=3,u=Math.max(1,Math.ceil(s.length/i)),d=Math.min(Math.max(Number(r.dataset.scanRecordPage||0),0),u-1);r.dataset.scanRecordPage=String(d);const p=s.slice(d*i,d*i+i),f=s.length>i?`<div class="scan-record-pager"><button class="pill" data-scan-record-page="${Math.max(0,d-1)}" ${d===0?"disabled":""}>上一页</button><small>${d+1} / ${u}</small><button class="pill" data-scan-record-page="${Math.min(u-1,d+1)}" ${d>=u-1?"disabled":""}>下一页</button></div>`:"",m=s.slice(0,4),x=((C=s[0])==null?void 0:C.source_label)||"等待分析",S=N(x),w=s.length?Math.round(s.reduce(($,I)=>$+I.score,0)/s.length):null;fe(r.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),`<h3>本周扫描数据</h3><div class="three grid scan-stat-grid"><div class="scan-stat-item"><span class="big-number">${s.length}</span><small>扫描次数</small></div><div class="scan-stat-item"><span class="big-number">${w||"--"}</span><small>平均状态分</small></div><div class="scan-stat-item scan-source-stat"><span class="badge scan-source-value" title="${S}" data-full-source="${S}">${S}</span><small>最新来源</small></div></div>`),fe(r.querySelector('[data-page="scan"] .grid .card.item-list'),`<h3>最近扫描记录</h3><div class="scan-record-list">${r0(p)}</div>${f}`),l0(r,s),fe(r.querySelector("#diaries"),m.length?m.map($=>`<div class="item"><span><b>${Zl($.date)}</b><br>报告</span><b>${N($.title)}<small>${N($.summary)}</small></b><button class="pill" data-view-report="${N($.id)}">查看</button></div>`).join(""):'<div class="item"><span>📷</span><b>还没有日记<small>上传图片后会自动保存分析记录。</small></b><span>⋯</span></div>')}function l0(r,s){const i=a0(s),u=s.slice(0,4),d=s.length?Math.round(s.reduce((f,m)=>f+m.score,0)/s.length):null,p=we.getState().checkinDays.length;fe(r.querySelector("#milestones"),s0(s,i).map(f=>`
    <button class="milestone" ${f.date?`data-view-day="${N(f.date)}"`:'data-go="scan"'}>
      <div class="dot">${f.icon}</div>${N(f.title)}<br><small>${N(f.note)}</small>
    </button>
  `).join("")),fe(r.querySelector("#timeline"),u.length?u.map((f,m)=>`
    <div class="item journey-record">
      <span>${N(Zl(f.date))}</span>
      <b>${N(f.title)}<small>${N(f.summary)}</small></b>
      <span class="status">${f.score} 分</span>
      <button class="pill primary" data-view-report="${N(f.id)}">查看报告</button>
      <button class="pill" data-share-report="${N(f.id)}">分享</button>
      ${m===0?'<span class="badge">最新</span>':""}
    </div>
  `).join(""):`
    <div class="item journey-empty">
      <span>📷</span>
      <b>还没有旅程记录<small>完成一次 Scan 上传后，你的趣味报告和历史对比会自动出现在这里。</small></b>
      <button class="pill primary" data-go="scan">去上传第一张</button>
    </div>
  `),fe(r.querySelector('[data-page="journey"] aside .card:nth-child(1)'),`
    <h3>旅程总览</h3>
    <div class="three grid">
      <div><span class="big-number">${s.length}</span><br>历史报告</div>
      <div><span class="big-number">${d||"--"}</span><br>平均状态分</div>
      <div><span class="big-number">${p}</span><br>打卡天数</div>
    </div>
    <button class="pill primary" data-go="scan">新增扫描</button>
  `),fe(r.querySelector('[data-page="journey"] aside .card:nth-child(2)'),`
    <h3>状态趋势</h3>
    <div class="chart">${cp(s)}</div>
    <p>${s.length?"根据最近扫描报告生成，只做轻松记录参考。":"完成一次 Scan 后，这里会显示报告趋势。"}</p>
  `),fe(r.querySelector('[data-page="journey"] aside .card:nth-child(3)'),`
    <h3>本月高光时刻</h3>
    <div class="item-list">
      ${i0(s,i)}
    </div>
    <button class="pill" data-action="journey-share">分享我的旅程</button>
  `)}const o0=Math.round(ep/1024/1024);function u0(r,s){const i=r.querySelector('[data-page="scan"]'),u=r.querySelector("#scanBtn"),d=r.querySelector("#uploadBtn"),p=r.querySelector("#scanCompleteBtn"),f=r.querySelector("#scanPercent"),m=i==null?void 0:i.querySelector('.card[style*="text-align:center"]'),x=document.createElement("input"),S=document.createElement("input");let w=null,C=null,$=null;const I=(re,ae=!1)=>{re.type="file",re.accept="image/*",ae&&re.setAttribute("capture","environment"),re.style.display="none",document.body.appendChild(re)};I(x,!0),I(S);const q=(re,ae="idle")=>{const G=m==null?void 0:m.querySelector("[data-analysis-status]"),Z=G||document.createElement("p");Z.dataset.analysisStatus="true",Z.textContent=re,Z.style.color=ae==="error"?"#ff7a2f":ae==="success"?"#65c982":"#65709e",Z.style.fontWeight="800",G||m==null||m.appendChild(Z)},H=re=>{C&&URL.revokeObjectURL(C),C=URL.createObjectURL(re);const ae=r.querySelector(".scan-orbit"),G=ae==null?void 0:ae.querySelector("[data-upload-preview]"),Z=G||document.createElement("img");Z.dataset.uploadPreview="true",Z.src=C,Z.alt="上传预览",Object.assign(Z.style,{position:"absolute",inset:"22px",width:"calc(100% - 44px)",height:"calc(100% - 44px)",objectFit:"cover",borderRadius:"50%",boxShadow:"0 18px 45px rgba(99, 75, 168, 0.22)",zIndex:"3"}),G||ae==null||ae.appendChild(Z),f&&(f.textContent="已选",f.style.zIndex="4"),p&&(p.style.display=""),q(`已选择：${re.name}，点击“完成”确认并开始 AI 分析。`)},R=()=>{var re;$==null||$.getTracks().forEach(ae=>ae.stop()),$=null,(re=r.querySelector("[data-camera-modal]"))==null||re.remove()},P=re=>{const ae=new File([re],`diaoleme-camera-${Date.now()}.jpg`,{type:"image/jpeg"});w=ae,H(ae),q("已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。"),R()},U=async()=>{var G;const re={video:{facingMode:{ideal:"environment"}},audio:!1};if((G=navigator.mediaDevices)!=null&&G.getUserMedia)return navigator.mediaDevices.getUserMedia(re);const ae=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return ae?new Promise((Z,ye)=>ae.call(navigator,re,Z,ye)):null},W=async()=>{var re,ae;try{if($=await U(),!$){q("此页面无相机权限，请检查吧。","error");return}const G=document.createElement("div");G.dataset.cameraModal="true",G.className="camera-capture-modal",G.innerHTML='<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>',r.appendChild(G);const Z=G.querySelector("video");Z&&(Z.srcObject=$),(re=G.querySelector("[data-camera-cancel]"))==null||re.addEventListener("click",R),(ae=G.querySelector("[data-camera-capture]"))==null||ae.addEventListener("click",()=>{var Re;if(!Z||Z.videoWidth===0)return;const ye=document.createElement("canvas");ye.width=Z.videoWidth,ye.height=Z.videoHeight,(Re=ye.getContext("2d"))==null||Re.drawImage(Z,0,0),ye.toBlob(Ee=>{Ee&&P(Ee)},"image/jpeg",.92)}),q("相机已打开，请拍照后自动上传。")}catch(G){console.error("[prototype] camera failed:",G),R(),q("此页面无相机权限，请检查吧。","error")}},F=()=>W(),se=()=>S.click(),X=re=>{var Z;const ae=re.currentTarget,G=(Z=ae.files)==null?void 0:Z[0];if(ae.value="",!!G)try{tp(G),w=G,H(G)}catch(ye){w=null;const Re={not_image:"这个文件不是图片，请选择 JPG、PNG 等图片文件。",empty_file:"图片文件为空，请重新选择。",file_too_large:`图片有点大啦，请选择 ${o0}MB 以内的照片再试。`};q(Re[ye==null?void 0:ye.message]||"图片暂时读不出来，请换一张再试。","error")}},de=async()=>{if(!w){se(),q("请先选择或拍摄一张图片。");return}u&&(u.disabled=!0),d&&(d.disabled=!0),p&&(p.disabled=!0),q("分析中，正在调用后端 AI 代理...");let re=10;f&&(f.textContent="10%");const ae=window.setInterval(()=>{re=Math.min(re+8,96),f&&(f.textContent=`${re}%`)},140);try{const G=await Ch(w);d0(G),window.clearInterval(ae),Ul(r,G),s.renderStatefulSections(),q(G.fallback_code?"已生成 fallback 结果，可继续演示完整流程。":"AI 分析完成，结果已写入报告和历史记录。","success")}catch(G){console.error("[prototype] analyze failed:",G),window.clearInterval(ae),f&&(f.textContent="失败"),q("分析接口暂时不可用，请稍后重试。","error")}finally{u&&(u.disabled=!1),d&&(d.disabled=!1),p&&(p.disabled=!1)}};return x.addEventListener("change",X),S.addEventListener("change",X),u==null||u.addEventListener("click",F),d==null||d.addEventListener("click",se),p==null||p.addEventListener("click",de),()=>{x.removeEventListener("change",X),S.removeEventListener("change",X),u==null||u.removeEventListener("click",F),d==null||d.removeEventListener("click",se),p==null||p.removeEventListener("click",de),R(),x.remove(),S.remove(),C&&URL.revokeObjectURL(C)}}function d0(r){const s=we.getState();s.setAnalysis(r),s.addReport({id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),date:c0(),score:r.score,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags,daily_task:r.daily_task,disclaimer:r.disclaimer,source:r.source,source_label:r.source_label,fallback_code:r.fallback_code,record_status:r.record_status,record_id:r.record_id,count:r.count,thickness:r.thickness,suggestions:r.suggestions})}function Sc(){const r=we.getState();return{score:r.dropScore??66,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags.length?r.tags:["等待记录"],daily_task:r.dailyTask,disclaimer:r.disclaimer,source:r.source,source_label:r.sourceLabel,fallback_code:r.fallbackCode,record_status:r.recordStatus,record_id:r.recordId,count:r.count,thickness:r.thickness,suggestions:r.suggestions}}function Ec(r){var i;const s=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');(i=s==null?void 0:s.querySelector("[data-analysis-result]"))==null||i.remove(),s==null||s.classList.remove("has-analysis-result")}function Ul(r,s){const i=r.querySelector("#scanPercent"),u=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');if(i&&(i.textContent=`${s.score}%`),!u||we.getState().dropScore==null)return;const d=u.querySelector("[data-analysis-result]");d==null||d.remove(),u.classList.add("has-analysis-result");const p=s.source_label||"未知来源",f=s.fallback_code?`fallback: ${s.fallback_code}`:s.record_id?`记录编号: ${s.record_id}`:"已生成新的扫描记录",m=u.querySelector(".scan-orbit");m&&(m.style.filter="saturate(1.08)");const x=`
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-head">
        <div>
          <span class="badge analysis-source-badge">${N(p)}</span>
          <h3>${N(s.title)}</h3>
        </div>
        <div class="scan-score-chip">${N(String(s.score))}</div>
      </div>
      <p class="analysis-source-detail">${N(f)}</p>
      <p>${N(s.summary)}</p>
      <div class="analysis-grid three grid">
        <div class="analysis-metric"><span class="big-number">${N(s.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${N(s.thickness)}</span><small>发质观感</small></div>
        <div class="analysis-metric"><span class="big-number">${N(s.score)}</span><small>趣味分数</small></div>
      </div>
      <p><b>温柔吐槽：</b>${N(s.roast)}</p>
      <p><b>今日任务：</b>${N(s.daily_task)}</p>
      <div class="analysis-tags">${s.tags.map(S=>`<span class="badge">${N(S)}</span>`).join("")}</div>
      <small>${N(s.disclaimer)}</small>
    </div>
  `;u.insertAdjacentHTML("beforeend",x)}function c0(){return new Date().toISOString().slice(0,10)}const Dn=["daily","weekly","growth","special"],Hl={daily:"每日任务",weekly:"每周任务",growth:"成长任务",special:"特别任务"},p0={weekly:[{id:"weekly-scan-3",category:"weekly",icon:"📷",title:"完成 3 次记录",description:"给小发球攒一组本周观察素材。",target:"0/3",reward:35,actionLabel:"记录本周"},{id:"weekly-sleep-4",category:"weekly",icon:"🌙",title:"4 天温柔早睡",description:"不卷到深夜，给头皮也放个小假。",target:"0/4",reward:40,actionLabel:"打卡早睡"},{id:"weekly-share",category:"weekly",icon:"💬",title:"分享一次发球周报",description:"把本周小进步发给朋友，轻松晒一下。",target:"0/1",reward:25,actionLabel:"去分享"},{id:"weekly-massage",category:"weekly",icon:"🪮",title:"完成 3 次头皮放松",description:"睡前 5 分钟，给自己按下暂停键。",target:"0/3",reward:30,actionLabel:"开始放松"}],growth:[{id:"growth-first-report",category:"growth",icon:"🌱",title:"生成第一份种子报告",description:"上传照片后获得你的第一枚趣味称号。",target:"0/1",reward:45,actionLabel:"去扫描"},{id:"growth-7-day",category:"growth",icon:"🔥",title:"连续记录 7 天",description:"把小习惯养成小成就，不求完美只求坚持。",target:"0/7",reward:80,actionLabel:"点亮进度"},{id:"growth-unlock-style",category:"growth",icon:"🎀",title:"解锁一个新造型",description:"给小发球换套新皮肤，奖励认真生活的你。",target:"0/1",reward:60,actionLabel:"去解锁"},{id:"growth-history",category:"growth",icon:"📒",title:"查看一次历史趋势",description:"回头看看，最近的自己已经很棒啦。",target:"0/1",reward:25,actionLabel:"看趋势"}],special:[{id:"special-spring",category:"special",icon:"🌸",title:"春风吹发季签到",description:"参与限时季节活动，领取春日能量。",target:"0/1",reward:50,actionLabel:"领取能量"},{id:"special-mood",category:"special",icon:"😊",title:"写下今日心情弹幕",description:"把压力吐槽给小发球听，轻轻放过自己。",target:"0/1",reward:30,actionLabel:"写一句"},{id:"special-buddy",category:"special",icon:"☁️",title:"和 Buddy 互动一次",description:"摸摸小发球，让陪伴感上线。",target:"0/1",reward:35,actionLabel:"去互动"},{id:"special-community",category:"special",icon:"✨",title:"逛逛社区治愈帖",description:"看看大家的小妙招，找到一点轻松感。",target:"0/1",reward:25,actionLabel:"去看看"}]};let Bl=null;function f0(r){Bl=r}function g0(r,s){Qt();const i=we.getState(),u=pr(s),d=sa(s),p=u.filter(w=>d.has(w.id)).length,f=Dn.flatMap(pr),m=Dn.reduce((w,C)=>w+sa(C).size,0),x=f.length?Math.round(m/f.length*100):0,S=pr("daily").every(w=>sa("daily").has(w.id));fe(r.querySelector('[data-page="quests"] .tabs'),Dn.map(w=>`<button class="pill ${w===s?"primary":""}" data-quest-category="${w}">${Hl[w]}</button>`).join("")),fe(r.querySelector("#questList"),u.map(w=>y0(w,d.has(w.id))).join("")+b0(s,p,u.length,S)),fe(r.querySelector("#weekRewards"),["一","二","三","四","五","六","日"].map((w,C)=>`<span class="badge">${C<i.checkinDays.length?"✓":w}<br><small>+${C<5?10+C*5:25} XP</small></span>`).join("")),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(1)'),`<h3>我的任务进度</h3><div class="big-number">${x}%</div><div class="meter"><div class="fill" style="--w:${x}%"></div></div><p>完成 ${m}/${f.length} 个任务</p><small>${Hl[s]}：${p}/${u.length}</small>`),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(3)'),`<h3>任务小贴士</h3><p>${x0(s)}</p><div class="mini-buddy"></div>`),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(4)'),`<h3>本周任务总览</h3><div class="donut" data-label="${m}/${f.length}\\A 已完成"></div><p>${S?"每日建议已全部点亮，额外奖励已入账。":"今天再点亮一个小任务，就很不错啦。"}</p>`)}function m0(r,s,i){const u=pr(r).find(p=>p.id===s);if(!u)return;const d=sa(r);if(d.has(s)){gt(i,"这个任务已经领取过啦");return}if(d.add(s),w0(r,d),we.getState().addPoints(u.reward),gt(i,`+${u.reward} XP · ${u.title}`),r==="daily"){const p=pr("daily");p.length>0&&p.every(f=>d.has(f.id))&&localStorage.getItem(Qt().taskBonusKey())!=="1"&&(localStorage.setItem(Qt().taskBonusKey(),"1"),we.getState().addPoints(10),gt(i,"每日建议全完成，额外 +10 XP"))}}function h0(){const r=Qt();localStorage.removeItem(r.taskKey()),localStorage.removeItem(r.taskBonusKey()),Dn.forEach(s=>localStorage.removeItem(r.questProgressKey(s)))}function v0(){const r=Dn.flatMap(pr).length;return{done:Dn.reduce((i,u)=>i+sa(u).size,0),total:r}}function pr(r){const s=Qt();return r!=="daily"?p0[r]:s.getSuggestions().map((i,u)=>({id:`daily-${u}`,category:"daily",icon:["💧","🌙","🥗","🖐","🚶"][u]||"✨",title:i,description:u===0?"来自 AI 的轻量建议":"完成后给小发球增加一点能量",target:"0/1",reward:u===0?5:2,actionLabel:"去完成"}))}function sa(r){try{const s=new Set(JSON.parse(localStorage.getItem(Qt().questProgressKey(r))||"[]"));return r==="daily"&&s.size===0&&k0().forEach(i=>s.add(`daily-${i}`)),s}catch{return new Set}}function _c(r){return Dn.includes(r)}function y0(r,s){return`<div class="item"><span style="font-size:26px">${r.icon}</span><b>${N(r.title)}<small>${N(r.description)}</small></b><span>${s?"1/1":N(r.target)}</span><button data-quest-category="${r.category}" data-quest-id="${r.id}" class="quest-btn ${s?"done":""}">${s?"✓ 已领取":N(r.actionLabel)}</button></div>`}function b0(r,s,i,u){const d=r==="daily"?10:Math.max(20,i*10),p=s>=i;return`<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>${r==="daily"?u?"今日建议全部完成！":"完成所有每日任务可获得额外奖励！":`${Hl[r]}完成度 ${s}/${i}`}<small>${p?"小发球已经收到这份能量。":"慢慢来，完成一个也算数。"}</small></b><span>+${d} XP</span><button class="quest-btn done">${p?"已点亮":"未完成"}</button></div>`}function x0(r){return{daily:"今天不用做到满分，挑一个最容易的小任务开始就很好。",weekly:"周任务适合拆成几天完成，记录、休息和放松都算成长。",growth:"成长任务会长期保留，像养小发球一样一点点解锁。",special:"特别任务偏活动和社交，主打轻松参与，不制造压力。"}[r]}function w0(r,s){if(localStorage.setItem(Qt().questProgressKey(r),JSON.stringify([...s])),r==="daily"){const i=[...s].map(u=>Number(u.replace("daily-",""))).filter(u=>Number.isFinite(u));localStorage.setItem(Qt().taskKey(),JSON.stringify(i))}}function k0(){try{return new Set(JSON.parse(localStorage.getItem(Qt().taskKey())||"[]"))}catch{return new Set}}function Qt(){if(!Bl)throw new Error("quest controller is not configured");return Bl}const He="/rewards-assets/",S0=[{name:"樱花发箍",subtitle:"Lv.3 解锁",points:2e3,image:`${He}reward-flower.png`,locked:!0,unlockId:"sakura"},{name:"星光泡泡发型",subtitle:"Lv.5 解锁",points:3500,image:`${He}reward-starlight.png`,locked:!0,unlockId:"star"},{name:"生发精华液 30ml",subtitle:"实物好物",points:4800,image:`${He}reward-serum.png`},{name:"治愈蘑菇帽",subtitle:"Lv.6 解锁",points:2800,image:`${He}reward-healing.png`,locked:!0},{name:"护发礼盒套装",subtitle:"实物好物",points:6500,image:`${He}reward-gift.png`},{name:"蒲公英小夜灯",subtitle:"限量周边",points:3200,image:`${He}reward-lamp.png`,locked:!0},{name:"嫩芽发型",subtitle:"Lv.4 解锁",points:2500,image:`${He}reward-sprout.png`,locked:!0,unlockId:"sprout"},{name:"头皮按摩梳",subtitle:"实物好物",points:4200,image:`${He}reward-brush.png`},{name:"银河披风",subtitle:"Lv.7 解锁",points:5e3,image:`${He}reward-cape.png`,locked:!0},{name:"7天特权卡",subtitle:"成长特权",points:8e3,image:`${He}reward-vip.png`}],E0=[{level:"Lv.1",status:"已领取",image:`${He}reward-sprout.png`,active:!0},{level:"Lv.2",status:"已领取",image:`${He}reward-flower.png`,active:!0},{level:"Lv.3",status:"可领取",image:`${He}reward-gift.png`,active:!0},{level:"Lv.4",status:"差 420 XP",image:`${He}reward-healing.png`,active:!1},{level:"Lv.5",status:"未解锁",image:`${He}reward-starlight.png`,active:!1}],_0=[{name:"樱花发箍",date:"2026-07-15",points:"-2,000 XP",status:"已兑换",image:`${He}reward-flower.png`},{name:"护发礼盒",date:"2026-07-12",points:"-6,500 XP",status:"配送中",image:`${He}reward-gift.png`},{name:"头皮按摩梳",date:"2026-07-08",points:"-4,200 XP",status:"已完成",image:`${He}reward-brush.png`}];function C0(r){const s=we.getState();lp(r),r.querySelectorAll("[data-rewards-points]").forEach(i=>{i.textContent=s.points.toLocaleString("en-US")}),fe(r.querySelector("#shop"),S0.map(i=>`<button class="reward-card" type="button" ${i.unlockId&&In.some(d=>d.id===i.unlockId)?`data-unlock-id="${N(i.unlockId)}"`:""}>
      <div class="reward-image-wrap">
        <img src="${N(i.image)}" alt="${N(i.name)}">
        ${i.locked?'<span class="lock-icon">⌕</span>':""}
      </div>
      <div class="reward-copy">
        <strong>${N(i.name)}</strong>
        <span>${N(i.subtitle)}</span>
        <b>${i.points.toLocaleString("en-US")} XP</b>
      </div>
    </button>`).join("")),fe(r.querySelector("#rewardsGrowth"),E0.map(i=>`
    <button type="button" class="growth-reward ${i.active?"active":""}">
      <img src="${N(i.image)}" alt="${N(i.level)} 奖励">
      <strong>${N(i.level)}</strong>
      <span>${N(i.status)}</span>
    </button>
  `).join("")),fe(r.querySelector("#rewardsRecords"),_0.map(i=>`
    <div class="record-item">
      <img src="${N(i.image)}" alt="${N(i.name)}">
      <div><strong>${N(i.name)}</strong><span>${N(i.date)}</span></div>
      <div><b>${N(i.points)}</b><small>${N(i.status)}</small></div>
    </div>
  `).join(""))}const R0=["排行榜","我的联盟","好友排行","段位晋升"];function P0(r,s="排行榜"){r.querySelectorAll("[data-league-tab]").forEach(i=>{i.classList.toggle("active",i.dataset.leagueTab===s)}),fe(r.querySelector("#leagueRankContent"),L0(s))}function fp(){const r=we.getState();return[{rank:1,name:"Luna",level:"Lv.6",note:"头发是生命的种子 🌱",points:28760,tier:"王者 I",tierTone:"gold",trend:"↑ 1",trendTone:"up",avatarSrc:"/league-avatars/luna.png",isMe:!1},{rank:2,name:"Mia",level:"Lv.5",note:"每天进步 1% ✨",points:25480,tier:"王者 II",tierTone:"gold",trend:"↓ 1",trendTone:"down",avatarSrc:"/league-avatars/mia.png",isMe:!1},{rank:3,name:"Ray",level:"Lv.5",note:"慢慢来，比较更重要 💜",points:22140,tier:"钻石 I",tierTone:"purple",trend:"—",trendTone:"flat",avatarSrc:"/league-avatars/ray.png",isMe:!1},{rank:4,name:"Sophia",level:"Lv.5",note:"关注头皮，从现在开始",points:18900,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:"/league-avatars/sophia.png",isMe:!1},{rank:5,name:"Bella",level:"Lv.4",note:"保持心情愉悦～",points:16520,tier:"铂金 I",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:"/league-avatars/bella.png",isMe:!1},{rank:6,name:"Aria",level:"Lv.4",note:"爱自己，从发起 ❤️",points:15320,tier:"铂金 II",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:"/league-avatars/aria.png",isMe:!1},{rank:12,name:"You",level:"Lv.5",note:r.checkinDays.length?`${r.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！",points:Math.max(r.points,12360),tier:"钻石 III",tierTone:"purple",trend:"↑ 3",trendTone:"up",avatarSrc:"/league-avatars/you.png",isMe:!0}]}function L0(r){return r==="我的联盟"?$0():r==="好友排行"?O0():r==="段位晋升"?z0():T0()}function T0(){return`
    <div class="ranking-layout">
      <aside class="category-nav">
        <button class="active" type="button"><span>✣</span><span><b>总 XP 排行</b></span></button>
        <button type="button"><span>♔</span><span><b>护发达人</b><small>头发健康分</small></span></button>
        <button type="button"><span>✦</span><span><b>活跃之星</b><small>任务完成数</small></span></button>
        <button type="button"><span>⌁</span><span><b>坚持不懈</b><small>连续打卡天数</small></span></button>
        <button type="button"><span>♡</span><span><b>爱心大使</b><small>帮助伙伴次数</small></span></button>
      </aside>
      <div class="ranking-card">
        <div class="table-head"><span>排名</span><span>玩家</span><span>段位</span><span>总 XP</span><span>趋势</span></div>
        <div class="table-body">${fp().map(gp).join("")}</div>
        <div class="refresh-note">◷ 每 10 分钟更新一次</div>
      </div>
    </div>
  `}function $0(){const r=[["联盟等级","Lv.6","距离 Lv.7 还需 740 XP","58%"],["本周任务","12 / 18","今日新增 3 个可完成任务","67%"],["成员活跃","28 / 30","5 位成员连续打卡超过 7 天","86%"]],s=[["Luna","队长","8,420 XP"],["Mia","副队长","7,860 XP"],["Ray","活跃成员","6,980 XP"],["You","成长成员","3,260 XP"]];return`
    <div class="league-mock-grid alliance-mock">
      ${r.map(([i,u,d,p])=>`
        <section class="league-mock-card">
          <span>${N(i)}</span>
          <b>${N(u)}</b>
          <p>${N(d)}</p>
          <div class="league-mock-progress"><i style="width:${N(p)}"></i></div>
        </section>
      `).join("")}
      <section class="league-mock-card wide">
        <div class="league-mock-title"><b>联盟成员贡献</b></div>
        <div class="league-mini-list">
          ${s.map(([i,u,d])=>`<div><span class="avatar-dot"></span><b>${N(i)}<small>${N(u)}</small></b><strong>${N(d)}</strong></div>`).join("")}
        </div>
      </section>
    </div>
  `}function O0(){return`
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${[{rank:1,name:"Nora",level:"Lv.5",note:"睡眠打卡稳定",points:20680,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:"",isMe:!1},{rank:2,name:"Echo",level:"Lv.4",note:"本周完成 9 个任务",points:18440,tier:"铂金 I",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:"",isMe:!1},{rank:3,name:"June",level:"Lv.4",note:"护发建议执行率 86%",points:17210,tier:"铂金 II",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:"",isMe:!1},{rank:7,name:"You",level:"Lv.5",note:"一起变好呀！",points:12360,tier:"钻石 III",tierTone:"purple",trend:"↑ 1",trendTone:"up",avatarSrc:"/league-avatars/you.png",isMe:!0}].map(gp).join("")}</div>
      <div class="refresh-note">好友排行为 mock 数据，后续接入好友关系后替换</div>
    </div>
  `}function z0(){return`
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <b>钻石 III</b>
        <p>保持任务完成率，并在本周获得 380 XP 可晋升至钻石 II。</p>
        <div class="league-mock-progress"><i style="width:62%"></i></div>
      </section>
      <section class="league-tier-road">
        ${[["青铜","完成第一次扫描",!0],["白银","累计 3 天记录",!0],["黄金","完成 8 个护发任务",!0],["铂金","连续打卡 7 天",!0],["钻石 III","当前段位 · 620 / 1000 XP",!0],["钻石 II","再获得 380 XP 解锁",!1],["钻石 I","进入联盟前 20%",!1],["王者","赛季前 3 名",!1]].map(([s,i,u])=>`
          <div class="${u?"done":""}">
            <span>${u?"✓":"·"}</span>
            <b>${N(String(s))}<small>${N(String(i))}</small></b>
          </div>
        `).join("")}
      </section>
    </div>
  `}function gp(r){const s=r.isMe?"you-rank":r.rank===1?"gold":r.rank===2?"silver":r.rank===3?"bronze":"normal",i=r.tierTone==="gold"?"king":r.tierTone==="purple"?"diamond":"platinum";return`
    <div class="league-ranking-row ${r.isMe?"current-user":""}" role="row">
      <div class="rank-cell" role="cell"><span class="rank-badge ${s}">${r.rank}</span></div>
      <div class="player-cell" role="cell">
        ${r.avatarSrc?`<img class="league-avatar" src="${N(r.avatarSrc)}" alt="${N(r.name)} 的头像">`:'<span class="avatar-dot"></span>'}
        <div class="player-copy">
          <div class="player-name">${N(r.name)} <span class="level">${N(r.level)}</span>${r.isMe?'<span class="mini-crown" title="当前用户">●</span>':""}</div>
          <div class="motto">${N(r.note)}</div>
        </div>
      </div>
      <div class="tier-cell" role="cell">
        <span class="tier-emblem ${i}" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2.3 16 5l4.7.8-.8 4.7 1.7 4.5-4.2 2.3L15 21.6 12 19l-3 2.6-2.4-4.3L2.4 15l1.7-4.5-.8-4.7L8 5l4-2.7Z"/><path class="tier-star" d="m12 7.2 1.35 2.74 3.03.44-2.19 2.13.52 3.02L12 14.1l-2.71 1.43.52-3.02-2.19-2.13 3.03-.44L12 7.2Z"/></svg>
        </span>
        <span>${N(r.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${r.points.toLocaleString("en-US")} XP</div>
      <div class="trend-cell ${r.trendTone}" role="cell">${N(r.trend)}</div>
    </div>
  `}const vn=()=>new Date().toISOString().slice(0,10),N0=()=>`diaoleme-prototype-tasks-${vn()}`,A0=()=>`diaoleme-prototype-task-bonus-${vn()}`,I0=r=>`diaoleme-prototype-quest-progress-${r}-${vn()}`;function D0(){const r=zl.useRef(null);return zl.useEffect(()=>{let s=document.getElementById("diaoleme-prototype-style");s||(s=document.createElement("style"),s.id="diaoleme-prototype-style",document.head.appendChild(s)),s.textContent=`${Zh}
${G0}`;let i=()=>{};return r.current&&(r.current.innerHTML=Yh,new Function(Gh)(),i=M0(r.current)),()=>{i(),r.current&&(r.current.innerHTML="")}},[]),Ol.jsx("div",{ref:r})}function M0(r){f0({getSuggestions:vp,taskKey:N0,taskBonusKey:A0,questProgressKey:I0});let s="daily",i="排行榜";const u=()=>j0(r,s,i),d=u0(r,{renderStatefulSections:u}),p=K0(r);u();const f=we.subscribe(u),m=x=>{const S=x.target,w=S.closest("[data-quest-category]"),C=S.closest("[data-league-tab]"),$=S.closest("[data-quest-id]"),I=S.closest('[data-action="checkin"]'),q=S.closest("[data-unlock-id]"),H=S.closest("[data-view-report]"),R=S.closest("[data-view-day]"),P=S.closest("[data-share-report]"),U=S.closest("[data-go]"),W=S.closest('[data-action="reset-progress"]'),F=S.closest("[data-scan-record-page]"),se=S.closest('[data-action="journey-share"]'),X=S.closest('[data-action="open-journey"]'),de=S.closest("[data-buddy-action]"),re=S.closest("#guideBtn"),ae=S.closest("[data-post-like]"),G=S.closest("[data-post-comments]");if((U==null?void 0:U.dataset.go)==="scan"&&!H&&Ec(r),w!=null&&w.dataset.questCategory&&_c(w.dataset.questCategory)&&(s=w.dataset.questCategory,u()),C!=null&&C.dataset.leagueTab&&R0.includes(C.dataset.leagueTab)&&(i=C.dataset.leagueTab,u(),gt(r,`已切换至${i}`)),$!=null&&$.dataset.questId&&$.dataset.questCategory&&_c($.dataset.questCategory)&&(m0($.dataset.questCategory,$.dataset.questId,r),u()),I&&(we.getState().markCheckinToday(),u()),q){const Z=In.find(ye=>ye.id===q.dataset.unlockId);if(Z){const ye=we.getState().unlockedHairStyles.includes(Z.id),Re=we.getState().unlockHairStyle(Z.id,Z.cost);Re&&op(Z.id),gt(r,Re?`${ye?"已换上":"已解锁并换上"} ${Z.name}`:`积分还差 ${Z.cost-we.getState().points}`),u()}}if(H!=null&&H.dataset.viewReport&&(we.getState().viewReport(H.dataset.viewReport),aa(r,"scan"),Ul(r,Sc()),gt(r,"已打开这份扫描报告")),R!=null&&R.dataset.viewDay&&(we.getState().viewDayReport(R.dataset.viewDay),aa(r,"scan"),Ul(r,Sc()),gt(r,"已打开当天最新报告")),P!=null&&P.dataset.shareReport&&(we.getState().viewReport(P.dataset.shareReport),$l(),gt(r,"已生成这份报告的分享卡")),F!=null&&F.dataset.scanRecordPage&&(r.dataset.scanRecordPage=F.dataset.scanRecordPage,pp(r)),W&&confirm("重置所有进度、积分、打卡和历史记录？")&&(we.getState().resetAll(),h0(),Ec(r),u()),re&&$l(),se&&($l(),gt(r,"已生成 Journey 分享卡")),X&&aa(r,"journey"),ae!=null&&ae.dataset.postLike&&(q0(ae.dataset.postLike),mp(r)),G!=null&&G.dataset.postComments){const Z=r.querySelector(`[data-comments-for="${G.dataset.postComments}"]`);Z==null||Z.classList.toggle("collapsed")}de!=null&&de.dataset.buddyAction&&(t0(de.dataset.buddyAction,r,vn),u())};return document.addEventListener("click",m),()=>{d(),p(),f(),document.removeEventListener("click",m)}}function j0(r,s="daily",i="排行榜"){F0(r),e0(r,{avgScore:yp,buildTrendBars:cp,getQuestCount:v0,todayKey:vn}),g0(r,s),pp(r),U0(r),mp(r),C0(r),P0(r,i),J0(r)}function F0(r){const s=we.getState();fe(r.querySelector(".compact-quests"),vp().slice(0,4).map((u,d)=>`<div class="item" style="grid-template-columns:34px 1fr auto"><span>${["💧","🌙","🥗","🖐"][d]||"✨"}</span><b>${N(u)}</b><span class="status">+${d===0?5:2} XP</span></div>`).join("")),fe(r.querySelector(".small-leaders"),fp().slice(0,4).map(u=>`<div class="leader ${u.isMe?"you":""}" style="grid-template-columns:34px 1fr auto"><span class="badge">${u.rank}</span><b>${N(u.name)}</b><span>${u.points} XP</span></div>`).join(""));const i=r.querySelectorAll('[data-page="home"] .stats .badge, [data-page="home"] .badge');i[0]&&(i[0].textContent=`${s.points} XP`)}function U0(r){const s=we.getState().reportHistory,i=s.slice(0,7),u=s[0],d=s[1],p=u&&d?u.score-d.score:0,f=u?p>0?`比上次提升 ${p} 分，状态在向上走。`:p<0?`比上次低 ${Math.abs(p)} 分，今天适合轻量观察。`:"和上次基本持平，记录节奏稳定。":"还没有记录，先完成一次 Scan。",m=H0(s),x=r.querySelector('[data-page="diary"] .card.hero');fe(x,`
    <div>
      <h2 style="font-size:36px">历史记录与变化趋势 ✨</h2>
      <p>${N(f)}</p>
      <div class="three grid diary-summary">
        <div><span class="big-number">${s.length}</span><br>累计记录</div>
        <div><span class="big-number">${yp(s)||"--"}</span><br>平均状态分</div>
        <div><span class="badge">${N((u==null?void 0:u.count)||"等待")}</span><br>最近掉发量</div>
      </div>
      <p><b>智能建议：</b>${N(m)}</p>
    </div>
    <div class="buddy-stage" style="min-height:220px"><div class="ground"></div><div class="buddy" style="transform:scale(.5)"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div></div>
  `),fe(r.querySelector("#calendar"),W0(s)),fe(r.querySelector("#diaries"),i.length?i.map(w=>`<div class="item"><span><b>${N(w.date.slice(8))}</b><br>${N(w.date.slice(5,7))}月</span><b>${X0(w.score)} ${N(w.title)}<small>${N(w.summary)}</small></b><button class="pill" data-view-report="${N(w.id)}">查看</button></div>`).join(""):'<div class="item"><span>📷</span><b>还没有历史记录<small>从 Scan 上传图片后，这里会自动沉淀记录、分数和智能建议。</small></b><span class="status">等待</span></div>');const S=V0(s);fe(r.querySelector('[data-page="diary"] aside .card:nth-child(1)'),`<h3>变化趋势</h3><p>${N(f)}</p><div class="chart">${S.map(w=>`<span class="bar" style="height:${w}%"></span>`).join("")}</div>`),fe(r.querySelector('[data-page="diary"] .word-cloud'),`<h3>关键词统计</h3>${Q0(s)}`),fe(r.querySelector('[data-page="diary"] aside .card:nth-child(3)'),`<h3>回忆精选</h3><div class="reward-art">${u?"📈":"🌄"}</div><b>${N((u==null?void 0:u.title)||"第一篇日记 ✨")}</b><p>${N((u==null?void 0:u.encouragement)||"完成第一次 Scan 后，这里会展示最近一次记录的鼓励语。")}</p>`)}function H0(r){const s=r[0],i=r[1];if(!s)return"先完成一次 Scan，让小发球有第一条记录可以陪你观察变化。";const u=i?s.score-i.score:0,d=s.count==="偏多"?"今天先把目标放轻一点，选一个早睡或放松任务就够了":s.count==="少量"?"状态看起来比较轻松，可以继续保持记录节奏":"保持温和观察，不需要给自己额外压力",p=s.tags[0]?`这次标签是“${s.tags[0]}”，`:"",f=s.suggestions[0]||s.daily_task||"睡前做 2 分钟放松呼吸";return u>=8?`${p}比上次提升明显，建议延续今天的做法：${f}。${d}。`:u<=-8?`${p}这次分数有点回落，建议先不做判断，只保留一条轻量动作：${f}。${d}。`:s.score>=75?`${p}整体比较稳定，今天适合做“巩固局”：${f}，然后明天继续对比趋势。`:s.score<55?`${p}今天先走温柔路线，不追求立刻变好；完成“${f}”就算达标。`:`${p}变化不大就是好信号，建议继续轻量打卡：${f}。${d}。`}const B0=[{id:"checkin7",name:"小蒲公英",level:"Lv.6",body:"今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～",media:"📋",likes:128,comments:["我也在做 7 天挑战，一起坚持！","这种轻松记录真的比焦虑刷帖舒服。"]},{id:"massage",name:"爱吃草莓",level:"Lv.4",body:"分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。",media:"🪮",likes:96,comments:["求一个手法教程！","睡前按摩 + 早睡，感觉小发球都开心了。"]},{id:"slowday",name:"薄荷味的风",level:"Lv.6",body:"最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。",media:"🌿",likes:76,comments:["抱抱，先把记录坚持下来就很棒。","今天也给自己一点松弛感。"]},{id:"rewardhair",name:"向日葵",level:"Lv.3",body:"新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！",media:"🌱",likes:143,comments:["这个发型也太可爱了！","奖励机制好有动力，我也要攒 XP。"]}];function mp(r){const s=hp();fe(r.querySelector("#posts"),B0.map(i=>{const u=s.has(i.id),d=i.comments.map((p,f)=>`<div class="comment"><b>${f===0?"发友":"小发球"}：</b>${N(p)}</div>`).join("");return`<div class="post community-post"><div class="mini-buddy"></div><div><b>${N(i.name)} <span class="badge">${N(i.level)}</span></b><p>${N(i.body)}</p><span class="badge"># 头皮护理</span><div class="community-actions"><button class="pill ${u?"primary":""}" data-post-like="${N(i.id)}">💜 ${i.likes+(u?1:0)}</button><button class="pill" data-post-comments="${N(i.id)}">💬 ${i.comments.length}</button><button class="pill">☆ 收藏</button></div><div class="comments collapsed" data-comments-for="${N(i.id)}">${d}</div></div><div class="post-media">${N(i.media)}</div></div>`}).join(""))}function hp(){try{return new Set(JSON.parse(localStorage.getItem("diaoleme-community-likes")||"[]"))}catch{return new Set}}function q0(r){const s=hp();s.has(r)?s.delete(r):s.add(r),localStorage.setItem("diaoleme-community-likes",JSON.stringify([...s]))}function W0(r){const s=new Map;r.forEach(x=>{s.has(x.date)||s.set(x.date,x)});const i=new Date,u=i.getFullYear(),d=i.getMonth(),p=new Date(u,d,1).getDay(),f=new Date(u,d+1,0).getDate(),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>`<span>${x}</span>`);for(let x=0;x<p;x+=1)m.push("<span></span>");for(let x=1;x<=f;x+=1){const S=`${u}-${String(d+1).padStart(2,"0")}-${String(x).padStart(2,"0")}`,w=s.get(S),C=w?"selected diary-record-day":S===vn()?"today":"";m.push(`<span class="${C}" title="${w?`${w.score} 分 ${N(w.title)}`:""}">${x}${w?"<small>•</small>":""}</span>`)}return m.join("")}function X0(r){return r>=75?"😊 稳定":r>=55?"😌 观察":"🌧 轻放松"}function V0(r){const s=r.slice(0,9).reverse().map(i=>i.score);return s.length?s.map(i=>Math.max(18,Math.min(100,i))):[36,42,52,46,60,55,66]}function Q0(r){const s=r.flatMap(u=>u.tags).slice(0,8);return(s.length?s:["护理","轻松记录","睡眠","心情","头皮按摩","坚持"]).map((u,d)=>{const p=[28,14,58,42,66,24,50,72][d%8],f=[36,58,34,70,60,42,50,76][d%8],m=[34,26,20,18,16,22,15,17][d%8];return`<span style="left:${p}%;top:${f}%;font-size:${m}px">${N(u)}</span>`}).join("")}function K0(r){const s=document.createElement("div");s.className="ai-chat-widget",s.innerHTML=`
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手">🌱<span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `,r.appendChild(s);const i=s.querySelector(".ai-chat-bubble"),u=s.querySelector("[data-chat-form]"),d=s.querySelector("[data-chat-input]"),p=s.querySelector("[data-chat-messages]"),f=s.querySelector("[data-chat-close]"),m=[{role:"assistant",content:"你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。"}];let x=!1,S=!1,w=0,C=0,$=0,I=0;const q="正在思考一个轻松、不焦虑的回答...",H=()=>{p.innerHTML=m.map(X=>`<div class="ai-chat-msg ${X.role}">${N(X.content)}</div>`).join(""),p.scrollTop=p.scrollHeight},R=X=>{s.classList.toggle("open",X??!s.classList.contains("open")),s.classList.contains("open")&&d.focus()},P=X=>{if(s.classList.contains("open"))return;x=!0,S=!1,w=X.clientX,C=X.clientY;const de=s.getBoundingClientRect();$=de.left,I=de.top,i.setPointerCapture(X.pointerId)},U=X=>{if(!x)return;const de=X.clientX-w,re=X.clientY-C;Math.abs(de)+Math.abs(re)>6&&(S=!0);const ae=Math.max(12,Math.min(window.innerWidth-s.offsetWidth-12,$+de)),G=Math.max(12,Math.min(window.innerHeight-s.offsetHeight-12,I+re));s.style.left=`${ae}px`,s.style.top=`${G}px`,s.style.right="auto",s.style.bottom="auto"},W=X=>{x=!1,i.hasPointerCapture(X.pointerId)&&i.releasePointerCapture(X.pointerId)},F=()=>{S||R(!0)},se=async X=>{X.preventDefault();const de=d.value.trim();if(de){d.value="",m.push({role:"user",content:de},{role:"assistant",content:q}),H();try{const re=await _h(m.filter(ae=>!(ae.role==="assistant"&&ae.content===q)).slice(-8));m[m.length-1]={role:"assistant",content:re.reply}}catch{m[m.length-1]={role:"assistant",content:"我这边暂时没有连上 AI 服务，先给你一个小建议：今天先完成一次记录，再选一个最轻量的任务。"}}H()}};return H(),i.addEventListener("pointerdown",P),i.addEventListener("pointermove",U),i.addEventListener("pointerup",W),i.addEventListener("click",F),f.addEventListener("click",()=>R(!1)),u.addEventListener("submit",se),()=>{i.removeEventListener("pointerdown",P),i.removeEventListener("pointermove",U),i.removeEventListener("pointerup",W),i.removeEventListener("click",F),u.removeEventListener("submit",se),s.remove()}}function J0(r){const s=we.getState(),i=s.checkinDays.includes(vn());fe(r.querySelector("#streak"),["一","二","三","四","五","六","日"].map((u,d)=>`<span class="badge">${d<Math.min(s.checkinDays.length,6)?"✓":d===6?"🎁":u}<br><small>${u}</small></span>`).join("")),fe(r.querySelector("#checkin"),["一","二","三","四","五","六","日"].map((u,d)=>`<span class="badge">${d<Math.min(s.checkinDays.length,6)?"✓":d===6?"🎁":u}<br><small>${u}</small></span>`).join("")+`<button class="pill ${i?"":"primary"}" data-action="checkin">${i?"今日已打卡":"今日打卡 +5"}</button><button class="pill" data-action="reset-progress">重置</button>`)}function vp(){const r=we.getState().suggestions;return r.length?r:["上传一张照片生成专属建议","今晚提前 30 分钟休息","洗头时水温尽量温和"]}function yp(r){return r.length?Math.round(r.reduce((s,i)=>s+i.score,0)/r.length):null}function $l(){const r=we.getState(),s=document.createElement("canvas");s.width=720,s.height=960;const i=s.getContext("2d");i.fillStyle="#f7edff",i.fillRect(0,0,s.width,s.height),i.fillStyle="#13205f",i.font="bold 54px sans-serif",i.fillText("掉了么 Diaoleme",64,110),i.font="bold 92px sans-serif",i.fillText(`${r.dropScore??"--"} 分`,64,250),i.font="bold 38px sans-serif",i.fillText(r.title,64,330),i.font="28px sans-serif",Y0(i,r.summary,64,400,590,42),i.fillStyle="#8b5cf6",i.font="bold 30px sans-serif",i.fillText(`${r.points} XP · 打卡 ${r.checkinDays.length} 天`,64,820);const u=document.createElement("a");u.href=s.toDataURL("image/png"),u.download=`掉了么-分享-${vn()}.png`,u.click()}function Y0(r,s,i,u,d,p){let f="";for(const m of s){const x=f+m;r.measureText(x).width>d&&f?(r.fillText(f,i,u),f=m,u+=p):f=x}f&&r.fillText(f,i,u)}const G0=`
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
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 18px;
  }

  [data-page="league"] .league-season-hero {
    background: linear-gradient(105deg, #f6dcfa 0%, #e9e2ff 46%, #ded7fb 100%);
    border-radius: 18px;
    box-shadow: 0 14px 34px rgba(90, 73, 158, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    display: grid;
    grid-template-columns: 270px minmax(260px, 1fr) 155px;
    height: 250px;
    overflow: hidden;
    position: relative;
  }

  [data-page="league"] .league-season-hero::before {
    background: radial-gradient(circle at 14% 22%, rgba(255, 255, 255, 0.7), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
    content: "";
    inset: 0;
    position: absolute;
  }

  [data-page="league"] .league-hero-copy {
    padding: 29px 0 0 26px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .league-hero-copy > span {
    font-size: 12px;
    font-weight: 800;
  }

  [data-page="league"] .league-hero-copy h2 {
    font-size: 22px;
    margin: 10px 0 8px;
  }

  [data-page="league"] .league-hero-copy p {
    align-items: center;
    color: #6f72a2;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    gap: 6px;
    margin: 0;
  }

  [data-page="league"] .league-hero-copy > small {
    color: #6f72a2;
    display: block;
    font-size: 11px;
    font-weight: 750;
    margin-top: 27px;
  }

  [data-page="league"] .league-countdown {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  [data-page="league"] .league-countdown div {
    align-items: center;
    background: rgba(255, 255, 255, 0.68);
    border-radius: 10px;
    box-shadow: inset 0 1px 0 white;
    display: flex;
    flex-direction: column;
    height: 61px;
    justify-content: center;
    width: 50px;
  }

  [data-page="league"] .league-countdown b {
    font-size: 20px;
  }

  [data-page="league"] .league-countdown span {
    font-size: 10px;
    margin-top: 4px;
  }

  [data-page="league"] .league-hero-characters {
    align-items: end;
    display: flex;
    gap: 22px;
    justify-content: center;
    padding-bottom: 34px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .podium {
    align-items: center;
    border-radius: 50% 50% 16px 16px;
    box-shadow: 0 18px 30px rgba(85, 72, 148, 0.12);
    display: grid;
    justify-items: center;
    position: relative;
    width: 84px;
  }

  [data-page="league"] .podium::before {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 50%;
    content: "";
    height: 72px;
    position: absolute;
    top: -46px;
    width: 72px;
  }

  [data-page="league"] .podium i {
    align-items: center;
    background: rgba(255, 255, 255, 0.72);
    border-radius: 50%;
    display: flex;
    font-style: normal;
    font-weight: 900;
    height: 32px;
    justify-content: center;
    margin-top: 20px;
    width: 32px;
  }

  [data-page="league"] .podium.first {
    background: linear-gradient(180deg, #ffd77b, #f5aa33);
    height: 112px;
    width: 110px;
  }

  [data-page="league"] .podium.second {
    background: linear-gradient(180deg, #dfe6ff, #9eaee2);
    height: 86px;
  }

  [data-page="league"] .podium.third {
    background: linear-gradient(180deg, #ffc7a7, #e3906d);
    height: 76px;
  }

  [data-page="league"] .league-hero-rank {
    padding: 28px 20px 0 0;
    position: relative;
    text-align: center;
    z-index: 3;
  }

  [data-page="league"] .league-hero-rank button {
    align-items: center;
    background: linear-gradient(135deg, #9b7af3, #765ce6);
    border-radius: 999px;
    box-shadow: 0 9px 20px rgba(108, 78, 218, 0.23);
    color: #fff;
    display: flex;
    font-size: 11px;
    font-weight: 800;
    gap: 7px;
    height: 34px;
    padding: 0 15px;
    white-space: nowrap;
  }

  [data-page="league"] .league-hero-rank > span {
    display: block;
    font-size: 10px;
    font-weight: 800;
    margin: 20px 0 7px;
  }

  [data-page="league"] .league-hero-badge {
    background: linear-gradient(145deg, #d9c9ff, #7c65e8);
    clip-path: polygon(50% 0, 86% 16%, 100% 54%, 75% 92%, 50% 100%, 25% 92%, 0 54%, 14% 16%);
    color: white;
    display: grid;
    font-size: 30px;
    height: 67px;
    margin: auto;
    place-items: center;
    width: 67px;
  }

  [data-page="league"] .league-hero-rank b,
  [data-page="league"] .league-hero-rank small {
    display: block;
  }

  [data-page="league"] .league-hero-rank b {
    font-size: 14px;
    margin-top: 7px;
  }

  [data-page="league"] .league-hero-rank small {
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
    margin-top: 17px;
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
    gap: 14px;
    grid-template-columns: 130px minmax(0, 1fr);
  }

  [data-page="league"] .category-nav {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(249, 246, 255, 0.62));
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(84, 68, 145, 0.06);
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    padding: 8px;
  }

  [data-page="league"] .category-nav button {
    align-items: center;
    background: transparent;
    border-radius: 12px;
    color: #6d75a3;
    cursor: pointer;
    display: flex;
    gap: 10px;
    min-height: 0;
    padding: 8px 9px;
    text-align: left;
    width: 100%;
  }

  [data-page="league"] .category-nav button.active {
    background: linear-gradient(135deg, #f3edff, #fbf8ff);
    box-shadow: inset 0 0 0 1px rgba(127, 96, 225, 0.22), 0 8px 18px rgba(98, 73, 179, 0.08);
    color: #7659dc;
  }

  [data-page="league"] .category-nav b {
    display: block;
    font-size: 12px;
  }

  [data-page="league"] .category-nav small {
    color: #999cbc;
    display: block;
    font-size: 9px;
    margin-top: 4px;
  }

  [data-page="league"] .ranking-card {
    background: rgba(255, 255, 255, 0.73);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(79, 64, 137, 0.07);
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
    grid-template-columns: 56px minmax(190px, 1.65fr) minmax(115px, 0.95fr) 115px 65px;
  }

  [data-page="league"] .table-head {
    border-bottom: 1px solid rgba(110, 100, 166, 0.1);
    color: #8589b1;
    font-size: 9px;
    font-weight: 800;
    height: 40px;
    padding: 0 9px;
  }

  [data-page="league"] .table-head span:not(:nth-child(2)) {
    text-align: center;
  }

  [data-page="league"] .league-ranking-row {
    border-bottom: 1px solid rgba(110, 100, 166, 0.085);
    min-height: 51px;
    padding: 0 9px;
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
    margin: 13px 8px 4px;
    min-height: 59px;
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
    font-size: 11px;
    font-weight: 850;
    height: 26px;
    place-items: center;
    width: 26px;
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
    gap: 8px;
    min-width: 0;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    border-radius: 50%;
    flex: 0 0 auto;
    height: 34px;
    object-fit: cover;
    width: 34px;
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
    font-size: 11px;
    font-weight: 850;
    white-space: nowrap;
  }

  [data-page="league"] .player-name i {
    color: #dec04c;
    font-size: 7px;
    font-style: normal;
  }

  [data-page="league"] .level {
    color: #989bbb;
    font-size: 8px;
    font-weight: 700;
  }

  [data-page="league"] .motto {
    color: #9a9dbc;
    display: block;
    font-size: 8.8px;
    margin-top: 4px;
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
    font-size: 11px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell {
    font-size: 10px;
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

  [data-page="league"] .league-mini-list {
    display: grid;
    gap: 8px;
    margin-top: 10px;
  }

  [data-page="league"] .league-mini-list div {
    align-items: center;
    display: grid;
    gap: 10px;
    grid-template-columns: 34px 1fr auto;
  }

  [data-page="league"] .league-mini-list small {
    color: #969abb;
    display: block;
    font-size: 9px;
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
    grid-template-columns: 28px 1fr;
    padding: 10px;
  }

  [data-page="league"] .league-tier-road div.done span {
    background: #7c68e9;
    color: white;
  }

  [data-page="league"] .league-tier-road span {
    background: #eff0f8;
    border-radius: 50%;
    display: grid;
    height: 24px;
    place-items: center;
    width: 24px;
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
    font-size: 12px;
    justify-content: space-between;
  }

  [data-page="league"] .league-panel-title button {
    background: transparent;
    color: #8a70e8;
    font-size: 9px;
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
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
  }

  [data-page="league"] .league-shield-placeholder {
    background: linear-gradient(145deg, #d9c9ff, #7c65e8);
    color: white;
    height: 74px;
    width: 74px;
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
    font-size: 9px;
    gap: 4px;
    grid-template-columns: 1fr auto;
    height: 31px;
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
    color: white;
    height: 58px;
    width: 58px;
  }

  [data-page="league"] .league-battle-badge.purple,
  [data-page="league"] .award-dot.purple { background: linear-gradient(145deg, #d9c9ff, #7c65e8); }
  [data-page="league"] .league-battle-badge.green { background: linear-gradient(145deg, #cdf2d2, #54ae68); }
  [data-page="league"] .award-dot.pink { background: linear-gradient(145deg, #ffd4e2, #f06f96); }
  [data-page="league"] .award-dot.blue { background: linear-gradient(145deg, #d7e8ff, #6b96e8); }

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

  [data-page="league"] .category-nav {
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  [data-page="league"] .category-nav button {
    min-height: 0;
  }

  [data-page="league"] .league-ranking-row {
    grid-template-columns: 56px minmax(190px, 1.65fr) minmax(115px, 0.95fr) 115px 65px;
    min-height: 51px;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    height: 34px;
    object-fit: cover;
    width: 34px;
  }

  [data-page="league"] .tier-emblem {
    filter: none;
    height: 20px;
    width: 20px;
  }

  [data-page="league"] .tier-emblem svg {
    height: 14px;
    width: 14px;
  }

  [data-page="rewards"] .rewards-dashboard {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) 350px;
  }

  [data-page="rewards"] .rewards-main,
  [data-page="rewards"] .rewards-right-rail {
    min-width: 0;
  }

  [data-page="rewards"] .rewards-main {
    display: grid;
    gap: 18px;
  }

  [data-page="rewards"] .rewards-points-hero,
  [data-page="rewards"] .reward-market,
  [data-page="rewards"] .growth-panel,
  [data-page="rewards"] .rewards-side-panel {
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 22px;
    box-shadow: 0 18px 46px rgba(95, 85, 150, 0.11);
  }

  [data-page="rewards"] .rewards-points-hero {
    align-items: center;
    display: grid;
    gap: 16px;
    grid-template-columns: minmax(210px, 0.82fr) minmax(180px, 240px) minmax(240px, 0.86fr);
    min-height: 190px;
    overflow: hidden;
    padding: 20px 24px;
    position: relative;
  }

  [data-page="rewards"] .rewards-points-hero::before {
    background:
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9), transparent 25%),
      linear-gradient(135deg, rgba(255, 229, 246, 0.92), rgba(229, 222, 255, 0.86) 56%, rgba(224, 245, 255, 0.9));
    content: "";
    inset: 0;
    position: absolute;
    z-index: 0;
  }

  [data-page="rewards"] .rewards-points-hero > * {
    position: relative;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-points-copy {
    position: relative;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-points-copy > span {
    color: #5960a8;
    display: block;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  [data-page="rewards"] .rewards-points-copy h2 {
    align-items: baseline;
    color: #172873;
    display: flex;
    gap: 8px;
    font-size: 44px;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
  }

  [data-page="rewards"] .rewards-points-copy h2 small {
    color: #7764d8;
    font-size: 18px;
  }

  [data-page="rewards"] .rewards-points-copy p {
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
    max-height: 178px;
    max-width: 100%;
    object-fit: contain;
    position: relative;
    transform: none;
    width: 100%;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-earn-card {
    backdrop-filter: blur(14px);
    background: rgba(255, 255, 255, 0.56);
    border: 1px solid rgba(255, 255, 255, 0.78);
    border-radius: 18px;
    padding: 18px;
  }

  [data-page="rewards"] .rewards-earn-card h3,
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
    color: #69709f;
    display: grid;
    font-size: 12px;
    font-weight: 700;
    gap: 8px;
    grid-template-columns: 26px 1fr auto;
  }

  [data-page="rewards"] .earn-icon {
    border-radius: 50%;
    color: #fff;
    display: grid;
    height: 26px;
    place-items: center;
    width: 26px;
  }

  [data-page="rewards"] .earn-icon.amber { background: #f8b752; }
  [data-page="rewards"] .earn-icon.green { background: #68c990; }
  [data-page="rewards"] .earn-icon.blue { background: #79a7f7; }
  [data-page="rewards"] .earn-icon.violet { background: #9175ef; }

  [data-page="rewards"] .reward-market {
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

  [data-page="rewards"] .reward-card {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(226, 219, 255, 0.9);
    border-radius: 18px;
    box-shadow: 0 12px 28px rgba(91, 82, 138, 0.08);
    cursor: pointer;
    display: grid;
    gap: 10px;
    min-height: 190px;
    padding: 12px;
    text-align: left;
  }

  [data-page="rewards"] .reward-image-wrap {
    align-items: center;
    background: linear-gradient(145deg, #f7f2ff, #fff7fb);
    border-radius: 15px;
    display: flex;
    height: 104px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  [data-page="rewards"] .reward-image-wrap img {
    height: 88px;
    object-fit: contain;
    width: 88px;
  }

  [data-page="rewards"] .lock-icon {
    align-items: center;
    background: rgba(31, 38, 96, 0.74);
    border-radius: 50%;
    color: #fff;
    display: flex;
    font-size: 13px;
    height: 24px;
    justify-content: center;
    position: absolute;
    right: 9px;
    top: 9px;
    width: 24px;
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
    align-items: center;
    display: grid;
    gap: 12px;
    grid-template-columns: minmax(155px, 0.8fr) 36px minmax(0, 1fr) 36px;
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

  [data-page="rewards"] .round-arrow {
    background: #fff;
    border: 1px solid rgba(139, 126, 218, 0.14);
    border-radius: 50%;
    color: #7f6be9;
    cursor: pointer;
    font-size: 24px;
    height: 36px;
    width: 36px;
  }

  [data-page="rewards"] .growth-track {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, minmax(88px, 1fr));
  }

  [data-page="rewards"] .growth-reward {
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(226, 219, 255, 0.82);
    border-radius: 16px;
    display: grid;
    justify-items: center;
    min-height: 118px;
    padding: 12px 8px;
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

  [data-page="rewards"] .growth-reward span {
    color: #8a90bb;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="rewards"] .rewards-right-rail {
    display: grid;
    gap: 16px;
  }

  [data-page="rewards"] .rewards-side-panel {
    padding: 18px;
  }

  [data-page="rewards"] .rewards-panel-heading {
    align-items: start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
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
    gap: 14px;
    grid-template-columns: 126px 1fr;
  }

  [data-page="rewards"] .points-donut {
    align-items: center;
    background: conic-gradient(#8d6cf6 0 67%, #73a4f6 67% 85%, #f5b35a 85% 95%, #e6e8f4 95% 100%);
    border-radius: 50%;
    display: flex;
    height: 126px;
    justify-content: center;
    width: 126px;
  }

  [data-page="rewards"] .points-donut div {
    align-items: center;
    background: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 82px;
    justify-content: center;
    width: 82px;
  }

  [data-page="rewards"] .points-donut strong {
    color: #202e76;
    font-size: 16px;
  }

  [data-page="rewards"] .points-donut span {
    color: #9297bd;
    font-size: 10px;
    font-weight: 800;
  }

  [data-page="rewards"] .legend {
    display: grid;
    gap: 9px;
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
    gap: 7px;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  [data-page="rewards"] .checkin-week div,
  [data-page="rewards"] .checkin-week button {
    align-items: center;
    background: #f8f5ff;
    border: 0;
    border-radius: 14px;
    color: #7e83ae;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: 800;
    gap: 5px;
    min-height: 64px;
    justify-content: center;
  }

  [data-page="rewards"] .check-circle,
  [data-page="rewards"] .gift-circle {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 26px;
    justify-content: center;
    width: 26px;
  }

  [data-page="rewards"] .check-circle {
    background: linear-gradient(135deg, #8d6cf6, #ff9dc9);
    color: #fff;
  }

  [data-page="rewards"] .gift-circle {
    background: #fff;
  }

  [data-page="rewards"] .checkin-panel p {
    color: #858ab5;
    font-size: 12px;
    font-weight: 700;
    margin: 12px 0 0;
  }

  [data-page="rewards"] .checkin-panel p b {
    color: #7d66e8;
  }

  [data-page="rewards"] .event-banner {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: block;
    padding: 0;
    width: 100%;
  }

  [data-page="rewards"] .event-banner img {
    border-radius: 16px;
    display: block;
    width: 100%;
  }

  [data-page="rewards"] .record-list {
    display: grid;
    gap: 10px;
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
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .rewards-hero-character {
      height: 150px;
      max-height: 150px;
    }

    [data-page="rewards"] .reward-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    [data-page="rewards"] .growth-panel,
    [data-page="rewards"] .overview-content,
    [data-page="rewards"] .rewards-right-rail {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .growth-track {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .prototype-toast {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 20;
    border-radius: 999px;
    padding: 14px 20px;
    background: rgba(19,32,95,.92);
    color: #fff;
    box-shadow: 0 18px 45px rgba(19,32,95,.24);
    font-weight: 800;
  }
  [data-page="scan"] .scan-wrap {
    align-items: stretch;
    grid-template-columns: minmax(220px, 250px) minmax(360px, 1fr) minmax(280px, 360px);
  }
  [data-page="scan"] .feature-stack,
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-wrap > .grid {
    min-width: 0;
  }
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-side-panel {
    min-height: min(74vh, 860px);
  }
  [data-page="scan"] .scan-side-panel {
    align-content: start;
    grid-template-rows: auto auto minmax(0, 1fr);
  }
  [data-page="scan"] .scan-history-card {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  [data-page="scan"] .feature,
  [data-page="scan"] .scan-wrap > .grid .card,
  [data-page="scan"] .scan-wrap small,
  [data-page="scan"] .scan-wrap p,
  [data-page="scan"] .scan-wrap b {
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-wrap > .grid .three {
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  [data-page="scan"] .scan-stat-grid {
    align-items: start;
  }
  [data-page="scan"] .scan-stat-item {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  [data-page="scan"] .scan-stat-grid .big-number {
    display: inline-block;
    font-size: clamp(28px, 2.6vw, 42px);
    line-height: 1;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-stat-item small {
    color: var(--ink);
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
  }
  [data-page="scan"] .scan-source-stat {
    margin-top: 8px;
    position: relative;
  }
  [data-page="scan"] .scan-source-value {
    display: block;
    height: 34px;
    line-height: 34px;
    max-width: 112px;
    min-width: 0;
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
    gap: 10px;
    grid-template-columns: 32px minmax(0, 1fr) auto;
    padding: 12px;
  }
  [data-page="scan"] .scan-history-card .status {
    white-space: nowrap;
  }
  [data-page="scan"] .scan-record-list {
    display: grid;
    gap: 12px;
  }
  [data-page="scan"] .scan-record-pager {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 14px;
  }
  [data-page="scan"] .scan-record-pager .pill {
    min-height: 36px;
    padding: 0 14px;
  }
  [data-page="scan"] .scan-record-pager .pill:disabled {
    cursor: not-allowed;
    opacity: .45;
  }
  [data-page="scan"] .has-analysis-result {
    padding: 18px;
  }
  [data-page="scan"] .has-analysis-result .scan-orbit {
    aspect-ratio: 1 / 1;
    height: min(28vw, 340px);
    margin-bottom: 12px;
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
  .scan-result-card {
    margin: 0 auto 12px;
    max-width: 620px;
    padding: 16px;
    text-align: left;
    overflow: hidden;
  }
  .scan-result-head {
    align-items: flex-start;
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }
  .scan-result-head h3 {
    margin: 0;
    min-width: 0;
  }
  .analysis-source-badge {
    flex: 0 0 auto;
    max-width: 104px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .analysis-source-detail {
    color: #65709e;
    font-size: 12px;
    font-weight: 800;
    margin: 8px 0 0;
    overflow-wrap: anywhere;
  }
  .analysis-metrics {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  }

  [data-page="buddy"] .metric-row {
    grid-template-columns: 42px 72px minmax(120px, 1fr) 72px;
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
  .buddy-extra-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    margin-top: 20px;
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
    .scan-result-head {
      display: block;
    }
    .analysis-source-badge {
      display: inline-block;
      margin-top: 8px;
    }
    #timeline .journey-record,
    #timeline .journey-empty {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }
    }
  }
`;_g.createRoot(document.getElementById("root")).render(Ol.jsx(ra.StrictMode,{children:Ol.jsx(D0,{})}));
