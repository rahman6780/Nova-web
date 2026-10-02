
const quotes = [
    // ASTRONOMY & UNIVERSE
    {
        category: "ASTRONOMY",
        text: "Kita mungkin kecil di alam semesta, tetapi rasa ingin tahu membawa kita menjelajah jauh."
    },
    {
        category: "ASTRONOMY",
        text: "Bintang pun membutuhkan gelap untuk terlihat bersinar."
    },
    {
        category: "ASTRONOMY",
        text: "Langit malam adalah pengingat bahwa masih banyak hal yang belum kita pahami."
    },
    {
        category: "ASTRONOMY",
        text: "Memandang bintang membuat kita sadar betapa luasnya hal yang belum kita ketahui."
    },
    {
        category: "ASTRONOMY",
        text: "Cahaya yang kita lihat hari ini bisa jadi telah memulai perjalanannya jauh sebelum kita lahir."
    },
    {
        category: "ASTRONOMY",
        text: "Alam semesta tidak kehabisan misteri, dan manusia tidak seharusnya kehabisan pertanyaan."
    },
    {
        category: "ASTRONOMY",
        text: "Setiap titik cahaya di langit menyimpan kisah yang belum tentu kita ketahui."
    },
    {
        category: "ASTRONOMY",
        text: "Bumi adalah rumah kecil di tengah sesuatu yang nyaris tak terbayangkan luasnya."
    },
    {
        category: "ASTRONOMY",
        text: "Kita tidak harus pergi ke luar angkasa untuk mulai mengaguminya."
    },
    {
        category: "ASTRONOMY",
        text: "Semakin jauh kita memandang, semakin banyak alasan untuk terus belajar."
    },

    // DEVELOPER LIFE
    {
        category: "DEVELOPER LIFE",
        text: "Jangan hanya mengagumi teknologi. Pelajari cara membangunnya."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Satu baris kode mungkin terlihat kecil, tetapi bisa menjadi awal dari sesuatu yang besar."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Developer bukan orang yang tidak pernah salah, melainkan orang yang mau memahami kesalahannya."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Jangan cuma mencari kode yang berhasil. Cari tahu juga kenapa kode itu berhasil."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Kemampuan coding tumbuh ketika kamu berhenti takut mencoba."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Proyek pertamamu tidak harus sempurna. Ia hanya perlu menjadi awal."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Jangan sekadar menyalin solusi. Pahami masalah yang sedang kamu selesaikan."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Setiap error adalah kesempatan untuk mengenal kode lebih dalam."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Teknologi terus berkembang. Kebiasaan belajar akan membantumu ikut berkembang."
    },
    {
        category: "DEVELOPER LIFE",
        text: "Bangun sesuatu yang membuatmu bangga, meskipun awalnya hanya proyek kecil."
    },

    // DEEP THOUGHTS
    {
        category: "DEEP THOUGHTS",
        text: "Tidak semua hal harus segera dimengerti. Beberapa hal perlu dijelajahi."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Kamu tidak harus mengetahui seluruh jalan untuk mulai melangkah."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Rasa penasaran adalah awal dari banyak penemuan."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Tidak tahu bukanlah kelemahan. Berhenti ingin tahu adalah kesempatan yang terlewat."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Terkadang, kemajuan paling berarti terjadi ketika tidak ada yang melihat."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Jangan ukur perjalananmu hanya dari seberapa jauh orang lain sudah melangkah."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Kamu boleh mengubah arah tanpa harus membuang semua yang telah dipelajari."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Masa depan tidak dibangun sekaligus, melainkan melalui pilihan-pilihan kecil."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Tidak semua pertanyaan langsung punya jawaban, dan itu bukan alasan untuk berhenti bertanya."
    },
    {
        category: "DEEP THOUGHTS",
        text: "Terus bertumbuh, tanpa harus selalu membuktikan sesuatu kepada semua orang."
    },

    // DEVELOPER HUMOR
    {
        category: "DEV HUMOR",
        text: "Katanya cuma mau memperbaiki satu bug. Tiga jam kemudian, bug-nya bertambah dua."
    },
    {
        category: "DEV HUMOR",
        text: "Kode berjalan lancar. Jangan disentuh. Jangan ditanya. Jangan diubah."
    },
    {
        category: "DEV HUMOR",
        text: "Bug paling misterius adalah bug yang menghilang saat mau ditunjukkan ke orang lain."
    },
    {
        category: "DEV HUMOR",
        text: "Programmer: memperbaiki satu masalah, lalu menemukan tiga masalah baru."
    },
    {
        category: "DEV HUMOR",
        text: "Kalau kodenya berhasil pada percobaan pertama, cek lagi. Siapa tahu cuma kebetulan."
    },
    {
        category: "DEV HUMOR",
        text: "Komentar kode: menjelaskan kenapa kode ini ada. Programmer masa depan: tetap bingung."
    },
    {
        category: "DEV HUMOR",
        text: "Error-nya satu baris. Waktu mencarinya satu jam. Penyebabnya kurang satu tanda."
    },
    {
        category: "DEV HUMOR",
        text: "Aku bukan malas debugging. Aku sedang memberi kesempatan bug untuk mengaku."
    },
    {
        category: "DEV HUMOR",
        text: "Jangan takut pada error. Takutlah ketika tidak ada error, tetapi hasilnya juga tidak ada."
    },
    {
        category: "DEV HUMOR",
        text: "Rencana: coding 30 menit. Kenyataan: mencari kenapa file tidak tersimpan."
    }
];

const quoteElement = document.getElementById("daily-quote");
const categoryElement = document.querySelector(
    ".quote-footer span:first-child"
);

if (quoteElement && quotes.length > 0) {
    const previousIndex = sessionStorage.getItem("nova-quote-index");

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (
        quotes.length > 1 &&
        String(randomIndex) === previousIndex
    );

    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = selectedQuote.text;

    if (categoryElement) {
        categoryElement.textContent =
            selectedQuote.category + " TRANSMISSION";
    }

    sessionStorage.setItem(
        "nova-quote-index",
        String(randomIndex)
    );
}
