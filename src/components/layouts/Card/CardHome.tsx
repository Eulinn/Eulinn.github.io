import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react"; // Se tiver lucide, ou use outro icone

export const ServiceCard = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: string;
}) => {
  return (
    <div className="group relative w-full h-[400px] cursor-pointer perspective-1000">
      {/* Container Base - Fundo do Card Geral */}
      <div className="flex flex-col h-full bg-[#111111] rounded-3xl p-6 border border-white/5 transition-colors duration-300 group-hover:border-white/10 relative z-20 overflow-hidden">
        {/* Cabeçalho do Card */}
        <div className="flex justify-between items-start">
          <div>
            <span className="text-Torange font-mono text-xs mb-1 block">
              {number || "01"}
            </span>
            <h3 className="text-2xl text-white font-medium">{title}</h3>
          </div>
          {/* Ícone de seta que acende no hover */}
          <div className="text-gray-500 group-hover:text-Torange group-hover:rotate-45 group-active:text-Torange group-active:rotate-45 transition-all duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>

        <Separator className="my-4 opacity-20 bg-white" />

        <p className="text-gray-400 text-sm pb-8 line-clamp-2">{description}</p>

        {/* --- A MÁGICA DAS CAMADAS (Fanning Effect) --- */}
        {/* Usamos 'mt-auto' para jogar as cartas pro fundo do container */}
        <div className="relative w-full h-48 mt-auto flex justify-center items-end isolate">
          {/* CARTA 1 (Trás - Laranja - Gira pra Esquerda) */}
          <div
            className={cn(
              "absolute w-[85%] h-full bg-Torange rounded-2xl shadow-xl",
              "origin-bottom transition-all duration-500 ease-out",
              "group-hover:-rotate-12 group-hover:-translate-x-12 group-hover:-translate-y-4", // Movimento
              "group-active:-rotate-12 group-active:-translate-x-12 group-active:-translate-y-4", // Movimento
              "z-0", // Fica atrás
            )}
          >
            {/* Detalhe visual opcional na carta laranja */}
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
          </div>

          {/* CARTA 2 (Meio - Branca - Gira pra Direita) */}
          <div
            className={cn(
              "absolute w-[90%] h-full bg-white rounded-2xl shadow-xl",
              "origin-bottom transition-all duration-500 ease-out delay-75",
              "group-hover:rotate-6 group-hover:translate-x-12 group-hover:-translate-y-2", // Movimento
              "group-active:rotate-6 group-active:translate-x-12 group-active:-translate-y-2", // Movimento
              "z-10",
            )}
          >
            {/* Detalhe visual na carta branca */}
            <div className="w-full h-full flex items-center justify-center text-black font-bold opacity-10 text-4xl">
              JS
            </div>
          </div>

          {/* CARTA 3 (Frente - Preta/Cinza - Fica no Centro e Sobe) */}
          <div
            className={cn(
              "relative w-[95%] h-[110%] bg-[#1a1a1a] border border-white/10 rounded-t-2xl shadow-2xl",
              "transition-all duration-500 ease-out delay-100",
              "group-hover:-translate-y-6 group-hover:scale-105", // Sobe um pouco
              "group-active:-translate-y-6 group-active:scale-105", // Sobe um pouco
              "z-20 overflow-hidden",
            )}
          >
            {/* Imagem ou Ilustração Principal aqui */}
            {/* Exemplo com um gradiente ou imagem placeholder */}
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50" />

            {/* Label flutuante na carta da frente */}
            <div className="absolute bottom-4 left-0 w-full text-center">
              <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                Ver Projeto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
