---
title: "MODUL PRAKTIKUM MATA KULIAH ALJABAR LINEAR"
subtitle: "MODUL 1: PENGENALAN RUST & DASAR KOMPUTASI VEKTOR"
---

# MODUL PRAKTIKUM MATA KULIAH

# ALJABAR LINEAR

# MODUL 1: PENGENALAN RUST & DASAR KOMPUTASI VEKTOR

**PROGRAM SARJANA TERAPAN TEKNIK INFORMATIKA**

**JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA**

**POLITEKNIK NEGERI BANDUNG**

**2026**

# LEMBAR PERSETUJUAN

**PENGENALAN RUST & DASAR KOMPUTASI VEKTOR**

| Proses | Jabatan | Nama | Tanda Tangan |
|---|---|---|---|
| Disusun Oleh | Pengampu Praktikum Mata Kuliah Aljabar Linear | | |
| Diperiksa oleh | Ketua Kelompok Bidang Keahlian Multimedia | | |

**PUBLISHED BY**

Jurusan Teknik Komputer & Informatika Politeknik Negeri Bandung

Jl. Gegerkalong Hilir, Desa Ciwaruga, Kecamatan Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559

Copyright © 2026 by JTK POLBAN

All rights reserved. No part of the contents of this book may be reproduced or transmitted in any form or by any means without the written permission of the publisher.

| | |
|---|---|
| Penanggung jawab | : |
| Tim Penulis | : |

# KATA PENGANTAR

Puji syukur kehadirat Tuhan Yang Maha Esa, karena berkat karunia dan ridho-NYA "PENGENALAN RUST & DASAR KOMPUTASI VEKTOR" telah selesai disusun.

Penyusunan modul ini bertujuan memberikan prosedur operasional baku (POB) kegiatan praktikum aljabar linear berbasis bahasa Rust, mulai dari persiapan, pelaksanaan, pelaporan, hingga evaluasi. Berbeda dengan pendekatan berbasis skrip, Rust menuntut disiplin tipe, kepemilikan (ownership), dan pengujian sejak awal, kualitas yang justru selaras dengan kebutuhan komputasi numerik yang andal (reliable) pada level pascasarjana.

Aljabar linear adalah fondasi komputasi modern: pembelajaran mesin, grafika komputer, hingga sistem tertanam. Melalui modul ini mahasiswa dibiasakan menguji konsep abstrak vektor secara komputasional dengan performa setara C dan jaminan keamanan memori.

Semoga modul ini bermanfaat bagi program pascasarjana Jurusan Teknik Komputer & Informatika Politeknik Negeri Bandung.

Bandung, 2026

# DAFTAR ISI

| Judul | Halaman |
|---|---|
| LEMBAR PERSETUJUAN | i |
| KATA PENGANTAR | iii |
| DAFTAR ISI | iv |
| DAFTAR TABEL | v |
| IDENTITAS MATA KULIAH, PROGRAM STUDI DAN KURIKULUM | vii |
| CAPAIAN PEMBELAJARAN | viii |
| BAGIAN I. BAHAN KAJIAN | 1 |
| BAGIAN II. PENYIAPAN PELAKSANAAN PRAKTIKUM (PREPARATION) | 3 |
| BAGIAN III. PROSEDUR PELAKSANAAN PRAKTIKUM (STEP BY STEP) | 5 |
| III.1. Teori Singkat: Komputasi Saintifik, Rust & Vektor | 5 |
| III.2. Environment & Setup Praktikum (rustup + Cargo) | 7 |
| III.3. Dasar Sintaks & Sistem Tipe Rust | 9 |
| III.4. Task 0: Hello World & Verifikasi Toolchain | 11 |
| III.5. Task I: Dasar Sintaks & Tipe Data Rust | 12 |
| III.6. Task II: Vektor dengan Array & Vec (Manual) | 14 |
| III.7. Task III: Introduksi nalgebra untuk Vektor | 16 |
| BAGIAN IV. MEDIA DAN MEKANISME PENGUMPULAN | 19 |
| BAGIAN V. PEMBAHASAN DAN EVALUASI HASIL PRAKTIKUM | 20 |
| DAFTAR PUSTAKA | 21 |
| LAMPIRAN | 1 |

# DAFTAR TABEL

Tabel 1. Pemetaan Aktivitas Perkuliahan Terhadap 16 Modul Praktikum

Tabel 2. Standar Penamaan Proyek dan Berkas Pengumpulan Praktikum Aljabar Linear

Tabel 3. Ringkasan Tipe Data Dasar Rust dan Operasi yang Didukung

Tabel 4. Perbandingan Representasi Vektor: Array/Slice Rust vs nalgebra

Tabel 5. Kumpulan Konstruktor Vektor nalgebra yang Umum Digunakan

