(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=i(d);fetch(d.href,p)}})();function Tc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var El={exports:{}},aa={},_l={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function wg(){if(Qd)return pe;Qd=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.iterator;function $(w){return w===null||typeof w!="object"?null:(w=C&&w[C]||w["@@iterator"],typeof w=="function"?w:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function R(w,L,le){this.props=w,this.context=L,this.refs=H,this.updater=le||I}R.prototype.isReactComponent={},R.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=R.prototype;function U(w,L,le){this.props=w,this.context=L,this.refs=H,this.updater=le||I}var W=U.prototype=new P;W.constructor=U,q(W,R.prototype),W.isPureReactComponent=!0;var F=Array.isArray,se=Object.prototype.hasOwnProperty,X={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function re(w,L,le){var ue,ge={},J=null,ce=null;if(L!=null)for(ue in L.ref!==void 0&&(ce=L.ref),L.key!==void 0&&(J=""+L.key),L)se.call(L,ue)&&!de.hasOwnProperty(ue)&&(ge[ue]=L[ue]);var me=arguments.length-2;if(me===1)ge.children=le;else if(1<me){for(var we=Array(me),et=0;et<me;et++)we[et]=arguments[et+2];ge.children=we}if(w&&w.defaultProps)for(ue in me=w.defaultProps,me)ge[ue]===void 0&&(ge[ue]=me[ue]);return{$$typeof:r,type:w,key:J,ref:ce,props:ge,_owner:X.current}}function ae(w,L){return{$$typeof:r,type:w.type,key:L,ref:w.ref,props:w.props,_owner:w._owner}}function G(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function Z(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(le){return L[le]})}var ye=/\/+/g;function Re(w,L){return typeof w=="object"&&w!==null&&w.key!=null?Z(""+w.key):L.toString(36)}function Ee(w,L,le,ue,ge){var J=typeof w;(J==="undefined"||J==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(J){case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case r:case s:ce=!0}}if(ce)return ce=w,ge=ge(ce),w=ue===""?"."+Re(ce,0):ue,F(ge)?(le="",w!=null&&(le=w.replace(ye,"$&/")+"/"),Ee(ge,L,le,"",function(et){return et})):ge!=null&&(G(ge)&&(ge=ae(ge,le+(!ge.key||ce&&ce.key===ge.key?"":(""+ge.key).replace(ye,"$&/")+"/")+w)),L.push(ge)),1;if(ce=0,ue=ue===""?".":ue+":",F(w))for(var me=0;me<w.length;me++){J=w[me];var we=ue+Re(J,me);ce+=Ee(J,L,le,we,ge)}else if(we=$(w),typeof we=="function")for(w=we.call(w),me=0;!(J=w.next()).done;)J=J.value,we=ue+Re(J,me++),ce+=Ee(J,L,le,we,ge);else if(J==="object")throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ze(w,L,le){if(w==null)return w;var ue=[],ge=0;return Ee(w,ue,"","",function(J){return L.call(le,J,ge++)}),ue}function Ae(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(le){(w._status===0||w._status===-1)&&(w._status=1,w._result=le)},function(le){(w._status===0||w._status===-1)&&(w._status=2,w._result=le)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var ke={current:null},j={transition:null},ee={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:j,ReactCurrentOwner:X};function M(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Ze,forEach:function(w,L,le){Ze(w,function(){L.apply(this,arguments)},le)},count:function(w){var L=0;return Ze(w,function(){L++}),L},toArray:function(w){return Ze(w,function(L){return L})||[]},only:function(w){if(!G(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},pe.Component=R,pe.Fragment=i,pe.Profiler=d,pe.PureComponent=U,pe.StrictMode=u,pe.Suspense=b,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,pe.act=M,pe.cloneElement=function(w,L,le){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ue=q({},w.props),ge=w.key,J=w.ref,ce=w._owner;if(L!=null){if(L.ref!==void 0&&(J=L.ref,ce=X.current),L.key!==void 0&&(ge=""+L.key),w.type&&w.type.defaultProps)var me=w.type.defaultProps;for(we in L)se.call(L,we)&&!de.hasOwnProperty(we)&&(ue[we]=L[we]===void 0&&me!==void 0?me[we]:L[we])}var we=arguments.length-2;if(we===1)ue.children=le;else if(1<we){me=Array(we);for(var et=0;et<we;et++)me[et]=arguments[et+2];ue.children=me}return{$$typeof:r,type:w.type,key:ge,ref:J,props:ue,_owner:ce}},pe.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:p,_context:w},w.Consumer=w},pe.createElement=re,pe.createFactory=function(w){var L=re.bind(null,w);return L.type=w,L},pe.createRef=function(){return{current:null}},pe.forwardRef=function(w){return{$$typeof:g,render:w}},pe.isValidElement=G,pe.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:Ae}},pe.memo=function(w,L){return{$$typeof:k,type:w,compare:L===void 0?null:L}},pe.startTransition=function(w){var L=j.transition;j.transition={};try{w()}finally{j.transition=L}},pe.unstable_act=M,pe.useCallback=function(w,L){return ke.current.useCallback(w,L)},pe.useContext=function(w){return ke.current.useContext(w)},pe.useDebugValue=function(){},pe.useDeferredValue=function(w){return ke.current.useDeferredValue(w)},pe.useEffect=function(w,L){return ke.current.useEffect(w,L)},pe.useId=function(){return ke.current.useId()},pe.useImperativeHandle=function(w,L,le){return ke.current.useImperativeHandle(w,L,le)},pe.useInsertionEffect=function(w,L){return ke.current.useInsertionEffect(w,L)},pe.useLayoutEffect=function(w,L){return ke.current.useLayoutEffect(w,L)},pe.useMemo=function(w,L){return ke.current.useMemo(w,L)},pe.useReducer=function(w,L,le){return ke.current.useReducer(w,L,le)},pe.useRef=function(w){return ke.current.useRef(w)},pe.useState=function(w){return ke.current.useState(w)},pe.useSyncExternalStore=function(w,L,le){return ke.current.useSyncExternalStore(w,L,le)},pe.useTransition=function(){return ke.current.useTransition()},pe.version="18.3.1",pe}var Kd;function Xl(){return Kd||(Kd=1,_l.exports=wg()),_l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function kg(){if(Jd)return aa;Jd=1;var r=Xl(),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(g,b,k){var x,C={},$=null,I=null;k!==void 0&&($=""+k),b.key!==void 0&&($=""+b.key),b.ref!==void 0&&(I=b.ref);for(x in b)u.call(b,x)&&!p.hasOwnProperty(x)&&(C[x]=b[x]);if(g&&g.defaultProps)for(x in b=g.defaultProps,b)C[x]===void 0&&(C[x]=b[x]);return{$$typeof:s,type:g,key:$,ref:I,props:C,_owner:d.current}}return aa.Fragment=i,aa.jsx=f,aa.jsxs=f,aa}var Yd;function Sg(){return Yd||(Yd=1,El.exports=kg()),El.exports}var Al=Sg(),Il=Xl();const la=Tc(Il);var Es={},Cl={exports:{}},ot={},Rl={exports:{}},Pl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Eg(){return Gd||(Gd=1,(function(r){function s(j,ee){var M=j.length;j.push(ee);e:for(;0<M;){var w=M-1>>>1,L=j[w];if(0<d(L,ee))j[w]=ee,j[M]=L,M=w;else break e}}function i(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var ee=j[0],M=j.pop();if(M!==ee){j[0]=M;e:for(var w=0,L=j.length,le=L>>>1;w<le;){var ue=2*(w+1)-1,ge=j[ue],J=ue+1,ce=j[J];if(0>d(ge,M))J<L&&0>d(ce,ge)?(j[w]=ce,j[J]=M,w=J):(j[w]=ge,j[ue]=M,w=ue);else if(J<L&&0>d(ce,M))j[w]=ce,j[J]=M,w=J;else break e}}return ee}function d(j,ee){var M=j.sortIndex-ee.sortIndex;return M!==0?M:j.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var b=[],k=[],x=1,C=null,$=3,I=!1,q=!1,H=!1,R=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(j){for(var ee=i(k);ee!==null;){if(ee.callback===null)u(k);else if(ee.startTime<=j)u(k),ee.sortIndex=ee.expirationTime,s(b,ee);else break;ee=i(k)}}function F(j){if(H=!1,W(j),!q)if(i(b)!==null)q=!0,Ae(se);else{var ee=i(k);ee!==null&&ke(F,ee.startTime-j)}}function se(j,ee){q=!1,H&&(H=!1,P(re),re=-1),I=!0;var M=$;try{for(W(ee),C=i(b);C!==null&&(!(C.expirationTime>ee)||j&&!Z());){var w=C.callback;if(typeof w=="function"){C.callback=null,$=C.priorityLevel;var L=w(C.expirationTime<=ee);ee=r.unstable_now(),typeof L=="function"?C.callback=L:C===i(b)&&u(b),W(ee)}else u(b);C=i(b)}if(C!==null)var le=!0;else{var ue=i(k);ue!==null&&ke(F,ue.startTime-ee),le=!1}return le}finally{C=null,$=M,I=!1}}var X=!1,de=null,re=-1,ae=5,G=-1;function Z(){return!(r.unstable_now()-G<ae)}function ye(){if(de!==null){var j=r.unstable_now();G=j;var ee=!0;try{ee=de(!0,j)}finally{ee?Re():(X=!1,de=null)}}else X=!1}var Re;if(typeof U=="function")Re=function(){U(ye)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ze=Ee.port2;Ee.port1.onmessage=ye,Re=function(){Ze.postMessage(null)}}else Re=function(){R(ye,0)};function Ae(j){de=j,X||(X=!0,Re())}function ke(j,ee){re=R(function(){j(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){q||I||(q=!0,Ae(se))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return $},r.unstable_getFirstCallbackNode=function(){return i(b)},r.unstable_next=function(j){switch($){case 1:case 2:case 3:var ee=3;break;default:ee=$}var M=$;$=ee;try{return j()}finally{$=M}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,ee){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var M=$;$=j;try{return ee()}finally{$=M}},r.unstable_scheduleCallback=function(j,ee,M){var w=r.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?w+M:w):M=w,j){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=M+L,j={id:x++,callback:ee,priorityLevel:j,startTime:M,expirationTime:L,sortIndex:-1},M>w?(j.sortIndex=M,s(k,j),i(b)===null&&j===i(k)&&(H?(P(re),re=-1):H=!0,ke(F,M-w))):(j.sortIndex=L,s(b,j),q||I||(q=!0,Ae(se))),j},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(j){var ee=$;return function(){var M=$;$=ee;try{return j.apply(this,arguments)}finally{$=M}}}})(Pl)),Pl}var Zd;function _g(){return Zd||(Zd=1,Rl.exports=Eg()),Rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec;function Cg(){if(ec)return ot;ec=1;var r=Xl(),s=_g();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function p(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},C={};function $(e){return b.call(C,e)?!0:b.call(x,e)?!1:k.test(e)?C[e]=!0:(x[e]=!0,!1)}function I(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,a){if(t===null||typeof t>"u"||I(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,a,l,o,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=c}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,U);R[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,n,a){var l=R.hasOwnProperty(t)?R[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,n,l,a)&&(n=null),a||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var F=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),X=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),j=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,w;function L(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var le=!1;function ue(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var a=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){a=_}e.call(t.prototype)}else{try{throw Error()}catch(_){a=_}e()}}catch(_){if(_&&a&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),o=a.stack.split(`
`),c=l.length-1,m=o.length-1;1<=c&&0<=m&&l[c]!==o[m];)m--;for(;1<=c&&0<=m;c--,m--)if(l[c]!==o[m]){if(c!==1||m!==1)do if(c--,m--,0>m||l[c]!==o[m]){var h=`
`+l[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=m);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function ge(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case X:return"Portal";case ae:return"Profiler";case re:return"StrictMode";case Re:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=we(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bn(e){e._valueTracker||(e._valueTracker=et(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=we(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wn(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ht(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oe(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function Be(e,t){oe(e,t);var n=me(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Et(e,t.type,n):t.hasOwnProperty("defaultValue")&&Et(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function St(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Et(e,t,n){(t!=="number"||xn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kt=Array.isArray;function Jt(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function jt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ro(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Kt(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function ao(e,t){var n=me(t.value),a=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function so(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,lo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ep=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function oo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function uo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=oo(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var _p=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Is(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var js=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Bn=null,qn=null;function co(e){if(e=Br(e)){if(typeof Fs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ma(t),Fs(e.stateNode,e.type,t))}}function po(e){Bn?qn?qn.push(e):qn=[e]:Bn=e}function fo(){if(Bn){var e=Bn,t=qn;if(qn=Bn=null,co(e),t)for(e=0;e<t.length;e++)co(t[e])}}function go(e,t){return e(t)}function mo(){}var Us=!1;function ho(e,t,n){if(Us)return e(t,n);Us=!0;try{return go(e,t,n)}finally{Us=!1,(Bn!==null||qn!==null)&&(mo(),fo())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var a=Ma(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Hs=!1;if(g)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Hs=!1}function Cp(e,t,n,a,l,o,c,m,h){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(O){this.onError(O)}}var Er=!1,va=null,ya=!1,Bs=null,Rp={onError:function(e){Er=!0,va=e}};function Pp(e,t,n,a,l,o,c,m,h){Er=!1,va=null,Cp.apply(Rp,arguments)}function Lp(e,t,n,a,l,o,c,m,h){if(Pp.apply(this,arguments),Er){if(Er){var _=va;Er=!1,va=null}else throw Error(i(198));ya||(ya=!0,Bs=_)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yo(e){if(kn(e)!==e)throw Error(i(188))}function Tp(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return yo(l),e;if(o===a)return yo(l),t;o=o.sibling}throw Error(i(188))}if(n.return!==a.return)n=l,a=o;else{for(var c=!1,m=l.child;m;){if(m===n){c=!0,n=l,a=o;break}if(m===a){c=!0,a=l,n=o;break}m=m.sibling}if(!c){for(m=o.child;m;){if(m===n){c=!0,n=o,a=l;break}if(m===a){c=!0,a=o,n=l;break}m=m.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==a)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function bo(e){return e=Tp(e),e!==null?xo(e):null}function xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xo(e);if(t!==null)return t;e=e.sibling}return null}var wo=s.unstable_scheduleCallback,ko=s.unstable_cancelCallback,$p=s.unstable_shouldYield,Op=s.unstable_requestPaint,ze=s.unstable_now,zp=s.unstable_getCurrentPriorityLevel,qs=s.unstable_ImmediatePriority,So=s.unstable_UserBlockingPriority,ba=s.unstable_NormalPriority,Np=s.unstable_LowPriority,Eo=s.unstable_IdlePriority,xa=null,zt=null;function Ap(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:jp,Ip=Math.log,Dp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(Ip(e)/Dp|0)|0}var wa=64,ka=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var m=c&~l;m!==0?a=_r(m):(o&=c,o!==0&&(a=_r(o)))}else c=n&~l,c!==0?a=_r(c):o!==0&&(a=_r(o));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-_t(t),l=1<<n,a|=e[n],t&=~l;return a}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-_t(o),m=1<<c,h=l[c];h===-1?((m&n)===0||(m&a)!==0)&&(l[c]=Mp(m,t)):h<=t&&(e.expiredLanes|=m),o&=~m}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _o(){var e=wa;return wa<<=1,(wa&4194240)===0&&(wa=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function Up(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_t(n),o=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~o}}function Vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-_t(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var be=0;function Co(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ro,Qs,Po,Lo,To,Ks=!1,Ea=[],Yt=null,Gt=null,Zt=null,Rr=new Map,Pr=new Map,en=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $o(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function Lr(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Br(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bp(e,t,n,a,l){switch(t){case"focusin":return Yt=Lr(Yt,e,t,n,a,l),!0;case"dragenter":return Gt=Lr(Gt,e,t,n,a,l),!0;case"mouseover":return Zt=Lr(Zt,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return Rr.set(o,Lr(Rr.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Pr.set(o,Lr(Pr.get(o)||null,e,t,n,a,l)),!0}return!1}function Oo(e){var t=Sn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=vo(n),t!==null){e.blockedOn=t,To(e.priority,function(){Po(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);js=a,n.target.dispatchEvent(a),js=null}else return t=Br(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function zo(e,t,n){_a(e)&&n.delete(t)}function qp(){Ks=!1,Yt!==null&&_a(Yt)&&(Yt=null),Gt!==null&&_a(Gt)&&(Gt=null),Zt!==null&&_a(Zt)&&(Zt=null),Rr.forEach(zo),Pr.forEach(zo)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qp)))}function $r(e){function t(l){return Tr(l,e)}if(0<Ea.length){Tr(Ea[0],e);for(var n=1;n<Ea.length;n++){var a=Ea[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Yt!==null&&Tr(Yt,e),Gt!==null&&Tr(Gt,e),Zt!==null&&Tr(Zt,e),Rr.forEach(t),Pr.forEach(t),n=0;n<en.length;n++)a=en[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Oo(n),n.blockedOn===null&&en.shift()}var Wn=F.ReactCurrentBatchConfig,Ca=!0;function Wp(e,t,n,a){var l=be,o=Wn.transition;Wn.transition=null;try{be=1,Js(e,t,n,a)}finally{be=l,Wn.transition=o}}function Xp(e,t,n,a){var l=be,o=Wn.transition;Wn.transition=null;try{be=4,Js(e,t,n,a)}finally{be=l,Wn.transition=o}}function Js(e,t,n,a){if(Ca){var l=Ys(e,t,n,a);if(l===null)gi(e,t,a,Ra,n),$o(e,a);else if(Bp(l,e,t,n,a))a.stopPropagation();else if($o(e,a),t&4&&-1<Hp.indexOf(e)){for(;l!==null;){var o=Br(l);if(o!==null&&Ro(o),o=Ys(e,t,n,a),o===null&&gi(e,t,a,Ra,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else gi(e,t,a,null,n)}}var Ra=null;function Ys(e,t,n,a){if(Ra=null,e=Ms(a),e=Sn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function No(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zp()){case qs:return 1;case So:return 4;case ba:case Np:return 16;case Eo:return 536870912;default:return 16}default:return 16}}var tn=null,Gs=null,Pa=null;function Ao(){if(Pa)return Pa;var e,t=Gs,n=t.length,a,l="value"in tn?tn.value:tn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[o-a];a++);return Pa=l.slice(e,1<a?1-a:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ta(){return!0}function Io(){return!1}function dt(e){function t(n,a,l,o,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ta:Io,this.isPropagationStopped=Io,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=dt(Xn),Or=M({},Xn,{view:0,detail:0}),Vp=dt(Or),ei,ti,zr,$a=M({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(ei=e.screenX-zr.screenX,ti=e.screenY-zr.screenY):ti=ei=0,zr=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ti}}),Do=dt($a),Qp=M({},$a,{dataTransfer:0}),Kp=dt(Qp),Jp=M({},Or,{relatedTarget:0}),ni=dt(Jp),Yp=M({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=dt(Yp),Zp=M({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=dt(Zp),tf=M({},Xn,{data:0}),jo=dt(tf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=af[e])?!!t[e]:!1}function ri(){return sf}var lf=M({},Or,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=dt(lf),uf=M({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=dt(uf),df=M({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),cf=dt(df),pf=M({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=dt(pf),gf=M({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=dt(gf),hf=[9,13,27,32],ai=g&&"CompositionEvent"in window,Nr=null;g&&"documentMode"in document&&(Nr=document.documentMode);var vf=g&&"TextEvent"in window&&!Nr,Fo=g&&(!ai||Nr&&8<Nr&&11>=Nr),Uo=" ",Ho=!1;function Bo(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function yf(e,t){switch(e){case"compositionend":return qo(t);case"keypress":return t.which!==32?null:(Ho=!0,Uo);case"textInput":return e=t.data,e===Uo&&Ho?null:e;default:return null}}function bf(e,t){if(Vn)return e==="compositionend"||!ai&&Bo(e,t)?(e=Ao(),Pa=Gs=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fo&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function Xo(e,t,n,a){po(a),t=Ia(t,"onChange"),0<t.length&&(n=new Zs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ar=null,Ir=null;function wf(e){du(e,0)}function Oa(e){var t=Gn(e);if(mt(t))return e}function kf(e,t){if(e==="change")return t}var Vo=!1;if(g){var si;if(g){var ii="oninput"in document;if(!ii){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),ii=typeof Qo.oninput=="function"}si=ii}else si=!1;Vo=si&&(!document.documentMode||9<document.documentMode)}function Ko(){Ar&&(Ar.detachEvent("onpropertychange",Jo),Ir=Ar=null)}function Jo(e){if(e.propertyName==="value"&&Oa(Ir)){var t=[];Xo(t,Ir,e,Ms(e)),ho(wf,t)}}function Sf(e,t,n){e==="focusin"?(Ko(),Ar=t,Ir=n,Ar.attachEvent("onpropertychange",Jo)):e==="focusout"&&Ko()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(Ir)}function _f(e,t){if(e==="click")return Oa(t)}function Cf(e,t){if(e==="input"||e==="change")return Oa(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Rf;function Dr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!b.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Go(e,t){var n=Yo(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yo(n)}}function Zo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(){for(var e=window,t=xn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xn(e.document)}return t}function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=eu(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zo(n.ownerDocument.documentElement,n)){if(a!==null&&li(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!e.extend&&o>a&&(l=a,a=o,o=l),l=Go(n,o);var c=Go(n,a);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>a?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lf=g&&"documentMode"in document&&11>=document.documentMode,Qn=null,oi=null,jr=null,ui=!1;function tu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ui||Qn==null||Qn!==xn(a)||(a=Qn,"selectionStart"in a&&li(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),jr&&Dr(jr,a)||(jr=a,a=Ia(oi,"onSelect"),0<a.length&&(t=new Zs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Qn)))}function za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},di={},nu={};g&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Na(e){if(di[e])return di[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nu)return di[e]=t[n];return e}var ru=Na("animationend"),au=Na("animationiteration"),su=Na("animationstart"),iu=Na("transitionend"),lu=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){lu.set(e,t),p(t,[e])}for(var ci=0;ci<ou.length;ci++){var pi=ou[ci],Tf=pi.toLowerCase(),$f=pi[0].toUpperCase()+pi.slice(1);nn(Tf,"on"+$f)}nn(ru,"onAnimationEnd"),nn(au,"onAnimationIteration"),nn(su,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(iu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function uu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Lp(a,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var c=a.length-1;0<=c;c--){var m=a[c],h=m.instance,_=m.currentTarget;if(m=m.listener,h!==o&&l.isPropagationStopped())break e;uu(l,m,_),o=h}else for(c=0;c<a.length;c++){if(m=a[c],h=m.instance,_=m.currentTarget,m=m.listener,h!==o&&l.isPropagationStopped())break e;uu(l,m,_),o=h}}}if(ya)throw e=Bs,ya=!1,Bs=null,e}function _e(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var a=e+"__bubble";n.has(a)||(cu(t,e,2,!1),n.add(a))}function fi(e,t,n){var a=0;t&&(a|=4),cu(n,e,a,t)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[Aa]){e[Aa]=!0,u.forEach(function(n){n!=="selectionchange"&&(Of.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Aa]||(t[Aa]=!0,fi("selectionchange",!1,t))}}function cu(e,t,n,a){switch(No(t)){case 1:var l=Wp;break;case 4:l=Xp;break;default:l=Js}n=l.bind(null,t,n,e),l=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gi(e,t,n,a,l){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var m=a.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;c=c.return}for(;m!==null;){if(c=Sn(m),c===null)return;if(h=c.tag,h===5||h===6){a=o=c;continue e}m=m.parentNode}}a=a.return}ho(function(){var _=o,O=Ms(n),N=[];e:{var T=lu.get(e);if(T!==void 0){var B=Zs,Q=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":B=of;break;case"focusin":Q="focus",B=ni;break;case"focusout":Q="blur",B=ni;break;case"beforeblur":case"afterblur":B=ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Do;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=cf;break;case ru:case au:case su:B=Gp;break;case iu:B=ff;break;case"scroll":B=Vp;break;case"wheel":B=mf;break;case"copy":case"cut":case"paste":B=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Mo}var K=(t&4)!==0,Ne=!K&&e==="scroll",S=K?T!==null?T+"Capture":null:T;K=[];for(var v=_,E;v!==null;){E=v;var A=E.stateNode;if(E.tag===5&&A!==null&&(E=A,S!==null&&(A=kr(v,S),A!=null&&K.push(Ur(v,A,E)))),Ne)break;v=v.return}0<K.length&&(T=new B(T,Q,null,n,O),N.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",T&&n!==js&&(Q=n.relatedTarget||n.fromElement)&&(Sn(Q)||Q[Mt]))break e;if((B||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,B?(Q=n.relatedTarget||n.toElement,B=_,Q=Q?Sn(Q):null,Q!==null&&(Ne=kn(Q),Q!==Ne||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(B=null,Q=_),B!==Q)){if(K=Do,A="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=Mo,A="onPointerLeave",S="onPointerEnter",v="pointer"),Ne=B==null?T:Gn(B),E=Q==null?T:Gn(Q),T=new K(A,v+"leave",B,n,O),T.target=Ne,T.relatedTarget=E,A=null,Sn(O)===_&&(K=new K(S,v+"enter",Q,n,O),K.target=E,K.relatedTarget=Ne,A=K),Ne=A,B&&Q)t:{for(K=B,S=Q,v=0,E=K;E;E=Jn(E))v++;for(E=0,A=S;A;A=Jn(A))E++;for(;0<v-E;)K=Jn(K),v--;for(;0<E-v;)S=Jn(S),E--;for(;v--;){if(K===S||S!==null&&K===S.alternate)break t;K=Jn(K),S=Jn(S)}K=null}else K=null;B!==null&&pu(N,T,B,K,!1),Q!==null&&Ne!==null&&pu(N,Ne,Q,K,!0)}}e:{if(T=_?Gn(_):window,B=T.nodeName&&T.nodeName.toLowerCase(),B==="select"||B==="input"&&T.type==="file")var Y=kf;else if(Wo(T))if(Vo)Y=Cf;else{Y=Ef;var te=Sf}else(B=T.nodeName)&&B.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Y=_f);if(Y&&(Y=Y(e,_))){Xo(N,Y,n,O);break e}te&&te(e,T,_),e==="focusout"&&(te=T._wrapperState)&&te.controlled&&T.type==="number"&&Et(T,"number",T.value)}switch(te=_?Gn(_):window,e){case"focusin":(Wo(te)||te.contentEditable==="true")&&(Qn=te,oi=_,jr=null);break;case"focusout":jr=oi=Qn=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,tu(N,n,O);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":tu(N,n,O)}var ne;if(ai)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Vn?Bo(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(Fo&&n.locale!=="ko"&&(Vn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Vn&&(ne=Ao()):(tn=O,Gs="value"in tn?tn.value:tn.textContent,Vn=!0)),te=Ia(_,ie),0<te.length&&(ie=new jo(ie,e,null,n,O),N.push({event:ie,listeners:te}),ne?ie.data=ne:(ne=qo(n),ne!==null&&(ie.data=ne)))),(ne=vf?yf(e,n):bf(e,n))&&(_=Ia(_,"onBeforeInput"),0<_.length&&(O=new jo("onBeforeInput","beforeinput",null,n,O),N.push({event:O,listeners:_}),O.data=ne))}du(N,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=kr(e,n),o!=null&&a.unshift(Ur(e,o,l)),o=kr(e,t),o!=null&&a.push(Ur(e,o,l))),e=e.return}return a}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,a,l){for(var o=t._reactName,c=[];n!==null&&n!==a;){var m=n,h=m.alternate,_=m.stateNode;if(h!==null&&h===a)break;m.tag===5&&_!==null&&(m=_,l?(h=kr(n,o),h!=null&&c.unshift(Ur(n,h,m))):l||(h=kr(n,o),h!=null&&c.push(Ur(n,h,m)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var zf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Nf,"")}function Da(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(i(425))}function ja(){}var mi=null,hi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(Df)}:yi;function Df(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),$r(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);$r(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Yn,Hr="__reactProps$"+Yn,Mt="__reactContainer$"+Yn,xi="__reactEvents$"+Yn,jf="__reactListeners$"+Yn,Mf="__reactHandles$"+Yn;function Sn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[Nt])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[Nt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ma(e){return e[Hr]||null}var wi=[],Zn=-1;function an(e){return{current:e}}function Ce(e){0>Zn||(e.current=wi[Zn],wi[Zn]=null,Zn--)}function Se(e,t){Zn++,wi[Zn]=e.current,e.current=t}var sn={},Ve=an(sn),rt=an(!1),En=sn;function er(e,t){var n=e.type.contextTypes;if(!n)return sn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function Fa(){Ce(rt),Ce(Ve)}function hu(e,t,n){if(Ve.current!==sn)throw Error(i(168));Se(Ve,t),Se(rt,n)}function vu(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(i(108,ce(e)||"Unknown",l));return M({},n,a)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,En=Ve.current,Se(Ve,e),Se(rt,rt.current),!0}function yu(e,t,n){var a=e.stateNode;if(!a)throw Error(i(169));n?(e=vu(e,t,En),a.__reactInternalMemoizedMergedChildContext=e,Ce(rt),Ce(Ve),Se(Ve,e)):Ce(rt),Se(rt,n)}var Ft=null,Ha=!1,ki=!1;function bu(e){Ft===null?Ft=[e]:Ft.push(e)}function Ff(e){Ha=!0,bu(e)}function ln(){if(!ki&&Ft!==null){ki=!0;var e=0,t=be;try{var n=Ft;for(be=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ft=null,Ha=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),wo(qs,ln),l}finally{be=t,ki=!1}}return null}var tr=[],nr=0,Ba=null,qa=0,vt=[],yt=0,_n=null,Ut=1,Ht="";function Cn(e,t){tr[nr++]=qa,tr[nr++]=Ba,Ba=e,qa=t}function xu(e,t,n){vt[yt++]=Ut,vt[yt++]=Ht,vt[yt++]=_n,_n=e;var a=Ut;e=Ht;var l=32-_t(a)-1;a&=~(1<<l),n+=1;var o=32-_t(t)+l;if(30<o){var c=l-l%5;o=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Ut=1<<32-_t(t)+l|n<<l|a,Ht=o+e}else Ut=1<<o|n<<l|a,Ht=e}function Si(e){e.return!==null&&(Cn(e,1),xu(e,1,0))}function Ei(e){for(;e===Ba;)Ba=tr[--nr],tr[nr]=null,qa=tr[--nr],tr[nr]=null;for(;e===_n;)_n=vt[--yt],vt[yt]=null,Ht=vt[--yt],vt[yt]=null,Ut=vt[--yt],vt[yt]=null}var ct=null,pt=null,Pe=!1,Rt=null;function wu(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,pt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,pt=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(Pe){var t=pt;if(t){var n=t;if(!ku(e,t)){if(_i(e))throw Error(i(418));t=rn(n.nextSibling);var a=ct;t&&ku(e,t)?wu(a,n):(e.flags=e.flags&-4097|2,Pe=!1,ct=e)}}else{if(_i(e))throw Error(i(418));e.flags=e.flags&-4097|2,Pe=!1,ct=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Wa(e){if(e!==ct)return!1;if(!Pe)return Su(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=pt)){if(_i(e))throw Eu(),Error(i(418));for(;t;)wu(e,t),t=rn(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ct?rn(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=pt;e;)e=rn(e.nextSibling)}function rr(){pt=ct=null,Pe=!1}function Ri(e){Rt===null?Rt=[e]:Rt.push(e)}var Uf=F.ReactCurrentBatchConfig;function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var a=n.stateNode}if(!a)throw Error(i(147,e));var l=a,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(c){var m=l.refs;c===null?delete m[o]:m[o]=c},t._stringRef=o,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _u(e){var t=e._init;return t(e._payload)}function Cu(e){function t(S,v){if(e){var E=S.deletions;E===null?(S.deletions=[v],S.flags|=16):E.push(v)}}function n(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function a(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function l(S,v){return S=mn(S,v),S.index=0,S.sibling=null,S}function o(S,v,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<v?(S.flags|=2,v):E):(S.flags|=2,v)):(S.flags|=1048576,v)}function c(S){return e&&S.alternate===null&&(S.flags|=2),S}function m(S,v,E,A){return v===null||v.tag!==6?(v=yl(E,S.mode,A),v.return=S,v):(v=l(v,E),v.return=S,v)}function h(S,v,E,A){var Y=E.type;return Y===de?O(S,v,E.props.children,A,E.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ae&&_u(Y)===v.type)?(A=l(v,E.props),A.ref=qr(S,v,E),A.return=S,A):(A=hs(E.type,E.key,E.props,null,S.mode,A),A.ref=qr(S,v,E),A.return=S,A)}function _(S,v,E,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=bl(E,S.mode,A),v.return=S,v):(v=l(v,E.children||[]),v.return=S,v)}function O(S,v,E,A,Y){return v===null||v.tag!==7?(v=Nn(E,S.mode,A,Y),v.return=S,v):(v=l(v,E),v.return=S,v)}function N(S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yl(""+v,S.mode,E),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return E=hs(v.type,v.key,v.props,null,S.mode,E),E.ref=qr(S,null,v),E.return=S,E;case X:return v=bl(v,S.mode,E),v.return=S,v;case Ae:var A=v._init;return N(S,A(v._payload),E)}if(Kt(v)||ee(v))return v=Nn(v,S.mode,E,null),v.return=S,v;Xa(S,v)}return null}function T(S,v,E,A){var Y=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Y!==null?null:m(S,v,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case se:return E.key===Y?h(S,v,E,A):null;case X:return E.key===Y?_(S,v,E,A):null;case Ae:return Y=E._init,T(S,v,Y(E._payload),A)}if(Kt(E)||ee(E))return Y!==null?null:O(S,v,E,A,null);Xa(S,E)}return null}function B(S,v,E,A,Y){if(typeof A=="string"&&A!==""||typeof A=="number")return S=S.get(E)||null,m(v,S,""+A,Y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case se:return S=S.get(A.key===null?E:A.key)||null,h(v,S,A,Y);case X:return S=S.get(A.key===null?E:A.key)||null,_(v,S,A,Y);case Ae:var te=A._init;return B(S,v,E,te(A._payload),Y)}if(Kt(A)||ee(A))return S=S.get(E)||null,O(v,S,A,Y,null);Xa(v,A)}return null}function Q(S,v,E,A){for(var Y=null,te=null,ne=v,ie=v=0,Ue=null;ne!==null&&ie<E.length;ie++){ne.index>ie?(Ue=ne,ne=null):Ue=ne.sibling;var ve=T(S,ne,E[ie],A);if(ve===null){ne===null&&(ne=Ue);break}e&&ne&&ve.alternate===null&&t(S,ne),v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve,ne=Ue}if(ie===E.length)return n(S,ne),Pe&&Cn(S,ie),Y;if(ne===null){for(;ie<E.length;ie++)ne=N(S,E[ie],A),ne!==null&&(v=o(ne,v,ie),te===null?Y=ne:te.sibling=ne,te=ne);return Pe&&Cn(S,ie),Y}for(ne=a(S,ne);ie<E.length;ie++)Ue=B(ne,S,ie,E[ie],A),Ue!==null&&(e&&Ue.alternate!==null&&ne.delete(Ue.key===null?ie:Ue.key),v=o(Ue,v,ie),te===null?Y=Ue:te.sibling=Ue,te=Ue);return e&&ne.forEach(function(hn){return t(S,hn)}),Pe&&Cn(S,ie),Y}function K(S,v,E,A){var Y=ee(E);if(typeof Y!="function")throw Error(i(150));if(E=Y.call(E),E==null)throw Error(i(151));for(var te=Y=null,ne=v,ie=v=0,Ue=null,ve=E.next();ne!==null&&!ve.done;ie++,ve=E.next()){ne.index>ie?(Ue=ne,ne=null):Ue=ne.sibling;var hn=T(S,ne,ve.value,A);if(hn===null){ne===null&&(ne=Ue);break}e&&ne&&hn.alternate===null&&t(S,ne),v=o(hn,v,ie),te===null?Y=hn:te.sibling=hn,te=hn,ne=Ue}if(ve.done)return n(S,ne),Pe&&Cn(S,ie),Y;if(ne===null){for(;!ve.done;ie++,ve=E.next())ve=N(S,ve.value,A),ve!==null&&(v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve);return Pe&&Cn(S,ie),Y}for(ne=a(S,ne);!ve.done;ie++,ve=E.next())ve=B(ne,S,ie,ve.value,A),ve!==null&&(e&&ve.alternate!==null&&ne.delete(ve.key===null?ie:ve.key),v=o(ve,v,ie),te===null?Y=ve:te.sibling=ve,te=ve);return e&&ne.forEach(function(xg){return t(S,xg)}),Pe&&Cn(S,ie),Y}function Ne(S,v,E,A){if(typeof E=="object"&&E!==null&&E.type===de&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case se:e:{for(var Y=E.key,te=v;te!==null;){if(te.key===Y){if(Y=E.type,Y===de){if(te.tag===7){n(S,te.sibling),v=l(te,E.props.children),v.return=S,S=v;break e}}else if(te.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ae&&_u(Y)===te.type){n(S,te.sibling),v=l(te,E.props),v.ref=qr(S,te,E),v.return=S,S=v;break e}n(S,te);break}else t(S,te);te=te.sibling}E.type===de?(v=Nn(E.props.children,S.mode,A,E.key),v.return=S,S=v):(A=hs(E.type,E.key,E.props,null,S.mode,A),A.ref=qr(S,v,E),A.return=S,S=A)}return c(S);case X:e:{for(te=E.key;v!==null;){if(v.key===te)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(S,v.sibling),v=l(v,E.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else t(S,v);v=v.sibling}v=bl(E,S.mode,A),v.return=S,S=v}return c(S);case Ae:return te=E._init,Ne(S,v,te(E._payload),A)}if(Kt(E))return Q(S,v,E,A);if(ee(E))return K(S,v,E,A);Xa(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(S,v.sibling),v=l(v,E),v.return=S,S=v):(n(S,v),v=yl(E,S.mode,A),v.return=S,S=v),c(S)):n(S,v)}return Ne}var ar=Cu(!0),Ru=Cu(!1),Va=an(null),Qa=null,sr=null,Pi=null;function Li(){Pi=sr=Qa=null}function Ti(e){var t=Va.current;Ce(Va),e._currentValue=t}function $i(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Qa=e,Pi=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Qa===null)throw Error(i(308));sr=e,Qa.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Rn=null;function Oi(e){Rn===null?Rn=[e]:Rn.push(e)}function Pu(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,Oi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Bt(e,a)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(he&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Bt(e,n)}return l=a.interleaved,l===null?(t.next=t,Oi(a)):(t.next=l.next,l.next=t),a.interleaved=t,Bt(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vs(e,n)}}function Tu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ja(e,t,n,a){var l=e.updateQueue;on=!1;var o=l.firstBaseUpdate,c=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var h=m,_=h.next;h.next=null,c===null?o=_:c.next=_,c=h;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==c&&(m===null?O.firstBaseUpdate=_:m.next=_,O.lastBaseUpdate=h))}if(o!==null){var N=l.baseState;c=0,O=_=h=null,m=o;do{var T=m.lane,B=m.eventTime;if((a&T)===T){O!==null&&(O=O.next={eventTime:B,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var Q=e,K=m;switch(T=t,B=n,K.tag){case 1:if(Q=K.payload,typeof Q=="function"){N=Q.call(B,N,T);break e}N=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=K.payload,T=typeof Q=="function"?Q.call(B,N,T):Q,T==null)break e;N=M({},N,T);break e;case 2:on=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[m]:T.push(m))}else B={eventTime:B,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(_=O=B,h=N):O=O.next=B,c|=T;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;T=m,m=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(O===null&&(h=N),l.baseState=h,l.firstBaseUpdate=_,l.lastBaseUpdate=O,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Tn|=c,e.lanes=c,e.memoizedState=N}}function $u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(i(191,l));l.call(a)}}}var Wr={},At=an(Wr),Xr=an(Wr),Vr=an(Wr);function Pn(e){if(e===Wr)throw Error(i(174));return e}function Ni(e,t){switch(Se(Vr,t),Se(Xr,e),Se(At,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:As(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=As(t,e)}Ce(At),Se(At,t)}function lr(){Ce(At),Ce(Xr),Ce(Vr)}function Ou(e){Pn(Vr.current);var t=Pn(At.current),n=As(t,e.type);t!==n&&(Se(Xr,e),Se(At,n))}function Ai(e){Xr.current===e&&(Ce(At),Ce(Xr))}var Te=an(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ii=[];function Di(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var Ga=F.ReactCurrentDispatcher,ji=F.ReactCurrentBatchConfig,Ln=0,$e=null,De=null,Me=null,Za=!1,Qr=!1,Kr=0,Hf=0;function Qe(){throw Error(i(321))}function Mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Fi(e,t,n,a,l,o){if(Ln=o,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?Xf:Vf,e=n(a,l),Qr){o=0;do{if(Qr=!1,Kr=0,25<=o)throw Error(i(301));o+=1,Me=De=null,t.updateQueue=null,Ga.current=Qf,e=n(a,l)}while(Qr)}if(Ga.current=ns,t=De!==null&&De.next!==null,Ln=0,Me=De=$e=null,Za=!1,t)throw Error(i(300));return e}function Ui(){var e=Kr!==0;return Kr=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?$e.memoizedState=Me=e:Me=Me.next=e,Me}function xt(){if(De===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Me===null?$e.memoizedState:Me.next;if(t!==null)Me=t,De=e;else{if(e===null)throw Error(i(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?$e.memoizedState=Me=e:Me=Me.next=e}return Me}function Jr(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=xt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=De,l=a.baseQueue,o=n.pending;if(o!==null){if(l!==null){var c=l.next;l.next=o.next,o.next=c}a.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,a=a.baseState;var m=c=null,h=null,_=o;do{var O=_.lane;if((Ln&O)===O)h!==null&&(h=h.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),a=_.hasEagerState?_.eagerState:e(a,_.action);else{var N={lane:O,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};h===null?(m=h=N,c=a):h=h.next=N,$e.lanes|=O,Tn|=O}_=_.next}while(_!==null&&_!==o);h===null?c=a:h.next=m,Ct(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseState=c,t.baseQueue=h,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do o=l.lane,$e.lanes|=o,Tn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bi(e){var t=xt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do o=e(o,c.action),c=c.next;while(c!==l);Ct(o,t.memoizedState)||(st=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function zu(){}function Nu(e,t){var n=$e,a=xt(),l=t(),o=!Ct(a.memoizedState,l);if(o&&(a.memoizedState=l,st=!0),a=a.queue,qi(Du.bind(null,n,a,e),[e]),a.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Yr(9,Iu.bind(null,n,a,l,t),void 0,null),Fe===null)throw Error(i(349));(Ln&30)!==0||Au(n,t,l)}return l}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,a){t.value=n,t.getSnapshot=a,ju(t)&&Mu(e)}function Du(e,t,n){return n(function(){ju(t)&&Mu(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Mu(e){var t=Bt(e,1);t!==null&&$t(t,e,1,-1)}function Fu(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Wf.bind(null,$e,e),[t.memoizedState,e]}function Yr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Uu(){return xt().memoizedState}function es(e,t,n,a){var l=It();$e.flags|=e,l.memoizedState=Yr(1|t,n,void 0,a===void 0?null:a)}function ts(e,t,n,a){var l=xt();a=a===void 0?null:a;var o=void 0;if(De!==null){var c=De.memoizedState;if(o=c.destroy,a!==null&&Mi(a,c.deps)){l.memoizedState=Yr(t,n,o,a);return}}$e.flags|=e,l.memoizedState=Yr(1|t,n,o,a)}function Hu(e,t){return es(8390656,8,e,t)}function qi(e,t){return ts(2048,8,e,t)}function Bu(e,t){return ts(4,2,e,t)}function qu(e,t){return ts(4,4,e,t)}function Wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,n){return n=n!=null?n.concat([e]):null,ts(4,4,Wu.bind(null,t,e),n)}function Wi(){}function Vu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Mi(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Mi(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Ku(e,t,n){return(Ln&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(Ct(n,t)||(n=_o(),$e.lanes|=n,Tn|=n,e.baseState=!0),t)}function Bf(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var a=ji.transition;ji.transition={};try{e(!1),t()}finally{be=n,ji.transition=a}}function Ju(){return xt().memoizedState}function qf(e,t,n){var a=fn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(e))Gu(t,n);else if(n=Pu(e,t,n,a),n!==null){var l=nt();$t(n,e,a,l),Zu(n,t,a)}}function Wf(e,t,n){var a=fn(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Gu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,m=o(c,n);if(l.hasEagerState=!0,l.eagerState=m,Ct(m,c)){var h=t.interleaved;h===null?(l.next=l,Oi(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=Pu(e,t,l,a),n!==null&&(l=nt(),$t(n,e,a,l),Zu(n,t,a))}}function Yu(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function Gu(e,t){Qr=Za=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zu(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vs(e,n)}}var ns={readContext:bt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Xf={readContext:bt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,es(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=It();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=qf.bind(null,$e,e),[a.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Fu,useDebugValue:Wi,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Fu(!1),t=e[0];return e=Bf.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=$e,l=It();if(Pe){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fe===null)throw Error(i(349));(Ln&30)!==0||Au(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Hu(Du.bind(null,a,o,e),[e]),a.flags|=2048,Yr(9,Iu.bind(null,a,o,n,t),void 0,null),n},useId:function(){var e=It(),t=Fe.identifierPrefix;if(Pe){var n=Ht,a=Ut;n=(a&~(1<<32-_t(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:bt,useCallback:Vu,useContext:bt,useEffect:qi,useImperativeHandle:Xu,useInsertionEffect:Bu,useLayoutEffect:qu,useMemo:Qu,useReducer:Hi,useRef:Uu,useState:function(){return Hi(Jr)},useDebugValue:Wi,useDeferredValue:function(e){var t=xt();return Ku(t,De.memoizedState,e)},useTransition:function(){var e=Hi(Jr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Nu,useId:Ju,unstable_isNewReconciler:!1},Qf={readContext:bt,useCallback:Vu,useContext:bt,useEffect:qi,useImperativeHandle:Xu,useInsertionEffect:Bu,useLayoutEffect:qu,useMemo:Qu,useReducer:Bi,useRef:Uu,useState:function(){return Bi(Jr)},useDebugValue:Wi,useDeferredValue:function(e){var t=xt();return De===null?t.memoizedState=e:Ku(t,De.memoizedState,e)},useTransition:function(){var e=Bi(Jr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Nu,useId:Ju,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rs={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),l=fn(e),o=qt(a,l);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,l),t!==null&&($t(t,e,l,a),Ka(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),l=fn(e),o=qt(a,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,l),t!==null&&($t(t,e,l,a),Ka(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=fn(e),l=qt(n,a);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,a),t!==null&&($t(t,e,a,n),Ka(t,e,a))}};function ed(e,t,n,a,l,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,c):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,a)||!Dr(l,o):!0}function td(e,t,n){var a=!1,l=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=bt(o):(l=at(t)?En:Ve.current,a=t.contextTypes,o=(a=a!=null)?er(e,l):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rs,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function nd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=bt(o):(o=at(t)?En:Ve.current,l.context=er(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&rs.enqueueReplaceState(l,l.state,null),Ja(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",a=t;do n+=ge(a),a=a.return;while(a);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ki(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function rd(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){ds||(ds=!0,dl=a),Ki(e,t)},n}function ad(e,t,n){n=qt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Ki(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ki(e,t),typeof a!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function sd(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Kf;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=ug.bind(null,e,t,n),t.then(e,e))}function id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Jf=F.ReactCurrentOwner,st=!1;function tt(e,t,n,a){t.child=e===null?Ru(t,null,n,a):ar(t,e.child,n,a)}function od(e,t,n,a,l){n=n.render;var o=t.ref;return ir(t,l),a=Fi(e,t,n,a,o,l),n=Ui(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(Pe&&n&&Si(t),t.flags|=1,tt(e,t,a,l),t.child)}function ud(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!vl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dd(e,t,o,a,l)):(e=hs(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(c,a)&&e.ref===t.ref)return Wt(e,t,l)}return t.flags|=1,e=mn(o,a),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(Dr(o,a)&&e.ref===t.ref)if(st=!1,t.pendingProps=a=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Wt(e,t,l)}return Ji(e,t,n,a,l)}function cd(e,t,n){var a=t.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(dr,ft),ft|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(dr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,Se(dr,ft),ft|=a}else o!==null?(a=o.baseLanes|n,t.memoizedState=null):a=n,Se(dr,ft),ft|=a;return tt(e,t,l,n),t.child}function pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,a,l){var o=at(n)?En:Ve.current;return o=er(t,o),ir(t,l),n=Fi(e,t,n,a,o,l),a=Ui(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(Pe&&a&&Si(t),t.flags|=1,tt(e,t,n,l),t.child)}function fd(e,t,n,a,l){if(at(n)){var o=!0;Ua(t)}else o=!1;if(ir(t,l),t.stateNode===null)ss(e,t),td(t,n,a),Vi(t,n,a,l),a=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var h=c.context,_=n.contextType;typeof _=="object"&&_!==null?_=bt(_):(_=at(n)?En:Ve.current,_=er(t,_));var O=n.getDerivedStateFromProps,N=typeof O=="function"||typeof c.getSnapshotBeforeUpdate=="function";N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==a||h!==_)&&nd(t,c,a,_),on=!1;var T=t.memoizedState;c.state=T,Ja(t,a,c,l),h=t.memoizedState,m!==a||T!==h||rt.current||on?(typeof O=="function"&&(Xi(t,n,O,a),h=t.memoizedState),(m=on||ed(t,n,m,a,T,h,_))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),c.props=a,c.state=h,c.context=_,a=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Lu(e,t),m=t.memoizedProps,_=t.type===t.elementType?m:Pt(t.type,m),c.props=_,N=t.pendingProps,T=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=bt(h):(h=at(n)?En:Ve.current,h=er(t,h));var B=n.getDerivedStateFromProps;(O=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==N||T!==h)&&nd(t,c,a,h),on=!1,T=t.memoizedState,c.state=T,Ja(t,a,c,l);var Q=t.memoizedState;m!==N||T!==Q||rt.current||on?(typeof B=="function"&&(Xi(t,n,B,a),Q=t.memoizedState),(_=on||ed(t,n,_,a,T,Q,h)||!1)?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,Q,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,Q,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Q),c.props=a,c.state=Q,c.context=h,a=_):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return Yi(e,t,n,a,o,l)}function Yi(e,t,n,a,l,o){pd(e,t);var c=(t.flags&128)!==0;if(!a&&!c)return l&&yu(t,n,!1),Wt(e,t,o);a=t.stateNode,Jf.current=t;var m=c&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&c?(t.child=ar(t,e.child,null,o),t.child=ar(t,null,m,o)):tt(e,t,m,o),t.memoizedState=a.state,l&&yu(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),Ni(e,t.containerInfo)}function md(e,t,n,a,l){return rr(),Ri(l),t.flags|=256,tt(e,t,n,a),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function hd(e,t,n){var a=t.pendingProps,l=Te.current,o=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Se(Te,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=a.children,e=a.fallback,o?(a=t.mode,o=t.child,c={mode:"hidden",children:c},(a&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=vs(c,a,0,null),e=Nn(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zi(n),t.memoizedState=Gi,e):el(t,c));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return Yf(e,t,c,a,m,l,n);if(o){o=a.fallback,c=t.mode,l=e.child,m=l.sibling;var h={mode:"hidden",children:a.children};return(c&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=h,t.deletions=null):(a=mn(l,h),a.subtreeFlags=l.subtreeFlags&14680064),m!==null?o=mn(m,o):(o=Nn(o,c,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,c=e.child.memoizedState,c=c===null?Zi(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,t.memoizedState=Gi,a}return o=e.child,e=o.sibling,a=mn(o,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function el(e,t){return t=vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,a){return a!==null&&Ri(a),ar(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,a,l,o,c){if(n)return t.flags&256?(t.flags&=-257,a=Qi(Error(i(422))),as(e,t,c,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=a.fallback,l=t.mode,a=vs({mode:"visible",children:a.children},l,0,null),o=Nn(o,l,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,(t.mode&1)!==0&&ar(t,e.child,null,c),t.child.memoizedState=Zi(c),t.memoizedState=Gi,o);if((t.mode&1)===0)return as(e,t,c,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var m=a.dgst;return a=m,o=Error(i(419)),a=Qi(o,a,void 0),as(e,t,c,a)}if(m=(c&e.childLanes)!==0,st||m){if(a=Fe,a!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|c))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Bt(e,l),$t(a,e,l,-1))}return hl(),a=Qi(Error(i(421))),as(e,t,c,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=dg.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,pt=rn(l.nextSibling),ct=t,Pe=!0,Rt=null,e!==null&&(vt[yt++]=Ut,vt[yt++]=Ht,vt[yt++]=_n,Ut=e.id,Ht=e.overflow,_n=t),t=el(t,a.children),t.flags|=4096,t)}function vd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),$i(e.return,t,n)}function tl(e,t,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function yd(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;if(tt(e,t,a.children,n),a=Te.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,n,t);else if(e.tag===19)vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Se(Te,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),tl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ya(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}tl(t,!0,n,null,o);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ss(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:gd(t),rr();break;case 5:Ou(t);break;case 1:at(t.type)&&Ua(t);break;case 4:Ni(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Se(Va,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Se(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?hd(e,t,n):(Se(Te,Te.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Se(Te,Te.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return yd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Se(Te,Te.current),a)break;return null;case 22:case 23:return t.lanes=0,cd(e,t,n)}return Wt(e,t,n)}var bd,nl,xd,wd;bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},nl=function(){},xd=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Pn(At.current);var o=null;switch(n){case"input":l=wn(e,l),a=wn(e,a),o=[];break;case"select":l=M({},l,{value:void 0}),a=M({},a,{value:void 0}),o=[];break;case"textarea":l=jt(e,l),a=jt(e,a),o=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ja)}Is(n,a);var c;n=null;for(_ in l)if(!a.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var m=l[_];for(c in m)m.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(d.hasOwnProperty(_)?o||(o=[]):(o=o||[]).push(_,null));for(_ in a){var h=a[_];if(m=l!=null?l[_]:void 0,a.hasOwnProperty(_)&&h!==m&&(h!=null||m!=null))if(_==="style")if(m){for(c in m)!m.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&m[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(o||(o=[]),o.push(_,n)),n=h;else _==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(o=o||[]).push(_,h)):_==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(_,""+h):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(d.hasOwnProperty(_)?(h!=null&&_==="onScroll"&&_e("scroll",e),o||m===h||(o=[])):(o=o||[]).push(_,h))}n&&(o=o||[]).push("style",n);var _=o;(t.updateQueue=_)&&(t.flags|=4)}},wd=function(e,t,n,a){n!==a&&(t.flags|=4)};function Gr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Zf(e,t,n){var a=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return at(t.type)&&Fa(),Ke(t),null;case 3:return a=t.stateNode,lr(),Ce(rt),Ce(Ve),Di(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rt!==null&&(fl(Rt),Rt=null))),nl(e,t),Ke(t),null;case 5:Ai(t);var l=Pn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)xd(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(i(166));return Ke(t),null}if(e=Pn(At.current),Wa(t)){a=t.stateNode,n=t.type;var o=t.memoizedProps;switch(a[Nt]=t,a[Hr]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(l=0;l<Mr.length;l++)_e(Mr[l],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":ht(a,o),_e("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},_e("invalid",a);break;case"textarea":ro(a,o),_e("invalid",a)}Is(n,o),l=null;for(var c in o)if(o.hasOwnProperty(c)){var m=o[c];c==="children"?typeof m=="string"?a.textContent!==m&&(o.suppressHydrationWarning!==!0&&Da(a.textContent,m,e),l=["children",m]):typeof m=="number"&&a.textContent!==""+m&&(o.suppressHydrationWarning!==!0&&Da(a.textContent,m,e),l=["children",""+m]):d.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&_e("scroll",a)}switch(n){case"input":bn(a),St(a,o,!0);break;case"textarea":bn(a),so(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=ja)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),n==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[Nt]=t,e[Hr]=a,bd(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ds(n,a),n){case"dialog":_e("cancel",e),_e("close",e),l=a;break;case"iframe":case"object":case"embed":_e("load",e),l=a;break;case"video":case"audio":for(l=0;l<Mr.length;l++)_e(Mr[l],e);l=a;break;case"source":_e("error",e),l=a;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=a;break;case"details":_e("toggle",e),l=a;break;case"input":ht(e,a),l=wn(e,a),_e("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=M({},a,{value:void 0}),_e("invalid",e);break;case"textarea":ro(e,a),l=jt(e,a),_e("invalid",e);break;default:l=a}Is(n,l),m=l;for(o in m)if(m.hasOwnProperty(o)){var h=m[o];o==="style"?uo(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&lo(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&xr(e,h):typeof h=="number"&&xr(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(d.hasOwnProperty(o)?h!=null&&o==="onScroll"&&_e("scroll",e):h!=null&&W(e,o,h,c))}switch(n){case"input":bn(e),St(e,a,!1);break;case"textarea":bn(e),so(e);break;case"option":a.value!=null&&e.setAttribute("value",""+me(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Jt(e,!!a.multiple,o,!1):a.defaultValue!=null&&Jt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)wd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(i(166));if(n=Pn(Vr.current),Pn(At.current),Wa(t)){if(a=t.stateNode,n=t.memoizedProps,a[Nt]=t,(o=a.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Da(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Da(a.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Nt]=t,t.stateNode=a}return Ke(t),null;case 13:if(Ce(Te),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Eu(),rr(),t.flags|=98560,o=!1;else if(o=Wa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(i(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(i(317));o[Nt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Rt!==null&&(fl(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?je===0&&(je=3):hl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return lr(),nl(e,t),e===null&&Fr(t.stateNode.containerInfo),Ke(t),null;case 10:return Ti(t.type._context),Ke(t),null;case 17:return at(t.type)&&Fa(),Ke(t),null;case 19:if(Ce(Te),o=t.memoizedState,o===null)return Ke(t),null;if(a=(t.flags&128)!==0,c=o.rendering,c===null)if(a)Gr(o,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ya(e),c!==null){for(t.flags|=128,Gr(o,!1),a=c.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)o=n,e=a,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>cr&&(t.flags|=128,a=!0,Gr(o,!1),t.lanes=4194304)}else{if(!a)if(e=Ya(c),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Pe)return Ke(t),null}else 2*ze()-o.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,a=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(n=o.last,n!==null?n.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Te.current,Se(Te,a?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ml(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function eg(e,t){switch(Ei(t),t.tag){case 1:return at(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),Ce(rt),Ce(Ve),Di(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ai(t),null;case 13:if(Ce(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Te),null;case 4:return lr(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return ml(),null;case 24:return null;default:return null}}var is=!1,Je=!1,tg=typeof WeakSet=="function"?WeakSet:Set,V=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Oe(e,t,a)}else n.current=null}function rl(e,t,n){try{n()}catch(a){Oe(e,t,a)}}var kd=!1;function ng(e,t){if(mi=Ca,e=eu(),li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,m=-1,h=-1,_=0,O=0,N=e,T=null;t:for(;;){for(var B;N!==n||l!==0&&N.nodeType!==3||(m=c+l),N!==o||a!==0&&N.nodeType!==3||(h=c+a),N.nodeType===3&&(c+=N.nodeValue.length),(B=N.firstChild)!==null;)T=N,N=B;for(;;){if(N===e)break t;if(T===n&&++_===l&&(m=c),T===o&&++O===a&&(h=c),(B=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=B}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Ca=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var K=Q.memoizedProps,Ne=Q.memoizedState,S=t.stateNode,v=S.getSnapshotBeforeUpdate(t.elementType===t.type?K:Pt(t.type,K),Ne);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(A){Oe(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return Q=kd,kd=!1,Q}function Zr(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&rl(t,n,o)}l=l.next}while(l!==a)}}function ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Hr],delete t[xi],delete t[jf],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ja));else if(a!==4&&(e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}function il(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}var qe=null,Lt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Cd(e,t,n),n=n.sibling}function Cd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:Je||ur(n,t);case 6:var a=qe,l=Lt;qe=null,dn(e,t,n),qe=a,Lt=l,qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),$r(e)):bi(qe,n.stateNode));break;case 4:a=qe,l=Lt,qe=n.stateNode.containerInfo,Lt=!0,dn(e,t,n),qe=a,Lt=l;break;case 0:case 11:case 14:case 15:if(!Je&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var o=l,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&rl(n,t,c),l=l.next}while(l!==a)}dn(e,t,n);break;case 1:if(!Je&&(ur(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(m){Oe(n,t,m)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Je=(a=Je)||n.memoizedState!==null,dn(e,t,n),Je=a):dn(e,t,n);break;default:dn(e,t,n)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tg),t.forEach(function(a){var l=cg.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var o=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:qe=m.stateNode,Lt=!1;break e;case 3:qe=m.stateNode.containerInfo,Lt=!0;break e;case 4:qe=m.stateNode.containerInfo,Lt=!0;break e}m=m.return}if(qe===null)throw Error(i(160));Cd(o,c,l),qe=null,Lt=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(_){Oe(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),a&4){try{Zr(3,e,e.return),ls(3,e)}catch(K){Oe(e,e.return,K)}try{Zr(5,e,e.return)}catch(K){Oe(e,e.return,K)}}break;case 1:Tt(t,e),Dt(e),a&512&&n!==null&&ur(n,n.return);break;case 5:if(Tt(t,e),Dt(e),a&512&&n!==null&&ur(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(K){Oe(e,e.return,K)}}if(a&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&o.type==="radio"&&o.name!=null&&oe(l,o),Ds(m,c);var _=Ds(m,o);for(c=0;c<h.length;c+=2){var O=h[c],N=h[c+1];O==="style"?uo(l,N):O==="dangerouslySetInnerHTML"?lo(l,N):O==="children"?xr(l,N):W(l,O,N,_)}switch(m){case"input":Be(l,o);break;case"textarea":ao(l,o);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var B=o.value;B!=null?Jt(l,!!o.multiple,B,!1):T!==!!o.multiple&&(o.defaultValue!=null?Jt(l,!!o.multiple,o.defaultValue,!0):Jt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Hr]=o}catch(K){Oe(e,e.return,K)}}break;case 6:if(Tt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(K){Oe(e,e.return,K)}}break;case 3:if(Tt(t,e),Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(K){Oe(e,e.return,K)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ul=ze())),a&4&&Rd(e);break;case 22:if(O=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(_=Je)||O,Tt(t,e),Je=_):Tt(t,e),Dt(e),a&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!O&&(e.mode&1)!==0)for(V=e,O=e.child;O!==null;){for(N=V=O;V!==null;){switch(T=V,B=T.child,T.tag){case 0:case 11:case 14:case 15:Zr(4,T,T.return);break;case 1:ur(T,T.return);var Q=T.stateNode;if(typeof Q.componentWillUnmount=="function"){a=T,n=T.return;try{t=a,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(K){Oe(a,n,K)}}break;case 5:ur(T,T.return);break;case 22:if(T.memoizedState!==null){$d(N);continue}}B!==null?(B.return=T,V=B):$d(N)}O=O.sibling}e:for(O=null,N=e;;){if(N.tag===5){if(O===null){O=N;try{l=N.stateNode,_?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(m=N.stateNode,h=N.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=oo("display",c))}catch(K){Oe(e,e.return,K)}}}else if(N.tag===6){if(O===null)try{N.stateNode.nodeValue=_?"":N.memoizedProps}catch(K){Oe(e,e.return,K)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;O===N&&(O=null),N=N.return}O===N&&(O=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Tt(t,e),Dt(e),a&4&&Rd(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var a=n;break e}n=n.return}throw Error(i(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(xr(l,""),a.flags&=-33);var o=_d(e);il(e,o,l);break;case 3:case 4:var c=a.stateNode.containerInfo,m=_d(e);sl(e,m,c);break;default:throw Error(i(161))}}catch(h){Oe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rg(e,t,n){V=e,Ld(e)}function Ld(e,t,n){for(var a=(e.mode&1)!==0;V!==null;){var l=V,o=l.child;if(l.tag===22&&a){var c=l.memoizedState!==null||is;if(!c){var m=l.alternate,h=m!==null&&m.memoizedState!==null||Je;m=is;var _=Je;if(is=c,(Je=h)&&!_)for(V=l;V!==null;)c=V,h=c.child,c.tag===22&&c.memoizedState!==null?Od(l):h!==null?(h.return=c,V=h):Od(l);for(;o!==null;)V=o,Ld(o),o=o.sibling;V=l,is=m,Je=_}Td(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,V=o):Td(e)}}function Td(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||ls(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Je)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$u(t,o,a);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$u(t,c,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var O=_.memoizedState;if(O!==null){var N=O.dehydrated;N!==null&&$r(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Je||t.flags&512&&al(t)}catch(T){Oe(t,t.return,T)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function $d(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Od(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ls(4,t)}catch(h){Oe(t,n,h)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(h){Oe(t,l,h)}}var o=t.return;try{al(t)}catch(h){Oe(t,o,h)}break;case 5:var c=t.return;try{al(t)}catch(h){Oe(t,c,h)}}}catch(h){Oe(t,t.return,h)}if(t===e){V=null;break}var m=t.sibling;if(m!==null){m.return=t.return,V=m;break}V=t.return}}var ag=Math.ceil,os=F.ReactCurrentDispatcher,ll=F.ReactCurrentOwner,wt=F.ReactCurrentBatchConfig,he=0,Fe=null,Ie=null,We=0,ft=0,dr=an(0),je=0,ea=null,Tn=0,us=0,ol=0,ta=null,it=null,ul=0,cr=1/0,Xt=null,ds=!1,dl=null,cn=null,cs=!1,pn=null,ps=0,na=0,cl=null,fs=-1,gs=0;function nt(){return(he&6)!==0?ze():fs!==-1?fs:fs=ze()}function fn(e){return(e.mode&1)===0?1:(he&2)!==0&&We!==0?We&-We:Uf.transition!==null?(gs===0&&(gs=_o()),gs):(e=be,e!==0||(e=window.event,e=e===void 0?16:No(e.type)),e)}function $t(e,t,n,a){if(50<na)throw na=0,cl=null,Error(i(185));Cr(e,n,a),((he&2)===0||e!==Fe)&&(e===Fe&&((he&2)===0&&(us|=n),je===4&&gn(e,We)),lt(e,a),n===1&&he===0&&(t.mode&1)===0&&(cr=ze()+500,Ha&&ln()))}function lt(e,t){var n=e.callbackNode;Fp(e,t);var a=Sa(e,e===Fe?We:0);if(a===0)n!==null&&ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&ko(n),t===1)e.tag===0?Ff(Nd.bind(null,e)):bu(Nd.bind(null,e)),If(function(){(he&6)===0&&ln()}),n=null;else{switch(Co(a)){case 1:n=qs;break;case 4:n=So;break;case 16:n=ba;break;case 536870912:n=Eo;break;default:n=ba}n=Hd(n,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zd(e,t){if(fs=-1,gs=0,(he&6)!==0)throw Error(i(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var a=Sa(e,e===Fe?We:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=ms(e,a);else{t=a;var l=he;he|=2;var o=Id();(Fe!==e||We!==t)&&(Xt=null,cr=ze()+500,On(e,t));do try{lg();break}catch(m){Ad(e,m)}while(!0);Li(),os.current=o,he=l,Ie!==null?t=0:(Fe=null,We=0,t=je)}if(t!==0){if(t===2&&(l=Ws(e),l!==0&&(a=l,t=pl(e,l))),t===1)throw n=ea,On(e,0),gn(e,a),lt(e,ze()),n;if(t===6)gn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!sg(l)&&(t=ms(e,a),t===2&&(o=Ws(e),o!==0&&(a=o,t=pl(e,o))),t===1))throw n=ea,On(e,0),gn(e,a),lt(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(i(345));case 2:zn(e,it,Xt);break;case 3:if(gn(e,a),(a&130023424)===a&&(t=ul+500-ze(),10<t)){if(Sa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){nt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(zn.bind(null,e,it,Xt),t);break}zn(e,it,Xt);break;case 4:if(gn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var c=31-_t(a);o=1<<c,c=t[c],c>l&&(l=c),a&=~o}if(a=l,a=ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ag(a/1960))-a,10<a){e.timeoutHandle=yi(zn.bind(null,e,it,Xt),a);break}zn(e,it,Xt);break;case 5:zn(e,it,Xt);break;default:throw Error(i(329))}}}return lt(e,ze()),e.callbackNode===n?zd.bind(null,e):null}function pl(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=ms(e,t),e!==2&&(t=it,it=n,t!==null&&fl(t)),e}function fl(e){it===null?it=e:it.push.apply(it,e)}function sg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!Ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~ol,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),a=1<<n;e[n]=-1,t&=~a}}function Nd(e){if((he&6)!==0)throw Error(i(327));pr();var t=Sa(e,0);if((t&1)===0)return lt(e,ze()),null;var n=ms(e,t);if(e.tag!==0&&n===2){var a=Ws(e);a!==0&&(t=a,n=pl(e,a))}if(n===1)throw n=ea,On(e,0),gn(e,t),lt(e,ze()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,it,Xt),lt(e,ze()),null}function gl(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(cr=ze()+500,Ha&&ln())}}function $n(e){pn!==null&&pn.tag===0&&(he&6)===0&&pr();var t=he;he|=1;var n=wt.transition,a=be;try{if(wt.transition=null,be=1,e)return e()}finally{be=a,wt.transition=n,he=t,(he&6)===0&&ln()}}function ml(){ft=dr.current,Ce(dr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Af(n)),Ie!==null)for(n=Ie.return;n!==null;){var a=n;switch(Ei(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Fa();break;case 3:lr(),Ce(rt),Ce(Ve),Di();break;case 5:Ai(a);break;case 4:lr();break;case 13:Ce(Te);break;case 19:Ce(Te);break;case 10:Ti(a.type._context);break;case 22:case 23:ml()}n=n.return}if(Fe=e,Ie=e=mn(e.current,null),We=ft=t,je=0,ea=null,ol=us=Tn=0,it=ta=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,o=n.pending;if(o!==null){var c=o.next;o.next=l,a.next=c}n.pending=a}Rn=null}return e}function Ad(e,t){do{var n=Ie;try{if(Li(),Ga.current=ns,Za){for(var a=$e.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Za=!1}if(Ln=0,Me=De=$e=null,Qr=!1,Kr=0,ll.current=null,n===null||n.return===null){je=1,ea=t,Ie=null;break}e:{var o=e,c=n.return,m=n,h=t;if(t=We,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=h,O=m,N=O.tag;if((O.mode&1)===0&&(N===0||N===11||N===15)){var T=O.alternate;T?(O.updateQueue=T.updateQueue,O.memoizedState=T.memoizedState,O.lanes=T.lanes):(O.updateQueue=null,O.memoizedState=null)}var B=id(c);if(B!==null){B.flags&=-257,ld(B,c,m,o,t),B.mode&1&&sd(o,_,t),t=B,h=_;var Q=t.updateQueue;if(Q===null){var K=new Set;K.add(h),t.updateQueue=K}else Q.add(h);break e}else{if((t&1)===0){sd(o,_,t),hl();break e}h=Error(i(426))}}else if(Pe&&m.mode&1){var Ne=id(c);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),ld(Ne,c,m,o,t),Ri(or(h,m));break e}}o=h=or(h,m),je!==4&&(je=2),ta===null?ta=[o]:ta.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var S=rd(o,h,t);Tu(o,S);break e;case 1:m=h;var v=o.type,E=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cn===null||!cn.has(E)))){o.flags|=65536,t&=-t,o.lanes|=t;var A=ad(o,m,t);Tu(o,A);break e}}o=o.return}while(o!==null)}jd(n)}catch(Y){t=Y,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Id(){var e=os.current;return os.current=ns,e===null?ns:e}function hl(){(je===0||je===3||je===2)&&(je=4),Fe===null||(Tn&268435455)===0&&(us&268435455)===0||gn(Fe,We)}function ms(e,t){var n=he;he|=2;var a=Id();(Fe!==e||We!==t)&&(Xt=null,On(e,t));do try{ig();break}catch(l){Ad(e,l)}while(!0);if(Li(),he=n,os.current=a,Ie!==null)throw Error(i(261));return Fe=null,We=0,je}function ig(){for(;Ie!==null;)Dd(Ie)}function lg(){for(;Ie!==null&&!$p();)Dd(Ie)}function Dd(e){var t=Ud(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?jd(e):Ie=t,ll.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Zf(n,t,ft),n!==null){Ie=n;return}}else{if(n=eg(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);je===0&&(je=5)}function zn(e,t,n){var a=be,l=wt.transition;try{wt.transition=null,be=1,og(e,t,n,a)}finally{wt.transition=l,be=a}return null}function og(e,t,n,a){do pr();while(pn!==null);if((he&6)!==0)throw Error(i(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Up(e,o),e===Fe&&(Ie=Fe=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||cs||(cs=!0,Hd(ba,function(){return pr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=wt.transition,wt.transition=null;var c=be;be=1;var m=he;he|=4,ll.current=null,ng(e,n),Pd(n,e),Pf(hi),Ca=!!mi,hi=mi=null,e.current=n,rg(n),Op(),he=m,be=c,wt.transition=o}else e.current=n;if(cs&&(cs=!1,pn=e,ps=l),o=e.pendingLanes,o===0&&(cn=null),Ap(n.stateNode),lt(e,ze()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(ds)throw ds=!1,e=dl,dl=null,e;return(ps&1)!==0&&e.tag!==0&&pr(),o=e.pendingLanes,(o&1)!==0?e===cl?na++:(na=0,cl=e):na=0,ln(),null}function pr(){if(pn!==null){var e=Co(ps),t=wt.transition,n=be;try{if(wt.transition=null,be=16>e?16:e,pn===null)var a=!1;else{if(e=pn,pn=null,ps=0,(he&6)!==0)throw Error(i(331));var l=he;for(he|=4,V=e.current;V!==null;){var o=V,c=o.child;if((V.flags&16)!==0){var m=o.deletions;if(m!==null){for(var h=0;h<m.length;h++){var _=m[h];for(V=_;V!==null;){var O=V;switch(O.tag){case 0:case 11:case 15:Zr(8,O,o)}var N=O.child;if(N!==null)N.return=O,V=N;else for(;V!==null;){O=V;var T=O.sibling,B=O.return;if(Sd(O),O===_){V=null;break}if(T!==null){T.return=B,V=T;break}V=B}}}var Q=o.alternate;if(Q!==null){var K=Q.child;if(K!==null){Q.child=null;do{var Ne=K.sibling;K.sibling=null,K=Ne}while(K!==null)}}V=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,V=c;else e:for(;V!==null;){if(o=V,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,V=S;break e}V=o.return}}var v=e.current;for(V=v;V!==null;){c=V;var E=c.child;if((c.subtreeFlags&2064)!==0&&E!==null)E.return=c,V=E;else e:for(c=v;V!==null;){if(m=V,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ls(9,m)}}catch(Y){Oe(m,m.return,Y)}if(m===c){V=null;break e}var A=m.sibling;if(A!==null){A.return=m.return,V=A;break e}V=m.return}}if(he=l,ln(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(xa,e)}catch{}a=!0}return a}finally{be=n,wt.transition=t}}return!1}function Md(e,t,n){t=or(n,t),t=rd(e,t,1),e=un(e,t,1),t=nt(),e!==null&&(Cr(e,1,t),lt(e,t))}function Oe(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(cn===null||!cn.has(a))){e=or(n,e),e=ad(t,e,1),t=un(t,e,1),e=nt(),t!==null&&(Cr(t,1,e),lt(t,e));break}}t=t.return}}function ug(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(We&n)===n&&(je===4||je===3&&(We&130023424)===We&&500>ze()-ul?On(e,0):ol|=n),lt(e,t)}function Fd(e,t){t===0&&((e.mode&1)===0?t=1:(t=ka,ka<<=1,(ka&130023424)===0&&(ka=4194304)));var n=nt();e=Bt(e,t),e!==null&&(Cr(e,t,n),lt(e,n))}function dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fd(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(t),Fd(e,n)}var Ud;Ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,Gf(e,t,n);st=(e.flags&131072)!==0}else st=!1,Pe&&(t.flags&1048576)!==0&&xu(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ss(e,t),e=t.pendingProps;var l=er(t,Ve.current);ir(t,n),l=Fi(null,t,a,e,l,n);var o=Ui();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(a)?(o=!0,Ua(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zi(t),l.updater=rs,t.stateNode=l,l._reactInternals=t,Vi(t,a,e,n),t=Yi(null,t,a,!0,o,n)):(t.tag=0,Pe&&o&&Si(t),tt(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ss(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=fg(a),e=Pt(a,e),l){case 0:t=Ji(null,t,a,e,n);break e;case 1:t=fd(null,t,a,e,n);break e;case 11:t=od(null,t,a,e,n);break e;case 14:t=ud(null,t,a,Pt(a.type,e),n);break e}throw Error(i(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),Ji(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),fd(e,t,a,l,n);case 3:e:{if(gd(t),e===null)throw Error(i(387));a=t.pendingProps,o=t.memoizedState,l=o.element,Lu(e,t),Ja(t,a,null,n);var c=t.memoizedState;if(a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=or(Error(i(423)),t),t=md(e,t,a,n,l);break e}else if(a!==l){l=or(Error(i(424)),t),t=md(e,t,a,n,l);break e}else for(pt=rn(t.stateNode.containerInfo.firstChild),ct=t,Pe=!0,Rt=null,n=Ru(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),a===l){t=Wt(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Ci(t),a=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,c=l.children,vi(a,l)?c=null:o!==null&&vi(a,o)&&(t.flags|=32),pd(e,t),tt(e,t,c,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return hd(e,t,n);case 4:return Ni(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ar(t,null,a,n):tt(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),od(e,t,a,l,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,o=t.memoizedProps,c=l.value,Se(Va,a._currentValue),a._currentValue=c,o!==null)if(Ct(o.value,c)){if(o.children===l.children&&!rt.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var m=o.dependencies;if(m!==null){c=o.child;for(var h=m.firstContext;h!==null;){if(h.context===a){if(o.tag===1){h=qt(-1,n&-n),h.tag=2;var _=o.updateQueue;if(_!==null){_=_.shared;var O=_.pending;O===null?h.next=h:(h.next=O.next,O.next=h),_.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),$i(o.return,n,t),m.lanes|=n;break}h=h.next}}else if(o.tag===10)c=o.type===t.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(i(341));c.lanes|=n,m=c.alternate,m!==null&&(m.lanes|=n),$i(c,n,t),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===t){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}tt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ir(t,n),l=bt(l),a=a(l),t.flags|=1,tt(e,t,a,n),t.child;case 14:return a=t.type,l=Pt(a,t.pendingProps),l=Pt(a.type,l),ud(e,t,a,l,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),ss(e,t),t.tag=1,at(a)?(e=!0,Ua(t)):e=!1,ir(t,n),td(t,a,l),Vi(t,a,l,n),Yi(null,t,a,!0,e,n);case 19:return yd(e,t,n);case 22:return cd(e,t,n)}throw Error(i(156,t.tag))};function Hd(e,t){return wo(e,t)}function pg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,a){return new pg(e,t,n,a)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fg(e){if(typeof e=="function")return vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ye)return 11;if(e===Ze)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hs(e,t,n,a,l,o){var c=2;if(a=e,typeof e=="function")vl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case de:return Nn(n.children,l,o,t);case re:c=8,l|=8;break;case ae:return e=kt(12,n,t,l|2),e.elementType=ae,e.lanes=o,e;case Re:return e=kt(13,n,t,l),e.elementType=Re,e.lanes=o,e;case Ee:return e=kt(19,n,t,l),e.elementType=Ee,e.lanes=o,e;case ke:return vs(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case Z:c=9;break e;case ye:c=11;break e;case Ze:c=14;break e;case Ae:c=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=kt(c,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function Nn(e,t,n,a){return e=kt(7,e,a,t),e.lanes=n,e}function vs(e,t,n,a){return e=kt(22,e,a,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xl(e,t,n,a,l,o,c,m,h){return e=new gg(e,t,n,m,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(o),e}function mg(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Bd(e){if(!e)return sn;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(at(n))return vu(e,n,t)}return t}function qd(e,t,n,a,l,o,c,m,h){return e=xl(n,a,!0,e,l,o,c,m,h),e.context=Bd(null),n=e.current,a=nt(),l=fn(n),o=qt(a,l),o.callback=t??null,un(n,o,l),e.current.lanes=l,Cr(e,l,a),lt(e,a),e}function ys(e,t,n,a){var l=t.current,o=nt(),c=fn(l);return n=Bd(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,c),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=un(l,t,c),e!==null&&($t(e,l,c,o),Ka(e,l,c)),c}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wl(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function hg(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function kl(e){this._internalRoot=e}xs.prototype.render=kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));ys(e,t,null,null)},xs.prototype.unmount=kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ys(null,e,null,null)}),t[Mt]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Oo(e)}};function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function vg(e,t,n,a,l){if(l){if(typeof a=="function"){var o=a;a=function(){var _=bs(c);o.call(_)}}var c=qd(t,a,e,0,null,!1,!1,"",Vd);return e._reactRootContainer=c,e[Mt]=c.current,Fr(e.nodeType===8?e.parentNode:e),$n(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var m=a;a=function(){var _=bs(h);m.call(_)}}var h=xl(e,0,!1,null,null,!1,!1,"",Vd);return e._reactRootContainer=h,e[Mt]=h.current,Fr(e.nodeType===8?e.parentNode:e),$n(function(){ys(t,h,n,a)}),h}function ks(e,t,n,a,l){var o=n._reactRootContainer;if(o){var c=o;if(typeof l=="function"){var m=l;l=function(){var h=bs(c);m.call(h)}}ys(t,c,e,l)}else c=vg(n,t,e,l,a);return bs(c)}Ro=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_r(t.pendingLanes);n!==0&&(Vs(t,n|1),lt(t,ze()),(he&6)===0&&(cr=ze()+500,ln()))}break;case 13:$n(function(){var a=Bt(e,1);if(a!==null){var l=nt();$t(a,e,1,l)}}),wl(e,1)}},Qs=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=nt();$t(t,e,134217728,n)}wl(e,134217728)}},Po=function(e){if(e.tag===13){var t=fn(e),n=Bt(e,t);if(n!==null){var a=nt();$t(n,e,t,a)}wl(e,t)}},Lo=function(){return be},To=function(e,t){var n=be;try{return be=e,t()}finally{be=n}},Fs=function(e,t,n){switch(t){case"input":if(Be(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=Ma(a);if(!l)throw Error(i(90));mt(a),Be(a,l)}}}break;case"textarea":ao(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}},go=gl,mo=$n;var yg={usingClientEntryPoint:!1,Events:[Br,Gn,Ma,po,fo,gl]},ra={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bg={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bo(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{xa=Ss.inject(bg),zt=Ss}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yg,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sl(t))throw Error(i(200));return mg(e,t,null,n)},ot.createRoot=function(e,t){if(!Sl(e))throw Error(i(299));var n=!1,a="",l=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=xl(e,1,!1,null,null,n,!1,a,l),e[Mt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new kl(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=bo(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return $n(e)},ot.hydrate=function(e,t,n){if(!ws(t))throw Error(i(200));return ks(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!Sl(e))throw Error(i(405));var a=n!=null&&n.hydratedSources||null,l=!1,o="",c=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=qd(t,null,e,1,n??null,l,!1,o,c),e[Mt]=t.current,Fr(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xs(t)},ot.render=function(e,t,n){if(!ws(t))throw Error(i(200));return ks(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!ws(e))throw Error(i(40));return e._reactRootContainer?($n(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},ot.unstable_batchedUpdates=gl,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!ws(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ks(e,t,n,!1,a)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var tc;function Rg(){if(tc)return Cl.exports;tc=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Cl.exports=Cg(),Cl.exports}var nc;function Pg(){if(nc)return Es;nc=1;var r=Rg();return Es.createRoot=r.createRoot,Es.hydrateRoot=r.hydrateRoot,Es}var Lg=Pg();const Tg=Tc(Lg);function $c(r,s){return function(){return r.apply(s,arguments)}}const{toString:$g}=Object.prototype,{getPrototypeOf:hr}=Object,{iterator:pa,toStringTag:Oc}=Symbol,Ls=(({hasOwnProperty:r})=>(s,i)=>r.call(s,i))(Object.prototype),da=(r,s)=>{let i=r;const u=[];for(;i!=null&&i!==Object.prototype;){if(u.indexOf(i)!==-1)return!1;if(u.push(i),Ls(i,s))return!0;i=hr(i)}return!1},Og=(r,s)=>r!=null&&da(r,s)?r[s]:void 0,Vl=(r=>s=>{const i=$g.call(s);return r[i]||(r[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ot=r=>(r=r.toLowerCase(),s=>Vl(s)===r),Os=r=>s=>typeof s===r,{isArray:Mn}=Array,vr=Os("undefined");function yr(r){return r!==null&&!vr(r)&&r.constructor!==null&&!vr(r.constructor)&&ut(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const zc=Ot("ArrayBuffer");function zg(r){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(r):s=r&&r.buffer&&zc(r.buffer),s}const Ng=Os("string"),ut=Os("function"),Nc=Os("number"),br=r=>r!==null&&typeof r=="object",Ag=r=>r===!0||r===!1,Cs=r=>{if(!br(r))return!1;const s=hr(r);return(s===null||s===Object.prototype||hr(s)===null)&&!da(r,Oc)&&!da(r,pa)},Ig=r=>{if(!br(r)||yr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Dg=Ot("Date"),jg=Ot("File"),Mg=r=>!!(r&&typeof r.uri<"u"),Fg=r=>r&&typeof r.getParts<"u",Ug=Ot("Blob"),Hg=Ot("FileList"),Bg=r=>br(r)&&ut(r.pipe);function qg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const rc=qg(),ac=typeof rc.FormData<"u"?rc.FormData:void 0,Wg=r=>{if(!r)return!1;if(ac&&r instanceof ac)return!0;const s=hr(r);if(!s||s===Object.prototype||!ut(r.append))return!1;const i=Vl(r);return i==="formdata"||i==="object"&&ut(r.toString)&&r.toString()==="[object FormData]"},Xg=Ot("URLSearchParams"),[Vg,Qg,Kg,Jg]=["ReadableStream","Request","Response","Headers"].map(Ot),Yg=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fa(r,s,{allOwnKeys:i=!1}={}){if(r===null||typeof r>"u")return;let u,d;if(typeof r!="object"&&(r=[r]),Mn(r))for(u=0,d=r.length;u<d;u++)s.call(null,r[u],u,r);else{if(yr(r))return;const p=i?Object.getOwnPropertyNames(r):Object.keys(r),f=p.length;let g;for(u=0;u<f;u++)g=p[u],s.call(null,r[g],g,r)}}function Ac(r,s){if(yr(r))return null;s=s.toLowerCase();const i=Object.keys(r);let u=i.length,d;for(;u-- >0;)if(d=i[u],s===d.toLowerCase())return d;return null}const An=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ic=r=>!vr(r)&&r!==An;function Dl(...r){const{caseless:s,skipUndefined:i}=Ic(this)&&this||{},u={},d=(p,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const g=s&&typeof f=="string"&&Ac(u,f)||f,b=Ls(u,g)?u[g]:void 0;Cs(b)&&Cs(p)?u[g]=Dl(b,p):Cs(p)?u[g]=Dl({},p):Mn(p)?u[g]=p.slice():(!i||!vr(p))&&(u[g]=p)};for(let p=0,f=r.length;p<f;p++){const g=r[p];if(!g||yr(g)||(fa(g,d),typeof g!="object"||Mn(g)))continue;const b=Object.getOwnPropertySymbols(g);for(let k=0;k<b.length;k++){const x=b[k];um.call(g,x)&&d(g[x],x)}}return u}const Gg=(r,s,i,{allOwnKeys:u}={})=>(fa(s,(d,p)=>{i&&ut(d)?Object.defineProperty(r,p,{__proto__:null,value:$c(d,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,p,{__proto__:null,value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:u}),r),Zg=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),em=(r,s,i,u)=>{r.prototype=Object.create(s.prototype,u),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:s.prototype}),i&&Object.assign(r.prototype,i)},tm=(r,s,i,u)=>{let d,p,f;const g={};if(s=s||{},r==null)return s;do{for(d=Object.getOwnPropertyNames(r),p=d.length;p-- >0;)f=d[p],(!u||u(f,r,s))&&!g[f]&&(s[f]=r[f],g[f]=!0);r=i!==!1&&hr(r)}while(r&&(!i||i(r,s))&&r!==Object.prototype);return s},nm=(r,s,i)=>{r=String(r),(i===void 0||i>r.length)&&(i=r.length),i-=s.length;const u=r.indexOf(s,i);return u!==-1&&u===i},rm=r=>{if(!r)return null;if(Mn(r))return r;let s=r.length;if(!Nc(s))return null;const i=new Array(s);for(;s-- >0;)i[s]=r[s];return i},am=(r=>s=>r&&s instanceof r)(typeof Uint8Array<"u"&&hr(Uint8Array)),sm=(r,s)=>{const u=(r&&r[pa]).call(r);let d;for(;(d=u.next())&&!d.done;){const p=d.value;s.call(r,p[0],p[1])}},im=(r,s)=>{let i;const u=[];for(;(i=r.exec(s))!==null;)u.push(i);return u},lm=Ot("HTMLFormElement"),om=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,u,d){return u.toUpperCase()+d}),{propertyIsEnumerable:um}=Object.prototype,dm=Ot("RegExp"),Dc=(r,s)=>{const i=Object.getOwnPropertyDescriptors(r),u={};fa(i,(d,p)=>{let f;(f=s(d,p,r))!==!1&&(u[p]=f||d)}),Object.defineProperties(r,u)},cm=r=>{Dc(r,(s,i)=>{if(ut(r)&&["arguments","caller","callee"].includes(i))return!1;const u=r[i];if(ut(u)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},pm=(r,s)=>{const i={},u=d=>{d.forEach(p=>{i[p]=!0})};return Mn(r)?u(r):u(String(r).split(s)),i},fm=()=>{},gm=(r,s)=>r!=null&&Number.isFinite(r=+r)?r:s;function mm(r){return!!(r&&ut(r.append)&&r[Oc]==="FormData"&&r[pa])}const hm=r=>{const s=new WeakSet,i=u=>{if(br(u)){if(s.has(u))return;if(yr(u))return u;if(!("toJSON"in u)){s.add(u);const d=Mn(u)?[]:{};return fa(u,(p,f)=>{const g=i(p);!vr(g)&&(d[f]=g)}),s.delete(u),d}}return u};return i(r)},vm=Ot("AsyncFunction"),ym=r=>r&&(br(r)||ut(r))&&ut(r.then)&&ut(r.catch),jc=((r,s)=>r?setImmediate:s?((i,u)=>(An.addEventListener("message",({source:d,data:p})=>{d===An&&p===i&&u.length&&u.shift()()},!1),d=>{u.push(d),An.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",ut(An.postMessage)),bm=typeof queueMicrotask<"u"?queueMicrotask.bind(An):typeof process<"u"&&process.nextTick||jc,Mc=r=>r!=null&&ut(r[pa]),xm=r=>r!=null&&da(r,pa)&&Mc(r),y={isArray:Mn,isArrayBuffer:zc,isBuffer:yr,isFormData:Wg,isArrayBufferView:zg,isString:Ng,isNumber:Nc,isBoolean:Ag,isObject:br,isPlainObject:Cs,isEmptyObject:Ig,isReadableStream:Vg,isRequest:Qg,isResponse:Kg,isHeaders:Jg,isUndefined:vr,isDate:Dg,isFile:jg,isReactNativeBlob:Mg,isReactNative:Fg,isBlob:Ug,isRegExp:dm,isFunction:ut,isStream:Bg,isURLSearchParams:Xg,isTypedArray:am,isFileList:Hg,forEach:fa,merge:Dl,extend:Gg,trim:Yg,stripBOM:Zg,inherits:em,toFlatObject:tm,kindOf:Vl,kindOfTest:Ot,endsWith:nm,toArray:rm,forEachEntry:sm,matchAll:im,isHTMLForm:lm,hasOwnProperty:Ls,hasOwnProp:Ls,hasOwnInPrototypeChain:da,getSafeProp:Og,reduceDescriptors:Dc,freezeMethods:cm,toObjectSet:pm,toCamelCase:om,noop:fm,toFiniteNumber:gm,findKey:Ac,global:An,isContextDefined:Ic,isSpecCompliantForm:mm,toJSONObject:hm,isAsyncFn:vm,isThenable:ym,setImmediate:jc,asap:bm,isIterable:Mc,isSafeIterable:xm},wm=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),km=r=>{const s={};let i,u,d;return r&&r.split(`
`).forEach(function(f){d=f.indexOf(":"),i=f.substring(0,d).trim().toLowerCase(),u=f.substring(d+1).trim(),!(!i||s[i]&&wm[i])&&(i==="set-cookie"?s[i]?s[i].push(u):s[i]=[u]:s[i]=s[i]?s[i]+", "+u:u)}),s};function Sm(r){let s=0,i=r.length;for(;s<i;){const u=r.charCodeAt(s);if(u!==9&&u!==32)break;s+=1}for(;i>s;){const u=r.charCodeAt(i-1);if(u!==9&&u!==32)break;i-=1}return s===0&&i===r.length?r:r.slice(s,i)}const Em=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),_m=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Ql(r,s){return y.isArray(r)?r.map(i=>Ql(i,s)):Sm(String(r).replace(s,""))}const Cm=r=>Ql(r,Em),Rm=r=>Ql(r,_m);function Fc(r){const s=Object.create(null);return y.forEach(r.toJSON(),(i,u)=>{s[u]=Rm(i)}),s}const sc=Symbol("internals");function sa(r){return r&&String(r).trim().toLowerCase()}function Rs(r){return r===!1||r==null?r:y.isArray(r)?r.map(Rs):Cm(String(r))}function Pm(r){const s=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=i.exec(r);)s[u[1]]=u[2];return s}const Lm=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Ll(r,s,i,u,d){if(y.isFunction(u))return u.call(this,s,i);if(d&&(s=i),!!y.isString(s)){if(y.isString(u))return s.indexOf(u)!==-1;if(y.isRegExp(u))return u.test(s)}}function Tm(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,i,u)=>i.toUpperCase()+u)}function $m(r,s){const i=y.toCamelCase(" "+s);["get","set","has"].forEach(u=>{Object.defineProperty(r,u+i,{__proto__:null,value:function(d,p,f){return this[u].call(this,s,d,p,f)},configurable:!0})})}let Ge=class{constructor(s){s&&this.set(s)}set(s,i,u){const d=this;function p(g,b,k){const x=sa(b);if(!x)return;const C=y.findKey(d,x);(!C||d[C]===void 0||k===!0||k===void 0&&d[C]!==!1)&&(d[C||b]=Rs(g))}const f=(g,b)=>y.forEach(g,(k,x)=>p(k,x,b));if(y.isPlainObject(s)||s instanceof this.constructor)f(s,i);else if(y.isString(s)&&(s=s.trim())&&!Lm(s))f(km(s),i);else if(y.isObject(s)&&y.isSafeIterable(s)){let g=Object.create(null),b,k;for(const x of s){if(!y.isArray(x))throw new TypeError("Object iterator must return a key-value pair");k=x[0],y.hasOwnProp(g,k)?(b=g[k],g[k]=y.isArray(b)?[...b,x[1]]:[b,x[1]]):g[k]=x[1]}f(g,i)}else s!=null&&p(i,s,u);return this}get(s,i){if(s=sa(s),s){const u=y.findKey(this,s);if(u){const d=this[u];if(!i)return d;if(i===!0)return Pm(d);if(y.isFunction(i))return i.call(this,d,u);if(y.isRegExp(i))return i.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,i){if(s=sa(s),s){const u=y.findKey(this,s);return!!(u&&this[u]!==void 0&&(!i||Ll(this,this[u],u,i)))}return!1}delete(s,i){const u=this;let d=!1;function p(f){if(f=sa(f),f){const g=y.findKey(u,f);g&&(!i||Ll(u,u[g],g,i))&&(delete u[g],d=!0)}}return y.isArray(s)?s.forEach(p):p(s),d}clear(s){const i=Object.keys(this);let u=i.length,d=!1;for(;u--;){const p=i[u];(!s||Ll(this,this[p],p,s,!0))&&(delete this[p],d=!0)}return d}normalize(s){const i=this,u={};return y.forEach(this,(d,p)=>{const f=y.findKey(u,p);if(f){i[f]=Rs(d),delete i[p];return}const g=s?Tm(p):String(p).trim();g!==p&&delete i[p],i[g]=Rs(d),u[g]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const i=Object.create(null);return y.forEach(this,(u,d)=>{u!=null&&u!==!1&&(i[d]=s&&y.isArray(u)?u.join(", "):u)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,i])=>s+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...i){const u=new this(s);return i.forEach(d=>u.set(d)),u}static accessor(s){const u=(this[sc]=this[sc]={accessors:{}}).accessors,d=this.prototype;function p(f){const g=sa(f);u[g]||($m(d,f),u[g]=!0)}return y.isArray(s)?s.forEach(p):p(s),this}};Ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Ge.prototype,({value:r},s)=>{let i=s[0].toUpperCase()+s.slice(1);return{get:()=>r,set(u){this[i]=u}}});y.freezeMethods(Ge);const Om="[REDACTED ****]";function zm(r){if(y.hasOwnProp(r,"toJSON"))return!0;let s=Object.getPrototypeOf(r);for(;s&&s!==Object.prototype;){if(y.hasOwnProp(s,"toJSON"))return!0;s=Object.getPrototypeOf(s)}return!1}function Nm(r,s){const i=new Set(s.map(p=>String(p).toLowerCase())),u=[],d=p=>{if(p===null||typeof p!="object"||y.isBuffer(p))return p;if(u.indexOf(p)!==-1)return;p instanceof Ge&&(p=p.toJSON()),u.push(p);let f;if(y.isArray(p))f=[],p.forEach((g,b)=>{const k=d(g);y.isUndefined(k)||(f[b]=k)});else{if(!y.isPlainObject(p)&&zm(p))return u.pop(),p;f=Object.create(null);for(const[g,b]of Object.entries(p)){const k=i.has(g.toLowerCase())?Om:d(b);y.isUndefined(k)||(f[g]=k)}}return u.pop(),f};return d(r)}let D=class Uc extends Error{static from(s,i,u,d,p,f){const g=new Uc(s.message,i||s.code,u,d,p);return Object.defineProperty(g,"cause",{__proto__:null,value:s,writable:!0,enumerable:!1,configurable:!0}),g.name=s.name,s.status!=null&&g.status==null&&(g.status=s.status),f&&Object.assign(g,f),g}constructor(s,i,u,d,p){super(s),Object.defineProperty(this,"message",{__proto__:null,value:s,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),u&&(this.config=u),d&&(this.request=d),p&&(this.response=p,this.status=p.status)}toJSON(){const s=this.config,i=s&&y.hasOwnProp(s,"redact")?s.redact:void 0,u=y.isArray(i)&&i.length>0?Nm(s,i):y.toJSONObject(s);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u,code:this.code,status:this.status}}};D.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";D.ERR_BAD_OPTION="ERR_BAD_OPTION";D.ECONNABORTED="ECONNABORTED";D.ETIMEDOUT="ETIMEDOUT";D.ECONNREFUSED="ECONNREFUSED";D.ERR_NETWORK="ERR_NETWORK";D.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";D.ERR_DEPRECATED="ERR_DEPRECATED";D.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";D.ERR_BAD_REQUEST="ERR_BAD_REQUEST";D.ERR_CANCELED="ERR_CANCELED";D.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";D.ERR_INVALID_URL="ERR_INVALID_URL";D.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Am=null,Hc=100;function jl(r){return y.isPlainObject(r)||y.isArray(r)}function Bc(r){return y.endsWith(r,"[]")?r.slice(0,-2):r}function Tl(r,s,i){return r?r.concat(s).map(function(d,p){return d=Bc(d),!i&&p?"["+d+"]":d}).join(i?".":""):s}function Im(r){return y.isArray(r)&&!r.some(jl)}const Dm=y.toFlatObject(y,{},null,function(s){return/^is[A-Z]/.test(s)});function zs(r,s,i){if(!y.isObject(r))throw new TypeError("target must be an object");s=s||new FormData,i=y.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(U,W){return!y.isUndefined(W[U])});const u=i.metaTokens,d=i.visitor||q,p=i.dots,f=i.indexes,g=i.Blob||typeof Blob<"u"&&Blob,b=i.maxDepth===void 0?Hc:i.maxDepth,k=g&&y.isSpecCompliantForm(s),x=[];if(!y.isFunction(d))throw new TypeError("visitor must be a function");function C(P){if(P===null)return"";if(y.isDate(P))return P.toISOString();if(y.isBoolean(P))return P.toString();if(!k&&y.isBlob(P))throw new D("Blob is not supported. Use a Buffer instead.");if(y.isArrayBuffer(P)||y.isTypedArray(P)){if(k&&typeof g=="function")return new g([P]);if(typeof Buffer<"u")return Buffer.from(P);throw new D("Blob is not supported. Use a Buffer instead.",D.ERR_NOT_SUPPORT)}return P}function $(P){if(P>b)throw new D("Object is too deeply nested ("+P+" levels). Max depth: "+b,D.ERR_FORM_DATA_DEPTH_EXCEEDED)}function I(P,U){if(b===1/0)return JSON.stringify(P);const W=[];return JSON.stringify(P,function(se,X){if(!y.isObject(X))return X;for(;W.length&&W[W.length-1]!==this;)W.pop();return W.push(X),$(U+W.length-1),X})}function q(P,U,W){let F=P;if(y.isReactNative(s)&&y.isReactNativeBlob(P))return s.append(Tl(W,U,p),C(P)),!1;if(P&&!W&&typeof P=="object"){if(y.endsWith(U,"{}"))U=u?U:U.slice(0,-2),P=I(P,1);else if(y.isArray(P)&&Im(P)||(y.isFileList(P)||y.endsWith(U,"[]"))&&(F=y.toArray(P)))return U=Bc(U),F.forEach(function(X,de){!(y.isUndefined(X)||X===null)&&s.append(f===!0?Tl([U],de,p):f===null?U:U+"[]",C(X))}),!1}return jl(P)?!0:(s.append(Tl(W,U,p),C(P)),!1)}const H=Object.assign(Dm,{defaultVisitor:q,convertValue:C,isVisitable:jl});function R(P,U,W=0){if(!y.isUndefined(P)){if($(W),x.indexOf(P)!==-1)throw new Error("Circular reference detected in "+U.join("."));x.push(P),y.forEach(P,function(se,X){(!(y.isUndefined(se)||se===null)&&d.call(s,se,y.isString(X)?X.trim():X,U,H))===!0&&R(se,U?U.concat(X):[X],W+1)}),x.pop()}}if(!y.isObject(r))throw new TypeError("data must be an object");return R(r),s}function ic(r){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(u){return s[u]})}function Kl(r,s){this._pairs=[],r&&zs(r,this,s)}const qc=Kl.prototype;qc.append=function(s,i){this._pairs.push([s,i])};qc.toString=function(s){const i=s?u=>s.call(this,u,ic):ic;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};function jm(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Wc(r,s,i){if(!s)return r;r=r||"";const u=y.isFunction(i)?{serialize:i}:i,d=y.getSafeProp(u,"encode")||jm,p=y.getSafeProp(u,"serialize");let f;if(p?f=p(s,u):f=y.isURLSearchParams(s)?s.toString():new Kl(s,u).toString(d),f){const g=r.indexOf("#");g!==-1&&(r=r.slice(0,g)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class lc{constructor(){this.handlers=[]}use(s,i,u){return this.handlers.push({fulfilled:s,rejected:i,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){y.forEach(this.handlers,function(u){u!==null&&s(u)})}}const Jl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Mm=typeof URLSearchParams<"u"?URLSearchParams:Kl,Fm=typeof FormData<"u"?FormData:null,Um=typeof Blob<"u"?Blob:null,Hm={isBrowser:!0,classes:{URLSearchParams:Mm,FormData:Fm,Blob:Um},protocols:["http","https","file","blob","url","data"]},Yl=typeof window<"u"&&typeof document<"u",Ml=typeof navigator=="object"&&navigator||void 0,Bm=Yl&&(!Ml||["ReactNative","NativeScript","NS"].indexOf(Ml.product)<0),qm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wm=Yl&&window.location.href||"http://localhost",Xm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yl,hasStandardBrowserEnv:Bm,hasStandardBrowserWebWorkerEnv:qm,navigator:Ml,origin:Wm},Symbol.toStringTag,{value:"Module"})),Xe={...Xm,...Hm};function Vm(r,s){return zs(r,new Xe.classes.URLSearchParams,{visitor:function(i,u,d,p){return Xe.isNode&&y.isBuffer(i)?(this.append(u,i.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...s})}const oc=Hc;function Xc(r){if(r>oc)throw new D("FormData field is too deeply nested ("+r+" levels). Max depth: "+oc,D.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Qm(r){const s=[],i=/\w+|\[(\w*)]/g;let u;for(;(u=i.exec(r))!==null;)Xc(s.length),s.push(u[0]==="[]"?"":u[1]||u[0]);return s}function Km(r){const s={},i=Object.keys(r);let u;const d=i.length;let p;for(u=0;u<d;u++)p=i[u],s[p]=r[p];return s}function Vc(r){function s(i,u,d,p){Xc(p);let f=i[p++];if(f==="__proto__")return!0;const g=Number.isFinite(+f),b=p>=i.length;return f=!f&&y.isArray(d)?d.length:f,b?(y.hasOwnProp(d,f)?d[f]=y.isArray(d[f])?d[f].concat(u):[d[f],u]:d[f]=u,!g):((!y.hasOwnProp(d,f)||!y.isObject(d[f]))&&(d[f]=[]),s(i,u,d[f],p)&&y.isArray(d[f])&&(d[f]=Km(d[f])),!g)}if(y.isFormData(r)&&y.isFunction(r.entries)){const i={};return y.forEachEntry(r,(u,d)=>{s(Qm(u),d,i,0)}),i}return null}const fr=(r,s)=>r!=null&&y.hasOwnProp(r,s)?r[s]:void 0;function Jm(r,s,i){if(y.isString(r))try{return(s||JSON.parse)(r),y.trim(r)}catch(u){if(u.name!=="SyntaxError")throw u}return(i||JSON.stringify)(r)}const ga={transitional:Jl,adapter:["xhr","http","fetch"],transformRequest:[function(s,i){const u=i.getContentType()||"",d=u.indexOf("application/json")>-1,p=y.isObject(s);if(p&&y.isHTMLForm(s)&&(s=new FormData(s)),y.isFormData(s))return d?JSON.stringify(Vc(s)):s;if(y.isArrayBuffer(s)||y.isBuffer(s)||y.isStream(s)||y.isFile(s)||y.isBlob(s)||y.isReadableStream(s))return s;if(y.isArrayBufferView(s))return s.buffer;if(y.isURLSearchParams(s))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let g;if(p){const b=fr(this,"formSerializer");if(u.indexOf("application/x-www-form-urlencoded")>-1)return Vm(s,b).toString();if((g=y.isFileList(s))||u.indexOf("multipart/form-data")>-1){const k=fr(this,"env"),x=k&&k.FormData;return zs(g?{"files[]":s}:s,x&&new x,b)}}return p||d?(i.setContentType("application/json",!1),Jm(s)):s}],transformResponse:[function(s){const i=fr(this,"transitional")||ga.transitional,u=i&&i.forcedJSONParsing,d=fr(this,"responseType"),p=d==="json";if(y.isResponse(s)||y.isReadableStream(s))return s;if(s&&y.isString(s)&&(u&&!d||p)){const g=!(i&&i.silentJSONParsing)&&p;try{return JSON.parse(s,fr(this,"parseReviver"))}catch(b){if(g)throw b.name==="SyntaxError"?D.from(b,D.ERR_BAD_RESPONSE,this,null,fr(this,"response")):b}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch","query"],r=>{ga.headers[r]={}});function $l(r,s){const i=this||ga,u=s||i,d=Ge.from(u.headers);let p=u.data;return y.forEach(r,function(g){p=g.call(i,p,d.normalize(),s?s.status:void 0)}),d.normalize(),p}function Qc(r){return!!(r&&r.__CANCEL__)}let ma=class extends D{constructor(s,i,u){super(s??"canceled",D.ERR_CANCELED,i,u),this.name="CanceledError",this.__CANCEL__=!0}};function Kc(r,s,i){const u=i.config.validateStatus;!i.status||!u||u(i.status)?r(i):s(new D("Request failed with status code "+i.status,i.status>=400&&i.status<500?D.ERR_BAD_REQUEST:D.ERR_BAD_RESPONSE,i.config,i.request,i))}function Ym(r){const s=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return s&&s[1]||""}function Gm(r,s){r=r||10;const i=new Array(r),u=new Array(r);let d=0,p=0,f;return s=s!==void 0?s:1e3,function(b){const k=Date.now(),x=u[p];f||(f=k),i[d]=b,u[d]=k;let C=p,$=0;for(;C!==d;)$+=i[C++],C=C%r;if(d=(d+1)%r,d===p&&(p=(p+1)%r),k-f<s)return;const I=x&&k-x;return I?Math.round($*1e3/I):void 0}}function Zm(r,s){let i=0,u=1e3/s,d,p;const f=(k,x=Date.now())=>{i=x,d=null,p&&(clearTimeout(p),p=null),r(...k)};return[(...k)=>{const x=Date.now(),C=x-i;C>=u?f(k,x):(d=k,p||(p=setTimeout(()=>{p=null,f(d)},u-C)))},()=>d&&f(d)]}const Ts=(r,s,i=3)=>{let u=0;const d=Gm(50,250);return Zm(p=>{if(!p||typeof p.loaded!="number")return;const f=p.loaded,g=p.lengthComputable?p.total:void 0,b=g!=null?Math.min(f,g):f,k=Math.max(0,b-u),x=d(k);u=Math.max(u,b);const C={loaded:b,total:g,progress:g?b/g:void 0,bytes:k,rate:x||void 0,estimated:x&&g?(g-b)/x:void 0,event:p,lengthComputable:g!=null,[s?"download":"upload"]:!0};r(C)},i)},uc=(r,s)=>{const i=r!=null;return[u=>s[0]({lengthComputable:i,total:r,loaded:u}),s[1]]},dc=r=>(...s)=>y.asap(()=>r(...s)),eh=Xe.hasStandardBrowserEnv?((r,s)=>i=>(i=new URL(i,Xe.origin),r.protocol===i.protocol&&r.host===i.host&&(s||r.port===i.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,th=Xe.hasStandardBrowserEnv?{write(r,s,i,u,d,p,f){if(typeof document>"u")return;const g=[`${r}=${encodeURIComponent(s)}`];y.isNumber(i)&&g.push(`expires=${new Date(i).toUTCString()}`),y.isString(u)&&g.push(`path=${u}`),y.isString(d)&&g.push(`domain=${d}`),p===!0&&g.push("secure"),y.isString(f)&&g.push(`SameSite=${f}`),document.cookie=g.join("; ")},read(r){if(typeof document>"u")return null;const s=document.cookie.split(";");for(let i=0;i<s.length;i++){const u=s[i].replace(/^\s+/,""),d=u.indexOf("=");if(d!==-1&&u.slice(0,d)===r)try{return decodeURIComponent(u.slice(d+1))}catch{return u.slice(d+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function nh(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function rh(r,s){return s?r.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):r}const ah=/^https?:(?!\/\/)/i,sh=/[\t\n\r]/g;function ih(r){let s=0;for(;s<r.length&&r.charCodeAt(s)<=32;)s++;return r.slice(s)}function lh(r){return ih(r).replace(sh,"")}function cc(r,s){if(typeof r=="string"&&ah.test(lh(r)))throw new D('Invalid URL: missing "//" after protocol',D.ERR_INVALID_URL,s)}function Jc(r,s,i,u){cc(s,u);let d=!nh(s);return r&&(d||i===!1)?(cc(r,u),rh(r,s)):s}const pc=r=>r instanceof Ge?{...r}:r;function Fn(r,s){r=r||{},s=s||{};const i=Object.create(null);Object.defineProperty(i,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function u(x,C,$,I){return y.isPlainObject(x)&&y.isPlainObject(C)?y.merge.call({caseless:I},x,C):y.isPlainObject(C)?y.merge({},C):y.isArray(C)?C.slice():C}function d(x,C,$,I){if(y.isUndefined(C)){if(!y.isUndefined(x))return u(void 0,x,$,I)}else return u(x,C,$,I)}function p(x,C){if(!y.isUndefined(C))return u(void 0,C)}function f(x,C){if(y.isUndefined(C)){if(!y.isUndefined(x))return u(void 0,x)}else return u(void 0,C)}function g(x){const C=y.hasOwnProp(s,"transitional")?s.transitional:void 0;if(!y.isUndefined(C))if(y.isPlainObject(C)){if(y.hasOwnProp(C,x))return C[x]}else return;const $=y.hasOwnProp(r,"transitional")?r.transitional:void 0;if(y.isPlainObject($)&&y.hasOwnProp($,x))return $[x]}function b(x,C,$){if(y.hasOwnProp(s,$))return u(x,C);if(y.hasOwnProp(r,$))return u(void 0,x)}const k={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:b,headers:(x,C,$)=>d(pc(x),pc(C),$,!0)};return y.forEach(Object.keys({...r,...s}),function(C){if(C==="__proto__"||C==="constructor"||C==="prototype")return;const $=y.hasOwnProp(k,C)?k[C]:d,I=y.hasOwnProp(r,C)?r[C]:void 0,q=y.hasOwnProp(s,C)?s[C]:void 0,H=$(I,q,C);y.isUndefined(H)&&$!==b||(i[C]=H)}),y.hasOwnProp(s,"validateStatus")&&y.isUndefined(s.validateStatus)&&g("validateStatusUndefinedResolves")===!1&&(y.hasOwnProp(r,"validateStatus")?i.validateStatus=u(void 0,r.validateStatus):delete i.validateStatus),i}const oh=["content-type","content-length"];function uh(r,s,i){if(i!=="content-only"){r.set(s);return}Object.entries(s||{}).forEach(([u,d])=>{oh.includes(u.toLowerCase())&&r.set(u,d)})}const dh=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(s,i)=>String.fromCharCode(parseInt(i,16)));function Yc(r){const s=Fn({},r),i=$=>y.hasOwnProp(s,$)?s[$]:void 0,u=i("data");let d=i("withXSRFToken");const p=i("xsrfHeaderName"),f=i("xsrfCookieName");let g=i("headers");const b=i("auth"),k=i("baseURL"),x=i("allowAbsoluteUrls"),C=i("url");if(s.headers=g=Ge.from(g),s.url=Wc(Jc(k,C,x,s),i("params"),i("paramsSerializer")),b){const $=y.getSafeProp(b,"username")||"",I=y.getSafeProp(b,"password")||"";try{g.set("Authorization","Basic "+btoa($+":"+(I?dh(I):"")))}catch(q){throw D.from(q,D.ERR_BAD_OPTION_VALUE,r)}}if(y.isFormData(u)&&(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv||y.isReactNative(u)?g.setContentType(void 0):y.isFunction(u.getHeaders)&&uh(g,u.getHeaders(),i("formDataHeaderPolicy"))),Xe.hasStandardBrowserEnv&&(y.isFunction(d)&&(d=d(s)),d===!0||d==null&&eh(s.url))){const I=p&&f&&th.read(f);I&&g.set(p,I)}return s}const ch=typeof XMLHttpRequest<"u",ph=ch&&function(r){return new Promise(function(i,u){const d=Yc(r);let p=d.data;const f=Ge.from(d.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:k}=d,x,C,$,I,q;function H(){I&&I(),q&&q(),d.cancelToken&&d.cancelToken.unsubscribe(x),d.signal&&d.signal.removeEventListener("abort",x)}let R=new XMLHttpRequest;R.open(d.method.toUpperCase(),d.url,!0),R.timeout=d.timeout;function P(){if(!R)return;const W=Ge.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),se={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:W,config:r,request:R};Kc(function(de){i(de),H()},function(de){u(de),H()},se),R=null}"onloadend"in R?R.onloadend=P:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.startsWith("file:"))||setTimeout(P)},R.onabort=function(){R&&(u(new D("Request aborted",D.ECONNABORTED,r,R)),H(),R=null)},R.onerror=function(F){const se=F&&F.message?F.message:"Network Error",X=new D(se,D.ERR_NETWORK,r,R);X.event=F||null,u(X),H(),R=null},R.ontimeout=function(){let F=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const se=d.transitional||Jl;d.timeoutErrorMessage&&(F=d.timeoutErrorMessage),u(new D(F,se.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,r,R)),H(),R=null},p===void 0&&f.setContentType(null),"setRequestHeader"in R&&y.forEach(Fc(f),function(F,se){R.setRequestHeader(se,F)}),y.isUndefined(d.withCredentials)||(R.withCredentials=!!d.withCredentials),g&&g!=="json"&&(R.responseType=d.responseType),k&&([$,q]=Ts(k,!0),R.addEventListener("progress",$)),b&&R.upload&&([C,I]=Ts(b),R.upload.addEventListener("progress",C),R.upload.addEventListener("loadend",I)),(d.cancelToken||d.signal)&&(x=W=>{R&&(u(!W||W.type?new ma(null,r,R):W),R.abort(),H(),R=null)},d.cancelToken&&d.cancelToken.subscribe(x),d.signal&&(d.signal.aborted?x():d.signal.addEventListener("abort",x)));const U=Ym(d.url);if(U&&!Xe.protocols.includes(U)){u(new D("Unsupported protocol "+U+":",D.ERR_BAD_REQUEST,r)),H();return}R.send(p||null)})},fh=(r,s)=>{if(r=r?r.filter(Boolean):[],!s&&!r.length)return;const i=new AbortController;let u=!1;const d=function(b){if(!u){u=!0,f();const k=b instanceof Error?b:this.reason;i.abort(k instanceof D?k:new ma(k instanceof Error?k.message:k))}};let p=s&&setTimeout(()=>{p=null,d(new D(`timeout of ${s}ms exceeded`,D.ETIMEDOUT))},s);const f=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(b=>{b.unsubscribe?b.unsubscribe(d):b.removeEventListener("abort",d)}),r=null)};r.forEach(b=>b.addEventListener("abort",d,{once:!0}));const{signal:g}=i;return g.unsubscribe=()=>y.asap(f),g},gh=function*(r,s){let i=r.byteLength;if(i<s){yield r;return}let u=0,d;for(;u<i;)d=u+s,yield r.slice(u,d),u=d},mh=async function*(r,s){for await(const i of hh(r))yield*gh(i,s)},hh=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const s=r.getReader();try{for(;;){const{done:i,value:u}=await s.read();if(i)break;yield u}}finally{await s.cancel()}},fc=(r,s,i,u)=>{const d=mh(r,s);let p=0,f,g=b=>{f||(f=!0,u&&u(b))};return new ReadableStream({async pull(b){try{const{done:k,value:x}=await d.next();if(k){g(),b.close();return}let C=x.byteLength;if(i){let $=p+=C;i($)}b.enqueue(new Uint8Array(x))}catch(k){throw g(k),k}},cancel(b){return g(b),d.return()}},{highWaterMark:2})},$s=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,vh=(r,s,i)=>s+2<i&&$s(r.charCodeAt(s+1))&&$s(r.charCodeAt(s+2));function yh(r){if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const s=r.indexOf(",");if(s<0)return 0;const i=r.slice(5,s),u=r.slice(s+1);if(/;base64/i.test(i)){let f=u.length;const g=u.length;for(let I=0;I<g;I++)if(u.charCodeAt(I)===37&&I+2<g){const q=u.charCodeAt(I+1),H=u.charCodeAt(I+2);$s(q)&&$s(H)&&(f-=2,I+=2)}let b=0,k=g-1;const x=I=>I>=2&&u.charCodeAt(I-2)===37&&u.charCodeAt(I-1)===51&&(u.charCodeAt(I)===68||u.charCodeAt(I)===100);k>=0&&(u.charCodeAt(k)===61?(b++,k--):x(k)&&(b++,k-=3)),b===1&&k>=0&&(u.charCodeAt(k)===61||x(k))&&b++;const $=Math.floor(f/4)*3-(b||0);return $>0?$:0}let p=0;for(let f=0,g=u.length;f<g;f++){const b=u.charCodeAt(f);if(b===37&&vh(u,f,g))p+=1,f+=2;else if(b<128)p+=1;else if(b<2048)p+=2;else if(b>=55296&&b<=56319&&f+1<g){const k=u.charCodeAt(f+1);k>=56320&&k<=57343?(p+=4,f++):p+=3}else p+=3}return p}const Gl="1.18.1",gc=64*1024,{isFunction:_s}=y,bh=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(s,i)=>String.fromCharCode(parseInt(i,16))),mc=r=>{if(!y.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},hc=(r,...s)=>{try{return!!r(...s)}catch{return!1}},xh=r=>{const s=r.indexOf("://");let i=r;return s!==-1&&(i=i.slice(s+3)),i.includes("@")||i.includes(":")},wh=r=>{const s=y.global!==void 0&&y.global!==null?y.global:globalThis,{ReadableStream:i,TextEncoder:u}=s;r=y.merge.call({skipUndefined:!0},{Request:s.Request,Response:s.Response},r);const{fetch:d,Request:p,Response:f}=r,g=d?_s(d):typeof fetch=="function",b=_s(p),k=_s(f);if(!g)return!1;const x=g&&_s(i),C=g&&(typeof u=="function"?(P=>U=>P.encode(U))(new u):async P=>new Uint8Array(await new p(P).arrayBuffer())),$=b&&x&&hc(()=>{let P=!1;const U=new p(Xe.origin,{body:new i,method:"POST",get duplex(){return P=!0,"half"}}),W=U.headers.has("Content-Type");return U.body!=null&&U.body.cancel(),P&&!W}),I=k&&x&&hc(()=>y.isReadableStream(new f("").body)),q={stream:I&&(P=>P.body)};g&&["text","arrayBuffer","blob","formData","stream"].forEach(P=>{!q[P]&&(q[P]=(U,W)=>{let F=U&&U[P];if(F)return F.call(U);throw new D(`Response type '${P}' is not supported`,D.ERR_NOT_SUPPORT,W)})});const H=async P=>{if(P==null)return 0;if(y.isBlob(P))return P.size;if(y.isSpecCompliantForm(P))return(await new p(Xe.origin,{method:"POST",body:P}).arrayBuffer()).byteLength;if(y.isArrayBufferView(P)||y.isArrayBuffer(P))return P.byteLength;if(y.isURLSearchParams(P)&&(P=P+""),y.isString(P))return(await C(P)).byteLength},R=async(P,U)=>{const W=y.toFiniteNumber(P.getContentLength());return W??H(U)};return async P=>{let{url:U,method:W,data:F,signal:se,cancelToken:X,timeout:de,onDownloadProgress:re,onUploadProgress:ae,responseType:G,headers:Z,withCredentials:ye="same-origin",fetchOptions:Re,maxContentLength:Ee,maxBodyLength:Ze}=Yc(P);const Ae=y.isNumber(Ee)&&Ee>-1,ke=y.isNumber(Ze)&&Ze>-1,j=J=>y.hasOwnProp(P,J)?P[J]:void 0;let ee=d||fetch;G=G?(G+"").toLowerCase():"text";let M=fh([se,X&&X.toAbortSignal()],de),w=null;const L=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let le,ue=null;const ge=()=>new D("Request body larger than maxBodyLength limit",D.ERR_BAD_REQUEST,P,w);try{let J;const ce=j("auth");if(ce){const oe=y.getSafeProp(ce,"username")||"",Be=y.getSafeProp(ce,"password")||"";J={username:oe,password:Be}}if(xh(U)){const oe=new URL(U,Xe.origin);if(!J&&(oe.username||oe.password)){const Be=mc(oe.username),St=mc(oe.password);J={username:Be,password:St}}(oe.username||oe.password)&&(oe.username="",oe.password="",U=oe.href)}if(J&&(Z.delete("authorization"),Z.set("Authorization","Basic "+btoa(bh((J.username||"")+":"+(J.password||""))))),Ae&&typeof U=="string"&&U.startsWith("data:")&&yh(U)>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,w);if(ke&&W!=="get"&&W!=="head"){const oe=await H(F);if(typeof oe=="number"&&isFinite(oe)&&(le=oe,oe>Ze))throw ge()}const me=ke&&(y.isReadableStream(F)||y.isStream(F)),we=(oe,Be,St)=>fc(oe,gc,Et=>{if(ke&&Et>Ze)throw ue=ge();Be&&Be(Et)},St);if($&&W!=="get"&&W!=="head"&&(ae||me)){if(le=le??await R(Z,F),le!==0||me){let oe=new p(U,{method:"POST",body:F,duplex:"half"}),Be;if(y.isFormData(F)&&(Be=oe.headers.get("content-type"))&&Z.setContentType(Be),oe.body){const[St,Et]=ae&&uc(le,Ts(dc(ae)))||[];F=we(oe.body,St,Et)}}}else if(me&&!b&&x&&W!=="get"&&W!=="head")F=we(F);else if(me&&b&&!$&&W!=="get"&&W!=="head")throw new D("Stream request bodies are not supported by the current fetch implementation",D.ERR_NOT_SUPPORT,P,w);y.isString(ye)||(ye=ye?"include":"omit");const et=b&&"credentials"in p.prototype;if(y.isFormData(F)){const oe=Z.getContentType();oe&&/^multipart\/form-data/i.test(oe)&&!/boundary=/i.test(oe)&&Z.delete("content-type")}Z.set("User-Agent","axios/"+Gl,!1);const bn={...Re,signal:M,method:W.toUpperCase(),headers:Fc(Z.normalize()),body:F,duplex:"half",credentials:et?ye:void 0};w=b&&new p(U,bn);let mt=await(b?ee(w,Re):ee(U,bn));const xn=Ge.from(mt.headers);if(Ae){const oe=y.toFiniteNumber(xn.getContentLength());if(oe!=null&&oe>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,w)}const wn=I&&(G==="stream"||G==="response");if(I&&mt.body&&(re||Ae||wn&&L)){const oe={};["status","statusText","headers"].forEach(jt=>{oe[jt]=mt[jt]});const Be=y.toFiniteNumber(xn.getContentLength()),[St,Et]=re&&uc(Be,Ts(dc(re),!0))||[];let Kt=0;const Jt=jt=>{if(Ae&&(Kt=jt,Kt>Ee))throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,w);St&&St(jt)};mt=new f(fc(mt.body,gc,Jt,()=>{Et&&Et(),L&&L()}),oe)}G=G||"text";let ht=await q[y.findKey(q,G)||"text"](mt,P);if(Ae&&!I&&!wn){let oe;if(ht!=null&&(typeof ht.byteLength=="number"?oe=ht.byteLength:typeof ht.size=="number"?oe=ht.size:typeof ht=="string"&&(oe=typeof u=="function"?new u().encode(ht).byteLength:ht.length)),typeof oe=="number"&&oe>Ee)throw new D("maxContentLength size of "+Ee+" exceeded",D.ERR_BAD_RESPONSE,P,w)}return!wn&&L&&L(),await new Promise((oe,Be)=>{Kc(oe,Be,{data:ht,headers:Ge.from(mt.headers),status:mt.status,statusText:mt.statusText,config:P,request:w})})}catch(J){if(L&&L(),M&&M.aborted&&M.reason instanceof D){const ce=M.reason;throw ce.config=P,w&&(ce.request=w),J!==ce&&Object.defineProperty(ce,"cause",{__proto__:null,value:J,writable:!0,enumerable:!1,configurable:!0}),ce}if(ue)throw w&&!ue.request&&(ue.request=w),ue;if(J instanceof D)throw w&&!J.request&&(J.request=w),J;if(J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)){const ce=new D("Network Error",D.ERR_NETWORK,P,w,J&&J.response);throw Object.defineProperty(ce,"cause",{__proto__:null,value:J.cause||J,writable:!0,enumerable:!1,configurable:!0}),ce}throw D.from(J,J&&J.code,P,w,J&&J.response)}}},kh=new Map,Gc=r=>{let s=r&&r.env||{};const{fetch:i,Request:u,Response:d}=s,p=[u,d,i];let f=p.length,g=f,b,k,x=kh;for(;g--;)b=p[g],k=x.get(b),k===void 0&&x.set(b,k=g?new Map:wh(s)),x=k;return k};Gc();const Zl={http:Am,xhr:ph,fetch:{get:Gc}};y.forEach(Zl,(r,s)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:s})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:s})}});const vc=r=>`- ${r}`,Sh=r=>y.isFunction(r)||r===null||r===!1;function Eh(r,s){r=y.isArray(r)?r:[r];const{length:i}=r;let u,d;const p={};for(let f=0;f<i;f++){u=r[f];let g;if(d=u,!Sh(u)&&(d=Zl[(g=String(u)).toLowerCase()],d===void 0))throw new D(`Unknown adapter '${g}'`);if(d&&(y.isFunction(d)||(d=d.get(s))))break;p[g||"#"+f]=d}if(!d){const f=Object.entries(p).map(([b,k])=>`adapter ${b} `+(k===!1?"is not supported by the environment":"is not available in the build"));let g=i?f.length>1?`since :
`+f.map(vc).join(`
`):" "+vc(f[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+g,D.ERR_NOT_SUPPORT)}return d}const Zc={getAdapter:Eh,adapters:Zl};function Ol(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ma(null,r)}function yc(r){return Ol(r),r.headers=Ge.from(r.headers),r.data=$l.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Zc.getAdapter(r.adapter||ga.adapter,r)(r).then(function(u){Ol(r),r.response=u;try{u.data=$l.call(r,r.transformResponse,u)}finally{delete r.response}return u.headers=Ge.from(u.headers),u},function(u){if(!Qc(u)&&(Ol(r),u&&u.response)){r.response=u.response;try{u.response.data=$l.call(r,r.transformResponse,u.response)}finally{delete r.response}u.response.headers=Ge.from(u.response.headers)}return Promise.reject(u)})}const Ns={};["object","boolean","number","function","string","symbol"].forEach((r,s)=>{Ns[r]=function(u){return typeof u===r||"a"+(s<1?"n ":" ")+r}});const bc={};Ns.transitional=function(s,i,u){function d(p,f){return"[Axios v"+Gl+"] Transitional option '"+p+"'"+f+(u?". "+u:"")}return(p,f,g)=>{if(s===!1)throw new D(d(f," has been removed"+(i?" in "+i:"")),D.ERR_DEPRECATED);return i&&!bc[f]&&(bc[f]=!0,console.warn(d(f," has been deprecated since v"+i+" and will be removed in the near future"))),s?s(p,f,g):!0}};Ns.spelling=function(s){return(i,u)=>(console.warn(`${u} is likely a misspelling of ${s}`),!0)};function _h(r,s,i){if(typeof r!="object"||r===null)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const u=Object.keys(r);let d=u.length;for(;d-- >0;){const p=u[d],f=Object.prototype.hasOwnProperty.call(s,p)?s[p]:void 0;if(f){const g=r[p],b=g===void 0||f(g,p,r);if(b!==!0)throw new D("option "+p+" must be "+b,D.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new D("Unknown option "+p,D.ERR_BAD_OPTION)}}const Ps={assertOptions:_h,validators:Ns},Ye=Ps.validators;let In=class{constructor(s){this.defaults=s||{},this.interceptors={request:new lc,response:new lc}}async request(s,i){try{return await this._request(s,i)}catch(u){if(u instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=(()=>{if(!d.stack)return"";const f=d.stack.indexOf(`
`);return f===-1?"":d.stack.slice(f+1)})();try{if(!u.stack)u.stack=p;else if(p){const f=p.indexOf(`
`),g=f===-1?-1:p.indexOf(`
`,f+1),b=g===-1?"":p.slice(g+1);String(u.stack).endsWith(b)||(u.stack+=`
`+p)}}catch{}}throw u}}_request(s,i){typeof s=="string"?(i=i||{},i.url=s):i=s||{},i=Fn(this.defaults,i);const{transitional:u,paramsSerializer:d,headers:p}=i;u!==void 0&&Ps.assertOptions(u,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean),legacyInterceptorReqResOrdering:Ye.transitional(Ye.boolean),advertiseZstdAcceptEncoding:Ye.transitional(Ye.boolean),validateStatusUndefinedResolves:Ye.transitional(Ye.boolean)},!1),d!=null&&(y.isFunction(d)?i.paramsSerializer={serialize:d}:Ps.assertOptions(d,{encode:Ye.function,serialize:Ye.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Ps.assertOptions(i,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=p&&y.merge(p.common,p[i.method]);p&&y.forEach(["delete","get","head","post","put","patch","query","common"],q=>{delete p[q]}),i.headers=Ge.concat(f,p);const g=[];let b=!0;this.interceptors.request.forEach(function(H){if(typeof H.runWhen=="function"&&H.runWhen(i)===!1)return;b=b&&H.synchronous;const R=i.transitional||Jl;R&&R.legacyInterceptorReqResOrdering?g.unshift(H.fulfilled,H.rejected):g.push(H.fulfilled,H.rejected)});const k=[];this.interceptors.response.forEach(function(H){k.push(H.fulfilled,H.rejected)});let x,C=0,$;if(!b){const q=[yc.bind(this),void 0];for(q.unshift(...g),q.push(...k),$=q.length,x=Promise.resolve(i);C<$;)x=x.then(q[C++],q[C++]);return x}$=g.length;let I=i;for(;C<$;){const q=g[C++],H=g[C++];try{I=q(I)}catch(R){H.call(this,R);break}}try{x=yc.call(this,I)}catch(q){return Promise.reject(q)}for(C=0,$=k.length;C<$;)x=x.then(k[C++],k[C++]);return x}getUri(s){s=Fn(this.defaults,s);const i=Jc(s.baseURL,s.url,s.allowAbsoluteUrls,s);return Wc(i,s.params,s.paramsSerializer)}};y.forEach(["delete","get","head","options"],function(s){In.prototype[s]=function(i,u){return this.request(Fn(u||{},{method:s,url:i,data:u&&y.hasOwnProp(u,"data")?u.data:void 0}))}});y.forEach(["post","put","patch","query"],function(s){function i(u){return function(p,f,g){return this.request(Fn(g||{},{method:s,headers:u?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}In.prototype[s]=i(),s!=="query"&&(In.prototype[s+"Form"]=i(!0))});let Ch=class ep{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(p){i=p});const u=this;this.promise.then(d=>{if(!u._listeners)return;let p=u._listeners.length;for(;p-- >0;)u._listeners[p](d);u._listeners=null}),this.promise.then=d=>{let p;const f=new Promise(g=>{u.subscribe(g),p=g}).then(d);return f.cancel=function(){u.unsubscribe(p)},f},s(function(p,f,g){u.reason||(u.reason=new ma(p,f,g),i(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const i=this._listeners.indexOf(s);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const s=new AbortController,i=u=>{s.abort(u)};return this.subscribe(i),s.signal.unsubscribe=()=>this.unsubscribe(i),s.signal}static source(){let s;return{token:new ep(function(d){s=d}),cancel:s}}};function Rh(r){return function(i){return r.apply(null,i)}}function Ph(r){return y.isObject(r)&&r.isAxiosError===!0}const Fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Fl).forEach(([r,s])=>{Fl[s]=r});function tp(r){const s=new In(r),i=$c(In.prototype.request,s);return y.extend(i,In.prototype,s,{allOwnKeys:!0}),y.extend(i,s,null,{allOwnKeys:!0}),i.create=function(d){return tp(Fn(r,d))},i}const Le=tp(ga);Le.Axios=In;Le.CanceledError=ma;Le.CancelToken=Ch;Le.isCancel=Qc;Le.VERSION=Gl;Le.toFormData=zs;Le.AxiosError=D;Le.Cancel=Le.CanceledError;Le.all=function(s){return Promise.all(s)};Le.spread=Rh;Le.isAxiosError=Ph;Le.mergeConfig=Fn;Le.AxiosHeaders=Ge;Le.formToJSON=r=>Vc(y.isHTMLForm(r)?new FormData(r):r);Le.getAdapter=Zc.getAdapter;Le.HttpStatusCode=Fl;Le.default=Le;const{Axios:uv,AxiosError:dv,CanceledError:cv,isCancel:pv,CancelToken:fv,VERSION:gv,all:mv,Cancel:hv,isAxiosError:vv,spread:yv,toFormData:bv,AxiosHeaders:xv,HttpStatusCode:wv,formToJSON:kv,getAdapter:Sv,mergeConfig:Ev,create:_v}=Le,Un="/api/analyze",gr="/api/chat",ia="/api/records",ca="/api/hair-analysis";function zl(r){return(r==null?void 0:r.trim().replace(/\/+$/,""))||""}function eo(){var u;const r=typeof window<"u"?zl((u=window.__DIAOLEME_CONFIG__)==null?void 0:u.apiBaseUrl):"",s=zl(void 0),i=zl(void 0);return r?xc(r):s?xc(s):i||Un}function xc(r){return r.endsWith(Un)||r.endsWith(ca)?r:`${r}${Un}`}function Lh(r){return r.endsWith(gr)?r:r.endsWith(Un)?r.slice(0,-Un.length)+gr:r.endsWith(ca)?r.slice(0,-ca.length)+gr:`${r}${gr}`}function Th(r){return r.endsWith(ia)?r:r.endsWith(Un)?r.slice(0,-Un.length)+ia:r.endsWith(ca)?r.slice(0,-ca.length)+ia:r.endsWith(gr)?r.slice(0,-gr.length)+ia:`${r}${ia}`}const wc={url:eo(),timeout:45e3},kc={url:Lh(eo()),timeout:45e3},Sc={url:Th(eo()),timeout:2e4};async function $h(r){var s;try{const i=await Le.post(kc.url,{messages:r},{timeout:kc.timeout});return Ec(i.data)}catch(i){return Le.isAxiosError(i)&&((s=i.response)!=null&&s.data)?Ec(i.response.data):(console.warn("[model] 聊天接口不可达，返回本地客服兜底。",i),{reply:"我现在暂时连不上后端 AI，但可以先陪你记录：今天先完成一次轻量 Scan，再根据结果选择一个小任务就好。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"CHAT_BACKEND_UNREACHABLE"})}}async function Oh(r=20){var s;try{const i=await Le.get(Sc.url,{params:{limit:r},timeout:Sc.timeout}),d=(Array.isArray((s=i.data)==null?void 0:s.records)?i.data.records:[]).map(p=>zh(p)).filter(p=>!!p);return d.map((p,f)=>{if(p.score_delta!=null)return p;const g=d[f+1];return g?{...p,score_delta:p.score-g.score,prev_title:g.title}:p})}catch(i){return console.warn("[model] 历史接口不可达，保留本地记录。",i),[]}}function zh(r){if(!r||typeof r!="object")return null;const s=r.result&&typeof r.result=="object"?r.result:{},i=typeof r.fun_score=="number"?r.fun_score:typeof r.score=="number"?r.score:typeof s.score=="number"?s.score:typeof s.fun_score=="number"?s.fun_score:null;if(typeof i!="number")return null;const d=(typeof r.created_at=="string"?r.created_at:"").slice(0,10)||new Date().toISOString().slice(0,10),p=typeof r.record_id=="string"?r.record_id:null,f=r.compare&&typeof r.compare=="object"?r.compare:null,g=r.growth&&typeof r.growth=="object"?r.growth:s.growthDelta&&typeof s.growthDelta=="object"?s.growthDelta:{};let b=typeof(f==null?void 0:f.score_delta)=="number"?f.score_delta:null;const k=typeof(f==null?void 0:f.prev_title)=="string"?f.prev_title:null,x=sp({...r,result:{...s,score:i,title:r.title||s.title,source:s.source||r.ai_source,source_label:s.source_label},record_id:p,record_status:r.record_status,fallbackCode:r.fallbackCode??r.fallback_code,ai_source:r.ai_source,success:r.success});return{id:p||`remote_${d}_${i}`,date:d,score:x.score,title:x.title,summary:x.summary,roast:x.roast,encouragement:x.encouragement,tags:x.tags,daily_task:x.daily_task,disclaimer:x.disclaimer,source:x.source,source_label:x.source_label,fallback_code:x.fallback_code,record_status:x.record_status,record_id:x.record_id,count:x.count,thickness:x.thickness,suggestions:x.suggestions,score_delta:b,prev_title:k,exp_added:typeof g.exp_added=="number"?g.exp_added:void 0}}function Ec(r){const s=ip(r==null?void 0:r.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return{reply:Vt(r==null?void 0:r.reply,"我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。"),source:s,source_label:Vt(r==null?void 0:r.source_label,to(s)),fallback_code:Ul((r==null?void 0:r.fallback_code)??(r==null?void 0:r.fallbackCode))}}const np="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",rp=8*1024*1024;async function Nh(r,s=Ah()){if(ap(r),s==="mock-fail")throw await Mh(900),new Error("mock_fail");if(s==="mock-success")return lp(r,"mock");try{const i=new FormData;i.append("image",r);const u=await Le.post(wc.url,i,{timeout:wc.timeout});return sp(u.data)}catch(i){return console.warn("[model] 后端分析代理不可达，返回明确的本地 fallback。",i),jh(r)}}function Ah(){const r=typeof window<"u"?new URLSearchParams(window.location.search):null,s=r==null?void 0:r.get("mock");return s==="success"?"mock-success":s==="fail"?"mock-fail":"auto"}function ap(r){if(!r)throw new Error("empty_file");if(!r.type.startsWith("image/"))throw new Error("not_image");if(r.size<=0)throw new Error("empty_file");if(r.size>rp)throw new Error("file_too_large")}function sp(r){const s=r!=null&&r.result&&typeof r.result=="object"?r.result:r&&typeof r=="object"?r:{},i=ip(s.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return Ih(s,i,{fallbackCode:Ul((r==null?void 0:r.fallbackCode)??(r==null?void 0:r.fallback_code)),recordStatus:Vt(r==null?void 0:r.record_status,i==="api"?"ai_completed":`${i}_result`),recordId:Ul(r==null?void 0:r.record_id)})}function Ih(r,s=r.source||"api",i={}){const u=typeof r.score=="number"?Math.max(0,Math.min(100,Math.round(r.score))):66,d=Array.isArray(r.suggestions)&&r.suggestions.length>0?r.suggestions.slice(0,5).map(String):[r.daily_task||"今晚给自己留 30 分钟放松时间"],p=Array.isArray(r.tags)&&r.tags.length>0?r.tags.slice(0,4).map(String):Dh(u);return{score:u,title:Vt(r.title,u>=70?"发丝巡逻队长":u>=45?"头毛观察员":"发量守护实习生"),summary:Vt(r.summary,u>=70?"今天的头毛队形挺稳，适合继续轻松记录。":"今天有一点小波动，但已经被你认真捕捉到了。"),roast:Vt(r.roast,u>=70?"发丝们排队下班，还挺讲秩序。":"头发像开了早会，讨论得稍微热闹了一点。"),encouragement:Vt(r.encouragement,"别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。"),tags:p,daily_task:Vt(r.daily_task,d[0]),disclaimer:Vt(r.disclaimer,np),source:s,source_label:to(s,r.source_label),fallback_code:i.fallbackCode??null,record_status:i.recordStatus||`${s}_result`,record_id:i.recordId??null,count:r.count==="少量"||r.count==="偏多"?r.count:"中等",thickness:r.thickness==="粗硬"||r.thickness==="细软"?r.thickness:"正常",suggestions:d}}function Vt(r,s){return typeof r=="string"&&r.trim()?r.trim():s}function Ul(r){return typeof r=="string"&&r.trim()?r.trim():null}function ip(r,s,i){return r==="api"||r==="mock"||r==="fallback"?r:i===!1||s==="fallback"?"fallback":s==="mock"?"mock":"api"}function Dh(r){return r>=75?["队形稳定","心态在线","今日好梳"]:r>=50?["轻微波动","继续观察","早点睡派"]:["需要抱抱","从容记录","温柔养成"]}function to(r,s){return s||(r==="api"?"CC club OpenAI compatible AI 分析结果":r==="fallback"?"AI 兜底结果":"Demo mock 结果")}function lp(r,s="mock"){const i=r!=null&&r.name?`已读取「${r.name.slice(0,18)}」`:"已读取今天的照片";return new Promise(u=>setTimeout(()=>{u({score:72,title:"发际线守护者",summary:`${i}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,roast:"头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。",encouragement:"不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。",tags:["今日好梳","轻松观察","早睡加分"],daily_task:"今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。",disclaimer:np,source:s,source_label:to(s),fallback_code:null,record_status:"frontend_demo_mock",record_id:null,count:"中等",thickness:"正常",suggestions:["今晚提前 30 分钟进入休息模式","洗头时水温尽量温和","睡前做 2 分钟放松呼吸"]})},1200))}async function jh(r){return{...await lp(r,"fallback"),title:"本地兜底记录",summary:"后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。",disclaimer:"当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。",source_label:"本地 Demo fallback（非真实 AI）",fallback_code:"BACKEND_UNREACHABLE",record_status:"frontend_local_fallback"}}function Mh(r){return new Promise(s=>setTimeout(s,r))}const Dn=[{id:"none",name:"素颜",emoji:"🌱",cost:0,description:"最真实的自己"},{id:"short",name:"清爽短发",emoji:"✂️",cost:0,description:"简单利落"},{id:"medium",name:"自然中分",emoji:"💇",cost:30,description:"邻家风格"},{id:"long",name:"飘逸长发",emoji:"👸",cost:80,description:"需要坚持打卡"},{id:"curly",name:"羊毛卷",emoji:"🌀",cost:120,description:"俏皮可爱"},{id:"bun",name:"丸子头",emoji:"🎀",cost:200,description:"终极成就"}],_c=r=>{let s;const i=new Set,u=(k,x)=>{const C=typeof k=="function"?k(s):k;if(!Object.is(C,s)){const $=s;s=x??(typeof C!="object"||C===null)?C:Object.assign({},s,C),i.forEach(I=>I(s,$))}},d=()=>s,g={setState:u,getState:d,getInitialState:()=>b,subscribe:k=>(i.add(k),()=>i.delete(k))},b=s=r(u,d,g);return g},Fh=(r=>r?_c(r):_c),Uh=r=>r;function Hh(r,s=Uh){const i=la.useSyncExternalStore(r.subscribe,la.useCallback(()=>s(r.getState()),[r,s]),la.useCallback(()=>s(r.getInitialState()),[r,s]));return la.useDebugValue(i),i}const Bh=r=>{const s=Fh(r),i=u=>Hh(s,u);return Object.assign(i,s),i},qh=(r=>Bh);function op(r,s){let i;try{i=r()}catch{return}return{getItem:d=>{var p;const f=b=>b===null?null:JSON.parse(b,void 0),g=(p=i.getItem(d))!=null?p:null;return g instanceof Promise?g.then(f):f(g)},setItem:(d,p)=>i.setItem(d,JSON.stringify(p,void 0)),removeItem:d=>i.removeItem(d)}}const Hl=r=>s=>{try{const i=r(s);return i instanceof Promise?i:{then(u){return Hl(u)(i)},catch(u){return this}}}catch(i){return{then(u){return this},catch(u){return Hl(u)(i)}}}},Wh=(r,s)=>(i,u,d)=>{let p={storage:op(()=>window.localStorage),partialize:R=>R,version:0,merge:(R,P)=>({...P,...R}),...s},f=!1,g=0;const b=new Set,k=new Set;let x=p.storage;if(!x)return r((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${p.name}', the given storage is currently unavailable.`),i(...R)},u,d);const C=()=>{const R=p.partialize({...u()});return x.setItem(p.name,{state:R,version:p.version})},$=d.setState;d.setState=(R,P)=>($(R,P),C());const I=r((...R)=>(i(...R),C()),u,d);d.getInitialState=()=>I;let q;const H=()=>{var R,P;if(!x)return;const U=++g;f=!1,b.forEach(F=>{var se;return F((se=u())!=null?se:I)});const W=((P=p.onRehydrateStorage)==null?void 0:P.call(p,(R=u())!=null?R:I))||void 0;return Hl(x.getItem.bind(x))(p.name).then(F=>{if(F)if(typeof F.version=="number"&&F.version!==p.version){if(p.migrate){const se=p.migrate(F.state,F.version);return se instanceof Promise?se.then(X=>[!0,X]):[!0,se]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,F.state];return[!1,void 0]}).then(F=>{var se;if(U!==g)return;const[X,de]=F;if(q=p.merge(de,(se=u())!=null?se:I),i(q,!0),X)return C()}).then(()=>{U===g&&(W==null||W(u(),void 0),q=u(),f=!0,k.forEach(F=>F(q)))}).catch(F=>{U===g&&(W==null||W(void 0,F))})};return d.persist={setOptions:R=>{p={...p,...R},R.storage&&(x=R.storage)},clearStorage:()=>{x==null||x.removeItem(p.name)},getOptions:()=>p,rehydrate:()=>H(),hasHydrated:()=>f,onHydrate:R=>(b.add(R),()=>{b.delete(R)}),onFinishHydration:R=>(k.add(R),()=>{k.delete(R)})},p.skipHydration||H(),q||I},Xh=Wh,Vh=()=>new Date().toISOString().slice(0,10),Cc="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",xe=qh()(Xh((r,s)=>({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:Cc,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[],setAnalysis:i=>r({dropScore:i.score,title:i.title,summary:i.summary,roast:i.roast,encouragement:i.encouragement,tags:i.tags,dailyTask:i.daily_task,disclaimer:i.disclaimer,source:i.source,sourceLabel:i.source_label,fallbackCode:i.fallback_code,recordStatus:i.record_status,recordId:i.record_id,count:i.count,thickness:i.thickness,suggestions:i.suggestions}),viewReport:i=>{const u=s().reportHistory.find(d=>d.id===i);u&&r({dropScore:u.score,title:u.title,summary:u.summary,roast:u.roast,encouragement:u.encouragement,tags:u.tags,dailyTask:u.daily_task,disclaimer:u.disclaimer,source:u.source,sourceLabel:u.source_label,fallbackCode:u.fallback_code,recordStatus:u.record_status,recordId:u.record_id,count:u.count,thickness:u.thickness,suggestions:u.suggestions})},viewDayReport:i=>{const u=s().reportHistory.filter(f=>f.date===i);if(u.length===0)return;const d=u[0],p=Math.round(u.reduce((f,g)=>f+g.score,0)/u.length);r({dropScore:p,title:d.title,summary:d.summary,roast:d.roast,encouragement:d.encouragement,tags:d.tags,dailyTask:d.daily_task,disclaimer:d.disclaimer,source:d.source,sourceLabel:d.source_label,fallbackCode:d.fallback_code,recordStatus:d.record_status,recordId:d.record_id,count:d.count,thickness:d.thickness,suggestions:d.suggestions})},addReport:i=>r(u=>({reportHistory:[i,...u.reportHistory].slice(0,100)})),mergeRemoteHistory:i=>r(u=>{const d=new Set(i.map(f=>f.record_id||f.id).filter(Boolean));return{reportHistory:[...u.reportHistory.filter(f=>!d.has(f.record_id||f.id)),...i].slice(0,100)}}),markCheckinToday:()=>{const i=Vh();s().checkinDays.includes(i)||r(u=>({checkinDays:[...u.checkinDays,i],points:u.points+5}))},unlockHairStyle:(i,u)=>{const d=s();return d.unlockedHairStyles.includes(i)?!0:d.points<u?!1:(r({unlockedHairStyles:[...d.unlockedHairStyles,i],points:d.points-u}),!0)},addPoints:i=>r(u=>({points:u.points+i})),resetAll:()=>{r({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:Cc,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[]}),typeof window<"u"&&window.localStorage.removeItem("diaolema-user")}}),{name:"diaolema-user",storage:op(()=>localStorage)}));function Hn({scale:r=1}){return`<div class="buddy" style="transform:scale(${r})"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div>`}const Qh=`<section class="page active" data-page="home">
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
              ${Hn({scale:1})}
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
        </section>`,Kh=`<section class="page" data-page="scan">
          <div class="scan-wrap">
            <div class="feature-stack">
              <div class="feature"><b>☀️ 光线充足</b><small>自然光或白色灯光</small></div>
              <div class="feature"><b>⬚ 平铺头发</b><small>尽量不重叠</small></div>
              <div class="feature"><b>◌ 对比清晰</b><small>浅色背景更佳</small></div>
              <div class="card soft"><b>别担心～</b><p>我们一起慢慢变好 💗</p><div class="mini-buddy"></div></div>
            </div>
            <div class="card" style="text-align:center">
              <div class="scan-orbit">
                ${Hn({scale:.78})}
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
        </section>`,Jh=`<section class="page" data-page="buddy">
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
                <div class="buddy-stage"><div class="ground"></div>${Hn({scale:1})}</div>
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
        </section>`,Yh=`<section class="page" data-page="quests">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div>
                  <h3>今日活跃奖励</h3>
                  <p>完成今日任务，领取额外奖励！</p>
                  <div class="row" id="weekRewards"><span class="badge">✓<br><small>+10 XP</small></span><span class="badge">✓<br><small>+15 XP</small></span><span class="badge">三<br><small>+20 XP</small></span><span class="badge">四<br><small>+25 XP</small></span><span class="badge">五<br><small>+30 XP</small></span><span class="badge">六<br><small>+25 XP</small></span><span class="badge">日<br><small>+25 XP</small></span></div>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Hn({scale:.62})}</div>
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
        </section>`,Gh=`<section class="page" data-page="journey">
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
        </section>`,Zh=`<section class="page" data-page="league">
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
        </section>`,e0=`<section class="page" data-page="rewards">
          <div class="rewards-dashboard">
            <main class="rewards-main">
              <section class="rewards-points-hero">
                <div class="rewards-points-copy">
                  <span>我的积分</span>
                  <h2><span data-rewards-points></span><small>XP</small></h2>
                  <p>距离下一等级还需 2,640 XP</p>
                  <div class="rewards-level-progress"><i style="width:82%"></i></div>
                </div>
                <img class="rewards-hero-character" src="./rewards-assets/hero-character.png" alt="蒲公英角色">
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
                <button type="button" class="event-banner"><img src="./rewards-assets/event-banner.png" alt="夏日养发计划"></button>
              </section>

              <section class="rewards-side-panel records-panel">
                <div class="rewards-panel-heading"><strong>兑换记录</strong><button type="button">全部记录 ›</button></div>
                <div class="record-list" id="rewardsRecords"></div>
                <button type="button" class="records-link">查看全部记录 ›</button>
              </section>
            </aside>
          </div>
        </section>`,t0=`<section class="page" data-page="diary">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div><h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2><p>每一根头发都在努力生长，你也是！</p><button class="pill primary">😊 开心</button></div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Hn({scale:.5})}</div>
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
        </section>`,n0=`<section class="page" data-page="community">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:250px">
                <div><h2 style="font-size:36px">你并不孤单，我们都在努力生长 ✨</h2><p>分享你的故事，互相鼓励，成为彼此的光。</p><div class="hero-buttons"><button class="cta primary">✎ 分享我的故事</button><button class="cta ghost"># 浏览话题</button></div></div>
                <div class="buddy-stage" style="min-height:210px"><div class="ground"></div>${Hn({scale:.48})}</div>
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
        </section>`,r0=`<section class="page" data-page="me">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:300px">
                <div>
                  <h2 style="font-size:36px">Me <span class="badge">Lv.5</span></h2>
                  <p>一起变好呀！</p>
                  <div class="row"><span class="badge">12,360 XP</span><span class="badge">连续 32 天</span></div>
                </div>
                <div class="buddy-stage" style="min-height:250px"><div class="ground"></div>${Hn({scale:.58})}</div>
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
        </section>`,a0=`<div class="app">
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

        ${Qh}

        ${Kh}

        ${Jh}

        ${Yh}

        ${Gh}

        ${Zh}

        ${e0}

        ${t0}

        ${n0}

        ${r0}
      </main>
    </div>`,s0=`
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
`,i0=`
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
`;function oa(r,s){r.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===s)),r.querySelectorAll("[data-go]").forEach(p=>p.classList.toggle("active",p.dataset.go===s));const i=r.querySelector("#pageHeading"),u=r.querySelector("#pageSub"),d={scan:["Scan","用科学的方式，了解你的头发状况 💗"],diary:["Diary","真实分析记录会在这里沉淀"]};i&&d[s]&&(i.textContent=d[s][0]),u&&d[s]&&(u.textContent=d[s][1])}function up(r){return`./${String(r).replace(/^\/+/,"")}`}function fe(r,s){r&&(r.innerHTML=s)}function z(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function gt(r,s){const i=r.querySelector("[data-toast]");i==null||i.remove();const u=document.createElement("div");u.dataset.toast="true",u.className="prototype-toast",u.textContent=s,r.appendChild(u),window.setTimeout(()=>u.remove(),1800)}const dp=()=>"diaoleme-prototype-buddy-care",cp=()=>"diaoleme-prototype-selected-hair-style";function l0(r,s){const i=xe.getState(),u=mp(),d=i.reportHistory[0],p=Math.max(62,Math.min(98,Math.round((i.dropScore??82)+Math.min(i.reportHistory.length,6)))),f=Math.max(56,Math.min(96,Math.round((u.energy+u.love)/2))),g=f>=78?"Happy":f>=64?"Calm":"Need Care";gp(i.unlockedHairStyles),Dn.filter(x=>i.unlockedHairStyles.includes(x.id)).length;const b=s.getQuestCount();fe(r.querySelector('[data-page="buddy"] .metric'),`
    <div class="metric-row"><span style="font-size:32px">💗</span><b>生命值</b><div class="meter"><div class="fill" style="--w:${p}%;--c:#ff77a8"></div></div><b>${p}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">⚡</span><b>能量值</b><div class="meter"><div class="fill" style="--w:${u.energy}%;--c:#ffad2f"></div></div><b>${u.energy}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">😊</span><b>心情值</b><div class="meter"><div class="fill" style="--w:${f}%;--c:#8b5cf6"></div></div><b>${g}</b></div>
  `),pp(r),fe(r.querySelector('[data-page="buddy"] .card.item-list'),`
    <button class="item buddy-action dress" data-buddy-action="dress"><span>👗</span><b>Dress Up<small>装扮你的伙伴，选择或解锁造型</small></b><span>›</span></button>
    <button class="item buddy-action feed" data-buddy-action="feed"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
    <button class="item buddy-action diary" data-buddy-action="diary"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
    <button class="item buddy-action growth" data-buddy-action="growth"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
  `),fe(r.querySelector('[data-page="buddy"] .grid:nth-child(2) .card:first-child'),`
    <h3>今日头发报告</h3>
    <div><span class="big-number">${i.dropScore??"--"}</span> ${i.dropScore==null?"":"分"}</div>
    <p>${z((d==null?void 0:d.summary)||"还没有今日报告，完成一次 Scan 后会同步到 Buddy。")}</p>
    <div class="chart">${s.buildTrendBars(i.reportHistory)}</div>
  `);const k=r.querySelector('[data-page="buddy"]');k&&!k.querySelector(".buddy-extra-grid")&&k.insertAdjacentHTML("beforeend",'<div class="buddy-extra-grid"><div class="card" data-buddy-summary></div><div class="card" data-buddy-cheers></div></div>'),fe(r.querySelector("[data-buddy-summary]"),`
    <h3>💗 本周成长小结</h3>
    <p>你的护理表现超过了 ${Math.min(96,60+b.done*4+i.checkinDays.length)}% 的用户，继续保持哦！</p>
    <div class="buddy-summary-stats">
      <span><b>${i.checkinDays.length||0} 天</b><small>护理天数</small></span>
      <span><b>${b.done}/${b.total}</b><small>任务完成</small></span>
      <span><b>${s.avgScore(i.reportHistory)||"--"}</b><small>平均状态分</small></span>
      <span><b>${u.energy>=78?"良好":"待补充"}</b><small>充足睡眠</small></span>
    </div>
  `),fe(r.querySelector("[data-buddy-cheers]"),`
    <h3>💗 来自大家的鼓励</h3>
    <div class="buddy-cheers">
      ${["Luna|你的新发型超可爱！我们一起加油呀 🌞","Mia|头发也在慢慢变强大呢，你一定可以的！💪","Ray|看到你的变化啦，好棒！！✨"].map(x=>{const[C,$]=x.split("|");return`<div class="buddy-cheer"><span class="avatar">${C[0]}</span><b>${C}</b><p>${z($)}</p><small>${C==="Ray"?"1 天前":C==="Mia"?"5 小时前":"2 小时前"}</small></div>`}).join("")}
    </div>
  `)}function pp(r){const s=xe.getState(),i=gp(s.unlockedHairStyles),u=Dn.filter(d=>s.unlockedHairStyles.includes(d.id)).length;fe(r.querySelector('[data-page="buddy"] .section-title'),`解锁发型 <span class="badge">${u} / ${Dn.length} 已解锁</span>`),fe(r.querySelector("#skins"),Dn.map(d=>{const p=s.unlockedHairStyles.includes(d.id),f=d.id===i,g=p?f?"使用中":"点击换上":`${d.cost} XP 解锁`;return`<button class="skin ${f?"active":""}" data-unlock-id="${z(d.id)}"><div class="mini-buddy" style="${p?"":"opacity:.45"}"></div><b>${z(d.name)}</b><small>${z(g)}</small>${p?"":'<span class="buddy-lock">🔒</span>'}</button>`}).join(""))}function o0(r,s,i){var u;if(r==="dress"){gt(s,"已打开造型选择，点击卡片可使用或解锁"),(u=s.querySelector("#skins"))==null||u.scrollIntoView({behavior:"smooth",block:"center"});return}if(r==="feed"){const d=mp();u0({energy:Math.min(100,d.energy+12),love:Math.min(100,d.love+6),feedCount:d.feedCount+1,lastFed:i()}),xe.getState().addPoints(3),gt(s,"小发球吃饱啦：能量 +12，爱心 +6，XP +3");return}if(r==="diary"){oa(s,"diary"),gt(s,"已打开 Buddy Diary");return}r==="growth"&&(oa(s,"journey"),gt(s,"已打开成长记录"))}function fp(r){localStorage.setItem(cp(),r)}function gp(r){var u;const s=localStorage.getItem(cp());if(s&&r.includes(s))return s;const i=r[r.length-1]||((u=Dn[0])==null?void 0:u.id)||"none";return fp(i),i}function mp(){try{return{energy:68,love:86,feedCount:0,lastFed:null,...JSON.parse(localStorage.getItem(dp())||"{}")}}catch{return{energy:68,love:86,feedCount:0,lastFed:null}}}function u0(r){localStorage.setItem(dp(),JSON.stringify(r))}function no(r){const[s,i,u]=r.split("-");return`${i}/${u}`}function d0(r,s=!1){return r.length?r.map(i=>{const u=z(i.id),d=s?"":` data-view-report="${u}" role="button" tabindex="0"`,p=typeof i.score_delta=="number"?i.score_delta>0?`↑${i.score_delta}`:i.score_delta<0?`↓${Math.abs(i.score_delta)}`:"→0":null,f=typeof i.exp_added=="number"&&i.exp_added>0?` · +${i.exp_added}XP`:"",g=p?`<small>${z(i.prev_title?`对比「${i.prev_title}」 ${p}${f}`:`较上次 ${p}${f}`)}</small>`:`<small>${z(i.summary)}</small>`;return`<div class="item"${d}><span>${s?i.date.slice(5):"〰"}</span><b>${z(i.title)}${g}</b><button class="status" data-view-report="${u}">${i.score} 分</button></div>`}).join(""):'<div class="item"><span>📷</span><b>暂无记录<small>上传图片后会出现在这里。</small></b><span class="status">--</span></div>'}function c0(r){return r.reduce((s,i)=>(s[i.date]=s[i.date]||[],s[i.date].push(i),s),{})}function p0(r,s){const i=Object.keys(s).sort().reverse();if(!r.length)return[{icon:"📷",title:"等待首次扫描",note:"点击去 Scan 上传",date:""},{icon:"🌱",title:"报告会自动保存",note:"生成后出现在这里",date:""},{icon:"✨",title:"趋势稍后生成",note:"多次记录后更清晰",date:""}];const u=r.reduce((d,p)=>p.score>d.score?p:d,r[0]);return[{icon:"⚑",title:"开始记录",note:no(i[i.length-1]||r[r.length-1].date),date:i[i.length-1]||r[r.length-1].date},{icon:"📄",title:`${r.length} 份报告`,note:"Scan 自动沉淀",date:r[0].date},{icon:"⭐",title:"最高状态分",note:`${u.score} 分`,date:u.date},{icon:"🗓",title:`${i.length} 个记录日`,note:"持续观察中",date:i[0]||r[0].date}]}function f0(r,s){if(!r.length)return'<div class="item"><span>🌱</span><b>还没有高光<small>完成一次 Scan 后自动生成。</small></b><button class="pill" data-go="scan">去扫描</button></div>';const i=r[0],u=r.reduce((d,p)=>p.score>d.score?p:d,i);return[`<div class="item"><span>📄</span><b>最新报告已保存<small>${z(i.title)}</small></b><button class="pill" data-view-report="${z(i.id)}">查看</button></div>`,`<div class="item"><span>⭐</span><b>本月最高状态分<small>${u.score} 分，仅作趣味记录。</small></b><button class="pill" data-view-report="${z(u.id)}">打开</button></div>`,`<div class="item"><span>🗓</span><b>${Object.keys(s).length} 个记录日<small>每次上传都会沉淀到 Journey。</small></b><button class="pill" data-action="open-journey">回看</button></div>`].join("")}function hp(r){const s=r.slice(0,7).reverse().map(u=>Math.max(18,Math.min(96,u.score))),i=[28,36,44,52,60];return(s.length?s:i).map(u=>`<span class="bar" style="height:${u}%"></span>`).join("")}function vp(r){var C;const s=xe.getState().reportHistory,i=3,u=Math.max(1,Math.ceil(s.length/i)),d=Math.min(Math.max(Number(r.dataset.scanRecordPage||0),0),u-1);r.dataset.scanRecordPage=String(d);const p=s.slice(d*i,d*i+i),f=s.length>i?`<div class="scan-record-pager"><button class="pill" data-scan-record-page="${Math.max(0,d-1)}" ${d===0?"disabled":""}>上一页</button><small>${d+1} / ${u}</small><button class="pill" data-scan-record-page="${Math.min(u-1,d+1)}" ${d>=u-1?"disabled":""}>下一页</button></div>`:"",g=s.slice(0,4),b=((C=s[0])==null?void 0:C.source_label)||"等待分析",k=z(b),x=s.length?Math.round(s.reduce(($,I)=>$+I.score,0)/s.length):null;fe(r.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),`<h3>本周扫描数据</h3><div class="three grid scan-stat-grid"><div class="scan-stat-item"><span class="big-number">${s.length}</span><small>扫描次数</small></div><div class="scan-stat-item"><span class="big-number">${x||"--"}</span><small>平均状态分</small></div><div class="scan-stat-item scan-source-stat"><span class="badge scan-source-value" title="${k}" data-full-source="${k}">${k}</span><small>最新来源</small></div></div>`),fe(r.querySelector('[data-page="scan"] .grid .card.item-list'),`<h3>最近扫描记录</h3><div class="scan-record-list">${d0(p)}</div>${f}`),g0(r,s),fe(r.querySelector("#diaries"),g.length?g.map($=>`<div class="item"><span><b>${no($.date)}</b><br>报告</span><b>${z($.title)}<small>${z($.summary)}</small></b><button class="pill" data-view-report="${z($.id)}">查看</button></div>`).join(""):'<div class="item"><span>📷</span><b>还没有日记<small>上传图片后会自动保存分析记录。</small></b><span>⋯</span></div>')}function g0(r,s){const i=c0(s),u=s.slice(0,4),d=s.length?Math.round(s.reduce((f,g)=>f+g.score,0)/s.length):null,p=xe.getState().checkinDays.length;fe(r.querySelector("#milestones"),p0(s,i).map(f=>`
    <button class="milestone" ${f.date?`data-view-day="${z(f.date)}"`:'data-go="scan"'}>
      <div class="dot">${f.icon}</div>${z(f.title)}<br><small>${z(f.note)}</small>
    </button>
  `).join("")),fe(r.querySelector("#timeline"),u.length?u.map((f,g)=>{const b=typeof f.score_delta=="number"?f.score_delta>0?`↑${f.score_delta}`:f.score_delta<0?`↓${Math.abs(f.score_delta)}`:"持平":null,k=b?`<span class="badge">${z(b)}${typeof f.exp_added=="number"&&f.exp_added>0?` · +${f.exp_added}XP`:""}</span>`:g===0?'<span class="badge">最新</span>':"",x=b&&f.prev_title?`<small>对比上一份「${z(f.prev_title)}」· ${z(f.summary)}</small>`:`<small>${z(f.summary)}</small>`;return`
    <div class="item journey-record">
      <span>${z(no(f.date))}</span>
      <b>${z(f.title)}${x}</b>
      <span class="status">${f.score} 分</span>
      <button class="pill primary" data-view-report="${z(f.id)}">查看报告</button>
      <button class="pill" data-share-report="${z(f.id)}">分享</button>
      ${k}
    </div>
  `}).join(""):`
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
    <div class="chart">${hp(s)}</div>
    <p>${s.length?"根据最近扫描报告生成，只做轻松记录参考。":"完成一次 Scan 后，这里会显示报告趋势。"}</p>
  `),fe(r.querySelector('[data-page="journey"] aside .card:nth-child(3)'),`
    <h3>本月高光时刻</h3>
    <div class="item-list">
      ${f0(s,i)}
    </div>
    <button class="pill" data-action="journey-share">分享我的旅程</button>
  `)}const m0=Math.round(rp/1024/1024);function h0(r,s){const i=r.querySelector('[data-page="scan"]'),u=r.querySelector("#scanBtn"),d=r.querySelector("#uploadBtn"),p=r.querySelector("#scanCompleteBtn"),f=r.querySelector("#scanPercent"),g=i==null?void 0:i.querySelector('.card[style*="text-align:center"]'),b=document.createElement("input"),k=document.createElement("input");let x=null,C=null,$=null;const I=(re,ae=!1)=>{re.type="file",re.accept="image/*",ae&&re.setAttribute("capture","environment"),re.style.display="none",document.body.appendChild(re)};I(b,!0),I(k);const q=(re,ae="idle")=>{const G=g==null?void 0:g.querySelector("[data-analysis-status]"),Z=G||document.createElement("p");Z.dataset.analysisStatus="true",Z.textContent=re,Z.style.color=ae==="error"?"#ff7a2f":ae==="success"?"#65c982":"#65709e",Z.style.fontWeight="800",G||g==null||g.appendChild(Z)},H=re=>{C&&URL.revokeObjectURL(C),C=URL.createObjectURL(re);const ae=r.querySelector(".scan-orbit"),G=ae==null?void 0:ae.querySelector("[data-upload-preview]"),Z=G||document.createElement("img");Z.dataset.uploadPreview="true",Z.src=C,Z.alt="上传预览",Object.assign(Z.style,{position:"absolute",inset:"22px",width:"calc(100% - 44px)",height:"calc(100% - 44px)",objectFit:"cover",borderRadius:"50%",boxShadow:"0 18px 45px rgba(99, 75, 168, 0.22)",zIndex:"3"}),G||ae==null||ae.appendChild(Z),f&&(f.textContent="已选",f.style.zIndex="4"),p&&(p.style.display=""),q(`已选择：${re.name}，点击“完成”确认并开始 AI 分析。`)},R=()=>{var re;$==null||$.getTracks().forEach(ae=>ae.stop()),$=null,(re=r.querySelector("[data-camera-modal]"))==null||re.remove()},P=re=>{const ae=new File([re],`diaoleme-camera-${Date.now()}.jpg`,{type:"image/jpeg"});x=ae,H(ae),q("已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。"),R()},U=async()=>{var G;const re={video:{facingMode:{ideal:"environment"}},audio:!1};if((G=navigator.mediaDevices)!=null&&G.getUserMedia)return navigator.mediaDevices.getUserMedia(re);const ae=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return ae?new Promise((Z,ye)=>ae.call(navigator,re,Z,ye)):null},W=async()=>{var re,ae;try{if($=await U(),!$){q("此页面无相机权限，请检查吧。","error");return}const G=document.createElement("div");G.dataset.cameraModal="true",G.className="camera-capture-modal",G.innerHTML='<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>',r.appendChild(G);const Z=G.querySelector("video");Z&&(Z.srcObject=$),(re=G.querySelector("[data-camera-cancel]"))==null||re.addEventListener("click",R),(ae=G.querySelector("[data-camera-capture]"))==null||ae.addEventListener("click",()=>{var Re;if(!Z||Z.videoWidth===0)return;const ye=document.createElement("canvas");ye.width=Z.videoWidth,ye.height=Z.videoHeight,(Re=ye.getContext("2d"))==null||Re.drawImage(Z,0,0),ye.toBlob(Ee=>{Ee&&P(Ee)},"image/jpeg",.92)}),q("相机已打开，请拍照后自动上传。")}catch(G){console.error("[prototype] camera failed:",G),R(),q("此页面无相机权限，请检查吧。","error")}},F=()=>W(),se=()=>k.click(),X=re=>{var Z;const ae=re.currentTarget,G=(Z=ae.files)==null?void 0:Z[0];if(ae.value="",!!G)try{ap(G),x=G,H(G)}catch(ye){x=null;const Re={not_image:"这个文件不是图片，请选择 JPG、PNG 等图片文件。",empty_file:"图片文件为空，请重新选择。",file_too_large:`图片有点大啦，请选择 ${m0}MB 以内的照片再试。`};q(Re[ye==null?void 0:ye.message]||"图片暂时读不出来，请换一张再试。","error")}},de=async()=>{if(!x){se(),q("请先选择或拍摄一张图片。");return}u&&(u.disabled=!0),d&&(d.disabled=!0),p&&(p.disabled=!0),q("分析中，正在调用后端 AI 代理...");let re=10;f&&(f.textContent="10%");const ae=window.setInterval(()=>{re=Math.min(re+8,96),f&&(f.textContent=`${re}%`)},140);try{const G=await Nh(x);v0(G),window.clearInterval(ae),Bl(r,G),s.renderStatefulSections(),q(G.fallback_code?"已生成 fallback 结果，可继续演示完整流程。":"AI 分析完成，结果已写入报告和历史记录。","success")}catch(G){console.error("[prototype] analyze failed:",G),window.clearInterval(ae),f&&(f.textContent="失败"),q("分析接口暂时不可用，请稍后重试。","error")}finally{u&&(u.disabled=!1),d&&(d.disabled=!1),p&&(p.disabled=!1)}};return b.addEventListener("change",X),k.addEventListener("change",X),u==null||u.addEventListener("click",F),d==null||d.addEventListener("click",se),p==null||p.addEventListener("click",de),()=>{b.removeEventListener("change",X),k.removeEventListener("change",X),u==null||u.removeEventListener("click",F),d==null||d.removeEventListener("click",se),p==null||p.removeEventListener("click",de),R(),b.remove(),k.remove(),C&&URL.revokeObjectURL(C)}}function v0(r){const s=xe.getState();s.setAnalysis(r),s.addReport({id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),date:y0(),score:r.score,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags,daily_task:r.daily_task,disclaimer:r.disclaimer,source:r.source,source_label:r.source_label,fallback_code:r.fallback_code,record_status:r.record_status,record_id:r.record_id,count:r.count,thickness:r.thickness,suggestions:r.suggestions})}function Rc(){const r=xe.getState();return{score:r.dropScore??66,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags.length?r.tags:["等待记录"],daily_task:r.dailyTask,disclaimer:r.disclaimer,source:r.source,source_label:r.sourceLabel,fallback_code:r.fallbackCode,record_status:r.recordStatus,record_id:r.recordId,count:r.count,thickness:r.thickness,suggestions:r.suggestions}}function Pc(r){var i;const s=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');(i=s==null?void 0:s.querySelector("[data-analysis-result]"))==null||i.remove(),s==null||s.classList.remove("has-analysis-result")}function Bl(r,s){const i=r.querySelector("#scanPercent"),u=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');if(i&&(i.textContent=`${s.score}%`),!u||xe.getState().dropScore==null)return;const d=u.querySelector("[data-analysis-result]");d==null||d.remove(),u.classList.add("has-analysis-result");const p=s.source_label||"未知来源",f=s.fallback_code?`fallback: ${s.fallback_code}`:s.record_id?`记录编号: ${s.record_id}`:"已生成新的扫描记录",g=u.querySelector(".scan-orbit");g&&(g.style.filter="saturate(1.08)");const b=`
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-head">
        <div>
          <span class="badge analysis-source-badge">${z(p)}</span>
          <h3>${z(s.title)}</h3>
        </div>
        <div class="scan-score-chip">${z(String(s.score))}</div>
      </div>
      <p class="analysis-source-detail">${z(f)}</p>
      <p>${z(s.summary)}</p>
      <div class="analysis-grid three grid">
        <div class="analysis-metric"><span class="big-number">${z(s.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${z(s.thickness)}</span><small>发质观感</small></div>
        <div class="analysis-metric"><span class="big-number">${z(s.score)}</span><small>趣味分数</small></div>
      </div>
      <p><b>温柔吐槽：</b>${z(s.roast)}</p>
      <p><b>今日任务：</b>${z(s.daily_task)}</p>
      <div class="analysis-tags">${s.tags.map(k=>`<span class="badge">${z(k)}</span>`).join("")}</div>
      <small>${z(s.disclaimer)}</small>
    </div>
  `;u.insertAdjacentHTML("beforeend",b)}function y0(){return new Date().toISOString().slice(0,10)}const jn=["daily","weekly","growth","special"],ql={daily:"每日任务",weekly:"每周任务",growth:"成长任务",special:"特别任务"},b0={weekly:[{id:"weekly-scan-3",category:"weekly",icon:"📷",title:"完成 3 次记录",description:"给小发球攒一组本周观察素材。",target:"0/3",reward:35,actionLabel:"记录本周"},{id:"weekly-sleep-4",category:"weekly",icon:"🌙",title:"4 天温柔早睡",description:"不卷到深夜，给头皮也放个小假。",target:"0/4",reward:40,actionLabel:"打卡早睡"},{id:"weekly-share",category:"weekly",icon:"💬",title:"分享一次发球周报",description:"把本周小进步发给朋友，轻松晒一下。",target:"0/1",reward:25,actionLabel:"去分享"},{id:"weekly-massage",category:"weekly",icon:"🪮",title:"完成 3 次头皮放松",description:"睡前 5 分钟，给自己按下暂停键。",target:"0/3",reward:30,actionLabel:"开始放松"}],growth:[{id:"growth-first-report",category:"growth",icon:"🌱",title:"生成第一份种子报告",description:"上传照片后获得你的第一枚趣味称号。",target:"0/1",reward:45,actionLabel:"去扫描"},{id:"growth-7-day",category:"growth",icon:"🔥",title:"连续记录 7 天",description:"把小习惯养成小成就，不求完美只求坚持。",target:"0/7",reward:80,actionLabel:"点亮进度"},{id:"growth-unlock-style",category:"growth",icon:"🎀",title:"解锁一个新造型",description:"给小发球换套新皮肤，奖励认真生活的你。",target:"0/1",reward:60,actionLabel:"去解锁"},{id:"growth-history",category:"growth",icon:"📒",title:"查看一次历史趋势",description:"回头看看，最近的自己已经很棒啦。",target:"0/1",reward:25,actionLabel:"看趋势"}],special:[{id:"special-spring",category:"special",icon:"🌸",title:"春风吹发季签到",description:"参与限时季节活动，领取春日能量。",target:"0/1",reward:50,actionLabel:"领取能量"},{id:"special-mood",category:"special",icon:"😊",title:"写下今日心情弹幕",description:"把压力吐槽给小发球听，轻轻放过自己。",target:"0/1",reward:30,actionLabel:"写一句"},{id:"special-buddy",category:"special",icon:"☁️",title:"和 Buddy 互动一次",description:"摸摸小发球，让陪伴感上线。",target:"0/1",reward:35,actionLabel:"去互动"},{id:"special-community",category:"special",icon:"✨",title:"逛逛社区治愈帖",description:"看看大家的小妙招，找到一点轻松感。",target:"0/1",reward:25,actionLabel:"去看看"}]};let Wl=null;function x0(r){Wl=r}function w0(r,s){Qt();const i=xe.getState(),u=mr(s),d=ua(s),p=u.filter(x=>d.has(x.id)).length,f=jn.flatMap(mr),g=jn.reduce((x,C)=>x+ua(C).size,0),b=f.length?Math.round(g/f.length*100):0,k=mr("daily").every(x=>ua("daily").has(x.id));fe(r.querySelector('[data-page="quests"] .tabs'),jn.map(x=>`<button class="pill ${x===s?"primary":""}" data-quest-category="${x}">${ql[x]}</button>`).join("")),fe(r.querySelector("#questList"),u.map(x=>_0(x,d.has(x.id))).join("")+C0(s,p,u.length,k)),fe(r.querySelector("#weekRewards"),["一","二","三","四","五","六","日"].map((x,C)=>`<span class="badge">${C<i.checkinDays.length?"✓":x}<br><small>+${C<5?10+C*5:25} XP</small></span>`).join("")),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(1)'),`<h3>我的任务进度</h3><div class="big-number">${b}%</div><div class="meter"><div class="fill" style="--w:${b}%"></div></div><p>完成 ${g}/${f.length} 个任务</p><small>${ql[s]}：${p}/${u.length}</small>`),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(3)'),`<h3>任务小贴士</h3><p>${R0(s)}</p><div class="mini-buddy"></div>`),fe(r.querySelector('[data-page="quests"] aside .card:nth-child(4)'),`<h3>本周任务总览</h3><div class="donut" data-label="${g}/${f.length}\\A 已完成"></div><p>${k?"每日建议已全部点亮，额外奖励已入账。":"今天再点亮一个小任务，就很不错啦。"}</p>`)}function k0(r,s,i){const u=mr(r).find(p=>p.id===s);if(!u)return;const d=ua(r);if(d.has(s)){gt(i,"这个任务已经领取过啦");return}if(d.add(s),P0(r,d),xe.getState().addPoints(u.reward),gt(i,`+${u.reward} XP · ${u.title}`),r==="daily"){const p=mr("daily");p.length>0&&p.every(f=>d.has(f.id))&&localStorage.getItem(Qt().taskBonusKey())!=="1"&&(localStorage.setItem(Qt().taskBonusKey(),"1"),xe.getState().addPoints(10),gt(i,"每日建议全完成，额外 +10 XP"))}}function S0(){const r=Qt();localStorage.removeItem(r.taskKey()),localStorage.removeItem(r.taskBonusKey()),jn.forEach(s=>localStorage.removeItem(r.questProgressKey(s)))}function E0(){const r=jn.flatMap(mr).length;return{done:jn.reduce((i,u)=>i+ua(u).size,0),total:r}}function mr(r){const s=Qt();return r!=="daily"?b0[r]:s.getSuggestions().map((i,u)=>({id:`daily-${u}`,category:"daily",icon:["💧","🌙","🥗","🖐","🚶"][u]||"✨",title:i,description:u===0?"来自 AI 的轻量建议":"完成后给小发球增加一点能量",target:"0/1",reward:u===0?5:2,actionLabel:"去完成"}))}function ua(r){try{const s=new Set(JSON.parse(localStorage.getItem(Qt().questProgressKey(r))||"[]"));return r==="daily"&&s.size===0&&L0().forEach(i=>s.add(`daily-${i}`)),s}catch{return new Set}}function Lc(r){return jn.includes(r)}function _0(r,s){return`<div class="item"><span style="font-size:26px">${r.icon}</span><b>${z(r.title)}<small>${z(r.description)}</small></b><span>${s?"1/1":z(r.target)}</span><button data-quest-category="${r.category}" data-quest-id="${r.id}" class="quest-btn ${s?"done":""}">${s?"✓ 已领取":z(r.actionLabel)}</button></div>`}function C0(r,s,i,u){const d=r==="daily"?10:Math.max(20,i*10),p=s>=i;return`<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>${r==="daily"?u?"今日建议全部完成！":"完成所有每日任务可获得额外奖励！":`${ql[r]}完成度 ${s}/${i}`}<small>${p?"小发球已经收到这份能量。":"慢慢来，完成一个也算数。"}</small></b><span>+${d} XP</span><button class="quest-btn done">${p?"已点亮":"未完成"}</button></div>`}function R0(r){return{daily:"今天不用做到满分，挑一个最容易的小任务开始就很好。",weekly:"周任务适合拆成几天完成，记录、休息和放松都算成长。",growth:"成长任务会长期保留，像养小发球一样一点点解锁。",special:"特别任务偏活动和社交，主打轻松参与，不制造压力。"}[r]}function P0(r,s){if(localStorage.setItem(Qt().questProgressKey(r),JSON.stringify([...s])),r==="daily"){const i=[...s].map(u=>Number(u.replace("daily-",""))).filter(u=>Number.isFinite(u));localStorage.setItem(Qt().taskKey(),JSON.stringify(i))}}function L0(){try{return new Set(JSON.parse(localStorage.getItem(Qt().taskKey())||"[]"))}catch{return new Set}}function Qt(){if(!Wl)throw new Error("quest controller is not configured");return Wl}const He=up("rewards-assets/"),T0=[{name:"樱花发箍",subtitle:"Lv.3 解锁",points:2e3,image:`${He}reward-flower.png`,locked:!0,unlockId:"sakura"},{name:"星光泡泡发型",subtitle:"Lv.5 解锁",points:3500,image:`${He}reward-starlight.png`,locked:!0,unlockId:"star"},{name:"生发精华液 30ml",subtitle:"实物好物",points:4800,image:`${He}reward-serum.png`},{name:"治愈蘑菇帽",subtitle:"Lv.6 解锁",points:2800,image:`${He}reward-healing.png`,locked:!0},{name:"护发礼盒套装",subtitle:"实物好物",points:6500,image:`${He}reward-gift.png`},{name:"蒲公英小夜灯",subtitle:"限量周边",points:3200,image:`${He}reward-lamp.png`,locked:!0},{name:"嫩芽发型",subtitle:"Lv.4 解锁",points:2500,image:`${He}reward-sprout.png`,locked:!0,unlockId:"sprout"},{name:"头皮按摩梳",subtitle:"实物好物",points:4200,image:`${He}reward-brush.png`},{name:"银河披风",subtitle:"Lv.7 解锁",points:5e3,image:`${He}reward-cape.png`,locked:!0},{name:"7天特权卡",subtitle:"成长特权",points:8e3,image:`${He}reward-vip.png`}],$0=[{level:"Lv.1",status:"已领取",image:`${He}reward-sprout.png`,active:!0},{level:"Lv.2",status:"已领取",image:`${He}reward-flower.png`,active:!0},{level:"Lv.3",status:"可领取",image:`${He}reward-gift.png`,active:!0},{level:"Lv.4",status:"差 420 XP",image:`${He}reward-healing.png`,active:!1},{level:"Lv.5",status:"未解锁",image:`${He}reward-starlight.png`,active:!1}],O0=[{name:"樱花发箍",date:"2026-07-15",points:"-2,000 XP",status:"已兑换",image:`${He}reward-flower.png`},{name:"护发礼盒",date:"2026-07-12",points:"-6,500 XP",status:"配送中",image:`${He}reward-gift.png`},{name:"头皮按摩梳",date:"2026-07-08",points:"-4,200 XP",status:"已完成",image:`${He}reward-brush.png`}];function z0(r){const s=xe.getState();pp(r),r.querySelectorAll("[data-rewards-points]").forEach(i=>{i.textContent=s.points.toLocaleString("en-US")}),fe(r.querySelector("#shop"),T0.map(i=>`<button class="reward-card" type="button" ${i.unlockId&&Dn.some(d=>d.id===i.unlockId)?`data-unlock-id="${z(i.unlockId)}"`:""}>
      <div class="reward-image-wrap">
        <img src="${z(i.image)}" alt="${z(i.name)}">
        ${i.locked?'<span class="lock-icon">⌕</span>':""}
      </div>
      <div class="reward-copy">
        <strong>${z(i.name)}</strong>
        <span>${z(i.subtitle)}</span>
        <b>${i.points.toLocaleString("en-US")} XP</b>
      </div>
    </button>`).join("")),fe(r.querySelector("#rewardsGrowth"),$0.map(i=>`
    <button type="button" class="growth-reward ${i.active?"active":""}">
      <img src="${z(i.image)}" alt="${z(i.level)} 奖励">
      <strong>${z(i.level)}</strong>
      <span>${z(i.status)}</span>
    </button>
  `).join("")),fe(r.querySelector("#rewardsRecords"),O0.map(i=>`
    <div class="record-item">
      <img src="${z(i.image)}" alt="${z(i.name)}">
      <div><strong>${z(i.name)}</strong><span>${z(i.date)}</span></div>
      <div><b>${z(i.points)}</b><small>${z(i.status)}</small></div>
    </div>
  `).join(""))}const vn=r=>up(`league-avatars/${r}.png`),N0=["排行榜","我的联盟","好友排行","段位晋升"];function A0(r,s="排行榜"){r.querySelectorAll("[data-league-tab]").forEach(i=>{i.classList.toggle("active",i.dataset.leagueTab===s)}),fe(r.querySelector("#leagueRankContent"),I0(s))}function yp(){const r=xe.getState();return[{rank:1,name:"Luna",level:"Lv.6",note:"头发是生命的种子 🌱",points:28760,tier:"王者 I",tierTone:"gold",trend:"↑ 1",trendTone:"up",avatarSrc:vn("luna"),isMe:!1},{rank:2,name:"Mia",level:"Lv.5",note:"每天进步 1% ✨",points:25480,tier:"王者 II",tierTone:"gold",trend:"↓ 1",trendTone:"down",avatarSrc:vn("mia"),isMe:!1},{rank:3,name:"Ray",level:"Lv.5",note:"慢慢来，比较更重要 💜",points:22140,tier:"钻石 I",tierTone:"purple",trend:"—",trendTone:"flat",avatarSrc:vn("ray"),isMe:!1},{rank:4,name:"Sophia",level:"Lv.5",note:"关注头皮，从现在开始",points:18900,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:vn("sophia"),isMe:!1},{rank:5,name:"Bella",level:"Lv.4",note:"保持心情愉悦～",points:16520,tier:"铂金 I",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:vn("bella"),isMe:!1},{rank:6,name:"Aria",level:"Lv.4",note:"爱自己，从发起 ❤️",points:15320,tier:"铂金 II",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:vn("aria"),isMe:!1},{rank:12,name:"You",level:"Lv.5",note:r.checkinDays.length?`${r.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！",points:Math.max(r.points,12360),tier:"钻石 III",tierTone:"purple",trend:"↑ 3",trendTone:"up",avatarSrc:vn("you"),isMe:!0}]}function I0(r){return r==="我的联盟"?j0():r==="好友排行"?M0():r==="段位晋升"?F0():D0()}function D0(){return`
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
        <div class="table-body">${yp().map(bp).join("")}</div>
        <div class="refresh-note">◷ 每 10 分钟更新一次</div>
      </div>
    </div>
  `}function j0(){const r=[["联盟等级","Lv.6","距离 Lv.7 还需 740 XP","58%"],["本周任务","12 / 18","今日新增 3 个可完成任务","67%"],["成员活跃","28 / 30","5 位成员连续打卡超过 7 天","86%"]],s=[["Luna","队长","8,420 XP"],["Mia","副队长","7,860 XP"],["Ray","活跃成员","6,980 XP"],["You","成长成员","3,260 XP"]];return`
    <div class="league-mock-grid alliance-mock">
      ${r.map(([i,u,d,p])=>`
        <section class="league-mock-card">
          <span>${z(i)}</span>
          <b>${z(u)}</b>
          <p>${z(d)}</p>
          <div class="league-mock-progress"><i style="width:${z(p)}"></i></div>
        </section>
      `).join("")}
      <section class="league-mock-card wide">
        <div class="league-mock-title"><b>联盟成员贡献</b></div>
        <div class="league-mini-list">
          ${s.map(([i,u,d])=>`<div><span class="avatar-dot"></span><b>${z(i)}<small>${z(u)}</small></b><strong>${z(d)}</strong></div>`).join("")}
        </div>
      </section>
    </div>
  `}function M0(){return`
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${[{rank:1,name:"Nora",level:"Lv.5",note:"睡眠打卡稳定",points:20680,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:"",isMe:!1},{rank:2,name:"Echo",level:"Lv.4",note:"本周完成 9 个任务",points:18440,tier:"铂金 I",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:"",isMe:!1},{rank:3,name:"June",level:"Lv.4",note:"护发建议执行率 86%",points:17210,tier:"铂金 II",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:"",isMe:!1},{rank:7,name:"You",level:"Lv.5",note:"一起变好呀！",points:12360,tier:"钻石 III",tierTone:"purple",trend:"↑ 1",trendTone:"up",avatarSrc:vn("you"),isMe:!0}].map(bp).join("")}</div>
      <div class="refresh-note">好友排行为 mock 数据，后续接入好友关系后替换</div>
    </div>
  `}function F0(){return`
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
            <b>${z(String(s))}<small>${z(String(i))}</small></b>
          </div>
        `).join("")}
      </section>
    </div>
  `}function bp(r){const s=r.isMe?"you-rank":r.rank===1?"gold":r.rank===2?"silver":r.rank===3?"bronze":"normal",i=r.tierTone==="gold"?"king":r.tierTone==="purple"?"diamond":"platinum";return`
    <div class="league-ranking-row ${r.isMe?"current-user":""}" role="row">
      <div class="rank-cell" role="cell"><span class="rank-badge ${s}">${r.rank}</span></div>
      <div class="player-cell" role="cell">
        ${r.avatarSrc?`<img class="league-avatar" src="${z(r.avatarSrc)}" alt="${z(r.name)} 的头像">`:'<span class="avatar-dot"></span>'}
        <div class="player-copy">
          <div class="player-name">${z(r.name)} <span class="level">${z(r.level)}</span>${r.isMe?'<span class="mini-crown" title="当前用户">●</span>':""}</div>
          <div class="motto">${z(r.note)}</div>
        </div>
      </div>
      <div class="tier-cell" role="cell">
        <span class="tier-emblem ${i}" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2.3 16 5l4.7.8-.8 4.7 1.7 4.5-4.2 2.3L15 21.6 12 19l-3 2.6-2.4-4.3L2.4 15l1.7-4.5-.8-4.7L8 5l4-2.7Z"/><path class="tier-star" d="m12 7.2 1.35 2.74 3.03.44-2.19 2.13.52 3.02L12 14.1l-2.71 1.43.52-3.02-2.19-2.13 3.03-.44L12 7.2Z"/></svg>
        </span>
        <span>${z(r.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${r.points.toLocaleString("en-US")} XP</div>
      <div class="trend-cell ${r.trendTone}" role="cell">${z(r.trend)}</div>
    </div>
  `}const yn=()=>new Date().toISOString().slice(0,10),U0=()=>`diaoleme-prototype-tasks-${yn()}`,H0=()=>`diaoleme-prototype-task-bonus-${yn()}`,B0=r=>`diaoleme-prototype-quest-progress-${r}-${yn()}`;function q0(){const r=Il.useRef(null);return Il.useEffect(()=>{let s=document.getElementById("diaoleme-prototype-style");s||(s=document.createElement("style"),s.id="diaoleme-prototype-style",document.head.appendChild(s)),s.textContent=`${i0}
${sv}`;let i=()=>{};return r.current&&(r.current.innerHTML=a0,new Function(s0)(),i=W0(r.current)),()=>{i(),r.current&&(r.current.innerHTML="")}},[]),Al.jsx("div",{ref:r})}function W0(r){x0({getSuggestions:kp,taskKey:U0,taskBonusKey:H0,questProgressKey:B0});let s="daily",i="排行榜";const u=()=>X0(r,s,i),d=h0(r,{renderStatefulSections:u}),p=nv(r);u();const f=xe.subscribe(u);Oh(20).then(b=>{b.length&&xe.getState().mergeRemoteHistory(b)});const g=b=>{const k=b.target,x=k.closest("[data-quest-category]"),C=k.closest("[data-league-tab]"),$=k.closest("[data-quest-id]"),I=k.closest('[data-action="checkin"]'),q=k.closest("[data-unlock-id]"),H=k.closest("[data-view-report]"),R=k.closest("[data-view-day]"),P=k.closest("[data-share-report]"),U=k.closest("[data-go]"),W=k.closest('[data-action="reset-progress"]'),F=k.closest("[data-scan-record-page]"),se=k.closest('[data-action="journey-share"]'),X=k.closest('[data-action="open-journey"]'),de=k.closest("[data-buddy-action]"),re=k.closest("#guideBtn"),ae=k.closest("[data-post-like]"),G=k.closest("[data-post-comments]");if((U==null?void 0:U.dataset.go)==="scan"&&!H&&Pc(r),x!=null&&x.dataset.questCategory&&Lc(x.dataset.questCategory)&&(s=x.dataset.questCategory,u()),C!=null&&C.dataset.leagueTab&&N0.includes(C.dataset.leagueTab)&&(i=C.dataset.leagueTab,u(),gt(r,`已切换至${i}`)),$!=null&&$.dataset.questId&&$.dataset.questCategory&&Lc($.dataset.questCategory)&&(k0($.dataset.questCategory,$.dataset.questId,r),u()),I&&(xe.getState().markCheckinToday(),u()),q){const Z=Dn.find(ye=>ye.id===q.dataset.unlockId);if(Z){const ye=xe.getState().unlockedHairStyles.includes(Z.id),Re=xe.getState().unlockHairStyle(Z.id,Z.cost);Re&&fp(Z.id),gt(r,Re?`${ye?"已换上":"已解锁并换上"} ${Z.name}`:`积分还差 ${Z.cost-xe.getState().points}`),u()}}if(H!=null&&H.dataset.viewReport&&(xe.getState().viewReport(H.dataset.viewReport),oa(r,"scan"),Bl(r,Rc()),gt(r,"已打开这份扫描报告")),R!=null&&R.dataset.viewDay&&(xe.getState().viewDayReport(R.dataset.viewDay),oa(r,"scan"),Bl(r,Rc()),gt(r,"已打开当天最新报告")),P!=null&&P.dataset.shareReport&&(xe.getState().viewReport(P.dataset.shareReport),Nl(),gt(r,"已生成这份报告的分享卡")),F!=null&&F.dataset.scanRecordPage&&(r.dataset.scanRecordPage=F.dataset.scanRecordPage,vp(r)),W&&confirm("重置所有进度、积分、打卡和历史记录？")&&(xe.getState().resetAll(),S0(),Pc(r),u()),re&&Nl(),se&&(Nl(),gt(r,"已生成 Journey 分享卡")),X&&oa(r,"journey"),ae!=null&&ae.dataset.postLike&&(Y0(ae.dataset.postLike),xp(r)),G!=null&&G.dataset.postComments){const Z=r.querySelector(`[data-comments-for="${G.dataset.postComments}"]`);Z==null||Z.classList.toggle("collapsed")}de!=null&&de.dataset.buddyAction&&(o0(de.dataset.buddyAction,r,yn),u())};return document.addEventListener("click",g),()=>{d(),p(),f(),document.removeEventListener("click",g)}}function X0(r,s="daily",i="排行榜"){V0(r),l0(r,{avgScore:Sp,buildTrendBars:hp,getQuestCount:E0,todayKey:yn}),w0(r,s),vp(r),Q0(r),xp(r),z0(r),A0(r,i),rv(r)}function V0(r){const s=xe.getState();fe(r.querySelector(".compact-quests"),kp().slice(0,4).map((u,d)=>`<div class="item" style="grid-template-columns:34px 1fr auto"><span>${["💧","🌙","🥗","🖐"][d]||"✨"}</span><b>${z(u)}</b><span class="status">+${d===0?5:2} XP</span></div>`).join("")),fe(r.querySelector(".small-leaders"),yp().slice(0,4).map(u=>`<div class="leader ${u.isMe?"you":""}" style="grid-template-columns:34px 1fr auto"><span class="badge">${u.rank}</span><b>${z(u.name)}</b><span>${u.points} XP</span></div>`).join(""));const i=r.querySelectorAll('[data-page="home"] .stats .badge, [data-page="home"] .badge');i[0]&&(i[0].textContent=`${s.points} XP`)}function Q0(r){const s=xe.getState().reportHistory,i=s.slice(0,7),u=s[0],d=s[1],p=u&&d?u.score-d.score:0,f=u?p>0?`比上次提升 ${p} 分，状态在向上走。`:p<0?`比上次低 ${Math.abs(p)} 分，今天适合轻量观察。`:"和上次基本持平，记录节奏稳定。":"还没有记录，先完成一次 Scan。",g=K0(s),b=r.querySelector('[data-page="diary"] .card.hero');fe(b,`
    <div>
      <h2 style="font-size:36px">历史记录与变化趋势 ✨</h2>
      <p>${z(f)}</p>
      <div class="three grid diary-summary">
        <div><span class="big-number">${s.length}</span><br>累计记录</div>
        <div><span class="big-number">${Sp(s)||"--"}</span><br>平均状态分</div>
        <div><span class="badge">${z((u==null?void 0:u.count)||"等待")}</span><br>最近掉发量</div>
      </div>
      <p><b>智能建议：</b>${z(g)}</p>
    </div>
    <div class="buddy-stage" style="min-height:220px"><div class="ground"></div><div class="buddy" style="transform:scale(.5)"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div></div>
  `),fe(r.querySelector("#calendar"),G0(s)),fe(r.querySelector("#diaries"),i.length?i.map(x=>`<div class="item"><span><b>${z(x.date.slice(8))}</b><br>${z(x.date.slice(5,7))}月</span><b>${Z0(x.score)} ${z(x.title)}<small>${z(x.summary)}</small></b><button class="pill" data-view-report="${z(x.id)}">查看</button></div>`).join(""):'<div class="item"><span>📷</span><b>还没有历史记录<small>从 Scan 上传图片后，这里会自动沉淀记录、分数和智能建议。</small></b><span class="status">等待</span></div>');const k=ev(s);fe(r.querySelector('[data-page="diary"] aside .card:nth-child(1)'),`<h3>变化趋势</h3><p>${z(f)}</p><div class="chart">${k.map(x=>`<span class="bar" style="height:${x}%"></span>`).join("")}</div>`),fe(r.querySelector('[data-page="diary"] .word-cloud'),`<h3>关键词统计</h3>${tv(s)}`),fe(r.querySelector('[data-page="diary"] aside .card:nth-child(3)'),`<h3>回忆精选</h3><div class="reward-art">${u?"📈":"🌄"}</div><b>${z((u==null?void 0:u.title)||"第一篇日记 ✨")}</b><p>${z((u==null?void 0:u.encouragement)||"完成第一次 Scan 后，这里会展示最近一次记录的鼓励语。")}</p>`)}function K0(r){const s=r[0],i=r[1];if(!s)return"先完成一次 Scan，让小发球有第一条记录可以陪你观察变化。";const u=i?s.score-i.score:0,d=s.count==="偏多"?"今天先把目标放轻一点，选一个早睡或放松任务就够了":s.count==="少量"?"状态看起来比较轻松，可以继续保持记录节奏":"保持温和观察，不需要给自己额外压力",p=s.tags[0]?`这次标签是“${s.tags[0]}”，`:"",f=s.suggestions[0]||s.daily_task||"睡前做 2 分钟放松呼吸";return u>=8?`${p}比上次提升明显，建议延续今天的做法：${f}。${d}。`:u<=-8?`${p}这次分数有点回落，建议先不做判断，只保留一条轻量动作：${f}。${d}。`:s.score>=75?`${p}整体比较稳定，今天适合做“巩固局”：${f}，然后明天继续对比趋势。`:s.score<55?`${p}今天先走温柔路线，不追求立刻变好；完成“${f}”就算达标。`:`${p}变化不大就是好信号，建议继续轻量打卡：${f}。${d}。`}const J0=[{id:"checkin7",name:"小蒲公英",level:"Lv.6",body:"今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～",media:"📋",likes:128,comments:["我也在做 7 天挑战，一起坚持！","这种轻松记录真的比焦虑刷帖舒服。"]},{id:"massage",name:"爱吃草莓",level:"Lv.4",body:"分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。",media:"🪮",likes:96,comments:["求一个手法教程！","睡前按摩 + 早睡，感觉小发球都开心了。"]},{id:"slowday",name:"薄荷味的风",level:"Lv.6",body:"最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。",media:"🌿",likes:76,comments:["抱抱，先把记录坚持下来就很棒。","今天也给自己一点松弛感。"]},{id:"rewardhair",name:"向日葵",level:"Lv.3",body:"新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！",media:"🌱",likes:143,comments:["这个发型也太可爱了！","奖励机制好有动力，我也要攒 XP。"]}];function xp(r){const s=wp();fe(r.querySelector("#posts"),J0.map(i=>{const u=s.has(i.id),d=i.comments.map((p,f)=>`<div class="comment"><b>${f===0?"发友":"小发球"}：</b>${z(p)}</div>`).join("");return`<div class="post community-post"><div class="mini-buddy"></div><div><b>${z(i.name)} <span class="badge">${z(i.level)}</span></b><p>${z(i.body)}</p><span class="badge"># 头皮护理</span><div class="community-actions"><button class="pill ${u?"primary":""}" data-post-like="${z(i.id)}">💜 ${i.likes+(u?1:0)}</button><button class="pill" data-post-comments="${z(i.id)}">💬 ${i.comments.length}</button><button class="pill">☆ 收藏</button></div><div class="comments collapsed" data-comments-for="${z(i.id)}">${d}</div></div><div class="post-media">${z(i.media)}</div></div>`}).join(""))}function wp(){try{return new Set(JSON.parse(localStorage.getItem("diaoleme-community-likes")||"[]"))}catch{return new Set}}function Y0(r){const s=wp();s.has(r)?s.delete(r):s.add(r),localStorage.setItem("diaoleme-community-likes",JSON.stringify([...s]))}function G0(r){const s=new Map;r.forEach(b=>{s.has(b.date)||s.set(b.date,b)});const i=new Date,u=i.getFullYear(),d=i.getMonth(),p=new Date(u,d,1).getDay(),f=new Date(u,d+1,0).getDate(),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(b=>`<span>${b}</span>`);for(let b=0;b<p;b+=1)g.push("<span></span>");for(let b=1;b<=f;b+=1){const k=`${u}-${String(d+1).padStart(2,"0")}-${String(b).padStart(2,"0")}`,x=s.get(k),C=x?"selected diary-record-day":k===yn()?"today":"";g.push(`<span class="${C}" title="${x?`${x.score} 分 ${z(x.title)}`:""}">${b}${x?"<small>•</small>":""}</span>`)}return g.join("")}function Z0(r){return r>=75?"😊 稳定":r>=55?"😌 观察":"🌧 轻放松"}function ev(r){const s=r.slice(0,9).reverse().map(i=>i.score);return s.length?s.map(i=>Math.max(18,Math.min(100,i))):[36,42,52,46,60,55,66]}function tv(r){const s=r.flatMap(u=>u.tags).slice(0,8);return(s.length?s:["护理","轻松记录","睡眠","心情","头皮按摩","坚持"]).map((u,d)=>{const p=[28,14,58,42,66,24,50,72][d%8],f=[36,58,34,70,60,42,50,76][d%8],g=[34,26,20,18,16,22,15,17][d%8];return`<span style="left:${p}%;top:${f}%;font-size:${g}px">${z(u)}</span>`}).join("")}function nv(r){const s=document.createElement("div");s.className="ai-chat-widget",s.innerHTML=`
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手">🌱<span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `,r.appendChild(s);const i=s.querySelector(".ai-chat-bubble"),u=s.querySelector("[data-chat-form]"),d=s.querySelector("[data-chat-input]"),p=s.querySelector("[data-chat-messages]"),f=s.querySelector("[data-chat-close]"),g=[{role:"assistant",content:"你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。"}];let b=!1,k=!1,x=0,C=0,$=0,I=0;const q="正在思考一个轻松、不焦虑的回答...",H=()=>{p.innerHTML=g.map(X=>`<div class="ai-chat-msg ${X.role}">${z(X.content)}</div>`).join(""),p.scrollTop=p.scrollHeight},R=X=>{s.classList.toggle("open",X??!s.classList.contains("open")),s.classList.contains("open")&&d.focus()},P=X=>{if(s.classList.contains("open"))return;b=!0,k=!1,x=X.clientX,C=X.clientY;const de=s.getBoundingClientRect();$=de.left,I=de.top,i.setPointerCapture(X.pointerId)},U=X=>{if(!b)return;const de=X.clientX-x,re=X.clientY-C;Math.abs(de)+Math.abs(re)>6&&(k=!0);const ae=Math.max(12,Math.min(window.innerWidth-s.offsetWidth-12,$+de)),G=Math.max(12,Math.min(window.innerHeight-s.offsetHeight-12,I+re));s.style.left=`${ae}px`,s.style.top=`${G}px`,s.style.right="auto",s.style.bottom="auto"},W=X=>{b=!1,i.hasPointerCapture(X.pointerId)&&i.releasePointerCapture(X.pointerId)},F=()=>{k||R(!0)},se=async X=>{X.preventDefault();const de=d.value.trim();if(de){d.value="",g.push({role:"user",content:de},{role:"assistant",content:q}),H();try{const re=await $h(g.filter(ae=>!(ae.role==="assistant"&&ae.content===q)).slice(-8));g[g.length-1]={role:"assistant",content:re.reply}}catch{g[g.length-1]={role:"assistant",content:"我这边暂时没有连上 AI 服务，先给你一个小建议：今天先完成一次记录，再选一个最轻量的任务。"}}H()}};return H(),i.addEventListener("pointerdown",P),i.addEventListener("pointermove",U),i.addEventListener("pointerup",W),i.addEventListener("click",F),f.addEventListener("click",()=>R(!1)),u.addEventListener("submit",se),()=>{i.removeEventListener("pointerdown",P),i.removeEventListener("pointermove",U),i.removeEventListener("pointerup",W),i.removeEventListener("click",F),u.removeEventListener("submit",se),s.remove()}}function rv(r){const s=xe.getState(),i=s.checkinDays.includes(yn());fe(r.querySelector("#streak"),["一","二","三","四","五","六","日"].map((u,d)=>`<span class="badge">${d<Math.min(s.checkinDays.length,6)?"✓":d===6?"🎁":u}<br><small>${u}</small></span>`).join("")),fe(r.querySelector("#checkin"),["一","二","三","四","五","六","日"].map((u,d)=>`<span class="badge">${d<Math.min(s.checkinDays.length,6)?"✓":d===6?"🎁":u}<br><small>${u}</small></span>`).join("")+`<button class="pill ${i?"":"primary"}" data-action="checkin">${i?"今日已打卡":"今日打卡 +5"}</button><button class="pill" data-action="reset-progress">重置</button>`)}function kp(){const r=xe.getState().suggestions;return r.length?r:["上传一张照片生成专属建议","今晚提前 30 分钟休息","洗头时水温尽量温和"]}function Sp(r){return r.length?Math.round(r.reduce((s,i)=>s+i.score,0)/r.length):null}function Nl(){const r=xe.getState(),s=document.createElement("canvas");s.width=720,s.height=960;const i=s.getContext("2d");i.fillStyle="#f7edff",i.fillRect(0,0,s.width,s.height),i.fillStyle="#13205f",i.font="bold 54px sans-serif",i.fillText("掉了么 Diaoleme",64,110),i.font="bold 92px sans-serif",i.fillText(`${r.dropScore??"--"} 分`,64,250),i.font="bold 38px sans-serif",i.fillText(r.title,64,330),i.font="28px sans-serif",av(i,r.summary,64,400,590,42),i.fillStyle="#8b5cf6",i.font="bold 30px sans-serif",i.fillText(`${r.points} XP · 打卡 ${r.checkinDays.length} 天`,64,820);const u=document.createElement("a");u.href=s.toDataURL("image/png"),u.download=`掉了么-分享-${yn()}.png`,u.click()}function av(r,s,i,u,d,p){let f="";for(const g of s){const b=f+g;r.measureText(b).width>d&&f?(r.fillText(f,i,u),f=g,u+=p):f=b}f&&r.fillText(f,i,u)}const sv=`
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
    padding: 14px 18px;
    background: linear-gradient(135deg, #8b5cf6, #65c982);
    color: #fff;
    box-shadow: 0 20px 55px rgba(99, 75, 168, 0.32);
    cursor: grab;
    font-weight: 900;
  }
  .ai-chat-bubble:active { cursor: grabbing; }
  .ai-chat-panel {
    display: none;
    width: min(360px, calc(100vw - 32px));
    height: 520px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 28px;
    background: rgba(255, 250, 255, 0.96);
    box-shadow: 0 26px 80px rgba(19, 32, 95, 0.22);
  }
  .ai-chat-widget.open .ai-chat-bubble { display: none; }
  .ai-chat-widget.open .ai-chat-panel {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .ai-chat-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2px 12px;
    padding: 16px 18px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(101, 201, 130, 0.18));
  }
  .ai-chat-header small { color: #65709e; }
  .ai-chat-header button {
    grid-row: 1 / span 2;
    grid-column: 2;
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
      bottom: 88px;
    }
  }
`;Tg.createRoot(document.getElementById("root")).render(Al.jsx(la.StrictMode,{children:Al.jsx(q0,{})}));
