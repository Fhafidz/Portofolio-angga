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

## 🐙 Mengubah Repository & Push ke GitHub Sendiri

Jika Anda ingin menyimpan kode ini ke akun GitHub pribadi Anda, ikuti langkah-langkah berikut:

### 1. Hubungkan ke Repository Baru Anda
Secara default, repository lokal Anda terhubung ke repository asli. Anda perlu mengubah URL remote ke repository baru Anda:

```bash
# 1. Hapus remote origin yang lama
git remote remove origin

# 2. Buat repository baru di GitHub pribadi Anda (misal: "my-portfolio")
# Catatan: Jangan centang opsi "Add a README", "Add .gitignore", atau "Choose a license"

# 3. Hubungkan repository lokal Anda ke repository baru Anda
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git

# 4. Ubah nama branch utama ke 'main' (jika belum)
git branch -M main

# 5. Push kode Anda ke repository baru Anda
git push -u origin main
```

### 2. Mengubah Akun/Kredensial Git di Komputer
Jika Anda perlu mengganti konfigurasi nama dan email git lokal yang digunakan untuk commit:

```bash
# Set secara global (untuk semua project di komputer)
git config --global user.name "Nama Anda"
git config --global user.email "emailanda@example.com"

# Atau set secara lokal (hanya untuk folder project ini saja)
git config user.name "Nama Anda"
git config user.email "emailanda@example.com"
```

---

## 🌐 Tutorial Deploy ke Vercel

Aplikasi ini dapat di-deploy dengan sangat mudah dan gratis ke **Vercel** karena merupakan aplikasi web statis (Vite + React).

### Cara 1: Deploy Otomatis via GitHub (Sangat Direkomendasikan)
Dengan cara ini, website Anda akan otomatis ter-update setiap kali Anda melakukan `git push`.

1. Masuk/Daftar ke [Vercel](https://vercel.com/) menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Di bagian **"Import Git Repository"**, cari dan pilih repository portofolio Anda yang sudah di-push ke GitHub pribadi.
4. Pada halaman konfigurasi project (**Configure Project**):
   - **Framework Preset:** Pilih **Vite** (biasanya terdeteksi secara otomatis).
   - **Root Directory:** `./`
   - **Build and Output Settings:** Biarkan default (`npm run build` untuk build command, dan `dist` untuk output directory).
5. Klik **"Deploy"**.
6. Tunggu sekitar 1–2 menit. Website portofolio Anda sudah online dan Anda akan mendapatkan link website gratis (misalnya `https://nama-project.vercel.app`).


## 👤 Kredit

Dibuat oleh **Fariz Hafidz** · © 2026
