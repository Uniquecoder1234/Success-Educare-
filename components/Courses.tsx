
import React from 'react';
import { ArrowUpRight, Clock, Users } from 'lucide-react';

const courses = [
  {
    category: "Mastery",
    title: "Global Leadership Foundations",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    price: "$4,500",
    stats: { time: "12 Weeks", members: "Elite Only" }
  },
  {
    category: "Strategic",
    title: "Advanced Capital Markets",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    price: "$6,200",
    stats: { time: "16 Weeks", members: "Limited" }
  },
  {
    category: "Innovate",
    title: "AI Strategy for Executives",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    price: "$5,800",
    stats: { time: "10 Weeks", members: "Open" }
  }
];

const Courses: React.FC = () => {
  return (
    <section id="academy" className="py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="w-12 h-[2px] bg-[#c5a059]" />
            <h2 className="text-5xl md:text-6xl font-serif">Academy <span className="gold-gradient italic">Curriculum</span></h2>
            <p className="text-white/40 font-light text-lg">A selection of our most sought-after programs for the discerning professional.</p>
          </div>
          <button className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c5a059] border-b border-[#c5a059]/30 pb-2 hover:text-white hover:border-white transition-all">
            Browse All Chapters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] rounded-[40px] border border-white/5 overflow-hidden flex flex-col transition-all duration-500 hover:border-[#c5a059]/40 hover:shadow-2xl hover:shadow-[#c5a059]/5">
              <div className="aspect-[5/4] overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5">
                    <Clock size={10} className="text-[#c5a059]" />
                    <span className="text-[9px] font-bold tracking-widest text-white/80 uppercase">{course.stats.time}</span>
                  </div>
                </div>
              </div>

              <div className="p-10 space-y-6 flex-1 flex flex-col relative -mt-8 bg-[#0a0a0a] rounded-t-[40px]">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c5a059]">{course.category}</span>
                  <h3 className="text-3xl font-serif leading-tight">{course.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-white/30">
                   <div className="flex items-center gap-1.5">
                    <Users size={14} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{course.stats.members}</span>
                   </div>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-center border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Investment</span>
                    <span className="text-white font-bold text-2xl tracking-tight">{course.price}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
