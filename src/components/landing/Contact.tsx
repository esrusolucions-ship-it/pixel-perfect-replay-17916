import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, submitContactMessage, type ContactFormValues } from "@/lib/contact";
import { FadeIn } from "./FadeIn";

const emptyValues: ContactFormValues = { name: "", email: "", phone: "", message: "" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: emptyValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSent(false);
    setSubmitError(null);
    try {
      await submitContactMessage(values);
      reset(emptyValues);
      setSent(true);
    } catch {
      setSubmitError("No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.");
    }
  };

  const inputClass = "h-11 rounded-xl bg-background text-base";

  return (
    <section id="contacto" className="py-20 sm:py-28" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <p className="section-eyebrow">Contacto</p>
          <h2 id="contacto-title" className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Pásate a vernos o escríbenos
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-terracotta-strong">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Dirección</h3>
                  <p className="text-muted-foreground">Calle Mayor 12</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-terracotta-strong">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Horario</h3>
                  <p className="text-muted-foreground">Lunes a viernes: 7:30 – 20:00</p>
                  <p className="text-muted-foreground">Sábados y domingos: 8:30 – 14:00</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-terracotta-strong">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Teléfono</h3>
                  <a href="tel:+34910000000" className="text-muted-foreground hover:text-primary">
                    910 000 000
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-terracotta-strong">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">Correo</h3>
                  <a
                    href="mailto:hola@cafelaesquina.es"
                    className="break-all text-muted-foreground hover:text-primary"
                  >
                    hola@cafelaesquina.es
                  </a>
                </div>
              </li>
            </ul>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl bg-card p-6 shadow-card sm:p-8"
              aria-label="Formulario de contacto"
            >
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    className={`mt-1.5 ${inputClass}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  <FieldError id="name-error" message={errors.name?.message} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`mt-1.5 ${inputClass}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor="phone">
                    Teléfono <span className="font-normal text-muted-foreground">(opcional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`mt-1.5 ${inputClass}`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone")}
                  />
                  <FieldError id="phone-error" message={errors.phone?.message} />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="mt-1.5 rounded-xl bg-background text-base"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                  />
                  <FieldError id="message-error" message={errors.message?.message} />
                </div>
              </div>

              <Button type="submit" size="xl" className="mt-6 w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </Button>

              <div aria-live="polite">
                {sent && (
                  <p className="mt-4 flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-success">
                    <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
                    ¡Gracias! Te responderemos pronto
                  </p>
                )}
                {submitError && (
                  <p className="mt-4 text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
