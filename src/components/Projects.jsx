import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import petcareImg from '../assets/images/PetCare+.png';
import jotanunesImg from '../assets/images/Jotanunes.jpg';
import meusocioImg from '../assets/images/Splash Screen.png';

const Projects = () => {
  const projects = [
    {
      title: "PetCare+ | Gestão de Saúde Pet",
      description: "Desenvolvimento do front-end móvel completo de um aplicativo voltado para o agendamento de consultas, histórico de vacinação e acompanhamento de saúde de animais de estimação. Projetei a interface (UI/UX) diretamente no Figma e implementei com Flutter.",
      techs: ["Flutter", "Dart", "Figma", "Mobile", "UI/UX"],
      github: "https://github.com",
      link: "#",
      image: petcareImg
    },
    {
      title: "Gerenciador Jotanunes | Rastreabilidade",
      description: "Aplicação Web Fullstack para resolver problemas de rastreabilidade de materiais e gestão ambiental em grandes canteiros de obras de construção civil. Interface moderna em React com API REST em Django integrando controle de estoque.",
      techs: ["React", "Django", "Python", "Docker", "SQL"],
      github: "https://github.com/I74L0/Gerenciador-Jotanunes",
      link: "#",
      image: jotanunesImg
    },
    {
      title: "Meu Sócio | App de Gestão Financeira (MEI)",
      description: "Planejamento arquitetural e desenvolvimento do escopo de um sistema financeiro móvel focado na desburocratização da contabilidade de microempreendedores individuais, com requisitos de fluxo de caixa e conciliação bancária.",
      techs: ["Engenharia de Requisitos", "Arquitetura", "Mobile"],
      github: "https://www.figma.com/design/L390yc7lz96uXPCfSSoJTR/Meu-S%C3%B3cio?node-id=32-11&t=mP3PywQUYiOBdfg6-1",
      link: "https://www.figma.com/proto/L390yc7lz96uXPCfSSoJTR/Meu-S%C3%B3cio?node-id=225-3396&t=mP3PywQUYiOBdfg6-1",
      image: meusocioImg
    }
  ];

  return (
    <section id="projetos" className="px-6 scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          Projetos em Destaque <span className="w-24 h-1 bg-purple-500 rounded-full inline-block"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all hover:-translate-y-2 group flex flex-col h-full">
              {/* Imagem do projeto */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent z-10"></div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <span className="text-6xl">💻</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-purple-400 text-sm transition-colors font-medium">
                    <FaGithub size={16} /> Código
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-purple-400 text-sm transition-colors font-medium">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
