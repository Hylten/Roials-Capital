import React from 'react';

interface FooterProps {
  onHomeClick?: () => void;
  onLoginClick?: () => void;
  onThesisClick?: () => void;
  onPrivateCreditClick?: () => void;
  onMandatesClick?: () => void;
  onTeamClick?: () => void;
  onInquireClick?: () => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
  onCookiesClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onHomeClick,
  onLoginClick, 
  onThesisClick, 
  onPrivateCreditClick, 
  onMandatesClick,
  onTeamClick,
  onInquireClick,
  onTermsClick,
  onPrivacyClick,
  onCookiesClick
}) => {
  return (
    <footer id="contact" className="bg-charcoal pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <h3 
              onClick={onHomeClick}
              className="font-display font-medium text-3xl text-platinum tracking-[0.1em] mb-8 cursor-pointer group"
            >
              ROIALS <span className="text-oldgold group-hover:text-white transition-colors">CAPITAL</span>
            </h3>
            <p className="font-sans text-gray-400 text-lg max-w-sm mb-8 font-light">
              Stockholm · London · Dubai
            </p>
            <a 
              href="https://www.linkedin.com/company/roials/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans text-base text-oldgold border-b border-oldgold/30 pb-1 hover:text-white hover:border-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div>
             <h4 className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">Strategies</h4>
             <ul className="space-y-5">
                <li 
                  onClick={onMandatesClick}
                  className="text-gray-300 text-base hover:text-oldgold cursor-pointer transition-colors font-light"
                >
                  Private Equity
                </li>
                <li 
                  onClick={onPrivateCreditClick}
                  className="text-gray-300 text-base hover:text-oldgold cursor-pointer transition-colors font-light"
                >
                  Private Credit
                </li>
             </ul>
          </div>

          <div>
             <h4 className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">Firm</h4>
             <ul className="space-y-5">
                <li 
                  onClick={onHomeClick}
                  className="text-gray-300 text-base hover:text-white cursor-pointer transition-colors font-light"
                >
                  Home
                </li>
                <li 
                  onClick={onTeamClick}
                  className="text-gray-300 text-base hover:text-white cursor-pointer transition-colors font-light"
                >
                  Partners
                </li>
                <li 
                  onClick={onInquireClick}
                  className="text-gray-300 text-base hover:text-oldgold cursor-pointer transition-colors font-light"
                >
                  Inquire
                </li>
                <li 
                  onClick={onLoginClick}
                  className="text-gray-300 text-base hover:text-oldgold cursor-pointer transition-colors flex items-center gap-2 font-light"
                >
                  LP Access 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </li>
             </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-12">
          
          {/* Formal Disclaimer */}
          <div className="mb-12">
            <p className="font-sans text-[10px] text-gray-600 text-center leading-relaxed max-w-5xl mx-auto">
              The information contained on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. The content is not intended to provide investment, tax, or legal advice. Past performance is not indicative of future results, and all investments involve risk, including the potential loss of principal. Intended solely for Wholesale, Professional, and Accredited Investors.
            </p>
          </div>

          {/* Sub-Footer Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-900 pt-8 mt-12">
            <p className="font-sans text-xs text-gray-600">
              &copy; 2026 Roials Capital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button onClick={onTermsClick} className="font-sans text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms & Conditions</button>
              <button onClick={onPrivacyClick} className="font-sans text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</button>
              <button onClick={onCookiesClick} className="font-sans text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};