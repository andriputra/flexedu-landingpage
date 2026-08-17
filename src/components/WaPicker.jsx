import { contacts, formatPhone, waLink } from "../config";
import { useWa } from "../wa";

export default function WaPicker() {
  const { open, message, closeWa } = useWa();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        aria-label="Tutup"
        onClick={closeWa}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-picker-title"
        className="relative w-full max-w-md rounded-3xl border border-cyan/20 bg-navy-mid p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">WhatsApp</p>
        <h2 id="wa-picker-title" className="mt-2 font-serif text-2xl text-white">
          Pilih admin
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Chat akan terbuka di WhatsApp dengan pesan yang sudah terisi.
        </p>
        <div className="mt-5 space-y-3">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={waLink(contact.phone, message)}
              target="_blank"
              rel="noreferrer"
              onClick={closeWa}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-navy/60 px-4 py-3.5 transition hover:border-cyan/40 hover:bg-cyan/10"
            >
              <span>
                <span className="block text-sm font-semibold text-white">{contact.name}</span>
                <span className="text-xs text-slate-400">{formatPhone(contact.phone)}</span>
              </span>
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                Chat
              </span>
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={closeWa}
          className="mt-5 w-full rounded-full border border-white/10 py-2.5 text-sm text-slate-300 hover:bg-white/5"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
