import React, { useEffect } from 'react';

interface CapitalOriginationProps {
  onFirmClick: () => void;
  onBoardClick: () => void;
}

const pillars = [
  {
    number: '01',
    title: 'PRINCIPAL-LED LOCAL ENGAGEMENT',
    text: 'Boots-on-the-ground presence and in-person market conversations with investors and market participants. We bring local knowledge, cultural understanding and first-hand insight into European investor landscapes.',
  },
  {
    number: '02',
    title: 'PROPRIETARY INVESTOR INTELLIGENCE',
    text: 'AI-driven market mapping and research across family offices, institutional allocators and private capital networks. We analyse publicly available mandates, investment criteria and decision-maker profiles to identify potential areas of alignment.',
  },
  {
    number: '03',
    title: 'RELATIONSHIP DEVELOPMENT',
    text: 'Local market context, meeting preparation and professional networking to support informed, long-term investor relationships. We help clients navigate European markets with greater insight and local understanding.',
  },
];

export const CapitalOrigination: React.FC<CapitalOriginationProps> = ({ onFirmClick, onBoardClick }) => {
  useEffect(() => {
    document.title = "Capital | European Investor Intelligence | Roials Capital";
  }, []);

  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">

        {/* Title Block */}
        <div className="text-center mb-24">
          <h1 className="font-display font-medium text-3xl sm:text-5xl md:text-7xl text-platinum tracking-[0.15em] sm:tracking-[0.3em] mb-8 uppercase leading-tight">
            CAPITAL
          </h1>
          <div className="w-16 h-[1px] bg-oldgold mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-8"></div>
          <p className="font-sans text-oldgold text-[10px] uppercase tracking-[0.3em] font-bold">
            TECH-ENABLED INVESTOR INTELLIGENCE. POWERED BY PROPRIETARY GO-TO-MARKET ENGINEERING.
          </p>
        </div>

        {/* Main Statement */}
        <div className="space-y-32">
          <section>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Roials Capital supports established U.S. mid-market private equity managers seeking to understand and develop relationships across European investor markets.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We combine AI-driven market mapping, proprietary research and on-the-ground presence to identify relevant investor networks, map decision-makers and develop market intelligence that supports informed relationship-building.
              </p>
            </div>
          </section>

          {/* Core Pillars */}
          <section>
            <div className="space-y-20">
              {pillars.map((pillar) => (
                <div key={pillar.number}>
                  <div className="flex items-baseline gap-6 mb-6">
                    <span className="font-sans text-xs font-bold text-oldgold tracking-[0.2em]">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-platinum leading-tight uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="pl-12">
                    <div className="w-8 h-[1px] bg-white/20 mb-6"></div>
                    <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Engagement */}
          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                ENGAGEMENT
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Selective mandates for established U.S. mid-market private equity managers seeking European investor relationships.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Any regulated placement activity is undertaken only through appropriately authorised intermediaries in the relevant jurisdictions.
              </p>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                TARGET
              </span>
            </div>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Fund III+ U.S. mid-market private equity managers.
            </p>
          </section>
        </div>

        {/* Bottom Navigation — Firm Link */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="font-sans text-xs text-gray-500 mb-6 tracking-[0.2em] uppercase font-bold">
            Principal-Led. Tech-Enabled. Europe-Connected.
          </p>
          <button
            onClick={() => {
              onFirmClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 text-oldgold hover:text-white transition-colors duration-500"
          >
            <span className="font-serif text-xl border-b border-oldgold/30 pb-2 group-hover:border-white transition-all duration-500 uppercase">
              BOARD
            </span>
            <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-500">
              &rarr;
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
