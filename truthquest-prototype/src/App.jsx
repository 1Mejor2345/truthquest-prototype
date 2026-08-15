import { useState, useEffect } from 'react'
import { Home, BookOpen, Swords, Gift, User, Heart, Coins, Zap, Shield, X, Volume2, VolumeX } from 'lucide-react'
import Mundo from './components/Mundo'
import Aprender from './components/Aprender'
import Desafio from './components/Desafio'
import Duelo from './components/Duelo'
import Perfil from './components/Perfil'
import Recompensas from './components/Recompensas'
import Login from './components/Login'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('mundo')
  const [currentChallenge, setCurrentChallenge] = useState(null)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  
  // Voice Synthesis Effect
  useEffect(() => {
    if (!voiceEnabled) {
      window.speechSynthesis.cancel();
      return;
    }
    
    const handleSpeak = (e) => {
      const target = e.target.closest('h1, h2, h3, h4, p, span, button');
      if (target && target.innerText && target.innerText.trim().length > 0) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(target.innerText);
        const htmlLang = document.documentElement.lang;
        msg.lang = htmlLang || 'es-ES';
        window.speechSynthesis.speak(msg);
      }
    };
    
    document.addEventListener('mouseover', handleSpeak);
    document.addEventListener('touchstart', handleSpeak, {passive: true});

    return () => {
      document.removeEventListener('mouseover', handleSpeak);
      document.removeEventListener('touchstart', handleSpeak);
      window.speechSynthesis.cancel();
    };
  }, [voiceEnabled]);
  
  // Google Translate Effect
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'es', 
            includedLanguages: 'ar,en,es,fr,ru,zh-CN', 
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');
        }
      };
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  
  // Responsive Scale Effect
  const [scale, setScale] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 480;
      setIsMobileView(isMobile);
      if (isMobile) {
        setScale(1);
      } else {
        const scaleH = (window.innerHeight * 0.95) / 844;
        const scaleW = (window.innerWidth * 0.95) / 390;
        setScale(Math.min(scaleH, scaleW, 1));
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auth State
  const [authMode, setAuthMode] = useState('login') // 'login', 'app'
  const [isGuest, setIsGuest] = useState(false)

  // Game State
  const [coins, setCoins] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(5)
  const [xp, setXp] = useState(0)
  const [inventory, setInventory] = useState({})
  
  // User Profile State
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('😎')
  
  // Global Modals
  const [showBuyModal, setShowBuyModal] = useState(false)

  const handleLogin = (name, avatar, guest) => {
    setIsGuest(guest);
    setUserName(name);
    setUserAvatar(avatar);
    
    if (guest) {
      setCoins(0);
      setXp(0);
      setStreak(0);
      setLives(5);
    } else {
      setCoins(150);
      setXp(2500);
      setStreak(3);
      setLives(5);
    }
    
    setAuthMode('app');
  }

  const handleStartChallenge = (category) => {
    setCurrentChallenge({ category, mode: 'aprender' })
  }

  const handleStartDuel = (type = 'random') => {
    setCurrentChallenge({ mode: 'duelo', type })
  }

  const handleFinishChallenge = (won, coinsEarned) => {
    if (won) {
      setCoins(c => c + coinsEarned)
      setStreak(s => s + 1)
      setXp(x => x + 150)
    } else {
      setLives(l => Math.max(0, l - 1))
      setStreak(0)
    }
    setCurrentChallenge(null)
  }
  
  const handleFinishDuel = (action) => {
    setCurrentChallenge(null)
    if(action) setActiveTab(action)
  }
  
  const handleBuyCoins = (amount) => {
    setCoins(c => c + amount)
    setShowBuyModal(false)
  }

  const handleLogout = () => {
    setAuthMode('login')
  }

  const renderContent = () => {
    if (authMode === 'login') {
      return (
        <div className="mobile-container" style={{ width: '100%', height: '100%' }}>
          <Login onLogin={handleLogin} />
        </div>
      );
    }

    return (
      <div className="mobile-container animate-slide-up">
        {/* Top Header & Status Bar */}
        <div className="app-header">
          <div className="logo-area" style={{justifyContent: 'space-between', width: '100%', paddingRight: '24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Shield size={24} color="var(--primary)" fill="var(--primary)" /> TruthQuest
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <button 
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                style={{
                  background: voiceEnabled ? 'var(--primary)' : 'var(--surface)',
                  color: voiceEnabled ? 'white' : 'var(--primary)',
                  border: '1px solid var(--primary)',
                  borderRadius: '50%',
                  width: '32px', height: '32px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: 'pointer'
                }}
                title={voiceEnabled ? 'Desactivar lectura' : 'Activar lectura por voz'}
              >
                {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            </div>
          </div>
          <div className="status-bar">
            <div className="status-pills">
              <div className="pill coins">
                <Coins size={16} fill="currentColor" /> {coins}
              </div>
              <div className="pill streak">
                <Zap size={16} fill="currentColor" /> {streak}
              </div>
            </div>
            <div className="pill">
              <Heart size={16} color="#ef4444" fill="#ef4444" /> {lives}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="content-area">
          {currentChallenge?.mode === 'aprender' && (
            <Desafio 
              category={currentChallenge.category} 
              onFinish={handleFinishChallenge} 
            />
          )}
          
          {currentChallenge?.mode === 'duelo' && (
            <Duelo 
              type={currentChallenge.type} 
              onFinish={handleFinishDuel}
              userName={userName}
              userAvatar={userAvatar}
            />
          )}

          {!currentChallenge && (
            <>
              {activeTab === 'mundo' && <Mundo xp={xp} inventory={inventory} onParticipate={() => handleStartChallenge('empatia')} />}
              {activeTab === 'aprender' && <Aprender onStart={handleStartChallenge} />}
              {activeTab === 'duelo' && (
                <div className="animate-slide-up" style={{textAlign: 'center', paddingTop: '20px'}}>
                  <Swords size={64} style={{margin: '0 auto 24px auto', color: 'var(--primary)'}}/>
                  <h1>Arena de Duelos</h1>
                  <p style={{marginBottom: '32px'}}>Compite en tiempo real para demostrar quién identifica mejor la desinformación.</p>
                  <button className="btn-primary" onClick={() => handleStartDuel('random')} style={{marginBottom: '16px'}}>
                    Buscar Oponente
                  </button>
                  <button className="btn-secondary" onClick={() => handleStartDuel('friend')}>
                    Jugar con un Amigo
                  </button>
                </div>
              )}
              {activeTab === 'recompensas' && (
                <Recompensas 
                  coins={coins} 
                  setCoins={setCoins} 
                  inventory={inventory}
                  setInventory={setInventory}
                  onOpenBuyModal={() => setShowBuyModal(true)}
                />
              )}
              {activeTab === 'perfil' && (
                <Perfil 
                  stats={{xp}} 
                  userName={userName} 
                  setUserName={setUserName} 
                  userAvatar={userAvatar} 
                  setUserAvatar={setUserAvatar} 
                  onLogout={handleLogout}
                />
              )}
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        {!currentChallenge && (
          <div className="bottom-nav">
            <button className={`nav-item ${activeTab === 'mundo' ? 'active' : ''}`} onClick={() => setActiveTab('mundo')}>
              <Home size={24} /> Mundo
            </button>
            <button className={`nav-item ${activeTab === 'aprender' ? 'active' : ''}`} onClick={() => setActiveTab('aprender')}>
              <BookOpen size={24} /> Aprender
            </button>
            <button className={`nav-item ${activeTab === 'duelo' ? 'active' : ''}`} onClick={() => setActiveTab('duelo')}>
              <Swords size={24} /> Duelo
            </button>
            <button className={`nav-item ${activeTab === 'recompensas' ? 'active' : ''}`} onClick={() => setActiveTab('recompensas')}>
              <Gift size={24} /> Tienda
            </button>
            <button className={`nav-item ${activeTab === 'perfil' ? 'active' : ''}`} onClick={() => setActiveTab('perfil')}>
              <User size={24} /> Perfil
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="scale-wrapper" style={{
      width: isMobileView ? '100%' : `${375 * scale}px`,
      height: isMobileView ? '100%' : `${812 * scale}px`,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: isMobileView ? 'fixed' : 'relative',
      top: isMobileView ? 0 : 'auto',
      left: isMobileView ? 0 : 'auto',
      margin: isMobileView ? '0' : 'auto',
      backgroundColor: isMobileView ? '#fdfbfb' : 'transparent',
      zIndex: isMobileView ? 9999 : 1
    }}>
      <div style={{
        transform: isMobileView ? 'none' : `scale(${scale})`,
        transformOrigin: 'top left',
        width: isMobileView ? '100%' : '375px',
        height: isMobileView ? '100%' : '812px',
        display: 'flex'
      }}>
        {renderContent()}
      </div>

      {/* Global Modals */}
      {showBuyModal && (
        <div className="modal-overlay" style={{opacity: 1, zIndex: 500}}>
          <div className="modal-content">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
              <h2 style={{margin: 0}}>Comprar Monedas</h2>
              <button style={{background: 'none', border: 'none', cursor: 'pointer'}} onClick={() => setShowBuyModal(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px'}}>
              <button className="btn-secondary" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} onClick={() => handleBuyCoins(500)}>
                <span><Coins size={16} style={{marginRight: '8px'}} /> 500 Monedas</span>
                <span style={{fontWeight: 'bold', color: '#10b981'}}>$0.99 USD</span>
              </button>
              <button className="btn-secondary" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} onClick={() => handleBuyCoins(1200)}>
                <span><Coins size={16} style={{marginRight: '8px'}} /> 1200 Monedas</span>
                <span style={{fontWeight: 'bold', color: '#10b981'}}>$1.99 USD</span>
              </button>
              <button className="btn-secondary" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px solid var(--warning)'}} onClick={() => handleBuyCoins(3000)}>
                <span><Coins size={16} style={{marginRight: '8px'}} color="var(--warning)" /> 3000 Monedas (Popular)</span>
                <span style={{fontWeight: 'bold', color: '#10b981'}}>$3.99 USD</span>
              </button>
            </div>
            <p style={{fontSize: '12px', textAlign: 'center', color: 'var(--text-muted)'}}>Este dinero apoya la educación gratuita para todos. Modelo Freemium.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
