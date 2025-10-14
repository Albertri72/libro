# PROMPT: Un Amor con Propósito - Libro Digital Interactivo

## Descripción del Proyecto

Crear un libro digital interactivo titulado "Un Amor con Propósito: Nuestra Historia de Noviazgo" que permita a los usuarios navegar a través de capítulos como si estuvieran hojeando un libro físico. El proyecto debe estar desarrollado con HTML, CSS y JavaScript vanilla (sin frameworks), con un diseño elegante que simule las páginas de un libro real.

## Especificaciones Técnicas

### Tecnologías
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos visuales con tema de libro vintage
- **JavaScript (ES6)**: Lógica de navegación y dinamismo

### Estructura de Archivos
```
libro/
├── index.html          # Página principal
├── assets/
│   ├── style.css      # Estilos visuales
│   └── script.js      # Lógica de interacción
└── README.md          # Documentación
```

## Funcionalidades Requeridas

### 1. Página de Índice (Index)
- Mostrar el título del libro: "Un Amor con Propósito: Nuestra Historia de Noviazgo"
- Subtítulo: "Un libro digital para hojear"
- Lista de 10 capítulos clicables:
  1. Nuestro primer mes juntos – Un nuevo comienzo lleno de perdón, esperanza y propósito.
  2. Nuestro segundo mes – El crecimiento de un amor sostenido por la fe y la familia.
  3. Nuestro tercer mes – Entre risas, pruebas y confianza, seguimos construyendo nuestro camino.
  4. Sueños compartidos – Lo que imaginamos de nuestro futuro.
  5. Momentos difíciles – Cómo nos fortalecemos en la fe y el amor.
  6. La bendición de la familia – Ser acogido como parte de tu hogar.
  7. La fe como guía – Dios en el centro de nuestro noviazgo.
  8. Amor y amistad – No solo novios, también mejores amigos.
  9. Nuestro compromiso – La promesa de un amor eterno.
  10. Hacia el matrimonio – Preparando nuestro "para siempre".
- Botón "Compartir enlace" para copiar URL al portapapeles

### 2. Vista de Lectura
- Área de contenido para mostrar el capítulo actual
- Navegación con botones:
  - **Anterior**: Ir al capítulo previo (deshabilitado en la primera página)
  - **Siguiente**: Ir al siguiente capítulo (deshabilitado en la última página)
  - **Índice**: Volver a la lista de capítulos
  - **Compartir enlace**: Copiar URL actual
- Indicador visual del capítulo actual en el índice (negrita y subrayado)

### 3. Contenido del Capítulo 1
El primer capítulo debe incluir:
- Título: "Capítulo 1: Nuestro primer mes juntos"
- Contenido narrativo personal y emotivo sobre el primer mes de noviazgo
- Temas: perdón, esperanza, propósito, amor guiado por Dios
- Reflexión espiritual con cita bíblica (Eclesiastés 4:9-10)
- Formato con párrafos, líneas horizontales y blockquotes

Los capítulos 2-10 deben tener placeholders con estructura similar:
- `<h3>Título del capítulo</h3>`
- `<p>Contenido del capítulo...</p>`

## Diseño y Estilo

### Paleta de Colores
- Fondo general: `#f7f3e9` (beige claro)
- Container del libro: `#fffbe6` (amarillo muy claro)
- Títulos principales: `#a67c52` (marrón dorado)
- Texto: `#4b3a24` (marrón oscuro)
- Botones: `#a67c52` con hover `#7c5a36`
- Elementos deshabilitados: `#e0d3b8`

### Tipografía
- Fuente principal: 'Georgia', serif (estilo clásico de libro)
- Tamaño título: 2.2em
- Tamaño contenido: 1.15em
- Interlineado: 1.7 (legibilidad óptima)

### Efectos Visuales
- Sombras suaves para simular profundidad del libro
- Bordes redondeados (border-radius: 12px en container)
- Transiciones suaves en hover y cambios de estado
- Diseño responsive con max-width: 700px

## Comportamiento de la Aplicación

### Inicialización
- Al cargar, mostrar solo el índice
- Ocultar área de páginas y navegación

