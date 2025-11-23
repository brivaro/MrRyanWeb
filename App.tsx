import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import NewsGrid from './components/NewsGrid';
import VideoGallery from './components/VideoGallery';
import SocialHub from './components/SocialHub';
import Footer from './components/Footer';
import { SHOW_HALL_OF_FAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-space-950 min-h-screen text-slate-200 selection:bg-neon-cyan selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <NewsGrid />
        {SHOW_HALL_OF_FAME && <VideoGallery />}
        <SocialHub />
      </main>
      <Footer />
    </div>
  );
};

export default App;