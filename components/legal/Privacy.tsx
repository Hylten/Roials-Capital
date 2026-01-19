import React from 'react';

interface PrivacyProps {
  onTermsClick: () => void;
  onCookiesClick: () => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onTermsClick, onCookiesClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in text-platinum font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Legal Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs uppercase tracking-[0.2em] font-medium border-b border-white/10 pb-6">
          <button onClick={onTermsClick} className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</button>
          <span className="text-gray-700">|</span>
          <span className="text-oldgold cursor-default font-bold border-b border-oldgold pb-1">Privacy Policy</span>
          <span className="text-gray-700">|</span>
          <button onClick={onCookiesClick} className="text-gray-500 hover:text-white transition-colors">Cookie Policy</button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display font-medium text-4xl text-platinum tracking-wide mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-500 text-sm font-mono">Effective date: July 1, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          <p className="mb-8 font-serif text-lg text-gray-200">
            Roials Capital is committed to protecting the confidentiality of our partners and principals. This policy outlines our practices regarding personal data in accordance with GDPR.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">1. Data Controller</h2>
            <div className="pl-4 border-l border-oldgold/50">
              <p className="mb-2 font-medium text-white">Roials Capital</p>
              <p className="mb-1">Email: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors">jonas@roials.co</a></p>
              <p>Registered office: Pollaregatan 21, Jönköping</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">2. What We Collect</h2>
            <p className="mb-4">To facilitate institutional-grade execution, we may collect:</p>
            <ul className="list-disc pl-5 space-y-3 marker:text-oldgold text-gray-300">
              <li><strong className="text-white">Identity Data:</strong> Name, professional title, KYC documents.</li>
              <li><strong className="text-white">Contact Data:</strong> Institutional email addresses and phone numbers.</li>
              <li><strong className="text-white">Financial Data:</strong> Accreditation status and investment history.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">3. How We Use Information</h2>
            <p className="mb-4">Information is utilized strictly for:</p>
            <ul className="list-disc pl-5 space-y-3 marker:text-oldgold text-gray-300">
              <li><strong className="text-white">Mandate Structuring:</strong> Assessing suitability for capital strategies.</li>
              <li><strong className="text-white">Compliance:</strong> AML/CTF obligations.</li>
              <li><strong className="text-white">Communication:</strong> Confidential updates regarding mandates.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">4. Your Rights</h2>
            <p>
              You have the right to access, rectify, or erase your data. To exercise these rights, please contact: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors border-b border-oldgold/30">jonas@roials.co</a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};