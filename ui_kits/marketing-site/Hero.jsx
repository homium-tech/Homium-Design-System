/* Hero.jsx — Top of homepage */

function Hero() {
  return (
    <section className="hero" id="inicio">
      <GlowBlob />
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'end' }}>
        <div>
          <div className="dashed-circle" style={{ width: 110, height: 110, marginBottom: 28, color: 'var(--homium-cyan)' }}>
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="48" strokeDasharray="2 6" strokeWidth="1" />
              <circle cx="50" cy="50" r="36" strokeDasharray="2 4" strokeWidth="1" opacity="0.7" />
              <circle cx="50" cy="50" r="24" strokeWidth="1" opacity="0.5" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </svg>
          </div>
          <h1>Tecnología sin<br/>complicaciones.</h1>
        </div>
        <div className="sub">
          Diseñamos infraestructuras impecables que eliminan la fricción operativa, para que escales tu negocio con absoluta tranquilidad.
        </div>
      </div>
      <ClientLogos />
    </section>
  );
}

Object.assign(window, { Hero });
