import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, Ruler } from "lucide-react";

import heroImage from "../assets/aquarq-home-hero.jpg";
import poolImage from "../assets/aquarq-pool.jpg";
import quinchoImage from "../assets/aquarq-quincho.jpg";
import extensionImage from "../assets/aquarq-extension.jpg";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaButton } from "@/components/cta-button";
import { ObraDetailDialog } from "@/components/obra-detail-dialog";
import {
  whatsappLink,
  callLink,
  CALL_PHONE_DISPLAY,
  obraCategories,
  type ObraCategory,
} from "@/lib/aquarq";
import { getObrasByCategory, type Obra } from "@/lib/obras-data";

type CategoryDetail = {
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
  cover: string;
};

const detailMap: Record<ObraCategory, CategoryDetail> = {
  casas: {
    title: "Casas",
    tagline: "Viviendas pensadas para tu forma de vivir",
    intro:
      "Diseñamos y construimos casas únicas, desde el primer boceto hasta la entrega de llaves. Cada vivienda se piensa para tu familia, tu terreno y tu manera de habitar el espacio.",
    highlights: [
      "Diseño arquitectónico personalizado",
      "Acompañamiento durante toda la obra",
      "Materiales y terminaciones de calidad",
      "Plazos y presupuesto claros desde el inicio",
    ],
    cover: heroImage,
  },
  piscinas: {
    title: "Piscinas",
    tagline: "Espacios para disfrutar todo el año",
    intro:
      "Construimos piscinas chicas y grandes, integradas al diseño de tu casa o quincho. Pensamos cada detalle para que sea el lugar favorito de tu familia.",
    highlights: [
      "Diseño adaptado al terreno y al uso",
      "Acabados resistentes al clima de Asunción",
      "Iluminación, decks y bordes a medida",
      "Equipamiento de filtrado y mantenimiento",
    ],
    cover: poolImage,
  },
  quinchos: {
    title: "Quinchos",
    tagline: "Lugares para compartir momentos",
    intro:
      "Quinchos pensados para reuniones, asados y descanso. Cálidos, funcionales y bien terminados, con la mejor relación entre diseño y costo.",
    highlights: [
      "Parrillas, hornos y barras integradas",
      "Cubiertas firmes y ventiladas",
      "Iluminación cálida para uso nocturno",
      "Conectividad con piscina y jardín",
    ],
    cover: quinchoImage,
  },
  ampliaciones: {
    title: "Ampliaciones",
    tagline: "Más espacio sin mudarte",
    intro:
      "Ampliamos tu casa actual con criterio: respetamos lo existente, mejoramos la distribución y sumamos los metros que tu familia necesita.",
    highlights: [
      "Estudio previo de la vivienda actual",
      "Integración estética con lo existente",
      "Obra organizada para minimizar molestias",
      "Soluciones para crecer en altura o en planta",
    ],
    cover: extensionImage,
  },
};

export const Route = createFileRoute("/obras/$category")({
  loader: ({ params }) => {
    const slug = params.category as ObraCategory;
    if (!detailMap[slug]) throw notFound();
    return { slug, detail: detailMap[slug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Obras — AQUARQ" }] };
    }
    const { detail } = loaderData;
    const title = `${detail.title} — Obras de AQUARQ en Asunción`;
    return {
      meta: [
        { title },
        { name: "description", content: detail.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: detail.intro },
        { property: "og:image", content: detail.cover },
        { name: "twitter:image", content: detail.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl font-black">Categoría no encontrada</h1>
        <p className="mt-3 text-muted-foreground">Esta sección de obras no existe.</p>
        <Link
          to="/obras"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground"
        >
          Ver todas las obras
        </Link>
      </div>
    </main>
  ),
  component: ObraDetail,
});

function ObraDetail() {
  const { slug, detail } = Route.useLoaderData();
  const otherCategories = obraCategories.filter((c) => c.slug !== slug);
  const intent = obraCategories.find((c) => c.slug === slug)?.intent ?? detail.title;
  const projects = getObrasByCategory(slug);

  const [selected, setSelected] = useState<Obra | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (obra: Obra) => {
    setSelected(obra);
    setOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-24">
        <img
          src={detail.cover}
          alt={`Obra de ${detail.title} construida por AQUARQ`}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/30 to-background" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <Link
              to="/obras"
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-sm font-bold text-foreground shadow-soft backdrop-blur transition hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" /> Todas las obras
            </Link>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sun">
              {detail.tagline}
            </p>
            <h1 className="mt-2 text-balance text-4xl font-black text-background sm:text-6xl">
              {detail.title}
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">¿Qué hacemos?</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{detail.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {detail.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                href={whatsappLink(`Hola AQUARQ, quiero ${intent}. ¿Podemos coordinar un presupuesto?`)}
              >
                Pedir presupuesto <ArrowRight className="h-5 w-5" />
              </CtaButton>
              <CtaButton href={callLink} variant="secondary">
                <Phone className="h-5 w-5" /> Llamar {CALL_PHONE_DISPLAY}
              </CtaButton>
            </div>
          </div>
          <img
            src={detail.cover}
            alt={`Vista destacada de obra de ${detail.title}`}
            loading="lazy"
            className="h-[480px] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </section>

      {/* PROYECTOS DE LA CATEGORÍA */}
      <section className="bg-warm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
                Proyectos realizados
              </p>
              <h2 className="text-balance text-3xl font-black sm:text-4xl">
                Obras de {detail.title.toLowerCase()} construidas por AQUARQ
              </h2>
              <p className="mt-3 text-muted-foreground">
                Hacé clic en cualquier obra para ver el detalle completo, fotos
                y características del proyecto.
              </p>
            </div>
            <p className="text-sm font-bold text-muted-foreground">
              {projects.length} {projects.length === 1 ? "obra" : "obras"}
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-lg font-bold">Pronto sumamos obras a esta sección.</p>
              <p className="mt-2 text-muted-foreground">
                Mientras tanto, contanos tu proyecto y te orientamos sin compromiso.
              </p>
              <div className="mt-5 flex justify-center">
                <CtaButton
                  href={whatsappLink(`Hola AQUARQ, quiero ${intent}.`)}
                >
                  Hablar por WhatsApp <ArrowRight className="h-5 w-5" />
                </CtaButton>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((obra) => (
                <button
                  key={obra.id}
                  type="button"
                  onClick={() => handleOpen(obra)}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={obra.images[0]}
                      alt={obra.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {obra.status && (
                      <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-black uppercase tracking-wider text-foreground shadow-soft backdrop-blur">
                        {obra.status}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-black">{obra.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-bold text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> {obra.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Ruler className="h-3.5 w-3.5 text-primary" /> {obra.size}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-foreground/80">
                      {obra.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary transition group-hover:gap-3">
                      Ver detalle <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black sm:text-3xl">Otras obras que hacemos</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                to="/obras/$category"
                params={{ category: cat.slug }}
                className="group rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="text-sm font-bold text-primary">{cat.short}</p>
                <p className="mt-2 text-2xl font-black">{cat.title}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Ver más <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />

      <ObraDetailDialog obra={selected} open={open} onOpenChange={setOpen} />
    </main>
  );
}
