import { Banknote, Smartphone, Printer, Headphones } from "lucide-react";

const servicios = [
  {
    icon: Banknote,
    title: "Envío de dinero",
    description:
      "Transfiere dinero a cualquier parte del mundo de forma rápida, segura y con las mejores tasas del mercado. Trabajamos con las principales plataformas internacionales.",
    highlight: "Western Union · Ria · MoneyGram · Europhil",
  },
  {
    icon: Smartphone,
    title: "Recargas de móvil",
    description:
      "Recarga el móvil de tus familiares en cualquier país del mundo al instante. Cobertura en más de 150 operadoras internacionales.",
    highlight: "Recarga internacional al instante",
  },
  {
    icon: Printer,
    title: "Impresiones y fotocopias",
    description:
      "Servicio completo de impresión en color y blanco y negro, fotocopias, escaneo de documentos y plastificado. Rápido y económico.",
    highlight: "Color · B/N · Escaneo · Plastificado",
  },
  {
    icon: Headphones,
    title: "Accesorios tecnológicos",
    description:
      "Venta de auriculares, cargadores, fundas para móvil, cables y otros accesorios tecnológicos a precios competitivos.",
    highlight: "Fundas · Cargadores · Auriculares · Cables",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-padding bg-[#0A0A0A]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E8832A] text-sm font-semibold tracking-widest uppercase">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Todo lo que necesitas en un solo lugar. Rápido, seguro y a precios justos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, i) => {
            const Icon = servicio.icon;
            return (
              <div
                key={servicio.title}
                className="card-dark p-6 group hover:border-[#E8832A]/40 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#E8832A]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E8832A]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#E8832A]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {servicio.title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed mb-4">
                  {servicio.description}
                </p>

                {/* Highlight tag */}
                <div className="text-xs text-[#E8832A] font-medium border-t border-[#1E1E1E] pt-4">
                  {servicio.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
