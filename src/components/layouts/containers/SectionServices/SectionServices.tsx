import { Separator } from "@/components/ui/separator";
import { ServiceCard } from "../../Card/CardHome";

export const ServicesSection = () => {
  return (
    <section id="PROJETOS" className="w-full px-4 md:px-8 py-12">
      <div className="w-full p-8 md:p-16 bg-black rounded-[3rem] shadow-2xl overflow-hidden relative">
        {/* Título da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <p className="flex items-center gap-2 text-3xl md:text-5xl font-medium tracking-tight">
              <span className="text-white">Meus</span>
              <span className="text-Torange font-bold italic">Serviços</span>
            </p>
            <p className="text-gray-400 mt-2 max-w-md">
              Soluções completas de engenharia e software para transformar
              ideias complexas em realidade.
            </p>
          </div>

          <div className="hidden md:block">
            <button className="text-white border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all">
              Ver todos
            </button>
          </div>
        </div>

        <Separator className="bg-white/10 mb-12" />

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            number="01"
            title="Web Development"
            description="Sites de alta performance, sistemas SaaS e dashboards administrativos com React e Tailwind."
          />

          <ServiceCard
            number="02"
            title="Automação & IoT"
            description="Integração de hardware e software. Controle dispositivos remotamente com eficiência."
          />

          <ServiceCard
            number="03"
            title="AI Solutions"
            description="Implementação de modelos de IA para análise de dados e otimização de processos."
          />
        </div>
      </div>
    </section>
  );
};
