import { site } from "../config";
import WaButton from "./WaButton.jsx";

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
          <WaButton className="hover:text-cyan">WhatsApp</WaButton>
          <a href="https://flexedu-attend.vercel.app/login" target="_blank" className="hover:text-cyan">
            Demo
          </a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} FlexEdu. All rights reserved. by <a href="https://flexbox.id" target="_blank" className="hover:text-cyan">Flexbox Indonesia</a></p>
      </div>
    </footer>
  );
}
