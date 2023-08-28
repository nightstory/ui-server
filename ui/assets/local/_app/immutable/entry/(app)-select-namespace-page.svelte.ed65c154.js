import{S as fe,b as he,a as me,m as N,p as z,q as R,k as b,v as P,av as le,a0 as ve,f as M,L as E,am as be,T as pe,z as ae,aa as ke,ab as we,h as ne,j as V,g as H,o as ye,G as Ee,c as F,d as W,H as Te,I as Ie,J as Le,t as ee,A as se,w as X,x as $,Y as Ve,C as q,D as B,u as U,E as j,Z as He,F as G,K as te,a2 as Se,n as ge,e as re,R as Q,y as Ne}from"../chunks/index.f15f06ee.js";import{g as ze}from"../chunks/navigation.6ed3c359.js";import{p as Re}from"../chunks/stores.5c271d70.js";import{P as Ue}from"../chunks/page-title.60fc2164.js";import{E as de}from"../chunks/empty-state.46940a24.js";import{I as Ae}from"../chunks/input.405d64cc.js";import{t as A}from"../chunks/translate.2e1ad657.js";import{d as Ce}from"../chunks/workflow-service.e37f1689.js";import{l as ie,n as Me}from"../chunks/namespaces.43fd8926.js";import{t as Oe}from"../chunks/toaster.926220f2.js";import{r as Pe}from"../chunks/route-for.264520ee.js";function oe(s,e,t){const l=s.slice();return l[23]=e[t],l}const De=s=>({item:s&16}),ce=s=>({item:s[23].data});function Fe(s){let e;return{c(){e=X("Missing template")},l(t){e=$(t,"Missing template")},m(t,l){M(t,e,l)},d(t){t&&b(e)}}}function ue(s,e){let t,l,o;const f=e[14].default,u=Ee(f,e,e[13],ce),_=u||Fe();return{key:s,first:null,c(){t=N("svelte-virtual-list-row"),_&&_.c(),l=F(),this.h()},l(a){t=z(a,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var i=R(t);_&&_.l(i),l=W(i),i.forEach(b),this.h()},h(){le(t,"class","svelte-1kdxoed"),this.first=t},m(a,i){M(a,t,i),_&&_.m(t,null),E(t,l),o=!0},p(a,i){e=a,u&&u.p&&(!o||i&8208)&&Te(u,f,e,e[13],o?Le(f,e[13],i,De):Ie(e[13]),ce)},i(a){o||(V(_,a),o=!0)},o(a){H(_,a),o=!1},d(a){a&&b(t),_&&_.d(a)}}}function We(s){let e,t,l=[],o=new Map,f,u,_,a,i=s[4];const p=c=>c[23].index;for(let c=0;c<i.length;c+=1){let n=oe(s,i,c),h=p(n);o.set(h,l[c]=ue(h,n))}return{c(){e=N("svelte-virtual-list-viewport"),t=N("svelte-virtual-list-contents");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){e=z(c,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var n=R(e);t=z(n,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var h=R(t);for(let w=0;w<l.length;w+=1)l[w].l(h);h.forEach(b),n.forEach(b),this.h()},h(){P(t,"padding-top",s[5]+"px"),P(t,"padding-bottom",s[6]+"px"),le(t,"class","svelte-1kdxoed"),P(e,"height",s[0]),le(e,"class","svelte-1kdxoed"),ve(()=>s[17].call(e))},m(c,n){M(c,e,n),E(e,t);for(let h=0;h<l.length;h+=1)l[h].m(t,null);s[15](t),s[16](e),f=be(e,s[17].bind(e)),u=!0,_||(a=pe(e,"scroll",s[7]),_=!0)},p(c,[n]){n&8208&&(i=c[4],ae(),l=ke(l,n,p,1,c,i,o,t,we,ue,null,oe),ne()),(!u||n&32)&&P(t,"padding-top",c[5]+"px"),(!u||n&64)&&P(t,"padding-bottom",c[6]+"px"),(!u||n&1)&&P(e,"height",c[0])},i(c){if(!u){for(let n=0;n<i.length;n+=1)V(l[n]);u=!0}},o(c){for(let n=0;n<l.length;n+=1)H(l[n]);u=!1},d(c){c&&b(e);for(let n=0;n<l.length;n+=1)l[n].d();s[15](null),s[16](null),f(),_=!1,a()}}}function qe(s,e,t){let{$$slots:l={},$$scope:o}=e,{items:f}=e,{height:u="100%"}=e,{itemHeight:_=void 0}=e,{start:a=0}=e,{end:i=0}=e,p=[],c,n,h,w=0,O,T,v=0,k=0,I;async function x(r,m,d){const{scrollTop:y}=n;await ee();let L=v-y,g=a;for(;L<m&&g<r.length;){let D=c[g-a];D||(t(9,i=g+1),await ee(),D=c[g-a]);const C=p[g]=d||D.offsetHeight;L+=C,g+=1}t(9,i=g);const Z=r.length-i;I=(v+L)/i,t(6,k=Z*I),p.length=r.length}async function J(){const{scrollTop:r}=n,m=a;for(let g=0;g<c.length;g+=1)p[a+g]=_||c[g].offsetHeight;let d=0,y=0;for(;d<f.length;){const g=p[d]||I;if(y+g>r){t(8,a=d),t(5,v=y);break}y+=g,d+=1}for(;d<f.length&&(y+=p[d]||I,d+=1,!(y>r+w)););t(9,i=d);const L=f.length-i;for(I=y/i;d<f.length;)p[d++]=I;if(t(6,k=L*I),a<m){await ee();let g=0,Z=0;for(let C=a;C<m;C+=1)c[C-a]&&(g+=p[C],Z+=_||c[C-a].offsetHeight);const D=Z-g;n.scrollTo(0,r+D)}}ye(()=>{c=h.getElementsByTagName("svelte-virtual-list-row"),t(12,T=!0)});function K(r){se[r?"unshift":"push"](()=>{h=r,t(3,h)})}function S(r){se[r?"unshift":"push"](()=>{n=r,t(2,n)})}function Y(){w=this.offsetHeight,t(1,w)}return s.$$set=r=>{"items"in r&&t(10,f=r.items),"height"in r&&t(0,u=r.height),"itemHeight"in r&&t(11,_=r.itemHeight),"start"in r&&t(8,a=r.start),"end"in r&&t(9,i=r.end),"$$scope"in r&&t(13,o=r.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,O=f.slice(a,i).map((r,m)=>({index:m+a,data:r}))),s.$$.dirty&7170&&T&&x(f,w,_)},[u,w,n,h,O,v,k,J,a,i,f,_,T,o,l,K,S,Y]}class Be extends fe{constructor(e){super(),he(this,e,qe,We,me,{items:10,height:0,itemHeight:11,start:8,end:9})}}function _e(s){const e=s[9]===s[2][0];s[10]=e;const t=s[9]===s[2][s[2].length-1];s[11]=t}function je(s){let e,t;return e=new de({props:{title:A("namespaces","select-namespace-empty-state")}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,o){j(e,l,o),t=!0},p:ge,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ge(s){let e,t,l,o;const f=[Ke,Je],u=[];function _(a,i){return a[2].length?0:1}return e=_(s),t=u[e]=f[e](s),{c(){t.c(),l=re()},l(a){t.l(a),l=re()},m(a,i){u[e].m(a,i),M(a,l,i),o=!0},p(a,i){let p=e;e=_(a),e===p?u[e].p(a,i):(ae(),H(u[p],1,1,()=>{u[p]=null}),ne(),t=u[e],t?t.p(a,i):(t=u[e]=f[e](a),t.c()),V(t,1),t.m(l.parentNode,l))},i(a){o||(V(t),o=!0)},o(a){H(t),o=!1},d(a){u[e].d(a),a&&b(l)}}}function Je(s){let e,t;return e=new de({props:{title:A("no-results")}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,o){j(e,l,o),t=!0},p:ge,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ke(s){let e,t;return e=new Be({props:{items:s[2],itemHeight:50,$$slots:{default:[Ye,({item:l})=>({9:l}),({item:l})=>l?512:0]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,o){j(e,l,o),t=!0},p(l,o){const f={};o&4&&(f.items=l[2]),o&4612&&(f.$$scope={dirty:o,ctx:l}),e.$set(f)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ye(s){_e(s);let e,t,l=s[9].namespace+"",o,f,u;function _(){return s[7](s[9])}return{c(){e=N("div"),t=N("button"),o=X(l),this.h()},l(a){e=z(a,"DIV",{class:!0});var i=R(e);t=z(i,"BUTTON",{class:!0});var p=R(t);o=$(p,l),p.forEach(b),i.forEach(b),this.h()},h(){U(t,"class","w-full p-3 text-left truncate"),U(e,"class","link-item svelte-uk7srb"),Q(e,"first",s[10]),Q(e,"last",s[11])},m(a,i){M(a,e,i),E(e,t),E(t,o),f||(u=pe(t,"click",_),f=!0)},p(a,i){s=a,_e(s),i&512&&l!==(l=s[9].namespace+"")&&Ne(o,l),i&516&&Q(e,"first",s[10]),i&516&&Q(e,"last",s[11])},d(a){a&&b(e),f=!1,u()}}}function Ze(s){let e,t,l,o,f=A("namespaces","select-namespace-welcome")+"",u,_,a,i=A("namespaces","select-namespace")+"",p,c,n,h,w,O,T,v,k,I;e=new Ue({props:{title:A("namespaces","namespace-select-header"),url:s[3].url.href}});function x(r){s[6](r)}let J={id:"search-namespaces",type:"search",label:A("search"),labelHidden:!0,placeholder:A("search"),icon:"search"};s[0]!==void 0&&(J.value=s[0]),h=new Ae({props:J}),se.push(()=>Ve(h,"value",x));const K=[Ge,je],S=[];function Y(r,m){return r[1].length?0:1}return v=Y(s),k=S[v]=K[v](s),{c(){q(e.$$.fragment),t=F(),l=N("div"),o=N("h1"),u=X(f),_=F(),a=N("p"),p=X(i),c=F(),n=N("form"),q(h.$$.fragment),O=F(),T=N("div"),k.c(),this.h()},l(r){B(e.$$.fragment,r),t=W(r),l=z(r,"DIV",{class:!0});var m=R(l);o=z(m,"H1",{class:!0});var d=R(o);u=$(d,f),d.forEach(b),_=W(m),a=z(m,"P",{class:!0});var y=R(a);p=$(y,i),y.forEach(b),c=W(m),n=z(m,"FORM",{class:!0,role:!0});var L=R(n);B(h.$$.fragment,L),L.forEach(b),O=W(m),T=z(m,"DIV",{class:!0,"aria-label":!0});var g=R(T);k.l(g),g.forEach(b),m.forEach(b),this.h()},h(){U(o,"class","my-4 text-3xl"),U(a,"class","mb-8"),U(n,"class","mb-5"),U(n,"role","search"),U(T,"class","h-screen w-full"),U(T,"aria-label",A("namespaces")),U(l,"class","w-full p-8 xl:w-1/2")},m(r,m){j(e,r,m),M(r,t,m),M(r,l,m),E(l,o),E(o,u),E(l,_),E(l,a),E(a,p),E(l,c),E(l,n),j(h,n,null),E(l,O),E(l,T),S[v].m(T,null),I=!0},p(r,[m]){const d={};m&8&&(d.url=r[3].url.href),e.$set(d);const y={};!w&&m&1&&(w=!0,y.value=r[0],He(()=>w=!1)),h.$set(y);let L=v;v=Y(r),v===L?S[v].p(r,m):(ae(),H(S[L],1,1,()=>{S[L]=null}),ne(),k=S[v],k?k.p(r,m):(k=S[v]=K[v](r),k.c()),V(k,1),k.m(T,null))},i(r){I||(V(e.$$.fragment,r),V(h.$$.fragment,r),V(k),I=!0)},o(r){H(e.$$.fragment,r),H(h.$$.fragment,r),H(k),I=!1},d(r){G(e,r),r&&b(t),r&&b(l),G(h),S[v].d()}}}function Qe(s,e,t){let l,o,f,u,_,a;te(s,ie,n=>t(8,u=n)),te(s,Me,n=>t(5,_=n)),te(s,Re,n=>t(3,a=n));let i="";function p(n){i=n,t(0,i)}const c=n=>n==null?void 0:n.onClick(n.namespace);return s.$$.update=()=>{s.$$.dirty&32&&t(4,l=_.map(n=>{var h;return(h=n==null?void 0:n.namespaceInfo)===null||h===void 0?void 0:h.name})),s.$$.dirty&16&&t(1,o=l.map(n=>({namespace:n,onClick:async h=>{const{authorized:w}=await Ce(h);w?(Se(ie,u=h,u),ze(Pe({namespace:h}))):Oe.push({variant:"error",message:A("namespaces","unauthorized-namespace-error")})}}))),s.$$.dirty&3&&t(2,f=o.filter(({namespace:n})=>n.includes(i)))},[i,o,f,a,l,_,p,c]}class ot extends fe{constructor(e){super(),he(this,e,Qe,Ze,me,{})}}export{ot as default};
