import { PageContainer } from "@/components/layouts/containers/pageContainer";
import { Menu } from "@/components/layouts/menu/Menu";


import TechCarousel from "@/components/layouts/carroussel/Marquee";
import { SobreMim } from "@/components/layouts/containers/SobreMim/SobreMim";
import { Banner } from "@/components/layouts/containers/Banner/Banner";
import { ServicesSection } from "@/components/layouts/containers/SectionServices/SectionServices";
import { ContactSection } from "@/components/layouts/containers/Contato/Contato";
import { TechShowcase } from "@/components/layouts/containers/Tecnologias/Techs";


export const Home = () => {

  return (
    <PageContainer className="overflow-x-hidden">
      {/* Menu */}
      <div className="lg:px-12 py-8 w-full flex justify-center">
        <Menu />
      </div>

      {/* Titulo */}
      <Banner />

      <ServicesSection />


      {/* Sobre mim */}
      <SobreMim />

      <div className="w-full py-10 flex flex-col items-center">
        <p id="STACK" className="text-3xl font-medium">Tecnologias de confiança</p>
        <TechCarousel />
      </div>

      <TechShowcase />


      <ContactSection />
    </PageContainer>
  );
};
