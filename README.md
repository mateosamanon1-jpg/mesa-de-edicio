# Mesa de Edición

Agenda de entregas para los editores de la agencia: calendario, proyectos, clientes con sus carpetas de Drive, recordatorios y recuento de videos entregados.

- **App:** página estática (`index.html`) publicada con GitHub Pages. Se puede instalar en la pantalla de inicio (`manifest.webmanifest`, `sw.js`, íconos).
- **Datos:** Supabase (plan gratis). Cada editor ve solo sus proyectos; la cuenta dueña (la primera que se registró) ve los de todos.
- **Seguridad:** la clave que aparece en `index.html` es la clave *publicable* de Supabase, pensada para estar en el navegador. Lo que protege los datos son las reglas de acceso (Row Level Security) de la base.
