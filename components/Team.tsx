import React from 'react';
import { TeamMember } from '../types';

interface TeamProps {
  onThesisClick: () => void;
}

const leadershipMembers: TeamMember[] = [
  {
    name: 'Dr. Vincent deFilippo',
    role: 'Senior Advisor (Principal, Vienna Capital Partners)',
    bio: 'Principal at Vienna Capital Partners with 30+ years’ experience raising billions in equity and real estate across Asia, Europe, and the US. Ex-CEO of deFilippo Capitale (APAC), led landmark $6B Amaya exit. Expert in equity lending, energy PE, and global capital markets. Proven track record in IPOs, structured finance, and investor relations.'
  },
  {
    name: 'Jean-Romain Falconnet',
    role: 'Senior Advisor (M&A & Transformation)',
    bio: 'Executed $15B+ in M&A, divestitures, and exits, including a landmark PE-backed IPO. 20+ years at Galderma (EQT) as Head of Transactions. Switzerland-based Interim CFO and Operating Partner. Delivers clean execution, risk mitigation, and value protection in high-stakes transformations for boards and investors in Life Sciences.'
  },
  {
    name: 'Anthony Minissale',
    role: 'Senior Advisor (Structuring & Capital Markets)',
    bio: '30+ years in global derivatives and financial services. Founder of AJM Partners; expert in quantitative asset models and risk platforms. Leads structuring of $100M+ funds for institutional LPs. Spearheads capital raises and M&A, aligning complex execution with Roials Capital’s mandate-driven, institutional-grade deployment strategy.'
  },
  {
    name: 'Jonas Hyltén',
    role: 'Founder & Managing Partner',
    bio: 'Founder & Managing Partner at Roials Capital. Leads capital execution mandates in Private Equity. Bridge between institutional investors and high-performance strategies with a background in M&A. Drives institutional-grade fundraising and LP alignment through proprietary execution systems, accelerating capital velocity for principals.'
  },
  {
    name: 'Richard Murbeck',
    role: 'Senior Advisor (Principal, Eferio)',
    bio: 'Serial entrepreneur and Senior Advisor with 20+ years scaling global tech. Co-founder of Seavus (scaled to 1,500 consultants in 15 countries) and Eferio. Expert in digital transformation and telecom infrastructure. Supports PE firms in capital raising and portfolio expansion aligned with Roials Capital’s LP engagement strategy.',
    link: {
      text: 'Watch interview',
      url: 'https://youtu.be/lGVxvdE8MGY?si=6sqasvJp6YmicU6C'
    }
  },
  {
    name: 'Nam Phong Ho',
    role: 'Senior Advisor (Governance & Risk)',
    bio: '25+ years at Swiss multinationals including Glencore. Board Advisor expert in risk management, governance, and controls. Built global audit hubs and fraud mitigation initiatives. CFA, CIA, CISA, CFE, QIAL, CRMA. Developed LP-grade risk frameworks that drive sustainable performance, investor trust, and enterprise excellence.'
  }
];

const globalPartners: TeamMember[] = [
  {
    name: 'Henrik Kinell',
    role: 'Partner (Nordics)',
    bio: 'Nordic Partner leveraging 20+ years of institutional origination. Structures complex collateralized lending and private capital solutions for UHNWIs, securing deep LP pipelines.'
  },
  {
    name: 'Stefan Ahlén',
    role: 'Partner (Stockholm)',
    bio: 'Stockholm-based Partner with 25+ years sales leadership and founder of Credence Invest, driving Nordic LP pipelines and institutional sales mandates.'
  },
  {
    name: 'Milos Djokovic',
    role: 'Partner (Dubai)',
    bio: 'Raised over $200 million across mandates leveraging Dubai family-office networks in real assets to drive institutional fundraising.'
  },
  {
    name: 'Omar Zidan',
    role: 'Partner (UK)',
    bio: 'Partner leading Digital Infrastructure. Architects scalable, AI-driven deal sourcing and investor management systems to support global execution.'
  },
  {
    name: 'James Rae',
    role: 'Partner (Digital Assets)',
    bio: 'Partner (Digital Assets). Structures institutional capital formation for Layer 1 protocols and DeFi infrastructure. Bridges traditional finance networks with Web3 ecosystems.'
  },
  {
    name: 'Evans Lubwama',
    role: 'Partner (Marbella)',
    bio: 'Partner overseeing Multi-Asset Strategy. Former Saxo Bank & GKFX executive. Advises Family Offices on capital allocation and liquidity strategies across global markets.'
  },
  {
    name: 'Frank J. Braider III',
    role: 'Partner (US)',
    bio: 'Structures US capital partnerships in real assets and infrastructure. Decades of private-markets expertise.'
  },
  {
    name: 'Aiswarya Madhav',
    role: 'Analyst (Ex-BNP Paribas, BNY Mellon)',
    bio: '5+ years in global banks. Strengthens PE mandates with advanced data analysis and institutional investor support.'
  }
];

export const Team: React.FC<TeamProps> = ({ onThesisClick }) => {
  return (
    <section id="team" className="py-32 bg-obsidian scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- LEADERSHIP SECTION --- */}
        <div className="mb-24 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-3">The Boardroom</h2>
            <p className="font-sans text-gray-400 text-base uppercase tracking-[0.2em]">Leadership & Advisory</p>
          </div>
          <div className="mt-8 md:mt-0">
             <span className="font-sans text-xs md:text-sm text-oldgold border border-oldgold/30 px-6 py-3 rounded-full bg-oldgold/5 font-medium">
                Principal-Led Execution
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 mb-32">
          {leadershipMembers.map((member, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="h-1 w-16 bg-gray-700 group-hover:bg-oldgold transition-colors duration-500 mb-8"></div>
              <h3 className="font-serif text-2xl text-platinum mb-3 leading-snug">{member.name}</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-oldgold mb-6 leading-relaxed font-bold min-h-[2em]">
                {member.role}
              </p>
              <p className="font-sans text-base md:text-lg text-gray-300 leading-loose opacity-90 group-hover:opacity-100 transition-opacity flex-grow font-light">
                {member.bio}
              </p>
              {member.link && (
                <div className="mt-8">
                  <a 
                    href={member.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 group/link font-medium"
                  >
                    <span className="mr-2 text-oldgold group-hover/link:text-white transition-colors">►</span> {member.link.text}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- GLOBAL PARTNERS SECTION --- */}
        <div className="mb-24 border-t border-white/10 pt-20">
          <div className="mb-16">
            <h3 className="font-display font-medium text-3xl text-platinum mb-3">Global Partners & Execution</h3>
            <p className="font-sans text-gray-400 text-sm uppercase tracking-[0.2em]">Regional & Sector Specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {globalPartners.map((member, index) => (
              <div key={index} className="group flex flex-col h-full border-l border-white/5 pl-6 hover:border-oldgold/50 transition-colors duration-500">
                <h3 className="font-serif text-xl text-platinum mb-2 leading-snug group-hover:text-white transition-colors">{member.name}</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-oldgold mb-4 font-bold">
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