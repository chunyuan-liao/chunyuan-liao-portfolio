'use client';

import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // 需要安裝 react-icons

export default function Home() {
  const categories = [
    { name: '修課心得', math: '\\text{Course Reviews}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: 'Quant 相關', math: '\\text{Quantitative Research}' },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-[#e0e0e0] font-serif">
      
      {/* --- 左側側邊欄 (Sidebar) --- */}
      <aside className="w-64 border-r border-gray-900 flex flex-col p-8 fixed h-full z-20 bg-[#0a0a0a]">
        {/* 頂部：個人姓名 */}
        <div className="mb-12">
          <h1 className="text-xl font-bold text-white tracking-tighter">
            <InlineMath math="\mathbf{C. Y. \,\, LIAO}" />
          </h1>
          <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">NTU MATH @ 2029</p>
        </div>

        {/* 中間：分類清單 */}
        <nav className="flex-1 space-y-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Categories</p>
          {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer">
              <div className="text-sm text-gray-400 group-hover:text-emerald-500 transition-colors">
                {cat.name}
              </div>
              <div className="text-[11px] text-gray-600 font-mono mt-1 group-hover:text-emerald-700 transition-colors">
                <InlineMath math={cat.math} />
              </div>
            </div>
          ))}
        </nav>

        {/* 左下角：GitHub 連結 (圖片呈現) */}
        <div className="mt-auto pt-6 border-t border-gray-900">
          <a 
            href="https://github.com/chunyuan-liao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group"
          >
            <div className="p-2 border border-gray-800 rounded-md group-hover:border-white transition-all">
              <FaGithub size={20} />
            </div>
            <div className="text-xs font-mono tracking-tighter text-gray-600 group-hover:text-white">
              GITHUB
            </div>
          </a>
        </div>
      </aside>

      {/* --- 右側內容區 (Main Content) --- */}
      <main className="flex-1 ml-64 overflow-y-auto">
        <div className="max-w-4xl p-16 space-y-24">
          
          {/* Welcome / Intro */}
          <section className="py-20 border-b border-gray-900/50">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-white leading-tight">
                Exploring the frontiers of <br />
                <span className="italic text-emerald-500/80">Stochastic Modeling</span> & 
                <span className="italic text-blue-500/80"> Strategic Play</span>.
              </h2>
              <p className="max-w-xl text-gray-500 leading-relaxed">
                台大數學系，專注於離散數學、隨機過程與量化交易。這裡是我整合學術研究、德州撲克博弈論與交易競賽心得的空間。
              </p>
            </div>
          </section>

          {/* Quant Section */}
          <section className="space-y-8">
            <h3 className="text-xs font-mono text-gray-600 uppercase tracking-widest border-l-2 border-emerald-500 pl-4">
              <InlineMath math="\S \,\, \text{Quant Related}" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-gray-900 hover:border-emerald-500/30 transition-all">
                <p className="text-xs text-emerald-500 mb-2">JANE STREET</p>
                <h4 className="text-lg text-white mb-2 font-medium">FTTP Participant</h4>
                <p className="text-sm text-gray-500 leading-relaxed italic">Market making and institutional trading logic.</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-gray-900 hover:border-blue-500/30 transition-all">
                <p className="text-xs text-blue-500 mb-2">CITADEL</p>
                <h4 className="text-lg text-white mb-2 font-medium">Terminal Regional Finalist</h4>
                <p className="text-sm text-gray-500 leading-relaxed italic">Algorithmic strategy under high latency constraints.</p>
              </div>
            </div>
          </section>

          {/* Poker Section */}
          <section className="space-y-8">
            <h3 className="text-xs font-mono text-gray-600 uppercase tracking-widest border-l-2 border-blue-500 pl-4">
              <InlineMath math="\S \,\, \text{Poker Strategy}" />
            </h3>
            <div className="bg-white/[0.01] p-10 border border-gray-900">
              <p className="text-3xl text-gray-400 font-light mb-6 leading-relaxed">
                Analyzing range construction through the lens of <br />
                <span className="text-white italic">Game Theory Optimal (GTO)</span> solvers.
              </p>
              <div className="text-xs text-gray-600">
                <InlineMath math="EV = \sum (P_i \times W_i) - \text{Risk}" />
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}