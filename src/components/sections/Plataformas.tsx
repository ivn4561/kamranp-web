import { ShieldCheck, Zap, Globe } from "lucide-react";

const plataformas = [
  {
    name: "Western Union",
    abbr: "WU",
    color: "#FFD700",
    description: "La red de transferencias más grande del mundo. Presente en más de 200 países.",
    bgColor: "#1A1600",
    borderColor: "#FFD70030",
  },
  {
    name: "Ria Money Transfer",
    abbr: "RIA",
    color: "#E8832A",
    description: "Envíos rápidos a más de 160 países con comisiones competitivas.",
    bgColor: "#1A0E00",
    borderColor: "#E8832A30",
  },
  {
    name: "MoneyGram",
    abbr: "MG",
    color: "#4A90D9",
    description: "Transferencias internacionales seguras con amplia cobertura global.",
    bgColor: "#00101A",
    borderColor: "#4A90D930",
  },
  {
    name: "Europhil",
    abbr: "EP",
    color: "#7FBA00",
    description: "Especialistas en envíos a Filipinas y el sudeste asiático con mejores tasas.",
    bgColor: "#081A00",
    borderColor: "#7FBA0030",
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
    <section id="plataformas" className="section-padding bg-[#070707]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E8832A] text-sm font-semibold tracking-widest uppercase">
            Envío de dinero
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Plataformas de envío
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Trabajamos con las empresas líderes en transferencias internacionales
            para ofrecerte la mejor tarifa y el mejor servicio.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {plataformas.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300"
              style={{
                backgroundColor: p.bgColor,
                borderColor: p.borderColor,
              }}
            >
              {/* Logo circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-lg mb-4"
                style={{ backgroundColor: p.color + "20", color: p.color }}
              >
                {p.abbr}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: p.color }}
              >
                {p.name}
              </h3>
              <p className="text-[#777] text-sm leading-relaxed">
                {p.description}
              </p>
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
                className="flex items-start gap-4 bg-[#111] border border-[#1E1E1E] rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-[#E8832A]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#E8832A]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{f.title}</div>
                  <div className="text-[#666] text-sm mt-0.5">{f.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
