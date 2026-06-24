# Portfolio — Erlangga Putra Widanta

Website portfolio satu halaman (single-page) bertema **Formula 1 / Mercedes-Petronas** untuk **Erlangga Putra Widanta** — video editor, photographer, & data analyst. Dwibahasa (Indonesia / English), penuh animasi sinematik, dan responsif.

🔗 **Repo:** https://github.com/Fhafidz/Portofolio-angga

---

## 🚀 Cara Menjalankan (untuk user baru)

**Prasyarat:** [Node.js](https://nodejs.org/) versi **18 atau lebih baru** (cek dengan `node -v`) dan npm.

```bash
# 1. Clone repository
git clone https://github.com/Fhafidz/Portofolio-angga.git
cd Portofolio-angga

# 2. Install dependency
npm install

# 3. Jalankan dev server (hot reload)
npm run dev
```

Buka browser ke alamat yang muncul di terminal — biasanya **http://localhost:5173**.

### Perintah lain

```bash
npm run build     # Build produksi → folder dist/
npm run preview   # Pratinjau hasil build secara lokal
npm run lint      # Jalankan ESLint
```

> **Catatan media:** file video besar **tidak** disertakan di repo (di-`.gitignore`) — video diputar via **Google Drive** (lihat `src/data/videos.js`) dan foto via **Google Drive** (`src/data/photos.js`). Agar tampil, file di Drive harus disetel **"Anyone with the link" (Viewer)**.

---

## 🛠 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animasi | Framer Motion (motion.dev) |
| Linting | ESLint 10 |

Tanpa backend — sepenuhnya statis, siap di-deploy ke Vercel / Netlify / GitHub Pages.

---

## 📁 Struktur Proyek

```
portfolio-angga/
├── public/
│   └── assets/
│       ├── audio/      # backsound
│       ├── images/     # foto hero & driver
│       └── cv-erlangga-2026.pdf
├── src/
│   ├── components/          # komponen UI reusable
│   │   ├── AudioControl.jsx
│   │   ├── Backgrounds.jsx      # animasi garis diagonal (Hero + About)
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── PhotoCard.jsx
│   │   ├── Preloader.jsx
│   │   ├── Reveal.jsx           # wrapper animasi scroll (Reveal/Stagger)
│   │   ├── SectionHeader.jsx
│   │   ├── stackIcons.jsx       # ikon badge tech-stack
│   │   └── VideoCard.jsx
│   ├── sections/           # bagian halaman
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── TechStack.jsx
│   │   ├── Videography.jsx      # "Project's" — portofolio video
│   │   ├── Photography.jsx      # "Project's" — galeri foto (preview)
│   │   ├── PhotographyPage.jsx  # halaman penuh "All Photos"
│   │   └── Contact.jsx
│   ├── data/               # data konten (terpisah dari komponen)
│   │   ├── videos.js           # daftar video (Google Drive)
│   │   └── photos.js           # daftar foto (Google Drive)
│   ├── i18n/               # internasionalisasi (ID / EN)
│   │   ├── translations.js     # semua teks dwibahasa
│   │   └── LanguageContext.jsx # provider + hook useLanguage()
│   ├── App.jsx             # layout utama + state audio + footer
│   ├── main.jsx            # entry point (membungkus <LanguageProvider>)
│   └── index.css           # tema Tailwind + utility kustom
├── index.html              # meta SEO, fonts, dll
└── vite.config.js
```

---

## 🌐 Bahasa (i18n)

Teks dwibahasa terpusat di [`src/i18n/translations.js`](src/i18n/translations.js). Komponen mengambilnya lewat hook:

```jsx
import { useLanguage } from '../i18n/LanguageContext'

function MyComponent() {
  const { t, lang, toggleLang } = useLanguage()
  return <h2>{t.about.title}</h2>
}
```

Tombol globe di navbar memanggil `toggleLang()` untuk berganti ID ⇄ EN; seluruh teks otomatis ikut berubah.

---

## 🎨 Tema & Desain

Tema warna terpusat di [`src/index.css`](src/index.css) lewat blok `@theme` Tailwind v4:

- `--color-mint` `#2DEFD0` — aksen UI utama (tombol, tag, label)
- `--color-petronas` `#00D2BE` — warna brand Petronas
- `--color-f1-black` `#0a0a0a` — background utama

Utility kustom: `card-f1` (kartu sudut asimetris), `tag-f1` (tag dengan notch), efek shimmer, viewfinder bracket, marquee, dll.

---

## ✏️ Mengganti / Menambah Konten

- **Teks** → edit [`src/i18n/translations.js`](src/i18n/translations.js) (ID & EN).
- **Video** → tambah/ubah item di [`src/data/videos.js`](src/data/videos.js) (pakai `driveId` dari link Google Drive).
- **Foto** → tambah/ubah item di [`src/data/photos.js`](src/data/photos.js). Preview section menampilkan `previewPhotos`; halaman "All Photos" menampilkan semua `photos`.

---

## 👤 Kredit

Dibuat oleh **Fariz Hafidz** · © 2026
