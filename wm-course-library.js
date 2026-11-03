const NAV_HTML="\u003c!doctype html>\u003chtml lang=\"zh-CN\">\u003chead>\u003cmeta charset=\"utf-8\">\u003cmeta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\u003ctitle>\u5355\u8bcd\u6d88\u6d88\u4e50 \u00b7 \u5e7c\u513f\u56ed\u8bfe\u7a0b\u5bfc\u822a V1 \u5b9a\u7a3f\u003c/title>\u003cstyle>\n*{box-sizing:border-box}body{margin:0;background:#fff;color:#603593;font:14px -apple-system,BlinkMacSystemFont,\"PingFang SC\",sans-serif}button{font:inherit;cursor:pointer;touch-action:manipulation}button:disabled{opacity:.55;cursor:default}.wrap{max-width:600px;margin:auto;padding:14px}.hide{display:none!important}.hero{background:linear-gradient(135deg,#efe4ff,#faf5ff);border-radius:18px;padding:18px}h2{font-size:22px;color:#56298c;margin:6px 0}h3{font-size:17px;color:#603593;margin:0}.en{display:block;color:#987bb8;font-size:11px;margin-top:4px}.sub{color:#9375b3;font-size:12px;line-height:1.6}.breadcrumb{display:flex;align-items:center;gap:5px;flex-wrap:wrap;font-size:11px;color:#9273b2;margin:12px 1px}.breadcrumb button{border:0;background:transparent;padding:4px;color:#794aaa}.card{border:1px solid #e6d8f4;background:#fff;border-radius:15px;padding:14px;margin-top:12px}.primary{display:block;width:100%;background:#ddc6fa;border:1px solid #cbaaf0;color:#5a2b90;border-radius:12px;padding:13px;font-weight:700}.yeargrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:14px}.year{min-width:0;background:#faf7ff;border:1px solid #e2d1f2;border-radius:14px;padding:16px 4px;color:#613397;text-align:center}.emoji{font-size:25px;display:block;margin-bottom:8px}.year strong{display:block;font-size:16px}.year small{display:block;font-size:11px;color:#9275b3;margin-top:5px}.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin:13px 0}.stat{border-radius:10px;background:#f8f3ff;padding:10px 4px;text-align:center}.stat b{display:block;font-size:18px;color:#65369b}.stat span{display:block;font-size:10px;color:#977db7;margin-top:4px}.semhead{display:flex;align-items:center;justify-content:space-between;margin:16px 0 9px;gap:8px}.semhead strong{font-size:13px;color:#7045a3}.semhead span{font-size:11px;color:#a080ba}.weekgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.week{min-width:0;min-height:84px;border:1px solid #e1d3f0;background:#faf8ff;border-radius:11px;padding:9px 4px;color:#673b9d;text-align:center}.week strong{display:block;font-size:13px}.weeken{display:block;font-size:10px;color:#987bb6;margin-top:3px}.weekstatus{display:block;font-size:10px;color:#9a7bb4;margin-top:8px;line-height:1.4}.week.demo{background:#e8f4ed;border-color:#b4d9c2;color:#467852}.week.demo .weekstatus{color:#4e8764}.week.exam{background:#f2e6ff;border:1px solid #bc91e4;color:#61339b}.week.exam strong{font-size:11px;white-space:nowrap;letter-spacing:-.4px}.week.exam .weekstatus{color:#895bb9}.week.active{outline:2px solid #a777d8;outline-offset:1px}.details{background:#f6efff;border-radius:12px;padding:14px;margin-top:15px}.details p{font-size:12px;color:#8867aa;line-height:1.7;margin:9px 0}.detailtag{color:#855cac;font-size:11px}.foot:empty{display:none}.foot{font-size:11px;color:#a084ba;line-height:1.6;margin:13px 2px}.pulse{display:flex;align-items:center;gap:10px;background:#f7f1ff;border-radius:11px;padding:12px;margin-top:10px}.pulse span{font-size:25px}.pulse strong{font-size:13px}@media(max-width:360px){.card{padding:10px}.weekgrid{gap:6px}.week{min-height:81px;padding:7px 2px}.year strong{font-size:14px}}\n\u003c/style>\u003c/head>\u003cbody>\u003cmain class=\"wrap\">\n\u003cdiv id=\"journey\">\u003cdiv class=\"hero\">\u003cspan class=\"sub\">\u5355\u8bcd\u6d88\u6d88\u4e50 \u00b7 Word Match\u003c/span>\u003ch2>\u8fdb\u9636\u4e4b\u65c5 \ud83d\ude80\u003c/h2>\u003cspan class=\"en\">Level Up\u003c/span>\u003c/div>\u003cdiv class=\"card\">\u003ch3>\u9009\u62e9\u5b66\u4e60\u9636\u6bb5\u003c/h3>\u003cspan class=\"en\">Choose Your Learning Stage\u003c/span>\u003cdiv class=\"pulse\">\u003cspan>\ud83c\udf31\u003c/span>\u003cdiv>\u003cstrong>\u5e7c\u513f\u56ed \u00b7 Kindergarten\u003c/strong>\u003cdiv class=\"sub\">\u5c0f\u73ed\u3001\u4e2d\u73ed\u3001\u5927\u73ed \u00b7 \u5171120\u5468\u003c/div>\u003c/div>\u003c/div>\u003cbutton class=\"primary\" id=\"enter\" style=\"margin-top:14px\">\u8fdb\u5165\u5e7c\u513f\u56ed\u8bfe\u7a0b\u3000\u2192\u003c/button>\u003cdiv class=\"pulse\" style=\"opacity:.6\">\u003cspan>\ud83d\udcda\u003c/span>\u003cdiv>\u003cstrong>\u5c0f\u5b66 \u00b7 Primary School\u003c/strong>\u003cdiv class=\"sub\">\u8bfe\u7a0b\u5c06\u6765\u63a5\u5165\u003c/div>\u003c/div>\u003c/div>\u003cdiv class=\"pulse\" style=\"opacity:.6\">\u003cspan>\ud83c\udf93\u003c/span>\u003cdiv>\u003cstrong>\u521d\u4e2d\u3001\u9ad8\u4e2d\u3001\u5927\u5b66\u3001\u7814\u7a76\u751f\u003c/strong>\u003cdiv class=\"sub\">\u5176\u4ed6\u9636\u6bb5\u4fdd\u6301\u539f\u6709\u89c4\u5212\u003c/div>\u003c/div>\u003c/div>\u003c/div>\u003c/div>\n\u003cdiv id=\"kindergarten\" class=\"hide\">\u003cdiv class=\"breadcrumb\">\u003cbutton data-go=\"journey\">\u8fdb\u9636\u4e4b\u65c5\u003c/button>\u003cspan>\u203a\u003c/span>\u003cspan>\u5e7c\u513f\u56ed\u003c/span>\u003c/div>\u003cdiv class=\"hero\">\u003cspan class=\"sub\">Kindergarten Learning Journey\u003c/span>\u003ch2>\ud83c\udf08 \u5e7c\u513f\u56ed\u003c/h2>\u003cspan class=\"en\">Choose Your Class\u003c/span>\u003cdiv class=\"sub\" style=\"margin-top:9px\">\u4e09\u4e2a\u5e74\u7ea7\uff0c\u5171120\u5468\uff0c\u5faa\u5e8f\u6e10\u8fdb\u5b66\u4e60\u82f1\u8bed\u3002\u003c/div>\u003c/div>\u003cdiv class=\"card\">\u003ch3>\u9009\u62e9\u73ed\u7ea7\u003c/h3>\u003cspan class=\"en\">Select a Class\u003c/span>\u003cdiv class=\"yeargrid\">\u003cbutton class=\"year\" data-class=\"junior\">\u003cspan class=\"emoji\">\ud83c\udf31\u003c/span>\u003cstrong>\u5c0f\u73ed\u003c/strong>\u003csmall>Junior Class\u003c/small>\u003csmall>40\u5468\u003c/small>\u003c/button>\u003cbutton class=\"year\" data-class=\"middle\">\u003cspan class=\"emoji\">\ud83c\udf3b\u003c/span>\u003cstrong>\u4e2d\u73ed\u003c/strong>\u003csmall>Middle Class\u003c/small>\u003csmall>40\u5468\u003c/small>\u003c/button>\u003cbutton class=\"year\" data-class=\"senior\">\u003cspan class=\"emoji\">\ud83c\udf1f\u003c/span>\u003cstrong>\u5927\u73ed\u003c/strong>\u003csmall>Senior Class\u003c/small>\u003csmall>40\u5468\u003c/small>\u003c/button>\u003c/div>\u003c/div>\u003c/div>\n\u003cdiv id=\"weeks\" class=\"hide\">\u003cdiv class=\"breadcrumb\">\u003cbutton data-go=\"journey\">\u8fdb\u9636\u4e4b\u65c5\u003c/button>\u003cspan>\u203a\u003c/span>\u003cbutton data-go=\"kindergarten\">\u5e7c\u513f\u56ed\u003c/button>\u003cspan>\u203a\u003c/span>\u003cspan id=\"crumb\">\u5c0f\u73ed\u003c/span>\u003c/div>\u003cdiv class=\"hero\">\u003cspan class=\"sub\">Kindergarten \u00b7 Weekly Learning\u003c/span>\u003ch2 id=\"yearname\">\ud83c\udf31 \u5c0f\u73ed \u00b7 \u8bfe\u7a0b\u5730\u56fe\u003c/h2>\u003cspan class=\"en\" id=\"yearen\">Junior Class \u00b7 40 Weeks\u003c/span>\u003c/div>\u003cdiv class=\"stats\">\u003cdiv class=\"stat\">\u003cb>40\u003c/b>\u003cspan>\u603b\u5468\u6570 \u00b7 Weeks\u003c/span>\u003c/div>\u003cdiv class=\"stat\">\u003cb>20\u003c/b>\u003cspan>\u671f\u4e2d\u8003\u8bd5\u5468\u003c/span>\u003c/div>\u003cdiv class=\"stat\">\u003cb>40\u003c/b>\u003cspan>\u671f\u672b\u8003\u8bd5\u5468\u003c/span>\u003c/div>\u003c/div>\u003cdiv class=\"card\">\u003ch3>\u9009\u62e9\u5468\u6b21\u003c/h3>\u003cspan class=\"en\">Choose Your Week\u003c/span>\u003cdiv class=\"semhead\">\u003cstrong>\u4e0a\u534a\u5b66\u5e74 \u00b7 \u7b2c1\u201420\u5468\u003c/strong>\u003cspan>Weeks 1\u201320\u003c/span>\u003c/div>\u003cdiv class=\"weekgrid\" id=\"first\">\u003c/div>\u003cdiv class=\"semhead\">\u003cstrong>\u4e0b\u534a\u5b66\u5e74 \u00b7 \u7b2c21\u201440\u5468\u003c/strong>\u003cspan>Weeks 21\u201340\u003c/span>\u003c/div>\u003cdiv class=\"weekgrid\" id=\"second\">\u003c/div>\u003cdiv class=\"details\" id=\"details\">\u003cdiv class=\"sub\">\u70b9\u51fb\u4efb\u610f\u5468\u6b21\u67e5\u770b\u8bfe\u7a0b\u4fe1\u606f\u3002\u003c/div>\u003c/div>\u003c/div>\u003c/div>\n\u003cdiv class=\"foot\">\u003c/div>\u003c/main>\n\u003cscript>(()=>{const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));const names={junior:{cn:'\u5c0f\u73ed',en:'Junior Class',emoji:'\ud83c\udf31'},middle:{cn:'\u4e2d\u73ed',en:'Middle Class',emoji:'\ud83c\udf3b'},senior:{cn:'\u5927\u73ed',en:'Senior Class',emoji:'\ud83c\udf1f'}};let grade='junior',selected=0;function show(v){['journey','kindergarten','weeks'].forEach(x=>$('#'+x).classList.toggle('hide',x!==v));if(v==='weeks')render()}$('#enter').onclick=()=>show('kindergarten');$$('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));$$('[data-class]').forEach(b=>b.onclick=()=>{grade=b.dataset.class;selected=0;show('weeks')});function detail(n){selected=n;const exam=n===20||n===40,main=$('#details');main.replaceChildren();const tag=document.createElement('div');tag.className='detailtag';tag.textContent=names[grade].cn+' \u00b7 '+(exam?'Exam':'Week '+n);main.append(tag);const title=document.createElement('h3');title.style.marginTop='6px';title.textContent=n===20?'\u671f\u4e2d\u8003\u8bd5':n===40?'\u671f\u672b\u8003\u8bd5':grade==='junior'&&n===1?'\u8ba4\u8bc6\u6570\u5b57 1\u201410':'\u7b2c '+n+' \u5468 \u00b7 \u4e3b\u9898\u5f85\u586b\u5199';main.append(title);const en=document.createElement('span');en.className='en';en.textContent=n===20?'Midterm Exam':n===40?'Final Exam':grade==='junior'&&n===1?'Numbers One to Ten':'Topic To Be Decided';main.append(en);const p=document.createElement('p');p.textContent=exam?'\u8003\u8bd5\u5468\u5df2\u9884\u7559\u3002\u5177\u4f53\u8003\u8bd5\u9898\u578b\u3001\u8303\u56f4\u548c\u5185\u5bb9\u4ee5\u540e\u518d\u786e\u5b9a\u3002':grade==='junior'&&n===1?'\u672c\u5468\u5df2\u6709\u5b8c\u6574V13\u6559\u5b66\u5185\u5bb9\uff1a\u77ed\u6587\u300110\u5bf9\u5355\u8bcd\u6d88\u6d88\u4e50\u3001\u542c\u529b\u3001\u53e3\u8bed\u3001\u9605\u8bfb\u548c\u5199\u4f5c\u3002':'\u5df2\u9884\u7559\u8fd9\u4e00\u5468\u7684\u8bfe\u7a0b\u4f4d\u7f6e\uff0c\u4e3b\u9898\u53ca\u6559\u5b66\u5185\u5bb9\u7b49\u5f85\u4f60\u786e\u5b9a\u3002';main.append(p);const b=document.createElement('button');b.className='primary';if(grade==='junior'&&n===1){b.textContent='\u6253\u5f00\u7b2c1\u5468 V13 \u8bfe\u7a0b \u00b7 Preview Entry';b.onclick=()=>{const notice=document.createElement('p');notice.textContent='\u5bfc\u822a\u5165\u53e3\u5df2\u9884\u7559\u3002\u6b63\u5f0f\u6574\u5408\u540e\uff0c\u8fd9\u91cc\u5c06\u76f4\u63a5\u8fdb\u5165\u5df2\u5b9a\u7a3fV13\u8bfe\u7a0b\uff0c\u4e0d\u4f1a\u53e6\u5f00\u7f51\u7ad9\u3002';main.append(notice);b.disabled=true}}else{b.textContent=exam?'\u8003\u8bd5\u5185\u5bb9\u5f85\u8bbe\u7f6e \u00b7 Exam Pending':'\u8bfe\u7a0b\u4e3b\u9898\u5f85\u586b\u5199 \u00b7 Coming Later';b.disabled=true}main.append(b);$$('.week').forEach(x=>x.classList.toggle('active',Number(x.dataset.week)===n))}function render(){const g=names[grade];$('#yearname').textContent=g.emoji+' '+g.cn+' \u00b7 \u8bfe\u7a0b\u5730\u56fe';$('#yearen').textContent=g.en+' \u00b7 40 Weeks';$('#crumb').textContent=g.cn;[['#first',1,20],['#second',21,40]].forEach(([sel,a,z])=>{const box=$(sel);box.replaceChildren();for(let i=a;i\u003c=z;i++){const b=document.createElement('button');b.className='week'+(i===20||i===40?' exam':'')+(grade==='junior'&&i===1?' demo':'');b.dataset.week=i;const title=document.createElement('strong');title.textContent=i===20?'\u671f\u4e2d\u8003\u8bd5':i===40?'\u671f\u672b\u8003\u8bd5':'\u7b2c'+i+'\u5468';const en=document.createElement('span');en.className='weeken';en.textContent=i===20?'Midterm':i===40?'Final':'Week '+i;const status=document.createElement('span');status.className='weekstatus';status.textContent=grade==='junior'&&i===1?'\u6570\u5b571\u201410':i===20||i===40?'\u8003\u8bd5\u5468':'\u5f85\u586b\u5199';b.append(title,en,status);b.onclick=()=>detail(i);box.append(b)}});if(selected)detail(selected);else $('#details').innerHTML='\u003cdiv class=\"sub\">\u70b9\u51fb\u4efb\u610f\u5468\u6b21\u67e5\u770b\u8bfe\u7a0b\u4fe1\u606f\u3002\u003c/div>'}})();\u003c/script>\u003c/body>\u003c/html>";
window.wordMatchOnlineTtsUrl='https://wordmatch-voice.442599013.workers.dev';
window.wordMatchSetOnlineTtsUrl=function(url){localStorage.setItem('wordmatch_online_tts_url',url);window.wordMatchOnlineTtsUrl=url;};
const LESSON_HTML="<!doctype html>\n<html lang=\"zh-CN\"><head>\n<meta charset=\"UTF-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"/>\n<meta name=\"theme-color\" content=\"#f3ecff\"/><title>单词消消乐 · 幼儿园课程</title>\n<style>\n:root{font-family:-apple-system,BlinkMacSystemFont,\"PingFang SC\",system-ui,sans-serif;color:#623594;background:#fdfbff}*{box-sizing:border-box}body{margin:0;padding:14px 12px 45px}button,select{font:inherit}button{cursor:pointer;touch-action:manipulation}button:disabled{opacity:.45;cursor:default}.app{max-width:660px;margin:auto}.hero{border-radius:16px;background:#f1e8ff;padding:17px}.brand{font-weight:800;font-size:20px;white-space:nowrap;letter-spacing:.2px}.subtitle,.muted{font-size:12px;color:#9375b0;line-height:1.7}.en{font-size:11px;color:#9579b6}.hero h1{font-size:21px;margin:13px 0 2px}.selects{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:13px 0}.selects label{font-size:12px;color:#8056a3;display:flex;flex-direction:column;gap:5px}select{width:100%;background:#fff;border:1px solid #d9c4ec;border-radius:10px;color:#633894;padding:11px}.panel{border:1px solid #e3d5f1;background:white;border-radius:15px;padding:14px;margin-top:12px}.nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.nav button{border:1px solid #e4d6f4;background:#faf7ff;border-radius:11px;color:#623594;padding:10px 2px;font-size:12px;font-weight:650}.nav button.active{background:#ddc5f8;border-color:#aa78d8}.nav small{display:block;color:#9375b0;font-size:10px;font-weight:400;margin-top:3px}.hidden{display:none!important}h2{font-size:17px;margin:1px 0 4px}h3{font-size:15px;margin:0}.primary{background:#dbc2f8;border:1px solid #c7a7ea;color:#582a8d;border-radius:11px;font-weight:700;padding:12px;width:100%;margin-top:12px}.outline{background:#fff;border:1px solid #d9c5eb;color:#7247a2;border-radius:9px;padding:10px;font-size:12px}.story{background:#f7f1ff;border-radius:12px;padding:14px;line-height:1.92;color:#59318e;font-size:15px;margin:13px 0}.translation{color:#8665a7;font-size:13px;line-height:1.86}.vocab{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin-top:13px}.vocab button{background:#fbf7ff;border:1px solid #decdf1;border-radius:10px;color:#603597;padding:11px 1px;min-width:0}.vocab b,.vocab small{display:block}.vocab b{font-size:13px}.vocab small{font-size:11px;color:#987bb6;margin-top:4px}.pairboard{display:grid;grid-template-columns:1fr 1fr;gap:10px}.paircolumn{display:flex;flex-direction:column;gap:6px}.paircolumn>span{text-align:center;font-size:12px;color:#9376b3}.tile{height:43px;background:#fbf8ff;border:1px solid #e0cdef;border-radius:9px;color:#633497;font-weight:700}.tile.selected{background:#d8bdf8;border-color:#9864d1}.tile.cleared{visibility:hidden}.progress{background:#e8daf4;height:8px;border-radius:20px;overflow:hidden;margin:13px 0}.progress div{background:#a375d7;height:100%;transition:width .15s}.between{display:flex;justify-content:space-between;align-items:center}.skills{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}.skills button{background:#faf6ff;border:1px solid #e2d4f1;border-radius:10px;padding:12px;text-align:left;color:#623596;font-size:13px}.skills button.active{background:#e4cef9;border-color:#a772d5}.skills small{display:block;font-size:11px;color:#987bb7;margin-top:4px}.work{background:#f7f1ff;border-radius:12px;padding:13px}.step{background:#eadbfa;padding:10px;color:#7144a3;border-radius:9px;font-size:12px;font-weight:650;margin:12px 0}.passage{background:#fff;border:1px solid #e3d4f2;border-radius:10px;line-height:1.95;padding:13px;font-size:15px;margin:10px 0}.question{background:white;border:1px solid #e5d8f2;border-radius:10px;padding:11px;margin-top:10px}.qtitle{display:flex;flex-wrap:wrap;align-items:baseline;gap:5px;margin:6px 0 10px;line-height:1.5}.qtitle strong{font-size:13px}.qtitle small{color:#9677b5;font-size:11px}.choices{display:grid;grid-template-columns:1fr 1fr;gap:7px}.choices button{min-height:40px;border:1px solid #e0d1ee;background:#faf8ff;border-radius:8px;color:#613497;font-size:12px;padding:8px 3px}.choices .eng{margin-left:5px;color:#9679b3;font-size:11px}.choices button.correct{background:#e6f5e9;border-color:#a3cdaa}.choices button.incorrect{background:#fce9e9;border-color:#dfa5aa}.feedback{background:#e7f5ec;color:#407951;border-radius:9px;padding:10px;margin-top:10px;line-height:1.7;font-size:12px}.feedback.bad{background:#fcecee;color:#a04c5c}.score{background:#eadcf9;border-radius:11px;padding:13px;margin-top:12px}.score b{font-size:21px}.gcard{background:white;border:1px solid #e5d7f1;border-radius:11px;padding:12px;margin-top:10px}.gcard .ex{color:#76509a;font-size:12px;line-height:1.7;margin:9px 0}.gbuttons{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-top:10px}.gbuttons button{background:#f7f0ff;color:#70429f;border:1px solid #decbef;border-radius:9px;padding:9px 2px;font-size:11px;min-height:53px}.gbuttons b{display:block;font-size:17px;margin-bottom:4px}.gbuttons img{display:block;width:21px;height:21px;margin:0 auto 6px}.status{font-size:11px;color:#967ab2;line-height:1.6;margin-top:9px}audio{width:100%;height:37px;margin-top:8px}.letters{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:12px 0}.letters button{width:44px;height:47px;border:1px solid #c4a9e1;background:#fff;border-radius:10px;color:#623497;font-size:20px;font-weight:700}.answer{background:#fff;border:1px dashed #aa7fd5;border-radius:10px;min-height:62px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px;padding:9px;margin-top:12px}.answer button{background:#e5d4f9;border:1px solid #c8a7e7;border-radius:7px;padding:7px 10px;color:#623497;font-weight:700}.row{display:flex;gap:8px;align-items:center;margin-top:10px}.row>*{flex:1}.placeholder{text-align:center;padding:38px 15px;background:#f7f2ff;border-radius:12px}.placeholder h2{margin-bottom:10px}.back{border:0;background:none;color:#7952a6;font-size:12px;padding:0;margin-bottom:12px}.foot{font-size:11px;color:#987cb6;margin-top:14px;line-height:1.7}.wm-hero-top{display:flex;align-items:center;gap:9px}.wm-header-back{border:1px solid #dfcdf4;background:#faf6ff;border-radius:9px;width:32px;height:34px;flex-shrink:0;color:#633497;font-size:27px;line-height:25px}.wm-dictionary-word{cursor:pointer;border:0;background:transparent;color:inherit;padding:0 1px;font:inherit;line-height:inherit}.wm-dictionary-word:focus,.wm-dictionary-word:hover{background:#e9d8fb;border-radius:4px}.wm-dictionary{background:#eadbfa;border-radius:10px;padding:10px 12px;font-size:13px;margin:9px 0}.wm-mode{display:flex;gap:8px;margin:10px 0}.wm-mode button{flex:1;border:1px solid #d6c0ec;background:white;border-radius:10px;color:#663a93;padding:10px}.wm-mode button.active{background:#ddc5f8;border-color:#a97dd3}.wm-copy{background:#fff;border:1px dashed #b48ddc;padding:11px;border-radius:9px;text-align:center;color:#613594;font-size:20px;font-weight:700;margin:8px 0}.learn-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:12px 0}.learn-head-left{display:flex;align-items:center;gap:8px}.iconbtn{border:1px solid #d7c0ee;background:#faf7ff;color:#623497;border-radius:10px;padding:8px 10px;min-width:40px;min-height:40px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}.iconbtn.small{min-width:34px;min-height:34px;padding:6px 8px;font-size:14px}.story-lines{display:flex;flex-direction:column;gap:10px;margin-top:4px}.story-line{display:flex;gap:10px;align-items:flex-start;background:#f7f1ff;border-radius:12px;padding:12px}.story-controls{flex-shrink:0}.story-body{min-width:0;flex:1}.line-en{font-size:15px;line-height:1.85;color:#59318e}.line-cn{font-size:13px;line-height:1.8;color:#8665a7;margin-top:6px}.line-cn.hidden{display:none}.learn-status{font-size:12px;color:#9375b0;line-height:1.7;text-align:right;flex:1}@media(max-width:350px){body{padding:10px 7px 35px}.panel{padding:10px}.vocab b{font-size:11px}.letters button{width:38px;height:43px}.gbuttons button{font-size:10px}}\n\n.wm-match-panel{overflow:hidden;padding:12px;background:#f1e7ff}.wm-game-head{display:flex;gap:8px;align-items:center;justify-content:space-between;margin-bottom:9px}.wm-game-head h2{margin:0}.wm-game-level{background:linear-gradient(135deg,#e9bbff,#a16bd6);border-radius:20px;color:#fff;font-weight:800;padding:8px 10px;font-size:11px;white-space:nowrap}.wm-game-scene{position:relative;border-radius:18px;padding:13px 9px 15px;background:linear-gradient(180deg,#1286c5 0%,#32c8e7 49%,#9debc0 100%);border:3px solid #8058c9;box-shadow:inset 0 5px 15px #ffffff44;overflow:hidden}.wm-game-scene::before,.wm-game-scene::after{content:'🌿🌳🌼🌿';position:absolute;font-size:46px;opacity:.75;pointer-events:none;white-space:nowrap}.wm-game-scene::before{top:-24px;left:-20px}.wm-game-scene::after{bottom:-28px;right:-8px}.wm-cloud{position:absolute;width:100px;height:35px;border-radius:50%;background:#ffffff44;filter:blur(3px)}.wm-cloud-a{top:90px;right:0}.wm-cloud-b{bottom:125px;left:-40px}.wm-game-dashboard{display:flex;gap:7px;position:relative;z-index:1;margin-bottom:12px}.wm-game-progress,.wm-game-score{background:linear-gradient(125deg,#9d58cb,#653fa0);border:2px solid #e9c7ff;border-radius:14px;padding:8px;color:white;text-shadow:0 1px 2px #4f217f;box-shadow:0 4px 0 #62428955}.wm-game-progress{flex:1;min-width:0;font-size:13px}.wm-game-progress .progress{height:9px;margin:6px 0 0;background:#583387}.wm-game-progress .progress div{background:linear-gradient(90deg,#65e925,#b6fa3f)}.wm-game-score{font-size:11px;display:flex;flex-direction:column;align-items:center;justify-content:center}.wm-game-score b{font-size:17px}.wm-game-layout{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.8fr) minmax(105px,1fr);gap:7px;align-items:start}.wm-board-wrap{min-width:0}.wm-letter-board{--wm-cols:9;display:grid;grid-template-columns:repeat(var(--wm-cols),minmax(0,1fr));gap:2px;background:#372761;border:5px solid #6e3eaa;border-radius:16px;padding:5px;box-shadow:0 8px 14px #12346666,inset 0 2px 7px #0008;aspect-ratio:1;touch-action:pan-y}.wm-letter{appearance:none;min-width:0;aspect-ratio:1;border:1px solid #ffffff77;border-bottom:3px solid #0003;box-shadow:inset 0 3px 3px #fff8,0 2px 3px #20114566;border-radius:24%;font-weight:900;font-size:clamp(9px,2.7vw,20px);line-height:1;color:white;text-shadow:0 2px 2px #3a2368aa;padding:0;display:grid;place-items:center;transition:transform .18s,opacity .2s}.wm-letter:active{transform:scale(.9)}.wm-letter.selected,.wm-letter.wm-hint{border:3px solid #fffecd;box-shadow:0 0 15px #fff23c,inset 0 2px 4px #fff9}.wm-blue{background:linear-gradient(140deg,#74ddff,#0e83e4 72%)}.wm-green{background:linear-gradient(140deg,#a4ff58,#28af2b 72%)}.wm-pink{background:linear-gradient(140deg,#ffb1e1,#e63490 72%)}.wm-orange{background:linear-gradient(140deg,#ffd17c,#f17811 72%)}.wm-yellow{background:linear-gradient(140deg,#fff48a,#e9a000 72%)}.wm-purple{background:linear-gradient(140deg,#e5adff,#994ed8 72%)}.wm-game-hint{background:#fffaf1f5;color:#68439c;border-radius:9px;margin-top:8px;padding:8px;font-size:11px;line-height:1.4}.wm-game-tasks{background:linear-gradient(180deg,#f8e7ff,#fff9fc);border:3px solid #b785e9;box-shadow:0 4px 0 #593fa055;border-radius:15px;padding:6px;min-width:0}.wm-task-title{font-size:12px;font-weight:800;color:#6a329d;text-align:center;padding:5px 1px}.wm-task-title small{display:block;font-size:10px;color:#9b79b8}.wm-mission-list{display:flex;flex-direction:column;gap:3px}.wm-mission{display:flex;align-items:center;gap:3px;background:#fff;border:1px solid #eedafa;border-radius:8px;padding:5px 3px;min-width:0;overflow:hidden}.wm-mission-mark{color:#b9a1ce;font-size:14px}.wm-mission.done .wm-mission-mark{color:#48b638}.wm-mission b{font-size:clamp(9px,2.2vw,12px);color:#683aa1;min-width:0;overflow-wrap:anywhere}.wm-mission small{font-size:9px;color:#8d6caa;min-width:0;overflow-wrap:anywhere}.wm-mission.done{background:#e8ffec}.wm-game-result{position:relative;z-index:1;margin:12px 2px 0}.wm-success{border-radius:16px;background:linear-gradient(100deg,#fffce0,#fff,#ffebad);border:3px solid #ffd659;text-align:center;color:#71369b;padding:10px;box-shadow:0 5px 12px #8e4bb755}.wm-success strong{font-size:17px;color:#e745ad}.wm-success-word{font-size:16px;font-weight:800;margin-top:5px}.wm-success-phrase{font-size:13px;margin-top:3px}.wm-game-won{padding:10px;background:#d8f9bf;border-radius:10px;color:#366327;margin-top:10px;font-weight:700}.wm-game-bottom{position:relative;z-index:1;display:flex;justify-content:space-around;gap:6px;margin-top:12px}.wm-game-tool{flex:1;min-width:0;background:linear-gradient(135deg,#fff0ff,#c69cef);border:2px solid #fff;border-radius:14px;box-shadow:0 3px 0 #7a4ca1;color:#643c99;padding:8px 2px;font-size:11px;font-weight:800}@media(max-width:420px){.wm-game-layout{grid-template-columns:minmax(0,1.8fr) minmax(105px,1fr);gap:5px}.wm-letter-board{padding:3px;gap:1px;border-width:3px;border-radius:10px}.wm-mission{padding:3px 2px;gap:2px}.wm-mission small{font-size:8px}.wm-task-title{font-size:11px}.wm-game-scene{padding:9px 5px}}\n\n/* V1.6 visual adjustments: scoped exclusively to the match screen */\n#page-match.wm-match-panel{padding:0;border:0;background:transparent;overflow:visible}\n#page-match .wm-game-head{background:linear-gradient(120deg,#f5e9ff,#d6adfb);border:2px solid #cca8ee;border-radius:17px;padding:10px 12px;margin-bottom:8px}\n#page-match .wm-game-scene{background-image:linear-gradient(180deg,#2198d8a3,#5bdfc888);background-size:cover;background-position:center;border:4px solid #b68ce9;border-radius:24px;padding:13px 10px 16px;box-shadow:inset 0 0 20px #fff6,0 8px 16px #49287940;overflow:hidden}\n#page-match .wm-game-scene:before,#page-match .wm-game-scene:after{content:'';display:none}\n#page-match .wm-game-layout{display:flex;flex-direction:column;gap:10px}\n#page-match .wm-board-wrap{width:100%;max-width:550px;margin:auto;position:relative}\n#page-match .wm-letter-board{width:100%;border:7px solid #7643bd;background:linear-gradient(145deg,#30184f,#433071);border-radius:23px;padding:8px;gap:4px;box-shadow:0 9px 0 #4b2685,0 15px 22px #2b214e80,inset 0 0 16px #130b2f}\n#page-match .wm-letter{border-radius:26%;font-size:clamp(12px,4.7vw,25px);border:2px solid #ffffff8c;border-bottom:4px solid #0003;box-shadow:inset 0 5px 5px #fff8,0 4px 2px #27112c77;text-shadow:0 2px 2px #3a2368c8}\n#page-match .wm-game-tasks{width:100%;background:linear-gradient(#a85ee1 0 47px,#e8caf8 47px 100%);border:4px solid #e5c6ff;border-radius:22px;padding:7px;box-shadow:0 6px 0 #6a37a75e}\n#page-match .wm-task-title{color:white;font-size:17px;text-shadow:0 2px 2px #693094;min-height:46px}\n#page-match .wm-task-title small{font-size:10px;color:#fff}\n#page-match .wm-mission-list{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:5px}\n#page-match .wm-mission{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:4px;min-height:60px;border-radius:12px;padding:5px 2px;overflow:hidden;border:1px solid #fff;box-shadow:0 2px 3px #7f53ab40}\n#page-match .wm-mission-mark{color:#a87ec7;font-size:19px;line-height:1}\n#page-match .wm-mission.done .wm-mission-mark{color:#34bb26}\n#page-match .wm-mission b{font-size:clamp(9px,2.7vw,14px);overflow-wrap:anywhere}\n#page-match .wm-mission small{font-size:clamp(8px,2.3vw,11px);overflow-wrap:anywhere}\n#page-match .wm-game-hint{background:#fff5e6e8;border:2px solid #e9b8ff;color:#663d91;border-radius:15px;font-size:12px;text-align:center}\n#page-match .wm-game-result{margin:12px 0}\n#page-match .wm-success{border:4px solid #ffe17a;border-radius:20px;background:linear-gradient(110deg,#fffbd8,#fff,#fff4ca);box-shadow:0 5px 15px #ba7c3075}\n#page-match .wm-success strong{font-size:18px}\n#page-match .wm-success-word{font-size:17px}\n#page-match .wm-game-progress{border-radius:18px;padding:11px;font-size:15px;box-shadow:0 5px 0 #6c379e}\n#page-match .wm-game-score{font-size:13px;border-radius:18px;min-width:90px}\n#page-match .wm-game-score b{font-size:19px}\n#page-match .wm-game-bottom{gap:8px;margin-top:14px}\n#page-match .wm-game-tool{border-radius:24px;padding:13px 5px;font-size:12px}\n#page-match .wm-game-mascots{display:flex;justify-content:space-between;align-items:flex-end;gap:9px;margin:8px 0 -5px;pointer-events:none;position:relative;z-index:2}\n#page-match .wm-game-mascots .wm-mascot{width:25%;max-width:105px;height:94px;object-fit:cover;border-radius:44% 44% 0 0;mask-image:linear-gradient(#000 45%,transparent);-webkit-mask-image:linear-gradient(#000 45%,transparent)}\n#page-match .wm-game-mascots .wm-mascot-label{background:#ffef9c;color:#8b4398;border:2px solid #fff8d4;border-radius:14px;padding:8px;text-align:center;font-weight:800;font-size:13px;box-shadow:0 3px 6px #7d34804f}\n#page-match .wm-combo{color:#fff;white-space:nowrap;font-weight:800;font-size:12px;text-shadow:0 2px 3px #63388f}\n@media(max-width:420px){#page-match .wm-letter-board{border-width:5px;padding:5px;gap:2px}#page-match .wm-game-scene{padding:8px 6px}#page-match .wm-game-tasks{padding:5px}#page-match .wm-mission-list{gap:3px}#page-match .wm-mission{min-height:59px}#page-match .wm-mission b{font-size:10px}#page-match .wm-mission small{font-size:9px}#page-match .wm-game-tool{font-size:10px;padding:10px 2px}}\n</style><style>.work,.gcard,.question,.passage,.vocab,.choices{max-width:100%;min-width:0;overflow-wrap:anywhere}.gcard strong,.passage,.qtitle{overflow-wrap:anywhere;word-break:break-word}.vocab button,.choices button{min-width:0}.gbuttons button{min-width:0}</style></head><body>\n<main class=\"app\">\n<button class=\"back\" onclick=\"if(history.length>1)history.back();else location.href='index.html'\">‹ 返回首页 / Back</button>\n<div class=\"hero\"><div class=\"wm-hero-top\"><button id=\"wmReturnHome\" class=\"wm-header-back\" type=\"button\" aria-label=\"返回主页\">‹</button><div><div class=\"brand\">单词消消乐</div><div class=\"subtitle\">Word Match · Kindergarten</div></div></div><h1 id=\"lessonTitle\">幼儿园课程</h1><div id=\"lessonEn\" class=\"subtitle\">Kindergarten Curriculum</div></div>\n<div class=\"selects\"><label>选择班级 / Class<select id=\"gradeSelect\"></select></label><label>选择周次 / Week<select id=\"weekSelect\"></select></label></div>\n<div id=\"empty\" class=\"panel hidden\"><div class=\"placeholder\"><h2 id=\"emptyTitle\">本周主题待确定</h2><div class=\"muted\" id=\"emptyDesc\">课程框架已预留，主题及填词内容将在后续确定。</div></div></div>\n<div id=\"lesson\" class=\"hidden\"><div class=\"nav\" id=\"nav\"><button data-page=\"learn\" class=\"active\">① 主题教学<small>Learn</small></button><button data-page=\"match\">② 配对消除<small>Match</small></button><button data-page=\"practice\">③ 巩固练习<small>Practice</small></button></div>\n<section class=\"panel\" id=\"page-learn\"><h2>第一步 · 主题教学</h2><div class=\"subtitle\">Step 1 · Story and Vocabulary</div><div class=\"learn-head\"><div class=\"learn-head-left\"><button class=\"iconbtn\" id=\"storyAudio\" type=\"button\" aria-label=\"朗读完整英文短文\">▶</button><button class=\"iconbtn\" id=\"toggleTranslation\" type=\"button\" aria-label=\"显示或隐藏中文\">👁</button></div><div class=\"learn-status\" id=\"storyStatus\">点击播放整篇英文；点眼睛显示或隐藏中文。</div></div><div class=\"story-lines\" id=\"story\"></div><div id=\"translation\" class=\"hidden\"></div><div style=\"margin-top:19px\"><h3>本周词汇 <span class=\"en\">Weekly Vocabulary</span></h3></div><div class=\"vocab\" id=\"vocab\"></div><p class=\"muted\">点击卡片，依次听英文和中文。</p><button class=\"primary\" id=\"goMatch\">开始单词消消乐 · Start Matching</button></section>\n<section class=\"panel wm-match-panel hidden\" id=\"page-match\"><div class=\"wm-game-head\"><div class=\"subtitle\">单词消消乐</div><span id=\"wmGameClass\" class=\"wm-game-level\">幼儿园小班</span></div><div class=\"wm-game-scene\"><div class=\"wm-cloud wm-cloud-a\"></div><div class=\"wm-cloud wm-cloud-b\"></div><div class=\"wm-game-dashboard\"><div class=\"wm-game-progress\"><b>完成任务：<span id=\"matchCount\">0 / 10</span></b><div class=\"progress\"><div id=\"matchBar\" style=\"width:0%\"></div></div></div><div class=\"wm-game-score\">⭐ 分数 <b id=\"wmMatchScore\">0</b><div class=\"wm-combo\" id=\"wmComboCount\">🔥 连消 0</div></div></div><div class=\"wm-game-layout\"><div class=\"wm-board-wrap\"><div class=\"wm-letter-board\" id=\"pairboard\" aria-label=\"字母消消乐棋盘\"></div><div id=\"wmGameHint\" class=\"wm-game-hint\">至少2个字母组成有效英文单词即可消除；完成10个指定任务词通关。</div></div><div class=\"wm-game-tasks\"><div class=\"wm-task-title\">本周任务 · 10个单词 <small>Weekly Words</small></div><div id=\"wmMissionList\" class=\"wm-mission-list\"></div></div></div><div class=\"wm-game-mascots\"><div class=\"wm-mascot-label\">✨ 消除单词，边玩边学！ ✨</div></div><div id=\"matchFeedback\" class=\"wm-game-result\" aria-live=\"polite\"></div><div class=\"wm-game-bottom\"><button class=\"wm-game-tool\" id=\"wmHintBtn\" type=\"button\">💡 提示</button><button class=\"wm-game-tool\" id=\"wmRestartBtn\" type=\"button\">↻ 重新开始</button></div></div><button class=\"primary\" id=\"goPractice\" disabled>进入听说读写 · Weekly Practice</button></section>\n<section class=\"panel hidden\" id=\"page-practice\"><h2>第三步 · 听说读写</h2><div class=\"subtitle\">Step 3 · Weekly Practice</div><div class=\"skills\" id=\"skills\"><button data-skill=\"listening\" class=\"active\">🎧 听力<small>Listening</small></button><button data-skill=\"speaking\">🎤 口语跟读<small>Speaking</small></button><button data-skill=\"reading\">📖 阅读理解<small>Reading</small></button><button data-skill=\"writing\">✏️ 写作<small>Writing</small></button></div><div id=\"work\" class=\"work\"></div><div id=\"results\"></div></section></div>\n\n</main><script>/* 单词消消乐 · 幼儿园课程内容库\n * 框架固定：3个年级 × 40周；第20周和第40周预留考试。\n * 将来填新主题只需给 lessons 加入 'junior-2'、'middle-1' 等课程数据。\n * 未确定的周次不生成示例题目，避免把临时内容当正式课程。\n */\nwindow.WORD_MATCH_KG_DATA = {\n  version: 'V13-framework-1.0',\n  grades: [\n    {id:'junior',zh:'小班',en:'Junior Class'},\n    {id:'middle',zh:'中班',en:'Middle Class'},\n    {id:'senior',zh:'大班',en:'Senior Class'}\n  ],\n  weeksPerGrade: 40,\n  midtermWeek: 20,\n  finalWeek: 40,\n  lessons: {\n    'junior-1': {\n      titleZh:'认识数字 1—10',titleEn:'Numbers One to Ten',\n      story:'Hello! I am Goldy. I have one bag and two pens. I see three cats, four dogs, and five birds. Look! Six, seven, eight, nine, ten stars shine in the sky. I can count from one to ten. Can you count with me?',\n      translation:'你好！我是Goldy。我有一个包和两支笔。我看见三只猫、四只狗和五只鸟。看！天空中闪耀着六、七、八、九、十颗星星。我会从一数到十。你能和我一起数吗？',\n      vocabulary:[['one','一'],['two','二'],['three','三'],['four','四'],['five','五'],['six','六'],['seven','七'],['eight','八'],['nine','九'],['ten','十']],\n      grammar:[\n        {en:'I have two pens.',cn:'我有两支笔。',ex:'I have 表示“我有”，后面可以接数字和物品。',spoken:[['I have','en-US'],['表示“我有”，后面可以接数字和物品。','zh-CN']]},\n        {en:'I see five birds.',cn:'我看见五只鸟。',ex:'I see 表示“我看见”，可以说出自己看到的数量。',spoken:[['I see','en-US'],['表示“我看见”，可以说出自己看到的数量。','zh-CN']]},\n        {en:'I can count to ten.',cn:'我能数到十。',ex:'I can 表示“我能够”，后面接动作 count。',spoken:[['I can','en-US'],['表示“我能够”，后面接动作','zh-CN'],['count','en-US']]},\n        {en:'one bag → two pens',spokenEn:'one bag, two pens',cn:'一个包 → 两支笔。',ex:'一个物品用单数；两个或更多时，普通可数名词通常加 -s，例如 bird 变成 birds。',spoken:[['一个物品用单数；两个或更多时，普通可数名词通常加','zh-CN'],['s','en-US'],['例如','zh-CN'],['bird','en-US'],['变成','zh-CN'],['birds','en-US']]}\n      ],\n      questions:[\n        {cn:'小女孩叫什么名字？',en:'What is her name?',options:[['Goldy','Goldy'],['老师','Teacher'],['朋友','Friend'],['妈妈','Mum']],correct:0,evidence:'Hello! I am Goldy.'},\n        {cn:'Goldy有几个包？',en:'How many bags?',options:[['两个','Two'],['一个','One'],['三个','Three'],['四个','Four']],correct:1,evidence:'I have one bag.'},\n        {cn:'Goldy有几支笔？',en:'How many pens?',options:[['三支','Three'],['五支','Five'],['两支','Two'],['一支','One']],correct:2,evidence:'I have two pens.'},\n        {cn:'Goldy看见几只猫？',en:'How many cats?',options:[['四只','Four'],['三只','Three'],['五只','Five'],['六只','Six']],correct:1,evidence:'I see three cats.'},\n        {cn:'Goldy看见几只鸟？',en:'How many birds?',options:[['四只','Four'],['六只','Six'],['三只','Three'],['五只','Five']],correct:3,evidence:'I see five birds.'}\n      ],\n      writing:[\n        {cn:'一',word:'one',shuffled:['e','n','o']},\n        {cn:'二',word:'two',shuffled:['w','o','t']},\n        {cn:'三',word:'three',shuffled:['e','r','t','e','h']},\n        {cn:'四',word:'four',shuffled:['u','r','f','o']},\n        {cn:'五',word:'five',shuffled:['v','e','f','i']}\n      ]\n    }\n  }\n};\n</script><script>\n/* Approved curriculum revision: kindergarten starts with 2-letter words. */\n(function(){\nconst WEEKS={\"junior-1\": [[\"am\", \"是；上午\"], [\"an\", \"一个\"], [\"as\", \"像；作为\"], [\"at\", \"在\"], [\"be\", \"是\"], [\"by\", \"在旁边\"], [\"do\", \"做\"], [\"go\", \"去\"], [\"he\", \"他\"], [\"hi\", \"嗨\"]], \"junior-2\": [[\"if\", \"如果\"], [\"in\", \"在里面\"], [\"is\", \"是\"], [\"it\", \"它\"], [\"me\", \"我\"], [\"my\", \"我的\"], [\"no\", \"不\"], [\"of\", \"……的\"], [\"on\", \"在上面\"], [\"or\", \"或者\"]], \"junior-3\": [[\"so\", \"所以\"], [\"to\", \"到；向\"], [\"up\", \"向上\"], [\"us\", \"我们（宾格）\"], [\"we\", \"我们\"], [\"cat\", \"猫\"], [\"dog\", \"狗\"], [\"sun\", \"太阳\"], [\"pen\", \"钢笔\"], [\"bag\", \"包\"]], \"junior-4\": [[\"mum\", \"妈妈\"], [\"dad\", \"爸爸\"], [\"boy\", \"男孩\"], [\"man\", \"男人\"], [\"son\", \"儿子\"], [\"kid\", \"小孩\"], [\"her\", \"她的\"], [\"him\", \"他（宾格）\"], [\"she\", \"她\"], [\"you\", \"你\"]]};\nconst phrases={am:['I am here.','我在这里。'],an:['an apple','一个苹果'],as:['as big as','和……一样大'],at:['at home','在家'],be:['be happy','开心一点'],by:['by me','在我旁边'],do:['do it','做这件事'],go:['go home','回家'],he:['he is here','他在这里'],hi:['say hi','打招呼'],if:['if you can','如果你可以'],in:['in a bag','在包里'],is:['it is good','它很好'],it:['I like it','我喜欢它'],me:['help me','帮助我'],my:['my bag','我的包'],no:['no thanks','不用了，谢谢'],of:['a cup of water','一杯水'],on:['on the table','在桌上'],or:['yes or no','是或不是'],so:['so good','真好'],to:['go to school','去学校'],up:['stand up','站起来'],us:['help us','帮助我们'],we:['we can go','我们可以走'],cat:['a cute cat','一只可爱的猫'],dog:['a little dog','一只小狗'],sun:['the sun','太阳'],pen:['my pen','我的笔'],bag:['my bag','我的包']};\nwindow.WM_EARLY_PHRASES=phrases;\nObject.entries(WEEKS).forEach(([key,words],n)=>{\nconst old=window.WORD_MATCH_KG_DATA.lessons[key];if(!old)return;\nconst storyEn=n<2?'I am here. He is here. We go. It is good. I like it.':'We go to see the sun. I see a cat and a dog. My bag has a pen.';\nconst storyZh=n<2?'我在这里。他在这里。我们出发。它很好。我喜欢它。':'我们去看太阳。我看见一只猫和一只狗。我的包里有一支笔。';\nold.titleZh=n<2?'两个字母入门 · 第'+(n+1)+'周':'循序拼词 · 第'+(n+1)+'周';\nold.titleEn=n<2?'Two-Letter Words · Week '+(n+1):'First Words · Week '+(n+1);\nold.story=storyEn;old.translation=storyZh;old.vocabulary=words;\nold.grammar=[{en:'I am here.',cn:'我在这里。',ex:'I am 是最基础的自我表达。',spoken:[['I am','en-US'],['我在这里','zh-CN']]},{en:'We go.',cn:'我们出发。',ex:'We 是“我们”，go 是“去”。',spoken:[['We go','en-US'],['我们出发','zh-CN']]}];\nold.questions=[{en:'What do we do?',options:[['We go.','我们出发'],['We sleep.','我们睡觉'],['We run.','我们跑'],['We eat.','我们吃饭']],correct:0,evidence:'We go.'}];\nold.writing=words.slice(0,5).map(([word,cn])=>({word,cn,shuffled:word.split('').reverse()}));\n});\n})();\n</script><script>\n(()=>{'use strict';\nconst data=window.WORD_MATCH_KG_DATA,$=s=>document.querySelector(s),$=s=>[...document.querySelectorAll(s)];\nif(!data){$('#empty').classList.remove('hidden');$('#emptyTitle').textContent='无法加载课程内容';$('#emptyDesc').textContent='请确保 kindergarten-content.js 与本页面上传到同一个文件夹。';return}\nlet lesson=null,page='learn',skill='listening',picked=null,cleared=new Set(),run=0,recorder=null,stream=null,requesting=false,recordings=new Map();\nlet answers={listening:[],reading:[]},completed={listening:false,reading:false},listeningPlayed=false,writingIndex=0,writingPicks=[],writingChecked=false,writingResults=[];let comprehensionIndex={listening:0,reading:0},speakingIndex=0,writingMode=\"practice\";\nconst E=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e};\nfunction stopSpeech(){run++;try{window.wordMatchAudio?.pause();window.wordMatchAudio=null;window.speechSynthesis?.cancel()}catch(e){}}\nfunction notify(msg){try{parent.postMessage(Object.assign({source:'wordmatch-lesson'},msg),'*')}catch(e){}}\nfunction voicePrefs(){try{return parent.WordMatchVoiceSettings?.()||{accent:'en-US',sound:true,voiceChoice:''}}catch(e){return {accent:'en-US',sound:true,voiceChoice:''}}}\n// 预先加载课程配音索引，播放时不再等待网络读取索引。\nconst azureAudioBase = new URL('audio/azure/', document.baseURI).href;\nlet azureManifest = null;\nlet azureManifestError = '';\nconst azureManifestReady = fetch(new URL('manifest.json',azureAudioBase),{cache:'no-cache'})\n .then(async r=>{if(!r.ok)throw new Error('音频索引 HTTP '+r.status);azureManifest=await r.json();return azureManifest})\n .catch(e=>{azureManifestError=e.message;return null});\nasync function speak(parts,status,onComplete){\n stopSpeech();const id=run,prefs=voicePrefs();\n if(prefs.sound===false){if(status)status.textContent='设置中已关闭声音';return}\n const origin=parent.wordMatchOnlineTtsUrl||'';\n if(!origin){\n  const given=prompt('首次使用 Azure 在线语音：请粘贴你部署的 Cloudflare Worker 网址（https://...workers.dev）。只需要设置一次。');\n  if(!given)return;\n  const value=given.trim().replace(/\\/+$/,'');\n  if(!/^https:\\/\\/[a-zA-Z0-9.-]+\\.workers\\.dev$/.test(value)){alert('请输入正确的 https://...workers.dev 地址');return}\n  parent.wordMatchSetOnlineTtsUrl?.(value);\n }\n const endpoint=parent.wordMatchOnlineTtsUrl;\n for(const [text,lang] of parts){\n  if(id!==run)return;\n  if(!text||!text.trim())continue;\n  if(lang.startsWith('en')||lang.startsWith('zh')){\n   const locale=lang.startsWith('zh')?'zh-CN':(prefs.accent==='en-GB'?'en-GB':'en-US');\n   if(status)status.textContent='正在获取 Azure AI '+(locale==='en-GB'?'英式':'美式')+'发音…';\n   let blob;\n   try{\n    const response=await fetch(endpoint+'/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,locale,voice:lang.startsWith('zh')?prefs.azureChineseVoice:prefs.azureVoice})});\n    if(!response.ok){const error=await response.json().catch(()=>({}));throw new Error(error.error||'HTTP '+response.status)}\n    blob=await response.blob();\n    if(!blob.type.includes('audio'))throw new Error('服务器未返回音频');\n   }catch(e){if(status)status.textContent='Azure 在线朗读失败：'+e.message;else alert('Azure 在线朗读失败：'+e.message);return}\n   if(id!==run)return;\n   const url=URL.createObjectURL(blob),audio=new Audio(url);audio.playbackRate=Number(prefs.voiceSpeed)||1;\n   window.wordMatchAudio=audio;\n   if(status)status.textContent='正在播放 Azure AI '+(locale==='en-GB'?'英式':'美式')+'英语';\n   try{await new Promise((resolve,reject)=>{audio.onended=resolve;audio.onerror=()=>reject(new Error('音频播放失败'));audio.play().catch(reject)})}\n   catch(e){if(status)status.textContent='播放失败：'+e.message;else alert('播放失败：'+e.message);URL.revokeObjectURL(url);return}\n   URL.revokeObjectURL(url);\n  }else{\n   if(!window.speechSynthesis){if(status)status.textContent='中文朗读暂不可用';return}\n   await new Promise(resolve=>{try{const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.9;u.onend=resolve;u.onerror=resolve;speechSynthesis.speak(u)}catch(e){resolve()}});\n  }\n }\n if(id===run){if(status)status.textContent='Azure AI朗读完成';if(onComplete)onComplete()}\n}\n\nfunction reset(){stopSpeech();picked=null;cleared=new Set();wmBoard=[];wmScore=0;wmSelected=-1;answers={listening:Array(lesson.questions.length).fill(null),reading:Array(lesson.questions.length).fill(null)};completed={listening:false,reading:false};listeningPlayed=false;writingIndex=0;writingPicks=[];writingChecked=false;writingResults=Array(lesson.writing.length).fill(null);comprehensionIndex={listening:0,reading:0};speakingIndex=0;writingMode=\"practice\";recordings.forEach(u=>URL.revokeObjectURL(u));recordings.clear()}\nfunction showPage(p){stopSpeech();page=p;['learn','match','practice'].forEach(x=>$('#page-'+x).classList.toggle('hidden',x!==p));$('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===p));if(p==='match')drawPairs();if(p==='practice')drawSkill()}\nfunction populateGrades(){data.grades.forEach(g=>{const o=E('option','',g.zh+' · '+g.en);o.value=g.id;$('#gradeSelect').append(o)});for(let i=1;i<=data.weeksPerGrade;i++){const o=E('option','','第'+i+'周 · Week '+i+(i===20?'（期中考试）':i===40?'（期末考试）':''));o.value=i;$('#weekSelect').append(o)}}\nfunction loadLesson(){const grade=$('#gradeSelect').value,week=Number($('#weekSelect').value),g=data.grades.find(x=>x.id===grade);lesson=data.lessons[grade+'-'+week]||null;$('#lessonTitle').textContent=lesson?lesson.titleZh:g.zh+' · 第'+week+'周';$('#lessonEn').textContent=lesson?lesson.titleEn:g.en+' · Week '+week;$('#empty').classList.toggle('hidden',!!lesson);$('#lesson').classList.toggle('hidden',!lesson);if(!lesson){$('#emptyTitle').textContent=week===20?'期中考试框架已预留':week===40?'期末考试框架已预留':'本周主题待确定';$('#emptyDesc').textContent='这一周尚未添加课程内容；等你确定主题后，再填入本周短文、词汇、语法和题目。';return}reset();renderLearn();showPage('learn')}\nfunction splitEnSentences(text){return String(text||'').replace(/\\s+/g,' ').trim().match(/[^.!?]+[.!?]?/g)?.map(s=>s.trim()).filter(Boolean)||[]}\nfunction splitZhSentences(text){return String(text||'').trim().match(/[^。！？]+[。！？]?/g)?.map(s=>s.trim()).filter(Boolean)||[]}\nlet learnTranslationVisible=true;\nfunction setLearnTranslationVisible(show){learnTranslationVisible=show;const btn=$('#toggleTranslation');if(btn)btn.textContent=show?'👁':'🙈';$('#story .line-cn').forEach(el=>el.classList.toggle('hidden',!show))}\nfunction renderLearn(){const holder=$('#story'),status=$('#storyStatus');holder.replaceChildren();const enLines=splitEnSentences(lesson.story),zhLines=splitZhSentences(lesson.translation);const lines=enLines.length?enLines:[lesson.story];lines.forEach((en,i)=>{const row=E('div','story-line');const controls=E('div','story-controls');const play=E('button','iconbtn small','▶');play.type='button';play.setAttribute('aria-label','朗读第'+(i+1)+'句');play.onclick=()=>{if(status)status.textContent='正在朗读第'+(i+1)+'句';speak([[en,'en-US']],status,()=>{if(status)status.textContent='第'+(i+1)+'句朗读完成'})};controls.append(play);const body=E('div','story-body');const enDiv=E('div','line-en',en);const zhDiv=E('div','line-cn',zhLines[i]||'');body.append(enDiv,zhDiv);row.append(controls,body);holder.append(row)});$('#storyAudio').onclick=()=>{if(status)status.textContent='正在朗读完整英文短文';speak([[lesson.story,'en-US']],status,()=>{if(status)status.textContent='完整英文短文朗读完成'})};$('#toggleTranslation').onclick=()=>setLearnTranslationVisible(!learnTranslationVisible);setLearnTranslationVisible(true);const vocabulary=$('#vocab');vocabulary.replaceChildren();lesson.vocabulary.forEach(pair=>{notify({type:'word-seen',word:pair[0]});const b=E('button');b.append(E('b','',pair[0]),E('small','',pair[1]));b.onclick=()=>speak([[pair[0],'en-US'],[pair[1],'zh-CN']]);vocabulary.append(b)})}\n// Approved letter matching gameplay: ordinary words and target words are distinct.\nlet wmBoard=[],wmColors=[],wmSize=8,wmBusy=false,wmScore=0,wmSelected=-1,wmTouchStart=null,wmHintTarget=null,wmHintWord=null,wmClearedTotal=0;\nconst wmPalette=['blue','green','pink','orange','yellow','purple'];\nconst wmAlphabet='AAAAAAAABCDEEEEEEEEEFGHIIIIIIJKLMNNOOOOOPRRRRSSSSTTTTTUUUVWWY';\nconst wmPhraseMap={\n one:['one apple','一个苹果'],two:['two pens','两支笔'],three:['three cats','三只猫'],four:['four dogs','四只狗'],five:['five birds','五只鸟'],six:['six stars','六颗星星'],seven:['seven days','七天'],eight:['eight books','八本书'],nine:['nine bags','九个包'],ten:['ten fingers','十根手指'],\n father:['my father','我的爸爸'],mother:['my mother','我的妈妈'],brother:['my brother','我的兄弟'],sister:['my sister','我的姐妹'],grandma:['my grandma','我的奶奶'],grandpa:['my grandpa','我的爷爷'],uncle:['my uncle','我的叔叔'],aunt:['my aunt','我的阿姨'],cousin:['my cousin','我的堂表兄弟姐妹'],baby:['a cute baby','一个可爱的宝宝'],\n good:['good job','干得好'],cat:['a little cat','一只小猫'],dog:['a happy dog','一只快乐的小狗'],book:['read a book','读一本书'],apple:['a red apple','一个红苹果'],family:['my family','我的家人'],friend:['my friend','我的朋友'],school:['go to school','去上学'],teacher:['my teacher','我的老师'],house:['my house','我的房子'],water:['drink water','喝水'],hello:['say hello','打招呼']};\n\nconst wmCommon=`am an as at be by do go he hi if in is it me my no of on or so to up us we ox oh ok ai ay ad ah id jo ow uh um ut ab cat dog sun pen bag mum dad boy man son kid her him she you run sit eat see get put hop cut mix fix hen pig cow fox ant bee owl sky sea wet eye ear arm leg lip toe jaw gum rib hip good job play book home love like come look make have take give time work hand help nice baby food fish bird tree moon star jump red blue green happy water hello apple school friend family father mother teacher house sister brother`.split(' ');\nconst wmDictionary=new Set([...wmCommon,...lesson.vocabulary.map(p=>String(p[0]).toLowerCase().replace(/[^a-z]/g,''))]);\nfunction wmRandLetter(){return wmAlphabet[Math.floor(Math.random()*wmAlphabet.length)]}\nfunction wmGoals(){return lesson.vocabulary.slice(0,10).map(pair=>({word:String(pair[0]).toLowerCase().replace(/[^a-z]/g,''),text:pair[0],cn:pair[1]})).filter(item=>item.word)}\nfunction wmSizeForWords(){return Math.max(8,Math.min(12,Math.max(...wmGoals().map(g=>g.word.length),8)))}\nfunction wmIndex(r,c){return r*wmSize+c}\nfunction wmRandomBoard(){return Array.from({length:wmSize*wmSize},wmRandLetter)}\nfunction wmPair(word){return (window.WM_EARLY_PHRASES||{})[word.toLowerCase()]||wmPhraseMap[word.toLowerCase()]||['say '+word,'说“'+word+'”']}\nfunction wmNextGoal(){return wmGoals().find(g=>!cleared.has(g.word))}\nfunction wmMeaning(word){return wmGoals().find(g=>g.word===word)?.cn||({cat:'猫',dog:'狗',good:'好',job:'工作',sun:'太阳',pen:'笔',bag:'包',at:'在',in:'在里面',on:'在上面',to:'到',go:'去',me:'我',we:'我们',he:'他',be:'是',it:'它'})[word]||'英语单词'}\nfunction wmSeedNextGoal(){let goal=wmNextGoal();wmHintTarget=null;wmHintWord=null;if(!goal||goal.word.length>wmSize)return;\n const word=goal.word.toUpperCase(),r=Math.max(2,Math.floor(wmSize/2)),col=Math.floor((wmSize-word.length)/2),color=wmPalette[(wmGoals().findIndex(x=>x.word===goal.word))%wmPalette.length];\n for(let k=0;k<word.length;k++){let idx=wmIndex(r,col+k);wmBoard[idx]=word[k];wmColors[idx]=color;}\n const last=wmIndex(r,col+word.length-1),above=wmIndex(r-1,col+word.length-1);\n wmBoard[last]='Z'===word.at(-1)?'X':'Z';wmColors[last]=null;wmBoard[above]=word.at(-1);wmColors[above]=color;\n wmHintTarget=[last,above];wmHintWord=goal.word;\n}\nfunction wmScan(dict=wmDictionary){let matches=[];\n for(let r=0;r<wmSize;r++)for(let c=0;c<wmSize;c++)for(const [dr,dc] of [[0,1],[1,0]]){\n  let str='',idxs=[];\n  for(let k=0;k<Math.min(12,wmSize);k++){\n   const rr=r+dr*k,cc=c+dc*k;if(rr>=wmSize||cc>=wmSize)break;\n   let idx=wmIndex(rr,cc);if(!wmBoard[idx])break;str+=wmBoard[idx].toLowerCase();idxs.push(idx);\n   if(str.length>=2&&dict.has(str))matches.push({word:str,idxs:idxs.slice()});\n  }\n }\n return matches.sort((a,b)=>b.word.length-a.word.length);\n}\nfunction wmMoves(){const goals=new Set(wmGoals().filter(g=>!cleared.has(g.word)).map(g=>g.word));let matches=[];\n for(let a=0;a<wmBoard.length;a++)for(const b of [a+1,a+wmSize]){\n  if(b>=wmBoard.length||!wmAdjacent(a,b)||wmBoard[a]===wmBoard[b])continue;\n  [wmBoard[a],wmBoard[b]]=[wmBoard[b],wmBoard[a]];\n  const found=wmScan().filter(x=>x.idxs.includes(a)||x.idxs.includes(b));\n  [wmBoard[a],wmBoard[b]]=[wmBoard[b],wmBoard[a]];\n  for(const m of found)matches.push({...m,swap:[a,b],task:goals.has(m.word)});\n }\n return matches.sort((a,b)=>Number(b.task)-Number(a.task)||b.word.length-a.word.length);\n}\nfunction wmPaint(){const board=$('#pairboard');board.style.setProperty('--wm-cols',String(wmSize));board.replaceChildren();\n wmBoard.forEach((letter,i)=>{const color=wmColors[i]||wmPalette[(i+letter.charCodeAt(0))%wmPalette.length];const b=E('button','wm-letter wm-'+color+(wmSelected===i?' selected':''),letter||'');b.type='button';b.dataset.i=i;b.disabled=wmBusy||!letter;b.setAttribute('aria-label','字母 '+letter);b.onclick=()=>wmSelect(i);board.append(b)});\n const total=wmGoals().length;$('#matchCount').textContent=cleared.size+' / '+total;$('#matchBar').style.width=(total?cleared.size/total*100:0)+'%';$('#wmMatchScore').textContent=wmScore.toLocaleString();$('#wmComboCount').textContent='🔥 已消除 '+wmClearedTotal;$('#goPractice').disabled=cleared.size<total;\n const list=$('#wmMissionList');list.replaceChildren();wmGoals().forEach(g=>{const row=E('div','wm-mission'+(cleared.has(g.word)?' done':''));row.append(E('span','wm-mission-mark',cleared.has(g.word)?'✔':'○'),E('b','',g.text),E('small','',g.cn));list.append(row)});\n}\nfunction wmReady(){wmBusy=false;wmSelected=-1;wmPaint()}\nfunction wmNewBoard(){wmSize=wmSizeForWords();wmBoard=wmRandomBoard();wmColors=wmBoard.map(()=>null);cleared=new Set();wmScore=0;wmClearedTotal=0;wmBusy=false;wmSelected=-1;wmSeedNextGoal();wmPaint();$('#matchFeedback').replaceChildren();$('#wmGameHint').textContent='至少2个字母组成有效英文单词即可消除；10个任务词全部找到才通关。'}\nfunction drawPairs(){if(!wmBoard.length){wmNewBoard();return}wmPaint()}\nfunction wmAdjacent(a,b){const ra=Math.floor(a/wmSize),rb=Math.floor(b/wmSize);return (ra===rb&&Math.abs(a-b)===1)||(Math.abs(ra-rb)===1&&a%wmSize===b%wmSize)}\nfunction wmSelect(i){if(wmBusy)return;if(wmSelected<0){wmSelected=i;wmPaint();return}if(wmSelected===i){wmSelected=-1;wmPaint();return}if(!wmAdjacent(wmSelected,i)){wmSelected=i;wmPaint();return}wmSwap(wmSelected,i)}\nfunction wmVoiceParts(word){const p=wmPair(word);return [[word,'en-US'],[wmMeaning(word),'zh-CN'],...[...word.toUpperCase()].map(c=>[c,'en-US']),[p[0],'en-US'],[p[1],'zh-CN']]}\nfunction wmSwap(a,b){if(wmBusy)return;[wmBoard[a],wmBoard[b]]=[wmBoard[b],wmBoard[a]];[wmColors[a],wmColors[b]]=[wmColors[b],wmColors[a]];wmSelected=-1;wmBusy=true;wmPaint();\n setTimeout(()=>{const matches=wmScan().filter(m=>m.idxs.includes(a)||m.idxs.includes(b));if(!matches.length){$('#wmGameHint').textContent='本次没有组成有效单词；可以继续交换。';wmReady();return}wmClear(matches)},180);\n}\nfunction wmClear(matches){const chosen=[],occupied=new Set();for(const m of matches){if(m.idxs.some(i=>occupied.has(i)))continue;chosen.push(m);m.idxs.forEach(i=>occupied.add(i));}\n if(!chosen.length){wmReady();return}\n wmClearedTotal+=chosen.length;\n for(const m of chosen){wmScore+=50+m.word.length*20;if(wmGoals().some(g=>g.word===m.word)&&!cleared.has(m.word)){cleared.add(m.word);notify({type:'learned',word:m.word})}}\n const feedback=$('#matchFeedback');feedback.replaceChildren();const g=chosen[0];const phrase=wmPair(g.word),task=wmGoals().some(x=>x.word===g.word);\n const card=E('div','wm-success');card.append(E('strong','',task?'🌟 任务单词完成！':'✨ 普通单词消除成功！'),E('div','wm-success-word',g.word+' · '+wmMeaning(g.word)),E('div','wm-success-phrase',phrase[0]+' · '+phrase[1]));feedback.append(card);\n $('#wmGameHint').textContent=task?'任务词计入通关进度；正在补充字母……':'普通词已消除，不计入10个任务；正在补充字母……';wmPaint();\n speak(chosen.flatMap(m=>wmVoiceParts(m.word)));\n setTimeout(()=>{for(const idx of occupied){wmBoard[idx]='';wmColors[idx]=null}wmPaint();setTimeout(()=>{\n for(let c=0;c<wmSize;c++){let kept=[];for(let r=wmSize-1;r>=0;r--){const i=wmIndex(r,c);if(wmBoard[i])kept.push([wmBoard[i],wmColors[i]])}for(let r=wmSize-1;r>=0;r--){let i=wmIndex(r,c),v=kept[wmSize-1-r];wmBoard[i]=v?v[0]:wmRandLetter();wmColors[i]=v?v[1]:null}}\n if(wmNextGoal())wmSeedNextGoal();wmReady();$('#wmGameHint').textContent=wmNextGoal()?'继续拼词！普通词也可以消除。':'十个目标单词全部完成，恭喜通关！';if(!wmNextGoal()){feedback.append(E('div','wm-game-won','🏆 本周10个任务词全部完成！'));notify({type:'week-complete',grade:$('#gradeSelect').value,week:Number($('#weekSelect').value)});}\n },250)},300);\n}\nfunction wmBindControls(){const board=$('#pairboard');board.addEventListener('touchstart',e=>{const tile=e.target.closest('.wm-letter');if(tile)wmTouchStart={i:Number(tile.dataset.i),x:e.touches[0].clientX,y:e.touches[0].clientY}},{passive:true});board.addEventListener('touchend',e=>{if(!wmTouchStart||wmBusy)return;const dx=e.changedTouches[0].clientX-wmTouchStart.x,dy=e.changedTouches[0].clientY-wmTouchStart.y,a=wmTouchStart.i;wmTouchStart=null;if(Math.max(Math.abs(dx),Math.abs(dy))<25)return;const b=Math.abs(dx)>Math.abs(dy)?a+(dx>0?1:-1):a+(dy>0?wmSize:-wmSize);if(b>=0&&b<wmBoard.length&&wmAdjacent(a,b)){e.preventDefault();wmSwap(a,b)}},{passive:false});\n $('#wmHintBtn').onclick=()=>{if(wmBusy)return;let moves=wmMoves(),m=moves[0];if(!m&&wmNextGoal()){wmSeedNextGoal();wmPaint();moves=wmMoves();m=moves[0]}if(!m){$('#wmGameHint').textContent='正在补充可以拼出的单词……';wmSeedNextGoal();wmPaint();return}$('#wmGameHint').textContent='听发音和拼写，在棋盘上自己找到这个单词。';speak(wmVoiceParts(m.word));};\n $('#wmRestartBtn').onclick=()=>{if(confirm('确定重新开始本周10个单词的消除任务吗？'))wmNewBoard()};\n}\nfunction listeningStoryQuestions(L){\n  if(!L.story.includes('Goldy and Callum are learning about') || !L.story.includes('Jake finds the words'))return L.questions;\n  const v=L.vocabulary.map(p=>p[0]);\n  if(v.length<10)return L.questions;\n  const group=(a,b)=>v.slice(a,b).join(', ');\n  const q=(en,choices,answer,evidence,shift)=>{\n    const items=choices.map((c,i)=>({c,ok:i===answer}));\n    const ordered=items.slice(shift).concat(items.slice(0,shift));\n    return {en,options:ordered.map(x=>[x.c,x.c]),correct:ordered.findIndex(x=>x.ok),evidence};\n  };\n  return [\n    q('What is the main topic of the recording?',[L.titleEn,'Food and drinks','Weather and seasons','Family members'],0,L.story.split('.')[0]+'.',1),\n    q('Which words does Goldy mention first?',[group(0,3),group(3,5),group(5,8),group(8,10)],0,L.story.match(/Goldy says,.*?(?= Callum shows)/)?.[0]||L.story,2),\n    q('Which words does Callum show Goldy?',[group(3,5),group(0,2),group(6,8),group(8,10)],0,L.story.match(/Callum shows.*?(?= They also learn)/)?.[0]||L.story,3),\n    q('Which words does Jake find?',[group(8,10),group(0,2),group(3,5),group(5,7)],0,L.story.match(/Jake finds.*?(?= All three)/)?.[0]||L.story,0),\n    q('What do the three friends do at the end?',['They practise together.','They take a bus.','They go shopping.','They go to sleep.'],0,'All three friends practise together.',2)\n  ];\n}\n\nfunction makeQuestion(q,i,type,update){const card=E('div','question');card.append(E('div','en','第'+(i+1)+'题 · Q'+(i+1)));const title=E('div','qtitle');title.append(E('strong','',q.en||q.cn));card.append(title);const choices=E('div','choices'),fb=E('div');card.append(choices,fb);q.options.forEach((o,j)=>{const b=E('button');b.append(E('span','',Array.isArray(o)?(o.find(t=>typeof t==='string'&&/[a-z]/i.test(t))||o[0]):String(o)));choices.append(b);b.onclick=()=>{if(answers[type][i]!==null||completed[type]||(type==='listening'&&!listeningPlayed))return;answers[type][i]=j;refresh();update()}});function refresh(){const selection=answers[type][i];[...choices.children].forEach((b,j)=>{b.disabled=selection!==null;b.className=selection!==null?(j===q.correct?'correct':j===selection?'incorrect':''):''});if(selection!==null){const ok=selection===q.correct;fb.className='feedback'+(ok?'':' bad');fb.textContent=(ok?'✓ 回答正确！ Correct!':'✗ 回答错误！ Incorrect!')+'　正确答案：'+(type==='listening'?(q.options[q.correct][1]||q.options[q.correct][0]):q.options[q.correct].filter(Boolean).join(' '))+'。原文：'+q.evidence}}refresh();return card}\nfunction renderDictionary(story,holder){\n const passage=E('div','passage'),help=E('div','wm-dictionary','点击英文单词查看中文释义 · Tap an English word');\n const dictionary=new Map(lesson.vocabulary.map(pair=>[pair[0].toLowerCase(),pair[1]]));\n Object.entries({and:'和',the:'这个；那个',a:'一个',an:'一个',are:'是；正在',is:'是',am:'是',about:'关于',they:'他们',she:'她',he:'他',her:'她的',his:'他的',with:'和；与',together:'一起',learn:'学习',learning:'正在学习',learns:'学习',says:'说',shows:'展示',finds:'找到',words:'单词',word:'单词',all:'所有',three:'三个',friends:'朋友们',practice:'练习',practise:'练习'}).forEach(([k,v])=>{if(!dictionary.has(k))dictionary.set(k,v)});\n story.split(/(\\b[A-Za-z]+(?:'[A-Za-z]+)?\\b)/g).forEach(t=>{if(!/^[A-Za-z]/.test(t)){passage.append(document.createTextNode(t));return}const b=E('button','wm-dictionary-word',t);b.type='button';b.onclick=()=>{const meaning=dictionary.get(t.toLowerCase());help.textContent=t+' · '+(meaning||'本课暂无释义');if(!meaning)help.textContent+='（可在本周词汇表学习）'};passage.append(b)});\n holder.append(passage,help);\n}\nfunction comprehension(type,w){\n const listening=type==='listening',qs=listening?listeningStoryQuestions(lesson):lesson.questions,i=comprehensionIndex[type]||0;\n if(completed[type]){comprehensionIndex[type]=0;completed[type]=false}\n w.append(E('h3','',listening?'听力理解 · Listening':'阅读理解 · Reading'),E('div','en','第'+(i+1)+'题 / '+qs.length));\n if(listening){const b=E('button','primary','🔊 播放完整英文短文'),status=E('div','status');w.append(b,status);b.onclick=()=>speak([[lesson.story,'en-US']],status,()=>{listeningPlayed=true;b.textContent='🔊 再听一次'})}\n else renderDictionary(lesson.story,w);\n const q=qs[i];if(!q)return;\n const card=makeQuestion(q,i,type,()=>{});w.append(card);\n const next=E('button','primary',i===qs.length-1?'查看本次成绩 · View Score':'下一题 · Next');next.disabled=answers[type][i]===null;\n // Update navigation after selecting the answer, without rebuilding the question.\n const options=card.querySelectorAll('.choices button');options.forEach(b=>b.addEventListener('click',()=>{next.disabled=answers[type][i]===null}));w.append(next);\n next.onclick=()=>{if(answers[type][i]===null)return;if(i<qs.length-1){comprehensionIndex[type]=i+1;drawSkill();return}\n completed[type]=true;const score=qs.filter((x,j)=>answers[type][j]===x.correct).length;\n notify({type:'exam',grade:$('#gradeSelect').value,week:Number($('#weekSelect').value),skill:type,score:Math.round(score/qs.length*100)});\n const card=E('div','score');card.append(E('div','',listening?'听力成绩 · Listening Score':'阅读成绩 · Reading Score'),E('b','',score+'/'+qs.length+' · '+Math.round(score/qs.length*100)+'分'));\n const retry=E('button','outline','重新练习 · Try Again');retry.onclick=()=>{answers[type]=Array(qs.length).fill(null);completed[type]=false;comprehensionIndex[type]=0;if(listening)listeningPlayed=false;drawSkill()};card.append(retry);w.replaceChildren(card)};\n}\nfunction grammarSpeech(g){return [[g.spokenEn||g.en,'en-US'],[g.cn,'zh-CN'],...(g.spoken||[[g.ex,'zh-CN']])]}\nfunction speaking(w){w.append(E('h3','','口语跟读 · 语法小课堂'),E('div','en','Speaking · Grammar Mini Lesson'),E('p','muted','每条语法独立完整朗读、录音、回放；朗读包含英文例句、中文翻译、完整语法解释。'));w.append(E('div','step','第'+(speakingIndex+1)+'题 / '+lesson.grammar.length));lesson.grammar.forEach((g,i)=>{if(i!==speakingIndex)return;const card=E('div','gcard');card.append(E('strong','',g.en),E('div','muted',g.cn),E('p','ex',g.ex));const buttons=E('div','gbuttons');const play=E('button'),record=E('button'),replay=E('button');play.innerHTML='<img src=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNkOTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTEgNSA2IDlIM3Y2aDNsNSA0VjVaIi8+PHBhdGggZD0iTTE1LjUgOC41YTUgNSAwIDAgMSAwIDciLz48cGF0aCBkPSJNMTkgNWExMCAxMCAwIDAgMSAwIDE0Ii8+PC9zdmc+ alt=>完整朗读';record.innerHTML='<img src=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNkOTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI5IiB5PSIyIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMyIgcng9IjMiLz48cGF0aCBkPSJNNSAxMHYyYTcgNyAwIDAgMCAxNCAwdi0yTTEyIDE5djNNOCAyMmg4Ii8+PC9zdmc+ alt=>跟读录音';replay.innerHTML='<img src=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNkOTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5Ii8+PHBhdGggZD0ibTEwIDggNiA0LTYgNFY4WiIvPjwvc3ZnPg== alt=>回放录音';play.onclick=()=>speak(grammarSpeech(g));buttons.append(play,record,replay);card.append(buttons);const status=E('div','status','可在本张卡片直接录音及回放。'),player=E('audio');player.controls=true;player.style.display='none';card.append(status,player);if(recordings.has(i)){player.src=recordings.get(i);player.style.display='block'}replay.disabled=!recordings.has(i);record.onclick=async()=>{if(recorder?.state==='recording'){if(recorder._card===i){recorder.stop();status.textContent='正在保存录音……'}else status.textContent='请先停止其他卡片录音。';return}if(requesting){status.textContent='麦克风正在启动……';return}if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined'){status.textContent='当前浏览器没有开放麦克风录音功能。';return}requesting=true;status.textContent='正在申请麦克风权限……';try{const input=await navigator.mediaDevices.getUserMedia({audio:true});stream=input;const chunks=[];const mime=['audio/mp4','audio/webm;codecs=opus','audio/webm'].find(t=>MediaRecorder.isTypeSupported(t));const local=new MediaRecorder(input,mime?{mimeType:mime}:undefined);local._card=i;recorder=local;local.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};local.onstop=()=>{input.getTracks().forEach(t=>t.stop());if(stream===input)stream=null;const blob=new Blob(chunks,{type:local.mimeType||'audio/mp4'});if(blob.size){const old=recordings.get(i);if(old)URL.revokeObjectURL(old);const url=URL.createObjectURL(blob);recordings.set(i,url);player.src=url;player.style.display='block';replay.disabled=false;status.textContent='录音完成，可直接回放。'}else status.textContent='录音为空，请重试。';record.innerHTML='<img src=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNkOTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI5IiB5PSIyIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMyIgcng9IjMiLz48cGF0aCBkPSJNNSAxMHYyYTcgNyAwIDAgMCAxNCAwdi0yTTEyIDE5djNNOCAyMmg4Ii8+PC9zdmc+ alt=>跟读录音';if(recorder===local)recorder=null};local.start();record.innerHTML='<img src=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjNkOTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI2IiB5PSI2IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIi8+PC9zdmc+ alt=>停止录音';status.textContent='● 正在录音：'+(g.spokenEn||g.en)}catch(err){stream?.getTracks().forEach(t=>t.stop());stream=null;status.textContent='录音失败：'+(err.name==='NotAllowedError'?'麦克风权限未允许。':err.message)}finally{requesting=false}};replay.onclick=()=>{if(!player.src)return;player.currentTime=0;player.play().catch(()=>status.textContent='请用下方音频播放器播放。')};w.append(card);const next=E('button','primary',speakingIndex===lesson.grammar.length-1?'完成口语练习 · Finish':'下一题 · Next');next.onclick=()=>{stopSpeech();if(speakingIndex<lesson.grammar.length-1){speakingIndex++;drawSkill()}else{const done=E('div','score','✓ 口语跟读练习完成 · Speaking complete');const again=E('button','outline','重新练习');again.onclick=()=>{speakingIndex=0;drawSkill()};done.append(again);w.replaceChildren(done)}};w.append(next)})}\nfunction writing(w){const item=lesson.writing[writingIndex];if(!item){w.append(E('p','muted','本周未添加写作题目。'));return}w.append(E('h3','','写作 · 乱序字母拼单词'),E('div','en','Writing · Arrange the Letters'),E('div','step','第'+(writingIndex+1)+'题 · Q'+(writingIndex+1)+' / '+lesson.writing.length));const modes=E('div','wm-mode');[['practice','练习 · 照着拼'],['test','测试 · 默写']].forEach(([v,t])=>{const b=E('button',writingMode===v?'active':'',t);b.onclick=()=>{writingMode=v;writingPicks=[];writingChecked=false;drawSkill()};modes.append(b)});w.append(modes);if(writingMode==='practice')w.append(E('div','wm-copy',item.word));const q=E('div','qtitle');q.append(E('strong','','请拼出“'+item.cn+'”对应的英文'),E('small','','Arrange the letters'));w.append(q);const answer=E('div','answer'),letters=E('div','letters'),message=E('div');w.append(answer,letters,message);const row=E('div','row'),undo=E('button','outline','撤销 · Undo'),reset=E('button','outline','重排 · Reset');row.append(undo,reset);w.append(row);const retry=E('button','outline','再试一次 · Try Again');retry.style.display='none';row.append(retry);const next=E('button','primary',writingIndex===lesson.writing.length-1?'查看五题成绩':'下一题 · Next');next.style.display='none';w.append(next);function render(){answer.replaceChildren();letters.replaceChildren();if(!writingPicks.length)answer.append(E('span','muted','按顺序点击下方字母'));writingPicks.forEach((i,pos)=>{const b=E('button','',item.shuffled[i]);b.disabled=writingChecked;b.onclick=()=>{writingPicks.splice(pos,1);render()};answer.append(b)});item.shuffled.forEach((l,i)=>{const b=E('button','',l);b.disabled=writingChecked||writingPicks.includes(i);b.onclick=()=>{writingPicks.push(i);render();if(writingPicks.length===item.shuffled.length)verify()};letters.append(b)});undo.disabled=reset.disabled=writingChecked||!writingPicks.length}function verify(){if(writingChecked)return;writingChecked=true;const correct=writingPicks.map(i=>item.shuffled[i]).join('')===item.word;if(writingMode==='test')writingResults[writingIndex]=correct;message.className='feedback'+(correct?'':' bad');message.textContent=(correct?'✓ 拼写正确！ Correct!':'✗ 拼写错误！ Incorrect!')+'　正确单词：'+item.word;next.style.display=writingMode==='test'?'block':'none';retry.style.display=correct?'none':'block';if(writingMode==='practice'&&correct){message.textContent+='　现在可以切换「测试 · 默写」。'}render()}undo.onclick=()=>{writingPicks.pop();render()};reset.onclick=()=>{writingPicks=[];render()};retry.onclick=()=>{writingPicks=[];writingChecked=false;retry.style.display='none';next.style.display='none';message.textContent='';message.className='';render()};next.onclick=()=>{if(writingIndex<lesson.writing.length-1){writingIndex++;writingPicks=[];writingChecked=false;writingMode='practice';drawSkill()}else{const score=writingResults.filter(Boolean).length;notify({type:'exam',grade:$('#gradeSelect').value,week:Number($('#weekSelect').value),skill:'writing',score:Math.round(score/lesson.writing.length*100)});writingResults.forEach((ok,i)=>{if(ok)notify({type:'learned',word:lesson.writing[i].word})});const result=E('div','score');result.append(E('div','','写作成绩 · Writing Score'),E('b','',score+'/'+lesson.writing.length+' · '+Math.round(score/lesson.writing.length*100)+'分'));lesson.writing.forEach((x,i)=>result.append(E('p','muted',(writingResults[i]?'✓ ':'✗ ')+x.cn+' · '+x.word)));const again=E('button','outline','重新练习');again.onclick=()=>{writingIndex=0;writingPicks=[];writingChecked=false;writingResults=Array(lesson.writing.length).fill(null);drawSkill()};result.append(again);w.replaceChildren(result)}};render()}\nfunction drawSkill(){$('#results').replaceChildren();$('#skills button').forEach(b=>b.classList.toggle('active',b.dataset.skill===skill));const w=$('#work');w.replaceChildren();if(skill==='listening'||skill==='reading')comprehension(skill,w);else if(skill==='speaking')speaking(w);else writing(w)}\n$('#wmReturnHome').onclick=()=>{stopSpeech();try{parent.WordMatchHome?.navigate('home')}catch(e){notify({type:'return-home'})}};$('#gradeSelect').addEventListener('change',loadLesson);$('#weekSelect').addEventListener('change',loadLesson);$('#nav button').forEach(b=>b.onclick=()=>showPage(b.dataset.page));$('#skills button').forEach(b=>b.onclick=()=>{stopSpeech();skill=b.dataset.skill;drawSkill()});$('#goMatch').onclick=()=>showPage('match');$('#goPractice').onclick=()=>showPage('practice');wmBindControls();populateGrades();loadLesson();\n})();\n</script><script>\n(function(){\nconst fmt=[\n['RA','朗读文本','Read Aloud','口语','Speaking'],['RS','复述句子','Repeat Sentence','口语','Speaking'],['DI','描述图表','Describe Image','口语','Speaking'],['RL','复述讲座','Retell Lecture','口语','Speaking'],['ASQ','简短问答','Answer Short Question','口语','Speaking'],['SGD','总结小组讨论','Summarize Group Discussion','口语','Speaking'],['RTS','情境回应','Respond to a Situation','口语','Speaking'],['SWT','概括书面文本','Summarize Written Text','写作','Writing'],['WE','英文议论文','Write Essay','写作','Writing'],\n['RFIB','阅读下拉填空','Reading Fill in the Blanks (Dropdown)','阅读','Reading'],['RMCMA','阅读多选','Reading Multiple Choice, Multiple Answers','阅读','Reading'],['RO','段落排序','Reorder Paragraph','阅读','Reading'],['RFIBDD','阅读拖拽填空','Reading Fill in the Blanks (Drag and Drop)','阅读','Reading'],['RMCSA','阅读单选','Reading Multiple Choice, Single Answer','阅读','Reading'],\n['SST','概括听力文本','Summarize Spoken Text','听力','Listening'],['LMCMA','听力多选','Listening Multiple Choice, Multiple Answers','听力','Listening'],['LFIB','听力填空','Listening Fill in the Blanks','听力','Listening'],['HCS','选择正确概述','Highlight Correct Summary','听力','Listening'],['LMCSA','听力单选','Listening Multiple Choice, Single Answer','听力','Listening'],['SMW','选择缺失词','Select Missing Word','听力','Listening'],['HIW','指出错误词','Highlight Incorrect Words','听力','Listening'],['WFD','听写句子','Write from Dictation','听力','Listening'] ];\nconst q=document.createElement('section');q.className='panel';q.style.marginTop='22px';q.innerHTML='<h2>🧠 PTE 专项模拟训练</h2><div class=\"subtitle\">PTE Academic · 22 Question Types</div><p class=\"muted\">基础和进阶周均可练习；此处是原创练习，非培生真题。口语与主观写作提供录音和参考答案，不冒充官方自动评分。</p><div class=\"skills\" id=\"pte-groups\" style=\"margin-top:12px\"></div><div id=\"pte-ex\" class=\"work\"></div>';\ndocument.querySelector('.app').append(q);\nlet cat='口语',index=0,playing=false;\nconst group=q.querySelector('#pte-groups');\nfor(const [zh,en] of [['口语','Speaking'],['写作','Writing'],['阅读','Reading'],['听力','Listening']]){\nconst b=document.createElement('button');b.innerHTML=zh+'<small>'+en+'</small>';b.onclick=()=>{cat=zh;index=0;draw()};group.append(b)}\nfunction draw(){[...group.children].forEach((b,i)=>b.classList.toggle('active',['口语','写作','阅读','听力'][i]===cat));const items=fmt.filter(x=>x[3]===cat),f=items[index%items.length],t=q.querySelector('#pte-ex');t.replaceChildren();\nconst row=document.createElement('div');row.className='row';items.forEach((x,i)=>{let b=document.createElement('button');b.className='outline';b.textContent=x[0];b.title=x[1]+' / '+x[2];b.style.cssText='font-size:12px;flex:1;min-width:48px';b.onclick=()=>{index=i;draw()};if(i===index)b.style.background='#e5d6fa';row.append(b)});t.append(row);\nconst title=document.createElement('h3');title.textContent=f[1]+' · '+f[2];t.append(title);\nconst L=window.WORD_MATCH_KG_DATA.lessons[document.querySelector('#gradeSelect').value+'-'+document.querySelector('#weekSelect').value];\nconst story=L?.story||'Goldy and Callum work together on a learning project. They discuss the evidence and explain their decisions.';\nconst full=story.replace(/\\s+/g,' ').trim();\nconst instruction=document.createElement('p');instruction.className='muted';t.append(instruction);\nconst prompt=document.createElement('div');prompt.className='passage';prompt.style.whiteSpace='pre-wrap';t.append(prompt);\nconst action=document.createElement('div');action.className='row';t.append(action);\nconst answer=document.createElement('textarea');answer.rows=4;answer.style.cssText='width:100%;font:inherit;padding:12px;border:1px solid #cbb4e8;border-radius:12px;box-sizing:border-box';\nconst result=document.createElement('div');result.className='feedback';\nfunction btn(label,fn){let b=document.createElement('button');b.className='outline';b.textContent=label;b.onclick=fn;action.append(b);return b}\nfunction speak(text){if(!('speechSynthesis' in window)){result.textContent='此浏览器不支持合成语音。';return}speechSynthesis.cancel();const prefs=parent.WordMatchVoiceSettings?.()||{accent:'en-US',sound:true};if(!prefs.sound)return;const u=new SpeechSynthesisUtterance(text);u.lang=prefs.accent;u.rate=.9;const voices=speechSynthesis.getVoices();const v=voices.find(v=>v.voiceURI===prefs.voiceChoice&&v.lang?.toLowerCase().startsWith(prefs.accent?.toLowerCase()))||voices.filter(v=>v.lang?.toLowerCase().startsWith(prefs.accent?.toLowerCase())).find(v=>/natural|enhanced|premium/i.test(v.name));if(v)u.voice=v;speechSynthesis.speak(u)}\nfunction show(text){result.textContent=text}\nconst words=(L?.vocabulary||[]).map(v=>v[0]).slice(0,10), w=words[0]||'evidence';\nconst contextual='The students discussed '+(L?.titleEn||'their project')+' and shared useful evidence.';\nconst listening=['SST','LMCMA','LFIB','HCS','LMCSA','SMW','HIW','WFD'].includes(f[0]);\nconst oral=['RA','RS','DI','RL','ASQ','SGD','RTS'].includes(f[0]);\nif(listening||f[0]==='RS'||f[0]==='RL'||f[0]==='SGD'){\n const heard=f[0]==='WFD'?contextual:f[0]==='SGD'?'Goldy: We need evidence. Callum: We should compare results. Jake: I agree, and we should explain the conclusion.':f[0]==='RS'?'The results support the main conclusion.':story;\n prompt.textContent='🎧 音频任务：先播放，再作答。\\nAudio task: listen before answering.';\n btn('🔊 播放英语音频 · Play',()=>{playing=true;speak(heard)});\n btn('显示听力原文 · Reveal transcript',()=>show(heard));\n if(f[0]==='WFD'||f[0]==='LFIB'||f[0]==='SST'){\n instruction.textContent='请听录音并用英语作答。完成后点击参考答案自查。 / Listen and respond in English.';\n t.append(answer);btn('核对参考 · Check',()=>show(f[0]==='WFD'?'参考答案：'+heard:f[0]==='LFIB'?'听力原文：'+heard:'概括要点：主题、两项核心信息和结论。请人工检查内容与语法。'));\n }else if(oral){instruction.textContent='听完音频后用自己的英语复述。可用下方麦克风录制。 / Summarise orally after listening.';\n }else{instruction.textContent='先听完整录音，再依据内容选择或写下答案。 / Listen and answer in English.';\n const choices=['They discussed evidence.','They visited a hospital.','They cancelled a trip.','They purchased a house.'];\n const sel=document.createElement('div');sel.className='choices';choices.forEach((c,i)=>{let b=document.createElement('button');b.textContent=c;b.onclick=()=>show(i===0?'✓ Correct · 正确':'✗ Incorrect · 不正确。参考：'+choices[0]);sel.append(b)});t.append(sel);\n }\n}else if(oral){\n instruction.textContent='使用英语口头回答。此练习可录音回放，但不生成官方口语分数。 / Respond aloud in English.';\n prompt.textContent=f[0]==='RTS'?'A colleague asks you to explain a delayed assignment politely. What would you say?':f[0]==='ASQ'?'What do we call the final part of an academic report?':f[0]==='DI'?'示例数据 / Sample data: 2023: 40; 2024: 55; 2025: 70. Describe the trend in English.':story;\n} else if(f[0]==='WE'||f[0]==='SWT'){\n instruction.textContent=f[0]==='WE'?'写一篇有引言、论证和结论的英文文章，建议200–300词。 / Write an essay of 200–300 words.':'用一个英语句子概括短文，5–75词。 / Summarise in one sentence (5–75 words).';\n prompt.textContent=f[0]==='WE'?'Should technology play a greater role in education? Discuss both benefits and risks.':story;\n t.append(answer);const wc=document.createElement('p');wc.className='muted';t.append(wc);answer.oninput=()=>wc.textContent='字数 / Words: '+(answer.value.trim()?answer.value.trim().split(/\\s+/).length:0);\n btn('自查结构 · Self-check',()=>{const n=answer.value.trim()?answer.value.trim().split(/\\s+/).length:0;show('已输入 '+n+' 词。核对论点、证据、语法和任务字数；本地练习不自动评定 PTE 写作分数。')});\n}else{\n instruction.textContent='阅读短文，根据语境完成题目。 / Read the passage and complete the task.';\n if(f[0]==='RO'){prompt.textContent='Arrange these sentences in a logical order.';const arr=['Finally, they shared the findings.','First, they prepared the questions.','Next, they discussed the evidence.'];let clicks=[];let grid=document.createElement('div');grid.className='choices';[0,1,2].forEach(i=>{let b=document.createElement('button');b.textContent=arr[i];b.onclick=()=>{if(clicks.includes(i))return;clicks.push(i);b.disabled=true;show('当前顺序 / Order: '+clicks.map(j=>arr[j]).join(' → ')+(clicks.length===3?(clicks.join(',')==='1,2,0'?' ✓ Correct':' ✗ Correct order: First → Next → Finally'):''))};grid.append(b)});t.append(grid)}\n else if(f[0]==='RFIB'||f[0]==='RFIBDD'){prompt.textContent='Goldy and Callum discuss the ____ before giving a conclusion.';let choices=[w,'evidence','breakfast','yesterday'];let sel=document.createElement('select');sel.style.cssText='font:inherit;padding:10px;width:100%';choices.forEach(c=>{let op=document.createElement('option');op.value=c;op.textContent=c;sel.append(op)});t.append(sel);btn('检查 · Check',()=>show(sel.value==='evidence'?'✓ Correct':'✗ Reference answer: evidence'))}\n else {prompt.textContent=story;let choices=['Goldy and Callum study together.','The lesson is about cooking only.','The text contains no study activity.','Jake is the only person mentioned.'];let grid=document.createElement('div');grid.className='choices';choices.forEach((c,i)=>{let b=document.createElement('button');b.textContent=c;b.onclick=()=>show(i===0?'✓ Correct':'✗ Incorrect. Correct: '+choices[0]);grid.append(b)});t.append(grid)}\n}\nif(oral){\n const state=document.createElement('p');state.className='muted';t.append(state);let local,tracks=[],audioBlob;\n btn('🎤 开始/停止录音 · Record',async()=>{if(local?.state==='recording'){local.stop();state.textContent='正在保存 / Saving';return}if(!navigator.mediaDevices?.getUserMedia){state.textContent='需要 HTTPS 及麦克风权限 / HTTPS microphone permission required';return}try{let st=await navigator.mediaDevices.getUserMedia({audio:true});tracks=[st];let parts=[];local=new MediaRecorder(st);local.ondataavailable=e=>{if(e.data.size)parts.push(e.data)};local.onstop=()=>{audioBlob=new Blob(parts,{type:local.mimeType});state.textContent='录音完成 / Recording saved';st.getTracks().forEach(x=>x.stop())};local.start();state.textContent='正在录音 · 再次点击停止 / Recording'}catch(e){state.textContent='无法录音 / Cannot record: '+e.message}});\n btn('▶ 回放 · Replay',()=>{if(!audioBlob){state.textContent='请先录音 / Record first';return}const u=URL.createObjectURL(audioBlob);const a=new Audio(u);a.onended=()=>URL.revokeObjectURL(u);a.play()});\n}\nt.append(result);\n}\ndraw();\n})();\n</script></body></html>\n";
/* 仅新增课程内容：不修改V1及V13定稿原件。草稿未定稿。 */
window.WM_DRAFT_LESSONS = {
  "junior-2": {
    "titleZh": "认识我",
    "titleEn": "All About Me",
    "story": "Hello! I am Goldy. My name is Goldy. This is my bag. The bag is mine. I have a book. My mum sees me. I put the book in my bag myself. My mum smiles at me. I am happy.",
    "translation": "你好！我是Goldy。我的名字叫Goldy。这是我的包。这个包是我的。我有一本书。我的妈妈看见了我。我自己把书放进我的包里。妈妈对着我微笑。我很开心。",
    "vocabulary": [
      [
        "I",
        "我（主语）"
      ],
      [
        "me",
        "我（宾语）"
      ],
      [
        "my",
        "我的（接名词）"
      ],
      [
        "mine",
        "我的（独立）"
      ],
      [
        "myself",
        "我自己"
      ],
      [
        "am",
        "是（与I连用）"
      ],
      [
        "name",
        "名字"
      ],
      [
        "bag",
        "包"
      ],
      [
        "book",
        "书"
      ],
      [
        "mum",
        "妈妈"
      ]
    ],
    "grammar": [
      {
        "en": "I am Goldy.",
        "cn": "我是Goldy。",
        "ex": "I 是“我”，当“我”作为句子的主语、介绍自己时，用 I。",
        "spoken": [
          [
            "I 是“我”，当“我”作为句子的主语、介绍自己时，用 I。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "My mum sees me.",
        "cn": "我的妈妈看见了我。",
        "ex": "me 也是“我”，当别人看见我、帮助我等动作作用到我身上时，用 me。",
        "spoken": [
          [
            "me 也是“我”，当别人看见我、帮助我等动作作用到我身上时，用 me。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "This is my bag. The bag is mine.",
        "cn": "这是我的包。这个包是我的。",
        "ex": "my 后面接名词，例如 my bag；mine 可以独立表示“我的”，不需要再接名词。",
        "spoken": [
          [
            "my 后面接名词，例如 my bag；mine 可以独立表示“我的”，不需要再接名词。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "I put the book in my bag myself.",
        "cn": "我自己把书放进我的包里。",
        "ex": "myself 表示“我自己”，强调这个动作是我亲自完成的。",
        "spoken": [
          [
            "myself 表示“我自己”，强调这个动作是我亲自完成的。",
            "zh-CN"
          ]
        ]
      }
    ],
    "questions": [
      {
        "cn": "小女孩叫什么名字？",
        "en": "What is her name?",
        "options": [
          [
            "Goldy",
            "Goldy"
          ],
          [
            "妈妈",
            "Mum"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "朋友",
            "Friend"
          ]
        ],
        "correct": 0,
        "evidence": "Hello! I am Goldy."
      },
      {
        "cn": "故事中的包是谁的？",
        "en": "Whose bag is it?",
        "options": [
          [
            "妈妈的",
            "Mum’s"
          ],
          [
            "Goldy的",
            "Goldy’s"
          ],
          [
            "老师的",
            "Teacher’s"
          ],
          [
            "朋友的",
            "Friend’s"
          ]
        ],
        "correct": 1,
        "evidence": "This is my bag. The bag is mine."
      },
      {
        "cn": "Goldy有一本什么？",
        "en": "What does Goldy have?",
        "options": [
          [
            "书",
            "Book"
          ],
          [
            "帽子",
            "Hat"
          ],
          [
            "玩具",
            "Toy"
          ],
          [
            "地图",
            "Map"
          ]
        ],
        "correct": 0,
        "evidence": "I have a book."
      },
      {
        "cn": "谁看见了Goldy？",
        "en": "Who sees Goldy?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "妈妈",
            "Mum"
          ],
          [
            "Jake",
            "Jake"
          ]
        ],
        "correct": 2,
        "evidence": "My mum sees me."
      },
      {
        "cn": "谁自己把书放进包里？",
        "en": "Who puts the book in the bag?",
        "options": [
          [
            "妈妈",
            "Mum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "Callum",
            "Callum"
          ]
        ],
        "correct": 1,
        "evidence": "I put the book in my bag myself."
      }
    ],
    "writing": [
      {
        "cn": "我（宾语）",
        "word": "me",
        "shuffled": [
          "e",
          "m"
        ]
      },
      {
        "cn": "我的（接名词）",
        "word": "my",
        "shuffled": [
          "y",
          "m"
        ]
      },
      {
        "cn": "我的（独立）",
        "word": "mine",
        "shuffled": [
          "n",
          "e",
          "i",
          "m"
        ]
      },
      {
        "cn": "我自己",
        "word": "myself",
        "shuffled": [
          "f",
          "y",
          "e",
          "s",
          "m",
          "l"
        ]
      },
      {
        "cn": "名字",
        "word": "name",
        "shuffled": [
          "e",
          "m",
          "a",
          "n"
        ]
      }
    ]
  },
  "junior-3": {
    "titleZh": "认识你",
    "titleEn": "All About You",
    "story": "Hello, Callum! You are my friend. You have a blue bag. I see you at school. Your book is on the desk. The red pencil is yours. You can carry your bag yourself. I help you find your hat. You smile at me. We are happy.",
    "translation": "你好，Callum！你是我的朋友。你有一个蓝色的包。我在学校看见你。你的书在桌子上。那支红色铅笔是你的。你可以自己背你的包。我帮你找到你的帽子。你对我微笑。我们很开心。",
    "vocabulary": [
      [
        "you",
        "你（主宾语）"
      ],
      [
        "your",
        "你的（接名词）"
      ],
      [
        "yours",
        "你的（独立）"
      ],
      [
        "yourself",
        "你自己"
      ],
      [
        "are",
        "是（与you连用）"
      ],
      [
        "friend",
        "朋友"
      ],
      [
        "school",
        "学校"
      ],
      [
        "desk",
        "书桌"
      ],
      [
        "pencil",
        "铅笔"
      ],
      [
        "hat",
        "帽子"
      ]
    ],
    "grammar": [
      {
        "en": "You are my friend.",
        "cn": "你是我的朋友。",
        "ex": "you 可以作主语。当句子以“你”作为主语时，可以用 you。",
        "spoken": [
          [
            "you 可以作主语。当句子以“你”作为主语时，可以用 you。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "I see you at school.",
        "cn": "我在学校看见你。",
        "ex": "you 也可以作宾语。无论是“你看见我”还是“我看见你”，you 的形式都不变。",
        "spoken": [
          [
            "you 也可以作宾语。无论是“你看见我”还是“我看见你”，you 的形式都不变。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "Your book is on the desk. The pencil is yours.",
        "cn": "你的书在桌子上。那支铅笔是你的。",
        "ex": "your 后面接名词，例如 your book；yours 可以独立表示“你的”。",
        "spoken": [
          [
            "your 后面接名词，例如 your book；yours 可以独立表示“你的”。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "You can carry your bag yourself.",
        "cn": "你可以自己背你的包。",
        "ex": "yourself 表示“你自己”，强调事情是你本人完成的。",
        "spoken": [
          [
            "yourself 表示“你自己”，强调事情是你本人完成的。",
            "zh-CN"
          ]
        ]
      }
    ],
    "questions": [
      {
        "cn": "Goldy在和谁说话？",
        "en": "Who is Goldy talking to?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "妈妈",
            "Mum"
          ],
          [
            "老师",
            "Teacher"
          ]
        ],
        "correct": 0,
        "evidence": "Hello, Callum!"
      },
      {
        "cn": "Callum的包是什么颜色？",
        "en": "What colour is the bag?",
        "options": [
          [
            "红色",
            "Red"
          ],
          [
            "蓝色",
            "Blue"
          ],
          [
            "绿色",
            "Green"
          ],
          [
            "黄色",
            "Yellow"
          ]
        ],
        "correct": 1,
        "evidence": "You have a blue bag."
      },
      {
        "cn": "Callum的书在哪里？",
        "en": "Where is the book?",
        "options": [
          [
            "桌子上",
            "On the desk"
          ],
          [
            "床上",
            "On the bed"
          ],
          [
            "椅子下",
            "Under the chair"
          ],
          [
            "包里",
            "In the bag"
          ]
        ],
        "correct": 0,
        "evidence": "Your book is on the desk."
      },
      {
        "cn": "红色铅笔是谁的？",
        "en": "Whose pencil is it?",
        "options": [
          [
            "Goldy的",
            "Goldy’s"
          ],
          [
            "老师的",
            "Teacher’s"
          ],
          [
            "Callum的",
            "Callum’s"
          ],
          [
            "Jake的",
            "Jake’s"
          ]
        ],
        "correct": 2,
        "evidence": "The red pencil is yours."
      },
      {
        "cn": "Callum可以自己做什么？",
        "en": "What can Callum do himself?",
        "options": [
          [
            "做饭",
            "Cook"
          ],
          [
            "背包",
            "Carry his bag"
          ],
          [
            "游泳",
            "Swim"
          ],
          [
            "开车",
            "Drive"
          ]
        ],
        "correct": 1,
        "evidence": "You can carry your bag yourself."
      }
    ],
    "writing": [
      {
        "cn": "你",
        "word": "you",
        "shuffled": [
          "o",
          "u",
          "y"
        ]
      },
      {
        "cn": "你的（接名词）",
        "word": "your",
        "shuffled": [
          "r",
          "u",
          "o",
          "y"
        ]
      },
      {
        "cn": "你的（独立）",
        "word": "yours",
        "shuffled": [
          "r",
          "s",
          "o",
          "u",
          "y"
        ]
      },
      {
        "cn": "你自己",
        "word": "yourself",
        "shuffled": [
          "f",
          "y",
          "r",
          "o",
          "u",
          "l",
          "e",
          "s"
        ]
      },
      {
        "cn": "朋友",
        "word": "friend",
        "shuffled": [
          "d",
          "n",
          "f",
          "i",
          "r",
          "e"
        ]
      }
    ]
  },
  "junior-4": {
    "titleZh": "认识他（男性）",
    "titleEn": "All About Him",
    "story": "This is Callum. He is my friend. He has a blue bag. I see him at school. His book is on the desk. The red hat is his. He can put his book in his bag himself. Goldy waves to him. He smiles. He is happy.",
    "translation": "这是Callum。他是我的朋友。他有一个蓝色的包。我在学校看见他。他的书在桌子上。那顶红色的帽子是他的。他可以自己把书放进包里。Goldy向他挥手。他笑了。他很开心。",
    "vocabulary": [
      [
        "he",
        "他（主语）"
      ],
      [
        "him",
        "他（宾语）"
      ],
      [
        "his",
        "他的"
      ],
      [
        "himself",
        "他自己"
      ],
      [
        "is",
        "是"
      ],
      [
        "has",
        "有"
      ],
      [
        "friend",
        "朋友"
      ],
      [
        "bag",
        "包"
      ],
      [
        "book",
        "书"
      ],
      [
        "hat",
        "帽子"
      ]
    ],
    "grammar": [
      {
        "en": "He is my friend.",
        "cn": "他是我的朋友。",
        "ex": "he 表示男性的“他”。当“他”是句子的主语时，用 he。",
        "spoken": [
          [
            "he 表示男性的“他”。当“他”是句子的主语时，用 he。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "I see him at school.",
        "cn": "我在学校看见他。",
        "ex": "him 也表示男性的“他”，但作为动作作用的对象时使用 him。",
        "spoken": [
          [
            "him 也表示男性的“他”，但作为动作作用的对象时使用 him。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "His book is on the desk. The hat is his.",
        "cn": "他的书在桌子上。那顶帽子是他的。",
        "ex": "his 表示“他的”，既可以放在名词前面，例如 his book，也可以独立使用，例如 The hat is his。",
        "spoken": [
          [
            "his 表示“他的”，既可以放在名词前面，例如 his book，也可以独立使用，例如 The hat is his。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "He puts the book in his bag himself.",
        "cn": "他自己把书放进他的包里。",
        "ex": "himself 表示“他自己”，强调他亲自完成这件事。",
        "spoken": [
          [
            "himself 表示“他自己”，强调他亲自完成这件事。",
            "zh-CN"
          ]
        ]
      }
    ],
    "questions": [
      {
        "cn": "故事中的男生叫什么？",
        "en": "What is the boy’s name?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "爸爸",
            "Dad"
          ]
        ],
        "correct": 0,
        "evidence": "This is Callum."
      },
      {
        "cn": "Callum的包是什么颜色？",
        "en": "What colour is his bag?",
        "options": [
          [
            "红色",
            "Red"
          ],
          [
            "蓝色",
            "Blue"
          ],
          [
            "绿色",
            "Green"
          ],
          [
            "黄色",
            "Yellow"
          ]
        ],
        "correct": 1,
        "evidence": "He has a blue bag."
      },
      {
        "cn": "Callum的书在哪里？",
        "en": "Where is his book?",
        "options": [
          [
            "桌子上",
            "On the desk"
          ],
          [
            "床上",
            "On the bed"
          ],
          [
            "门后",
            "Behind the door"
          ],
          [
            "椅子下",
            "Under the chair"
          ]
        ],
        "correct": 0,
        "evidence": "His book is on the desk."
      },
      {
        "cn": "那顶红帽子是谁的？",
        "en": "Whose red hat is it?",
        "options": [
          [
            "老师的",
            "Teacher’s"
          ],
          [
            "Goldy的",
            "Goldy’s"
          ],
          [
            "Callum的",
            "Callum’s"
          ],
          [
            "Jake的",
            "Jake’s"
          ]
        ],
        "correct": 2,
        "evidence": "The red hat is his."
      },
      {
        "cn": "谁向Callum挥手？",
        "en": "Who waves to Callum?",
        "options": [
          [
            "妈妈",
            "Mum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "Teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy waves to him."
      }
    ],
    "writing": [
      {
        "cn": "他（主语）",
        "word": "he",
        "shuffled": [
          "e",
          "h"
        ]
      },
      {
        "cn": "他（宾语）",
        "word": "him",
        "shuffled": [
          "m",
          "h",
          "i"
        ]
      },
      {
        "cn": "他的",
        "word": "his",
        "shuffled": [
          "s",
          "h",
          "i"
        ]
      },
      {
        "cn": "他自己",
        "word": "himself",
        "shuffled": [
          "f",
          "i",
          "s",
          "m",
          "h",
          "l",
          "e"
        ]
      },
      {
        "cn": "朋友",
        "word": "friend",
        "shuffled": [
          "d",
          "n",
          "f",
          "i",
          "r",
          "e"
        ]
      }
    ]
  },
  "junior-5": {
    "titleZh": "认识她（女性）",
    "titleEn": "All About Her",
    "story": "This is Goldy. She is my friend. She has a pink bag. I see her at school. Her book is on the desk. The purple pencil is hers. She can put her book in her bag herself. Callum waves to her. She smiles. She is happy.",
    "translation": "这是Goldy。她是我的朋友。她有一个粉色的包。我在学校看见她。她的书在桌子上。那支紫色的铅笔是她的。她可以自己把书放进包里。Callum向她挥手。她笑了。她很开心。",
    "vocabulary": [
      [
        "she",
        "她（主语）"
      ],
      [
        "her",
        "她／她的"
      ],
      [
        "hers",
        "她的（独立）"
      ],
      [
        "herself",
        "她自己"
      ],
      [
        "is",
        "是"
      ],
      [
        "has",
        "有"
      ],
      [
        "friend",
        "朋友"
      ],
      [
        "bag",
        "包"
      ],
      [
        "book",
        "书"
      ],
      [
        "pencil",
        "铅笔"
      ]
    ],
    "grammar": [
      {
        "en": "She is my friend.",
        "cn": "她是我的朋友。",
        "ex": "she 表示女性的“她”，当“她”是句子的主语时，用 she。",
        "spoken": [
          [
            "she 表示女性的“她”，当“她”是句子的主语时，用 she。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "I see her at school.",
        "cn": "我在学校看见她。",
        "ex": "her 可以表示“她”，例如 I see her；也可以放在名词前表示“她的”，例如 her book。",
        "spoken": [
          [
            "her 可以表示“她”，例如 I see her；也可以放在名词前表示“她的”，例如 her book。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "Her book is on the desk. The pencil is hers.",
        "cn": "她的书在桌子上。那支铅笔是她的。",
        "ex": "her 后面接名词表示“她的”，例如 her book；hers 可以独立表示“她的”，例如 The pencil is hers。",
        "spoken": [
          [
            "her 后面接名词表示“她的”，例如 her book；hers 可以独立表示“她的”，例如 The pencil is hers。",
            "zh-CN"
          ]
        ]
      },
      {
        "en": "She puts the book in her bag herself.",
        "cn": "她自己把书放进她的包里。",
        "ex": "herself 表示“她自己”，强调她亲自完成这件事。",
        "spoken": [
          [
            "herself 表示“她自己”，强调她亲自完成这件事。",
            "zh-CN"
          ]
        ]
      }
    ],
    "questions": [
      {
        "cn": "故事中的女生叫什么？",
        "en": "What is the girl’s name?",
        "options": [
          [
            "Goldy",
            "Goldy"
          ],
          [
            "妈妈",
            "Mum"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "朋友",
            "Friend"
          ]
        ],
        "correct": 0,
        "evidence": "This is Goldy."
      },
      {
        "cn": "Goldy的包是什么颜色？",
        "en": "What colour is her bag?",
        "options": [
          [
            "红色",
            "Red"
          ],
          [
            "粉色",
            "Pink"
          ],
          [
            "蓝色",
            "Blue"
          ],
          [
            "绿色",
            "Green"
          ]
        ],
        "correct": 1,
        "evidence": "She has a pink bag."
      },
      {
        "cn": "Goldy的书在哪里？",
        "en": "Where is her book?",
        "options": [
          [
            "桌子上",
            "On the desk"
          ],
          [
            "窗边",
            "By the window"
          ],
          [
            "地板上",
            "On the floor"
          ],
          [
            "椅子下",
            "Under the chair"
          ]
        ],
        "correct": 0,
        "evidence": "Her book is on the desk."
      },
      {
        "cn": "紫色铅笔是谁的？",
        "en": "Whose pencil is it?",
        "options": [
          [
            "老师的",
            "Teacher’s"
          ],
          [
            "Callum的",
            "Callum’s"
          ],
          [
            "Goldy的",
            "Goldy’s"
          ],
          [
            "Jake的",
            "Jake’s"
          ]
        ],
        "correct": 2,
        "evidence": "The purple pencil is hers."
      },
      {
        "cn": "谁向Goldy挥手？",
        "en": "Who waves to Goldy?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "Teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum waves to her."
      }
    ],
    "writing": [
      {
        "cn": "她（主语）",
        "word": "she",
        "shuffled": [
          "e",
          "h",
          "s"
        ]
      },
      {
        "cn": "她／她的",
        "word": "her",
        "shuffled": [
          "r",
          "h",
          "e"
        ]
      },
      {
        "cn": "她的（独立）",
        "word": "hers",
        "shuffled": [
          "s",
          "r",
          "h",
          "e"
        ]
      },
      {
        "cn": "她自己",
        "word": "herself",
        "shuffled": [
          "f",
          "r",
          "e",
          "s",
          "l",
          "h",
          "e"
        ]
      },
      {
        "cn": "朋友",
        "word": "friend",
        "shuffled": [
          "d",
          "n",
          "f",
          "i",
          "r",
          "e"
        ]
      }
    ]
  },
  "junior-1": {
    "titleZh": "家庭成员",
    "titleEn": "Family Members",
    "story": "Goldy and Callum are learning about family members. Goldy says, \"father, mother, and brother.\" Callum shows her sister and grandma. They also learn grandpa, uncle, and aunt. Jake finds the words cousin and baby. All three friends practise together.",
    "translation": "Goldy和Callum正在学习家庭成员。Goldy说：“爸爸、妈妈和兄弟。”Callum给她看姐妹和奶奶。他们还学习爷爷、叔叔和阿姨。Jake找到了堂表兄弟姐妹和婴儿这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "father",
        "爸爸"
      ],
      [
        "mother",
        "妈妈"
      ],
      [
        "brother",
        "兄弟"
      ],
      [
        "sister",
        "姐妹"
      ],
      [
        "grandma",
        "奶奶"
      ],
      [
        "grandpa",
        "爷爷"
      ],
      [
        "uncle",
        "叔叔"
      ],
      [
        "aunt",
        "阿姨"
      ],
      [
        "cousin",
        "堂表兄弟姐妹"
      ],
      [
        "baby",
        "婴儿"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about family members.",
        "cn": "Goldy和Callum正在学习家庭成员。",
        "ex": "本句介绍学习主题“Family Members”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"father, mother, and brother.\" Callum shows her sister and grandma.",
        "cn": "Goldy说：“爸爸、妈妈和兄弟。",
        "ex": "观察这一句如何把姐妹和奶奶放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn grandpa, uncle, and aunt.",
        "cn": "”Callum给她看姐妹和奶奶。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words cousin and baby.",
        "cn": "他们还学习爷爷、叔叔和阿姨。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
  {
    "cn": "故事中，谁说出了 father、mother 和 brother？",
    "en": "Who says father, mother and brother in the story?",
    "options": [
      [
        "Goldy",
        "Goldy"
      ],
      [
        "Callum",
        "Callum"
      ],
      [
        "Jake",
        "Jake"
      ],
      [
        "三个人一起",
        "All three friends"
      ]
    ],
    "correct": 0,
    "evidence": "Goldy says, \"father, mother, and brother.\""
  },
  {
    "cn": "Callum 向 Goldy 展示了哪些家庭成员？",
    "en": "Which family members does Callum show Goldy?",
    "options": [
      [
        "爸爸和妈妈",
        "Father and mother"
      ],
      [
        "爷爷和叔叔",
        "Grandpa and uncle"
      ],
      [
        "姐妹和奶奶",
        "Sister and grandma"
      ],
      [
        "堂表兄弟姐妹和婴儿",
        "Cousin and baby"
      ]
    ],
    "correct": 2,
    "evidence": "Callum shows her sister and grandma."
  },
  {
    "cn": "他们还一起学习了哪一组家庭成员？",
    "en": "Which group of family members do they also learn?",
    "options": [
      [
        "爸爸、妈妈和兄弟",
        "Father, mother and brother"
      ],
      [
        "姐妹和奶奶",
        "Sister and grandma"
      ],
      [
        "堂表兄弟姐妹和婴儿",
        "Cousin and baby"
      ],
      [
        "爷爷、叔叔和阿姨",
        "Grandpa, uncle and aunt"
      ]
    ],
    "correct": 3,
    "evidence": "They also learn grandpa, uncle, and aunt."
  },
  {
    "cn": "故事中，谁找到了 cousin 和 baby 这两个单词？",
    "en": "Who finds the words cousin and baby?",
    "options": [
      [
        "Goldy",
        "Goldy"
      ],
      [
        "Jake",
        "Jake"
      ],
      [
        "Callum",
        "Callum"
      ],
      [
        "老师",
        "The teacher"
      ]
    ],
    "correct": 1,
    "evidence": "Jake finds the words cousin and baby."
  },
  {
    "cn": "短文最后，三个朋友做了什么？",
    "en": "What do the three friends do at the end?",
    "options": [
      [
        "回家了",
        "They go home"
      ],
      [
        "一起吃午饭",
        "They eat lunch together"
      ],
      [
        "一起练习",
        "They practise together"
      ],
      [
        "一起去购物",
        "They go shopping together"
      ]
    ],
    "correct": 2,
    "evidence": "All three friends practise together."
  }
],
    "writing": [
      {
        "cn": "爸爸",
        "word": "father",
        "shuffled": [
          "e",
          "r",
          "f",
          "a",
          "t",
          "h"
        ]
      },
      {
        "cn": "兄弟",
        "word": "brother",
        "shuffled": [
          "e",
          "r",
          "h",
          "t",
          "r",
          "o",
          "b"
        ]
      },
      {
        "cn": "奶奶",
        "word": "grandma",
        "shuffled": [
          "d",
          "r",
          "g",
          "a",
          "m",
          "n",
          "a"
        ]
      },
      {
        "cn": "阿姨",
        "word": "aunt",
        "shuffled": [
          "t",
          "u",
          "a",
          "n"
        ]
      },
      {
        "cn": "婴儿",
        "word": "baby",
        "shuffled": [
          "b",
          "b",
          "a",
          "y"
        ]
      }
    ]
  },
  "junior-6": {
    "titleZh": "常见动物",
    "titleEn": "Animals",
    "story": "Goldy and Callum are learning about animals. Goldy says, \"cat, dog, and rabbit.\" Callum shows her tiger and lion. They also learn elephant, monkey, and panda. Jake finds the words giraffe and zebra. All three friends practise together.",
    "translation": "Goldy和Callum正在学习常见动物。Goldy说：“猫、狗和兔子。”Callum给她看老虎和狮子。他们还学习大象、猴子和熊猫。Jake找到了长颈鹿和斑马这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "cat",
        "猫"
      ],
      [
        "dog",
        "狗"
      ],
      [
        "rabbit",
        "兔子"
      ],
      [
        "tiger",
        "老虎"
      ],
      [
        "lion",
        "狮子"
      ],
      [
        "elephant",
        "大象"
      ],
      [
        "monkey",
        "猴子"
      ],
      [
        "panda",
        "熊猫"
      ],
      [
        "giraffe",
        "长颈鹿"
      ],
      [
        "zebra",
        "斑马"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about animals.",
        "cn": "Goldy和Callum正在学习常见动物。",
        "ex": "本句介绍学习主题“Animals”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"cat, dog, and rabbit.\" Callum shows her tiger and lion.",
        "cn": "Goldy说：“猫、狗和兔子。",
        "ex": "观察这一句如何把老虎和狮子放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn elephant, monkey, and panda.",
        "cn": "”Callum给她看老虎和狮子。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words giraffe and zebra.",
        "cn": "他们还学习大象、猴子和熊猫。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "兔子",
            "rabbit"
          ],
          [
            "猫",
            "cat"
          ],
          [
            "大象",
            "elephant"
          ],
          [
            "长颈鹿",
            "giraffe"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "狗",
            "dog"
          ],
          [
            "老虎",
            "tiger"
          ],
          [
            "长颈鹿",
            "giraffe"
          ],
          [
            "猴子",
            "monkey"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "猫",
        "word": "cat",
        "shuffled": [
          "t",
          "a",
          "c"
        ]
      },
      {
        "cn": "兔子",
        "word": "rabbit",
        "shuffled": [
          "r",
          "i",
          "b",
          "a",
          "t",
          "b"
        ]
      },
      {
        "cn": "狮子",
        "word": "lion",
        "shuffled": [
          "o",
          "l",
          "i",
          "n"
        ]
      },
      {
        "cn": "熊猫",
        "word": "panda",
        "shuffled": [
          "n",
          "p",
          "a",
          "d",
          "a"
        ]
      },
      {
        "cn": "斑马",
        "word": "zebra",
        "shuffled": [
          "e",
          "a",
          "r",
          "b",
          "z"
        ]
      }
    ]
  },
  "junior-7": {
    "titleZh": "飞鸟与昆虫",
    "titleEn": "Birds and Insects",
    "story": "Goldy and Callum are learning about birds and insects. Goldy says, \"bird, eagle, and duck.\" Callum shows her goose and owl. They also learn parrot, butterfly, and bee. Jake finds the words ant and spider. All three friends practise together.",
    "translation": "Goldy和Callum正在学习飞鸟与昆虫。Goldy说：“鸟、鹰和鸭子。”Callum给她看鹅和猫头鹰。他们还学习鹦鹉、蝴蝶和蜜蜂。Jake找到了蚂蚁和蜘蛛这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "bird",
        "鸟"
      ],
      [
        "eagle",
        "鹰"
      ],
      [
        "duck",
        "鸭子"
      ],
      [
        "goose",
        "鹅"
      ],
      [
        "owl",
        "猫头鹰"
      ],
      [
        "parrot",
        "鹦鹉"
      ],
      [
        "butterfly",
        "蝴蝶"
      ],
      [
        "bee",
        "蜜蜂"
      ],
      [
        "ant",
        "蚂蚁"
      ],
      [
        "spider",
        "蜘蛛"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about birds and insects.",
        "cn": "Goldy和Callum正在学习飞鸟与昆虫。",
        "ex": "本句介绍学习主题“Birds and Insects”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"bird, eagle, and duck.\" Callum shows her goose and owl.",
        "cn": "Goldy说：“鸟、鹰和鸭子。",
        "ex": "观察这一句如何把鹅和猫头鹰放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn parrot, butterfly, and bee.",
        "cn": "”Callum给她看鹅和猫头鹰。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words ant and spider.",
        "cn": "他们还学习鹦鹉、蝴蝶和蜜蜂。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "鸭子",
            "duck"
          ],
          [
            "鸟",
            "bird"
          ],
          [
            "鹦鹉",
            "parrot"
          ],
          [
            "蚂蚁",
            "ant"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "鹰",
            "eagle"
          ],
          [
            "鹅",
            "goose"
          ],
          [
            "蚂蚁",
            "ant"
          ],
          [
            "蝴蝶",
            "butterfly"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "鸟",
        "word": "bird",
        "shuffled": [
          "d",
          "r",
          "i",
          "b"
        ]
      },
      {
        "cn": "鸭子",
        "word": "duck",
        "shuffled": [
          "u",
          "d",
          "k",
          "c"
        ]
      },
      {
        "cn": "猫头鹰",
        "word": "owl",
        "shuffled": [
          "w",
          "o",
          "l"
        ]
      },
      {
        "cn": "蜜蜂",
        "word": "bee",
        "shuffled": [
          "e",
          "e",
          "b"
        ]
      },
      {
        "cn": "蜘蛛",
        "word": "spider",
        "shuffled": [
          "p",
          "r",
          "d",
          "e",
          "i",
          "s"
        ]
      }
    ]
  },
  "junior-8": {
    "titleZh": "水果乐园",
    "titleEn": "Fruit",
    "story": "Goldy and Callum are learning about fruit. Goldy says, \"apple, banana, and pear.\" Callum shows her peach and grape. They also learn melon, lemon, and cherry. Jake finds the words mango and plum. All three friends practise together.",
    "translation": "Goldy和Callum正在学习水果乐园。Goldy说：“苹果、香蕉和梨。”Callum给她看桃子和葡萄。他们还学习瓜、柠檬和樱桃。Jake找到了芒果和李子这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "apple",
        "苹果"
      ],
      [
        "banana",
        "香蕉"
      ],
      [
        "pear",
        "梨"
      ],
      [
        "peach",
        "桃子"
      ],
      [
        "grape",
        "葡萄"
      ],
      [
        "melon",
        "瓜"
      ],
      [
        "lemon",
        "柠檬"
      ],
      [
        "cherry",
        "樱桃"
      ],
      [
        "mango",
        "芒果"
      ],
      [
        "plum",
        "李子"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about fruit.",
        "cn": "Goldy和Callum正在学习水果乐园。",
        "ex": "本句介绍学习主题“Fruit”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"apple, banana, and pear.\" Callum shows her peach and grape.",
        "cn": "Goldy说：“苹果、香蕉和梨。",
        "ex": "观察这一句如何把桃子和葡萄放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn melon, lemon, and cherry.",
        "cn": "”Callum给她看桃子和葡萄。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words mango and plum.",
        "cn": "他们还学习瓜、柠檬和樱桃。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "梨",
            "pear"
          ],
          [
            "苹果",
            "apple"
          ],
          [
            "瓜",
            "melon"
          ],
          [
            "芒果",
            "mango"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "香蕉",
            "banana"
          ],
          [
            "桃子",
            "peach"
          ],
          [
            "芒果",
            "mango"
          ],
          [
            "柠檬",
            "lemon"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "苹果",
        "word": "apple",
        "shuffled": [
          "a",
          "l",
          "p",
          "p",
          "e"
        ]
      },
      {
        "cn": "梨",
        "word": "pear",
        "shuffled": [
          "a",
          "e",
          "r",
          "p"
        ]
      },
      {
        "cn": "葡萄",
        "word": "grape",
        "shuffled": [
          "g",
          "e",
          "a",
          "p",
          "r"
        ]
      },
      {
        "cn": "樱桃",
        "word": "cherry",
        "shuffled": [
          "r",
          "y",
          "e",
          "r",
          "c",
          "h"
        ]
      },
      {
        "cn": "李子",
        "word": "plum",
        "shuffled": [
          "p",
          "u",
          "m",
          "l"
        ]
      }
    ]
  },
  "junior-9": {
    "titleZh": "蔬菜市场",
    "titleEn": "Vegetables",
    "story": "Goldy and Callum are learning about vegetables. Goldy says, \"carrot, potato, and tomato.\" Callum shows her onion and cabbage. They also learn broccoli, pumpkin, and pepper. Jake finds the words cucumber and spinach. All three friends practise together.",
    "translation": "Goldy和Callum正在学习蔬菜市场。Goldy说：“胡萝卜、土豆和西红柿。”Callum给她看洋葱和卷心菜。他们还学习西兰花、南瓜和甜椒。Jake找到了黄瓜和菠菜这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "carrot",
        "胡萝卜"
      ],
      [
        "potato",
        "土豆"
      ],
      [
        "tomato",
        "西红柿"
      ],
      [
        "onion",
        "洋葱"
      ],
      [
        "cabbage",
        "卷心菜"
      ],
      [
        "broccoli",
        "西兰花"
      ],
      [
        "pumpkin",
        "南瓜"
      ],
      [
        "pepper",
        "甜椒"
      ],
      [
        "cucumber",
        "黄瓜"
      ],
      [
        "spinach",
        "菠菜"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about vegetables.",
        "cn": "Goldy和Callum正在学习蔬菜市场。",
        "ex": "本句介绍学习主题“Vegetables”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"carrot, potato, and tomato.\" Callum shows her onion and cabbage.",
        "cn": "Goldy说：“胡萝卜、土豆和西红柿。",
        "ex": "观察这一句如何把洋葱和卷心菜放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn broccoli, pumpkin, and pepper.",
        "cn": "”Callum给她看洋葱和卷心菜。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words cucumber and spinach.",
        "cn": "他们还学习西兰花、南瓜和甜椒。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "西红柿",
            "tomato"
          ],
          [
            "胡萝卜",
            "carrot"
          ],
          [
            "西兰花",
            "broccoli"
          ],
          [
            "黄瓜",
            "cucumber"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "土豆",
            "potato"
          ],
          [
            "洋葱",
            "onion"
          ],
          [
            "黄瓜",
            "cucumber"
          ],
          [
            "南瓜",
            "pumpkin"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "胡萝卜",
        "word": "carrot",
        "shuffled": [
          "r",
          "c",
          "o",
          "a",
          "t",
          "r"
        ]
      },
      {
        "cn": "西红柿",
        "word": "tomato",
        "shuffled": [
          "o",
          "t",
          "o",
          "a",
          "t",
          "m"
        ]
      },
      {
        "cn": "卷心菜",
        "word": "cabbage",
        "shuffled": [
          "b",
          "b",
          "a",
          "a",
          "g",
          "e",
          "c"
        ]
      },
      {
        "cn": "甜椒",
        "word": "pepper",
        "shuffled": [
          "p",
          "p",
          "e",
          "e",
          "p",
          "r"
        ]
      },
      {
        "cn": "菠菜",
        "word": "spinach",
        "shuffled": [
          "c",
          "p",
          "h",
          "a",
          "n",
          "i",
          "s"
        ]
      }
    ]
  },
  "junior-10": {
    "titleZh": "三餐饮食",
    "titleEn": "Meals",
    "story": "Goldy and Callum are learning about meals. Goldy says, \"breakfast, lunch, and dinner.\" Callum shows her bread and rice. They also learn noodles, egg, and soup. Jake finds the words cheese and yogurt. All three friends practise together.",
    "translation": "Goldy和Callum正在学习三餐饮食。Goldy说：“早餐、午餐和晚餐。”Callum给她看面包和米饭。他们还学习面条、鸡蛋和汤。Jake找到了奶酪和酸奶这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "breakfast",
        "早餐"
      ],
      [
        "lunch",
        "午餐"
      ],
      [
        "dinner",
        "晚餐"
      ],
      [
        "bread",
        "面包"
      ],
      [
        "rice",
        "米饭"
      ],
      [
        "noodles",
        "面条"
      ],
      [
        "egg",
        "鸡蛋"
      ],
      [
        "soup",
        "汤"
      ],
      [
        "cheese",
        "奶酪"
      ],
      [
        "yogurt",
        "酸奶"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about meals.",
        "cn": "Goldy和Callum正在学习三餐饮食。",
        "ex": "本句介绍学习主题“Meals”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"breakfast, lunch, and dinner.\" Callum shows her bread and rice.",
        "cn": "Goldy说：“早餐、午餐和晚餐。",
        "ex": "观察这一句如何把面包和米饭放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn noodles, egg, and soup.",
        "cn": "”Callum给她看面包和米饭。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words cheese and yogurt.",
        "cn": "他们还学习面条、鸡蛋和汤。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "晚餐",
            "dinner"
          ],
          [
            "早餐",
            "breakfast"
          ],
          [
            "面条",
            "noodles"
          ],
          [
            "奶酪",
            "cheese"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "午餐",
            "lunch"
          ],
          [
            "面包",
            "bread"
          ],
          [
            "奶酪",
            "cheese"
          ],
          [
            "鸡蛋",
            "egg"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "早餐",
        "word": "breakfast",
        "shuffled": [
          "a",
          "s",
          "r",
          "a",
          "t",
          "f",
          "b",
          "k",
          "e"
        ]
      },
      {
        "cn": "晚餐",
        "word": "dinner",
        "shuffled": [
          "i",
          "r",
          "n",
          "e",
          "d",
          "n"
        ]
      },
      {
        "cn": "米饭",
        "word": "rice",
        "shuffled": [
          "c",
          "r",
          "i",
          "e"
        ]
      },
      {
        "cn": "汤",
        "word": "soup",
        "shuffled": [
          "u",
          "o",
          "p",
          "s"
        ]
      },
      {
        "cn": "酸奶",
        "word": "yogurt",
        "shuffled": [
          "y",
          "g",
          "u",
          "t",
          "o",
          "r"
        ]
      }
    ]
  },
  "junior-11": {
    "titleZh": "饮料和味道",
    "titleEn": "Drinks and Taste",
    "story": "Goldy and Callum are learning about drinks and taste. Goldy says, \"water, milk, and juice.\" Callum shows her tea and coffee. They also learn sweet, sour, and salty. Jake finds the words bitter and spicy. All three friends practise together.",
    "translation": "Goldy和Callum正在学习饮料和味道。Goldy说：“水、牛奶和果汁。”Callum给她看茶和咖啡。他们还学习甜的、酸的和咸的。Jake找到了苦的和辣的这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "water",
        "水"
      ],
      [
        "milk",
        "牛奶"
      ],
      [
        "juice",
        "果汁"
      ],
      [
        "tea",
        "茶"
      ],
      [
        "coffee",
        "咖啡"
      ],
      [
        "sweet",
        "甜的"
      ],
      [
        "sour",
        "酸的"
      ],
      [
        "salty",
        "咸的"
      ],
      [
        "bitter",
        "苦的"
      ],
      [
        "spicy",
        "辣的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about drinks and taste.",
        "cn": "Goldy和Callum正在学习饮料和味道。",
        "ex": "本句介绍学习主题“Drinks and Taste”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"water, milk, and juice.\" Callum shows her tea and coffee.",
        "cn": "Goldy说：“水、牛奶和果汁。",
        "ex": "观察这一句如何把茶和咖啡放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn sweet, sour, and salty.",
        "cn": "”Callum给她看茶和咖啡。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words bitter and spicy.",
        "cn": "他们还学习甜的、酸的和咸的。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "果汁",
            "juice"
          ],
          [
            "水",
            "water"
          ],
          [
            "甜的",
            "sweet"
          ],
          [
            "苦的",
            "bitter"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "牛奶",
            "milk"
          ],
          [
            "茶",
            "tea"
          ],
          [
            "苦的",
            "bitter"
          ],
          [
            "酸的",
            "sour"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "水",
        "word": "water",
        "shuffled": [
          "r",
          "t",
          "e",
          "a",
          "w"
        ]
      },
      {
        "cn": "果汁",
        "word": "juice",
        "shuffled": [
          "j",
          "e",
          "i",
          "c",
          "u"
        ]
      },
      {
        "cn": "咖啡",
        "word": "coffee",
        "shuffled": [
          "o",
          "e",
          "f",
          "f",
          "c",
          "e"
        ]
      },
      {
        "cn": "咸的",
        "word": "salty",
        "shuffled": [
          "a",
          "l",
          "y",
          "t",
          "s"
        ]
      },
      {
        "cn": "辣的",
        "word": "spicy",
        "shuffled": [
          "p",
          "s",
          "y",
          "c",
          "i"
        ]
      }
    ]
  },
  "junior-12": {
    "titleZh": "我的卧室",
    "titleEn": "My Bedroom",
    "story": "Goldy and Callum are learning about my bedroom. Goldy says, \"bed, pillow, and blanket.\" Callum shows her wardrobe and lamp. They also learn mirror, curtain, and shelf. Jake finds the words drawer and carpet. All three friends practise together.",
    "translation": "Goldy和Callum正在学习我的卧室。Goldy说：“床、枕头和毯子。”Callum给她看衣柜和台灯。他们还学习镜子、窗帘和架子。Jake找到了抽屉和地毯这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "bed",
        "床"
      ],
      [
        "pillow",
        "枕头"
      ],
      [
        "blanket",
        "毯子"
      ],
      [
        "wardrobe",
        "衣柜"
      ],
      [
        "lamp",
        "台灯"
      ],
      [
        "mirror",
        "镜子"
      ],
      [
        "curtain",
        "窗帘"
      ],
      [
        "shelf",
        "架子"
      ],
      [
        "drawer",
        "抽屉"
      ],
      [
        "carpet",
        "地毯"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about my bedroom.",
        "cn": "Goldy和Callum正在学习我的卧室。",
        "ex": "本句介绍学习主题“My Bedroom”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"bed, pillow, and blanket.\" Callum shows her wardrobe and lamp.",
        "cn": "Goldy说：“床、枕头和毯子。",
        "ex": "观察这一句如何把衣柜和台灯放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn mirror, curtain, and shelf.",
        "cn": "”Callum给她看衣柜和台灯。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words drawer and carpet.",
        "cn": "他们还学习镜子、窗帘和架子。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "毯子",
            "blanket"
          ],
          [
            "床",
            "bed"
          ],
          [
            "镜子",
            "mirror"
          ],
          [
            "抽屉",
            "drawer"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "枕头",
            "pillow"
          ],
          [
            "衣柜",
            "wardrobe"
          ],
          [
            "抽屉",
            "drawer"
          ],
          [
            "窗帘",
            "curtain"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "床",
        "word": "bed",
        "shuffled": [
          "e",
          "b",
          "d"
        ]
      },
      {
        "cn": "毯子",
        "word": "blanket",
        "shuffled": [
          "a",
          "t",
          "n",
          "b",
          "l",
          "k",
          "e"
        ]
      },
      {
        "cn": "台灯",
        "word": "lamp",
        "shuffled": [
          "m",
          "l",
          "a",
          "p"
        ]
      },
      {
        "cn": "架子",
        "word": "shelf",
        "shuffled": [
          "f",
          "e",
          "l",
          "h",
          "s"
        ]
      },
      {
        "cn": "地毯",
        "word": "carpet",
        "shuffled": [
          "p",
          "a",
          "c",
          "e",
          "r",
          "t"
        ]
      }
    ]
  },
  "junior-13": {
    "titleZh": "厨房物品",
    "titleEn": "Kitchen Objects",
    "story": "Goldy and Callum are learning about kitchen objects. Goldy says, \"plate, bowl, and spoon.\" Callum shows her fork and knife. They also learn cup, kettle, and pan. Jake finds the words oven and fridge. All three friends practise together.",
    "translation": "Goldy和Callum正在学习厨房物品。Goldy说：“盘子、碗和勺子。”Callum给她看叉子和刀。他们还学习杯子、水壶和平底锅。Jake找到了烤箱和冰箱这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "plate",
        "盘子"
      ],
      [
        "bowl",
        "碗"
      ],
      [
        "spoon",
        "勺子"
      ],
      [
        "fork",
        "叉子"
      ],
      [
        "knife",
        "刀"
      ],
      [
        "cup",
        "杯子"
      ],
      [
        "kettle",
        "水壶"
      ],
      [
        "pan",
        "平底锅"
      ],
      [
        "oven",
        "烤箱"
      ],
      [
        "fridge",
        "冰箱"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about kitchen objects.",
        "cn": "Goldy和Callum正在学习厨房物品。",
        "ex": "本句介绍学习主题“Kitchen Objects”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"plate, bowl, and spoon.\" Callum shows her fork and knife.",
        "cn": "Goldy说：“盘子、碗和勺子。",
        "ex": "观察这一句如何把叉子和刀放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn cup, kettle, and pan.",
        "cn": "”Callum给她看叉子和刀。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words oven and fridge.",
        "cn": "他们还学习杯子、水壶和平底锅。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "勺子",
            "spoon"
          ],
          [
            "盘子",
            "plate"
          ],
          [
            "杯子",
            "cup"
          ],
          [
            "烤箱",
            "oven"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "碗",
            "bowl"
          ],
          [
            "叉子",
            "fork"
          ],
          [
            "烤箱",
            "oven"
          ],
          [
            "水壶",
            "kettle"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "盘子",
        "word": "plate",
        "shuffled": [
          "p",
          "e",
          "a",
          "l",
          "t"
        ]
      },
      {
        "cn": "勺子",
        "word": "spoon",
        "shuffled": [
          "s",
          "o",
          "n",
          "o",
          "p"
        ]
      },
      {
        "cn": "刀",
        "word": "knife",
        "shuffled": [
          "e",
          "i",
          "k",
          "n",
          "f"
        ]
      },
      {
        "cn": "平底锅",
        "word": "pan",
        "shuffled": [
          "a",
          "p",
          "n"
        ]
      },
      {
        "cn": "冰箱",
        "word": "fridge",
        "shuffled": [
          "i",
          "g",
          "e",
          "r",
          "f",
          "d"
        ]
      }
    ]
  },
  "junior-14": {
    "titleZh": "浴室用品",
    "titleEn": "Bathroom",
    "story": "Goldy and Callum are learning about bathroom. Goldy says, \"soap, towel, and toothbrush.\" Callum shows her toothpaste and shampoo. They also learn shower, bath, and sink. Jake finds the words comb and tissue. All three friends practise together.",
    "translation": "Goldy和Callum正在学习浴室用品。Goldy说：“肥皂、毛巾和牙刷。”Callum给她看牙膏和洗发水。他们还学习淋浴、浴缸和洗手池。Jake找到了梳子和纸巾这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "soap",
        "肥皂"
      ],
      [
        "towel",
        "毛巾"
      ],
      [
        "toothbrush",
        "牙刷"
      ],
      [
        "toothpaste",
        "牙膏"
      ],
      [
        "shampoo",
        "洗发水"
      ],
      [
        "shower",
        "淋浴"
      ],
      [
        "bath",
        "浴缸"
      ],
      [
        "sink",
        "洗手池"
      ],
      [
        "comb",
        "梳子"
      ],
      [
        "tissue",
        "纸巾"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about bathroom.",
        "cn": "Goldy和Callum正在学习浴室用品。",
        "ex": "本句介绍学习主题“Bathroom”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"soap, towel, and toothbrush.\" Callum shows her toothpaste and shampoo.",
        "cn": "Goldy说：“肥皂、毛巾和牙刷。",
        "ex": "观察这一句如何把牙膏和洗发水放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn shower, bath, and sink.",
        "cn": "”Callum给她看牙膏和洗发水。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words comb and tissue.",
        "cn": "他们还学习淋浴、浴缸和洗手池。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "牙刷",
            "toothbrush"
          ],
          [
            "肥皂",
            "soap"
          ],
          [
            "淋浴",
            "shower"
          ],
          [
            "梳子",
            "comb"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "毛巾",
            "towel"
          ],
          [
            "牙膏",
            "toothpaste"
          ],
          [
            "梳子",
            "comb"
          ],
          [
            "浴缸",
            "bath"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "肥皂",
        "word": "soap",
        "shuffled": [
          "o",
          "s",
          "p",
          "a"
        ]
      },
      {
        "cn": "牙刷",
        "word": "toothbrush",
        "shuffled": [
          "o",
          "r",
          "b",
          "s",
          "o",
          "h",
          "t",
          "t",
          "u",
          "h"
        ]
      },
      {
        "cn": "洗发水",
        "word": "shampoo",
        "shuffled": [
          "s",
          "o",
          "p",
          "m",
          "h",
          "a",
          "o"
        ]
      },
      {
        "cn": "洗手池",
        "word": "sink",
        "shuffled": [
          "n",
          "i",
          "k",
          "s"
        ]
      },
      {
        "cn": "纸巾",
        "word": "tissue",
        "shuffled": [
          "i",
          "e",
          "s",
          "s",
          "t",
          "u"
        ]
      }
    ]
  },
  "junior-15": {
    "titleZh": "学校用品",
    "titleEn": "School Supplies",
    "story": "Goldy and Callum are learning about school supplies. Goldy says, \"pencil, eraser, and ruler.\" Callum shows her notebook and backpack. They also learn marker, crayon, and scissors. Jake finds the words glue and paper. All three friends practise together.",
    "translation": "Goldy和Callum正在学习学校用品。Goldy说：“铅笔、橡皮和尺子。”Callum给她看笔记本和双肩包。他们还学习记号笔、蜡笔和剪刀。Jake找到了胶水和纸这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "pencil",
        "铅笔"
      ],
      [
        "eraser",
        "橡皮"
      ],
      [
        "ruler",
        "尺子"
      ],
      [
        "notebook",
        "笔记本"
      ],
      [
        "backpack",
        "双肩包"
      ],
      [
        "marker",
        "记号笔"
      ],
      [
        "crayon",
        "蜡笔"
      ],
      [
        "scissors",
        "剪刀"
      ],
      [
        "glue",
        "胶水"
      ],
      [
        "paper",
        "纸"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about school supplies.",
        "cn": "Goldy和Callum正在学习学校用品。",
        "ex": "本句介绍学习主题“School Supplies”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"pencil, eraser, and ruler.\" Callum shows her notebook and backpack.",
        "cn": "Goldy说：“铅笔、橡皮和尺子。",
        "ex": "观察这一句如何把笔记本和双肩包放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn marker, crayon, and scissors.",
        "cn": "”Callum给她看笔记本和双肩包。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words glue and paper.",
        "cn": "他们还学习记号笔、蜡笔和剪刀。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "尺子",
            "ruler"
          ],
          [
            "铅笔",
            "pencil"
          ],
          [
            "记号笔",
            "marker"
          ],
          [
            "胶水",
            "glue"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "橡皮",
            "eraser"
          ],
          [
            "笔记本",
            "notebook"
          ],
          [
            "胶水",
            "glue"
          ],
          [
            "蜡笔",
            "crayon"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "铅笔",
        "word": "pencil",
        "shuffled": [
          "l",
          "i",
          "n",
          "p",
          "c",
          "e"
        ]
      },
      {
        "cn": "尺子",
        "word": "ruler",
        "shuffled": [
          "r",
          "l",
          "u",
          "r",
          "e"
        ]
      },
      {
        "cn": "双肩包",
        "word": "backpack",
        "shuffled": [
          "p",
          "k",
          "c",
          "c",
          "k",
          "a",
          "a",
          "b"
        ]
      },
      {
        "cn": "剪刀",
        "word": "scissors",
        "shuffled": [
          "o",
          "c",
          "s",
          "r",
          "i",
          "s",
          "s",
          "s"
        ]
      },
      {
        "cn": "纸",
        "word": "paper",
        "shuffled": [
          "r",
          "p",
          "e",
          "p",
          "a"
        ]
      }
    ]
  },
  "junior-16": {
    "titleZh": "教室活动",
    "titleEn": "Classroom Actions",
    "story": "Goldy and Callum are learning about classroom actions. Goldy says, \"read, write, and listen.\" Callum shows her speak and draw. They also learn colour, answer, and ask. Jake finds the words learn and practice. All three friends practise together.",
    "translation": "Goldy和Callum正在学习教室活动。Goldy说：“阅读、书写和听。”Callum给她看说和画画。他们还学习涂色、回答和提问。Jake找到了学习和练习这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "read",
        "阅读"
      ],
      [
        "write",
        "书写"
      ],
      [
        "listen",
        "听"
      ],
      [
        "speak",
        "说"
      ],
      [
        "draw",
        "画画"
      ],
      [
        "colour",
        "涂色"
      ],
      [
        "answer",
        "回答"
      ],
      [
        "ask",
        "提问"
      ],
      [
        "learn",
        "学习"
      ],
      [
        "practice",
        "练习"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about classroom actions.",
        "cn": "Goldy和Callum正在学习教室活动。",
        "ex": "本句介绍学习主题“Classroom Actions”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"read, write, and listen.\" Callum shows her speak and draw.",
        "cn": "Goldy说：“阅读、书写和听。",
        "ex": "观察这一句如何把说和画画放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn colour, answer, and ask.",
        "cn": "”Callum给她看说和画画。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words learn and practice.",
        "cn": "他们还学习涂色、回答和提问。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "听",
            "listen"
          ],
          [
            "阅读",
            "read"
          ],
          [
            "涂色",
            "colour"
          ],
          [
            "学习",
            "learn"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "书写",
            "write"
          ],
          [
            "说",
            "speak"
          ],
          [
            "学习",
            "learn"
          ],
          [
            "回答",
            "answer"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "阅读",
        "word": "read",
        "shuffled": [
          "e",
          "r",
          "a",
          "d"
        ]
      },
      {
        "cn": "听",
        "word": "listen",
        "shuffled": [
          "t",
          "n",
          "e",
          "l",
          "s",
          "i"
        ]
      },
      {
        "cn": "画画",
        "word": "draw",
        "shuffled": [
          "w",
          "r",
          "a",
          "d"
        ]
      },
      {
        "cn": "提问",
        "word": "ask",
        "shuffled": [
          "s",
          "a",
          "k"
        ]
      },
      {
        "cn": "练习",
        "word": "practice",
        "shuffled": [
          "p",
          "c",
          "i",
          "r",
          "a",
          "e",
          "t",
          "c"
        ]
      }
    ]
  },
  "junior-17": {
    "titleZh": "日常动作",
    "titleEn": "Daily Actions",
    "story": "Goldy and Callum are learning about daily actions. Goldy says, \"walk, run, and jump.\" Callum shows her climb and swim. They also learn dance, sing, and laugh. Jake finds the words smile and rest. All three friends practise together.",
    "translation": "Goldy和Callum正在学习日常动作。Goldy说：“走路、跑和跳。”Callum给她看攀爬和游泳。他们还学习跳舞、唱歌和笑。Jake找到了微笑和休息这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "walk",
        "走路"
      ],
      [
        "run",
        "跑"
      ],
      [
        "jump",
        "跳"
      ],
      [
        "climb",
        "攀爬"
      ],
      [
        "swim",
        "游泳"
      ],
      [
        "dance",
        "跳舞"
      ],
      [
        "sing",
        "唱歌"
      ],
      [
        "laugh",
        "笑"
      ],
      [
        "smile",
        "微笑"
      ],
      [
        "rest",
        "休息"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about daily actions.",
        "cn": "Goldy和Callum正在学习日常动作。",
        "ex": "本句介绍学习主题“Daily Actions”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"walk, run, and jump.\" Callum shows her climb and swim.",
        "cn": "Goldy说：“走路、跑和跳。",
        "ex": "观察这一句如何把攀爬和游泳放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn dance, sing, and laugh.",
        "cn": "”Callum给她看攀爬和游泳。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words smile and rest.",
        "cn": "他们还学习跳舞、唱歌和笑。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "跳",
            "jump"
          ],
          [
            "走路",
            "walk"
          ],
          [
            "跳舞",
            "dance"
          ],
          [
            "微笑",
            "smile"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "跑",
            "run"
          ],
          [
            "攀爬",
            "climb"
          ],
          [
            "微笑",
            "smile"
          ],
          [
            "唱歌",
            "sing"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "走路",
        "word": "walk",
        "shuffled": [
          "k",
          "w",
          "l",
          "a"
        ]
      },
      {
        "cn": "跳",
        "word": "jump",
        "shuffled": [
          "u",
          "p",
          "j",
          "m"
        ]
      },
      {
        "cn": "游泳",
        "word": "swim",
        "shuffled": [
          "m",
          "s",
          "w",
          "i"
        ]
      },
      {
        "cn": "笑",
        "word": "laugh",
        "shuffled": [
          "l",
          "a",
          "g",
          "u",
          "h"
        ]
      },
      {
        "cn": "休息",
        "word": "rest",
        "shuffled": [
          "r",
          "e",
          "t",
          "s"
        ]
      }
    ]
  },
  "junior-18": {
    "titleZh": "快乐与情绪",
    "titleEn": "Feelings",
    "story": "Goldy and Callum are learning about feelings. Goldy says, \"happy, sad, and angry.\" Callum shows her afraid and excited. They also learn tired, calm, and proud. Jake finds the words shy and lonely. All three friends practise together.",
    "translation": "Goldy和Callum正在学习快乐与情绪。Goldy说：“开心的、难过的和生气的。”Callum给她看害怕的和兴奋的。他们还学习疲劳的、平静的和自豪的。Jake找到了害羞的和孤单的这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "happy",
        "开心的"
      ],
      [
        "sad",
        "难过的"
      ],
      [
        "angry",
        "生气的"
      ],
      [
        "afraid",
        "害怕的"
      ],
      [
        "excited",
        "兴奋的"
      ],
      [
        "tired",
        "疲劳的"
      ],
      [
        "calm",
        "平静的"
      ],
      [
        "proud",
        "自豪的"
      ],
      [
        "shy",
        "害羞的"
      ],
      [
        "lonely",
        "孤单的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about feelings.",
        "cn": "Goldy和Callum正在学习快乐与情绪。",
        "ex": "本句介绍学习主题“Feelings”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"happy, sad, and angry.\" Callum shows her afraid and excited.",
        "cn": "Goldy说：“开心的、难过的和生气的。",
        "ex": "观察这一句如何把害怕的和兴奋的放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn tired, calm, and proud.",
        "cn": "”Callum给她看害怕的和兴奋的。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words shy and lonely.",
        "cn": "他们还学习疲劳的、平静的和自豪的。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "生气的",
            "angry"
          ],
          [
            "开心的",
            "happy"
          ],
          [
            "疲劳的",
            "tired"
          ],
          [
            "害羞的",
            "shy"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "难过的",
            "sad"
          ],
          [
            "害怕的",
            "afraid"
          ],
          [
            "害羞的",
            "shy"
          ],
          [
            "平静的",
            "calm"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "开心的",
        "word": "happy",
        "shuffled": [
          "p",
          "p",
          "y",
          "h",
          "a"
        ]
      },
      {
        "cn": "生气的",
        "word": "angry",
        "shuffled": [
          "g",
          "r",
          "n",
          "a",
          "y"
        ]
      },
      {
        "cn": "兴奋的",
        "word": "excited",
        "shuffled": [
          "t",
          "d",
          "e",
          "e",
          "x",
          "c",
          "i"
        ]
      },
      {
        "cn": "自豪的",
        "word": "proud",
        "shuffled": [
          "d",
          "u",
          "p",
          "o",
          "r"
        ]
      },
      {
        "cn": "孤单的",
        "word": "lonely",
        "shuffled": [
          "l",
          "y",
          "o",
          "e",
          "l",
          "n"
        ]
      }
    ]
  },
  "junior-19": {
    "titleZh": "天气变化",
    "titleEn": "Weather",
    "story": "Goldy and Callum are learning about weather. Goldy says, \"sunny, rainy, and cloudy.\" Callum shows her windy and snowy. They also learn stormy, hot, and cold. Jake finds the words warm and cool. All three friends practise together.",
    "translation": "Goldy和Callum正在学习天气变化。Goldy说：“晴朗的、下雨的和多云的。”Callum给她看刮风的和下雪的。他们还学习暴风雨的、炎热的和寒冷的。Jake找到了温暖的和凉爽的这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "sunny",
        "晴朗的"
      ],
      [
        "rainy",
        "下雨的"
      ],
      [
        "cloudy",
        "多云的"
      ],
      [
        "windy",
        "刮风的"
      ],
      [
        "snowy",
        "下雪的"
      ],
      [
        "stormy",
        "暴风雨的"
      ],
      [
        "hot",
        "炎热的"
      ],
      [
        "cold",
        "寒冷的"
      ],
      [
        "warm",
        "温暖的"
      ],
      [
        "cool",
        "凉爽的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about weather.",
        "cn": "Goldy和Callum正在学习天气变化。",
        "ex": "本句介绍学习主题“Weather”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"sunny, rainy, and cloudy.\" Callum shows her windy and snowy.",
        "cn": "Goldy说：“晴朗的、下雨的和多云的。",
        "ex": "观察这一句如何把刮风的和下雪的放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn stormy, hot, and cold.",
        "cn": "”Callum给她看刮风的和下雪的。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words warm and cool.",
        "cn": "他们还学习暴风雨的、炎热的和寒冷的。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "多云的",
            "cloudy"
          ],
          [
            "晴朗的",
            "sunny"
          ],
          [
            "暴风雨的",
            "stormy"
          ],
          [
            "温暖的",
            "warm"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "下雨的",
            "rainy"
          ],
          [
            "刮风的",
            "windy"
          ],
          [
            "温暖的",
            "warm"
          ],
          [
            "炎热的",
            "hot"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "晴朗的",
        "word": "sunny",
        "shuffled": [
          "n",
          "s",
          "n",
          "u",
          "y"
        ]
      },
      {
        "cn": "多云的",
        "word": "cloudy",
        "shuffled": [
          "o",
          "d",
          "c",
          "u",
          "y",
          "l"
        ]
      },
      {
        "cn": "下雪的",
        "word": "snowy",
        "shuffled": [
          "o",
          "w",
          "s",
          "n",
          "y"
        ]
      },
      {
        "cn": "寒冷的",
        "word": "cold",
        "shuffled": [
          "d",
          "o",
          "c",
          "l"
        ]
      },
      {
        "cn": "凉爽的",
        "word": "cool",
        "shuffled": [
          "o",
          "o",
          "c",
          "l"
        ]
      }
    ]
  },
  "junior-21": {
    "titleZh": "四季轮回",
    "titleEn": "Seasons",
    "story": "Goldy and Callum are learning about seasons. Goldy says, \"spring, summer, and autumn.\" Callum shows her winter and season. They also learn flower, leaf, and grass. Jake finds the words seed and root. All three friends practise together.",
    "translation": "Goldy和Callum正在学习四季轮回。Goldy说：“春天、夏天和秋天。”Callum给她看冬天和季节。他们还学习花朵、叶子和草。Jake找到了种子和根这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "spring",
        "春天"
      ],
      [
        "summer",
        "夏天"
      ],
      [
        "autumn",
        "秋天"
      ],
      [
        "winter",
        "冬天"
      ],
      [
        "season",
        "季节"
      ],
      [
        "flower",
        "花朵"
      ],
      [
        "leaf",
        "叶子"
      ],
      [
        "grass",
        "草"
      ],
      [
        "seed",
        "种子"
      ],
      [
        "root",
        "根"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about seasons.",
        "cn": "Goldy和Callum正在学习四季轮回。",
        "ex": "本句介绍学习主题“Seasons”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"spring, summer, and autumn.\" Callum shows her winter and season.",
        "cn": "Goldy说：“春天、夏天和秋天。",
        "ex": "观察这一句如何把冬天和季节放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn flower, leaf, and grass.",
        "cn": "”Callum给她看冬天和季节。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words seed and root.",
        "cn": "他们还学习花朵、叶子和草。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "秋天",
            "autumn"
          ],
          [
            "春天",
            "spring"
          ],
          [
            "花朵",
            "flower"
          ],
          [
            "种子",
            "seed"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "夏天",
            "summer"
          ],
          [
            "冬天",
            "winter"
          ],
          [
            "种子",
            "seed"
          ],
          [
            "叶子",
            "leaf"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "春天",
        "word": "spring",
        "shuffled": [
          "p",
          "r",
          "n",
          "s",
          "g",
          "i"
        ]
      },
      {
        "cn": "秋天",
        "word": "autumn",
        "shuffled": [
          "a",
          "u",
          "n",
          "u",
          "t",
          "m"
        ]
      },
      {
        "cn": "季节",
        "word": "season",
        "shuffled": [
          "a",
          "n",
          "e",
          "s",
          "o",
          "s"
        ]
      },
      {
        "cn": "草",
        "word": "grass",
        "shuffled": [
          "a",
          "g",
          "s",
          "r",
          "s"
        ]
      },
      {
        "cn": "根",
        "word": "root",
        "shuffled": [
          "r",
          "o",
          "t",
          "o"
        ]
      }
    ]
  },
  "junior-22": {
    "titleZh": "一周时间",
    "titleEn": "Days and Time",
    "story": "Goldy and Callum are learning about days and time. Goldy says, \"Monday, Tuesday, and Wednesday.\" Callum shows her Thursday and Friday. They also learn Saturday, Sunday, and today. Jake finds the words tomorrow and yesterday. All three friends practise together.",
    "translation": "Goldy和Callum正在学习一周时间。Goldy说：“星期一、星期二和星期三。”Callum给她看星期四和星期五。他们还学习星期六、星期日和今天。Jake找到了明天和昨天这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "Monday",
        "星期一"
      ],
      [
        "Tuesday",
        "星期二"
      ],
      [
        "Wednesday",
        "星期三"
      ],
      [
        "Thursday",
        "星期四"
      ],
      [
        "Friday",
        "星期五"
      ],
      [
        "Saturday",
        "星期六"
      ],
      [
        "Sunday",
        "星期日"
      ],
      [
        "today",
        "今天"
      ],
      [
        "tomorrow",
        "明天"
      ],
      [
        "yesterday",
        "昨天"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about days and time.",
        "cn": "Goldy和Callum正在学习一周时间。",
        "ex": "本句介绍学习主题“Days and Time”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"Monday, Tuesday, and Wednesday.\" Callum shows her Thursday and Friday.",
        "cn": "Goldy说：“星期一、星期二和星期三。",
        "ex": "观察这一句如何把星期四和星期五放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn Saturday, Sunday, and today.",
        "cn": "”Callum给她看星期四和星期五。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words tomorrow and yesterday.",
        "cn": "他们还学习星期六、星期日和今天。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "星期三",
            "Wednesday"
          ],
          [
            "星期一",
            "Monday"
          ],
          [
            "星期六",
            "Saturday"
          ],
          [
            "明天",
            "tomorrow"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "星期二",
            "Tuesday"
          ],
          [
            "星期四",
            "Thursday"
          ],
          [
            "明天",
            "tomorrow"
          ],
          [
            "星期日",
            "Sunday"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "星期一",
        "word": "Monday",
        "shuffled": [
          "o",
          "y",
          "m",
          "a",
          "d",
          "n"
        ]
      },
      {
        "cn": "星期三",
        "word": "Wednesday",
        "shuffled": [
          "d",
          "a",
          "e",
          "n",
          "w",
          "s",
          "y",
          "d",
          "e"
        ]
      },
      {
        "cn": "星期五",
        "word": "Friday",
        "shuffled": [
          "d",
          "r",
          "y",
          "a",
          "i",
          "f"
        ]
      },
      {
        "cn": "今天",
        "word": "today",
        "shuffled": [
          "y",
          "t",
          "d",
          "a",
          "o"
        ]
      },
      {
        "cn": "昨天",
        "word": "yesterday",
        "shuffled": [
          "y",
          "y",
          "s",
          "e",
          "e",
          "t",
          "r",
          "d",
          "a"
        ]
      }
    ]
  },
  "junior-23": {
    "titleZh": "月份与日期",
    "titleEn": "Months and Dates",
    "story": "Goldy and Callum are learning about months and dates. Goldy says, \"January, February, and March.\" Callum shows her April and May. They also learn June, July, and August. Jake finds the words September and October. All three friends practise together.",
    "translation": "Goldy和Callum正在学习月份与日期。Goldy说：“一月、二月和三月。”Callum给她看四月和五月。他们还学习六月、七月和八月。Jake找到了九月和十月这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "January",
        "一月"
      ],
      [
        "February",
        "二月"
      ],
      [
        "March",
        "三月"
      ],
      [
        "April",
        "四月"
      ],
      [
        "May",
        "五月"
      ],
      [
        "June",
        "六月"
      ],
      [
        "July",
        "七月"
      ],
      [
        "August",
        "八月"
      ],
      [
        "September",
        "九月"
      ],
      [
        "October",
        "十月"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about months and dates.",
        "cn": "Goldy和Callum正在学习月份与日期。",
        "ex": "本句介绍学习主题“Months and Dates”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"January, February, and March.\" Callum shows her April and May.",
        "cn": "Goldy说：“一月、二月和三月。",
        "ex": "观察这一句如何把四月和五月放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn June, July, and August.",
        "cn": "”Callum给她看四月和五月。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words September and October.",
        "cn": "他们还学习六月、七月和八月。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "三月",
            "March"
          ],
          [
            "一月",
            "January"
          ],
          [
            "六月",
            "June"
          ],
          [
            "九月",
            "September"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "二月",
            "February"
          ],
          [
            "四月",
            "April"
          ],
          [
            "九月",
            "September"
          ],
          [
            "七月",
            "July"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "一月",
        "word": "January",
        "shuffled": [
          "u",
          "j",
          "n",
          "r",
          "y",
          "a",
          "a"
        ]
      },
      {
        "cn": "三月",
        "word": "March",
        "shuffled": [
          "a",
          "m",
          "h",
          "r",
          "c"
        ]
      },
      {
        "cn": "五月",
        "word": "May",
        "shuffled": [
          "y",
          "a",
          "m"
        ]
      },
      {
        "cn": "八月",
        "word": "August",
        "shuffled": [
          "g",
          "s",
          "a",
          "u",
          "t",
          "u"
        ]
      },
      {
        "cn": "十月",
        "word": "October",
        "shuffled": [
          "c",
          "t",
          "b",
          "o",
          "r",
          "e",
          "o"
        ]
      }
    ]
  },
  "junior-24": {
    "titleZh": "方向与位置",
    "titleEn": "Directions",
    "story": "Goldy and Callum are learning about directions. Goldy says, \"left, right, and above.\" Callum shows her below and inside. They also learn outside, behind, and between. Jake finds the words near and far. All three friends practise together.",
    "translation": "Goldy和Callum正在学习方向与位置。Goldy说：“左边、右边和上方。”Callum给她看下方和里面。他们还学习外面、后面和中间。Jake找到了附近和远处这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "left",
        "左边"
      ],
      [
        "right",
        "右边"
      ],
      [
        "above",
        "上方"
      ],
      [
        "below",
        "下方"
      ],
      [
        "inside",
        "里面"
      ],
      [
        "outside",
        "外面"
      ],
      [
        "behind",
        "后面"
      ],
      [
        "between",
        "中间"
      ],
      [
        "near",
        "附近"
      ],
      [
        "far",
        "远处"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about directions.",
        "cn": "Goldy和Callum正在学习方向与位置。",
        "ex": "本句介绍学习主题“Directions”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"left, right, and above.\" Callum shows her below and inside.",
        "cn": "Goldy说：“左边、右边和上方。",
        "ex": "观察这一句如何把下方和里面放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn outside, behind, and between.",
        "cn": "”Callum给她看下方和里面。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words near and far.",
        "cn": "他们还学习外面、后面和中间。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "上方",
            "above"
          ],
          [
            "左边",
            "left"
          ],
          [
            "外面",
            "outside"
          ],
          [
            "附近",
            "near"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "右边",
            "right"
          ],
          [
            "下方",
            "below"
          ],
          [
            "附近",
            "near"
          ],
          [
            "后面",
            "behind"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "左边",
        "word": "left",
        "shuffled": [
          "f",
          "t",
          "e",
          "l"
        ]
      },
      {
        "cn": "上方",
        "word": "above",
        "shuffled": [
          "o",
          "v",
          "b",
          "e",
          "a"
        ]
      },
      {
        "cn": "里面",
        "word": "inside",
        "shuffled": [
          "n",
          "i",
          "e",
          "i",
          "d",
          "s"
        ]
      },
      {
        "cn": "中间",
        "word": "between",
        "shuffled": [
          "e",
          "b",
          "e",
          "t",
          "n",
          "w",
          "e"
        ]
      },
      {
        "cn": "远处",
        "word": "far",
        "shuffled": [
          "a",
          "r",
          "f"
        ]
      }
    ]
  },
  "junior-25": {
    "titleZh": "城市交通",
    "titleEn": "Transport",
    "story": "Goldy and Callum are learning about transport. Goldy says, \"bus, train, and tram.\" Callum shows her taxi and bicycle. They also learn motorcycle, airplane, and ship. Jake finds the words ferry and subway. All three friends practise together.",
    "translation": "Goldy和Callum正在学习城市交通。Goldy说：“公交车、火车和有轨电车。”Callum给她看出租车和自行车。他们还学习摩托车、飞机和船。Jake找到了渡轮和地铁这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "bus",
        "公交车"
      ],
      [
        "train",
        "火车"
      ],
      [
        "tram",
        "有轨电车"
      ],
      [
        "taxi",
        "出租车"
      ],
      [
        "bicycle",
        "自行车"
      ],
      [
        "motorcycle",
        "摩托车"
      ],
      [
        "airplane",
        "飞机"
      ],
      [
        "ship",
        "船"
      ],
      [
        "ferry",
        "渡轮"
      ],
      [
        "subway",
        "地铁"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about transport.",
        "cn": "Goldy和Callum正在学习城市交通。",
        "ex": "本句介绍学习主题“Transport”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"bus, train, and tram.\" Callum shows her taxi and bicycle.",
        "cn": "Goldy说：“公交车、火车和有轨电车。",
        "ex": "观察这一句如何把出租车和自行车放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn motorcycle, airplane, and ship.",
        "cn": "”Callum给她看出租车和自行车。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words ferry and subway.",
        "cn": "他们还学习摩托车、飞机和船。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "有轨电车",
            "tram"
          ],
          [
            "公交车",
            "bus"
          ],
          [
            "摩托车",
            "motorcycle"
          ],
          [
            "渡轮",
            "ferry"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "火车",
            "train"
          ],
          [
            "出租车",
            "taxi"
          ],
          [
            "渡轮",
            "ferry"
          ],
          [
            "飞机",
            "airplane"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "公交车",
        "word": "bus",
        "shuffled": [
          "u",
          "s",
          "b"
        ]
      },
      {
        "cn": "有轨电车",
        "word": "tram",
        "shuffled": [
          "r",
          "a",
          "m",
          "t"
        ]
      },
      {
        "cn": "自行车",
        "word": "bicycle",
        "shuffled": [
          "b",
          "y",
          "l",
          "i",
          "e",
          "c",
          "c"
        ]
      },
      {
        "cn": "船",
        "word": "ship",
        "shuffled": [
          "h",
          "s",
          "i",
          "p"
        ]
      },
      {
        "cn": "地铁",
        "word": "subway",
        "shuffled": [
          "b",
          "u",
          "w",
          "a",
          "y",
          "s"
        ]
      }
    ]
  },
  "junior-26": {
    "titleZh": "公共场所",
    "titleEn": "Places in Town",
    "story": "Goldy and Callum are learning about places in town. Goldy says, \"library, hospital, and school.\" Callum shows her market and park. They also learn museum, cinema, and station. Jake finds the words bank and pharmacy. All three friends practise together.",
    "translation": "Goldy和Callum正在学习公共场所。Goldy说：“图书馆、医院和学校。”Callum给她看市场和公园。他们还学习博物馆、电影院和车站。Jake找到了银行和药房这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "library",
        "图书馆"
      ],
      [
        "hospital",
        "医院"
      ],
      [
        "school",
        "学校"
      ],
      [
        "market",
        "市场"
      ],
      [
        "park",
        "公园"
      ],
      [
        "museum",
        "博物馆"
      ],
      [
        "cinema",
        "电影院"
      ],
      [
        "station",
        "车站"
      ],
      [
        "bank",
        "银行"
      ],
      [
        "pharmacy",
        "药房"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about places in town.",
        "cn": "Goldy和Callum正在学习公共场所。",
        "ex": "本句介绍学习主题“Places in Town”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"library, hospital, and school.\" Callum shows her market and park.",
        "cn": "Goldy说：“图书馆、医院和学校。",
        "ex": "观察这一句如何把市场和公园放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn museum, cinema, and station.",
        "cn": "”Callum给她看市场和公园。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words bank and pharmacy.",
        "cn": "他们还学习博物馆、电影院和车站。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "学校",
            "school"
          ],
          [
            "图书馆",
            "library"
          ],
          [
            "博物馆",
            "museum"
          ],
          [
            "银行",
            "bank"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "医院",
            "hospital"
          ],
          [
            "市场",
            "market"
          ],
          [
            "银行",
            "bank"
          ],
          [
            "电影院",
            "cinema"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "图书馆",
        "word": "library",
        "shuffled": [
          "l",
          "i",
          "b",
          "r",
          "y",
          "a",
          "r"
        ]
      },
      {
        "cn": "学校",
        "word": "school",
        "shuffled": [
          "s",
          "h",
          "o",
          "c",
          "l",
          "o"
        ]
      },
      {
        "cn": "公园",
        "word": "park",
        "shuffled": [
          "a",
          "p",
          "k",
          "r"
        ]
      },
      {
        "cn": "车站",
        "word": "station",
        "shuffled": [
          "t",
          "i",
          "t",
          "n",
          "s",
          "o",
          "a"
        ]
      },
      {
        "cn": "药房",
        "word": "pharmacy",
        "shuffled": [
          "a",
          "m",
          "r",
          "a",
          "y",
          "h",
          "p",
          "c"
        ]
      }
    ]
  },
  "junior-27": {
    "titleZh": "职业认识",
    "titleEn": "Jobs",
    "story": "Goldy and Callum are learning about jobs. Goldy says, \"teacher, doctor, and nurse.\" Callum shows her farmer and driver. They also learn chef, artist, and singer. Jake finds the words engineer and firefighter. All three friends practise together.",
    "translation": "Goldy和Callum正在学习职业认识。Goldy说：“老师、医生和护士。”Callum给她看农民和司机。他们还学习厨师、艺术家和歌手。Jake找到了工程师和消防员这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "teacher",
        "老师"
      ],
      [
        "doctor",
        "医生"
      ],
      [
        "nurse",
        "护士"
      ],
      [
        "farmer",
        "农民"
      ],
      [
        "driver",
        "司机"
      ],
      [
        "chef",
        "厨师"
      ],
      [
        "artist",
        "艺术家"
      ],
      [
        "singer",
        "歌手"
      ],
      [
        "engineer",
        "工程师"
      ],
      [
        "firefighter",
        "消防员"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about jobs.",
        "cn": "Goldy和Callum正在学习职业认识。",
        "ex": "本句介绍学习主题“Jobs”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"teacher, doctor, and nurse.\" Callum shows her farmer and driver.",
        "cn": "Goldy说：“老师、医生和护士。",
        "ex": "观察这一句如何把农民和司机放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn chef, artist, and singer.",
        "cn": "”Callum给她看农民和司机。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words engineer and firefighter.",
        "cn": "他们还学习厨师、艺术家和歌手。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "护士",
            "nurse"
          ],
          [
            "老师",
            "teacher"
          ],
          [
            "厨师",
            "chef"
          ],
          [
            "工程师",
            "engineer"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "医生",
            "doctor"
          ],
          [
            "农民",
            "farmer"
          ],
          [
            "工程师",
            "engineer"
          ],
          [
            "艺术家",
            "artist"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "老师",
        "word": "teacher",
        "shuffled": [
          "r",
          "t",
          "h",
          "a",
          "c",
          "e",
          "e"
        ]
      },
      {
        "cn": "护士",
        "word": "nurse",
        "shuffled": [
          "r",
          "e",
          "u",
          "n",
          "s"
        ]
      },
      {
        "cn": "司机",
        "word": "driver",
        "shuffled": [
          "e",
          "d",
          "v",
          "i",
          "r",
          "r"
        ]
      },
      {
        "cn": "歌手",
        "word": "singer",
        "shuffled": [
          "s",
          "i",
          "r",
          "g",
          "n",
          "e"
        ]
      },
      {
        "cn": "消防员",
        "word": "firefighter",
        "shuffled": [
          "e",
          "r",
          "r",
          "i",
          "t",
          "i",
          "h",
          "f",
          "f",
          "g",
          "e"
        ]
      }
    ]
  },
  "junior-28": {
    "titleZh": "运动与锻炼",
    "titleEn": "Sports",
    "story": "Goldy and Callum are learning about sports. Goldy says, \"football, basketball, and tennis.\" Callum shows her badminton and volleyball. They also learn cycling, hiking, and yoga. Jake finds the words skating and rowing. All three friends practise together.",
    "translation": "Goldy和Callum正在学习运动与锻炼。Goldy说：“足球、篮球和网球。”Callum给她看羽毛球和排球。他们还学习骑行、徒步和瑜伽。Jake找到了滑冰和划船这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "football",
        "足球"
      ],
      [
        "basketball",
        "篮球"
      ],
      [
        "tennis",
        "网球"
      ],
      [
        "badminton",
        "羽毛球"
      ],
      [
        "volleyball",
        "排球"
      ],
      [
        "cycling",
        "骑行"
      ],
      [
        "hiking",
        "徒步"
      ],
      [
        "yoga",
        "瑜伽"
      ],
      [
        "skating",
        "滑冰"
      ],
      [
        "rowing",
        "划船"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about sports.",
        "cn": "Goldy和Callum正在学习运动与锻炼。",
        "ex": "本句介绍学习主题“Sports”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"football, basketball, and tennis.\" Callum shows her badminton and volleyball.",
        "cn": "Goldy说：“足球、篮球和网球。",
        "ex": "观察这一句如何把羽毛球和排球放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn cycling, hiking, and yoga.",
        "cn": "”Callum给她看羽毛球和排球。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words skating and rowing.",
        "cn": "他们还学习骑行、徒步和瑜伽。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "网球",
            "tennis"
          ],
          [
            "足球",
            "football"
          ],
          [
            "骑行",
            "cycling"
          ],
          [
            "滑冰",
            "skating"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "篮球",
            "basketball"
          ],
          [
            "羽毛球",
            "badminton"
          ],
          [
            "滑冰",
            "skating"
          ],
          [
            "徒步",
            "hiking"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "足球",
        "word": "football",
        "shuffled": [
          "l",
          "f",
          "t",
          "o",
          "b",
          "a",
          "o",
          "l"
        ]
      },
      {
        "cn": "网球",
        "word": "tennis",
        "shuffled": [
          "s",
          "n",
          "i",
          "t",
          "n",
          "e"
        ]
      },
      {
        "cn": "排球",
        "word": "volleyball",
        "shuffled": [
          "a",
          "l",
          "l",
          "b",
          "e",
          "v",
          "l",
          "y",
          "o",
          "l"
        ]
      },
      {
        "cn": "瑜伽",
        "word": "yoga",
        "shuffled": [
          "y",
          "a",
          "g",
          "o"
        ]
      },
      {
        "cn": "划船",
        "word": "rowing",
        "shuffled": [
          "w",
          "g",
          "r",
          "o",
          "i",
          "n"
        ]
      }
    ]
  },
  "junior-29": {
    "titleZh": "户外自然",
    "titleEn": "Nature",
    "story": "Goldy and Callum are learning about nature. Goldy says, \"mountain, river, and lake.\" Callum shows her forest and ocean. They also learn beach, island, and desert. Jake finds the words valley and waterfall. All three friends practise together.",
    "translation": "Goldy和Callum正在学习户外自然。Goldy说：“山、河流和湖。”Callum给她看森林和海洋。他们还学习海滩、岛屿和沙漠。Jake找到了山谷和瀑布这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "mountain",
        "山"
      ],
      [
        "river",
        "河流"
      ],
      [
        "lake",
        "湖"
      ],
      [
        "forest",
        "森林"
      ],
      [
        "ocean",
        "海洋"
      ],
      [
        "beach",
        "海滩"
      ],
      [
        "island",
        "岛屿"
      ],
      [
        "desert",
        "沙漠"
      ],
      [
        "valley",
        "山谷"
      ],
      [
        "waterfall",
        "瀑布"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about nature.",
        "cn": "Goldy和Callum正在学习户外自然。",
        "ex": "本句介绍学习主题“Nature”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"mountain, river, and lake.\" Callum shows her forest and ocean.",
        "cn": "Goldy说：“山、河流和湖。",
        "ex": "观察这一句如何把森林和海洋放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn beach, island, and desert.",
        "cn": "”Callum给她看森林和海洋。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words valley and waterfall.",
        "cn": "他们还学习海滩、岛屿和沙漠。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "湖",
            "lake"
          ],
          [
            "山",
            "mountain"
          ],
          [
            "海滩",
            "beach"
          ],
          [
            "山谷",
            "valley"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "河流",
            "river"
          ],
          [
            "森林",
            "forest"
          ],
          [
            "山谷",
            "valley"
          ],
          [
            "岛屿",
            "island"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "山",
        "word": "mountain",
        "shuffled": [
          "i",
          "m",
          "o",
          "u",
          "t",
          "n",
          "n",
          "a"
        ]
      },
      {
        "cn": "湖",
        "word": "lake",
        "shuffled": [
          "l",
          "k",
          "a",
          "e"
        ]
      },
      {
        "cn": "海洋",
        "word": "ocean",
        "shuffled": [
          "o",
          "n",
          "c",
          "a",
          "e"
        ]
      },
      {
        "cn": "沙漠",
        "word": "desert",
        "shuffled": [
          "d",
          "t",
          "r",
          "e",
          "s",
          "e"
        ]
      },
      {
        "cn": "瀑布",
        "word": "waterfall",
        "shuffled": [
          "t",
          "l",
          "w",
          "e",
          "r",
          "a",
          "l",
          "a",
          "f"
        ]
      }
    ]
  },
  "junior-30": {
    "titleZh": "花园植物",
    "titleEn": "Garden Plants",
    "story": "Goldy and Callum are learning about garden plants. Goldy says, \"rose, tulip, and daisy.\" Callum shows her sunflower and bamboo. They also learn tree, branch, and bud. Jake finds the words soil and petal. All three friends practise together.",
    "translation": "Goldy和Callum正在学习花园植物。Goldy说：“玫瑰、郁金香和雏菊。”Callum给她看向日葵和竹子。他们还学习树木、树枝和花蕾。Jake找到了土壤和花瓣这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "rose",
        "玫瑰"
      ],
      [
        "tulip",
        "郁金香"
      ],
      [
        "daisy",
        "雏菊"
      ],
      [
        "sunflower",
        "向日葵"
      ],
      [
        "bamboo",
        "竹子"
      ],
      [
        "tree",
        "树木"
      ],
      [
        "branch",
        "树枝"
      ],
      [
        "bud",
        "花蕾"
      ],
      [
        "soil",
        "土壤"
      ],
      [
        "petal",
        "花瓣"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about garden plants.",
        "cn": "Goldy和Callum正在学习花园植物。",
        "ex": "本句介绍学习主题“Garden Plants”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"rose, tulip, and daisy.\" Callum shows her sunflower and bamboo.",
        "cn": "Goldy说：“玫瑰、郁金香和雏菊。",
        "ex": "观察这一句如何把向日葵和竹子放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn tree, branch, and bud.",
        "cn": "”Callum给她看向日葵和竹子。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words soil and petal.",
        "cn": "他们还学习树木、树枝和花蕾。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "雏菊",
            "daisy"
          ],
          [
            "玫瑰",
            "rose"
          ],
          [
            "树木",
            "tree"
          ],
          [
            "土壤",
            "soil"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "郁金香",
            "tulip"
          ],
          [
            "向日葵",
            "sunflower"
          ],
          [
            "土壤",
            "soil"
          ],
          [
            "树枝",
            "branch"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "玫瑰",
        "word": "rose",
        "shuffled": [
          "s",
          "o",
          "r",
          "e"
        ]
      },
      {
        "cn": "雏菊",
        "word": "daisy",
        "shuffled": [
          "d",
          "s",
          "i",
          "a",
          "y"
        ]
      },
      {
        "cn": "竹子",
        "word": "bamboo",
        "shuffled": [
          "a",
          "m",
          "o",
          "o",
          "b",
          "b"
        ]
      },
      {
        "cn": "花蕾",
        "word": "bud",
        "shuffled": [
          "d",
          "u",
          "b"
        ]
      },
      {
        "cn": "花瓣",
        "word": "petal",
        "shuffled": [
          "a",
          "l",
          "e",
          "t",
          "p"
        ]
      }
    ]
  },
  "junior-31": {
    "titleZh": "宠物照顾",
    "titleEn": "Pets",
    "story": "Goldy and Callum are learning about pets. Goldy says, \"puppy, kitten, and hamster.\" Callum shows her parrotlet and goldfish. They also learn leash, collar, and cage. Jake finds the words feeder and vet. All three friends practise together.",
    "translation": "Goldy和Callum正在学习宠物照顾。Goldy说：“小狗、小猫和仓鼠。”Callum给她看小鹦鹉和金鱼。他们还学习牵引绳、项圈和笼子。Jake找到了喂食器和兽医这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "puppy",
        "小狗"
      ],
      [
        "kitten",
        "小猫"
      ],
      [
        "hamster",
        "仓鼠"
      ],
      [
        "parrotlet",
        "小鹦鹉"
      ],
      [
        "goldfish",
        "金鱼"
      ],
      [
        "leash",
        "牵引绳"
      ],
      [
        "collar",
        "项圈"
      ],
      [
        "cage",
        "笼子"
      ],
      [
        "feeder",
        "喂食器"
      ],
      [
        "vet",
        "兽医"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about pets.",
        "cn": "Goldy和Callum正在学习宠物照顾。",
        "ex": "本句介绍学习主题“Pets”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"puppy, kitten, and hamster.\" Callum shows her parrotlet and goldfish.",
        "cn": "Goldy说：“小狗、小猫和仓鼠。",
        "ex": "观察这一句如何把小鹦鹉和金鱼放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn leash, collar, and cage.",
        "cn": "”Callum给她看小鹦鹉和金鱼。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words feeder and vet.",
        "cn": "他们还学习牵引绳、项圈和笼子。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "仓鼠",
            "hamster"
          ],
          [
            "小狗",
            "puppy"
          ],
          [
            "牵引绳",
            "leash"
          ],
          [
            "喂食器",
            "feeder"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "小猫",
            "kitten"
          ],
          [
            "小鹦鹉",
            "parrotlet"
          ],
          [
            "喂食器",
            "feeder"
          ],
          [
            "项圈",
            "collar"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "小狗",
        "word": "puppy",
        "shuffled": [
          "u",
          "p",
          "y",
          "p",
          "p"
        ]
      },
      {
        "cn": "仓鼠",
        "word": "hamster",
        "shuffled": [
          "m",
          "s",
          "a",
          "h",
          "t",
          "e",
          "r"
        ]
      },
      {
        "cn": "金鱼",
        "word": "goldfish",
        "shuffled": [
          "o",
          "g",
          "d",
          "l",
          "h",
          "i",
          "s",
          "f"
        ]
      },
      {
        "cn": "笼子",
        "word": "cage",
        "shuffled": [
          "a",
          "e",
          "g",
          "c"
        ]
      },
      {
        "cn": "兽医",
        "word": "vet",
        "shuffled": [
          "e",
          "v",
          "t"
        ]
      }
    ]
  },
  "junior-32": {
    "titleZh": "数字与数量",
    "titleEn": "Numbers and Amounts",
    "story": "Goldy and Callum are learning about numbers and amounts. Goldy says, \"eleven, twelve, and thirteen.\" Callum shows her fourteen and fifteen. They also learn sixteen, seventeen, and eighteen. Jake finds the words nineteen and twenty. All three friends practise together.",
    "translation": "Goldy和Callum正在学习数字与数量。Goldy说：“十一、十二和十三。”Callum给她看十四和十五。他们还学习十六、十七和十八。Jake找到了十九和二十这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "eleven",
        "十一"
      ],
      [
        "twelve",
        "十二"
      ],
      [
        "thirteen",
        "十三"
      ],
      [
        "fourteen",
        "十四"
      ],
      [
        "fifteen",
        "十五"
      ],
      [
        "sixteen",
        "十六"
      ],
      [
        "seventeen",
        "十七"
      ],
      [
        "eighteen",
        "十八"
      ],
      [
        "nineteen",
        "十九"
      ],
      [
        "twenty",
        "二十"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about numbers and amounts.",
        "cn": "Goldy和Callum正在学习数字与数量。",
        "ex": "本句介绍学习主题“Numbers and Amounts”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"eleven, twelve, and thirteen.\" Callum shows her fourteen and fifteen.",
        "cn": "Goldy说：“十一、十二和十三。",
        "ex": "观察这一句如何把十四和十五放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn sixteen, seventeen, and eighteen.",
        "cn": "”Callum给她看十四和十五。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words nineteen and twenty.",
        "cn": "他们还学习十六、十七和十八。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "十三",
            "thirteen"
          ],
          [
            "十一",
            "eleven"
          ],
          [
            "十六",
            "sixteen"
          ],
          [
            "十九",
            "nineteen"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "十二",
            "twelve"
          ],
          [
            "十四",
            "fourteen"
          ],
          [
            "十九",
            "nineteen"
          ],
          [
            "十七",
            "seventeen"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "十一",
        "word": "eleven",
        "shuffled": [
          "l",
          "v",
          "e",
          "e",
          "n",
          "e"
        ]
      },
      {
        "cn": "十三",
        "word": "thirteen",
        "shuffled": [
          "h",
          "i",
          "n",
          "e",
          "t",
          "r",
          "t",
          "e"
        ]
      },
      {
        "cn": "十五",
        "word": "fifteen",
        "shuffled": [
          "f",
          "e",
          "t",
          "e",
          "f",
          "n",
          "i"
        ]
      },
      {
        "cn": "十八",
        "word": "eighteen",
        "shuffled": [
          "n",
          "i",
          "t",
          "e",
          "e",
          "h",
          "g",
          "e"
        ]
      },
      {
        "cn": "二十",
        "word": "twenty",
        "shuffled": [
          "e",
          "y",
          "t",
          "w",
          "n",
          "t"
        ]
      }
    ]
  },
  "junior-33": {
    "titleZh": "大小与比较",
    "titleEn": "Size and Comparison",
    "story": "Goldy and Callum are learning about size and comparison. Goldy says, \"big, small, and tall.\" Callum shows her short and long. They also learn wide, narrow, and heavy. Jake finds the words light and deep. All three friends practise together.",
    "translation": "Goldy和Callum正在学习大小与比较。Goldy说：“大的、小的和高的。”Callum给她看矮的和长的。他们还学习宽的、窄的和重的。Jake找到了轻的和深的这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "big",
        "大的"
      ],
      [
        "small",
        "小的"
      ],
      [
        "tall",
        "高的"
      ],
      [
        "short",
        "矮的"
      ],
      [
        "long",
        "长的"
      ],
      [
        "wide",
        "宽的"
      ],
      [
        "narrow",
        "窄的"
      ],
      [
        "heavy",
        "重的"
      ],
      [
        "light",
        "轻的"
      ],
      [
        "deep",
        "深的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about size and comparison.",
        "cn": "Goldy和Callum正在学习大小与比较。",
        "ex": "本句介绍学习主题“Size and Comparison”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"big, small, and tall.\" Callum shows her short and long.",
        "cn": "Goldy说：“大的、小的和高的。",
        "ex": "观察这一句如何把矮的和长的放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn wide, narrow, and heavy.",
        "cn": "”Callum给她看矮的和长的。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words light and deep.",
        "cn": "他们还学习宽的、窄的和重的。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "高的",
            "tall"
          ],
          [
            "大的",
            "big"
          ],
          [
            "宽的",
            "wide"
          ],
          [
            "轻的",
            "light"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "小的",
            "small"
          ],
          [
            "矮的",
            "short"
          ],
          [
            "轻的",
            "light"
          ],
          [
            "窄的",
            "narrow"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "大的",
        "word": "big",
        "shuffled": [
          "g",
          "i",
          "b"
        ]
      },
      {
        "cn": "高的",
        "word": "tall",
        "shuffled": [
          "a",
          "l",
          "t",
          "l"
        ]
      },
      {
        "cn": "长的",
        "word": "long",
        "shuffled": [
          "n",
          "l",
          "o",
          "g"
        ]
      },
      {
        "cn": "重的",
        "word": "heavy",
        "shuffled": [
          "y",
          "h",
          "a",
          "v",
          "e"
        ]
      },
      {
        "cn": "深的",
        "word": "deep",
        "shuffled": [
          "e",
          "p",
          "e",
          "d"
        ]
      }
    ]
  },
  "junior-34": {
    "titleZh": "礼貌与沟通",
    "titleEn": "Being Polite",
    "story": "Goldy and Callum are learning about being polite. Goldy says, \"please, thanks, and sorry.\" Callum shows her welcome and hello. They also learn goodbye, excuse, and kind. Jake finds the words honest and patient. All three friends practise together.",
    "translation": "Goldy和Callum正在学习礼貌与沟通。Goldy说：“请、谢谢和对不起。”Callum给她看欢迎和你好。他们还学习再见、打扰和友善的。Jake找到了诚实的和有耐心的这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "please",
        "请"
      ],
      [
        "thanks",
        "谢谢"
      ],
      [
        "sorry",
        "对不起"
      ],
      [
        "welcome",
        "欢迎"
      ],
      [
        "hello",
        "你好"
      ],
      [
        "goodbye",
        "再见"
      ],
      [
        "excuse",
        "打扰"
      ],
      [
        "kind",
        "友善的"
      ],
      [
        "honest",
        "诚实的"
      ],
      [
        "patient",
        "有耐心的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about being polite.",
        "cn": "Goldy和Callum正在学习礼貌与沟通。",
        "ex": "本句介绍学习主题“Being Polite”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"please, thanks, and sorry.\" Callum shows her welcome and hello.",
        "cn": "Goldy说：“请、谢谢和对不起。",
        "ex": "观察这一句如何把欢迎和你好放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn goodbye, excuse, and kind.",
        "cn": "”Callum给她看欢迎和你好。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words honest and patient.",
        "cn": "他们还学习再见、打扰和友善的。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "对不起",
            "sorry"
          ],
          [
            "请",
            "please"
          ],
          [
            "再见",
            "goodbye"
          ],
          [
            "诚实的",
            "honest"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "谢谢",
            "thanks"
          ],
          [
            "欢迎",
            "welcome"
          ],
          [
            "诚实的",
            "honest"
          ],
          [
            "打扰",
            "excuse"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "请",
        "word": "please",
        "shuffled": [
          "p",
          "e",
          "s",
          "e",
          "l",
          "a"
        ]
      },
      {
        "cn": "对不起",
        "word": "sorry",
        "shuffled": [
          "o",
          "y",
          "r",
          "r",
          "s"
        ]
      },
      {
        "cn": "你好",
        "word": "hello",
        "shuffled": [
          "l",
          "h",
          "e",
          "o",
          "l"
        ]
      },
      {
        "cn": "友善的",
        "word": "kind",
        "shuffled": [
          "i",
          "n",
          "k",
          "d"
        ]
      },
      {
        "cn": "有耐心的",
        "word": "patient",
        "shuffled": [
          "p",
          "t",
          "n",
          "e",
          "a",
          "i",
          "t"
        ]
      }
    ]
  },
  "junior-35": {
    "titleZh": "健康习惯",
    "titleEn": "Healthy Habits",
    "story": "Goldy and Callum are learning about healthy habits. Goldy says, \"sleep, exercise, and clean.\" Callum shows her healthy and brush. They also learn drink, stretch, and breathe. Jake finds the words relax and protect. All three friends practise together.",
    "translation": "Goldy和Callum正在学习健康习惯。Goldy说：“睡觉、锻炼和干净的。”Callum给她看健康的和刷。他们还学习喝、伸展和呼吸。Jake找到了放松和保护这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "sleep",
        "睡觉"
      ],
      [
        "exercise",
        "锻炼"
      ],
      [
        "clean",
        "干净的"
      ],
      [
        "healthy",
        "健康的"
      ],
      [
        "brush",
        "刷"
      ],
      [
        "drink",
        "喝"
      ],
      [
        "stretch",
        "伸展"
      ],
      [
        "breathe",
        "呼吸"
      ],
      [
        "relax",
        "放松"
      ],
      [
        "protect",
        "保护"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about healthy habits.",
        "cn": "Goldy和Callum正在学习健康习惯。",
        "ex": "本句介绍学习主题“Healthy Habits”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"sleep, exercise, and clean.\" Callum shows her healthy and brush.",
        "cn": "Goldy说：“睡觉、锻炼和干净的。",
        "ex": "观察这一句如何把健康的和刷放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn drink, stretch, and breathe.",
        "cn": "”Callum给她看健康的和刷。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words relax and protect.",
        "cn": "他们还学习喝、伸展和呼吸。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "干净的",
            "clean"
          ],
          [
            "睡觉",
            "sleep"
          ],
          [
            "喝",
            "drink"
          ],
          [
            "放松",
            "relax"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "锻炼",
            "exercise"
          ],
          [
            "健康的",
            "healthy"
          ],
          [
            "放松",
            "relax"
          ],
          [
            "伸展",
            "stretch"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "睡觉",
        "word": "sleep",
        "shuffled": [
          "e",
          "l",
          "s",
          "p",
          "e"
        ]
      },
      {
        "cn": "干净的",
        "word": "clean",
        "shuffled": [
          "c",
          "e",
          "a",
          "n",
          "l"
        ]
      },
      {
        "cn": "刷",
        "word": "brush",
        "shuffled": [
          "s",
          "b",
          "u",
          "r",
          "h"
        ]
      },
      {
        "cn": "呼吸",
        "word": "breathe",
        "shuffled": [
          "r",
          "a",
          "e",
          "e",
          "t",
          "b",
          "h"
        ]
      },
      {
        "cn": "保护",
        "word": "protect",
        "shuffled": [
          "t",
          "p",
          "o",
          "e",
          "t",
          "r",
          "c"
        ]
      }
    ]
  },
  "junior-36": {
    "titleZh": "购物与价格",
    "titleEn": "Shopping",
    "story": "Goldy and Callum are learning about shopping. Goldy says, \"shop, price, and money.\" Callum shows her coin and receipt. They also learn discount, cash, and change. Jake finds the words basket and purchase. All three friends practise together.",
    "translation": "Goldy和Callum正在学习购物与价格。Goldy说：“商店、价格和钱。”Callum给她看硬币和收据。他们还学习折扣、现金和零钱。Jake找到了购物篮和购买这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "shop",
        "商店"
      ],
      [
        "price",
        "价格"
      ],
      [
        "money",
        "钱"
      ],
      [
        "coin",
        "硬币"
      ],
      [
        "receipt",
        "收据"
      ],
      [
        "discount",
        "折扣"
      ],
      [
        "cash",
        "现金"
      ],
      [
        "change",
        "零钱"
      ],
      [
        "basket",
        "购物篮"
      ],
      [
        "purchase",
        "购买"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about shopping.",
        "cn": "Goldy和Callum正在学习购物与价格。",
        "ex": "本句介绍学习主题“Shopping”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"shop, price, and money.\" Callum shows her coin and receipt.",
        "cn": "Goldy说：“商店、价格和钱。",
        "ex": "观察这一句如何把硬币和收据放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn discount, cash, and change.",
        "cn": "”Callum给她看硬币和收据。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words basket and purchase.",
        "cn": "他们还学习折扣、现金和零钱。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "钱",
            "money"
          ],
          [
            "商店",
            "shop"
          ],
          [
            "折扣",
            "discount"
          ],
          [
            "购物篮",
            "basket"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "价格",
            "price"
          ],
          [
            "硬币",
            "coin"
          ],
          [
            "购物篮",
            "basket"
          ],
          [
            "现金",
            "cash"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "商店",
        "word": "shop",
        "shuffled": [
          "o",
          "h",
          "p",
          "s"
        ]
      },
      {
        "cn": "钱",
        "word": "money",
        "shuffled": [
          "e",
          "n",
          "m",
          "o",
          "y"
        ]
      },
      {
        "cn": "收据",
        "word": "receipt",
        "shuffled": [
          "i",
          "e",
          "e",
          "c",
          "r",
          "t",
          "p"
        ]
      },
      {
        "cn": "零钱",
        "word": "change",
        "shuffled": [
          "n",
          "e",
          "c",
          "a",
          "h",
          "g"
        ]
      },
      {
        "cn": "购买",
        "word": "purchase",
        "shuffled": [
          "u",
          "c",
          "r",
          "p",
          "s",
          "e",
          "h",
          "a"
        ]
      }
    ]
  },
  "junior-37": {
    "titleZh": "生日庆祝",
    "titleEn": "Birthdays",
    "story": "Goldy and Callum are learning about birthdays. Goldy says, \"birthday, cake, and candle.\" Callum shows her present and party. They also learn balloon, invitation, and celebrate. Jake finds the words wish and surprise. All three friends practise together.",
    "translation": "Goldy和Callum正在学习生日庆祝。Goldy说：“生日、蛋糕和蜡烛。”Callum给她看礼物和派对。他们还学习气球、邀请函和庆祝。Jake找到了愿望和惊喜这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "birthday",
        "生日"
      ],
      [
        "cake",
        "蛋糕"
      ],
      [
        "candle",
        "蜡烛"
      ],
      [
        "present",
        "礼物"
      ],
      [
        "party",
        "派对"
      ],
      [
        "balloon",
        "气球"
      ],
      [
        "invitation",
        "邀请函"
      ],
      [
        "celebrate",
        "庆祝"
      ],
      [
        "wish",
        "愿望"
      ],
      [
        "surprise",
        "惊喜"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about birthdays.",
        "cn": "Goldy和Callum正在学习生日庆祝。",
        "ex": "本句介绍学习主题“Birthdays”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"birthday, cake, and candle.\" Callum shows her present and party.",
        "cn": "Goldy说：“生日、蛋糕和蜡烛。",
        "ex": "观察这一句如何把礼物和派对放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn balloon, invitation, and celebrate.",
        "cn": "”Callum给她看礼物和派对。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words wish and surprise.",
        "cn": "他们还学习气球、邀请函和庆祝。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "蜡烛",
            "candle"
          ],
          [
            "生日",
            "birthday"
          ],
          [
            "气球",
            "balloon"
          ],
          [
            "愿望",
            "wish"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "蛋糕",
            "cake"
          ],
          [
            "礼物",
            "present"
          ],
          [
            "愿望",
            "wish"
          ],
          [
            "邀请函",
            "invitation"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "生日",
        "word": "birthday",
        "shuffled": [
          "y",
          "d",
          "h",
          "i",
          "r",
          "b",
          "t",
          "a"
        ]
      },
      {
        "cn": "蜡烛",
        "word": "candle",
        "shuffled": [
          "l",
          "c",
          "e",
          "d",
          "n",
          "a"
        ]
      },
      {
        "cn": "派对",
        "word": "party",
        "shuffled": [
          "t",
          "y",
          "a",
          "r",
          "p"
        ]
      },
      {
        "cn": "庆祝",
        "word": "celebrate",
        "shuffled": [
          "a",
          "e",
          "l",
          "r",
          "e",
          "t",
          "e",
          "b",
          "c"
        ]
      },
      {
        "cn": "惊喜",
        "word": "surprise",
        "shuffled": [
          "e",
          "u",
          "s",
          "r",
          "i",
          "s",
          "r",
          "p"
        ]
      }
    ]
  },
  "junior-38": {
    "titleZh": "旅行准备",
    "titleEn": "Travel Essentials",
    "story": "Goldy and Callum are learning about travel essentials. Goldy says, \"passport, ticket, and suitcase.\" Callum shows her hotel and airport. They also learn map, camera, and journey. Jake finds the words arrival and departure. All three friends practise together.",
    "translation": "Goldy和Callum正在学习旅行准备。Goldy说：“护照、票和行李箱。”Callum给她看酒店和机场。他们还学习地图、相机和旅程。Jake找到了抵达和出发这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "passport",
        "护照"
      ],
      [
        "ticket",
        "票"
      ],
      [
        "suitcase",
        "行李箱"
      ],
      [
        "hotel",
        "酒店"
      ],
      [
        "airport",
        "机场"
      ],
      [
        "map",
        "地图"
      ],
      [
        "camera",
        "相机"
      ],
      [
        "journey",
        "旅程"
      ],
      [
        "arrival",
        "抵达"
      ],
      [
        "departure",
        "出发"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about travel essentials.",
        "cn": "Goldy和Callum正在学习旅行准备。",
        "ex": "本句介绍学习主题“Travel Essentials”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"passport, ticket, and suitcase.\" Callum shows her hotel and airport.",
        "cn": "Goldy说：“护照、票和行李箱。",
        "ex": "观察这一句如何把酒店和机场放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn map, camera, and journey.",
        "cn": "”Callum给她看酒店和机场。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words arrival and departure.",
        "cn": "他们还学习地图、相机和旅程。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "行李箱",
            "suitcase"
          ],
          [
            "护照",
            "passport"
          ],
          [
            "地图",
            "map"
          ],
          [
            "抵达",
            "arrival"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "票",
            "ticket"
          ],
          [
            "酒店",
            "hotel"
          ],
          [
            "抵达",
            "arrival"
          ],
          [
            "相机",
            "camera"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "护照",
        "word": "passport",
        "shuffled": [
          "s",
          "a",
          "o",
          "r",
          "p",
          "t",
          "p",
          "s"
        ]
      },
      {
        "cn": "行李箱",
        "word": "suitcase",
        "shuffled": [
          "i",
          "t",
          "c",
          "s",
          "s",
          "u",
          "a",
          "e"
        ]
      },
      {
        "cn": "机场",
        "word": "airport",
        "shuffled": [
          "o",
          "a",
          "r",
          "i",
          "p",
          "t",
          "r"
        ]
      },
      {
        "cn": "旅程",
        "word": "journey",
        "shuffled": [
          "j",
          "e",
          "o",
          "r",
          "u",
          "n",
          "y"
        ]
      },
      {
        "cn": "出发",
        "word": "departure",
        "shuffled": [
          "r",
          "r",
          "a",
          "t",
          "u",
          "d",
          "e",
          "p",
          "e"
        ]
      }
    ]
  },
  "junior-39": {
    "titleZh": "节日与文化",
    "titleEn": "Festivals",
    "story": "Goldy and Callum are learning about festivals. Goldy says, \"festival, lantern, and parade.\" Callum shows her costume and tradition. They also learn firework, ceremony, and decoration. Jake finds the words community and holiday. All three friends practise together.",
    "translation": "Goldy和Callum正在学习节日与文化。Goldy说：“节日、灯笼和游行。”Callum给她看服装和传统。他们还学习烟花、仪式和装饰。Jake找到了社区和假日这些单词。三个朋友一起练习。",
    "vocabulary": [
      [
        "festival",
        "节日"
      ],
      [
        "lantern",
        "灯笼"
      ],
      [
        "parade",
        "游行"
      ],
      [
        "costume",
        "服装"
      ],
      [
        "tradition",
        "传统"
      ],
      [
        "firework",
        "烟花"
      ],
      [
        "ceremony",
        "仪式"
      ],
      [
        "decoration",
        "装饰"
      ],
      [
        "community",
        "社区"
      ],
      [
        "holiday",
        "假日"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy and Callum are learning about festivals.",
        "cn": "Goldy和Callum正在学习节日与文化。",
        "ex": "本句介绍学习主题“Festivals”。注意英语名词短语的位置和基本语序。"
      },
      {
        "en": "Goldy says, \"festival, lantern, and parade.\" Callum shows her costume and tradition.",
        "cn": "Goldy说：“节日、灯笼和游行。",
        "ex": "观察这一句如何把服装和传统放进完整的句子中，而不是只背孤立的词。"
      },
      {
        "en": "They also learn firework, ceremony, and decoration.",
        "cn": "”Callum给她看服装和传统。",
        "ex": "本句通过并列结构表达多个相关概念；朗读时在逗号处自然停顿。"
      },
      {
        "en": "Jake finds the words community and holiday.",
        "cn": "他们还学习烟花、仪式和装饰。",
        "ex": "练习用自己的话复述本句；注意主语、动词及内容之间的关系。"
      }
    ],
    "questions": [
      {
        "cn": "哪两位朋友一起学习？",
        "en": "Which two friends learn together?",
        "options": [
          [
            "Goldy和Callum",
            "Goldy and Callum"
          ],
          [
            "Goldy和老师",
            "Goldy and the teacher"
          ],
          [
            "Jake和老师",
            "Jake and the teacher"
          ],
          [
            "只有Jake",
            "Only Jake"
          ]
        ],
        "correct": 0,
        "evidence": "Goldy and Callum are learning about"
      },
      {
        "cn": "Goldy首先说出的词是哪一个？",
        "en": "Which word does Goldy mention first?",
        "options": [
          [
            "游行",
            "parade"
          ],
          [
            "节日",
            "festival"
          ],
          [
            "烟花",
            "firework"
          ],
          [
            "社区",
            "community"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy says"
      },
      {
        "cn": "谁向Goldy展示另外两个词？",
        "en": "Who shows Goldy two more words?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "妈妈",
            "Mum"
          ]
        ],
        "correct": 1,
        "evidence": "Callum shows her"
      },
      {
        "cn": "Jake找到的是哪一个词？",
        "en": "Which word does Jake find?",
        "options": [
          [
            "灯笼",
            "lantern"
          ],
          [
            "服装",
            "costume"
          ],
          [
            "社区",
            "community"
          ],
          [
            "仪式",
            "ceremony"
          ]
        ],
        "correct": 2,
        "evidence": "Jake finds the words"
      },
      {
        "cn": "故事最后三个朋友做什么？",
        "en": "What do the three friends do at the end?",
        "options": [
          [
            "一起练习",
            "They practise together"
          ],
          [
            "去游泳",
            "They go swimming"
          ],
          [
            "做晚饭",
            "They cook dinner"
          ],
          [
            "去购物",
            "They go shopping"
          ]
        ],
        "correct": 0,
        "evidence": "All three friends practise together."
      }
    ],
    "writing": [
      {
        "cn": "节日",
        "word": "festival",
        "shuffled": [
          "v",
          "s",
          "a",
          "t",
          "i",
          "e",
          "f",
          "l"
        ]
      },
      {
        "cn": "游行",
        "word": "parade",
        "shuffled": [
          "a",
          "p",
          "d",
          "r",
          "e",
          "a"
        ]
      },
      {
        "cn": "传统",
        "word": "tradition",
        "shuffled": [
          "r",
          "i",
          "i",
          "a",
          "o",
          "d",
          "t",
          "t",
          "n"
        ]
      },
      {
        "cn": "装饰",
        "word": "decoration",
        "shuffled": [
          "r",
          "o",
          "c",
          "a",
          "e",
          "d",
          "t",
          "i",
          "n",
          "o"
        ]
      },
      {
        "cn": "假日",
        "word": "holiday",
        "shuffled": [
          "y",
          "i",
          "h",
          "a",
          "l",
          "d",
          "o"
        ]
      }
    ]
  },
  "middle-1": {
    "titleZh": "学习策略",
    "titleEn": "Study Strategies",
    "story": "In a class about study strategies, Goldy prepares ten useful expressions. She starts with focus, review, and memorise. Callum explains the importance of analyse and organise. The class discusses outline, highlight, and revise. Finally, Jake uses clarify and concentrate in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于学习策略的课上，Goldy准备了十个实用表达。她从专注、复习和记忆开始。Callum解释了分析和整理的重要性。全班讨论提纲、标出重点和修改。最后，Jake在简短的展示中使用了澄清和集中注意。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "focus",
        "专注"
      ],
      [
        "review",
        "复习"
      ],
      [
        "memorise",
        "记忆"
      ],
      [
        "analyse",
        "分析"
      ],
      [
        "organise",
        "整理"
      ],
      [
        "outline",
        "提纲"
      ],
      [
        "highlight",
        "标出重点"
      ],
      [
        "revise",
        "修改"
      ],
      [
        "clarify",
        "澄清"
      ],
      [
        "concentrate",
        "集中注意"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about study strategies, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于学习策略的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置学习策略的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with focus, review, and memorise.",
        "cn": "她从专注、复习和记忆开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of analyse and organise.",
        "cn": "Callum解释了分析和整理的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses outline, highlight, and revise.",
        "cn": "全班讨论提纲、标出重点和修改。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "分析",
            "analyse"
          ],
          [
            "标出重点",
            "highlight"
          ],
          [
            "专注",
            "focus"
          ],
          [
            "集中注意",
            "concentrate"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "专注",
        "word": "focus",
        "shuffled": [
          "o",
          "s",
          "f",
          "c",
          "u"
        ]
      },
      {
        "cn": "记忆",
        "word": "memorise",
        "shuffled": [
          "s",
          "e",
          "r",
          "o",
          "e",
          "i",
          "m",
          "m"
        ]
      },
      {
        "cn": "整理",
        "word": "organise",
        "shuffled": [
          "i",
          "e",
          "r",
          "o",
          "g",
          "s",
          "a",
          "n"
        ]
      },
      {
        "cn": "修改",
        "word": "revise",
        "shuffled": [
          "r",
          "i",
          "e",
          "e",
          "v",
          "s"
        ]
      },
      {
        "cn": "集中注意",
        "word": "concentrate",
        "shuffled": [
          "t",
          "o",
          "t",
          "c",
          "n",
          "e",
          "a",
          "c",
          "n",
          "e",
          "r"
        ]
      }
    ]
  },
  "middle-2": {
    "titleZh": "课堂讨论",
    "titleEn": "Class Discussion",
    "story": "In a class about class discussion, Goldy prepares ten useful expressions. She starts with discuss, explain, and describe. Callum explains the importance of compare and contrast. The class discusses respond, question, and opinion. Finally, Jake uses reason and example in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于课堂讨论的课上，Goldy准备了十个实用表达。她从讨论、解释和描述开始。Callum解释了比较和对比的重要性。全班讨论回应、问题和观点。最后，Jake在简短的展示中使用了理由和例子。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "discuss",
        "讨论"
      ],
      [
        "explain",
        "解释"
      ],
      [
        "describe",
        "描述"
      ],
      [
        "compare",
        "比较"
      ],
      [
        "contrast",
        "对比"
      ],
      [
        "respond",
        "回应"
      ],
      [
        "question",
        "问题"
      ],
      [
        "opinion",
        "观点"
      ],
      [
        "reason",
        "理由"
      ],
      [
        "example",
        "例子"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about class discussion, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于课堂讨论的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置课堂讨论的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with discuss, explain, and describe.",
        "cn": "她从讨论、解释和描述开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of compare and contrast.",
        "cn": "Callum解释了比较和对比的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses respond, question, and opinion.",
        "cn": "全班讨论回应、问题和观点。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "比较",
            "compare"
          ],
          [
            "问题",
            "question"
          ],
          [
            "讨论",
            "discuss"
          ],
          [
            "例子",
            "example"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "讨论",
        "word": "discuss",
        "shuffled": [
          "s",
          "s",
          "d",
          "s",
          "u",
          "c",
          "i"
        ]
      },
      {
        "cn": "描述",
        "word": "describe",
        "shuffled": [
          "e",
          "e",
          "s",
          "i",
          "c",
          "d",
          "b",
          "r"
        ]
      },
      {
        "cn": "对比",
        "word": "contrast",
        "shuffled": [
          "t",
          "o",
          "a",
          "s",
          "t",
          "n",
          "r",
          "c"
        ]
      },
      {
        "cn": "观点",
        "word": "opinion",
        "shuffled": [
          "o",
          "n",
          "n",
          "p",
          "i",
          "i",
          "o"
        ]
      },
      {
        "cn": "例子",
        "word": "example",
        "shuffled": [
          "e",
          "a",
          "m",
          "l",
          "x",
          "p",
          "e"
        ]
      }
    ]
  },
  "middle-3": {
    "titleZh": "校园活动",
    "titleEn": "Campus Life",
    "story": "In a class about campus life, Goldy prepares ten useful expressions. She starts with lecture, tutorial, and seminar. Callum explains the importance of assignment and deadline. The class discusses attendance, syllabus, and semester. Finally, Jake uses workshop and campus in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于校园活动的课上，Goldy准备了十个实用表达。她从讲座、辅导课和研讨课开始。Callum解释了作业和截止日期的重要性。全班讨论出勤、教学大纲和学期。最后，Jake在简短的展示中使用了工作坊和校园。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "lecture",
        "讲座"
      ],
      [
        "tutorial",
        "辅导课"
      ],
      [
        "seminar",
        "研讨课"
      ],
      [
        "assignment",
        "作业"
      ],
      [
        "deadline",
        "截止日期"
      ],
      [
        "attendance",
        "出勤"
      ],
      [
        "syllabus",
        "教学大纲"
      ],
      [
        "semester",
        "学期"
      ],
      [
        "workshop",
        "工作坊"
      ],
      [
        "campus",
        "校园"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about campus life, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于校园活动的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置校园活动的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with lecture, tutorial, and seminar.",
        "cn": "她从讲座、辅导课和研讨课开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of assignment and deadline.",
        "cn": "Callum解释了作业和截止日期的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses attendance, syllabus, and semester.",
        "cn": "全班讨论出勤、教学大纲和学期。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "作业",
            "assignment"
          ],
          [
            "教学大纲",
            "syllabus"
          ],
          [
            "讲座",
            "lecture"
          ],
          [
            "校园",
            "campus"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "讲座",
        "word": "lecture",
        "shuffled": [
          "r",
          "u",
          "e",
          "t",
          "e",
          "c",
          "l"
        ]
      },
      {
        "cn": "研讨课",
        "word": "seminar",
        "shuffled": [
          "a",
          "s",
          "i",
          "m",
          "n",
          "r",
          "e"
        ]
      },
      {
        "cn": "截止日期",
        "word": "deadline",
        "shuffled": [
          "e",
          "a",
          "d",
          "e",
          "i",
          "n",
          "l",
          "d"
        ]
      },
      {
        "cn": "学期",
        "word": "semester",
        "shuffled": [
          "r",
          "e",
          "s",
          "s",
          "e",
          "t",
          "m",
          "e"
        ]
      },
      {
        "cn": "校园",
        "word": "campus",
        "shuffled": [
          "u",
          "m",
          "c",
          "s",
          "a",
          "p"
        ]
      }
    ]
  },
  "middle-4": {
    "titleZh": "阅读方法",
    "titleEn": "Reading Skills",
    "story": "In a class about reading skills, Goldy prepares ten useful expressions. She starts with paragraph, topic, and summary. Callum explains the importance of detail and inference. The class discusses context, author, and purpose. Finally, Jake uses reference and conclusion in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于阅读方法的课上，Goldy准备了十个实用表达。她从段落、主题和摘要开始。Callum解释了细节和推断的重要性。全班讨论语境、作者和目的。最后，Jake在简短的展示中使用了指代和结论。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "paragraph",
        "段落"
      ],
      [
        "topic",
        "主题"
      ],
      [
        "summary",
        "摘要"
      ],
      [
        "detail",
        "细节"
      ],
      [
        "inference",
        "推断"
      ],
      [
        "context",
        "语境"
      ],
      [
        "author",
        "作者"
      ],
      [
        "purpose",
        "目的"
      ],
      [
        "reference",
        "指代"
      ],
      [
        "conclusion",
        "结论"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about reading skills, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于阅读方法的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置阅读方法的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with paragraph, topic, and summary.",
        "cn": "她从段落、主题和摘要开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of detail and inference.",
        "cn": "Callum解释了细节和推断的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses context, author, and purpose.",
        "cn": "全班讨论语境、作者和目的。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "细节",
            "detail"
          ],
          [
            "作者",
            "author"
          ],
          [
            "段落",
            "paragraph"
          ],
          [
            "结论",
            "conclusion"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "段落",
        "word": "paragraph",
        "shuffled": [
          "h",
          "a",
          "p",
          "p",
          "r",
          "a",
          "r",
          "g",
          "a"
        ]
      },
      {
        "cn": "摘要",
        "word": "summary",
        "shuffled": [
          "m",
          "s",
          "y",
          "m",
          "a",
          "r",
          "u"
        ]
      },
      {
        "cn": "推断",
        "word": "inference",
        "shuffled": [
          "f",
          "n",
          "i",
          "r",
          "c",
          "e",
          "e",
          "e",
          "n"
        ]
      },
      {
        "cn": "目的",
        "word": "purpose",
        "shuffled": [
          "r",
          "u",
          "p",
          "s",
          "p",
          "o",
          "e"
        ]
      },
      {
        "cn": "结论",
        "word": "conclusion",
        "shuffled": [
          "n",
          "l",
          "o",
          "c",
          "c",
          "o",
          "s",
          "n",
          "i",
          "u"
        ]
      }
    ]
  },
  "middle-5": {
    "titleZh": "写作结构",
    "titleEn": "Writing Structure",
    "story": "In a class about writing structure, Goldy prepares ten useful expressions. She starts with introduction, argument, and evidence. Callum explains the importance of thesis and transition. The class discusses coherence, quotation, and citation. Finally, Jake uses reference list and draft in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于写作结构的课上，Goldy准备了十个实用表达。她从引言、论点和证据开始。Callum解释了中心论点和过渡的重要性。全班讨论连贯性、引文和引用。最后，Jake在简短的展示中使用了参考文献表和草稿。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "introduction",
        "引言"
      ],
      [
        "argument",
        "论点"
      ],
      [
        "evidence",
        "证据"
      ],
      [
        "thesis",
        "中心论点"
      ],
      [
        "transition",
        "过渡"
      ],
      [
        "coherence",
        "连贯性"
      ],
      [
        "quotation",
        "引文"
      ],
      [
        "citation",
        "引用"
      ],
      [
        "reference list",
        "参考文献表"
      ],
      [
        "draft",
        "草稿"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about writing structure, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于写作结构的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置写作结构的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with introduction, argument, and evidence.",
        "cn": "她从引言、论点和证据开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of thesis and transition.",
        "cn": "Callum解释了中心论点和过渡的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses coherence, quotation, and citation.",
        "cn": "全班讨论连贯性、引文和引用。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "中心论点",
            "thesis"
          ],
          [
            "引文",
            "quotation"
          ],
          [
            "引言",
            "introduction"
          ],
          [
            "草稿",
            "draft"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "引言",
        "word": "introduction",
        "shuffled": [
          "n",
          "t",
          "i",
          "o",
          "i",
          "d",
          "r",
          "o",
          "t",
          "n",
          "c",
          "u"
        ]
      },
      {
        "cn": "证据",
        "word": "evidence",
        "shuffled": [
          "e",
          "c",
          "e",
          "i",
          "e",
          "v",
          "n",
          "d"
        ]
      },
      {
        "cn": "过渡",
        "word": "transition",
        "shuffled": [
          "i",
          "n",
          "t",
          "r",
          "n",
          "i",
          "s",
          "a",
          "t",
          "o"
        ]
      },
      {
        "cn": "引用",
        "word": "citation",
        "shuffled": [
          "t",
          "a",
          "i",
          "i",
          "n",
          "c",
          "t",
          "o"
        ]
      },
      {
        "cn": "草稿",
        "word": "draft",
        "shuffled": [
          "d",
          "f",
          "r",
          "a",
          "t"
        ]
      }
    ]
  },
  "middle-6": {
    "titleZh": "听力技巧",
    "titleEn": "Listening Skills",
    "story": "In a class about listening skills, Goldy prepares ten useful expressions. She starts with speaker, accent, and tone. Callum explains the importance of pause and emphasis. The class discusses keyword, transcript, and recording. Finally, Jake uses pronunciation and comprehension in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于听力技巧的课上，Goldy准备了十个实用表达。她从讲话者、口音和语气开始。Callum解释了停顿和强调的重要性。全班讨论关键词、文字稿和录音。最后，Jake在简短的展示中使用了发音和理解。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "speaker",
        "讲话者"
      ],
      [
        "accent",
        "口音"
      ],
      [
        "tone",
        "语气"
      ],
      [
        "pause",
        "停顿"
      ],
      [
        "emphasis",
        "强调"
      ],
      [
        "keyword",
        "关键词"
      ],
      [
        "transcript",
        "文字稿"
      ],
      [
        "recording",
        "录音"
      ],
      [
        "pronunciation",
        "发音"
      ],
      [
        "comprehension",
        "理解"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about listening skills, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于听力技巧的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置听力技巧的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with speaker, accent, and tone.",
        "cn": "她从讲话者、口音和语气开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of pause and emphasis.",
        "cn": "Callum解释了停顿和强调的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses keyword, transcript, and recording.",
        "cn": "全班讨论关键词、文字稿和录音。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "停顿",
            "pause"
          ],
          [
            "文字稿",
            "transcript"
          ],
          [
            "讲话者",
            "speaker"
          ],
          [
            "理解",
            "comprehension"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "讲话者",
        "word": "speaker",
        "shuffled": [
          "e",
          "p",
          "r",
          "e",
          "a",
          "k",
          "s"
        ]
      },
      {
        "cn": "语气",
        "word": "tone",
        "shuffled": [
          "o",
          "t",
          "n",
          "e"
        ]
      },
      {
        "cn": "强调",
        "word": "emphasis",
        "shuffled": [
          "s",
          "s",
          "p",
          "e",
          "a",
          "m",
          "h",
          "i"
        ]
      },
      {
        "cn": "录音",
        "word": "recording",
        "shuffled": [
          "c",
          "n",
          "r",
          "r",
          "d",
          "e",
          "o",
          "i",
          "g"
        ]
      },
      {
        "cn": "理解",
        "word": "comprehension",
        "shuffled": [
          "n",
          "p",
          "e",
          "m",
          "h",
          "o",
          "r",
          "o",
          "n",
          "s",
          "i",
          "e",
          "c"
        ]
      }
    ]
  },
  "middle-7": {
    "titleZh": "数据与图表",
    "titleEn": "Data and Charts",
    "story": "In a class about data and charts, Goldy prepares ten useful expressions. She starts with chart, graph, and table. Callum explains the importance of figure and percentage. The class discusses increase, decrease, and trend. Finally, Jake uses average and peak in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于数据与图表的课上，Goldy准备了十个实用表达。她从图表、曲线图和表格开始。Callum解释了数值和百分比的重要性。全班讨论增加、减少和趋势。最后，Jake在简短的展示中使用了平均值和峰值。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "chart",
        "图表"
      ],
      [
        "graph",
        "曲线图"
      ],
      [
        "table",
        "表格"
      ],
      [
        "figure",
        "数值"
      ],
      [
        "percentage",
        "百分比"
      ],
      [
        "increase",
        "增加"
      ],
      [
        "decrease",
        "减少"
      ],
      [
        "trend",
        "趋势"
      ],
      [
        "average",
        "平均值"
      ],
      [
        "peak",
        "峰值"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about data and charts, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于数据与图表的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置数据与图表的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with chart, graph, and table.",
        "cn": "她从图表、曲线图和表格开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of figure and percentage.",
        "cn": "Callum解释了数值和百分比的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses increase, decrease, and trend.",
        "cn": "全班讨论增加、减少和趋势。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "数值",
            "figure"
          ],
          [
            "减少",
            "decrease"
          ],
          [
            "图表",
            "chart"
          ],
          [
            "峰值",
            "peak"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "图表",
        "word": "chart",
        "shuffled": [
          "r",
          "a",
          "h",
          "c",
          "t"
        ]
      },
      {
        "cn": "表格",
        "word": "table",
        "shuffled": [
          "e",
          "l",
          "t",
          "a",
          "b"
        ]
      },
      {
        "cn": "百分比",
        "word": "percentage",
        "shuffled": [
          "r",
          "e",
          "p",
          "t",
          "e",
          "n",
          "c",
          "e",
          "g",
          "a"
        ]
      },
      {
        "cn": "趋势",
        "word": "trend",
        "shuffled": [
          "e",
          "n",
          "d",
          "t",
          "r"
        ]
      },
      {
        "cn": "峰值",
        "word": "peak",
        "shuffled": [
          "k",
          "a",
          "e",
          "p"
        ]
      }
    ]
  },
  "middle-8": {
    "titleZh": "时间管理",
    "titleEn": "Time Management",
    "story": "In a class about time management, Goldy prepares ten useful expressions. She starts with schedule, priority, and task. Callum explains the importance of efficient and delay. The class discusses urgent, plan, and complete. Finally, Jake uses track and progress in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于时间管理的课上，Goldy准备了十个实用表达。她从时间表、优先事项和任务开始。Callum解释了高效的和拖延的重要性。全班讨论紧急的、计划和完成。最后，Jake在简短的展示中使用了跟踪和进度。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "schedule",
        "时间表"
      ],
      [
        "priority",
        "优先事项"
      ],
      [
        "task",
        "任务"
      ],
      [
        "efficient",
        "高效的"
      ],
      [
        "delay",
        "拖延"
      ],
      [
        "urgent",
        "紧急的"
      ],
      [
        "plan",
        "计划"
      ],
      [
        "complete",
        "完成"
      ],
      [
        "track",
        "跟踪"
      ],
      [
        "progress",
        "进度"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about time management, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于时间管理的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置时间管理的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with schedule, priority, and task.",
        "cn": "她从时间表、优先事项和任务开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of efficient and delay.",
        "cn": "Callum解释了高效的和拖延的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses urgent, plan, and complete.",
        "cn": "全班讨论紧急的、计划和完成。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "高效的",
            "efficient"
          ],
          [
            "计划",
            "plan"
          ],
          [
            "时间表",
            "schedule"
          ],
          [
            "进度",
            "progress"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "时间表",
        "word": "schedule",
        "shuffled": [
          "d",
          "c",
          "h",
          "e",
          "s",
          "l",
          "e",
          "u"
        ]
      },
      {
        "cn": "任务",
        "word": "task",
        "shuffled": [
          "s",
          "a",
          "k",
          "t"
        ]
      },
      {
        "cn": "拖延",
        "word": "delay",
        "shuffled": [
          "d",
          "y",
          "l",
          "a",
          "e"
        ]
      },
      {
        "cn": "完成",
        "word": "complete",
        "shuffled": [
          "o",
          "e",
          "t",
          "e",
          "l",
          "p",
          "c",
          "m"
        ]
      },
      {
        "cn": "进度",
        "word": "progress",
        "shuffled": [
          "s",
          "r",
          "e",
          "p",
          "o",
          "r",
          "s",
          "g"
        ]
      }
    ]
  },
  "middle-9": {
    "titleZh": "工作与团队",
    "titleEn": "Work and Teams",
    "story": "In a class about work and teams, Goldy prepares ten useful expressions. She starts with colleague, manager, and meeting. Callum explains the importance of project and responsibility. The class discusses collaborate, feedback, and performance. Finally, Jake uses leadership and delegate in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于工作与团队的课上，Goldy准备了十个实用表达。她从同事、经理和会议开始。Callum解释了项目和责任的重要性。全班讨论合作、反馈和表现。最后，Jake在简短的展示中使用了领导力和委派。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "colleague",
        "同事"
      ],
      [
        "manager",
        "经理"
      ],
      [
        "meeting",
        "会议"
      ],
      [
        "project",
        "项目"
      ],
      [
        "responsibility",
        "责任"
      ],
      [
        "collaborate",
        "合作"
      ],
      [
        "feedback",
        "反馈"
      ],
      [
        "performance",
        "表现"
      ],
      [
        "leadership",
        "领导力"
      ],
      [
        "delegate",
        "委派"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about work and teams, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于工作与团队的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置工作与团队的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with colleague, manager, and meeting.",
        "cn": "她从同事、经理和会议开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of project and responsibility.",
        "cn": "Callum解释了项目和责任的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses collaborate, feedback, and performance.",
        "cn": "全班讨论合作、反馈和表现。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "项目",
            "project"
          ],
          [
            "反馈",
            "feedback"
          ],
          [
            "同事",
            "colleague"
          ],
          [
            "委派",
            "delegate"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "同事",
        "word": "colleague",
        "shuffled": [
          "l",
          "g",
          "l",
          "c",
          "u",
          "o",
          "e",
          "e",
          "a"
        ]
      },
      {
        "cn": "会议",
        "word": "meeting",
        "shuffled": [
          "e",
          "m",
          "g",
          "n",
          "t",
          "i",
          "e"
        ]
      },
      {
        "cn": "责任",
        "word": "responsibility",
        "shuffled": [
          "o",
          "y",
          "i",
          "s",
          "i",
          "s",
          "b",
          "n",
          "i",
          "p",
          "t",
          "l",
          "e",
          "r"
        ]
      },
      {
        "cn": "表现",
        "word": "performance",
        "shuffled": [
          "f",
          "r",
          "c",
          "p",
          "n",
          "r",
          "e",
          "o",
          "a",
          "m",
          "e"
        ]
      },
      {
        "cn": "委派",
        "word": "delegate",
        "shuffled": [
          "t",
          "e",
          "e",
          "g",
          "e",
          "a",
          "l",
          "d"
        ]
      }
    ]
  },
  "middle-10": {
    "titleZh": "求职与面试",
    "titleEn": "Job Interviews",
    "story": "In a class about job interviews, Goldy prepares ten useful expressions. She starts with resume, interview, and experience. Callum explains the importance of qualification and skill. The class discusses reference check, applicant, and employer. Finally, Jake uses position and salary in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于求职与面试的课上，Goldy准备了十个实用表达。她从简历、面试和经验开始。Callum解释了资质和技能的重要性。全班讨论背景核查、申请人和雇主。最后，Jake在简短的展示中使用了职位和薪资。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "resume",
        "简历"
      ],
      [
        "interview",
        "面试"
      ],
      [
        "experience",
        "经验"
      ],
      [
        "qualification",
        "资质"
      ],
      [
        "skill",
        "技能"
      ],
      [
        "reference check",
        "背景核查"
      ],
      [
        "applicant",
        "申请人"
      ],
      [
        "employer",
        "雇主"
      ],
      [
        "position",
        "职位"
      ],
      [
        "salary",
        "薪资"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about job interviews, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于求职与面试的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置求职与面试的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with resume, interview, and experience.",
        "cn": "她从简历、面试和经验开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of qualification and skill.",
        "cn": "Callum解释了资质和技能的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses reference check, applicant, and employer.",
        "cn": "全班讨论背景核查、申请人和雇主。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "资质",
            "qualification"
          ],
          [
            "申请人",
            "applicant"
          ],
          [
            "简历",
            "resume"
          ],
          [
            "薪资",
            "salary"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "简历",
        "word": "resume",
        "shuffled": [
          "u",
          "e",
          "m",
          "r",
          "s",
          "e"
        ]
      },
      {
        "cn": "经验",
        "word": "experience",
        "shuffled": [
          "e",
          "i",
          "e",
          "e",
          "p",
          "c",
          "n",
          "x",
          "e",
          "r"
        ]
      },
      {
        "cn": "技能",
        "word": "skill",
        "shuffled": [
          "k",
          "s",
          "l",
          "i",
          "l"
        ]
      },
      {
        "cn": "雇主",
        "word": "employer",
        "shuffled": [
          "r",
          "e",
          "o",
          "p",
          "l",
          "y",
          "e",
          "m"
        ]
      },
      {
        "cn": "薪资",
        "word": "salary",
        "shuffled": [
          "s",
          "l",
          "a",
          "y",
          "a",
          "r"
        ]
      }
    ]
  },
  "middle-11": {
    "titleZh": "顾客与服务",
    "titleEn": "Customer Service",
    "story": "In a class about customer service, Goldy prepares ten useful expressions. She starts with customer, request, and complaint. Callum explains the importance of solution and refund. The class discusses policy, satisfaction, and service. Finally, Jake uses assistance and professional in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于顾客与服务的课上，Goldy准备了十个实用表达。她从顾客、请求和投诉开始。Callum解释了解决办法和退款的重要性。全班讨论政策、满意度和服务。最后，Jake在简短的展示中使用了协助和专业的。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "customer",
        "顾客"
      ],
      [
        "request",
        "请求"
      ],
      [
        "complaint",
        "投诉"
      ],
      [
        "solution",
        "解决办法"
      ],
      [
        "refund",
        "退款"
      ],
      [
        "policy",
        "政策"
      ],
      [
        "satisfaction",
        "满意度"
      ],
      [
        "service",
        "服务"
      ],
      [
        "assistance",
        "协助"
      ],
      [
        "professional",
        "专业的"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about customer service, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于顾客与服务的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置顾客与服务的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with customer, request, and complaint.",
        "cn": "她从顾客、请求和投诉开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of solution and refund.",
        "cn": "Callum解释了解决办法和退款的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses policy, satisfaction, and service.",
        "cn": "全班讨论政策、满意度和服务。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "解决办法",
            "solution"
          ],
          [
            "满意度",
            "satisfaction"
          ],
          [
            "顾客",
            "customer"
          ],
          [
            "专业的",
            "professional"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "顾客",
        "word": "customer",
        "shuffled": [
          "m",
          "e",
          "r",
          "s",
          "t",
          "u",
          "o",
          "c"
        ]
      },
      {
        "cn": "投诉",
        "word": "complaint",
        "shuffled": [
          "m",
          "o",
          "c",
          "n",
          "a",
          "t",
          "l",
          "i",
          "p"
        ]
      },
      {
        "cn": "退款",
        "word": "refund",
        "shuffled": [
          "e",
          "n",
          "f",
          "u",
          "r",
          "d"
        ]
      },
      {
        "cn": "服务",
        "word": "service",
        "shuffled": [
          "e",
          "r",
          "e",
          "v",
          "c",
          "i",
          "s"
        ]
      },
      {
        "cn": "专业的",
        "word": "professional",
        "shuffled": [
          "o",
          "o",
          "r",
          "a",
          "l",
          "f",
          "n",
          "s",
          "s",
          "p",
          "i",
          "e"
        ]
      }
    ]
  },
  "middle-12": {
    "titleZh": "市场与商业",
    "titleEn": "Business Basics",
    "story": "In a class about business basics, Goldy prepares ten useful expressions. She starts with business, product, and consumer. Callum explains the importance of revenue and cost. The class discusses profit, brand, and advertising. Finally, Jake uses sales and competition in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于市场与商业的课上，Goldy准备了十个实用表达。她从商业、产品和消费者开始。Callum解释了营收和成本的重要性。全班讨论利润、品牌和广告。最后，Jake在简短的展示中使用了销售和竞争。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "business",
        "商业"
      ],
      [
        "product",
        "产品"
      ],
      [
        "consumer",
        "消费者"
      ],
      [
        "revenue",
        "营收"
      ],
      [
        "cost",
        "成本"
      ],
      [
        "profit",
        "利润"
      ],
      [
        "brand",
        "品牌"
      ],
      [
        "advertising",
        "广告"
      ],
      [
        "sales",
        "销售"
      ],
      [
        "competition",
        "竞争"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about business basics, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于市场与商业的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置市场与商业的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with business, product, and consumer.",
        "cn": "她从商业、产品和消费者开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of revenue and cost.",
        "cn": "Callum解释了营收和成本的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses profit, brand, and advertising.",
        "cn": "全班讨论利润、品牌和广告。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "营收",
            "revenue"
          ],
          [
            "品牌",
            "brand"
          ],
          [
            "商业",
            "business"
          ],
          [
            "竞争",
            "competition"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "商业",
        "word": "business",
        "shuffled": [
          "s",
          "n",
          "i",
          "b",
          "e",
          "s",
          "s",
          "u"
        ]
      },
      {
        "cn": "消费者",
        "word": "consumer",
        "shuffled": [
          "m",
          "u",
          "o",
          "r",
          "s",
          "e",
          "c",
          "n"
        ]
      },
      {
        "cn": "成本",
        "word": "cost",
        "shuffled": [
          "s",
          "c",
          "o",
          "t"
        ]
      },
      {
        "cn": "广告",
        "word": "advertising",
        "shuffled": [
          "t",
          "g",
          "i",
          "a",
          "n",
          "e",
          "i",
          "r",
          "s",
          "v",
          "d"
        ]
      },
      {
        "cn": "竞争",
        "word": "competition",
        "shuffled": [
          "t",
          "o",
          "c",
          "o",
          "i",
          "m",
          "i",
          "p",
          "t",
          "e",
          "n"
        ]
      }
    ]
  },
  "middle-13": {
    "titleZh": "个人理财",
    "titleEn": "Personal Finance",
    "story": "In a class about personal finance, Goldy prepares ten useful expressions. She starts with budget, savings, and income. Callum explains the importance of expense and interest. The class discusses account, transfer, and payment. Finally, Jake uses invoice and investment in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于个人理财的课上，Goldy准备了十个实用表达。她从预算、储蓄和收入开始。Callum解释了支出和利息的重要性。全班讨论账户、转账和付款。最后，Jake在简短的展示中使用了发票和投资。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "budget",
        "预算"
      ],
      [
        "savings",
        "储蓄"
      ],
      [
        "income",
        "收入"
      ],
      [
        "expense",
        "支出"
      ],
      [
        "interest",
        "利息"
      ],
      [
        "account",
        "账户"
      ],
      [
        "transfer",
        "转账"
      ],
      [
        "payment",
        "付款"
      ],
      [
        "invoice",
        "发票"
      ],
      [
        "investment",
        "投资"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about personal finance, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于个人理财的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置个人理财的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with budget, savings, and income.",
        "cn": "她从预算、储蓄和收入开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of expense and interest.",
        "cn": "Callum解释了支出和利息的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses account, transfer, and payment.",
        "cn": "全班讨论账户、转账和付款。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "支出",
            "expense"
          ],
          [
            "转账",
            "transfer"
          ],
          [
            "预算",
            "budget"
          ],
          [
            "投资",
            "investment"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "预算",
        "word": "budget",
        "shuffled": [
          "b",
          "t",
          "e",
          "d",
          "u",
          "g"
        ]
      },
      {
        "cn": "收入",
        "word": "income",
        "shuffled": [
          "i",
          "e",
          "c",
          "m",
          "o",
          "n"
        ]
      },
      {
        "cn": "利息",
        "word": "interest",
        "shuffled": [
          "r",
          "e",
          "t",
          "e",
          "i",
          "s",
          "n",
          "t"
        ]
      },
      {
        "cn": "付款",
        "word": "payment",
        "shuffled": [
          "m",
          "n",
          "a",
          "p",
          "y",
          "t",
          "e"
        ]
      },
      {
        "cn": "投资",
        "word": "investment",
        "shuffled": [
          "i",
          "s",
          "t",
          "m",
          "t",
          "n",
          "e",
          "v",
          "n",
          "e"
        ]
      }
    ]
  },
  "middle-14": {
    "titleZh": "数字设备",
    "titleEn": "Digital Devices",
    "story": "In a class about digital devices, Goldy prepares ten useful expressions. She starts with computer, keyboard, and screen. Callum explains the importance of charger and application. The class discusses software, hardware, and password. Finally, Jake uses network and storage in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于数字设备的课上，Goldy准备了十个实用表达。她从电脑、键盘和屏幕开始。Callum解释了充电器和应用程序的重要性。全班讨论软件、硬件和密码。最后，Jake在简短的展示中使用了网络和存储。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "computer",
        "电脑"
      ],
      [
        "keyboard",
        "键盘"
      ],
      [
        "screen",
        "屏幕"
      ],
      [
        "charger",
        "充电器"
      ],
      [
        "application",
        "应用程序"
      ],
      [
        "software",
        "软件"
      ],
      [
        "hardware",
        "硬件"
      ],
      [
        "password",
        "密码"
      ],
      [
        "network",
        "网络"
      ],
      [
        "storage",
        "存储"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about digital devices, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于数字设备的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置数字设备的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with computer, keyboard, and screen.",
        "cn": "她从电脑、键盘和屏幕开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of charger and application.",
        "cn": "Callum解释了充电器和应用程序的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses software, hardware, and password.",
        "cn": "全班讨论软件、硬件和密码。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "充电器",
            "charger"
          ],
          [
            "硬件",
            "hardware"
          ],
          [
            "电脑",
            "computer"
          ],
          [
            "存储",
            "storage"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "电脑",
        "word": "computer",
        "shuffled": [
          "p",
          "o",
          "t",
          "m",
          "c",
          "e",
          "r",
          "u"
        ]
      },
      {
        "cn": "屏幕",
        "word": "screen",
        "shuffled": [
          "c",
          "r",
          "s",
          "e",
          "e",
          "n"
        ]
      },
      {
        "cn": "应用程序",
        "word": "application",
        "shuffled": [
          "i",
          "l",
          "t",
          "p",
          "a",
          "o",
          "n",
          "c",
          "a",
          "p",
          "i"
        ]
      },
      {
        "cn": "密码",
        "word": "password",
        "shuffled": [
          "r",
          "d",
          "w",
          "s",
          "o",
          "s",
          "a",
          "p"
        ]
      },
      {
        "cn": "存储",
        "word": "storage",
        "shuffled": [
          "g",
          "r",
          "e",
          "t",
          "o",
          "s",
          "a"
        ]
      }
    ]
  },
  "middle-15": {
    "titleZh": "网络安全",
    "titleEn": "Online Safety",
    "story": "In a class about online safety, Goldy prepares ten useful expressions. She starts with privacy, security, and scam. Callum explains the importance of fraud and identity. The class discusses permission, verification, and encryption. Finally, Jake uses threat and protection in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于网络安全的课上，Goldy准备了十个实用表达。她从隐私、安全和诈骗开始。Callum解释了欺诈和身份的重要性。全班讨论权限、验证和加密。最后，Jake在简短的展示中使用了威胁和保护。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "privacy",
        "隐私"
      ],
      [
        "security",
        "安全"
      ],
      [
        "scam",
        "诈骗"
      ],
      [
        "fraud",
        "欺诈"
      ],
      [
        "identity",
        "身份"
      ],
      [
        "permission",
        "权限"
      ],
      [
        "verification",
        "验证"
      ],
      [
        "encryption",
        "加密"
      ],
      [
        "threat",
        "威胁"
      ],
      [
        "protection",
        "保护"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about online safety, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于网络安全的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置网络安全的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with privacy, security, and scam.",
        "cn": "她从隐私、安全和诈骗开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of fraud and identity.",
        "cn": "Callum解释了欺诈和身份的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses permission, verification, and encryption.",
        "cn": "全班讨论权限、验证和加密。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "欺诈",
            "fraud"
          ],
          [
            "验证",
            "verification"
          ],
          [
            "隐私",
            "privacy"
          ],
          [
            "保护",
            "protection"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "隐私",
        "word": "privacy",
        "shuffled": [
          "i",
          "c",
          "a",
          "y",
          "p",
          "v",
          "r"
        ]
      },
      {
        "cn": "诈骗",
        "word": "scam",
        "shuffled": [
          "s",
          "a",
          "c",
          "m"
        ]
      },
      {
        "cn": "身份",
        "word": "identity",
        "shuffled": [
          "t",
          "y",
          "e",
          "t",
          "n",
          "d",
          "i",
          "i"
        ]
      },
      {
        "cn": "加密",
        "word": "encryption",
        "shuffled": [
          "t",
          "n",
          "n",
          "r",
          "o",
          "c",
          "p",
          "i",
          "e",
          "y"
        ]
      },
      {
        "cn": "保护",
        "word": "protection",
        "shuffled": [
          "o",
          "i",
          "t",
          "c",
          "e",
          "o",
          "r",
          "n",
          "p",
          "t"
        ]
      }
    ]
  },
  "middle-16": {
    "titleZh": "互联网信息",
    "titleEn": "Online Information",
    "story": "In a class about online information, Goldy prepares ten useful expressions. She starts with website, search, and source. Callum explains the importance of reliable and misleading. The class discusses headline, article, and report. Finally, Jake uses publication and editor in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于互联网信息的课上，Goldy准备了十个实用表达。她从网站、搜索和来源开始。Callum解释了可靠的和误导的的重要性。全班讨论标题、文章和报告。最后，Jake在简短的展示中使用了出版物和编辑。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "website",
        "网站"
      ],
      [
        "search",
        "搜索"
      ],
      [
        "source",
        "来源"
      ],
      [
        "reliable",
        "可靠的"
      ],
      [
        "misleading",
        "误导的"
      ],
      [
        "headline",
        "标题"
      ],
      [
        "article",
        "文章"
      ],
      [
        "report",
        "报告"
      ],
      [
        "publication",
        "出版物"
      ],
      [
        "editor",
        "编辑"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about online information, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于互联网信息的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置互联网信息的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with website, search, and source.",
        "cn": "她从网站、搜索和来源开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of reliable and misleading.",
        "cn": "Callum解释了可靠的和误导的的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses headline, article, and report.",
        "cn": "全班讨论标题、文章和报告。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "可靠的",
            "reliable"
          ],
          [
            "文章",
            "article"
          ],
          [
            "网站",
            "website"
          ],
          [
            "编辑",
            "editor"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "网站",
        "word": "website",
        "shuffled": [
          "b",
          "e",
          "i",
          "w",
          "s",
          "e",
          "t"
        ]
      },
      {
        "cn": "来源",
        "word": "source",
        "shuffled": [
          "r",
          "e",
          "c",
          "s",
          "u",
          "o"
        ]
      },
      {
        "cn": "误导的",
        "word": "misleading",
        "shuffled": [
          "l",
          "a",
          "s",
          "i",
          "i",
          "g",
          "n",
          "e",
          "d",
          "m"
        ]
      },
      {
        "cn": "报告",
        "word": "report",
        "shuffled": [
          "p",
          "o",
          "e",
          "r",
          "r",
          "t"
        ]
      },
      {
        "cn": "编辑",
        "word": "editor",
        "shuffled": [
          "e",
          "t",
          "i",
          "d",
          "r",
          "o"
        ]
      }
    ]
  },
  "middle-17": {
    "titleZh": "公共卫生",
    "titleEn": "Public Health",
    "story": "In a class about public health, Goldy prepares ten useful expressions. She starts with vaccination, infection, and prevention. Callum explains the importance of symptom and diagnosis. The class discusses treatment, recovery, and hygiene. Finally, Jake uses nutrition and wellbeing in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于公共卫生的课上，Goldy准备了十个实用表达。她从疫苗接种、感染和预防开始。Callum解释了症状和诊断的重要性。全班讨论治疗、康复和卫生。最后，Jake在简短的展示中使用了营养和身心健康。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "vaccination",
        "疫苗接种"
      ],
      [
        "infection",
        "感染"
      ],
      [
        "prevention",
        "预防"
      ],
      [
        "symptom",
        "症状"
      ],
      [
        "diagnosis",
        "诊断"
      ],
      [
        "treatment",
        "治疗"
      ],
      [
        "recovery",
        "康复"
      ],
      [
        "hygiene",
        "卫生"
      ],
      [
        "nutrition",
        "营养"
      ],
      [
        "wellbeing",
        "身心健康"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about public health, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于公共卫生的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置公共卫生的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with vaccination, infection, and prevention.",
        "cn": "她从疫苗接种、感染和预防开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of symptom and diagnosis.",
        "cn": "Callum解释了症状和诊断的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses treatment, recovery, and hygiene.",
        "cn": "全班讨论治疗、康复和卫生。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "症状",
            "symptom"
          ],
          [
            "康复",
            "recovery"
          ],
          [
            "疫苗接种",
            "vaccination"
          ],
          [
            "身心健康",
            "wellbeing"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "疫苗接种",
        "word": "vaccination",
        "shuffled": [
          "t",
          "c",
          "a",
          "n",
          "o",
          "n",
          "a",
          "i",
          "v",
          "i",
          "c"
        ]
      },
      {
        "cn": "预防",
        "word": "prevention",
        "shuffled": [
          "e",
          "t",
          "o",
          "n",
          "r",
          "i",
          "e",
          "p",
          "v",
          "n"
        ]
      },
      {
        "cn": "诊断",
        "word": "diagnosis",
        "shuffled": [
          "g",
          "o",
          "a",
          "i",
          "s",
          "s",
          "d",
          "i",
          "n"
        ]
      },
      {
        "cn": "卫生",
        "word": "hygiene",
        "shuffled": [
          "h",
          "i",
          "y",
          "n",
          "g",
          "e",
          "e"
        ]
      },
      {
        "cn": "身心健康",
        "word": "wellbeing",
        "shuffled": [
          "l",
          "e",
          "i",
          "l",
          "e",
          "g",
          "w",
          "n",
          "b"
        ]
      }
    ]
  },
  "middle-18": {
    "titleZh": "医疗预约",
    "titleEn": "Healthcare Visits",
    "story": "In a class about healthcare visits, Goldy prepares ten useful expressions. She starts with appointment, clinic, and patient. Callum explains the importance of prescription and referral. The class discusses examination, allergy, and medication. Finally, Jake uses side effect and follow up in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于医疗预约的课上，Goldy准备了十个实用表达。她从预约、诊所和患者开始。Callum解释了处方和转诊的重要性。全班讨论检查、过敏和药物。最后，Jake在简短的展示中使用了副作用和复诊。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "appointment",
        "预约"
      ],
      [
        "clinic",
        "诊所"
      ],
      [
        "patient",
        "患者"
      ],
      [
        "prescription",
        "处方"
      ],
      [
        "referral",
        "转诊"
      ],
      [
        "examination",
        "检查"
      ],
      [
        "allergy",
        "过敏"
      ],
      [
        "medication",
        "药物"
      ],
      [
        "side effect",
        "副作用"
      ],
      [
        "follow up",
        "复诊"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about healthcare visits, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于医疗预约的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置医疗预约的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with appointment, clinic, and patient.",
        "cn": "她从预约、诊所和患者开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of prescription and referral.",
        "cn": "Callum解释了处方和转诊的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses examination, allergy, and medication.",
        "cn": "全班讨论检查、过敏和药物。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "处方",
            "prescription"
          ],
          [
            "过敏",
            "allergy"
          ],
          [
            "预约",
            "appointment"
          ],
          [
            "复诊",
            "follow up"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "预约",
        "word": "appointment",
        "shuffled": [
          "t",
          "a",
          "o",
          "e",
          "m",
          "n",
          "n",
          "t",
          "i",
          "p",
          "p"
        ]
      },
      {
        "cn": "患者",
        "word": "patient",
        "shuffled": [
          "i",
          "t",
          "n",
          "a",
          "t",
          "p",
          "e"
        ]
      },
      {
        "cn": "转诊",
        "word": "referral",
        "shuffled": [
          "r",
          "e",
          "l",
          "r",
          "r",
          "e",
          "f",
          "a"
        ]
      },
      {
        "cn": "药物",
        "word": "medication",
        "shuffled": [
          "i",
          "d",
          "t",
          "c",
          "n",
          "m",
          "e",
          "a",
          "o",
          "i"
        ]
      },
      {
        "cn": "复诊",
        "word": "followup",
        "shuffled": [
          "u",
          "p",
          "o",
          "l",
          "l",
          "f",
          "w",
          "o"
        ]
      }
    ]
  },
  "middle-19": {
    "titleZh": "健康饮食",
    "titleEn": "Nutrition",
    "story": "In a class about nutrition, Goldy prepares ten useful expressions. She starts with protein, carbohydrate, and fibre. Callum explains the importance of vitamin and mineral. The class discusses portion, calorie, and digestion. Finally, Jake uses balanced and hydration in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于健康饮食的课上，Goldy准备了十个实用表达。她从蛋白质、碳水化合物和膳食纤维开始。Callum解释了维生素和矿物质的重要性。全班讨论份量、卡路里和消化。最后，Jake在简短的展示中使用了均衡的和补水。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "protein",
        "蛋白质"
      ],
      [
        "carbohydrate",
        "碳水化合物"
      ],
      [
        "fibre",
        "膳食纤维"
      ],
      [
        "vitamin",
        "维生素"
      ],
      [
        "mineral",
        "矿物质"
      ],
      [
        "portion",
        "份量"
      ],
      [
        "calorie",
        "卡路里"
      ],
      [
        "digestion",
        "消化"
      ],
      [
        "balanced",
        "均衡的"
      ],
      [
        "hydration",
        "补水"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about nutrition, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于健康饮食的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置健康饮食的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with protein, carbohydrate, and fibre.",
        "cn": "她从蛋白质、碳水化合物和膳食纤维开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of vitamin and mineral.",
        "cn": "Callum解释了维生素和矿物质的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses portion, calorie, and digestion.",
        "cn": "全班讨论份量、卡路里和消化。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "维生素",
            "vitamin"
          ],
          [
            "卡路里",
            "calorie"
          ],
          [
            "蛋白质",
            "protein"
          ],
          [
            "补水",
            "hydration"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "蛋白质",
        "word": "protein",
        "shuffled": [
          "i",
          "p",
          "o",
          "t",
          "r",
          "n",
          "e"
        ]
      },
      {
        "cn": "膳食纤维",
        "word": "fibre",
        "shuffled": [
          "b",
          "f",
          "r",
          "e",
          "i"
        ]
      },
      {
        "cn": "矿物质",
        "word": "mineral",
        "shuffled": [
          "m",
          "n",
          "e",
          "a",
          "i",
          "l",
          "r"
        ]
      },
      {
        "cn": "消化",
        "word": "digestion",
        "shuffled": [
          "e",
          "o",
          "i",
          "s",
          "i",
          "g",
          "n",
          "d",
          "t"
        ]
      },
      {
        "cn": "补水",
        "word": "hydration",
        "shuffled": [
          "r",
          "n",
          "t",
          "a",
          "y",
          "d",
          "i",
          "h",
          "o"
        ]
      }
    ]
  },
  "middle-21": {
    "titleZh": "运动科学",
    "titleEn": "Fitness Science",
    "story": "In a class about fitness science, Goldy prepares ten useful expressions. She starts with stamina, strength, and flexibility. Callum explains the importance of endurance and training. The class discusses repetition, technique, and posture. Finally, Jake uses muscle and fitness in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于运动科学的课上，Goldy准备了十个实用表达。她从耐力、力量和柔韧性开始。Callum解释了持久力和训练的重要性。全班讨论重复、技术和姿势。最后，Jake在简短的展示中使用了肌肉和体能。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "stamina",
        "耐力"
      ],
      [
        "strength",
        "力量"
      ],
      [
        "flexibility",
        "柔韧性"
      ],
      [
        "endurance",
        "持久力"
      ],
      [
        "training",
        "训练"
      ],
      [
        "repetition",
        "重复"
      ],
      [
        "technique",
        "技术"
      ],
      [
        "posture",
        "姿势"
      ],
      [
        "muscle",
        "肌肉"
      ],
      [
        "fitness",
        "体能"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about fitness science, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于运动科学的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置运动科学的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with stamina, strength, and flexibility.",
        "cn": "她从耐力、力量和柔韧性开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of endurance and training.",
        "cn": "Callum解释了持久力和训练的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses repetition, technique, and posture.",
        "cn": "全班讨论重复、技术和姿势。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "持久力",
            "endurance"
          ],
          [
            "技术",
            "technique"
          ],
          [
            "耐力",
            "stamina"
          ],
          [
            "体能",
            "fitness"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "耐力",
        "word": "stamina",
        "shuffled": [
          "t",
          "a",
          "i",
          "s",
          "n",
          "m",
          "a"
        ]
      },
      {
        "cn": "柔韧性",
        "word": "flexibility",
        "shuffled": [
          "l",
          "f",
          "x",
          "e",
          "y",
          "b",
          "l",
          "i",
          "i",
          "i",
          "t"
        ]
      },
      {
        "cn": "训练",
        "word": "training",
        "shuffled": [
          "r",
          "i",
          "a",
          "i",
          "t",
          "g",
          "n",
          "n"
        ]
      },
      {
        "cn": "姿势",
        "word": "posture",
        "shuffled": [
          "r",
          "u",
          "e",
          "p",
          "s",
          "o",
          "t"
        ]
      },
      {
        "cn": "体能",
        "word": "fitness",
        "shuffled": [
          "e",
          "t",
          "s",
          "f",
          "s",
          "n",
          "i"
        ]
      }
    ]
  },
  "middle-22": {
    "titleZh": "城市生活",
    "titleEn": "Urban Living",
    "story": "In a class about urban living, Goldy prepares ten useful expressions. She starts with suburb, commute, and traffic. Callum explains the importance of intersection and pedestrian. The class discusses congestion, development, and facility. Finally, Jake uses infrastructure and accessibility in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于城市生活的课上，Goldy准备了十个实用表达。她从郊区、通勤和交通开始。Callum解释了十字路口和行人的重要性。全班讨论拥堵、开发和设施。最后，Jake在简短的展示中使用了基础设施和便利性。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "suburb",
        "郊区"
      ],
      [
        "commute",
        "通勤"
      ],
      [
        "traffic",
        "交通"
      ],
      [
        "intersection",
        "十字路口"
      ],
      [
        "pedestrian",
        "行人"
      ],
      [
        "congestion",
        "拥堵"
      ],
      [
        "development",
        "开发"
      ],
      [
        "facility",
        "设施"
      ],
      [
        "infrastructure",
        "基础设施"
      ],
      [
        "accessibility",
        "便利性"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about urban living, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于城市生活的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置城市生活的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with suburb, commute, and traffic.",
        "cn": "她从郊区、通勤和交通开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of intersection and pedestrian.",
        "cn": "Callum解释了十字路口和行人的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses congestion, development, and facility.",
        "cn": "全班讨论拥堵、开发和设施。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "十字路口",
            "intersection"
          ],
          [
            "开发",
            "development"
          ],
          [
            "郊区",
            "suburb"
          ],
          [
            "便利性",
            "accessibility"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "郊区",
        "word": "suburb",
        "shuffled": [
          "u",
          "b",
          "s",
          "r",
          "u",
          "b"
        ]
      },
      {
        "cn": "交通",
        "word": "traffic",
        "shuffled": [
          "r",
          "t",
          "c",
          "f",
          "a",
          "f",
          "i"
        ]
      },
      {
        "cn": "行人",
        "word": "pedestrian",
        "shuffled": [
          "r",
          "e",
          "e",
          "a",
          "d",
          "i",
          "n",
          "t",
          "s",
          "p"
        ]
      },
      {
        "cn": "设施",
        "word": "facility",
        "shuffled": [
          "c",
          "t",
          "f",
          "l",
          "a",
          "y",
          "i",
          "i"
        ]
      },
      {
        "cn": "便利性",
        "word": "accessibility",
        "shuffled": [
          "i",
          "s",
          "i",
          "a",
          "c",
          "y",
          "s",
          "e",
          "l",
          "c",
          "t",
          "i",
          "b"
        ]
      }
    ]
  },
  "middle-23": {
    "titleZh": "居住与租房",
    "titleEn": "Housing",
    "story": "In a class about housing, Goldy prepares ten useful expressions. She starts with tenant, landlord, and lease. Callum explains the importance of rent and deposit. The class discusses maintenance, inspection, and property. Finally, Jake uses utility and neighbourhood in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于居住与租房的课上，Goldy准备了十个实用表达。她从租客、房东和租约开始。Callum解释了租金和押金的重要性。全班讨论维护、检查和房产。最后，Jake在简短的展示中使用了公共事业费和社区街区。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "tenant",
        "租客"
      ],
      [
        "landlord",
        "房东"
      ],
      [
        "lease",
        "租约"
      ],
      [
        "rent",
        "租金"
      ],
      [
        "deposit",
        "押金"
      ],
      [
        "maintenance",
        "维护"
      ],
      [
        "inspection",
        "检查"
      ],
      [
        "property",
        "房产"
      ],
      [
        "utility",
        "公共事业费"
      ],
      [
        "neighbourhood",
        "社区街区"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about housing, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于居住与租房的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置居住与租房的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with tenant, landlord, and lease.",
        "cn": "她从租客、房东和租约开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of rent and deposit.",
        "cn": "Callum解释了租金和押金的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses maintenance, inspection, and property.",
        "cn": "全班讨论维护、检查和房产。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "租金",
            "rent"
          ],
          [
            "检查",
            "inspection"
          ],
          [
            "租客",
            "tenant"
          ],
          [
            "社区街区",
            "neighbourhood"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "租客",
        "word": "tenant",
        "shuffled": [
          "a",
          "t",
          "n",
          "t",
          "e",
          "n"
        ]
      },
      {
        "cn": "租约",
        "word": "lease",
        "shuffled": [
          "e",
          "l",
          "e",
          "a",
          "s"
        ]
      },
      {
        "cn": "押金",
        "word": "deposit",
        "shuffled": [
          "t",
          "d",
          "o",
          "s",
          "p",
          "i",
          "e"
        ]
      },
      {
        "cn": "房产",
        "word": "property",
        "shuffled": [
          "o",
          "p",
          "e",
          "t",
          "y",
          "r",
          "r",
          "p"
        ]
      },
      {
        "cn": "社区街区",
        "word": "neighbourhood",
        "shuffled": [
          "i",
          "o",
          "h",
          "r",
          "b",
          "h",
          "d",
          "o",
          "g",
          "u",
          "n",
          "o",
          "e"
        ]
      }
    ]
  },
  "middle-24": {
    "titleZh": "环境保护",
    "titleEn": "Environment",
    "story": "In a class about environment, Goldy prepares ten useful expressions. She starts with recycle, waste, and pollution. Callum explains the importance of emission and conservation. The class discusses sustainable, resource, and renewable. Finally, Jake uses ecosystem and biodiversity in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于环境保护的课上，Goldy准备了十个实用表达。她从回收利用、废弃物和污染开始。Callum解释了排放和保护的重要性。全班讨论可持续的、资源和可再生的。最后，Jake在简短的展示中使用了生态系统和生物多样性。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "recycle",
        "回收利用"
      ],
      [
        "waste",
        "废弃物"
      ],
      [
        "pollution",
        "污染"
      ],
      [
        "emission",
        "排放"
      ],
      [
        "conservation",
        "保护"
      ],
      [
        "sustainable",
        "可持续的"
      ],
      [
        "resource",
        "资源"
      ],
      [
        "renewable",
        "可再生的"
      ],
      [
        "ecosystem",
        "生态系统"
      ],
      [
        "biodiversity",
        "生物多样性"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about environment, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于环境保护的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置环境保护的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with recycle, waste, and pollution.",
        "cn": "她从回收利用、废弃物和污染开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of emission and conservation.",
        "cn": "Callum解释了排放和保护的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses sustainable, resource, and renewable.",
        "cn": "全班讨论可持续的、资源和可再生的。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "排放",
            "emission"
          ],
          [
            "资源",
            "resource"
          ],
          [
            "回收利用",
            "recycle"
          ],
          [
            "生物多样性",
            "biodiversity"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "回收利用",
        "word": "recycle",
        "shuffled": [
          "e",
          "c",
          "c",
          "y",
          "r",
          "l",
          "e"
        ]
      },
      {
        "cn": "污染",
        "word": "pollution",
        "shuffled": [
          "u",
          "i",
          "t",
          "l",
          "p",
          "o",
          "l",
          "n",
          "o"
        ]
      },
      {
        "cn": "保护",
        "word": "conservation",
        "shuffled": [
          "a",
          "n",
          "t",
          "v",
          "r",
          "n",
          "c",
          "s",
          "o",
          "o",
          "i",
          "e"
        ]
      },
      {
        "cn": "可再生的",
        "word": "renewable",
        "shuffled": [
          "b",
          "e",
          "r",
          "w",
          "e",
          "e",
          "a",
          "l",
          "n"
        ]
      },
      {
        "cn": "生物多样性",
        "word": "biodiversity",
        "shuffled": [
          "y",
          "d",
          "r",
          "i",
          "t",
          "e",
          "i",
          "v",
          "s",
          "o",
          "i",
          "b"
        ]
      }
    ]
  },
  "middle-25": {
    "titleZh": "气候变化",
    "titleEn": "Climate Change",
    "story": "In a class about climate change, Goldy prepares ten useful expressions. She starts with climate, temperature, and drought. Callum explains the importance of flood and wildfire. The class discusses atmosphere, carbon, and greenhouse. Finally, Jake uses adaptation and mitigation in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于气候变化的课上，Goldy准备了十个实用表达。她从气候、温度和干旱开始。Callum解释了洪水和野火的重要性。全班讨论大气、碳和温室。最后，Jake在简短的展示中使用了适应和缓解。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "climate",
        "气候"
      ],
      [
        "temperature",
        "温度"
      ],
      [
        "drought",
        "干旱"
      ],
      [
        "flood",
        "洪水"
      ],
      [
        "wildfire",
        "野火"
      ],
      [
        "atmosphere",
        "大气"
      ],
      [
        "carbon",
        "碳"
      ],
      [
        "greenhouse",
        "温室"
      ],
      [
        "adaptation",
        "适应"
      ],
      [
        "mitigation",
        "缓解"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about climate change, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于气候变化的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置气候变化的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with climate, temperature, and drought.",
        "cn": "她从气候、温度和干旱开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of flood and wildfire.",
        "cn": "Callum解释了洪水和野火的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses atmosphere, carbon, and greenhouse.",
        "cn": "全班讨论大气、碳和温室。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "洪水",
            "flood"
          ],
          [
            "碳",
            "carbon"
          ],
          [
            "气候",
            "climate"
          ],
          [
            "缓解",
            "mitigation"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "气候",
        "word": "climate",
        "shuffled": [
          "i",
          "a",
          "m",
          "e",
          "t",
          "c",
          "l"
        ]
      },
      {
        "cn": "干旱",
        "word": "drought",
        "shuffled": [
          "r",
          "o",
          "g",
          "u",
          "h",
          "t",
          "d"
        ]
      },
      {
        "cn": "野火",
        "word": "wildfire",
        "shuffled": [
          "w",
          "d",
          "l",
          "i",
          "r",
          "e",
          "i",
          "f"
        ]
      },
      {
        "cn": "温室",
        "word": "greenhouse",
        "shuffled": [
          "g",
          "n",
          "e",
          "h",
          "e",
          "r",
          "u",
          "e",
          "s",
          "o"
        ]
      },
      {
        "cn": "缓解",
        "word": "mitigation",
        "shuffled": [
          "t",
          "g",
          "a",
          "i",
          "t",
          "i",
          "n",
          "o",
          "i",
          "m"
        ]
      }
    ]
  },
  "middle-26": {
    "titleZh": "自然灾害",
    "titleEn": "Natural Disasters",
    "story": "In a class about natural disasters, Goldy prepares ten useful expressions. She starts with earthquake, tsunami, and hurricane. Callum explains the importance of tornado and landslide. The class discusses evacuation, rescue, and emergency. Finally, Jake uses shelter and warning in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于自然灾害的课上，Goldy准备了十个实用表达。她从地震、海啸和飓风开始。Callum解释了龙卷风和山体滑坡的重要性。全班讨论疏散、救援和紧急情况。最后，Jake在简短的展示中使用了避难所和警告。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "earthquake",
        "地震"
      ],
      [
        "tsunami",
        "海啸"
      ],
      [
        "hurricane",
        "飓风"
      ],
      [
        "tornado",
        "龙卷风"
      ],
      [
        "landslide",
        "山体滑坡"
      ],
      [
        "evacuation",
        "疏散"
      ],
      [
        "rescue",
        "救援"
      ],
      [
        "emergency",
        "紧急情况"
      ],
      [
        "shelter",
        "避难所"
      ],
      [
        "warning",
        "警告"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about natural disasters, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于自然灾害的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置自然灾害的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with earthquake, tsunami, and hurricane.",
        "cn": "她从地震、海啸和飓风开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of tornado and landslide.",
        "cn": "Callum解释了龙卷风和山体滑坡的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses evacuation, rescue, and emergency.",
        "cn": "全班讨论疏散、救援和紧急情况。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "龙卷风",
            "tornado"
          ],
          [
            "救援",
            "rescue"
          ],
          [
            "地震",
            "earthquake"
          ],
          [
            "警告",
            "warning"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "地震",
        "word": "earthquake",
        "shuffled": [
          "a",
          "e",
          "q",
          "r",
          "u",
          "t",
          "h",
          "e",
          "k",
          "a"
        ]
      },
      {
        "cn": "飓风",
        "word": "hurricane",
        "shuffled": [
          "c",
          "h",
          "e",
          "r",
          "i",
          "r",
          "u",
          "n",
          "a"
        ]
      },
      {
        "cn": "山体滑坡",
        "word": "landslide",
        "shuffled": [
          "s",
          "i",
          "e",
          "d",
          "n",
          "l",
          "d",
          "a",
          "l"
        ]
      },
      {
        "cn": "紧急情况",
        "word": "emergency",
        "shuffled": [
          "r",
          "n",
          "m",
          "y",
          "c",
          "g",
          "e",
          "e",
          "e"
        ]
      },
      {
        "cn": "警告",
        "word": "warning",
        "shuffled": [
          "g",
          "i",
          "r",
          "n",
          "a",
          "w",
          "n"
        ]
      }
    ]
  },
  "middle-27": {
    "titleZh": "农业与食品",
    "titleEn": "Agriculture",
    "story": "In a class about agriculture, Goldy prepares ten useful expressions. She starts with crop, harvest, and irrigation. Callum explains the importance of fertiliser and pesticide. The class discusses livestock, farmland, and production. Finally, Jake uses distribution and organic in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于农业与食品的课上，Goldy准备了十个实用表达。她从农作物、收获和灌溉开始。Callum解释了肥料和农药的重要性。全班讨论牲畜、农田和生产。最后，Jake在简短的展示中使用了分销和有机的。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "crop",
        "农作物"
      ],
      [
        "harvest",
        "收获"
      ],
      [
        "irrigation",
        "灌溉"
      ],
      [
        "fertiliser",
        "肥料"
      ],
      [
        "pesticide",
        "农药"
      ],
      [
        "livestock",
        "牲畜"
      ],
      [
        "farmland",
        "农田"
      ],
      [
        "production",
        "生产"
      ],
      [
        "distribution",
        "分销"
      ],
      [
        "organic",
        "有机的"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about agriculture, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于农业与食品的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置农业与食品的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with crop, harvest, and irrigation.",
        "cn": "她从农作物、收获和灌溉开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of fertiliser and pesticide.",
        "cn": "Callum解释了肥料和农药的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses livestock, farmland, and production.",
        "cn": "全班讨论牲畜、农田和生产。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "肥料",
            "fertiliser"
          ],
          [
            "农田",
            "farmland"
          ],
          [
            "农作物",
            "crop"
          ],
          [
            "有机的",
            "organic"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "农作物",
        "word": "crop",
        "shuffled": [
          "c",
          "o",
          "p",
          "r"
        ]
      },
      {
        "cn": "灌溉",
        "word": "irrigation",
        "shuffled": [
          "o",
          "i",
          "r",
          "n",
          "g",
          "i",
          "a",
          "i",
          "r",
          "t"
        ]
      },
      {
        "cn": "农药",
        "word": "pesticide",
        "shuffled": [
          "d",
          "p",
          "i",
          "i",
          "e",
          "c",
          "s",
          "e",
          "t"
        ]
      },
      {
        "cn": "生产",
        "word": "production",
        "shuffled": [
          "r",
          "o",
          "p",
          "n",
          "d",
          "c",
          "t",
          "i",
          "u",
          "o"
        ]
      },
      {
        "cn": "有机的",
        "word": "organic",
        "shuffled": [
          "r",
          "o",
          "i",
          "g",
          "a",
          "n",
          "c"
        ]
      }
    ]
  },
  "middle-28": {
    "titleZh": "能源与电力",
    "titleEn": "Energy",
    "story": "In a class about energy, Goldy prepares ten useful expressions. She starts with electricity, solar, and wind power. Callum explains the importance of hydropower and coal. The class discusses battery, grid, and demand. Finally, Jake uses supply and efficiency in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于能源与电力的课上，Goldy准备了十个实用表达。她从电力、太阳能和风能开始。Callum解释了水力发电和煤炭的重要性。全班讨论电池、电网和需求。最后，Jake在简短的展示中使用了供应和效率。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "electricity",
        "电力"
      ],
      [
        "solar",
        "太阳能"
      ],
      [
        "wind power",
        "风能"
      ],
      [
        "hydropower",
        "水力发电"
      ],
      [
        "coal",
        "煤炭"
      ],
      [
        "battery",
        "电池"
      ],
      [
        "grid",
        "电网"
      ],
      [
        "demand",
        "需求"
      ],
      [
        "supply",
        "供应"
      ],
      [
        "efficiency",
        "效率"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about energy, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于能源与电力的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置能源与电力的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with electricity, solar, and wind power.",
        "cn": "她从电力、太阳能和风能开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of hydropower and coal.",
        "cn": "Callum解释了水力发电和煤炭的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses battery, grid, and demand.",
        "cn": "全班讨论电池、电网和需求。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "水力发电",
            "hydropower"
          ],
          [
            "电网",
            "grid"
          ],
          [
            "电力",
            "electricity"
          ],
          [
            "效率",
            "efficiency"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "电力",
        "word": "electricity",
        "shuffled": [
          "e",
          "y",
          "i",
          "l",
          "t",
          "t",
          "c",
          "e",
          "i",
          "r",
          "c"
        ]
      },
      {
        "cn": "风能",
        "word": "windpower",
        "shuffled": [
          "e",
          "r",
          "d",
          "o",
          "i",
          "w",
          "p",
          "w",
          "n"
        ]
      },
      {
        "cn": "煤炭",
        "word": "coal",
        "shuffled": [
          "l",
          "a",
          "o",
          "c"
        ]
      },
      {
        "cn": "需求",
        "word": "demand",
        "shuffled": [
          "d",
          "a",
          "d",
          "m",
          "n",
          "e"
        ]
      },
      {
        "cn": "效率",
        "word": "efficiency",
        "shuffled": [
          "f",
          "f",
          "i",
          "c",
          "c",
          "n",
          "e",
          "i",
          "e",
          "y"
        ]
      }
    ]
  },
  "middle-29": {
    "titleZh": "交通政策",
    "titleEn": "Transport Policy",
    "story": "In a class about transport policy, Goldy prepares ten useful expressions. She starts with public transport, commuter, and railway. Callum explains the importance of highway and vehicle. The class discusses emissions, route, and capacity. Finally, Jake uses fares and investment cost in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于交通政策的课上，Goldy准备了十个实用表达。她从公共交通、通勤者和铁路开始。Callum解释了高速公路和车辆的重要性。全班讨论排放量、路线和容量。最后，Jake在简短的展示中使用了车费和投资成本。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "public transport",
        "公共交通"
      ],
      [
        "commuter",
        "通勤者"
      ],
      [
        "railway",
        "铁路"
      ],
      [
        "highway",
        "高速公路"
      ],
      [
        "vehicle",
        "车辆"
      ],
      [
        "emissions",
        "排放量"
      ],
      [
        "route",
        "路线"
      ],
      [
        "capacity",
        "容量"
      ],
      [
        "fares",
        "车费"
      ],
      [
        "investment cost",
        "投资成本"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about transport policy, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于交通政策的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置交通政策的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with public transport, commuter, and railway.",
        "cn": "她从公共交通、通勤者和铁路开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of highway and vehicle.",
        "cn": "Callum解释了高速公路和车辆的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses emissions, route, and capacity.",
        "cn": "全班讨论排放量、路线和容量。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "高速公路",
            "highway"
          ],
          [
            "路线",
            "route"
          ],
          [
            "公共交通",
            "public transport"
          ],
          [
            "投资成本",
            "investment cost"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "公共交通",
        "word": "publictransport",
        "shuffled": [
          "b",
          "i",
          "p",
          "r",
          "r",
          "u",
          "l",
          "p",
          "o",
          "t",
          "t",
          "c",
          "a",
          "s",
          "n"
        ]
      },
      {
        "cn": "铁路",
        "word": "railway",
        "shuffled": [
          "a",
          "w",
          "y",
          "r",
          "a",
          "i",
          "l"
        ]
      },
      {
        "cn": "车辆",
        "word": "vehicle",
        "shuffled": [
          "v",
          "e",
          "e",
          "i",
          "l",
          "c",
          "h"
        ]
      },
      {
        "cn": "容量",
        "word": "capacity",
        "shuffled": [
          "a",
          "i",
          "c",
          "t",
          "c",
          "a",
          "y",
          "p"
        ]
      },
      {
        "cn": "投资成本",
        "word": "investmentcost",
        "shuffled": [
          "s",
          "n",
          "t",
          "i",
          "e",
          "s",
          "e",
          "c",
          "o",
          "n",
          "v",
          "m",
          "t",
          "t"
        ]
      }
    ]
  },
  "middle-30": {
    "titleZh": "旅游与经济",
    "titleEn": "Tourism",
    "story": "In a class about tourism, Goldy prepares ten useful expressions. She starts with destination, attraction, and visitor. Callum explains the importance of accommodation and itinerary. The class discusses booking, local economy, and heritage. Finally, Jake uses guide and hospitality in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于旅游与经济的课上，Goldy准备了十个实用表达。她从目的地、景点和访客开始。Callum解释了住宿和行程的重要性。全班讨论预订、当地经济和遗产。最后，Jake在简短的展示中使用了导游和款待服务。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "destination",
        "目的地"
      ],
      [
        "attraction",
        "景点"
      ],
      [
        "visitor",
        "访客"
      ],
      [
        "accommodation",
        "住宿"
      ],
      [
        "itinerary",
        "行程"
      ],
      [
        "booking",
        "预订"
      ],
      [
        "local economy",
        "当地经济"
      ],
      [
        "heritage",
        "遗产"
      ],
      [
        "guide",
        "导游"
      ],
      [
        "hospitality",
        "款待服务"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about tourism, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于旅游与经济的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置旅游与经济的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with destination, attraction, and visitor.",
        "cn": "她从目的地、景点和访客开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of accommodation and itinerary.",
        "cn": "Callum解释了住宿和行程的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses booking, local economy, and heritage.",
        "cn": "全班讨论预订、当地经济和遗产。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "住宿",
            "accommodation"
          ],
          [
            "当地经济",
            "local economy"
          ],
          [
            "目的地",
            "destination"
          ],
          [
            "款待服务",
            "hospitality"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "目的地",
        "word": "destination",
        "shuffled": [
          "s",
          "d",
          "a",
          "n",
          "n",
          "o",
          "t",
          "i",
          "e",
          "t",
          "i"
        ]
      },
      {
        "cn": "访客",
        "word": "visitor",
        "shuffled": [
          "o",
          "r",
          "v",
          "i",
          "s",
          "i",
          "t"
        ]
      },
      {
        "cn": "行程",
        "word": "itinerary",
        "shuffled": [
          "y",
          "n",
          "i",
          "r",
          "e",
          "a",
          "i",
          "t",
          "r"
        ]
      },
      {
        "cn": "遗产",
        "word": "heritage",
        "shuffled": [
          "h",
          "a",
          "g",
          "t",
          "e",
          "e",
          "i",
          "r"
        ]
      },
      {
        "cn": "款待服务",
        "word": "hospitality",
        "shuffled": [
          "y",
          "t",
          "s",
          "t",
          "p",
          "a",
          "i",
          "h",
          "l",
          "i",
          "o"
        ]
      }
    ]
  },
  "middle-31": {
    "titleZh": "文化交流",
    "titleEn": "Cultural Exchange",
    "story": "In a class about cultural exchange, Goldy prepares ten useful expressions. She starts with culture, language, and dialect. Callum explains the importance of custom and diversity. The class discusses inclusion, identity group, and tradition. Finally, Jake uses festival event and respect in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于文化交流的课上，Goldy准备了十个实用表达。她从文化、语言和方言开始。Callum解释了风俗和多样性的重要性。全班讨论包容、身份群体和传统。最后，Jake在简短的展示中使用了节庆活动和尊重。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "culture",
        "文化"
      ],
      [
        "language",
        "语言"
      ],
      [
        "dialect",
        "方言"
      ],
      [
        "custom",
        "风俗"
      ],
      [
        "diversity",
        "多样性"
      ],
      [
        "inclusion",
        "包容"
      ],
      [
        "identity group",
        "身份群体"
      ],
      [
        "tradition",
        "传统"
      ],
      [
        "festival event",
        "节庆活动"
      ],
      [
        "respect",
        "尊重"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about cultural exchange, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于文化交流的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置文化交流的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with culture, language, and dialect.",
        "cn": "她从文化、语言和方言开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of custom and diversity.",
        "cn": "Callum解释了风俗和多样性的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses inclusion, identity group, and tradition.",
        "cn": "全班讨论包容、身份群体和传统。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "风俗",
            "custom"
          ],
          [
            "身份群体",
            "identity group"
          ],
          [
            "文化",
            "culture"
          ],
          [
            "尊重",
            "respect"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "文化",
        "word": "culture",
        "shuffled": [
          "u",
          "t",
          "e",
          "r",
          "u",
          "c",
          "l"
        ]
      },
      {
        "cn": "方言",
        "word": "dialect",
        "shuffled": [
          "a",
          "l",
          "i",
          "d",
          "e",
          "c",
          "t"
        ]
      },
      {
        "cn": "多样性",
        "word": "diversity",
        "shuffled": [
          "t",
          "e",
          "i",
          "v",
          "d",
          "i",
          "y",
          "s",
          "r"
        ]
      },
      {
        "cn": "传统",
        "word": "tradition",
        "shuffled": [
          "i",
          "n",
          "a",
          "t",
          "d",
          "i",
          "o",
          "r",
          "t"
        ]
      },
      {
        "cn": "尊重",
        "word": "respect",
        "shuffled": [
          "e",
          "e",
          "r",
          "p",
          "t",
          "s",
          "c"
        ]
      }
    ]
  },
  "middle-32": {
    "titleZh": "艺术与设计",
    "titleEn": "Art and Design",
    "story": "In a class about art and design, Goldy prepares ten useful expressions. She starts with painting, sculpture, and architecture. Callum explains the importance of design and creative. The class discusses aesthetic, exhibition, and gallery. Finally, Jake uses composition and visual in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于艺术与设计的课上，Goldy准备了十个实用表达。她从绘画、雕塑和建筑开始。Callum解释了设计和创造性的的重要性。全班讨论美学的、展览和画廊。最后，Jake在简短的展示中使用了构图和视觉的。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "painting",
        "绘画"
      ],
      [
        "sculpture",
        "雕塑"
      ],
      [
        "architecture",
        "建筑"
      ],
      [
        "design",
        "设计"
      ],
      [
        "creative",
        "创造性的"
      ],
      [
        "aesthetic",
        "美学的"
      ],
      [
        "exhibition",
        "展览"
      ],
      [
        "gallery",
        "画廊"
      ],
      [
        "composition",
        "构图"
      ],
      [
        "visual",
        "视觉的"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about art and design, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于艺术与设计的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置艺术与设计的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with painting, sculpture, and architecture.",
        "cn": "她从绘画、雕塑和建筑开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of design and creative.",
        "cn": "Callum解释了设计和创造性的的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses aesthetic, exhibition, and gallery.",
        "cn": "全班讨论美学的、展览和画廊。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "设计",
            "design"
          ],
          [
            "展览",
            "exhibition"
          ],
          [
            "绘画",
            "painting"
          ],
          [
            "视觉的",
            "visual"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "绘画",
        "word": "painting",
        "shuffled": [
          "i",
          "n",
          "p",
          "i",
          "g",
          "a",
          "n",
          "t"
        ]
      },
      {
        "cn": "建筑",
        "word": "architecture",
        "shuffled": [
          "h",
          "i",
          "c",
          "t",
          "c",
          "r",
          "r",
          "u",
          "t",
          "e",
          "a",
          "e"
        ]
      },
      {
        "cn": "创造性的",
        "word": "creative",
        "shuffled": [
          "e",
          "v",
          "e",
          "t",
          "c",
          "i",
          "r",
          "a"
        ]
      },
      {
        "cn": "画廊",
        "word": "gallery",
        "shuffled": [
          "e",
          "a",
          "r",
          "g",
          "y",
          "l",
          "l"
        ]
      },
      {
        "cn": "视觉的",
        "word": "visual",
        "shuffled": [
          "s",
          "l",
          "v",
          "i",
          "u",
          "a"
        ]
      }
    ]
  },
  "middle-33": {
    "titleZh": "传媒与传播",
    "titleEn": "Media and Communication",
    "story": "In a class about media and communication, Goldy prepares ten useful expressions. She starts with journalist, broadcast, and interviewee. Callum explains the importance of audience and message. The class discusses channel, coverage, and editorial. Finally, Jake uses objective and publicity in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于传媒与传播的课上，Goldy准备了十个实用表达。她从记者、广播和受访者开始。Callum解释了受众和信息的重要性。全班讨论渠道、报道和编辑的。最后，Jake在简短的展示中使用了客观的和宣传。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "journalist",
        "记者"
      ],
      [
        "broadcast",
        "广播"
      ],
      [
        "interviewee",
        "受访者"
      ],
      [
        "audience",
        "受众"
      ],
      [
        "message",
        "信息"
      ],
      [
        "channel",
        "渠道"
      ],
      [
        "coverage",
        "报道"
      ],
      [
        "editorial",
        "编辑的"
      ],
      [
        "objective",
        "客观的"
      ],
      [
        "publicity",
        "宣传"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about media and communication, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于传媒与传播的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置传媒与传播的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with journalist, broadcast, and interviewee.",
        "cn": "她从记者、广播和受访者开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of audience and message.",
        "cn": "Callum解释了受众和信息的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses channel, coverage, and editorial.",
        "cn": "全班讨论渠道、报道和编辑的。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "受众",
            "audience"
          ],
          [
            "报道",
            "coverage"
          ],
          [
            "记者",
            "journalist"
          ],
          [
            "宣传",
            "publicity"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "记者",
        "word": "journalist",
        "shuffled": [
          "o",
          "n",
          "a",
          "u",
          "j",
          "l",
          "s",
          "t",
          "i",
          "r"
        ]
      },
      {
        "cn": "受访者",
        "word": "interviewee",
        "shuffled": [
          "w",
          "n",
          "e",
          "e",
          "i",
          "i",
          "r",
          "e",
          "t",
          "v",
          "e"
        ]
      },
      {
        "cn": "信息",
        "word": "message",
        "shuffled": [
          "s",
          "e",
          "m",
          "e",
          "g",
          "s",
          "a"
        ]
      },
      {
        "cn": "编辑的",
        "word": "editorial",
        "shuffled": [
          "i",
          "o",
          "l",
          "e",
          "i",
          "d",
          "r",
          "a",
          "t"
        ]
      },
      {
        "cn": "宣传",
        "word": "publicity",
        "shuffled": [
          "i",
          "t",
          "c",
          "y",
          "i",
          "b",
          "u",
          "l",
          "p"
        ]
      }
    ]
  },
  "middle-34": {
    "titleZh": "科学实验",
    "titleEn": "Scientific Experiments",
    "story": "In a class about scientific experiments, Goldy prepares ten useful expressions. She starts with hypothesis, experiment, and variable. Callum explains the importance of control group and observation. The class discusses measurement, result, and method. Finally, Jake uses accuracy and replication in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于科学实验的课上，Goldy准备了十个实用表达。她从假设、实验和变量开始。Callum解释了对照组和观察的重要性。全班讨论测量、结果和方法。最后，Jake在简短的展示中使用了准确性和重复验证。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "hypothesis",
        "假设"
      ],
      [
        "experiment",
        "实验"
      ],
      [
        "variable",
        "变量"
      ],
      [
        "control group",
        "对照组"
      ],
      [
        "observation",
        "观察"
      ],
      [
        "measurement",
        "测量"
      ],
      [
        "result",
        "结果"
      ],
      [
        "method",
        "方法"
      ],
      [
        "accuracy",
        "准确性"
      ],
      [
        "replication",
        "重复验证"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about scientific experiments, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于科学实验的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置科学实验的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with hypothesis, experiment, and variable.",
        "cn": "她从假设、实验和变量开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of control group and observation.",
        "cn": "Callum解释了对照组和观察的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses measurement, result, and method.",
        "cn": "全班讨论测量、结果和方法。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "对照组",
            "control group"
          ],
          [
            "结果",
            "result"
          ],
          [
            "假设",
            "hypothesis"
          ],
          [
            "重复验证",
            "replication"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "假设",
        "word": "hypothesis",
        "shuffled": [
          "o",
          "h",
          "y",
          "t",
          "h",
          "s",
          "i",
          "s",
          "p",
          "e"
        ]
      },
      {
        "cn": "变量",
        "word": "variable",
        "shuffled": [
          "l",
          "r",
          "a",
          "v",
          "e",
          "b",
          "i",
          "a"
        ]
      },
      {
        "cn": "观察",
        "word": "observation",
        "shuffled": [
          "i",
          "a",
          "t",
          "r",
          "b",
          "e",
          "s",
          "o",
          "o",
          "n",
          "v"
        ]
      },
      {
        "cn": "方法",
        "word": "method",
        "shuffled": [
          "e",
          "o",
          "t",
          "m",
          "h",
          "d"
        ]
      },
      {
        "cn": "重复验证",
        "word": "replication",
        "shuffled": [
          "r",
          "n",
          "e",
          "i",
          "o",
          "a",
          "l",
          "i",
          "p",
          "t",
          "c"
        ]
      }
    ]
  },
  "middle-35": {
    "titleZh": "研究与调查",
    "titleEn": "Research Methods",
    "story": "In a class about research methods, Goldy prepares ten useful expressions. She starts with survey, sample, and population. Callum explains the importance of methodology and participant. The class discusses questionnaire, bias, and validity. Finally, Jake uses reliability and findings in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于研究与调查的课上，Goldy准备了十个实用表达。她从调查、样本和总体开始。Callum解释了方法论和参与者的重要性。全班讨论问卷、偏差和有效性。最后，Jake在简短的展示中使用了可靠性和研究发现。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "survey",
        "调查"
      ],
      [
        "sample",
        "样本"
      ],
      [
        "population",
        "总体"
      ],
      [
        "methodology",
        "方法论"
      ],
      [
        "participant",
        "参与者"
      ],
      [
        "questionnaire",
        "问卷"
      ],
      [
        "bias",
        "偏差"
      ],
      [
        "validity",
        "有效性"
      ],
      [
        "reliability",
        "可靠性"
      ],
      [
        "findings",
        "研究发现"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about research methods, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于研究与调查的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置研究与调查的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with survey, sample, and population.",
        "cn": "她从调查、样本和总体开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of methodology and participant.",
        "cn": "Callum解释了方法论和参与者的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses questionnaire, bias, and validity.",
        "cn": "全班讨论问卷、偏差和有效性。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "方法论",
            "methodology"
          ],
          [
            "偏差",
            "bias"
          ],
          [
            "调查",
            "survey"
          ],
          [
            "研究发现",
            "findings"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "调查",
        "word": "survey",
        "shuffled": [
          "v",
          "e",
          "u",
          "s",
          "y",
          "r"
        ]
      },
      {
        "cn": "总体",
        "word": "population",
        "shuffled": [
          "p",
          "o",
          "o",
          "l",
          "i",
          "a",
          "p",
          "t",
          "n",
          "u"
        ]
      },
      {
        "cn": "参与者",
        "word": "participant",
        "shuffled": [
          "n",
          "p",
          "a",
          "t",
          "p",
          "i",
          "i",
          "c",
          "t",
          "r",
          "a"
        ]
      },
      {
        "cn": "有效性",
        "word": "validity",
        "shuffled": [
          "a",
          "t",
          "i",
          "y",
          "l",
          "i",
          "d",
          "v"
        ]
      },
      {
        "cn": "研究发现",
        "word": "findings",
        "shuffled": [
          "i",
          "i",
          "s",
          "f",
          "g",
          "n",
          "d",
          "n"
        ]
      }
    ]
  },
  "middle-36": {
    "titleZh": "数学与逻辑",
    "titleEn": "Mathematics and Logic",
    "story": "In a class about mathematics and logic, Goldy prepares ten useful expressions. She starts with equation, ratio, and fraction. Callum explains the importance of decimal and probability. The class discusses estimate, calculate, and logical. Finally, Jake uses sequence and pattern in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于数学与逻辑的课上，Goldy准备了十个实用表达。她从方程、比率和分数开始。Callum解释了小数和概率的重要性。全班讨论估计、计算和逻辑的。最后，Jake在简短的展示中使用了序列和模式。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "equation",
        "方程"
      ],
      [
        "ratio",
        "比率"
      ],
      [
        "fraction",
        "分数"
      ],
      [
        "decimal",
        "小数"
      ],
      [
        "probability",
        "概率"
      ],
      [
        "estimate",
        "估计"
      ],
      [
        "calculate",
        "计算"
      ],
      [
        "logical",
        "逻辑的"
      ],
      [
        "sequence",
        "序列"
      ],
      [
        "pattern",
        "模式"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about mathematics and logic, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于数学与逻辑的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置数学与逻辑的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with equation, ratio, and fraction.",
        "cn": "她从方程、比率和分数开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of decimal and probability.",
        "cn": "Callum解释了小数和概率的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses estimate, calculate, and logical.",
        "cn": "全班讨论估计、计算和逻辑的。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "小数",
            "decimal"
          ],
          [
            "计算",
            "calculate"
          ],
          [
            "方程",
            "equation"
          ],
          [
            "模式",
            "pattern"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "方程",
        "word": "equation",
        "shuffled": [
          "t",
          "i",
          "n",
          "a",
          "o",
          "u",
          "q",
          "e"
        ]
      },
      {
        "cn": "分数",
        "word": "fraction",
        "shuffled": [
          "t",
          "n",
          "c",
          "o",
          "f",
          "i",
          "r",
          "a"
        ]
      },
      {
        "cn": "概率",
        "word": "probability",
        "shuffled": [
          "i",
          "o",
          "b",
          "l",
          "p",
          "t",
          "b",
          "i",
          "a",
          "r",
          "y"
        ]
      },
      {
        "cn": "逻辑的",
        "word": "logical",
        "shuffled": [
          "i",
          "a",
          "l",
          "g",
          "l",
          "o",
          "c"
        ]
      },
      {
        "cn": "模式",
        "word": "pattern",
        "shuffled": [
          "a",
          "t",
          "n",
          "p",
          "r",
          "e",
          "t"
        ]
      }
    ]
  },
  "middle-37": {
    "titleZh": "观点与辩论",
    "titleEn": "Argument and Debate",
    "story": "In a class about argument and debate, Goldy prepares ten useful expressions. She starts with claim, counterargument, and assumption. Callum explains the importance of perspective and justify. The class discusses support, challenge, and persuade. Finally, Jake uses concede and debate in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于观点与辩论的课上，Goldy准备了十个实用表达。她从主张、反方论点和假设前提开始。Callum解释了视角和论证的重要性。全班讨论支持、质疑和说服。最后，Jake在简短的展示中使用了承认和辩论。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "claim",
        "主张"
      ],
      [
        "counterargument",
        "反方论点"
      ],
      [
        "assumption",
        "假设前提"
      ],
      [
        "perspective",
        "视角"
      ],
      [
        "justify",
        "论证"
      ],
      [
        "support",
        "支持"
      ],
      [
        "challenge",
        "质疑"
      ],
      [
        "persuade",
        "说服"
      ],
      [
        "concede",
        "承认"
      ],
      [
        "debate",
        "辩论"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about argument and debate, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于观点与辩论的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置观点与辩论的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with claim, counterargument, and assumption.",
        "cn": "她从主张、反方论点和假设前提开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of perspective and justify.",
        "cn": "Callum解释了视角和论证的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses support, challenge, and persuade.",
        "cn": "全班讨论支持、质疑和说服。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "视角",
            "perspective"
          ],
          [
            "质疑",
            "challenge"
          ],
          [
            "主张",
            "claim"
          ],
          [
            "辩论",
            "debate"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "主张",
        "word": "claim",
        "shuffled": [
          "a",
          "l",
          "c",
          "m",
          "i"
        ]
      },
      {
        "cn": "假设前提",
        "word": "assumption",
        "shuffled": [
          "s",
          "t",
          "s",
          "o",
          "m",
          "a",
          "n",
          "i",
          "p",
          "u"
        ]
      },
      {
        "cn": "论证",
        "word": "justify",
        "shuffled": [
          "i",
          "t",
          "y",
          "u",
          "f",
          "s",
          "j"
        ]
      },
      {
        "cn": "说服",
        "word": "persuade",
        "shuffled": [
          "a",
          "s",
          "d",
          "e",
          "u",
          "e",
          "r",
          "p"
        ]
      },
      {
        "cn": "辩论",
        "word": "debate",
        "shuffled": [
          "a",
          "d",
          "b",
          "e",
          "e",
          "t"
        ]
      }
    ]
  },
  "middle-38": {
    "titleZh": "问题与解决",
    "titleEn": "Problem Solving",
    "story": "In a class about problem solving, Goldy prepares ten useful expressions. She starts with issue, obstacle, and alternative. Callum explains the importance of evaluate and implement. The class discusses monitor, adjust, and outcome. Finally, Jake uses feasible and risk in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于问题与解决的课上，Goldy准备了十个实用表达。她从问题、障碍和替代方案开始。Callum解释了评估和实施的重要性。全班讨论监测、调整和结果。最后，Jake在简短的展示中使用了可行的和风险。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "issue",
        "问题"
      ],
      [
        "obstacle",
        "障碍"
      ],
      [
        "alternative",
        "替代方案"
      ],
      [
        "evaluate",
        "评估"
      ],
      [
        "implement",
        "实施"
      ],
      [
        "monitor",
        "监测"
      ],
      [
        "adjust",
        "调整"
      ],
      [
        "outcome",
        "结果"
      ],
      [
        "feasible",
        "可行的"
      ],
      [
        "risk",
        "风险"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about problem solving, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于问题与解决的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置问题与解决的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with issue, obstacle, and alternative.",
        "cn": "她从问题、障碍和替代方案开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of evaluate and implement.",
        "cn": "Callum解释了评估和实施的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses monitor, adjust, and outcome.",
        "cn": "全班讨论监测、调整和结果。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "评估",
            "evaluate"
          ],
          [
            "调整",
            "adjust"
          ],
          [
            "问题",
            "issue"
          ],
          [
            "风险",
            "risk"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "问题",
        "word": "issue",
        "shuffled": [
          "s",
          "u",
          "e",
          "i",
          "s"
        ]
      },
      {
        "cn": "替代方案",
        "word": "alternative",
        "shuffled": [
          "e",
          "n",
          "a",
          "v",
          "l",
          "r",
          "i",
          "a",
          "e",
          "t",
          "t"
        ]
      },
      {
        "cn": "实施",
        "word": "implement",
        "shuffled": [
          "t",
          "e",
          "p",
          "i",
          "n",
          "m",
          "l",
          "e",
          "m"
        ]
      },
      {
        "cn": "结果",
        "word": "outcome",
        "shuffled": [
          "o",
          "m",
          "u",
          "c",
          "t",
          "o",
          "e"
        ]
      },
      {
        "cn": "风险",
        "word": "risk",
        "shuffled": [
          "i",
          "s",
          "k",
          "r"
        ]
      }
    ]
  },
  "middle-39": {
    "titleZh": "公共政策",
    "titleEn": "Public Policy",
    "story": "In a class about public policy, Goldy prepares ten useful expressions. She starts with government, regulation, and legislation. Callum explains the importance of public service and stakeholder. The class discusses consultation, compliance, and transparency. Finally, Jake uses accountability and impact in his short presentation. Everyone compares notes before the lesson ends.",
    "translation": "在一堂关于公共政策的课上，Goldy准备了十个实用表达。她从政府、监管和立法开始。Callum解释了公共服务和利益相关者的重要性。全班讨论咨询、合规和透明度。最后，Jake在简短的展示中使用了问责制和影响。下课前大家互相交流了笔记。",
    "vocabulary": [
      [
        "government",
        "政府"
      ],
      [
        "regulation",
        "监管"
      ],
      [
        "legislation",
        "立法"
      ],
      [
        "public service",
        "公共服务"
      ],
      [
        "stakeholder",
        "利益相关者"
      ],
      [
        "consultation",
        "咨询"
      ],
      [
        "compliance",
        "合规"
      ],
      [
        "transparency",
        "透明度"
      ],
      [
        "accountability",
        "问责制"
      ],
      [
        "impact",
        "影响"
      ]
    ],
    "grammar": [
      {
        "en": "In a class about public policy, Goldy prepares ten useful expressions.",
        "cn": "在一堂关于公共政策的课上，Goldy准备了十个实用表达。",
        "ex": "本句设置公共政策的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "She starts with government, regulation, and legislation.",
        "cn": "她从政府、监管和立法开始。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Callum explains the importance of public service and stakeholder.",
        "cn": "Callum解释了公共服务和利益相关者的重要性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "The class discusses consultation, compliance, and transparency.",
        "cn": "全班讨论咨询、合规和透明度。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "谁准备了十个表达？",
        "en": "Who prepares ten expressions?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 1,
        "evidence": "Goldy prepares ten useful expressions."
      },
      {
        "cn": "Goldy首先介绍哪个词？",
        "en": "Which term does Goldy introduce first?",
        "options": [
          [
            "公共服务",
            "public service"
          ],
          [
            "合规",
            "compliance"
          ],
          [
            "政府",
            "government"
          ],
          [
            "影响",
            "impact"
          ]
        ],
        "correct": 2,
        "evidence": "She starts with"
      },
      {
        "cn": "谁解释了两个概念的重要性？",
        "en": "Who explains the importance of two concepts?",
        "options": [
          [
            "Jake",
            "Jake"
          ],
          [
            "老师",
            "The teacher"
          ],
          [
            "Callum",
            "Callum"
          ],
          [
            "Goldy",
            "Goldy"
          ]
        ],
        "correct": 2,
        "evidence": "Callum explains the importance of"
      },
      {
        "cn": "Jake在什么活动中使用最后两个词？",
        "en": "Where does Jake use the last two terms?",
        "options": [
          [
            "书面考试",
            "In a written exam"
          ],
          [
            "简短展示",
            "In a short presentation"
          ],
          [
            "晚餐时",
            "At dinner"
          ],
          [
            "体育活动",
            "In a sports game"
          ]
        ],
        "correct": 1,
        "evidence": "in his short presentation."
      },
      {
        "cn": "下课前大家做了什么？",
        "en": "What happens before the lesson ends?",
        "options": [
          [
            "互相交流笔记",
            "Everyone compares notes"
          ],
          [
            "离开学校",
            "Everyone leaves school"
          ],
          [
            "一起唱歌",
            "Everyone sings"
          ],
          [
            "取消课程",
            "The lesson is cancelled"
          ]
        ],
        "correct": 0,
        "evidence": "Everyone compares notes before the lesson ends."
      }
    ],
    "writing": [
      {
        "cn": "政府",
        "word": "government",
        "shuffled": [
          "n",
          "v",
          "t",
          "e",
          "r",
          "o",
          "m",
          "g",
          "e",
          "n"
        ]
      },
      {
        "cn": "立法",
        "word": "legislation",
        "shuffled": [
          "i",
          "n",
          "l",
          "l",
          "i",
          "o",
          "e",
          "g",
          "s",
          "t",
          "a"
        ]
      },
      {
        "cn": "利益相关者",
        "word": "stakeholder",
        "shuffled": [
          "r",
          "k",
          "l",
          "t",
          "a",
          "e",
          "h",
          "e",
          "o",
          "s",
          "d"
        ]
      },
      {
        "cn": "透明度",
        "word": "transparency",
        "shuffled": [
          "n",
          "a",
          "a",
          "p",
          "c",
          "t",
          "s",
          "n",
          "r",
          "r",
          "y",
          "e"
        ]
      },
      {
        "cn": "影响",
        "word": "impact",
        "shuffled": [
          "i",
          "t",
          "a",
          "p",
          "c",
          "m"
        ]
      }
    ]
  },
  "senior-1": {
    "titleZh": "学术论证",
    "titleEn": "Academic Argumentation",
    "story": "During a seminar on academic argumentation, Goldy introduces contention, substantiation, and empirical as important concepts. Callum argues that premise and deduction deserve closer attention. Participants then evaluate induction, corroborate, and refute using examples. Jake concludes by examining the relationship between nuance and implication. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于学术论证的研讨会上，Goldy介绍论点、论证和实证的这几个重要概念。Callum认为前提和演绎值得进一步关注。随后参与者用实例评估归纳、证实和反驳。Jake最后分析了细微差异与含义之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "contention",
        "论点"
      ],
      [
        "substantiation",
        "论证"
      ],
      [
        "empirical",
        "实证的"
      ],
      [
        "premise",
        "前提"
      ],
      [
        "deduction",
        "演绎"
      ],
      [
        "induction",
        "归纳"
      ],
      [
        "corroborate",
        "证实"
      ],
      [
        "refute",
        "反驳"
      ],
      [
        "nuance",
        "细微差异"
      ],
      [
        "implication",
        "含义"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on academic argumentation, Goldy introduces contention, substantiation, and empirical as important concepts.",
        "cn": "在一场关于学术论证的研讨会上，Goldy介绍论点、论证和实证的这几个重要概念。",
        "ex": "本句设置学术论证的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that premise and deduction deserve closer attention.",
        "cn": "Callum认为前提和演绎值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate induction, corroborate, and refute using examples.",
        "cn": "随后参与者用实例评估归纳、证实和反驳。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between nuance and implication.",
        "cn": "Jake最后分析了细微差异与含义之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "学术论证",
            "Academic Argumentation"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "实证的",
            "empirical"
          ],
          [
            "前提",
            "premise"
          ],
          [
            "细微差异",
            "nuance"
          ],
          [
            "论点",
            "contention"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "论点",
        "word": "contention",
        "shuffled": [
          "c",
          "n",
          "o",
          "n",
          "e",
          "i",
          "o",
          "t",
          "n",
          "t"
        ]
      },
      {
        "cn": "实证的",
        "word": "empirical",
        "shuffled": [
          "c",
          "l",
          "a",
          "p",
          "i",
          "m",
          "i",
          "r",
          "e"
        ]
      },
      {
        "cn": "演绎",
        "word": "deduction",
        "shuffled": [
          "o",
          "n",
          "e",
          "t",
          "d",
          "d",
          "u",
          "i",
          "c"
        ]
      },
      {
        "cn": "反驳",
        "word": "refute",
        "shuffled": [
          "r",
          "u",
          "e",
          "e",
          "f",
          "t"
        ]
      },
      {
        "cn": "含义",
        "word": "implication",
        "shuffled": [
          "a",
          "m",
          "o",
          "i",
          "p",
          "n",
          "i",
          "l",
          "c",
          "i",
          "t"
        ]
      }
    ]
  },
  "senior-2": {
    "titleZh": "研究设计",
    "titleEn": "Research Design",
    "story": "During a seminar on research design, Goldy introduces longitudinal, cross sectional, and randomisation as important concepts. Callum argues that confounder and causality deserve closer attention. Participants then evaluate correlation, generalisation, and robustness using examples. Jake concludes by examining the relationship between significance and limitations. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于研究设计的研讨会上，Goldy介绍纵向的、横断面的和随机化这几个重要概念。Callum认为混杂因素和因果关系值得进一步关注。随后参与者用实例评估相关关系、普遍化和稳健性。Jake最后分析了显著性与局限性之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "longitudinal",
        "纵向的"
      ],
      [
        "cross sectional",
        "横断面的"
      ],
      [
        "randomisation",
        "随机化"
      ],
      [
        "confounder",
        "混杂因素"
      ],
      [
        "causality",
        "因果关系"
      ],
      [
        "correlation",
        "相关关系"
      ],
      [
        "generalisation",
        "普遍化"
      ],
      [
        "robustness",
        "稳健性"
      ],
      [
        "significance",
        "显著性"
      ],
      [
        "limitations",
        "局限性"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on research design, Goldy introduces longitudinal, cross sectional, and randomisation as important concepts.",
        "cn": "在一场关于研究设计的研讨会上，Goldy介绍纵向的、横断面的和随机化这几个重要概念。",
        "ex": "本句设置研究设计的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that confounder and causality deserve closer attention.",
        "cn": "Callum认为混杂因素和因果关系值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate correlation, generalisation, and robustness using examples.",
        "cn": "随后参与者用实例评估相关关系、普遍化和稳健性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between significance and limitations.",
        "cn": "Jake最后分析了显著性与局限性之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "研究设计",
            "Research Design"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "随机化",
            "randomisation"
          ],
          [
            "混杂因素",
            "confounder"
          ],
          [
            "显著性",
            "significance"
          ],
          [
            "纵向的",
            "longitudinal"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "纵向的",
        "word": "longitudinal",
        "shuffled": [
          "n",
          "g",
          "l",
          "t",
          "a",
          "o",
          "u",
          "l",
          "i",
          "i",
          "d",
          "n"
        ]
      },
      {
        "cn": "随机化",
        "word": "randomisation",
        "shuffled": [
          "a",
          "t",
          "n",
          "n",
          "d",
          "a",
          "i",
          "m",
          "i",
          "s",
          "r",
          "o",
          "o"
        ]
      },
      {
        "cn": "因果关系",
        "word": "causality",
        "shuffled": [
          "a",
          "a",
          "s",
          "u",
          "i",
          "y",
          "t",
          "l",
          "c"
        ]
      },
      {
        "cn": "稳健性",
        "word": "robustness",
        "shuffled": [
          "n",
          "t",
          "s",
          "u",
          "s",
          "r",
          "e",
          "b",
          "s",
          "o"
        ]
      },
      {
        "cn": "局限性",
        "word": "limitations",
        "shuffled": [
          "l",
          "i",
          "s",
          "t",
          "a",
          "t",
          "i",
          "o",
          "m",
          "n",
          "i"
        ]
      }
    ]
  },
  "senior-3": {
    "titleZh": "定量分析",
    "titleEn": "Quantitative Analysis",
    "story": "During a seminar on quantitative analysis, Goldy introduces distribution, variance, and standard deviation as important concepts. Callum argues that median and percentile deserve closer attention. Participants then evaluate regression, coefficient, and outlier using examples. Jake concludes by examining the relationship between normalisation and interval. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于定量分析的研讨会上，Goldy介绍分布、方差和标准差这几个重要概念。Callum认为中位数和百分位数值得进一步关注。随后参与者用实例评估回归、系数和离群值。Jake最后分析了标准化与区间之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "distribution",
        "分布"
      ],
      [
        "variance",
        "方差"
      ],
      [
        "standard deviation",
        "标准差"
      ],
      [
        "median",
        "中位数"
      ],
      [
        "percentile",
        "百分位数"
      ],
      [
        "regression",
        "回归"
      ],
      [
        "coefficient",
        "系数"
      ],
      [
        "outlier",
        "离群值"
      ],
      [
        "normalisation",
        "标准化"
      ],
      [
        "interval",
        "区间"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on quantitative analysis, Goldy introduces distribution, variance, and standard deviation as important concepts.",
        "cn": "在一场关于定量分析的研讨会上，Goldy介绍分布、方差和标准差这几个重要概念。",
        "ex": "本句设置定量分析的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that median and percentile deserve closer attention.",
        "cn": "Callum认为中位数和百分位数值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate regression, coefficient, and outlier using examples.",
        "cn": "随后参与者用实例评估回归、系数和离群值。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between normalisation and interval.",
        "cn": "Jake最后分析了标准化与区间之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "定量分析",
            "Quantitative Analysis"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "标准差",
            "standard deviation"
          ],
          [
            "中位数",
            "median"
          ],
          [
            "标准化",
            "normalisation"
          ],
          [
            "分布",
            "distribution"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "分布",
        "word": "distribution",
        "shuffled": [
          "u",
          "i",
          "i",
          "s",
          "t",
          "t",
          "n",
          "o",
          "b",
          "i",
          "r",
          "d"
        ]
      },
      {
        "cn": "标准差",
        "word": "standarddeviation",
        "shuffled": [
          "t",
          "d",
          "n",
          "s",
          "r",
          "o",
          "i",
          "v",
          "a",
          "a",
          "i",
          "d",
          "e",
          "a",
          "t",
          "n",
          "d"
        ]
      },
      {
        "cn": "百分位数",
        "word": "percentile",
        "shuffled": [
          "n",
          "e",
          "t",
          "c",
          "l",
          "r",
          "i",
          "e",
          "e",
          "p"
        ]
      },
      {
        "cn": "离群值",
        "word": "outlier",
        "shuffled": [
          "o",
          "u",
          "r",
          "e",
          "t",
          "l",
          "i"
        ]
      },
      {
        "cn": "区间",
        "word": "interval",
        "shuffled": [
          "t",
          "v",
          "r",
          "l",
          "i",
          "e",
          "n",
          "a"
        ]
      }
    ]
  },
  "senior-4": {
    "titleZh": "定性研究",
    "titleEn": "Qualitative Research",
    "story": "During a seminar on qualitative research, Goldy introduces ethnography, interview protocol, and coding as important concepts. Callum argues that theme analysis and triangulation deserve closer attention. Participants then evaluate reflexivity, interpretation, and saturation using examples. Jake concludes by examining the relationship between fieldwork and narrative. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于定性研究的研讨会上，Goldy介绍民族志、访谈提纲和编码这几个重要概念。Callum认为主题分析和三角互证值得进一步关注。随后参与者用实例评估反思性、解释和饱和度。Jake最后分析了田野调查与叙事之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "ethnography",
        "民族志"
      ],
      [
        "interview protocol",
        "访谈提纲"
      ],
      [
        "coding",
        "编码"
      ],
      [
        "theme analysis",
        "主题分析"
      ],
      [
        "triangulation",
        "三角互证"
      ],
      [
        "reflexivity",
        "反思性"
      ],
      [
        "interpretation",
        "解释"
      ],
      [
        "saturation",
        "饱和度"
      ],
      [
        "fieldwork",
        "田野调查"
      ],
      [
        "narrative",
        "叙事"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on qualitative research, Goldy introduces ethnography, interview protocol, and coding as important concepts.",
        "cn": "在一场关于定性研究的研讨会上，Goldy介绍民族志、访谈提纲和编码这几个重要概念。",
        "ex": "本句设置定性研究的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that theme analysis and triangulation deserve closer attention.",
        "cn": "Callum认为主题分析和三角互证值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate reflexivity, interpretation, and saturation using examples.",
        "cn": "随后参与者用实例评估反思性、解释和饱和度。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between fieldwork and narrative.",
        "cn": "Jake最后分析了田野调查与叙事之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "定性研究",
            "Qualitative Research"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "编码",
            "coding"
          ],
          [
            "主题分析",
            "theme analysis"
          ],
          [
            "田野调查",
            "fieldwork"
          ],
          [
            "民族志",
            "ethnography"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "民族志",
        "word": "ethnography",
        "shuffled": [
          "h",
          "y",
          "g",
          "e",
          "r",
          "p",
          "n",
          "a",
          "h",
          "o",
          "t"
        ]
      },
      {
        "cn": "编码",
        "word": "coding",
        "shuffled": [
          "d",
          "c",
          "g",
          "i",
          "n",
          "o"
        ]
      },
      {
        "cn": "三角互证",
        "word": "triangulation",
        "shuffled": [
          "t",
          "a",
          "l",
          "t",
          "i",
          "n",
          "n",
          "i",
          "u",
          "g",
          "a",
          "r",
          "o"
        ]
      },
      {
        "cn": "饱和度",
        "word": "saturation",
        "shuffled": [
          "i",
          "t",
          "a",
          "a",
          "u",
          "r",
          "s",
          "n",
          "t",
          "o"
        ]
      },
      {
        "cn": "叙事",
        "word": "narrative",
        "shuffled": [
          "r",
          "a",
          "n",
          "r",
          "a",
          "i",
          "e",
          "v",
          "t"
        ]
      }
    ]
  },
  "senior-5": {
    "titleZh": "教育公平",
    "titleEn": "Education Equity",
    "story": "During a seminar on education equity, Goldy introduces equity, attainment, and disparity as important concepts. Callum argues that disadvantage and scholarship deserve closer attention. Participants then evaluate tuition, pedagogy, and assessment using examples. Jake concludes by examining the relationship between intervention and access. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于教育公平的研讨会上，Goldy介绍公平、学业成就和差距这几个重要概念。Callum认为不利条件和奖学金值得进一步关注。随后参与者用实例评估学费、教学法和评估。Jake最后分析了干预与机会获取之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "equity",
        "公平"
      ],
      [
        "attainment",
        "学业成就"
      ],
      [
        "disparity",
        "差距"
      ],
      [
        "disadvantage",
        "不利条件"
      ],
      [
        "scholarship",
        "奖学金"
      ],
      [
        "tuition",
        "学费"
      ],
      [
        "pedagogy",
        "教学法"
      ],
      [
        "assessment",
        "评估"
      ],
      [
        "intervention",
        "干预"
      ],
      [
        "access",
        "机会获取"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on education equity, Goldy introduces equity, attainment, and disparity as important concepts.",
        "cn": "在一场关于教育公平的研讨会上，Goldy介绍公平、学业成就和差距这几个重要概念。",
        "ex": "本句设置教育公平的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that disadvantage and scholarship deserve closer attention.",
        "cn": "Callum认为不利条件和奖学金值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate tuition, pedagogy, and assessment using examples.",
        "cn": "随后参与者用实例评估学费、教学法和评估。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between intervention and access.",
        "cn": "Jake最后分析了干预与机会获取之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "教育公平",
            "Education Equity"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "差距",
            "disparity"
          ],
          [
            "不利条件",
            "disadvantage"
          ],
          [
            "干预",
            "intervention"
          ],
          [
            "公平",
            "equity"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "公平",
        "word": "equity",
        "shuffled": [
          "t",
          "q",
          "u",
          "e",
          "y",
          "i"
        ]
      },
      {
        "cn": "差距",
        "word": "disparity",
        "shuffled": [
          "t",
          "i",
          "a",
          "s",
          "d",
          "i",
          "r",
          "p",
          "y"
        ]
      },
      {
        "cn": "奖学金",
        "word": "scholarship",
        "shuffled": [
          "p",
          "o",
          "s",
          "r",
          "c",
          "a",
          "i",
          "l",
          "h",
          "s",
          "h"
        ]
      },
      {
        "cn": "评估",
        "word": "assessment",
        "shuffled": [
          "t",
          "e",
          "e",
          "s",
          "s",
          "s",
          "s",
          "n",
          "a",
          "m"
        ]
      },
      {
        "cn": "机会获取",
        "word": "access",
        "shuffled": [
          "a",
          "s",
          "c",
          "e",
          "c",
          "s"
        ]
      }
    ]
  },
  "senior-6": {
    "titleZh": "远程教育",
    "titleEn": "Online Education",
    "story": "During a seminar on online education, Goldy introduces virtual classroom, synchronous, and asynchronous as important concepts. Callum argues that engagement and retention deserve closer attention. Participants then evaluate platform, instruction, and facilitation using examples. Jake concludes by examining the relationship between autonomy and digital literacy. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于远程教育的研讨会上，Goldy介绍虚拟课堂、同步的和异步的这几个重要概念。Callum认为参与度和留存率值得进一步关注。随后参与者用实例评估平台、教学和引导。Jake最后分析了自主性与数字素养之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "virtual classroom",
        "虚拟课堂"
      ],
      [
        "synchronous",
        "同步的"
      ],
      [
        "asynchronous",
        "异步的"
      ],
      [
        "engagement",
        "参与度"
      ],
      [
        "retention",
        "留存率"
      ],
      [
        "platform",
        "平台"
      ],
      [
        "instruction",
        "教学"
      ],
      [
        "facilitation",
        "引导"
      ],
      [
        "autonomy",
        "自主性"
      ],
      [
        "digital literacy",
        "数字素养"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on online education, Goldy introduces virtual classroom, synchronous, and asynchronous as important concepts.",
        "cn": "在一场关于远程教育的研讨会上，Goldy介绍虚拟课堂、同步的和异步的这几个重要概念。",
        "ex": "本句设置远程教育的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that engagement and retention deserve closer attention.",
        "cn": "Callum认为参与度和留存率值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate platform, instruction, and facilitation using examples.",
        "cn": "随后参与者用实例评估平台、教学和引导。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between autonomy and digital literacy.",
        "cn": "Jake最后分析了自主性与数字素养之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "远程教育",
            "Online Education"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "异步的",
            "asynchronous"
          ],
          [
            "参与度",
            "engagement"
          ],
          [
            "自主性",
            "autonomy"
          ],
          [
            "虚拟课堂",
            "virtual classroom"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "虚拟课堂",
        "word": "virtualclassroom",
        "shuffled": [
          "t",
          "s",
          "r",
          "o",
          "v",
          "u",
          "a",
          "o",
          "r",
          "c",
          "m",
          "a",
          "s",
          "l",
          "l",
          "i"
        ]
      },
      {
        "cn": "异步的",
        "word": "asynchronous",
        "shuffled": [
          "a",
          "h",
          "n",
          "o",
          "c",
          "s",
          "y",
          "s",
          "u",
          "n",
          "o",
          "r"
        ]
      },
      {
        "cn": "留存率",
        "word": "retention",
        "shuffled": [
          "o",
          "e",
          "t",
          "t",
          "r",
          "n",
          "e",
          "n",
          "i"
        ]
      },
      {
        "cn": "引导",
        "word": "facilitation",
        "shuffled": [
          "a",
          "i",
          "l",
          "f",
          "a",
          "o",
          "i",
          "c",
          "i",
          "t",
          "n",
          "t"
        ]
      },
      {
        "cn": "数字素养",
        "word": "digitalliteracy",
        "shuffled": [
          "r",
          "i",
          "i",
          "l",
          "l",
          "i",
          "t",
          "g",
          "c",
          "y",
          "t",
          "a",
          "e",
          "a",
          "d"
        ]
      }
    ]
  },
  "senior-7": {
    "titleZh": "人工智能",
    "titleEn": "Artificial Intelligence",
    "story": "During a seminar on artificial intelligence, Goldy introduces algorithm, machine learning, and neural network as important concepts. Callum argues that automation and prediction deserve closer attention. Participants then evaluate dataset, training data, and model using examples. Jake concludes by examining the relationship between accuracy metric and ethics. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于人工智能的研讨会上，Goldy介绍算法、机器学习和神经网络这几个重要概念。Callum认为自动化和预测值得进一步关注。随后参与者用实例评估数据集、训练数据和模型。Jake最后分析了准确度指标与伦理之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "algorithm",
        "算法"
      ],
      [
        "machine learning",
        "机器学习"
      ],
      [
        "neural network",
        "神经网络"
      ],
      [
        "automation",
        "自动化"
      ],
      [
        "prediction",
        "预测"
      ],
      [
        "dataset",
        "数据集"
      ],
      [
        "training data",
        "训练数据"
      ],
      [
        "model",
        "模型"
      ],
      [
        "accuracy metric",
        "准确度指标"
      ],
      [
        "ethics",
        "伦理"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on artificial intelligence, Goldy introduces algorithm, machine learning, and neural network as important concepts.",
        "cn": "在一场关于人工智能的研讨会上，Goldy介绍算法、机器学习和神经网络这几个重要概念。",
        "ex": "本句设置人工智能的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that automation and prediction deserve closer attention.",
        "cn": "Callum认为自动化和预测值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate dataset, training data, and model using examples.",
        "cn": "随后参与者用实例评估数据集、训练数据和模型。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between accuracy metric and ethics.",
        "cn": "Jake最后分析了准确度指标与伦理之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "人工智能",
            "Artificial Intelligence"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "神经网络",
            "neural network"
          ],
          [
            "自动化",
            "automation"
          ],
          [
            "准确度指标",
            "accuracy metric"
          ],
          [
            "算法",
            "algorithm"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "算法",
        "word": "algorithm",
        "shuffled": [
          "i",
          "r",
          "o",
          "l",
          "h",
          "t",
          "g",
          "a",
          "m"
        ]
      },
      {
        "cn": "神经网络",
        "word": "neuralnetwork",
        "shuffled": [
          "w",
          "t",
          "l",
          "r",
          "r",
          "n",
          "n",
          "e",
          "e",
          "u",
          "o",
          "a",
          "k"
        ]
      },
      {
        "cn": "预测",
        "word": "prediction",
        "shuffled": [
          "e",
          "n",
          "p",
          "t",
          "i",
          "c",
          "d",
          "r",
          "o",
          "i"
        ]
      },
      {
        "cn": "模型",
        "word": "model",
        "shuffled": [
          "d",
          "e",
          "l",
          "m",
          "o"
        ]
      },
      {
        "cn": "伦理",
        "word": "ethics",
        "shuffled": [
          "t",
          "s",
          "i",
          "c",
          "h",
          "e"
        ]
      }
    ]
  },
  "senior-8": {
    "titleZh": "数据隐私",
    "titleEn": "Data Privacy",
    "story": "During a seminar on data privacy, Goldy introduces surveillance, consent, and anonymity as important concepts. Callum argues that confidentiality and breach deserve closer attention. Participants then evaluate governance, cybersecurity, and authentication using examples. Jake concludes by examining the relationship between retention period and disclosure. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于数据隐私的研讨会上，Goldy介绍监控、同意和匿名性这几个重要概念。Callum认为保密性和数据泄露值得进一步关注。随后参与者用实例评估治理、网络安全和身份验证。Jake最后分析了保留期限与披露之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "surveillance",
        "监控"
      ],
      [
        "consent",
        "同意"
      ],
      [
        "anonymity",
        "匿名性"
      ],
      [
        "confidentiality",
        "保密性"
      ],
      [
        "breach",
        "数据泄露"
      ],
      [
        "governance",
        "治理"
      ],
      [
        "cybersecurity",
        "网络安全"
      ],
      [
        "authentication",
        "身份验证"
      ],
      [
        "retention period",
        "保留期限"
      ],
      [
        "disclosure",
        "披露"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on data privacy, Goldy introduces surveillance, consent, and anonymity as important concepts.",
        "cn": "在一场关于数据隐私的研讨会上，Goldy介绍监控、同意和匿名性这几个重要概念。",
        "ex": "本句设置数据隐私的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that confidentiality and breach deserve closer attention.",
        "cn": "Callum认为保密性和数据泄露值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate governance, cybersecurity, and authentication using examples.",
        "cn": "随后参与者用实例评估治理、网络安全和身份验证。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between retention period and disclosure.",
        "cn": "Jake最后分析了保留期限与披露之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "数据隐私",
            "Data Privacy"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "匿名性",
            "anonymity"
          ],
          [
            "保密性",
            "confidentiality"
          ],
          [
            "保留期限",
            "retention period"
          ],
          [
            "监控",
            "surveillance"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "监控",
        "word": "surveillance",
        "shuffled": [
          "n",
          "u",
          "r",
          "e",
          "v",
          "s",
          "l",
          "e",
          "l",
          "i",
          "a",
          "c"
        ]
      },
      {
        "cn": "匿名性",
        "word": "anonymity",
        "shuffled": [
          "m",
          "y",
          "i",
          "o",
          "t",
          "y",
          "n",
          "a",
          "n"
        ]
      },
      {
        "cn": "数据泄露",
        "word": "breach",
        "shuffled": [
          "b",
          "h",
          "e",
          "a",
          "c",
          "r"
        ]
      },
      {
        "cn": "身份验证",
        "word": "authentication",
        "shuffled": [
          "i",
          "n",
          "a",
          "e",
          "n",
          "h",
          "u",
          "t",
          "o",
          "t",
          "c",
          "i",
          "a",
          "t"
        ]
      },
      {
        "cn": "披露",
        "word": "disclosure",
        "shuffled": [
          "s",
          "e",
          "i",
          "s",
          "l",
          "d",
          "r",
          "o",
          "u",
          "c"
        ]
      }
    ]
  },
  "senior-9": {
    "titleZh": "医学研究",
    "titleEn": "Medical Research",
    "story": "During a seminar on medical research, Goldy introduces clinical trial, placebo, and randomised as important concepts. Callum argues that efficacy and safety deserve closer attention. Participants then evaluate adverse event, protocol, and cohort using examples. Jake concludes by examining the relationship between screening and follow up study. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于医学研究的研讨会上，Goldy介绍临床试验、安慰剂和随机的这几个重要概念。Callum认为疗效和安全性值得进一步关注。随后参与者用实例评估不良事件、试验方案和队列。Jake最后分析了筛查与随访研究之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "clinical trial",
        "临床试验"
      ],
      [
        "placebo",
        "安慰剂"
      ],
      [
        "randomised",
        "随机的"
      ],
      [
        "efficacy",
        "疗效"
      ],
      [
        "safety",
        "安全性"
      ],
      [
        "adverse event",
        "不良事件"
      ],
      [
        "protocol",
        "试验方案"
      ],
      [
        "cohort",
        "队列"
      ],
      [
        "screening",
        "筛查"
      ],
      [
        "follow up study",
        "随访研究"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on medical research, Goldy introduces clinical trial, placebo, and randomised as important concepts.",
        "cn": "在一场关于医学研究的研讨会上，Goldy介绍临床试验、安慰剂和随机的这几个重要概念。",
        "ex": "本句设置医学研究的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that efficacy and safety deserve closer attention.",
        "cn": "Callum认为疗效和安全性值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate adverse event, protocol, and cohort using examples.",
        "cn": "随后参与者用实例评估不良事件、试验方案和队列。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between screening and follow up study.",
        "cn": "Jake最后分析了筛查与随访研究之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "医学研究",
            "Medical Research"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "随机的",
            "randomised"
          ],
          [
            "疗效",
            "efficacy"
          ],
          [
            "筛查",
            "screening"
          ],
          [
            "临床试验",
            "clinical trial"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "临床试验",
        "word": "clinicaltrial",
        "shuffled": [
          "a",
          "a",
          "i",
          "l",
          "i",
          "l",
          "r",
          "t",
          "c",
          "n",
          "i",
          "c",
          "l"
        ]
      },
      {
        "cn": "随机的",
        "word": "randomised",
        "shuffled": [
          "s",
          "d",
          "m",
          "n",
          "a",
          "r",
          "d",
          "e",
          "i",
          "o"
        ]
      },
      {
        "cn": "安全性",
        "word": "safety",
        "shuffled": [
          "a",
          "e",
          "f",
          "t",
          "y",
          "s"
        ]
      },
      {
        "cn": "队列",
        "word": "cohort",
        "shuffled": [
          "h",
          "c",
          "o",
          "r",
          "o",
          "t"
        ]
      },
      {
        "cn": "随访研究",
        "word": "followupstudy",
        "shuffled": [
          "s",
          "w",
          "u",
          "d",
          "o",
          "y",
          "l",
          "t",
          "l",
          "p",
          "u",
          "o",
          "f"
        ]
      }
    ]
  },
  "senior-10": {
    "titleZh": "流行病学",
    "titleEn": "Epidemiology",
    "story": "During a seminar on epidemiology, Goldy introduces incidence, prevalence, and transmission as important concepts. Callum argues that exposure and immunity deserve closer attention. Participants then evaluate quarantine, contagious, and outbreak using examples. Jake concludes by examining the relationship between epidemic and vulnerable. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于流行病学的研讨会上，Goldy介绍发病率、患病率和传播这几个重要概念。Callum认为暴露和免疫值得进一步关注。随后参与者用实例评估隔离、具有传染性的和暴发。Jake最后分析了流行病与脆弱的之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "incidence",
        "发病率"
      ],
      [
        "prevalence",
        "患病率"
      ],
      [
        "transmission",
        "传播"
      ],
      [
        "exposure",
        "暴露"
      ],
      [
        "immunity",
        "免疫"
      ],
      [
        "quarantine",
        "隔离"
      ],
      [
        "contagious",
        "具有传染性的"
      ],
      [
        "outbreak",
        "暴发"
      ],
      [
        "epidemic",
        "流行病"
      ],
      [
        "vulnerable",
        "脆弱的"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on epidemiology, Goldy introduces incidence, prevalence, and transmission as important concepts.",
        "cn": "在一场关于流行病学的研讨会上，Goldy介绍发病率、患病率和传播这几个重要概念。",
        "ex": "本句设置流行病学的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that exposure and immunity deserve closer attention.",
        "cn": "Callum认为暴露和免疫值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate quarantine, contagious, and outbreak using examples.",
        "cn": "随后参与者用实例评估隔离、具有传染性的和暴发。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between epidemic and vulnerable.",
        "cn": "Jake最后分析了流行病与脆弱的之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "流行病学",
            "Epidemiology"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "传播",
            "transmission"
          ],
          [
            "暴露",
            "exposure"
          ],
          [
            "流行病",
            "epidemic"
          ],
          [
            "发病率",
            "incidence"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "发病率",
        "word": "incidence",
        "shuffled": [
          "i",
          "c",
          "n",
          "n",
          "e",
          "e",
          "i",
          "d",
          "c"
        ]
      },
      {
        "cn": "传播",
        "word": "transmission",
        "shuffled": [
          "o",
          "i",
          "s",
          "m",
          "n",
          "s",
          "a",
          "i",
          "n",
          "r",
          "t",
          "s"
        ]
      },
      {
        "cn": "免疫",
        "word": "immunity",
        "shuffled": [
          "i",
          "u",
          "i",
          "m",
          "n",
          "m",
          "y",
          "t"
        ]
      },
      {
        "cn": "暴发",
        "word": "outbreak",
        "shuffled": [
          "k",
          "a",
          "r",
          "t",
          "b",
          "e",
          "o",
          "u"
        ]
      },
      {
        "cn": "脆弱的",
        "word": "vulnerable",
        "shuffled": [
          "u",
          "n",
          "r",
          "v",
          "e",
          "a",
          "b",
          "l",
          "l",
          "e"
        ]
      }
    ]
  },
  "senior-11": {
    "titleZh": "心理与行为",
    "titleEn": "Psychology and Behaviour",
    "story": "During a seminar on psychology and behaviour, Goldy introduces cognition, motivation, and perception as important concepts. Callum argues that behavioural and reward deserve closer attention. Participants then evaluate habit formation, stress response, and resilience using examples. Jake concludes by examining the relationship between wellbeing index and intervention study. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于心理与行为的研讨会上，Goldy介绍认知、动机和知觉这几个重要概念。Callum认为行为的和奖励机制值得进一步关注。随后参与者用实例评估习惯形成、应激反应和韧性。Jake最后分析了幸福指数与干预研究之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "cognition",
        "认知"
      ],
      [
        "motivation",
        "动机"
      ],
      [
        "perception",
        "知觉"
      ],
      [
        "behavioural",
        "行为的"
      ],
      [
        "reward",
        "奖励机制"
      ],
      [
        "habit formation",
        "习惯形成"
      ],
      [
        "stress response",
        "应激反应"
      ],
      [
        "resilience",
        "韧性"
      ],
      [
        "wellbeing index",
        "幸福指数"
      ],
      [
        "intervention study",
        "干预研究"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on psychology and behaviour, Goldy introduces cognition, motivation, and perception as important concepts.",
        "cn": "在一场关于心理与行为的研讨会上，Goldy介绍认知、动机和知觉这几个重要概念。",
        "ex": "本句设置心理与行为的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that behavioural and reward deserve closer attention.",
        "cn": "Callum认为行为的和奖励机制值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate habit formation, stress response, and resilience using examples.",
        "cn": "随后参与者用实例评估习惯形成、应激反应和韧性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between wellbeing index and intervention study.",
        "cn": "Jake最后分析了幸福指数与干预研究之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "心理与行为",
            "Psychology and Behaviour"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "知觉",
            "perception"
          ],
          [
            "行为的",
            "behavioural"
          ],
          [
            "幸福指数",
            "wellbeing index"
          ],
          [
            "认知",
            "cognition"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "认知",
        "word": "cognition",
        "shuffled": [
          "o",
          "i",
          "i",
          "n",
          "o",
          "t",
          "n",
          "g",
          "c"
        ]
      },
      {
        "cn": "知觉",
        "word": "perception",
        "shuffled": [
          "r",
          "e",
          "p",
          "o",
          "e",
          "n",
          "p",
          "i",
          "t",
          "c"
        ]
      },
      {
        "cn": "奖励机制",
        "word": "reward",
        "shuffled": [
          "e",
          "r",
          "w",
          "a",
          "r",
          "d"
        ]
      },
      {
        "cn": "韧性",
        "word": "resilience",
        "shuffled": [
          "l",
          "i",
          "e",
          "i",
          "s",
          "e",
          "r",
          "n",
          "c",
          "e"
        ]
      },
      {
        "cn": "干预研究",
        "word": "interventionstudy",
        "shuffled": [
          "t",
          "o",
          "r",
          "n",
          "u",
          "t",
          "e",
          "n",
          "s",
          "t",
          "v",
          "y",
          "e",
          "i",
          "n",
          "d",
          "i"
        ]
      }
    ]
  },
  "senior-12": {
    "titleZh": "人口老龄化",
    "titleEn": "Population Ageing",
    "story": "During a seminar on population ageing, Goldy introduces demography, life expectancy, and longevity as important concepts. Callum argues that dependency ratio and retirement deserve closer attention. Participants then evaluate pension, caregiving, and aged care using examples. Jake concludes by examining the relationship between fiscal pressure and workforce. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于人口老龄化的研讨会上，Goldy介绍人口统计学、预期寿命和长寿这几个重要概念。Callum认为抚养比和退休值得进一步关注。随后参与者用实例评估养老金、照护和养老护理。Jake最后分析了财政压力与劳动力之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "demography",
        "人口统计学"
      ],
      [
        "life expectancy",
        "预期寿命"
      ],
      [
        "longevity",
        "长寿"
      ],
      [
        "dependency ratio",
        "抚养比"
      ],
      [
        "retirement",
        "退休"
      ],
      [
        "pension",
        "养老金"
      ],
      [
        "caregiving",
        "照护"
      ],
      [
        "aged care",
        "养老护理"
      ],
      [
        "fiscal pressure",
        "财政压力"
      ],
      [
        "workforce",
        "劳动力"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on population ageing, Goldy introduces demography, life expectancy, and longevity as important concepts.",
        "cn": "在一场关于人口老龄化的研讨会上，Goldy介绍人口统计学、预期寿命和长寿这几个重要概念。",
        "ex": "本句设置人口老龄化的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that dependency ratio and retirement deserve closer attention.",
        "cn": "Callum认为抚养比和退休值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate pension, caregiving, and aged care using examples.",
        "cn": "随后参与者用实例评估养老金、照护和养老护理。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between fiscal pressure and workforce.",
        "cn": "Jake最后分析了财政压力与劳动力之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "人口老龄化",
            "Population Ageing"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "长寿",
            "longevity"
          ],
          [
            "抚养比",
            "dependency ratio"
          ],
          [
            "财政压力",
            "fiscal pressure"
          ],
          [
            "人口统计学",
            "demography"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "人口统计学",
        "word": "demography",
        "shuffled": [
          "h",
          "a",
          "o",
          "g",
          "p",
          "d",
          "m",
          "r",
          "e",
          "y"
        ]
      },
      {
        "cn": "长寿",
        "word": "longevity",
        "shuffled": [
          "i",
          "e",
          "o",
          "y",
          "g",
          "v",
          "t",
          "l",
          "n"
        ]
      },
      {
        "cn": "退休",
        "word": "retirement",
        "shuffled": [
          "i",
          "r",
          "e",
          "r",
          "t",
          "t",
          "n",
          "e",
          "m",
          "e"
        ]
      },
      {
        "cn": "养老护理",
        "word": "agedcare",
        "shuffled": [
          "c",
          "a",
          "r",
          "a",
          "e",
          "d",
          "e",
          "g"
        ]
      },
      {
        "cn": "劳动力",
        "word": "workforce",
        "shuffled": [
          "w",
          "r",
          "k",
          "e",
          "r",
          "c",
          "o",
          "o",
          "f"
        ]
      }
    ]
  },
  "senior-13": {
    "titleZh": "住房可负担",
    "titleEn": "Housing Affordability",
    "story": "During a seminar on housing affordability, Goldy introduces affordability, mortgage, and interest rate as important concepts. Callum argues that down payment and property market deserve closer attention. Participants then evaluate urban sprawl, social housing, and shortage using examples. Jake concludes by examining the relationship between zoning and construction. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于住房可负担的研讨会上，Goldy介绍可负担性、抵押贷款和利率这几个重要概念。Callum认为首付款和房地产市场值得进一步关注。随后参与者用实例评估城市蔓延、保障性住房和短缺。Jake最后分析了分区规划与建设之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "affordability",
        "可负担性"
      ],
      [
        "mortgage",
        "抵押贷款"
      ],
      [
        "interest rate",
        "利率"
      ],
      [
        "down payment",
        "首付款"
      ],
      [
        "property market",
        "房地产市场"
      ],
      [
        "urban sprawl",
        "城市蔓延"
      ],
      [
        "social housing",
        "保障性住房"
      ],
      [
        "shortage",
        "短缺"
      ],
      [
        "zoning",
        "分区规划"
      ],
      [
        "construction",
        "建设"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on housing affordability, Goldy introduces affordability, mortgage, and interest rate as important concepts.",
        "cn": "在一场关于住房可负担的研讨会上，Goldy介绍可负担性、抵押贷款和利率这几个重要概念。",
        "ex": "本句设置住房可负担的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that down payment and property market deserve closer attention.",
        "cn": "Callum认为首付款和房地产市场值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate urban sprawl, social housing, and shortage using examples.",
        "cn": "随后参与者用实例评估城市蔓延、保障性住房和短缺。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between zoning and construction.",
        "cn": "Jake最后分析了分区规划与建设之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "住房可负担",
            "Housing Affordability"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "利率",
            "interest rate"
          ],
          [
            "首付款",
            "down payment"
          ],
          [
            "分区规划",
            "zoning"
          ],
          [
            "可负担性",
            "affordability"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "可负担性",
        "word": "affordability",
        "shuffled": [
          "l",
          "b",
          "i",
          "f",
          "i",
          "t",
          "o",
          "a",
          "y",
          "r",
          "d",
          "f",
          "a"
        ]
      },
      {
        "cn": "利率",
        "word": "interestrate",
        "shuffled": [
          "r",
          "t",
          "e",
          "e",
          "r",
          "n",
          "i",
          "e",
          "a",
          "t",
          "s",
          "t"
        ]
      },
      {
        "cn": "房地产市场",
        "word": "propertymarket",
        "shuffled": [
          "r",
          "a",
          "m",
          "o",
          "e",
          "r",
          "r",
          "t",
          "e",
          "p",
          "t",
          "p",
          "y",
          "k"
        ]
      },
      {
        "cn": "短缺",
        "word": "shortage",
        "shuffled": [
          "g",
          "h",
          "t",
          "e",
          "o",
          "r",
          "s",
          "a"
        ]
      },
      {
        "cn": "建设",
        "word": "construction",
        "shuffled": [
          "r",
          "t",
          "c",
          "i",
          "t",
          "n",
          "o",
          "s",
          "u",
          "n",
          "o",
          "c"
        ]
      }
    ]
  },
  "senior-14": {
    "titleZh": "宏观经济",
    "titleEn": "Macroeconomics",
    "story": "During a seminar on macroeconomics, Goldy introduces inflation, unemployment, and monetary policy as important concepts. Callum argues that fiscal policy and gross domestic product deserve closer attention. Participants then evaluate recession, productivity, and consumption using examples. Jake concludes by examining the relationship between exchange rate and aggregate demand. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于宏观经济的研讨会上，Goldy介绍通货膨胀、失业和货币政策这几个重要概念。Callum认为财政政策和国内生产总值值得进一步关注。随后参与者用实例评估经济衰退、生产率和消费。Jake最后分析了汇率与总需求之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "inflation",
        "通货膨胀"
      ],
      [
        "unemployment",
        "失业"
      ],
      [
        "monetary policy",
        "货币政策"
      ],
      [
        "fiscal policy",
        "财政政策"
      ],
      [
        "gross domestic product",
        "国内生产总值"
      ],
      [
        "recession",
        "经济衰退"
      ],
      [
        "productivity",
        "生产率"
      ],
      [
        "consumption",
        "消费"
      ],
      [
        "exchange rate",
        "汇率"
      ],
      [
        "aggregate demand",
        "总需求"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on macroeconomics, Goldy introduces inflation, unemployment, and monetary policy as important concepts.",
        "cn": "在一场关于宏观经济的研讨会上，Goldy介绍通货膨胀、失业和货币政策这几个重要概念。",
        "ex": "本句设置宏观经济的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that fiscal policy and gross domestic product deserve closer attention.",
        "cn": "Callum认为财政政策和国内生产总值值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate recession, productivity, and consumption using examples.",
        "cn": "随后参与者用实例评估经济衰退、生产率和消费。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between exchange rate and aggregate demand.",
        "cn": "Jake最后分析了汇率与总需求之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "宏观经济",
            "Macroeconomics"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "货币政策",
            "monetary policy"
          ],
          [
            "财政政策",
            "fiscal policy"
          ],
          [
            "汇率",
            "exchange rate"
          ],
          [
            "通货膨胀",
            "inflation"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "通货膨胀",
        "word": "inflation",
        "shuffled": [
          "i",
          "i",
          "t",
          "n",
          "l",
          "o",
          "f",
          "n",
          "a"
        ]
      },
      {
        "cn": "货币政策",
        "word": "monetarypolicy",
        "shuffled": [
          "y",
          "n",
          "r",
          "o",
          "p",
          "t",
          "i",
          "a",
          "m",
          "e",
          "y",
          "o",
          "l",
          "c"
        ]
      },
      {
        "cn": "国内生产总值",
        "word": "grossdomesticproduct",
        "shuffled": [
          "o",
          "e",
          "r",
          "m",
          "s",
          "u",
          "s",
          "g",
          "o",
          "c",
          "t",
          "o",
          "t",
          "r",
          "p",
          "d",
          "i",
          "c",
          "d",
          "s"
        ]
      },
      {
        "cn": "消费",
        "word": "consumption",
        "shuffled": [
          "t",
          "o",
          "o",
          "p",
          "n",
          "m",
          "s",
          "i",
          "u",
          "n",
          "c"
        ]
      },
      {
        "cn": "总需求",
        "word": "aggregatedemand",
        "shuffled": [
          "a",
          "n",
          "d",
          "t",
          "e",
          "g",
          "a",
          "r",
          "a",
          "d",
          "g",
          "m",
          "e",
          "g",
          "e"
        ]
      }
    ]
  },
  "senior-15": {
    "titleZh": "国际贸易",
    "titleEn": "International Trade",
    "story": "During a seminar on international trade, Goldy introduces tariff, quota, and export as important concepts. Callum argues that import and trade balance deserve closer attention. Participants then evaluate trade agreement, globalisation, and comparative advantage using examples. Jake concludes by examining the relationship between logistics and supply chain. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于国际贸易的研讨会上，Goldy介绍关税、配额和出口这几个重要概念。Callum认为进口和贸易差额值得进一步关注。随后参与者用实例评估贸易协定、全球化和比较优势。Jake最后分析了物流与供应链之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "tariff",
        "关税"
      ],
      [
        "quota",
        "配额"
      ],
      [
        "export",
        "出口"
      ],
      [
        "import",
        "进口"
      ],
      [
        "trade balance",
        "贸易差额"
      ],
      [
        "trade agreement",
        "贸易协定"
      ],
      [
        "globalisation",
        "全球化"
      ],
      [
        "comparative advantage",
        "比较优势"
      ],
      [
        "logistics",
        "物流"
      ],
      [
        "supply chain",
        "供应链"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on international trade, Goldy introduces tariff, quota, and export as important concepts.",
        "cn": "在一场关于国际贸易的研讨会上，Goldy介绍关税、配额和出口这几个重要概念。",
        "ex": "本句设置国际贸易的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that import and trade balance deserve closer attention.",
        "cn": "Callum认为进口和贸易差额值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate trade agreement, globalisation, and comparative advantage using examples.",
        "cn": "随后参与者用实例评估贸易协定、全球化和比较优势。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between logistics and supply chain.",
        "cn": "Jake最后分析了物流与供应链之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "国际贸易",
            "International Trade"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "出口",
            "export"
          ],
          [
            "进口",
            "import"
          ],
          [
            "物流",
            "logistics"
          ],
          [
            "关税",
            "tariff"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "关税",
        "word": "tariff",
        "shuffled": [
          "f",
          "f",
          "r",
          "t",
          "i",
          "a"
        ]
      },
      {
        "cn": "出口",
        "word": "export",
        "shuffled": [
          "e",
          "p",
          "x",
          "r",
          "o",
          "t"
        ]
      },
      {
        "cn": "贸易差额",
        "word": "tradebalance",
        "shuffled": [
          "d",
          "e",
          "b",
          "r",
          "a",
          "c",
          "e",
          "n",
          "l",
          "a",
          "t",
          "a"
        ]
      },
      {
        "cn": "比较优势",
        "word": "comparativeadvantage",
        "shuffled": [
          "g",
          "t",
          "a",
          "p",
          "a",
          "e",
          "d",
          "a",
          "i",
          "m",
          "r",
          "v",
          "a",
          "a",
          "t",
          "c",
          "e",
          "n",
          "o",
          "v"
        ]
      },
      {
        "cn": "供应链",
        "word": "supplychain",
        "shuffled": [
          "h",
          "i",
          "u",
          "y",
          "c",
          "l",
          "p",
          "a",
          "n",
          "s",
          "p"
        ]
      }
    ]
  },
  "senior-16": {
    "titleZh": "商业战略",
    "titleEn": "Business Strategy",
    "story": "During a seminar on business strategy, Goldy introduces differentiation, positioning, and competitive advantage as important concepts. Callum argues that market share and segmentation deserve closer attention. Participants then evaluate scalability, benchmarking, and profitability using examples. Jake concludes by examining the relationship between synergy and execution. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于商业战略的研讨会上，Goldy介绍差异化、定位和竞争优势这几个重要概念。Callum认为市场份额和市场细分值得进一步关注。随后参与者用实例评估可扩展性、标杆分析和盈利能力。Jake最后分析了协同效应与执行之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "differentiation",
        "差异化"
      ],
      [
        "positioning",
        "定位"
      ],
      [
        "competitive advantage",
        "竞争优势"
      ],
      [
        "market share",
        "市场份额"
      ],
      [
        "segmentation",
        "市场细分"
      ],
      [
        "scalability",
        "可扩展性"
      ],
      [
        "benchmarking",
        "标杆分析"
      ],
      [
        "profitability",
        "盈利能力"
      ],
      [
        "synergy",
        "协同效应"
      ],
      [
        "execution",
        "执行"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on business strategy, Goldy introduces differentiation, positioning, and competitive advantage as important concepts.",
        "cn": "在一场关于商业战略的研讨会上，Goldy介绍差异化、定位和竞争优势这几个重要概念。",
        "ex": "本句设置商业战略的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that market share and segmentation deserve closer attention.",
        "cn": "Callum认为市场份额和市场细分值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate scalability, benchmarking, and profitability using examples.",
        "cn": "随后参与者用实例评估可扩展性、标杆分析和盈利能力。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between synergy and execution.",
        "cn": "Jake最后分析了协同效应与执行之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "商业战略",
            "Business Strategy"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "竞争优势",
            "competitive advantage"
          ],
          [
            "市场份额",
            "market share"
          ],
          [
            "协同效应",
            "synergy"
          ],
          [
            "差异化",
            "differentiation"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "差异化",
        "word": "differentiation",
        "shuffled": [
          "i",
          "f",
          "f",
          "e",
          "r",
          "e",
          "t",
          "o",
          "d",
          "i",
          "i",
          "n",
          "n",
          "t",
          "a"
        ]
      },
      {
        "cn": "竞争优势",
        "word": "competitiveadvantage",
        "shuffled": [
          "o",
          "d",
          "t",
          "g",
          "a",
          "e",
          "i",
          "a",
          "p",
          "a",
          "n",
          "t",
          "i",
          "c",
          "e",
          "v",
          "t",
          "m",
          "v",
          "e"
        ]
      },
      {
        "cn": "市场细分",
        "word": "segmentation",
        "shuffled": [
          "m",
          "t",
          "n",
          "g",
          "n",
          "i",
          "a",
          "e",
          "e",
          "t",
          "o",
          "s"
        ]
      },
      {
        "cn": "盈利能力",
        "word": "profitability",
        "shuffled": [
          "a",
          "i",
          "o",
          "f",
          "i",
          "y",
          "p",
          "t",
          "i",
          "b",
          "r",
          "l",
          "t"
        ]
      },
      {
        "cn": "执行",
        "word": "execution",
        "shuffled": [
          "e",
          "i",
          "t",
          "x",
          "e",
          "o",
          "u",
          "c",
          "n"
        ]
      }
    ]
  },
  "senior-17": {
    "titleZh": "消费者心理",
    "titleEn": "Consumer Behaviour",
    "story": "During a seminar on consumer behaviour, Goldy introduces purchase intention, brand loyalty, and perceived value as important concepts. Callum argues that decision making and customer journey deserve closer attention. Participants then evaluate personalisation, preference, and influence using examples. Jake concludes by examining the relationship between impulse and retention rate. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于消费者心理的研讨会上，Goldy介绍购买意愿、品牌忠诚度和感知价值这几个重要概念。Callum认为决策和客户旅程值得进一步关注。随后参与者用实例评估个性化、偏好和影响力。Jake最后分析了冲动与留存率之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "purchase intention",
        "购买意愿"
      ],
      [
        "brand loyalty",
        "品牌忠诚度"
      ],
      [
        "perceived value",
        "感知价值"
      ],
      [
        "decision making",
        "决策"
      ],
      [
        "customer journey",
        "客户旅程"
      ],
      [
        "personalisation",
        "个性化"
      ],
      [
        "preference",
        "偏好"
      ],
      [
        "influence",
        "影响力"
      ],
      [
        "impulse",
        "冲动"
      ],
      [
        "retention rate",
        "留存率"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on consumer behaviour, Goldy introduces purchase intention, brand loyalty, and perceived value as important concepts.",
        "cn": "在一场关于消费者心理的研讨会上，Goldy介绍购买意愿、品牌忠诚度和感知价值这几个重要概念。",
        "ex": "本句设置消费者心理的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that decision making and customer journey deserve closer attention.",
        "cn": "Callum认为决策和客户旅程值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate personalisation, preference, and influence using examples.",
        "cn": "随后参与者用实例评估个性化、偏好和影响力。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between impulse and retention rate.",
        "cn": "Jake最后分析了冲动与留存率之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "消费者心理",
            "Consumer Behaviour"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "感知价值",
            "perceived value"
          ],
          [
            "决策",
            "decision making"
          ],
          [
            "冲动",
            "impulse"
          ],
          [
            "购买意愿",
            "purchase intention"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "购买意愿",
        "word": "purchaseintention",
        "shuffled": [
          "t",
          "c",
          "e",
          "s",
          "i",
          "n",
          "p",
          "r",
          "i",
          "e",
          "a",
          "o",
          "t",
          "n",
          "n",
          "u",
          "h"
        ]
      },
      {
        "cn": "感知价值",
        "word": "perceivedvalue",
        "shuffled": [
          "e",
          "v",
          "e",
          "e",
          "u",
          "v",
          "l",
          "r",
          "e",
          "d",
          "p",
          "a",
          "c",
          "i"
        ]
      },
      {
        "cn": "客户旅程",
        "word": "customerjourney",
        "shuffled": [
          "s",
          "e",
          "u",
          "c",
          "m",
          "e",
          "n",
          "o",
          "t",
          "j",
          "y",
          "u",
          "r",
          "o",
          "r"
        ]
      },
      {
        "cn": "影响力",
        "word": "influence",
        "shuffled": [
          "i",
          "f",
          "c",
          "n",
          "e",
          "l",
          "n",
          "u",
          "e"
        ]
      },
      {
        "cn": "留存率",
        "word": "retentionrate",
        "shuffled": [
          "t",
          "e",
          "i",
          "e",
          "t",
          "t",
          "r",
          "o",
          "e",
          "n",
          "a",
          "n",
          "r"
        ]
      }
    ]
  },
  "senior-18": {
    "titleZh": "数字营销",
    "titleEn": "Digital Marketing",
    "story": "During a seminar on digital marketing, Goldy introduces conversion, impression, and click through rate as important concepts. Callum argues that engagement rate and acquisition deserve closer attention. Participants then evaluate attribution, targeting, and campaign using examples. Jake concludes by examining the relationship between optimisation and analytics. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于数字营销的研讨会上，Goldy介绍转化、展示量和点击率这几个重要概念。Callum认为互动率和获客值得进一步关注。随后参与者用实例评估归因、定向投放和营销活动。Jake最后分析了优化与数据分析之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "conversion",
        "转化"
      ],
      [
        "impression",
        "展示量"
      ],
      [
        "click through rate",
        "点击率"
      ],
      [
        "engagement rate",
        "互动率"
      ],
      [
        "acquisition",
        "获客"
      ],
      [
        "attribution",
        "归因"
      ],
      [
        "targeting",
        "定向投放"
      ],
      [
        "campaign",
        "营销活动"
      ],
      [
        "optimisation",
        "优化"
      ],
      [
        "analytics",
        "数据分析"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on digital marketing, Goldy introduces conversion, impression, and click through rate as important concepts.",
        "cn": "在一场关于数字营销的研讨会上，Goldy介绍转化、展示量和点击率这几个重要概念。",
        "ex": "本句设置数字营销的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that engagement rate and acquisition deserve closer attention.",
        "cn": "Callum认为互动率和获客值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate attribution, targeting, and campaign using examples.",
        "cn": "随后参与者用实例评估归因、定向投放和营销活动。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between optimisation and analytics.",
        "cn": "Jake最后分析了优化与数据分析之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "数字营销",
            "Digital Marketing"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "点击率",
            "click through rate"
          ],
          [
            "互动率",
            "engagement rate"
          ],
          [
            "优化",
            "optimisation"
          ],
          [
            "转化",
            "conversion"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "转化",
        "word": "conversion",
        "shuffled": [
          "v",
          "c",
          "i",
          "n",
          "s",
          "o",
          "r",
          "e",
          "o",
          "n"
        ]
      },
      {
        "cn": "点击率",
        "word": "clickthroughrate",
        "shuffled": [
          "r",
          "c",
          "r",
          "t",
          "h",
          "g",
          "o",
          "h",
          "u",
          "e",
          "i",
          "c",
          "k",
          "t",
          "a",
          "l"
        ]
      },
      {
        "cn": "获客",
        "word": "acquisition",
        "shuffled": [
          "i",
          "t",
          "n",
          "u",
          "a",
          "o",
          "s",
          "c",
          "q",
          "i",
          "i"
        ]
      },
      {
        "cn": "营销活动",
        "word": "campaign",
        "shuffled": [
          "a",
          "n",
          "c",
          "m",
          "a",
          "g",
          "i",
          "p"
        ]
      },
      {
        "cn": "数据分析",
        "word": "analytics",
        "shuffled": [
          "a",
          "c",
          "t",
          "s",
          "a",
          "l",
          "i",
          "n",
          "y"
        ]
      }
    ]
  },
  "senior-19": {
    "titleZh": "组织管理",
    "titleEn": "Organisational Management",
    "story": "During a seminar on organisational management, Goldy introduces hierarchy, organisational culture, and delegation as important concepts. Callum argues that stakeholder management and performance review deserve closer attention. Participants then evaluate conflict resolution, motivation system, and workforce planning using examples. Jake concludes by examining the relationship between strategic alignment and decision authority. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于组织管理的研讨会上，Goldy介绍层级结构、组织文化和授权这几个重要概念。Callum认为利益相关者管理和绩效评估值得进一步关注。随后参与者用实例评估冲突解决、激励机制和人力规划。Jake最后分析了战略一致性与决策权之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "hierarchy",
        "层级结构"
      ],
      [
        "organisational culture",
        "组织文化"
      ],
      [
        "delegation",
        "授权"
      ],
      [
        "stakeholder management",
        "利益相关者管理"
      ],
      [
        "performance review",
        "绩效评估"
      ],
      [
        "conflict resolution",
        "冲突解决"
      ],
      [
        "motivation system",
        "激励机制"
      ],
      [
        "workforce planning",
        "人力规划"
      ],
      [
        "strategic alignment",
        "战略一致性"
      ],
      [
        "decision authority",
        "决策权"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on organisational management, Goldy introduces hierarchy, organisational culture, and delegation as important concepts.",
        "cn": "在一场关于组织管理的研讨会上，Goldy介绍层级结构、组织文化和授权这几个重要概念。",
        "ex": "本句设置组织管理的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that stakeholder management and performance review deserve closer attention.",
        "cn": "Callum认为利益相关者管理和绩效评估值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate conflict resolution, motivation system, and workforce planning using examples.",
        "cn": "随后参与者用实例评估冲突解决、激励机制和人力规划。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between strategic alignment and decision authority.",
        "cn": "Jake最后分析了战略一致性与决策权之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "组织管理",
            "Organisational Management"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "授权",
            "delegation"
          ],
          [
            "利益相关者管理",
            "stakeholder management"
          ],
          [
            "战略一致性",
            "strategic alignment"
          ],
          [
            "层级结构",
            "hierarchy"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "层级结构",
        "word": "hierarchy",
        "shuffled": [
          "h",
          "h",
          "c",
          "r",
          "i",
          "a",
          "r",
          "e",
          "y"
        ]
      },
      {
        "cn": "授权",
        "word": "delegation",
        "shuffled": [
          "a",
          "g",
          "i",
          "d",
          "o",
          "l",
          "e",
          "t",
          "n",
          "e"
        ]
      },
      {
        "cn": "绩效评估",
        "word": "performancereview",
        "shuffled": [
          "v",
          "i",
          "e",
          "e",
          "n",
          "r",
          "p",
          "r",
          "c",
          "e",
          "f",
          "r",
          "o",
          "e",
          "a",
          "w",
          "m"
        ]
      },
      {
        "cn": "人力规划",
        "word": "workforceplanning",
        "shuffled": [
          "i",
          "r",
          "o",
          "c",
          "n",
          "w",
          "n",
          "e",
          "n",
          "p",
          "r",
          "k",
          "l",
          "f",
          "g",
          "o",
          "a"
        ]
      },
      {
        "cn": "决策权",
        "word": "decisionauthority",
        "shuffled": [
          "o",
          "s",
          "y",
          "u",
          "e",
          "i",
          "n",
          "h",
          "i",
          "a",
          "o",
          "t",
          "c",
          "i",
          "r",
          "d",
          "t"
        ]
      }
    ]
  },
  "senior-21": {
    "titleZh": "医疗运营",
    "titleEn": "Healthcare Operations",
    "story": "During a seminar on healthcare operations, Goldy introduces patient flow, appointment scheduling, and service quality as important concepts. Callum argues that waiting time and resource allocation deserve closer attention. Participants then evaluate capacity planning, clinical governance, and quality assurance using examples. Jake concludes by examining the relationship between incident reporting and continuity of care. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于医疗运营的研讨会上，Goldy介绍患者流转、预约排程和服务质量这几个重要概念。Callum认为等待时间和资源配置值得进一步关注。随后参与者用实例评估产能规划、临床治理和质量保证。Jake最后分析了事件报告与连续性照护之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "patient flow",
        "患者流转"
      ],
      [
        "appointment scheduling",
        "预约排程"
      ],
      [
        "service quality",
        "服务质量"
      ],
      [
        "waiting time",
        "等待时间"
      ],
      [
        "resource allocation",
        "资源配置"
      ],
      [
        "capacity planning",
        "产能规划"
      ],
      [
        "clinical governance",
        "临床治理"
      ],
      [
        "quality assurance",
        "质量保证"
      ],
      [
        "incident reporting",
        "事件报告"
      ],
      [
        "continuity of care",
        "连续性照护"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on healthcare operations, Goldy introduces patient flow, appointment scheduling, and service quality as important concepts.",
        "cn": "在一场关于医疗运营的研讨会上，Goldy介绍患者流转、预约排程和服务质量这几个重要概念。",
        "ex": "本句设置医疗运营的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that waiting time and resource allocation deserve closer attention.",
        "cn": "Callum认为等待时间和资源配置值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate capacity planning, clinical governance, and quality assurance using examples.",
        "cn": "随后参与者用实例评估产能规划、临床治理和质量保证。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between incident reporting and continuity of care.",
        "cn": "Jake最后分析了事件报告与连续性照护之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "医疗运营",
            "Healthcare Operations"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "服务质量",
            "service quality"
          ],
          [
            "等待时间",
            "waiting time"
          ],
          [
            "事件报告",
            "incident reporting"
          ],
          [
            "患者流转",
            "patient flow"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "患者流转",
        "word": "patientflow",
        "shuffled": [
          "n",
          "t",
          "e",
          "o",
          "i",
          "t",
          "a",
          "l",
          "p",
          "w",
          "f"
        ]
      },
      {
        "cn": "服务质量",
        "word": "servicequality",
        "shuffled": [
          "v",
          "r",
          "s",
          "c",
          "i",
          "l",
          "q",
          "e",
          "t",
          "y",
          "e",
          "u",
          "i",
          "a"
        ]
      },
      {
        "cn": "资源配置",
        "word": "resourceallocation",
        "shuffled": [
          "a",
          "l",
          "c",
          "o",
          "e",
          "a",
          "r",
          "s",
          "t",
          "o",
          "u",
          "i",
          "n",
          "l",
          "e",
          "r",
          "o",
          "c"
        ]
      },
      {
        "cn": "质量保证",
        "word": "qualityassurance",
        "shuffled": [
          "c",
          "r",
          "i",
          "n",
          "y",
          "u",
          "s",
          "a",
          "l",
          "u",
          "q",
          "e",
          "s",
          "t",
          "a",
          "a"
        ]
      },
      {
        "cn": "连续性照护",
        "word": "continuityofcare",
        "shuffled": [
          "c",
          "n",
          "t",
          "a",
          "t",
          "o",
          "o",
          "u",
          "f",
          "y",
          "i",
          "n",
          "c",
          "r",
          "e",
          "i"
        ]
      }
    ]
  },
  "senior-22": {
    "titleZh": "城市规划",
    "titleEn": "Urban Planning",
    "story": "During a seminar on urban planning, Goldy introduces density, mixed use, and walkability as important concepts. Callum argues that public space and land use deserve closer attention. Participants then evaluate transport integration, urban renewal, and amenity using examples. Jake concludes by examining the relationship between liveability and planning approval. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于城市规划的研讨会上，Goldy介绍密度、混合用途和步行便利度这几个重要概念。Callum认为公共空间和土地利用值得进一步关注。随后参与者用实例评估交通一体化、城市更新和便利设施。Jake最后分析了宜居性与规划许可之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "density",
        "密度"
      ],
      [
        "mixed use",
        "混合用途"
      ],
      [
        "walkability",
        "步行便利度"
      ],
      [
        "public space",
        "公共空间"
      ],
      [
        "land use",
        "土地利用"
      ],
      [
        "transport integration",
        "交通一体化"
      ],
      [
        "urban renewal",
        "城市更新"
      ],
      [
        "amenity",
        "便利设施"
      ],
      [
        "liveability",
        "宜居性"
      ],
      [
        "planning approval",
        "规划许可"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on urban planning, Goldy introduces density, mixed use, and walkability as important concepts.",
        "cn": "在一场关于城市规划的研讨会上，Goldy介绍密度、混合用途和步行便利度这几个重要概念。",
        "ex": "本句设置城市规划的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that public space and land use deserve closer attention.",
        "cn": "Callum认为公共空间和土地利用值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate transport integration, urban renewal, and amenity using examples.",
        "cn": "随后参与者用实例评估交通一体化、城市更新和便利设施。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between liveability and planning approval.",
        "cn": "Jake最后分析了宜居性与规划许可之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "城市规划",
            "Urban Planning"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "步行便利度",
            "walkability"
          ],
          [
            "公共空间",
            "public space"
          ],
          [
            "宜居性",
            "liveability"
          ],
          [
            "密度",
            "density"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "密度",
        "word": "density",
        "shuffled": [
          "e",
          "y",
          "d",
          "i",
          "s",
          "t",
          "n"
        ]
      },
      {
        "cn": "步行便利度",
        "word": "walkability",
        "shuffled": [
          "l",
          "l",
          "a",
          "k",
          "w",
          "b",
          "y",
          "i",
          "i",
          "a",
          "t"
        ]
      },
      {
        "cn": "土地利用",
        "word": "landuse",
        "shuffled": [
          "d",
          "a",
          "e",
          "s",
          "u",
          "n",
          "l"
        ]
      },
      {
        "cn": "便利设施",
        "word": "amenity",
        "shuffled": [
          "i",
          "e",
          "a",
          "y",
          "n",
          "t",
          "m"
        ]
      },
      {
        "cn": "规划许可",
        "word": "planningapproval",
        "shuffled": [
          "o",
          "p",
          "n",
          "p",
          "p",
          "l",
          "i",
          "g",
          "n",
          "a",
          "v",
          "a",
          "l",
          "r",
          "n",
          "a"
        ]
      }
    ]
  },
  "senior-23": {
    "titleZh": "可持续城市",
    "titleEn": "Sustainable Cities",
    "story": "During a seminar on sustainable cities, Goldy introduces green infrastructure, circular economy, and carbon neutrality as important concepts. Callum argues that resilience planning and energy efficiency deserve closer attention. Participants then evaluate public transit, emission reduction, and environmental footprint using examples. Jake concludes by examining the relationship between water reuse and sustainable design. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于可持续城市的研讨会上，Goldy介绍绿色基础设施、循环经济和碳中和这几个重要概念。Callum认为韧性规划和能源效率值得进一步关注。随后参与者用实例评估公共交通、减排和环境足迹。Jake最后分析了中水回用与可持续设计之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "green infrastructure",
        "绿色基础设施"
      ],
      [
        "circular economy",
        "循环经济"
      ],
      [
        "carbon neutrality",
        "碳中和"
      ],
      [
        "resilience planning",
        "韧性规划"
      ],
      [
        "energy efficiency",
        "能源效率"
      ],
      [
        "public transit",
        "公共交通"
      ],
      [
        "emission reduction",
        "减排"
      ],
      [
        "environmental footprint",
        "环境足迹"
      ],
      [
        "water reuse",
        "中水回用"
      ],
      [
        "sustainable design",
        "可持续设计"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on sustainable cities, Goldy introduces green infrastructure, circular economy, and carbon neutrality as important concepts.",
        "cn": "在一场关于可持续城市的研讨会上，Goldy介绍绿色基础设施、循环经济和碳中和这几个重要概念。",
        "ex": "本句设置可持续城市的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that resilience planning and energy efficiency deserve closer attention.",
        "cn": "Callum认为韧性规划和能源效率值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate public transit, emission reduction, and environmental footprint using examples.",
        "cn": "随后参与者用实例评估公共交通、减排和环境足迹。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between water reuse and sustainable design.",
        "cn": "Jake最后分析了中水回用与可持续设计之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "可持续城市",
            "Sustainable Cities"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "碳中和",
            "carbon neutrality"
          ],
          [
            "韧性规划",
            "resilience planning"
          ],
          [
            "中水回用",
            "water reuse"
          ],
          [
            "绿色基础设施",
            "green infrastructure"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "绿色基础设施",
        "word": "greeninfrastructure",
        "shuffled": [
          "t",
          "r",
          "r",
          "e",
          "t",
          "a",
          "g",
          "n",
          "e",
          "s",
          "u",
          "r",
          "u",
          "e",
          "c",
          "i",
          "n",
          "f",
          "r"
        ]
      },
      {
        "cn": "碳中和",
        "word": "carbonneutrality",
        "shuffled": [
          "t",
          "a",
          "c",
          "u",
          "n",
          "o",
          "t",
          "e",
          "r",
          "l",
          "y",
          "b",
          "r",
          "a",
          "n",
          "i"
        ]
      },
      {
        "cn": "能源效率",
        "word": "energyefficiency",
        "shuffled": [
          "r",
          "c",
          "c",
          "n",
          "i",
          "e",
          "y",
          "e",
          "f",
          "e",
          "n",
          "f",
          "y",
          "g",
          "i",
          "e"
        ]
      },
      {
        "cn": "环境足迹",
        "word": "environmentalfootprint",
        "shuffled": [
          "t",
          "t",
          "i",
          "n",
          "o",
          "p",
          "l",
          "e",
          "m",
          "o",
          "i",
          "r",
          "r",
          "v",
          "e",
          "a",
          "n",
          "o",
          "n",
          "f",
          "t",
          "n"
        ]
      },
      {
        "cn": "可持续设计",
        "word": "sustainabledesign",
        "shuffled": [
          "i",
          "g",
          "a",
          "d",
          "b",
          "n",
          "s",
          "l",
          "i",
          "e",
          "e",
          "s",
          "s",
          "n",
          "a",
          "u",
          "t"
        ]
      }
    ]
  },
  "senior-24": {
    "titleZh": "气候政策",
    "titleEn": "Climate Policy",
    "story": "During a seminar on climate policy, Goldy introduces decarbonisation, carbon pricing, and net zero as important concepts. Callum argues that climate resilience and mitigation strategy deserve closer attention. Participants then evaluate renewable transition, adaptation plan, and climate finance using examples. Jake concludes by examining the relationship between emission target and policy instrument. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于气候政策的研讨会上，Goldy介绍脱碳、碳定价和净零排放这几个重要概念。Callum认为气候韧性和减缓战略值得进一步关注。随后参与者用实例评估可再生能源转型、适应规划和气候融资。Jake最后分析了减排目标与政策工具之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "decarbonisation",
        "脱碳"
      ],
      [
        "carbon pricing",
        "碳定价"
      ],
      [
        "net zero",
        "净零排放"
      ],
      [
        "climate resilience",
        "气候韧性"
      ],
      [
        "mitigation strategy",
        "减缓战略"
      ],
      [
        "renewable transition",
        "可再生能源转型"
      ],
      [
        "adaptation plan",
        "适应规划"
      ],
      [
        "climate finance",
        "气候融资"
      ],
      [
        "emission target",
        "减排目标"
      ],
      [
        "policy instrument",
        "政策工具"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on climate policy, Goldy introduces decarbonisation, carbon pricing, and net zero as important concepts.",
        "cn": "在一场关于气候政策的研讨会上，Goldy介绍脱碳、碳定价和净零排放这几个重要概念。",
        "ex": "本句设置气候政策的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that climate resilience and mitigation strategy deserve closer attention.",
        "cn": "Callum认为气候韧性和减缓战略值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate renewable transition, adaptation plan, and climate finance using examples.",
        "cn": "随后参与者用实例评估可再生能源转型、适应规划和气候融资。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between emission target and policy instrument.",
        "cn": "Jake最后分析了减排目标与政策工具之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "气候政策",
            "Climate Policy"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "净零排放",
            "net zero"
          ],
          [
            "气候韧性",
            "climate resilience"
          ],
          [
            "减排目标",
            "emission target"
          ],
          [
            "脱碳",
            "decarbonisation"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "脱碳",
        "word": "decarbonisation",
        "shuffled": [
          "n",
          "i",
          "a",
          "o",
          "r",
          "d",
          "s",
          "b",
          "o",
          "c",
          "n",
          "e",
          "a",
          "t",
          "i"
        ]
      },
      {
        "cn": "净零排放",
        "word": "netzero",
        "shuffled": [
          "e",
          "z",
          "r",
          "e",
          "t",
          "o",
          "n"
        ]
      },
      {
        "cn": "减缓战略",
        "word": "mitigationstrategy",
        "shuffled": [
          "a",
          "s",
          "a",
          "t",
          "t",
          "t",
          "i",
          "o",
          "y",
          "t",
          "m",
          "r",
          "g",
          "i",
          "e",
          "g",
          "i",
          "n"
        ]
      },
      {
        "cn": "气候融资",
        "word": "climatefinance",
        "shuffled": [
          "i",
          "c",
          "c",
          "m",
          "l",
          "t",
          "e",
          "n",
          "n",
          "a",
          "e",
          "a",
          "f",
          "i"
        ]
      },
      {
        "cn": "政策工具",
        "word": "policyinstrument",
        "shuffled": [
          "p",
          "e",
          "n",
          "c",
          "m",
          "u",
          "i",
          "r",
          "i",
          "t",
          "y",
          "s",
          "l",
          "t",
          "n",
          "o"
        ]
      }
    ]
  },
  "senior-25": {
    "titleZh": "能源转型",
    "titleEn": "Energy Transition",
    "story": "During a seminar on energy transition, Goldy introduces electrification, grid stability, and energy storage as important concepts. Callum argues that hydrogen and renewable generation deserve closer attention. Participants then evaluate dispatchability, peak demand, and transmission using examples. Jake concludes by examining the relationship between intermittency and energy security. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于能源转型的研讨会上，Goldy介绍电气化、电网稳定性和储能这几个重要概念。Callum认为氢能和可再生能源发电值得进一步关注。随后参与者用实例评估可调度性、峰值需求和输电。Jake最后分析了间歇性与能源安全之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "electrification",
        "电气化"
      ],
      [
        "grid stability",
        "电网稳定性"
      ],
      [
        "energy storage",
        "储能"
      ],
      [
        "hydrogen",
        "氢能"
      ],
      [
        "renewable generation",
        "可再生能源发电"
      ],
      [
        "dispatchability",
        "可调度性"
      ],
      [
        "peak demand",
        "峰值需求"
      ],
      [
        "transmission",
        "输电"
      ],
      [
        "intermittency",
        "间歇性"
      ],
      [
        "energy security",
        "能源安全"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on energy transition, Goldy introduces electrification, grid stability, and energy storage as important concepts.",
        "cn": "在一场关于能源转型的研讨会上，Goldy介绍电气化、电网稳定性和储能这几个重要概念。",
        "ex": "本句设置能源转型的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that hydrogen and renewable generation deserve closer attention.",
        "cn": "Callum认为氢能和可再生能源发电值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate dispatchability, peak demand, and transmission using examples.",
        "cn": "随后参与者用实例评估可调度性、峰值需求和输电。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between intermittency and energy security.",
        "cn": "Jake最后分析了间歇性与能源安全之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "能源转型",
            "Energy Transition"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "储能",
            "energy storage"
          ],
          [
            "氢能",
            "hydrogen"
          ],
          [
            "间歇性",
            "intermittency"
          ],
          [
            "电气化",
            "electrification"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "电气化",
        "word": "electrification",
        "shuffled": [
          "t",
          "l",
          "i",
          "f",
          "i",
          "e",
          "a",
          "i",
          "c",
          "t",
          "r",
          "n",
          "o",
          "e",
          "c"
        ]
      },
      {
        "cn": "储能",
        "word": "energystorage",
        "shuffled": [
          "a",
          "y",
          "e",
          "s",
          "r",
          "g",
          "e",
          "r",
          "t",
          "o",
          "g",
          "n",
          "e"
        ]
      },
      {
        "cn": "可再生能源发电",
        "word": "renewablegeneration",
        "shuffled": [
          "r",
          "n",
          "n",
          "l",
          "e",
          "e",
          "n",
          "e",
          "t",
          "e",
          "o",
          "b",
          "e",
          "w",
          "a",
          "r",
          "a",
          "i",
          "g"
        ]
      },
      {
        "cn": "输电",
        "word": "transmission",
        "shuffled": [
          "m",
          "t",
          "s",
          "i",
          "n",
          "r",
          "s",
          "a",
          "n",
          "s",
          "o",
          "i"
        ]
      },
      {
        "cn": "能源安全",
        "word": "energysecurity",
        "shuffled": [
          "e",
          "g",
          "e",
          "y",
          "r",
          "c",
          "t",
          "s",
          "u",
          "i",
          "n",
          "r",
          "e",
          "y"
        ]
      }
    ]
  },
  "senior-26": {
    "titleZh": "生态研究",
    "titleEn": "Ecological Research",
    "story": "During a seminar on ecological research, Goldy introduces habitat, species diversity, and food web as important concepts. Callum argues that predation and restoration deserve closer attention. Participants then evaluate fragmentation, extinction, and conservation status using examples. Jake concludes by examining the relationship between invasive species and ecosystem service. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于生态研究的研讨会上，Goldy介绍栖息地、物种多样性和食物网这几个重要概念。Callum认为捕食和生态修复值得进一步关注。随后参与者用实例评估栖息地破碎化、灭绝和保护状况。Jake最后分析了入侵物种与生态系统服务之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "habitat",
        "栖息地"
      ],
      [
        "species diversity",
        "物种多样性"
      ],
      [
        "food web",
        "食物网"
      ],
      [
        "predation",
        "捕食"
      ],
      [
        "restoration",
        "生态修复"
      ],
      [
        "fragmentation",
        "栖息地破碎化"
      ],
      [
        "extinction",
        "灭绝"
      ],
      [
        "conservation status",
        "保护状况"
      ],
      [
        "invasive species",
        "入侵物种"
      ],
      [
        "ecosystem service",
        "生态系统服务"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on ecological research, Goldy introduces habitat, species diversity, and food web as important concepts.",
        "cn": "在一场关于生态研究的研讨会上，Goldy介绍栖息地、物种多样性和食物网这几个重要概念。",
        "ex": "本句设置生态研究的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that predation and restoration deserve closer attention.",
        "cn": "Callum认为捕食和生态修复值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate fragmentation, extinction, and conservation status using examples.",
        "cn": "随后参与者用实例评估栖息地破碎化、灭绝和保护状况。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between invasive species and ecosystem service.",
        "cn": "Jake最后分析了入侵物种与生态系统服务之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "生态研究",
            "Ecological Research"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "食物网",
            "food web"
          ],
          [
            "捕食",
            "predation"
          ],
          [
            "入侵物种",
            "invasive species"
          ],
          [
            "栖息地",
            "habitat"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "栖息地",
        "word": "habitat",
        "shuffled": [
          "h",
          "a",
          "b",
          "a",
          "t",
          "t",
          "i"
        ]
      },
      {
        "cn": "食物网",
        "word": "foodweb",
        "shuffled": [
          "f",
          "w",
          "o",
          "e",
          "o",
          "b",
          "d"
        ]
      },
      {
        "cn": "生态修复",
        "word": "restoration",
        "shuffled": [
          "a",
          "i",
          "t",
          "o",
          "o",
          "s",
          "n",
          "r",
          "t",
          "e",
          "r"
        ]
      },
      {
        "cn": "保护状况",
        "word": "conservationstatus",
        "shuffled": [
          "n",
          "e",
          "v",
          "s",
          "r",
          "t",
          "s",
          "a",
          "u",
          "a",
          "t",
          "o",
          "s",
          "i",
          "t",
          "n",
          "c",
          "o"
        ]
      },
      {
        "cn": "生态系统服务",
        "word": "ecosystemservice",
        "shuffled": [
          "c",
          "t",
          "e",
          "e",
          "e",
          "v",
          "s",
          "s",
          "o",
          "r",
          "y",
          "m",
          "c",
          "s",
          "e",
          "i"
        ]
      }
    ]
  },
  "senior-27": {
    "titleZh": "海洋科学",
    "titleEn": "Marine Science",
    "story": "During a seminar on marine science, Goldy introduces marine biodiversity, coral reef, and ocean acidification as important concepts. Callum argues that overfishing and coastal erosion deserve closer attention. Participants then evaluate marine reserve, plankton, and currents using examples. Jake concludes by examining the relationship between salinity and marine ecosystem. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于海洋科学的研讨会上，Goldy介绍海洋生物多样性、珊瑚礁和海洋酸化这几个重要概念。Callum认为过度捕捞和海岸侵蚀值得进一步关注。随后参与者用实例评估海洋保护区、浮游生物和洋流。Jake最后分析了盐度与海洋生态系统之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "marine biodiversity",
        "海洋生物多样性"
      ],
      [
        "coral reef",
        "珊瑚礁"
      ],
      [
        "ocean acidification",
        "海洋酸化"
      ],
      [
        "overfishing",
        "过度捕捞"
      ],
      [
        "coastal erosion",
        "海岸侵蚀"
      ],
      [
        "marine reserve",
        "海洋保护区"
      ],
      [
        "plankton",
        "浮游生物"
      ],
      [
        "currents",
        "洋流"
      ],
      [
        "salinity",
        "盐度"
      ],
      [
        "marine ecosystem",
        "海洋生态系统"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on marine science, Goldy introduces marine biodiversity, coral reef, and ocean acidification as important concepts.",
        "cn": "在一场关于海洋科学的研讨会上，Goldy介绍海洋生物多样性、珊瑚礁和海洋酸化这几个重要概念。",
        "ex": "本句设置海洋科学的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that overfishing and coastal erosion deserve closer attention.",
        "cn": "Callum认为过度捕捞和海岸侵蚀值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate marine reserve, plankton, and currents using examples.",
        "cn": "随后参与者用实例评估海洋保护区、浮游生物和洋流。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between salinity and marine ecosystem.",
        "cn": "Jake最后分析了盐度与海洋生态系统之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "海洋科学",
            "Marine Science"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "海洋酸化",
            "ocean acidification"
          ],
          [
            "过度捕捞",
            "overfishing"
          ],
          [
            "盐度",
            "salinity"
          ],
          [
            "海洋生物多样性",
            "marine biodiversity"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "海洋生物多样性",
        "word": "marinebiodiversity",
        "shuffled": [
          "t",
          "i",
          "e",
          "d",
          "i",
          "y",
          "s",
          "e",
          "m",
          "a",
          "b",
          "r",
          "i",
          "o",
          "v",
          "i",
          "r",
          "n"
        ]
      },
      {
        "cn": "海洋酸化",
        "word": "oceanacidification",
        "shuffled": [
          "i",
          "c",
          "a",
          "n",
          "t",
          "i",
          "o",
          "a",
          "a",
          "n",
          "o",
          "d",
          "i",
          "c",
          "f",
          "i",
          "e",
          "c"
        ]
      },
      {
        "cn": "海岸侵蚀",
        "word": "coastalerosion",
        "shuffled": [
          "o",
          "o",
          "l",
          "o",
          "t",
          "r",
          "c",
          "e",
          "i",
          "a",
          "s",
          "a",
          "n",
          "s"
        ]
      },
      {
        "cn": "洋流",
        "word": "currents",
        "shuffled": [
          "u",
          "r",
          "c",
          "s",
          "t",
          "n",
          "r",
          "e"
        ]
      },
      {
        "cn": "海洋生态系统",
        "word": "marineecosystem",
        "shuffled": [
          "i",
          "e",
          "c",
          "m",
          "e",
          "y",
          "s",
          "r",
          "a",
          "m",
          "o",
          "n",
          "e",
          "s",
          "t"
        ]
      }
    ]
  },
  "senior-28": {
    "titleZh": "公共交通改革",
    "titleEn": "Public Transport Reform",
    "story": "During a seminar on public transport reform, Goldy introduces ridership, service frequency, and modal shift as important concepts. Callum argues that congestion pricing and commuter demand deserve closer attention. Participants then evaluate transit oriented development, last mile, and accessibility standard using examples. Jake concludes by examining the relationship between subsidy and ticket integration. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于公共交通改革的研讨会上，Goldy介绍客流量、班次频率和交通方式转移这几个重要概念。Callum认为拥堵收费和通勤需求值得进一步关注。随后参与者用实例评估公交导向开发、最后一公里和无障碍标准。Jake最后分析了补贴与票务一体化之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "ridership",
        "客流量"
      ],
      [
        "service frequency",
        "班次频率"
      ],
      [
        "modal shift",
        "交通方式转移"
      ],
      [
        "congestion pricing",
        "拥堵收费"
      ],
      [
        "commuter demand",
        "通勤需求"
      ],
      [
        "transit oriented development",
        "公交导向开发"
      ],
      [
        "last mile",
        "最后一公里"
      ],
      [
        "accessibility standard",
        "无障碍标准"
      ],
      [
        "subsidy",
        "补贴"
      ],
      [
        "ticket integration",
        "票务一体化"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on public transport reform, Goldy introduces ridership, service frequency, and modal shift as important concepts.",
        "cn": "在一场关于公共交通改革的研讨会上，Goldy介绍客流量、班次频率和交通方式转移这几个重要概念。",
        "ex": "本句设置公共交通改革的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that congestion pricing and commuter demand deserve closer attention.",
        "cn": "Callum认为拥堵收费和通勤需求值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate transit oriented development, last mile, and accessibility standard using examples.",
        "cn": "随后参与者用实例评估公交导向开发、最后一公里和无障碍标准。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between subsidy and ticket integration.",
        "cn": "Jake最后分析了补贴与票务一体化之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "公共交通改革",
            "Public Transport Reform"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "交通方式转移",
            "modal shift"
          ],
          [
            "拥堵收费",
            "congestion pricing"
          ],
          [
            "补贴",
            "subsidy"
          ],
          [
            "客流量",
            "ridership"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "客流量",
        "word": "ridership",
        "shuffled": [
          "h",
          "r",
          "d",
          "e",
          "i",
          "r",
          "p",
          "s",
          "i"
        ]
      },
      {
        "cn": "交通方式转移",
        "word": "modalshift",
        "shuffled": [
          "t",
          "l",
          "a",
          "s",
          "f",
          "m",
          "i",
          "o",
          "h",
          "d"
        ]
      },
      {
        "cn": "通勤需求",
        "word": "commuterdemand",
        "shuffled": [
          "d",
          "m",
          "m",
          "e",
          "m",
          "u",
          "a",
          "c",
          "r",
          "t",
          "o",
          "n",
          "d",
          "e"
        ]
      },
      {
        "cn": "无障碍标准",
        "word": "accessibilitystandard",
        "shuffled": [
          "r",
          "i",
          "s",
          "n",
          "c",
          "y",
          "s",
          "s",
          "a",
          "i",
          "e",
          "a",
          "t",
          "t",
          "a",
          "c",
          "b",
          "d",
          "l",
          "d",
          "i"
        ]
      },
      {
        "cn": "票务一体化",
        "word": "ticketintegration",
        "shuffled": [
          "e",
          "t",
          "t",
          "c",
          "n",
          "k",
          "o",
          "t",
          "i",
          "g",
          "e",
          "r",
          "n",
          "t",
          "i",
          "i",
          "a"
        ]
      }
    ]
  },
  "senior-29": {
    "titleZh": "教育技术",
    "titleEn": "Educational Technology",
    "story": "During a seminar on educational technology, Goldy introduces adaptive learning, learning analytics, and formative assessment as important concepts. Callum argues that summative assessment and student engagement deserve closer attention. Participants then evaluate content delivery, accessibility tool, and feedback loop using examples. Jake concludes by examining the relationship between learning outcome and personalised pathway. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于教育技术的研讨会上，Goldy介绍自适应学习、学习分析和形成性评价这几个重要概念。Callum认为总结性评价和学生参与度值得进一步关注。随后参与者用实例评估内容交付、无障碍工具和反馈闭环。Jake最后分析了学习成果与个性化路径之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "adaptive learning",
        "自适应学习"
      ],
      [
        "learning analytics",
        "学习分析"
      ],
      [
        "formative assessment",
        "形成性评价"
      ],
      [
        "summative assessment",
        "总结性评价"
      ],
      [
        "student engagement",
        "学生参与度"
      ],
      [
        "content delivery",
        "内容交付"
      ],
      [
        "accessibility tool",
        "无障碍工具"
      ],
      [
        "feedback loop",
        "反馈闭环"
      ],
      [
        "learning outcome",
        "学习成果"
      ],
      [
        "personalised pathway",
        "个性化路径"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on educational technology, Goldy introduces adaptive learning, learning analytics, and formative assessment as important concepts.",
        "cn": "在一场关于教育技术的研讨会上，Goldy介绍自适应学习、学习分析和形成性评价这几个重要概念。",
        "ex": "本句设置教育技术的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that summative assessment and student engagement deserve closer attention.",
        "cn": "Callum认为总结性评价和学生参与度值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate content delivery, accessibility tool, and feedback loop using examples.",
        "cn": "随后参与者用实例评估内容交付、无障碍工具和反馈闭环。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between learning outcome and personalised pathway.",
        "cn": "Jake最后分析了学习成果与个性化路径之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "教育技术",
            "Educational Technology"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "形成性评价",
            "formative assessment"
          ],
          [
            "总结性评价",
            "summative assessment"
          ],
          [
            "学习成果",
            "learning outcome"
          ],
          [
            "自适应学习",
            "adaptive learning"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "自适应学习",
        "word": "adaptivelearning",
        "shuffled": [
          "n",
          "a",
          "t",
          "a",
          "r",
          "d",
          "e",
          "p",
          "n",
          "i",
          "l",
          "e",
          "g",
          "i",
          "v",
          "a"
        ]
      },
      {
        "cn": "形成性评价",
        "word": "formativeassessment",
        "shuffled": [
          "t",
          "s",
          "t",
          "m",
          "s",
          "e",
          "e",
          "a",
          "n",
          "v",
          "i",
          "m",
          "e",
          "f",
          "o",
          "r",
          "s",
          "a",
          "s"
        ]
      },
      {
        "cn": "学生参与度",
        "word": "studentengagement",
        "shuffled": [
          "u",
          "e",
          "s",
          "t",
          "n",
          "g",
          "e",
          "e",
          "d",
          "n",
          "t",
          "a",
          "m",
          "n",
          "t",
          "e",
          "g"
        ]
      },
      {
        "cn": "反馈闭环",
        "word": "feedbackloop",
        "shuffled": [
          "c",
          "o",
          "o",
          "p",
          "d",
          "f",
          "e",
          "a",
          "l",
          "k",
          "b",
          "e"
        ]
      },
      {
        "cn": "个性化路径",
        "word": "personalisedpathway",
        "shuffled": [
          "s",
          "p",
          "s",
          "t",
          "d",
          "a",
          "i",
          "h",
          "o",
          "y",
          "e",
          "w",
          "l",
          "a",
          "r",
          "a",
          "n",
          "p",
          "e"
        ]
      }
    ]
  },
  "senior-30": {
    "titleZh": "全球化与文化",
    "titleEn": "Globalisation and Culture",
    "story": "During a seminar on globalisation and culture, Goldy introduces intercultural, assimilation, and pluralism as important concepts. Callum argues that cultural heritage and global identity deserve closer attention. Participants then evaluate transnational, migration pattern, and social cohesion using examples. Jake concludes by examining the relationship between representation and participation. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于全球化与文化的研讨会上，Goldy介绍跨文化的、同化和多元主义这几个重要概念。Callum认为文化遗产和全球身份值得进一步关注。随后参与者用实例评估跨国的、移民模式和社会凝聚力。Jake最后分析了代表性与参与之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "intercultural",
        "跨文化的"
      ],
      [
        "assimilation",
        "同化"
      ],
      [
        "pluralism",
        "多元主义"
      ],
      [
        "cultural heritage",
        "文化遗产"
      ],
      [
        "global identity",
        "全球身份"
      ],
      [
        "transnational",
        "跨国的"
      ],
      [
        "migration pattern",
        "移民模式"
      ],
      [
        "social cohesion",
        "社会凝聚力"
      ],
      [
        "representation",
        "代表性"
      ],
      [
        "participation",
        "参与"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on globalisation and culture, Goldy introduces intercultural, assimilation, and pluralism as important concepts.",
        "cn": "在一场关于全球化与文化的研讨会上，Goldy介绍跨文化的、同化和多元主义这几个重要概念。",
        "ex": "本句设置全球化与文化的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that cultural heritage and global identity deserve closer attention.",
        "cn": "Callum认为文化遗产和全球身份值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate transnational, migration pattern, and social cohesion using examples.",
        "cn": "随后参与者用实例评估跨国的、移民模式和社会凝聚力。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between representation and participation.",
        "cn": "Jake最后分析了代表性与参与之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "全球化与文化",
            "Globalisation and Culture"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "多元主义",
            "pluralism"
          ],
          [
            "文化遗产",
            "cultural heritage"
          ],
          [
            "代表性",
            "representation"
          ],
          [
            "跨文化的",
            "intercultural"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "跨文化的",
        "word": "intercultural",
        "shuffled": [
          "e",
          "c",
          "i",
          "t",
          "u",
          "a",
          "l",
          "u",
          "r",
          "n",
          "l",
          "r",
          "t"
        ]
      },
      {
        "cn": "多元主义",
        "word": "pluralism",
        "shuffled": [
          "l",
          "s",
          "i",
          "m",
          "p",
          "l",
          "r",
          "a",
          "u"
        ]
      },
      {
        "cn": "全球身份",
        "word": "globalidentity",
        "shuffled": [
          "a",
          "l",
          "b",
          "i",
          "y",
          "o",
          "e",
          "n",
          "t",
          "i",
          "g",
          "l",
          "d",
          "t"
        ]
      },
      {
        "cn": "社会凝聚力",
        "word": "socialcohesion",
        "shuffled": [
          "i",
          "s",
          "n",
          "o",
          "o",
          "e",
          "o",
          "h",
          "l",
          "s",
          "i",
          "a",
          "c",
          "c"
        ]
      },
      {
        "cn": "参与",
        "word": "participation",
        "shuffled": [
          "c",
          "a",
          "o",
          "r",
          "i",
          "i",
          "t",
          "n",
          "t",
          "p",
          "p",
          "i",
          "a"
        ]
      }
    ]
  },
  "senior-31": {
    "titleZh": "媒体素养",
    "titleEn": "Media Literacy",
    "story": "During a seminar on media literacy, Goldy introduces disinformation, misinformation, and verification process as important concepts. Callum argues that source credibility and editorial bias deserve closer attention. Participants then evaluate critical thinking, algorithmic feed, and public opinion using examples. Jake concludes by examining the relationship between media regulation and information literacy. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于媒体素养的研讨会上，Goldy介绍虚假信息、错误信息和核查程序这几个重要概念。Callum认为来源可信度和编辑偏见值得进一步关注。随后参与者用实例评估批判性思维、算法信息流和公众舆论。Jake最后分析了媒体监管与信息素养之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "disinformation",
        "虚假信息"
      ],
      [
        "misinformation",
        "错误信息"
      ],
      [
        "verification process",
        "核查程序"
      ],
      [
        "source credibility",
        "来源可信度"
      ],
      [
        "editorial bias",
        "编辑偏见"
      ],
      [
        "critical thinking",
        "批判性思维"
      ],
      [
        "algorithmic feed",
        "算法信息流"
      ],
      [
        "public opinion",
        "公众舆论"
      ],
      [
        "media regulation",
        "媒体监管"
      ],
      [
        "information literacy",
        "信息素养"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on media literacy, Goldy introduces disinformation, misinformation, and verification process as important concepts.",
        "cn": "在一场关于媒体素养的研讨会上，Goldy介绍虚假信息、错误信息和核查程序这几个重要概念。",
        "ex": "本句设置媒体素养的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that source credibility and editorial bias deserve closer attention.",
        "cn": "Callum认为来源可信度和编辑偏见值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate critical thinking, algorithmic feed, and public opinion using examples.",
        "cn": "随后参与者用实例评估批判性思维、算法信息流和公众舆论。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between media regulation and information literacy.",
        "cn": "Jake最后分析了媒体监管与信息素养之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "媒体素养",
            "Media Literacy"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "核查程序",
            "verification process"
          ],
          [
            "来源可信度",
            "source credibility"
          ],
          [
            "媒体监管",
            "media regulation"
          ],
          [
            "虚假信息",
            "disinformation"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "虚假信息",
        "word": "disinformation",
        "shuffled": [
          "t",
          "i",
          "r",
          "s",
          "o",
          "n",
          "a",
          "n",
          "d",
          "i",
          "o",
          "m",
          "i",
          "f"
        ]
      },
      {
        "cn": "核查程序",
        "word": "verificationprocess",
        "shuffled": [
          "f",
          "i",
          "c",
          "c",
          "a",
          "p",
          "r",
          "e",
          "i",
          "e",
          "i",
          "r",
          "o",
          "t",
          "n",
          "o",
          "v",
          "s",
          "s"
        ]
      },
      {
        "cn": "编辑偏见",
        "word": "editorialbias",
        "shuffled": [
          "a",
          "t",
          "d",
          "i",
          "e",
          "i",
          "l",
          "r",
          "o",
          "b",
          "s",
          "a",
          "i"
        ]
      },
      {
        "cn": "公众舆论",
        "word": "publicopinion",
        "shuffled": [
          "o",
          "o",
          "n",
          "n",
          "i",
          "l",
          "c",
          "p",
          "i",
          "b",
          "u",
          "i",
          "p"
        ]
      },
      {
        "cn": "信息素养",
        "word": "informationliteracy",
        "shuffled": [
          "i",
          "f",
          "r",
          "i",
          "c",
          "o",
          "t",
          "n",
          "r",
          "y",
          "t",
          "a",
          "o",
          "m",
          "a",
          "i",
          "e",
          "n",
          "l"
        ]
      }
    ]
  },
  "senior-32": {
    "titleZh": "科技伦理",
    "titleEn": "Technology Ethics",
    "story": "During a seminar on technology ethics, Goldy introduces algorithmic bias, fairness, and explainability as important concepts. Callum argues that automated decision and human oversight deserve closer attention. Participants then evaluate ethical framework, accountability mechanism, and data governance using examples. Jake concludes by examining the relationship between digital rights and transparency report. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于科技伦理的研讨会上，Goldy介绍算法偏见、公平性和可解释性这几个重要概念。Callum认为自动化决策和人工监督值得进一步关注。随后参与者用实例评估伦理框架、问责机制和数据治理。Jake最后分析了数字权利与透明度报告之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "algorithmic bias",
        "算法偏见"
      ],
      [
        "fairness",
        "公平性"
      ],
      [
        "explainability",
        "可解释性"
      ],
      [
        "automated decision",
        "自动化决策"
      ],
      [
        "human oversight",
        "人工监督"
      ],
      [
        "ethical framework",
        "伦理框架"
      ],
      [
        "accountability mechanism",
        "问责机制"
      ],
      [
        "data governance",
        "数据治理"
      ],
      [
        "digital rights",
        "数字权利"
      ],
      [
        "transparency report",
        "透明度报告"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on technology ethics, Goldy introduces algorithmic bias, fairness, and explainability as important concepts.",
        "cn": "在一场关于科技伦理的研讨会上，Goldy介绍算法偏见、公平性和可解释性这几个重要概念。",
        "ex": "本句设置科技伦理的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that automated decision and human oversight deserve closer attention.",
        "cn": "Callum认为自动化决策和人工监督值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate ethical framework, accountability mechanism, and data governance using examples.",
        "cn": "随后参与者用实例评估伦理框架、问责机制和数据治理。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between digital rights and transparency report.",
        "cn": "Jake最后分析了数字权利与透明度报告之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "科技伦理",
            "Technology Ethics"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "可解释性",
            "explainability"
          ],
          [
            "自动化决策",
            "automated decision"
          ],
          [
            "数字权利",
            "digital rights"
          ],
          [
            "算法偏见",
            "algorithmic bias"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "算法偏见",
        "word": "algorithmicbias",
        "shuffled": [
          "l",
          "i",
          "c",
          "h",
          "i",
          "a",
          "t",
          "g",
          "b",
          "o",
          "r",
          "i",
          "s",
          "a",
          "m"
        ]
      },
      {
        "cn": "可解释性",
        "word": "explainability",
        "shuffled": [
          "l",
          "i",
          "p",
          "t",
          "a",
          "a",
          "i",
          "x",
          "l",
          "i",
          "b",
          "y",
          "e",
          "n"
        ]
      },
      {
        "cn": "人工监督",
        "word": "humanoversight",
        "shuffled": [
          "s",
          "n",
          "h",
          "o",
          "e",
          "m",
          "r",
          "v",
          "h",
          "i",
          "u",
          "g",
          "t",
          "a"
        ]
      },
      {
        "cn": "数据治理",
        "word": "datagovernance",
        "shuffled": [
          "o",
          "n",
          "r",
          "a",
          "a",
          "e",
          "t",
          "c",
          "d",
          "n",
          "a",
          "e",
          "g",
          "v"
        ]
      },
      {
        "cn": "透明度报告",
        "word": "transparencyreport",
        "shuffled": [
          "e",
          "r",
          "r",
          "p",
          "y",
          "n",
          "e",
          "t",
          "o",
          "r",
          "a",
          "a",
          "s",
          "c",
          "n",
          "r",
          "p",
          "t"
        ]
      }
    ]
  },
  "senior-33": {
    "titleZh": "劳动市场",
    "titleEn": "Labour Markets",
    "story": "During a seminar on labour markets, Goldy introduces underemployment, job vacancy, and labour shortage as important concepts. Callum argues that skills mismatch and wage growth deserve closer attention. Participants then evaluate collective bargaining, workplace flexibility, and remote work using examples. Jake concludes by examining the relationship between productivity growth and workforce participation. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于劳动市场的研讨会上，Goldy介绍就业不足、职位空缺和劳动力短缺这几个重要概念。Callum认为技能错配和工资增长值得进一步关注。随后参与者用实例评估集体谈判、工作场所灵活性和远程工作。Jake最后分析了生产率增长与劳动力参与率之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "underemployment",
        "就业不足"
      ],
      [
        "job vacancy",
        "职位空缺"
      ],
      [
        "labour shortage",
        "劳动力短缺"
      ],
      [
        "skills mismatch",
        "技能错配"
      ],
      [
        "wage growth",
        "工资增长"
      ],
      [
        "collective bargaining",
        "集体谈判"
      ],
      [
        "workplace flexibility",
        "工作场所灵活性"
      ],
      [
        "remote work",
        "远程工作"
      ],
      [
        "productivity growth",
        "生产率增长"
      ],
      [
        "workforce participation",
        "劳动力参与率"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on labour markets, Goldy introduces underemployment, job vacancy, and labour shortage as important concepts.",
        "cn": "在一场关于劳动市场的研讨会上，Goldy介绍就业不足、职位空缺和劳动力短缺这几个重要概念。",
        "ex": "本句设置劳动市场的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that skills mismatch and wage growth deserve closer attention.",
        "cn": "Callum认为技能错配和工资增长值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate collective bargaining, workplace flexibility, and remote work using examples.",
        "cn": "随后参与者用实例评估集体谈判、工作场所灵活性和远程工作。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between productivity growth and workforce participation.",
        "cn": "Jake最后分析了生产率增长与劳动力参与率之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "劳动市场",
            "Labour Markets"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "劳动力短缺",
            "labour shortage"
          ],
          [
            "技能错配",
            "skills mismatch"
          ],
          [
            "生产率增长",
            "productivity growth"
          ],
          [
            "就业不足",
            "underemployment"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "就业不足",
        "word": "underemployment",
        "shuffled": [
          "m",
          "n",
          "e",
          "n",
          "r",
          "d",
          "u",
          "e",
          "m",
          "t",
          "l",
          "p",
          "y",
          "o",
          "e"
        ]
      },
      {
        "cn": "劳动力短缺",
        "word": "labourshortage",
        "shuffled": [
          "g",
          "s",
          "u",
          "e",
          "o",
          "a",
          "h",
          "l",
          "a",
          "r",
          "o",
          "b",
          "r",
          "t"
        ]
      },
      {
        "cn": "工资增长",
        "word": "wagegrowth",
        "shuffled": [
          "g",
          "e",
          "w",
          "r",
          "g",
          "w",
          "a",
          "t",
          "o",
          "h"
        ]
      },
      {
        "cn": "远程工作",
        "word": "remotework",
        "shuffled": [
          "r",
          "w",
          "e",
          "t",
          "e",
          "r",
          "m",
          "k",
          "o",
          "o"
        ]
      },
      {
        "cn": "劳动力参与率",
        "word": "workforceparticipation",
        "shuffled": [
          "f",
          "t",
          "k",
          "o",
          "n",
          "r",
          "a",
          "i",
          "t",
          "c",
          "w",
          "r",
          "p",
          "i",
          "a",
          "r",
          "p",
          "e",
          "o",
          "c",
          "i",
          "o"
        ]
      }
    ]
  },
  "senior-34": {
    "titleZh": "移民与社会",
    "titleEn": "Migration and Society",
    "story": "During a seminar on migration and society, Goldy introduces skilled migration, settlement, and community integration as important concepts. Callum argues that visa policy and language proficiency deserve closer attention. Participants then evaluate employment outcome, cultural adaptation, and social network using examples. Jake concludes by examining the relationship between regional development and demographic change. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于移民与社会的研讨会上，Goldy介绍技术移民、安置和社区融入这几个重要概念。Callum认为签证政策和语言熟练度值得进一步关注。随后参与者用实例评估就业结果、文化适应和社会网络。Jake最后分析了区域发展与人口变化之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "skilled migration",
        "技术移民"
      ],
      [
        "settlement",
        "安置"
      ],
      [
        "community integration",
        "社区融入"
      ],
      [
        "visa policy",
        "签证政策"
      ],
      [
        "language proficiency",
        "语言熟练度"
      ],
      [
        "employment outcome",
        "就业结果"
      ],
      [
        "cultural adaptation",
        "文化适应"
      ],
      [
        "social network",
        "社会网络"
      ],
      [
        "regional development",
        "区域发展"
      ],
      [
        "demographic change",
        "人口变化"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on migration and society, Goldy introduces skilled migration, settlement, and community integration as important concepts.",
        "cn": "在一场关于移民与社会的研讨会上，Goldy介绍技术移民、安置和社区融入这几个重要概念。",
        "ex": "本句设置移民与社会的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that visa policy and language proficiency deserve closer attention.",
        "cn": "Callum认为签证政策和语言熟练度值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate employment outcome, cultural adaptation, and social network using examples.",
        "cn": "随后参与者用实例评估就业结果、文化适应和社会网络。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between regional development and demographic change.",
        "cn": "Jake最后分析了区域发展与人口变化之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "移民与社会",
            "Migration and Society"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "社区融入",
            "community integration"
          ],
          [
            "签证政策",
            "visa policy"
          ],
          [
            "区域发展",
            "regional development"
          ],
          [
            "技术移民",
            "skilled migration"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "技术移民",
        "word": "skilledmigration",
        "shuffled": [
          "d",
          "i",
          "g",
          "o",
          "n",
          "k",
          "l",
          "i",
          "a",
          "r",
          "s",
          "e",
          "l",
          "m",
          "i",
          "t"
        ]
      },
      {
        "cn": "社区融入",
        "word": "communityintegration",
        "shuffled": [
          "u",
          "i",
          "g",
          "t",
          "e",
          "c",
          "n",
          "t",
          "m",
          "n",
          "i",
          "r",
          "n",
          "o",
          "t",
          "y",
          "o",
          "i",
          "a",
          "m"
        ]
      },
      {
        "cn": "语言熟练度",
        "word": "languageproficiency",
        "shuffled": [
          "i",
          "e",
          "c",
          "c",
          "l",
          "p",
          "g",
          "u",
          "n",
          "r",
          "n",
          "i",
          "g",
          "e",
          "a",
          "a",
          "f",
          "y",
          "o"
        ]
      },
      {
        "cn": "社会网络",
        "word": "socialnetwork",
        "shuffled": [
          "o",
          "i",
          "l",
          "w",
          "o",
          "a",
          "t",
          "n",
          "k",
          "c",
          "s",
          "e",
          "r"
        ]
      },
      {
        "cn": "人口变化",
        "word": "demographicchange",
        "shuffled": [
          "e",
          "r",
          "d",
          "p",
          "o",
          "a",
          "h",
          "h",
          "g",
          "e",
          "a",
          "g",
          "c",
          "i",
          "m",
          "n",
          "c"
        ]
      }
    ]
  },
  "senior-35": {
    "titleZh": "法律与规则",
    "titleEn": "Law and Regulation",
    "story": "During a seminar on law and regulation, Goldy introduces statute, precedent, and legal obligation as important concepts. Callum argues that enforcement and contractual deserve closer attention. Participants then evaluate dispute resolution, due process, and rights using examples. Jake concludes by examining the relationship between liability and remedy. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于法律与规则的研讨会上，Goldy介绍成文法、判例和法律义务这几个重要概念。Callum认为执法和合同的值得进一步关注。随后参与者用实例评估争议解决、正当程序和权利。Jake最后分析了责任与救济之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "statute",
        "成文法"
      ],
      [
        "precedent",
        "判例"
      ],
      [
        "legal obligation",
        "法律义务"
      ],
      [
        "enforcement",
        "执法"
      ],
      [
        "contractual",
        "合同的"
      ],
      [
        "dispute resolution",
        "争议解决"
      ],
      [
        "due process",
        "正当程序"
      ],
      [
        "rights",
        "权利"
      ],
      [
        "liability",
        "责任"
      ],
      [
        "remedy",
        "救济"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on law and regulation, Goldy introduces statute, precedent, and legal obligation as important concepts.",
        "cn": "在一场关于法律与规则的研讨会上，Goldy介绍成文法、判例和法律义务这几个重要概念。",
        "ex": "本句设置法律与规则的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that enforcement and contractual deserve closer attention.",
        "cn": "Callum认为执法和合同的值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate dispute resolution, due process, and rights using examples.",
        "cn": "随后参与者用实例评估争议解决、正当程序和权利。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between liability and remedy.",
        "cn": "Jake最后分析了责任与救济之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "法律与规则",
            "Law and Regulation"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "法律义务",
            "legal obligation"
          ],
          [
            "执法",
            "enforcement"
          ],
          [
            "责任",
            "liability"
          ],
          [
            "成文法",
            "statute"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "成文法",
        "word": "statute",
        "shuffled": [
          "t",
          "u",
          "t",
          "s",
          "e",
          "t",
          "a"
        ]
      },
      {
        "cn": "法律义务",
        "word": "legalobligation",
        "shuffled": [
          "l",
          "e",
          "o",
          "l",
          "l",
          "a",
          "g",
          "i",
          "o",
          "b",
          "n",
          "g",
          "t",
          "i",
          "a"
        ]
      },
      {
        "cn": "合同的",
        "word": "contractual",
        "shuffled": [
          "a",
          "c",
          "o",
          "l",
          "t",
          "r",
          "c",
          "a",
          "t",
          "n",
          "u"
        ]
      },
      {
        "cn": "权利",
        "word": "rights",
        "shuffled": [
          "i",
          "h",
          "t",
          "g",
          "r",
          "s"
        ]
      },
      {
        "cn": "救济",
        "word": "remedy",
        "shuffled": [
          "r",
          "d",
          "m",
          "e",
          "e",
          "y"
        ]
      }
    ]
  },
  "senior-36": {
    "titleZh": "学术诚信",
    "titleEn": "Academic Integrity",
    "story": "During a seminar on academic integrity, Goldy introduces plagiarism, paraphrasing, and attribution as important concepts. Callum argues that intellectual property and originality deserve closer attention. Participants then evaluate research ethics, peer review, and reproducibility using examples. Jake concludes by examining the relationship between source evaluation and academic integrity. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于学术诚信的研讨会上，Goldy介绍剽窃、改写和注明来源这几个重要概念。Callum认为知识产权和原创性值得进一步关注。随后参与者用实例评估研究伦理、同行评审和可重复性。Jake最后分析了来源评估与学术诚信之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "plagiarism",
        "剽窃"
      ],
      [
        "paraphrasing",
        "改写"
      ],
      [
        "attribution",
        "注明来源"
      ],
      [
        "intellectual property",
        "知识产权"
      ],
      [
        "originality",
        "原创性"
      ],
      [
        "research ethics",
        "研究伦理"
      ],
      [
        "peer review",
        "同行评审"
      ],
      [
        "reproducibility",
        "可重复性"
      ],
      [
        "source evaluation",
        "来源评估"
      ],
      [
        "academic integrity",
        "学术诚信"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on academic integrity, Goldy introduces plagiarism, paraphrasing, and attribution as important concepts.",
        "cn": "在一场关于学术诚信的研讨会上，Goldy介绍剽窃、改写和注明来源这几个重要概念。",
        "ex": "本句设置学术诚信的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that intellectual property and originality deserve closer attention.",
        "cn": "Callum认为知识产权和原创性值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate research ethics, peer review, and reproducibility using examples.",
        "cn": "随后参与者用实例评估研究伦理、同行评审和可重复性。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between source evaluation and academic integrity.",
        "cn": "Jake最后分析了来源评估与学术诚信之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "学术诚信",
            "Academic Integrity"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "注明来源",
            "attribution"
          ],
          [
            "知识产权",
            "intellectual property"
          ],
          [
            "来源评估",
            "source evaluation"
          ],
          [
            "剽窃",
            "plagiarism"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "剽窃",
        "word": "plagiarism",
        "shuffled": [
          "i",
          "m",
          "r",
          "a",
          "i",
          "l",
          "a",
          "g",
          "p",
          "s"
        ]
      },
      {
        "cn": "注明来源",
        "word": "attribution",
        "shuffled": [
          "t",
          "u",
          "i",
          "b",
          "i",
          "r",
          "t",
          "a",
          "n",
          "t",
          "o"
        ]
      },
      {
        "cn": "原创性",
        "word": "originality",
        "shuffled": [
          "i",
          "i",
          "n",
          "l",
          "o",
          "t",
          "g",
          "a",
          "i",
          "r",
          "y"
        ]
      },
      {
        "cn": "可重复性",
        "word": "reproducibility",
        "shuffled": [
          "i",
          "i",
          "t",
          "r",
          "c",
          "r",
          "l",
          "o",
          "u",
          "e",
          "d",
          "y",
          "i",
          "p",
          "b"
        ]
      },
      {
        "cn": "学术诚信",
        "word": "academicintegrity",
        "shuffled": [
          "c",
          "a",
          "e",
          "r",
          "t",
          "i",
          "m",
          "y",
          "i",
          "i",
          "d",
          "c",
          "t",
          "g",
          "n",
          "a",
          "e"
        ]
      }
    ]
  },
  "senior-37": {
    "titleZh": "演讲技巧",
    "titleEn": "Presentation Skills",
    "story": "During a seminar on presentation skills, Goldy introduces articulation, intonation, and pacing as important concepts. Callum argues that signposting and cohesive device deserve closer attention. Participants then evaluate eye contact, body language, and audience awareness using examples. Jake concludes by examining the relationship between rhetorical question and closing statement. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于演讲技巧的研讨会上，Goldy介绍清晰表达、语调和语速这几个重要概念。Callum认为结构提示和衔接手段值得进一步关注。随后参与者用实例评估眼神交流、肢体语言和受众意识。Jake最后分析了反问句与总结陈述之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "articulation",
        "清晰表达"
      ],
      [
        "intonation",
        "语调"
      ],
      [
        "pacing",
        "语速"
      ],
      [
        "signposting",
        "结构提示"
      ],
      [
        "cohesive device",
        "衔接手段"
      ],
      [
        "eye contact",
        "眼神交流"
      ],
      [
        "body language",
        "肢体语言"
      ],
      [
        "audience awareness",
        "受众意识"
      ],
      [
        "rhetorical question",
        "反问句"
      ],
      [
        "closing statement",
        "总结陈述"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on presentation skills, Goldy introduces articulation, intonation, and pacing as important concepts.",
        "cn": "在一场关于演讲技巧的研讨会上，Goldy介绍清晰表达、语调和语速这几个重要概念。",
        "ex": "本句设置演讲技巧的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that signposting and cohesive device deserve closer attention.",
        "cn": "Callum认为结构提示和衔接手段值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate eye contact, body language, and audience awareness using examples.",
        "cn": "随后参与者用实例评估眼神交流、肢体语言和受众意识。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between rhetorical question and closing statement.",
        "cn": "Jake最后分析了反问句与总结陈述之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "演讲技巧",
            "Presentation Skills"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "语速",
            "pacing"
          ],
          [
            "结构提示",
            "signposting"
          ],
          [
            "反问句",
            "rhetorical question"
          ],
          [
            "清晰表达",
            "articulation"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "清晰表达",
        "word": "articulation",
        "shuffled": [
          "n",
          "o",
          "u",
          "t",
          "r",
          "i",
          "t",
          "i",
          "c",
          "a",
          "a",
          "l"
        ]
      },
      {
        "cn": "语速",
        "word": "pacing",
        "shuffled": [
          "n",
          "p",
          "g",
          "i",
          "c",
          "a"
        ]
      },
      {
        "cn": "衔接手段",
        "word": "cohesivedevice",
        "shuffled": [
          "o",
          "c",
          "i",
          "d",
          "v",
          "v",
          "e",
          "e",
          "h",
          "e",
          "e",
          "s",
          "i",
          "c"
        ]
      },
      {
        "cn": "受众意识",
        "word": "audienceawareness",
        "shuffled": [
          "c",
          "n",
          "w",
          "e",
          "e",
          "e",
          "d",
          "s",
          "e",
          "r",
          "a",
          "a",
          "s",
          "n",
          "i",
          "a",
          "u"
        ]
      },
      {
        "cn": "总结陈述",
        "word": "closingstatement",
        "shuffled": [
          "s",
          "m",
          "n",
          "e",
          "t",
          "o",
          "g",
          "i",
          "t",
          "a",
          "l",
          "n",
          "e",
          "c",
          "t",
          "s"
        ]
      }
    ]
  },
  "senior-38": {
    "titleZh": "会议与协商",
    "titleEn": "Meetings and Negotiation",
    "story": "During a seminar on meetings and negotiation, Goldy introduces agenda, minutes, and facilitator as important concepts. Callum argues that consensus and compromise deserve closer attention. Participants then evaluate negotiation, concession, and agreement using examples. Jake concludes by examining the relationship between follow through and action item. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于会议与协商的研讨会上，Goldy介绍议程、会议纪要和主持人这几个重要概念。Callum认为共识和妥协值得进一步关注。随后参与者用实例评估谈判、让步和协议。Jake最后分析了后续落实与行动项之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "agenda",
        "议程"
      ],
      [
        "minutes",
        "会议纪要"
      ],
      [
        "facilitator",
        "主持人"
      ],
      [
        "consensus",
        "共识"
      ],
      [
        "compromise",
        "妥协"
      ],
      [
        "negotiation",
        "谈判"
      ],
      [
        "concession",
        "让步"
      ],
      [
        "agreement",
        "协议"
      ],
      [
        "follow through",
        "后续落实"
      ],
      [
        "action item",
        "行动项"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on meetings and negotiation, Goldy introduces agenda, minutes, and facilitator as important concepts.",
        "cn": "在一场关于会议与协商的研讨会上，Goldy介绍议程、会议纪要和主持人这几个重要概念。",
        "ex": "本句设置会议与协商的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that consensus and compromise deserve closer attention.",
        "cn": "Callum认为共识和妥协值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate negotiation, concession, and agreement using examples.",
        "cn": "随后参与者用实例评估谈判、让步和协议。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between follow through and action item.",
        "cn": "Jake最后分析了后续落实与行动项之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "会议与协商",
            "Meetings and Negotiation"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "主持人",
            "facilitator"
          ],
          [
            "共识",
            "consensus"
          ],
          [
            "后续落实",
            "follow through"
          ],
          [
            "议程",
            "agenda"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "议程",
        "word": "agenda",
        "shuffled": [
          "a",
          "d",
          "n",
          "e",
          "a",
          "g"
        ]
      },
      {
        "cn": "主持人",
        "word": "facilitator",
        "shuffled": [
          "r",
          "i",
          "t",
          "o",
          "a",
          "l",
          "t",
          "f",
          "i",
          "c",
          "a"
        ]
      },
      {
        "cn": "妥协",
        "word": "compromise",
        "shuffled": [
          "p",
          "m",
          "e",
          "i",
          "c",
          "s",
          "o",
          "m",
          "r",
          "o"
        ]
      },
      {
        "cn": "协议",
        "word": "agreement",
        "shuffled": [
          "t",
          "a",
          "e",
          "g",
          "m",
          "r",
          "e",
          "n",
          "e"
        ]
      },
      {
        "cn": "行动项",
        "word": "actionitem",
        "shuffled": [
          "o",
          "t",
          "i",
          "n",
          "i",
          "a",
          "e",
          "t",
          "c",
          "m"
        ]
      }
    ]
  },
  "senior-39": {
    "titleZh": "复杂问题解决",
    "titleEn": "Complex Problem Solving",
    "story": "During a seminar on complex problem solving, Goldy introduces systems thinking, root cause, and trade off as important concepts. Callum argues that scenario analysis and contingency plan deserve closer attention. Participants then evaluate implementation risk, iterative, and evidence based using examples. Jake concludes by examining the relationship between measurable outcome and continuous improvement. The group agrees that clear evidence is essential before drawing conclusions.",
    "translation": "在一场关于复杂问题解决的研讨会上，Goldy介绍系统思维、根本原因和权衡这几个重要概念。Callum认为情景分析和应急预案值得进一步关注。随后参与者用实例评估实施风险、迭代的和循证的。Jake最后分析了可测量结果与持续改进之间的关系。大家一致认为，得出结论前必须有清楚的证据。",
    "vocabulary": [
      [
        "systems thinking",
        "系统思维"
      ],
      [
        "root cause",
        "根本原因"
      ],
      [
        "trade off",
        "权衡"
      ],
      [
        "scenario analysis",
        "情景分析"
      ],
      [
        "contingency plan",
        "应急预案"
      ],
      [
        "implementation risk",
        "实施风险"
      ],
      [
        "iterative",
        "迭代的"
      ],
      [
        "evidence based",
        "循证的"
      ],
      [
        "measurable outcome",
        "可测量结果"
      ],
      [
        "continuous improvement",
        "持续改进"
      ]
    ],
    "grammar": [
      {
        "en": "During a seminar on complex problem solving, Goldy introduces systems thinking, root cause, and trade off as important concepts.",
        "cn": "在一场关于复杂问题解决的研讨会上，Goldy介绍系统思维、根本原因和权衡这几个重要概念。",
        "ex": "本句设置复杂问题解决的学术讨论背景，注意介词短语和主句的衔接。"
      },
      {
        "en": "Callum argues that scenario analysis and contingency plan deserve closer attention.",
        "cn": "Callum认为情景分析和应急预案值得进一步关注。",
        "ex": "注意动词后面的宾语结构，辨别观点和事实。"
      },
      {
        "en": "Participants then evaluate implementation risk, iterative, and evidence based using examples.",
        "cn": "随后参与者用实例评估实施风险、迭代的和循证的。",
        "ex": "本句使用并列结构承载多项信息，注意停顿和信息分组。"
      },
      {
        "en": "Jake concludes by examining the relationship between measurable outcome and continuous improvement.",
        "cn": "Jake最后分析了可测量结果与持续改进之间的关系。",
        "ex": "总结句应表达中心思想，避免逐字重复前面内容。"
      }
    ],
    "questions": [
      {
        "cn": "研讨会的主题是什么？",
        "en": "What is the seminar about?",
        "options": [
          [
            "复杂问题解决",
            "Complex Problem Solving"
          ],
          [
            "烹饪",
            "Cooking"
          ],
          [
            "体育",
            "Sports"
          ],
          [
            "旅行",
            "Travel"
          ]
        ],
        "correct": 0,
        "evidence": "During a seminar on"
      },
      {
        "cn": "谁首先介绍重要概念？",
        "en": "Who introduces the important concepts?",
        "options": [
          [
            "Callum",
            "Callum"
          ],
          [
            "Jake",
            "Jake"
          ],
          [
            "Goldy",
            "Goldy"
          ],
          [
            "老师",
            "The teacher"
          ]
        ],
        "correct": 2,
        "evidence": "Goldy introduces"
      },
      {
        "cn": "Callum认为哪项值得进一步关注？",
        "en": "What does Callum say deserves closer attention?",
        "options": [
          [
            "权衡",
            "trade off"
          ],
          [
            "情景分析",
            "scenario analysis"
          ],
          [
            "可测量结果",
            "measurable outcome"
          ],
          [
            "系统思维",
            "systems thinking"
          ]
        ],
        "correct": 1,
        "evidence": "Callum argues that"
      },
      {
        "cn": "参与者使用什么来评估概念？",
        "en": "What do participants use to evaluate concepts?",
        "options": [
          [
            "传言",
            "Rumours"
          ],
          [
            "猜想",
            "Guesses"
          ],
          [
            "实例",
            "Examples"
          ],
          [
            "图片",
            "Pictures"
          ]
        ],
        "correct": 2,
        "evidence": "using examples."
      },
      {
        "cn": "小组认为下结论前最重要的是什么？",
        "en": "What is essential before drawing conclusions?",
        "options": [
          [
            "快速决定",
            "Speed"
          ],
          [
            "清楚的证据",
            "Clear evidence"
          ],
          [
            "多数人赞成",
            "A majority vote"
          ],
          [
            "漂亮的幻灯片",
            "Attractive slides"
          ]
        ],
        "correct": 1,
        "evidence": "clear evidence is essential before drawing conclusions."
      }
    ],
    "writing": [
      {
        "cn": "系统思维",
        "word": "systemsthinking",
        "shuffled": [
          "n",
          "n",
          "y",
          "s",
          "m",
          "i",
          "e",
          "k",
          "s",
          "i",
          "g",
          "t",
          "s",
          "t",
          "h"
        ]
      },
      {
        "cn": "权衡",
        "word": "tradeoff",
        "shuffled": [
          "e",
          "f",
          "t",
          "r",
          "a",
          "o",
          "d",
          "f"
        ]
      },
      {
        "cn": "应急预案",
        "word": "contingencyplan",
        "shuffled": [
          "e",
          "c",
          "i",
          "n",
          "n",
          "o",
          "p",
          "t",
          "n",
          "l",
          "g",
          "y",
          "c",
          "a",
          "n"
        ]
      },
      {
        "cn": "循证的",
        "word": "evidencebased",
        "shuffled": [
          "e",
          "i",
          "e",
          "e",
          "s",
          "n",
          "c",
          "a",
          "d",
          "v",
          "e",
          "d",
          "b"
        ]
      },
      {
        "cn": "持续改进",
        "word": "continuousimprovement",
        "shuffled": [
          "p",
          "r",
          "s",
          "i",
          "n",
          "c",
          "o",
          "u",
          "t",
          "i",
          "u",
          "e",
          "o",
          "v",
          "o",
          "t",
          "e",
          "m",
          "m",
          "n",
          "n"
        ]
      }
    ]
  },
  "junior-20": {
    "titleZh": "期中综合考试",
    "titleEn": "Midterm Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers father, mother, and I. The second task introduces me, you, and your. In the last task they discuss he, him, she, and her. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含爸爸、妈妈和我（主语）。第二项任务介绍我（宾语）、你（主宾语）和你的（接名词）。最后一项任务讨论他（主语）、他（宾语）、她（主语）和她／她的。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "father",
        "爸爸"
      ],
      [
        "mother",
        "妈妈"
      ],
      [
        "I",
        "我（主语）"
      ],
      [
        "me",
        "我（宾语）"
      ],
      [
        "you",
        "你（主宾语）"
      ],
      [
        "your",
        "你的（接名词）"
      ],
      [
        "he",
        "他（主语）"
      ],
      [
        "him",
        "他（宾语）"
      ],
      [
        "she",
        "她（主语）"
      ],
      [
        "her",
        "她／她的"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“爸爸”对应的英文。",
        "en": "Choose the English expression for 爸爸 from the review.",
        "options": [
          [
            "选项 1",
            "me"
          ],
          [
            "选项 2",
            "mother"
          ],
          [
            "选项 3",
            "father"
          ],
          [
            "选项 4",
            "your"
          ]
        ],
        "correct": 2,
        "evidence": "The first task covers father, mother, and I."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“我（主语）”对应的英文。",
        "en": "Choose the English expression for 我（主语） from the review.",
        "options": [
          [
            "选项 1",
            "your"
          ],
          [
            "选项 2",
            "him"
          ],
          [
            "选项 3",
            "me"
          ],
          [
            "选项 4",
            "I"
          ]
        ],
        "correct": 3,
        "evidence": "The first task covers father, mother, and I."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“你（主宾语）”对应的英文。",
        "en": "Choose the English expression for 你（主宾语） from the review.",
        "options": [
          [
            "选项 1",
            "her"
          ],
          [
            "选项 2",
            "your"
          ],
          [
            "选项 3",
            "him"
          ],
          [
            "选项 4",
            "you"
          ]
        ],
        "correct": 3,
        "evidence": "The second task introduces me, you, and your."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“他（主语）”对应的英文。",
        "en": "Choose the English expression for 他（主语） from the review.",
        "options": [
          [
            "选项 1",
            "him"
          ],
          [
            "选项 2",
            "mother"
          ],
          [
            "选项 3",
            "her"
          ],
          [
            "选项 4",
            "he"
          ]
        ],
        "correct": 3,
        "evidence": "Goldy reviews her learning with Callum and Jake."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“她／她的”对应的英文。",
        "en": "Choose the English expression for 她／她的 from the review.",
        "options": [
          [
            "选项 1",
            "father"
          ],
          [
            "选项 2",
            "you"
          ],
          [
            "选项 3",
            "I"
          ],
          [
            "选项 4",
            "her"
          ]
        ],
        "correct": 3,
        "evidence": "Goldy reviews her learning with Callum and Jake."
      }
    ],
    "writing": [
      {
        "cn": "爸爸",
        "word": "father",
        "shuffled": [
          "e",
          "r",
          "t",
          "h",
          "f",
          "a"
        ]
      },
      {
        "cn": "我（主语）",
        "word": "I",
        "shuffled": [
          "i"
        ]
      },
      {
        "cn": "你（主宾语）",
        "word": "you",
        "shuffled": [
          "o",
          "y",
          "u"
        ]
      },
      {
        "cn": "他（主语）",
        "word": "he",
        "shuffled": [
          "e",
          "h"
        ]
      },
      {
        "cn": "她／她的",
        "word": "her",
        "shuffled": [
          "e",
          "r",
          "h"
        ]
      }
    ],
    "isExam": true
  },
  "junior-40": {
    "titleZh": "期末综合考试",
    "titleEn": "Final Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers spring, summer, and Monday. The second task introduces Tuesday, January, and February. In the last task they discuss left, right, bus, and train. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含春天、夏天和星期一。第二项任务介绍星期二、一月和二月。最后一项任务讨论左边、右边、公交车和火车。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "spring",
        "春天"
      ],
      [
        "summer",
        "夏天"
      ],
      [
        "Monday",
        "星期一"
      ],
      [
        "Tuesday",
        "星期二"
      ],
      [
        "January",
        "一月"
      ],
      [
        "February",
        "二月"
      ],
      [
        "left",
        "左边"
      ],
      [
        "right",
        "右边"
      ],
      [
        "bus",
        "公交车"
      ],
      [
        "train",
        "火车"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“春天”对应的英文。",
        "en": "Choose the English expression for 春天 from the review.",
        "options": [
          [
            "选项 1",
            "spring"
          ],
          [
            "选项 2",
            "Tuesday"
          ],
          [
            "选项 3",
            "summer"
          ],
          [
            "选项 4",
            "February"
          ]
        ],
        "correct": 0,
        "evidence": "The first task covers spring, summer, and Monday."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“星期一”对应的英文。",
        "en": "Choose the English expression for 星期一 from the review.",
        "options": [
          [
            "选项 1",
            "Tuesday"
          ],
          [
            "选项 2",
            "Monday"
          ],
          [
            "选项 3",
            "February"
          ],
          [
            "选项 4",
            "right"
          ]
        ],
        "correct": 1,
        "evidence": "The first task covers spring, summer, and Monday."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“一月”对应的英文。",
        "en": "Choose the English expression for 一月 from the review.",
        "options": [
          [
            "选项 1",
            "right"
          ],
          [
            "选项 2",
            "January"
          ],
          [
            "选项 3",
            "February"
          ],
          [
            "选项 4",
            "train"
          ]
        ],
        "correct": 1,
        "evidence": "The second task introduces Tuesday, January, and February."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“左边”对应的英文。",
        "en": "Choose the English expression for 左边 from the review.",
        "options": [
          [
            "选项 1",
            "summer"
          ],
          [
            "选项 2",
            "train"
          ],
          [
            "选项 3",
            "left"
          ],
          [
            "选项 4",
            "right"
          ]
        ],
        "correct": 2,
        "evidence": "In the last task they discuss left, right, bus, and train."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“火车”对应的英文。",
        "en": "Choose the English expression for 火车 from the review.",
        "options": [
          [
            "选项 1",
            "train"
          ],
          [
            "选项 2",
            "spring"
          ],
          [
            "选项 3",
            "Monday"
          ],
          [
            "选项 4",
            "January"
          ]
        ],
        "correct": 0,
        "evidence": "In the last task they discuss left, right, bus, and train."
      }
    ],
    "writing": [
      {
        "cn": "春天",
        "word": "spring",
        "shuffled": [
          "r",
          "n",
          "p",
          "i",
          "g",
          "s"
        ]
      },
      {
        "cn": "星期一",
        "word": "Monday",
        "shuffled": [
          "a",
          "y",
          "n",
          "d",
          "o",
          "m"
        ]
      },
      {
        "cn": "一月",
        "word": "January",
        "shuffled": [
          "r",
          "u",
          "y",
          "n",
          "a",
          "j",
          "a"
        ]
      },
      {
        "cn": "左边",
        "word": "left",
        "shuffled": [
          "t",
          "f",
          "l",
          "e"
        ]
      },
      {
        "cn": "火车",
        "word": "train",
        "shuffled": [
          "t",
          "i",
          "a",
          "n",
          "r"
        ]
      }
    ],
    "isExam": true
  },
  "middle-20": {
    "titleZh": "期中综合考试",
    "titleEn": "Midterm Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers focus, review, and discuss. The second task introduces explain, lecture, and tutorial. In the last task they discuss paragraph, topic, introduction, and argument. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含专注、复习和讨论。第二项任务介绍解释、讲座和辅导课。最后一项任务讨论段落、主题、引言和论点。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "focus",
        "专注"
      ],
      [
        "review",
        "复习"
      ],
      [
        "discuss",
        "讨论"
      ],
      [
        "explain",
        "解释"
      ],
      [
        "lecture",
        "讲座"
      ],
      [
        "tutorial",
        "辅导课"
      ],
      [
        "paragraph",
        "段落"
      ],
      [
        "topic",
        "主题"
      ],
      [
        "introduction",
        "引言"
      ],
      [
        "argument",
        "论点"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“专注”对应的英文。",
        "en": "Choose the English expression for 专注 from the review.",
        "options": [
          [
            "选项 1",
            "explain"
          ],
          [
            "选项 2",
            "review"
          ],
          [
            "选项 3",
            "focus"
          ],
          [
            "选项 4",
            "tutorial"
          ]
        ],
        "correct": 2,
        "evidence": "The first task covers focus, review, and discuss."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“讨论”对应的英文。",
        "en": "Choose the English expression for 讨论 from the review.",
        "options": [
          [
            "选项 1",
            "tutorial"
          ],
          [
            "选项 2",
            "topic"
          ],
          [
            "选项 3",
            "explain"
          ],
          [
            "选项 4",
            "discuss"
          ]
        ],
        "correct": 3,
        "evidence": "The first task covers focus, review, and discuss."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“讲座”对应的英文。",
        "en": "Choose the English expression for 讲座 from the review.",
        "options": [
          [
            "选项 1",
            "argument"
          ],
          [
            "选项 2",
            "tutorial"
          ],
          [
            "选项 3",
            "topic"
          ],
          [
            "选项 4",
            "lecture"
          ]
        ],
        "correct": 3,
        "evidence": "The second task introduces explain, lecture, and tutorial."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“段落”对应的英文。",
        "en": "Choose the English expression for 段落 from the review.",
        "options": [
          [
            "选项 1",
            "topic"
          ],
          [
            "选项 2",
            "review"
          ],
          [
            "选项 3",
            "argument"
          ],
          [
            "选项 4",
            "paragraph"
          ]
        ],
        "correct": 3,
        "evidence": "In the last task they discuss paragraph, topic, introduction, and argument."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“论点”对应的英文。",
        "en": "Choose the English expression for 论点 from the review.",
        "options": [
          [
            "选项 1",
            "focus"
          ],
          [
            "选项 2",
            "lecture"
          ],
          [
            "选项 3",
            "discuss"
          ],
          [
            "选项 4",
            "argument"
          ]
        ],
        "correct": 3,
        "evidence": "In the last task they discuss paragraph, topic, introduction, and argument."
      }
    ],
    "writing": [
      {
        "cn": "专注",
        "word": "focus",
        "shuffled": [
          "u",
          "c",
          "s",
          "f",
          "o"
        ]
      },
      {
        "cn": "讨论",
        "word": "discuss",
        "shuffled": [
          "d",
          "s",
          "i",
          "s",
          "c",
          "u",
          "s"
        ]
      },
      {
        "cn": "讲座",
        "word": "lecture",
        "shuffled": [
          "t",
          "l",
          "e",
          "e",
          "c",
          "r",
          "u"
        ]
      },
      {
        "cn": "段落",
        "word": "paragraph",
        "shuffled": [
          "r",
          "p",
          "g",
          "a",
          "p",
          "r",
          "a",
          "h",
          "a"
        ]
      },
      {
        "cn": "论点",
        "word": "argument",
        "shuffled": [
          "u",
          "r",
          "e",
          "g",
          "m",
          "n",
          "t",
          "a"
        ]
      }
    ],
    "isExam": true
  },
  "middle-40": {
    "titleZh": "期末综合考试",
    "titleEn": "Final Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers stamina, strength, and suburb. The second task introduces commute, tenant, and landlord. In the last task they discuss recycle, waste, climate, and temperature. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含耐力、力量和郊区。第二项任务介绍通勤、租客和房东。最后一项任务讨论回收利用、废弃物、气候和温度。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "stamina",
        "耐力"
      ],
      [
        "strength",
        "力量"
      ],
      [
        "suburb",
        "郊区"
      ],
      [
        "commute",
        "通勤"
      ],
      [
        "tenant",
        "租客"
      ],
      [
        "landlord",
        "房东"
      ],
      [
        "recycle",
        "回收利用"
      ],
      [
        "waste",
        "废弃物"
      ],
      [
        "climate",
        "气候"
      ],
      [
        "temperature",
        "温度"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“耐力”对应的英文。",
        "en": "Choose the English expression for 耐力 from the review.",
        "options": [
          [
            "选项 1",
            "stamina"
          ],
          [
            "选项 2",
            "commute"
          ],
          [
            "选项 3",
            "strength"
          ],
          [
            "选项 4",
            "landlord"
          ]
        ],
        "correct": 0,
        "evidence": "The first task covers stamina, strength, and suburb."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“郊区”对应的英文。",
        "en": "Choose the English expression for 郊区 from the review.",
        "options": [
          [
            "选项 1",
            "commute"
          ],
          [
            "选项 2",
            "suburb"
          ],
          [
            "选项 3",
            "landlord"
          ],
          [
            "选项 4",
            "waste"
          ]
        ],
        "correct": 1,
        "evidence": "The first task covers stamina, strength, and suburb."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“租客”对应的英文。",
        "en": "Choose the English expression for 租客 from the review.",
        "options": [
          [
            "选项 1",
            "waste"
          ],
          [
            "选项 2",
            "tenant"
          ],
          [
            "选项 3",
            "landlord"
          ],
          [
            "选项 4",
            "temperature"
          ]
        ],
        "correct": 1,
        "evidence": "The second task introduces commute, tenant, and landlord."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“回收利用”对应的英文。",
        "en": "Choose the English expression for 回收利用 from the review.",
        "options": [
          [
            "选项 1",
            "strength"
          ],
          [
            "选项 2",
            "temperature"
          ],
          [
            "选项 3",
            "recycle"
          ],
          [
            "选项 4",
            "waste"
          ]
        ],
        "correct": 2,
        "evidence": "In the last task they discuss recycle, waste, climate, and temperature."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“温度”对应的英文。",
        "en": "Choose the English expression for 温度 from the review.",
        "options": [
          [
            "选项 1",
            "temperature"
          ],
          [
            "选项 2",
            "stamina"
          ],
          [
            "选项 3",
            "suburb"
          ],
          [
            "选项 4",
            "tenant"
          ]
        ],
        "correct": 0,
        "evidence": "In the last task they discuss recycle, waste, climate, and temperature."
      }
    ],
    "writing": [
      {
        "cn": "耐力",
        "word": "stamina",
        "shuffled": [
          "a",
          "t",
          "n",
          "i",
          "m",
          "a",
          "s"
        ]
      },
      {
        "cn": "郊区",
        "word": "suburb",
        "shuffled": [
          "r",
          "b",
          "b",
          "u",
          "u",
          "s"
        ]
      },
      {
        "cn": "租客",
        "word": "tenant",
        "shuffled": [
          "n",
          "a",
          "t",
          "n",
          "t",
          "e"
        ]
      },
      {
        "cn": "回收利用",
        "word": "recycle",
        "shuffled": [
          "y",
          "c",
          "c",
          "r",
          "l",
          "e",
          "e"
        ]
      },
      {
        "cn": "温度",
        "word": "temperature",
        "shuffled": [
          "t",
          "e",
          "r",
          "a",
          "u",
          "e",
          "r",
          "t",
          "p",
          "m",
          "e"
        ]
      }
    ],
    "isExam": true
  },
  "senior-20": {
    "titleZh": "期中综合考试",
    "titleEn": "Midterm Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers contention, substantiation, and longitudinal. The second task introduces cross sectional, distribution, and variance. In the last task they discuss ethnography, interview protocol, equity, and attainment. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含论点、论证和纵向的。第二项任务介绍横断面的、分布和方差。最后一项任务讨论民族志、访谈提纲、公平和学业成就。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "contention",
        "论点"
      ],
      [
        "substantiation",
        "论证"
      ],
      [
        "longitudinal",
        "纵向的"
      ],
      [
        "cross sectional",
        "横断面的"
      ],
      [
        "distribution",
        "分布"
      ],
      [
        "variance",
        "方差"
      ],
      [
        "ethnography",
        "民族志"
      ],
      [
        "interview protocol",
        "访谈提纲"
      ],
      [
        "equity",
        "公平"
      ],
      [
        "attainment",
        "学业成就"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“论点”对应的英文。",
        "en": "Choose the English expression for 论点 from the review.",
        "options": [
          [
            "选项 1",
            "cross sectional"
          ],
          [
            "选项 2",
            "substantiation"
          ],
          [
            "选项 3",
            "contention"
          ],
          [
            "选项 4",
            "variance"
          ]
        ],
        "correct": 2,
        "evidence": "The first task covers contention, substantiation, and longitudinal."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“纵向的”对应的英文。",
        "en": "Choose the English expression for 纵向的 from the review.",
        "options": [
          [
            "选项 1",
            "variance"
          ],
          [
            "选项 2",
            "interview protocol"
          ],
          [
            "选项 3",
            "cross sectional"
          ],
          [
            "选项 4",
            "longitudinal"
          ]
        ],
        "correct": 3,
        "evidence": "The first task covers contention, substantiation, and longitudinal."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“分布”对应的英文。",
        "en": "Choose the English expression for 分布 from the review.",
        "options": [
          [
            "选项 1",
            "attainment"
          ],
          [
            "选项 2",
            "variance"
          ],
          [
            "选项 3",
            "interview protocol"
          ],
          [
            "选项 4",
            "distribution"
          ]
        ],
        "correct": 3,
        "evidence": "The second task introduces cross sectional, distribution, and variance."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“民族志”对应的英文。",
        "en": "Choose the English expression for 民族志 from the review.",
        "options": [
          [
            "选项 1",
            "interview protocol"
          ],
          [
            "选项 2",
            "substantiation"
          ],
          [
            "选项 3",
            "attainment"
          ],
          [
            "选项 4",
            "ethnography"
          ]
        ],
        "correct": 3,
        "evidence": "In the last task they discuss ethnography, interview protocol, equity, and attainment."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“学业成就”对应的英文。",
        "en": "Choose the English expression for 学业成就 from the review.",
        "options": [
          [
            "选项 1",
            "contention"
          ],
          [
            "选项 2",
            "distribution"
          ],
          [
            "选项 3",
            "longitudinal"
          ],
          [
            "选项 4",
            "attainment"
          ]
        ],
        "correct": 3,
        "evidence": "In the last task they discuss ethnography, interview protocol, equity, and attainment."
      }
    ],
    "writing": [
      {
        "cn": "论点",
        "word": "contention",
        "shuffled": [
          "n",
          "c",
          "n",
          "o",
          "n",
          "i",
          "e",
          "t",
          "o",
          "t"
        ]
      },
      {
        "cn": "纵向的",
        "word": "longitudinal",
        "shuffled": [
          "i",
          "g",
          "a",
          "l",
          "o",
          "n",
          "n",
          "l",
          "d",
          "u",
          "i",
          "t"
        ]
      },
      {
        "cn": "分布",
        "word": "distribution",
        "shuffled": [
          "u",
          "d",
          "b",
          "i",
          "s",
          "i",
          "n",
          "t",
          "t",
          "r",
          "o",
          "i"
        ]
      },
      {
        "cn": "民族志",
        "word": "ethnography",
        "shuffled": [
          "h",
          "e",
          "r",
          "n",
          "o",
          "h",
          "g",
          "a",
          "y",
          "p",
          "t"
        ]
      },
      {
        "cn": "学业成就",
        "word": "attainment",
        "shuffled": [
          "n",
          "n",
          "a",
          "e",
          "t",
          "i",
          "m",
          "t",
          "t",
          "a"
        ]
      }
    ],
    "isExam": true
  },
  "senior-40": {
    "titleZh": "期末综合考试",
    "titleEn": "Final Assessment",
    "story": "Goldy reviews her learning with Callum and Jake. The first task covers patient flow, appointment scheduling, and density. The second task introduces mixed use, green infrastructure, and circular economy. In the last task they discuss decarbonisation, carbon pricing, electrification, and grid stability. They listen carefully, read the passage, practise speaking, and write their answers in English.",
    "translation": "Goldy与Callum、Jake一起复习学习内容。第一项任务包含患者流转、预约排程和密度。第二项任务介绍混合用途、绿色基础设施和循环经济。最后一项任务讨论脱碳、碳定价、电气化和电网稳定性。他们认真听、阅读短文、练习口语，并用英语书写答案。",
    "vocabulary": [
      [
        "patient flow",
        "患者流转"
      ],
      [
        "appointment scheduling",
        "预约排程"
      ],
      [
        "density",
        "密度"
      ],
      [
        "mixed use",
        "混合用途"
      ],
      [
        "green infrastructure",
        "绿色基础设施"
      ],
      [
        "circular economy",
        "循环经济"
      ],
      [
        "decarbonisation",
        "脱碳"
      ],
      [
        "carbon pricing",
        "碳定价"
      ],
      [
        "electrification",
        "电气化"
      ],
      [
        "grid stability",
        "电网稳定性"
      ]
    ],
    "grammar": [
      {
        "en": "Goldy reviews her learning.",
        "cn": "Goldy复习学习内容。",
        "ex": "review 是复习；用一般现在时表达习惯性学习活动。"
      },
      {
        "en": "They listen carefully.",
        "cn": "他们认真地听。",
        "ex": "carefully 是副词，用来说明 listen 的方式。"
      },
      {
        "en": "They read the passage.",
        "cn": "他们阅读短文。",
        "ex": "read 在这里是动词，后接阅读的对象。"
      },
      {
        "en": "They write their answers in English.",
        "cn": "他们用英语写答案。",
        "ex": "in English 说明使用的语言；写作须自己组织英文表达。"
      }
    ],
    "questions": [
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“患者流转”对应的英文。",
        "en": "Choose the English expression for 患者流转 from the review.",
        "options": [
          [
            "选项 1",
            "patient flow"
          ],
          [
            "选项 2",
            "mixed use"
          ],
          [
            "选项 3",
            "appointment scheduling"
          ],
          [
            "选项 4",
            "circular economy"
          ]
        ],
        "correct": 0,
        "evidence": "The first task covers patient flow, appointment scheduling, and density."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“密度”对应的英文。",
        "en": "Choose the English expression for 密度 from the review.",
        "options": [
          [
            "选项 1",
            "mixed use"
          ],
          [
            "选项 2",
            "density"
          ],
          [
            "选项 3",
            "circular economy"
          ],
          [
            "选项 4",
            "carbon pricing"
          ]
        ],
        "correct": 1,
        "evidence": "The first task covers patient flow, appointment scheduling, and density."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“绿色基础设施”对应的英文。",
        "en": "Choose the English expression for 绿色基础设施 from the review.",
        "options": [
          [
            "选项 1",
            "carbon pricing"
          ],
          [
            "选项 2",
            "green infrastructure"
          ],
          [
            "选项 3",
            "circular economy"
          ],
          [
            "选项 4",
            "grid stability"
          ]
        ],
        "correct": 1,
        "evidence": "The second task introduces mixed use, green infrastructure, and circular economy."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“脱碳”对应的英文。",
        "en": "Choose the English expression for 脱碳 from the review.",
        "options": [
          [
            "选项 1",
            "appointment scheduling"
          ],
          [
            "选项 2",
            "grid stability"
          ],
          [
            "选项 3",
            "decarbonisation"
          ],
          [
            "选项 4",
            "carbon pricing"
          ]
        ],
        "correct": 2,
        "evidence": "In the last task they discuss decarbonisation, carbon pricing, electrification, and grid stability."
      },
      {
        "cn": "这篇复习短文包含下列哪个表达？请选出“电网稳定性”对应的英文。",
        "en": "Choose the English expression for 电网稳定性 from the review.",
        "options": [
          [
            "选项 1",
            "grid stability"
          ],
          [
            "选项 2",
            "patient flow"
          ],
          [
            "选项 3",
            "density"
          ],
          [
            "选项 4",
            "green infrastructure"
          ]
        ],
        "correct": 0,
        "evidence": "In the last task they discuss decarbonisation, carbon pricing, electrification, and grid stability."
      }
    ],
    "writing": [
      {
        "cn": "患者流转",
        "word": "patientflow",
        "shuffled": [
          "f",
          "t",
          "o",
          "e",
          "n",
          "i",
          "a",
          "l",
          "t",
          "w",
          "p"
        ]
      },
      {
        "cn": "密度",
        "word": "density",
        "shuffled": [
          "t",
          "n",
          "i",
          "y",
          "s",
          "e",
          "d"
        ]
      },
      {
        "cn": "绿色基础设施",
        "word": "greeninfrastructure",
        "shuffled": [
          "s",
          "c",
          "r",
          "r",
          "a",
          "n",
          "e",
          "u",
          "u",
          "e",
          "e",
          "n",
          "t",
          "r",
          "i",
          "t",
          "r",
          "g",
          "f"
        ]
      },
      {
        "cn": "脱碳",
        "word": "decarbonisation",
        "shuffled": [
          "b",
          "o",
          "i",
          "e",
          "t",
          "a",
          "i",
          "n",
          "s",
          "o",
          "r",
          "d",
          "n",
          "a",
          "c"
        ]
      },
      {
        "cn": "电网稳定性",
        "word": "gridstability",
        "shuffled": [
          "l",
          "t",
          "g",
          "s",
          "i",
          "t",
          "r",
          "a",
          "y",
          "b",
          "d",
          "i",
          "i"
        ]
      }
    ],
    "isExam": true
  }
};
