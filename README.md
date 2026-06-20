# Portfolio — Erlangga Putra Widanta

Website portfolio satu halaman (single-page) bertema **Formula 1 / Mercedes-Petronas** untuk **Erlangga Putra Widanta**, seorang videografer & sinematografer. Dwibahasa (Indonesia / English), penuh animasi sinematik, dan responsif.

🔗 **Repo:** https://github.com/Fhafidz/Portofolio-angga

---

## ✨ Fitur

- **Dwibahasa (ID / EN)** — switch bahasa instan via tombol di navbar.
- **Preloader sinematik** — timecode kamera + progress bar ala alat editing video.
- **Animasi motion** — fade-in, stagger, parallax, hover lift (powered by Framer Motion / motion.dev).
- **Background Hero** — garis kecepatan ("speed streaks") mint yang bergerak diagonal.
- **Audio kontrol** — backsound dengan fade-in/out, otomatis pause saat video lightbox dibuka.
- **Galeri video** — kartu auto-play saat hover + lightbox cinema (Esc untuk tutup, scroll-lock, ARIA dialog).
- **Tech stack marquee** — dua baris berjalan tak terbatas dengan hover-to-pause.
- **Aksesibilitas** — label ARIA, focus state, keyboard support pada modal.
- **SEO** — meta Open Graph & Twitter Card.

---

## 🛠 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animasi | Framer Motion (motion.dev) |
| Dialog/alert | SweetAlert2 (via CDN) |
| Linting | ESLint 10 |

---

## 🚀 Menjalankan Proyek

```bash
# Install dependency
npm install

# Mode pengembangan (dev server + HMR)
npm run dev

# Build produksi
npm run build

# Pratinjau hasil build
npm run preview

# Lint
npm run lint
```

Dev server default: `http://localhost:5173`

---

## 📁 Struktur Proyek

```
portfolio-angga/
├── public/
│   └── assets/
│       ├── audio/      # backsound
│       ├── images/     # foto hero & driver
│       ├── videos/     # karya video portfolio
│       └── cv-erlangga-2026.pdf
├── src/
│   ├── components/     # komponen UI reusable
│   │   ├── AudioControl.jsx
│   │   ├── Button.jsx
│   │   ├── HeroBackgrounds.jsx  # animasi background Hero
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Reveal.jsx           # wrapper animasi scroll (Reveal/Stagger)
│   │   ├── SectionHeader.jsx
│   │   ├── stackIcons.jsx       # ikon badge tech-stack
│   │   └── VideoCard.jsx
│   ├── sections/       # bagian halaman
│   │   ├── Hero.jsx
│   │   ├── About.jsx           # "The Creator"
│   │   ├── TechStack.jsx
│   │   ├── Paddock.jsx         # galeri video
│   │   └── Contact.jsx         # "Radio Check"
│   ├── App.jsx         # state global (loading, audio, bahasa) + footer
│   ├── main.jsx        # entry point
│   └── index.css       # tema Tailwind + utility kustom
├── index.html          # meta SEO, fonts, SweetAlert CDN
└── vite.config.js
```

---

## 🎨 Tema & Desain

Tema warna terpusat di [`src/index.css`](src/index.css) lewat blok `@theme` Tailwind v4:

- `--color-mint` `#2DEFD0` — aksen UI utama (tombol, tag, label)
- `--color-petronas` `#00D2BE` — warna brand Petronas
- `--color-f1-black` `#0a0a0a` — background utama

Utility kustom: `card-f1` (kartu sudut asimetris), `tag-f1` (tag dengan notch), efek shimmer, ghost number, viewfinder bracket, dll.

---

## 👤 Kredit

Dibuat oleh **Fariz Hafidz** · © 2026
