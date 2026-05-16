# hq.leads — Sitio web

> *"Ingeniería comercial. No marketing."*

Sitio web oficial de **hq.leads** — agencia de paid media + IA para PyMES con producto.

Stack editorial-streetwear, basado en el sistema visual oficial documentado en
`/aplicaciones/hq-leads-brand/MANUAL_DE_MARCA.md`.

---

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **TypeScript** estricto
- **Tailwind CSS 4** (config con CSS vars de paleta brand)
- **framer-motion** (animaciones)
- **@vercel/analytics**
- **lucide-react** (iconos)
- **clsx** + **tailwind-merge** (helper `cn()`)

Fuentes: Inter (display + body), Playfair Display Italic (serif accent —
fallback de GT Sectra), JetBrains Mono (mono).

---

## Estructura

```
hqleads-web/
├── app/
│   ├── layout.tsx          # Root layout: Nav + Footer + fonts + metadata SEO
│   ├── globals.css         # CSS vars de paleta + grano + utilities
│   ├── page.tsx            # Homepage (placeholder, otro agente la termina)
│   ├── not-found.tsx       # 404 brand-aligned
│   ├── loading.tsx         # Loading UI
│   ├── magazine/           # Sección revista (otro agente)
│   ├── trabajamos/         # Cómo trabajamos (otro agente)
│   ├── drops/              # Lead magnets (otro agente)
│   ├── manifiesto/         # Manifiesto (otro agente)
│   └── agenda/             # Agendar diagnóstico (otro agente)
├── components/             # Componentes shared
│   ├── Wordmark.tsx        # Logo "hq.leads" con dot indigo
│   ├── CropMarks.tsx       # 4 marcas de imprenta
│   ├── Sticker.tsx         # Sticker rectangular distressed
│   ├── MarkerAnnotation.tsx# Texto handwritten rojo + flecha
│   ├── Highlighter.tsx     # Subrayado highlighter amarillo
│   ├── Nav.tsx             # Top nav sticky responsive
│   ├── Footer.tsx          # Footer 4-col + colofón + sticker
│   ├── Newsletter.tsx      # Band brief semanal + form
│   └── SectionHeader.tsx   # Header reusable: tag + headline + subtítulo
├── lib/
│   ├── brand.ts            # Paleta, taglines, mantras, navegación
│   ├── fonts.ts            # next/font config
│   └── utils.ts            # cn() helper
└── public/                 # Static assets
```

---

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# (completar las que apliquen)

# 3. Dev server
npm run dev
# → http://localhost:3000

# 4. Build de producción
npm run build
npm run start
```

---

## Convenciones

### Paleta (CSS vars + Tailwind)

| Token | CSS var | Tailwind | Uso |
|---|---|---|---|
| Cream | `--brand-cream` | `bg-cream` | Default bg |
| Off-white | `--brand-off-white` | `bg-off-white` | Surfaces secundarias |
| Black ink | `--brand-black-ink` | `text-ink` | Tipografía |
| Mid gray | `--brand-mid-gray` | `text-mid-gray` | Hierarchy |
| Light gray | `--brand-light-gray` | `border-light-gray` | Crop marks |
| Indigo | `--brand-indigo` | `text-indigo` | Acento (dot, CTAs) |
| Acid yellow | `--brand-acid-yellow` | `bg-acid` | Highlighter, stickers |
| Blood red | `--brand-blood-red` | `bg-blood` | Anotaciones, stickers |
| Hot pink | `--brand-hot-pink` | `bg-hot-pink` | SOLO heros líquidos |
| Safety orange | `--brand-safety-orange` | `bg-safety` | SOLO heros líquidos |

### Reglas absolutas (no se rompen)

1. Wordmark siempre lowercase con dot indigo.
2. Fondo cream texturado por default.
3. Una palabra serif italic por pieza (`<span className="serif-italic">`).
4. Crop marks en piezas oficiales (`<CropMarks />`).
5. Máximo 2 stickers por pieza.
6. Voz castellano voseo, sin chamuyo.

### Voz

- Frases cortas (8–14 palabras headline).
- Verbos en presente o imperativo.
- Datos antes que adjetivos.
- Voseo rioplatense.
- CTAs cortos: "Hablemos.", "Agendá.", "Pedí auditoría.".

---

## Componentes shared (API)

```tsx
<Wordmark size="sm|md|lg" color="black|cream|white" />
<CropMarks color="light-gray|ink" margin={24} size={18} thickness={1} />
<Sticker color="red|yellow|black|cream" text="VOL.01" rotation={-5} size="sm|md|lg" />
<MarkerAnnotation text="POSTA" arrow="left|right|down|up|none" rotation={-4} />
<Highlighter color="yellow|indigo">palabra</Highlighter>
<Nav />
<Footer />
<Newsletter variant="cream|ink" />
<SectionHeader tag="MAGAZINE" headline="EL TABLERO" italicWord="primero." subtitle="..." meta="ISSUE 001" />
```

---

## Despliegue

Vercel. Variables de entorno en dashboard. Dominio: `hqleads.com.ar`.

---

> *DISEÑADO Y EJECUTADO POR HUMANOS · INGENIERÍA COMERCIAL. NO MARKETING.*
