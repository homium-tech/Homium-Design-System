/* Brackets.jsx — the brand's signature text motifs */

function Bracket({ children, italic = true }) {
  return <span className="bracket">{children}</span>;
}

function ItalicAccent({ children }) {
  return <em className="italic-accent">{children}</em>;
}

function SectionEyebrow({ children }) {
  return <div className="section-eyebrow">{children}</div>;
}

function DashedCircles({ size = 110, running = false, arrow = false }) {
  return (
    <div className="dashed-circle" style={{ width: size, height: size, position: 'relative' }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="48" strokeDasharray="2 6" strokeWidth="1" />
        <circle cx="50" cy="50" r="36" strokeDasharray="2 4" strokeWidth="1" opacity="0.7" />
        <circle cx="50" cy="50" r="24" strokeWidth="1" opacity="0.5" />
        {!running && <circle cx="50" cy="50" r="3" fill="currentColor" />}
        {running && (
          <>
            <defs><path id="arc" d="M 50 50 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0" /></defs>
            <text fill="currentColor" fontSize="6" letterSpacing="3">
              <textPath href="#arc">VISITAR SITIO WEB · VISITAR SITIO WEB · </textPath>
            </text>
          </>
        )}
      </svg>
      {arrow && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: size * 0.18, color: 'var(--homium-cyan)'
        }}>↗</div>
      )}
    </div>
  );
}

function BoltMark({ size = 28, color = 'var(--homium-cyan)' }) {
  // Legacy alias — prefer <BoltLogo> for the real brand mark.
  return <BoltLogo size={size} />;
}

function Wordmark({ height = 32, variant = 'white' }) {
  const src = variant === 'purple'
    ? '../../assets/logo/homium-wordmark-purple.svg'
    : '../../assets/logo/homium-wordmark-white.svg';
  return <img src={src} alt="HOMIUM" style={{ height, width: 'auto', display: 'block' }} />;
}

function BoltLogo({ size = 40 }) {
  return <img src="../../assets/logo/homium-bolt-white.svg" alt="" style={{ height: size, width: 'auto', display: 'block' }} />;
}

Object.assign(window, { Bracket, ItalicAccent, SectionEyebrow, DashedCircles, BoltMark, BoltLogo, Wordmark });
