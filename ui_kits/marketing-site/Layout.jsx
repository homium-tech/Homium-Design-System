/* Layout.jsx — header, footer, left rail, page shell */

function Header({ onLogo }) {
  return (
    <header className="header">
      <a href="index.html" style={{ color: 'inherit', textDecoration: 'none' }} onClick={onLogo}>
        <Wordmark height={26} />
      </a>
      <a href="#contact" className="nav-cta">HABLEMOS</a>
    </header>
  );
}

function LeftRail({ items, active }) {
  return (
    <nav className="left-rail" aria-label="Section index">
      {items.map((it, i) => (
        <a key={i} href={`#${it.id}`} className={"item" + (active === it.id ? " active" : "")}>
          <span className="dot"></span>{it.label}
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Tecnología sin<br/>complicaciones.</h3>
      </div>
      <ul>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Nuestros Servicios</a></li>
        <li><a href="projects.html">Nuestro trabajo</a></li>
        <li><a href="#contact">Hablemos</a></li>
      </ul>
      <ul>
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Términos y condiciones</a></li>
      </ul>
      <div className="bottom">
        <span className="bolt"><BoltMark size={24} /></span>
        <span>Copyright © 2026 HOMIUM. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

function SocialRow() {
  return (
    <div className="social-row">
      <span className="stretch">Síguenos en redes sociales</span>
      <span className="pill cyan">TWITTER</span>
      <span className="stretch">Síguenos en redes sociales</span>
      <span className="pill green">INSTAGRAM</span>
      <span className="stretch">Síguenos en redes sociales</span>
      <span className="pill cyan">LINKEDIN</span>
    </div>
  );
}

function GlowBlob({ side = 'right' }) {
  return <div className="glow-blob" style={side === 'left' ? { left: -120, right: 'auto' } : {}}></div>;
}

Object.assign(window, { Header, LeftRail, Footer, SocialRow, GlowBlob });
