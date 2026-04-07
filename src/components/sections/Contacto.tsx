import { Link } from "react-router-dom";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  return (
    <section id="contacto" className="section-padding bg-[#061020]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
              Hablemos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Contacta con nosotros
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-[#00D4AA]/10 to-[#00D4AA]/5 border border-[#00D4AA]/20 rounded-2xl p-8 sm:p-12 text-center mb-8">
            <div className="w-20 h-20 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#00D4AA]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Escríbenos por WhatsApp
            </h3>
            <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
              La forma más rápida de contactarnos. Te atendemos en español, árabe, inglés y más idiomas.
            </p>
            <Link to="/contacto">
              <Button
                size="lg"
                className="text-base px-10 py-4 h-auto shadow-2xl shadow-teal-900/30"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </Button>
            </Link>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Clock,
                title: "Horario",
                info: "Lun–Sáb: 10:00–22:00\nDom: 10:00–22:00",
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
                  <div className="w-10 h-10 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#00D4AA]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {item.title}
                    </div>
                    <div className="text-[#94A3B8] text-sm mt-0.5 whitespace-pre-line">
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
