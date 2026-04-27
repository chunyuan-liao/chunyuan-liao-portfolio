'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { FaGithub, FaLinkedin, FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  // 新增狀態來追蹤目前選中的分類，預設為 'home'
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: 'course', name: '大學修課心得分享', math: '\\text{Course Reviews}' },
    { id: 'quant', name: 'quant相關經驗心得分享', math: '\\text{Quant Experiences}' },
    { id: 'notes', name: '隨手亂寫', math: '\\text{Miscellaneous Notes}' },
  ];

  const interests = [
    { name: '健身', math: '\\text{Fitness}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: '烹飪', math: '\\text{Baking \\& Culinary}' },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-gray-100 font-sans antialiased">
      
      {/* --- 左側側邊欄 (Sidebar) --- */}
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
              
              {/* Home 分類 */}
              <div 
                onClick={() => setActiveTab('home')} 
                className={`group cursor-pointer block ${activeTab === 'home' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className="text-lg text-gray-200 group-hover:text-white transition-all duration-300 font-normal">
                  Home
                </div>
                <div className="text-sm text-gray-400 font-mono mt-2 group-hover:text-emerald-400 transition-all duration-300">
                  <InlineMath math="\\text{Back to Hub}" />
                </div>
              </div>

              {/* 其他主分類 */}
              {categories.map((cat) => (
                <div 
                  key={cat.id} 
                  onClick={() => setActiveTab(cat.id)}
                  className={`group cursor-pointer block ${activeTab === cat.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <div className="text-lg text-gray-200 group-hover:text-white transition-all duration-300 font-normal leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-sm text-gray-400 font-mono mt-2 group-hover:text-emerald-400 transition-all duration-300">
                    <InlineMath math={cat.math} />
                  </div>
                </div>
              ))}

              {/* 興趣分享手風琴 */}
              <div className="group">
                <button 
                  onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                  className="w-full flex items-center justify-between text-left transition-all duration-300 opacity-70 hover:opacity-100"
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
                      <div key={item.name} className="group/sub cursor-pointer block opacity-70 hover:opacity-100">
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

        {/* 左下角圖標 */}
        <div className="mt-auto pt-10 border-t border-[#2a2a2a]">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-8">其他相關</p>
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

      {/* --- 右側內容區 --- */}
      <main className="flex-1 ml-80 bg-[#050505] overflow-y-auto">
        <div className="max-w-5xl p-24">
          
          {/* 渲染 Home 內容 */}
          {activeTab === 'home' && (
            <section className="animate-in fade-in duration-700">
              <h2 className="text-6xl font-bold text-white mb-12 tracking-tighter">個人介紹</h2>
              <div className="space-y-6 text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
                <p>
                  目前就讀於國立台灣大學數學系，專注於機率論、隨機過程與計算數學。
                </p>
                <p>
                  熱衷於將深奧的數學理論轉化為量化交易中的決策工具，並在動態的市場環境中尋找穩健的統計規律。
                </p>
                <p>
                  除了學術研究，我也積極參與各類量化競賽與實習計畫，不斷探索金融科技與策略博弈的邊界。
                </p>
              </div>
            </section>
          )}

          {/* 渲染 Quant 經歷內容 */}
          {activeTab === 'quant' && (
            <section className="animate-in fade-in duration-500 space-y-12">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-12 font-mono">
                <InlineMath math="\S \,\, \text{Quant Experiences}" />
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {/* Jane Street 區塊 */}
                <div className="p-12 border border-[#2a2a2a] bg-[#0a0a0a] hover:border-emerald-500/30 transition-all duration-500 group">
                  <p className="text-xs text-emerald-400 font-bold tracking-widest mb-4 font-mono">2026 / EXPERIENCE</p>
                  <h4 className="text-3xl text-white font-normal group-hover:text-emerald-400 transition-colors">Jane Street FTTP</h4>
                  <p className="text-gray-500 mt-4 italic font-light italic">First-Year Trading and Technology Program</p>
                </div>

                {/* Citadel 區塊 */}
                <div className="p-12 border border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500 group">
                  <p className="text-xs text-blue-400 font-bold tracking-widest mb-4 font-mono">2026 / COMPETITION</p>
                  <h4 className="text-3xl text-white font-normal group-hover:text-blue-400 transition-colors">Citadel APAC The Terminal</h4>
                  <p className="text-gray-500 mt-4 italic font-light italic">Regional Algorithmic Trading Finalist</p>
                </div>
              </div>
            </section>
          )}

          {/* 其他分類預留位置 */}
          {(activeTab === 'course' || activeTab === 'notes') && (
            <div className="h-full flex items-center justify-center pt-20">
              <p className="text-gray-600 font-mono italic">Content under construction...</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}