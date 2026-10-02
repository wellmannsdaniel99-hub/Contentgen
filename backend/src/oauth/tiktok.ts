import crypto from 'node:crypto';
const states=new Map<string,number>();
export function createTikTokAuthorization(){const key=process.env.TIKTOK_CLIENT_KEY,redirect=process.env.TIKTOK_REDIRECT_URI;if(!key||!redirect)throw new Error('TikTok OAuth is not configured');const state=crypto.randomBytes(24).toString('hex');states.set(state,Date.now()+600000);const q=new URLSearchParams({client_key:key,response_type:'code',scope:'user.info.basic,video.publish',redirect_uri:redirect,state});return {url:'https://www.tiktok.com/v2/auth/authorize/?'+q.toString(),state}}
export function consumeTikTokState(state:string){const expires=states.get(state);states.delete(state);return Boolean(expires&&expires>Date.now())}
