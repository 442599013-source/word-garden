/* V64.19: code-drawn open journey. Selection is independent of completed exams. */
(()=>{'use strict';const J=window.WMJourney,C=window.WMCompanions,NS='http://www.w3.org/2000/svg';
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
function svg(tag,attrs){const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));return n}
const rows=[84,70,56,42,28,14];
function vine(){
 const root=document.getElementById('magic-stairs');
 const defs=svg('defs',{}),gradient=svg('linearGradient',{id:'magic-vine-green',x1:0,y1:0,x2:1,y2:0});
 for(const [offset,color] of [['0%','#416c53'],['35%','#7cae75'],['65%','#c4df9a'],['100%','#527d5a']])gradient.append(svg('stop',{offset,'stop-color':color}));defs.append(gradient);root.append(defs);
 const stem='M 308 1290 C 220 1230 244 1140 320 1080 S 365 925 292 886 S 225 754 305 699 S 360 552 285 512 S 230 369 306 327 S 346 186 292 159 Q 263 130 303 107';
 root.append(svg('path',{d:stem,fill:'none',stroke:'#e9f8d366','stroke-width':29,'stroke-linecap':'round'}),svg('path',{d:stem,fill:'none',stroke:'url(#magic-vine-green)','stroke-width':16,'stroke-linecap':'round'}),svg('path',{d:stem,fill:'none',stroke:'#e0efbd9c','stroke-width':2.4,'stroke-linecap':'round'}));
 function leaf(x,y,angle,scale=1){const g=svg('g',{transform:`translate(${x} ${y}) rotate(${angle}) scale(${scale})`});g.append(svg('path',{d:'M 0 0 C -14 -42 -55 -54 -78 -39 C -69 -8 -28 12 0 0 Z',fill:'#76a580',stroke:'#ebf8d9','stroke-width':1.5}),svg('path',{d:'M -2 -1 Q -37 -27 -70 -36',fill:'none',stroke:'#e4efbe','stroke-width':1.4}),svg('path',{d:'M -25 -14 l -1 -14 M -39 -23 l -15 4',fill:'none',stroke:'#c7dfad','stroke-width':1}));root.append(g)}
 rows.forEach((y,i)=>{
  const cy=(y+6)*13.33,side=i%2?1:-1;
  root.append(svg('path',{d:`M 300 ${cy+65} Q ${300+side*65} ${cy+5} ${300+side*125} ${cy+27}`,fill:'none',stroke:'#71996c','stroke-width':6,'stroke-linecap':'round'}));
  root.append(svg('path',{d:`M 300 ${cy+36} Q ${300-side*85} ${cy+70} ${300-side*133} ${cy+92}`,fill:'none',stroke:'#8eb47a','stroke-width':5,'stroke-linecap':'round'}));
  leaf(300+side*72,cy+22,side>0?155:-12,.72);leaf(300-side*64,cy+53,side>0?5:170,.88);
  leaf(296,cy-55,i%2?145:20,.58);
  const fx=300+side*83,fy=cy-5;
  const flower=svg('g',{transform:`translate(${fx} ${fy})`});
  for(let k=0;k<5;k++)flower.append(svg('ellipse',{cx:0,cy:-8,rx:4.5,ry:9,fill:k%2?'#f7f0ff':'#fffdf4',stroke:'#e5cfed','stroke-width':.6,transform:`rotate(${k*72})`}));flower.append(svg('circle',{cx:0,cy:0,r:4,fill:'#ebd5a1'}));root.append(flower);
 });
 leaf(303,111,110,.52);leaf(291,151,-15,.47);
}
let lastActor='';
function sync(){let saved={};try{saved=JSON.parse(localStorage.getItem('wm-companions-v39')||'{}')||{}}catch{}
 const scene=saved.scene||'forest-stairs',family=scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest';let file='v41-stairs-'+family+'.png';try{const home=JSON.parse(localStorage.getItem('wm-home-visible-scene-v6411')||'null');if(home?.scene===scene&&/^v41-stairs-(forest|coast|blossom)\.png$/.test(home.file))file=home.file}catch{}
 document.getElementById('magic-journey').style.backgroundImage='url("'+file+'")';
 const current=J.level(J.selected()).stage.id,index=Math.max(0,J.stages.findIndex(s=>s.id===current));
 document.querySelectorAll('.magic-stage').forEach(a=>{if(a.dataset.stage===current)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')});
 const host=document.getElementById('magic-current-angel');host.style.setProperty('--angel-left',index%2?'12%':'54%');host.style.setProperty('--angel-top',(rows[index]+1)+'%');
 const id=C.read().slots[0];if(id!==lastActor||!host.children.length){lastActor=id;host.replaceChildren();const img=el('img','magic-angel-image');img.alt=C.catalog.find(c=>c.id===id)?.name||'Current angel';C.setImage(img,id);const label=el('span','magic-current-label','Learning Here');label.append(el('small','','正在这里学习'));host.append(img,label);}
 host.setAttribute('aria-label',(C.catalog.find(c=>c.id===id)?.name||'Angel')+' · '+J.stages[index].en+' · '+J.stages[index].zh);
}
function init(){vine();const links=document.getElementById('magic-stage-links'),map=document.getElementById('magic-journey');
 J.stages.forEach((s,i)=>{const a=el('a','magic-stage');a.href='level-road.html?stage='+s.id;a.dataset.stage=s.id;a.style.setProperty('--stage-left',i%2?'57%':'4%');a.style.setProperty('--stage-top',rows[i]+'%');a.setAttribute('aria-label',s.en+' '+s.zh+' · Choose this stage');const number=el('span','magic-stage-number',String(i+1).padStart(2,'0'));number.setAttribute('aria-hidden','true');a.append(number,el('strong','',s.en),el('small','',s.zh+'阶段'));
 a.addEventListener('click',e=>{if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;J.saveSelected(s.start);sync()});links.append(a);
 const platform=el('div','magic-platform');platform.style.setProperty('--platform-left',i%2?'7%':'54%');platform.style.setProperty('--stage-top',rows[i]+'%');platform.setAttribute('aria-hidden','true');map.append(platform);
 });sync();for(const e of ['storage','pageshow','wm-companions-change'])window.addEventListener(e,sync);document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
