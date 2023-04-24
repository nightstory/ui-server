import{W as h}from"./index.16e2925e.js";import{t as p}from"./time-format.e6048ca3.js";import{i as E}from"./index.686ecb27.js";import{c as a}from"./format-camel-case.960a78f9.js";import{h as f,i as m}from"./has.8da86d13.js";import{B as T}from"./is-event-type.0e293b3f.js";import{f as x}from"./format-date.da21d74c.js";const I={key:"",value:""},S=new Set(["activityId","attempt","binaryChecksum","identity","parentInitiatedEventId","requestId","scheduledEventId","startedEventId","lastHeartbeatTime","scheduledTime","expirationTime"]),J=t=>S.has(t),j=new Set(["suggestContinueAsNew","historySizeBytes"]),l=(t,e)=>!(e===null||e===void 0||e===""||e==="0s"||t==="type"||(!e||e==="0")&&j.has(t)),A=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),X=t=>typeof t=="string"?t:[t==null?void 0:t.payloads,t==null?void 0:t.indexedFields,t==null?void 0:t.points,t].find(e=>e!==void 0),D=t=>{if(m(t)){if(f(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const e in t)if(m(t[e]))return D(t[e])}},R=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],Y=t=>{for(const e of R)if(t===e)return!0;return!1},b=["taskQueueName"],Z=t=>{for(const e of b)if(t===e)return!0;return!1},O=["workflowExecutionWorkflowId","workflowExecutionRunId"],v=(t,e)=>{const r=Boolean((e==null?void 0:e.workflowExecutionWorkflowId)&&(e==null?void 0:e.workflowExecutionRunId));for(const o of O)if(t===o&&r)return!0;return!1},y=(t,e)=>{if(typeof e=="object"){const[r]=Object.keys(e);return{key:t+a(r),value:e[r]}}else return{key:t,value:e.toString()}},L=["failure","input","activityType","parentInitiatedEventId","workflowExecution","workflowType","taskQueue"],N=({attributes:t})=>{for(const[e,r]of Object.entries(t))if(l(e,r))return y(e,r)},Q=t=>{if(f(t,"ActivityType"))return t.ActivityType;if(f(t,"activity_type"))return t.activity_type},d=t=>{var r,o,n,s;const e=N(t);if(T(t)){const i=(s=(n=(o=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:o.data)==null?void 0:n.payloads)==null?void 0:s[0],c=Q(i);if(c)return y("ActivityType",c)}for(const[i,c]of Object.entries(t.attributes))for(const w of L)if(i===w&&l(i,c))return y(i,c);return e},W=({lastEvent:t})=>d(t),tt=t=>t?E(t)?W(t):d(t):I,G=new Set(["header"]),P=new Set(["taskQueue","retryPolicy","parentWorkflowExecution","workflowExecution"]),F=new Set(["maximumAttempts"]),u="Unlimited",K="No Expiration",et=(t,e)=>t===0?K:e,rt=(t,e)=>t?t-e:u,ot=t=>t||u,C=(t,e)=>t==="maximumAttempts"&&!e?u:e,V=(t,e)=>{if(P.has(e)&&typeof t[e]=="object"){for(const[r,o]of Object.entries(t[e]))A(o)&&(F.has(r)?t[`${e}${a(r)}`]=C(r,o):t[`${e}${a(r)}`]=o);delete t[e]}},nt=(t,{compact:e}={compact:!1})=>{const r={};e&&(r.eventTime=x(t.eventTime,h(p)));for(const[o,n]of Object.entries(t.attributes)){const s=l(o,n);!G.has(o)&&s&&(r[o]=n),V(r,o)}return r},k=["summary","parent","activity","taskQueue","schedule","retryPolicy","workflow","searchAttributes"],st={activity:{label:"Activity"},parent:{label:"Parent"},retryPolicy:{label:"Retry Policy"},schedule:{label:"Schedule"},searchAttributes:{label:"Search Attributes"},summary:{label:"Summary"},taskQueue:{label:"Task Queue"},workflow:{label:"Workflow"}},g=(t,e)=>{var r,o;t.category==="activity"&&((r=e==null?void 0:e.activity)!=null&&r.length)&&(e.summary=[...e.activity,...e.summary],e.activity=[]),t.category==="activity"&&((o=e==null?void 0:e.workflow)!=null&&o.length)&&(e.summary=[...e.summary,...e.workflow],e.workflow=[])},B=t=>{const e=new Set(["summary","searchAttributes"]);for(const[r,o]of Object.entries(t))o.length===1&&!e.has(r)&&(t.summary=[...t.summary,...o],t[r]=[])},it=(t,e)=>{const r={};k.forEach(o=>{o==="summary"?r[o]=Object.keys(e):r[o]=[]});for(const o in e){const n=k.find(s=>o.includes(s));n&&(r[n]=[o,...r[n]],r.summary=r.summary.filter(s=>s!==o))}return g(t,r),B(r),r};export{v as a,Z as b,J as c,D as d,st as e,nt as f,X as g,it as h,tt as i,et as j,rt as k,ot as l,Y as s};
