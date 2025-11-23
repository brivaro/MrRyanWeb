import React from 'react';
import Section from './ui/Section';
import { POPULAR_VIDEOS } from '../constants';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoGallery: React.FC = () => {
  return (
    <Section id="videos" className="bg-space-950 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Hall of Fame</h2>
        <p className="text-slate-400">Los vídeos más impactantes que han definido nuestra comunidad. Ciencia, paradojas y evolución.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {POPULAR_VIDEOS.map((video, index) => (
          <motion.a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group cursor-pointer block"
          >
            <div className="relative rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-neon-cyan/50 transition-all shadow-lg shadow-black/50">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-neon-cyan group-hover:border-neon-cyan transition-all duration-300">
                  <Play className="fill-white text-white group-hover:fill-black group-hover:text-black w-5 h-5 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-xs font-mono text-white rounded">
                {video.duration}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors line-clamp-2">
              {video.title}
            </h3>
            <p className="text-sm text-slate-500 font-mono">
              {video.views}
            </p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default VideoGallery;