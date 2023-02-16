import{S as Te,i as ge,s as he,w as z,x as K,y as M,f as S,t as I,z as V,F as Xe,G as Ye,H as Ze,I as $e,k as y,q as H,a as C,l as E,m as F,r as N,h as c,c as q,n as w,b as g,K as k,B as te,e as Oe,g as me,d as _e,J as Je,R as B,U as le,an as se,D as De,Q as Re,E as xe,u as Y,O as Se}from"./index-3630b6f8.js";import{T as et,a as tt}from"./table-header-row-df8ad022.js";import{p as lt}from"./stores-4e1b824b.js";import{f as X}from"./format-date-d16d2b50.js";import{q as st,s as rt,u as at,v as Ae}from"./format-time-e85f8b15.js";import{f as ot}from"./route-for-b71c2be4.js";import{u as nt}from"./pagination-8cff1521.js";import{t as Qe}from"./list-workflow-query-407de9fb.js";import{c as ft,d as Fe,e as ut,f as it,g as ct}from"./has-b0179dc7.js";import{W as mt}from"./workflow-status-054607c7.js";import{I as We}from"./icon-a76a7fcc.js";import{c as _t}from"./copy-to-clipboard-237b933b.js";import{T as ht}from"./table-row-95c37051.js";import{B as dt}from"./button-3d26a8bc.js";function pt(r){let e;const s=r[1].default,t=Xe(s,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&4)&&Ye(t,s,l,l[2],e?$e(s,l[2],o,null):Ze(l[2]),null)},i(l){e||(S(t,l),e=!0)},o(l){I(t,l),e=!1},d(l){t&&t.d(l)}}}function bt(r){let e,s,t,l,o,a,n,f,i,h,W,p,b,m,_,D,U;return{c(){e=y("th"),s=H("Status"),t=C(),l=y("th"),o=H("Workflow ID"),a=C(),n=y("th"),f=H("Type"),i=C(),h=y("th"),W=H("Start"),p=C(),b=y("th"),m=H("End"),_=C(),D=y("th"),U=H("Summary"),this.h()},l(d){e=E(d,"TH",{class:!0});var T=F(e);s=N(T,"Status"),T.forEach(c),t=q(d),l=E(d,"TH",{class:!0});var P=F(l);o=N(P,"Workflow ID"),P.forEach(c),a=q(d),n=E(d,"TH",{class:!0});var G=F(n);f=N(G,"Type"),G.forEach(c),i=q(d),h=E(d,"TH",{class:!0});var O=F(h);W=N(O,"Start"),O.forEach(c),p=q(d),b=E(d,"TH",{class:!0});var R=F(b);m=N(R,"End"),R.forEach(c),_=q(d),D=E(d,"TH",{class:!0,colspan:!0});var L=F(D);U=N(L,"Summary"),L.forEach(c),this.h()},h(){w(e,"class","hidden w-32 md:table-cell"),w(l,"class","hidden md:table-cell md:w-auto"),w(n,"class","hidden md:table-cell xl:w-60"),w(h,"class","hidden xl:table-cell xl:w-60"),w(b,"class","hidden xl:table-cell xl:w-60"),w(D,"class","table-cell md:hidden"),w(D,"colspan","3")},m(d,T){g(d,e,T),k(e,s),g(d,t,T),g(d,l,T),k(l,o),g(d,a,T),g(d,n,T),k(n,f),g(d,i,T),g(d,h,T),k(h,W),g(d,p,T),g(d,b,T),k(b,m),g(d,_,T),g(d,D,T),k(D,U)},p:te,d(d){d&&c(e),d&&c(t),d&&c(l),d&&c(a),d&&c(n),d&&c(i),d&&c(h),d&&c(p),d&&c(b),d&&c(_),d&&c(D)}}}function wt(r){let e,s;return e=new tt({props:{slot:"headers",$$slots:{default:[bt]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},p(t,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function kt(r){let e,s;return e=new et({props:{class:"w-full md:table-fixed",updating:r[0],$$slots:{headers:[wt],default:[pt]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},p(t,[l]){const o={};l&1&&(o.updating=t[0]),l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function vt(r,e,s){let{$$slots:t={},$$scope:l}=e,{updating:o=!1}=e;return r.$$set=a=>{"updating"in a&&s(0,o=a.updating),"$$scope"in a&&s(2,l=a.$$scope)},[o,t,l]}class Zt extends Te{constructor(e){super(),ge(this,e,vt,kt,he,{updating:0})}}const Tt=r=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<r.length;){const o=r[l];if(ft(o)){t+=o,s(),l++;continue}if(Fe(o)){const a=`${r[l]}${r[l+1]}`,n=`${r[l]}${r[l+1]}${r[l+2]}`;if(Fe(n)){s(),t+=n,l+=3;continue}else if(Fe(a)){s(),t+=a,l+=2;continue}else{s(),t+=o,l++;continue}}if(ut(o)||it(o)){s(),l++;continue}t+=o,l++}return s(),e},ye=r=>e=>e.toLowerCase()===r.toLowerCase(),ve=(r,e)=>r[e+2],gt=r=>{if(r){for(const e of at)if(r[e])return{[e]:r[e]}}},yt=ye("WorkflowType"),Et=ye("WorkflowId"),St=ye("StartTime"),Ft=ye("ExecutionStatus"),Dt=r=>{const e=Tt(r),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(Et(t)&&(s.workflowId=ve(e,l)),yt(t)&&(s.workflowType=ve(e,l)),Ft(t)){const o=ve(e,l);ct(o)&&(s.executionStatus=o)}if(St(t)){const o=ve(e,l);try{const a=st(o),n=gt(a);s.timeRange=rt(n)}catch(a){console.error("Error parsing StartTime from query",a)}}}),s};function je(r){let e,s,t,l,o,a,n=r[1]&&ze(r),f=r[2]&&Me(r);return{c(){e=y("div"),n&&n.c(),s=C(),f&&f.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var h=F(e);n&&n.l(h),s=q(h),f&&f.l(h),h.forEach(c),this.h()},h(){w(e,"class",t="copy-or-filter "+r[6]+" svelte-1f7279h")},m(i,h){g(i,e,h),n&&n.m(e,null),k(e,s),f&&f.m(e,null),l=!0,o||(a=[B(e,"click",le(se(te))),B(e,"keyup",le(se(te)))],o=!0)},p(i,h){i[1]?n?(n.p(i,h),h&2&&S(n,1)):(n=ze(i),n.c(),S(n,1),n.m(e,s)):n&&(me(),I(n,1,1,()=>{n=null}),_e()),i[2]?f?(f.p(i,h),h&4&&S(f,1)):(f=Me(i),f.c(),S(f,1),f.m(e,null)):f&&(me(),I(f,1,1,()=>{f=null}),_e()),(!l||h&64&&t!==(t="copy-or-filter "+i[6]+" svelte-1f7279h"))&&w(e,"class",t)},i(i){l||(S(n),S(f),l=!0)},o(i){I(n),I(f),l=!1},d(i){i&&c(e),n&&n.d(),f&&f.d(),o=!1,De(a)}}}function ze(r){let e,s=r[5],t,l,o,a=Ke();return{c(){e=y("button"),a.c(),this.h()},l(n){e=E(n,"BUTTON",{class:!0});var f=F(e);a.l(f),f.forEach(c),this.h()},h(){w(e,"class","copy-or-filter-button svelte-1f7279h"),Re(e,"filtered",r[5])},m(n,f){g(n,e,f),a.m(e,null),t=!0,l||(o=B(e,"click",le(se(function(){xe(r[4])&&r[4].apply(this,arguments)}))),l=!0)},p(n,f){r=n,f&32&&he(s,s=r[5])?(me(),I(a,1,1,te),_e(),a=Ke(),a.c(),S(a,1),a.m(e,null)):a.p(r,f),(!t||f&32)&&Re(e,"filtered",r[5])},i(n){t||(S(a),t=!0)},o(n){I(a),t=!1},d(n){n&&c(e),a.d(n),l=!1,o()}}}function Ke(r){let e,s;return e=new We({props:{name:"filter"}}),{c(){z(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},p:te,i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Me(r){let e,s,t,l,o;return s=new We({props:{name:r[7]?"checkmark":"copy",stroke:"#000"}}),{c(){e=y("button"),z(s.$$.fragment),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var n=F(e);K(s.$$.fragment,n),n.forEach(c),this.h()},h(){w(e,"class","copy-or-filter-button svelte-1f7279h")},m(a,n){g(a,e,n),M(s,e,null),t=!0,l||(o=B(e,"click",le(se(r[10]))),l=!0)},p(a,n){const f={};n&128&&(f.name=a[7]?"checkmark":"copy"),s.$set(f)},i(a){t||(S(s.$$.fragment,a),t=!0)},o(a){I(s.$$.fragment,a),t=!1},d(a){a&&c(e),V(s),l=!1,o()}}}function Wt(r){let e,s,t=r[0]&&je(r);return{c(){t&&t.c(),e=Oe()},l(l){t&&t.l(l),e=Oe()},m(l,o){t&&t.m(l,o),g(l,e,o),s=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&S(t,1)):(t=je(l),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(me(),I(t,1,1,()=>{t=null}),_e())},i(l){s||(S(t),s=!0)},o(l){I(t),s=!1},d(l){t&&t.d(l),l&&c(e)}}}function It(r,e,s){let t,{show:l=!1}=e,{filterable:o=!0}=e,{copyable:a=!0}=e,{content:n}=e,{onFilter:f=te}=e,{filtered:i=!1}=e,{class:h=""}=e;const{copy:W,copied:p}=_t(700);Je(r,p,m=>s(7,t=m));const b=m=>W(m,n);return r.$$set=m=>{"show"in m&&s(0,l=m.show),"filterable"in m&&s(1,o=m.filterable),"copyable"in m&&s(2,a=m.copyable),"content"in m&&s(3,n=m.content),"onFilter"in m&&s(4,f=m.onFilter),"filtered"in m&&s(5,i=m.filtered),"class"in m&&s(6,h=m.class)},[l,o,a,n,f,i,h,t,W,p,b]}class Ve extends Te{constructor(e){super(),ge(this,e,It,Wt,he,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5,class:6})}}function Pt(r){var Pe,Ce,qe;let e,s,t,l,o,a=r[0].id+"",n,f,i,h,W,p=X(r[0].startTime,r[1])+"",b,m,_,D,U,d,T,P=r[0].name+"",G,O,R,L,re,x,ae=X(r[0].endTime,r[1])+"",de,pe,Z,oe,ne=X(r[0].startTime,r[1])+"",be,we,$,fe,ue=X(r[0].endTime,r[1])+"",ke,A,Ee,Ie;return s=new mt({props:{status:r[0].status,delay:Ae(r[0].startTime)}}),i=new Ve({props:{show:r[2],content:r[0].id,filterable:!1}}),L=new Ve({props:{show:r[2],content:r[0].name,onFilter:r[12],filtered:(qe=(Ce=(Pe=r[4].url)==null?void 0:Pe.searchParams)==null?void 0:Ce.get("query"))==null?void 0:qe.includes(r[0].name)}}),{c(){e=y("td"),z(s.$$.fragment),t=C(),l=y("td"),o=y("span"),n=H(a),f=C(),z(i.$$.fragment),h=C(),W=y("p"),b=H(p),m=C(),_=y("td"),D=y("h3"),U=H("Workflow Name:"),d=C(),T=y("button"),G=H(P),R=C(),z(L.$$.fragment),re=C(),x=y("p"),de=H(ae),pe=C(),Z=y("td"),oe=y("p"),be=H(ne),we=C(),$=y("td"),fe=y("p"),ke=H(ue),this.h()},l(u){e=E(u,"TD",{});var v=F(e);K(s.$$.fragment,v),v.forEach(c),t=q(u),l=E(u,"TD",{class:!0});var j=F(l);o=E(j,"SPAN",{class:!0});var ee=F(o);n=N(ee,a),ee.forEach(c),f=q(j),K(i.$$.fragment,j),h=q(j),W=E(j,"P",{class:!0});var J=F(W);b=N(J,p),J.forEach(c),j.forEach(c),m=q(u),_=E(u,"TD",{class:!0});var Q=F(_);D=E(Q,"H3",{class:!0});var ie=F(D);U=N(ie,"Workflow Name:"),ie.forEach(c),d=q(Q),T=E(Q,"BUTTON",{class:!0,"aria-label":!0});var ce=F(T);G=N(ce,P),ce.forEach(c),R=q(Q),K(L.$$.fragment,Q),re=q(Q),x=E(Q,"P",{class:!0});var Be=F(x);de=N(Be,ae),Be.forEach(c),Q.forEach(c),pe=q(u),Z=E(u,"TD",{class:!0});var He=F(Z);oe=E(He,"P",{});var Ne=F(oe);be=N(Ne,ne),Ne.forEach(c),He.forEach(c),we=q(u),$=E(u,"TD",{class:!0});var Le=F($);fe=E(Le,"P",{});var Ue=F(fe);ke=N(Ue,ue),Ue.forEach(c),Le.forEach(c),this.h()},h(){w(o,"class","table-link svelte-76c44e"),w(W,"class","inline-time-cell svelte-76c44e"),w(l,"class","relative break-words pr-4"),w(D,"class","md:hidden"),w(T,"class","table-link svelte-76c44e"),w(T,"aria-label",O="filter by "+r[0].name+" type"),w(x,"class","inline-time-cell svelte-76c44e"),w(_,"class","relative truncate"),w(Z,"class","time-cell svelte-76c44e"),w($,"class","time-cell svelte-76c44e")},m(u,v){g(u,e,v),M(s,e,null),g(u,t,v),g(u,l,v),k(l,o),k(o,n),k(l,f),M(i,l,null),k(l,h),k(l,W),k(W,b),g(u,m,v),g(u,_,v),k(_,D),k(D,U),k(_,d),k(_,T),k(T,G),k(_,R),M(L,_,null),k(_,re),k(_,x),k(x,de),g(u,pe,v),g(u,Z,v),k(Z,oe),k(oe,be),g(u,we,v),g(u,$,v),k($,fe),k(fe,ke),A=!0,Ee||(Ie=[B(l,"mouseover",r[7]),B(l,"focus",r[8]),B(l,"mouseleave",r[9]),B(l,"blur",r[10]),B(T,"click",le(se(r[11]))),B(_,"mouseover",r[13]),B(_,"focus",r[14]),B(_,"mouseleave",r[15]),B(_,"blur",r[16])],Ee=!0)},p(u,v){var Q,ie,ce;const j={};v&1&&(j.status=u[0].status),v&1&&(j.delay=Ae(u[0].startTime)),s.$set(j),(!A||v&1)&&a!==(a=u[0].id+"")&&Y(n,a);const ee={};v&4&&(ee.show=u[2]),v&1&&(ee.content=u[0].id),i.$set(ee),(!A||v&3)&&p!==(p=X(u[0].startTime,u[1])+"")&&Y(b,p),(!A||v&1)&&P!==(P=u[0].name+"")&&Y(G,P),(!A||v&1&&O!==(O="filter by "+u[0].name+" type"))&&w(T,"aria-label",O);const J={};v&4&&(J.show=u[2]),v&1&&(J.content=u[0].name),v&1&&(J.onFilter=u[12]),v&17&&(J.filtered=(ce=(ie=(Q=u[4].url)==null?void 0:Q.searchParams)==null?void 0:ie.get("query"))==null?void 0:ce.includes(u[0].name)),L.$set(J),(!A||v&3)&&ae!==(ae=X(u[0].endTime,u[1])+"")&&Y(de,ae),(!A||v&3)&&ne!==(ne=X(u[0].startTime,u[1])+"")&&Y(be,ne),(!A||v&3)&&ue!==(ue=X(u[0].endTime,u[1])+"")&&Y(ke,ue)},i(u){A||(S(s.$$.fragment,u),S(i.$$.fragment,u),S(L.$$.fragment,u),A=!0)},o(u){I(s.$$.fragment,u),I(i.$$.fragment,u),I(L.$$.fragment,u),A=!1},d(u){u&&c(e),V(s),u&&c(t),u&&c(l),V(i),u&&c(m),u&&c(_),V(L),u&&c(pe),u&&c(Z),u&&c(we),u&&c($),Ee=!1,De(Ie)}}}function Ct(r){let e,s;return e=new ht({props:{href:r[3],class:"workflow-summary-row",$$slots:{default:[Pt]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},p(t,[l]){const o={};l&8&&(o.href=t[3]),l&131095&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function qt(r,e,s){let t,l;Je(r,lt,P=>s(4,l=P));let{namespace:o}=e,{workflow:a}=e,{timeFormat:n}=e,f=!1;const i=P=>{const G=Qe({timeRange:"All"}),O=l.url.searchParams.get("query"),R=Dt(O??G),L=(R==null?void 0:R.workflowType)===P?"":P,re=Qe({...R,workflowType:L});nt({url:l.url,parameter:"query",value:re,allowEmpty:!0})},h=()=>s(2,f=!0),W=()=>s(2,f=!0),p=()=>s(2,f=!1),b=()=>s(2,f=!1),m=()=>i(a.name),_=()=>i(a.name),D=()=>s(2,f=!0),U=()=>s(2,f=!0),d=()=>s(2,f=!1),T=()=>s(2,f=!1);return r.$$set=P=>{"namespace"in P&&s(6,o=P.namespace),"workflow"in P&&s(0,a=P.workflow),"timeFormat"in P&&s(1,n=P.timeFormat)},r.$$.update=()=>{r.$$.dirty&65&&s(3,t=ot({namespace:o,workflow:a.id,run:a.runId}))},[a,n,f,t,l,i,o,h,W,p,b,m,_,D,U,d,T]}class $t extends Te{constructor(e){super(),ge(this,e,qt,Ct,he,{namespace:6,workflow:0,timeFormat:1})}}var xt=Bt;function Bt(r,e,s,t){var l,o,a;return function(){if(a=this,o=Array.prototype.slice.call(arguments),l&&(s||t))return;if(!s)return i(),l=setTimeout(f,e),l;l=setTimeout(i,e),r.apply(a,o);function f(){i(),r.apply(a,o)}function i(){clearTimeout(l),l=null}}}function Ge(r){let e,s;return e=new We({props:{name:"search",class:"ml-4 flex items-center text-gray-700"}}),{c(){z(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Ht(r){let e;return{c(){e=H(r[2])},l(s){e=N(s,r[2])},m(s,t){g(s,e,t)},p(s,t){t&4&&Y(e,s[2])},d(s){s&&c(e)}}}function Nt(r){let e,s,t,l,o,a,n,f,i,h,W,p,b=r[4]&&Ge();return i=new dt({props:{class:"m-2",type:"submit",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),{c(){e=y("form"),b&&b.c(),s=C(),t=y("label"),l=H(r[2]),o=C(),a=y("input"),n=C(),f=y("div"),z(i.$$.fragment),this.h()},l(m){e=E(m,"FORM",{class:!0,role:!0});var _=F(e);b&&b.l(_),s=q(_),t=E(_,"LABEL",{for:!0,class:!0});var D=F(t);l=N(D,r[2]),D.forEach(c),o=q(_),a=E(_,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),n=q(_),f=E(_,"DIV",{});var U=F(f);K(i.$$.fragment,U),U.forEach(c),_.forEach(c),this.h()},h(){w(t,"for",r[5]),w(t,"class","hidden"),w(a,"id",r[5]),w(a,"type","search"),w(a,"class","w-full rounded-l-lg px-4 focus:outline-none"),w(a,"name",r[3]),a.value=r[1],w(a,"placeholder",r[0]),w(a,"autocomplete","off"),w(e,"class","relative flex items-center rounded-lg border-2 bg-white transition-colors focus-within:border-blue-700"),w(e,"role","search")},m(m,_){g(m,e,_),b&&b.m(e,null),k(e,s),k(e,t),k(t,l),k(e,o),k(e,a),k(e,n),k(e,f),M(i,f,null),h=!0,W||(p=[B(a,"input",r[7]),B(a,"keydown",le(r[8])),B(e,"submit",se(r[6]))],W=!0)},p(m,[_]){m[4]?b?_&16&&S(b,1):(b=Ge(),b.c(),S(b,1),b.m(e,s)):b&&(me(),I(b,1,1,()=>{b=null}),_e()),(!h||_&4)&&Y(l,m[2]),(!h||_&32)&&w(t,"for",m[5]),(!h||_&32)&&w(a,"id",m[5]),(!h||_&8)&&w(a,"name",m[3]),(!h||_&2&&a.value!==m[1])&&(a.value=m[1]),(!h||_&1)&&w(a,"placeholder",m[0]);const D={};_&516&&(D.$$scope={dirty:_,ctx:m}),i.$set(D)},i(m){h||(S(b),S(i.$$.fragment,m),h=!0)},o(m){I(b),I(i.$$.fragment,m),h=!1},d(m){m&&c(e),b&&b.d(),V(i),W=!1,De(p)}}}function Lt(r,e,s){let{placeholder:t=""}=e,{value:l=""}=e,{label:o="Search"}=e,{name:a="query"}=e,{icon:n=!1}=e,{id:f=`${o.toLocaleUpperCase()}-input`}=e;function i(p){Se.call(this,r,p)}function h(p){Se.call(this,r,p)}function W(p){Se.call(this,r,p)}return r.$$set=p=>{"placeholder"in p&&s(0,t=p.placeholder),"value"in p&&s(1,l=p.value),"label"in p&&s(2,o=p.label),"name"in p&&s(3,a=p.name),"icon"in p&&s(4,n=p.icon),"id"in p&&s(5,f=p.id)},[t,l,o,a,n,f,i,h,W]}class el extends Te{constructor(e){super(),ge(this,e,Lt,Nt,he,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{Ve as F,el as S,Zt as W,$t as a,Tt as b,xt as j,Dt as t};
