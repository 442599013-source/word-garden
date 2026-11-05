/* Transcript equivalence for voice input only. Never use for spelling answers. */
(()=>{'use strict';
const basic=s=>String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
const small=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function numberWords(n){n=Number(n);if(n<20)return small[n];if(n<100)return tens[Math.floor(n/10)]+(n%10?' '+small[n%10]:'');if(n<1000)return small[Math.floor(n/100)]+' hundred'+(n%100?' '+numberWords(n%100):'');return String(n).split('').map(d=>small[+d]).join(' ')}
function normalize(s){return basic(String(s??'').replace(/%/g,' percent').replace(/\b(\d{1,2}):00\b/g,(_,h)=>numberWords(h)+" o'clock").replace(/\b(\d{1,2}):(\d{2})\b/g,(_,h,m)=>numberWords(h)+' '+(m[0]==='0'?'oh '+numberWords(m):numberWords(m))).replace(/\b\d+\b/g,numberWords).replace(/\bo[’']?\s*clock\b/gi,"o'clock").replace(/\b(\w+)-(?=\w)/g,'$1 '));}
// Explicit homophones only; no edit-distance or approximate-sound matching.
const groups=['write right rite','hear here','see sea','to too two','for four fore','one won','no know','knew new','there their they\'re','your you\'re ur','its it\'s','our hour','by buy bye','be bee','week weak','meet meat','peace piece','whole hole','wait weight','wear where ware','weather whether','which witch','would wood','sun son','some sum','night knight','plain plane','pair pear pare','break brake','blue blew','road rode','sent scent cent','sale sail','mail male','made maid','eight ate','allowed aloud','board bored','course coarse','principal principle','stationary stationery','morning mourning','through threw','waist waste','flour flower','fair fare'];
const words=new Map();groups.forEach((g,i)=>g.split(' ').forEach(w=>words.set(w,i)));
// Exact phrase equivalences only: no fuzzy matching, word deletion, or transitive
// expansion ("he is" and "he has" must not become equivalent through "he's").
const forms={"I'm":["I am"],"you're":["you are"],"we're":["we are"],"they're":["they are"],"he's":["he is","he has"],"she's":["she is","she has"],"it's":["it is","it has"],"that's":["that is","that has"],"there's":["there is","there has"],"here's":["here is"],"what's":["what is","what has"],"who's":["who is","who has"],"where's":["where is"],"how's":["how is"],"I've":["I have"],"you've":["you have"],"we've":["we have"],"they've":["they have"],"I'll":["I will"],"you'll":["you will"],"he'll":["he will"],"she'll":["she will"],"it'll":["it will"],"we'll":["we will"],"they'll":["they will"],"I'd":["I would","I had"],"you'd":["you would","you had"],"he'd":["he would","he had"],"she'd":["she would","she had"],"we'd":["we would","we had"],"they'd":["they would","they had"],"don't":["do not"],"doesn't":["does not"],"didn't":["did not"],"isn't":["is not"],"aren't":["are not"],"wasn't":["was not"],"weren't":["were not"],"haven't":["have not"],"hasn't":["has not"],"hadn't":["had not"],"can't":["cannot","can not"],"couldn't":["could not"],"won't":["will not"],"wouldn't":["would not"],"shouldn't":["should not"],"mustn't":["must not"],"needn't":["need not"],"let's":["let us"]};
const rules=[];
function pair(a,b){const x=normalize(a).split(' '),y=normalize(b).split(' ');rules.push([x,y],[y,x])}
for(const [contracted,expanded]of Object.entries(forms))for(const text of expanded)pair(contracted,text);
// Common ASR expansions of homophones. These are voice-only and target-aligned.
for(const [a,b]of [['your','you are'],['ur','you are'],['their','they are'],['there','they are'],['its','it is'],['whose','who is']])pair(a,b);
const starts=new Map();for(const rule of rules){const key=rule[0][0];if(!starts.has(key))starts.set(key,[]);starts.get(key).push(rule)}
function equivalent(actual,expected){const left=normalize(actual),right=normalize(expected);if(!left||!right)return false;const a=left.split(' '),b=right.split(' '),seen=new Set(),queue=[[0,0]];
 const fits=(source,at,phrase)=>phrase.every((word,k)=>source[at+k]===word);
 for(let at=0;at<queue.length;at++){const [i,j]=queue[at],key=i+':'+j;if(seen.has(key))continue;seen.add(key);if(i===a.length&&j===b.length)return true;if(i>=a.length||j>=b.length)continue;
 if(a[i]===b[j]||(words.has(a[i])&&words.get(a[i])===words.get(b[j])))queue.push([i+1,j+1]);
 for(const [x,y]of starts.get(a[i])||[])if(fits(a,i,x)&&fits(b,j,y))queue.push([i+x.length,j+y.length]);
 }return false}
function resolve(actual,expected){return equivalent(actual,expected)?String(expected):String(actual||'')}
window.WMSpeechMatch={equivalent,resolve,normalize};
})();
