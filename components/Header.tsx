import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onHomeClick?: () => void;
  onThesisClick?: () => void;
  onCreditClick?: () => void;
  onMandatesClick?: () => void;
  onTeamClick?: () => void;
  onInquireClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onHomeClick, 
  onThesisClick, 
  onCreditClick, 
  onMandatesClick,
  onTeamClick,
  onInquireClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleNavAction = (action?: () => void) => {
    setIsMobileMenuOpen(false);
    if (action) action();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-obsidian/95 backdrop-blur-md border-oldgold/10 py-4' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavAction(onHomeClick);
              }}
              className="group flex items-center gap-4"
            >
              <img 
                src="https://i.postimg.cc/rFZDjGDT/Lion-King-ROIALS-Chat-GPT-Image-Mar-26-2025-09-42-11-AM-removebg-preview.png" 
                alt="Roials Capital Lion" 
                className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="font-display text-base md:text-xl tracking-[0.2em] text-oldgold group-hover:text-white transition-colors duration-500 font-medium">
                ROIALS CAPITAL
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Visible only on md and up */}
          <nav className="hidden lg:flex items-center gap-10">
            <button 
              onClick={() => handleNavAction(onMandatesClick)}
              className="font-sans text-[10px] tracking-[0.2em] text-platinum hover:text-oldgold transition-colors font-bold uppercase"
            >
              Equity
            </button>
            <button 
              onClick={() => handleNavAction(onCreditClick)}
              className="font-sans text-[10px] tracking-[0.2em] text-platinum hover:text-oldgold transition-colors font-bold uppercase"
            >
              Credit
            </button>
            <button 
              onClick={() => handleNavAction(onTeamClick)}
              className="font-sans text-[10px] tracking-[0.2em] text-platinum hover:text-oldgold transition-colors font-bold uppercase"
            >
              Firm
            </button>
            <button 
              onClick={() => handleNavAction(onInquireClick)}
              className="font-sans text-[10px] tracking-[0.2em] text-oldgold border border-oldgold/30 px-6 py-2 hover:bg-oldgold hover:text-obsidian transition-all font-bold uppercase"
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Hamburger Toggle - Visible only on smaller screens */}
          <button 
            className="lg:hidden text-oldgold p-2 hover:text-white transition-colors duration-300 focus:outline-none relative z-[10001]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h10" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] bg-[#050505] transition-all duration-700 flex flex-col items-center justify-center lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <button 
            onClick={() => handleNavAction(onHomeClick)}
            className="font-display text-2xl tracking-[0.25em] text-platinum hover:text-oldgold transition-all duration-500 uppercase"
          >
            HOME
          </button>
          <button 
            onClick={() => handleNavAction(onMandatesClick)}
            className="font-display text-2xl tracking-[0.25em] text-platinum hover:text-oldgold transition-all duration-500 uppercase"
          >
            EQUITY
          </button>
          <button 
            onClick={() => handleNavAction(onCreditClick)}
            className="font-display text-2xl tracking-[0.25em] text-platinum hover:text-oldgold transition-all duration-500 uppercase"
          >
            CREDIT
          </button>
          <button 
            onClick={() => handleNavAction(onTeamClick)}
            className="font-display text-2xl tracking-[0.25em] text-platinum hover:text-oldgold transition-all duration-500 uppercase"
          >
            FIRM
          </button>
          
          <div className="w-12 h-[1px] bg-white/10 my-4"></div>
          
          <button 
            onClick={() => handleNavAction(onInquireClick)}
            className="font-display text-2xl tracking-[0.25em] text-oldgold border-2 border-oldgold/30 px-10 py-4 hover:bg-oldgold hover:text-obsidian transition-all duration-500 uppercase"
          >
            INQUIRE
          </button>
        </nav>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] -skew-x-12 transform origin-top-right pointer-events-none"></div>
      </div>
    </>
  );
};