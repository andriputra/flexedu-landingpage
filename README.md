# FlexEdu Landing Page

Landing page statis untuk **FlexEdu** (absensi sekolah + kiosk + face recognition).  
Dibangun dengan **React + Vite + Tailwind CSS**. Hasil build adalah file HTML/CSS/JS biasa — cocok diunggah ke **cPanel File Manager** tanpa terminal.

## Prasyarat (hanya di komputer Anda)

Node.js 18+ untuk *menghasilkan* file statis. Hosting cPanel **tidak** perlu Node.js.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk cPanel

```bash
npm run build
```

Folder **`dist/`** adalah yang diunggah. Isinya kurang lebih:

- `index.html`
- `favicon.png`, `logo.png`, `kiosk.png`, `face-scan.png`
- `.htaccess`
- folder `assets/` (JS & CSS)

## Upload ke cPanel (tanpa terminal)

1. Login cPanel → **File Manager**.
2. Masuk ke `public_html` (atau folder subdomain).
3. Unggah **seluruh isi** folder `dist/` (bukan foldernya sendiri).
4. Pastikan `index.html` ada di root `public_html`.
5. Di File Manager, aktifkan **Show Hidden Files** agar file `.htaccess` ikut terlihat.
6. Buka domain Anda di browser.

Jika website diletakkan di subfolder (contoh `sekolah.com/flexedu`), unggah isi `dist/` ke folder itu. Project ini memakai `base: './'` agar path aset tetap relatif.

## Ganti nomor WhatsApp & email

Edit `src/config.js`, lalu jalankan `npm run build` lagi dan unggah ulang isi `dist/`.

```js
whatsapp: "6281234567890", // tanpa +, format 62
email: "halo@flexedu.id",
```

## Catatan desain

- Latar navy gelap + aksen cyan (face scan & kiosk)
- Aksen emas dari logo EDU untuk tombol CTA
- Form kontak membuka WhatsApp (tidak butuh backend)
