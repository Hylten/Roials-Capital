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
import { Terms } from './components/legal/Terms';
import { Privacy } from './components/legal/Privacy';
import { Cookies } from './components/legal/Cookies';

type View = 'home' | 'login' | 'thesis' | 'private-credit' | 'mandates' | 'team' | 'terms' | 'privacy' | 'cookies';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Failsafe: Ensure scrolling is enabled on initial load
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (view: View) => {
    scrollToTop();
    setCurrentView(view);
  };

  if (currentView === 'login') {
    return <Login onBack={() => handleViewChange('home')} />;
  }

  return (
    <div className="bg-obsidian min-h-screen text-platinum selection:bg-oldgold selection:text-obsidian">
      <Header 
        onHomeClick={() => handleViewChange('home')} 
        onThesisClick={() => handleViewChange('thesis')}
        onCreditClick={() => handleViewChange('private-credit')}
        onMandatesClick={() => handleViewChange('mandates')}
        onTeamClick={() => handleViewChange('team')}
        onInquireClick={() => setIsContactModalOpen(true)}
      />
      <main>
        {currentView === 'home' && (
          <Home 
            onInquireClick={() => setIsContactModalOpen(true)} 
            onTeamClick={() => handleViewChange('team')}
          />
        )}
        {currentView === 'thesis' && (
           <Thesis onInquireClick={() => setIsContactModalOpen(true)} />
        )}
        {currentView === 'private-credit' && (
           <PrivateCredit onInquireClick={() => setIsContactModalOpen(true)} />
        )}
        {currentView === 'mandates' && (
            <Mandates 
              onInquireClick={() => setIsContactModalOpen(true)} 
              onThesisClick={() => handleViewChange('thesis')}
            />
        )}
        {currentView === 'team' && (
            <Team onThesisClick={() => handleViewChange('thesis')} />
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
        onInquireClick={() => setIsContactModalOpen(true)}
        onTermsClick={() => handleViewChange('terms')}
        onPrivacyClick={() => handleViewChange('privacy')}
        onCookiesClick={() => handleViewChange('cookies')}
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default App;