Tabel 6. Ringkasan Operasi Vektor nalgebra: Aritmetika, Dot Product, dan Statistik

Tabel 7. Rubrik dan Matriks Kriteria Penilaian Evaluasi Praktikum

# IDENTITAS MATA KULIAH, PROGRAM STUDI DAN KURIKULUM

| Atribut | Keterangan |
|---|---|
| Mata Kuliah | : Aljabar Linear (Praktikum) |
| Mata Kuliah (Inggris) | : Linear Algebra (Practicum) |
| Kode Mata Kuliah | : 25TI2103 |
| SKS | : 1 |
| Sifat Pengambilan | : Wajib |
| Bentuk Pembelajaran | : Tutorial, Praktik |
| Metode Pembelajaran | : Problem Based Learning, Project Based Learning |
| Media | : Offline / Daring (Lokal: Cargo & rust-analyzer) |
| Semester | : I |
| Kelompok Mata Kuliah | : Multimedia |
| Program Pendidikan | : Sarjana Terapan Teknik Informatika |
| Jurusan | : Teknik Komputer & Informatika |
| Penyusun | : Muhammad Rizqi Sholahuddin|

# CAPAIAN PEMBELAJARAN

**Tabel 1. Pemetaan Aktivitas Perkuliahan Terhadap 16 Modul Praktikum**

| AKTIVITAS PERKULIAHAN | INTEGRASI DENGAN MODUL PRAKTIKUM |
|---|---|
| **Aktivitas 1** Konfigurasi toolchain Rust (rustup, cargo, rust-analyzer) serta pemahaman sistem tipe, ownership, dan struktur kontrol Rust untuk keperluan komputasi saintifik. | **MODUL 1** |
| **Aktivitas 2** Representasi vektor melalui array/slice/Vec native beserta operasi manualnya, dan analisis keterbatasannya terhadap operator matematika. | **MODUL 1** |
| **Aktivitas 3** Implementasi operasi vektor (aritmetika element-wise, dot product, norma, statistik) secara efisien menggunakan crate nalgebra disertai pengujian otomatis. | **MODUL 1-2** |
| **Aktivitas 4** Analisis ruang vektor, span, dan ketergantungan linear secara komputasional. | **MODUL 3** |
| **Aktivitas 5** Penyelesaian sistem persamaan linear dengan eliminasi Gauss, RREF, dan rank. | **MODUL 4-5** |
| **Aktivitas 6** Implementasi dekomposisi matriks (LU, QR, Cholesky) beserta strategi pivoting dan analisis kompleksitasnya. | **MODUL 6, 10, 12** |
| **Aktivitas 7** Perhitungan determinan, invers, dan transformasi linear secara komputasional. | **MODUL 7-8** |
| **Aktivitas 8** Penentuan nilai/vektor eigen, diagonalisasi, serta penerapannya (power iteration). | **MODUL 9** |
| **Aktivitas 9** Penyelesaian masalah least squares dan regresi dengan metode matriks. | **MODUL 11** |
| **Aktivitas 10** Penerapan SVD, pseudoinverse, dan reduksi dimensi pada data nyata. | **MODUL 13, 16** |
| **Aktivitas 11** Analisis kondisi numerik, stabilitas algoritma, dan galat titik mengambang. | **MODUL 14** |
| **Aktivitas 12** Pemilihan metode iteratif (Jacobi, Gauss-Seidel, gradien) untuk sistem skala besar. | **MODUL 15** |
| **Aktivitas 13** Integrasi seluruh konsep dalam proyek terpadu (PCA/PageRank) dengan praktik perangkat lunak yang baik. | **MODUL 16** |

# BAGIAN I. BAHAN KAJIAN

## I.1. Penggunaan Pedoman

Pedoman ini memberikan instruksi sistematis mengenai tata cara persiapan, pengoperasian, penyelesaian tugas praktikum pengenalan Rust dan dasar komputasi vektor untuk mata kuliah Aljabar Linear, hingga mekanisme evaluasi.

## I.2. Ruang Lingkup

Kegiatan mencakup setup toolchain Rust (rustup, cargo, rust-analyzer), penguasaan dasar sintaks dan sistem tipe Rust (`i32`, `f64`, array, slice, `Vec<T>`), struktur kontrol (`loop`, `while`, `for`, `if`), fungsi dan ownership dasar, representasi vektor menggunakan array/slice/Vec native beserta keterbatasannya, serta introduksi crate `nalgebra` untuk merepresentasikan dan memanipulasi vektor melalui operator overloading, dot product, norma, dan fungsi statistik. Semuanya disertai pengujian otomatis via `cargo test`.

## I.3. Teknologi

Berikut adalah teknologi yang digunakan pada modul praktikum ini:

