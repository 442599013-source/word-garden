/* Local audio makes every tile playable without a web speech service. */
(() => {
  const player = new Audio();
  let token = 0;
  let interrupt;
  function stop() {
    token++;
    player.pause();
    interrupt?.();
    interrupt = undefined;
  }
  async function playAt(rate,...ids) {
    stop();
    const current = token;
    for (const id of ids) {
      if (current !== token) return false;
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}
      const played = await new Promise(resolve => {
        const finish = ok => {
          player.onended = player.onerror = null;
          interrupt = undefined;
          resolve(ok);
        };
        interrupt = () => finish(false);
        player.onended = () => finish(true);
        player.onerror = () => finish(false);
        player.src = 'audio/a1-lesson-1/' + id + '.mp3';
        player.playbackRate = rate;
        player.play().catch(() => { if (current === token) finish(false); });
      });
      if (!played) return false;
    }
    return true;
  }
  window.addEventListener('pagehide',stop);
  window.WMA1Audio = {play:(...ids)=>playAt(1,...ids),playAt,stop};
})();
