import{S as A,i as D,s as F,w as E,k as _,e as h,t as L,x as N,m as y,c as b,a as v,h as O,d as l,b as g,y as q,g as x,M as u,q as B,o as H,B as I,N as M}from"../../chunks/index-1b46dd35.js";import{f as T}from"../../chunks/settings-service-12fe3839.js";import{q as U}from"../../chunks/index.es-3c939ced.js";import{l as V}from"../../chunks/route-for-789b7fae.js";import{B as j}from"../../chunks/button-06e329ec.js";import{p as z}from"../../chunks/stores-8b8b27f9.js";import{g as G}from"../../chunks/navigation-6709cf39.js";import{N as J,H as K}from"../../chunks/hamburger-header-00d5f00e.js";import"../../chunks/route-for-api-5a4093aa.js";import"../../chunks/index-92abd382.js";import"../../chunks/notifications-b5b1bba1.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-68e98102.js";import"../../chunks/index-3685084d.js";import"../../chunks/data-converter-config-b8039691.js";import"../../chunks/persist-store-4ece08a3.js";import"../../chunks/is-http-1ac902cc.js";import"../../chunks/tooltip-2323b73a.js";import"../../chunks/copyable-d34764a0.js";import"../../chunks/modal-74f054d2.js";import"../../chunks/index-d92eef96.js";function Q(i){let e;return{c(){e=L("Continue to SSO")},l(a){e=O(a,"Continue to SSO")},m(a,s){x(a,e,s)},d(a){a&&l(e)}}}function R(i){let e,a,s,c,n,o,S,k,f,w,C,p,m,$;return e=new J({props:{href:"/",user:void 0}}),s=new K({props:{href:"/",user:void 0}}),m=new j({props:{dataCy:"login-button",login:!0,icon:U,$$slots:{default:[Q]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){E(e.$$.fragment),a=_(),E(s.$$.fragment),c=_(),n=h("section"),o=h("h1"),S=L("Welcome back."),k=_(),f=h("p"),w=L("Let's get you signed in."),C=_(),p=h("div"),E(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),a=y(t),N(s.$$.fragment,t),c=y(t),n=b(t,"SECTION",{class:!0});var r=v(n);o=b(r,"H1",{class:!0,"data-cy":!0});var d=v(o);S=O(d,"Welcome back."),d.forEach(l),k=y(r),f=b(r,"P",{class:!0,"data-cy":!0});var P=v(f);w=O(P,"Let's get you signed in."),P.forEach(l),C=y(r),p=b(r,"DIV",{class:!0});var W=v(p);N(m.$$.fragment,W),W.forEach(l),r.forEach(l),this.h()},h(){g(o,"class","text-8xl font-semibold"),g(o,"data-cy","login-title"),g(f,"class","my-7"),g(f,"data-cy","login-info"),g(p,"class","mx-auto"),g(n,"class","text-center my-[20vh]")},m(t,r){q(e,t,r),x(t,a,r),q(s,t,r),x(t,c,r),x(t,n,r),u(n,o),u(o,S),u(n,k),u(n,f),u(f,w),u(n,C),u(n,p),q(m,p,null),$=!0},p(t,[r]){const d={};r&8&&(d.$$scope={dirty:r,ctx:t}),m.$set(d)},i(t){$||(B(e.$$.fragment,t),B(s.$$.fragment,t),B(m.$$.fragment,t),$=!0)},o(t){H(e.$$.fragment,t),H(s.$$.fragment,t),H(m.$$.fragment,t),$=!1},d(t){I(e,t),t&&l(a),I(s,t),t&&l(c),t&&l(n),I(m)}}}const bt=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function X(i,e,a){let s;M(i,z,o=>a(1,s=o));let{settings:c}=e;const n=()=>{G(V({settings:c,searchParams:s.url.searchParams,originUrl:s.url.origin}))};return i.$$set=o=>{"settings"in o&&a(0,c=o.settings)},[c,s,n]}class vt extends A{constructor(e){super(),D(this,e,X,R,F,{settings:0})}}export{vt as default,bt as load};
