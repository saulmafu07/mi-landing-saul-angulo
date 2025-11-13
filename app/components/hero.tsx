"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, FileDown, ArrowDown } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        relative z-10 flex flex-col md:flex-row
        items-center justify-center
        gap-10 md:gap-16 px-6 md:px-10 py-16 text-white
        min-h-[100vh]
      "
    >
      {/* =========================
          TEXTO IZQUIERDA
      ========================== */}
      <div className="flex flex-col items-center md:items-end w-full md:w-[40%] space-y-6 md:mr-8">

        <div className="flex flex-col w-full max-w-[90%] md:max-w-[550px] lg:max-w-[600px] items-center md:items-start">

          {/* 🔥 TÍTULO */}
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight
              text-center md:text-left
              animate-fade-down animate-duration-[1100ms] animate-ease-out
            "
          >
            Saul Angulo Torres
          </h1>

          {/* 📝 DESCRIPCIÓN */}
          <p
            className="
              text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-3
              text-center md:text-left
              animate-fade-up animate-duration-[1400ms] animate-ease-out
            "
          >
            Desarrollador Full Stack con experiencia construyendo plataformas web,
            automatizaciones y sistemas empresariales desde cero. Trabajo con React,
            Next.js, Node.js, TypeScript, Python, SQL Server y Tailwind. Enfocado en
            arquitectura limpia, eficiencia, escalabilidad y gran experiencia de usuario.
          </p>

          {/* 🔗 REDES SOCIALES */}
          <div
            className="
              flex justify-center md:justify-start gap-6 mt-6 w-full
              animate-fade-up animate-delay-[300ms] animate-duration-[1000ms]
            "
          >
            <a href="https://github.com/saulmafu07" 
             target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 social-button">
              <Github className="w-6 h-6" />
            </a>

            <a href="https://www.instagram.com/saul.mafu/" 
            target="_blank"
  rel="noopener noreferrer"
            className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 social-button">
              <Instagram className="w-6 h-6" />
            </a>

        <a
  href="https://www.linkedin.com/in/saul-gil-angulo-torres"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 social-button"
>
  <Linkedin className="w-6 h-6" />
</a>
            {/* CV DOWNLOAD */}
            <a
              href="/cv_saul_esp.pdf"
              download
              title="Descargar CV"
              className="bg-neutral-800 social-button"
            >
              <FileDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          IMAGEN DERECHA
      ========================== */}
      <div
        className="
          flex flex-col items-center md:w-[35%] space-y-4 md:ml-8
          animate-slide-left animate-duration-[1200ms]
        "
      >
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px]">
          <Image
            src="/me.png"
            alt="Saul Angulo"
            fill
            priority
            className="object-cover rounded-full"
            style={{
              maskImage: "radial-gradient(circle at center, white 35%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at center, white 35%, transparent 80%)",
            }}
          />
        </div>

        <span
          className="
            text-sky-400 text-sm sm:text-base md:text-lg font-mono px-4 py-1 border border-sky-500/50 rounded-full
            flex items-center shadow-sm bg-black/70
            animate-fade-up animate-delay-[200ms]
          "
        >
          @saul.mafu
        </span>
      </div>

      {/* =========================
          FLECHA
      ========================== */}
      <a
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="
          absolute bottom-8 text-gray-400 hover:text-white transition-colors duration-300
          flex flex-col items-center cursor-pointer
          animate-bounce animate-duration-[1800ms]
        "
      >
        <ArrowDown className="w-8 h-8" />
        <span className="text-xs mt-1 text-gray-400">Ver proyectos</span>
      </a>
    </header>
  );
}
