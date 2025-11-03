# 🚩 CTF Challenge: Libro Digital

## Bienvenido al Desafío CTF (Capture The Flag)

Este libro digital esconde **10 banderas (flags)** que deberás encontrar usando tus habilidades de ciberseguridad. Cada bandera tiene el formato: `CTF{...}`

## 📋 Niveles de Dificultad

### Nivel Principiante (Easy) 🟢
- **FLAG 1**: Escondida en comentarios HTML
- **FLAG 2**: Visible en el código CSS
- **FLAG 4**: Mensaje en la consola del navegador

### Nivel Intermedio (Medium) 🟡
- **FLAG 3**: Codificada en Base64 en un atributo HTML
- **FLAG 6**: Ofuscación de JavaScript con arrays
- **FLAG 7**: Parámetro de URL secreto

### Nivel Avanzado (Hard) 🔴
- **FLAG 5**: Unicode encoding en CSS
- **FLAG 8**: Código Konami oculto
- **FLAG 9**: Challenge basado en tiempo (13:37)

### Nivel Maestro (Expert) ⚫
- **FLAG 10**: Flag maestro desbloqueado al encontrar todas las anteriores

## 🎯 Objetivos de Aprendizaje

Este CTF está diseñado para enseñar:
1. **Inspección de código fuente** - HTML, CSS, JavaScript
2. **Codificación/Decodificación** - Base64, ROT13, Unicode
3. **DevTools del navegador** - Console, Network, Elements
4. **JavaScript debugging** - Variables, funciones, eventos
5. **Técnicas de descubrimiento** - URL parameters, timing attacks
6. **Análisis de ofuscación** - Código JavaScript ofuscado

## 🔧 Herramientas Recomendadas

