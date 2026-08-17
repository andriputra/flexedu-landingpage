export const site = {
  name: "FlexEdu",
  tagline: "EdTech Platform for Schools",
  whatsapp: "6281234567890",
  email: "halo@flexedu.id",
  instagram: "https://instagram.com/flexedu",
};

export const waLink = (message) => {
  const text = encodeURIComponent(
    message ||
      "Halo FlexEdu, saya tertarik mengadopsi platform EdTech kehadiran siswa untuk smart school kami."
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
};
