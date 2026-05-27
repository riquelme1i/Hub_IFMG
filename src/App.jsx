import React, { useState } from 'react';
import { Home, BookOpen, LayoutDashboard, ChevronRight, Zap, Users, ArrowLeft, Cpu, PlayCircle, Youtube, Code, AlertTriangle, FileText, Download } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const renderContent = () => {
    if (selectedTutorial) {
      return <TutorialDetailView tutorial={selectedTutorial} onBack={() => setSelectedTutorial(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'trilha':
        return <TrilhaView onSelectTutorial={setSelectedTutorial} />;
      case 'canvas':
        return <CanvasView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20 selection:bg-green-200">
      <header className="bg-green-700 text-white p-4 sticky top-0 z-20 shadow-md">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <h1 className="text-xl font-bold tracking-tight">TechTutor</h1>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-green-800 px-2 py-1 rounded-full border border-green-600">
            TechTutor
          </span>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 relative">
        {renderContent()}
      </main>

      {!selectedTutorial && (
        <nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
          <div className="max-w-md mx-auto flex justify-around px-2 py-2">
            <NavItem icon={<Home className="w-6 h-6" />} label="Início" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavItem icon={<PlayCircle className="w-6 h-6" />} label="Trilha de Aulas" isActive={activeTab === 'trilha'} onClick={() => setActiveTab('trilha')} />
            <NavItem icon={<LayoutDashboard className="w-6 h-6" />} label="Sobre o Projeto" isActive={activeTab === 'canvas'} onClick={() => setActiveTab('canvas')} />
          </div>
        </nav>
      )}
    </div>
  );
}

const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 w-24 px-1 py-2 transition-all duration-200 rounded-xl ${isActive ? 'text-green-700 bg-green-50' : 'text-slate-400 hover:text-green-500 hover:bg-slate-50'}`}
    >
      <div className={`${isActive ? 'scale-110 mb-0.5' : 'scale-100'} transition-transform duration-200`}>
        {icon}
      </div>
      <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </button>
  );
};

const HomeView = ({ setActiveTab }) => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
        <Cpu className="w-48 h-48" />
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold mb-2 leading-tight">Eletrônica na Prática.</h2>
        <p className="text-green-100 text-sm mb-6 leading-relaxed">
          Aprenda do zero com os alunos de Engenharia de Controle e Automação do IFMG. Assista no YouTube, acesse materiais exclusivos no App.
        </p>
        <div className="flex gap-3">
          <button onClick={() => setActiveTab('trilha')} className="flex-1 bg-yellow-400 text-yellow-900 px-3 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-yellow-300 transition active:scale-95 flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5" /> Começar a Aprender
          </button>
        </div>
      </div>
    </div>

    {/* Apresentação do Projeto COM O VÍDEO REAL */}
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-600" /> Introdução ao Projeto
        </h3>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">VÍDEO 1</span>
      </div>
      <p className="text-xs text-slate-500 mb-3">Conheça nossa equipe, objetivos e como utilizar este aplicativo em conjunto com nosso canal.</p>
      
      <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-sm">
         {/* Reprodutor Embutido do YouTube */}
         <iframe 
          src=""
          title="Vídeo de Introdução"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        ></iframe>
      </div>
    </div>

    <div className="bg-slate-800 rounded-2xl p-5 text-white shadow-sm flex items-center justify-between">
      <div>
        <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
          <Code className="w-5 h-5 text-green-400" /> Material Exclusivo
        </h4>
        <p className="text-xs text-slate-300 max-w-[250px]">
          Códigos C++, diagramas e listas de materiais estão restritos apenas aos usuários deste app.
        </p>
      </div>
      <div className="bg-slate-700 p-3 rounded-full">
        <FileText className="w-6 h-6 text-green-400" />
      </div>
    </div>

    <div>
      <h3 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider ml-1">Estatísticas da Comunidade</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-extrabold text-green-600">3</span>
          <span className="text-xs text-slate-500 mt-1 font-medium">Módulos Práticos</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-extrabold text-blue-600">100%</span>
          <span className="text-xs text-slate-500 mt-1 font-medium">Gratuito</span>
        </div>
      </div>
    </div>
  </div>
);

// DADOS DOS TUTORIAIS (AGORA COM O SEU VÍDEO)
const tutoriaisData = [
  {
    id: 1,
    videoId: "Video", // <-- ID DO SEU VÍDEO AQUI
    title: "Seu Vídeo de Teste",
    module: "Módulo 1",
    duration: "Assistir",
    desc: "Apresentamos os três pilares que fazem qualquer aparelho funcionar: Tensão, Corrente e Resistência.",
    imgColor: "bg-blue-100 text-blue-600",
    icon: <Zap className="w-8 h-8" />,
    // A linha abaixo puxa a imagem de capa (thumbnail) oficial direto do YouTube usando o ID
    thumbnail: "https://img.youtube.com/vi/NdrGhXoS1uc/hqdefault.jpg", 
    materials: ["Bateria 9V", "Resistor de 1kΩ", "LED", "Protoboard", "Fios"],
    teoria: [
      { titulo: "A Pressão (Tensão / V)", texto: "Imagine uma caixa d'água no alto. Quanto mais alta, mais força a água tem para descer. É o 'empurrão'." },
      { titulo: "O Fluxo (Corrente / I)", texto: "É a quantidade de água (elétrons) que passa pelo cano por segundo." },
      { titulo: "O Registro (Resistência / R)", texto: "Controla a passagem. Ela dificulta o fluxo, como se você fechasse um pouco a torneira." }
    ],
    exclusiveContent: {
      type: "diagrama",
      title: "Diagrama do Circuito (LED Seguríssimo)",
      text: "No App você tem acesso ao esquema elétrico exato. Se ligar o LED direto na bateria de 9V sem o Resistor, a 'pressão' estoura o componente."
    }
  },
  {
    id: 2,
    videoId: "video-falso",
    title: "Leis de Ohm, Multímetro e Segurança",
    module: "Módulo 2",
    duration: "8:45",
    desc: "Aprenda a fórmula mágica V = R x I. Veja como o brilho muda ao trocar o resistor e descubra os perigos de um Curto-Circuito.",
    imgColor: "bg-red-100 text-red-600",
    icon: <AlertTriangle className="w-8 h-8" />,
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: ["Bateria 9V", "Resistores (220Ω, 1kΩ, 10kΩ)", "LED", "Multímetro"],
    teoria: [
      { titulo: "O Triângulo Mágico", texto: "V = R * I. Se a tensão (Bateria) é a mesma, e você aumenta a Resistência, a Corrente que passa pelo LED diminui (brilha menos)." },
      { titulo: "Associação em Série", texto: "Colocar um resistor atrás do outro soma as resistências. O caminho fica duas vezes mais difícil para a corrente." }
    ],
    exclusiveContent: {
      type: "codigo",
      title: "Guia de Segurança (Apenas App)",
      text: "Regra 1: Energize por último. Regra 2: Cuidado com calor (se esquentou, há curto).",
      code: "// FÓRMULA PARA CALCULAR SEU RESISTOR:\n// R = (V_bateria - V_led) / Corrente_led\n\nfloat V_bat = 9.0;\nfloat V_led = 2.0;\nfloat I_led = 0.02;\n\nfloat ResistorIdeal = (V_bat - V_led) / I_led;"
    }
  }
];

const TrilhaView = ({ onSelectTutorial }) => (
  <div className="space-y-4 animate-in fade-in duration-500 pb-8">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800">Trilha de Aprendizado</h2>
      <p className="text-sm text-slate-500">Siga a ordem cronológica para construir sua base em eletrônica.</p>
    </div>

    <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
      {tutoriaisData.map((tutorial, index) => (
        <div key={tutorial.id} className="relative pl-6">
          <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-green-500 ring-4 ring-slate-50"></div>
          
          <div 
            onClick={() => onSelectTutorial(tutorial)}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:border-green-500 hover:shadow-md transition active:scale-[0.98] group flex flex-col"
          >
            <div className="aspect-video bg-slate-100 relative flex items-center justify-center overflow-hidden border-b border-slate-100">
              <img 
                src={tutorial.thumbnail} 
                alt={tutorial.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300"></div>
              
              <Youtube className="w-12 h-12 text-white/90 drop-shadow-md relative z-10 group-hover:scale-110 transition duration-300" />
              
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
                {tutorial.duration}
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-1 rounded uppercase tracking-wider">
                  {tutorial.module}
                </span>
              </div>
              
              <h3 className="font-bold text-slate-800 text-base leading-tight mb-2 group-hover:text-green-700 transition-colors">
                {tutorial.title}
              </h3>
              
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {tutorial.desc}
              </p>
            </div>

            <div className="px-4 py-3 bg-slate-50 text-xs font-bold text-green-600 flex justify-between items-center border-t border-slate-100 mt-auto">
              Acessar Módulo e Material Extra 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      ))}
      
      <div className="relative pl-6 pt-2 opacity-50">
         <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-50"></div>
         <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-50/50">
            <Cpu className="w-8 h-8 text-slate-400 mb-2" />
            <span className="text-sm font-bold text-slate-500">Módulos de Arduino</span>
            <p className="text-xs text-slate-400 mt-1">Programação e códigos (Em breve)</p>
         </div>
      </div>
    </div>
  </div>
);

const TutorialDetailView = ({ tutorial, onBack }) => (
  <div className="bg-white min-h-screen -m-4 p-4 animate-in slide-in-from-right-4 duration-300 z-50 pb-24">
    
    <div className="flex justify-between items-center mb-6 sticky top-0 bg-white/90 backdrop-blur py-2 z-10 border-b border-slate-100">
      <button onClick={onBack} className="flex items-center gap-1 text-slate-600 hover:text-green-700 font-bold text-sm bg-slate-100 py-1.5 px-3 rounded-full">
        <ArrowLeft className="w-4 h-4" /> Voltar
      </button>
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{tutorial.module}</span>
    </div>

    <div className="mb-6">
      <h2 className="text-2xl font-extrabold text-slate-800 mb-2 leading-tight">{tutorial.title}</h2>
      <p className="text-slate-600 text-sm">{tutorial.desc}</p>
    </div>

    {/* AQUI ESTÁ O PLAYER REAL DE VÍDEO DENTRO DA AULA */}
    <div className="mb-8">
      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative shadow-md border-2 border-slate-800">
        {tutorial.videoId !== "video-falso" ? (
          <iframe 
            src={`https://www.youtube.com/embed/${tutorial.videoId}?rel=0`}
            title={tutorial.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs">
            [ Vídeo Não Disponível ]
          </div>
        )}
      </div>
      <p className="text-[10px] text-center text-slate-400 mt-2">Assista ao vídeo da aula antes de consultar o material de apoio.</p>
    </div>

    <div className="mb-8">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
        <BookOpen className="w-5 h-5 text-blue-500" /> Resumo Teórico
      </h3>
      <div className="space-y-4">
        {tutorial.teoria.map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <h4 className="font-bold text-sm text-slate-700 mb-1">{item.titulo}</h4>
            <p className="text-xs text-slate-600">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-green-50/50 border border-green-100 rounded-xl p-4 mb-8">
      <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
        <Zap className="w-4 h-4" /> Materiais Necessários
      </h3>
      <ul className="grid grid-cols-2 gap-2">
        {tutorial.materials.map((mat, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div> {mat}
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700 relative">
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-2 flex items-center gap-2">
        <Code className="w-4 h-4 text-white" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">Exclusivo do App</span>
      </div>
      
      <div className="p-4">
        <h4 className="font-bold text-white text-sm mb-2">{tutorial.exclusiveContent.title}</h4>
        <p className="text-slate-300 text-xs mb-4 leading-relaxed">{tutorial.exclusiveContent.text}</p>
        
        {tutorial.exclusiveContent.type === "codigo" && (
          <div className="bg-black/50 rounded-lg p-3 font-mono text-[10px] text-green-400 overflow-x-auto border border-slate-700 relative group">
            <pre>{tutorial.exclusiveContent.code}</pre>
            <button className="absolute top-2 right-2 bg-slate-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition">
              <Download className="w-3 h-3" />
            </button>
          </div>
        )}

        {tutorial.exclusiveContent.type === "diagrama" && (
          <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 text-xs flex-col gap-2">
            <Cpu className="w-8 h-8 opacity-50" />
            [ Imagem do Esquema Elétrico Aqui ]
          </div>
        )}
      </div>
    </div>
  </div>
);

const CanvasView = () => (
  <div className="space-y-4 animate-in fade-in duration-500 pb-12">
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
        <LayoutDashboard className="w-6 h-6 text-blue-600" /> Sobre o Projeto
      </h2>
      <p className="text-sm text-slate-500">Estrutura oficial e acadêmica do TechTutor (IFMG Cidadã).</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <CanvasBlock title="Objetivo Central" icon="🎯" color="border-green-200 bg-green-50 text-green-900">
        <p className="text-xs mt-2">Difundir o conhecimento prático de Eletrônica, Automação e Robótica para a comunidade através de metodologias acessíveis (videoaulas integradas com aplicativo de apoio).</p>
      </CanvasBlock>

      <CanvasBlock title="Estratégia de Canais" icon="📡" color="border-red-200 bg-red-50 text-red-900">
        <ul className="list-disc pl-4 text-xs space-y-1 mt-2">
          <li><strong>YouTube:</strong> Atração do público, explicações visuais, analogias dinâmicas.</li>
          <li><strong>Aplicativo (App):</strong> Retenção, diagramas detalhados, códigos-fonte e segurança.</li>
        </ul>
      </CanvasBlock>

      <CanvasBlock title="Atividades Chave" icon="⚙️" color="border-blue-200 bg-blue-50 text-blue-900 md:col-span-2">
        <ul className="list-disc pl-4 text-xs space-y-1 mt-2">
          <li>Estruturação e roteirização do currículo (Tensão, Corrente, Arduino).</li>
          <li>Gravação e edição de aulas diretas.</li>
          <li>Desenvolvimento de Front-end e Lógica de Roteamento (Back-end) do Aplicativo.</li>
        </ul>
      </CanvasBlock>
    </div>

    <div className="mt-8 text-center bg-slate-100 p-4 rounded-xl border border-slate-200">
      <p className="text-xs font-bold text-slate-600 uppercase">Equipe Desenvolvedora</p>
      <p className="text-xs text-slate-500 mt-1">Guilherme Alexandrino, Guilherme Couto, Junior Silva e Riquelme Rodrigues</p>
      <p className="text-xs text-slate-400 mt-1 font-medium">Orientação: Prof. Wanderson</p>
    </div>
  </div>
);

const CanvasBlock = ({ title, icon, color, children }) => (
  <div className={`p-4 rounded-xl border shadow-sm ${color}`}>
    <h4 className="font-bold text-sm flex items-center gap-1 border-b border-black/5 pb-1">
      <span>{icon}</span> {title}
    </h4>
    {children}
  </div>
);
