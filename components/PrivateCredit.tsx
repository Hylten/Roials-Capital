import React from 'react';

interface PrivateCreditProps {
  onInquireClick: () => void;
}

export const PrivateCredit: React.FC<PrivateCreditProps> = ({ onInquireClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-32 animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Financial Infrastructure" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-obsidian/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block border border-oldgold/50 px-4 py-1 mb-6 bg-obsidian/50 backdrop-blur-md">
            <span className="font-mono text-xs text-oldgold uppercase tracking-[0.2em]">The Liquidity Aggregator</span>
          </div>
          <h1 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl text-platinum tracking-wide mb-6 leading-tight">
            GLOBAL CREDIT <br/> ARCHITECTURE
          </h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl font-medium tracking-[0.15em] uppercase max-w-3xl mx-auto">
            1,100+ INSTITUTIONAL SOURCES.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* Top Section: Matrix & Advantage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Left Column: The Roials Standard */}
          <div className="lg:col-span-5 space-y-10">
            <div>
                <h2 className="font-serif text-3xl md:text-4xl text-platinum leading-tight mb-6">
                THE ROIALS <span className="text-oldgold">STANDARD.</span>
                </h2>
                <div className="w-12 h-[1px] bg-oldgold mb-8"></div>
                <p className="font-sans text-gray-400 text-lg leading-relaxed font-light mb-6">
                  We do not rely on single-bank balance sheets. We engineer competition among global lenders to force term compression, delivering liquidity structures that traditional private banks cannot match.
                </p>
            </div>

            <div className="space-y-8">
                <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Non-Recourse</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">No personal guarantees. Liability limited strictly to collateral.</p>
                </div>
                <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Non-Purpose</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">Unrestricted liquidity. Deploy for yield, real estate, or lifestyle.</p>
                </div>
                 <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Non-Shorting</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">Contractually enforced asset protection.</p>
                </div>
            </div>
          </div>

          {/* Right Column: The Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal border border-white/10 p-1 h-full">
              <div className="bg-[#151515] p-8 md:p-12 h-full flex flex-col justify-center">
                <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500">Aggregated Market Data</h3>
                  <span className="font-mono text-xs text-oldgold">Live Network Access</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  
                  <div className="group">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Transaction Size</p>
                    <p className="font-mono text-3xl md:text-4xl text-platinum group-hover:text-oldgold transition-colors">$5M – $500M+</p>
                  </div>

                  <div className="group">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Loan-to-Value (LTV)</p>
                    <p className="font-mono text-3xl md:text-4xl text-platinum group-hover:text-oldgold transition-colors">Up to 75%</p>
                  </div>

                  <div className="group">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Annual Interest</p>
                    <p className="font-mono text-3xl md:text-4xl text-platinum group-hover:text-oldgold transition-colors">Fixed from 2.00%*</p>
                    <p className="font-mono text-xs text-gray-500 mt-2">*Securities & Crypto</p>
                  </div>

                   <div className="group">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Funding Timeline</p>
                    <p className="font-mono text-3xl md:text-4xl text-platinum group-hover:text-oldgold transition-colors">3 – 14 Days</p>
                  </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <button 
                    onClick={onInquireClick}
                    className="w-full bg-oldgold hover:bg-white text-obsidian px-8 py-5 font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-transparent hover:border-gray-200"
                  >
                    INQUIRE
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Eligible Asset Classes */}
        <div className="border-t border-white/10 pt-20">
            <h3 className="font-display font-medium text-2xl text-platinum mb-12 text-center tracking-wide">Eligible Collateral Classes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Public Securities */}
                <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500 group">
                    <div className="mb-6">
                        <span className="font-mono text-oldgold text-2xl">01</span>
                    </div>
                    <h4 className="font-serif text-xl text-platinum mb-4 group-hover:text-white">Public Securities</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">
                        NYSE, NASDAQ, LSE, TSX, HKSE, ASX. 
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500">Non-Recourse</span>
                        <span className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500">No Personal Guarantees</span>
                    </div>
                </div>

                 {/* Digital Assets */}
                 <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500 group">
                    <div className="mb-6">
                        <span className="font-mono text-oldgold text-2xl">02</span>
                    </div>
                    <h4 className="font-serif text-xl text-platinum mb-4 group-hover:text-white">Digital Assets</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">
                        BTC, ETH, SOL & Major Liquid Tokens.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500">Institutional Custody</span>
                        <span className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500">Cold Storage</span>
                    </div>
                </div>

                 {/* Real Assets & Specie */}
                 <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500 group">
                    <div className="mb-6">
                        <span className="font-mono text-oldgold text-2xl">03</span>
                    </div>
                    <h4 className="font-serif text-xl text-platinum mb-4 group-hover:text-white">Real Assets & Specie</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">
                        Gold Bullion (Allocated), Investment-Grade Art, IG Corporate Bonds.
                    </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500">Bespoke Valuation & Structure</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};