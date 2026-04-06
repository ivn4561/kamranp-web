import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

const sedes = [
  {
    id: 1,
    nombre: "KAMRANP Campamento",
    direccion: "Plaza de Andrés Soloaga, 1",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 10:00–22:00  |  Dom: 10:00–22:00",
    telefono: "+34 672 818 465",
    email: "kamranp762@gmail.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Plaza+de+Andr%C3%A9s+Soloaga+1+Madrid",
  },
  {
    id: 2,
    nombre: "KAMRANP Argüelles",
    direccion: "Calle Rodríguez San Pedro, 31",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 10:00–22:00  |  Dom: 10:00–22:00",
    telefono: "+34 675 030 620",
    email: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+Rodr%C3%ADguez+San+Pedro+31+Madrid",
  },
  {
    id: 3,
    nombre: "KAMRANP Parque Vosa",
    direccion: "Calle Parque Vosa, 35",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 10:00–22:00  |  Dom: 10:00–22:00",
    telefono: "Próximamente",
    email: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+Parque+Vosa+35+Madrid",
  },
  {
    id: 4,
    nombre: "KAMRANP Zaratán",
    direccion: "Calle de Zaratán, 5",
    ciudad: "Madrid",
    horario: "Lun–Sáb: 10:00–22:00  |  Dom: 10:00–22:00",
    telefono: "Próximamente",
    email: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+de+Zarat%C3%A1n+5+Madrid",
  },
];

export default function Sedes({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="sedes" className="section-padding bg-[#0A1628]">
      <div className="container-max">
        {/* Header — hidden when rendered inside SedesPage (which has its own heading) */}
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
              Encuéntranos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Nuestras sedes
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Estamos en 4 puntos estratégicos de Madrid para que siempre tengas
              una sede KAMRANP cerca de ti.
            </p>
          </div>
        )}

        {/* Sedes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {sedes.map((sede, i) => (
            <div
              key={sede.id}
              className="card-dark p-6 flex flex-col gap-4 hover:border-[#00D4AA]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Number badge */}
              <div className="w-9 h-9 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] font-black text-sm group-hover:bg-[#00D4AA]/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Name + address */}
              <div className="flex items-start gap-3 flex-1">
                <MapPin className="w-5 h-5 text-[#00D4AA] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">
                    {sede.nombre}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mt-1">{sede.direccion}</p>
                  <p className="text-[#64748B] text-xs">{sede.ciudad}</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-2.5 text-sm border-t border-[#1a3050] pt-4">
                <div className="flex items-start gap-2.5 text-[#94A3B8]">
                  <Clock className="w-4 h-4 text-[#00D4AA] shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line leading-relaxed text-xs">
                    {sede.horario}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-[#94A3B8]">
                  <Phone className="w-4 h-4 text-[#00D4AA] shrink-0" />
                  <span className="text-xs">{sede.telefono}</span>
                </div>
                {sede.email && (
                  <div className="flex items-center gap-2.5 text-[#94A3B8]">
                    <Mail className="w-4 h-4 text-[#00D4AA] shrink-0" />
                    <a
                      href={`mailto:${sede.email}`}
                      className="text-xs hover:text-[#00D4AA] transition-colors"
                    >
                      {sede.email}
                    </a>
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href={sede.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#00D4AA] hover:bg-[#00B891] text-[#0A1628] text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200 mt-1"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
