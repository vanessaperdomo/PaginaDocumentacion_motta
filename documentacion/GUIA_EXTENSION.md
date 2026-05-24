#  Guía de Extensión y Mantenimiento

Este documento explica cómo agregar contenido y funcionalidad sin romper la estructura refactorizada.

---

##  Agregar una Nueva Sección (RA6, RA7, etc.)

### Paso 1: HTML — Define la estructura

**En `index.html`, al final antes de `</main>`:**

```html
<!-- ════════════════════════════════════════════
     RA6 — Nueva Sección
════════════════════════════════════════════ -->
<div class="ra-section" id="sec-ra6">

  <div class="ra-chip">RA6 — Resultado de Aprendizaje</div>
  <div class="ra-h1">Título de la Nueva Sección</div>
  <div class="ra-h1-sub">Descripción breve de la sección.</div>

  <div class="sub-header">
    <span class="ra-tag">RA6</span>
    <div><h2>Primer Subsección</h2><div class="sub-desc">Detalle aquí</div></div>
  </div>

  <p>Tu contenido aquí...</p>

</div>
```

### Paso 2: HTML — Añade al menú de navegación

**En `index.html`, en la `<nav class="ra-nav">`:**

```html
<a href="#" onclick="irA('ra6')" id="nav-ra6">
  <span class="num">6</span> RA6 — Nueva Sección
</a>
```

### Paso 3: CSS — Agrega estilos si es necesario

**En `styles.css`, al final:**

```css
/* ── RA6 CUSTOM STYLES ── */
#sec-ra6 {
  /* estilos personalizados específicos */
}

#sec-ra6 .custom-element {
  color: var(--azul);
  font-weight: 700;
}
```

### Paso 4: JS — Agrega lógica si es necesaria

**En `script.js`, si necesitas lógica especial:**

```javascript
// Nueva función para RA6 (opcional)
function miNuevaFuncion() {
  // Tu código aquí
}
```

**¡Listo!** La nueva sección aparecerá automáticamente en la navegación.

---

##  Personalizar Colores y Variables

### Cambiar color primario del proyecto

**En `styles.css`, en `:root {}`:**

```css
:root {
  --azul: #tu-color-aqui;        /* Color primario */
  --azul-light: #color-claro;    /* Versión clara */
  --azul-dark: #color-oscuro;    /* Versión oscura */
  /* ... resto de variables ... */
}
```

**Automáticamente se actualizan:**
- Header
- Navegación
- Botones
- Chips
- Badges
- Toda la interfaz

### Agregar una nueva variable

**En `styles.css`:**

```css
:root {
  --naranja: #ff9500;
  --naranja-light: #ffe8cc;
}
```

**Usa en cualquier lado:**

```css
.mi-elemento {
  color: var(--naranja);
  background: var(--naranja-light);
}
```

---

##  Cambiar Logo

### Opción 1: Reemplazar el PNG actual

1. Prepara tu nuevo logo como PNG, JPG o SVG
2. Reemplaza el archivo `logo fijo proyecto.png` con tu imagen
3. ¡Sin necesidad de editar código!

### Opción 2: Cambiar nombre de la imagen

**Si quieres renombrar el logo en `index.html`:**

```html
<div class="header-logo">
  <img src="mi-nuevo-logo.png" alt="Logotipo RentaMovil">
</div>
```

### Ajustar tamaño del logo

**En `styles.css`:**

```css
.header-logo {
  width: 64px;      /* Aumenta este valor */
  height: 64px;     /* Aumenta este valor */
  /* resto de propiedades... */
}
```

---

##  Crear Nuevos Componentes

### Tarjeta personalizada

**En `styles.css`:**

```css
/* ── CUSTOM CARD ── */
.mi-tarjeta {
  background: linear-gradient(135deg, var(--azul), var(--azul-light));
  border-radius: var(--radio-lg);
  padding: 1.5rem;
  color: white;
  box-shadow: 0 2px 12px rgba(26, 86, 219, 0.15);
}

.mi-tarjeta h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
```

**En `index.html`:**

```html
<div class="mi-tarjeta">
  <h3>Título</h3>
  <p>Descripción</p>
</div>
```

### Clase utilitaria de espaciado

**En `styles.css`:**

