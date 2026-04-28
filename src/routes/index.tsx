import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PencilRuler,
  HardHat,
  KeyRound,
  Search,
  X,
} from "lucide-react";

import heroImage from "../assets/aquarq-home-hero.jpg";
import extensionImage from "../assets/aquarq-extension.jpg";
import quinchoImage from "../assets/aquarq-quincho.jpg";
import poolImage from "../assets/aquarq-pool.jpg";
import progressImage from "../assets/aquarq-work-in-progress.jpg";
import emotionalImage from "../assets/aquarq-emotional-home.jpg";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaButton } from "@/components/cta-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  whatsappLink,
  callLink,
  CALL_PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  obraCategories,
  categorySuggestions,
  type ObraCategory,
} from "@/lib/aquarq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQUARQ Constructora en Asunción" },
      {
        name: "description",
        content:
          "Construimos viviendas, ampliaciones, piscinas y quinchos en Asunción. Pedí tu presupuesto por WhatsApp.",
      },
      { property: "og:title", content: "AQUARQ — Construimos el lugar donde vas a vivir" },
      {
        property: "og:description",
        content: "Viviendas, ampliaciones, piscinas y quinchos con atención personalizada en Asunción.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const services: Array<{
  title: string;
  text: string;
  image: string;
  category: ObraCategory;
  label: string;
}> = [
  {
    title: "Casas",
    text: "Convertimos tu idea en una vivienda pensada para tu forma de vivir.",
    image: heroImage,
    category: "casas",
    label: "Hogares terminados",
  },
  {
    title: "Piscinas",
    text: "Diseñamos y construimos piscinas chicas o grandes para tu familia.",
    image: poolImage,
    category: "piscinas",
    label: "Espacios para disfrutar",
  },
  {
    title: "Quinchos",
    text: "Espacios cálidos para reuniones, descanso y momentos con quienes querés.",
    image: quinchoImage,
    category: "quinchos",
    label: "Lugares para compartir",
  },
  {
    title: "Ampliaciones",
    text: "Más espacio, mejor distribución y una obra integrada a tu hogar actual.",
    image: extensionImage,
    category: "ampliaciones",
    label: "Más espacio en casa",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Nos escribís",
    text: "Por WhatsApp contás qué tenés en mente.",
  },
  {
    icon: Search,
    title: "Entendemos tu idea",
    text: "Conversamos sobre necesidades, terreno y plazos.",
  },
  {
    icon: PencilRuler,
    title: "Diseñamos y presupuestamos",
    text: "Te entregamos una propuesta clara y detallada.",
  },
  {
    icon: HardHat,
    title: "Construimos tu obra",
    text: "Ejecutamos con cuadrilla propia y seguimiento.",
  },
  {
    icon: KeyRound,
    title: "Disfrutás tu espacio",
    text: "Te entregamos llave en mano, listo para vivir.",
  },
];

