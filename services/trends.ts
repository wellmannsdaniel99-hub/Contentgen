import { selectIdeas,TrendSignal } from '../lib/autopilot';
const seed:TrendSignal[]=[
{source:'trend',topic:'Invisible tech is replacing everyday buttons',momentum:96,freshness:94,nicheFit:91,originality:70},
{source:'ai',topic:'A wardrobe that cleans clothes while you sleep',momentum:72,freshness:90,nicheFit:94,originality:98},
{source:'evergreen',topic:'What if your windows cooled your home?',momentum:78,freshness:72,nicheFit:92,originality:84},
{source:'trend',topic:'Homes that react before you touch anything',momentum:90,freshness:95,nicheFit:89,originality:76},
{source:'ai',topic:'A fridge shelf that tells food when to be eaten',momentum:68,freshness:88,nicheFit:95,originality:96}];
// Adapter boundary: replace seed signals with server-fetched trend providers later.
export async function getAutopilotIdeas(){return selectIdeas(seed,5)}
