import { Banknote, Smartphone, Printer, Headphones } from "lucide-react";

const servicios = [
  {
    icon: Banknote,
    title: "Envío de dinero",
    description: "Rápido, seguro y con las mejores tasas. Western Union, Ria, MoneyGram, Europhil.",
    highlight: "Western Union · Ria · MoneyGram · Europhil",
    frontBadges: undefined as string[] | undefined,
    back: {
      title: "Plataformas disponibles",
      items: ["Western Union", "Ria Money Transfer", "MoneyGram", "Europhil", "I-Transfer"],
      subtitle: undefined as string | undefined,
      regiones: undefined as string[] | undefined,
    },
  },
  {
    icon: Smartphone,
    title: "Recargas de móvil",
    description: "Todos los operadores españoles e internacionales al instante.",
    highlight: "Recarga nacional al instante",
    frontBadges: ["Movistar", "Vodafone", "Orange", "MásMóvil", "Yoigo", "Lebara", "Lycamobile", "Digi"],
    back: {
      title: "Recargas internacionales",
      subtitle: "Vía Disashop · +160 países",
      regiones: ["Latinoamérica", "África", "Asia", "Europa"],
      items: ["Cubacel", "Claro", "Tigo", "Orange", "Maroc Telecom", "MTN", "Africell", "Entel"],
    },
  },
  {
    icon: Printer,
    title: "Impresiones y fotocopias",
    description: "Color, B/N, fotocopias y escáner. Rápido y económico.",
    highlight: "Color · B/N · Escaneo",
    frontBadges: undefined as string[] | undefined,
    back: {
      title: "Nuestros servicios de impresión",
      items: ["Impresión color", "Impresión B/N", "Fotocopia B/N", "Escáner de documentos"],
      subtitle: undefined as string | undefined,
      regiones: undefined as string[] | undefined,
    },
  },
  {
    icon: Headphones,
    title: "Accesorios tecnológicos y móviles",
    description: "Móviles, fundas, cargadores, auriculares y cables.",
    highlight: "Móviles · Fundas · Cargadores · Auriculares · Cables",
    frontBadges: undefined as string[] | undefined,
    back: {
      title: "Lo que encontrarás",
      items: ["Power Banks", "Auriculares", "Fundas", "Teléfonos móviles", "Cargadores", "Cables"],
      subtitle: undefined as string | undefined,
      regiones: undefined as string[] | undefined,
    },
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-padding bg-[#0A1628]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas en un solo lugar. Rápido, seguro y a precios justos.
          </p>
        </div>

        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              /* CSS-only flip wrapper using Tailwind group + arbitrary values */
              <div
                key={servicio.title}
                className="group h-64 md:h-72 [perspective:1000px]"
              >
                {/* Flip inner */}
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* ── FRONT FACE ── */}
                  <div className="card-dark p-4 sm:p-5 absolute inset-0 flex flex-col overflow-hidden [backface-visibility:hidden]">
                    <div className="w-10 h-10 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center mb-3 shrink-0">
                      <Icon className="w-5 h-5 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-2 shrink-0 leading-tight">
                      {servicio.title}
                    </h3>
                    <p className="text-[#94A3B8] text-xs leading-snug mb-3 overflow-hidden">
                      {servicio.description}
                    </p>

                    {servicio.frontBadges ? (
                      /* Recargas: show national operator badges */
                      <div className="border-t border-[#1a3050] pt-3 mt-auto">
                        <div className="flex flex-wrap gap-1 overflow-hidden">
                          {servicio.frontBadges.map((badge) => (
                            <span
                              key={badge}
                              className="text-[10px] font-medium text-white bg-[#00D4AA]/10 border border-[#00D4AA]/20 px-1.5 py-0.5 rounded-full"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-[#00D4AA] font-medium mt-2">
                          {servicio.highlight}
                        </p>
                      </div>
                    ) : (
                      /* Other cards: show highlight text */
                      <div className="text-xs text-[#00D4AA] font-medium border-t border-[#1a3050] pt-3 mt-auto shrink-0 leading-snug">
                        {servicio.highlight}
                      </div>
                    )}
                  </div>

                  {/* ── BACK FACE ── */}
                  <div className="card-dark border-[#00D4AA]/40 p-4 sm:p-5 absolute inset-0 flex flex-col overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="w-10 h-10 bg-[#00D4AA]/20 rounded-xl flex items-center justify-center mb-3 shrink-0">
                      <Icon className="w-5 h-5 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-xs font-bold text-[#00D4AA] uppercase tracking-wider mb-2 shrink-0">
                      {servicio.back.title}
                    </h3>

                    {servicio.back.subtitle && (
                      <p className="text-xs text-[#64748B] mb-3 shrink-0">
                        {servicio.back.subtitle}
                      </p>
                    )}

                    {servicio.back.regiones ? (
                      /* Recargas back: regions + international operators */
                      <>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {servicio.back.regiones.map((r) => (
                            <span
                              key={r}
                              className="text-xs font-medium text-white bg-[#00D4AA]/10 border border-[#00D4AA]/20 px-2 py-0.5 rounded-full"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5 overflow-hidden">
                          {servicio.back.items.map((o) => (
                            <span
                              key={o}
                              className="text-[10px] font-medium text-[#94A3B8] bg-[#1a3050] px-2 py-0.5 rounded-full"
                            >
                              {o}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      /* Other cards back: standard item badges */
                      <div className="flex flex-wrap gap-1.5 overflow-hidden">
                        {servicio.back.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-white bg-[#00D4AA]/10 border border-[#00D4AA]/20 px-2 py-0.5 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
