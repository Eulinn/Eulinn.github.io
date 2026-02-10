


const Notificacoes = () => {
  return (
    // REMOVIDO: max-w-sm, animate-bounce-slow
    // ADICIONADO: h-full, hover:-translate-y-1 (efeito mais elegante)
    <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-4 w-full h-full transition-transform duration-300 hover:-translate-y-1">
      
      {/* Avatar Container (shrink-0 impede de amassar) */}
      <div className="relative shrink-0">
        <img
          src="https://i.pravatar.cc/150?img=32"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-sm"
          alt="Avatar"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Texto (min-w-0 ajuda a não estourar o container) */}
      <div className="min-w-0 flex-1">
        <p className="font-bold text-sm text-gray-800 truncate">Novo Lead Capturado!</p>
        <p className="text-xs text-gray-500 truncate">
          "Gostaria de um orçamento..."
        </p>
      </div>

      {/* Botão (shrink-0 garante tamanho fixo) */}
      <button className="ml-auto cursor-pointer text-Torange font-bold text-xs hover:underline shrink-0">
        Ver
      </button>
    </div>
  );
};

const Swtich = () => {
  return (
    // REMOVIDO: max-w-sm
    // ALTERADO: p-4 md:p-6 para melhor adaptação
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between gap-4 w-full h-full transition-all hover:shadow-xl">
      
      <div className="min-w-0">
        <h3 className="font-bold text-gray-800 text-sm md:text-base truncate">Modo Adaptável</h3>
        <p className="text-[10px] md:text-xs text-gray-500 line-clamp-2">
          Seu site pronto para qualquer ambiente.
        </p>
      </div>

      {/* O Toggle Animado (shrink-0 é essencial aqui) */}
      <div className="relative w-14 h-7 md:w-16 md:h-8 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300 shrink-0">
        <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0 hover:translate-x-7 md:hover:translate-x-8">
          {/* Ícone Sol/Lua */}
          <div className="w-full h-full flex items-center justify-center text-[10px]">
            🌙
          </div>
        </div>
      </div>
    </div>
  );
};

