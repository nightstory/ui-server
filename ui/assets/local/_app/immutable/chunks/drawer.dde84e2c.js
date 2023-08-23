import{S as se,b as ae,a as ne,e as O,f as S,z as K,g as k,h as R,j as p,k as w,K as W,a2 as X,G as V,H as q,I as N,J as j,ag as ie,i as Y,m as y,C as oe,c as F,w as re,p as P,q as B,D as fe,d as G,x as ce,u as h,R as H,L as D,E as ue,$ as _e,T as de,y as me,a0 as be,a9 as Z,F as he,r as pe}from"./index.f15f06ee.js";import{p as ve}from"./stores.3160f878.js";import{l as J}from"./labs-mode.c33b0c07.js";import{c as ke,f as $}from"./menu.8ec1673e.js";import{I as ge}from"./icon-button.89c03f2c.js";const we=l=>({}),x=l=>({});function Ee(l){let e;const a=l[5].fallback,t=V(a,l,l[4],x);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16)&&q(t,a,s,s[4],e?j(a,s[4],n,we):N(s[4]),x)},i(s){e||(p(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function De(l){let e;const a=l[5].default,t=V(a,l,l[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&16)&&q(t,a,s,s[4],e?j(a,s[4],n,null):N(s[4]),null)},i(s){e||(p(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function Ie(l){let e,a,t,s;const n=[De,Ee],i=[];function d(o,c){return o[0]?0:1}return e=d(l),a=i[e]=n[e](l),{c(){a.c(),t=O()},l(o){a.l(o),t=O()},m(o,c){i[e].m(o,c),S(o,t,c),s=!0},p(o,[c]){let v=e;e=d(o),e===v?i[e].p(o,c):(K(),k(i[v],1,1,()=>{i[v]=null}),R(),a=i[e],a?a.p(o,c):(a=i[e]=n[e](o),a.c()),p(a,1),a.m(t.parentNode,t))},i(o){s||(p(a),s=!0)},o(o){k(a),s=!1},d(o){i[e].d(o),o&&w(t)}}}function Le(l,e,a){let t,s,n,i;W(l,J,c=>a(0,n=c)),W(l,ve,c=>a(3,i=c));let{$$slots:d={},$$scope:o}=e;return l.$$set=c=>{"$$scope"in c&&a(4,o=c.$$scope)},l.$$.update=()=>{l.$$.dirty&8&&a(2,t=i.url.searchParams.get("labs")==="true"),l.$$.dirty&8&&a(1,s=i.url.searchParams.get("labs")==="false"),l.$$.dirty&6&&(t?X(J,n=!0,n):s&&X(J,n=!1,n))},[n,s,t,i,o,d]}class Ve extends se{constructor(e){super(),ae(this,e,Le,Ie,ne,{})}}const Ce=l=>({}),ee=l=>({});function te(l){let e,a,t,s,n,i,d,o,c,v,I,g,L,f,E,m,z,T;t=new ge({props:{"data-testid":"drawer-close-button",label:l[6],icon:"close","aria-expanded":l[0],"aria-controls":"navigation-drawer"}}),t.$on("click",function(){Y(l[4])&&l[4].apply(this,arguments)});let u=l[8].subtitle&&le(l);const A=l[10].default,b=V(A,l,l[9],null);return{c(){e=y("aside"),a=y("div"),oe(t.$$.fragment),n=F(),i=y("div"),d=y("h1"),o=re(l[1]),c=F(),u&&u.c(),I=F(),g=y("div"),b&&b.c(),this.h()},l(_){e=P(_,"ASIDE",{class:!0,id:!0,role:!0});var r=B(e);a=P(r,"DIV",{class:!0});var C=B(a);fe(t.$$.fragment,C),C.forEach(w),n=G(r),i=P(r,"DIV",{class:!0});var M=B(i);d=P(M,"H1",{class:!0});var Q=B(d);o=ce(Q,l[1]),Q.forEach(w),c=G(M),u&&u.l(M),M.forEach(w),I=G(r),g=P(r,"DIV",{class:!0});var U=B(g);b&&b.l(U),U.forEach(w),r.forEach(w),this.h()},h(){h(a,"class",s="close-button-wrapper "+l[2]+" svelte-c6hvcn"),h(d,"class","svelte-c6hvcn"),h(i,"class",v="title-wrapper "+l[2]+" svelte-c6hvcn"),h(g,"class",L="content "+l[2]+" svelte-c6hvcn"),h(e,"class",f="drawer "+l[2]+" svelte-c6hvcn"),h(e,"id",l[5]),h(e,"role","region"),H(e,"dark",l[3]),H(e,"max-w-[400px]",l[2]==="right")},m(_,r){S(_,e,r),D(e,a),ue(t,a,null),D(e,n),D(e,i),D(i,d),D(d,o),D(i,c),u&&u.m(i,null),D(e,I),D(e,g),b&&b.m(g,null),m=!0,z||(T=[_e(ke.call(null,e)),de(e,"click-outside",function(){Y(l[4])&&l[4].apply(this,arguments)})],z=!0)},p(_,r){l=_;const C={};r&64&&(C.label=l[6]),r&1&&(C["aria-expanded"]=l[0]),t.$set(C),(!m||r&4&&s!==(s="close-button-wrapper "+l[2]+" svelte-c6hvcn"))&&h(a,"class",s),(!m||r&2)&&me(o,l[1]),l[8].subtitle?u?(u.p(l,r),r&256&&p(u,1)):(u=le(l),u.c(),p(u,1),u.m(i,null)):u&&(K(),k(u,1,1,()=>{u=null}),R()),(!m||r&4&&v!==(v="title-wrapper "+l[2]+" svelte-c6hvcn"))&&h(i,"class",v),b&&b.p&&(!m||r&512)&&q(b,A,l,l[9],m?j(A,l[9],r,null):N(l[9]),null),(!m||r&4&&L!==(L="content "+l[2]+" svelte-c6hvcn"))&&h(g,"class",L),(!m||r&4&&f!==(f="drawer "+l[2]+" svelte-c6hvcn"))&&h(e,"class",f),(!m||r&32)&&h(e,"id",l[5]),(!m||r&12)&&H(e,"dark",l[3]),(!m||r&4)&&H(e,"max-w-[400px]",l[2]==="right")},i(_){m||(p(t.$$.fragment,_),p(u),p(b,_),be(()=>{E||(E=Z(e,$,l[7],!0)),E.run(1)}),m=!0)},o(_){k(t.$$.fragment,_),k(u),k(b,_),E||(E=Z(e,$,l[7],!1)),E.run(0),m=!1},d(_){_&&w(e),he(t),u&&u.d(),b&&b.d(_),_&&E&&E.end(),z=!1,pe(T)}}}function le(l){let e,a;const t=l[10].subtitle,s=V(t,l,l[9],ee);return{c(){e=y("h3"),s&&s.c(),this.h()},l(n){e=P(n,"H3",{class:!0});var i=B(e);s&&s.l(i),i.forEach(w),this.h()},h(){h(e,"class","font-primary text-xs font-normal")},m(n,i){S(n,e,i),s&&s.m(e,null),a=!0},p(n,i){s&&s.p&&(!a||i&512)&&q(s,t,n,n[9],a?j(t,n[9],i,Ce):N(n[9]),ee)},i(n){a||(p(s,n),a=!0)},o(n){k(s,n),a=!1},d(n){n&&w(e),s&&s.d(n)}}}function ye(l){let e,a,t=l[0]&&te(l);return{c(){t&&t.c(),e=O()},l(s){t&&t.l(s),e=O()},m(s,n){t&&t.m(s,n),S(s,e,n),a=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&p(t,1)):(t=te(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(K(),k(t,1,1,()=>{t=null}),R())},i(s){a||(p(t),a=!0)},o(s){k(t),a=!1},d(s){t&&t.d(s),s&&w(e)}}}function Pe(l,e,a){let{$$slots:t={},$$scope:s}=e;const n=ie(t);let{open:i=!1}=e,{title:d}=e,{position:o="bottom"}=e,{dark:c=!0}=e,{onClick:v}=e,{id:I="navigation-drawer"}=e,{closeButtonLabel:g}=e;const L={duration:500,...o==="bottom"?{y:200}:{x:200}};return l.$$set=f=>{"open"in f&&a(0,i=f.open),"title"in f&&a(1,d=f.title),"position"in f&&a(2,o=f.position),"dark"in f&&a(3,c=f.dark),"onClick"in f&&a(4,v=f.onClick),"id"in f&&a(5,I=f.id),"closeButtonLabel"in f&&a(6,g=f.closeButtonLabel),"$$scope"in f&&a(9,s=f.$$scope)},[i,d,o,c,v,I,g,L,n,s,t]}class qe extends se{constructor(e){super(),ae(this,e,Pe,ye,ne,{open:0,title:1,position:2,dark:3,onClick:4,id:5,closeButtonLabel:6})}}export{qe as D,Ve as L};
