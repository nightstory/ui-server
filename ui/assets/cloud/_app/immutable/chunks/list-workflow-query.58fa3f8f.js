import{k as f,l as d,m as s,n as m}from"./format-time.bae4804b.js";import{d as o}from"./index.6fcbae08.js";import{p as l}from"./stores.49cff08c.js";import{c as n}from"./cluster.17b3887d.js";import{t as u}from"./versions.fed1dd0f.js";import{i as c}from"./version-check.d006b302.js";import{W as p}from"./index.16e2925e.js";const y=(t,r)=>{var i;return((i=t==null?void 0:t.visibilityStore)==null?void 0:i.includes("elasticsearch"))||c(r,"1.19")},w=t=>{var r;return(r=t==null?void 0:t.visibilityStore)==null?void 0:r.includes("elasticsearch")},a=o([l],([t])=>{var r,i,e;return(e=(i=(r=t.data)==null?void 0:r.settings)==null?void 0:i.runtimeEnvironment)==null?void 0:e.isCloud}),b=o([n,u,a],([t,r,i])=>y(t,r)||i),D=o([n,a],([t,r])=>w(t)||r),S={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},g=["workflowId","workflowType","timeRange","executionStatus","closeTime"],T=t=>!(t===null||t===void 0||t===""||typeof t=="string"&&t==="undefined"),E=t=>{if(typeof t!="string")return!1;for(const r of g)if(r===t)return!0;return!1},V=(t,r,i)=>{const e=S[t];return r==="All"?"":f(r)||d(r)?i||p(b)?`${e} > "${s(r)}"`:`${e} BETWEEN "${s(r)}" AND "${m()}"`:`${e}="${r}"`},W=(t,r)=>Object.entries(t).map(([i,e])=>{if(E(i)&&T(e))return V(i,e,r)}).filter(Boolean),C=(t,r=!1)=>W(t,r).join(" and ");export{D as a,a as i,b as s,C as t};
