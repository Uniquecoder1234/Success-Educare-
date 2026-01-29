
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Loader2, Sparkles, BrainCircuit, Mic } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIConsultantProps {
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Success is a sequence of deliberate decisions. I am the Educare Intelligence, here to refine your strategy. What objective shall we address?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await getAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "System calibration required. Please rephrase." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Premium signal lost. Reconnecting..." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-figma-fade">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl h-[85vh] bg-[#070707] border border-white/10 rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-figma-fade">
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c5a059]/5 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative p-8 md:p-10 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner">
              <BrainCircuit className="text-[#c5a059]" size={28} />
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-tight text-white/90">AI Strategy Suite</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] text-[#c5a059] font-bold uppercase tracking-[0.3em]">Neural Link: Stable</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all border border-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center mt-1">
                    <Sparkles className="text-[#c5a059]" size={18} />
                  </div>
                )}
                <div className={`space-y-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-6 rounded-[32px] text-base leading-relaxed font-light ${
                    msg.role === 'user' 
                      ? 'bg-[#c5a059] text-black font-semibold rounded-tr-none shadow-xl shadow-[#c5a059]/10' 
                      : 'bg-white/[0.03] text-white/80 border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold px-2">
                    {msg.role === 'user' ? 'Candidate' : 'Educare AI'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-6 items-center">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center animate-spin">
                  <Loader2 className="text-[#c5a059]" size={18} />
                </div>
                <div className="text-[11px] text-[#c5a059] font-bold uppercase tracking-[0.4em] animate-pulse">
                  Synthesizing Premium Insights...
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="relative p-10 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-[#c5a059]/10 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about executive placement or strategic learning..."
                  className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-8 pr-16 focus:outline-none focus:border-[#c5a059]/40 focus:bg-white/[0.07] transition-all text-sm font-light placeholder:text-white/20 shadow-inner"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/20 hover:text-[#c5a059] transition-colors">
                  <Mic size={20} />
                </button>
              </div>
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="w-14 h-14 flex items-center justify-center bg-[#c5a059] text-black rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-30 shadow-xl shadow-[#c5a059]/20"
              >
                <Send size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-10">
            {['Career Path', 'Mentorship', 'MBA Inquiry'].map(label => (
              <button 
                key={label}
                onClick={() => setInput(`I want to learn about ${label}`)}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 hover:text-[#c5a059] transition-all"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
