import{S as A,i as D,s as F,w as C,k as _,e as d,t as L,x as N,m as h,c as b,a as v,h as O,d as f,b as x,y as q,g as y,M as l,q as B,o as H,B as I,N as M}from"../../chunks/index-1b46dd35.js";import{f as T}from"../../chunks/settings-service-12fe3839.js";import{q as U}from"../../chunks/index.es-3c939ced.js";import{l as V}from"../../chunks/route-for-789b7fae.js";import{B as j}from"../../chunks/button-06e329ec.js";import{p as z}from"../../chunks/stores-8b8b27f9.js";import{g as G}from"../../chunks/navigation-6709cf39.js";import{N as J,H as K}from"../../chunks/hamburger-header-00d5f00e.js";import"../../chunks/route-for-api-5a4093aa.js";import"../../chunks/index-92abd382.js";import"../../chunks/notifications-b5b1bba1.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-68e98102.js";import"../../chunks/index-3685084d.js";import"../../chunks/data-converter-config-b8039691.js";import"../../chunks/persist-store-4ece08a3.js";import"../../chunks/is-http-1ac902cc.js";import"../../chunks/tooltip-2323b73a.js";import"../../chunks/copyable-d34764a0.js";import"../../chunks/modal-74f054d2.js";import"../../chunks/index-d92eef96.js";function Q(i){let e;return{c(){e=L("Continue to SSO")},l(n){e=O(n,"Continue to SSO")},m(n,r){y(n,e,r)},d(n){n&&f(e)}}}function R(i){let e,n,r,c,a,o,S,k,p,w,E,u,m,$;return e=new J({props:{href:"/",user:void 0}}),r=new K({props:{href:"/",user:void 0}}),m=new j({props:{classes:"",login:!0,icon:U,$$slots:{default:[Q]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){C(e.$$.fragment),n=_(),C(r.$$.fragment),c=_(),a=d("section"),o=d("h1"),S=L("Welcome back."),k=_(),p=d("p"),w=L("Let's get you signed in."),E=_(),u=d("div"),C(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),n=h(t),N(r.$$.fragment,t),c=h(t),a=b(t,"SECTION",{class:!0});var s=v(a);o=b(s,"H1",{class:!0});var g=v(o);S=O(g,"Welcome back."),g.forEach(f),k=h(s),p=b(s,"P",{class:!0});var P=v(p);w=O(P,"Let's get you signed in."),P.forEach(f),E=h(s),u=b(s,"DIV",{class:!0});var W=v(u);N(m.$$.fragment,W),W.forEach(f),s.forEach(f),this.h()},h(){x(o,"class","text-8xl font-semibold"),x(p,"class","my-7"),x(u,"class","mx-auto"),x(a,"class","text-center my-[20vh]")},m(t,s){q(e,t,s),y(t,n,s),q(r,t,s),y(t,c,s),y(t,a,s),l(a,o),l(o,S),l(a,k),l(a,p),l(p,w),l(a,E),l(a,u),q(m,u,null),$=!0},p(t,[s]){const g={};s&8&&(g.$$scope={dirty:s,ctx:t}),m.$set(g)},i(t){$||(B(e.$$.fragment,t),B(r.$$.fragment,t),B(m.$$.fragment,t),$=!0)},o(t){H(e.$$.fragment,t),H(r.$$.fragment,t),H(m.$$.fragment,t),$=!1},d(t){I(e,t),t&&f(n),I(r,t),t&&f(c),t&&f(a),I(m)}}}const vt=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function X(i,e,n){let r;M(i,z,o=>n(1,r=o));let{settings:c}=e;const a=()=>{G(V({settings:c,searchParams:r.url.searchParams,originUrl:r.url.origin}))};return i.$$set=o=>{"settings"in o&&n(0,c=o.settings)},[c,r,a]}class xt extends A{constructor(e){super(),D(this,e,X,R,F,{settings:0})}}export{xt as default,vt as load};
