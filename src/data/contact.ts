export const contactDetails = {
  owner: "Piraveena Sivatharsan",
  email: "deutschwithme5@gmail.com",
  phone: "+94721413969",
  address: "Manipay, Jaffna, Sri Lanka",
} as const;

export const whatsappUrl = `https://wa.me/${contactDetails.phone.replace(/\D/g, "")}`;
