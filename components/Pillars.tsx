import React, { useState } from 'react';
import { Pillar } from '../types';

interface MandateDetail {
  header: string;
  line1: string;
  line2: string;
  line3: string;
}

const mandateDetails: Record<string, MandateDetail> = {
  vienna: {
    header: 'VIENNA | PRINCIPAL EQUITY',
    line1: 'US/EU Mid-Market buyouts & strategic add-ons.',
    line2: 'Focused on control mandates & co-investments.',
    line3: 'Sector: Multi-asset platforms & Financial Services.',
  },
  lendinghub: {
    header: 'LENDINGHUB | STRATEGIC LIQUIDITY',
    line1: 'Non-recourse facilities against Tier-1 Digital & Equity assets.',
    line2: '70% LTV | 2% Fixed Interest | $5M+ Entry.',
    line3: 'Security: Zero Re-hypothecation. Segregated Cold Storage.',
  },
  naeoc: {
    header: 'NAEOC | ENERGY REAL ASSETS',
    line1: 'North American upstream & infrastructure development.',
    line2: 'Resource-backed capital strategies for Institutional LPs.',
    line3: 'Deployment: $50M - $250M per mandate.',
  },
  eferio: {
    header: 'EFERIO | DIGITAL INFRASTRUCTURE',
    line1: 'TMT & Digital transformation capital deployment.',
    line2: 'Emerging market connectivity & Tier-1 telco growth.',
    line3: 'High-velocity infrastructure strategies.',
  },
  martech: {
    header: 'MARTECH | OPERATIONAL SYSTEMS',
    line1: 'Proprietary AI-driven LP distribution & growth infra.',
    line2: 'Accelerating capital velocity for all Firm mandates.',
    line3: 'Institutional-grade investor management tech.',
  },
};

const pillars: Pillar[] = [
  {
    id: 'vienna',
    title: 'Vienna Capital Partners',
    description: 'Principal-led US/EU Private Equity & Credit.',
  },
  {
    id: 'lendinghub',
    title: 'LendingHub NYC',
    description: 'Securities-Based Lending (Public & Digital).',
  },
  {
    id: 'naeoc',
    title: 'NAEOC',
    description: 'Energy Real Assets (Upstream & Infrastructure).',
  },
  {
    id: 'eferio',
    title: 'Eferio',
    description: 'Digital Infrastructure & TMT Capital.',
  },
  {
    id: 'martech',
    title: 'Roials Martech',
    description: 'Operational Capability: AI-Driven Growth Infrastructure.',
  },
];

export const Pillars: React.FC = () => {
  const [activeMandate, setActiveMandate] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-32 bg-obsidian border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-6 tracking-wide">
            Asset Architecture
          </h2>
          <p className="font-sans text-gray-400 text-base uppercase tracking-[0.2em] font-medium">
            Strategic Pillars & Hybrid Model
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10 relative">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="group relative p-12 md:p-16 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-default min-h-[400px] flex flex-col"
            >
              {/* Gold animated border top */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oldgold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              
              <div className="flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl text-platinum mb-6 group-hover:text-oldgold transition-colors duration-300 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-300 text-lg leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              <div className="mt-10">
                 <button 
                  onClick={() => setActiveMandate(pillar.id)}
                  className="text-oldgold text-sm uppercase tracking-widest font-bold hover:text-white transition-colors flex items-center gap-2"
                 >
                   Explore Mandate <span>&rarr;</span>
                 </button>
              </div>

              {/* Quick View Popover */}
              {activeMandate === pillar.id && (
                <div 
                  className="absolute inset-0 z-50 bg-[#050505] p-10 flex flex-col justify-center animate-in fade-in zoom-in duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 border border-oldgold pointer-events-none shadow-[0_0_30px_rgba(212,175,55,0.15)]"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <h4 className="font-display text-oldgold text-sm tracking-[0.2em] font-bold">
                      {mandateDetails[pillar.id].header}
                    </h4>
                    <button 
                      onClick={() => setActiveMandate(null)}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4 font-sans text-xs tracking-widest text-gray-400 uppercase leading-relaxed font-bold">
                    <p className="border-l border-oldgold/30 pl-4">{mandateDetails[pillar.id].line1}</p>
                    <p className="border-l border-oldgold/30 pl-4">{mandateDetails[pillar.id].line2}</p>
                    <p className="border-l border-oldgold/30 pl-4">{mandateDetails[pillar.id].line3}</p>
                  </div>

                  <div className="mt-10">
                    <button 
                      onClick={() => setActiveMandate(null)}
                      className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background overlay when any popover is active */}
      {activeMandate && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveMandate(null)}
        ></div>
      )}
    </section>
  );
};