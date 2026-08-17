import { site, waLink } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <a href="#beranda" className="flex items-center gap-3">
          <img src="./logo.png" alt="FlexEdu" className="h-10 w-10 rounded-lg object-cover" />
          <div>
            <p className="font-serif text-gold">FlexEdu</p>
            <p className="text-xs text-slate-500">Absensi sekolah cerdas</p>
          </div>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
          <a href="#fitur" className="hover:text-cyan">
            Fitur
          </a>
          <a href="#harga" className="hover:text-cyan">
            Harga
          </a>
          <a href="#kiosk" className="hover:text-cyan">
            Kiosk
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-cyan">
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-cyan">
            Email
          </a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} FlexEdu. All rights reserved.</p>
      </div>
    </footer>
  );
}
