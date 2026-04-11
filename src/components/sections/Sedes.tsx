import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { locations, mainPhone } from "@/data/locations";

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
          {locations.map((sede, i) => (
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
                    {sede.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mt-1">{sede.address}</p>
                  <p className="text-[#64748B] text-xs">{sede.city}</p>
                </div>
              </div>

              {sede.complete ? (
                <>
                  {/* Details */}
                  <div className="flex flex-col gap-2.5 text-sm border-t border-[#1a3050] pt-4">
                    <div className="flex items-start gap-2.5 text-[#94A3B8]">
                      <Clock className="w-4 h-4 text-[#00D4AA] shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">
                        Lun–Sáb: {sede.hours.weekday}
                        <br />
                        Dom: {sede.hours.sunday}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#94A3B8]">
                      <Phone className="w-4 h-4 text-[#00D4AA] shrink-0" />
                      <span className="text-xs">{sede.phone}</span>
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
                    href={sede.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#00D4AA] hover:bg-[#00B891] text-[#0A1628] text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200 mt-1"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                  </a>
                </>
              ) : (
                <>
                  {/* Próximamente banner */}
                  <div className="border-t border-[#1a3050] pt-4 flex flex-col gap-3">
                    <div className="bg-[#00D4AA]/5 border border-[#00D4AA]/20 rounded-lg px-4 py-3 text-center">
                      <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-wider mb-0.5">
                        Próximamente
                      </p>
                      <p className="text-[#64748B] text-xs">
                        Próximamente más información
                      </p>
                    </div>
                    <a
                      href={`tel:${mainPhone}`}
                      className="flex items-center justify-center gap-2 w-full border border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-[#0A1628] text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      Llámanos
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
