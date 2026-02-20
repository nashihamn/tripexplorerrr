// ============================================================
// NUSANTARA TRIP — Dummy Package Data
// ============================================================

export interface Package {
  id: string;
  slug: string;
  name: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  durationDays: number;
  durationNights: number;
  rating: number;
  reviewCount: number;
  coverPhoto: string;
  photos: string[];
  badge?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  includes: string[];
  excludes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  testimonials: {
    id: string;
    name: string;
    photo: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const packages: Package[] = [
  {
    id: "1",
    slug: "bromo-sunrise-2d1n",
    name: "Bromo Sunrise 2D1N",
    destination: "Bromo",
    description:
      "Saksikan matahari terbit yang memukau di puncak Gunung Bromo, pemandangan lautan awan yang tak terlupakan, dan hamparan pasir vulkanik yang eksotis.",
    price: 850000,
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    durationNights: 1,
    rating: 4.9,
    reviewCount: 247,
    coverPhoto:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
      "https://images.unsplash.com/photo-1518209391610-28a3a5e9d2e2?w=800&q=80",
    ],
    badge: "Best Seller",
    isBestSeller: true,
    includes: [
      "Transport jeep 4WD",
      "Guide profesional",
      "Tiket masuk TNBTS",
      "Penginapan 1 malam",
      "Sarapan pagi",
      "Air mineral",
    ],
    excludes: [
      "Biaya makan siang & makan malam",
      "Biaya transportasi ke Meeting Point",
      "Pengeluaran pribadi",
      "Tip untuk guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Bromo",
        description: "Berangkat menuju Bromo dan persiapan untuk sunrise esok hari.",
        activities: [
          "Check in penginapan di Cemoro Lawang",
          "Istirahat dan briefing perjalanan",
          "Makan malam bersama",
          "Persiapan untuk bangun pagi",
        ],
      },
      {
        day: 2,
        title: "Sunrise Bromo & Jeep Tour",
        description: "Saksikan momen magis sunrise dari Penanjakan dan jelajahi kawah Bromo.",
        activities: [
          "Bangun pukul 02.30, sarapan ringan",
          "Jeep menuju Penanjakan 1 (sunrise point)",
          "Nikmati sunrise spektakuler",
          "Kunjungi Kawah Bromo & Pura Luhur Poten",
          "Wisata Bukit Teletubbies & Padang Savana",
          "Kembali ke penginapan & checkout",
        ],
      },
    ],
    testimonials: [
      {
        id: "t1",
        name: "Budi Santoso",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        comment: "Pengalaman luar biasa! Sunrise di Bromo benar-benar memukau. Guide sangat profesional dan ramah. Pasti akan balik lagi!",
        date: "2024-12-15",
      },
      {
        id: "t2",
        name: "Sari Dewi",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
        rating: 5,
        comment: "Trip yang sangat berkesan! Pemandangan lautan awan membuat terkesima. Sangat recommended untuk yang belum pernah ke Bromo.",
        date: "2024-11-20",
      },
      {
        id: "t3",
        name: "Andi Wijaya",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        rating: 5,
        comment: "Pelayanan top! Dari booking sampai selesai trip semuanya lancar. Harga sangat worth it untuk pengalaman yang didapat.",
        date: "2024-10-05",
      },
    ],
  },
  {
    id: "2",
    slug: "banyuwangi-ijen-3d2n",
    name: "Banyuwangi–Ijen Crater 3D2N",
    destination: "Ijen",
    description:
      "Jelajahi keajaiban api biru yang legendaris di kawah Ijen, danau kawah terhijau di dunia, dan keindahan alam Banyuwangi yang memesona.",
    price: 1200000,
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    durationNights: 2,
    rating: 4.8,
    reviewCount: 189,
    coverPhoto:
      "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    ],
    badge: "Populer",
    isBestSeller: false,
    includes: [
      "Transport AC",
      "Guide & porter",
      "Masker gas",
      "Penginapan 2 malam",
      "Sarapan 2x",
      "Tiket masuk kawah Ijen",
    ],
    excludes: [
      "Biaya makan siang & makan malam",
      "Biaya transportasi dari kota asal",
      "Pengeluaran pribadi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tiba di Banyuwangi",
        description: "Perkenalan dengan keindahan kota Banyuwangi.",
        activities: [
          "Penjemputan di stasiun/bandara",
          "Check in hotel",
          "City tour Banyuwangi",
          "Makan malam & istirahat",
        ],
      },
      {
        day: 2,
        title: "Api Biru Kawah Ijen",
        description: "Pendakian malam untuk menyaksikan fenomena api biru yang langka.",
        activities: [
          "Bangun 00.00 WIB",
          "Perjalanan menuju Paltuding (pintu masuk Ijen)",
          "Trekking 3km menuju kawah",
          "Saksikan blue fire (api biru) yang langka",
          "Sunrise di bibir kawah Ijen",
          "Kembali ke penginapan, istirahat",
        ],
      },
      {
        day: 3,
        title: "Wisata Pantai & Kepulangan",
        description: "Jelajahi keindahan pantai Banyuwangi sebelum pulang.",
        activities: [
          "Sarapan pagi",
          "Kunjungi Pantai Pulau Merah",
          "Oleh-oleh khas Banyuwangi",
          "Antar ke stasiun/bandara",
        ],
      },
    ],
    testimonials: [
      {
        id: "t4",
        name: "Rina Kusuma",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5,
        comment: "Api biru Ijen benar-benar fenomena alam yang luar biasa! Pendakian malam terasa menantang tapi sepadan. Wajib dicoba!",
        date: "2024-12-01",
      },
      {
        id: "t5",
        name: "Deni Pratama",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        comment: "Ini bucket list trip saya sejak lama. Akhirnya kesampaian! Api birunya memang magis sekali. Terima kasih Nusantara Trip!",
        date: "2024-11-10",
      },
    ],
  },
  {
    id: "3",
    slug: "jogja-heritage-2d1n",
    name: "Jogja Heritage 2D1N",
    destination: "Jogja",
    description:
      "Selami kekayaan budaya Yogyakarta — dari kemegahan Candi Borobudur, misteri Candi Prambanan, hingga pesona Keraton dan seni batik.",
    price: 750000,
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    durationNights: 1,
    rating: 4.7,
    reviewCount: 312,
    coverPhoto:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1540450769629-87e2e0b2a9d2?w=800&q=80",
    ],
    badge: "Terjangkau",
    isBestSeller: false,
    isNew: false,
    includes: [
      "Transport AC",
      "Guide lokal berpengalaman",
      "Tiket masuk Borobudur",
      "Tiket masuk Prambanan",
      "Penginapan 1 malam",
      "Sarapan pagi",
    ],
    excludes: [
      "Biaya makan siang & makan malam",
      "Biaya transportasi ke Yogyakarta",
      "Pengeluaran pribadi",
      "Oleh-oleh",
    ],
    itinerary: [
      {
        day: 1,
        title: "Borobudur & Seni Budaya",
        description: "Jelajahi kemegahan Borobudur dan keindahan seni budaya Jogja.",
        activities: [
          "Penjemputan dan perjalanan ke Magelang",
          "Kunjungi Candi Borobudur",
          "Sunrise tour (opsional)",
          "Kunjungi kampung wisata Borobudur",
          "Check in hotel di Jogja",
          "Workshop batik",
        ],
      },
      {
        day: 2,
        title: "Prambanan & Keraton",
        description: "Temukan keagungan Prambanan dan istana Keraton Yogyakarta.",
        activities: [
          "Sarapan pagi",
          "Kunjungi Candi Prambanan",
          "Tour Keraton Yogyakarta",
          "Jalan-jalan di Malioboro",
          "Berburu oleh-oleh khas Jogja",
          "Kembali ke penginapan/kepulangan",
        ],
      },
    ],
    testimonials: [
      {
        id: "t6",
        name: "Maya Sari",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        rating: 5,
        comment: "Paket yang super value for money! Guide sangat informatif, membuat perjalanan jadi lebih berkesan dan bermakna.",
        date: "2024-12-10",
      },
      {
        id: "t7",
        name: "Reza Firmansyah",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
        rating: 4,
        comment: "Jogja selalu memiliki daya tarik tersendiri. Dengan paket ini semua lebih mudah dan terorganisir dengan baik.",
        date: "2024-10-28",
      },
    ],
  },
  {
    id: "4",
    slug: "labuan-bajo-premium-4d3n",
    name: "Labuan Bajo Premium 4D3N",
    destination: "Labuan Bajo",
    description:
      "Petualangan premium di raja ampatnya NTT — snorkeling bersama manta ray, bertemu komodo di habitat aslinya, dan menyaksikan sunset Padar yang ikonik.",
    price: 3500000,
    duration: "4 Hari 3 Malam",
    durationDays: 4,
    durationNights: 3,
    rating: 4.9,
    reviewCount: 156,
    coverPhoto:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&q=80",
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
    ],
    badge: "Premium",
    isBestSeller: true,
    includes: [
      "Kapal phinisi private",
      "Snorkeling equipment",
      "Guide & ranger Komodo",
      "Penginapan 3 malam",
      "Full board (3x makan/hari)",
      "Tiket masuk Taman Nasional Komodo",
    ],
    excludes: [
      "Tiket pesawat ke Labuan Bajo",
      "Travel insurance",
      "Pengeluaran pribadi",
      "Tips untuk crew",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tiba di Labuan Bajo",
        description: "Selamat datang di surga tersembunyi Indonesia.",
        activities: [
          "Penjemputan di Bandara Komodo",
          "Check in hotel",
          "Sunset di Bukit Cinta",
          "Makan malam seafood segar",
        ],
      },
      {
        day: 2,
        title: "Pulau Padar & Snorkeling",
        description: "Hiking Padar dan snorkeling di spot terbaik.",
        activities: [
          "Sarapan di kapal",
          "Trekking Bukit Pulau Padar",
          "Snorkeling di Pink Beach",
          "Bertemu Manta Ray di Manta Point",
          "Makan siang di atas kapal",
          "Kembali ke hotel",
        ],
      },
      {
        day: 3,
        title: "Pulau Komodo & Rinca",
        description: "Bertemu langsung dengan komodo di habitat aslinya.",
        activities: [
          "Sarapan pagi",
          "Trekking di Pulau Komodo",
          "Lihat komodo dengan ranger",
          "Snorkeling di Pulau Rinca",
          "Sunset cruise",
        ],
      },
      {
        day: 4,
        title: "Kepulangan",
        description: "Kenangan indah yang akan selalu diingat.",
        activities: [
          "Sarapan pagi",
          "Belanja oleh-oleh di pasar lokal",
          "Antar ke Bandara Komodo",
        ],
      },
    ],
    testimonials: [
      {
        id: "t8",
        name: "Indah Permata",
        photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
        rating: 5,
        comment: "Labuan Bajo dengan Nusantara Trip adalah pengalaman terbaik dalam hidup saya! Semua detail terjaga dengan sempurna.",
        date: "2024-12-20",
      },
      {
        id: "t9",
        name: "Hendra Gunawan",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
        rating: 5,
        comment: "Premium memang worth it! Kapal phinisi-nya nyaman, makanannya enak, dan snorkeling bersama manta ray tak terlupakan!",
        date: "2024-11-05",
      },
    ],
  },
  {
    id: "5",
    slug: "bali-ubud-escape-3d2n",
    name: "Bali Ubud Escape 3D2N",
    destination: "Bali",
    description:
      "Temukan ketenangan jiwa di jantung Bali — dari sawah terasering Tegalalang, ritual spiritual di Pura Tirta Empul, hingga seni dan kuliner autentik Ubud.",
    price: 1800000,
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    durationNights: 2,
    rating: 4.8,
    reviewCount: 278,
    coverPhoto:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
    ],
    badge: "Terbaru",
    isNew: true,
    includes: [
      "Transport AC",
      "Driver & guide lokal",
      "Penginapan 2 malam (resort bintang 4)",
      "Sarapan 2x",
      "Tiket masuk destinasi",
      "Welcome drink",
    ],
    excludes: [
      "Tiket pesawat ke Bali",
      "Biaya makan siang & malam",
      "Spa & aktivitas tambahan",
      "Pengeluaran pribadi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ubud & Tegalalang",
        description: "Selami keindahan alam dan budaya Ubud.",
        activities: [
          "Penjemputan di bandara/hotel",
          "Kunjungi Tegalalang Rice Terrace",
          "Monkey Forest Sanctuary",
          "Jalan-jalan di Pasar Ubud",
          "Check in resort",
          "Dinner dengan pertunjukan Kecak",
        ],
      },
      {
        day: 2,
        title: "Spiritual & Alam Ubud",
        description: "Temukan kedamaian jiwa di tempat-tempat sakral Bali.",
        activities: [
          "Sarapan pagi",
          "Kunjungi Pura Tirta Empul (ritual melukat)",
          "Kunjungi Pura Gunung Kawi",
          "Rafting di Sungai Ayung (opsional)",
          "Kelas memasak masakan Bali",
          "Sunset di Campuhan Ridge Walk",
        ],
      },
      {
        day: 3,
        title: "Kepulangan",
        description: "Kenangan Bali yang selalu dirindukan.",
        activities: [
          "Sarapan pagi",
          "Kunjungi galeri seni lokal",
          "Belanja oleh-oleh di Sukawati",
          "Antar ke bandara",
        ],
      },
    ],
    testimonials: [
      {
        id: "t10",
        name: "Putri Rahayu",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
        rating: 5,
        comment: "Ubud Escape benar-benar menyegarkan jiwa! Resort-nya indah, guidenya informatif, dan ritual di Tirta Empul sangat berkesan.",
        date: "2024-12-25",
      },
      {
        id: "t11",
        name: "Bagas Permana",
        photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80",
        rating: 5,
        comment: "Perjalanan yang menenangkan dan memperkaya wawasan budaya. Bali tidak pernah mengecewakan, apalagi dengan Nusantara Trip!",
        date: "2024-11-18",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "1",
    slug: "tips-mendaki-bromo",
    title: "7 Tips Wajib Sebelum Mendaki Gunung Bromo",
    excerpt:
      "Persiapkan dirimu sebelum menaklukkan keindahan Bromo. Dari perlengkapan yang harus dibawa hingga waktu terbaik untuk berkunjung.",
    thumbnail:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80",
    publishedAt: "2024-12-15",
    readTime: "5 menit",
    author: "Tim Nusantara Trip",
  },
  {
    id: "2",
    slug: "keajaiban-api-biru-ijen",
    title: "Keajaiban Api Biru Kawah Ijen yang Memukau Dunia",
    excerpt:
      "Fenomena alam langka yang hanya ada di dua tempat di dunia. Pelajari mengapa api biru Ijen menjadi daya tarik wisatawan internasional.",
    thumbnail:
      "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=600&q=80",
    publishedAt: "2024-12-01",
    readTime: "7 menit",
    author: "Tim Nusantara Trip",
  },
  {
    id: "3",
    slug: "panduan-komodo-labuan-bajo",
    title: "Panduan Lengkap Wisata Komodo & Labuan Bajo 2025",
    excerpt:
      "Segala yang perlu kamu tahu untuk menjelajahi Taman Nasional Komodo — dari cara menuju ke sana, biaya, hingga tips aman bertemu komodo.",
    thumbnail:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    publishedAt: "2024-11-20",
    readTime: "10 menit",
    author: "Tim Nusantara Trip",
  },
];

