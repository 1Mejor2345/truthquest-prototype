import React from 'react'

export default function Mundo({ xp, inventory, onParticipate }) {
  const level = Math.floor(xp / 1000) + 1;
  const progress = (xp % 1000) / 10;

  return (
    <div className="animate-slide-up" style={{display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: '20px'}}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{fontSize: '32px'}}>Tu Aldea</h1>
        <p style={{fontSize: '16px', fontWeight: '500'}}>Nivel {level} • Sabio Digital</p>
      </div>

      {/* Improved World Map - Realistic Landscape with Connected Paths */}
      <div className="world-map" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '4px solid var(--primary-light)',
        boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.5)',
        height: '400px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to top, rgba(16, 185, 129, 0.3), rgba(79, 70, 229, 0.5))'
        }}></div>

        {/* SVG Paths Connecting Nodes */}
        <svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1}}>
          <path 
            d="M 60 320 C 100 200, 160 220, 180 180" 
            fill="none" 
            stroke="rgba(255,255,255,0.8)" 
            strokeWidth="4" 
            strokeDasharray="10, 10" 
            style={{ animation: 'dashAnim 20s linear infinite' }} 
          />
          <path 
            d="M 180 180 C 200 120, 260 100, 290 80" 
            fill="none" 
            stroke="rgba(255,255,255,0.8)" 
            strokeWidth="4" 
            strokeDasharray="10, 10" 
            style={{ animation: 'dashAnim 20s linear infinite' }} 
          />
          {inventory.faro && (
            <path 
              d="M 290 80 C 320 180, 320 250, 290 320" 
              fill="none" 
              stroke="rgba(16,185,129,0.8)" 
              strokeWidth="4" 
              strokeDasharray="10, 10" 
              style={{ animation: 'dashAnim 20s linear infinite' }} 
            />
          )}
        </svg>

        {/* Node 1: Barrio MIL */}
        <div className="village-item" style={{bottom: '40px', left: '25px', zIndex: 2, background: 'rgba(255,255,255,0.3)', padding: '16px', borderRadius: '50%', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)'}}>
          <div style={{fontSize: '48px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))', marginTop: '-8px'}}>🏘️</div>
          <span style={{background: 'var(--primary)', color: 'white', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', position: 'absolute', bottom: '-20px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>Barrio MIL</span>
        </div>
        
        {/* Node 2: Bosque / Buho */}
        <div className="village-item" style={{top: '40px', left: '40px', zIndex: 2, background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.6)'}}>
          <div style={{fontSize: '36px', filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.8))'}}>🌲</div>
          {inventory.buho && <div style={{position: 'absolute', top: '-20px', right: '-15px', fontSize: '36px', animation: 'bounce 2s infinite', filter: 'drop-shadow(0 0 15px rgba(245,158,11,0.9))'}}>🦉</div>}
        </div>
        
        {/* Node 3: Academia / Gran Biblio */}
        <div className="village-item" style={{top: '30px', right: '40px', zIndex: 2, background: 'rgba(255,255,255,0.3)', padding: '16px', borderRadius: '50%', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)'}}>
          <div style={{fontSize: '56px', filter: 'drop-shadow(0 0 15px rgba(245,158,11,0.8))', marginTop: '-8px'}}>{inventory.biblio ? '🏛️' : '🏰'}</div>
          <span style={{background: 'var(--warning)', color: '#fff', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', position: 'absolute', bottom: '-20px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            {inventory.biblio ? 'Gran Biblio' : 'Academia'}
          </span>
        </div>
        
        {/* Node 4: Fuente / Radar */}
        <div className="village-item" style={{top: '140px', left: '150px', zIndex: 2, background: 'rgba(255,255,255,0.3)', padding: '14px', borderRadius: '50%', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)'}}>
          <div style={{fontSize: '44px', filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.8))'}}>⛲</div>
          {inventory.radar && <div style={{position: 'absolute', bottom: '-15px', right: '-20px', fontSize: '36px', filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9))'}}>📡</div>}
        </div>

        {/* Node 5: Faro MIL (Unlockable) */}
        <div className="village-item" style={{bottom: '40px', right: '35px', zIndex: 2, background: 'rgba(255,255,255,0.3)', padding: '16px', borderRadius: '50%', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.9)', filter: inventory.faro ? 'none' : 'grayscale(1) opacity(0.7)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)'}}>
          <div style={{fontSize: '52px', filter: inventory.faro ? 'drop-shadow(0 0 20px rgba(16,185,129,0.9))' : 'none', marginTop: '-8px'}}>🗼</div>
          <span style={{background: inventory.faro ? '#10b981' : '#4b5563', color: 'white', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', position: 'absolute', bottom: '-20px', whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            {inventory.faro ? 'Faro MIL' : 'Bloqueado'}
          </span>
        </div>
      </div>

      <div className="glass-card" style={{marginTop: '12px'}}>
        <h3 style={{fontSize: '16px', color: 'var(--text-main)'}}>Progreso al Nivel {level + 1}</h3>
        <div className="progress-container" style={{ margin: '12px 0', height: '10px' }}>
          <div className="progress-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--primary), var(--primary-light))' }}></div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold', color: 'var(--text-muted)'}}>
          <span>{xp} XP</span>
          <span>{(level) * 1000} XP</span>
        </div>
      </div>

      <div className="glass-card" style={{borderLeft: '4px solid var(--warning)', display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <div>
          <h3 style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)'}}>
            <span>🔥</span> Misión Comunitaria
          </h3>
          <p style={{fontSize: '14px', lineHeight: '1.4'}}>
            La comunidad está desmintiendo un rumor sobre clonación de voz. ¡Únete para ganar el doble de recompensas!
          </p>
        </div>
        <button className="btn-secondary" onClick={onParticipate} style={{background: 'var(--warning)', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px'}}>
          Participar Ahora <span style={{fontSize: '20px'}}>⚔️</span>
        </button>
      </div>
    </div>
  )
}
