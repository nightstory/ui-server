import{h as O}from"./has.8da86d13.js";import{i as f,a as m,b as F,c as G,d as L,e as $,g as N,h as B,j as M,k,l as T,m as R,n as j,o as q,p as g,q as z,r as D,s as K,t as _,u as H,v as J,w as v,x as h,y as A,z as w,A as S,B as b,C as x}from"./is-event-type.0e293b3f.js";import{f as P}from"./format-time.bae4804b.js";const C=t=>f(t)||m(t)||F(t)||G(t)||L(t)||$(t)||N(t)||B(t)||M(t),tt=t=>c(t)?t.isFailureOrTimedOut:C(t),I=t=>k(t)||T(t)||R(t)||j(t),it=t=>c(t)?t.isCanceled:I(t),y=t=>q(t)||g(t),rt=t=>c(t)?t.isTerminated:y(t),p=t=>z(t)?String(t.activityTaskStartedEventAttributes.scheduledEventId):k(t)?String(t.activityTaskCanceledEventAttributes.scheduledEventId):D(t)?String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId):m(t)?String(t.activityTaskFailedEventAttributes.scheduledEventId):f(t)?String(t.activityTaskTimedOutEventAttributes.scheduledEventId):K(t)?String(t.activityTaskCompletedEventAttributes.scheduledEventId):_(t)?String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId):g(t)?String(t.childWorkflowExecutionTerminatedEventAttributes.initiatedEventId):H(t)?String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId):J(t)?String(t.timerFiredEventAttributes.startedEventId):T(t)?String(t.timerCanceledEventAttributes.startedEventId):t.id,Q=t=>{var i,r,e,s,a,l,d,u,n;if(t){if(v(t))return(r=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:r.name;if(h(t))return`Timer ${(e=t.timerStartedEventAttributes)==null?void 0:e.timerId} (${P((s=t.timerStartedEventAttributes)==null?void 0:s.startToFireTimeout)})`;if(A(t))return`Signal: ${(a=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:a.signalName}`;if(w(t))return`Signal received: ${(l=t.workflowExecutionSignaledEventAttributes)==null?void 0:l.signalName}`;if(S(t))return b(t)?"Local Activity":`Marker: ${(d=t.markerRecordedEventAttributes)==null?void 0:d.markerName}`;if(x(t))return`Child Workflow: ${(n=(u=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:u.workflowType)==null?void 0:n.name}`}},E=({events:t})=>{let i=0,r;for(const e of t.values()){const s=Number(e.id);s>=i&&(i=s,r=e)}return r},o=t=>{const i=p(t),r=Q(t),{timestamp:e,category:s,classification:a}=t,l=t,d=new Map,u=new Set;return d.set(t.id,t),u.add(t.id),{id:i,name:r,events:d,eventIds:u,initialEvent:l,timestamp:e,category:s,classification:a,get eventTime(){var n;return(n=this.lastEvent)==null?void 0:n.eventTime},get attributes(){var n;return(n=E(this))==null?void 0:n.attributes},get eventList(){return Array.from(this.events,([n,W])=>W)},get lastEvent(){return E(this)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(C))},get isCanceled(){return Boolean(this.eventList.find(I))},get isTerminated(){return Boolean(this.eventList.find(y))}}},U=t=>{if(v(t)||x(t)||h(t)||A(t)||w(t))return o(t);if(S(t))return b(t),o(t)},V=(t,i)=>{t&&(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},et=(t,i="ascending")=>{const r={};for(const e of t){const s=p(e),a=U(e);a?r[a.id]=a:V(r[s],e)}return i==="descending"?Object.values(r).reverse():Object.values(r)},c=t=>t==null?!1:O(t,"events");export{it as a,rt as b,tt as e,et as g,c as i};
