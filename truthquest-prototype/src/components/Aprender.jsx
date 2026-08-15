import React from 'react'
import { Bot, ShieldAlert, Search, HeartHandshake } from 'lucide-react'

export default function Aprender({ onStart }) {
  const categories = [
    { id: 'ia', title: 'Detectar IA', icon: <Bot size={32} />, color: 'bg-purple', progress: 80 },
    { id: 'desinfo', title: 'Desinformación', icon: <ShieldAlert size={32} />, color: 'bg-orange', progress: 40 },
    { id: 'fuentes', title: 'Análisis de Fuentes', icon: <Search size={32} />, color: 'bg-blue', progress: 10 },
    { id: 'empatia', title: 'Empatía Digital', icon: <HeartHandshake size={32} />, color: 'bg-rose', progress: 0 },
  ]

  return (
    <div className="animate-slide-up">
      <h1>Aprender</h1>
      <p>Selecciona una habilidad para entrenar.</p>

      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.id} className="category-card" onClick={() => onStart(cat.id)}>
            <div className={`icon-wrapper ${cat.color}`}>
              {cat.icon}
            </div>
            <h3 style={{fontSize: '15px'}}>{cat.title}</h3>
            
            <div className="progress-container" style={{height: '4px'}}>
              <div className="progress-fill" style={{ width: `${cat.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-card" style={{marginTop: '24px'}}>
        <h3>Reto Diario</h3>
        <p style={{marginBottom: '12px'}}>Gana 50 monedas extra completando el set de hoy.</p>
        <button className="btn-primary" onClick={() => onStart('daily')}>Comenzar Reto</button>
      </div>
    </div>
  )
}
