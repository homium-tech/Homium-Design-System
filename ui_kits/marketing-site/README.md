# Homium — Marketing Site UI Kit

A pixel-near recreation of the Homium marketing site as a click-thru React prototype.

**Pages:**
- `index.html` — Homepage (originally `01 Home.png`, pre-rebrand). Long single-column scroll with all the brand's signature sections.
- `projects.html` — `03 Nuestro Trabajo` projects index. Category chips + 2-column tile grid.
- `detail.html` — `04 Detalle Proyecto` project detail page (Third Way Health).

**Components (`*.jsx`):**
- `Layout.jsx` — Page shell, header, footer, left-rail nav, glow blob backdrop
- `Hero.jsx` — Big italic-mix display title + brand circles
- `Brackets.jsx` — `<Bracket>`, `<ItalicAccent>`, `<SectionEyebrow>` — the brand's text motifs
- `Buttons.jsx` — `<PrimaryButton>`, `<GhostButton>`, `<TextLink>`
- `Cards.jsx` — `<ServiceCard>`, `<ProjectCard>`, `<ProcessStep>`
- `ClientLogos.jsx` — Top row of customer logos (text-set placeholders)
- `Contact.jsx` — Underline-input contact form
- `Sections.jsx` — Higher-level section compositions used by `index.html`

These are **visual recreations**, not production code — they cut corners on logic but match the source mocks closely.
