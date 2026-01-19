import React from 'react';

interface PhilosophyProps {
  onInquireClick: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onInquireClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-24">
          <h1 className="font-display font-medium text-5xl md:text-6xl text-platinum tracking-wide mb-8">
            THE MODERN THESIS
          </h1>
          <div className="w-16 h-[1px] bg-oldgold mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>

        <div className="space-y-24">
            
            {/* Section 1 */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6 border-b border-white/5 pb-2">
                    <span className="font-sans text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">01. The Paradigm Shift</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-oldgold mb-8 leading-tight">
                    CAPITAL HAS EVOLVED. THE METHOD HASN’T.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-loose">
                    In an era defined by quantitative tightening and algorithmic market dynamics, traditional capital advisory relies on outdated analog networks. The old model of passive brokerage is obsolete. Today, liquidity is not found; it is engineered through precision narrative and data-driven infrastructure.
                </p>
            </section>

            {/* Section 2 */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6 border-b border-white/5 pb-2">
                    <span className="font-sans text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">02. The Solution</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-oldgold mb-8 leading-tight">
                    ASSET ARCHITECTURE.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-loose">
                    We do not view capital raising as a sales function, but as a structural discipline. By treating investment opportunities as architectural products, we bridge the gap between Principal vision and Institutional mandates. We integrate sovereign-grade financial structuring with the precision of modern digital distribution.
                </p>
            </section>

            {/* Section 3 */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6 border-b border-white/5 pb-2">
                    <span className="font-sans text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">03. The Execution</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-oldgold mb-8 leading-tight">
                    PRINCIPAL-LED ALIGNMENT.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-loose mb-16">
                    We operate where others advise. As an independent sponsor and strategic partner, our interests are tethered to the outcome. We replace 'best efforts' with 'retained execution,' ensuring that every mandate is positioned not just to compete, but to dominate the allocation queue of global LPs.
                </p>
            </section>

        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
            <button 
                onClick={onInquireClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden border border-platinum/20 hover:border-oldgold transition-colors duration-500"
            >
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-platinum group-hover:text-oldgold transition-colors">
                    Inquire About Mandates
                </span>
                <span className="text-oldgold opacity-70 group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                </span>
            </button>
        </div>

      </div>
    </div>
  );
};