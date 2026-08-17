import { useState } from "react";
import { waLink } from "../config";

const links = [
  { href: "#solusi", label: "Platform" },
  { href: "#kiosk", label: "Kampus" },
  { href: "#fitur", label: "Modul" },
  { href: "#alur", label: "Alur" },
  { href: "#harga", label: "Harga" },
  { href: "#kontak", label: "Sekolah" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <nav className="flex items-center justify-between rounded-2xl border border-cyan/15 bg-navy/70 px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
          <a href="#beranda" className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="FlexEdu"
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-gold/40"
            />
            <div className="leading-tight">
              <p className="font-serif text-lg tracking-wide text-gold">FlexEdu</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan/80">
                EdTech Platform
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-deep"
            >
              Konsultasi
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-cyan/15 bg-navy-mid/95 p-4 backdrop-blur-xl md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy"
            >
              Demo untuk Sekolah
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
