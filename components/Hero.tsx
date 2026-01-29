
import React from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-6 pt-32 text-center overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
      
      <div className="max-w-6xl space-y-12 relative">
        <div className="animate-figma-fade opacity-0 [animation-delay:200ms]">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <Award size={14} className="text-[#c5a059]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
              The Standard of Educational Luxury
            </span>
          </div>
        </div>

        <h1 className="text-7xl md:text-[110px] font-serif leading-[1.05] tracking-tight animate-figma-fade opacity-0 [animation-delay:400ms]">
          Elevate Your <br />
          <span className="italic gold-gradient font-light">Legacy.</span>
        </h1>

        <div className="animate-figma-fade opacity-0 [animation-delay:600ms]">
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light font-serif italic text-balance">
            "A sanctuary for high-achievers, where sophisticated technology meets the wisdom of world-class masters."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 animate-figma-fade opacity-0 [animation-delay:800ms]">
          <button 
            onClick={onGetStarted}
            className="group relative px-10 py-5 bg-[#c5a059] text-black font-bold text-[13px] tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#c5a059]/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              Apply to Academy <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <button className="flex items-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase transition-all">
            <Play size={16} className="fill-white" />
            Watch Film
          </button>
        </div>
      </div>

      {/* Decorative Branding Elements */}
      <div className="absolute bottom-20 left-12 hidden lg:block text-left space-y-2 opacity-30">
        <p className="text-[9px] tracking-[0.5em] font-bold uppercase">Industry Focus</p>
        <p className="text-xs font-serif italic">Finance • AI • Leadership</p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#c5a059] animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
