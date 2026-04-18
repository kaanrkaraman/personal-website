<script lang="ts">
  import { SITE, ACCENTS, type Lang } from '$lib/site';

  const DEFAULT_ACCENT = 'ansi';
  const DEFAULT_LANG: Lang = 'en';
  const LANGS: readonly Lang[] = ['en', 'de'];

  let lang = $state<Lang>(DEFAULT_LANG);
  let accentId = $state<string>(DEFAULT_ACCENT);
  let blink = $state(true);
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
    try {
      const savedLang = localStorage.getItem('site_lang');
      if (savedLang && savedLang in SITE.i18n) lang = savedLang as Lang;

      const savedAccent = localStorage.getItem('site_accent');
      if (savedAccent && ACCENTS.some(a => a.id === savedAccent)) accentId = savedAccent;
    } catch {}

    const i = setInterval(() => (blink = !blink), 530);
    return () => clearInterval(i);
  });

  $effect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('site_lang', lang);
      localStorage.setItem('site_accent', accentId);
    } catch {}
  });

  const t = $derived(SITE.i18n[lang] ?? SITE.i18n.en);
  const L = $derived(t.labels);
  const loc = $derived(SITE.location[lang] ?? SITE.location.en);
  const accent = $derived(
    (ACCENTS.find(a => a.id === accentId) ?? ACCENTS[0]).value
  );

  const whoamiArt = `
█╗  █╗ ██████╗  ██████╗ ██╗██╗██╗
██║ ██╔╝██╔══██╗██╔══██╗██║██║██║
█████╔╝ ███████║███████║██║██║██║
██╔═██╗ ██╔══██║██╔══██║██║██║██║
██║  ██╗██║  ██║██║  ██║██║██║██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝╚═╝`;

  function slugify(s: string): string {
    return s.toLowerCase().replace(/\s+/g, '-');
  }
</script>

<svelte:head>
  <title>kaan@portfolio:~$</title>
</svelte:head>

