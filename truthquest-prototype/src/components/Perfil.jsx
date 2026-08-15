import React from 'react'
import { Award, Zap, Crosshair, Map, ShieldCheck } from 'lucide-react'

export default function Perfil({ stats }) {
  const insignias = [
    { title: "Ojo Artificial", desc: "IA detectada 50 veces", icon: "🤖", active: true },
    { title: "Cazador de Titulares", desc: "Reconoció 20 engaños", icon: "🎣", active: true },
    { title: "Verificador", desc: "Analizó 10 fuentes", icon: "🔍", active: false },
    { title: "Empatía Digital", desc: "Desarmó discurso de odio", icon: "❤️", active: true },
    { title: "Maestría MIL", desc: "Todas las categorías completas", icon: "👑", active: false },
  ]

  return (
    <div className="animate-slide-up" style={{paddingBottom: '40px'}}>
      <div style={{textAlign: 'center', marginBottom: '24px'}}>
        <div style={{
          width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary)', 
          color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '40px', margin: '0 auto 12px auto', border: '4px solid white', boxShadow: 'var(--shadow-md)'
        }}>
          😎
        </div>
        <h2>Gamer_Mundo2026</h2>
        <p style={{color: 'var(--primary)', fontWeight: 'bold'}}>Nivel {Math.floor(stats.xp / 1000) + 1} • Liga Plata III</p>
      </div>

      <div className="category-grid" style={{marginBottom: '24px'}}>
        <div className="glass-card" style={{margin: 0, textAlign: 'center', padding: '16px'}}>
          <Crosshair size={24} style={{color: '#10b981', margin: '0 auto 8px auto'}} />
          <p style={{fontSize: '12px', margin: 0}}>Precisión</p>
          <h3 style={{margin: 0}}>87%</h3>
        </div>
        <div className="glass-card" style={{margin: 0, textAlign: 'center', padding: '16px'}}>
          <Award size={24} style={{color: '#f59e0b', margin: '0 auto 8px auto'}} />
          <p style={{fontSize: '12px', margin: 0}}>Victorias</p>
          <h3 style={{margin: 0}}>42</h3>
        </div>
        <div className="glass-card" style={{margin: 0, textAlign: 'center', padding: '16px'}}>
          <Zap size={24} style={{color: '#f43f5e', margin: '0 auto 8px auto'}} />
          <p style={{fontSize: '12px', margin: 0}}>Mejor Racha</p>
          <h3 style={{margin: 0}}>15</h3>
        </div>
        <div className="glass-card" style={{margin: 0, textAlign: 'center', padding: '16px'}}>
          <Map size={24} style={{color: '#3b82f6', margin: '0 auto 8px auto'}} />
          <p style={{fontSize: '12px', margin: 0}}>Retos</p>
          <h3 style={{margin: 0}}>156</h3>
        </div>
      </div>

      <h3 style={{marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
        <ShieldCheck size={20} color="var(--primary)" /> Mis Insignias
      </h3>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        {insignias.map((ins, idx) => (
          <div key={idx} className="glass-card" style={{margin: 0, display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', opacity: ins.active ? 1 : 0.5}}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '12px', 
              background: ins.active ? 'linear-gradient(135deg, #fef08a, #f59e0b)' : '#e5e7eb',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
              filter: ins.active ? 'none' : 'grayscale(1)'
            }}>
              {ins.icon}
            </div>
            <div>
              <h4 style={{margin: '0 0 4px 0'}}>{ins.title}</h4>
              <p style={{margin: 0, fontSize: '13px'}}>{ins.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
