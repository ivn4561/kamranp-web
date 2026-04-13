import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Phone, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

const sedes = [
  {
    num: "01",
    name: "KAMRANP Argüelles",
    address: "Calle Rodríguez San Pedro, 31",
    phone: "+34 675 030 620",
    waNumber: "34675030620",
    googleMapsUrl: "https://maps.google.com/?q=Calle+Rodríguez+San+Pedro+31+Madrid",
    active: true,
  },
  {
    num: "02",
    name: "KAMRANP Parque Vosa",
    address: "Calle Parque Vosa, 35",
    phone: "+34 641 21 91 64",
    waNumber: "34641219164",
    googleMapsUrl: "https://maps.google.com/?q=Calle+Parque+Vosa+35+Móstoles+Madrid",
    active: true,
  },
  {
    num: "03",
    name: "KAMRANP Campamento",
    address: "Plaza de Andrés Soloaga, 1",
    phone: "+34 672 818 465",
    waNumber: "34672818465",
    googleMapsUrl: "https://maps.google.com/?q=Plaza+de+Andrés+Soloaga+1+Madrid",
    active: true,
  },
  {
    num: "04",
    name: "KAMRANP Zaratán",
    address: "Calle de Zaratán, 5",
    phone: "+34 632 14 83 60",
    waNumber: "34632148360",
    googleMapsUrl: "https://maps.google.com/?q=Calle+de+Zaratán+5+Madrid",
    active: true,
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navbar />

      {/* Page header */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-[#0A1628] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#00D4AA]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4AA] text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#00D4AA]" />
            </div>
            <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
              Hablemos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Contáctanos
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Escríbenos directamente a la sede más cercana. Te atendemos en español e inglés.
          </p>
        </div>
      </section>

      {/* Sede cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sedes.map((sede) => (
            <div
              key={sede.num}
              className={`card-dark p-6 flex flex-col gap-5 ${!sede.active ? "opacity-60" : ""}`}
            >
              {/* Sede number badge */}
              <div className="flex items-center justify-between">
                <span className="text-[#00D4AA] text-xs font-bold tracking-widest uppercase">
                  Sede {sede.num}
                </span>
                {!sede.active && (
                  <span className="text-xs font-semibold text-[#64748B] bg-[#1a3050] px-2 py-0.5 rounded-full">
                    Próximamente
                  </span>
                )}
              </div>

              {/* Name */}
              <h2 className="text-white font-black text-lg leading-tight">
                {sede.name}
              </h2>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D4AA] shrink-0 mt-0.5" />
                <span className="text-[#94A3B8] text-sm">{sede.address}</span>
              </div>

              {/* Phone */}
              {sede.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#00D4AA] shrink-0" />
                  <span className="text-[#94A3B8] text-sm">{sede.phone}</span>
                </div>
              )}

              {/* Buttons */}
              <div className="mt-auto flex flex-col gap-2">
                {sede.active && sede.waNumber ? (
                  <Button
                    className="w-full gap-2"
                    onClick={() =>
                      window.open(`https://wa.me/${sede.waNumber}`, "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                ) : (
                  <Button className="w-full" disabled variant="outline">
                    Próximamente
                  </Button>
                )}
                <a
                  href={sede.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-[#0A1628] text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
