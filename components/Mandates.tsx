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
    line3: 'Structured debt capital via a proprietary network of 1,100+ institutional lenders.',
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
              Current Mandates & Strategic Partnerships
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 font-bold">
              DIRECT INVESTMENT STRATEGIES & PRIVATE CREDIT STRUCTURES
            </p>
            <div className="w-24 h-[1px] bg-oldgold mb-8 md:mx-0 mx-auto"></div>
            <p className="font-sans text-gray-200 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
              Strict selectivity. Partnering exclusively where our architecture provides a decisive advantage.
            </p>
          </div>
        </div>

        {/* Criteria Grid - Metrics bar exactly as is */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border border-white/10 p-12 bg-white/[0.01]">
          <div className="text-center md:text-left">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Primary Focus</span>
             <span className="font-serif text-3xl text-platinum">Principal Investments</span>
          </div>
          <div className="text-center md:text-left md:border-l border-white/10 md:pl-12">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Ticket Size</span>
             <span className="font-serif text-3xl text-platinum">€10M - €500M+</span>
          </div>
          <div className="text-center md:text-left md:border-l border-white/10 md:pl-12">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Engagement</span>
             <span className="font-serif text-3xl text-platinum">Retained Mandate</span>
          </div>
        </div>

        {/* Reconfigured Deal Cards - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT CARD (Buy-Side): Continental */}
          <div className="relative p-10 border border-oldgold/40 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-oldgold/70 transition-all duration-500 group min-h-[460px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-oldgold"></div>
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 bg-oldgold text-obsidian text-xs font-bold uppercase tracking-widest">
                  ACTIVE BUY-SIDE
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-6 leading-tight group-hover:text-oldgold transition-colors">
                Continental Financial Services Platform
              </h3>
              <div className="mb-4 border-l-2 border-white/20 pl-5">
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Target Profile</p>
                <p className="font-sans text-base text-gray-200 leading-relaxed">EU Investment Firms, MiFID II, Rev ≤ $50M</p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-4">
              <p className="font-sans text-sm text-oldgold font-bold tracking-wide">Lead Strategic Partner (VCP)</p>
              <button 
                onClick={() => setSelectedMandate('continental')}
                className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors text-left"
              >
                Explore Mandate &rarr;
              </button>
            </div>
          </div>

          {/* MIDDLE CARD (Growth): Emerging Market TMT */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[460px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  RETAINED PARTNER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-6 leading-tight group-hover:text-platinum transition-colors">
                Emerging Market TMT
              </h3>
              <div className="mb-4 border-l-2 border-white/20 pl-5 opacity-80 group-hover:opacity-100 transition-opacity">
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Sector</p>
                <p className="font-sans text-base text-gray-300 leading-relaxed">Telecom & Digital Infrastructure</p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-4">
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">Strategic Partner (Eferio)</p>
              <button 
                onClick={() => setSelectedMandate('tmt')}
                className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors text-left"
              >
                Explore Mandate &rarr;
              </button>
            </div>
          </div>

          {/* RIGHT CARD (Liquidity): Institutional Liquidity */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[460px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  EXCLUSIVE PARTNER
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-6 leading-tight group-hover:text-platinum transition-colors">
                Institutional Liquidity
              </h3>
              <div className="mb-4 border-l-2 border-white/20 pl-5 opacity-80 group-hover:opacity-100 transition-opacity">
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Focus</p>
                <p className="font-sans text-base text-gray-300 leading-relaxed">Non-Recourse Stock Loans & Private Credit</p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-4">
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">Strategic Partner (LendingHub)</p>
              <button 
                onClick={() => setSelectedMandate('liquidity')}
                className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors text-left"
              >
                Explore Mandate &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* --- THESIS NAVIGATION BLOCK --- */}
        <div className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="font-sans text-xs text-gray-500 mb-6 tracking-[0.2em] uppercase font-bold">Driven by Conviction.</p>
            <button 
            onClick={() => {
                onThesisClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 text-oldgold hover:text-white transition-colors duration-500"
            >
            <span className="font-serif text-xl border-b border-oldgold/30 pb-2 group-hover:border-white transition-all duration-500">
                THESIS
            </span>
            <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-500">
                &rarr;
            </span>
            </button>
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

            {/* Inquire Button within Popover */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <button 
                onClick={() => {
                  closePopover();
                  onInquireClick();
                }}
                className="w-full bg-[#D4AF37] text-obsidian text-xs uppercase tracking-[0.2em] font-bold py-4 hover:bg-white transition-all duration-300"
              >
                Inquire Mandate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};