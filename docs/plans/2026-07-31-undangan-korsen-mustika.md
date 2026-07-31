# Undangan Korsen & Mustika Implementation Plan

> **REQUIRED SUB-SKILL:** Use the executing-plans skill to implement this plan task-by-task.

**Goal:** Mengganti template menjadi undangan pernikahan Korsen Doni Setiawan dan Mustika Rahma Dhani yang mobile-first, romantis hangat, tanpa foto pasangan.

**Architecture:** Satu halaman statis ringan. `index.html` memuat konten; `css/guest.css` menangani tema dan animasi CSS; `js/romance.js` menangani cover, countdown, kalender, musik, dan form ucapan lokal. Tidak ada dependency baru atau API komentar.

**Tech Stack:** HTML, CSS, Vanilla JavaScript, Node test runner, esbuild yang sudah ada.

---

### Task 1: Tetapkan perilaku undangan

**Files:**
- Create: `test/invitation.test.js`
- Modify: `package.json`

**Step 1: Write the failing test**

Test memverifikasi nama pasangan, tanggal ISO, countdown, skrip interaksi, serta ketiadaan foto placeholder eksternal.

**Step 2: Run test to verify it fails**

Run: `node --test test/invitation.test.js`

Expected: FAIL karena template lama masih berisi data Wahyu/Riski dan foto placeholder.

### Task 2: Ganti struktur halaman

**Files:**
- Modify: `index.html`

**Step 1:** Ganti template Bootstrap lama dengan cover, hero monogram, mempelai, hitung mundur, detail lokasi, ucapan, penutup, bottom navigation, kontrol musik.

**Step 2:** Masukkan data final:
- Korsen Doni Setiawan
- Mustika Rahma Dhani
- Minggu, 9 Agustus 2026
- Dusun Sidodadi, Desa Canggu, Dempok, RT 01/RW 032, Kecamatan Badas, Kabupaten Kediri

### Task 3: Terapkan tema dan animasi

**Files:**
- Modify: `css/guest.css`

**Step 1:** Tulis token warna rose, peach, plum, dan ivory.

**Step 2:** Tambahkan kelopak CSS, amplop/monogram, reveal scroll, respons mobile, dan `prefers-reduced-motion`.

### Task 4: Tambahkan interaksi ringan

**Files:**
- Create: `js/romance.js`

**Step 1:** Buat controller cover, countdown hingga 9 Agustus 2026, link Google Calendar all-day, pemutar `assets/music/pure-love-304010.mp3`, dan konfirmasi form ucapan lokal.

### Task 5: Verifikasi

**Files:**
- Test: `test/invitation.test.js`

**Step 1:** Jalankan `npm test`.

**Step 2:** Jalankan `npm run build`.

**Step 3:** Pastikan server dev membalas halaman dan semua aset yang dipakai tersedia.
