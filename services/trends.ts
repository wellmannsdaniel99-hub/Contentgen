import { selectIdeas,TrendSignal } from '../lib/autopilot';
const fallback:TrendSignal[]=[{source:'ai',topic:'A wardrobe that cleans clothes while you sleep',momentum:72,freshness:90,nicheFit:94,originality:98},{source:'evergreen',topic:'What if your windows cooled your home?',momentum:78,freshness:72,nicheFit:92,originality:84},{source:'ai',topic:'A fridge shelf that tells food when to be eaten',momentum:68,freshness:88,nicheFit:95,originality:96}];
const API=process.env.EXPO_PUBLIC_CONTENTGEN_API_URL;
export async function getAutopilotIdeas(){if(!API)return selectIdeas(fallback,5);try{const r=await fetch(`${API}/v1/discover`);if(!r.ok)throw new Error('backend');const data=await r.json();return data.ideas}catch{return selectIdeas(fallback,5)}}
