import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Datang ke gerbang",
    desc: "Siswa berjalan ke kiosk FlexEdu di pintu masuk atau lobby sekolah.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M3 21V8l9-5 9 5v13M9 21v-8h6v8"
      />
    ),
  },
  {
    n: "02",
    title: "Wajah dipindai",
    desc: "Kamera mengenali wajah terdaftar. Jika perlu, kartu RFID atau QR tetap bisa dipakai.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM4 8V6a2 2 0 012-2h2M20 8V6a2 2 0 00-2-2h-2M4 16v2a2 2 0 002 2h2M20 16v2a2 2 0 01-2 2h-2"
      />
    ),
  },
  {
    n: "03",
    title: "Kehadiran tercatat",
    desc: "Jam masuk atau pulang tersimpan otomatis di dashboard sekolah, tanpa input guru.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M4 19V5h16v14H4zm4-4l2.5 2.5L16 10"
      />
    ),
  },
  {
    n: "04",
    title: "Orang tua terhubung",
    desc: "Notifikasi WhatsApp dikirim instan — orang tua tahu anak sudah sampai atau pulang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M8 10h8M8 14h5M21 12a9 9 0 01-13.3 7.9L3 21l1.2-4.5A9 9 0 1121 12z"
      />
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % steps.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [inView]);

  const progress = (active / (steps.length - 1)) * 100;

  return (
    <section
      id="alur"
      ref={sectionRef}
      className="relative scroll-mt-28 overflow-hidden bg-navy-mid py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Cara kerja
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
              Empat langkah. Nol antrian absen.
            </h2>
          </div>
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan sm:self-auto">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan glow-cyan" />
            Flow {steps[active].n} · {steps[active].title}
          </p>
        </div>

        <div className="mt-16 hidden lg:block">
          <div className="relative mx-[7%] mb-10 h-3">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
            <div
              className="flow-dash absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              aria-hidden
            />
            <div
              className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan via-cyan-bright to-gold transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan glow-cyan transition-[left] duration-700 ease-out"
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-5" data-stagger>
            {steps.map((step, index) => (
              <StepCard
                key={step.n}
                step={step}
                active={index === active}
                done={index < active}
                onSelect={() => setActive(index)}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-6 left-[21px] top-6 w-px bg-white/10">
            <div
              className="absolute left-0 top-0 w-px rounded-full bg-gradient-to-b from-cyan to-gold transition-[height] duration-700 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>
          <div className="space-y-5" data-stagger>
            {steps.map((step, index) => (
              <div key={step.n} className="relative pl-14">
                <span
                  className={`absolute left-0 top-7 flex h-11 w-11 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500 ${
                    index === active
                      ? "border-cyan bg-cyan text-navy glow-cyan"
                      : index < active
                        ? "border-gold/50 bg-gold/20 text-gold"
                        : "border-white/15 bg-navy text-slate-400"
                  }`}
                >
                  {step.n}
                </span>
                <StepCard
                  step={step}
                  active={index === active}
                  done={index < active}
                  onSelect={() => setActive(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, active, done, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border p-6 text-left transition-all duration-500 ${
        active
          ? "border-cyan/50 bg-cyan/10 shadow-[0_0_40px_rgba(34,211,238,0.16)]"
          : done
            ? "border-gold/25 bg-navy/60"
            : "border-white/10 bg-navy/50"
      }`}
    >
      <div className="mb-4 hidden items-center justify-between lg:flex">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ${
            active
              ? "border-cyan bg-cyan text-navy glow-cyan"
              : done
                ? "border-gold/40 bg-gold/15 text-gold"
                : "border-white/15 bg-navy-card text-slate-400"
          }`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {step.icon}
          </svg>
        </span>
        <span
          className={`font-serif text-3xl transition-colors duration-500 ${
            active ? "text-cyan" : done ? "text-gold/70" : "text-white/20"
          }`}
        >
          {step.n}
        </span>
      </div>
      <h3 className={`text-lg font-semibold ${active ? "text-white" : "text-slate-200"}`}>
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
      {active && (
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">
          Sedang berjalan
        </p>
      )}
    </button>
  );
}
