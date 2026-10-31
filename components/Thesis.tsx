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
                    THE BEST ACQUISITIONS ARE OFTEN NEVER MARKETED.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Competitive auction processes create crowded environments for buyers. Proprietary deal origination starts before a company enters the market. We identify acquisition targets, establish direct owner relationships and develop opportunities beyond traditional sale processes.
                </p>
            </section>

            {/* Section 2: The Architecture */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                    <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">02. THE ARCHITECTURE</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                    ACQUISITION THESIS. ENGINEERED.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Every mandate starts with the investment thesis. We translate acquisition criteria into a structured target universe through GTM Engineering, AI-enabled research, systematic target identification and prioritised owner outreach.
                </p>
            </section>

            {/* Section 3: The Execution */}
            <section>
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                    <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">03. THE EXECUTION</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                    DIRECT OWNER ENGAGEMENT.
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16">
                    Research is only the starting point. We engage owners directly, assess interest and strategic fit, qualify opportunities and support owner negotiations. Each mandate is tailored to the acquisition strategy, from initial outreach to negotiation and closing support.
                </p>
            </section>

        </div>

        {/* Section 4: Investment Focus */}
        <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
                <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">04. INVESTMENT FOCUS</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-platinum mb-6 leading-tight uppercase tracking-wide">
                CONTROL. PLATFORM. ADD-ONS.
            </h2>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We work with private equity principals pursuing buyouts, majority acquisitions and control investments. Our focus is sourcing platform and add-on targets for private equity buyout strategies.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6">
                Off-market acquisition origination is our primary mandate. Selective institutional capital introductions may complement relevant transactions.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-6">
                Mandate-specific target mapping and origination strategies disclosed under NDA in qualifying discovery calls.
            </p>
        </section>

      </div>
    </div>
  );
};
