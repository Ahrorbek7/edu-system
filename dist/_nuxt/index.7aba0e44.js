import{k as y,x as J,y as K,z as X,A as O,B as Z,C as ee,D as B,E as te,g as H,G as ne,H as oe,s as S,m as re,I as ae,q as ie,J as se}from"./entry.658c09b7.js";import{i as ue}from"./index.344f9f74.js";const $=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function le(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");const n={},i=(t||{}).decode||de;let s=0;for(;s<e.length;){const r=e.indexOf("=",s);if(r===-1)break;let a=e.indexOf(";",s);if(a===-1)a=e.length;else if(a<r){s=e.lastIndexOf(";",r-1)+1;continue}const l=e.slice(s,r).trim();if(n[l]===void 0){let u=e.slice(r+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=fe(u,i)}s=a+1}return n}function A(e,t,n){const o=n||{},i=o.encode||pe;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!$.test(e))throw new TypeError("argument name is invalid");const s=i(t);if(s&&!$.test(s))throw new TypeError("argument val is invalid");let r=e+"="+s;if(o.maxAge!==void 0&&o.maxAge!==null){const a=o.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(a)}if(o.domain){if(!$.test(o.domain))throw new TypeError("option domain is invalid");r+="; Domain="+o.domain}if(o.path){if(!$.test(o.path))throw new TypeError("option path is invalid");r+="; Path="+o.path}if(o.expires){if(!ce(o.expires)||Number.isNaN(o.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(r+="; HttpOnly"),o.secure&&(r+="; Secure"),o.priority)switch(typeof o.priority=="string"?o.priority.toLowerCase():o.priority){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r}function ce(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function fe(e,t){try{return t(e)}catch{return e}}function de(e){return e.includes("%")?decodeURIComponent(e):e}function pe(e){return encodeURIComponent(e)}const me={path:"/",watch:!0,decode:e=>Z(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function ve(e,t){var s;const n={...me,...t},o=we(n)||{},i=y(o[e]??((s=n.default)==null?void 0:s.call(n)));{const r=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`);J()&&K(()=>{r==null||r.close()});const a=()=>{he(e,i.value,n),r==null||r.postMessage(ee(i.value))};let l=!1;r&&(r.onmessage=u=>{l=!0,i.value=u.data,X(()=>{l=!1})}),n.watch?O(i,(u,c)=>{l||ue(u,c)||a()},{deep:n.watch!=="shallow"}):a()}return i}function we(e={}){return le(document.cookie,e)}function ye(e,t,n={}){return t==null?A(e,t,{...n,maxAge:-1}):A(e,t,n)}function he(e,t,n={}){document.cookie=ye(e,t,n)}const I=()=>ve("gh_token"),ge=(e,t={})=>$fetch(e,{baseURL:"https://api.github.com",...t,headers:{Authorization:`token ${I().value}`,...t.headers}}),st=async()=>{const e=I(),t=B("gh_user");return e.value&&!t.value&&(t.value=await ge("/user")),t},ut=()=>{{const{github:e}=te().public;window.location.replace(`https://github.com/login/oauth/authorize?client_id=${e.clientId}&scope=public_repo`)}},lt=async()=>{I().value=null,B("gh_user").value=null};var k;const g=typeof window<"u",_e=e=>typeof e=="function",Oe=e=>typeof e=="string",be=()=>{},C=g&&((k=window==null?void 0:window.navigator)==null?void 0:k.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function h(e){return typeof e=="function"?e():H(e)}function $e(e){return e}function _(e){return ne()?(oe(e),!0):!1}function xe(e){return typeof e=="function"?S(e):y(e)}function Se(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:i=!1}=n;let s=null;const r=y(!1);function a(){s&&(clearInterval(s),s=null)}function l(){r.value=!1,a()}function u(){const c=h(t);c<=0||(r.value=!0,i&&e(),a(),s=setInterval(e,c))}if(o&&g&&u(),re(t)||_e(t)){const c=O(t,()=>{r.value&&g&&u()});_(c)}return _(l),{isActive:r,pause:l,resume:u}}const Ie=g?window:void 0,T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__";T[D]=T[D]||{};function Pe(e,t={}){const{immediate:n=!0,window:o=Ie}=t,i=y(!1);let s=0,r=null;function a(c){if(!i.value||!o)return;const p=c-s;e({delta:p,timestamp:c}),s=c,r=o.requestAnimationFrame(a)}function l(){!i.value&&o&&(i.value=!0,r=o.requestAnimationFrame(a))}function u(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return n&&l(),_(u),{isActive:ae(i),pause:u,resume:l}}var Ee=Object.defineProperty,N=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))Ae.call(t,n)&&F(e,n,t[n]);if(N)for(var n of N(t))ke.call(t,n)&&F(e,n,t[n]);return e};function Te(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,o=y(new Date),i=()=>o.value=new Date,s=n==="requestAnimationFrame"?Pe(i,{immediate:!0}):Se(i,n,{immediate:!0});return t?Ce({now:o},s):o}var L;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(L||(L={}));var De=Object.defineProperty,x=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,U=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&U(e,n,t[n]);if(x)for(var n of x(t))G.call(t,n)&&U(e,n,t[n]);return e},Fe=(e,t)=>{var n={};for(var o in e)V.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&x)for(var o of x(e))t.indexOf(o)<0&&G.call(e,o)&&(n[o]=e[o]);return n};const Le=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],Ue={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""},je=e=>e.toISOString().slice(0,10);function Re(e,t={}){const{controls:n=!1,updateInterval:o=3e4}=t,i=Te({interval:o,controls:!0}),{now:s}=i,r=Fe(i,["now"]),a=S(()=>Me(new Date(h(e)),t,H(s.value)));return n?Ne({timeAgo:a},r):a}function Me(e,t={},n=Date.now()){var o;const{max:i,messages:s=Ue,fullDateFormatter:r=je,units:a=Le,showSecond:l=!1,rounding:u="round"}=t,c=typeof u=="number"?f=>+f.toFixed(u):Math[u],p=+n-+e,m=Math.abs(p);function v(f,d){return c(Math.abs(f)/d.value)}function P(f,d){const b=v(f,d),w=f>0,Y=E(d.name,b,w);return E(w?"past":"future",Y,w)}function E(f,d,b){const w=s[f];return typeof w=="function"?w(d,b):w.replace("{0}",d.toString())}if(m<6e4&&!l)return s.justNow;if(typeof i=="number"&&m>i)return r(new Date(e));if(typeof i=="string"){const f=(o=a.find(d=>d.name===i))==null?void 0:o.max;if(f&&m>f)return r(new Date(e))}for(const[f,d]of a.entries()){if(v(p,d)<=0&&a[f-1])return P(p,a[f-1]);if(m<d.max)return P(p,d)}return s.invalid}var Qe=Object.defineProperty,j=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&R(e,n,t[n]);if(j)for(var n of j(t))qe.call(t,n)&&R(e,n,t[n]);return e};const He={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Be({linear:$e},He);function Ve(e){var t;const n=h(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ge=g?window:void 0;function ze(...e){let t,n,o,i;if(Oe(e[0])||Array.isArray(e[0])?([n,o,i]=e,t=Ge):[t,n,o,i]=e,!t)return be;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],r=()=>{s.forEach(c=>c()),s.length=0},a=(c,p,m,v)=>(c.addEventListener(p,m,v),()=>c.removeEventListener(p,m,v)),l=O(()=>[Ve(t),h(i)],([c,p])=>{r(),c&&s.push(...n.flatMap(m=>o.map(v=>a(c,m,v,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),r()};return _(u),u}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";M[Q]=M[Q]||{};function z(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientHeight<e.scrollHeight||t.overflowY==="auto"&&e.clientWidth<e.scrollWidth)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:z(n)}}function Ye(e){const t=e||window.event,n=t.target;return z(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function Je(e,t=!1){const n=y(t);let o=null,i;O(xe(e),a=>{if(a){const l=a;i=l.style.overflow,n.value&&(l.style.overflow="hidden")}},{immediate:!0});const s=()=>{const a=h(e);!a||n.value||(C&&(o=ze(a,"touchmove",l=>{Ye(l)},{passive:!1})),a.style.overflow="hidden",n.value=!0)},r=()=>{const a=h(e);!a||!n.value||(C&&(o==null||o()),a.style.overflow=i,n.value=!1)};return _(r),S({get(){return n.value},set(a){a?s():r()}})}const Ke=()=>{let e=!1;const t=y(!1);return(n,o)=>{if(t.value=o.value,e)return;e=!0;const i=Je(n,o.value);O(t,s=>i.value=s)}};Ke();var Xe=Object.defineProperty,Ze=Object.defineProperties,et=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))tt.call(t,n)&&q(e,n,t[n]);if(W)for(var n of W(t))nt.call(t,n)&&q(e,n,t[n]);return e},rt=(e,t)=>Ze(e,et(t));const ct=ie({name:"UseTimeAgo",props:["time","updateInterval","max","fullDateFormatter","messages","showSecond"],setup(e,{slots:t}){const n=se(Re(()=>e.time,rt(ot({},e),{controls:!0})));return()=>{if(t.default)return t.default(n)}}});export{ct as U,lt as a,ut as b,st as f,ge as g};