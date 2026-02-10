import { cn } from "@/lib/utils"; // Supondo que você tenha isso configurado, ou use uma função simples

import NAO from "@/assets/Group 4.png";
import ASPAS from "@/assets/Group 2.png";
import { Badge } from "@/components/ui/badge";

import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export const Banner = () => {
  const tags = [
    "Software & Hardware",
    "IoT & Sistemas Embarcados",
    "Robótica & IA",
    "Redes Neurais & Deep Learning",
    "Web & Mobile Development",
    "Full Stack & Engineering",
    "Automação",
  ];

  const redes = [
    {
      item: <FaWhatsapp />,
      link: "https://wa.me/5532999266247"
    },
    {
      item: <FaInstagram />,
      link: "https://www.instagram.com/eulin___/"
    },
    {
      item: <FaGithub />,
      link: "https://github.com/Eulinn"
    },
    {
      item: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/eulerbarreto/"
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-10 px-6 lg:px-12 bg-white overflow-hidden">
      {/* 1. O Título Impactante (Centralizado) */}
      <div className="flex flex-col items-center text-center z-10 mb-12 lg:mb-20">
        {/* Hello There com linha decorativa */}
        <div className="flex items-center gap-4 mb-4 animate-fade-in-up">
          <span className="w-12 h-[2px] bg-black" />
          <span className="font-mono text-sm md:text-base tracking-widest uppercase text-gray-500">
            Hello There!
          </span>
          <span className="w-12 h-[2px] bg-black" />
        </div>

        {/* Nome GIGANTE (Tipografia "Statement") */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-black">
          I'M{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-Torange to-orange-600 relative inline-block">
            EULER
            {/* Detalhe sutil: um ponto no final ou sublinhado */}
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-Torange/20 -skew-x-12 hidden lg:block" />
          </span>
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-gray-200 lg:-mt-4">
          COUTO
        </h1>

        <p className="mt-6 text-gray-600 text-lg md:text-xl font-medium max-w-lg">
          Estudante de engenharia elétrica & Desenvolvedor Full-Stack
        </p>
      </div>

      {/* 2. O Grid de Conteúdo (Adapta-se de 1 coluna (mobile) para 3 colunas (desktop)) */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* --- COLUNA DA ESQUERDA: Citação (Desktop: col 1-4) --- */}
        <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-4 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start opacity-30">
            <img src={ASPAS} className="w-12 h-12" alt="Aspas" />
          </div>
          <p className="text-lg text-gray-600 italic font-serif leading-relaxed">
            "Durante todas essas experiências, Euler mostrou interesse na área
            de programação, proatividade em buscar conhecimento e abertura para
            receber feedback."
          </p>
          <div className="w-12 h-1 bg-Torange mx-auto lg:mx-0 rounded-full mt-2" />
        </div>

        {/* --- COLUNA DO CENTRO: Foto Principal (Desktop: col 5-8) --- */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative">
          {/* Elemento decorativo atrás da foto */}
          <div className="absolute inset-0 bg-Torange rounded-full blur-[80px] opacity-20 animate-pulse" />

          {/* Container da Imagem com Estilo "Portal" */}
          <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-4 border-black shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 bg-gray-100">
            <img
              src={NAO}
              className="w-full h-full object-cover object-center"
              alt="Euler Couto"
            />
          </div>
        </div>

        {/* --- COLUNA DA DIREITA: Tags e Social (Desktop: col 9-12) --- */}
        <div className="lg:col-span-4 order-3 flex flex-col gap-8">
          {/* Tags (Alinhadas à direita no desktop) */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-2 content-start">
            {tags.map((item, ind) => (
              <Badge
                key={item}
                className={cn(
                  "py-2 px-4 text-sm font-medium transition-all duration-300 hover:scale-105",
                  // Lógica visual: alterna entre Outline preto e Fundo Laranja
                  ind % 2 === 0
                    ? "bg-Torange text-white hover:bg-orange-600 border-none"
                    : "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
                )}
              >
                {item}
              </Badge>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Conecte-se
            </span>
            <div className="flex gap-4 text-3xl text-black">
              {redes.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>{
                    window.open(item.link, "_blank")
                  }}
                  className="cursor-pointer hover:text-Torange hover:-translate-y-1 transition-all duration-300"
                >
                  {item.item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
