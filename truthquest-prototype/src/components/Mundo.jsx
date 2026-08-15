import React from 'react'

export default function Mundo({ xp, inventory, onParticipate }) {
  const level = Math.floor(xp / 1000) + 1;
  const progress = (xp % 1000) / 10;

  return (
    <div className="animate-slide-up">
      <div style={{ marginBottom: '24px' }}>
        <h1>Tu Aldea</h1>
        <p>Nivel {level} • Sabio Digital</p>
      </div>

      {/* Improved World Map - Realistic Landscape */}
      <div className="world-map" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop)', /* Magical glowing forest/nature */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '4px solid var(--primary-light)',
        boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.5)'
      }}>
        <div style={{
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(79, 70, 229, 0.4))'
        }}></div>

        <div className="village-item" style={{bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.25)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.8)'}}>
          <div style={{fontSize: '44px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'}}>🏘️</div>
          <span style={{background: 'var(--primary)', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', position: 'absolute', bottom: '-15px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>Barrio MIL</span>
        </div>
        
        <div className="village-item" style={{top: '40px', left: '40px', background: 'rgba(255,255,255,0.25)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.8)'}}>
          <div style={{fontSize: '36px', filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.8))'}}>🌲</div>
          {inventory.buho && <div style={{position: 'absolute', top: '-15px', right: '-10px', fontSize: '32px', animation: 'bounce 2s infinite', filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.8))'}}>🦉</div>}
        </div>
        
        <div className="village-item" style={{top: '30px', right: '30px', background: 'rgba(255,255,255,0.25)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.8)'}}>
          <div style={{fontSize: '52px', filter: 'drop-shadow(0 0 15px rgba(245,158,11,0.8))'}}>{inventory.biblio ? '🏛️' : '🏰'}</div>
          <span style={{background: 'var(--warning)', color: '#fff', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', position: 'absolute', bottom: '-15px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            {inventory.biblio ? 'Gran Biblio' : 'Academia'}
          </span>
        </div>
        
        <div className="village-item" style={{top: '140px', left: '160px', background: 'rgba(255,255,255,0.25)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.8)'}}>
          <div style={{fontSize: '36px', filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.8))'}}>⛲</div>
          {inventory.radar && <div style={{position: 'absolute', bottom: '-10px', right: '-15px', fontSize: '32px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'}}>📡</div>}
        </div>

        <div className="village-item" style={{bottom: '40px', right: '30px', background: 'rgba(255,255,255,0.25)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.8)', filter: inventory.faro ? 'none' : 'grayscale(1) opacity(0.6)'}}>
          <div style={{fontSize: '44px', filter: inventory.faro ? 'drop-shadow(0 0 15px rgba(16,185,129,0.8))' : 'none'}}>🗼</div>
          <span style={{background: inventory.faro ? '#10b981' : '#6b7280', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', position: 'absolute', bottom: '-15px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            {inventory.faro ? 'Faro MIL' : 'Bloqueado'}
          </span>
        </div>
      </div>

      <div className="glass-card">
        <h3>Progreso al Nivel {level + 1}</h3>
        <div className="progress-container" style={{ margin: '12px 0' }}>
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p style={{fontSize: '13px'}}>{xp} / {(level) * 1000} XP</p>
      </div>

      <div className="glass-card" style={{borderLeft: '4px solid var(--warning)'}}>
        <h3>Misión Comunitaria Activa</h3>
        <p style={{marginBottom: '12px', fontSize: '14px'}}>La comunidad está desmintiendo un rumor sobre clonación de voz. ¡Únete para ganar el doble de recompensas!</p>
        <button className="btn-secondary" onClick={onParticipate} style={{background: 'var(--warning)', color: 'white', border: 'none'}}>Participar Ahora</button>
      </div>
    </div>
  )
}
