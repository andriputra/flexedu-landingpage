import { useState } from "react";
import { contacts, formatPhone, site, waLink } from "../config";
import { useWa } from "../wa";

export default function Contact() {
  const { openWa } = useWa();
  const [form, setForm] = useState({
    name: "",
    school: "",
    message: "",
  });

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Halo FlexEdu, saya ${form.name || "(nama)"} dari ${form.school || "(sekolah)"}. ${form.message || "Saya ingin konsultasi sistem absensi kiosk + face recognition."}`;
    openWa(text);
  };

  return (
    <section id="kontak" className="relative scroll-mt-28 overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,185,66,0.12),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Mulai sekarang
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">
            Siapkan gerbang sekolah yang lebih cerdas.
          </h2>
          <p className="mt-5 max-w-lg text-slate-300">
            Ceritakan kebutuhan sekolah Anda. Tim FlexEdu akan bantu merancang paket kiosk,
            face recognition, dan notifikasi orang tua.
          </p>
          <div className="mt-8 space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={waLink(contact.phone)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-navy/40 px-4 py-3 text-sm transition hover:border-cyan/40"
              >
                <span className="text-slate-200">
                  {contact.name}
                  <span className="mt-0.5 block text-xs text-slate-400">
                    {formatPhone(contact.phone)}
                  </span>
                </span>
                <span className="text-cyan">WhatsApp</span>
              </a>
            ))}
            <p className="pt-1 text-sm text-slate-300">
              Email:{" "}
              <a className="text-cyan hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-gold/20 bg-navy-mid/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8"
        >
          <label className="block text-sm text-slate-300">
            Nama
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-white outline-none ring-cyan/40 focus:ring-2"
              placeholder="Nama lengkap"
            />
          </label>
          <label className="mt-4 block text-sm text-slate-300">
            Sekolah / Yayasan
            <input
              name="school"
              value={form.school}
              onChange={onChange}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-white outline-none ring-cyan/40 focus:ring-2"
              placeholder="Nama sekolah"
            />
          </label>
          <label className="mt-4 block text-sm text-slate-300">
            Pesan
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows="4"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-navy px-4 py-3 text-white outline-none ring-cyan/40 focus:ring-2"
              placeholder="Ceritakan kebutuhan absensi sekolah Anda"
            />
          </label>
          <button
            type="submit"
            className="glow-gold mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-bold text-navy transition hover:bg-gold-deep"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
