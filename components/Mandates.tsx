import React from 'react';
import { Button } from './Button';

interface MandatesProps {
  onInquireClick: () => void;
  onThesisClick: () => void;
}

export const Mandates: React.FC<MandatesProps> = ({ onInquireClick, onThesisClick }) => {
  return (
    <section id="mandates" className="py-32 bg-obsidian relative border-t border-white/5 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-3 tracking-wide">
              INSTITUTIONAL EQUITY
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 font-bold">
              DIRECT INVESTMENT STRATEGIES & ACTIVE BUY-SIDE
            </p>
            <div className="w-24 h-[1px] bg-oldgold mb-8 md:mx-0 mx-auto"></div>
            <p className="font-sans text-gray-200 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
              Strict selectivity. Partnering exclusively where our architecture provides a decisive advantage.
            </p>
          </div>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border border-white/10 p-12 bg-white/[0.01]">
          <div className="text-center md:text-left">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Primary Focus</span>
             <span className="font-serif text-3xl text-platinum">Private Equity Buyouts (M&A)</span>
          </div>
          <div className="text-center md:text-left md:border-l border-white/10 md:pl-12">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Ticket Size</span>
             <span className="font-serif text-3xl text-platinum">€10M - €500M+</span>
          </div>
          <div className="text-center md:text-left md:border-l border-white/10 md:pl-12">
             <span className="block text-oldgold text-sm font-bold uppercase tracking-[0.2em] mb-4">Engagement</span>
             <span className="font-serif text-3xl text-platinum">Retained Representation</span>
          </div>
        </div>

        {/* Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          
          {/* Card 1: Highlight */}
          <div className="relative p-10 border border-oldgold/40 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-oldgold/70 transition-all duration-500 group min-h-[440px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-oldgold"></div>
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 bg-oldgold text-obsidian text-xs font-bold uppercase tracking-widest">
                  Active Buy-Side
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-6 leading-tight group-hover:text-oldgold transition-colors">
                Continental Financial Services Platform
              </h3>
              <div className="mb-4 border-l-2 border-white/20 pl-5">
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Target Profile</p>
                <p className="font-sans text-base text-gray-200">EU Investment Firms, MiFID II, Rev ≤ $50M</p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="font-sans text-sm text-oldgold font-bold tracking-wide">Lead Strategic Partner (VCP)</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[440px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  Retained Partner
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-4 leading-tight group-hover:text-platinum transition-colors">
                North American Energy Assets
              </h3>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">Strategic Partner (NAEOC)</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[440px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  Retained Partner
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-4 leading-tight group-hover:text-platinum transition-colors">
                Emerging Market TMT
              </h3>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">Strategic Partner (Eferio)</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative p-10 border border-white/10 bg-transparent hover:bg-white/[0.01] transition-all duration-500 min-h-[440px] flex flex-col justify-between group">
            <div>
              <div className="mb-8 pt-2">
                <span className="inline-block px-4 py-1.5 border border-white/30 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:border-white/50 transition-colors">
                  Exclusive Partner
                </span>
              </div>
              <h3 className="font-serif text-2xl text-gray-200 mb-4 leading-tight group-hover:text-platinum transition-colors">
                Institutional Liquidity
              </h3>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="font-sans text-sm text-gray-400 group-hover:text-gray-200 tracking-wide">Strategic Partner (LendingHub)</p>
            </div>
          </div>
        </div>

        {/* Thesis Navigation */}
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
    </section>
  );
};