- Bahasa Pemrograman Rust (edisi 2021 atau lebih baru, toolchain stable).
- rustup: manajer toolchain resmi Rust (`https://rustup.rs`).
- Cargo: build system dan manajer dependensi (terpasang bersama rustup).
- Crate `nalgebra` (versi 0.35): pustaka aljabar linear berbasis tipe generik.
- Editor: VS Code + ekstensi rust-analyzer (disarankan), atau RustRover.
- Sistem operasi: Linux, macOS, atau Windows 10/11 (WSL2 disarankan untuk Windows).

## I.4. Studi Kasus

Mahasiswa membangun *crate* komputasi yang memuat representasi vektor data nyata (vektor posisi titik pada bidang, vektor nilai pengukuran sensor, atau vektor fitur sederhana). Mahasiswa membandingkan dua pendekatan: (1) array/slice native dengan operasi manual berbasis iterator, dan (2) tipe `SVector`/`DVector` dari nalgebra dengan operator bawaan. Pada akhir praktikum mahasiswa menghitung besaran turunan (jumlah, rata-rata, ekstremum, dot product) dan menganalisis hubungan geometris antar vektor, lalu memvalidasi seluruhnya dengan unit test.

## I.5. Konsep yang Digunakan

**Vektor sebagai Objek Matematika & Komputasional:** Vektor adalah besaran bersama besar (magnitude) dan arah, direpresentasikan sebagai sekumpulan komponen terurut $\mathbf{v} = (v_1, \dots, v_n) \in \mathbb{R}^n$. Secara komputasional, vektor dimodelkan sebagai blok memori homogen yang mendukung operasi aritmetika antar elemen.

**Static Typing, Ownership & Borrowing:** Rust bersifat *statically typed*: seluruh tipe diperiksa pada saat kompilasi. Setiap nilai memiliki tepat satu pemilik (*owner*); akses lain harus melalui *borrow* (`&T` immutable atau `&mut T` mutable). Disiplin ini mencegah *data race* dan *use-after-free* tanpa garbage collector, prasyarat komputasi numerik aman pada level produksi (Klabnik & Nichols, 2023).

**Generic & Type-Level Linear Algebra:** nalgebra mengodekan dimensi vektor/matriks pada sistem tipe (mis. `Vector3<f64>` berdimensi tetap 3), sehingga ketidaksesuaian dimensi terdeteksi saat kompilasi, bukan saat runtime, berbeda dengan pendekatan dinamis pada Python/NumPy (Crozet, 2026).

# BAGIAN II. PENYIAPAN PELAKSANAAN PRAKTIKUM (PREPARATION)

## II.1. Peralatan Praktikum

Kebutuhan peralatan praktikum dapat dilihat pada list berikut:

**Perangkat Hardware:**

- PC/Laptop (Processor Dual-Core 2.0 GHz+, RAM minimal 8 GB, Ruang Disk minimal 5 GB).
- Koneksi internet yang stabil (instalasi toolchain dan crate).

**System Software:**

- Sistem Operasi Linux (Ubuntu 22.04+), macOS 12+, Windows 10/11 64-bit (WSL2 disarankan).

**Development Tools:**

- rustup + toolchain stable terbaru (`rustc --version` ≥ 1.75).
- VS Code + ekstensi **rust-analyzer** (opsional namun sangat disarankan).
- Crate `nalgebra`: dideklarasikan pada `Cargo.toml`.

## II.2. Keamanan & Keselamatan Kerja

Komputer merupakan perangkat teknologi komunikasi dan informasi yang sering digunakan dewasa ini. Pada saat bekerja dengan komputer ada beberapa hal yang harus diperhatikan agar tidak berdampak buruk bagi kesehatan bahkan keselamatan kita. Komputer dapat menyebabkan penggunanya menderita nyeri otot dan tulang terutama bahu, pergelangan tangan, leher, punggung, pinggang bagian bawah, mata merah berair, bahkan gangguan penglihatan.

Beberapa hal yang bisa dilakukan untuk menghindari efek negatif dari bekerja dengan komputer:

- Aturlah posisi tubuh saat bekerja dengan komputer sehingga merasa nyaman.
- Aturlah posisi perangkat komputer dan ruangan sehingga memberi rasa nyaman.
- Makan, minum, dan istirahatlah yang cukup.
- Gerakkan badan untuk mengurangi ketegangan otot dan pikiran, dan olahragalah secara teratur.
- Sesekali alihkan pandangan ke luar ruangan untuk menyegarkan mata.

**Mengatur posisi tubuh:**

