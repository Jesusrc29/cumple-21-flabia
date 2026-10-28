# Feliz cumpleaños, mi canelita ♡

Página estática de cumpleaños para Flabia. HTML, CSS y JavaScript sin dependencias, rastreadores ni servicios externos.

## Vista previa

Abre `index.html` directamente en el navegador. También puedes servir esta carpeta con `python -m http.server 8080` y visitar `http://localhost:8080`.

## Cambiar textos y fotos

- `index.html`: portada, historia, cita, mensaje final y textos alternativos de las fotos.
- `script.js`: cinco frases editables. Actualiza también su copia en el HTML para la versión sin JavaScript.
- `styles.css`: colores y estilos; los colores principales están en `:root`.
- `assets/nosotros-sofa.webp`: fotografía completa, sin recorte.
- `assets/infancia-collage.webp`: collage aportado, con aclaración visible sobre IA.
- `assets/jay-wheeler-afiche.webp`: afiche aportado, recortado para quitar la interfaz social y sus identificadores.

Las imágenes están optimizadas en WebP, conservan sus proporciones y no contienen metadatos personales. Al sustituirlas, actualiza `width`, `height` y `alt` en el HTML. Ajusta el mensaje «Este viernes» si compartes la página en otra fecha.

## GitHub Pages

1. Revisa el resultado y confirma que quieres compartir públicamente las fotos y que tienes permiso para usar el afiche.
2. Sube `index.html`, `styles.css`, `script.js` y `assets/` a la raíz del repositorio.
3. En GitHub, abre **Settings → Pages**, elige **Deploy from a branch**, tu rama principal y **/(root)**, y guarda.
4. Abre el enlace que proporciona GitHub. Las rutas relativas permiten alojar el sitio bajo el nombre del repositorio.

Esta entrega no publica ni sube archivos automáticamente. GitHub Pages y los archivos de un repositorio público son accesibles públicamente.

## Datos de compra

No se incluyeron capturas de Teleticket, recibos, números de orden, documentos ni información de pago. No añadas los originales al repositorio, aunque luego los borres: podrían permanecer en su historial. La tarjeta del concierto solo muestra los datos de la cita.

## Accesibilidad

Tarjetas nativas utilizables con teclado, foco visible, enlace para saltar al contenido, imágenes con dimensiones y textos alternativos, carga diferida y respeto a `prefers-reduced-motion`. Sin audio automático. Sin JavaScript se pueden leer las tarjetas, el mensaje final y los datos de la cita.
