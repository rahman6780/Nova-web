
const quotes = [
    // 01 — ASTRONOMY: wonder & mystery
    {
        category: "ASTRONOMY",
        text: "Ada bintang yang cahayanya sudah berangkat sebelum manusia menemukan cara untuk memotretnya."
    },
    {
        category: "ASTRONOMY",
        text: "Semesta tidak perlu berbicara. Keberadaannya saja sudah mengundang jutaan pertanyaan."
    },
    {
        category: "ASTRONOMY",
        text: "Di antara miliaran galaksi, kita masih sibuk mencari tahu seberapa istimewa rumah kecil bernama Bumi."
    },
    {
        category: "ASTRONOMY",
        text: "Langit malam bukan ruang kosong. Ia penuh dengan sesuatu yang belum kita mengerti."
    },
    {
        category: "ASTRONOMY",
        text: "Mungkin hal paling menakjubkan dari semesta adalah kenyataan bahwa kita bisa bertanya tentangnya."
    },
    {
        category: "ASTRONOMY",
        text: "Kita menatap masa lalu setiap kali melihat cahaya dari benda langit yang jauh."
    },

    // 02 — DEVELOPER LIFE: honest & practical
    {
        category: "DEVELOPER LIFE",
        text: "Kalau cuma ingin kode yang jalan, salin saja. Kalau ingin jadi developer, cari tahu kenapa ia berjalan."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Proyek kecil yang benar-benar selesai lebih nyata daripada sepuluh ide yang cuma tinggal di kepala."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Hari ini belum paham. Besok coba lagi. Kode tidak akan tersinggung kalau kamu belajar pelan-pelan."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Mengetik cepat itu keterampilan. Memahami masalah sebelum mengetik adalah kebiasaan yang berharga."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Tidak semua orang harus menjadi programmer. Tapi siapa pun boleh belajar bagaimana teknologi bekerja."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Satu proyek mengajarkan lebih banyak daripada seratus rencana yang tidak pernah diuji."
    },

    // 03 — DEEP THOUGHTS: reflective & sharp
    {
        category: "DEEP THOUGHTS",
        text: "Kadang kita bukan kehilangan arah. Kita hanya terlalu lama berjalan di jalan yang dipilih orang lain."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Berubah pikiran setelah belajar sesuatu bukan kelemahan. Bisa jadi itu tanda kamu mulai memahami."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Tidak semua hal yang ramai dibicarakan pantas mendapatkan perhatianmu."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Ada perbedaan besar antara terlihat sibuk dan benar-benar menghasilkan sesuatu."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Kamu boleh menyimpan pelajaran dari masa lalu tanpa harus tinggal di dalamnya."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Pendapat yang kuat tetap perlu ruang untuk dikoreksi."
    },

    // 04 — DEV HUMOR: coding chaos
    {
        category: "DEV HUMOR",
        text: "Bug-nya sudah diperbaiki. Sekarang aplikasinya punya masalah baru yang tidak tercantum di tiket."
    },
    {
        category: "DEV HUMOR",
        text: "JavaScript bilang undefined. Programmer bilang, 'Lah, tadi masih ada!'"
    },
    {
        category: "DEV HUMOR",
        text: "CSS: cuma mau geser satu div. Dua jam kemudian, seluruh layout ikut pindah rumah."
    },
    {
        category: "DEV HUMOR",
        text: "Kode berjalan sempurna di laptop sendiri. Begitu dipresentasikan, mendadak punya kepribadian."
    },
    {
        category: "DEV HUMOR",
        text: "Dokumentasi sudah dibaca. Tutorial sudah ditonton. Error tetap memilih jalannya sendiri."
    },
    {
        category: "DEV HUMOR",
        text: "Programmer tidak selalu butuh kopi. Kadang cuma butuh tahu kenapa tanda kurungnya kurang satu."
    },

    // 05 — PHOTOGRAPHY: light, timing & perspective
    {
        category: "PHOTOGRAPHY",
        text: "Kamera menangkap apa yang ada di depan lensa. Fotografer memutuskan apa yang layak diceritakan."
    },
    {
        category: "PHOTOGRAPHY",
        text: "Cahaya yang sama bisa menghasilkan dua cerita berbeda, tergantung dari mana kamu melihatnya."
    },
    {
        category: "PHOTOGRAPHY",
        text: "Momen tidak menunggu pengaturan kameramu selesai. Belajar membaca situasi sama pentingnya dengan belajar teknis."
    },
    {
        category: "PHOTOGRAPHY",
        text: "Kadang sudut terbaik bukan yang paling tinggi, melainkan yang membuat sebuah cerita terasa dekat."
    },
    {
        category: "PHOTOGRAPHY",
        text: "Foto yang sederhana bisa terasa luar biasa ketika berhasil menyimpan sesuatu yang berarti."
    },
    {
        category: "PHOTOGRAPHY",
        text: "Peralatan punya batas. Cara melihat masih bisa terus berkembang."
    },

    // 06 — REALITY CHECK: grounded & direct
    {
        category: "REALITY CHECK",
        text: "Tidak semua minat harus menjadi profesi. Ada hal yang tetap berharga karena kamu menikmatinya."
    },
    {
        category: "REALITY CHECK",
        text: "Kamu tidak harus menguasai semuanya hari ini. Bahkan mesin pencari pun perlu kata kunci."
    },
    {
        category: "REALITY CHECK",
        text: "Rencana yang berubah bukan selalu kegagalan. Kadang informasinya memang sudah berbeda."
    },
    {
        category: "REALITY CHECK",
        text: "Semangat bisa membuka pintu. Kebiasaanlah yang membantumu datang kembali."
    },
    {
        category: "REALITY CHECK",
        text: "Tidak semua kemajuan terlihat keren. Sebagian cuma berupa kesalahan yang tidak kamu ulangi."
    },
    {
        category: "REALITY CHECK",
        text: "Kamu boleh mulai dari alat yang ada sambil tetap bermimpi memiliki alat yang lebih baik."
    },

    // 07 — CHAOTIC MODE: unexpected nonsense
    {
        category: "CHAOTIC MODE",
        text: "Aku ingin memahami alam semesta, tetapi password Wi-Fi sendiri saja lupa."
    },
    {
        category: "CHAOTIC MODE",
        text: "Galaksi berotasi miliaran tahun. Aku berotasi di kasur mencari posisi tidur yang benar."
    },
    {
        category: "CHAOTIC MODE",
        text: "Masa depan itu misterius. Begitu juga isi folder bernama final_baru_fix_terakhir."
    },
    {
        category: "CHAOTIC MODE",
        text: "Manusia mengirim robot ke Mars. Aku mengirim pesan ke diri sendiri supaya tidak lupa menabung."
    },
    {
        category: "CHAOTIC MODE",
        text: "Katanya ikuti kata hati. Sudah diikuti, malah menyuruh beli lensa yang belum sanggup dibeli."
    },
    {
        category: "CHAOTIC MODE",
        text: "Semesta terus mengembang. Tab browser-ku juga, tetapi yang ini tidak ilmiah."
    }
];
