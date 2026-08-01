import React from 'react';

interface DealOriginationProps {
  onFirmClick: () => void;
}

const pillars = [
  {
    number: '01',
    title: 'MANDATE',
    description:
      'Proprietary target acquisition for Fund-III+ buyouts across the EMEA mid-market, executing continental platform consolidation. Operations managed directly through the ',
    linkText: 'board',
    postLink: ' of senior M&A specialists to guarantee absolute execution quality. Securing closed-loop deal flow and asymmetrical market access invisible to traditional intermediary networks.',
  },
  {
    number: '02',
    title: 'PARAMETERS',
    description:
      'Focus: Real assets, private enterprises, and asset-based lending with strict underwriting standards. Execution: Principal-to-principal framework governed by conviction-based stewardship. Capacity: Strictly selective deployment capped to preserve execution quality.',
  }
];

export const DealOrigination: React.FC<DealOriginationProps> = ({ onFirmClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">

        {/* Title Block */}
        <div className="text-center mb-24">
          <h1 className="font-display font-medium text-5xl md:text-7xl text-platinum tracking-[0.3em] mb-8 uppercase">
            DEAL ORIGINATION
          </h1>
          <div className="w-16 h-[1px] bg-oldgold mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-8"></div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-32">
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
                    <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed whitespace-pre-wrap">
                      {pillar.description}
                      {pillar.linkText && (
                        <>
                          <button
                            onClick={() => {
                              onFirmClick();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-oldgold hover:text-white border-b border-oldgold/30 hover:border-white pb-[1px] transition-all duration-500 cursor-pointer"
                          >
                            {pillar.linkText}
                          </button>
                          {pillar.postLink}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Navigation — Firm Link */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="font-sans text-xs text-gray-500 mb-6 tracking-[0.2em] uppercase font-bold">
            Principal-Led. Outcome-Aligned.
          </p>
          <button
            onClick={() => {
              onFirmClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 text-oldgold hover:text-white transition-colors duration-500"
          >
            <span className="font-serif text-xl border-b border-oldgold/30 pb-2 group-hover:border-white transition-all duration-500 uppercase">
              FIRM
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
