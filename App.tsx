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
import { CapitalOrigination } from './components/CapitalOrigination';
import { IntelligenceIndex } from './components/intelligence/IntelligenceIndex';
import { IntelligenceArticle } from './components/intelligence/IntelligenceArticle';
import { DealOrigination } from './components/DealOrigination';
import { Regulatory } from './components/Regulatory';

type View = 'home' | 'login' | 'thesis' | 'private-credit' | 'mandates' | 'team' | 'inquire' | 'terms' | 'privacy' | 'cookies' | 'dataroom' | 'capital-origination' | 'deal-origination' | 'regulatory';

const viewToPath = (view: View): string => {
  const routes: Record<string, string> = {
    'home': '/',
    'team': '/board-partners',
    'capital-origination': '/capital-origination',
    'deal-origination': '/deal-origination',
    'private-credit': '/private-credit',
    'thesis': '/thesis',
    'mandates': '/mandates',
    'inquire': '/inquire',
    'regulatory': '/regulatory',
    'dataroom': '/dataroom',
    'login': '/login',
  };
  return routes[view] || '/';
};

const pathToView = (path: string): View => {
  const routeMap: Record<string, View> = {
    '/': 'home',
    '/board-partners': 'team',
    '/capital-origination': 'capital-origination',
    '/deal-origination': 'deal-origination',
    '/private-credit': 'private-credit',
    '/thesis': 'thesis',
    '/mandates': 'mandates',
    '/inquire': 'inquire',
    '/regulatory': 'regulatory',
    '/dataroom': 'dataroom',
    '/login': 'login',
  };
  return routeMap[path] || 'home';
};

