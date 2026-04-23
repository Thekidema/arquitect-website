# CÃ³mo Contribuir

Si encontrÃs un bug o tenÃ©s una idea, acÃ estÃ cÃ³mo hacer.

## Reportar un Bug

1. Abre un issue en GitHub
2. Describe quÃ© pasÃ³, quÃ© esperabas que pase
3. Si podÃ©s, incluÃ­ screenshots

Ejemplo:
```
TÃ­tulo: El carrusel se queda en blanco en Safari

Pasos:
1. Abro el sitio en Safari
2. Espero 10 segundos
3. El carrusel deja de mostrar imÃgenes

Esperado: El carrusel sigue funcionando
Actual: Solo se ve blanco

Browser: Safari 17 en Mac
```

## Sugerir una Mejora

Abre una discussion o issue con tu idea. No hay "idea mala", solo ideas que no priorizamos.

## Mandar CÃ³digo

1. Fork el repo
2. Crea una rama: `git checkout -b mi-feature`
3. Haz cambios (mantenÃ© commits pequeÃos y descriptivos)
4. Push y abre un PR

Eso es.

## EstÃndares BÃsicos

- HTML semÃntico (usa `<section>`, `<article>`, no `<div>` anidados)
- CSS en BEM naming (`.component__element`)
- JS vanilla, sin librerÃ­as innecesarias
- Comentarios solo si el cÃ³digo no es obvio

## Commit Messages

```
feat: agregar secciÃ³n de testimonios
fix: corregir carrusel en Safari
docs: actualizar CUSTOMIZATION.md
```

No necesita ser complicado.

## Testear Localmente

```bash
npm run serve
# Abre http://localhost:8000/public/
```

Verifica en mÃ³vil, tablet, desktop. Si se ve bien, estÃ bien.

## Si Tarda en Mergear

Es porque estoy ocupado o revisar. Paciencia.
