# HOMIUM Design System

> **Tecnología sin complicaciones.**
> Somos consultores y arquitectos de ecosistemas digitales de alto rendimiento para empresas líderes en LATAM.

This is the design system for **Homium** (HOMIUM), a Colombian / LATAM technology consultancy. The brand is **dark, confident, slightly editorial** — deep aubergine purple as the dominant surface, with **cyan** and **mint green** electric accents reserved for call-to-action and highlight moments. The typography is mono-family (**Rubik**) but uses an italic-light display variant to inject warmth and humanity into otherwise minimal, geometric layouts.

---

## Company context

**Homium** positions itself not as a "vendor" but as an **architect of digital ecosystems**. Their core message: technology is not an expense, it is the most critical asset for business profitability. They serve IT and Operations leaders at large LATAM companies, building "impeccable infrastructure that eliminates operational friction."

Service pillars surfaced in the marketing site:

1. **Desarrollo web** — custom-built products
2. **Consultoría tecnológica** — strategy & architecture
3. **Seguridad e Infraestructura**
4. **Posicionamiento SEO**

Tooling shown as partners: **Zapier, Shopify, PayU, Webex** (logos appear in the "Herramientas y aplicaciones" row).

A representative client list (from "Nuestro trabajo"): **Third Way Health, Vitavi, Aluzian, Sazú, A Medical Group, Presto, Oma, Peugeot, Opel Colombia, Jeep, Dodge, Fiat, Ram, Ser Colombia, Crem Helado, Unicentro Bogotá**. Project categories: *Procesamiento de datos, Business CMR, Clips animados, Ilustración, Video juegos, Servidores dedicados, Sitios web, AWS, Hosting.*

## Source materials provided

