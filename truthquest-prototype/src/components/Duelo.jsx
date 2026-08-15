import React, { useState, useEffect } from 'react'
import { Swords, Clock, Check, X, Users } from 'lucide-react'

export default function Duelo({ type, onFinish, userName = "Tú", userAvatar = "😎" }) {
  const [phase, setPhase] = useState('matchmaking') // matchmaking, countdown, playing, result
  const [opponent, setOpponent] = useState(null)
  const [countdown, setCountdown] = useState(3)
  
  // Game state
  const [round, setRound] = useState(1)
  const [timeLeft, setTimeLeft] = useState(10)
  const [myScore, setMyScore] = useState(0)
  const [oppScore, setOppScore] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState(null)
  
  const totalRounds = 3;

  const duelQuestions = [
    {
      text: "Video viral: Un político admite haber robado fondos...",
      q: "¿Qué debes hacer antes de compartirlo?",
      options: ["Compartir", "Verificar en sitios oficiales", "Creerlo ciegamente"],
      correct: 1,
      img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&auto=format&fit=crop"
    },
    {
      text: "WhatsApp: '¡Alerta! Si no reenvías esto, te cobrarán'.",
      q: "¿Qué tipo de mensaje es este?",
      options: ["Hoax (Bulo)", "Aviso oficial", "Noticia urgente"],
      correct: 0,
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop"
    },
    {
      text: "Titular: 'Agua con limón cura todas las enfermedades'.",
      q: "¿Cuál es la mejor forma de actuar?",
      options: ["Probar el remedio", "Buscar estudio médico", "Difundirlo rápido"],
      correct: 1,
      img: "https://images.unsplash.com/photo-1523428461295-d232dbf556b4?w=600&auto=format&fit=crop"
    }
  ]

  const question = duelQuestions[round - 1]

  useEffect(() => {
    if (phase === 'matchmaking') {
      const timer = setTimeout(() => {
        setOpponent(type === 'friend' 
          ? { name: 'Amigo_MIL', level: 14, avatar: '👩‍💻' } 
          : { name: 'Alex_Gamer21', level: 12, avatar: '🤖' })
        setPhase('countdown')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [phase, type])

  useEffect(() => {
    if (phase === 'countdown') {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(c => c - 1), 1000)
        return () => clearTimeout(timer)
      } else {
        setPhase('playing')
      }
    }
  }, [phase, countdown])

  useEffect(() => {
    if (phase === 'playing' && timeLeft > 0 && selectedOpt === null) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && selectedOpt === null) {
      handleAnswer(-1) // Time out
    }
  }, [phase, timeLeft, selectedOpt])

  const handleAnswer = (idx) => {
    setSelectedOpt(idx)
    
    // Simulate opponent answer
    const oppCorrect = Math.random() > 0.4;
    const isCorrect = idx === question.correct;
    
    const pts = isCorrect ? (100 + (timeLeft * 10)) : 0;
    const oppPts = oppCorrect ? (100 + (Math.floor(Math.random() * 8) * 10)) : 0;

    setMyScore(s => s + pts)
    setOppScore(s => s + oppPts)

    setTimeout(() => {
      if (round < totalRounds) {
        setRound(r => r + 1)
        setTimeLeft(10)
        setSelectedOpt(null)
      } else {
        setPhase('result')
      }
    }, 2000)
  }

  if (phase === 'matchmaking') {
    return (
      <div className="animate-slide-up" style={{textAlign: 'center', paddingTop: '40px'}}>
        {type === 'friend' ? <Users size={64} style={{margin: '0 auto', color: 'var(--secondary)', animation: 'pulse 1.5s infinite'}} /> : <Swords size={64} style={{margin: '0 auto', color: 'var(--primary)', animation: 'pulse 1.5s infinite'}} />}
        <h2 style={{marginTop: '24px'}}>{type === 'friend' ? 'Esperando a tu amigo...' : 'Buscando Oponente...'}</h2>
        <p>Liga Plata III</p>
      </div>
    )
  }

  if (phase === 'result') {
    const isWinner = myScore >= oppScore;
    return (
      <div className="animate-slide-up" style={{textAlign: 'center', paddingTop: '20px'}}>
        <h1 style={{color: isWinner ? '#10b981' : '#ef4444', fontSize: '32px'}}>
          {isWinner ? '¡VICTORIA!' : 'DERROTA'}
        </h1>
        
        <div className="glass-card" style={{marginTop: '24px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <div>
            <div style={{fontSize: '40px', width: '48px', height: '48px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {userAvatar.startsWith('blob:') || userAvatar.startsWith('http') || userAvatar.startsWith('data:') 
                ? <img src={userAvatar} alt="avatar" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} /> 
                : userAvatar}
            </div>
            <h3>{userName}</h3>
            <p style={{fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)'}}>{myScore}</p>
          </div>
          <div><Swords size={24} color="#9ca3af" /></div>
          <div>
            <div style={{fontSize: '40px'}}>{opponent.avatar}</div>
            <h3>{opponent.name}</h3>
            <p style={{fontSize: '24px', fontWeight: 'bold'}}>{oppScore}</p>
          </div>
        </div>

        <div className="glass-card" style={{textAlign: 'left'}}>
          <h3>Recompensas Obtenidas</h3>
          <p>💰 +{isWinner ? 50 : 10} Monedas</p>
          <p>⭐ +{isWinner ? 100 : 20} XP</p>
          <p>🏆 +{isWinner ? 25 : -10} Puntos de Liga</p>
        </div>

        <button className="btn-primary" onClick={() => onFinish('duelo')}>Volver al Mundo</button>
      </div>
    )
  }

  return (
    <div className="animate-slide-up" style={{flex: 1, display: 'flex', flexDirection: 'column', position: 'relative'}}>
      {/* Countdown Overlay */}
      {phase === 'countdown' && (
        <div className="countdown-overlay">
          <div className="countdown-text">
            {countdown > 0 ? countdown : '¡A desmentir!'}
          </div>
        </div>
      )}

      {/* HUD Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{fontSize: '24px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {userAvatar.startsWith('blob:') || userAvatar.startsWith('http') || userAvatar.startsWith('data:') 
              ? <img src={userAvatar} alt="avatar" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} /> 
              : userAvatar}
          </div>
          <div><h4 style={{margin: 0}}>{userName}</h4><p style={{margin: 0, fontSize: '14px', color: 'var(--primary)', fontWeight: 'bold'}}>{myScore}</p></div>
        </div>
        
        <div style={{textAlign: 'center'}}>
          <div style={{background: '#fef2f2', color: '#ef4444', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px'}}>
            <Clock size={16} /> {timeLeft}s
          </div>
          <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Ronda {round}/{totalRounds}</span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'right'}}>
          <div><h4 style={{margin: 0}}>{opponent.name}</h4><p style={{margin: 0, fontSize: '14px', fontWeight: 'bold'}}>{oppScore}</p></div>
          <div style={{fontSize: '24px'}}>{opponent.avatar}</div>
        </div>
      </div>
      
      {/* Clash Progress Bar */}
      <div style={{height: '6px', background: '#ef4444', borderRadius: '3px', marginBottom: '16px', display: 'flex', overflow: 'hidden'}}>
         <div style={{height: '100%', width: `${myScore === 0 && oppScore === 0 ? 50 : (myScore / (myScore + oppScore)) * 100}%`, background: '#10b981', transition: 'width 0.5s'}} />
      </div>

      {/* Question Card */}
      <div className="challenge-card" style={{flex: 1, border: '2px solid var(--primary-light)', marginBottom: '0'}}>
        <img src={question.img} alt="Desafío visual" className="challenge-img duel-img" />
        
        <div className="challenge-content" style={{padding: '12px 16px', flex: 1, overflowY: 'auto'}}>
          <p style={{fontStyle: 'italic', marginBottom: '8px', fontSize: '14px', color: '#374151'}}>"{question.text}"</p>
          <h3 style={{marginBottom: '16px', fontSize: '16px'}}>{question.q}</h3>
          
          <div className="options-list" style={{gap: '8px', paddingBottom: '0'}}>
            {question.options.map((opt, idx) => {
              let btnClass = 'option-btn';
              if (selectedOpt !== null) {
                if (idx === question.correct) btnClass += ' selected';
                else if (idx === selectedOpt) btnClass += ' error';
              }

              return (
                <button 
                  key={idx} 
                  className={btnClass}
                  style={{
                    padding: '12px', 
                    fontSize: '14px',
                    ...(selectedOpt === idx && idx !== question.correct ? {borderColor: '#ef4444', background: '#fef2f2'} : {})
                  }}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedOpt !== null || phase === 'countdown'}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {opt}
                    {selectedOpt !== null && idx === question.correct && <Check color="#10b981" size={16} />}
                    {selectedOpt === idx && idx !== question.correct && <X color="#ef4444" size={16} />}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
