import{S as K,i as M,s as O,l as N,a as z,m as P,n as H,h as p,c as B,p as d,V as h,b as T,N as v,W as D,X as Q,g as Y,t as S,d as Z,f as A,H as w,P as x,D as F,R,T as I,r as $,u as ee,F as ae,ao as le,e as U,ap as te,x as V,y as X,z as j,C as G}from"./index-92fe1086.js";import{I as J}from"./icon-ede9a021.js";function ne(s){let e;return{c(){e=$("\xA0")},l(a){e=ee(a,"\xA0")},m(a,l){T(a,e,l)},p:ae,d(a){a&&p(e)}}}function se(s){let e,a;return{c(){e=new le(!1),a=U(),this.h()},l(l){e=te(l,!1),a=U(),this.h()},h(){e.a=a},m(l,n){e.m(s[2],l,n),T(l,a,n)},p(l,n){n&4&&e.p(l[2])},d(l){l&&p(a),l&&e.d()}}}function ie(s){let e,a;return e=new J({props:{class:"absolute top-0 left-0 h-4 w-4",name:"checkmark",strokeWidth:3}}),{c(){V(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){j(e,l,n),a=!0},i(l){a||(A(e.$$.fragment,l),a=!0)},o(l){S(e.$$.fragment,l),a=!1},d(l){G(e,l)}}}function ce(s){let e,a;return e=new J({props:{class:"absolute top-0 left-0 h-4 w-4",name:"hyphen"}}),{c(){V(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){j(e,l,n),a=!0},i(l){a||(A(e.$$.fragment,l),a=!0)},o(l){S(e.$$.fragment,l),a=!1},d(l){G(e,l)}}}function re(s){let e,a,l,n,m,u,o,r,k,f,y,C;function E(i,c){return i[2]?se:ne}let b=E(s),t=b(s);const L=[ce,ie],_=[];function W(i,c){return i[4]?0:i[0]?1:-1}return~(o=W(s))&&(r=_[o]=L[o](s)),{c(){e=N("label"),a=N("span"),t.c(),l=z(),n=N("input"),m=z(),u=N("span"),r&&r.c(),this.h()},l(i){e=P(i,"LABEL",{class:!0});var c=H(e);a=P(c,"SPAN",{class:!0});var g=H(a);t.l(g),g.forEach(p),l=B(c),n=P(c,"INPUT",{id:!0,type:!0,class:!0}),m=B(c),u=P(c,"SPAN",{class:!0});var q=H(u);r&&r.l(q),q.forEach(p),c.forEach(p),this.h()},h(){d(a,"class","label svelte-41ku5d"),d(n,"id",s[1]),d(n,"type","checkbox"),n.indeterminate=s[4],n.disabled=s[5],d(n,"class","svelte-41ku5d"),h(n,"indeterminate",s[4]),d(u,"class","checkmark svelte-41ku5d"),h(u,"on-dark",s[3]),d(e,"class",k="checkbox "+s[7].class+" svelte-41ku5d"),h(e,"disabled",s[5]),h(e,"on-dark",s[3])},m(i,c){T(i,e,c),v(e,a),t.m(a,null),v(e,l),v(e,n),n.checked=s[0],v(e,m),v(e,u),~o&&_[o].m(u,null),f=!0,y||(C=[D(n,"click",Q(s[10])),D(n,"change",s[6]),D(n,"change",s[11]),D(e,"click",s[8]),D(e,"keypress",s[9])],y=!0)},p(i,[c]){b===(b=E(i))&&t?t.p(i,c):(t.d(1),t=b(i),t&&(t.c(),t.m(a,null))),(!f||c&2)&&d(n,"id",i[1]),(!f||c&16)&&(n.indeterminate=i[4]),(!f||c&32)&&(n.disabled=i[5]),c&1&&(n.checked=i[0]),(!f||c&16)&&h(n,"indeterminate",i[4]);let g=o;o=W(i),o!==g&&(r&&(Y(),S(_[g],1,1,()=>{_[g]=null}),Z()),~o?(r=_[o],r||(r=_[o]=L[o](i),r.c()),A(r,1),r.m(u,null)):r=null),(!f||c&8)&&h(u,"on-dark",i[3]),(!f||c&128&&k!==(k="checkbox "+i[7].class+" svelte-41ku5d"))&&d(e,"class",k),(!f||c&160)&&h(e,"disabled",i[5]),(!f||c&136)&&h(e,"on-dark",i[3])},i(i){f||(A(r),f=!0)},o(i){S(r),f=!1},d(i){i&&p(e),t.d(),~o&&_[o].d(),y=!1,w(C)}}}function oe(s,e,a){let{id:l=""}=e,{checked:n=!1}=e,{label:m=null}=e,{onDark:u=!1}=e,{indeterminate:o=!1}=e,{disabled:r=!1}=e;const k=x(),f=t=>{k("change",{checked:t.target.checked})};function y(t){I.call(this,s,t)}function C(t){I.call(this,s,t)}function E(t){I.call(this,s,t)}function b(){n=this.checked,a(0,n)}return s.$$set=t=>{a(7,e=F(F({},e),R(t))),"id"in t&&a(1,l=t.id),"checked"in t&&a(0,n=t.checked),"label"in t&&a(2,m=t.label),"onDark"in t&&a(3,u=t.onDark),"indeterminate"in t&&a(4,o=t.indeterminate),"disabled"in t&&a(5,r=t.disabled)},e=R(e),[n,l,m,u,o,r,f,e,y,C,E,b]}class de extends K{constructor(e){super(),M(this,e,oe,re,O,{id:1,checked:0,label:2,onDark:3,indeterminate:4,disabled:5})}}export{de as C};
