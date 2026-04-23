# Seguridad

## Si EncontrÃs una Vulnerabilidad

No lo publiques en GitHub. Mandame email:

security@arquitect.example.com

Describe quÃ© encontraste, cÃ³mo reproducirlo. Te respondo en 48 horas.

## QuÃ© EstÃ Protegido

- Sin inputs de usuario = sin XSS
- HTML estÃtico = sin inyecciÃ³n
- Sin backend = sin SQL injection

## QuÃ© No EstÃ Protegido (Porque No Hay)

- Base de datos (no la hay)
- API backend (no la hay)
- AutenticaciÃ³n (no la hay)

Si agregÃs cualquiera de eso, tenÃ©s que pensar en seguridad.

## LibrerÃ­as Usadas

Todas vienen de CDN confiable y son mantenidas:
- Swiper
- AOS
- VanillaTilt
- Google Fonts

Ninguna tiene vulnerabilidades conocidas crÃ­ticas.

## Las Ãnicas Cosas Privadas

```
.env (si lo usÃs)
```

Nunca commitees `.env` con datos reales. EstÃ en `.gitignore` asÃ­ que Git te avisa si lo olvidÃs.

## Resumen

Es HTML + CSS + JS. No hay mucho que hackear. Si tu servidor estÃ bien configurado (HTTPS, headers de seguridad), estÃs seguro.

Si no sabÃ©s si tu servidor estÃ bien, preguntale al soporte de hosting.
