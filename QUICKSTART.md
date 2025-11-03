# CTF Challenge - Quick Start Guide

## 🚀 Quick Start

1. **Open the book**: Navigate to `libro/index.html` in your browser
2. **Open DevTools**: Press F12 or Right-click → Inspect
3. **Start hunting**: Look for 10 hidden flags in format `CTF{...}`
4. **Validate**: Use `ctf-validator.html` to check your flags and see your score!

## 🎯 Flag Locations Summary

| Flag | Difficulty | Location | Points |
|------|-----------|----------|---------|
| FLAG 1 | Easy | HTML comment in `<head>` | 10 |
| FLAG 2 | Easy | CSS comment in `style.css` | 10 |
| FLAG 3 | Easy | Base64 in `data-secret` attribute | 10 |
| FLAG 4 | Medium | Console log message | 20 |
| FLAG 5 | Medium | Unicode in CSS pseudo-element | 20 |
| FLAG 6 | Medium | Obfuscated JS array | 20 |
| FLAG 7 | Medium | URL parameter `?unlock=true` | 20 |
| FLAG 8 | Hard | Konami Code (↑↑↓↓←→←→BA) | 30 |
| FLAG 9 | Hard | Time-based (13:37) | 30 |
| FLAG 10 | Expert | Master flag from validation | 100 |

**Total Points**: 270

## 🏆 Ranking System

- 🌱 **Novato** (0-90 pts): Just getting started
- 💻 **Hacker Junior** (100-180 pts): Making progress!
- 🛡️ **Experto en Seguridad** (190-260 pts): Almost there!
- 👑 **Maestro CTF** (270 pts): Perfect score!

## 💡 First Steps

### Absolute Beginners:
1. Right-click on the page → "View Page Source"
2. Look for comments in the HTML (marked with `<!-- -->`)
3. Open Console tab in DevTools
4. Start with these easy wins: FLAG 1, 2, 4

### Intermediate:
1. Check the Network tab for loaded resources
2. Inspect the CSS file
3. Look at data attributes in HTML elements
4. Examine JavaScript variables

### Advanced:
1. Decode Base64 strings
2. Apply ROT13 cipher
3. Decode Unicode escape sequences
4. Try the Konami Code
5. Change system time or modify code for time-based flag

## 🔧 Tools Needed

- **Web Browser** with DevTools (Chrome, Firefox, Edge)
- **Optional**: [CyberChef](https://gchq.github.io/CyberChef/) for decoding

## 📚 Learning Resources

- Read `CTF_README.md` for detailed walkthrough
- Type `showHints()` in the browser console for help
- Use the validator at `ctf-validator.html` to track progress

## ⚠️ Ethical Note

This is an educational challenge. Always practice ethical hacking:
- Only test on systems you own or have permission to test
- Never use these techniques maliciously
- Respect privacy and data

## 🎮 Have Fun!

Remember: CTFs are about learning and having fun. Don't get frustrated if you can't find all flags immediately. Take breaks, research, and enjoy the journey!

**Pro Tip**: The console is your best friend. Keep it open while exploring!

---
¡Buena suerte, hacker! 🚩
