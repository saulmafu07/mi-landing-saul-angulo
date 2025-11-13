"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative  text-neutral-400 pt-20 pb-10 border-t border-white/5">

      {/* Línea neón animada */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[3px] 
        bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 animate-pulse rounded-full" />

      {/* Nombre tipo firma */}
      <h3 className="text-center text-2xl font-semibold tracking-wide text-white mt-10">
        <span className="font-light text-neutral-300">by</span> Saul Angulo Torres
      </h3>

      {/* Enlaces del menú */}
      <nav className="flex justify-center gap-8 mt-6 text-sm">
        {[
          { name: "Proyectos", href: "#projects" },
          { name: "Tecnologías", href: "#skills" },
          { name: "Experiencia", href: "#experience" },
          { name: "Contacto", href: "#contact" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="relative group hover:text-white transition"
          >
            {item.name}
            {/* Subrayado animado */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </nav>
{/* Redes con efecto glow */}
<div className="flex justify-center gap-6 mt-10">
  {[
    {
      icon: <Github />,
      href: "https://github.com/saulmafu07",
      newTab: true,
    },
    {
      icon: <Linkedin className="text-blue-500" />,
      href: "https://www.linkedin.com/in/saul-gil-angulo-torres",
      newTab: true,
    },
    {
      icon: <Instagram className="text-pink-500" />,
      href: "https://www.instagram.com/saul.mafu",
      newTab: true,
    },
    {
      icon: <Mail />,
      href: "mailto:saul_sk8_7@hotmail.com",
      newTab: false,
    },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noopener noreferrer" : undefined}
      className="p-3 rounded-full bg-neutral-900 transition group
        hover:bg-neutral-800 hover:shadow-[0_0_15px_rgba(0,150,255,0.35)]"
    >
      <div className="w-6 h-6 text-neutral-300 group-hover:text-white transition">
        {item.icon}
      </div>
    </a>
  ))}
</div>

      {/* Copyright */}
      <p className="text-center text-neutral-600 text-xs mt-10">
        © {new Date().getFullYear()} Saul Angulo Torres — Todos los derechos reservados.
      </p>
    </footer>
  );
}
