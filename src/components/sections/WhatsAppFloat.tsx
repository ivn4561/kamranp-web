import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      title="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1DAA55] rounded-full flex items-center justify-center shadow-xl shadow-green-900/40 transition-all duration-200 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-[#111] border border-[#222] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#222]" />
      </div>
    </a>
  );
}
