import React from 'react'
import { Award, Zap, Crosshair, Map, ShieldCheck, LogOut } from 'lucide-react'

export default function Perfil({ stats, userName, setUserName, userAvatar, setUserAvatar, onLogout }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [tempName, setTempName] = React.useState(userName);
  const [tempAvatar, setTempAvatar] = React.useState(userAvatar);

  const insignias = [
    { title: "Ojo Artificial", desc: "IA detectada 50 veces", icon: "🤖", active: true },
    { title: "Cazador de Titulares", desc: "Reconoció 20 engaños", icon: "🎣", active: true },
    { title: "Verificador", desc: "Analizó 10 fuentes", icon: "🔍", active: false },
    { title: "Empatía Digital", desc: "Desarmó discurso de odio", icon: "❤️", active: true },
    { title: "Maestría MIL", desc: "Todas las categorías completas", icon: "👑", active: false },
  ]

  const handleSave = () => {
    setUserName(tempName);
    setUserAvatar(tempAvatar);
    setIsEditing(false);
  };

  return (
    <div className="animate-slide-up" style={{paddingBottom: '40px'}}>
      <div style={{textAlign: 'center', marginBottom: '24px', position: 'relative'}}>
        {!isEditing ? (
          <>
            <div style={{
              width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary)', 
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '40px', margin: '0 auto 12px auto', border: '4px solid white', boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }} translate="no">
              {userAvatar.startsWith('blob:') || userAvatar.startsWith('http') || userAvatar.startsWith('data:') 
                ? <img src={userAvatar} alt="avatar" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} /> 
                : userAvatar}
              <button 
                onClick={() => setIsEditing(true)}
                style={{
                  position: 'absolute', bottom: '-5px', right: '-5px', background: 'white', border: 'none', 
                  borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', boxShadow: 'var(--shadow-md)', cursor: 'pointer', fontSize: '14px',
                  zIndex: 10
                }}>
                ✏️
              </button>
            </div>
            <h2 translate="no">{userName}</h2>
            <p style={{color: 'var(--primary)', fontWeight: 'bold'}}>Nivel {Math.floor(stats.xp / 1000) + 1} • Liga Plata III</p>
          </>
        ) : (
          <div className="glass-card" style={{margin: '0 20px', padding: '20px'}}>
            <h3 style={{marginBottom: '16px'}}>Editar Perfil</h3>
            <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap'}}>
              {['😎', '🤖', '🦊', '👩‍💻', '🧙‍♂️', '🦸‍♀️', '👻'].map(emoji => (
                <button 
                  key={emoji}
                  onClick={() => setTempAvatar(emoji)}
                  style={{
                    fontSize: '24px', background: tempAvatar === emoji ? 'var(--primary-light)' : 'transparent',
                    border: 'none', borderRadius: '8px', padding: '8px', cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
            
            <label style={{cursor: 'pointer', background: 'var(--surface-solid)', color: 'var(--text-main)', border: '1px solid #e5e7eb', padding: '8px 16px', borderRadius: 'var(--radius-full)', margin: '0 auto 16px auto', display: 'inline-block', fontSize: '14px', fontWeight: '600', boxShadow: 'var(--shadow-sm)'}}>
              📸 Subir Foto
              <input type="file" accept="image/*" style={{display: 'none'}} onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const url = URL.createObjectURL(e.target.files[0]);
                  setTempAvatar(url);
                }
              }} />
            </label>
            <input 
              type="text" 
              value={tempName} 
              onChange={(e) => setTempName(e.target.value)}
              style={{
                width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #d1d5db',
                marginBottom: '16px', fontSize: '16px', textAlign: 'center'
              }}
              maxLength={15}
            />
            <div style={{display: 'flex', gap: '8px'}}>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleSave}>Guardar</button>
            </div>
          </div>
        )}
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
      <button 
        className="btn-secondary" 
        style={{marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--danger)', borderColor: 'var(--danger)', background: '#fef2f2'}}
        onClick={onLogout}
      >
        <LogOut size={20} /> Cerrar Sesión
      </button>
    </div>
  )
}
