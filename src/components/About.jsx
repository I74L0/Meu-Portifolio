import React from 'react';
import { Terminal, Server, Layout, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="px-6 scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
              Sobre mim <span className="w-24 h-1 bg-purple-500 rounded-full inline-block"></span>
            </h2>
            
            <div className="text-slate-300 space-y-4 leading-relaxed text-lg">
              <p>
                Olá! Sou estudante de Ciência da Computação e apaixonado por transformar ideias em soluções digitais eficientes e escaláveis.
              </p>
              <p>
                Iniciei minha jornada na TI lidando diretamente com infraestrutura e suporte, o que me deu uma base sólida em sistemas operacionais, redes e na mentalidade de resolução ágil de problemas. No entanto, foi na <strong className="text-purple-400">automação e no desenvolvimento de software</strong> que encontrei meu verdadeiro propósito. Descobri que em vez de apenas consertar sistemas, eu queria construí-los.
              </p>
              <p>
                Estou sempre em busca de novos desafios, participando ativamente de hackathons, projetos práticos e grupos de estudo. Se você procura um desenvolvedor determinado, com facilidade para aprender novas stacks e forte base analítica, vamos nos conectar!
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <Server className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Backend</h3>
              <p className="text-slate-400 text-sm">Desenvolvimento de APIs REST robustas utilizando Python (Django/DRF), lógicas complexas e banco de dados.</p>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <Layout className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Frontend & Mobile</h3>
              <p className="text-slate-400 text-sm">Criação de interfaces responsivas e de alta usabilidade utilizando React (Vite/SCSS) e Flutter.</p>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <Terminal className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Automação</h3>
              <p className="text-slate-400 text-sm">Uso de PowerShell e Bash para automatizar processos de TI, convertendo tarefas manuais em scripts.</p>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <Database className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-100 mb-2">DevOps</h3>
              <p className="text-slate-400 text-sm">Utilização de Docker e Nginx para estruturar ambientes de desenvolvimento e deploy eficientes.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
