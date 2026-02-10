import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
// Certifique-se de importar seus assets corretamente
import Logo from "@/assets/letra-e.png";
import { IoMenu } from "react-icons/io5";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault(); // <--- ISSO É O IMPORTANTE! Impede que a URL mude.
  
  const targetId = href.replace('#', ''); // Tira a # e pega só o ID (ex: BIOGRAFIA)
  const element = document.getElementById(targetId);

  if (element) {
    const headerOffset = 100; // Espaço para o menu não tampar o título
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};



// 1. Dei um upgrade no Option para ter uma animaçãozinha de hover
const Option = ({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <a
      className={cn(
        className,
        "relative text-gray-300 cursor-pointer text-sm font-medium transition-colors duration-300 hover:text-white group",
      )}
      href={href}
      onClick={(e) => handleScroll(e, href || "")}
    >
      {children}
      {/* Linha animada embaixo do link quando passa o mouse */}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-Torange transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export const Menu = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      // 1. Altura do seu menu flutuante + um respiro visual
      const headerOffset = 120;

      // 2. Pega a posição do elemento
      const elementPosition = element.getBoundingClientRect().top;

      // 3. Calcula a posição exata somando o scroll atual
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // 4. Executa o scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    // 2. Container "Cápsula Flutuante"
    // fixed: prende na tela
    // top-6: dá o respiro do topo
    // left-1/2 -translate-x-1/2: centraliza horizontalmente
    // z-50: garante que fique por cima de TUDO
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className={cn(
          "relative flex items-center justify-between p-2 pl-6 pr-2 lg:px-4 lg:py-3",
          "bg-black/80 backdrop-blur-md", // O efeito de vidro fumê
          "border border-white/10", // Borda sutil para definir o limite no escuro
          "rounded-full", // Formato pílula
          "shadow-[0_8px_30px_rgb(0,0,0,0.12)]", // Sombra suave de elevação
        )}
      >
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
          <img
            src={Logo}
            className="w-8 h-8 lg:w-9 lg:h-9 object-contain"
            alt="Logo"
          />
        </div>

        {/* LINKS (Desktop) */}
        <div className="hidden lg:flex flex-1 gap-10 justify-center items-center">
          <Option href="#BIOGRAFIA">Sobre mim</Option>
          <Option href="#STACK">Tecnologias</Option>
          <Option href="#PROJETOS">Projetos</Option>
        </div>

        {/* BOTÃO CONTATO (Desktop) */}
        <div className="hidden lg:block">
          <Button
            onClick={() => scrollToId("CONTATO")}
            className="cursor-pointer bg-white text-black rounded-full font-bold px-6 py-5 transition-all duration-300 hover:bg-Torange hover:text-white hover:shadow-[0_0_20px_rgba(255,100,0,0.4)]"
          >
            Contato
          </Button>
        </div>

        {/* MENU MOBILE (Botão) */}
        <div className="lg:hidden block">
          <Button
            size="icon" // Deixa redondinho ou quadrado perfeito
            className="bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/5"
          >
            <IoMenu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
