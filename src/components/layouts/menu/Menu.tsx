import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
// Certifique-se de importar seus assets corretamente
import Logo from "@/assets/letra-e.png";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault(); // <--- ISSO É O IMPORTANTE! Impede que a URL mude.

    const targetId = href.replace("#", ""); // Tira a # e pega só o ID (ex: BIOGRAFIA)
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100; // Espaço para o menu não tampar o título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById("CONTATO");
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false);
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* --- GATILHO (O Botão que abre) --- */}
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/5 backdrop-blur-sm"
              >
                <IoMenu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            {/* --- CONTEÚDO (O Menu Lateral) --- */}
            <SheetContent
              side="right" // Abre da direita (mais natural no mobile)
              className="w-[300px] sm:w-[400px] bg-black/95 backdrop-blur-xl border-l border-white/10 text-white p-6 flex flex-col"
            >
              {/* 1. Cabeçalho (Logo e Nome) */}
              <SheetHeader className="text-left mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl">
                    <img src={Logo} alt="Logo" className="w-6 h-6" />
                  </div>
                  <div>
                    <SheetTitle className="text-white text-xl font-bold">
                      Euler Couto
                    </SheetTitle>
                    <SheetDescription className="text-gray-400 text-xs">
                      Full Stack Developer
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              {/* 2. Navegação (Links Grandes) */}
              <div className="flex flex-col gap-6 flex-1">
                {/* Item 1 */}

                <div
                  onClick={(e) => handleScroll(e, "#BIOGRAFIA")}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <span className="text-gray-600 font-mono text-sm group-hover:text-Torange transition-colors">
                    01
                  </span>
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    Sobre mim
                  </span>
                </div>

                <Separator className="bg-white/5" />

                {/* Item 2 */}

                <div
                  onClick={(e) => handleScroll(e, "#STACK")}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <span className="text-gray-600 font-mono text-sm group-hover:text-Torange transition-colors">
                    02
                  </span>
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    Techs
                  </span>
                </div>

                <Separator className="bg-white/5" />

                {/* Item 3 */}

                <div
                  onClick={(e) => handleScroll(e, "#PROJETOS")}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <span className="text-gray-600 font-mono text-sm group-hover:text-Torange transition-colors">
                    03
                  </span>
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    Projetos
                  </span>
                </div>
              </div>

              {/* 3. Rodapé (Social + CTA) */}
              <div className="mt-auto flex flex-col gap-6">
                {/* Redes Sociais */}
                <div className="flex gap-4 justify-center">
                  {[<FaGithub />, <FaLinkedin />, <FaWhatsapp />].map(
                    (icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                      >
                        {icon}
                      </a>
                    ),
                  )}
                </div>

                {/* Botão Final */}

                <Button
                  onClick={handleContactClick}
                  className="w-full bg-Torange hover:bg-orange-600 text-white font-bold h-12 rounded-xl"
                >
                  Entrar em Contato
                </Button>

                <p className="text-center text-[10px] text-gray-600">
                  © 2026 Euler Couto. All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
