import React from 'react';

export const GlobalFootprint: React.FC = () => {
  return (
    <section className="relative w-full bg-obsidian border-t border-white/10">
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[600px] relative">
        
        {/* Left Panel: London */}
        <div className="relative h-full overflow-hidden group border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/50 transition-colors duration-700 z-10"></div>
          
          {/* London Image */}
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop" 
            alt="London Architecture" 
            className="w-full h-full object-cover grayscale contrast-125 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          
          {/* City Label */}
          <div className="absolute bottom-12 left-0 right-0 text-center z-20">
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-platinum font-bold border-b border-platinum/30 pb-2">
              London
            </span>
          </div>
        </div>

        {/* Middle Panel: Stockholm */}
        <div className="relative h-full overflow-hidden group border-b md:border-b-0 md:border-r border-white/5">
          {/* Heavy Dark Overlay for Legibility */}
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/50 transition-colors duration-700 z-10"></div>
          
          {/* Stockholm Image */}
          <img 
            src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1000&auto=format&fit=crop" 
            alt="Stockholm Architecture" 
            className="w-full h-full object-cover grayscale contrast-125 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          
          {/* Main Overlay Text - Moved Here (Stockholm Middle Panel) */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
             <div className="text-center px-6 mix-blend-overlay">
                 <h2 className="font-display font-medium text-3xl md:text-4xl text-platinum leading-tight tracking-widest uppercase opacity-90">
                    Nordic Roots. <br />
                    <span className="text-lg md:text-xl tracking-[0.3em] block mt-4 text-gray-200">
                      Global Infrastructure.
                    </span>
                 </h2>
             </div>
          </div>
          
          {/* City Label */}
          <div className="absolute bottom-12 left-0 right-0 text-center z-20">
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-platinum font-bold border-b border-platinum/30 pb-2">
              Stockholm
            </span>
          </div>
        </div>

        {/* Right Panel: Dubai */}
        <div className="relative h-full overflow-hidden group">
          <div className="absolute inset-0 bg-obsidian/60 group-hover:bg-obsidian/50 transition-colors duration-700 z-10"></div>
          
          {/* Dubai Image - Preserved Working Link */}
          <img 
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop" 
            alt="Dubai Burj Khalifa" 
            className="w-full h-full object-cover grayscale contrast-125 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          
          {/* City Label */}
          <div className="absolute bottom-12 left-0 right-0 text-center z-20">
             <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-platinum font-bold border-b border-platinum/30 pb-2">
               Dubai
             </span>
          </div>
        </div>
      </div>

    </section>
  );
};