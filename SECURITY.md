# Seguridad

## Si Encontrás una Vulnerabilidad

No lo publiques en GitHub. Mandame email:

security@arquitect.example.com

Describe qué encontraste, cómo reproducirlo. Te respondo en 48 horas.

## Qué Está Protegido

- Sin inputs de usuario = sin XSS
- HTML estático = sin inyección
- Sin backend = sin SQL injection

## Qué No Está Protegido (Porque No Hay)

- Base de datos (no la hay)
- API backend (no la hay)
- Autenticación (no la hay)

Si agregás cualquiera de eso, tenés que pensar en seguridad.

## Librerías Usadas

Todas vienen de CDN confiable y son mantenidas:
- Swiper
- AOS
- VanillaTilt
- Google Fonts

Ninguna tiene vulnerabilidades conocidas críticas.

## Las Únicas Cosas Privadas

```
.env (si lo usás)
```

Nunca commitees `.env` con datos reales. Está en `.gitignore` así que Git te avisa si lo olvidás.

## Resumen

Es HTML + CSS + JS. No hay mucho que hackear. Si tu servidor está bien configurado (HTTPS, headers de seguridad), estás seguro.

Si no sabés si tu servidor está bien, preguntale al soporte de hosting.
