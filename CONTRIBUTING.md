# CÃÂ³mo Contribuir

Si encontrÃs un bug o tenÃÂ©s una idea, acÃ estÃ cÃÂ³mo hacer.

## Reportar un Bug

1. Abre un issue en GitHub
2. Describe quÃÂ© pasÃÂ³, quÃÂ© esperabas que pase
3. Si podÃÂ©s, incluÃÂ­ screenshots

Ejemplo:
```
TÃÂ­tulo: El carrusel se queda en blanco en Safari

Pasos:
1. Abro el sitio en Safari
2. Espero 10 segundos
3. El carrusel deja de mostrar imÃgenes

Esperado: El carrusel sigue funcionando
Actual: Solo se ve blanco

Browser: Safari 17 en Mac
```

## Sugerir una Mejora

Abre una discussion o issue con tu idea. No hay "idea mala", solo ideas que no priorizamos.

## Mandar CÃÂ³digo

1. Fork el repo
2. Crea una rama: `git checkout -b mi-feature`
3. Haz cambios (mantenÃÂ© commits pequeÃos y descriptivos)
4. Push y abre un PR

Eso es.

## EstÃndares BÃsicos

- HTML semÃntico (usa `<section>`, `<article>`, no `<div>` anidados)
- CSS en BEM naming (`.component__element`)
- JS vanilla, sin librerÃÂ­as innecesarias
- Comentarios solo si el cÃÂ³digo no es obvio

## Commit Messages

```
feat: agregar secciÃÂ³n de testimonios
fix: corregir carrusel en Safari
docs: actualizar CUSTOMIZATION.md
```

No necesita ser complicado.

## Testear Localmente

```bash
npm run serve
# Abre http://localhost:8000/public/
```

Verifica en mÃÂ³vil, tablet, desktop. Si se ve bien, estÃ bien.

## Si Tarda en Mergear

Es porque estoy ocupado o revisar. Paciencia.
