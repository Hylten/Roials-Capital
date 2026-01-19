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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Firm', action: onTeamClick },
    { name: 'Equity', action: onMandatesClick },
    { name: 'Credit', action: onCreditClick },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
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
              if (onHomeClick) onHomeClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-4"
          >
            {/* Golden Lion Image (Transparent) */}
            <img 
              src="https://i.postimg.cc/rFZDjGDT/Lion-King-ROIALS-Chat-GPT-Image-Mar-26-2025-09-42-11-AM-removebg-preview.png" 
              alt="Roials Capital Lion" 
              className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Wordmark */}
            <span className="font-display text-lg md:text-xl tracking-[0.15em] text-oldgold hover:text-white transition-colors duration-500 font-medium">
              ROIALS CAPITAL
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                  if (link.action) {
                      link.action();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
              }}
              className="font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 font-medium cursor-pointer text-gray-400 hover:text-oldgold"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-oldgold"
          onClick={onInquireClick} 
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};