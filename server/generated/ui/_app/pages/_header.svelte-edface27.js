import{S as j,i as J,s as K,e as b,t as B,c as w,a as N,h as G,d as _,aa as te,b as h,g as d,M as E,T as Y,l as T,E as S,j as Q,ab as le,k as U,w as I,m as A,x as D,y as C,ac as ce,ad as Ce,q as $,o as v,B as z,n as W,p as M,R as O,ae as ze,I as re,Y as Ve,H as ne,af as Se,J as ae,K as ie,L as fe,G as Ue,N as se,f as Ae}from"../chunks/index-fbba58ee.js";import{p as De}from"../chunks/stores-c599ed87.js";import{g as ee,a as Fe}from"../chunks/navigation-6709cf39.js";import{r as x,a as Pe,b as Te}from"../chunks/route-for-e4b4dbdd.js";import{I as H}from"../chunks/index-976b9d76.js";import{p as qe}from"../chunks/persist-store-fb1219b0.js";import{N as Be,n as Ge,a as R}from"../chunks/_nav-row-52147793.js";import{T as X}from"../chunks/tooltip-7a270dc9.js";import{D as Oe}from"../chunks/data-encoder-status-8df04f78.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-ba9db614.js";import"../chunks/copyable-f484b1cb.js";import"../chunks/data-converter-config-708bfcc9.js";import"../chunks/is-http-0c9cc01f.js";import"../chunks/modal-aea1f74c.js";import"../chunks/button-900a389e.js";const We=qe("lastNamespace","default");function me(a){let e,s,t,l,r,n;return{c(){e=b("button"),s=b("img"),l=B(`
    Logout`),this.h()},l(i){e=w(i,"BUTTON",{class:!0});var f=N(e);s=w(f,"IMG",{src:!0,alt:!0,class:!0}),l=G(f,`
    Logout`),f.forEach(_),this.h()},h(){te(s.src,t=a[0].picture)||h(s,"src",t),h(s,"alt","User Avatar"),h(s,"class","mr-2.5 h-6 w-6 rounded-full"),h(e,"class","logout-button min-w-min svelte-1h3dttc")},m(i,f){d(i,e,f),E(e,s),E(e,l),r||(n=Y(e,"click",a[1]),r=!0)},p(i,f){f&1&&!te(s.src,t=i[0].picture)&&h(s,"src",t)},d(i){i&&_(e),r=!1,n()}}}function Me(a){var t;let e,s=((t=a[0])==null?void 0:t.email)&&me(a);return{c(){s&&s.c(),e=T()},l(l){s&&s.l(l),e=T()},m(l,r){s&&s.m(l,r),d(l,e,r)},p(l,[r]){var n;(n=l[0])!=null&&n.email?s?s.p(l,r):(s=me(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:S,o:S,d(l){s&&s.d(l),l&&_(e)}}}function He(a,e,s){let{user:t}=e;const l=()=>ee("/auth/logout");return a.$$set=r=>{"user"in r&&s(0,t=r.user)},[t,l]}class Ye extends j{constructor(e){super(),J(this,e,He,Me,K,{user:0})}}function _e(a,e,s){const t=a.slice();return t[8]=e[s],t}function pe(a){let e,s,t;return{c(){e=b("p"),s=B("You are currently viewing "),t=B(a[2])},l(l){e=w(l,"P",{});var r=N(e);s=G(r,"You are currently viewing "),t=G(r,a[2]),r.forEach(_)},m(l,r){d(l,e,r),E(e,s),E(e,t)},p(l,r){r&4&&Q(t,l[2])},d(l){l&&_(e)}}}function Re(a){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function je(a){let e,s,t,l;const r=[Ke,Je],n=[];function i(f,m){return f[7]?0:1}return e=i(a),s=n[e]=r[e](a),{c(){s.c(),t=T()},l(f){s.l(f),t=T()},m(f,m){n[e].m(f,m),d(f,t,m),l=!0},p(f,m){let c=e;e=i(f),e===c?n[e].p(f,m):(W(),v(n[c],1,1,()=>{n[c]=null}),M(),s=n[e],s?s.p(f,m):(s=n[e]=r[e](f),s.c()),$(s,1),s.m(t.parentNode,t))},i(f){l||($(s),l=!0)},o(f){v(s),l=!1},d(f){n[e].d(f),f&&_(t)}}}function Je(a){let e;return{c(){e=B("No Namespaces")},l(s){e=G(s,"No Namespaces")},m(s,t){d(s,e,t)},p:S,i:S,o:S,d(s){s&&_(e)}}}function Ke(a){let e,s,t=a[7].filter(a[5]),l=[];for(let n=0;n<t.length;n+=1)l[n]=de(_e(a,t,n));const r=n=>v(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=T()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=T()},m(n,i){for(let f=0;f<l.length;f+=1)l[f].m(n,i);d(n,e,i),s=!0},p(n,i){if(i&15){t=n[7].filter(n[5]);let f;for(f=0;f<t.length;f+=1){const m=_e(n,t,f);l[f]?(l[f].p(m,i),$(l[f],1)):(l[f]=de(m),l[f].c(),$(l[f],1),l[f].m(e.parentNode,e))}for(W(),f=t.length;f<l.length;f+=1)r(f);M()}},i(n){if(!s){for(let i=0;i<t.length;i+=1)$(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)v(l[i]);s=!1},d(n){ze(l,n),n&&_(e)}}}function $e(a){let e,s;return e=new H({props:{stroke:"currentcolor",name:"checkMark"}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function de(a){let e,s,t,l,r=a[8].namespace+"",n,i,f,m,c,u,o=a[8].namespace===a[2]&&$e();function p(){return a[6](a[8])}return{c(){e=b("li"),s=b("div"),o&&o.c(),t=U(),l=b("a"),n=B(r),f=U(),this.h()},l(g){e=w(g,"LI",{class:!0});var V=N(e);s=w(V,"DIV",{class:!0});var L=N(s);o&&o.l(L),L.forEach(_),t=A(V),l=w(V,"A",{href:!0,class:!0});var k=N(l);n=G(k,r),k.forEach(_),f=A(V),V.forEach(_),this.h()},h(){h(s,"class","w-6 h-6 pl-3 active svelte-12338m3"),h(l,"href",i=a[8].href),h(l,"class","link svelte-12338m3"),O(l,"active",a[2]===a[8].namespace),h(e,"class","first:rounded-t-md first:border-t last:rounded-b-md border-b border-l border-r p-3 flex border-collapse gap-2 hover:bg-gray-50 cursor-pointer")},m(g,V){d(g,e,V),E(e,s),o&&o.m(s,null),E(e,t),E(e,l),E(l,n),E(e,f),m=!0,c||(u=Y(e,"click",p),c=!0)},p(g,V){a=g,a[8].namespace===a[2]?o?V&14&&$(o,1):(o=$e(),o.c(),$(o,1),o.m(s,null)):o&&(W(),v(o,1,1,()=>{o=null}),M()),(!m||V&10)&&r!==(r=a[8].namespace+"")&&Q(n,r),(!m||V&10&&i!==(i=a[8].href))&&h(l,"href",i),V&14&&O(l,"active",a[2]===a[8].namespace)},i(g){m||($(o),m=!0)},o(g){v(o),m=!1},d(g){g&&_(e),o&&o.d(),c=!1,u()}}}function Qe(a){let e;return{c(){e=B("Loading ...")},l(s){e=G(s,"Loading ...")},m(s,t){d(s,e,t)},p:S,i:S,o:S,d(s){s&&_(e)}}}function Xe(a){let e,s,t,l,r,n,i,f,m,c,u,o,p,g,V,L,k=a[2]&&pe(a);f=new H({props:{name:"search",scale:1}});let q={ctx:a,current:null,token:null,hasCatch:!1,pending:Qe,then:je,catch:Re,value:7,blocks:[,,,]};return le(p=a[1],q),{c(){e=b("div"),s=b("h2"),t=B("Select a namespace"),l=U(),k&&k.c(),r=U(),n=b("div"),i=b("div"),I(f.$$.fragment),m=U(),c=b("input"),u=U(),o=b("ul"),q.block.c(),this.h()},l(F){e=w(F,"DIV",{class:!0});var P=N(e);s=w(P,"H2",{class:!0});var Z=N(s);t=G(Z,"Select a namespace"),Z.forEach(_),l=A(P),k&&k.l(P),P.forEach(_),r=A(F),n=w(F,"DIV",{class:!0});var y=N(n);i=w(y,"DIV",{class:!0});var oe=N(i);D(f.$$.fragment,oe),oe.forEach(_),m=A(y),c=w(y,"INPUT",{class:!0,placeholder:!0}),y.forEach(_),u=A(F),o=w(F,"UL",{"data-cy":!0});var ue=N(o);q.block.l(ue),ue.forEach(_),this.h()},h(){h(s,"class","text-2xl"),h(e,"class","prose mt-16 mb-8"),h(i,"class","ml-4 mr-2"),h(c,"class","w-full"),h(c,"placeholder","Search"),h(n,"class","mb-5 flex rounded-full border p-1 pr-4"),h(o,"data-cy","namespace-list")},m(F,P){d(F,e,P),E(e,s),E(s,t),E(e,l),k&&k.m(e,null),d(F,r,P),d(F,n,P),E(n,i),C(f,i,null),E(n,m),E(n,c),ce(c,a[3]),d(F,u,P),d(F,o,P),q.block.m(o,q.anchor=null),q.mount=()=>o,q.anchor=null,g=!0,V||(L=Y(c,"input",a[4]),V=!0)},p(F,[P]){a=F,a[2]?k?k.p(a,P):(k=pe(a),k.c(),k.m(e,null)):k&&(k.d(1),k=null),P&8&&c.value!==a[3]&&ce(c,a[3]),q.ctx=a,P&2&&p!==(p=a[1])&&le(p,q)||Ce(q,a,P)},i(F){g||($(f.$$.fragment,F),$(q.block),g=!0)},o(F){v(f.$$.fragment,F);for(let P=0;P<3;P+=1){const Z=q.blocks[P];v(Z)}g=!1},d(F){F&&_(e),k&&k.d(),F&&_(r),F&&_(n),z(f),F&&_(u),F&&_(o),q.block.d(),q.token=null,q=null,V=!1,L()}}}function Ze(a,e,s){let t,{namespaceList:l}=e,{activeNamespace:r}=e,{lastUsedNamespace:n}=e;function i(){t=this.value,s(3,t)}const f=({namespace:c})=>c.includes(t),m=c=>{c.onClick(),s(0,n=c.namespace)};return a.$$set=c=>{"namespaceList"in c&&s(1,l=c.namespaceList),"activeNamespace"in c&&s(2,r=c.activeNamespace),"lastUsedNamespace"in c&&s(0,n=c.lastUsedNamespace)},s(3,t=""),[n,l,r,t,i,f,m]}class ye extends j{constructor(e){super(),J(this,e,Ze,Xe,K,{namespaceList:1,activeNamespace:2,lastUsedNamespace:0})}}function xe(a){const e=s=>{a&&!a.contains(s.target)&&!s.defaultPrevented&&a.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function et(a){let e,s,t,l,r,n,i,f;l=new H({props:{name:"close",scale:1}});const m=a[4].default,c=re(m,a,a[3],null);return{c(){e=b("div"),s=b("div"),t=b("div"),I(l.$$.fragment),r=U(),c&&c.c(),this.h()},l(u){e=w(u,"DIV",{class:!0});var o=N(e);s=w(o,"DIV",{class:!0});var p=N(s);t=w(p,"DIV",{class:!0});var g=N(t);D(l.$$.fragment,g),g.forEach(_),p.forEach(_),r=A(o),c&&c.l(o),o.forEach(_),this.h()},h(){h(t,"class","absolute right-0 top-0 cursor-pointer"),h(s,"class","relative"),h(e,"class",Ve("transition-width absolute right-[300px] z-10 h-full w-[300px] overflow-auto border-r-2 border-gray-200 bg-white p-5 text-gray-900 md:right-[500px] md:w-[500px]")+" svelte-1qwi0bt"),O(e,"flyin",a[0]),O(e,"flyout",a[1])},m(u,o){d(u,e,o),E(e,s),E(s,t),C(l,t,null),E(e,r),c&&c.m(e,null),n=!0,i||(f=[Y(t,"click",function(){ne(a[2])&&a[2].apply(this,arguments)}),Se(xe.call(null,e)),Y(e,"click-outside",function(){ne(a[2])&&a[2].apply(this,arguments)})],i=!0)},p(u,[o]){a=u,c&&c.p&&(!n||o&8)&&ae(c,m,a,a[3],n?fe(m,a[3],o,null):ie(a[3]),null),o&1&&O(e,"flyin",a[0]),o&2&&O(e,"flyout",a[1])},i(u){n||($(l.$$.fragment,u),$(c,u),n=!0)},o(u){v(l.$$.fragment,u),v(c,u),n=!1},d(u){u&&_(e),z(l),c&&c.d(u),i=!1,Ue(f)}}}function tt(a,e,s){let{$$slots:t={},$$scope:l}=e,{flyin:r}=e,{flyout:n}=e,{onClose:i}=e;return a.$$set=f=>{"flyin"in f&&s(0,r=f.flyin),"flyout"in f&&s(1,n=f.flyout),"onClose"in f&&s(2,i=f.onClose),"$$scope"in f&&s(3,l=f.$$scope)},[r,n,i,l,t]}class lt extends j{constructor(e){super(),J(this,e,tt,et,K,{flyin:0,flyout:1,onClose:2})}}const st=a=>({}),ve=a=>({});function nt(a){let e;const s=a[2].default,t=re(s,a,a[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&2)&&ae(t,s,l,l[1],e?fe(s,l[1],r,null):ie(l[1]),null)},i(l){e||($(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function rt(a){let e;const s=a[2].fallback,t=re(s,a,a[1],ve);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&2)&&ae(t,s,l,l[1],e?fe(s,l[1],r,st):ie(l[1]),ve)},i(l){e||($(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function at(a){let e,s,t,l;const r=[rt,nt],n=[];function i(f,m){return f[0].stuff.settings.runtimeEnvironment.isCloud?0:1}return e=i(a),s=n[e]=r[e](a),{c(){s.c(),t=T()},l(f){s.l(f),t=T()},m(f,m){n[e].m(f,m),d(f,t,m),l=!0},p(f,[m]){let c=e;e=i(f),e===c?n[e].p(f,m):(W(),v(n[c],1,1,()=>{n[c]=null}),M(),s=n[e],s?s.p(f,m):(s=n[e]=r[e](f),s.c()),$(s,1),s.m(t.parentNode,t))},i(f){l||($(s),l=!0)},o(f){v(s),l=!1},d(f){n[e].d(f),f&&_(t)}}}function it(a,e,s){let t;se(a,De,n=>s(0,t=n));let{$$slots:l={},$$scope:r}=e;return a.$$set=n=>{"$$scope"in n&&s(1,r=n.$$scope)},[t,r,l]}class Le extends j{constructor(e){super(),J(this,e,it,at,K,{})}}function he(a,e,s){const t=a.slice();return t[14]=e[s],t}function ft(a){let e,s,t;return s=new H({props:{name:"namespaceSelect",scale:1.6}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=N(e);D(s.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(l,r){d(l,e,r),C(s,e,null),t=!0},p:S,i(l){t||($(s.$$.fragment,l),t=!0)},o(l){v(s.$$.fragment,l),t=!1},d(l){l&&_(e),z(s)}}}function ot(a){var c,u;let e,s,t,l,r=((c=a[1])!=null?c:"Namespaces")+"",n,i,f,m;return s=new X({props:{right:!0,hide:a[10],text:(u=a[1])!=null?u:"Namespaces",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){e=b("div"),I(s.$$.fragment),t=U(),l=b("div"),n=B(r),this.h()},l(o){e=w(o,"DIV",{class:!0});var p=N(e);D(s.$$.fragment,p),t=A(p),l=w(p,"DIV",{class:!0});var g=N(l);n=G(g,r),g.forEach(_),p.forEach(_),this.h()},h(){h(l,"class","nav-title namespace svelte-aivzzg"),h(e,"class","relative flex cursor-pointer items-center")},m(o,p){d(o,e,p),C(s,e,null),E(e,t),E(e,l),E(l,n),i=!0,f||(m=Y(e,"click",a[12]),f=!0)},p(o,p){var V,L;const g={};p&1024&&(g.hide=o[10]),p&2&&(g.text=(V=o[1])!=null?V:"Namespaces"),p&131072&&(g.$$scope={dirty:p,ctx:o}),s.$set(g),(!i||p&2)&&r!==(r=((L=o[1])!=null?L:"Namespaces")+"")&&Q(n,r)},i(o){i||($(s.$$.fragment,o),i=!0)},o(o){v(s.$$.fragment,o),i=!1},d(o){o&&_(e),z(s),f=!1,m()}}}function ut(a){let e,s,t;return s=new H({props:{name:"workflow",scale:1.5}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=N(e);D(s.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(l,r){d(l,e,r),C(s,e,null),t=!0},p:S,i(l){t||($(s.$$.fragment,l),t=!0)},o(l){v(s.$$.fragment,l),t=!1},d(l){l&&_(e),z(s)}}}function ct(a){let e,s,t,l,r;return e=new X({props:{right:!0,hide:a[10],text:"Workflows",$$slots:{default:[ut]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=U(),t=b("div"),l=B("Workflows"),this.h()},l(n){D(e.$$.fragment,n),s=A(n),t=w(n,"DIV",{class:!0});var i=N(t);l=G(i,"Workflows"),i.forEach(_),this.h()},h(){h(t,"class","nav-title svelte-aivzzg")},m(n,i){C(e,n,i),d(n,s,i),d(n,t,i),E(t,l),r=!0},p(n,i){const f={};i&1024&&(f.hide=n[10]),i&131072&&(f.$$scope={dirty:i,ctx:n}),e.$set(f)},i(n){r||($(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){z(e,n),n&&_(s),n&&_(t)}}}function mt(a){let e,s,t;return s=new H({props:{name:"archive",scale:1.2}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=N(e);D(s.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(l,r){d(l,e,r),C(s,e,null),t=!0},p:S,i(l){t||($(s.$$.fragment,l),t=!0)},o(l){v(s.$$.fragment,l),t=!1},d(l){l&&_(e),z(s)}}}function _t(a){let e,s,t,l,r;return e=new X({props:{right:!0,hide:a[10],text:"Archive",$$slots:{default:[mt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=U(),t=b("div"),l=B("Archive"),this.h()},l(n){D(e.$$.fragment,n),s=A(n),t=w(n,"DIV",{class:!0});var i=N(t);l=G(i,"Archive"),i.forEach(_),this.h()},h(){h(t,"class","nav-title svelte-aivzzg")},m(n,i){C(e,n,i),d(n,s,i),d(n,t,i),E(t,l),r=!0},p(n,i){const f={};i&1024&&(f.hide=n[10]),i&131072&&(f.$$scope={dirty:i,ctx:n}),e.$set(f)},i(n){r||($(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){z(e,n),n&&_(s),n&&_(t)}}}function pt(a){let e,s;return e=new R({props:{link:a[3].archive,isCloud:a[0],"data-cy":"archive-button",$$slots:{default:[_t]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&8&&(r.link=t[3].archive),l&1&&(r.isCloud=t[0]),l&132096&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function $t(a){let e,s,t,l,r,n;return e=new R({props:{isCloud:a[0],wrap:!0,"data-cy":"namespace-select-button",$$slots:{default:[ot]},$$scope:{ctx:a}}}),t=new R({props:{link:a[3].workflows,isCloud:a[0],"data-cy":"worfklows-button",$$slots:{default:[ct]},$$scope:{ctx:a}}}),r=new Le({props:{$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=U(),I(t.$$.fragment),l=U(),I(r.$$.fragment)},l(i){D(e.$$.fragment,i),s=A(i),D(t.$$.fragment,i),l=A(i),D(r.$$.fragment,i)},m(i,f){C(e,i,f),d(i,s,f),C(t,i,f),d(i,l,f),C(r,i,f),n=!0},p(i,f){const m={};f&1&&(m.isCloud=i[0]),f&132098&&(m.$$scope={dirty:f,ctx:i}),e.$set(m);const c={};f&8&&(c.link=i[3].workflows),f&1&&(c.isCloud=i[0]),f&132096&&(c.$$scope={dirty:f,ctx:i}),t.$set(c);const u={};f&132105&&(u.$$scope={dirty:f,ctx:i}),r.$set(u)},i(i){n||($(e.$$.fragment,i),$(t.$$.fragment,i),$(r.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),v(t.$$.fragment,i),v(r.$$.fragment,i),n=!1},d(i){z(e,i),i&&_(s),z(t,i),i&&_(l),z(r,i)}}}function ge(a){let e,s,t=a[5],l=[];for(let n=0;n<t.length;n+=1)l[n]=ke(he(a,t,n));const r=n=>v(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=T()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=T()},m(n,i){for(let f=0;f<l.length;f+=1)l[f].m(n,i);d(n,e,i),s=!0},p(n,i){if(i&33){t=n[5];let f;for(f=0;f<t.length;f+=1){const m=he(n,t,f);l[f]?(l[f].p(m,i),$(l[f],1)):(l[f]=ke(m),l[f].c(),$(l[f],1),l[f].m(e.parentNode,e))}for(W(),f=t.length;f<l.length;f+=1)r(f);M()}},i(n){if(!s){for(let i=0;i<t.length;i+=1)$(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)v(l[i]);s=!1},d(n){ze(l,n),n&&_(e)}}}function dt(a){let e,s,t,l,r=a[14].name+"",n,i,f;var m=a[14].component;function c(u){return{}}return m&&(s=new m(c())),{c(){e=b("div"),s&&I(s.$$.fragment),t=U(),l=b("div"),n=B(r),i=U(),this.h()},l(u){e=w(u,"DIV",{class:!0});var o=N(e);s&&D(s.$$.fragment,o),o.forEach(_),t=A(u),l=w(u,"DIV",{class:!0});var p=N(l);n=G(p,r),p.forEach(_),i=A(u),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg"),h(l,"class","nav-title svelte-aivzzg")},m(u,o){d(u,e,o),s&&C(s,e,null),d(u,t,o),d(u,l,o),E(l,n),d(u,i,o),f=!0},p(u,o){if(m!==(m=u[14].component)){if(s){W();const p=s;v(p.$$.fragment,1,0,()=>{z(p,1)}),M()}m?(s=new m(c()),I(s.$$.fragment),$(s.$$.fragment,1),C(s,e,null)):s=null}(!f||o&32)&&r!==(r=u[14].name+"")&&Q(n,r)},i(u){f||(s&&$(s.$$.fragment,u),f=!0)},o(u){s&&v(s.$$.fragment,u),f=!1},d(u){u&&_(e),s&&z(s),u&&_(t),u&&_(l),u&&_(i)}}}function ke(a){let e,s;return e=new R({props:{isCloud:a[0],noFilter:!0,$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.isCloud=t[0]),l&131104&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function vt(a){let e,s,t;return s=new H({props:{name:"settings",scale:1.4}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=N(e);D(s.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(l,r){d(l,e,r),C(s,e,null),t=!0},p:S,i(l){t||($(s.$$.fragment,l),t=!0)},o(l){v(s.$$.fragment,l),t=!1},d(l){l&&_(e),z(s)}}}function ht(a){let e,s,t,l,r;return e=new X({props:{right:!0,hide:a[10],text:"Settings",$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=U(),t=b("div"),l=B("Settings"),this.h()},l(n){D(e.$$.fragment,n),s=A(n),t=w(n,"DIV",{class:!0});var i=N(t);l=G(i,"Settings"),i.forEach(_),this.h()},h(){h(t,"class","nav-title svelte-aivzzg")},m(n,i){C(e,n,i),d(n,s,i),d(n,t,i),E(t,l),r=!0},p(n,i){const f={};i&1024&&(f.hide=n[10]),i&131072&&(f.$$scope={dirty:i,ctx:n}),e.$set(f)},i(n){r||($(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){z(e,n),n&&_(s),n&&_(t)}}}function gt(a){let e,s;return e=new R({props:{link:a[3].settings,isCloud:a[0],"data-cy":"settings-button",$$slots:{default:[ht]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&8&&(r.link=t[3].settings),l&1&&(r.isCloud=t[0]),l&132096&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function kt(a){let e,s,t;return s=new H({props:{name:"feedback",scale:1.4}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=N(e);D(s.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(l,r){d(l,e,r),C(s,e,null),t=!0},p:S,i(l){t||($(s.$$.fragment,l),t=!0)},o(l){v(s.$$.fragment,l),t=!1},d(l){l&&_(e),z(s)}}}function bt(a){let e,s,t,l,r;return e=new X({props:{right:!0,hide:a[10],text:"Feedback",$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=U(),t=b("div"),l=B("Feedback"),this.h()},l(n){D(e.$$.fragment,n),s=A(n),t=w(n,"DIV",{class:!0});var i=N(t);l=G(i,"Feedback"),i.forEach(_),this.h()},h(){h(t,"class","nav-title svelte-aivzzg")},m(n,i){C(e,n,i),d(n,s,i),d(n,t,i),E(t,l),r=!0},p(n,i){const f={};i&1024&&(f.hide=n[10]),i&131072&&(f.$$scope={dirty:i,ctx:n}),e.$set(f)},i(n){r||($(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){z(e,n),n&&_(s),n&&_(t)}}}function wt(a){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Nt(a){var l;let e,s,t=((l=a[6])==null?void 0:l.email)&&be(a);return{c(){t&&t.c(),e=T()},l(r){t&&t.l(r),e=T()},m(r,n){t&&t.m(r,n),d(r,e,n),s=!0},p(r,n){var i;(i=r[6])!=null&&i.email?t?(t.p(r,n),n&64&&$(t,1)):(t=be(r),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(W(),v(t,1,1,()=>{t=null}),M())},i(r){s||($(t),s=!0)},o(r){v(t),s=!1},d(r){t&&t.d(r),r&&_(e)}}}function be(a){var c,u;let e,s,t,l,r,n,i;e=new R({props:{isCloud:a[0],$$slots:{default:[It]},$$scope:{ctx:a}}});let f=((c=a[6])==null?void 0:c.picture)&&we(a),m=((u=a[6])==null?void 0:u.name)&&Ee(a);return{c(){I(e.$$.fragment),s=U(),t=b("div"),l=b("div"),f&&f.c(),r=U(),n=b("div"),m&&m.c(),this.h()},l(o){D(e.$$.fragment,o),s=A(o),t=w(o,"DIV",{class:!0});var p=N(t);l=w(p,"DIV",{});var g=N(l);f&&f.l(g),g.forEach(_),r=A(p),n=w(p,"DIV",{class:!0});var V=N(n);m&&m.l(V),V.forEach(_),p.forEach(_),this.h()},h(){h(n,"class","nav-title truncate svelte-aivzzg"),h(t,"class","profile-row svelte-aivzzg")},m(o,p){C(e,o,p),d(o,s,p),d(o,t,p),E(t,l),f&&f.m(l,null),E(t,r),E(t,n),m&&m.m(n,null),i=!0},p(o,p){var V,L;const g={};p&1&&(g.isCloud=o[0]),p&132176&&(g.$$scope={dirty:p,ctx:o}),e.$set(g),(V=o[6])!=null&&V.picture?f?f.p(o,p):(f=we(o),f.c(),f.m(l,null)):f&&(f.d(1),f=null),(L=o[6])!=null&&L.name?m?m.p(o,p):(m=Ee(o),m.c(),m.m(n,null)):m&&(m.d(1),m=null)},i(o){i||($(e.$$.fragment,o),i=!0)},o(o){v(e.$$.fragment,o),i=!1},d(o){z(e,o),o&&_(s),o&&_(t),f&&f.d(),m&&m.d()}}}function Et(a){let e,s,t,l,r;return s=new H({props:{name:"logout",scale:1.4}}),{c(){e=b("div"),I(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=N(e);D(s.$$.fragment,i),i.forEach(_),this.h()},h(){h(e,"class","nav-icon svelte-aivzzg")},m(n,i){d(n,e,i),C(s,e,null),t=!0,l||(r=Y(e,"click",function(){ne(a[4])&&a[4].apply(this,arguments)}),l=!0)},p(n,i){a=n},i(n){t||($(s.$$.fragment,n),t=!0)},o(n){v(s.$$.fragment,n),t=!1},d(n){n&&_(e),z(s),l=!1,r()}}}function It(a){let e,s,t,l,r;return e=new X({props:{right:!0,hide:a[10],text:"Logout",$$slots:{default:[Et]},$$scope:{ctx:a}}}),l=new Ye({props:{user:a[6]}}),{c(){I(e.$$.fragment),s=U(),t=b("div"),I(l.$$.fragment),this.h()},l(n){D(e.$$.fragment,n),s=A(n),t=w(n,"DIV",{class:!0});var i=N(t);D(l.$$.fragment,i),i.forEach(_),this.h()},h(){h(t,"class","nav-title svelte-aivzzg")},m(n,i){C(e,n,i),d(n,s,i),d(n,t,i),C(l,t,null),r=!0},p(n,i){const f={};i&1024&&(f.hide=n[10]),i&131088&&(f.$$scope={dirty:i,ctx:n}),e.$set(f);const m={};i&64&&(m.user=n[6]),l.$set(m)},i(n){r||($(e.$$.fragment,n),$(l.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),r=!1},d(n){z(e,n),n&&_(s),n&&_(t),z(l)}}}function we(a){var m;let e,s,t,l,r,n,i,f=((m=a[6])==null?void 0:m.name)&&Ne(a);return{c(){e=b("img"),l=U(),r=b("div"),f&&f.c(),this.h()},l(c){e=w(c,"IMG",{src:!0,alt:!0,class:!0}),l=A(c),r=w(c,"DIV",{class:!0});var u=N(r);f&&f.l(u),u.forEach(_),this.h()},h(){var c,u;te(e.src,s=(c=a[6])==null?void 0:c.picture)||h(e,"src",s),h(e,"alt",t=(u=a[6])==null?void 0:u.profile),h(e,"class","rounded-md p-1 w-8 h-8"),O(e,"hidden",!a[7]),h(r,"class","rounded-full p-0.5 bg-blue-200 h-full aspect-square"),O(r,"hidden",a[7])},m(c,u){d(c,e,u),d(c,l,u),d(c,r,u),f&&f.m(r,null),n||(i=Y(e,"error",a[11]),n=!0)},p(c,u){var o,p,g;u&64&&!te(e.src,s=(o=c[6])==null?void 0:o.picture)&&h(e,"src",s),u&64&&t!==(t=(p=c[6])==null?void 0:p.profile)&&h(e,"alt",t),u&128&&O(e,"hidden",!c[7]),(g=c[6])!=null&&g.name?f?f.p(c,u):(f=Ne(c),f.c(),f.m(r,null)):f&&(f.d(1),f=null),u&128&&O(r,"hidden",c[7])},d(c){c&&_(e),c&&_(l),c&&_(r),f&&f.d(),n=!1,i()}}}function Ne(a){var l;let e,s=((l=a[6])==null?void 0:l.name.trim().charAt(0))+"",t;return{c(){e=b("div"),t=B(s),this.h()},l(r){e=w(r,"DIV",{class:!0});var n=N(e);t=G(n,s),n.forEach(_),this.h()},h(){h(e,"class","text-black text-center ")},m(r,n){d(r,e,n),E(e,t)},p(r,n){var i;n&64&&s!==(s=((i=r[6])==null?void 0:i.name.trim().charAt(0))+"")&&Q(t,s)},d(r){r&&_(e)}}}function Ee(a){var t;let e=((t=a[6])==null?void 0:t.name)+"",s;return{c(){s=B(e)},l(l){s=G(l,e)},m(l,r){d(l,s,r)},p(l,r){var n;r&64&&e!==(e=((n=l[6])==null?void 0:n.name)+"")&&Q(s,e)},d(l){l&&_(s)}}}function Ct(a){let e,s;return e=new R({props:{isCloud:a[0],$$slots:{default:[zt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.isCloud=t[0]),l&131072&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function zt(a){let e,s,t,l,r;return{c(){e=b("div"),s=b("div"),t=U(),l=b("div"),r=b("div"),this.h()},l(n){e=w(n,"DIV",{class:!0,style:!0});var i=N(e);s=w(i,"DIV",{class:!0}),N(s).forEach(_),i.forEach(_),t=A(n),l=w(n,"DIV",{class:!0});var f=N(l);r=w(f,"DIV",{class:!0}),N(r).forEach(_),f.forEach(_),this.h()},h(){h(s,"class","rounded-full bg-blueGray-200 h-full aspect-square"),h(e,"class","motion-safe:animate-pulse"),Ae(e,"margin-left","1rem"),h(r,"class","h-2 bg-blueGray-50 rounded mt-1"),h(l,"class","nav-title svelte-aivzzg")},m(n,i){d(n,e,i),E(e,s),d(n,t,i),d(n,l,i),E(l,r)},p:S,d(n){n&&_(e),n&&_(t),n&&_(l)}}}function Dt(a){let e,s,t,l,r,n,i,f,m=a[5]&&ge(a);s=new Le({props:{$$slots:{default:[gt]},$$scope:{ctx:a}}}),l=new R({props:{link:a[3].feedback,isCloud:a[0],externalLink:!0,$$slots:{default:[bt]},$$scope:{ctx:a}}});let c={ctx:a,current:null,token:null,hasCatch:!1,pending:Ct,then:Nt,catch:wt,value:6,blocks:[,,,]};return le(i=a[6],c),{c(){m&&m.c(),e=U(),I(s.$$.fragment),t=U(),I(l.$$.fragment),r=U(),n=T(),c.block.c()},l(u){m&&m.l(u),e=A(u),D(s.$$.fragment,u),t=A(u),D(l.$$.fragment,u),r=A(u),n=T(),c.block.l(u)},m(u,o){m&&m.m(u,o),d(u,e,o),C(s,u,o),d(u,t,o),C(l,u,o),d(u,r,o),d(u,n,o),c.block.m(u,c.anchor=o),c.mount=()=>n.parentNode,c.anchor=n,f=!0},p(u,o){a=u,a[5]?m?(m.p(a,o),o&32&&$(m,1)):(m=ge(a),m.c(),$(m,1),m.m(e.parentNode,e)):m&&(W(),v(m,1,1,()=>{m=null}),M());const p={};o&132105&&(p.$$scope={dirty:o,ctx:a}),s.$set(p);const g={};o&8&&(g.link=a[3].feedback),o&1&&(g.isCloud=a[0]),o&132096&&(g.$$scope={dirty:o,ctx:a}),l.$set(g),c.ctx=a,o&64&&i!==(i=a[6])&&le(i,c)||Ce(c,a,o)},i(u){f||($(m),$(s.$$.fragment,u),$(l.$$.fragment,u),$(c.block),f=!0)},o(u){v(m),v(s.$$.fragment,u),v(l.$$.fragment,u);for(let o=0;o<3;o+=1){const p=c.blocks[o];v(p)}f=!1},d(u){m&&m.d(u),u&&_(e),z(s,u),u&&_(t),z(l,u),u&&_(r),u&&_(n),c.block.d(u),c.token=null,c=null}}}function Ie(a){let e,s;return e=new ye({props:{namespaceList:a[2],activeNamespace:a[1],lastUsedNamespace:a[9]}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&4&&(r.namespaceList=t[2]),l&2&&(r.activeNamespace=t[1]),l&512&&(r.lastUsedNamespace=t[9]),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function Lt(a){let e,s,t=a[8]&&Ie(a);return{c(){t&&t.c(),e=T()},l(l){t&&t.l(l),e=T()},m(l,r){t&&t.m(l,r),d(l,e,r),s=!0},p(l,r){l[8]?t?(t.p(l,r),r&256&&$(t,1)):(t=Ie(l),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(W(),v(t,1,1,()=>{t=null}),M())},i(l){s||($(t),s=!0)},o(l){v(t),s=!1},d(l){t&&t.d(l),l&&_(e)}}}function Vt(a){let e,s;return e=new lt({props:{flyin:a[8]===!0,flyout:a[8]===!1,onClose:a[13],$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,l){const r={};l&256&&(r.flyin=t[8]===!0),l&256&&(r.flyout=t[8]===!1),l&256&&(r.onClose=t[13]),l&131846&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function St(a){let e,s;return e=new Be({props:{isCloud:a[0],linkList:a[3],$$slots:{drawer:[Vt],bottom:[Dt],top:[$t]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,[l]){const r={};l&1&&(r.isCloud=t[0]),l&8&&(r.linkList=t[3]),l&133119&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function Ut(a,e,s){let t,l;se(a,We,k=>s(9,t=k)),se(a,Ge,k=>s(10,l=k));let{isCloud:r=!1}=e,{activeNamespace:n}=e,{namespaceList:i=null}=e,{linkList:f}=e,{user:m=null}=e,{logout:c}=e,{extras:u=null}=e,o=!0,p=null;function g(){s(7,o=!1)}function V(){s(8,p=!p)}Fe(()=>{p&&s(8,p=!1)});const L=()=>{p===!0&&s(8,p=!1)};return a.$$set=k=>{"isCloud"in k&&s(0,r=k.isCloud),"activeNamespace"in k&&s(1,n=k.activeNamespace),"namespaceList"in k&&s(2,i=k.namespaceList),"linkList"in k&&s(3,f=k.linkList),"user"in k&&s(6,m=k.user),"logout"in k&&s(4,c=k.logout),"extras"in k&&s(5,u=k.extras)},[r,n,i,f,c,u,m,o,p,t,l,g,V,L]}class At extends j{constructor(e){super(),J(this,e,Ut,St,K,{isCloud:0,activeNamespace:1,namespaceList:2,linkList:3,user:6,logout:4,extras:5})}}function Ft(a){let e,s;return e=new At({props:{namespaceList:Promise.resolve(a[4]),activeNamespace:a[1],linkList:a[2],isCloud:a[3],user:Promise.resolve(a[0]),logout:a[5],extras:[{component:Oe,name:"Data Encoder"}]}}),{c(){I(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p(t,[l]){const r={};l&2&&(r.activeNamespace=t[1]),l&4&&(r.linkList=t[2]),l&1&&(r.user=Promise.resolve(t[0])),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function Pt(a,e,s){let t,l,r;se(a,De,L=>s(10,r=L));var n,i,f,m;let{user:c}=e;const{showTemporalSystemNamespace:u}=r.stuff.settings,{isCloud:o}=r.stuff.settings.runtimeEnvironment,p=(r.stuff.namespaces||[]).map(L=>{var k;return(k=L==null?void 0:L.namespaceInfo)===null||k===void 0?void 0:k.name}).filter(L=>u||L!=="temporal-system"),g=p.map(L=>{const k=x({namespace:L});return{namespace:L,href:k,onClick:()=>ee(k)}});if(o&&r.params.namespace&&!p.length){const L=x({namespace:r.params.namespace});g.push({namespace:r.params.namespace,href:L,onClick:()=>ee(L)})}const V=()=>ee("/auth/logout");return a.$$set=L=>{"user"in L&&s(0,c=L.user)},a.$$.update=()=>{a.$$.dirty&1216&&s(1,t=r.params.namespace||(s(7,i=s(6,n=r.stuff)===null||n===void 0?void 0:n.settings)===null||i===void 0?void 0:i.defaultNamespace)),a.$$.dirty&1794&&s(2,l={home:x({namespace:t}),archive:Pe({namespace:t}),settings:Te({namespace:t}),workflows:x({namespace:t}),feedback:(s(9,m=s(8,f=r.stuff)===null||f===void 0?void 0:f.settings)===null||m===void 0?void 0:m.feedbackURL)||"https://github.com/temporalio/ui/issues/new/choose"})},[c,t,l,o,g,V,n,i,f,m,r]}class yt extends j{constructor(e){super(),J(this,e,Pt,Ft,K,{user:0})}}export{yt as default};