export const galleryImages = [
  {
    id: "g1",
    destination: "Bromo",
    url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80",
    caption: "Sunrise Bromo",
  },
  {
    id: "g2",
    destination: "Bromo",
    url: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80",
    caption: "Kawah Bromo",
  },
  {
    id: "g3",
    destination: "Ijen",
    url: "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=600&q=80",
    caption: "Api Biru Ijen",
  },
  {
    id: "g4",
    destination: "Ijen",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    caption: "Danau Kawah Ijen",
  },
  {
    id: "g5",
    destination: "Jogja",
    url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80",
    caption: "Candi Borobudur",
  },
  {
    id: "g6",
    destination: "Jogja",
    url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
    caption: "Candi Prambanan",
  },
  {
    id: "g7",
    destination: "Labuan Bajo",
    url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    caption: "Pulau Padar",
  },
  {
    id: "g8",
    destination: "Labuan Bajo",
    url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    caption: "Pink Beach",
  },
  {
    id: "g9",
    destination: "Bali",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    caption: "Tegalalang Ubud",
  },
  {
    id: "g10",
    destination: "Bali",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80",
    caption: "Pura Bali",
  },
];

export const testimonials = [
  ...packages.flatMap((p) => p.testimonials),
  {
    id: "t12",
    name: "Nita Anggraini",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    rating: 5,
    comment: "Nusantara Trip membuat liburan saya jadi sangat mudah dan menyenangkan. Dari booking hingga pulang semua terorganisir dengan sempurna!",
    date: "2024-12-28",
    packageName: "Bromo Sunrise",
  },
  {
    id: "t13",
    name: "Yusuf Hakim",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    rating: 5,
    comment: "Ini adalah travel agent terpercaya yang sudah saya coba! Harga transparan, guide berpengalaman, dan tidak ada biaya tersembunyi.",
    date: "2024-12-05",
    packageName: "Bali Ubud Escape",
  },
];

