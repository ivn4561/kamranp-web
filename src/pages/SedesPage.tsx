import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Sedes from "@/components/sections/Sedes";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function SedesPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navbar />

      {/* Page header */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-[#0A1628] relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#00D4AA]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4AA] text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          {/* Heading */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#00D4AA]" />
            </div>
            <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
              Encuéntranos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Nuestras Sedes<br />
            <span className="text-[#00D4AA]">en Madrid</span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Estamos en 4 puntos estratégicos de Madrid. Visítanos, llámanos o escríbenos — siempre hay una sede KAMRANP cerca de ti.
          </p>
        </div>
      </section>

      {/* Sedes cards — reuses the existing section component */}
      <Sedes hideHeader />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
