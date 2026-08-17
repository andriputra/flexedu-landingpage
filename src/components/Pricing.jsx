import { waLink } from "../config";

const plans = [
  {
    id: "smart",
    name: "Paket Smart",
    badge: "Paling dipilih",
    period: "Bulanan",
    priceOld: "Rp 500.000",
    price: "Rp 175.000",
    unit: "/ bulan",
    note: "Cloud system — siap dipakai tanpa server sekolah.",
    featured: true,
    benefits: [
      "1.000 siswa",
      "Cloud System",
      "Face Detection",
      "Laporan Siswa",
      "Free WA Notif",
      "Laporan Karyawan",
    ],
    cta: "Pilih Smart",
    message:
      "Halo FlexEdu, saya tertarik dengan Paket Smart Bulanan (Rp 175.000/bulan).",
  },
  {
    id: "growth",
    name: "Paket Growth",
    badge: "On-Premise",
    period: "Stand Alone",
    priceOld: null,
    price: "Hubungi Penyedia",
    unit: "",
    note: "Benefit sama dengan Paket Smart. Sistem diinstall di server sekolah.",
    featured: false,
    benefits: [
      "1.000 siswa",
      "Install di server sekolah",
      "Face Detection",
      "Laporan Siswa",
      "Free WA Notif",
      "Laporan Karyawan",
    ],
    cta: "Hubungi Penyedia",
    message:
      "Halo FlexEdu, saya tertarik dengan Paket Growth Stand Alone (install di server sekolah).",
  },
  {
    id: "techpro",
    name: "Paket TechPro",
    badge: "Hardware + Software",
    period: "Custom",
    priceOld: null,
    price: "Custom",
    unit: "",
    note: "Paket lengkap kiosk, kartu, dan kapasitas tanpa batas.",
    featured: false,
    benefits: [
      "Paket Kiosk 2 titik",
      "RFID Card 1.000",
      "QR Detection",
      "Siswa & karyawan unlimited",
      "Free WA Notif",
    ],
    cta: "Minta Penawaran",
    message:
      "Halo FlexEdu, saya tertarik dengan Paket TechPro (harga custom). Mohon penawaran.",
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="relative scroll-mt-28 overflow-hidden py-24">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Pilih paket sesuai kebutuhan sekolah.
          </h2>
          <p className="mt-4 text-slate-300">
            Dari cloud bulanan hingga kiosk lengkap — skalakan sesuai jumlah siswa dan infrastruktur kampus.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                plan.featured
                  ? "border-gold/50 bg-gradient-to-b from-gold/15 to-navy-card/80 shadow-[0_0_50px_rgba(245,185,66,0.12)]"
                  : "border-white/10 bg-navy-card/60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  {plan.period}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                    plan.featured
                      ? "bg-gold text-navy"
                      : "border border-cyan/25 bg-cyan/10 text-cyan"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl text-white">{plan.name}</h3>

              <div className="mt-5">
                {plan.priceOld && (
                  <p className="text-sm text-slate-500 line-through">{plan.priceOld}</p>
                )}
                <p className="font-serif text-4xl text-gold">
                  {plan.price}
                  {plan.unit && (
                    <span className="ml-1 text-base font-sans font-medium tracking-normal text-slate-400">
                      {plan.unit}
                    </span>
                  )}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.note}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(plan.message)}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                  plan.featured
                    ? "glow-gold bg-gold text-navy hover:bg-gold-deep"
                    : "border border-cyan/40 text-cyan hover:bg-cyan/10"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
