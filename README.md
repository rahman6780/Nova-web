# Nova Web — Space Lab

A space-themed personal website with a small playground of browser games, built from scratch with plain HTML, CSS, and JavaScript. No frameworks, no libraries.

## Features

- **Animated starfield:** a canvas background of twinkling stars that adapts to the screen size and respects the "reduce motion" setting.
- **Cosmic Words:** 35 thought-provoking questions in 7 categories, shown at random and rotated every 8 seconds with a fade effect.
- **Glass header and scroll effects:** the header blurs as you scroll, sections fade in as they enter the screen, and the menu highlights the section you are reading.
- **Lab:** two playable games, each in a single HTML file.

## The Lab

### Chess (`catur.html`)

- Play against the AI or against a friend on the same device.
- Choose White or Black, and pick one of three AI levels (Easy, Medium, Hard).
- Chess clock (none, 3, 5, or 10 minutes), sound on/off, undo, and flip board.
- Move history list. Castling, en passant, and pawn promotion are implemented.
- The AI uses minimax search with a position evaluation, plus a simple opening rule so it opens with a center pawn instead of rushing its knights.

### Tic Tac Toe (`tictactoe.html`)

- Cyber theme with blue (X) and red (O) neon colors.
- Choose X or O, and pick between a relaxed AI and an unbeatable one.
- The unbeatable AI uses **minimax**: it imagines every possible continuation of the game and picks the safest move. The best a human can do is a draw.
- Score counter for wins, draws, and losses, with the winning line highlighted.

## Project structure

```
index.html       Main website
catur.html       Chess game
tictactoe.html   Tic Tac Toe game
```

## Run locally

Download the files into one folder and open `index.html` in a browser. No build step is needed.

## Deployment

The repository is connected to Cloudflare Workers. Every push to GitHub updates the live site automatically.

## Author

Rahman — a young developer who started from curiosity.

---

# Nova Web — Space Lab (Terjemahan)

Website pribadi bertema luar angkasa dengan beberapa game kecil di dalamnya, dibuat dari nol memakai HTML, CSS, dan JavaScript biasa. Tanpa framework dan tanpa library.

## Fitur

- **Langit berbintang beranimasi:** latar canvas berisi bintang yang berkelip, menyesuaikan ukuran layar, dan mengikuti pengaturan "kurangi gerakan".
- **Cosmic Words:** 35 pertanyaan yang bikin berpikir dalam 7 kategori, tampil acak dan berganti tiap 8 detik dengan efek memudar.
- **Header kaca dan efek scroll:** header jadi buram saat di-scroll, bagian halaman muncul halus saat terlihat, dan menu menyorot bagian yang sedang dibaca.
- **Lab:** dua game yang bisa dimainkan, masing-masing dalam satu file HTML.

## Lab

### Catur (`catur.html`)

- Main melawan AI atau melawan teman di perangkat yang sama.
- Pilih Putih atau Hitam, dan pilih satu dari tiga level AI (Mudah, Sedang, Sulit).
- Jam catur (tanpa waktu, 3, 5, atau 10 menit), suara nyala/mati, undo, dan putar papan.
- Ada daftar langkah. Rokade, en passant, dan promosi pion sudah diterapkan.
- AI memakai pencarian minimax dengan penilaian posisi, ditambah aturan pembukaan sederhana supaya AI membuka dengan pion tengah dan tidak buru-buru mengeluarkan kuda.

### Tic Tac Toe (`tictactoe.html`)

- Tema cyber dengan warna neon biru (X) dan merah (O).
- Pilih X atau O, lalu pilih AI santai atau AI yang tidak bisa dikalahkan.
- AI yang tidak bisa dikalahkan memakai **minimax**: ia membayangkan semua kemungkinan lanjutan game lalu memilih langkah yang paling aman. Hasil terbaik bagi manusia hanyalah seri.
- Penghitung skor menang, seri, dan kalah, dengan garis kemenangan yang disorot.

## Struktur proyek

```
index.html       Website utama
catur.html       Game catur
tictactoe.html   Game Tic Tac Toe
```

## Menjalankan di komputer sendiri

Unduh semua file ke satu folder, lalu buka `index.html` di browser. Tidak perlu proses build.

## Deploy

Repositori ini terhubung ke Cloudflare Workers. Setiap kali ada push ke GitHub, situs live ikut diperbarui otomatis.

## Pembuat

Rahman — developer muda yang berawal dari rasa penasaran.
  gue indo bang, dan gue dari surabaya, jangan salah paham ya.