const Iterativo3D = () => {
  return (
    <div className="group relative w-full w-full h-64 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 shadow-2xl border border-gray-800 p-6 flex flex-col justify-between">
        <div className="w-12 h-12 rounded-full bg-Torange/20 flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-1">Ultra Rápido</h4>
          <p className="text-gray-400 text-sm">
            Otimização de performance para carregar em milissegundos.
          </p>
        </div>

        {/* Brilho no fundo */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-Torange blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>
    </div>
  );
};

const Grafico = () => {
  return (
    <div className="bg-white p-6 h-full w-full rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
      
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="font-bold text-gray-700 text-sm">Receita Mensal</h3>
        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold">
          +12.5%
        </span>
      </div>

      {/* Área do Gráfico (Flex-1 faz ocupar todo o espaço sobrando) */}
      <div className="flex items-end space-x-2 flex-1 min-h-[100px] w-full pb-2">
        {[40, 70, 45, 90, 60, 80, 55].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-Torange/20 hover:bg-Torange rounded-t-md transition-all duration-500 relative group"
            // Usamos h tem que ser porcentagem do pai flexível
            style={{ height: `${h}%` }}
          >
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
              R$ {h}k
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé das Datas */}
      <div className="flex justify-between text-[10px] text-gray-400 font-medium border-t border-gray-100 pt-2 shrink-0">
        <span>01 Set</span>
        <span>07 Set</span>
        <span>14 Set</span>
        <span>21 Set</span>
        <span>28 Set</span>
      </div>
    </div>
  );
};

const Upload = () => {
  return (
    // REMOVIDO: max-w-sm
    // ALTERADO: p-4 md:p-6
    // ADICIONADO: flex flex-col
    <div className="bg-white h-full w-full p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
      
      {/* ADICIONADO: flex-1 
         Isso faz a área pontilhada esticar para ocupar toda a altura do card 
      */}
      <div className="w-full flex-1 border-2 border-dashed border-blue-300 bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors gap-3">
        
        {/* Ícone (shrink-0 impede deformação) */}
        <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
        </div>
        
        {/* Textos */}
        <div className="w-full">
          <p className="text-sm font-bold text-gray-700 truncate">projeto_final.pdf</p>
          <p className="text-xs text-gray-400">3.4 MB • Enviando...</p>
        </div>

        {/* Barra de Progresso Animada */}
        <div className="w-full max-w-[200px] bg-gray-200 rounded-full h-2 overflow-hidden shrink-0">
          <div className="bg-blue-500 h-2 rounded-full w-[75%] animate-pulse relative">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-white/30 w-full animate-pulse"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    // REMOVIDO: max-w-sm
    // ADICIONADO: flex flex-col (para garantir estrutura vertical)
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full overflow-hidden flex flex-col h-full">
      
      {/* Header */}
      <div className="bg-gray-900 p-3 flex items-center gap-3 shrink-0">
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-white"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white" />
        </div>
        <p className="text-white text-xs font-bold">Atendimento Online</p>
      </div>

      {/* Corpo do Chat */}
      <div className="p-4 flex-1 bg-gray-50 flex flex-col gap-3 overflow-hidden relative min-h-[160px]">
        {/* Mensagem Recebida */}
        <div className="self-start bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-xs text-gray-600 max-w-[85%]">
          Olá! Como posso ajudar na sua automação hoje?
        </div>
        {/* Mensagem Enviada */}
        <div className="self-end bg-Torange text-white p-2 rounded-lg rounded-tr-none shadow-sm text-xs max-w-[85%]">
          Preciso de um orçamento para um sistema web.
        </div>
        {/* Indicador de "Digitando..." */}
        <div className="absolute bottom-2 left-4 text-[10px] text-gray-400 animate-pulse">
          Digitando...
        </div>
      </div>
    </div>
  );
};

const IAscanner = () => {
  return (
    // REMOVIDO: max-w-sm
    // ALTERADO: p-4 (mobile) md:p-6 (desktop)
    // ADICIONADO: flex flex-col justify-between (para esticar o conteudo)
    <div className="bg-white h-full w-full p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 group overflow-hidden relative hover:shadow-xl transition-all flex flex-col justify-between">
      
      {/* Cabeçalho */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-indigo-50 p-2 rounded-xl border border-indigo-100 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
        </div>
        <div className="min-w-0"> {/* min-w-0 ajuda no truncamento de texto se precisar */}
          <h3 className="font-bold text-gray-800 text-sm truncate">Motor de IA</h3>
          <p className="text-[10px] md:text-xs text-gray-400 truncate">
            Análise de dados em tempo real
          </p>
        </div>
      </div>

      {/* Corpo: Scanner Visual */}
      <div className="relative bg-gray-50 p-3 rounded-xl border border-gray-100 overflow-hidden h-24 flex flex-col justify-center gap-2 w-full">
        <div className="h-2 bg-gray-200/80 rounded w-3/4"></div>
        <div className="h-2 bg-gray-200/80 rounded w-full"></div>
        <div className="h-2 bg-gray-200/60 rounded w-5/6"></div>
        <div className="h-2 bg-gray-200/50 rounded w-1/2"></div>
        
        {/* Animação */}
        <div className="absolute top-0 left-0 w-[2px] h-full bg-indigo-500/80 shadow-[0_0_15px_2px_rgba(99,102,241,0.6)] animate-scan"></div>
      </div>

      {/* Rodapé */}
      <div className="mt-4 flex justify-between items-center text-xs border-t border-gray-50 pt-3">
        <span className="text-gray-500 flex items-center gap-2 text-[10px] md:text-xs">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shrink-0"></div>
          Processando
        </span>
        <span className="font-mono text-indigo-600 font-bold text-[10px] md:text-xs">
          98.5% Precisão
        </span>
      </div>
    </div>
  );
};

const Saas = () => {
  return (
    <div className="bg-white p-6 h-full w-full rounded-2xl shadow-lg border-2 border-transparent hover:border-Torange transition-all group flex flex-col">
      
      {/* Parte Superior: Cabeçalho e Lista */}
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase">
              Plano Profissional
            </h3>
            <div className="flex items-baseline mt-2">
              <span className="text-3xl font-bold text-gray-900">R$99</span>
              <span className="text-gray-400 text-xs ml-1">/mês</span>
            </div>
          </div>
          <span className="bg-Torange/10 text-Torange text-xs font-bold px-2 py-1 rounded-md group-hover:bg-Torange group-hover:text-white transition-colors">
            Popular
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-xs text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> Acesso Ilimitado
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> Suporte 24h via Chat
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> Dashboards Personalizados
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> API Rest Full
          </li>
        </ul>
      </div>

      {/* Botão sempre no rodapé do card */}
      <button className="w-full mt-6 bg-gray-900 text-white text-xs font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors mt-auto">
        Começar Agora
      </button>
    </div>
  );
};


export const TechShowcase = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-10 px-4 md:px-8">
      
      {/* Título com destaque */}
      <div className="text-center space-y-2">
         <p className="block text-4xl md:text-5xl font-medium max-w-2xl text-center leading-tight">
          O site que você <span className="text-Torange font-bold italic">deseja</span> está aqui!
        </p>
        <p className="text-gray-500 max-w-lg mx-auto">
          Componentes modulares, interativos e focados em conversão.
        </p>
      </div>

      {/* --- O BENTO GRID --- */}
      {/* Mobile: 1 coluna 
         Tablet: 2 colunas 
         Desktop: 4 colunas 
         auto-rows: define altura mínima para garantir que estiquem
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 w-full max-w-7xl">
        
        {/* 1. Destaque Visual (Largo) - Iterativo3D */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
           <div className="h-full w-full flex justify-center items-center">
             <Iterativo3D />
           </div>
        </div>

        {/* 2. Destaque de Dados (Alto) - Gráfico */}
        <div className="col-span-1 lg:col-span-1 row-span-2 h-full">
           <div className="h-full w-full">
             <Grafico />
           </div>
        </div>

        {/* 3. Destaque Comercial (Alto) - SaaS */}
        <div className="col-span-1 lg:col-span-1 row-span-2 h-full">
           <div className="h-full w-full">
             <Saas />
           </div>
        </div>

        {/* 4. Funcionalidade (Pequeno) - IA Scanner */}
        <div className="col-span-1 row-span-1">
           <div className="h-full w-full flex justify-center items-center">
             <IAscanner />
           </div>
        </div>

        {/* 5. Funcionalidade (Pequeno) - Upload */}
        <div className="col-span-1 row-span-1">
           <div className="h-full w-full flex justify-center items-center">
             <Upload />
           </div>
        </div>

        {/* 6. Interação (Alto/Largo) - Chat */}
        {/* No desktop ocupa 2 colunas para ficar largo em baixo */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
           <div className="h-full w-full">
             <Chat />
           </div>
        </div>

        {/* 7. Detalhes (Pequenos) - Notificações e Switch */}
        <div className="col-span-1 lg:col-span-2 flex flex-col md:flex-row gap-4">
           <div className="flex-1 flex justify-center items-center">
             <Notificacoes />
           </div>
           <div className="flex-1 flex justify-center items-center">
             <Swtich />
           </div>
        </div>

      </div>
    </div>
  );
};












