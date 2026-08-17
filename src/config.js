export const site = {
  name: "FlexEdu",
  tagline: "Absensi Sekolah Digital",
  /** Ganti ke domain live di cPanel, tanpa slash di akhir. Contoh: https://flexedu.sekolahanda.sch.id */
  url: "https://flexedu.id",
  email: "halo@flexedu.id",
  instagram: "https://instagram.com/flexedu",
  demo: "https://flexedu-attend.vercel.app/login",
};

export const contacts = [
  { id: "wa1", name: "Admin 1", phone: "625795580512" },
  { id: "wa2", name: "Admin 2", phone: "6285890136099" },
  { id: "wa3", name: "Admin 3", phone: "62895410212657" },
];

export const defaultWaMessage =
  "Halo FlexEdu, saya tertarik mengadopsi platform EdTech kehadiran siswa untuk smart school kami.";

export const waLink = (phone, message) => {
  const text = encodeURIComponent(message || defaultWaMessage);
  return `https://wa.me/${phone}?text=${text}`;
};

export const formatPhone = (phone) => `+${phone}`;
