
  /* ── Boot line typewriter ───────────────────────────────── */
  const msg = 'Initializing git switcher...';
  const el  = document.getElementById('boot-line');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let i = 0;
    el.textContent = '';
    const tick = setInterval(() => {
      el.textContent += msg[i++];
      if (i >= msg.length) clearInterval(tick);
    }, 38);
  } else {
    el.textContent = msg;
  }

  /* ── Copy card button ───────────────────────────────────── */
  function copyCmd(btn) {
    const cmd = btn.dataset.cmd;
    navigator.clipboard.writeText(cmd).then(() => {
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1800);
    });
  }

  /* ── Copy full block ─────────────────────────────────────── */
  function copyBlock(block) {
    const lines = [...block.querySelectorAll('.ct')].map(el => el.textContent.trim());
    const text  = lines.join('\n');
    const label = block.querySelector('.copy-label');
    navigator.clipboard.writeText(text).then(() => {
      block.classList.add('copied');
      if (label) label.textContent = label.dataset.copied;
      setTimeout(() => {
        block.classList.remove('copied');
        if (label) label.textContent = label.dataset.default;
      }, 1800);
    });
  }
