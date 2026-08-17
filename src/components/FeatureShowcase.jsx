const demos = [
  {
    title: "Face Detection",
    tag: "AI Identity",
    desc: "Siswa cukup berdiri di kiosk. Wajah dikenali, kehadiran langsung tercatat.",
    image: "./face-scan.png",
    alt: "Contoh face detection FlexEdu",
    scan: true,
  },
  {
    title: "RFID Student Pass",
    tag: "Tap kartu",
    desc: "Kartu pelajar RFID sebagai opsi cadangan — cukup tempel di kiosk.",
    image: "./rfid-card.png",
    alt: "Contoh kartu RFID pelajar FlexEdu",
    scan: false,
  },
  {
    title: "QR Detection",
    tag: "Scan kode",
    desc: "QR di HP atau kartu bisa dipindai jika wajah atau RFID belum terdaftar.",
    image: "./qr-scan.png",
    alt: "Contoh scan QR code absensi FlexEdu",
    scan: true,
  },
];

export default function FeatureShowcase() {
  return (
    <section id="contoh" className="relative scroll-mt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Keunggulan FlexEdu
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            3 Cara Verifikasi di Gerbang Sekolah
          </h2>
          <p className="mt-4 text-slate-300">
            Sekolah dapat menggunakan FlexEdu untuk mengamankan gerbang sekolah dengan cara yang lebih efektif dan efisien.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3" data-stagger>
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="hover-lift overflow-hidden rounded-3xl border border-cyan/15 bg-navy-card/50"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <div data-parallax="0.08" className="h-full w-full will-change-transform">
                  <img
                    src={demo.image}
                    alt={demo.alt}
                    className="h-full w-full scale-110 object-cover"
                  />
                </div>
                {demo.scan && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="scan-line absolute inset-x-0 h-24" />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-cyan/30 bg-navy/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan backdrop-blur">
                  {demo.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{demo.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
