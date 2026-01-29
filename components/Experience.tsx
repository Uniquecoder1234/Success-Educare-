
import React from 'react';
import { Shield, Target, Award, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  const features = [
    {
      icon: <Shield className="text-[#c5a059]" size={32} />,
      title: "Exclusive Mentorship",
      description: "Direct access to world-class industry pioneers and academic visionaries."
    },
    {
      icon: <Target className="text-[#c5a059]" size={32} />,
      title: "Tailored Strategy",
      description: "Bespoke learning paths designed around your unique professional goals."
    },
    {
      icon: <Award className="text-[#c5a059]" size={32} />,
      title: "Premium Certification",
      description: "Credentials recognized by the world's most prestigious institutions."
    },
    {
      icon: <Globe className="text-[#c5a059]" size={32} />,
      title: "Global Network",
      description: "An elite circle of alumni spanning 40+ countries and major industries."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">
              A Culture of <span className="gold-gradient">Uncompromising</span> Standards.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              At Success Educare, we believe education is more than just data—it's a transformative experience. 
              Our platform bridges the gap between conventional learning and the elite performance required 
              at the highest levels of global leadership.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {features.map((f, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-[#c5a059]/30 transition-all">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#c5a059] transition-colors">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden gold-border">
              <img src="https://picsum.photos/seed/luxuryedu/800/800" alt="Luxury Education" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a059]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