- Posisi Kepala & Leher harus tegak lurus dengan wajah menghadap langsung ke komputer, jangan menengadah atau menunduk.
- Posisi Punggung yang baik adalah tegak, tidak miring ke kanan/kiri, tidak membungkuk dan tidak menyandar terlalu ke belakang.
- Posisi Pundak tidak terlalu terangkat dan tidak terlalu ke bawah, pastikan otot pundak tidak tegang.
- Posisi Lengan & Siku yang baik adalah apabila mengetik dan menggunakan mouse dengan nyaman.
- Posisi Kaki harus bebas, diluruskan sesekali agar aliran darah lancar.

**Mengatur Posisi Komputer:**

- Monitor harus diletakkan di tempat yang tidak memantulkan cahaya lain.
- Letakkan monitor lebih rendah dari garis horizontal mata.
- Aturlah cahaya monitor (contrast/brightness) agar tidak terlalu gelap dan terang.
- Sering-seringlah mengedipkan mata (minimal 5 detik setiap 10 menit).

**Istirahat Mata:** Terapkan aturan 20-20-20: setiap 20 menit, alihkan pandangan ke objek yang berjarak 20 kaki (±6 meter) selama 20 detik, untuk mencegah kelelahan mata akibat paparan monitor visual.

# BAGIAN III. PROSEDUR PELAKSANAAN PRAKTIKUM (STEP BY STEP)

## III.1. Teori Singkat: Komputasi Saintifik, Rust & Vektor

Komputasi saintifik adalah pemanfaatan komputer untuk membangun model dan menganalisis masalah matematis serta masalah rekayasa. Dalam aljabar linear, komputasi memungkinkan mahasiswa menguji konsep abstrak melalui eksperimen numerik langsung sehingga intuisi geometris dan aljabaris terbentuk secara simultan. Rust dipilih karena menggabungkan performa setara C dengan jaminan *memory safety* saat kompilasi, hal yang kritis untuk kode numerik yang andal dan dapat diuji.

Sebuah **vektor** dalam $\mathbb{R}^n$ didefinisikan sebagai sekumpulan komponen terurut $\mathbf{v} = (v_1, v_2, \dots, v_n)$. Operasi dasar pada vektor mencakup:

- **Penjumlahan vektor:** $\mathbf{u} + \mathbf{v} = (u_1+v_1,\; u_2+v_2,\; \dots,\; u_n+v_n)$.
- **Perkalian dengan skalar:** $k\mathbf{v} = (kv_1,\; kv_2,\; \dots,\; kv_n)$.
- **Perkalian titik (dot product):** $\mathbf{u}\cdot\mathbf{v} = \sum_{i=1}^{n} u_i v_i$.

Dot product berkaitan dengan geometri vektor melalui relasi $\mathbf{u}\cdot\mathbf{v} = \|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$, sehingga dapat digunakan untuk mengukur proyeksi dan sudut antar vektor. Norm (panjang) vektor didefinisikan sebagai $\|\mathbf{v}\| = \sqrt{\mathbf{v}\cdot\mathbf{v}}$.

nalgebra adalah pustaka aljabar linear generik untuk Rust yang mengodekan dimensi objek pada sistem tipe. Operasi vektor direalisasikan melalui *operator overloading* (`+`, `-`, `*`) yang diproses menjadi kode mesin teroptimasi tanpa overhead interpreter, berbeda fundamental dari pendekatan dinamis NumPy (Crozet, 2026).

## III.2. Environment & Setup Praktikum

Untuk praktikum berbasis Rust, seluruh kegiatan dilakukan **lokal** menggunakan toolchain resmi.

### A. Instalasi rustup & Toolchain

1. Buka terminal, lalu jalankan (Linux/macOS):

   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   Untuk Windows, unduh `rustup-init.exe` dari `https://rustup.rs`.

2. Muat environment baru (`source "$HOME/.cargo/env"` atau buka ulang terminal), lalu verifikasi:

   ```
   rustc --version
   cargo --version
   ```

### B. Membuat Proyek Cargo

```
cargo new praktikum-al
cd praktikum-al
cargo run
```

Struktur yang dihasilkan:

```
praktikum-al/
├── Cargo.toml      # manifes dependensi
└── src/
    └── main.rs     # titik masuk program
```

3. Tambahkan dependensi nalgebra pada `Cargo.toml`:

   ```toml
   [dependencies]
   nalgebra = "0.35.0"
   ```

   Lalu unduh dan kompilasi:

   ```
   cargo build
   ```

### C. Perintah Cargo Inti

- `cargo run`: kompilasi dan jalankan.
- `cargo test`: jalankan seluruh unit test (`#[test]`).
- `cargo fmt`: format otomatis sesuai gaya resmi Rust.
- `cargo clippy`: linter idiomatik (kualitas kode).

## III.3. Dasar Sintaks & Sistem Tipe Rust

Sebelum bekerja dengan vektor, mahasiswa perlu memahami fondasi sintaks Rust berikut.

