import { Star } from "lucide-react";

const resenas = [
  {
    nombre: "Fifi",
    badge: "Local Guide",
    estrellas: 5,
    tiempo: "Hace 6 meses",
    sede: "KAMRANP Argüelles",
    texto:
      "Mi punto de recogida de confianza, siempre tiene mis paquetes, muy amable y un buen servicio en general.",
  },
  {
    nombre: "Patri Leyla",
    badge: "Local Guide",
    estrellas: 5,
    tiempo: "Hace 7 meses",
    sede: "KAMRANP Argüelles",
    texto:
      "Vendedor muy amable, trata muy bien a los clientes y es rápido con sus tareas. Siempre envío los paquetes allí y la atención es excelente.",
  },
  {
    nombre: "Mafer Rincon",
    badge: "Local Guide",
    estrellas: 5,
    tiempo: "Hace 2 años",
    sede: "KAMRANP Argüelles",
    texto:
      "El sitio es pequeño, el señor trabaja rápido. Siempre que envío o necesito recibir paquetes inpost lo hago aquí.",
  },
  {
    nombre: "Abdul Wahab",
    badge: null,
    estrellas: 5,
    tiempo: "Hace 7 meses",
    sede: "KAMRANP Campamento",
    texto:
      "Muy buen sitio para enviar dinero, buena atención al cliente, excelente servicio.",
  },
  {
    nombre: "Caroll Lisset FerRe",
    badge: null,
    estrellas: 5,
    tiempo: "Hace 4 días",
    sede: "KAMRANP Campamento",
    texto:
      "Muy buen lugar para hacer envíos. El joven es amable y tiene mucha disponibilidad para ayudar en cuanto a documentación. El respeto y la amabilidad hacia un cliente es prioridad en un negocio.",
  },
];

// Per-card lg grid placement:
// 6-col grid, each card spans 2. Cards 0-2 fill cols 1-6.
// Cards 3-4 at col-start 2 and 4 → centered.
const lgColClass = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2 lg:col-start-2",
  "lg:col-span-2 lg:col-start-4",
];

export default function Resenas() {
  return (
    <section className="section-padding bg-[#0A1628]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Reseñas de Google
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5" fill="#FBBF24" stroke="#FBBF24" />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-medium">5.0 en Google Maps</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {resenas.map((r, i) => (
            <div
              key={i}
              className={`bg-[#0F2040] border border-[#1a3050] rounded-xl p-6 flex flex-col ${lgColClass[i]}`}
            >
              {/* Top row: avatar + meta + Google G */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-[#00D4AA]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#00D4AA] font-semibold text-lg leading-none">
                      {r.nombre.charAt(0)}
                    </span>
                  </div>
                  {/* Name + badge + sede */}
                  <div>
                    <div className="flex items-center flex-wrap gap-1">
                      <span className="text-white font-semibold text-sm">{r.nombre}</span>
                      {r.badge && (
                        <span className="bg-[#132035] text-[10px] text-gray-400 rounded-full px-2 py-0.5">
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#00D4AA] mt-0.5">{r.sede}</div>
                  </div>
                </div>
                {/* Google wordmark */}
                <span className="text-[10px] font-bold shrink-0 mt-0.5">
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </span>
              </div>

              {/* Stars + time */}
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.estrellas }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5" fill="#FBBF24" stroke="#FBBF24" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{r.tiempo}</span>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-300 leading-relaxed mt-3">{r.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
