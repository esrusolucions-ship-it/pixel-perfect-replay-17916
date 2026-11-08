# Café La Esquina — Landing page

Landing de una sola página para una cafetería de barrio: presentación, carta por categorías y formulario de contacto.

- **Previsualización pública:** https://pixel-perfect-replay-17916.lovable.app
- **Construida con:** Lovable · React · TypeScript · Vite · Tailwind CSS
- **Backend:** Lovable Cloud (base de datos para los mensajes del formulario)

## Secciones

1. Navegación fija con scroll suave y menú hamburguesa en móvil
2. Hero con llamada a la acción ("Ver la carta")
3. Nosotros, con tres tarjetas de valores
4. Carta con pestañas por categoría (Cafés, Desayunos, Repostería, Bebidas frías)
5. Contacto: dirección, horario y formulario
6. Footer

Diseño mobile-first, probado en móvil y en escritorio.

## Cómo arrancar el proyecto en local

Requisitos: Node.js 18 o superior y npm.

```bash
git clone <URL-DEL-REPOSITORIO>
cd <NOMBRE-DEL-REPOSITORIO>
npm install
npm run dev
```

La web queda disponible en la dirección que indica la terminal (normalmente http://localhost:8080 o http://localhost:5173).

Las variables de conexión con Lovable Cloud están en el archivo `.env`. Son claves públicas (*publishable*): la seguridad de los datos depende de las políticas de la base de datos, no de ocultar estas claves.

## Qué es real y qué está simulado

**Simulado (datos de ejemplo):**

- El nombre "Café La Esquina", la dirección, el teléfono, el correo y el horario son ficticios.
- Los productos y precios de la carta son de ejemplo. Están en un array en un archivo de datos aparte (carpeta `src/data/`), para poder editarlos sin tocar los componentes.
- Las fotos son de Unsplash.
- Los enlaces a Instagram y Facebook apuntan a `#`.

**Real (funcional):**

- El formulario de contacto guarda los mensajes en la tabla `mensajes_contacto` de Lovable Cloud.
- Validación en el navegador: nombre obligatorio, email con formato válido, teléfono opcional y mensaje de 10 a 1.000 caracteres.
- La base de datos vuelve a validar las mismas reglas y rechaza fechas de envío falsificadas.
- Seguridad (RLS): los visitantes pueden **enviar** mensajes, pero **no leerlos**.

## Cómo reiniciar los datos de ejemplo

**Mensajes del formulario:**

- Desde Lovable: **Database → tabla `mensajes_contacto`** → seleccionar las filas → eliminar.
- O por SQL, desde el editor de la base de datos:

```sql
delete from mensajes_contacto;
```

**Carta:**

- Editar o restaurar el archivo de datos de la carta en `src/data/`. Para volver a la versión original, recuperar ese archivo desde el historial de Git (`git checkout <commit> -- src/data/<archivo>`).
