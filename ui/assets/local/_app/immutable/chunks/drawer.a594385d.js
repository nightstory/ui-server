import{S as x,b as ee,a as te,e as O,f as G,j as h,z as U,g as w,h as W,k as v,ag as se,i as P,G as X,m as D,C as le,c as A,w as ae,p as I,q as C,D as ne,d as F,x as ie,u as d,R,L as k,E as oe,ab as re,T as ce,y as fe,H as Y,I as Z,J as $,$ as ue,a0 as T,F as _e,r as de}from"./index.f7e75074.js";import{I as me,f as B}from"./tooltip.28dea1d6.js";import{c as ve}from"./outside-click.0db702a6.js";const he=e=>({}),K=e=>({});function M(e){let t,n,s,l,a,i,m,p,E,g,y,o,S,V,b,_,j,J;s=new me({props:{"data-testid":"drawer-close-button",icon:"close","aria-expanded":e[0],"aria-controls":"navigation-drawer"}}),s.$on("click",function(){P(e[4])&&e[4].apply(this,arguments)});let r=e[6].subtitle&&Q(e);const z=e[8].default,u=X(z,e,e[7],null);return{c(){t=D("aside"),n=D("div"),le(s.$$.fragment),a=A(),i=D("div"),m=D("h1"),p=ae(e[1]),E=A(),r&&r.c(),y=A(),o=D("div"),u&&u.c(),this.h()},l(f){t=I(f,"ASIDE",{class:!0,id:!0,role:!0});var c=C(t);n=I(c,"DIV",{class:!0});var H=C(n);ne(s.$$.fragment,H),H.forEach(v),a=F(c),i=I(c,"DIV",{class:!0});var q=C(i);m=I(q,"H1",{class:!0});var L=C(m);p=ie(L,e[1]),L.forEach(v),E=F(q),r&&r.l(q),q.forEach(v),y=F(c),o=I(c,"DIV",{class:!0});var N=C(o);u&&u.l(N),N.forEach(v),c.forEach(v),this.h()},h(){d(n,"class",l="close-button-wrapper "+e[2]+" svelte-c6hvcn"),d(m,"class","svelte-c6hvcn"),d(i,"class",g="title-wrapper "+e[2]+" svelte-c6hvcn"),d(o,"class",S="content "+e[2]+" svelte-c6hvcn"),d(t,"class",V="drawer "+e[2]+" svelte-c6hvcn"),d(t,"id","navigation-drawer"),d(t,"role","region"),R(t,"dark",e[3])},m(f,c){G(f,t,c),k(t,n),oe(s,n,null),k(t,a),k(t,i),k(i,m),k(m,p),k(i,E),r&&r.m(i,null),k(t,y),k(t,o),u&&u.m(o,null),_=!0,j||(J=[re(ve.call(null,t)),ce(t,"click-outside",function(){P(e[4])&&e[4].apply(this,arguments)})],j=!0)},p(f,c){e=f;const H={};c&1&&(H["aria-expanded"]=e[0]),s.$set(H),(!_||c&4&&l!==(l="close-button-wrapper "+e[2]+" svelte-c6hvcn"))&&d(n,"class",l),(!_||c&2)&&fe(p,e[1]),e[6].subtitle?r?(r.p(e,c),c&64&&h(r,1)):(r=Q(e),r.c(),h(r,1),r.m(i,null)):r&&(U(),w(r,1,1,()=>{r=null}),W()),(!_||c&4&&g!==(g="title-wrapper "+e[2]+" svelte-c6hvcn"))&&d(i,"class",g),u&&u.p&&(!_||c&128)&&Y(u,z,e,e[7],_?$(z,e[7],c,null):Z(e[7]),null),(!_||c&4&&S!==(S="content "+e[2]+" svelte-c6hvcn"))&&d(o,"class",S),(!_||c&4&&V!==(V="drawer "+e[2]+" svelte-c6hvcn"))&&d(t,"class",V),(!_||c&12)&&R(t,"dark",e[3])},i(f){_||(h(s.$$.fragment,f),h(r),h(u,f),ue(()=>{b||(b=T(t,B,e[5],!0)),b.run(1)}),_=!0)},o(f){w(s.$$.fragment,f),w(r),w(u,f),b||(b=T(t,B,e[5],!1)),b.run(0),_=!1},d(f){f&&v(t),_e(s),r&&r.d(),u&&u.d(f),f&&b&&b.end(),j=!1,de(J)}}}function Q(e){let t,n;const s=e[8].subtitle,l=X(s,e,e[7],K);return{c(){t=D("h3"),l&&l.c(),this.h()},l(a){t=I(a,"H3",{class:!0});var i=C(t);l&&l.l(i),i.forEach(v),this.h()},h(){d(t,"class","font-primary text-xs font-normal")},m(a,i){G(a,t,i),l&&l.m(t,null),n=!0},p(a,i){l&&l.p&&(!n||i&128)&&Y(l,s,a,a[7],n?$(s,a[7],i,he):Z(a[7]),K)},i(a){n||(h(l,a),n=!0)},o(a){w(l,a),n=!1},d(a){a&&v(t),l&&l.d(a)}}}function pe(e){let t,n,s=e[0]&&M(e);return{c(){s&&s.c(),t=O()},l(l){s&&s.l(l),t=O()},m(l,a){s&&s.m(l,a),G(l,t,a),n=!0},p(l,[a]){l[0]?s?(s.p(l,a),a&1&&h(s,1)):(s=M(l),s.c(),h(s,1),s.m(t.parentNode,t)):s&&(U(),w(s,1,1,()=>{s=null}),W())},i(l){n||(h(s),n=!0)},o(l){w(s),n=!1},d(l){s&&s.d(l),l&&v(t)}}}function be(e,t,n){let{$$slots:s={},$$scope:l}=t;const a=se(s);let{open:i=!1}=t,{title:m}=t,{position:p="bottom"}=t,{dark:E=!0}=t,{onClick:g}=t;const y={duration:500,...p==="bottom"?{y:200}:{x:200}};return e.$$set=o=>{"open"in o&&n(0,i=o.open),"title"in o&&n(1,m=o.title),"position"in o&&n(2,p=o.position),"dark"in o&&n(3,E=o.dark),"onClick"in o&&n(4,g=o.onClick),"$$scope"in o&&n(7,l=o.$$scope)},[i,m,p,E,g,y,a,l,s]}class Ee extends x{constructor(t){super(),ee(this,t,be,pe,te,{open:0,title:1,position:2,dark:3,onClick:4})}}export{Ee as D};