function Index() {
  const [openCategory, setOpenCategory] = useState<ObraCategory | null>(null);
  const activeCat = openCategory ? obraCategories.find((c) => c.slug === openCategory) : null;
  const activeSuggestion = openCategory ? categorySuggestions[openCategory] : null;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[92vh] pt-24 signature-ripple">
        <img
          src={heroImage}
          alt="Casa moderna con piscina construida para una familia"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-aquarq-hero" />
        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-background">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-card/92 px-4 py-2 text-sm font-bold text-foreground shadow-soft backdrop-blur">
              <CalendarClock className="h-4 w-4 text-primary" aria-hidden="true" />
              Atención personalizada en horario de oficina
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Construimos el lugar donde vas a vivir
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-background/90 sm:text-2xl">
              Viviendas, ampliaciones, piscinas y quinchos en Asunción.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                href={whatsappLink("Hola AQUARQ, quiero solicitar presupuesto para mi proyecto.")}
              >
                Solicitar presupuesto por WhatsApp <ArrowRight className="h-5 w-5" />
              </CtaButton>
              <CtaButton href={callLink} variant="secondary">
                <Phone className="h-5 w-5" /> Llamar {CALL_PHONE_DISPLAY}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* OBRAS / SOLUCIONES (fusionado) */}
      <section id="obras" className="bg-warm px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
                Obras y soluciones
              </p>
              <h2 className="text-balance text-3xl font-black sm:text-5xl">
                Obras pensadas para cómo querés vivir
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Cada proyecto es real, ejecutado por nuestro equipo. Conocé las
                obras por categoría y descubrí ejemplos para inspirarte.
              </p>
            </div>
            <Link
              to="/obras"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-black text-secondary-foreground transition hover:-translate-y-0.5"
            >
              Ver todas las obras <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/obras/$category"
                params={{ category: service.category }}
                className="group relative block h-[380px] overflow-hidden rounded-2xl bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-background">
                  <p className="text-sm font-bold text-sun">{service.label}</p>
                  <h3 className="mt-1 text-3xl font-black">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-background/90">{service.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black">
                    Ver ejemplos <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN EMOCIONAL */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Lightbulb className="mb-5 h-10 w-10 text-sun" aria-hidden="true" />
            <h2 className="text-balance text-4xl font-black leading-tight sm:text-6xl">
              No construimos solo obras, construimos espacios para tu vida
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Cada decisión de obra tiene un objetivo: que tu casa, ampliación,
              piscina o quincho se sienta propio desde el primer día.
            </p>
          </div>
          <img
            src={emotionalImage}
            alt="Familia disfrutando un espacio terminado"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[520px] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </section>

      {/* ¿QUÉ QUERÉS CONSTRUIR? con MODAL */}
      <section className="bg-secondary px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
            Empezá por aquí
          </p>
          <h2 className="text-balance text-3xl font-black sm:text-5xl">
            ¿Qué querés construir?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/72">
            Elegí una opción y te damos información, sugerencias y todo lo que
            tenés que saber antes de empezar tu obra.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {obraCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setOpenCategory(cat.slug)}
                className="group rounded-2xl bg-card p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus:ring-4 focus:ring-primary/25"
              >
                <span className="block text-2xl font-black">{cat.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{cat.short}</span>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-primary">
                  Ver sugerencias <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={openCategory !== null} onOpenChange={(o) => !o && setOpenCategory(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto p-0">
          {activeCat && activeSuggestion && (
            <>
              <button
                type="button"
                onClick={() => setOpenCategory(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground shadow-soft transition hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={
                    services.find((s) => s.category === activeCat.slug)?.image ?? heroImage
                  }
                  alt={activeCat.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-6 text-background">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sun">
                    {activeCat.short}
                  </p>
                  <DialogTitle className="mt-1 text-3xl font-black text-background">
                    {activeCat.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
                <DialogHeader className="space-y-3 text-left">
                  <DialogDescription className="text-base text-foreground/80">
                    {activeSuggestion.intro}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-warm px-4 py-2 text-sm font-bold text-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  Tiempo estimado: {activeSuggestion.estimatedTime}
                </div>

                <div className="mt-6">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary">
                    <Lightbulb className="h-4 w-4" /> Sugerencias para tu obra
                  </h4>
                  <ul className="space-y-2">
                    {activeSuggestion.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-primary">
                    Información que nos ayuda
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSuggestion.needToKnow.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <CtaButton
                    href={whatsappLink(
                      `Hola AQUARQ, quiero ${activeCat.intent}. ¿Podemos coordinar un presupuesto?`,
                    )}
                  >
                    Pedir presupuesto <ArrowRight className="h-5 w-5" />
                  </CtaButton>
                  <Link
                    to="/obras/$category"
                    params={{ category: activeCat.slug }}
                    onClick={() => setOpenCategory(null)}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-bold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    Ver ejemplos
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* PROCESO SIMPLE — visual */}
      <section id="proceso" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
              Proceso simple
            </p>
            <h2 className="text-balance text-3xl font-black sm:text-5xl">
              De tu mensaje a tu nuevo espacio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              5 pasos claros, sin sorpresas. Te acompañamos desde el primer
              mensaje hasta la entrega.
            </p>
          </div>

          <div className="relative">
            {/* línea conectora horizontal en desktop */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-sun via-primary to-sun lg:block" />

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-sun text-sun-foreground shadow-lift ring-4 ring-background">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <div className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-3 py-0.5 text-xs font-black text-primary-foreground">
                        Paso {index + 1}
                      </div>
                      <h3 className="mt-3 text-lg font-black">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 text-center">
            <CtaButton
              href={whatsappLink("Hola AQUARQ, quiero arrancar el paso 1: contarles mi proyecto.")}
            >
              Empezar por el paso 1 <ArrowRight className="h-5 w-5" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="bg-foreground px-4 py-20 text-background sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sun">
              Sobre nosotros
            </p>
            <h2 className="text-balance text-3xl font-black sm:text-5xl">
              AQUARQ combina cercanía, criterio profesional y experiencia real en obra
            </h2>
            <p className="mt-6 text-lg leading-8 text-background/78">
              AQUARQ es una empresa de construcciones en general conformada por
              profesionales altamente capacitados, especializada en viviendas,
              ampliaciones y proyectos a medida como piscinas y quinchos.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Cercanía", "Personalización", "Obra real"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-background/10 px-4 py-3 font-bold"
                >
                  <CheckCircle2 className="h-5 w-5 text-sun" /> {item}
                </div>
              ))}
            </div>
          </div>
          <img
            src={progressImage}
            alt="Obra residencial en proceso"
            loading="lazy"
            width={1200}
            height={900}
            className="h-[500px] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-sun-water p-8 text-center shadow-lift sm:p-14">
          <h2 className="text-balance text-4xl font-black text-foreground sm:text-6xl">
            Tu proyecto empieza con un mensaje
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-foreground/78">
            Contanos qué querés construir y te orientamos con una atención directa,
            clara y sin vueltas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton
              href={whatsappLink("Hola AQUARQ, quiero empezar mi proyecto y solicitar presupuesto.")}
            >
              WhatsApp <ArrowRight className="h-5 w-5" />
            </CtaButton>
            <CtaButton href={callLink} variant="secondary">
              <Phone className="h-5 w-5" /> Llamar {CALL_PHONE_DISPLAY}
            </CtaButton>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-warm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-3xl font-black sm:text-5xl">Contacto</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {CONTACT_LOCATION} · Lunes a viernes, horario de oficina.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5"
            >
              Ir al formulario <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={whatsappLink("Hola AQUARQ, quiero solicitar un presupuesto.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <Phone className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                WhatsApp
              </p>
              <span className="break-words text-lg font-black">{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={callLink}
              className="rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <Phone className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Llamadas
              </p>
              <span className="break-words text-lg font-black">{CALL_PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <Mail className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <span className="break-all text-lg font-black">{CONTACT_EMAIL}</span>
            </a>
            <a
              href="https://www.google.com/maps/search/Asunci%C3%B3n%2C+Paraguay"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <MapPin className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Ubicación
              </p>
              <span className="break-words text-lg font-black">{CONTACT_LOCATION}</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
