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
    <div className="flex h-screen bg-[#050505] text-gray-200 font-sans antialiased">
      
      {/* --- 左側側邊欄 (Sidebar) --- */}
      <aside className="w-80 border-r border-[#1a1a1a] flex flex-col p-10 fixed h-full z-20 bg-[#050505]">
        <div className="mb-16">
          <h1 className="text-2xl font-medium text-white tracking-tight">
            <InlineMath math="\mathbf{Chun\text{-}Yuan \,\, Liao}" />
          </h1>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-[0.2em] font-medium">
            Department of Mathematics, NTU
          </p>
        </div>

        <nav className="flex-1 space-y-12 overflow-y-auto pr-2 custom-scrollbar">
          {/* 主分類區塊 */}
          <div>
            <p className="text-xs text-emerald-400/60 uppercase tracking-[0.2em] font-bold mb-8 font-mono">Directory</p>
            <div className="space-y-10">
              {categories.map((cat) => (
                <div key={cat.name} className="group cursor-pointer block">
                  <div className="text-base text-gray-300 group-hover:text-white transition-all duration-300 font-light leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2 group-hover:text-emerald-400/80 transition-all duration-300">
                    <InlineMath math={cat.math} />
                  </div>
                </div>
              ))}

              {/* 興趣分享：手風琴選單 */}
              <div className="group">
                <button 
                  onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                  className="w-full flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="text-base text-gray-300 group-hover:text-white font-light">
                    一些興趣分享
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-all">
                    {isInterestsOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                  </div>
                </button>
                <div className="text-xs text-gray-500 font-mono mt-2 mb-4">
                  <InlineMath math="\text{\color{#93c5fd80}Interests \,\, \& \,\, Lifestyle}" />
                </div>

                {/* 子分類內容 */}
                {isInterestsOpen && (
                  <div className="pl-5 border-l border-gray-800 space-y-6 mt-6 animate-in fade-in slide-in-from-top-1">
                    {interests.map((item) => (
                      <div key={item.name} className="group/sub cursor-pointer block">
                        <div className="text-[14px] text-gray-400 group-hover/sub:text-white transition-all duration-300 font-light">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-gray-600 font-mono mt-1 group-hover/sub:text-blue-400/60 transition-all duration-300">
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

        {/* 左下角：其他相關 (GitHub 圖標加大) */}
        <div className="mt-auto pt-10 border-t border-[#1a1a1a]">
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold mb-8">
            其他相關
          </p>
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/chunyuan-liao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300"
              title="GitHub"
            >
              <FaGithub size={28} className="opacity-70 hover:opacity-100" />
            </a>
          </div>
        </div>
      </aside>

      {/* --- 右側內容區 --- */}
      <main className="flex-1 ml-80 overflow-y-auto bg-[#050505]">
        <div className="max-w-5xl p-24 space-y-36">
          
          <section className="py-24">
            <h2 className="text-7xl font-light text-white leading-[1.1] tracking-tight mb-12">
              Exploring the frontiers of <br />
              <span className="text-emerald-400/80 font-serif italic font-medium">Stochastic Modeling</span> <span className="text-gray-600">&</span> <br />
              <span className="text-blue-400/80 font-serif italic font-medium">Strategic Play</span>.
            </h2>
            <p className="max-w-3xl text-xl text-gray-400 leading-relaxed font-light">
              台大數學系，專注於離散數學、隨機過程與量化交易。這裡是我整合學術研究、德州撲克博弈論與交易競賽心得的空間。
            </p>
          </section>

          <section className="space-y-16">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] flex items-center gap-6 font-mono">
              <span className="w-12 h-[1px] bg-emerald-800/40"></span>
              <InlineMath math="\S \,\, \text{Quant Related}" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group p-12 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-emerald-500/20 transition-all duration-500">
                <p className="text-xs text-emerald-400/70 font-bold tracking-widest mb-8 uppercase">Jane Street</p>
                <h4 className="text-3xl text-white mb-6 font-normal">FTTP Participant</h4>
                <p className="text-base text-gray-400 leading-relaxed font-light italic">
                  Institutional market making simulations and stochastic modeling workshops in Hong Kong.
                </p>
              </div>
              <div className="group p-12 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-blue-500/20 transition-all duration-500">
                <p className="text-xs text-blue-400/70 font-bold tracking-widest mb-8 uppercase">Citadel</p>
                <h4 className="text-3xl text-white mb-6 font-normal">Terminal Finalist</h4>
                <p className="text-base text-gray-400 leading-relaxed font-light italic">
                  Algorithmic strategy development under competitive low-latency simulation environments.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-16 pb-48">
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] flex items-center gap-6 font-mono">
              <span className="w-12 h-[1px] bg-blue-800/40"></span>
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