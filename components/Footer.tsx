
import React from 'react';
import { GraduationCap, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c5a059] rounded-lg flex items-center justify-center">
                <GraduationCap className="text-black" size={24} />
              </div>
              <span className="text-xl font-bold tracking-widest gold-gradient uppercase">Success Educare</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Defining the future of luxury education through technology, mentorship, and uncompromising standards.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-[#c5a059] transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-[#c5a059] transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-[#c5a059] transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:text-[#c5a059] transition-all"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">The Academy</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Course Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive MBA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Philosophy</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentorship Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold mb-4 tracking-widest uppercase text-xs">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Excellence awaits..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 text-sm focus:outline-none focus:border-[#c5a059]/50" 
              />
              <button className="bg-[#c5a059] text-black px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Join 10k+ elite professionals</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-white/20 text-[10px] uppercase tracking-[0.3em]">
          <p>© 2024 Success Educare Group. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
