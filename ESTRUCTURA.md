##  Guía Visual de Separación de Responsabilidades

### Antes (index(2).html - TODO EN UNO)
```
┌─────────────────────────────────────────┐
│        index(2).html (1,118 líneas)    │
├─────────────────────────────────────────┤
│  <style>               ← 600+ líneas    │
│    CSS aquí            ← Estilos       │
│  </style>             ← Desorganizado  │
│                                         │
│  <body>               ← 400+ líneas     │
│    HTML               ← Contenido       │
│    <svg>Logo</svg>    ← Inline icon    │
│  </body>              ← Entrelazado     │
│                                         │
│  <script>             ← 50 líneas       │
│    JavaScript         ← Lógica         │
│  </script>            ← Sin separar     │
└─────────────────────────────────────────┘
PROBLEMAS:
 Difícil de mantener
 Cambios afectan todo
 No reutilizable
 Logo no personalizable
 Difícil colaborar
```

---

### Después (Estructura Organizada - REFACTORIZADO)
```
RentaMovil_Documentacion/
│
├── index.html           ← CONTENIDO
│   ├── Links a externos
│   ├── Header con logo personalizado
│   ├── Navegación
│   └── Secciones (Portada, RA1-RA5)
│   (~300 líneas, limpio y semántico)
│
├── styles.css           ← PRESENTACIÓN
│   ├── Variables CSS
│   ├── Componentes
│   ├── Layout responsivo
│   ├── Clases utilitarias
│   └── Sin estilos inline
│   (600+ líneas, reutilizable, fácil de modificar)
│
├── script.js            ← COMPORTAMIENTO
│   ├── irA(id)        ← Navega entre secciones
│   ├── rfTab(mod, el) ← Cambia tabs de requisitos
│   └── Lógica de navegación
│   (~15 líneas, sin efectos secundarios)
│
├── logo fijo proyecto.png ← LOGO PERSONALIZADO
│   └── Imagen del proyecto (56px, fondo transparente)
│
└── [Documentación]
    ├── README.md
    ├── ESTRUCTURA.md
    └── ANTES_DESPUES.md
```

---

##  Matriz de Responsabilidades

| Cambio Necesario | Archivo | Acción |
|------------------|---------|--------|
| Añadir nueva sección | HTML | Edita `index.html` solo |
| Cambiar colores | CSS | Edita `styles.css` solo |
| Nueva función | JS | Edita `script.js` solo |
| Actualizar navegación | HTML + JS | Edita ambos de forma independiente |
| Cambiar fuente | CSS | Edita `styles.css` solo |
| Agregar más lógica | JS | Edita `script.js` sin tocar HTML |
| Personalizar logo | PNG | Reemplaza archivo, sin editar código |

---

##  Cambios Recientes Implementados

###  Separación de CSS
- CSS extraído de `<style>` interno
- Creado archivo `styles.css` organizado
- Eliminados estilos inline del HTML
- Creadas clases utilitarias: `.spaced-section`, `.project-list`, etc.

###  Separación de JavaScript
- JavaScript extraído de `<script>` interno
- Creado archivo `script.js` independiente
- Funciones limpias: `irA()` y `rfTab()`

###  Personalización del Logo
- Logo SVG de carro reemplazado por `logo fijo proyecto.png`
- Fondo azul del logo removido (background: transparent)
- Logo aumentado de 38px a 56px
- Imagen se carga directamente sin fondo extra

---

##  Ejemplo: Agregar Nueva Sección

### ANTES (Buscar y editar TODO mezclado)
```html
<!-- En medio de 1,118 líneas... -->
<style>
  /* Buscar el CSS de esta sección... */
  .mi-nueva-seccion { ... }
</style>

<div class="mi-nueva-seccion">
  <!-- Contenido aquí -->
</div>

<script>
  // Buscar la lógica de esta sección...
  function miNuevaLogica() { ... }
</script>
```

### DESPUÉS (Claro y organizado)

**En index.html:**
```html
<div class="section" id="sec-nueva">
  <!-- Solo contenido -->
</div>
```

**En styles.css:**
```css
#sec-nueva { /* estilos de la sección */ }
```

**En script.js:**
```javascript
function miNuevaLogica() { /* lógica */ }
```

---

##  Ventajas por Tipo de Usuario

### Para el Desarrollador Backend
 Solo se enfoca en `script.js`
 No toca HTML ni CSS
 Cambios no rompen layout

### Para el Designer
 Solo se enfoca en `styles.css`
 Puede experimentar sin romper lógica
 Reutilizable en otros proyectos

### Para el Product Manager
 HTML limpio y legible
 Fácil ver estructura del contenido
 Cambios de texto no requieren técnico

### Para DevOps / Deploy
 Archivos pequeños, carga rápida
 Cacheable cada uno independientemente
 Minificación optimizada

---

##  Flujo de Datos

```
index.html (Estructura)
      ↓
      ├─→ Carga styles.css (Presentación)
      │       ↓
      │   Aplica estilos
      │
      └─→ Carga script.js (Lógica)
              ↓
          Escucha eventos
              ↓
          showSection(id)
              ↓
          Mostrar/Ocultar secciones
```

---

##  Mejores Prácticas Aplicadas

| Práctica | Aplicado |
|----------|---------|
| **DRY** (Don't Repeat Yourself) |  Estilos reutilizables en CSS |
| **SOLID** |  Cada archivo con una responsabilidad |
| **Separation of Concerns** |  HTML, CSS, JS separados |
| **Modularidad** |  Fácil de extender |
| **Mantenibilidad** |  Cambios localizados |
| **Escalabilidad** |  Prepara para crecer |

---

##  Resumen

**Principio Core**: Una responsabilidad por archivo

-  **CSS** = "¿Cómo se ve?"
-  **HTML** = "¿Qué hay?"
-  **JS** = "¿Qué hace?"

**Resultado**: Código mantenible, escalable y colaborativo.
