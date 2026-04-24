# ARQUITECT Web Project - Deployment Guide
**Version:** 2.0.0  
**Last Updated:** April 24, 2026  
**Status:** Production Ready

---

## Quick Start Deployment

### Option 1: Vercel (Recommended for Ease)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Select project name
# - Set production directory to 'public'
# - Deploy
```

**Configuration:** `vercel.json` (create in root)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "public/index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/public/(.*)",
      "dest": "/public/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/public/index.html"
    }
  ]
}
```

### Option 2: Netlify (Recommended for Features)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and connect
netlify login
netlify init

# Deploy
netlify deploy --prod --dir=public
```

**Configuration:** `netlify.toml` (create in root)
```toml
[build]
  command = "echo 'Skipping build'"
  publish = "public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages
```bash
# Push to GitHub (already configured)
git push origin main

# Go to repository settings:
# Settings > Pages > Source > Deploy from branch
# Select: main branch / root directory
# Save
```

Site will be available at: `https://username.github.io/arquitect-website`

---

## Pre-Deployment Checklist

### Code Quality ✅
- [ ] All changes committed (`git status` shows clean)
- [ ] No console errors (`npm run validate`)
- [ ] No breaking console.log spam
- [ ] Images optimized (`npm run optimize-images`)

### Functionality ✅
- [ ] Hero carousel loads correctly
- [ ] All links functional
- [ ] WhatsApp button works (+506 71668641)
- [ ] Dark mode toggles properly
- [ ] Scroll animations smooth
- [ ] Responsive at 320px, 768px, 1024px

### Visual Review ✅
- [ ] Header displays correctly
- [ ] Colors render properly
- [ ] Typography readable
- [ ] No layout shifts
- [ ] Dark mode colors accurate
- [ ] Particles animate smoothly

### Performance ✅
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No layout thrashing detected

### Accessibility ✅
- [ ] Keyboard navigation works
- [ ] Color contrast adequate
- [ ] Alt text on images (if applicable)
- [ ] Focus states visible
- [ ] ARIA labels present

### SEO ✅
- [ ] Title tag: "ARQUITECT | Constructora"
- [ ] Meta description filled
- [ ] Open Graph tags present
- [ ] Favicon displaying
- [ ] robots.txt created (optional)

---

## Environment Variables

### GitHub Actions (Optional)

**File:** `.github/workflows/deploy.yml`
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Local Development

**File:** `.env.local` (not committed)
```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=ARQUITECT
VITE_WHATSAPP_NUMBER=50671668641
```

---

## Deployment by Platform

### Vercel Deployment

1. **Connect Repository**
   ```bash
   vercel link
   ```

2. **Configure**
   - Build Command: (empty - static site)
   - Output Directory: `public`
   - Install Command: `npm install`

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Custom Domain** (Settings > Domains)
   - Add your domain
   - Update DNS records
   - Wait for SSL certificate

### Netlify Deployment

1. **Connect GitHub**
   - Go to netlify.com
   - New site from Git
   - Select repository
   - Authorize

2. **Configure**
   - Build command: (leave empty)
   - Publish directory: `public`
   - Deploy

3. **Custom Domain**
   - Settings > Domain management
   - Add custom domain
   - Update DNS records

### Traditional Hosting (cPanel/FTP)

1. **Build Optimization**
   ```bash
   npm run build  # If using build script
   ```

2. **Upload Files**
   - Use FTP/SFTP client
   - Upload contents of `public/` folder
   - Upload `src/` folder alongside
   - Ensure relative paths work: `../src/...`

3. **Set Root Directory**
   - Configure web root to point to `public/`
   - Or upload all files to root

---

## Environment Setup

### Development

```bash
# Install dependencies (optional - CDN used)
npm install

# Start development server
npm run serve
# Access: http://localhost:8000
```

### Production Build

```bash
# Optimize images
npm run optimize-images

# Validate structure
npm run validate

# Generate sitemap (optional)
npm run generate-sitemap
```

---

## Post-Deployment Verification

### Manual Testing
```
□ Site loads (no 404 errors)
□ Dark mode toggle works
□ Carousel rotates images
□ Scroll animations trigger
□ WhatsApp button functional
□ All links clickable
□ Mobile responsive
□ Images display
□ Fonts load correctly
```

### Browser Testing
```
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Edge (latest)
□ Mobile browsers
```

### Performance Check
```bash
# Using Google Lighthouse
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Generate report"
# 4. Target: Performance > 90, Accessibility > 90
```

### SEO Verification
```bash
# Check sitemap (if created)
https://yoursite.com/sitemap.xml

# Check robots.txt
https://yoursite.com/robots.txt

# Submit to search engines:
# - Google Search Console
# - Bing Webmaster Tools
```

---

## SSL/TLS Certificate

### Vercel
- ✅ Automatic (included with deployment)