### Navegación por Índice
- Click en cualquier capítulo → mostrar contenido correspondiente
- Ocultar índice, mostrar página y controles de navegación
- Resaltar capítulo actual en el índice (incluso cuando está oculto)

### Navegación Secuencial
- Botón "Anterior" → página anterior (si existe)
- Botón "Siguiente" → página siguiente (si existe)
- Deshabilitar botones en extremos (primera/última página)

### Compartir Enlace
- Copiar URL actual al portapapeles
- Mostrar mensaje "¡Enlace copiado!" durante 1.8 segundos
- Funcionar tanto desde índice como desde vista de lectura

## Código JavaScript - Estructura

```javascript
// Arrays de datos
const chapters = [ /* 10 títulos de capítulos */ ];
const pagesContent = [ /* 10 contenidos HTML */ ];

// Variables de estado
let currentPage = 0;

// Elementos del DOM
const bookPages = document.getElementById('book-pages');
const bookIndex = document.getElementById('book-index');
const bookNavigation = document.getElementById('book-navigation');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const backIndexBtn = document.getElementById('back-index');
const indexList = document.querySelectorAll('#book-index li');

// Función principal de navegación
function showPage(page) {
    // Mostrar contenido
    // Actualizar estado de botones
    // Gestionar visibilidad de elementos
    // Resaltar capítulo actual
}

// Event listeners
// - Navegación anterior/siguiente
// - Click en items del índice
// - Botón volver al índice
// - Compartir enlace (2 instancias)
```

## HTML - Estructura

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Un Amor con Propósito: Nuestra Historia de Noviazgo</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="book-container">
        <div class="book-header">
            <!-- Título y subtítulo -->
        </div>
        <div class="book-index" id="book-index">
            <!-- Lista de capítulos con data-page -->
            <!-- Botón compartir índice -->
        </div>
        <div class="book-pages" id="book-pages" style="display:none;">
            <!-- Contenido dinámico -->
        </div>
        <div class="book-navigation" id="book-navigation" style="display:none;">
            <!-- Botones de navegación -->
        </div>
    </div>
    <script src="assets/script.js"></script>
</body>
</html>
```

## CSS - Componentes Principales

### Container
- Centrado con margin: 40px auto
- Max-width: 700px
- Box-shadow para efecto 3D
- Padding: 32px 24px

### Índice
- Lista sin bullets (list-style: none)
- Items clicables con cursor: pointer
- Hover effect con cambio de fondo
- Transiciones suaves

### Páginas
- Min-height: 220px
- Fondo blanco con bordes redondeados
- Padding generoso para legibilidad
- Sombra sutil

### Navegación
- Display: flex con space-between
- Botones con padding: 10px 24px
- Estados hover y disabled diferenciados

## Mejoras Futuras (Opcionales)

1. **Animaciones de página**: Integrar Turn.js o similar para efecto de volteo de páginas
2. **Frameworks modernos**: Migrar a React/Vue para mayor escalabilidad
3. **Persistencia**: Guardar progreso de lectura en localStorage
4. **Multimedia**: Agregar imágenes, audio o video en capítulos
5. **Temas**: Modo oscuro/claro
6. **Exportación**: Generar PDF del libro completo
7. **Comentarios**: Sistema de notas personales por capítulo

## Notas de Implementación

- **Idioma**: Todo el contenido y UI en español
- **Accesibilidad**: Usar HTML semántico y atributos ARIA si es necesario
- **Compatibilidad**: Probar en navegadores modernos (Chrome, Firefox, Safari, Edge)
- **Sin dependencias**: No requiere npm, node_modules ni build process
- **Personalizable**: Fácil edición del contenido en el array `pagesContent`

## Contexto del Contenido

Este libro digital es un proyecto personal que narra la historia de una relación de noviazgo con un enfoque en:
- Valores cristianos y fe
- Crecimiento personal y como pareja
- Reflexiones espirituales con citas bíblicas
- Tono emotivo, romántico y esperanzador
- Preparación para el matrimonio

El contenido debe ser respetuoso, inspirador y reflejar un compromiso serio fundamentado en principios espirituales.

---

**Resultado esperado**: Un libro digital funcional, estéticamente agradable y fácil de navegar que pueda ser abierto directamente en un navegador sin necesidad de servidor o configuración adicional.