**Variable Binding & Immutability.** Variabel bersifat immutable secara default; `mut` diperlukan untuk perubahan:

```rust
let x: i32 = 8;        // integer 32-bit, tidak bisa diubah
let mut y: f64 = 1.2;  // float 64-bit, bisa diubah
y += 0.3;
const EPSILON: f64 = 1e-10; // konstanta compile-time
```

**Tipe Data Angka.** `i32`/`u32`/`i64` (bulat) dan `f32`/`f64` (desimal) mendukung `+ - * / %`; `f64` juga `powf`, `sqrt`, `abs`. Komputasi numerik praktikum ini selalu memakai `f64`.

**Array, Slice, dan Vec.**

```rust
let arr: [f64; 3] = [1.0, 2.0, 3.0]; // panjang tetap, di stack
let slice: &[f64] = &arr[..];         // pinjaman (borrow) read-only
let mut v: Vec<f64> = vec![1.0, 2.0]; // dinamis, di heap
v.push(3.0);
println!("{:?} {} {}", arr, slice[0], v.len());
```

**Struktur Kontrol Dasar.**

```rust
for angka in [3, 1, 4, 1, 5] {
    if angka % 2 == 0 {
        println!("{angka} genap");
    } else {
        println!("{angka} ganjil");
    }
}
```

**Fungsi.** Tipe parameter dan nilai balik wajib eksplisit:

```rust
fn dot(a: &[f64], b: &[f64]) -> f64 {
    a.iter().zip(b).map(|(x, y)| x * y).sum()
}
```

**Keterbatasan Array/Slice untuk Operasi Matematika.** Rust tidak menyediakan operator aritmetika antar array/slice: `a + b` pada dua array bahkan **gagal kompilasi**. Operasi element-wise harus ditulis manual via iterator:

```rust
let a = [1.0, 2.0, 3.0];
let b = [4.0, 5.0, 6.0];
// let c = a + b;  // ERROR: cannot add `[f64; 3]` and `[f64; 3]`
let c: Vec<f64> = a.iter().zip(b).map(|(x, y)| x + y).collect();
```

Keterbatasan ini (dijaga kesalahan pada compile-time) menjadi motivasi penggunaan nalgebra pada Task III.

## III.4. Task 0: Hello World & Verifikasi Toolchain

**TASK 0: HELLO WORLD & VERIFIKASI TOOLCHAIN**

1. Buat proyek baru: `cargo new praktikum-al` lalu masuk ke direktorinya.
2. Ganti isi `src/main.rs` dan jalankan `cargo run`:

   ```rust
   fn main() {
       println!("Hello, Aljabar Linear!");
       println!("Rust version check: OK");
   }
   ```

3. Tambahkan `nalgebra = "0.35.0"` pada `Cargo.toml`, lalu pada `main.rs` verifikasi versi crate:

   ```rust
   use nalgebra::Vector3;

   fn main() {
       let v = Vector3::new(1.0, 2.0, 3.0);
       println!("nalgebra OK, contoh vektor: {v}");
   }
   ```

4. Jalankan `cargo run`, amati *output*. Catat versi `rustc`, `cargo`, dan versi `nalgebra` (cek `Cargo.lock`) pada catatan praktikum.
5. Tambahkan komentar identitas (Nama, NIM, Kelas) di bagian paling atas `main.rs`.

## III.5. Task I: Dasar Sintaks & Tipe Data Rust

**TASK I: EKSPLORASI DASAR SINTAKS & SISTEM TIPE RUST**

1. Pada proyek, buat berkas `src/task1.rs` (modul baru; deklarasikan `mod task1;` di `main.rs`), lalu eksplorasi konsep berikut.
2. **Variable binding & immutability**: buat binding bertipe `i32`, `f64`, `bool`, `&str`, lalu tampilkan tipenya:

   ```rust
   let n: i32 = 10;
   #[allow(clippy::approx_constant)] // 3.14159 ≈ PI, tanpa ini clippy menolak
   let phi: f64 = 3.14159;
   let aktif: bool = true;
   let nama: &str = "Vektor";
   println!("{} {} {} {}", n, phi, aktif, nama);
   ```

3. **Operasi aritmetika**: eksplorasi operator pada `i32` dan `f64`:

   ```rust
   let (a, b) = (7.0f64, 2.0f64);
   println!("{}", a / b);   // 3.5
   println!("{}", a % b);   // 1  (sisa, juga berlaku untuk float)
   println!("{}", a.powf(b)); // 49
   println!("{}", 7 / 2);   // 3  (integer division, dipotong)
    println!("{}", 9.0f64.sqrt()); // 3  (.sqrt() hanya tersedia untuk tipe float, bukan integer)
   ```

