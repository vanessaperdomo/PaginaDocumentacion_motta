#  RentaMovil — Estructura de Archivos Organizados

##  Descripción

Este proyecto ha sido **refactorizado** para separar las responsabilidades en archivos independientes, siguiendo el principio de **separación de responsabilidades**. Todo el código inline ha sido movido a archivos externos para mejor mantenibilidad.

---

##  Estructura de Carpetas

```
RentaMovil_Documentacion/
├── index.html                    # Estructura HTML (contenido y markup)
├── styles.css                    # Estilos CSS (presentación)
├── script.js                     # Lógica JavaScript (comportamiento)
├── logo fijo proyecto.png        # Logo personalizado del proyecto
├── README.md                     # Este archivo
├── ESTRUCTURA.md                 # Documentación de estructura
├── ANTES_DESPUES.md              # Comparativa de cambios
└── GUIA_EXTENSION.md             # Guía para extensiones
```

---

##  Descripción de Archivos

### 1️ **index.html** — Estructura y Contenido
- **Responsabilidad**: Define la estructura completa del documento
- **Contiene**: 
  - Metadata y enlaces a recursos (CSS y JS externos)
  - Header con logo personalizado y navegación
  - Secciones de contenido (Portada, RA1, RA2, RA3, RA4, RA5)
  - Footer
- **Relación**: Vincula `styles.css` y `script.js`
- **Cambios recientes**: Eliminado CSS e JS inline, logo SVG reemplazado

### 2️ **styles.css** — Estilos y Diseño
- **Responsabilidad**: Define toda la presentación visual
- **Contiene**:
  - Variables CSS (colores, tamaños)
  - Estilos del header, navegación, cards, tablas
  - Componentes: badges, alerts, formularios
  - Clases utilitarias para márgenes y espaciado
  - Media queries (responsive design)
- **Cambios recientes**: Extraído del bloque `<style>` del HTML original

### 3️ **script.js** — Lógica e Interactividad
- **Responsabilidad**: Controla el comportamiento dinámico
- **Funciones principales**:
  - `irA(id)`: Navega entre secciones (Portada, RA1-RA5)
  - `rfTab(mod, el)`: Cambia entre pestañas de módulos (RF1-RF10)
- **Cambios recientes**: Extraído del bloque `<script>` del HTML original

### 4️ **logo fijo proyecto.png** — Logo Personalizado
- **Responsabilidad**: Imagen del logo de RentaMovil
- **Uso**: Vinculado en el header como imagen
- **Cambios recientes**: Reemplazó el ícono SVG de carro

---

##  Beneficios de esta Estructura

| Aspecto | Beneficio |
|--------|----------|
| **Mantenibilidad** | Cambios en estilos sin tocar HTML |
| **Reutilización** | CSS y JS pueden usarse en otros proyectos |
| **Escalabilidad** | Fácil agregar más secciones sin afectar otros archivos |
| **Rendimiento** | Archivos cacheados independientemente en navegadores |
| **Colaboración** | Diferentes personas pueden trabajar en cada archivo |
| **Debugging** | Errores más fáciles de localizar y corregir |
| **Limpieza** | HTML sin código embebido, más legible |

---

##  Cómo Usar

1. **Abre el archivo** `index.html` en tu navegador
2. **Navega** usando el menú de navegación superior
3. Las secciones se cargan dinámicamente gracias a `script.js`
4. Los estilos se aplican desde `styles.css`
5. El logo personalizado se muestra en el header

---

##  Cómo Modificar

### Agregar una Nueva Sección
1. En `index.html`: Añade un `<div class="ra-section" id="sec-nombre">`
2. En `index.html`: Agrega un `<a>` en el `<nav class="ra-nav">` para navegar
3. En `script.js`: Si es necesaria lógica especial, agrégala a `irA()` o crea nueva función

### Cambiar Estilos
1. Edita `styles.css`
2. Todas las páginas reflejan el cambio automáticamente

### Cambiar Logo
1. Reemplaza `logo fijo proyecto.png` con tu nueva imagen
2. No es necesario cambiar ningún archivo (la ruta permanece igual)

### Agregar Nueva Funcionalidad
1. Crea una nueva función en `script.js`
2. Usa `onclick="nombreFuncion()"` en el HTML para activarla

---

##  Cambios Realizados Recientemente

 **Separación de responsabilidades**
- CSS extraído de `<style>` → `styles.css`
- JavaScript extraído de `<script>` → `script.js`

 **Mejora del header**
- Logo SVG reemplazado por imagen personalizada
- Fondo del logo removido para mejor visualización
- Logo aumentado de tamaño (56px)

 **Gestión de clases**
- Reemplazo de estilos inline por clases CSS
- Clases utilitarias como `.spaced-section`, `.project-list`, etc.

---

##  Próximos Pasos Sugeridos

1. **Separar datos**: Crear `data.json` para contenido de RF, RNF, CU
2. **Componentes reutilizables**: Extraer HTML de cards en templates
3. **Testing**: Agregar pruebas unitarias para funciones de `script.js`
4. **Framework**: Considerar React/Vue para aplicaciones más complejas

---

##  Contacto

Proyecto realizado por:
- Danna Valentina Barrios Penagos
- Laura Vanessa Pérez Perdomo
- Ficha 3145555 · SENA CIES · 2026

