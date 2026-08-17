import { faqs } from "../seo";

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-28 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Pertanyaan absensi sekolah digital
          </h2>
        </div>
        <div className="mt-12 space-y-4" data-stagger>
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-cyan/15 bg-white/5 px-5 py-4 open:border-cyan/40"
            >
              <summary className="cursor-pointer list-none text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-cyan transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
