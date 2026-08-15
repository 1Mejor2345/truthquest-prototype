import React from 'react'

export default function Mundo({ xp, inventory, onParticipate }) {
  const level = Math.floor(xp / 1000) + 1;
  const progress = (xp % 1000) / 10;

  // The nodes to display in the path
  const nodes = [
    { id: 'faro', icon: '🗼', label: 'Faro MIL', unlocked: inventory.faro, color: '#10b981' },
    { id: 'radar', icon: '⛲', label: 'Fuente', extra: inventory.radar ? '📡' : null, unlocked: true, color: '#3b82f6' },
    { id: 'biblio', icon: inventory.biblio ? '🏛️' : '🏰', label: inventory.biblio ? 'Gran Biblio' : 'Academia', unlocked: true, color: '#f59e0b' },
    { id: 'bosque', icon: '🌲', label: 'Bosque', extra: inventory.buho ? '🦉' : null, unlocked: true, color: '#059669' },
    { id: 'barrio', icon: '🏘️', label: 'Barrio MIL', unlocked: true, color: '#4f46e5' },
  ];

  return (
    <div className="animate-slide-up" style={{display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: '20px'}}>
      
      {/* Top Header */}
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{fontSize: '32px'}}>Tu Aldea</h1>
        <p style={{fontSize: '16px', fontWeight: '500'}}>Nivel {level} • Sabio Digital</p>
      </div>

      {/* Progress Card */}
      <div className="glass-card" style={{marginBottom: '20px', padding: '16px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
          <h3 style={{fontSize: '15px', margin: 0, color: 'var(--text-main)'}}>Próximo Nivel</h3>
          <span style={{fontSize: '13px', fontWeight: 'bold', color: 'var(--primary)'}}>{xp} / {level * 1000} XP</span>
        </div>
        <div className="progress-container" style={{ height: '8px' }}>
          <div className="progress-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--primary), var(--primary-light))' }}></div>
        </div>
      </div>

      {/* Duolingo-style Vertical Path Map */}
      <div style={{
        background: '#e0f2fe',
        borderRadius: '24px',
        padding: '32px 16px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        overflow: 'hidden',
        boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.05)',
        border: '4px solid #bae6fd'
      }}>
        
        {/* Background Path Line */}
        <div style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '16px',
          background: '#bae6fd',
          zIndex: 1,
          borderRadius: '8px'
        }}></div>

        {nodes.map((node, index) => {
          // Zigzag positioning
          const isLeft = index % 2 === 0;
          const transformAmount = isLeft ? '-40px' : '40px';

          return (
            <div key={node.id} style={{
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `translateX(${transformAmount})`,
              filter: node.unlocked ? 'none' : 'grayscale(1) opacity(0.6)'
            }}>
              
              {/* Bubble */}
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: node.unlocked ? node.color : '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                boxShadow: `0 8px 0 ${node.unlocked ? node.color + 'aa' : '#6b7280'}, 0 15px 20px rgba(0,0,0,0.2)`,
                border: '4px solid white',
                position: 'relative',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(8px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'}}>{node.icon}</div>
                
                {/* Extra mascot/icon floating */}
                {node.extra && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    fontSize: '28px',
                    animation: 'bounce 2s infinite',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                  }}>
                    {node.extra}
                  </div>
                )}
              </div>

              {/* Label */}
              <span style={{
                marginTop: '16px',
                background: 'white',
                color: node.unlocked ? node.color : '#6b7280',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '13px',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: `2px solid ${node.unlocked ? node.color + '44' : '#e5e7eb'}`
              }}>
                {node.label}
              </span>

            </div>
          )
        })}

        {/* Clouds decoration */}
        <div style={{position: 'absolute', top: '10%', left: '10%', fontSize: '40px', opacity: 0.5}}>☁️</div>
        <div style={{position: 'absolute', top: '40%', right: '5%', fontSize: '50px', opacity: 0.4}}>☁️</div>
        <div style={{position: 'absolute', bottom: '20%', left: '5%', fontSize: '45px', opacity: 0.6}}>☁️</div>

      </div>

      <div className="glass-card" style={{borderLeft: '4px solid var(--warning)', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <div>
          <h3 style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', margin: 0}}>
            <span>🔥</span> Misión Comunitaria
          </h3>
          <p style={{fontSize: '14px', lineHeight: '1.4', marginTop: '8px'}}>
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
