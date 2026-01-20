import React from 'react';

const capabilities = [
  {
    title: 'PRIVATE EQUITY',
    subtitle: 'PRINCIPAL INVESTMENT',
    description: 'Control buyouts in regulated sectors and founder-led enterprises. Focus on scalable platforms within Financial Services and the European Mid-Market.',
    icon: (
      <svg className="w-8 h-8 text-oldgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'PRIVATE CREDIT',
    subtitle: 'SPECIAL SITUATIONS & LIQUIDITY',
    description: 'Asset-backed credit structuring for complex liquidity needs. Non-recourse facilities against digital and traditional collateral classes.',
    icon: (
      <svg className="w-8 h-8 text-oldgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: 'INFRASTRUCTURE',
    subtitle: 'ENERGY & DIGITAL INFRASTRUCTURE',
    description: 'Direct investment in system-critical assets. From North American energy reserves to sovereign-level TMT and 5G infrastructure in emerging markets.',
    icon: (
      <svg className="w-8 h-8 text-oldgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 bg-obsidian border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-platinum mb-6 tracking-wide">
            Strategic Capabilities
          </h2>
          <p className="font-sans text-gray-400 text-xs uppercase tracking-[0.25em] font-bold">
            Areas of Expertise & Principal Focus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
          {capabilities.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-12 md:p-16 flex flex-col min-h-[420px] transition-all duration-500 hover:bg-white/[0.02] border-white/10 ${
                idx !== capabilities.length - 1 ? 'lg:border-r border-b lg:border-b-0' : 'border-b lg:border-b-0'
              }`}
            >
              <div className="mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <h3 className="font-display text-platinum text-2xl tracking-[0.1em] mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="font-sans text-oldgold text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                  {item.subtitle}
                </p>
                <div className="w-8 h-[1px] bg-white/20 mb-8"></div>
                <p className="font-sans text-gray-300 text-lg leading-loose font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};