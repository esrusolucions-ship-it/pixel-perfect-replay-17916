import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact";

const valid = { name: "Lucía", email: "lucia@example.com", phone: "", message: "Hola, ¿abrís el festivo?" };

function firstError(input: Partial<typeof valid>, field: keyof typeof valid) {
  const res = contactSchema.safeParse({ ...valid, ...input });
  if (res.success) return undefined;
  return res.error.issues.find((i) => i.path[0] === field)?.message;
}

describe("Formulario de contacto", () => {
  it("acepta un mensaje válido con teléfono vacío", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("exige el nombre", () => {
    expect(firstError({ name: "   " }, "name")).toBe("El nombre es obligatorio.");
  });

  it("exige un email con formato válido", () => {
    expect(firstError({ email: "lucia@" }, "email")).toBe("Introduce un email válido.");
  });

  it("exige el mensaje", () => {
    expect(firstError({ message: "" }, "message")).toBe("El mensaje es obligatorio.");
  });

  it("exige un mensaje de al menos 10 caracteres", () => {
    expect(firstError({ message: "Hola" }, "message")).toBe(
      "El mensaje debe tener al menos 10 caracteres.",
    );
    expect(contactSchema.safeParse({ ...valid, message: "1234567890" }).success).toBe(true);
  });
});
