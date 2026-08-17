import { site } from "./config.js";

export const seo = {
  title: "FlexEdu | Absensi Sekolah Digital Face Recognition & Kiosk",
  description:
    "Sistem absensi sekolah digital dengan face recognition, kiosk gerbang, RFID, QR, dan notifikasi WhatsApp orang tua. Paket Smart mulai Rp 175.000/bulan.",
  keywords:
    "absensi sekolah, absensi siswa digital, face recognition sekolah, kiosk absensi, RFID kartu pelajar, QR code absensi, FlexEdu, notifikasi WhatsApp orang tua, smart school Indonesia, absensi guru dan karyawan",
  locale: "id_ID",
  image: `${site.url}/kiosk.png`,
  imageAlt: "Kiosk absensi sekolah FlexEdu dengan face recognition",
};

export const faqs = [
  {
    q: "Apa itu FlexEdu?",
    a: "FlexEdu adalah platform absensi sekolah digital untuk smart school. Sistem ini mencatat kehadiran siswa dan karyawan lewat face recognition, kiosk gerbang, kartu RFID, atau QR, lalu mengirim notifikasi WhatsApp ke orang tua.",
  },
  {
    q: "Bagaimana absensi face recognition di sekolah bekerja?",
    a: "Siswa datang ke kiosk di gerbang atau lobby. Kamera mengenali wajah terdaftar dalam hitungan detik, lalu jam masuk atau pulang tersimpan otomatis di dashboard sekolah tanpa absen manual.",
  },
  {
    q: "Apakah FlexEdu mendukung RFID dan QR code?",
    a: "Ya. Selain face detection, FlexEdu mendukung kartu pelajar RFID dan scan QR sebagai opsi cadangan jika wajah belum terdaftar. Paket TechPro termasuk kiosk 2 titik dan 1.000 kartu RFID.",
  },
  {
    q: "Berapa harga absensi sekolah FlexEdu?",
    a: "Paket Smart Cloud Rp 175.000 per bulan (dari Rp 500.000) untuk hingga 1.000 siswa, termasuk face detection, laporan, dan WhatsApp gratis. Paket Growth diinstall di server sekolah. Paket TechPro berharga custom dengan kiosk dan RFID.",
  },
  {
    q: "Apakah data absensi bisa disimpan di server sekolah?",
    a: "Bisa. Pilih Paket Growth Stand Alone agar sistem diinstall di server sekolah (on-premise), dengan benefit yang sama seperti Paket Smart Cloud.",
  },
];

export function jsonLdGraph() {
  const url = site.url;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "FlexEdu",
        url,
        logo: `${url}/logo.png`,
        email: site.email,
        sameAs: [site.instagram, "https://flexbox.id"],
        parentOrganization: {
          "@type": "Organization",
          name: "Flexbox Indonesia",
          url: "https://flexbox.id",
        },
        areaServed: "ID",
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: "FlexEdu",
        inLanguage: "id-ID",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: seo.title,
        description: seo.description,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#software` },
        primaryImageOfPage: { "@id": `${url}/#kiosk-image` },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}/#kiosk-image`,
        url: `${url}/kiosk.png`,
        caption: seo.imageAlt,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#software`,
        name: "FlexEdu Absensi Sekolah",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, Kiosk, Cloud",
        offers: [
          {
            "@type": "Offer",
            name: "Paket Smart Bulanan",
            price: "175000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${url}/#harga`,
          },
          {
            "@type": "Offer",
            name: "Paket Growth Stand Alone",
            availability: "https://schema.org/InStock",
            url: `${url}/#harga`,
          },
          {
            "@type": "Offer",
            name: "Paket TechPro",
            availability: "https://schema.org/InStock",
            url: `${url}/#harga`,
          },
        ],
        featureList: [
          "Face recognition absensi siswa",
          "Kiosk gerbang sekolah",
          "RFID kartu pelajar",
          "QR detection",
          "Notifikasi WhatsApp orang tua",
          "Dashboard dan laporan akademik",
        ],
        inLanguage: "id-ID",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "school",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
}

export function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const paths = ["", "#fitur", "#kiosk", "#harga", "#kontak", "#alur"];
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${site.url}/${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
