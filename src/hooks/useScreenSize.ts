import { useState, useEffect } from 'react';

export default function useScreenSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Função para atualizar o estado
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Executa uma vez para pegar o tamanho inicial
    // (Verificação typeof window é para não quebrar em Next.js/SSR)
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    // Remove o listener quando o componente desmonta (limpeza)
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Definições baseadas no Tailwind CSS
  // sm: 640px | md: 768px | lg: 1024px | xl: 1280px
  
  const width = windowSize.width;

  const isMobile = width < 768; // Menor que 'md'
  const isTablet = width >= 768 && width < 1024; // Entre 'md' e 'lg'
  const isDesktop = width >= 1024; // Maior ou igual a 'lg'

  return { 
    width, 
    height: windowSize.height,
    isMobile, 
    isTablet, 
    isDesktop 
  };
}