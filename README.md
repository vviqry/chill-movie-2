# Chill Movie App 🎬

Project ini adalah hasil pengerjaan **Mission: ReactJS - Interactive UI & Data Handling**.
Website ini dibangun menggunakan **React + Vite** dan telah memenuhi semua kriteria tugas yang diberikan.

## ✅ Fitur yang Telah Diselesaikan

Sesuai dengan *Mission Objective* dan *Guideline*, berikut adalah fitur-fitur yang sudah berhasil diimplementasikan:

### 1. Implementasi State Management (`useState`)
- Menggunakan `useState` untuk menangani perubahan data yang interaktif.
- State dikelola di parent component (`App.jsx`) dan didistribusikan ke child components via props.

### 2. CRUD Data (Array of Objects)
Fitur **Daftar Saya (Watchlist)** telah dibuat dengan kemampuan manipulasi data lengkap:
- **Create (Add)**: Menambahkan film ke daftar tontonan (tombol "+" atau Checklist).
- **Read (Get)**: Menampilkan daftar film yang disimpan di halaman "Daftar Saya".
- **Delete**: Menghapus film dari daftar tontonan.
- **Update**: Status tombol berubah real-time (tanda centang) jika film sudah ada di watchlist.

### 3. Sisi Interaktif Website
- **Hover Cards**: Efek hover ala Netflix pada kartu film.
- **Dynamic Routing**: Navigasi antar halaman (Home, Login, Register, Daftar Saya) menggunakan `react-router-dom`.
- **Responsive Design**: Tampilan menyesuaikan desktop, tablet, dan mobile sesuai desain Figma.

### 4. Styling & UI
- Implementasi desain pixel-perfect sesuai mockup Figma.
- Menggunakan **CSS Modules** untuk scoping style yang rapi.
- Semua elemen visual (Warna, Font, Button, Badge) sudah sesuai panduan.

---

## 🚀 Cara Menjalankan Project

1. Clone repository ini.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka di browser: `http://localhost:5173`

---

## 📷 Preview

Website ini memiliki halaman:
- **Home**: Banner Hero, Movie Carousel, Top 10 Badge.
- **Daftar Saya**: Halaman khusus koleksi film user.
- **Login & Register**: Halaman autentikasi statis dengan form validation dasar.

*Project ini dikerjakan untuk memenuhi tugas Harisenin Bootcamp.*
