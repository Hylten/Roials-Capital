import React from 'react';

interface HeroProps {
  onInquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInquireClick }) => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* New Mountain Texture Image */}
        <img 
          src="https://i.postimg.cc/0y2p2G4p/ivo-ivanov-c-F72u29mc-Ao-unsplash.jpg" 
          alt="Dramatic mountain texture background" 
          className="w-full h-full object-cover"
        />
        
        {/* Lightened Dark Overlay for Legibility - Cinematic Look */}
        <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlays for depth and text contrast (lighter top/bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-obsidian/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-platinum leading-tight tracking-tight mb-10 drop-shadow-2xl">
          The Modern Standard <br />
          <span className="italic text-gray-300 font-light">in</span> Capital Execution.
        </h1>
        
        <div className="w-24 h-[1px] bg-oldgold mx-auto mb-12 shadow-[0_0_15px_rgba(197,160,89,0.6)]"></div>
        
        <p className="font-sans text-gray-200 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-loose tracking-wide mb-14 font-light drop-shadow-lg text-shadow-sm">
          Institutional Capital Strategies for Mid-Market Buyouts & Add-ons. 
          Bridging the gap between Principal vision and Global Capital Markets.
        </p>
      </div>

      {/* Scroll Indicator - Fixed Alignment */}
      <div className="absolute bottom-12 left-0 w-full text-center animate-bounce z-20">
        <span className="text-gray-400 text-xs tracking-[0.2em] uppercase font-medium drop-shadow-md">Scroll</span>
      </div>
    </section>
  );
};