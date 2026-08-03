import React, { useEffect } from 'react';

interface CapitalOriginationProps {
  onFirmClick: () => void;
}

const pillars = [
  {
    number: '01',
    title: 'PRINCIPAL-LED EXECUTION',
    paragraphs: [
      'Direct dealmaker-led investor sessions backed by a global advisory board with deep combined experience across private markets, M&A and cross-border transactions.',
    ],
  },
  {
    number: '02',
    title: 'PROPRIETARY INVESTOR INTELLIGENCE',
    paragraphs: [
      'Agentic origination workflows and multi-channel counterparty mapping engineered for precision engagement with qualified LP decision-makers across family offices, institutional allocators and private capital networks across Europe and selected global markets.',
      'Human-in-the-loop governance maintains institutional execution quality at every stage of the outreach and qualification process.',
    ],
  },
  {
    number: '03',
    title: 'SEQUENCED CAPITAL PROGRESSION',
    paragraphs: [
      'Asset hardening, data-room structuring, and controlled counterparty velocity. Mandate speed is a function of structural precision, not outreach volume.',
    ],
  },
];

export const CapitalOrigination: React.FC<CapitalOriginationProps> = ({ onFirmClick }) => {
  useEffect(() => {
    document.title = "Capital Origination | Roials Capital";
  }, []);

  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">

        {/* Title Block */}
        <div className="text-center mb-24">
          <h1 className="font-display font-medium text-3xl sm:text-5xl md:text-7xl text-platinum tracking-[0.15em] sm:tracking-[0.3em] mb-8 uppercase leading-tight">
            CAPITAL FORMATION
          </h1>
          <div className="w-16 h-[1px] bg-oldgold mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-8"></div>
          <p className="font-sans text-oldgold text-[10px] uppercase tracking-[0.3em] font-bold">
            THE EXECUTION ARCHITECTURE
          </p>
        </div>

        {/* The Architecture — Main Statement */}
        <div className="space-y-32">
          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                THE EXECUTION ARCHITECTURE
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Roials Capital executes direct capital formation for private equity managers and mid-market buy-and-build platforms.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We do not market teasers. We engineer counterparty selection and lead sessions directly to committed capital.
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
                    {pillar.paragraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed${idx < pillar.paragraphs.length - 1 ? ' mb-6' : ''}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mandate Selection */}
          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                MANDATE SELECTION
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Selective engagement by Investment Committee approval only.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Target: Fund III+ PE managers and institutional mid-market operators.
              </p>
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
