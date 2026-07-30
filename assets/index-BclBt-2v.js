(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(d){if(d.ep)return;d.ep=!0;const u=i(d);fetch(d.href,u)}})();function $p(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vo={exports:{}},gr={},Qo={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function $m(){if(Tu)return xe;Tu=1;var a=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.iterator;function $(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,A={};function S(k,N,ce){this.props=k,this.context=N,this.refs=A,this.updater=ce||T}S.prototype.isReactComponent={},S.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function E(){}E.prototype=S.prototype;function M(k,N,ce){this.props=k,this.context=N,this.refs=A,this.updater=ce||T}var z=M.prototype=new E;z.constructor=M,P(z,S.prototype),z.isPureReactComponent=!0;var j=Array.isArray,W=Object.prototype.hasOwnProperty,F={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ie(k,N,ce){var fe,be={},Y=null,ve=null;if(N!=null)for(fe in N.ref!==void 0&&(ve=N.ref),N.key!==void 0&&(Y=""+N.key),N)W.call(N,fe)&&!oe.hasOwnProperty(fe)&&(be[fe]=N[fe]);var ke=arguments.length-2;if(ke===1)be.children=ce;else if(1<ke){for(var Se=Array(ke),De=0;De<ke;De++)Se[De]=arguments[De+2];be.children=Se}if(k&&k.defaultProps)for(fe in ke=k.defaultProps,ke)be[fe]===void 0&&(be[fe]=ke[fe]);return{$$typeof:a,type:k,key:Y,ref:ve,props:be,_owner:F.current}}function V(k,N){return{$$typeof:a,type:k.type,key:N,ref:k.ref,props:k.props,_owner:k._owner}}function K(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function se(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return N[ce]})}var te=/\/+/g;function ue(k,N){return typeof k=="object"&&k!==null&&k.key!=null?se(""+k.key):N.toString(36)}function pe(k,N,ce,fe,be){var Y=typeof k;(Y==="undefined"||Y==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(Y){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case a:case r:ve=!0}}if(ve)return ve=k,be=be(ve),k=fe===""?"."+ue(ve,0):fe,j(be)?(ce="",k!=null&&(ce=k.replace(te,"$&/")+"/"),pe(be,N,ce,"",function(De){return De})):be!=null&&(K(be)&&(be=V(be,ce+(!be.key||ve&&ve.key===be.key?"":(""+be.key).replace(te,"$&/")+"/")+k)),N.push(be)),1;if(ve=0,fe=fe===""?".":fe+":",j(k))for(var ke=0;ke<k.length;ke++){Y=k[ke];var Se=fe+ue(Y,ke);ve+=pe(Y,N,ce,Se,be)}else if(Se=$(k),typeof Se=="function")for(k=Se.call(k),ke=0;!(Y=k.next()).done;)Y=Y.value,Se=fe+ue(Y,ke++),ve+=pe(Y,N,ce,Se,be);else if(Y==="object")throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ve}function Z(k,N,ce){if(k==null)return k;var fe=[],be=0;return pe(k,fe,"","",function(Y){return N.call(ce,Y,be++)}),fe}function we(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var ye={current:null},B={transition:null},ae={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function H(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Z,forEach:function(k,N,ce){Z(k,function(){N.apply(this,arguments)},ce)},count:function(k){var N=0;return Z(k,function(){N++}),N},toArray:function(k){return Z(k,function(N){return N})||[]},only:function(k){if(!K(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xe.Component=S,xe.Fragment=i,xe.Profiler=d,xe.PureComponent=M,xe.StrictMode=l,xe.Suspense=m,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,xe.act=H,xe.cloneElement=function(k,N,ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var fe=P({},k.props),be=k.key,Y=k.ref,ve=k._owner;if(N!=null){if(N.ref!==void 0&&(Y=N.ref,ve=F.current),N.key!==void 0&&(be=""+N.key),k.type&&k.type.defaultProps)var ke=k.type.defaultProps;for(Se in N)W.call(N,Se)&&!oe.hasOwnProperty(Se)&&(fe[Se]=N[Se]===void 0&&ke!==void 0?ke[Se]:N[Se])}var Se=arguments.length-2;if(Se===1)fe.children=ce;else if(1<Se){ke=Array(Se);for(var De=0;De<Se;De++)ke[De]=arguments[De+2];fe.children=ke}return{$$typeof:a,type:k.type,key:be,ref:Y,props:fe,_owner:ve}},xe.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:u,_context:k},k.Consumer=k},xe.createElement=ie,xe.createFactory=function(k){var N=ie.bind(null,k);return N.type=k,N},xe.createRef=function(){return{current:null}},xe.forwardRef=function(k){return{$$typeof:f,render:k}},xe.isValidElement=K,xe.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:we}},xe.memo=function(k,N){return{$$typeof:y,type:k,compare:N===void 0?null:N}},xe.startTransition=function(k){var N=B.transition;B.transition={};try{k()}finally{B.transition=N}},xe.unstable_act=H,xe.useCallback=function(k,N){return ye.current.useCallback(k,N)},xe.useContext=function(k){return ye.current.useContext(k)},xe.useDebugValue=function(){},xe.useDeferredValue=function(k){return ye.current.useDeferredValue(k)},xe.useEffect=function(k,N){return ye.current.useEffect(k,N)},xe.useId=function(){return ye.current.useId()},xe.useImperativeHandle=function(k,N,ce){return ye.current.useImperativeHandle(k,N,ce)},xe.useInsertionEffect=function(k,N){return ye.current.useInsertionEffect(k,N)},xe.useLayoutEffect=function(k,N){return ye.current.useLayoutEffect(k,N)},xe.useMemo=function(k,N){return ye.current.useMemo(k,N)},xe.useReducer=function(k,N,ce){return ye.current.useReducer(k,N,ce)},xe.useRef=function(k){return ye.current.useRef(k)},xe.useState=function(k){return ye.current.useState(k)},xe.useSyncExternalStore=function(k,N,ce){return ye.current.useSyncExternalStore(k,N,ce)},xe.useTransition=function(){return ye.current.useTransition()},xe.version="18.3.1",xe}var Pu;function Cl(){return Pu||(Pu=1,Qo.exports=$m()),Qo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Rm(){if(Au)return gr;Au=1;var a=Cl(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,y){var b,_={},$=null,T=null;y!==void 0&&($=""+y),m.key!==void 0&&($=""+m.key),m.ref!==void 0&&(T=m.ref);for(b in m)l.call(m,b)&&!u.hasOwnProperty(b)&&(_[b]=m[b]);if(f&&f.defaultProps)for(b in m=f.defaultProps,m)_[b]===void 0&&(_[b]=m[b]);return{$$typeof:r,type:f,key:$,ref:T,props:_,_owner:d.current}}return gr.Fragment=i,gr.jsx=p,gr.jsxs=p,gr}var Mu;function Tm(){return Mu||(Mu=1,Vo.exports=Rm()),Vo.exports}var dl=Tm(),cl=Cl();const yr=$p(cl);var Ns={},Ko={exports:{}},ut={},Yo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Pm(){return Nu||(Nu=1,(function(a){function r(B,ae){var H=B.length;B.push(ae);e:for(;0<H;){var k=H-1>>>1,N=B[k];if(0<d(N,ae))B[k]=ae,B[H]=N,H=k;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var ae=B[0],H=B.pop();if(H!==ae){B[0]=H;e:for(var k=0,N=B.length,ce=N>>>1;k<ce;){var fe=2*(k+1)-1,be=B[fe],Y=fe+1,ve=B[Y];if(0>d(be,H))Y<N&&0>d(ve,be)?(B[k]=ve,B[Y]=H,k=Y):(B[k]=be,B[fe]=H,k=fe);else if(Y<N&&0>d(ve,H))B[k]=ve,B[Y]=H,k=Y;else break e}}return ae}function d(B,ae){var H=B.sortIndex-ae.sortIndex;return H!==0?H:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();a.unstable_now=function(){return p.now()-f}}var m=[],y=[],b=1,_=null,$=3,T=!1,P=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(B){for(var ae=i(y);ae!==null;){if(ae.callback===null)l(y);else if(ae.startTime<=B)l(y),ae.sortIndex=ae.expirationTime,r(m,ae);else break;ae=i(y)}}function j(B){if(A=!1,z(B),!P)if(i(m)!==null)P=!0,we(W);else{var ae=i(y);ae!==null&&ye(j,ae.startTime-B)}}function W(B,ae){P=!1,A&&(A=!1,E(ie),ie=-1),T=!0;var H=$;try{for(z(ae),_=i(m);_!==null&&(!(_.expirationTime>ae)||B&&!se());){var k=_.callback;if(typeof k=="function"){_.callback=null,$=_.priorityLevel;var N=k(_.expirationTime<=ae);ae=a.unstable_now(),typeof N=="function"?_.callback=N:_===i(m)&&l(m),z(ae)}else l(m);_=i(m)}if(_!==null)var ce=!0;else{var fe=i(y);fe!==null&&ye(j,fe.startTime-ae),ce=!1}return ce}finally{_=null,$=H,T=!1}}var F=!1,oe=null,ie=-1,V=5,K=-1;function se(){return!(a.unstable_now()-K<V)}function te(){if(oe!==null){var B=a.unstable_now();K=B;var ae=!0;try{ae=oe(!0,B)}finally{ae?ue():(F=!1,oe=null)}}else F=!1}var ue;if(typeof M=="function")ue=function(){M(te)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Z=pe.port2;pe.port1.onmessage=te,ue=function(){Z.postMessage(null)}}else ue=function(){S(te,0)};function we(B){oe=B,F||(F=!0,ue())}function ye(B,ae){ie=S(function(){B(a.unstable_now())},ae)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){P||T||(P=!0,we(W))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return $},a.unstable_getFirstCallbackNode=function(){return i(m)},a.unstable_next=function(B){switch($){case 1:case 2:case 3:var ae=3;break;default:ae=$}var H=$;$=ae;try{return B()}finally{$=H}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var H=$;$=B;try{return ae()}finally{$=H}},a.unstable_scheduleCallback=function(B,ae,H){var k=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?k+H:k):H=k,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=H+N,B={id:b++,callback:ae,priorityLevel:B,startTime:H,expirationTime:N,sortIndex:-1},H>k?(B.sortIndex=H,r(y,B),i(m)===null&&B===i(y)&&(A?(E(ie),ie=-1):A=!0,ye(j,H-k))):(B.sortIndex=N,r(m,B),P||T||(P=!0,we(W))),B},a.unstable_shouldYield=se,a.unstable_wrapCallback=function(B){var ae=$;return function(){var H=$;$=ae;try{return B.apply(this,arguments)}finally{$=H}}}})(Go)),Go}var Ou;function Am(){return Ou||(Ou=1,Yo.exports=Pm()),Yo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Mm(){if(zu)return ut;zu=1;var a=Cl(),r=Am();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,d={};function u(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(d[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function $(e){return m.call(_,e)?!0:m.call(b,e)?!1:y.test(e)?_[e]=!0:(b[e]=!0,!1)}function T(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,n,s){if(t===null||typeof t>"u"||T(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,s,o,c,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=g}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,M);S[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,M);S[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,M);S[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,t,n,s){var o=S.hasOwnProperty(t)?S[t]:null;(o!==null?o.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,n,o,s)&&(n=null),s||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,s=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var j=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),F=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),se=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,k;function N(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ce=!1;function fe(e,t){if(!e||ce)return"";ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var s=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){s=R}e.call(t.prototype)}else{try{throw Error()}catch(R){s=R}e()}}catch(R){if(R&&s&&typeof R.stack=="string"){for(var o=R.stack.split(`
`),c=s.stack.split(`
`),g=o.length-1,h=c.length-1;1<=g&&0<=h&&o[g]!==c[h];)h--;for(;1<=g&&0<=h;g--,h--)if(o[g]!==c[h]){if(g!==1||h!==1)do if(g--,h--,0>h||o[g]!==c[h]){var v=`
`+o[g].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=g&&0<=h);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function be(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case F:return"Portal";case V:return"Profiler";case ie:return"StrictMode";case ue:return"Suspense";case pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ke(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=Se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){s=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=De(e))}function nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Se(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ot(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zt(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function me(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=ke(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function G(e,t){t=t.checked,t!=null&&z(e,"checked",t,!1)}function $e(e,t){G(e,t);var n=ke(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Lt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Lt(e,t.type,ke(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ft(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Lt(e,t,n){(t!=="number"||Ot(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ra=Array.isArray;function sa(e,t,n,s){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ke(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ql(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(ra(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ke(n)}}function Fl(e,t){var n=ke(t.value),s=ke(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ul(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Hl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Xl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Wl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,o=Xl(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,o):e[n]=o}}var Ag=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Ag[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Va=null,Qa=null;function Vl(e){if(e=Jn(e)){if(typeof li!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Kr(t),li(e.stateNode,e.type,t))}}function Ql(e){Va?Qa?Qa.push(e):Qa=[e]:Va=e}function Kl(){if(Va){var e=Va,t=Qa;if(Qa=Va=null,Vl(e),t)for(e=0;e<t.length;e++)Vl(t[e])}}function Yl(e,t){return e(t)}function Gl(){}var di=!1;function Jl(e,t,n){if(di)return e(t,n);di=!0;try{return Yl(e,t,n)}finally{di=!1,(Va!==null||Qa!==null)&&(Gl(),Kl())}}function Pn(e,t){var n=e.stateNode;if(n===null)return null;var s=Kr(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var ci=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){ci=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ci=!1}function Mg(e,t,n,s,o,c,g,h,v){var R=Array.prototype.slice.call(arguments,3);try{t.apply(n,R)}catch(I){this.onError(I)}}var Mn=!1,Lr=null,$r=!1,ui=null,Ng={onError:function(e){Mn=!0,Lr=e}};function Og(e,t,n,s,o,c,g,h,v){Mn=!1,Lr=null,Mg.apply(Ng,arguments)}function zg(e,t,n,s,o,c,g,h,v){if(Og.apply(this,arguments),Mn){if(Mn){var R=Lr;Mn=!1,Lr=null}else throw Error(i(198));$r||($r=!0,ui=R)}}function _a(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ed(e){if(_a(e)!==e)throw Error(i(188))}function Dg(e){var t=e.alternate;if(!t){if(t=_a(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,s=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){n=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return ed(o),e;if(c===s)return ed(o),t;c=c.sibling}throw Error(i(188))}if(n.return!==s.return)n=o,s=c;else{for(var g=!1,h=o.child;h;){if(h===n){g=!0,n=o,s=c;break}if(h===s){g=!0,s=o,n=c;break}h=h.sibling}if(!g){for(h=c.child;h;){if(h===n){g=!0,n=c,s=o;break}if(h===s){g=!0,s=c,n=o;break}h=h.sibling}if(!g)throw Error(i(189))}}if(n.alternate!==s)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function td(e){return e=Dg(e),e!==null?ad(e):null}function ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ad(e);if(t!==null)return t;e=e.sibling}return null}var nd=r.unstable_scheduleCallback,rd=r.unstable_cancelCallback,Ig=r.unstable_shouldYield,jg=r.unstable_requestPaint,je=r.unstable_now,qg=r.unstable_getCurrentPriorityLevel,pi=r.unstable_ImmediatePriority,sd=r.unstable_UserBlockingPriority,Rr=r.unstable_NormalPriority,Fg=r.unstable_LowPriority,id=r.unstable_IdlePriority,Tr=null,Dt=null;function Ug(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Xg,Bg=Math.log,Hg=Math.LN2;function Xg(e){return e>>>=0,e===0?32:31-(Bg(e)/Hg|0)|0}var Pr=64,Ar=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,o=e.suspendedLanes,c=e.pingedLanes,g=n&268435455;if(g!==0){var h=g&~o;h!==0?s=Nn(h):(c&=g,c!==0&&(s=Nn(c)))}else g=n&~o,g!==0?s=Nn(g):c!==0&&(s=Nn(c));if(s===0)return 0;if(t!==0&&t!==s&&(t&o)===0&&(o=s&-s,c=t&-t,o>=c||o===16&&(c&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-$t(t),o=1<<n,s|=e[n],t&=~o;return s}function Wg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vg(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var g=31-$t(c),h=1<<g,v=o[g];v===-1?((h&n)===0||(h&s)!==0)&&(o[g]=Wg(h,t)):v<=t&&(e.expiredLanes|=h),c&=~h}}function gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function On(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function Qg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$t(n),c=1<<o;t[o]=0,s[o]=-1,e[o]=-1,n&=~c}}function mi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-$t(n),o=1<<s;o&t|e[s]&t&&(e[s]|=t),n&=~o}}var Le=0;function ld(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var dd,hi,cd,ud,pd,yi=!1,Nr=[],ia=null,oa=null,la=null,zn=new Map,Dn=new Map,da=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function In(e,t,n,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Jn(t),t!==null&&hi(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Yg(e,t,n,s,o){switch(t){case"focusin":return ia=In(ia,e,t,n,s,o),!0;case"dragenter":return oa=In(oa,e,t,n,s,o),!0;case"mouseover":return la=In(la,e,t,n,s,o),!0;case"pointerover":var c=o.pointerId;return zn.set(c,In(zn.get(c)||null,e,t,n,s,o)),!0;case"gotpointercapture":return c=o.pointerId,Dn.set(c,In(Dn.get(c)||null,e,t,n,s,o)),!0}return!1}function fd(e){var t=Ca(e.target);if(t!==null){var n=_a(t);if(n!==null){if(t=n.tag,t===13){if(t=Zl(n),t!==null){e.blockedOn=t,pd(e.priority,function(){cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ii=s,n.target.dispatchEvent(s),ii=null}else return t=Jn(n),t!==null&&hi(t),e.blockedOn=n,!1;t.shift()}return!0}function md(e,t,n){Or(e)&&n.delete(t)}function Gg(){yi=!1,ia!==null&&Or(ia)&&(ia=null),oa!==null&&Or(oa)&&(oa=null),la!==null&&Or(la)&&(la=null),zn.forEach(md),Dn.forEach(md)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,yi||(yi=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gg)))}function qn(e){function t(o){return jn(o,e)}if(0<Nr.length){jn(Nr[0],e);for(var n=1;n<Nr.length;n++){var s=Nr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(ia!==null&&jn(ia,e),oa!==null&&jn(oa,e),la!==null&&jn(la,e),zn.forEach(t),Dn.forEach(t),n=0;n<da.length;n++)s=da[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<da.length&&(n=da[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&da.shift()}var Ka=j.ReactCurrentBatchConfig,zr=!0;function Jg(e,t,n,s){var o=Le,c=Ka.transition;Ka.transition=null;try{Le=1,vi(e,t,n,s)}finally{Le=o,Ka.transition=c}}function Zg(e,t,n,s){var o=Le,c=Ka.transition;Ka.transition=null;try{Le=4,vi(e,t,n,s)}finally{Le=o,Ka.transition=c}}function vi(e,t,n,s){if(zr){var o=bi(e,t,n,s);if(o===null)zi(e,t,s,Dr,n),gd(e,s);else if(Yg(o,e,t,n,s))s.stopPropagation();else if(gd(e,s),t&4&&-1<Kg.indexOf(e)){for(;o!==null;){var c=Jn(o);if(c!==null&&dd(c),c=bi(e,t,n,s),c===null&&zi(e,t,s,Dr,n),c===o)break;o=c}o!==null&&s.stopPropagation()}else zi(e,t,s,null,n)}}var Dr=null;function bi(e,t,n,s){if(Dr=null,e=oi(s),e=Ca(e),e!==null)if(t=_a(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qg()){case pi:return 1;case sd:return 4;case Rr:case Fg:return 16;case id:return 536870912;default:return 16}default:return 16}}var ca=null,xi=null,Ir=null;function yd(){if(Ir)return Ir;var e,t=xi,n=t.length,s,o="value"in ca?ca.value:ca.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(s=1;s<=g&&t[n-s]===o[c-s];s++);return Ir=o.slice(e,1<s?1-s:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function vd(){return!1}function mt(e){function t(n,s,o,c,g){this._reactName=n,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?qr:vd,this.isPropagationStopped=vd,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=mt(Ya),Fn=H({},Ya,{view:0,detail:0}),ef=mt(Fn),ki,Si,Un,Fr=H({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ki=e.screenX-Un.screenX,Si=e.screenY-Un.screenY):Si=ki=0,Un=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),bd=mt(Fr),tf=H({},Fr,{dataTransfer:0}),af=mt(tf),nf=H({},Fn,{relatedTarget:0}),Ei=mt(nf),rf=H({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=mt(rf),of=H({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=mt(of),df=H({},Ya,{data:0}),xd=mt(df),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function _i(){return gf}var ff=H({},Fn,{key:function(e){if(e.key){var t=cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=mt(ff),hf=H({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=mt(hf),yf=H({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),vf=mt(yf),bf=H({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=mt(bf),wf=H({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=mt(wf),Sf=[9,13,27,32],Ci=f&&"CompositionEvent"in window,Bn=null;f&&"documentMode"in document&&(Bn=document.documentMode);var Ef=f&&"TextEvent"in window&&!Bn,kd=f&&(!Ci||Bn&&8<Bn&&11>=Bn),Sd=" ",Ed=!1;function _d(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function _f(e,t){switch(e){case"compositionend":return Cd(t);case"keypress":return t.which!==32?null:(Ed=!0,Sd);case"textInput":return e=t.data,e===Sd&&Ed?null:e;default:return null}}function Cf(e,t){if(Ga)return e==="compositionend"||!Ci&&_d(e,t)?(e=yd(),Ir=xi=ca=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function $d(e,t,n,s){Ql(s),t=Wr(t,"onChange"),0<t.length&&(n=new wi("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Hn=null,Xn=null;function $f(e){Wd(e,0)}function Ur(e){var t=an(e);if(nt(t))return e}function Rf(e,t){if(e==="change")return t}var Rd=!1;if(f){var Li;if(f){var $i="oninput"in document;if(!$i){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),$i=typeof Td.oninput=="function"}Li=$i}else Li=!1;Rd=Li&&(!document.documentMode||9<document.documentMode)}function Pd(){Hn&&(Hn.detachEvent("onpropertychange",Ad),Xn=Hn=null)}function Ad(e){if(e.propertyName==="value"&&Ur(Xn)){var t=[];$d(t,Xn,e,oi(e)),Jl($f,t)}}function Tf(e,t,n){e==="focusin"?(Pd(),Hn=t,Xn=n,Hn.attachEvent("onpropertychange",Ad)):e==="focusout"&&Pd()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(Xn)}function Af(e,t){if(e==="click")return Ur(t)}function Mf(e,t){if(e==="input"||e==="change")return Ur(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Nf;function Wn(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var o=n[s];if(!m.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Md(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Md(n)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=Ot();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ot(e.document)}return t}function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Of(e){var t=zd(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Od(n.ownerDocument.documentElement,n)){if(s!==null&&Ri(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,c=Math.min(s.start,o);s=s.end===void 0?c:Math.min(s.end,o),!e.extend&&c>s&&(o=s,s=c,c=o),o=Nd(n,c);var g=Nd(n,s);o&&g&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zf=f&&"documentMode"in document&&11>=document.documentMode,Ja=null,Ti=null,Vn=null,Pi=!1;function Dd(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pi||Ja==null||Ja!==Ot(s)||(s=Ja,"selectionStart"in s&&Ri(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vn&&Wn(Vn,s)||(Vn=s,s=Wr(Ti,"onSelect"),0<s.length&&(t=new wi("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Ja)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Za={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},Ai={},Id={};f&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function Hr(e){if(Ai[e])return Ai[e];if(!Za[e])return e;var t=Za[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return Ai[e]=t[n];return e}var jd=Hr("animationend"),qd=Hr("animationiteration"),Fd=Hr("animationstart"),Ud=Hr("transitionend"),Bd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ua(e,t){Bd.set(e,t),u(t,[e])}for(var Mi=0;Mi<Hd.length;Mi++){var Ni=Hd[Mi],Df=Ni.toLowerCase(),If=Ni[0].toUpperCase()+Ni.slice(1);ua(Df,"on"+If)}ua(jd,"onAnimationEnd"),ua(qd,"onAnimationIteration"),ua(Fd,"onAnimationStart"),ua("dblclick","onDoubleClick"),ua("focusin","onFocus"),ua("focusout","onBlur"),ua(Ud,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));function Xd(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,zg(s,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],o=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var g=s.length-1;0<=g;g--){var h=s[g],v=h.instance,R=h.currentTarget;if(h=h.listener,v!==c&&o.isPropagationStopped())break e;Xd(o,h,R),c=v}else for(g=0;g<s.length;g++){if(h=s[g],v=h.instance,R=h.currentTarget,h=h.listener,v!==c&&o.isPropagationStopped())break e;Xd(o,h,R),c=v}}}if($r)throw e=ui,$r=!1,ui=null,e}function Te(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var s=e+"__bubble";n.has(s)||(Vd(t,e,2,!1),n.add(s))}function Oi(e,t,n){var s=0;t&&(s|=4),Vd(n,e,s,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Xr]){e[Xr]=!0,l.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,Oi("selectionchange",!1,t))}}function Vd(e,t,n,s){switch(hd(t)){case 1:var o=Jg;break;case 4:o=Zg;break;default:o=vi}n=o.bind(null,t,n,e),o=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zi(e,t,n,s,o){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var h=s.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(g===4)for(g=s.return;g!==null;){var v=g.tag;if((v===3||v===4)&&(v=g.stateNode.containerInfo,v===o||v.nodeType===8&&v.parentNode===o))return;g=g.return}for(;h!==null;){if(g=Ca(h),g===null)return;if(v=g.tag,v===5||v===6){s=c=g;continue e}h=h.parentNode}}s=s.return}Jl(function(){var R=c,I=oi(n),q=[];e:{var D=Bd.get(e);if(D!==void 0){var Q=wi,ee=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":Q=mf;break;case"focusin":ee="focus",Q=Ei;break;case"focusout":ee="blur",Q=Ei;break;case"beforeblur":case"afterblur":Q=Ei;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=vf;break;case jd:case qd:case Fd:Q=sf;break;case Ud:Q=xf;break;case"scroll":Q=ef;break;case"wheel":Q=kf;break;case"copy":case"cut":case"paste":Q=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=wd}var ne=(t&4)!==0,qe=!ne&&e==="scroll",C=ne?D!==null?D+"Capture":null:D;ne=[];for(var w=R,L;w!==null;){L=w;var U=L.stateNode;if(L.tag===5&&U!==null&&(L=U,C!==null&&(U=Pn(w,C),U!=null&&ne.push(Yn(w,U,L)))),qe)break;w=w.return}0<ne.length&&(D=new Q(D,ee,null,n,I),q.push({event:D,listeners:ne}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",D&&n!==ii&&(ee=n.relatedTarget||n.fromElement)&&(Ca(ee)||ee[Wt]))break e;if((Q||D)&&(D=I.window===I?I:(D=I.ownerDocument)?D.defaultView||D.parentWindow:window,Q?(ee=n.relatedTarget||n.toElement,Q=R,ee=ee?Ca(ee):null,ee!==null&&(qe=_a(ee),ee!==qe||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Q=null,ee=R),Q!==ee)){if(ne=bd,U="onMouseLeave",C="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ne=wd,U="onPointerLeave",C="onPointerEnter",w="pointer"),qe=Q==null?D:an(Q),L=ee==null?D:an(ee),D=new ne(U,w+"leave",Q,n,I),D.target=qe,D.relatedTarget=L,U=null,Ca(I)===R&&(ne=new ne(C,w+"enter",ee,n,I),ne.target=L,ne.relatedTarget=qe,U=ne),qe=U,Q&&ee)t:{for(ne=Q,C=ee,w=0,L=ne;L;L=en(L))w++;for(L=0,U=C;U;U=en(U))L++;for(;0<w-L;)ne=en(ne),w--;for(;0<L-w;)C=en(C),L--;for(;w--;){if(ne===C||C!==null&&ne===C.alternate)break t;ne=en(ne),C=en(C)}ne=null}else ne=null;Q!==null&&Qd(q,D,Q,ne,!1),ee!==null&&qe!==null&&Qd(q,qe,ee,ne,!0)}}e:{if(D=R?an(R):window,Q=D.nodeName&&D.nodeName.toLowerCase(),Q==="select"||Q==="input"&&D.type==="file")var re=Rf;else if(Ld(D))if(Rd)re=Mf;else{re=Pf;var le=Tf}else(Q=D.nodeName)&&Q.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(re=Af);if(re&&(re=re(e,R))){$d(q,re,n,I);break e}le&&le(e,D,R),e==="focusout"&&(le=D._wrapperState)&&le.controlled&&D.type==="number"&&Lt(D,"number",D.value)}switch(le=R?an(R):window,e){case"focusin":(Ld(le)||le.contentEditable==="true")&&(Ja=le,Ti=R,Vn=null);break;case"focusout":Vn=Ti=Ja=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,Dd(q,n,I);break;case"selectionchange":if(zf)break;case"keydown":case"keyup":Dd(q,n,I)}var de;if(Ci)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ga?_d(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(kd&&n.locale!=="ko"&&(Ga||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ga&&(de=yd()):(ca=I,xi="value"in ca?ca.value:ca.textContent,Ga=!0)),le=Wr(R,ge),0<le.length&&(ge=new xd(ge,e,null,n,I),q.push({event:ge,listeners:le}),de?ge.data=de:(de=Cd(n),de!==null&&(ge.data=de)))),(de=Ef?_f(e,n):Cf(e,n))&&(R=Wr(R,"onBeforeInput"),0<R.length&&(I=new xd("onBeforeInput","beforeinput",null,n,I),q.push({event:I,listeners:R}),I.data=de))}Wd(q,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Pn(e,n),c!=null&&s.unshift(Yn(e,c,o)),c=Pn(e,t),c!=null&&s.push(Yn(e,c,o))),e=e.return}return s}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,n,s,o){for(var c=t._reactName,g=[];n!==null&&n!==s;){var h=n,v=h.alternate,R=h.stateNode;if(v!==null&&v===s)break;h.tag===5&&R!==null&&(h=R,o?(v=Pn(n,c),v!=null&&g.unshift(Yn(n,v,h))):o||(v=Pn(n,c),v!=null&&g.push(Yn(n,v,h)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var qf=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Kd(e){return(typeof e=="string"?e:""+e).replace(qf,`
`).replace(Ff,"")}function Vr(e,t,n){if(t=Kd(t),Kd(e)!==t&&n)throw Error(i(425))}function Qr(){}var Di=null,Ii=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qi=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(e){return Yd.resolve(null).then(e).catch(Hf)}:qi;function Hf(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,s=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(s===0){e.removeChild(o),qn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=o}while(n);qn(t)}function pa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tn=Math.random().toString(36).slice(2),It="__reactFiber$"+tn,Gn="__reactProps$"+tn,Wt="__reactContainer$"+tn,Ui="__reactEvents$"+tn,Xf="__reactListeners$"+tn,Wf="__reactHandles$"+tn;function Ca(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[It])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[It]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Kr(e){return e[Gn]||null}var Bi=[],nn=-1;function ga(e){return{current:e}}function Pe(e){0>nn||(e.current=Bi[nn],Bi[nn]=null,nn--)}function Re(e,t){nn++,Bi[nn]=e.current,e.current=t}var fa={},Ge=ga(fa),it=ga(!1),La=fa;function rn(e,t){var n=e.type.contextTypes;if(!n)return fa;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in n)o[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function Yr(){Pe(it),Pe(Ge)}function Jd(e,t,n){if(Ge.current!==fa)throw Error(i(168));Re(Ge,t),Re(it,n)}function Zd(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var o in s)if(!(o in t))throw Error(i(108,ve(e)||"Unknown",o));return H({},n,s)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fa,La=Ge.current,Re(Ge,e),Re(it,it.current),!0}function ec(e,t,n){var s=e.stateNode;if(!s)throw Error(i(169));n?(e=Zd(e,t,La),s.__reactInternalMemoizedMergedChildContext=e,Pe(it),Pe(Ge),Re(Ge,e)):Pe(it),Re(it,n)}var Vt=null,Jr=!1,Hi=!1;function tc(e){Vt===null?Vt=[e]:Vt.push(e)}function Vf(e){Jr=!0,tc(e)}function ma(){if(!Hi&&Vt!==null){Hi=!0;var e=0,t=Le;try{var n=Vt;for(Le=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Vt=null,Jr=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),nd(pi,ma),o}finally{Le=t,Hi=!1}}return null}var sn=[],on=0,Zr=null,es=0,xt=[],wt=0,$a=null,Qt=1,Kt="";function Ra(e,t){sn[on++]=es,sn[on++]=Zr,Zr=e,es=t}function ac(e,t,n){xt[wt++]=Qt,xt[wt++]=Kt,xt[wt++]=$a,$a=e;var s=Qt;e=Kt;var o=32-$t(s)-1;s&=~(1<<o),n+=1;var c=32-$t(t)+o;if(30<c){var g=o-o%5;c=(s&(1<<g)-1).toString(32),s>>=g,o-=g,Qt=1<<32-$t(t)+o|n<<o|s,Kt=c+e}else Qt=1<<c|n<<o|s,Kt=e}function Xi(e){e.return!==null&&(Ra(e,1),ac(e,1,0))}function Wi(e){for(;e===Zr;)Zr=sn[--on],sn[on]=null,es=sn[--on],sn[on]=null;for(;e===$a;)$a=xt[--wt],xt[wt]=null,Kt=xt[--wt],xt[wt]=null,Qt=xt[--wt],xt[wt]=null}var ht=null,yt=null,Me=!1,Tt=null;function nc(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,yt=pa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$a!==null?{id:Qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,yt=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(Me){var t=yt;if(t){var n=t;if(!rc(e,t)){if(Vi(e))throw Error(i(418));t=pa(n.nextSibling);var s=ht;t&&rc(e,t)?nc(s,n):(e.flags=e.flags&-4097|2,Me=!1,ht=e)}}else{if(Vi(e))throw Error(i(418));e.flags=e.flags&-4097|2,Me=!1,ht=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function ts(e){if(e!==ht)return!1;if(!Me)return sc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=yt)){if(Vi(e))throw ic(),Error(i(418));for(;t;)nc(e,t),t=pa(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=pa(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=ht?pa(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=yt;e;)e=pa(e.nextSibling)}function ln(){yt=ht=null,Me=!1}function Ki(e){Tt===null?Tt=[e]:Tt.push(e)}var Qf=j.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var s=n.stateNode}if(!s)throw Error(i(147,e));var o=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(g){var h=o.refs;g===null?delete h[c]:h[c]=g},t._stringRef=c,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function lc(e){function t(C,w){if(e){var L=C.deletions;L===null?(C.deletions=[w],C.flags|=16):L.push(w)}}function n(C,w){if(!e)return null;for(;w!==null;)t(C,w),w=w.sibling;return null}function s(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function o(C,w){return C=Sa(C,w),C.index=0,C.sibling=null,C}function c(C,w,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<w?(C.flags|=2,w):L):(C.flags|=2,w)):(C.flags|=1048576,w)}function g(C){return e&&C.alternate===null&&(C.flags|=2),C}function h(C,w,L,U){return w===null||w.tag!==6?(w=Fo(L,C.mode,U),w.return=C,w):(w=o(w,L),w.return=C,w)}function v(C,w,L,U){var re=L.type;return re===oe?I(C,w,L.props.children,U,L.key):w!==null&&(w.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===we&&oc(re)===w.type)?(U=o(w,L.props),U.ref=Zn(C,w,L),U.return=C,U):(U=Cs(L.type,L.key,L.props,null,C.mode,U),U.ref=Zn(C,w,L),U.return=C,U)}function R(C,w,L,U){return w===null||w.tag!==4||w.stateNode.containerInfo!==L.containerInfo||w.stateNode.implementation!==L.implementation?(w=Uo(L,C.mode,U),w.return=C,w):(w=o(w,L.children||[]),w.return=C,w)}function I(C,w,L,U,re){return w===null||w.tag!==7?(w=Da(L,C.mode,U,re),w.return=C,w):(w=o(w,L),w.return=C,w)}function q(C,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Fo(""+w,C.mode,L),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case W:return L=Cs(w.type,w.key,w.props,null,C.mode,L),L.ref=Zn(C,null,w),L.return=C,L;case F:return w=Uo(w,C.mode,L),w.return=C,w;case we:var U=w._init;return q(C,U(w._payload),L)}if(ra(w)||ae(w))return w=Da(w,C.mode,L,null),w.return=C,w;as(C,w)}return null}function D(C,w,L,U){var re=w!==null?w.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return re!==null?null:h(C,w,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case W:return L.key===re?v(C,w,L,U):null;case F:return L.key===re?R(C,w,L,U):null;case we:return re=L._init,D(C,w,re(L._payload),U)}if(ra(L)||ae(L))return re!==null?null:I(C,w,L,U,null);as(C,L)}return null}function Q(C,w,L,U,re){if(typeof U=="string"&&U!==""||typeof U=="number")return C=C.get(L)||null,h(w,C,""+U,re);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case W:return C=C.get(U.key===null?L:U.key)||null,v(w,C,U,re);case F:return C=C.get(U.key===null?L:U.key)||null,R(w,C,U,re);case we:var le=U._init;return Q(C,w,L,le(U._payload),re)}if(ra(U)||ae(U))return C=C.get(L)||null,I(w,C,U,re,null);as(w,U)}return null}function ee(C,w,L,U){for(var re=null,le=null,de=w,ge=w=0,Ve=null;de!==null&&ge<L.length;ge++){de.index>ge?(Ve=de,de=null):Ve=de.sibling;var Ce=D(C,de,L[ge],U);if(Ce===null){de===null&&(de=Ve);break}e&&de&&Ce.alternate===null&&t(C,de),w=c(Ce,w,ge),le===null?re=Ce:le.sibling=Ce,le=Ce,de=Ve}if(ge===L.length)return n(C,de),Me&&Ra(C,ge),re;if(de===null){for(;ge<L.length;ge++)de=q(C,L[ge],U),de!==null&&(w=c(de,w,ge),le===null?re=de:le.sibling=de,le=de);return Me&&Ra(C,ge),re}for(de=s(C,de);ge<L.length;ge++)Ve=Q(de,C,ge,L[ge],U),Ve!==null&&(e&&Ve.alternate!==null&&de.delete(Ve.key===null?ge:Ve.key),w=c(Ve,w,ge),le===null?re=Ve:le.sibling=Ve,le=Ve);return e&&de.forEach(function(Ea){return t(C,Ea)}),Me&&Ra(C,ge),re}function ne(C,w,L,U){var re=ae(L);if(typeof re!="function")throw Error(i(150));if(L=re.call(L),L==null)throw Error(i(151));for(var le=re=null,de=w,ge=w=0,Ve=null,Ce=L.next();de!==null&&!Ce.done;ge++,Ce=L.next()){de.index>ge?(Ve=de,de=null):Ve=de.sibling;var Ea=D(C,de,Ce.value,U);if(Ea===null){de===null&&(de=Ve);break}e&&de&&Ea.alternate===null&&t(C,de),w=c(Ea,w,ge),le===null?re=Ea:le.sibling=Ea,le=Ea,de=Ve}if(Ce.done)return n(C,de),Me&&Ra(C,ge),re;if(de===null){for(;!Ce.done;ge++,Ce=L.next())Ce=q(C,Ce.value,U),Ce!==null&&(w=c(Ce,w,ge),le===null?re=Ce:le.sibling=Ce,le=Ce);return Me&&Ra(C,ge),re}for(de=s(C,de);!Ce.done;ge++,Ce=L.next())Ce=Q(de,C,ge,Ce.value,U),Ce!==null&&(e&&Ce.alternate!==null&&de.delete(Ce.key===null?ge:Ce.key),w=c(Ce,w,ge),le===null?re=Ce:le.sibling=Ce,le=Ce);return e&&de.forEach(function(Lm){return t(C,Lm)}),Me&&Ra(C,ge),re}function qe(C,w,L,U){if(typeof L=="object"&&L!==null&&L.type===oe&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case W:e:{for(var re=L.key,le=w;le!==null;){if(le.key===re){if(re=L.type,re===oe){if(le.tag===7){n(C,le.sibling),w=o(le,L.props.children),w.return=C,C=w;break e}}else if(le.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===we&&oc(re)===le.type){n(C,le.sibling),w=o(le,L.props),w.ref=Zn(C,le,L),w.return=C,C=w;break e}n(C,le);break}else t(C,le);le=le.sibling}L.type===oe?(w=Da(L.props.children,C.mode,U,L.key),w.return=C,C=w):(U=Cs(L.type,L.key,L.props,null,C.mode,U),U.ref=Zn(C,w,L),U.return=C,C=U)}return g(C);case F:e:{for(le=L.key;w!==null;){if(w.key===le)if(w.tag===4&&w.stateNode.containerInfo===L.containerInfo&&w.stateNode.implementation===L.implementation){n(C,w.sibling),w=o(w,L.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else t(C,w);w=w.sibling}w=Uo(L,C.mode,U),w.return=C,C=w}return g(C);case we:return le=L._init,qe(C,w,le(L._payload),U)}if(ra(L))return ee(C,w,L,U);if(ae(L))return ne(C,w,L,U);as(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,w!==null&&w.tag===6?(n(C,w.sibling),w=o(w,L),w.return=C,C=w):(n(C,w),w=Fo(L,C.mode,U),w.return=C,C=w),g(C)):n(C,w)}return qe}var dn=lc(!0),dc=lc(!1),ns=ga(null),rs=null,cn=null,Yi=null;function Gi(){Yi=cn=rs=null}function Ji(e){var t=ns.current;Pe(ns),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function un(e,t){rs=e,Yi=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(rs===null)throw Error(i(308));cn=e,rs.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Ta=null;function eo(e){Ta===null?Ta=[e]:Ta.push(e)}function cc(e,t,n,s){var o=t.interleaved;return o===null?(n.next=n,eo(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,s)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ha=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ya(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(_e&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,Yt(e,n)}return o=s.interleaved,o===null?(t.next=t,eo(s)):(t.next=o.next,o.next=t),s.interleaved=t,Yt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,mi(e,n)}}function pc(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?o=c=g:c=c.next=g,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function is(e,t,n,s){var o=e.updateQueue;ha=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var v=h,R=v.next;v.next=null,g===null?c=R:g.next=R,g=v;var I=e.alternate;I!==null&&(I=I.updateQueue,h=I.lastBaseUpdate,h!==g&&(h===null?I.firstBaseUpdate=R:h.next=R,I.lastBaseUpdate=v))}if(c!==null){var q=o.baseState;g=0,I=R=v=null,h=c;do{var D=h.lane,Q=h.eventTime;if((s&D)===D){I!==null&&(I=I.next={eventTime:Q,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var ee=e,ne=h;switch(D=t,Q=n,ne.tag){case 1:if(ee=ne.payload,typeof ee=="function"){q=ee.call(Q,q,D);break e}q=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ne.payload,D=typeof ee=="function"?ee.call(Q,q,D):ee,D==null)break e;q=H({},q,D);break e;case 2:ha=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,D=o.effects,D===null?o.effects=[h]:D.push(h))}else Q={eventTime:Q,lane:D,tag:h.tag,payload:h.payload,callback:h.callback,next:null},I===null?(R=I=Q,v=q):I=I.next=Q,g|=D;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;D=h,h=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);if(I===null&&(v=q),o.baseState=v,o.firstBaseUpdate=R,o.lastBaseUpdate=I,t=o.shared.interleaved,t!==null){o=t;do g|=o.lane,o=o.next;while(o!==t)}else c===null&&(o.shared.lanes=0);Ma|=g,e.lanes=g,e.memoizedState=q}}function gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],o=s.callback;if(o!==null){if(s.callback=null,s=n,typeof o!="function")throw Error(i(191,o));o.call(s)}}}var er={},jt=ga(er),tr=ga(er),ar=ga(er);function Pa(e){if(e===er)throw Error(i(174));return e}function ao(e,t){switch(Re(ar,t),Re(tr,e),Re(jt,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}Pe(jt),Re(jt,t)}function pn(){Pe(jt),Pe(tr),Pe(ar)}function fc(e){Pa(ar.current);var t=Pa(jt.current),n=ni(t,e.type);t!==n&&(Re(tr,e),Re(jt,n))}function no(e){tr.current===e&&(Pe(jt),Pe(tr))}var Oe=ga(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=[];function so(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var ls=j.ReactCurrentDispatcher,io=j.ReactCurrentBatchConfig,Aa=0,ze=null,Be=null,Xe=null,ds=!1,nr=!1,rr=0,Kf=0;function Je(){throw Error(i(321))}function oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function lo(e,t,n,s,o,c){if(Aa=c,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?Zf:em,e=n(s,o),nr){c=0;do{if(nr=!1,rr=0,25<=c)throw Error(i(301));c+=1,Xe=Be=null,t.updateQueue=null,ls.current=tm,e=n(s,o)}while(nr)}if(ls.current=ps,t=Be!==null&&Be.next!==null,Aa=0,Xe=Be=ze=null,ds=!1,t)throw Error(i(300));return e}function co(){var e=rr!==0;return rr=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ze.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function St(){if(Be===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Xe===null?ze.memoizedState:Xe.next;if(t!==null)Xe=t,Be=e;else{if(e===null)throw Error(i(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Xe===null?ze.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function sr(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=St(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=Be,o=s.baseQueue,c=n.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}s.baseQueue=o=c,n.pending=null}if(o!==null){c=o.next,s=s.baseState;var h=g=null,v=null,R=c;do{var I=R.lane;if((Aa&I)===I)v!==null&&(v=v.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),s=R.hasEagerState?R.eagerState:e(s,R.action);else{var q={lane:I,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};v===null?(h=v=q,g=s):v=v.next=q,ze.lanes|=I,Ma|=I}R=R.next}while(R!==null&&R!==c);v===null?g=s:v.next=h,Rt(s,t.memoizedState)||(lt=!0),t.memoizedState=s,t.baseState=g,t.baseQueue=v,n.lastRenderedState=s}if(e=n.interleaved,e!==null){o=e;do c=o.lane,ze.lanes|=c,Ma|=c,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function po(e){var t=St(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do c=e(c,g.action),g=g.next;while(g!==o);Rt(c,t.memoizedState)||(lt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function mc(){}function hc(e,t){var n=ze,s=St(),o=t(),c=!Rt(s.memoizedState,o);if(c&&(s.memoizedState=o,lt=!0),s=s.queue,go(bc.bind(null,n,s,e),[e]),s.getSnapshot!==t||c||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,ir(9,vc.bind(null,n,s,o,t),void 0,null),We===null)throw Error(i(349));(Aa&30)!==0||yc(n,t,o)}return o}function yc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vc(e,t,n,s){t.value=n,t.getSnapshot=s,xc(t)&&wc(e)}function bc(e,t,n){return n(function(){xc(t)&&wc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function wc(e){var t=Yt(e,1);t!==null&&Nt(t,e,1,-1)}function kc(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jf.bind(null,ze,e),[t.memoizedState,e]}function ir(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Sc(){return St().memoizedState}function cs(e,t,n,s){var o=qt();ze.flags|=e,o.memoizedState=ir(1|t,n,void 0,s===void 0?null:s)}function us(e,t,n,s){var o=St();s=s===void 0?null:s;var c=void 0;if(Be!==null){var g=Be.memoizedState;if(c=g.destroy,s!==null&&oo(s,g.deps)){o.memoizedState=ir(t,n,c,s);return}}ze.flags|=e,o.memoizedState=ir(1|t,n,c,s)}function Ec(e,t){return cs(8390656,8,e,t)}function go(e,t){return us(2048,8,e,t)}function _c(e,t){return us(4,2,e,t)}function Cc(e,t){return us(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,n){return n=n!=null?n.concat([e]):null,us(4,4,Lc.bind(null,t,e),n)}function fo(){}function Rc(e,t){var n=St();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&oo(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=St();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&oo(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return(Aa&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(Rt(n,t)||(n=od(),ze.lanes|=n,Ma|=n,e.baseState=!0),t)}function Yf(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var s=io.transition;io.transition={};try{e(!1),t()}finally{Le=n,io.transition=s}}function Ac(){return St().memoizedState}function Gf(e,t,n){var s=wa(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Mc(e))Nc(t,n);else if(n=cc(e,t,n,s),n!==null){var o=st();Nt(n,e,s,o),Oc(n,t,s)}}function Jf(e,t,n){var s=wa(e),o={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Nc(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var g=t.lastRenderedState,h=c(g,n);if(o.hasEagerState=!0,o.eagerState=h,Rt(h,g)){var v=t.interleaved;v===null?(o.next=o,eo(t)):(o.next=v.next,v.next=o),t.interleaved=o;return}}catch{}finally{}n=cc(e,t,o,s),n!==null&&(o=st(),Nt(n,e,s,o),Oc(n,t,s))}}function Mc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Nc(e,t){nr=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oc(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,mi(e,n)}}var ps={readContext:kt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Zf={readContext:kt,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cs(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return cs(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=qt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Gf.bind(null,ze,e),[s.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:kc,useDebugValue:fo,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=kc(!1),t=e[0];return e=Yf.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=ze,o=qt();if(Me){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),We===null)throw Error(i(349));(Aa&30)!==0||yc(s,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,Ec(bc.bind(null,s,c,e),[e]),s.flags|=2048,ir(9,vc.bind(null,s,c,n,t),void 0,null),n},useId:function(){var e=qt(),t=We.identifierPrefix;if(Me){var n=Kt,s=Qt;n=(s&~(1<<32-$t(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},em={readContext:kt,useCallback:Rc,useContext:kt,useEffect:go,useImperativeHandle:$c,useInsertionEffect:_c,useLayoutEffect:Cc,useMemo:Tc,useReducer:uo,useRef:Sc,useState:function(){return uo(sr)},useDebugValue:fo,useDeferredValue:function(e){var t=St();return Pc(t,Be.memoizedState,e)},useTransition:function(){var e=uo(sr)[0],t=St().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:Ac,unstable_isNewReconciler:!1},tm={readContext:kt,useCallback:Rc,useContext:kt,useEffect:go,useImperativeHandle:$c,useInsertionEffect:_c,useLayoutEffect:Cc,useMemo:Tc,useReducer:po,useRef:Sc,useState:function(){return po(sr)},useDebugValue:fo,useDeferredValue:function(e){var t=St();return Be===null?t.memoizedState=e:Pc(t,Be.memoizedState,e)},useTransition:function(){var e=po(sr)[0],t=St().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:Ac,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mo(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?_a(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=st(),o=wa(e),c=Gt(s,o);c.payload=t,n!=null&&(c.callback=n),t=ya(e,c,o),t!==null&&(Nt(t,e,o,s),ss(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=st(),o=wa(e),c=Gt(s,o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=ya(e,c,o),t!==null&&(Nt(t,e,o,s),ss(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),s=wa(e),o=Gt(n,s);o.tag=2,t!=null&&(o.callback=t),t=ya(e,o,s),t!==null&&(Nt(t,e,s,n),ss(t,e,s))}};function zc(e,t,n,s,o,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,g):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,s)||!Wn(o,c):!0}function Dc(e,t,n){var s=!1,o=fa,c=t.contextType;return typeof c=="object"&&c!==null?c=kt(c):(o=ot(t)?La:Ge.current,s=t.contextTypes,c=(s=s!=null)?rn(e,o):fa),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),t}function Ic(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function ho(e,t,n,s){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},to(e);var c=t.contextType;typeof c=="object"&&c!==null?o.context=kt(c):(c=ot(t)?La:Ge.current,o.context=rn(e,c)),o.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(mo(e,t,c,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gs.enqueueReplaceState(o,o.state,null),is(e,n,o,s),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",s=t;do n+=be(s),s=s.return;while(s);var o=n}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:o,digest:null}}function yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var am=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){xs||(xs=!0,Mo=s),vo(e,t)},n}function qc(e,t,n){n=Gt(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var o=t.value;n.payload=function(){return s(o)},n.callback=function(){vo(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){vo(e,t),typeof s!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Fc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new am;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(n)||(o.add(n),e=hm.bind(null,e,t,n),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bc(e,t,n,s,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,ya(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var nm=j.ReactCurrentOwner,lt=!1;function rt(e,t,n,s){t.child=e===null?dc(t,null,n,s):dn(t,e.child,n,s)}function Hc(e,t,n,s,o){n=n.render;var c=t.ref;return un(t,o),s=lo(e,t,n,s,c,o),n=co(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Me&&n&&Xi(t),t.flags|=1,rt(e,t,s,o),t.child)}function Xc(e,t,n,s,o){if(e===null){var c=n.type;return typeof c=="function"&&!qo(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,Wc(e,t,c,s,o)):(e=Cs(n.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&o)===0){var g=c.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(g,s)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=Sa(c,s),e.ref=t.ref,e.return=t,t.child=e}function Wc(e,t,n,s,o){if(e!==null){var c=e.memoizedProps;if(Wn(c,s)&&e.ref===t.ref)if(lt=!1,t.pendingProps=s=c,(e.lanes&o)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return bo(e,t,n,s,o)}function Vc(e,t,n){var s=t.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(mn,vt),vt|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(mn,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:n,Re(mn,vt),vt|=s}else c!==null?(s=c.baseLanes|n,t.memoizedState=null):s=n,Re(mn,vt),vt|=s;return rt(e,t,o,n),t.child}function Qc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bo(e,t,n,s,o){var c=ot(n)?La:Ge.current;return c=rn(t,c),un(t,o),n=lo(e,t,n,s,c,o),s=co(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Me&&s&&Xi(t),t.flags|=1,rt(e,t,n,o),t.child)}function Kc(e,t,n,s,o){if(ot(n)){var c=!0;Gr(t)}else c=!1;if(un(t,o),t.stateNode===null)ms(e,t),Dc(t,n,s),ho(t,n,s,o),s=!0;else if(e===null){var g=t.stateNode,h=t.memoizedProps;g.props=h;var v=g.context,R=n.contextType;typeof R=="object"&&R!==null?R=kt(R):(R=ot(n)?La:Ge.current,R=rn(t,R));var I=n.getDerivedStateFromProps,q=typeof I=="function"||typeof g.getSnapshotBeforeUpdate=="function";q||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==s||v!==R)&&Ic(t,g,s,R),ha=!1;var D=t.memoizedState;g.state=D,is(t,s,g,o),v=t.memoizedState,h!==s||D!==v||it.current||ha?(typeof I=="function"&&(mo(t,n,I,s),v=t.memoizedState),(h=ha||zc(t,n,h,s,D,v,R))?(q||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=v),g.props=s,g.state=v,g.context=R,s=h):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{g=t.stateNode,uc(e,t),h=t.memoizedProps,R=t.type===t.elementType?h:Pt(t.type,h),g.props=R,q=t.pendingProps,D=g.context,v=n.contextType,typeof v=="object"&&v!==null?v=kt(v):(v=ot(n)?La:Ge.current,v=rn(t,v));var Q=n.getDerivedStateFromProps;(I=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==q||D!==v)&&Ic(t,g,s,v),ha=!1,D=t.memoizedState,g.state=D,is(t,s,g,o);var ee=t.memoizedState;h!==q||D!==ee||it.current||ha?(typeof Q=="function"&&(mo(t,n,Q,s),ee=t.memoizedState),(R=ha||zc(t,n,R,s,D,ee,v)||!1)?(I||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,ee,v),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,ee,v)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ee),g.props=s,g.state=ee,g.context=v,s=R):(typeof g.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),s=!1)}return xo(e,t,n,s,c,o)}function xo(e,t,n,s,o,c){Qc(e,t);var g=(t.flags&128)!==0;if(!s&&!g)return o&&ec(t,n,!1),Jt(e,t,c);s=t.stateNode,nm.current=t;var h=g&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&g?(t.child=dn(t,e.child,null,c),t.child=dn(t,null,h,c)):rt(e,t,h,c),t.memoizedState=s.state,o&&ec(t,n,!0),t.child}function Yc(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),ao(e,t.containerInfo)}function Gc(e,t,n,s,o){return ln(),Ki(o),t.flags|=256,rt(e,t,n,s),t.child}var wo={dehydrated:null,treeContext:null,retryLane:0};function ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,t,n){var s=t.pendingProps,o=Oe.current,c=!1,g=(t.flags&128)!==0,h;if((h=g)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Re(Oe,o&1),e===null)return Qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=s.children,e=s.fallback,c?(s=t.mode,c=t.child,g={mode:"hidden",children:g},(s&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=g):c=Ls(g,s,0,null),e=Da(e,s,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=ko(n),t.memoizedState=wo,e):So(t,g));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return rm(e,t,g,s,h,o,n);if(c){c=s.fallback,g=t.mode,o=e.child,h=o.sibling;var v={mode:"hidden",children:s.children};return(g&1)===0&&t.child!==o?(s=t.child,s.childLanes=0,s.pendingProps=v,t.deletions=null):(s=Sa(o,v),s.subtreeFlags=o.subtreeFlags&14680064),h!==null?c=Sa(h,c):(c=Da(c,g,n,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,g=e.child.memoizedState,g=g===null?ko(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},c.memoizedState=g,c.childLanes=e.childLanes&~n,t.memoizedState=wo,s}return c=e.child,e=c.sibling,s=Sa(c,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function So(e,t){return t=Ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,n,s){return s!==null&&Ki(s),dn(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n,s,o,c,g){if(n)return t.flags&256?(t.flags&=-257,s=yo(Error(i(422))),fs(e,t,g,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,o=t.mode,s=Ls({mode:"visible",children:s.children},o,0,null),c=Da(c,o,g,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,(t.mode&1)!==0&&dn(t,e.child,null,g),t.child.memoizedState=ko(g),t.memoizedState=wo,c);if((t.mode&1)===0)return fs(e,t,g,null);if(o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var h=s.dgst;return s=h,c=Error(i(419)),s=yo(c,s,void 0),fs(e,t,g,s)}if(h=(g&e.childLanes)!==0,lt||h){if(s=We,s!==null){switch(g&-g){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(s.suspendedLanes|g))!==0?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,Yt(e,o),Nt(s,e,o,-1))}return jo(),s=yo(Error(i(421))),fs(e,t,g,s)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ym.bind(null,e),o._reactRetry=t,null):(e=c.treeContext,yt=pa(o.nextSibling),ht=t,Me=!0,Tt=null,e!==null&&(xt[wt++]=Qt,xt[wt++]=Kt,xt[wt++]=$a,Qt=e.id,Kt=e.overflow,$a=t),t=So(t,s.children),t.flags|=4096,t)}function Zc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zi(e.return,t,n)}function Eo(e,t,n,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=n,c.tailMode=o)}function eu(e,t,n){var s=t.pendingProps,o=s.revealOrder,c=s.tail;if(rt(e,t,s.children,n),s=Oe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Re(Oe,s),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Eo(t,!1,o,n,c);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&os(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Eo(t,!0,n,null,c);break;case"together":Eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Sa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sm(e,t,n){switch(t.tag){case 3:Yc(t),ln();break;case 5:fc(t);break;case 1:ot(t.type)&&Gr(t);break;case 4:ao(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,o=t.memoizedProps.value;Re(ns,s._currentValue),s._currentValue=o;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Re(Oe,Oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Jc(e,t,n):(Re(Oe,Oe.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);Re(Oe,Oe.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return eu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Re(Oe,Oe.current),s)break;return null;case 22:case 23:return t.lanes=0,Vc(e,t,n)}return Jt(e,t,n)}var tu,_o,au,nu;tu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_o=function(){},au=function(e,t,n,s){var o=e.memoizedProps;if(o!==s){e=t.stateNode,Pa(jt.current);var c=null;switch(n){case"input":o=zt(e,o),s=zt(e,s),c=[];break;case"select":o=H({},o,{value:void 0}),s=H({},s,{value:void 0}),c=[];break;case"textarea":o=Xt(e,o),s=Xt(e,s),c=[];break;default:typeof o.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qr)}ri(n,s);var g;n=null;for(R in o)if(!s.hasOwnProperty(R)&&o.hasOwnProperty(R)&&o[R]!=null)if(R==="style"){var h=o[R];for(g in h)h.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(d.hasOwnProperty(R)?c||(c=[]):(c=c||[]).push(R,null));for(R in s){var v=s[R];if(h=o!=null?o[R]:void 0,s.hasOwnProperty(R)&&v!==h&&(v!=null||h!=null))if(R==="style")if(h){for(g in h)!h.hasOwnProperty(g)||v&&v.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in v)v.hasOwnProperty(g)&&h[g]!==v[g]&&(n||(n={}),n[g]=v[g])}else n||(c||(c=[]),c.push(R,n)),n=v;else R==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(c=c||[]).push(R,v)):R==="children"?typeof v!="string"&&typeof v!="number"||(c=c||[]).push(R,""+v):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(d.hasOwnProperty(R)?(v!=null&&R==="onScroll"&&Te("scroll",e),c||h===v||(c=[])):(c=c||[]).push(R,v))}n&&(c=c||[]).push("style",n);var R=c;(t.updateQueue=R)&&(t.flags|=4)}},nu=function(e,t,n,s){n!==s&&(t.flags|=4)};function or(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,s|=o.subtreeFlags&14680064,s|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function im(e,t,n){var s=t.pendingProps;switch(Wi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ot(t.type)&&Yr(),Ze(t),null;case 3:return s=t.stateNode,pn(),Pe(it),Pe(Ge),so(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Tt!==null&&(zo(Tt),Tt=null))),_o(e,t),Ze(t),null;case 5:no(t);var o=Pa(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)au(e,t,n,s,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return Ze(t),null}if(e=Pa(jt.current),ts(t)){s=t.stateNode,n=t.type;var c=t.memoizedProps;switch(s[It]=t,s[Gn]=c,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",s),Te("close",s);break;case"iframe":case"object":case"embed":Te("load",s);break;case"video":case"audio":for(o=0;o<Qn.length;o++)Te(Qn[o],s);break;case"source":Te("error",s);break;case"img":case"image":case"link":Te("error",s),Te("load",s);break;case"details":Te("toggle",s);break;case"input":me(s,c),Te("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},Te("invalid",s);break;case"textarea":ql(s,c),Te("invalid",s)}ri(n,c),o=null;for(var g in c)if(c.hasOwnProperty(g)){var h=c[g];g==="children"?typeof h=="string"?s.textContent!==h&&(c.suppressHydrationWarning!==!0&&Vr(s.textContent,h,e),o=["children",h]):typeof h=="number"&&s.textContent!==""+h&&(c.suppressHydrationWarning!==!0&&Vr(s.textContent,h,e),o=["children",""+h]):d.hasOwnProperty(g)&&h!=null&&g==="onScroll"&&Te("scroll",s)}switch(n){case"input":bt(s),ft(s,c,!0);break;case"textarea":bt(s),Ul(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Qr)}s=o,t.updateQueue=s,s!==null&&(t.flags|=4)}else{g=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(n,{is:s.is}):(e=g.createElement(n),n==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,n),e[It]=t,e[Gn]=s,tu(e,t,!1,!1),t.stateNode=e;e:{switch(g=si(n,s),n){case"dialog":Te("cancel",e),Te("close",e),o=s;break;case"iframe":case"object":case"embed":Te("load",e),o=s;break;case"video":case"audio":for(o=0;o<Qn.length;o++)Te(Qn[o],e);o=s;break;case"source":Te("error",e),o=s;break;case"img":case"image":case"link":Te("error",e),Te("load",e),o=s;break;case"details":Te("toggle",e),o=s;break;case"input":me(e,s),o=zt(e,s),Te("invalid",e);break;case"option":o=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},o=H({},s,{value:void 0}),Te("invalid",e);break;case"textarea":ql(e,s),o=Xt(e,s),Te("invalid",e);break;default:o=s}ri(n,o),h=o;for(c in h)if(h.hasOwnProperty(c)){var v=h[c];c==="style"?Wl(e,v):c==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Hl(e,v)):c==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&Rn(e,v):typeof v=="number"&&Rn(e,""+v):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(d.hasOwnProperty(c)?v!=null&&c==="onScroll"&&Te("scroll",e):v!=null&&z(e,c,v,g))}switch(n){case"input":bt(e),ft(e,s,!1);break;case"textarea":bt(e),Ul(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ke(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?sa(e,!!s.multiple,c,!1):s.defaultValue!=null&&sa(e,!!s.multiple,s.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(n=Pa(ar.current),Pa(jt.current),ts(t)){if(s=t.stateNode,n=t.memoizedProps,s[It]=t,(c=s.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Vr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(s.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[It]=t,t.stateNode=s}return Ze(t),null;case 13:if(Pe(Oe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ic(),ln(),t.flags|=98560,c=!1;else if(c=ts(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[It]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else Tt!==null&&(zo(Tt),Tt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Oe.current&1)!==0?He===0&&(He=3):jo())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return pn(),_o(e,t),e===null&&Kn(t.stateNode.containerInfo),Ze(t),null;case 10:return Ji(t.type._context),Ze(t),null;case 17:return ot(t.type)&&Yr(),Ze(t),null;case 19:if(Pe(Oe),c=t.memoizedState,c===null)return Ze(t),null;if(s=(t.flags&128)!==0,g=c.rendering,g===null)if(s)or(c,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=os(e),g!==null){for(t.flags|=128,or(c,!1),s=g.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)c=n,e=s,c.flags&=14680066,g=c.alternate,g===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=g.childLanes,c.lanes=g.lanes,c.child=g.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=g.memoizedProps,c.memoizedState=g.memoizedState,c.updateQueue=g.updateQueue,c.type=g.type,e=g.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Oe,Oe.current&1|2),t.child}e=e.sibling}c.tail!==null&&je()>hn&&(t.flags|=128,s=!0,or(c,!1),t.lanes=4194304)}else{if(!s)if(e=os(g),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!Me)return Ze(t),null}else 2*je()-c.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,s=!0,or(c,!1),t.lanes=4194304);c.isBackwards?(g.sibling=t.child,t.child=g):(n=c.last,n!==null?n.sibling=g:t.child=g,c.last=g)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=je(),t.sibling=null,n=Oe.current,Re(Oe,s?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Io(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(vt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function om(e,t){switch(Wi(t),t.tag){case 1:return ot(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),Pe(it),Pe(Ge),so(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return no(t),null;case 13:if(Pe(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Oe),null;case 4:return pn(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var hs=!1,et=!1,lm=typeof WeakSet=="function"?WeakSet:Set,J=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Ie(e,t,s)}else n.current=null}function Co(e,t,n){try{n()}catch(s){Ie(e,t,s)}}var ru=!1;function dm(e,t){if(Di=zr,e=zd(),Ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var g=0,h=-1,v=-1,R=0,I=0,q=e,D=null;t:for(;;){for(var Q;q!==n||o!==0&&q.nodeType!==3||(h=g+o),q!==c||s!==0&&q.nodeType!==3||(v=g+s),q.nodeType===3&&(g+=q.nodeValue.length),(Q=q.firstChild)!==null;)D=q,q=Q;for(;;){if(q===e)break t;if(D===n&&++R===o&&(h=g),D===c&&++I===s&&(v=g),(Q=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=Q}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},zr=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var ne=ee.memoizedProps,qe=ee.memoizedState,C=t.stateNode,w=C.getSnapshotBeforeUpdate(t.elementType===t.type?ne:Pt(t.type,ne),qe);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){Ie(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return ee=ru,ru=!1,ee}function lr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&Co(t,n,c)}o=o.next}while(o!==s)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Gn],delete t[Ui],delete t[Xf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iu(e){return e.tag===5||e.tag===3||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(s!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}function Ro(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}var Qe=null,At=!1;function va(e,t,n){for(n=n.child;n!==null;)lu(e,t,n),n=n.sibling}function lu(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:et||fn(n,t);case 6:var s=Qe,o=At;Qe=null,va(e,t,n),Qe=s,At=o,Qe!==null&&(At?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(At?(e=Qe,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),qn(e)):Fi(Qe,n.stateNode));break;case 4:s=Qe,o=At,Qe=n.stateNode.containerInfo,At=!0,va(e,t,n),Qe=s,At=o;break;case 0:case 11:case 14:case 15:if(!et&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){o=s=s.next;do{var c=o,g=c.destroy;c=c.tag,g!==void 0&&((c&2)!==0||(c&4)!==0)&&Co(n,t,g),o=o.next}while(o!==s)}va(e,t,n);break;case 1:if(!et&&(fn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(h){Ie(n,t,h)}va(e,t,n);break;case 21:va(e,t,n);break;case 22:n.mode&1?(et=(s=et)||n.memoizedState!==null,va(e,t,n),et=s):va(e,t,n);break;default:va(e,t,n)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(s){var o=vm.bind(null,e,s);n.has(s)||(n.add(s),s.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];try{var c=e,g=t,h=g;e:for(;h!==null;){switch(h.tag){case 5:Qe=h.stateNode,At=!1;break e;case 3:Qe=h.stateNode.containerInfo,At=!0;break e;case 4:Qe=h.stateNode.containerInfo,At=!0;break e}h=h.return}if(Qe===null)throw Error(i(160));lu(c,g,o),Qe=null,At=!1;var v=o.alternate;v!==null&&(v.return=null),o.return=null}catch(R){Ie(o,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cu(t,e),t=t.sibling}function cu(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Ft(e),s&4){try{lr(3,e,e.return),ys(3,e)}catch(ne){Ie(e,e.return,ne)}try{lr(5,e,e.return)}catch(ne){Ie(e,e.return,ne)}}break;case 1:Mt(t,e),Ft(e),s&512&&n!==null&&fn(n,n.return);break;case 5:if(Mt(t,e),Ft(e),s&512&&n!==null&&fn(n,n.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(ne){Ie(e,e.return,ne)}}if(s&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,g=n!==null?n.memoizedProps:c,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&c.type==="radio"&&c.name!=null&&G(o,c),si(h,g);var R=si(h,c);for(g=0;g<v.length;g+=2){var I=v[g],q=v[g+1];I==="style"?Wl(o,q):I==="dangerouslySetInnerHTML"?Hl(o,q):I==="children"?Rn(o,q):z(o,I,q,R)}switch(h){case"input":$e(o,c);break;case"textarea":Fl(o,c);break;case"select":var D=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var Q=c.value;Q!=null?sa(o,!!c.multiple,Q,!1):D!==!!c.multiple&&(c.defaultValue!=null?sa(o,!!c.multiple,c.defaultValue,!0):sa(o,!!c.multiple,c.multiple?[]:"",!1))}o[Gn]=c}catch(ne){Ie(e,e.return,ne)}}break;case 6:if(Mt(t,e),Ft(e),s&4){if(e.stateNode===null)throw Error(i(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(ne){Ie(e,e.return,ne)}}break;case 3:if(Mt(t,e),Ft(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(ne){Ie(e,e.return,ne)}break;case 4:Mt(t,e),Ft(e);break;case 13:Mt(t,e),Ft(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(Ao=je())),s&4&&du(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(et=(R=et)||I,Mt(t,e),et=R):Mt(t,e),Ft(e),s&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!I&&(e.mode&1)!==0)for(J=e,I=e.child;I!==null;){for(q=J=I;J!==null;){switch(D=J,Q=D.child,D.tag){case 0:case 11:case 14:case 15:lr(4,D,D.return);break;case 1:fn(D,D.return);var ee=D.stateNode;if(typeof ee.componentWillUnmount=="function"){s=D,n=D.return;try{t=s,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(ne){Ie(s,n,ne)}}break;case 5:fn(D,D.return);break;case 22:if(D.memoizedState!==null){gu(q);continue}}Q!==null?(Q.return=D,J=Q):gu(q)}I=I.sibling}e:for(I=null,q=e;;){if(q.tag===5){if(I===null){I=q;try{o=q.stateNode,R?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(h=q.stateNode,v=q.memoizedProps.style,g=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=Xl("display",g))}catch(ne){Ie(e,e.return,ne)}}}else if(q.tag===6){if(I===null)try{q.stateNode.nodeValue=R?"":q.memoizedProps}catch(ne){Ie(e,e.return,ne)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;I===q&&(I=null),q=q.return}I===q&&(I=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:Mt(t,e),Ft(e),s&4&&du(e);break;case 21:break;default:Mt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(iu(n)){var s=n;break e}n=n.return}throw Error(i(160))}switch(s.tag){case 5:var o=s.stateNode;s.flags&32&&(Rn(o,""),s.flags&=-33);var c=ou(e);Ro(e,c,o);break;case 3:case 4:var g=s.stateNode.containerInfo,h=ou(e);$o(e,h,g);break;default:throw Error(i(161))}}catch(v){Ie(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cm(e,t,n){J=e,uu(e)}function uu(e,t,n){for(var s=(e.mode&1)!==0;J!==null;){var o=J,c=o.child;if(o.tag===22&&s){var g=o.memoizedState!==null||hs;if(!g){var h=o.alternate,v=h!==null&&h.memoizedState!==null||et;h=hs;var R=et;if(hs=g,(et=v)&&!R)for(J=o;J!==null;)g=J,v=g.child,g.tag===22&&g.memoizedState!==null?fu(o):v!==null?(v.return=g,J=v):fu(o);for(;c!==null;)J=c,uu(c),c=c.sibling;J=o,hs=h,et=R}pu(e)}else(o.subtreeFlags&8772)!==0&&c!==null?(c.return=o,J=c):pu(e)}}function pu(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||ys(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!et)if(n===null)s.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);s.componentDidUpdate(o,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&gc(t,c,s);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gc(t,g,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var I=R.memoizedState;if(I!==null){var q=I.dehydrated;q!==null&&qn(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}et||t.flags&512&&Lo(t)}catch(D){Ie(t,t.return,D)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function gu(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function fu(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(v){Ie(t,n,v)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var o=t.return;try{s.componentDidMount()}catch(v){Ie(t,o,v)}}var c=t.return;try{Lo(t)}catch(v){Ie(t,c,v)}break;case 5:var g=t.return;try{Lo(t)}catch(v){Ie(t,g,v)}}}catch(v){Ie(t,t.return,v)}if(t===e){J=null;break}var h=t.sibling;if(h!==null){h.return=t.return,J=h;break}J=t.return}}var um=Math.ceil,vs=j.ReactCurrentDispatcher,To=j.ReactCurrentOwner,Et=j.ReactCurrentBatchConfig,_e=0,We=null,Ue=null,Ke=0,vt=0,mn=ga(0),He=0,dr=null,Ma=0,bs=0,Po=0,cr=null,dt=null,Ao=0,hn=1/0,Zt=null,xs=!1,Mo=null,ba=null,ws=!1,xa=null,ks=0,ur=0,No=null,Ss=-1,Es=0;function st(){return(_e&6)!==0?je():Ss!==-1?Ss:Ss=je()}function wa(e){return(e.mode&1)===0?1:(_e&2)!==0&&Ke!==0?Ke&-Ke:Qf.transition!==null?(Es===0&&(Es=od()),Es):(e=Le,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e)}function Nt(e,t,n,s){if(50<ur)throw ur=0,No=null,Error(i(185));On(e,n,s),((_e&2)===0||e!==We)&&(e===We&&((_e&2)===0&&(bs|=n),He===4&&ka(e,Ke)),ct(e,s),n===1&&_e===0&&(t.mode&1)===0&&(hn=je()+500,Jr&&ma()))}function ct(e,t){var n=e.callbackNode;Vg(e,t);var s=Mr(e,e===We?Ke:0);if(s===0)n!==null&&rd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&rd(n),t===1)e.tag===0?Vf(hu.bind(null,e)):tc(hu.bind(null,e)),Bf(function(){(_e&6)===0&&ma()}),n=null;else{switch(ld(s)){case 1:n=pi;break;case 4:n=sd;break;case 16:n=Rr;break;case 536870912:n=id;break;default:n=Rr}n=Eu(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(Ss=-1,Es=0,(_e&6)!==0)throw Error(i(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var s=Mr(e,e===We?Ke:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=_s(e,s);else{t=s;var o=_e;_e|=2;var c=vu();(We!==e||Ke!==t)&&(Zt=null,hn=je()+500,Oa(e,t));do try{fm();break}catch(h){yu(e,h)}while(!0);Gi(),vs.current=c,_e=o,Ue!==null?t=0:(We=null,Ke=0,t=He)}if(t!==0){if(t===2&&(o=gi(e),o!==0&&(s=o,t=Oo(e,o))),t===1)throw n=dr,Oa(e,0),ka(e,s),ct(e,je()),n;if(t===6)ka(e,s);else{if(o=e.current.alternate,(s&30)===0&&!pm(o)&&(t=_s(e,s),t===2&&(c=gi(e),c!==0&&(s=c,t=Oo(e,c))),t===1))throw n=dr,Oa(e,0),ka(e,s),ct(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:za(e,dt,Zt);break;case 3:if(ka(e,s),(s&130023424)===s&&(t=Ao+500-je(),10<t)){if(Mr(e,0)!==0)break;if(o=e.suspendedLanes,(o&s)!==s){st(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qi(za.bind(null,e,dt,Zt),t);break}za(e,dt,Zt);break;case 4:if(ka(e,s),(s&4194240)===s)break;for(t=e.eventTimes,o=-1;0<s;){var g=31-$t(s);c=1<<g,g=t[g],g>o&&(o=g),s&=~c}if(s=o,s=je()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*um(s/1960))-s,10<s){e.timeoutHandle=qi(za.bind(null,e,dt,Zt),s);break}za(e,dt,Zt);break;case 5:za(e,dt,Zt);break;default:throw Error(i(329))}}}return ct(e,je()),e.callbackNode===n?mu.bind(null,e):null}function Oo(e,t){var n=cr;return e.current.memoizedState.isDehydrated&&(Oa(e,t).flags|=256),e=_s(e,t),e!==2&&(t=dt,dt=n,t!==null&&zo(t)),e}function zo(e){dt===null?dt=e:dt.push.apply(dt,e)}function pm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var o=n[s],c=o.getSnapshot;o=o.value;try{if(!Rt(c(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t){for(t&=~Po,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),s=1<<n;e[n]=-1,t&=~s}}function hu(e){if((_e&6)!==0)throw Error(i(327));yn();var t=Mr(e,0);if((t&1)===0)return ct(e,je()),null;var n=_s(e,t);if(e.tag!==0&&n===2){var s=gi(e);s!==0&&(t=s,n=Oo(e,s))}if(n===1)throw n=dr,Oa(e,0),ka(e,t),ct(e,je()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,za(e,dt,Zt),ct(e,je()),null}function Do(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(hn=je()+500,Jr&&ma())}}function Na(e){xa!==null&&xa.tag===0&&(_e&6)===0&&yn();var t=_e;_e|=1;var n=Et.transition,s=Le;try{if(Et.transition=null,Le=1,e)return e()}finally{Le=s,Et.transition=n,_e=t,(_e&6)===0&&ma()}}function Io(){vt=mn.current,Pe(mn)}function Oa(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uf(n)),Ue!==null)for(n=Ue.return;n!==null;){var s=n;switch(Wi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Yr();break;case 3:pn(),Pe(it),Pe(Ge),so();break;case 5:no(s);break;case 4:pn();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Ji(s.type._context);break;case 22:case 23:Io()}n=n.return}if(We=e,Ue=e=Sa(e.current,null),Ke=vt=t,He=0,dr=null,Po=bs=Ma=0,dt=cr=null,Ta!==null){for(t=0;t<Ta.length;t++)if(n=Ta[t],s=n.interleaved,s!==null){n.interleaved=null;var o=s.next,c=n.pending;if(c!==null){var g=c.next;c.next=o,s.next=g}n.pending=s}Ta=null}return e}function yu(e,t){do{var n=Ue;try{if(Gi(),ls.current=ps,ds){for(var s=ze.memoizedState;s!==null;){var o=s.queue;o!==null&&(o.pending=null),s=s.next}ds=!1}if(Aa=0,Xe=Be=ze=null,nr=!1,rr=0,To.current=null,n===null||n.return===null){He=1,dr=t,Ue=null;break}e:{var c=e,g=n.return,h=n,v=t;if(t=Ke,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=v,I=h,q=I.tag;if((I.mode&1)===0&&(q===0||q===11||q===15)){var D=I.alternate;D?(I.updateQueue=D.updateQueue,I.memoizedState=D.memoizedState,I.lanes=D.lanes):(I.updateQueue=null,I.memoizedState=null)}var Q=Uc(g);if(Q!==null){Q.flags&=-257,Bc(Q,g,h,c,t),Q.mode&1&&Fc(c,R,t),t=Q,v=R;var ee=t.updateQueue;if(ee===null){var ne=new Set;ne.add(v),t.updateQueue=ne}else ee.add(v);break e}else{if((t&1)===0){Fc(c,R,t),jo();break e}v=Error(i(426))}}else if(Me&&h.mode&1){var qe=Uc(g);if(qe!==null){(qe.flags&65536)===0&&(qe.flags|=256),Bc(qe,g,h,c,t),Ki(gn(v,h));break e}}c=v=gn(v,h),He!==4&&(He=2),cr===null?cr=[c]:cr.push(c),c=g;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=jc(c,v,t);pc(c,C);break e;case 1:h=v;var w=c.type,L=c.stateNode;if((c.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(ba===null||!ba.has(L)))){c.flags|=65536,t&=-t,c.lanes|=t;var U=qc(c,h,t);pc(c,U);break e}}c=c.return}while(c!==null)}xu(n)}catch(re){t=re,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function vu(){var e=vs.current;return vs.current=ps,e===null?ps:e}function jo(){(He===0||He===3||He===2)&&(He=4),We===null||(Ma&268435455)===0&&(bs&268435455)===0||ka(We,Ke)}function _s(e,t){var n=_e;_e|=2;var s=vu();(We!==e||Ke!==t)&&(Zt=null,Oa(e,t));do try{gm();break}catch(o){yu(e,o)}while(!0);if(Gi(),_e=n,vs.current=s,Ue!==null)throw Error(i(261));return We=null,Ke=0,He}function gm(){for(;Ue!==null;)bu(Ue)}function fm(){for(;Ue!==null&&!Ig();)bu(Ue)}function bu(e){var t=Su(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?xu(e):Ue=t,To.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=im(n,t,vt),n!==null){Ue=n;return}}else{if(n=om(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);He===0&&(He=5)}function za(e,t,n){var s=Le,o=Et.transition;try{Et.transition=null,Le=1,mm(e,t,n,s)}finally{Et.transition=o,Le=s}return null}function mm(e,t,n,s){do yn();while(xa!==null);if((_e&6)!==0)throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(Qg(e,c),e===We&&(Ue=We=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ws||(ws=!0,Eu(Rr,function(){return yn(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=Et.transition,Et.transition=null;var g=Le;Le=1;var h=_e;_e|=4,To.current=null,dm(e,n),cu(n,e),Of(Ii),zr=!!Di,Ii=Di=null,e.current=n,cm(n),jg(),_e=h,Le=g,Et.transition=c}else e.current=n;if(ws&&(ws=!1,xa=e,ks=o),c=e.pendingLanes,c===0&&(ba=null),Ug(n.stateNode),ct(e,je()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],s(o.value,{componentStack:o.stack,digest:o.digest});if(xs)throw xs=!1,e=Mo,Mo=null,e;return(ks&1)!==0&&e.tag!==0&&yn(),c=e.pendingLanes,(c&1)!==0?e===No?ur++:(ur=0,No=e):ur=0,ma(),null}function yn(){if(xa!==null){var e=ld(ks),t=Et.transition,n=Le;try{if(Et.transition=null,Le=16>e?16:e,xa===null)var s=!1;else{if(e=xa,xa=null,ks=0,(_e&6)!==0)throw Error(i(331));var o=_e;for(_e|=4,J=e.current;J!==null;){var c=J,g=c.child;if((J.flags&16)!==0){var h=c.deletions;if(h!==null){for(var v=0;v<h.length;v++){var R=h[v];for(J=R;J!==null;){var I=J;switch(I.tag){case 0:case 11:case 15:lr(8,I,c)}var q=I.child;if(q!==null)q.return=I,J=q;else for(;J!==null;){I=J;var D=I.sibling,Q=I.return;if(su(I),I===R){J=null;break}if(D!==null){D.return=Q,J=D;break}J=Q}}}var ee=c.alternate;if(ee!==null){var ne=ee.child;if(ne!==null){ee.child=null;do{var qe=ne.sibling;ne.sibling=null,ne=qe}while(ne!==null)}}J=c}}if((c.subtreeFlags&2064)!==0&&g!==null)g.return=c,J=g;else e:for(;J!==null;){if(c=J,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:lr(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,J=C;break e}J=c.return}}var w=e.current;for(J=w;J!==null;){g=J;var L=g.child;if((g.subtreeFlags&2064)!==0&&L!==null)L.return=g,J=L;else e:for(g=w;J!==null;){if(h=J,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ys(9,h)}}catch(re){Ie(h,h.return,re)}if(h===g){J=null;break e}var U=h.sibling;if(U!==null){U.return=h.return,J=U;break e}J=h.return}}if(_e=o,ma(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Tr,e)}catch{}s=!0}return s}finally{Le=n,Et.transition=t}}return!1}function wu(e,t,n){t=gn(n,t),t=jc(e,t,1),e=ya(e,t,1),t=st(),e!==null&&(On(e,1,t),ct(e,t))}function Ie(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=gn(n,e),e=qc(t,e,1),t=ya(t,e,1),e=st(),t!==null&&(On(t,1,e),ct(t,e));break}}t=t.return}}function hm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Ke&n)===n&&(He===4||He===3&&(Ke&130023424)===Ke&&500>je()-Ao?Oa(e,0):Po|=n),ct(e,t)}function ku(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var n=st();e=Yt(e,t),e!==null&&(On(e,t,n),ct(e,n))}function ym(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ku(e,n)}function vm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),ku(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,sm(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Me&&(t.flags&1048576)!==0&&ac(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ms(e,t),e=t.pendingProps;var o=rn(t,Ge.current);un(t,n),o=lo(null,t,s,e,o,n);var c=co();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(s)?(c=!0,Gr(t)):c=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,to(t),o.updater=gs,t.stateNode=o,o._reactInternals=t,ho(t,s,e,n),t=xo(null,t,s,!0,c,n)):(t.tag=0,Me&&c&&Xi(t),rt(null,t,o,n),t=t.child),t;case 16:s=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,o=s._init,s=o(s._payload),t.type=s,o=t.tag=xm(s),e=Pt(s,e),o){case 0:t=bo(null,t,s,e,n);break e;case 1:t=Kc(null,t,s,e,n);break e;case 11:t=Hc(null,t,s,e,n);break e;case 14:t=Xc(null,t,s,Pt(s.type,e),n);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Pt(s,o),bo(e,t,s,o,n);case 1:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Pt(s,o),Kc(e,t,s,o,n);case 3:e:{if(Yc(t),e===null)throw Error(i(387));s=t.pendingProps,c=t.memoizedState,o=c.element,uc(e,t),is(t,s,null,n);var g=t.memoizedState;if(s=g.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){o=gn(Error(i(423)),t),t=Gc(e,t,s,n,o);break e}else if(s!==o){o=gn(Error(i(424)),t),t=Gc(e,t,s,n,o);break e}else for(yt=pa(t.stateNode.containerInfo.firstChild),ht=t,Me=!0,Tt=null,n=dc(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),s===o){t=Jt(e,t,n);break e}rt(e,t,s,n)}t=t.child}return t;case 5:return fc(t),e===null&&Qi(t),s=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,g=o.children,ji(s,o)?g=null:c!==null&&ji(s,c)&&(t.flags|=32),Qc(e,t),rt(e,t,g,n),t.child;case 6:return e===null&&Qi(t),null;case 13:return Jc(e,t,n);case 4:return ao(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=dn(t,null,s,n):rt(e,t,s,n),t.child;case 11:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Pt(s,o),Hc(e,t,s,o,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,o=t.pendingProps,c=t.memoizedProps,g=o.value,Re(ns,s._currentValue),s._currentValue=g,c!==null)if(Rt(c.value,g)){if(c.children===o.children&&!it.current){t=Jt(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){g=c.child;for(var v=h.firstContext;v!==null;){if(v.context===s){if(c.tag===1){v=Gt(-1,n&-n),v.tag=2;var R=c.updateQueue;if(R!==null){R=R.shared;var I=R.pending;I===null?v.next=v:(v.next=I.next,I.next=v),R.pending=v}}c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),Zi(c.return,n,t),h.lanes|=n;break}v=v.next}}else if(c.tag===10)g=c.type===t.type?null:c.child;else if(c.tag===18){if(g=c.return,g===null)throw Error(i(341));g.lanes|=n,h=g.alternate,h!==null&&(h.lanes|=n),Zi(g,n,t),g=c.sibling}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}rt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,s=t.pendingProps.children,un(t,n),o=kt(o),s=s(o),t.flags|=1,rt(e,t,s,n),t.child;case 14:return s=t.type,o=Pt(s,t.pendingProps),o=Pt(s.type,o),Xc(e,t,s,o,n);case 15:return Wc(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,o=t.pendingProps,o=t.elementType===s?o:Pt(s,o),ms(e,t),t.tag=1,ot(s)?(e=!0,Gr(t)):e=!1,un(t,n),Dc(t,s,o),ho(t,s,o,n),xo(null,t,s,!0,e,n);case 19:return eu(e,t,n);case 22:return Vc(e,t,n)}throw Error(i(156,t.tag))};function Eu(e,t){return nd(e,t)}function bm(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,s){return new bm(e,t,n,s)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xm(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===Z)return 14}return 2}function Sa(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cs(e,t,n,s,o,c){var g=2;if(s=e,typeof e=="function")qo(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case oe:return Da(n.children,o,c,t);case ie:g=8,o|=8;break;case V:return e=_t(12,n,t,o|2),e.elementType=V,e.lanes=c,e;case ue:return e=_t(13,n,t,o),e.elementType=ue,e.lanes=c,e;case pe:return e=_t(19,n,t,o),e.elementType=pe,e.lanes=c,e;case ye:return Ls(n,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:g=10;break e;case se:g=9;break e;case te:g=11;break e;case Z:g=14;break e;case we:g=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=_t(g,n,t,o),t.elementType=e,t.type=s,t.lanes=c,t}function Da(e,t,n,s){return e=_t(7,e,s,t),e.lanes=n,e}function Ls(e,t,n,s){return e=_t(22,e,s,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Uo(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,n,s,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=s,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bo(e,t,n,s,o,c,g,h,v){return e=new wm(e,t,n,h,v),t===1?(t=1,c===!0&&(t|=8)):t=0,c=_t(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(c),e}function km(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function _u(e){if(!e)return fa;e=e._reactInternals;e:{if(_a(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(ot(n))return Zd(e,n,t)}return t}function Cu(e,t,n,s,o,c,g,h,v){return e=Bo(n,s,!0,e,o,c,g,h,v),e.context=_u(null),n=e.current,s=st(),o=wa(n),c=Gt(s,o),c.callback=t??null,ya(n,c,o),e.current.lanes=o,On(e,o,s),ct(e,s),e}function $s(e,t,n,s){var o=t.current,c=st(),g=wa(o);return n=_u(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(c,g),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=ya(o,t,g),e!==null&&(Nt(e,o,g,c),ss(e,o,g)),g}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function Sm(){return null}var $u=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Ts.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));$s(e,t,null,null)},Ts.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Na(function(){$s(null,e,null,null)}),t[Wt]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&fd(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Em(e,t,n,s,o){if(o){if(typeof s=="function"){var c=s;s=function(){var R=Rs(g);c.call(R)}}var g=Cu(t,s,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=g,e[Wt]=g.current,Kn(e.nodeType===8?e.parentNode:e),Na(),g}for(;o=e.lastChild;)e.removeChild(o);if(typeof s=="function"){var h=s;s=function(){var R=Rs(v);h.call(R)}}var v=Bo(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=v,e[Wt]=v.current,Kn(e.nodeType===8?e.parentNode:e),Na(function(){$s(t,v,n,s)}),v}function As(e,t,n,s,o){var c=n._reactRootContainer;if(c){var g=c;if(typeof o=="function"){var h=o;o=function(){var v=Rs(g);h.call(v)}}$s(t,g,e,o)}else g=Em(n,t,e,o,s);return Rs(g)}dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(mi(t,n|1),ct(t,je()),(_e&6)===0&&(hn=je()+500,ma()))}break;case 13:Na(function(){var s=Yt(e,1);if(s!==null){var o=st();Nt(s,e,1,o)}}),Ho(e,1)}},hi=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=st();Nt(t,e,134217728,n)}Ho(e,134217728)}},cd=function(e){if(e.tag===13){var t=wa(e),n=Yt(e,t);if(n!==null){var s=st();Nt(n,e,t,s)}Ho(e,t)}},ud=function(){return Le},pd=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}},li=function(e,t,n){switch(t){case"input":if($e(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var o=Kr(s);if(!o)throw Error(i(90));nt(s),$e(s,o)}}}break;case"textarea":Fl(e,n);break;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}},Yl=Do,Gl=Na;var _m={usingClientEntryPoint:!1,Events:[Jn,an,Kr,Ql,Kl,Do]},pr={findFiberByHostInstance:Ca,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cm={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Tr=Ms.inject(Cm),Dt=Ms}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m,ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(t))throw Error(i(200));return km(e,t,null,n)},ut.createRoot=function(e,t){if(!Wo(e))throw Error(i(299));var n=!1,s="",o=$u;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bo(e,1,!1,null,null,n,!1,s,o),e[Wt]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Xo(t)},ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=td(t),e=e===null?null:e.stateNode,e},ut.flushSync=function(e){return Na(e)},ut.hydrate=function(e,t,n){if(!Ps(t))throw Error(i(200));return As(null,e,t,!0,n)},ut.hydrateRoot=function(e,t,n){if(!Wo(e))throw Error(i(405));var s=n!=null&&n.hydratedSources||null,o=!1,c="",g=$u;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=Cu(t,null,e,1,n??null,o,!1,c,g),e[Wt]=t.current,Kn(e),s)for(e=0;e<s.length;e++)n=s[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ts(t)},ut.render=function(e,t,n){if(!Ps(t))throw Error(i(200));return As(null,e,t,!1,n)},ut.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(i(40));return e._reactRootContainer?(Na(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},ut.unstable_batchedUpdates=Do,ut.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!Ps(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return As(e,t,n,!1,s)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var Du;function Nm(){if(Du)return Ko.exports;Du=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ko.exports=Mm(),Ko.exports}var Iu;function Om(){if(Iu)return Ns;Iu=1;var a=Nm();return Ns.createRoot=a.createRoot,Ns.hydrateRoot=a.hydrateRoot,Ns}var zm=Om();const Dm=$p(zm);function Rp(a,r){return function(){return a.apply(r,arguments)}}const{toString:Im}=Object.prototype,{getPrototypeOf:Sn}=Object,{iterator:wr,toStringTag:Tp}=Symbol,Xs=(({hasOwnProperty:a})=>(r,i)=>a.call(r,i))(Object.prototype),br=(a,r)=>{let i=a;const l=[];for(;i!=null&&i!==Object.prototype;){if(l.indexOf(i)!==-1)return!1;if(l.push(i),Xs(i,r))return!0;i=Sn(i)}return!1},jm=(a,r)=>a!=null&&br(a,r)?a[r]:void 0,Ll=(a=>r=>{const i=Im.call(r);return a[i]||(a[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=a=>(a=a.toLowerCase(),r=>Ll(r)===a),Ys=a=>r=>typeof r===a,{isArray:Ba}=Array,Ha=Ys("undefined");function Cn(a){return a!==null&&!Ha(a)&&a.constructor!==null&&!Ha(a.constructor)&&pt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Pp=Ct("ArrayBuffer");function qm(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&Pp(a.buffer),r}const Fm=Ys("string"),pt=Ys("function"),Ap=Ys("number"),Ln=a=>a!==null&&typeof a=="object",Um=a=>a===!0||a===!1,Ds=a=>{if(!Ln(a))return!1;const r=Sn(a);return(r===null||r===Object.prototype||Sn(r)===null)&&!br(a,Tp)&&!br(a,wr)},Bm=a=>{if(!Ln(a)||Cn(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Hm=Ct("Date"),Xm=Ct("File"),Wm=a=>!!(a&&typeof a.uri<"u"),Vm=a=>a&&typeof a.getParts<"u",Qm=Ct("Blob"),Km=Ct("FileList"),Ym=Ct("Set"),Gm=a=>Ln(a)&&pt(a.pipe);function Jm(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ju=Jm(),qu=typeof ju.FormData<"u"?ju.FormData:void 0,Zm=a=>{if(!a)return!1;if(qu&&a instanceof qu)return!0;const r=Sn(a);if(!r||r===Object.prototype||!pt(a.append))return!1;const i=Ll(a);return i==="formdata"||i==="object"&&pt(a.toString)&&a.toString()==="[object FormData]"},eh=Ct("URLSearchParams"),[th,ah,nh,rh]=["ReadableStream","Request","Response","Headers"].map(Ct),sh=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function kr(a,r,{allOwnKeys:i=!1}={}){if(a===null||typeof a>"u")return;let l,d;if(typeof a!="object"&&(a=[a]),Ba(a))for(l=0,d=a.length;l<d;l++)r.call(null,a[l],l,a);else{if(Cn(a))return;const u=i?Object.getOwnPropertyNames(a):Object.keys(a),p=u.length;let f;for(l=0;l<p;l++)f=u[l],r.call(null,a[f],f,a)}}function Mp(a,r){if(Cn(a))return null;r=r.toLowerCase();const i=Object.keys(a);let l=i.length,d;for(;l-- >0;)if(d=i[l],r===d.toLowerCase())return d;return null}const Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Np=a=>!Ha(a)&&a!==Ia;function ul(...a){const{caseless:r,skipUndefined:i}=Np(this)&&this||{},l={},d=(u,p)=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const f=r&&typeof p=="string"&&Mp(l,p)||p,m=Xs(l,f)?l[f]:void 0;Ds(m)&&Ds(u)?l[f]=ul(m,u):Ds(u)?l[f]=ul({},u):Ba(u)?l[f]=u.slice():(!i||!Ha(u))&&(l[f]=u)};for(let u=0,p=a.length;u<p;u++){const f=a[u];if(!f||Cn(f)||(kr(f,d),typeof f!="object"||Ba(f)))continue;const m=Object.getOwnPropertySymbols(f);for(let y=0;y<m.length;y++){const b=m[y];yh.call(f,b)&&d(f[b],b)}}return l}const ih=(a,r,i,{allOwnKeys:l}={})=>(kr(r,(d,u)=>{i&&pt(d)?Object.defineProperty(a,u,{__proto__:null,value:Rp(d,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,u,{__proto__:null,value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),a),oh=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),lh=(a,r,i,l)=>{a.prototype=Object.create(r.prototype,l),Object.defineProperty(a.prototype,"constructor",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{__proto__:null,value:r.prototype}),i&&Object.assign(a.prototype,i)},dh=(a,r,i,l)=>{let d,u,p;const f={};if(r=r||{},a==null)return r;do{for(d=Object.getOwnPropertyNames(a),u=d.length;u-- >0;)p=d[u],(!l||l(p,a,r))&&!f[p]&&(r[p]=a[p],f[p]=!0);a=i!==!1&&Sn(a)}while(a&&(!i||i(a,r))&&a!==Object.prototype);return r},ch=(a,r,i)=>{a=String(a),(i===void 0||i>a.length)&&(i=a.length),i-=r.length;const l=a.indexOf(r,i);return l!==-1&&l===i},uh=a=>{if(!a)return null;if(Ba(a))return a;let r=a.length;if(!Ap(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=a[r];return i},ph=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&Sn(Uint8Array)),gh=(a,r)=>{const l=(a&&a[wr]).call(a);let d;for(;(d=l.next())&&!d.done;){const u=d.value;r.call(a,u[0],u[1])}},fh=(a,r)=>{let i;const l=[];for(;(i=a.exec(r))!==null;)l.push(i);return l},mh=Ct("HTMLFormElement"),hh=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,d){return l.toUpperCase()+d}),{propertyIsEnumerable:yh}=Object.prototype,vh=Ct("RegExp"),Op=(a,r)=>{const i=Object.getOwnPropertyDescriptors(a),l={};kr(i,(d,u)=>{let p;(p=r(d,u,a))!==!1&&(l[u]=p||d)}),Object.defineProperties(a,l)},bh=a=>{Op(a,(r,i)=>{if(pt(a)&&["arguments","caller","callee"].includes(i))return!1;const l=a[i];if(pt(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},xh=(a,r)=>{const i={},l=d=>{d.forEach(u=>{i[u]=!0})};return Ba(a)?l(a):l(String(a).split(r)),i},wh=()=>{},kh=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function Sh(a){return!!(a&&pt(a.append)&&a[Tp]==="FormData"&&a[wr])}const Eh=a=>{const r=new WeakSet,i=l=>{if(Ln(l)){if(r.has(l))return;if(Cn(l))return l;if(!("toJSON"in l)){r.add(l);let d;if(Ym(l)){d=[];for(const u of l){const p=i(u);!Ha(p)&&d.push(p)}}else d=Ba(l)?[]:{},kr(l,(u,p)=>{const f=i(u);!Ha(f)&&(d[p]=f)});return r.delete(l),d}}return l};return i(a)},_h=Ct("AsyncFunction"),Ch=a=>a&&(Ln(a)||pt(a))&&pt(a.then)&&pt(a.catch),zp=((a,r)=>a?setImmediate:r?((i,l)=>(Ia.addEventListener("message",({source:d,data:u})=>{d===Ia&&u===i&&l.length&&l.shift()()},!1),d=>{l.push(d),Ia.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",pt(Ia.postMessage)),Lh=typeof queueMicrotask<"u"?queueMicrotask.bind(Ia):typeof process<"u"&&process.nextTick||zp,Dp=a=>a!=null&&pt(a[wr]),$h=a=>a!=null&&br(a,wr)&&Dp(a),x={isArray:Ba,isArrayBuffer:Pp,isBuffer:Cn,isFormData:Zm,isArrayBufferView:qm,isString:Fm,isNumber:Ap,isBoolean:Um,isObject:Ln,isPlainObject:Ds,isEmptyObject:Bm,isReadableStream:th,isRequest:ah,isResponse:nh,isHeaders:rh,isUndefined:Ha,isDate:Hm,isFile:Xm,isReactNativeBlob:Wm,isReactNative:Vm,isBlob:Qm,isRegExp:vh,isFunction:pt,isStream:Gm,isURLSearchParams:eh,isTypedArray:ph,isFileList:Km,forEach:kr,merge:ul,extend:ih,trim:sh,stripBOM:oh,inherits:lh,toFlatObject:dh,kindOf:Ll,kindOfTest:Ct,endsWith:ch,toArray:uh,forEachEntry:gh,matchAll:fh,isHTMLForm:mh,hasOwnProperty:Xs,hasOwnProp:Xs,hasOwnInPrototypeChain:br,getSafeProp:jm,reduceDescriptors:Op,freezeMethods:bh,toObjectSet:xh,toCamelCase:hh,noop:wh,toFiniteNumber:kh,findKey:Mp,global:Ia,isContextDefined:Np,isSpecCompliantForm:Sh,toJSONObject:Eh,isAsyncFn:_h,isThenable:Ch,setImmediate:zp,asap:Lh,isIterable:Dp,isSafeIterable:$h},Rh=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Th=a=>{const r={};let i,l,d;return a&&a.split(`
`).forEach(function(p){d=p.indexOf(":"),i=p.substring(0,d).trim().toLowerCase(),l=p.substring(d+1).trim();const f=x.hasOwnProp(r,i);!i||f&&x.hasOwnProp(Rh,i)||(i==="set-cookie"?f?r[i].push(l):r[i]=[l]:r[i]=f?r[i]+", "+l:l)}),r};function Ph(a){let r=0,i=a.length;for(;r<i;){const l=a.charCodeAt(r);if(l!==9&&l!==32)break;r+=1}for(;i>r;){const l=a.charCodeAt(i-1);if(l!==9&&l!==32)break;i-=1}return r===0&&i===a.length?a:a.slice(r,i)}const Ah=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Mh=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function $l(a,r){return x.isArray(a)?a.map(i=>$l(i,r)):Ph(String(a).replace(r,""))}const Nh=a=>$l(a,Ah),Oh=a=>$l(a,Mh);function Ip(a){const r=Object.create(null);return x.forEach(a.toJSON(),(i,l)=>{r[l]=Oh(i)}),r}const Fu=Symbol("internals");function fr(a){return a&&String(a).trim().toLowerCase()}function Is(a){return a===!1||a==null?a:x.isArray(a)?a.map(Is):Nh(String(a))}function zh(a){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(a);)r[l[1]]=l[2];return r}const Dh=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Jo(a){let r=0,i=a.length;for(;r<i;){const l=a.charCodeAt(r);if(l!==9&&l!==32)break;r+=1}for(;i>r;){const l=a.charCodeAt(i-1);if(l!==9&&l!==32)break;i-=1}return r===0&&i===a.length?a:a.slice(r,i)}function Ih(a){const r=a.length-1;if(r<1||a.charCodeAt(0)!==34||a.charCodeAt(r)!==34)return a;let i="";for(let l=1;l<r;l++){const d=a.charCodeAt(l);if(d===34||d===92&&(l+=1,l>=r))return a;i+=a[l]}return i}function jh(a){const r=Object.create(null),i=String(a);let l=0,d=!1,u=!1;function p(f){const m=Jo(i.slice(l,f)),y=m.indexOf("=");if(y<1)return;const b=Jo(m.slice(0,y));if(!Dh.test(b))return;const _=b.toLowerCase();if(_==="__proto__"||_==="constructor"||_==="prototype")return;const $=Jo(m.slice(y+1));r[_]=Ih($)}for(let f=0;f<i.length;f++){const m=i.charCodeAt(f);d?u?u=!1:m===92?u=!0:m===34&&(d=!1):m===34?d=!0:(m===44||m===59)&&(p(f),l=f+1)}return p(i.length),r}const qh=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Zo(a,r,i,l,d){if(x.isFunction(l))return l.call(this,r,i);if(d&&(r=i),!!x.isString(r)){if(x.isString(l))return r.indexOf(l)!==-1;if(x.isRegExp(l))return l.test(r)}}function Fh(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function Uh(a,r){const i=x.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(a,l+i,{__proto__:null,value:function(d,u,p){return this[l].call(this,r,d,u,p)},configurable:!0})})}let at=class{constructor(r){r&&this.set(r)}set(r,i,l){const d=this;function u(f,m,y){const b=fr(m);if(!b)return;const _=x.findKey(d,b);(!_||d[_]===void 0||y===!0||y===void 0&&d[_]!==!1)&&(d[_||m]=Is(f))}const p=(f,m)=>x.forEach(f,(y,b)=>u(y,b,m));if(x.isPlainObject(r)||r instanceof this.constructor)p(r,i);else if(x.isString(r)&&(r=r.trim())&&!qh(r))p(Th(r),i);else if(x.isObject(r)&&x.isSafeIterable(r)){let f=Object.create(null),m,y;for(const b of r){if(!x.isArray(b))throw new TypeError("Object iterator must return a key-value pair");y=b[0],x.hasOwnProp(f,y)?(m=f[y],f[y]=x.isArray(m)?[...m,b[1]]:[m,b[1]]):f[y]=b[1]}p(f,i)}else r!=null&&u(i,r,l);return this}get(r,i){if(r=fr(r),r){const l=x.findKey(this,r);if(l){const d=this[l];if(!i)return d;if(i===!0)return zh(d);if(x.isFunction(i))return i.call(this,d,l);if(x.isRegExp(i))return i.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=fr(r),r){const l=x.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||Zo(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let d=!1;function u(p){if(p=fr(p),p){const f=x.findKey(l,p);f&&(!i||Zo(l,l[f],f,i))&&(delete l[f],d=!0)}}return x.isArray(r)?r.forEach(u):u(r),d}clear(r){const i=Object.keys(this);let l=i.length,d=!1;for(;l--;){const u=i[l];(!r||Zo(this,this[u],u,r,!0))&&(delete this[u],d=!0)}return d}normalize(r){const i=this,l={};return x.forEach(this,(d,u)=>{const p=x.findKey(l,u);if(p){i[p]=Is(d),delete i[u];return}const f=r?Fh(u):String(u).trim();f!==u&&delete i[u],i[f]=Is(d),l[f]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return x.forEach(this,(l,d)=>{l!=null&&l!==!1&&(i[d]=r&&x.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){const r=this.get("set-cookie");return x.isArray(r)?r:r==null||r===!1?[]:[r]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static parseParameters(r){return jh(r)}static concat(r,...i){const l=new this(r);return i.forEach(d=>l.set(d)),l}static accessor(r){const l=(this[Fu]=this[Fu]={accessors:{}}).accessors,d=this.prototype;function u(p){const f=fr(p);l[f]||(Uh(d,p),l[f]=!0)}return x.isArray(r)?r.forEach(u):u(r),this}};at.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(at.prototype,({value:a},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(l){this[i]=l}}});x.freezeMethods(at);const Ws="[REDACTED ****]";function Bh(a){if(x.hasOwnProp(a,"toJSON"))return!0;let r=Object.getPrototypeOf(a);for(;r&&r!==Object.prototype;){if(x.hasOwnProp(r,"toJSON"))return!0;r=Object.getPrototypeOf(r)}return!1}function Hh(a,r){const i=new Set(r.map(u=>String(u).toLowerCase())),l=[],d=u=>{if(u===null||typeof u!="object"||x.isBuffer(u))return u;if(l.indexOf(u)!==-1)return;u instanceof at&&(u=u.toJSON()),l.push(u);let p;if(x.isArray(u))p=[],u.forEach((f,m)=>{const y=d(f);x.isUndefined(y)||(p[m]=y)});else{if(!x.isPlainObject(u)&&Bh(u))return l.pop(),u;p=Object.create(null);for(const[f,m]of Object.entries(u)){const y=i.has(f.toLowerCase())?Ws:d(m);x.isUndefined(y)||(p[f]=y)}}return l.pop(),p};return d(a)}function Uu(a){try{return String(a)}catch{return""}}function Xh(a){return a.errors.map(i=>{try{return i&&i.message?Uu(i.message):Uu(i)}catch{return""}}).filter(Boolean).join("; ")||a.name||"AggregateError"}let X=class jp extends Error{static from(r,i,l,d,u,p){let f=r.message;!f&&x.isArray(r.errors)&&r.errors.length&&(f=Xh(r));const m=new jp(f,i||r.code,l,d,u);return Object.defineProperty(m,"cause",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),m.name=r.name,r.status!=null&&m.status==null&&(m.status=r.status),p&&Object.assign(m,p),m}constructor(r,i,l,d,u){super(r),Object.defineProperty(this,"message",{__proto__:null,value:r,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),l&&(this.config=l),d&&(this.request=d),u&&(this.response=u,this.status=u.status)}toJSON(){const r=this.config,i=r&&x.hasOwnProp(r,"redact")?r.redact:void 0,l=x.isArray(i)&&i.length>0?Hh(r,i):x.toJSONObject(r);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};X.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";X.ERR_BAD_OPTION="ERR_BAD_OPTION";X.ECONNABORTED="ECONNABORTED";X.ETIMEDOUT="ETIMEDOUT";X.ECONNREFUSED="ECONNREFUSED";X.ERR_NETWORK="ERR_NETWORK";X.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";X.ERR_DEPRECATED="ERR_DEPRECATED";X.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";X.ERR_BAD_REQUEST="ERR_BAD_REQUEST";X.ERR_CANCELED="ERR_CANCELED";X.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";X.ERR_INVALID_URL="ERR_INVALID_URL";X.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Wh=null,qp=100;function pl(a){return x.isPlainObject(a)||x.isArray(a)}function Fp(a){return x.endsWith(a,"[]")?a.slice(0,-2):a}function el(a,r,i){return a?a.concat(r).map(function(d,u){return d=Fp(d),!i&&u?"["+d+"]":d}).join(i?".":""):r}function Vh(a){return x.isArray(a)&&!a.some(pl)}const Qh=x.toFlatObject(x,{},null,function(r){return/^is[A-Z]/.test(r)});function Gs(a,r,i){if(!x.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,i=x.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,z){return!x.isUndefined(z[M])});const l=i.metaTokens,d=i.visitor||P,u=i.dots,p=i.indexes,f=i.Blob||typeof Blob<"u"&&Blob,m=i.maxDepth===void 0?qp:i.maxDepth,y=f&&x.isSpecCompliantForm(r),b=[];if(!x.isFunction(d))throw new TypeError("visitor must be a function");function _(E){if(E===null)return"";if(x.isDate(E))return E.toISOString();if(x.isBoolean(E))return E.toString();if(!y&&x.isBlob(E))throw new X("Blob is not supported. Use a Buffer instead.");if(x.isArrayBuffer(E)||x.isTypedArray(E)){if(y&&typeof f=="function")return new f([E]);throw new X("Blob is not supported. Use a Buffer instead.",X.ERR_NOT_SUPPORT)}return E}function $(E){if(E>m)throw new X("Object is too deeply nested ("+E+" levels). Max depth: "+m,X.ERR_FORM_DATA_DEPTH_EXCEEDED)}function T(E,M){if(m===1/0)return JSON.stringify(E);const z=[];return JSON.stringify(E,function(W,F){if(!x.isObject(F))return F;for(;z.length&&z[z.length-1]!==this;)z.pop();return z.push(F),$(M+z.length-1),F})}function P(E,M,z){let j=E;if(x.isReactNative(r)&&x.isReactNativeBlob(E))return r.append(el(z,M,u),_(E)),!1;if(E&&!z&&typeof E=="object"){if(x.endsWith(M,"{}"))M=l?M:M.slice(0,-2),E=T(E,1);else if(x.isArray(E)&&Vh(E)||(x.isFileList(E)||x.endsWith(M,"[]"))&&(j=x.toArray(E)))return M=Fp(M),j.forEach(function(F,oe){!(x.isUndefined(F)||F===null)&&r.append(p===!0?el([M],oe,u):p===null?M:M+"[]",_(F))}),!1}return pl(E)?!0:(r.append(el(z,M,u),_(E)),!1)}const A=Object.assign(Qh,{defaultVisitor:P,convertValue:_,isVisitable:pl});function S(E,M,z=0){if(!x.isUndefined(E)){if($(z),b.indexOf(E)!==-1)throw new Error("Circular reference detected in "+M.join("."));b.push(E),x.forEach(E,function(W,F){(!(x.isUndefined(W)||W===null)&&d.call(r,W,x.isString(F)?F.trim():F,M,A))===!0&&S(W,M?M.concat(F):[F],z+1)}),b.pop()}}if(!x.isObject(a))throw new TypeError("data must be an object");return S(a),r}function Bu(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(a).replace(/[!'()~]|%20/g,function(l){return r[l]})}function Rl(a,r){this._pairs=[],a&&Gs(a,this,r)}const Up=Rl.prototype;Up.append=function(r,i){this._pairs.push([r,i])};Up.toString=function(r){const i=r?l=>r.call(this,l,Bu):Bu;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};function Kh(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Bp(a,r,i){if(!r)return a;a=a||"";const l=x.isFunction(i)?{serialize:i}:i,d=x.getSafeProp(l,"encode")||Kh,u=x.getSafeProp(l,"serialize");let p;if(u?p=u(r,l):p=x.isURLSearchParams(r)?r.toString():new Rl(r,l).toString(d),p){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+p}return a}class Hu{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){x.forEach(this.handlers,function(l){l!==null&&r(l)})}}const Tl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Yh=typeof URLSearchParams<"u"?URLSearchParams:Rl,Gh=typeof FormData<"u"?FormData:null,Jh=typeof Blob<"u"?Blob:null,Zh={isBrowser:!0,classes:{URLSearchParams:Yh,FormData:Gh,Blob:Jh},protocols:["http","https","file","blob","url","data"]},Pl=typeof window<"u"&&typeof document<"u",gl=typeof navigator=="object"&&navigator||void 0,ey=Pl&&(!gl||["ReactNative","NativeScript","NS"].indexOf(gl.product)<0),ty=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ay=Pl&&window.location.href||"http://localhost",ny=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pl,hasStandardBrowserEnv:ey,hasStandardBrowserWebWorkerEnv:ty,navigator:gl,origin:ay},Symbol.toStringTag,{value:"Module"})),Ye={...ny,...Zh};function ry(a,r){return Gs(a,new Ye.classes.URLSearchParams,{visitor:function(i,l,d,u){return Ye.isNode&&x.isBuffer(i)?(this.append(l,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...r})}const Xu=qp;function Hp(a){if(a>Xu)throw new X("FormData field is too deeply nested ("+a+" levels). Max depth: "+Xu,X.ERR_FORM_DATA_DEPTH_EXCEEDED)}function sy(a){const r=[],i=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=i.exec(a))!==null;)Hp(r.length),r.push(l[0]==="[]"?"":l[1]||l[0]);return r}function iy(a){const r={},i=Object.keys(a);let l;const d=i.length;let u;for(l=0;l<d;l++)u=i[l],r[u]=a[u];return r}function Xp(a){function r(i,l,d,u){Hp(u);let p=i[u++];if(p==="__proto__")return!0;const f=Number.isFinite(+p),m=u>=i.length;return p=!p&&x.isArray(d)?d.length:p,m?(x.hasOwnProp(d,p)?d[p]=x.isArray(d[p])?d[p].concat(l):[d[p],l]:d[p]=l,!f):((!x.hasOwnProp(d,p)||!x.isObject(d[p]))&&(d[p]=[]),r(i,l,d[p],u)&&x.isArray(d[p])&&(d[p]=iy(d[p])),!f)}if(x.isFormData(a)&&x.isFunction(a.entries)){const i={};return x.forEachEntry(a,(l,d)=>{r(sy(l),d,i,0)}),i}return null}const vn=(a,r)=>a!=null&&x.hasOwnProp(a,r)?a[r]:void 0;function oy(a,r,i){if(x.isString(a))try{return(r||JSON.parse)(a),x.trim(a)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(a)}const Sr={transitional:Tl,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",d=l.indexOf("application/json")>-1,u=x.isObject(r);if(u&&x.isHTMLForm(r)&&(r=new FormData(r)),x.isFormData(r))return d?JSON.stringify(Xp(r)):r;if(x.isArrayBuffer(r)||x.isBuffer(r)||x.isStream(r)||x.isFile(r)||x.isBlob(r)||x.isReadableStream(r))return r;if(x.isArrayBufferView(r))return r.buffer;if(x.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let f;if(u){const m=vn(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return ry(r,m).toString();if((f=x.isFileList(r))||l.indexOf("multipart/form-data")>-1){const y=vn(this,"env"),b=y&&y.FormData;return Gs(f?{"files[]":r}:r,b&&new b,m)}}return u||d?(i.setContentType("application/json",!1),oy(r)):r}],transformResponse:[function(r){const i=vn(this,"transitional")||Sr.transitional,l=i&&i.forcedJSONParsing,d=vn(this,"responseType"),u=d==="json";if(x.isResponse(r)||x.isReadableStream(r))return r;if(r&&x.isString(r)&&(l&&!d||u)){const f=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(r,vn(this,"parseReviver"))}catch(m){if(f)throw m.name==="SyntaxError"?X.from(m,X.ERR_BAD_RESPONSE,this,null,vn(this,"response")):m}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ye.classes.FormData,Blob:Ye.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch","query"],a=>{Sr.headers[a]={}});function tl(a,r){const i=this||Sr,l=r||i,d=at.from(l.headers);let u=l.data;return x.forEach(a,function(f){u=f.call(i,u,d.normalize(),r?r.status:void 0)}),d.normalize(),u}function Wp(a){return!!(a&&a.__CANCEL__)}let Er=class extends X{constructor(r,i,l){super(r??"canceled",X.ERR_CANCELED,i,l),this.name="CanceledError",this.__CANCEL__=!0}};function Vp(a,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?a(i):r(new X("Request failed with status code "+i.status,i.status>=400&&i.status<500?X.ERR_BAD_REQUEST:X.ERR_BAD_RESPONSE,i.config,i.request,i))}function ly(a){const r=/^([-+\w]{1,25}):(?:\/\/)?/.exec(a);return r&&r[1]||""}function dy(a,r){a=a||10;const i=new Array(a),l=new Array(a);let d=0,u=0,p;return r=r!==void 0?r:1e3,function(m){const y=Date.now(),b=l[u];p||(p=y),i[d]=m,l[d]=y;let _=u,$=0;for(;_!==d;)$+=i[_++],_=_%a;if(d=(d+1)%a,d===u&&(u=(u+1)%a),y-p<r)return;const T=b&&y-b;return T?Math.round($*1e3/T):void 0}}function cy(a,r){let i=0,l=1e3/r,d,u;const p=(y,b=Date.now())=>{i=b,d=null,u&&(clearTimeout(u),u=null),a(...y)};return[(...y)=>{const b=Date.now(),_=b-i;_>=l?p(y,b):(d=y,u||(u=setTimeout(()=>{u=null,p(d)},l-_)))},()=>d&&p(d)]}const Vs=(a,r,i=3)=>{let l=0;const d=dy(50,250);return cy(u=>{if(!u||typeof u.loaded!="number")return;const p=u.loaded,f=u.lengthComputable?u.total:void 0,m=Math.max(0,f!=null?Math.min(p,f):p),y=Math.max(0,m-l),b=d(y);l=Math.max(l,m);const _={loaded:m,total:f,progress:f?m/f:void 0,bytes:y,rate:b||void 0,estimated:b&&f?(f-m)/b:void 0,event:u,lengthComputable:f!=null,[r?"download":"upload"]:!0};a(_)},i)},Wu=(a,r)=>{const i=a!=null;return[l=>r[0]({lengthComputable:i,total:a,loaded:l}),r[1]]},Vu=(a,r=x.asap)=>(...i)=>r(()=>a(...i)),uy=Ye.hasStandardBrowserEnv?((a,r)=>i=>(i=new URL(i,Ye.origin),a.protocol===i.protocol&&a.host===i.host&&(r||a.port===i.port)))(new URL(Ye.origin),Ye.navigator&&/(msie|trident)/i.test(Ye.navigator.userAgent)):()=>!0,py=Ye.hasStandardBrowserEnv?{write(a,r,i,l,d,u,p){if(typeof document>"u")return;const f=[`${a}=${encodeURIComponent(r)}`];x.isNumber(i)&&f.push(`expires=${new Date(i).toUTCString()}`),x.isString(l)&&f.push(`path=${l}`),x.isString(d)&&f.push(`domain=${d}`),u===!0&&f.push("secure"),x.isString(p)&&f.push(`SameSite=${p}`),document.cookie=f.join("; ")},read(a){if(typeof document>"u")return null;const r=document.cookie.split(";");for(let i=0;i<r.length;i++){const l=r[i].replace(/^\s+/,""),d=l.indexOf("=");if(d!==-1&&l.slice(0,d)===a)try{return decodeURIComponent(l.slice(d+1))}catch{return l.slice(d+1)}}return null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gy(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function fy(a,r){if(!r)return a;let i=a.length;for(;i>0&&a.charCodeAt(i-1)===47;)i--;return a.slice(0,i)+"/"+r.replace(/^\/+/,"")}const my=/^https?:(?!\/\/)/i,hy=/[\t\n\r]/g;function yy(a){let r=0;for(;r<a.length&&a.charCodeAt(r)<=32;)r++;return a.slice(r)}function vy(a){return yy(a).replace(hy,"")}function by(a){return a&&a.replace(/(^|&)([^=&]*=)?[^&]+/g,(r,i,l="")=>`${i}${l}${Ws}`)}function xy(a){const r=a.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Ws}@`),i=r.indexOf("#"),d=(i===-1?r:r.slice(0,i)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Ws}`);return i===-1?d:`${d}#${by(r.slice(i+1))}`}function Qu(a,r){if(typeof a=="string"){const i=vy(a);if(my.test(i))throw new X(`Invalid URL ${JSON.stringify(xy(i))}: missing "//" after protocol`,X.ERR_INVALID_URL,r)}}function Qp(a,r,i,l){Qu(r,l);let d=!gy(r);return a&&(d||i===!1)?(Qu(a,l),fy(a,r)):r}const Ku=a=>a instanceof at?{...a}:a,wy=a=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(a).concat(Object.getOwnPropertySymbols(a).filter(r=>Object.getOwnPropertyDescriptor(a,r).enumerable)):Object.keys(a);function Xa(a,r){a=a||{},r=r||{};const i=Object.create(null);Object.defineProperty(i,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(b,_,$,T){return x.isPlainObject(b)&&x.isPlainObject(_)?x.merge.call({caseless:T},b,_):x.isPlainObject(_)?x.merge({},_):x.isArray(_)?_.slice():_}function d(b,_,$,T){if(x.isUndefined(_)){if(!x.isUndefined(b))return l(void 0,b,$,T)}else return l(b,_,$,T)}function u(b,_){if(!x.isUndefined(_))return l(void 0,_)}function p(b,_){if(x.isUndefined(_)){if(!x.isUndefined(b))return l(void 0,b)}else return l(void 0,_)}function f(b){const _=x.hasOwnProp(r,"transitional")?r.transitional:void 0;if(!x.isUndefined(_))if(x.isPlainObject(_)){if(x.hasOwnProp(_,b))return _[b]}else return;const $=x.hasOwnProp(a,"transitional")?a.transitional:void 0;if(x.isPlainObject($)&&x.hasOwnProp($,b))return $[b]}function m(b,_,$){if(x.hasOwnProp(r,$))return l(b,_);if(x.hasOwnProp(a,$))return l(void 0,b)}const y={url:u,method:u,data:u,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,allowedSocketPaths:p,responseEncoding:p,validateStatus:m,headers:(b,_,$)=>d(Ku(b),Ku(_),$,!0)};return x.forEach(wy({...a,...r}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const $=x.hasOwnProp(y,_)?y[_]:d,T=x.hasOwnProp(a,_)?a[_]:void 0,P=x.hasOwnProp(r,_)?r[_]:void 0,A=$(T,P,_);x.isUndefined(A)&&$!==m||(i[_]=A)}),x.hasOwnProp(r,"validateStatus")&&x.isUndefined(r.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(x.hasOwnProp(a,"validateStatus")?i.validateStatus=l(void 0,a.validateStatus):delete i.validateStatus),i}const ky=["content-type","content-length"];function Sy(a,r,i){if(i!=="content-only"){a.set(r);return}Object.entries(r||{}).forEach(([l,d])=>{ky.includes(l.toLowerCase())&&a.set(l,d)})}const Ey=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(r,i)=>String.fromCharCode(parseInt(i,16)));function Kp(a){const r=Xa({},a),i=$=>x.hasOwnProp(r,$)?r[$]:void 0,l=i("data");let d=i("withXSRFToken");const u=i("xsrfHeaderName"),p=i("xsrfCookieName");let f=i("headers");const m=i("auth"),y=i("baseURL"),b=i("allowAbsoluteUrls"),_=i("url");if(r.headers=f=at.from(f),r.url=Bp(Qp(y,_,b,r),i("params"),i("paramsSerializer")),m){const $=x.getSafeProp(m,"username")||"",T=x.getSafeProp(m,"password")||"";try{f.set("Authorization","Basic "+btoa($+":"+(T?Ey(T):"")))}catch(P){throw X.from(P,X.ERR_BAD_OPTION_VALUE,a)}}if(x.isFormData(l)&&(Ye.hasStandardBrowserEnv||Ye.hasStandardBrowserWebWorkerEnv||x.isReactNative(l)?f.setContentType(void 0):x.isFunction(l.getHeaders)&&Sy(f,l.getHeaders(),i("formDataHeaderPolicy"))),Ye.hasStandardBrowserEnv&&(x.isFunction(d)&&(d=d(r)),d===!0||d==null&&uy(r.url))){const T=u&&p&&py.read(p);T&&f.set(u,T)}return r}const _y=typeof XMLHttpRequest<"u",Cy=_y&&function(a){return new Promise(function(i,l){const d=Kp(a);let u=d.data;const p=at.from(d.headers).normalize();let{responseType:f,onUploadProgress:m,onDownloadProgress:y}=d,b,_,$,T,P;function A(){T&&T(),P&&P(),d.cancelToken&&d.cancelToken.unsubscribe(b),d.signal&&d.signal.removeEventListener("abort",b)}let S=new XMLHttpRequest;S.open(d.method.toUpperCase(),d.url,!0),S.timeout=d.timeout;function E(){if(!S)return;const z=at.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),W={data:!f||f==="text"||f==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:z,config:a,request:S};Vp(function(oe){i(oe),A()},function(oe){l(oe),A()},W),S=null}"onloadend"in S?S.onloadend=E:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(E)},S.onabort=function(){S&&(l(new X("Request aborted",X.ECONNABORTED,a,S)),A(),S=null)},S.onerror=function(j){const W=j&&j.message?j.message:"Network Error",F=new X(W,X.ERR_NETWORK,a,S);F.event=j||null,l(F),A(),S=null},S.ontimeout=function(){let j=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const W=d.transitional||Tl;d.timeoutErrorMessage&&(j=d.timeoutErrorMessage),l(new X(j,W.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,a,S)),A(),S=null},u===void 0&&p.setContentType(null),"setRequestHeader"in S&&x.forEach(Ip(p),function(j,W){S.setRequestHeader(W,j)}),x.isUndefined(d.withCredentials)||(S.withCredentials=!!d.withCredentials),f&&f!=="json"&&(S.responseType=d.responseType),y&&([$,P]=Vs(y,!0),S.addEventListener("progress",$)),m&&S.upload&&([_,T]=Vs(m),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",T)),(d.cancelToken||d.signal)&&(b=z=>{S&&(l(!z||z.type?new Er(null,a,S):z),S.abort(),A(),S=null)},d.cancelToken&&d.cancelToken.subscribe(b),d.signal&&(d.signal.aborted?b():d.signal.addEventListener("abort",b)));const M=ly(d.url);if(M&&!Ye.protocols.includes(M)){l(new X("Unsupported protocol "+M+":",X.ERR_BAD_REQUEST,a)),A();return}S.send(u||null)})},Ly=(a,r)=>{if(a=a?a.filter(Boolean):[],!r&&!a.length)return;const i=new AbortController;let l=!1;const d=function(m){if(!l){l=!0,p();const y=m instanceof Error?m:this.reason;i.abort(y instanceof X?y:new Er(y instanceof Error?y.message:y))}};let u=r&&setTimeout(()=>{u=null,d(new X(`timeout of ${r}ms exceeded`,X.ETIMEDOUT))},r);const p=()=>{a&&(u&&clearTimeout(u),u=null,a.forEach(m=>{m.unsubscribe?m.unsubscribe(d):m.removeEventListener("abort",d)}),a=null)};a.forEach(m=>{if(!l){if(m.aborted){d.call(m);return}m.addEventListener("abort",d,{once:!0})}});const{signal:f}=i;return f.unsubscribe=()=>x.asap(p),f},$y=function*(a,r){let i=a.byteLength;if(i<r){yield a;return}let l=0,d;for(;l<i;)d=l+r,yield a.slice(l,d),l=d},Ry=async function*(a,r){for await(const i of Ty(a))yield*$y(i,r)},Ty=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Yu=(a,r,i,l)=>{const d=Ry(a,r);let u=0,p,f=m=>{p||(p=!0,l&&l(m))};return new ReadableStream({async pull(m){try{const{done:y,value:b}=await d.next();if(y){f(),m.close();return}let _=b.byteLength;if(i){let $=u+=_;i($)}m.enqueue(new Uint8Array(b))}catch(y){throw f(y),y}},cancel(m){return f(m),d.return()}},{highWaterMark:2})},Gu=a=>a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102,Yp=(a,r,i)=>r+2<i&&Gu(a.charCodeAt(r+1))&&Gu(a.charCodeAt(r+2)),Ju=a=>a<=57?a-48:(a&223)-55,Py=a=>a>=65&&a<=90||a>=97&&a<=122||a>=48&&a<=57||a===43||a===47||a===45||a===95,Ay=a=>a===9||a===10||a===12||a===13||a===32,My=a=>{const r=Math.floor(a/4),i=a%4;return r*3+(i===2?1:i===3?2:0)},Ny=a=>{const r=a.length;let i=0;return r>0&&a.charCodeAt(r-1)===61&&(i++,r>1&&a.charCodeAt(r-2)===61&&i++),Math.floor((r-i)*3/4)},Oy=a=>{const r=a.length;let i=0,l=0,d=!1;for(let u=0;u<r;u++){let p=a.charCodeAt(u);if(p===37&&Yp(a,u,r)&&(p=Ju(a.charCodeAt(u+1))*16+Ju(a.charCodeAt(u+2)),u+=2),!Ay(p)){if(p===61){l++;continue}if(!Py(p)||l>0){d=!0;continue}i++}}return d||l>2||l>0&&(i+l)%4!==0||i%4===1?Ny(a):My(i)},zy=(a,r)=>{if(!a||typeof a!="string"||!a.startsWith("data:"))return 0;const i=a.indexOf(",");if(i<0)return 0;const l=a.slice(5,i),d=a.slice(i+1);if(/;base64/i.test(l))return r(d);let p=0;for(let f=0,m=d.length;f<m;f++){const y=d.charCodeAt(f);if(y===37&&Yp(d,f,m))p+=1,f+=2;else if(y<128)p+=1;else if(y<2048)p+=2;else if(y>=55296&&y<=56319&&f+1<m){const b=d.charCodeAt(f+1);b>=56320&&b<=57343?(p+=4,f++):p+=3}else p+=3}return p};function Dy(a){const r=typeof a=="string"?a.indexOf("#"):-1;return zy(r===-1?a:a.slice(0,r),Oy)}const Al="1.19.0",Zu=64*1024,{isFunction:Os}=x,Iy=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(r,i)=>String.fromCharCode(parseInt(i,16))),ep=a=>{if(!x.isString(a))return a;try{return decodeURIComponent(a)}catch{return a}},tp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},jy=a=>{const r=a.indexOf("://");let i=a;return r!==-1&&(i=i.slice(r+3)),i.includes("@")||i.includes(":")},qy=a=>{const r=x.global!==void 0&&x.global!==null?x.global:globalThis,{ReadableStream:i,TextEncoder:l}=r;a=x.merge.call({skipUndefined:!0},{Request:r.Request,Response:r.Response},a);const{fetch:d,Request:u,Response:p}=a,f=d?Os(d):typeof fetch=="function",m=Os(u),y=Os(p);if(!f)return!1;const b=f&&Os(i),_=f&&(typeof l=="function"?(E=>M=>E.encode(M))(new l):async E=>new Uint8Array(await new u(E).arrayBuffer())),$=m&&b&&tp(()=>{let E=!1;const M=new u(Ye.origin,{body:new i,method:"POST",get duplex(){return E=!0,"half"}}),z=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),E&&!z}),T=y&&b&&tp(()=>x.isReadableStream(new p("").body)),P={stream:T&&(E=>E.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!P[E]&&(P[E]=(M,z)=>{let j=M&&M[E];if(j)return j.call(M);throw new X(`Response type '${E}' is not supported`,X.ERR_NOT_SUPPORT,z)})});const A=async E=>{if(E==null)return 0;if(x.isBlob(E))return E.size;if(x.isSpecCompliantForm(E))return(await new u(Ye.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(x.isArrayBufferView(E)||x.isArrayBuffer(E))return E.byteLength;if(x.isURLSearchParams(E)&&(E=E+""),x.isString(E))return(await _(E)).byteLength},S=async(E,M)=>{const z=x.toFiniteNumber(E.getContentLength());return z??A(M)};return async E=>{let{url:M,method:z,data:j,signal:W,cancelToken:F,timeout:oe,onDownloadProgress:ie,onUploadProgress:V,responseType:K,headers:se,withCredentials:te="same-origin",fetchOptions:ue,maxContentLength:pe,maxBodyLength:Z}=Kp(E);const we=x.isNumber(pe)&&pe>-1,ye=x.isNumber(Z)&&Z>-1,B=Y=>x.hasOwnProp(E,Y)?E[Y]:void 0;let ae=d||fetch;K=K?(K+"").toLowerCase():"text";let H=Ly([W,F&&F.toAbortSignal()],oe),k=null;const N=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let ce,fe=null;const be=()=>new X("Request body larger than maxBodyLength limit",X.ERR_BAD_REQUEST,E,k);try{let Y;const ve=B("auth");if(ve){const G=x.getSafeProp(ve,"username")||"",$e=x.getSafeProp(ve,"password")||"";Y={username:G,password:$e}}if(jy(M)){const G=new URL(M,Ye.origin);if(!Y&&(G.username||G.password)){const $e=ep(G.username),ft=ep(G.password);Y={username:$e,password:ft}}(G.username||G.password)&&(G.username="",G.password="",M=G.href)}if(Y&&(se.delete("authorization"),se.set("Authorization","Basic "+btoa(Iy((Y.username||"")+":"+(Y.password||""))))),we&&typeof M=="string"&&M.startsWith("data:")&&Dy(M)>pe)throw new X("maxContentLength size of "+pe+" exceeded",X.ERR_BAD_RESPONSE,E,k);if(ye&&z!=="get"&&z!=="head"){const G=await A(j);if(typeof G=="number"&&isFinite(G)&&(ce=G,G>Z))throw be()}const ke=ye&&(x.isReadableStream(j)||x.isStream(j)),Se=(G,$e,ft)=>Yu(G,Zu,Lt=>{if(ye&&Lt>Z)throw fe=be();$e&&$e(Lt)},ft);if($&&z!=="get"&&z!=="head"&&(V||ke)){if(ce=ce??await S(se,j),ce!==0||ke){let G=new u(M,{method:"POST",body:j,duplex:"half"}),$e;if(x.isFormData(j)&&($e=G.headers.get("content-type"))&&se.setContentType($e),G.body){const[ft,Lt]=V&&Wu(ce,Vs(Vu(V)))||[];j=Se(G.body,ft,Lt)}}}else if(ke&&!m&&b&&z!=="get"&&z!=="head")j=Se(j);else if(ke&&m&&!$&&z!=="get"&&z!=="head")throw new X("Stream request bodies are not supported by the current fetch implementation",X.ERR_NOT_SUPPORT,E,k);x.isString(te)||(te=te?"include":"omit");const De=m&&"credentials"in u.prototype;if(x.isFormData(j)){const G=se.getContentType();G&&/^multipart\/form-data/i.test(G)&&!/boundary=/i.test(G)&&se.delete("content-type")}se.set("User-Agent","axios/"+Al,!1);const bt={...ue,signal:H,method:z.toUpperCase(),headers:Ip(se.normalize()),body:j,duplex:"half",credentials:De?te:void 0};k=m&&new u(M,bt);let nt=await(m?ae(k,ue):ae(M,bt));const Ot=at.from(nt.headers);if(we){const G=x.toFiniteNumber(Ot.getContentLength());if(G!=null&&G>pe)throw new X("maxContentLength size of "+pe+" exceeded",X.ERR_BAD_RESPONSE,E,k)}const zt=T&&(K==="stream"||K==="response");if(T&&nt.body&&(ie||we||zt&&N)){const G={};["status","statusText","headers"].forEach(Xt=>{G[Xt]=nt[Xt]});const $e=x.toFiniteNumber(Ot.getContentLength()),[ft,Lt]=ie&&Wu($e,Vs(Vu(ie),!0))||[];let ra=0;const sa=Xt=>{if(we&&(ra=Xt,ra>pe))throw new X("maxContentLength size of "+pe+" exceeded",X.ERR_BAD_RESPONSE,E,k);ft&&ft(Xt)};nt=new p(Yu(nt.body,Zu,sa,()=>{Lt&&Lt(),N&&N()}),G)}K=K||"text";let me=await P[x.findKey(P,K)||"text"](nt,E);if(we&&!T&&!zt){let G;if(me!=null&&(typeof me.byteLength=="number"?G=me.byteLength:typeof me.size=="number"?G=me.size:typeof me=="string"&&(G=typeof l=="function"?new l().encode(me).byteLength:me.length)),typeof G=="number"&&G>pe)throw new X("maxContentLength size of "+pe+" exceeded",X.ERR_BAD_RESPONSE,E,k)}return!zt&&N&&N(),await new Promise((G,$e)=>{Vp(G,$e,{data:me,headers:at.from(nt.headers),status:nt.status,statusText:nt.statusText,config:E,request:k})})}catch(Y){if(N&&N(),H&&H.aborted&&H.reason instanceof X){const ve=H.reason;throw ve.config=E,k&&(ve.request=k),Y!==ve&&Object.defineProperty(ve,"cause",{__proto__:null,value:Y,writable:!0,enumerable:!1,configurable:!0}),ve}if(fe)throw k&&!fe.request&&(fe.request=k),fe;if(Y instanceof X)throw k&&!Y.request&&(Y.request=k),Y;if(Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)){const ve=new X("Network Error",X.ERR_NETWORK,E,k,Y&&Y.response);throw Object.defineProperty(ve,"cause",{__proto__:null,value:Y.cause||Y,writable:!0,enumerable:!1,configurable:!0}),ve}throw X.from(Y,Y&&Y.code,E,k,Y&&Y.response)}}},Fy=new Map,Gp=a=>{let r=a&&a.env||{};const{fetch:i,Request:l,Response:d}=r,u=[l,d,i];let p=u.length,f=p,m,y,b=Fy;for(;f--;)m=u[f],y=b.get(m),y===void 0&&b.set(m,y=f?new Map:qy(r)),b=y;return y};Gp();const Ml={http:Wh,xhr:Cy,fetch:{get:Gp}};x.forEach(Ml,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{__proto__:null,value:r})}catch{}Object.defineProperty(a,"adapterName",{__proto__:null,value:r})}});const ap=a=>`- ${a}`,Uy=a=>x.isFunction(a)||a===null||a===!1;function By(a,r){a=x.isArray(a)?a:[a];const{length:i}=a;let l,d;const u={};for(let p=0;p<i;p++){l=a[p];let f;if(d=l,!Uy(l)&&(d=Ml[(f=String(l)).toLowerCase()],d===void 0))throw new X(`Unknown adapter '${f}'`);if(d&&(x.isFunction(d)||(d=d.get(r))))break;u[f||"#"+p]=d}if(!d){const p=Object.entries(u).map(([m,y])=>`adapter ${m} `+(y===!1?"is not supported by the environment":"is not available in the build"));let f=i?p.length>1?`since :
`+p.map(ap).join(`
`):" "+ap(p[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+f,X.ERR_NOT_SUPPORT)}return d}const Jp={getAdapter:By,adapters:Ml};function al(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Er(null,a)}function nl(a){return al(a),a.headers=at.from(a.headers),a.data=tl.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Jp.getAdapter(a.adapter||Sr.adapter,a)(a).then(function(l){al(a),a.response=l;try{l.data=tl.call(a,a.transformResponse,l)}finally{delete a.response}return l.headers=at.from(l.headers),l},function(l){if(!Wp(l)&&(al(a),l&&l.response)){a.response=l.response;try{l.response.data=tl.call(a,a.transformResponse,l.response)}finally{delete a.response}l.response.headers=at.from(l.response.headers)}return Promise.reject(l)})}const Js={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{Js[a]=function(l){return typeof l===a||"a"+(r<1?"n ":" ")+a}});const np={};Js.transitional=function(r,i,l){function d(u,p){return"[Axios v"+Al+"] Transitional option '"+u+"'"+p+(l?". "+l:"")}return(u,p,f)=>{if(r===!1)throw new X(d(p," has been removed"+(i?" in "+i:"")),X.ERR_DEPRECATED);return i&&!np[p]&&(np[p]=!0,console.warn(d(p," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(u,p,f):!0}};Js.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function Hy(a,r,i){if(typeof a!="object"||a===null)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const l=Object.keys(a);let d=l.length;for(;d-- >0;){const u=l[d],p=Object.prototype.hasOwnProperty.call(r,u)?r[u]:void 0;if(p){const f=a[u],m=f===void 0||p(f,u,a);if(m!==!0)throw new X("option "+u+" must be "+m,X.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new X("Unknown option "+u,X.ERR_BAD_OPTION)}}const js={assertOptions:Hy,validators:Js},tt=js.validators;let qa=class{constructor(r){this.defaults=r||{},this.interceptors={request:new Hu,response:new Hu}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const u=(()=>{if(!d.stack)return"";const p=d.stack.indexOf(`
`);return p===-1?"":d.stack.slice(p+1)})();try{if(!l.stack)l.stack=u;else if(u){const p=u.indexOf(`
`),f=p===-1?-1:u.indexOf(`
`,p+1),m=f===-1?"":u.slice(f+1);String(l.stack).endsWith(m)||(l.stack+=`
`+u)}}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=Xa(this.defaults,i);const{transitional:l,paramsSerializer:d,headers:u}=i;l!==void 0&&js.assertOptions(l,{silentJSONParsing:tt.transitional(tt.boolean),forcedJSONParsing:tt.transitional(tt.boolean),clarifyTimeoutError:tt.transitional(tt.boolean),legacyInterceptorReqResOrdering:tt.transitional(tt.boolean),advertiseZstdAcceptEncoding:tt.transitional(tt.boolean),validateStatusUndefinedResolves:tt.transitional(tt.boolean)},!1),d!=null&&(x.isFunction(d)?i.paramsSerializer={serialize:d}:js.assertOptions(d,{encode:tt.function,serialize:tt.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),js.assertOptions(i,{baseUrl:tt.spelling("baseURL"),withXsrfToken:tt.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let p=u&&x.merge(u.common,u[i.method]);u&&x.forEach(["delete","get","head","post","put","patch","query","common"],P=>{delete u[P]}),i.headers=at.concat(p,u);const f=[];let m=!0;this.interceptors.request.forEach(function(A){if(typeof A.runWhen=="function"&&A.runWhen(i)===!1)return;m=m&&A.synchronous;const S=i.transitional||Tl;S&&S.legacyInterceptorReqResOrdering?f.unshift(A.fulfilled,A.rejected):f.push(A.fulfilled,A.rejected)});const y=[];this.interceptors.response.forEach(function(A){y.push(A.fulfilled,A.rejected)});let b,_=0,$;if(!m){const P=[nl.bind(this),void 0];for(P.unshift(...f),P.push(...y),$=P.length,b=Promise.resolve(i);_<$;)b=b.then(P[_++],P[_++]);return b}$=f.length;let T=i;for(;_<$;){const P=f[_++],A=f[_++];try{T=P?P(T):T}catch(S){if(!A){b=Promise.reject(S);break}try{const E=A.call(this,S);x.isThenable(E)&&(b=Promise.resolve(E).then(()=>nl.call(this,T)))}catch(E){b=Promise.reject(E)}break}}if(!b)try{b=nl.call(this,T)}catch(P){b=Promise.reject(P)}for(_=0,$=y.length;_<$;)b=b.then(y[_++],y[_++]);return b}getUri(r){r=Xa(this.defaults,r);const i=Qp(r.baseURL,r.url,r.allowAbsoluteUrls,r);return Bp(i,r.params,r.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(r){qa.prototype[r]=function(i,l){return this.request(Xa(l||{},{method:r,url:i,data:l&&x.hasOwnProp(l,"data")?l.data:void 0}))}});x.forEach(["post","put","patch","query"],function(r){function i(l){return function(u,p,f){return this.request(Xa(f||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:p}))}}qa.prototype[r]=i(),r!=="query"&&(qa.prototype[r+"Form"]=i(!0))});let Xy=class Zp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const l=this;this.promise.then(d=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](d);l._listeners=null}),this.promise.then=d=>{let u;const p=new Promise(f=>{l.subscribe(f),u=f}).then(d);return p.cancel=function(){l.unsubscribe(u)},p},r(function(u,p,f){l.reason||(l.reason=new Er(u,p,f),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Zp(function(d){r=d}),cancel:r}}};function Wy(a){return function(i){return a.apply(null,i)}}function Vy(a){return x.isObject(a)&&a.isAxiosError===!0}const fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fl).forEach(([a,r])=>{fl[r]=a});function eg(a){const r=new qa(a),i=Rp(qa.prototype.request,r);return x.extend(i,qa.prototype,r,{allOwnKeys:!0}),x.extend(i,r,null,{allOwnKeys:!0}),i.create=function(d){return eg(Xa(a,d))},i}const Ae=eg(Sr);Ae.Axios=qa;Ae.CanceledError=Er;Ae.CancelToken=Xy;Ae.isCancel=Wp;Ae.VERSION=Al;Ae.toFormData=Gs;Ae.AxiosError=X;Ae.Cancel=Ae.CanceledError;Ae.all=function(r){return Promise.all(r)};Ae.spread=Wy;Ae.isAxiosError=Vy;Ae.mergeConfig=Xa;Ae.AxiosHeaders=at;Ae.formToJSON=a=>Xp(x.isHTMLForm(a)?new FormData(a):a);Ae.getAdapter=Jp.getAdapter;Ae.HttpStatusCode=fl;Ae.default=Ae;const{Axios:qb,AxiosError:Fb,CanceledError:Ub,isCancel:Bb,CancelToken:Hb,VERSION:Xb,all:Wb,Cancel:Vb,isAxiosError:Qb,spread:Kb,toFormData:Yb,AxiosHeaders:Gb,HttpStatusCode:Jb,formToJSON:Zb,getAdapter:e1,mergeConfig:t1,create:a1}=Ae,Wa="/api/analyze",xn="/api/chat",mr="/api/records",xr="/api/hair-analysis";function rl(a){return(a==null?void 0:a.trim().replace(/\/+$/,""))||""}function Nl(){var l;const a=typeof window<"u"?rl((l=window.__DIAOLEME_CONFIG__)==null?void 0:l.apiBaseUrl):"",r=rl(void 0),i=rl(void 0);return a?rp(a):r?rp(r):i||Wa}function rp(a){return a.endsWith(Wa)||a.endsWith(xr)?a:`${a}${Wa}`}function Qy(a){return a.endsWith(xn)?a:a.endsWith(Wa)?a.slice(0,-Wa.length)+xn:a.endsWith(xr)?a.slice(0,-xr.length)+xn:`${a}${xn}`}function Ky(a){return a.endsWith(mr)?a:a.endsWith(Wa)?a.slice(0,-Wa.length)+mr:a.endsWith(xr)?a.slice(0,-xr.length)+mr:a.endsWith(xn)?a.slice(0,-xn.length)+mr:`${a}${mr}`}const sp={url:Nl(),timeout:9e4},ip={url:Qy(Nl()),timeout:45e3},op={url:Ky(Nl()),timeout:2e4},ml=40;function Yy(a=new Date){const r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),i=r.getDay(),l=i===0?-6:1-i,d=new Date(r);d.setDate(r.getDate()+l);const u=new Date(d);u.setDate(d.getDate()+6);const p=f=>{const m=f.getFullYear(),y=String(f.getMonth()+1).padStart(2,"0"),b=String(f.getDate()).padStart(2,"0");return`${m}-${y}-${b}`};return{start:p(d),end:p(u)}}function Gy(a,r=ml){const{start:i,end:l}=Yy(),d=Math.min(Math.max(0,r),ml);return a.filter(u=>typeof u.date=="string"&&u.date>=i&&u.date<=l).slice().sort((u,p)=>u.date<p.date?1:u.date>p.date?-1:0).slice(0,d).map(u=>{const p={date:u.date,title:u.title,score:u.score,summary:u.summary};return u.score_delta!=null&&(p.score_delta=u.score_delta),u.daily_task&&(p.daily_task=u.daily_task),Array.isArray(u.tags)&&u.tags.length&&(p.tags=u.tags.slice(0,4)),p})}async function Jy(a,r){var i;try{const l=a.filter(f=>f.role==="user"&&f.content.trim()).slice(-8),d=l[l.length-1];if(!d)return{reply:"先随便说一句想聊的内容就好，我在这儿陪你轻松记录。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"EMPTY_MESSAGE"};const u=Array.isArray(r==null?void 0:r.reportContext)?r.reportContext.slice(0,ml):[],p=await Ae.post(ip.url,{messages:l,message:d.content,report_context:u},{timeout:ip.timeout});return lp(p.data)}catch(l){return Ae.isAxiosError(l)&&((i=l.response)!=null&&i.data)?lp(l.response.data):(console.warn("[model] 聊天接口不可达，返回本地客服兜底。",l),{reply:"我现在暂时连不上后端 AI，但可以先陪你记录：今天先完成一次轻量 Scan，再根据结果选择一个小任务就好。",source:"fallback",source_label:"本地聊天 fallback（非真实 AI）",fallback_code:"CHAT_BACKEND_UNREACHABLE"})}}async function Zy(a=20){var r;try{const i=await Ae.get(op.url,{params:{limit:a},timeout:op.timeout}),d=(Array.isArray((r=i.data)==null?void 0:r.records)?i.data.records:[]).map(u=>e0(u)).filter(u=>!!u);return d.map((u,p)=>{if(u.score_delta!=null)return u;const f=d[p+1];return f?{...u,score_delta:u.score-f.score,prev_title:f.title}:u})}catch(i){return console.warn("[model] 历史接口不可达，保留本地记录。",i),[]}}function e0(a){if(!a||typeof a!="object")return null;const r=a.result&&typeof a.result=="object"?a.result:{},i=typeof a.fun_score=="number"?a.fun_score:typeof a.score=="number"?a.score:typeof r.score=="number"?r.score:typeof r.fun_score=="number"?r.fun_score:null;if(typeof i!="number")return null;const d=(typeof a.created_at=="string"?a.created_at:"").slice(0,10)||new Date().toISOString().slice(0,10),u=typeof a.record_id=="string"?a.record_id:null,p=a.compare&&typeof a.compare=="object"?a.compare:null,f=a.growth&&typeof a.growth=="object"?a.growth:r.growthDelta&&typeof r.growthDelta=="object"?r.growthDelta:{};let m=typeof(p==null?void 0:p.score_delta)=="number"?p.score_delta:null;const y=typeof(p==null?void 0:p.prev_title)=="string"?p.prev_title:null,b=hl({...a,result:{...r,score:i,title:a.title||r.title,source:r.source||a.ai_source,source_label:r.source_label},record_id:u,record_status:a.record_status,fallbackCode:a.fallbackCode??a.fallback_code,ai_source:a.ai_source,success:a.success});return{id:u||`remote_${d}_${i}`,date:d,score:b.score,title:b.title,summary:b.summary,roast:b.roast,encouragement:b.encouragement,tags:b.tags,daily_task:b.daily_task,disclaimer:b.disclaimer,source:b.source,source_label:b.source_label,fallback_code:b.fallback_code,record_status:b.record_status,record_id:b.record_id,count:b.count,thickness:b.thickness,suggestions:b.suggestions,score_delta:m,prev_title:y,exp_added:typeof f.exp_added=="number"?f.exp_added:void 0}}function lp(a){const r=sg(a==null?void 0:a.source,a==null?void 0:a.ai_source,a==null?void 0:a.success);return{reply:ta(a==null?void 0:a.reply,"我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。"),source:r,source_label:ta(a==null?void 0:a.source_label,zl(r)),fallback_code:yl((a==null?void 0:a.fallback_code)??(a==null?void 0:a.fallbackCode))}}const tg="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",ag=8*1024*1024;async function t0(a){Ol(a);const r=rg(a);if(r.type==="image/jpeg"&&r.size<=1.5*1024*1024)return zs(r);try{const i=await createImageBitmap(r),d=Math.min(1,1600/Math.max(i.width,i.height)),u=Math.max(1,Math.round(i.width*d)),p=Math.max(1,Math.round(i.height*d)),f=document.createElement("canvas");f.width=u,f.height=p;const m=f.getContext("2d");if(!m)return i.close(),zs(r);m.drawImage(i,0,0,u,p),i.close();const y=await new Promise(b=>f.toBlob(b,"image/jpeg",.85));return y?new File([y],`diaoleme-album-${Date.now()}.jpg`,{type:"image/jpeg",lastModified:Date.now()}):zs(r)}catch(i){return console.warn("[model] 图片规范化失败，回退原文件上传。",i),zs(r)}}async function a0(a,r=n0()){var l;Ol(a);const i=r==="auto"?await t0(a):rg(a);if(r==="mock-fail")throw await dp(900),new Error("mock_fail");if(r==="mock-slow")return await dp(4500),vl(i,"mock");if(r==="mock-success")return vl(i,"mock");try{const d=new FormData;d.append("image",i,i.name||`diaoleme-album-${Date.now()}.jpg`);const u=await Ae.post(sp.url,d,{timeout:sp.timeout});return hl(u.data)}catch(d){return Ae.isAxiosError(d)&&((l=d.response)!=null&&l.data)&&typeof d.response.data=="object"?(console.warn("[model] 分析接口返回非 2xx，使用响应体（非本地静默兜底）。",{status:d.response.status,name:i.name,type:i.type,size:i.size}),hl(d.response.data)):(console.warn("[model] 后端分析代理不可达，返回明确的本地 fallback。",{err:d,name:i.name,type:i.type,size:i.size,originalName:a.name,originalType:a.type,originalSize:a.size}),i0(i))}}function n0(){const a=typeof window<"u"?new URLSearchParams(window.location.search):null,r=a==null?void 0:a.get("mock");return r==="success"?"mock-success":r==="fail"?"mock-fail":r==="slow"?"mock-slow":"auto"}function Ol(a){if(!a)throw new Error("empty_file");if(!(a.type||ng(a.name)).startsWith("image/"))throw new Error("not_image");if(a.size<=0)throw new Error("empty_file");if(a.size>ag)throw new Error("file_too_large")}function ng(a){const r=a.toLowerCase();return r.endsWith(".jpg")||r.endsWith(".jpeg")?"image/jpeg":r.endsWith(".png")?"image/png":r.endsWith(".webp")?"image/webp":r.endsWith(".gif")?"image/gif":r.endsWith(".heic")||r.endsWith(".heif")?"image/heic":""}function rg(a){if(a.type)return a;const r=ng(a.name);return r?new File([a],a.name||`diaoleme-album-${Date.now()}.jpg`,{type:r,lastModified:a.lastModified}):a}function zs(a){const r=/^[\x20-\x7E]+$/.test(a.name||"")&&/\.jpe?g$/i.test(a.name);if(a.type==="image/jpeg"&&r)return a;const i=a.type||"image/jpeg",l=i==="image/png"?"png":i==="image/webp"?"webp":"jpg";return new File([a],`diaoleme-album-${Date.now()}.${l}`,{type:i,lastModified:a.lastModified||Date.now()})}function hl(a){const r=a!=null&&a.result&&typeof a.result=="object"?a.result:a&&typeof a=="object"?a:{},i=sg(r.source,a==null?void 0:a.ai_source,a==null?void 0:a.success);return r0(r,i,{fallbackCode:yl((a==null?void 0:a.fallbackCode)??(a==null?void 0:a.fallback_code)),recordStatus:ta(a==null?void 0:a.record_status,i==="api"?"ai_completed":`${i}_result`),recordId:yl(a==null?void 0:a.record_id)})}function r0(a,r=a.source||"api",i={}){const l=typeof a.score=="number"?Math.max(0,Math.min(100,Math.round(a.score))):66,d=Array.isArray(a.suggestions)&&a.suggestions.length>0?a.suggestions.slice(0,5).map(String):[a.daily_task||"今晚给自己留 30 分钟放松时间"],u=Array.isArray(a.tags)&&a.tags.length>0?a.tags.slice(0,4).map(String):s0(l);return{score:l,title:ta(a.title,l>=70?"发丝巡逻队长":l>=45?"头毛观察员":"发量守护实习生"),summary:ta(a.summary,l>=70?"今天的头毛队形挺稳，适合继续轻松记录。":"今天有一点小波动，但已经被你认真捕捉到了。"),roast:ta(a.roast,l>=70?"发丝们排队下班，还挺讲秩序。":"头发像开了早会，讨论得稍微热闹了一点。"),encouragement:ta(a.encouragement,"别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。"),tags:u,daily_task:ta(a.daily_task,d[0]),disclaimer:ta(a.disclaimer,tg),source:r,source_label:zl(r,a.source_label),fallback_code:i.fallbackCode??null,record_status:i.recordStatus||`${r}_result`,record_id:i.recordId??null,count:a.count==="少量"||a.count==="偏多"?a.count:"中等",thickness:a.thickness==="粗硬"||a.thickness==="细软"?a.thickness:"正常",suggestions:d}}function ta(a,r){return typeof a=="string"&&a.trim()?a.trim():r}function yl(a){return typeof a=="string"&&a.trim()?a.trim():null}function sg(a,r,i){return a==="api"||a==="mock"||a==="fallback"?a:i===!1||r==="fallback"?"fallback":r==="mock"?"mock":"api"}function s0(a){return a>=75?["队形稳定","心态在线","今日好梳"]:a>=50?["轻微波动","继续观察","早点睡派"]:["需要抱抱","从容记录","温柔养成"]}function zl(a,r){return r||(a==="api"?"CC club OpenAI compatible AI 分析结果":a==="fallback"?"AI 兜底结果":"Demo mock 结果")}function vl(a,r="mock"){const i=a!=null&&a.name?`已读取「${a.name.slice(0,18)}」`:"已读取今天的照片";return new Promise(l=>setTimeout(()=>{l({score:72,title:"发际线守护者",summary:`${i}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,roast:"头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。",encouragement:"不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。",tags:["今日好梳","轻松观察","早睡加分"],daily_task:"今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。",disclaimer:tg,source:r,source_label:zl(r),fallback_code:null,record_status:"frontend_demo_mock",record_id:null,count:"中等",thickness:"正常",suggestions:["今晚提前 30 分钟进入休息模式","洗头时水温尽量温和","睡前做 2 分钟放松呼吸"]})},1200))}async function i0(a){return{...await vl(a,"fallback"),title:"本地兜底记录",summary:"后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。",disclaimer:"当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。",source_label:"本地 Demo fallback（非真实 AI）",fallback_code:"BACKEND_UNREACHABLE",record_status:"frontend_local_fallback"}}function dp(a){return new Promise(r=>setTimeout(r,a))}const Fa=[{id:"none",name:"素颜",emoji:"🌱",cost:0,description:"最真实的自己"},{id:"short",name:"清爽短发",emoji:"✂️",cost:0,description:"简单利落"},{id:"medium",name:"自然中分",emoji:"💇",cost:30,description:"邻家风格"},{id:"long",name:"飘逸长发",emoji:"👸",cost:80,description:"需要坚持打卡"},{id:"curly",name:"羊毛卷",emoji:"🌀",cost:120,description:"俏皮可爱"},{id:"bun",name:"丸子头",emoji:"🎀",cost:200,description:"终极成就"}],cp=a=>{let r;const i=new Set,l=(y,b)=>{const _=typeof y=="function"?y(r):y;if(!Object.is(_,r)){const $=r;r=b??(typeof _!="object"||_===null)?_:Object.assign({},r,_),i.forEach(T=>T(r,$))}},d=()=>r,f={setState:l,getState:d,getInitialState:()=>m,subscribe:y=>(i.add(y),()=>i.delete(y))},m=r=a(l,d,f);return f},o0=(a=>a?cp(a):cp),l0=a=>a;function d0(a,r=l0){const i=yr.useSyncExternalStore(a.subscribe,yr.useCallback(()=>r(a.getState()),[a,r]),yr.useCallback(()=>r(a.getInitialState()),[a,r]));return yr.useDebugValue(i),i}const c0=a=>{const r=o0(a),i=l=>d0(r,l);return Object.assign(i,r),i},u0=(a=>c0);function ig(a,r){let i;try{i=a()}catch{return}return{getItem:d=>{var u;const p=m=>m===null?null:JSON.parse(m,void 0),f=(u=i.getItem(d))!=null?u:null;return f instanceof Promise?f.then(p):p(f)},setItem:(d,u)=>i.setItem(d,JSON.stringify(u,void 0)),removeItem:d=>i.removeItem(d)}}const bl=a=>r=>{try{const i=a(r);return i instanceof Promise?i:{then(l){return bl(l)(i)},catch(l){return this}}}catch(i){return{then(l){return this},catch(l){return bl(l)(i)}}}},p0=(a,r)=>(i,l,d)=>{let u={storage:ig(()=>window.localStorage),partialize:S=>S,version:0,merge:(S,E)=>({...E,...S}),...r},p=!1,f=0;const m=new Set,y=new Set;let b=u.storage;if(!b)return a((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),i(...S)},l,d);const _=()=>{const S=u.partialize({...l()});return b.setItem(u.name,{state:S,version:u.version})},$=d.setState;d.setState=(S,E)=>($(S,E),_());const T=a((...S)=>(i(...S),_()),l,d);d.getInitialState=()=>T;let P;const A=()=>{var S,E;if(!b)return;const M=++f;p=!1,m.forEach(j=>{var W;return j((W=l())!=null?W:T)});const z=((E=u.onRehydrateStorage)==null?void 0:E.call(u,(S=l())!=null?S:T))||void 0;return bl(b.getItem.bind(b))(u.name).then(j=>{if(j)if(typeof j.version=="number"&&j.version!==u.version){if(u.migrate){const W=u.migrate(j.state,j.version);return W instanceof Promise?W.then(F=>[!0,F]):[!0,W]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,j.state];return[!1,void 0]}).then(j=>{var W;if(M!==f)return;const[F,oe]=j;if(P=u.merge(oe,(W=l())!=null?W:T),i(P,!0),F)return _()}).then(()=>{M===f&&(z==null||z(l(),void 0),P=l(),p=!0,y.forEach(j=>j(P)))}).catch(j=>{M===f&&(z==null||z(void 0,j))})};return d.persist={setOptions:S=>{u={...u,...S},S.storage&&(b=S.storage)},clearStorage:()=>{b==null||b.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>A(),hasHydrated:()=>p,onHydrate:S=>(m.add(S),()=>{m.delete(S)}),onFinishHydration:S=>(y.add(S),()=>{y.delete(S)})},u.skipHydration||A(),P||T},g0=p0,f0=()=>{const a=new Date,r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`},up="本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",he=u0()(g0((a,r)=>({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:up,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:70,reportHistory:[],setAnalysis:i=>a({dropScore:i.score,title:i.title,summary:i.summary,roast:i.roast,encouragement:i.encouragement,tags:i.tags,dailyTask:i.daily_task,disclaimer:i.disclaimer,source:i.source,sourceLabel:i.source_label,fallbackCode:i.fallback_code,recordStatus:i.record_status,recordId:i.record_id,count:i.count,thickness:i.thickness,suggestions:i.suggestions}),viewReport:i=>{const l=r().reportHistory.find(d=>d.id===i);l&&a({dropScore:l.score,title:l.title,summary:l.summary,roast:l.roast,encouragement:l.encouragement,tags:l.tags,dailyTask:l.daily_task,disclaimer:l.disclaimer,source:l.source,sourceLabel:l.source_label,fallbackCode:l.fallback_code,recordStatus:l.record_status,recordId:l.record_id,count:l.count,thickness:l.thickness,suggestions:l.suggestions})},viewDayReport:i=>{const l=r().reportHistory.filter(p=>p.date===i);if(l.length===0)return;const d=l[0],u=Math.round(l.reduce((p,f)=>p+f.score,0)/l.length);a({dropScore:u,title:d.title,summary:d.summary,roast:d.roast,encouragement:d.encouragement,tags:d.tags,dailyTask:d.daily_task,disclaimer:d.disclaimer,source:d.source,sourceLabel:d.source_label,fallbackCode:d.fallback_code,recordStatus:d.record_status,recordId:d.record_id,count:d.count,thickness:d.thickness,suggestions:d.suggestions})},addReport:i=>a(l=>({reportHistory:[i,...l.reportHistory].slice(0,100)})),mergeRemoteHistory:i=>a(l=>{const d=new Set(i.map(p=>p.record_id||p.id).filter(Boolean));return{reportHistory:[...l.reportHistory.filter(p=>!d.has(p.record_id||p.id)),...i].slice(0,100)}}),markCheckinToday:()=>{const i=f0();r().checkinDays.includes(i)||a(l=>({checkinDays:[...l.checkinDays,i],points:l.points+5}))},unlockHairStyle:(i,l)=>{const d=r();return d.unlockedHairStyles.includes(i)?!0:d.points<l?!1:(a({unlockedHairStyles:[...d.unlockedHairStyles,i],points:d.points-l}),!0)},addPoints:i=>a(l=>({points:l.points+i})),resetAll:()=>{a({dropScore:null,title:"等待今日称号",summary:"上传一张照片，黏土小人会给你一份轻松反馈。",roast:"今天还没有吐槽素材，小人正在搓手等待。",encouragement:"先记录一下，就已经是养成的第一步。",tags:[],dailyTask:"完成一次今日记录",disclaimer:up,source:"mock",sourceLabel:"等待分析",fallbackCode:null,recordStatus:"idle",recordId:null,count:"中等",thickness:"正常",suggestions:[],unlockedHairStyles:["none"],checkinDays:[],points:70,reportHistory:[]}),typeof window<"u"&&window.localStorage.removeItem("diaolema-user")}}),{name:"diaolema-user",storage:ig(()=>localStorage),version:3,migrate:a=>({...a&&typeof a=="object"?a:{},points:70,unlockedHairStyles:["none"]})})),m0=`<section class="page active" data-page="home">
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
        </section>`,h0=`<section class="page" data-page="scan">
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
        </section>`,y0=`<section class="page" data-page="buddy">
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
        </section>`,v0=`<section class="page" data-page="quests">
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
        </section>`,b0=`<section class="page" data-page="journey">
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
        </section>`,x0=`<section class="page" data-page="league">
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
        </section>`,w0=`<section class="page" data-page="rewards">
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
        </section>`,k0=`<section class="page" data-page="diary">
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
                    <article class="diary-row-new"><div class="diary-date"><strong>18</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><small class="mood-label">开心</small></div><div class="diary-copy"><b>今天掉发好像比昨天少一点！</b><p>早上洗头的时候发现掉发好像比昨天少了一些些…虽然还是很多，但看到这个小小的变化，心情瞬间变好。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>17</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-calm.svg" alt=""><small class="mood-label">平静</small></div><div class="diary-copy"><b>坚持护发第17天 ✨</b><p>今天做了头皮按摩，感觉头皮放松了很多～还喝了黑芝麻糊，希望头发能有营养！</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/dandelion.png" alt=""></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>16</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-tired.svg" alt=""><small class="mood-label">疲惫</small></div><div class="diary-copy"><b>压力好大的一天…</b><p>最近项目截止日期临近，压力好大，掉发也变多了。晚上泡个热水澡放松一下。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>15</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-anxious.svg" alt=""><small class="mood-label">焦虑</small></div><div class="diary-copy"><b>为什么掉发总是反反复复…</b><p>有时候觉得有改善，有时候又突然变多了，真的好焦虑啊。</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/blue-bob.png" alt=""></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>14</strong><small>5月</small></div><div class="diary-mood-col"><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><small class="mood-label">开心</small></div><div class="diary-copy"><b>收到新发型奖励啦！🎉</b><p>完成了一周的护发任务，解锁了新发型～我的小伙伴好可爱！</p></div><img class="diary-thumb" src="./assets/shared-brand/brand-avatar-tile.png" alt=""></article>
                  </div><button class="diary-load" id="diaryLoadMore" type="button">加载更多日记　⌄</button></div>
                </section>
              </div>
              <aside class="diary-side">
                <section class="diary-glass diary-side-card diary-trend" id="diaryTrendCard"><div class="diary-trend-head"><h2>心情趋势</h2><small>本月⌄</small></div><div class="diary-trend-chart"><div class="diary-trend-y" aria-hidden="true"><img src="./assets/diary/icons/mood-happy.svg" alt=""><img src="./assets/diary/icons/mood-calm.svg" alt=""><img src="./assets/diary/icons/mood-anxious.svg" alt=""><img src="./assets/diary/icons/mood-tired.svg" alt=""></div><svg viewBox="0 0 420 220" role="img" aria-label="本月心情趋势"><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76" fill="none" stroke="#8157e8" stroke-width="3"/><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76 L405 210 L30 210Z" fill="rgba(129,87,232,.1)"/><circle cx="210" cy="120" r="6" fill="#8157e8"/><g class="diary-trend-tip"><rect x="150" y="72" width="120" height="34" rx="12" fill="#fff" stroke="rgba(129,87,232,.25)"/><text x="210" y="94" text-anchor="middle" fill="#5b4a9a" font-size="13" font-weight="700">5/18 开心 😊</text></g></svg></div><div class="diary-trend-x" aria-hidden="true"><span>5/1</span><span>5/6</span><span>5/11</span><span>5/16</span><span>5/21</span><span>5/26</span><span>5/31</span></div></section>
                <section class="diary-glass diary-side-card keyword-card"><h2>关键词统计　<small>更多 ›</small></h2><div class="word-cloud"><span>护理</span><span>头皮按摩</span><span>睡眠</span><span>营养</span><span>黑芝麻</span><span>焦虑</span><span>运动</span><span>早睡</span><span>坚持</span><span>生发</span><span>洗头</span><span>放松</span><span>喝水</span><span>梳发</span><span>护发</span><span>打卡</span></div></section>
                <section class="diary-glass diary-side-card memory-card" id="diaryMemoryCard"><h2>回忆精选　<small>更多回忆 ›</small></h2><div class="memory-image"><span>第一篇日记 ⚡</span></div><blockquote>“希望通过记录，找到适合自己的护发方法，让头发健康起来～”　💗</blockquote></section>
              </aside>
            </div>
          </div>
        </section>`,S0=`<section class="page" data-page="community">
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
        </section>`,E0=`<section class="page" data-page="me">
          <div class="me-shell">
            <header class="me-head">
              <div>
                <h1>我</h1>
                <p>每一根头发，都是生命力的见证 ✨</p>
              </div>
              <div class="me-head-actions">
                <button class="me-head-btn" type="button" data-action="me-edit-profile" aria-label="编辑资料">✎　编辑资料</button>
                <button class="me-head-btn" type="button" data-action="me-settings" aria-label="设置">⚙　设置</button>
                <span class="me-bell" aria-label="通知">🔔<i>1</i></span>
                <img class="shared-profile-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像">
              </div>
            </header>

            <div class="me-layout">
              <div class="me-main">
                <section class="me-glass me-profile">
                  <div class="me-profile-banner" aria-hidden="true"></div>
                  <div class="me-profile-body">
                    <div class="me-avatar-wrap">
                      <img class="me-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="小蒲公英">
                      <span class="me-avatar-edit" aria-hidden="true">✎</span>
                    </div>
                    <div class="me-profile-copy">
                      <div class="me-name-row">
                        <h2>小蒲公英</h2>
                        <span class="me-lv-pill" data-me-level-badge>Lv.5</span>
                      </div>
                      <span class="me-role-tag">头发健康守护者 🌱</span>
                      <p class="me-bio">爱生活，爱自己，正在成为更好的自己～</p>
                      <div class="me-meta-row">
                        <span>📅　加入时间 2024/05/12</span>
                        <span>📍　来自 星球 B-612</span>
                        <span>💜　能量口号 慢慢来，也挺好 🌈</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="me-glass me-xp-card">
                  <span class="me-lv-hex" data-me-level-hex>Lv.5</span>
                  <div class="me-xp-track-wrap">
                    <div class="me-xp-labels">
                      <b data-me-xp-label>0 / 200 XP</b>
                      <span data-me-xp-need>还差 200 XP 升级</span>
                    </div>
                    <div class="me-xp-track"><i data-me-xp-fill style="width:0%"></i></div>
                  </div>
                  <button class="me-xp-reward" type="button" data-go="rewards">🎁　升级奖励</button>
                </section>

                <section class="me-glass me-data">
                  <h3>我的数据</h3>
                  <div class="me-data-grid">
                    <article class="me-data-card">
                      <i class="me-data-ico scan">▣</i>
                      <div>
                        <small>累计扫描</small>
                        <b><span data-me-scan-count>0</span> 次</b>
                        <em data-me-scan-delta>本月 +0 次</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico health">♡</i>
                      <div>
                        <small>平均健康分</small>
                        <b><span data-me-avg-score>—</span> 分</b>
                        <em data-me-score-delta>较上月 —</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico task">✎</i>
                      <div>
                        <small>任务完成</small>
                        <b><span data-me-task-count>0</span> 个</b>
                        <em data-me-task-delta>本月 +0 个</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico xp">★</i>
                      <div>
                        <small>累计 XP</small>
                        <b data-me-total-xp>0</b>
                        <em data-me-xp-delta>本月 +0</em>
                      </div>
                    </article>
                  </div>
                </section>

                <section class="me-glass me-unlocks">
                  <h3>最近解锁</h3>
                  <div class="me-unlock-grid">
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-flower.png" alt="樱花发箍">
                      <div><small>装扮</small><b>樱花发箍</b><em>Lv.3 解锁</em></div>
                    </article>
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-serum.png" alt="生发精华液">
                      <div><small>道具</small><b>生发精华液</b><em>Lv.5 解锁</em></div>
                    </article>
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-vip.png" alt="7天特权卡">
                      <div><small>特权</small><b>7天特权卡</b><em>Lv.4 解锁</em></div>
                    </article>
                  </div>
                </section>

                <section class="me-glass me-goals">
                  <h3>我的小目标</h3>
                  <div class="me-goal-grid">
                    <article class="me-goal-card">
                      <i>🌱</i>
                      <div>
                        <b>改善头皮环境</b>
                        <small>健康分达到 90 分</small>
                        <div class="me-goal-bar"><i style="width:91%"></i></div>
                        <em>82 / 90</em>
                      </div>
                    </article>
                    <article class="me-goal-card">
                      <i>🔥</i>
                      <div>
                        <b>坚持打卡</b>
                        <small>连续打卡 14 天</small>
                        <div class="me-goal-bar"><i data-me-goal-streak-fill style="width:50%"></i></div>
                        <em><span data-me-streak-count>7</span> / 14</em>
                      </div>
                    </article>
                    <article class="me-goal-card">
                      <i>🛡</i>
                      <div>
                        <b>养成好习惯</b>
                        <small>完成 20 个护发任务</small>
                        <div class="me-goal-bar"><i data-me-goal-task-fill style="width:90%"></i></div>
                        <em><span data-me-goal-task-num>18</span> / 20</em>
                      </div>
                    </article>
                    <button class="me-goal-add" type="button" data-action="me-add-goal">
                      <span>＋</span>
                      <b>添加新目标</b>
                      <small>为自己设定一个新目标吧</small>
                    </button>
                  </div>
                </section>
              </div>

              <aside class="me-side">
                <section class="me-glass me-buddy-card">
                  <h3>我的伙伴</h3>
                  <div class="me-buddy-body">
                    <img src="./assets/buddy/buddy-hero.png" alt="蒲蒲">
                    <div>
                      <b>蒲蒲</b>
                      <small data-me-buddy-days>陪伴我 0 天</small>
                      <em>状态：元气满满 ✨</em>
                    </div>
                    <button class="me-buddy-go" type="button" data-go="buddy">去看看 ›</button>
                  </div>
                </section>

                <section class="me-glass me-badges">
                  <div class="me-side-head">
                    <h3>我的成就</h3>
                    <button type="button" class="me-link" data-go="journey">全部成就 ›</button>
                  </div>
                  <div class="me-badge-row">
                    <div class="me-badge c1"><span>★</span><b>初识掉了么</b><small>完成首次扫描</small></div>
                    <div class="me-badge c2"><span>★</span><b>坚持打卡</b><small>连续打卡 7 天</small></div>
                    <div class="me-badge c3"><span>★</span><b>头皮守护者</b><small>累计健康分 500+</small></div>
                    <div class="me-badge c4"><span>★</span><b>成长见证</b><small>完成 10 个任务</small></div>
                    <div class="me-badge c5"><span>★</span><b>分享达人</b><small>分享 5 次</small></div>
                  </div>
                </section>

                <section class="me-glass me-calendar-card">
                  <div class="me-side-head">
                    <h3>本月打卡日历</h3>
                    <span data-me-streak>已连续打卡 0 天</span>
                  </div>
                  <div class="me-cal-week"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
                  <div class="me-cal-grid" id="meCalendar" data-me-calendar></div>
                </section>

                <section class="me-glass me-settings item-list">
                  <button class="item" type="button" data-action="me-notify"><span>🔔</span><b>通知设置</b><span>›</span></button>
                  <button class="item" type="button" data-action="me-privacy"><span>🛡</span><b>隐私设置</b><span>›</span></button>
                  <button class="item" type="button" data-action="me-help"><span>💬</span><b>帮助与反馈</b><span>›</span></button>
                  <button class="item" type="button" data-action="reset-progress"><span>ℹ️</span><b>关于掉了么</b><span>›</span></button>
                </section>
              </aside>
            </div>
          </div>
        </section>`,_0=`<div class="app design-canvas final-pages-integrated">
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

        ${m0}

        ${h0}

        ${y0}

        ${v0}

        ${b0}

        ${x0}

        ${w0}

        ${k0}

        ${S0}

        ${E0}
      </main>
    </div>`,C0=`
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
`,L0=`
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
`,$0=["reference-home","fp-home","scan-page-active","fp-scan","buddy-page-active","quest-page-active","journey-page-active","diary-page-active","community-page-active","me-page-active"],R0={home:["reference-home","fp-home"],scan:["scan-page-active","fp-scan"],buddy:["buddy-page-active"],quests:["quest-page-active"],journey:["journey-page-active"],diary:["diary-page-active"],community:["community-page-active"],me:["me-page-active"]};function ea(a,r){a.querySelectorAll(".page").forEach(u=>u.classList.toggle("active",u.dataset.page===r)),a.querySelectorAll("[data-go]").forEach(u=>u.classList.toggle("active",u.dataset.go===r));for(const u of $0)document.body.classList.remove(u);for(const u of R0[r]||[])document.body.classList.add(u);const i=a.querySelector("#pageHeading"),l=a.querySelector("#pageSub"),d={home:["Home","Every hair is a seed."],scan:["Scan","用科学的方式，了解你的头发状况 💗"],buddy:["Buddy","每个人拥有自己的生命伙伴"],quests:["Quests","完成护发任务，获得经验值和能量"],journey:["Journey","每一步成长，都值得被记录 ✨"],league:["League","和伙伴们一起成长，赢取荣誉与奖励"],rewards:["Rewards","用成长兑换惊喜，奖励每一次认真生活"],diary:["My Diary ✨","记录每一个小瞬间，见证成长的每一步 💜"],community:["Community","在这里，分享治愈，收获力量"],me:["Me","你的成长档案"]};i&&d[r]&&(i.textContent=d[r][0]),l&&d[r]&&(l.textContent=d[r][1])}function aa(a){return`./${String(a).replace(/^\/+/,"")}`}function Ee(a,r){a&&(a.innerHTML=r)}function O(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Fe(a,r,i={}){const l=a.querySelector("[data-toast]");l==null||l.remove();const d=document.createElement("div");d.dataset.toast="true",d.className=["prototype-toast",i.className].filter(Boolean).join(" "),d.textContent=r;const u=i.anchorSelector?a.querySelector(i.anchorSelector):null;u?(getComputedStyle(u).position==="static"&&(u.style.position="relative"),d.classList.add("prototype-toast-anchored"),u.appendChild(d)):a.appendChild(d),window.setTimeout(()=>d.remove(),i.durationMs??1800)}const T0="aifa-110b-title-favicon-logo-mascot",og=()=>"diaoleme-prototype-buddy-care",Dl=()=>"diaoleme-prototype-selected-hair-style",En={none:{img:"./assets/buddy/hairstyles/dandelion.png",levelLabel:"Lv.5"},short:{img:"./assets/buddy/hairstyles/blue-bob.png",levelLabel:"Lv.8"},medium:{img:"./assets/buddy/hairstyles/ribbon.png",levelLabel:"Lv.10"},long:{img:"./assets/buddy/hairstyles/dandelion.png",levelLabel:"Lv.12"},curly:{img:"./assets/buddy/hairstyles/blue-bob.png",levelLabel:"Lv.14"},bun:{img:"./assets/buddy/hairstyles/ribbon.png",levelLabel:"Lv.18"}},P0={none:"蒲公英蓬蓬头",short:"星光短发",medium:"彩虹飘带",long:"飘逸长发",curly:"羊毛卷",bun:"丸子头"};function A0(a,r){const i=he.getState(),l=ug(),d=i.reportHistory[0],u=Math.max(62,Math.min(98,Math.round((i.dropScore??82)+Math.min(i.reportHistory.length,6)))),p=Math.max(56,Math.min(96,Math.round((l.energy+l.love)/2))),f=p>=78?"Happy":p>=64?"Calm":"Need Care",m=r.getQuestCount(),y=Math.max(i.checkinDays.length,i.reportHistory.length?1:0,38),b=a.querySelector('[data-page="buddy"] .buddy-heading-new p');b&&(b.textContent=`陪伴你已经 ${y} 天啦 💗`);const _=a.querySelector('[data-page="buddy"] .buddy-heading-new .level');if(_){const S=Math.max(1,Math.min(9,1+Math.floor(i.points/400)));_.textContent=`Lv.${S}`}const $=a.querySelectorAll('[data-page="buddy"] .buddy-status .buddy-stat');if($.length>=3){const S=$[0].querySelector("strong"),E=$[0].querySelector(".buddy-meter span");S&&(S.textContent=`${u} / 100`),E&&(E.style.width=`${u}%`);const M=$[1].querySelector("strong"),z=$[1].querySelector(".buddy-meter span");M&&(M.textContent=`${l.energy} / 100`),z&&(z.style.width=`${l.energy}%`);const j=$[2].querySelector("strong"),W=$[2].querySelector(".buddy-meter span");j&&(j.textContent=f),W&&(W.style.width=`${p}%`)}lg(a),N0(a,cg(i.unlockedHairStyles));const T=a.querySelectorAll('[data-page="buddy"] .buddy-action-list .buddy-action');T[0]&&!T[0].dataset.buddyAction&&(T[0].dataset.buddyAction="dress"),T[1]&&!T[1].dataset.buddyAction&&(T[1].dataset.buddyAction="feed");const P=a.querySelector('[data-page="buddy"] .buddy-report');if(P){const S=P.querySelector(".number"),E=P.querySelector("p");if(S){const M=d==null?void 0:d.count,z=M==="少量"||M==="中等"||M==="偏多"?M:"少量";S.textContent=z}E&&(E.textContent=(d==null?void 0:d.summary)||"大多是健康的毛发，状态很棒！")}const A=a.querySelector('[data-page="buddy"] .buddy-summary');if(A){const S=A.querySelector("p");S&&(S.textContent=`你的护理表现超过了 ${Math.min(96,60+m.done*4+i.checkinDays.length)}% 的用户，继续保持哦！`);const E=A.querySelectorAll(".summary-metrics strong");E[0]&&(E[0].textContent=`${i.checkinDays.length||7} 天`),E[1]&&(E[1].textContent=`${m.done} / ${Math.max(m.total,7)}`),E[2]&&(E[2].textContent=String(r.avgScore(i.reportHistory)||"优秀")),E[3]&&(E[3].textContent=l.energy>=78?"良好":"待补充")}}function lg(a){const r=he.getState(),i=cg(r.unlockedHairStyles),l=Fa.filter(f=>r.unlockedHairStyles.includes(f.id)).length,d=a.querySelector('[data-page="buddy"] .hair-card .section-title');d&&(d.innerHTML=`✦　解锁发型 <span class="badge">${l} / ${Fa.length} 已解锁</span>`);const u=Fa.map(f=>{const m=r.unlockedHairStyles.includes(f.id),y=f.id===i,b=En[f.id]||En.none,_=P0[f.id]||f.name,$=y?"使用中":m?b.levelLabel:`${b.levelLabel}　🔒`;return`<button class="${`hair-item${y?" selected":""}${m?"":" locked"}`}" data-unlock-id="${O(f.id)}" type="button"><img src="${O(b.img)}" alt="${O(_)}"><b>${O(_)}</b><small>${O($)}</small></button>`}).join(""),p=[12,14,18].map(f=>`<button class="hair-item locked" type="button" disabled><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.${f}　🔒</small></button>`).join("");Ee(a.querySelector("#skins"),u+p)}function M0(a){return(En[a]||En.none).img}function Qs(a){const r=he.getState().unlockedHairStyles,i=a||(()=>{var u;const d=localStorage.getItem(Dl());return d&&r.includes(d)?d:r[r.length-1]||((u=Fa[0])==null?void 0:u.id)||"none"})(),l=M0(i);document.querySelectorAll(".ai-chat-bubble img, .ai-chat-header-avatar").forEach(d=>{d.getAttribute("src")!==l&&(d.src=l)})}function N0(a,r){const i=En[r]||En.none,l=a.querySelector('[data-page="buddy"] .buddy-character'),d=a.querySelector('[data-page="buddy"] .buddy-tip img');d&&(d.src=i.img),l&&r!=="none"&&(l.src="./assets/buddy/buddy-hero.png"),Qs(r)}function O0(a,r,i){var l;if(a==="dress"){Fe(r,"已打开造型选择，点击卡片可使用或解锁"),(l=r.querySelector("#skins"))==null||l.scrollIntoView({behavior:"smooth",block:"center"});return}if(a==="feed"){const d=ug();D0({energy:Math.min(100,d.energy+12),love:Math.min(100,d.love+6),feedCount:d.feedCount+1,lastFed:i()}),he.getState().addPoints(3),Fe(r,"小发球吃饱啦：能量 +12，爱心 +6，XP +3");return}if(a==="diary"){ea(r,"diary"),Fe(r,"已打开 Buddy Diary");return}(a==="growth"||a==="journey")&&(ea(r,"journey"),Fe(r,"已打开成长记录"))}function dg(a){localStorage.setItem(Dl(),a)}function z0(a){dg(a),Qs(a)}function cg(a){var l;const r=localStorage.getItem(Dl());if(r&&a.includes(r))return r;const i=a[a.length-1]||((l=Fa[0])==null?void 0:l.id)||"none";return dg(i),i}function ug(){try{return{energy:68,love:86,feedCount:0,lastFed:null,...JSON.parse(localStorage.getItem(og())||"{}")}}catch{return{energy:68,love:86,feedCount:0,lastFed:null}}}function D0(a){localStorage.setItem(og(),JSON.stringify(a))}const I0=4,wn=6,j0=5;function pp(){return'<div class="item scan-record-placeholder" aria-hidden="true"><span></span><b class="scan-record-text"><span class="scan-record-title">&nbsp;</span><small class="scan-record-meta">&nbsp;</small></b><span class="status">&nbsp;</span></div>'}function gp(a,r=!1,i=0){const l='<div class="item"><span>📷</span><b class="scan-record-text"><span class="scan-record-title">暂无记录</span><small class="scan-record-meta">上传图片后会出现在这里。</small></b><span class="status">--</span></div>';if(!a.length)return i<=0?l:l+Array.from({length:Math.max(0,i-1)},()=>pp()).join("");const d=a.map(u=>{const p=O(u.id),f=r?"":` data-view-report="${p}" role="button" tabindex="0"`,m=typeof u.score_delta=="number"?u.score_delta>0?`↑${u.score_delta}`:u.score_delta<0?`↓${Math.abs(u.score_delta)}`:"→0":null,y=typeof u.exp_added=="number"&&u.exp_added>0?`+${u.exp_added}XP`:"",b=m?u.prev_title?`对比「${u.prev_title}」 ${m}`:`较上次 ${m}`:u.summary,_=y?`${u.score} 分 · ${y}`:`${u.score} 分`,$=O(u.title),T=O(b);return`<div class="item"${f}><span>${r?u.date.slice(5):"〰"}</span><b class="scan-record-text"><span class="scan-record-title" title="${$}">${O(u.title)}</span><small class="scan-record-meta" title="${T}">${O(b)}</small></b><button class="status" data-view-report="${p}" title="${O(_)}">${O(_)}</button></div>`}).join("");return i<=0||a.length>=i?d:d+Array.from({length:i-a.length},()=>pp()).join("")}function pg(a){return a.reduce((r,i)=>(r[i.date]=r[i.date]||[],r[i.date].push(i),r),{})}function q0(a){const r=a.slice(0,7).reverse().map(l=>Math.max(18,Math.min(96,l.score))),i=[28,36,44,52,60];return(r.length?r:i).map(l=>`<span class="bar" style="height:${l}%"></span>`).join("")}function gg(a){var M;const r=he.getState().reportHistory,i=I0,l=Math.max(1,Math.ceil(r.length/i)),d=Math.min(Math.max(Number(a.dataset.scanRecordPage||0),0),l-1);a.dataset.scanRecordPage=String(d);const u=r.slice(d*i,d*i+i),p=r.length<=i,f=`<div class="scan-record-pager"${p?' data-pager-idle="1"':""}><button class="pill" data-scan-record-page="${Math.max(0,d-1)}" ${d===0||p?"disabled":""}>上一页</button><small>${d+1} / ${l}</small><button class="pill" data-scan-record-page="${Math.min(l-1,d+1)}" ${d>=l-1||p?"disabled":""}>下一页</button></div>`,m=((M=r[0])==null?void 0:M.source_label)||"等待分析",y=O(m),b=O(F0(m)),_=r.length?Math.round(r.reduce((z,j)=>z+j.score,0)/r.length):null,$=_==null?null:Math.max(0,Math.min(99,_)),T=a.querySelector('[data-page="scan"] .scan-week-card')||a.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),P=T==null?void 0:T.querySelector(".scan-week"),A=`<h3>本周扫描数据 <small>最近记录</small></h3><div class="scan-week"><div><strong>${r.length}<small>次</small></strong><span>扫描次数</span></div><div><strong>${$??"--"}</strong><span>状态平均分</span></div><div><strong class="scan-source-value" title="${y}" data-full-source="${y}">${b}</strong><span>最新来源及结果</span></div></div>`;if(P&&T){const z=T.querySelector("h3");z&&(z.innerHTML="本周扫描数据 <small>最近记录</small>"),Ee(P,`
      <div><strong>${r.length}<small>次</small></strong><span>扫描次数</span></div>
      <div><strong>${$??"--"}</strong><span>状态平均分</span></div>
      <div><strong class="scan-source-value" title="${y}" data-full-source="${y}">${b}</strong><span>最新来源及结果</span></div>
    `)}else Ee(T,A);const S=a.querySelector('[data-page="scan"] .scan-history-card')||a.querySelector('[data-page="scan"] .grid .card.item-list'),E=a.querySelector('[data-page="scan"] .scan-history')||a.querySelector('[data-page="scan"] .scan-record-list');if(E&&S){const z=S.querySelector("h3");z&&(z.innerHTML='最近扫描记录 <a href="#" data-go="journey">查看全部 →</a>'),Ee(E,gp(u,!1,i)+f)}else Ee(S,`<h3>最近扫描记录</h3><div class="scan-record-list">${gp(u,!1,i)}</div>${f}`);fg(a,r)}function F0(a){const r=a.trim();return r?/本地|fallback|demo/i.test(r)?"本地兜底":/cc\s*club|openai|真实\s*AI|\bapi\b|compatible/i.test(r)?"真实 AI":/mock/i.test(r)?"Mock":/等待/.test(r)?"等待分析":r.length>6?"真实 AI":r:"等待分析"}function fg(a,r){const i=a.querySelector('[data-page="journey"]');if(!i)return;const l=pg(r),d=Object.keys(l).length,u=he.getState().checkinDays.length,p=he.getState().points,f=i.querySelectorAll(".journey-metrics strong");f.length>=3&&(d>0&&(f[0].textContent=String(d)),p>0&&(f[1].textContent=p.toLocaleString("en-US")),u>0&&(f[2].textContent=String(u)));const m=Number(i.dataset.journeyVisible||wn)||wn,y=r.length?Math.min(Math.max(m,wn),r.length):wn;i.dataset.journeyVisible=String(y);const b=i.querySelector("#timeline");if(b&&r.length){const $=r.slice(0,y),T=[],P=$.map((A,S)=>{const E=`${Math.max(0,Math.min(99,Math.round(A.score)))} 分`,M=typeof A.score_delta=="number"&&A.score_delta>0||A.score>=70?"timeline-reward green":"timeline-reward",z=U0(A,T);T.push(z);const[,j,W]=A.date.split("-"),F=X0(A.date);return`<article class="timeline-row-new${S===0?" selected":""}" data-view-report="${O(A.id)}"><div class="timeline-date"><b>${O(`${j}/${W}`)}</b><small>${O(F)}</small></div><span class="timeline-icon" aria-hidden="true">${z}</span><div class="timeline-copy"><b>${O(A.title)}</b><small>${O(A.summary)}</small></div><span class="${M}">${O(E)}</span></article>`}).join("");Ee(b,P)}const _=i.querySelector('[data-action="journey-load-more"]');if(_){const $=r.length>y;_.hidden=r.length===0||!$,_.disabled=!$,_.textContent=$?"加载更多　⌄":"已经看完啦～"}}const hr=["🌱","🎀","🫧","🍀"];function U0(a,r=[]){const i=`${a.title} ${a.summary} ${(a.tags||[]).join(" ")}`,l=i.toLowerCase();let d=null,u=null;if(/模糊|努力|看不清|看不清/.test(i)||/blur/.test(l)?(d="🌫️",u="💪"):/发量|守护|保护|稳住/.test(i)?(d="🛡️",u="✨"):/隐身|低调/.test(i)?(d="🫥",u="🌙"):/微观|桌面|观察|微风/.test(i)?(d="🔍",u="📷"):(a.score>=75||/稳|高光|闪耀|进步/.test(i))&&(d="⭐",u="🌟"),d&&!r.includes(d))return d;if(u&&!r.includes(u))return u;const p=B0(a.id||a.title||i);for(let f=0;f<hr.length;f+=1){const m=hr[(p+f)%hr.length];if(!r.includes(m))return m}return hr[p%hr.length]}function B0(a){let r=0;for(let i=0;i<a.length;i+=1)r=r*31+a.charCodeAt(i)>>>0;return r}function H0(a){const r=a.querySelector('[data-page="journey"]');if(!r)return{loaded:!1,exhausted:!0};const i=he.getState().reportHistory,l=r.querySelector('[data-action="journey-load-more"]');l&&(l.disabled=!0,l.textContent="加载中…");const d=Number(r.dataset.journeyVisible||wn)||wn,u=Math.min(i.length,d+j0);return r.dataset.journeyVisible=String(u),fg(a,i),{loaded:u>d,exhausted:u>=i.length}}function X0(a){const r=["周日","周一","周二","周三","周四","周五","周六"],i=new Date(`${a}T12:00:00`);return Number.isNaN(i.getTime())?"":r[i.getDay()]||""}const W0=Math.round(ag/1024/1024);function V0(a,r){const i=a.querySelector('[data-page="scan"]'),l=a.querySelector("#scanBtn"),d=a.querySelector("#uploadBtn"),u=a.querySelector("#scanCompleteBtn"),p=a.querySelector("#scanPercent"),f=(i==null?void 0:i.querySelector("[data-scan-card]"))||(i==null?void 0:i.querySelector(".scan-center"))||(i==null?void 0:i.querySelector('.card[style*="text-align:center"]')),m=document.createElement("input"),y=document.createElement("input");let b=null,_=null,$=null;const T=(V,K=!1)=>{V.type="file",V.accept="image/*",K&&V.setAttribute("capture","environment"),V.style.display="none",document.body.appendChild(V)};T(m,!0),T(y);const P=(V,K="idle",se=!1)=>{const te=f==null?void 0:f.querySelector("[data-analysis-status]"),ue=te||document.createElement("div");ue.dataset.analysisStatus="true",ue.className=`scan-analysis-status is-${K}`,ue.innerHTML=`<p class="scan-analysis-status-text">${O(V)}</p>${se?'<button type="button" class="pill primary scan-analysis-retry" data-analysis-retry>再试一次</button>':""}`,te||f==null||f.appendChild(ue);const pe=ue.querySelector("[data-analysis-retry]");pe==null||pe.addEventListener("click",()=>{ie()},{once:!0})},A=V=>{V.forEach(K=>window.clearTimeout(K)),V.length=0},S=V=>{_&&URL.revokeObjectURL(_),_=URL.createObjectURL(V);const K=a.querySelector(".scanner-ring")||a.querySelector(".scan-orbit"),se=K==null?void 0:K.querySelector("[data-upload-preview]"),te=se||document.createElement("img");te.dataset.uploadPreview="true",te.src=_,te.alt="上传预览",Object.assign(te.style,{position:"absolute",inset:"22px",width:"calc(100% - 44px)",height:"calc(100% - 44px)",objectFit:"cover",borderRadius:"50%",boxShadow:"0 18px 45px rgba(99, 75, 168, 0.22)",zIndex:"3"}),se||K==null||K.appendChild(te);const ue=a.querySelector("#scanStateText");ue&&(ue.textContent="照片已选"),p&&(p.textContent="已选",p.style.zIndex="4"),u&&(u.style.display=""),P(`已选择：${V.name}，点击“完成”确认并开始 AI 分析。`)},E=()=>{var V;$==null||$.getTracks().forEach(K=>K.stop()),$=null,(V=a.querySelector("[data-camera-modal]"))==null||V.remove()},M=V=>{const K=new File([V],`diaoleme-camera-${Date.now()}.jpg`,{type:"image/jpeg"});b=K,S(K),P("已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。"),E()},z=async()=>{var se;const V={video:{facingMode:{ideal:"environment"}},audio:!1};if((se=navigator.mediaDevices)!=null&&se.getUserMedia)return navigator.mediaDevices.getUserMedia(V);const K=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return K?new Promise((te,ue)=>K.call(navigator,V,te,ue)):null},j=async()=>{var V,K;try{if($=await z(),!$){P("此页面无相机权限，请检查吧。","error");return}const se=document.createElement("div");se.dataset.cameraModal="true",se.className="camera-capture-modal",se.innerHTML='<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>',a.appendChild(se);const te=se.querySelector("video");te&&(te.srcObject=$),(V=se.querySelector("[data-camera-cancel]"))==null||V.addEventListener("click",E),(K=se.querySelector("[data-camera-capture]"))==null||K.addEventListener("click",()=>{var pe;if(!te||te.videoWidth===0)return;const ue=document.createElement("canvas");ue.width=te.videoWidth,ue.height=te.videoHeight,(pe=ue.getContext("2d"))==null||pe.drawImage(te,0,0),ue.toBlob(Z=>{Z&&M(Z)},"image/jpeg",.92)}),P("相机已打开，请拍照后自动上传。")}catch(se){console.error("[prototype] camera failed:",se),E(),P("此页面无相机权限，请检查吧。","error")}},W=()=>j(),F=()=>y.click(),oe=V=>{var te;const K=V.currentTarget,se=(te=K.files)==null?void 0:te[0];if(K.value="",!!se)try{Ol(se),b=se,S(se)}catch(ue){b=null;const pe={not_image:"这个文件不是图片，请选择 JPG、PNG 等图片文件。",empty_file:"图片文件为空，请重新选择。",file_too_large:`图片有点大啦，请选择 ${W0}MB 以内的照片再试。`};P(pe[ue==null?void 0:ue.message]||"图片暂时读不出来，请换一张再试。","error")}},ie=async()=>{if(!b){F(),P("请先选择或拍摄一张图片。");return}l&&(l.disabled=!0),d&&(d.disabled=!0),u&&(u.disabled=!0),P("分析中，正在叫醒后端小助手…","waiting");let V=10;p&&(p.textContent="10%");const K=[];K.push(window.setTimeout(()=>{P("还在路上～演示服务器可能刚睡醒（冷启动），再等几秒就好。","waiting")},3e3)),K.push(window.setTimeout(()=>{P("还在努力分析中，请再稍等一下，不要离开本页哦。","waiting")},8e3));const se=window.setInterval(()=>{V=Math.min(V+8,96),p&&(p.textContent=`${V}%`)},140);try{const te=await a0(b);Q0(te),window.clearInterval(se),A(K),xl(a,te),r.renderStatefulSections(),te.fallback_code==="BACKEND_UNREACHABLE"?(p&&(p.textContent="兜底"),P("后端暂时连不上（可能在冷启动）。已给你一份轻松兜底结果，也可以点下面再试一次。","error",!0)):te.fallback_code?P("已生成 fallback 结果，可继续演示完整流程。","success"):P("AI 分析完成，结果已写入报告和历史记录。","success")}catch(te){console.error("[prototype] analyze failed:",te),window.clearInterval(se),A(K),p&&(p.textContent="失败"),P("分析接口暂时不可用，可能是冷启动或网络抖动。点「再试一次」或稍后再上传就好。","error",!0)}finally{l&&(l.disabled=!1),d&&(d.disabled=!1),u&&(u.disabled=!1)}};return m.addEventListener("change",oe),y.addEventListener("change",oe),l==null||l.addEventListener("click",W),d==null||d.addEventListener("click",F),u==null||u.addEventListener("click",ie),()=>{m.removeEventListener("change",oe),y.removeEventListener("change",oe),l==null||l.removeEventListener("click",W),d==null||d.removeEventListener("click",F),u==null||u.removeEventListener("click",ie),E(),m.remove(),y.remove(),_&&URL.revokeObjectURL(_)}}function Q0(a){const r=he.getState();r.setAnalysis(a),r.addReport({id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),date:K0(),score:a.score,title:a.title,summary:a.summary,roast:a.roast,encouragement:a.encouragement,tags:a.tags,daily_task:a.daily_task,disclaimer:a.disclaimer,source:a.source,source_label:a.source_label,fallback_code:a.fallback_code,record_status:a.record_status,record_id:a.record_id,count:a.count,thickness:a.thickness,suggestions:a.suggestions})}function fp(){const a=he.getState();return{score:a.dropScore??66,title:a.title,summary:a.summary,roast:a.roast,encouragement:a.encouragement,tags:a.tags.length?a.tags:["等待记录"],daily_task:a.dailyTask,disclaimer:a.disclaimer,source:a.source,source_label:a.sourceLabel,fallback_code:a.fallbackCode,record_status:a.recordStatus,record_id:a.recordId,count:a.count,thickness:a.thickness,suggestions:a.suggestions}}function mg(a){return a.querySelector('[data-page="scan"] [data-scan-card]')||a.querySelector('[data-page="scan"] .scan-center')||a.querySelector('[data-page="scan"] .card[style*="text-align:center"]')}function mp(a){var i;const r=mg(a);(i=r==null?void 0:r.querySelector("[data-analysis-result]"))==null||i.remove(),r==null||r.classList.remove("has-analysis-result")}function xl(a,r){const i=a.querySelector("#scanPercent"),l=mg(a);i&&(i.textContent=`${r.score}%`);const d=a.querySelector("#scanStateText");if(d&&(d.textContent="分析完成"),!l||he.getState().dropScore==null)return;const u=l.querySelector("[data-analysis-result]");u==null||u.remove(),l.classList.add("has-analysis-result");const p=r.source_label||"未知来源",f=r.fallback_code?`<p class="analysis-source-detail">当前为明确 fallback（${O(r.fallback_code)}），不是实时 AI 分析</p>`:"",m=l.querySelector(".scanner-ring")||l.querySelector(".scan-orbit");m&&(m.style.filter="saturate(1.08)");const y=`
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
      <div class="analysis-tags">${r.tags.map(b=>`<span class="badge">${O(b)}</span>`).join("")}</div>
      <small>${O(r.disclaimer)}</small>
    </div>
  `;l.insertAdjacentHTML("beforeend",y)}function K0(){return new Date().toISOString().slice(0,10)}const bn=200,sl=["青铜","白银","黄金","铂金","钻石 III","钻石 II","钻石 I","王者"],Y0=["一","二","三","四","五","六","日"];function $n(a){const r=Math.max(0,a),i=Math.floor(r/bn)+1,l=Math.min(10,i),d=l>=10?bn:r%bn,u=l>=10?0:bn-d,p=l>=10?100:Math.round(d/bn*100);return{level:l,into:d,need:u,percent:p,max:bn}}function Zs(a){const r=Math.max(0,a),i=Math.min(sl.length-1,Math.floor(r/1e3)),l=r%1e3,d=1e3,u=Math.round(l/d*100);return{name:sl[i],current:l,max:d,percent:u,nextNeed:i>=sl.length-1?0:d-l}}function gt(){const a=new Date,r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}function hg(a){const r=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}function qs(a=new Date){const r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),i=r.getDay();return r.setDate(r.getDate()+(i===0?-6:1-i)),Y0.map((l,d)=>{const u=new Date(r);u.setDate(r.getDate()+d);const p=hg(u);return{label:l,key:p,isToday:p===gt()}})}function Il(a,r=gt()){const i=new Set(a);let l=0;const d=new Date;for(i.has(r)||d.setDate(d.getDate()-1);;){const u=hg(d);if(!i.has(u))break;l+=1,d.setDate(d.getDate()-1)}return l}const Ht=["daily","weekly","growth","special"],wl={daily:"每日任务",weekly:"每周任务",growth:"成长任务",special:"特别任务"},hp=[10,10,15,15,20,20,25],G0=["💎","💎","☯","⚡","♥","🎁","☀"],J0=[{id:"daily-water",category:"daily",icon:"./assets/quests/icons/water.svg",title:"喝够 8 杯水",description:"充足的水分让头发更健康",current:6,target:8,reward:50,actionLabel:"去完成"},{id:"daily-sleep",category:"daily",icon:"./assets/quests/icons/sleep.svg",title:"23:30 前睡觉",description:"早睡是头发的修复时间",current:0,target:1,reward:60,actionLabel:"去完成"},{id:"daily-meal",category:"daily",icon:"./assets/quests/icons/meal.svg",title:"吃一份蔬果",description:"补充维生素，滋养发根",current:1,target:1,reward:50,actionLabel:"去完成"},{id:"daily-massage",category:"daily",icon:"./assets/quests/icons/massage.svg",title:"头皮按摩 5 分钟",description:"促进头皮血液循环",current:2,target:5,reward:50,actionLabel:"去完成"},{id:"daily-walk",category:"daily",icon:"./assets/quests/icons/walk.svg",title:"散步 20 分钟",description:"运动让身体和头发一起呼吸",current:1,target:1,reward:40,actionLabel:"去完成"}],Z0={weekly:[{id:"weekly-scan-3",category:"weekly",icon:"📷",title:"完成 3 次记录",description:"给小发球攒一组本周观察素材。",current:0,target:3,reward:35,actionLabel:"记录本周"},{id:"weekly-sleep-4",category:"weekly",icon:"🌙",title:"4 天温柔早睡",description:"不卷到深夜，给头皮也放个小假。",current:0,target:4,reward:40,actionLabel:"打卡早睡"},{id:"weekly-share",category:"weekly",icon:"💬",title:"分享一次发球周报",description:"把本周小进步发给朋友，轻松晒一下。",current:0,target:1,reward:25,actionLabel:"去分享"},{id:"weekly-massage",category:"weekly",icon:"🪮",title:"完成 3 次头皮放松",description:"睡前 5 分钟，给自己按下暂停键。",current:0,target:3,reward:30,actionLabel:"开始放松"},{id:"weekly-water-3",category:"weekly",icon:"💧",title:"喝水小目标达标 3 天",description:"本周挑 3 天认真补水，头发和状态都更舒服。",current:0,target:3,reward:30,actionLabel:"去打卡"}],growth:[{id:"growth-first-report",category:"growth",icon:"🌱",title:"生成第一份种子报告",description:"上传照片后获得你的第一枚趣味称号。",current:0,target:1,reward:45,actionLabel:"去扫描"},{id:"growth-7-day",category:"growth",icon:"🔥",title:"连续记录 7 天",description:"把小习惯养成小成就，不求完美只求坚持。",current:0,target:7,reward:80,actionLabel:"点亮进度"},{id:"growth-unlock-style",category:"growth",icon:"🎀",title:"解锁一个新造型",description:"给小发球换套新皮肤，奖励认真生活的你。",current:0,target:1,reward:60,actionLabel:"去解锁"},{id:"growth-history",category:"growth",icon:"📒",title:"查看一次历史趋势",description:"回头看看，最近的自己已经很棒啦。",current:0,target:1,reward:25,actionLabel:"看趋势"},{id:"growth-compare",category:"growth",icon:"🔍",title:"完成一次轻松对比",description:"把最近两次记录放一起看看，发现一点小变化就够。",current:0,target:1,reward:40,actionLabel:"去对比"}],special:[{id:"special-spring",category:"special",icon:"🌸",title:"春风吹发季签到",description:"参与 8.1–8.31 赛季限时活动，领取赛季能量。",current:0,target:1,reward:50,actionLabel:"领取能量"},{id:"special-mood",category:"special",icon:"😊",title:"写下今日心情弹幕",description:"把压力吐槽给小发球听，轻轻放过自己。",current:0,target:1,reward:30,actionLabel:"写一句"},{id:"special-buddy",category:"special",icon:"☁️",title:"和 Buddy 互动一次",description:"摸摸小发球，让陪伴感上线。",current:0,target:1,reward:35,actionLabel:"去互动"},{id:"special-community",category:"special",icon:"✨",title:"逛逛社区治愈帖",description:"看看大家的小妙招，找到一点轻松感。",current:0,target:1,reward:25,actionLabel:"去看看"},{id:"special-sticky",category:"special",icon:"📌",title:"给自己贴一张治愈便签",description:"写一句今天对自己好的话，存进小日记。",current:0,target:1,reward:30,actionLabel:"去贴便签"}]},kl=100,ev="./assets/quests/reward-standing-mascot.png",tv="./assets/quests/tip-sitting-mascot.png",yp="./assets/quests/icons/gift.svg";let Sl=null;function av(a){Sl=a}function nv(a,r){dv();const i=he.getState(),l=Ua(r),d=na(r),u=l.filter(E=>d.has(E.id)).length,p=Ht.flatMap(Ua),f=cv(p),m=p.length?Math.round(f.done/p.length*100):0,y=Ua("daily").every(E=>na("daily").has(E.id)),b=Il(i.checkinDays);Ee(a.querySelector('[data-page="quests"] .quest-tabs-new'),Ht.map(E=>`<button type="button" class="quest-tab${E===r?" is-active":""}" data-quest-category="${E}">${wl[E]}</button>`).join("")),Ee(a.querySelector("#questList"),l.map(E=>ov(E,d.has(E.id))).join("")+lv(r,u,l.length,y));const _=a.querySelector("#weekRewards");_!=null&&_.classList.contains("reward-days")?Ee(_,qs().map(({label:E,key:M,isToday:z},j)=>{const W=i.checkinDays.includes(M),F=hp[j]??10,oe=G0[j]??"✦";return W?`<button class="reward-day claimed" type="button"><b>${O(E)}</b><i>✓</i><strong>已领取</strong><small>+${F} XP</small></button>`:z?`<button class="reward-day active" type="button"><b>${O(E)}</b><i>${oe}</i><strong class="today-label">今天</strong><small>+${F} XP</small></button>`:`<button class="reward-day" type="button"><b>${O(E)}</b><i>${oe}</i><span>+${F} XP</span></button>`}).join("")):Ee(_,qs().map(({label:E,key:M},z)=>`<span class="badge">${i.checkinDays.includes(M)?"✓":E}<br><small>+${hp[z]??10} XP</small></span>`).join(""));const $=a.querySelector('[data-page="quests"] .streak-card-new strong');if($)$.innerHTML=`${b} <small>天</small>`;else{const E=a.querySelector("[data-quests-streak-days]");E&&(E.textContent=`${b} 天`)}const T=["🍬","🧁","🍪","🍩","🍦","🍰","🎁"];Ee(a.querySelector("#streak"),qs().map(({label:E,key:M},z)=>{const j=i.checkinDays.includes(M),W=z===6,F=W?"🎁":j?"✓":T[z]??"🍬";return`<span class="${j&&!W?"done":W?"gift":"pending"}"><b aria-hidden="true">${F}</b><small>${O(E)}</small></span>`}).join(""));const P=a.querySelector('[data-page="quests"] .progress-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(1)'),A=a.querySelector('[data-page="quests"] .tip-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(3)'),S=a.querySelector('[data-page="quests"] .overview-card-new')||a.querySelector('[data-page="quests"] aside .card:nth-child(4)');if(P!=null&&P.classList.contains("progress-card-new")?Ee(P,`<h2>我的任务进度</h2>
      <div class="progress-content">
        <div>
          <p>本周完成度</p>
          <strong class="progress-big">${m}%</strong>
          <div class="progress-line"><i style="width:${m}%"></i></div>
          <p>完成 ${f.done}/${p.length} 个任务</p>
        </div>
        <div class="progress-ring" style="--pct:${m}%" aria-hidden="true">
          <img src="${ev}" alt="">
        </div>
      </div>`):Ee(P,`<h3>我的任务进度</h3><div class="big-number">${m}%</div><div class="meter"><div class="fill" style="--w:${m}%"></div></div><p>完成 ${f.done}/${p.length} 个任务</p><small>${wl[r]}：${u}/${l.length}</small>`),A!=null&&A.classList.contains("tip-card-new")?Ee(A,`<h2>任务小贴士</h2>
      <p class="tip-lead"><b>定期护理 + 健康生活习惯 = 健康的头发！</b></p>
      <p class="tip-body">保持好心情，规律作息，均衡饮食，<br>你的头发会越来越喜欢你哦～</p>
      <img class="tip-mascot" src="${tv}" alt="">`):Ee(A,'<h3>任务小贴士</h3><p>定期护理 + 健康生活习惯 = 健康的头发！保持好心情，规律作息，均衡饮食，你的头发会越来越喜欢你哦～</p><div class="mini-buddy"></div>'),S!=null&&S.classList.contains("overview-card-new")){const E=f.donePct,M=f.donePct+f.progressPct;Ee(S,`<h2>本周任务总览</h2>
      <div class="overview">
        <div class="quest-donut" data-total="${p.length}" style="--done-end:${E}%;--progress-end:${M}%"></div>
        <ul>
          <li><span><i class="dot done"></i> 已完成</span><b>${f.done} (${il(f.done,p.length)}%)</b></li>
          <li><span><i class="dot progress"></i> 进行中</span><b>${f.inProgress} (${il(f.inProgress,p.length)}%)</b></li>
          <li><span><i class="dot todo"></i> 未开始</span><b>${f.notStarted} (${il(f.notStarted,p.length)}%)</b></li>
        </ul>
      </div>`)}else Ee(S,`<h3>本周任务总览</h3><div class="donut" data-label="${f.done}/${p.length}\\A 已完成"></div><p>${y?"每日建议已全部点亮，额外奖励已入账。":"今天再点亮一个小任务，就很不错啦。"}</p>`)}function rv(a,r,i){const l=Ua(a).find(u=>u.id===r);if(!l)return;const d=na(a);if(d.has(r)){Fe(i,"这个任务已经领取过啦");return}if(d.add(r),yg(a,d),he.getState().addPoints(l.reward),Fe(i,`+${l.reward} XP · ${l.title}`),a==="daily"){const u=Ua("daily");u.length>0&&u.every(p=>d.has(p.id))&&localStorage.getItem(_n().taskBonusKey())!=="1"&&(localStorage.setItem(_n().taskBonusKey(),"1"),he.getState().addPoints(kl),Fe(i,`每日任务全完成，额外 +${kl} XP · +1 Energy`))}}function sv(){const a=_n();localStorage.removeItem(a.taskKey()),localStorage.removeItem(a.taskBonusKey()),Ht.forEach(r=>localStorage.removeItem(a.questProgressKey(r)))}function iv(){const a=Ht.flatMap(Ua).length;return{done:Ht.reduce((i,l)=>i+na(l).size,0),total:a}}function Ua(a){return a==="daily"?J0:Z0[a]}function na(a){try{return new Set(JSON.parse(localStorage.getItem(_n().questProgressKey(a))||"[]"))}catch{return new Set}}function vp(a){return Ht.includes(a)}function ov(a,r){const i=r||a.current>=a.target,l=i?a.target:a.current,d=a.target>0?Math.round(l/a.target*100):0,u=uv(a.icon)?`<img src="${O(a.icon)}" alt="">`:`<span class="quest-emoji" aria-hidden="true">${a.icon}</span>`,p=i?"":`+${a.reward} XP`,f=i?"✓ 已完成":O(a.actionLabel),m=i?'class="quest-do quest-btn done" type="button"':`data-quest-category="${a.category}" data-quest-id="${a.id}" class="quest-do quest-btn" type="button"`;return`<article class="quest-row">
    ${u}
    <div class="quest-copy"><b>${O(a.title)}</b><small>${O(a.description)}</small></div>
    <div class="quest-progress">
      <span class="quest-count">${l}/${a.target}</span>
      <div class="quest-meter"><i style="width:${d}%"></i></div>
    </div>
    <span class="quest-xp">${p}</span>
    <button ${m}>${f}</button>
  </article>`}function lv(a,r,i,l){const d=r>=i&&i>0;if(a==="daily")return`<section class="quest-card quest-bonus">
      <img src="${yp}" alt="">
      <b>${l?"今日任务全部完成！":"完成所有每日任务可获得额外奖励！"}</b>
      <span>✦ +${kl} XP</span>
      <span>⚡ +1 Energy</span>
      <button type="button">${d?"已点亮":"未完成"}</button>
    </section>`;const u=Math.max(20,i*10);return`<section class="quest-card quest-bonus">
    <img src="${yp}" alt="">
    <b>${wl[a]}完成度 ${r}/${i}</b>
    <span>✦ +${u} XP</span>
    <span></span>
    <button type="button">${d?"已点亮":"未完成"}</button>
  </section>`}function dv(){for(const a of Ht){const r=na(a);let i=!1;for(const l of Ua(a))l.current>=l.target&&!r.has(l.id)&&(r.add(l.id),i=!0);i&&yg(a,r)}}function cv(a){let r=0,i=0,l=0;for(const u of a)na(u.category).has(u.id)||u.current>=u.target?r+=1:u.current>0?i+=1:l+=1;const d=a.length||1;return{done:r,inProgress:i,notStarted:l,donePct:Math.round(r/d*100),progressPct:Math.round(i/d*100)}}function il(a,r){return r?Math.round(a/r*100):0}function uv(a){return a.startsWith("./")||a.startsWith("/")||a.includes(".svg")||a.includes(".png")}function yg(a,r){localStorage.setItem(_n().questProgressKey(a),JSON.stringify([...r])),a==="daily"&&localStorage.setItem(_n().taskKey(),JSON.stringify([...r]))}function _n(){if(!Sl)throw new Error("quest controller is not configured");return Sl}const Ne=aa("rewards-assets/"),ei=()=>"diaoleme-owned-rewards",ti=()=>"diaoleme-reward-purchase-records",ai=[{id:"flower",name:"樱花发箍",subtitle:"发型装扮",points:200,image:`${Ne}reward-flower.png`,category:"发型装扮",unlockId:"medium"},{id:"starlight",name:"星光泡泡发型",subtitle:"发型装扮",points:350,image:`${Ne}reward-starlight.png`,category:"发型装扮",unlockId:"curly"},{id:"serum",name:"生发精华液 30ml",subtitle:"实物好物",points:480,image:`${Ne}reward-serum.png`,category:"护发好物"},{id:"healing",name:"治愈蘑菇帽",subtitle:"发行装扮",points:280,image:`${Ne}reward-healing.png`,category:"发型装扮"},{id:"gift",name:"护发礼盒套装",subtitle:"实物好物",points:650,image:`${Ne}reward-gift.png`,category:"护发好物"},{id:"lamp",name:"蒲公英小夜灯",subtitle:"限量周边",points:320,image:`${Ne}reward-lamp.png`,category:"定制周边"},{id:"sprout",name:"嫩芽发型",subtitle:"发型装扮",points:250,image:`${Ne}reward-sprout.png`,category:"发型装扮",unlockId:"long"},{id:"brush",name:"头皮按摩梳",subtitle:"实物好物",points:420,image:`${Ne}reward-brush.png`,category:"护发好物"},{id:"cape",name:"银河披风",subtitle:"陪伴道具",points:500,image:`${Ne}reward-cape.png`,category:"陪伴道具"},{id:"vip",name:"7天特权卡",subtitle:"成长特权",points:800,image:`${Ne}reward-vip.png`,category:"成长特权"}],pv=["全部","发型装扮","护发好物","陪伴道具","成长特权","定制周边"];function gv(a){return pv.includes(a)}function fv(a){return a==="default"||a==="points-asc"||a==="points-desc"}function mv(a="全部",r="default"){let i=[...ai];return a!=="全部"&&(i=i.filter(l=>l.category===a)),r==="points-asc"?i.sort((l,d)=>l.points-d.points||l.name.localeCompare(d.name,"zh-CN")):r==="points-desc"&&i.sort((l,d)=>d.points-l.points||l.name.localeCompare(d.name,"zh-CN")),i}const hv=[{level:1,name:"樱花发箍",image:`${Ne}reward-flower.png`,marketId:"flower"},{level:2,name:"星光泡泡",image:`${Ne}reward-starlight.png`,marketId:"starlight"},{level:3,name:"生发精华",image:`${Ne}reward-serum.png`,marketId:"serum"},{level:4,name:"蘑菇小帽",image:`${Ne}reward-healing.png`,marketId:"healing"},{level:5,name:"护发礼盒",image:`${Ne}reward-gift.png`,marketId:"gift"},{level:6,name:"蒲公英灯",image:`${Ne}reward-lamp.png`,marketId:"lamp"},{level:7,name:"嫩芽发型",image:`${Ne}reward-sprout.png`,marketId:"sprout"},{level:8,name:"按摩木梳",image:`${Ne}reward-brush.png`,marketId:"brush"},{level:9,name:"银河披风",image:`${Ne}reward-cape.png`,marketId:"cape"},{level:10,name:"7天特权",image:`${Ne}reward-vip.png`,marketId:"vip"},{level:11,name:"花瓣发卡",image:`${Ne}reward-flower.png`,marketId:"flower"},{level:12,name:"星尘徽章",image:`${Ne}reward-starlight.png`,marketId:"starlight"}];function _r(){try{return new Set(JSON.parse(localStorage.getItem(ei())||"[]"))}catch{return new Set}}function yv(a){localStorage.setItem(ei(),JSON.stringify([...a]))}function vv(){localStorage.removeItem(ei()),localStorage.removeItem(ti())}function vg(a,r,i=_r()){return!!i.has(a.id)}function bv(a){return ai.find(r=>r.id===a)}function bp(a,r,i=_r()){if(vg(a,[],i))return{owned:!0,canBuy:!1,status:"已拥有",need:0};const l=Math.max(0,a.points-r);return l===0?{owned:!1,canBuy:!0,status:"可兑换",need:0}:{owned:!1,canBuy:!1,status:`还差 ${l.toLocaleString("en-US")} XP`,need:l}}function xv(){if(typeof window>"u")return;const a="diaoleme-rewards-owned-sync-v3";window.localStorage.getItem(a)!=="1"&&(window.localStorage.removeItem(ei()),window.localStorage.removeItem(ti()),window.localStorage.setItem(a,"1"))}function bg(){try{return JSON.parse(localStorage.getItem(ti())||"[]")}catch{return[]}}function wv(a){localStorage.setItem(ti(),JSON.stringify(a))}function kv(a){const r=he.getState(),i=_r();if(vg(a,r.unlockedHairStyles,i))return{ok:!1,message:`${a.name} 已经拥有啦`};if(r.points<a.points)return{ok:!1,message:`积分还差 ${a.points-r.points} XP`};const l=a.unlockId&&Fa.some(u=>u.id===a.unlockId)?Array.from(new Set([...r.unlockedHairStyles,a.unlockId])):r.unlockedHairStyles;he.setState({points:r.points-a.points,unlockedHairStyles:l}),i.add(a.id),yv(i);const d=bg();return d.unshift({id:a.id,name:a.name,date:gt(),points:`-${a.points.toLocaleString("en-US")} XP`,status:"已兑换",image:a.image}),wv(d.slice(0,20)),{ok:!0,message:`已兑换 ${a.name} · -${a.points} XP`}}function Sv(){const a=bg().filter(i=>i.id!=="empty"&&i.name!=="还没有兑换记录");if(a.length)return a.slice(0,3);const r=_r();return r.size?ai.filter(i=>r.has(i.id)).slice(0,3).map(i=>({id:i.id,name:i.name,date:gt(),points:`-${i.points.toLocaleString("en-US")} XP`,status:"已兑换",image:i.image})):[]}function Ev(a,r="全部",i="default"){xv();const l=he.getState(),d=$n(l.points),u=_r(),p=l.checkinDays.includes(gt()),f=Il(l.checkinDays);lg(a),a.querySelectorAll("[data-reward-category]").forEach(Z=>{Z.classList.toggle("active",Z.dataset.rewardCategory===r)});const m=a.querySelector("[data-reward-sort]");m&&m.value!==i&&(m.value=i),a.querySelectorAll("[data-rewards-points]").forEach(Z=>{Z.textContent=l.points.toLocaleString("en-US")});const y=a.querySelector("[data-rewards-next-level]"),b=a.querySelector("[data-rewards-level-fill]");y&&(y.textContent=d.need>0?`距离下一等级还需 ${d.need.toLocaleString("en-US")} XP`:"已达当前演示等级上限"),b&&(b.style.width=`${d.percent}%`);const _=a.querySelector("[data-rewards-streak]");_&&(_.textContent=`已连续 ${f} 天`);const $=a.querySelector("[data-rewards-level-badge]");$&&($.textContent=d.level>=10?`Lv.${d.level} 已满级`:`Lv.${d.level} 成长中`);const T=a.querySelector("[data-rewards-overview-next]"),P=a.querySelector("[data-rewards-overview-ratio]"),A=a.querySelector("[data-rewards-overview-fill]");T&&(T.textContent=d.need>0?`距离 Lv.${Math.min(10,d.level+1)} 还差 ${d.need.toLocaleString("en-US")} XP`:"已达当前演示等级上限"),P&&(P.textContent=`${d.into.toLocaleString("en-US")} / ${d.max.toLocaleString("en-US")}`),A&&(A.style.width=`${d.percent}%`);const S=2,E=3,M=l.reportHistory.filter(Z=>Z.date===gt()).length,z=1,j=(p?1:0)+Math.min(S,E)+Math.min(M,z),W=1+E+z,F=(p?5:0)+3+(M>0?2:0),oe=a.querySelector("[data-rewards-today-badge]");oe&&(oe.textContent=`${Math.min(j,W)} / ${W} 已完成`);const ie=a.querySelector("[data-rewards-today-xp]");ie&&(ie.textContent=`+${F} XP`);const V=a.querySelector("[data-rewards-today-tasks]");V&&(V.textContent=`${S} 项`);const K=a.querySelector("[data-rewards-today-record]");K&&(K.textContent=`${M} 次`),Ee(a.querySelector("#rewardsTodayGrowth"),`
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
        <div class="today-growth-bar"><i style="width:${Math.min(100,Math.round(M/z*100))}%"></i></div>
        <span>${M>=z?"今日已记录":`还差 ${Math.max(0,z-M)} 次`}</span>
      </div>
    </article>
  `);const se=a.querySelector("[data-rewards-checkin-hint]");se&&(se.innerHTML=p?"今日已打卡":"今日打卡可得 <b>+5 XP</b>");const te=qs();Ee(a.querySelector("#rewardsCheckin"),te.map(({label:Z,key:we,isToday:ye},B)=>{const ae=l.checkinDays.includes(we),H=B===6;if(!ae&&(ye||H)){const N=H?`<img class="gift-circle" src="${Ne}gift-day.png" alt="礼物">`:'<span class="check-circle pending" aria-hidden="true"></span>';return`<button type="button" data-action="checkin" ${p?"disabled":""} aria-label="${p?"今日已打卡":"今日打卡"}">${N}<small>${Z}</small></button>`}return`<div class="${ae?"is-done":""}${ye?" is-today":""}">${ae?'<span class="check-circle done" aria-label="已打卡"><svg class="check-mark" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg></span>':'<span class="check-circle pending" aria-label="未打卡"></span>'}<small>${Z}</small></div>`}).join(""));const ue=mv(r,i);Ee(a.querySelector("#shop"),ue.length?ue.map(Z=>{const we=bp(Z,l.points,u),ye=we.owned?"owned":we.canBuy?"can-buy":"locked",B=!we.owned&&!we.canBuy?`<img class="reward-lock-icon" src="${Ne}icon-lock.png" alt="" aria-hidden="true">`:"";return`<button class="reward-card ${ye}" type="button" data-reward-buy="${O(Z.id)}" ${we.owned?"disabled":""}>
      <div class="reward-image-wrap">
        <img class="reward-product-image" src="${O(Z.image)}" alt="${O(Z.name)}">
        ${B}
      </div>
      <div class="reward-copy">
        <strong>${O(Z.name)}</strong>
        <span>${O(we.status)}</span>
        <b>${Z.points.toLocaleString("en-US")} XP</b>
      </div>
    </button>`}).join(""):'<div class="reward-empty">该分类暂无商品</div>'),Ee(a.querySelector("#rewardsGrowth"),hv.map(Z=>{const we=bv(Z.marketId),ye=we?bp(we,l.points,u):{owned:!1,status:"还差 -- XP"},B=ye.owned?"已领取":ye.status;return`<button type="button" class="growth-reward ${ye.owned?"active":""}">
      <img src="${O(Z.image)}" alt="Lv.${Z.level} ${O(Z.name)}">
      <strong>Lv.${Z.level}</strong>
      <b>${O(Z.name)}</b>
      <span>${O(B)}</span>
    </button>`}).join(""));const pe=Sv();Ee(a.querySelector("#rewardsRecords"),pe.length?pe.map(Z=>`
    <div class="record-item">
      <img src="${O(Z.image)}" alt="${O(Z.name)}">
      <div><strong>${O(Z.name)}</strong><span>${O(Z.date)}</span></div>
      <div><b>${O(Z.points)}</b><small>${O(Z.status)}</small></div>
    </div>
  `).join(""):'<div class="record-empty">暂无兑换记录，去商城看看吧</div>')}const Ut=a=>aa(`league-avatars/${a}.png`),_v=a=>aa(`league-assets/${a}`),jl=()=>"diaoleme-league-rank-metric",xp=["aria","bella","luna","mia","ray","sophia"];function Fs(a){let r=0;for(let i=0;i<a.length;i+=1)r=r*31+a.charCodeAt(i)>>>0;return Ut(xp[r%xp.length])}const Cv="蒲公英小分队",Lv=6,$v=30,Rv="发光小队",Tv=12420,ol=5e3,Pv=2026,Av="8.1 - 8.31",Mv=new Date(Pv,7,31,23,59,59,999);function ja(a){return String(Math.max(0,a)).padStart(2,"0")}function Nv(a=new Date){const r=Math.max(0,Mv.getTime()-a.getTime()),i=Math.floor(r/1e3);return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),mins:Math.floor(i%3600/60),secs:i%60,totalMs:r}}function Ov(a){return a.totalMs<=0?"赛季已结束":`剩余 ${a.days} 天 ${ja(a.hours)}:${ja(a.mins)}:${ja(a.secs)}`}const wp=new WeakMap;function zv(a){const r=wp.get(a);if(r)return r;const i=a.querySelector(".league-static-top span"),l=a.querySelector(".league-static-bottom span"),d=a.querySelector(".league-flip-top span"),u=a.querySelector(".league-flip-bottom span");if(!i||!l||!d||!u)return null;const p={el:a,staticTop:i,staticBottom:l,flipTop:d,flipBottom:u,current:null,busy:!1,timer:null};return wp.set(a,p),p}function xg(a,r){a.staticTop.textContent=r,a.staticBottom.textContent=r,a.flipTop.textContent=r,a.flipBottom.textContent=r,a.current=r,a.busy=!1,a.el.classList.remove("is-flipping")}function Dv(a,r){if(a.current===null){xg(a,r);return}if(a.current===r||a.busy)return;a.busy=!0;const i=a.current;a.staticTop.textContent=r,a.staticBottom.textContent=i,a.flipTop.textContent=i,a.flipBottom.textContent=r,a.el.classList.remove("is-flipping"),a.el.offsetWidth,a.el.classList.add("is-flipping"),a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>{a.staticBottom.textContent=r,a.flipTop.textContent=r,a.flipBottom.textContent=r,a.el.classList.remove("is-flipping"),a.current=r,a.busy=!1,a.timer=null},720)}function kp(a,r=new Date,i=!0){const l=Nv(r),d=a.querySelector("[data-league-season-range]");d&&(d.textContent=Av);const u={days:ja(l.days),hours:ja(l.hours),minutes:ja(l.mins),seconds:ja(l.secs)};Object.keys(u).forEach(f=>{const m=a.querySelector(`.league-flip-card[data-unit="${f}"]`);if(!m)return;const y=zv(m);y&&(i?Dv(y,u[f]):xg(y,u[f]))});const p=a.querySelector("[data-league-battle-remain]");p&&(p.textContent=Ov(l))}let kn=null,vr=null;function Iv(a){const r=vr===a;vr=a,kp(a,new Date,r&&kn!=null),kn==null&&(kn=setInterval(()=>{vr&&kp(vr,new Date,!0)},1e3))}function jv(){kn!=null&&(clearInterval(kn),kn=null),vr=null}const qv=[{name:"Luna",role:"队长",weeklyXp:1840},{name:"Mia",role:"副队长",weeklyXp:1620},{name:"Ray",role:"活跃成员",weeklyXp:1380},{name:"Sophia",role:"活跃成员",weeklyXp:1260},{name:"Bella",role:"成长成员",weeklyXp:980},{name:"Aria",role:"成长成员",weeklyXp:920},{name:"Nora",role:"成员",weeklyXp:860},{name:"Echo",role:"成员",weeklyXp:820},{name:"June",role:"成员",weeklyXp:780},{name:"Quinn",role:"成员",weeklyXp:740},{name:"Iris",role:"成员",weeklyXp:700},{name:"Jade",role:"成员",weeklyXp:660},{name:"Kai",role:"成员",weeklyXp:620},{name:"Lynn",role:"成员",weeklyXp:580},{name:"Momo",role:"成员",weeklyXp:540},{name:"Nori",role:"成员",weeklyXp:500},{name:"Olive",role:"成员",weeklyXp:460},{name:"Piper",role:"成员",weeklyXp:420},{name:"Remy",role:"成员",weeklyXp:380},{name:"Sage",role:"成员",weeklyXp:340},{name:"Tori",role:"成员",weeklyXp:300},{name:"Uma",role:"成员",weeklyXp:280},{name:"Vivi",role:"成员",weeklyXp:260},{name:"Wren",role:"成员",weeklyXp:240},{name:"Yuki",role:"成员",weeklyXp:220},{name:"Zara",role:"成员",weeklyXp:200},{name:"Bo",role:"成员",weeklyXp:180}];function Fv(a){return a<=0?420:Math.max(120,Math.min(1500,Math.round(a/18)))}function wg(){const a=he.getState().points,r=Fv(a),i=[...qv.map(p=>({...p,avatarSrc:Fs(`alliance:${p.name}`)})),{name:"You",role:"成长成员",weeklyXp:r,avatarSrc:Ut("you"),isMe:!0}].sort((p,f)=>f.weeklyXp-p.weeklyXp),l=i.reduce((p,f)=>p+f.weeklyXp,0),d=l%ol,u=Math.round(d/ol*100);return{name:Cv,level:Lv,memberCount:i.length,memberCap:$v,weeklyXp:l,myWeeklyXp:r,intoLevel:d,nextNeed:ol-d,percent:u,members:i,enemyName:Rv,enemyWeeklyXp:Tv}}const kg={青铜:"shield-bronze.png",白银:"shield-silver.png",黄金:"shield-gold.png",铂金:"shield-platinum.png","铂金 I":"shield-platinum-i-sm.png","铂金 II":"shield-platinum-ii.png","钻石 III":"shield-diamond.png","钻石 II":"shield-diamond-ii.png","钻石 I":"shield-diamond-i.png",王者:"shield-king.png","王者 I":"shield-king-i.png","王者 II":"shield-king-ii.png"};function Uv(a){return kg[a]?a:a.startsWith("王者")?a.includes("II")?"王者 II":"王者 I":a.startsWith("铂金")?a.includes("II")?"铂金 II":"铂金 I":a.startsWith("钻石")?a.includes("III")?"钻石 III":a.includes("II")?"钻石 II":"钻石 I":a.startsWith("黄金")?"黄金":a.startsWith("白银")?"白银":(a.startsWith("青铜"),"青铜")}function Ks(a){const r=Uv(a);return _v(kg[r]||"shield-bronze.png")}const El=16,Bv=.2,Hv=["排行榜","我的联盟","好友排行","段位晋升"],Us=[{id:"total_xp",icon:"✦",title:"总 XP 排行",subtitle:"综合成长积分",column:"总 XP",tone:"purple"},{id:"hair_care",icon:"❀",title:"护发达人",subtitle:"头发健康分",column:"健康分",tone:"orange"},{id:"active_star",icon:"★",title:"活跃之星",subtitle:"任务完成数",column:"任务数",tone:"blue"},{id:"streak",icon:"⚡",title:"坚持不懈",subtitle:"连续打卡天数",column:"打卡天数",tone:"rose"},{id:"kindness",icon:"♡",title:"爱心大使",subtitle:"帮助伙伴次数",column:"帮助次数",tone:"green"}],Xv=Us.map(a=>a.id);function Sg(a){return Xv.includes(a)}function Wv(){try{const a=localStorage.getItem(jl());if(a&&Sg(a))return a}catch{}return"total_xp"}function Vv(a){try{localStorage.setItem(jl(),a)}catch{}}function Qv(){localStorage.removeItem(jl())}function _l(a,r){return a==="total_xp"?`${r.toLocaleString("en-US")} XP`:a==="hair_care"?`${r} 分`:a==="active_star"?`${r} 个`:a==="streak"?`${r} 天`:`${r} 次`}function Kv(a){const r=he.getState();if(a==="total_xp")return Math.max(r.points,0);if(a==="hair_care"){if(r.dropScore!=null)return Math.round(r.dropScore);if(r.reportHistory.length){const i=r.reportHistory.reduce((l,d)=>l+d.score,0)/r.reportHistory.length;return Math.round(i)}return 78}return a==="active_star"?Ht.reduce((i,l)=>i+na(l).size,0):a==="streak"?r.checkinDays.length:Math.max(3,Math.min(18,Math.floor(r.points/800)+r.checkinDays.length))}function Yv(a){const r=he.getState();if(a==="total_xp")return r.checkinDays.length?`${r.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！";if(a==="hair_care")return r.dropScore!=null?`最近状态分 ${Math.round(r.dropScore)}`:"轻松记录，保持观察节奏";if(a==="active_star"){const i=Ht.reduce((l,d)=>l+na(d).size,0);return i?`本周已完成 ${i} 个任务`:"去 Quests 点亮一个小任务吧"}return a==="streak"?r.checkinDays.length?`已连续打卡 ${r.checkinDays.length} 天`:"今天打卡就能上榜":"给伙伴一点鼓励，爱心会回来的"}function Gv(a,r){if(!r.length)return 1;let i=r.length;for(let y=0;y<r.length;y++)if(a>=r[y].points){i=y;break}const l=i+1,u=(i===0?null:r[i-1])??(i>=r.length?r[r.length-1]:null);if(!u)return l;const p=u.points,f=Math.max(0,p-a);return(p>0?f/p>Bv:f>0)?99:i<r.length?l:El}function Bs(a="total_xp"){const r={Luna:{name:"Luna",level:"Lv.6",tier:"王者 I",tierTone:"gold",avatarSrc:Ut("luna")},Mia:{name:"Mia",level:"Lv.5",tier:"王者 II",tierTone:"gold",avatarSrc:Ut("mia")},Ray:{name:"Ray",level:"Lv.5",tier:"钻石 I",tierTone:"purple",avatarSrc:Ut("ray")},Sophia:{name:"Sophia",level:"Lv.5",tier:"钻石 II",tierTone:"purple",avatarSrc:Ut("sophia")},Bella:{name:"Bella",level:"Lv.4",tier:"铂金 I",tierTone:"blue",avatarSrc:Ut("bella")},Aria:{name:"Aria",level:"Lv.4",tier:"铂金 II",tierTone:"blue",avatarSrc:Ut("aria")}},d={total_xp:[{name:"Luna",note:"头发是生命的种子 🌱",points:28760,trend:"↑ 1",trendTone:"up"},{name:"Mia",note:"每天进步 1% ✨",points:25480,trend:"↓ 1",trendTone:"down"},{name:"Ray",note:"慢慢来，比较更重要 💜",points:22140,trend:"—",trendTone:"flat"},{name:"Sophia",note:"关注头皮，从现在开始",points:18900,trend:"↑ 2",trendTone:"up"},{name:"Bella",note:"保持心情愉悦～",points:16520,trend:"↓ 1",trendTone:"down"},{name:"Aria",note:"爱自己，从发起 ❤️",points:15320,trend:"—",trendTone:"flat"}],hair_care:[{name:"Sophia",note:"本周平均状态分 96",points:96,trend:"↑ 2",trendTone:"up"},{name:"Aria",note:"光线稳、角度好，记录很轻松",points:93,trend:"↑ 1",trendTone:"up"},{name:"Luna",note:"连续 5 次保持 90+",points:91,trend:"—",trendTone:"flat"},{name:"Bella",note:"洗护节奏稳定",points:88,trend:"↓ 1",trendTone:"down"},{name:"Mia",note:"记录质量持续提升",points:85,trend:"↑ 3",trendTone:"up"},{name:"Ray",note:"保持轻松观察就好",points:82,trend:"—",trendTone:"flat"}],active_star:[{name:"Ray",note:"本周完成 42 个任务",points:42,trend:"↑ 1",trendTone:"up"},{name:"Bella",note:"每日任务全点亮",points:38,trend:"↑ 2",trendTone:"up"},{name:"Mia",note:"成长任务推进很快",points:35,trend:"—",trendTone:"flat"},{name:"Aria",note:"特别任务也不落下",points:31,trend:"↓ 1",trendTone:"down"},{name:"Sophia",note:"每周任务完成率 90%",points:28,trend:"↑ 1",trendTone:"up"},{name:"Luna",note:"任务节奏刚刚好",points:24,trend:"—",trendTone:"flat"}],streak:[{name:"Aria",note:"连续打卡 46 天",points:46,trend:"↑ 1",trendTone:"up"},{name:"Sophia",note:"连续打卡 39 天",points:39,trend:"—",trendTone:"flat"},{name:"Bella",note:"连续打卡 33 天",points:33,trend:"↑ 2",trendTone:"up"},{name:"Ray",note:"连续打卡 27 天",points:27,trend:"↓ 1",trendTone:"down"},{name:"Luna",note:"连续打卡 21 天",points:21,trend:"↑ 1",trendTone:"up"},{name:"Mia",note:"连续打卡 18 天",points:18,trend:"—",trendTone:"flat"}],kindness:[{name:"Mia",note:"本周帮助伙伴 36 次",points:36,trend:"↑ 3",trendTone:"up"},{name:"Ray",note:"给队友点赞从不缺席",points:31,trend:"↑ 1",trendTone:"up"},{name:"Aria",note:"联盟里最会鼓励人",points:28,trend:"—",trendTone:"flat"},{name:"Luna",note:"分享任务小技巧",points:24,trend:"↓ 1",trendTone:"down"},{name:"Sophia",note:"暖心留言达人",points:21,trend:"↑ 2",trendTone:"up"},{name:"Bella",note:"默默给大家加能量",points:17,trend:"—",trendTone:"flat"}]}[a].map(($,T)=>{const P=r[$.name];return{rank:T+1,name:P.name,level:P.level,note:$.note,points:$.points,scoreText:_l(a,$.points),tier:P.tier,tierTone:P.tierTone,trend:$.trend,trendTone:$.trendTone,avatarSrc:P.avatarSrc,isMe:!1}}),u=Kv(a),p=he.getState().points,f=Zs(p),m=f.name.startsWith("王者")?"gold":f.name.startsWith("钻石")?"purple":"blue";d.push({rank:El,name:"You",level:`Lv.${$n(p).level}`,note:Yv(a),points:u,scoreText:_l(a,u),tier:f.name,tierTone:m,trend:"↑ 1",trendTone:"up",avatarSrc:Ut("you"),isMe:!0});const y=d.filter($=>!$.isMe).sort(($,T)=>$.points!==T.points?T.points-$.points:$.rank-T.rank).map(($,T)=>({...$,rank:T+1})),b=d.find($=>$.isMe),_=b?Gv(b.points,y):El;return b?[...y,{...b,rank:_}]:y}function Jv(a,r="排行榜",i="total_xp"){const l=he.getState(),d=Zs(l.points),u=wg(),p=Bs("hair_care").find(V=>!V.isMe),f=Bs("kindness").find(V=>!V.isMe),m=Bs("active_star").find(V=>!V.isMe),y=a.querySelector("[data-award-hair]"),b=a.querySelector("[data-award-kindness]"),_=a.querySelector("[data-award-active]");y&&(y.textContent=(p==null?void 0:p.name)??"--"),b&&(b.textContent=(f==null?void 0:f.name)??"--"),_&&(_.textContent=(m==null?void 0:m.name)??"--"),a.querySelectorAll("[data-league-tab]").forEach(V=>{V.classList.toggle("active",V.dataset.leagueTab===r)});const $=a.querySelector("[data-league-tier-name]"),T=a.querySelector("[data-league-tier-progress]"),P=a.querySelector("[data-league-tier-fill]"),A=a.querySelector("[data-league-tier-badge]"),S=a.querySelector("[data-league-alliance-level]"),E=a.querySelector("[data-league-alliance-members]"),M=a.querySelector("[data-league-my-contrib]"),z=a.querySelector("[data-league-alliance-fill]"),j=a.querySelector("[data-league-alliance-note]"),W=a.querySelector("[data-league-ally-xp]"),F=a.querySelector("[data-league-enemy-xp]"),oe=a.querySelector("[data-league-ally-name]"),ie=a.querySelector("[data-league-enemy-name]");$&&($.textContent=d.name),T&&(T.textContent=`⭐ ${d.current} / ${d.max}`),P&&(P.style.width=`${d.percent}%`),A&&(A.src=Ks(d.name),A.alt=`${d.name}段位徽章`),S&&(S.textContent=`Lv.${u.level}`),E&&(E.textContent=`${u.memberCount} / ${u.memberCap}`),M&&(M.textContent=`${u.myWeeklyXp.toLocaleString("en-US")} XP`),z&&(z.style.width=`${u.percent}%`),j&&(j.textContent=`距离 Lv.${u.level+1} 还需 ${u.nextNeed.toLocaleString("en-US")} XP`),oe&&(oe.textContent=u.name),ie&&(ie.textContent=u.enemyName),W&&(W.textContent=u.weeklyXp.toLocaleString("en-US")),F&&(F.textContent=u.enemyWeeklyXp.toLocaleString("en-US")),Iv(a),Ee(a.querySelector("#leagueRankContent"),Zv(r,i))}function Zv(a,r){return a==="我的联盟"?tb():a==="好友排行"?ab():a==="段位晋升"?nb():eb(r)}function eb(a){const r=Us.find(i=>i.id===a)??Us[0];return`
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
        <div class="table-body">${Bs(a).map(Eg).join("")}</div>
        <div class="refresh-note">◷ ${O(r.title)} · mock 数据，每 10 分钟更新一次</div>
      </div>
    </div>
  `}function tb(){const a=wg(),r=Ht.reduce((d,u)=>d+na(u).size,0),i=Math.round(a.memberCount/a.memberCap*100);return`
    <div class="league-mock-grid alliance-mock">
      ${[["联盟等级",`Lv.${a.level}`,`距离 Lv.${a.level+1} 还需 ${a.nextNeed.toLocaleString("en-US")} XP`,`${a.percent}%`],["本周任务",`${r} 个`,r>0?"完成任务可为联盟积累贡献":"去完成任务，为联盟添一份力",`${Math.min(100,Math.max(18,r*12))}%`],["成员活跃",`${a.memberCount} / ${a.memberCap}`,`本周联盟战累计 ${a.weeklyXp.toLocaleString("en-US")} XP`,`${i}%`]].map(([d,u,p,f])=>`
        <section class="league-mock-card">
          <span>${O(d)}</span>
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
          ${a.members.map(d=>`
            <div class="${d.isMe?"is-me":""}">
              <img class="league-avatar" src="${O(d.avatarSrc)}" alt="${O(d.name)}" loading="lazy" decoding="async">
              <b>${O(d.name)}${d.isMe?"（我）":""}<small>${O(d.role)}</small></b>
              <strong>${d.weeklyXp.toLocaleString("en-US")} XP</strong>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `}function ab(){const a=he.getState(),r=a.points,i=Zs(r),l=i.name.startsWith("王者")?"gold":i.name.startsWith("钻石")?"purple":"blue";return`
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${[...[{rank:1,name:"Nora",level:"Lv.5",note:"睡眠打卡稳定",points:20680,scoreText:"20,680 XP",tier:"钻石 II",tierTone:"purple",trend:"↑ 2",trendTone:"up",avatarSrc:Fs("friend:Nora"),isMe:!1},{rank:2,name:"Echo",level:"Lv.4",note:"本周完成 9 个任务",points:18440,scoreText:"18,440 XP",tier:"铂金 I",tierTone:"blue",trend:"—",trendTone:"flat",avatarSrc:Fs("friend:Echo"),isMe:!1},{rank:3,name:"June",level:"Lv.4",note:"护发建议执行率 86%",points:17210,scoreText:"17,210 XP",tier:"铂金 II",tierTone:"blue",trend:"↓ 1",trendTone:"down",avatarSrc:Fs("friend:June"),isMe:!1},{rank:7,name:"You",level:`Lv.${$n(r).level}`,note:a.checkinDays.length?`${a.checkinDays.length} 天打卡 · 一起变好呀！`:"一起变好呀！",points:r,scoreText:_l("total_xp",r),tier:i.name,tierTone:l,trend:"↑ 1",trendTone:"up",avatarSrc:Ut("you"),isMe:!0}]].sort((p,f)=>f.points-p.points).map((p,f)=>({...p,rank:f+1})).map(Eg).join("")}</div>
      <div class="refresh-note">好友排行中 You 的 XP 已与 UserStore 同步</div>
    </div>
  `}function nb(){const a=he.getState(),r=Zs(a.points),i=$n(a.points),l=["青铜","白银","黄金","铂金","钻石 III","钻石 II","钻石 I","王者"].map((d,u)=>{const p=u*1e3,f=a.points>=p,m=u===0?"完成第一次扫描":f?`已达到 ${p.toLocaleString("en-US")} XP`:`再获得 ${Math.max(0,p-a.points)} XP`;return[d,m,f]});return`
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <img class="league-tier-current-shield" src="${O(Ks(r.name))}" alt="${O(r.name)}">
        <b>${O(r.name)}</b>
        <p>当前总 XP ${a.points.toLocaleString("en-US")} · Lv.${i.level}${r.nextNeed>0?`，再获得 ${r.nextNeed} XP 可晋升`:"，已达演示段位上限"}。</p>
        <div class="league-mock-progress"><i style="width:${r.percent}%"></i></div>
      </section>
      <section class="league-tier-road">
        ${l.map(([d,u,p])=>`
          <div class="${p?"done":""}">
            <img class="league-tier-road-shield" src="${O(Ks(String(d)))}" alt="${O(String(d))}">
            <b>${O(String(d))}<small>${O(String(u))}</small></b>
          </div>
        `).join("")}
      </section>
    </div>
  `}function Eg(a){const r=a.isMe?"you-rank":a.rank===1?"gold":a.rank===2?"silver":a.rank===3?"bronze":"normal",i=Ks(a.tier);return`
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
  `}const rb=()=>`diaoleme-prototype-tasks-${gt()}`,sb=()=>`diaoleme-prototype-task-bonus-${gt()}`,ib=a=>`diaoleme-prototype-quest-progress-${a}-${gt()}`,ob=["all","happy","calm","anxious","tired"],lb=a=>ob.includes(a),_g=["关注","最新","热门","精华"],db=a=>_g.includes(a),Cg="diaoleme-community-user-posts";function cb(){const a=cl.useRef(null);return cl.useEffect(()=>{let r=document.getElementById("diaoleme-prototype-style");r||(r=document.createElement("style"),r.id="diaoleme-prototype-style",document.head.appendChild(r)),r.textContent=`${L0}
${zb}`;let i=()=>{};return a.current&&(a.current.innerHTML=_0,new Function(C0)(),i=ub(a.current)),()=>{i(),a.current&&(a.current.innerHTML="")}},[]),dl.jsx("div",{ref:a})}function ub(a){av({getSuggestions:Ob,taskKey:rb,taskBonusKey:sb,questProgressKey:ib});let r="daily",i="排行榜",l=Wv(),d="关注",u="all",p=6,f="全部",m="default";const y=()=>pb(a,r,i,l,d,u,p,f,m),b=V0(a,{renderStatefulSections:y}),_=Ab();ea(a,"home"),y();const $=he.subscribe(y);Zy(20).then(A=>{A.length&&he.getState().mergeRemoteHistory(A)});const T=A=>{var nt,Ot,zt;const S=A.target,E=S.closest("[data-quest-category]"),M=S.closest("[data-league-tab]"),z=S.closest("[data-league-metric]"),j=S.closest("[data-community-tab]"),W=S.closest("[data-diary-mood]"),F=S.closest('[data-action="diary-load-more"]'),oe=S.closest('[data-action="journey-load-more"]'),ie=S.closest("[data-quest-id]"),V=S.closest('[data-action="checkin"]'),K=S.closest("[data-unlock-id]"),se=S.closest("[data-reward-buy]"),te=S.closest("[data-reward-category]"),ue=S.closest("[data-growth-scroll]"),pe=S.closest("[data-view-report]"),Z=S.closest("[data-view-day]"),we=S.closest("[data-share-report]"),ye=S.closest("[data-go]"),B=S.closest('[data-action="reset-progress"]'),ae=S.closest("[data-scan-record-page]"),H=S.closest('[data-action="journey-share"]'),k=S.closest('[data-action="share-to-community"]'),N=S.closest('[data-action="open-journey"]'),ce=S.closest("[data-buddy-action]"),fe=S.closest("#guideBtn"),be=S.closest("[data-post-like]"),Y=S.closest("[data-post-comments]"),ve=S.closest("[data-league-season-reward]"),ke=S.closest("[data-league-season-reward-close]"),Se=a.querySelector("[data-league-season-reward-panel]"),De=a.querySelector("[data-league-season-reward]");if(ve&&Se&&De){const me=Se.hasAttribute("hidden");Se.toggleAttribute("hidden",!me),De.setAttribute("aria-expanded",me?"true":"false");return}if(ke&&Se&&De){Se.setAttribute("hidden",""),De.setAttribute("aria-expanded","false");return}if(Se&&De&&!Se.hasAttribute("hidden")&&!S.closest("[data-league-season-reward-panel]")&&(Se.setAttribute("hidden",""),De.setAttribute("aria-expanded","false")),ye!=null&&ye.dataset.go&&(ye.dataset.go==="scan"&&!pe&&mp(a),ea(a,ye.dataset.go)),E!=null&&E.dataset.questCategory&&vp(E.dataset.questCategory)&&(r=E.dataset.questCategory,y()),M!=null&&M.dataset.leagueTab&&Hv.includes(M.dataset.leagueTab)&&(i=M.dataset.leagueTab,y(),Fe(a,`已切换至${i}`)),z!=null&&z.dataset.leagueMetric&&Sg(z.dataset.leagueMetric)&&(l=z.dataset.leagueMetric,Vv(l),y()),te!=null&&te.dataset.rewardCategory&&gv(te.dataset.rewardCategory)&&(f=te.dataset.rewardCategory,y(),Fe(a,f==="全部"?"已显示全部商品":`已筛选：${f}`,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"})),se!=null&&se.dataset.rewardBuy){const me=ai.find(G=>G.id===se.dataset.rewardBuy);if(me){const G=kv(me);y(),Fe(a,G.message,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"})}}if(ue!=null&&ue.dataset.growthScroll){const me=Number(ue.dataset.growthScroll),G=a.querySelector("#rewardsGrowth");if(G&&Number.isFinite(me)&&me!==0){const $e=G.querySelector(".growth-reward"),ft=(($e==null?void 0:$e.offsetWidth)||112)+10;G.scrollBy({left:me*ft,behavior:"smooth"})}}if(j!=null&&j.dataset.communityTab&&db(j.dataset.communityTab)&&(d=j.dataset.communityTab,y(),Fe(a,`已切换至${d}`)),W!=null&&W.dataset.diaryMood&&lb(W.dataset.diaryMood)&&(u=W.dataset.diaryMood,p=6,y(),Fe(a,u==="all"?"已显示全部日记":`已筛选：${(nt=W.textContent)==null?void 0:nt.trim()}`)),F&&(p+=6,y()),oe){A.preventDefault();const me=H0(a),G=a.querySelector("#timeline");G==null||G.scrollTo({top:G.scrollHeight,behavior:"smooth"}),me.exhausted&&Fe(a,"已经看完啦～")}if(ie!=null&&ie.dataset.questId&&ie.dataset.questCategory&&vp(ie.dataset.questCategory)&&(rv(ie.dataset.questCategory,ie.dataset.questId,a),y()),V){const me=he.getState().checkinDays.length;he.getState().markCheckinToday();const G=he.getState().checkinDays.length;y(),Fe(a,G>me?"今日打卡成功 +5 XP":"今日已经打过卡啦")}if(K){const me=Fa.find(G=>G.id===K.dataset.unlockId);if(me){const G=he.getState().unlockedHairStyles.includes(me.id),$e=he.getState().unlockHairStyle(me.id,me.cost);$e&&z0(me.id),Fe(a,$e?`${G?"已换上":"已解锁并换上"} ${me.name}`:`积分还差 ${me.cost-he.getState().points}`),y()}}if(pe!=null&&pe.dataset.viewReport){he.getState().viewReport(pe.dataset.viewReport),ea(a,"scan"),xl(a,fp()),Fe(a,"已打开这份扫描报告");return}if(Z!=null&&Z.dataset.viewDay){he.getState().viewDayReport(Z.dataset.viewDay),ea(a,"scan"),xl(a,fp()),Fe(a,"已打开当天最新报告");return}if(we!=null&&we.dataset.shareReport){A.preventDefault();const me=Lp({reportId:we.dataset.shareReport});d="最新",ea(a,"community"),y(),Fe(a,me.message);return}ae!=null&&ae.dataset.scanRecordPage&&(a.dataset.scanRecordPage=ae.dataset.scanRecordPage,gg(a)),B&&confirm("重置所有进度、积分、打卡和历史记录？")&&(he.getState().resetAll(),sv(),vv(),Qv(),l="total_xp",mp(a),y());const bt=S.closest('[data-action="me-edit-profile"],[data-action="me-settings"],[data-action="me-notify"],[data-action="me-privacy"],[data-action="me-help"],[data-action="me-add-goal"]');if(bt!=null&&bt.dataset.action){Fe(a,{"me-edit-profile":"演示版暂不开放账户编辑，先看看成长数据吧","me-settings":"演示版暂无更多设置项","me-notify":"通知设置将在正式版开放","me-privacy":"隐私设置将在正式版开放","me-help":"有问题可以找 AI 助手聊聊，或去 Community 看看伙伴～","me-add-goal":"演示版暂不新增目标，先完成现有小目标吧"}[bt.dataset.action]||"演示功能");return}if(fe||H||k){A.preventDefault();const me=Lp();d="最新",ea(a,"community"),y(),Fe(a,me.message);return}if(N&&ea(a,"journey"),be!=null&&be.dataset.postLike&&(Tb(be.dataset.postLike),$g(a,d)),Y!=null&&Y.dataset.postComments){const me=a.querySelector(`[data-comments-extra-for="${Y.dataset.postComments}"]`);if(me){const G=!me.classList.contains("collapsed");me.classList.toggle("collapsed",G);const $e=Number(((zt=(Ot=Y.textContent)==null?void 0:Ot.match(/\d+/))==null?void 0:zt[0])||0);Y.textContent=G?`💬 ${$e} · 展开`:`💬 ${$e} · 收起`}}ce!=null&&ce.dataset.buddyAction&&(O0(ce.dataset.buddyAction,a,gt),y())};document.addEventListener("click",T);const P=A=>{const E=A.target.closest("select[data-reward-sort]");E&&fv(E.value)&&(m=E.value,y(),Fe(a,`已按${m==="points-asc"?"积分从低到高":m==="points-desc"?"积分从高到低":"默认排序"}排列`,{anchorSelector:'[data-page="rewards"] .reward-market',className:"prototype-toast-shop"}))};return document.addEventListener("change",P),()=>{b(),_(),jv(),$(),document.removeEventListener("click",T),document.removeEventListener("change",P)}}function pb(a,r="daily",i="排行榜",l="total_xp",d="最新",u="all",p=6,f="全部",m="default"){gb(a),A0(a,{avgScore:Tg,buildTrendBars:q0,getQuestCount:iv,todayKey:gt}),nv(a,r),gg(a),kb(a,u,p),$g(a,d),Ev(a,f,m),Jv(a,i,l),Mb(a)}function gb(a){const r=he.getState(),i=$n(r.points),l=a.querySelector("[data-home-points]"),d=a.querySelector("[data-home-level]"),u=a.querySelector("[data-home-level-fill]"),p=a.querySelector("[data-home-next-level]");l&&(l.textContent=r.points.toLocaleString("en-US")),d&&(d.textContent=`Lv.${i.level}`),u&&u.style.setProperty("--w",`${i.percent}%`),p&&(p.textContent=i.need>0?`⭐ 再获得 ${i.need.toLocaleString("en-US")} XP 升级`:"⭐ 已达当前演示等级上限")}function fb(a){return a>=75?{key:"happy",label:"开心",emoji:"😊"}:a>=60?{key:"calm",label:"平静",emoji:"🧘"}:a>=45?{key:"anxious",label:"焦虑",emoji:"😟"}:{key:"tired",label:"疲惫",emoji:"😫"}}function mb(a,r){const i=r[0]||"";return/按摩|护理|头皮/.test(i)?{emoji:"🪮",tone:"mint",src:"./assets/buddy/hairstyles/dandelion.png"}:/睡眠|早睡|放松/.test(i)?{emoji:"🌙",tone:"lavender",src:"./assets/diary/diary-sunset-hero.jpg"}:/运动|打卡|坚持/.test(i)?{emoji:"🌱",tone:"sprout",src:"./assets/buddy/hairstyles/blue-bob.png"}:a==="happy"?{emoji:"✨",tone:"sunny",src:"./assets/diary/diary-sunset-hero.jpg"}:a==="calm"?{emoji:"🍃",tone:"mint",src:"./assets/buddy/hairstyles/dandelion.png"}:a==="anxious"?{emoji:"💭",tone:"cloud",src:"./assets/buddy/hairstyles/blue-bob.png"}:{emoji:"🕯️",tone:"warm",src:"./assets/shared-brand/brand-avatar-tile.png"}}function Sp(a){return a==="all"?"./assets/diary/icons/mood-all.svg":a==="happy"?"./assets/diary/icons/mood-happy.svg":a==="calm"?"./assets/diary/icons/mood-calm.svg":a==="anxious"?"./assets/diary/icons/mood-anxious.svg":"./assets/diary/icons/mood-tired.svg"}const hb=[{key:"all",label:"全部"},{key:"happy",label:"开心"},{key:"calm",label:"平静"},{key:"anxious",label:"焦虑"},{key:"tired",label:"疲惫"}],Hs=aa("assets/shared-brand/brand-avatar-tile.png"),Bt={dandelion:aa("assets/community/avatars/dandelion.png"),strawberry:aa("assets/community/avatars/strawberry.png"),mint:aa("assets/community/avatars/mint.png"),sunflower:aa("assets/community/avatars/sunflower.png"),me:aa("assets/community/avatars/me.png")};function yb(a){var i,l;const r=String(a||"").trim();if(!r)return Hs;if(/assets\/community\/avatars\//.test(r))return r;if(/league-avatars\/(luna|bella|mia|sophia|you)\.png/i.test(r)){const d=(l=(i=r.match(/league-avatars\/(luna|bella|mia|sophia|you)\.png/i))==null?void 0:i[1])==null?void 0:l.toLowerCase();return{luna:Bt.dandelion,bella:Bt.strawberry,mia:Bt.mint,sophia:Bt.sunflower,you:Bt.me}[d||""]||Hs}return/buddy\/hairstyles\//.test(r)?Hs:r}function vb(a,r){const i=a[0];if(a.length===1)return i.title;const l=a.reduce((d,u)=>u.score>d.score?u:d,i);return r>=75?`今天整体挺稳：${l.title}`:r<50?`今天先温柔一点：${i.title}`:`今日小结（${a.length} 次记录）：${i.title}`}function bb(a,r){const i=a[0],l=[i.summary];a.length>1?l.push(`这一天共整理了 ${a.length} 次 Scan，平均状态分 ${r}。`):l.push(`状态分 ${r}，掉发量 ${i.count}。`);const d=i.suggestions[0]||i.daily_task;return d&&l.push(`轻任务：${d}`),l.join(" ")}function xb(a){const r=pg(a);return Object.keys(r).sort((i,l)=>l.localeCompare(i)).map(i=>{const l=[...r[i]].sort((f,m)=>m.id.localeCompare(f.id)),d=Math.round(l.reduce((f,m)=>f+m.score,0)/l.length),u=fb(d),p=mb(u.key,l.flatMap(f=>f.tags));return{date:i,reports:l,score:d,mood:u,title:vb(l,d),snippet:bb(l,d),thumbEmoji:p.emoji,thumbTone:p.tone,thumbSrc:p.src,primaryReportId:l[0].id}})}function wb(a){const r={happy:0,calm:0,anxious:0,tired:0};a.forEach(l=>{r[l.mood.key]+=1});const i=a.length||1;return{counts:r,percents:{happy:Math.round(r.happy/i*100),calm:Math.round(r.calm/i*100),anxious:Math.round(r.anxious/i*100),tired:Math.round(r.tired/i*100)}}}const Ep=["护理","头皮按摩","睡眠","营养","运动","心情","焦虑","黑芝麻","早睡","坚持","生发","洗头","放松","喝水","阳光","冥想","梳发","护发","头皮","日记","打卡","平静","开心","疲惫","按摩","清爽","成长"];function _p(a){const r=new Map,i=(d,u=1)=>{const p=String(d||"").trim();!p||p.length>8||r.set(p,(r.get(p)||0)+u)};for(const d of a){for(const p of d.tags||[])i(p,3);const u=`${d.title||""} ${d.summary||""}`;for(const p of Ep)u.includes(p)&&i(p,1)}const l=[...r.entries()].sort((d,u)=>u[1]-d[1]||d[0].localeCompare(u[0])).map(([d])=>d);return[...new Set([...l,...Ep])].slice(0,16)}function kb(a,r="all",i=6){const l=he.getState().reportHistory,d=xb(l),u=r==="all"?d:d.filter(F=>F.mood.key===r),p=u.slice(0,i),f=d[0],m=wb(d),y=(f==null?void 0:f.mood)||{label:"开心",emoji:"😊"},b=a.querySelector('[data-page="diary"] .diary-hero-new'),_=b==null?void 0:b.querySelector(".date-mood");if(_&&(_.innerHTML=`<span>${f?Sb(f.date):"5月18日 · 星期日"}</span><span>${y.emoji} ${y.label}　⌄</span>`),Ee(a.querySelector("#diaryMoodFilters"),hb.map(({key:F,label:oe})=>`<button class="${r===F?"active":""}" data-diary-mood="${F}" type="button"><img src="${O(Sp(F))}" alt=""><small>${oe}</small></button>`).join("")),d.length===0){Ee(a.querySelector("#diaryFeedTitle"),"共 24 篇日记　　<small>最新在前⌄</small>");const F=a.querySelector("#diaryLoadMore");F&&(F.hidden=!1),Ee(a.querySelector('[data-page="diary"] .keyword-card .word-cloud'),_p([]).map(oe=>`<span>${O(oe)}</span>`).join(""));return}const $=a.querySelector("#diaryCalendarTitle");if($){const F=new Date,oe=F.toLocaleString("en-US",{month:"long"});$.textContent=`‹　 ${oe} ${F.getFullYear()}　 ›`}Ee(a.querySelector("#calendar"),Pb(l,d));const T=m.percents.happy,P=T+m.percents.calm,A=P+m.percents.tired,S=A+m.percents.anxious,E=a.querySelector("#diaryMoodDonut");E&&(E.dataset.label=`${d.length}
篇日记`,E.style.background=`conic-gradient(#65c982 0 ${T}%, #8b5cf6 ${T}% ${P}%, #d37ae7 ${P}% ${A}%, #f59e0b ${A}% ${S}%, #aeb6d0 ${S}% 100%)`),Ee(a.querySelector("#diaryMoodLegend"),`<li><span>🟢 开心</span><b>${m.percents.happy}%</b></li><li><span>🟣 平静</span><b>${m.percents.calm}%</b></li><li><span>🟪 疲惫</span><b>${m.percents.tired}%</b></li><li><span>🟠 焦虑</span><b>${m.percents.anxious}%</b></li><li><span>⚪ 其他</span><b>${Math.max(0,100-T-m.percents.calm-m.percents.tired-m.percents.anxious)}%</b></li>`),Ee(a.querySelector("#diaryFeedTitle"),`共 ${u.length} 篇日记　　<small>最新在前⌄</small>`),Ee(a.querySelector("#diaries"),p.length?p.map(F=>{const oe=F.date.slice(8),ie=Number(F.date.slice(5,7));return`<article class="diary-row-new" data-view-day="${O(F.date)}" role="button" tabindex="0" title="查看当天日记">
            <div class="diary-date"><strong>${O(oe)}</strong><small>${ie}月</small></div>
            <div class="diary-mood-col"><img class="mood-icon" src="${O(Sp(F.mood.key))}" alt="${O(F.mood.label)}"><small class="mood-label">${O(F.mood.label)}</small></div>
            <div class="diary-copy" data-view-day="${O(F.date)}"><b>${O(F.title)}</b><p>${O(F.snippet)}</p></div>
            <img class="diary-thumb" src="${O(F.thumbSrc)}" alt="" data-view-day="${O(F.date)}">
          </article>`}).join(""):`<div class="diary-empty"><span>📖</span><b>${r==="all"?"还没有日记":"这个心情还没有日记"}<small>${r==="all"?"去 Scan 完成一次上传后，这里会按天整理成 blog 小结。":"换个心情筛选，或继续记录新的一天。"}</small></b><button class="pill primary" data-go="scan">去上传今天的记录</button></div>`);const M=a.querySelector("#diaryLoadMore");M&&(M.hidden=u.length<=p.length,M.textContent="加载更多日记　⌄");const z=_p(l);Ee(a.querySelector('[data-page="diary"] .keyword-card .word-cloud'),z.map(F=>`<span>${O(F)}</span>`).join(""));const j=d.find(F=>F.mood.key==="happy")||d[d.length-1],W=a.querySelector("#diaryMemoryCard");W&&j&&Ee(W,`<h2>回忆精选　<small>更多回忆 ›</small></h2><div class="memory-image" style="background-image:url('${O(j.thumbSrc)}')"><span>第一篇日记 ⚡</span></div><blockquote>“${O(j.snippet.slice(0,48))}…”　💗</blockquote>`)}function Sb(a){const r=new Date(`${a}T12:00:00`);if(Number.isNaN(r.getTime()))return a;const i=["周日","周一","周二","周三","周四","周五","周六"][r.getDay()];return`${Number(a.slice(5,7))}月${Number(a.slice(8))}日 · ${i}`}const Eb=[{id:"checkin7",name:"小蒲公英",level:"Lv.6",body:`今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～
坚持护理真的会有改变，相信时间！🌱`,media:"📋",avatar:Bt.dandelion,mediaUrls:["./assets/diary/diary-sunset-hero.jpg"],likes:128,comments:["我也在做 7 天挑战，一起坚持！","这种轻松记录真的比焦虑刷帖舒服。","打卡第七天太有成就感了！"],tag:"连续打卡",createdAt:Date.now()-1e3*60*60*26,featured:!0,following:!0},{id:"massage",name:"爱吃草莓",level:"Lv.4",body:`分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠 😊
推荐给大家试试～`,media:"🪮",avatar:Bt.strawberry,likes:96,comments:["求一个手法教程！","睡前按摩 + 早睡，感觉小发球都开心了。"],tag:"头皮护理",createdAt:Date.now()-1e3*60*60*8,featured:!1,following:!0},{id:"slowday",name:"薄荷味的风",level:"Lv.6",body:"最近压力有点大，掉发也跟着严重了…深呼吸、运动、喝水，给自己一些温柔的时间 🍀",media:"🌿",avatar:Bt.mint,likes:76,comments:["抱抱，先把记录坚持下来就很棒。","今天也给自己一点松弛感。"],tag:"情绪管理",createdAt:Date.now()-1e3*60*60*3,featured:!0,following:!0},{id:"rewardhair",name:"向日葵",level:"Lv.3",body:"新发型解锁啦！看着宝宝一点点成长出来的碎发，成就感满满！💪",media:"🌱",avatar:Bt.sunflower,mediaUrls:["./assets/buddy/hairstyles/dandelion.png","./assets/buddy/hairstyles/blue-bob.png","./assets/buddy/hairstyles/ribbon.png"],likes:143,comments:["这个发型也太可爱了！","奖励机制好有动力，我也要攒 XP。"],tag:"新发型解锁",createdAt:Date.now()-1e3*60*60*50,featured:!0,following:!0}];function _b(a){return a>=4e3?"Lv.7":a>=3e3?"Lv.6":a>=2e3?"Lv.5":a>=1200?"Lv.4":a>=600?"Lv.3":a>=200?"Lv.2":"Lv.1"}function Lg(){try{const a=JSON.parse(localStorage.getItem(Cg)||"[]");return Array.isArray(a)?a.filter(r=>r&&typeof r.id=="string"&&typeof r.body=="string"):[]}catch{return[]}}function Cb(a){localStorage.setItem(Cg,JSON.stringify(a.slice(0,40)))}function Lb(){return[...Lg(),...Eb]}function $b(a){const r=Lb();return a==="关注"?r.filter(i=>i.following||i.fromJourney).sort((i,l)=>l.createdAt-i.createdAt):a==="热门"?[...r].sort((i,l)=>l.likes-i.likes||l.createdAt-i.createdAt):a==="精华"?r.filter(i=>i.featured).sort((i,l)=>l.likes-i.likes):[...r].sort((i,l)=>l.createdAt-i.createdAt)}const ll={dayCount:32,points:1620,streak:12};function Cp(){const a=he.getState(),r=new Set(a.reportHistory.map(d=>d.date)).size,i=a.points,l=a.checkinDays.length;return{dayCount:r>0?r:ll.dayCount,points:i>0?i:ll.points,streak:l>0?l:ll.streak}}function Rb(){const a=document.querySelectorAll(".journey-metrics strong"),r=(i,l)=>{if(!i)return l;const d=Number(String(i.textContent||"").replace(/,/g,"").trim());return Number.isFinite(d)?d:l};if(a.length>=3){const i=Cp();return{dayCount:r(a[0],i.dayCount),points:r(a[1],i.points),streak:r(a[2],i.streak)}}return Cp()}function Lp(a){const r=he.getState(),i=a!=null&&a.reportId?r.reportHistory.find(y=>y.id===a.reportId):r.reportHistory[0],{dayCount:l,points:d,streak:u}=Rb(),p=Lg();if(i&&p.some(y=>y.reportId===i.id))return{ok:!0,message:"已分享到Community"};const f=i?a!=null&&a.reportId?`我的今日旅程：${i.title}（${i.score} 分）。${i.summary}`:`分享我的护发旅程：已记录 ${l} 天，连续 ${u} 天，累计 ${d} XP。最近一次是「${i.title}」${i.score} 分，${i.summary}`:`分享我的护发旅程：已记录 ${l} 天，连续 ${u} 天，累计 ${d} XP，继续轻松坚持～`,m={id:`journey-${Date.now().toString(36)}`,name:"我",level:_b(d),body:f,media:"✨",avatar:Bt.me,likes:0,comments:["加油，一起慢慢变好～"],tag:(i==null?void 0:i.tags[0])||"旅程分享",createdAt:Date.now(),featured:!1,following:!0,fromJourney:!0,reportId:i==null?void 0:i.id};return Cb([m,...p]),{ok:!0,message:"已分享到Community"}}function $g(a,r="最新"){const i=Rg();Ee(a.querySelector("#communityTabs")||a.querySelector('[data-page="community"] .tabs'),`${_g.map(u=>`<button class="${u===r?"active":""}" data-community-tab="${u}">${u}</button>`).join("")}<select><option>全部动态</option></select>`);const l=$b(r),d=u=>{const p=Date.now()-u;if(p<1e3*60*60)return`${Math.max(1,Math.round(p/(1e3*60)))} 分钟前`;if(p<1e3*60*60*24)return`昨天 ${new Date(u).getHours().toString().padStart(2,"0")}:${new Date(u).getMinutes().toString().padStart(2,"0")}`;const f=new Date(u);return`${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`};Ee(a.querySelector("#posts"),l.length?l.map(u=>{var _;const p=i.has(u.id),f=u.likes+(p?1:0),m=yb(u.avatar),y=(_=u.mediaUrls)!=null&&_.length?`<div class="community-media">${u.mediaUrls.map($=>`<img src="${O($)}" alt="">`).join("")}</div>`:"",b=u.fromJourney?`${O(u.level)}　 Journey`:`${O(u.level)}　 ${d(u.createdAt)}`;return`<article class="community-post community-glass">
      <img class="community-post-avatar" src="${O(m)}" alt="" loading="eager" decoding="async" fetchpriority="high" onerror="this.onerror=null;this.src='${O(Hs)}'">
      <div class="community-post-copy">
        <h3>${O(u.name)} <small>${b}</small></h3>
        <p>${O(u.body).replace(/\n/g,"<br>")}</p>
        <span class="community-tag"># ${O(u.tag)}</span>
      </div>
      ${y}
      <div class="community-post-actions">
        <span role="button" tabindex="0" data-post-like="${O(u.id)}"><img src="./assets/community/icons/heart.svg" alt="">${f}</span>
        <span role="button" tabindex="0" data-post-comments="${O(u.id)}"><img src="./assets/community/icons/comment.svg" alt="">${u.comments.length}</span>
        <span><img src="./assets/community/icons/bookmark.svg" alt="">收藏</span>
      </div>
    </article>`}).join(""):`<div class="item journey-empty"><span>🌱</span><b>${r}还没有内容<small>去 Journey 分享一次旅程，或切换其他 Tab 看看。</small></b><button class="pill primary" data-action="share-to-community">分享到 Community</button></div>`)}function Rg(){try{return new Set(JSON.parse(localStorage.getItem("diaoleme-community-likes")||"[]"))}catch{return new Set}}function Tb(a){const r=Rg();r.has(a)?r.delete(a):r.add(a),localStorage.setItem("diaoleme-community-likes",JSON.stringify([...r]))}function Pb(a,r=[]){var $;const i=new Map(r.map(T=>[T.date,T.mood.key])),l=new Map;a.forEach(T=>{l.has(T.date)||l.set(T.date,T)});const d=new Date,u=d.getFullYear(),p=d.getMonth(),f=new Date(u,p,1).getDay(),m=new Date(u,p+1,0).getDate(),y=[],b=new Date(u,p,0).getDate();for(let T=0;T<f;T+=1)y.push(`<span class="muted">${b-f+T+1}</span>`);for(let T=1;T<=m;T+=1){const P=`${u}-${String(p+1).padStart(2,"0")}-${String(T).padStart(2,"0")}`,A=l.get(P),S=i.get(P),E=P===gt()||!!(A&&P===(($=r[0])==null?void 0:$.date)),M=[A||S?"has-mood":"",S?`mood-${S}`:"",E?"selected":"",P===gt()?"today":""].filter(Boolean).join(" "),z=A?` class="${M}" data-view-day="${O(P)}" role="button" tabindex="0" title="${A.score} 分 ${O(A.title)}"`:M?` class="${M}"`:"";y.push(`<span${z}>${T}</span>`)}const _=y.length%7===0?0:7-y.length%7;for(let T=1;T<=_;T+=1)y.push(`<span class="muted">${T}</span>`);return y.join("")}function Ab(a){const r=document.createElement("div");r.className="ai-chat-widget",r.dataset.aifa110b=T0,r.innerHTML=`
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手"><img src="./assets/logo-mascot.png" alt=""><span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><img class="ai-chat-header-avatar" src="./assets/logo-mascot.png" alt=""><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `,document.body.appendChild(r),Qs();const i=r.querySelector(".ai-chat-bubble"),l=r.querySelector("[data-chat-form]"),d=r.querySelector("[data-chat-input]"),u=r.querySelector("[data-chat-messages]"),p=r.querySelector("[data-chat-close]"),f=[{role:"assistant",content:"你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。"}];let m=!1,y=!1,b=0,_=0,$=0,T=0;const P="头发丝正在认真想…",A=()=>{u.innerHTML=f.map(ie=>`<div class="ai-chat-msg ${ie.role}">${O(ie.content)}</div>`).join(""),u.scrollTop=u.scrollHeight},S=()=>{const V=Math.min(360,window.innerWidth-24),K=Math.min(520,window.innerHeight-24);r.style.setProperty("--ai-chat-w",`${V}px`),r.style.setProperty("--ai-chat-h",`${K}px`),r.style.left="auto",r.style.top="auto",r.style.right="12px",r.style.bottom="12px"},E=ie=>{const V=ie??!r.classList.contains("open");r.classList.toggle("open",V),V&&(Qs(),S(),d.focus())},M=ie=>{if(r.classList.contains("open"))return;m=!0,y=!1,b=ie.clientX,_=ie.clientY;const V=r.getBoundingClientRect();$=V.left,T=V.top,i.setPointerCapture(ie.pointerId)},z=ie=>{if(!m)return;const V=ie.clientX-b,K=ie.clientY-_;if(Math.abs(V)+Math.abs(K)<=6)return;y=!0;const se=Math.max(12,Math.min(window.innerWidth-r.offsetWidth-12,$+V)),te=Math.max(12,Math.min(window.innerHeight-r.offsetHeight-12,T+K));r.style.left=`${se}px`,r.style.top=`${te}px`,r.style.right="auto",r.style.bottom="auto"},j=ie=>{m=!1,i.hasPointerCapture(ie.pointerId)&&i.releasePointerCapture(ie.pointerId)},W=()=>{y||E(!0)},F=()=>{r.classList.contains("open")&&S()},oe=async ie=>{ie.preventDefault();const V=d.value.trim();if(!V)return;d.value="",d.disabled=!0;const K=l.querySelector("button");K&&(K.disabled=!0),f.push({role:"user",content:V},{role:"assistant",content:P}),A();const se=window.setTimeout(()=>{var te;((te=f[f.length-1])==null?void 0:te.content)===P&&(f[f.length-1]={role:"assistant",content:"还在连线中～演示服务器可能刚睡醒，再等几秒就好。"},A())},3e3);try{const te=Gy(he.getState().reportHistory),ue=f.filter(Z=>!(Z.role==="assistant"&&(Z.content===P||Z.content.startsWith("还在连线中")))).slice(-8),pe=await Jy(ue,{reportContext:te});window.clearTimeout(se),pe.fallback_code==="CHAT_BACKEND_UNREACHABLE"?f[f.length-1]={role:"assistant",content:`${pe.reply}

（后端暂时连不上，可能在冷启动。你可以稍后再发一句试试。）`}:f[f.length-1]={role:"assistant",content:pe.reply}}catch{window.clearTimeout(se),f[f.length-1]={role:"assistant",content:"我这边暂时没有连上 AI 服务（可能在冷启动）。先完成一次轻松记录也很好；想再聊的话，稍后再发一句就行。"}}d.disabled=!1,K&&(K.disabled=!1),A(),d.focus()};return A(),i.addEventListener("pointerdown",M),i.addEventListener("pointermove",z),i.addEventListener("pointerup",j),i.addEventListener("click",W),p.addEventListener("click",()=>E(!1)),l.addEventListener("submit",oe),window.addEventListener("resize",F),()=>{i.removeEventListener("pointerdown",M),i.removeEventListener("pointermove",z),i.removeEventListener("pointerup",j),i.removeEventListener("click",W),l.removeEventListener("submit",oe),window.removeEventListener("resize",F),r.remove()}}function Mb(a){const r=he.getState(),i=Il(r.checkinDays),l=new Set(r.reportHistory.map(Z=>Z.date)).size,d=a.querySelector("[data-quests-streak-days]");d&&(d.textContent=`${i} 天`);const u=$n(r.points),p=r.reportHistory.length,f=Tg(r.reportHistory),m=Math.min(20,Math.max(r.checkinDays.length,Math.floor(r.points/40))),y=a.querySelector("[data-me-points]"),b=a.querySelector("[data-me-streak]"),_=a.querySelector("[data-me-history-days]"),$=a.querySelector("[data-me-total-xp]"),T=a.querySelectorAll("[data-me-streak-count]"),P=a.querySelectorAll("[data-me-level-badge]"),A=a.querySelector("[data-me-level-hex]"),S=a.querySelector("[data-me-level]"),E=a.querySelector("[data-me-xp-label]"),M=a.querySelector("[data-me-xp-need]"),z=a.querySelector("[data-me-xp-fill]"),j=a.querySelector("[data-me-scan-count]"),W=a.querySelector("[data-me-scan-delta]"),F=a.querySelector("[data-me-avg-score]"),oe=a.querySelector("[data-me-score-delta]"),ie=a.querySelector("[data-me-task-count]"),V=a.querySelector("[data-me-task-delta]"),K=a.querySelector("[data-me-xp-delta]"),se=a.querySelector("[data-me-buddy-days]"),te=a.querySelector("[data-me-goal-streak-fill]"),ue=a.querySelector("[data-me-goal-task-fill]"),pe=a.querySelector("[data-me-goal-task-num]");y&&(y.textContent=`${r.points.toLocaleString("en-US")} XP`),b&&(b.textContent=`已连续打卡 ${i} 天`),_&&(_.textContent=String(l)),$&&($.textContent=r.points.toLocaleString("en-US")),T.forEach(Z=>{Z.textContent=String(i)}),P.forEach(Z=>{Z.textContent=`Lv.${u.level}`}),A&&(A.textContent=`Lv.${u.level}`),S&&(S.textContent=`Lv.${u.level}`),E&&(E.textContent=`${u.into.toLocaleString("en-US")} / ${u.max.toLocaleString("en-US")} XP`),M&&(M.textContent=u.need>0?`还差 ${u.need.toLocaleString("en-US")} XP 升级 Lv.${Math.min(10,u.level+1)}`:"已满级啦"),z&&(z.style.width=`${u.percent}%`),j&&(j.textContent=String(p||32)),W&&(W.textContent=`本月 +${Math.min(6,Math.max(1,p||6))} 次`),F&&(F.textContent=f==null?"82":String(f)),oe&&(oe.textContent=f==null?"较上月 +8 分":"较上月持续观察中"),ie&&(ie.textContent=String(m||18)),V&&(V.textContent=`本月 +${Math.min(7,Math.max(1,m||7))} 个`),K&&(K.textContent=`本月 +${Math.max(120,Math.min(1620,r.points||1620)).toLocaleString("en-US")}`),se&&(se.textContent=`陪伴我 ${Math.max(i,l,1)} 天`),te&&(te.style.width=`${Math.min(100,Math.round(i/14*100))}%`),ue&&(ue.style.width=`${Math.min(100,Math.round(m/20*100))}%`),pe&&(pe.textContent=String(m||18)),Nb(a,r.checkinDays)}function Nb(a,r){const i=a.querySelector("[data-me-calendar]");if(!i)return;const l=new Date,d=l.getFullYear(),u=l.getMonth(),p=new Date(d,u,1),f=new Date(d,u+1,0).getDate(),m=(p.getDay()+6)%7,y=new Date(d,u,0).getDate(),b=gt(),_=new Set(r),$=[];for(let P=0;P<m;P+=1)$.push(`<span class="muted">${y-m+P+1}</span>`);for(let P=1;P<=f;P+=1){const A=`${d}-${String(u+1).padStart(2,"0")}-${String(P).padStart(2,"0")}`,S=[_.has(A)?"done":"",A===b?"today":""].filter(Boolean).join(" ");$.push(`<span class="${S}">${_.has(A)?"✓":P}</span>`)}const T=(7-$.length%7)%7;for(let P=1;P<=T;P+=1)$.push(`<span class="muted">${P}</span>`);Ee(i,$.join(""))}function Ob(){const a=he.getState().suggestions;return a.length?a:["上传一张照片生成专属建议","今晚提前 30 分钟休息","洗头时水温尽量温和"]}function Tg(a){return a.length?Math.round(a.reduce((r,i)=>r+i.score,0)/a.length):null}const zb=`
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

`;Dm.createRoot(document.getElementById("root")).render(dl.jsx(yr.StrictMode,{children:dl.jsx(cb,{})}));
