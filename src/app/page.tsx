'use client';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#0a0a0a] text-[#e0e0e0] selection:bg-emerald-500/30 font-serif">
      {/* 移除背景圖，改用精緻的微弱漸層，模擬高端深色模式的質感 */}
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-[#0a0a0a] via-[#121212] to-[#0a0a0a] pointer-events-none" />

      {/* 第一屏：個人門面 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6">
        <div className="text-center space-y-8">
          <div className="text-6xl md:text-8xl tracking-tighter text-white opacity-95">
            <BlockMath math="\mathbf{CHUN-YUAN \,\, LIAO}" />
          </div>
          <div className="text-emerald-500/80 text-lg md:text-xl font-light">
            <InlineMath math="\text{NTU Math @ 2029} \,\,\vert\,\, \text{Quantitative Research}" />
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-gray-800">
          <InlineMath math="\downarrow" />
        </div>
      </section>

      {/* 第二屏：經歷 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6">
        <div className="max-w-4xl mx-auto w-full space-y-12">
          <h2 className="text-xl font-bold text-gray-600 border-b border-gray-900 pb-4">
            <InlineMath math="\S 1. \,\,\text{EXPERIENCE}" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="text-emerald-500/90 text-sm italic">
                <InlineMath math="\text{Jane Street}" />
              </div>
              <p className="text-2xl text-white font-medium"><InlineMath math="\text{FTTP Participant}" /></p>
              <p className="text-gray-500 text-sm leading-relaxed"><InlineMath math="\text{Market making and stochastic processes.}" /></p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-500/90 text-sm italic">
                <InlineMath math="\text{Citadel Terminal}" />
              </div>
              <p className="text-2xl text-white font-medium"><InlineMath math="\text{Regional Finalist}" /></p>
              <p className="text-gray-500 text-sm leading-relaxed"><InlineMath math="\text{Algorithmic strategy optimization.}" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* 第三屏：研究 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-xl font-bold mb-12 text-gray-600 border-b border-gray-900 pb-4">
            <InlineMath math="\S 2. \,\,\text{RESEARCH}" />
          </h2>
          <div className="space-y-12">
            <p className="text-4xl md:text-5xl font-light text-white/90 leading-tight">
              <InlineMath math="\text{Investigating } P_n \text{ structures in cryptography.}" />
            </p>
            <div className="bg-white/[0.02] p-8 border border-white/[0.05] rounded-lg">
              <BlockMath math="G=(V,E) \implies P_n \text{ is a tree with } \Delta(G)=2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}