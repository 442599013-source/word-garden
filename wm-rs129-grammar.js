/* Sentence-specific teaching from the actual current fragment, never from an unrelated unit. */
(()=>{'use strict';const supplied=window.WMRS129Annotations.grammarFor;
const finite={provides:'provide',runs:'run',requires:'require',shows:'show',opens:'open',closes:'close',helps:'help',returns:'return',enhances:'enhance',comprises:'comprise',locks:'lock',needs:'need',distinguishes:'distinguish',relies:'rely',slows:'slow',starts:'start'};
const gloss=(word)=>{const key=word.toLowerCase().replace(/[’‘]/g,"'");return window.WMWordGlossary.words[key]||word};
function breakdown(text){const words=text.match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g)||[];const parts=[];for(let i=0;i<words.length&&parts.length<10;){let found=false;for(let n=5;n>=2;n--){const phrase=words.slice(i,i+n).join(' '),meaning=window.WMWordGlossary.phrases[phrase.toLowerCase()];if(meaning&&i+n<=words.length){parts.push(phrase+'（'+meaning+'）');i+=n;found=true;break}}if(!found){const word=words[i++],meaning=gloss(word).replace(/（[^）]*）/g,'').split('；').slice(0,2).join('／');parts.push(word+'（'+meaning+'）')}}if(words.length>10)parts.push('…');return parts.join(' ＋ ')}
function grammarFor(r){if(r['关卡']===52)return supplied(r);const en=r['输入标准答案'],low=en.toLowerCase(),rules=[],add=(pattern,fn)=>{const m=en.match(pattern);if(m)rules.push(fn(m))};
add(/\b(has|have) been (rising|looking|running|hosting|reporting)\b/i,m=>m[0]+'：'+m[1]+' ＋ been ＋ '+m[2]+'，表示从过去持续到现在的动作，为现在完成进行时。');
add(/\b(is|are|am) going to (\w+)\b/i,m=>m[0]+'：be going to ＋ 动词原形，表示“将要／打算”。');
add(/\b(is|are|am|was|were) (reporting|running|looking|hosting)\b/i,m=>m[0]+'：'+m[1]+' ＋ '+m[2]+'，是进行时结构；结合 '+m[1]+' 判断现在或过去。');
add(/\b(must|should|can|will|may) be (submitted|included|deducted|mentioned|emailed|borrowed|tested|awarded|encouraged)\b/i,m=>m[0]+'：情态动词 '+m[1]+' ＋ be ＋ 过去分词 '+m[2]+'，是被动结构，主语承受这个动作。');
add(/\b(is|are|was|were|been) (divided|required|encouraged|postponed|delayed|regarded|rendered|considered|submitted|tested|borrowed|awarded|emailed)\b/i,m=>m[0]+'：be动词 '+m[1]+' ＋ 过去分词 '+m[2]+'，关注“被怎样处理／被怎样看待”。');
add(/\b(has|have) (destroyed|moved|garnered)\b/i,m=>m[0]+'：'+m[1]+' ＋ 过去分词 '+m[2]+'，是现在完成时，联系过去动作与现在的结果。');
add(/\bthere (are|is|has been|will be)\b/i,m=>m[0]+' 表示“有／存在”，后面接存在的人或事物。');
add(/\b(is|are) located\b/i,m=>m[0]+' 表示“位于／坐落于”，后面继续接地点。');
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
const special={children:['child','不规则复数'],people:['person','表示“人们”的复数形式'],men:['man','不规则复数'],women:['woman','不规则复数'],feet:['foot','不规则复数'],teeth:['tooth','不规则复数'],mice:['mouse','不规则复数'],lunches:['lunch','以 ch 结尾，加 -es'],classes:['class','以 s 结尾，加 -es'],boxes:['box','以 x 结尾，加 -es'],activities:['activity','辅音字母加 y 结尾，变 y 为 i 再加 -es'],facilities:['facility','辅音字母加 y 结尾，变 y 为 i 再加 -es'],industries:['industry','辅音字母加 y 结尾，变 y 为 i 再加 -es'],countries:['country','辅音字母加 y 结尾，变 y 为 i 再加 -es'],universities:['university','辅音字母加 y 结尾，变 y 为 i 再加 -es']};
for(const word of en.toLowerCase().match(/[a-z]+/g)||[])if(special[word]){const [base,rule]=special[word];rules.push(base+' → '+word+'：'+rule+'。');break}
const endings={in:'in 是介词，这里引出所在地点或范围，后面的名词短语尚未补齐。',for:'for 是介词，这里引出适用对象或受益者，后面还需要补上具体对象。',the:'the 是定冠词，限定后面的特定名词；当前片段还需要继续补齐名词。',are:'are 是 be 动词，主语为复数或 you 时使用；后面继续补充状态、身份或位置。',is:'is 是 be 动词，搭配第三人称单数主语；后面继续补充状态、身份或位置。',on:'on 是介词，后面接具体日期、星期或接触的表面，要结合后续内容理解。',to:'to 在这里引出后续成分；后接动词原形可构成不定式，后接地点或对象时可作介词。',must:'must 是情态动词，表示“必须”，后面接动词原形。',will:'will 在这里表示将来，后面接动词原形。',should:'should 表示“应该”，后面接动词原形。',can:'can 表示“能／可以”，后面接动词原形。',and:'and 连接并列的词、短语或句子，后面还需要补齐另一部分。',before:'before 表示“在……之前”，后面继续补充时间或动作。',until:'until 表示“直到……”，后面继续补充结束的时间。'};
const last=(en.toLowerCase().match(/[a-z]+/g)||[]).at(-1);if(endings[last])rules.unshift(endings[last]);
if(!rules.length){add(/\b(am|is|are)\b/i,m=>m[0]+' 是be动词，后面的名词、形容词或地点表达补充主语是什么、怎么样或在哪里。')}
if(!rules.length&&/^(please\s+)?(number|put|take|keep|stop|write|bring|don't hesitate)\b/i.test(en))rules.push('这里是请求或指令的开头，省略主语 you，用动词原形；please 表示礼貌。');
if(/\bapplication for accommodation\b/i.test(en))rules.unshift('application for accommodation 表示“住宿申请”；application for ＋ 名词，说明申请的内容。');
const split='';
return [r['本题知识点'],'拆开理解：'+breakdown(en)+'。\n'+split+rules.slice(0,3).join('\n')]
}
window.WMRS129Annotations={...window.WMRS129Annotations,grammarFor};
})();
