import{w as g}from"./index.9af4d667.js";import{g as v}from"./navigation.8f062ff5.js";import{c as I,e as M,b as C}from"./schedule-service.6e8b820e.js";import{c as O,o as Q}from"./route-for.abf067f0.js";const f=e=>e?parseInt(e):0,W=(e,a,t,s)=>`${f(e)*60*60*24+f(a)*60*60+f(t)*60+f(s)}s`,j=({months:e=[],daysOfMonth:a=[],daysOfWeek:t=[]})=>{var l,n;const s=e.sort((o,i)=>parseInt(o)-parseInt(i)).join(","),r=a.sort((o,i)=>o-i).join(","),u=(((n=(l=t==null?void 0:t[0])==null?void 0:l.split(","))==null?void 0:n.length)>1?t[0].split(","):t).sort((o,i)=>parseInt(o)-parseInt(i)).join(",");return{month:s,dayOfMonth:r,dayOfWeek:u}},T=(e,a,t)=>{const{hour:s,minute:r,second:c,phase:u,cronString:l}=a,{preset:n,months:o,days:i,daysOfMonth:m,daysOfWeek:h}=t;if(n==="string"){const p=`${l}#${l}`;e.schedule.spec.cronString=[p],e.schedule.spec.calendar=[],e.schedule.spec.interval=[]}else if(n==="interval"){const p=W(i,s,r,c);e.schedule.spec.interval=[{interval:p,phase:u||"0s"}],e.schedule.spec.cronString=[],e.schedule.spec.calendar=[]}else{const{month:p,dayOfMonth:k,dayOfWeek:S}=j({months:o,daysOfMonth:m,daysOfWeek:h}),y=C({preset:n,month:p,dayOfMonth:k,dayOfWeek:S,hour:s,minute:r,second:c});e.schedule.spec.calendar=[{year:"*",month:n==="month"?p:"",dayOfMonth:n==="month"?k:"",dayOfWeek:n==="week"?S:"",hour:s,minute:r,second:c,comment:y}],e.schedule.spec.interval=[],e.schedule.spec.cronString=[]}},F=async({action:e,spec:a,presets:t})=>{const{namespace:s,name:r,workflowId:c,workflowType:u,taskQueue:l}=e,n={schedule_id:r,schedule:{spec:{calendar:[],interval:[],cronString:[]},action:{startWorkflow:{workflowId:c,workflowType:{name:u},taskQueue:{name:l}}}}};T(n,a,t),d.set(!0);const{error:o}=await I({namespace:s,body:n});o?(w.set(o),d.set(!1)):setTimeout(()=>{w.set(""),d.set(!1),v(O({namespace:s}))},2e3)},_=async({action:e,spec:a,presets:t},s,r)=>{const{namespace:c,name:u,workflowId:l,workflowType:n,taskQueue:o}=e,{preset:i}=t,m={schedule_id:r,schedule:{...s,action:{startWorkflow:{...s.action.startWorkflow,workflowId:l,workflowType:{name:n},taskQueue:{name:o}}}}};i==="existing"?m.schedule.spec=s.spec:(T(m,a,t),m.schedule.spec.structuredCalendar=[]),d.set(!0);const{error:h}=await M({namespace:c,scheduleId:r,body:m});h?(w.set(h),d.set(!1)):setTimeout(()=>{v(Q({namespace:c,scheduleId:u})),w.set(""),d.set(!1)},2e3)},d=g(!1),w=g("");export{F as a,w as e,d as l,_ as s};
