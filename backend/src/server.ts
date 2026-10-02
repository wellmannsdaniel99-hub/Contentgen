import 'dotenv/config';import cors from 'cors';import express from 'express';import { fetchTrendSignals,rank } from './trends.js';
const app=express();app.use(cors());app.use(express.json());
app.get('/health',(_req,res)=>res.json({ok:true,service:'contentgen-autopilot'}));
app.get('/v1/discover',async(_req,res)=>{try{const signals=await fetchTrendSignals();res.json({live:Boolean(process.env.TREND_PROVIDER_URL),ideas:signals.map(rank).sort((a,b)=>b.score-a.score).slice(0,10),generatedAt:new Date().toISOString()})}catch(e){res.status(502).json({error:e instanceof Error?e.message:'Trend provider error'})}});
app.post('/v1/autopilot/run',async(_req,res)=>{try{const signals=await fetchTrendSignals();const ideas=signals.map(rank).sort((a,b)=>b.score-a.score).slice(0,14);res.json({status:'planned',count:ideas.length,ideas})}catch(e){res.status(502).json({error:e instanceof Error?e.message:'Autopilot error'})}});
const port=Number(process.env.PORT||8787);app.listen(port,()=>console.log(`Contentgen backend on :${port}`));
