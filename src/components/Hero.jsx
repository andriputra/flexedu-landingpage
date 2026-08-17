import WaButton from "./WaButton.jsx";

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_58%)]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-24">
        <div className="z-10">
          <p className="fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan glow-cyan" />
            EdTech · Smart School · Student ID
          </p>
          <h1 className="fade-up delay-1 font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
            Sekolah digital dimulai
            <span className="block text-glow text-cyan">dari kehadiran siswa.</span>
          </h1>
          <p className="fade-up delay-2 mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            FlexEdu adalah platform EdTech kehadiran: AI mengenali identitas siswa,
            data akademik tercatat otomatis, guru dan orang tua terhubung dalam satu ekosistem.
          </p>
          <div className="fade-up delay-3 mt-7 flex flex-wrap items-center gap-4">
            <WaButton className="glow-gold rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy transition hover:bg-gold-deep">
              Ajukan Demo Sekolah
            </WaButton>
            <a
              href="#kiosk"
              className="rounded-full border border-cyan/40 px-7 py-3 text-sm font-semibold text-cyan transition hover:border-cyan hover:bg-cyan/10"
            >
              Lihat Smart Campus
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl fade-up delay-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full hud-ring pulse-ring" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full hud-ring" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-navy-deep/40 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
            <img
              src="./face-scan.png"
              alt="AI student identity scan FlexEdu"
              className="float-slow w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="scan-line absolute inset-x-0 h-28" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-cyan/20 bg-navy/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan/80">Student identity</p>
                <p className="text-sm font-semibold text-white">Verifikasi siswa aktif</p>
              </div>
              <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">
                CAMPUS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
