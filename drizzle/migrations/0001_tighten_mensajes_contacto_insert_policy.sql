DROP POLICY IF EXISTS "Cualquiera puede enviar un mensaje de contacto" ON public.mensajes_contacto;

CREATE POLICY "Cualquiera puede enviar un mensaje de contacto valido"
ON public.mensajes_contacto
FOR INSERT
TO anon, authenticated
WITH CHECK (
  nombre = btrim(nombre)
  AND char_length(nombre) BETWEEN 1 AND 100
  AND email = btrim(email)
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND (
    telefono IS NULL
    OR (char_length(telefono) BETWEEN 1 AND 20 AND telefono ~ '^[0-9+()[:space:]-]+$')
  )
  AND mensaje = btrim(mensaje)
  AND char_length(mensaje) BETWEEN 10 AND 1000
  AND created_at BETWEEN now() - interval '5 minutes' AND now() + interval '5 minutes'
);