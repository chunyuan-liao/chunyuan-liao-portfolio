import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chun-Yuan Liao | NTU Math | Quant Research',
  description: 'Personal Portfolio - Exploring Math and Finance.',
}

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white selection:bg-emerald-500/30">
      {/* 全域背景：晚上的雪原、縮小的針葉樹、極光
        關鍵在於 `bg-[length:50%]` 和 `bg-repeat` 的控制
      */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/aurora-background.jpg')`, // 請確認圖片路徑正確
          backgroundSize: '50%', // *** 關鍵：縮小樹的比例 ***
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'repeat-x',
          filter: 'blur(2px)', // 輕微模糊，減少視覺干擾
        }}
      />

      {/* 第一屏：個人門面 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-black/60">
        <div className="text-center space-y-4">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            CHUN-YUAN LIAO
          </h1>
          <p className="text-emerald-400 font-mono text-lg md:text-xl tracking-[0.2em] uppercase">
            NTU Math @ 2029 | Quantitative Research
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce text-gray-600 font-light">
          SCROLL TO NAVIGATE
        </div>
      </section>

      {/* 第二屏：硬核經歷 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-black/80">
        <h2 className="text-3xl font-bold mb-12 self-start max-w-4xl mx-auto w-full text-gray-400">/ EXPERIENCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <div className="group p-8 border border-white/10 rounded-sm hover:border-emerald-500/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
            <h3 className="text-emerald-400 font-mono mb-2">01. Jane Street</h3>
            <p className="text-xl font-semibold mb-4">FTTP Participant, HK</p>
            <p className="text-gray-400 text-sm leading-relaxed">Engaged in intensive market making simulations and institutional-grade trading technology workshops.</p>
          </div>
          <div className="group p-8 border border-white/10 rounded-sm hover:border-blue-500/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
            <h3 className="text-blue-400 font-mono mb-2">02. Citadel Terminal</h3>
            <p className="text-xl font-semibold mb-4">APAC Regional Finalist</p>
            <p className="text-gray-400 text-sm leading-relaxed">Developed high-frequency algorithmic strategies in a competitive, low-latency simulation environment.</p>
          </div>
        </div>
      </section>

      {/* 第三屏：數學研究 */}
      <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-b from-black/80 to-gray-950/90">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-400">/ ACADEMIC RESEARCH</h2>
          <div className="space-y-8">
            <p className="text-4xl md:text-5xl font-light leading-tight">
              Exploring the <span className="italic text-emerald-400">Combinatorial Properties</span> of Path Graphs and their applications in <span className="underline decoration-emerald-500/50">Modern Cryptography</span>.
            </p>
            <div className="flex gap-4 font-mono text-sm">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">GPA 3.94/4.3</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">AIME Qualifier</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">WorldQuant Bronze</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}