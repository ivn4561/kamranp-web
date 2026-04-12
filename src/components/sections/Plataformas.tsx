import { ShieldCheck, Zap, Globe } from "lucide-react";

const plataformas = [
  {
    name: "Western Union",
    abbr: "WU",
    color: "#FFD700",
    description: "Presente en más de 200 países",
    detail: "Recogida en minutos o depósito en cuenta bancaria.",
    bgColor: "#0F2040",
    borderColor: "#FFD70030",
  },
  {
    name: "Ria Money Transfer",
    abbr: "RIA",
    color: "#F97316",
    description: "Envíos a más de 160 países",
    detail: "Tarifas competitivas y entrega express disponible.",
    bgColor: "#0F2040",
    borderColor: "#F9731630",
  },
  {
    name: "MoneyGram",
    abbr: "MG",
    color: "#4A90D9",
    description: "Cobertura global segura",
    detail: "Envía a cuenta bancaria, wallet móvil o recogida en efectivo.",
    bgColor: "#0F2040",
    borderColor: "#4A90D930",
  },
  {
    name: "Europhil",
    abbr: "EP",
    color: "#7FBA00",
    description: "Especialistas en Filipinas y Asia",
    detail: "Servicio rápido con atención personalizada.",
    bgColor: "#0F2040",
    borderColor: "#7FBA0030",
  },
  {
    name: "I-Transfer",
    abbr: "IT",
    color: "#00D4AA",
    description: "Tarifas competitivas",
    detail: "Transferencias directas a cuenta bancaria en destino.",
    bgColor: "#0F2040",
    borderColor: "#00D4AA30",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Seguro",
    desc: "Todas las transacciones están verificadas y aseguradas.",
  },
  {
    icon: Zap,
    title: "Transferencia rápida",
    desc: "El dinero llega en minutos en la mayoría de destinos.",
  },
  {
    icon: Globe,
    title: "Cobertura global",
    desc: "Enviamos a más de 200 países en todo el mundo.",
  },
];

export default function Plataformas() {
  return (
    <section id="plataformas" className="section-padding bg-[#061020]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
            Envío de dinero
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Plataformas de envío
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Trabajamos con las empresas líderes en transferencias internacionales
            para ofrecerte la mejor tarifa y el mejor servicio.
          </p>
        </div>

        {/* Platform flip cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {plataformas.map((p) => (
            <div
              key={p.name}
              className="group h-64 md:h-72 [perspective:1000px]"
            >
              {/* Flip inner */}
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front face */}
                <div
                  className="absolute inset-0 rounded-xl border p-6 flex flex-col items-center text-center overflow-hidden [backface-visibility:hidden]"
                  style={{ backgroundColor: p.bgColor, borderColor: p.borderColor }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm mb-3 shrink-0"
                    style={{ backgroundColor: p.color + "20", color: p.color }}
                  >
                    {p.abbr}
                  </div>
                  <h3 className="font-bold text-sm mb-1.5 shrink-0 leading-tight" style={{ color: p.color }}>
                    {p.name}
                  </h3>
                  <p className="text-[#94A3B8] text-xs leading-snug">
                    {p.description}
                  </p>
                  <p className="text-[#64748B] text-xs leading-snug mt-1.5">
                    {p.detail}
                  </p>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 rounded-xl border p-5 flex flex-col overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ backgroundColor: p.bgColor, borderColor: p.color + "60" }}
                >
                  {/* Back header */}
                  <div className="flex items-center gap-2 mb-4 shrink-0">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0"
                      style={{ backgroundColor: p.color + "20", color: p.color }}
                    >
                      {p.abbr}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: p.color }}>
                      ¿Qué necesitas?
                    </span>
                  </div>

                  {/* ENVIAR section */}
                  <div className="mb-3">
                    <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Para enviar
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-xs mt-0.5" style={{ color: p.color }}>•</span>
                        <span className="text-white text-xs">Pasaporte o DNI <span className="text-[#64748B]">(obligatorio)</span></span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-xs mt-0.5" style={{ color: p.color }}>•</span>
                        <span className="text-white text-xs">Permiso de residencia o NIE</span>
                      </li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="border-t mb-3" style={{ borderColor: p.color + "30" }} />

                  {/* RECIBIR section */}
                  <div>
                    <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Para recibir
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-xs mt-0.5" style={{ color: p.color }}>•</span>
                        <span className="text-white text-xs">Mismos documentos en físico <span className="text-[#64748B]">(obligatorio)</span></span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 bg-[#0F2040] border border-[#1a3050] rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#00D4AA]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{f.title}</div>
                  <div className="text-[#94A3B8] text-sm mt-0.5">{f.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
