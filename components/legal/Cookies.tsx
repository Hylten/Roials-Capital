import React from 'react';

interface CookiesProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export const Cookies: React.FC<CookiesProps> = ({ onTermsClick, onPrivacyClick }) => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in text-platinum font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Legal Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs uppercase tracking-[0.2em] font-medium border-b border-white/10 pb-6">
          <button onClick={onTermsClick} className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</button>
          <span className="text-gray-700">|</span>
          <button onClick={onPrivacyClick} className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
          <span className="text-gray-700">|</span>
          <span className="text-oldgold cursor-default font-bold border-b border-oldgold pb-1">Cookie Policy</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display font-medium text-4xl text-platinum tracking-wide mb-4">
            COOKIE POLICY
          </h1>
          <p className="text-gray-500 text-sm font-mono">Effective date: January 20, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-white mb-6">1. Purpose</h2>
            <p>
              Roials Capital uses cookies to ensure the security and optimization of our digital infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">2. Types of Cookies</h2>
            <div className="space-y-6">
              <div className="bg-white/[0.02] p-6 border border-white/5">
                <h3 className="text-oldgold font-bold text-sm uppercase tracking-wider mb-2">Strictly Essential</h3>
                <p>Necessary for security and core functionality.</p>
              </div>
              
              <div className="bg-white/[0.02] p-6 border border-white/5">
                <h3 className="text-oldgold font-bold text-sm uppercase tracking-wider mb-2">Performance</h3>
                <p>Analytics to improve our architectural reach.</p>
              </div>

              <div className="bg-white/[0.02] p-6 border border-white/5">
                <h3 className="text-oldgold font-bold text-sm uppercase tracking-wider mb-2">Functional</h3>
                <p>Personalization and portal access.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-6">3. Managing Preferences</h2>
            <p>
              You can set your browser to decline cookies. For questions, contact: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors border-b border-oldgold/30">jonas@roials.co</a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};