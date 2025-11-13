"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const jobs = [
    {
      cargo: "Desarrollador FullStack",
      empresa: "Pacífico Consultores Empresariales S.A.C.",
      periodo: "2025",
      desc: "Desarrollo desde cero de una plataforma integral de cotización y liquidaciones para empresas turísticas en Perú y automatización de procesos internos.",
    },
    {
      cargo: "CEO - Scraping Engineer – Centralización de eventos y FullStack",
      empresa: "SAFA / Plataforma de fiestas y eventos",
      periodo: "2024",
      desc: "Web Scraping con Selenium y BeautifulSoup, APIs scraping y centralización de eventos (Joinnus, Passline y más). Integración API y BD.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">
        Experiencia Laboral
      </h2>

      <div className="max-w-4xl mx-auto space-y-16 relative">

        {/* Línea vertical con efecto neon */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 
          w-[3px] bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 opacity-40 rounded-full" />

        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6 p-8 md:p-10 
              rounded-3xl bg-neutral-900/40 backdrop-blur-xl
              border border-white/10 shadow-[0_0_25px_rgba(0,140,255,0.08)]
              hover:shadow-[0_0_40px_rgba(0,140,255,0.15)]
              transition-all duration-500"
          >

            {/* Icono con halo */}
            <div className="mt-1">
              <div className="p-4 rounded-full bg-gradient-to-br from-sky-600 to-purple-600
                shadow-[0_0_15px_rgba(0,140,255,0.45)]">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Texto */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {job.cargo}
              </h3>

              {/* Empresa + período en degradado */}
              <p className="text-sm font-medium bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                {job.empresa} • {job.periodo}
              </p>

              <p className="text-neutral-300 mt-3 leading-relaxed text-sm md:text-base">
                {job.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
