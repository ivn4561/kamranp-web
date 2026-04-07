import { MapPin, MessageCircle } from "lucide-react";

const servicios = [
  "Envío de dinero",
  "Recargas de móvil",
  "Impresiones y fotocopias",
  "Accesorios tecnológicos",
];

const plataformas = ["Western Union", "Ria Money Transfer", "MoneyGram", "Europhil"];

const sedes = [
  "Calle Rodríguez San Pedro, 31 · Madrid",
  "Calle Parque Vosa, 35 · Madrid",
  "Plaza de Andrés Soloaga, 1 · Madrid",
  "Calle de Zaratán, 5 · Madrid",
];

const scrollTo = (id: string) => {
  if (window.location.pathname !== "/") {
    window.location.href = "/#" + id;
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const goTo = (path: string) => {
  window.location.href = path;
};

const linkClass =
  "text-[#64748B] text-sm hover:text-[#00D4AA] transition-colors cursor-pointer text-left";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061020] border-t border-[#1a3050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 cursor-pointer" onClick={() => goTo("/")}>
              <img src="/logo-kamranp.svg" alt="KAMRANP" className="h-7 w-auto" />
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Tu locutorio de confianza en Madrid. Conectamos tu mundo con los mejores servicios de transferencia y comunicación.
            </p>
            <p className="text-[#00D4AA] text-sm font-medium italic">
              "Conectamos tu mundo"
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {servicios.map((s) => (
                <li key={s}>
                  <button className={linkClass} onClick={() => scrollTo("servicios")}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plataformas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Plataformas de envío
            </h4>
            <ul className="space-y-2.5">
              {plataformas.map((p) => (
                <li key={p}>
                  <button className={linkClass} onClick={() => scrollTo("plataformas")}>
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Nuestras sedes
            </h4>
            <ul className="space-y-3">
              {sedes.map((sede) => (
                <li key={sede}>
                  <button
                    className={`flex items-start gap-2 ${linkClass}`}
                    onClick={() => goTo("/sedes")}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#00D4AA] shrink-0 mt-0.5" />
                    {sede}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a3050] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © {currentYear} KAMRANP. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@kamranp.es"
              className="text-[#475569] hover:text-[#00D4AA] text-sm transition-colors"
            >
              info@kamranp.es
            </a>
            <button
              className="flex items-center gap-1.5 text-[#00D4AA] hover:text-[#33DDBB] text-sm font-medium transition-colors cursor-pointer"
              onClick={() => goTo("/contacto")}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
