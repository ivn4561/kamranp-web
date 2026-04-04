import { MessageCircle, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#E8832A 1px, transparent 1px), linear-gradient(90deg, #E8832A 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8832A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E8832A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E8832A]/10 border border-[#E8832A]/30 text-[#E8832A] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Globe className="w-4 h-4" />
          4 sedes en Madrid
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Tu locutorio
          <br />
          <span className="text-[#E8832A]">de confianza</span>
          <br />
          en Madrid
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl text-[#888] font-light mb-4 tracking-wide">
          Conectamos tu mundo
        </p>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#666] max-w-2xl mx-auto mb-12 leading-relaxed">
          Envío de dinero internacional, recargas de móvil, impresiones y venta
          de accesorios tecnológicos. Todo lo que necesitas, cerca de ti.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-base px-8 py-4 h-auto shadow-2xl shadow-orange-900/30"
            onClick={() => window.open("https://wa.me/34600000000", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-4 h-auto"
            onClick={() => scrollToSection("#sedes")}
          >
            Ver nuestras sedes
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "4", label: "Sedes en Madrid" },
            { value: "4+", label: "Plataformas de envío" },
            { value: "10+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#E8832A]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#666] mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#E8832A]/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#E8832A] animate-bounce" />
      </div>
    </section>
  );
}
