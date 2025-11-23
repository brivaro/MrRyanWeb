import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "mrryan.oficial@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-8 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-purple/20 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-20 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Inicia Transmisión</h2>
        <p className="text-slate-400 mb-10 max-w-xl text-lg">
          ¿Tienes una propuesta tecnológica, un misterio por resolver o una colaboración? Contacta directamente con la base central.
        </p>

        {/* Futuristic Email Card */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan rounded-2xl blur opacity-20 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
          
          <div className="relative bg-space-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 pr-4 flex items-center gap-4 group-hover:border-white/30 transition-all shadow-2xl">
            <a href={`mailto:${email}`} className="flex items-center gap-4 pl-4 py-3">
              <div className="bg-white/10 p-3 rounded-xl text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan/20 transition-colors">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-0.5">Frecuencia Segura</div>
                <div className="text-xl md:text-2xl text-white font-bold tracking-tight">{email}</div>
              </div>
            </a>
            
            <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
            
            <button 
              onClick={handleCopy}
              className="p-3 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-colors relative"
              title="Copiar Email"
            >
              <AnimatePresence mode='wait'>
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={20} className="text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-slate-600">
        <p>Mr Ryan © 2025. La exploración nunca termina.</p>
        
        {/* Hidden Legal Links for now */}
        {/* 
        <div className="flex gap-6 mt-4 md:mt-0 font-medium">
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div> 
        */}
      </div>
    </footer>
  );
};

export default Footer;