'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { FaGithub, FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);

  const categories = [
    { name: '大學修課心得分享', math: '\\text{Course Reviews}' },
    { name: 'quant相關經驗心得分享', math: '\\text{Quant Experiences}' },
  ];

  const interests = [
    { name: '健身', math: '\\text{Fitness}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: '烹飪', math: '\\text{Baking \\& Culinary}' },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-gray-100 font-sans antialiased">
      
      {/* --- 左側側邊欄 (Sidebar) - 完整保留 --- */}
      <aside className="w-80 border-r border-[#2a2a2a] flex flex-col p-10 fixed h-full z-20 bg-[#050505]">
        <div className="mb-16">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            <InlineMath math="\mathbf{Chun\text{-}Yuan \,\, Liao}" />
          </h1>
          <p className="text-sm text-gray-300 mt-2 uppercase tracking-[0.2em] font-medium">
            Department of Mathematics, NTU
          </p>
        </div>

        <nav className="flex-1 space-y-12 overflow-y-auto pr-2 custom-scrollbar">
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold mb-8 font-mono opacity-90">Directory</p>
            <div className="space-y-10">
              {categories.map((cat) => (
                <div key={cat.name} className="group cursor-pointer block">
                  <div className="text-lg text-gray-200 group-hover:text-white transition-all duration-300 font-normal leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-sm text-gray-400 font-mono mt-2 group-hover:text-emerald-400 transition-all duration-300">
                    <InlineMath math={cat.math} />
                  </div>
                </div>
              ))}

              <div className="group">
                <button 
                  onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                  className="w-full flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="text-lg text-gray-200 group-hover:text-white font-normal">
                    一些興趣分享
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-all">
                    {isInterestsOpen ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                  </div>
                </button>
                <div className="text-sm font-mono mt-2 mb-4">
                  <InlineMath math="\text{\color{#93c5fd}Interests \,\, \& \,\, Lifestyle}" />
                </div>

                {isInterestsOpen && (
                  <div className="pl-6 border-l-2 border-[#2a2a2a] space-y-8 mt-8 animate-in fade-in slide-in-from-top-2">
                    {interests.map((item) => (
                      <div key={item.name} className="group/sub cursor-pointer block">
                        <div className="text-[15px] text-gray-300 group-hover/sub:text-white transition-all duration-300">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500 font-mono mt-1.5 group-hover/sub:text-blue-400 transition-all duration-300">
                          <InlineMath math={item.math} />
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
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-8">其他相關</p>
          <div className="flex items-center gap-10">
            <a href="https://github.com/chunyuan-liao" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300">
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </aside>

      {/* --- 右側內容區 - 僅刪除英雄區塊 --- */}
      <main className="flex-1 ml-80 overflow-y-auto bg-[#050505] selection:bg-emerald-500/30">
        <div className="max-w-5xl p-24 space-y-36">
          
          {/* 英雄區塊已依照要求刪除，內容直接從經歷開始 */}

          {/* Quant 經歷區塊 - 完整保留 */}
          <section className="space-y-16">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] flex items-center gap-6 font-mono text-bright">
              <span className="w-12 h-[1px] bg-emerald-800/60"></span>
              <InlineMath math="\S \,\, \text{Quant Related}" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group p-12 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-emerald-500/20 transition-all duration-500">
                <p className="text-xs text-emerald-400 font-bold tracking-widest mb-8 uppercase">Jane Street</p>
                <h4 className="text-3xl text-white mb-6 font-normal">FTTP Participant</h4>
                <p className="text-lg text-gray-400 leading-relaxed font-light italic">
                  Institutional market making simulations and stochastic modeling workshops in Hong Kong.
                </p>
              </div>
              <div className="group p-12 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-blue-500/20 transition-all duration-500">
                <p className="text-xs text-blue-400 font-bold tracking-widest mb-8 uppercase">Citadel</p>
                <h4 className="text-3xl text-white mb-6 font-normal">Terminal Finalist</h4>
                <p className="text-lg text-gray-400 leading-relaxed font-light italic">
                  Algorithmic strategy development under competitive low-latency simulation environments.
                </p>
              </div>
            </div>
          </section>

          {/* Strategic Analysis 區塊 - 完整保留 */}
          <section className="space-y-16 pb-48">
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] flex items-center gap-6 font-mono">
              <span className="w-12 h-[1px] bg-blue-800/60"></span>
              <InlineMath math="\S \,\, \text{Strategic Analysis}" />
            </h3>
            <div className="bg-[#0a0a0a] p-16 border border-[#1a1a1a] rounded-sm">
              <p className="text-5xl text-gray-300 font-light leading-[1.2]">
                "Analyzing range construction through the lens of <br />
                <span className="text-white font-serif italic">Game Theory Optimal (GTO)</span> solvers."
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}