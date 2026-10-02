export type QueueItem={id:string;publishAt:string;platforms:string[];status:'review'|'ready'|'generating';draft:any;media:any};const queue:QueueItem[]=[];
export function addToQueue(input:Omit<QueueItem,'id'>){const item={...input,id:crypto.randomUUID()};queue.push(item);return item}export function getQueue(){return [...queue].sort((a,b)=>a.publishAt.localeCompare(b.publishAt))}
export function approve(id:string){const x=queue.find(q=>q.id===id);if(x)x.status='ready';return x}
