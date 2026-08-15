# 📦 Guía de Archivos — Propuesta TruthQuest UNESCO

## Archivos en `docs/pdf final/`

### 1. `propuesta_overleaf.txt`
**El documento principal.** Copia TODO el contenido y pégalo en `main.tex` en Overleaf.

**Cómo usar:**
1. Ve a [overleaf.com](https://overleaf.com) → Nuevo Proyecto → Proyecto en Blanco
2. Borra todo el contenido de `main.tex`
3. Pega el contenido de `propuesta_overleaf.txt`
4. Sube las imágenes (`.jpg`) a la raíz del proyecto Overleaf
5. Compila con **pdfLaTeX**

**⚠️ Paquete `fontawesome5`:** Si Overleaf da error con `fontawesome5`, cambia a `fontawesome` o elimina los `\faIcon{...}` y reemplázalos por texto.

**📸 Espacios para capturas de pantalla:**
Busca las líneas comentadas con `% \begin{center}\includegraphics...` y descoméntalas después de subir tus capturas:
- `captura_mundo.png` — Screenshot de la pestaña "Mundo/Aldea"
- `captura_aprender.png` — Screenshot de la pestaña "Aprender"  
- `captura_duelo.png` — Screenshot de un Duelo en acción

---

### 2. `diagramas_mermaid.txt`
**6 diagramas listos para generar.** Cada bloque de código se copia por separado.

**Cómo usar:**
1. Ve a [mermaid.live](https://mermaid.live)
2. Copia UN bloque de código a la vez (desde `flowchart` o `gantt` hasta el final del bloque)
3. El diagrama se renderiza automáticamente
4. Haz clic en el botón de descarga → PNG o SVG
5. Sube el PNG a Overleaf

**Diagramas incluidos:**
| # | Nombre | Tipo | Para qué sirve |
|---|--------|------|-----------------|
| 1 | Flujo de Experiencia | `flowchart LR` | Muestra todo el viaje del usuario en la app |
| 2 | Arquitectura Técnica | `flowchart TB` | Muestra la estructura técnica del sistema |
| 3 | Teoría de Cambio | `flowchart LR` | Inputs → Actividades → Outputs → Impacto |
| 4 | Roadmap | `gantt` | Timeline de implementación en 4 fases |
| 5 | Modelo de Ingresos | `pie` | Distribución de fuentes de ingreso |
| 6 | Ciclo de Aprendizaje | `flowchart TD` | Cómo funciona cada micro-desafío |

---

### 3. `portada_unesco.jpg` y `diagrama_flujo.jpg`
Imágenes de IA generadas como placeholder. Puedes usarlas o reemplazarlas.

---

## Capturas recomendadas del prototipo

Abre la app en: https://truthquest-prototype.onrender.com

Toma capturas de:
1. **Pantalla de Login** — Muestra la experiencia de bienvenida
2. **La Aldea (Mundo)** — El mapa de progresión con los nodos
3. **Aprender** — La grilla de categorías (IA, Desinformación, etc.)
4. **Un Desafío** — Pregunta con imagen y opciones
5. **Un Duelo** — Competencia 1v1 en acción
6. **Resultado de Duelo** — Pantalla de victoria/derrota
7. **Tienda** — Cosméticos y sistema de monedas
8. **Perfil** — Estadísticas y medallas
