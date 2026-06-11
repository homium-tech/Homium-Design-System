---
name: homium-design
description: Use this skill to generate well-branded interfaces and assets for HOMIUM (HOMIUM, LATAM digital ecosystems consultancy), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `DOCS.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick facts
- **Brand:** HOMIUM — *Tecnología sin complicaciones.* Spanish, LATAM, dark/editorial.
- **Colors:** 60% `#290640` (purple) · 20% `#00FFFF` (cyan, CTAs) · 20% `#5AEAA2` (green, accents). White + black-90 for body.
- **Type:** Rubik (variable, weights 300–900, roman + italic). Display set in **weight 300**, italic-300 cyan for emotional accent words.
- **Motifs:** `[ bracket eyebrows ]`, italic-display accent words ending in a period, dashed concentric cyan circles, left-rail mini-nav.
- **Logo:** `assets/logo/homium-wordmark-*.svg` (white on dark, purple on light); bolt mark `homium-bolt-*.svg` for favicons.

## Files of interest
- `colors_and_type.css` — drop-in CSS tokens (vars + semantic classes).
- `fonts/fonts.css` — Rubik @font-face block; copy `fonts/` next to it.
- `assets/logo/` — wordmark and bolt mark variants.
- `assets/screens/` — original PNG mocks (homepage, Nuestro Trabajo, Detalle Proyecto). Filenames pre-date the HOME → HOMIUM rebrand.
- `ui_kits/marketing-site/` — React/JSX recreation of the marketing site. Reuse components from here.
- `preview/` — every Design System tab card (color/type/spacing/component/brand specimens).
