import React, { useState } from 'react'
import { Gift, Sparkles, Coins, ShoppingBag, Check } from 'lucide-react'

export default function Recompensas({ coins, setCoins, inventory, setInventory, onOpenBuyModal }) {
  const [dailyClaimed, setDailyClaimed] = useState(false)

  const items = [
    { id: 'faro', name: "Faro de la Verdad", price: 300, icon: "🗼" },
    { id: 'biblio', name: "Biblioteca Central", price: 500, icon: "🏛️" },
    { id: 'radar', name: "Radar Anti-Bots", price: 200, icon: "📡" },
    { id: 'buho', name: "Mascota Búho", price: 800, icon: "🦉" },
  ]

  const handleClaimDaily = () => {
    if(!dailyClaimed) {
      setCoins(c => c + 150)
      setDailyClaimed(true)
    }
  }

  const handleBuyItem = (item) => {
    if(coins >= item.price && !inventory[item.id]) {
      setCoins(c => c - item.price)
      setInventory(prev => ({...prev, [item.id]: true}))
    }
  }

  return (
    <div className="animate-slide-up" style={{paddingBottom: '40px'}}>
      <div style={{textAlign: 'center', marginBottom: '24px'}}>
        <Gift size={48} color="var(--primary)" style={{margin: '0 auto 12px auto'}} />
        <h1 style={{margin: '0 0 8px 0'}}>Tienda y Recompensas</h1>
        <p>Personaliza tu experiencia</p>
      </div>

      <div className="glass-card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: 'none'}}>
        <div>
          <h3 style={{color: '#b45309', margin: '0 0 4px 0'}}>Tu Saldo</h3>
          <p style={{color: '#92400e', margin: 0, fontWeight: 'bold', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Coins size={28} /> {coins}
          </p>
        </div>
        <button 
          className="btn-primary" 
          style={{width: 'auto', padding: '10px 20px', background: '#d97706'}}
          onClick={onOpenBuyModal}
        >
          Obtener más
        </button>
      </div>

      <div className="glass-card">
        <h3 style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
          <Sparkles size={20} color="var(--primary)" /> Recompensa Diaria
        </h3>
        <p style={{marginBottom: '16px'}}>
          {dailyClaimed ? '¡Vuelve mañana para reclamar tu cofre misterioso!' : '¡Abre tu cofre diario gratis!'}
        </p>
        <button 
          className={dailyClaimed ? "btn-secondary" : "btn-primary"} 
          disabled={dailyClaimed}
          style={{opacity: dailyClaimed ? 0.5 : 1}}
          onClick={handleClaimDaily}
        >
          {dailyClaimed ? 'Reclamada hoy' : 'Reclamar 150 Monedas'}
        </button>
      </div>

      <h3 style={{marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
        <ShoppingBag size={20} color="var(--primary)" /> Para tu Aldea
      </h3>

      <div className="category-grid" style={{marginTop: 0}}>
        {items.map((item) => {
          const isPurchased = inventory[item.id]
          const canBuy = coins >= item.price
          return (
            <div key={item.id} className="category-card" style={{padding: '16px'}}>
              <div style={{fontSize: '40px', marginBottom: '8px', filter: isPurchased ? 'none' : 'grayscale(0.5)'}}>{item.icon}</div>
              <h4 style={{fontSize: '14px', margin: '0 0 8px 0', minHeight: '34px'}}>{item.name}</h4>
              <button 
                className={canBuy && !isPurchased ? "btn-primary" : "btn-secondary"} 
                style={{
                  padding: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                  opacity: (!canBuy && !isPurchased) ? 0.5 : 1
                }}
                disabled={!canBuy || isPurchased}
                onClick={() => handleBuyItem(item)}
              >
                {isPurchased ? <><Check size={14}/> Comprado</> : <><Coins size={14} /> {item.price}</>}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
