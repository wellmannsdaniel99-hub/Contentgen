export type TrendSignal={source:'trend'|'evergreen'|'ai';topic:string;momentum:number;freshness:number;nicheFit:number;originality:number};
export type RankedIdea=TrendSignal&{score:number;reason:string};
export function rankSignal(x:TrendSignal):RankedIdea{const score=Math.round(x.momentum*.3+x.freshness*.25+x.nicheFit*.3+x.originality*.15);const reason=x.source==='trend'?'Trend momentum + niche fit':x.source==='evergreen'?'Reliable interest + strong visual potential':'Original concept matched to the niche';return {...x,score,reason}}
export function selectIdeas(signals:TrendSignal[],limit=5){return signals.map(rankSignal).sort((a,b)=>b.score-a.score).slice(0,limit)}
