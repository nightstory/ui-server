import{S as D,i as V,s as B,l as T,m as E,n as C,h as i,p as x,b as v,E as A,C as I,V as R,w as g,x as h,y as p,f as $,t as u,B as _,e as H,g as j,d as z,a0 as F,M as S,a as k,c as b}from"../../../chunks/index-9ea626a2.js";import{C as q}from"../../../chunks/_chapter-c0d56378.js";import{T as G}from"../../../chunks/table-6d12543a.js";import"../../../chunks/fiction-store-3a192886.js";import"../../../chunks/index-ed4e6b3e.js";function J(o){let e,n;return{c(){e=T("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),C(e).forEach(i),this.h()},h(){x(e,"class",n="background-animate h-12 w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+o[0].class+" svelte-1q408tw")},m(t,r){v(t,e,r)},p(t,[r]){r&1&&n!==(n="background-animate h-12 w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+t[0].class+" svelte-1q408tw")&&x(e,"class",n)},i:A,o:A,d(t){t&&i(e)}}}function K(o,e,n){return o.$$set=t=>{n(0,e=I(I({},e),R(t)))},e=R(e),[e]}class y extends D{constructor(e){super(),V(this,e,K,J,B,{})}}function M(o,e,n){const t=o.slice();return t[1]=e[n],t}function N(o){let e,n,t,r,f,l,a,s,d,w;return n=new y({props:{class:"h-5 w-44"}}),r=new y({props:{class:"h-5"}}),l=new y({props:{class:"h-5 w-96"}}),s=new y({props:{class:"h-5 w-96"}}),{c(){e=T("tr"),g(n.$$.fragment),t=k(),g(r.$$.fragment),f=k(),g(l.$$.fragment),a=k(),g(s.$$.fragment),d=k(),this.h()},l(c){e=E(c,"TR",{class:!0});var m=C(e);h(n.$$.fragment,m),t=b(m),h(r.$$.fragment,m),f=b(m),h(l.$$.fragment,m),a=b(m),h(s.$$.fragment,m),d=b(m),m.forEach(i),this.h()},h(){x(e,"class","flex items-center gap-4 p-3")},m(c,m){v(c,e,m),p(n,e,null),S(e,t),p(r,e,null),S(e,f),p(l,e,null),S(e,a),p(s,e,null),S(e,d),w=!0},p:A,i(c){w||($(n.$$.fragment,c),$(r.$$.fragment,c),$(l.$$.fragment,c),$(s.$$.fragment,c),w=!0)},o(c){u(n.$$.fragment,c),u(r.$$.fragment,c),u(l.$$.fragment,c),u(s.$$.fragment,c),w=!1},d(c){c&&i(e),_(n),_(r),_(l),_(s)}}}function L(o){let e,n,t=Array.from(Array(o[0]).keys()),r=[];for(let l=0;l<t.length;l+=1)r[l]=N(M(o,t,l));const f=l=>u(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=H()},l(l){for(let a=0;a<r.length;a+=1)r[a].l(l);e=H()},m(l,a){for(let s=0;s<r.length;s+=1)r[s].m(l,a);v(l,e,a),n=!0},p(l,a){if(a&1){t=Array.from(Array(l[0]).keys());let s;for(s=0;s<t.length;s+=1){const d=M(l,t,s);r[s]?(r[s].p(d,a),$(r[s],1)):(r[s]=N(),r[s].c(),$(r[s],1),r[s].m(e.parentNode,e))}for(j(),s=t.length;s<r.length;s+=1)f(s);z()}},i(l){if(!n){for(let a=0;a<t.length;a+=1)$(r[a]);n=!0}},o(l){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)u(r[a]);n=!1},d(l){F(r,l),l&&i(e)}}}function O(o){let e,n;return{c(){e=T("tr"),n=T("th"),this.h()},l(t){e=E(t,"TR",{slot:!0,class:!0});var r=C(e);n=E(r,"TH",{}),C(n).forEach(i),r.forEach(i),this.h()},h(){x(e,"slot","headers"),x(e,"class","h-8")},m(t,r){v(t,e,r),S(e,n)},p:A,d(t){t&&i(e)}}}function P(o){let e,n;return e=new G({props:{class:"w-full border",variant:"fancy",$$slots:{headers:[O],default:[L]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){p(e,t,r),n=!0},p(t,[r]){const f={};r&17&&(f.$$scope={dirty:r,ctx:t}),e.$set(f)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Q(o,e,n){let{rows:t=10}=e;return o.$$set=r=>{"rows"in r&&n(0,t=r.rows)},[t]}class U extends D{constructor(e){super(),V(this,e,Q,P,B,{rows:0})}}function W(o){let e,n;return e=new y({}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){p(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function X(o){let e,n;return e=new y({props:{class:"h-24 w-44 rounded-sm"}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){p(e,t,r),n=!0},p:A,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function Y(o){let e,n,t;return n=new U({}),{c(){e=T("div"),g(n.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var f=C(e);h(n.$$.fragment,f),f.forEach(i),this.h()},h(){x(e,"class","relative mb-8 flex flex-col gap-4")},m(r,f){v(r,e,f),p(n,e,null),t=!0},p:A,i(r){t||($(n.$$.fragment,r),t=!0)},o(r){u(n.$$.fragment,r),t=!1},d(r){r&&i(e),_(n)}}}function Z(o){let e,n,t,r,f,l;return e=new q({props:{description:"A Default Skeleton",$$slots:{default:[W]},$$scope:{ctx:o}}}),t=new q({props:{description:"A Card Skeleton",$$slots:{default:[X]},$$scope:{ctx:o}}}),f=new q({props:{description:"A Skeleton Table",$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=k(),g(t.$$.fragment),r=k(),g(f.$$.fragment)},l(a){h(e.$$.fragment,a),n=b(a),h(t.$$.fragment,a),r=b(a),h(f.$$.fragment,a)},m(a,s){p(e,a,s),v(a,n,s),p(t,a,s),v(a,r,s),p(f,a,s),l=!0},p(a,[s]){const d={};s&1&&(d.$$scope={dirty:s,ctx:a}),e.$set(d);const w={};s&1&&(w.$$scope={dirty:s,ctx:a}),t.$set(w);const c={};s&1&&(c.$$scope={dirty:s,ctx:a}),f.$set(c)},i(a){l||($(e.$$.fragment,a),$(t.$$.fragment,a),$(f.$$.fragment,a),l=!0)},o(a){u(e.$$.fragment,a),u(t.$$.fragment,a),u(f.$$.fragment,a),l=!1},d(a){_(e,a),a&&i(n),_(t,a),a&&i(r),_(f,a)}}}class se extends D{constructor(e){super(),V(this,e,null,Z,B,{})}}export{se as default};
