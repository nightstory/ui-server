import{S as N,b as R,a as T,C as A,c as x,m as $,w as C,D as B,d as y,p as b,q as k,k as i,x as D,a8 as U,u as c,E as H,f as P,L as f,j as V,g as W,F as G,K as z,n as J}from"../chunks/index.f15f06ee.js";import{p as Q}from"../chunks/stores.3160f878.js";import{F as X,L as Y}from"../chunks/logo.23b53b07.js";import{P as Z}from"../chunks/page-title.60fc2164.js";import{B as tt}from"../chunks/button.5748c29d.js";import{s as et}from"../chunks/route-for.abf067f0.js";function at(o){let e;return{c(){e=C("Continue to SSO")},l(s){e=D(s,"Continue to SSO")},m(s,a){P(s,e,a)},d(s){s&&i(e)}}}function st(o){let e,s,a;return{c(){e=$("div"),s=$("p"),a=C(o[2]),this.h()},l(r){e=b(r,"DIV",{class:!0});var m=k(e);s=b(m,"P",{class:!0});var h=k(s);a=D(h,o[2]),h.forEach(i),m.forEach(i),this.h()},h(){c(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),c(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(r,m){P(r,e,m),f(e,s),f(s,a)},p:J,d(r){r&&i(e)}}}function rt(o){let e,s,a,r,m,h,d,p,l,v,F,I,E,j,q,w,g,O,L;e=new Z({props:{title:"Login",url:o[0].url.href}}),d=new X({}),g=new tt({props:{"data-testid":"login-button",variant:"login",icon:"lock",$$slots:{default:[at]},$$scope:{ctx:o}}}),g.$on("click",o[4]);let _=o[2]&&st(o);return{c(){A(e.$$.fragment),s=x(),a=$("header"),r=$("img"),h=x(),A(d.$$.fragment),p=x(),l=$("section"),v=$("h1"),F=C("Welcome back."),I=x(),E=$("p"),j=C("Let's get you signed in."),q=x(),w=$("div"),A(g.$$.fragment),O=x(),_&&_.c(),this.h()},l(t){B(e.$$.fragment,t),s=y(t),a=b(t,"HEADER",{class:!0});var n=k(a);r=b(n,"IMG",{src:!0,alt:!0,class:!0}),h=y(n),B(d.$$.fragment,n),n.forEach(i),p=y(t),l=b(t,"SECTION",{class:!0});var u=k(l);v=b(u,"H1",{class:!0,"data-testid":!0});var S=k(v);F=D(S,"Welcome back."),S.forEach(i),I=y(u),E=b(u,"P",{class:!0,"data-testid":!0});var K=k(E);j=D(K,"Let's get you signed in."),K.forEach(i),q=y(u),w=b(u,"DIV",{class:!0});var M=k(w);B(g.$$.fragment,M),M.forEach(i),O=y(u),_&&_.l(u),u.forEach(i),this.h()},h(){U(r.src,m=Y)||c(r,"src",m),c(r,"alt",""),c(r,"class","max-h-10"),c(a,"class","flex h-16 w-full items-center justify-between bg-primary px-10"),c(v,"class","text-8xl font-semibold"),c(v,"data-testid","login-title"),c(E,"class","my-7"),c(E,"data-testid","login-info"),c(w,"class","mx-auto"),c(l,"class","my-[20vh] text-center")},m(t,n){H(e,t,n),P(t,s,n),P(t,a,n),f(a,r),f(a,h),H(d,a,null),P(t,p,n),P(t,l,n),f(l,v),f(v,F),f(l,I),f(l,E),f(E,j),f(l,q),f(l,w),H(g,w,null),f(l,O),_&&_.m(l,null),L=!0},p(t,[n]){const u={};n&1&&(u.url=t[0].url.href),e.$set(u);const S={};n&32&&(S.$$scope={dirty:n,ctx:t}),g.$set(S),t[2]&&_.p(t,n)},i(t){L||(V(e.$$.fragment,t),V(d.$$.fragment,t),V(g.$$.fragment,t),L=!0)},o(t){W(e.$$.fragment,t),W(d.$$.fragment,t),W(g.$$.fragment,t),L=!1},d(t){G(e,t),t&&i(s),t&&i(a),G(d),t&&i(p),t&&i(l),G(g),_&&_.d()}}}function nt(o,e,s){let a;z(o,Q,p=>s(0,a=p));let{data:r}=e,{settings:m}=r;const h=a.url.searchParams.get("error"),d=()=>{window.location.assign(et({settings:m,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return o.$$set=p=>{"data"in p&&s(3,r=p.data)},[a,m,h,r,d]}class mt extends N{constructor(e){super(),R(this,e,nt,rt,T,{data:3})}}export{mt as default};
