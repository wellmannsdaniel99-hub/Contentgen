export type PlannedPost={id:string;when:string;title:string;platforms:string[];status:'Ready'|'Review'|'Generating'};
export const posts:PlannedPost[]=[
{id:'1',when:'TODAY · 18:30',title:'Self-cleaning kitchen counter',platforms:['Instagram','TikTok'],status:'Ready'},
{id:'2',when:'TOMORROW · 18:30',title:'A window that generates clean water',platforms:['Instagram','TikTok'],status:'Review'},
{id:'3',when:'SUN · 18:30',title:'The desk that charges everything',platforms:['Instagram','TikTok'],status:'Ready'},
{id:'4',when:'MON · 18:30',title:'Smart mirror that plans your morning',platforms:['Instagram','TikTok'],status:'Generating'},
{id:'5',when:'TUE · 18:30',title:'Shoes that adapt to every surface',platforms:['Instagram','TikTok'],status:'Ready'},
{id:'6',when:'WED · 18:30',title:'A fridge that prevents food waste',platforms:['Instagram','TikTok'],status:'Review'},
{id:'7',when:'THU · 18:30',title:'The backpack that follows you',platforms:['Instagram','TikTok'],status:'Ready'}];
