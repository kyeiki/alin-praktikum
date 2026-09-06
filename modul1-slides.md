---
marp: true
theme: default
size: 16:9
paginate: true
header: 'Praktikum Aljabar Linear, Modul 1'
footer: 'Magister Teknik Informatika · Politeknik Negeri Bandung · 2026'
style: |
  section { font-size: 24px; }
  section h1 { color: #1a3c6e; font-size: 1.5em; }
  section h2 { color: #1a3c6e; font-size: 1.2em; }
  section.lead { display: flex; flex-direction: column; justify-content: center; text-align: center; }
  table { font-size: 0.72em; }
  pre { font-size: 0.68em; }
  code { font-size: 0.85em; }
  footer, header { color: #6b7280; font-size: 0.6em; }
  .ok { color: #0a7d33; font-weight: bold; }
  .warn { color: #b45309; font-weight: bold; }
---

<!-- _class: lead -->

# MODUL 1

# Pengenalan Rust & Dasar Komputasi Vektor

**Praktikum Mata Kuliah Aljabar Linear (25TI2103, 1 SKS)**

Program Sarjana Terapan Teknik Informatika
Jurusan Teknik Komputer & Informatika, Politeknik Negeri Bandung
2026

---

## Agenda

1. Identitas mata kuliah & capaian pembelajaran (CPMK)
2. Teori singkat: komputasi saintifik, Rust, dan vektor
3. Persiapan: peralatan & keamanan kerja
4. Setup environment: rustup, Cargo, rust-analyzer
5. Dasar sintaks & sistem tipe Rust
6. Task 0-III: hello world, sintaks dasar, vektor manual, `nalgebra`
7. Mekanisme pengumpulan & rubrik penilaian
8. Referensi, termasuk **hasil verifikasi validitasnya**

---

## Identitas Mata Kuliah

| Atribut | Keterangan |
|---|---|
| Mata Kuliah | Aljabar Linear (Praktikum), kode **25TI2103**, 1 SKS, Wajib |
| Semester / Program | I / Sarjana Terapan (D4) Teknik Informatika |
| Metode | Problem Based Learning, Project Based Learning |
| Media | Offline/Daring (lokal: Cargo & rust-analyzer) |
| Teknologi | Rust (edisi 2021+, toolchain stable), rustup, Cargo, crate `nalgebra` 0.35 |
| Editor | VS Code + rust-analyzer (disarankan) / RustRover |
| OS | Linux, macOS, Windows 10/11 (WSL2 disarankan) |

**Ruang lingkup:** toolchain Rust → tipe & ownership dasar → vektor dengan array/slice/`Vec` → operasi via iterator → introduksi `nalgebra` → pengujian otomatis `cargo test`

---

## Aktivitas Perkuliahan (Modul 1)

| Aktivitas | Kegiatan | Modul |
|---|---|---|
| Aktivitas 1 | Konfigurasi toolchain Rust (rustup, cargo, rust-analyzer); sistem tipe, ownership, struktur kontrol | **Modul 1** |
| Aktivitas 2 | Representasi vektor via array/slice/`Vec` + operasi manual; analisis keterbatasannya | **Modul 1** |
| Aktivitas 3 | Operasi vektor (element-wise, dot product, norma, statistik) dengan crate `nalgebra` + unit test | **Modul 1-2** |

Aktivitas 4-13 dicakup modul 3-16 (ruang vektor, SPL, dekomposisi, eigen, least squares, SVD, kondisi numerik, metode iteratif, proyek PCA/PageRank)

---

## Mengapa Rust untuk Komputasi Saintifik?

- **Performa setara C** tanpa garbage collector
- **Memory safety saat kompilasi**: ownership & borrowing mencegah data race dan use-after-free
- **Static typing**: seluruh kesalahan tipe tertangkap sebelum program berjalan
- **Tooling terintegrasi**: cargo (build, test, doc), rustfmt, clippy
- Cocok untuk kode numerik yang **andal & dapat diuji** (reliable) di level pascasarjana
- Aljabar linear = fondasi ML, grafika komputer, sistem tertanam → eksperimen numerik langsung membangun intuisi geometris + aljabaris

(Klabnik & Nichols, 2023)

---

## Konsep: Vektor dalam ℝⁿ

Vektor = besaran dengan **besar (magnitude) & arah**, yaitu sekumpulan komponen terurut **v** = (v₁, …, vₙ) ∈ ℝⁿ

**Operasi dasar:**

- Penjumlahan: **u** + **v** = (u₁+v₁, …, uₙ+vₙ)
- Perkalian skalar: k**v** = (kv₁, …, kvₙ)
- Dot product: **u** · **v** = Σᵢ uᵢvᵢ

**Geometri:**

- **u** · **v** = ‖**u**‖‖**v**‖ cos θ → proyeksi & sudut antar vektor
- Norm (panjang): ‖**v**‖ = √(**v** · **v**)

Secara komputasional: blok memori homogen yang mendukung operasi aritmetika antar elemen

---

## Persiapan

**Hardware**

- PC/laptop: dual-core 2.0 GHz+, RAM ≥ 8 GB, disk ≥ 5 GB
- Koneksi internet stabil (instalasi toolchain & crate)

**Keamanan & keselamatan kerja (ergonomi)**

- Postur: kepala tegak, punggung lurus, pundak rileks, kaki bebas
- Monitor di bawah garis horizontal mata, hindari pantulan cahaya
- **Aturan 20-20-20**: tiap 20 menit, lihat objek ±6 m (20 kaki) selama 20 detik
- Istirahat, makan & minum cukup; gerakkan badan secara berkala

---

## Setup: Instalasi rustup & Toolchain

```bash
# Linux/macOS
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# Windows: unduh rustup-init.exe dari https://rustup.rs

rustc --version   # verifikasi (≥ 1.75)
cargo --version
```

**Komponen toolchain:** rustc (kompilator), cargo (build + dependensi), rustfmt (format), clippy (linter)

**Proyek pertama:**

```bash
cargo new praktikum-al
cd praktikum-al && cargo run
```

```text
praktikum-al/
├── Cargo.toml   # manifes dependensi
└── src/main.rs  # titik masuk program
```

---

## Perintah Cargo Inti

| Perintah | Fungsi |
|---|---|
| `cargo run` | Kompilasi + jalankan |
| `cargo test` | Jalankan seluruh unit test (`#[test]`) |
| `cargo fmt` | Format otomatis sesuai gaya resmi Rust |
| `cargo clippy` | Linter idiomatik (kualitas kode) |

Tambah dependensi `nalgebra` di `Cargo.toml`, lalu `cargo build`:

```toml
[dependencies]
nalgebra = "0.35.0"
```

---

## Dasar Sintaks: Variabel & Tipe

```rust
let x: i32 = 8;            // immutable secara default
let mut y: f64 = 1.2;      // mut → bisa diubah
y += 0.3;
const EPSILON: f64 = 1e-10; // konstanta compile-time
```

| Tipe | Contoh | Operasi |
|---|---|---|
| `i32`/`u32`/`i64` | `8`, `-3` | `+ - * / %`, bitwise |
| `f64` | `1.2`, `3.14` | `+ - * / %`, `powf`, `sqrt`, `abs` |
| `bool` | `true` | `&& \|\| !` |
| `&str` | `"Vektor"` | `format!`, slicing |

- Komputasi numerik praktikum ini **selalu `f64`**
- `7 / 2` = `3` (integer division); `7.0 / 2.0` = `3.5`

---

## Array, Slice, dan Vec

```rust
let arr: [f64; 3] = [1.0, 2.0, 3.0];  // panjang tetap, stack
let slice: &[f64] = &arr[..];          // borrow read-only
let mut v: Vec<f64> = vec![1.0, 2.0];  // dinamis, heap
v.push(3.0);
println!("{:?} {} {}", arr, slice[0], v.len());
```

**Fungsi**: tipe parameter & nilai balik wajib eksplisit:

```rust
fn dot(a: &[f64], b: &[f64]) -> f64 {
    a.iter().zip(b).map(|(x, y)| x * y).sum()
}
```

---

## Keterbatasan Native → Motivasi nalgebra

```rust
let a = [1.0, 2.0, 3.0];
let b = [4.0, 5.0, 6.0];
// let c = a + b;  // ERROR: cannot add `[f64; 3]` and `[f64; 3]`
let c: Vec<f64> = a.iter().zip(b).map(|(x, y)| x + y).collect(); // manual
```

- Rust **tidak menyediakan** operator aritmetika antar array/slice: `a + b` gagal kompilasi
- Operasi element-wise harus manual via iterator (`zip`, `map`, `collect`)
- Bandingkan: Python `list.__add__` malah melakukan konkatenasi diam-diam
- Kesalahan ditangkap **compile-time** = keamanan, tapi verbose → **motivasi crate `nalgebra`**

---

## Task 0 & Task I (Ringkas)

**Task 0: Hello World & verifikasi toolchain**

```rust
fn main() {
    println!("Hello, Aljabar Linear!");
}
```

Tambah `nalgebra = "0.35.0"`, cek versi crate, catat versi `rustc`/`cargo`/`nalgebra`, tulis identitas (Nama, NIM, Kelas) di `main.rs`

**Task I: Eksplorasi sintaks & sistem tipe**

- Binding `i32`, `f64`, `bool`, `&str` + tampilkan tipenya
- Aritmetika: `/`, `%`, `powf`, `sqrt`, integer division
- Array & indexing, slicing `&v[1..4]`
- Perulangan & percabangan (genap/ganjil)
- **Lesson learnt**: `i32` vs `f64`, immutability default, mengapa Rust menolak `a + b` antar array

---

## Task II: Vektor Manual (Array/Slice)

```rust
fn tambah(u: &[f64], v: &[f64]) -> Vec<f64> {
    u.iter().zip(v).map(|(a, b)| a + b).collect()
}
fn skalar(k: f64, u: &[f64]) -> Vec<f64> {
    u.iter().map(|a| k * a).collect()
}
fn dot(u: &[f64], v: &[f64]) -> f64 {
    u.iter().zip(v).map(|(a, b)| a * b).sum()
}
```

u = [1,2,3], v = [4,5,6] → u+v = [5,7,9], 3u = [3,6,9], u·v = **32**

**Unit test** (`#[cfg(test)]`, `assert!((dot(&u,&v) - 32.0).abs() < 1e-12)`) → `cargo test`

**Lesson learnt**: verbose operasi manual vs kejelasan galat compile-time; kapan pustaka numerik dibutuhkan

---

## Task III: Introduksi nalgebra

```rust
use nalgebra::{SVector, Vector3};

let a = Vector3::new(1.0, 2.0, 3.0);      // dimensi dicek saat kompilasi
let b = Vector3::new(4.0, 5.0, 6.0);
let c: SVector<f64, 4> = SVector::from([1.0, 2.0, 3.0, 4.0]);

println!("a + b  = {}", a + b);            // operator overloading
println!("2a     = {}", 2.0 * a);
println!("a∘b    = {}", a.component_mul(&b)); // Hadamard
let cos: f64 = a.dot(&b) / (a.norm() * b.norm()); // : f64, tipe generik
let sudut = cos.acos().to_degrees();        // geometri dot product
```

```rust
a.sum()   // 6      a.mean()  // 2.0
a.max()   // 3      a.min()   // 1
```

Dimensi dikodekan pada sistem tipe → ketidaksesuaian terdeteksi **compile-time** (beda dengan NumPy) · anotasi `: f64` wajib pada hasil `dot()`/`norm()` (Crozet, 2026)

---

## Ringkasan Operasi nalgebra

| Kategori | Operasi | Contoh | Hasil |
|---|---|---|---|
| Pembuatan | `Vector3::new`, `SVector::from`, `from_iterator` | `Vector3::new(1.,2.,3.)` | `[1,2,3]` |
| Aritmetika | `+ -` | `a + b` | `[5,7,9]` |
| Skalar | `k * a` | `2.0 * a` | `[2,4,6]` |
| Hadamard | `component_mul` | `a.component_mul(&b)` | `[4,10,18]` |
| Dot product | `.dot(&b)` | `a.dot(&b)` | `32` |
| Norma | `.norm()`, `.norm_squared()` | `p.norm()` | `5.0` |
| Statistik | `.sum .mean .max .min` | `a.mean()` | `2.0` |

**Array native vs nalgebra:** `a+b` gagal compile vs element-wise; cek dimensi runtime-manual vs compile-time; performa setara (zero-cost, SIMD-friendly); nalgebra untuk operasi aljabar linear sistematis

---

## Pengumpulan Praktikum

- Media: e-learning `https://e-learning.polban.ac.id/` → course Aljabar Linear
- Format arsip: `[AL2026_S2A_S2_2026]_Modul1_001.zip`
  (kode tahun, kelas, jenjang, angkatan, modul, 3 digit NIM terakhir)
- Isi: proyek cargo lengkap **tanpa** `target/` + riwayat `cargo test` (screenshot/teks)
- Laporan PDF: screenshot `cargo run` & `cargo test`, potongan kode Task 0-III + penjelasan, **Lesson Learnt** tiap task
- Unggah ke slot Assignment **sebelum batas waktu**

---

## Rubrik Penilaian

| Kriteria (bobot) | ≥ 80 (A) | 60-69.99 (BC/C) | < 60 (D/E) |
|---|---|---|---|
| **Setup environment** (20%) | Terkonfigurasi sempurna, `cargo build` tanpa warning | Setup kurang, perlu bantuan | Toolchain gagal |
| **Sintaks & sistem tipe** (20%) | Tepat & lolos `clippy` | Sintaks dasar masih keliru | Tidak mampu sintaks dasar |
| **Vektor manual vs nalgebra** (30%) | Operasi tepat, unit test lengkap, analisis mendalam | Sebagian benar / iterasi keliru | Gagal implementasi |
| **Pelaporan & lesson learnt** (30%) | Sangat lengkap & mendalam | Kurang detail | Tidak mengumpulkan |

Rentang 70-79.99 (AB/B): benar dengan ketidaktepatan minor / penjelasan standar

---

## Referensi & Hasil Verifikasi

| Referensi (modul) | Status | Temuan verifikasi (Sep 2026) |
|---|---|---|
| Klabnik & Nichols (2023). *The Rust Programming Language* (2nd ed.). No Starch Press | <span class="ok">VALID</span> | Terbit 28 Feb 2023 (ISBN 9781718503106); URL doc.rust-lang.org/book/ aktif. Kini ada edisi ke-3 (2026, +Chris Krycho) |
| Lay, Lay & McDonald (**2021**). *Linear Algebra and Its Applications* (6th ed.). Pearson | <span class="ok">VALID (modul dikoreksi)</span> | Awal modul menulis (2022); Pearson: terbit 10 Jul 2020, © **2021** → `modul1.md` diperbaiki ke (2021). Tulis eksplisit *Global Edition* bila memakai edisi internasional |
| Strang (2016). *Introduction to Linear Algebra* (5th ed.). Wellesley-Cambridge Press | <span class="ok">VALID</span> | Edisi 5 memang 2016 (math.mit.edu). Catatan: edisi ke-6 sudah ada (2023) |
| Trefethen & Bau (1997). *Numerical Linear Algebra*. SIAM | <span class="ok">VALID</span> | SIAM 1997, dengan David Bau III, terkonfirmasi |
| Crozet (2026). *nalgebra* (Version 0.35). Dimforge | <span class="ok">VALID</span> | crates.io: 0.35.0 rilis 24 Mei 2026; nalgebra.org aktif. Modul & proyek praktikum kini memakai 0.35.0 |

---

## Errata Modul (Hasil Uji Implementasi)

Potongan kode yang dikoreksi setelah diuji nyata (rustc 1.98.1, nalgebra 0.35.0):

- `9u32.sqrt()` **gagal kompilasi** karena integer tidak punya `.sqrt()` → diganti `9.0f64.sqrt()`
- `let cos = a.dot(&b) / (a.norm() * b.norm());` gagal **E0282** → anotasi **`: f64`** wajib pada hasil `dot()`/`norm()` nalgebra (tipe generik)
- Literal `3.14159` ditolak `cargo clippy` (`approx_constant`) → `#[allow(clippy::approx_constant)]` atau gunakan `std::f64::consts::PI`
- Referensi Lay et al.: tahun 2022 → **2021** (6th ed., Pearson ©2021)

Semua perbaikan telah diterapkan pada `modul1.md` dan proyek `praktikum-al`: 6/6 unit test lolos, `cargo fmt` & `cargo clippy -D warnings` bersih

---

<!-- _class: lead -->

# Selamat Menguji Konsep Vektor secara Komputasional!

**Performa setara C + jaminan keamanan memori + pengujian otomatis**

Task 0 → Task III: toolchain → sintaks → vektor manual → `nalgebra`

*Jangan lupa: `cargo test`, lesson learnt, dan format pengumpulan* `[AL2026_...].zip`