```css
.mt-4 { margin-top: 2rem; }
.mb-3 { margin-bottom: 1.5rem; }
.p-2 { padding: 1rem; }
```

**En `index.html`:**

```html
<div class="mb-3 p-2">Contenido con espaciado</div>
```

---

##  Agregar Nueva Funcionalidad JavaScript

### Crear una función simple

**En `script.js`:**

```javascript
// Nueva función para buscar elementos
function filtrarItems(query) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    const texto = item.textContent.toLowerCase();
    item.style.display = texto.includes(query) ? 'block' : 'none';
  });
}
```

**En `index.html`:**

```html
<input type="text" onkeyup="filtrarItems(this.value)" placeholder="Buscar...">
```

### Crear un event listener

**En `script.js`:**

```javascript
// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  console.log('Página cargada correctamente');
  
  // Encontrar elementos
  const botones = document.querySelectorAll('.mi-boton');
  
  // Agregar eventos
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Botón clickeado');
    });
  });
});
```

---

##  Flujo Completo: Agregar Nueva Feature

### Ejemplo: Agregar una sección "RA6 — Deployment"

#### 1️ HTML (index.html)

```html
<!-- Agregar a navegación -->
<a href="#" onclick="irA('ra6')" id="nav-ra6">
  <span class="num">6</span> RA6 — Deployment
</a>

<!-- Agregar sección al final -->
<div class="ra-section" id="sec-ra6">
  <div class="ra-chip">RA6 — Resultado de Aprendizaje</div>
  <div class="ra-h1">Deployment del Proyecto</div>
  
  <div class="sub-header">
    <span class="ra-tag">RA6</span>
    <h2>Pasos de Deployment</h2>
  </div>

  <div class="info-box">
    <strong>Información importante:</strong> 
    Ejecuta los pasos en orden.
  </div>

  <ol class="proyecto-lista">
    <li>Preparar ambiente de producción</li>
    <li>Ejecutar pruebas finales</li>
    <li>Hacer deploy a servidor</li>
    <li>Verificar funcionamiento</li>
  </ol>
</div>
```

#### 2️ CSS (styles.css)

```css
/* ── RA6 CUSTOM STYLES ── */
.proyecto-lista {
  padding-left: 1.5rem;
  color: var(--texto2);
}

.proyecto-lista li {
  margin-bottom: 0.7rem;
  line-height: 1.6;
}
```

#### 3️ JS (script.js) — Si lo necesitas

```javascript
// Verificar que RA6 se carga correctamente
function validarRA6() {
  const ra6Section = document.getElementById('sec-ra6');
  if (ra6Section) {
    console.log(' RA6 cargado correctamente');
  }
}
```

---

##  Checklist de Buenas Prácticas

Antes de hacer cambios, verifica:

- [ ] Separé HTML, CSS y JS (no los mezclé)
- [ ] Usé variables CSS existentes (`var(--azul)`, etc.)
- [ ] Agregué clases en CSS, no estilos inline en HTML
- [ ] Los IDs de secciones siguen el patrón `sec-nombre`
- [ ] Las funciones JS tienen nombres descriptivos
- [ ] Probé en el navegador antes de terminar
- [ ] Los enlaces de navegación apuntan a IDs correctos
- [ ] No rompí la estructura de archivos

---

##  Troubleshooting

### ¿La sección no aparece en el navegador?

**Verifica:**
1. El `id="sec-ra6"` en la sección existe
2. El `onclick="irA('ra6')"` en el navegación es correcto
3. El archivo está guardado (Ctrl+S)
4. Recargaste la página (Ctrl+F5)

### ¿Los estilos no se aplican?

**Verifica:**
1. La clase está definida en `styles.css`
2. La clase está correctamente escrita en `index.html`
3. No hay conflicto con otra clase con el mismo nombre
4. Recargaste la página

### ¿La función JavaScript no funciona?

**Verifica:**
1. La función está definida en `script.js`
2. El nombre en HTML coincide exactamente: `onclick="nombre("`
3. No hay errores en la consola (F12 → Console)
4. Las variables referenciadas existen

---

##  Contacto y Soporte

Para más información sobre la estructura, revisa:
- `README.md` — Visión general del proyecto
- `ESTRUCTURA.md` — Documentación de organización
- `ANTES_DESPUES.md` — Comparación de cambios

