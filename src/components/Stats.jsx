const items = [
  { value: "< 2 dtk", label: "Verifikasi identitas siswa" },
  { value: "99%+", label: "Akurasi AI kampus" },
  { value: "Real-time", label: "Data kehadiran akademik" },
  { value: "SD–SMA", label: "Ekosistem semua jenjang" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-cyan/10 bg-navy-mid/80">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4" data-stagger>
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-serif text-3xl text-gold sm:text-4xl">{item.value}</p>
            <p className="mt-1 text-sm text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
