# Seguridad

## Si Encontrs una Vulnerabilidad

No lo publiques en GitHub. Mandame email:

security@arquitect.example.com

Describe qué encontraste, cómo reproducirlo. Te respondo en 48 horas.

## Qué Est Protegido

- Sin inputs de usuario = sin XSS
- HTML esttico = sin inyección
- Sin backend = sin SQL injection

## Qué No Est Protegido (Porque No Hay)

- Base de datos (no la hay)
- API backend (no la hay)
- Autenticación (no la hay)

Si agregs cualquiera de eso, tenés que pensar en seguridad.

## Librerías Usadas

Todas vienen de CDN confiable y son mantenidas:
- Swiper
- AOS
- VanillaTilt
- Google Fonts

Ninguna tiene vulnerabilidades conocidas críticas.

## Las nicas Cosas Privadas

```
.env (si lo uss)
```

Nunca commitees `.env` con datos reales. Est en `.gitignore` así que Git te avisa si lo olvids.

## Resumen

Es HTML + CSS + JS. No hay mucho que hackear. Si tu servidor est bien configurado (HTTPS, headers de seguridad), ests seguro.

Si no sabés si tu servidor est bien, preguntale al soporte de hosting.
