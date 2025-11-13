"use client";

import FadeIn from "@/components/FadeIn"; // 🔥 IMPORT CORRECTO
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiPython, SiTailwindcss, SiPrisma, SiTypescript,
  SiSelenium, SiPandas, SiMysql, SiSwift, SiHtml5, SiCss3
} from "react-icons/si";
import { FaFilePdf, FaDatabase, FaSpider } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <SiReact />, glow: "shadow-cyan-400/40" },
    { name: "Node.js", icon: <SiNodedotjs />, glow: "shadow-emerald-400/40" },
    { name: "Python", icon: <SiPython />, glow: "shadow-yellow-400/40" },
    { name: "Tailwind", icon: <SiTailwindcss />, glow: "shadow-sky-400/40" },
    { name: "Prisma ORM", icon: <SiPrisma />, glow: "shadow-slate-400/40" },
    { name: "SQL", icon: <FaDatabase />, glow: "shadow-violet-400/40" },
    { name: "TypeScript", icon: <SiTypescript />, glow: "shadow-blue-400/40" },
    { name: "Selenium", icon: <SiSelenium />, glow: "shadow-lime-400/40" },
    { name: "BeautifulSoup", icon: <FaSpider />, glow: "shadow-orange-400/40" },
    { name: "PDFPlumber", icon: <FaFilePdf />, glow: "shadow-rose-400/40" },
    { name: "Pandas", icon: <SiPandas />, glow: "shadow-purple-400/40" },
    { name: "Excel", icon: <SiMysql />, glow: "shadow-teal-400/40" },
    { name: "Swift", icon: <SiSwift />, glow: "shadow-orange-500/40" },
    { name: "HTML", icon: <SiHtml5 />, glow: "shadow-amber-400/40" },
    { name: "CSS", icon: <SiCss3 />, glow: "shadow-indigo-400/40" },
  ];

  const duplicated = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-24 text-white overflow-hidden">

      {/* 🔥 FADE-IN DEL TÍTULO */}
      <FadeIn delay={0.1}>
        <h2 className="text-4xl font-bold text-center mb-16">
          Lenguajes y Tecnologías
        </h2>
      </FadeIn>

      {/* Fades laterales */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-20" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-20" />

      {/* 🔥 FADE-IN DE TODA LA FILA 1 */}
      <FadeIn delay={0.2}>
        <motion.div
          className="flex gap-10 w-max mb-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          {duplicated.map((s, i) => (
            <div
              key={`r1-${i}`}
              className={`
                group w-[180px] h-[180px] rounded-3xl p-6 
                bg-white/5 backdrop-blur-xl border border-white/10
                flex flex-col items-center justify-center
                ${s.glow}
                hover:shadow-[0_0_35px] hover:scale-[1.06]
                transition-all duration-500
              `}
            >
              <div className="text-6xl opacity-90 group-hover:rotate-[360deg] transition-transform duration-700">
                {s.icon}
              </div>
              <p className="mt-4 text-sm font-semibold">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </FadeIn>

      {/* 🔥 FADE-IN DE TODA LA FILA 2 */}
      <FadeIn delay={0.35}>
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          {duplicated.map((s, i) => (
            <div
              key={`r2-${i}`}
              className={`
                group w-[180px] h-[180px] rounded-3xl p-6 
                bg-white/5 backdrop-blur-xl border border-white/10
                flex flex-col items-center justify-center
                ${s.glow}
                hover:shadow-[0_0_35px] hover:scale-[1.06]
                transition-all duration-500
              `}
            >
              <div className="text-6xl opacity-90 group-hover:rotate-[-360deg] transition-transform duration-700">
                {s.icon}
              </div>
              <p className="mt-4 text-sm font-semibold">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </FadeIn>

    </section>
  );
}
