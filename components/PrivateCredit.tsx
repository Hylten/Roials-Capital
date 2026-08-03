import React, { useEffect } from 'react';

interface PrivateCreditProps {
  onInquireClick: () => void;
}

export const PrivateCredit: React.FC<PrivateCreditProps> = ({ onInquireClick }) => {
  useEffect(() => {
    document.title = "Private Credit | Roials Capital";
  }, []);

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
            TIER-ONE INSTITUTIONAL SOURCES.
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
                MANDATE <span className="text-oldgold">& FRAMEWORK</span>
                </h2>
                <div className="w-12 h-[1px] bg-oldgold mb-8"></div>
                <p className="font-sans text-gray-400 text-lg leading-relaxed font-light mb-4">
                  Direct access to tier-one institutional credit sources across public securities, digital assets, and real assets, structured to create competitive tension among lenders and secure optimized term sheets.
                </p>
                <p className="font-sans text-gray-400 text-lg leading-relaxed font-light mb-6">
                  Operating strictly as an independent advisory boutique structuring bespoke liquidity solutions for high-complexity portfolios.
                </p>
            </div>

            <div className="space-y-8">
                <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Non-Recourse Structures</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">Liability limited strictly to pledged collateral under specific underwriting terms.</p>
                </div>
                <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Non-Purpose Deployment</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">Unrestricted liquidity for strategic yield, real estate acquisition, or capital management.</p>
                </div>
                 <div className="border-l-2 border-white/10 pl-6 hover:border-oldgold transition-colors duration-300">
                    <h3 className="font-display text-lg text-platinum mb-1 uppercase tracking-wide">Contractual Protection</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">Enforceable safeguards governing asset security and risk management.</p>
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
                    <p className="font-sans text-[10px] text-gray-500 mt-2 italic">*Applies specifically to highly liquid, institutional-grade securities and select collateral tiers</p>
                  </div>

                   <div className="group">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Funding Timeline</p>
                    <p className="font-mono text-3xl md:text-4xl text-platinum group-hover:text-oldgold transition-colors">3 – 14 Days</p>
                    <p className="font-sans text-[10px] text-gray-500 mt-2 italic">Dependent on collateral hardening and custodian verification</p>
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
                        Major global exchanges (NYSE, NASDAQ, LSE, TSX, HKSE, ASX). Subject to institutional custody and margin parameters.
                    </p>
                </div>

                 {/* Digital Assets */}
                 <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500 group">
                    <div className="mb-6">
                        <span className="font-mono text-oldgold text-2xl">02</span>
                    </div>
                    <h4 className="font-serif text-xl text-platinum mb-4 group-hover:text-white">Digital Assets</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">
                        Major liquid tokens (BTC, ETH, SOL). Governed by institutional cold storage custody frameworks.
                    </p>
                </div>

                 {/* Real Assets & Specie */}
                 <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500 group">
                    <div className="mb-6">
                        <span className="font-mono text-oldgold text-2xl">03</span>
                    </div>
                    <h4 className="font-serif text-xl text-platinum mb-4 group-hover:text-white">Real Assets & Specie</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">
                        Allocated gold bullion, investment-grade art, and investment-grade corporate bonds requiring bespoke valuation.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="bg-white/[0.01] border border-white/5 p-6 rounded-sm">
            <h5 className="font-display text-xs text-gray-500 uppercase tracking-widest mb-2">Underwriting Disclaimer:</h5>
            <p className="font-sans text-xs text-gray-500 leading-relaxed italic">
              Roials Capital operates exclusively as an independent strategic advisory boutique and corporate finance platform. The firm is not a regulated financial institution, lender, or licensed credit broker, and does not directly issue loans, underwrite credit facilities, or commit capital. All credit terms, liquidity structures, and financing arrangements are originated, structured, and executed strictly through an independent network of institutional lenders, private credit funds, and custodial partners. Final terms, maximum Loan-to-Value (LTV) ratios, pricing, and execution timelines remain strictly subject to the underlying asset class, independent collateral hardening, formal third-party underwriter approval, and final legal verification. All inbound inquiries and mandates are handled on a strict principal-to-principal or qualified institutional basis.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};