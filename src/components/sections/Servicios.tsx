import { Banknote, Smartphone, Printer, Headphones } from "lucide-react";

const servicios = [
  {
    icon: Banknote,
    title: "Envío de dinero",
    description:
      "Transfiere dinero a cualquier parte del mundo de forma rápida, segura y con las mejores tasas del mercado. Trabajamos con las principales plataformas internacionales.",
    highlight: "Western Union · Ria · MoneyGram · Europhil",
    back: {
      title: "Plataformas disponibles",
      items: [
        "Western Union",
        "Ria Money Transfer",
        "MoneyGram",
        "Europhil",
        "I-Transfer",
      ],
    },
  },
  {
    icon: Smartphone,
    title: "Recargas de móvil",
    description:
      "Recarga el móvil de tus familiares en cualquier país del mundo al instante. Cobertura en más de 150 operadoras internacionales.",
    highlight: "Recarga internacional al instante",
    back: {
      title: "Operadores disponibles",
      items: [
        "Movistar",
        "Vodafone",
        "Orange",
        "MásMóvil",
        "Yoigo",
        "Lebara",
        "Lycamobile",
        "Digi",
      ],
      footer: "Recargas nacionales e internacionales",
    },
  },
  {
    icon: Printer,
    title: "Impresiones y fotocopias",
    description:
      "Servicio completo de impresión en color y blanco y negro, fotocopias y escaneo de documentos. Rápido y económico.",
    highlight: "Color · B/N · Escaneo",
    back: {
      title: "Nuestros servicios de impresión",
      items: [
        "Impresión color",
        "Impresión B/N",
        "Fotocopia B/N",
        "Escáner de documentos",
      ],
    },
  },
  {
    icon: Headphones,
    title: "Accesorios tecnológicos y móviles",
    description:
      "Venta de móviles, auriculares, cargadores, fundas, cables y otros accesorios tecnológicos a precios competitivos.",
    highlight: "Móviles · Fundas · Cargadores · Auriculares · Cables",
    back: {
      title: "Lo que encontrarás",
      items: [
        "Power Banks",
        "Auriculares",
        "Fundas",
        "Teléfonos móviles",
        "Cargadores",
        "Cables",
      ],
    },
  },
];

const CARD_HEIGHT = 300;

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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <div
                key={servicio.title}
                className="group"
                style={{ perspective: "1000px", height: `${CARD_HEIGHT}px` }}
              >
                {/* Flip container */}
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "rotateY(180deg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "rotateY(0deg)";
                  }}
                >
                  {/* Front face */}
                  <div
                    className="card-dark p-6 absolute inset-0 flex flex-col overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-12 h-12 bg-[#00D4AA]/10 rounded-xl flex items-center justify-center mb-4 shrink-0">
                      <Icon className="w-6 h-6 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 shrink-0">
                      {servicio.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 overflow-hidden">
                      {servicio.description}
                    </p>
                    <div className="text-xs text-[#00D4AA] font-medium border-t border-[#1a3050] pt-3 mt-auto shrink-0">
                      {servicio.highlight}
                    </div>
                  </div>

                  {/* Back face */}
                  <div
                    className="card-dark border-[#00D4AA]/40 p-6 absolute inset-0 flex flex-col overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="w-12 h-12 bg-[#00D4AA]/20 rounded-xl flex items-center justify-center mb-3 shrink-0">
                      <Icon className="w-6 h-6 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-xs font-bold text-[#00D4AA] uppercase tracking-wider mb-3 shrink-0">
                      {servicio.back.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 overflow-hidden">
                      {servicio.back.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium text-white bg-[#00D4AA]/10 border border-[#00D4AA]/20 px-2.5 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {"footer" in servicio.back && servicio.back.footer && (
                      <p className="text-xs text-[#64748B] border-t border-[#1a3050] pt-3 mt-auto shrink-0">
                        {servicio.back.footer}
                      </p>
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
