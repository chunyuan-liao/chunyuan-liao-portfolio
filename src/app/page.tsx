'use client';

import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { FaGithub, FaLinkedin, FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: 'course', name: '大學修課心得' },
    { id: 'quant', name: 'quant相關經驗心得分享' },
    { id: 'notes', name: '隨手亂寫' },
  ];

  const interests = [
    { name: '健身', math: '\\text{Fitness}' },
    { name: 'Poker', math: '\\text{Game Theory}' },
    { name: '烹飪', math: '\\text{Baking \\& Culinary}' },
  ];

  return (
    <div className="flex h-screen font-sans antialiased">
      
      {/* --- 左側側邊欄 (Sidebar) --- */}
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
                    一些興趣分享
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
      <main className="flex-1 ml-80 bg-white text-gray-900 overflow-y-auto selection:bg-gray-200">
        
        {/* Home 分頁：超大圖片 (裁掉上方 1/3) + 內容 */}
        {activeTab === 'home' && (
          <section className="animate-in fade-in duration-1000">
            <div className="w-full h-[40vh] overflow-hidden relative group">
              <img 
                src="/images/hk_night.jpg" 
                alt="Hong Kong Night" 
                className="absolute w-full h-[125%] object-cover object-bottom grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="max-w-4xl px-24 py-20 space-y-32">
              <div>
                <h2 className="text-6xl font-bold text-black mb-12 tracking-tighter">個人介紹</h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>目前就讀於國立台灣大學數學系，專注於機率論、隨機過程與計算數學。</p>
                  <p>熱衷於將深奧的數學理論轉化為量化交易中的決策工具，並在動態的市場環境中尋找穩健的統計規律。</p>
                  <p>除了學術研究，我也積極參與各類量化競賽與實習計畫，不斷探索金融科技與策略博弈的邊界。</p>
                </div>
              </div>
              <div>
                <h2 className="text-6xl font-bold text-black mb-12 tracking-tighter">關於這裡</h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    這裡是我用來紀錄學術足跡、量化思考與生活隨筆的空間。透過文字，我試著將抽象的數學邏輯實體化，並將其應用在對市場與博弈的理解中。
                  </p>
                  <p>
                    除了硬核的技術分享，這裡也會存放我對德州撲克（GTO分析）、健身與烹飪的熱情，因為我深信嚴謹的邏輯與生活的感性是相輔相成的。
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 非首頁分頁：統一容器 */}
        {activeTab !== 'home' && (
          <div className="max-w-5xl p-24">
            {/* 大學修課心得 */}
            {activeTab === 'course' && (
              <section className="animate-in fade-in duration-500 space-y-12">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-12 font-mono">Course Reviews</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-emerald-600 font-bold tracking-widest mb-4 font-mono opacity-80">ACADEMIC / YEAR 114</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-emerald-700 transition-colors">114-1 修課心得</h4>
                  </div>
                  <div className="p-12 border border-gray-200 bg-gray-100 hover:bg-blue-50 hover:border-blue-300 transition-all duration-500 group cursor-pointer rounded-sm shadow-sm">
                    <p className="text-xs text-blue-600 font-bold tracking-widest mb-4 font-mono opacity-80">ACADEMIC / YEAR 114</p>
                    <h4 className="text-3xl text-black font-normal group-hover:text-blue-700 transition-colors">114-2 修課心得</h4>
                  </div>
                </div>
              </section>
            )}

            {/* Quant 經歷 */}
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

            {/* 隨手亂寫 */}
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