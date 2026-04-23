# C√≥mo Contribuir

Si encontr√s un bug o ten√©s una idea, ac√ est√ c√≥mo hacer.

## Reportar un Bug

1. Abre un issue en GitHub
2. Describe qu√© pas√≥, qu√© esperabas que pase
3. Si pod√©s, inclu√≠ screenshots

Ejemplo:
```
T√≠tulo: El carrusel se queda en blanco en Safari

Pasos:
1. Abro el sitio en Safari
2. Espero 10 segundos
3. El carrusel deja de mostrar im√genes

Esperado: El carrusel sigue funcionando
Actual: Solo se ve blanco

Browser: Safari 17 en Mac
```

## Sugerir una Mejora

Abre una discussion o issue con tu idea. No hay "idea mala", solo ideas que no priorizamos.

## Mandar C√≥digo

1. Fork el repo
2. Crea una rama: `git checkout -b mi-feature`
3. Haz cambios (manten√© commits peque√os y descriptivos)
4. Push y abre un PR

Eso es.

## Est√ndares B√sicos

- HTML sem√ntico (usa `<section>`, `<article>`, no `<div>` anidados)
- CSS en BEM naming (`.component__element`)
- JS vanilla, sin librer√≠as innecesarias
- Comentarios solo si el c√≥digo no es obvio

## Commit Messages

```
feat: agregar secci√≥n de testimonios
fix: corregir carrusel en Safari
docs: actualizar CUSTOMIZATION.md
```

No necesita ser complicado.

## Testear Localmente

```bash
npm run serve
# Abre http://localhost:8000/public/
```

Verifica en m√≥vil, tablet, desktop. Si se ve bien, est√ bien.

## Si Tarda en Mergear

Es porque estoy ocupado o revisar. Paciencia.