4. **Array & indexing**: buat array, akses elemen, slicing via `&v[1..4]`:

   ```rust
   let v = [10.0, 20.0, 30.0, 40.0, 50.0];
   println!("{} {}", v[0], v[v.len() - 1]);
   println!("{:?}", &v[1..4]); // [20.0, 30.0, 40.0]
   ```

5. **Perulangan & percabangan**: iterasi dan klasifikasi genap/ganjil:

   ```rust
   for nilai in v {
       if nilai as i64 % 2 == 0 {
           println!("{nilai} -> genap");
       } else {
           println!("{nilai} -> ganjil");
       }
   }
   ```

6. Jalankan `cargo run`, amati *output*, lalu **Tuliskan Lesson Learnt** mengenai perbedaan `i32` vs `f64`, immutability default, dan mengapa Rust menolak operasi antar array.

## III.6. Task II: Vektor dengan Array & Vec (Manual)

**TASK II: VEKTOR MENGGUNAKAN ARRAY/SLICE NATIVE (MANUAL)**

1. Representasikan dua buah vektor $\mathbf{u}$ dan $\mathbf{v}$ sebagai array:

   ```rust
   let u: [f64; 3] = [1.0, 2.0, 3.0];
   let v: [f64; 3] = [4.0, 5.0, 6.0];
   ```

2. Buktikan keterbatasan native: coba `let w = u + v;`. Kompilator menolak. Catat pesan error persisnya. Bandingkan dengan Python (`list.__add__` melakukan konkatenasi secara diam-diam).

3. Implementasikan **manual** operasi vektor berbasis iterator (`map`, `zip`, `collect`):

   ```rust
   fn tambah(u: &[f64], v: &[f64]) -> Vec<f64> {
       u.iter().zip(v).map(|(a, b)| a + b).collect()
   }

   fn skalar(k: f64, u: &[f64]) -> Vec<f64> {
       u.iter().map(|a| k * a).collect()
   }

   println!("u + v = {:?}", tambah(&u, &v)); // [5.0, 7.0, 9.0]
   println!("3u    = {:?}", skalar(3.0, &u)); // [3.0, 6.0, 9.0]
   ```

4. Implementasikan **dot product** manual:

   ```rust
   fn dot(u: &[f64], v: &[f64]) -> f64 {
       u.iter().zip(v).map(|(a, b)| a * b).sum()
   }
   println!("u.v = {}", dot(&u, &v)); // 32.0
   ```

5. Implementasikan fungsi statistik sederhana (`jumlah`, `rata`, `maks`, `mini`) secara manual:

   ```rust
   fn jumlah(u: &[f64]) -> f64 { u.iter().sum() }
   fn rata(u: &[f64]) -> f64 { jumlah(u) / u.len() as f64 }

   println!("sum  = {}", jumlah(&u)); // 6
   println!("mean = {}", rata(&u));   // 2.0
   ```

6. Tambahkan **unit test** untuk `dot` (kasus diketahui: hasil 32) memakai `#[cfg(test)]`:

   ```rust
   #[cfg(test)]
   mod tests {
       use super::*;
       #[test]
       fn dot_ujian() {
           let u = [1.0, 2.0, 3.0];
           let v = [4.0, 5.0, 6.0];
           assert!((dot(&u, &v) - 32.0).abs() < 1e-12);
       }
   }
   ```

7. Jalankan `cargo test`, lalu **Tuliskan Lesson Learnt** mengenai verbose operasi manual vs kejelasan galat compile-time, dan kapan pustaka numerik dibutuhkan.

## III.7. Task III: Introduksi nalgebra untuk Vektor

**TASK III: INTRODUKSI nalgebra UNTUK VEKTOR**

**A. Import crate & membuat vektor**

```rust
use nalgebra::{SVector, Vector3};

let a = Vector3::new(1.0, 2.0, 3.0);   // dimensi tetap, dicek saat kompilasi
let b: SVector<f64, 4> = SVector::from([1.0, 2.0, 3.0, 4.0]); // generik

println!("a = {a}");
println!("dimensi: {}", a.nrows());
```

**B. Operasi Aritmetika Vektor (Element-wise via Operator)**

```rust
let a = Vector3::new(1.0, 2.0, 3.0);
let b = Vector3::new(4.0, 5.0, 6.0);

println!("a + b  = {}", a + b);   // [5, 7, 9]
println!("a - b  = {}", a - b);   // [-3, -3, -3]
println!("2a     = {}", 2.0 * a); // [2, 4, 6]
println!("a∘b    = {}", a.component_mul(&b)); // [4, 10, 18] (Hadamard)
```

**C. Operasi Lanjutan: Dot Product & Norma**

