/* V64.19: code-drawn open journey. Selection is independent of completed exams. */
(()=>{'use strict';const J=window.WMJourney,C=window.WMCompanions,NS='http://www.w3.org/2000/svg';
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
function svg(tag,attrs){const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));return n}
const rows=[84,70,56,42,28,14];
function stairs(){const root=document.getElementById('magic-stairs');
 const defs=svg('defs',{}),gradient=svg('linearGradient',{id:'magic-step-stone',x1:0,y1:0,x2:1,y2:0});for(const [offset,color] of [['0%','#b39774'],['28%','#fff2d6'],['68%','#e7d0ab'],['100%','#b79b79']])gradient.append(svg('stop',{offset,'stop-color':color}));defs.append(gradient);root.append(defs);
 const pts=rows.map((y,i)=>({x:i%2?205:395,y:(y+11)*13.33}));
 let path=`M ${pts[0].x} ${pts[0].y+60} L ${pts[0].x} ${pts[0].y}`;
 for(let i=0;i<pts.length-1;i++){const a=pts[i],b=pts[i+1];path+=` C ${a.x} ${a.y-92},${b.x} ${b.y+92},${b.x} ${b.y}`}
 root.append(svg('path',{d:path,fill:'none',stroke:'#ac9279','stroke-width':86,'stroke-linecap':'round'}),svg('path',{d:path,fill:'none',stroke:'url(#magic-step-stone)','stroke-width':76,'stroke-linecap':'round'}));
 for(let i=0;i<pts.length-1;i++){const a=pts[i],b=pts[i+1];for(let j=1;j<12;j++){const t=j/12,u=1-t;const x=u*u*u*a.x+3*u*u*t*a.x+3*u*t*t*b.x+t*t*t*b.x,y=u*u*u*a.y+3*u*u*t*(a.y-92)+3*u*t*t*(b.y+92)+t*t*t*b.y;const dx=6*u*t*(b.x-a.x),dy=3*u*u*(-92)+6*u*t*(b.y+92-(a.y-92))+3*t*t*(-92),len=Math.hypot(dx,dy)||1,nx=-dy/len*35,ny=dx/len*35;root.append(svg('line',{x1:x-nx,y1:y-ny,x2:x+nx,y2:y+ny,stroke:'#fff8e6','stroke-width':4}),svg('line',{x1:x-nx,y1:y-ny+3,x2:x+nx,y2:y+ny+3,stroke:'#a58d705c','stroke-width':2}));}}
}
let lastActor='';
function sync(){let saved={};try{saved=JSON.parse(localStorage.getItem('wm-companions-v39')||'{}')||{}}catch{}
 const scene=saved.scene||'forest-stairs',family=scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest';let file='v41-stairs-'+family+'.png';try{const home=JSON.parse(localStorage.getItem('wm-home-visible-scene-v6411')||'null');if(home?.scene===scene&&/^v41-stairs-(forest|coast|blossom)\.png$/.test(home.file))file=home.file}catch{}
 document.body.style.backgroundImage='url("'+file+'")';
 const current=J.level(J.selected()).stage.id,index=Math.max(0,J.stages.findIndex(s=>s.id===current));
 document.querySelectorAll('.magic-stage').forEach(a=>{if(a.dataset.stage===current)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')});
 const host=document.getElementById('magic-current-angel');host.style.setProperty('--angel-left',index%2?'12%':'54%');host.style.setProperty('--angel-top',(rows[index]-2)+'%');
 const id=C.read().slots[0];if(id!==lastActor||!host.children.length){lastActor=id;host.replaceChildren();const img=el('img','magic-angel-image');img.alt=C.catalog.find(c=>c.id===id)?.name||'Current angel';C.setImage(img,id);const label=el('span','magic-current-label','Learning Here');label.append(el('small','','正在这里学习'));host.append(img,label);}
 host.setAttribute('aria-label',(C.catalog.find(c=>c.id===id)?.name||'Angel')+' · '+J.stages[index].en+' · '+J.stages[index].zh);
}
function init(){stairs();const links=document.getElementById('magic-stage-links'),map=document.getElementById('magic-journey');
 J.stages.forEach((s,i)=>{const a=el('a','magic-stage');a.href='level-road.html?stage='+s.id;a.dataset.stage=s.id;a.style.setProperty('--stage-left',i%2?'57%':'4%');a.style.setProperty('--stage-top',rows[i]+'%');a.setAttribute('aria-label',s.en+' '+s.zh+' · Choose this stage');a.append(el('strong','',s.en),el('small','',s.zh+'阶段'));
 a.addEventListener('click',e=>{if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;J.saveSelected(s.start);sync()});links.append(a);
 const platform=el('div','magic-platform');platform.style.setProperty('--platform-left',i%2?'7%':'54%');platform.style.setProperty('--stage-top',rows[i]+'%');platform.setAttribute('aria-hidden','true');map.append(platform);
 });sync();for(const e of ['storage','pageshow','wm-companions-change'])window.addEventListener(e,sync);document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
