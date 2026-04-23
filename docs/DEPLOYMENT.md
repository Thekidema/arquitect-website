# Deployment Guide - ARQUITECT Web

## 🚀 Opciones de Hosting

### 1. **Netlify** (Recomendado)

**Ventajas:**
- Deploy automático desde Git
- HTTPS gratis
- Formularios sin backend
- Edge functions (CDN)
- Generador de sitemap automático

**Pasos:**

1. Crea cuenta en [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Conecta tu repositorio GitHub
4. Configura:
   - **Build command:** (dejar vacío, es sitio estático)
   - **Publish directory:** `public`
5. Click "Deploy site"

**netlify.toml (opcional):**
```toml
[build]
  command = "npm run build"
  publish = "public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
```

**Dominio:**
- Gratuito: `nombreproyecto.netlify.app`
- Custom: Configura DNS en tu registrador

### 2. **Vercel**

**Ventajas:**
- Muy rápido (Edge network)
- Deploy automático
- Analytics de performance
- Préview de cambios

**Pasos:**

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Selecciona tu repositorio GitHub
4. Vercel auto-detecta que es sitio estático
5. Click "Deploy"

**vercel.json (opcional):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "headers": [
    {
      "source": "/:path(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. **GitHub Pages**

**Ventajas:**
- Gratis
- Integrado con GitHub
- Simple para proyectos estáticos

**Pasos:**

1. Sube código a repositorio público en GitHub
2. Crea rama `gh-pages`
3. En Settings → Pages:
   - Source: `gh-pages` branch
   - Publish directory: `/ (root)`
4. GitHub auto-deploy

**Limitaciones:**
- URL: `usuario.github.io/nombre-repo`
- Actualizaciones más lentas

### 4. **AWS S3 + CloudFront**

**Ventajas:**
- Escalable empresarial
- Muy barato (~$0.15/mes)
- Control total

**Pasos:**

1. Crea bucket S3
2. Sube carpeta `public/` a bucket
3. Configura como "website hosting"
4. Crea CloudFront distribution para CDN
5. Apunta dominio a CloudFront

**Costo estimado:** $0.10-0.50/mes

### 5. **Shared Hosting Tradicional** (cPanel, Plesk)

**Si tienes servidor con hosting compartido:**

1. FTP/SFTP a servidor
2. Sube contenido de `public/` a `public_html/`
3. Configura `index.html` como default document
4. Activa HTTPS (Let's Encrypt)

---

## 🔐 Pre-Deployment Checklist

### Contenido
- [ ] Todos los textos personalizados (no "REEMPLAZAR")
- [ ] Imágenes reales subidas a `src/assets/images/`
- [ ] Colores actualizados en `config/colors.json`
- [ ] Información de contacto correcta
- [ ] Links funcionando (sin placeholders)
- [ ] WhatsApp número correcto

### Técnico
- [ ] Sin errores en console (F12)
- [ ] Lighthouse score > 90
- [ ] Testeado en móvil + tablet + desktop
- [ ] Testeado en Chrome, Firefox, Safari, Edge
- [ ] Imágenes optimizadas
- [ ] Favicon personalizado
- [ ] Robots.txt y sitemap.xml generados

### SEO
- [ ] Meta title personalizado
- [ ] Meta description (160 caracteres)
- [ ] Open Graph image (og:image)
- [ ] Structured data (schema.org)
- [ ] Google Analytics configurado

### Seguridad
- [ ] HTTPS activado
- [ ] Headers de seguridad configurados
- [ ] No hay API keys en código
- [ ] No hay datos sensibles en frontend

---

## 📋 Pasos por Hosting

### A. Netlify (Recomendado)

```bash
# 1. Localmente, hacer commit
git add .
git commit -m "Ready for production"
git push origin main

# 2. En Netlify.com:
# - Click "New site from Git"
# - Selecciona repo
# - Build command: (dejar vacío)
# - Publish directory: public
# - Deploy

# 3. Configurar dominio:
# - En Netlify: Domain settings
# - Apunta DNS a Netlify nameservers
# - O usar CNAME pointing
```

### B. Vercel

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod

# 3. Sigue prompts
# - Project name
# - Build command (dejar vacío)
# - Output directory: public
```

### C. GitHub Pages

```bash
# 1. Crear rama gh-pages
git checkout --orphan gh-pages

# 2. Sube contenido public/
cp -r public/* .
git add .
git commit -m "Deploy to GitHub Pages"

# 3. Push a gh-pages
git push origin gh-pages

# 4. En GitHub Settings → Pages
# - Source: gh-pages branch
```

### D. AWS S3

```bash
# 1. Instala AWS CLI
pip install awscli

# 2. Configura credenciales
aws configure

# 3. Sube contenido
aws s3 sync public/ s3://tu-bucket-name --delete

# 4. CloudFront invalidation
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

---

## 🌍 Configurar Dominio

### Opción 1: Registrador + Hosting

**Ejemplo con GoDaddy:**

1. Compra dominio en GoDaddy
2. Deploy en Netlify
3. En GoDaddy DNS:
   - **CNAME:** `www` → `tu-site.netlify.app`
   - **A Record:** `@` → IP de Netlify (obtén de Netlify)

### Opción 2: Registrador + AWS S3 + Route53

1. Compra dominio en Route53
2. Configura record A → CloudFront distribution
3. Auto-sincronizado

### Opción 3: Dominio Gratuito

- `.tk`, `.ml`, `.ga` en Freenom
- Gratis durante 1 año
- Auto-renew

---

## 🔒 Seguridad Post-Deployment

### HTTPS

**Netlify, Vercel, GitHub Pages:** Automático ✅

**Shared Hosting:**
```apache
# En .htaccess - Redirect HTTP a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Headers de Seguridad

**En netlify.toml:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "no-referrer-when-downgrade"
```

**En .htaccess:**
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
```

### Robots.txt y Sitemap

```
# public/robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://tu-dominio.com/sitemap.xml
```

Generar sitemap:
```bash
npm run generate-sitemap
```

---

## 📊 Monitoreo Post-Deployment

### Google Analytics

```html
<!-- En head de index.html -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXXXXXX');
</script>
```

Métricas a monitorear:
- Traffic por fuente (organic, direct, referral)
- Device breakdown (mobile, tablet, desktop)
- User flow (qué secciones visitan)
- Bounce rate

### Search Console (Google)

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega propiedad
3. Verifica ownership (DNS record)
4. Sube sitemap.xml
5. Monitorea: indexación, errores, keywords

### Uptime Monitoring

**Gratuito:**
- [UptimeRobot](https://uptimerobot.com) — Alerta si sitio cae
- [Statping](https://statping.io) — Auto-hosted monitoring

**Pagado:**
- DataDog
- New Relic

---

## 🔄 Ciclo de Actualizaciones

### Flujo Recomendado

```
1. Cambios locales en rama develop
   ├─ Edita archivos
   ├─ Testa en navegador
   └─ git commit

2. Pull Request a main
   ├─ Code review (si hay equipo)
   ├─ Approvals
   └─ git merge

3. Auto-deployment
   ├─ Netlify/Vercel detectan cambios
   ├─ Publican automáticamente
   └─ Preview URL disponible

4. Monitoreo
   ├─ Google Analytics
   ├─ Lighthouse (cada 7 días)
   └─ Manual testing
```

### CI/CD (para futuro)

Si escalas a equipo:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate HTML
        run: npm run validate
      - name: Optimize images
        run: npm run optimize-images
      - name: Deploy to Netlify
        run: npm run deploy
```

---

## 🆘 Troubleshooting

### Sitio muestra 404

**Solución:** Verifica que `public/` sea el publish directory, no raíz.

### Imágenes no cargan en producción

**Solución:** Rutas relativas desde `public/index.html`. Ejemplo:
```html
<!-- ✅ Correcto -->
<img src="src/assets/images/hero/hero-1.jpg">

<!-- ❌ Incorrecto -->
<img src="assets/images/hero/hero-1.jpg">
```

### Estilos CSS no aplican

**Solución:** Verifica rutas en `index.html`:
```html
<!-- ✅ Correcto (relativo) -->
<link rel="stylesheet" href="src/assets/css/variables.css">

<!-- ❌ Incorrecto (absoluto) -->
<link rel="stylesheet" href="/assets/css/variables.css">
```

### WhatsApp no funciona en producción

**Solución:** Verifica número y format en `whatsapp-integration.js`:
```javascript
const WHATSAPP_NUMBER = '50671668641';  // Sin +, sin espacios
```

---

## 💰 Costos Estimados (Mensual)

| Hosting | Costo | Features |
|---------|-------|----------|
| Netlify Free | $0 | Suficiente para este proyecto |
| Vercel Free | $0 | Suficiente para este proyecto |
| GitHub Pages | $0 | Suficiente para este proyecto |
| AWS S3 | $0.15 | + $0.15 por CloudFront |
| Shared hosting | $5-15 | Con dominio incluido |
| Dominio | $1-12/año | Depende de registrador |
| **TOTAL** | **$0-15** | *Varía mucho* |

**Recomendación:** Netlify Free + Dominio ($10/año)

---

## 📚 Documentación Relacionada

- [README.md](../README.md) — Descripción general
- [CUSTOMIZATION.md](CUSTOMIZATION.md) — Personalizar antes de deploy
- [PERFORMANCE.md](PERFORMANCE.md) — Tips de optimization
- [SECURITY.md](../SECURITY.md) — Política de seguridad

---

**Última actualización:** 2026-04-23
