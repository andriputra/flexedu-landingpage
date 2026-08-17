const specs = [
  "Titik verifikasi identitas siswa di gerbang smart campus",
  "Layar sentuh ramah peserta didik — dari SD hingga SMA",
  "Status kehadiran terhubung langsung ke data akademik",
  "Multi-mode: AI wajah, RFID kartu pelajar, dan QR student ID",
  "Siap dipasang di gerbang, lobby, atau area administrasi",
];

export default function Product() {
  return (
    <section id="kiosk" className="relative scroll-mt-28 overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-mid to-navy" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative" data-reveal="left">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div data-parallax="0.1" className="will-change-transform">
              <img
                src="./kiosk.png"
                alt="Kiosk smart campus FlexEdu"
                className="w-full scale-105 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-full border border-cyan/30 bg-navy/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur">
              Smart Campus Kiosk
            </div>
          </div>
        </div>

        <div id="solusi" className="scroll-mt-28" data-reveal="right">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Smart campus hardware
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Kiosk kampus untuk sekolah digital.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            Infrastruktur EdTech di pintu sekolah: siswa terverifikasi, kehadiran masuk
            ke sistem akademik, dan warga sekolah tetap dalam satu ekosistem data.
          </p>
          <ul className="mt-8 space-y-3">
            {specs.map((spec) => (
              <li key={spec} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan glow-cyan" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
