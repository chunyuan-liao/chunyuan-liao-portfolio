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
    <div className="flex h-screen bg-[#050505] text-[#d1d1d1] font-sans antialiased">
      
      {/* --- 左側側邊欄 (Sidebar) --- */}
      <aside className="w-72 border-r border-[#1a1a1a] flex flex-col p-10 fixed h-full z-20 bg-[#050505]">
        <div className="mb-16">
          <h1 className="text-xl font-medium text-white tracking-tight">
            <InlineMath math="\mathbf{Chun\text{-}Yuan \,\, Liao}" />
          </h1>
          <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-[0.2em] font-medium">
            Department of Mathematics, NTU
          </p>
        </div>

        <nav className="flex-1 space-y-10 overflow-y-auto pr-2 custom-scrollbar">
          {/* 主分類區塊 */}
          <div>
            {/* 顏色改為淺綠色 (emerald-500/30) */}
            <p className="text-[10px] text-emerald-500/40 uppercase tracking-[0.2em] font-bold mb-6 font-mono">Directory</p>
            <div className="space-y-8">
              {categories.map((cat) => (
                <div key={cat.name} className="group cursor-pointer block">
                  <div className="text-[14px] text-gray-400 group-hover:text-white transition-all duration-300 font-light leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-[10px] text-gray-700 font-mono mt-1 group-hover:text-emerald-500/50 transition-all duration-300">
                    <InlineMath math={cat.math} />
                  </div>
                </div>
              ))}

              {/* 興趣分享：與主分類同級別且可點擊 */}
              <div className="group">
                <button 
                  onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                  className="w-full flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="text-[14px] text-gray-400 group-hover:text-white font-light">
                    一些興趣分享
                  </div>
                  <div className="text-gray-600 group-hover:text-white transition-all">
                    {isInterestsOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
                  </div>
                </button>
                <div className="text-[10px] text-gray-700 font-mono mt-1 mb-4">
                   {/* 顏色改為淺藍色 (blue-500/30) */}
                  <InlineMath math="\text{\color{#60a5fa50}Interests \,\, \& \,\, Lifestyle}" />
                </div>

                {/* 子分類內容：字體縮小至 text-[12px] */}
                {isInterestsOpen && (
                  <div className="pl-4 border-l border-gray-900 space-y-5 mt-4 animate-in fade-in slide-in-from-top-1">
                    {interests.map((item) => (
                      <div key={item.name} className="group/sub cursor-pointer block">
                        <div className="text-[12px] text-gray-500 group-hover/sub:text-white transition-all duration-300 font-light">
                          {item.name}
                        </div>
                        <div className="text-[8px] text-gray-800 font-mono mt-0.5 group-hover/sub:text-blue-500/40 transition-all duration-300">
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

        {/* 左下角：其他相關 */}
        <div className="mt-auto pt-8 border-t border-[#1a1a1a]">
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-bold mb-6">
            其他相關
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/chunyuan-liao" 
              target="_blank" 
              className="text-gray-600 hover:text-white transition-all duration-300"
            >
              <FaGithub size={22} className="opacity-50 hover:opacity-100" />
            </a>
          </div>
        </div>
      </aside>

      {/* --- 右側內容區 --- */}
      <main className="flex-1 ml-72 overflow-y-auto bg-[#050505]">
        <div className="max-w-5xl p-20 space-y-32">
          {/* 英雄區塊 */}
          <section className="py-24">
            <h2 className="text-6xl font-light text-white leading-[1.15] tracking-tight mb-10">
              Exploring the frontiers of <br />
              <span className="text-emerald-500/70 font-serif italic">Stochastic Modeling</span> <span className="text-gray-700">&</span> <br />
              <span className="text-blue-500/70 font-serif italic">Strategic Play</span>.
            </h2>
            <p className="max-w-2xl text-lg text-gray-500 leading-relaxed font-light">
              台大數學系，專注於離散數學、隨機過程與量化交易。這裡是我整合學術研究、德州撲克博弈論與交易競賽心得的空間。
            </p>
          </section>

          {/* Quant 經歷區塊 */}
          <section className="space-y-12">
            <h3 className="text-[11px] font-bold text-gray-700 uppercase tracking-[0.3em] flex items-center gap-4 font-mono">
              <span className="w-8 h-[1px] bg-emerald-900/30"></span>
              <InlineMath math="\S \,\, \text{Quant Related}" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group p-10 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-emerald-500/10 transition-all duration-500">
                <p className="text-[10px] text-emerald-500/40 font-bold tracking-widest mb-6 uppercase">Jane Street</p>
                <h4 className="text-2xl text-white mb-4 font-normal">FTTP Participant</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light italic">
                  Institutional market making simulations and stochastic modeling workshops in Hong Kong.
                </p>
              </div>
              <div className="group p-10 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-blue-500/10 transition-all duration-500">
                <p className="text-[10px] text-blue-500/40 font-bold tracking-widest mb-6 uppercase">Citadel</p>
                <h4 className="text-2xl text-white mb-4 font-normal">Terminal Finalist</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light italic">
                  Algorithmic strategy development under competitive low-latency simulation environments.
                </p>
              </div>
            </div>
          </section>

          {/* 引言區塊 */}
          <section className="space-y-12 pb-40">
             <h3 className="text-[11px] font-bold text-gray-700 uppercase tracking-[0.3em] flex items-center gap-4 font-mono">
              <span className="w-8 h-[1px] bg-blue-900/30"></span>
              <InlineMath math="\S \,\, \text{Strategic Analysis}" />
            </h3>
            <div className="bg-[#0a0a0a] p-12 border border-[#1a1a1a] rounded-sm">
              <p className="text-4xl text-gray-400 font-light leading-snug">
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