```rust
let dot1 = a.dot(&b);            // 32
let norm_a = a.norm();           // sqrt(14) ≈ 3.742
let cos: f64 = a.dot(&b) / (a.norm() * b.norm()); // anotasi : f64 diperlukan
let sudut = cos.acos().to_degrees();
println!("a.b = {dot1}, ||a|| = {norm_a}, sudut = {sudut} derajat");
```

Catatan: hasil `dot()`/`norm()` nalgebra bertipe generik: beri anotasi eksplisit `: f64` pada ekspresi turunannya; tanpa anotasi, ekspresi seperti `(x / y).acos()` gagal kompilasi dengan galat E0282 (*type annotations needed*).

**D. Fungsi Statistik Vektor**

```rust
println!("sum  = {}", a.sum());      // 6
println!("mean = {}", a.mean());     // 2.0
println!("max  = {}", a.max());      // 3
println!("min  = {}", a.min());      // 1
```

**E. Latihan Terapan**

1. Buat vektor `p = Vector2::new(3.0, 4.0)` dan `q = Vector2::new(4.0, 0.0)`. Hitung norma masing-masing, dot product, dan sudut antar keduanya.
2. Buat vektor `w: SVector<f64, 10>` berisi 1..=10 via `SVector::from_iterator`. Hitung jumlah, rata-rata, maksimum, minimum.
3. Verifikasi identitas $\mathbf{u}\cdot\mathbf{u} = \|\mathbf{u}\|^2$ untuk vektor `a` di atas **di dalam unit test**.

Jalankan `cargo test`, amati *output*, lalu **Tuliskan Lesson Learnt** mengenai keamanan tipe saat kompilasi dan keringkasan nalgebra dibanding implementasi manual.

### Ringkasan Operasi Vektor nalgebra

**Tabel 6. Ringkasan Operasi Vektor nalgebra: Aritmetika, Dot Product, dan Statistik**

| Kategori | Operasi / Fungsi | Contoh | Hasil |
|---|---|---|---|
| Pembuatan | `Vector3::new`, `SVector::from`, `from_iterator` | `Vector3::new(1.,2.,3.)` | `[1,2,3]` |
| Aritmetika | `+ -` (operator) | `a + b` | `[5,7,9]` |
| Skalar | `k * a` | `2.0 * a` | `[2,4,6]` |
| Hadamard | `component_mul` | `a.component_mul(&b)` | `[4,10,18]` |
| Dot product | `.dot(&b)` | `a.dot(&b)` | `32` |
| Norma | `.norm()`, `.norm_squared()` | `p.norm()` | `5.0` |
| Statistik | `.sum .mean .max .min` | `a.mean()` | `2.0` |

### Tabel Pendukung

**Tabel 4. Perbandingan Representasi Vektor: Array/Slice Rust vs nalgebra**

| Aspek | Array/Slice Native | nalgebra (`SVector`/`DVector`) |
|---|---|---|
| Tipe elemen | Homogen | Homogen, generik over `Real` |
| `a + b` | Gagal kompilasi | Penjumlahan element-wise |
| `k * a` | Gagal kompilasi | Perkalian skalar |
| Pemeriksaan dimensi | Runtime (manual `assert_eq!`) | Compile-time (`SVector`) / runtime (`DVector`) |
| Performa | Setara (zero-cost abstraction) | Setara + SIMD-friendly layout |
| Kecocokan penggunaan | Algoritma ad-hoc | Operasi aljabar linear sistematis |

**Tabel 3. Ringkasan Tipe Data Dasar Rust dan Operasi yang Didukung**

| Tipe | Contoh | Operasi yang Didukung |
|---|---|---|
| `i32`/`u32` | `8`, `-3` | `+ - * / %`, bitwise |
| `f64` | `1.2`, `3.14` | `+ - * / %`, `powf`, `sqrt`, `abs` |
| `bool` | `true`, `false` | `&&`, `\|\|`, `!` |
| `&str` | `"Vektor"` | konkatenasi (`format!`), slicing |
| `[T; N]` | `[1.0, 2.0, 3.0]` | indexing, iterasi, `map` via `iter()` |
| `Vec<T>` | `vec![1.0, 2.0]` | indexing, `push`, iterasi |

**Tabel 5. Kumpulan Konstruktor Vektor nalgebra yang Umum Digunakan**

| Fungsi | Deskripsi | Contoh | Hasil |
|---|---|---|---|
| `Vector3::new(..)` | Vektor 3D tetap | `Vector3::new(1.,2.,3.)` | `[1,2,3]` |
| `SVector::from([..])` | Vektor dimensi-$n$ tetap | `SVector::from([1.,2.])` | `[1,2]` |
| `SVector::from_iterator` | Dari iterator | `(1..=3).map(\|x\| x as f64)` | `[1,2,3]` |
| `DVector::from_vec` | Vektor dinamis | `DVector::from_vec(vec![1.,2.])` | `[1,2]` |
| `Vector3::zeros()` | Vektor nol | `Vector3::zeros()` | `[0,0,0]` |
| `SVector::repeat(k)` | Vektor konstan | `SVector::<f64,4>::repeat(1.)` | `[1,1,1,1]` |

