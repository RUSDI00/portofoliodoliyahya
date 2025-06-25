# Panduan Deploy di Netlify

Jika Vercel masih menampilkan error 404, Netlify bisa menjadi alternatif yang bagus untuk deploy website statis.

## Langkah-langkah:

1. Buat akun di [Netlify](https://www.netlify.com/) jika belum memilikinya

2. Klik tombol "New site from Git"

3. Pilih Git provider (GitHub, GitLab, atau Bitbucket)

4. Pilih repository yang berisi website portfolio Anda

5. Pada pengaturan deploy:
   - Branch: main (atau master)
   - Build command: (kosongkan)
   - Publish directory: ./ (atau arahkan ke root folder)

6. Klik "Deploy site"

7. Ketika deployment selesai, Anda akan mendapatkan URL dari Netlify

## Kelebihan Netlify:
- Deployment yang mudah dan andal
- CDN global
- HTTPS otomatis
- Formulir bawaan untuk form kontak
- Domain kustom gratis
- Pembaruan otomatis saat kode di-push ke repository
