import{S as Se,b as Ae,a as Fe,m as v,w as V,c as F,C as W,p as g,q as E,x as S,k as c,d as Q,D as L,u as k,f as h,L as w,E as K,y as re,j as T,z as J,g as D,h as U,F as M,K as ue,e as G,aa as Ne,ab as Re,n as Y,a7 as Qe,R as ce}from"./index.19667caa.js";import{B as Be}from"./badge.e6dd2cb5.js";import{c as Oe,C as ie}from"./pollers-service.787a1388.js";import{E as He}from"./empty-state.d9e10938.js";import{I as ae}from"./icon.9c98cf68.js";import{T as Ce,a as Pe}from"./table-header-row.08410b2d.js";import{T as Ve}from"./table-row.fc62bb00.js";import{t as A}from"./translate.d17b5f26.js";import{t as qe,r as We,b as _e}from"./format-date.55634e74.js";import{d as Le,a as Ke,e as Me,f as me,h as de}from"./task-queue-compatibility.cf5696f8.js";function pe(n,e,l){const t=n.slice();t[8]=e[l];const r=Me(t[8]);t[9]=r;const s=Oe(t[2],t[0],t[9]);return t[10]=s,t}function he(n,e,l){const t=n.slice();return t[13]=e[l],t[15]=l,t}function $e(n,e,l){const t=n.slice();return t[9]=e[l],t}function be(n){let e,l=A("workers","version-sets")+"",t,r,s,u;return s=new Ce({props:{class:"mb-6 w-full min-w-[600px] table-fixed",$$slots:{headers:[Xe],default:[Je]},$$scope:{ctx:n}}}),{c(){e=v("h2"),t=V(l),r=F(),W(s.$$.fragment),this.h()},l(a){e=g(a,"H2",{class:!0,"data-testid":!0});var f=E(e);t=S(f,l),f.forEach(c),r=Q(a),L(s.$$.fragment,a),this.h()},h(){k(e,"class","text-base font-medium"),k(e,"data-testid","version-sets")},m(a,f){h(a,e,f),w(e,t),h(a,r,f),K(s,a,f),u=!0},p(a,f){const i={};f&262160&&(i.$$scope={dirty:f,ctx:a}),s.$set(i)},i(a){u||(T(s.$$.fragment,a),u=!0)},o(a){D(s.$$.fragment,a),u=!1},d(a){a&&c(e),a&&c(r),M(s,a)}}}function ke(n){let e,l,t,r,s;return t=new He({props:{title:A("workers","no-version-sets-found")}}),{c(){e=v("tr"),l=v("td"),W(t.$$.fragment),r=F(),this.h()},l(u){e=g(u,"TR",{class:!0});var a=E(e);l=g(a,"TD",{colspan:!0});var f=E(l);L(t.$$.fragment,f),f.forEach(c),r=Q(a),a.forEach(c),this.h()},h(){k(l,"colspan","6"),k(e,"class","w-full")},m(u,a){h(u,e,a),w(e,l),K(t,l,null),w(e,r),s=!0},p:Y,i(u){s||(T(t.$$.fragment,u),s=!0)},o(u){D(t.$$.fragment,u),s=!1},d(u){u&&c(e),M(t)}}}function we(n){let e=A("workers","overall")+"",l;return{c(){l=V(e)},l(t){l=S(t,e)},m(t,r){h(t,l,r)},p:Y,d(t){t&&c(l)}}}function je(n){let e,l=n[15]===0&&we();return{c(){l&&l.c(),e=G()},l(t){l&&l.l(t),e=G()},m(t,r){l&&l.m(t,r),h(t,e,r)},p(t,r){t[15]===0?l?l.p(t,r):(l=we(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&c(e)}}}function ze(n){let e=A("workers","default")+"",l;return{c(){l=V(e)},l(t){l=S(t,e)},m(t,r){h(t,l,r)},p:Y,d(t){t&&c(l)}}}function Ye(n){let e=A("workers","default")+"",l,t;return{c(){l=V(e),t=F()},l(r){l=S(r,e),t=Q(r)},m(r,s){h(r,l,s),h(r,t,s)},p:Y,d(r){r&&c(l),r&&c(t)}}}function ve(n){let e,l;return e=new ie({props:{active:!1,buildId:n[9],$$slots:{"default-worker":[Ye]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const s={};r&16&&(s.buildId=t[9]),r&262144&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function Ge(n){let e,l,t,r,s,u,a;l=new ie({props:{defaultVersion:!0,active:n[15]===0,buildId:me(n[13].buildIds),$$slots:{"default-worker":[ze],"overall-default-worker":[je]},$$scope:{ctx:n}}});let f=de(n[13].buildIds),i=[];for(let o=0;o<f.length;o+=1)i[o]=ve($e(n,f,o));const _=o=>D(i[o],1,1,()=>{i[o]=null});return{c(){e=v("td"),W(l.$$.fragment),t=F(),r=v("td"),s=v("div");for(let o=0;o<i.length;o+=1)i[o].c();u=F(),this.h()},l(o){e=g(o,"TD",{class:!0,"data-testid":!0});var d=E(e);L(l.$$.fragment,d),d.forEach(c),t=Q(o),r=g(o,"TD",{class:!0,"data-testid":!0});var y=E(r);s=g(y,"DIV",{class:!0});var b=E(s);for(let I=0;I<i.length;I+=1)i[I].l(b);b.forEach(c),y.forEach(c),u=Q(o),this.h()},h(){k(e,"class","text-left"),k(e,"data-testid","version-default"),k(s,"class","flex gap-2 noto flex-wrap"),k(r,"class","text-left"),k(r,"data-testid","version-compatible-builds")},m(o,d){h(o,e,d),K(l,e,null),h(o,t,d),h(o,r,d),w(r,s);for(let y=0;y<i.length;y+=1)i[y].m(s,null);h(o,u,d),a=!0},p(o,d){const y={};if(d&16&&(y.active=o[15]===0),d&16&&(y.buildId=me(o[13].buildIds)),d&262160&&(y.$$scope={dirty:d,ctx:o}),l.$set(y),d&16){f=de(o[13].buildIds);let b;for(b=0;b<f.length;b+=1){const I=$e(o,f,b);i[b]?(i[b].p(I,d),T(i[b],1)):(i[b]=ve(I),i[b].c(),T(i[b],1),i[b].m(s,null))}for(J(),b=f.length;b<i.length;b+=1)_(b);U()}},i(o){if(!a){T(l.$$.fragment,o);for(let d=0;d<f.length;d+=1)T(i[d]);a=!0}},o(o){D(l.$$.fragment,o),i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)D(i[d]);a=!1},d(o){o&&c(e),M(l),o&&c(t),o&&c(r),Qe(i,o),o&&c(u)}}}function ge(n,e){let l,t,r;return t=new Ve({props:{"data-testid":"version-row",$$slots:{default:[Ge]},$$scope:{ctx:e}}}),{key:n,first:null,c(){l=G(),W(t.$$.fragment),this.h()},l(s){l=G(),L(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,u){h(s,l,u),K(t,s,u),r=!0},p(s,u){e=s;const a={};u&262160&&(a.$$scope={dirty:u,ctx:e}),t.$set(a)},i(s){r||(T(t.$$.fragment,s),r=!0)},o(s){D(t.$$.fragment,s),r=!1},d(s){s&&c(l),M(t,s)}}}function Je(n){let e=[],l=new Map,t,r,s=n[4];const u=f=>f[15];for(let f=0;f<s.length;f+=1){let i=he(n,s,f),_=u(i);l.set(_,e[f]=ge(_,i))}let a=null;return s.length||(a=ke()),{c(){for(let f=0;f<e.length;f+=1)e[f].c();t=G(),a&&a.c()},l(f){for(let i=0;i<e.length;i+=1)e[i].l(f);t=G(),a&&a.l(f)},m(f,i){for(let _=0;_<e.length;_+=1)e[_].m(f,i);h(f,t,i),a&&a.m(f,i),r=!0},p(f,i){i&16&&(s=f[4],J(),e=Ne(e,i,u,1,f,s,l,t.parentNode,Re,ge,t,he),U(),!s.length&&a?a.p(f,i):s.length?a&&(J(),D(a,1,1,()=>{a=null}),U()):(a=ke(),a.c(),T(a,1),a.m(t.parentNode,t)))},i(f){if(!r){for(let i=0;i<s.length;i+=1)T(e[i]);r=!0}},o(f){for(let i=0;i<e.length;i+=1)D(e[i]);r=!1},d(f){for(let i=0;i<e.length;i+=1)e[i].d(f);f&&c(t),a&&a.d(f)}}}function Ue(n){let e,l=A("workers","default")+"",t,r,s,u=A("workers","compatible-build-ids")+"",a;return{c(){e=v("th"),t=V(l),r=F(),s=v("th"),a=V(u),this.h()},l(f){e=g(f,"TH",{class:!0});var i=E(e);t=S(i,l),i.forEach(c),r=Q(f),s=g(f,"TH",{class:!0});var _=E(s);a=S(_,u),_.forEach(c),this.h()},h(){k(e,"class","w-3/12"),k(s,"class","w-9/12")},m(f,i){h(f,e,i),w(e,t),h(f,r,i),h(f,s,i),w(s,a)},p:Y,d(f){f&&c(e),f&&c(r),f&&c(s)}}}function Xe(n){let e,l;return e=new Pe({props:{slot:"headers",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const s={};r&262144&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function Ze(n){var t,r;let e=(((r=(t=n[1])==null?void 0:t.pollers)==null?void 0:r.length)||0)+"",l;return{c(){l=V(e)},l(s){l=S(s,e)},m(s,u){h(s,l,u)},p(s,u){var a,f;u&2&&e!==(e=(((f=(a=s[1])==null?void 0:a.pollers)==null?void 0:f.length)||0)+"")&&re(l,e)},d(s){s&&c(l)}}}function Ee(n){let e,l,t,r,s,u;return t=new He({props:{title:A("workflows","workers-empty-state")}}),{c(){e=v("tr"),l=v("td"),W(t.$$.fragment),s=F(),this.h()},l(a){e=g(a,"TR",{class:!0});var f=E(e);l=g(f,"TD",{colspan:!0});var i=E(l);L(t.$$.fragment,i),i.forEach(c),s=Q(f),f.forEach(c),this.h()},h(){var a,f;k(l,"colspan",r=(f=(a=n[2])==null?void 0:a.buildIdReachability)!=null&&f.length?8:6),k(e,"class","w-full")},m(a,f){h(a,e,f),w(e,l),K(t,l,null),w(e,s),u=!0},p(a,f){var i,_;(!u||f&4&&r!==(r=(_=(i=a[2])==null?void 0:i.buildIdReachability)!=null&&_.length?8:6))&&k(l,"colspan",r)},i(a){u||(T(t.$$.fragment,a),u=!0)},o(a){D(t.$$.fragment,a),u=!1},d(a){a&&c(e),M(t)}}}function Te(n){let e,l,t,r,s,u,a,f=n[10]+"",i,_;return t=new ie({props:{defaultVersion:n[9]===n[3],active:n[9]===n[3],buildId:n[9],$$slots:{"default-worker":[et],"overall-default-worker":[xe]},$$scope:{ctx:n}}}),{c(){e=v("td"),l=v("p"),W(t.$$.fragment),r=F(),s=v("td"),u=v("p"),a=v("span"),i=V(f),this.h()},l(o){e=g(o,"TD",{class:!0,"data-testid":!0});var d=E(e);l=g(d,"P",{class:!0});var y=E(l);L(t.$$.fragment,y),y.forEach(c),d.forEach(c),r=Q(o),s=g(o,"TD",{class:!0,"data-testid":!0});var b=E(s);u=g(b,"P",{});var I=E(u);a=g(I,"SPAN",{class:!0});var P=E(a);i=S(P,f),P.forEach(c),I.forEach(c),b.forEach(c),this.h()},h(){k(l,"class","select-all"),k(e,"class","text-left"),k(e,"data-testid","worker-identity"),k(a,"class","svelte-dh4nx9"),ce(a,"reachability",!!n[10]),k(s,"class","text-left"),k(s,"data-testid","worker-last-access-time")},m(o,d){h(o,e,d),w(e,l),K(t,l,null),h(o,r,d),h(o,s,d),w(s,u),w(u,a),w(a,i),_=!0},p(o,d){const y={};d&10&&(y.defaultVersion=o[9]===o[3]),d&10&&(y.active=o[9]===o[3]),d&2&&(y.buildId=o[9]),d&262154&&(y.$$scope={dirty:d,ctx:o}),t.$set(y),(!_||d&7)&&f!==(f=o[10]+"")&&re(i,f),(!_||d&7)&&ce(a,"reachability",!!o[10])},i(o){_||(T(t.$$.fragment,o),_=!0)},o(o){D(t.$$.fragment,o),_=!1},d(o){o&&c(e),M(t),o&&c(r),o&&c(s)}}}function ye(n){let e=A("workers","overall")+"",l;return{c(){l=V(e)},l(t){l=S(t,e)},m(t,r){h(t,l,r)},p:Y,d(t){t&&c(l)}}}function xe(n){let e,l=n[9]===n[3]&&ye();return{c(){l&&l.c(),e=G()},l(t){l&&l.l(t),e=G()},m(t,r){l&&l.m(t,r),h(t,e,r)},p(t,r){t[9]===t[3]?l?l.p(t,r):(l=ye(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&c(e)}}}function et(n){let e=A("workers","default")+"",l;return{c(){l=V(e)},l(t){l=S(t,e)},m(t,r){h(t,l,r)},p:Y,d(t){t&&c(l)}}}function tt(n){let e,l;return e=new ae({props:{name:"close",class:"m-auto text-primary",title:A("no")}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p:Y,i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function lt(n){let e,l;return e=new ae({props:{name:"checkmark",class:"m-auto text-blue-700",title:A("yes")}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p:Y,i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function st(n){let e,l;return e=new ae({props:{name:"close",class:"m-auto text-primary",title:A("no")}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p:Y,i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function rt(n){let e,l;return e=new ae({props:{name:"checkmark",class:"m-auto text-blue-700",title:A("yes")}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p:Y,i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function at(n){var fe,oe;let e,l,t=n[8].identity+"",r,s,u,a,f,i=_e(n[8].lastAccessTime,n[5],{relative:n[6]})+"",_,o,d,y,b,I,P,B,R,O,$,C,q,m=((oe=(fe=n[2])==null?void 0:fe.buildIdReachability)==null?void 0:oe.length)&&Te(n);const N=[lt,tt],j=[];function X(p,H){return H&2&&(y=null),y==null&&(y=!!p[8].taskQueueTypes.includes("WORKFLOW")),y?0:1}b=X(n,-1),I=j[b]=N[b](n);const Z=[rt,st],z=[];function te(p,H){return H&2&&(R=null),R==null&&(R=!!p[8].taskQueueTypes.includes("ACTIVITY")),R?0:1}return O=te(n,-1),$=z[O]=Z[O](n),{c(){e=v("td"),l=v("p"),r=V(t),s=F(),m&&m.c(),u=F(),a=v("td"),f=v("p"),_=V(i),o=F(),d=v("td"),I.c(),P=F(),B=v("td"),$.c(),C=F(),this.h()},l(p){e=g(p,"TD",{class:!0,"data-testid":!0});var H=E(e);l=g(H,"P",{class:!0});var x=E(l);r=S(x,t),x.forEach(c),H.forEach(c),s=Q(p),m&&m.l(p),u=Q(p),a=g(p,"TD",{class:!0,"data-testid":!0});var ee=E(a);f=g(ee,"P",{class:!0});var le=E(f);_=S(le,i),le.forEach(c),ee.forEach(c),o=Q(p),d=g(p,"TD",{"data-testid":!0});var se=E(d);I.l(se),se.forEach(c),P=Q(p),B=g(p,"TD",{"data-testid":!0});var ne=E(B);$.l(ne),ne.forEach(c),C=Q(p),this.h()},h(){k(l,"class","select-all"),k(e,"class","text-left"),k(e,"data-testid","worker-identity"),k(f,"class","select-all"),k(a,"class","text-left"),k(a,"data-testid","worker-last-access-time"),k(d,"data-testid","workflow-poller"),k(B,"data-testid","activity-poller")},m(p,H){h(p,e,H),w(e,l),w(l,r),h(p,s,H),m&&m.m(p,H),h(p,u,H),h(p,a,H),w(a,f),w(f,_),h(p,o,H),h(p,d,H),j[b].m(d,null),h(p,P,H),h(p,B,H),z[O].m(B,null),h(p,C,H),q=!0},p(p,H){var le,se;(!q||H&2)&&t!==(t=p[8].identity+"")&&re(r,t),(se=(le=p[2])==null?void 0:le.buildIdReachability)!=null&&se.length?m?(m.p(p,H),H&4&&T(m,1)):(m=Te(p),m.c(),T(m,1),m.m(u.parentNode,u)):m&&(J(),D(m,1,1,()=>{m=null}),U()),(!q||H&98)&&i!==(i=_e(p[8].lastAccessTime,p[5],{relative:p[6]})+"")&&re(_,i);let x=b;b=X(p,H),b===x?j[b].p(p,H):(J(),D(j[x],1,1,()=>{j[x]=null}),U(),I=j[b],I?I.p(p,H):(I=j[b]=N[b](p),I.c()),T(I,1),I.m(d,null));let ee=O;O=te(p,H),O===ee?z[O].p(p,H):(J(),D(z[ee],1,1,()=>{z[ee]=null}),U(),$=z[O],$?$.p(p,H):($=z[O]=Z[O](p),$.c()),T($,1),$.m(B,null))},i(p){q||(T(m),T(I),T($),q=!0)},o(p){D(m),D(I),D($),q=!1},d(p){p&&c(e),p&&c(s),m&&m.d(p),p&&c(u),p&&c(a),p&&c(o),p&&c(d),j[b].d(),p&&c(P),p&&c(B),z[O].d(),p&&c(C)}}}function Ie(n,e){let l,t,r;return t=new Ve({props:{"data-testid":"worker-row",$$slots:{default:[at]},$$scope:{ctx:e}}}),{key:n,first:null,c(){l=G(),W(t.$$.fragment),this.h()},l(s){l=G(),L(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,u){h(s,l,u),K(t,s,u),r=!0},p(s,u){e=s;const a={};u&262255&&(a.$$scope={dirty:u,ctx:e}),t.$set(a)},i(s){r||(T(t.$$.fragment,s),r=!0)},o(s){D(t.$$.fragment,s),r=!1},d(s){s&&c(l),M(t,s)}}}function it(n){var f;let e=[],l=new Map,t,r,s=(f=n[1])==null?void 0:f.pollers;const u=i=>i[8].identity;for(let i=0;i<s.length;i+=1){let _=pe(n,s,i),o=u(_);l.set(o,e[i]=Ie(o,_))}let a=null;return s.length||(a=Ee(n)),{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=G(),a&&a.c()},l(i){for(let _=0;_<e.length;_+=1)e[_].l(i);t=G(),a&&a.l(i)},m(i,_){for(let o=0;o<e.length;o+=1)e[o].m(i,_);h(i,t,_),a&&a.m(i,_),r=!0},p(i,_){var o;_&111&&(s=(o=i[1])==null?void 0:o.pollers,J(),e=Ne(e,_,u,1,i,s,l,t.parentNode,Re,Ie,t,pe),U(),!s.length&&a?a.p(i,_):s.length?a&&(J(),D(a,1,1,()=>{a=null}),U()):(a=Ee(i),a.c(),T(a,1),a.m(t.parentNode,t)))},i(i){if(!r){for(let _=0;_<s.length;_+=1)T(e[_]);r=!0}},o(i){for(let _=0;_<e.length;_+=1)D(e[_]);r=!1},d(i){for(let _=0;_<e.length;_+=1)e[_].d(i);i&&c(t),a&&a.d(i)}}}function ft(n){let e,l=A("workflows","workers-tab")+"",t;return{c(){e=v("caption"),t=V(l),this.h()},l(r){e=g(r,"CAPTION",{class:!0,slot:!0});var s=E(e);t=S(s,l),s.forEach(c),this.h()},h(){k(e,"class","sr-only"),k(e,"slot","caption")},m(r,s){h(r,e,s),w(e,t)},p:Y,d(r){r&&c(e)}}}function De(n){let e,l=A("workers","version")+"",t,r,s,u=A("workers","retirability")+"",a;return{c(){e=v("th"),t=V(l),r=F(),s=v("th"),a=V(u),this.h()},l(f){e=g(f,"TH",{class:!0});var i=E(e);t=S(i,l),i.forEach(c),r=Q(f),s=g(f,"TH",{class:!0});var _=E(s);a=S(_,u),_.forEach(c),this.h()},h(){k(e,"class","w-3/12"),k(s,"class","w-2/12")},m(f,i){h(f,e,i),w(e,t),h(f,r,i),h(f,s,i),w(s,a)},p:Y,d(f){f&&c(e),f&&c(r),f&&c(s)}}}function ot(n){var C,q;let e,l=A("id")+"",t,r,s,u,a,f=A("workflows","last-accessed")+"",i,_,o,d,y=A("workflows","workflow-task-handler")+"",b,I,P,B,R=A("workflows","activity-handler")+"",O,$=((q=(C=n[2])==null?void 0:C.buildIdReachability)==null?void 0:q.length)&&De();return{c(){e=v("th"),t=V(l),s=F(),$&&$.c(),u=F(),a=v("th"),i=V(f),_=F(),o=v("th"),d=v("p"),b=V(y),I=F(),P=v("th"),B=v("p"),O=V(R),this.h()},l(m){e=g(m,"TH",{class:!0});var N=E(e);t=S(N,l),N.forEach(c),s=Q(m),$&&$.l(m),u=Q(m),a=g(m,"TH",{class:!0});var j=E(a);i=S(j,f),j.forEach(c),_=Q(m),o=g(m,"TH",{class:!0});var X=E(o);d=g(X,"P",{class:!0});var Z=E(d);b=S(Z,y),Z.forEach(c),X.forEach(c),I=Q(m),P=g(m,"TH",{class:!0});var z=E(P);B=g(z,"P",{class:!0});var te=E(B);O=S(te,R),te.forEach(c),z.forEach(c),this.h()},h(){var m,N;k(e,"class",r=(N=(m=n[2])==null?void 0:m.buildIdReachability)!=null&&N.length?"w-3/12":"w-6/12"),k(a,"class","w-2/12"),k(d,"class","text-center"),k(o,"class","w-2/12"),k(B,"class","text-center"),k(P,"class","w-2/12 text-center")},m(m,N){h(m,e,N),w(e,t),h(m,s,N),$&&$.m(m,N),h(m,u,N),h(m,a,N),w(a,i),h(m,_,N),h(m,o,N),w(o,d),w(d,b),h(m,I,N),h(m,P,N),w(P,B),w(B,O)},p(m,N){var j,X,Z,z;N&4&&r!==(r=(X=(j=m[2])==null?void 0:j.buildIdReachability)!=null&&X.length?"w-3/12":"w-6/12")&&k(e,"class",r),(z=(Z=m[2])==null?void 0:Z.buildIdReachability)!=null&&z.length?$?$.p(m,N):($=De(),$.c(),$.m(u.parentNode,u)):$&&($.d(1),$=null)},d(m){m&&c(e),m&&c(s),$&&$.d(m),m&&c(u),m&&c(a),m&&c(_),m&&c(o),m&&c(I),m&&c(P)}}}function nt(n){let e,l;return e=new Pe({props:{slot:"headers",$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const s={};r&262148&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function ut(n){var O;let e,l,t=A("task-queue")+"",r,s,u,a,f,i,_,o=A("workers","workers")+"",d,y,b,I,P,B,R=((O=n[4])==null?void 0:O.length)&&be(n);return b=new Be({props:{type:"count",class:"rounded-sm",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),P=new Ce({props:{class:"mb-6 w-full min-w-[600px] table-fixed",$$slots:{headers:[nt],caption:[ft],default:[it]},$$scope:{ctx:n}}}),{c(){e=v("section"),l=v("h2"),r=V(t),s=V(`:
    `),u=v("span"),a=V(n[0]),f=F(),R&&R.c(),i=F(),_=v("h2"),d=V(o),y=F(),W(b.$$.fragment),I=F(),W(P.$$.fragment),this.h()},l($){e=g($,"SECTION",{class:!0});var C=E(e);l=g(C,"H2",{class:!0,"data-testid":!0});var q=E(l);r=S(q,t),s=S(q,`:
    `),u=g(q,"SPAN",{class:!0});var m=E(u);a=S(m,n[0]),m.forEach(c),q.forEach(c),f=Q(C),R&&R.l(C),i=Q(C),_=g(C,"H2",{class:!0,"data-testid":!0});var N=E(_);d=S(N,o),y=Q(N),L(b.$$.fragment,N),N.forEach(c),I=Q(C),L(P.$$.fragment,C),C.forEach(c),this.h()},h(){k(u,"class","select-all font-normal"),k(l,"class","text-lg font-medium"),k(l,"data-testid","task-queue-name"),k(_,"class","text-base font-medium flex items-center gap-2"),k(_,"data-testid","workers"),k(e,"class","flex flex-col gap-4")},m($,C){h($,e,C),w(e,l),w(l,r),w(l,s),w(l,u),w(u,a),w(e,f),R&&R.m(e,null),w(e,i),w(e,_),w(_,d),w(_,y),K(b,_,null),w(e,I),K(P,e,null),B=!0},p($,[C]){var N;(!B||C&1)&&re(a,$[0]),(N=$[4])!=null&&N.length?R?(R.p($,C),C&16&&T(R,1)):(R=be($),R.c(),T(R,1),R.m(e,i)):R&&(J(),D(R,1,1,()=>{R=null}),U());const q={};C&262146&&(q.$$scope={dirty:C,ctx:$}),b.$set(q);const m={};C&262255&&(m.$$scope={dirty:C,ctx:$}),P.$set(m)},i($){B||(T(R),T(b.$$.fragment,$),T(P.$$.fragment,$),B=!0)},o($){D(R),D(b.$$.fragment,$),D(P.$$.fragment,$),B=!1},d($){$&&c(e),R&&R.d(),M(b),M(P)}}}function ct(n,e,l){let t,r,s,u;ue(n,qe,o=>l(5,s=o)),ue(n,We,o=>l(6,u=o));let{taskQueue:a}=e,{workers:f}=e,{compatibility:i=void 0}=e,{reachability:_=void 0}=e;return n.$$set=o=>{"taskQueue"in o&&l(0,a=o.taskQueue),"workers"in o&&l(1,f=o.workers),"compatibility"in o&&l(7,i=o.compatibility),"reachability"in o&&l(2,_=o.reachability)},n.$$.update=()=>{n.$$.dirty&128&&l(4,t=Le(i)),n.$$.dirty&128&&l(3,r=Ke(i))},[a,f,_,r,t,s,u,i]}class gt extends Se{constructor(e){super(),Ae(this,e,ct,ut,Fe,{taskQueue:0,workers:1,compatibility:7,reachability:2})}}export{gt as W};
