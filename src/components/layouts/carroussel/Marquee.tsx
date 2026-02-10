import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { cn } from "@/lib/utils";

const animation = { duration: 20000, easing: (t) => t };

export default function TechCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true, // Infinito
    renderMode: "performance", // Melhor performance para animações contínuas
    drag: false, // Desabilita o arraste manual (opcional, para focar no automático)

    // Configurações de quantos slides ver por vez (Responsivo)
    slides: {
      perView: 2, // Mobile: vê 2 itens
      spacing: 15,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 640px)": {
        // Tablet
        slides: { perView: 4, spacing: 20 },
      },
      "(min-width: 1024px)": {
        // Desktop
        slides: { perView: 6, spacing: 40 },
      },
    },

    // O segredo do movimento infinito está aqui:
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  // Seus itens (Badges, Logos, etc)
  const techs = [
    "React",
    "Tailwind",
    "Node.js",
    "Laravel",
    "Arduino",
    "Python",
    "Git",
    "C++",
    "Figma",
    "TypeScript",
    "SQL",
  ];

  return (
    <div className="w-full py-10 overflow-hidden relative">
      <div ref={sliderRef} className="keen-slider z-0">
        {techs.map((tech, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center h-20",
              "keen-slider__slide text-gray-400 rounded-xl font-bold",
              "text-3xl"
            )}
          >
            {/* Aqui dentro vai seu Ícone ou Badge */}
            {tech}
          </div>
        ))}
      </div>

      {/* --- FUMAÇA DA ESQUERDA (Fade Left) --- */}
      <div
        className="
      pointer-events-none 
      absolute top-0 bottom-0 left-0
      w-40 lg:w-80
      z-10
      bg-gradient-to-r from-white to-transparent
    "
      />

      {/* --- FUMAÇA DA DIREITA (Fade Right) --- */}
      <div
        className="
      pointer-events-none
      absolute top-0 bottom-0 right-0
      w-40 lg:w-80
      z-10
      bg-gradient-to-l from-white to-transparent
    "
      />
    </div>
  );
}
