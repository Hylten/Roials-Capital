import React from 'react';

export const Regulatory: React.FC = () => {
  return (
    <div className="bg-obsidian min-h-screen pt-40 pb-32 px-6 animate-fade-in text-platinum font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Header with Semantic H1 */}
        <header className="mb-16 border-b border-white/10 pb-12 text-center md:text-left">
          <span className="font-sans text-xs font-bold text-oldgold uppercase tracking-[0.3em] block mb-4">
            Legal & Compliance Framework
          </span>
          <h1 className="font-display font-medium text-4xl md:text-5xl text-platinum tracking-wide mb-8">
            Regulatory &amp; Firm Architecture
          </h1>
          
          {/* Mandatory Introduction Paragraph */}
          <div className="bg-white/[0.02] border-l-2 border-oldgold p-6 md:p-8 rounded-r">
            <p className="font-sans text-base md:text-lg text-gray-200 font-light leading-relaxed">
              Roials Capital operates exclusively as an independent strategic advisory boutique specializing in off-market corporate deal origination, asset architecture, and institutional frameworks. The Firm does not hold client funds, does not manage public retail capital, and does not operate as a registered broker-dealer under SEC, FINRA, or equivalent retail financial authorities. All structuring and advisory mandates are strictly executed for accredited institutions, qualified purchasers, and professional B2B counterparties.
            </p>
          </div>
        </header>

        {/* Consolidated Legal Sections */}
        <div className="space-y-20 text-gray-300 font-light leading-relaxed">
          
          {/* SECTION 1: TERMS & CONDITIONS */}
          <article className="border-b border-white/10 pb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl text-oldgold mb-8 tracking-wide">
              TERMS &amp; CONDITIONS
            </h2>
            <div className="space-y-10">
              <section>
                <h3 className="font-serif text-xl text-white mb-3">1. Scope of Services</h3>
                <p className="text-gray-300">
                  Roials Capital ("the Firm") operates as a strategic asset architect and advisory firm. We do not act as a retail broker-dealer, nor do we provide personal financial advice to retail investors. Our services are strictly limited to the structuring, engineering, and strategic positioning of institutional mandates for professional, wholesale, and accredited investors.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">2. Wholesale &amp; Accredited Status</h3>
                <p className="text-gray-300">
                  Access to specific investment mandates or partnership opportunities is strictly reserved for individuals and entities who meet the definition of "Accredited Investor," "Qualified Purchaser," or "Professional Client" as defined by the relevant regulatory bodies in their respective jurisdictions. Verification of status is a mandatory prerequisite for engagement.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">3. Intellectual Property</h3>
                <p className="text-gray-300">
                  All "Asset Architecture" methodologies, proprietary structuring frameworks, text, graphics, and logos displayed on this site are the exclusive property of Roials Capital. Unauthorized reproduction is strictly prohibited.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">4. Governing Law</h3>
                <p className="text-gray-300">
                  These Terms shall be governed by the laws of Sweden. Any disputes shall be resolved exclusively in the courts of Stockholm.
                </p>
              </section>
            </div>
          </article>

          {/* SECTION 2: PRIVACY POLICY */}
          <article className="border-b border-white/10 pb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl text-oldgold mb-8 tracking-wide">
              PRIVACY POLICY
            </h2>
            <p className="mb-8 font-serif text-lg text-gray-200">
              Roials Capital is committed to protecting the confidentiality of our partners and principals. This policy outlines our practices regarding personal data in accordance with GDPR.
            </p>
            
            <div className="space-y-10">
              <section>
                <h3 className="font-serif text-xl text-white mb-3">1. Data Controller</h3>
                <div className="pl-4 border-l border-oldgold/50 space-y-1">
                  <p className="font-medium text-white">Roials Capital</p>
                  <p>Email: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors">jonas@roials.co</a></p>
                  <p>Registered office: Pollaregatan 21, Jönköping</p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">2. What We Collect</h3>
                <p className="mb-4">To facilitate institutional-grade execution, we may collect:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-oldgold text-gray-300">
                  <li><strong className="text-white">Identity Data:</strong> Name, professional title, KYC documents.</li>
                  <li><strong className="text-white">Contact Data:</strong> Institutional email addresses and phone numbers.</li>
                  <li><strong className="text-white">Financial Data:</strong> Accreditation status and investment history.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">3. How We Use Information</h3>
                <p className="mb-4">Information is utilized strictly for:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-oldgold text-gray-300">
                  <li><strong className="text-white">Mandate Structuring:</strong> Assessing suitability for capital strategies.</li>
                  <li><strong className="text-white">Compliance:</strong> AML/CTF obligations.</li>
                  <li><strong className="text-white">Communication:</strong> Confidential updates regarding mandates.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">4. Your Rights</h3>
                <p className="text-gray-300">
                  You have the right to access, rectify, or erase your data. To exercise these rights, please contact: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors border-b border-oldgold/30">jonas@roials.co</a>
                </p>
              </section>
            </div>
          </article>

          {/* SECTION 3: COOKIE POLICY */}
          <article>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-oldgold mb-8 tracking-wide">
              COOKIE POLICY
            </h2>
            
            <div className="space-y-10">
              <section>
                <h3 className="font-serif text-xl text-white mb-3">1. Purpose</h3>
                <p className="text-gray-300">
                  Roials Capital uses cookies to ensure the security and optimization of our digital infrastructure.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">2. Types of Cookies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/[0.02] p-5 border border-white/5">
                    <h4 className="text-oldgold font-bold text-xs uppercase tracking-wider mb-2">Strictly Essential</h4>
                    <p className="text-xs text-gray-400">Necessary for security and core functionality.</p>
                  </div>
                  
                  <div className="bg-white/[0.02] p-5 border border-white/5">
                    <h4 className="text-oldgold font-bold text-xs uppercase tracking-wider mb-2">Performance</h4>
                    <p className="text-xs text-gray-400">Analytics to improve our architectural reach.</p>
                  </div>

                  <div className="bg-white/[0.02] p-5 border border-white/5">
                    <h4 className="text-oldgold font-bold text-xs uppercase tracking-wider mb-2">Functional</h4>
                    <p className="text-xs text-gray-400">Personalization and portal access.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-xl text-white mb-3">3. Managing Preferences</h3>
                <p className="text-gray-300">
                  You can set your browser to decline cookies. For questions, contact: <a href="mailto:jonas@roials.co" className="text-oldgold hover:text-white transition-colors border-b border-oldgold/30">jonas@roials.co</a>
                </p>
              </section>
            </div>
          </article>

        </div>

      </div>
    </div>
  );
};
