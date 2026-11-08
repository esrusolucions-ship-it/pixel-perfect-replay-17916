import { beforeEach, describe, expect, it, vi } from "vitest";

const insert = vi.fn();
vi.mock("@/integrations/supabase/client", () => ({
  supabase: { from: vi.fn(() => ({ insert })) },
}));

import { supabase } from "@/integrations/supabase/client";
import { submitContactMessage } from "@/lib/contact";

const valid = { name: "Lucía", email: "lucia@example.com", phone: "", message: "Hola, ¿abrís el festivo?" };

describe("Envío del formulario de contacto", () => {
  beforeEach(() => {
    insert.mockReset();
  });

  it("guarda el mensaje en mensajes_contacto con teléfono vacío como nulo", async () => {
    insert.mockResolvedValue({ error: null });
    await submitContactMessage(valid);
    expect(supabase.from).toHaveBeenCalledWith("mensajes_contacto");
    expect(insert).toHaveBeenCalledWith({
      nombre: "Lucía",
      email: "lucia@example.com",
      telefono: null,
      mensaje: "Hola, ¿abrís el festivo?",
    });
  });

  it("falla si el guardado falla, para que el formulario muestre el error", async () => {
    insert.mockResolvedValue({ error: { message: "network down" } });
    await expect(submitContactMessage(valid)).rejects.toThrow();
  });
});
