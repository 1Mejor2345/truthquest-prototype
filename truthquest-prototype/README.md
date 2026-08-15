<div align="center">
  <img src="https://img.icons8.com/color/96/000000/shield.png" alt="TruthQuest Logo"/>
  <h1>TruthQuest</h1>
  <p><strong>Play Your Part: Youth Designing the Future of Media and Information Literacy</strong></p>
  <p><em>Prototipo oficial para el UNESCO Youth Hackathon 2026</em></p>
  
  [![Demo en Vivo](https://img.shields.io/badge/Demo%20en%20Vivo-Render-4F46E5?style=for-the-badge&logo=render)](https://truthquest-prototype.onrender.com)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
</div>

<br />

## 🌟 Acerca del Proyecto

**TruthQuest** es una aplicación móvil gamificada que convierte la Alfabetización Mediática e Informacional (MIL) en una experiencia de juego competitiva y social. 

En lugar de cursos tradicionales aburridos, los usuarios aprenden a detectar desinformación, contenido generado por IA, sesgos, clickbait y discursos de odio mediante:
- **Micro-desafíos** interactivos con retroalimentación inmediata.
- **Duelos 1 vs 1** en tiempo real para competir con amigos.
- **Progresión visual** en una "Aldea Digital".

---

## 🚀 Enlace al Prototipo en Vivo

El prototipo funcional se encuentra desplegado y accesible desde cualquier navegador (PC o móvil):

👉 **[Jugar TruthQuest Ahora](https://truthquest-prototype.onrender.com)**

*(Nota: La aplicación está optimizada para verse en formato móvil)*

---

## 📁 Estructura del Proyecto

El proyecto está desarrollado en **React + Vite** y sigue una arquitectura modular.

```text
truthquest-prototype/
├── docs/                 # Documentos de diseño, diagramas y propuesta oficial para la UNESCO
│   └── pdf final/        # Archivos fuente para Overleaf y capturas de la aplicación
├── public/               # Assets públicos estáticos
└── src/
    ├── assets/           # Recursos como imágenes e íconos
    ├── components/       # Módulos y vistas principales de la aplicación
    │   ├── Aprender.jsx  # 📚 Módulo de retos educativos y categorías (IA, Sesgos, etc.)
    │   ├── Desafio.jsx   # 🧠 Lógica de preguntas, respuestas y explicaciones educativas
    │   ├── Duelo.jsx     # ⚔️ Modo competitivo 1vs1 (Simulación de matchmaking y temporizador)
    │   ├── Login.jsx     # 🔐 Pantalla de acceso y creación de perfil / invitado
    │   ├── Mundo.jsx     # 🌍 Mapa de progresión principal (Aldea Digital y nodos)
    │   ├── Perfil.jsx    # 👤 Estadísticas del jugador, winrate y sistema de insignias
    │   └── Recompensas.jsx # 🎁 Tienda, sistema monetario Freemium y recompensas diarias
    ├── App.jsx           # ⚙️ Punto de entrada: enrutador, simulador móvil y estado global
    ├── App.css           # 🎨 Estilos específicos de componentes
    ├── index.css         # 🎨 Estilos globales, variables de color y responsividad
    └── main.jsx          # 🚀 Renderizador raíz de React
```

---

## 🛠️ Cómo ejecutar en local (Desarrollo)

Si deseas clonar el repositorio, explorar el código y ejecutar la aplicación en tu máquina local, sigue estos pasos:

### Prerrequisitos
- Tener **Node.js** instalado (versión 16+ recomendada).

### Instrucciones
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/1Mejor2345/truthquest-prototype.git
   ```

2. **Entrar al directorio del proyecto:**
   ```bash
   cd truthquest-prototype
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   La terminal te mostrará una dirección local (por defecto suele ser `http://localhost:5173`). Haz clic o cópiala en tu navegador.

---

## 👥 Equipo de Desarrollo

Este prototipo fue construido colaborativamente por:

- **Kevin Baque**
- **Bianka Lino**
- **Elina Ortiz**
- **José Paladines**
- **Andrea Verdezoto**

Desarrollado para el **UNESCO Youth Hackathon 2026** (Global MIL Week).

---
*«La verdad no se defiende sola. Se defiende jugando.»*
