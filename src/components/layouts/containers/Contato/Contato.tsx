import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react"; // Ou react-icons
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  const phoneNumber = "5532999266247"; 

  const handleWhatsAppClick = (intent:string) => {
    let message = "";
    
    switch(intent) {
      case "project":
        message = "Olá Euler! Vi seu portfólio e gostaria de fazer um orçamento para um projeto de Software/Engenharia.";
        break;
      case "hire":
        message = "Olá Euler! Represento uma empresa e gostaríamos de discutir uma oportunidade de trabalho.";
        break;
      case "collab":
        message = "Olá Euler! Tenho uma ideia de parceria tecnológica e gostaria de conversar.";
        break;
      default:
        message = "Olá Euler! Gostaria de entrar em contato.";
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full py-20 px-6 lg:px-12 bg-black overflow-hidden" id="CONTATO">
      
      {/* Background Glow (O charme laranja no fundo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-Torange/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LADO ESQUERDO: O Pitch --- */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div>
            <span className="text-Torange font-mono tracking-widest uppercase text-sm font-bold">
              // Contato
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
              Vamos construir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                o futuro juntos?
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Seja para automatizar uma indústria, criar uma plataforma web ou desenvolver uma solução de IA. 
            Estou pronto para transformar sua demanda técnica em resultado prático.
          </p>

          {/* Dados de Contato Direto */}
          <div className="flex flex-col gap-4 mt-4 items-center lg:items-start">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-Torange">
                <Mail size={20} />
              </div>
              <a href="mailto:euler.coutob@gmail.com" className="text-lg">euler.coutob@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-Torange">
                <MapPin size={20} />
              </div>
              <span className="text-lg">Juiz de Fora - MG / Remoto</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            {[<FaLinkedinIn />, <FaGithub />].map((icon, i) => (
              <a key={i} href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-Torange hover:border-Torange hover:-translate-y-1 transition-all duration-300">
                {icon}
              </a>
            ))}
          </div>
        </div>


        {/* --- LADO DIREITO: O "Painel de Ação" (The WhatsApp Launcher) --- */}
        <div className="relative">
          {/* O Card estilo 'Vidro' */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative z-10">
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Inicie uma conversa</h3>
              <p className="text-gray-400 text-sm">Selecione o assunto para agilizar nosso papo no WhatsApp:</p>
            </div>

            <div className="flex flex-col gap-4">
              
              {/* Opção 1: Orçamento */}
              <button 
                onClick={() => handleWhatsAppClick("project")}
                className="group cursor-pointer w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-Torange/50 hover:bg-white/10 transition-all duration-300 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <div>
                    <p className="font-bold text-white">Novo Projeto</p>
                    <p className="text-xs text-gray-500">Orçamentos e consultoria</p>
                  </div>
                </div>
                <ArrowRight className="text-gray-600 group-hover:text-Torange group-hover:translate-x-1 transition-all" />
              </button>

              {/* Opção 2: Recrutamento */}
              <button 
                onClick={() => handleWhatsAppClick("hire")}
                className="group cursor-pointer w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-Torange/50 hover:bg-white/10 transition-all duration-300 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  <div>
                    <p className="font-bold text-white">Recrutamento</p>
                    <p className="text-xs text-gray-500">Vagas e oportunidades</p>
                  </div>
                </div>
                <ArrowRight className="text-gray-600 group-hover:text-Torange group-hover:translate-x-1 transition-all" />
              </button>

              {/* Opção 3: Networking/Outros */}
              <button 
                onClick={() => handleWhatsAppClick("collab")}
                className="group cursor-pointer w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-Torange/50 hover:bg-white/10 transition-all duration-300 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    👋
                  </div>
                  <div>
                    <p className="font-bold text-white">Networking</p>
                    <p className="text-xs text-gray-500">Dúvidas ou bate-papo</p>
                  </div>
                </div>
                <ArrowRight className="text-gray-600 group-hover:text-Torange group-hover:translate-x-1 transition-all" />
              </button>

            </div>

            {/* Botão Principal Direct */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button 
                onClick={() => handleWhatsAppClick("default")}
                className="w-full cursor-pointer bg-green-600 hover:bg-green-500 text-white font-bold h-14 rounded-xl text-lg flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
              >
                <FaWhatsapp size={24} />
                Chamar no WhatsApp
              </Button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Resposta média: 2 a 4 horas.
              </p>
            </div>

          </div>
          
          {/* Elemento decorativo atrás do card */}
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-Torange to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse" />
        </div>

      </div>
    </section>
  );
};