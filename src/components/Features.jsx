const features = [
  {
    title: "Face Recognition",
    desc: "Siswa absen tanpa kartu. Wajah dikenali di kiosk gerbang dalam hitungan detik.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.5 12C4 7.5 7.5 4.5 12 4.5S20 7.5 21.5 12C20 16.5 16.5 19.5 12 19.5S4 16.5 2.5 12z"
      />
    ),
  },
  {
    title: "Kiosk Gerbang",
    desc: "Perangkat berdiri elegan di pintu masuk. Status hadir langsung tampil di layar.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9 3h6a2 2 0 012 2v14a1 1 0 01-1 1H8a1 1 0 01-1-1V5a2 2 0 012-2zm3 16h.01"
      />
    ),
  },
  {
    title: "RFID & QR",
    desc: "Opsi cadangan dengan kartu pelajar atau scan QR jika wajah belum terdaftar.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M4 7V5a1 1 0 011-1h2M20 7V5a1 1 0 00-1-1h-2M4 17v2a1 1 0 001 1h2M20 17v2a1 1 0 01-1 1h-2M8 8h2v2H8V8zm6 0h2v2h-2V8zM8 14h8"
      />
    ),
  },
  {
    title: "WhatsApp Orang Tua",
    desc: "Notifikasi masuk dan pulang terkirim otomatis, sehingga orang tua tenang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M8 10h8M8 14h5M21 12a9 9 0 01-13.3 7.9L3 21l1.2-4.5A9 9 0 1121 12z"
      />
    ),
  },
  {
    title: "Dashboard Real-time",
    desc: "Pantau kehadiran per kelas, terlambat, dan izin dari satu layar admin.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M4 19V5m0 14h16M8 16V9m4 7V7m4 9v-5"
      />
    ),
  },
  {
    title: "Rekap Otomatis",
    desc: "Laporan harian hingga bulanan siap diunduh untuk tata usaha dan wali kelas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M7 3h8l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zm8 0v5h5M8 13h8M8 17h5"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="fitur" className="relative scroll-mt-28 py-24">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Fitur utama
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Satu sistem, gerbang sampai laporan.
          </h2>
          <p className="mt-4 text-slate-300">
            Dirancang untuk operasional sekolah harian — cepat di gerbang, rapi di administrasi.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {features.map((feature) => (
            <article
              key={feature.title}
              className="hover-lift group rounded-2xl border border-cyan/15 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan/40 hover:bg-cyan/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-navy-card text-cyan">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
              {feature.previews && (
                <div className="mt-4 flex gap-2">
                  {feature.previews.map((preview) => (
                    <a
                      key={preview.alt}
                      href="#contoh"
                      className="block overflow-hidden rounded-xl border border-white/10"
                    >
                      <img
                        src={preview.src}
                        alt={preview.alt}
                        className="h-16 w-24 object-cover"
                      />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