### Netlify
- ✅ Automatic (included with deployment)

### Traditional Hosting
- Use Let's Encrypt (free)
  ```bash
  certbot certonly --webroot -w /var/www/html -d yourdomain.com
  ```
- Or request from hosting provider
- Certificate file: `.pem` or `.crt`
- Key file: `.key` or `.pem`

---

## Domain Configuration

### DNS Records (Example: Vercel)

```
Type    Name           Value
A       @              76.76.19.89
CNAME   www            cname.vercel-dns.com
CNAME   _acme-challenge acme-challenge.vercel.app
```

### SSL Auto-Renewal
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ⚠️ Let's Encrypt: Set renewal cron job

---

## Monitoring & Analytics

### Google Analytics (Recommended)

1. **Setup**
   ```html
   <!-- Add to index.html <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

2. **Track Events**
   - WhatsApp clicks
   - Form submissions
   - Scroll depth

### Error Monitoring (Sentry - Optional)

```bash
npm install @sentry/browser
```

```javascript
// In main.js
import * as Sentry from "@sentry/browser";
Sentry.init({ dsn: "YOUR_DSN_HERE" });
```

### Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set alerts for performance drops

---

## Rollback Strategy

### If Deployment Fails

```bash
# Check previous versions
git log --oneline

# Revert to previous commit
git revert HEAD

# Re-deploy
git push origin main
```

### Emergency Rollback

1. **Vercel**
   ```bash
   vercel rollback
   ```

2. **Netlify**
   - Go to Deploys tab
   - Click "Restore" on previous build

3. **GitHub Pages**
   - Go to Actions
   - Re-run previous successful workflow

---

## Maintenance Tasks

### Weekly
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Test key functionality

### Monthly
- [ ] Review analytics
- [ ] Update content if needed
- [ ] Check for security updates
- [ ] Test backups

### Quarterly
- [ ] Full regression testing
- [ ] Performance optimization review
- [ ] SEO audit

---

## Troubleshooting

### Static Assets Not Loading

**Issue:** Images/CSS return 404

**Solution:**
```bash
# Verify file paths relative to public/
# For localhost:8000/
# - CSS: ../src/assets/css/...  ✅
# - JS: ../src/assets/js/...    ✅
# - Images: ../src/assets/images/...  ✅

# On production, adjust paths if needed
```

### Dark Mode Not Saving

**Issue:** Theme preference doesn't persist

**Solutions:**
1. Check browser allows localStorage
2. Check console for errors
3. Verify dark-mode.js is loading
4. Try clearing browser cache

### Carousel Not Working

**Issue:** Swiper carousel not initializing

**Solutions:**
1. Verify Swiper CDN is loading
2. Check HTML has `.hero-carousel` class
3. Inspect console for Swiper errors
4. Verify Swiper CSS is linked

### Animations Stuttering

**Issue:** Scroll animations or particles janky

**Solutions:**
1. Reduce particle count: Edit `particles.js`
2. Disable on mobile: Check screen size detection
3. Check for console performance warnings
4. Profile with DevTools (Performance tab)

---

## Performance Optimization

### Images

```bash
# Optimize all images
npm run optimize-images

# Or manually:
# Convert to WebP format
cwebp input.jpg -o output.webp

# Use responsive images
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="description">
</picture>
```

### CSS & JavaScript

```bash
# Minification (production)
cssnano input.css -o output.min.css
terser input.js -o output.min.js
```

### Caching

Set headers in deployment platform:

```
Cache-Control: public, max-age=31536000
```

For HTML:
```
Cache-Control: public, max-age=3600
```

---

## Security Checklist

- [ ] All assets served over HTTPS
- [ ] No hardcoded secrets in code
- [ ] No sensitive data in localStorage
- [ ] CORS headers configured (if needed)
- [ ] X-Frame-Options set (if applicable)
- [ ] X-Content-Type-Options: nosniff
- [ ] CSP headers configured

---

## Cost Estimation

| Platform | Free Tier | Pro |
|----------|-----------|-----|
| Vercel | ✅ Generous | $20/mo |
| Netlify | ✅ Generous | $19/mo |
| GitHub Pages | ✅ Free | N/A |
| Traditional | ~$5-10/mo | ~$10-30/mo |

---

## Support & Resources

### Official Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)

### Community Help
- Stack Overflow: Tag posts with platform name
- GitHub Issues: Report bugs
- Platform support: Contact support team

---

## Deployment Completed ✅

After following this guide, your ARQUITECT website will be:
- ✅ Live on the internet
- ✅ Protected with SSL/TLS
- ✅ Monitored with analytics
- ✅ Backed up automatically
- ✅ Ready for scaling

---

**Questions?** Check TECHNICAL-REVIEW.md for architectural details or PROJECT-STATUS.md for feature overview.