export const faqs = [
  {
    id: "faq1",
    question: "Bagaimana cara memesan paket wisata di Nusantara Trip?",
    answer:
      "Proses pemesanan sangat mudah! Pilih paket yang kamu inginkan, isi formulir data diri, pilih tanggal keberangkatan, masukkan kode voucher (jika ada), lalu lakukan pembayaran. Konfirmasi booking akan dikirim ke email kamu dalam 1x24 jam.",
  },
  {
    id: "faq2",
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima berbagai metode pembayaran: transfer bank (BCA, Mandiri, BRI, BNI), kartu kredit/debit (Visa, Mastercard), dompet digital (GoPay, OVO, DANA, ShopeePay), dan QRIS.",
  },
  {
    id: "faq3",
    question: "Apakah bisa membatalkan atau mengubah tanggal pemesanan?",
    answer:
      "Ya, bisa! Pembatalan lebih dari 7 hari sebelum keberangkatan mendapat refund 80%. Pembatalan 3-7 hari sebelumnya mendapat refund 50%. Perubahan tanggal bisa dilakukan tanpa biaya tambahan selama slot masih tersedia.",
  },
  {
    id: "faq4",
    question: "Apakah harga sudah termasuk akomodasi dan transportasi?",
    answer:
      "Setiap paket memiliki detail yang berbeda. Semua fasilitas yang termasuk dan tidak termasuk sudah tercantum dengan jelas di halaman detail setiap paket. Pastikan kamu membaca bagian 'Termasuk' dan 'Tidak Termasuk' sebelum memesan.",
  },
  {
    id: "faq5",
    question: "Apakah ada batas usia untuk mengikuti tour?",
    answer:
      "Setiap destinasi memiliki ketentuan berbeda. Untuk Bromo dan Ijen, kami rekomendasikan usia minimal 10 tahun karena melibatkan trekking. Labuan Bajo memerlukan kemampuan berenang dasar untuk snorkeling. Detail persyaratan ada di setiap halaman paket.",
  },
  {
    id: "faq6",
    question: "Berapa jumlah minimum peserta untuk satu kelompok tour?",
    answer:
      "Kami melayani pemesanan individu hingga grup besar. Untuk private tour, tidak ada minimum peserta. Untuk paket reguler (shared tour), minimum 2 orang. Untuk grup 10+ orang, hubungi kami untuk mendapatkan harga spesial.",
  },
];
