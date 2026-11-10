/* V63.1 HD angel: one transparent six-pose sheet, no looping wand spell.
 * Only a successful Magic Match Hint triggers the two casting poses.
 * Existing companion selection, game logic, scores and flight are unchanged.
 */
(() => {
  'use strict';
  const C = window.WMCompanions;
  if (!C || C.__goldyHDInstalled) return;
  C.__goldyHDInstalled = true;
  const ID = 'golden_staff_angel';
  const SHEET = 'goldy-hd-angel-frames.png?v=63.1';
  const FRAME_SIZE = 700;
  const CAST_MS = 1600;
  const originalSetImage = C.setImage;
  // The original V63 script registers this companion. Keep compatibility even
  // when a browser has cached a previous scripts list.
  if (!C.catalog.some(c => c.id === ID)) {
    C.catalog.push({ id: ID, name: 'Golden Guardian 金耀守护天使', kind: 'baby' });
  }

  let frameUrls = null;
  const ready = new Promise((resolve, reject) => {
    const sheet = new Image();
    sheet.onload = () => {
      try {
        const out = [];
        for (let n = 0; n < 6; n++) {
          const canvas = document.createElement('canvas');
          canvas.width = FRAME_SIZE;
          canvas.height = FRAME_SIZE;
          const context = canvas.getContext('2d');
          context.drawImage(sheet, (n % 3) * FRAME_SIZE,
            Math.floor(n / 3) * FRAME_SIZE, FRAME_SIZE, FRAME_SIZE,
            0, 0, FRAME_SIZE, FRAME_SIZE);
          out.push(canvas.toDataURL('image/webp', 0.94));
        }
        frameUrls = out;
        resolve(out);
      } catch (error) { reject(error); }
    };
    sheet.onerror = reject;
    sheet.src = SHEET;
  });

  C.setImage = function (img, id, action = 'idle') {
    if (!img) return;
    if (id !== ID) {
      delete img.dataset.wmHdAngel;
      delete img.dataset.wmHdFrame;
      return originalSetImage.call(this, img, id, action);
    }
    img.dataset.character = ID;
    img.dataset.wmHdAngel = '1';
    img.dataset.media = 'goldy-hd-angel';
    img.removeAttribute('data-idle-character');
    img.draggable = false;
    img.style.visibility = '';
    if (frameUrls) {
      show(img, 0);
    } else {
      img.style.opacity = '0';
      ready.then(() => {
        if (img.isConnected && img.dataset.wmHdAngel === '1') {
          show(img, 0);
          img.style.opacity = '';
        }
      }).catch(() => {
        // If the HD asset is missing, restore the V63 GIF instead of leaving
        // the baby invisible; this is a loading fallback only.
        if (img.isConnected && img.dataset.wmHdAngel === '1') {
          originalSetImage.call(C, img, ID, action);
          img.style.opacity = '';
        }
      });
    }
  };

  function show(img, frame) {
    if (!frameUrls || img.dataset.wmHdFrame === String(frame)) return;
    img.src = frameUrls[frame];
    img.dataset.wmHdFrame = String(frame);
  }

  // Idle sheet: spread / relaxed wings, short natural closed-eye blink.
  // Casting-only frames 4 and 5 NEVER appear here.
  const idle = [0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 1, 0];
  let step = 0;
  const reduced = () => !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  function tick() {
    if (document.hidden || !frameUrls) return;
    step = (step + 1) % idle.length;
    const now = Date.now();
    document.querySelectorAll('img[data-wm-hd-angel="1"]').forEach(img => {
      const until = Number(img.dataset.wmHdCastUntil || 0);
      if (until > now) {
        const remaining = until - now;
        // Raise wand -> sweep down with a short sparkle arc -> rest.
        show(img, remaining > 850 ? 5 : remaining > 340 ? 4 : 5);
      } else {
        if (until) delete img.dataset.wmHdCastUntil;
        show(img, reduced() ? 0 : idle[step]);
      }
    });
  }
  setInterval(tick, 250);

  // WMMatchEngine.useHint() is the authoritative success/failure decision.
  // Empty result means there is no pair and the game switches batches: no spell.
  const E = window.WMMatchEngine;
  if (E && E.prototype && !E.prototype.__goldyHintHook) {
    E.prototype.__goldyHintHook = true;
    const useHint = E.prototype.useHint;
    E.prototype.useHint = function (...args) {
      const pair = useHint.apply(this, args);
      if (Array.isArray(pair) && pair.length === 2) {
        document.dispatchEvent(new CustomEvent('wm-goldy-hd-cast'));
      }
      return pair;
    };
  }
  document.addEventListener('wm-goldy-hd-cast', () => {
    const stage = document.querySelector('#match-game .match-stage');
    if (!stage) return; // Never cast on the Home page.
    const actor = stage.querySelector('.game-companions .slot-0:not([hidden])');
    if (actor?.dataset.character !== ID) return;
    const until = String(Date.now() + CAST_MS);
    // V59 clones the visible character for hint flight. Animate the flyer,
    // and the source if the flight has not created its clone yet.
    for (const img of [actor.querySelector('img'), ...stage.querySelectorAll('.v57-flyer img')]) {
      if (img?.dataset.wmHdAngel === '1') img.dataset.wmHdCastUntil = until;
    }
    tick();
  });
})();
