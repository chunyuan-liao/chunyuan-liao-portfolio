'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { FaGithub, FaLinkedin, FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: 'course', name: 'Course Reviews' },
    { id: 'quant', name: 'Quant Experiences' },
    { id: 'notes', name: 'Random Notes' },
  ];

  const interests = [
    { name: 'Fitness', math: '\\text{Fitness}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: 'Cooking', math: '\\text{Baking \\& Culinary}' },
  ];

  return (
    <div className="flex h-screen font-sans antialiased">
      
      {/* --- Sidebar --- */}
      <aside className="w-80 border-r border-[#2a2a2a] flex flex-col p-10 fixed h-full z-20 bg-[#050505] text-gray-100">
        <div className="mb-16">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            <InlineMath math="\mathbf{Chun\text{-}Yuan \,\, Liao}" />
          </h1>
          <p className="text-sm text-gray-300 mt-2 uppercase tracking-[0.2em] font-medium">
            B.S. Mathematics, NTU
          </p>
        </div>

        <nav className="flex-1 space-y-10 overflow-y-auto pr-2 custom-scrollbar">
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold mb-8 font-mono opacity-90">Directory</p>
            <div className="space-y-8">
              <div 
                onClick={() => setActiveTab('home')} 
                className={`group cursor-pointer block ${activeTab === 'home' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className="text-lg text-gray-200 group-hover:text-white transition-all duration-300 font-normal">
                  Home
                </div>
              </div>

              {categories.map((cat) => (
                <div 
                  key={cat.id} 
                  onClick={() => setActiveTab(cat.id)}
                  className={`group cursor-pointer block ${activeTab === cat.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="text-lg text-gray-200 group-hover:text-white transition-all duration-300 font-normal leading-snug">
                    {cat.name}
                  </div>
                </div>
              ))}

              <div className="group">
                <button 
                  onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                  className="w-full flex items-center justify-between text-left transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <div className="text-lg text-gray-200 group-hover:text-white font-normal">
                    Interests
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-all">
                    {isInterestsOpen ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                  </div>
                </button>

                {isInterestsOpen && (
                  <div className="pl-6 border-l-2 border-[#2a2a2a] space-y-6 mt-6 animate-in fade-in slide-in-from-top-2">
                    {interests.map((item) => (
                      <div key={item.name} className="group/sub cursor-pointer block opacity-70 hover:opacity-100">
                        <div className="text-[15px] text-gray-300 group-hover/sub:text-white transition-all duration-300">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-auto pt-10 border-t border-[#2a2a2a]">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-8">Links</p>
          <div className="flex items-center gap-8">
            <a href="https://github.com/chunyuan-liao" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/chunyuan-liao" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 ml-80 bg-white text-gray-900 overflow-y-auto selection:bg-gray-200">
        
        {/* Home Tab */}
        {activeTab === 'home' && (
          <section className="animate-in fade-in duration-1000">
            <div className="w-full h-[80vh] overflow-hidden relative group">
              <img 
                src="/images/hk_night.jpg" 
                alt="Hong Kong Night" 
                className="absolute w-full h-[100%] object-cover object-bottom grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="max-w-4xl px-24 py-20 space-y-32">
              <div>
                <h2 className="text-6xl font-bold text-black mb-12 tracking-tighter">About Me</h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>I am a Mathematics student at National Taiwan University, focusing on probability theory, stochastic processes, and computational mathematics.</p>
                  <p>I am passionate about translating profound mathematical theories into decision-making tools for quantitative trading, seeking robust statistical regularities within dynamic market environments.</p>
                  <p>Beyond academia, I actively participate in various quant competitions and internship programs, exploring the boundaries of fintech and strategic gaming.</p>
                </div>
              </div>
              <div>
                <h2 className="text-6xl font-bold text-black mb-12 tracking-tighter">About This Space</h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    This is a space where I document my academic footprint, quantitative insights, and personal reflections. Through writing, I attempt to materialize abstract mathematical logic and apply it to my understanding of markets and game theory.
                  </p>
                  <p>
                    In addition to technical sharing, this site also houses my passion for Texas Hold'em (GTO analysis), fitness, and cooking, as I firmly believe that rigorous logic and life's sensibility complement each other.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Non-Home Tabs */}
        {activeTab !== 'home' && (
          <div className="max-w-5xl p-24">
            {/* Course Reviews */}
            {activeTab === 'course' && (
              <section className="animate-in fade-in duration-500 space-y-12">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-12 font-mono">Course Reviews</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-emerald-600 font-bold tracking-widest mb-4 font-mono opacity-80">ACADEMIC / YEAR 114-1</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-emerald-700 transition-colors">114-1 Course Review</h4>
                  </div>
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-blue-50 hover:border-blue-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-blue-600 font-bold tracking-widest mb-4 font-mono opacity-80">ACADEMIC / YEAR 114-2</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-blue-700 transition-colors">114-2 Course Review</h4>
                  </div>
                </div>
              </section>
            )}

            {/* Quant Experiences */}
            {activeTab === 'quant' && (
              <section className="animate-in fade-in duration-500 space-y-12">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-12 font-mono">Quant Experiences</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-emerald-600 font-bold tracking-widest mb-4 font-mono">2026 / EXPERIENCE</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-emerald-700 transition-colors">Jane Street FTTP</h4>
                  </div>
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-blue-50 hover:border-blue-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-blue-600 font-bold tracking-widest mb-4 font-mono">2026 / COMPETITION</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-blue-700 transition-colors">Citadel APAC The Terminal</h4>
                  </div>
                </div>
              </section>
            )}

            {/* Notes */}
            {activeTab === 'notes' && (
              <div className="h-full flex items-center justify-center pt-20">
                <p className="text-gray-400 font-mono italic text-lg">Content under construction...</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}