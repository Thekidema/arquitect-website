# C√≥mo Poner en Producci√≥n

## Las Opciones

### Opci√≥n 1: Netlify (Recomendado si usas Git)

1. Ve a netlify.com y crea cuenta
2. Click "New site from Git"
3. Conecta tu repositorio GitHub
4. En build settings:
   - Build command: (dejar vac√≠o)
   - Publish directory: `public`
5. Click "Deploy"

Listo. Cada vez que haces push a main, se publica autom√ticamente.

Dominio: `tu-sitio.netlify.app` (gratis) o usa el tuyo si tienes.

### Opci√≥n 2: Vercel

Similar a Netlify:

1. vercel.com
2. "Import Project" desde GitHub
3. Click deploy

Vercel es muy r√pido porque usa edge functions. Si quieres lo mejor de lo mejor, va Vercel.

### Opci√≥n 3: GitHub Pages (M√s Lento)

1. Crea una rama `gh-pages`
2. Sube el contenido de `public/`
3. En settings  Pages  Source: gh-pages

Tu sitio estar√ en `usuario.github.io/arquitect-website`.

**Desventaja**: Actualizaciones son m√s lentas, no hay SSL gratis en dominio custom.

### Opci√≥n 4: Tu Propio Servidor

Si tienes un VPS o hosting compartido:

1. FTP a servidor
2. Sube todo de `public/` a `public_html/`
3. Activa HTTPS (Let's Encrypt es gratis)
4. Listo

**Ventaja**: Control total. **Desventaja**: Tienes que mantenerlo.

## Antes de Publicar

- [ ] Todos los textos cambiados (sin "REEMPLAZAR")
- [ ] Im√genes reales (no SVG de placeholder)
- [ ] Colores actualizados (config/colors.json)
- [ ] WhatsApp n√∫mero correcto
- [ ] Testeado en m√≥vil + desktop
- [ ] Sin errores en consola (F12)

## Con Netlify (Lo M√s F√cil)

```bash
# 1. Aseg√∫rate de que todo est√© en Git
git add .
git commit -m "Cambios finales antes de publicar"
git push

# 2. En Netlify, conecta tu repo y listo
```

Netlify autom√ticamente detecta que es `public/` el entry point si tienes esa carpeta.

## Con Tu Propio Servidor

Necesitas:
1. Dominio (godaddy, namecheap, lo que sea)
2. Hosting (cualquiera con FTP/SFTP)
3. HTTPS (Let's Encrypt, es gratis si el hosting lo permite)

Pasos:
1. Conecta v√≠a FTP a tu servidor
2. Navega a `public_html` o similar
3. Sube todo de `public/` ah√≠
4. En la configuraci√≥n del hosting, aseg√∫rate que `index.html` es el archivo por defecto
5. Configura HTTPS (o pide al soporte)

## Monitoreo Post-Publicaci√≥n

### Google Analytics

Agregar en `public/index.html` en el `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXXXXXX');
</script>
```

Reemplaza `GA-XXXXXXXXX` con tu ID de Analytics.

### Google Search Console

1. Ve a search.google.com/search-console
2. Agrega tu dominio
3. Sube el `sitemap.xml` (generado con `npm run generate-sitemap`)
4. Verifica ownership

### UptimeRobot (Opcional)

Si quieres saber si el sitio cae:

1. Ve a uptimerobot.com
2. Crea una alerta para tu URL
3. Te avisa por email si algo falla

## Costos

- **Netlify Free**: $0
- **Vercel Free**: $0
- **GitHub Pages**: $0
- **Hosting compartido**: $5-15/mes
- **Dominio**: $10-15/a√o

Total: Puedes hacer esto completamente gratis.

## Cosas a No Olvidar

1. **HTTPS siempre**. Sin excusas. Netlify y Vercel lo hacen autom√tico.
2. **Backup del c√≥digo**. Git es tu backup. Siempre.
3. **SSL certificate**: Let's Encrypt es gratis. √salo.
4. **Robots.txt y Sitemap**: Para que Google te encuentre.

## Si Algo Explota en Producci√≥n

1. Revisa los logs (Netlify/Vercel los muestran)
2. Mira la consola del navegador (F12)
3. Si es un bug, arr√©glalo en local, commit, push
4. Se publica autom√ticamente en unos segundos

Simple.