<div class="terminal" style:--accent={accent}>
  <div class="topbar">
    <div class="lights">
      <span style="background:#ff5f57"></span>
      <span style="background:#febc2e"></span>
      <span style="background:#28c840"></span>
    </div>
    <div class="title">— kaan@portfolio: ~ — -zsh — 124×48</div>

    <nav class="nav">
      <a href="#about">{L.about}</a>
      <a href="#experience">{L.experience}</a>
      <a href="#papers">{L.papers}</a>
      <a href="#awards">{L.awards}</a>
      <a href="#projects">{L.projects}</a>
      <a href="#writing">{L.writing}</a>
      <a href="#contact">{L.contact}</a>

      <span class="env-label">LANG=</span>
      <div class="lang-pills">
        {#each LANGS as id (id)}
          <button
            class="lang-btn"
            class:active={lang === id}
            onclick={() => (lang = id)}
          >{id}</button>
        {/each}
      </div>
    </nav>
  </div>

  <main class="sheet">
    <div class="prompt">
      <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>whoami --verbose</span>
    </div>
    <pre class="art">{whoamiArt}</pre>
    <div class="kv">
      <span class="key">{L.name}</span><span class="kv-sep">:</span><span class="bright">{SITE.name}</span>
      <span class="key">{L.role}</span><span class="kv-sep">:</span><span>{t.role}</span>
      <span class="key">{L.interests}</span><span class="kv-sep">:</span><span>{t.interests}</span>
      <span class="key">{L.status}</span><span class="kv-sep">:</span><span><span class="accent">●</span> {t.status}</span>
      <span class="key">{L.location}</span><span class="kv-sep">:</span><span>{loc}</span>
    </div>

    <section id="about" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>cat about.md</span>
      </div>
      <div class="card about-card">
        {#each t.about as para (para)}
          <p>{para}</p>
        {/each}
      </div>
    </section>

    <section id="experience" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>git log --author=kaan --pretty=format:'%ad %s' ~/work/</span>
      </div>
      {#each SITE.experience as e (e.org + e.period)}
        <div class="row">
          <div class="row-head">
            <span class="period">{e.period}</span>
            <span class="bright">
              <span class="accent">{e.role}</span>
              <span class="muted"> @ </span>{e.org}
            </span>
          </div>
          <div class="row-desc exp-desc">
            <span class="muted">└─ </span>{e.desc[lang] ?? e.desc.en}
          </div>
        </div>
      {/each}
    </section>

    <section id="papers" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>grep -r 'published' ~/papers/ | sort -k3</span>
      </div>
      {#each SITE.papers as p (p.title)}
        <div class="row">
          <div class="paper-title bright"><span class="muted">[{p.year}]</span> {p.title}</div>
          <div class="paper-meta muted">@ <span class="accent">{p.venue}</span> — {p.authors}</div>
        </div>
      {/each}
    </section>

    <section id="awards" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>cat ~/awards/*.txt | sort -r</span>
      </div>
      {#each SITE.awards as a (a.title)}
        <div class="row">
          <div class="row-head">
            <span class="year">{a.year}</span>
            <span class="bright">
              <span class="accent">★ </span>{a.title}
            </span>
          </div>
          <div class="row-desc award-desc">
            <span class="muted">├─ </span>{a.org}
          </div>
          <div class="row-desc award-desc">
            <span class="muted">└─ </span>{a.desc}
          </div>
        </div>
      {/each}
    </section>

    <section id="projects" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>ls -la ~/projects/</span>
      </div>
      <div class="ls-header muted">
        total {SITE.projects.length} · drwxr-xr-x  kaan  staff
      </div>
      {#each SITE.projects as p (p.title)}
        <a href={p.link} class="proj-row" target="_blank" rel="noopener noreferrer">
          <span class="muted">{p.year}</span>
          <span class="proj-main">
            <span class="accent">{slugify(p.title)}</span><span class="dim">/</span>
            <span class="proj-desc">{p.desc[lang] ?? p.desc.en}</span>
          </span>
          <span class="proj-tech muted">[{p.tech.join(', ')}]</span>
          <span class="bright arrow">→</span>
        </a>
      {/each}
    </section>

    <section id="writing" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>tail -n 10 ~/blog/feed.log</span>
      </div>
      {#each SITE.writing as w (w.title)}
        <a href={w.link} class="write-row" target="_blank" rel="noopener noreferrer">
          <span class="muted">{w.date}</span>
          <span class="dim">[{w.read}]</span>
          <span class="bright">› {w.title}</span>
        </a>
      {/each}
    </section>

    <section id="contact" class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>cat contact.yml</span>
      </div>
      <div class="card contact kv">
        <span class="key">{L.email}</span><span class="kv-sep">:</span><a class="bright" href="mailto:{SITE.email}">{SITE.email}</a>
        <span class="key">{L.github}</span><span class="kv-sep">:</span><a class="accent" href="https://{SITE.github}" target="_blank" rel="noopener noreferrer">https://{SITE.github}</a>
        <span class="key">{L.linkedin}</span><span class="kv-sep">:</span><a class="accent" href="https://{SITE.linkedin}" target="_blank" rel="noopener noreferrer">https://{SITE.linkedin}</a>
        <span class="key">{L.scholar}</span><span class="kv-sep">:</span><a class="accent" href="https://{SITE.scholar}" target="_blank" rel="noopener noreferrer">https://{SITE.scholar}</a>
      </div>
    </section>

    <section class="block">
      <div class="prompt">
        <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>tput setaf --list    {L.colorHint}</span>
      </div>
      <div class="card color-picker">
        <div class="muted picker-head">
          # available accents — current: <span class="accent">{accentId}</span>
        </div>
        <div class="swatches">
          {#each ACCENTS as a, i (a.id)}
            <button
              class="swatch-btn"
              class:active={accentId === a.id}
              onclick={() => (accentId = a.id)}
            >
              <span class="muted cursor">{accentId === a.id ? '▸' : ' '}</span>
              <span class="swatch" style:background={a.swatch}></span>
              <span style:color={a.swatch}>{String(i).padStart(2, '0')}</span>
              <span class:bright={accentId === a.id}>{a.id}</span>
            </button>
          {/each}
        </div>
        <div class="export-line muted">
          $ export ACCENT=<span class="accent">{accentId}</span><span
            class="caret thin"
            class:on={blink}
          ></span>
        </div>
      </div>
    </section>

    <div class="prompt">
      <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span>{L.echoCmd}</span>
    </div>
    <div class="thanks">{L.thanks}</div>
    <div class="prompt">
      <span class="who">kaan@portfolio</span><span class="colon">:</span><span class="home">~</span><span class="colon">$ </span><span
        class="caret wide"
        class:on={blink}
      ></span>
    </div>
  </main>
</div>

<style>
  .terminal {
    --bg: #f5f1e8;
    --fg: #3a362c;
    --bright: #0f1111;
    --muted: #8a8476;
    --dim: rgba(58, 54, 44, 0.35);
    --card-bg: #eeeadd;
    --bar-bg: #e8e3d4;
    --swatch-hover: #e8e3d4;
    --swatch-active: #e2ddcb;

    min-height: 100vh;
    background: var(--bg);
    color: var(--fg);
    font-family: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
    font-size: 14px;
    line-height: 1.7;
  }

  .topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 20px;
    border-bottom: 1px solid var(--dim);
    background: var(--bar-bg);
    position: sticky;
    top: 0;
    z-index: 10;
    flex-wrap: wrap;
  }
  .lights { display: flex; gap: 6px; }
  .lights span { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
  .title { font-size: 12px; color: var(--muted); margin-left: 8px; }

  .nav {
    margin-left: auto;
    font-size: 12px;
    color: var(--muted);
    display: flex;
    gap: 18px;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav a { color: var(--muted); text-decoration: none; }
  .nav a:hover { color: var(--bright); }
  .env-label { color: var(--dim); margin-left: 8px; }
  .lang-pills { display: flex; gap: 4px; }
  .lang-btn {
    background: transparent;
    color: var(--muted);
    border: 1px solid var(--dim);
    padding: 2px 7px;
    font-family: inherit;
    font-size: 11px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-radius: 3px;
  }
  .lang-btn.active {
    background: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
  }

  .sheet {
    max-width: 960px;
    margin: 0 auto;
    padding: 48px 32px 120px;
  }

  .prompt { margin-bottom: 12px; font-size: 14px; }
  .who { color: var(--accent); }
  .colon { color: var(--muted); }
  .home { color: var(--bright); }
  .muted { color: var(--muted); }
  .bright { color: var(--bright); }
  .dim { color: var(--dim); }
  .accent { color: var(--accent); }
  .key { color: var(--muted); }

  .art {
    margin: 0 0 12px;
    color: var(--accent);
    font-size: 13px;
    line-height: 1.25;
    overflow-x: auto;
  }
  .kv {
    margin: 0 0 40px;
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    column-gap: 10px;
    row-gap: 0;
    align-items: baseline;
    line-height: 1.7;
    font-family: inherit;
    font-size: 14px;
  }
  .kv-sep { color: var(--muted); }
  .card.contact {
    column-gap: 10px;
    margin: 0;
  }

  .block { margin-bottom: 48px; }

  .card {
    margin: 0;
    padding: 20px;
    background: var(--card-bg);
    border-radius: 4px;
    line-height: 1.65;
    font-family: inherit;
    border-left: 2px solid var(--accent);
  }
  .about-card p { margin: 0 0 1em; }
  .about-card p:last-child { margin-bottom: 0; }
  .card.contact a { overflow-wrap: anywhere; }

  .row {
    padding: 14px 0;
    border-bottom: 1px dashed var(--dim);
  }
  .row-head {
    display: flex;
    gap: 12px;
    align-items: baseline;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }
  .period { color: var(--muted); font-size: 12px; min-width: 130px; }
  .year { color: var(--muted); font-size: 12px; min-width: 60px; }
  .row-desc {
    font-size: 13px;
    color: var(--fg);
    line-height: 1.55;
  }
  .exp-desc { padding-left: 142px; }
  .award-desc { padding-left: 72px; }
  @media (max-width: 640px) {
    .exp-desc, .award-desc { padding-left: 0; }
  }

  .paper-title {
    font-size: 15px;
    margin-bottom: 6px;
    line-height: 1.5;
  }
  .paper-meta { font-size: 12px; }

  .ls-header {
    border-bottom: 1px dashed var(--dim);
    padding-bottom: 6px;
    margin-bottom: 6px;
  }
  .proj-row {
    display: grid;
    grid-template-columns: 90px 1fr 220px 60px;
    padding: 14px 0;
    border-bottom: 1px dashed var(--dim);
    text-decoration: none;
    color: var(--fg);
    gap: 16px;
    align-items: baseline;
  }
  .proj-main { display: block; }
  .proj-desc {
    display: block;
    color: var(--fg);
    margin-top: 4px;
    font-size: 13px;
  }
  .proj-tech { font-size: 12px; }
  .arrow { text-align: right; }
  @media (max-width: 720px) {
    .proj-row {
      grid-template-columns: 1fr auto;
      row-gap: 4px;
    }
    .proj-tech { grid-column: 1 / -1; }
    .arrow { display: none; }
  }

  .write-row {
    display: grid;
    grid-template-columns: 110px 80px 1fr;
    gap: 16px;
    padding: 10px 0;
    text-decoration: none;
    color: var(--fg);
    align-items: baseline;
  }
  .write-row span:first-child { white-space: nowrap; }
  @media (max-width: 560px) {
    .write-row { grid-template-columns: 1fr; gap: 2px; padding: 8px 0; }
  }

  .color-picker { padding: 14px 18px; font-size: 13px; white-space: normal; }
  .picker-head { margin-bottom: 10px; }
  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 4px;
  }
  .swatch-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    background: transparent;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    color: var(--fg);
    text-align: left;
  }
  .swatch-btn:hover { background: var(--swatch-hover); }
  .swatch-btn.active { background: var(--swatch-active); }
  .swatch-btn.active:hover { background: var(--swatch-active); }
  .cursor { width: 16px; }
  .swatch {
    width: 14px;
    height: 14px;
    border: 1px solid var(--dim);
    border-radius: 2px;
    flex: none;
    display: inline-block;
  }
  .export-line { margin-top: 12px; font-size: 12px; }

  .caret {
    display: inline-block;
    vertical-align: -1px;
    margin-left: 2px;
    background: transparent;
  }
  .caret.thin { width: 7px; height: 13px; }
  .caret.wide { width: 9px; height: 16px; vertical-align: -2px; margin-left: 0; }
  .caret.thin.on { background: var(--accent); }
  .caret.wide.on { background: var(--bright); }

  .thanks { margin-bottom: 20px; }

  @media (max-width: 640px) {
    .topbar { padding: 8px 12px; gap: 10px; flex-wrap: nowrap; }
    .title { display: none; }
    .env-label { display: none; }
    .nav {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 14px;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
    .nav::-webkit-scrollbar { display: none; }
    .nav a { white-space: nowrap; }
    .sheet { padding: 32px 18px 100px; }
  }
</style>
