(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function s(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=s(d);fetch(d.href,p)}})();function Lc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sl={exports:{}},aa={},El={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Sg(){if(Xd)return fe;Xd=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function $(y){return y===null||typeof y!="object"?null:(y=_&&y[_]||y["@@iterator"],typeof y=="function"?y:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,F={};function R(y,L,te){this.props=y,this.context=L,this.refs=F,this.updater=te||D}R.prototype.isReactComponent={},R.prototype.setState=function(y,L){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,L,"setState")},R.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function P(){}P.prototype=R.prototype;function N(y,L,te){this.props=y,this.context=L,this.refs=F,this.updater=te||D}var q=N.prototype=new P;q.constructor=N,H(q,R.prototype),q.isPureReactComponent=!0;var B=Array.isArray,ae=Object.prototype.hasOwnProperty,X={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function ee(y,L,te){var ue,ge={},J=null,pe=null;if(L!=null)for(ue in L.ref!==void 0&&(pe=L.ref),L.key!==void 0&&(J=""+L.key),L)ae.call(L,ue)&&!de.hasOwnProperty(ue)&&(ge[ue]=L[ue]);var me=arguments.length-2;if(me===1)ge.children=te;else if(1<me){for(var Se=Array(me),tt=0;tt<me;tt++)Se[tt]=arguments[tt+2];ge.children=Se}if(y&&y.defaultProps)for(ue in me=y.defaultProps,me)ge[ue]===void 0&&(ge[ue]=me[ue]);return{$$typeof:r,type:y,key:J,ref:pe,props:ge,_owner:X.current}}function ie(y,L){return{$$typeof:r,type:y.type,key:L,ref:y.ref,props:y.props,_owner:y._owner}}function G(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function le(y){var L={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(te){return L[te]})}var we=/\/+/g;function Le(y,L){return typeof y=="object"&&y!==null&&y.key!=null?le(""+y.key):L.toString(36)}function be(y,L,te,ue,ge){var J=typeof y;(J==="undefined"||J==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(J){case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case r:case i:pe=!0}}if(pe)return pe=y,ge=ge(pe),y=ue===""?"."+Le(pe,0):ue,B(ge)?(te="",y!=null&&(te=y.replace(we,"$&/")+"/"),be(ge,L,te,"",function(tt){return tt})):ge!=null&&(G(ge)&&(ge=ie(ge,te+(!ge.key||pe&&pe.key===ge.key?"":(""+ge.key).replace(we,"$&/")+"/")+y)),L.push(ge)),1;if(pe=0,ue=ue===""?".":ue+":",B(y))for(var me=0;me<y.length;me++){J=y[me];var Se=ue+Le(J,me);pe+=be(J,L,te,Se,ge)}else if(Se=$(y),typeof Se=="function")for(y=Se.call(y),me=0;!(J=y.next()).done;)J=J.value,Se=ue+Le(J,me++),pe+=be(J,L,te,Se,ge);else if(J==="object")throw L=String(y),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return pe}function Be(y,L,te){if(y==null)return y;var ue=[],ge=0;return be(y,ue,"","",function(J){return L.call(te,J,ge++)}),ue}function _e(y){if(y._status===-1){var L=y._result;L=L(),L.then(function(te){(y._status===0||y._status===-1)&&(y._status=1,y._result=te)},function(te){(y._status===0||y._status===-1)&&(y._status=2,y._result=te)}),y._status===-1&&(y._status=0,y._result=L)}if(y._status===1)return y._result.default;throw y._result}var he={current:null},j={transition:null},Z={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:j,ReactCurrentOwner:X};function M(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:Be,forEach:function(y,L,te){Be(y,function(){L.apply(this,arguments)},te)},count:function(y){var L=0;return Be(y,function(){L++}),L},toArray:function(y){return Be(y,function(L){return L})||[]},only:function(y){if(!G(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},fe.Component=R,fe.Fragment=s,fe.Profiler=d,fe.PureComponent=N,fe.StrictMode=o,fe.Suspense=b,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,fe.act=M,fe.cloneElement=function(y,L,te){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ue=H({},y.props),ge=y.key,J=y.ref,pe=y._owner;if(L!=null){if(L.ref!==void 0&&(J=L.ref,pe=X.current),L.key!==void 0&&(ge=""+L.key),y.type&&y.type.defaultProps)var me=y.type.defaultProps;for(Se in L)ae.call(L,Se)&&!de.hasOwnProperty(Se)&&(ue[Se]=L[Se]===void 0&&me!==void 0?me[Se]:L[Se])}var Se=arguments.length-2;if(Se===1)ue.children=te;else if(1<Se){me=Array(Se);for(var tt=0;tt<Se;tt++)me[tt]=arguments[tt+2];ue.children=me}return{$$typeof:r,type:y.type,key:ge,ref:J,props:ue,_owner:pe}},fe.createContext=function(y){return y={$$typeof:f,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:p,_context:y},y.Consumer=y},fe.createElement=ee,fe.createFactory=function(y){var L=ee.bind(null,y);return L.type=y,L},fe.createRef=function(){return{current:null}},fe.forwardRef=function(y){return{$$typeof:g,render:y}},fe.isValidElement=G,fe.lazy=function(y){return{$$typeof:w,_payload:{_status:-1,_result:y},_init:_e}},fe.memo=function(y,L){return{$$typeof:S,type:y,compare:L===void 0?null:L}},fe.startTransition=function(y){var L=j.transition;j.transition={};try{y()}finally{j.transition=L}},fe.unstable_act=M,fe.useCallback=function(y,L){return he.current.useCallback(y,L)},fe.useContext=function(y){return he.current.useContext(y)},fe.useDebugValue=function(){},fe.useDeferredValue=function(y){return he.current.useDeferredValue(y)},fe.useEffect=function(y,L){return he.current.useEffect(y,L)},fe.useId=function(){return he.current.useId()},fe.useImperativeHandle=function(y,L,te){return he.current.useImperativeHandle(y,L,te)},fe.useInsertionEffect=function(y,L){return he.current.useInsertionEffect(y,L)},fe.useLayoutEffect=function(y,L){return he.current.useLayoutEffect(y,L)},fe.useMemo=function(y,L){return he.current.useMemo(y,L)},fe.useReducer=function(y,L,te){return he.current.useReducer(y,L,te)},fe.useRef=function(y){return he.current.useRef(y)},fe.useState=function(y){return he.current.useState(y)},fe.useSyncExternalStore=function(y,L,te){return he.current.useSyncExternalStore(y,L,te)},fe.useTransition=function(){return he.current.useTransition()},fe.version="18.3.1",fe}var Vd;function ql(){return Vd||(Vd=1,El.exports=Sg()),El.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Eg(){if(Qd)return aa;Qd=1;var r=ql(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(g,b,S){var w,_={},$=null,D=null;S!==void 0&&($=""+S),b.key!==void 0&&($=""+b.key),b.ref!==void 0&&(D=b.ref);for(w in b)o.call(b,w)&&!p.hasOwnProperty(w)&&(_[w]=b[w]);if(g&&g.defaultProps)for(w in b=g.defaultProps,b)_[w]===void 0&&(_[w]=b[w]);return{$$typeof:i,type:g,key:$,ref:D,props:_,_owner:d.current}}return aa.Fragment=s,aa.jsx=f,aa.jsxs=f,aa}var Kd;function _g(){return Kd||(Kd=1,Sl.exports=Eg()),Sl.exports}var zl=_g(),Nl=ql();const la=Lc(Nl);var Si={},_l={exports:{}},ut={},Cl={exports:{}},Rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Cg(){return Jd||(Jd=1,(function(r){function i(j,Z){var M=j.length;j.push(Z);e:for(;0<M;){var y=M-1>>>1,L=j[y];if(0<d(L,Z))j[y]=Z,j[M]=L,M=y;else break e}}function s(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var Z=j[0],M=j.pop();if(M!==Z){j[0]=M;e:for(var y=0,L=j.length,te=L>>>1;y<te;){var ue=2*(y+1)-1,ge=j[ue],J=ue+1,pe=j[J];if(0>d(ge,M))J<L&&0>d(pe,ge)?(j[y]=pe,j[J]=M,y=J):(j[y]=ge,j[ue]=M,y=ue);else if(J<L&&0>d(pe,M))j[y]=pe,j[J]=M,y=J;else break e}}return Z}function d(j,Z){var M=j.sortIndex-Z.sortIndex;return M!==0?M:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var b=[],S=[],w=1,_=null,$=3,D=!1,H=!1,F=!1,R=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(j){for(var Z=s(S);Z!==null;){if(Z.callback===null)o(S);else if(Z.startTime<=j)o(S),Z.sortIndex=Z.expirationTime,i(b,Z);else break;Z=s(S)}}function B(j){if(F=!1,q(j),!H)if(s(b)!==null)H=!0,_e(ae);else{var Z=s(S);Z!==null&&he(B,Z.startTime-j)}}function ae(j,Z){H=!1,F&&(F=!1,P(ee),ee=-1),D=!0;var M=$;try{for(q(Z),_=s(b);_!==null&&(!(_.expirationTime>Z)||j&&!le());){var y=_.callback;if(typeof y=="function"){_.callback=null,$=_.priorityLevel;var L=y(_.expirationTime<=Z);Z=r.unstable_now(),typeof L=="function"?_.callback=L:_===s(b)&&o(b),q(Z)}else o(b);_=s(b)}if(_!==null)var te=!0;else{var ue=s(S);ue!==null&&he(B,ue.startTime-Z),te=!1}return te}finally{_=null,$=M,D=!1}}var X=!1,de=null,ee=-1,ie=5,G=-1;function le(){return!(r.unstable_now()-G<ie)}function we(){if(de!==null){var j=r.unstable_now();G=j;var Z=!0;try{Z=de(!0,j)}finally{Z?Le():(X=!1,de=null)}}else X=!1}var Le;if(typeof N=="function")Le=function(){N(we)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Be=be.port2;be.port1.onmessage=we,Le=function(){Be.postMessage(null)}}else Le=function(){R(we,0)};function _e(j){de=j,X||(X=!0,Le())}function he(j,Z){ee=R(function(){j(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){H||D||(H=!0,_e(ae))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return $},r.unstable_getFirstCallbackNode=function(){return s(b)},r.unstable_next=function(j){switch($){case 1:case 2:case 3:var Z=3;break;default:Z=$}var M=$;$=Z;try{return j()}finally{$=M}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var M=$;$=j;try{return Z()}finally{$=M}},r.unstable_scheduleCallback=function(j,Z,M){var y=r.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?y+M:y):M=y,j){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=M+L,j={id:w++,callback:Z,priorityLevel:j,startTime:M,expirationTime:L,sortIndex:-1},M>y?(j.sortIndex=M,i(S,j),s(b)===null&&j===s(S)&&(F?(P(ee),ee=-1):F=!0,he(B,M-y))):(j.sortIndex=L,i(b,j),H||D||(H=!0,_e(ae))),j},r.unstable_shouldYield=le,r.unstable_wrapCallback=function(j){var Z=$;return function(){var M=$;$=Z;try{return j.apply(this,arguments)}finally{$=M}}}})(Rl)),Rl}var Yd;function Rg(){return Yd||(Yd=1,Cl.exports=Cg()),Cl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function $g(){if(Gd)return ut;Gd=1;var r=ql(),i=Rg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,d={};function p(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(d[e]=t,e=0;e<t.length;e++)o.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},_={};function $(e){return b.call(_,e)?!0:b.call(w,e)?!1:S.test(e)?_[e]=!0:(w[e]=!0,!1)}function D(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,n,a){if(t===null||typeof t>"u"||D(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,a,l,u,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=c}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,N);R[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,N);R[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,N);R[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,a){var l=R.hasOwnProperty(t)?R[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,n,l,a)&&(n=null),a||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var B=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),X=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),le=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),j=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,y;function L(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var te=!1;function ue(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var a=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){a=C}e.call(t.prototype)}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),u=a.stack.split(`
`),c=l.length-1,m=u.length-1;1<=c&&0<=m&&l[c]!==u[m];)m--;for(;1<=c&&0<=m;c--,m--)if(l[c]!==u[m]){if(c!==1||m!==1)do if(c--,m--,0>m||l[c]!==u[m]){var h=`
`+l[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=m);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function ge(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case X:return"Portal";case ie:return"Profiler";case ee:return"StrictMode";case Le:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Be:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=Se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yn(e){e._valueTracker||(e._valueTracker=tt(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Se(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bn(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ht(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oe(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function qe(e,t){oe(e,t);var n=me(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Et(e,t.type,n):t.hasOwnProperty("defaultValue")&&Et(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function St(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Et(e,t,n){(t!=="number"||vn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kt=Array.isArray;function Jt(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function jt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function to(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Kt(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function no(e,t){var n=me(t.value),a=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function ro(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ao(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ao(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,io=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cp=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Cp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function so(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function lo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=so(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var Rp=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Rp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,Bn=null,qn=null;function oo(e){if(e=Br(e)){if(typeof Mi!="function")throw Error(s(280));var t=e.stateNode;t&&(t=ja(t),Mi(e.stateNode,e.type,t))}}function uo(e){Bn?qn?qn.push(e):qn=[e]:Bn=e}function co(){if(Bn){var e=Bn,t=qn;if(qn=Bn=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function po(e,t){return e(t)}function fo(){}var Fi=!1;function go(e,t,n){if(Fi)return e(t,n);Fi=!0;try{return po(e,t,n)}finally{Fi=!1,(Bn!==null||qn!==null)&&(fo(),co())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var a=ja(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ui=!1;if(g)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Ui=!1}function $p(e,t,n,a,l,u,c,m,h){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(z){this.onError(z)}}var Er=!1,ha=null,ya=!1,Hi=null,Pp={onError:function(e){Er=!0,ha=e}};function Lp(e,t,n,a,l,u,c,m,h){Er=!1,ha=null,$p.apply(Pp,arguments)}function Tp(e,t,n,a,l,u,c,m,h){if(Lp.apply(this,arguments),Er){if(Er){var C=ha;Er=!1,ha=null}else throw Error(s(198));ya||(ya=!0,Hi=C)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ho(e){if(xn(e)!==e)throw Error(s(188))}function Op(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return ho(l),e;if(u===a)return ho(l),t;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=u;else{for(var c=!1,m=l.child;m;){if(m===n){c=!0,n=l,a=u;break}if(m===a){c=!0,a=l,n=u;break}m=m.sibling}if(!c){for(m=u.child;m;){if(m===n){c=!0,n=u,a=l;break}if(m===a){c=!0,a=u,n=l;break}m=m.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function yo(e){return e=Op(e),e!==null?vo(e):null}function vo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vo(e);if(t!==null)return t;e=e.sibling}return null}var bo=i.unstable_scheduleCallback,xo=i.unstable_cancelCallback,zp=i.unstable_shouldYield,Np=i.unstable_requestPaint,Ne=i.unstable_now,Ap=i.unstable_getCurrentPriorityLevel,Bi=i.unstable_ImmediatePriority,wo=i.unstable_UserBlockingPriority,va=i.unstable_NormalPriority,Ip=i.unstable_LowPriority,ko=i.unstable_IdlePriority,ba=null,zt=null;function Dp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Fp,jp=Math.log,Mp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(jp(e)/Mp|0)|0}var xa=64,wa=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,u=e.pingedLanes,c=n&268435455;if(c!==0){var m=c&~l;m!==0?a=_r(m):(u&=c,u!==0&&(a=_r(u)))}else c=n&~l,c!==0?a=_r(c):u!==0&&(a=_r(u));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-_t(t),l=1<<n,a|=e[n],t&=~l;return a}function Up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var c=31-_t(u),m=1<<c,h=l[c];h===-1?((m&n)===0||(m&a)!==0)&&(l[c]=Up(m,t)):h<=t&&(e.expiredLanes|=m),u&=~m}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function So(){var e=xa;return xa<<=1,(xa&4194240)===0&&(xa=64),e}function Wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function Bp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_t(n),u=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~u}}function Xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-_t(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var xe=0;function Eo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _o,Vi,Co,Ro,$o,Qi=!1,Sa=[],Yt=null,Gt=null,Zt=null,Rr=new Map,$r=new Map,en=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Po(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function Pr(e,t,n,a,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Br(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wp(e,t,n,a,l){switch(t){case"focusin":return Yt=Pr(Yt,e,t,n,a,l),!0;case"dragenter":return Gt=Pr(Gt,e,t,n,a,l),!0;case"mouseover":return Zt=Pr(Zt,e,t,n,a,l),!0;case"pointerover":var u=l.pointerId;return Rr.set(u,Pr(Rr.get(u)||null,e,t,n,a,l)),!0;case"gotpointercapture":return u=l.pointerId,$r.set(u,Pr($r.get(u)||null,e,t,n,a,l)),!0}return!1}function Lo(e){var t=wn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=mo(n),t!==null){e.blockedOn=t,$o(e.priority,function(){Co(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Di=a,n.target.dispatchEvent(a),Di=null}else return t=Br(n),t!==null&&Vi(t),e.blockedOn=n,!1;t.shift()}return!0}function To(e,t,n){Ea(e)&&n.delete(t)}function Xp(){Qi=!1,Yt!==null&&Ea(Yt)&&(Yt=null),Gt!==null&&Ea(Gt)&&(Gt=null),Zt!==null&&Ea(Zt)&&(Zt=null),Rr.forEach(To),$r.forEach(To)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Xp)))}function Tr(e){function t(l){return Lr(l,e)}if(0<Sa.length){Lr(Sa[0],e);for(var n=1;n<Sa.length;n++){var a=Sa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Yt!==null&&Lr(Yt,e),Gt!==null&&Lr(Gt,e),Zt!==null&&Lr(Zt,e),Rr.forEach(t),$r.forEach(t),n=0;n<en.length;n++)a=en[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Lo(n),n.blockedOn===null&&en.shift()}var Wn=B.ReactCurrentBatchConfig,_a=!0;function Vp(e,t,n,a){var l=xe,u=Wn.transition;Wn.transition=null;try{xe=1,Ki(e,t,n,a)}finally{xe=l,Wn.transition=u}}function Qp(e,t,n,a){var l=xe,u=Wn.transition;Wn.transition=null;try{xe=4,Ki(e,t,n,a)}finally{xe=l,Wn.transition=u}}function Ki(e,t,n,a){if(_a){var l=Ji(e,t,n,a);if(l===null)fs(e,t,a,Ca,n),Po(e,a);else if(Wp(l,e,t,n,a))a.stopPropagation();else if(Po(e,a),t&4&&-1<qp.indexOf(e)){for(;l!==null;){var u=Br(l);if(u!==null&&_o(u),u=Ji(e,t,n,a),u===null&&fs(e,t,a,Ca,n),u===l)break;l=u}l!==null&&a.stopPropagation()}else fs(e,t,a,null,n)}}var Ca=null;function Ji(e,t,n,a){if(Ca=null,e=ji(a),e=wn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function Oo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case Bi:return 1;case wo:return 4;case va:case Ip:return 16;case ko:return 536870912;default:return 16}default:return 16}}var tn=null,Yi=null,Ra=null;function zo(){if(Ra)return Ra;var e,t=Yi,n=t.length,a,l="value"in tn?tn.value:tn.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[u-a];a++);return Ra=l.slice(e,1<a?1-a:void 0)}function $a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function No(){return!1}function ct(e){function t(n,a,l,u,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Pa:No,this.isPropagationStopped=No,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ct(Xn),Or=M({},Xn,{view:0,detail:0}),Kp=ct(Or),Zi,es,zr,La=M({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Zi=e.screenX-zr.screenX,es=e.screenY-zr.screenY):es=Zi=0,zr=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:es}}),Ao=ct(La),Jp=M({},La,{dataTransfer:0}),Yp=ct(Jp),Gp=M({},Or,{relatedTarget:0}),ts=ct(Gp),Zp=M({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),ef=ct(Zp),tf=M({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=ct(tf),rf=M({},Xn,{data:0}),Io=ct(rf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function ns(){return of}var uf=M({},Or,{key:function(e){if(e.key){var t=af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=ct(uf),cf=M({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=ct(cf),pf=M({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),ff=ct(pf),gf=M({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=ct(gf),hf=M({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=ct(hf),vf=[9,13,27,32],rs=g&&"CompositionEvent"in window,Nr=null;g&&"documentMode"in document&&(Nr=document.documentMode);var bf=g&&"TextEvent"in window&&!Nr,jo=g&&(!rs||Nr&&8<Nr&&11>=Nr),Mo=" ",Fo=!1;function Uo(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ho(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function xf(e,t){switch(e){case"compositionend":return Ho(t);case"keypress":return t.which!==32?null:(Fo=!0,Mo);case"textInput":return e=t.data,e===Mo&&Fo?null:e;default:return null}}function wf(e,t){if(Vn)return e==="compositionend"||!rs&&Uo(e,t)?(e=zo(),Ra=Yi=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jo&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function qo(e,t,n,a){uo(a),t=Aa(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ar=null,Ir=null;function Sf(e){ou(e,0)}function Ta(e){var t=Gn(e);if(mt(t))return e}function Ef(e,t){if(e==="change")return t}var Wo=!1;if(g){var as;if(g){var is="oninput"in document;if(!is){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),is=typeof Xo.oninput=="function"}as=is}else as=!1;Wo=as&&(!document.documentMode||9<document.documentMode)}function Vo(){Ar&&(Ar.detachEvent("onpropertychange",Qo),Ir=Ar=null)}function Qo(e){if(e.propertyName==="value"&&Ta(Ir)){var t=[];qo(t,Ir,e,ji(e)),go(Sf,t)}}function _f(e,t,n){e==="focusin"?(Vo(),Ar=t,Ir=n,Ar.attachEvent("onpropertychange",Qo)):e==="focusout"&&Vo()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Ir)}function Rf(e,t){if(e==="click")return Ta(t)}function $f(e,t){if(e==="input"||e==="change")return Ta(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Pf;function Dr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!b.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jo(e,t){var n=Ko(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ko(n)}}function Yo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Go(){for(var e=window,t=vn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vn(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=Go(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yo(n.ownerDocument.documentElement,n)){if(a!==null&&ss(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,u=Math.min(a.start,l);a=a.end===void 0?u:Math.min(a.end,l),!e.extend&&u>a&&(l=a,a=u,u=l),l=Jo(n,u);var c=Jo(n,a);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>a?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=g&&"documentMode"in document&&11>=document.documentMode,Qn=null,ls=null,jr=null,os=!1;function Zo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||Qn==null||Qn!==vn(a)||(a=Qn,"selectionStart"in a&&ss(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),jr&&Dr(jr,a)||(jr=a,a=Aa(ls,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Qn)))}function Oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},us={},eu={};g&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function za(e){if(us[e])return us[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return us[e]=t[n];return e}var tu=za("animationend"),nu=za("animationiteration"),ru=za("animationstart"),au=za("transitionend"),iu=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){iu.set(e,t),p(t,[e])}for(var ds=0;ds<su.length;ds++){var cs=su[ds],Of=cs.toLowerCase(),zf=cs[0].toUpperCase()+cs.slice(1);nn(Of,"on"+zf)}nn(tu,"onAnimationEnd"),nn(nu,"onAnimationIteration"),nn(ru,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(au,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function lu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Tp(a,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var c=a.length-1;0<=c;c--){var m=a[c],h=m.instance,C=m.currentTarget;if(m=m.listener,h!==u&&l.isPropagationStopped())break e;lu(l,m,C),u=h}else for(c=0;c<a.length;c++){if(m=a[c],h=m.instance,C=m.currentTarget,m=m.listener,h!==u&&l.isPropagationStopped())break e;lu(l,m,C),u=h}}}if(ya)throw e=Hi,ya=!1,Hi=null,e}function Ce(e,t){var n=t[bs];n===void 0&&(n=t[bs]=new Set);var a=e+"__bubble";n.has(a)||(uu(t,e,2,!1),n.add(a))}function ps(e,t,n){var a=0;t&&(a|=4),uu(n,e,a,t)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[Na]){e[Na]=!0,o.forEach(function(n){n!=="selectionchange"&&(Nf.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Na]||(t[Na]=!0,ps("selectionchange",!1,t))}}function uu(e,t,n,a){switch(Oo(t)){case 1:var l=Vp;break;case 4:l=Qp;break;default:l=Ki}n=l.bind(null,t,n,e),l=void 0,!Ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fs(e,t,n,a,l){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var m=a.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;c=c.return}for(;m!==null;){if(c=wn(m),c===null)return;if(h=c.tag,h===5||h===6){a=u=c;continue e}m=m.parentNode}}a=a.return}go(function(){var C=u,z=ji(n),A=[];e:{var T=iu.get(e);if(T!==void 0){var W=Gi,Q=e;switch(e){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":W=df;break;case"focusin":Q="focus",W=ts;break;case"focusout":Q="blur",W=ts;break;case"beforeblur":case"afterblur":W=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=ff;break;case tu:case nu:case ru:W=ef;break;case au:W=mf;break;case"scroll":W=Kp;break;case"wheel":W=yf;break;case"copy":case"cut":case"paste":W=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Do}var K=(t&4)!==0,Ae=!K&&e==="scroll",k=K?T!==null?T+"Capture":null:T;K=[];for(var v=C,E;v!==null;){E=v;var I=E.stateNode;if(E.tag===5&&I!==null&&(E=I,k!==null&&(I=kr(v,k),I!=null&&K.push(Ur(v,I,E)))),Ae)break;v=v.return}0<K.length&&(T=new W(T,Q,null,n,z),A.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",T&&n!==Di&&(Q=n.relatedTarget||n.fromElement)&&(wn(Q)||Q[Mt]))break e;if((W||T)&&(T=z.window===z?z:(T=z.ownerDocument)?T.defaultView||T.parentWindow:window,W?(Q=n.relatedTarget||n.toElement,W=C,Q=Q?wn(Q):null,Q!==null&&(Ae=xn(Q),Q!==Ae||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(W=null,Q=C),W!==Q)){if(K=Ao,I="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=Do,I="onPointerLeave",k="onPointerEnter",v="pointer"),Ae=W==null?T:Gn(W),E=Q==null?T:Gn(Q),T=new K(I,v+"leave",W,n,z),T.target=Ae,T.relatedTarget=E,I=null,wn(z)===C&&(K=new K(k,v+"enter",Q,n,z),K.target=E,K.relatedTarget=Ae,I=K),Ae=I,W&&Q)t:{for(K=W,k=Q,v=0,E=K;E;E=Jn(E))v++;for(E=0,I=k;I;I=Jn(I))E++;for(;0<v-E;)K=Jn(K),v--;for(;0<E-v;)k=Jn(k),E--;for(;v--;){if(K===k||k!==null&&K===k.alternate)break t;K=Jn(K),k=Jn(k)}K=null}else K=null;W!==null&&du(A,T,W,K,!1),Q!==null&&Ae!==null&&du(A,Ae,Q,K,!0)}}e:{if(T=C?Gn(C):window,W=T.nodeName&&T.nodeName.toLowerCase(),W==="select"||W==="input"&&T.type==="file")var Y=Ef;else if(Bo(T))if(Wo)Y=$f;else{Y=Cf;var ne=_f}else(W=T.nodeName)&&W.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Y=Rf);if(Y&&(Y=Y(e,C))){qo(A,Y,n,z);break e}ne&&ne(e,T,C),e==="focusout"&&(ne=T._wrapperState)&&ne.controlled&&T.type==="number"&&Et(T,"number",T.value)}switch(ne=C?Gn(C):window,e){case"focusin":(Bo(ne)||ne.contentEditable==="true")&&(Qn=ne,ls=C,jr=null);break;case"focusout":jr=ls=Qn=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Zo(A,n,z);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Zo(A,n,z)}var re;if(rs)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Vn?Uo(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(jo&&n.locale!=="ko"&&(Vn||se!=="onCompositionStart"?se==="onCompositionEnd"&&Vn&&(re=zo()):(tn=z,Yi="value"in tn?tn.value:tn.textContent,Vn=!0)),ne=Aa(C,se),0<ne.length&&(se=new Io(se,e,null,n,z),A.push({event:se,listeners:ne}),re?se.data=re:(re=Ho(n),re!==null&&(se.data=re)))),(re=bf?xf(e,n):wf(e,n))&&(C=Aa(C,"onBeforeInput"),0<C.length&&(z=new Io("onBeforeInput","beforeinput",null,n,z),A.push({event:z,listeners:C}),z.data=re))}ou(A,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Aa(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=kr(e,n),u!=null&&a.unshift(Ur(e,u,l)),u=kr(e,t),u!=null&&a.push(Ur(e,u,l))),e=e.return}return a}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,t,n,a,l){for(var u=t._reactName,c=[];n!==null&&n!==a;){var m=n,h=m.alternate,C=m.stateNode;if(h!==null&&h===a)break;m.tag===5&&C!==null&&(m=C,l?(h=kr(n,u),h!=null&&c.unshift(Ur(n,h,m))):l||(h=kr(n,u),h!=null&&c.push(Ur(n,h,m)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Af=/\r\n?/g,If=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Af,`
`).replace(If,"")}function Ia(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(s(425))}function Da(){}var gs=null,ms=null;function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,jf=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Mf)}:ys;function Mf(e){setTimeout(function(){throw e})}function vs(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),Tr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);Tr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Yn,Hr="__reactProps$"+Yn,Mt="__reactContainer$"+Yn,bs="__reactEvents$"+Yn,Ff="__reactListeners$"+Yn,Uf="__reactHandles$"+Yn;function wn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[Nt])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[Nt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ja(e){return e[Hr]||null}var xs=[],Zn=-1;function an(e){return{current:e}}function Re(e){0>Zn||(e.current=xs[Zn],xs[Zn]=null,Zn--)}function Ee(e,t){Zn++,xs[Zn]=e.current,e.current=t}var sn={},Ke=an(sn),at=an(!1),kn=sn;function er(e,t){var n=e.type.contextTypes;if(!n)return sn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in n)l[u]=t[u];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function it(e){return e=e.childContextTypes,e!=null}function Ma(){Re(at),Re(Ke)}function gu(e,t,n){if(Ke.current!==sn)throw Error(s(168));Ee(Ke,t),Ee(at,n)}function mu(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,pe(e)||"Unknown",l));return M({},n,a)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,kn=Ke.current,Ee(Ke,e),Ee(at,at.current),!0}function hu(e,t,n){var a=e.stateNode;if(!a)throw Error(s(169));n?(e=mu(e,t,kn),a.__reactInternalMemoizedMergedChildContext=e,Re(at),Re(Ke),Ee(Ke,e)):Re(at),Ee(at,n)}var Ft=null,Ua=!1,ws=!1;function yu(e){Ft===null?Ft=[e]:Ft.push(e)}function Hf(e){Ua=!0,yu(e)}function ln(){if(!ws&&Ft!==null){ws=!0;var e=0,t=xe;try{var n=Ft;for(xe=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ft=null,Ua=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),bo(Bi,ln),l}finally{xe=t,ws=!1}}return null}var tr=[],nr=0,Ha=null,Ba=0,yt=[],vt=0,Sn=null,Ut=1,Ht="";function En(e,t){tr[nr++]=Ba,tr[nr++]=Ha,Ha=e,Ba=t}function vu(e,t,n){yt[vt++]=Ut,yt[vt++]=Ht,yt[vt++]=Sn,Sn=e;var a=Ut;e=Ht;var l=32-_t(a)-1;a&=~(1<<l),n+=1;var u=32-_t(t)+l;if(30<u){var c=l-l%5;u=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Ut=1<<32-_t(t)+l|n<<l|a,Ht=u+e}else Ut=1<<u|n<<l|a,Ht=e}function ks(e){e.return!==null&&(En(e,1),vu(e,1,0))}function Ss(e){for(;e===Ha;)Ha=tr[--nr],tr[nr]=null,Ba=tr[--nr],tr[nr]=null;for(;e===Sn;)Sn=yt[--vt],yt[vt]=null,Ht=yt[--vt],yt[vt]=null,Ut=yt[--vt],yt[vt]=null}var pt=null,ft=null,$e=!1,Rt=null;function bu(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if($e){var t=ft;if(t){var n=t;if(!xu(e,t)){if(Es(e))throw Error(s(418));t=rn(n.nextSibling);var a=pt;t&&xu(e,t)?bu(a,n):(e.flags=e.flags&-4097|2,$e=!1,pt=e)}}else{if(Es(e))throw Error(s(418));e.flags=e.flags&-4097|2,$e=!1,pt=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function qa(e){if(e!==pt)return!1;if(!$e)return wu(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hs(e.type,e.memoizedProps)),t&&(t=ft)){if(Es(e))throw ku(),Error(s(418));for(;t;)bu(e,t),t=rn(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?rn(e.stateNode.nextSibling):null;return!0}function ku(){for(var e=ft;e;)e=rn(e.nextSibling)}function rr(){ft=pt=null,$e=!1}function Cs(e){Rt===null?Rt=[e]:Rt.push(e)}var Bf=B.ReactCurrentBatchConfig;function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var a=n.stateNode}if(!a)throw Error(s(147,e));var l=a,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(c){var m=l.refs;c===null?delete m[u]:m[u]=c},t._stringRef=u,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Wa(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Su(e){var t=e._init;return t(e._payload)}function Eu(e){function t(k,v){if(e){var E=k.deletions;E===null?(k.deletions=[v],k.flags|=16):E.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function a(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function l(k,v){return k=mn(k,v),k.index=0,k.sibling=null,k}function u(k,v,E){return k.index=E,e?(E=k.alternate,E!==null?(E=E.index,E<v?(k.flags|=2,v):E):(k.flags|=2,v)):(k.flags|=1048576,v)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function m(k,v,E,I){return v===null||v.tag!==6?(v=yl(E,k.mode,I),v.return=k,v):(v=l(v,E),v.return=k,v)}function h(k,v,E,I){var Y=E.type;return Y===de?z(k,v,E.props.children,I,E.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Su(Y)===v.type)?(I=l(v,E.props),I.ref=qr(k,v,E),I.return=k,I):(I=mi(E.type,E.key,E.props,null,k.mode,I),I.ref=qr(k,v,E),I.return=k,I)}function C(k,v,E,I){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=vl(E,k.mode,I),v.return=k,v):(v=l(v,E.children||[]),v.return=k,v)}function z(k,v,E,I,Y){return v===null||v.tag!==7?(v=On(E,k.mode,I,Y),v.return=k,v):(v=l(v,E),v.return=k,v)}function A(k,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yl(""+v,k.mode,E),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ae:return E=mi(v.type,v.key,v.props,null,k.mode,E),E.ref=qr(k,null,v),E.return=k,E;case X:return v=vl(v,k.mode,E),v.return=k,v;case _e:var I=v._init;return A(k,I(v._payload),E)}if(Kt(v)||Z(v))return v=On(v,k.mode,E,null),v.return=k,v;Wa(k,v)}return null}function T(k,v,E,I){var Y=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Y!==null?null:m(k,v,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ae:return E.key===Y?h(k,v,E,I):null;case X:return E.key===Y?C(k,v,E,I):null;case _e:return Y=E._init,T(k,v,Y(E._payload),I)}if(Kt(E)||Z(E))return Y!==null?null:z(k,v,E,I,null);Wa(k,E)}return null}function W(k,v,E,I,Y){if(typeof I=="string"&&I!==""||typeof I=="number")return k=k.get(E)||null,m(v,k,""+I,Y);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ae:return k=k.get(I.key===null?E:I.key)||null,h(v,k,I,Y);case X:return k=k.get(I.key===null?E:I.key)||null,C(v,k,I,Y);case _e:var ne=I._init;return W(k,v,E,ne(I._payload),Y)}if(Kt(I)||Z(I))return k=k.get(E)||null,z(v,k,I,Y,null);Wa(v,I)}return null}function Q(k,v,E,I){for(var Y=null,ne=null,re=v,se=v=0,Ue=null;re!==null&&se<E.length;se++){re.index>se?(Ue=re,re=null):Ue=re.sibling;var ve=T(k,re,E[se],I);if(ve===null){re===null&&(re=Ue);break}e&&re&&ve.alternate===null&&t(k,re),v=u(ve,v,se),ne===null?Y=ve:ne.sibling=ve,ne=ve,re=Ue}if(se===E.length)return n(k,re),$e&&En(k,se),Y;if(re===null){for(;se<E.length;se++)re=A(k,E[se],I),re!==null&&(v=u(re,v,se),ne===null?Y=re:ne.sibling=re,ne=re);return $e&&En(k,se),Y}for(re=a(k,re);se<E.length;se++)Ue=W(re,k,se,E[se],I),Ue!==null&&(e&&Ue.alternate!==null&&re.delete(Ue.key===null?se:Ue.key),v=u(Ue,v,se),ne===null?Y=Ue:ne.sibling=Ue,ne=Ue);return e&&re.forEach(function(hn){return t(k,hn)}),$e&&En(k,se),Y}function K(k,v,E,I){var Y=Z(E);if(typeof Y!="function")throw Error(s(150));if(E=Y.call(E),E==null)throw Error(s(151));for(var ne=Y=null,re=v,se=v=0,Ue=null,ve=E.next();re!==null&&!ve.done;se++,ve=E.next()){re.index>se?(Ue=re,re=null):Ue=re.sibling;var hn=T(k,re,ve.value,I);if(hn===null){re===null&&(re=Ue);break}e&&re&&hn.alternate===null&&t(k,re),v=u(hn,v,se),ne===null?Y=hn:ne.sibling=hn,ne=hn,re=Ue}if(ve.done)return n(k,re),$e&&En(k,se),Y;if(re===null){for(;!ve.done;se++,ve=E.next())ve=A(k,ve.value,I),ve!==null&&(v=u(ve,v,se),ne===null?Y=ve:ne.sibling=ve,ne=ve);return $e&&En(k,se),Y}for(re=a(k,re);!ve.done;se++,ve=E.next())ve=W(re,k,se,ve.value,I),ve!==null&&(e&&ve.alternate!==null&&re.delete(ve.key===null?se:ve.key),v=u(ve,v,se),ne===null?Y=ve:ne.sibling=ve,ne=ve);return e&&re.forEach(function(kg){return t(k,kg)}),$e&&En(k,se),Y}function Ae(k,v,E,I){if(typeof E=="object"&&E!==null&&E.type===de&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ae:e:{for(var Y=E.key,ne=v;ne!==null;){if(ne.key===Y){if(Y=E.type,Y===de){if(ne.tag===7){n(k,ne.sibling),v=l(ne,E.props.children),v.return=k,k=v;break e}}else if(ne.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Su(Y)===ne.type){n(k,ne.sibling),v=l(ne,E.props),v.ref=qr(k,ne,E),v.return=k,k=v;break e}n(k,ne);break}else t(k,ne);ne=ne.sibling}E.type===de?(v=On(E.props.children,k.mode,I,E.key),v.return=k,k=v):(I=mi(E.type,E.key,E.props,null,k.mode,I),I.ref=qr(k,v,E),I.return=k,k=I)}return c(k);case X:e:{for(ne=E.key;v!==null;){if(v.key===ne)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(k,v.sibling),v=l(v,E.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=vl(E,k.mode,I),v.return=k,k=v}return c(k);case _e:return ne=E._init,Ae(k,v,ne(E._payload),I)}if(Kt(E))return Q(k,v,E,I);if(Z(E))return K(k,v,E,I);Wa(k,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(k,v.sibling),v=l(v,E),v.return=k,k=v):(n(k,v),v=yl(E,k.mode,I),v.return=k,k=v),c(k)):n(k,v)}return Ae}var ar=Eu(!0),_u=Eu(!1),Xa=an(null),Va=null,ir=null,Rs=null;function $s(){Rs=ir=Va=null}function Ps(e){var t=Xa.current;Re(Xa),e._currentValue=t}function Ls(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Va=e,Rs=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Va===null)throw Error(s(308));ir=e,Va.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var _n=null;function Ts(e){_n===null?_n=[e]:_n.push(e)}function Cu(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,Ts(t)):(n.next=l.next,l.next=n),t.interleaved=n,Bt(e,a)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Bt(e,n)}return l=a.interleaved,l===null?(t.next=t,Ts(a)):(t.next=l.next,l.next=t),a.interleaved=t,Bt(e,n)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Xi(e,n)}}function $u(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?l=u=c:u=u.next=c,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ka(e,t,n,a){var l=e.updateQueue;on=!1;var u=l.firstBaseUpdate,c=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var h=m,C=h.next;h.next=null,c===null?u=C:c.next=C,c=h;var z=e.alternate;z!==null&&(z=z.updateQueue,m=z.lastBaseUpdate,m!==c&&(m===null?z.firstBaseUpdate=C:m.next=C,z.lastBaseUpdate=h))}if(u!==null){var A=l.baseState;c=0,z=C=h=null,m=u;do{var T=m.lane,W=m.eventTime;if((a&T)===T){z!==null&&(z=z.next={eventTime:W,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var Q=e,K=m;switch(T=t,W=n,K.tag){case 1:if(Q=K.payload,typeof Q=="function"){A=Q.call(W,A,T);break e}A=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=K.payload,T=typeof Q=="function"?Q.call(W,A,T):Q,T==null)break e;A=M({},A,T);break e;case 2:on=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[m]:T.push(m))}else W={eventTime:W,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},z===null?(C=z=W,h=A):z=z.next=W,c|=T;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;T=m,m=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(z===null&&(h=A),l.baseState=h,l.firstBaseUpdate=C,l.lastBaseUpdate=z,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);$n|=c,e.lanes=c,e.memoizedState=A}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var Wr={},At=an(Wr),Xr=an(Wr),Vr=an(Wr);function Cn(e){if(e===Wr)throw Error(s(174));return e}function zs(e,t){switch(Ee(Vr,t),Ee(Xr,e),Ee(At,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}Re(At),Ee(At,t)}function lr(){Re(At),Re(Xr),Re(Vr)}function Lu(e){Cn(Vr.current);var t=Cn(At.current),n=Ni(t,e.type);t!==n&&(Ee(Xr,e),Ee(At,n))}function Ns(e){Xr.current===e&&(Re(At),Re(Xr))}var Te=an(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Is(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var Ya=B.ReactCurrentDispatcher,Ds=B.ReactCurrentBatchConfig,Rn=0,Oe=null,De=null,Me=null,Ga=!1,Qr=!1,Kr=0,qf=0;function Je(){throw Error(s(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Ms(e,t,n,a,l,u){if(Rn=u,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?Qf:Kf,e=n(a,l),Qr){u=0;do{if(Qr=!1,Kr=0,25<=u)throw Error(s(301));u+=1,Me=De=null,t.updateQueue=null,Ya.current=Jf,e=n(a,l)}while(Qr)}if(Ya.current=ti,t=De!==null&&De.next!==null,Rn=0,Me=De=Oe=null,Ga=!1,t)throw Error(s(300));return e}function Fs(){var e=Kr!==0;return Kr=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Oe.memoizedState=Me=e:Me=Me.next=e,Me}function xt(){if(De===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Me===null?Oe.memoizedState:Me.next;if(t!==null)Me=t,De=e;else{if(e===null)throw Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?Oe.memoizedState=Me=e:Me=Me.next=e}return Me}function Jr(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=xt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=De,l=a.baseQueue,u=n.pending;if(u!==null){if(l!==null){var c=l.next;l.next=u.next,u.next=c}a.baseQueue=l=u,n.pending=null}if(l!==null){u=l.next,a=a.baseState;var m=c=null,h=null,C=u;do{var z=C.lane;if((Rn&z)===z)h!==null&&(h=h.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),a=C.hasEagerState?C.eagerState:e(a,C.action);else{var A={lane:z,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};h===null?(m=h=A,c=a):h=h.next=A,Oe.lanes|=z,$n|=z}C=C.next}while(C!==null&&C!==u);h===null?c=a:h.next=m,Ct(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseState=c,t.baseQueue=h,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do u=l.lane,Oe.lanes|=u,$n|=u,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=xt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do u=e(u,c.action),c=c.next;while(c!==l);Ct(u,t.memoizedState)||(st=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Tu(){}function Ou(e,t){var n=Oe,a=xt(),l=t(),u=!Ct(a.memoizedState,l);if(u&&(a.memoizedState=l,st=!0),a=a.queue,Bs(Au.bind(null,n,a,e),[e]),a.getSnapshot!==t||u||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Yr(9,Nu.bind(null,n,a,l,t),void 0,null),Fe===null)throw Error(s(349));(Rn&30)!==0||zu(n,t,l)}return l}function zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nu(e,t,n,a){t.value=n,t.getSnapshot=a,Iu(t)&&Du(e)}function Au(e,t,n){return n(function(){Iu(t)&&Du(e)})}function Iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Du(e){var t=Bt(e,1);t!==null&&Tt(t,e,1,-1)}function ju(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Vf.bind(null,Oe,e),[t.memoizedState,e]}function Yr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Mu(){return xt().memoizedState}function Za(e,t,n,a){var l=It();Oe.flags|=e,l.memoizedState=Yr(1|t,n,void 0,a===void 0?null:a)}function ei(e,t,n,a){var l=xt();a=a===void 0?null:a;var u=void 0;if(De!==null){var c=De.memoizedState;if(u=c.destroy,a!==null&&js(a,c.deps)){l.memoizedState=Yr(t,n,u,a);return}}Oe.flags|=e,l.memoizedState=Yr(1|t,n,u,a)}function Fu(e,t){return Za(8390656,8,e,t)}function Bs(e,t){return ei(2048,8,e,t)}function Uu(e,t){return ei(4,2,e,t)}function Hu(e,t){return ei(4,4,e,t)}function Bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,ei(4,4,Bu.bind(null,t,e),n)}function qs(){}function Wu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&js(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=xt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&js(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Vu(e,t,n){return(Rn&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(Ct(n,t)||(n=So(),Oe.lanes|=n,$n|=n,e.baseState=!0),t)}function Wf(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var a=Ds.transition;Ds.transition={};try{e(!1),t()}finally{xe=n,Ds.transition=a}}function Qu(){return xt().memoizedState}function Xf(e,t,n){var a=fn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Ju(t,n);else if(n=Cu(e,t,n,a),n!==null){var l=rt();Tt(n,e,a,l),Yu(n,t,a)}}function Vf(e,t,n){var a=fn(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Ju(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,m=u(c,n);if(l.hasEagerState=!0,l.eagerState=m,Ct(m,c)){var h=t.interleaved;h===null?(l.next=l,Ts(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=Cu(e,t,l,a),n!==null&&(l=rt(),Tt(n,e,a,l),Yu(n,t,a))}}function Ku(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Ju(e,t){Qr=Ga=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yu(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Xi(e,n)}}var ti={readContext:bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Qf={readContext:bt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,Bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=It();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Xf.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:ju,useDebugValue:qs,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=ju(!1),t=e[0];return e=Wf.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Oe,l=It();if($e){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Fe===null)throw Error(s(349));(Rn&30)!==0||zu(a,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,Fu(Au.bind(null,a,u,e),[e]),a.flags|=2048,Yr(9,Nu.bind(null,a,u,n,t),void 0,null),n},useId:function(){var e=It(),t=Fe.identifierPrefix;if($e){var n=Ht,a=Ut;n=(a&~(1<<32-_t(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kf={readContext:bt,useCallback:Wu,useContext:bt,useEffect:Bs,useImperativeHandle:qu,useInsertionEffect:Uu,useLayoutEffect:Hu,useMemo:Xu,useReducer:Us,useRef:Mu,useState:function(){return Us(Jr)},useDebugValue:qs,useDeferredValue:function(e){var t=xt();return Vu(t,De.memoizedState,e)},useTransition:function(){var e=Us(Jr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Ou,useId:Qu,unstable_isNewReconciler:!1},Jf={readContext:bt,useCallback:Wu,useContext:bt,useEffect:Bs,useImperativeHandle:qu,useInsertionEffect:Uu,useLayoutEffect:Hu,useMemo:Xu,useReducer:Hs,useRef:Mu,useState:function(){return Hs(Jr)},useDebugValue:qs,useDeferredValue:function(e){var t=xt();return De===null?t.memoizedState=e:Vu(t,De.memoizedState,e)},useTransition:function(){var e=Hs(Jr)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Ou,useId:Qu,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ws(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ni={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=rt(),l=fn(e),u=qt(a,l);u.payload=t,n!=null&&(u.callback=n),t=un(e,u,l),t!==null&&(Tt(t,e,l,a),Qa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=rt(),l=fn(e),u=qt(a,l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=un(e,u,l),t!==null&&(Tt(t,e,l,a),Qa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),a=fn(e),l=qt(n,a);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,a),t!==null&&(Tt(t,e,a,n),Qa(t,e,a))}};function Gu(e,t,n,a,l,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,c):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,a)||!Dr(l,u):!0}function Zu(e,t,n){var a=!1,l=sn,u=t.contextType;return typeof u=="object"&&u!==null?u=bt(u):(l=it(t)?kn:Ke.current,a=t.contextTypes,u=(a=a!=null)?er(e,l):sn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ni,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function ed(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ni.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Os(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=bt(u):(u=it(t)?kn:Ke.current,l.context=er(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ws(e,t,u,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ni.enqueueReplaceState(l,l.state,null),Ka(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",a=t;do n+=ge(a),a=a.return;while(a);var l=n}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function td(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){ui||(ui=!0,ul=a),Qs(e,t)},n}function nd(e,t,n){n=qt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Qs(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Qs(e,t),typeof a!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function rd(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Yf;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=cg.bind(null,e,t,n),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Gf=B.ReactCurrentOwner,st=!1;function nt(e,t,n,a){t.child=e===null?_u(t,null,n,a):ar(t,e.child,n,a)}function sd(e,t,n,a,l){n=n.render;var u=t.ref;return sr(t,l),a=Ms(e,t,n,a,u,l),n=Fs(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):($e&&n&&ks(t),t.flags|=1,nt(e,t,a,l),t.child)}function ld(e,t,n,a,l){if(e===null){var u=n.type;return typeof u=="function"&&!hl(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,od(e,t,u,a,l)):(e=mi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var c=u.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(c,a)&&e.ref===t.ref)return Wt(e,t,l)}return t.flags|=1,e=mn(u,a),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,a,l){if(e!==null){var u=e.memoizedProps;if(Dr(u,a)&&e.ref===t.ref)if(st=!1,t.pendingProps=a=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Wt(e,t,l)}return Ks(e,t,n,a,l)}function ud(e,t,n){var a=t.pendingProps,l=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(dr,gt),gt|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(dr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=u!==null?u.baseLanes:n,Ee(dr,gt),gt|=a}else u!==null?(a=u.baseLanes|n,t.memoizedState=null):a=n,Ee(dr,gt),gt|=a;return nt(e,t,l,n),t.child}function dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,a,l){var u=it(n)?kn:Ke.current;return u=er(t,u),sr(t,l),n=Ms(e,t,n,a,u,l),a=Fs(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):($e&&a&&ks(t),t.flags|=1,nt(e,t,n,l),t.child)}function cd(e,t,n,a,l){if(it(n)){var u=!0;Fa(t)}else u=!1;if(sr(t,l),t.stateNode===null)ai(e,t),Zu(t,n,a),Xs(t,n,a,l),a=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var h=c.context,C=n.contextType;typeof C=="object"&&C!==null?C=bt(C):(C=it(n)?kn:Ke.current,C=er(t,C));var z=n.getDerivedStateFromProps,A=typeof z=="function"||typeof c.getSnapshotBeforeUpdate=="function";A||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==a||h!==C)&&ed(t,c,a,C),on=!1;var T=t.memoizedState;c.state=T,Ka(t,a,c,l),h=t.memoizedState,m!==a||T!==h||at.current||on?(typeof z=="function"&&(Ws(t,n,z,a),h=t.memoizedState),(m=on||Gu(t,n,m,a,T,h,C))?(A||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),c.props=a,c.state=h,c.context=C,a=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Ru(e,t),m=t.memoizedProps,C=t.type===t.elementType?m:$t(t.type,m),c.props=C,A=t.pendingProps,T=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=bt(h):(h=it(n)?kn:Ke.current,h=er(t,h));var W=n.getDerivedStateFromProps;(z=typeof W=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==A||T!==h)&&ed(t,c,a,h),on=!1,T=t.memoizedState,c.state=T,Ka(t,a,c,l);var Q=t.memoizedState;m!==A||T!==Q||at.current||on?(typeof W=="function"&&(Ws(t,n,W,a),Q=t.memoizedState),(C=on||Gu(t,n,C,a,T,Q,h)||!1)?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,Q,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,Q,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Q),c.props=a,c.state=Q,c.context=h,a=C):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return Js(e,t,n,a,u,l)}function Js(e,t,n,a,l,u){dd(e,t);var c=(t.flags&128)!==0;if(!a&&!c)return l&&hu(t,n,!1),Wt(e,t,u);a=t.stateNode,Gf.current=t;var m=c&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&c?(t.child=ar(t,e.child,null,u),t.child=ar(t,null,m,u)):nt(e,t,m,u),t.memoizedState=a.state,l&&hu(t,n,!0),t.child}function pd(e){var t=e.stateNode;t.pendingContext?gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gu(e,t.context,!1),zs(e,t.containerInfo)}function fd(e,t,n,a,l){return rr(),Cs(l),t.flags|=256,nt(e,t,n,a),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,t,n){var a=t.pendingProps,l=Te.current,u=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ee(Te,l&1),e===null)return _s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=a.children,e=a.fallback,u?(a=t.mode,u=t.child,c={mode:"hidden",children:c},(a&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=c):u=hi(c,a,0,null),e=On(e,a,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Gs(n),t.memoizedState=Ys,e):Zs(t,c));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return Zf(e,t,c,a,m,l,n);if(u){u=a.fallback,c=t.mode,l=e.child,m=l.sibling;var h={mode:"hidden",children:a.children};return(c&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=h,t.deletions=null):(a=mn(l,h),a.subtreeFlags=l.subtreeFlags&14680064),m!==null?u=mn(m,u):(u=On(u,c,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,a=u,u=t.child,c=e.child.memoizedState,c=c===null?Gs(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},u.memoizedState=c,u.childLanes=e.childLanes&~n,t.memoizedState=Ys,a}return u=e.child,e=u.sibling,a=mn(u,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Zs(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,a){return a!==null&&Cs(a),ar(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,n,a,l,u,c){if(n)return t.flags&256?(t.flags&=-257,a=Vs(Error(s(422))),ri(e,t,c,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=a.fallback,l=t.mode,a=hi({mode:"visible",children:a.children},l,0,null),u=On(u,l,c,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,(t.mode&1)!==0&&ar(t,e.child,null,c),t.child.memoizedState=Gs(c),t.memoizedState=Ys,u);if((t.mode&1)===0)return ri(e,t,c,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var m=a.dgst;return a=m,u=Error(s(419)),a=Vs(u,a,void 0),ri(e,t,c,a)}if(m=(c&e.childLanes)!==0,st||m){if(a=Fe,a!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|c))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Bt(e,l),Tt(a,e,l,-1))}return ml(),a=Vs(Error(s(421))),ri(e,t,c,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=pg.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,ft=rn(l.nextSibling),pt=t,$e=!0,Rt=null,e!==null&&(yt[vt++]=Ut,yt[vt++]=Ht,yt[vt++]=Sn,Ut=e.id,Ht=e.overflow,Sn=t),t=Zs(t,a.children),t.flags|=4096,t)}function md(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ls(e.return,t,n)}function el(e,t,n,a,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=l)}function hd(e,t,n){var a=t.pendingProps,l=a.revealOrder,u=a.tail;if(nt(e,t,a.children,n),a=Te.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ee(Te,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),el(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ja(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}el(t,!0,n,null,u);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eg(e,t,n){switch(t.tag){case 3:pd(t),rr();break;case 5:Lu(t);break;case 1:it(t.type)&&Fa(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;Ee(Xa,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ee(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?gd(e,t,n):(Ee(Te,Te.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Ee(Te,Te.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return hd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ee(Te,Te.current),a)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n)}return Wt(e,t,n)}var yd,tl,vd,bd;yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},tl=function(){},vd=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Cn(At.current);var u=null;switch(n){case"input":l=bn(e,l),a=bn(e,a),u=[];break;case"select":l=M({},l,{value:void 0}),a=M({},a,{value:void 0}),u=[];break;case"textarea":l=jt(e,l),a=jt(e,a),u=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Da)}Ai(n,a);var c;n=null;for(C in l)if(!a.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var m=l[C];for(c in m)m.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?u||(u=[]):(u=u||[]).push(C,null));for(C in a){var h=a[C];if(m=l!=null?l[C]:void 0,a.hasOwnProperty(C)&&h!==m&&(h!=null||m!=null))if(C==="style")if(m){for(c in m)!m.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&m[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(u||(u=[]),u.push(C,n)),n=h;else C==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(u=u||[]).push(C,h)):C==="children"?typeof h!="string"&&typeof h!="number"||(u=u||[]).push(C,""+h):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(h!=null&&C==="onScroll"&&Ce("scroll",e),u||m===h||(u=[])):(u=u||[]).push(C,h))}n&&(u=u||[]).push("style",n);var C=u;(t.updateQueue=C)&&(t.flags|=4)}},bd=function(e,t,n,a){n!==a&&(t.flags|=4)};function Gr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function tg(e,t,n){var a=t.pendingProps;switch(Ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return it(t.type)&&Ma(),Ye(t),null;case 3:return a=t.stateNode,lr(),Re(at),Re(Ke),Is(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rt!==null&&(pl(Rt),Rt=null))),tl(e,t),Ye(t),null;case 5:Ns(t);var l=Cn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)vd(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ye(t),null}if(e=Cn(At.current),qa(t)){a=t.stateNode,n=t.type;var u=t.memoizedProps;switch(a[Nt]=t,a[Hr]=u,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",a),Ce("close",a);break;case"iframe":case"object":case"embed":Ce("load",a);break;case"video":case"audio":for(l=0;l<Mr.length;l++)Ce(Mr[l],a);break;case"source":Ce("error",a);break;case"img":case"image":case"link":Ce("error",a),Ce("load",a);break;case"details":Ce("toggle",a);break;case"input":ht(a,u),Ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},Ce("invalid",a);break;case"textarea":to(a,u),Ce("invalid",a)}Ai(n,u),l=null;for(var c in u)if(u.hasOwnProperty(c)){var m=u[c];c==="children"?typeof m=="string"?a.textContent!==m&&(u.suppressHydrationWarning!==!0&&Ia(a.textContent,m,e),l=["children",m]):typeof m=="number"&&a.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&Ia(a.textContent,m,e),l=["children",""+m]):d.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&Ce("scroll",a)}switch(n){case"input":yn(a),St(a,u,!0);break;case"textarea":yn(a),ro(a);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(a.onclick=Da)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ao(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),n==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[Nt]=t,e[Hr]=a,yd(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ii(n,a),n){case"dialog":Ce("cancel",e),Ce("close",e),l=a;break;case"iframe":case"object":case"embed":Ce("load",e),l=a;break;case"video":case"audio":for(l=0;l<Mr.length;l++)Ce(Mr[l],e);l=a;break;case"source":Ce("error",e),l=a;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=a;break;case"details":Ce("toggle",e),l=a;break;case"input":ht(e,a),l=bn(e,a),Ce("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=M({},a,{value:void 0}),Ce("invalid",e);break;case"textarea":to(e,a),l=jt(e,a),Ce("invalid",e);break;default:l=a}Ai(n,l),m=l;for(u in m)if(m.hasOwnProperty(u)){var h=m[u];u==="style"?lo(e,h):u==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&io(e,h)):u==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&xr(e,h):typeof h=="number"&&xr(e,""+h):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(d.hasOwnProperty(u)?h!=null&&u==="onScroll"&&Ce("scroll",e):h!=null&&q(e,u,h,c))}switch(n){case"input":yn(e),St(e,a,!1);break;case"textarea":yn(e),ro(e);break;case"option":a.value!=null&&e.setAttribute("value",""+me(a.value));break;case"select":e.multiple=!!a.multiple,u=a.value,u!=null?Jt(e,!!a.multiple,u,!1):a.defaultValue!=null&&Jt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)bd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(n=Cn(Vr.current),Cn(At.current),qa(t)){if(a=t.stateNode,n=t.memoizedProps,a[Nt]=t,(u=a.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Ia(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ia(a.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Nt]=t,t.stateNode=a}return Ye(t),null;case 13:if(Re(Te),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ku(),rr(),t.flags|=98560,u=!1;else if(u=qa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Nt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),u=!1}else Rt!==null&&(pl(Rt),Rt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?je===0&&(je=3):ml())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return lr(),tl(e,t),e===null&&Fr(t.stateNode.containerInfo),Ye(t),null;case 10:return Ps(t.type._context),Ye(t),null;case 17:return it(t.type)&&Ma(),Ye(t),null;case 19:if(Re(Te),u=t.memoizedState,u===null)return Ye(t),null;if(a=(t.flags&128)!==0,c=u.rendering,c===null)if(a)Gr(u,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ja(e),c!==null){for(t.flags|=128,Gr(u,!1),a=c.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)u=n,e=a,u.flags&=14680066,c=u.alternate,c===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Te,Te.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ne()>cr&&(t.flags|=128,a=!0,Gr(u,!1),t.lanes=4194304)}else{if(!a)if(e=Ja(c),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!c.alternate&&!$e)return Ye(t),null}else 2*Ne()-u.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,a=!0,Gr(u,!1),t.lanes=4194304);u.isBackwards?(c.sibling=t.child,t.child=c):(n=u.last,n!==null?n.sibling=c:t.child=c,u.last=c)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ne(),t.sibling=null,n=Te.current,Ee(Te,a?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return gl(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(gt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function ng(e,t){switch(Ss(t),t.tag){case 1:return it(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),Re(at),Re(Ke),Is(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ns(t),null;case 13:if(Re(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Te),null;case 4:return lr(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var ii=!1,Ge=!1,rg=typeof WeakSet=="function"?WeakSet:Set,V=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){ze(e,t,a)}else n.current=null}function nl(e,t,n){try{n()}catch(a){ze(e,t,a)}}var xd=!1;function ag(e,t){if(gs=_a,e=Go(),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var c=0,m=-1,h=-1,C=0,z=0,A=e,T=null;t:for(;;){for(var W;A!==n||l!==0&&A.nodeType!==3||(m=c+l),A!==u||a!==0&&A.nodeType!==3||(h=c+a),A.nodeType===3&&(c+=A.nodeValue.length),(W=A.firstChild)!==null;)T=A,A=W;for(;;){if(A===e)break t;if(T===n&&++C===l&&(m=c),T===u&&++z===a&&(h=c),(W=A.nextSibling)!==null)break;A=T,T=A.parentNode}A=W}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(ms={focusedElem:e,selectionRange:n},_a=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var K=Q.memoizedProps,Ae=Q.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?K:$t(t.type,K),Ae);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(I){ze(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return Q=xd,xd=!1,Q}function Zr(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&nl(t,n,u)}l=l.next}while(l!==a)}}function si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Hr],delete t[bs],delete t[Ff],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Da));else if(a!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function il(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}var We=null,Pt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Ed(e,t,n),n=n.sibling}function Ed(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ba,n)}catch{}switch(n.tag){case 5:Ge||ur(n,t);case 6:var a=We,l=Pt;We=null,dn(e,t,n),We=a,Pt=l,We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?vs(e.parentNode,n):e.nodeType===1&&vs(e,n),Tr(e)):vs(We,n.stateNode));break;case 4:a=We,l=Pt,We=n.stateNode.containerInfo,Pt=!0,dn(e,t,n),We=a,Pt=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var u=l,c=u.destroy;u=u.tag,c!==void 0&&((u&2)!==0||(u&4)!==0)&&nl(n,t,c),l=l.next}while(l!==a)}dn(e,t,n);break;case 1:if(!Ge&&(ur(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(m){ze(n,t,m)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Ge=(a=Ge)||n.memoizedState!==null,dn(e,t,n),Ge=a):dn(e,t,n);break;default:dn(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rg),t.forEach(function(a){var l=fg.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var u=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:We=m.stateNode,Pt=!1;break e;case 3:We=m.stateNode.containerInfo,Pt=!0;break e;case 4:We=m.stateNode.containerInfo,Pt=!0;break e}m=m.return}if(We===null)throw Error(s(160));Ed(u,c,l),We=null,Pt=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(C){ze(l,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Dt(e),a&4){try{Zr(3,e,e.return),si(3,e)}catch(K){ze(e,e.return,K)}try{Zr(5,e,e.return)}catch(K){ze(e,e.return,K)}}break;case 1:Lt(t,e),Dt(e),a&512&&n!==null&&ur(n,n.return);break;case 5:if(Lt(t,e),Dt(e),a&512&&n!==null&&ur(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(K){ze(e,e.return,K)}}if(a&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,c=n!==null?n.memoizedProps:u,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&oe(l,u),Ii(m,c);var C=Ii(m,u);for(c=0;c<h.length;c+=2){var z=h[c],A=h[c+1];z==="style"?lo(l,A):z==="dangerouslySetInnerHTML"?io(l,A):z==="children"?xr(l,A):q(l,z,A,C)}switch(m){case"input":qe(l,u);break;case"textarea":no(l,u);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var W=u.value;W!=null?Jt(l,!!u.multiple,W,!1):T!==!!u.multiple&&(u.defaultValue!=null?Jt(l,!!u.multiple,u.defaultValue,!0):Jt(l,!!u.multiple,u.multiple?[]:"",!1))}l[Hr]=u}catch(K){ze(e,e.return,K)}}break;case 6:if(Lt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(K){ze(e,e.return,K)}}break;case 3:if(Lt(t,e),Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(K){ze(e,e.return,K)}break;case 4:Lt(t,e),Dt(e);break;case 13:Lt(t,e),Dt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(ol=Ne())),a&4&&_d(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(C=Ge)||z,Lt(t,e),Ge=C):Lt(t,e),Dt(e),a&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!z&&(e.mode&1)!==0)for(V=e,z=e.child;z!==null;){for(A=V=z;V!==null;){switch(T=V,W=T.child,T.tag){case 0:case 11:case 14:case 15:Zr(4,T,T.return);break;case 1:ur(T,T.return);var Q=T.stateNode;if(typeof Q.componentWillUnmount=="function"){a=T,n=T.return;try{t=a,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(K){ze(a,n,K)}}break;case 5:ur(T,T.return);break;case 22:if(T.memoizedState!==null){Pd(A);continue}}W!==null?(W.return=T,V=W):Pd(A)}z=z.sibling}e:for(z=null,A=e;;){if(A.tag===5){if(z===null){z=A;try{l=A.stateNode,C?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=A.stateNode,h=A.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=so("display",c))}catch(K){ze(e,e.return,K)}}}else if(A.tag===6){if(z===null)try{A.stateNode.nodeValue=C?"":A.memoizedProps}catch(K){ze(e,e.return,K)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;z===A&&(z=null),A=A.return}z===A&&(z=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Lt(t,e),Dt(e),a&4&&_d(e);break;case 21:break;default:Lt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kd(n)){var a=n;break e}n=n.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(xr(l,""),a.flags&=-33);var u=Sd(e);il(e,u,l);break;case 3:case 4:var c=a.stateNode.containerInfo,m=Sd(e);al(e,m,c);break;default:throw Error(s(161))}}catch(h){ze(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ig(e,t,n){V=e,Rd(e)}function Rd(e,t,n){for(var a=(e.mode&1)!==0;V!==null;){var l=V,u=l.child;if(l.tag===22&&a){var c=l.memoizedState!==null||ii;if(!c){var m=l.alternate,h=m!==null&&m.memoizedState!==null||Ge;m=ii;var C=Ge;if(ii=c,(Ge=h)&&!C)for(V=l;V!==null;)c=V,h=c.child,c.tag===22&&c.memoizedState!==null?Ld(l):h!==null?(h.return=c,V=h):Ld(l);for(;u!==null;)V=u,Rd(u),u=u.sibling;V=l,ii=m,Ge=C}$d(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,V=u):$d(e)}}function $d(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||si(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ge)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Pu(t,u,a);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,c,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var z=C.memoizedState;if(z!==null){var A=z.dehydrated;A!==null&&Tr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ge||t.flags&512&&rl(t)}catch(T){ze(t,t.return,T)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Pd(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Ld(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{si(4,t)}catch(h){ze(t,n,h)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(h){ze(t,l,h)}}var u=t.return;try{rl(t)}catch(h){ze(t,u,h)}break;case 5:var c=t.return;try{rl(t)}catch(h){ze(t,c,h)}}}catch(h){ze(t,t.return,h)}if(t===e){V=null;break}var m=t.sibling;if(m!==null){m.return=t.return,V=m;break}V=t.return}}var sg=Math.ceil,li=B.ReactCurrentDispatcher,sl=B.ReactCurrentOwner,wt=B.ReactCurrentBatchConfig,ye=0,Fe=null,Ie=null,Xe=0,gt=0,dr=an(0),je=0,ea=null,$n=0,oi=0,ll=0,ta=null,lt=null,ol=0,cr=1/0,Xt=null,ui=!1,ul=null,cn=null,di=!1,pn=null,ci=0,na=0,dl=null,pi=-1,fi=0;function rt(){return(ye&6)!==0?Ne():pi!==-1?pi:pi=Ne()}function fn(e){return(e.mode&1)===0?1:(ye&2)!==0&&Xe!==0?Xe&-Xe:Bf.transition!==null?(fi===0&&(fi=So()),fi):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Oo(e.type)),e)}function Tt(e,t,n,a){if(50<na)throw na=0,dl=null,Error(s(185));Cr(e,n,a),((ye&2)===0||e!==Fe)&&(e===Fe&&((ye&2)===0&&(oi|=n),je===4&&gn(e,Xe)),ot(e,a),n===1&&ye===0&&(t.mode&1)===0&&(cr=Ne()+500,Ua&&ln()))}function ot(e,t){var n=e.callbackNode;Hp(e,t);var a=ka(e,e===Fe?Xe:0);if(a===0)n!==null&&xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&xo(n),t===1)e.tag===0?Hf(Od.bind(null,e)):yu(Od.bind(null,e)),jf(function(){(ye&6)===0&&ln()}),n=null;else{switch(Eo(a)){case 1:n=Bi;break;case 4:n=wo;break;case 16:n=va;break;case 536870912:n=ko;break;default:n=va}n=Fd(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if(pi=-1,fi=0,(ye&6)!==0)throw Error(s(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var a=ka(e,e===Fe?Xe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=gi(e,a);else{t=a;var l=ye;ye|=2;var u=Nd();(Fe!==e||Xe!==t)&&(Xt=null,cr=Ne()+500,Ln(e,t));do try{ug();break}catch(m){zd(e,m)}while(!0);$s(),li.current=u,ye=l,Ie!==null?t=0:(Fe=null,Xe=0,t=je)}if(t!==0){if(t===2&&(l=qi(e),l!==0&&(a=l,t=cl(e,l))),t===1)throw n=ea,Ln(e,0),gn(e,a),ot(e,Ne()),n;if(t===6)gn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!lg(l)&&(t=gi(e,a),t===2&&(u=qi(e),u!==0&&(a=u,t=cl(e,u))),t===1))throw n=ea,Ln(e,0),gn(e,a),ot(e,Ne()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:Tn(e,lt,Xt);break;case 3:if(gn(e,a),(a&130023424)===a&&(t=ol+500-Ne(),10<t)){if(ka(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){rt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ys(Tn.bind(null,e,lt,Xt),t);break}Tn(e,lt,Xt);break;case 4:if(gn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var c=31-_t(a);u=1<<c,c=t[c],c>l&&(l=c),a&=~u}if(a=l,a=Ne()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*sg(a/1960))-a,10<a){e.timeoutHandle=ys(Tn.bind(null,e,lt,Xt),a);break}Tn(e,lt,Xt);break;case 5:Tn(e,lt,Xt);break;default:throw Error(s(329))}}}return ot(e,Ne()),e.callbackNode===n?Td.bind(null,e):null}function cl(e,t){var n=ta;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=gi(e,t),e!==2&&(t=lt,lt=n,t!==null&&pl(t)),e}function pl(e){lt===null?lt=e:lt.push.apply(lt,e)}function lg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],u=l.getSnapshot;l=l.value;try{if(!Ct(u(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~ll,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),a=1<<n;e[n]=-1,t&=~a}}function Od(e){if((ye&6)!==0)throw Error(s(327));pr();var t=ka(e,0);if((t&1)===0)return ot(e,Ne()),null;var n=gi(e,t);if(e.tag!==0&&n===2){var a=qi(e);a!==0&&(t=a,n=cl(e,a))}if(n===1)throw n=ea,Ln(e,0),gn(e,t),ot(e,Ne()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,lt,Xt),ot(e,Ne()),null}function fl(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(cr=Ne()+500,Ua&&ln())}}function Pn(e){pn!==null&&pn.tag===0&&(ye&6)===0&&pr();var t=ye;ye|=1;var n=wt.transition,a=xe;try{if(wt.transition=null,xe=1,e)return e()}finally{xe=a,wt.transition=n,ye=t,(ye&6)===0&&ln()}}function gl(){gt=dr.current,Re(dr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Df(n)),Ie!==null)for(n=Ie.return;n!==null;){var a=n;switch(Ss(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ma();break;case 3:lr(),Re(at),Re(Ke),Is();break;case 5:Ns(a);break;case 4:lr();break;case 13:Re(Te);break;case 19:Re(Te);break;case 10:Ps(a.type._context);break;case 22:case 23:gl()}n=n.return}if(Fe=e,Ie=e=mn(e.current,null),Xe=gt=t,je=0,ea=null,ll=oi=$n=0,lt=ta=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,u=n.pending;if(u!==null){var c=u.next;u.next=l,a.next=c}n.pending=a}_n=null}return e}function zd(e,t){do{var n=Ie;try{if($s(),Ya.current=ti,Ga){for(var a=Oe.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Ga=!1}if(Rn=0,Me=De=Oe=null,Qr=!1,Kr=0,sl.current=null,n===null||n.return===null){je=1,ea=t,Ie=null;break}e:{var u=e,c=n.return,m=n,h=t;if(t=Xe,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=h,z=m,A=z.tag;if((z.mode&1)===0&&(A===0||A===11||A===15)){var T=z.alternate;T?(z.updateQueue=T.updateQueue,z.memoizedState=T.memoizedState,z.lanes=T.lanes):(z.updateQueue=null,z.memoizedState=null)}var W=ad(c);if(W!==null){W.flags&=-257,id(W,c,m,u,t),W.mode&1&&rd(u,C,t),t=W,h=C;var Q=t.updateQueue;if(Q===null){var K=new Set;K.add(h),t.updateQueue=K}else Q.add(h);break e}else{if((t&1)===0){rd(u,C,t),ml();break e}h=Error(s(426))}}else if($e&&m.mode&1){var Ae=ad(c);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),id(Ae,c,m,u,t),Cs(or(h,m));break e}}u=h=or(h,m),je!==4&&(je=2),ta===null?ta=[u]:ta.push(u),u=c;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var k=td(u,h,t);$u(u,k);break e;case 1:m=h;var v=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cn===null||!cn.has(E)))){u.flags|=65536,t&=-t,u.lanes|=t;var I=nd(u,m,t);$u(u,I);break e}}u=u.return}while(u!==null)}Id(n)}catch(Y){t=Y,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Nd(){var e=li.current;return li.current=ti,e===null?ti:e}function ml(){(je===0||je===3||je===2)&&(je=4),Fe===null||($n&268435455)===0&&(oi&268435455)===0||gn(Fe,Xe)}function gi(e,t){var n=ye;ye|=2;var a=Nd();(Fe!==e||Xe!==t)&&(Xt=null,Ln(e,t));do try{og();break}catch(l){zd(e,l)}while(!0);if($s(),ye=n,li.current=a,Ie!==null)throw Error(s(261));return Fe=null,Xe=0,je}function og(){for(;Ie!==null;)Ad(Ie)}function ug(){for(;Ie!==null&&!zp();)Ad(Ie)}function Ad(e){var t=Md(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Id(e):Ie=t,sl.current=null}function Id(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=tg(n,t,gt),n!==null){Ie=n;return}}else{if(n=ng(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);je===0&&(je=5)}function Tn(e,t,n){var a=xe,l=wt.transition;try{wt.transition=null,xe=1,dg(e,t,n,a)}finally{wt.transition=l,xe=a}return null}function dg(e,t,n,a){do pr();while(pn!==null);if((ye&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Bp(e,u),e===Fe&&(Ie=Fe=null,Xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||di||(di=!0,Fd(va,function(){return pr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=wt.transition,wt.transition=null;var c=xe;xe=1;var m=ye;ye|=4,sl.current=null,ag(e,n),Cd(n,e),Lf(ms),_a=!!gs,ms=gs=null,e.current=n,ig(n),Np(),ye=m,xe=c,wt.transition=u}else e.current=n;if(di&&(di=!1,pn=e,ci=l),u=e.pendingLanes,u===0&&(cn=null),Dp(n.stateNode),ot(e,Ne()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(ui)throw ui=!1,e=ul,ul=null,e;return(ci&1)!==0&&e.tag!==0&&pr(),u=e.pendingLanes,(u&1)!==0?e===dl?na++:(na=0,dl=e):na=0,ln(),null}function pr(){if(pn!==null){var e=Eo(ci),t=wt.transition,n=xe;try{if(wt.transition=null,xe=16>e?16:e,pn===null)var a=!1;else{if(e=pn,pn=null,ci=0,(ye&6)!==0)throw Error(s(331));var l=ye;for(ye|=4,V=e.current;V!==null;){var u=V,c=u.child;if((V.flags&16)!==0){var m=u.deletions;if(m!==null){for(var h=0;h<m.length;h++){var C=m[h];for(V=C;V!==null;){var z=V;switch(z.tag){case 0:case 11:case 15:Zr(8,z,u)}var A=z.child;if(A!==null)A.return=z,V=A;else for(;V!==null;){z=V;var T=z.sibling,W=z.return;if(wd(z),z===C){V=null;break}if(T!==null){T.return=W,V=T;break}V=W}}}var Q=u.alternate;if(Q!==null){var K=Q.child;if(K!==null){Q.child=null;do{var Ae=K.sibling;K.sibling=null,K=Ae}while(K!==null)}}V=u}}if((u.subtreeFlags&2064)!==0&&c!==null)c.return=u,V=c;else e:for(;V!==null;){if(u=V,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Zr(9,u,u.return)}var k=u.sibling;if(k!==null){k.return=u.return,V=k;break e}V=u.return}}var v=e.current;for(V=v;V!==null;){c=V;var E=c.child;if((c.subtreeFlags&2064)!==0&&E!==null)E.return=c,V=E;else e:for(c=v;V!==null;){if(m=V,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:si(9,m)}}catch(Y){ze(m,m.return,Y)}if(m===c){V=null;break e}var I=m.sibling;if(I!==null){I.return=m.return,V=I;break e}V=m.return}}if(ye=l,ln(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ba,e)}catch{}a=!0}return a}finally{xe=n,wt.transition=t}}return!1}function Dd(e,t,n){t=or(n,t),t=td(e,t,1),e=un(e,t,1),t=rt(),e!==null&&(Cr(e,1,t),ot(e,t))}function ze(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(cn===null||!cn.has(a))){e=or(n,e),e=nd(t,e,1),t=un(t,e,1),e=rt(),t!==null&&(Cr(t,1,e),ot(t,e));break}}t=t.return}}function cg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>Ne()-ol?Ln(e,0):ll|=n),ot(e,t)}function jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=wa,wa<<=1,(wa&130023424)===0&&(wa=4194304)));var n=rt();e=Bt(e,t),e!==null&&(Cr(e,t,n),ot(e,n))}function pg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function fg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),jd(e,n)}var Md;Md=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,eg(e,t,n);st=(e.flags&131072)!==0}else st=!1,$e&&(t.flags&1048576)!==0&&vu(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ai(e,t),e=t.pendingProps;var l=er(t,Ke.current);sr(t,n),l=Ms(null,t,a,e,l,n);var u=Fs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(a)?(u=!0,Fa(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Os(t),l.updater=ni,t.stateNode=l,l._reactInternals=t,Xs(t,a,e,n),t=Js(null,t,a,!0,u,n)):(t.tag=0,$e&&u&&ks(t),nt(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=mg(a),e=$t(a,e),l){case 0:t=Ks(null,t,a,e,n);break e;case 1:t=cd(null,t,a,e,n);break e;case 11:t=sd(null,t,a,e,n);break e;case 14:t=ld(null,t,a,$t(a.type,e),n);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),Ks(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),cd(e,t,a,l,n);case 3:e:{if(pd(t),e===null)throw Error(s(387));a=t.pendingProps,u=t.memoizedState,l=u.element,Ru(e,t),Ka(t,a,null,n);var c=t.memoizedState;if(a=c.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=or(Error(s(423)),t),t=fd(e,t,a,n,l);break e}else if(a!==l){l=or(Error(s(424)),t),t=fd(e,t,a,n,l);break e}else for(ft=rn(t.stateNode.containerInfo.firstChild),pt=t,$e=!0,Rt=null,n=_u(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),a===l){t=Wt(e,t,n);break e}nt(e,t,a,n)}t=t.child}return t;case 5:return Lu(t),e===null&&_s(t),a=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,c=l.children,hs(a,l)?c=null:u!==null&&hs(a,u)&&(t.flags|=32),dd(e,t),nt(e,t,c,n),t.child;case 6:return e===null&&_s(t),null;case 13:return gd(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ar(t,null,a,n):nt(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),sd(e,t,a,l,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,u=t.memoizedProps,c=l.value,Ee(Xa,a._currentValue),a._currentValue=c,u!==null)if(Ct(u.value,c)){if(u.children===l.children&&!at.current){t=Wt(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){c=u.child;for(var h=m.firstContext;h!==null;){if(h.context===a){if(u.tag===1){h=qt(-1,n&-n),h.tag=2;var C=u.updateQueue;if(C!==null){C=C.shared;var z=C.pending;z===null?h.next=h:(h.next=z.next,z.next=h),C.pending=h}}u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Ls(u.return,n,t),m.lanes|=n;break}h=h.next}}else if(u.tag===10)c=u.type===t.type?null:u.child;else if(u.tag===18){if(c=u.return,c===null)throw Error(s(341));c.lanes|=n,m=c.alternate,m!==null&&(m.lanes|=n),Ls(c,n,t),c=u.sibling}else c=u.child;if(c!==null)c.return=u;else for(c=u;c!==null;){if(c===t){c=null;break}if(u=c.sibling,u!==null){u.return=c.return,c=u;break}c=c.return}u=c}nt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,sr(t,n),l=bt(l),a=a(l),t.flags|=1,nt(e,t,a,n),t.child;case 14:return a=t.type,l=$t(a,t.pendingProps),l=$t(a.type,l),ld(e,t,a,l,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:$t(a,l),ai(e,t),t.tag=1,it(a)?(e=!0,Fa(t)):e=!1,sr(t,n),Zu(t,a,l),Xs(t,a,l,n),Js(null,t,a,!0,e,n);case 19:return hd(e,t,n);case 22:return ud(e,t,n)}throw Error(s(156,t.tag))};function Fd(e,t){return bo(e,t)}function gg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,a){return new gg(e,t,n,a)}function hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===we)return 11;if(e===Be)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,a,l,u){var c=2;if(a=e,typeof e=="function")hl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case de:return On(n.children,l,u,t);case ee:c=8,l|=8;break;case ie:return e=kt(12,n,t,l|2),e.elementType=ie,e.lanes=u,e;case Le:return e=kt(13,n,t,l),e.elementType=Le,e.lanes=u,e;case be:return e=kt(19,n,t,l),e.elementType=be,e.lanes=u,e;case he:return hi(n,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case le:c=9;break e;case we:c=11;break e;case Be:c=14;break e;case _e:c=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=kt(c,n,t,l),t.elementType=e,t.type=a,t.lanes=u,t}function On(e,t,n,a){return e=kt(7,e,a,t),e.lanes=n,e}function hi(e,t,n,a){return e=kt(22,e,a,t),e.elementType=he,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hg(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bl(e,t,n,a,l,u,c,m,h){return e=new hg(e,t,n,m,h),t===1?(t=1,u===!0&&(t|=8)):t=0,u=kt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Os(u),e}function yg(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Ud(e){if(!e)return sn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(it(n))return mu(e,n,t)}return t}function Hd(e,t,n,a,l,u,c,m,h){return e=bl(n,a,!0,e,l,u,c,m,h),e.context=Ud(null),n=e.current,a=rt(),l=fn(n),u=qt(a,l),u.callback=t??null,un(n,u,l),e.current.lanes=l,Cr(e,l,a),ot(e,a),e}function yi(e,t,n,a){var l=t.current,u=rt(),c=fn(l);return n=Ud(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(u,c),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=un(l,t,c),e!==null&&(Tt(e,l,c,u),Qa(e,l,c)),c}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xl(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function vg(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function wl(e){this._internalRoot=e}bi.prototype.render=wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));yi(e,t,null,null)},bi.prototype.unmount=wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){yi(null,e,null,null)}),t[Mt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ro();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Lo(e)}};function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function bg(e,t,n,a,l){if(l){if(typeof a=="function"){var u=a;a=function(){var C=vi(c);u.call(C)}}var c=Hd(t,a,e,0,null,!1,!1,"",Wd);return e._reactRootContainer=c,e[Mt]=c.current,Fr(e.nodeType===8?e.parentNode:e),Pn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var m=a;a=function(){var C=vi(h);m.call(C)}}var h=bl(e,0,!1,null,null,!1,!1,"",Wd);return e._reactRootContainer=h,e[Mt]=h.current,Fr(e.nodeType===8?e.parentNode:e),Pn(function(){yi(t,h,n,a)}),h}function wi(e,t,n,a,l){var u=n._reactRootContainer;if(u){var c=u;if(typeof l=="function"){var m=l;l=function(){var h=vi(c);m.call(h)}}yi(t,c,e,l)}else c=bg(n,t,e,l,a);return vi(c)}_o=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_r(t.pendingLanes);n!==0&&(Xi(t,n|1),ot(t,Ne()),(ye&6)===0&&(cr=Ne()+500,ln()))}break;case 13:Pn(function(){var a=Bt(e,1);if(a!==null){var l=rt();Tt(a,e,1,l)}}),xl(e,1)}},Vi=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=rt();Tt(t,e,134217728,n)}xl(e,134217728)}},Co=function(e){if(e.tag===13){var t=fn(e),n=Bt(e,t);if(n!==null){var a=rt();Tt(n,e,t,a)}xl(e,t)}},Ro=function(){return xe},$o=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},Mi=function(e,t,n){switch(t){case"input":if(qe(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=ja(a);if(!l)throw Error(s(90));mt(a),qe(a,l)}}}break;case"textarea":no(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}},po=fl,fo=Pn;var xg={usingClientEntryPoint:!1,Events:[Br,Gn,ja,uo,co,fl]},ra={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yo(e),e===null?null:e.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ba=ki.inject(wg),zt=ki}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg,ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kl(t))throw Error(s(200));return yg(e,t,null,n)},ut.createRoot=function(e,t){if(!kl(e))throw Error(s(299));var n=!1,a="",l=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bl(e,1,!1,null,null,n,!1,a,l),e[Mt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new wl(t)},ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=yo(t),e=e===null?null:e.stateNode,e},ut.flushSync=function(e){return Pn(e)},ut.hydrate=function(e,t,n){if(!xi(t))throw Error(s(200));return wi(null,e,t,!0,n)},ut.hydrateRoot=function(e,t,n){if(!kl(e))throw Error(s(405));var a=n!=null&&n.hydratedSources||null,l=!1,u="",c=qd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Hd(t,null,e,1,n??null,l,!1,u,c),e[Mt]=t.current,Fr(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new bi(t)},ut.render=function(e,t,n){if(!xi(t))throw Error(s(200));return wi(null,e,t,!1,n)},ut.unmountComponentAtNode=function(e){if(!xi(e))throw Error(s(40));return e._reactRootContainer?(Pn(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},ut.unstable_batchedUpdates=fl,ut.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!xi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return wi(e,t,n,!1,a)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var Zd;function Pg(){if(Zd)return _l.exports;Zd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),_l.exports=$g(),_l.exports}var ec;function Lg(){if(ec)return Si;ec=1;var r=Pg();return Si.createRoot=r.createRoot,Si.hydrateRoot=r.hydrateRoot,Si}var Tg=Lg();const Og=Lc(Tg);function Tc(r,i){return function(){return r.apply(i,arguments)}}const{toString:zg}=Object.prototype,{getPrototypeOf:hr}=Object,{iterator:ca,toStringTag:Oc}=Symbol,$i=(({hasOwnProperty:r})=>(i,s)=>r.call(i,s))(Object.prototype),ua=(r,i)=>{let s=r;const o=[];for(;s!=null&&s!==Object.prototype;){if(o.indexOf(s)!==-1)return!1;if(o.push(s),$i(s,i))return!0;s=hr(s)}return!1},Ng=(r,i)=>r!=null&&ua(r,i)?r[i]:void 0,Wl=(r=>i=>{const s=zg.call(i);return r[s]||(r[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Ot=r=>(r=r.toLowerCase(),i=>Wl(i)===r),Ti=r=>i=>typeof i===r,{isArray:jn}=Array,yr=Ti("undefined");function vr(r){return r!==null&&!yr(r)&&r.constructor!==null&&!yr(r.constructor)&&dt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const zc=Ot("ArrayBuffer");function Ag(r){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(r):i=r&&r.buffer&&zc(r.buffer),i}const Ig=Ti("string"),dt=Ti("function"),Nc=Ti("number"),br=r=>r!==null&&typeof r=="object",Dg=r=>r===!0||r===!1,_i=r=>{if(!br(r))return!1;const i=hr(r);return(i===null||i===Object.prototype||hr(i)===null)&&!ua(r,Oc)&&!ua(r,ca)},jg=r=>{if(!br(r)||vr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Mg=Ot("Date"),Fg=Ot("File"),Ug=r=>!!(r&&typeof r.uri<"u"),Hg=r=>r&&typeof r.getParts<"u",Bg=Ot("Blob"),qg=Ot("FileList"),Wg=r=>br(r)&&dt(r.pipe);function Xg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const tc=Xg(),nc=typeof tc.FormData<"u"?tc.FormData:void 0,Vg=r=>{if(!r)return!1;if(nc&&r instanceof nc)return!0;const i=hr(r);if(!i||i===Object.prototype||!dt(r.append))return!1;const s=Wl(r);return s==="formdata"||s==="object"&&dt(r.toString)&&r.toString()==="[object FormData]"},Qg=Ot("URLSearchParams"),[Kg,Jg,Yg,Gg]=["ReadableStream","Request","Response","Headers"].map(Ot),Zg=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pa(r,i,{allOwnKeys:s=!1}={}){if(r===null||typeof r>"u")return;let o,d;if(typeof r!="object"&&(r=[r]),jn(r))for(o=0,d=r.length;o<d;o++)i.call(null,r[o],o,r);else{if(vr(r))return;const p=s?Object.getOwnPropertyNames(r):Object.keys(r),f=p.length;let g;for(o=0;o<f;o++)g=p[o],i.call(null,r[g],g,r)}}function Ac(r,i){if(vr(r))return null;i=i.toLowerCase();const s=Object.keys(r);let o=s.length,d;for(;o-- >0;)if(d=s[o],i===d.toLowerCase())return d;return null}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ic=r=>!yr(r)&&r!==Nn;function Al(...r){const{caseless:i,skipUndefined:s}=Ic(this)&&this||{},o={},d=(p,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const g=i&&typeof f=="string"&&Ac(o,f)||f,b=$i(o,g)?o[g]:void 0;_i(b)&&_i(p)?o[g]=Al(b,p):_i(p)?o[g]=Al({},p):jn(p)?o[g]=p.slice():(!s||!yr(p))&&(o[g]=p)};for(let p=0,f=r.length;p<f;p++){const g=r[p];if(!g||vr(g)||(pa(g,d),typeof g!="object"||jn(g)))continue;const b=Object.getOwnPropertySymbols(g);for(let S=0;S<b.length;S++){const w=b[S];cm.call(g,w)&&d(g[w],w)}}return o}const em=(r,i,s,{allOwnKeys:o}={})=>(pa(i,(d,p)=>{s&&dt(d)?Object.defineProperty(r,p,{__proto__:null,value:Tc(d,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,p,{__proto__:null,value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),r),tm=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),nm=(r,i,s,o)=>{r.prototype=Object.create(i.prototype,o),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:i.prototype}),s&&Object.assign(r.prototype,s)},rm=(r,i,s,o)=>{let d,p,f;const g={};if(i=i||{},r==null)return i;do{for(d=Object.getOwnPropertyNames(r),p=d.length;p-- >0;)f=d[p],(!o||o(f,r,i))&&!g[f]&&(i[f]=r[f],g[f]=!0);r=s!==!1&&hr(r)}while(r&&(!s||s(r,i))&&r!==Object.prototype);return i},am=(r,i,s)=>{r=String(r),(s===void 0||s>r.length)&&(s=r.length),s-=i.length;const o=r.indexOf(i,s);return o!==-1&&o===s},im=r=>{if(!r)return null;if(jn(r))return r;let i=r.length;if(!Nc(i))return null;const s=new Array(i);for(;i-- >0;)s[i]=r[i];return s},sm=(r=>i=>r&&i instanceof r)(typeof Uint8Array<"u"&&hr(Uint8Array)),lm=(r,i)=>{const o=(r&&r[ca]).call(r);let d;for(;(d=o.next())&&!d.done;){const p=d.value;i.call(r,p[0],p[1])}},om=(r,i)=>{let s;const o=[];for(;(s=r.exec(i))!==null;)o.push(s);return o},um=Ot("HTMLFormElement"),dm=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,o,d){return o.toUpperCase()+d}),{propertyIsEnumerable:cm}=Object.prototype,pm=Ot("RegExp"),Dc=(r,i)=>{const s=Object.getOwnPropertyDescriptors(r),o={};pa(s,(d,p)=>{let f;(f=i(d,p,r))!==!1&&(o[p]=f||d)}),Object.defineProperties(r,o)},fm=r=>{Dc(r,(i,s)=>{if(dt(r)&&["arguments","caller","callee"].includes(s))return!1;const o=r[s];if(dt(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},gm=(r,i)=>{const s={},o=d=>{d.forEach(p=>{s[p]=!0})};return jn(r)?o(r):o(String(r).split(i)),s},mm=()=>{},hm=(r,i)=>r!=null&&Number.isFinite(r=+r)?r:i;function ym(r){return!!(r&&dt(r.append)&&r[Oc]==="FormData"&&r[ca])}const vm=r=>{const i=new WeakSet,s=o=>{if(br(o)){if(i.has(o))return;if(vr(o))return o;if(!("toJSON"in o)){i.add(o);const d=jn(o)?[]:{};return pa(o,(p,f)=>{const g=s(p);!yr(g)&&(d[f]=g)}),i.delete(o),d}}return o};return s(r)},bm=Ot("AsyncFunction"),xm=r=>r&&(br(r)||dt(r))&&dt(r.then)&&dt(r.catch),jc=((r,i)=>r?setImmediate:i?((s,o)=>(Nn.addEventListener("message",({source:d,data:p})=>{d===Nn&&p===s&&o.length&&o.shift()()},!1),d=>{o.push(d),Nn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",dt(Nn.postMessage)),wm=typeof queueMicrotask<"u"?queueMicrotask.bind(Nn):typeof process<"u"&&process.nextTick||jc,Mc=r=>r!=null&&dt(r[ca]),km=r=>r!=null&&ua(r,ca)&&Mc(r),x={isArray:jn,isArrayBuffer:zc,isBuffer:vr,isFormData:Vg,isArrayBufferView:Ag,isString:Ig,isNumber:Nc,isBoolean:Dg,isObject:br,isPlainObject:_i,isEmptyObject:jg,isReadableStream:Kg,isRequest:Jg,isResponse:Yg,isHeaders:Gg,isUndefined:yr,isDate:Mg,isFile:Fg,isReactNativeBlob:Ug,isReactNative:Hg,isBlob:Bg,isRegExp:pm,isFunction:dt,isStream:Wg,isURLSearchParams:Qg,isTypedArray:sm,isFileList:qg,forEach:pa,merge:Al,extend:em,trim:Zg,stripBOM:tm,inherits:nm,toFlatObject:rm,kindOf:Wl,kindOfTest:Ot,endsWith:am,toArray:im,forEachEntry:lm,matchAll:om,isHTMLForm:um,hasOwnProperty:$i,hasOwnProp:$i,hasOwnInPrototypeChain:ua,getSafeProp:Ng,reduceDescriptors:Dc,freezeMethods:fm,toObjectSet:gm,toCamelCase:dm,noop:mm,toFiniteNumber:hm,findKey:Ac,global:Nn,isContextDefined:Ic,isSpecCompliantForm:ym,toJSONObject:vm,isAsyncFn:bm,isThenable:xm,setImmediate:jc,asap:wm,isIterable:Mc,isSafeIterable:km},Sm=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Em=r=>{const i={};let s,o,d;return r&&r.split(`
`).forEach(function(f){d=f.indexOf(":"),s=f.substring(0,d).trim().toLowerCase(),o=f.substring(d+1).trim(),!(!s||i[s]&&Sm[s])&&(s==="set-cookie"?i[s]?i[s].push(o):i[s]=[o]:i[s]=i[s]?i[s]+", "+o:o)}),i};function _m(r){let i=0,s=r.length;for(;i<s;){const o=r.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;s>i;){const o=r.charCodeAt(s-1);if(o!==9&&o!==32)break;s-=1}return i===0&&s===r.length?r:r.slice(i,s)}const Cm=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Rm=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Xl(r,i){return x.isArray(r)?r.map(s=>Xl(s,i)):_m(String(r).replace(i,""))}const $m=r=>Xl(r,Cm),Pm=r=>Xl(r,Rm);function Fc(r){const i=Object.create(null);return x.forEach(r.toJSON(),(s,o)=>{i[o]=Pm(s)}),i}const rc=Symbol("internals");function ia(r){return r&&String(r).trim().toLowerCase()}function Ci(r){return r===!1||r==null?r:x.isArray(r)?r.map(Ci):$m(String(r))}function Lm(r){const i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=s.exec(r);)i[o[1]]=o[2];return i}const Tm=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function $l(r,i,s,o,d){if(x.isFunction(o))return o.call(this,i,s);if(d&&(i=s),!!x.isString(i)){if(x.isString(o))return i.indexOf(o)!==-1;if(x.isRegExp(o))return o.test(i)}}function Om(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,s,o)=>s.toUpperCase()+o)}function zm(r,i){const s=x.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(r,o+s,{__proto__:null,value:function(d,p,f){return this[o].call(this,i,d,p,f)},configurable:!0})})}let et=class{constructor(i){i&&this.set(i)}set(i,s,o){const d=this;function p(g,b,S){const w=ia(b);if(!w)return;const _=x.findKey(d,w);(!_||d[_]===void 0||S===!0||S===void 0&&d[_]!==!1)&&(d[_||b]=Ci(g))}const f=(g,b)=>x.forEach(g,(S,w)=>p(S,w,b));if(x.isPlainObject(i)||i instanceof this.constructor)f(i,s);else if(x.isString(i)&&(i=i.trim())&&!Tm(i))f(Em(i),s);else if(x.isObject(i)&&x.isSafeIterable(i)){let g=Object.create(null),b,S;for(const w of i){if(!x.isArray(w))throw new TypeError("Object iterator must return a key-value pair");S=w[0],x.hasOwnProp(g,S)?(b=g[S],g[S]=x.isArray(b)?[...b,w[1]]:[b,w[1]]):g[S]=w[1]}f(g,s)}else i!=null&&p(s,i,o);return this}get(i,s){if(i=ia(i),i){const o=x.findKey(this,i);if(o){const d=this[o];if(!s)return d;if(s===!0)return Lm(d);if(x.isFunction(s))return s.call(this,d,o);if(x.isRegExp(s))return s.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,s){if(i=ia(i),i){const o=x.findKey(this,i);return!!(o&&this[o]!==void 0&&(!s||$l(this,this[o],o,s)))}return!1}delete(i,s){const o=this;let d=!1;function p(f){if(f=ia(f),f){const g=x.findKey(o,f);g&&(!s||$l(o,o[g],g,s))&&(delete o[g],d=!0)}}return x.isArray(i)?i.forEach(p):p(i),d}clear(i){const s=Object.keys(this);let o=s.length,d=!1;for(;o--;){const p=s[o];(!i||$l(this,this[p],p,i,!0))&&(delete this[p],d=!0)}return d}normalize(i){const s=this,o={};return x.forEach(this,(d,p)=>{const f=x.findKey(o,p);if(f){s[f]=Ci(d),delete s[p];return}const g=i?Om(p):String(p).trim();g!==p&&delete s[p],s[g]=Ci(d),o[g]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const s=Object.create(null);return x.forEach(this,(o,d)=>{o!=null&&o!==!1&&(s[d]=i&&x.isArray(o)?o.join(", "):o)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,s])=>i+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...s){const o=new this(i);return s.forEach(d=>o.set(d)),o}static accessor(i){const o=(this[rc]=this[rc]={accessors:{}}).accessors,d=this.prototype;function p(f){const g=ia(f);o[g]||(zm(d,f),o[g]=!0)}return x.isArray(i)?i.forEach(p):p(i),this}};et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(et.prototype,({value:r},i)=>{let s=i[0].toUpperCase()+i.slice(1);return{get:()=>r,set(o){this[s]=o}}});x.freezeMethods(et);const Nm="[REDACTED ****]";function Am(r){if(x.hasOwnProp(r,"toJSON"))return!0;let i=Object.getPrototypeOf(r);for(;i&&i!==Object.prototype;){if(x.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function Im(r,i){const s=new Set(i.map(p=>String(p).toLowerCase())),o=[],d=p=>{if(p===null||typeof p!="object"||x.isBuffer(p))return p;if(o.indexOf(p)!==-1)return;p instanceof et&&(p=p.toJSON()),o.push(p);let f;if(x.isArray(p))f=[],p.forEach((g,b)=>{const S=d(g);x.isUndefined(S)||(f[b]=S)});else{if(!x.isPlainObject(p)&&Am(p))return o.pop(),p;f=Object.create(null);for(const[g,b]of Object.entries(p)){const S=s.has(g.toLowerCase())?Nm:d(b);x.isUndefined(S)||(f[g]=S)}}return o.pop(),f};return d(r)}let U=class Uc extends Error{static from(i,s,o,d,p,f){const g=new Uc(i.message,s||i.code,o,d,p);return Object.defineProperty(g,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),g.name=i.name,i.status!=null&&g.status==null&&(g.status=i.status),f&&Object.assign(g,f),g}constructor(i,s,o,d,p){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),o&&(this.config=o),d&&(this.request=d),p&&(this.response=p,this.status=p.status)}toJSON(){const i=this.config,s=i&&x.hasOwnProp(i,"redact")?i.redact:void 0,o=x.isArray(s)&&s.length>0?Im(i,s):x.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o,code:this.code,status:this.status}}};U.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";U.ERR_BAD_OPTION="ERR_BAD_OPTION";U.ECONNABORTED="ECONNABORTED";U.ETIMEDOUT="ETIMEDOUT";U.ECONNREFUSED="ECONNREFUSED";U.ERR_NETWORK="ERR_NETWORK";U.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";U.ERR_DEPRECATED="ERR_DEPRECATED";U.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";U.ERR_BAD_REQUEST="ERR_BAD_REQUEST";U.ERR_CANCELED="ERR_CANCELED";U.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";U.ERR_INVALID_URL="ERR_INVALID_URL";U.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Dm=null,Hc=100;function Il(r){return x.isPlainObject(r)||x.isArray(r)}function Bc(r){return x.endsWith(r,"[]")?r.slice(0,-2):r}function Pl(r,i,s){return r?r.concat(i).map(function(d,p){return d=Bc(d),!s&&p?"["+d+"]":d}).join(s?".":""):i}function jm(r){return x.isArray(r)&&!r.some(Il)}const Mm=x.toFlatObject(x,{},null,function(i){return/^is[A-Z]/.test(i)});function Oi(r,i,s){if(!x.isObject(r))throw new TypeError("target must be an object");i=i||new FormData,s=x.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,q){return!x.isUndefined(q[N])});const o=s.metaTokens,d=s.visitor||H,p=s.dots,f=s.indexes,g=s.Blob||typeof Blob<"u"&&Blob,b=s.maxDepth===void 0?Hc:s.maxDepth,S=g&&x.isSpecCompliantForm(i),w=[];if(!x.isFunction(d))throw new TypeError("visitor must be a function");function _(P){if(P===null)return"";if(x.isDate(P))return P.toISOString();if(x.isBoolean(P))return P.toString();if(!S&&x.isBlob(P))throw new U("Blob is not supported. Use a Buffer instead.");if(x.isArrayBuffer(P)||x.isTypedArray(P)){if(S&&typeof g=="function")return new g([P]);if(typeof Buffer<"u")return Buffer.from(P);throw new U("Blob is not supported. Use a Buffer instead.",U.ERR_NOT_SUPPORT)}return P}function $(P){if(P>b)throw new U("Object is too deeply nested ("+P+" levels). Max depth: "+b,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function D(P,N){if(b===1/0)return JSON.stringify(P);const q=[];return JSON.stringify(P,function(ae,X){if(!x.isObject(X))return X;for(;q.length&&q[q.length-1]!==this;)q.pop();return q.push(X),$(N+q.length-1),X})}function H(P,N,q){let B=P;if(x.isReactNative(i)&&x.isReactNativeBlob(P))return i.append(Pl(q,N,p),_(P)),!1;if(P&&!q&&typeof P=="object"){if(x.endsWith(N,"{}"))N=o?N:N.slice(0,-2),P=D(P,1);else if(x.isArray(P)&&jm(P)||(x.isFileList(P)||x.endsWith(N,"[]"))&&(B=x.toArray(P)))return N=Bc(N),B.forEach(function(X,de){!(x.isUndefined(X)||X===null)&&i.append(f===!0?Pl([N],de,p):f===null?N:N+"[]",_(X))}),!1}return Il(P)?!0:(i.append(Pl(q,N,p),_(P)),!1)}const F=Object.assign(Mm,{defaultVisitor:H,convertValue:_,isVisitable:Il});function R(P,N,q=0){if(!x.isUndefined(P)){if($(q),w.indexOf(P)!==-1)throw new Error("Circular reference detected in "+N.join("."));w.push(P),x.forEach(P,function(ae,X){(!(x.isUndefined(ae)||ae===null)&&d.call(i,ae,x.isString(X)?X.trim():X,N,F))===!0&&R(ae,N?N.concat(X):[X],q+1)}),w.pop()}}if(!x.isObject(r))throw new TypeError("data must be an object");return R(r),i}function ac(r){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(o){return i[o]})}function Vl(r,i){this._pairs=[],r&&Oi(r,this,i)}const qc=Vl.prototype;qc.append=function(i,s){this._pairs.push([i,s])};qc.toString=function(i){const s=i?o=>i.call(this,o,ac):ac;return this._pairs.map(function(d){return s(d[0])+"="+s(d[1])},"").join("&")};function Fm(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Wc(r,i,s){if(!i)return r;r=r||"";const o=x.isFunction(s)?{serialize:s}:s,d=x.getSafeProp(o,"encode")||Fm,p=x.getSafeProp(o,"serialize");let f;if(p?f=p(i,o):f=x.isURLSearchParams(i)?i.toString():new Vl(i,o).toString(d),f){const g=r.indexOf("#");g!==-1&&(r=r.slice(0,g)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class ic{constructor(){this.handlers=[]}use(i,s,o){return this.handlers.push({fulfilled:i,rejected:s,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){x.forEach(this.handlers,function(o){o!==null&&i(o)})}}const Ql={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Um=typeof URLSearchParams<"u"?URLSearchParams:Vl,Hm=typeof FormData<"u"?FormData:null,Bm=typeof Blob<"u"?Blob:null,qm={isBrowser:!0,classes:{URLSearchParams:Um,FormData:Hm,Blob:Bm},protocols:["http","https","file","blob","url","data"]},Kl=typeof window<"u"&&typeof document<"u",Dl=typeof navigator=="object"&&navigator||void 0,Wm=Kl&&(!Dl||["ReactNative","NativeScript","NS"].indexOf(Dl.product)<0),Xm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vm=Kl&&window.location.href||"http://localhost",Qm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kl,hasStandardBrowserEnv:Wm,hasStandardBrowserWebWorkerEnv:Xm,navigator:Dl,origin:Vm},Symbol.toStringTag,{value:"Module"})),Qe={...Qm,...qm};function Km(r,i){return Oi(r,new Qe.classes.URLSearchParams,{visitor:function(s,o,d,p){return Qe.isNode&&x.isBuffer(s)?(this.append(o,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...i})}const sc=Hc;function Xc(r){if(r>sc)throw new U("FormData field is too deeply nested ("+r+" levels). Max depth: "+sc,U.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Jm(r){const i=[],s=/\w+|\[(\w*)]/g;let o;for(;(o=s.exec(r))!==null;)Xc(i.length),i.push(o[0]==="[]"?"":o[1]||o[0]);return i}function Ym(r){const i={},s=Object.keys(r);let o;const d=s.length;let p;for(o=0;o<d;o++)p=s[o],i[p]=r[p];return i}function Vc(r){function i(s,o,d,p){Xc(p);let f=s[p++];if(f==="__proto__")return!0;const g=Number.isFinite(+f),b=p>=s.length;return f=!f&&x.isArray(d)?d.length:f,b?(x.hasOwnProp(d,f)?d[f]=x.isArray(d[f])?d[f].concat(o):[d[f],o]:d[f]=o,!g):((!x.hasOwnProp(d,f)||!x.isObject(d[f]))&&(d[f]=[]),i(s,o,d[f],p)&&x.isArray(d[f])&&(d[f]=Ym(d[f])),!g)}if(x.isFormData(r)&&x.isFunction(r.entries)){const s={};return x.forEachEntry(r,(o,d)=>{i(Jm(o),d,s,0)}),s}return null}const fr=(r,i)=>r!=null&&x.hasOwnProp(r,i)?r[i]:void 0;function Gm(r,i,s){if(x.isString(r))try{return(i||JSON.parse)(r),x.trim(r)}catch(o){if(o.name!=="SyntaxError")throw o}return(s||JSON.stringify)(r)}const fa={transitional:Ql,adapter:["xhr","http","fetch"],transformRequest:[function(i,s){const o=s.getContentType()||"",d=o.indexOf("application/json")>-1,p=x.isObject(i);if(p&&x.isHTMLForm(i)&&(i=new FormData(i)),x.isFormData(i))return d?JSON.stringify(Vc(i)):i;if(x.isArrayBuffer(i)||x.isBuffer(i)||x.isStream(i)||x.isFile(i)||x.isBlob(i)||x.isReadableStream(i))return i;if(x.isArrayBufferView(i))return i.buffer;if(x.isURLSearchParams(i))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let g;if(p){const b=fr(this,"formSerializer");if(o.indexOf("application/x-www-form-urlencoded")>-1)return Km(i,b).toString();if((g=x.isFileList(i))||o.indexOf("multipart/form-data")>-1){const S=fr(this,"env"),w=S&&S.FormData;return Oi(g?{"files[]":i}:i,w&&new w,b)}}return p||d?(s.setContentType("application/json",!1),Gm(i)):i}],transformResponse:[function(i){const s=fr(this,"transitional")||fa.transitional,o=s&&s.forcedJSONParsing,d=fr(this,"responseType"),p=d==="json";if(x.isResponse(i)||x.isReadableStream(i))return i;if(i&&x.isString(i)&&(o&&!d||p)){const g=!(s&&s.silentJSONParsing)&&p;try{return JSON.parse(i,fr(this,"parseReviver"))}catch(b){if(g)throw b.name==="SyntaxError"?U.from(b,U.ERR_BAD_RESPONSE,this,null,fr(this,"response")):b}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch","query"],r=>{fa.headers[r]={}});function Ll(r,i){const s=this||fa,o=i||s,d=et.from(o.headers);let p=o.data;return x.forEach(r,function(g){p=g.call(s,p,d.normalize(),i?i.status:void 0)}),d.normalize(),p}function Qc(r){return!!(r&&r.__CANCEL__)}let ga=class extends U{constructor(i,s,o){super(i??"canceled",U.ERR_CANCELED,s,o),this.name="CanceledError",this.__CANCEL__=!0}};function Kc(r,i,s){const o=s.config.validateStatus;!s.status||!o||o(s.status)?r(s):i(new U("Request failed with status code "+s.status,s.status>=400&&s.status<500?U.ERR_BAD_REQUEST:U.ERR_BAD_RESPONSE,s.config,s.request,s))}function Zm(r){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return i&&i[1]||""}function eh(r,i){r=r||10;const s=new Array(r),o=new Array(r);let d=0,p=0,f;return i=i!==void 0?i:1e3,function(b){const S=Date.now(),w=o[p];f||(f=S),s[d]=b,o[d]=S;let _=p,$=0;for(;_!==d;)$+=s[_++],_=_%r;if(d=(d+1)%r,d===p&&(p=(p+1)%r),S-f<i)return;const D=w&&S-w;return D?Math.round($*1e3/D):void 0}}function th(r,i){let s=0,o=1e3/i,d,p;const f=(S,w=Date.now())=>{s=w,d=null,p&&(clearTimeout(p),p=null),r(...S)};return[(...S)=>{const w=Date.now(),_=w-s;_>=o?f(S,w):(d=S,p||(p=setTimeout(()=>{p=null,f(d)},o-_)))},()=>d&&f(d)]}const Pi=(r,i,s=3)=>{let o=0;const d=eh(50,250);return th(p=>{if(!p||typeof p.loaded!="number")return;const f=p.loaded,g=p.lengthComputable?p.total:void 0,b=g!=null?Math.min(f,g):f,S=Math.max(0,b-o),w=d(S);o=Math.max(o,b);const _={loaded:b,total:g,progress:g?b/g:void 0,bytes:S,rate:w||void 0,estimated:w&&g?(g-b)/w:void 0,event:p,lengthComputable:g!=null,[i?"download":"upload"]:!0};r(_)},s)},lc=(r,i)=>{const s=r!=null;return[o=>i[0]({lengthComputable:s,total:r,loaded:o}),i[1]]},oc=r=>(...i)=>x.asap(()=>r(...i)),nh=Qe.hasStandardBrowserEnv?((r,i)=>s=>(s=new URL(s,Qe.origin),r.protocol===s.protocol&&r.host===s.host&&(i||r.port===s.port)))(new URL(Qe.origin),Qe.navigator&&/(msie|trident)/i.test(Qe.navigator.userAgent)):()=>!0,rh=Qe.hasStandardBrowserEnv?{write(r,i,s,o,d,p,f){if(typeof document>"u")return;const g=[`${r}=${encodeURIComponent(i)}`];x.isNumber(s)&&g.push(`expires=${new Date(s).toUTCString()}`),x.isString(o)&&g.push(`path=${o}`),x.isString(d)&&g.push(`domain=${d}`),p===!0&&g.push("secure"),x.isString(f)&&g.push(`SameSite=${f}`),document.cookie=g.join("; ")},read(r){if(typeof document>"u")return null;const i=document.cookie.split(";");for(let s=0;s<i.length;s++){const o=i[s].replace(/^\s+/,""),d=o.indexOf("=");if(d!==-1&&o.slice(0,d)===r)try{return decodeURIComponent(o.slice(d+1))}catch{return o.slice(d+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ah(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function ih(r,i){return i?r.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):r}const sh=/^https?:(?!\/\/)/i,lh=/[\t\n\r]/g;function oh(r){let i=0;for(;i<r.length&&r.charCodeAt(i)<=32;)i++;return r.slice(i)}function uh(r){return oh(r).replace(lh,"")}function uc(r,i){if(typeof r=="string"&&sh.test(uh(r)))throw new U('Invalid URL: missing "//" after protocol',U.ERR_INVALID_URL,i)}function Jc(r,i,s,o){uc(i,o);let d=!ah(i);return r&&(d||s===!1)?(uc(r,o),ih(r,i)):i}const dc=r=>r instanceof et?{...r}:r;function Mn(r,i){r=r||{},i=i||{};const s=Object.create(null);Object.defineProperty(s,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function o(w,_,$,D){return x.isPlainObject(w)&&x.isPlainObject(_)?x.merge.call({caseless:D},w,_):x.isPlainObject(_)?x.merge({},_):x.isArray(_)?_.slice():_}function d(w,_,$,D){if(x.isUndefined(_)){if(!x.isUndefined(w))return o(void 0,w,$,D)}else return o(w,_,$,D)}function p(w,_){if(!x.isUndefined(_))return o(void 0,_)}function f(w,_){if(x.isUndefined(_)){if(!x.isUndefined(w))return o(void 0,w)}else return o(void 0,_)}function g(w){const _=x.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!x.isUndefined(_))if(x.isPlainObject(_)){if(x.hasOwnProp(_,w))return _[w]}else return;const $=x.hasOwnProp(r,"transitional")?r.transitional:void 0;if(x.isPlainObject($)&&x.hasOwnProp($,w))return $[w]}function b(w,_,$){if(x.hasOwnProp(i,$))return o(w,_);if(x.hasOwnProp(r,$))return o(void 0,w)}const S={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:b,headers:(w,_,$)=>d(dc(w),dc(_),$,!0)};return x.forEach(Object.keys({...r,...i}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const $=x.hasOwnProp(S,_)?S[_]:d,D=x.hasOwnProp(r,_)?r[_]:void 0,H=x.hasOwnProp(i,_)?i[_]:void 0,F=$(D,H,_);x.isUndefined(F)&&$!==b||(s[_]=F)}),x.hasOwnProp(i,"validateStatus")&&x.isUndefined(i.validateStatus)&&g("validateStatusUndefinedResolves")===!1&&(x.hasOwnProp(r,"validateStatus")?s.validateStatus=o(void 0,r.validateStatus):delete s.validateStatus),s}const dh=["content-type","content-length"];function ch(r,i,s){if(s!=="content-only"){r.set(i);return}Object.entries(i||{}).forEach(([o,d])=>{dh.includes(o.toLowerCase())&&r.set(o,d)})}const ph=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(i,s)=>String.fromCharCode(parseInt(s,16)));function Yc(r){const i=Mn({},r),s=$=>x.hasOwnProp(i,$)?i[$]:void 0,o=s("data");let d=s("withXSRFToken");const p=s("xsrfHeaderName"),f=s("xsrfCookieName");let g=s("headers");const b=s("auth"),S=s("baseURL"),w=s("allowAbsoluteUrls"),_=s("url");if(i.headers=g=et.from(g),i.url=Wc(Jc(S,_,w,i),s("params"),s("paramsSerializer")),b){const $=x.getSafeProp(b,"username")||"",D=x.getSafeProp(b,"password")||"";try{g.set("Authorization","Basic "+btoa($+":"+(D?ph(D):"")))}catch(H){throw U.from(H,U.ERR_BAD_OPTION_VALUE,r)}}if(x.isFormData(o)&&(Qe.hasStandardBrowserEnv||Qe.hasStandardBrowserWebWorkerEnv||x.isReactNative(o)?g.setContentType(void 0):x.isFunction(o.getHeaders)&&ch(g,o.getHeaders(),s("formDataHeaderPolicy"))),Qe.hasStandardBrowserEnv&&(x.isFunction(d)&&(d=d(i)),d===!0||d==null&&nh(i.url))){const D=p&&f&&rh.read(f);D&&g.set(p,D)}return i}const fh=typeof XMLHttpRequest<"u",gh=fh&&function(r){return new Promise(function(s,o){const d=Yc(r);let p=d.data;const f=et.from(d.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:S}=d,w,_,$,D,H;function F(){D&&D(),H&&H(),d.cancelToken&&d.cancelToken.unsubscribe(w),d.signal&&d.signal.removeEventListener("abort",w)}let R=new XMLHttpRequest;R.open(d.method.toUpperCase(),d.url,!0),R.timeout=d.timeout;function P(){if(!R)return;const q=et.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),ae={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:q,config:r,request:R};Kc(function(de){s(de),F()},function(de){o(de),F()},ae),R=null}"onloadend"in R?R.onloadend=P:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.startsWith("file:"))||setTimeout(P)},R.onabort=function(){R&&(o(new U("Request aborted",U.ECONNABORTED,r,R)),F(),R=null)},R.onerror=function(B){const ae=B&&B.message?B.message:"Network Error",X=new U(ae,U.ERR_NETWORK,r,R);X.event=B||null,o(X),F(),R=null},R.ontimeout=function(){let B=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const ae=d.transitional||Ql;d.timeoutErrorMessage&&(B=d.timeoutErrorMessage),o(new U(B,ae.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,r,R)),F(),R=null},p===void 0&&f.setContentType(null),"setRequestHeader"in R&&x.forEach(Fc(f),function(B,ae){R.setRequestHeader(ae,B)}),x.isUndefined(d.withCredentials)||(R.withCredentials=!!d.withCredentials),g&&g!=="json"&&(R.responseType=d.responseType),S&&([$,H]=Pi(S,!0),R.addEventListener("progress",$)),b&&R.upload&&([_,D]=Pi(b),R.upload.addEventListener("progress",_),R.upload.addEventListener("loadend",D)),(d.cancelToken||d.signal)&&(w=q=>{R&&(o(!q||q.type?new ga(null,r,R):q),R.abort(),F(),R=null)},d.cancelToken&&d.cancelToken.subscribe(w),d.signal&&(d.signal.aborted?w():d.signal.addEventListener("abort",w)));const N=Zm(d.url);if(N&&!Qe.protocols.includes(N)){o(new U("Unsupported protocol "+N+":",U.ERR_BAD_REQUEST,r)),F();return}R.send(p||null)})},mh=(r,i)=>{if(r=r?r.filter(Boolean):[],!i&&!r.length)return;const s=new AbortController;let o=!1;const d=function(b){if(!o){o=!0,f();const S=b instanceof Error?b:this.reason;s.abort(S instanceof U?S:new ga(S instanceof Error?S.message:S))}};let p=i&&setTimeout(()=>{p=null,d(new U(`timeout of ${i}ms exceeded`,U.ETIMEDOUT))},i);const f=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(b=>{b.unsubscribe?b.unsubscribe(d):b.removeEventListener("abort",d)}),r=null)};r.forEach(b=>b.addEventListener("abort",d,{once:!0}));const{signal:g}=s;return g.unsubscribe=()=>x.asap(f),g},hh=function*(r,i){let s=r.byteLength;if(s<i){yield r;return}let o=0,d;for(;o<s;)d=o+i,yield r.slice(o,d),o=d},yh=async function*(r,i){for await(const s of vh(r))yield*hh(s,i)},vh=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const i=r.getReader();try{for(;;){const{done:s,value:o}=await i.read();if(s)break;yield o}}finally{await i.cancel()}},cc=(r,i,s,o)=>{const d=yh(r,i);let p=0,f,g=b=>{f||(f=!0,o&&o(b))};return new ReadableStream({async pull(b){try{const{done:S,value:w}=await d.next();if(S){g(),b.close();return}let _=w.byteLength;if(s){let $=p+=_;s($)}b.enqueue(new Uint8Array(w))}catch(S){throw g(S),S}},cancel(b){return g(b),d.return()}},{highWaterMark:2})},Li=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,bh=(r,i,s)=>i+2<s&&Li(r.charCodeAt(i+1))&&Li(r.charCodeAt(i+2));function xh(r){if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const i=r.indexOf(",");if(i<0)return 0;const s=r.slice(5,i),o=r.slice(i+1);if(/;base64/i.test(s)){let f=o.length;const g=o.length;for(let D=0;D<g;D++)if(o.charCodeAt(D)===37&&D+2<g){const H=o.charCodeAt(D+1),F=o.charCodeAt(D+2);Li(H)&&Li(F)&&(f-=2,D+=2)}let b=0,S=g-1;const w=D=>D>=2&&o.charCodeAt(D-2)===37&&o.charCodeAt(D-1)===51&&(o.charCodeAt(D)===68||o.charCodeAt(D)===100);S>=0&&(o.charCodeAt(S)===61?(b++,S--):w(S)&&(b++,S-=3)),b===1&&S>=0&&(o.charCodeAt(S)===61||w(S))&&b++;const $=Math.floor(f/4)*3-(b||0);return $>0?$:0}let p=0;for(let f=0,g=o.length;f<g;f++){const b=o.charCodeAt(f);if(b===37&&bh(o,f,g))p+=1,f+=2;else if(b<128)p+=1;else if(b<2048)p+=2;else if(b>=55296&&b<=56319&&f+1<g){const S=o.charCodeAt(f+1);S>=56320&&S<=57343?(p+=4,f++):p+=3}else p+=3}return p}const Jl="1.18.1",pc=64*1024,{isFunction:Ei}=x,wh=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(i,s)=>String.fromCharCode(parseInt(s,16))),fc=r=>{if(!x.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},gc=(r,...i)=>{try{return!!r(...i)}catch{return!1}},kh=r=>{const i=r.indexOf("://");let s=r;return i!==-1&&(s=s.slice(i+3)),s.includes("@")||s.includes(":")},Sh=r=>{const i=x.global!==void 0&&x.global!==null?x.global:globalThis,{ReadableStream:s,TextEncoder:o}=i;r=x.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response},r);const{fetch:d,Request:p,Response:f}=r,g=d?Ei(d):typeof fetch=="function",b=Ei(p),S=Ei(f);if(!g)return!1;const w=g&&Ei(s),_=g&&(typeof o=="function"?(P=>N=>P.encode(N))(new o):async P=>new Uint8Array(await new p(P).arrayBuffer())),$=b&&w&&gc(()=>{let P=!1;const N=new p(Qe.origin,{body:new s,method:"POST",get duplex(){return P=!0,"half"}}),q=N.headers.has("Content-Type");return N.body!=null&&N.body.cancel(),P&&!q}),D=S&&w&&gc(()=>x.isReadableStream(new f("").body)),H={stream:D&&(P=>P.body)};g&&["text","arrayBuffer","blob","formData","stream"].forEach(P=>{!H[P]&&(H[P]=(N,q)=>{let B=N&&N[P];if(B)return B.call(N);throw new U(`Response type '${P}' is not supported`,U.ERR_NOT_SUPPORT,q)})});const F=async P=>{if(P==null)return 0;if(x.isBlob(P))return P.size;if(x.isSpecCompliantForm(P))return(await new p(Qe.origin,{method:"POST",body:P}).arrayBuffer()).byteLength;if(x.isArrayBufferView(P)||x.isArrayBuffer(P))return P.byteLength;if(x.isURLSearchParams(P)&&(P=P+""),x.isString(P))return(await _(P)).byteLength},R=async(P,N)=>{const q=x.toFiniteNumber(P.getContentLength());return q??F(N)};return async P=>{let{url:N,method:q,data:B,signal:ae,cancelToken:X,timeout:de,onDownloadProgress:ee,onUploadProgress:ie,responseType:G,headers:le,withCredentials:we="same-origin",fetchOptions:Le,maxContentLength:be,maxBodyLength:Be}=Yc(P);const _e=x.isNumber(be)&&be>-1,he=x.isNumber(Be)&&Be>-1,j=J=>x.hasOwnProp(P,J)?P[J]:void 0;let Z=d||fetch;G=G?(G+"").toLowerCase():"text";let M=mh([ae,X&&X.toAbortSignal()],de),y=null;const L=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let te,ue=null;const ge=()=>new U("Request body larger than maxBodyLength limit",U.ERR_BAD_REQUEST,P,y);try{let J;const pe=j("auth");if(pe){const oe=x.getSafeProp(pe,"username")||"",qe=x.getSafeProp(pe,"password")||"";J={username:oe,password:qe}}if(kh(N)){const oe=new URL(N,Qe.origin);if(!J&&(oe.username||oe.password)){const qe=fc(oe.username),St=fc(oe.password);J={username:qe,password:St}}(oe.username||oe.password)&&(oe.username="",oe.password="",N=oe.href)}if(J&&(le.delete("authorization"),le.set("Authorization","Basic "+btoa(wh((J.username||"")+":"+(J.password||""))))),_e&&typeof N=="string"&&N.startsWith("data:")&&xh(N)>be)throw new U("maxContentLength size of "+be+" exceeded",U.ERR_BAD_RESPONSE,P,y);if(he&&q!=="get"&&q!=="head"){const oe=await F(B);if(typeof oe=="number"&&isFinite(oe)&&(te=oe,oe>Be))throw ge()}const me=he&&(x.isReadableStream(B)||x.isStream(B)),Se=(oe,qe,St)=>cc(oe,pc,Et=>{if(he&&Et>Be)throw ue=ge();qe&&qe(Et)},St);if($&&q!=="get"&&q!=="head"&&(ie||me)){if(te=te??await R(le,B),te!==0||me){let oe=new p(N,{method:"POST",body:B,duplex:"half"}),qe;if(x.isFormData(B)&&(qe=oe.headers.get("content-type"))&&le.setContentType(qe),oe.body){const[St,Et]=ie&&lc(te,Pi(oc(ie)))||[];B=Se(oe.body,St,Et)}}}else if(me&&!b&&w&&q!=="get"&&q!=="head")B=Se(B);else if(me&&b&&!$&&q!=="get"&&q!=="head")throw new U("Stream request bodies are not supported by the current fetch implementation",U.ERR_NOT_SUPPORT,P,y);x.isString(we)||(we=we?"include":"omit");const tt=b&&"credentials"in p.prototype;if(x.isFormData(B)){const oe=le.getContentType();oe&&/^multipart\/form-data/i.test(oe)&&!/boundary=/i.test(oe)&&le.delete("content-type")}le.set("User-Agent","axios/"+Jl,!1);const yn={...Le,signal:M,method:q.toUpperCase(),headers:Fc(le.normalize()),body:B,duplex:"half",credentials:tt?we:void 0};y=b&&new p(N,yn);let mt=await(b?Z(y,Le):Z(N,yn));const vn=et.from(mt.headers);if(_e){const oe=x.toFiniteNumber(vn.getContentLength());if(oe!=null&&oe>be)throw new U("maxContentLength size of "+be+" exceeded",U.ERR_BAD_RESPONSE,P,y)}const bn=D&&(G==="stream"||G==="response");if(D&&mt.body&&(ee||_e||bn&&L)){const oe={};["status","statusText","headers"].forEach(jt=>{oe[jt]=mt[jt]});const qe=x.toFiniteNumber(vn.getContentLength()),[St,Et]=ee&&lc(qe,Pi(oc(ee),!0))||[];let Kt=0;const Jt=jt=>{if(_e&&(Kt=jt,Kt>be))throw new U("maxContentLength size of "+be+" exceeded",U.ERR_BAD_RESPONSE,P,y);St&&St(jt)};mt=new f(cc(mt.body,pc,Jt,()=>{Et&&Et(),L&&L()}),oe)}G=G||"text";let ht=await H[x.findKey(H,G)||"text"](mt,P);if(_e&&!D&&!bn){let oe;if(ht!=null&&(typeof ht.byteLength=="number"?oe=ht.byteLength:typeof ht.size=="number"?oe=ht.size:typeof ht=="string"&&(oe=typeof o=="function"?new o().encode(ht).byteLength:ht.length)),typeof oe=="number"&&oe>be)throw new U("maxContentLength size of "+be+" exceeded",U.ERR_BAD_RESPONSE,P,y)}return!bn&&L&&L(),await new Promise((oe,qe)=>{Kc(oe,qe,{data:ht,headers:et.from(mt.headers),status:mt.status,statusText:mt.statusText,config:P,request:y})})}catch(J){if(L&&L(),M&&M.aborted&&M.reason instanceof U){const pe=M.reason;throw pe.config=P,y&&(pe.request=y),J!==pe&&Object.defineProperty(pe,"cause",{__proto__:null,value:J,writable:!0,enumerable:!1,configurable:!0}),pe}if(ue)throw y&&!ue.request&&(ue.request=y),ue;if(J instanceof U)throw y&&!J.request&&(J.request=y),J;if(J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)){const pe=new U("Network Error",U.ERR_NETWORK,P,y,J&&J.response);throw Object.defineProperty(pe,"cause",{__proto__:null,value:J.cause||J,writable:!0,enumerable:!1,configurable:!0}),pe}throw U.from(J,J&&J.code,P,y,J&&J.response)}}},Eh=new Map,Gc=r=>{let i=r&&r.env||{};const{fetch:s,Request:o,Response:d}=i,p=[o,d,s];let f=p.length,g=f,b,S,w=Eh;for(;g--;)b=p[g],S=w.get(b),S===void 0&&w.set(b,S=g?new Map:Sh(i)),w=S;return S};Gc();const Yl={http:Dm,xhr:gh,fetch:{get:Gc}};x.forEach(Yl,(r,i)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:i})}});const mc=r=>`- ${r}`,_h=r=>x.isFunction(r)||r===null||r===!1;function Ch(r,i){r=x.isArray(r)?r:[r];const{length:s}=r;let o,d;const p={};for(let f=0;f<s;f++){o=r[f];let g;if(d=o,!_h(o)&&(d=Yl[(g=String(o)).toLowerCase()],d===void 0))throw new U(`Unknown adapter '${g}'`);if(d&&(x.isFunction(d)||(d=d.get(i))))break;p[g||"#"+f]=d}if(!d){const f=Object.entries(p).map(([b,S])=>`adapter ${b} `+(S===!1?"is not supported by the environment":"is not available in the build"));let g=s?f.length>1?`since :
`+f.map(mc).join(`
`):" "+mc(f[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+g,U.ERR_NOT_SUPPORT)}return d}const Zc={getAdapter:Ch,adapters:Yl};function Tl(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ga(null,r)}function hc(r){return Tl(r),r.headers=et.from(r.headers),r.data=Ll.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Zc.getAdapter(r.adapter||fa.adapter,r)(r).then(function(o){Tl(r),r.response=o;try{o.data=Ll.call(r,r.transformResponse,o)}finally{delete r.response}return o.headers=et.from(o.headers),o},function(o){if(!Qc(o)&&(Tl(r),o&&o.response)){r.response=o.response;try{o.response.data=Ll.call(r,r.transformResponse,o.response)}finally{delete r.response}o.response.headers=et.from(o.response.headers)}return Promise.reject(o)})}const zi={};["object","boolean","number","function","string","symbol"].forEach((r,i)=>{zi[r]=function(o){return typeof o===r||"a"+(i<1?"n ":" ")+r}});const yc={};zi.transitional=function(i,s,o){function d(p,f){return"[Axios v"+Jl+"] Transitional option '"+p+"'"+f+(o?". "+o:"")}return(p,f,g)=>{if(i===!1)throw new U(d(f," has been removed"+(s?" in "+s:"")),U.ERR_DEPRECATED);return s&&!yc[f]&&(yc[f]=!0,console.warn(d(f," has been deprecated since v"+s+" and will be removed in the near future"))),i?i(p,f,g):!0}};zi.spelling=function(i){return(s,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function Rh(r,i,s){if(typeof r!="object"||r===null)throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const o=Object.keys(r);let d=o.length;for(;d-- >0;){const p=o[d],f=Object.prototype.hasOwnProperty.call(i,p)?i[p]:void 0;if(f){const g=r[p],b=g===void 0||f(g,p,r);if(b!==!0)throw new U("option "+p+" must be "+b,U.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new U("Unknown option "+p,U.ERR_BAD_OPTION)}}const Ri={assertOptions:Rh,validators:zi},Ze=Ri.validators;let An=class{constructor(i){this.defaults=i||{},this.interceptors={request:new ic,response:new ic}}async request(i,s){try{return await this._request(i,s)}catch(o){if(o instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=(()=>{if(!d.stack)return"";const f=d.stack.indexOf(`
`);return f===-1?"":d.stack.slice(f+1)})();try{if(!o.stack)o.stack=p;else if(p){const f=p.indexOf(`
`),g=f===-1?-1:p.indexOf(`
`,f+1),b=g===-1?"":p.slice(g+1);String(o.stack).endsWith(b)||(o.stack+=`
`+p)}}catch{}}throw o}}_request(i,s){typeof i=="string"?(s=s||{},s.url=i):s=i||{},s=Mn(this.defaults,s);const{transitional:o,paramsSerializer:d,headers:p}=s;o!==void 0&&Ri.assertOptions(o,{silentJSONParsing:Ze.transitional(Ze.boolean),forcedJSONParsing:Ze.transitional(Ze.boolean),clarifyTimeoutError:Ze.transitional(Ze.boolean),legacyInterceptorReqResOrdering:Ze.transitional(Ze.boolean),advertiseZstdAcceptEncoding:Ze.transitional(Ze.boolean),validateStatusUndefinedResolves:Ze.transitional(Ze.boolean)},!1),d!=null&&(x.isFunction(d)?s.paramsSerializer={serialize:d}:Ri.assertOptions(d,{encode:Ze.function,serialize:Ze.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Ri.assertOptions(s,{baseUrl:Ze.spelling("baseURL"),withXsrfToken:Ze.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let f=p&&x.merge(p.common,p[s.method]);p&&x.forEach(["delete","get","head","post","put","patch","query","common"],H=>{delete p[H]}),s.headers=et.concat(f,p);const g=[];let b=!0;this.interceptors.request.forEach(function(F){if(typeof F.runWhen=="function"&&F.runWhen(s)===!1)return;b=b&&F.synchronous;const R=s.transitional||Ql;R&&R.legacyInterceptorReqResOrdering?g.unshift(F.fulfilled,F.rejected):g.push(F.fulfilled,F.rejected)});const S=[];this.interceptors.response.forEach(function(F){S.push(F.fulfilled,F.rejected)});let w,_=0,$;if(!b){const H=[hc.bind(this),void 0];for(H.unshift(...g),H.push(...S),$=H.length,w=Promise.resolve(s);_<$;)w=w.then(H[_++],H[_++]);return w}$=g.length;let D=s;for(;_<$;){const H=g[_++],F=g[_++];try{D=H(D)}catch(R){F.call(this,R);break}}try{w=hc.call(this,D)}catch(H){return Promise.reject(H)}for(_=0,$=S.length;_<$;)w=w.then(S[_++],S[_++]);return w}getUri(i){i=Mn(this.defaults,i);const s=Jc(i.baseURL,i.url,i.allowAbsoluteUrls,i);return Wc(s,i.params,i.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(i){An.prototype[i]=function(s,o){return this.request(Mn(o||{},{method:i,url:s,data:o&&x.hasOwnProp(o,"data")?o.data:void 0}))}});x.forEach(["post","put","patch","query"],function(i){function s(o){return function(p,f,g){return this.request(Mn(g||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}An.prototype[i]=s(),i!=="query"&&(An.prototype[i+"Form"]=s(!0))});let $h=class ep{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const o=this;this.promise.then(d=>{if(!o._listeners)return;let p=o._listeners.length;for(;p-- >0;)o._listeners[p](d);o._listeners=null}),this.promise.then=d=>{let p;const f=new Promise(g=>{o.subscribe(g),p=g}).then(d);return f.cancel=function(){o.unsubscribe(p)},f},i(function(p,f,g){o.reason||(o.reason=new ga(p,f,g),s(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const i=new AbortController,s=o=>{i.abort(o)};return this.subscribe(s),i.signal.unsubscribe=()=>this.unsubscribe(s),i.signal}static source(){let i;return{token:new ep(function(d){i=d}),cancel:i}}};function Ph(r){return function(s){return r.apply(null,s)}}function Lh(r){return x.isObject(r)&&r.isAxiosError===!0}const jl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(jl).forEach(([r,i])=>{jl[i]=r});function tp(r){const i=new An(r),s=Tc(An.prototype.request,i);return x.extend(s,An.prototype,i,{allOwnKeys:!0}),x.extend(s,i,null,{allOwnKeys:!0}),s.create=function(d){return tp(Mn(r,d))},s}const Pe=tp(fa);Pe.Axios=An;Pe.CanceledError=ga;Pe.CancelToken=$h;Pe.isCancel=Qc;Pe.VERSION=Jl;Pe.toFormData=Oi;Pe.AxiosError=U;Pe.Cancel=Pe.CanceledError;Pe.all=function(i){return Promise.all(i)};Pe.spread=Ph;Pe.isAxiosError=Lh;Pe.mergeConfig=Mn;Pe.AxiosHeaders=et;Pe.formToJSON=r=>Vc(x.isHTMLForm(r)?new FormData(r):r);Pe.getAdapter=Zc.getAdapter;Pe.HttpStatusCode=jl;Pe.default=Pe;const{Axios:Sy,AxiosError:Ey,CanceledError:_y,isCancel:Cy,CancelToken:Ry,VERSION:$y,all:Py,Cancel:Ly,isAxiosError:Ty,spread:Oy,toFormData:zy,AxiosHeaders:Ny,HttpStatusCode:Ay,formToJSON:Iy,getAdapter:Dy,mergeConfig:jy,create:My}=Pe,Fn="/api/analyze",gr="/api/chat",sa="/api/records",da="/api/hair-analysis";function Ol(r){return(r==null?void 0:r.trim().replace(/\/+$/,""))||""}function Gl(){var o;const r=typeof window<"u"?Ol((o=window.__DIAOLEME_CONFIG__)==null?void 0:o.apiBaseUrl):"",i=Ol(void 0),s=Ol(void 0);return r?vc(r):i?vc(i):s||Fn}function vc(r){return r.endsWith(Fn)||r.endsWith(da)?r:`${r}${Fn}`}function Th(r){return r.endsWith(gr)?r:r.endsWith(Fn)?r.slice(0,-Fn.length)+gr:r.endsWith(da)?r.slice(0,-da.length)+gr:`${r}${gr}`}function Oh(r){return r.endsWith(sa)?r:r.endsWith(Fn)?r.slice(0,-Fn.length)+sa:r.endsWith(da)?r.slice(0,-da.length)+sa:r.endsWith(gr)?r.slice(0,-gr.length)+sa:`${r}${sa}`}const bc={url:Gl(),timeout:45e3},xc={url:Th(Gl()),timeout:45e3},wc={url:Oh(Gl()),timeout:2e4};function zh(r,i=5){return r.slice(0,Math.max(0,i)).map(s=>{const o={date:s.date,title:s.title,score:s.score,summary:s.summary};return s.score_delta!=null&&(o.score_delta=s.score_delta),s.daily_task&&(o.daily_task=s.daily_task),Array.isArray(s.tags)&&s.tags.length&&(o.tags=s.tags.slice(0,4)),o})}async function Nh(r,i){var s;try{const o=r.filter(g=>g.role==="user"&&g.content.trim()).slice(-8),d=o[o.length-1];if(!d)return{reply:"先随便说一句想聊的内容就好，我在这儿陪你轻松记录。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"EMPTY_MESSAGE"};const p=Array.isArray(i==null?void 0:i.reportContext)?i.reportContext.slice(0,5):[],f=await Pe.post(xc.url,{messages:o,message:d.content,report_context:p},{timeout:xc.timeout});return kc(f.data)}catch(o){return Pe.isAxiosError(o)&&((s=o.response)!=null&&s.data)?kc(o.response.data):(console.warn("[model] 聊天接口不可达，返回本地客服兜底。",o),{reply:"我现在暂时连不上后端 AI，但可以先陪你记录：今天先完成一次轻量 Scan，再根据结果选择一个小任务就好。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"CHAT_BACKEND_UNREACHABLE"})}}async function Ah(r=20){var i;try{const s=await Pe.get(wc.url,{params:{limit:r},timeout:wc.timeout}),d=(Array.isArray((i=s.data)==null?void 0:i.records)?s.data.records:[]).map(p=>Ih(p)).filter(p=>!!p);return d.map((p,f)=>{if(p.score_delta!=null)return p;const g=d[f+1];return g?{...p,score_delta:p.score-g.score,prev_title:g.title}:p})}catch(s){return console.warn("[model] 历史接口不可达，保留本地记录。",s),[]}}function Ih(r){if(!r||typeof r!="object")return null;const i=r.result&&typeof r.result=="object"?r.result:{},s=typeof r.fun_score=="number"?r.fun_score:typeof r.score=="number"?r.score:typeof i.score=="number"?i.score:typeof i.fun_score=="number"?i.fun_score:null;if(typeof s!="number")return null;const d=(typeof r.created_at=="string"?r.created_at:"").slice(0,10)||new Date().toISOString().slice(0,10),p=typeof r.record_id=="string"?r.record_id:null,f=r.compare&&typeof r.compare=="object"?r.compare:null,g=r.growth&&typeof r.growth=="object"?r.growth:i.growthDelta&&typeof i.growthDelta=="object"?i.growthDelta:{};let b=typeof(f==null?void 0:f.score_delta)=="number"?f.score_delta:null;const S=typeof(f==null?void 0:f.prev_title)=="string"?f.prev_title:null,w=ip({...r,result:{...i,score:s,title:r.title||i.title,source:i.source||r.ai_source,source_label:i.source_label},record_id:p,record_status:r.record_status,fallbackCode:r.fallbackCode??r.fallback_code,ai_source:r.ai_source,success:r.success});return{id:p||`remote_${d}_${s}`,date:d,score:w.score,title:w.title,summary:w.summary,roast:w.roast,encouragement:w.encouragement,tags:w.tags,daily_task:w.daily_task,disclaimer:w.disclaimer,source:w.source,source_label:w.source_label,fallback_code:w.fallback_code,record_status:w.record_status,record_id:w.record_id,count:w.count,thickness:w.thickness,suggestions:w.suggestions,score_delta:b,prev_title:S,exp_added:typeof g.exp_added=="number"?g.exp_added:void 0}}function kc(r){const i=sp(r==null?void 0:r.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return{reply:Vt(r==null?void 0:r.reply,"我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。"),source:i,source_label:Vt(r==null?void 0:r.source_label,Zl(i)),fallback_code:Ml((r==null?void 0:r.fallback_code)??(r==null?void 0:r.fallbackCode))}}const np="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",rp=8*1024*1024;async function Dh(r,i=jh()){if(ap(r),i==="mock-fail")throw await Hh(900),new Error("mock_fail");if(i==="mock-success")return lp(r,"mock");try{const s=new FormData;s.append("image",r);const o=await Pe.post(bc.url,s,{timeout:bc.timeout});return ip(o.data)}catch(s){return console.warn("[model] 后端分析代理不可达，返回明确的本地 fallback。",s),Uh(r)}}function jh(){const r=typeof window<"u"?new URLSearchParams(window.location.search):null,i=r==null?void 0:r.get("mock");return i==="success"?"mock-success":i==="fail"?"mock-fail":"auto"}function ap(r){if(!r)throw new Error("empty_file");if(!r.type.startsWith("image/"))throw new Error("not_image");if(r.size<=0)throw new Error("empty_file");if(r.size>rp)throw new Error("file_too_large")}function ip(r){const i=r!=null&&r.result&&typeof r.result=="object"?r.result:r&&typeof r=="object"?r:{},s=sp(i.source,r==null?void 0:r.ai_source,r==null?void 0:r.success);return Mh(i,s,{fallbackCode:Ml((r==null?void 0:r.fallbackCode)??(r==null?void 0:r.fallback_code)),recordStatus:Vt(r==null?void 0:r.record_status,s==="api"?"ai_completed":`${s}_result`),recordId:Ml(r==null?void 0:r.record_id)})}function Mh(r,i=r.source||"api",s={}){const o=typeof r.score=="number"?Math.max(0,Math.min(100,Math.round(r.score))):66,d=Array.isArray(r.suggestions)&&r.suggestions.length>0?r.suggestions.slice(0,5).map(String):[r.daily_task||"今晚给自己留 30 分钟放松时间"],p=Array.isArray(r.tags)&&r.tags.length>0?r.tags.slice(0,4).map(String):Fh(o);return{score:o,title:Vt(r.title,o>=70?"发丝巡逻队长":o>=45?"头毛观察员":"发量守护实习生"),summary:Vt(r.summary,o>=70?"今天的头毛队形挺稳，适合继续轻松记录。":"今天有一点小波动，但已经被你认真捕捉到了。"),roast:Vt(r.roast,o>=70?"发丝们排队下班，还挺讲秩序。":"头发像开了早会，讨论得稍微热闹了一点。"),encouragement:Vt(r.encouragement,"别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。"),tags:p,daily_task:Vt(r.daily_task,d[0]),disclaimer:Vt(r.disclaimer,np),source:i,source_label:Zl(i,r.source_label),fallback_code:s.fallbackCode??null,record_status:s.recordStatus||`${i}_result`,record_id:s.recordId??null,count:r.count==="少量"||r.count==="偏多"?r.count:"中等",thickness:r.thickness==="粗硬"||r.thickness==="细软"?r.thickness:"正常",suggestions:d}}function Vt(r,i){return typeof r=="string"&&r.trim()?r.trim():i}function Ml(r){return typeof r=="string"&&r.trim()?r.trim():null}function sp(r,i,s){return r==="api"||r==="mock"||r==="fallback"?r:s===!1||i==="fallback"?"fallback":i==="mock"?"mock":"api"}function Fh(r){return r>=75?["队形稳定","心态在线","今日好梳"]:r>=50?["轻微波动","继续观察","早点睡派"]:["需要抱抱","从容记录","温柔养成"]}function Zl(r,i){return i||(r==="api"?"CC club OpenAI compatible AI 分析结果":r==="fallback"?"AI 兜底结果":"Demo mock 结果")}function lp(r,i="mock"){const s=r!=null&&r.name?`已读取「${r.name.slice(0,18)}」`:"已读取今天的照片";return new Promise(o=>setTimeout(()=>{o({score:72,title:"发际线守护者",summary:`${s}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,roast:"头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。",encouragement:"不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。",tags:["今日好梳","轻松观察","早睡加分"],daily_task:"今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。",disclaimer:np,source:i,source_label:Zl(i),fallback_code:null,record_status:"frontend_demo_mock",record_id:null,count:"中等",thickness:"正常",suggestions:["今晚提前 30 分钟进入休息模式","洗头时水温尽量温和","睡前做 2 分钟放松呼吸"]})},1200))}async function Uh(r){return{...await lp(r,"fallback"),title:"本地兜底记录",summary:"后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。",disclaimer:"当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。",source_label:"本地 Demo fallback（非真实 AI）",fallback_code:"BACKEND_UNREACHABLE",record_status:"frontend_local_fallback"}}function Hh(r){return new Promise(i=>setTimeout(i,r))}const In=[{id:"none",name:"素颜",emoji:"🌱",cost:0,description:"最真实的自己"},{id:"short",name:"清爽短发",emoji:"✂️",cost:0,description:"简单利落"},{id:"medium",name:"自然中分",emoji:"💇",cost:30,description:"邻家风格"},{id:"long",name:"飘逸长发",emoji:"👸",cost:80,description:"需要坚持打卡"},{id:"curly",name:"羊毛卷",emoji:"🌀",cost:120,description:"俏皮可爱"},{id:"bun",name:"丸子头",emoji:"🎀",cost:200,description:"终极成就"}],Sc=r=>{let i;const s=new Set,o=(S,w)=>{const _=typeof S=="function"?S(i):S;if(!Object.is(_,i)){const $=i;i=w??(typeof _!="object"||_===null)?_:Object.assign({},i,_),s.forEach(D=>D(i,$))}},d=()=>i,g={setState:o,getState:d,getInitialState:()=>b,subscribe:S=>(s.add(S),()=>s.delete(S))},b=i=r(o,d,g);return g},Bh=(r=>r?Sc(r):Sc),qh=r=>r;function Wh(r,i=qh){const s=la.useSyncExternalStore(r.subscribe,la.useCallback(()=>i(r.getState()),[r,i]),la.useCallback(()=>i(r.getInitialState()),[r,i]));return la.useDebugValue(s),s}const Xh=r=>{const i=Bh(r),s=o=>Wh(i,o);return Object.assign(s,i),s},Vh=(r=>Xh);function op(r,i){let s;try{s=r()}catch{return}return{getItem:d=>{var p;const f=b=>b===null?null:JSON.parse(b,void 0),g=(p=s.getItem(d))!=null?p:null;return g instanceof Promise?g.then(f):f(g)},setItem:(d,p)=>s.setItem(d,JSON.stringify(p,void 0)),removeItem:d=>s.removeItem(d)}}const Fl=r=>i=>{try{const s=r(i);return s instanceof Promise?s:{then(o){return Fl(o)(s)},catch(o){return this}}}catch(s){return{then(o){return this},catch(o){return Fl(o)(s)}}}},Qh=(r,i)=>(s,o,d)=>{let p={storage:op(()=>window.localStorage),partialize:R=>R,version:0,merge:(R,P)=>({...P,...R}),...i},f=!1,g=0;const b=new Set,S=new Set;let w=p.storage;if(!w)return r((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${p.name}', the given storage is currently unavailable.`),s(...R)},o,d);const _=()=>{const R=p.partialize({...o()});return w.setItem(p.name,{state:R,version:p.version})},$=d.setState;d.setState=(R,P)=>($(R,P),_());const D=r((...R)=>(s(...R),_()),o,d);d.getInitialState=()=>D;let H;const F=()=>{var R,P;if(!w)return;const N=++g;f=!1,b.forEach(B=>{var ae;return B((ae=o())!=null?ae:D)});const q=((P=p.onRehydrateStorage)==null?void 0:P.call(p,(R=o())!=null?R:D))||void 0;return Fl(w.getItem.bind(w))(p.name).then(B=>{if(B)if(typeof B.version=="number"&&B.version!==p.version){if(p.migrate){const ae=p.migrate(B.state,B.version);return ae instanceof Promise?ae.then(X=>[!0,X]):[!0,ae]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,B.state];return[!1,void 0]}).then(B=>{var ae;if(N!==g)return;const[X,de]=B;if(H=p.merge(de,(ae=o())!=null?ae:D),s(H,!0),X)return _()}).then(()=>{N===g&&(q==null||q(o(),void 0),H=o(),f=!0,S.forEach(B=>B(H)))}).catch(B=>{N===g&&(q==null||q(void 0,B))})};return d.persist={setOptions:R=>{p={...p,...R},R.storage&&(w=R.storage)},clearStorage:()=>{w==null||w.removeItem(p.name)},getOptions:()=>p,rehydrate:()=>F(),hasHydrated:()=>f,onHydrate:R=>(b.add(R),()=>{b.delete(R)}),onFinishHydration:R=>(S.add(R),()=>{S.delete(R)})},p.skipHydration||F(),H||D},Kh=Qh,Jh=()=>new Date().toISOString().slice(0,10),Ec="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",ke=Vh()(Kh((r,i)=>({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:Ec,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[],setAnalysis:s=>r({dropScore:s.score,title:s.title,summary:s.summary,roast:s.roast,encouragement:s.encouragement,tags:s.tags,dailyTask:s.daily_task,disclaimer:s.disclaimer,source:s.source,sourceLabel:s.source_label,fallbackCode:s.fallback_code,recordStatus:s.record_status,recordId:s.record_id,count:s.count,thickness:s.thickness,suggestions:s.suggestions}),viewReport:s=>{const o=i().reportHistory.find(d=>d.id===s);o&&r({dropScore:o.score,title:o.title,summary:o.summary,roast:o.roast,encouragement:o.encouragement,tags:o.tags,dailyTask:o.daily_task,disclaimer:o.disclaimer,source:o.source,sourceLabel:o.source_label,fallbackCode:o.fallback_code,recordStatus:o.record_status,recordId:o.record_id,count:o.count,thickness:o.thickness,suggestions:o.suggestions})},viewDayReport:s=>{const o=i().reportHistory.filter(f=>f.date===s);if(o.length===0)return;const d=o[0],p=Math.round(o.reduce((f,g)=>f+g.score,0)/o.length);r({dropScore:p,title:d.title,summary:d.summary,roast:d.roast,encouragement:d.encouragement,tags:d.tags,dailyTask:d.daily_task,disclaimer:d.disclaimer,source:d.source,sourceLabel:d.source_label,fallbackCode:d.fallback_code,recordStatus:d.record_status,recordId:d.record_id,count:d.count,thickness:d.thickness,suggestions:d.suggestions})},addReport:s=>r(o=>({reportHistory:[s,...o.reportHistory].slice(0,100)})),mergeRemoteHistory:s=>r(o=>{const d=new Set(s.map(f=>f.record_id||f.id).filter(Boolean));return{reportHistory:[...o.reportHistory.filter(f=>!d.has(f.record_id||f.id)),...s].slice(0,100)}}),markCheckinToday:()=>{const s=Jh();i().checkinDays.includes(s)||r(o=>({checkinDays:[...o.checkinDays,s],points:o.points+5}))},unlockHairStyle:(s,o)=>{const d=i();return d.unlockedHairStyles.includes(s)?!0:d.points<o?!1:(r({unlockedHairStyles:[...d.unlockedHairStyles,s],points:d.points-o}),!0)},addPoints:s=>r(o=>({points:o.points+s})),resetAll:()=>{r({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:Ec,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:500,reportHistory:[]}),typeof window<"u"&&window.localStorage.removeItem("diaolema-user")}}),{name:"diaolema-user",storage:op(()=>localStorage)}));function Un({scale:r=1}){return`<div class="buddy" style="transform:scale(${r})"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div>`}const Yh=`<section class="page active" data-page="home">
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
              ${Un({scale:1})}
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
        </section>`,Gh=`<section class="page" data-page="scan">
          <div class="scan-wrap">
            <div class="feature-stack">
              <div class="feature"><b>☀️ 光线充足</b><small>自然光或白色灯光</small></div>
              <div class="feature"><b>⬚ 平铺头发</b><small>尽量不重叠</small></div>
              <div class="feature"><b>◌ 对比清晰</b><small>浅色背景更佳</small></div>
              <div class="card soft"><b>别担心～</b><p>我们一起慢慢变好 💗</p><div class="mini-buddy"></div></div>
            </div>
            <div class="card" style="text-align:center">
              <div class="scan-orbit">
                ${Un({scale:.78})}
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
        </section>`,Zh=`<section class="page" data-page="buddy">
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
                <div class="buddy-stage"><div class="ground"></div>${Un({scale:1})}</div>
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
        </section>`,e0=`<section class="page" data-page="quests">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div>
                  <h3>今日活跃奖励</h3>
                  <p>完成今日任务，领取额外奖励！</p>
                  <div class="row" id="weekRewards"><span class="badge">✓<br><small>+10 XP</small></span><span class="badge">✓<br><small>+15 XP</small></span><span class="badge">三<br><small>+20 XP</small></span><span class="badge">四<br><small>+25 XP</small></span><span class="badge">五<br><small>+30 XP</small></span><span class="badge">六<br><small>+25 XP</small></span><span class="badge">日<br><small>+25 XP</small></span></div>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Un({scale:.62})}</div>
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
        </section>`,t0=`<section class="page" data-page="journey">
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
        </section>`,n0=`<section class="page" data-page="league">
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
        </section>`,r0=`<section class="page" data-page="rewards">
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
        </section>`,a0=`<section class="page" data-page="diary">
          <div class="grid two-col diary-layout">
            <div class="grid">
              <div class="card hero diary-hero" style="min-height:260px">
                <div>
                  <h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2>
                  <p>每一根头发都在努力生长，你也是！</p>
                  <button class="pill primary" data-diary-today-mood>😊 开心</button>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Un({scale:.5})}</div>
              </div>
              <div class="grid diary-main-grid">
                <aside class="grid diary-side-left">
                  <div class="card">
                    <h3>日历视图</h3>
                    <div class="calendar" id="calendar"></div>
                    <h3 class="diary-mood-filter-title">心情筛选</h3>
                    <div class="diary-mood-filters" id="diaryMoodFilters">
                      <button class="pill primary" data-diary-mood="all">全部</button>
                      <button class="pill" data-diary-mood="happy">😊 开心</button>
                      <button class="pill" data-diary-mood="calm">🧘 平静</button>
                      <button class="pill" data-diary-mood="anxious">😟 焦虑</button>
                      <button class="pill" data-diary-mood="tired">😫 疲惫</button>
                    </div>
                    <h3>本月心情分布</h3>
                    <div class="donut" id="diaryMoodDonut" data-label="0\\A 篇日记"></div>
                    <div class="diary-mood-legend" id="diaryMoodLegend"></div>
                  </div>
                </aside>
                <div class="card diary-feed-card">
                  <div class="diary-feed-head">
                    <div>
                      <h3 id="diaryFeedTitle">共 0 篇日记</h3>
                      <p class="diary-feed-sub">由每日 Scan 报告整理成一天一篇总结</p>
                    </div>
                    <span class="badge">按最新优先</span>
                  </div>
                  <div class="diary-feed" id="diaries"></div>
                  <button class="pill diary-load-more" id="diaryLoadMore" data-action="diary-load-more" hidden>加载更多日记</button>
                </div>
              </div>
            </div>
            <aside class="grid">
              <div class="card" id="diaryTrendCard"><h3>心情趋势</h3><div class="chart"></div></div>
              <div class="card word-cloud"><h3>关键词统计</h3></div>
              <div class="card" id="diaryMemoryCard"><h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>完成第一次 Scan 后，这里会展示值得回看的一天。</p></div>
            </aside>
          </div>
        </section>`,i0=`<section class="page" data-page="community">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:250px">
                <div><h2 style="font-size:36px">你并不孤单，我们都在努力生长 ✨</h2><p>分享你的故事，互相鼓励，成为彼此的光。</p><div class="hero-buttons"><button class="cta primary" data-action="share-to-community">✎ 分享我的故事</button><button class="cta ghost" data-community-tab="热门"># 浏览话题</button></div></div>
                <div class="buddy-stage" style="min-height:210px"><div class="ground"></div>${Un({scale:.48})}</div>
              </div>
              <div class="tabs" id="communityTabs"><button class="pill" data-community-tab="关注">关注</button><button class="pill primary" data-community-tab="最新">最新</button><button class="pill" data-community-tab="热门">热门</button><button class="pill" data-community-tab="精华">精华</button></div>
              <div class="item-list" id="posts"><div class="post"><div class="mini-buddy"></div><div><b>小蒲公英 <span class="badge">Lv.6</span></b><p>今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～</p><span class="badge"># 头皮护理</span></div><div class="post-media">📋</div><small>💜 128　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>爱吃草莓 <span class="badge">Lv.4</span></b><p>分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🪮</div><small>💜 96　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>薄荷味的风 <span class="badge">Lv.6</span></b><p>最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌿</div><small>💜 76　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>向日葵 <span class="badge">Lv.3</span></b><p>新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌱</div><small>💜 143　💬 36　☆ 收藏</small></div></div>
            </div>
            <aside class="grid">
              <div class="card item-list"><h3>热门话题</h3><div class="item"><span>#</span><b>连续打卡挑战</b><span>12.4k</span></div><div class="item"><span>#</span><b>头皮护理分享</b><span>8.7k</span></div><div class="item"><span>#</span><b>情绪管理小贴士</b><span>6.1k</span></div></div>
              <div class="card"><h3>社区活动</h3><div class="item"><span>📅</span><b>21 天头皮养护打卡挑战</b><button class="quest-btn">立即参加</button></div></div>
              <div class="card item-list"><h3>推荐小组</h3><div class="item"><span>💙</span><b>佛系养发小分队</b><button class="pill">加入</button></div><div class="item"><span>🏃</span><b>运动养发日记</b><button class="pill">加入</button></div><div class="item"><span>🥗</span><b>饮食养发研究所</b><button class="pill">加入</button></div></div>
            </aside>
          </div>
        </section>`,s0=`<section class="page" data-page="me">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:300px">
                <div>
                  <h2 style="font-size:36px">Me <span class="badge">Lv.5</span></h2>
                  <p>一起变好呀！</p>
                  <div class="row"><span class="badge">12,360 XP</span><span class="badge">连续 32 天</span></div>
                </div>
                <div class="buddy-stage" style="min-height:250px"><div class="ground"></div>${Un({scale:.58})}</div>
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
        </section>`,l0=`<div class="app">
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
            <button class="pill" id="guideBtn">分享到 Community</button>
            <button class="bell" aria-label="Notifications">🔔</button>
            <button class="avatar" aria-label="Profile">🌱</button>
          </div>
        </div>

        ${Yh}

        ${Gh}

        ${Zh}

        ${e0}

        ${t0}

        ${n0}

        ${r0}

        ${a0}

        ${i0}

        ${s0}
      </main>
    </div>`,o0=`
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
`,u0=`
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
`;function zn(r,i){r.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===i)),r.querySelectorAll("[data-go]").forEach(p=>p.classList.toggle("active",p.dataset.go===i));const s=r.querySelector("#pageHeading"),o=r.querySelector("#pageSub"),d={scan:["Scan","用科学的方式，了解你的头发状况 💗"],diary:["My Diary ✨","每一天一篇小结，由当日报告温柔整理而成"]};s&&d[i]&&(s.textContent=d[i][0]),o&&d[i]&&(o.textContent=d[i][1])}function ce(r,i){r&&(r.innerHTML=i)}function O(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ve(r,i){const s=r.querySelector("[data-toast]");s==null||s.remove();const o=document.createElement("div");o.dataset.toast="true",o.className="prototype-toast",o.textContent=i,r.appendChild(o),window.setTimeout(()=>o.remove(),1800)}const up=()=>"diaoleme-prototype-buddy-care",dp=()=>"diaoleme-prototype-selected-hair-style";function d0(r,i){const s=ke.getState(),o=gp(),d=s.reportHistory[0],p=Math.max(62,Math.min(98,Math.round((s.dropScore??82)+Math.min(s.reportHistory.length,6)))),f=Math.max(56,Math.min(96,Math.round((o.energy+o.love)/2))),g=f>=78?"Happy":f>=64?"Calm":"Need Care";fp(s.unlockedHairStyles),In.filter(w=>s.unlockedHairStyles.includes(w.id)).length;const b=i.getQuestCount();ce(r.querySelector('[data-page="buddy"] .metric'),`
    <div class="metric-row"><span style="font-size:32px">💗</span><b>生命值</b><div class="meter"><div class="fill" style="--w:${p}%;--c:#ff77a8"></div></div><b>${p}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">⚡</span><b>能量值</b><div class="meter"><div class="fill" style="--w:${o.energy}%;--c:#ffad2f"></div></div><b>${o.energy}/100</b></div>
    <div class="metric-row"><span style="font-size:32px">😊</span><b>心情值</b><div class="meter"><div class="fill" style="--w:${f}%;--c:#8b5cf6"></div></div><b>${g}</b></div>
  `),cp(r),ce(r.querySelector('[data-page="buddy"] .card.item-list'),`
    <button class="item buddy-action dress" data-buddy-action="dress"><span>👗</span><b>Dress Up<small>装扮你的伙伴，选择或解锁造型</small></b><span>›</span></button>
    <button class="item buddy-action feed" data-buddy-action="feed"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
    <button class="item buddy-action diary" data-buddy-action="diary"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
    <button class="item buddy-action growth" data-buddy-action="growth"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
  `),ce(r.querySelector('[data-page="buddy"] .grid:nth-child(2) .card:first-child'),`
    <h3>今日头发报告</h3>
    <div><span class="big-number">${s.dropScore??"--"}</span> ${s.dropScore==null?"":"分"}</div>
    <p>${O((d==null?void 0:d.summary)||"还没有今日报告，完成一次 Scan 后会同步到 Buddy。")}</p>
    <div class="chart">${i.buildTrendBars(s.reportHistory)}</div>
  `);const S=r.querySelector('[data-page="buddy"]');S&&!S.querySelector(".buddy-extra-grid")&&S.insertAdjacentHTML("beforeend",'<div class="buddy-extra-grid"><div class="card" data-buddy-summary></div><div class="card" data-buddy-cheers></div></div>'),ce(r.querySelector("[data-buddy-summary]"),`
    <h3>💗 本周成长小结</h3>
    <p>你的护理表现超过了 ${Math.min(96,60+b.done*4+s.checkinDays.length)}% 的用户，继续保持哦！</p>
    <div class="buddy-summary-stats">
      <span><b>${s.checkinDays.length||0} 天</b><small>护理天数</small></span>
      <span><b>${b.done}/${b.total}</b><small>任务完成</small></span>
      <span><b>${i.avgScore(s.reportHistory)||"--"}</b><small>平均状态分</small></span>
      <span><b>${o.energy>=78?"良好":"待补充"}</b><small>充足睡眠</small></span>
    </div>
  `),ce(r.querySelector("[data-buddy-cheers]"),`
    <h3>💗 来自大家的鼓励</h3>
    <div class="buddy-cheers">
      ${["Luna|你的新发型超可爱！我们一起加油呀 🌞","Mia|头发也在慢慢变强大呢，你一定可以的！💪","Ray|看到你的变化啦，好棒！！✨"].map(w=>{const[_,$]=w.split("|");return`<div class="buddy-cheer"><span class="avatar">${_[0]}</span><b>${_}</b><p>${O($)}</p><small>${_==="Ray"?"1 天前":_==="Mia"?"5 小时前":"2 小时前"}</small></div>`}).join("")}
    </div>
  `)}function cp(r){const i=ke.getState(),s=fp(i.unlockedHairStyles),o=In.filter(d=>i.unlockedHairStyles.includes(d.id)).length;ce(r.querySelector('[data-page="buddy"] .section-title'),`解锁发型 <span class="badge">${o} / ${In.length} 已解锁</span>`),ce(r.querySelector("#skins"),In.map(d=>{const p=i.unlockedHairStyles.includes(d.id),f=d.id===s,g=p?f?"使用中":"点击换上":`${d.cost} XP 解锁`;return`<button class="skin ${f?"active":""}" data-unlock-id="${O(d.id)}"><div class="mini-buddy" style="${p?"":"opacity:.45"}"></div><b>${O(d.name)}</b><small>${O(g)}</small>${p?"":'<span class="buddy-lock">🔒</span>'}</button>`}).join(""))}function c0(r,i,s){var o;if(r==="dress"){Ve(i,"已打开造型选择，点击卡片可使用或解锁"),(o=i.querySelector("#skins"))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r==="feed"){const d=gp();p0({energy:Math.min(100,d.energy+12),love:Math.min(100,d.love+6),feedCount:d.feedCount+1,lastFed:s()}),ke.getState().addPoints(3),Ve(i,"小发球吃饱啦：能量 +12，爱心 +6，XP +3");return}if(r==="diary"){zn(i,"diary"),Ve(i,"已打开 Buddy Diary");return}r==="growth"&&(zn(i,"journey"),Ve(i,"已打开成长记录"))}function pp(r){localStorage.setItem(dp(),r)}function fp(r){var o;const i=localStorage.getItem(dp());if(i&&r.includes(i))return i;const s=r[r.length-1]||((o=In[0])==null?void 0:o.id)||"none";return pp(s),s}function gp(){try{return{energy:68,love:86,feedCount:0,lastFed:null,...JSON.parse(localStorage.getItem(up())||"{}")}}catch{return{energy:68,love:86,feedCount:0,lastFed:null}}}function p0(r){localStorage.setItem(up(),JSON.stringify(r))}function eo(r){const[i,s,o]=r.split("-");return`${s}/${o}`}function f0(r,i=!1){return r.length?r.map(s=>{const o=O(s.id),d=i?"":` data-view-report="${o}" role="button" tabindex="0"`,p=typeof s.score_delta=="number"?s.score_delta>0?`↑${s.score_delta}`:s.score_delta<0?`↓${Math.abs(s.score_delta)}`:"→0":null,f=typeof s.exp_added=="number"&&s.exp_added>0?` · +${s.exp_added}XP`:"",g=p?`<small>${O(s.prev_title?`对比「${s.prev_title}」 ${p}${f}`:`较上次 ${p}${f}`)}</small>`:`<small>${O(s.summary)}</small>`;return`<div class="item"${d}><span>${i?s.date.slice(5):"〰"}</span><b>${O(s.title)}${g}</b><button class="status" data-view-report="${o}">${s.score} 分</button></div>`}).join(""):'<div class="item"><span>📷</span><b>暂无记录<small>上传图片后会出现在这里。</small></b><span class="status">--</span></div>'}function mp(r){return r.reduce((i,s)=>(i[s.date]=i[s.date]||[],i[s.date].push(s),i),{})}function g0(r,i){const s=Object.keys(i).sort().reverse();if(!r.length)return[{icon:"📷",title:"等待首次扫描",note:"点击去 Scan 上传",date:""},{icon:"🌱",title:"报告会自动保存",note:"生成后出现在这里",date:""},{icon:"✨",title:"趋势稍后生成",note:"多次记录后更清晰",date:""}];const o=r.reduce((d,p)=>p.score>d.score?p:d,r[0]);return[{icon:"⚑",title:"开始记录",note:eo(s[s.length-1]||r[r.length-1].date),date:s[s.length-1]||r[r.length-1].date},{icon:"📄",title:`${r.length} 份报告`,note:"Scan 自动沉淀",date:r[0].date},{icon:"⭐",title:"最高状态分",note:`${o.score} 分`,date:o.date},{icon:"🗓",title:`${s.length} 个记录日`,note:"持续观察中",date:s[0]||r[0].date}]}function m0(r,i){if(!r.length)return'<div class="item"><span>🌱</span><b>还没有高光<small>完成一次 Scan 后自动生成。</small></b><button class="pill" data-go="scan">去扫描</button></div>';const s=r[0],o=r.reduce((d,p)=>p.score>d.score?p:d,s);return[`<div class="item"><span>📄</span><b>最新报告已保存<small>${O(s.title)}</small></b><button class="pill" data-view-report="${O(s.id)}">查看</button></div>`,`<div class="item"><span>⭐</span><b>本月最高状态分<small>${o.score} 分，仅作趣味记录。</small></b><button class="pill" data-view-report="${O(o.id)}">打开</button></div>`,`<div class="item"><span>🗓</span><b>${Object.keys(i).length} 个记录日<small>每次上传都会沉淀到 Journey。</small></b><button class="pill" data-action="open-journey">回看</button></div>`].join("")}function hp(r){const i=r.slice(0,7).reverse().map(o=>Math.max(18,Math.min(96,o.score))),s=[28,36,44,52,60];return(i.length?i:s).map(o=>`<span class="bar" style="height:${o}%"></span>`).join("")}function yp(r){var _;const i=ke.getState().reportHistory,s=3,o=Math.max(1,Math.ceil(i.length/s)),d=Math.min(Math.max(Number(r.dataset.scanRecordPage||0),0),o-1);r.dataset.scanRecordPage=String(d);const p=i.slice(d*s,d*s+s),f=i.length>s?`<div class="scan-record-pager"><button class="pill" data-scan-record-page="${Math.max(0,d-1)}" ${d===0?"disabled":""}>上一页</button><small>${d+1} / ${o}</small><button class="pill" data-scan-record-page="${Math.min(o-1,d+1)}" ${d>=o-1?"disabled":""}>下一页</button></div>`:"",g=i.slice(0,4),b=((_=i[0])==null?void 0:_.source_label)||"等待分析",S=O(b),w=i.length?Math.round(i.reduce(($,D)=>$+D.score,0)/i.length):null;ce(r.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),`<h3>本周扫描数据</h3><div class="three grid scan-stat-grid"><div class="scan-stat-item"><span class="big-number">${i.length}</span><small>扫描次数</small></div><div class="scan-stat-item"><span class="big-number">${w||"--"}</span><small>平均状态分</small></div><div class="scan-stat-item scan-source-stat"><span class="badge scan-source-value" title="${S}" data-full-source="${S}">${S}</span><small>最新来源</small></div></div>`),ce(r.querySelector('[data-page="scan"] .grid .card.item-list'),`<h3>最近扫描记录</h3><div class="scan-record-list">${f0(p)}</div>${f}`),h0(r,i),ce(r.querySelector("#diaries"),g.length?g.map($=>`<div class="item"><span><b>${eo($.date)}</b><br>报告</span><b>${O($.title)}<small>${O($.summary)}</small></b><button class="pill" data-view-report="${O($.id)}">查看</button></div>`).join(""):'<div class="item"><span>📷</span><b>还没有日记<small>上传图片后会自动保存分析记录。</small></b><span>⋯</span></div>')}function h0(r,i){const s=mp(i),o=i.slice(0,4),d=i.length?Math.round(i.reduce((f,g)=>f+g.score,0)/i.length):null,p=ke.getState().checkinDays.length;ce(r.querySelector("#milestones"),g0(i,s).map(f=>`
    <button class="milestone" ${f.date?`data-view-day="${O(f.date)}"`:'data-go="scan"'}>
      <div class="dot">${f.icon}</div>${O(f.title)}<br><small>${O(f.note)}</small>
    </button>
  `).join("")),ce(r.querySelector("#timeline"),o.length?o.map((f,g)=>{const b=typeof f.score_delta=="number"?f.score_delta>0?`↑${f.score_delta}`:f.score_delta<0?`↓${Math.abs(f.score_delta)}`:"持平":null,S=b?`<span class="badge">${O(b)}${typeof f.exp_added=="number"&&f.exp_added>0?` · +${f.exp_added}XP`:""}</span>`:g===0?'<span class="badge">最新</span>':"",w=b&&f.prev_title?`<small>对比上一份「${O(f.prev_title)}」· ${O(f.summary)}</small>`:`<small>${O(f.summary)}</small>`;return`
    <div class="item journey-record">
      <span>${O(eo(f.date))}</span>
      <b>${O(f.title)}${w}</b>
      <span class="status">${f.score} 分</span>
      <button class="pill primary" data-view-report="${O(f.id)}">查看报告</button>
      <button class="pill" data-share-report="${O(f.id)}">分享到社区</button>
      ${S}
    </div>
  `}).join(""):`
    <div class="item journey-empty">
      <span>📷</span>
      <b>还没有旅程记录<small>完成一次 Scan 上传后，你的趣味报告和历史对比会自动出现在这里。</small></b>
      <button class="pill primary" data-go="scan">去上传第一张</button>
    </div>
  `),ce(r.querySelector('[data-page="journey"] aside .card:nth-child(1)'),`
    <h3>旅程总览</h3>
    <div class="three grid">
      <div><span class="big-number">${i.length}</span><br>历史报告</div>
      <div><span class="big-number">${d||"--"}</span><br>平均状态分</div>
      <div><span class="big-number">${p}</span><br>打卡天数</div>
    </div>
    <button class="pill primary" data-go="scan">新增扫描</button>
  `),ce(r.querySelector('[data-page="journey"] aside .card:nth-child(2)'),`
    <h3>状态趋势</h3>
    <div class="chart">${hp(i)}</div>
    <p>${i.length?"根据最近扫描报告生成，只做轻松记录参考。":"完成一次 Scan 后，这里会显示报告趋势。"}</p>
  `),ce(r.querySelector('[data-page="journey"] aside .card:nth-child(3)'),`
    <h3>本月高光时刻</h3>
    <div class="item-list">
      ${m0(i,s)}
    </div>
    <button class="pill" data-action="journey-share">分享到 Community</button>
  `)}const y0=Math.round(rp/1024/1024);function v0(r,i){const s=r.querySelector('[data-page="scan"]'),o=r.querySelector("#scanBtn"),d=r.querySelector("#uploadBtn"),p=r.querySelector("#scanCompleteBtn"),f=r.querySelector("#scanPercent"),g=s==null?void 0:s.querySelector('.card[style*="text-align:center"]'),b=document.createElement("input"),S=document.createElement("input");let w=null,_=null,$=null;const D=(ee,ie=!1)=>{ee.type="file",ee.accept="image/*",ie&&ee.setAttribute("capture","environment"),ee.style.display="none",document.body.appendChild(ee)};D(b,!0),D(S);const H=(ee,ie="idle")=>{const G=g==null?void 0:g.querySelector("[data-analysis-status]"),le=G||document.createElement("p");le.dataset.analysisStatus="true",le.textContent=ee,le.style.color=ie==="error"?"#ff7a2f":ie==="success"?"#65c982":"#65709e",le.style.fontWeight="800",G||g==null||g.appendChild(le)},F=ee=>{_&&URL.revokeObjectURL(_),_=URL.createObjectURL(ee);const ie=r.querySelector(".scan-orbit"),G=ie==null?void 0:ie.querySelector("[data-upload-preview]"),le=G||document.createElement("img");le.dataset.uploadPreview="true",le.src=_,le.alt="上传预览",Object.assign(le.style,{position:"absolute",inset:"22px",width:"calc(100% - 44px)",height:"calc(100% - 44px)",objectFit:"cover",borderRadius:"50%",boxShadow:"0 18px 45px rgba(99, 75, 168, 0.22)",zIndex:"3"}),G||ie==null||ie.appendChild(le),f&&(f.textContent="已选",f.style.zIndex="4"),p&&(p.style.display=""),H(`已选择：${ee.name}，点击“完成”确认并开始 AI 分析。`)},R=()=>{var ee;$==null||$.getTracks().forEach(ie=>ie.stop()),$=null,(ee=r.querySelector("[data-camera-modal]"))==null||ee.remove()},P=ee=>{const ie=new File([ee],`diaoleme-camera-${Date.now()}.jpg`,{type:"image/jpeg"});w=ie,F(ie),H("已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。"),R()},N=async()=>{var G;const ee={video:{facingMode:{ideal:"environment"}},audio:!1};if((G=navigator.mediaDevices)!=null&&G.getUserMedia)return navigator.mediaDevices.getUserMedia(ee);const ie=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return ie?new Promise((le,we)=>ie.call(navigator,ee,le,we)):null},q=async()=>{var ee,ie;try{if($=await N(),!$){H("此页面无相机权限，请检查吧。","error");return}const G=document.createElement("div");G.dataset.cameraModal="true",G.className="camera-capture-modal",G.innerHTML='<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>',r.appendChild(G);const le=G.querySelector("video");le&&(le.srcObject=$),(ee=G.querySelector("[data-camera-cancel]"))==null||ee.addEventListener("click",R),(ie=G.querySelector("[data-camera-capture]"))==null||ie.addEventListener("click",()=>{var Le;if(!le||le.videoWidth===0)return;const we=document.createElement("canvas");we.width=le.videoWidth,we.height=le.videoHeight,(Le=we.getContext("2d"))==null||Le.drawImage(le,0,0),we.toBlob(be=>{be&&P(be)},"image/jpeg",.92)}),H("相机已打开，请拍照后自动上传。")}catch(G){console.error("[prototype] camera failed:",G),R(),H("此页面无相机权限，请检查吧。","error")}},B=()=>q(),ae=()=>S.click(),X=ee=>{var le;const ie=ee.currentTarget,G=(le=ie.files)==null?void 0:le[0];if(ie.value="",!!G)try{ap(G),w=G,F(G)}catch(we){w=null;const Le={not_image:"这个文件不是图片，请选择 JPG、PNG 等图片文件。",empty_file:"图片文件为空，请重新选择。",file_too_large:`图片有点大啦，请选择 ${y0}MB 以内的照片再试。`};H(Le[we==null?void 0:we.message]||"图片暂时读不出来，请换一张再试。","error")}},de=async()=>{if(!w){ae(),H("请先选择或拍摄一张图片。");return}o&&(o.disabled=!0),d&&(d.disabled=!0),p&&(p.disabled=!0),H("分析中，正在调用后端 AI 代理...");let ee=10;f&&(f.textContent="10%");const ie=window.setInterval(()=>{ee=Math.min(ee+8,96),f&&(f.textContent=`${ee}%`)},140);try{const G=await Dh(w);b0(G),window.clearInterval(ie),Ul(r,G),i.renderStatefulSections(),H(G.fallback_code?"已生成 fallback 结果，可继续演示完整流程。":"AI 分析完成，结果已写入报告和历史记录。","success")}catch(G){console.error("[prototype] analyze failed:",G),window.clearInterval(ie),f&&(f.textContent="失败"),H("分析接口暂时不可用，请稍后重试。","error")}finally{o&&(o.disabled=!1),d&&(d.disabled=!1),p&&(p.disabled=!1)}};return b.addEventListener("change",X),S.addEventListener("change",X),o==null||o.addEventListener("click",B),d==null||d.addEventListener("click",ae),p==null||p.addEventListener("click",de),()=>{b.removeEventListener("change",X),S.removeEventListener("change",X),o==null||o.removeEventListener("click",B),d==null||d.removeEventListener("click",ae),p==null||p.removeEventListener("click",de),R(),b.remove(),S.remove(),_&&URL.revokeObjectURL(_)}}function b0(r){const i=ke.getState();i.setAnalysis(r),i.addReport({id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),date:x0(),score:r.score,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags,daily_task:r.daily_task,disclaimer:r.disclaimer,source:r.source,source_label:r.source_label,fallback_code:r.fallback_code,record_status:r.record_status,record_id:r.record_id,count:r.count,thickness:r.thickness,suggestions:r.suggestions})}function _c(){const r=ke.getState();return{score:r.dropScore??66,title:r.title,summary:r.summary,roast:r.roast,encouragement:r.encouragement,tags:r.tags.length?r.tags:["等待记录"],daily_task:r.dailyTask,disclaimer:r.disclaimer,source:r.source,source_label:r.sourceLabel,fallback_code:r.fallbackCode,record_status:r.recordStatus,record_id:r.recordId,count:r.count,thickness:r.thickness,suggestions:r.suggestions}}function Cc(r){var s;const i=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');(s=i==null?void 0:i.querySelector("[data-analysis-result]"))==null||s.remove(),i==null||i.classList.remove("has-analysis-result")}function Ul(r,i){const s=r.querySelector("#scanPercent"),o=r.querySelector('[data-page="scan"] .card[style*="text-align:center"]');if(s&&(s.textContent=`${i.score}%`),!o||ke.getState().dropScore==null)return;const d=o.querySelector("[data-analysis-result]");d==null||d.remove(),o.classList.add("has-analysis-result");const p=i.source_label||"未知来源",f=i.fallback_code?`fallback: ${i.fallback_code}`:i.record_id?`记录编号: ${i.record_id}`:"已生成新的扫描记录",g=o.querySelector(".scan-orbit");g&&(g.style.filter="saturate(1.08)");const b=`
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-head">
        <div>
          <span class="badge analysis-source-badge">${O(p)}</span>
          <h3>${O(i.title)}</h3>
        </div>
        <div class="scan-score-chip">${O(String(i.score))}</div>
      </div>
      <p class="analysis-source-detail">${O(f)}</p>
      <p>${O(i.summary)}</p>
      <div class="analysis-grid three grid">
        <div class="analysis-metric"><span class="big-number">${O(i.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${O(i.thickness)}</span><small>发质观感</small></div>
        <div class="analysis-metric"><span class="big-number">${O(i.score)}</span><small>趣味分数</small></div>
      </div>
      <p><b>温柔吐槽：</b>${O(i.roast)}</p>
      <p><b>今日任务：</b>${O(i.daily_task)}</p>
      <div class="analysis-tags">${i.tags.map(S=>`<span class="badge">${O(S)}</span>`).join("")}</div>
      <small>${O(i.disclaimer)}</small>
    </div>
  `;o.insertAdjacentHTML("beforeend",b)}function x0(){return new Date().toISOString().slice(0,10)}const Dn=["daily","weekly","growth","special"],Hl={daily:"每日任务",weekly:"每周任务",growth:"成长任务",special:"特别任务"},w0={weekly:[{id:"weekly-scan-3",category:"weekly",icon:"📷",title:"完成 3 次记录",description:"给小发球攒一组本周观察素材。",target:"0/3",reward:35,actionLabel:"记录本周"},{id:"weekly-sleep-4",category:"weekly",icon:"🌙",title:"4 天温柔早睡",description:"不卷到深夜，给头皮也放个小假。",target:"0/4",reward:40,actionLabel:"打卡早睡"},{id:"weekly-share",category:"weekly",icon:"💬",title:"分享一次发球周报",description:"把本周小进步发给朋友，轻松晒一下。",target:"0/1",reward:25,actionLabel:"去分享"},{id:"weekly-massage",category:"weekly",icon:"🪮",title:"完成 3 次头皮放松",description:"睡前 5 分钟，给自己按下暂停键。",target:"0/3",reward:30,actionLabel:"开始放松"}],growth:[{id:"growth-first-report",category:"growth",icon:"🌱",title:"生成第一份种子报告",description:"上传照片后获得你的第一枚趣味称号。",target:"0/1",reward:45,actionLabel:"去扫描"},{id:"growth-7-day",category:"growth",icon:"🔥",title:"连续记录 7 天",description:"把小习惯养成小成就，不求完美只求坚持。",target:"0/7",reward:80,actionLabel:"点亮进度"},{id:"growth-unlock-style",category:"growth",icon:"🎀",title:"解锁一个新造型",description:"给小发球换套新皮肤，奖励认真生活的你。",target:"0/1",reward:60,actionLabel:"去解锁"},{id:"growth-history",category:"growth",icon:"📒",title:"查看一次历史趋势",description:"回头看看，最近的自己已经很棒啦。",target:"0/1",reward:25,actionLabel:"看趋势"}],special:[{id:"special-spring",category:"special",icon:"🌸",title:"春风吹发季签到",description:"参与限时季节活动，领取春日能量。",target:"0/1",reward:50,actionLabel:"领取能量"},{id:"special-mood",category:"special",icon:"😊",title:"写下今日心情弹幕",description:"把压力吐槽给小发球听，轻轻放过自己。",target:"0/1",reward:30,actionLabel:"写一句"},{id:"special-buddy",category:"special",icon:"☁️",title:"和 Buddy 互动一次",description:"摸摸小发球，让陪伴感上线。",target:"0/1",reward:35,actionLabel:"去互动"},{id:"special-community",category:"special",icon:"✨",title:"逛逛社区治愈帖",description:"看看大家的小妙招，找到一点轻松感。",target:"0/1",reward:25,actionLabel:"去看看"}]};let Bl=null;function k0(r){Bl=r}function S0(r,i){Qt();const s=ke.getState(),o=mr(i),d=oa(i),p=o.filter(w=>d.has(w.id)).length,f=Dn.flatMap(mr),g=Dn.reduce((w,_)=>w+oa(_).size,0),b=f.length?Math.round(g/f.length*100):0,S=mr("daily").every(w=>oa("daily").has(w.id));ce(r.querySelector('[data-page="quests"] .tabs'),Dn.map(w=>`<button class="pill ${w===i?"primary":""}" data-quest-category="${w}">${Hl[w]}</button>`).join("")),ce(r.querySelector("#questList"),o.map(w=>R0(w,d.has(w.id))).join("")+$0(i,p,o.length,S)),ce(r.querySelector("#weekRewards"),["一","二","三","四","五","六","日"].map((w,_)=>`<span class="badge">${_<s.checkinDays.length?"✓":w}<br><small>+${_<5?10+_*5:25} XP</small></span>`).join("")),ce(r.querySelector('[data-page="quests"] aside .card:nth-child(1)'),`<h3>我的任务进度</h3><div class="big-number">${b}%</div><div class="meter"><div class="fill" style="--w:${b}%"></div></div><p>完成 ${g}/${f.length} 个任务</p><small>${Hl[i]}：${p}/${o.length}</small>`),ce(r.querySelector('[data-page="quests"] aside .card:nth-child(3)'),`<h3>任务小贴士</h3><p>${P0(i)}</p><div class="mini-buddy"></div>`),ce(r.querySelector('[data-page="quests"] aside .card:nth-child(4)'),`<h3>本周任务总览</h3><div class="donut" data-label="${g}/${f.length}\\A 已完成"></div><p>${S?"每日建议已全部点亮，额外奖励已入账。":"今天再点亮一个小任务，就很不错啦。"}</p>`)}function E0(r,i,s){const o=mr(r).find(p=>p.id===i);if(!o)return;const d=oa(r);if(d.has(i)){Ve(s,"这个任务已经领取过啦");return}if(d.add(i),L0(r,d),ke.getState().addPoints(o.reward),Ve(s,`+${o.reward} XP · ${o.title}`),r==="daily"){const p=mr("daily");p.length>0&&p.every(f=>d.has(f.id))&&localStorage.getItem(Qt().taskBonusKey())!=="1"&&(localStorage.setItem(Qt().taskBonusKey(),"1"),ke.getState().addPoints(10),Ve(s,"每日建议全完成，额外 +10 XP"))}}function _0(){const r=Qt();localStorage.removeItem(r.taskKey()),localStorage.removeItem(r.taskBonusKey()),Dn.forEach(i=>localStorage.removeItem(r.questProgressKey(i)))}function C0(){const r=Dn.flatMap(mr).length;return{done:Dn.reduce((s,o)=>s+oa(o).size,0),total:r}}function mr(r){const i=Qt();return r!=="daily"?w0[r]:i.getSuggestions().map((s,o)=>({id:`daily-${o}`,category:"daily",icon:["💧","🌙","🥗","🖐","🚶"][o]||"✨",title:s,description:o===0?"来自 AI 的轻量建议":"完成后给小发球增加一点能量",target:"0/1",reward:o===0?5:2,actionLabel:"去完成"}))}function oa(r){try{const i=new Set(JSON.parse(localStorage.getItem(Qt().questProgressKey(r))||"[]"));return r==="daily"&&i.size===0&&T0().forEach(s=>i.add(`daily-${s}`)),i}catch{return new Set}}function Rc(r){return Dn.includes(r)}function R0(r,i){return`<div class="item"><span style="font-size:26px">${r.icon}</span><b>${O(r.title)}<small>${O(r.description)}</small></b><span>${i?"1/1":O(r.target)}</span><button data-quest-category="${r.category}" data-quest-id="${r.id}" class="quest-btn ${i?"done":""}">${i?"✓ 已领取":O(r.actionLabel)}</button></div>`}function $0(r,i,s,o){const d=r==="daily"?10:Math.max(20,s*10),p=i>=s;return`<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>${r==="daily"?o?"今日建议全部完成！":"完成所有每日任务可获得额外奖励！":`${Hl[r]}完成度 ${i}/${s}`}<small>${p?"小发球已经收到这份能量。":"慢慢来，完成一个也算数。"}</small></b><span>+${d} XP</span><button class="quest-btn done">${p?"已点亮":"未完成"}</button></div>`}function P0(r){return{daily:"今天不用做到满分，挑一个最容易的小任务开始就很好。",weekly:"周任务适合拆成几天完成，记录、休息和放松都算成长。",growth:"成长任务会长期保留，像养小发球一样一点点解锁。",special:"特别任务偏活动和社交，主打轻松参与，不制造压力。"}[r]}function L0(r,i){if(localStorage.setItem(Qt().questProgressKey(r),JSON.stringify([...i])),r==="daily"){const s=[...i].map(o=>Number(o.replace("daily-",""))).filter(o=>Number.isFinite(o));localStorage.setItem(Qt().taskKey(),JSON.stringify(s))}}function T0(){try{return new Set(JSON.parse(localStorage.getItem(Qt().taskKey())||"[]"))}catch{return new Set}}function Qt(){if(!Bl)throw new Error("quest controller is not configured");return Bl}const He="/rewards-assets/",O0=[{name:"樱花发箍",subtitle:"Lv.3 解锁",points:2e3,image:`${He}reward-flower.png`,locked:!0,unlockId:"sakura"},{name:"星光泡泡发型",subtitle:"Lv.5 解锁",points:3500,image:`${He}reward-starlight.png`,locked:!0,unlockId:"star"},{name:"生发精华液 30ml",subtitle:"实物好物",points:4800,image:`${He}reward-serum.png`},{name:"治愈蘑菇帽",subtitle:"Lv.6 解锁",points:2800,image:`${He}reward-healing.png`,locked:!0},{name:"护发礼盒套装",subtitle:"实物好物",points:6500,image:`${He}reward-gift.png`},{name:"蒲公英小夜灯",subtitle:"限量周边",points:3200,image:`${He}reward-lamp.png`,locked:!0},{name:"嫩芽发型",subtitle:"Lv.4 解锁",points:2500,image:`${He}reward-sprout.png`,locked:!0,unlockId:"sprout"},{name:"头皮按摩梳",subtitle:"实物好物",points:4200,image:`${He}reward-brush.png`},{name:"银河披风",subtitle:"Lv.7 解锁",points:5e3,image:`${He}reward-cape.png`,locked:!0},{name:"7天特权卡",subtitle:"成长特权",points:8e3,image:`${He}reward-vip.png`}],z0=[{level:"Lv.1",status:"已领取",image:`${He}reward-sprout.png`,active:!0},{level:"Lv.2",status:"已领取",image:`${He}reward-flower.png`,active:!0},{level:"Lv.3",status:"可领取",image:`${He}reward-gift.png`,active:!0},{level:"Lv.4",status:"差 420 XP",image:`${He}reward-healing.png`,active:!1},{level:"Lv.5",status:"未解锁",image:`${He}reward-starlight.png`,active:!1}],N0=[{name:"樱花发箍",date:"2026-07-15",points:"-2,000 XP",status:"已兑换",image:`${He}reward-flower.png`},{name:"护发礼盒",date:"2026-07-12",points:"-6,500 XP",status:"配送中",image:`${He}reward-gift.png`},{name:"头皮按摩梳",date:"2026-07-08",points:"-4,200 XP",status:"已完成",image:`${He}reward-brush.png`}];function A0(r){const i=ke.getState();cp(r),r.querySelectorAll("[data-rewards-points]").forEach(s=>{s.textContent=i.points.toLocaleString("en-US")}),ce(r.querySelector("#shop"),O0.map(s=>`<button class="reward-card" type="button" ${s.unlockId&&In.some(d=>d.id===s.unlockId)?`data-unlock-id="${O(s.unlockId)}"`:""}>
      <div class="reward-image-wrap">
        <img src="${O(s.image)}" alt="${O(s.name)}">
        ${s.locked?'<span class="lock-icon">⌕</span>':""}
      </div>
      <div class="reward-copy">
        <strong>${O(s.name)}</strong>
        <span>${O(s.subtitle)}</span>
        <b>${s.points.toLocaleString("en-US")} XP</b>
      </div>
    </button>`).join("")),ce(r.querySelector("#rewardsGrowth"),z0.map(s=>`
    <button type="button" class="growth-reward ${s.active?"active":""}">
      <img src="${O(s.image)}" alt="${O(s.level)} 奖励">
      <strong>${O(s.level)}</strong>
      <span>${O(s.status)}</span>
    </button>
  `).join("")),ce(r.querySelector("#rewardsRecords"),N0.map(s=>`
    <div class="record-item">
      <img src="${O(s.image)}" alt="${O(s.name)}">
      <div><strong>${O(s.name)}</strong><span>${O(s.date)}</span></div>
      <div><b>${O(s.points)}</b><small>${O(s.status)}</small></div>
    </div>
  `).join(""))}const I0=["排行榜","我的联盟","好友排行","段位晋升"];function D0(r,i="排行榜"){r.querySelectorAll("[data-league-tab]").forEach(s=>{s.classList.toggle("active",s.dataset.leagueTab===i)}),ce(r.querySelector("#leagueRankContent"),j0(i))}function vp(){const r=ke.getState();return[{rank:1,name:"Luna",level:"Lv.6",note:"头发是生命的种子 🌱",points:28760,tier:"王者 I",tierTone:"gold",trend:"↑ 1",trendTone:"up",avatarSrc:"/league-avatars/luna.png",isMe:!1},{rank:2,name:"Mia",level:"Lv.5",note:"每天进步 1% ✨",points:25480,tier:"王者 II",tierTone:"gold",trend:"↓ 1",trendTone:"down",avatarSrc:"/league-avatars/mia.png",isMe:!1},{rank:3,name:"Ray",level:"Lv.5",note:"慢慢来，比较更重要 💜",points:22140,tier:"钻石 I",tierTone:"purple",trend:"—",trendTone:"flat",avatarSrc:"/league-avatars/ray.png",isMe:!1},{rank:4,name:"Sophia",level:"Lv.5",note:"关注头皮，从现在开始",points:18900,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:"/league-avatars/sophia.png",isMe:!1},{rank:5,name:"Bella",level:"Lv.4",note:"保持心情愉悦～",points:16520,tier:"铂金 I",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:"/league-avatars/bella.png",isMe:!1},{rank:6,name:"Aria",level:"Lv.4",note:"爱自己，从发起 ❤️",points:15320,tier:"铂金 II",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:"/league-avatars/aria.png",isMe:!1},{rank:12,name:"You",level:"Lv.5",note:r.checkinDays.length?`${r.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！",points:Math.max(r.points,12360),tier:"钻石 III",tierTone:"purple",trend:"↑ 3",trendTone:"up",avatarSrc:"/league-avatars/you.png",isMe:!0}]}function j0(r){return r==="我的联盟"?F0():r==="好友排行"?U0():r==="段位晋升"?H0():M0()}function M0(){return`
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
        <div class="table-body">${vp().map(bp).join("")}</div>
        <div class="refresh-note">◷ 每 10 分钟更新一次</div>
      </div>
    </div>
  `}function F0(){const r=[["联盟等级","Lv.6","距离 Lv.7 还需 740 XP","58%"],["本周任务","12 / 18","今日新增 3 个可完成任务","67%"],["成员活跃","28 / 30","5 位成员连续打卡超过 7 天","86%"]],i=[["Luna","队长","8,420 XP"],["Mia","副队长","7,860 XP"],["Ray","活跃成员","6,980 XP"],["You","成长成员","3,260 XP"]];return`
    <div class="league-mock-grid alliance-mock">
      ${r.map(([s,o,d,p])=>`
        <section class="league-mock-card">
          <span>${O(s)}</span>
          <b>${O(o)}</b>
          <p>${O(d)}</p>
          <div class="league-mock-progress"><i style="width:${O(p)}"></i></div>
        </section>
      `).join("")}
      <section class="league-mock-card wide">
        <div class="league-mock-title"><b>联盟成员贡献</b></div>
        <div class="league-mini-list">
          ${i.map(([s,o,d])=>`<div><span class="avatar-dot"></span><b>${O(s)}<small>${O(o)}</small></b><strong>${O(d)}</strong></div>`).join("")}
        </div>
      </section>
    </div>
  `}function U0(){return`
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${[{rank:1,name:"Nora",level:"Lv.5",note:"睡眠打卡稳定",points:20680,tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:"",isMe:!1},{rank:2,name:"Echo",level:"Lv.4",note:"本周完成 9 个任务",points:18440,tier:"铂金 I",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:"",isMe:!1},{rank:3,name:"June",level:"Lv.4",note:"护发建议执行率 86%",points:17210,tier:"铂金 II",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:"",isMe:!1},{rank:7,name:"You",level:"Lv.5",note:"一起变好呀！",points:12360,tier:"钻石 III",tierTone:"purple",trend:"↑ 1",trendTone:"up",avatarSrc:"/league-avatars/you.png",isMe:!0}].map(bp).join("")}</div>
      <div class="refresh-note">好友排行为 mock 数据，后续接入好友关系后替换</div>
    </div>
  `}function H0(){return`
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <b>钻石 III</b>
        <p>保持任务完成率，并在本周获得 380 XP 可晋升至钻石 II。</p>
        <div class="league-mock-progress"><i style="width:62%"></i></div>
      </section>
      <section class="league-tier-road">
        ${[["青铜","完成第一次扫描",!0],["白银","累计 3 天记录",!0],["黄金","完成 8 个护发任务",!0],["铂金","连续打卡 7 天",!0],["钻石 III","当前段位 · 620 / 1000 XP",!0],["钻石 II","再获得 380 XP 解锁",!1],["钻石 I","进入联盟前 20%",!1],["王者","赛季前 3 名",!1]].map(([i,s,o])=>`
          <div class="${o?"done":""}">
            <span>${o?"✓":"·"}</span>
            <b>${O(String(i))}<small>${O(String(s))}</small></b>
          </div>
        `).join("")}
      </section>
    </div>
  `}function bp(r){const i=r.isMe?"you-rank":r.rank===1?"gold":r.rank===2?"silver":r.rank===3?"bronze":"normal",s=r.tierTone==="gold"?"king":r.tierTone==="purple"?"diamond":"platinum";return`
    <div class="league-ranking-row ${r.isMe?"current-user":""}" role="row">
      <div class="rank-cell" role="cell"><span class="rank-badge ${i}">${r.rank}</span></div>
      <div class="player-cell" role="cell">
        ${r.avatarSrc?`<img class="league-avatar" src="${O(r.avatarSrc)}" alt="${O(r.name)} 的头像">`:'<span class="avatar-dot"></span>'}
        <div class="player-copy">
          <div class="player-name">${O(r.name)} <span class="level">${O(r.level)}</span>${r.isMe?'<span class="mini-crown" title="当前用户">●</span>':""}</div>
          <div class="motto">${O(r.note)}</div>
        </div>
      </div>
      <div class="tier-cell" role="cell">
        <span class="tier-emblem ${s}" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2.3 16 5l4.7.8-.8 4.7 1.7 4.5-4.2 2.3L15 21.6 12 19l-3 2.6-2.4-4.3L2.4 15l1.7-4.5-.8-4.7L8 5l4-2.7Z"/><path class="tier-star" d="m12 7.2 1.35 2.74 3.03.44-2.19 2.13.52 3.02L12 14.1l-2.71 1.43.52-3.02-2.19-2.13 3.03-.44L12 7.2Z"/></svg>
        </span>
        <span>${O(r.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${r.points.toLocaleString("en-US")} XP</div>
      <div class="trend-cell ${r.trendTone}" role="cell">${O(r.trend)}</div>
    </div>
  `}const Hn=()=>new Date().toISOString().slice(0,10),B0=()=>`diaoleme-prototype-tasks-${Hn()}`,q0=()=>`diaoleme-prototype-task-bonus-${Hn()}`,W0=r=>`diaoleme-prototype-quest-progress-${r}-${Hn()}`,X0=["all","happy","calm","anxious","tired"],V0=r=>X0.includes(r),xp=["关注","最新","热门","精华"],Q0=r=>xp.includes(r),wp="diaoleme-community-user-posts";function K0(){const r=Nl.useRef(null);return Nl.useEffect(()=>{let i=document.getElementById("diaoleme-prototype-style");i||(i=document.createElement("style"),i.id="diaoleme-prototype-style",document.head.appendChild(i)),i.textContent=`${u0}
${by}`;let s=()=>{};return r.current&&(r.current.innerHTML=l0,new Function(o0)(),s=J0(r.current)),()=>{s(),r.current&&(r.current.innerHTML="")}},[]),zl.jsx("div",{ref:r})}function J0(r){k0({getSuggestions:_p,taskKey:B0,taskBonusKey:q0,questProgressKey:W0});let i="daily",s="排行榜",o="最新",d="all",p=6;const f=()=>Y0(r,i,s,o,d,p),g=v0(r,{renderStatefulSections:f}),b=hy(r);f();const S=ke.subscribe(f);Ah(20).then(_=>{_.length&&ke.getState().mergeRemoteHistory(_)});const w=_=>{var j,Z,M;const $=_.target,D=$.closest("[data-quest-category]"),H=$.closest("[data-league-tab]"),F=$.closest("[data-community-tab]"),R=$.closest("[data-diary-mood]"),P=$.closest('[data-action="diary-load-more"]'),N=$.closest("[data-quest-id]"),q=$.closest('[data-action="checkin"]'),B=$.closest("[data-unlock-id]"),ae=$.closest("[data-view-report]"),X=$.closest("[data-view-day]"),de=$.closest("[data-share-report]"),ee=$.closest("[data-go]"),ie=$.closest('[data-action="reset-progress"]'),G=$.closest("[data-scan-record-page]"),le=$.closest('[data-action="journey-share"]'),we=$.closest('[data-action="share-to-community"]'),Le=$.closest('[data-action="open-journey"]'),be=$.closest("[data-buddy-action]"),Be=$.closest("#guideBtn"),_e=$.closest("[data-post-like]"),he=$.closest("[data-post-comments]");if((ee==null?void 0:ee.dataset.go)==="scan"&&!ae&&Cc(r),D!=null&&D.dataset.questCategory&&Rc(D.dataset.questCategory)&&(i=D.dataset.questCategory,f()),H!=null&&H.dataset.leagueTab&&I0.includes(H.dataset.leagueTab)&&(s=H.dataset.leagueTab,f(),Ve(r,`已切换至${s}`)),F!=null&&F.dataset.communityTab&&Q0(F.dataset.communityTab)&&(o=F.dataset.communityTab,f(),Ve(r,`已切换至${o}`)),R!=null&&R.dataset.diaryMood&&V0(R.dataset.diaryMood)&&(d=R.dataset.diaryMood,p=6,f(),Ve(r,d==="all"?"已显示全部日记":`已筛选：${(j=R.textContent)==null?void 0:j.trim()}`)),P&&(p+=6,f()),N!=null&&N.dataset.questId&&N.dataset.questCategory&&Rc(N.dataset.questCategory)&&(E0(N.dataset.questCategory,N.dataset.questId,r),f()),q&&(ke.getState().markCheckinToday(),f()),B){const y=In.find(L=>L.id===B.dataset.unlockId);if(y){const L=ke.getState().unlockedHairStyles.includes(y.id),te=ke.getState().unlockHairStyle(y.id,y.cost);te&&pp(y.id),Ve(r,te?`${L?"已换上":"已解锁并换上"} ${y.name}`:`积分还差 ${y.cost-ke.getState().points}`),f()}}if(ae!=null&&ae.dataset.viewReport){ke.getState().viewReport(ae.dataset.viewReport),zn(r,"scan"),Ul(r,_c()),Ve(r,"已打开这份扫描报告");return}if(X!=null&&X.dataset.viewDay){ke.getState().viewDayReport(X.dataset.viewDay),zn(r,"scan"),Ul(r,_c()),Ve(r,"已打开当天最新报告");return}if(de!=null&&de.dataset.shareReport){const y=Pc({reportId:de.dataset.shareReport});if(!y.ok){Ve(r,y.message);return}o="最新",zn(r,"community"),f(),Ve(r,y.message);return}if(G!=null&&G.dataset.scanRecordPage&&(r.dataset.scanRecordPage=G.dataset.scanRecordPage,yp(r)),ie&&confirm("重置所有进度、积分、打卡和历史记录？")&&(ke.getState().resetAll(),_0(),Cc(r),f()),Be||le||we){const y=Pc();if(!y.ok){Ve(r,y.message);return}o="最新",zn(r,"community"),f(),Ve(r,y.message);return}if(Le&&zn(r,"journey"),_e!=null&&_e.dataset.postLike&&(py(_e.dataset.postLike),Sp(r,o)),he!=null&&he.dataset.postComments){const y=r.querySelector(`[data-comments-extra-for="${he.dataset.postComments}"]`);if(y){const L=!y.classList.contains("collapsed");y.classList.toggle("collapsed",L);const te=Number(((M=(Z=he.textContent)==null?void 0:Z.match(/\d+/))==null?void 0:M[0])||0);he.textContent=L?`💬 ${te} · 展开`:`💬 ${te} · 收起`}}be!=null&&be.dataset.buddyAction&&(c0(be.dataset.buddyAction,r,Hn),f())};return document.addEventListener("click",w),()=>{g(),b(),S(),document.removeEventListener("click",w)}}function Y0(r,i="daily",s="排行榜",o="最新",d="all",p=6){G0(r),d0(r,{avgScore:vy,buildTrendBars:hp,getQuestCount:C0,todayKey:Hn}),S0(r,i),yp(r),iy(r,d,p),Sp(r,o),A0(r),D0(r,s),yy(r)}function G0(r){const i=ke.getState();ce(r.querySelector(".compact-quests"),_p().slice(0,4).map((o,d)=>`<div class="item" style="grid-template-columns:34px 1fr auto"><span>${["💧","🌙","🥗","🖐"][d]||"✨"}</span><b>${O(o)}</b><span class="status">+${d===0?5:2} XP</span></div>`).join("")),ce(r.querySelector(".small-leaders"),vp().slice(0,4).map(o=>`<div class="leader ${o.isMe?"you":""}" style="grid-template-columns:34px 1fr auto"><span class="badge">${o.rank}</span><b>${O(o.name)}</b><span>${o.points} XP</span></div>`).join(""));const s=r.querySelectorAll('[data-page="home"] .stats .badge, [data-page="home"] .badge');s[0]&&(s[0].textContent=`${i.points} XP`)}function Z0(r){return r>=75?{key:"happy",label:"开心",emoji:"😊"}:r>=60?{key:"calm",label:"平静",emoji:"🧘"}:r>=45?{key:"anxious",label:"焦虑",emoji:"😟"}:{key:"tired",label:"疲惫",emoji:"😫"}}function ey(r,i){const s=i[0]||"";return/按摩|护理|头皮/.test(s)?{emoji:"🪮",tone:"mint"}:/睡眠|早睡|放松/.test(s)?{emoji:"🌙",tone:"lavender"}:/运动|打卡|坚持/.test(s)?{emoji:"🌱",tone:"sprout"}:r==="happy"?{emoji:"✨",tone:"sunny"}:r==="calm"?{emoji:"🍃",tone:"mint"}:r==="anxious"?{emoji:"💭",tone:"cloud"}:{emoji:"🕯️",tone:"warm"}}function ty(r,i){const s=r[0];if(r.length===1)return s.title;const o=r.reduce((d,p)=>p.score>d.score?p:d,s);return i>=75?`今天整体挺稳：${o.title}`:i<50?`今天先温柔一点：${s.title}`:`今日小结（${r.length} 次记录）：${s.title}`}function ny(r,i){const s=r[0],o=[s.summary];r.length>1?o.push(`这一天共整理了 ${r.length} 次 Scan，平均状态分 ${i}。`):o.push(`状态分 ${i}，掉发量 ${s.count}。`);const d=s.suggestions[0]||s.daily_task;return d&&o.push(`轻任务：${d}`),o.join(" ")}function ry(r){const i=mp(r);return Object.keys(i).sort((s,o)=>o.localeCompare(s)).map(s=>{const o=[...i[s]].sort((g,b)=>b.id.localeCompare(g.id)),d=Math.round(o.reduce((g,b)=>g+b.score,0)/o.length),p=Z0(d),f=ey(p.key,o.flatMap(g=>g.tags));return{date:s,reports:o,score:d,mood:p,title:ty(o,d),snippet:ny(o,d),thumbEmoji:f.emoji,thumbTone:f.tone,primaryReportId:o[0].id}})}function ay(r){const i={happy:0,calm:0,anxious:0,tired:0};r.forEach(o=>{i[o.mood.key]+=1});const s=r.length||1;return{counts:i,percents:{happy:Math.round(i.happy/s*100),calm:Math.round(i.calm/s*100),anxious:Math.round(i.anxious/s*100),tired:Math.round(i.tired/s*100)}}}function iy(r,i="all",s=6){const o=ke.getState().reportHistory,d=ry(o),p=i==="all"?d:d.filter(N=>N.mood.key===i),f=p.slice(0,s),g=d[0],b=sy(o),S=ay(d),w=(g==null?void 0:g.mood)||{label:"平静",emoji:"🧘"};ce(r.querySelector('[data-page="diary"] .card.hero'),`
    <div>
      <h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2>
      <p>每一根头发都在努力生长，你也是！日记会把每天的 Scan 报告收成一篇 blog 小结。</p>
      <div class="diary-hero-meta">
        <button class="pill primary" type="button">${w.emoji} ${w.label}</button>
        <span class="badge">${g?$c(g.date):"等待第一篇"}</span>
      </div>
      <p class="diary-hero-advice"><b>智能建议：</b>${O(b)}</p>
    </div>
    <div class="buddy-stage" style="min-height:220px"><div class="ground"></div><div class="buddy" style="transform:scale(.5)"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div></div>
  `),ce(r.querySelector("#calendar"),fy(o)),ce(r.querySelector("#diaryMoodFilters"),[["all","全部"],["happy","😊 开心"],["calm","🧘 平静"],["anxious","😟 焦虑"],["tired","😫 疲惫"]].map(([N,q])=>`<button class="pill ${i===N?"primary":""}" data-diary-mood="${N}">${q}</button>`).join(""));const _=S.percents.happy,$=_+S.percents.calm,D=$+S.percents.anxious,H=r.querySelector("#diaryMoodDonut");H&&(H.dataset.label=`${d.length}
篇日记`,H.style.background=d.length?`conic-gradient(#8b5cf6 0 ${_}%, #65c982 ${_}% ${$}%, #f59e0b ${$}% ${D}%, #c4b5fd ${D}% 100%)`:"conic-gradient(#e8e4f8 0 100%)"),ce(r.querySelector("#diaryMoodLegend"),`<span>😊 ${S.percents.happy}%</span><span>🧘 ${S.percents.calm}%</span><span>😟 ${S.percents.anxious}%</span><span>😫 ${S.percents.tired}%</span>`),ce(r.querySelector("#diaryFeedTitle"),`共 ${p.length} 篇日记`),ce(r.querySelector("#diaries"),f.length?f.map(N=>{const q=N.date.slice(8),B=Number(N.date.slice(5,7));return`<article class="diary-entry" data-view-day="${O(N.date)}" role="button" tabindex="0">
            <div class="diary-entry-date"><b>${O(q)}</b><small>${B}月</small></div>
            <div class="diary-entry-main">
              <div class="diary-mood-pill">${N.mood.emoji} ${N.mood.label}</div>
              <h4>${O(N.title)}</h4>
              <p>${O(N.snippet)}</p>
              <div class="diary-entry-meta"><span>${N.reports.length} 次报告</span><span>${N.score} 分</span></div>
            </div>
            <div class="diary-entry-thumb tone-${O(N.thumbTone)}" aria-hidden="true">${N.thumbEmoji}</div>
            <button class="diary-entry-more" type="button" data-view-report="${O(N.primaryReportId)}" title="查看当天报告">⋯</button>
          </article>`}).join(""):`<div class="diary-empty"><span>📖</span><b>${i==="all"?"还没有日记":"这个心情还没有日记"}<small>${i==="all"?"去 Scan 完成一次上传后，这里会按天整理成 blog 小结。":"换个心情筛选，或继续记录新的一天。"}</small></b><button class="pill primary" data-go="scan">去上传今天的记录</button></div>`);const F=r.querySelector("#diaryLoadMore");F&&(F.hidden=p.length<=f.length,F.textContent=`加载更多日记（还有 ${Math.max(p.length-f.length,0)} 篇）`);const R=gy(o);ce(r.querySelector("#diaryTrendCard"),`<h3>心情趋势</h3><p>${O(g?`${$c(g.date)} · ${g.mood.emoji} ${g.mood.label}`:"完成记录后显示趋势")}</p><div class="chart">${R.map(N=>`<span class="bar" style="height:${N}%"></span>`).join("")}</div>`),ce(r.querySelector('[data-page="diary"] .word-cloud'),`<h3>关键词统计</h3>${my(o)}`);const P=d.find(N=>N.mood.key==="happy")||d[d.length-1];ce(r.querySelector("#diaryMemoryCard"),P?`<h3>回忆精选</h3><div class="reward-art diary-memory-thumb tone-${O(P.thumbTone)}">${P.thumbEmoji}</div><b>${O(P.title)}</b><p>${O(P.snippet)}</p><button class="pill" data-view-day="${O(P.date)}">回看这一天</button>`:'<h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>完成第一次 Scan 后，这里会展示值得回看的一天。</p><button class="pill primary" data-go="scan">去记录</button>')}function $c(r){const i=new Date(`${r}T12:00:00`);if(Number.isNaN(i.getTime()))return r;const s=["周日","周一","周二","周三","周四","周五","周六"][i.getDay()];return`${Number(r.slice(5,7))}月${Number(r.slice(8))}日 · ${s}`}function sy(r){const i=r[0],s=r[1];if(!i)return"先完成一次 Scan，让小发球有第一条记录可以陪你观察变化。";const o=s?i.score-s.score:0,d=i.count==="偏多"?"今天先把目标放轻一点，选一个早睡或放松任务就够了":i.count==="少量"?"状态看起来比较轻松，可以继续保持记录节奏":"保持温和观察，不需要给自己额外压力",p=i.tags[0]?`这次标签是“${i.tags[0]}”，`:"",f=i.suggestions[0]||i.daily_task||"睡前做 2 分钟放松呼吸";return o>=8?`${p}比上次提升明显，建议延续今天的做法：${f}。${d}。`:o<=-8?`${p}这次分数有点回落，建议先不做判断，只保留一条轻量动作：${f}。${d}。`:i.score>=75?`${p}整体比较稳定，今天适合做“巩固局”：${f}，然后明天继续对比趋势。`:i.score<55?`${p}今天先走温柔路线，不追求立刻变好；完成“${f}”就算达标。`:`${p}变化不大就是好信号，建议继续轻量打卡：${f}。${d}。`}const ly=[{id:"checkin7",name:"小蒲公英",level:"Lv.6",body:"今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～",media:"📋",likes:128,comments:["我也在做 7 天挑战，一起坚持！","这种轻松记录真的比焦虑刷帖舒服。","打卡第七天太有成就感了！"],tag:"连续打卡",createdAt:Date.now()-1e3*60*60*26,featured:!0,following:!0},{id:"massage",name:"爱吃草莓",level:"Lv.4",body:"分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。",media:"🪮",likes:96,comments:["求一个手法教程！","睡前按摩 + 早睡，感觉小发球都开心了。"],tag:"头皮护理",createdAt:Date.now()-1e3*60*60*8,featured:!1,following:!0},{id:"slowday",name:"薄荷味的风",level:"Lv.6",body:"最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。",media:"🌿",likes:76,comments:["抱抱，先把记录坚持下来就很棒。","今天也给自己一点松弛感。"],tag:"情绪放松",createdAt:Date.now()-1e3*60*60*3,featured:!0,following:!1},{id:"rewardhair",name:"向日葵",level:"Lv.3",body:"新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！",media:"🌱",likes:143,comments:["这个发型也太可爱了！","奖励机制好有动力，我也要攒 XP。"],tag:"成长奖励",createdAt:Date.now()-1e3*60*60*50,featured:!0,following:!1}];function oy(r){return r>=4e3?"Lv.7":r>=3e3?"Lv.6":r>=2e3?"Lv.5":r>=1200?"Lv.4":r>=600?"Lv.3":r>=200?"Lv.2":"Lv.1"}function kp(){try{const r=JSON.parse(localStorage.getItem(wp)||"[]");return Array.isArray(r)?r.filter(i=>i&&typeof i.id=="string"&&typeof i.body=="string"):[]}catch{return[]}}function uy(r){localStorage.setItem(wp,JSON.stringify(r.slice(0,40)))}function dy(){return[...kp(),...ly]}function cy(r){const i=dy();return r==="关注"?i.filter(s=>s.following||s.fromJourney).sort((s,o)=>o.createdAt-s.createdAt):r==="热门"?[...i].sort((s,o)=>o.likes-s.likes||o.createdAt-s.createdAt):r==="精华"?i.filter(s=>s.featured).sort((s,o)=>o.likes-s.likes):[...i].sort((s,o)=>o.createdAt-s.createdAt)}function Pc(r){const i=ke.getState(),s=r!=null&&r.reportId?i.reportHistory.find(p=>p.id===r.reportId):i.reportHistory[0];if(!s)return{ok:!1,message:"还没有 Journey 记录，先去 Scan 完成一次上传吧"};const o=kp();if(o.some(p=>p.reportId===s.id))return{ok:!0,message:"这份旅程已经分享过啦，已帮你打开社区最新流"};const d={id:`journey-${Date.now().toString(36)}`,name:"我",level:oy(i.points),body:r!=null&&r.reportId?`从 Journey 分享：${s.title}（${s.score} 分）。${s.summary}`:`分享我的护发旅程：打卡 ${i.checkinDays.length} 天，累计 ${i.reportHistory.length} 次记录。最近一次是「${s.title}」${s.score} 分，${s.summary}`,media:"✨",likes:0,comments:["欢迎分享旅程，我们一起轻松记录～"],tag:s.tags[0]||"旅程分享",createdAt:Date.now(),featured:!1,following:!0,fromJourney:!0,reportId:s.id};return uy([d,...o]),{ok:!0,message:"已分享到 Community，可以在「最新 / 关注」里看到"}}function Sp(r,i="最新"){const s=Ep();ce(r.querySelector("#communityTabs")||r.querySelector('[data-page="community"] .tabs'),xp.map(d=>`<button class="pill ${d===i?"primary":""}" data-community-tab="${d}">${d}</button>`).join(""));const o=cy(i);ce(r.querySelector("#posts"),o.length?o.map(d=>{const p=s.has(d.id),f=d.likes+(p?1:0),g=d.comments[0],b=d.comments.slice(1),S=g?`<div class="comments" data-comments-for="${O(d.id)}"><div class="comment"><b>${d.fromJourney?"小发球":"发友"}：</b>${O(g)}</div>${b.length?`<div class="comments-extra collapsed" data-comments-extra-for="${O(d.id)}">${b.map((w,_)=>`<div class="comment"><b>${_%2===0?"发友":"小发球"}：</b>${O(w)}</div>`).join("")}</div>`:""}</div>`:"";return`<div class="post community-post"><div class="mini-buddy"></div><div><b>${O(d.name)} <span class="badge">${O(d.level)}</span>${d.fromJourney?'<span class="badge">Journey</span>':""}</b><p>${O(d.body)}</p><span class="badge"># ${O(d.tag)}</span><div class="community-actions"><button class="pill ${p?"primary":""}" data-post-like="${O(d.id)}">💜 ${f}</button><button class="pill" data-post-comments="${O(d.id)}">💬 ${d.comments.length}${b.length?" · 展开":""}</button><button class="pill">☆ 收藏</button></div>${S}</div><div class="post-media">${O(d.media)}</div></div>`}).join(""):`<div class="item journey-empty"><span>🌱</span><b>${i}还没有内容<small>去 Journey 分享一次旅程，或切换其他 Tab 看看。</small></b><button class="pill primary" data-action="share-to-community">分享我的旅程</button></div>`)}function Ep(){try{return new Set(JSON.parse(localStorage.getItem("diaoleme-community-likes")||"[]"))}catch{return new Set}}function py(r){const i=Ep();i.has(r)?i.delete(r):i.add(r),localStorage.setItem("diaoleme-community-likes",JSON.stringify([...i]))}function fy(r){const i=new Map;r.forEach(b=>{i.has(b.date)||i.set(b.date,b)});const s=new Date,o=s.getFullYear(),d=s.getMonth(),p=new Date(o,d,1).getDay(),f=new Date(o,d+1,0).getDate(),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(b=>`<span>${b}</span>`);for(let b=0;b<p;b+=1)g.push("<span></span>");for(let b=1;b<=f;b+=1){const S=`${o}-${String(d+1).padStart(2,"0")}-${String(b).padStart(2,"0")}`,w=i.get(S),_=w?"selected diary-record-day":S===Hn()?"today":"",$=w?` class="${_}" data-view-day="${O(S)}" role="button" tabindex="0" title="${w.score} 分 ${O(w.title)}"`:` class="${_}"`;g.push(`<span${$}>${b}${w?"<small>•</small>":""}</span>`)}return g.join("")}function gy(r){const i=r.slice(0,9).reverse().map(s=>s.score);return i.length?i.map(s=>Math.max(18,Math.min(100,s))):[36,42,52,46,60,55,66]}function my(r){const i=r.flatMap(o=>o.tags).slice(0,8);return(i.length?i:["护理","轻松记录","睡眠","心情","头皮按摩","坚持"]).map((o,d)=>{const p=[28,14,58,42,66,24,50,72][d%8],f=[36,58,34,70,60,42,50,76][d%8],g=[34,26,20,18,16,22,15,17][d%8];return`<span style="left:${p}%;top:${f}%;font-size:${g}px">${O(o)}</span>`}).join("")}function hy(r){const i=document.createElement("div");i.className="ai-chat-widget",i.innerHTML=`
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手">🌱<span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `,r.appendChild(i);const s=i.querySelector(".ai-chat-bubble"),o=i.querySelector("[data-chat-form]"),d=i.querySelector("[data-chat-input]"),p=i.querySelector("[data-chat-messages]"),f=i.querySelector("[data-chat-close]"),g=[{role:"assistant",content:"你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。"}];let b=!1,S=!1,w=0,_=0,$=0,D=0;const H="正在思考一个轻松、不焦虑的回答...",F=()=>{p.innerHTML=g.map(X=>`<div class="ai-chat-msg ${X.role}">${O(X.content)}</div>`).join(""),p.scrollTop=p.scrollHeight},R=X=>{i.classList.toggle("open",X??!i.classList.contains("open")),i.classList.contains("open")&&d.focus()},P=X=>{if(i.classList.contains("open"))return;b=!0,S=!1,w=X.clientX,_=X.clientY;const de=i.getBoundingClientRect();$=de.left,D=de.top,s.setPointerCapture(X.pointerId)},N=X=>{if(!b)return;const de=X.clientX-w,ee=X.clientY-_;Math.abs(de)+Math.abs(ee)>6&&(S=!0);const ie=Math.max(12,Math.min(window.innerWidth-i.offsetWidth-12,$+de)),G=Math.max(12,Math.min(window.innerHeight-i.offsetHeight-12,D+ee));i.style.left=`${ie}px`,i.style.top=`${G}px`,i.style.right="auto",i.style.bottom="auto"},q=X=>{b=!1,s.hasPointerCapture(X.pointerId)&&s.releasePointerCapture(X.pointerId)},B=()=>{S||R(!0)},ae=async X=>{X.preventDefault();const de=d.value.trim();if(de){d.value="",g.push({role:"user",content:de},{role:"assistant",content:H}),F();try{const ee=zh(ke.getState().reportHistory,5),ie=g.filter(le=>!(le.role==="assistant"&&le.content===H)).slice(-8),G=await Nh(ie,{reportContext:ee});g[g.length-1]={role:"assistant",content:G.reply}}catch{g[g.length-1]={role:"assistant",content:"我这边暂时没有连上 AI 服务，先给你一个小建议：今天先完成一次记录，再选一个最轻量的任务。"}}F()}};return F(),s.addEventListener("pointerdown",P),s.addEventListener("pointermove",N),s.addEventListener("pointerup",q),s.addEventListener("click",B),f.addEventListener("click",()=>R(!1)),o.addEventListener("submit",ae),()=>{s.removeEventListener("pointerdown",P),s.removeEventListener("pointermove",N),s.removeEventListener("pointerup",q),s.removeEventListener("click",B),o.removeEventListener("submit",ae),i.remove()}}function yy(r){const i=ke.getState(),s=i.checkinDays.includes(Hn());ce(r.querySelector("#streak"),["一","二","三","四","五","六","日"].map((o,d)=>`<span class="badge">${d<Math.min(i.checkinDays.length,6)?"✓":d===6?"🎁":o}<br><small>${o}</small></span>`).join("")),ce(r.querySelector("#checkin"),["一","二","三","四","五","六","日"].map((o,d)=>`<span class="badge">${d<Math.min(i.checkinDays.length,6)?"✓":d===6?"🎁":o}<br><small>${o}</small></span>`).join("")+`<button class="pill ${s?"":"primary"}" data-action="checkin">${s?"今日已打卡":"今日打卡 +5"}</button><button class="pill" data-action="reset-progress">重置</button>`)}function _p(){const r=ke.getState().suggestions;return r.length?r:["上传一张照片生成专属建议","今晚提前 30 分钟休息","洗头时水温尽量温和"]}function vy(r){return r.length?Math.round(r.reduce((i,s)=>i+s.score,0)/r.length):null}const by=`
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
  .community-post { align-items: flex-start; grid-template-columns: 56px 1fr 90px; }
  .community-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
  .comments { display: grid; gap: 8px; margin-top: 12px; }
  .comments.collapsed { display: none; }
  .comments-extra { display: grid; gap: 8px; }
  .comments-extra.collapsed { display: none; }
  .comment { border-radius: 16px; padding: 10px 12px; background: rgba(255,255,255,.68); color: #65709e; font-size: 14px; }
  .ai-chat-widget { position: fixed; right: 28px; bottom: 28px; z-index: 40; font-family: inherit; }
  .ai-chat-bubble { display: flex; align-items: center; gap: 8px; border: 0; border-radius: 999px; padding: 14px 18px; background: linear-gradient(135deg,#8b5cf6,#65c982); color: #fff; box-shadow: 0 20px 55px rgba(99,75,168,.32); cursor: grab; font-weight: 900; }
  .ai-chat-bubble:active { cursor: grabbing; }
  .ai-chat-panel { display: none; width: min(360px, calc(100vw - 32px)); height: 520px; overflow: hidden; border: 1px solid rgba(255,255,255,.75); border-radius: 28px; background: rgba(255,250,255,.96); box-shadow: 0 26px 80px rgba(19,32,95,.22); }
  .ai-chat-widget.open .ai-chat-bubble { display: none; }
  .ai-chat-widget.open .ai-chat-panel { display: grid; grid-template-rows: auto 1fr auto; }
  .ai-chat-header { display: grid; grid-template-columns: 1fr auto; gap: 2px 12px; padding: 16px 18px; background: linear-gradient(135deg,rgba(139,92,246,.18),rgba(101,201,130,.18)); }
  .ai-chat-header small { color: #65709e; }
  .ai-chat-header button { grid-row: 1 / span 2; grid-column: 2; border: 0; border-radius: 50%; width: 30px; height: 30px; background: #fff; color: #13205f; cursor: pointer; }
  .ai-chat-messages { display: flex; flex-direction: column; gap: 10px; overflow: auto; padding: 16px; }
  .ai-chat-msg { max-width: 82%; border-radius: 18px; padding: 10px 12px; line-height: 1.5; white-space: pre-wrap; }
  .ai-chat-msg.assistant { align-self: flex-start; background: #fff; color: #13205f; }
  .ai-chat-msg.user { align-self: flex-end; background: #8b5cf6; color: #fff; }
  .ai-chat-form { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 14px; border-top: 1px solid rgba(101,112,158,.14); }
  .ai-chat-form input { min-width: 0; border: 1px solid rgba(101,112,158,.2); border-radius: 999px; padding: 12px 14px; outline: none; }
  .ai-chat-form button { border: 0; border-radius: 999px; padding: 0 16px; background: #65c982; color: #fff; font-weight: 900; cursor: pointer; }

`;Og.createRoot(document.getElementById("root")).render(zl.jsx(la.StrictMode,{children:zl.jsx(K0,{})}));
