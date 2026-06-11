/* Cards.jsx — service, project, process step */

function ServiceCard({ title, badge, body, accent = false }) {
  return (
    <div className={"service-card" + (accent ? " accent" : "")}>
      <div className="meta">
        <span className="badge">{badge}</span>
        <span className="arrow" aria-hidden>↗</span>
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{body}</p>
    </div>
  );
}

function ProjectCard({ name, tone, label, onClick }) {
  // tone presets — colored thumbnails (no real photos available)
  const tones = {
    mint:    { bg: 'linear-gradient(135deg, #d9efe0 0%, #c2e5d0 100%)', text: '#0e3a2a' },
    cream:   { bg: 'linear-gradient(135deg, #fff6d4 0%, #ffe9c0 100%)', text: '#5a3a06' },
    paper:   { bg: 'linear-gradient(135deg, #f4f4f0 0%, #e6e3da 100%)', text: '#2a2820' },
    pred:    { bg: 'linear-gradient(135deg, #e64545 0%, #b32626 100%)', text: '#fff7ec' },
    auto:    { bg: 'linear-gradient(135deg, #1a1f2b 0%, #0c1018 100%)', text: '#dde2ea' },
    coffee:  { bg: 'linear-gradient(135deg, #f8d5b4 0%, #c8895a 100%)', text: '#3a1e0a' },
    sun:     { bg: 'linear-gradient(135deg, #cfeede 0%, #f8e070 100%)', text: '#264028' },
    candy:   { bg: 'linear-gradient(135deg, #ffc857 0%, #ff5454 100%)', text: '#3a0e08' },
    purple:  { bg: 'linear-gradient(135deg, #4a2a8c 0%, #1f0a3d 100%)', text: '#ffe6f7' },
  };
  const t = tones[tone] || tones.paper;
  return (
    <article className="project-card" onClick={onClick}>
      <div className="ptitle">
        <span>{name}</span>
        <span className="parrow">↗</span>
      </div>
      <div className="thumb" style={{ background: t.bg, color: t.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.01em', textAlign: 'center', padding: '0 24px' }}>
        <span style={{ color: t.text, opacity: 0.85 }}>{label || name}</span>
      </div>
      <div className="pcaption">Suspendisse nisi diam, convallis eget erat nec, pellentesque tincidunt mi.</div>
    </article>
  );
}

function ProcessStep({ num, title, body, highlight = false }) {
  return (
    <div className={"process-step" + (highlight ? " highlight" : "")}>
      <span className="num">{num}</span>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

Object.assign(window, { ServiceCard, ProjectCard, ProcessStep });