# BAGIAN IV. MEDIA DAN MEKANISME PENGUMPULAN

## IV.1. Media Pengumpulan

Media pengumpulan menggunakan E-Learning yang dapat diakses pada link berikut:

`https://e-learning.polban.ac.id/`

Kemudian masuk ke dalam Course khusus untuk mata kuliah Aljabar Linear.

## IV.2. Mekanisme Pengumpulan

Mekanisme proses pengumpulan untuk modul praktikum ini mengikuti tahapan berikut:

1. **Format penamaan proyek/berkas:** gunakan format standar berikut.

   **Tabel 2. Standar Penamaan Proyek dan Berkas Pengumpulan Praktikum Aljabar Linear**

   | Kode | Penjelasan |
   |---|---|
   | `AL2026` | Aljabar Linear tahun 2026 |
   | `2A/2B/2C/2D` | Kelas |
   | `D4` | Program  |
   | `2025` | Angkatan |
   | `Modul1` | Nomor Modul |
   | `001` | 3 Digit NIM Terakhir |

   Format arsip: `[AL2026_2A_D4_2025]_Modul1_001.zip`

2. Arsipkan seluruh proyek cargo (kecuali folder `target/`) beserta riwayat `cargo test` (tangkapan layar atau berkas teks).
3. Susun **Laporan Praktikum (.pdf)** yang mencakup:
   - Tangkapan layar hasil `cargo run` dan `cargo test`.
   - Potongan kode Rust (Task 0, I, II, III) beserta penjelasan fungsinya.
   - Analisis hasil eksekusi (**Lesson Learnt**) untuk tiap task.
4. Kompresi seluruh berkas menjadi satu arsip `.zip` dengan nama sesuai format.
5. Unggah arsip tersebut pada slot Assignment "Pengumpulan Praktikum Modul 1" di e-learning sebelum batas waktu berakhir.

# BAGIAN V. PEMBAHASAN DAN EVALUASI HASIL PRAKTIKUM

Penilaian pada praktikum berdasarkan kriteria berikut:

**Tabel 7. Rubrik dan Matriks Kriteria Penilaian Evaluasi Praktikum**

| Kriteria Penilaian | Skor ≥ 80 (A) | Skor 70-79.99 (AB/B) | Skor 60-69.99 (BC/C) | Skor < 60 (D/E) |
|---|---|---|---|---|
| **Setup Environment** (20%) | Toolchain Rust & nalgebra terkonfigurasi sempurna; `cargo build` tanpa warning. | Terkonfigurasi, masalah minor teratasi. | Setup kurang, perlu bantuan menjalankan proyek. | Toolchain gagal / kode tidak dapat dikompilasi. |
| **Dasar Sintaks & Sistem Tipe** (20%) | Binding, tipe, array/Vec, dan struktur kontrol tepat; kode lolos `cargo clippy`. | Sintaks benar, sedikit ketidaktepatan minor. | Sintaks dasar masih keliru / kontrol alur salah. | Tidak mampu menuliskan sintaks dasar Rust. |
| **Vektor (Manual vs nalgebra)** (30%) | Operasi vektor manual & nalgebra tepat; unit test lengkap; perbandingan dijelaskan mendalam. | Operasi berhasil, penjelasan perbandingan kurang mendalam. | Operasi sebagian benar / logika iterasi keliru. | Gagal mengimplementasikan operasi vektor. |
| **Pelaporan & Lesson Learnt** (30%) | Laporan sangat lengkap: screenshot, analisis kode, lesson learnt mendalam. | Laporan lengkap dengan screenshot dan penjelasan standar. | Laporan kurang detail, penjelasan algoritma absen. | Tidak mengumpulkan laporan / tidak sesuai format. |

# DAFTAR PUSTAKA

Klabnik, S., & Nichols, C. (2023). *The Rust Programming Language* (2nd ed.). No Starch Press. `https://doc.rust-lang.org/book/`

Lay, D. C., Lay, S. R., & McDonald, J. J. (2021). *Linear Algebra and Its Applications* (6th ed.). Pearson.

Strang, G. (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press.

Trefethen, L. N., & Bau, D. (1997). *Numerical Linear Algebra*. SIAM.

Crozet, S. (2026). *nalgebra* (Version 0.35) [Computer software]. Dimforge. `https://nalgebra.org`

# LAMPIRAN

**Jika Ada**