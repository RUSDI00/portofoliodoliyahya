# Panduan Deploy Manual dengan Vercel CLI

## Prasyarat:
1. Install Node.js dan npm dari https://nodejs.org/
2. Install Vercel CLI dengan perintah: `npm install -g vercel`

## Langkah-langkah:

1. Buka terminal di direktori project Anda
   ```
   cd e:\doli\web porto doli
   ```

2. Login ke Vercel
   ```
   vercel login
   ```

3. Deploy project
   ```
   vercel --prod
   ```

4. Jawab pertanyaan yang muncul:
   - Set up and deploy: Yes
   - Which scope: (pilih user atau team)
   - Link to existing project: No
   - Project name: doli-portofolio
   - Directory: ./ (root directory)
   - Want to override settings: No

5. Tunggu sampai proses deploy selesai dan Anda akan mendapatkan URL website
