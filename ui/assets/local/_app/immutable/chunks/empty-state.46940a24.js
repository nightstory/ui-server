import{S as z,b as B,a as K,G as M,m as E,C as Q,c as P,w as C,p as k,q as I,D as R,k as h,d as S,x as D,u as d,f as N,L as _,E as T,y as A,H as U,I as W,J as X,j as G,g as H,F as Y,N as J,O as L}from"./index.f15f06ee.js";import{I as Z}from"./icon.6a988f87.js";function O(a){let e,l;return{c(){e=E("p"),l=C(a[1]),this.h()},l(s){e=k(s,"P",{class:!0});var i=I(e);l=D(i,a[1]),i.forEach(h),this.h()},h(){d(e,"class","text-center")},m(s,i){N(s,e,i),_(e,l)},p(s,i){i&2&&A(l,s[1])},d(s){s&&h(e)}}}function V(a){let e,l;return{c(){e=E("p"),l=C(a[2]),this.h()},l(s){e=k(s,"P",{class:!0});var i=I(e);l=D(i,a[2]),i.forEach(h),this.h()},h(){d(e,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center")},m(s,i){N(s,e,i),_(e,l)},p(s,i){i&4&&A(l,s[2])},d(s){s&&h(e)}}}function w(a){let e,l,s,i,u,g,p,b,f,y,j,m;s=new Z({props:{name:a[3],class:"block h-full w-full"}});let o=a[1]&&O(a),r=a[2]&&V(a);const q=a[6].default,c=M(q,a,a[5],null);return{c(){e=E("div"),l=E("span"),Q(s.$$.fragment),i=P(),u=E("p"),g=C(a[0]),p=P(),o&&o.c(),b=P(),r&&r.c(),f=P(),c&&c.c(),this.h()},l(t){e=k(t,"DIV",{class:!0,"data-testid":!0});var n=I(e);l=k(n,"SPAN",{class:!0});var v=I(l);R(s.$$.fragment,v),v.forEach(h),i=S(n),u=k(n,"P",{class:!0});var F=I(u);g=D(F,a[0]),F.forEach(h),p=S(n),o&&o.l(n),b=S(n),r&&r.l(n),f=S(n),c&&c.l(n),n.forEach(h),this.h()},h(){d(l,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),d(u,"class","text-xl font-medium"),d(e,"class",y="my-12 flex flex-col items-center justify-start gap-2 "+a[4].class),d(e,"data-testid",j=a[4].testId)},m(t,n){N(t,e,n),_(e,l),T(s,l,null),_(e,i),_(e,u),_(u,g),_(e,p),o&&o.m(e,null),_(e,b),r&&r.m(e,null),_(e,f),c&&c.m(e,null),m=!0},p(t,[n]){const v={};n&8&&(v.name=t[3]),s.$set(v),(!m||n&1)&&A(g,t[0]),t[1]?o?o.p(t,n):(o=O(t),o.c(),o.m(e,b)):o&&(o.d(1),o=null),t[2]?r?r.p(t,n):(r=V(t),r.c(),r.m(e,f)):r&&(r.d(1),r=null),c&&c.p&&(!m||n&32)&&U(c,q,t,t[5],m?X(q,t[5],n,null):W(t[5]),null),(!m||n&16&&y!==(y="my-12 flex flex-col items-center justify-start gap-2 "+t[4].class))&&d(e,"class",y),(!m||n&16&&j!==(j=t[4].testId))&&d(e,"data-testid",j)},i(t){m||(G(s.$$.fragment,t),G(c,t),m=!0)},o(t){H(s.$$.fragment,t),H(c,t),m=!1},d(t){t&&h(e),Y(s),o&&o.d(),r&&r.d(),c&&c.d(t)}}}function x(a,e,l){let{$$slots:s={},$$scope:i}=e,{title:u}=e,{content:g=""}=e,{error:p=""}=e,{icon:b="comet"}=e;return a.$$set=f=>{l(4,e=J(J({},e),L(f))),"title"in f&&l(0,u=f.title),"content"in f&&l(1,g=f.content),"error"in f&&l(2,p=f.error),"icon"in f&&l(3,b=f.icon),"$$scope"in f&&l(5,i=f.$$scope)},e=L(e),[u,g,p,b,e,i,s]}class te extends z{constructor(e){super(),B(this,e,x,w,K,{title:0,content:1,error:2,icon:3})}}export{te as E};
