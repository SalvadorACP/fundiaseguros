# Fundia Seguros

Sitio institucional y de captación de prospectos para Fundia Seguros en Mazatlán, Sinaloa.

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Los datos editables de contacto, ubicación y redes sociales están centralizados en `src/config/site.ts`.

## Equipo de Fundia

Las fotografías y fichas del equipo se administran desde `src/content/team.ts`.
Para agregar un integrante:

1. Coloca su imagen en `public/images/equipoFundia/` e impórtala en `src/content/team.ts`.
2. Agrega un objeto a `teamMembers` con un `id` único, nombre, cargo e imagen.
3. Incluye, cuando estén disponibles, `biography`, `phone` (formato internacional), `phoneDisplay` y `email`.

El orden de la lista determina el orden de las fotografías. La galería del inicio y la página `/equipo` se actualizan desde esa misma lista. En el inicio se muestra una ficha a la vez, con avance automático cada 3 segundos y regreso a la primera después de la última. El avance se pausa al colocar el cursor o el foco dentro del carrusel y respeta la preferencia de movimiento reducido; los indicadores permiten elegir cualquier integrante. Las imágenes se muestran completas, sin recortes.

## Validación

```bash
npm run lint
npm run build
```
