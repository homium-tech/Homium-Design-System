/* ClientLogos.jsx — top-of-page partner logos (text wordmark style) */

const CLIENTS = [
  { name: 'lurian', style: { fontWeight: 600 } },
  { name: 'sozú',   style: { fontWeight: 600 } },
  { name: 'thirdwaycare', style: { fontWeight: 500 } },
  { name: 'vitavi', style: { fontWeight: 700, fontStyle: 'italic' } },
  { name: 'TRR',    style: { fontWeight: 700, letterSpacing: 2 } },
  { name: 'Jeep',   style: { fontWeight: 700 } },
];

function ClientLogos() {
  return (
    <div className="clients">
      {CLIENTS.map(c => (
        <span key={c.name} className="logo" style={c.style}>{c.name}</span>
      ))}
    </div>
  );
}

Object.assign(window, { ClientLogos });
