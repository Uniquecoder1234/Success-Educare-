
import React, { useState, useEffect } from 'react';
import { GraduationCap, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center items-center px-4 pt-6 ${isScrolled ? 'md:pt-4' : 'md:pt-8'}`}>
      <nav className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full transition-all duration-500 border ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl scale-95 md:scale-100' 
          : 'bg-white/5 backdrop-blur-md border-white/5'
      }`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center shadow-lg shadow-[#c5a059]/20 group-hover:rotate-[360deg] transition-transform duration-1000">
            <GraduationCap className="text-black" size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-sm font-bold tracking-widest text-white uppercase font-serif">Success</span>
            <span className="text-[10px] font-medium tracking-[0.3em] gold-gradient uppercase">Educare</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Academy', 'Vision', 'Portfolio', 'Network'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#c5a059] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenAI}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-[#c5a059] transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Consultant</span>
          </button>
          <button className="md:hidden p-2 text-white/70">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