##  Agregar Nueva Funcionalidad

### Crear una nueva función

**En `script.js`, al final:**

```javascript
/**
 * miNuevaFuncion - Descripción de qué hace
 * @param {string} parametro - Descripción del parámetro
 */
function miNuevaFuncion(parametro) {
  console.log('Función ejecutada con:', parametro);
  // Tu lógica aquí
}
```

**En index.html:**
```html
<button onclick="miNuevaFuncion('valor')">Ejecutar</button>
```

### Crear una función con evento

**En `script.js`:**

```javascript
/**
 * initializeFeature - Inicializa una característica cuando carga la página
 */
function initializeFeature() {
  const elemento = document.getElementById('miElemento');
  
  // Validar que exista
  if (!elemento) return;
  
  // Agregar evento
  elemento.addEventListener('click', function() {
    console.log('¡Clickeado!');
  });
}

// Ejecutar cuando el documento carga
document.addEventListener('DOMContentLoaded', initializeFeature);
```

---

##  Agregar Nuevo Contenido de Requisitos

### Para Requisitos Funcionales

**En `index.html`, en la sección `sec-ra1-rf`:**

```html
<div id="rf-mod6" style="display:none">
  <div class="rf-block">
    <div class="rf-title">RF-60: Nuevo Requisito</div>
    <div class="rf-items">
      <span class="rf-item">Actor</span>
      <span class="rf-item">Plataforma</span>
    </div>
  </div>
  <p style="font-size:13.5px;color:var(--text2);margin-bottom:.75rem">
    Descripción del requisito funcional.
  </p>
</div>
```

### Para Requisitos No Funcionales

**En `index.html`, en la sección `sec-ra1-rnf`:**

```html
<div class="rnf-row">
  <div class="rnf-head">
    <div>
      <span class="rnf-id">RNF 12</span>
      <div class="rnf-name" style="margin-top:.3rem">Nuevo Requisito</div>
    </div>
    <span class="badge badge-blue">Color</span>
  </div>
  <p style="font-size:13.5px;color:var(--text2);margin-bottom:.75rem">
    Descripción del requisito no funcional.
  </p>
</div>
```

---

##  Debugging

### Ver qué sección está activa

**En el navegador (F12 > Consola):**
```javascript
// Ver qué sección tiene la clase "active"
document.querySelector('.section.active').id
```

### Testear la navegación

**En la consola:**
```javascript
// Simular click en una sección
showSection('ra1-intro')
```

### Ver todos los estilos aplicados

**En DevTools > Elements:**
- Click derecho en un elemento
- "Inspect" / "Inspeccionar"
- Ver panel de estilos a la derecha

---

##  Optimizaciones Futuras

### 1. Datos Externos (data.json)

En lugar de hardcodear HTML, usar JSON:

```json
{
  "requisitos": [
    {
      "id": "RF-1",
      "nombre": "Registrarse",
      "descripcion": "...",
      "actor": "Usuario"
    }
  ]
}
```

**En script.js:**
```javascript
// Cargar datos
fetch('data.json')
  .then(r => r.json())
  .then(data => {
    // Generar HTML automáticamente
    data.requisitos.forEach(rf => {
      // Crear elemento dinámicamente
    });
  });
```

### 2. Exportar a PDF

Agregar librería como `pdfkit.js`:

```html
<button onclick="exportPDF()">Descargar PDF</button>
```

### 3. Búsqueda Global

```html
<input type="search" id="buscar" onkeyup="buscarContenido(this.value)">
```

---

##  Checklist para Nuevas Contribuciones

- [ ] Agregar contenido en **index.html**
- [ ] Actualizar **estilos** en styles.css si es necesario
- [ ] **Testear** la nueva sección en navegador
- [ ] Verificar **responsive** (mobile, tablet, desktop)
- [ ] Actualizar **README.md** si hay cambios estructurales
- [ ] Comentar el código siguiendo el patrón existente
- [ ] Verificar que los **links internos** funcionen

---

##  Soporte y Contacto

Para agregar más contenido o modificar esta estructura:

1. Entender esta guía
2. Seguir el patrón existente
3. No romper las referencias entre archivos
4. Testear en navegador
5. Documentar cambios importantes

**Responsables:** Laura Vanessa Pérez Perdomo | Danna Valentina Barrios Penagos

