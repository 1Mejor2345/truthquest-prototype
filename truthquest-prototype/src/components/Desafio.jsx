import React, { useState } from 'react'
import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react'

// Extended Mock Data with Images and variety
const MOCK_QUESTIONS = {
  ia: [
    {
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60",
      question: "¿Esta imagen fue generada por IA?",
      options: ["Sí, es IA", "No, es real", "No hay suficiente evidencia"],
      correct: 0,
      explanation: "Observa las texturas de la piel y los reflejos en los ojos. Muchas veces la IA genera hiperrealismo artificial sin poros o con pupilas asimétricas. Además, el texto en el fondo suele ser ilegible."
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
      question: "¿Esta foto de una persona en la calle es real?",
      options: ["Generada por IA", "Totalmente real", "Manipulada con Photoshop"],
      correct: 1,
      explanation: "Es una fotografía real. Los detalles en las sombras, la coherencia de las letras en los carteles del fondo y la proporción de las manos son consistentes."
    }
  ],
  desinfo: [
    {
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60",
      text: "Titular: '¡Descubren pirámides de oro ocultas en la Antártida que el gobierno no quiere que veas!'",
      question: "¿Qué tipo de contenido es este?",
      options: ["Noticia de última hora", "Teoría conspirativa / Clickbait", "Artículo científico"],
      correct: 1,
      explanation: "Usa un lenguaje sensacionalista ('no quieren que veas') y presenta una afirmación extraordinaria sin citar institutos de investigación confiables."
    },
    {
      text: "Titular: 'Se aprueba la nueva ley de impuestos para el próximo año en el congreso.'",
      question: "¿Es esta una noticia confiable?",
      options: ["Falsa, es clickbait", "Sí, es información neutral", "Es un engaño"],
      correct: 1,
      explanation: "El titular es neutral, describe un hecho concreto de forma objetiva sin apelar a emociones extremas. Aún así, siempre se debe verificar en medios oficiales."
    }
  ],
  fuentes: [
    {
      img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=60",
      text: "Artículo publicado en: www.noticias-reales-123.blogspot.com",
      question: "¿Confiarías en esta fuente para un trabajo académico?",
      options: ["Sí, dice 'reales'", "No, la URL no es confiable", "Solo si tiene muchas visitas"],
      correct: 1,
      explanation: "Los dominios como '.blogspot' o con números aleatorios suelen ser blogs personales sin control editorial. Es mejor buscar dominios .edu, .gov, o medios reconocidos."
    }
  ],
  empatia: [
    {
      text: "Comentario viral: 'Todos los que juegan a ese juego son unos fracasados sin futuro. Deberían prohibirlo.'",
      question: "¿Cómo catalogarías este mensaje?",
      options: ["Opinión respetable", "Hecho estadístico", "Discurso de odio/Polarización"],
      correct: 2,
      explanation: "Generalizar y atacar a un grupo entero con insultos ('fracasados') promueve la hostilidad y la polarización, desviando cualquier debate constructivo."
    },
    {
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60",
      text: "Foro online: 'Entiendo tu punto sobre la tecnología, pero creo que no has considerado los riesgos a largo plazo.'",
      question: "¿Este comentario es apropiado?",
      options: ["Sí, promueve el debate sano", "No, ataca al autor", "Es discurso de odio"],
      correct: 0,
      explanation: "Critica la idea, no a la persona. Expresa desacuerdo de manera respetuosa e invita a reflexionar, lo cual es clave para la empatía digital."
    }
  ]
}

export default function Desafio({ category, onFinish }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  // Fallback to 'ia' if category not found
  const questions = MOCK_QUESTIONS[category] || MOCK_QUESTIONS['ia']
  // Cycle through questions based on clicks
  const q = questions[currentIdx % questions.length]

  const handleSelect = (idx) => {
    if (showFeedback) return;
    setSelectedOpt(idx)
    setTimeout(() => {
      setShowFeedback(true)
    }, 500)
  }

  const handleNext = () => {
    const won = selectedOpt === q.correct
    // Move to next question for next time
    setCurrentIdx(i => i + 1)
    onFinish(won, won ? 20 : 0)
  }

  return (
    <div className="animate-slide-up" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
        <h2 style={{margin:0}}>Desafío</h2>
        <span style={{fontSize: '14px', color: 'var(--text-muted)'}}>Ronda {(currentIdx % questions.length) + 1}</span>
      </div>

      <div className="challenge-card">
        {q.img ? (
          <img src={q.img} alt="Contenido a analizar" className="challenge-img" />
        ) : (
          <div className="challenge-img" style={{padding: '24px', textAlign: 'center', background: 'linear-gradient(135deg, #fef08a, #fcd34d)'}}>
            <h3 style={{fontStyle: 'italic', color: '#78350f'}}>"{q.text}"</h3>
          </div>
        )}
        
        <div className="challenge-content">
          {q.text && q.img && <p style={{fontStyle: 'italic', marginBottom: '12px', color: '#4b5563'}}>"{q.text}"</p>}
          <h3 style={{marginBottom: '20px'}}>{q.question}</h3>
          
          <div className="options-list">
            {q.options.map((opt, idx) => (
              <button 
                key={idx} 
                className={`option-btn ${selectedOpt === idx ? 'selected' : ''}`}
                onClick={() => handleSelect(idx)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Modal Overlay */}
      {showFeedback && (
        <div className="modal-overlay">
          <div className="modal-content">
            {selectedOpt === q.correct ? (
              <div className="feedback-success">
                <div className="feedback-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h2 style={{textAlign: 'center', color: '#059669'}}>¡Correcto!</h2>
              </div>
            ) : (
              <div className="feedback-error">
                <div className="feedback-icon">
                  <XCircle size={40} />
                </div>
                <h2 style={{textAlign: 'center', color: '#dc2626'}}>Incorrecto</h2>
              </div>
            )}
            
            <p style={{margin: '24px 0', fontSize: '16px', color: '#374151', lineHeight: '1.6'}}>
              {q.explanation}
            </p>

            <button className="btn-primary" onClick={handleNext} style={{display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center'}}>
              Continuar <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
