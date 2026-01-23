import React from 'react';
import { TeamMember } from '../types';

interface TeamProps {
  onThesisClick: () => void;
}

const leadershipMembers: TeamMember[] = [
  {
    name: 'Dr. Vincent deFilippo',
    role: 'Senior Strategic Advisor',
    bio: 'Principal at Vienna Capital Partners with 30+ years’ experience raising billions in equity and real estate across Asia, Europe, and the US. Ex-CEO of deFilippo Capitale (APAC), led landmark $6B Amaya exit. Expert in equity lending, energy PE, and global capital markets.'
  },
  {
    name: 'Jean-Romain Falconnet',
    role: 'Senior Advisor (M&A & Transformation)',
    bio: 'Executed $15B+ in M&A, divestitures, and exits, including a landmark PE-backed IPO. 20+ years at Galderma (EQT) as Head of Transactions. Switzerland-based Operating Partner delivering value protection in high-stakes transformations.'
  },
  {
    name: 'Anthony Minissale',
    role: 'Senior Advisor (Structuring & Capital Markets)',
    bio: '30+ years in global derivatives and financial services. Founder of AJM Partners; expert in quantitative asset models. Leads structuring of $100M+ funds for institutional LPs, aligning complex execution with institutional-grade deployment.'
  },
  {
    name: 'Jonas Hyltén',
    role: 'Founder & Managing Partner',
    bio: 'Leads capital execution mandates in Private Equity. Bridge between institutional investors and high-performance strategies. Drives institutional-grade fundraising and LP alignment through proprietary execution systems.'
  }
];

const globalPartners: TeamMember[] = [
  {
    name: 'Nam Phong Ho',
    role: 'Senior Advisor (Governance & Risk)',
    bio: '25+ years at Glencore and Swiss multinationals. CFA, CIA, CISA, CFE, QIAL, CRMA. Architects LP-grade risk frameworks and global audit hubs to ensure institutional compliance and investor security.'
  },
  {
    name: 'Aiswarya Madhav',
    role: 'Head of Quantitative Analytics',
    bio: 'Head of Quantitative Analytics. Ex-BNP Paribas. Leads financial modeling and enforces institutional-grade reporting standards and risk protocols across all execution mandates.'
  },
  {
    name: 'Frank J. Braider III',
    role: 'Partner (US)',
    bio: 'Structures US capital partnerships in real assets and infrastructure. Decades of private-markets expertise, securing deep LP pipelines and institutional origination across North America.'
  },
  {
    name: 'Milos Djokovic',
    role: 'Partner (Dubai)',
    bio: 'Raised over $200 million across mandates leveraging Dubai family-office networks. Specializes in real assets to drive institutional fundraising and cross-border capital flow in the MENA region.'
  },
  {
    name: 'Omar Zidan',
    role: 'Partner (Head of Digital Deal Architecture)',
    bio: 'Partner leading Digital Deal Architecture. Architects proprietary AI-driven origination systems to algorithmically match global liquidity with off-market assets for accelerated execution.'
  },
  {
    name: 'Stefan Ahlén',
    role: 'Partner (Stockholm)',
    bio: 'Anchors the firm’s Stockholm headquarters with over 25 years of capital markets experience. Specializes in structuring Nordic deal flow for international placement, bridging local asset owners with global investors.'
  }
];

export const Team: React.FC<TeamProps> = ({ onThesisClick }) => {
  return (
    <section id="team" className="py-32 bg-obsidian scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- LEADERSHIP SECTION --- */}
        <div className="mb-24 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-3 uppercase tracking-wider">The Boardroom</h2>
            <p className="font-sans text-gray-400 text-base uppercase tracking-[0.2em]">Leadership & Strategic Advisory</p>
          </div>
          <div className="mt-8 md:mt-0">
             <span className="font-sans text-xs md:text-sm text-oldgold border border-oldgold/30 px-6 py-3 rounded-full bg-oldgold/5 font-medium uppercase tracking-widest">
                Principal-Led Execution
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-32">
          {leadershipMembers.map((member, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="h-1 w-16 bg-gray-700 group-hover:bg-oldgold transition-colors duration-500 mb-8"></div>
              <h3 className="font-serif text-2xl text-platinum mb-3 leading-snug">{member.name}</h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-oldgold mb-6 leading-relaxed font-bold min-h-[3em]">
                {member.role}
              </p>
              <p className="font-sans text-sm text-gray-400 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity flex-grow font-light">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* --- GLOBAL PARTNERS SECTION --- */}
        <div className="mb-24 border-t border-white/10 pt-20">
          <div className="mb-16">
            <h3 className="font-display font-medium text-3xl text-platinum mb-3 uppercase tracking-wider">Global Partners & Execution</h3>
            <p className="font-sans text-gray-400 text-sm uppercase tracking-[0.2em]">Regional & Sector Specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {globalPartners.map((member, index) => (
              <div key={index} className="group flex flex-col h-full border-l border-white/5 pl-8 hover:border-oldgold/50 transition-colors duration-500">
                <h3 className="font-serif text-xl text-platinum mb-2 leading-snug group-hover:text-white transition-colors">{member.name}</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-oldgold mb-6 font-bold">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- THESIS NAVIGATION BLOCK --- */}
        <div className="mt-12 pt-12 border-t border-white/5 text-center">
            <p className="font-sans text-xs text-gray-500 mb-6 tracking-[0.2em] uppercase font-bold">Driven by Conviction.</p>
            <button 
            onClick={() => {
                onThesisClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 text-oldgold hover:text-white transition-colors duration-500"
            >
            <span className="font-serif text-xl border-b border-oldgold/30 pb-2 group-hover:border-white transition-all duration-500 uppercase">
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