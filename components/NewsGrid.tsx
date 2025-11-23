import React from 'react';
import Section from './ui/Section';
import { NEWS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio } from 'lucide-react';

const NewsGrid: React.FC = () => {
  return (
    <Section id="news" className="bg-space-950">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 text-neon-cyan font-mono text-sm">
            <Radio size={16} className="animate-pulse" />
            <span>TRANSMISIÓN EN VIVO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Noticias IA & Tech</h2>
        </div>
        <a 
          href="https://www.youtube.com/@mrryanoficial/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          Ver archivo completo <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {NEWS.map((item, index) => (
          <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block group relative bg-space-900 rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          >
            {/* Image */}
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-neon-purple bg-neon-purple/10 px-2 py-1 rounded">
                  {item.tag}
                </span>
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight mb-4 group-hover:text-neon-cyan transition-colors line-clamp-2">
                {item.title}
              </h3>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-neon-cyan" size={20} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <a 
          href="https://www.youtube.com/@mrryanoficial/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          Ver archivo completo <ArrowUpRight size={16} />
        </a>
      </div>
    </Section>
  );
};

export default NewsGrid;