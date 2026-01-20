import React, { useEffect } from 'react';

export const Inquire: React.FC = () => {
  useEffect(() => {
    const scriptId = 'typeform-embed-script';
    
    // Cleanup existing script to force re-initialization
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-20 animate-fade-in flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-platinum tracking-wide mb-4">
          INQUIRE
        </h1>
        <div className="w-16 h-[1px] bg-oldgold mb-8"></div>
        <p className="font-sans text-gray-400 text-lg md:text-xl font-light max-w-2xl">
          Complete the form below to initiate an institutional mandate inquiry. Our senior team will review and respond within 24-48 business hours.
        </p>
      </div>

      {/* Typeform Container - Enhanced Layering */}
      <div className="flex-grow w-full bg-[#191919] min-h-[80vh] relative border-t border-white/10 shadow-2xl z-10">
        <div 
          data-tf-live="01K99VTD62Q17XB5YA65PTJNBW" 
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
         <div className="flex items-center gap-4 opacity-40">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Secure Institutional Channel</span>
         </div>
      </div>
    </div>
  );
};