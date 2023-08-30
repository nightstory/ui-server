import{w as k}from"./index.097d22fc.js";import{g as v}from"./navigation.a3748b07.js";import{c as y,e as T}from"./schedule-service.7e53d914.js";import{c as j,o as D}from"./route-for.0a18eb49.js";import{g as N,w as C,m as M}from"./calendar.81d1e381.js";const Q=({preset:e,month:l,dayOfMonth:s,dayOfWeek:n,hour:t,minute:i})=>{let r="";const p=!t||!parseInt(t)||parseInt(t)<12?"am":"pm",a=`${(!t||!parseInt(t)?"12":parseInt(t)<=12?t:(parseInt(t)-12).toString()).padStart(2,"0")}:${i?i.padStart(2,"0"):"00"}${p}`;if(e==="week"){const c=N.find(m=>m.value===n);c?r=`${c.label} at ${a}`:r=`${n.split(",").map(u=>C.find(w=>w.value===u).label).join(", ")} at ${a}`}else if(e==="month")if(l==="*")r=`Every ${s} of the month at ${a}`;else{const m=l.split(",").map(d=>M.find(h=>h.value===d).label).join(", ");r=`Every ${s} of ${m} at ${a}`}return r},S=e=>e?parseInt(e):0,W=(e,l,s,n)=>`${S(e)*60*60*24+S(l)*60*60+S(s)*60+S(n)}s`,_=({months:e=[],daysOfMonth:l=[],daysOfWeek:s=[]})=>{var p,o;const n=e.sort((a,c)=>parseInt(a)-parseInt(c)).join(","),t=l.sort((a,c)=>a-c).join(","),r=(((o=(p=s==null?void 0:s[0])==null?void 0:p.split(","))==null?void 0:o.length)>1?s[0].split(","):s).sort((a,c)=>parseInt(a)-parseInt(c)).join(",");return{month:n,dayOfMonth:t,dayOfWeek:r}},$=(e,l,s)=>{const{hour:n,minute:t,second:i,phase:r,cronString:p}=l,{preset:o,months:a,days:c,daysOfMonth:m,daysOfWeek:d}=s;if(o==="string"){const u=`${p}#${p}`;e.schedule.spec.cronString=[u],e.schedule.spec.calendar=[],e.schedule.spec.interval=[]}else if(o==="interval"){const u=W(c,n,t,i);e.schedule.spec.interval=[{interval:u,phase:r||"0s"}],e.schedule.spec.cronString=[],e.schedule.spec.calendar=[]}else{const{month:u,dayOfMonth:h,dayOfWeek:w}=_({months:a,daysOfMonth:m,daysOfWeek:d}),I=Q({preset:o,month:u,dayOfMonth:h,dayOfWeek:w,hour:n,minute:t,second:i});e.schedule.spec.calendar=[{year:"*",month:o==="month"?u:"",dayOfMonth:o==="month"?h:"",dayOfWeek:o==="week"?w:"",hour:n,minute:t,second:i,comment:I}],e.schedule.spec.interval=[],e.schedule.spec.cronString=[]}},O=async({action:e,spec:l,presets:s})=>{const{namespace:n,name:t,workflowId:i,workflowType:r,taskQueue:p}=e,o={schedule_id:t,schedule:{spec:{calendar:[],interval:[],cronString:[]},action:{startWorkflow:{workflowId:i,workflowType:{name:r},taskQueue:{name:p}}}}};$(o,l,s),f.set(!0);const{error:a}=await y({namespace:n,body:o});a?(g.set(a),f.set(!1)):setTimeout(()=>{g.set(""),f.set(!1),v(j({namespace:n}))},2e3)},A=async({action:e,spec:l,presets:s},n,t)=>{const{namespace:i,name:r,workflowId:p,workflowType:o,taskQueue:a}=e,{preset:c}=s,m={schedule_id:t,schedule:{...n,action:{startWorkflow:{...n.action.startWorkflow,workflowId:p,workflowType:{name:o},taskQueue:{name:a}}}}};c==="existing"?m.schedule.spec=n.spec:($(m,l,s),m.schedule.spec.structuredCalendar=[]),f.set(!0);const{error:d}=await T({namespace:i,scheduleId:t,body:m});d?(g.set(d),f.set(!1)):setTimeout(()=>{v(D({namespace:i,scheduleId:r})),g.set(""),f.set(!1)},2e3)},f=k(!1),g=k("");export{O as a,g as e,f as l,A as s};
