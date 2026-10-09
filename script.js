console.log("NOVA MYSTERY VERSION LOADED")

const quotes = [
    // 01 — COSMIC UNKNOWN
    {
        category: "COSMIC UNKNOWN",
        text: "Jika alam semesta memiliki batas, apa yang berada di baliknya? Dan jika tidak memiliki batas, bagaimana sesuatu bisa tidak berujung?"
    },
    {
        category: "COSMIC UNKNOWN",
        text: "Alam semesta terus mengembang. Tetapi jika ruang itu sendiri yang mengembang, ia mengembang ke mana?"
    },
    {
        category: "COSMIC UNKNOWN",
        text: "Sebelum bintang pertama menyala, apakah kegelapan memiliki arti bagi sesuatu yang belum bisa melihat?"
    },
    {
        category: "COSMIC UNKNOWN",
        text: "Di antara miliaran galaksi, berapa banyak rahasia yang bahkan belum pernah terpikirkan oleh siapa pun?"
    },
    {
        category: "COSMIC UNKNOWN",
        text: "Jika suatu hari kita memahami seluruh alam semesta, apakah masih ada sesuatu di luar pemahaman itu?"
    },

    // 02 — TIME PARADOX
    {
        category: "TIME PARADOX",
        text: "Jika kamu bertemu dirimu dari masa depan, siapa di antara kalian yang sedang hidup di masa lalu?"
    },
    {
        category: "TIME PARADOX",
        text: "Masa lalu sudah tidak ada, masa depan belum tiba, dan saat ini terus berlalu. Jadi, di mana sebenarnya waktu berada?"
    },
    {
        category: "TIME PARADOX",
        text: "Jika waktu bisa dihentikan untuk semua hal, apakah kamu akan menyadari bahwa waktu telah berhenti?"
    },
    {
        category: "TIME PARADOX",
        text: "Jika sebuah kejadian bisa diulang dengan hasil yang sama persis, apakah itu pengulangan atau kejadian yang sama?"
    },
    {
        category: "TIME PARADOX",
        text: "Apabila masa depan sudah dapat diketahui, apakah pilihan kita masih benar-benar terbuka?"
    },

    // 03 — REALITY GLITCH
    {
        category: "REALITY GLITCH",
        text: "Bagaimana kamu tahu bahwa dunia yang kamu lihat adalah dunia sebagaimana adanya, bukan sekadar cara otakmu menerjemahkannya?"
    },
    {
        category: "REALITY GLITCH",
        text: "Jika semua manusia bermimpi tentang dunia yang sama, pada titik mana kita akan menyebutnya kenyataan?"
    },
    {
        category: "REALITY GLITCH",
        text: "Apakah sesuatu tetap memiliki makna jika tidak ada satu pun makhluk yang mampu memahaminya?"
    },
    {
        category: "REALITY GLITCH",
        text: "Jika setiap pengamatan mengubah cara kita memahami sesuatu, bisakah kita mengenal sesuatu tanpa dipengaruhi oleh diri sendiri?"
    },
    {
        category: "REALITY GLITCH",
        text: "Bagaimana jika hal yang kita sebut nyata hanyalah bagian kecil dari sesuatu yang belum mampu kita bayangkan?"
    },

    // 04 — HUMAN MYSTERY
    {
        category: "HUMAN MYSTERY",
        text: "Jika ingatanmu berubah sedikit demi sedikit, bagian mana dari dirimu yang tetap sama?"
    },
    {
        category: "HUMAN MYSTERY",
        text: "Kamu bisa mendengar pikiranmu sendiri. Tetapi siapa yang sedang mendengarkan?"
    },
    {
        category: "HUMAN MYSTERY",
        text: "Jika tidak ada seorang pun yang mengenal namamu, apakah dirimu akan menjadi orang yang berbeda?"
    },
    {
        category: "HUMAN MYSTERY",
        text: "Mengapa sebuah kenangan yang sudah lama berlalu terkadang terasa lebih dekat daripada hari kemarin?"
    },
    {
        category: "HUMAN MYSTERY",
        text: "Jika pikiran bisa mengamati dirinya sendiri, apakah ada bagian dari pikiran yang tidak pernah bisa diamati?"
    },

    // 05 — EXISTENCE
    {
        category: "EXISTENCE",
        text: "Mengapa ada sesuatu, alih-alih tidak ada apa-apa sama sekali?"
    },
    {
        category: "EXISTENCE",
        text: "Jika segala sesuatu memiliki penyebab, apakah penyebab pertama juga membutuhkan penyebab?"
    },
    {
        category: "EXISTENCE",
        text: "Apakah alam semesta membutuhkan seseorang untuk menyaksikannya agar keberadaannya berarti?"
    },
    {
        category: "EXISTENCE",
        text: "Jika kehidupan memiliki makna, apakah makna itu ditemukan, diciptakan, atau keduanya?"
    },
    {
        category: "EXISTENCE",
        text: "Jika tidak ada tujuan yang ditetapkan untuk hidup, dari mana datangnya keinginan manusia untuk mencari tujuan?"
    },

    // 06 — UNANSWERED SCIENCE
    {
        category: "UNANSWERED SCIENCE",
        text: "Bagaimana materi yang tidak hidup bisa menjadi bagian dari dunia yang akhirnya melahirkan kesadaran?"
    },
    {
        category: "UNANSWERED SCIENCE",
        text: "Apakah kehidupan pernah muncul di tempat lain di alam semesta, atau Bumi adalah satu-satunya tempat yang kita ketahui sejauh ini?"
    },
    {
        category: "UNANSWERED SCIENCE",
        text: "Apa sebenarnya materi gelap, dan rahasia apa yang masih tersembunyi di balik pengaruh gravitasinya?"
    },
    {
        category: "UNANSWERED SCIENCE",
        text: "Mengapa alam semesta memiliki hukum fisika seperti yang kita amati, dan mungkinkah hukum itu berbeda?"
    },
    {
        category: "UNANSWERED SCIENCE",
        text: "Seberapa jauh manusia bisa memahami realitas jika alat untuk memahaminya juga merupakan bagian dari realitas itu?"
    },

    // 07 — IMPOSSIBLE QUESTIONS
    {
        category: "IMPOSSIBLE QUESTIONS",
        text: "Jika kamu lupa seluruh hidupmu tetapi tetap menjadi dirimu, bagian mana yang membuatmu tetap menjadi orang yang sama?"
    },
    {
        category: "IMPOSSIBLE QUESTIONS",
        text: "Bisakah sesuatu benar-benar tidak terbatas jika kita hanya mampu membayangkannya dari sesuatu yang terbatas?"
    },
    {
        category: "IMPOSSIBLE QUESTIONS",
        text: "Jika semua pertanyaan memiliki jawaban, apakah pertanyaan itu sendiri juga harus memiliki jawaban?"
    },
    {
        category: "IMPOSSIBLE QUESTIONS",
        text: "Bisakah kita membayangkan sesuatu yang benar-benar tidak bisa dibayangkan?"
    },
    {
        category: "IMPOSSIBLE QUESTIONS",
        text: "Jika kamu menemukan jawaban untuk semua misteri, pertanyaan apa yang akan kamu ajukan terakhir kali?"
    }
];
