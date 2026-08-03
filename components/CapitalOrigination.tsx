import React, { useEffect } from 'react';

interface CapitalOriginationProps {
  onFirmClick: () => void;
}

const pillars = [
  {
    number: '01',
    title: 'PRINCIPAL-LED EXECUTION',
    paragraphs: [
      'Direct dealmaker-led investor sessions backed by a global advisory board with 160+ years of combined experience across private markets, M&A and cross-border transactions.',
      'Every mandate is led from the front. We enter investor sessions directly, manage the narrative, address complex objections and maintain process momentum from first engagement to formal indications of interest.',
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
    title: 'STRUCTURED CAPITAL PROGRESSION',
    paragraphs: [
      'Pre-emptive asset hardening, institutional data-room structuring and disciplined follow-through from first LP engagement to formal indications of interest and term sheets.',
      'Mandate velocity is not a function of outreach volume. It is a function of structural precision, sequenced investor engagement and controlled counterparty progression.',
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
                THE ARCHITECTURE
              </span>
            </div>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              We do not act as passive placement agents. We combine proprietary investor intelligence infrastructure, GTM-engineered outreach and senior dealmaker representation to drive capital formation processes for established fund managers and private equity firms.
            </p>
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

          {/* Who We Work With */}
          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                WHO WE WORK WITH
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Roials Capital accepts mandates from established private equity fund managers and buy-and-build operators seeking structured access to institutional LP capital.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We do not work with every mandate. Active engagements are assessed selectively and accepted subject to investment committee approval.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Primary focus: Fund III+ private equity managers and established mid-market operators with a defined capital structure and clear path to close.
              </p>
            </div>
          </section>

          {/* What This Is Not */}
          <section>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-white/10 pb-4">
              <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em]">
                WHAT THIS IS NOT
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We are not a placement agent in the traditional sense. We do not distribute teaser documents and wait for responses.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                We build mandate-specific investor architecture, qualify counterparties against verified dry powder and active allocation mandates, and lead the execution process directly until capital is committed.
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
