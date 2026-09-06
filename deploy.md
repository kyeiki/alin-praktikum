# Panduan Deploy ke GitHub Pages

Situs ini dibangun dengan VitePress dan dideploy otomatis ke GitHub Pages lewat GitHub Actions setiap kali ada push ke cabang `main`.

## Prasyarat

- Akun GitHub (contoh di panduan ini: `kyeiki`)
- Git sudah terpasang dan terautentikasi (HTTPS atau SSH)
- Node.js 22+ dan npm (hanya untuk menjalankan situs secara lokal)

## Langkah 1: Push repositori ke GitHub

Buat repositori baru di GitHub tanpa file awal (tanpa README, tanpa .gitignore), lalu dari folder proyek:

```bash
git remote add origin git@github.com:kyeiki/alin-praktikum.git
git push -u origin main
```

Atau dengan GitHub CLI:

```bash
gh repo create alin-praktikum --public --source . --remote origin --push
```

## Langkah 2: Aktifkan GitHub Pages

1. Buka repositori di GitHub, masuk ke **Settings > Pages**.
2. Pada bagian **Build and deployment**, pilih **Source: GitHub Actions**.
3. Simpan.

Cara cepat lewat GitHub CLI (efek yang sama dengan langkah di atas):

```bash
gh api repos/kyeiki/alin-praktikum/pages -X POST -f build_type=workflow
```

## Langkah 3: Verifikasi deploy

Workflow `.github/workflows/deploy.yml` sudah disertakan di repositori ini. Saat push dilakukan, workflow akan:

1. Checkout repositori
2. Install dependensi (`npm ci`)
3. Build situs (`npm run docs:build`, hasil di `.vitepress/dist`)
4. Deploy artefak ke Pages

Pantau prosesnya di tab **Actions** pada halaman repositori, atau lewat CLI:

```bash
gh run watch
```

Setelah selesai, situs dapat diakses di:

```text
https://kyeiki.github.io/alin-praktikum/
```

## Catatan penting

- **Base path**: konfigurasi `.vitepress/config.mts` memakai `base: '/alin-praktikum/'`. Jika nama repositori diubah, sesuaikan nilai `base` agar tautan aset tidak rusak.
- **Deploy manual**: buka tab **Actions > Deploy VitePress site to Pages > Run workflow** bila ingin memicu deploy tanpa push baru.
- **Domain kustom**: isi kolom **Custom domain** di Settings > Pages, tambahkan berkas `CNAME` bila perlu. Untuk domain di root (misalnya `docs.contoh.ac.id`), `base` bisa dikosongkan menjadi `'/'`.
- **Pratinjau lokal** sebelum push:

```bash
npm install
npm run docs:dev
```

lalu buka `http://localhost:5173/alin-praktikum/`.
