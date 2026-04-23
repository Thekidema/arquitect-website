# Política de Seguridad - ARQUITECT Web

## 🔒 Reporte de Vulnerabilidades

Si descubres vulnerabilidad de seguridad, **NO la publiques públicamente**.

**Contacta privadamente:**
- Email: security@arquitect.example.com
- GPG Key: [Ver archivo .gpg]

**Por favor incluye:**
- Descripción de la vulnerabilidad
- Pasos para reproducir
- Impacto potencial
- Posible fix (si tienes)

**Timeline esperado:**
- Confirmación: 24-48 horas
- Fix: 7-30 días (según severidad)
- Disclosure público: Después de fix incluido

---

## 🛡️ Prácticas de Seguridad

### 1. Dependencias

#### Verificadas
- ✅ Swiper v11 — Maintained por Nolimits4web
- ✅ AOS v2.3.1 — Maintained, audited
- ✅ VanillaTilt v1.8.1 — Simple, no vulnerabilidades conocidas
- ✅ Google Fonts — CDN de confianza de Google

#### Checklist
```bash
# Buscar vulnerabilidades conocidas
npm audit

# Ver detalles
npm audit --json

# Aplicar fixes automáticos
npm audit fix

# Solo reportar, no fix
npm audit --audit-level=moderate
```

### 2. HTML & Input

**Protecciones Implementadas:**
- ✅ HTML estático (sin entrada de usuario)
- ✅ Sin eval() o new Function()
- ✅ Sin innerHTML con datos dinámicos
- ✅ Template literals sanitizados

**Si Escalas y Agregas Input:**

```javascript
// ❌ MAL - XSS vulnerability
element.innerHTML = userInput;

// ✅ BUENO - Text content (no HTML)
element.textContent = userInput;

// ✅ BUENO - Sanitized HTML
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```

### 3. URLs y Redirects

**Protecciones:**
- ✅ URLs validadas antes de usar
- ✅ Sin open redirects
- ✅ Whitelist de dominios permitidos

**Si Agregas Links Dinámicos:**

```javascript
// ❌ MAL - Open redirect
window.location.href = userInput;

// ✅ BUENO - URL validada
function safeRedirect(url) {
  try {
    const parsed = new URL(url);
    const whitelist = ['https://arquitect.com', 'https://wa.me'];
    if (whitelist.some(d => parsed.origin.includes(d))) {
      window.location.href = url;
    } else {
      console.warn('URL no permitida');
    }
  } catch (e) {
    console.error('URL inválida');
  }
}
```

### 4. API & Backend (Futuro)

Si escalas con API backend:

**HTTPS:**
```javascript
// ❌ MAL - HTTP
const response = await fetch('http://api.example.com/data');

// ✅ BUENO - HTTPS
const response = await fetch('https://api.example.com/data');
```

**CORS:**
```javascript
// ✅ Configurar en servidor
// Solo aceptar requests de tu dominio
Access-Control-Allow-Origin: https://arquitect.com
```

**Token Storage:**
```javascript
// ❌ MAL - Guardado en localStorage (XSS accessible)
localStorage.setItem('token', apiToken);

// ✅ BUENO - HttpOnly cookie (no JS accessible)
// Configurado en servidor
Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
```

**Input Validation:**
```javascript
// ✅ BUENO - Validar entrada
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ✅ BUENO - Type checking
const email = String(input).trim().toLowerCase();
if (email.length > 255) throw new Error('Email demasiado largo');
```

### 5. Secrets Management

**Protecciones Implementadas:**
- ✅ API keys NO hardcodeadas
- ✅ Archivo `.env` en `.gitignore`
- ✅ Variables ejemplo en `.env.example`

**Checklist:**

```bash
# 1. Nunca commit .env real
echo ".env" >> .gitignore

# 2. Template de ejemplo
cp .env .env.example
git add .env.example
git commit -m "Add environment variables template"

# 3. En deployment, agregar variables en plataforma
# Netlify → Site Settings → Build & Deploy → Environment
# Vercel → Settings → Environment Variables
# AWS → Secrets Manager
```

### 6. Content Security Policy

**Si Agregas Scripts de Terceros:**

```html
<!-- Habilitar CSP -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' https://cdn.jsdelivr.net; 
               style-src 'self' https://fonts.googleapis.com; 
               img-src 'self' data: https:; 
               font-src 'self' https://fonts.gstatic.com;">
```

**Niveles:**
- **'self'** — Solo desde mismo origen
- **'https:'** — Cualquier HTTPS
- **'unsafe-inline'** — ❌ Evitar (permite XSS)

### 7. Rate Limiting (API Futuro)

Si tienes formulario/API:

```javascript
// ❌ MAL - Sin límite
app.post('/submit', (req, res) => {
  // ... procesar
});

// ✅ BUENO - Rate limit
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutos
  max: 100                     // 100 requests por IP
});

app.post('/submit', limiter, (req, res) => {
  // ... procesar
});
```

---

## 📋 Checklist de Seguridad

### Pre-Launch

- [ ] Sin `console.log` de datos sensibles
- [ ] Sin API keys en código
- [ ] Archivo `.env` no commiteado
- [ ] HTTPS activado en servidor
- [ ] Headers de seguridad configurados
- [ ] No hay archivos sensibles commitados
- [ ] Dependencias auditadas (`npm audit`)
- [ ] No hay vulnerabilidades críticas

### Monitoreo Regular

- [ ] Auditar dependencias 1x/mes (`npm audit`)
- [ ] Revisar logs de servidor
- [ ] Monitorear alertas de seguridad
- [ ] Actualizar dependencias cuando hay security patches
- [ ] Tester penetration test anualmente

### Deployment

- [ ] `.htaccess` con security headers (Apache)
- [ ] `nginx.conf` con security headers (Nginx)
- [ ] Certificado SSL/TLS válido
- [ ] Firewall configurado
- [ ] WAF (Web Application Firewall) si aplica
- [ ] Backup automatizados

---

## 🔍 Herramientas de Testing

### SonarQube
```bash
npm install -D sonarqube-scanner
sonar-scanner
```

### OWASP ZAP
- Herramienta gratuita para penetration testing
- [zaproxy.org](https://zaproxy.org)

### npm audit
```bash
npm audit
npm audit fix
npm audit --audit-level=moderate
```

### Snyk
```bash
npm install -g snyk
snyk auth
snyk test
```

---

## 📚 Referencias

### Estándares
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-comprehensive-guide/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

### Librerías
- [DOMPurify](https://github.com/cure53/DOMPurify) — Sanitizar HTML
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) — Rate limiting
- [helmet](https://helmetjs.github.io/) — Security headers (Express)

### Headers HTTP
- [Strict-Transport-Security](https://owasp.org/www-project-secure-headers/)
- [X-Content-Type-Options](https://owasp.org/www-project-secure-headers/)
- [X-Frame-Options](https://owasp.org/www-project-secure-headers/)
- [Content-Security-Policy](https://owasp.org/www-project-secure-headers/)

---

## 🎓 Aprendizaje Continuo

- [OWASP Learning Materials](https://owasp.org/www-project-juice-shop/)
- [HackTheBox](https://www.hackthebox.com/) — Práctica hands-on
- [PortSwigger WebSecurity Academy](https://portswigger.net/web-security) — Gratis

---

## 📞 Contacto

- **Reportar vulnerabilidad:** security@arquitect.example.com
- **Preguntas de seguridad:** dev@arquitect.example.com
- **Urgencias:** +506 71668641 (WhatsApp)

---

**Última actualización:** 2026-04-23  
**Próxima revisión:** 2026-07-23
