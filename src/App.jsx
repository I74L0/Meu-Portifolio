import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export const EMAIL_ADDRESS = "italo.dossantos066@gmail.com";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-purple-950/20 -z-10 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex flex-col gap-24 md:gap-32 pb-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-slate-400 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Ítalo dos Santos Oliveira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
