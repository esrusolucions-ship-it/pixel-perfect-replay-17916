CREATE TABLE public.mensajes_contacto (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL CHECK (char_length(btrim(nombre)) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255 AND position('@' in email) > 1),
  telefono TEXT CHECK (telefono IS NULL OR char_length(telefono) <= 20),
  mensaje TEXT NOT NULL CHECK (char_length(btrim(mensaje)) BETWEEN 10 AND 1000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.mensajes_contacto TO anon, authenticated;
GRANT ALL ON public.mensajes_contacto TO service_role;

ALTER TABLE public.mensajes_contacto ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar un mensaje de contacto"
ON public.mensajes_contacto
FOR INSERT
TO anon, authenticated
WITH CHECK (true);