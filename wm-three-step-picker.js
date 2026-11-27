/* V64.96 三级学习范围选择器：学段 → 年级 → 课次。
 * 不替换原控件，只在原阶段下拉前插入两级代理下拉，仍由原下拉驱动原有逻辑。
 * 第一级选全部 → 后两级置灰显示「阶段汇总／年级汇总」；
 * 第二级选阶段汇总 → 第三级置灰显示「年级汇总」；
 * 选到具体年级则三级全亮，第三级可选具体课次。 */
(() => {
  'use strict';
  const FALLBACK = { kindergarten: '幼儿园', primary: '小学', junior: '初中', senior: '高中', university: '大学', postgraduate: '研究生' };

  function stageSelect() {
    return document.getElementById('category') || document.getElementById('stage');
  }

  function buildGroups(stage) {
    const groups = [], map = new Map();
    for (const option of [...stage.options]) {
      const m = /^([a-z]+)-(summary|\d+)$/.exec(option.value);
      if (!m) continue;
      const key = m[1];
      if (!map.has(key)) {
        const group = { key, label: FALLBACK[key] || key, summaryValue: '', grades: [] };
        map.set(key, group);
        groups.push(group);
      }
      const group = map.get(key);
      if (m[2] === 'summary') {
        group.summaryValue = option.value;
        const label = option.text.replace(/阶段汇总$/, '').trim();
        if (label) group.label = label;
      } else {
        const text = option.text;
        group.grades.push({ value: option.value, text: text.startsWith(group.label) ? text.slice(group.label.length) : text });
      }
    }
    return groups;
  }

  function setup() {
    const stage = stageSelect();
    if (!stage || stage.tagName !== 'SELECT' || stage.options.length < 3) return;
    const row = stage.closest('.study-category-row');
    if (!row) return;
    if (row.querySelector('.wm-step-stage')) return;

    const groups = buildGroups(stage);
    if (!groups.length) return;

    const l1 = document.createElement('select');
    const l2 = document.createElement('select');
    l1.className = 'wm-step-select wm-step-stage';
    l2.className = 'wm-step-select wm-step-grade';
    l1.setAttribute('aria-label', '学段 Stage');
    l2.setAttribute('aria-label', '年级 Grade');

    const option = (value, text) => { const o = document.createElement('option'); o.value = value; o.textContent = text; return o; };
    l1.append(option('all', '全部阶段'));
    groups.forEach(group => l1.append(option(group.key, group.label)));

    stage.style.display = 'none';
    stage.setAttribute('aria-hidden', 'true');
    stage.before(l1);
    l1.after(l2);

    const lesson = () => document.getElementById('lesson-number');
    let applying = false;

    function fillGrades() {
      const key = l1.value;
      const group = groups.find(g => g.key === key);
      const previous = l2.value;
      l2.replaceChildren();
      if (!group) {
        l2.append(option('summary', '阶段汇总'));
        l2.disabled = true;
        l2.value = 'summary';
        return;
      }
      l2.append(option('summary', '阶段汇总'));
      group.grades.forEach(g => l2.append(option(g.value, g.text)));
      l2.disabled = false;
      l2.value = group.grades.some(g => g.value === previous) ? previous : 'summary';
    }

    function applyDisabled() {
      const select = lesson();
      const allStages = l1.value === 'all';
      if (allStages) {
        l2.disabled = true;
        l2.value = 'summary';
      }
      if (!select) return;
      const locked = allStages || l2.value === 'summary';
      select.classList.toggle('wm-step-locked', locked);
      select.disabled = locked;
      if (locked) {
        if (select.value !== 'all') {
          select.value = 'all';
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }

    function push(value) {
      applying = true;
      stage.value = value;
      stage.dispatchEvent(new Event('change', { bubbles: true }));
      applying = false;
      setTimeout(applyDisabled, 0);
    }

    function syncFromStage() {
      const value = stage.value;
      if (value === 'all-stages') {
        l1.value = 'all';
      } else {
        const m = /^([a-z]+)-/.exec(value);
        l1.value = m ? m[1] : 'all';
      }
      fillGrades();
      if (/^[a-z]+-summary$/.test(value)) l2.value = 'summary';
      else if (/^[a-z]+-\d+$/.test(value)) l2.value = value;
      applyDisabled();
    }

    l1.addEventListener('change', () => {
      if (applying) return;
      if (l1.value === 'all') {
        fillGrades();
        push('all-stages');
        return;
      }
      fillGrades();
      const group = groups.find(g => g.key === l1.value);
      push(l2.value === 'summary' ? group.summaryValue : l2.value);
    });

    l2.addEventListener('change', () => {
      if (applying) return;
      const group = groups.find(g => g.key === l1.value);
      if (!group) return;
      push(l2.value === 'summary' ? group.summaryValue : l2.value);
    });

    stage.addEventListener('change', () => {
      if (applying) return;
      syncFromStage();
    });

    syncFromStage();
    setTimeout(applyDisabled, 0);

    /* 页面切换练习类别时会重建下拉，这里保证代理控件跟着重建 */
    setInterval(() => {
      const current = stageSelect();
      const host = current && current.closest('.study-category-row');
      if (!current || !host || !current.isConnected) return;
      if (!host.querySelector('.wm-step-stage')) setup();
    }, 1200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
  window.addEventListener('load', setup);
  window.WMThreeStepPicker = { refresh: setup };
})();
