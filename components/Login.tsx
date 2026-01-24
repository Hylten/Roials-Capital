import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
  onReplayIntro: () => void;
}

export const Login: React.FC<LoginProps> = ({ onBack, onReplayIntro }) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay for "Security Check"
    setTimeout(() => {
      setIsLoading(false);
      setNotification("Access restricted. Contact Investor Relations for credentials.");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-charcoal/20 to-obsidian opacity-50"></div>
        <img 
          src="https://picsum.photos/id/1015/1920/1080?grayscale&blur=4" 
          alt="Vault background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      {/* Return Link */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 text-gray-400 text-xs uppercase tracking-[0.2em] hover:text-oldgold transition-colors z-20 flex items-center gap-2 font-medium"
      >
        <span className="text-lg">&larr;</span> Return to Site
      </button>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-1 bg-gradient-to-b from-white/10 to-transparent">
        <div className="bg-[#0a0a0a] border border-white/5 p-12 shadow-2xl relative">
            
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display font-medium text-3xl text-platinum tracking-[0.15em] mb-4">
              ROIALS <span className="text-oldgold">CAPITAL</span>
            </h1>
            <div className="h-[1px] w-12 bg-oldgold/30 mx-auto my-8"></div>
            <p className="font-serif text-gray-300 italic text-xl">Limited Partner Access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold">
                Authorized Email
              </label>
              <input 
                type="email" 
                required
                className="w-full bg-white/[0.03] border border-white/10 text-platinum text-base px-5 py-4 focus:outline-none focus:border-oldgold/60 focus:bg-white/[0.05] transition-all duration-300 font-sans font-light tracking-wide placeholder-gray-600"
                placeholder="investor@institution.com"
                autoComplete="off"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold">
                Passkey
              </label>
              <input 
                type="password" 
                required
                className="w-full bg-white/[0.03] border border-white/10 text-platinum text-base px-5 py-4 focus:outline-none focus:border-oldgold/60 focus:bg-white/[0.05] transition-all duration-300 font-sans tracking-widest placeholder-gray-600"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-oldgold text-obsidian uppercase tracking-[0.2em] text-sm font-bold py-5 hover:bg-white transition-all duration-300 mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Secure Login'}
            </button>
          </form>

          {/* Secondary Action */}
          <div className="mt-10 text-center">
             <button 
                onClick={handleLogin}
                className="text-gray-500 text-xs uppercase tracking-widest hover:text-oldgold transition-colors border-b border-transparent hover:border-oldgold pb-1 font-medium"
             >
               Request Credential Access
             </button>
          </div>
          
          {/* Security Footer inside card */}
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-60">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-900 border border-green-600"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Encrypted</span>
            </div>
            <span className="text-[10px] text-gray-500 font-mono">ID: RC-SEC-2026</span>
          </div>

        </div>
      </div>

      {/* Discreet Replay Button (Bottom Right) */}
      <button 
        onClick={onReplayIntro}
        className="absolute bottom-6 right-6 text-[9px] text-gray-700 hover:text-oldgold uppercase tracking-[0.2em] transition-colors z-20 cursor-pointer font-medium opacity-60 hover:opacity-100"
      >
        Replay Intro
      </button>

      {/* Toast Notification */}
      {notification && (
        <div className="absolute bottom-12 z-50 animate-bounce">
          <div className="bg-red-900/20 backdrop-blur-md border border-red-800/50 text-red-200 px-8 py-5 flex items-center gap-4 shadow-2xl max-w-sm mx-auto">
             <span className="text-2xl">!</span>
             <p className="font-sans text-sm tracking-wide uppercase leading-relaxed font-medium">
               {notification}
             </p>
          </div>
        </div>
      )}
    </div>
  );
};