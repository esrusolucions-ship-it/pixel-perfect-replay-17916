import { Button } from "@/components/ui/button";

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=75";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-16"
      aria-labelledby="hero-title"
    >
      <img
        src={HERO_IMAGE}
        alt="Interior de una cafetería con un cartel luminoso de «Café» y lámparas colgantes"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20">
        <div className="max-w-2xl text-hero-foreground">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hero-foreground/85">
            Cafetería de barrio · Calle Mayor 12
          </p>
          <h1 id="hero-title" className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Tu café de cada día, a la vuelta de la esquina
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-foreground/90 sm:text-lg">
            Café de especialidad, repostería hecha en casa y ese rincón tranquilo que apetece cada
            mañana.
          </p>
          <Button asChild variant="cta" size="xl" className="mt-8">
            <a href="#carta">Ver la carta</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
