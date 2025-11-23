import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Atom, ChevronsDown } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-space-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        
        {/* Abstract "Neural" Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse-slow delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/50 border border-neon-cyan/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:border-neon-cyan/50 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          <span className="text-xs font-mono font-bold text-neon-cyan tracking-widest">SISTEMAS ONLINE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 mb-6 drop-shadow-2xl"
        >
          DESCUBRE EL FUTURO <br />
          CON <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-[0_0_20px_rgba(189,0,255,0.3)]">MR RYAN</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Explorando los <span className="text-neon-purple font-medium drop-shadow-[0_0_8px_rgba(189,0,255,0.5)]">misterios del universo</span> y los avances de la <span className="text-neon-cyan font-medium drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">Inteligencia Artificial</span> que construyen nuestra realidad. <span className="text-white font-bold tracking-wide">Bienvenido</span> a la vanguardia.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#news">
            <Button variant="primary" icon={<ChevronRight size={18} />}>
              Ver Últimas Noticias IA
            </Button>
          </a>
          <a href="https://youtube.com/@mrryanoficial" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" icon={<Atom size={18} />}>
              Unirse a la Comunidad
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase animate-pulse">Scroll to explore</span>
        
        <a href="#about" className="group">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1 bg-space-950/50 backdrop-blur-sm group-hover:border-neon-cyan transition-colors duration-300">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-1.5 bg-neon-cyan rounded-full"
            />
          </div>
          <div className="flex justify-center -mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <ChevronsDown size={20} className="text-neon-cyan animate-bounce" />
          </div>
        </a>
      </motion.div>

      {/* Decorative Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-space-950 via-space-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none transform perspective-[500px] rotateX(20deg) opacity-40"></div>
    </section>
  );
};

export default Hero;