| Source | Path | Notes |
|---|---|---|
| Homium homepage mock | `uploads/01 Home.png` → `assets/screens/01-home.png` | Full marketing homepage, dark theme. (Original upload pre-dates the rebrand.) |
| Projects index | `uploads/03 Nuestro Trabajo.png` → `assets/screens/03-nuestro-trabajo.png` | Project gallery + category chips. |
| Project detail | `uploads/04 Detalle Proyecto.png` → `assets/screens/04-detalle-proyecto.png` | Third Way Health case study layout. |
| Logo (vector) | `uploads/logo1.svg` → `assets/logo/homium-wordmark-purple.svg` | HOMIUM wordmark, dark variant (#2E1A47 + green→cyan gradient bolt). |
| Logo (vector) | `uploads/logo2.svg` → `assets/logo/homium-wordmark-white.svg` | HOMIUM wordmark, white variant for dark surfaces. |
| Bolt mark (extracted) | `assets/logo/homium-bolt-white.svg`, `homium-bolt-purple.svg` | The "O" of the wordmark, isolated. Use as favicon / footer mark. |

No codebase, Figma file, or live URL was provided.

---

## Index of this design system

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← invocation contract (cross-compatible with Agent Skills)
├── colors_and_type.css        ← all CSS variables: color tokens + type scale
├── fonts/                     ← Rubik variable font (latin subset) + fonts.css
├── assets/
│   ├── logo/                  ← reconstructed wordmark + bolt mark
│   ├── icons/                 ← bracket, arrow, decorative SVGs
│   └── screens/               ← original reference PNGs
├── preview/                   ← Design-System-tab cards (one HTML file per token group)
└── ui_kits/
    └── marketing-site/        ← React/JSX recreation of the marketing site
        ├── index.html
        └── *.jsx              ← Header, Hero, ServiceCard, ProjectCard, …
```

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (LATAM). All voice and copy is in Spanish — translate only for international surfaces.

**Voice & POV.** First-person plural ("**Somos** aliados", "**Desarrollamos** productos", "**Diseñamos** infraestructuras"). The brand speaks as a *collective of humans*, not a faceless company. They consistently use the **inclusive "nosotros"** to position themselves alongside the client ("Somos humanos *y trabajamos para ellos*"), and address the reader formally with **"tu/tu equipo"** when calling to action ("Déjanos ser parte *de tu equipo*").

**Tone.**
- **Serious but human.** "Somos gente seria." is the flagship example: deadpan confidence, no hard-sell.
- **Confident, never boastful.** They state capabilities flatly ("Desarrollamos productos") and let italic-set sub-clauses do the warmth ("*a la medida.*").
- **Anti-jargon.** "Tecnología sin complicaciones" is the operating tagline; copy avoids buzzwords like *synergy, disruption, AI-powered.*
- **Calm, declarative sentences.** Periods at the end of every headline (even fragments): "Somos aliados." not "Somos aliados". This is a deliberate brand quirk — **always include the terminal period** on display titles.

**Casing.** Sentence case across the board. NO ALL-CAPS HEADLINES except for the wordmark and one or two micro-labels (TWITTER, INSTAGRAM social pills). Even buttons are sentence-case: *"Ver todos los proyectos"*, *"Enviar"*.

**The bracket pattern `[ … ]`.** A signature device: short callouts and metadata are wrapped in square brackets, set in **cyan**, often italic, sitting *outside* the main column to feel like a margin note.
- `[no proveedores]` — punctuation on a value statement
- `[Software para aplicaciones web]` — clarifying subtitle
- `[Profesionales que aman lo que hacen]` — caption beneath a photo
- `[Con confianza, calidad y honestidad]` — supporting line under a section title
- `[ HABLEMOS ]` — the top-right nav CTA

Use brackets to introduce *editorial breath* between large statements — never on functional UI labels (buttons, form inputs, errors).

**The italic-display word.** Headlines often combine roman + italic in the same line, with the italic word acting as the *emotional* word. Example: "Desarrollamos productos *a la medida.*" — "a la medida" is italic-light cyan. Used sparingly (one per headline at most).

**Emoji.** **Never.** No emoji anywhere in the site or marketing materials. Iconography is geometric SVG.

**Copywriting examples to model from.**
- Hero: *Tecnología sin complicaciones.*
- Value prop: *Somos aliados. [no proveedores]*
- Product capability: *Desarrollamos productos a la medida.*
- People statement: *Somos gente seria. [Profesionales que aman lo que hacen]*
- Process intro: *¿Cómo lo hacemos?*
- Conversion: *Déjanos ser parte de tu equipo.*
- Button copy: *Enviar · Ver todos los proyectos · Hablemos*

---

## VISUAL FOUNDATIONS

### Color

**Primary palette (60 / 20 / 20 + white).**

| Role | Hex | Usage % | Notes |
|---|---|---|---|
| Purple (`--homium-purple`) | `#290640` | **60%** | Default background everywhere. Aubergine, very dark, slightly red-shifted. Headlines on light surfaces are set in this color. |
| Cyan (`--homium-cyan`) | `#00ffff` | **20%** | Primary accent: CTAs, links, italic display words, bracket text, focus rings, full-bleed accent panels ("Somos gente seria"). |
| Green (`--homium-green`) | `#5aeaa2` | **20%** | Secondary accent: category chips, secondary highlights, project tags. Less saturated visually than cyan, so it feels softer. |
| White | `#ffffff` | – | Body text on purple. Part of the palette. |
| Black 90% | `rgba(0,0,0,0.9)` | – | Long-form body text on light surfaces (cyan panels, white cards). |

Purple shades 50–950 in `colors_and_type.css` exist **only for functional UI surfaces** — tables, charts, hover states, card elevations. Do not reach for them for brand expression.

#### Light theme variant — `.theme-light`

The system ships with an **inverted surface mode** for moments where a white canvas reads better — long-form articles, documentation, light-mode dashboards, case-study detail pages, print collateral. Add the class `theme-light` to `<html>`, `<body>`, or any wrapper.

| Role | Light value | Notes |
|---|---|---|
| `--bg` | `#ffffff` | White surface. |
| `--fg` | `#4a1170` (purple-500) | **Typography color is purple-500**, not `homium-purple` — `#290640` is so dark on white it reads as black. Purple-500 keeps the mood but is visibly *purple*. |
| `--fg-muted` | `rgba(74,17,112,0.78)` | Body copy. |
| `--accent-display` | `#8e57bf` (purple-300) | The *italic display word* — lighter purple, creates **tonal contrast inside the brand family** instead of jumping to cyan. |
| `--accent` | `#00b8b8` (cyan-700) | Brackets, focus ring, fine marks — darker cyan stays legible on white. |
| `--border` | `rgba(41,6,64,0.14)` | Purple at low opacity. |
| Buttons (primary) | cyan fill, purple text | Unchanged — the cyan pill still works on white. |

**Mental model:** dark theme uses **hue contrast** (cyan jumping out of purple). Light theme uses **tonal contrast** (lighter purple inside darker purple). The italic accent word is the only thing that swaps colour — everything else just inverts surface ↔ ink.

**Do** use light theme for:
- Article / blog / case study body
- Forms, documentation, admin dashboards
- Print-style one-pagers

**Don't** use light theme for the marketing site hero, brand-led landing pages, or anywhere the brand should feel editorial and confident — those stay dark.

A single **magenta** (`#ff3bd4`) appears in one client illustration (the Vitavi swirl) — it is **not** part of the system, treat it as client-asset color.

### Type

- **Family:** **Rubik** (Google Fonts, variable, weights 300–900, roman + italic). One family, full range.
- **Display headlines:** Rubik Regular (weight 400) with `letter-spacing: -0.02em`. Mixed-mode: roman for the statement, *italic light (300) cyan* for the emotional fragment.
- **Body:** Rubik Regular 16px, line-height 1.55, on white at 72% opacity over purple.
- **Eyebrows / brackets:** Rubik Regular 13px, slight tracking, cyan.
- **Trailing periods** on all display headlines.

### Layout

- **Tall, vertical, narrative-driven.** The homepage is a long single-column scroll with generous vertical breathing room (`--sp-9` / 96px) between sections.
- **Persistent left-rail mini-nav.** Tiny dotted section index sits fixed on the left edge — a column of 3–5 short labels with cyan markers indicating progress. Subtle, easy to miss, never decorative.
- **Asymmetric off-grid headlines.** Display text is set ragged-right, indented slightly from the edge. Supporting copy and `[brackets]` float in the margin to the right of headlines — they read like editorial pull quotes.
- **Section-as-canvas.** Full-bleed cyan or purple-deep blocks break the rhythm (e.g. the team section is a full-width cyan panel; service cards sit on a slightly-lighter purple field).

### Backgrounds

- **No photos as background.** All backgrounds are flat color.
- **Soft purple glow blobs** at the top of the hero — a faint radial-gradient cyan-to-transparent puff drifts in the upper-right of the homepage hero. **One per page, never more.**
- **No textures, no grain, no patterns.** The brand is clean, flat, optically calm.
- **No gradients on type.** Color is solid.

### Decorative motifs

- **Dashed / dotted concentric circles in cyan.** Large (200–400px), ghosted at low contrast, sit behind or beside headlines as compositional anchors. Frequently include a small arrow (`↗`) or a circle-of-running-text ("VISITAR SITIO WEB · VISITAR SITIO WEB ·") around them.
- **Hand-drawn arrow strokes** in cyan, used to point from one block to another.
- **The `[ … ]` bracket** functions visually as a motif too — it is the closest thing the brand has to a "logo signature" after the wordmark itself.

### Iconography

See full notes in **ICONOGRAPHY** below.

### Borders

- **1px hairlines, cyan or white-at-14%.** Cards on the dark surface use a 1px cyan border at low opacity. Hover bumps to full-opacity cyan.
- **Always pixel-thin.** No 2px or 3px borders anywhere.

### Corner radii

- **Generous but not extreme.** Service cards use `--radius-md` (14px). Big surfaces use `--radius-lg` (20px). Buttons are **fully pill-shaped** (`--radius-pill`). Form inputs are unrounded — underlined only.

### Shadows & glows

- **Almost no drop shadows.** The dark surface absorbs them. Cards rely on **1px cyan borders + slight background tint** instead of shadow.
- **Cyan glow** (`--glow-cyan`, `0 0 24px rgba(0,255,255,0.45)`) appears on hover/focus of primary CTAs.
- **One soft purple glow** (`--glow-purple`) at the top of full-bleed sections.

### Buttons

- **Primary:** filled cyan (`#00ffff`) pill, **purple text** (`--fg-on-cyan`), 14px label, 12/24 padding. Hover: glow + slight scale `1.02`. No shadow.
- **Secondary / tag:** transparent pill, 1px cyan border, cyan label. Hover: cyan fill, purple text (inversion).
- **Tertiary:** text link with cyan underline on hover, includes a trailing `→`.

### Animation

- **Restrained.** No bouncing, no parallax, no scroll-snap fanfare.
- **Fades and gentle slides on scroll** — 480ms `cubic-bezier(0.22, 1, 0.36, 1)` for entries.
- **Buttons:** 140ms ease-out on color/scale.
- **Decorative circles** sometimes slow-rotate (~30s linear infinite) when set as the "VISITAR SITIO WEB" running-text circle.

### Hover & press states

- **Hover (cards):** border darken from `rgba(255,255,255,0.14)` → `var(--homium-cyan)`, very slight `translateY(-2px)`.
- **Hover (buttons primary):** add `--glow-cyan`, lift 1.02.
- **Hover (links):** color → `--cyan-300` (lighter), no underline gymnastics.
- **Press:** scale `0.98`, no color change.
- **Focus:** 2px cyan ring at 2px offset.

### Transparency & blur

- **Used very sparingly.** Header may use a `backdrop-filter: blur(12px)` over a `rgba(41,6,64,0.7)` strip when scrolled. Otherwise opacity adjusts on text (72%, 50%) but rarely on surfaces.

### Imagery (photo treatment)

- **Cool, slightly desaturated portraits** of people on neutral light backgrounds (see the "Somos gente seria" team trio). Photos sit *inside* the cyan accent panel — the panel becomes the "frame."
- **Project screenshots** are shown straight, without device frames, embedded in cards with a 1px cyan border.
- **No warmth filter, no grain, no duotone.**

### Layout rules

- **Max content width** ≈ 1200–1280px.
- **Side padding:** desktop 64–96px, mobile 24px.
- **Vertical rhythm:** sections separated by `--sp-9` (96px); sub-sections by `--sp-7` (48px).
- **Headlines** indented from the absolute left edge by roughly the width of the left-rail nav.

---

## ICONOGRAPHY

Homium's iconography is **minimal, geometric, line-based** — and frankly there is **very little of it**. The brand's most-used "icons" are:

1. **The bolt-in-circle wordmark** — appears as the favicon, footer mark, and sometimes alongside the team photos.
2. **The bracket `[ ]`** — covered in CONTENT FUNDAMENTALS, but functions visually as the brand's most recurring decorative element.
3. **Up-right arrow `↗`** — used on outbound links and "Visitar sitio web" labels. Always 1.5–2px stroke, square line-cap.
4. **Dashed concentric circles** — used as section anchors / pull-quote frames.

There is **no full icon set** in the source materials — no Material Icons, no Phosphor, no in-house glyph font. Service cards use either no icon, or a tiny custom mini-illustration in cyan line.

**For new product UI** (e.g. dashboards built for Homium clients) the recommendation is **[Lucide](https://lucide.dev/)** — its 1.5px geometric stroke matches the brand. Loaded via CDN in this kit:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Emoji:** never. **Unicode glyphs as icons:** only `↗`, `→`, `·` (middle dot as decorative separator).

A flag and an action: if Homium has an internal icon font or sprite, **please attach it** — the Lucide substitution is a placeholder.

---

## CAVEATS & ASKS

- **No codebase or Figma** was provided. The system is inferred from three PNG mocks plus the brand SVGs. **Send any production code, Figma library, or production URL** to lock the component vocabulary and verify motion specs.
- **Iconography** is undefined in the source. Lucide is recommended as a placeholder — confirm if Homium has an internal icon set.
- **Photography**: portraits in the "Somos gente seria" panel are placeholder gradients; real headshots need replacing.
- **Client logos** in the top row are typeset placeholders; we need the real .svg files.
- **Animation specs** were guessed from the static mocks. If there's a Lottie / video reference, attach it.
