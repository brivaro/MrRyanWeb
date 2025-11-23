import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-space-950 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4"
          >
            <Award size={14} className="text-yellow-500" />
            <span className="text-xs font-bold text-yellow-500 tracking-wider uppercase">Reconocimiento del Sistema</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Logros Desbloqueados
          </motion.h2>
        </div>

        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative group"
        >
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-space-900 border border-yellow-500/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden">
            
            {/* Decorative Shine */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
            
            {/* Icon Container */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative w-24 h-24 bg-gradient-to-b from-space-800 to-space-950 border border-yellow-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)] group-hover:scale-105 transition-transform duration-500">
                <Trophy size={40} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-space-900 border border-yellow-500/50 rounded-full p-1.5">
                <Sparkles size={16} className="text-yellow-400" />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1 relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-400">
                🏆 FINALISTA PREMIOS DE INTERNET
              </h3>
              <h4 className="text-yellow-500/90 font-medium text-lg mb-4 tracking-wide">
                Reconocimiento a la Excelencia en Divulgación Científica y TIC.
              </h4>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg border-l-2 border-yellow-500/20 pl-4 md:pl-0 md:border-l-0">
                Seleccionado entre las mejores iniciativas de internet. Un paso gigante hacia la consolidación del canal como referente educativo y tecnológico en la comunidad hispana.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Achievements;