import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  function scrollToContact() {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 group"
      title="Ver contacto"
      aria-label="Ver sedes y contacto"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-[#00D4AA] rounded-full animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#00D4AA] hover:bg-[#00B891] rounded-full flex items-center justify-center shadow-xl shadow-teal-900/40 transition-all duration-200 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-[#0A1628]" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-[#0F2040] border border-[#1a3050] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Contáctanos!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1a3050]" />
      </div>
    </button>
  );
}
