/* Shared home/game companions. V38 progress and question banks are untouched. */
(()=>{'use strict';
const KEY='wm-companions-v39',catalog=[
{id:'blond_angel',name:'Sunny 阳光天使',kind:'baby'},
{id:'brown_angel',name:'Coco 棕羽天使',kind:'baby'},
{id:'purple_angel',name:'Violet 紫金天使',kind:'baby'},
{id:'school_girl',name:'Bella 女孩天使',kind:'baby'},
{id:'school_boy',name:'Leo 男孩天使',kind:'baby'},
{id:'phoenix',name:'Phoenix 小凤凰',kind:'pet'},
{id:'ice_cat',name:'Snow 魔法小猫',kind:'pet'},
{id:'koala',name:'Koala 考拉',kind:'pet'}];
const scenes=[['forest-stairs','Forest Steps 森林阶梯'],['coast-stairs','Ocean Steps 海边阶梯'],['city-stairs','City Steps 城市阶梯'],['forest','Forest 森林'],['coast','Ocean 海边'],['city','City 城市']];
function read(){let s={};try{s=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}const slots=Array.isArray(s.slots)?[...new Set(s.slots)].filter(id=>catalog.some(c=>c.id===id)).slice(0,2):[];if(!slots.some(id=>catalog.find(c=>c.id===id).kind==='baby'))slots.unshift('blond_angel');return{scene:scenes.some(x=>x[0]===s.scene)?s.scene:'forest-stairs',slots:slots.slice(0,2)}}
function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch{}window.dispatchEvent(new Event('wm-companions-change'));}
const src=(id,action='idle')=>'v39-'+id+'-'+action+(action==='idle'?'.webp':'.png');
function mount(host,classes=''){host.replaceChildren();read().slots.forEach((id,i)=>{const n=document.createElement('div');n.className='wm-companion '+classes+' slot-'+i;n.dataset.character=id;const img=document.createElement('img');setImage(img,id);img.alt=catalog.find(c=>c.id===id).name;img.draggable=false;n.append(img);host.append(n);});host.dataset.count=read().slots.length;}
function setImage(img,id,action='idle'){if(id==='koala'){img.src='v43-koala.png';return;}window.WMGameMedia.image(img,src(id,action));}
let timer=0,epoch=0;
function reward(bonus){const host=document.querySelector('.game-companions');if(!host)return;const token=++epoch;clearTimeout(timer);const nodes=[...host.children];nodes.forEach(n=>{n.getAnimations?.().forEach(a=>a.cancel());const id=n.dataset.character,pet=catalog.find(c=>c.id===id)?.kind==='pet';setImage(n.firstElementChild,id,pet?'idle':bonus===3?'cheer_fist':'thumbs_up');if(bonus===10&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&n.animate){const stage=host.parentElement,w=stage.clientWidth,h=stage.clientHeight;const x=n.offsetLeft+n.offsetWidth/2,y=n.offsetTop+n.offsetHeight/2;const point=(px,py,scale=1)=>({transform:`translate(${w*px-x}px,${h*py-y}px) scale(${scale})`});n.animate([{transform:'translate(0,0) scale(1)'},{...point(.3,.59,1.05),offset:.22},{...point(.7,.37,1.1),offset:.45},{...point(.7,.6,1.05),offset:.65},{...point(.42,.68),offset:.8},{transform:'translate(0,0) scale(1)'}],{duration:2800,easing:'ease-in-out'});}else if(n.animate){n.animate([{transform:'translateY(0)'},{transform:'translateY(-10px) rotate(-3deg)',offset:.4},{transform:'translateY(0)'}],{duration:650});}});timer=setTimeout(()=>{if(epoch===token)nodes.forEach(n=>setImage(n.firstElementChild,n.dataset.character));},bonus===10?3000:2000);}
window.WMCompanions={read,save,catalog,scenes,src,setImage,mount,reward};
function boot(){const stage=document.querySelector('.match-stage');if(stage){const host=document.createElement('div');host.className='game-companions';stage.append(host);mount(host);window.WMGameMedia.load('wm-match-forest.png').then(url=>{stage.style.backgroundImage=`url('${url}')`;}).catch(()=>{});window.addEventListener('wm-companions-change',()=>mount(host));window.addEventListener('storage',e=>{if(e.key===KEY)mount(host);});}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
