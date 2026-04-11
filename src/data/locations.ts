export interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekday: string;
    sunday: string;
  };
  googleMapsUrl: string;
  complete: boolean;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "KAMRANP Campamento",
    address: "Plaza de Andrés Soloaga, 1",
    city: "Madrid",
    phone: "+34 672 818 465",
    whatsapp: "34672818465",
    email: "kamranp762@gmail.com",
    hours: {
      weekday: "10:00–22:00",
      sunday: "10:00–22:00",
    },
    googleMapsUrl: "https://maps.google.com/?q=Plaza+de+Andrés+Soloaga+1+Madrid",
    complete: true,
  },
  {
    id: 2,
    name: "KAMRANP Argüelles",
    address: "Calle Rodríguez San Pedro, 31",
    city: "Madrid",
    phone: "+34 675 030 620",
    whatsapp: "34675030620",
    email: "",
    hours: {
      weekday: "10:00–22:00",
      sunday: "10:00–22:00",
    },
    googleMapsUrl: "https://maps.google.com/?q=Calle+Rodríguez+San+Pedro+31+Madrid",
    complete: true,
  },
  {
    id: 3,
    name: "KAMRANP Parque Vosa",
    address: "Calle Parque Vosa, 35",
    city: "Madrid",
    phone: "",
    whatsapp: "",
    email: "",
    hours: { weekday: "", sunday: "" },
    googleMapsUrl: "https://maps.google.com/?q=Calle+Parque+Vosa+35+Madrid",
    complete: false,
  },
  {
    id: 4,
    name: "KAMRANP Zaratán",
    address: "Calle de Zaratán, 5",
    city: "Madrid",
    phone: "",
    whatsapp: "",
    email: "",
    hours: { weekday: "", sunday: "" },
    googleMapsUrl: "https://maps.google.com/?q=Calle+de+Zaratán+5+Madrid",
    complete: false,
  },
];

/** Phone number of the main sede (Campamento) for fallback contact */
export const mainPhone = locations[0].phone;
export const mainWhatsapp = locations[0].whatsapp;
