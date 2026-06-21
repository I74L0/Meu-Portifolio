import React from 'react';
import { Mail, Send, Phone } from 'lucide-react';
import { EMAIL_ADDRESS } from '../App';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simples ação visual (poderia integrar com formspree, emailjs, etc)
    alert("Obrigado pelo contato! Esta é uma demonstração do portfólio.");
  };

  return (
    <section id="contato" className="px-6 scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          Vamos Conversar? <span className="w-24 h-1 bg-purple-500 rounded-full inline-block"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="flex-1 space-y-8">
            <p className="text-slate-300 text-lg">
              Estou sempre aberto a novas oportunidades, parcerias e projetos desafiadores. Sinta-se à vontade para me enviar uma mensagem!
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${EMAIL_ADDRESS}`} 
                className="flex items-center gap-4 glass p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-full group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400">E-mail Direto</h4>
                  <p className="text-slate-100 font-medium">{EMAIL_ADDRESS}</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/5579999997796?text=Olá%20Ítalo,%20vi%20seu%20portfólio!" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass p-4 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-full group-hover:bg-green-500/20 transition-colors">
                  <Phone className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400">WhatsApp</h4>
                  <p className="text-slate-100 font-medium">Iniciar conversa</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="glass p-6 md:p-8 rounded-2xl border border-slate-700/50 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-500/20"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
