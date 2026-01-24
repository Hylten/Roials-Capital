import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { 
    label: 'Track Record', 
    value: '$6B+',
    subtitle: '150+ Years Combined Experience. PE, M&A, Derivatives & Credit.' 
  },
  { label: 'Global Reach', value: 'NY · LDN · DXB · STHLM' },
  { label: 'Structure', value: 'Principal-Led' },
];

export const Execution: React.FC = () => {
  return (
    <section id="execution" className="py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-7">
            <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-platinum leading-tight mb-14 uppercase tracking-wide">
              THE ARCHITECTURAL <br />
              <span className="text-gray-400">MANDATE.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-loose mb-10 font-light">
                We combine the mindset of Entrepreneurs with the discipline of Institutional Principals.
              </p>
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-loose font-light">
                Structuring precedes placement. Capital is not found; it is engineered.
              </p>
            </div>
          </div>

          {/* Right Column: Stats & Vertical Line */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block -ml-10"></div>
             
             <div className="grid gap-16">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-oldgold pl-8 py-2">
                    <div className="font-display text-4xl md:text-5xl text-platinum mb-3">{stat.value}</div>
                    <div className="font-sans text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">{stat.label}</div>
                    {stat.subtitle && (
                      <p className="font-sans text-sm text-gray-500 mt-4 leading-relaxed max-w-xs font-light">{stat.subtitle}</p>
                    )}
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};