# HOMIUM Design System

[![Version](https://img.shields.io/badge/versión-1.0.0-blue.svg)](https://github.com/homium-tech/Homium-Design-System/releases)
[![License](https://img.shields.io/badge/License-Proprietary%20HOMIUM-red.svg)](https://homium.co)
[![Claude Code Skill](https://img.shields.io/badge/Claude%20Code-Skill%20%2Fhomium--design-blueviolet)](https://claude.ai)
[![CSS Tokens](https://img.shields.io/badge/CSS-Tokens-blue.svg)](colors_and_type.css)
[![UI Kit](https://img.shields.io/badge/UI%20Kit-React%2FJSX-61dafb.svg)](ui_kits/marketing-site/)

> **Tecnología sin complicaciones.**
> Sistema de diseño oficial de HOMIUM — consultora de ecosistemas digitales para empresas en LATAM.

---

## ¿Qué es?

El **HOMIUM Design System** es un repositorio de marca que centraliza todo lo necesario para construir interfaces web coherentes con la identidad visual de HOMIUM: tokens de color y tipografía, fuentes, logos, guías de voz y tono, componentes React del sitio de marketing, y previews visuales del sistema.

Está diseñado para ser usado como un **skill de Claude Code** (`/homium-design`) que convierte al modelo en un diseñador experto de la marca, capaz de generar prototipos HTML o código de producción perfectamente alineados con HOMIUM.

---

## ¿Para qué sirve?

| Necesidad | Solución |
|---|---|
| Prototipar pantallas rápido | Invocar `/homium-design` y pedir el artefacto HTML |
| Iniciar un proyecto frontend de producción | Copiar `colors_and_type.css` + `fonts/` al proyecto |
| Consultar las reglas de marca | Ver `DOCS.md` y los archivos en `preview/` |
| Reusar componentes del sitio de marketing | Tomar piezas de `ui_kits/marketing-site/` |
| Onboardear a un nuevo dev o diseñador | Compartir este repo |

---

## Estructura del proyecto

```
homium-design-system/
├── README.md                  ← este archivo (guía de uso)
├── DOCS.md                    ← spec técnica completa de la marca
├── SKILL.md                   ← contrato de invocación para Claude Code
├── colors_and_type.css        ← tokens CSS: colores + escala tipográfica
├── fonts/
│   ├── fonts.css              ← @font-face de Rubik (pesos 300–900)
│   └── Rubik-*.ttf            ← archivos de fuente locales
├── assets/
│   ├── logo/                  ← wordmark y bolt mark (SVG, blanco y morado)
│   └── screens/               ← capturas de referencia del sitio (PNG)
├── preview/                   ← tarjetas HTML del Design System
└── ui_kits/
    └── marketing-site/        ← recreación React/JSX del sitio de marketing
        ├── index.html         ← Homepage
        ├── projects.html      ← Nuestro Trabajo
        ├── detail.html        ← Detalle de proyecto
        └── *.jsx              ← Layout, Hero, Brackets, Buttons, Cards…
```

---

## Cómo usar

### Opción 1 — Con Claude Code (recomendado)

```
/homium-design
```

Al invocar el skill, Claude lee toda la especificación de marca y actúa como diseñador experto. Se le puede pedir:

- *"Crea un hero section para la home"*
- *"Genera un componente de tarjeta de proyecto en React"*
- *"Arma una landing page de una sola columna"*
- *"Revisa si este diseño es fiel a la marca"*

### Opción 2 — Integración directa en un proyecto

```html
<!-- 1. Copiar fonts/ y colors_and_type.css al proyecto -->
<!-- 2. Enlazar en el <head> -->
<link rel="stylesheet" href="./colors_and_type.css">

<!-- 3. Usar tokens y clases semánticas -->
<body>
  <h1 class="display-lg">
    Tecnología <em class="accent-italic">sin complicaciones.</em>
  </h1>
  <span class="bracket">no proveedores</span>
  <button style="background: var(--homium-cyan); color: var(--homium-purple);">
    Hablemos
  </button>
</body>
```

### Tema claro vs. oscuro

El tema oscuro (morado) es el default. Para superficies claras:

```html
<body class="theme-light"> … </body>
```

---

## Paleta de colores

| Token | Color | Uso |
|---|---|---|
| `--homium-purple` | `#290640` | 60% — fondo principal |
| `--homium-cyan` | `#00ffff` | 20% — CTAs, links, acento display |
| `--homium-green` | `#5aeaa2` | 20% — chips, tags, acento secundario |

---

## Assets de logo

| Archivo | Cuándo usarlo |
|---|---|
| `assets/logo/homium-wordmark-white.svg` | Header/footer sobre fondo oscuro |
| `assets/logo/homium-wordmark-purple.svg` | Sobre fondos claros o blancos |
| `assets/logo/homium-bolt-white.svg` | Favicon, marca en pie de página |
| `assets/logo/homium-bolt-purple.svg` | Favicon en tema claro |

---

## Previews

Abrir directamente en el navegador para explorar el sistema visualmente:

```
preview/colors-primary.html
preview/type-scale.html
preview/spacing-scale.html
preview/components-buttons.html
preview/components-service-cards.html
preview/brand-bolt-marks.html
```

---

## Documentación técnica completa

Ver [`DOCS.md`](./DOCS.md) para la especificación detallada de: colores, tipografía, layout, iconografía, animación, voz y tono, y todas las reglas de marca.
