import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { STATS } from '../constants';
import { Cpu } from 'lucide-react';
import CountUp from './ui/CountUp';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-space-900 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 text-neon-purple font-mono text-sm">
            <Cpu size={16} />
            <span>IDENTIDAD DEL SISTEMA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Misión & Visión
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              <strong className="text-white">Misión:</strong> Llevarte las historias que transforman nuestra visión del mundo. OpenAI, Tesla, Meta y las maravillas del cosmos.
            </p>
            <p>
              <strong className="text-white">Visión:</strong> Inspirar a millones a explorar el conocimiento. Descubre, piensa y diviértete.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, index) => {
            // Parse value to number for animation
            const numericValue = parseFloat(stat.value);
            // Check if it has decimals
            const hasDecimals = stat.value.includes('.');
            const decimals = hasDecimals ? 1 : 0;
            const isNumber = !isNaN(numericValue);

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-space-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-neon-cyan/30 transition-colors"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/5 to-transparent -mr-4 -mt-4 transform rotate-45" />
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors flex items-baseline">
                  {stat.prefix && <span className="text-2xl opacity-50 mr-1">{stat.prefix}</span>}
                  
                  {isNumber ? (
                    <CountUp value={numericValue} decimals={decimals} />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                  
                  {stat.suffix && <span className="text-2xl text-neon-purple ml-1">{stat.suffix}</span>}
                </h3>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
};

export default About;