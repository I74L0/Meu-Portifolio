import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor de Software / Fullstack",
      company: "Construtora Jotanunes",
      period: "Junho 2025 – Dezembro 2025",
      description: "Atuei no desenvolvimento de uma solução web fullstack moderna voltada para a otimização da gestão de ativos, controle de obras e materiais da construtora, substituindo planilhas e processos manuais.",
      achievements: [
        "Desenvolvi e implementei uma API REST robusta utilizando Python, Django e DRF com lógicas avançadas de persistência (upserts) e transações atômicas.",
        "Criei uma SPA altamente responsiva e fluida utilizando React e Vite, focando na melhoria de UX para equipes de campo.",
        "Estruturei ambientes com Docker e configurei Nginx como proxy reverso para otimizar roteamento e performance."
      ],
      techs: ["Python", "Django", "React", "Docker", "Nginx"]
    },
    {
      title: "Automação e Infraestrutura de TI",
      company: "Banese Card",
      period: "Outubro 2025 – Atualmente",
      description: "Foco na otimização de infraestrutura interna através de processos automatizados e gestão de sistemas.",
      achievements: [
        "Desenvolvi scripts personalizados em PowerShell para automatizar formatação e provisionamento de máquinas, reduzindo drasticamente o tempo manual.",
        "Otimizei rotinas de administração integrando consultas via Active Directory.",
        "Suporte avançado e diagnóstico de redes locais, corrigindo gargalos de conectividade."
      ],
      techs: ["PowerShell", "Shell Script", "Active Directory", "Windows Admin"]
    },
    {
      title: "Estagiário de Suporte de TI / Redes",
      company: "EMURB",
      period: "Abril 2024 – Outubro 2025",
      description: "Suporte técnico de hardware, rede e administração de sistemas.",
      achievements: [
        "Manutenção preventiva de computadores e periféricos, garantindo alta disponibilidade.",
        "Administração de usuários, acessos e permissões no Active Directory.",
        "Correções em infraestrutura física e lógica de rede e segurança de arquivos."
      ],
      techs: ["Active Directory", "Redes", "Suporte Técnico"]
    }
  ];

  return (
    <section id="experiencia" className="px-6 scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          Experiência Profissional <span className="w-24 h-1 bg-purple-500 rounded-full inline-block"></span>
        </h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-purple-500 text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="font-bold text-xl text-slate-100">{exp.title}</h3>
                  <div className="flex items-center justify-between flex-wrap gap-2 text-sm text-purple-400 font-medium">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1 text-slate-400"><Calendar size={14} /> {exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 mb-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                  {exp.techs.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
