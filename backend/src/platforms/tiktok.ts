// Official TikTok Content Posting API adapter boundary.
// Tokens remain server-side. Do not publish until the creator has authorized the required scope.
export type TikTokPost={title:string;videoUrl:string;privacyLevel:string;aiGenerated:boolean};
export function directPostPayload(p:TikTokPost){return {post_info:{title:p.title,privacy_level:p.privacyLevel,disable_duet:false,disable_comment:false,disable_stitch:false,brand_content_toggle:false,brand_organic_toggle:false,is_aigc:p.aiGenerated},source_info:{source:'PULL_FROM_URL',video_url:p.videoUrl}}}
