import{S as Q,i as X,s as Y,l as T,ap as Z,a as V,m as q,n as H,aq as y,c as N,h as $,p as w,R as x,b as I,M as L,T as F,g as ee,t as m,d as te,f as p,G as ne,O as re,C as J,V as K,w as h,x as k,y as b,E,B as _}from"../../../chunks/index-9ea626a2.js";import{C as P}from"../../../chunks/_chapter-c0d56378.js";import{I as ae}from"../../../chunks/icon-3b6c42df.js";import"../../../chunks/fiction-store-3a192886.js";import"../../../chunks/index-ed4e6b3e.js";function se(l){let e,r;return e=new ae({props:{class:"absolute top-0 left-0 h-4 w-4",name:"checkmark",strokeWidth:3}}),{c(){h(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p:E,i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}function le(l){let e;return{c(){e=T("span"),this.h()},l(r){e=q(r,"SPAN",{class:!0}),H(e).forEach($),this.h()},h(){w(e,"class","dash svelte-1p7s2e0"),x(e,"on-dark",l[3])},m(r,n){I(r,e,n)},p(r,n){n&8&&x(e,"on-dark",r[3])},i:E,o:E,d(r){r&&$(e)}}}function ie(l){let e,r,n,a,i,d,f,u,v,g,A,o;const D=[le,se],C=[];function S(c,t){return c[4]?0:c[0]?1:-1}return~(f=S(l))&&(u=C[f]=D[f](l)),{c(){e=T("label"),r=new Z(!1),n=V(),a=T("input"),i=V(),d=T("span"),u&&u.c(),this.h()},l(c){e=q(c,"LABEL",{class:!0});var t=H(e);r=y(t,!1),n=N(t),a=q(t,"INPUT",{id:!0,type:!0,class:!0}),i=N(t),d=q(t,"SPAN",{class:!0});var s=H(d);u&&u.l(s),s.forEach($),t.forEach($),this.h()},h(){r.a=n,w(a,"id",l[1]),w(a,"type","checkbox"),a.indeterminate=l[4],a.disabled=l[5],w(a,"class","svelte-1p7s2e0"),x(a,"indeterminate",l[4]),w(d,"class","checkmark svelte-1p7s2e0"),x(d,"on-dark",l[3]),w(e,"class",v="checkbox "+l[7].class+" svelte-1p7s2e0"),x(e,"disabled",l[5]),x(e,"on-dark",l[3])},m(c,t){I(c,e,t),r.m(l[2],e),L(e,n),L(e,a),a.checked=l[0],L(e,i),L(e,d),~f&&C[f].m(d,null),g=!0,A||(o=[F(a,"change",l[6]),F(a,"change",l[8])],A=!0)},p(c,[t]){(!g||t&4)&&r.p(c[2]),(!g||t&2)&&w(a,"id",c[1]),(!g||t&16)&&(a.indeterminate=c[4]),(!g||t&32)&&(a.disabled=c[5]),t&1&&(a.checked=c[0]),t&16&&x(a,"indeterminate",c[4]);let s=f;f=S(c),f===s?~f&&C[f].p(c,t):(u&&(ee(),m(C[s],1,1,()=>{C[s]=null}),te()),~f?(u=C[f],u?u.p(c,t):(u=C[f]=D[f](c),u.c()),p(u,1),u.m(d,null)):u=null),t&8&&x(d,"on-dark",c[3]),(!g||t&128&&v!==(v="checkbox "+c[7].class+" svelte-1p7s2e0"))&&w(e,"class",v),t&160&&x(e,"disabled",c[5]),t&136&&x(e,"on-dark",c[3])},i(c){g||(p(u),g=!0)},o(c){m(u),g=!1},d(c){c&&$(e),~f&&C[f].d(),A=!1,ne(o)}}}function ce(l,e,r){let{id:n}=e,{checked:a=!1}=e,{label:i="&nbsp;"}=e,{onDark:d=!1}=e,{indeterminate:f=!1}=e,{disabled:u=!1}=e;const v=re(),g=o=>{v("change",{checked:o.target.checked})};function A(){a=this.checked,r(0,a)}return l.$$set=o=>{r(7,e=J(J({},e),K(o))),"id"in o&&r(1,n=o.id),"checked"in o&&r(0,a=o.checked),"label"in o&&r(2,i=o.label),"onDark"in o&&r(3,d=o.onDark),"indeterminate"in o&&r(4,f=o.indeterminate),"disabled"in o&&r(5,u=o.disabled)},e=K(e),[a,n,i,d,f,u,g,e,A]}class B extends Q{constructor(e){super(),X(this,e,ce,ie,Y,{id:1,checked:0,label:2,onDark:3,indeterminate:4,disabled:5})}}function fe(l){let e,r;return e=new B({props:{id:"checkbox-input",label:"Select All",checked:!0}}),{c(){h(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p:E,i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}function ue(l){let e,r;return e=new B({props:{id:"checkbox-input",label:"Select All",indeterminate:!0,checked:!0}}),{c(){h(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p:E,i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}function oe(l){let e,r,n;return r=new B({props:{onDark:!0,id:"checkbox-input",label:"Select All",checked:!0}}),{c(){e=T("div"),h(r.$$.fragment),this.h()},l(a){e=q(a,"DIV",{class:!0});var i=H(e);k(r.$$.fragment,i),i.forEach($),this.h()},h(){w(e,"class","w-fit bg-primary p-4")},m(a,i){I(a,e,i),b(r,e,null),n=!0},p:E,i(a){n||(p(r.$$.fragment,a),n=!0)},o(a){m(r.$$.fragment,a),n=!1},d(a){a&&$(e),_(r)}}}function $e(l){let e,r,n;return r=new B({props:{onDark:!0,id:"checkbox-input",indeterminate:!0,checked:!0}}),{c(){e=T("div"),h(r.$$.fragment),this.h()},l(a){e=q(a,"DIV",{class:!0});var i=H(e);k(r.$$.fragment,i),i.forEach($),this.h()},h(){w(e,"class","w-fit bg-primary p-4")},m(a,i){I(a,e,i),b(r,e,null),n=!0},p:E,i(a){n||(p(r.$$.fragment,a),n=!0)},o(a){m(r.$$.fragment,a),n=!1},d(a){a&&$(e),_(r)}}}function me(l){let e,r;return e=new B({props:{id:"checkbox-input",label:"Select All",checked:!0,disabled:!0}}),{c(){h(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p:E,i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}function pe(l){let e,r;return e=new B({props:{id:"checkbox-input",label:"Select All",indeterminate:!0,checked:!0,disabled:!0}}),{c(){h(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p:E,i(n){r||(p(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){_(e,n)}}}function de(l){let e,r,n;return r=new B({props:{label:"Select All",onDark:!0,id:"checkbox-input",disabled:!0,checked:!0}}),{c(){e=T("div"),h(r.$$.fragment),this.h()},l(a){e=q(a,"DIV",{class:!0});var i=H(e);k(r.$$.fragment,i),i.forEach($),this.h()},h(){w(e,"class","w-fit bg-primary p-4")},m(a,i){I(a,e,i),b(r,e,null),n=!0},p:E,i(a){n||(p(r.$$.fragment,a),n=!0)},o(a){m(r.$$.fragment,a),n=!1},d(a){a&&$(e),_(r)}}}function he(l){let e,r,n;return r=new B({props:{label:"Select All",onDark:!0,id:"checkbox-input",indeterminate:!0,disabled:!0,checked:!0}}),{c(){e=T("div"),h(r.$$.fragment),this.h()},l(a){e=q(a,"DIV",{class:!0});var i=H(e);k(r.$$.fragment,i),i.forEach($),this.h()},h(){w(e,"class","w-fit bg-primary p-4")},m(a,i){I(a,e,i),b(r,e,null),n=!0},p:E,i(a){n||(p(r.$$.fragment,a),n=!0)},o(a){m(r.$$.fragment,a),n=!1},d(a){a&&$(e),_(r)}}}function ke(l){let e,r,n,a,i,d,f,u,v,g,A,o,D,C,S,c;return e=new P({props:{description:"A Checkbox Input",$$slots:{default:[fe]},$$scope:{ctx:l}}}),n=new P({props:{description:"An indeterminate Checkbox Input",$$slots:{default:[ue]},$$scope:{ctx:l}}}),i=new P({props:{description:"A Checkbox Input on a dark background",$$slots:{default:[oe]},$$scope:{ctx:l}}}),f=new P({props:{description:"An indeterminate Checkbox Input on a dark background without a label",$$slots:{default:[$e]},$$scope:{ctx:l}}}),v=new P({props:{description:"A disabled Checkbox Input",$$slots:{default:[me]},$$scope:{ctx:l}}}),A=new P({props:{description:"A disabled indeterminate Checkbox Input",$$slots:{default:[pe]},$$scope:{ctx:l}}}),D=new P({props:{description:"A disabled Checkbox Input on a dark background",$$slots:{default:[de]},$$scope:{ctx:l}}}),S=new P({props:{description:"A disabled indeterminate Checkbox Input on a dark background",$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment),r=V(),h(n.$$.fragment),a=V(),h(i.$$.fragment),d=V(),h(f.$$.fragment),u=V(),h(v.$$.fragment),g=V(),h(A.$$.fragment),o=V(),h(D.$$.fragment),C=V(),h(S.$$.fragment)},l(t){k(e.$$.fragment,t),r=N(t),k(n.$$.fragment,t),a=N(t),k(i.$$.fragment,t),d=N(t),k(f.$$.fragment,t),u=N(t),k(v.$$.fragment,t),g=N(t),k(A.$$.fragment,t),o=N(t),k(D.$$.fragment,t),C=N(t),k(S.$$.fragment,t)},m(t,s){b(e,t,s),I(t,r,s),b(n,t,s),I(t,a,s),b(i,t,s),I(t,d,s),b(f,t,s),I(t,u,s),b(v,t,s),I(t,g,s),b(A,t,s),I(t,o,s),b(D,t,s),I(t,C,s),b(S,t,s),c=!0},p(t,[s]){const G={};s&1&&(G.$$scope={dirty:s,ctx:t}),e.$set(G);const M={};s&1&&(M.$$scope={dirty:s,ctx:t}),n.$set(M);const O={};s&1&&(O.$$scope={dirty:s,ctx:t}),i.$set(O);const R={};s&1&&(R.$$scope={dirty:s,ctx:t}),f.$set(R);const U={};s&1&&(U.$$scope={dirty:s,ctx:t}),v.$set(U);const W={};s&1&&(W.$$scope={dirty:s,ctx:t}),A.$set(W);const j={};s&1&&(j.$$scope={dirty:s,ctx:t}),D.$set(j);const z={};s&1&&(z.$$scope={dirty:s,ctx:t}),S.$set(z)},i(t){c||(p(e.$$.fragment,t),p(n.$$.fragment,t),p(i.$$.fragment,t),p(f.$$.fragment,t),p(v.$$.fragment,t),p(A.$$.fragment,t),p(D.$$.fragment,t),p(S.$$.fragment,t),c=!0)},o(t){m(e.$$.fragment,t),m(n.$$.fragment,t),m(i.$$.fragment,t),m(f.$$.fragment,t),m(v.$$.fragment,t),m(A.$$.fragment,t),m(D.$$.fragment,t),m(S.$$.fragment,t),c=!1},d(t){_(e,t),t&&$(r),_(n,t),t&&$(a),_(i,t),t&&$(d),_(f,t),t&&$(u),_(v,t),t&&$(g),_(A,t),t&&$(o),_(D,t),t&&$(C),_(S,t)}}}class Ce extends Q{constructor(e){super(),X(this,e,null,ke,Y,{})}}export{Ce as default};
