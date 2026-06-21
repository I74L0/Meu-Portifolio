import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import perfilImg from '../assets/perfil.jpg';
import { EMAIL_ADDRESS } from '../App';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 md:pt-48 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <div className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-2">
              Olá, eu sou
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100">
              Ítalo dos <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Santos Oliveira
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl">
              Desenvolvedor de Software | Fullstack | Python • Django • React • C# • Flutter
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projetos" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20">
                Ver meus projetos <ArrowRight size={18} />
              </a>
              <a href="#contato" className="flex items-center gap-2 glass hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-medium transition-all">
                Entrar em contato
              </a>
            </div>
            
            <div className="flex items-center gap-5 pt-6 text-slate-400">
              <a href="https://github.com/I74L0" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors p-2 -ml-2">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/i74l0/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors p-2">
                <FaLinkedin size={24} />
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-purple-400 transition-colors p-2">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-sm md:max-w-md relative">
            {/* Imagem de Perfil Mockada com Blur e Efeitos */}
            <div className="relative z-10 w-full aspect-square rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-slate-800/50 flex items-center justify-center">
                 <img src={perfilImg} alt="Ítalo" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 blur-[100px] -z-10 rounded-full"></div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 font-bold text-xl">🐍</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Backend</p>
                <p className="font-bold text-sm">Python & Django</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-xl">⚛️</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Frontend</p>
                <p className="font-bold text-sm">React & Vite</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
