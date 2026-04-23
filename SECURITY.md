# Seguridad

## Si Encontr√s una Vulnerabilidad

No lo publiques en GitHub. Mandame email:

security@arquitect.example.com

Describe qu√© encontraste, c√≥mo reproducirlo. Te respondo en 48 horas.

## Qu√© Est√ Protegido

- Sin inputs de usuario = sin XSS
- HTML est√tico = sin inyecci√≥n
- Sin backend = sin SQL injection

## Qu√© No Est√ Protegido (Porque No Hay)

- Base de datos (no la hay)
- API backend (no la hay)
- Autenticaci√≥n (no la hay)

Si agreg√s cualquiera de eso, ten√©s que pensar en seguridad.

## Librer√≠as Usadas

Todas vienen de CDN confiable y son mantenidas:
- Swiper
- AOS
- VanillaTilt
- Google Fonts

Ninguna tiene vulnerabilidades conocidas cr√≠ticas.

## Las √nicas Cosas Privadas

```
.env (si lo us√s)
```

Nunca commitees `.env` con datos reales. Est√ en `.gitignore` as√≠ que Git te avisa si lo olvid√s.

## Resumen

Es HTML + CSS + JS. No hay mucho que hackear. Si tu servidor est√ bien configurado (HTTPS, headers de seguridad), est√s seguro.

Si no sab√©s si tu servidor est√ bien, preguntale al soporte de hosting.