- **Navegador con DevTools** (Chrome, Firefox, Edge)
- **Editor de texto** (para analizar código fuente)
- **CyberChef** (https://gchq.github.io/CyberChef/) - Para decodificaciones
- **Base64 decoder/encoder**
- **ROT13 decoder**

## 📖 Cómo Empezar

1. Abre `libro/index.html` en tu navegador
2. Abre las DevTools (F12 o Ctrl+Shift+I)
3. Comienza a explorar:
   - **Sources tab**: Mira el código HTML, CSS y JS
   - **Console tab**: Busca mensajes ocultos
   - **Elements tab**: Inspecciona atributos y data-attributes
   - **Network tab**: Observa las peticiones

## 💡 Pistas Generales

<details>
<summary>Click para ver pistas (spoiler alert!)</summary>

1. **FLAG 1**: Los comentarios HTML son tus amigos
2. **FLAG 2**: Los archivos CSS pueden contener más que estilos
3. **FLAG 3**: ¿Qué es ese extraño atributo `data-secret`?
4. **FLAG 4**: La consola del navegador es muy conversadora
5. **FLAG 5**: ¿Qué significan esos números `\0046\004c...`?
6. **FLAG 6**: Mira la variable `FLAG6` en el JavaScript
7. **FLAG 7**: Prueba agregar `?unlock=true` a la URL
8. **FLAG 8**: ↑ ↑ ↓ ↓ ← → ← → B A
9. **FLAG 9**: ¿Qué hora es? 1337 o 13:37...
10. **FLAG 10**: Usa la función `validateAllFlags([])` con todas tus flags

</details>

## 🎮 Comandos Útiles en Console

Escribe estos comandos en la consola del navegador:

```javascript
// Ver todas las pistas
showHints()

// Validar tus flags encontrados
validateAllFlags(['CTF{flag1}', 'CTF{flag2}', ...])

// Ver el contenido de variables sospechosas
console.log(secretKey)
console.log(FLAG6)
```

## 🏆 Sistema de Puntuación

- Flags 1-3 (Easy): 10 puntos cada uno = 30 puntos
- Flags 4-7 (Medium): 20 puntos cada uno = 80 puntos
- Flags 8-9 (Hard): 30 puntos cada uno = 60 puntos
- Flag 10 (Master): 100 puntos

**Total posible: 270 puntos**

### Rangos:
- 0-90 puntos: Novato 🌱
- 100-180 puntos: Hacker Junior 💻
- 190-260 puntos: Experto en Seguridad 🛡️
- 270 puntos: Maestro CTF 👑

## 📚 Recursos de Aprendizaje

### Sitios para practicar CTF:
- [CTFtime.org](https://ctftime.org/) - Calendario de CTFs
- [HackTheBox](https://www.hackthebox.com/)
- [TryHackMe](https://tryhackme.com/)
- [PicoCTF](https://picoctf.org/)
- [OverTheWire](https://overthewire.org/)

### Guías y tutoriales:
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

## 🎓 Soluciones

<details>
<summary>⚠️ SPOILER ALERT - Soluciones completas ⚠️</summary>

### FLAG 1: CTF{w3lc0me_t0_th3_hunt}
**Ubicación**: Comentario HTML en `<head>`
**Técnica**: View source o DevTools Elements

### FLAG 2: CTF{css_1s_n0t_just_f0r_styl1ng}
**Ubicación**: Comentario en `style.css`
**Técnica**: Inspeccionar archivo CSS

### FLAG 3: CTF{l0ok1ng_d33p3r_n0w}
**Ubicación**: Atributo `data-secret` en `.book-container` (Base64)
**Técnica**: Inspeccionar elemento y decodificar Base64
**Decodificación**: `RkxBRzM6IENSV0Z7bDBvazFuZ19kMzNwM3JfbjB3fQ==` → `FLAG3: CTF{l0ok1ng_d33p3r_n0w}`

### FLAG 4: CTF{c0ns0l3_l0gg1ng_s3cr3ts}
**Ubicación**: Console.log en script.js
**Técnica**: Abrir Console (F12)

### FLAG 5: CTF{un1c0d3_m4st3r}
**Ubicación**: CSS pseudo-elemento `.ctf-hidden::before` (Unicode escape)
**Técnica**: Decodificar secuencias Unicode `\0046\004c\0041...`

### FLAG 6: CTF{j4v4scr1pt_0bfusc4t10n}
**Ubicación**: Variable `FLAG6` en script.js (array ofuscado)
**Técnica**: Ejecutar `console.log(FLAG6)` o concatenar manualmente

### FLAG 7: CTF{url_p4r4m3t3rs_unl0ck3d}
**Ubicación**: Condicional en script.js
**Técnica**: Agregar `?unlock=true` a la URL

### FLAG 8: CTF{k0n4m1_c0d3_m4st3r}
**Ubicación**: Event listener para Konami Code
**Técnica**: Presionar: ↑ ↑ ↓ ↓ ← → ← → B A

### FLAG 9: CTF{l33t_t1m3_h4ck3r}
**Ubicación**: Función `checkLeetTime()` que ejecuta a las 13:37
**Técnica**: Cambiar hora del sistema o esperar a las 13:37, o modificar el código

### FLAG 10: CTF{gr4nd_m4st3r_cyb3r_h4ck3r_2024}
**Ubicación**: Función `validateAllFlags()`
**Técnica**: Llamar función con array de todos los flags anteriores
```javascript
validateAllFlags([
    'CTF{w3lc0me_t0_th3_hunt}',
    'CTF{css_1s_n0t_just_f0r_styl1ng}',
    'CTF{l0ok1ng_d33p3r_n0w}',
    'CTF{c0ns0l3_l0gg1ng_s3cr3ts}',
    'CTF{un1c0d3_m4st3r}',
    'CTF{j4v4scr1pt_0bfusc4t10n}',
    'CTF{url_p4r4m3t3rs_unl0ck3d}',
    'CTF{k0n4m1_c0d3_m4st3r}',
    'CTF{l33t_t1m3_h4ck3r}'
])
```

</details>

## 🤝 Contribuciones

¿Encontraste una forma alternativa de resolver un desafío? ¿Tienes ideas para nuevos challenges? ¡Las contribuciones son bienvenidas!

## 📜 Licencia

Este CTF es solo para propósitos educativos. No uses estas técnicas en sistemas sin autorización.

## 🎉 ¡Buena Suerte!

Recuerda: La persistencia y la curiosidad son tus mejores aliados. No te rindas si no encuentras todas las flags inmediatamente. ¡La práctica hace al maestro!

---
**Creado con ❤️ para la comunidad de ciberseguridad**
