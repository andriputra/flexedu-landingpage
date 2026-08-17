const groups = [
  {
    title: "Untuk Sekolah",
    points: [
      "Citra modern di gerbang dan lobby",
      "Disiplin kehadiran lebih terukur",
      "Data absensi rapi untuk akreditasi",
    ],
  },
  {
    title: "Untuk Guru & TU",
    points: [
      "Tidak perlu absen manual di kelas",
      "Rekap otomatis per hari dan bulan",
      "Pantau terlambat dan izin real-time",
    ],
  },
  {
    title: "Untuk Orang Tua",
    points: [
      "Tahu anak sudah sampai sekolah",
      "Notifikasi pulang lewat WhatsApp",
      "Lebih tenang tanpa menebak-nebak",
    ],
  },
];

export default function Audience() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Manfaat
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Semua pihak mendapat kejelasan.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3" data-stagger>
          {groups.map((group) => (
            <article
              key={group.title}
              className="hover-lift rounded-2xl border border-white/10 bg-gradient-to-b from-navy-card/80 to-navy/40 p-8"
            >
              <h3 className="font-serif text-2xl text-gold">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
