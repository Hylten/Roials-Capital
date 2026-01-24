import React, { useState } from 'react';

interface MandateDetail {
  header: string;
  line1: string;
  line2: string;
  line3: string;
}

const mandateDetails: Record<string, MandateDetail> = {
  continental: {
    header: 'CONTINENTAL | EUROPEAN MID-MARKET',
    line1: 'Strategic buyouts and add-on acquisitions within the EEA mid-market segment.',
    line2: 'Fragmentation arbitrage and operational professionalization of founder-led enterprises.',
    line3: 'Asset optimization through moderate leverage and cross-border expansion.',
  },
  tmt: {
    header: 'TMT | DIGITAL INFRASTRUCTURE',
    line1: 'Strategic consolidation of sovereign telecom operators and 5G broadcasting infrastructure.',
    line2: 'Operational restructuring of neutral NetCo assets and rollout of 1,500+ network sites.',
    line3: 'Cross-border listed group formation and national-scale connectivity modernization.',
  },
  liquidity: {
    header: 'INSTITUTIONAL LIQUIDITY | PRIVATE CREDIT',
    line1: 'Non-recourse liquidity facilities against Tier-1 public and digital assets.',
    line2: '70% LTV architecture with fixed rates starting at 2.00% p.a.',
    line3: 'Direct balance sheet deployment via Tier-1 custodial infrastructure.',
  }
};

interface MandatesProps {
  onInquireClick: () => void;
  onThesisClick: () => void;
}

export const Mandates: React.FC<MandatesProps> = ({ onInquireClick, onThesisClick }) => {
  const [selectedMandate, setSelectedMandate] = useState<string | null>(null);

  const closePopover = () => setSelectedMandate(null);

  return (
    <section id="mandates" className="py-32 bg-obsidian relative border-t border-white/5 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-3 tracking-wide uppercase">
              Selected Mandates
            </h2>
            <div className="w-24 h-[1px] bg-oldgold mb-8 md:mx-0 mx-auto"></div>
            <p className="font-sans text-gray-200 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
              Strict selectivity. Partnering exclusively where our architecture provides a decisive advantage.
            </p>
          </div>
        </div>

        {/* Simplified Metrics - Clean Single Row */}
        <div className="mb-24 border-y border-white/10 py-8">
           <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
              <span className="font-serif text-2xl md:text-3xl text-platinum">Principal Investments.</span>
              <span className="font-serif text-2xl md:text-3xl text-platinum">€10M – €500M+.</span>
              <span className="font-serif text-2xl md:text-3xl text-platinum">Retained Mandates.</span>
           </div>
        </div>

        {/* Reconfigured Deal Cards - Minimalist & Fact-Based */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT CARD (Buy-Side): Continental */}
          <div className="relative p-10 border border-oldgold/40 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-oldgold/70 transition-all duration-500 group min-h-[400px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-oldgold"></div>
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 bg-oldgold text-obsidian text-xs font-bold uppercase tracking-widest">
                  ACTIVE BUY-SIDE
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-6 leading-tight group-hover:text-oldgold transition-colors">
                Continental Platform
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                EU MiFID II Firms (Rev ≤ $50M).
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
              <span className="font-sans text-xs text-oldgold font-bold tracking-wide">VCP</span>
              <button 
                onClick={() => setSelectedMandate('continental')}
                className="text-2xl text-gray-500 hover:text-white transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* MIDDLE CARD (Growth): Emerging Market TMT */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[400px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  RETAINED PARTNER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-6 leading-tight group-hover:text-platinum transition-colors">
                Emerging Markets
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                Telecom & Sovereign Digital Infrastructure.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
              <span className="font-sans text-xs text-gray-500 tracking-wide">Eferio</span>
              <button 
                onClick={() => setSelectedMandate('tmt')}
                className="text-2xl text-gray-500 hover:text-white transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* RIGHT CARD (Liquidity): Institutional Liquidity */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[400px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  EXCLUSIVE PARTNER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-6 leading-tight group-hover:text-platinum transition-colors">
                Asset-Backed Liquidity
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                Public Securities & Digital Assets.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
              <span className="font-sans text-xs text-gray-500 tracking-wide">LendingHub</span>
              <button 
                onClick={() => setSelectedMandate('liquidity')}
                className="text-2xl text-gray-500 hover:text-white transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Quick View Popover Overlay */}
      {selectedMandate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closePopover}
        >
          <div 
            className="relative w-full max-w-md bg-[#050505] border border-[#D4AF37] p-10 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)] animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closePopover}
              className="absolute top-6 right-6 text-[#D4AF37] hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <h4 className="font-display text-[#D4AF37] text-sm md:text-base tracking-[0.25em] font-bold uppercase mb-10 border-b border-[#D4AF37]/20 pb-6">
              {mandateDetails[selectedMandate].header}
            </h4>

            {/* Content Body */}
            <div className="space-y-6 font-sans text-gray-300 text-sm md:text-base leading-relaxed font-light">
              <div className="flex gap-4">
                <span className="text-[#D4AF37] font-mono shrink-0">01.</span>
                <p>{mandateDetails[selectedMandate].line1}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#D4AF37] font-mono shrink-0">02.</span>
                <p>{mandateDetails[selectedMandate].line2}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#D4AF37] font-mono shrink-0">03.</span>
                <p>{mandateDetails[selectedMandate].line3}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};