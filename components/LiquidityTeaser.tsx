import React from 'react';

interface LiquidityTeaserProps {
  onExploreClick: () => void;
}

export const LiquidityTeaser: React.FC<LiquidityTeaserProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-platinum text-obsidian py-20 border-y-4 border-oldgold relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-200/50 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="text-center lg:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mb-4 block">
              Institutional Liquidity
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight max-w-3xl">
              Structured debt capital and non-recourse lending solutions. Aggregating 1,100+ global lenders.
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 font-sans text-sm md:text-base font-medium text-gray-700 tracking-wide mb-8">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-oldgold rounded-full"></span>
                Rates from 2.00%
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-oldgold rounded-full"></span>
                LTV up to 75%
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-oldgold rounded-full"></span>
                From $5M
              </span>
            </div>

            <button 
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-bold border-b-2 border-obsidian pb-1 hover:text-oldgold hover:border-oldgold transition-colors duration-300"
            >
              Explore Credit Strategies <span>&rarr;</span>
            </button>
          </div>

          {/* Icon / Visual Element */}
          <div className="hidden lg:block">
            <div className="w-32 h-32 border border-obsidian/10 flex items-center justify-center p-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-obsidian/20" stroke="currentColor" strokeWidth="0.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};