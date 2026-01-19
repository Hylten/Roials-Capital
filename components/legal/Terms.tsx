import React from 'react';

interface TermsProps {
  onPrivacyClick: () => void;
  onCookiesClick: () => void;
}

export const Terms: React.FC<TermsProps> = ({ onPrivacyClick, onCookiesClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in text-platinum font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Legal Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs uppercase tracking-[0.2em] font-medium border-b border-white/10 pb-6">
          <span className="text-oldgold cursor-default font-bold border-b border-oldgold pb-1">Terms & Conditions</span>
          <span className="text-gray-700">|</span>
          <button onClick={onPrivacyClick} className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
          <span className="text-gray-700">|</span>
          <button onClick={onCookiesClick} className="text-gray-500 hover:text-white transition-colors">Cookie Policy</button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display font-medium text-4xl text-platinum tracking-wide mb-4">
            TERMS & CONDITIONS
          </h1>
          <p className="text-gray-500 text-sm font-mono">Effective date: January 20, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-white mb-6">1. Scope of Services</h2>
            <p>
              Roials Capital ("the Firm") operates as a strategic asset architect and advisory firm. We do not act as a retail broker-dealer, nor do we provide personal financial advice to retail investors. Our services are strictly limited to the structuring, engineering, and strategic positioning of institutional mandates for professional, wholesale, and accredited investors.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">2. Wholesale & Accredited Status</h2>
            <p>
              Access to specific investment mandates or partnership opportunities is strictly reserved for individuals and entities who meet the definition of "Accredited Investor," "Qualified Purchaser," or "Professional Client" as defined by the relevant regulatory bodies in their respective jurisdictions. Verification of status is a mandatory prerequisite for engagement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">3. Intellectual Property</h2>
            <p>
              All "Asset Architecture" methodologies, proprietary structuring frameworks, text, graphics, and logos displayed on this site are the exclusive property of Roials Capital. Unauthorized reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">4. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of Sweden. Any disputes shall be resolved exclusively in the courts of Stockholm.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};