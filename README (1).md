
# Font-Checker

# 🗂️ BERKAS RAHASIA: Siapa Kamu Sebenarnya?

> **Kuis kepribadian interaktif** bergaya dossier rahasia yang mengungkap "identitas font" tersembunyi berdasarkan jawaban psikologis pengguna. Dibangun murni dengan HTML, CSS, dan JavaScript — tanpa backend, tanpa framework.

---

## 🗂️ Struktur File

```
font-quiz/
├── index.html    # Struktur antarmuka (HTML)
├── style.css     # Tampilan Neo-Brutalism & retro (CSS)
└── script.js     # Seluruh logika kuis (JavaScript)
```

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| **10 Pertanyaan Psikologis** | Pertanyaan diacak setiap sesi untuk pengalaman berbeda |
| **4 Kategori Kepribadian** | Techy, Elegant, Fun, Classic — masing-masing memetakan ke font berbeda |
| **Hasil Dinamis** | Font hasil dimuat langsung dari Google Fonts secara dinamis saat hasil ditampilkan |
| **Efek Typewriter** | Nama font hasil diketik satu per satu dengan kursor berkedip |
| **Grafik Analisis** | Bar chart horizontal (Chart.js) menampilkan skor kecocokan tiap kategori |
| **Palet Warna** | Setiap hasil dilengkapi palet warna khas kepribadian |
| **Berbagi Hasil** | Tombol share ke Twitter, WhatsApp, Instagram (salin link), dan salin URL |
| **Loading Retro** | Animasi "redact block" bergaya pixelated saat memproses hasil |
| **Animasi Stepped** | Transisi slide & fade menggunakan `steps()` CSS untuk feel retro/kaku |
| **Responsif** | Mendukung tampilan mobile dan desktop |

---

## 🎯 Hasil Kepribadian

| Kategori | Font | Deskripsi Singkat |
|---|---|---|
| **Techy** | Roboto Mono | Logis, efisien, berorientasi data |
| **Elegant** | Playfair Display | Bercita rasa tinggi, menghargai estetika |
| **Fun** | Pacifico | Ekspresif, dinamis, kreatif |
| **Classic** | Lora | Tradisional, bisa diandalkan, stabil |

---

## 🚀 Cara Menjalankan

Tidak perlu instalasi apapun:

1. Pastikan ketiga file (`index.html`, `style.css`, `script.js`) berada dalam **satu folder yang sama**.
2. Buka `index.html` langsung di browser modern (Chrome, Edge, Firefox).

```
font-quiz/
├── index.html  ← buka file ini
├── style.css
└── script.js
```

> **Catatan:** Memuat font hasil (Roboto Mono, Playfair Display, Pacifico, Lora) memerlukan koneksi internet karena diambil dari Google Fonts secara dinamis.

---

## 🛠️ Teknologi yang Digunakan

| Library | Versi | Fungsi |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | CDN | Utility-first styling |
| [Chart.js](https://www.chartjs.org) | CDN | Visualisasi bar chart hasil skor |
| [Font Awesome](https://fontawesome.com) | 6.4.0 | Ikon jawaban & tombol |
| [Google Fonts](https://fonts.google.com) | — | Courier Prime, Crimson Text, + font hasil dinamis |

---

## 🎨 Desain

Menggunakan estetika **Neo-Brutalism** dengan tema **berkas rahasia / dossier classified**:

- **CSS Variables** untuk palet warna yang konsisten: `--ink`, `--paper`, `--paper-dot`, `--stamp-red`, `--moss-green`
- **Animasi stepped** (`steps()`) untuk kesan pixelated/retro pada semua transisi
- **Efek tombol fisik** — tombol bergeser saat diklik, mensimulasikan tombol yang ditekan
- **Tanpa border-radius** — semua elemen kotak tajam, ciri khas Neo-Brutalism
- Background pola titik-titik halftone ala kertas arsip
- Font: **Courier Prime** untuk UI typewriter, **Crimson Text** untuk narasi

---

## 📁 Deskripsi GitHub

```
🗂️ Kuis kepribadian interaktif bergaya dossier rahasia. Jawab 10 pertanyaan psikologis untuk mengungkap identitas font tersembunyi. Neo-Brutalism UI, animasi retro, grafik hasil, dan share ke sosmed. Pure HTML/CSS/JS.
```

---

## 👤 Author

**RAHMAD SAINS**  
`[ ARCHIVIST — CLASSIFIED DOCUMENTS DIVISION ]`