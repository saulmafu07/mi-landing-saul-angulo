"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },

      background: {
        color: "#000000",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },

        color: { value: "#ffffff" },

        links: {
          enable: true,
          distance: 120,
          opacity: 0.3,
          width: 1,
          color: "#ffffff",
        },

        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          outModes: {
            default: "out" as const,
          },
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: { min: 1, max: 3 },
        },

        shape: {
          type: "circle" as const,
        },
      },

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { quantity: 2 },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!engineReady) return null;

  return (
    <div
      className={`
        fixed inset-0 z-0 pointer-events-none
        transition-opacity duration-700
        ${particlesReady ? "opacity-100" : "opacity-0"}
      `}
    >
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={async () => {
  setParticlesReady(true);
}}
      />
    </div>
  );
}