const seoTitles: Record<View, string> = {
  'home': 'Roials Capital | Institutional Asset Architects',
  'team': 'Board & Partners | Roials Capital',
  'capital-origination': 'Capital Origination | Roials Capital',
  'deal-origination': 'Deal Origination | Roials Capital',
  'private-credit': 'Private Credit | Roials Capital',
  'thesis': 'Thesis | Roials Capital',
  'mandates': 'Private Equity | Roials Capital',
  'inquire': 'Inquire | Roials Capital',
  'regulatory': 'Regulatory & Firm Architecture | Roials Capital',
  'dataroom': 'Data Room | Roials Capital',
  'login': 'LP Access | Roials Capital',
  'terms': 'Terms | Roials Capital',
  'privacy': 'Privacy | Roials Capital',
  'cookies': 'Cookies | Roials Capital',
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [intelligenceSlug, setIntelligenceSlug] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [accessType, setAccessType] = useState<'lp-access' | 'dataroom'>('lp-access');

  // Initial Logic
  useEffect(() => {
    // Resolve the effective path, handling GitHub Pages 404 redirects
    let path = window.location.pathname;

    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      const redirectedPath = redirect.startsWith('http') ? new URL(redirect).pathname : redirect;

      // Intelligence pages render standalone below
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

      // Static routes redirect through 404.html -> resolve to the correct view
      path = redirectedPath;
      window.history.replaceState({}, '', redirectedPath);
    }

    // Check for Regulatory path
    if (path.startsWith('/regulatory') || path.startsWith('/firm-architecture')) {
      setCurrentView('regulatory');
      document.title = seoTitles['regulatory'];
      setAnimationComplete(true);
      setIsRevealed(true);
      setShowSplash(false);
      return;
    }

    // Check for SEO Intelligence URLs
    if (path.startsWith('/intelligence')) {
      const slug = path.replace('/intelligence', '').replace(/^\/|\/$/g, '');
      if (slug) {
        setIntelligenceSlug(slug);
      }
      setCurrentView('home');
      setAnimationComplete(true);
      setIsRevealed(true);
      return;
    }

    // Static routing: map path to view
    const staticView = pathToView(path);
    if (staticView !== 'home' || path === '/') {
      setCurrentView(staticView);
      document.title = seoTitles[staticView] || seoTitles['home'];
      setAnimationComplete(true);
      setIsRevealed(true);
      setShowSplash(false);
      return;
    }

    // Backwards-compatible explicit view URLs (?view=xxx)
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view') as View | null;
    if (viewParam) {
      const staticPath = viewToPath(viewParam);
      window.history.replaceState({}, '', staticPath);
      setCurrentView(viewParam);
      document.title = seoTitles[viewParam] || seoTitles['home'];
      setAnimationComplete(true);
      setIsRevealed(true);
      setShowSplash(false);
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
      setIsRevealed(false);
      setAnimationComplete(false);
      sessionStorage.setItem('roials_splash_seen', 'true');
    } else {
      setIsRevealed(true);
      setAnimationComplete(true);
    }

    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    const handlePopState = (event: PopStateEvent) => {
      const stateView = event.state?.view as View | null;
      if (stateView) {
        setCurrentView(stateView);
        document.title = seoTitles[stateView] || seoTitles['home'];
      } else {
        const currentPath = window.location.pathname;
        const resolvedView = pathToView(currentPath);
        setCurrentView(resolvedView);
        document.title = seoTitles[resolvedView] || seoTitles['home'];
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleSplashComplete = () => {
    setIsRevealed(true);
    setTimeout(() => {
      setAnimationComplete(true);
    }, 800);
    setTimeout(() => setShowSplash(false), 1000);
  };

  const handleViewChange = (view: View) => {
    if (view === 'dataroom' && !isAuthenticated) {
      setCurrentView('login');
      setAccessType('dataroom');
      return;
    }
    if (view === 'login') {
      setAccessType('lp-access');
    }
    setCurrentView(view);

    // Update URL so back button works
    const url = viewToPath(view);
    window.history.pushState({ view }, '', url);
    document.title = seoTitles[view] || seoTitles['home'];

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
          onThesisClick={() => { window.location.href = '/thesis'; }}
          onCreditClick={() => { window.location.href = '/private-credit'; }}
          onMandatesClick={() => { window.location.href = '/mandates'; }}
          onCapOrigClick={() => { window.location.href = '/capital-origination'; }}
          onDealOrigClick={() => { window.location.href = '/deal-origination'; }}
          onTeamClick={() => { window.location.href = '/board-partners'; }}
          onInquireClick={() => { window.location.href = '/'; }}
          onLoginClick={() => { window.location.href = '/login'; }}
          onDataRoomClick={() => { window.location.href = '/dataroom'; }}
          currentView="intelligence"
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

        <Footer
          onHomeClick={() => { window.location.href = '/'; }}
          onLoginClick={() => { window.location.href = '/login'; }}
          onThesisClick={() => { window.location.href = '/thesis'; }}
          onPrivateCreditClick={() => { window.location.href = '/private-credit'; }}
          onMandatesClick={() => { window.location.href = '/mandates'; }}
          onTeamClick={() => { window.location.href = '/board-partners'; }}
          onInquireClick={() => { window.location.href = '/'; }}
          onTermsClick={() => { window.location.href = '/regulatory'; }}
          onPrivacyClick={() => { window.location.href = '/regulatory'; }}
          onCookiesClick={() => { window.location.href = '/regulatory'; }}
          onDataRoomClick={() => { window.location.href = '/dataroom'; }}
          onCapOrigClick={() => { window.location.href = '/capital-origination'; }}
          onDealOrigClick={() => { window.location.href = '/deal-origination'; }}
        />
      </div>
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <Header
        onHomeClick={() => handleViewChange('home')}
        onThesisClick={() => handleViewChange('thesis')}
        onCreditClick={() => handleViewChange('private-credit')}
        onMandatesClick={() => handleViewChange('mandates')}
        onCapOrigClick={() => handleViewChange('capital-origination')}
        onDealOrigClick={() => handleViewChange('deal-origination')}
        onTeamClick={() => handleViewChange('team')}
        onInquireClick={() => handleViewChange('inquire')}
        onLoginClick={() => handleViewChange('login')}
        onDataRoomClick={() => handleViewChange('dataroom')}
        showLogo={currentView !== 'login' && !(currentView === 'dataroom' && !isAuthenticated)}
        currentView={currentView}
      />

      {/* Main Content Wrapper */}
      <div
        className={`bg-obsidian min-h-screen text-platinum selection:bg-oldgold selection:text-obsidian flex flex-col ${animationComplete
          ? ''
          : `transition-all duration-[1000ms] ease-out will-change-transform ${isRevealed
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-[0.98] translate-y-12'
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
              onCapOrigClick={() => handleViewChange('capital-origination')}
              onDealOrigClick={() => handleViewChange('deal-origination')}
            />
          )}
          {currentView === 'thesis' && (
            <Thesis onInquireClick={() => handleViewChange('inquire')} />
          )}
          {currentView === 'capital-origination' && (
            <CapitalOrigination onFirmClick={() => handleViewChange('team')} />
          )}
          {currentView === 'deal-origination' && (
            <DealOrigination onFirmClick={() => handleViewChange('team')} />
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
          {currentView === 'regulatory' && (
            <Regulatory />
          )}
          {currentView === 'terms' && (
            <Regulatory />
          )}
          {currentView === 'privacy' && (
            <Regulatory />
          )}
          {currentView === 'cookies' && (
            <Regulatory />
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
          onRegulatoryClick={() => handleViewChange('regulatory')}
          onTermsClick={() => handleViewChange('regulatory')}
          onPrivacyClick={() => handleViewChange('regulatory')}
          onCookiesClick={() => handleViewChange('regulatory')}
          onDataRoomClick={() => handleViewChange('dataroom')}
          onCapOrigClick={() => handleViewChange('capital-origination')}
          onDealOrigClick={() => handleViewChange('deal-origination')}
        />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default App;
