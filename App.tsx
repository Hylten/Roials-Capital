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
    // Check for SEO Intelligence URLs
    const path = window.location.pathname;
    if (path.startsWith('/intelligence')) {
      const slug = path.replace('/intelligence', '').replace('/', '');
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
        </main>
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