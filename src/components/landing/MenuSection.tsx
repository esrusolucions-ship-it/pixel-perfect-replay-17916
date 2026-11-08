import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatPrice, menu } from "@/data/menu";
import { FadeIn } from "./FadeIn";

export function MenuSection() {
  return (
    <section id="carta" className="bg-secondary/60 py-20 sm:py-28" aria-labelledby="carta-title">
      <div className="mx-auto max-w-4xl px-5">
        <FadeIn>
          <div className="text-center">
            <p className="section-eyebrow">Carta</p>
            <h2 id="carta-title" className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              Lo que te espera en la barra
            </h2>
          </div>

          <Tabs defaultValue={menu[0].id} className="mt-10">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-2xl bg-card p-1.5 shadow-soft sm:grid-cols-4">
              {menu.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-xl py-2.5 text-sm text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {menu.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <ul className="divide-y divide-border rounded-2xl bg-card px-5 shadow-card sm:px-8">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4 py-5">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-primary">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 pt-0.5 font-semibold text-terracotta-strong">
                        {formatPrice(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
