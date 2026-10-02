export type Candidate={title:string;caption?:string;aiGenerated?:boolean;sourceUrl?:string};
export type ComplianceResult={allowed:boolean;requiresReview:boolean;aiLabel:boolean;reasons:string[]};
const blocked=[/weapon|bomb|explosive/i,/suicide|self[- ]harm/i,/sexual|porn/i,/hate|extremist/i,/illegal drug/i];
export function complianceCheck(c:Candidate):ComplianceResult{const text=`${c.title} ${c.caption||''}`;const reasons:string[]=[];if(blocked.some(x=>x.test(text)))reasons.push('Blocked high-risk topic');if(!c.sourceUrl)reasons.push('No external factual source attached');return {allowed:!reasons.includes('Blocked high-risk topic'),requiresReview:reasons.length>0,aiLabel:Boolean(c.aiGenerated),reasons}}
