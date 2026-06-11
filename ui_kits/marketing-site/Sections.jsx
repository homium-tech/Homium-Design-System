/* Sections.jsx — Higher-level homepage sections */

function SomosAliados() {
  return (
    <section className="section indent" id="aliados">
      <SectionEyebrow>Sobre nosotros</SectionEyebrow>
      <h2 className="display">Somos aliados.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start', marginTop: 12 }}>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg-muted)', maxWidth: '52ch' }}>
          En Homium, hemos trascendido el modelo tradicional de proveedores de desarrollo. Somos consultores y arquitectos de ecosistemas digitales de alto rendimiento para empresas líderes en LATAM. Entendemos que la tecnología no es un gasto, sino el activo más crítico para la rentabilidad de su empresa.
        </p>
        <div style={{ textAlign: 'right' }}>
          <Bracket>no proveedores</Bracket>
        </div>
      </div>
    </section>
  );
}

function ProductosYGente() {
  return (
    <section className="section indent" id="productos">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h2 className="display">
            Desarrollamos<br/>productos <ItalicAccent>a la medida.</ItalicAccent>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--fg-muted)', marginTop: 24, maxWidth: '36ch', lineHeight: 1.6 }}>
            Cada interfaz, sistema y servicio se diseña alrededor del problema real del cliente — no de una plantilla.
          </p>
        </div>
        <div>
          <h2 className="display">
            Somos humanos<br/>y trabajamos <ItalicAccent>para ellos.</ItalicAccent>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--fg-muted)', marginTop: 24, maxWidth: '36ch', lineHeight: 1.6 }}>
            Un equipo de profesionales con criterio, oficio y respeto por el negocio que acompañamos.
          </p>
        </div>
      </div>
    </section>
  );
}

function GenteSeria() {
  return (
    <section className="cyan-panel" id="gente">
      <h2>Somos<br/>gente seria.</h2>
      <div className="team">
        <div className="portrait" style={{ background: 'linear-gradient(180deg,#cfc9bd 0%, #9aa39a 100%)' }} />
        <div className="portrait" style={{ background: 'linear-gradient(180deg,#d9d0bd 0%, #aaa291 100%)' }} />
        <div className="portrait" style={{ background: 'linear-gradient(180deg,#d6c9b8 0%, #b09c83 100%)' }} />
      </div>
      <div className="caption">Profesionales que aman lo que hacen</div>
    </section>
  );
}

function ProductosServicios() {
  return (
    <section className="section indent" id="servicios">
      <h2 className="display">
        Somos<br/>una empresa<br/>de desarrollo<br/>tecnológico.
      </h2>
      <div style={{ textAlign: 'right', margin: '0 0 24px' }}>
        <Bracket>Software para aplicaciones web</Bracket>
      </div>
      <div className="service-grid">
        <ServiceCard
          badge="a medida"
          title="Desarrollo<br/>web"
          body="Productos digitales construidos con un stack moderno, escalable y mantenible. CMS propio, integraciones a la medida y rendimiento de producción."
        />
        <ServiceCard
          badge="estratégica"
          title="Consultoría<br/>tecnológica"
          body="Arquitectura, auditoría y dirección técnica para equipos internos. Definimos qué construir, qué comprar y qué desechar."
        />
        <ServiceCard
          badge="protección 24/7"
          title="Seguridad e<br/>Infraestructura"
          body="Hardening, monitoreo, backup y despliegues continuos sobre nube. Cumplimiento y resiliencia para operaciones críticas."
        />
        <ServiceCard
          badge="orgánico"
          title="Posicionamiento<br/>SEO"
          body="SEO técnico y de contenido para que tu producto aparezca cuando importa. Métricas, intención y arquitectura del sitio."
        />
      </div>
    </section>
  );
}

function ToolsRow() {
  return (
    <section className="section indent">
      <div className="tools">
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 42, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
            Herramientas<br/>y aplicaciones.
          </h3>
          <div style={{ marginTop: 18 }}>
            <GhostButton>Ver todas las aplicaciones</GhostButton>
          </div>
        </div>
        <div className="tools-logos">
          <span className="t-logo">·zapier</span>
          <span className="t-logo" style={{ fontWeight: 700 }}>shopify</span>
          <span className="t-logo" style={{ fontWeight: 700, color: 'var(--homium-green)' }}>PayU</span>
          <span className="t-logo">webex</span>
        </div>
      </div>
    </section>
  );
}

function ProyectosDeExito({ onSeeAll, onOpen }) {
  return (
    <section className="section indent" id="trabajo">
      <h2 className="display">Desarrollamos<br/>proyectos <ItalicAccent>de éxito.</ItalicAccent></h2>
      <div className="project-grid">
        <ProjectCard name="Third Way Health" tone="mint" label="We're revolutionizing medical" onClick={onOpen} />
        <ProjectCard name="Vitavi" tone="cream" label="Vive la vida como tú quieras." onClick={onOpen} />
        <ProjectCard name="Aluzian" tone="paper" label="Brands that effectively narrate" onClick={onOpen} />
      </div>
      <div style={{ textAlign: 'right', margin: '20px 0 24px' }}>
        <Bracket>Con confianza, calidad y honestidad</Bracket>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <PrimaryButton onClick={onSeeAll}>Ver todos los proyectos →</PrimaryButton>
      </div>
    </section>
  );
}

function ComoLoHacemos() {
  return (
    <section className="section indent" id="proceso">
      <h2 className="display">¿Cómo<br/>lo hacemos?</h2>
      <div className="process">
        <ProcessStep highlight num="01"
          title="Proponemos."
          body="Escuchamos el problema, diagnosticamos y proponemos una ruta clara con alcance, costo y riesgos." />
        <ProcessStep num="02"
          title="Punto de partida."
          body="Definimos los objetivos del proyecto y los criterios de éxito antes de tocar una línea de código." />
        <ProcessStep num="03"
          title="Diseñamos para usuarios."
          body="Pensamos y diseñamos para usuarios reales — no para stakeholders ni para un mockup bonito." />
        <ProcessStep num="04"
          title="Desarrollamos."
          body="Construimos con calidad de producción desde el primer commit. Pruebas, revisiones y CI obligatorios." />
        <ProcessStep num="05"
          title="Conectamos e implementamos."
          body="Integraciones, despliegues y migraciones controladas. Cero sorpresas en producción." />
        <ProcessStep num="06"
          title="Lanzamos."
          body="Salida monitoreada, con métricas de adopción y un plan de iteración semanal." />
        <ProcessStep num="07"
          title="Iteramos y mejoramos."
          body="No abandonamos lo entregado. Medimos uso real y mejoramos lo que importa." />
        <ProcessStep num="08"
          title="Soporte y administración."
          body="Acompañamos la operación con SLAs claros y un equipo que conoce tu sistema." />
      </div>
    </section>
  );
}

Object.assign(window, { SomosAliados, ProductosYGente, GenteSeria, ProductosServicios, ToolsRow, ProyectosDeExito, ComoLoHacemos });
