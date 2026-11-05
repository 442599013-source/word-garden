/* Sentence-specific teaching from the actual current fragment, never from an unrelated unit. */
(()=>{'use strict';const supplied=window.WMRS129Annotations.grammarFor;
const finite={provides:'provide',runs:'run',requires:'require',shows:'show',opens:'open',closes:'close',helps:'help',returns:'return',enhances:'enhance',comprises:'comprise',locks:'lock',needs:'need',distinguishes:'distinguish',relies:'rely',slows:'slow',starts:'start'};
const gloss=(word)=>{const key=word.toLowerCase().replace(/[’‘]/g,"'");return window.WMWordGlossary.words[key]||word};
function breakdown(text){const words=text.match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g)||[];const parts=[];for(let i=0;i<words.length&&parts.length<10;){let found=false;for(let n=5;n>=2;n--){const phrase=words.slice(i,i+n).join(' '),meaning=window.WMWordGlossary.phrases[phrase.toLowerCase()];if(meaning&&i+n<=words.length){parts.push(phrase+'（'+meaning+'）');i+=n;found=true;break}}if(!found){const word=words[i++],meaning=gloss(word).replace(/（[^）]*）/g,'').split('；').slice(0,2).join('／');parts.push(word+'（'+meaning+'）')}}if(words.length>10)parts.push('…');return parts.join(' ＋ ')}
function grammarFor(r){if(r['关卡']===52)return supplied(r);const en=r['输入标准答案'],low=en.toLowerCase(),rules=[],add=(pattern,fn)=>{const m=en.match(pattern);if(m)rules.push(fn(m))};
add(/\b(has|have) been (rising|looking|running|hosting|reporting)\b/i,m=>m[0]+'：'+m[1]+' ＋ been ＋ '+m[2]+'，表示从过去持续到现在的动作，为现在完成进行时。');
add(/\b(is|are|am) going to (\w+)\b/i,m=>m[0]+'：be going to ＋ 动词原形，表示“将要／打算”，不是因为看到 going 就只讲现在进行时。');
add(/\b(is|are|am|was|were) (reporting|running|looking|hosting)\b/i,m=>m[0]+'：'+m[1]+' ＋ '+m[2]+'，是进行时结构；结合 '+m[1]+' 判断现在或过去。');
add(/\b(must|should|can|will|may) be (submitted|included|deducted|mentioned|emailed|borrowed|tested|awarded|encouraged)\b/i,m=>m[0]+'：情态动词 '+m[1]+' ＋ be ＋ 过去分词 '+m[2]+'，是被动结构，主语承受这个动作。');
add(/\b(is|are|was|were|been) (divided|required|encouraged|postponed|delayed|regarded|rendered|considered|submitted|tested|borrowed|awarded|emailed)\b/i,m=>m[0]+'：be动词 '+m[1]+' ＋ 过去分词 '+m[2]+'，关注“被怎样处理／被怎样看待”。');
add(/\b(has|have) (destroyed|moved|garnered)\b/i,m=>m[0]+'：'+m[1]+' ＋ 过去分词 '+m[2]+'，是现在完成时，联系过去动作与现在的结果。');
add(/\bthere (are|is|has been|will be)\b/i,m=>m[0]+' 表示“有／存在”，后面接存在的人或事物，不能机械翻成“那里”。');
add(/\b(is|are) located\b/i,m=>m[0]+' 表示“位于／坐落于”，后面继续接地点。这里重点理解位置，不翻成正在定位。');
add(/\bdue to\b/i,m=>m[0]+'（由于）后面接原因的名词或名词短语，例如原句中的施工、停电等原因。');
add(/\bbecause of\b/i,m=>m[0]+'（因为）后面接名词或名词短语；because 后通常可以接一个句子。');
add(/\b(can|must|will|would|should|may)( not)? (keep|attend|wear|put|discuss|leave|stop|help|use|pay|pass|get|complete|provide|submit|include|choose|retake|determine|slow|accept)\b/i,m=>m[0]+'：情态动词 '+m[1]+' 后接动词原形 '+m[3]+'；not 放在情态动词后表示否定。');
add(/\bas soon as\b/i,m=>m[0]+' 表示“一……就……”，连接两个动作发生的时间关系。');
add(/\b(After considering|By logging in|before entering|Eating a healthy breakfast|Answering such a complex question)\b/i,m=>m[0]+' 中的 -ing 形式在这里用于介词后的成分或名词性表达，不是单独的进行时谓语。');
add(/\bstop writing\b/i,m=>m[0]+' 表示“停止书写”；stop ＋ 动词-ing 是停止正在做的事。');
add(/\bto be (tested|awarded)\b/i,m=>m[0]+'：to ＋ be ＋ 过去分词，是不定式的被动形式。');
add(/\bto (download|find|visit|finish|complete|share|get|take|borrow|respond|email|give|finalize|reset|write|accept|vote|flourish|bring)\b/i,m=>m[0]+'：to ＋ 动词原形 '+m[1]+'，是不定式。to 后接地点或名词时，要另外按介词理解。');
add(/\bvisiting professor\b/i,m=>m[0]+' 表示“来访教授”；visiting 修饰 professor，不是独立的进行时谓语。');
add(/\b(the best|the largest|the two most interesting)\b/i,m=>m[0]+' 是最高级表达，用于特定范围内的比较，不把其中的词尾字母当作时态。');
for(const [form,base]of Object.entries(finite))if(new RegExp('\\b'+form+'\\b','i').test(en)){rules.push(form+' 的原形是 '+base+'；在当前完整原句中，单数第三人称主语搭配这个一般现在时形式。');break}
const plurals=(en.match(/[A-Za-z]+/g)||[]).filter(w=>gloss(w).includes('复数'));if(plurals.length)rules.push(plurals.slice(0,3).join('、')+' 是本题出现的复数名词。注意保留词尾，而不是把所有 -s 都当成动词变化。');
if(!rules.length){add(/\b(am|is|are)\b/i,m=>m[0]+' 是be动词，后面的名词、形容词或地点表达补充主语是什么、怎么样或在哪里；单看be动词不能判定为进行时。')}
if(!rules.length&&/^(please\s+)?(number|put|take|keep|stop|write|bring|don't hesitate)\b/i.test(en))rules.push('这里是请求或指令的开头，省略主语 you，用动词原形；please 表示礼貌。');
if(!rules.length)rules.push('当前练的是原句片段，先把上面这些词按顺序连起来理解；片段尚未补齐时，不把它硬标成一个完整句型。');
const chunks=r['顶部展示英文'].split(/[+＋|｜]/).map(x=>x.trim()).filter(Boolean);let split='';if(chunks.length>1)split='分段提示：'+chunks.map(x=>'“'+x+'”').join(' ＋ ')+'。这些分隔符不用输入。\n';
return [r['本题知识点'],'拆开理解：'+breakdown(en)+'。\n'+split+rules.slice(0,3).join('\n')]
}
window.WMRS129Annotations={...window.WMRS129Annotations,grammarFor};
})();
