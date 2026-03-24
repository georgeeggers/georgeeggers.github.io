(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from;Object.keys;var i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible;function d(e){return typeof e==`function`}const f=()=>{};function p(e){return e()}function m(e){for(var t=0;t<e.length;t++)e[t]()}function h(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function g(e,t){if(Array.isArray(e))return e;if(t===void 0||!(Symbol.iterator in e))return Array.from(e);let n=[];for(let r of e)if(n.push(r),n.length===t)break;return n}const _=1024,v=2048,y=4096,b=8192,x=32768,ee=65536,te=1<<19,ne=1<<20,re=1<<25,ie=65536,ae=1<<21,oe=1<<23,S=Symbol(`$state`),se=Symbol(`legacy props`),ce=Symbol(``),le=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ue=globalThis.document?.contentType.includes(`xml`)??!1;function de(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function fe(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function pe(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function me(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function he(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ge(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function _e(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function ve(e){throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)}function ye(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function be(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function xe(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Se(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ce(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}const we={},C=Symbol();function Te(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function Ee(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function De(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}let w=!1;function T(e){w=e}let E;function D(e){if(e===null)throw Te(),we;return E=e}function Oe(){return D(Jt(E))}function O(e){if(w){if(Jt(E)!==null)throw Te(),we;E=e}}function ke(e=1){if(w){for(var t=e,n=E;t--;)n=Jt(n);E=n}}function Ae(e=!0){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Jt(n);e&&n.remove(),n=i}}function je(e){if(!e||e.nodeType!==8)throw Te(),we;return e.data}function Me(e){return e===this.v}function Ne(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Pe(e){return!Ne(e,this.v)}let Fe=!1;function Ie(){Fe=!0}let k=null;function Le(e){k=e}function A(e,t=!1,n){k={p:k,i:!1,c:null,e:null,s:e,x:null,l:Fe&&!t?{s:null,u:null,$:[]}:null}}function j(e){var t=k,n=t.e;if(n!==null){t.e=null;for(var r of n)dn(r)}return e!==void 0&&(t.x=e),t.i=!0,k=t.p,e??{}}function Re(){return!Fe||k!==null&&k.l===null}var ze=[];function Be(){var e=ze;ze=[],m(e)}function Ve(e){if(ze.length===0&&!tt){var t=ze;queueMicrotask(()=>{t===ze&&Be()})}ze.push(e)}function He(){for(;ze.length>0;)Be()}function Ue(e){var t=U;if(t===null)return H.f|=oe,e;if(!(t.f&32768)&&!(t.f&4))throw e;We(e,t)}function We(e,t){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var Ge=~(y|3072);function M(e,t){e.f=e.f&Ge|t}function Ke(e){e.f&512||e.deps===null?M(e,_):M(e,y)}function qe(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=ie,qe(t.deps))}function Je(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),qe(e.deps),M(e,_)}var Ye=new Set;let N=null,Xe=null,Ze=null;var Qe=[],$e=null,et=!1;let tt=!1;var nt=class e{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#r=0;#i=null;#a=new Set;#o=new Set;#s=new Map;is_fork=!1;#c=!1;is_deferred(){return this.is_fork||this.#r>0}skip_effect(e){this.#s.has(e)||this.#s.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#s.get(e);if(t){this.#s.delete(e);for(var n of t.d)M(n,v),ut(n);for(n of t.m)M(n,y),ut(n)}}process(e){Qe=[],this.apply();var t=[],n=[];for(let r of e)this.#l(r,t,n);if(this.is_deferred()){this.#u(n),this.#u(t);for(let[e,t]of this.#s)dt(e,t)}else{for(let e of this.#e)e();this.#e.clear(),this.#n===0&&this.#d(),Xe=this,N=null,st(n),st(t),Xe=null,this.#i?.resolve()}Ze=null}#l(e,t,n){e.f^=_;for(var r=e.first,i=null;r!==null;){var a=r.f,o=(a&96)!=0;if(!(o&&a&1024||a&8192||this.#s.has(r))&&r.fn!==null){o?r.f^=_:i!==null&&a&16777228?i.b.defer_effect(r):a&4?t.push(r):Jn(r)&&(a&16&&this.#o.add(r),$n(r));var s=r.first;if(s!==null){r=s;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===i&&(i=null),r=c.next,c=c.parent}}#u(e){for(var t=0;t<e.length;t+=1)Je(e[t],this.#a,this.#o)}capture(e,t){t!==C&&!this.previous.has(e)&&this.previous.set(e,t),e.f&8388608||(this.current.set(e,e.v),Ze?.set(e,e.v))}activate(){N=this,this.apply()}deactivate(){N===this&&(N=null,Ze=null)}flush(){if(this.activate(),Qe.length>0){if(it(),N!==null&&N!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(let e of this.#t)e(this);this.#t.clear()}#d(){if(Ye.size>1){this.previous.clear();var e=Ze,t=!0;for(let e of Ye){if(e===this){t=!1;continue}let r=[];for(let[n,i]of this.current){if(e.current.has(n))if(t&&i!==e.current.get(n))e.current.set(n,i);else continue;r.push(n)}if(r.length===0)continue;let i=[...e.current.keys()].filter(e=>!this.current.has(e));if(i.length>0){var n=Qe;Qe=[];let t=new Set,a=new Map;for(let e of r)ct(e,i,t,a);if(Qe.length>0){N=e,e.apply();for(let t of Qe)e.#l(t,[],[]);e.deactivate()}Qe=n}}N=null,Ze=e}this.committed=!0,Ye.delete(this)}increment(e){this.#n+=1,e&&(this.#r+=1)}decrement(e){--this.#n,e&&--this.#r,!this.#c&&(this.#c=!0,Ve(()=>{this.#c=!1,this.is_deferred()?Qe.length>0&&this.flush():this.revive()}))}revive(){for(let e of this.#a)this.#o.delete(e),M(e,v),ut(e);for(let e of this.#o)M(e,y),ut(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=h()).promise}static ensure(){if(N===null){let t=N=new e;Ye.add(N),tt||Ve(()=>{N===t&&t.flush()})}return N}apply(){}};function rt(e){var t=tt;tt=!0;try{var n;for(e&&(N!==null&&it(),n=e());;){if(He(),Qe.length===0&&(N?.flush(),Qe.length===0))return $e=null,n;it()}}finally{tt=t}}function it(){et=!0;try{for(var e=0;Qe.length>0;){var t=nt.ensure();e++>1e3&&at(),t.process(Qe),At.clear()}}finally{Qe=[],et=!1,$e=null}}function at(){try{_e()}catch(e){We(e,$e)}}let ot=null;function st(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Jn(r)&&(ot=new Set,$n(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Tn(r),ot?.size>0)){At.clear();for(let e of ot){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)ot.has(n)&&(ot.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||$n(n)}}ot.clear()}}ot=null}}function ct(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?ct(i,t,n,r):e&4194320&&!(e&2048)&&lt(i,t,r)&&(M(i,v),ut(i))}}function lt(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if(i.f&2&&lt(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ut(e){for(var t=$e=e;t.parent!==null;){t=t.parent;var n=t.f;if(et&&t===U&&n&16&&!(n&262144))return;if(n&96){if(!(n&1024))return;t.f^=_}}Qe.push(t)}function dt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),M(e,_);for(var n=e.first;n!==null;)dt(n,t),n=n.next}}function ft(e){let t=0,n=Mt(0),r;return()=>{cn()&&(W(n),vn(()=>(t===0&&(r=rr(()=>e(()=>It(n)))),t+=1,()=>{Ve(()=>{--t,t===0&&(r?.(),r=void 0,It(n))})})))}}var pt=te|65664;function mt(e,t,n){new ht(e,t,n)}var ht=class{parent;is_pending=!1;#e;#t=w?E:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=null;#u=0;#d=0;#f=!1;#p=!1;#m=new Set;#h=new Set;#g=null;#_=ft(()=>(this.#g=Mt(this.#u),()=>{this.#g=null}));constructor(e,t,n){this.#e=e,this.#n=t,this.#r=n,this.parent=U.b,this.is_pending=!!this.#n.pending,this.#i=yn(()=>{if(U.b=this,w){let e=this.#t;Oe(),e.nodeType===8&&e.data===`[!`?this.#y():(this.#v(),this.#d===0&&(this.is_pending=!1))}else{var e=this.#b();try{this.#a=B(()=>n(e))}catch(e){this.error(e)}this.#d>0?this.#S():this.is_pending=!1}return()=>{this.#l?.remove()}},pt),w&&(this.#e=E)}#v(){try{this.#a=B(()=>this.#r(this.#e))}catch(e){this.error(e)}}#y(){let e=this.#n.pending;e&&(this.#o=B(()=>e(this.#e)),Ve(()=>{var e=this.#b();this.#a=this.#x(()=>(nt.ensure(),B(()=>this.#r(e)))),this.#d>0?this.#S():(En(this.#o,()=>{this.#o=null}),this.is_pending=!1)}))}#b(){var e=this.#e;return this.is_pending&&(this.#l=Kt(),this.#e.before(this.#l),e=this.#l),e}defer_effect(e){Je(e,this.#m,this.#h)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=U,n=H,r=k;In(this.#i),Fn(this.#i),Le(this.#i.ctx);try{return e()}catch(e){return Ue(e),null}finally{In(t),Fn(n),Le(r)}}#S(){let e=this.#n.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#l),An(this.#a,this.#c)),this.#o===null&&(this.#o=B(()=>e(this.#e)))}#C(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#C(e);return}if(this.#d+=e,this.#d===0){this.is_pending=!1;for(let e of this.#m)M(e,v),ut(e);for(let e of this.#h)M(e,y),ut(e);this.#m.clear(),this.#h.clear(),this.#o&&En(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null)}}update_pending_count(e){this.#C(e),this.#u+=e,!(!this.#g||this.#f)&&(this.#f=!0,Ve(()=>{this.#f=!1,this.#g&&Pt(this.#g,this.#u)}))}get_effect_pending(){return this.#_(),W(this.#g)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(this.#p||!t&&!n)throw e;this.#a&&=(V(this.#a),null),this.#o&&=(V(this.#o),null),this.#s&&=(V(this.#s),null),w&&(D(this.#t),ke(),D(Ae()));var r=!1,i=!1;let a=()=>{if(r){De();return}r=!0,i&&Ce(),nt.ensure(),this.#u=0,this.#s!==null&&En(this.#s,()=>{this.#s=null}),this.is_pending=this.has_pending_snippet(),this.#a=this.#x(()=>(this.#p=!1,B(()=>this.#r(this.#e)))),this.#d>0?this.#S():this.is_pending=!1};Ve(()=>{try{i=!0,t?.(e,a),i=!1}catch(e){We(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{nt.ensure(),this.#p=!0;try{return B(()=>{n(this.#e,()=>e,()=>a)})}catch(e){return We(e,this.#i.parent),null}finally{this.#p=!1}}))})}};function gt(e,t,n,r){let i=Re()?yt:St;var a=e.filter(e=>!e.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var o=N,s=U,c=_t(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){c();try{r(e)}catch(e){s.f&16384||We(e,s)}o?.deactivate(),vt()}if(n.length===0){l.then(()=>u(t.map(i)));return}function d(){c(),Promise.all(n.map(e=>bt(e))).then(e=>u([...t.map(i),...e])).catch(e=>We(e,s))}l?l.then(d):d()}function _t(){var e=U,t=H,n=k,r=N;return function(i=!0){In(e),Fn(t),Le(n),i&&r?.activate()}}function vt(){In(null),Fn(null),Le(null)}function yt(e){var t=2|v,n=H!==null&&H.f&2?H:null;return U!==null&&(U.f|=te),{ctx:k,deps:null,effects:null,equals:Me,f:t,fn:e,reactions:null,rv:0,v:C,wv:0,parent:n??U,ac:null}}function bt(e,t,n){let r=U;r===null&&fe();var i=r.b,a=void 0,o=Mt(C),s=!H,c=new Map;return _n(()=>{var t=h();a=t.promise;try{Promise.resolve(e()).then(t.resolve,t.reject).then(()=>{n===N&&n.committed&&n.deactivate(),vt()})}catch(e){t.reject(e),vt()}var n=N;if(s){var r=i.is_rendered();i.update_pending_count(1),n.increment(r),c.get(n)?.reject(le),c.delete(n),c.set(n,t)}let l=(e,t=void 0)=>{if(n.activate(),t)t!==le&&(o.f|=oe,Pt(o,t));else{o.f&8388608&&(o.f^=oe),Pt(o,e);for(let[e,t]of c){if(c.delete(e),e===n)break;t.reject(le)}}s&&(i.update_pending_count(-1),n.decrement(r))};t.promise.then(l,e=>l(null,e||`unknown`))}),ln(()=>{for(let e of c.values())e.reject(le)}),new Promise(e=>{function t(n){function r(){n===a?e(o):t(a)}n.then(r,r)}t(a)})}function xt(e){let t=yt(e);return Rn(t),t}function St(e){let t=yt(e);return t.equals=Pe,t}function Ct(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)V(t[n])}}function wt(e){for(var t=e.parent;t!==null;){if(!(t.f&2))return t.f&16384?null:t;t=t.parent}return null}function Tt(e){var t,n=U;In(wt(e));try{e.f&=~ie,Ct(e),t=Xn(e)}finally{In(n)}return t}function Et(e){var t=Tt(e);if(!e.equals(t)&&(e.wv=qn(),(!N?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){M(e,_);return}Mn||(Ze===null?Ke(e):(cn()||N?.is_fork)&&Ze.set(e,t))}function Dt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(le),t.teardown=f,t.ac=null,Qn(t,0),Sn(t))}function Ot(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&$n(t)}let kt=new Set;const At=new Map;var jt=!1;function Mt(e,t){return{f:0,v:e,reactions:null,equals:Me,rv:0,wv:0}}function P(e,t){let n=Mt(e,t);return Rn(n),n}function Nt(e,t=!1,n=!0){let r=Mt(e);return t||(r.equals=Pe),Fe&&n&&k!==null&&k.l!==null&&(k.l.s??=[]).push(r),r}function F(e,t,r=!1){return H!==null&&(!Pn||H.f&131072)&&Re()&&H.f&4325394&&(Ln===null||!n.call(Ln,e))&&Se(),Pt(e,r?Rt(t):t)}function Pt(e,t){if(!e.equals(t)){var n=e.v;Mn?At.set(e,t):At.set(e,n),e.v=t;var r=nt.ensure();if(r.capture(e,n),e.f&2){let t=e;e.f&2048&&Tt(t),Ke(t)}e.wv=qn(),Lt(e,v),Re()&&U!==null&&U.f&1024&&!(U.f&96)&&(Vn===null?Hn([e]):Vn.push(e)),!r.is_fork&&kt.size>0&&!jt&&Ft()}return t}function Ft(){jt=!1;for(let e of kt)e.f&1024&&M(e,y),Jn(e)&&$n(e);kt.clear()}function It(e){F(e,e.v+1)}function Lt(e,t){var n=e.reactions;if(n!==null)for(var r=Re(),i=n.length,a=0;a<i;a++){var o=n[a],s=o.f;if(!(!r&&o===U)){var c=(s&v)===0;if(c&&M(o,t),s&2){var l=o;Ze?.delete(l),s&65536||(s&512&&(o.f|=ie),Lt(l,y))}else c&&(s&16&&ot!==null&&ot.add(o),ut(o))}}}function Rt(t){if(typeof t!=`object`||!t||S in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=P(0),u=null,d=Gn,f=e=>{if(Gn===d)return e();var t=H,n=Gn;Fn(null),Kn(d);var r=e();return Fn(t),Kn(n),r};return i&&r.set(`length`,P(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&be();var i=r.get(t);return i===void 0?f(()=>{var e=P(n.value,u);return r.set(t,e),e}):F(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>P(C,u));r.set(t,e),It(o)}}else F(n,C),It(o);return!0},get(e,n,i){if(n===S)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>P(Rt(s?e[n]:C),u)),r.set(n,o)),o!==void 0){var c=W(o);return c===C?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=W(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==C)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===S)return!0;var n=r.get(t),i=n!==void 0&&n.v!==C||Reflect.has(e,t);return(n!==void 0||U!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>P(i?Rt(e[t]):C,u)),r.set(t,n)),W(n)===C)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>P(C,u)),r.set(d+``,p)):F(p,C)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>P(void 0,u)),F(c,Rt(n)),r.set(t,c));else{l=c.v!==C;var m=f(()=>Rt(n));F(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&F(g,_+1)}It(o)}return!0},ownKeys(e){W(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==C});for(var[n,i]of r)i.v!==C&&!(n in e)&&t.push(n);return t},setPrototypeOf(){xe()}})}function zt(e){try{if(typeof e==`object`&&e&&S in e)return e[S]}catch{}return e}function Bt(e,t){return Object.is(zt(e),zt(t))}var Vt,Ht,Ut,Wt;function Gt(){if(Vt===void 0){Vt=window,document,Ht=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Ut=a(t,`firstChild`).get,Wt=a(t,`nextSibling`).get,u(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),u(n)&&(n.__t=void 0)}}function Kt(e=``){return document.createTextNode(e)}function qt(e){return Ut.call(e)}function Jt(e){return Wt.call(e)}function I(e,t){if(!w)return qt(e);var n=qt(E);if(n===null)n=E.appendChild(Kt());else if(t&&n.nodeType!==3){var r=Kt();return n?.before(r),D(r),r}return t&&Qt(n),D(n),n}function L(e,t=!1){if(!w){var n=qt(e);return n instanceof Comment&&n.data===``?Jt(n):n}if(t){if(E?.nodeType!==3){var r=Kt();return E?.before(r),D(r),r}Qt(E)}return E}function R(e,t=1,n=!1){let r=w?E:e;for(var i;t--;)i=r,r=Jt(r);if(!w)return r;if(n){if(r?.nodeType!==3){var a=Kt();return r===null?i?.after(a):r.before(a),D(a),a}Qt(r)}return D(r),r}function Yt(e){e.textContent=``}function Xt(){return!1}function Zt(e,t,n){let r=n?{is:n}:void 0;return document.createElementNS(t??`http://www.w3.org/1999/xhtml`,e,r)}function Qt(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function $t(e,t){if(t){let t=document.body;e.autofocus=!0,Ve(()=>{document.activeElement===t&&e.focus()})}}var en=!1;function tn(){en||(en=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function nn(e){var t=H,n=U;Fn(null),In(null);try{return e()}finally{Fn(t),In(n)}}function rn(e,t,n,r=n){e.addEventListener(t,()=>nn(n));let i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),tn()}function an(e){U===null&&(H===null&&ge(e),he()),Mn&&me(e)}function on(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function sn(e,t,n){var r=U;r!==null&&r.f&8192&&(e|=b);var i={ctx:k,deps:null,nodes:null,f:e|2560,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{$n(i)}catch(e){throw V(i),e}else t!==null&&ut(i);var a=i;if(n&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&!(a.f&524288)&&(a=a.first,e&16&&e&65536&&a!==null&&(a.f|=ee)),a!==null&&(a.parent=r,r!==null&&on(a,r),H!==null&&H.f&2&&!(e&64))){var o=H;(o.effects??=[]).push(a)}return i}function cn(){return H!==null&&!Pn}function ln(e){let t=sn(8,null,!1);return M(t,_),t.teardown=e,t}function un(e){an(`$effect`);var t=U.f;if(!H&&t&32&&!(t&32768)){var n=k;(n.e??=[]).push(e)}else return dn(e)}function dn(e){return sn(4|ne,e,!1)}function fn(e){return an(`$effect.pre`),sn(8|ne,e,!0)}function pn(e){nt.ensure();let t=sn(64|te,e,!0);return(e={})=>new Promise(n=>{e.outro?En(t,()=>{V(t),n(void 0)}):(V(t),n(void 0))})}function mn(e){return sn(4,e,!1)}function hn(e,t){var n=k,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=vn(()=>{e(),!r.ran&&(r.ran=!0,rr(t))})}function gn(){var e=k;vn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&n.deps!==null&&M(n,y),Jn(n)&&$n(n),t.ran=!1}})}function _n(e){return sn(4194304|te,e,!0)}function vn(e,t=0){return sn(8|t,e,!0)}function z(e,t=[],n=[],r=[]){gt(r,t,n,t=>{sn(8,()=>e(...t.map(W)),!0)})}function yn(e,t=0){return sn(16|t,e,!0)}function bn(e,t=0){return sn(16777216|t,e,!0)}function B(e){return sn(32|te,e,!0)}function xn(e){var t=e.teardown;if(t!==null){let e=Mn,n=H;Nn(!0),Fn(null);try{t.call(null)}finally{Nn(e),Fn(n)}}}function Sn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&nn(()=>{e.abort(le)});var r=n.next;n.f&64?n.parent=null:V(n,t),n=r}}function Cn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||V(t),t=n}}function V(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(wn(e.nodes.start,e.nodes.end),n=!0),Sn(e,t&&!n),Qn(e,0),M(e,16384);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();xn(e);var i=e.parent;i!==null&&i.first!==null&&Tn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function wn(e,t){for(;e!==null;){var n=e===t?null:Jt(e);e.remove(),e=n}}function Tn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function En(e,t,n=!0){var r=[];Dn(e,r,!0);var i=()=>{n&&V(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Dn(e,t,n){if(!(e.f&8192)){e.f^=b;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next,o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;Dn(i,t,o?n:!1),i=a}}}function On(e){kn(e,!0)}function kn(e,t){if(e.f&8192){e.f^=b,e.f&1024||(M(e,v),ut(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;kn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function An(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Jt(n);t.append(n),n=i}}var jn=!1;let Mn=!1;function Nn(e){Mn=e}let H=null,Pn=!1;function Fn(e){H=e}let U=null;function In(e){U=e}let Ln=null;function Rn(e){H!==null&&(Ln===null?Ln=[e]:Ln.push(e))}var zn=null,Bn=0;let Vn=null;function Hn(e){Vn=e}let Un=1;var Wn=0;let Gn=Wn;function Kn(e){Gn=e}function qn(){return++Un}function Jn(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~ie),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Jn(a)&&Et(a),a.wv>e.wv)return!0}t&512&&Ze===null&&M(e,_)}return!1}function Yn(e,t,r=!0){var i=e.reactions;if(i!==null&&!(Ln!==null&&n.call(Ln,e)))for(var a=0;a<i.length;a++){var o=i[a];o.f&2?Yn(o,t,!1):t===o&&(r?M(o,v):o.f&1024&&M(o,y),ut(o))}}function Xn(e){var t=zn,n=Bn,r=Vn,i=H,a=Ln,o=k,s=Pn,c=Gn,l=e.f;zn=null,Bn=0,Vn=null,H=l&96?null:e,Ln=null,Le(e.ctx),Pn=!1,Gn=++Wn,e.ac!==null&&(nn(()=>{e.ac.abort(le)}),e.ac=null);try{e.f|=ae;var u=e.fn,d=u();e.f|=x;var f=e.deps,p=N?.is_fork;if(zn!==null){var m;if(p||Qn(e,Bn),f!==null&&Bn>0)for(f.length=Bn+zn.length,m=0;m<zn.length;m++)f[Bn+m]=zn[m];else e.deps=f=zn;if(cn()&&e.f&512)for(m=Bn;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&Bn<f.length&&(Qn(e,Bn),f.length=Bn);if(Re()&&Vn!==null&&!Pn&&f!==null&&!(e.f&6146))for(m=0;m<Vn.length;m++)Yn(Vn[m],e);if(i!==null&&i!==e){if(Wn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Wn;if(t!==null)for(let e of t)e.rv=Wn;Vn!==null&&(r===null?r=Vn:r.push(...Vn))}return e.f&8388608&&(e.f^=oe),d}catch(e){return Ue(e)}finally{e.f^=ae,zn=t,Bn=n,Vn=r,H=i,Ln=a,Le(o),Pn=s,Gn=c}}function Zn(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(zn===null||!n.call(zn,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~ie),Ke(s),Dt(s),Qn(s,0)}}function Qn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Zn(e,n[r])}function $n(e){var t=e.f;if(!(t&16384)){M(e,_);var n=U,r=jn;U=e,jn=!0;try{t&16777232?Cn(e):Sn(e),xn(e);var i=Xn(e);e.teardown=typeof i==`function`?i:null,e.wv=Un}finally{jn=r,U=n}}}async function er(){await Promise.resolve(),rt()}function W(e){var t=(e.f&2)!=0;if(null?.add(e),H!==null&&!Pn&&!(U!==null&&U.f&16384)&&(Ln===null||!n.call(Ln,e))){var r=H.deps;if(H.f&2097152)e.rv<Wn&&(e.rv=Wn,zn===null&&r!==null&&r[Bn]===e?Bn++:zn===null?zn=[e]:zn.push(e));else{(H.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[H]:n.call(i,H)||i.push(H)}}if(Mn&&At.has(e))return At.get(e);if(t){var a=e;if(Mn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||nr(a))&&(o=Tt(a)),At.set(a,o),o}var s=(a.f&512)==0&&!Pn&&H!==null&&(jn||(H.f&512)!=0),c=(a.f&x)===0;Jn(a)&&(s&&(a.f|=512),Et(a)),s&&!c&&(Ot(a),tr(a))}if(Ze?.has(e))return Ze.get(e);if(e.f&8388608)throw e.v;return e.v}function tr(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Ot(t),tr(t))}function nr(e){if(e.v===C)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(At.has(t)||t.f&2&&nr(t))return!0;return!1}function rr(e){var t=Pn;try{return Pn=!0,e()}finally{Pn=t}}function ir(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(S in e)ar(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&S in n&&ar(n)}}}function ar(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ar(e[n],t)}catch{}let n=l(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=o(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}function or(e){return e.endsWith(`capture`)&&e!==`gotpointercapture`&&e!==`lostpointercapture`}var sr=[`beforeinput`,`click`,`change`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`];function cr(e){return sr.includes(e)}var lr=`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),ur={formnovalidate:`formNoValidate`,ismap:`isMap`,nomodule:`noModule`,playsinline:`playsInline`,readonly:`readOnly`,defaultvalue:`defaultValue`,defaultchecked:`defaultChecked`,srcobject:`srcObject`,novalidate:`noValidate`,allowfullscreen:`allowFullscreen`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`};function dr(e){return e=e.toLowerCase(),ur[e]??e}[...lr];var fr=[`touchstart`,`touchmove`];function pr(e){return fr.includes(e)}var mr=[`textarea`,`script`,`style`,`title`];function hr(e){return mr.includes(e)}const gr=new Set,_r=new Set;function vr(e,t,n,r={}){function i(e){if(r.capture||xr.call(t,e),!e.cancelBubble)return nn(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ve(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function yr(e){for(var t=0;t<e.length;t++)gr.add(e[t]);for(var n of _r)n(e)}var br=null;function xr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;br=e;var s=0,c=br===e&&e.__root;if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=H,f=U;Fn(null),In(null);try{for(var p,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o[`__`+r];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===t||h===null)break;o=h}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e.__root=t,delete e.currentTarget,Fn(d),In(f)}}}var Sr=globalThis?.window?.trustedTypes?.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Cr(e){return Sr?.createHTML(e)??e}function wr(e,t=!1){var n=Zt(`template`);return e=e.replaceAll(`<!>`,`<!---->`),n.innerHTML=t?Cr(e):e,n.content}function Tr(e,t){var n=U;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function G(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(w)return Tr(E,null),E;i===void 0&&(i=wr(a?e:`<!>`+e,!0),n||(i=qt(i)));var t=r||Ht?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=qt(t),s=t.lastChild;Tr(o,s)}else Tr(t,t);return t}}function Er(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=(t&1)!=0,a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(w)return Tr(E,null),E;if(!o){var e=qt(wr(a,!0));if(i)for(o=document.createDocumentFragment();qt(e);)o.appendChild(qt(e));else o=qt(e)}var t=o.cloneNode(!0);if(i){var n=qt(t),r=t.lastChild;Tr(n,r)}else Tr(t,t);return t}}function Dr(e,t){return Er(e,t,`svg`)}function Or(){if(w)return Tr(E,null),E;var e=document.createDocumentFragment(),t=document.createComment(``),n=Kt();return e.append(t,n),Tr(t,n),e}function K(e,t){if(w){var n=U;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=E),Oe();return}e!==null&&e.before(t)}let kr=!0;function Ar(e){kr=e}function q(e,t){var n=t==null?``:typeof t==`object`?t+``:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+``)}function jr(e,t){return Nr(e,t)}var Mr=new Map;function Nr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0}){Gt();var c=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!c.has(r)){c.add(r);var i=pr(r);for(let e of[t,document]){var a=Mr.get(e);a===void 0&&(a=new Map,Mr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,xr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};l(r(gr)),_r.add(l);var u=void 0,d=pn(()=>{var r=n??t.appendChild(Kt());return mt(r,{pending:()=>{}},t=>{A({});var n=k;if(o&&(n.c=o),a&&(i.$$events=a),w&&Tr(t,null),kr=s,u=e(t,i)||{},kr=!0,w&&(U.nodes.end=E,E===null||E.nodeType!==8||E.data!==`]`))throw Te(),we;j()}),()=>{for(var e of c)for(let n of[t,document]){var i=Mr.get(n),a=i.get(e);--a==0?(n.removeEventListener(e,xr),i.delete(e),i.size===0&&Mr.delete(n)):i.set(e,a)}_r.delete(l),r!==n&&r.parentNode?.removeChild(r)}});return Pr.set(u,d),u}var Pr=new WeakMap,Fr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=()=>{var e=N;if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)On(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(V(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();An(r,t),t.append(Kt()),this.#n.set(e,{effect:r,fragment:t})}else V(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),En(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(V(n.effect),this.#n.delete(e))};ensure(e,t){var n=N,r=Xt();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=Kt();i.append(a),this.#n.set(e,{effect:B(()=>t(a)),fragment:i})}else this.#t.set(e,B(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else w&&(this.anchor=E),this.#a()}};function Ir(e,t,n=!1){w&&Oe();var r=new Fr(e),i=n?ee:0;function a(t,n){if(w){let a=je(e);if(t!==(a===`[`?0:a===`[!`?!1:parseInt(a.substring(1)))){var i=Ae();D(i),r.anchor=i,T(!1),r.ensure(t,n),T(!0);return}}r.ensure(t,n)}yn(()=>{var e=!1;t((t,n=0)=>{e=!0,a(n,t)}),e||a(!1,null)},i)}function J(e,t){return t}function Lr(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];En(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Rr(r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else --s},!1)}if(s===0){var l=i.length===0&&n!==null;if(l){var u=n,d=u.parentNode;Yt(d),d.append(u),e.items.clear()}Rr(t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Rr(e,t=!0){for(var n=0;n<e.length;n++)V(e[n],t)}var zr;function Y(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=w?D(qt(u)):u.appendChild(Kt())}w&&Oe();var d=null,f=St(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=!0;function h(){g.fallback=d,Vr(g,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=re,Ur(d,null,c)):On(d):En(d,()=>{d=null}))}var g={effect:yn(()=>{p=W(f);var e=p.length;let t=!1;w&&je(c)===`[!`!=(e===0)&&(c=Ae(),D(c),T(!1),t=!0);for(var r=new Set,u=N,g=Xt(),_=0;_<e;_+=1){w&&E.nodeType===8&&E.data===`]`&&(c=E,t=!0,T(!1));var v=p[_],y=a(v,_),b=m?null:l.get(y);b?(b.v&&Pt(b.v,v),b.i&&Pt(b.i,_),g&&u.unskip_effect(b.e)):(b=Hr(l,m?c:zr??=Kt(),v,y,_,o,n,i),m||(b.e.f|=re),l.set(y,b)),r.add(y)}if(e===0&&s&&!d&&(m?d=B(()=>s(c)):(d=B(()=>s(zr??=Kt())),d.f|=re)),e>r.size&&pe(``,``,``),w&&e>0&&D(Ae()),!m)if(g){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(h),u.ondiscard(()=>{})}else h();t&&T(!0),W(f)}),flags:n,items:l,outrogroups:null,fallback:d};m=!1,w&&(c=E)}function Br(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Vr(e,t,n,i,a){var o=(i&8)!=0,s=t.length,c=e.items,l=Br(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&33554432)if(_.f^=re,_===l)Ur(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Wr(e,d,_),Wr(e,_,y),Ur(_,y,n),d=_,p=[],m=[],l=Br(d.next);continue}if(_.f&8192&&(On(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var ee=p[0],te=p[p.length-1];for(x=0;x<p.length;x+=1)Ur(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);Wr(e,ee.prev,te.next),Wr(e,d,ee),Wr(e,te,b),l=b,d=te,--v,p=[],m=[]}else u.delete(_),Ur(_,l,n),Wr(e,_.prev,_.next),Wr(e,_,d===null?e.effect.first:d.next),Wr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=Br(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=Br(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Rr(r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var ne=[];if(u!==void 0)for(_ of u)_.f&8192||ne.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&ne.push(l),l=Br(l.next);var ie=ne.length;if(ie>0){var ae=i&4&&s===0?n:null;if(o){for(v=0;v<ie;v+=1)ne[v].nodes?.a?.measure();for(v=0;v<ie;v+=1)ne[v].nodes?.a?.fix()}Lr(e,ne,ae)}}o&&Ve(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Hr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Mt(n):Nt(n,!1,!1):null,l=o&2?Mt(i):null;return{v:c,i:l,e:B(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Ur(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=Jt(r);if(a.before(r),r===i)return;r=o}}function Wr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Gr(e,t,...n){var r=new Fr(e);yn(()=>{let e=t()??null;r.ensure(e,e&&(t=>e(t,...n)))},ee)}function Kr(e,t,n){w&&Oe();var r=new Fr(e);yn(()=>{var e=t()??null;r.ensure(e,e&&(t=>n(t,e)))},ee)}var qr=()=>performance.now();const Jr={tick:e=>requestAnimationFrame(e),now:()=>qr(),tasks:new Set};function Yr(){let e=Jr.now();Jr.tasks.forEach(t=>{t.c(e)||(Jr.tasks.delete(t),t.f())}),Jr.tasks.size!==0&&Jr.tick(Yr)}function Xr(e){let t;return Jr.tasks.size===0&&Jr.tick(Yr),{promise:new Promise(n=>{Jr.tasks.add(t={c:e,f:n})}),abort(){Jr.tasks.delete(t)}}}function Zr(e,t){nn(()=>{e.dispatchEvent(new CustomEvent(t))})}function Qr(e){if(e===`float`)return`cssFloat`;if(e===`offset`)return`cssOffset`;if(e.startsWith(`--`))return e;let t=e.split(`-`);return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join(``)}function $r(e){let t={},n=e.split(`;`);for(let e of n){let[n,r]=e.split(`:`);if(!n||r===void 0)break;let i=Qr(n.trim());t[i]=r.trim()}return t}var ei=e=>e;function ti(e,t,n,r){var i=(e&1)!=0,a=(e&2)!=0,o=i&&a,s=(e&4)!=0,c=o?`both`:i?`in`:`out`,l,u=t.inert,d=t.style.overflow,f,p;function m(){return nn(()=>l??=n()(t,r?.()??{},{direction:c}))}var h={is_global:s,in(){if(t.inert=u,!i){p?.abort(),p?.reset?.();return}a||f?.abort(),f=ni(t,m(),p,1,()=>{Zr(t,`introend`),f?.abort(),f=l=void 0,t.style.overflow=d})},out(e){if(!a){e?.(),l=void 0;return}t.inert=!0,p=ni(t,m(),f,0,()=>{Zr(t,`outroend`),e?.()})},stop:()=>{f?.abort(),p?.abort()}},g=U;if((g.nodes.t??=[]).push(h),i&&kr){var _=s;if(!_){for(var v=g.parent;v&&v.f&65536;)for(;(v=v.parent)&&!(v.f&16););_=!v||(v.f&32768)!=0}_&&mn(()=>{rr(()=>h.in())})}}function ni(e,t,n,r,i){var a=r===1;if(d(t)){var o,s=!1;return Ve(()=>{s||(o=ni(e,t({direction:a?`in`:`out`}),n,r,i))}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration&&!t?.delay)return Zr(e,a?`introstart`:`outrostart`),i(),{abort:f,deactivate:f,reset:f,t:()=>r};let{delay:c=0,css:l,tick:u,easing:p=ei}=t;var m=[];if(a&&n===void 0&&(u&&u(0,1),l)){var h=$r(l(0,1));m.push(h,h)}var g=()=>1-r,_=e.animate(m,{duration:c,fill:`forwards`});return _.onfinish=()=>{_.cancel(),Zr(e,a?`introstart`:`outrostart`);var o=n?.t()??1-r;n?.abort();var s=r-o,c=t.duration*Math.abs(s),d=[];if(c>0){var f=!1;if(l)for(var m=Math.ceil(c/(1e3/60)),h=0;h<=m;h+=1){var v=o+s*p(h/m),y=$r(l(v,1-v));d.push(y),f||=y.overflow===`hidden`}f&&(e.style.overflow=`hidden`),g=()=>{var e=_.currentTime;return o+s*p(e/c)},u&&Xr(()=>{if(_.playState!==`running`)return!1;var e=g();return u(e,1-e),!0})}_=e.animate(d,{duration:c,fill:`forwards`}),_.onfinish=()=>{g=()=>r,u?.(r,1-r),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=f)},deactivate:()=>{i=f},reset:()=>{r===0&&u?.(1,0)},t:()=>g()}}function ri(e,t,n,r,i,a){let o=w;w&&Oe();var s=null;w&&E.nodeType===1&&(s=E,Oe());var c=w?E:e,l=new Fr(c,!1);yn(()=>{let e=t()||null;var a=i?i():n||e===`svg`?`http://www.w3.org/2000/svg`:void 0;if(e===null){l.ensure(null,null),Ar(!0);return}return l.ensure(e,t=>{if(e){if(s=w?s:Zt(e,a),Tr(s,s),r){w&&hr(e)&&s.append(document.createComment(``));var n=w?qt(s):s.appendChild(Kt());w&&(n===null?T(!1):D(n)),r(s,n)}U.nodes.end=s,t.before(s)}w&&D(t)}),Ar(!0),()=>{e&&Ar(!1)}},ee),ln(()=>{Ar(!0)}),o&&(T(!0),D(c))}function ii(e,t){var n=void 0,r;bn(()=>{n!==(n=t())&&(r&&=(V(r),null),n&&(r=B(()=>{mn(()=>n(e))})))})}function ai(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ai(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function oi(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ai(e))&&(r&&(r+=` `),r+=t);return r}function si(e){return typeof e==`object`?oi(e):e??``}var ci=[...` 	
\r\f\xA0\v﻿`];function li(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i in n)if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||ci.includes(r[o-1]))&&(s===r.length||ci.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function ui(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i in e){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function di(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function fi(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(di)),i&&c.push(...Object.keys(i).map(di));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=di(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=ui(r)),i&&(n+=ui(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function pi(e,t,n,r,i,a){var o=e.__className;if(w||o!==n||o===void 0){var s=li(n,r,a);(!w||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function mi(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function X(e,t,n,r){var i=e.__style;if(w||i!==t){var a=fi(t,r);(!w||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e.__style=t}else r&&(Array.isArray(r)?(mi(e,n?.[0],r[0]),mi(e,n?.[1],r[1],`important`)):mi(e,n,r));return r}function hi(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return Ee();for(var i of t.options)i.selected=n.includes(_i(i));return}for(i of t.options)if(Bt(_i(i),n)){i.selected=!0;return}(!r||n!==void 0)&&(t.selectedIndex=-1)}function gi(e){var t=new MutationObserver(()=>{hi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),ln(()=>{t.disconnect()})}function _i(e){return`__value`in e?e.__value:e.value}const vi=Symbol(`class`),yi=Symbol(`style`);var bi=Symbol(`is custom element`),xi=Symbol(`is html`),Si=ue?`link`:`LINK`,Ci=ue?`input`:`INPUT`,wi=ue?`option`:`OPTION`,Ti=ue?`select`:`SELECT`;function Ei(e){if(w){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;Z(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;Z(e,`checked`,null),e.checked=r}}};e.__on_r=n,Ve(n),tn()}}function Di(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function Z(e,t,n,r){var i=Ai(e);w&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Si)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[ce]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Mi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Oi(e,t,n,r,i=!1,a=!1){if(w&&i&&e.nodeName===Ci){var o=e;(o.type===`checkbox`?`defaultChecked`:`defaultValue`)in n||Ei(o)}var s=Ai(e),c=s[bi],l=!s[xi];let u=w&&c;u&&T(!1);var d=t||{},f=e.nodeName===wi;for(var p in t)p in n||(n[p]=null);n.class?n.class=si(n.class):(r||n[vi])&&(n.class=null),n[yi]&&(n.style??=null);var m=Mi(e);for(let i in n){let o=n[i];if(f&&i===`value`&&o==null){e.value=e.__value=``,d[i]=o;continue}if(i===`class`){pi(e,e.namespaceURI===`http://www.w3.org/1999/xhtml`,o,r,t?.[vi],n[vi]),d[i]=o,d[vi]=n[vi];continue}if(i===`style`){X(e,o,t?.[yi],n[yi]),d[i]=o,d[yi]=n[yi];continue}var h=d[i];if(!(o===h&&!(o===void 0&&e.hasAttribute(i)))){d[i]=o;var g=i[0]+i[1];if(g!==`$$`)if(g===`on`){let t={},n=`$$`+i,r=i.slice(2);var _=cr(r);if(or(r)&&(r=r.slice(0,-7),t.capture=!0),!_&&h){if(o!=null)continue;e.removeEventListener(r,d[n],t),d[n]=null}if(o!=null)if(_)e[`__${r}`]=o,yr([r]);else{function a(e){d[i].call(this,e)}d[n]=vr(r,e,a,t)}else _&&(e[`__${r}`]=void 0)}else if(i===`style`)Z(e,i,o);else if(i===`autofocus`)$t(e,!!o);else if(!c&&(i===`__value`||i===`value`&&o!=null))e.value=e.__value=o;else if(i===`selected`&&f)Di(e,o);else{var v=i;l||(v=dr(v));var y=v===`defaultValue`||v===`defaultChecked`;if(o==null&&!c&&!y)if(s[i]=null,v===`value`||v===`checked`){let n=e,r=t===void 0;if(v===`value`){let e=n.defaultValue;n.removeAttribute(v),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(v),n.defaultChecked=e,n.checked=r?e:!1}}else e.removeAttribute(i);else y||m.includes(v)&&(c||typeof o!=`string`)?(e[v]=o,v in s&&(s[v]=C)):typeof o!=`function`&&Z(e,v,o,a)}}}return u&&T(!0),d}function ki(e,t,n=[],r=[],i=[],a,o=!1,s=!1){gt(i,n,r,n=>{var r=void 0,i={},c=e.nodeName===Ti,l=!1;if(bn(()=>{var u=t(...n.map(W)),d=Oi(e,r,u,a,o,s);l&&c&&`value`in u&&hi(e,u.value);for(let e of Object.getOwnPropertySymbols(i))u[e]||V(i[e]);for(let t of Object.getOwnPropertySymbols(u)){var f=u[t];t.description===`@attach`&&(!r||f!==r[t])&&(i[t]&&V(i[t]),i[t]=B(()=>ii(e,()=>f))),d[t]=f}r=d}),c){var u=e;mn(()=>{hi(u,r.value,!0),gi(u)})}l=!0})}function Ai(e){return e.__attributes??={[bi]:e.nodeName.includes(`-`),[xi]:e.namespaceURI===`http://www.w3.org/1999/xhtml`}}var ji=new Map;function Mi(e){var t=e.getAttribute(`is`)||e.nodeName,n=ji.get(t);if(n)return n;ji.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&n.push(s);i=l(i)}return n}function Ni(e,t,n=t){var r=new WeakSet;rn(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Pi(e)?Fi(a):a,n(a),N!==null&&r.add(N),await er(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(w&&e.defaultValue!==e.value||rr(t)==null&&e.value)&&(n(Pi(e)?Fi(e.value):e.value),N!==null&&r.add(N)),vn(()=>{var n=t();if(e===document.activeElement){var i=Xe??N;if(r.has(i))return}Pi(e)&&n===Fi(e.value)||e.type===`date`&&!n&&!e.value||n!==e.value&&(e.value=n??``)})}function Pi(e){var t=e.type;return t===`number`||t===`range`}function Fi(e){return e===``?null:+e}function Ii(e,t){return e===t||e?.[S]===t}function Li(e={},t,n,r){return mn(()=>{var i,a;return vn(()=>{i=a,a=r?.()||[],rr(()=>{e!==n(...a)&&(t(e,...a),i&&Ii(n(...i),e)&&t(null,...i))})}),()=>{Ve(()=>{a&&Ii(n(...a),e)&&t(null,...a)})}}),e}function Ri(e,t,n,r=n){t.addEventListener(`input`,()=>{r(t[e])}),vn(()=>{var i=n();if(t[e]!==i)if(i==null){var a=t[e];r(a)}else t[e]=i+``})}function zi(e=!1){let t=k,n=t.l.u;if(!n)return;let r=()=>ir(t.s);if(e){let e=0,n={},i=yt(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>W(i)}n.b.length&&fn(()=>{Bi(t,r),m(n.b)}),un(()=>{let e=rr(()=>n.m.map(p));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&un(()=>{Bi(t,r),m(n.a)})}function Bi(e,t){if(e.l.s)for(let t of e.l.s)W(t);t()}function Vi(t,n){var r=t.$$events?.[n.type];for(var i of e(r)?r.slice():r==null?[]:[r])i.call(this,n)}function Hi(e,t,n){if(e==null)return t(void 0),n&&n(void 0),f;let r=rr(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var Ui=[];function Wi(e,t){return{subscribe:Gi(e,t).subscribe}}function Gi(e,t=f){let n=null,r=new Set;function i(t){if(Ne(e,t)&&(e=t,n)){let t=!Ui.length;for(let t of r)t[1](),Ui.push(t,e);if(t){for(let e=0;e<Ui.length;e+=2)Ui[e][0](Ui[e+1]);Ui.length=0}}}function a(t){i(t(e))}function o(o,s=f){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||f),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Ki(e,t,n){let r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw Error(`derived() expects stores as input, got a falsy value`);let a=t.length<2;return Wi(n,(e,n)=>{let o=!1,s=[],c=0,l=f,u=()=>{if(c)return;l();let i=t(r?s[0]:s,e,n);a?e(i):l=typeof i==`function`?i:f},d=i.map((e,t)=>Hi(e,e=>{s[t]=e,c&=~(1<<t),o&&u()},()=>{c|=1<<t}));return o=!0,u(),function(){m(d),l(),o=!1}})}var qi=!1;function Ji(e){var t=qi;try{return qi=!1,[e(),qi]}finally{qi=t}}var Yi={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Xi(e,t,n){return new Proxy({props:e,exclude:t},Yi)}var Zi={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(d(r)&&(r=r()),typeof r==`object`&&r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];d(i)&&(i=i());let o=a(i,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(d(r)&&(r=r()),typeof r==`object`&&r&&t in r){let e=a(r,t);return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===S||t===se)return!1;for(let n of e.props)if(d(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){let t=[];for(let n of e.props)if(d(n)&&(n=n()),n){for(let e in n)t.includes(e)||t.push(e);for(let e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}};function Qi(...e){return new Proxy({props:e},Zi)}function Q(e,t,n,r){var i=!Fe||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?rr(r):r),c),d;if(o){var f=S in e||se in e;d=a(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=Ji(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&ye(t),d(p)));var h=i?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?yt:St)(()=>(_=!1,h()));o&&W(v);var y=U;return(function(e,t){if(arguments.length>0){let n=t?W(v):i&&o?Rt(e):e;return F(v,n),_=!0,c!==void 0&&(c=n),e}return Mn&&_||y.f&16384?v.v:W(v)})}function $i(e){k===null&&de(`onMount`),Fe&&k.l!==null?ia(k).m.push(e):un(()=>{let t=rr(e);if(typeof t==`function`)return t})}function ea(e){k===null&&de(`onDestroy`),$i(()=>()=>rr(e))}function ta(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function na(){let t=k;return t===null&&de(`createEventDispatcher`),(n,r,i)=>{let a=t.s.$$events?.[n];if(a){let o=e(a)?a.slice():[a],s=ta(n,r,i);for(let e of o)e.call(t.x,s);return!s.defaultPrevented}return!0}}function ra(e){k===null&&de(`afterUpdate`),k.l===null&&ve(`afterUpdate`),ia(k).a.push(e)}function ia(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Ie();function aa(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,a,o=[],s=``,c=e.split(`/`);for(c[0]||c.shift();i=c.shift();)n=i[0],n===`*`?(o.push(`wild`),s+=`/(.*)`):n===`:`?(r=i.indexOf(`?`,1),a=i.indexOf(`.`,1),o.push(i.substring(1,~r?r:~a?a:i.length)),s+=~r&&!~a?`(?:/([^/]+?))?`:`/([^/]+?)`,~a&&(s+=(~r?`?`:``)+`\\`+i.substring(a))):s+=`/`+i;return{keys:o,pattern:RegExp(`^`+s+(t?`(?=$|/)`:`/?$`),`i`)}}function oa(){let e=window.location.href.indexOf(`#/`),t=e>-1?window.location.href.substr(e+1):`/`,n=t.indexOf(`?`),r=``;return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const sa=Wi(null,function(e){e(oa());let t=()=>{e(oa())};return window.addEventListener(`hashchange`,t,!1),function(){window.removeEventListener(`hashchange`,t,!1)}});Ki(sa,e=>e.location),Ki(sa,e=>e.querystring);const ca=Gi(void 0);async function la(e){if(!e||e.length<1||e.charAt(0)!=`/`&&e.indexOf(`#/`)!==0)throw Error(`Invalid parameter location`);await er();let t=(e.charAt(0)==`#`?``:`#`)+e;try{let e={...history.state};delete e.__svelte_spa_router_scrollX,delete e.__svelte_spa_router_scrollY,window.history.replaceState(e,void 0,t)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event(`hashchange`))}function ua(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function da(e,t){A(t,!1);let n=Q(t,`routes`,24,()=>({})),r=Q(t,`prefix`,8,``),i=Q(t,`restoreScrollState`,8,!1);class a{constructor(e,t){if(!t||typeof t!=`function`&&(typeof t!=`object`||t._sveltesparouter!==!0))throw Error(`Invalid component object`);if(!e||typeof e==`string`&&(e.length<1||e.charAt(0)!=`/`&&e.charAt(0)!=`*`)||typeof e==`object`&&!(e instanceof RegExp))throw Error(`Invalid value for "path" argument - strings must start with / or *`);let{pattern:n,keys:r}=aa(e);this.path=e,typeof t==`object`&&t._sveltesparouter===!0?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(r()){if(typeof r()==`string`)if(e.startsWith(r()))e=e.substr(r().length)||`/`;else return null;else if(r()instanceof RegExp){let t=e.match(r());if(t&&t[0])e=e.substr(t[0].length)||`/`;else return null}}let t=this._pattern.exec(e);if(t===null)return null;if(this._keys===!1)return t;let n={},i=0;for(;i<this._keys.length;){try{n[this._keys[i]]=decodeURIComponent(t[i+1]||``)||null}catch{n[this._keys[i]]=null}i++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}let o=[];n()instanceof Map?n().forEach((e,t)=>{o.push(new a(t,e))}):Object.keys(n()).forEach(e=>{o.push(new a(e,n()[e]))});let s=Nt(null),c=Nt(null),l=Nt({}),u=na();async function d(e,t){await er(),u(e,t)}let f=null,p=null;i()&&(p=e=>{f=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener(`popstate`,p),ra(()=>{ua(f)}));let m=null,h=null,g=sa.subscribe(async e=>{m=e;let t=0;for(;t<o.length;){let n=o[t].match(e.location);if(!n){t++;continue}let r={route:o[t].path,location:e.location,querystring:e.querystring,userData:o[t].userData,params:n&&typeof n==`object`&&Object.keys(n).length?n:null};if(!await o[t].checkConditions(r)){F(s,null),h=null,d(`conditionsFailed`,r);return}d(`routeLoading`,Object.assign({},r));let i=o[t].component;if(h!=i){i.loading?(F(s,i.loading),h=i,F(c,i.loadingParams),F(l,{}),d(`routeLoaded`,Object.assign({},r,{component:W(s),name:W(s).name,params:W(c)}))):(F(s,null),h=null);let t=await i();if(e!=m)return;F(s,t&&t.default||t),h=i}n&&typeof n==`object`&&Object.keys(n).length?F(c,n):F(c,null),F(l,o[t].props),d(`routeLoaded`,Object.assign({},r,{component:W(s),name:W(s).name,params:W(c)})).then(()=>{ca.set(W(c))});return}F(s,null),h=null,ca.set(void 0)});ea(()=>{g(),p&&window.removeEventListener(`popstate`,p)}),hn(()=>ir(i()),()=>{history.scrollRestoration=i()?`manual`:`auto`}),gn(),zi();var _=Or(),v=L(_),y=e=>{var n=Or();Kr(L(n),()=>W(s),(e,n)=>{n(e,Qi({get params(){return W(c)}},()=>W(l),{$$events:{routeEvent(e){Vi.call(this,t,e)}}}))}),K(e,n)},b=e=>{var n=Or();Kr(L(n),()=>W(s),(e,n)=>{n(e,Qi(()=>W(l),{$$events:{routeEvent(e){Vi.call(this,t,e)}}}))}),K(e,n)};Ir(v,e=>{W(c)?e(y):e(b,!1)}),K(e,_),j()}var fa={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};const pa=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1};var ma=Dr(`<svg><!><!></svg>`);function ha(e,t){A(t,!0);let n=Q(t,`color`,3,`currentColor`),r=Q(t,`size`,3,24),i=Q(t,`strokeWidth`,3,2),a=Q(t,`absoluteStrokeWidth`,3,!1),o=Q(t,`iconNode`,19,()=>[]),s=Xi(t,[`$$slots`,`$$events`,`$$legacy`,`name`,`color`,`size`,`strokeWidth`,`absoluteStrokeWidth`,`iconNode`,`children`]);var c=ma();ki(c,(e,i)=>({...fa,...e,...s,width:r(),height:r(),stroke:n(),"stroke-width":i,class:[`lucide-icon lucide`,t.name&&`lucide-${t.name}`,t.class]}),[()=>!t.children&&!pa(s)&&{"aria-hidden":`true`},()=>a()?Number(i())*24/Number(r()):i()]);var l=I(c);Y(l,17,o,J,(e,t)=>{var n=xt(()=>g(W(t),2));let r=()=>W(n)[0],i=()=>W(n)[1];var a=Or();ri(L(a),r,!0,(e,t)=>{ki(e,()=>({...i()}))}),K(e,a)}),Gr(R(l),()=>t.children??f),O(c),K(e,c),j()}function ga(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`rect`,{x:`14`,y:`14`,width:`4`,height:`6`,rx:`2`}],[`rect`,{x:`6`,y:`4`,width:`4`,height:`6`,rx:`2`}],[`path`,{d:`M6 20h4`}],[`path`,{d:`M14 10h4`}],[`path`,{d:`M6 14h2v6`}],[`path`,{d:`M14 4h2v6`}]];ha(e,Qi({name:`binary`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function _a(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m6 9 6 6 6-6`}]];ha(e,Qi({name:`chevron-down`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function va(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m16 18 6-6-6-6`}],[`path`,{d:`m8 6-6 6 6 6`}]];ha(e,Qi({name:`code`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function ya(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`}]];ha(e,Qi({name:`copy`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function ba(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`line`,{x1:`6`,x2:`10`,y1:`12`,y2:`12`}],[`line`,{x1:`8`,x2:`8`,y1:`10`,y2:`14`}],[`line`,{x1:`15`,x2:`15.01`,y1:`13`,y2:`13`}],[`line`,{x1:`18`,x2:`18.01`,y1:`11`,y2:`11`}],[`rect`,{width:`20`,height:`12`,x:`2`,y:`6`,rx:`2`}]];ha(e,Qi({name:`gamepad`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function xa(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`rect`,{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`}],[`rect`,{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`}]];ha(e,Qi({name:`layout-grid`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function Sa(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`}]];ha(e,Qi({name:`loader-circle`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function Ca(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11 7 6 2`}],[`path`,{d:`M18.992 12H2.041`}],[`path`,{d:`M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595`}],[`path`,{d:`m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33`}]];ha(e,Qi({name:`paint-bucket`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function wa(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]];ha(e,Qi({name:`plus`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}function Ta(e,t){A(t,!0);let n=Xi(t,[`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]];ha(e,Qi({name:`sparkles`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=Or();Gr(L(r),()=>t.children??f),K(e,r)},$$slots:{default:!0}})),j()}var Ea=G(`<div class="main svelte-1isgtux"><div class="toggleDot svelte-1isgtux"></div></div>`);function Da(e,t){A(t,!0);let n=Q(t,`value`,15),r=Q(t,`action`,3,()=>{}),i=()=>{n(!n()),r()()};var a=Ea();a.__click=i;var o=I(a);O(a),z(()=>{X(a,n()?`background-color: var(--main1);`:``),X(o,`left: ${n()?`calc(100% - 25px);`:`5px;`}`)}),K(e,a),j()}yr([`click`]);const $=e=>Math.floor(Math.random()*e);var Oa="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=_+/?.>,<!@#$%^&*()~`";const ka=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Aa=()=>{let e=``;for(let t=0;t<15;t++)e+=Oa[ka(0,83)];return e};var ja=G(`<div class="item svelte-l9fi92"><div class="slider svelte-l9fi92"><input type="text" class="bb3 svelte-l9fi92"/> <p style="padding-top: 10px;" class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="0" max="360"/> <p style="padding-top: 10px;" class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="1" max="100"/></div></div>`),Ma=G(`<label class="color svelte-l9fi92"></label> <button class="invis svelte-l9fi92">Copy Color</button>`,1),Na=G(`<div class="colorArea svelte-l9fi92"></div>`),Pa=G(`<div class="bdg"> </div>`),Fa=G(`<div class="btn"> </div>`),Ia=G(`<div class="bdg"> </div>`),La=G(`<label class="color svelte-l9fi92"></label> <button class="invis svelte-l9fi92">Copy Color</button>`,1),Ra=G(`<label class="color svelte-l9fi92"></label> <button class="invis svelte-l9fi92">Copy Color</button>`,1),za=G(`<div class="wrapper svelte-l9fi92"><div class="sideBar scrollOverflow svelte-l9fi92"><div class="header svelte-l9fi92"><div class="svgWrapper" style="color: var(--main6);"><!></div> <p class="svelte-l9fi92">Georg<i class="svelte-l9fi92">UI</i></p></div> <div class="wordMarker svelte-l9fi92"><p class="svelte-l9fi92">App Colors</p></div> <!> <button class="btn bb3 svelte-l9fi92"><!> Add Color</button> <div class="wordMarker svelte-l9fi92"><p class="svelte-l9fi92">Background</p></div> <div class="item svelte-l9fi92"><div class="slider svelte-l9fi92"><p class="svelte-l9fi92">Light Mode</p> <div class="toggleWrapper svelte-l9fi92"><!></div></div></div> <div class="item svelte-l9fi92"><div class="slider svelte-l9fi92"><p class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="0" max="360"/> <p style="padding-top: 10px;" class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="1" max="100"/></div></div> <div class="wordMarker svelte-l9fi92"><p class="svelte-l9fi92">Text Colors</p></div> <div class="item svelte-l9fi92"><div class="slider svelte-l9fi92"><p class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="0" max="360"/> <p style="padding-top: 10px;" class="svelte-l9fi92"> </p> <input class="bb3 svelte-l9fi92" type="range" min="1" max="100"/></div></div> <button class="btn main svelte-l9fi92"><div class="svgwrapper"><!></div> Copy Colors</button> <button class="btn secondary svelte-l9fi92"><div class="svgwrapper"><!></div> Copy Code</button> <button class="btn bb3 svelte-l9fi92"><!> Generate Colors</button></div> <div class="uiMain svelte-l9fi92"><h1>App Colors</h1> <!> <div class="contentContainer svelte-l9fi92"><p class="svelte-l9fi92">Badges</p> <div class="flexWrap svelte-l9fi92"></div></div> <div class="contentContainer svelte-l9fi92"><p class="svelte-l9fi92">Buttons</p> <div class="flexWrap svelte-l9fi92"></div></div> <div class="contentContainer svelte-l9fi92"><p class="svelte-l9fi92">Glowing</p> <div class="flexWrap svelte-l9fi92"></div></div> <h1>Background Colors</h1> <div class="colorArea svelte-l9fi92"></div> <h1>Text Colors</h1> <div class="colorArea svelte-l9fi92"></div></div></div> <button class="moveButton bb3 svelte-l9fi92"><div class="svgWrapper"><!></div></button>`,1);function Ba(e,t){A(t,!0);let n=P(Rt([{name:`main`,v:0,saturation:100,id:Aa()}])),r=P(Rt({v:0,saturation:15,id:Aa()})),i=P(Rt({v:0,saturation:15,id:Aa()})),a=()=>{let e=``;for(let t of W(n))for(let n=0;n<10;n++)e+=`--${t.name}${n}: ${f(t.v,n)}\n`;for(let t=0;t<10;t++)e+=`--bg${t}: ${f(W(r).v,W(p)?9-t:t,W(r).saturation,d)}\n`;for(let t=0;t<10;t++)e+=`--text${t}: ${f(W(i).v,W(p)?t:9-t,W(i).saturation,d)}\n`;return e+=`
`,e},o=async()=>{let e=`
:root {
    font-family: monospace;
    line-height: 1.5;
    background-color: var(--bg1);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    scrollbar-width: none;
    color: var(--text1);

`;e+=a(),e+=`--border-radius: 15px;
`,e+=`--uiPadding: 20px;
`,e+=`}
`,e+=`
button, input, p, h1 {
    color: var(--text1);
}

.invis {
    scale: 0;
    position: fixed;
}

input, textarea {
  touch-action: manipulation;
}

.svgWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    color: var(--text1);
}

.uiMain {
    width: 100%;
    height: 100%;

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    place-items: center;
    padding: var(--uiPadding);

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: 0px;
    -ms-overflow-style: none;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.scrollOverflow {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: 0px;
    -ms-overflow-style: none;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

p {
    margin: 0px;
}

.bb1 {
    background-color: var(--bg1);
    border: 1px solid var(--bg2);
    border-radius: var(--border-radius);
}

.bb2 {
    background-color: var(--bg2);
    border: 1px solid var(--bg3);
    border-radius: var(--border-radius);
}

.bb3 {
    background-color: var(--bg3);
    border: 1px solid var(--bg4);
    border-radius: var(--border-radius);
}

.btn {
    padding: 10px;
    display: flex;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color .25s;
    font-size: 14px;
    align-items: center;
    gap: 7px;
}

.btn.bb1:hover {
    background-color: var(--bg2);
}
.btn.bb2:hover {
    background-color: var(--bg3);
}
.btn.bb3:hover {
    background-color: var(--bg4);
}

.bq {   
    border-left: 4px solid var(--bg4);
    color: var(--text1);
    white-space: pre-wrap;
    padding-left: 15px;
    font-style: italic;
}

.bdg {
    padding: 2px 5px 2px 5px;
    width: fit-content;
    border-radius: 100px;
}

@keyframes revealTT {
    from { opacity: 0.0; top: -50% }
    to { opacity: 1.0; top: -100%}
}

.tt {
    position: relative;
    cursor: pointer;
}

.tt:hover .toolTip, .tt:hover .arrow {
    animation: .3s revealTT .7s forwards;
}

.toolTip {
    position: absolute;
    min-width: fit-content;
    left: 50%;
    top: -100%;
    text-wrap: nowrap;
    transform: translate(-50%, -50%);
    padding: 2px 5px 2px 5px;
    pointer-events: none;
    opacity: 0.0;
    border-radius: var(--border-radius);
    height: 20px;
}

.arrow {
    height: 4px;
    width: 4px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    position: absolute;
    min-width: fit-content;
    left: 50%;
    top: -100%;
    text-wrap: nowrap;
    transform: translate(-50%, calc(-50% + 17px));
    padding: 2px 5px 2px 5px;
    pointer-events: none;
    opacity: 0.0;
}

@keyframes loading {
    from { rotate: 0deg }
    to { rotate: 360deg }
}
.loading {
    animation: 1.5s loading infinite;
}

@keyframes shake {
    0% { transform: translateX(0); }
    33% { transform: translateX(-5px); }
    66% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}

.shake:hover {
    animation: .5s shake forwards;

}

@keyframes wiggle {
    0% { transform: rotate(0deg); }
    33% { transform: rotate(-5deg); }
    66% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
}

.wiggle:hover {
    animation: wiggle .5s;
}

/* Generated CSS */
`;for(let t of W(n))e+=m(t);await navigator.clipboard.writeText(e),alert(`CSS Copied`)},s=async e=>{await navigator.clipboard.writeText(e),alert(`CSS Copied`)},c=async()=>{let e=a();await navigator.clipboard.writeText(e),alert(`CSS Copied`)},l=(e,t)=>t*10/(e*t/100-t)+t,u=[5,12,20,30,40,50,60,70,80,88],d=[0,6,10,15,40,60,85,90,93,99],f=(e,t,n=100,r=u)=>`hsl(${e}, ${l(r[t],n)}%, ${r[t]}%);`,p=P(!1),m=e=>{let t=``;return t+=`.${e.name} {
    background-color: var(--${e.name}3);
    border: 1px solid var(--${e.name}4);
}

.btn.${e.name}:hover {
    background-color: var(--${e.name}4);
}

.bdg.${e.name} {
    background-color: var(--${e.name}2);
    color: var(--${e.name}6);
    border: 1px solid var(--${e.name}5);
}

.glow.${e.name} {
    box-shadow: 0px 0px 10px -2px var(--${e.name}6);
}
`,t},h=e=>`background-color: ${f(e.v,3,e.saturation)} border: 1px solid ${f(e.v,4,e.saturation)}`,g=e=>`background-color: ${f(e.v,2,e.saturation)} color: ${f(e.v,7,e.saturation)} border: 1px solid ${f(e.v,5,e.saturation)}`,_=e=>`background-color: ${f(e.v,2,e.saturation)} color: ${f(e.v,7,e.saturation)} border: 1px solid ${f(e.v,5,e.saturation)}; box-shadow: 0px 0px 10px -1px ${f(e.v,6,e.saturation)};`,v=()=>{W(n).length=0;let e=$(180)+135,t=e-$(45)-20,a=$(55)+25,o=($(30)+350)%360,s=$(40)+60;F(n,[{name:`main`,v:e,saturation:s,id:Aa()},{name:`secondary`,v:t,saturation:s,id:Aa()},{name:`warn`,v:a,saturation:s,id:Aa()},{name:`fail`,v:o,saturation:s,id:Aa()}],!0);let c=$(20);F(r,{v:e,saturation:c,id:Aa()},!0),F(i,{v:e,saturation:c,id:Aa()},!0)};var y=za(),b=L(y),x=I(b),ee=I(x),te=I(ee);ba(I(te),{size:`30`}),O(te),ke(2),O(ee);var ne=R(ee,4);Y(ne,17,()=>W(n),J,(e,t,n)=>{var r=ja(),i=I(r),a=I(i);Ei(a);var o=R(a,2),s=I(o);O(o);var c=R(o,2);Ei(c);var l=R(c,2),u=I(l);O(l);var d=R(l,2);Ei(d),O(i),O(r),z(e=>{q(s,`${W(t).v??``}deg`),X(c,`accent-color: hsl(${W(t).v??``}, 100%, 50%);`),q(u,`${W(t).saturation??``}% saturation`),X(d,`accent-color: ${e??``}`)},[()=>f(W(t).v,50,W(t).saturation)]),Ni(a,()=>W(t).name,e=>W(t).name=e),Ni(c,()=>W(t).v,e=>W(t).v=e),Ni(d,()=>W(t).saturation,e=>W(t).saturation=e),K(e,r)});var re=R(ne,2);re.__click=()=>W(n).push({name:`new_color`,v:0,saturation:100,id:Aa()}),wa(I(re),{size:`20`}),ke(),O(re);var ie=R(re,4),ae=I(ie),oe=R(I(ae),2);Da(I(oe),{get value(){return W(p)},set value(e){F(p,e,!0)}}),O(oe),O(ae),O(ie);var S=R(ie,2),se=I(S),ce=I(se),le=I(ce);O(ce);var ue=R(ce,2);Ei(ue);var de=R(ue,2),fe=I(de);O(de);var pe=R(de,2);Ei(pe),O(se),O(S);var me=R(S,4),he=I(me),ge=I(he),_e=I(ge);O(ge);var ve=R(ge,2);Ei(ve);var ye=R(ve,2),be=I(ye);O(ye);var xe=R(ye,2);Ei(xe),O(he),O(me);var Se=R(me,2);Se.__click=c;var Ce=I(Se);Ca(I(Ce),{size:`20`}),O(Ce),ke(),O(Se);var we=R(Se,2);we.__click=o;var C=I(we);ga(I(C),{size:`20`}),O(C),ke(),O(we);var Te=R(we,2);Te.__click=v,Ta(I(Te),{size:`20`}),ke(),O(Te),O(x);var Ee=R(x,2),De=R(I(Ee),2);Y(De,17,()=>W(n),J,(e,t)=>{var n=Na();Y(n,20,()=>({length:10}),J,(e,n,r)=>{var i=Ma(),a=L(i),o=R(a,2);o.__click=()=>s(f(W(t).v,r,W(t).saturation)),z((e,t,n)=>{Z(a,`for`,e),X(a,`grid-area: c${r}; background-color: ${t??``};`),Z(o,`id`,n)},[()=>f(W(t).v,r,W(t).saturation),()=>f(W(t).v,r,W(t).saturation),()=>f(W(t).v,r,W(t).saturation)]),K(e,i)}),O(n),K(e,n)});var w=R(De,2),T=R(I(w),2);Y(T,21,()=>W(n),J,(e,t)=>{var n=Pa(),r=I(n,!0);O(n),z(e=>{X(n,e),q(r,W(t).name)},[()=>g(W(t))]),K(e,n)}),O(T),O(w);var E=R(w,2),D=R(I(E),2);Y(D,21,()=>W(n),J,(e,t)=>{var n=Fa(),r=I(n,!0);O(n),z(e=>{X(n,e),q(r,W(t).name)},[()=>h(W(t))]),K(e,n)}),O(D),O(E);var Oe=R(E,2),Ae=R(I(Oe),2);Y(Ae,21,()=>W(n),J,(e,t)=>{var n=Ia(),r=I(n,!0);O(n),z(e=>{X(n,e),q(r,W(t).name)},[()=>_(W(t))]),K(e,n)}),O(Ae),O(Oe);var je=R(Oe,4);Y(je,20,()=>({length:10}),J,(e,t,n)=>{let i=xt(()=>f(W(r).v,W(p)?9-n:n,W(r).saturation,d));var a=La(),o=L(a),c=R(o,2);c.__click=()=>s(W(i)),z(()=>{Z(o,`for`,W(i)),X(o,`grid-area: c${n}; background-color: ${W(i)??``}`),Z(c,`id`,W(i))}),K(e,a)}),O(je);var Me=R(je,4);Y(Me,20,()=>({length:10}),J,(e,t,n)=>{let r=xt(()=>f(W(i).v,W(p)?n:9-n,W(i).saturation,d));var a=Ra(),o=L(a),c=R(o,2);c.__click=()=>s(W(r)),z(()=>{Z(o,`for`,W(r)),X(o,`grid-area: c${n}; background-color: ${W(r)??``}`),Z(c,`id`,W(r))}),K(e,a)}),O(Me),O(Ee),O(b);var Ne=R(b,2);Ne.__click=()=>la(`/modules`);var Pe=I(Ne);xa(I(Pe),{size:`30`}),O(Pe),O(Ne),z((e,t)=>{q(le,`Base - ${W(r).v??``}`),X(ue,`accent-color: hsl(${W(r).v??``}, 100%, 50%);`),q(fe,`${W(r).saturation??``}% saturation`),X(pe,`accent-color: ${e??``}`),q(_e,`Base - ${W(i).v??``}`),X(ve,`accent-color: hsl(${W(i).v??``}, 100%, 50%);`),q(be,`${W(i).saturation??``}% saturation`),X(xe,`accent-color: ${t??``}`)},[()=>f(W(r).v,50,W(r).saturation,d),()=>f(W(i).v,50,W(i).saturation,d)]),Ni(ue,()=>W(r).v,e=>W(r).v=e),Ni(pe,()=>W(r).saturation,e=>W(r).saturation=e),Ni(ve,()=>W(i).v,e=>W(i).v=e),Ni(xe,()=>W(i).saturation,e=>W(i).saturation=e),K(e,y),j()}yr([`click`]);var Va=G(`<p class="svelte-ockje"> </p>`),Ha=G(`<div class="line svelte-ockje"></div>`),Ua=G(`<div class="barWrapper svelte-ockje"><div class="bar svelte-ockje"><div><p class="title svelte-ockje"> </p> <p class="svelte-ockje"> </p></div></div></div>`),Wa=G(`<p class="svelte-ockje"> </p>`),Ga=G(`<div class="barMain svelte-ockje"><div class="sideLabel svelte-ockje"><div class="spacer" style="height: 4px"></div> <!></div> <div class="barContainer svelte-ockje"><div class="bars svelte-ockje"><div class="lines svelte-ockje"><!> <div class="line svelte-ockje" style="opacity: 0.0;"></div></div> <!></div> <div class="labels svelte-ockje"></div></div></div>`);function Ka(e,t){A(t,!0);let n=e=>{let t=0;for(let n of e)n.value>t&&(t=n.value);return Math.ceil(t)},r=e=>{let t=0;for(;e>=1e3;)e/=1e3,t++;return`${e}${[``,`K`,`M`,`B`,`T`,`Q`,`Qu`,`Sx`,`Sp`,`Oc`,`No`][t]}`},i=e=>{let t=0;for(;e>=10;)e/=10,t++;e*=10;let n=e%10;return n-=n%2,n+=2,e=Math.floor(e/10),e*=10**t,e+=n*10**(t-1),e/4},a=xt(()=>n(t.points)),o=xt(()=>i(W(a)));var s=Ga(),c=I(s);Y(R(I(c),2),16,()=>({length:4}),J,(e,t,n)=>{var i=Va(),a=I(i,!0);O(i),z(e=>q(a,e),[()=>r(Math.round(W(o)*(n+1)))]),K(e,i)}),O(c);var l=R(c,2),u=I(l),d=I(u);Y(I(d),16,()=>({length:4}),J,(e,t)=>{K(e,Ha())}),ke(2),O(d),Y(R(d,2),17,()=>t.points,J,(e,n,r)=>{var i=Ua(),a=I(i),s=I(a),c=I(s),l=I(c,!0);O(c);var u=R(c,2),d=I(u,!0);O(u),O(s),O(a),O(i),z(()=>{X(a,`height: calc(${W(n).value/(W(o)*4)*100}%);`),pi(s,1,`barHidden ${r>t.points.length/2?`toLeft`:`toRight`}`,`svelte-ockje`),q(l,W(n).name),q(d,W(n).value)}),K(e,i)}),O(u);var f=R(u,2);Y(f,21,()=>t.points,J,(e,t)=>{var n=Wa(),r=I(n,!0);O(n),z(()=>q(r,W(t).name)),K(e,n)}),O(f),O(l),O(s),K(e,s),j()}function qa(e){let t=e-1;return t*t*t+1}function Ja(e){return e<.5?4*e*e*e:.5*(2*e-2)**3+1}function Ya(e){let t=typeof e==`string`&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||`px`]:[e,`px`]}function Xa(e,{delay:t=0,duration:n=400,easing:r=qa,x:i=0,y:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=c*(1-o),[d,f]=Ya(i),[p,m]=Ya(a);return{delay:t,duration:n,easing:r,css:(e,t)=>`
			transform: ${l} translate(${(1-e)*d}${f}, ${(1-e)*p}${m});
			opacity: ${c-u*t}`}}function Za(e,{delay:t=0,speed:n,duration:r,easing:i=Ja}={}){let a=e.getTotalLength(),o=getComputedStyle(e);return o.strokeLinecap!==`butt`&&(a+=parseInt(o.strokeWidth)),r===void 0?r=n===void 0?800:a/n:typeof r==`function`&&(r=r(a)),{delay:t,duration:r,easing:i,css:(e,t)=>`
			stroke-dasharray: ${a};
			stroke-dashoffset: ${t*a};
		`}}var Qa=G(`<div class="choice svelte-1iameg8"><div><p class="svelte-1iameg8"> </p></div></div>`),$a=G(`<div class="dropdownContent svelte-1iameg8"></div>`),eo=G(`<div class="dropDown svelte-1iameg8"><!> <p class="svelte-1iameg8"> </p> <!> <!></div>`);function to(e,t){A(t,!0);let n=P(!1),r=Q(t,`selected`,15),i=Q(t,`displayFunc`,3,e=>e),a=Q(t,`action`,3,e=>{}),o=e=>{F(n,!0),r(e),a()(e)};var s=eo();s.__click=()=>{F(n,!W(n))};var c=I(s),l=e=>{_a(e,{size:`16`})};Ir(c,e=>{t.stickLeft&&e(l)});var u=R(c,2),d=I(u,!0);O(u);var f=R(u,2),p=e=>{_a(e,{size:`16`})};Ir(f,e=>{t.stickLeft||e(p)});var m=R(f,2),h=e=>{var n=$a();Y(n,21,()=>t.options,J,(e,t)=>{var n=Qa();n.__click=()=>o(W(t));var a=I(n),s=I(a),c=I(s,!0);O(s),O(a),O(n),z(e=>{pi(a,1,`option ${r()==W(t)?`selected`:``}`,`svelte-1iameg8`),q(c,e)},[()=>i()(W(t))]),K(e,n)}),O(n),z(()=>X(n,`${t.stickLeft?`left`:`right`}: 0px;`)),ti(3,n,()=>Xa,()=>({x:50,duration:250})),K(e,n)};Ir(m,e=>{W(n)&&e(h)}),O(s),z(e=>q(d,e),[()=>i()(r())]),K(e,s),j()}yr([`click`]);var no=G(`<div class="box svelte-5gktaz"></div> <p class="display svelte-5gktaz"> </p>`,1),ro=G(`<div class="pieChart svelte-5gktaz"><div class="container svelte-5gktaz"></div></div>`);function io(e,t){A(t,!0),Q(t,`displayFunc`,3,e=>e);let n=e=>e/180*Math.PI,r=e=>{let t=Math.sin(-n(e)+n(90));return{x:Math.cos(-n(e)+n(90))*50+50,y:100-(t*50+50),quad:Math.floor((e-1e-6)/90)}},i=e=>{let t=r(360*e),n=`50% 50%, 50% 0%`,i=!1;if(t.quad==0){for(let e=0;e<4;e++)n+=`, ${t.x}% 0`;i=!0}else n+=`, 100% 0`;if(t.quad>=1)if(t.quad==1){for(let e=0;e<3;e++)n+=`, 100% ${t.y}%`;i=!0}else n+=`, 100% 100%`;if(t.quad>=2)if(t.quad==2&&!i){for(let e=0;e<2;e++)n+=`, ${t.x}% 100%`;i=!0}else n+=`, 0 100%`;return t.quad>=3&&(t.quad==3&&!i?(n+=`, 0 ${t.y}%`,i=!0):n+=`, 0 0`),n+=`, ${t.x}% ${t.y}%`,`clip-path: polygon(${n});`},a=(e,t)=>{let n=o(e),r=i(e[t].value/n),a=0;for(let r=0;r<t;r++){let t=e[r].value/n;a+=360*t}return`${r} background-color: var(--main${t+1}); rotate: ${a}deg;`},o=e=>{let t=0;for(let n of e)t+=n.value;return t};var s=ro(),c=I(s);Y(c,21,()=>t.points,J,(e,n,r)=>{var i=no(),o=L(i),s=R(o,2),c=I(s,!0);O(s),z(e=>{X(o,e),q(c,W(n).name)},[()=>a(t.points,r)]),K(e,i)}),O(c),O(s),K(e,s),j()}var ao=Dr(`<path></path>`),oo=G(`<div class="mainLines svelte-1g4kjfq"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-1g4kjfq"></svg></div>`);function so(e,t){A(t,!0);let n=P(!1);$i(()=>{F(n,!0)});let r=(e,t)=>{let n=$(4e3)+500,r=$(3)+1,i=$(4),a=$(e),o=a+($(100)-50),s=!1;$(1)==1&&(s=!0);let c=$(4)+1;return{size:r,path:`M${a}, -10 C${e/2+$(e/c)/r*(s?-1:1)}, ${t/2+$(t/c)/r} ${e/2+$(e/c)/r*(s?1:-1)}, ${t/2+$(t/c)/r-50} ${o}, ${t}`,time:n,id:Aa(),color:i}},i=Rt([]),a=P(0),o=P(0);$i(()=>{new ResizeObserver(e=>{for(let t of e)F(a,t.contentRect.width,!0),F(o,t.contentRect.height,!0)}).observe(W(s))});let s=P(null);setInterval(()=>{i.length>10&&i.splice(0,1),i.push(r(W(a),W(o)))},1e3);var c=oo(),l=I(c);Y(l,23,()=>i,e=>e.id,(e,n)=>{var r=ao();z(()=>{Z(r,`d`,W(n).path),Z(r,`stroke-width`,9/W(n).size),X(r,`z-index: ${3-W(n).size}; color: var(--${t.colors[W(n).color]??``});`)}),ti(3,r,()=>Za,()=>({duration:W(n).time})),K(e,r)}),O(l),O(c),Li(c,e=>F(s,e),()=>W(s)),z(()=>{Z(l,`viewBox`,`0 0 ${W(a)??``} ${W(o)??``}`),Z(l,`width`,W(a)),Z(l,`height`,W(o))}),K(e,c),j()}var co=G(`<div class="wrapper svelte-ywc6gn" role="textbox" tabindex="0"><div contenteditable="true" role="textbox" class="p svelte-ywc6gn"></div></div>`);function lo(e,t){A(t,!0);let n=Q(t,`value`,15),r=Q(t,`placeholder`,3,`Placeholder...`),i=Q(t,`style`,3,``),a=Q(t,`fontSize`,3,20),o=Q(t,`padding`,3,20),s=e=>{e.key==`Backspace`&&setTimeout(()=>{n().length==1&&n()==`
`&&n(``)})},c;function l(){c.focus()}var u=co();u.__click=()=>l();var d=I(u);d.__keydown=s,Li(d,e=>c=e,()=>c),O(u),z(()=>{X(u,i()),X(d,`font-size: calc(${a()??``}px + var(--font-size-modifier)); padding: ${o()??``}px;`),Z(d,`data-placeholder`,r())}),Ri(`innerText`,d,n),K(e,u),j()}yr([`click`,`keydown`]);var uo=Dr(`<path></path>`),fo=G(`<div class="mainLines svelte-1fdnbs3"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-1fdnbs3"></svg></div>`);function po(e,t){A(t,!0);let n=P(!1);$i(()=>{F(n,!0)});let r=(e,n)=>{let r=$(t.speed)+500,i=$(3)+1,a=$(4),o=$(2)==0,s=$(o?e:n);return{size:i,path:`M ${o?s:-10}, ${o?-10:s} L${o?n+s:n-s}, ${n+10}`,time:r,id:Aa(),color:a}},i=Rt([]),a=P(0),o=P(0);$i(()=>{new ResizeObserver(e=>{for(let t of e)F(a,t.contentRect.width,!0),F(o,t.contentRect.height,!0)}).observe(W(s))});let s=P(null);setInterval(()=>{i.length>t.number&&i.splice(0,1),i.push(r(W(a),W(o)))},1e3);var c=fo(),l=I(c);Y(l,23,()=>i,e=>e.id,(e,n)=>{var r=uo();z(()=>{Z(r,`d`,W(n).path),Z(r,`stroke-width`,9/W(n).size),X(r,`z-index: ${3-W(n).size}; color: var(--${t.colors[W(n).color]??``});`)}),ti(3,r,()=>Za,()=>({duration:W(n).time})),K(e,r)}),O(l),O(c),Li(c,e=>F(s,e),()=>W(s)),z(()=>{Z(l,`viewBox`,`0 0 ${W(a)??``} ${W(o)??``}`),Z(l,`width`,W(a)),Z(l,`height`,W(o))}),K(e,c),j()}var mo=Dr(`<path></path>`),ho=G(`<div class="mainLines svelte-po6ebd"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-po6ebd"></svg></div>`);function go(e,t){A(t,!0);let n=P(!1);$i(()=>{F(n,!0)});let r=(e,n)=>{let r=$(t.speed)+500,i=$(3)+1,a=$(4),o=$(e),s=$(n),c=$(4)+1,l=`M ${o}, ${s} `;for(let t=0;t<c;t++){let t=$(e),r=$(e),i=$(n),a=$(n);l+=`S${t}, ${i} ${r}, ${a} `}return{size:i,path:l,time:r,id:Aa(),color:a}},i=Rt([]),a=P(0),o=P(0);$i(()=>{new ResizeObserver(e=>{for(let t of e)F(a,t.contentRect.width,!0),F(o,t.contentRect.height,!0)}).observe(W(s))});let s=P(null);setInterval(()=>{i.length>t.number&&i.splice(0,1),i.push(r(W(a),W(o)))},1e3);var c=ho(),l=I(c);Y(l,23,()=>i,e=>e.id,(e,n)=>{var r=mo();z(()=>{Z(r,`d`,W(n).path),Z(r,`stroke-width`,9/W(n).size),X(r,`z-index: ${3-W(n).size}; color: var(--${t.colors[W(n).color]??``});`)}),ti(3,r,()=>Za,()=>({duration:W(n).time})),K(e,r)}),O(l),O(c),Li(c,e=>F(s,e),()=>W(s)),z(()=>{Z(l,`viewBox`,`0 0 ${W(a)??``} ${W(o)??``}`),Z(l,`width`,W(a)),Z(l,`height`,W(o))}),K(e,c),j()}var _o=G(`<div class="uiMain"><div class="gridBox svelte-1ub297s"><div class="card bb2 svelte-1ub297s" style="grid-area: box-1;"><div class="title svelte-1ub297s"><p>Global Code</p></div> <p>Create a file called global.svelte.js, copy and paste!</p> <button class="btn main"><!> Copy Code</button></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-2;"><div class="title svelte-1ub297s"><p>DropDown</p></div> <p>Right Dropdown</p> <!> <p>Left Dropdown</p> <!> <p>Actioned Dropdown</p> <!> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-3;"><div class="title svelte-1ub297s"><p>Bar Graph</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-4;"><div class="title svelte-1ub297s"><p>Splash</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-5;"><div class="title svelte-1ub297s"><p>Pie Chart</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-6;"><div class="title svelte-1ub297s"><p>Text Area</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-7;"><div class="title svelte-1ub297s"><p>Wind</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-8;"><div class="title svelte-1ub297s"><p>Squiggles</p></div> <div class="wrapper svelte-1ub297s"><!></div> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-9;"><div class="title svelte-1ub297s"><p>Toggle</p></div> <p>Simple Toggle</p> <!> <p>Actioned Toggle</p> <!> <div class="buttons svelte-1ub297s"><button class="svelte-1ub297s"><!></button></div></div> <div class="card bb2 svelte-1ub297s" style="grid-area: box-a;"><div class="title svelte-1ub297s"><p>Custom Draw</p></div> <p>Create a folder called utils next to your modules, and create customDraw.js. Put this in there. Edit placeholder anim code, and set in to be draw, and out to be customDraw.</p> <button class="btn main"><!> Copy Code</button></div></div></div> <button class="moveButton bb3"><div class="svgWrapper"><!></div></button>`,1);function vo(e,t){A(t,!0);let n=P(!1),r=P(!1),i=P(`Option 1`),a=P(`Option 2`),o=P(`Option 3`),s=P(Rt([{name:`Item 1`,value:100},{name:`Item 2`,value:71},{name:`Item 3`,value:26}])),c=P(``),l=async e=>{await navigator.clipboard.writeText(e),alert(`Code Copied`)},u=[`main5`,`main6`,`main7`,`text1`];var d=_o(),f=L(d),p=I(f),m=I(p),h=R(I(m),4);h.__click=()=>l(`
export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}
 
const encoder = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=_+/?.>,<!@#$%^&*()~\`";

export const random = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}

export const getID = () => {
    let id = "";
    for(let i = 0; i < 15; i++){
        id += encoder[random(0, encoder.length - 1)];
    }

    return id;
}`),ya(I(h),{size:`20`}),ke(),O(h),O(m);var g=R(m,2),_=R(I(g),4);to(_,{options:[`Option 1`,`Option 2`,`Option 3`],stickLeft:!1,get selected(){return W(i)},set selected(e){F(i,e,!0)}});var v=R(_,4);to(v,{options:[`Option 1`,`Option 2`,`Option 3`],stickLeft:!0,get selected(){return W(a)},set selected(e){F(a,e,!0)}});var y=R(v,4);to(y,{options:[`Option 1`,`Option 2`,`Option 3`],stickLeft:!1,action:e=>{alert(`You selected `+e)},get selected(){return W(o)},set selected(e){F(o,e,!0)}});var b=R(y,2),x=I(b);x.__click=()=>l(`<script>

  import { ChevronDown } from '@lucide/svelte';
  import { fly } from 'svelte/transition';

  let expanded = $state(false);
  let { selected = $bindable(), options, stickLeft, displayFunc = (a) => {return a}, action = (a) => {} } = $props();


  const click = (a) => {
    expanded = true;
    selected = a;
    action(a);
  }

<\/script>

<!-- svelte-ignore a11y_no_static_element_interactions -->

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="dropDown"
    onclick={() => {expanded = !expanded}}
  >
    {#if stickLeft }
      <ChevronDown size=16 />
    {/if}
    <p>{displayFunc(selected)}</p>

    {#if !stickLeft }
      <ChevronDown size=16 />
    {/if}

    {#if expanded} 
      
      <div class="dropdownContent" style="{stickLeft ? "left" : "right"}: 0px;"
        transition:fly={{ x: 50, duration: 250 }}
      >
        {#each options as a}
            <div class="choice"
              onclick={() => click(a)}
            >
              <div class="option {selected == a ? "selected" : ""}">
                <p>{displayFunc(a)}</p>
              </div>
            </div>
        {/each}
      </div>

    {/if}

  </div>




<style>

  p {
    font-size: 16px;
    margin: 0px;
    color: var(--text1);
  }

  .option {
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    color: var(--text1);
    transition: background-color .25s ease;
  }

  .selected {
    background-color: var(--bg3);
  }

  .option:hover {
    background-color: var(--bg3);
  }

  .choice {
    cursor: pointer;
    box-sizing: border-box;
  }

  .choice p {
    color: var(--text1);
    transition: color .25s ease;
  }

  .dropDown {
    width: fit-content;
    height: fit-content;
    height: 45px;
    padding: 10px;
    background-color: var(--bg2);
    border-radius: var(--border-radius);
    cursor: pointer;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    display: flex;
    cursor: pointer;
    position: relative;
    border: 1px solid var(--bg3);
    box-sizing: border-box;
    color: var(--text1);
    transition: background-color .25s ease;
  }

  .dropDown:hover {
    background-color: var(--bg3);
  }

  .dropdownContent {
    position: absolute;
    top: calc(100% - 10px);
    background-color: var(--bg2);
    box-sizing: border-box;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    padding: 10px;
    z-index: 100;
    width: fit-content;
    min-width: 150px;
    border: 1px solid var(--bg3);

  }

  .dropdownContent p {
    text-wrap: nowrap;
  }

</style>`),ya(I(x),{size:`20`}),O(x),O(b),O(g);var ee=R(g,2),te=R(I(ee),2);Ka(I(te),{get points(){return W(s)},set points(e){F(s,e,!0)}}),O(te);var ne=R(te,2),re=I(ne);re.__click=()=>l(`<script>

let { points = $bindable()} = $props();

const getMax = (points) => {
  let max = 0;
  for(let i of points){
    if(i.value > max){
      max = i.value;
    }
  }
  return max;
}

let max = $derived(getMax(points))


<\/script>

<div class="barMain">

{#each points as p, i}
  <div class="barWrapper">
    <div class="bar" style="height: {(p.value / max) * 80}%;">
      <div class="barHidden {i > (points.length / 2) ? "toLeft" : "toRight"}">
        <p class='title'>{p.name}</p>
        <p>\${p.value}</p>
      </div>
    </div>
  </div>

{/each}

</div>

<style>
  .barMain {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    color: var(--text1);
    box-sizing: border-box;
    gap: 5px;    

  }

  .barMain:hover .bar {
    opacity: 0.5;
  }

  .bar {
    width: 100%;
    margin-top: auto;
    background-color: var(--main6);
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }

  .barWrapper {
    width: 100%;
    display: flex;
    height: 100%;
    cursor: pointer;
    position: relative;
  }

  .barWrapper:hover .bar {
    opacity: 1.0 !important;
  }


  .barWrapper:hover .bar .barHidden {
    visibility: visible !important;
  }

  .barHidden {
    background-color: var(--main6);
    position: absolute;
    visibility: hidden;
    width: fit-content;
    top: -40px;
    padding: 4px 10px 4px 10px;
    font-size: 12px;
    z-index: 10;
    border-radius: 10px;
  }

  .barHidden p {
    text-wrap: nowrap;
  }

  .toRight {
    left: 50%;
  }

  .toLeft {
    right: 50%;
  }


</style>`),ya(I(re),{size:`20`}),O(re),O(ne),O(ee);var ie=R(ee,2),ae=R(I(ie),2);so(I(ae),{get colors(){return u}}),O(ae);var oe=R(ae,2),S=I(oe);S.__click=()=>l(`<script>
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";
    import { getRandomInt, getID } from "../../global.svelte";
    let show = $state(false);

    onMount(() => {
        show = true;
    })

    const getRandomCurve = (width, height) => {
        const time = getRandomInt(4000) + 500;
        const size = getRandomInt(3) + 1;
        const color = getRandomInt(4);
        const startX = getRandomInt(width)
        const endX = startX + (getRandomInt(100) - 50);
        let firstIsLeft = false;
        if(getRandomInt(1) == 1){
            firstIsLeft = true;
        }

        const v = getRandomInt(4) + 1;

        const f1X = (width / 2) + ((getRandomInt(width / v)) / size) * (firstIsLeft ? -1 : 1);
        const f1Y = (height / 2) + ((getRandomInt(height / v)) / size);

        const f2X = (width / 2) + ((getRandomInt(width / v)) / size) * (firstIsLeft ? 1 : -1);
        const f2Y = (height / 2) + ((getRandomInt(height / v)) / size) - 50;

        let output = \`M\${startX}, -10 C\${f1X}, \${f1Y} \${f2X}, \${f2Y} \${endX}, \${height}\`;
        return {size: size, path: output, time: time, id: getID(), color: color};
    }

    let paths = $state([]);

    let width = $state(0);
    let height = $state(0);

    onMount(() => {

        const ro = new ResizeObserver((entries) => {

            for(let i of entries){
                width = i.contentRect.width;
                height = i.contentRect.height;
            }
        });

        ro.observe(boxHandle);

    })

    let boxHandle = $state(null);

    setInterval(() => {
        if(paths.length > 10){
            paths.splice(0, 1);
        }
        paths.push(getRandomCurve(width, height))

    }, 1000);

    const colors = ["main1", "main2", "main3", "text1"]

<\/script>

<div class="mainLines" bind:this={boxHandle}>
    <svg viewBox="0 0 {width} {height}" width='{width}' height='{height}' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        {#each paths as p, i (p.id)}
            <path d="{p.path}" stroke-width="{9 / p.size}" style='z-index: {3 - p.size}; color: var(--{colors[p.color]});' 
                transition:draw={{ duration: p.time }}
            />
        {/each}
    </svg>

</div>

<style>

    .mainLines {
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .mainLines svg {
        width: 100%;
        height: 100%;
    }
</style>`),ya(I(S),{size:`20`}),O(S),O(oe),O(ie);var se=R(ie,2),ce=R(I(se),2);io(I(ce),{get points(){return W(s)},set points(e){F(s,e,!0)}}),O(ce);var le=R(ce,2),ue=I(le);ue.__click=()=>l(`
<script>
let { points = $bindable(), displayFunc = (a) => a} = $props();

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
}

const calculatePoints = (angle) => {
  let p1 = Math.sin(-degToRad(angle) + degToRad(90));
  let p2 = Math.cos(-degToRad(angle) + degToRad(90));
  return {
    x: (p2 * 50) + 50,
    y: 100 - ((p1 * 50) + 50),
    quad: Math.floor((angle - 0.000001) / 90)
  }
}


const getClip = (percentage) => {
  let data = calculatePoints(360 * percentage);
  let output = "50% 50%, 50% 0%";

  let done = false;

  if(data.quad == 0){
    for(let i = 0; i < 4; i++){
      output += \`, \${data.x}% 0\`;
    }
    done = true;
  } else {
    output += ", 100% 0"
  }

  if(data.quad >= 1){
    if(data.quad == 1){
      for(let i = 0; i < 3; i++){
        output += \`, 100% \${data.y}%\`;
      }
      done = true;
    } else {
      output += ", 100% 100%"
    }
  }
 
  if(data.quad >= 2){
    if(data.quad == 2 && !done){
      for(let i = 0; i < 2; i++){
        output += \`, \${data.x}% 100%\`;
      }
      done = true;
    } else {
      output += ", 0 100%"
    }
  }

  if(data.quad >= 3){
    if(data.quad == 3 && !done){
      output += \`, 0 \${data.y}%\`;
      done = true;
    } else {
      output += ", 0 0"
    }
  }

  output += \`, \${data.x}% \${data.y}%\`
  return \`clip-path: polygon(\${output});\`;
}

const getCss = (points, index) => {
  let total = sum(points);
  let percentage = (points[index].value / total);
  let css = getClip(percentage);
  let angle = 0;
  for(let i = 0; i < index; i++){
    let percentage = points[i].value / total;
    angle += 360 * percentage;
  }
  return \`\${css} background-color: var(--main\${index + 1}); rotate: \${angle}deg;\`

}

const sum = (points) => {
  let total = 0;
  for(let i of points){
    total += i.value;
  }

  return total;
}

<\/script>

<div class="pieChart">
  <div class="container">
    {#each points as p, i}
      <div class="box" style="{getCss(points, i)}">
      </div>
      <p class='display'>{p.name}</p>
    {/each}
  </div>
</div>

<style>

  .container {
    position: relative;
    box-sizing: border-box;
    clip-path: circle(50% at 50% 50%);
    aspect-ratio: 1;
    width: 100%;
    height: 100%;

  }

  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center center;
  }

  .box:hover {
    opacity: 1.0 !important;
  }

  .pieChart {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    color: var(--text1);
    padding: 20px;
    box-sizing: border-box;
    background: none;
  }

  .pieChart:hover .box {
    opacity: 0.5;
  }

  .display {
    rotate: 0deg !important;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.0;
    z-index: 10;
  }

  .box:hover + .display {
    opacity: 1.0 !important;
  }

</style>`),ya(I(ue),{size:`20`}),O(ue),O(le),O(se);var de=R(se,2),fe=R(I(de),2);lo(I(fe),{get value(){return W(c)},set value(e){F(c,e,!0)}}),O(fe);var pe=R(fe,2),me=I(pe);me.__click=()=>l(`<script>
    // this is my best attempt at working around the lack of support for field-sizing: content; on non chromium platforms

    let {value = $bindable(), placeholder = "Placeholder...", style="", fontSize = 20, padding = 20} = $props();

    const handleStroke = (e) => {
        // this is so stupid and I hate it
        // webkit needs to get their stuff together because there is no reason I should be making my own function to DELETE TEXT
        if (e.key == "Backspace") {
            setTimeout(() => {
                if (value.length == 1) {
                    if (value == "
") {
                        value = "";
                    }
                }
            });
        }
    };

    let focusElement;

    function focusEditable() {
        focusElement.focus();
    }

<\/script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
    class="wrapper"
    role="textbox"
    tabindex="0"
    style={style} 
    onclick={() => focusEditable()}
>

    <!-- svelte-ignore a11y_interactive_supports_focus -->
    <div
        contenteditable="true"
        style="font-size: calc({fontSize}px + var(--font-size-modifier)); padding: {padding}px;"
        role="textbox"
        bind:innerText={value}
        data-placeholder="{placeholder}"
        class="p"
        onkeydown={handleStroke}
        bind:this={focusElement}

    ></div>
</div>

<style>
    .wrapper {
        position: relative;
        width: fit-content;
        height: fit-content;
        display: flex;
        min-width: 100%;
    }

    .p {
        display: flex;
        box-sizing: border-box;
        white-space: pre-wrap;
        text-align: left;
        position: relative;
        flex-direction: column;
        resize: none;
        outline: none !important;
        min-width: 1px;
        min-height: 1px;
        transform: none;
        color: var(--text1);
    }

    .p:empty:before {
        content: attr(data-placeholder);
        opacity: 0.5;
        pointer-events: none;
    }
</style>`),ya(I(me),{size:`20`}),O(me),O(pe),O(de);var he=R(de,2),ge=R(I(he),2);po(I(ge),{get colors(){return u},number:20,speed:2e3}),O(ge);var _e=R(ge,2),ve=I(_e);ve.__click=()=>l(`
<script>
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";
    import { getRandomInt, getID } from "../../global.svelte";
    let show = $state(false);

    let { colors, number, speed } = $props();

    onMount(() => {
        show = true;
    })

    const getRandomCurve = (width, height) => {
        const time = getRandomInt(speed) + 500;
        const size = getRandomInt(3) + 1;
        const color = getRandomInt(4);
        let top = getRandomInt(2) == 0;
        const start = getRandomInt(top ? width : height)

        let output = \`M \${top ? start : -10 }, \${top ? -10 : start} L\${top ? height + start : height - start}, \${height + 10}\`;
        return {size: size, path: output, time: time, id: getID(), color: color};
    }

    let paths = $state([]);

    let width = $state(0);
    let height = $state(0);

    onMount(() => {

        const ro = new ResizeObserver((entries) => {

            for(let i of entries){
                width = i.contentRect.width;
                height = i.contentRect.height;
            }
        });

        ro.observe(boxHandle);

    })

    let boxHandle = $state(null);

    setInterval(() => {
        if(paths.length > number){
            paths.splice(0, 1);
        }
        paths.push(getRandomCurve(width, height))

    }, 1000);


<\/script>

<div class="mainLines" bind:this={boxHandle}>
    <svg viewBox="0 0 {width} {height}" width='{width}' height='{height}' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        {#each paths as p, i (p.id)}
            <path d="{p.path}" stroke-width="{9 / p.size}" style='z-index: {3 - p.size}; color: var(--{colors[p.color]});' 
                transition:draw={{ duration: p.time }}
            />
        {/each}
    </svg>

</div>

<style>

    .mainLines {
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .mainLines svg {
        width: 100%;
        height: 100%;
    }
</style>`),ya(I(ve),{size:`20`}),O(ve),O(_e),O(he);var ye=R(he,2),be=R(I(ye),2);go(I(be),{get colors(){return u},number:10,speed:5e3}),O(be);var xe=R(be,2),Se=I(xe);Se.__click=()=>l(`<script>
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";
    import { getRandomInt, getID } from "../../global.svelte";
    let show = $state(false);

    let { colors, number, speed } = $props();

    onMount(() => {
        show = true;
    })

    const getRandomCurve = (width, height) => {
        const time = getRandomInt(speed) + 500;
        const size = getRandomInt(3) + 1;
        const color = getRandomInt(4);
        const startX = getRandomInt(width);
        const startY = getRandomInt(height);
        const loops = getRandomInt(4) + 1;
        let output = \`M \${startX}, \${startY} \`
        for(let i = 0; i < loops; i++){
            let x1 = getRandomInt(width);
            let x2 = getRandomInt(width);
            let y1 = getRandomInt(height);
            let y2 = getRandomInt(height);

            output += \`S\${x1}, \${y1} \${x2}, \${y2} \`
        }
        return {size: size, path: output, time: time, id: getID(), color: color};
    }

    let paths = $state([]);

    let width = $state(0);
    let height = $state(0);

    onMount(() => {

        const ro = new ResizeObserver((entries) => {

            for(let i of entries){
                width = i.contentRect.width;
                height = i.contentRect.height;
            }
        });

        ro.observe(boxHandle);

    })

    let boxHandle = $state(null);

    setInterval(() => {
        if(paths.length > number){
            paths.splice(0, 1);
        }
        paths.push(getRandomCurve(width, height))

    }, 1000);


<\/script>

<div class="mainLines" bind:this={boxHandle}>
    <svg viewBox="0 0 {width} {height}" width='{width}' height='{height}' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        {#each paths as p, i (p.id)}
            <path d="{p.path}" stroke-width="{9 / p.size}" style='z-index: {3 - p.size}; color: var(--{colors[p.color]});' 
                transition:draw={{ duration: p.time }}
            />
        {/each}
    </svg>

</div>

<style>

    .mainLines {
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .mainLines svg {
        width: 100%;
        height: 100%;
    }
</style>`),ya(I(Se),{size:`20`}),O(Se),O(xe),O(ye);var Ce=R(ye,2),we=R(I(Ce),4);Da(we,{get value(){return W(n)},set value(e){F(n,e,!0)}});var C=R(we,4);Da(C,{action:()=>{alert(`This toggle has an action!`)},get value(){return W(r)},set value(e){F(r,e,!0)}});var Te=R(C,2),Ee=I(Te);Ee.__click=()=>l(`<script>

let { value = $bindable(), action = () => {}} = $props();

let click = () => {
    value = !value; 
    action();
}

<\/script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="main" onclick={click} style="{value ? "background-color: var(--main6);" : ""}">
    <div class="toggleDot" style='left: {value ? "calc(100% - 25px);" : "5px;"}'></div>
</div>

<style>

    .toggleDot {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        position: absolute;
        background-color: white;
        transition: left .25s ease;
    }

    .main {
        min-width: 60px;
        height: 30px;
        padding: 10px;
        background-color: var(--bg2);
        border-radius: 100px;
        cursor: pointer;
        align-items: center;
        gap: 10px;
        flex-direction: row;
        display: flex;
        cursor: pointer;
        position: relative;
        border: 1px solid var(--bg4);
        box-sizing: border-box;
        color: var(--text1);
        transition: background-color .25s ease;
    }
</style>`),ya(I(Ee),{size:`20`}),O(Ee),O(Te),O(Ce);var De=R(Ce,2),w=R(I(De),4);w.__click=()=>l(`function cubic_in_out(t) {
	return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}


// @ts-ignore
export function customDraw(node, { delay = 0, speed, duration, easing = cubic_in_out } = {}) {
	let len = node.getTotalLength();
	const style = getComputedStyle(node);
	if (style.strokeLinecap !== 'butt') {
		len += parseInt(style.strokeWidth);
	}
	if (duration === undefined) {
		if (speed === undefined) {
			duration = 800;
		} else {
			duration = len / speed;
		}
	} else if (typeof duration === 'function') {
		duration = duration(len);
	}
	return {
		delay,
		duration,
		easing,
		css: (_, u) => \`
			stroke-dasharray: \${len};
			stroke-dashoffset: \${u * len * -1 };
		\`
	};
}`),ya(I(w),{size:`20`}),ke(),O(w),O(De),O(p),O(f);var T=R(f,2);T.__click=()=>la(`/cssOnly`);var E=I(T);va(I(E),{size:`30`}),O(E),O(T),K(e,d),j()}yr([`click`]);var yo=G(`<div class="uiMain svelte-6rlwz4"><div class="gridBox svelte-6rlwz4"><div class="card bb2 svelte-6rlwz4" style="grid-area: box-1"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Block Quote</p></div> <p class="bq svelte-6rlwz4">This is an example of a block quote</p></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-2"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Loading</p></div> <div class="svgWrapper loading svelte-6rlwz4"><!></div> <p class="loading svelte-6rlwz4">Apply to anything</p></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-3"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Shake</p></div> <button class="shake btn bb3 svelte-6rlwz4">Hover Me!</button></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-4"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Buttons</p></div> <button class="btn bb1 svelte-6rlwz4">bb1</button> <button class="btn bb2 svelte-6rlwz4">bb2</button> <button class="btn bb3 svelte-6rlwz4">bb3</button> <button class="btn main svelte-6rlwz4">main</button> <button class="btn fail svelte-6rlwz4">fail</button></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-5"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Wiggle</p></div> <button class="wiggle btn bb3 svelte-6rlwz4">Hover Me!</button></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-6"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Badges</p></div> <div class="horizontal svelte-6rlwz4"><p class="bdg bb1 svelte-6rlwz4">bb1</p> <p class="bdg bb2 svelte-6rlwz4">bb2</p> <p class="bdg bb3 svelte-6rlwz4">bb3</p> <p class="bdg main svelte-6rlwz4">main</p> <p class="bdg fail svelte-6rlwz4">fail</p></div></div> <div class="card bb2 svelte-6rlwz4" style="grid-area: box-7"><div class="title svelte-6rlwz4"><p class="svelte-6rlwz4">Tooltips</p></div> <button class="btn main tt svelte-6rlwz4"><div class="toolTip main svelte-6rlwz4"><p class="svelte-6rlwz4">Use a p element inside</p></div> <div class="arrow main svelte-6rlwz4"></div> Hover me!</button></div></div></div> <button class="moveButton bb3 svelte-6rlwz4"><div class="svgWrapper svelte-6rlwz4"><!></div></button>`,1);function bo(e,t){A(t,!1),zi();var n=yo(),r=L(n),i=I(r),a=R(I(i),2),o=R(I(a),2);Sa(I(o),{size:`20`}),O(o),ke(2),O(a),ke(10),O(i),O(r);var s=R(r,2);s.__click=()=>la(`/`);var c=I(s);Ca(I(c),{size:`30`}),O(c),O(s),K(e,n),j()}yr([`click`]);const xo={"/":Ba,"/modules":vo,"/cssOnly":bo};var So=G(`<div class="globalArea svelte-1n46o8q"><!></div>`);function Co(e){var t=So();da(I(t),{get routes(){return xo}}),O(t),K(e,t)}jr(Co,{target:document.getElementById(`app`)});