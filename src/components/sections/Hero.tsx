import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] pt-16 md:pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D4AA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <Link to="/sedes">
          <span className="inline-flex items-center gap-2 bg-[#00D4AA]/10 border border-[#00D4AA]/30 text-[#00D4AA] text-sm font-medium px-4 py-2 rounded-full mb-8 hover:bg-[#00D4AA]/20 hover:border-[#00D4AA]/50 transition-colors">
            <Globe className="w-4 h-4" />
            4 sedes en Madrid
          </span>
        </Link>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Tu locutorio
          <br />
          <span className="text-[#00D4AA]">de confianza</span>
          <br />
          en Madrid
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl text-[#94A3B8] font-light mb-4 tracking-wide">
          Conectamos tu mundo
        </p>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mb-12 leading-relaxed">
          Envío de dinero internacional, recargas de móvil, impresiones y venta
          de accesorios tecnológicos. Todo lo que necesitas, cerca de ti.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contacto">
            <Button
              size="lg"
              className="text-base px-8 py-4 h-auto shadow-2xl shadow-teal-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </Button>
          </Link>
          <Link to="/sedes">
            <Button variant="outline" size="lg" className="text-base px-8 py-4 h-auto">
              Ver nuestras sedes
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "4", label: "Sedes en Madrid" },
            { value: "4+", label: "Plataformas de envío" },
            { value: "10+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#00D4AA]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#00D4AA]/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-bounce" />
      </div>
    </section>
  );
}
