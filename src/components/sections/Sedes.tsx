import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const sedes = [
  {
    id: 1,
    nombre: "KAMRANP Centro",
    direccion: "Calle Rodríguez San Pedro, 31",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 9:00–21:00  |  Dom: 10:00–20:00",
    telefono: "+34 600 000 001",
    mapsUrl:
      "https://www.google.com/maps/search/Calle+Rodr%C3%ADguez+San+Pedro+31+Madrid",
    color: "#E8832A",
  },
  {
    id: 2,
    nombre: "KAMRANP Parque Vosa",
    direccion: "Calle Parque Vosa, 35",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 9:00–21:00  |  Dom: 10:00–20:00",
    telefono: "+34 600 000 002",
    mapsUrl: "https://www.google.com/maps/search/Calle+Parque+Vosa+35+Madrid",
    color: "#E8832A",
  },
  {
    id: 3,
    nombre: "KAMRANP Soloaga",
    direccion: "Plaza de Andrés Soloaga, 1",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 9:00–21:00  |  Dom: 10:00–20:00",
    telefono: "+34 600 000 003",
    mapsUrl:
      "https://www.google.com/maps/search/Plaza+de+Andr%C3%A9s+Soloaga+1+Madrid",
    color: "#E8832A",
  },
  {
    id: 4,
    nombre: "KAMRANP Zaratán",
    direccion: "Calle de Zaratán, 5",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 9:00–21:00  |  Dom: 10:00–20:00",
    telefono: "+34 600 000 004",
    mapsUrl: "https://www.google.com/maps/search/Calle+de+Zarat%C3%A1n+5+Madrid",
    color: "#E8832A",
  },
];

export default function Sedes() {
  return (
    <section id="sedes" className="section-padding bg-[#0A0A0A]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E8832A] text-sm font-semibold tracking-widest uppercase">
            Encuéntranos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Nuestras sedes
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Estamos en 4 puntos estratégicos de Madrid para que siempre tengas
            una sede KAMRANP cerca de ti.
          </p>
        </div>

        {/* Sedes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {sedes.map((sede, i) => (
            <div
              key={sede.id}
              className="card-dark p-6 flex flex-col gap-4 hover:border-[#E8832A]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Number badge */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#E8832A]/10 border border-[#E8832A]/20 flex items-center justify-center text-[#E8832A] font-black text-sm group-hover:bg-[#E8832A]/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <a
                  href={sede.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444] hover:text-[#E8832A] transition-colors"
                  title="Ver en Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-white font-bold text-base mb-1">
                  {sede.nombre}
                </h3>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 text-sm flex-1">
                <div className="flex items-start gap-2.5 text-[#888]">
                  <MapPin className="w-4 h-4 text-[#E8832A] shrink-0 mt-0.5" />
                  <span>
                    {sede.direccion}
                    <br />
                    <span className="text-[#555]">{sede.ciudad}</span>
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-[#888]">
                  <Clock className="w-4 h-4 text-[#E8832A] shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line leading-relaxed">
                    {sede.horario}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-[#888]">
                  <Phone className="w-4 h-4 text-[#E8832A] shrink-0" />
                  <span>{sede.telefono}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={sede.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2"
              >
                <Button variant="secondary" size="sm" className="w-full text-xs gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Ver en Google Maps
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
