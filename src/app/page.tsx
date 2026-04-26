'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  const categories = [
    { name: '修課心得', math: '\\text{Course Reviews}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: 'Quant 相關', math: '\\text{Quantitative Research}' },
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

        <nav className="flex-1 space-y-10">
          <p className="text-[10px] text-emerald-500/50 uppercase tracking-[0.2em] font-bold">Directory</p>
          {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer block">
              <div className="text-[15px] text-gray-400 group-hover:text-white transition-all duration-300 font-light">
                {cat.name}
              </div>
              <div className="text-[11px] text-gray-600 font-mono mt-1 group-hover:text-emerald-500/70 transition-all duration-300">
                <InlineMath math={cat.math} />
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#1a1a1a]">
          <a href="https://github.com/chunyuan-liao" target="_blank" className="flex items-center gap-4 text-gray-500 hover:text-white transition-all group">
            <FaGithub size={22} className="opacity-50 group-hover:opacity-100" />
            <span className="text-[10px] tracking-[0.2em] font-bold italic">SOURCE CODE</span>
          </a>
        </div>
      </aside>

      {/* --- 右側內容區 (Main Content) --- */}
      <main className="flex-1 ml-72 overflow-y-auto selection:bg-emerald-500/30 bg-[#050505]">
        <div className="max-w-5xl p-20 space-y-32">
          
          {/* 英雄區塊 */}
          <section className="py-24">
            <h2 className="text-6xl font-light text-white leading-[1.15] tracking-tight mb-10">
              Exploring the frontiers of <br />
              <span className="text-emerald-500 font-serif italic">Stochastic Modeling</span> <span className="text-gray-600">&</span> <br />
              <span className="text-blue-500 font-serif italic">Strategic Play</span>.
            </h2>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed font-light">
              台大數學系，專注於離散數學、隨機過程與量化交易。這裡是我整合學術研究、德州撲克博弈論與交易競賽心得的空間。
            </p>
          </section>

          {/* Quant 經歷區塊 */}
          <section className="space-y-12">
            <h3 className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-emerald-900"></span>
              <InlineMath math="\S \,\, \text{Quant Related}" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group p-10 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-emerald-500/20 transition-all duration-500">
                <p className="text-[10px] text-emerald-500 font-bold tracking-widest mb-6 uppercase">Jane Street</p>
                <h4 className="text-2xl text-white mb-4 font-normal">FTTP Participant</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                  Institutional market making simulations and stochastic modeling workshops in Hong Kong.
                </p>
              </div>
              <div className="group p-10 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-blue-500/20 transition-all duration-500">
                <p className="text-[10px] text-blue-500 font-bold tracking-widest mb-6 uppercase">Citadel</p>
                <h4 className="text-2xl text-white mb-4 font-normal">Terminal Finalist</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                  Algorithmic strategy development under competitive low-latency simulation environments.
                </p>
              </div>
            </div>
          </section>

          {/* Poker / Research 區塊 */}
          <section className="space-y-12 pb-40">
             <h3 className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-blue-900"></span>
              <InlineMath math="\S \,\, \text{Strategic Analysis}" />
            </h3>
            <div className="bg-[#0a0a0a] p-12 border border-[#1a1a1a] rounded-sm">
              <p className="text-4xl text-gray-300 font-light leading-snug">
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