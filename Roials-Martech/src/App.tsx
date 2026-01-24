
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum font-sans selection:bg-oldgold selection:text-obsidian">

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Abstract dark luxury texture"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-platinum leading-tight tracking-tight mb-10 drop-shadow-2xl">
            The Architecture <span className="italic text-gray-400 font-light">of</span> <br />
            Modern Influence.
          </h1>

          <div className="w-24 h-[1px] bg-oldgold mx-auto mb-12 shadow-[0_0_15px_rgba(197,160,89,0.6)]"></div>

          <p className="font-sans text-platinum text-sm md:text-lg lg:text-xl tracking-[0.5em] uppercase font-medium mb-14 drop-shadow-lg">
            DOMINANCE. SCALED.
          </p>

          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 hover:border-oldgold transition-all duration-500 rounded-sm overflow-hidden">
            <span className="relative z-10 font-display text-xs tracking-[0.2em] text-platinum group-hover:text-oldgold transition-colors">
              Request Access
            </span>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-oldgold transition-colors" />
            <div className="absolute inset-0 bg-oldgold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-0 w-full text-center animate-bounce z-20">
          <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        </div>
      </section>

      {/* FOOTER (Minimal) */}
      <footer className="py-8 bg-obsidian border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs tracking-widest uppercase">© 2026 Roials Martech. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
