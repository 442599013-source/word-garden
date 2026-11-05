/* Annotation overlay: correct explanations without rewriting course batches. */
(()=>{'use strict';
// Correct confirmed annotation defects in an overlay; keep uploaded English and answers byte-for-byte.
const grammarCorrections={
 '8:3':['现在完成进行时','完整原句中的 has been rising 表示“一直在增加”，结构是 has + been + 动词-ing，为现在完成进行时。当前片段若尚未出现 been rising，此处是全句结构预习。'],
 '14:2':['最高级与不定式','完整原句中的 the best time 表示“最佳时间”；to visit Canada 修饰 time，说明“做什么的时间”。during 是介词，不能因为结尾字母是 ing 就判成进行时。'],
 '61:2':['现在进行时','完整原句中的 Newspapers + are reporting 表示“报纸正在报道”，复数主语搭配 are。当前开头片段尚未补齐谓语，此处预习完整结构。'],
 '88:3':['关系从句中的现在进行时','完整原句中的 which is running overnight 修饰 snack machine；is + running 表示运行状态。前面的 will close 是将来表达，不是进行时。'],
 '90:2':['现在进行时','完整原句中的 Newspapers + are reporting 表示“报纸正在报道”。当前片段若只到 are，需继续加上 reporting 才构成完整进行时结构。'],
 '92:2':['现在分词修饰与将来计划','visiting 修饰 professor，表示“来访的教授”，不是独立谓语。完整原句 is going to give 表示“将要举办”，结构为 be going to + 动词原形。']
};
function grammarFor(r){const corrected=grammarCorrections[r['关卡']+':'+r['小题']];if(corrected)return corrected;let text=r['语法或词汇解释'];const mention=text.match(/注意本题出现的结构：([^。]+)/);if(mention&&/^[a-zA-Z' ]+$/.test(mention[1])&&!r['输入标准答案'].toLowerCase().includes(mention[1].toLowerCase()))text='完整原句语法预习（当前片段尚未出现该表达）：\n'+text.replace('注意本题出现的结构：','完整原句包含：');return [r['本题知识点'],text]}
window.WMRS129Annotations={grammarFor,grammarCorrections};
})();
