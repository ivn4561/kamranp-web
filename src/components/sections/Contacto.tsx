import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  const whatsappUrl = "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.";

  return (
    <section id="contacto" className="section-padding bg-[#070707]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[#E8832A] text-sm font-semibold tracking-widest uppercase">
              Hablemos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Contacta con nosotros
            </h2>
            <p className="text-[#666] text-lg max-w-xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-[#E8832A]/10 to-[#E8832A]/5 border border-[#E8832A]/20 rounded-2xl p-8 sm:p-12 text-center mb-8">
            <div className="w-20 h-20 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Escríbenos por WhatsApp
            </h3>
            <p className="text-[#777] mb-8 max-w-md mx-auto">
              La forma más rápida de contactarnos. Te atendemos en español, árabe, inglés y más idiomas.
            </p>
            <Button
              size="lg"
              className="text-base px-10 py-4 h-auto bg-[#25D366] hover:bg-[#1DAA55] shadow-2xl shadow-green-900/30 text-white"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </Button>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Clock,
                title: "Horario",
                info: "Lun–Sáb: 9:00–21:00\nDom: 10:00–20:00",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@kamranp.es",
              },
              {
                icon: MapPin,
                title: "Ubicaciones",
                info: "4 sedes en Madrid",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-dark p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#E8832A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#E8832A]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {item.title}
                    </div>
                    <div className="text-[#666] text-sm mt-0.5 whitespace-pre-line">
                      {item.info}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
