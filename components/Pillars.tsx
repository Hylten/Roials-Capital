import React from 'react';
import { Pillar } from '../types';

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
  return (
    <section id="architecture" className="py-32 bg-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-6 tracking-wide">
            Asset Architecture
          </h2>
          <p className="font-sans text-gray-400 text-base uppercase tracking-[0.2em] font-medium">
            Strategic Pillars & Hybrid Model
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="group relative p-12 md:p-16 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oldgold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-platinum mb-6 group-hover:text-oldgold transition-colors duration-300 leading-tight">
                {pillar.title}
              </h3>
              <p className="font-sans text-gray-300 text-lg leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                 <span className="text-oldgold text-sm uppercase tracking-widest font-bold">Explore Mandate &rarr;</span>
              </div>
            </div>
          ))}
          
          {/* Filler box */}
          <div className="hidden lg:flex p-12 md:p-16 border-r border-b border-white/10 items-center justify-center bg-white/[0.01]">
             <span className="font-display text-gray-700 text-5xl opacity-20">RC</span>
          </div>
        </div>
      </div>
    </section>
  );
};