import React from 'react';
import Section from './ui/Section';
import { SOCIAL_LINKS, MEMBERSHIP_LINK } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Crown } from 'lucide-react';
import Button from './ui/Button';

const SocialHub: React.FC = () => {
  // Filter out the "Miembro del Canal" from the main grid to display it separately if desired, 
  // but for the "Command Center" feel, a grid is good. 
  // However, let's make the Membership distinct.
  const regularLinks = SOCIAL_LINKS.filter(link => link.name !== "Miembro del Canal");

  return (
    <Section id="social" className="bg-space-950">
      <div className="flex flex-col items-center mb-12">
        <div className="p-3 bg-white/5 rounded-full mb-6 border border-white/10 animate-float">
          <Globe className="text-neon-cyan w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-center">
          Command Center
        </h2>
        <p className="text-slate-400 mt-4 text-center max-w-md">
          Conecta con la señal. Todas las frecuencias abiertas.
        </p>
      </div>

      {/* Membership Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-10"
      >
        <a 
          href={MEMBERSHIP_LINK}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative block group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-r from-space-900 via-space-800 to-space-900 border border-yellow-500/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 group-hover:border-yellow-500/60 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-yellow-500/10 rounded-full text-yellow-500">
                <Crown size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Conviértete en Miembro</h3>
                <p className="text-slate-400 text-sm">Disfruta de ventajas exclusivas y apoya la divulgación.</p>
              </div>
            </div>
            <div className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full text-sm uppercase tracking-wide group-hover:bg-yellow-400 transition-colors">
              Unirse Ahora
            </div>
          </div>
        </a>
      </motion.div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {regularLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex items-center gap-4 p-4 rounded-lg bg-space-900 border border-white/5 hover:bg-space-800 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            
            <div className={`p-3 rounded-md bg-space-950 border border-white/10 group-hover:scale-110 transition-transform ${link.color}`}>
              <link.icon size={24} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-base leading-none mb-1 truncate">{link.name}</h3>
              <p className="text-slate-500 text-xs font-mono group-hover:text-slate-300 truncate">{link.handle}</p>
            </div>

            <ExternalLink size={16} className="text-slate-600 group-hover:text-white transition-colors shrink-0" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default SocialHub;