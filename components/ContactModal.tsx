import React, { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Load Typeform script on mount
  useEffect(() => {
    const scriptId = 'typeform-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Explicitly set to auto to ensure scrolling is re-enabled
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible backdrop-blur-sm' : 'opacity-0 invisible backdrop-blur-none delay-200'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-5xl h-[85vh] bg-charcoal border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.7)] z-10 flex flex-col transition-all duration-500 transform ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
      >
        
        {/* Header/Close Bar */}
        <div className="flex justify-between items-center p-4 bg-obsidian border-b border-white/5">
          <div className="pl-2">
            <span className="font-display text-lg text-platinum tracking-[0.1em]">
              ROIALS <span className="text-oldgold">CAPITAL</span>
            </span>
          </div>
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            <span className="hidden md:inline group-hover:text-oldgold transition-colors">Close</span>
            <div className="border border-white/10 p-2 group-hover:border-oldgold group-hover:text-oldgold transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>

        {/* Typeform Content */}
        <div className="w-full h-full bg-[#191919] relative overflow-hidden">
             <div data-tf-live="01K99VTD62Q17XB5YA65PTJNBW" className="w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};