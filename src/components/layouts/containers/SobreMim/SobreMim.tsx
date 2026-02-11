
import FOTO from "@/assets/euler.jpg";

export const SobreMim = () => {
  return (
    // AJUSTE 1: Mudei px-10 para px-6 (mobile) e lg:px-20 (desktop) para dar mais ar nas bordas grandes e não comer espaço no mobile
    <section id="BIOGRAFIA" className="relative w-full my-16 md:my-32 px-6 lg:px-20 overflow-hidden">
      
      {/* Elemento Decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-Torange/10 rounded-full blur-3xl -z-10" />

      {/* AJUSTE 2: Mudei de 'md:flex-row' para 'lg:flex-row'. 
         Isso impede que o layout quebre cedo demais e esprema o texto em tablets. */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        
        {/* --- LADO DA IMAGEM --- */}
        <div className="flex-1 relative flex justify-center w-full">
          {/* Mantive o tamanho fixo da área da imagem para evitar pulos de layout */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            
            <div className="absolute inset-0 border-2 border-Torange/30 rounded-[2rem] transform rotate-6 translate-x-2 translate-y-2" />

            <div className="relative w-full h-full bg-red-600 rounded-[2rem] shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] active:scale-[1.02]">
              <img src={FOTO} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce-slow z-10">
              <div className="bg-green-100 p-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                <p className="text-sm font-bold text-gray-800">Disponível para Projetos</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* --- LADO DO TEXTO --- */}
        {/* AJUSTE 3: Removi o bg-blue-600 e adicionei text-center para mobile e text-left para desktop (lg) */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-Torange"></span>
            <span className="text-Torange font-bold uppercase tracking-widest text-sm">
              Sobre mim
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Engenharia e Código <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-Torange to-orange-600">
              conectados.
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Minha abordagem vai além do código. Como graduando em{" "}
            <strong>Engenharia Elétrica com ênfase em Robótica na UFJF</strong>{" "}
            e Técnico em Informática, desenvolvo soluções que conectam hardware
            robusto a interfaces intuitivas.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Transito com naturalidade entre a soldagem de circuitos, o
            treinamento de redes neurais e a arquitetura Full Stack. Confiar nos
            meus projetos é apostar na união completa entre físico e digital.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4 border-t border-gray-100 pt-6 w-full lg:w-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-xs text-gray-500">Anos de Código</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">UFJF</h3>
              <p className="text-xs text-gray-500">Engenharia</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-xs text-gray-500">Comprometido</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};