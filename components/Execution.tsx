import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Deployed (via Partners)', value: '$6B+' },
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
            <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-platinum leading-tight mb-14">
              Engineering Value. <br />
              <span className="text-gray-400">Not Just Finding It.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-loose mb-10 font-light">
                We do not act as brokers. We operate as <span className="text-white font-medium">Architects</span>. 
                Every mandate begins with rigorous structuring, governance alignment, and institutional preparation. 
              </p>
              <p className="font-sans text-xl md:text-2xl text-gray-200 leading-loose font-light">
                We accept a <span className="text-oldgold italic">limited number</span> of engagements annually to ensure principal-led execution. 
                Our approach requires deep integration, moving beyond placement to true equity participation and strategic alignment.
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
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};