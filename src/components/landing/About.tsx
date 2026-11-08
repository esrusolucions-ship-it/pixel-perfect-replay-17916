import { Coffee, Croissant, Wifi } from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    text: "Granos seleccionados y tostados en pequeños lotes para un sabor redondo.",
  },
  {
    icon: Croissant,
    title: "Hecho en casa",
    text: "Tartas, bizcochos y galletas que horneamos cada mañana en nuestra cocina.",
  },
  {
    icon: Wifi,
    title: "Wifi y buen ambiente",
    text: "Mesas cómodas, enchufes y wifi gratis para trabajar o charlar sin prisa.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28" aria-labelledby="nosotros-title">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow">Nosotros</p>
            <h2 id="nosotros-title" className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              Un rincón de barrio con alma de cafetería
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              En Café La Esquina servimos café de especialidad preparado con calma y acompañado de
              repostería casera que horneamos cada día. Somos el sitio donde los vecinos se saludan
              por su nombre, donde el desayuno sabe a casa y donde siempre hay una mesa para ti.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=75"
            alt="Interior luminoso de la cafetería con mesas, sillas y plantas junto a la barra"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            loading="lazy"
          />
        </FadeIn>

        <FadeIn className="mt-14 grid gap-5 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl bg-card p-6 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-terracotta-strong">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
