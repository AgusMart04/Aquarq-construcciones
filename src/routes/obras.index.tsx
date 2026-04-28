import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import heroImage from "../assets/aquarq-home-hero.jpg";
import poolImage from "../assets/aquarq-pool.jpg";
import quinchoImage from "../assets/aquarq-quincho.jpg";
import extensionImage from "../assets/aquarq-extension.jpg";
import progressImage from "../assets/aquarq-work-in-progress.jpg";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaButton } from "@/components/cta-button";
import {
  whatsappLink,
  callLink,
  CALL_PHONE_DISPLAY,
  obraCategories,
} from "@/lib/aquarq";

export const Route = createFileRoute("/obras/")({
  head: () => ({
    meta: [
      { title: "Obras realizadas — AQUARQ Constructora en Asunción" },
      {
        name: "description",
        content:
          "Conocé las obras de AQUARQ: casas, ampliaciones, piscinas y quinchos construidos en Asunción, Paraguay.",
      },
      { property: "og:title", content: "Obras realizadas por AQUARQ" },
      {
        property: "og:description",
        content: "Casas, ampliaciones, piscinas y quinchos construidos con criterio profesional.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ObrasIndex,
});

const categoryImages: Record<string, string> = {
  casas: heroImage,
  piscinas: poolImage,
  quinchos: quinchoImage,
  ampliaciones: extensionImage,
};

function ObrasIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
            Obras realizadas
          </p>
          <h1 className="text-balance text-4xl font-black sm:text-6xl">
            Proyectos construidos por AQUARQ
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Cada obra cuenta una historia: una familia que crece, un espacio
            soñado, un proyecto que se vuelve realidad. Explorá nuestros trabajos
            por categoría.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
          {obraCategories.map((cat) => (
            <Link
              key={cat.slug}
              to="/obras/$category"
              params={{ category: cat.slug }}
              className="group relative block h-[360px] overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={categoryImages[cat.slug] ?? progressImage}
                alt={cat.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-background">
                <p className="text-sm font-bold text-sun">{cat.short}</p>
                <h2 className="mt-1 text-3xl font-black">{cat.title}</h2>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold">
                  Ver obras <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-sun-water p-8 text-center shadow-lift sm:p-14">
          <h2 className="text-balance text-3xl font-black text-foreground sm:text-5xl">
            ¿Te imaginás tu obra acá?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-foreground/78">
            Contanos qué tenés en mente y te orientamos sin compromiso.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton
              href={whatsappLink("Hola AQUARQ, vi sus obras y quiero solicitar presupuesto.")}
            >
              Pedir presupuesto <ArrowRight className="h-5 w-5" />
            </CtaButton>
            <CtaButton href={callLink} variant="secondary">
              <Phone className="h-5 w-5" /> Llamar {CALL_PHONE_DISPLAY}
            </CtaButton>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
