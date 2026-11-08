import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero, HERO_IMAGE } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { MenuSection } from "@/components/landing/MenuSection";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const TITLE = "Café La Esquina · Café de especialidad y repostería casera";
const DESCRIPTION =
  "Cafetería de barrio en Calle Mayor 12: café de especialidad, desayunos y repostería hecha en casa. Consulta la carta y escríbenos.";
const OG_IMAGE = HERO_IMAGE.replace("w=1920", "w=1200&h=630");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
