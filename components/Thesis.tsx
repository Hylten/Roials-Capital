import React from 'react';

interface ThesisProps {
  onInquireClick: () => void;
}

export const Thesis: React.FC<ThesisProps> = ({ onInquireClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Title - High Status Single Word */}
        <div className="text-center mb-24">
          <h1 className="font-display font-medium text-5xl md:text-7xl text-platinum tracking-[0.3em] mb-8 uppercase">
            THESIS
          </h1>
          <div className="w-16 h-[1px] bg-oldgold mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>

        <div className="space-y-32">
            
            {/* Section 1: The Paradigm */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                    <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">01. THE PARADIGM</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                    CAPITAL HAS EVOLVED. THE METHOD HASN’T.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    In an era defined by quantitative tightening and algorithmic market dynamics, traditional capital advisory relies on outdated analog networks. The old model of passive brokerage is obsolete. Today, liquidity is not found; it is engineered through precision narrative and data-driven infrastructure.
                </p>
            </section>

            {/* Section 2: The Architecture */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                    <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">02. THE ARCHITECTURE</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                    ASSET ARCHITECTURE.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    We do not view capital raising solely as a sales function, but as a structural discipline. By treating investment opportunities as architectural products, we bridge the gap between Principal vision and Institutional mandates. We integrate sovereign-grade financial structuring with the precision of modern digital distribution.
                </p>
            </section>

            {/* Section 3: The Execution */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                    <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">03. THE EXECUTION</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                    PRINCIPAL-LED ALIGNMENT.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16">
                    We operate where others advise. As an independent sponsor and strategic partner, our interests are tethered to the outcome. We replace 'best efforts' with 'retained execution,' ensuring that every mandate is positioned not just to compete, but to dominate the allocation queue of global LPs.
                </p>
            </section>

        </div>

        {/* Minimalist CTA Section - Interactive Scarcity Text */}
        <div className="mt-32 pt-4 border-t border-white/5 text-center">
            <button 
                onClick={onInquireClick}
                className="font-sans text-[10px] text-gray-600 hover:text-oldgold uppercase tracking-[0.4em] font-bold transition-colors duration-700 cursor-pointer p-20 focus:outline-none"
            >
               Capped at ~5 mandates annually.
            </button>
        </div>

      </div>
    </div>
  );
};