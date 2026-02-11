import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { cn } from "@/lib/utils";
// Importando os ícones (Instale: npm install react-icons)
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiArduino,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const animation = { duration: 20000, easing: (t: number) => t };

// Lista de tecnologias com suas cores oficiais
const techs = [
  { name: "React", icon: FaReact, color: "group-hover:text-[#61DAFB] group-active:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-black group-active:text-black" },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "group-hover:text-[#06B6D4] group-active:text-[#06B6D4]",
  },
  { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-[#339933] group-active:text-[#339933]" },
  { name: "Laravel", icon: FaLaravel, color: "group-hover:text-[#FF2D20] group-active:text-[#FF2D20]" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "group-hover:text-[#3178C6] group-active:text-[#3178C6]",
  },
  { name: "Python", icon: FaPython, color: "group-hover:text-[#3776AB] group-active:text-[#3776AB]" },
  { name: "C++", icon: SiCplusplus, color: "group-hover:text-[#00599C] group-active:text-[#00599C]" },
  { name: "Arduino", icon: SiArduino, color: "group-hover:text-[#00979D] group-active:text-[#00979D]" },
  { name: "SQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1] group-active:text-[#4169E1]" },
  { name: "Git", icon: FaGitAlt, color: "group-hover:text-[#F05032] group-active:text-[#F05032]" },
  { name: "Figma", icon: FaFigma, color: "group-hover:text-[#F24E1E] group-active:text-[#F24E1E]" },
];

export default function TechCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2.5,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 4, spacing: 30 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 6, spacing: 40 },
      },
    },
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

  return (
    <div className="w-full relative bg-white py-10">
      {/* Container do Slider */}
      <div ref={sliderRef} className="keen-slider py-4 select-none">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center p-2"
          >
            {/* CARD ESTILIZADO (Minimalista) */}
            <div
              className={cn(
                "group relative w-full h-32 rounded-2xl",
                "bg-white border border-gray-100", // Fundo branco com borda sutil
                "shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]", // Sombra suave
                "flex flex-col items-center justify-center gap-3",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-2 hover:shadow-xl hover:border-gray-200", // Efeito de levitação
                "active:-translate-y-2 active:shadow-xl active:border-gray-200", // Efeito de levitação
              )}
            >
              {/* ÍCONE */}
              <div
                className={cn(
                  "text-5xl text-gray-400 transition-colors duration-300",
                  tech.color, // A cor aparece só no hover (group-hover)
                )}
              >
                <tech.icon />
              </div>

              {/* NOME */}
              <span className="text-sm font-bold text-gray-400 group-hover:text-gray-800 group-active:text-gray-800 transition-colors">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* --- FADE BRANCO (Fumaça para esconder as pontas) --- */}
      {/* Esquerda */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Direita */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </div>
  );
}
