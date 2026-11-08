import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">Café La Esquina</p>
          <p className="mt-2 text-sm text-primary-foreground/80">
            L-V 7:30–20:00 · S-D 8:30–14:00
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram de Café La Esquina"
            className="inline-flex size-11 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Facebook de Café La Esquina"
            className="inline-flex size-11 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"
          >
            <Facebook className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/20 px-5 pt-6 text-sm text-primary-foreground/75">
        © 2026 Café La Esquina
      </p>
    </footer>
  );
}
