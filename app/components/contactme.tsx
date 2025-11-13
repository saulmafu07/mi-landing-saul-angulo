"use client";

import { Mail } from "lucide-react";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-black text-white flex justify-center"
    >
      <div
        className="max-w-xl w-full text-center rounded-3xl p-10 
        bg-neutral-900/50 border border-white/10 backdrop-blur-md
        shadow-[0_0_25px_rgba(0,140,255,0.15)]
        hover:shadow-[0_0_35px_rgba(0,140,255,0.28)]
        transition-all duration-500"
      >
        {/* Glow superior */}
        <div className="mx-auto mb-6 w-24 h-[3px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full"></div>

        <h2 className="text-3xl font-bold mb-4 tracking-wide">
          ¿Trabajamos juntos?
        </h2>

        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
          Estoy abierto a colaborar en proyectos web, automatizaciones, 
          plataformas completas o cualquier reto tecnológico.
          Escríbeme y conversemos.
        </p>

        {/* Botón premium */}
        <a
          href="mailto:saul_sk8_7@hotmail.com"
          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full 
          text-white font-semibold bg-gradient-to-r from-sky-600 to-blue-700
          hover:from-sky-500 hover:to-blue-600 transition 
          shadow-lg hover:shadow-[0_0_20px_rgba(0,140,255,0.45)]"
        >
          <Mail className="w-5 h-5" />
          Escríbeme aquí
        </a>
      </div>
    </section>
  );
}