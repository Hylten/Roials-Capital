import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ContactModal } from './components/ContactModal';
import { Thesis } from './components/Thesis';
import { PrivateCredit } from './components/PrivateCredit';
import { Mandates } from './components/Mandates';
import { Team } from './components/Team';
import { Inquire } from './components/Inquire';
import { Terms } from './components/legal/Terms';
import { Privacy } from './components/legal/Privacy';
import { Cookies } from './components/legal/Cookies';
import { SplashScreen } from './components/SplashScreen';
import { DataRoom } from './components/DataRoom';
import { IntelligenceIndex } from './components/intelligence/IntelligenceIndex';
import { IntelligenceArticle } from './components/intelligence/IntelligenceArticle';

type View = 'home' | 'login' | 'thesis' | 'private-credit' | 'mandates' | 'team' | 'inquire' | 'terms' | 'privacy' | 'cookies' | 'dataroom';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [intelligenceSlug, setIntelligenceSlug] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [accessType, setAccessType] = useState<'lp-access' | 'dataroom'>('lp-access'); // Nytt state för att spara åtkomsttyp

  // Initial Logic
  useEffect(() => {
    // GitHub Pages SPA redirect handling
    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      const redirectedPath = new URL(redirect).pathname;
      
      if (redirectedPath.startsWith('/intelligence')) {
        const slug = redirectedPath.replace('/intelligence', '').replace(/^\/|\/$/g, '');
        if (slug) {
          setIntelligenceSlug(slug);
        }
        setCurrentView('home');
        setAnimationComplete(true);
        setIsRevealed(true);
        window.history.replaceState({}, '', redirectedPath);
        return;
      }
    }

    // Check for SEO Intelligence URLs
    const path = window.location.pathname;
    if (path.startsWith('/intelligence')) {
      const slug = path.replace('/intelligence', '').replace(/^\/|\/$/g, '');
      if (slug) {
        setIntelligenceSlug(slug);
      }
      setCurrentView('home'); // Override rendering down below
      setAnimationComplete(true);
      setIsRevealed(true);
      return; // Skip standard splash logic for SEO routes
    }

    // Check for explicit View URLs from Intelligence pages redirecting back
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view') as View | null;

    if (viewParam) {
      setCurrentView(viewParam);
      setAnimationComplete(true);
      setIsRevealed(true);
      setShowSplash(false);
      // Clean up URL without triggering a reload
      window.history.replaceState({}, '', '/');
      return;
    }

    // Check session storage to see if we should show splash
    const hasSeenSplash = sessionStorage.getItem('roials_splash_seen');
    const authStatus = sessionStorage.getItem('roials_dataroom_auth');

    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    if (!hasSeenSplash) {
      setShowSplash(true);
      // Main content starts hidden/pushed down slightly
      setIsRevealed(false);
      setAnimationComplete(false);
      // Mark as seen
      sessionStorage.setItem('roials_splash_seen', 'true');
    } else {
      // If seen, immediately show content and skip animation
      setIsRevealed(true);
      setAnimationComplete(true);
    }

    // Scroll handling
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleSplashComplete = () => {
    setIsRevealed(true);
    // Faster reveal timings to match 3s splash
    setTimeout(() => {
      setAnimationComplete(true);
    }, 800);
    setTimeout(() => setShowSplash(false), 1000);
  };

  const handleViewChange = (view: View) => {
    // If trying to access dataroom, but not authenticated, go to login
    if (view === 'dataroom' && !isAuthenticated) {
      setCurrentView('login');
      setAccessType('dataroom'); // Spara att vi försökte nå dataroom
      return;
    }
    if (view === 'login') {
      setAccessType('lp-access'); // Spara att vi försökte nå lp-access
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('roials_dataroom_auth', 'true');
    setCurrentView('dataroom');
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('roials_splash_seen');
    window.location.reload();
  };

  if (currentView === 'login' && !window.location.pathname.startsWith('/intelligence')) {
    return <Login onBack={() => handleViewChange('home')} onReplayIntro={handleReplayIntro} onLoginSuccess={handleLoginSuccess} accessType={accessType} />;
  }

  // SEO Route Hijack
  if (window.location.pathname.startsWith('/intelligence')) {
    return (
      <div className="bg-obsidian min-h-screen text-platinum selection:bg-oldgold selection:text-obsidian flex flex-col">
        <Header
          onHomeClick={() => { window.location.href = '/'; }}
          onThesisClick={() => { window.location.href = '/?view=thesis'; }}
          onCreditClick={() => { window.location.href = '/?view=private-credit'; }}
          onMandatesClick={() => { window.location.href = '/?view=mandates'; }}
          onTeamClick={() => { window.location.href = '/?view=team'; }}
          onInquireClick={() => { window.location.href = '/'; }}
          onLoginClick={() => { window.location.href = '/?view=login'; }}
          onDataRoomClick={() => { window.location.href = '/?view=dataroom'; }}
        />
        <main className="flex-grow">
          {intelligenceSlug ? (
            <IntelligenceArticle slug={intelligenceSlug} />
          ) : (
            <IntelligenceIndex />
          )}

          {/* Home Button Centered after content with 3cm+ gap */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', paddingBottom: '60px', width: '100%' }}>
            <a
              href="/"
              className="px-6 py-2 bg-obsidian/80 backdrop-blur-md border border-white/10 text-oldgold text-[10px] tracking-[0.3em] uppercase hover:bg-oldgold hover:text-obsidian transition-all duration-300 shadow-lg"
            >
              Return Home
            </a>
          </div>
        </main>

        {/* WhatsApp Floating Button - Discreet Grayscale */}
        <a
          href="https://wa.me/46701619978?text=Regarding%20Roials%20Capital:"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] bg-obsidian border border-white/10 p-2.5 rounded-full shadow-xl opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <svg className="w-4 h-4 text-platinum" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <Footer
          onHomeClick={() => { window.location.href = '/'; }}
          onLoginClick={() => { window.location.href = '/?view=login'; }}
          onThesisClick={() => { window.location.href = '/?view=thesis'; }}
          onPrivateCreditClick={() => { window.location.href = '/?view=private-credit'; }}
          onMandatesClick={() => { window.location.href = '/?view=mandates'; }}
          onTeamClick={() => { window.location.href = '/?view=team'; }}
          onInquireClick={() => { window.location.href = '/'; }}
          onTermsClick={() => { window.location.href = '/?view=terms'; }}
          onPrivacyClick={() => { window.location.href = '/?view=privacy'; }}
          onCookiesClick={() => { window.location.href = '/?view=cookies'; }}
          onDataRoomClick={() => { window.location.href = '/?view=dataroom'; }}
        />
      </div>
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Header positioned outside the transformed container to ensure sticky/fixed positioning works correctly */}
      <Header
        onHomeClick={() => handleViewChange('home')}
        onThesisClick={() => handleViewChange('thesis')}
        onCreditClick={() => handleViewChange('private-credit')}
        onMandatesClick={() => handleViewChange('mandates')}
        onTeamClick={() => handleViewChange('team')}
        onInquireClick={() => handleViewChange('inquire')}
        onLoginClick={() => handleViewChange('login')}
        onDataRoomClick={() => handleViewChange('dataroom')}
        showLogo={currentView !== 'login' && !(currentView === 'dataroom' && !isAuthenticated)}
      />

      {/* Main Content Wrapper */}
      <div
        className={`bg-obsidian min-h-screen text-platinum selection:bg-oldgold selection:text-obsidian flex flex-col ${animationComplete
          ? '' // Remove transforms after animation to fix fixed-positioning contexts (popups, etc)
          : `transition-all duration-[1000ms] ease-out will-change-transform ${isRevealed
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-[0.98] translate-y-12' // Subtle depth effect while waiting for splash
          }`
          }`}
      >
        <main className="flex-grow">
          {currentView === 'dataroom' && (
            isAuthenticated ? <DataRoom onBack={() => handleViewChange('home')} /> : <Login onBack={() => handleViewChange('home')} onReplayIntro={handleReplayIntro} onLoginSuccess={handleLoginSuccess} accessType={'dataroom'} />
          )}
          {currentView === 'home' && (
            <Home
              onInquireClick={() => handleViewChange('inquire')}
              onTeamClick={() => handleViewChange('team')}
              onEquityClick={() => handleViewChange('mandates')}
              onCreditClick={() => handleViewChange('private-credit')}
            />
          )}
          {currentView === 'thesis' && (
            <Thesis onInquireClick={() => handleViewChange('inquire')} />
          )}
          {currentView === 'private-credit' && (
            <PrivateCredit onInquireClick={() => handleViewChange('inquire')} />
          )}
          {currentView === 'mandates' && (
            <Mandates
              onInquireClick={() => handleViewChange('inquire')}
              onThesisClick={() => handleViewChange('thesis')}
            />
          )}
          {currentView === 'team' && (
            <Team onThesisClick={() => handleViewChange('thesis')} />
          )}
          {currentView === 'inquire' && (
            <Inquire />
          )}
          {currentView === 'terms' && (
            <Terms
              onPrivacyClick={() => handleViewChange('privacy')}
              onCookiesClick={() => handleViewChange('cookies')}
            />
          )}
          {currentView === 'privacy' && (
            <Privacy
              onTermsClick={() => handleViewChange('terms')}
              onCookiesClick={() => handleViewChange('cookies')}
            />
          )}
          {currentView === 'cookies' && (
            <Cookies
              onTermsClick={() => handleViewChange('terms')}
              onPrivacyClick={() => handleViewChange('privacy')}
            />
          )}
        </main>
        <Footer
          onHomeClick={() => handleViewChange('home')}
          onLoginClick={() => handleViewChange('login')}
          onThesisClick={() => handleViewChange('thesis')}
          onPrivateCreditClick={() => handleViewChange('private-credit')}
          onMandatesClick={() => handleViewChange('mandates')}
          onTeamClick={() => handleViewChange('team')}
          onInquireClick={() => handleViewChange('inquire')}
          onTermsClick={() => handleViewChange('terms')}
          onPrivacyClick={() => handleViewChange('privacy')}
          onCookiesClick={() => handleViewChange('cookies')}
          onDataRoomClick={() => handleViewChange('dataroom')}
        />
      </div>

      {/* Modal outside content wrapper */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default App;