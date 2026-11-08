import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre es obligatorio." })
    .max(100, { message: "El nombre no puede superar los 100 caracteres." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "El email es obligatorio." })
    .email({ message: "Introduce un email válido." })
    .max(255, { message: "El email no puede superar los 255 caracteres." }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "El teléfono no puede superar los 20 caracteres." })
    .regex(/^[0-9+\s()-]*$/, { message: "Introduce un teléfono válido." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "El mensaje es obligatorio." })
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(1000, { message: "El mensaje no puede superar los 1000 caracteres." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * Envía el mensaje de contacto.
 * De momento no hay backend conectado: simula el envío.
 * Para conectarlo más adelante, sustituye el cuerpo de esta función por la llamada real.
 */
export async function submitContactMessage(values: ContactFormValues): Promise<void> {
  const data = contactSchema.parse(values);
  await new Promise((resolve) => setTimeout(resolve, 900));
  void data;
}
