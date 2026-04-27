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
      
      {/* --- 左側側邊欄 (Sidebar) - 完整保留所有功能與亮度 --- */}
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

      {/* --- 右側內容區：依照要求刪除所有大字，維持空白待定 --- */}
      <main className="flex-1 ml-80 bg-[#050505]">
        {/* 這裡目前是乾淨的留白狀態 */}
      </main>
    </div>
  );
}