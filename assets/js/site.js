/* noroll.studio — desktop portfolio
   Plain JS, no build step. Data lives in data.js. */
(() => {
  const D = window.NOROLL;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const desktop = $('#desktop');
  const layer = $('#windows');
  const isMobile = () => matchMedia('(max-width: 760px)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Vimeo thumbnails come from Vimeo's own oEmbed (CORS-enabled); gradient until they arrive
  const thumbs = {};
  const vimeoThumb = id => thumbs[id] || '';
  const fallbackBg = (seed) => {
    const hues = [152, 210, 28, 330, 260, 190];
    const h = hues[seed.length % hues.length];
    return `linear-gradient(135deg, hsl(${h} 45% 32%), hsl(${(h + 40) % 360} 40% 18%))`;
  };
  const bg = (url, seed) => `url("${url}"), ${fallbackBg(seed)}`;

  /* ---------------- wallpaper + clock ---------------- */
  $('.wallpaper').style.backgroundImage = `url("${D.owner.wallpaper}")`;
  const clock = $('#clock');
  const tick = () => {
    clock.textContent = new Date().toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).replace(',', '');
  };
  tick(); setInterval(tick, 15000);

  /* ---------------- desktop icons ---------------- */
  const all = [
    ...D.cinematic.map(p => ({ ...p, kind: 'cinematic' })),
    ...D.product.filter(p => !p.draft).map(p => ({ ...p, kind: 'product' })),
  ];
  const byId = Object.fromEntries(all.map(p => [p.id, p]));

  function caption(text, x, y, kind) {
    const el = document.createElement('div');
    el.className = 'desk-caption';
    el.dataset.kind = kind;
    el.textContent = text;
    el.style.left = x + '%'; el.style.top = y + '%';
    desktop.appendChild(el);
  }

  function folderSvg(color) {
    return `<svg class="folder-svg" viewBox="0 0 70 56" aria-hidden="true">
      <path d="M2 8a4 4 0 0 1 4-4h18l5 5h35a4 4 0 0 1 4 4v3H2z" fill="${color}" opacity=".85"/>
      <rect x="2" y="13" width="66" height="41" rx="4" fill="${color}"/>
      <rect x="2" y="13" width="66" height="4" fill="#fff" opacity=".25"/></svg>`;
  }

  function addIcon({ id, label, thumbStyle, cls, x, y, kind, open }) {
    const el = document.createElement('div');
    el.className = `icon ${cls || ''}`;
    el.dataset.kind = kind;
    el.dataset.id = id;
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Open ${label}`);
    el.innerHTML = `<div class="icon__thumb"></div><div class="icon__label">${esc(label)}</div>`;
    const thumb = el.firstElementChild;
    if (typeof thumbStyle === 'string' && thumbStyle.startsWith('<')) thumb.innerHTML = thumbStyle;
    else thumb.style.backgroundImage = thumbStyle;
    el.style.left = `calc(${x}% - 58px)`;
    el.style.top = `calc(${y}% - 10px)`;
    desktop.appendChild(el);
    makeIconInteractive(el, open);
    return el;
  }

  caption('Cinematic', 4, 4, 'cinematic');
  caption('Product design', 64, 4, 'product');

  addIcon({ id: 'folder-cinematic', label: 'Cinematic', kind: 'cinematic', cls: 'icon--folder', thumbStyle: folderSvg('#3f8f6e'), x: 41, y: 10, open: () => openFolder('cinematic') });
  addIcon({ id: 'folder-product', label: 'Product Design', kind: 'product', cls: 'icon--folder', thumbStyle: folderSvg('#4a83e6'), x: 55, y: 10, open: () => openFolder('product') });

  all.forEach(p => addIcon({
    id: p.id,
    label: p.title,
    kind: p.kind,
    cls: p.kind === 'cinematic' ? 'icon--video' : '',
    thumbStyle: bg(p.kind === 'cinematic' ? vimeoThumb(p.vimeo) : p.cover, p.id),
    x: p.x, y: p.y,
    open: () => openProject(p.id),
  }));

  D.cinematic.forEach(p => {
    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent('https://vimeo.com/' + p.vimeo)}&width=640`)
      .then(r => r.ok ? r.json() : null)
      .then(j => {
        if (!j || !j.thumbnail_url) return;
        thumbs[p.vimeo] = j.thumbnail_url;
        $$(`[data-id="${p.id}"] .icon__thumb, [data-thumb="${p.id}"]`).forEach(t => { t.style.backgroundImage = bg(j.thumbnail_url, p.id); });
      })
      .catch(() => {});
  });

  /* select / drag / double-click */
  let selected = null;
  function select(el) {
    if (selected) selected.classList.remove('is-selected');
    selected = el;
    if (el) el.classList.add('is-selected');
  }
  desktop.addEventListener('pointerdown', e => { if (e.target === desktop) select(null); });

  function makeIconInteractive(el, open) {
    let start = null, moved = false, lastTap = 0;
    el.addEventListener('pointerdown', e => {
      if (isMobile()) return;
      select(el);
      start = { x: e.clientX, y: e.clientY, l: el.offsetLeft, t: el.offsetTop };
      moved = false;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', e => {
      if (!start) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.hypot(dx, dy) < 4) return;
      moved = true;
      el.classList.add('is-dragging');
      const maxL = desktop.clientWidth - el.offsetWidth, maxT = desktop.clientHeight - el.offsetHeight - 70;
      el.style.left = Math.max(0, Math.min(maxL, start.l + dx)) + 'px';
      el.style.top = Math.max(0, Math.min(maxT, start.t + dy)) + 'px';
    });
    el.addEventListener('pointerup', () => {
      el.classList.remove('is-dragging');
      start = null;
    });
    // desktop: double-click opens; touch/mobile: single tap opens
    el.addEventListener('dblclick', () => { if (!moved) open(); });
    el.addEventListener('click', e => {
      if (isMobile() || e.pointerType === 'touch') { open(); return; }
      const now = Date.now();
      if (now - lastTap < 350 && !moved) { /* dblclick handles it */ }
      lastTap = now;
    });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  }

  /* ---------------- filters ---------------- */
  function setFilter(kind) {
    $$('.menubar__item[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === kind)));
    $$('.icon, .desk-caption').forEach(el => el.classList.toggle('is-dimmed', kind !== 'all' && el.dataset.kind !== kind));
  }
  $$('.menubar__item[data-filter]').forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));

  /* ---------------- windows ---------------- */
  const open = new Map();
  let z = 200, cascade = 0;

  function focusWin(win) { win.style.zIndex = ++z; }

  function createWindow({ key, title, body, cls = '', raw = false, side = 'left' }) {
    if (open.has(key)) { const w = open.get(key); focusWin(w); return w; }
    const win = document.createElement('section');
    win.className = `win ${cls}`;
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', title.replace(/<[^>]+>/g, ''));
    win.innerHTML = `
      <div class="win__bar">
        <div class="lights"><button class="l-close" aria-label="Close"></button><button class="l-min" aria-label="Minimise"></button><button class="l-max" aria-label="Zoom"></button></div>
        <div class="win__title">${title}</div>
      </div>
      ${raw ? body : `<div class="win__body">${body}</div>`}`;
    layer.appendChild(win);

    // position: cascade from top-left-ish, centred on small screens
    const w = win.offsetWidth, h = win.offsetHeight;
    const vw = innerWidth, vh = innerHeight;
    const step = (cascade++ % 6) * 28;
    const anchor = side === 'right' ? vw - w - vw * 0.08 - step : vw * 0.08 + step;
    let left = Math.max(12, Math.min(vw - w - 12, anchor));
    let top = Math.max(40, Math.min(vh - h - 90, 56 + step));
    if (cls.includes('win--dialog')) { left = (vw - w) / 2 + (Math.random() * 120 - 60); top = vh * 0.28 + (Math.random() * 80 - 40); }
    win.style.left = left + 'px';
    win.style.top = top + 'px';
    focusWin(win);

    win.addEventListener('pointerdown', () => focusWin(win));
    $('.l-close', win).addEventListener('click', () => closeWindow(key));
    $('.l-min', win).addEventListener('click', () => closeWindow(key));
    $('.l-max', win).addEventListener('click', () => win.classList.toggle('win--wide'));
    dragWindow(win, $('.win__bar', win));
    open.set(key, win);
    markDock(key, true);
    return win;
  }

  function closeWindow(key) {
    const win = open.get(key);
    if (!win) return;
    open.delete(key);
    markDock(key, false);
    win.classList.add('is-closing');
    win.addEventListener('animationend', () => win.remove(), { once: true });
    setTimeout(() => win.remove(), 250);
    if (location.hash.slice(1) === key) history.replaceState(null, '', location.pathname);
  }

  function dragWindow(win, handle) {
    let s = null;
    handle.addEventListener('pointerdown', e => {
      if (e.target.closest('.lights') || isMobile()) return;
      s = { x: e.clientX, y: e.clientY, l: win.offsetLeft, t: win.offsetTop };
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener('pointermove', e => {
      if (!s) return;
      win.style.left = Math.max(-win.offsetWidth + 80, Math.min(innerWidth - 80, s.l + e.clientX - s.x)) + 'px';
      win.style.top = Math.max(28, Math.min(innerHeight - 40, s.t + e.clientY - s.y)) + 'px';
    });
    handle.addEventListener('pointerup', () => { s = null; });
  }

  function markDock(key, on) {
    const map = { 'folder-cinematic': 'folder-cinematic', 'folder-product': 'folder-product', about: 'about', photos: 'photos', contact: 'contact', bin: 'bin' };
    const b = map[key] && $(`.dock [data-open="${map[key]}"]`);
    if (b) b.classList.toggle('is-open', on);
  }

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !open.size) return;
    const top = [...open.entries()].sort((a, b) => b[1].style.zIndex - a[1].style.zIndex)[0];
    closeWindow(top[0]);
  });

  /* ---------------- window contents ---------------- */
  const list = items => `<ul class="dash-list">${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  const details = (label, inner, isOpen = true) => `<details class="disclosure" ${isOpen ? 'open' : ''}><summary>${label}:</summary><div class="disclosure__body">${inner}</div></details>`;

  function openProject(id) {
    const p = byId[id];
    if (!p) return;
    history.replaceState(null, '', '#' + id);
    const head = `<div class="info-head"><div class="info-head__thumb" data-thumb="${p.id}" style='background-image:${bg(p.kind === 'cinematic' ? vimeoThumb(p.vimeo) : p.cover, p.id)}'></div><div><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}</p></div></div>`;
    const meta = `<dl class="kv"><dt>Type:</dt><dd>${esc(p.type)}</dd><dt>Client:</dt><dd>${esc(p.client)}</dd></dl>`;

    let body;
    if (p.kind === 'cinematic') {
      body = `${head}
        <div class="video"><iframe src="https://player.vimeo.com/video/${p.vimeo}?title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="${esc(p.title)}"></iframe></div>
        ${details('Details', meta)}
        ${details('About', `<div class="info-text"><p>${esc(p.text)}</p></div>`)}
        <p class="rights">Produced for Czech Video Center (Fameplay) as a freelancer. All rights belong to Czech Video Center a.s.</p>`;
    } else {
      const imgs = p.images.map((im, i) => {
        const o = typeof im === 'string' ? { src: im } : im;
        return `<img src="${o.src}" alt="${esc(o.alt || p.title + ' screen ' + (i + 1))}" loading="lazy" data-zoom${o.strip ? ' class="is-strip"' : ''}>`;
      }).join('');
      const facts = p.facts ? `<div class="facts">${p.facts.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>` : '';
      const quote = p.quote ? `<blockquote class="quote"><p>“${esc(p.quote.text)}”</p><cite>${esc(p.quote.who)}</cite></blockquote>` : '';
      body = `${head}
        ${facts}
        ${p.problem ? `<div class="info-text"><p class="lead"><b>The problem.</b> ${esc(p.problem)}</p></div>` : ''}
        <div class="info-text"><p>${esc(p.text)}</p></div>
        ${p.approach ? details('What I did', list(p.approach)) : ''}
        ${p.decisions ? details('Key decisions', list(p.decisions)) : ''}
        ${p.outcome ? details('Outcome', list(p.outcome)) : ''}
        ${quote}
        ${details('Details', meta, false)}
        ${p.role ? details('My role', list(p.role), false) : ''}
        ${p.challenges ? details('Product challenges', list(p.challenges), false) : ''}
        ${details('Preview', `<div class="preview-grid">${imgs}</div>`)}`;
    }
    const win = createWindow({ key: id, title: `Information about: <b>${esc(p.title)}</b>`, body, cls: p.kind === 'product' ? 'win--wide' : '', side: p.kind === 'product' ? 'left' : 'right' });
    $$('img', win).forEach(img => img.addEventListener('error', () => {
      const ph = document.createElement('div');
      ph.className = 'ph'; ph.textContent = 'Image coming soon';
      img.replaceWith(ph);
    }));
  }

  function openFolder(kind) {
    const items = all.filter(p => p.kind === kind);
    const rows = items.map(p => `
      <button class="finder__row" data-go="${p.id}">
        <span class="finder__thumb" data-thumb="${p.id}" style='background-image:${bg(kind === 'cinematic' ? vimeoThumb(p.vimeo) : p.cover, p.id)}'></span>
        <span>${esc(p.title)}<br><small>${esc(p.subtitle)}</small></span>
        <small>${kind === 'cinematic' ? 'Video' : 'Case study'}</small>
      </button>`).join('');
    const intro = kind === 'cinematic'
      ? `<div class="info-text" style="margin-bottom:10px"><p>${esc(D.about.fameplay)}</p></div>`
      : `<div class="info-text" style="margin-bottom:10px"><p>Product design lead with a decade around products: design teams, research, design systems and the stubborn bits between business and engineering. Kiwi.com, Keboola, SinnerSchrader.</p></div>`;
    const win = createWindow({
      key: 'folder-' + kind,
      title: `<b>${kind === 'cinematic' ? 'Cinematic' : 'Product Design'}</b> — ${items.length} items`,
      body: intro + `<div class="finder">${rows}</div>`,
    });
    $$('[data-go]', win).forEach(b => b.addEventListener('click', () => openProject(b.dataset.go)));
    setFilter(kind);
  }

  function openAbout(tab = 'about') {
    const A = D.about;
    const panes = {
      about: `<p>${A.intro.map(esc).join('</p><p>')}</p>
        <p style="margin-top:14px"><b>I can do…</b></p>
        <ul class="check-list">${A.canDo.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
        <div class="emmy"><b>Fameplay.</b> ${esc(A.fameplay)}</div>`,
      cv: A.cv.map(r => `<div class="cv-row"><span>${esc(r.when)}</span><div>${esc(r.what)}<small>${esc(r.where)}</small></div></div>`).join('') +
        `<p style="margin-top:12px"><a href="${D.owner.linkedin}" target="_blank" rel="noopener">Full history on LinkedIn ↗</a></p>`,
      refs: A.references.map(r => `<blockquote class="quote"><p>“${esc(r.text)}”</p><cite>${esc(r.who)}<small>${esc(r.role)}</small></cite></blockquote>`).join('') +
        `<p style="margin-top:12px;color:var(--ink-soft)">Full reference letters available on request.</p>`,
      tools: `<p>From ComfyUI to Weavy and all the top-notch models. Tools are the crew. Direction is the job.</p><div class="tags">${A.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div>`,
    };
    const tabs = [['about', 'About me', ''], ['cv', 'CV', String(new Date().getFullYear() - 2018) + ' yrs'], ['refs', 'References', A.references.length], ['tools', 'Tools', A.tools.length]];
    const body = `<div class="split">
      <div class="split__side" role="tablist">${tabs.map(([k, l, n]) => `<button role="tab" data-tab="${k}" aria-selected="${k === tab}">${l}<small>${n}</small></button>`).join('')}</div>
      <div class="split__main" id="about-pane">${panes[tab]}</div></div>`;
    const win = createWindow({ key: 'about', title: `Information about: <b>${esc(D.owner.name)}</b>`, body, raw: true, cls: 'win--wide' });
    $$('[data-tab]', win).forEach(b => b.addEventListener('click', () => {
      $$('[data-tab]', win).forEach(x => x.setAttribute('aria-selected', String(x === b)));
      $('#about-pane', win).innerHTML = panes[b.dataset.tab];
    }));
  }

  function openPhotos() {
    const shots = ['assets/img/portrait-1.jpg', 'assets/img/portrait-2.jpg', 'assets/img/portrait-3.jpg'];
    const body = `<div class="info-head"><div class="info-head__thumb" style="background:#fff"><span class="ic ic--photos" style="width:46px;height:46px;box-shadow:none"></span></div><div><h2>Portraits</h2><p>The director behind the dice</p></div></div>
      <div class="photo-strip">${shots.map(s => `<img src="${s}" alt="Portrait of ${esc(D.owner.name)}" loading="lazy" data-zoom>`).join('')}
      <img class="wide" src="assets/img/portrait-4.jpg" alt="Cinematic portrait of ${esc(D.owner.name)}" loading="lazy" data-zoom></div>`;
    createWindow({ key: 'photos', title: 'Information about: <b>Portraits</b>', body });
  }

  function openContact() {
    const body = `<div class="info-head"><div class="info-head__thumb" style="background:none"><span class="ic ic--mail" style="width:46px;height:46px">✉</span></div><div><h2>New message</h2><p>To: ${esc(D.owner.name)}</p></div></div>
      <form class="form" id="contact-form">
        <label>What do you need directed?
          <select name="type"><option>AI commercial / spot</option><option>Product design (UX/UI)</option><option>Short-form content</option><option>B2B video</option><option>Website</option><option>Something else</option></select></label>
        <label>Your email<input type="email" name="email" required autocomplete="email"></label>
        <label>Message<textarea name="message" required placeholder="The idea, the deadline, the mood. I dunno is also a mood."></textarea></label>
        <input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off">
        <button class="btn" type="submit">Send</button>
        <p class="form__note" aria-live="polite"></p>
      </form>`;
    const win = createWindow({ key: 'contact', title: '<b>New Message</b>', body, cls: 'win--small' });
    const form = $('#contact-form', win);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const note = $('.form__note', form), btn = $('.btn', form);
      btn.disabled = true; note.textContent = 'Sending…';
      try {
        const r = await fetch(D.owner.formspree, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!r.ok) throw new Error();
        form.reset(); note.textContent = 'Sent. I’ll get back to you soon.';
      } catch {
        note.textContent = 'That didn’t go through. Try LinkedIn instead.';
      } finally { btn.disabled = false; }
    });
  }

  function openBin() {
    const body = `<div class="info-head"><div class="info-head__thumb" style="background:none"><span class="ic ic--bin" style="width:46px;height:46px"></span></div><div><h2>Bin of rejected rolls</h2><p>Unrelated, yet educational</p></div></div>
      <div class="info-text">
        <p>Every shot in this portfolio had siblings. Most of them had seven fingers.</p>
        <p>Also in here: one horse with five legs, a coffee cup that turned into a cat halfway through the pour, and roughly 2,400 generations that were “almost there”.</p>
        <p>That’s the difference between rolling the dice and directing. You don’t ship the bin.</p>
      </div>`;
    createWindow({ key: 'bin', title: 'Information about: <b>Bin</b>', body });
  }

  const jokes = {
    comfy: ['ComfyUI', 'ic--comfy', 'Cf', 'Out of VRAM. Your 47 nodes have left the chat. The noodles are still there though.', 'Restart and pray'],
    mj: ['Midjourney', 'ic--mj', 'Mj', 'Job queued. Estimated wait: the rest of your weekend.', 'Upscale anyway'],
    figma: ['Figma', 'ic--fg', 'Fg', 'Someone renamed “Final_v7_REAL” to “Final_v8”. Engineering is already building v6.', 'Accept fate'],
    dice: ['Random generate', 'ic--dice', '⚄', 'You rolled a 3. The client wanted a 6. This is why there is a director.', 'Hire one'],
  };
  function openJoke(k) {
    const [app, cls, glyph, text, cta] = jokes[k];
    const key = 'joke-' + k + '-' + Date.now();
    const win = createWindow({
      key, title: app, cls: 'win--dialog', raw: true,
      body: `<div class="dialog"><span class="ic ${cls}">${glyph}</span><div>${esc(text)}</div><div class="dialog__actions"><button class="btn">${esc(cta)}</button></div></div>`,
    });
    $('.dialog .btn', win).addEventListener('click', () => closeWindow(key));
  }

  /* ---------------- wiring ---------------- */
  const openers = {
    about: () => openAbout(),
    photos: openPhotos,
    contact: openContact,
    bin: openBin,
    'folder-cinematic': () => openFolder('cinematic'),
    'folder-product': () => openFolder('product'),
  };
  $$('[data-open]').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.open;
    if (open.has(k)) closeWindow(k); else openers[k]();
  }));
  $$('[data-joke]').forEach(b => b.addEventListener('click', () => openJoke(b.dataset.joke)));

  // lightbox for preview images
  document.addEventListener('click', e => {
    const img = e.target.closest('img[data-zoom]');
    if (!img) return;
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<img src="${img.currentSrc || img.src}" alt="${esc(img.alt)}">`;
    lb.addEventListener('click', () => lb.remove());
    document.body.appendChild(lb);
  });

  // deep links: noroll.studio/#keboola
  const hash = location.hash.slice(1);
  if (byId[hash]) openProject(hash);
  else if (openers[hash]) openers[hash]();
})();
