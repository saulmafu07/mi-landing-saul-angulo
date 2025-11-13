"use client";
import FadeIn from "../../components/FadeIn";

export default function Projects() {
  const proyectos = [
    {
      nombre: "Gestión de Cotización y Liquidación Turística",
      descripcion:
        "App web para agencias de turismo en Perú que automatiza cotizaciones, liquidaciones e impuestos con módulos contables, clientes y proveedores.",
      tecnologias: ["Next.js", "Node.js", "SQL Server", "Tailwind", "Prisma"],
      imagen: "/projects/turismo.jpeg",
    },
    {
      nombre: "SAFA – Centralización de Fiestas y Eventos",
      descripcion:
        "Plataforma que centraliza eventos en Perú con scraping (Joinnus, Passline, Teleticket) y consultas API en tiempo real.",
      tecnologias: ["React", "Next.js", "Python", "Playwright", "Tailwind"],
      imagen: "/projects/safa.jpeg",
    },
    {
      nombre: "Script TAM – Tarjetas Andinas",
      descripcion:
        "Script en Python que organiza PDFs de tarjetas andinas con PDFPlumber y exporta datos masivos a Excel.",
      tecnologias: ["Python", "PDFPlumber", "Pandas", "Excel"],
      imagen: "/projects/tams.png",
    },
    {
      nombre: "Script PDT SUNAT",
      descripcion:
        "Lectura automatizada de formularios PDT de SUNAT y exportación masiva a Excel.",
      tecnologias: ["Python", "PDFPlumber", "OpenPyXL", "Pandas"],
      imagen: "/projects/pdt.png",
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Proyectos Destacados
      </h2>

      <div className="flex flex-col items-center gap-20">
        {proyectos.map((p, i) => (
          <FadeIn key={p.nombre} delay={0.1 * (i + 1)}>
            <div
              className={`
                flex flex-col md:flex-row items-center gap-10 
                w-full md:w-[85%] lg:w-[75%] 
                mx-auto                      /* 🔥 SIEMPRE CENTRADO */
                ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* 🖼 IMAGEN (Glass) */}
            <div
  className="relative w-full md:w-[45%] rounded-3xl overflow-hidden
    bg-neutral-900/40 border border-white/10 backdrop-blur-md
    shadow-[0_0_20px_rgba(0,140,255,0.1)]
    hover:shadow-[0_0_35px_rgba(0,140,255,0.25)]
    transition-all duration-500 aspect-video"
>
  <div className="absolute top-0 left-0 right-0 mx-auto w-28 h-[3px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full" />

  {/* Imagen con estilo más dark + neon */}
  <img
    src={p.imagen}
    alt={p.nombre}
    className="
      object-cover w-full h-full
      opacity-85 hover:opacity-100
      transition duration-500
      contrast-125 brightness-[0.85] saturate-125
      hover:brightness-100 hover:saturate-150
    "
  />

  {/* Overlay neon para unificar estilo */}
  <div className="absolute inset-0 bg-gradient-to-br 
    from-black/40 via-purple-500/10 to-sky-500/10 
    mix-blend-soft-light pointer-events-none"></div>
</div>

              {/* 📄 DESCRIPCIÓN */}
              <div
                className="w-full md:w-[55%] rounded-3xl p-8 
                bg-neutral-900/40 border border-white/10 backdrop-blur-md
                shadow-[0_0_20px_rgba(0,140,255,0.15)]
                hover:shadow-[0_0_35px_rgba(0,140,255,0.28)]
                transition-all duration-500"
              >
                <div className="mx-auto mb-4 w-24 h-[3px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full" />

                <h3 className="text-2xl font-semibold mb-3">{p.nombre}</h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                  {p.descripcion}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tecnologias.map((t) => (
                    <span
                      key={t}
                      className="bg-sky-700/20 text-sky-300 px-3 py-1 rounded-full text-xs font-medium border border-sky-600/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

