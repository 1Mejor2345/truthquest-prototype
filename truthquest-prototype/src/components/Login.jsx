import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('😎');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim(), avatar, false);
    } else {
      alert("Por favor ingresa un nombre de usuario.");
    }
  };

  return (
    <div className="animate-slide-up" style={{
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
    }}>
      
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <Shield size={64} color="var(--primary)" fill="var(--primary)" style={{margin: '0 auto 16px auto'}} />
        <h1 style={{fontSize: '36px', color: 'var(--primary-dark)', margin: 0}}>TruthQuest</h1>
        <p style={{color: 'var(--text-muted)', fontSize: '16px'}}>Aprende a desmentir, jugando.</p>
      </div>

      <div className="glass-card" style={{width: '100%', padding: '32px 24px'}}>
        <form onSubmit={handleLoginSubmit}>
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: 'var(--text-main)'}}>Nombre de Usuario</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Ej. Hacker_Etico"
              style={{
                width: '100%', padding: '14px', borderRadius: 'var(--radius-md)', 
                border: '1px solid #d1d5db', fontSize: '16px', background: 'rgba(255,255,255,0.8)'
              }} 
            />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: 'var(--text-main)'}}>Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              style={{
                width: '100%', padding: '14px', borderRadius: 'var(--radius-md)', 
                border: '1px solid #d1d5db', fontSize: '16px', background: 'rgba(255,255,255,0.8)'
              }} 
            />
          </div>

          <button type="submit" className="btn-primary" style={{marginBottom: '16px'}}>
            Iniciar Sesión
          </button>
        </form>

        <div style={{display: 'flex', alignItems: 'center', margin: '20px 0'}}>
          <div style={{flex: 1, height: '1px', background: '#d1d5db'}}></div>
          <span style={{margin: '0 12px', color: '#9ca3af', fontSize: '14px'}}>o</span>
          <div style={{flex: 1, height: '1px', background: '#d1d5db'}}></div>
        </div>

        <button 
          className="btn-secondary" 
          onClick={() => onLogin('Invitado', '👤', true)}
          style={{background: 'transparent', border: '2px solid var(--text-muted)', color: 'var(--text-muted)'}}
        >
          Entrar como Invitado
        </button>
      </div>
    </div>
  );
}
