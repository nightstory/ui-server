import{S as V,i as O,s as A,w,a as P,l as S,x as v,c as q,m as E,n as R,h as p,y as T,b as k,f as g,t as h,B as y,N as W,X as B,e as D,_ as M,r as d,u as b,M as _,E as N,p as I,v as X}from"../../../../../../chunks/index-9ea626a2.js";import{p as j}from"../../../../../../chunks/stores-3338201a.js";import{w as z}from"../../../../../../chunks/workflow-run-42b4f6a2.js";import{b as Q}from"../../../../../../chunks/query-service-173e901b.js";import{C as G}from"../../../../../../chunks/code-block-18973dc4.js";import{B as H}from"../../../../../../chunks/button-9b76443a.js";import{E as F}from"../../../../../../chunks/empty-state-821cb583.js";import{P as J}from"../../../../../../chunks/page-title-d5cce088.js";import{L as K}from"../../../../../../chunks/loading-b5e3f9b6.js";import{L as U}from"../../../../../../chunks/link-407f1932.js";import"../../../../../../chunks/index-ed4e6b3e.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/workflow-service-a24df367.js";import"../../../../../../chunks/settings-35422e61.js";import"../../../../../../chunks/simplify-attributes-34cbbe81.js";import"../../../../../../chunks/format-date-2e95557a.js";import"../../../../../../chunks/is-6159121b.js";import"../../../../../../chunks/route-for-api-6e71ebe8.js";import"../../../../../../chunks/route-for-4a4bbbc1.js";import"../../../../../../chunks/get-public-path-6c4a8950.js";import"../../../../../../chunks/notifications-92f665fe.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/is-function-45497f08.js";import"../../../../../../chunks/pollers-service-84ebb595.js";import"../../../../../../chunks/atob-5380a47e.js";import"../../../../../../chunks/icon-3b6c42df.js";import"../../../../../../chunks/copy-to-clipboard-43da5a13.js";import"../../../../../../chunks/badge-05d54a1f.js";/* empty css                                                                    */function Y(s){let e,r;return e=new F({props:{title:"No Stack Traces Found",dataCy:"query-stack-trace-empty",$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p(t,n){const l={};n&2048&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function Z(s){let e,r,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:ae,then:ne,catch:re,value:9,error:10,blocks:[,,,]};return B(r=s[1],n),{c(){e=D(),n.block.c()},l(l){e=D(),n.block.l(l)},m(l,o){k(l,e,o),n.block.m(l,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(l,o){s=l,n.ctx=s,o&2&&r!==(r=s[1])&&B(r,n)||M(n,s,o)},i(l){t||(g(n.block),t=!0)},o(l){for(let o=0;o<3;o+=1){const f=n.blocks[o];h(f)}t=!1},d(l){l&&p(e),n.block.d(l),n.token=null,n=null}}}function x(s){var m;let e,r,t,n,l=((m=s[3])==null?void 0:m.taskQueue)+"",o,f,u;return t=new U({props:{href:"https://docs.temporal.io/concepts/what-is-a-query/#stack-trace-query",$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){e=S("p"),r=d("To enable "),w(t.$$.fragment),n=d(", run a Worker on the "),o=d(l),f=d(" Task Queue.")},l(a){e=E(a,"P",{});var i=R(e);r=b(i,"To enable "),v(t.$$.fragment,i),n=b(i,", run a Worker on the "),o=b(i,l),f=b(i," Task Queue."),i.forEach(p)},m(a,i){k(a,e,i),_(e,r),T(t,e,null),_(e,n),_(e,o),_(e,f),u=!0},p(a,i){const c={};i&2048&&(c.$$scope={dirty:i,ctx:a}),t.$set(c)},i(a){u||(g(t.$$.fragment,a),u=!0)},o(a){h(t.$$.fragment,a),u=!1},d(a){a&&p(e),y(t)}}}function ee(s){let e;return{c(){e=d("stack traces")},l(r){e=b(r,"stack traces")},m(r,t){k(r,e,t)},d(r){r&&p(e)}}}function te(s){var n,l;let e,r,t=s[3].isRunning&&((l=(n=s[4])==null?void 0:n.pollers)==null?void 0:l.length)===0&&x(s);return{c(){t&&t.c(),e=D()},l(o){t&&t.l(o),e=D()},m(o,f){t&&t.m(o,f),k(o,e,f),r=!0},p(o,f){var u,m;o[3].isRunning&&((m=(u=o[4])==null?void 0:u.pollers)==null?void 0:m.length)===0&&t.p(o,f)},i(o){r||(g(t),r=!0)},o(o){h(t),r=!1},d(o){t&&t.d(o),o&&p(e)}}}function re(s){let e,r;return e=new F({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p:N,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function ne(s){let e,r,t,n,l,o=s[0].toLocaleTimeString()+"",f,u,m,a,i;return r=new H({props:{icon:"retry",loading:se,$$slots:{default:[oe]},$$scope:{ctx:s}}}),r.$on("click",s[5]),a=new G({props:{content:s[9],language:"text",dataCy:"query-stack-trace"}}),{c(){e=S("div"),w(r.$$.fragment),t=P(),n=S("p"),l=d("Stack Trace at "),f=d(o),u=P(),m=S("div"),w(a.$$.fragment),this.h()},l(c){e=E(c,"DIV",{class:!0});var $=R(e);v(r.$$.fragment,$),t=q($),n=E($,"P",{});var C=R(n);l=b(C,"Stack Trace at "),f=b(C,o),C.forEach(p),$.forEach(p),u=q(c),m=E(c,"DIV",{class:!0});var L=R(m);v(a.$$.fragment,L),L.forEach(p),this.h()},h(){I(e,"class","flex items-center gap-4"),I(m,"class","flex items-start h-full")},m(c,$){k(c,e,$),T(r,e,null),_(e,t),_(e,n),_(n,l),_(n,f),k(c,u,$),k(c,m,$),T(a,m,null),i=!0},p(c,$){const C={};$&2048&&(C.$$scope={dirty:$,ctx:c}),r.$set(C),(!i||$&1)&&o!==(o=c[0].toLocaleTimeString()+"")&&X(f,o);const L={};$&2&&(L.content=c[9]),a.$set(L)},i(c){i||(g(r.$$.fragment,c),g(a.$$.fragment,c),i=!0)},o(c){h(r.$$.fragment,c),h(a.$$.fragment,c),i=!1},d(c){c&&p(e),y(r),c&&p(u),c&&p(m),y(a)}}}function oe(s){let e;return{c(){e=d("Refresh")},l(r){e=b(r,"Refresh")},m(r,t){k(r,e,t)},d(r){r&&p(e)}}}function ae(s){let e,r,t,n,l,o;return r=new K({}),{c(){e=S("div"),w(r.$$.fragment),t=P(),n=S("p"),l=d("(This will fail if you have no workers running.)"),this.h()},l(f){e=E(f,"DIV",{class:!0});var u=R(e);v(r.$$.fragment,u),t=q(u),n=E(u,"P",{});var m=R(n);l=b(m,"(This will fail if you have no workers running.)"),m.forEach(p),u.forEach(p),this.h()},h(){I(e,"class","text-center")},m(f,u){k(f,e,u),T(r,e,null),_(e,t),_(e,n),_(n,l),o=!0},p:N,i(f){o||(g(r.$$.fragment,f),o=!0)},o(f){h(r.$$.fragment,f),o=!1},d(f){f&&p(e),y(r)}}}function le(s){let e,r,t,n,l,o;e=new J({props:{title:`Stack Trace | ${s[3].id}`,url:s[2].url.href}});const f=[Z,Y],u=[];function m(a,i){var c,$;return a[3].isRunning&&(($=(c=a[4])==null?void 0:c.pollers)==null?void 0:$.length)>0?0:1}return n=m(s),l=u[n]=f[n](s),{c(){w(e.$$.fragment),r=P(),t=S("section"),l.c()},l(a){v(e.$$.fragment,a),r=q(a),t=E(a,"SECTION",{});var i=R(t);l.l(i),i.forEach(p)},m(a,i){T(e,a,i),k(a,r,i),k(a,t,i),u[n].m(t,null),o=!0},p(a,[i]){const c={};i&4&&(c.url=a[2].url.href),e.$set(c),l.p(a,i)},i(a){o||(g(e.$$.fragment,a),g(l),o=!0)},o(a){h(e.$$.fragment,a),h(l),o=!1},d(a){y(e,a),a&&p(r),a&&p(t),u[n].d()}}}let se=!1;function ce(s,e,r){let t,n;W(s,z,c=>r(6,t=c)),W(s,j,c=>r(2,n=c));const{namespace:l}=n.params,{workflow:o,workers:f}=t;let u=new Date;const m=()=>Q({workflow:o,namespace:l});let a;const i=()=>{r(1,a=Q({workflow:o,namespace:l})),a.then(()=>{r(0,u=new Date)})};return o.isRunning&&r(1,a=m()),[u,a,n,o,f,i]}class ie extends V{constructor(e){super(),O(this,e,ce,le,A,{})}}function fe(s){let e,r;return e=new ie({}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p:N,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}class Ae extends V{constructor(e){super(),O(this,e,null,fe,A,{})}}export{Ae as default};
