export type MediaJob={kind:'image'|'video';prompt:string;aspectRatio:'9:16';aiLabel:true};
export function createMediaJob(visualPrompt:string,kind:'image'|'video'='video'):MediaJob{return {kind,prompt:visualPrompt,aspectRatio:'9:16',aiLabel:true}}
// Provider execution stays server-side. A later adapter can submit this job only to a provider whose commercial terms fit Contentgen.
