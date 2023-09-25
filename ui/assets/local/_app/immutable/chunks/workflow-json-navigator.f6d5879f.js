import{S as he,b as ve,a as ke,N as x,m as N,w as F,c as W,p as y,q as T,x as G,k as w,d as j,u as c,v as fe,P as V,O as ce,f as Y,L as _,a0 as Q,Q as U,y as Z,R as Ie,aq as $,n as ee,r as we,T as de,U as _e,A as Ee,e as pe,z as Ne,g as z,h as ye,j as K,Z as Pe,G as Te,C as te,D as se,E as le,_ as Ae,H as De,I as He,J as Oe,F as ae}from"./index.efded970.js";import{C as Ve}from"./code-block.6090192d.js";import{o as me}from"./omit.6cf41932.js";import{L as Le}from"./loading.32266c92.js";import{t as J}from"./translate.230dcc19.js";import{s as be}from"./parse-with-big-int.0036a80a.js";function Se(e){let s,t,l,m,E,d,p,f,h=(e[0]??"")+"",u,o,r,H,A,D,P,I,O,b,B,C,n,k,a,v,L,S=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:e[3]},{max:e[4]},{step:H=e[12].step},me(e[13],"class")],R={};for(let i=0;i<S.length;i+=1)R=x(R,S[i]);return{c(){s=N("div"),t=N("div"),l=N("div"),m=N("span"),E=F(e[3]),d=W(),p=N("div"),f=N("output"),u=F(h),o=W(),r=N("input"),A=W(),D=N("span"),P=F(e[4]),I=W(),O=N("div"),b=N("input"),C=W(),n=N("label"),k=F(e[1]),this.h()},l(i){s=y(i,"DIV",{class:!0});var g=T(s);t=y(g,"DIV",{class:!0});var X=T(t);l=y(X,"DIV",{class:!0});var q=T(l);m=y(q,"SPAN",{class:!0});var ne=T(m);E=G(ne,e[3]),ne.forEach(w),d=j(q),p=y(q,"DIV",{class:!0});var M=T(p);f=y(M,"OUTPUT",{class:!0,style:!0,for:!0});var re=T(f);u=G(re,h),re.forEach(w),o=j(M),r=y(M,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),M.forEach(w),A=j(q),D=y(q,"SPAN",{class:!0});var oe=T(D);P=G(oe,e[4]),oe.forEach(w),q.forEach(w),I=j(X),O=y(X,"DIV",{class:!0});var ue=T(O);b=y(ue,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),ue.forEach(w),C=j(X),n=y(X,"LABEL",{class:!0,for:!0});var ie=T(n);k=G(ie,e[1]),ie.forEach(w),X.forEach(w),g.forEach(w),this.h()},h(){c(m,"class","absolute -bottom-6 left-0 text-xs font-normal"),c(f,"class","absolute -top-6 text-center text-xs font-normal"),fe(f,"left","calc("+e[7]+"% - ("+e[9]+"px))"),c(f,"for","range"),V(f,"hidden",!e[8]),ce(r,R),V(r,"svelte-1n71pu8",!0),c(p,"class","relative flex items-center"),c(D,"class","absolute -bottom-6 right-0 text-xs font-normal"),c(l,"class","relative w-auto grow"),c(b,"id",e[5]),c(b,"class","numeric-input svelte-1n71pu8"),c(b,"type","number"),c(b,"inputmode","numeric"),c(b,"min",e[3]),c(b,"max",e[4]),c(b,"step",B=e[12].step),V(b,"invalid",!e[8]),c(O,"class","flex shrink"),c(n,"class","flex shrink text-sm"),c(n,"for",e[5]),V(n,"sr-only",e[2]),c(t,"class","range-input-container svelte-1n71pu8"),c(s,"class",a="w-full px-1 py-4 "+e[12].class+" svelte-1n71pu8")},m(i,g){Y(i,s,g),_(s,t),_(t,l),_(l,m),_(m,E),_(l,d),_(l,p),_(p,f),_(f,u),e[14](f),_(p,o),_(p,r),r.autofocus&&r.focus(),Q(r,e[0]),_(l,A),_(l,D),_(D,P),_(t,I),_(t,O),_(O,b),Q(b,e[0]),_(t,C),_(t,n),_(n,k),v||(L=[U(window,"resize",e[11]),U(r,"change",e[15]),U(r,"input",e[15]),U(r,"input",e[10]),U(b,"input",e[16]),U(b,"input",e[10])],v=!0)},p(i,[g]){g&8&&Z(E,i[3]),g&1&&h!==(h=(i[0]??"")+"")&&Z(u,h),g&640&&fe(f,"left","calc("+i[7]+"% - ("+i[9]+"px))"),g&256&&V(f,"hidden",!i[8]),ce(r,R=Ie(S,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},g&8&&{min:i[3]},g&16&&{max:i[4]},g&4096&&H!==(H=i[12].step)&&{step:H},g&8192&&me(i[13],"class")])),g&1&&Q(r,i[0]),V(r,"svelte-1n71pu8",!0),g&16&&Z(P,i[4]),g&32&&c(b,"id",i[5]),g&8&&c(b,"min",i[3]),g&16&&c(b,"max",i[4]),g&4096&&B!==(B=i[12].step)&&c(b,"step",B),g&1&&$(b.value)!==i[0]&&Q(b,i[0]),g&256&&V(b,"invalid",!i[8]),g&2&&Z(k,i[1]),g&32&&c(n,"for",i[5]),g&4&&V(n,"sr-only",i[2]),g&4096&&a!==(a="w-full px-1 py-4 "+i[12].class+" svelte-1n71pu8")&&c(s,"class",a)},i:ee,o:ee,d(i){i&&w(s),e[14](null),v=!1,we(L)}}}function Ue(e,s,t){let l,m;const E=["label","labelHidden","min","max","id","value"];let d=de(s,E),{label:p}=s,{labelHidden:f=!1}=s,{min:h=void 0}=s,{max:u=void 0}=s,{id:o=void 0}=s,{value:r=Math.round((h+u)/2)}=s,H=!0,A;const D=n=>{if(Number.isNaN(n.currentTarget.valueAsNumber)){t(0,r=h);return}t(8,H=n.currentTarget.valueAsNumber>=h&&n.currentTarget.valueAsNumber<=u)},P=({value:n,min:k,max:a})=>(n-k)*100/(a-k),I=({outputElement:n,outputXPos:k})=>{var a;const v=(a=n==null?void 0:n.clientWidth)!==null&&a!==void 0?a:15;return Math.floor(k*v/100)},O=()=>{t(7,l=P({value:r,min:h,max:u})),t(9,m=I({outputElement:A,outputXPos:l}))};function b(n){Ee[n?"unshift":"push"](()=>{A=n,t(6,A)})}function B(){r=$(this.value),t(0,r)}function C(){r=$(this.value),t(0,r)}return e.$$set=n=>{t(12,s=x(x({},s),_e(n))),t(13,d=de(s,E)),"label"in n&&t(1,p=n.label),"labelHidden"in n&&t(2,f=n.labelHidden),"min"in n&&t(3,h=n.min),"max"in n&&t(4,u=n.max),"id"in n&&t(5,o=n.id),"value"in n&&t(0,r=n.value)},e.$$.update=()=>{e.$$.dirty&25&&t(7,l=P({value:r,min:h,max:u})),e.$$.dirty&217&&(r?(t(7,l=P({value:r,min:h,max:u})),t(9,m=I({outputElement:A,outputXPos:l}))):(t(7,l=0),t(9,m=0))),e.$$.dirty&192&&t(9,m=I({outputElement:A,outputXPos:l}))},s=_e(s),[r,p,f,h,u,o,A,l,H,m,D,O,s,d,b,B,C]}class We extends he{constructor(s){super(),ve(this,s,Ue,Se,ke,{label:1,labelHidden:2,min:3,max:4,id:5,value:0})}}const je=e=>({}),ge=e=>({});function Be(e){let s,t,l,m,E,d,p,f,h,u,o,r,H,A,D,P,I,O,b;function B(a){e[5](a)}let C={label:J("event"),labelHidden:!0,id:"range-input-event-history",min:1,max:e[0].length};e[1]!==void 0&&(C.value=e[1]),l=new We({props:C}),Ee.push(()=>Pe(l,"value",B));const n=e[4].decode,k=Te(n,e,e[3],ge);return P=new Ve({props:{content:be(e[0][e[1]-1]),testId:"event-history-json",copyIconTitle:J("copy-icon-title"),copySuccessIconTitle:J("copy-success-icon-title")}}),{c(){s=N("div"),t=N("div"),te(l.$$.fragment),E=W(),d=N("div"),p=N("button"),f=N("span"),u=W(),o=N("button"),r=N("span"),A=W(),k&&k.c(),D=W(),te(P.$$.fragment),this.h()},l(a){s=y(a,"DIV",{class:!0});var v=T(s);t=y(v,"DIV",{class:!0});var L=T(t);se(l.$$.fragment,L),E=j(L),d=y(L,"DIV",{class:!0});var S=T(d);p=y(S,"BUTTON",{class:!0,"aria-label":!0});var R=T(p);f=y(R,"SPAN",{class:!0}),T(f).forEach(w),R.forEach(w),u=j(S),o=y(S,"BUTTON",{class:!0,"aria-label":!0});var i=T(o);r=y(i,"SPAN",{class:!0}),T(r).forEach(w),i.forEach(w),S.forEach(w),L.forEach(w),A=j(v),k&&k.l(v),v.forEach(w),D=j(a),se(P.$$.fragment,a),this.h()},h(){c(f,"class","arrow arrow-left svelte-1780ds3"),V(f,"arrow-left-disabled",e[1]===1),c(p,"class","caret svelte-1780ds3"),p.disabled=h=e[1]===1,c(p,"aria-label",J("previous")),c(r,"class","arrow arrow-right svelte-1780ds3"),V(r,"arrow-right-disabled",e[1]===e[0].length),c(o,"class","caret svelte-1780ds3"),o.disabled=H=e[1]===e[0].length,c(o,"aria-label",J("next")),c(d,"class","flex items-center justify-center gap-3"),c(t,"class","flex w-full gap-4"),c(s,"class","flex gap-4 max-sm:flex-col")},m(a,v){Y(a,s,v),_(s,t),le(l,t,null),_(t,E),_(t,d),_(d,p),_(p,f),_(d,u),_(d,o),_(o,r),_(s,A),k&&k.m(s,null),Y(a,D,v),le(P,a,v),I=!0,O||(b=[U(p,"click",e[6]),U(o,"click",e[7])],O=!0)},p(a,v){const L={};v&1&&(L.max=a[0].length),!m&&v&2&&(m=!0,L.value=a[1],Ae(()=>m=!1)),l.$set(L),(!I||v&2)&&V(f,"arrow-left-disabled",a[1]===1),(!I||v&2&&h!==(h=a[1]===1))&&(p.disabled=h),(!I||v&3)&&V(r,"arrow-right-disabled",a[1]===a[0].length),(!I||v&3&&H!==(H=a[1]===a[0].length))&&(o.disabled=H),k&&k.p&&(!I||v&8)&&De(k,n,a,a[3],I?Oe(n,a[3],v,je):He(a[3]),ge);const S={};v&3&&(S.content=be(a[0][a[1]-1])),P.$set(S)},i(a){I||(K(l.$$.fragment,a),K(k,a),K(P.$$.fragment,a),I=!0)},o(a){z(l.$$.fragment,a),z(k,a),z(P.$$.fragment,a),I=!1},d(a){a&&w(s),ae(l),k&&k.d(a),a&&w(D),ae(P,a),O=!1,we(b)}}}function Ce(e){let s,t;return s=new Le({}),{c(){te(s.$$.fragment)},l(l){se(s.$$.fragment,l)},m(l,m){le(s,l,m),t=!0},p:ee,i(l){t||(K(s.$$.fragment,l),t=!0)},o(l){z(s.$$.fragment,l),t=!1},d(l){ae(s,l)}}}function Re(e){let s,t,l,m,E,d;const p=[Ce,Be],f=[];function h(u,o){return u[0].length?1:0}return s=h(e),t=f[s]=p[s](e),{c(){t.c(),l=pe()},l(u){t.l(u),l=pe()},m(u,o){f[s].m(u,o),Y(u,l,o),m=!0,E||(d=U(window,"keydown",e[2]),E=!0)},p(u,[o]){let r=s;s=h(u),s===r?f[s].p(u,o):(Ne(),z(f[r],1,1,()=>{f[r]=null}),ye(),t=f[s],t?t.p(u,o):(t=f[s]=p[s](u),t.c()),K(t,1),t.m(l.parentNode,l))},i(u){m||(K(t),m=!0)},o(u){z(t),m=!1},d(u){f[s].d(u),u&&w(l),E=!1,d()}}}function Xe(e,s,t){let{$$slots:l={},$$scope:m}=s,{events:E=[]}=s,d=1;function p(o){switch(o.code){case"ArrowRight":case"KeyL":o.preventDefault(),o.stopPropagation(),d<E.length&&t(1,d+=1);break;case"ArrowLeft":case"KeyH":o.preventDefault(),o.stopPropagation(),d>1&&t(1,d-=1);break}}function f(o){d=o,t(1,d)}const h=()=>{t(1,d-=1)},u=()=>{t(1,d+=1)};return e.$$set=o=>{"events"in o&&t(0,E=o.events),"$$scope"in o&&t(3,m=o.$$scope)},[E,d,p,m,l,f,h,u]}class Ge extends he{constructor(s){super(),ve(this,s,Xe,Re,ke,{events:0})}}export{Ge as W};
