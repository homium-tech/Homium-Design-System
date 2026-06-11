/* Contact.jsx — Underline-only contact form */

function ContactForm() {
  const [form, setForm] = React.useState({ nombre: '', email: '', empresa: '' });
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 2400); };
  return (
    <section className="contact" id="contact">
      <h2>Déjanos<br/>ser parte<br/>de tu equipo.</h2>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Nombre</label>
          <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
        </div>
        <div className="field">
          <label>Correo electrónico</label>
          <input value={form.email} type="email" onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="field">
          <label>Empresa</label>
          <input value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
        </div>
        <div className="submit-row">
          <PrimaryButton type="submit" arrow>{sent ? 'Enviado' : 'Enviar'}</PrimaryButton>
        </div>
      </form>
    </section>
  );
}

Object.assign(window, { ContactForm });
